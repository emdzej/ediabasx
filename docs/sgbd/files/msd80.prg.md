# msd80.prg

## General

|  |  |
| --- | --- |
| File | msd80.prg |
| Type | PRG |
| Jobs | 373 |
| Tables | 175 |
| Origin | BMW EA-740 Lorch |
| Revision | 7.300 |
| Author | P&Z EA-740 Berger, P&Z EA-740 Kunze |
| ECU Comment | SGBD für MSD80 / MSD81 C-Muster mit SW 4CC3NA0S |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | MSD80 / MSD81 fuer N53 und N54 mit EWS4 oder CAS  |  |  |
| ORIGIN | string | BMW EA-740 Lorch |  |  |
| REVISION | string | 7.300 |  |  |
| AUTHOR | string | P&Z EA-740 Berger, P&Z EA-740 Kunze |  |  |
| COMMENT | string | SGBD für MSD80 / MSD81 C-Muster mit SW 4CC3NA0S |  |  |
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

### _STATUS_BZEINFO

0x22401A _STATUS_BZEINFO Infospeicher Batterie Zustands Erkennung (BZE) auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### _STATUS_GENINFO

0x22401B _STATUS_GENINFO Infospeicher Generatordiagnose erweitert auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### HS_LOESCHEN

0x3103 HS_LOESCHEN Historyspeicher loeschen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### INNENTEMP_LESEN

0x301001 INNENTEMP_LESEN Steuergeraete-Innentemperatur auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### RESET_CRU_OFF

0x31F4 RESET_CRU_OFF Bedingungen fuer reversible und irreversible Tempomatabschaltung ruecksetzen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

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

### START_SYSTEMCHECK_GEN

0x312A START_SYSTEMCHECK_GEN Diagnosefunktion Generatortest Aktivierung: Drehzahl <> 0 1/min UND gemessene Spannung in Motorsteuerung < gemessene Spannung am Generator UND Auslastungsgrad Generator < K_DFSCHWGENTEST UND Generatorfehler vorhanden = 0 Activation: N <> 0 UND UB < U_GEN UND DFSIGGEN < K_DFSCHWGENTEST UND GENIUTESTERR = 0

_No arguments._

### START_SYSTEMCHECK_GLF

0x31D5 START_SYSTEMCHECK_GLF Ansteuern Gesteuerte Luftfuehrung Systemcheck Aktivierung: Testeransteuerung obere Luftklappe = AUS UND Testeransteuerung untere Luftklappe = AUS UND Batteriezustand in Ordnung = JA UND Startverriegelung des Klappentests = AUS Activation: LV_ECRAS_UP_EXT_ADJ = 0 UND LV_ECRAS_DOWN_EXT_ADJ = 0 UND LV_CDN_VB_MIN_DIAG = 1 UND LV_ECRAS_EOL_INH = 0

_No arguments._

### START_SYSTEMCHECK_IGR_AUS

0x31F7 START_SYSTEMCHECK_IGR_AUS Ansteuerung Intelligente Generatorregelung deaktivieren Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### START_SYSTEMCHECK_L_REGELUNG_AUS

0x31D9 START_SYSTEMCHECK_L_REGELUNG_AUS Ansteuerung Lambdaregelung deaktivieren Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### START_SYSTEMCHECK_L_SONDE

0x31DF START_SYSTEMCHECK_L_SONDE Ansteuern Diagnosefunktion vertauschte Lambdasonden Aktivierung: Klemme 15 = EIN UND Leerlauf UND Motortemperatur > 77 Grad C UND Abgastemperatur[i] > -48 Grad C UND Lambdasondensignal[i] = EIN UND Bereitschaft Lambdasonde hinter Katalsyator Bank[i] rueckgesetzt = EIN UND Status Lambdasondenheizung vor Katalysator Bank[i] = LSH_POW_CTL UND Status Lambdasondenheizung hinter Katalysator Bank[i] = LSH_POW_CTL UND Startverriegelung Lambdasonden aus Signalplausibilitaetstest Bank[i] = AUS (i = 1 FUER Bank 1, i = 2 FUER Bank 2) Activation: LV_IGK = 1 UND LV_IS = 1 UND TCO > C_TCO_MIN_VLS_EOL UND TEG_CAT_DOWN_MDL[i] > C_TEG_CAT_DOWN_EOL UND LV_LAMB_LS_UP_VLD[i] = 1 UND LV_LS_DOWN_READY[i] = 1 UND STATE_LSH_UP[i] = LSH_POW_CTL UND STATE_LSH_DOWN[i] = LSH_POW_CTL UND LV_DIAG_ACT_INH_LS_UP_DOWN[i] = 0 (i = 1 FUER Bank 1, i = 2 FUER Bank 2)

_No arguments._

### START_SYSTEMCHECK_LLERH

0x3126 START_SYSTEMCHECK_LLERH Ansteuern Diagnosefunktion Leerlauf-Erhoehung Aktivierung: Klemme 15 = EIN UND Motorstatus = (Leerlauf ODER Teillast) UND Drehzahl < 3000 1/min UND Ganginfo = 0 UND Geschwindigkeit < 5 km/h UND (Kupplungsschalter = AUS FUER Automatikgetriebe = AUS ODER SMG_Steuergeraet = AUS) UND (Bremsschalter = AUS FUER SMG_Steuergeraet = EIN) Activation: LV_IGK = 1 UND STATE_ENG = (IS ODER PL) UND N < C_N_MAX_KWP UND GEAR_INFO = 0h UND VS <= C_VS_MAX_KWP UND (LV_CS = 0 Fuer LV_AT = 0 UND LV_VAR_AMT = 0) UND (LV_BRAKE_DET = 0 FUER LV_VAR_AMT = 1)

| Name | Type | Description |
| --- | --- | --- |
| LL_WERT | unsigned long | LL-Sollwert 0 bis 3000 1/min N_SP_IS_EXT_ADJ   Einheit: rpm   Min: 0 Max: 10000 |

### START_SYSTEMCHECK_ODR

0x312C START_SYSTEMCHECK_ODR Diagnosefunktion Oeldruckregelung Aktivierung: Leerlauf Activation: LV_IS = 1

_No arguments._

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

### STATUS_AGR

0x30BE01 STATUS_AGR AbgasRueckfuehr (AGR) Ventil auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_AN_LUFTTEMPERATUR

0x300A01 STATUS_AN_LUFTTEMPERATUR Ansauglufttemperatur 1 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_ANWS

0x30EE01 STATUS_ANWS Vanos Auslass Ventil auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_BETRIEBSART

0x225FF8 STATUS_BETRIEBSART Betriebsarten auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_BLS

0x300201 STATUS_BLS Bremslichtschalter auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_BLTS

0x300301 STATUS_BLTS Bremslichttestschalter auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_CODIERUNG_ASMOT

0x223260 STATUS_CODIERUNG_ASMOT Codierung elektrische Diagnose der Funktion Abschaltung Klemme 15 auslesen

_No arguments._

### STATUS_CODIERUNG_BZE

0x223230 STATUS_CODIERUNG_BZE Codierung fuer BZE (Batterie Zustands Erkennung) auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

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

### STATUS_CODIERUNG_PROTOKOLL

0x223030 STATUS_CODIERUNG_PROTOKOLL Codierung Protokoll auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_CODIERUNG_SPA

0x223220 STATUS_CODIERUNG_SPA Codierung fuer SPA (Schaltpunktanzeige) auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_CODIERUNG_VMAX

0x223010 STATUS_CODIERUNG_VMAX Codierung fuer maximale Geschwindigkeit auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_CODIERUNG_XENON

0x223211 STATUS_CODIERUNG_XENON Codierung fuer Xenon-Lichtverbau auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_DESULFATISIERUNG

0x332D STATUS_DESULFATISIERUNG Auslesen Desulfatisierung Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_DESULFATISIERUNG_FAHR

0x332F STATUS_DESULFATISIERUNG_FAHR Auslesen Desulfatisierung Fahrbetrieb Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

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

### STATUS_DISA

0x30C601 STATUS_DISA Variable Sauganlage (DISA) Klappe auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_DISA2

0x30AE01 STATUS_DISA2 Variable Sauganlage (DISA) Klappe2 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_DKH

0x309E01 STATUS_DKH Drosselklappenbeheizung auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_DKP_VOLT

0x302A01 STATUS_DKP_VOLT Drosselklappe auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

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

### STATUS_EWAP

0x30BF01 STATUS_EWAP elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_FWV1

0x301E01 STATUS_FWV1 Fahrerwunschversorgung 1 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_FWV2

0x301F01 STATUS_FWV2 Fahrerwunschversorgung 2 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_GLF

0x30C301 STATUS_GLF Gesteuerte Luftfuehrung auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_GLF2

0x30A401 STATUS_GLF2 Gesteuerte Luftfuehrung Klappe 2 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

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

### STATUS_KDF

0x301A01 STATUS_KDF Kraftstoffdruck im Einspritzsystem auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_KDFN

0x303F01 STATUS_KDFN Kraftstoffdruck im Niederdruckbereich auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_KFT

0x30C901 STATUS_KFT Kennfeldthermostat auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_KGEH

0x30AD01 STATUS_KGEH Kurbelgehaeuseentlueftungsheizung auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_KLANN

0x33E4 STATUS_KLANN Auslesen Klann-Adaptionswerte (Anforderung aus CP10798) Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_KOREL

0x30C701 STATUS_KOREL Klimakompressor-Relais auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

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

0x225FF0 STATUS_LL_ABGLEICH Abgleichwert LL (Leerlauf) auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_LMM_MASSE

0x302501 STATUS_LMM_MASSE Luftmassenmesser 1 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

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

### STATUS_LVS

0x224030 STATUS_LVS LaufruheVerbesserungsSystem auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_LVSZYL

0x224031 STATUS_LVSZYL LaufruheVerbesserungsSystem Zylinderstatistik auslesen

_No arguments._

### STATUS_MESSWERTE

0x224000 STATUS_MESSWERTE Messwerte auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_MESSWERTE_LRP

0x22402D STATUS_MESSWERTE_LRP Messwerte Laufruhepruefung auslesen  Fehlende Groessen (Bytes) in der Testerbeschreibung sind mit 0xFF zu befuellen und auszugeben Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_MFMA

0x224032 STATUS_MFMA Messwerte Kleinstmengenadaption auslesen

_No arguments._

### STATUS_MIL

0x30D401 STATUS_MIL MIL (Malfunction Indicator Lamp) auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_MLS

0x30B201 STATUS_MLS Motorlagersteuerung auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_MOTORLAUFUNRUHE

0x224003 STATUS_MOTORLAUFUNRUHE Motorlaufunruhewerte auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_MOTORTEMPERATUR

0x300C01 STATUS_MOTORTEMPERATUR Motortemperatur auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_MSV

0x30BD01 STATUS_MSV Mengensteuerventil auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_NOCKENWELLE_ADAPTION

0x224006 STATUS_NOCKENWELLE_ADAPTION Nockenwellenadationswerte auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_NOX1

0x303B01 STATUS_NOX1 NOx Sensor 1 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_ODR

0x30AB01 STATUS_ODR Oel Druck Regelung (Geregeltes Oeldrucksystem) auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_ODS

0x300501 STATUS_ODS Oeldruckschalter auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_ODSENS

0x303701 STATUS_ODSENS Oeldrucksensor auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_ODV

0x30AC01 STATUS_ODV Oeldruckventil (Geregeltes Oeldrucksystem) auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

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

### STATUS_RBMMS3

0x224066 STATUS_RBMMS3 Rate Based Monitoring Motorsteuerung MS... Block 3 auslesen

_No arguments._

### STATUS_READINESS

0x2105 STATUS_READINESS Monitorfunktionen und Readinessflags aus DME auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

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

### STATUS_SPT

0x300601 STATUS_SPT Sporttaster auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

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

### STATUS_SYSTEMCHECK_GEN

0x332A STATUS_SYSTEMCHECK_GEN Auslesen Diagnosefunktion Generatortest Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SYSTEMCHECK_GLF

0x33D5 STATUS_SYSTEMCHECK_GLF Auslesen Gesteuerte Luftfuehrung Systemcheck Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SYSTEMCHECK_IGR_AUS

0x33F7 STATUS_SYSTEMCHECK_IGR_AUS Auslesen Intelligente Generatorregelung deaktivieren Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SYSTEMCHECK_L_REGELUNG_AUS

0x33D9 STATUS_SYSTEMCHECK_L_REGELUNG_AUS Auslesen Lambdaregelung deaktivieren Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SYSTEMCHECK_L_SONDE

0x33DF STATUS_SYSTEMCHECK_L_SONDE Auslesen Diagnosefunktion vertauschte Lambdasonden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SYSTEMCHECK_LLERH

0x3326 STATUS_SYSTEMCHECK_LLERH Auslesen Diagnosefunktion Leerlauf-Erhoehung Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SYSTEMCHECK_ODR

0x332C STATUS_SYSTEMCHECK_ODR Auslesen Diagnosefunktion Oeldruckregelung Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SYSTEMCHECK_PM_MESSEMODE

0x33F6 STATUS_SYSTEMCHECK_PM_MESSEMODE Auslesen Messemode Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SYSTEMCHECK_TEV

0x3322 STATUS_SYSTEMCHECK_TEV Auslesen Diagnosefunktion Tankentlueftungsventil Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_TABG1

0x301201 STATUS_TABG1 Abgastemperatur1 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_TEV

0x30CF01 STATUS_TEV Tankentlueftungsventil auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_TEV_REGELUNG_AUS

0x33CF STATUS_TEV_REGELUNG_AUS Deaktivierung TEV-Regelung auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_TKA

0x300D01 STATUS_TKA Kuehlerauslasstemperatur auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_TTEMP

0x302F01 STATUS_TTEMP Taster Tempomat auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

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

### STATUS_UGEN

0x303201 STATUS_UGEN Generator Sollspannung BSD (Bit Serielle Datenschnittstelle) auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_UKL15

0x301B01 STATUS_UKL15 Kl.15 Spannung auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_ZDKSHDP

0x22404C STATUS_ZDKSHDP Zeitanteile der erreichten Druckbereiche (beim Tausch der Kraftstoffhochdruckpumpe) auslesen.

_No arguments._

### STATUS_ZWDIAG

0x333A STATUS_ZWDIAG CSERS Diagnose zur Fehlerdemo (Zuendwinkeldiagnose Status)

_No arguments._

### STEUERN_AGK

0x30C107 STEUERN_AGK Abgasklappe ansteuern Aktivierung: Batteriespannung > 10 V UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_AGK_WERT | unsigned long | Sollwert LV_ACT_EF_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_AGK_WERT | unsigned long | Timeout 0 bis 508s 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_AGR

0x30BE07 STEUERN_AGR AbgasRueckfuehr (AGR) Ventil ansteuern Aktivierung: Batteriespannung > 10 V UND Drehzahl = 0 1/min UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_AGR_WERT | real | Tastverhaeltniss Abgasrueckfuehrungsventil OPG_SP_ACR_EXT_ADJ   Einheit: %   Min: 0 Max: 99.9755859375 |
| SW_TO_AGR_WERT | unsigned long | Timeout AbgasRueckfuehr (AGR) Ventil 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_ANWS

0x30EE07 STEUERN_ANWS Vanos Auslass Ventil ansteuern Aktivierung: Drehzahl > 1000 1/min Activation: N > C_N_MIN_KWP

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ANWS_WERT | real | Sollwert Vanos_A Ventil CAM_SP_EX_EXT_ADJ   Einheit: CRK   Min: -128 Max: 52300 |
| SW_TO_ANWS_WERT | unsigned long | Timeout Vanos_A Ventil 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_BETRIEBSART

0x2E5FF807 STEUERN_BETRIEBSART Betriebsarten vorgeben Aktivierung: Klemme 15 = EIN UND Leerlauf Activation: LV_IGK = 1 UND LV_IS = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_BA_SOLL_WERT | unsigned long | Sollwert Betriebsart, 1 = Homogen, 2 = Homogen-Schicht, 3 = Schicht, 4 = Homogen und Lambda = 1 STATE_HOM_AFS_REQ_EXT_ADJ   Min: 0 Max: 65535 |

### STEUERN_DESULFATISIERUNG

0x312D STEUERN_DESULFATISIERUNG Ansteuerung Desulfatisierung Aktivierung: Drehzahl > C_N_IS_SO2P_MIN UND Ganginfo = 0 UND Kupplungsschalter = Aus UND Geschwindigkeit <= C_VS_SO2P_EXT_MAX UND Pedalwert <= C_PV_SO2P_EXT_MAX Activation: N_32 >= C_N_IS_SO2P_MIN UND GEAR = 0 UND LV_CLU_SWI = 0 UND VS <= C_VS_SO2P_EXT_MAX UND PV_AV <= C_PV_SO2P_EXT_MAX

| Name | Type | Description |
| --- | --- | --- |
| STAT_STATE_NT_SO2P_EXT_ADJ_WERT | unsigned long | Parameter Desulfatisierungsstrategie, 0 = schnelle Desulfatisierung, 1 = alternierende Desulfatisierung STATE_NT_SO2P_EXT_ADJ   Min: 0 Max: 1 |

### STEUERN_DESULFATISIERUNG_FAHR

0x312F STEUERN_DESULFATISIERUNG_FAHR Ansteuerung Desulfatisierung Fahrbetrieb Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_DISA

0x30C607 STEUERN_DISA Variable Sauganlage (DISA) Klappe ansteuern Aktivierung: Batteriespannung > 10 V UND Drehzahl = 0 1/min UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DISA_WERT | unsigned long | Sollwert Variable Sauganlage (DISA) Klappe LV_VIM_1_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_DISA_WERT | unsigned long | Timeout Variable Sauganlage (DISA) Klappe 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_DISA2

0x30AE07 STEUERN_DISA2 Variable Sauganlage (DISA) Klappe2 ansteuern Aktivierung: Batteriespannung > 10 V UND Drehzahl = 0 1/min UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DISA2_WERT | unsigned long | Sollwert Variable Sauganlage (DISA) Klappe2 LV_VIM_2_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_DISA2_WERT | unsigned long | Timeout Variable Sauganlage (DISA) Klappe2 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_DK

0x302A07 STEUERN_DK Drosselklappe ansteuern Aktivierung: Batteriespannung > 10 V UND Drehzahl = 0 1/min UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DK_WERT | real | Sollwert Drosselklappe TPS_SP_EXT_ADJ   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_DK_WERT | unsigned long | Timeout Drosselklappe 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_DKH

0x309E07 STEUERN_DKH Drosselklappenbeheizung ansteuern Aktivierung: Batteriespannung > 10 V UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_DKH_WERT | unsigned long | Tastverhaeltniss Drosselklappenbeheizung LV_ACT_RLY_MTC_HEAT_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_DKH_WERT | unsigned long | Timeout Drosselklappenbeheizung 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

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

### STEUERN_ENDE_AGR

0x30BE00 STEUERN_ENDE_AGR AbgasRueckfuehr (AGR) Ventil Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_ANWS

0x30EE00 STEUERN_ENDE_ANWS Vanos Auslass Ventil Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_BETRIEBSART

0x2E5FF800 STEUERN_ENDE_BETRIEBSART Betriebsarten Vorgeben beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_DESULFATISIERUNG

0x322D STEUERN_ENDE_DESULFATISIERUNG Ansteuerung Desulfatisierung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_DESULFATISIERUNG_FAHR

0x322F STEUERN_ENDE_DESULFATISIERUNG_FAHR Ansteuerung Desulfatisierung Fahrbetrieb beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_DISA

0x30C600 STEUERN_ENDE_DISA Variable Sauganlage (DISA) Klappe Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_DISA2

0x30AE00 STEUERN_ENDE_DISA2 Variable Sauganlage (DISA) Klappe2 Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_DK

0x302A00 STEUERN_ENDE_DK Drosselklappe Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_DKH

0x309E00 STEUERN_ENDE_DKH Drosselklappenbeheizung Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

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

0x30BF00 STEUERN_ENDE_EWAP elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_GLF

0x30C300 STEUERN_ENDE_GLF Gesteuerte Luftfuehrung Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_GLF2

0x30A400 STEUERN_ENDE_GLF2 Gesteuerte Luftfuehrung Klappe 2 Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_KFT

0x30C900 STEUERN_ENDE_KFT Kennfeldthermostat Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_KGEH

0x30AD00 STEUERN_ENDE_KGEH Kurbelgehaeuseentlueftungsheizung Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_KOREL

0x30C700 STEUERN_ENDE_KOREL Klimakompressor-Relais Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

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

### STEUERN_ENDE_MLS

0x30B200 STEUERN_ENDE_MLS Motorlagersteuerung Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_MSV

0x30BD00 STEUERN_ENDE_MSV Mengensteuerventil Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_ODR

0x30AB00 STEUERN_ENDE_ODR Oel Druck Regelung (Geregeltes Oeldrucksystem) Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_ODV

0x30AC00 STEUERN_ENDE_ODV Oeldruckventil (Geregeltes Oeldrucksystem) Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_SR

0x30C400 STEUERN_ENDE_SR Startrelais Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_TEV

0x30CF00 STEUERN_ENDE_TEV Tankentlueftungsventil Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_TEV_REGELUNG_AUS

0x32CF STEUERN_ENDE_TEV_REGELUNG_AUS Deaktivierung TEV-Regelung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_UGEN

0x303200 STEUERN_ENDE_UGEN Generator Sollspannung BSD (Bit Serielle Datenschnittstelle) Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_UVSG

0x301C00 STEUERN_ENDE_UVSG Kl.87 Spannung / Versorgung DME (Digitale Motor Elektronik) Ansteuerung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ENDE_ZWDIAG

0x323A STEUERN_ENDE_ZWDIAG CSERS Diagnose zur Fehlerdemo (Zuendwinkeldiagnose Steuern-Ende)

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
| SW_TV_ENWS_WERT | real | Sollwert Vanos_E Ventil CAM_SP_IN_EXT_ADJ   Einheit: CRK   Min: -128 Max: 52300 |
| SW_TO_ENWS_WERT | unsigned long | Timeout Vanos_E Ventil 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_EWAP

0x30BF07 STEUERN_EWAP elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) ansteuern Aktivierung: Batteriespannung > 10 V UND Motortemperatur < 95 Grad C UND Drehzahl = 0 1/min  UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND TCO < C_TCO_MAX_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_EWAP_WERT | real | Sollwert elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) N_REL_CWP_SP_EXT_ADJ   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_EWAP_WERT | unsigned long | Timeout elektr. Wasserpumpe ueber BSD (Bit Serielle Datenschnittstelle) 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_GLF

0x30C307 STEUERN_GLF Gesteuerte Luftfuehrung ansteuern Aktivierung: Batteriespannung > 10 V UND Motortemperatur < 95 Grad C UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND TCO < C_TCO_MAX_KWP UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_GLF_WERT | unsigned long | Sollwert Gesteuerte Luftfuehrung LV_ACT_ECRAS_UP_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_GLF_WERT | unsigned long | Timeout Gesteuerte Luftfuehrung 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_GLF2

0x30A407 STEUERN_GLF2 Gesteuerte Luftfuehrung Klappe 2 ansteuern Aktivierung: Batteriespannung > 10 V UND Motortemperatur < 95 Grad C UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND TCO < C_TCO_MAX_KWP UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_GLF2_WERT | unsigned long | Ansteuerung Gesteuerte Luftfuehrung Klappe 2 LV_ACT_ECRAS_DOWN_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_GLF2_WERT | unsigned long | Timeout Gesteuerte Luftfuehrung Klappe 2 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_KFT

0x30C907 STEUERN_KFT Kennfeldthermostat ansteuern Aktivierung: Batteriespannung > 10 V UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_KFT_WERT | real | Sollwert Kennfeldthermostat ECTPWM_EXT_ADJ   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_KFT_WERT | unsigned long | Timeout Kennfeldthermostat 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_KGEH

0x30AD07 STEUERN_KGEH Kurbelgehaeuseentlueftungsheizung ansteuern Aktivierung: Batteriespannung > 10 V UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_KGEH_WERT | unsigned long | Sollwert Kurbelgehaeuseentlueftungsheizung LV_ACT_RLY_CRCV_HEAT_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_KGEH_WERT | unsigned long | Timeout Kurbelgehaeuseentlueftungsheizung 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_KLANN

0x31E4 STEUERN_KLANN Ansteuern Klann-Adaptionswerte (Anforderung aus CP10798) Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| NKW_LOC_WERT | long | Drehzahl NKW_LOC   Einheit: Upm   Min: -32768 Max: 32767 |
| RK_LOC_WERT | real | Relative Kraftstoffmasse RK_LOC   Min: 0 Max: 31.9995 |
| TMOT_LOC_WERT | real | Kuehlwassertemperatur TMOT_LOC   Einheit: C   Min: -327.68 Max: 327.67 |

### STEUERN_KOREL

0x30C707 STEUERN_KOREL Klimakompressor-Relais ansteuern Aktivierung: Batteriespannung > 10 V UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_KOREL_WERT | unsigned long | Sollwert Klimakompressor-Relais LV_ACT_ACCOUT_RLY_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_KOREL_WERT | unsigned long | Timeout Klimakompressor-Relais 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_KRANN

0x31E3 STEUERN_KRANN Ansteuern Krann-Adaptionswerte Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| NKW_WERT | long | Drehzahl NKW_SOLL   Einheit: Upm   Min: -32768 Max: 32767 |
| RF_WERT | real | Relative Kraftstofffuellung RK_SOLL_KR   Einheit: %   Min: -1600 Max: 1599.9511 |
| TANS_WERT | real | Ansauglufttemperatur TANS   Einheit: C   Min: -3276.8 Max: 3276.7 |
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

### STEUERN_LL_ABGLEICH

0x2E5FF007 STEUERN_LL_ABGLEICH Abgleichwert LL (Leerlauf) vorgeben Aktivierung: Klemme 15 = EIN UND Leerlaufabgleich ueber Testervorgabe = EIN Activation: LV_IGK = 1 UND LV_KWP_ENA = 1

| Name | Type | Description |
| --- | --- | --- |
| STAT_OFS_ACC_DRI_IN_WERT | long | Abgleichswert LL mit Klima und Fahrbedingung N_KWP_OFS_ACC_DRI_KWP   Einheit: rpm   Min: -256 Max: 254 |
| STAT_OFS_DRI_IN_WERT | long | Abgleichswert LL mit Fahrstufe N_KWP_OFS_DRI_KWP   Einheit: rpm   Min: -256 Max: 254 |
| STAT_OFS_IN_WERT | long | Abgleichswert LL N_KWP_OFS_KWP   Einheit: rpm   Min: -256 Max: 254 |
| STAT_OFS_ACC_IN_WERT | long | Abgleichswert LL mit Klimaanlage N_KWP_OFS_ACC_KWP   Einheit: rpm   Min: -256 Max: 254 |
| STAT_OFS_VB_IN_WERT | long | Abgleichswert LL mit niedriger Batteriespannung N_KWP_OFS_VB_KWP   Einheit: rpm   Min: -256 Max: 254 |

### STEUERN_LLABG_PROG

0x2E5FF008 STEUERN_LLABG_PROG Abgleichwert LL (Leerlauf) programmieren Aktivierung: Klemme 15 = EIN UND Leerlaufabgleich ueber Testervorgabe = EIN Activation: LV_IGK = 1 UND LV_KWP_ENA = 1

| Name | Type | Description |
| --- | --- | --- |
| STAT_OFS_ACC_DRI_IN_WERT | long | Abgleichswert LL mit Klima und Fahrbedingung N_KWP_OFS_ACC_DRI_KWP   Einheit: rpm   Min: -256 Max: 254 |
| STAT_OFS_DRI_IN_WERT | long | Abgleichswert LL mit Fahrstufe N_KWP_OFS_DRI_KWP   Einheit: rpm   Min: -256 Max: 254 |
| STAT_OFS_IN_WERT | long | Abgleichswert LL N_KWP_OFS_KWP   Einheit: rpm   Min: -256 Max: 254 |
| STAT_OFS_ACC_IN_WERT | long | Abgleichswert LL mit Klimaanlage N_KWP_OFS_ACC_KWP   Einheit: rpm   Min: -256 Max: 254 |
| STAT_OFS_VB_IN_WERT | long | Abgleichswert LL mit niedriger Batteriespannung N_KWP_OFS_VB_KWP   Einheit: rpm   Min: -256 Max: 254 |

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

### STEUERN_LVSZ_RESET

0x2E5F87 STEUERN_LVSZ_RESET LaufruheVerbesserungsSystem Zaehler Reset nur bei laufenden Motor N_RUN

_No arguments._

### STEUERN_MIL

0x30D407 STEUERN_MIL MIL (Malfunction Indicator Lamp) ansteuern Aktivierung: Batteriespannung > 10 V UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_MIL_WERT | unsigned long | Sollwert MIL (Malfunction Indicator Lamp) LV_ACT_MIL_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_MIL_WERT | unsigned long | Timeout MIL (Malfunction Indicator Lamp) 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_MLS

0x30B207 STEUERN_MLS Motorlagersteuerung ansteuern Aktivierung: Leerlauf Activation: LV_IS = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_MLS_WERT | unsigned long | Tastverhaeltniss Motorlagersteuerung LV_SWI_AEB_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_MLS_WERT | unsigned long | Timeout Motorlagersteuerung 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_MSV

0x30BD07 STEUERN_MSV Mengensteuerventil ansteuern Aktivierung: 50000 hPa < Raildruck < 200000 hPa UND Leerlauf Activation: C_FUP_MIN_KWP < FUP < C_FUP_MAX_KWP UND LV_IS = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_MSV_WERT | real | Tastverhaeltniss Mengensteuerventil FUP_SP_EXT_ADJ   Einheit: hPa   Min: 0 Max: 347776 |
| SW_TO_MSV_WERT | unsigned long | Timeout Mengensteuerventil 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_ODR

0x30AB07 STEUERN_ODR Oel Druck Regelung (Geregeltes Oeldrucksystem) ansteuern Aktivierung: Oeldruck > 2 bar UND Drehzahl > 500 1/min UND Oeldruck < 9 bar UND Drehzahl < 2000 1/min Activation: POIL > C_POIL_MIN_KWP UND N> C_N_MIN_KWP_POIL UND POIL < C_POIL_MAX_KWP UND N< C_N_MAX_KWP_POIL

| Name | Type | Description |
| --- | --- | --- |
| SW_P_OELSOL_TST_WERT | unsigned long | Oeldruck Sollwert durch Testereingriff POIL_SP_EXT_ADJ   Einheit: hPa   Min: 0 Max: 8160 |
| SW_TO_ODR_WERT | unsigned long | Timeout Oel Druck Regelung (Geregeltes Oeldrucksystem) 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_ODV

0x30AC07 STEUERN_ODV Oeldruckventil (Geregeltes Oeldrucksystem) ansteuern Aktivierung: Batteriespannung > 10 V UND Drehzahl = 0 1/min UND Klemme 15 = EIN Activation: VB > C_VB_MIN_KWP UND LV_ES = 1 UND LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_ODV_WERT | real | Tastverhaeltniss Oeldruckventil (Geregeltes Oeldrucksystem) POIL_PWM_EXT_ADJ   Einheit: %   Min: 0 Max: 99.609375 |
| SW_TO_ODV_WERT | unsigned long | Timeout Oeldruckventil (Geregeltes Oeldrucksystem) 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_PM_RESTORE

0x2E5F8B STEUERN_PM_RESTORE Schreiben PM-Restore Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| STAT_PMRESTORE_0_WERT | unsigned long | PM-Restore Byte 0 PMRESTORE[0]   Min: 0 Max: 255 |
| STAT_PMRESTORE_1_WERT | unsigned long | PM-Restore Byte 1 PMRESTORE[1]   Min: 0 Max: 3 |
| STAT_PMRESTORE_2_WERT | unsigned long | PM-Restore Byte 2 PMRESTORE[2]   Min: 0 Max: 255 |
| STAT_PMRESTORE_3_WERT | unsigned long | PM-Restore Byte 3 PMRESTORE[3]   Min: 0 Max: 3 |
| STAT_PMRESTORE_4_WERT | unsigned long | PM-Restore Byte 4 PMRESTORE[4]   Min: 0 Max: 255 |
| STAT_PMRESTORE_5_WERT | unsigned long | PM-Restore Byte 5 PMRESTORE[5]   Min: 0 Max: 3 |
| STAT_PMRESTORE_6_WERT | unsigned long | PM-Restore Byte 6 PMRESTORE[6]   Min: 0 Max: 255 |

### STEUERN_PROGRAMM_IMA_ZYL_1

0x2E5F91 STEUERN_PROGRAMM_IMA_ZYL_1 Abgleichwert Injektor 01 programmieren Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_ENERGIEABGLEICH_ZYL_1_WERT | real | IMA Abgleichwert Injektor 01 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[0]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_1_WERT | real | IMA Abgleichwert Injektor 01 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[0]   Einheit: mg/stk   Min: 0 Max: 1389 |

### STEUERN_PROGRAMM_IMA_ZYL_2

0x2E5F95 STEUERN_PROGRAMM_IMA_ZYL_2 Abgleichwert Injektor 05 programmieren Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_ENERGIEABGLEICH_ZYL_2_WERT | real | IMA Abgleichwert Injektor 05 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[4]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_2_WERT | real | IMA Abgleichwert Injektor 05 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[4]   Einheit: mg/stk   Min: 0 Max: 1389 |

### STEUERN_PROGRAMM_IMA_ZYL_3

0x2E5F93 STEUERN_PROGRAMM_IMA_ZYL_3 Abgleichwert Injektor 03 programmieren Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_ENERGIEABGLEICH_ZYL_3_WERT | real | IMA Abgleichwert Injektor 03 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[2]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_3_WERT | real | IMA Abgleichwert Injektor 03 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[2]   Einheit: mg/stk   Min: 0 Max: 1389 |

### STEUERN_PROGRAMM_IMA_ZYL_4

0x2E5F96 STEUERN_PROGRAMM_IMA_ZYL_4 Abgleichwert Injektor 06 programmieren Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_ENERGIEABGLEICH_ZYL_4_WERT | real | IMA Abgleichwert Injektor 06 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[5]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_4_WERT | real | IMA Abgleichwert Injektor 06 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[5]   Einheit: mg/stk   Min: 0 Max: 1389 |

### STEUERN_PROGRAMM_IMA_ZYL_5

0x2E5F92 STEUERN_PROGRAMM_IMA_ZYL_5 Abgleichwert Injektor 02 programmieren Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_ENERGIEABGLEICH_ZYL_5_WERT | real | IMA Abgleichwert Injektor 02 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[1]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_5_WERT | real | IMA Abgleichwert Injektor 02 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[1]   Einheit: mg/stk   Min: 0 Max: 1389 |

### STEUERN_PROGRAMM_IMA_ZYL_6

0x2E5F94 STEUERN_PROGRAMM_IMA_ZYL_6 Abgleichwert Injektor 04 programmieren Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_ENERGIEABGLEICH_ZYL_6_WERT | real | IMA Abgleichwert Injektor 04 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[3]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_6_WERT | real | IMA Abgleichwert Injektor 04 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[3]   Einheit: mg/stk   Min: 0 Max: 1389 |

### STEUERN_PROGRAMM_IMAALLE

0x2E5F90 STEUERN_PROGRAMM_IMAALLE Abgleichwerte Injektoren programmieren Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_ENERGIEABGLEICH_ZYL_1_WERT | real | IMA Abgleichwert Injektor 01 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[0]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_1_WERT | real | IMA Abgleichwert Injektor 01 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[0]   Einheit: mg/stk   Min: 0 Max: 1389 |
| SW_ENERGIEABGLEICH_ZYL_5_WERT | real | IMA Abgleichwert Injektor 02 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[1]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_5_WERT | real | IMA Abgleichwert Injektor 02 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[1]   Einheit: mg/stk   Min: 0 Max: 1389 |
| SW_ENERGIEABGLEICH_ZYL_3_WERT | real | IMA Abgleichwert Injektor 03 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[2]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_3_WERT | real | IMA Abgleichwert Injektor 03 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[2]   Einheit: mg/stk   Min: 0 Max: 1389 |
| SW_ENERGIEABGLEICH_ZYL_6_WERT | real | IMA Abgleichwert Injektor 04 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[3]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_6_WERT | real | IMA Abgleichwert Injektor 04 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[3]   Einheit: mg/stk   Min: 0 Max: 1389 |
| SW_ENERGIEABGLEICH_ZYL_2_WERT | real | IMA Abgleichwert Injektor 05 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[4]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_2_WERT | real | IMA Abgleichwert Injektor 05 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[4]   Einheit: mg/stk   Min: 0 Max: 1389 |
| SW_ENERGIEABGLEICH_ZYL_4_WERT | real | IMA Abgleichwert Injektor 06 Flow1 (Energie) EGY_SP_IV_EXT_ADJ[5]   Einheit: mJ   Min: 0 Max: 255 |
| SW_DURCHFLUSSABGLEICH_ZYL_4_WERT | real | IMA Abgleichwert Injektor 06 Flow2 (Durchfluss) MFF_ABSV_IV_EXT_ADJ[5]   Einheit: mg/stk   Min: 0 Max: 1389 |

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

### STEUERN_TEV_REGELUNG_AUS

0x31CF STEUERN_TEV_REGELUNG_AUS Deaktivierung TEV-Regelung starten Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_UGEN

0x303207 STEUERN_UGEN Generator Sollspannung BSD (Bit Serielle Datenschnittstelle) ansteuern Aktivierung: Leerlauf Activation: LV_IS = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_PHY_UGEN_WERT | real | Spannung Generator Sollspannung BSD (Bit Serielle Datenschnittstelle) V_ALTER_SP_EXT_ADJ   Einheit: V   Min: 0 Max: 6553.5 |
| SW_TO_UGEN_WERT | unsigned long | Timeout Generator Sollspannung BSD (Bit Serielle Datenschnittstelle) 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_UVSG

0x301C07 STEUERN_UVSG Kl.87 Spannung / Versorgung DME (Digitale Motor Elektronik) ansteuern Aktivierung: Geschwindigkeit < 5 km/h UND Drehzahl = 0 1/min Activation: VS < C_VS_MAX_KWP UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_UVSG_WERT | unsigned long | Sollwert Kl.87 Spannung / Versorgung DME (Digitale Motor Elektronik) LV_RLY_MAIN_EXT_ADJ   Min: 0 Max: 1 |
| SW_TO_UVSG_WERT | unsigned long | Timeout Kl.87 Spannung / Versorgung DME (Digitale Motor Elektronik) 1BYTE in 0 bis 510s   Einheit: s   Min: 0 Max: 510 |

### STEUERN_ZWDIAG

0x313A STEUERN_ZWDIAG CSERS Diagnose zur Fehlerdemo (Zuendwinkeldiagnose Steuern) 

| Name | Type | Description |
| --- | --- | --- |
| EFF_IGA_CST_LIM_EXT_ADJ_WERT | real | External efficiency limitation adjusted by external device EFF_IGA_CST_LIM_EXT_ADJ   Min: 0 Max: 1.99996 |
| FAC_CH_DIAG_EXT_ADJ_IS_WERT | real | Manipulation factor of CH torque reserve for ignition angle efficiency monitoring - demo-mode IS FAC_CH_DIAG_EXT_ADJ_IS   Min: 0 Max: 1.9921875 |
| FAC_CH_DIAG_EXT_ADJ_PL_WERT | real | Manipulation factor of CH torque reserve for ignition angle efficiency monitoring - demo-mode PL FAC_CH_DIAG_EXT_ADJ_PL   Min: 0 Max: 1.9921875 |

### STEUERN_ZDKSHDPRESET

0x2E5F7F STEUERN_ZDKSHDPRESET Zeitanteile der erreichten Druckbereiche (beim Tausch der Kraftstoffhochdruckpumpe) zuruecksetzen. Beim Aufruf dieses Services soll das Bit "B_prail_mon_clr" gesetzt werden.

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

### STOP_SYSTEMCHECK_GEN

0x322A STOP_SYSTEMCHECK_GEN Diagnosefunktion Generatortest beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STOP_SYSTEMCHECK_GLF

0x32D5 STOP_SYSTEMCHECK_GLF Ende Gesteuerte Luftfuehrung Systemcheck Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STOP_SYSTEMCHECK_IGR_AUS

0x32F7 STOP_SYSTEMCHECK_IGR_AUS Ansteuerung Intelligente Generatorregelung deaktivieren beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STOP_SYSTEMCHECK_L_REGELUNG_AUS

0x32D9 STOP_SYSTEMCHECK_L_REGELUNG_AUS Ansteuerung Lambdaregelung deaktivieren beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STOP_SYSTEMCHECK_L_SONDE

0x32DF STOP_SYSTEMCHECK_L_SONDE Diagnosefunktion vertauschte Lambdasonden beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STOP_SYSTEMCHECK_LLERH

0x3226 STOP_SYSTEMCHECK_LLERH Diagnosefunktion Leerlauf-Erhoehung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STOP_SYSTEMCHECK_ODR

0x322C STOP_SYSTEMCHECK_ODR Diagnosefunktion Oeldruckregelung beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STOP_SYSTEMCHECK_TEV

0x3222 STOP_SYSTEMCHECK_TEV Diagnosefunktion Tankentlueftungsventil beenden Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### IDENT_GEN

0x2CF0 IDENT_GEN Identifikationsdaten Generator Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### MESSWERTBLOCK_LESEN

0x2CF0 MESSWERTBLOCK_LESEN DDLI Messwerte auf Basis Ãœbergabestring aus DME auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| STRING_IN | string | Werte aus DDLI Liste Format 0x58XX,0x42YY,0x43ZZ,... |
| TRENNZEICHEN | string | Werte aus DDLI Liste Format 0x58XX,0x42YY,0x43ZZ,... |

### STATUS_DIAGNOSE_ATL

0x2CF0 STATUS_DIAGNOSE_ATL Identifikationsdaten Generator Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_MOTORDREHZAHL

0x2CF0 4807 & 4808 STATUS_MOTORDREHZAHL Auslesen des Soll- und Istwertes der Motordrehzahl Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_INT

0x2CF0 5A81 STATUS_INT Auslesen des Integrator Bank 1 Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_INT_2

0x2CF0 5A82 STATUS_INT_2 Auslesen des Integrator Bank 2 Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_ADD

0x2CF0 5A83 STATUS_ADD Auslesen der Adaption Offset Lambda Bank 1 Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_ADD_2

0x2CF0 5A84 STATUS_ADD_2 Auslesen der Adaption Offset Lambda Bank 2 Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_MUL

0x2CF0 5A85 STATUS_MUL Auslesen der Adaption Multiplikation Lambda Bank 1 Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_MUL_2

0x2CF0 5A86 STATUS_MUL_2 Auslesen der Adaption Multiplikation Lambda Bank 2 Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_BETRIEBSSTUNDENZAEHLER

0x2CF0 5AB4 STATUS_BETRIEBSSTUNDENZAEHLER Betriebsstundenzaehler auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_GEBERRAD_ADAPTION

0x2CF0 STATUS_GEBERRAD_ADAPTION Adaptionswerte für das Geberrad aus DME auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_MESSWERTBLOCK_ADC

0x2CF0 STATUS_MESSWERTBLOCK_ADC ADC-Werte aus DME auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_MESSWERTE_VANOS

0x2CF0 STATUS_MESSWERTE_VANOS Messwerte CAM_IN und CAM_EX nach Wunsch VS-42 aus DME auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_SYSTEMCHECK_NOX

0x2CF0 STATUS_SYSTEMCHECK_NOX Systemstatus für NOx-Sensor ausgeben Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### _STATUS_FASTA_COMMON

0x2CF0 _STATUS_FASTA_COMMON DDLI Messwerte für FASTA auf Basis Übergabestring aus DME auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### _STATUS_OBD_MODE_01

0x0101 _STATUS_OBD_MODE_01 Auslesen der Motor-Diagnosedaten nach Mode 01 PID 01 Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### _STATUS_OBD_MODE_03

0x03 _STATUS_OBD_MODE_03 Auslesen der P-Codes nach Mode 03 Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### _STATUS_OBD_MODE_07

0x07 _STATUS_OBD_MODE_07 Auslesen der P-Codes nach Mode 07 Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### _STEUERN_BETRIEBSART_ALT

0x2E5FF807 _STEUERN_BETRIEBSART_ALT Betriebsarten vorgeben (nur für Programmstände < 4DC34xxS) Aktivierung: Klemme 15 = EIN UND Leerlauf Activation: LV_IGK = 1 UND LV_IS = 1

| Name | Type | Description |
| --- | --- | --- |
| SW_BA_SOLL_WERT | unsigned long | Sollwert Betriebsart, 1 = Homogen, 2 = Homogen-Schicht, 3 = Schicht, 4 = Homogen und Lambda = 1 STATE_HOM_AFS_REQ_EXT_ADJ   Min: 0 Max: 255 |

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

### ECU_CONFIG

0x225FF2 ECU_CONFIG Variante auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### ECU_CONFIG_RESET

0x2E5FF204 ECU_CONFIG_RESET Variante loeschen Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

| Name | Type | Description |
| --- | --- | --- |
| STAT_AT_WERT | unsigned long | Automatik Getriebe LV_AT   Min: 0 Max: 1 |
| STAT_AC_WERT | unsigned long | Klimaanlage LV_VAR_ACIN   Min: 0 Max: 1 |
| STAT_AMT_WERT | unsigned long | SMG Sequentielles Manuelles Getriebe LV_VAR_AMT   Min: 0 Max: 1 |
| STAT_ARS_WERT | unsigned long | ARS Aktive Roll-Stabilisierung LV_VAR_ARS   Min: 0 Max: 1 |
| STAT_ASR_WERT | unsigned long | ASR Anti Schlupf Regelung LV_VAR_ASR   Min: 0 Max: 1 |
| STAT_BN_MSW_WERT | unsigned long | Tempomat ueber CAN LV_VAR_BN_MSW   Min: 0 Max: 1 |
| STAT_DCC_WERT | unsigned long | Entfernungsueberwachung LV_VAR_DCC   Min: 0 Max: 1 |
| STAT_EBOX_CFA_WERT | unsigned long | E-Box-Luefter LV_VAR_EBOX_CFA   Min: 0 Max: 1 |
| STAT_ETCU_WERT | unsigned long | SMG/EGS Steuergeraet LV_VAR_ETCU   Min: 0 Max: 1 |
| STAT_ICL_WERT | unsigned long | Kombi ueber CAN LV_VAR_ICL   Min: 0 Max: 1 |
| STAT_MSW_WERT | unsigned long | Multifunktionslenkrad LV_VAR_MSW   Min: 0 Max: 1 |
| STAT_PSTE_WERT | unsigned long | Elektrische Lenkung LV_VAR_PSTE   Min: 0 Max: 1 |
| STAT_SOF_WERT | unsigned long | Soundklappe LV_VAR_SOF   Min: 0 Max: 1 |
| STAT_SOF_SWI_WERT | unsigned long | Sport-Taster CONF_SOF_SWI   Min: 0 Max: 1 |
| STAT_GEAR_WERT | unsigned long | Komfortstart LV_VAR_BN_GEAR_REV   Min: 0 Max: 1 |
| STAT_EF_WERT | unsigned long | Abgasklappe LV_VAR_EF   Min: 0 Max: 1 |
| STAT_ECRAS_WERT | unsigned long | Kuehlerjalousie oben und unten (nur MSD80) LV_VAR_ECRAS_UP   Min: 0 Max: 1 |
| STAT_RLY_ACCOUT_WERT | unsigned long | Klimarelais LV_VAR_RLY_ACCOUT   Min: 0 Max: 1 |
| STAT_RLY_ST_WERT | unsigned long | Starterrelais LV_VAR_RLY_ST   Min: 0 Max: 1 |
| STAT_ASR3_WERT | unsigned long | ASR3 Steuergeraet LV_VAR_ASR_3   Min: 0 Max: 1 |
| STAT_BN_LDM_WERT | unsigned long | Laengs-Dynamik-Management LV_VAR_BN_LDM   Min: 0 Max: 1 |
| STAT_BN_LTG_HDLP_L_WERT | unsigned long | Lampenzustand LV_VAR_BN_LTG_HDLP_L   Min: 0 Max: 1 |
| STAT_LSH_DOWN_WERT | unsigned long | Lambdasonde hinter Katalysator LV_VAR_LSH_DOWN   Min: 0 Max: 1 |
| STAT_LSH_UP_WERT | unsigned long | Lambdasonde vor Katalysator LV_VAR_LSH_UP   Min: 0 Max: 1 |
| STAT_ASR_4_WERT | unsigned long | ASR4 Steuergeraet LV_VAR_ASR_4   Min: 0 Max: 1 |
| STAT_MAF_WERT | unsigned long | Luftmassenmesser LV_VAR_MAF und LV_VAR_MAF_LEARNT   Min: 0 Max: 1 |
| STAT_PST_2_WERT | unsigned long | AFS Active-Front-Steering LV_VAR_PSTE_2   Min: 0 Max: 1 |
| STAT_BN_EFP_WERT | unsigned long | Elektrische Kraftstoffpumpe ueber CAN LV_VAR_BN_EFP   Min: 0 Max: 1 |
| STAT_SENS_BAT_SMT_DET_WERT | unsigned long | Intelligenter Batteriesensor LV_SENS_BAT_SMT_DET   Min: 0 Max: 1 |
| STAT_BN_TRL_WERT | unsigned long | Anhaengermodul LV_VAR_BN_TRL   Min: 0 Max: 1 |
| STAT_NOX_WERT | unsigned long | NOx-Sensor LV_VAR_NOX   Min: 0 Max: 1 |
| STAT_STST_WERT | unsigned long | Start-Stop-Automatik (nur 4-Zylinder-N43  nicht 6-Zylinder-N53/N54) LV_STST_VAR_LRN   Min: 0 Max: 1 |
| STAT_ETCU_SPT_WERT | unsigned long | Sportgetriebe LV_VAR_ETCU_SPT   Min: 0 Max: 1 |
| STAT_TCT_WERT | unsigned long | Doppelkupplungsgetriebe LV_VAR_TCT   Min: 0 Max: 1 |
| STAT_AEB_WERT | unsigned long | Motorlager LV_VAR_AEB    Min: 0 Max: 1 |
| STAT_EMF_WERT | unsigned long | EMF Elektro Mechanische Feststellbremse LV_VARTQ_PBR   Min: 0 Max: 1 |

### STATUS_ADRECOVERY

0x225F88 STATUS_ADRECOVERY Lesen Adaptionen Recovery Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_ADRECOVERY

0x2E5F88 STEUERN_ADRECOVERY Schreiben Adaptionen Recovery Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| STAT_NT_SUL_32_1_WERT | real | NOx trap sulphur loading with high resolution (A2L-Name: nt_sul_32[0]) NT_SUL_32[1]   Einheit: mg   Min: 0 Max: 10485.6 |
| STAT_NT_SUL_32_2_WERT | real | NOx trap sulphur loading with high resolution (A2L-Name: nt_sul_32[1]) NT_SUL_32[2]   Einheit: mg   Min: 0 Max: 10485.6 |
| STAT_NT_SUL_H_32_1_WERT | real | NOx trap sulphur loading for high sulphured fuel with high resolution (A2L-Name: nt_sul_h_32[0]) NT_SUL_H_32[1]   Einheit: mg   Min: 0 Max: 10485.6 |
| STAT_NT_SUL_H_32_2_WERT | real | NOx trap sulphur loading for high sulphured fuel with high resolution (A2L-Name: nt_sul_h_32[1]) NT_SUL_H_32[2]   Einheit: mg   Min: 0 Max: 10485.6 |
| STAT_NT_AGI_WERT | real | NOx trap aging factor (A2L-Name: nt_agi) NT_AGI   Min: 0 Max: 0.999984741210938 |
| STAT_NT_AGI_SO2P_FQ_SUM_WERT | real | sum of NOx trap aging factor during FQ adaption (A2L-Name: nt_agi_so2p_fq_sum) NT_AGI_SO2P_FQ_SUM   Min: 0 Max: 255.999985 |
| STAT_NT_AGI_SUL_WERT | real | NOx trap aging factor due to sulphor load (A2L-Name: nt_agi_sul) NT_AGI_SUL   Min: 0 Max: 0.999984741210938 |
| STAT_NT_AGI_SUL_SNG_1_WERT | real | NOx trap aging factor due to sulphur load (bench selective) (A2L-Name: nt_agi_sul_sng[0]) NT_AGI_SUL_SNG[1]   Min: 0 Max: 0.999999999767169 |
| STAT_NT_AGI_SUL_SNG_2_WERT | real | NOx trap aging factor due to sulphur load (bench selective) (A2L-Name: nt_agi_sul_sng[1]) NT_AGI_SUL_SNG[2]   Min: 0 Max: 0.999999999767169 |
| STAT_NT_AGI_THERMO_WERT | real | NOx trap aging factor due to thermal aging (A2L-Name: nt_agi_thermo) NT_AGI_THERMO   Min: 0 Max: 0.999984741210938 |
| STAT_NT_AGI_THERMO_SNG_1_WERT | real | NOx trap aging factor due to thermal aging (bench selective) (A2L-Name: nt_agi_thermo_sng[0]) NT_AGI_THERMO_SNG[1]   Min: 0 Max: 0.999984741210938 |
| STAT_NT_AGI_THERMO_SNG_2_WERT | real | NOx trap aging factor due to thermal aging (bench selective) (A2L-Name: nt_agi_thermo_sng[1]) NT_AGI_THERMO_SNG[2]   Min: 0 Max: 0.999984741210938 |
| STAT_CTR_NT_AGI_AD_CMPL_SUM_WERT | unsigned long | counter of completed aging adaptations (A2L-Name: ctr_nt_agi_ad_cmpl_sum) CTR_NT_AGI_AD_CMPL_SUM   Min: 0 Max: 65535 |
| STAT_CTR_NT_AGI_SO2P_FQ_WERT | unsigned long | counter of completed aging adaptation during FQ adaption (A2L-Name: ctr_nt_agi_so2p_fq) CTR_NT_AGI_SO2P_FQ   Min: 0 Max: 65535 |
| STAT_LV_NT_AFS_REQ_AGI_WERT | unsigned long | logical value for the request of lambda = 1 operation  (A2L-Name: lv_nt_afs_req_agi) LV_NT_AFS_REQ_AGI   Min: 0 Max: 1 |
| STAT_LV_NT_AFS_REQ_AGI_TMP_3_WERT | unsigned long | logical value for the request of lambda =1 operation (A2L-Name: lv_nt_afs_req_agi_tmp_3) LV_NT_AFS_REQ_AGI_TMP_3   Min: 0 Max: 1 |
| STAT_LV_SO2P_REQ_1_WERT | unsigned long | request of a desulfation  (A2L-Name: lv_so2p_req_1) LV_SO2P_REQ_1   Min: 0 Max: 1 |
| STAT_LV_SO2P_REQ_2_WERT | unsigned long | request of a desulfation (forces catalyst heating) (A2L-Name: lv_so2p_req_2) LV_SO2P_REQ_2   Min: 0 Max: 1 |
| STAT_LV_SO2P_REQ_FQ_WERT | unsigned long | logical value for active FQ adaption (A2L-Name: lv_so2p_req_fq) LV_SO2P_REQ_FQ   Min: 0 Max: 1 |
| SW_FAC_NT_AGI_LIM_WERT | real | Limited NOx trap aging factor (A2L-Name: fac_nt_agi_lim) FAC_NT_AGI_LIM   Min: 0 Max: 0.999984741210938 |
| SW_FAC_NT_AGI_MDL_WERT | real | Modeled aging of NT (A2L-Name: fac_nt_agi_mdl) FAC_NT_AGI_MDL   Min: 0 Max: 0.999999999767169 |
| SW_DIST_NS_NEW_WERT | unsigned long | mileage counter DIST_NS_NEW   Einheit: km   Min: 0 Max: 524280 |
| SW_DIST_NT_NS_SHIFT_WERT | unsigned long | mileage counter DIST_NT_NS_SHIFT   Einheit: km   Min: 0 Max: 524280 |
| SW_CTR_NS_AD_CYC_1_WERT | unsigned long | Counter of NOx signal gain adaptations (A2L-Name: noxd[0].noxd_struct_mdladns0.ctr_ns_ad_cyc) CTR_NS_AD_CYC[1]   Min: 0 Max: 65535 |
| SW_DIST_NT_NS_AD_1_WERT | unsigned long | Current distance from last NOx signal gain adaptation (A2L-Name: noxd[0].noxd_struct_mdladns0.dist_nt_ns_ad) DIST_NT_NS_AD[1]   Einheit: km   Min: 0 Max: 524280 |
| SW_FAC_NOX_NS_AD_1_WERT | real | Adaptation of the NOx sensor characteristic shift (A2L-Name: noxd[0].noxd_struct_mdladns0.fac_nox_ns_ad) FAC_NOX_NS_AD[1]   Min: 0 Max: 127.998046875 |
| SW_CTR_NS_SHIFT_CYC_1_WERT | unsigned long | RV_CTR_NS_SHIFT_CYC[1] Gültig ab Programmstand 4DC3780S CTR_NS_SHIFT_CYC[1]   Min: 0 Max: 65535 |
| SW_RATIO_MMV_NS_SHIFT_DIAG_1_WERT | real | RV_RATIO_MMV_NS_SHIFT_DIAG[1] Gültig ab Programmstand 4DC3780S RATIO_MMV_NS_SHIFT_DIAG[1]   Min: -1 Max: 0.999969482421875 |

### _STATUS_ADRECOVERY

0x225F88 STATUS_ADRECOVERY Lesen Adaptionen Recovery  und ausgabe als komplettstring für das Abspeichern in INPA Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### _STEUERN_ADRECOVERY

0x2E5F88 STEUERN_ADRECOVERY Schreiben Adaptionen Recovery für Inpa Anwendung Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| STAT_PROG_OLD | string | Programmstand aus dem die Daten geretet worden sind in Ascii format |
| STAT_WRITE_ADREC | binary | Variablenstring zum schreiben der gespeicherten Werte in kommpletter Stringlänge |

### STATUS_RBMMS1

0x224027 STATUS_RBMMS1 Rate Based Monitoring Motorsteuerung MSD80 Block 1 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_RBMMS2

0x224028 STATUS_RBMMS2 Rate Based Monitoring Motorsteuerung MSD80 Block 2 auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_RBMMODE9

0x224026 STATUS_RBMMODE9 Rate Based Monitoring Mode 9 auslesen (Ausgabe der Werte wie im Scantool Mode 9) Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_CTG

0x22409B STATUS_CTG CtG-Conti: Bereitstellung der Statistiken von Diagnoseergebnissen von Close-the-Gap fuer das Feldmonitoring fuer MSD80/87 (N53-54 / N74) und MSV80 (N51-52KP). !!! Wegen Umrechnungsfehler in Include (Rest) definiert !!!

_No arguments._

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

### STATUS_IGRINFO

0x224016 STATUS_IGRINFO Infospeicher Intelligente Generator Regelung (IGR) auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STATUS_LEMINFO

0x224017 STATUS_LEMINFO Infospeicher Leistungskoordination Elektrisch Mechanisch (LEM) auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### SLEEP_MODE_FUNKTIONAL

SG in Sleep-Mode versetzen KWP2000: $31 StartRoutineByLocalIdentifier $05 PowerDown Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FUNKTIONALE_ADRESSE | string | gewuenschte funktionale Adresse table FunktionaleAdresse F_ADR F_ADR_TEXT Defaultwert: ALL ( alle Steuergeraete ) |
| OHNE_POWERMODUL | string | Power Down ohne Powermodul Werte: JA, NEIN table DigitalArgument TEXT Defaultwert: NEIN |

### _STATUS_EISYGD

0x31E1 & 0x33E1 _STATUS_EISYGD Ansteuern und Auslesen Eisy-Adaptionswerte (gedrosselt) Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| AUSLESEMODE | string | Werte aus Tabelle _AUSLESEMODE  |
| STUETZSTELLE_NR | unsigned char | Nummer der auszulesenden Stützstellenkombination  |

### _STATUS_EISYDR

0x31E2 & 0x33E2 _STATUS_EISYDR Ansteuern und Auslesen Eisy-Adaptionswerte mit Druckregelung Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

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

### _STATUS_EISYAGR

0x31E5 & 0x33E5 _STATUS_EISYAGR Ansteuern und Auslesen Eisy-Adaptionswerte mit Abgasrückführung Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| AUSLESEMODE | string | Werte aus Tabelle _AUSLESEMODE  |
| STUETZSTELLE_NR | unsigned char | Nummer der auszulesenden Stützstellenkombination  |

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

### LESEN_INDIVIDUALDATA_LISTE

Lesen eines Listeneintrags der Individualisierungsdaten KWP2000: $21 ReadDataByLocalIdentifier (not used) $01 recordLocalIdentifier (not used)

| Name | Type | Description |
| --- | --- | --- |
| ARG_LISTENTRY | unsigned int | Nummer des angeforderten Listenelements (0,1,2,...) 0x0000 = Anforderung, das 1. Listelement zu senden 0x0001 = Anforderung, das 2. Listelement zu senden |

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

### FARTTEXTEINDIVIDUELL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x0000 | kein passendes Fehlersymptom |
| 0x1000 | mit Kraftstoffabschaltung |
| 0x1001 | Abgasschädigend nach Startvorgang |
| 0x1002 | Abgasschädigend |
| 0x1003 | Verbrennungsaussetzer an mehreren Zylindern |
| 0x1004 |  Tankfüllstand zu gering |
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
| 0x101A | Leckage grösser 1,0 mm |
| 0x101B | Leckage grösser 0,5 mm |
| 0x101C | obere Schwelle Pumpenstrom bei Referenzmessung |
| 0x101D | Pumpenstromschwelle bei Ventilprüfung erreicht |
| 0x101E | Abbruch wegen Stromschwankungen bei Feinleckprüfung |
| 0x101F | untere Schwelle Pumpenstrom bei Referenzmessung |
| 0x1020 | kurzschluss nach Plus |
| 0x1021 | Funktionstest |
| 0x1022 | Funktionstest Bandende |
| 0x1023 | nicht korrekt geschlossen |
| 0x1024 | Füllstandssignalwert zum Verbrauchswert unplausibel |
| 0x102B | unterer Anschlag nicht gelernt |
| 0x102E | Relais-Fehler |
| 0x102F | Kurzschluss der Motorleitungen |
| 0x1031 | Unterspannung |
| 0x1032 | Überspannung |
| 0x1033 | Übertemperatur Endstufe |
| 0x1034 | Überlast Strom |
| 0x103B | Überstrom zu lange |
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
| 0x1051 | DISA 1: Schalter defekt |
| 0x1052 | DISA 2: Schalter defekt |
| 0x1053 | Eigendiagnose / Mechanischer- oder Hardwaredefekt |
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
| 0x105E | RAM-Überprüfung |
| 0x105F | Timeout SPI Bus |
| 0x1060 | Kurzschluss nach Plus oder Leitungsunterbrechung |
| 0x1061 | nicht angezogen  |
| 0x1062 | nicht abgefallen |
| 0x1063 | schaltet zu spät |
| 0x1064 | Fehlerverwaltung Getriebe |
| 0x1065 | Plausibilität |
| 0x1067 | Temperatur unplausibel |
| 0x1068 | vertauschte Lambdasonden vor Katalysator |
| 0x1069 | Signal während Schubabschaltung unterhalb Schwelle |
| 0x106A | Abgas nach Katalysator zu mager |
| 0x106B | Abgas nach Katalysator zu fett |
| 0x106C | Signalamplitude zu gering |
| 0x106D | Sonde nicht angesteckt |
| 0x106E | Unterbrechung Abgleichsleitung |
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
| 0x107B | klemmt kurzzeitig |
| 0x107C | klemmt dauerhaft |
| 0x107D | schwergängig zu langsam |
| 0x107E | Ansteuerung fehlerhaft |
| 0x107F | Poti 1 unplausibel zu MAF |
| 0x1080 | Poti 2 unplausibel zu MAF |
| 0x1081 | Kurzschluss nach Minus oder Leitungsunterbrechung |
| 0x1082 | unteren Anschlag lernen während Urinitialisierung abgebrochen |
| 0x1083 | Randbedingungen verletzt |
| 0x1084 | Federtest und Notluftprüfung verfehlt  |
| 0x1085 | Notluftpunkt nicht adaptiert |
| 0x1086 | Notluftprüfung |
| 0x1087 | Federtest |
| 0x1088 | Neuadaption erforderlich |
| 0x1089 | Messwert HFM zu hoch |
| 0x108A | Messwert HFM zu niedrig |
| 0x108B | Plausibilitaet zwischen Poti 1 und 2 verletzt |
| 0x108C | Luftzufuhr nicht korrekt |
| 0x108D | elektrischer Fehler |
| 0x108F | Meßbereichsproblem |
| 0x1090 | Signal oberhalb Schwelle |
| 0x1091 | elektrisch |
| 0x1092 | Spannungsregler 1 |
| 0x1093 | Spannungsregler 2 |
| 0x1094 | Doppelfehler |
| 0x1095 | Gleichlauffehler |
| 0x1096 | IST Wert zu niedrig |
| 0x1097 | IST Wert zu hoch |
| 0x1098 | Offset Maximum überschritten |
| 0x1099 | LDM Überwachung |
| 0x109A | ACC Überwachung |
| 0x109B | DCC Überwachung |
| 0x109D | Anforderung PD-Anteil unplausibel |
| 0x109E | Anforderung I-Anteil unplausibel |
| 0x109F | Anforderung EGS unplausibel |
| 0x10A0 | Anforderung AMT unplausibel |
| 0x10A1 | Anforderung MSR unplausibel |
| 0x10A2 | Sporttastersignal unplausibel |
| 0x10A3 | minimales Kupplungsmoment unplausibel |
| 0x10A4 | Verlustmoment unplausibel |
| 0x10A5 | maximales Kupplungsmoment unplausibel |
| 0x10A6 | SPI-Fehler |
| 0x10A7 | Sicherheitsabschaltung |
| 0x10A8 | Software |
| 0x10A9 | Hardware |
| 0x10AA | Hauptrechnerüberwachung; Befehlssatztestfehler |
| 0x10AB | Rechnerüberwachung, allgemeiner Sammelfehler |
| 0x10AC | RAM-Fehler |
| 0x10AD | ROM-Fehler |
| 0x10AE | Schalter defekt |
| 0x10AF | Toggle-Bit |
| 0x10B0 | reversibel aus |
| 0x10B1 | irreversibel aus |
| 0x10B2 | Momentenanforderung unplausibel |
| 0x10B3 | Momentenanforderung trotzt Bremssignal |
| 0x10B4 | CAS-Fehler |
| 0x10B5 | kein Signal |
| 0x10B6 | Prüfsumme |
| 0x10B7 | ALIVE-Fehler |
| 0x10B8 | Checksumme |
| 0x10B9 | Timeout |
| 0x10BA | CAN Wert unplausibel |
| 0x10BB | batterieloser Betrieb |
| 0x10BC | Powermanagement |
| 0x10BD | Tiefentladung |
| 0x10BE | Ruhestromverletzung |
| 0x10C6 | Motor mechanisch zu leise |
| 0x10C7 | Motor mechanisch zu laut  |
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
| 0x10DB | Startphase |
| 0x10DD | mechanisch |
| 0x10DE | Permittivitätsmessung |
| 0x10DF | Temperaturmessung |
| 0x10E0 | Niveaumessung  |
| 0x10E4 | elektrisch berechnet |
| 0x10E5 | Übertemperatur berechnet |
| 0x10E6 | Reglertyp nicht plausibel |
| 0x10E7 | Generatortyp nicht plausibel |
| 0x10E8 | unplausibel bezüglich Lambdaregelung |
| 0x10E9 | Temperatursignal konstant |
| 0x10EA | Temperaturgradient zu steil |
| 0x10EB | Signal festliegend hoch |
| 0x10EC | Temperaturgradient zu hoch |
| 0x10ED | Mechanischer- oder Hardwaredefekt |
| 0x10EE | Signal unterhalb Schwelle |
| 0x10EF | mechanischer- oder Hardwaredefekt |
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
| 0x10FB | Timeout (Ungültigkeitswert vom Kombi) |
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
| 0x1106 | Kurzschluss nach Plus oder 5V-Spannungsversorgung |
| 0x1107 | Magnetventil hängt in voll bestromter Stellung |
| 0x1108 | Magnetventil hängt in unbestromter Stellung |
| 0x1109 | oberer Öldruck außerhalb gültigem Bereich |
| 0x110A | unterer Öldruck außerhalb gültigem Bereich |
| 0x110B | Druck zu hoch vor Start |
| 0x110C | Druck zu niedrig vor Start |
| 0x110D | Sensorwert ändert sich nicht |
| 0x110E | Regelung instabil |
| 0x110F | CAN Bus off |
| 0x1110 | Timeout  |
| 0x1111 | Prüfsumme ungleich errechnetem Wert |
| 0x1112 | Aktualisierungszähler inkrementiert nicht (Alive-Zähler) |
| 0x1118 | Fehlfunktion |
| 0x112F | Drehrichtungserkennung |
| 0x1172 | Heiztakteinkopplung auf Signal |
| 0x117A | Kurzschluss |
| 0x11BD | Keine Kommunikation über BSD-Schnittstelle |
| 0x11C2 | unplausibel |
| 0x11F8 | Kurzschluss nach Masse |
| 0x124B | Aliveprüfung |
| 0x1276 | Druck zu niedrig im Hochdruck-System |
| 0x1277 | Druck zu niedrig im Niederdruck-System |
| 0x1278 | Gemisch im Leerlauf zu mager |
| 0x1279 | Gemisch im Leerlauf zu fett |
| 0x127A | Gemisch in volllast zu mager |
| 0x127B | Gemisch in volllast zu fett |
| 0x127C | Integralteil vom Regler außerhalb gültigem Bereich |
| 0x127D | Adaptive Kraftstoffmasse außerhalb gültigem Bereich |
| 0x127E | Berechnung adaptive Kraftstoffmasse ungültig |
| 0x127F | Unterer Schwellwert des Raildruckes unterschritten |
| 0x1280 | Oberer Schwellwert 2 des Raildruckes überschritten |
| 0x1281 | Oberer Schwellwert 1 des Raildruckes überschritten |
| 0x1282 | Kurzschluss nach Minus oder Leitungsnterbrechung |
| 0x1283 | Endstufe |
| 0x1284 | Regler Ausgangposition außerhalb gültigem Bereich |
| 0x1285 | Regelabweichung außerhalb gültigem Bereich |
| 0x1286 | oberer Adaptionswert außerhalb gültigem Bereich |
| 0x1287 | unterer Adaptionswert außerhalb gültigem Bereich |
| 0x1288 | obere Position nicht erreicht |
| 0x1289 | Adaptionsbedingungen nicht erfüllt |
| 0x128A | Gemisch zu fett (große Abweichung) |
| 0x128B | Gemisch zu mager (große Abweichung) |
| 0x128C | untere Schwelle1 erreicht |
| 0x128D | obere Schwelle2 erreicht |
| 0x128E | obere Schwelle1 erreicht |
| 0x128F | Adaptiertes minimales EFPPWM außerhalb gültigem Bereich |
| 0x1290 | Adaptives Integralteil von EFPWM außerhalb gültigem Bereich |
| 0x1291 | Integralteil von EFPPWM außerhalb gültigem Bereich |
| 0x1292 | Signal außerhalb gültigem Bereich |
| 0x1293 | Spannung zwischen Poti 1 und 2 unplausibel |
| 0x1294 | Umschaltung nach Homogen wegen Motormoment |
| 0x1295 | Umschaltung nach Homogen wegen Kraftstoffmassenstrom |
| 0x1296 | Kurzschluss Hochspannungsseite nach Niederspannungsseite |
| 0x1297 | Leitungsunterbrechung bei aufgeladenem Injektor |
| 0x1298 | Mengen Steuerventil Min-Kennlinie Adaption außerhalb Gültigkeitsbereich |
| 0x1299 | Mengen Steuerventil Basis-Kennlinie Adaption außerhalb Gültigkeitsbereich |
| 0x129A | Druck zu hoch |
| 0x129B | Druck zu niedrig |
| 0x129C | Unterer Schwellwert unterschritten |
| 0x129D | Oberer Schwellwert 2 überschritten |
| 0x129E | Oberer Schwellwert 1 überschritten |
| 0x129F | Maximale Diagnosegrenze erreicht |
| 0x12A0 | Minimale Diagnosegrenze erreicht |
| 0x12A1 | Zylinder selektive Lambdaregelung - obere Grenze erreicht |
| 0x12A2 | Zylinder selektive Lambdaregelung - untere Grenze erreicht |
| 0x12A3 | Kurzschluss Niederspannungsseite nach Minus |
| 0x12A4 | Kurzschluss Hochspannungsseite nach Minus |
| 0x12A5 | Kurzschluss Hochspannungsseite nach Plus |
| 0x12A6 | Kurzschluss Niederspannungsseite nach Plus |
| 0x12A7 | Entladungsfehler |
| 0x12A8 | Verbindungsfehler |
| 0x12A9 | Regelkreisschwingung |
| 0x12AA | Umschaltung in Notlauf-Betrieb, da Motoröldruck im Kennfeld-Betrieb zu niedrig |
| 0x12AB | Umschaltung in Notlauf-Betrieb, da Motoröldruck im Kennfeld-Betrieb zu hoch |
| 0x12AC | Kurzschluss nach minus |
| 0x12AD | Signalaktivität zu gering |
| 0x12AE | Nox-Signal zu niedrig |
| 0x12AF | Binäres Lambdasignal zu mager |
| 0x12B0 | Lineares Lambdasignal zu mager |
| 0x12B1 | Signal nicht Verfügbar im Betrieb |
| 0x12B2 | Signal nicht Verfügbar im Start |
| 0x12B3 | Versorgungsspannung |
| 0x12B4 | Heizleistung zu niedrig im Betrieb |
| 0x12B5 | Heizleistung zu niedrig im Start |
| 0x12B6 | Signal nicht plausibel |
| 0x12B7 | Offset-Fehler |
| 0x12B8 | Nox-Signal zu hoch |
| 0x12B9 | Lineares Lambdasignal zu fett |
| 0x12BA | Binäres Lambdasignal zu fett |
| 0x12BB | Zeitgesteuerter Regenerationsabbruch |
| 0x12BC | Regenerationsüberwachung |
| 0x12BD | Binäre Dynamik zu niedrig |
| 0x12BE | Niedrige Speicherkapazität |
| 0x12BF | Ladedruck zu niedrig |
| 0x12C0 | Ladedruck zu hoch |
| 0x12C4 | Klemmt in Schließrichtung |
| 0x12C5 | Klemmt in Öffnungsrichtung |
| 0x12CC | Integrierte Momentenreserve nicht erreicht |
| 0x12CD | Sondensignal zu träge nach Schubphase |
| 0x12CE | Gradient zu hoch |
| 0x12D2 | Maximale Zeit für Offsetabgleich überschritten |
| 0x12D3 | Offsetabgleich im hohen Verstärkungsbereich |
| 0x12D4 | Offsetabgleich im niedrigen Verstärkungsbereich |
| 0x12D5 | Strom zu hoch |
| 0x12D6 | Strom zu niedrig |
| 0x12D7 | Referenzpumpstrom abgeschaltet wegen Überstrom an Nernstleitung |
| 0x12D8 | Bänke ungleich |
| 0x12D9 | Ladedruckaufbau verboten |
| 0x12E4 | Sollwert überschritten |
| 0x12E5 | Sollwert wird nicht erreicht |
| 0x12E6 | überdrehzahl |
| 0x12E7 | Einspritzung wird verboten |
| 0x12E8 | Instrumentenkombination defekt |
| 0x12E9 | Brenndauer zu kurz |
| 0x1305 | Abweichung zwischen Verbrauch und Füllstandsänderung |
| 0x132A | Innenwiderstand zu hoch |
| 0x133D | Unterbrechung Abgleichleitung |
| 0x1340 | Sammelfehler |
| 0x1345 | Summenfehler |
| 0x137D | Zeitüberschreitung |
| 0x13CD | Gradient unplausibel |
| 0x13CE | Schwefelbelastung zu hoch |
| 0x1428 | unplausible Energie |
| 0x1429 | unplausible kleinmenge |
| 0x142C | additive Mengensteuerventil Kennlinien-Adaption außerhalb Gültigkeitsbereich  |
| 0x142D | Mengensteuerventil Druckkennlinien-Adaption außerhalb Gültigkeitsbereich  |
| 0x142E | multiplikative Mengensteuerventil Kennlinien-Adaption außerhalb Gültigkeitsbereich  |
| 0x1431 | Tuningschutz - maximal möglicher Luft/Kraftstoffdurchsatz überschritten |
| 0x1432 | Betriebsart unplausibel zu Lambda |
| 0x1468 | Druck unplausibel |
| 0x148C | langfristige Adaption zu hoch |
| 0x14AF | Geschwindigkeitssignal unplausibel |
| 0x14C6 | Erhöhte Laufunruhe im Schichtbetrieb |
| 0x14C7 | Erhöhte Laufunruhe im Schichtbetrieb im Motorwarmlauf  |
| 0x14D1 | Betriebstemperatur nicht erreicht |
| 0x14E2 | Signal im Nachlauf unplausibel |
| 0x153A | DC/DC Wandlerspannung ist niedrig |
| 0x153B | Grenzwert überschritten |
| 0x153C | Grenzwert unterschritten |
| 0x153D | falsch |
| 0x153E | Leerlaufdrehzahl zu lange zu hoch |
| 0x1542 | Grenzwert 1 überschritten |
| 0x1543 | Grenzwert 2 überschritten |
| 0x1559 | nicht angezogen |
| 0x155A | Gradient zu hoch oder Sprung |
| 0x155B | Offset zu hoch |
| 0x155C | Pumpe blockiert |
| 0x1561 | Typ unplausibel |
| 0x1562 |   |
| 0x1570 | Maximaldruck überschritten |
| 0x158A | Einspritzung wird abgeschaltet |
| 0x15A2 | Kurzschluss nach Masse oder Leitungsunterbrechung |
| 0x15A3 | Abbruch wegen Stromschwankungen bei Referenzmessung |
| 0x15A6 | Förderleistung außerhalb Grenzwert wegen Alterung |
| 0x15B2 | Kurzschluss nach plus |
| 0x15B5 | Federtest und Notluftprüfung verfehlt |
| 0x15B6 | Niveaumessung |
| 0x15B7 | Erhöhte Laufunruhe im Schichtbetrieb im Motorwarmlauf |
| 0x15BA | Bank1 fehlt |
| 0x15BB | Bank2 fehlt |
| 0x15BC | multiplikative Mengensteuerventil Kennlinien-Adaption außerhalb Gültigkeitsbereich |
| 0x15BD | Mengensteuerventil Druckkennlinien-Adaption außerhalb Gültigkeitsbereich |
| 0x15BE | additive Mengensteuerventil Kennlinien-Adaption außerhalb Gültigkeitsbereich |
| 0x15BF | Leckage größer 1,0 mm |
| 0x15C0 | zu niedrig |
| 0x15C1 | Druckschwankungen |
| 0x15CB | Zeit zu kurz in Korrelation zu Motorkühlmittel-Abkühlung |
| 0x15CC | Zeit zu lang in Korrelation zu Motorkühlmittel-Abkühlung |
| 0x15CD | Signal nach Nachlauf unplausibel |
| 0x15CE | Signal im Motorlauf unplausibel |
| 0x15D0 | nicht regelbar |
| 0x15D4 | Zündwinkel zu früh |
| 0x15DA | fehlt |
| 0x15E7 | berechnet |
| 0x15E8 | Typ falsch |
| 0x15F6 | Freischaltung nicht erfolgt |
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
| 0x1610 | Federtest und Prüfung Notluftposition nicht durchgeführt |
| 0x1611 | Erstadaption, unterer Anschlag nicht gelernt |
| 0x1612 | Prüfung Notluftposition |
| 0x1613 | fehlen, Neuadaption erforderlich |
| 0x1614 | unterer Anschlag nicht adaptiert |
| 0x1615 | Gleichlauffehler zwischen Poti 1 und Poti 2 |
| 0x1616 | Signal unplausibel  |
| 0x161A | außerhalb der Toleranz |
| 0x161B | Überspannung erkannt |
| 0x161C | Trockenlauf erkannt |
| 0x161D | Unterspannung erkannt |
| 0x1620 | keine Spannung |
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
| 0x1641 | Signaländerung zu schnell |
| 0x1642 | festliegend |
| 0x1646 | Temperatur zu hoch |
| 0x1647 | Messung im Steuergerät fehlgeschlagen |
| 0x1648 | Luftmasse zu niedrig |
| 0x1649 | Luftmasse zu Kraftstoffmasse unplausibel |
| 0x1673 | Gemisch zu fett, große Abweichung |
| 0x1674 | Gemisch zu mager, große Abweichung |
| 0x1675 | Periodendauer zu niedrig, Luftmasse zu niedrig |
| 0x1676 | klemmt in voll bestromter Stellung (minimaler Öldruck) |
| 0x1677 | klemmt in unbestromter Stellung (maximaler Öldruck) |
| 0x1678 | Plausibilität, Druck vor Motorstart zu hoch |
| 0x1679 | Plausibilität, Druck vor Motorstart zu niedrig |
| 0x167A | Druckaufbau gesperrt |
| 0x167B | Signal, elektrischer Fehler |
| 0x167C | Arbeitsbereich, Periodendauer zu groß, Luftmasse zu hoch |
| 0x167D | Gemisch im Teillast zu mager |
| 0x167E | Gemisch im Teillast zu fett |
| 0x167F | Druck zu niedrig im Hochdrucksystem |
| 0x1680 | Druck zu niedrig im Niederdrucksystem |
| 0x16C7 | Förderleistung zu niedrig wegen Alterung |
| 0x16C8 | Förderleistung außerhalb gültigem Bereich |
| 0x16C9 | Pumpenstrom zu groß bei Referenzmessung |
| 0x16CA | Pumpenstrom zu klein bei Referenzmessung |
| 0x16CB | Pumpenstrom bei Ventilprüfung erreicht Grenzwert |
| 0x16D0 | Kommunikation mit Kühlmittelpumpe fehlerhaft |
| 0x16D3 | Drehzahl Kühlmittelpumpe außerhalb der Toleranz |
| 0x16D4 | Abschaltung Kühlmittelpumpe wegen Überspannung |
| 0x16D5 | Abschaltung Kühlmittelpumpe wegen Blockierung |
| 0x16D6 | Abschaltung Kühlmittelpumpe wegen Übertemperatur |
| 0x16D7 | Kühlmittelverlust durch Kühlmittelpumpe erkannt |
| 0x16D8 | Versorgungsspannung Kühlmittelpumpe zu niedrig |
| 0x16D9 | Kühlmittelpumpe Temperaturschwelle 1 überschritten |
| 0x16DA | Kühlmittelpumpe Temperaturschwelle 2 überschritten |
| 0x16DB | kein Notlaufsignal an Kühlmittelpumpe |
| 0x16EB | Geschwindigkeit zu niedrig bei niedrigem Lastzustand |
| 0x16EC | Geschwindigkeit zu hoch |
| 0x16ED | festliegend auf Null |
| 0x16EE | Geschwindigkeit unplausibel oder CAN-Bus Kommunikation gestört |
| 0x16F0 | Anzahl Einspritzungen unplausibel |
| 0x16F2 | Einspritzabschaltung |
| 0x16F8 | instabil |
| 0x16F9 | Position nicht erreicht |
| 0x16FA | Druckanstieg zu schnell |
| 0x16FB | Druckabfall zu schnell |
| 0x16FD | Drehzahl unplausibel |
| 0x16FE | Betriebsart zu Lambdawert unplausibel |
| 0x1700 | Arbeitsbereich, Spannung zu hoch |
| 0x1701 | Arbeitsbereich, Spannung zu niedrig |
| 0x1703 | Fehlfunktion Bandende |
| 0x1704 | Regelfehler, Position nicht erreicht |
| 0x1705 | Zähnezahl falsch |
| 0x1706 | Zahnzeit unplausibel |
| 0x1707 | Winkelunterschied außerhalb Grenzwert |
| 0x1708 | Nockenwellensignal außerhalb Grenzwert |
| 0x1709 | Segmentzeitfehler |
| 0x170A | DISA 1 Schalter defekt |
| 0x170B | DISA 2 Schalter defekt |
| 0x170C | mechanischer Fehler oder Stellmotor defekt |
| 0x170D | RAM-Baustein |
| 0x170E | SPI-Kommunikation gestört |
| 0x1712 | nicht erfüllbar |
| 0x1713 | Plausibilität, CAN Wert unplausibel |
| 0x1714 | Motorgeräusch unter Grenzwert |
| 0x1715 | Motorgeräusch über Grenzwert |
| 0x1716 | fehlen |
| 0x1717 | Kompabilität, Version nicht plausibel |
| 0x1718 | erweiterte Kommunikation, Fehlfunktion |
| 0x1719 | Signal, BSD-Bus-Fehler |
| 0x171A | Spannung unplausibel |
| 0x171B | Strom unplausibel |
| 0x171C | Wake-up-Leitung, elektrisch, Leitungsunterbrechung |
| 0x171D | Wake-up-Leitung, elektrisch, Kurzschluss nach Plus oder Masse |
| 0x171E | Eigendiagnose, Systemfehler |
| 0x171F | Permittivitätsfehler |
| 0x1720 | Antwort unplausible |
| 0x1721 | Prüfsummenfehler |
| 0x1722 | Leitungsunterbrechung oder Schalter klemmt |
| 0x1723 | Wert Zeitzähler Kombi unplausibel im Motorlauf/Nachlauf |
| 0x1724 | Wert Zeitzähler Kombi unplausibel im Wake-up |
| 0x1725 | Wert Zeitzähler Kombi unplausibel im Motorlauf |
| 0x1726 | Wert Zeitzähler Kombi unplausibel im Nachlauf |
| 0x1727 | Sollwert nicht erreicht |
| 0x1728 | Ausgangsposition nicht erreicht |
| 0x1729 | klemmt in Öffnungsrichtung |
| 0x172A | klemmt in Schließrichtung |
| 0x172B | langfristige Adaption unplausibel |
| 0x172C | Bankausfall oder Motorausfall |
| 0x172D | Intelligenter Batteriesensor: Wake-up-Leitung, elektrisch, Leitungsunterbrechung |
| 0x172E | Energie-Nominalwert |
| 0x172F | Kleinmengen-Nominalwert |
| 0x1731 | Gleichlauffehler zwischen Potentiometer 1 und 2 |
| 0x1735 | Falschluft erkannt |
| 0x1736 | fehlt oder Fahrgestellnummer falsch |
| 0x1737 | nicht erfolgt |
| 0x1738 | CAN-Bus Off oder CAN-Bus defekt |
| 0x173C | Niveau zu niedrig |
| 0x173D | falscher Datensatz, Variantenüberwachung |
| 0x173E | falscher Datensatz, CAN Timeout |
| 0x173F | Funktionsfreischaltung, Leistungserhöhung nicht erfolgt |
| 0xFFFF | unbekannte Fehlerart |

### FARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| 0x29CC | 0x1345 | 0x162C | 0x162D | 0x158A |
| 0x29CD | 0x0000 | 0x162C | 0x162D | 0x158A |
| 0x29CE | 0x0000 | 0x162C | 0x162D | 0x158A |
| 0x29CF | 0x0000 | 0x162C | 0x162D | 0x158A |
| 0x29D0 | 0x0000 | 0x162C | 0x162D | 0x158A |
| 0x29D1 | 0x0000 | 0x162C | 0x162D | 0x158A |
| 0x29D2 | 0x0000 | 0x162C | 0x162D | 0x158A |
| 0x29D9 | 0x0000 | 0x0000 | 0x1007 | 0x0000 |
| 0x29DA | 0x0000 | 0x0000 | 0x153B | 0x0000 |
| 0x29DB | 0x0000 | 0x0000 | 0x1006 | 0x0000 |
| 0x29DC | 0x1007 | 0x0000 | 0x1680 | 0x167F |
| 0x29E0 | 0x1009 | 0x1008 | 0x1279 | 0x1278 |
| 0x29E1 | 0x1009 | 0x1008 | 0x1279 | 0x1278 |
| 0x29E2 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x29E5 | 0x0000 | 0x0000 | 0x127A | 0x127B |
| 0x29E6 | 0x0000 | 0x0000 | 0x127A | 0x127B |
| 0x29F1 | 0x0000 | 0x127C | 0x129B | 0x129A |
| 0x29F2 | 0x0000 | 0x129B | 0x1280 | 0x129A |
| 0x29F3 | 0x0000 | 0x0000 | 0x163A | 0x163B |
| 0x29F4 | 0x0000 | 0x0000 | 0x100B | 0x162B |
| 0x29F5 | 0x0000 | 0x0000 | 0x100B | 0x162B |
| 0x29F6 | 0x0000 | 0x0000 | 0x100A | 0x100A |
| 0x29F7 | 0x0000 | 0x0000 | 0x100A | 0x100A |
| 0x2A0C | 0x0000 | 0x0000 | 0x1727 | 0x12E4 |
| 0x2A0D | 0x0000 | 0x0000 | 0x0000 | 0x1283 |
| 0x2A0E | 0x0000 | 0x0000 | 0x1284 | 0x1285 |
| 0x2A0F | 0x1286 | 0x1288 | 0x1287 | 0x1289 |
| 0x2A10 | 0x0000 | 0x0000 | 0x1015 | 0x1060 |
| 0x2A12 | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2A13 | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2A15 | 0x0000 | 0x0000 | 0x0000 | 0x15BF |
| 0x2A16 | 0x0000 | 0x0000 | 0x101B | 0x0000 |
| 0x2A17 | 0x101D | 0x15A3 | 0x101F | 0x101C |
| 0x2A18 | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2A19 | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2A1A | 0x1118 | 0x1703 | 0x0000 | 0x0000 |
| 0x2A1B | 0x0000 | 0x0000 | 0x0000 | 0x1023 |
| 0x2A1C | 0x1024 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A22 | 0x1305 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A26 | 0x0000 | 0x0000 | 0x0000 | 0x100A |
| 0x2A27 | 0x0000 | 0x0000 | 0x0000 | 0x100A |
| 0x2A29 | 0x0000 | 0x0000 | 0x0000 | 0x1636 |
| 0x2A2B | 0x0000 | 0x0000 | 0x1673 | 0x1674 |
| 0x2A2C | 0x0000 | 0x0000 | 0x1673 | 0x1674 |
| 0x2A2D | 0x0000 | 0x129B | 0x1570 | 0x129A |
| 0x2A78 | 0x16F9 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A79 | 0x16F9 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A7A | 0x15D0 | 0x0000 | 0x0000 | 0x15D0 |
| 0x2A7C | 0x15D0 | 0x0000 | 0x0000 | 0x15D0 |
| 0x2A80 | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2A82 | 0x1704 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A85 | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2A87 | 0x1704 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A94 | 0x0000 | 0x0000 | 0x11C2 | 0x15DA |
| 0x2A95 | 0x0000 | 0x0000 | 0x0000 | 0x1118 |
| 0x2A96 | 0x0000 | 0x0000 | 0x0000 | 0x1705 |
| 0x2A97 | 0x0000 | 0x0000 | 0x0000 | 0x1706 |
| 0x2A98 | 0x0000 | 0x0000 | 0x0000 | 0x1707 |
| 0x2A99 | 0x0000 | 0x0000 | 0x0000 | 0x1707 |
| 0x2A9A | 0x0000 | 0x0000 | 0x0000 | 0x1708 |
| 0x2A9B | 0x0000 | 0x0000 | 0x0000 | 0x1708 |
| 0x2A9E | 0x0000 | 0x0000 | 0x0000 | 0x1118 |
| 0x2A9F | 0x0000 | 0x0000 | 0x0000 | 0x1118 |
| 0x2AA0 | 0x0000 | 0x0000 | 0x0000 | 0x1049 |
| 0x2AA1 | 0x0000 | 0x0000 | 0x0000 | 0x1049 |
| 0x2AA2 | 0x0000 | 0x0000 | 0x0000 | 0x1709 |
| 0x2AA3 | 0x0000 | 0x0000 | 0x0000 | 0x1709 |
| 0x2AA4 | 0x0000 | 0x0000 | 0x0000 | 0x1050 |
| 0x2AA5 | 0x0000 | 0x0000 | 0x0000 | 0x1050 |
| 0x2AA8 | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2AA9 | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2AAA | 0x0000 | 0x0000 | 0x170A | 0x170B |
| 0x2AAB | 0x170C | 0x0000 | 0x0000 | 0x0000 |
| 0x2AAC | 0x170C | 0x0000 | 0x0000 | 0x0000 |
| 0x2AAD | 0x0000 | 0x1054 | 0x0000 | 0x0000 |
| 0x2AAE | 0x1055 | 0x1058 | 0x1056 | 0x1057 |
| 0x2AAF | 0x0000 | 0x16C7 | 0x15A6 | 0x16C8 |
| 0x2AB2 | 0x0000 | 0x0000 | 0x1059 | 0x170D |
| 0x2AB3 | 0x0000 | 0x105B | 0x105C | 0x105D |
| 0x2AB4 | 0x0000 | 0x0000 | 0x0000 | 0x105E |
| 0x2AB5 | 0x0000 | 0x170E | 0x0000 | 0x0000 |
| 0x2AB6 | 0x0000 | 0x170E | 0x0000 | 0x0000 |
| 0x2ABC | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2ABD | 0x1468 | 0x0000 | 0x0000 | 0x0000 |
| 0x2AC6 | 0x0000 | 0x0000 | 0x1015 | 0x1060 |
| 0x2ACA | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2ACB | 0x0000 | 0x0000 | 0x1559 | 0x1062 |
| 0x2ACC | 0x153A | 0x0000 | 0x1063 | 0x1063 |
| 0x2AD0 | 0x1064 | 0x0000 | 0x0000 | 0x0000 |
| 0x2ADF | 0x0000 | 0x0000 | 0x1056 | 0x1057 |
| 0x2AE0 | 0x0000 | 0x0000 | 0x1056 | 0x1057 |
| 0x2AE2 | 0x16FD | 0x0000 | 0x0000 | 0x0000 |
| 0x2AE4 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2AEC | 0x0000 | 0x0000 | 0x1543 | 0x1542 |
| 0x2AED | 0x0000 | 0x0000 | 0x0000 | 0x153D |
| 0x2AF0 | 0x117A | 0x1016 | 0x0000 | 0x0000 |
| 0x2AF2 | 0x117A | 0x1016 | 0x0000 | 0x0000 |
| 0x2AF4 | 0x117A | 0x1016 | 0x0000 | 0x0000 |
| 0x2AF6 | 0x117A | 0x1016 | 0x0000 | 0x0000 |
| 0x2AFB | 0x117A | 0x1016 | 0x0000 | 0x0000 |
| 0x2AFE | 0x0000 | 0x0000 | 0x1543 | 0x1542 |
| 0x2B00 | 0x0000 | 0x0000 | 0x0000 | 0x12E6 |
| 0x2B05 | 0x117A | 0x1016 | 0x0000 | 0x0000 |
| 0x2B06 | 0x117A | 0x1016 | 0x0000 | 0x0000 |
| 0x2B07 | 0x117A | 0x1016 | 0x0000 | 0x0000 |
| 0x2B08 | 0x117A | 0x1016 | 0x0000 | 0x0000 |
| 0x2B09 | 0x117A | 0x1016 | 0x0000 | 0x0000 |
| 0x2B0A | 0x117A | 0x1016 | 0x0000 | 0x0000 |
| 0x2B0B | 0x117A | 0x1016 | 0x0000 | 0x0000 |
| 0x2B28 | 0x0000 | 0x0000 | 0x162E | 0x0000 |
| 0x2B29 | 0x101D | 0x15A3 | 0x101F | 0x101C |
| 0x2B2C | 0x0000 | 0x0000 | 0x129B | 0x129A |
| 0x2B3A | 0x0000 | 0x0000 | 0x0000 | 0x16C9 |
| 0x2B3B | 0x0000 | 0x0000 | 0x16CA | 0x0000 |
| 0x2B3C | 0x0000 | 0x15A3 | 0x0000 | 0x0000 |
| 0x2B3D | 0x16CB | 0x0000 | 0x0000 | 0x0000 |
| 0x2B48 | 0x167E | 0x167D | 0x1279 | 0x1278 |
| 0x2B49 | 0x167E | 0x167D | 0x1279 | 0x1278 |
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
| 0x2C39 | 0x0000 | 0x0000 | 0x1602 | 0x106C |
| 0x2C3A | 0x0000 | 0x0000 | 0x1602 | 0x106C |
| 0x2C3B | 0x0000 | 0x0000 | 0x0000 | 0x1735 |
| 0x2C3C | 0x0000 | 0x0000 | 0x0000 | 0x1735 |
| 0x2C3D | 0x133D | 0x1609 | 0x1609 | 0x106F |
| 0x2C3E | 0x133D | 0x1609 | 0x1609 | 0x106F |
| 0x2C3F | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2C40 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2C41 | 0x0000 | 0x0000 | 0x1071 | 0x1072 |
| 0x2C42 | 0x0000 | 0x0000 | 0x1071 | 0x1072 |
| 0x2C6A | 0x1605 | 0x0000 | 0x0000 | 0x0000 |
| 0x2C6B | 0x0000 | 0x0000 | 0x1606 | 0x1607 |
| 0x2C6C | 0x0000 | 0x0000 | 0x1606 | 0x1607 |
| 0x2C6D | 0x1602 | 0x1602 | 0x0000 | 0x0000 |
| 0x2C6E | 0x1602 | 0x1602 | 0x0000 | 0x0000 |
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
| 0x2C87 | 0x0000 | 0x0000 | 0x1015 | 0x1060 |
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
| 0x2CB2 | 0x0000 | 0x0000 | 0x0000 | 0x160A |
| 0x2CB3 | 0x0000 | 0x0000 | 0x0000 | 0x160A |
| 0x2CB4 | 0x0000 | 0x0000 | 0x0000 | 0x160A |
| 0x2CB5 | 0x0000 | 0x0000 | 0x0000 | 0x160A |
| 0x2CB6 | 0x0000 | 0x0000 | 0x0000 | 0x1606 |
| 0x2CB7 | 0x0000 | 0x0000 | 0x0000 | 0x1606 |
| 0x2CB8 | 0x0000 | 0x0000 | 0x0000 | 0x1607 |
| 0x2CB9 | 0x0000 | 0x0000 | 0x0000 | 0x1607 |
| 0x2CEC | 0x0000 | 0x0000 | 0x0000 | 0x107B |
| 0x2CED | 0x0000 | 0x0000 | 0x0000 | 0x107C |
| 0x2CEE | 0x0000 | 0x0000 | 0x0000 | 0x160C |
| 0x2CEF | 0x0000 | 0x1118 | 0x0000 | 0x0000 |
| 0x2CF6 | 0x160D | 0x0000 | 0x0000 | 0x0000 |
| 0x2CF7 | 0x160D | 0x0000 | 0x0000 | 0x0000 |
| 0x2CF9 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2CFA | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2CFB | 0x1611 | 0x1610 | 0x160F | 0x160E |
| 0x2CFC | 0x0000 | 0x0000 | 0x1612 | 0x1087 |
| 0x2CFD | 0x0000 | 0x0000 | 0x0000 | 0x1613 |
| 0x2CFE | 0x0000 | 0x0000 | 0x0000 | 0x1614 |
| 0x2D06 | 0x0000 | 0x0000 | 0x1648 | 0x163F |
| 0x2D07 | 0x1731 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D09 | 0x0000 | 0x1094 | 0x0000 | 0x0000 |
| 0x2D0B | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2D0C | 0x0000 | 0x0000 | 0x1729 | 0x172A |
| 0x2D0E | 0x0000 | 0x0000 | 0x1081 | 0x1014 |
| 0x2D0F | 0x0000 | 0x1340 | 0x0000 | 0x1340 |
| 0x2D15 | 0x0000 | 0x0000 | 0x0000 | 0x1675 |
| 0x2D16 | 0x0000 | 0x0000 | 0x103D | 0x1091 |
| 0x2D18 | 0x0000 | 0x0000 | 0x0000 | 0x163F |
| 0x2D1B | 0x1701 | 0x1700 | 0x163A | 0x163B |
| 0x2D1C | 0x1701 | 0x1700 | 0x163A | 0x163B |
| 0x2D1D | 0x1630 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D1E | 0x1631 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D1F | 0x1094 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D20 | 0x1632 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D25 | 0x0000 | 0x0000 | 0x0000 | 0x1431 |
| 0x2D27 | 0x0000 | 0x0000 | 0x167C | 0x167B |
| 0x2D28 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2D29 | 0x0000 | 0x0000 | 0x129B | 0x129A |
| 0x2D2A | 0x1468 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D2B | 0x1468 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D2E | 0x0000 | 0x0000 | 0x129B | 0x129A |
| 0x2D33 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2D35 | 0x1098 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D50 | 0x0000 | 0x1099 | 0x109B | 0x109A |
| 0x2D52 | 0x1118 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D53 | 0x1118 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D55 | 0x1118 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D56 | 0x109D | 0x109E | 0x0000 | 0x0000 |
| 0x2D57 | 0x109F | 0x10A0 | 0x0000 | 0x10A1 |
| 0x2D58 | 0x10A2 | 0x10A4 | 0x10A3 | 0x10A5 |
| 0x2D59 | 0x1018 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D5A | 0x1065 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D5C | 0x1118 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D5F | 0x10A6 | 0x10A9 | 0x10A7 | 0x10A8 |
| 0x2D60 | 0x1649 | 0x16FE | 0x0000 | 0x0000 |
| 0x2D61 | 0x163C | 0x0000 | 0x0000 | 0x0000 |
| 0x2D64 | 0x0000 | 0x0000 | 0x1294 | 0x1295 |
| 0x2D67 | 0x1628 | 0x1627 | 0x10AC | 0x10AD |
| 0x2DB5 | 0x1018 | 0x0000 | 0x0000 | 0x0000 |
| 0x2DB6 | 0x10AE | 0x0000 | 0x0000 | 0x0000 |
| 0x2DB7 | 0x10AF | 0x0000 | 0x0000 | 0x0000 |
| 0x2DBE | 0x0000 | 0x0000 | 0x10B0 | 0x10B1 |
| 0x2DC0 | 0x10B2 | 0x0000 | 0x0000 | 0x10B3 |
| 0x2DC3 | 0x1018 | 0x10B4 | 0x11F8 | 0x1014 |
| 0x2DC5 | 0x1712 | 0x0000 | 0x0000 | 0x0000 |
| 0x2DC8 | 0x0000 | 0x10B5 | 0x0000 | 0x0000 |
| 0x2DC9 | 0x10B6 | 0x10B5 | 0x10B7 | 0x0000 |
| 0x2DE1 | 0x10BA | 0x0000 | 0x1015 | 0x1060 |
| 0x2DE2 | 0x10BA | 0x0000 | 0x1015 | 0x1060 |
| 0x2DE4 | 0x1713 | 0x0000 | 0x163A | 0x163B |
| 0x2DE5 | 0x1713 | 0x0000 | 0x163A | 0x163B |
| 0x2DEB | 0x0000 | 0x10BB | 0x1031 | 0x1032 |
| 0x2DEC | 0x10BC | 0x0000 | 0x10BD | 0x0000 |
| 0x2DED | 0x10BE | 0x0000 | 0x0000 | 0x0000 |
| 0x2DF0 | 0x0000 | 0x0000 | 0x0000 | 0x1700 |
| 0x2DF1 | 0x0000 | 0x0000 | 0x0000 | 0x1701 |
| 0x2E18 | 0x0000 | 0x0000 | 0x12E9 | 0x0000 |
| 0x2E19 | 0x0000 | 0x0000 | 0x12E9 | 0x0000 |
| 0x2E1A | 0x0000 | 0x0000 | 0x12E9 | 0x0000 |
| 0x2E1B | 0x0000 | 0x0000 | 0x12E9 | 0x0000 |
| 0x2E1C | 0x0000 | 0x0000 | 0x12E9 | 0x0000 |
| 0x2E1D | 0x0000 | 0x0000 | 0x12E9 | 0x0000 |
| 0x2E30 | 0x1297 | 0x1014 | 0x11F8 | 0x1016 |
| 0x2E31 | 0x1297 | 0x1014 | 0x11F8 | 0x1016 |
| 0x2E32 | 0x1297 | 0x1014 | 0x11F8 | 0x1016 |
| 0x2E33 | 0x1297 | 0x1014 | 0x11F8 | 0x1016 |
| 0x2E34 | 0x1297 | 0x1014 | 0x11F8 | 0x1016 |
| 0x2E35 | 0x1297 | 0x1014 | 0x11F8 | 0x1016 |
| 0x2E61 | 0x0000 | 0x0000 | 0x15BB | 0x15BA |
| 0x2E62 | 0x0000 | 0x0000 | 0x0000 | 0x16F0 |
| 0x2E68 | 0x11C2 | 0x0000 | 0x1714 | 0x1715 |
| 0x2E69 | 0x11C2 | 0x0000 | 0x1714 | 0x1715 |
| 0x2E74 | 0x0000 | 0x0000 | 0x172B | 0x0000 |
| 0x2E75 | 0x0000 | 0x0000 | 0x172B | 0x0000 |
| 0x2E77 | 0x172C | 0x0000 | 0x0000 | 0x0000 |
| 0x2E7A | 0x0000 | 0x0000 | 0x0000 | 0x15D4 |
| 0x2E7B | 0x0000 | 0x0000 | 0x0000 | 0x15D4 |
| 0x2E7C | 0x0000 | 0x1071 | 0x0000 | 0x0000 |
| 0x2E7F | 0x0000 | 0x1716 | 0x0000 | 0x0000 |
| 0x2E81 | 0x0000 | 0x0000 | 0x0000 | 0x16D3 |
| 0x2E82 | 0x0000 | 0x16D5 | 0x16D4 | 0x16D6 |
| 0x2E83 | 0x16DA | 0x16D9 | 0x16D8 | 0x16D7 |
| 0x2E84 | 0x0000 | 0x16D0 | 0x0000 | 0x0000 |
| 0x2E85 | 0x16DB | 0x0000 | 0x0000 | 0x0000 |
| 0x2E8B | 0x1717 | 0x1719 | 0x0000 | 0x1718 |
| 0x2E8C | 0x171B | 0x171A | 0x0000 | 0x1067 |
| 0x2E8D | 0x171C | 0x171E | 0x0000 | 0x171D |
| 0x2E8E | 0x0000 | 0x15DA | 0x0000 | 0x0000 |
| 0x2E96 | 0x0000 | 0x0000 | 0x0000 | 0x10DB |
| 0x2E97 | 0x10DD | 0x1091 | 0x1561 | 0x1055 |
| 0x2E98 | 0x0000 | 0x15DA | 0x0000 | 0x0000 |
| 0x2E9F | 0x171F | 0x1071 | 0x15B6 | 0x10DF |
| 0x2EA1 | 0x0000 | 0x10F0 | 0x0000 | 0x0000 |
| 0x2EAE | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0x2EAF | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0x2ECC | 0x0000 | 0x0000 | 0x0000 | 0x10F0 |
| 0x2ECD | 0x0000 | 0x0000 | 0x0000 | 0x1118 |
| 0x2ECE | 0x0000 | 0x0000 | 0x0000 | 0x15E7 |
| 0x2ECF | 0x0000 | 0x0000 | 0x0000 | 0x1055 |
| 0x2ED0 | 0x0000 | 0x0000 | 0x0000 | 0x10E5 |
| 0x2ED1 | 0x0000 | 0x0000 | 0x0000 | 0x1118 |
| 0x2ED2 | 0x0000 | 0x0000 | 0x0000 | 0x15E8 |
| 0x2ED3 | 0x0000 | 0x0000 | 0x0000 | 0x15E8 |
| 0x2EE0 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2EE1 | 0x10E8 | 0x0000 | 0x0000 | 0x0000 |
| 0x2EE2 | 0x1633 | 0x0000 | 0x0000 | 0x0000 |
| 0x2EE3 | 0x1634 | 0x0000 | 0x0000 | 0x0000 |
| 0x2EE6 | 0x1646 | 0x0000 | 0x0000 | 0x0000 |
| 0x2EEA | 0x0000 | 0x0000 | 0x1015 | 0x1060 |
| 0x2EEB | 0x10EC | 0x0000 | 0x0000 | 0x0000 |
| 0x2EEC | 0x1018 | 0x0000 | 0x0000 | 0x1090 |
| 0x2EF4 | 0x1019 | 0x0000 | 0x0000 | 0x0000 |
| 0x2EF5 | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2EF7 | 0x0000 | 0x1016 | 0x0000 | 0x0000 |
| 0x2EF8 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x2EFE | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2EFF | 0x10ED | 0x0000 | 0x0000 | 0x0000 |
| 0x2F08 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2F09 | 0x1636 | 0x0000 | 0x163E | 0x163D |
| 0x2F0A | 0x0000 | 0x0000 | 0x1015 | 0x1060 |
| 0x2F0C | 0x1634 | 0x1637 | 0x0000 | 0x0000 |
| 0x2F0D | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2F10 | 0x0000 | 0x0000 | 0x0000 | 0x1118 |
| 0x2F11 | 0x1071 | 0x0000 | 0x10F1 | 0x10F2 |
| 0x2F12 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2F13 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2F15 | 0x1636 | 0x0000 | 0x163E | 0x163D |
| 0x2F30 | 0x1640 | 0x1637 | 0x0000 | 0x155A |
| 0x2F49 | 0x1720 | 0x0000 | 0x10F4 | 0x0000 |
| 0x2F4A | 0x1721 | 0x137D | 0x10F6 | 0x10F7 |
| 0x2F4B | 0x1721 | 0x10FA | 0x10F9 | 0x10F8 |
| 0x2F4C | 0x0000 | 0x15DA | 0x10F6 | 0x0000 |
| 0x2F4E | 0x0000 | 0x1049 | 0x0000 | 0x0000 |
| 0x2F4F | 0x1018 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F52 | 0x0000 | 0x0000 | 0x0000 | 0x11C2 |
| 0x2F53 | 0x0000 | 0x0000 | 0x0000 | 0x11C2 |
| 0x2F54 | 0x0000 | 0x0000 | 0x0000 | 0x11C2 |
| 0x2F55 | 0x0000 | 0x0000 | 0x0000 | 0x11C2 |
| 0x2F56 | 0x0000 | 0x0000 | 0x0000 | 0x16EB |
| 0x2F57 | 0x0000 | 0x0000 | 0x0000 | 0x11C2 |
| 0x2F58 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2F5B | 0x0000 | 0x0000 | 0x0000 | 0x1642 |
| 0x2F5C | 0x0000 | 0x0000 | 0x0000 | 0x16EC |
| 0x2F5D | 0x0000 | 0x0000 | 0x0000 | 0x16ED |
| 0x2F5E | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2F5F | 0x0000 | 0x16EE | 0x0000 | 0x0000 |
| 0x2F60 | 0x14AF | 0x0000 | 0x0000 | 0x0000 |
| 0x2F63 | 0x1018 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F64 | 0x1018 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F67 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2F6C | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2F71 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2F76 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2F77 | 0x0000 | 0x0000 | 0x16FB | 0x16FA |
| 0x2F79 | 0x1468 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F7A | 0x1468 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F7B | 0x0000 | 0x1722 | 0x0000 | 0x0000 |
| 0x2F7E | 0x15CB | 0x0000 | 0x0000 | 0x0000 |
| 0x2F7F | 0x15CC | 0x0000 | 0x0000 | 0x0000 |
| 0x2F80 | 0x1018 | 0x10FB | 0x0000 | 0x0000 |
| 0x2F81 | 0x0000 | 0x1723 | 0x0000 | 0x0000 |
| 0x2F82 | 0x1724 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F83 | 0x1725 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F84 | 0x1726 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F85 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2F8F | 0x1638 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F91 | 0x0000 | 0x0000 | 0x0000 | 0x153E |
| 0x2F94 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2F99 | 0x1067 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F9A | 0x0000 | 0x1639 | 0x163A | 0x163B |
| 0x2F9E | 0x1018 | 0x1049 | 0x173C | 0x0000 |
| 0x2FA3 | 0x10FF | 0x1736 | 0x0000 | 0x0000 |
| 0x2FA4 | 0x173D | 0x173E | 0x173F | 0x0000 |
| 0x2FAB | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2FBC | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2FBD | 0x0000 | 0x0000 | 0x1298 | 0x1299 |
| 0x2FBE | 0x0000 | 0x0000 | 0x0000 | 0x129A |
| 0x2FBF | 0x0000 | 0x0000 | 0x0000 | 0x129B |
| 0x2FC0 | 0x0000 | 0x129B | 0x129A | 0x129A |
| 0x2FC3 | 0x0000 | 0x15BD | 0x15BC | 0x15BE |
| 0x2FC6 | 0x0000 | 0x1103 | 0x1104 | 0x1105 |
| 0x2FC7 | 0x0000 | 0x0000 | 0x1104 | 0x0000 |
| 0x2FCA | 0x0000 | 0x0000 | 0x0000 | 0x129B |
| 0x2FDA | 0x0000 | 0x0000 | 0x0000 | 0x129B |
| 0x2FDB | 0x0000 | 0x0000 | 0x0000 | 0x129B |
| 0x2FDC | 0x0000 | 0x0000 | 0x0000 | 0x129B |
| 0x2FE4 | 0x1118 | 0x0000 | 0x0000 | 0x0000 |
| 0x2FE5 | 0x1118 | 0x0000 | 0x0000 | 0x0000 |
| 0x2FE6 | 0x1118 | 0x0000 | 0x0000 | 0x0000 |
| 0x2FE7 | 0x1118 | 0x0000 | 0x0000 | 0x0000 |
| 0x3070 | 0x0000 | 0x0000 | 0x1009 | 0x1008 |
| 0x3071 | 0x0000 | 0x0000 | 0x1009 | 0x1008 |
| 0x3072 | 0x0000 | 0x0000 | 0x1009 | 0x1008 |
| 0x3073 | 0x0000 | 0x0000 | 0x1009 | 0x1008 |
| 0x3074 | 0x0000 | 0x0000 | 0x1009 | 0x1008 |
| 0x3075 | 0x0000 | 0x0000 | 0x1009 | 0x1008 |
| 0x307C | 0x0000 | 0x0000 | 0x1009 | 0x1008 |
| 0x307D | 0x0000 | 0x0000 | 0x1009 | 0x1008 |
| 0x307E | 0x0000 | 0x0000 | 0x1009 | 0x1008 |
| 0x307F | 0x0000 | 0x0000 | 0x1009 | 0x1008 |
| 0x3080 | 0x0000 | 0x0000 | 0x1009 | 0x1008 |
| 0x3081 | 0x0000 | 0x0000 | 0x1009 | 0x1008 |
| 0x30A0 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x30A1 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x30A2 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x30A3 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x30A4 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x30A5 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x30AC | 0x12A3 | 0x12A5 | 0x12A6 | 0x12A4 |
| 0x30AD | 0x12A3 | 0x12A5 | 0x12A6 | 0x12A4 |
| 0x30AE | 0x12A3 | 0x12A5 | 0x12A6 | 0x12A4 |
| 0x30AF | 0x12A3 | 0x12A5 | 0x12A6 | 0x12A4 |
| 0x30B0 | 0x12A3 | 0x12A5 | 0x12A6 | 0x12A4 |
| 0x30B1 | 0x12A3 | 0x12A5 | 0x12A6 | 0x12A4 |
| 0x30BA | 0x0000 | 0x12A7 | 0x1016 | 0x1072 |
| 0x30BB | 0x0000 | 0x12A7 | 0x1016 | 0x1072 |
| 0x30BE | 0x172F | 0x172E | 0x0000 | 0x0000 |
| 0x30C0 | 0x0000 | 0x0000 | 0x0000 | 0x15C1 |
| 0x30C1 | 0x0000 | 0x0000 | 0x129B | 0x129A |
| 0x30C2 | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x30C3 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x30C4 | 0x0000 | 0x0000 | 0x1677 | 0x1676 |
| 0x30C5 | 0x0000 | 0x0000 | 0x129B | 0x129A |
| 0x30C6 | 0x1636 | 0x0000 | 0x1679 | 0x1678 |
| 0x30C7 | 0x0000 | 0x0000 | 0x0000 | 0x16F8 |
| 0x30C9 | 0x0000 | 0x0000 | 0x11F8 | 0x0000 |
| 0x30CA | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x30CF | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x30D0 | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x30D6 | 0x0000 | 0x0000 | 0x0000 | 0x12AD |
| 0x30D8 | 0x0000 | 0x12AE | 0x12B0 | 0x12AF |
| 0x30DA | 0x0000 | 0x0000 | 0x12B1 | 0x12B2 |
| 0x30DC | 0x0000 | 0x12B3 | 0x12B4 | 0x12B5 |
| 0x30DE | 0x0000 | 0x0000 | 0x0000 | 0x12B6 |
| 0x30E0 | 0x0000 | 0x0000 | 0x0000 | 0x12B7 |
| 0x30E2 | 0x12B8 | 0x12AE | 0x12B9 | 0x12BA |
| 0x30E4 | 0x0000 | 0x0000 | 0x12BB | 0x12BC |
| 0x30E6 | 0x0000 | 0x0000 | 0x0000 | 0x12BD |
| 0x30E9 | 0x0000 | 0x0000 | 0x0000 | 0x12BE |
| 0x30EA | 0x13CE | 0x0000 | 0x0000 | 0x13CE |
| 0x30ED | 0x16F2 | 0x0000 | 0x0000 | 0x0000 |
| 0x30EE | 0x16F2 | 0x0000 | 0x0000 | 0x0000 |
| 0x30EF | 0x16F2 | 0x0000 | 0x0000 | 0x0000 |
| 0x30F0 | 0x16F2 | 0x0000 | 0x0000 | 0x0000 |
| 0x30F1 | 0x16F2 | 0x0000 | 0x0000 | 0x0000 |
| 0x30F2 | 0x16F2 | 0x0000 | 0x0000 | 0x0000 |
| 0x30FC | 0x129B | 0x0000 | 0x0000 | 0x0000 |
| 0x30FE | 0x129A | 0x0000 | 0x0000 | 0x0000 |
| 0x30FF | 0x129B | 0x0000 | 0x0000 | 0x0000 |
| 0x3100 | 0x167A | 0x0000 | 0x0000 | 0x0000 |
| 0x3104 | 0x0000 | 0x0000 | 0x0000 | 0x14C6 |
| 0x3105 | 0x0000 | 0x0000 | 0x0000 | 0x15B7 |
| 0x3179 | 0x0000 | 0x15DA | 0x0000 | 0x0000 |
| 0xCD87 | 0x0000 | 0x1738 | 0x0000 | 0x0000 |
| 0xCD8B | 0x0000 | 0x110F | 0x0000 | 0x0000 |
| 0xCD94 | 0x0000 | 0x15DA | 0x0000 | 0x0000 |
| 0xCD95 | 0x1111 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCD96 | 0x1111 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCD97 | 0x1111 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCD98 | 0x1111 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCD99 | 0x1111 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCD9A | 0x1111 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCD9B | 0x1111 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCD9C | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCD9D | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCD9E | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCD9F | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDA0 | 0x1111 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCDA1 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDA2 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDA3 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDA4 | 0x0000 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCDA5 | 0x0000 | 0x15DA | 0x0000 | 0x0000 |
| 0xCDA6 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDA7 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDA8 | 0x0000 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCDA9 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDAA | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDAB | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDAC | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDAD | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDAE | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDAF | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDB0 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDB1 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDB3 | 0x1111 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCDB4 | 0x1111 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCDB5 | 0x0000 | 0x110F | 0x0000 | 0x0000 |
| 0xCDB8 | 0x1111 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCDB9 | 0x1111 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCDBA | 0x1111 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCDBD | 0x0000 | 0x15DA | 0x124B | 0x0000 |
| 0xCDBE | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDC2 | 0x1111 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCDC3 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |

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

### FEHLER_NOX_SENSOR

| NR | FEHLER |
| --- | --- |
| 0x00 | Stickoxidsensor: keine Leitungsunterbrechung Heizung |
| 0x01 | Stickoxidsensor: Leitungsunterbrechung Heizung |
| 0x10 | Stickoxidsensor: keine Leitungsunterbrechung Stickoxidsensor |
| 0x11 | Stickoxidsensor: Leitungsunterbrechung Stickoxidsensor |
| 0x20 | Stickoxidsensor: keine Leitungsunterbrechung lineare Lambdasonde |
| 0x21 | Stickoxidsensor: Leitungsunterbrechung lineare Lambdasonde |
| 0x30 | Stickoxidsensor: keine Leitungsunterbrechung binäre Lambdasonde |
| 0x31 | Stickoxidsensor: Leitungsunterbrechung binäre Lambdasonde |
| 0x40 | Stickoxidsensor: kein Kurzschluss Heizung |
| 0x41 | Stickoxidsensor: Kurzschluss Heizung |
| 0x50 | Stickoxidsensor: kein Kurzschluss Stickoxidsensor |
| 0x51 | Stickoxidsensor: Kurzschluss Stickoxidsensor |
| 0x60 | Stickoxidsensor: kein Kurzschluss lineare Lambdasonde |
| 0x61 | Stickoxidsensor: Kurzschluss lineare Lambdasonde |
| 0x70 | Stickoxidsensor: kein Kurzschluss binäre Lambdasonde |
| 0x71 | Stickoxidsensor: Kurzschluss binäre Lambdasonde |
| 0xFF | Stickoxidsensor: unbekannter Fehler |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x0000 | 0000 FehlerOrt nicht bedatet |
| 0x29CC | 0x29CC Verbrennungsaussetzer, mehrere Zylinder |
| 0x29CD | 0x29CD Verbrennungsaussetzer, Zylinder 1 |
| 0x29CE | 0x29CE Verbrennungsaussetzer, Zylinder 2 |
| 0x29CF | 0x29CF Verbrennungsaussetzer, Zylinder 3 |
| 0x29D0 | 0x29D0 Verbrennungsaussetzer, Zylinder 4 |
| 0x29D1 | 0x29D1 Verbrennungsaussetzer, Zylinder 5 |
| 0x29D2 | 0x29D2 Verbrennungsaussetzer, Zylinder 6 |
| 0x29D9 | 0x29D9 Verbrennungsaussetzer bei geringem Tankfüllstand |
| 0x29DA | 0x29DA Kurbelwellensensor, Segmentadaption |
| 0x29DB | 0x29DB Laufruhe, Segmentzeitmessung |
| 0x29DC | 0x29DC Zylindereinspritzabschaltung |
| 0x29E0 | 0x29E0 Gemischregelung |
| 0x29E1 | 0x29E1 Gemischregelung 2 |
| 0x29E2 | 0x29E2 Kraftstoffeinspritzleiste, Drucksensorsignal |
| 0x29E5 | 0x29E5 Gemischadaption, oberer Drehzahlbereich |
| 0x29E6 | 0x29E6 Gemischadaption 2, oberer Drehzahlbereich |
| 0x29F1 | 0x29F1 Kraftstoffdruck, Plausibilität |
| 0x29F2 | 0x29F2 Kraftstoffhochdrucksystem, Kraftstoffdruck |
| 0x29F3 | 0x29F3 Kraftstoffdrucksensor, elektrisch |
| 0x29F4 | 0x29F4 Katalysatorkonvertierung |
| 0x29F5 | 0x29F5 Katalysatorkonvertierung 2 |
| 0x29F6 | 0x29F6 Katalysatorkonvertierung, Gesamtsystem: unterhalb Grenzwert |
| 0x29F7 | 0x29F7 Katalysatorkonvertierung 2, Gesamtsystem: unterhalb Grenzwert |
| 0x2A0C | 0x2A0C Abgasrückführung, Systemfunktion |
| 0x2A0D | 0x2A0D Abgasrückführungsventil, Ansteuerung |
| 0x2A0E | 0x2A0E Abgasrückführungsventil, Regelabweichung Lageregelung |
| 0x2A0F | 0x2A0F Abgasrückführungsventil, Adaption |
| 0x2A10 | 0x2A10 Abgasrückführungssensor, Signal |
| 0x2A12 | 0x2A12 DMTL-Magnetventil, Ansteuerung |
| 0x2A13 | 0x2A13 DMTL-Leckdiagnosepumpe, Ansteuerung |
| 0x2A15 | 0x2A15 Tankentlüftungs- und Spülluftsystem, Feinleck |
| 0x2A16 | 0x2A16 Tankentlüftungs- und Spülluftsystem, Feinstleck |
| 0x2A17 | 0x2A17 DMTL, Systemfehler |
| 0x2A18 | 0x2A18 DMTL, Heizung: Ansteuerung |
| 0x2A19 | 0x2A19 Tankentlüftungsventil, Ansteuerung |
| 0x2A1A | 0x2A1A Tankentlüftungssystem, Funktion |
| 0x2A1B | 0x2A1B Tankdeckel |
| 0x2A1C | 0x2A1C Tankfüllstand, Plausibilität |
| 0x2A22 | 0x2A22 Tankfüllstand, Korrelation |
| 0x2A26 | 0x2A26 Katalysator, Konvertierung im Schichtbetrieb |
| 0x2A27 | 0x2A27 Katalysator 2, Konvertierung im Schichtbetrieb |
| 0x2A29 | 0x2A29 Kraftstoffniederdrucksensor |
| 0x2A2B | 0x2A2B Gemischregelung |
| 0x2A2C | 0x2A2C Gemischregelung 2 |
| 0x2A2D | 0x2A2D Kraftstoffniederdrucksystem, Kraftstoffdruck |
| 0x2A78 | 0x2A78 VANOS, Auslass, Kaltstart |
| 0x2A79 | 0x2A79 VANOS, Einlass, Kaltstart |
| 0x2A7A | 0x2A7A VANOS, Auslass, Kaltstart |
| 0x2A7C | 0x2A7C VANOS, Einlass, Kaltstart |
| 0x2A80 | 0x2A80 Einlass-VANOS, Ansteuerung |
| 0x2A82 | 0x2A82 Einlass-VANOS |
| 0x2A85 | 0x2A85 Auslass-VANOS, Ansteuerung |
| 0x2A87 | 0x2A87 Auslass-VANOS, Mechanik |
| 0x2A94 | 0x2A94 Kurbelwellensensor, Signal |
| 0x2A95 | 0x2A95 Kurbelwellensensor, Synchronisation |
| 0x2A96 | 0x2A96 Kurbelwellensensor, Zahnfehler |
| 0x2A97 | 0x2A97 Kurbelwellensensor, Lückenfehler |
| 0x2A98 | 0x2A98 Kurbelwelle - Einlassnockenwelle, Referenz |
| 0x2A99 | 0x2A99 Kurbelwelle - Auslassnockenwelle, Referenz |
| 0x2A9A | 0x2A9A Kurbelwelle - Einlassnockenwelle, Synchronisation |
| 0x2A9B | 0x2A9B Kurbelwelle - Auslassnockenwelle, Synchronisation |
| 0x2A9E | 0x2A9E Nockenwellensensor Einlass, Synchonisation |
| 0x2A9F | 0x2A9F Nockenwellensensor Auslass, Synchronisation |
| 0x2AA0 | 0x2AA0 Nockenwellensensor Einlass, Signal |
| 0x2AA1 | 0x2AA1 Nockenwellensensor Auslass, Signal |
| 0x2AA2 | 0x2AA2 Nockenwellensensor Einlass, Lückenverlust |
| 0x2AA3 | 0x2AA3 Nockenwellensensor Auslass, Lückenverlust |
| 0x2AA4 | 0x2AA4 Einlassnockenwelle, Positionsüberwachung |
| 0x2AA5 | 0x2AA5 Auslassnockenwelle, Positionsüberwachung |
| 0x2AA8 | 0x2AA8 Variable Sauganlage Stellmotor: Ansteuerung |
| 0x2AA9 | 0x2AA9 Variable Sauganlage Stellmotor 2: Ansteuerung |
| 0x2AAA | 0x2AAA Variable Sauganlage, Plausibilität |
| 0x2AAB | 0x2AAB Variable Sauganlage, Eigendiagnose |
| 0x2AAC | 0x2AAC Variable Sauganlage 2, Eigendiagnose |
| 0x2AAD | 0x2AAD Kraftstoffpumpe, Notabschaltung |
| 0x2AAE | 0x2AAE Kraftstoffpumpe |
| 0x2AAF | 0x2AAF Kraftstoffpumpe, Plausibilität |
| 0x2AB2 | 0x2AB2 DME, interner Fehler: RAM |
| 0x2AB3 | 0x2AB3 DME, interner Fehler: Checksumme |
| 0x2AB4 | 0x2AB4 DME, interner Fehler: RAM-Checksumme |
| 0x2AB5 | 0x2AB5 DME, interner Fehler: Klopfsensorbaustein |
| 0x2AB6 | 0x2AB6 DME, interner Fehler: Mehrfachendstufenbaustein |
| 0x2ABC | 0x2ABC Ladedrucksensor, elektrisch |
| 0x2ABD | 0x2ABD Ladedrucksensor, Nachlauf |
| 0x2AC6 | 0x2AC6 Taster Fahrdynamik-Control (SPORT-Taste), Signal |
| 0x2ACA | 0x2ACA Klemme 15_3, Leitung vom CAS, elektrisch |
| 0x2ACB | 0x2ACB DME-Hauptrelais, Ansteuerung |
| 0x2ACC | 0x2ACC DME-Hauptrelais, Schaltverzögerung |
| 0x2AD0 | 0x2AD0 Getriebesteuerung |
| 0x2ADF | 0x2ADF Leerlaufregelung, Drehzahl |
| 0x2AE0 | 0x2AE0 Leerlaufregelung bei Kaltstart, Plausibilität |
| 0x2AE2 | 0x2AE2 Leerlaufregelung, Plausibilität, Kaltstart |
| 0x2AE4 | 0x2AE4 Motorentlüftungs-Heizungsrelais, Ansteuerung |
| 0x2AEC | 0x2AEC Stickoxidsensor, Eigendiagnose |
| 0x2AED | 0x2AED Stickoxidsensor, Version |
| 0x2AF0 | 0x2AF0 Stickoxidsensor, Heizung |
| 0x2AF2 | 0x2AF2 Stickoxidsensor, Lambda linear |
| 0x2AF4 | 0x2AF4 Stickoxidsensor, elektrisch |
| 0x2AF6 | 0x2AF6 Stickoxidsensor, Lambda binär |
| 0x2AFB | 0x2AFB Stickoxidsensor, Lambda binär |
| 0x2AFE | 0x2AFE Stickoxidsensor, Adaption |
| 0x2B00 | 0x2B00 Überdrehzahl, Magerbereich |
| 0x2B05 | 0x2B05 Stickoxidsensor, Heizung |
| 0x2B06 | 0x2B06 Stickoxidsensor, Lambda linear |
| 0x2B07 | 0x2B07 Stickoxidsensor, elektrisch |
| 0x2B08 | 0x2B08 Stickoxidsensor, Heizung |
| 0x2B09 | 0x2B09 Stickoxidsensor, Lambda linear |
| 0x2B0A | 0x2B0A Stickoxidsensor, elektrisch |
| 0x2B0B | 0x2B0B Stickoxidsensor, Lambda binär |
| 0x2B28 | 0x2B28 Tankentlüftungs- und Spülluftsystem, Feinstleck |
| 0x2B29 | 0x2B29 DMTL, Systemfehler |
| 0x2B2C | 0x2B2C Kraftstoffhochdruck, Plausibilität, Kaltstart |
| 0x2B3A | 0x2B3A DMTL, Systemfehler |
| 0x2B3B | 0x2B3B DMTL, Systemfehler |
| 0x2B3C | 0x2B3C DMTL, Systemfehler |
| 0x2B3D | 0x2B3D DMTL, Systemfehler |
| 0x2B48 | 0x2B48 Gemischregelung |
| 0x2B49 | 0x2B49 Gemischregelung 2 |
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
| 0x2C87 | 0x2C87 Abgastemperatursensor, Signal |
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
| 0x2CB2 | 0x2CB2 Lambdasonde nach Katalysator, von Mager nach Fett |
| 0x2CB3 | 0x2CB3 Lambdasonde nach Katalysator 2, von Mager nach Fett |
| 0x2CB4 | 0x2CB4 Lambdasonde nach Katalysator, von Fett nach Mager |
| 0x2CB5 | 0x2CB5 Lambdasonde nach Katalysator 2, von Fett nach Mager |
| 0x2CB6 | 0x2CB6 Lambdasonde nach Katalysator |
| 0x2CB7 | 0x2CB7 Lambdasonde nach Katalysator 2 |
| 0x2CB8 | 0x2CB8 Lambdasonde nach Katalysator |
| 0x2CB9 | 0x2CB9 Lambdasonde nach Katalysator 2 |
| 0x2CEC | 0x2CEC Drosselklappensteller, klemmt |
| 0x2CED | 0x2CED Drosselklappensteller, klemmt dauerhaft |
| 0x2CEE | 0x2CEE Drosselklappensteller, schwergängig |
| 0x2CEF | 0x2CEF Drosselklappensteller, Ansteuerung |
| 0x2CF6 | 0x2CF6 Drosselklappenpotenziometer 1, Plausibilität zu Luftmasse |
| 0x2CF7 | 0x2CF7 Drosselklappenpotenziometer 2, Plausibilität zu Luftmasse |
| 0x2CF9 | 0x2CF9 Drosselklappenpotenziometer 1 |
| 0x2CFA | 0x2CFA Drosselklappenpotenziometer 2 |
| 0x2CFB | 0x2CFB Drosselklappen-Adaptionswert |
| 0x2CFC | 0x2CFC Drosselklappe, Startprüfung |
| 0x2CFD | 0x2CFD Drosselklappen-Adaptionswert fehlt |
| 0x2CFE | 0x2CFE Drosselklappe, kontinuierliche Adaption |
| 0x2D06 | 0x2D06 Luftmassensystem |
| 0x2D07 | 0x2D07 Drosselklappe 1 |
| 0x2D09 | 0x2D09 Drosselklappe |
| 0x2D0B | 0x2D0B Drosselklappenheizung, Relais |
| 0x2D0C | 0x2D0C Drosselklappe, Enteisung |
| 0x2D0E | 0x2D0E Luftmassenmesser, elektrisch |
| 0x2D0F | 0x2D0F Luftmassenmesser, Signal |
| 0x2D15 | 0x2D15 Luftmassenmesser, Messbereich |
| 0x2D16 | 0x2D16 Luftmassenmesser, Signal |
| 0x2D18 | 0x2D18 Tuningschutz |
| 0x2D1B | 0x2D1B Fahrpedalmodul, Pedalwertgeber Signal 1 |
| 0x2D1C | 0x2D1C Fahrpedalmodul, Pedalwertgeber Signal 2 |
| 0x2D1D | 0x2D1D Fahrpedalmodul, Pedalwertgeber 1, Spannungsversorgung |
| 0x2D1E | 0x2D1E Fahrpedalmodul, Pedalwertgeber 2, Spannungsversorgung |
| 0x2D1F | 0x2D1F Fahrpedalmodul, Pedalwertgeber Potentiometer, Signal |
| 0x2D20 | 0x2D20 Fahrpedalmodul, Pedalwertgeber, Plausibilität zwischen Signal 1 und Signal 2 |
| 0x2D25 | 0x2D25 Manipulationsschutz, max. Luftmasse |
| 0x2D27 | 0x2D27 Luftmassenmesser |
| 0x2D28 | 0x2D28 Differenzdrucksensor, Saugrohr: Signal |
| 0x2D29 | 0x2D29 Differenzdrucksensor, Saugrohr: Plausibilität |
| 0x2D2A | 0x2D2A Differenzdrucksensor, Saugrohr: Adaption |
| 0x2D2B | 0x2D2B Saugrohrdrucksensor, Nachlauf |
| 0x2D2E | 0x2D2E Drosselklappenwinkel - Saugrohr-Unterdruck, Korrelation |
| 0x2D33 | 0x2D33 Absolutdrucksensor, Saugrohr: Signal |
| 0x2D35 | 0x2D35 Absolutdrucksensor, Saugrohr: Adaption |
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
| 0x2D5F | 0x2D5F DME, interner Fehler: Reset |
| 0x2D60 | 0x2D60 Kraftstoffmenge, Überwachung |
| 0x2D61 | 0x2D61 Drosselklappe, Überwachung |
| 0x2D64 | 0x2D64 Überwachung stöchiometrisches Gemisch |
| 0x2D67 | 0x2D67 DME, interner Fehler: Überwachung Prozessoren |
| 0x2DB5 | 0x2DB5 Fahrgeschwindigkeitsregelung, Signal |
| 0x2DB6 | 0x2DB6 Fahrgeschwindigkeitsregelung, Schalter Multifunktionslenkrad |
| 0x2DB7 | 0x2DB7 Fahrgeschwindigkeitsregelung, Zeitlimit der Datenübertragung erreicht |
| 0x2DBE | 0x2DBE Aktive Geschwindigkeitsregelung, gesperrt für Fahrzyklus |
| 0x2DC0 | 0x2DC0 Längsdynamikmanagement |
| 0x2DC3 | 0x2DC3 Überwachung Klemme 15 |
| 0x2DC5 | 0x2DC5 Momentenanforderung über CAN, Plausibilität |
| 0x2DC8 | 0x2DC8 Botschaft vom EGS fehlt, EGS 1 |
| 0x2DC9 | 0x2DC9 Botschaft vom EGS fehlt, EGS 2 |
| 0x2DE1 | 0x2DE1 Tankfüllstandssensor: Signal |
| 0x2DE2 | 0x2DE2 Tankfüllstandssensor: Signal |
| 0x2DE4 | 0x2DE4 Tankfüllstandssensor, links: Signal |
| 0x2DE5 | 0x2DE5 Tankfüllstandssensor, rechts: Signal |
| 0x2DEB | 0x2DEB Powermanagement, Bordnetzüberwachung |
| 0x2DEC | 0x2DEC Powermanagement, Batterieüberwachung |
| 0x2DED | 0x2DED Powermanagement, Ruhestromüberwachung |
| 0x2DF0 | 0x2DF0 Bordnetzspannung |
| 0x2DF1 | 0x2DF1 Bordnetzspannung |
| 0x2E18 | 0x2E18 Zündung, Zylinder 1 |
| 0x2E19 | 0x2E19 Zündung, Zylinder 2 |
| 0x2E1A | 0x2E1A Zündung, Zylinder 3 |
| 0x2E1B | 0x2E1B Zündung, Zylinder 4 |
| 0x2E1C | 0x2E1C Zündung, Zylinder 5 |
| 0x2E1D | 0x2E1D Zündung, Zylinder 6 |
| 0x2E30 | 0x2E30 Einspritzventil Zylinder 1, Ansteuerung |
| 0x2E31 | 0x2E31 Einspritzventil Zylinder 2, Ansteuerung |
| 0x2E32 | 0x2E32 Einspritzventil Zylinder 3, Ansteuerung |
| 0x2E33 | 0x2E33 Einspritzventil Zylinder 4, Ansteuerung |
| 0x2E34 | 0x2E34 Einspritzventil Zylinder 5, Ansteuerung |
| 0x2E35 | 0x2E35 Einspritzventil Zylinder 6, Ansteuerung |
| 0x2E61 | 0x2E61 Einspritzausgabe |
| 0x2E62 | 0x2E62 Einspritzung, Plausibilität, Kaltstart |
| 0x2E68 | 0x2E68 Klopfsensorsignal 1 |
| 0x2E69 | 0x2E69 Klopfsensorsignal 2 |
| 0x2E74 | 0x2E74 Gemischregelung, Injektor-Alterung |
| 0x2E75 | 0x2E75 Gemischregelung 2, Injektor-Alterung |
| 0x2E77 | 0x2E77 Zündung, Spannungsversorgung |
| 0x2E7A | 0x2E7A Zündwinkelverstellung im Leerlauf, Kaltstart |
| 0x2E7B | 0x2E7B Zündwinkelverstellung in Teillast, Kaltstart |
| 0x2E7C | 0x2E7C Bitserielle Datenschnittstelle, Signal |
| 0x2E7F | 0x2E7F A- und FA-CAN, Botschaften (Getriebe) |
| 0x2E81 | 0x2E81 Elektrische Kühlmittelpumpe, Drehzahlabweichung |
| 0x2E82 | 0x2E82 Elektrische Kühlmittelpumpe, Abschaltung |
| 0x2E83 | 0x2E83 Elektrische Kühlmittelpumpe, leistungsreduzierter Betrieb |
| 0x2E84 | 0x2E84 Elektrische Kühlmittelpumpe, Kommunikation |
| 0x2E85 | 0x2E85 Elektrische Kühlmittelpumpe, Kommunikation |
| 0x2E8B | 0x2E8B Intelligenter Batteriesensor, Signal |
| 0x2E8C | 0x2E8C Intelligenter Batteriesensor, Funktion |
| 0x2E8D | 0x2E8D Intelligenter Batteriesensor, Signalübertragung |
| 0x2E8E | 0x2E8E Intelligenter Batteriesensor, Kommunikation |
| 0x2E96 | 0x2E96 Generator, Untererregung |
| 0x2E97 | 0x2E97 Generator |
| 0x2E98 | 0x2E98 Generator, Kommunikation |
| 0x2E9F | 0x2E9F Ölzustandssensor |
| 0x2EA1 | 0x2EA1 Ölzustandssensor, Kommunikation |
| 0x2EAE | 0x2EAE Botschaft vom Stickoxidsensor 1 fehlt |
| 0x2EAF | 0x2EAF Botschaft vom Stickoxidsensor 2 fehlt |
| 0x2ECC | 0x2ECC Generator, Kommunikation |
| 0x2ECD | 0x2ECD Generator, elektrisch |
| 0x2ECE | 0x2ECE Generator, Plausibilität: elektrisch |
| 0x2ECF | 0x2ECF Generator, Übertemperatur |
| 0x2ED0 | 0x2ED0 Generator,  Plausibilität: Temperatur |
| 0x2ED1 | 0x2ED1 Generator, mechanisch |
| 0x2ED2 | 0x2ED2 Generator, Regler falsch |
| 0x2ED3 | 0x2ED3 Generator, Typ falsch |
| 0x2EE0 | 0x2EE0 Kühlmitteltemperatursensor, Signal |
| 0x2EE1 | 0x2EE1 Kühlmitteltemperatursensor, Plausibilität |
| 0x2EE2 | 0x2EE2 Kühlmitteltemperatursensor, Plausibilität: Signal konstant |
| 0x2EE3 | 0x2EE3 Kühlmitteltemperatursensor, Plausibilität: Gradient |
| 0x2EE6 | 0x2EE6 Kühlmitteltemperatursensor, Messbereich |
| 0x2EEA | 0x2EEA Temperatursensor Kühleraustritt, Signal |
| 0x2EEB | 0x2EEB Temperatursensor Kühleraustritt, Plausibilität, Gradient |
| 0x2EEC | 0x2EEC Temperatursensor Kühleraustritt, Plausibilität |
| 0x2EF4 | 0x2EF4 Kennfeldthermostat, Mechanik |
| 0x2EF5 | 0x2EF5 Kennfeldthermostat, Ansteuerung |
| 0x2EF7 | 0x2EF7 Kennfeldthermostat, Ansteuerung |
| 0x2EF8 | 0x2EF8 Kennfeldthermostat, Ansteuerung |
| 0x2EFE | 0x2EFE Elektrolüfter, Ansteuerung |
| 0x2EFF | 0x2EFF Elektrolüfter, Eigendiagnose |
| 0x2F08 | 0x2F08 Ansauglufttemperatursensor, Signal |
| 0x2F09 | 0x2F09 Ansauglufttemperatursensor, Plausibilität |
| 0x2F0A | 0x2F0A Ansauglufttemparatursensor Turbolader, Signal |
| 0x2F0C | 0x2F0C Ansauglufttemperatursensor |
| 0x2F0D | 0x2F0D Kühlerjalousie, Ansteuerung, (GLF) |
| 0x2F10 | 0x2F10 Kühlerjalousie, unten |
| 0x2F11 | 0x2F11 Kühlerjalousie, oben |
| 0x2F12 | 0x2F12 Klimakompressor, Ansteuerung |
| 0x2F13 | 0x2F13 Ladelufttemperatursensor, elektrisch |
| 0x2F15 | 0x2F15 Ladelufttemperatur |
| 0x2F30 | 0x2F30 Ladelufttemperatursensor |
| 0x2F49 | 0x2F49 EWS Manipulationsschutz |
| 0x2F4A | 0x2F4A Schnittstelle EWS-DME |
| 0x2F4B | 0x2F4B DME, interner Fehler: EWS-Daten |
| 0x2F4C | 0x2F4C Botschaft EWS-DME fehlerhaft |
| 0x2F4E | 0x2F4E Fahrzeuggeschwindigkeit, Signal |
| 0x2F4F | 0x2F4F Fahrzeuggeschwindigkeit, Plausibilität |
| 0x2F52 | 0x2F52 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/links, Signaländerung |
| 0x2F53 | 0x2F53 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/rechts, Signaländerung |
| 0x2F54 | 0x2F54 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/links, Signaländerung |
| 0x2F55 | 0x2F55 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/rechts, Signaländerung |
| 0x2F56 | 0x2F56 Fahrzeuggeschwindigkeit, Plausibilität |
| 0x2F57 | 0x2F57 Fahrzeuggeschwindigkeit, Signaländerung |
| 0x2F58 | 0x2F58 Startautomatik, Ansteuerung |
| 0x2F5B | 0x2F5B Fahrzeuggeschwindigkeit, Signal |
| 0x2F5C | 0x2F5C Fahrzeuggeschwindigkeit, Plausibilität |
| 0x2F5D | 0x2F5D Fahrzeuggeschwindigkeit, Signal |
| 0x2F5E | 0x2F5E Akustikklappe, Ansteuerung |
| 0x2F5F | 0x2F5F Fahrzeuggeschwindigkeit, Plausibilität |
| 0x2F60 | 0x2F60 Fahrzeuggeschwindigkeit, Plausibilität |
| 0x2F63 | 0x2F63 Bremslichtschalter, Plausibilität |
| 0x2F64 | 0x2F64 Bremslichttestschalter, Plausibilität |
| 0x2F67 | 0x2F67 Kupplungsschalter, Signal |
| 0x2F6C | 0x2F6C Abgasklappe, Ansteuerung |
| 0x2F71 | 0x2F71 E-Box-Lüfter, Ansteuerung |
| 0x2F76 | 0x2F76 Umgebungsdrucksensor, Signal |
| 0x2F77 | 0x2F77 Umgebungsdrucksensor, Plausibilität |
| 0x2F79 | 0x2F79 Umgebungsdrucksensor, Nachlauf |
| 0x2F7A | 0x2F7A Umgebungsdrucksensor, Nachlauf |
| 0x2F7B | 0x2F7B Öldruckschalter, Plausibilität |
| 0x2F7E | 0x2F7E Motorabstellzeit, Plausibilität |
| 0x2F7F | 0x2F7F Motorabstellzeit, Plausibilität |
| 0x2F80 | 0x2F80 Motorabstellzeit, Plausibilität |
| 0x2F81 | 0x2F81 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich |
| 0x2F82 | 0x2F82 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich |
| 0x2F83 | 0x2F83 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich |
| 0x2F84 | 0x2F84 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich |
| 0x2F85 | 0x2F85 DME, interner Fehler: Innentemperatursensor, Signal |
| 0x2F8F | 0x2F8F Fahrpedalmodul und Bremspedal, Plausibilität |
| 0x2F91 | 0x2F91 Drehzahlbegrenzung bei stehendem Fahrzeug |
| 0x2F94 | 0x2F94 Kraftstoffpumpenrelais, Ansteuerung |
| 0x2F99 | 0x2F99 Außentemperatursensor, Plausibilität |
| 0x2F9A | 0x2F9A Außentemperatursensor, Kommunikation |
| 0x2F9E | 0x2F9E Thermischer Ölniveausensor |
| 0x2FA3 | 0x2FA3 Codierung fehlt |
| 0x2FA4 | 0x2FA4 Falscher Datensatz |
| 0x2FAB | 0x2FAB Aktives Motorlager, elektrisch |
| 0x2FBC | 0x2FBC Mengensteuerventil, Signal |
| 0x2FBD | 0x2FBD Mengensteuerventil, Plausibilität |
| 0x2FBE | 0x2FBE Kraftstoffdruck nach Motorstopp |
| 0x2FBF | 0x2FBF Kraftstoffdruck bei Freigabe der Einspritzung |
| 0x2FC0 | 0x2FC0 Kraftstoffdruck, Messbereich |
| 0x2FC3 | 0x2FC3 Mengensteuerventil, Plausibilität |
| 0x2FC6 | 0x2FC6 Energiesparmodus aktiv |
| 0x2FC7 | 0x2FC7 Energiesparmodus 2, aktiv |
| 0x2FCA | 0x2FCA Kraftstoffhochdruck bei Freigabe der Einspritzung |
| 0x2FDA | 0x2FDA Kraftstoffhochdruck bei oder nach Freigabe der Einspritzung (2. Umweltbedingungssatz nach Zeitverzögerung) |
| 0x2FDB | 0x2FDB Kraftstoffhochdruck nach Freigabe der Einspritzung |
| 0x2FDC | 0x2FDC Kraftstoffhochdruck bei Freigabe der Einspritzung |
| 0x2FE4 | 0x2FE4 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/links, elektrisch |
| 0x2FE5 | 0x2FE5 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/links, elektrisch |
| 0x2FE6 | 0x2FE6 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/rechts, elektrisch |
| 0x2FE7 | 0x2FE7 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/rechts, elektrisch |
| 0x3070 | 0x3070 Zylindergleichstellung über Laufunruhe Zylinder 1 |
| 0x3071 | 0x3071 Zylindergleichstellung über Laufunruhe Zylinder 2 |
| 0x3072 | 0x3072 Zylindergleichstellung über Laufunruhe Zylinder 3 |
| 0x3073 | 0x3073 Zylindergleichstellung über Laufunruhe Zylinder 4 |
| 0x3074 | 0x3074 Zylindergleichstellung über Laufunruhe Zylinder 5 |
| 0x3075 | 0x3075 Zylindergleichstellung über Laufunruhe Zylinder 6 |
| 0x307C | 0x307C Zylindergleichstellung über Lambda Zylinder 1 |
| 0x307D | 0x307D Zylindergleichstellung über Lambda Zylinder 2 |
| 0x307E | 0x307E Zylindergleichstellung über Lambda Zylinder 3 |
| 0x307F | 0x307F Zylindergleichstellung über Lambda Zylinder 4 |
| 0x3080 | 0x3080 Zylindergleichstellung über Lambda Zylinder 5 |
| 0x3081 | 0x3081 Zylindergleichstellung über Lambda Zylinder 6 |
| 0x30A0 | 0x30A0 Zündspule Zylinder 1, Ansteuerung |
| 0x30A1 | 0x30A1 Zündspule Zylinder 2, Ansteuerung |
| 0x30A2 | 0x30A2 Zündspule Zylinder 3, Ansteuerung |
| 0x30A3 | 0x30A3 Zündspule Zylinder 4, Ansteuerung |
| 0x30A4 | 0x30A4 Zündspule Zylinder 5, Ansteuerung |
| 0x30A5 | 0x30A5 Zündspule Zylinder 6, Ansteuerung |
| 0x30AC | 0x30AC Einspritzventil Zylinder 1, Ansteuerung |
| 0x30AD | 0x30AD Einspritzventil Zylinder 2, Ansteuerung |
| 0x30AE | 0x30AE Einspritzventil Zylinder 3, Ansteuerung |
| 0x30AF | 0x30AF Einspritzventil Zylinder 4, Ansteuerung |
| 0x30B0 | 0x30B0 Einspritzventil Zylinder 5, Ansteuerung |
| 0x30B1 | 0x30B1 Einspritzventil Zylinder 6, Ansteuerung |
| 0x30BA | 0x30BA Injektoren x, y(, z) oder DME, interner Fehler |
| 0x30BB | 0x30BB Injektoren x, y(, z) oder DME, interner Fehler |
| 0x30BE | 0x30BE Injektor, Kodierung, Plausibilität |
| 0x30C0 | 0x30C0 Motoröldruckregelung, dynamisch |
| 0x30C1 | 0x30C1 Motoröldruckregelung, statisch |
| 0x30C2 | 0x30C2 Öldruckregelventil, Ansteuerung |
| 0x30C3 | 0x30C3 Motoröldrucksensor, Signal |
| 0x30C4 | 0x30C4 Motoröldruckregelung, mechanisch |
| 0x30C5 | 0x30C5 Motorölpumpe, mechanisch: Motoröldruck |
| 0x30C6 | 0x30C6 Motoröldrucksensor, Plausibilität |
| 0x30C7 | 0x30C7 Motoröldruckregelung |
| 0x30C9 | 0x30C9 Motorölpumpe, Ansteuerung |
| 0x30CA | 0x30CA Schubumluftventil, Ansteuerung |
| 0x30CF | 0x30CF Wastegate, Ansteuerung |
| 0x30D0 | 0x30D0 Wastegate 2, Ansteuerung |
| 0x30D6 | 0x30D6 Stickoxidsensor, Plausibilität |
| 0x30D8 | 0x30D8 Stickoxidsensor, Sensorvergiftung |
| 0x30DA | 0x30DA Stickoxidsensor, Signal |
| 0x30DC | 0x30DC Stickoxidsenor, Beheizung |
| 0x30DE | 0x30DE Stickoxidsensor - Lambdasonde vor Kat, Korrelation |
| 0x30E0 | 0x30E0 Stickoxidsensor, Offset |
| 0x30E2 | 0x30E2 Stickoxidsensor, Schubprüfung |
| 0x30E4 | 0x30E4 Stickoxidsensor, Alterung |
| 0x30E6 | 0x30E6 Stickoxidsensor, Dynamik |
| 0x30E9 | 0x30E9 Stickoxidkatalysator, Alterung |
| 0x30EA | 0x30EA DeNox-Katalysator, verschwefelt |
| 0x30ED | 0x30ED Superklopfen Zylinder 1 |
| 0x30EE | 0x30EE Superklopfen Zylinder 2 |
| 0x30EF | 0x30EF Superklopfen Zylinder 3 |
| 0x30F0 | 0x30F0 Superklopfen Zylinder 4 |
| 0x30F1 | 0x30F1 Superklopfen Zylinder 5 |
| 0x30F2 | 0x30F2 Superklopfen Zylinder 6 |
| 0x30FC | 0x30FC Ladedruckregelung, Ladedruck zu niedrig: Dichtheit |
| 0x30FE | 0x30FE Ladedruckregelung, Ladedruck zu hoch |
| 0x30FF | 0x30FF Ladedruckregelung, Ladedruck zu niedrig |
| 0x3100 | 0x3100 Ladedruckregelung, Abschaltung  |
| 0x3104 | 0x3104 Laufunruhe, Schichtladebetrieb |
| 0x3105 | 0x3105 Laufunruhe, Schichtladebetrieb: Warmlaufphase |
| 0x3179 | 0x3179 PT-CAN, Botschaft (Radgeschwindigkeit, 0xCE) |
| 0xCD87 | 0xCD87 PT-CAN Kommunikationsfehler |
| 0xCD8B | 0xCD8B Local-CAN Kommunikationsfehler |
| 0xCD94 | 0xCD94 Botschaft (Außentemperatur/Relativzeit, 310) |
| 0xCD95 | 0xCD95 Botschaft (Bedienung FGR / ACC, 194) |
| 0xCD96 | 0xCD96 Botschaft (Drehmomentanforderung ACC, B7) |
| 0xCD97 | 0xCD97 Botschaft (Drehmomentanforderung AFS, B1) |
| 0xCD98 | 0xCD98 Botschaft (Drehmomentanforderung DSC, B6) |
| 0xCD99 | 0xCD99 Botschaft (Drehmomentanforderung EGS, B5) |
| 0xCD9A | 0xCD9A Botschaft (Drehmomentanforderung SMG, BD) |
| 0xCD9B | 0xCD9B Botschaft (Fahrzeugmodus, 315) |
| 0xCD9C | 0xCD9C Botschaft (Geschwindigkeit, 1A0) |
| 0xCD9D | 0xCD9D Botschaft (Getriebedaten, BA) |
| 0xCD9E | 0xCD9E Botschaft (Getriebedaten 2, 1A2) |
| 0xCD9F | 0xCD9F Botschaft (Kilometerstand/Reichweite, 330) |
| 0xCDA0 | 0xCDA0 Botschaft (Klemmenstatus, 130) |
| 0xCDA1 | 0xCDA1 Botschaft (Lenkradwinkel, C4) |
| 0xCDA2 | 0xCDA2 Botschaft (Powermanagement Batteriespannung, 3B4) |
| 0xCDA3 | 0xCDA3 Botschaft (Powermanagement Ladespannung, 334) |
| 0xCDA4 | 0xCDA4 Botschaft (Status ARS-Modul, 1AC) |
| 0xCDA5 | 0xCDA5 Botschaft (Status DSC, 19E) |
| 0xCDA6 | 0xCDA6 Botschaft (Status Elektrische Kraftstoffpumpe, 335) |
| 0xCDA7 | 0xCDA7 Botschaft (Status Rückwärtsgang, 3B0) |
| 0xCDA8 | 0xCDA8 Botschaft (Status KOMBI, 1B4) |
| 0xCDA9 | 0xCDA9 Botschaft (Wärmestrom/Lastmoment Klimaanlage, 1B5) |
| 0xCDAA | 0xCDAA Botschaft (Status Crashabschaltung EKP, 135) |
| 0xCDAB | 0xCDAB Botschaft (Lampenzustand,  21A) |
| 0xCDAC | 0xCDAC Botschaft (Status Wasserventil,  3B5) |
| 0xCDAD | 0xCDAD Botschaft (Anforderung Radmoment Antriebstrang,  BF) |
| 0xCDAE | 0xCDAE Botschaft (Uhrzeit/Datum, 2F8) |
| 0xCDAF | 0xCDAF Botschaft (Status Anhänger, 2E4) |
| 0xCDB0 | 0xCDB0 Botschaft (Anzeige Getriebedaten, 1D2) |
| 0xCDB1 | 0xCDB1 Botschaft (Status Zentralveriegelung, 2FC) |
| 0xCDB3 | 0xCDB3 Botschaft (Drehmomentanforderung Lenkung, B9) |
| 0xCDB4 | 0xCDB4 Botschaft (Getriebedaten 3, 3B1) fehlt |
| 0xCDB5 | 0xCDB5 PT-CAN Kommunikationsfehler |
| 0xCDB8 | 0xCDB8 Botschaft (Drehmomentanforderung DKG, B8) |
| 0xCDB9 | 0xCDB9 Botschaft (Status EMF, 201) |
| 0xCDBA | 0xCDBA Botschaft (Stellanforderung EMF, 1A7) |
| 0xCDBD | 0xCDBD PT-CAN, Botschaft (Bedienung Taster M-Drive, 0x1D9) |
| 0xCDBE | 0xCDBE Botschaft, (Sollmomentanforderung, BB ) |
| 0xCDC2 | 0xCDC2 Botschaft (Status Anforderung EMF, 1FDH) |
| 0xCDC3 | 0xCDC3 Botschaft (Status DKG, 37D) |
| 0xFFFF | unbekannter Fehlerort |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x0000 | 0x58FF | 0x58FF | 0x58FF | 0x58FF |
| 0x29CC | 0x5824 | 0x58F0 | 0x583C | 0x586D |
| 0x29CD | 0x581F | 0x58E5 | 0x5811 | 0x5806 |
| 0x29CE | 0x581F | 0x58E5 | 0x5811 | 0x5806 |
| 0x29CF | 0x581F | 0x58E5 | 0x5811 | 0x5806 |
| 0x29D0 | 0x581F | 0x58E5 | 0x5811 | 0x5808 |
| 0x29D1 | 0x581F | 0x58E5 | 0x5811 | 0x5808 |
| 0x29D2 | 0x581F | 0x58E5 | 0x5811 | 0x5808 |
| 0x29D9 | 0x58F0 | 0x586D | 0x5834 | 0x583B |
| 0x29DA | 0x5811 | 0x583C | 0x58F8 | 0x58F9 |
| 0x29DB | 0x5811 | 0x581F | 0x5818 | 0x583C |
| 0x29DC | 0x581F | 0x5818 | 0x5811 | 0x583B |
| 0x29E0 | 0x580C | 0x580B | 0x5813 | 0x58E0 |
| 0x29E1 | 0x580C | 0x580B | 0x5813 | 0x58E0 |
| 0x29E2 | 0x5811 | 0x58F0 | 0x58F4 | 0x58EF |
| 0x29E5 | 0x580C | 0x580B | 0x5813 | 0x58E0 |
| 0x29E6 | 0x580C | 0x580B | 0x5813 | 0x58E0 |
| 0x29F1 | 0x58F0 | 0x58F2 | 0x5855 | 0x5856 |
| 0x29F2 | 0x58F0 | 0x5811 | 0x58F2 | 0x58BA |
| 0x29F3 | 0x5811 | 0x58F4 | 0x58F3 | 0x583B |
| 0x29F4 | 0x5811 | 0x5818 | 0x581F | 0x581E |
| 0x29F5 | 0x5811 | 0x5818 | 0x581F | 0x581E |
| 0x29F6 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x29F7 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2A0C | 0x580C | 0x58F7 | 0x580B | 0x58E2 |
| 0x2A0D | 0x58FC | 0x58F7 | 0x583C | 0x58FD |
| 0x2A0E | 0x58FC | 0x58F7 | 0x583C | 0x58FD |
| 0x2A0F | 0x58FC | 0x58F7 | 0x583C | 0x58FD |
| 0x2A10 | 0x58FC | 0x58F7 | 0x58E4 | 0x587C |
| 0x2A12 | 0x5834 | 0x5874 | 0x587C | 0x583C |
| 0x2A13 | 0x5834 | 0x5874 | 0x587C | 0x583C |
| 0x2A15 | 0x583B | 0x5859 | 0x585A | 0x588D |
| 0x2A16 | 0x583B | 0x5859 | 0x585B | 0x588D |
| 0x2A17 | 0x583B | 0x5859 | 0x5867 | 0x5824 |
| 0x2A18 | 0x5834 | 0x5874 | 0x587C | 0x583C |
| 0x2A19 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A1A | 0x581F | 0x5818 | 0x5811 | 0x584D |
| 0x2A1B | 0x583B | 0x5859 | 0x585B | 0x588D |
| 0x2A1C | 0x580E | 0x5816 | 0x5839 | 0x5861 |
| 0x2A22 | 0x580E | 0x5816 | 0x5839 | 0x5861 |
| 0x2A26 | 0x580D | 0x5811 | 0x583C | 0x587C |
| 0x2A27 | 0x580D | 0x5811 | 0x583C | 0x587C |
| 0x2A29 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2A2B | 0x580C | 0x580B | 0x5813 | 0x58E0 |
| 0x2A2C | 0x580C | 0x580B | 0x5813 | 0x58E0 |
| 0x2A2D | 0x58F3 | 0x5811 | 0x583C | 0x58BA |
| 0x2A78 | 0x580C | 0x5813 | 0x581C | 0x581D |
| 0x2A79 | 0x580C | 0x5813 | 0x581A | 0x581B |
| 0x2A7A | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x2A7C | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x2A80 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A82 | 0x5811 | 0x581A | 0x581B | 0x581F |
| 0x2A85 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A87 | 0x5811 | 0x581C | 0x581D | 0x581F |
| 0x2A94 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A95 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A96 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A97 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A98 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2A99 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2A9A | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2A9B | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2A9E | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2A9F | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2AA0 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2AA1 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2AA2 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2AA3 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2AA4 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2AA5 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2AA8 | 0x5811 | 0x580D | 0x583C | 0x587C |
| 0x2AA9 | 0x5811 | 0x580D | 0x583C | 0x587C |
| 0x2AAA | 0x5811 | 0x581F | 0x5832 | 0x587C |
| 0x2AAB | 0x583C | 0x580C | 0x5818 | 0x5824 |
| 0x2AAC | 0x583C | 0x580C | 0x5818 | 0x5824 |
| 0x2AAD | 0x5832 | 0x583C | 0x587C | 0x58AF |
| 0x2AAE | 0x5832 | 0x583C | 0x587C | 0x58AF |
| 0x2AAF | 0x58F3 | 0x5811 | 0x583C | 0x58BA |
| 0x2AB2 | 0x5811 | 0x5821 | 0x587C | 0x583C |
| 0x2AB3 | 0x5811 | 0x5821 | 0x587C | 0x583C |
| 0x2AB4 | 0x5811 | 0x5821 | 0x587C | 0x583C |
| 0x2AB5 | 0x5811 | 0x5821 | 0x587C | 0x583C |
| 0x2AB6 | 0x5811 | 0x5821 | 0x587C | 0x583C |
| 0x2ABC | 0x5811 | 0x58DD | 0x5858 | 0x587C |
| 0x2ABD | 0x5834 | 0x580B | 0x58DD | 0x58DE |
| 0x2AC6 | 0x5811 | 0x580D | 0x583C | 0x587C |
| 0x2ACA | 0x5811 | 0x5832 | 0x583C | 0x587C |
| 0x2ACB | 0x588B | 0x584A | 0x587C | 0x583C |
| 0x2ACC | 0x5843 | 0x584A | 0x587C | 0x583C |
| 0x2AD0 | 0x5832 | 0x5881 | 0x587C | 0x583C |
| 0x2ADF | 0x5811 | 0x5812 | 0x5813 | 0x5814 |
| 0x2AE0 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2AE2 | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x2AE4 | 0x5824 | 0x583A | 0x588B | 0x587C |
| 0x2AEC | 0x58E3 | 0x58D1 | 0x5849 | 0x584B |
| 0x2AED | 0x584A | 0x5832 | 0x581F | 0x588B |
| 0x2AF0 | 0x5811 | 0x5853 | 0x5883 | 0x58A2 |
| 0x2AF2 | 0x5811 | 0x5853 | 0x5883 | 0x58A2 |
| 0x2AF4 | 0x5811 | 0x5853 | 0x5883 | 0x58A2 |
| 0x2AF6 | 0x5811 | 0x5853 | 0x5883 | 0x58A2 |
| 0x2AFB | 0x5810 | 0x5832 | 0x5853 | 0x58A4 |
| 0x2AFE | 0x58A4 | 0x58A1 | 0x58A6 | 0x58A5 |
| 0x2B00 | 0x588B | 0x580C | 0x583C | 0x587C |
| 0x2B05 | 0x5810 | 0x5832 | 0x5853 | 0x58A4 |
| 0x2B06 | 0x5810 | 0x5832 | 0x5853 | 0x58A4 |
| 0x2B07 | 0x5810 | 0x5832 | 0x5853 | 0x58A4 |
| 0x2B08 | 0x581F | 0x5832 | 0x586A | 0x58A4 |
| 0x2B09 | 0x581F | 0x5832 | 0x586A | 0x58A4 |
| 0x2B0A | 0x581F | 0x5832 | 0x586A | 0x58A4 |
| 0x2B0B | 0x581F | 0x5832 | 0x586A | 0x58A4 |
| 0x2B28 | 0x583B | 0x5811 | 0x585B | 0x588D |
| 0x2B29 | 0x583B | 0x5811 | 0x5867 | 0x5824 |
| 0x2B2C | 0x5811 | 0x581F | 0x58EF | 0x58F3 |
| 0x2B3A | 0x5811 | 0x583B | 0x5859 | 0x585A |
| 0x2B3B | 0x5811 | 0x583B | 0x5859 | 0x585A |
| 0x2B3C | 0x5811 | 0x583B | 0x5859 | 0x585A |
| 0x2B3D | 0x5811 | 0x583B | 0x5859 | 0x585A |
| 0x2B48 | 0x580C | 0x580B | 0x5813 | 0x58E0 |
| 0x2B49 | 0x580C | 0x580B | 0x5813 | 0x58E0 |
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
| 0x2C39 | 0x5871 | 0x5845 | 0x5830 | 0x588C |
| 0x2C3A | 0x5873 | 0x5848 | 0x5831 | 0x588F |
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
| 0x2C6D | 0x5896 | 0x585C | 0x5810 | 0x5849 |
| 0x2C6E | 0x5897 | 0x585D | 0x5810 | 0x584B |
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
| 0x2C87 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2C9C | 0x588C | 0x588B | 0x5815 | 0x5827 |
| 0x2C9D | 0x588F | 0x588B | 0x5815 | 0x5828 |
| 0x2C9E | 0x5896 | 0x585C | 0x5849 | 0x5829 |
| 0x2C9F | 0x5897 | 0x585D | 0x584B | 0x582A |
| 0x2CA6 | 0x5894 | 0x5815 | 0x5827 | 0x588C |
| 0x2CA7 | 0x5895 | 0x5815 | 0x5828 | 0x588F |
| 0x2CA8 | 0x5896 | 0x585C | 0x5829 | 0x5849 |
| 0x2CA9 | 0x5897 | 0x585D | 0x582A | 0x584B |
| 0x2CAA | 0x5894 | 0x5815 | 0x5827 | 0x5845 |
| 0x2CAB | 0x5895 | 0x5815 | 0x5828 | 0x5848 |
| 0x2CEC | 0x5858 | 0x583F | 0x5843 | 0x583C |
| 0x2CED | 0x5858 | 0x583F | 0x5843 | 0x583C |
| 0x2CEE | 0x5858 | 0x583F | 0x5843 | 0x583C |
| 0x2CEF | 0x5858 | 0x583F | 0x587C | 0x583C |
| 0x2CF6 | 0x58AB | 0x58E4 | 0x584C | 0x584E |
| 0x2CF7 | 0x58AC | 0x58E4 | 0x584C | 0x584E |
| 0x2CF9 | 0x584E | 0x584C | 0x5843 | 0x583C |
| 0x2CFA | 0x584E | 0x584C | 0x5843 | 0x583C |
| 0x2CFB | 0x584E | 0x584C | 0x58B0 | 0x583C |
| 0x2CFC | 0x584E | 0x584C | 0x5843 | 0x583C |
| 0x2CFD | 0x584E | 0x584C | 0x5843 | 0x583C |
| 0x2CFE | 0x584E | 0x584C | 0x5843 | 0x583C |
| 0x2D06 | 0x580C | 0x5812 | 0x5858 | 0x5889 |
| 0x2D07 | 0x584E | 0x584C | 0x5843 | 0x583C |
| 0x2D09 | 0x5811 | 0x581E | 0x581F | 0x587C |
| 0x2D0B | 0x588B | 0x580C | 0x583C | 0x587C |
| 0x2D0C | 0x588B | 0x580C | 0x583C | 0x587C |
| 0x2D0E | 0x584F | 0x5811 | 0x5858 | 0x581E |
| 0x2D0F | 0x58AE | 0x5811 | 0x5858 | 0x581E |
| 0x2D15 | 0x5812 | 0x5818 | 0x580C | 0x580F |
| 0x2D16 | 0x5812 | 0x5818 | 0x580C | 0x580F |
| 0x2D18 | 0x5811 | 0x58DD | 0x5806 | 0x5807 |
| 0x2D1B | 0x5846 | 0x5847 | 0x5843 | 0x583C |
| 0x2D1C | 0x5846 | 0x5847 | 0x5854 | 0x583C |
| 0x2D1D | 0x5843 | 0x5854 | 0x5846 | 0x583C |
| 0x2D1E | 0x5843 | 0x5854 | 0x5847 | 0x583C |
| 0x2D1F | 0x5843 | 0x5854 | 0x5846 | 0x5847 |
| 0x2D20 | 0x5846 | 0x5847 | 0x5843 | 0x5814 |
| 0x2D25 | 0x5811 | 0x58DD | 0x5806 | 0x5807 |
| 0x2D27 | 0x5812 | 0x5818 | 0x580C | 0x580F |
| 0x2D28 | 0x580B | 0x5811 | 0x581F | 0x587C |
| 0x2D29 | 0x5811 | 0x5826 | 0x580B | 0x5813 |
| 0x2D2A | 0x581E | 0x581F | 0x580B | 0x583C |
| 0x2D2B | 0x5834 | 0x580B | 0x58DD | 0x58DE |
| 0x2D2E | 0x5811 | 0x5826 | 0x580B | 0x5813 |
| 0x2D33 | 0x580B | 0x5811 | 0x581F | 0x587C |
| 0x2D35 | 0x581E | 0x581F | 0x580B | 0x583C |
| 0x2D50 | 0x58C4 | 0x580D | 0x58B7 | 0x5881 |
| 0x2D52 | 0x5811 | 0x58B8 | 0x58C0 | 0x5832 |
| 0x2D53 | 0x58C5 | 0x58C6 | 0x58DB | 0x58DC |
| 0x2D55 | 0x58C4 | 0x58B9 | 0x58E7 | 0x58E8 |
| 0x2D56 | 0x58C3 | 0x58C7 | 0x58C8 | 0x58CA |
| 0x2D57 | 0x5881 | 0x58BF | 0x5893 | 0x583C |
| 0x2D58 | 0x58D4 | 0x58D6 | 0x58CD | 0x5832 |
| 0x2D59 | 0x58B8 | 0x58CF | 0x58D0 | 0x5875 |
| 0x2D5A | 0x5811 | 0x5832 | 0x58CF | 0x58D1 |
| 0x2D5C | 0x58B8 | 0x5847 | 0x5854 | 0x583C |
| 0x2D5F | 0x5867 | 0x583D | 0x583E | 0x5840 |
| 0x2D60 | 0x58C2 | 0x5818 | 0x580A | 0x58A7 |
| 0x2D61 | 0x5858 | 0x58B8 | 0x584E | 0x584C |
| 0x2D64 | 0x58FE | 0x582E | 0x582F | 0x589D |
| 0x2D67 | 0x58D9 | 0x58DA | 0x58AA | 0x58A9 |
| 0x2DB5 | 0x580D | 0x587A | 0x5832 | 0x587C |
| 0x2DB6 | 0x580D | 0x587A | 0x5832 | 0x587C |
| 0x2DB7 | 0x580D | 0x587A | 0x5832 | 0x587C |
| 0x2DBE | 0x580D | 0x5811 | 0x5832 | 0x587C |
| 0x2DC0 | 0x5811 | 0x5813 | 0x5832 | 0x5891 |
| 0x2DC3 | 0x5811 | 0x5832 | 0x583C | 0x587C |
| 0x2DC5 | 0x5811 | 0x582B | 0x583C | 0x587C |
| 0x2DC8 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2DC9 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2DE1 | 0x580E | 0x5816 | 0x5839 | 0x5861 |
| 0x2DE2 | 0x580E | 0x5816 | 0x5839 | 0x5861 |
| 0x2DE4 | 0x580E | 0x5816 | 0x5839 | 0x5861 |
| 0x2DE5 | 0x580E | 0x5816 | 0x5839 | 0x5861 |
| 0x2DEB | 0x5811 | 0x586A | 0x5898 | 0x583C |
| 0x2DEC | 0x5868 | 0x5869 | 0x586A | 0x58A8 |
| 0x2DED | 0x586B | 0x586C | 0x586E | 0x583C |
| 0x2DF0 | 0x580C | 0x583C | 0x5898 | 0x58FF |
| 0x2DF1 | 0x580C | 0x583C | 0x5898 | 0x58FF |
| 0x2E18 | 0x5805 | 0x583C | 0x5811 | 0x58B1 |
| 0x2E19 | 0x5805 | 0x583C | 0x5811 | 0x58B5 |
| 0x2E1A | 0x5805 | 0x583C | 0x5811 | 0x58B3 |
| 0x2E1B | 0x5805 | 0x583C | 0x5811 | 0x58B6 |
| 0x2E1C | 0x5805 | 0x583C | 0x5811 | 0x58B2 |
| 0x2E1D | 0x5805 | 0x583C | 0x5811 | 0x58B4 |
| 0x2E30 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x2E31 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x2E32 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x2E33 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x2E34 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x2E35 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x2E61 | 0x5889 | 0x588A | 0x5811 | 0x5814 |
| 0x2E62 | 0x5804 | 0x5805 | 0x580C | 0x58EF |
| 0x2E68 | 0x5811 | 0x5812 | 0x5883 | 0x5885 |
| 0x2E69 | 0x5811 | 0x5812 | 0x5886 | 0x5888 |
| 0x2E74 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2E75 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2E77 | 0x5805 | 0x583C | 0x5811 | 0x5832 |
| 0x2E7A | 0x5811 | 0x580E | 0x581F | 0x5804 |
| 0x2E7B | 0x5811 | 0x580E | 0x581F | 0x5804 |
| 0x2E7C | 0x5811 | 0x583C | 0x5867 | 0x587C |
| 0x2E7F | 0x5811 | 0x5814 | 0x5832 | 0x580D |
| 0x2E81 | 0x5805 | 0x58E9 | 0x58EA | 0x58EB |
| 0x2E82 | 0x5805 | 0x58E9 | 0x58EC | 0x58ED |
| 0x2E83 | 0x5805 | 0x58E9 | 0x58EC | 0x58EE |
| 0x2E84 | 0x5811 | 0x5805 | 0x587C | 0x583C |
| 0x2E85 | 0x5811 | 0x5805 | 0x587C | 0x583C |
| 0x2E8B | 0x587C | 0x5824 | 0x586A | 0x583C |
| 0x2E8C | 0x587C | 0x5824 | 0x586A | 0x583C |
| 0x2E8D | 0x587C | 0x5824 | 0x586A | 0x583C |
| 0x2E8E | 0x587C | 0x5824 | 0x586A | 0x583C |
| 0x2E96 | 0x588B | 0x5832 | 0x587C | 0x583C |
| 0x2E97 | 0x5844 | 0x5887 | 0x5898 | 0x5815 |
| 0x2E98 | 0x588B | 0x5835 | 0x5842 | 0x5815 |
| 0x2E9F | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2EA1 | 0x5811 | 0x580D | 0x583C | 0x587C |
| 0x2EAE | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2EAF | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2ECC | 0x588B | 0x5835 | 0x5842 | 0x5815 |
| 0x2ECD | 0x5857 | 0x5887 | 0x5898 | 0x5815 |
| 0x2ECE | 0x5857 | 0x5887 | 0x5898 | 0x5815 |
| 0x2ECF | 0x5844 | 0x5887 | 0x5857 | 0x5813 |
| 0x2ED0 | 0x5844 | 0x5887 | 0x5857 | 0x5813 |
| 0x2ED1 | 0x588B | 0x5887 | 0x5898 | 0x5815 |
| 0x2ED2 | 0x5872 | 0x5835 | 0x5842 | 0x5815 |
| 0x2ED3 | 0x588B | 0x5835 | 0x5842 | 0x5815 |
| 0x2EE0 | 0x5850 | 0x581F | 0x5824 | 0x581E |
| 0x2EE1 | 0x581F | 0x5820 | 0x583C | 0x58EC |
| 0x2EE2 | 0x581F | 0x5820 | 0x5824 | 0x5882 |
| 0x2EE3 | 0x581F | 0x5820 | 0x5824 | 0x587F |
| 0x2EE6 | 0x5823 | 0x5882 | 0x583A | 0x5833 |
| 0x2EEA | 0x5852 | 0x5820 | 0x5824 | 0x581E |
| 0x2EEB | 0x5820 | 0x581F | 0x5824 | 0x58EA |
| 0x2EEC | 0x5820 | 0x5882 | 0x581F | 0x5832 |
| 0x2EF4 | 0x5824 | 0x5882 | 0x5820 | 0x5811 |
| 0x2EF5 | 0x581F | 0x5820 | 0x5832 | 0x583C |
| 0x2EF7 | 0x581F | 0x5820 | 0x5832 | 0x583C |
| 0x2EF8 | 0x581F | 0x5820 | 0x5832 | 0x583C |
| 0x2EFE | 0x5820 | 0x587F | 0x5832 | 0x583C |
| 0x2EFF | 0x5824 | 0x587F | 0x583C | 0x5820 |
| 0x2F08 | 0x5851 | 0x581E | 0x5824 | 0x583C |
| 0x2F09 | 0x581E | 0x583A | 0x5824 | 0x581F |
| 0x2F0A | 0x5851 | 0x581E | 0x5824 | 0x58D5 |
| 0x2F0C | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2F0D | 0x5811 | 0x580D | 0x583C | 0x5880 |
| 0x2F10 | 0x583C | 0x5824 | 0x58D2 | 0x58D3 |
| 0x2F11 | 0x583C | 0x5824 | 0x58D2 | 0x58D3 |
| 0x2F12 | 0x5811 | 0x580D | 0x581F | 0x583C |
| 0x2F13 | 0x5851 | 0x581E | 0x5824 | 0x583C |
| 0x2F15 | 0x581E | 0x583A | 0x5824 | 0x581F |
| 0x2F30 | 0x581E | 0x5813 | 0x5824 | 0x581F |
| 0x2F49 | 0x5811 | 0x583C | 0x587C | 0x5821 |
| 0x2F4A | 0x5811 | 0x583C | 0x587C | 0x5821 |
| 0x2F4B | 0x5811 | 0x583C | 0x587C | 0x5821 |
| 0x2F4C | 0x5811 | 0x583C | 0x587C | 0x5821 |
| 0x2F4E | 0x5811 | 0x5832 | 0x583C | 0x5881 |
| 0x2F4F | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2F52 | 0x580D | 0x5811 | 0x5815 | 0x58E5 |
| 0x2F53 | 0x580D | 0x5811 | 0x5815 | 0x58E5 |
| 0x2F54 | 0x580D | 0x5811 | 0x5815 | 0x58E5 |
| 0x2F55 | 0x580D | 0x5811 | 0x5815 | 0x58E5 |
| 0x2F56 | 0x5811 | 0x5832 | 0x58D1 | 0x5881 |
| 0x2F57 | 0x5811 | 0x5832 | 0x58D1 | 0x5881 |
| 0x2F58 | 0x588B | 0x584A | 0x5853 | 0x583C |
| 0x2F5B | 0x5811 | 0x5832 | 0x58D1 | 0x5881 |
| 0x2F5C | 0x5811 | 0x5832 | 0x58D1 | 0x5881 |
| 0x2F5D | 0x5811 | 0x5832 | 0x58D1 | 0x5881 |
| 0x2F5E | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2F5F | 0x5811 | 0x5832 | 0x58D1 | 0x5881 |
| 0x2F60 | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x2F63 | 0x58CE | 0x58B7 | 0x587C | 0x584A |
| 0x2F64 | 0x58CE | 0x58B7 | 0x587C | 0x584A |
| 0x2F67 | 0x5811 | 0x580D | 0x5832 | 0x5818 |
| 0x2F6C | 0x580D | 0x588B | 0x58AD | 0x583C |
| 0x2F71 | 0x5811 | 0x581E | 0x5821 | 0x580D |
| 0x2F76 | 0x5821 | 0x5834 | 0x5870 | 0x587C |
| 0x2F77 | 0x5834 | 0x5870 | 0x5833 | 0x5824 |
| 0x2F79 | 0x5834 | 0x580B | 0x58DD | 0x58DE |
| 0x2F7A | 0x5834 | 0x580B | 0x58DD | 0x58DE |
| 0x2F7B | 0x5811 | 0x5822 | 0x581F | 0x583C |
| 0x2F7E | 0x5811 | 0x5833 | 0x5882 | 0x5823 |
| 0x2F7F | 0x5811 | 0x5833 | 0x5882 | 0x5823 |
| 0x2F80 | 0x58A8 | 0x581F | 0x587C | 0x583C |
| 0x2F81 | 0x5811 | 0x5832 | 0x5882 | 0x5823 |
| 0x2F82 | 0x5811 | 0x5832 | 0x5882 | 0x5823 |
| 0x2F83 | 0x5811 | 0x5832 | 0x5882 | 0x5823 |
| 0x2F84 | 0x5811 | 0x5832 | 0x5882 | 0x5823 |
| 0x2F85 | 0x5841 | 0x5821 | 0x5824 | 0x583C |
| 0x2F8F | 0x58B7 | 0x580D | 0x5814 | 0x58CE |
| 0x2F91 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2F94 | 0x5811 | 0x580D | 0x581F | 0x583C |
| 0x2F99 | 0x5824 | 0x5833 | 0x5882 | 0x5820 |
| 0x2F9A | 0x5824 | 0x5833 | 0x581E | 0x587C |
| 0x2F9E | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2FA3 | 0x5811 | 0x583C | 0x587C | 0x588B |
| 0x2FA4 | 0x5811 | 0x583C | 0x587C | 0x588B |
| 0x2FAB | 0x588B | 0x580C | 0x583C | 0x587C |
| 0x2FBC | 0x58F2 | 0x58F0 | 0x58E4 | 0x587C |
| 0x2FBD | 0x58F0 | 0x5811 | 0x58F2 | 0x58BA |
| 0x2FBE | 0x58F0 | 0x58F2 | 0x5811 | 0x5832 |
| 0x2FBF | 0x58F0 | 0x58F2 | 0x583C | 0x58F3 |
| 0x2FC0 | 0x58F0 | 0x5811 | 0x58F2 | 0x58BA |
| 0x2FC3 | 0x58F0 | 0x5811 | 0x58F2 | 0x58BA |
| 0x2FC6 | 0x580D | 0x583C | 0x5811 | 0x5832 |
| 0x2FC7 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2FCA | 0x5876 | 0x5877 | 0x58F3 | 0x5882 |
| 0x2FDA | 0x5811 | 0x58F0 | 0x5825 | 0x5833 |
| 0x2FDB | 0x58F0 | 0x5811 | 0x5882 | 0x5825 |
| 0x2FDC | 0x5876 | 0x5877 | 0x5815 | 0x5882 |
| 0x2FE4 | 0x580D | 0x5811 | 0x5815 | 0x5881 |
| 0x2FE5 | 0x580D | 0x5811 | 0x5815 | 0x5881 |
| 0x2FE6 | 0x580D | 0x5811 | 0x5815 | 0x5881 |
| 0x2FE7 | 0x580D | 0x5811 | 0x5815 | 0x5881 |
| 0x3070 | 0x580D | 0x5811 | 0x583C | 0x587C |
| 0x3071 | 0x580D | 0x5811 | 0x583C | 0x587C |
| 0x3072 | 0x580D | 0x5811 | 0x583C | 0x587C |
| 0x3073 | 0x580D | 0x5811 | 0x583C | 0x587C |
| 0x3074 | 0x580D | 0x5811 | 0x583C | 0x587C |
| 0x3075 | 0x580D | 0x5811 | 0x583C | 0x587C |
| 0x307C | 0x580D | 0x5811 | 0x583C | 0x587C |
| 0x307D | 0x580D | 0x5811 | 0x583C | 0x587C |
| 0x307E | 0x580D | 0x5811 | 0x583C | 0x587C |
| 0x307F | 0x580D | 0x5811 | 0x583C | 0x587C |
| 0x3080 | 0x580D | 0x5811 | 0x583C | 0x587C |
| 0x3081 | 0x580D | 0x5811 | 0x583C | 0x587C |
| 0x30A0 | 0x5805 | 0x583C | 0x5811 | 0x58B1 |
| 0x30A1 | 0x5805 | 0x583C | 0x5811 | 0x58B5 |
| 0x30A2 | 0x5805 | 0x583C | 0x5811 | 0x58B3 |
| 0x30A3 | 0x5805 | 0x583C | 0x5811 | 0x58B6 |
| 0x30A4 | 0x5805 | 0x583C | 0x5811 | 0x58B2 |
| 0x30A5 | 0x5805 | 0x583C | 0x5811 | 0x58B4 |
| 0x30AC | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x30AD | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x30AE | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x30AF | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x30B0 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x30B1 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x30BA | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x30BB | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x30BE | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x30C0 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x30C1 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x30C2 | 0x5811 | 0x5822 | 0x586F | 0x583C |
| 0x30C3 | 0x580D | 0x5811 | 0x5822 | 0x586F |
| 0x30C4 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x30C5 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x30C6 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x30C7 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x30C9 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x30CA | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x30CF | 0x5811 | 0x581F | 0x583C | 0x587C |
| 0x30D0 | 0x5811 | 0x581F | 0x583C | 0x587C |
| 0x30D6 | 0x58A2 | 0x58A1 | 0x58A3 | 0x5810 |
| 0x30D8 | 0x58A3 | 0x58A1 | 0x5889 | 0x58A2 |
| 0x30DA | 0x58A4 | 0x5836 | 0x58A2 | 0x5810 |
| 0x30DC | 0x58A4 | 0x588B | 0x580F | 0x586A |
| 0x30DE | 0x58A2 | 0x5889 | 0x588A | 0x58A3 |
| 0x30E0 | 0x5810 | 0x58A6 | 0x589E | 0x58A5 |
| 0x30E2 | 0x5849 | 0x58A1 | 0x58A6 | 0x58A3 |
| 0x30E4 | 0x5849 | 0x58A3 | 0x584B | 0x5810 |
| 0x30E6 | 0x58A2 | 0x584B | 0x58A1 | 0x5810 |
| 0x30E9 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x30EA | 0x58A5 | 0x58A6 | 0x589E | 0x58A0 |
| 0x30ED | 0x5811 | 0x5813 | 0x581E | 0x581F |
| 0x30EE | 0x5811 | 0x5813 | 0x581E | 0x581F |
| 0x30EF | 0x5811 | 0x5813 | 0x581E | 0x581F |
| 0x30F0 | 0x5811 | 0x5813 | 0x581E | 0x581F |
| 0x30F1 | 0x5811 | 0x5813 | 0x581E | 0x581F |
| 0x30F2 | 0x5811 | 0x5813 | 0x581E | 0x581F |
| 0x30FC | 0x5834 | 0x5824 | 0x58DD | 0x580C |
| 0x30FE | 0x5834 | 0x5824 | 0x58DD | 0x580C |
| 0x30FF | 0x5834 | 0x5824 | 0x58DD | 0x580C |
| 0x3100 | 0x5834 | 0x5824 | 0x58DD | 0x580C |
| 0x3104 | 0x581F | 0x5811 | 0x58D1 | 0x580D |
| 0x3105 | 0x581F | 0x5811 | 0x58D1 | 0x580D |
| 0x3179 | 0x580C | 0x580D | 0x583C | 0x587C |
| 0xCD87 | 0x5811 | 0x5832 | 0x583C | 0x587C |
| 0xCD8B | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD94 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD95 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD96 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD97 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD98 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD99 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD9A | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD9B | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD9C | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD9D | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD9E | 0x580D | 0x583C | 0x5811 | 0x5832 |
| 0xCD9F | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA0 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA1 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA2 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA3 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA4 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA5 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA6 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA7 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA8 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA9 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDAA | 0x580D | 0x583C | 0x5811 | 0x5832 |
| 0xCDAB | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDAC | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDAD | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDAE | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDAF | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDB0 | 0x580D | 0x583C | 0x5811 | 0x5832 |
| 0xCDB1 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDB3 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDB4 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDB5 | 0x5811 | 0x5832 | 0x583C | 0x587C |
| 0xCDB8 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDB9 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDBA | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDBD | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDBE | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDC2 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDC3 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xFFFF | 0x58FF | 0x58FF | 0x58FF | 0x58FF |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4200 | Ansauglufttemperatur 1 | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x4201 | Umgebungsdruck | hPa | - | unsigned integer | - | 0,08291752636432648 | 1 | 0,0 |
| 0x4202 | Saugrohrdruck | hPa | - | unsigned integer | - | 0,08291752636432648 | 1 | 0,0 |
| 0x4203 | Massenstrom vom HFM | kg/h | - | unsigned integer | - | 0,03125 | 1 | 0,0 |
| 0x4204 | Umgebungstemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x4205 | Saugrohrdruck 1 / Ladedruck 1 | hPa | - | unsigned integer | - | 0,08291752636432648 | 1 | 0,0 |
| 0x4300 | Kühlwassertemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x4301 | Kühlerauslasstemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x4302 | Wasserpumpe Leistung über BSD | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4303 | Wasserpumpe Elektronik Temperatur | °C | - | unsigned char | - | 1,0 | 1 | -50,0 |
| 0x4304 | Wasserpumpe Strom | A | - | unsigned char | - | 0,5 | 1 | 0,0 |
| 0x4305 | Wasserpumpe Drehzahl Ist | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4306 | Wasserpumpe Drehzahl Soll | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4307 | Wasserpumpe Betriebsart | 0-n | - | 0xFF | _CNV_S_11_Def_ba_wm_660 | 1 | 1 | 0 |
| 0x4400 | Ölstand Mittelwert Langzeit | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x4401 | Füllstand Motoröl | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4402 | Öltemperatur | °C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4403 | Kraftstoff-Verbrauch seit letztem Service | - | - | unsigned long | - | 1,220703125E-4 | 1 | 0,0 |
| 0x4404 | km seit letztem Service | km | - | unsigned integer | - | 10,0 | 1 | 0,0 |
| 0x4405 | Ölsensor Niveau Rohwert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4406 | Ölsensor Qualität Rohwert | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4407 | Ölsensor Temperatur Rohwert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4408 | Ölsensor Temperatur | °C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4409 | Ölsensor Niveau | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x440A | Ölsensor Qualität | - | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 |
| 0x440B | Länderfaktor 1 codiert | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440C | Länderfaktor 2 codiert | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440D | Länderfaktor 1 | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440E | Länderfaktor 2 | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440F | Kurzmittelwert-Niveau für den Tester | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x4410 | Restweg aus Permittivität abgeleitet | km | - | signed integer | - | 10,0 | 1 | 0,0 |
| 0x4411 | Restweg aus Kraftstoffverbrauch abgeleitet | km | - | signed integer | - | 10,0 | 1 | 0,0 |
| 0x4412 | Öl-Alter in Monate | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4413 | aufbereitete Permittivität bei letztem Ölwechsel | - | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 |
| 0x4414 | Permittivität für Bewertung aufbereitet (extrapoliert) | - | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 |
| 0x4415 | Offset für Permittivitätskorrektur | - | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 |
| 0x4416 | zugeteilte Bonuskraftstoffmenge | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4417 | zugeteilter Permittivitätsbonus | - | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 |
| 0x4418 | Status Peilstabanzeige | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4505 | Sollwert Einlassspreizung | °CRK | - | unsigned char | - | 0,375 | 1 | 59,99999821186071 |
| 0x4506 | Nockenwellenposition Einlass | °CRK | - | unsigned integer | - | 0,375 | 1 | -95,99999713897714 |
| 0x4507 | Nockenwellenposition Auslass | °CRK | - | unsigned integer | - | 0,375 | 1 | -95,99999713897714 |
| 0x4508 | Istwert Einlassspreizung | °CRK | - | unsigned char | - | 0,375 | 1 | 59,99999821186071 |
| 0x4509 | Istwert Auslassspreizung | °CRK | - | unsigned char | - | -0,375 | 1 | -39,99999785423285 |
| 0x450A | Normspreizung Auslass | °CRK | - | signed integer | - | 0,0234375 | 1 | 0,0 |
| 0x450B | Normspreizung Einlass | °CRK | - | signed integer | - | 0,0234375 | 1 | 0,0 |
| 0x4600 | aktueller Drosselklappenwinkel | °TPS | - | unsigned integer | - | 0,007294146344065666 | 1 | 0,0 |
| 0x4601 | Drosselklappe Sollwert aus Modell | °TPS | - | unsigned integer | - | 0,007294146344065666 | 1 | 0,0 |
| 0x4602 | Generator Sollspannung über BSD | V | - | unsigned char | - | 0,10000000149011612 | 1 | 10,6 |
| 0x4603 | Chiptemperatur Generator 1 | °C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4604 | Generator Strom | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4605 | Chipversion Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4606 | Reglerversion Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4607 | Herstellercode Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4608 | Kennung Generatortyp Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4609 | Kl.87 Spannung / Versorgung DME | V | - | unsigned char | - | 0,1015624925494194 | 1 | 0,0 |
| 0x460A | Batteriespannung aktuell | V | - | unsigned integer | - | 0,014999999664723873 | 1 | 0,0 |
| 0x460B | Batteriespannung von IBS gemessen | - | - | unsigned integer | - | 2,500000118743628E-4 | 1 | 6,0 |
| 0x460C | Batteriespannung vom AD-Wandler DME | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x460D | Korrekturwert Abschaltung | - | - | signed integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x460E | Abstand zur Startfähigkeitsgrenze | - | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x460F | Batterielast | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4610 | aktuelle Position Disaklappen | % | - | unsigned integer | - | 0,003051757114008069 | 1 | 0,0 |
| 0x4611 | Sollwert E-Lüfter als PWM Wert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4612 | Erregerstrom Generator 1 | A | - | unsigned char | - | 0,125 | 1 | 0,0 |
| 0x4613 | Kopierter Wert von zum Generator gesendeter Sollspannung Generator 1 | V | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4614 | Auslastungsgrad Generator 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4615 | Kopie begrenzter Erregerstrom Generator 1 | A | - | unsigned char | - | 0,125 | 1 | 0,0 |
| 0x4616 | Kopie Generator 1 LR Vorgabe auf Bus gelegt | s | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4617 | gefiltertes Generatormoment absolut Ausgang | Nm | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4618 | Kopie Drehzahlschwelle für LR-Funktion Generator 1 aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4619 | Bedingung BSD II Protokoll | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x461A | Nominale Generatorspannung | V | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4700 | Status Lambdasonde betriebsbereit vor Katalysator Bank 1 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4701 | Status Lambdasonde betriebsbereit vor Katalysator Bank 2 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4702 | Spannung Lambdasonde vor Katalysator Bank 1 mit Offsetkorrektur | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4703 | Spannung Lambdasonde vor Katalysator Bank 2 mit Offsetkorrektur | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4704 | Lambda Sollwert Bank 1 | - | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| 0x4705 | Lambda Sollwert Bank 2 | - | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| 0x4710 | Kleinstmengenadaption kalt Injektor 1 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x4711 | Kleinstmengenadaption kalt  Injektor 5 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x4712 | Kleinstmengenadaption kalt Injektor 3 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x4713 | Kleinstmengenadaption kalt Injektor 6 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x4714 | Kleinstmengenadaption kalt Injektor 2 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x4715 | Kleinstmengenadaption kalt  Injektor 4 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x4716 | Kleinstmengenadaption warm Injektor 1 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x4717 | Kleinstmengenadaption warm Injektor 5 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x4718 | Kleinstmengenadaption warm Injektor 3 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x4719 | Kleinstmengenadaption warm Injektor 6 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x471A | Kleinstmengenadaption warm Injektor 2 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x471B | Kleinstmengenadaption warm Injektor 4 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x471C | Abstand zur nächsten Kleinstmengenadaption kalt | km | - | unsigned integer | - | 8,0 | 1 | 0,0 |
| 0x471D | Abstand zur nächsten Kleinstmengenadaption warm | km | - | unsigned integer | - | 8,0 | 1 | 0,0 |
| 0x471E | Zähler Kleinstmengenadaption kalt | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x471F | Zähler Kleinstmengenadaption warm | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4720 | NOX-Sensor Eigendiagnosewert | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x4721 | Anzahl der erfolgten NOX-Sensor-Systemadaptionen | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4722 | km-stand bei letzter Nox-Sensor-Eigendiagnose | km | - | unsigned integer | - | 8,0 | 1 | 0,0 |
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
| 0x4850 | Anzahl misfire über Lebenszeit, Zyl. 1 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4851 | Anzahl misfire über Lebenszeit, Zyl. 5 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4852 | Anzahl misfire über Lebenszeit, Zyl. 3 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4853 | Anzahl misfire über Lebenszeit, Zyl. 6 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4854 | Anzahl misfire über Lebenszeit, Zyl. 2 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4855 | Anzahl misfire über Lebenszeit, Zyl. 4 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5800 | Zeit nach Start | s | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x5801 | Umgebungsdruck | kPa | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5802 | Zustand Lambdaregelung Bank 1 | 0-n | - | 0xFF | _CNV_S_5_LACO_RANGE_439 | 1 | 1 | 0 |
| 0x5803 | Zustand Lambdaregelung Bank 2 | 0-n | - | 0xFF | _CNV_S_5_LACO_RANGE_439 | 1 | 1 | 0 |
| 0x5804 | Berechneter Lastwert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5805 | Kühlmitteltemperatur OBD | °C | - | unsigned char | - | 1,0 | 1 | -40,0 |
| 0x5806 | Lambda Integrator Gruppe 1 | % | - | unsigned char | - | 0,78125 | 1 | -100,00000223517424 |
| 0x5807 | Lambda Adaption Summe mul. und add. Gruppe 1 | % | - | unsigned char | - | 0,78125 | 1 | -100,00000223517424 |
| 0x5808 | Lambda Integrator Gruppe 2 | % | - | unsigned char | - | 0,78125 | 1 | -100,00000223517424 |
| 0x5809 | Lambda Adaption Summe mul. und add. Gruppe 2 | % | - | unsigned char | - | 0,78125 | 1 | -100,00000223517424 |
| 0x580A | Mittlere Sollkraftstoffmasse | mg/stk | - | unsigned char | - | 5,44705867767334 | 1 | 0,0 |
| 0x580B | Saugrohrdruck | kPa | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x580C | Drehzahl | rpm | - | unsigned char | - | 64,0 | 1 | 0,0 |
| 0x580D | Geschwindigkeit | km/h | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x580E | Zündzeitpunkt Zylinder 1 | °CRK | - | unsigned char | - | 0,5 | 1 | -64,0 |
| 0x580F | Ansauglufttemperatur | °C | - | unsigned char | - | 1,0 | 1 | -40,0 |
| 0x5810 | Luftdurchsatz OBD | g/s | - | unsigned char | - | 2,559999942779541 | 1 | 0,0 |
| 0x5811 | Motordrehzahl | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x5812 | Luftmasse gemessen | kg/h | - | unsigned char | - | 8,0 | 1 | 0,0 |
| 0x5813 | Relative Last | % | - | signed char | - | 2,559999942779541 | 1 | 0,0 |
| 0x5814 | Fahrpedalwert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5815 | Batteriespannung | V | - | unsigned char | - | 0,25600001215934753 | 1 | 0,0 |
| 0x5816 | Lambda Setpoint | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x5817 | Umgebungstemperatur | °C | - | unsigned char | - | 1,0 | 1 | -40,0 |
| 0x5818 | Luftmasse gerechnet | mg/stk | - | unsigned char | - | 5,425863742828369 | 1 | 0,0 |
| 0x5819 | Drehzahl OBD Byte | rpm | - | unsigned char | - | 64,0 | 1 | 0,0 |
| 0x581A | Nockenwelle Einlass | °CRK | - | unsigned char | - | 0,375 | 1 | 59,99999821186071 |
| 0x581B | Nockenwelle Einlass Sollwert | °CRK | - | unsigned char | - | 0,375 | 1 | 59,99999821186071 |
| 0x581C | Nockenwelle Auslass | °CRK | - | unsigned char | - | -0,375 | 1 | -39,99999785423285 |
| 0x581D | Nockenwelle Auslass Sollwert | °CRK | - | unsigned char | - | -0,375 | 1 | -39,99999785423285 |
| 0x581E | Ansauglufttemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x581F | Motortemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5820 | Kühlmitteltemperatur Kühlerausgang | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5821 | Steuergeräte-Innentemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5822 | (Motor)-Öltemperatur | °C | - | unsigned char | - | 1,0 | 1 | -40,0 |
| 0x5823 | Zeit Motor steht | min | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x5824 | Umgebungstemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5825 | Abstellzeit | min | - | unsigned char | - | 4,0 | 1 | 0,0 |
| 0x5826 | Drosselklappe Sensor 1 | °TPS | - | unsigned char | - | 1,8673014640808105 | 1 | 0,0 |
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
| 0x5832 | Motor Status | 0-n | - | 0xFF | _CNV_S_6_RANGE_STAT_179 | 1 | 1 | 0 |
| 0x5833 | Umgebungstemperatur beim Start | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5834 | Umgebungsdruck | hPa | - | unsigned char | - | 21,226886749267578 | 1 | 0,0 |
| 0x5835 | Herstellercode Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5836 | Drehzahlgradient | rpm/s | - | signed char | - | 32,0 | 1 | 0,0 |
| 0x5837 | Status OBD-I Fehler vor Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_11_EGCP_RANGE_389 | 1 | 1 | 0 |
| 0x5838 | Status OBD-I Fehler vor Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_11_EGCP_RANGE_389 | 1 | 1 | 0 |
| 0x5839 | Status Drosselklappe Notlauf | 0-n | - | 0xFF | _CNV_S_5_RANGE_STAT_301 | 1 | 1 | 0 |
| 0x583A | Ansauglufttemperatur beim Start | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x583B | Kraftstofftank Füllstand | l | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x583C | Spannung Kl. 87 | V | - | unsigned char | - | 0,1015624925494194 | 1 | 0,0 |
| 0x583D | Resettyp | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x583E | Motordrehzahl bei Reset | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x583F | Drosselklappe Sollwert | °TPS | - | unsigned char | - | 1,8673014640808105 | 1 | 0,0 |
| 0x5840 | CPU Last bei Reset | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5841 | SG-Innentemperatur Rohwert | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5842 | Kennung Generatortyp Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5843 | Versorgung Fahrtwertgeber 1 | V | - | unsigned char | - | 0,0390625037252903 | 1 | 0,0 |
| 0x5844 | Chiptemperatur Generator 1 | °C | - | unsigned char | - | 1,0 | 1 | -48,0 |
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
| 0x584F | Spannung Luftmasse | V | - | unsigned char | - | 0,019600000232458115 | 1 | 0,0 |
| 0x5850 | Spannung Motortemperatur | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5851 | Spannung Ansauglufttemperatur | V | - | unsigned char | - | 0,019600000232458115 | 1 | 0,0 |
| 0x5852 | Kühlmitteltemperatur Kühlerausgang Rohwert | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5853 | Spannung Kl.87 Rohwert | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5854 | Versorgung Fahrtwertgeber 2 | V | - | unsigned char | - | 0,0390625037252903 | 1 | 0,0 |
| 0x5855 | Mittelwert Bank 1 | % | - | signed char | - | 0,390625 | 1 | 2,220446098881151E-14 |
| 0x5856 | Mittelwert Bank 2 | % | - | signed char | - | 0,390625 | 1 | 2,220446098881151E-14 |
| 0x5857 | Erregerstrom Generator 1 | A | - | unsigned char | - | 0,125 | 1 | 0,0 |
| 0x5858 | Drosselklappe aktueller Wert | °TPS | - | unsigned char | - | 1,8673014640808105 | 1 | 0,0 |
| 0x5859 | DMTL Strom Referenzleck | mA | - | unsigned char | - | 0,1953124701976776 | 1 | 0,0 |
| 0x585A | DMTL Strom Grobleck | mA | - | unsigned char | - | 0,1953124701976776 | 1 | 0,0 |
| 0x585B | DMTL Strom Diagnoseende | mA | - | unsigned char | - | 0,1953124701976776 | 1 | 0,0 |
| 0x585C | Widerstand Lambdasonde hinter Katalysator Bank 1 | ohm | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x585D | Widerstand Lambdasonde hinter Katalysator Bank 2 | ohm | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x585E | unteres Byte Widerstand Lambdasonde hinter Katalysator Bank 1 | ohm | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x585F | unteres Byte Widerstand Lambdasonde hinter Katalysator Bank 2 | ohm | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5860 | Widerstand Lambdasonde vor Katalysator Bank 1 | ohm | - | unsigned char | - | 64,0 | 1 | 0,0 |
| 0x5861 | Widerstand Lambdasonde vor Katalysator Bank 2 | ohm | - | unsigned char | - | 64,0 | 1 | 0,0 |
| 0x5862 | Öldruck Sollwert | hPa | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x5863 | untere Byte Widerstand Lambdasonde vor Katalysator Bank 1 | ohm | - | unsigned char | - | 0,25 | 1 | 0,0 |
| 0x5864 | untere Byte Widerstand Lambdasonde vor Katalysator Bank 2 | ohm | - | unsigned char | - | 0,25 | 1 | 0,0 |
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
| 0x586F | Ist-Öldruck | hPa | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x5870 | Spannung DME Umgebungsdruck | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5871 | Lambda-Sollwert Gruppe 1 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x5872 | Reglerversion Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5873 | Lambda-Sollwert Gruppe 2 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x5874 | Spannung Strommessung DMTL | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5875 | Sollwert Motormoment | Nm | - | signed char | - | 2,0 | 1 | 0,0 |
| 0x5876 | Raildruck OBD (High Byte) | kPa | - | unsigned char | - | 2560,0 | 1 | 0,0 |
| 0x5877 | Raildruck OBD (Low Byte) | kPa | - | unsigned char | - | 10,0 | 1 | 0,0 |
| 0x5878 | Lambdaverschiebung Rückführregler 1 | - | - | signed char | - | 9,765625E-4 | 1 | 0,0 |
| 0x5879 | Lambdaverschiebung Rückführregler 2 | - | - | signed char | - | 9,765625E-4 | 1 | 0,0 |
| 0x587A | Status FGR | 0-n | - | 0xFF | _CNV_S_6_RANGE_STAT_113 | 1 | 1 | 0 |
| 0x587B | Abgleich Abgasrückführungsventilmodell (Faktor) | - | - | unsigned char | - | 0,125 | 1 | 0,0 |
| 0x587C | Status Motorsteuerung | 0-n | - | 0xFF | _CNV_S_7_RANGE_ECU__177 | 1 | 1 | 0 |
| 0x587D | Symptom bei Schubabschaltung Sonde vor Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_4_EGCP_RANGE_400 | 1 | 1 | 0 |
| 0x587E | Symptom bei Schubabschaltung Sonde vor Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_4_EGCP_RANGE_400 | 1 | 1 | 0 |
| 0x587F | Tastverhältnis E-Lüfter | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5880 | Tastverhältnis Luftklappe | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5881 | berechneter Gang | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5882 | Motortemperatur beim Start | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5883 | Spannung Klopfwerte Zylinder 1 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5884 | Rückgelesener Erregergrenzstrom Generator 1 | A | - | unsigned char | - | 0,125 | 1 | 0,0 |
| 0x5885 | Spannung Klopfwerte Zylinder 3 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5886 | Spannung Klopfwerte Zylinder 6 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5887 | Auslastungsgrad Generator 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5888 | Spannung Klopfwerte Zylinder 4 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5889 | Lambda-Istwert Gruppe 1 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x588A | Lambda-Istwert Gruppe 2 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x588B | Zeit seit Startende | s | - | unsigned char | - | 25,600000381469727 | 1 | 0,0 |
| 0x588C | Keramiktemperatur Lambdasonde vor Katalysator Bank 1 | °C | - | signed char | - | 16,0 | 1 | 0,0 |
| 0x588D | aktuelle Zeit DMTL Leckmessung | s | - | unsigned char | - | 25,600000381469727 | 1 | 0,0 |
| 0x588E | Pumpenstrom bei DMTL Pumpenprüfung | mA | - | unsigned char | - | 1,5625238418579102 | 1 | 0,0 |
| 0x588F | Keramiktemperatur Lambdasonde vor Katalysator Bank 2 | °C | - | signed char | - | 16,0 | 1 | 0,0 |
| 0x5890 |  Spannung Bremsunterdrucksensor | V | - | unsigned char | - | 0,019531216472387314 | 1 | 0,0 |
| 0x5891 | Momentanforderung an der Kupplung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x5892 |  Bremsunterdruck | hPa | - | unsigned char | - | 5,306640625 | 1 | 0,0 |
| 0x5893 | Drehmomentabfall schnell bei Gangwechsel | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x5894 | Symptom Lambdasondenheizung vor Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_4_EGCP_RANGE_391 | 1 | 1 | 0 |
| 0x5895 | Symptom Lambdasondenheizung vor Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_4_EGCP_RANGE_391 | 1 | 1 | 0 |
| 0x5896 | Abgastemperatur hinter Katalysator Bank 1 | °C | - | unsigned char | - | 16,0 | 1 | 0,0 |
| 0x5897 | Abgastemperatur hinter Katalysator Bank 2 | °C | - | unsigned char | - | 16,0 | 1 | 0,0 |
| 0x5898 | Generator Sollspannung | V | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5899 | Istwert DISA-Position | % | - | unsigned char | - | 0,7812498211860657 | 1 | 0,0 |
| 0x589A |  Tastverhältnis Nullgangsensor  | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x589B | Spannungsoffset Signalpfad CJ120 1 | V | - | signed char | - | 0,0048827845603227615 | 1 | -3,607843264663677E-6 |
| 0x589C | Spannungsoffset Signalpfad CJ120 2 | V | - | signed char | - | 0,0048827845603227615 | 1 | -3,607843264663677E-6 |
| 0x589D | Abweichung Lambdasonde zu Lambdamodellwert Überwachung | - | - | signed char | - | 0,015624979510903358 | 1 | -2,509803727102794E-6 |
| 0x589E | Alterungsfaktor durch Schwefel bedingt | - | - | unsigned char | - | 0,00390625 | 1 | 0,0 |
| 0x589F | Zeit Katheizfunktion aktiv | s | - | unsigned char | - | 25,600000381469727 | 1 | 0,0 |
| 0x58A0 | Fahrstrecke seit letzter Desulfatisierung | km | - | unsigned char | - | 40,0 | 1 | 0,0 |
| 0x58A1 | NOx-Konzentration | ppm | - | signed char | - | 16,0 | 1 | 0,0 |
| 0x58A2 | lineares Spannungssignal NOx-Sensor | - | - | unsigned char | - | 0,015625 | 1 | 0,0 |
| 0x58A3 | binäres Spannungssignal NOx-Sensor | mV | - | unsigned char | - | 8,0 | 1 | -200,0 |
| 0x58A4 | Status NOx-Sensor | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58A5 | gespeicherte Schwefelmasse im Katalysator | mg | - | unsigned char | - | 40,959999084472656 | 1 | 0,0 |
| 0x58A6 | resultierender NOxKatalysator-Alterungsfaktor | - | - | unsigned char | - | 0,003921568859368563 | 1 | 0,0 |
| 0x58A7 | Mittleres Lambda vor Kat | - | - | unsigned char | - | 0,015625 | 1 | 0,0 |
| 0x58A8 | Motorabstellzeit | min | - | unsigned char | - | 4,0 | 1 | 0,0 |
| 0x58A9 | Resetzähler Rechnerüberwachung: alter Wert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58AA | Fehlercode Rechnerüberwachung: alter Wert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58AB | Abweichung DK-Potentiometer 1 und Modellwert | °TPS | - | unsigned char | - | 0,46682536602020264 | 1 | 0,0 |
| 0x58AC | Abweichung DK-Potentiometer 2 und Modellwert | °TPS | - | unsigned char | - | 0,46682536602020264 | 1 | 0,0 |
| 0x58AD | Pedalwertgeber 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58AE | Periodendauer Luftmasse | us | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x58AF | Kraftstoff Anforderung an Pumpe | l/h | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58B0 | DK-Adaptionsschritt | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58B1 | Funkenbrenndauer Zylinder 1 | ms | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| 0x58B2 | Funkenbrenndauer Zylinder 5 | ms | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| 0x58B3 | Funkenbrenndauer Zylinder 3 | ms | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| 0x58B4 | Funkenbrenndauer Zylinder 6 | ms | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| 0x58B5 | Funkenbrenndauer Zylinder 2 | ms | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| 0x58B6 | Funkenbrenndauer Zylinder 4 | ms | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| 0x58B7 | Bremsdruck | bar | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58B8 | Drehzahl Überwachung | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x58B9 | Pedalwert Überwachung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58BA | eingespritze Kraftstoffmasse | l/h | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58BB | PWM Kraftstoffpumpe | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58BC | Luftmasse Überwachung | mg/stk | - | unsigned char | - | 5,44705867767334 | 1 | 0,0 |
| 0x58BD | Schalthäufigkeitszähler Drosselklappe Enteisungsfunktion High-Byte | - | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x58BE | Schalthäufigkeitszähler Drosselklappe Enteisungsfunktion Low-Byte | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58BF | relative Momentenforderung von MSR über CAN | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58C0 | Motordrehzahl Ersatzwert Überwachung | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x58C1 | Laufunruhe Segmentzeit | µs | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x58C2 | Statusbyte MFF-Monitoring | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58C3 | Statusbyte ISC-Monitoring | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58C4 | Statusbyte CRU-Monitoring | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58C5 | Drehzahl Überwachung (resetsicher) | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x58C6 | Status Einspritzventile (resetsicher) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58C7 | LL-Solldrehzahlabweichung Überwachung | rpm | - | signed char | - | 32,0 | 1 | 0,0 |
| 0x58C8 | I-Anteil Momentdifferenz Überwachung und Modell | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58C9 | I-Anteil LL passive Rampe aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x58CA | PD-Anteil langsam Leerlaufregelung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58CB | PD-Anteil schnell Leerlaufregelung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58CC | Verlustmoment Überwachung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58CD | Verlustmomentabweichung Überwachung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58CE | Carrierbyte Schalterstati | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58CF | Motormoment Sollwert Überwachung | Nm | - | unsigned char | - | 2,0 | 1 | 0,0 |
| 0x58D0 | Motormoment Istwert Überwachung | Nm | - | unsigned char | - | 2,0 | 1 | 0,0 |
| 0x58D1 | Moment aktueller Wert | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58D2 | Status Luftklappensystem High Byte | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58D3 | Status Luftklappensystem Low Byte | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58D4 | Abweichung maximales Moment an Kupplung Überwachung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58D5 | Ansauglufttemperatur im Laderstrang | °C | - | unsigned char | - | 1,0 | 1 | -48,0 |
| 0x58D6 | Abweichung minimales Moment an Kupplung Überwachung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58D7 | Spannung des Ansauglufttemperatursensors im Laderstrang | V | - | unsigned char | - | 0,012941176071763039 | 1 | 0,0 |
| 0x58D8 | Abgastemperatur Rohwert | V | - | unsigned char | - | 0,012941176071763039 | 1 | 0,0 |
| 0x58D9 | Fehlercode Rechnerüberwachung: aktueller Wert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58DA | Resetzähler Rechnerüberwachung: aktueller Wert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58DB | Inhalt Statusbyte 1 Drehzahlüberwachung (resetsicher) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58DC | Inhalt Statusbyte 2 Drehzahlüberwachung (resetsicher) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58DD | Druck vor Drosselklappe | kPa | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58DE | Spannung für Drucksensor vor Drosselklappe | V | - | unsigned char | - | 0,019531216472387314 | 1 | 0,0 |
| 0x58DF | Spannung Sportschalter | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x58E0 | Abgleich Drosselklappenmodell (Faktor) | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x58E1 | Abgleich Drosselklappenmodell (Offset) | kg/h | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58E2 | Abgleich Einlassventilmodell (Faktor) | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x58E3 | NOx Sensor Eigendiagnosewert | - | - | signed char | - | 0,00781247019767761 | 1 | -3,76470571580263E-6 |
| 0x58E4 | Betriebsart Istwert | 0-n | - | 0xFF | _CNV_S_5_Def_ba_gdi_655 | 1 | 1 | 0 |
| 0x58E5 | Lastwert für Aussetzererkennung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58E6 | Nulllastwert für Aussetzererkennung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58E7 | Spannung Pedalwertgeber 1 Überwachung | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x58E8 | Spannung Pedalwertgeber 2 Überwachung | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x58E9 | Wasserpumpe Spannung | V | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58EA | Wasserpumpe Drehzahl | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58EB | Wasserpumpe Drehzahl Soll-Ist-Differenz | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58EC | Wasserpumpe Temperatur Elektronik | °C | - | unsigned char | - | 1,0 | 1 | -50,0 |
| 0x58ED | Wasserpumpe Stromaufnahme | A | - | unsigned char | - | 0,5 | 1 | 0,0 |
| 0x58EE | Wasserpumpe leistungsreduziert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58EF | gemittelter Raildruck | V | - | unsigned char | - | 0,019531216472387314 | 1 | 0,0 |
| 0x58F0 | Raildruck | hPa | - | unsigned char | - | 1358,5177001953125 | 1 | 0,0 |
| 0x58F1 | DME - Losnummer | 0-n | - | 0xFF | _CNV_S_11_RANGE_STAT_976 | 1 | 1 | 0 |
| 0x58F2 | PWM-Signal des Mengensteuerventils | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58F3 | Kraftstoffdruck vor Mengensteuerventil | hPa | - | unsigned char | - | 42,453758239746094 | 1 | 0,0 |
| 0x58F4 | Spannung für Kraftstoffdrucksensor vor Mengensteuerventil | V | - | unsigned char | - | 0,019531216472387314 | 1 | 0,0 |
| 0x58F5 | Eingangssignal Rückführregler 1 | V | - | signed char | - | 0,0048827845603227615 | 1 | -3,607843264663677E-6 |
| 0x58F6 | Eingangssignal Rückführregler 2 | V | - | signed char | - | 0,0048827845603227615 | 1 | -3,607843264663677E-6 |
| 0x58F7 | Öffnungswinkel des AGR-Ventils | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58F8 | Segmentadaption Laufunruhe Zyl. 5 | %. | - | signed char | - | 0,06103530898690224 | 1 | 1,920958358174273E-5 |
| 0x58F9 | Segmentadaption Laufunruhe Zyl. 3 | %. | - | signed char | - | 0,06103530898690224 | 1 | 1,920958358174273E-5 |
| 0x58FA | Beladungsgrad Aktivkohlefilter TEV- Funktionstest | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x58FB | Zähler Drehzahlerhöhungen TEV- Funktionstest | cyc | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58FC | Sollwert für Öffnungswinkel des AGR-Ventils | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58FD | PWM-Signal für AGR-Ventil | % | - | signed char | - | 0,78125 | 1 | 0,0 |
| 0x58FE | Zähler für Umschaltungen nach HOM durch Monitoring | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58FF | Umweltbedingung unbekannt | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x5A00 | Versorgung Fahrwertgeber 1 | V | - | unsigned integer | - | 0,009765591472387314 | 1 | 0,0 |
| 0x5A01 | Versorgung Fahrwertgeber 2 | V | - | unsigned integer | - | 0,009765591472387314 | 1 | 0,0 |
| 0x5A02 | Leckagediagnose für Turbolader wird durchgeführt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A03 | Leckagediagnose für Turbolader beendet | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A04 | Spannung Pedalwertgeber 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A05 | Spannung Pedalwertgeber 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A06 | Spannung Drosselklappe Potentiometer 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A07 | Spannung Drosselklappe Potentiometer 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A08 | Spannung Ansauglufttemperatur | V | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 |
| 0x5A09 | Spannung Motortemperatur | V | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 |
| 0x5A0A | Spannung Kühlmitteltemperatur Kühlerausgang | V | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 |
| 0x5A0B | Spannung DME Umgebungsdruck | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A0C | Spannung Luftmasse | V | - | unsigned char | - | 0,019600000232458115 | 1 | 0,0 |
| 0x5A0D | Spannung Sekundärluft | V | - | unsigned char | - | 0,019600000232458115 | 1 | 0,0 |
| 0x5A0E | Spannung SG-Innentemperatur | V | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 |
| 0x5A0F | Spannung Kl.15 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A10 | Spannung Kl15 | V | - | unsigned integer | - | 0,02806011587381363 | 1 | 0,0 |
| 0x5A11 | Spannung Lambdasonde vor Katalysator Bank 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A12 | Spannung Lambdasonde vor Katalysator Bank 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A13 | Spannung Lambdasonde hinter Katalysator Bank 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A14 | Spannung Lambdasonde hinter Katalysator Bank 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A15 | Diagnose von zu niedrigem Ladedruck beendet | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A16 | Diagnose von zu hohem Ladedruck beendet | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A17 | Spannung Strommessung DMTL | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A18 | Spannung Abgastemperatursensor | V | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 |
| 0x5A1F | Abgastemperatur | °C | - | unsigned integer | - | 0,015625 | 1 | 0,0 |
| 0x5A21 | Kühlmitteltemperatur Kühlerausgang | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5A22 | Steuergeräte-Innentemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5A23 | Sollwert Öldruck | hPa | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5A24 | Drosselklappe Sollwert | °TPS | - | unsigned integer | - | 0,007294146344065666 | 1 | 0,0 |
| 0x5A25 | Istwert Öldruck | hPa | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x5A26 | Saugrohrdruck  | hPa | - | unsigned integer | - | 0,08291752636432648 | 1 | 0,0 |
| 0x5A27 | Pedalwertgeber Potentiometer 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A28 | Pedalwertgeber Potentiometer 2 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A29 | Fahrpedalwert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A2B | Temperatur vor Drosselklappe | °C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5A2C | Druck vor Drosselklappe | hPa | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x5A2D | Druck nach Drosselklappe | hPa | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x5A2E | Kraftstoffniederdrucksensor | hPa | - | unsigned integer | - | 2,6533608436584473 | 1 | 0,0 |
| 0x5A2F | Raildruck | hPa | - | unsigned integer | - | 5,3067216873168945 | 1 | 0,0 |
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
| 0x5A41 | Alterungsfaktor durch Schwefel bedingt | - | - | unsigned integer | - | 1,52587890625E-5 | 1 | 0,0 |
| 0x5A42 | resultierender NOx-Katalysator-Alterungsfaktor | - | - | unsigned integer | - | 1,52587890625E-5 | 1 | 0,0 |
| 0x5A43 | Alterungsfaktor durch thermische Alterung bedingt | - | - | unsigned integer | - | 1,52587890625E-5 | 1 | 0,0 |
| 0x5A44 | Anforderung an eine Desulfatisierung mit Katheizen | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A45 | Zähler für Katheizversuche | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5A46 | Fahrstrecke seit letzter Desulfatisierung | km | - | unsigned integer | - | 10,0 | 1 | 0,0 |
| 0x5A47 | Zeit Katheizfunktion aktiv | s | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5A48 | Motorlager Typ | 0/1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x5A49 | Zündwinkel Zylinder 1 | °CRK | - | unsigned char | - | 0,375 | 1 | -35,62499893829229 |
| 0x5A4B | Berechneter Lastwert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A4C | Status Drosselklappenheizungsrelais | 0-n | - | 0xFF | _CNV_S_5_RANGE_STAT_1015 | 1 | 1 | 0 |
| 0x5A4D | Drosselklappenheizung Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A4E | Klimakompressorrelais Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A50 | Lambdawert vor Katalysator Bank 1 | - | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| 0x5A51 | Lambdawert vor Katalysator Bank 2 | - | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| 0x5A52 | Status LS hinter Katalysator Bank 1 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A53 | Status LS hinter Katalysator Bank 2 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A54 | Status LS Heizung hinter Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_7_EGCP_RANGE_371 | 1 | 1 | 0 |
| 0x5A55 | Status LS Heizung hinter Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_7_EGCP_RANGE_371 | 1 | 1 | 0 |
| 0x5A56 | Status LS Heizung vor Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_7_EGCP_RANGE_371 | 1 | 1 | 0 |
| 0x5A57 | Status LS Heizung vor Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_7_EGCP_RANGE_371 | 1 | 1 | 0 |
| 0x5A58 | Lambdasondenheizung PWM vor Katalysator Bank 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A59 | Lambdasondenheizung PWM hinter Katalysator Bank 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A5A | Lambdasondenheizung PWM vor Katalysator Bank 2 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A5B | Lambdasondenheizung PWM hinter Katalysator Bank 2 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A5C | Aktive Fehlerrückmeldung DISA-Klappe 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5A5D | Schalthäufigkeitszähler DISA-Klappe 1 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5A5E | Aktive Fehlerrückmeldung DISA-Klappe 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5A5F | Schalthäufigkeitszähler DISA-Klappe 2 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5A60 | Bremslichtschalter Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A61 | Bremslichttestschalter Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A62 | Öldruckschalter Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A63 | E-Box-Lüfter Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A64 | Motorlager weiche Dämpfung | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A65 | Abgasklappe Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A66 | DMTL Pumpe Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A67 | DMTL Ventil Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A68 | DMTL Heizung Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A69 | MIL Lampe Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A6A | Lampe FGR Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A6B | Lampe Check Engine Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A6C | Verbrauchskorrekturfaktor | - | - | signed char | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5A6D | Status Taste FGR | 0-n | - | 0xFF | _CNV_S_8_RANGE_STAT_23 | 1 | 1 | 0 |
| 0x5A6E | Status für irreversible Abschaltbedingung | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5A6F | Status für reversible Abschaltbedingung | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5A70 | Soundklappe Zustand | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A71 | DISA1 PWM (große/obere Klappe) | % | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x5A72 | DISA2 PWM (kleine/untere Klappe) | % | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x5A73 | Kurbelgehäuseentlüftungsheizung ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A74 | Beheizter Thermostat PWM | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5A76 | Adaption Öffnungspunkt Tankentlüftungsventil | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5A77 | Tankentlüftungsventil PWM | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A78 | Abgasklappe Ansteuerung | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A79 | E-Lüfter PWM | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A7A | VANOS PWM Wert Einlass | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5A7B | VANOS PWM Wert Auslass | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5A7C | Nox-Sensor Systemadaptionswert | - | - | unsigned integer | - | 0,001953125 | 1 | 0,0 |
| 0x5A7D | Anzahl der erfolgten NOX-SENSOR-Systemadaptionen | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5A7E | km-stand bei letzter Nox-Sensor-Eigendiagnose | km | - | unsigned integer | - | 8,0 | 1 | 0,0 |
| 0x5A7F | Phase-Shift-Adaption Lambdasonde Bank 1 | °CRK | - | signed char | - | 6,0 | 1 | 0,0 |
| 0x5A80 | Phase-Shift-Adaption Lambdasonde Bank 2 | °CRK | - | signed char | - | 6,0 | 1 | 0,0 |
| 0x5A81 | Ausgang Lamdaregler Bank 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5A82 | Ausgang Lamdaregler Bank 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5A83 | Adaption Offset Lambda Bank 1 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x5A84 | Adaption Offset Lambda Bank 2 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
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
| 0x5A94 | Nockenwelle Auslass Sollwert | °CRK | - | unsigned char | - | -0,375 | 1 | -39,99999785423285 |
| 0x5A95 | Adaptionswert Nockenwelle Auslass | °CRK | - | unsigned char | - | 0,375 | 1 | -47,99999856948857 |
| 0x5A96 | Adaptionswert Nockenwelle Einlass | °CRK | - | unsigned char | - | 0,375 | 1 | -47,99999856948857 |
| 0x5A97 | Bedingung EVANOS im Anschlag beim letzten Abstellen | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A99 | Kurbelwellen Adaption beendet | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A9A | Status des Erlernens des Heifilmluftmassenmessers | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A9B | Multiplikative Gemischadaption inklusive Langzeitadaption Bank 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5A9C | Multiplikative Gemischadaption inklusive Langzeitadaption Bank 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5A9D | Gegenwärtige multiplikative Gemischadaption Bank 1 aus Lambdaadaption | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5A9E | Gegenwärtige multiplikative Gemischadaption Bank 2 aus Lambdaadaption | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5A9F | Langzeitadaption Bank 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5AA0 | Langzeitadaption Bank 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5AA1 | Status Diagnose TEV | 0-n | - | 0xFF | _CNV_S_10_STATE_EOL__478 | 1 | 1 | 0 |
| 0x5AA2 | Status Diagnose DMTL | 0-n | - | 0xFF | _CNV_S_10_STATE_EOL__478 | 1 | 1 | 0 |
| 0x5AA3 | Status Diagnose Lambdasonden | 0-n | - | 0xFF | _CNV_S_10_STATE_EOL__478 | 1 | 1 | 0 |
| 0x5AA4 | Status Diagnose Leerlaufdrehzahlverstellung | 0-n | - | 0xFF | _CNV_S_10_STATE_EOL__478 | 1 | 1 | 0 |
| 0x5AA7 | Leckluftadaption Istwert | kg/h | - | signed integer | - | 0,03125 | 1 | 0,0 |
| 0x5AA8 | Status Luftklappensystem | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5AA9 | Tastverhältnis: Luftklappe | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5AAA | Tastverhältnis Öldruck-Regelventil | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AAB | Wastegate 1 PWM | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AAC | Wastegate 2 PWM | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AAD | Vorsteuerung Ladedruckregelung | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AAE | Reglerausgang und Vorsteuerung | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AAF | Adaptionswert von der Ladedruckregelung | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5AB0 | Solladedruck | hPa | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x5AB1 | Geschwindigkeit | km/h | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AB2 | Periodendauer Luftmasse | µs | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5AB3 | Fahrstrecke mit MIL an | km | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5AB4 | Betriebsstundenzähler | h | - | unsigned long | - | 2,7777778086601757E-5 | 1 | 0,0 |
| 0x5AB6 | Rohwert Ansauglufttemperatur 1 | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5AB7 | Rohwert Kühlwassertemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5AB8 | Spannung Saugrohrdruck | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5AB9 | Spannung Sportschalter | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5ABA | Kraftstoffpumpe PWM | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5ABC | Luftmasse | kg/h | - | unsigned integer | - | 0,03125 | 1 | 0,0 |
| 0x5ABD | Starterrelais aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5AC2 | Reset Adresse | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5AC3 | Schalthäufigkeitszähler Drosselklappe Enteisungsfunktion | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5AC4 | Minimale Pumpengeschwindigkeit der elektrischen Kraftsoffpumpe | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AC5 | Aditiver I-Anteil des EKP-Controllers | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5AC6 | Sensorspannung AGR | V | - | unsigned integer | - | 0,004882697947323322 | 1 | 0,0 |
| 0x5AC7 | Hub des AGR-Tellerventils | % | - | unsigned integer | - | 0,0244140625 | 1 | 0,0 |
| 0x5AC8 | Adaptionswert oberer Anschlag (einmalig gelernt) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5AC9 | Adaptionswert unterer Anschlag (immer wieder neu gelernt) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5ACA | Adaptionswert unterer Anschlag (einmalig am Anfang gelernt, Uradaption) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5ACB | Status des Erlernens der AGR-Adaption | 0-n | - | 0xFF | _CNV_S_6_ACRC_RANGE_906 | 1 | 1 | 0 |
| 0x5ACC | DME-Temperaturstatistik, Zähler 1 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5ACD | DME-Temperaturstatistik, Zähler 2 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5ACE | DME-Temperaturstatistik, Zähler 3 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5ACF | DME-Temperaturstatistik, Zähler 4 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5AD0 | DME-Temperaturstatistik, Zähler 5 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5AD1 | DME-Temperaturstatistik, Zähler 6 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5AD2 | DME-Temperaturstatistik, Zähler 7 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5AD3 | DME-Temperaturstatistik, Zähler 8 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5AD6 | Schubabschaltung | ppm | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x5AD7 | Beladungsbetrieb NOx-Katalysator | ppm | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x5AD8 | NOx-Konzentration | ppm | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x5AD9 | Lineares Lambdasignal NOx-Sensor | - | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| 0x5ADA | binäres Spannungssignal NOx-Sensor | mV | - | unsigned integer | - | 1,0 | 1 | -200,0 |
| 0x5ADB | Status NOx-Sensor | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5ADC | Fehler NOx-Sensor | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5ADF | Taupunkterkennung für NOx-Sensor | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5AE0 | Status-Byte für sicherheitsrelevante Informationen bezüglich atypischem Reset | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AE2 | Resetart des letzten Resets | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AE3 | Hintegrundinformationen zum letzten gültigen Reset | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AE4 | Zusätzliche Resetinformationen zur Resetursache | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5AE5 | Fahrstrecke bei Reset | m | - | unsigned long | - | 100,0 | 1 | 0,0 |
| 0x5AE6 | Betriebsstundenzähler bei Reset | h | - | unsigned long | - | 2,7777778086601757E-5 | 1 | 0,0 |
| 0x5AE7 | Maximale CPU-Last bei Reseterkennung | % | - | unsigned integer | - | 0,09765625 | 1 | 0,0 |
| 0x5AE8 | Geschwindigkeit bei maximaler CPU-Last bei Reseterkennung | rpm | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5AE9 | Sicherheitsinformationen | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AEA | Anzahl von atypischen Warm-Resets seit letzter Power-Up-Phase (BSW) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AEB | Kühlmitteltemperatur < 98°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AEC | 98°C =< Kühlmitteltemperatur =< 112°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AED | 113°C =< Kühlmitteltemperatur =< 120°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AEE | 121°C =< Kühlmitteltemperatur =< 125°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AEF | Kühlmitteltemperatur > 125°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF0 | Motoröltemperatur < 80°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF1 | 80°C =< Motoröltemperatur =< 110°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF2 | 110°C =< Motoröltemperatur =< 135°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF3 | 135°C =< Motoröltemperatur =< 150°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF4 | Motoröltemperatur > 150°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF5 | Getriebeöltemperatur < 80°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF6 | 80°C =< Getriebeöltemperatur =< 109°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF7 | 110°C =< Getriebeöltemperatur =< 124°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF8 | 125°C =< Getriebeöltemperatur =< 129°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF9 | Getriebeöltemperatur > 129°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AFA | Umgebungstemperatur < 3°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AFB | 3°C =< Umgebungstemperatur =< 19°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AFC | 20°C =< Umgebungstemperatur =< 29°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AFD | 30°C =< Umgebungstemperatur =< 39°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AFE | Umgebungstemperatur > 39°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5B00 | Einspritzzeit Zylinder 1 von der Endstufe rückgemessen  | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5B01 | Einspritzzeit Zylinder 2 von der Endstufe rückgemessen  | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5B02 | Einspritzzeit Zylinder 3 von der Endstufe rückgemessen  | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5B03 | Einspritzzeit Zylinder 4 von der Endstufe rückgemessen  | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5B04 | Einspritzzeit Zylinder 5 von der Endstufe rückgemessen  | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5B05 | Einspritzzeit Zylinder 6 von der Endstufe rückgemessen  | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5B10 | Tastverhältnis Injektor 1 an Endstufe  | % | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x5B11 | Tastverhältnis Injektor 2 an Endstufe  | % | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x5B12 | Tastverhältnis Injektor 3 an Endstufe  | % | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x5B13 | Tastverhältnis Injektor 4 an Endstufe  | % | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x5B14 | Tastverhältnis Injektor 5 an Endstufe  | % | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x5B15 | Tastverhältnis Injektor 6 an Endstufe  | % | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x5B20 | Elektrische Ladung Injektor 1 | uAs | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| 0x5B21 | Elektrische Ladung Injektor 2 | uAs | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| 0x5B22 | Elektrische Ladung Injektor 3 | uAs | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| 0x5B23 | Elektrische Ladung Injektor 4 | uAs | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| 0x5B24 | Elektrische Ladung Injektor 5 | uAs | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| 0x5B25 | Elektrische Ladung Injektor 6 | uAs | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| 0x5B30 | Spannung Injektor 1 | V | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| 0x5B31 | Spannung Injektor 2 | V | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| 0x5B32 | Spannung Injektor 3 | V | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| 0x5B33 | Spannung Injektor 4 | V | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| 0x5B34 | Spannung Injektor 5 | V | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| 0x5B35 | Spannung Injektor 6 | V | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| 0x5B40 | Adaptionswert der Enstufe Injektor 1 | %/mJ | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5B41 | Adaptionswert der Enstufe Injektor 2 | %/mJ | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5B42 | Adaptionswert der Enstufe Injektor 3 | %/mJ | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5B43 | Adaptionswert der Enstufe Injektor 4 | %/mJ | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5B44 | Adaptionswert der Enstufe Injektor 5 | %/mJ | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5B45 | Adaptionswert der Enstufe Injektor 6 | %/mJ | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5B50 | Momentan eingerechnete CILC-Werte Injektor 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5B51 | Momentan eingerechnete CILC-Werte Injektor 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5B52 | Momentan eingerechnete CILC-Werte Injektor 3 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5B53 | Momentan eingerechnete CILC-Werte Injektor 4 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5B54 | Momentan eingerechnete CILC-Werte Injektor 5 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5B55 | Momentan eingerechnete CILC-Werte Injektor 6 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5B60 | CILC-Adaption kalt Injektor 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5B61 | CILC-Adaption kalt Injektor 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5B62 | CILC-Adaption kalt Injektor 3 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5B63 | CILC-Adaption kalt Injektor 4 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5B64 | CILC-Adaption kalt Injektor 5 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5B65 | CILC-Adaption kalt Injektor 6 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5B70 | ER-Adaption MFF-additiv im LL Schicht für Injektor 1 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x5B71 | ER-Adaption MFF-additiv im LL Schicht für Injektor 2 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x5B72 | ER-Adaption MFF-additiv im LL Schicht für Injektor 3 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x5B73 | ER-Adaption MFF-additiv im LL Schicht für Injektor 4 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x5B74 | ER-Adaption MFF-additiv im LL Schicht für Injektor 5 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x5B75 | ER-Adaption MFF-additiv im LL Schicht für Injektor 6 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x5B80 | ER-MFF-aditiv im LL-Schicht (momentan eingerechte Werte) Injektor 1 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x5B81 | ER-MFF-aditiv im LL-Schicht (momentan eingerechte Werte) Injektor 2 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x5B82 | ER-MFF-aditiv im LL-Schicht (momentan eingerechte Werte) Injektor 3 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x5B83 | ER-MFF-aditiv im LL-Schicht (momentan eingerechte Werte) Injektor 4 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x5B84 | ER-MFF-aditiv im LL-Schicht (momentan eingerechte Werte) Injektor 5 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x5B85 | ER-MFF-aditiv im LL-Schicht (momentan eingerechte Werte) Injektor 6 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x5B90 | ER-Adaptionsfaktor in Schicht Teillast für Injektor 1 | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5B91 | ER-Adaptionsfaktor in Schicht Teillast für Injektor 2 | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5B92 | ER-Adaptionsfaktor in Schicht Teillast für Injektor 3 | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5B93 | ER-Adaptionsfaktor in Schicht Teillast für Injektor 4 | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5B94 | ER-Adaptionsfaktor in Schicht Teillast für Injektor 5 | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5B95 | ER-Adaptionsfaktor in Schicht Teillast für Injektor 6 | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5BA0 | ER-Faktor in Schicht Teillast momentan eingerechnet für Injektor 1 | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5BA1 | ER-Faktor in Schicht Teillast momentan eingerechnet für Injektor 2 | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5BA2 | ER-Faktor in Schicht Teillast momentan eingerechnet für Injektor 3 | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5BA3 | ER-Faktor in Schicht Teillast momentan eingerechnet für Injektor 4 | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5BA4 | ER-Faktor in Schicht Teillast momentan eingerechnet für Injektor 5 | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5BA5 | ER-Faktor in Schicht Teillast momentan eingerechnet für Injektor 6 | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5BB0 | Lambdaadaption am Bandende hat fertig gelernt  | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5BB1 | ER-Balancing am Bandende hat additiv adaptiert  | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5BB2 | Lambdaadaption ist nötig, zyklisch während Motorbetrieb zu 1 gesetzt  | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5BB3 | ER-Balancing am Bandende hat den Faktor adaptiert  | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5BB4 | Zylindersel. Lambdaregelung fordert homogen an, zyklisch während dem Motorbetrieb zu 1 gesetzt  | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5BB5 | Zylindersel. Lambdaregelung kalt am Bandende hat fertig adaptiert  | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5BB6 | Zylindersel. Lambdaregelung warm am Bandende hat fertig adaptiert  | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5BB7 | Zylindersel. Lambdaregelung warm ist nötig, zyklisch während Motorbetrieb zu 1 gesetzt  | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5BB8 | Zylindersel. Lambdaregelung fordert öffnen WG an, zyklisch während dem Motorbetrieb zu 1 gesetzt  | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5BB9 | Zylindersel. Lambdaregelung fordert öffnen WG2 an, zyklisch während dem Motorbetrieb zu 1 gesetzt  | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5BBA | Relative Zeit Homogen-Betrieb gesamter Motorlauf | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5BBB | Relative Zeit Homogen-Schicht-Betrieb gesamter Motorlauf | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5BBC | Relative Zeit Schicht-Betrieb gesamter Motorlauf | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5BBD | Relative Zeit Homogen-Betrieb gesamter Motorlauf | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
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
| 0x5BE0 | CILC-Adaptionswert warm High-Range Injektor 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BE1 | CILC-Adaptionswert warm High-Range Injektor 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BE2 | CILC-Adaptionswert warm High-Range Injektor 3 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BE3 | CILC-Adaptionswert warm High-Range Injektor 4 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BE4 | CILC-Adaptionswert warm High-Range Injektor 5 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BE5 | CILC-Adaptionswert warm High-Range Injektor 6 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BF0 | CILC-Adaptionswert warm Low-Range Injektor 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BF1 | CILC-Adaptionswert warm Low-Range Injektor 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BF2 | CILC-Adaptionswert warm Low-Range Injektor 3 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BF3 | CILC-Adaptionswert warm Low-Range Injektor 4 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BF4 | CILC-Adaptionswert warm Low-Range Injektor 5 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BF5 | CILC-Adaptionswert warm Low-Range Injektor 6 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0xXYXY | UWB_UNKNOWN | - | - | - | - | - | - | - |

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

### IARTTEXTEINDIVIDUELL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x0000 | kein passendes Fehlersymptom |
| 0x1000 | mit Kraftstoffabschaltung |
| 0x1001 | Abgasschädigend nach Startvorgang |
| 0x1002 | Abgasschädigend |
| 0x1003 | Verbrennungsaussetzer an mehreren Zylindern |
| 0x1004 |  Tankfüllstand zu gering |
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
| 0x101A | Leckage grösser 1,0 mm |
| 0x101B | Leckage grösser 0,5 mm |
| 0x101C | obere Schwelle Pumpenstrom bei Referenzmessung |
| 0x101D | Pumpenstromschwelle bei Ventilprüfung erreicht |
| 0x101E | Abbruch wegen Stromschwankungen bei Feinleckprüfung |
| 0x101F | untere Schwelle Pumpenstrom bei Referenzmessung |
| 0x1020 | kurzschluss nach Plus |
| 0x1021 | Funktionstest |
| 0x1022 | Funktionstest Bandende |
| 0x1023 | nicht korrekt geschlossen |
| 0x1024 | Füllstandssignalwert zum Verbrauchswert unplausibel |
| 0x102B | unterer Anschlag nicht gelernt |
| 0x102E | Relais-Fehler |
| 0x102F | Kurzschluss der Motorleitungen |
| 0x1031 | Unterspannung |
| 0x1032 | Überspannung |
| 0x1033 | Übertemperatur Endstufe |
| 0x1034 | Überlast Strom |
| 0x103B | Überstrom zu lange |
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
| 0x1051 | DISA 1: Schalter defekt |
| 0x1052 | DISA 2: Schalter defekt |
| 0x1053 | Eigendiagnose / Mechanischer- oder Hardwaredefekt |
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
| 0x105E | RAM-Überprüfung |
| 0x105F | Timeout SPI Bus |
| 0x1060 | Kurzschluss nach Plus oder Leitungsunterbrechung |
| 0x1061 | nicht angezogen  |
| 0x1062 | nicht abgefallen |
| 0x1063 | schaltet zu spät |
| 0x1064 | Fehlerverwaltung Getriebe |
| 0x1065 | Plausibilität |
| 0x1067 | Temperatur unplausibel |
| 0x1068 | vertauschte Lambdasonden vor Katalysator |
| 0x1069 | Signal während Schubabschaltung unterhalb Schwelle |
| 0x106A | Abgas nach Katalysator zu mager |
| 0x106B | Abgas nach Katalysator zu fett |
| 0x106C | Signalamplitude zu gering |
| 0x106D | Sonde nicht angesteckt |
| 0x106E | Unterbrechung Abgleichsleitung |
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
| 0x107B | klemmt kurzzeitig |
| 0x107C | klemmt dauerhaft |
| 0x107D | schwergängig zu langsam |
| 0x107E | Ansteuerung fehlerhaft |
| 0x107F | Poti 1 unplausibel zu MAF |
| 0x1080 | Poti 2 unplausibel zu MAF |
| 0x1081 | Kurzschluss nach Minus oder Leitungsunterbrechung |
| 0x1082 | unteren Anschlag lernen während Urinitialisierung abgebrochen |
| 0x1083 | Randbedingungen verletzt |
| 0x1084 | Federtest und Notluftprüfung verfehlt  |
| 0x1085 | Notluftpunkt nicht adaptiert |
| 0x1086 | Notluftprüfung |
| 0x1087 | Federtest |
| 0x1088 | Neuadaption erforderlich |
| 0x1089 | Messwert HFM zu hoch |
| 0x108A | Messwert HFM zu niedrig |
| 0x108B | Plausibilitaet zwischen Poti 1 und 2 verletzt |
| 0x108C | Luftzufuhr nicht korrekt |
| 0x108D | elektrischer Fehler |
| 0x108F | Meßbereichsproblem |
| 0x1090 | Signal oberhalb Schwelle |
| 0x1091 | elektrisch |
| 0x1092 | Spannungsregler 1 |
| 0x1093 | Spannungsregler 2 |
| 0x1094 | Doppelfehler |
| 0x1095 | Gleichlauffehler |
| 0x1096 | IST Wert zu niedrig |
| 0x1097 | IST Wert zu hoch |
| 0x1098 | Offset Maximum überschritten |
| 0x1099 | LDM Überwachung |
| 0x109A | ACC Überwachung |
| 0x109B | DCC Überwachung |
| 0x109D | Anforderung PD-Anteil unplausibel |
| 0x109E | Anforderung I-Anteil unplausibel |
| 0x109F | Anforderung EGS unplausibel |
| 0x10A0 | Anforderung AMT unplausibel |
| 0x10A1 | Anforderung MSR unplausibel |
| 0x10A2 | Sporttastersignal unplausibel |
| 0x10A3 | minimales Kupplungsmoment unplausibel |
| 0x10A4 | Verlustmoment unplausibel |
| 0x10A5 | maximales Kupplungsmoment unplausibel |
| 0x10A6 | SPI-Fehler |
| 0x10A7 | Sicherheitsabschaltung |
| 0x10A8 | Software |
| 0x10A9 | Hardware |
| 0x10AA | Hauptrechnerüberwachung; Befehlssatztestfehler |
| 0x10AB | Rechnerüberwachung, allgemeiner Sammelfehler |
| 0x10AC | RAM-Fehler |
| 0x10AD | ROM-Fehler |
| 0x10AE | Schalter defekt |
| 0x10AF | Toggle-Bit |
| 0x10B0 | reversibel aus |
| 0x10B1 | irreversibel aus |
| 0x10B2 | Momentenanforderung unplausibel |
| 0x10B3 | Momentenanforderung trotzt Bremssignal |
| 0x10B4 | CAS-Fehler |
| 0x10B5 | kein Signal |
| 0x10B6 | Prüfsumme |
| 0x10B7 | ALIVE-Fehler |
| 0x10B8 | Checksumme |
| 0x10B9 | Timeout |
| 0x10BA | CAN Wert unplausibel |
| 0x10BB | batterieloser Betrieb |
| 0x10BC | Powermanagement |
| 0x10BD | Tiefentladung |
| 0x10BE | Ruhestromverletzung |
| 0x10C6 | Motor mechanisch zu leise |
| 0x10C7 | Motor mechanisch zu laut  |
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
| 0x10DB | Startphase |
| 0x10DD | mechanisch |
| 0x10DE | Permittivitätsmessung |
| 0x10DF | Temperaturmessung |
| 0x10E0 | Niveaumessung  |
| 0x10E4 | elektrisch berechnet |
| 0x10E5 | Übertemperatur berechnet |
| 0x10E6 | Reglertyp nicht plausibel |
| 0x10E7 | Generatortyp nicht plausibel |
| 0x10E8 | unplausibel bezüglich Lambdaregelung |
| 0x10E9 | Temperatursignal konstant |
| 0x10EA | Temperaturgradient zu steil |
| 0x10EB | Signal festliegend hoch |
| 0x10EC | Temperaturgradient zu hoch |
| 0x10ED | Mechanischer- oder Hardwaredefekt |
| 0x10EE | Signal unterhalb Schwelle |
| 0x10EF | mechanischer- oder Hardwaredefekt |
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
| 0x10FB | Timeout (Ungültigkeitswert vom Kombi) |
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
| 0x1106 | Kurzschluss nach Plus oder 5V-Spannungsversorgung |
| 0x1107 | Magnetventil hängt in voll bestromter Stellung |
| 0x1108 | Magnetventil hängt in unbestromter Stellung |
| 0x1109 | oberer Öldruck außerhalb gültigem Bereich |
| 0x110A | unterer Öldruck außerhalb gültigem Bereich |
| 0x110B | Druck zu hoch vor Start |
| 0x110C | Druck zu niedrig vor Start |
| 0x110D | Sensorwert ändert sich nicht |
| 0x110E | Regelung instabil |
| 0x110F | CAN Bus off |
| 0x1110 | Timeout  |
| 0x1111 | Prüfsumme ungleich errechnetem Wert |
| 0x1112 | Aktualisierungszähler inkrementiert nicht (Alive-Zähler) |
| 0x1118 | Fehlfunktion |
| 0x112F | Drehrichtungserkennung |
| 0x1172 | Heiztakteinkopplung auf Signal |
| 0x117A | Kurzschluss |
| 0x11BD | Keine Kommunikation über BSD-Schnittstelle |
| 0x11C2 | unplausibel |
| 0x11F8 | Kurzschluss nach Masse |
| 0x124B | Aliveprüfung |
| 0x1276 | Druck zu niedrig im Hochdruck-System |
| 0x1277 | Druck zu niedrig im Niederdruck-System |
| 0x1278 | Gemisch im Leerlauf zu mager |
| 0x1279 | Gemisch im Leerlauf zu fett |
| 0x127A | Gemisch in volllast zu mager |
| 0x127B | Gemisch in volllast zu fett |
| 0x127C | Integralteil vom Regler außerhalb gültigem Bereich |
| 0x127D | Adaptive Kraftstoffmasse außerhalb gültigem Bereich |
| 0x127E | Berechnung adaptive Kraftstoffmasse ungültig |
| 0x127F | Unterer Schwellwert des Raildruckes unterschritten |
| 0x1280 | Oberer Schwellwert 2 des Raildruckes überschritten |
| 0x1281 | Oberer Schwellwert 1 des Raildruckes überschritten |
| 0x1282 | Kurzschluss nach Minus oder Leitungsnterbrechung |
| 0x1283 | Endstufe |
| 0x1284 | Regler Ausgangposition außerhalb gültigem Bereich |
| 0x1285 | Regelabweichung außerhalb gültigem Bereich |
| 0x1286 | oberer Adaptionswert außerhalb gültigem Bereich |
| 0x1287 | unterer Adaptionswert außerhalb gültigem Bereich |
| 0x1288 | obere Position nicht erreicht |
| 0x1289 | Adaptionsbedingungen nicht erfüllt |
| 0x128A | Gemisch zu fett (große Abweichung) |
| 0x128B | Gemisch zu mager (große Abweichung) |
| 0x128C | untere Schwelle1 erreicht |
| 0x128D | obere Schwelle2 erreicht |
| 0x128E | obere Schwelle1 erreicht |
| 0x128F | Adaptiertes minimales EFPPWM außerhalb gültigem Bereich |
| 0x1290 | Adaptives Integralteil von EFPWM außerhalb gültigem Bereich |
| 0x1291 | Integralteil von EFPPWM außerhalb gültigem Bereich |
| 0x1292 | Signal außerhalb gültigem Bereich |
| 0x1293 | Spannung zwischen Poti 1 und 2 unplausibel |
| 0x1294 | Umschaltung nach Homogen wegen Motormoment |
| 0x1295 | Umschaltung nach Homogen wegen Kraftstoffmassenstrom |
| 0x1296 | Kurzschluss Hochspannungsseite nach Niederspannungsseite |
| 0x1297 | Leitungsunterbrechung bei aufgeladenem Injektor |
| 0x1298 | Mengen Steuerventil Min-Kennlinie Adaption außerhalb Gültigkeitsbereich |
| 0x1299 | Mengen Steuerventil Basis-Kennlinie Adaption außerhalb Gültigkeitsbereich |
| 0x129A | Druck zu hoch |
| 0x129B | Druck zu niedrig |
| 0x129C | Unterer Schwellwert unterschritten |
| 0x129D | Oberer Schwellwert 2 überschritten |
| 0x129E | Oberer Schwellwert 1 überschritten |
| 0x129F | Maximale Diagnosegrenze erreicht |
| 0x12A0 | Minimale Diagnosegrenze erreicht |
| 0x12A1 | Zylinder selektive Lambdaregelung - obere Grenze erreicht |
| 0x12A2 | Zylinder selektive Lambdaregelung - untere Grenze erreicht |
| 0x12A3 | Kurzschluss Niederspannungsseite nach Minus |
| 0x12A4 | Kurzschluss Hochspannungsseite nach Minus |
| 0x12A5 | Kurzschluss Hochspannungsseite nach Plus |
| 0x12A6 | Kurzschluss Niederspannungsseite nach Plus |
| 0x12A7 | Entladungsfehler |
| 0x12A8 | Verbindungsfehler |
| 0x12A9 | Regelkreisschwingung |
| 0x12AA | Umschaltung in Notlauf-Betrieb, da Motoröldruck im Kennfeld-Betrieb zu niedrig |
| 0x12AB | Umschaltung in Notlauf-Betrieb, da Motoröldruck im Kennfeld-Betrieb zu hoch |
| 0x12AC | Kurzschluss nach minus |
| 0x12AD | Signalaktivität zu gering |
| 0x12AE | Nox-Signal zu niedrig |
| 0x12AF | Binäres Lambdasignal zu mager |
| 0x12B0 | Lineares Lambdasignal zu mager |
| 0x12B1 | Signal nicht Verfügbar im Betrieb |
| 0x12B2 | Signal nicht Verfügbar im Start |
| 0x12B3 | Versorgungsspannung |
| 0x12B4 | Heizleistung zu niedrig im Betrieb |
| 0x12B5 | Heizleistung zu niedrig im Start |
| 0x12B6 | Signal nicht plausibel |
| 0x12B7 | Offset-Fehler |
| 0x12B8 | Nox-Signal zu hoch |
| 0x12B9 | Lineares Lambdasignal zu fett |
| 0x12BA | Binäres Lambdasignal zu fett |
| 0x12BB | Zeitgesteuerter Regenerationsabbruch |
| 0x12BC | Regenerationsüberwachung |
| 0x12BD | Binäre Dynamik zu niedrig |
| 0x12BE | Niedrige Speicherkapazität |
| 0x12BF | Ladedruck zu niedrig |
| 0x12C0 | Ladedruck zu hoch |
| 0x12C4 | Klemmt in Schließrichtung |
| 0x12C5 | Klemmt in Öffnungsrichtung |
| 0x12CC | Integrierte Momentenreserve nicht erreicht |
| 0x12CD | Sondensignal zu träge nach Schubphase |
| 0x12CE | Gradient zu hoch |
| 0x12D2 | Maximale Zeit für Offsetabgleich überschritten |
| 0x12D3 | Offsetabgleich im hohen Verstärkungsbereich |
| 0x12D4 | Offsetabgleich im niedrigen Verstärkungsbereich |
| 0x12D5 | Strom zu hoch |
| 0x12D6 | Strom zu niedrig |
| 0x12D7 | Referenzpumpstrom abgeschaltet wegen Überstrom an Nernstleitung |
| 0x12D8 | Bänke ungleich |
| 0x12D9 | Ladedruckaufbau verboten |
| 0x12E4 | Sollwert überschritten |
| 0x12E5 | Sollwert wird nicht erreicht |
| 0x12E6 | überdrehzahl |
| 0x12E7 | Einspritzung wird verboten |
| 0x12E8 | Instrumentenkombination defekt |
| 0x12E9 | Brenndauer zu kurz |
| 0x1305 | Abweichung zwischen Verbrauch und Füllstandsänderung |
| 0x132A | Innenwiderstand zu hoch |
| 0x133D | Unterbrechung Abgleichleitung |
| 0x1340 | Sammelfehler |
| 0x1345 | Summenfehler |
| 0x137D | Zeitüberschreitung |
| 0x13CD | Gradient unplausibel |
| 0x13CE | Schwefelbelastung zu hoch |
| 0x1428 | unplausible Energie |
| 0x1429 | unplausible kleinmenge |
| 0x142C | additive Mengensteuerventil Kennlinien-Adaption außerhalb Gültigkeitsbereich  |
| 0x142D | Mengensteuerventil Druckkennlinien-Adaption außerhalb Gültigkeitsbereich  |
| 0x142E | multiplikative Mengensteuerventil Kennlinien-Adaption außerhalb Gültigkeitsbereich  |
| 0x1431 | Tuningschutz - maximal möglicher Luft/Kraftstoffdurchsatz überschritten |
| 0x1432 | Betriebsart unplausibel zu Lambda |
| 0x1468 | Druck unplausibel |
| 0x148C | langfristige Adaption zu hoch |
| 0x14AF | Geschwindigkeitssignal unplausibel |
| 0x14C6 | Erhöhte Laufunruhe im Schichtbetrieb |
| 0x14C7 | Erhöhte Laufunruhe im Schichtbetrieb im Motorwarmlauf  |
| 0x14D1 | Betriebstemperatur nicht erreicht |
| 0x14E2 | Signal im Nachlauf unplausibel |
| 0x153A | DC/DC Wandlerspannung ist niedrig |
| 0x153B | Grenzwert überschritten |
| 0x153C | Grenzwert unterschritten |
| 0x153D | falsch |
| 0x153E | Leerlaufdrehzahl zu lange zu hoch |
| 0x1542 | Grenzwert 1 überschritten |
| 0x1543 | Grenzwert 2 überschritten |
| 0x1559 | nicht angezogen |
| 0x155A | Gradient zu hoch oder Sprung |
| 0x155B | Offset zu hoch |
| 0x155C | Pumpe blockiert |
| 0x1561 | Typ unplausibel |
| 0x1562 |   |
| 0x1570 | Maximaldruck überschritten |
| 0x158A | Einspritzung wird abgeschaltet |
| 0x15A2 | Kurzschluss nach Masse oder Leitungsunterbrechung |
| 0x15A3 | Abbruch wegen Stromschwankungen bei Referenzmessung |
| 0x15A6 | Förderleistung außerhalb Grenzwert wegen Alterung |
| 0x15B2 | Kurzschluss nach plus |
| 0x15B5 | Federtest und Notluftprüfung verfehlt |
| 0x15B6 | Niveaumessung |
| 0x15B7 | Erhöhte Laufunruhe im Schichtbetrieb im Motorwarmlauf |
| 0x15BA | Bank1 fehlt |
| 0x15BB | Bank2 fehlt |
| 0x15BC | multiplikative Mengensteuerventil Kennlinien-Adaption außerhalb Gültigkeitsbereich |
| 0x15BD | Mengensteuerventil Druckkennlinien-Adaption außerhalb Gültigkeitsbereich |
| 0x15BE | additive Mengensteuerventil Kennlinien-Adaption außerhalb Gültigkeitsbereich |
| 0x15BF | Leckage größer 1,0 mm |
| 0x15C0 | zu niedrig |
| 0x15C1 | Druckschwankungen |
| 0x15CB | Zeit zu kurz in Korrelation zu Motorkühlmittel-Abkühlung |
| 0x15CC | Zeit zu lang in Korrelation zu Motorkühlmittel-Abkühlung |
| 0x15CD | Signal nach Nachlauf unplausibel |
| 0x15CE | Signal im Motorlauf unplausibel |
| 0x15D0 | nicht regelbar |
| 0x15D4 | Zündwinkel zu früh |
| 0x15DA | fehlt |
| 0x15E7 | berechnet |
| 0x15E8 | Typ falsch |
| 0x15F6 | Freischaltung nicht erfolgt |
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
| 0x1610 | Federtest und Prüfung Notluftposition nicht durchgeführt |
| 0x1611 | Erstadaption, unterer Anschlag nicht gelernt |
| 0x1612 | Prüfung Notluftposition |
| 0x1613 | fehlen, Neuadaption erforderlich |
| 0x1614 | unterer Anschlag nicht adaptiert |
| 0x1615 | Gleichlauffehler zwischen Poti 1 und Poti 2 |
| 0x1616 | Signal unplausibel  |
| 0x161A | außerhalb der Toleranz |
| 0x161B | Überspannung erkannt |
| 0x161C | Trockenlauf erkannt |
| 0x161D | Unterspannung erkannt |
| 0x1620 | keine Spannung |
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
| 0x1641 | Signaländerung zu schnell |
| 0x1642 | festliegend |
| 0x1646 | Temperatur zu hoch |
| 0x1647 | Messung im Steuergerät fehlgeschlagen |
| 0x1648 | Luftmasse zu niedrig |
| 0x1649 | Luftmasse zu Kraftstoffmasse unplausibel |
| 0x1673 | Gemisch zu fett, große Abweichung |
| 0x1674 | Gemisch zu mager, große Abweichung |
| 0x1675 | Periodendauer zu niedrig, Luftmasse zu niedrig |
| 0x1676 | klemmt in voll bestromter Stellung (minimaler Öldruck) |
| 0x1677 | klemmt in unbestromter Stellung (maximaler Öldruck) |
| 0x1678 | Plausibilität, Druck vor Motorstart zu hoch |
| 0x1679 | Plausibilität, Druck vor Motorstart zu niedrig |
| 0x167A | Druckaufbau gesperrt |
| 0x167B | Signal, elektrischer Fehler |
| 0x167C | Arbeitsbereich, Periodendauer zu groß, Luftmasse zu hoch |
| 0x167D | Gemisch im Teillast zu mager |
| 0x167E | Gemisch im Teillast zu fett |
| 0x167F | Druck zu niedrig im Hochdrucksystem |
| 0x1680 | Druck zu niedrig im Niederdrucksystem |
| 0x16C7 | Förderleistung zu niedrig wegen Alterung |
| 0x16C8 | Förderleistung außerhalb gültigem Bereich |
| 0x16C9 | Pumpenstrom zu groß bei Referenzmessung |
| 0x16CA | Pumpenstrom zu klein bei Referenzmessung |
| 0x16CB | Pumpenstrom bei Ventilprüfung erreicht Grenzwert |
| 0x16D0 | Kommunikation mit Kühlmittelpumpe fehlerhaft |
| 0x16D3 | Drehzahl Kühlmittelpumpe außerhalb der Toleranz |
| 0x16D4 | Abschaltung Kühlmittelpumpe wegen Überspannung |
| 0x16D5 | Abschaltung Kühlmittelpumpe wegen Blockierung |
| 0x16D6 | Abschaltung Kühlmittelpumpe wegen Übertemperatur |
| 0x16D7 | Kühlmittelverlust durch Kühlmittelpumpe erkannt |
| 0x16D8 | Versorgungsspannung Kühlmittelpumpe zu niedrig |
| 0x16D9 | Kühlmittelpumpe Temperaturschwelle 1 überschritten |
| 0x16DA | Kühlmittelpumpe Temperaturschwelle 2 überschritten |
| 0x16DB | kein Notlaufsignal an Kühlmittelpumpe |
| 0x16EB | Geschwindigkeit zu niedrig bei niedrigem Lastzustand |
| 0x16EC | Geschwindigkeit zu hoch |
| 0x16ED | festliegend auf Null |
| 0x16EE | Geschwindigkeit unplausibel oder CAN-Bus Kommunikation gestört |
| 0x16F0 | Anzahl Einspritzungen unplausibel |
| 0x16F2 | Einspritzabschaltung |
| 0x16F8 | instabil |
| 0x16F9 | Position nicht erreicht |
| 0x16FA | Druckanstieg zu schnell |
| 0x16FB | Druckabfall zu schnell |
| 0x16FD | Drehzahl unplausibel |
| 0x16FE | Betriebsart zu Lambdawert unplausibel |
| 0x1700 | Arbeitsbereich, Spannung zu hoch |
| 0x1701 | Arbeitsbereich, Spannung zu niedrig |
| 0x1703 | Fehlfunktion Bandende |
| 0x1704 | Regelfehler, Position nicht erreicht |
| 0x1705 | Zähnezahl falsch |
| 0x1706 | Zahnzeit unplausibel |
| 0x1707 | Winkelunterschied außerhalb Grenzwert |
| 0x1708 | Nockenwellensignal außerhalb Grenzwert |
| 0x1709 | Segmentzeitfehler |
| 0x170A | DISA 1 Schalter defekt |
| 0x170B | DISA 2 Schalter defekt |
| 0x170C | mechanischer Fehler oder Stellmotor defekt |
| 0x170D | RAM-Baustein |
| 0x170E | SPI-Kommunikation gestört |
| 0x1712 | nicht erfüllbar |
| 0x1713 | Plausibilität, CAN Wert unplausibel |
| 0x1714 | Motorgeräusch unter Grenzwert |
| 0x1715 | Motorgeräusch über Grenzwert |
| 0x1716 | fehlen |
| 0x1717 | Kompabilität, Version nicht plausibel |
| 0x1718 | erweiterte Kommunikation, Fehlfunktion |
| 0x1719 | Signal, BSD-Bus-Fehler |
| 0x171A | Spannung unplausibel |
| 0x171B | Strom unplausibel |
| 0x171C | Wake-up-Leitung, elektrisch, Leitungsunterbrechung |
| 0x171D | Wake-up-Leitung, elektrisch, Kurzschluss nach Plus oder Masse |
| 0x171E | Eigendiagnose, Systemfehler |
| 0x171F | Permittivitätsfehler |
| 0x1720 | Antwort unplausible |
| 0x1721 | Prüfsummenfehler |
| 0x1722 | Leitungsunterbrechung oder Schalter klemmt |
| 0x1723 | Wert Zeitzähler Kombi unplausibel im Motorlauf/Nachlauf |
| 0x1724 | Wert Zeitzähler Kombi unplausibel im Wake-up |
| 0x1725 | Wert Zeitzähler Kombi unplausibel im Motorlauf |
| 0x1726 | Wert Zeitzähler Kombi unplausibel im Nachlauf |
| 0x1727 | Sollwert nicht erreicht |
| 0x1728 | Ausgangsposition nicht erreicht |
| 0x1729 | klemmt in Öffnungsrichtung |
| 0x172A | klemmt in Schließrichtung |
| 0x172B | langfristige Adaption unplausibel |
| 0x172C | Bankausfall oder Motorausfall |
| 0x172D | Intelligenter Batteriesensor: Wake-up-Leitung, elektrisch, Leitungsunterbrechung |
| 0x172E | Energie-Nominalwert |
| 0x172F | Kleinmengen-Nominalwert |
| 0x1731 | Gleichlauffehler zwischen Potentiometer 1 und 2 |
| 0x1735 | Falschluft erkannt |
| 0x1736 | fehlt oder Fahrgestellnummer falsch |
| 0x1737 | nicht erfolgt |
| 0x1738 | CAN-Bus Off oder CAN-Bus defekt |
| 0xFFFF | unbekannte Fehlerart |

### IARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| 0x29CC | 0x1345 | 0x162C | 0x162D | 0x158A |
| 0x29CD | 0x0000 | 0x162C | 0x162D | 0x158A |
| 0x29CE | 0x0000 | 0x162C | 0x162D | 0x158A |
| 0x29CF | 0x0000 | 0x162C | 0x162D | 0x158A |
| 0x29D0 | 0x0000 | 0x162C | 0x162D | 0x158A |
| 0x29D1 | 0x0000 | 0x162C | 0x162D | 0x158A |
| 0x29D2 | 0x0000 | 0x162C | 0x162D | 0x158A |
| 0x29D9 | 0x0000 | 0x0000 | 0x1007 | 0x0000 |
| 0x29DA | 0x0000 | 0x0000 | 0x1005 | 0x0000 |
| 0x29DB | 0x0000 | 0x0000 | 0x1006 | 0x0000 |
| 0x29DC | 0x1007 | 0x0000 | 0x1680 | 0x167F |
| 0x29E0 | 0x1009 | 0x1008 | 0x1279 | 0x1278 |
| 0x29E1 | 0x1009 | 0x1008 | 0x1279 | 0x1278 |
| 0x29E2 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x29E5 | 0x0000 | 0x0000 | 0x127A | 0x127B |
| 0x29E6 | 0x0000 | 0x0000 | 0x127A | 0x127B |
| 0x29F1 | 0x0000 | 0x127C | 0x129B | 0x129A |
| 0x29F2 | 0x0000 | 0x129B | 0x1280 | 0x129A |
| 0x29F3 | 0x0000 | 0x0000 | 0x163A | 0x163B |
| 0x29F4 | 0x0000 | 0x0000 | 0x100B | 0x162B |
| 0x29F5 | 0x0000 | 0x0000 | 0x100B | 0x162B |
| 0x29F6 | 0x0000 | 0x0000 | 0x100A | 0x100A |
| 0x29F7 | 0x0000 | 0x0000 | 0x100A | 0x100A |
| 0x2A0C | 0x0000 | 0x0000 | 0x12E5 | 0x12E4 |
| 0x2A0D | 0x0000 | 0x0000 | 0x0000 | 0x1091 |
| 0x2A0E | 0x0000 | 0x0000 | 0x1284 | 0x1285 |
| 0x2A0F | 0x1286 | 0x1288 | 0x1287 | 0x1289 |
| 0x2A10 | 0x0000 | 0x0000 | 0x1015 | 0x1060 |
| 0x2A12 | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2A13 | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2A15 | 0x0000 | 0x0000 | 0x0000 | 0x15BF |
| 0x2A16 | 0x0000 | 0x0000 | 0x101B | 0x0000 |
| 0x2A17 | 0x101D | 0x15A3 | 0x101F | 0x101C |
| 0x2A18 | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2A19 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2A1A | 0x1021 | 0x1022 | 0x0000 | 0x0000 |
| 0x2A1B | 0x0000 | 0x0000 | 0x0000 | 0x1023 |
| 0x2A1C | 0x1024 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A22 | 0x1024 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A26 | 0x0000 | 0x0000 | 0x0000 | 0x100A |
| 0x2A27 | 0x0000 | 0x0000 | 0x0000 | 0x100A |
| 0x2A29 | 0x0000 | 0x0000 | 0x0000 | 0x1636 |
| 0x2A2B | 0x0000 | 0x0000 | 0x1673 | 0x1674 |
| 0x2A2C | 0x0000 | 0x0000 | 0x1673 | 0x1674 |
| 0x2A2D | 0x0000 | 0x129B | 0x1570 | 0x129A |
| 0x2A78 | 0x16F9 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A79 | 0x16F9 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A7A | 0x15D0 | 0x0000 | 0x0000 | 0x15D0 |
| 0x2A7C | 0x15D0 | 0x0000 | 0x0000 | 0x15D0 |
| 0x2A80 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2A82 | 0x1048 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A85 | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2A87 | 0x1048 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A94 | 0x0000 | 0x0000 | 0x1018 | 0x1049 |
| 0x2A95 | 0x0000 | 0x0000 | 0x0000 | 0x104A |
| 0x2A96 | 0x0000 | 0x0000 | 0x0000 | 0x104B |
| 0x2A97 | 0x0000 | 0x0000 | 0x0000 | 0x104C |
| 0x2A98 | 0x0000 | 0x0000 | 0x0000 | 0x104D |
| 0x2A99 | 0x0000 | 0x0000 | 0x0000 | 0x104D |
| 0x2A9A | 0x0000 | 0x0000 | 0x0000 | 0x104E |
| 0x2A9B | 0x0000 | 0x0000 | 0x0000 | 0x104E |
| 0x2A9E | 0x0000 | 0x0000 | 0x0000 | 0x104A |
| 0x2A9F | 0x0000 | 0x0000 | 0x0000 | 0x104A |
| 0x2AA0 | 0x0000 | 0x0000 | 0x0000 | 0x1049 |
| 0x2AA1 | 0x0000 | 0x0000 | 0x0000 | 0x1049 |
| 0x2AA2 | 0x0000 | 0x0000 | 0x0000 | 0x104F |
| 0x2AA3 | 0x0000 | 0x0000 | 0x0000 | 0x104F |
| 0x2AA4 | 0x0000 | 0x0000 | 0x0000 | 0x1050 |
| 0x2AA5 | 0x0000 | 0x0000 | 0x0000 | 0x1050 |
| 0x2AA8 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2AA9 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2AAA | 0x0000 | 0x0000 | 0x1051 | 0x1052 |
| 0x2AAB | 0x1053 | 0x0000 | 0x0000 | 0x0000 |
| 0x2AAC | 0x1053 | 0x0000 | 0x0000 | 0x0000 |
| 0x2AAD | 0x0000 | 0x1054 | 0x0000 | 0x0000 |
| 0x2AAE | 0x1055 | 0x1058 | 0x1056 | 0x1057 |
| 0x2AAF | 0x0000 | 0x128F | 0x1290 | 0x1291 |
| 0x2AB2 | 0x0000 | 0x0000 | 0x1059 | 0x105A |
| 0x2AB3 | 0x0000 | 0x105B | 0x105C | 0x105D |
| 0x2AB4 | 0x0000 | 0x0000 | 0x0000 | 0x105E |
| 0x2AB5 | 0x0000 | 0x105F | 0x0000 | 0x0000 |
| 0x2AB6 | 0x0000 | 0x105F | 0x0000 | 0x0000 |
| 0x2ABC | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2ABD | 0x1468 | 0x0000 | 0x0000 | 0x0000 |
| 0x2AC6 | 0x0000 | 0x0000 | 0x1015 | 0x1060 |
| 0x2ACA | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2ACB | 0x0000 | 0x0000 | 0x1559 | 0x1062 |
| 0x2ACC | 0x153A | 0x0000 | 0x1063 | 0x1063 |
| 0x2AD0 | 0x1064 | 0x0000 | 0x0000 | 0x0000 |
| 0x2ADF | 0x0000 | 0x0000 | 0x1056 | 0x1057 |
| 0x2AE0 | 0x0000 | 0x0000 | 0x1056 | 0x1057 |
| 0x2AE2 | 0x16FD | 0x0000 | 0x0000 | 0x0000 |
| 0x2AE4 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2AEC | 0x0000 | 0x0000 | 0x1543 | 0x1542 |
| 0x2AED | 0x0000 | 0x0000 | 0x0000 | 0x153D |
| 0x2AF0 | 0x117A | 0x1016 | 0x0000 | 0x0000 |
| 0x2AF2 | 0x117A | 0x1016 | 0x0000 | 0x0000 |
| 0x2AF4 | 0x117A | 0x1016 | 0x0000 | 0x0000 |
| 0x2AF6 | 0x117A | 0x1016 | 0x0000 | 0x0000 |
| 0x2AFB | 0x117A | 0x1016 | 0x0000 | 0x0000 |
| 0x2AFE | 0x0000 | 0x0000 | 0x1543 | 0x1542 |
| 0x2B00 | 0x0000 | 0x0000 | 0x0000 | 0x12E6 |
| 0x2B05 | 0x117A | 0x1016 | 0x0000 | 0x0000 |
| 0x2B06 | 0x117A | 0x1016 | 0x0000 | 0x0000 |
| 0x2B07 | 0x117A | 0x1016 | 0x0000 | 0x0000 |
| 0x2B08 | 0x117A | 0x1016 | 0x0000 | 0x0000 |
| 0x2B09 | 0x117A | 0x1016 | 0x0000 | 0x0000 |
| 0x2B0A | 0x117A | 0x1016 | 0x0000 | 0x0000 |
| 0x2B0B | 0x117A | 0x1016 | 0x0000 | 0x0000 |
| 0x2B28 | 0x0000 | 0x0000 | 0x162E | 0x0000 |
| 0x2B29 | 0x101D | 0x15A3 | 0x101F | 0x101C |
| 0x2B2C | 0x0000 | 0x0000 | 0x129B | 0x129A |
| 0x2B3A | 0x0000 | 0x0000 | 0x0000 | 0x101C |
| 0x2B3B | 0x0000 | 0x0000 | 0x101F | 0x0000 |
| 0x2B3C | 0x0000 | 0x15A3 | 0x0000 | 0x0000 |
| 0x2B3D | 0x101D | 0x0000 | 0x0000 | 0x0000 |
| 0x2B48 | 0x167E | 0x167D | 0x1279 | 0x1278 |
| 0x2B49 | 0x167E | 0x167D | 0x1279 | 0x1278 |
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
| 0x2C39 | 0x0000 | 0x0000 | 0x1602 | 0x106C |
| 0x2C3A | 0x0000 | 0x0000 | 0x1602 | 0x106C |
| 0x2C3B | 0x0000 | 0x0000 | 0x0000 | 0x162F |
| 0x2C3C | 0x0000 | 0x0000 | 0x0000 | 0x162F |
| 0x2C3D | 0x133D | 0x1609 | 0x1609 | 0x106F |
| 0x2C3E | 0x133D | 0x1609 | 0x1609 | 0x106F |
| 0x2C3F | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2C40 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2C41 | 0x0000 | 0x0000 | 0x1071 | 0x1072 |
| 0x2C42 | 0x0000 | 0x0000 | 0x1071 | 0x1072 |
| 0x2C6A | 0x1605 | 0x0000 | 0x0000 | 0x0000 |
| 0x2C6B | 0x0000 | 0x0000 | 0x1606 | 0x1607 |
| 0x2C6C | 0x0000 | 0x0000 | 0x1606 | 0x1607 |
| 0x2C6D | 0x1602 | 0x1602 | 0x0000 | 0x0000 |
| 0x2C6E | 0x1602 | 0x1602 | 0x0000 | 0x0000 |
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
| 0x2C87 | 0x0000 | 0x0000 | 0x1015 | 0x1060 |
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
| 0x2CB2 | 0x0000 | 0x0000 | 0x0000 | 0x160A |
| 0x2CB3 | 0x0000 | 0x0000 | 0x0000 | 0x160A |
| 0x2CB4 | 0x0000 | 0x0000 | 0x0000 | 0x160A |
| 0x2CB5 | 0x0000 | 0x0000 | 0x0000 | 0x160A |
| 0x2CB6 | 0x0000 | 0x0000 | 0x0000 | 0x1606 |
| 0x2CB7 | 0x0000 | 0x0000 | 0x0000 | 0x1606 |
| 0x2CB8 | 0x0000 | 0x0000 | 0x0000 | 0x1607 |
| 0x2CB9 | 0x0000 | 0x0000 | 0x0000 | 0x1607 |
| 0x2CEC | 0x0000 | 0x0000 | 0x0000 | 0x107B |
| 0x2CED | 0x0000 | 0x0000 | 0x0000 | 0x107C |
| 0x2CEE | 0x0000 | 0x0000 | 0x0000 | 0x160C |
| 0x2CEF | 0x0000 | 0x1118 | 0x0000 | 0x0000 |
| 0x2CF6 | 0x160D | 0x0000 | 0x0000 | 0x0000 |
| 0x2CF7 | 0x160D | 0x0000 | 0x0000 | 0x0000 |
| 0x2CF9 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2CFA | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2CFB | 0x1611 | 0x1610 | 0x160F | 0x160E |
| 0x2CFC | 0x0000 | 0x0000 | 0x1612 | 0x1087 |
| 0x2CFD | 0x0000 | 0x0000 | 0x0000 | 0x1613 |
| 0x2CFE | 0x0000 | 0x0000 | 0x0000 | 0x1614 |
| 0x2D06 | 0x0000 | 0x0000 | 0x1648 | 0x163F |
| 0x2D07 | 0x1615 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D09 | 0x0000 | 0x1094 | 0x0000 | 0x0000 |
| 0x2D0B | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2D0C | 0x0000 | 0x0000 | 0x12C5 | 0x12C4 |
| 0x2D0E | 0x0000 | 0x0000 | 0x1081 | 0x1014 |
| 0x2D0F | 0x0000 | 0x1340 | 0x0000 | 0x1340 |
| 0x2D15 | 0x0000 | 0x0000 | 0x0000 | 0x1675 |
| 0x2D16 | 0x0000 | 0x0000 | 0x103D | 0x1091 |
| 0x2D18 | 0x0000 | 0x0000 | 0x0000 | 0x163F |
| 0x2D1B | 0x1701 | 0x1700 | 0x163A | 0x163B |
| 0x2D1C | 0x1701 | 0x1700 | 0x163A | 0x163B |
| 0x2D1D | 0x1630 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D1E | 0x1631 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D1F | 0x1094 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D20 | 0x1632 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D25 | 0x0000 | 0x0000 | 0x0000 | 0x1431 |
| 0x2D27 | 0x0000 | 0x0000 | 0x167C | 0x167B |
| 0x2D28 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2D29 | 0x0000 | 0x0000 | 0x129B | 0x129A |
| 0x2D2A | 0x1468 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D2B | 0x1468 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D2E | 0x0000 | 0x0000 | 0x129B | 0x129A |
| 0x2D33 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2D35 | 0x1098 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D50 | 0x0000 | 0x1099 | 0x109B | 0x109A |
| 0x2D52 | 0x100B | 0x0000 | 0x0000 | 0x0000 |
| 0x2D53 | 0x100B | 0x0000 | 0x0000 | 0x0000 |
| 0x2D55 | 0x100B | 0x0000 | 0x0000 | 0x0000 |
| 0x2D56 | 0x109D | 0x109E | 0x0000 | 0x0000 |
| 0x2D57 | 0x109F | 0x10A0 | 0x0000 | 0x10A1 |
| 0x2D58 | 0x10A2 | 0x10A4 | 0x10A3 | 0x10A5 |
| 0x2D59 | 0x1018 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D5A | 0x1018 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D5C | 0x100B | 0x0000 | 0x0000 | 0x0000 |
| 0x2D5F | 0x10A6 | 0x10A9 | 0x10A7 | 0x10A8 |
| 0x2D60 | 0x1649 | 0x16FE | 0x0000 | 0x0000 |
| 0x2D61 | 0x163C | 0x0000 | 0x0000 | 0x0000 |
| 0x2D64 | 0x0000 | 0x0000 | 0x1294 | 0x1295 |
| 0x2D67 | 0x1628 | 0x1627 | 0x10AC | 0x10AD |
| 0x2DB5 | 0x1018 | 0x0000 | 0x0000 | 0x0000 |
| 0x2DB6 | 0x10AE | 0x0000 | 0x0000 | 0x0000 |
| 0x2DB7 | 0x10AF | 0x0000 | 0x0000 | 0x0000 |
| 0x2DBE | 0x0000 | 0x0000 | 0x10B0 | 0x10B1 |
| 0x2DC0 | 0x10B2 | 0x0000 | 0x0000 | 0x10B3 |
| 0x2DC3 | 0x1018 | 0x10B4 | 0x1015 | 0x1014 |
| 0x2DC5 | 0x1018 | 0x0000 | 0x0000 | 0x0000 |
| 0x2DC8 | 0x0000 | 0x10B5 | 0x0000 | 0x0000 |
| 0x2DC9 | 0x10B6 | 0x10B5 | 0x10B7 | 0x0000 |
| 0x2DE1 | 0x10BA | 0x0000 | 0x1015 | 0x1060 |
| 0x2DE2 | 0x10BA | 0x0000 | 0x1015 | 0x1060 |
| 0x2DE4 | 0x10BA | 0x0000 | 0x11F8 | 0x1060 |
| 0x2DE5 | 0x10BA | 0x0000 | 0x11F8 | 0x1060 |
| 0x2DEB | 0x0000 | 0x10BB | 0x1031 | 0x1032 |
| 0x2DEC | 0x10BC | 0x0000 | 0x10BD | 0x0000 |
| 0x2DED | 0x10BE | 0x0000 | 0x0000 | 0x0000 |
| 0x2DF0 | 0x0000 | 0x0000 | 0x0000 | 0x1700 |
| 0x2DF1 | 0x0000 | 0x0000 | 0x0000 | 0x1701 |
| 0x2E18 | 0x0000 | 0x0000 | 0x12E9 | 0x0000 |
| 0x2E19 | 0x0000 | 0x0000 | 0x12E9 | 0x0000 |
| 0x2E1A | 0x0000 | 0x0000 | 0x12E9 | 0x0000 |
| 0x2E1B | 0x0000 | 0x0000 | 0x12E9 | 0x0000 |
| 0x2E1C | 0x0000 | 0x0000 | 0x12E9 | 0x0000 |
| 0x2E1D | 0x0000 | 0x0000 | 0x12E9 | 0x0000 |
| 0x2E30 | 0x1297 | 0x1296 | 0x117A | 0x1016 |
| 0x2E31 | 0x1297 | 0x1296 | 0x117A | 0x1016 |
| 0x2E32 | 0x1297 | 0x1296 | 0x117A | 0x1016 |
| 0x2E33 | 0x1297 | 0x1296 | 0x117A | 0x1016 |
| 0x2E34 | 0x1297 | 0x1296 | 0x117A | 0x1016 |
| 0x2E35 | 0x1297 | 0x1296 | 0x117A | 0x1016 |
| 0x2E61 | 0x0000 | 0x0000 | 0x15BB | 0x15BA |
| 0x2E62 | 0x0000 | 0x0000 | 0x0000 | 0x16F0 |
| 0x2E68 | 0x1018 | 0x0000 | 0x10C6 | 0x10C8 |
| 0x2E69 | 0x1018 | 0x0000 | 0x10C6 | 0x10C8 |
| 0x2E74 | 0x0000 | 0x0000 | 0x148C | 0x0000 |
| 0x2E75 | 0x0000 | 0x0000 | 0x148C | 0x0000 |
| 0x2E77 | 0x10C9 | 0x0000 | 0x0000 | 0x0000 |
| 0x2E7A | 0x0000 | 0x0000 | 0x0000 | 0x15D4 |
| 0x2E7B | 0x0000 | 0x0000 | 0x0000 | 0x15D4 |
| 0x2E7C | 0x0000 | 0x1071 | 0x0000 | 0x0000 |
| 0x2E7F | 0x0000 | 0x1071 | 0x0000 | 0x0000 |
| 0x2E81 | 0x0000 | 0x0000 | 0x0000 | 0x16D3 |
| 0x2E82 | 0x0000 | 0x16D5 | 0x16D4 | 0x16D6 |
| 0x2E83 | 0x16DA | 0x16D9 | 0x16D8 | 0x16D7 |
| 0x2E84 | 0x0000 | 0x16D0 | 0x0000 | 0x0000 |
| 0x2E85 | 0x16DB | 0x0000 | 0x0000 | 0x0000 |
| 0x2E8B | 0x10D1 | 0x10D2 | 0x0000 | 0x10D3 |
| 0x2E8C | 0x10D4 | 0x10D6 | 0x0000 | 0x10D5 |
| 0x2E8D | 0x10D7 | 0x10D8 | 0x0000 | 0x10D9 |
| 0x2E8E | 0x0000 | 0x15DA | 0x0000 | 0x0000 |
| 0x2E96 | 0x0000 | 0x0000 | 0x0000 | 0x10DB |
| 0x2E97 | 0x10DD | 0x1091 | 0x1561 | 0x1055 |
| 0x2E98 | 0x0000 | 0x15DA | 0x0000 | 0x0000 |
| 0x2E9F | 0x10DE | 0x1071 | 0x15B6 | 0x10DF |
| 0x2EA1 | 0x0000 | 0x10DA | 0x0000 | 0x0000 |
| 0x2EAE | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0x2EAF | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0x2ECC | 0x0000 | 0x0000 | 0x0000 | 0x10DA |
| 0x2ECD | 0x0000 | 0x0000 | 0x0000 | 0x1091 |
| 0x2ECE | 0x0000 | 0x0000 | 0x0000 | 0x10E4 |
| 0x2ECF | 0x0000 | 0x0000 | 0x0000 | 0x1055 |
| 0x2ED0 | 0x0000 | 0x0000 | 0x0000 | 0x10E5 |
| 0x2ED1 | 0x0000 | 0x0000 | 0x0000 | 0x10DD |
| 0x2ED2 | 0x0000 | 0x0000 | 0x0000 | 0x10E6 |
| 0x2ED3 | 0x0000 | 0x0000 | 0x0000 | 0x10E7 |
| 0x2EE0 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2EE1 | 0x10E8 | 0x0000 | 0x0000 | 0x0000 |
| 0x2EE2 | 0x1633 | 0x0000 | 0x0000 | 0x0000 |
| 0x2EE3 | 0x1634 | 0x0000 | 0x0000 | 0x0000 |
| 0x2EE6 | 0x1635 | 0x0000 | 0x0000 | 0x0000 |
| 0x2EEA | 0x0000 | 0x0000 | 0x1015 | 0x1060 |
| 0x2EEB | 0x10EC | 0x0000 | 0x0000 | 0x0000 |
| 0x2EEC | 0x1018 | 0x0000 | 0x0000 | 0x1090 |
| 0x2EF4 | 0x1019 | 0x0000 | 0x0000 | 0x0000 |
| 0x2EF5 | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2EF7 | 0x0000 | 0x1016 | 0x0000 | 0x0000 |
| 0x2EF8 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x2EFE | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2EFF | 0x10ED | 0x0000 | 0x0000 | 0x0000 |
| 0x2F08 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2F09 | 0x1636 | 0x0000 | 0x163E | 0x163D |
| 0x2F0A | 0x0000 | 0x0000 | 0x1015 | 0x1060 |
| 0x2F0C | 0x1641 | 0x1637 | 0x0000 | 0x0000 |
| 0x2F0D | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2F10 | 0x0000 | 0x0000 | 0x0000 | 0x1091 |
| 0x2F11 | 0x10F0 | 0x0000 | 0x10DD | 0x10F2 |
| 0x2F12 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2F13 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2F15 | 0x1636 | 0x0000 | 0x163E | 0x163D |
| 0x2F30 | 0x1640 | 0x1637 | 0x0000 | 0x155A |
| 0x2F49 | 0x10F3 | 0x0000 | 0x10F4 | 0x0000 |
| 0x2F4A | 0x10F5 | 0x10B9 | 0x10F6 | 0x10F7 |
| 0x2F4B | 0x10F5 | 0x10FA | 0x10F9 | 0x10F8 |
| 0x2F4C | 0x0000 | 0x10B9 | 0x10F6 | 0x0000 |
| 0x2F4E | 0x0000 | 0x1049 | 0x0000 | 0x0000 |
| 0x2F4F | 0x1018 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F52 | 0x0000 | 0x0000 | 0x0000 | 0x11C2 |
| 0x2F53 | 0x0000 | 0x0000 | 0x0000 | 0x11C2 |
| 0x2F54 | 0x0000 | 0x0000 | 0x0000 | 0x11C2 |
| 0x2F55 | 0x0000 | 0x0000 | 0x0000 | 0x11C2 |
| 0x2F56 | 0x0000 | 0x0000 | 0x0000 | 0x16EB |
| 0x2F57 | 0x0000 | 0x0000 | 0x0000 | 0x11C2 |
| 0x2F58 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2F5B | 0x0000 | 0x0000 | 0x0000 | 0x1642 |
| 0x2F5C | 0x0000 | 0x0000 | 0x0000 | 0x16EC |
| 0x2F5D | 0x0000 | 0x0000 | 0x0000 | 0x16ED |
| 0x2F5E | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2F5F | 0x0000 | 0x16EE | 0x0000 | 0x0000 |
| 0x2F60 | 0x14AF | 0x0000 | 0x0000 | 0x0000 |
| 0x2F63 | 0x1018 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F64 | 0x1018 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F67 | 0x0000 | 0x0000 | 0x1015 | 0x1060 |
| 0x2F6C | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2F71 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2F76 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x2F77 | 0x0000 | 0x0000 | 0x16FB | 0x16FA |
| 0x2F79 | 0x1468 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F7A | 0x1468 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F7B | 0x0000 | 0x1016 | 0x0000 | 0x0000 |
| 0x2F7E | 0x15CB | 0x0000 | 0x0000 | 0x0000 |
| 0x2F7F | 0x15CC | 0x0000 | 0x0000 | 0x0000 |
| 0x2F80 | 0x1018 | 0x10FB | 0x0000 | 0x0000 |
| 0x2F81 | 0x0000 | 0x1018 | 0x0000 | 0x0000 |
| 0x2F82 | 0x15CD | 0x0000 | 0x0000 | 0x0000 |
| 0x2F83 | 0x15CE | 0x0000 | 0x0000 | 0x0000 |
| 0x2F84 | 0x14E2 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F85 | 0x0000 | 0x0000 | 0x1015 | 0x1060 |
| 0x2F8F | 0x1638 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F91 | 0x0000 | 0x0000 | 0x0000 | 0x153E |
| 0x2F94 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2F99 | 0x1067 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F9A | 0x0000 | 0x1639 | 0x163A | 0x163B |
| 0x2F9E | 0x1018 | 0x1049 | 0x10FE | 0x0000 |
| 0x2FA3 | 0x10FF | 0x1100 | 0x0000 | 0x0000 |
| 0x2FA4 | 0x1101 | 0x1102 | 0x15F6 | 0x0000 |
| 0x2FAB | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2FBC | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x2FBD | 0x0000 | 0x0000 | 0x1298 | 0x1299 |
| 0x2FBE | 0x0000 | 0x0000 | 0x0000 | 0x129A |
| 0x2FBF | 0x0000 | 0x0000 | 0x0000 | 0x129B |
| 0x2FC0 | 0x0000 | 0x129B | 0x129A | 0x129A |
| 0x2FC3 | 0x0000 | 0x15BD | 0x15BC | 0x15BE |
| 0x2FC6 | 0x0000 | 0x1103 | 0x1104 | 0x1105 |
| 0x2FC7 | 0x0000 | 0x0000 | 0x1104 | 0x0000 |
| 0x2FCA | 0x0000 | 0x0000 | 0x0000 | 0x129B |
| 0x2FDA | 0x0000 | 0x0000 | 0x0000 | 0x129B |
| 0x2FDB | 0x0000 | 0x0000 | 0x0000 | 0x129B |
| 0x2FDC | 0x0000 | 0x0000 | 0x0000 | 0x129B |
| 0x2FE4 | 0x1118 | 0x0000 | 0x0000 | 0x0000 |
| 0x2FE5 | 0x1118 | 0x0000 | 0x0000 | 0x0000 |
| 0x2FE6 | 0x1118 | 0x0000 | 0x0000 | 0x0000 |
| 0x2FE7 | 0x1118 | 0x0000 | 0x0000 | 0x0000 |
| 0x3070 | 0x0000 | 0x0000 | 0x1009 | 0x1008 |
| 0x3071 | 0x0000 | 0x0000 | 0x1009 | 0x1008 |
| 0x3072 | 0x0000 | 0x0000 | 0x1009 | 0x1008 |
| 0x3073 | 0x0000 | 0x0000 | 0x1009 | 0x1008 |
| 0x3074 | 0x0000 | 0x0000 | 0x1009 | 0x1008 |
| 0x3075 | 0x0000 | 0x0000 | 0x1009 | 0x1008 |
| 0x307C | 0x0000 | 0x0000 | 0x1009 | 0x1008 |
| 0x307D | 0x0000 | 0x0000 | 0x1009 | 0x1008 |
| 0x307E | 0x0000 | 0x0000 | 0x1009 | 0x1008 |
| 0x307F | 0x0000 | 0x0000 | 0x1009 | 0x1008 |
| 0x3080 | 0x0000 | 0x0000 | 0x1009 | 0x1008 |
| 0x3081 | 0x0000 | 0x0000 | 0x1009 | 0x1008 |
| 0x30A0 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x30A1 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x30A2 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x30A3 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x30A4 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x30A5 | 0x0000 | 0x0000 | 0x0000 | 0x1014 |
| 0x30AC | 0x12A3 | 0x12A5 | 0x12A6 | 0x12A4 |
| 0x30AD | 0x12A3 | 0x12A5 | 0x12A6 | 0x12A4 |
| 0x30AE | 0x12A3 | 0x12A5 | 0x12A6 | 0x12A4 |
| 0x30AF | 0x12A3 | 0x12A5 | 0x12A6 | 0x12A4 |
| 0x30B0 | 0x12A3 | 0x12A5 | 0x12A6 | 0x12A4 |
| 0x30B1 | 0x12A3 | 0x12A5 | 0x12A6 | 0x12A4 |
| 0x30BA | 0x0000 | 0x12A7 | 0x12A8 | 0x1072 |
| 0x30BB | 0x0000 | 0x12A7 | 0x12A8 | 0x1072 |
| 0x30BE | 0x1429 | 0x1428 | 0x0000 | 0x0000 |
| 0x30C0 | 0x0000 | 0x0000 | 0x0000 | 0x15C1 |
| 0x30C1 | 0x0000 | 0x0000 | 0x129B | 0x129A |
| 0x30C2 | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x30C3 | 0x0000 | 0x0000 | 0x11F8 | 0x1014 |
| 0x30C4 | 0x0000 | 0x0000 | 0x1677 | 0x1676 |
| 0x30C5 | 0x0000 | 0x0000 | 0x129B | 0x129A |
| 0x30C6 | 0x1636 | 0x0000 | 0x1679 | 0x1678 |
| 0x30C7 | 0x0000 | 0x0000 | 0x0000 | 0x110E |
| 0x30C9 | 0x0000 | 0x0000 | 0x1015 | 0x0000 |
| 0x30CA | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x30CF | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x30D0 | 0x0000 | 0x1016 | 0x11F8 | 0x1014 |
| 0x30D6 | 0x0000 | 0x0000 | 0x0000 | 0x12AD |
| 0x30D8 | 0x0000 | 0x12AE | 0x12B0 | 0x12AF |
| 0x30DA | 0x0000 | 0x0000 | 0x12B1 | 0x12B2 |
| 0x30DC | 0x0000 | 0x12B3 | 0x12B4 | 0x12B5 |
| 0x30DE | 0x0000 | 0x0000 | 0x0000 | 0x12B6 |
| 0x30E0 | 0x0000 | 0x0000 | 0x0000 | 0x12B7 |
| 0x30E2 | 0x12B8 | 0x12AE | 0x12B9 | 0x12BA |
| 0x30E4 | 0x0000 | 0x0000 | 0x12BB | 0x12BC |
| 0x30E6 | 0x0000 | 0x0000 | 0x0000 | 0x12BD |
| 0x30E9 | 0x0000 | 0x0000 | 0x0000 | 0x12BE |
| 0x30EA | 0x13CE | 0x0000 | 0x0000 | 0x13CE |
| 0x30ED | 0x12E7 | 0x0000 | 0x0000 | 0x0000 |
| 0x30EE | 0x12E7 | 0x0000 | 0x0000 | 0x0000 |
| 0x30EF | 0x12E7 | 0x0000 | 0x0000 | 0x0000 |
| 0x30F0 | 0x12E7 | 0x0000 | 0x0000 | 0x0000 |
| 0x30F1 | 0x12E7 | 0x0000 | 0x0000 | 0x0000 |
| 0x30F2 | 0x12E7 | 0x0000 | 0x0000 | 0x0000 |
| 0x30FC | 0x129B | 0x0000 | 0x0000 | 0x0000 |
| 0x30FE | 0x129A | 0x0000 | 0x0000 | 0x0000 |
| 0x30FF | 0x129B | 0x0000 | 0x0000 | 0x0000 |
| 0x3100 | 0x167A | 0x0000 | 0x0000 | 0x0000 |
| 0x3104 | 0x0000 | 0x0000 | 0x0000 | 0x14C6 |
| 0x3105 | 0x0000 | 0x0000 | 0x0000 | 0x15B7 |
| 0x3179 | 0x0000 | 0x15DA | 0x0000 | 0x0000 |
| 0xCD87 | 0x0000 | 0x110F | 0x0000 | 0x0000 |
| 0xCD8B | 0x0000 | 0x110F | 0x0000 | 0x0000 |
| 0xCD94 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCD95 | 0x1111 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCD96 | 0x1111 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCD97 | 0x1111 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCD98 | 0x1111 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCD99 | 0x1111 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCD9A | 0x1111 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCD9B | 0x1111 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCD9C | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCD9D | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCD9E | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCD9F | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDA0 | 0x1111 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCDA1 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDA2 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDA3 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDA4 | 0x0000 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCDA5 | 0x0000 | 0x15DA | 0x0000 | 0x0000 |
| 0xCDA6 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDA7 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDA8 | 0x0000 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCDA9 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDAA | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDAB | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDAC | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDAD | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDAE | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDAF | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDB0 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDB1 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDB3 | 0x1111 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCDB4 | 0x1111 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCDB5 | 0x0000 | 0x110F | 0x0000 | 0x0000 |
| 0xCDB8 | 0x1111 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCDB9 | 0x1111 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCDBA | 0x1111 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCDBD | 0x0000 | 0x15DA | 0x124B | 0x0000 |
| 0xCDBE | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDC2 | 0x1111 | 0x10B9 | 0x1112 | 0x0000 |
| 0xCDC3 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | ja |
| F_ART_ERW | ja |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | nein |
| F_LZ | nein |
| F_UWB_ERW | ja |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x0000 | 0000 FehlerOrt nicht bedatet |
| 0x29CC | 0x29CC Verbrennungsaussetzer, mehrere Zylinder |
| 0x29CD | 0x29CD Verbrennungsaussetzer, Zylinder 1 |
| 0x29CE | 0x29CE Verbrennungsaussetzer, Zylinder 2 |
| 0x29CF | 0x29CF Verbrennungsaussetzer, Zylinder 3 |
| 0x29D0 | 0x29D0 Verbrennungsaussetzer, Zylinder 4 |
| 0x29D1 | 0x29D1 Verbrennungsaussetzer, Zylinder 5 |
| 0x29D2 | 0x29D2 Verbrennungsaussetzer, Zylinder 6 |
| 0x29D9 | 0x29D9 Verbrennungsaussetzer bei geringem Tankfüllstand |
| 0x29DA | 0x29DA Kurbelwellensensor, Segmentadaption |
| 0x29DB | 0x29DB Laufruhe, Segmentzeitmessung |
| 0x29DC | 0x29DC Zylindereinspritzabschaltung |
| 0x29E0 | 0x29E0 Gemischregelung |
| 0x29E1 | 0x29E1 Gemischregelung 2 |
| 0x29E2 | 0x29E2 Kraftstoffeinspritzleiste, Drucksensorsignal |
| 0x29E5 | 0x29E5 Gemischadaption, oberer Drehzahlbereich |
| 0x29E6 | 0x29E6 Gemischadaption 2, oberer Drehzahlbereich |
| 0x29F1 | 0x29F1 Kraftstoffdruck, Plausibilität |
| 0x29F2 | 0x29F2 Kraftstoffhochdrucksystem, Kraftstoffdruck |
| 0x29F3 | 0x29F3 Kraftstoffdrucksensor, elektrisch |
| 0x29F4 | 0x29F4 Katalysatorkonvertierung |
| 0x29F5 | 0x29F5 Katalysatorkonvertierung 2 |
| 0x29F6 | 0x29F6 Katalysatorkonvertierung, Gesamtsystem: unterhalb Grenzwert |
| 0x29F7 | 0x29F7 Katalysatorkonvertierung 2, Gesamtsystem: unterhalb Grenzwert |
| 0x2A0C | 0x2A0C Abgasrückführung, Systemfunktion |
| 0x2A0D | 0x2A0D Abgasrückführungsventil, Ansteuerung |
| 0x2A0E | 0x2A0E Abgasrückführungsventil, Regelabweichung Lageregelung |
| 0x2A0F | 0x2A0F Abgasrückführungsventil, Adaption |
| 0x2A10 | 0x2A10 Abgasrückführungssensor, Signal |
| 0x2A12 | 0x2A12 DMTL-Magnetventil, Ansteuerung |
| 0x2A13 | 0x2A13 DMTL-Leckdiagnosepumpe, Ansteuerung |
| 0x2A15 | 0x2A15 Tankentlüftungs- und Spülluftsystem, Feinleck |
| 0x2A16 | 0x2A16 Tankentlüftungs- und Spülluftsystem, Feinstleck |
| 0x2A17 | 0x2A17 DMTL, Systemfehler |
| 0x2A18 | 0x2A18 DMTL, Heizung: Ansteuerung |
| 0x2A19 | 0x2A19 Tankentlüftungsventil, Ansteuerung |
| 0x2A1A | 0x2A1A Tankentlüftungssystem, Funktion |
| 0x2A1B | 0x2A1B Tankdeckel |
| 0x2A1C | 0x2A1C Tankfüllstand, Plausibilität |
| 0x2A22 | 0x2A22 Tankfüllstand, Korrelation |
| 0x2A26 | 0x2A26 Katalysator, Konvertierung im Schichtbetrieb |
| 0x2A27 | 0x2A27 Katalysator 2, Konvertierung im Schichtbetrieb |
| 0x2A29 | 0x2A29 Kraftstoffniederdrucksensor |
| 0x2A2B | 0x2A2B Gemischregelung |
| 0x2A2C | 0x2A2C Gemischregelung 2 |
| 0x2A2D | 0x2A2D Kraftstoffniederdrucksystem, Kraftstoffdruck |
| 0x2A78 | 0x2A78 VANOS, Auslass, Kaltstart |
| 0x2A79 | 0x2A79 VANOS, Einlass, Kaltstart |
| 0x2A7A | 0x2A7A VANOS, Auslass, Kaltstart |
| 0x2A7C | 0x2A7C VANOS, Einlass, Kaltstart |
| 0x2A80 | 0x2A80 Einlass-VANOS, Ansteuerung |
| 0x2A82 | 0x2A82 Einlass-VANOS |
| 0x2A85 | 0x2A85 Auslass-VANOS, Ansteuerung |
| 0x2A87 | 0x2A87 Auslass-VANOS, Mechanik |
| 0x2A94 | 0x2A94 Kurbelwellensensor, Signal |
| 0x2A95 | 0x2A95 Kurbelwellensensor, Synchronisation |
| 0x2A96 | 0x2A96 Kurbelwellensensor, Zahnfehler |
| 0x2A97 | 0x2A97 Kurbelwellensensor, Lückenfehler |
| 0x2A98 | 0x2A98 Kurbelwelle - Einlassnockenwelle, Referenz |
| 0x2A99 | 0x2A99 Kurbelwelle - Auslassnockenwelle, Referenz |
| 0x2A9A | 0x2A9A Kurbelwelle - Einlassnockenwelle, Synchronisation |
| 0x2A9B | 0x2A9B Kurbelwelle - Auslassnockenwelle, Synchronisation |
| 0x2A9E | 0x2A9E Nockenwellensensor Einlass, Synchonisation |
| 0x2A9F | 0x2A9F Nockenwellensensor Auslass, Synchronisation |
| 0x2AA0 | 0x2AA0 Nockenwellensensor Einlass, Signal |
| 0x2AA1 | 0x2AA1 Nockenwellensensor Auslass, Signal |
| 0x2AA2 | 0x2AA2 Nockenwellensensor Einlass, Lückenverlust |
| 0x2AA3 | 0x2AA3 Nockenwellensensor Auslass, Lückenverlust |
| 0x2AA4 | 0x2AA4 Einlassnockenwelle, Positionsüberwachung |
| 0x2AA5 | 0x2AA5 Auslassnockenwelle, Positionsüberwachung |
| 0x2AA8 | 0x2AA8 Variable Sauganlage Stellmotor: Ansteuerung |
| 0x2AA9 | 0x2AA9 Variable Sauganlage Stellmotor 2: Ansteuerung |
| 0x2AAA | 0x2AAA Variable Sauganlage, Plausibilität |
| 0x2AAB | 0x2AAB Variable Sauganlage, Eigendiagnose |
| 0x2AAC | 0x2AAC Variable Sauganlage 2, Eigendiagnose |
| 0x2AAD | 0x2AAD Kraftstoffpumpe, Notabschaltung |
| 0x2AAE | 0x2AAE Kraftstoffpumpe |
| 0x2AAF | 0x2AAF Kraftstoffpumpe, Plausibilität |
| 0x2AB2 | 0x2AB2 DME, interner Fehler: RAM |
| 0x2AB3 | 0x2AB3 DME, interner Fehler: Checksumme |
| 0x2AB4 | 0x2AB4 DME, interner Fehler: RAM-Checksumme |
| 0x2AB5 | 0x2AB5 DME, interner Fehler: Klopfsensorbaustein |
| 0x2AB6 | 0x2AB6 DME, interner Fehler: Mehrfachendstufenbaustein |
| 0x2ABC | 0x2ABC Ladedrucksensor, elektrisch |
| 0x2ABD | 0x2ABD Ladedrucksensor, Nachlauf |
| 0x2AC6 | 0x2AC6 Taster Fahrdynamik-Control (SPORT-Taste), Signal |
| 0x2ACA | 0x2ACA Klemme 15_3, Leitung vom CAS, elektrisch |
| 0x2ACB | 0x2ACB DME-Hauptrelais, Ansteuerung |
| 0x2ACC | 0x2ACC DME-Hauptrelais, Schaltverzögerung |
| 0x2AD0 | 0x2AD0 Getriebesteuerung |
| 0x2ADF | 0x2ADF Leerlaufregelung, Drehzahl |
| 0x2AE0 | 0x2AE0 Leerlaufregelung bei Kaltstart, Plausibilität |
| 0x2AE2 | 0x2AE2 Leerlaufregelung, Plausibilität, Kaltstart |
| 0x2AE4 | 0x2AE4 Motorentlüftungs-Heizungsrelais, Ansteuerung |
| 0x2AEC | 0x2AEC Stickoxidsensor, Eigendiagnose |
| 0x2AED | 0x2AED Stickoxidsensor, Version |
| 0x2AF0 | 0x2AF0 Stickoxidsensor, Heizung |
| 0x2AF2 | 0x2AF2 Stickoxidsensor, Lambda linear |
| 0x2AF4 | 0x2AF4 Stickoxidsensor, elektrisch |
| 0x2AF6 | 0x2AF6 Stickoxidsensor, Lambda binär |
| 0x2AFB | 0x2AFB Stickoxidsensor, Lambda binär |
| 0x2AFE | 0x2AFE Stickoxidsensor, Adaption |
| 0x2B00 | 0x2B00 Überdrehzahl, Magerbereich |
| 0x2B05 | 0x2B05 Stickoxidsensor, Heizung |
| 0x2B06 | 0x2B06 Stickoxidsensor, Lambda linear |
| 0x2B07 | 0x2B07 Stickoxidsensor, elektrisch |
| 0x2B08 | 0x2B08 Stickoxidsensor, Heizung |
| 0x2B09 | 0x2B09 Stickoxidsensor, Lambda linear |
| 0x2B0A | 0x2B0A Stickoxidsensor, elektrisch |
| 0x2B0B | 0x2B0B Stickoxidsensor, Lambda binär |
| 0x2B28 | 0x2B28 Tankentlüftungs- und Spülluftsystem, Feinstleck |
| 0x2B29 | 0x2B29 DMTL, Systemfehler |
| 0x2B2C | 0x2B2C Kraftstoffhochdruck, Plausibilität, Kaltstart |
| 0x2B3A | 0x2B3A DMTL, Systemfehler |
| 0x2B3B | 0x2B3B DMTL, Systemfehler |
| 0x2B3C | 0x2B3C DMTL, Systemfehler |
| 0x2B3D | 0x2B3D DMTL, Systemfehler |
| 0x2B48 | 0x2B48 Gemischregelung |
| 0x2B49 | 0x2B49 Gemischregelung 2 |
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
| 0x2C87 | 0x2C87 Abgastemperatursensor, Signal |
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
| 0x2CB2 | 0x2CB2 Lambdasonde nach Katalysator, von Mager nach Fett |
| 0x2CB3 | 0x2CB3 Lambdasonde nach Katalysator 2, von Mager nach Fett |
| 0x2CB4 | 0x2CB4 Lambdasonde nach Katalysator, von Fett nach Mager |
| 0x2CB5 | 0x2CB5 Lambdasonde nach Katalysator 2, von Fett nach Mager |
| 0x2CB6 | 0x2CB6 Lambdasonde nach Katalysator |
| 0x2CB7 | 0x2CB7 Lambdasonde nach Katalysator 2 |
| 0x2CB8 | 0x2CB8 Lambdasonde nach Katalysator |
| 0x2CB9 | 0x2CB9 Lambdasonde nach Katalysator 2 |
| 0x2CEC | 0x2CEC Drosselklappensteller, klemmt |
| 0x2CED | 0x2CED Drosselklappensteller, klemmt dauerhaft |
| 0x2CEE | 0x2CEE Drosselklappensteller, schwergängig |
| 0x2CEF | 0x2CEF Drosselklappensteller, Ansteuerung |
| 0x2CF6 | 0x2CF6 Drosselklappenpotenziometer 1, Plausibilität zu Luftmasse |
| 0x2CF7 | 0x2CF7 Drosselklappenpotenziometer 2, Plausibilität zu Luftmasse |
| 0x2CF9 | 0x2CF9 Drosselklappenpotenziometer 1 |
| 0x2CFA | 0x2CFA Drosselklappenpotenziometer 2 |
| 0x2CFB | 0x2CFB Drosselklappen-Adaptionswert |
| 0x2CFC | 0x2CFC Drosselklappe, Startprüfung |
| 0x2CFD | 0x2CFD Drosselklappen-Adaptionswert fehlt |
| 0x2CFE | 0x2CFE Drosselklappe, kontinuierliche Adaption |
| 0x2D06 | 0x2D06 Luftmassensystem |
| 0x2D07 | 0x2D07 Drosselklappe 1 |
| 0x2D09 | 0x2D09 Drosselklappe |
| 0x2D0B | 0x2D0B Drosselklappenheizung, Relais |
| 0x2D0C | 0x2D0C Drosselklappe, Enteisung |
| 0x2D0E | 0x2D0E Luftmassenmesser, elektrisch |
| 0x2D0F | 0x2D0F Luftmassenmesser, Signal |
| 0x2D15 | 0x2D15 Luftmassenmesser, Messbereich |
| 0x2D16 | 0x2D16 Luftmassenmesser, Signal |
| 0x2D18 | 0x2D18 Tuningschutz |
| 0x2D1B | 0x2D1B Fahrpedalmodul, Pedalwertgeber Signal 1 |
| 0x2D1C | 0x2D1C Fahrpedalmodul, Pedalwertgeber Signal 2 |
| 0x2D1D | 0x2D1D Fahrpedalmodul, Pedalwertgeber 1, Spannungsversorgung |
| 0x2D1E | 0x2D1E Fahrpedalmodul, Pedalwertgeber 2, Spannungsversorgung |
| 0x2D1F | 0x2D1F Fahrpedalmodul, Pedalwertgeber Potentiometer, Signal |
| 0x2D20 | 0x2D20 Fahrpedalmodul, Pedalwertgeber, Plausibilität zwischen Signal 1 und Signal 2 |
| 0x2D25 | 0x2D25 Manipulationsschutz, max. Luftmasse |
| 0x2D27 | 0x2D27 Luftmassenmesser |
| 0x2D28 | 0x2D28 Differenzdrucksensor, Saugrohr: Signal |
| 0x2D29 | 0x2D29 Differenzdrucksensor, Saugrohr: Plausibilität |
| 0x2D2A | 0x2D2A Differenzdrucksensor, Saugrohr: Adaption |
| 0x2D2B | 0x2D2B Saugrohrdrucksensor, Nachlauf |
| 0x2D2E | 0x2D2E Drosselklappenwinkel - Saugrohr-Unterdruck, Korrelation |
| 0x2D33 | 0x2D33 Absolutdrucksensor, Saugrohr: Signal |
| 0x2D35 | 0x2D35 Absolutdrucksensor, Saugrohr: Adaption |
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
| 0x2D5F | 0x2D5F DME, interner Fehler: Reset |
| 0x2D60 | 0x2D60 Kraftstoffmenge, Überwachung |
| 0x2D61 | 0x2D61 Drosselklappe, Überwachung |
| 0x2D64 | 0x2D64 Überwachung stöchiometrisches Gemisch |
| 0x2D67 | 0x2D67 DME, interner Fehler: Überwachung Prozessoren |
| 0x2DB5 | 0x2DB5 Fahrgeschwindigkeitsregelung, Signal |
| 0x2DB6 | 0x2DB6 Fahrgeschwindigkeitsregelung, Schalter Multifunktionslenkrad |
| 0x2DB7 | 0x2DB7 Fahrgeschwindigkeitsregelung, Zeitlimit der Datenübertragung erreicht |
| 0x2DBE | 0x2DBE Aktive Geschwindigkeitsregelung, gesperrt für Fahrzyklus |
| 0x2DC0 | 0x2DC0 Längsdynamikmanagement |
| 0x2DC3 | 0x2DC3 Überwachung Klemme 15 |
| 0x2DC5 | 0x2DC5 Momentenanforderung über CAN, Plausibilität |
| 0x2DC8 | 0x2DC8 Botschaft vom EGS fehlt, EGS 1 |
| 0x2DC9 | 0x2DC9 Botschaft vom EGS fehlt, EGS 2 |
| 0x2DE1 | 0x2DE1 Tankfüllstandssensor: Signal |
| 0x2DE2 | 0x2DE2 Tankfüllstandssensor: Signal |
| 0x2DE4 | 0x2DE4 Tankfüllstandssensor, links: Signal |
| 0x2DE5 | 0x2DE5 Tankfüllstandssensor, rechts: Signal |
| 0x2DEB | 0x2DEB Powermanagement, Bordnetzüberwachung |
| 0x2DEC | 0x2DEC Powermanagement, Batterieüberwachung |
| 0x2DED | 0x2DED Powermanagement, Ruhestromüberwachung |
| 0x2DF0 | 0x2DF0 Bordnetzspannung |
| 0x2DF1 | 0x2DF1 Bordnetzspannung |
| 0x2E18 | 0x2E18 Zündung, Zylinder 1 |
| 0x2E19 | 0x2E19 Zündung, Zylinder 2 |
| 0x2E1A | 0x2E1A Zündung, Zylinder 3 |
| 0x2E1B | 0x2E1B Zündung, Zylinder 4 |
| 0x2E1C | 0x2E1C Zündung, Zylinder 5 |
| 0x2E1D | 0x2E1D Zündung, Zylinder 6 |
| 0x2E30 | 0x2E30 Einspritzventil Zylinder 1, Ansteuerung |
| 0x2E31 | 0x2E31 Einspritzventil Zylinder 2, Ansteuerung |
| 0x2E32 | 0x2E32 Einspritzventil Zylinder 3, Ansteuerung |
| 0x2E33 | 0x2E33 Einspritzventil Zylinder 4, Ansteuerung |
| 0x2E34 | 0x2E34 Einspritzventil Zylinder 5, Ansteuerung |
| 0x2E35 | 0x2E35 Einspritzventil Zylinder 6, Ansteuerung |
| 0x2E61 | 0x2E61 Einspritzausgabe |
| 0x2E62 | 0x2E62 Einspritzung, Plausibilität, Kaltstart |
| 0x2E68 | 0x2E68 Klopfsensorsignal 1 |
| 0x2E69 | 0x2E69 Klopfsensorsignal 2 |
| 0x2E74 | 0x2E74 Gemischregelung, Injektor-Alterung |
| 0x2E75 | 0x2E75 Gemischregelung 2, Injektor-Alterung |
| 0x2E77 | 0x2E77 Zündung, Spannungsversorgung |
| 0x2E7A | 0x2E7A Zündwinkelverstellung im Leerlauf, Kaltstart |
| 0x2E7B | 0x2E7B Zündwinkelverstellung in Teillast, Kaltstart |
| 0x2E7C | 0x2E7C Bitserielle Datenschnittstelle, Signal |
| 0x2E7F | 0x2E7F A- und FA-CAN, Botschaften (Getriebe) |
| 0x2E81 | 0x2E81 Elektrische Kühlmittelpumpe, Drehzahlabweichung |
| 0x2E82 | 0x2E82 Elektrische Kühlmittelpumpe, Abschaltung |
| 0x2E83 | 0x2E83 Elektrische Kühlmittelpumpe, leistungsreduzierter Betrieb |
| 0x2E84 | 0x2E84 Elektrische Kühlmittelpumpe, Kommunikation |
| 0x2E85 | 0x2E85 Elektrische Kühlmittelpumpe, Kommunikation |
| 0x2E8B | 0x2E8B Intelligenter Batteriesensor, Signal |
| 0x2E8C | 0x2E8C Intelligenter Batteriesensor, Funktion |
| 0x2E8D | 0x2E8D Intelligenter Batteriesensor, Signalübertragung |
| 0x2E8E | 0x2E8E Intelligenter Batteriesensor, Kommunikation |
| 0x2E96 | 0x2E96 Generator, Untererregung |
| 0x2E97 | 0x2E97 Generator |
| 0x2E98 | 0x2E98 Generator, Kommunikation |
| 0x2E9F | 0x2E9F Ölzustandssensor |
| 0x2EA1 | 0x2EA1 Ölzustandssensor, Kommunikation |
| 0x2EAE | 0x2EAE Botschaft vom Stickoxidsensor 1 fehlt |
| 0x2EAF | 0x2EAF Botschaft vom Stickoxidsensor 2 fehlt |
| 0x2ECC | 0x2ECC Generator, Kommunikation |
| 0x2ECD | 0x2ECD Generator, elektrisch |
| 0x2ECE | 0x2ECE Generator, Plausibilität: elektrisch |
| 0x2ECF | 0x2ECF Generator, Übertemperatur |
| 0x2ED0 | 0x2ED0 Generator,  Plausibilität: Temperatur |
| 0x2ED1 | 0x2ED1 Generator, mechanisch |
| 0x2ED2 | 0x2ED2 Generator, Regler falsch |
| 0x2ED3 | 0x2ED3 Generator, Typ falsch |
| 0x2EE0 | 0x2EE0 Kühlmitteltemperatursensor, Signal |
| 0x2EE1 | 0x2EE1 Kühlmitteltemperatursensor, Plausibilität |
| 0x2EE2 | 0x2EE2 Kühlmitteltemperatursensor, Plausibilität: Signal konstant |
| 0x2EE3 | 0x2EE3 Kühlmitteltemperatursensor, Plausibilität: Gradient |
| 0x2EE6 | 0x2EE6 Kühlmitteltemperatursensor, Messbereich |
| 0x2EEA | 0x2EEA Temperatursensor Kühleraustritt, Signal |
| 0x2EEB | 0x2EEB Temperatursensor Kühleraustritt, Plausibilität, Gradient |
| 0x2EEC | 0x2EEC Temperatursensor Kühleraustritt, Plausibilität |
| 0x2EF4 | 0x2EF4 Kennfeldthermostat, Mechanik |
| 0x2EF5 | 0x2EF5 Kennfeldthermostat, Ansteuerung |
| 0x2EF7 | 0x2EF7 Kennfeldthermostat, Ansteuerung |
| 0x2EF8 | 0x2EF8 Kennfeldthermostat, Ansteuerung |
| 0x2EFE | 0x2EFE Elektrolüfter, Ansteuerung |
| 0x2EFF | 0x2EFF Elektrolüfter, Eigendiagnose |
| 0x2F08 | 0x2F08 Ansauglufttemperatursensor, Signal |
| 0x2F09 | 0x2F09 Ansauglufttemperatursensor, Plausibilität |
| 0x2F0A | 0x2F0A Ansauglufttemparatursensor Turbolader, Signal |
| 0x2F0C | 0x2F0C Ansauglufttemperatursensor |
| 0x2F0D | 0x2F0D Kühlerjalousie, Ansteuerung, (GLF) |
| 0x2F10 | 0x2F10 Kühlerjalousie, unten |
| 0x2F11 | 0x2F11 Kühlerjalousie, oben |
| 0x2F12 | 0x2F12 Klimakompressor, Ansteuerung |
| 0x2F13 | 0x2F13 Ladelufttemperatur |
| 0x2F15 | 0x2F15 Ansauglufttemperatur |
| 0x2F30 | 0x2F30 Ladelufttemperatursensor |
| 0x2F49 | 0x2F49 EWS Manipulationsschutz |
| 0x2F4A | 0x2F4A Schnittstelle EWS-DME |
| 0x2F4B | 0x2F4B DME, interner Fehler: EWS-Daten |
| 0x2F4C | 0x2F4C Botschaft EWS-DME fehlerhaft |
| 0x2F4E | 0x2F4E Fahrzeuggeschwindigkeit, Signal |
| 0x2F4F | 0x2F4F Fahrzeuggeschwindigkeit, Plausibilität |
| 0x2F52 | 0x2F52 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/links, Signaländerung |
| 0x2F53 | 0x2F53 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/rechts, Signaländerung |
| 0x2F54 | 0x2F54 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/links, Signaländerung |
| 0x2F55 | 0x2F55 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/rechts, Signaländerung |
| 0x2F56 | 0x2F56 Fahrzeuggeschwindigkeit, Plausibilität |
| 0x2F57 | 0x2F57 Fahrzeuggeschwindigkeit, Signaländerung |
| 0x2F58 | 0x2F58 Startautomatik, Ansteuerung |
| 0x2F5B | 0x2F5B Fahrzeuggeschwindigkeit, Signal |
| 0x2F5C | 0x2F5C Fahrzeuggeschwindigkeit, Plausibilität |
| 0x2F5D | 0x2F5D Fahrzeuggeschwindigkeit, Signal |
| 0x2F5E | 0x2F5E Akustikklappe, Ansteuerung |
| 0x2F5F | 0x2F5F Fahrzeuggeschwindigkeit, Plausibilität |
| 0x2F60 | 0x2F60 Fahrzeuggeschwindigkeit, Plausibilität |
| 0x2F63 | 0x2F63 Bremslichtschalter, Plausibilität |
| 0x2F64 | 0x2F64 Bremslichttestschalter, Plausibilität |
| 0x2F67 | 0x2F67 Kupplungsschalter, Signal |
| 0x2F6C | 0x2F6C Abgasklappe, Ansteuerung |
| 0x2F71 | 0x2F71 E-Box-Lüfter, Ansteuerung |
| 0x2F76 | 0x2F76 Umgebungsdrucksensor, Signal |
| 0x2F77 | 0x2F77 Umgebungsdrucksensor, Plausibilität |
| 0x2F79 | 0x2F79 Umgebungsdrucksensor, Nachlauf |
| 0x2F7A | 0x2F7A Umgebungsdrucksensor, Nachlauf |
| 0x2F7B | 0x2F7B Öldruckschalter, Plausibilität |
| 0x2F7E | 0x2F7E Motorabstellzeit, Plausibilität |
| 0x2F7F | 0x2F7F Motorabstellzeit, Plausibilität |
| 0x2F80 | 0x2F80 Motorabstellzeit, Plausibilität |
| 0x2F81 | 0x2F81 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich |
| 0x2F82 | 0x2F82 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich |
| 0x2F83 | 0x2F83 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich |
| 0x2F84 | 0x2F84 Motorabstellzeit, Zeitzähler Kombi - Zeitzähler DME, Vergleich |
| 0x2F85 | 0x2F85 DME, interner Fehler: Innentemperatursensor, Signal |
| 0x2F8F | 0x2F8F Fahrpedalmodul und Bremspedal, Plausibilität |
| 0x2F91 | 0x2F91 Drehzahlbegrenzung bei stehendem Fahrzeug |
| 0x2F94 | 0x2F94 Kraftstoffpumpenrelais, Ansteuerung |
| 0x2F99 | 0x2F99 Außentemperatursensor, Plausibilität |
| 0x2F9A | 0x2F9A Außentemperatursensor, Kommunikation |
| 0x2F9E | 0x2F9E Thermischer Ölniveausensor |
| 0x2FA3 | 0x2FA3 Codierung fehlt |
| 0x2FA4 | 0x2FA4 Falscher Datensatz |
| 0x2FAB | 0x2FAB Aktives Motorlager, elektrisch |
| 0x2FBC | 0x2FBC Mengensteuerventil, Signal |
| 0x2FBD | 0x2FBD Mengensteuerventil, Plausibilität |
| 0x2FBE | 0x2FBE Kraftstoffdruck nach Motorstopp |
| 0x2FBF | 0x2FBF Kraftstoffdruck bei Freigabe der Einspritzung |
| 0x2FC0 | 0x2FC0 Kraftstoffdruck, Messbereich |
| 0x2FC3 | 0x2FC3 Mengensteuerventil, Plausibilität |
| 0x2FC6 | 0x2FC6 Energiesparmodus aktiv |
| 0x2FC7 | 0x2FC7 Energiesparmodus 2, aktiv |
| 0x2FCA | 0x2FCA Kraftstoffhochdruck bei Freigabe der Einspritzung |
| 0x2FDA | 0x2FDA Kraftstoffhochdruck bei oder nach Freigabe der Einspritzung (2. Umweltbedingungssatz nach Zeitverzögerung) |
| 0x2FDB | 0x2FDB Kraftstoffhochdruck nach Freigabe der Einspritzung |
| 0x2FDC | 0x2FDC Kraftstoffhochdruck bei Freigabe der Einspritzung |
| 0x2FE4 | 0x2FE4 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/links, elektrisch |
| 0x2FE5 | 0x2FE5 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/links, elektrisch |
| 0x2FE6 | 0x2FE6 Fahrzeuggeschwindigkeit, Raddrehzahlsensor hinten/rechts, elektrisch |
| 0x2FE7 | 0x2FE7 Fahrzeuggeschwindigkeit, Raddrehzahlsensor vorn/rechts, elektrisch |
| 0x3070 | 0x3070 Zylindergleichstellung über Laufunruhe Zylinder 1 |
| 0x3071 | 0x3071 Zylindergleichstellung über Laufunruhe Zylinder 2 |
| 0x3072 | 0x3072 Zylindergleichstellung über Laufunruhe Zylinder 3 |
| 0x3073 | 0x3073 Zylindergleichstellung über Laufunruhe Zylinder 4 |
| 0x3074 | 0x3074 Zylindergleichstellung über Laufunruhe Zylinder 5 |
| 0x3075 | 0x3075 Zylindergleichstellung über Laufunruhe Zylinder 6 |
| 0x307C | 0x307C Zylindergleichstellung über Lambda Zylinder 1 |
| 0x307D | 0x307D Zylindergleichstellung über Lambda Zylinder 2 |
| 0x307E | 0x307E Zylindergleichstellung über Lambda Zylinder 3 |
| 0x307F | 0x307F Zylindergleichstellung über Lambda Zylinder 4 |
| 0x3080 | 0x3080 Zylindergleichstellung über Lambda Zylinder 5 |
| 0x3081 | 0x3081 Zylindergleichstellung über Lambda Zylinder 6 |
| 0x30A0 | 0x30A0 Zündspule Zylinder 1, Ansteuerung |
| 0x30A1 | 0x30A1 Zündspule Zylinder 2, Ansteuerung |
| 0x30A2 | 0x30A2 Zündspule Zylinder 3, Ansteuerung |
| 0x30A3 | 0x30A3 Zündspule Zylinder 4, Ansteuerung |
| 0x30A4 | 0x30A4 Zündspule Zylinder 5, Ansteuerung |
| 0x30A5 | 0x30A5 Zündspule Zylinder 6, Ansteuerung |
| 0x30AC | 0x30AC Einspritzventil Zylinder 1, Ansteuerung |
| 0x30AD | 0x30AD Einspritzventil Zylinder 2, Ansteuerung |
| 0x30AE | 0x30AE Einspritzventil Zylinder 3, Ansteuerung |
| 0x30AF | 0x30AF Einspritzventil Zylinder 4, Ansteuerung |
| 0x30B0 | 0x30B0 Einspritzventil Zylinder 5, Ansteuerung |
| 0x30B1 | 0x30B1 Einspritzventil Zylinder 6, Ansteuerung |
| 0x30BA | 0x30BA Injektoren x, y(, z) oder DME, interner Fehler |
| 0x30BB | 0x30BB Injektoren x, y(, z) oder DME, interner Fehler |
| 0x30BE | 0x30BE Injektor, Kodierung, Plausibilität |
| 0x30C0 | 0x30C0 Motoröldruckregelung, dynamisch |
| 0x30C1 | 0x30C1 Motoröldruckregelung, statisch |
| 0x30C2 | 0x30C2 Öldruckregelventil, Ansteuerung |
| 0x30C3 | 0x30C3 Motoröldrucksensor, Signal |
| 0x30C4 | 0x30C4 Motoröldruckregelung, mechanisch |
| 0x30C5 | 0x30C5 Motorölpumpe, mechanisch: Motoröldruck |
| 0x30C6 | 0x30C6 Motoröldrucksensor, Plausibilität |
| 0x30C7 | 0x30C7 Motoröldruckregelung |
| 0x30C9 | 0x30C9 Motorölpumpe, Ansteuerung |
| 0x30CA | 0x30CA Schubumluftventil, Ansteuerung |
| 0x30CF | 0x30CF Wastegate, Ansteuerung |
| 0x30D0 | 0x30D0 Wastegate 2, Ansteuerung |
| 0x30D6 | 0x30D6 Stickoxidsensor, Plausibilität |
| 0x30D8 | 0x30D8 Stickoxidsensor, Sensorvergiftung |
| 0x30DA | 0x30DA Stickoxidsensor, Signal |
| 0x30DC | 0x30DC Stickoxidsenor, Beheizung |
| 0x30DE | 0x30DE Stickoxidsensor - Lambdasonde vor Kat, Korrelation |
| 0x30E0 | 0x30E0 Stickoxidsensor, Offset |
| 0x30E2 | 0x30E2 Stickoxidsensor, Schubprüfung |
| 0x30E4 | 0x30E4 Stickoxidsensor, Alterung |
| 0x30E6 | 0x30E6 Stickoxidsensor, Dynamik |
| 0x30E9 | 0x30E9 Stickoxidkatalysator, Alterung |
| 0x30EA | 0x30EA DeNox-Katalysator, verschwefelt |
| 0x30ED | 0x30ED Superklopfen Zylinder 1 |
| 0x30EE | 0x30EE Superklopfen Zylinder 2 |
| 0x30EF | 0x30EF Superklopfen Zylinder 3 |
| 0x30F0 | 0x30F0 Superklopfen Zylinder 4 |
| 0x30F1 | 0x30F1 Superklopfen Zylinder 5 |
| 0x30F2 | 0x30F2 Superklopfen Zylinder 6 |
| 0x30FC | 0x30FC Ladedruckregelung, Ladedruck zu niedrig: Dichtheit |
| 0x30FE | 0x30FE Ladedruckregelung, Ladedruck zu hoch |
| 0x30FF | 0x30FF Ladedruckregelung, Ladedruck zu niedrig |
| 0x3100 | 0x3100 Ladedruckregelung, Abschaltung  |
| 0x3104 | 0x3104 Laufunruhe, Schichtladebetrieb |
| 0x3105 | 0x3105 Laufunruhe, Schichtladebetrieb: Warmlaufphase |
| 0x3179 | 0x3179 PT-CAN, Botschaft (Radgeschwindigkeit, 0xCE) |
| 0xCD87 | 0xCD87 PT-CAN Kommunikationsfehler |
| 0xCD8B | 0xCD8B Local-CAN Kommunikationsfehler |
| 0xCD94 | 0xCD94 Botschaft (Außentemperatur/Relativzeit, 310) |
| 0xCD95 | 0xCD95 Botschaft (Bedienung FGR / ACC, 194) |
| 0xCD96 | 0xCD96 Botschaft (Drehmomentanforderung ACC, B7) |
| 0xCD97 | 0xCD97 Botschaft (Drehmomentanforderung AFS, B1) |
| 0xCD98 | 0xCD98 Botschaft (Drehmomentanforderung DSC, B6) |
| 0xCD99 | 0xCD99 Botschaft (Drehmomentanforderung EGS, B5) |
| 0xCD9A | 0xCD9A Botschaft (Drehmomentanforderung SMG, BD) |
| 0xCD9B | 0xCD9B Botschaft (Fahrzeugmodus, 315) |
| 0xCD9C | 0xCD9C Botschaft (Geschwindigkeit, 1A0) |
| 0xCD9D | 0xCD9D Botschaft (Getriebedaten, BA) |
| 0xCD9E | 0xCD9E Botschaft (Getriebedaten 2, 1A2) |
| 0xCD9F | 0xCD9F Botschaft (Kilometerstand/Reichweite, 330) |
| 0xCDA0 | 0xCDA0 Botschaft (Klemmenstatus, 130) |
| 0xCDA1 | 0xCDA1 Botschaft (Lenkradwinkel, C4) |
| 0xCDA2 | 0xCDA2 Botschaft (Powermanagement Batteriespannung, 3B4) |
| 0xCDA3 | 0xCDA3 Botschaft (Powermanagement Ladespannung, 334) |
| 0xCDA4 | 0xCDA4 Botschaft (Status ARS-Modul, 1AC) |
| 0xCDA5 | 0xCDA5 Botschaft (Status DSC, 19E) |
| 0xCDA6 | 0xCDA6 Botschaft (Status Elektrische Kraftstoffpumpe, 335) |
| 0xCDA7 | 0xCDA7 Botschaft (Status Rückwärtsgang, 3B0) |
| 0xCDA8 | 0xCDA8 Botschaft (Status KOMBI, 1B4) |
| 0xCDA9 | 0xCDA9 Botschaft (Wärmestrom/Lastmoment Klimaanlage, 1B5) |
| 0xCDAA | 0xCDAA Botschaft (Status Crashabschaltung EKP, 135) |
| 0xCDAB | 0xCDAB Botschaft (Lampenzustand,  21A) |
| 0xCDAC | 0xCDAC Botschaft (Status Wasserventil,  3B5) |
| 0xCDAD | 0xCDAD Botschaft (Anforderung Radmoment Antriebstrang,  BF) |
| 0xCDAE | 0xCDAE Botschaft (Uhrzeit/Datum, 2F8) |
| 0xCDAF | 0xCDAF Botschaft (Status Anhänger, 2E4) |
| 0xCDB0 | 0xCDB0 Botschaft (Anzeige Getriebedaten, 1D2) |
| 0xCDB1 | 0xCDB1 Botschaft (Status Zentralveriegelung, 2FC) |
| 0xCDB3 | 0xCDB3 Botschaft (Drehmomentanforderung Lenkung, B9) |
| 0xCDB4 | 0xCDB4 Botschaft (Getriebedaten 3, 3B1) fehlt |
| 0xCDB5 | 0xCDB5 PT-CAN Kommunikationsfehler |
| 0xCDB8 | 0xCDB8 Botschaft (Drehmomentanforderung DKG, B8) |
| 0xCDB9 | 0xCDB9 Botschaft (Status EMF, 201) |
| 0xCDBA | 0xCDBA Botschaft (Stellanforderung EMF, 1A7) |
| 0xCDBD | 0xCDBD PT-CAN, Botschaft (Bedienung Taster M-Drive, 0x1D9) |
| 0xCDBE | 0xCDBE Botschaft, (Sollmomentanforderung, BB ) |
| 0xCDC2 | 0xCDC2 Botschaft (Status Anforderung EMF, 1FDH) |
| 0xCDC3 | 0xCDC3 Botschaft (Status DKG, 37D) |
| 0xFFFF | unbekannter Fehlerort |

### IUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x0000 | 0x58FF | 0x58FF | 0x58FF | 0x58FF |
| 0x29CC | 0x5824 | 0x58F0 | 0x583C | 0x586D |
| 0x29CD | 0x581F | 0x58E5 | 0x5811 | 0x5806 |
| 0x29CE | 0x581F | 0x58E5 | 0x5811 | 0x5806 |
| 0x29CF | 0x581F | 0x58E5 | 0x5811 | 0x5806 |
| 0x29D0 | 0x581F | 0x58E5 | 0x5811 | 0x5808 |
| 0x29D1 | 0x581F | 0x58E5 | 0x5811 | 0x5808 |
| 0x29D2 | 0x581F | 0x58E5 | 0x5811 | 0x5808 |
| 0x29D9 | 0x58F0 | 0x586D | 0x5834 | 0x583B |
| 0x29DA | 0x5811 | 0x583C | 0x58F8 | 0x58F9 |
| 0x29DB | 0x5811 | 0x581F | 0x5818 | 0x583C |
| 0x29DC | 0x581F | 0x5818 | 0x5811 | 0x583B |
| 0x29E0 | 0x580C | 0x580B | 0x5813 | 0x58E0 |
| 0x29E1 | 0x580C | 0x580B | 0x5813 | 0x58E0 |
| 0x29E2 | 0x5811 | 0x58F0 | 0x58F4 | 0x58EF |
| 0x29E5 | 0x580C | 0x580B | 0x5813 | 0x58E0 |
| 0x29E6 | 0x580C | 0x580B | 0x5813 | 0x58E0 |
| 0x29F1 | 0x58F0 | 0x58F2 | 0x5855 | 0x5856 |
| 0x29F2 | 0x58F0 | 0x5811 | 0x58F2 | 0x58BA |
| 0x29F3 | 0x5811 | 0x58F4 | 0x58F3 | 0x583B |
| 0x29F4 | 0x5811 | 0x5818 | 0x581F | 0x581E |
| 0x29F5 | 0x5811 | 0x5818 | 0x581F | 0x581E |
| 0x29F6 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x29F7 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2A0C | 0x580C | 0x58F7 | 0x580B | 0x58E2 |
| 0x2A0D | 0x58FC | 0x58F7 | 0x583C | 0x58FD |
| 0x2A0E | 0x58FC | 0x58F7 | 0x583C | 0x58FD |
| 0x2A0F | 0x58FC | 0x58F7 | 0x583C | 0x58FD |
| 0x2A10 | 0x58FC | 0x58F7 | 0x58E4 | 0x587C |
| 0x2A12 | 0x5834 | 0x5874 | 0x587C | 0x583C |
| 0x2A13 | 0x5834 | 0x5874 | 0x587C | 0x583C |
| 0x2A15 | 0x583B | 0x5859 | 0x585A | 0x588D |
| 0x2A16 | 0x583B | 0x5859 | 0x585B | 0x588D |
| 0x2A17 | 0x583B | 0x5859 | 0x5867 | 0x5824 |
| 0x2A18 | 0x5834 | 0x5874 | 0x587C | 0x583C |
| 0x2A19 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A1A | 0x581F | 0x5818 | 0x5811 | 0x584D |
| 0x2A1B | 0x583B | 0x5859 | 0x585B | 0x588D |
| 0x2A1C | 0x580E | 0x5816 | 0x5839 | 0x5861 |
| 0x2A22 | 0x580E | 0x5816 | 0x5839 | 0x5861 |
| 0x2A26 | 0x580D | 0x5811 | 0x583C | 0x587C |
| 0x2A27 | 0x580D | 0x5811 | 0x583C | 0x587C |
| 0x2A29 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2A2B | 0x580C | 0x580B | 0x5813 | 0x58E0 |
| 0x2A2C | 0x580C | 0x580B | 0x5813 | 0x58E0 |
| 0x2A2D | 0x58F3 | 0x5811 | 0x583C | 0x58BA |
| 0x2A78 | 0x580C | 0x5813 | 0x581C | 0x581D |
| 0x2A79 | 0x580C | 0x5813 | 0x581A | 0x581B |
| 0x2A7A | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x2A7C | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x2A80 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A82 | 0x5811 | 0x581A | 0x581B | 0x581F |
| 0x2A85 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A87 | 0x5811 | 0x581C | 0x581D | 0x581F |
| 0x2A94 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A95 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A96 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A97 | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2A98 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2A99 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2A9A | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2A9B | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2A9E | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2A9F | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2AA0 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2AA1 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2AA2 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2AA3 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2AA4 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2AA5 | 0x5811 | 0x5832 | 0x5822 | 0x583C |
| 0x2AA8 | 0x5811 | 0x580D | 0x583C | 0x587C |
| 0x2AA9 | 0x5811 | 0x580D | 0x583C | 0x587C |
| 0x2AAA | 0x5811 | 0x581F | 0x5832 | 0x587C |
| 0x2AAB | 0x583C | 0x580C | 0x5818 | 0x5824 |
| 0x2AAC | 0x583C | 0x580C | 0x5818 | 0x5824 |
| 0x2AAD | 0x5832 | 0x583C | 0x587C | 0x58AF |
| 0x2AAE | 0x5832 | 0x583C | 0x587C | 0x58AF |
| 0x2AAF | 0x58F3 | 0x5811 | 0x583C | 0x58BA |
| 0x2AB2 | 0x5811 | 0x5821 | 0x587C | 0x583C |
| 0x2AB3 | 0x5811 | 0x5821 | 0x587C | 0x583C |
| 0x2AB4 | 0x5811 | 0x5821 | 0x587C | 0x583C |
| 0x2AB5 | 0x5811 | 0x5821 | 0x587C | 0x583C |
| 0x2AB6 | 0x5811 | 0x5821 | 0x587C | 0x583C |
| 0x2ABC | 0x5811 | 0x58DD | 0x5858 | 0x587C |
| 0x2ABD | 0x5834 | 0x580B | 0x58DD | 0x58DE |
| 0x2AC6 | 0x5811 | 0x580D | 0x583C | 0x587C |
| 0x2ACA | 0x5811 | 0x5832 | 0x583C | 0x587C |
| 0x2ACB | 0x588B | 0x584A | 0x587C | 0x583C |
| 0x2ACC | 0x5843 | 0x584A | 0x587C | 0x583C |
| 0x2AD0 | 0x5832 | 0x5881 | 0x587C | 0x583C |
| 0x2ADF | 0x5811 | 0x5812 | 0x5813 | 0x5814 |
| 0x2AE0 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2AE2 | 0x580C | 0x5805 | 0x5817 | 0x5815 |
| 0x2AE4 | 0x5824 | 0x583A | 0x588B | 0x587C |
| 0x2AEC | 0x58E3 | 0x58D1 | 0x5849 | 0x584B |
| 0x2AED | 0x584A | 0x5832 | 0x581F | 0x588B |
| 0x2AF0 | 0x5811 | 0x5853 | 0x5883 | 0x58A2 |
| 0x2AF2 | 0x5811 | 0x5853 | 0x5883 | 0x58A2 |
| 0x2AF4 | 0x5811 | 0x5853 | 0x5883 | 0x58A2 |
| 0x2AF6 | 0x5811 | 0x5853 | 0x5883 | 0x58A2 |
| 0x2AFB | 0x5810 | 0x5832 | 0x5853 | 0x58A4 |
| 0x2AFE | 0x58A4 | 0x58A1 | 0x58A6 | 0x58A5 |
| 0x2B00 | 0x588B | 0x580C | 0x583C | 0x587C |
| 0x2B05 | 0x5810 | 0x5832 | 0x5853 | 0x58A4 |
| 0x2B06 | 0x5810 | 0x5832 | 0x5853 | 0x58A4 |
| 0x2B07 | 0x5810 | 0x5832 | 0x5853 | 0x58A4 |
| 0x2B08 | 0x581F | 0x5832 | 0x586A | 0x58A4 |
| 0x2B09 | 0x581F | 0x5832 | 0x586A | 0x58A4 |
| 0x2B0A | 0x581F | 0x5832 | 0x586A | 0x58A4 |
| 0x2B0B | 0x581F | 0x5832 | 0x586A | 0x58A4 |
| 0x2B28 | 0x583B | 0x5811 | 0x585B | 0x588D |
| 0x2B29 | 0x583B | 0x5811 | 0x5867 | 0x5824 |
| 0x2B2C | 0x5811 | 0x581F | 0x58EF | 0x58F3 |
| 0x2B3A | 0x5811 | 0x583B | 0x5859 | 0x585A |
| 0x2B3B | 0x5811 | 0x583B | 0x5859 | 0x585A |
| 0x2B3C | 0x5811 | 0x583B | 0x5859 | 0x585A |
| 0x2B3D | 0x5811 | 0x583B | 0x5859 | 0x585A |
| 0x2B48 | 0x580C | 0x580B | 0x5813 | 0x58E0 |
| 0x2B49 | 0x580C | 0x580B | 0x5813 | 0x58E0 |
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
| 0x2C39 | 0x5871 | 0x5845 | 0x5830 | 0x588C |
| 0x2C3A | 0x5873 | 0x5848 | 0x5831 | 0x588F |
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
| 0x2C6D | 0x5896 | 0x585C | 0x5810 | 0x5849 |
| 0x2C6E | 0x5897 | 0x585D | 0x5810 | 0x584B |
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
| 0x2C87 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2C9C | 0x588C | 0x588B | 0x5815 | 0x5827 |
| 0x2C9D | 0x588F | 0x588B | 0x5815 | 0x5828 |
| 0x2C9E | 0x5896 | 0x585C | 0x5849 | 0x5829 |
| 0x2C9F | 0x5897 | 0x585D | 0x584B | 0x582A |
| 0x2CA6 | 0x5894 | 0x5815 | 0x5827 | 0x588C |
| 0x2CA7 | 0x5895 | 0x5815 | 0x5828 | 0x588F |
| 0x2CA8 | 0x5896 | 0x585C | 0x5829 | 0x5849 |
| 0x2CA9 | 0x5897 | 0x585D | 0x582A | 0x584B |
| 0x2CAA | 0x5894 | 0x5815 | 0x5827 | 0x5845 |
| 0x2CAB | 0x5895 | 0x5815 | 0x5828 | 0x5848 |
| 0x2CEC | 0x5858 | 0x583F | 0x5843 | 0x583C |
| 0x2CED | 0x5858 | 0x583F | 0x5843 | 0x583C |
| 0x2CEE | 0x5858 | 0x583F | 0x5843 | 0x583C |
| 0x2CEF | 0x5858 | 0x583F | 0x587C | 0x583C |
| 0x2CF6 | 0x58AB | 0x58E4 | 0x584C | 0x584E |
| 0x2CF7 | 0x58AC | 0x58E4 | 0x584C | 0x584E |
| 0x2CF9 | 0x584E | 0x584C | 0x5843 | 0x583C |
| 0x2CFA | 0x584E | 0x584C | 0x5843 | 0x583C |
| 0x2CFB | 0x584E | 0x584C | 0x58B0 | 0x583C |
| 0x2CFC | 0x584E | 0x584C | 0x5843 | 0x583C |
| 0x2CFD | 0x584E | 0x584C | 0x5843 | 0x583C |
| 0x2CFE | 0x584E | 0x584C | 0x5843 | 0x583C |
| 0x2D06 | 0x580C | 0x5812 | 0x5858 | 0x5889 |
| 0x2D07 | 0x584E | 0x584C | 0x5843 | 0x583C |
| 0x2D09 | 0x5811 | 0x581E | 0x581F | 0x587C |
| 0x2D0B | 0x588B | 0x580C | 0x583C | 0x587C |
| 0x2D0C | 0x588B | 0x580C | 0x583C | 0x587C |
| 0x2D0E | 0x584F | 0x5811 | 0x5858 | 0x581E |
| 0x2D0F | 0x58AE | 0x5811 | 0x5858 | 0x581E |
| 0x2D15 | 0x5812 | 0x5818 | 0x580C | 0x580F |
| 0x2D16 | 0x5812 | 0x5818 | 0x580C | 0x580F |
| 0x2D18 | 0x5811 | 0x58DD | 0x5806 | 0x5807 |
| 0x2D1B | 0x5846 | 0x5847 | 0x5843 | 0x583C |
| 0x2D1C | 0x5846 | 0x5847 | 0x5854 | 0x583C |
| 0x2D1D | 0x5843 | 0x5854 | 0x5846 | 0x583C |
| 0x2D1E | 0x5843 | 0x5854 | 0x5847 | 0x583C |
| 0x2D1F | 0x5843 | 0x5854 | 0x5846 | 0x5847 |
| 0x2D20 | 0x5846 | 0x5847 | 0x5843 | 0x5814 |
| 0x2D25 | 0x5811 | 0x58DD | 0x5806 | 0x5807 |
| 0x2D27 | 0x5812 | 0x5818 | 0x580C | 0x580F |
| 0x2D28 | 0x580B | 0x5811 | 0x581F | 0x587C |
| 0x2D29 | 0x5811 | 0x5826 | 0x580B | 0x5813 |
| 0x2D2A | 0x581E | 0x581F | 0x580B | 0x583C |
| 0x2D2B | 0x5834 | 0x580B | 0x58DD | 0x58DE |
| 0x2D2E | 0x5811 | 0x5826 | 0x580B | 0x5813 |
| 0x2D33 | 0x580B | 0x5811 | 0x581F | 0x587C |
| 0x2D35 | 0x581E | 0x581F | 0x580B | 0x583C |
| 0x2D50 | 0x58C4 | 0x580D | 0x58B7 | 0x5881 |
| 0x2D52 | 0x5811 | 0x58B8 | 0x58C0 | 0x5832 |
| 0x2D53 | 0x58C5 | 0x58C6 | 0x58DB | 0x58DC |
| 0x2D55 | 0x58C4 | 0x58B9 | 0x58E7 | 0x58E8 |
| 0x2D56 | 0x58C3 | 0x58C7 | 0x58C8 | 0x58CA |
| 0x2D57 | 0x5881 | 0x58BF | 0x5893 | 0x583C |
| 0x2D58 | 0x58D4 | 0x58D6 | 0x58CD | 0x5832 |
| 0x2D59 | 0x58B8 | 0x58CF | 0x58D0 | 0x5875 |
| 0x2D5A | 0x5811 | 0x5832 | 0x58CF | 0x58D1 |
| 0x2D5C | 0x58B8 | 0x5847 | 0x5854 | 0x583C |
| 0x2D5F | 0x5867 | 0x583D | 0x583E | 0x5840 |
| 0x2D60 | 0x58C2 | 0x5818 | 0x580A | 0x58A7 |
| 0x2D61 | 0x5858 | 0x58B8 | 0x584E | 0x584C |
| 0x2D64 | 0x58FE | 0x582E | 0x582F | 0x589D |
| 0x2D67 | 0x58D9 | 0x58DA | 0x58AA | 0x58A9 |
| 0x2DB5 | 0x580D | 0x587A | 0x5832 | 0x587C |
| 0x2DB6 | 0x580D | 0x587A | 0x5832 | 0x587C |
| 0x2DB7 | 0x580D | 0x587A | 0x5832 | 0x587C |
| 0x2DBE | 0x580D | 0x5811 | 0x5832 | 0x587C |
| 0x2DC0 | 0x5811 | 0x5813 | 0x5832 | 0x5891 |
| 0x2DC3 | 0x5811 | 0x5832 | 0x583C | 0x587C |
| 0x2DC5 | 0x5811 | 0x582B | 0x583C | 0x587C |
| 0x2DC8 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2DC9 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2DE1 | 0x580E | 0x5816 | 0x5839 | 0x5861 |
| 0x2DE2 | 0x580E | 0x5816 | 0x5839 | 0x5861 |
| 0x2DE4 | 0x580E | 0x5816 | 0x5839 | 0x5861 |
| 0x2DE5 | 0x580E | 0x5816 | 0x5839 | 0x5861 |
| 0x2DEB | 0x5811 | 0x586A | 0x5898 | 0x583C |
| 0x2DEC | 0x5868 | 0x5869 | 0x586A | 0x58A8 |
| 0x2DED | 0x586B | 0x586C | 0x586E | 0x583C |
| 0x2DF0 | 0x580C | 0x583C | 0x5898 | 0x58FF |
| 0x2DF1 | 0x580C | 0x583C | 0x5898 | 0x58FF |
| 0x2E18 | 0x5805 | 0x583C | 0x5811 | 0x58B1 |
| 0x2E19 | 0x5805 | 0x583C | 0x5811 | 0x58B5 |
| 0x2E1A | 0x5805 | 0x583C | 0x5811 | 0x58B3 |
| 0x2E1B | 0x5805 | 0x583C | 0x5811 | 0x58B6 |
| 0x2E1C | 0x5805 | 0x583C | 0x5811 | 0x58B2 |
| 0x2E1D | 0x5805 | 0x583C | 0x5811 | 0x58B4 |
| 0x2E30 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x2E31 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x2E32 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x2E33 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x2E34 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x2E35 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x2E61 | 0x5889 | 0x588A | 0x5811 | 0x5814 |
| 0x2E62 | 0x5804 | 0x5805 | 0x580C | 0x58EF |
| 0x2E68 | 0x5811 | 0x5812 | 0x5883 | 0x5885 |
| 0x2E69 | 0x5811 | 0x5812 | 0x5886 | 0x5888 |
| 0x2E74 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2E75 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2E77 | 0x5805 | 0x583C | 0x5811 | 0x5832 |
| 0x2E7A | 0x5811 | 0x580E | 0x581F | 0x5804 |
| 0x2E7B | 0x5811 | 0x580E | 0x581F | 0x5804 |
| 0x2E7C | 0x5811 | 0x583C | 0x5867 | 0x587C |
| 0x2E7F | 0x5811 | 0x5814 | 0x5832 | 0x580D |
| 0x2E81 | 0x5805 | 0x58E9 | 0x58EA | 0x58EB |
| 0x2E82 | 0x5805 | 0x58E9 | 0x58EC | 0x58ED |
| 0x2E83 | 0x5805 | 0x58E9 | 0x58EC | 0x58EE |
| 0x2E84 | 0x5811 | 0x5805 | 0x587C | 0x583C |
| 0x2E85 | 0x5811 | 0x5805 | 0x587C | 0x583C |
| 0x2E8B | 0x587C | 0x5824 | 0x586A | 0x583C |
| 0x2E8C | 0x587C | 0x5824 | 0x586A | 0x583C |
| 0x2E8D | 0x587C | 0x5824 | 0x586A | 0x583C |
| 0x2E8E | 0x587C | 0x5824 | 0x586A | 0x583C |
| 0x2E96 | 0x588B | 0x5832 | 0x587C | 0x583C |
| 0x2E97 | 0x5844 | 0x5887 | 0x5898 | 0x5815 |
| 0x2E98 | 0x588B | 0x5835 | 0x5842 | 0x5815 |
| 0x2E9F | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2EA1 | 0x5811 | 0x580D | 0x583C | 0x587C |
| 0x2EAE | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2EAF | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2ECC | 0x588B | 0x5835 | 0x5842 | 0x5815 |
| 0x2ECD | 0x5857 | 0x5887 | 0x5898 | 0x5815 |
| 0x2ECE | 0x5857 | 0x5887 | 0x5898 | 0x5815 |
| 0x2ECF | 0x5844 | 0x5887 | 0x5857 | 0x5813 |
| 0x2ED0 | 0x5844 | 0x5887 | 0x5857 | 0x5813 |
| 0x2ED1 | 0x588B | 0x5887 | 0x5898 | 0x5815 |
| 0x2ED2 | 0x5872 | 0x5835 | 0x5842 | 0x5815 |
| 0x2ED3 | 0x588B | 0x5835 | 0x5842 | 0x5815 |
| 0x2EE0 | 0x5850 | 0x581F | 0x5824 | 0x581E |
| 0x2EE1 | 0x581F | 0x5820 | 0x583C | 0x58EC |
| 0x2EE2 | 0x581F | 0x5820 | 0x5824 | 0x5882 |
| 0x2EE3 | 0x581F | 0x5820 | 0x5824 | 0x587F |
| 0x2EE6 | 0x5823 | 0x5882 | 0x583A | 0x5833 |
| 0x2EEA | 0x5852 | 0x5820 | 0x5824 | 0x581E |
| 0x2EEB | 0x5820 | 0x581F | 0x5824 | 0x58EA |
| 0x2EEC | 0x5820 | 0x5882 | 0x581F | 0x5832 |
| 0x2EF4 | 0x5824 | 0x5882 | 0x5820 | 0x5811 |
| 0x2EF5 | 0x581F | 0x5820 | 0x5832 | 0x583C |
| 0x2EF7 | 0x581F | 0x5820 | 0x5832 | 0x583C |
| 0x2EF8 | 0x581F | 0x5820 | 0x5832 | 0x583C |
| 0x2EFE | 0x5820 | 0x587F | 0x5832 | 0x583C |
| 0x2EFF | 0x5824 | 0x587F | 0x583C | 0x5820 |
| 0x2F08 | 0x5851 | 0x581E | 0x5824 | 0x583C |
| 0x2F09 | 0x581E | 0x583A | 0x5824 | 0x581F |
| 0x2F0A | 0x5851 | 0x581E | 0x5824 | 0x58D5 |
| 0x2F0C | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2F0D | 0x5811 | 0x580D | 0x583C | 0x5880 |
| 0x2F10 | 0x583C | 0x5824 | 0x58D2 | 0x58D3 |
| 0x2F11 | 0x583C | 0x5824 | 0x58D2 | 0x58D3 |
| 0x2F12 | 0x5811 | 0x580D | 0x581F | 0x583C |
| 0x2F13 | 0x5851 | 0x581E | 0x5824 | 0x583C |
| 0x2F15 | 0x581E | 0x583A | 0x5824 | 0x581F |
| 0x2F30 | 0x581E | 0x5813 | 0x5824 | 0x581F |
| 0x2F49 | 0x5811 | 0x583C | 0x587C | 0x5821 |
| 0x2F4A | 0x5811 | 0x583C | 0x587C | 0x5821 |
| 0x2F4B | 0x5811 | 0x583C | 0x587C | 0x5821 |
| 0x2F4C | 0x5811 | 0x583C | 0x587C | 0x5821 |
| 0x2F4E | 0x5811 | 0x5832 | 0x583C | 0x5881 |
| 0x2F4F | 0x5811 | 0x5832 | 0x587C | 0x583C |
| 0x2F52 | 0x580D | 0x5811 | 0x5815 | 0x58E5 |
| 0x2F53 | 0x580D | 0x5811 | 0x5815 | 0x58E5 |
| 0x2F54 | 0x580D | 0x5811 | 0x5815 | 0x58E5 |
| 0x2F55 | 0x580D | 0x5811 | 0x5815 | 0x58E5 |
| 0x2F56 | 0x5811 | 0x5832 | 0x58D1 | 0x5881 |
| 0x2F57 | 0x5811 | 0x5832 | 0x58D1 | 0x5881 |
| 0x2F58 | 0x588B | 0x584A | 0x5853 | 0x583C |
| 0x2F5B | 0x5811 | 0x5832 | 0x58D1 | 0x5881 |
| 0x2F5C | 0x5811 | 0x5832 | 0x58D1 | 0x5881 |
| 0x2F5D | 0x5811 | 0x5832 | 0x58D1 | 0x5881 |
| 0x2F5E | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2F5F | 0x5811 | 0x5832 | 0x58D1 | 0x5881 |
| 0x2F60 | 0x580C | 0x5891 | 0x5881 | 0x588B |
| 0x2F63 | 0x58CE | 0x58B7 | 0x587C | 0x584A |
| 0x2F64 | 0x58CE | 0x58B7 | 0x587C | 0x584A |
| 0x2F67 | 0x5811 | 0x580D | 0x5832 | 0x5818 |
| 0x2F6C | 0x580D | 0x588B | 0x58AD | 0x583C |
| 0x2F71 | 0x5811 | 0x581E | 0x5821 | 0x580D |
| 0x2F76 | 0x5821 | 0x5834 | 0x5870 | 0x587C |
| 0x2F77 | 0x5834 | 0x5870 | 0x5833 | 0x5824 |
| 0x2F79 | 0x5834 | 0x580B | 0x58DD | 0x58DE |
| 0x2F7A | 0x5834 | 0x580B | 0x58DD | 0x58DE |
| 0x2F7B | 0x5811 | 0x5822 | 0x581F | 0x583C |
| 0x2F7E | 0x5811 | 0x5833 | 0x5882 | 0x5823 |
| 0x2F7F | 0x5811 | 0x5833 | 0x5882 | 0x5823 |
| 0x2F80 | 0x58A8 | 0x581F | 0x587C | 0x583C |
| 0x2F81 | 0x5811 | 0x5832 | 0x5882 | 0x5823 |
| 0x2F82 | 0x5811 | 0x5832 | 0x5882 | 0x5823 |
| 0x2F83 | 0x5811 | 0x5832 | 0x5882 | 0x5823 |
| 0x2F84 | 0x5811 | 0x5832 | 0x5882 | 0x5823 |
| 0x2F85 | 0x5841 | 0x5821 | 0x5824 | 0x583C |
| 0x2F8F | 0x58B7 | 0x580D | 0x5814 | 0x58CE |
| 0x2F91 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2F94 | 0x5811 | 0x580D | 0x581F | 0x583C |
| 0x2F99 | 0x5824 | 0x5833 | 0x5882 | 0x5820 |
| 0x2F9A | 0x5824 | 0x5833 | 0x581E | 0x587C |
| 0x2F9E | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2FA3 | 0x5811 | 0x583C | 0x587C | 0x588B |
| 0x2FA4 | 0x5811 | 0x583C | 0x587C | 0x588B |
| 0x2FAB | 0x588B | 0x580C | 0x583C | 0x587C |
| 0x2FBC | 0x58F2 | 0x58F0 | 0x58E4 | 0x587C |
| 0x2FBD | 0x58F0 | 0x5811 | 0x58F2 | 0x58BA |
| 0x2FBE | 0x58F0 | 0x58F2 | 0x5811 | 0x5832 |
| 0x2FBF | 0x58F0 | 0x58F2 | 0x583C | 0x58F3 |
| 0x2FC0 | 0x58F0 | 0x5811 | 0x58F2 | 0x58BA |
| 0x2FC3 | 0x58F0 | 0x5811 | 0x58F2 | 0x58BA |
| 0x2FC6 | 0x580D | 0x583C | 0x5811 | 0x5832 |
| 0x2FC7 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x2FCA | 0x5876 | 0x5877 | 0x58F3 | 0x5882 |
| 0x2FDA | 0x5811 | 0x58F0 | 0x5825 | 0x5833 |
| 0x2FDB | 0x58F0 | 0x5811 | 0x5882 | 0x5825 |
| 0x2FDC | 0x5876 | 0x5877 | 0x5815 | 0x5882 |
| 0x2FE4 | 0x580D | 0x5811 | 0x5815 | 0x5881 |
| 0x2FE5 | 0x580D | 0x5811 | 0x5815 | 0x5881 |
| 0x2FE6 | 0x580D | 0x5811 | 0x5815 | 0x5881 |
| 0x2FE7 | 0x580D | 0x5811 | 0x5815 | 0x5881 |
| 0x3070 | 0x580D | 0x5811 | 0x583C | 0x587C |
| 0x3071 | 0x580D | 0x5811 | 0x583C | 0x587C |
| 0x3072 | 0x580D | 0x5811 | 0x583C | 0x587C |
| 0x3073 | 0x580D | 0x5811 | 0x583C | 0x587C |
| 0x3074 | 0x580D | 0x5811 | 0x583C | 0x587C |
| 0x3075 | 0x580D | 0x5811 | 0x583C | 0x587C |
| 0x307C | 0x580D | 0x5811 | 0x583C | 0x587C |
| 0x307D | 0x580D | 0x5811 | 0x583C | 0x587C |
| 0x307E | 0x580D | 0x5811 | 0x583C | 0x587C |
| 0x307F | 0x580D | 0x5811 | 0x583C | 0x587C |
| 0x3080 | 0x580D | 0x5811 | 0x583C | 0x587C |
| 0x3081 | 0x580D | 0x5811 | 0x583C | 0x587C |
| 0x30A0 | 0x5805 | 0x583C | 0x5811 | 0x58B1 |
| 0x30A1 | 0x5805 | 0x583C | 0x5811 | 0x58B5 |
| 0x30A2 | 0x5805 | 0x583C | 0x5811 | 0x58B3 |
| 0x30A3 | 0x5805 | 0x583C | 0x5811 | 0x58B6 |
| 0x30A4 | 0x5805 | 0x583C | 0x5811 | 0x58B2 |
| 0x30A5 | 0x5805 | 0x583C | 0x5811 | 0x58B4 |
| 0x30AC | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x30AD | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x30AE | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x30AF | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x30B0 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x30B1 | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x30BA | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x30BB | 0x5811 | 0x581F | 0x5832 | 0x583C |
| 0x30BE | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x30C0 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x30C1 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x30C2 | 0x5811 | 0x5822 | 0x586F | 0x583C |
| 0x30C3 | 0x580D | 0x5811 | 0x5822 | 0x586F |
| 0x30C4 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x30C5 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x30C6 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x30C7 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x30C9 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x30CA | 0x5811 | 0x581F | 0x587C | 0x583C |
| 0x30CF | 0x5811 | 0x581F | 0x583C | 0x587C |
| 0x30D0 | 0x5811 | 0x581F | 0x583C | 0x587C |
| 0x30D6 | 0x58A2 | 0x58A1 | 0x58A3 | 0x5810 |
| 0x30D8 | 0x58A3 | 0x58A1 | 0x5889 | 0x58A2 |
| 0x30DA | 0x58A4 | 0x5836 | 0x58A2 | 0x5810 |
| 0x30DC | 0x58A4 | 0x588B | 0x580F | 0x586A |
| 0x30DE | 0x58A2 | 0x5889 | 0x588A | 0x58A3 |
| 0x30E0 | 0x5810 | 0x58A6 | 0x589E | 0x58A5 |
| 0x30E2 | 0x5849 | 0x58A1 | 0x58A6 | 0x58A3 |
| 0x30E4 | 0x5849 | 0x58A3 | 0x584B | 0x5810 |
| 0x30E6 | 0x58A2 | 0x584B | 0x58A1 | 0x5810 |
| 0x30E9 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0x30EA | 0x58A5 | 0x58A6 | 0x589E | 0x58A0 |
| 0x30ED | 0x5811 | 0x5813 | 0x581E | 0x581F |
| 0x30EE | 0x5811 | 0x5813 | 0x581E | 0x581F |
| 0x30EF | 0x5811 | 0x5813 | 0x581E | 0x581F |
| 0x30F0 | 0x5811 | 0x5813 | 0x581E | 0x581F |
| 0x30F1 | 0x5811 | 0x5813 | 0x581E | 0x581F |
| 0x30F2 | 0x5811 | 0x5813 | 0x581E | 0x581F |
| 0x30FC | 0x5834 | 0x5824 | 0x58DD | 0x580C |
| 0x30FE | 0x5834 | 0x5824 | 0x58DD | 0x580C |
| 0x30FF | 0x5834 | 0x5824 | 0x58DD | 0x580C |
| 0x3100 | 0x5834 | 0x5824 | 0x58DD | 0x580C |
| 0x3104 | 0x581F | 0x5811 | 0x58D1 | 0x580D |
| 0x3105 | 0x581F | 0x5811 | 0x58D1 | 0x580D |
| 0x3179 | 0x580C | 0x580D | 0x583C | 0x587C |
| 0xCD87 | 0x5811 | 0x5832 | 0x583C | 0x587C |
| 0xCD8B | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD94 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD95 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD96 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD97 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD98 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD99 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD9A | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD9B | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD9C | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD9D | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCD9E | 0x580D | 0x583C | 0x5811 | 0x5832 |
| 0xCD9F | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA0 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA1 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA2 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA3 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA4 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA5 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA6 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA7 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA8 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDA9 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDAA | 0x580D | 0x583C | 0x5811 | 0x5832 |
| 0xCDAB | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDAC | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDAD | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDAE | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDAF | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDB0 | 0x580D | 0x583C | 0x5811 | 0x5832 |
| 0xCDB1 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDB3 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDB4 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDB5 | 0x5811 | 0x5832 | 0x583C | 0x587C |
| 0xCDB8 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDB9 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDBA | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDBD | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDBE | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDC2 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xCDC3 | 0x5811 | 0x5821 | 0x583C | 0x587C |
| 0xFFFF | 0x58FF | 0x58FF | 0x58FF | 0x58FF |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x4200 | Ansauglufttemperatur 1 | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x4201 | Umgebungsdruck | hPa | - | unsigned integer | - | 0,08291752636432648 | 1 | 0,0 |
| 0x4202 | Saugrohrdruck | hPa | - | unsigned integer | - | 0,08291752636432648 | 1 | 0,0 |
| 0x4203 | Massenstrom vom HFM | kg/h | - | unsigned integer | - | 0,03125 | 1 | 0,0 |
| 0x4204 | Umgebungstemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x4205 | Saugrohrdruck 1 / Ladedruck 1 | hPa | - | unsigned integer | - | 0,08291752636432648 | 1 | 0,0 |
| 0x4300 | Kühlwassertemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x4301 | Kühlerauslasstemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x4302 | Wasserpumpe Leistung über BSD | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4303 | Wasserpumpe Elektronik Temperatur | °C | - | unsigned char | - | 1,0 | 1 | -50,0 |
| 0x4304 | Wasserpumpe Strom | A | - | unsigned char | - | 0,5 | 1 | 0,0 |
| 0x4305 | Wasserpumpe Drehzahl Ist | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4306 | Wasserpumpe Drehzahl Soll | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4307 | Wasserpumpe Betriebsart | 0-n | - | 0xFF | _CNV_S_11_Def_ba_wm_660 | 1 | 1 | 0 |
| 0x4400 | Ölstand Mittelwert Langzeit | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x4401 | Füllstand Motoröl | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4402 | Öltemperatur | °C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4403 | Kraftstoff-Verbrauch seit letztem Service | - | - | unsigned long | - | 1,220703125E-4 | 1 | 0,0 |
| 0x4404 | km seit letztem Service | km | - | unsigned integer | - | 10,0 | 1 | 0,0 |
| 0x4405 | Ölsensor Niveau Rohwert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4406 | Ölsensor Qualität Rohwert | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4407 | Ölsensor Temperatur Rohwert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4408 | Ölsensor Temperatur | °C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4409 | Ölsensor Niveau | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x440A | Ölsensor Qualität | - | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 |
| 0x440B | Länderfaktor 1 codiert | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440C | Länderfaktor 2 codiert | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440D | Länderfaktor 1 | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440E | Länderfaktor 2 | - | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| 0x440F | Kurzmittelwert-Niveau für den Tester | mm | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| 0x4410 | Restweg aus Permittivität abgeleitet | km | - | signed integer | - | 10,0 | 1 | 0,0 |
| 0x4411 | Restweg aus Kraftstoffverbrauch abgeleitet | km | - | signed integer | - | 10,0 | 1 | 0,0 |
| 0x4412 | Öl-Alter in Monate | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4413 | aufbereitete Permittivität bei letztem Ölwechsel | - | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 |
| 0x4414 | Permittivität für Bewertung aufbereitet (extrapoliert) | - | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 |
| 0x4415 | Offset für Permittivitätskorrektur | - | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 |
| 0x4416 | zugeteilte Bonuskraftstoffmenge | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4417 | zugeteilter Permittivitätsbonus | - | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 |
| 0x4418 | Status Peilstabanzeige | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4505 | Sollwert Einlassspreizung | °CRK | - | unsigned char | - | 0,375 | 1 | 59,99999821186071 |
| 0x4506 | Nockenwellenposition Einlass | °CRK | - | unsigned integer | - | 0,375 | 1 | -95,99999713897714 |
| 0x4507 | Nockenwellenposition Auslass | °CRK | - | unsigned integer | - | 0,375 | 1 | -95,99999713897714 |
| 0x4508 | Istwert Einlassspreizung | °CRK | - | unsigned char | - | 0,375 | 1 | 59,99999821186071 |
| 0x4509 | Istwert Auslassspreizung | °CRK | - | unsigned char | - | -0,375 | 1 | -39,99999785423285 |
| 0x450A | Normspreizung Auslass | °CRK | - | signed integer | - | 0,0234375 | 1 | 0,0 |
| 0x450B | Normspreizung Einlass | °CRK | - | signed integer | - | 0,0234375 | 1 | 0,0 |
| 0x4600 | aktueller Drosselklappenwinkel | °TPS | - | unsigned integer | - | 0,007294146344065666 | 1 | 0,0 |
| 0x4601 | Drosselklappe Sollwert aus Modell | °TPS | - | unsigned integer | - | 0,007294146344065666 | 1 | 0,0 |
| 0x4602 | Generator Sollspannung über BSD | V | - | unsigned char | - | 0,10000000149011612 | 1 | 10,6 |
| 0x4603 | Chiptemperatur Generator 1 | °C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4604 | Generator Strom | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4605 | Chipversion Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4606 | Reglerversion Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4607 | Herstellercode Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4608 | Kennung Generatortyp Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4609 | Kl.87 Spannung / Versorgung DME | V | - | unsigned char | - | 0,1015624925494194 | 1 | 0,0 |
| 0x460A | Batteriespannung aktuell | V | - | unsigned integer | - | 0,014999999664723873 | 1 | 0,0 |
| 0x460B | Batteriespannung von IBS gemessen | - | - | unsigned integer | - | 2,500000118743628E-4 | 1 | 6,0 |
| 0x460C | Batteriespannung vom AD-Wandler DME | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x460D | Korrekturwert Abschaltung | - | - | signed integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x460E | Abstand zur Startfähigkeitsgrenze | - | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x460F | Batterielast | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4610 | aktuelle Position Disaklappen | % | - | unsigned integer | - | 0,003051757114008069 | 1 | 0,0 |
| 0x4611 | Sollwert E-Lüfter als PWM Wert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4612 | Erregerstrom Generator 1 | A | - | unsigned char | - | 0,125 | 1 | 0,0 |
| 0x4613 | Kopierter Wert von zum Generator gesendeter Sollspannung Generator 1 | V | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4614 | Auslastungsgrad Generator 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x4615 | Kopie begrenzter Erregerstrom Generator 1 | A | - | unsigned char | - | 0,125 | 1 | 0,0 |
| 0x4616 | Kopie Generator 1 LR Vorgabe auf Bus gelegt | s | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4617 | gefiltertes Generatormoment absolut Ausgang | Nm | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4618 | Kopie Drehzahlschwelle für LR-Funktion Generator 1 aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4619 | Bedingung BSD II Protokoll | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x461A | Nominale Generatorspannung | V | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x4700 | Status Lambdasonde betriebsbereit vor Katalysator Bank 1 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4701 | Status Lambdasonde betriebsbereit vor Katalysator Bank 2 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x4702 | Spannung Lambdasonde vor Katalysator Bank 1 mit Offsetkorrektur | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4703 | Spannung Lambdasonde vor Katalysator Bank 2 mit Offsetkorrektur | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x4704 | Lambda Sollwert Bank 1 | - | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| 0x4705 | Lambda Sollwert Bank 2 | - | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| 0x4710 | Kleinstmengenadaption kalt Injektor 1 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x4711 | Kleinstmengenadaption kalt  Injektor 5 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x4712 | Kleinstmengenadaption kalt Injektor 3 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x4713 | Kleinstmengenadaption kalt Injektor 6 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x4714 | Kleinstmengenadaption kalt Injektor 2 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x4715 | Kleinstmengenadaption kalt  Injektor 4 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x4716 | Kleinstmengenadaption warm Injektor 1 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x4717 | Kleinstmengenadaption warm Injektor 5 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x4718 | Kleinstmengenadaption warm Injektor 3 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x4719 | Kleinstmengenadaption warm Injektor 6 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x471A | Kleinstmengenadaption warm Injektor 2 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x471B | Kleinstmengenadaption warm Injektor 4 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x471C | Abstand zur nächsten Kleinstmengenadaption kalt | km | - | unsigned integer | - | 8,0 | 1 | 0,0 |
| 0x471D | Abstand zur nächsten Kleinstmengenadaption warm | km | - | unsigned integer | - | 8,0 | 1 | 0,0 |
| 0x471E | Zähler Kleinstmengenadaption kalt | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x471F | Zähler Kleinstmengenadaption warm | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x4720 | NOX-Sensor Eigendiagnosewert | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x4721 | Anzahl der erfolgten NOX-Sensor-Systemadaptionen | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4722 | km-stand bei letzter Nox-Sensor-Eigendiagnose | km | - | unsigned integer | - | 8,0 | 1 | 0,0 |
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
| 0x4850 | Anzahl misfire über Lebenszeit, Zyl. 1 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4851 | Anzahl misfire über Lebenszeit, Zyl. 5 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4852 | Anzahl misfire über Lebenszeit, Zyl. 3 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4853 | Anzahl misfire über Lebenszeit, Zyl. 6 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4854 | Anzahl misfire über Lebenszeit, Zyl. 2 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x4855 | Anzahl misfire über Lebenszeit, Zyl. 4 | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5800 | Zeit nach Start | s | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x5801 | Umgebungsdruck | kPa | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5802 | Zustand Lambdaregelung Bank 1 | 0-n | - | 0xFF | _CNV_S_5_LACO_RANGE_439 | 1 | 1 | 0 |
| 0x5803 | Zustand Lambdaregelung Bank 2 | 0-n | - | 0xFF | _CNV_S_5_LACO_RANGE_439 | 1 | 1 | 0 |
| 0x5804 | Berechneter Lastwert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5805 | Kühlmitteltemperatur OBD | °C | - | unsigned char | - | 1,0 | 1 | -40,0 |
| 0x5806 | Lambda Integrator Gruppe 1 | % | - | unsigned char | - | 0,78125 | 1 | -100,00000223517424 |
| 0x5807 | Lambda Adaption Summe mul. und add. Gruppe 1 | % | - | unsigned char | - | 0,78125 | 1 | -100,00000223517424 |
| 0x5808 | Lambda Integrator Gruppe 2 | % | - | unsigned char | - | 0,78125 | 1 | -100,00000223517424 |
| 0x5809 | Lambda Adaption Summe mul. und add. Gruppe 2 | % | - | unsigned char | - | 0,78125 | 1 | -100,00000223517424 |
| 0x580A | Mittlere Sollkraftstoffmasse | mg/stk | - | unsigned char | - | 5,44705867767334 | 1 | 0,0 |
| 0x580B | Saugrohrdruck | kPa | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x580C | Drehzahl | rpm | - | unsigned char | - | 64,0 | 1 | 0,0 |
| 0x580D | Geschwindigkeit | km/h | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x580E | Zündzeitpunkt Zylinder 1 | °CRK | - | unsigned char | - | 0,5 | 1 | -64,0 |
| 0x580F | Ansauglufttemperatur | °C | - | unsigned char | - | 1,0 | 1 | -40,0 |
| 0x5810 | Luftdurchsatz OBD | g/s | - | unsigned char | - | 2,559999942779541 | 1 | 0,0 |
| 0x5811 | Motordrehzahl | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x5812 | Luftmasse gemessen | kg/h | - | unsigned char | - | 8,0 | 1 | 0,0 |
| 0x5813 | Relative Last | % | - | signed char | - | 2,559999942779541 | 1 | 0,0 |
| 0x5814 | Fahrpedalwert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5815 | Batteriespannung | V | - | unsigned char | - | 0,25600001215934753 | 1 | 0,0 |
| 0x5816 | Lambda Setpoint | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x5817 | Umgebungstemperatur | °C | - | unsigned char | - | 1,0 | 1 | -40,0 |
| 0x5818 | Luftmasse gerechnet | mg/stk | - | unsigned char | - | 5,425863742828369 | 1 | 0,0 |
| 0x5819 | Drehzahl OBD Byte | rpm | - | unsigned char | - | 64,0 | 1 | 0,0 |
| 0x581A | Nockenwelle Einlass | °CRK | - | unsigned char | - | 0,375 | 1 | 59,99999821186071 |
| 0x581B | Nockenwelle Einlass Sollwert | °CRK | - | unsigned char | - | 0,375 | 1 | 59,99999821186071 |
| 0x581C | Nockenwelle Auslass | °CRK | - | unsigned char | - | -0,375 | 1 | -39,99999785423285 |
| 0x581D | Nockenwelle Auslass Sollwert | °CRK | - | unsigned char | - | -0,375 | 1 | -39,99999785423285 |
| 0x581E | Ansauglufttemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x581F | Motortemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5820 | Kühlmitteltemperatur Kühlerausgang | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5821 | Steuergeräte-Innentemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5822 | (Motor)-Öltemperatur | °C | - | unsigned char | - | 1,0 | 1 | -40,0 |
| 0x5823 | Zeit Motor steht | min | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x5824 | Umgebungstemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5825 | Abstellzeit | min | - | unsigned char | - | 4,0 | 1 | 0,0 |
| 0x5826 | Drosselklappe Sensor 1 | °TPS | - | unsigned char | - | 1,8673014640808105 | 1 | 0,0 |
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
| 0x5832 | Motor Status | 0-n | - | 0xFF | _CNV_S_6_RANGE_STAT_179 | 1 | 1 | 0 |
| 0x5833 | Umgebungstemperatur beim Start | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5834 | Umgebungsdruck | hPa | - | unsigned char | - | 21,226886749267578 | 1 | 0,0 |
| 0x5835 | Herstellercode Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5836 | Drehzahlgradient | rpm/s | - | signed char | - | 32,0 | 1 | 0,0 |
| 0x5837 | Status OBD-I Fehler vor Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_11_EGCP_RANGE_389 | 1 | 1 | 0 |
| 0x5838 | Status OBD-I Fehler vor Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_11_EGCP_RANGE_389 | 1 | 1 | 0 |
| 0x5839 | Status Drosselklappe Notlauf | 0-n | - | 0xFF | _CNV_S_5_RANGE_STAT_301 | 1 | 1 | 0 |
| 0x583A | Ansauglufttemperatur beim Start | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x583B | Kraftstofftank Füllstand | l | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x583C | Spannung Kl. 87 | V | - | unsigned char | - | 0,1015624925494194 | 1 | 0,0 |
| 0x583D | Resettyp | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x583E | Motordrehzahl bei Reset | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x583F | Drosselklappe Sollwert | °TPS | - | unsigned char | - | 1,8673014640808105 | 1 | 0,0 |
| 0x5840 | CPU Last bei Reset | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5841 | SG-Innentemperatur Rohwert | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5842 | Kennung Generatortyp Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5843 | Versorgung Fahrtwertgeber 1 | V | - | unsigned char | - | 0,0390625037252903 | 1 | 0,0 |
| 0x5844 | Chiptemperatur Generator 1 | °C | - | unsigned char | - | 1,0 | 1 | -48,0 |
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
| 0x584F | Spannung Luftmasse | V | - | unsigned char | - | 0,019600000232458115 | 1 | 0,0 |
| 0x5850 | Spannung Motortemperatur | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5851 | Spannung Ansauglufttemperatur | V | - | unsigned char | - | 0,019600000232458115 | 1 | 0,0 |
| 0x5852 | Kühlmitteltemperatur Kühlerausgang Rohwert | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5853 | Spannung Kl.87 Rohwert | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5854 | Versorgung Fahrtwertgeber 2 | V | - | unsigned char | - | 0,0390625037252903 | 1 | 0,0 |
| 0x5855 | Mittelwert Bank 1 | % | - | signed char | - | 0,390625 | 1 | 2,220446098881151E-14 |
| 0x5856 | Mittelwert Bank 2 | % | - | signed char | - | 0,390625 | 1 | 2,220446098881151E-14 |
| 0x5857 | Erregerstrom Generator 1 | A | - | unsigned char | - | 0,125 | 1 | 0,0 |
| 0x5858 | Drosselklappe aktueller Wert | °TPS | - | unsigned char | - | 1,8673014640808105 | 1 | 0,0 |
| 0x5859 | DMTL Strom Referenzleck | mA | - | unsigned char | - | 0,1953124701976776 | 1 | 0,0 |
| 0x585A | DMTL Strom Grobleck | mA | - | unsigned char | - | 0,1953124701976776 | 1 | 0,0 |
| 0x585B | DMTL Strom Diagnoseende | mA | - | unsigned char | - | 0,1953124701976776 | 1 | 0,0 |
| 0x585C | Widerstand Lambdasonde hinter Katalysator Bank 1 | ohm | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x585D | Widerstand Lambdasonde hinter Katalysator Bank 2 | ohm | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x585E | unteres Byte Widerstand Lambdasonde hinter Katalysator Bank 1 | ohm | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x585F | unteres Byte Widerstand Lambdasonde hinter Katalysator Bank 2 | ohm | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5860 | Widerstand Lambdasonde vor Katalysator Bank 1 | ohm | - | unsigned char | - | 64,0 | 1 | 0,0 |
| 0x5861 | Widerstand Lambdasonde vor Katalysator Bank 2 | ohm | - | unsigned char | - | 64,0 | 1 | 0,0 |
| 0x5862 | Öldruck Sollwert | hPa | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x5863 | untere Byte Widerstand Lambdasonde vor Katalysator Bank 1 | ohm | - | unsigned char | - | 0,25 | 1 | 0,0 |
| 0x5864 | untere Byte Widerstand Lambdasonde vor Katalysator Bank 2 | ohm | - | unsigned char | - | 0,25 | 1 | 0,0 |
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
| 0x586F | Ist-Öldruck | hPa | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x5870 | Spannung DME Umgebungsdruck | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5871 | Lambda-Sollwert Gruppe 1 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x5872 | Reglerversion Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5873 | Lambda-Sollwert Gruppe 2 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x5874 | Spannung Strommessung DMTL | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5875 | Sollwert Motormoment | Nm | - | signed char | - | 2,0 | 1 | 0,0 |
| 0x5876 | Raildruck OBD (High Byte) | kPa | - | unsigned char | - | 2560,0 | 1 | 0,0 |
| 0x5877 | Raildruck OBD (Low Byte) | kPa | - | unsigned char | - | 10,0 | 1 | 0,0 |
| 0x5878 | Lambdaverschiebung Rückführregler 1 | - | - | signed char | - | 9,765625E-4 | 1 | 0,0 |
| 0x5879 | Lambdaverschiebung Rückführregler 2 | - | - | signed char | - | 9,765625E-4 | 1 | 0,0 |
| 0x587A | Status FGR | 0-n | - | 0xFF | _CNV_S_6_RANGE_STAT_113 | 1 | 1 | 0 |
| 0x587B | Abgleich Abgasrückführungsventilmodell (Faktor) | - | - | unsigned char | - | 0,125 | 1 | 0,0 |
| 0x587C | Status Motorsteuerung | 0-n | - | 0xFF | _CNV_S_7_RANGE_ECU__177 | 1 | 1 | 0 |
| 0x587D | Symptom bei Schubabschaltung Sonde vor Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_4_EGCP_RANGE_400 | 1 | 1 | 0 |
| 0x587E | Symptom bei Schubabschaltung Sonde vor Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_4_EGCP_RANGE_400 | 1 | 1 | 0 |
| 0x587F | Tastverhältnis E-Lüfter | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5880 | Tastverhältnis Luftklappe | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5881 | berechneter Gang | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5882 | Motortemperatur beim Start | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5883 | Spannung Klopfwerte Zylinder 1 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5884 | Rückgelesener Erregergrenzstrom Generator 1 | A | - | unsigned char | - | 0,125 | 1 | 0,0 |
| 0x5885 | Spannung Klopfwerte Zylinder 3 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5886 | Spannung Klopfwerte Zylinder 6 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5887 | Auslastungsgrad Generator 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5888 | Spannung Klopfwerte Zylinder 4 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x5889 | Lambda-Istwert Gruppe 1 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x588A | Lambda-Istwert Gruppe 2 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x588B | Zeit seit Startende | s | - | unsigned char | - | 25,600000381469727 | 1 | 0,0 |
| 0x588C | Keramiktemperatur Lambdasonde vor Katalysator Bank 1 | °C | - | signed char | - | 16,0 | 1 | 0,0 |
| 0x588D | aktuelle Zeit DMTL Leckmessung | s | - | unsigned char | - | 25,600000381469727 | 1 | 0,0 |
| 0x588E | Pumpenstrom bei DMTL Pumpenprüfung | mA | - | unsigned char | - | 1,5625238418579102 | 1 | 0,0 |
| 0x588F | Keramiktemperatur Lambdasonde vor Katalysator Bank 2 | °C | - | signed char | - | 16,0 | 1 | 0,0 |
| 0x5890 |  Spannung Bremsunterdrucksensor | V | - | unsigned char | - | 0,019531216472387314 | 1 | 0,0 |
| 0x5891 | Momentanforderung an der Kupplung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x5892 |  Bremsunterdruck | hPa | - | unsigned char | - | 5,306640625 | 1 | 0,0 |
| 0x5893 | Drehmomentabfall schnell bei Gangwechsel | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x5894 | Symptom Lambdasondenheizung vor Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_4_EGCP_RANGE_391 | 1 | 1 | 0 |
| 0x5895 | Symptom Lambdasondenheizung vor Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_4_EGCP_RANGE_391 | 1 | 1 | 0 |
| 0x5896 | Abgastemperatur hinter Katalysator Bank 1 | °C | - | unsigned char | - | 16,0 | 1 | 0,0 |
| 0x5897 | Abgastemperatur hinter Katalysator Bank 2 | °C | - | unsigned char | - | 16,0 | 1 | 0,0 |
| 0x5898 | Generator Sollspannung | V | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5899 | Istwert DISA-Position | % | - | unsigned char | - | 0,7812498211860657 | 1 | 0,0 |
| 0x589A |  Tastverhältnis Nullgangsensor  | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x589B | Spannungsoffset Signalpfad CJ120 1 | V | - | signed char | - | 0,0048827845603227615 | 1 | -3,607843264663677E-6 |
| 0x589C | Spannungsoffset Signalpfad CJ120 2 | V | - | signed char | - | 0,0048827845603227615 | 1 | -3,607843264663677E-6 |
| 0x589D | Abweichung Lambdasonde zu Lambdamodellwert Überwachung | - | - | signed char | - | 0,015624979510903358 | 1 | -2,509803727102794E-6 |
| 0x589E | Alterungsfaktor durch Schwefel bedingt | - | - | unsigned char | - | 0,00390625 | 1 | 0,0 |
| 0x589F | Zeit Katheizfunktion aktiv | s | - | unsigned char | - | 25,600000381469727 | 1 | 0,0 |
| 0x58A0 | Fahrstrecke seit letzter Desulfatisierung | km | - | unsigned char | - | 40,0 | 1 | 0,0 |
| 0x58A1 | NOx-Konzentration | ppm | - | signed char | - | 16,0 | 1 | 0,0 |
| 0x58A2 | lineares Spannungssignal NOx-Sensor | - | - | unsigned char | - | 0,015625 | 1 | 0,0 |
| 0x58A3 | binäres Spannungssignal NOx-Sensor | mV | - | unsigned char | - | 8,0 | 1 | -200,0 |
| 0x58A4 | Status NOx-Sensor | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58A5 | gespeicherte Schwefelmasse im Katalysator | mg | - | unsigned char | - | 40,959999084472656 | 1 | 0,0 |
| 0x58A6 | resultierender NOxKatalysator-Alterungsfaktor | - | - | unsigned char | - | 0,003921568859368563 | 1 | 0,0 |
| 0x58A7 | Mittleres Lambda vor Kat | - | - | unsigned char | - | 0,015625 | 1 | 0,0 |
| 0x58A8 | Motorabstellzeit | min | - | unsigned char | - | 4,0 | 1 | 0,0 |
| 0x58A9 | Resetzähler Rechnerüberwachung: alter Wert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58AA | Fehlercode Rechnerüberwachung: alter Wert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58AB | Abweichung DK-Potentiometer 1 und Modellwert | °TPS | - | unsigned char | - | 0,46682536602020264 | 1 | 0,0 |
| 0x58AC | Abweichung DK-Potentiometer 2 und Modellwert | °TPS | - | unsigned char | - | 0,46682536602020264 | 1 | 0,0 |
| 0x58AD | Pedalwertgeber 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58AE | Periodendauer Luftmasse | us | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x58AF | Kraftstoff Anforderung an Pumpe | l/h | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58B0 | DK-Adaptionsschritt | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58B1 | Funkenbrenndauer Zylinder 1 | ms | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| 0x58B2 | Funkenbrenndauer Zylinder 5 | ms | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| 0x58B3 | Funkenbrenndauer Zylinder 3 | ms | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| 0x58B4 | Funkenbrenndauer Zylinder 6 | ms | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| 0x58B5 | Funkenbrenndauer Zylinder 2 | ms | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| 0x58B6 | Funkenbrenndauer Zylinder 4 | ms | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| 0x58B7 | Bremsdruck | bar | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58B8 | Drehzahl Überwachung | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x58B9 | Pedalwert Überwachung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58BA | eingespritze Kraftstoffmasse | l/h | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58BB | PWM Kraftstoffpumpe | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58BC | Luftmasse Überwachung | mg/stk | - | unsigned char | - | 5,44705867767334 | 1 | 0,0 |
| 0x58BD | Schalthäufigkeitszähler Drosselklappe Enteisungsfunktion High-Byte | - | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x58BE | Schalthäufigkeitszähler Drosselklappe Enteisungsfunktion Low-Byte | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58BF | relative Momentenforderung von MSR über CAN | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58C0 | Motordrehzahl Ersatzwert Überwachung | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x58C1 | Laufunruhe Segmentzeit | µs | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x58C2 | Statusbyte MFF-Monitoring | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58C3 | Statusbyte ISC-Monitoring | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58C4 | Statusbyte CRU-Monitoring | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58C5 | Drehzahl Überwachung (resetsicher) | rpm | - | unsigned char | - | 32,0 | 1 | 0,0 |
| 0x58C6 | Status Einspritzventile (resetsicher) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58C7 | LL-Solldrehzahlabweichung Überwachung | rpm | - | signed char | - | 32,0 | 1 | 0,0 |
| 0x58C8 | I-Anteil Momentdifferenz Überwachung und Modell | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58C9 | I-Anteil LL passive Rampe aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x58CA | PD-Anteil langsam Leerlaufregelung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58CB | PD-Anteil schnell Leerlaufregelung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58CC | Verlustmoment Überwachung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58CD | Verlustmomentabweichung Überwachung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58CE | Carrierbyte Schalterstati | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58CF | Motormoment Sollwert Überwachung | Nm | - | unsigned char | - | 2,0 | 1 | 0,0 |
| 0x58D0 | Motormoment Istwert Überwachung | Nm | - | unsigned char | - | 2,0 | 1 | 0,0 |
| 0x58D1 | Moment aktueller Wert | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58D2 | Status Luftklappensystem High Byte | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58D3 | Status Luftklappensystem Low Byte | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58D4 | Abweichung maximales Moment an Kupplung Überwachung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58D5 | Ansauglufttemperatur im Laderstrang | °C | - | unsigned char | - | 1,0 | 1 | -48,0 |
| 0x58D6 | Abweichung minimales Moment an Kupplung Überwachung | Nm | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58D7 | Spannung des Ansauglufttemperatursensors im Laderstrang | V | - | unsigned char | - | 0,012941176071763039 | 1 | 0,0 |
| 0x58D8 | Abgastemperatur Rohwert | V | - | unsigned char | - | 0,012941176071763039 | 1 | 0,0 |
| 0x58D9 | Fehlercode Rechnerüberwachung: aktueller Wert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58DA | Resetzähler Rechnerüberwachung: aktueller Wert | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58DB | Inhalt Statusbyte 1 Drehzahlüberwachung (resetsicher) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58DC | Inhalt Statusbyte 2 Drehzahlüberwachung (resetsicher) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58DD | Druck vor Drosselklappe | kPa | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58DE | Spannung für Drucksensor vor Drosselklappe | V | - | unsigned char | - | 0,019531216472387314 | 1 | 0,0 |
| 0x58DF | Spannung Sportschalter | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x58E0 | Abgleich Drosselklappenmodell (Faktor) | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x58E1 | Abgleich Drosselklappenmodell (Offset) | kg/h | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x58E2 | Abgleich Einlassventilmodell (Faktor) | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x58E3 | NOx Sensor Eigendiagnosewert | - | - | signed char | - | 0,00781247019767761 | 1 | -3,76470571580263E-6 |
| 0x58E4 | Betriebsart Istwert | 0-n | - | 0xFF | _CNV_S_5_Def_ba_gdi_655 | 1 | 1 | 0 |
| 0x58E5 | Lastwert für Aussetzererkennung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58E6 | Nulllastwert für Aussetzererkennung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58E7 | Spannung Pedalwertgeber 1 Überwachung | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x58E8 | Spannung Pedalwertgeber 2 Überwachung | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x58E9 | Wasserpumpe Spannung | V | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| 0x58EA | Wasserpumpe Drehzahl | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58EB | Wasserpumpe Drehzahl Soll-Ist-Differenz | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58EC | Wasserpumpe Temperatur Elektronik | °C | - | unsigned char | - | 1,0 | 1 | -50,0 |
| 0x58ED | Wasserpumpe Stromaufnahme | A | - | unsigned char | - | 0,5 | 1 | 0,0 |
| 0x58EE | Wasserpumpe leistungsreduziert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58EF | gemittelter Raildruck | V | - | unsigned char | - | 0,019531216472387314 | 1 | 0,0 |
| 0x58F0 | Raildruck | hPa | - | unsigned char | - | 1358,5177001953125 | 1 | 0,0 |
| 0x58F1 | DME - Losnummer | 0-n | - | 0xFF | _CNV_S_11_RANGE_STAT_976 | 1 | 1 | 0 |
| 0x58F2 | PWM-Signal des Mengensteuerventils | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58F3 | Kraftstoffdruck vor Mengensteuerventil | hPa | - | unsigned char | - | 42,453758239746094 | 1 | 0,0 |
| 0x58F4 | Spannung für Kraftstoffdrucksensor vor Mengensteuerventil | V | - | unsigned char | - | 0,019531216472387314 | 1 | 0,0 |
| 0x58F5 | Eingangssignal Rückführregler 1 | V | - | signed char | - | 0,0048827845603227615 | 1 | -3,607843264663677E-6 |
| 0x58F6 | Eingangssignal Rückführregler 2 | V | - | signed char | - | 0,0048827845603227615 | 1 | -3,607843264663677E-6 |
| 0x58F7 | Öffnungswinkel des AGR-Ventils | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58F8 | Segmentadaption Laufunruhe Zyl. 5 | %. | - | signed char | - | 0,06103530898690224 | 1 | 1,920958358174273E-5 |
| 0x58F9 | Segmentadaption Laufunruhe Zyl. 3 | %. | - | signed char | - | 0,06103530898690224 | 1 | 1,920958358174273E-5 |
| 0x58FA | Beladungsgrad Aktivkohlefilter TEV- Funktionstest | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x58FB | Zähler Drehzahlerhöhungen TEV- Funktionstest | cyc | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58FC | Sollwert für Öffnungswinkel des AGR-Ventils | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x58FD | PWM-Signal für AGR-Ventil | % | - | signed char | - | 0,78125 | 1 | 0,0 |
| 0x58FE | Zähler für Umschaltungen nach HOM durch Monitoring | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x58FF | Umweltbedingung unbekannt | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x5A00 | Versorgung Fahrwertgeber 1 | V | - | unsigned integer | - | 0,009765591472387314 | 1 | 0,0 |
| 0x5A01 | Versorgung Fahrwertgeber 2 | V | - | unsigned integer | - | 0,009765591472387314 | 1 | 0,0 |
| 0x5A02 | Leckagediagnose für Turbolader wird durchgeführt | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A03 | Leckagediagnose für Turbolader beendet | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A04 | Spannung Pedalwertgeber 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A05 | Spannung Pedalwertgeber 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A06 | Spannung Drosselklappe Potentiometer 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A07 | Spannung Drosselklappe Potentiometer 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A08 | Spannung Ansauglufttemperatur | V | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 |
| 0x5A09 | Spannung Motortemperatur | V | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 |
| 0x5A0A | Spannung Kühlmitteltemperatur Kühlerausgang | V | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 |
| 0x5A0B | Spannung DME Umgebungsdruck | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A0C | Spannung Luftmasse | V | - | unsigned char | - | 0,019600000232458115 | 1 | 0,0 |
| 0x5A0D | Spannung Sekundärluft | V | - | unsigned char | - | 0,019600000232458115 | 1 | 0,0 |
| 0x5A0E | Spannung SG-Innentemperatur | V | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 |
| 0x5A0F | Spannung Kl.15 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A10 | Spannung Kl15 | V | - | unsigned integer | - | 0,02806011587381363 | 1 | 0,0 |
| 0x5A11 | Spannung Lambdasonde vor Katalysator Bank 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A12 | Spannung Lambdasonde vor Katalysator Bank 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A13 | Spannung Lambdasonde hinter Katalysator Bank 1 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A14 | Spannung Lambdasonde hinter Katalysator Bank 2 | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A15 | Diagnose von zu niedrigem Ladedruck beendet | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A16 | Diagnose von zu hohem Ladedruck beendet | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A17 | Spannung Strommessung DMTL | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5A18 | Spannung Abgastemperatursensor | V | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 |
| 0x5A1F | Abgastemperatur | °C | - | unsigned integer | - | 0,015625 | 1 | 0,0 |
| 0x5A21 | Kühlmitteltemperatur Kühlerausgang | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5A22 | Steuergeräte-Innentemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5A23 | Sollwert Öldruck | hPa | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5A24 | Drosselklappe Sollwert | °TPS | - | unsigned integer | - | 0,007294146344065666 | 1 | 0,0 |
| 0x5A25 | Istwert Öldruck | hPa | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x5A26 | Saugrohrdruck  | hPa | - | unsigned integer | - | 0,08291752636432648 | 1 | 0,0 |
| 0x5A27 | Pedalwertgeber Potentiometer 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A28 | Pedalwertgeber Potentiometer 2 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A29 | Fahrpedalwert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A2B | Temperatur vor Drosselklappe | °C | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5A2C | Druck vor Drosselklappe | hPa | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x5A2D | Druck nach Drosselklappe | hPa | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x5A2E | Kraftstoffniederdrucksensor | hPa | - | unsigned integer | - | 2,6533608436584473 | 1 | 0,0 |
| 0x5A2F | Raildruck | hPa | - | unsigned integer | - | 5,3067216873168945 | 1 | 0,0 |
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
| 0x5A41 | Alterungsfaktor durch Schwefel bedingt | - | - | unsigned integer | - | 1,52587890625E-5 | 1 | 0,0 |
| 0x5A42 | resultierender NOx-Katalysator-Alterungsfaktor | - | - | unsigned integer | - | 1,52587890625E-5 | 1 | 0,0 |
| 0x5A43 | Alterungsfaktor durch thermische Alterung bedingt | - | - | unsigned integer | - | 1,52587890625E-5 | 1 | 0,0 |
| 0x5A44 | Anforderung an eine Desulfatisierung mit Katheizen | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A45 | Zähler für Katheizversuche | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5A46 | Fahrstrecke seit letzter Desulfatisierung | km | - | unsigned integer | - | 10,0 | 1 | 0,0 |
| 0x5A47 | Zeit Katheizfunktion aktiv | s | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| 0x5A48 | Motorlager Typ | 0/1 | - | unsigned char | - | 1 | 1 | 0 |
| 0x5A49 | Zündwinkel Zylinder 1 | °CRK | - | unsigned char | - | 0,375 | 1 | -35,62499893829229 |
| 0x5A4B | Berechneter Lastwert | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A4C | Status Drosselklappenheizungsrelais | 0-n | - | 0xFF | _CNV_S_5_RANGE_STAT_1015 | 1 | 1 | 0 |
| 0x5A4D | Drosselklappenheizung Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A4E | Klimakompressorrelais Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A50 | Lambdawert vor Katalysator Bank 1 | - | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| 0x5A51 | Lambdawert vor Katalysator Bank 2 | - | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| 0x5A52 | Status LS hinter Katalysator Bank 1 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A53 | Status LS hinter Katalysator Bank 2 | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A54 | Status LS Heizung hinter Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_7_EGCP_RANGE_371 | 1 | 1 | 0 |
| 0x5A55 | Status LS Heizung hinter Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_7_EGCP_RANGE_371 | 1 | 1 | 0 |
| 0x5A56 | Status LS Heizung vor Katalysator Bank 1 | 0-n | - | 0xFF | _CNV_S_7_EGCP_RANGE_371 | 1 | 1 | 0 |
| 0x5A57 | Status LS Heizung vor Katalysator Bank 2 | 0-n | - | 0xFF | _CNV_S_7_EGCP_RANGE_371 | 1 | 1 | 0 |
| 0x5A58 | Lambdasondenheizung PWM vor Katalysator Bank 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A59 | Lambdasondenheizung PWM hinter Katalysator Bank 1 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A5A | Lambdasondenheizung PWM vor Katalysator Bank 2 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A5B | Lambdasondenheizung PWM hinter Katalysator Bank 2 | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A5C | Aktive Fehlerrückmeldung DISA-Klappe 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5A5D | Schalthäufigkeitszähler DISA-Klappe 1 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5A5E | Aktive Fehlerrückmeldung DISA-Klappe 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5A5F | Schalthäufigkeitszähler DISA-Klappe 2 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5A60 | Bremslichtschalter Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A61 | Bremslichttestschalter Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A62 | Öldruckschalter Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A63 | E-Box-Lüfter Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A64 | Motorlager weiche Dämpfung | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A65 | Abgasklappe Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A66 | DMTL Pumpe Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A67 | DMTL Ventil Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A68 | DMTL Heizung Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A69 | MIL Lampe Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A6A | Lampe FGR Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A6B | Lampe Check Engine Ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A6C | Verbrauchskorrekturfaktor | - | - | signed char | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5A6D | Status Taste FGR | 0-n | - | 0xFF | _CNV_S_8_RANGE_STAT_23 | 1 | 1 | 0 |
| 0x5A6E | Status für irreversible Abschaltbedingung | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5A6F | Status für reversible Abschaltbedingung | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5A70 | Soundklappe Zustand | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A71 | DISA1 PWM (große/obere Klappe) | % | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x5A72 | DISA2 PWM (kleine/untere Klappe) | % | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| 0x5A73 | Kurbelgehäuseentlüftungsheizung ein | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A74 | Beheizter Thermostat PWM | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5A76 | Adaption Öffnungspunkt Tankentlüftungsventil | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5A77 | Tankentlüftungsventil PWM | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A78 | Abgasklappe Ansteuerung | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A79 | E-Lüfter PWM | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5A7A | VANOS PWM Wert Einlass | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5A7B | VANOS PWM Wert Auslass | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5A7C | Nox-Sensor Systemadaptionswert | - | - | unsigned integer | - | 0,001953125 | 1 | 0,0 |
| 0x5A7D | Anzahl der erfolgten NOX-SENSOR-Systemadaptionen | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5A7E | km-stand bei letzter Nox-Sensor-Eigendiagnose | km | - | unsigned integer | - | 8,0 | 1 | 0,0 |
| 0x5A7F | Phase-Shift-Adaption Lambdasonde Bank 1 | °CRK | - | signed char | - | 6,0 | 1 | 0,0 |
| 0x5A80 | Phase-Shift-Adaption Lambdasonde Bank 2 | °CRK | - | signed char | - | 6,0 | 1 | 0,0 |
| 0x5A81 | Ausgang Lamdaregler Bank 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5A82 | Ausgang Lamdaregler Bank 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5A83 | Adaption Offset Lambda Bank 1 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x5A84 | Adaption Offset Lambda Bank 2 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
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
| 0x5A94 | Nockenwelle Auslass Sollwert | °CRK | - | unsigned char | - | -0,375 | 1 | -39,99999785423285 |
| 0x5A95 | Adaptionswert Nockenwelle Auslass | °CRK | - | unsigned char | - | 0,375 | 1 | -47,99999856948857 |
| 0x5A96 | Adaptionswert Nockenwelle Einlass | °CRK | - | unsigned char | - | 0,375 | 1 | -47,99999856948857 |
| 0x5A97 | Bedingung EVANOS im Anschlag beim letzten Abstellen | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A99 | Kurbelwellen Adaption beendet | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A9A | Status des Erlernens des Heifilmluftmassenmessers | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5A9B | Multiplikative Gemischadaption inklusive Langzeitadaption Bank 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5A9C | Multiplikative Gemischadaption inklusive Langzeitadaption Bank 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5A9D | Gegenwärtige multiplikative Gemischadaption Bank 1 aus Lambdaadaption | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5A9E | Gegenwärtige multiplikative Gemischadaption Bank 2 aus Lambdaadaption | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5A9F | Langzeitadaption Bank 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5AA0 | Langzeitadaption Bank 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5AA1 | Status Diagnose TEV | 0-n | - | 0xFF | _CNV_S_10_STATE_EOL__478 | 1 | 1 | 0 |
| 0x5AA2 | Status Diagnose DMTL | 0-n | - | 0xFF | _CNV_S_10_STATE_EOL__478 | 1 | 1 | 0 |
| 0x5AA3 | Status Diagnose Lambdasonden | 0-n | - | 0xFF | _CNV_S_10_STATE_EOL__478 | 1 | 1 | 0 |
| 0x5AA4 | Status Diagnose Leerlaufdrehzahlverstellung | 0-n | - | 0xFF | _CNV_S_10_STATE_EOL__478 | 1 | 1 | 0 |
| 0x5AA7 | Leckluftadaption Istwert | kg/h | - | signed integer | - | 0,03125 | 1 | 0,0 |
| 0x5AA8 | Status Luftklappensystem | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5AA9 | Tastverhältnis: Luftklappe | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x5AAA | Tastverhältnis Öldruck-Regelventil | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AAB | Wastegate 1 PWM | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AAC | Wastegate 2 PWM | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AAD | Vorsteuerung Ladedruckregelung | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AAE | Reglerausgang und Vorsteuerung | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AAF | Adaptionswert von der Ladedruckregelung | - | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5AB0 | Solladedruck | hPa | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| 0x5AB1 | Geschwindigkeit | km/h | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AB2 | Periodendauer Luftmasse | µs | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5AB3 | Fahrstrecke mit MIL an | km | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5AB4 | Betriebsstundenzähler | h | - | unsigned long | - | 2,7777778086601757E-5 | 1 | 0,0 |
| 0x5AB6 | Rohwert Ansauglufttemperatur 1 | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5AB7 | Rohwert Kühlwassertemperatur | °C | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| 0x5AB8 | Spannung Saugrohrdruck | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5AB9 | Spannung Sportschalter | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5ABA | Kraftstoffpumpe PWM | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5ABC | Luftmasse | kg/h | - | unsigned integer | - | 0,03125 | 1 | 0,0 |
| 0x5ABD | Starterrelais aktiv | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5AC2 | Reset Adresse | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5AC3 | Schalthäufigkeitszähler Drosselklappe Enteisungsfunktion | - | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5AC4 | Minimale Pumpengeschwindigkeit der elektrischen Kraftsoffpumpe | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AC5 | Aditiver I-Anteil des EKP-Controllers | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5AC6 | Sensorspannung AGR | V | - | unsigned integer | - | 0,004882697947323322 | 1 | 0,0 |
| 0x5AC7 | Hub des AGR-Tellerventils | % | - | unsigned integer | - | 0,0244140625 | 1 | 0,0 |
| 0x5AC8 | Adaptionswert oberer Anschlag (einmalig gelernt) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5AC9 | Adaptionswert unterer Anschlag (immer wieder neu gelernt) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5ACA | Adaptionswert unterer Anschlag (einmalig am Anfang gelernt, Uradaption) | V | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| 0x5ACB | Status des Erlernens der AGR-Adaption | 0-n | - | 0xFF | _CNV_S_6_ACRC_RANGE_906 | 1 | 1 | 0 |
| 0x5ACC | DME-Temperaturstatistik, Zähler 1 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5ACD | DME-Temperaturstatistik, Zähler 2 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5ACE | DME-Temperaturstatistik, Zähler 3 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5ACF | DME-Temperaturstatistik, Zähler 4 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5AD0 | DME-Temperaturstatistik, Zähler 5 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5AD1 | DME-Temperaturstatistik, Zähler 6 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5AD2 | DME-Temperaturstatistik, Zähler 7 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5AD3 | DME-Temperaturstatistik, Zähler 8 | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5AD6 | Schubabschaltung | ppm | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x5AD7 | Beladungsbetrieb NOx-Katalysator | ppm | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x5AD8 | NOx-Konzentration | ppm | - | signed integer | - | 1,0 | 1 | 0,0 |
| 0x5AD9 | Lineares Lambdasignal NOx-Sensor | - | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| 0x5ADA | binäres Spannungssignal NOx-Sensor | mV | - | unsigned integer | - | 1,0 | 1 | -200,0 |
| 0x5ADB | Status NOx-Sensor | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5ADC | Fehler NOx-Sensor | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5ADF | Taupunkterkennung für NOx-Sensor | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5AE0 | Status-Byte für sicherheitsrelevante Informationen bezüglich atypischem Reset | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AE2 | Resetart des letzten Resets | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AE3 | Hintegrundinformationen zum letzten gültigen Reset | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AE4 | Zusätzliche Resetinformationen zur Resetursache | - | - | unsigned long | - | 1,0 | 1 | 0,0 |
| 0x5AE5 | Fahrstrecke bei Reset | m | - | unsigned long | - | 100,0 | 1 | 0,0 |
| 0x5AE6 | Betriebsstundenzähler bei Reset | h | - | unsigned long | - | 2,7777778086601757E-5 | 1 | 0,0 |
| 0x5AE7 | Maximale CPU-Last bei Reseterkennung | % | - | unsigned integer | - | 0,09765625 | 1 | 0,0 |
| 0x5AE8 | Geschwindigkeit bei maximaler CPU-Last bei Reseterkennung | rpm | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| 0x5AE9 | Sicherheitsinformationen | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AEA | Anzahl von atypischen Warm-Resets seit letzter Power-Up-Phase (BSW) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x5AEB | Kühlmitteltemperatur < 98°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AEC | 98°C =< Kühlmitteltemperatur =< 112°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AED | 113°C =< Kühlmitteltemperatur =< 120°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AEE | 121°C =< Kühlmitteltemperatur =< 125°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AEF | Kühlmitteltemperatur > 125°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF0 | Motoröltemperatur < 80°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF1 | 80°C =< Motoröltemperatur =< 110°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF2 | 110°C =< Motoröltemperatur =< 135°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF3 | 135°C =< Motoröltemperatur =< 150°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF4 | Motoröltemperatur > 150°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF5 | Getriebeöltemperatur < 80°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF6 | 80°C =< Getriebeöltemperatur =< 109°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF7 | 110°C =< Getriebeöltemperatur =< 124°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF8 | 125°C =< Getriebeöltemperatur =< 129°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AF9 | Getriebeöltemperatur > 129°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AFA | Umgebungstemperatur < 3°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AFB | 3°C =< Umgebungstemperatur =< 19°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AFC | 20°C =< Umgebungstemperatur =< 29°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AFD | 30°C =< Umgebungstemperatur =< 39°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5AFE | Umgebungstemperatur > 39°C | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5B00 | Einspritzzeit Zylinder 1 von der Endstufe rückgemessen  | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5B01 | Einspritzzeit Zylinder 2 von der Endstufe rückgemessen  | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5B02 | Einspritzzeit Zylinder 3 von der Endstufe rückgemessen  | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5B03 | Einspritzzeit Zylinder 4 von der Endstufe rückgemessen  | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5B04 | Einspritzzeit Zylinder 5 von der Endstufe rückgemessen  | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5B05 | Einspritzzeit Zylinder 6 von der Endstufe rückgemessen  | ms | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| 0x5B10 | Tastverhältnis Injektor 1 an Endstufe  | % | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x5B11 | Tastverhältnis Injektor 2 an Endstufe  | % | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x5B12 | Tastverhältnis Injektor 3 an Endstufe  | % | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x5B13 | Tastverhältnis Injektor 4 an Endstufe  | % | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x5B14 | Tastverhältnis Injektor 5 an Endstufe  | % | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x5B15 | Tastverhältnis Injektor 6 an Endstufe  | % | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| 0x5B20 | Elektrische Ladung Injektor 1 | uAs | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| 0x5B21 | Elektrische Ladung Injektor 2 | uAs | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| 0x5B22 | Elektrische Ladung Injektor 3 | uAs | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| 0x5B23 | Elektrische Ladung Injektor 4 | uAs | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| 0x5B24 | Elektrische Ladung Injektor 5 | uAs | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| 0x5B25 | Elektrische Ladung Injektor 6 | uAs | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| 0x5B30 | Spannung Injektor 1 | V | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| 0x5B31 | Spannung Injektor 2 | V | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| 0x5B32 | Spannung Injektor 3 | V | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| 0x5B33 | Spannung Injektor 4 | V | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| 0x5B34 | Spannung Injektor 5 | V | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| 0x5B35 | Spannung Injektor 6 | V | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| 0x5B40 | Adaptionswert der Enstufe Injektor 1 | %/mJ | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5B41 | Adaptionswert der Enstufe Injektor 2 | %/mJ | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5B42 | Adaptionswert der Enstufe Injektor 3 | %/mJ | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5B43 | Adaptionswert der Enstufe Injektor 4 | %/mJ | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5B44 | Adaptionswert der Enstufe Injektor 5 | %/mJ | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5B45 | Adaptionswert der Enstufe Injektor 6 | %/mJ | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5B50 | Momentan eingerechnete CILC-Werte Injektor 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5B51 | Momentan eingerechnete CILC-Werte Injektor 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5B52 | Momentan eingerechnete CILC-Werte Injektor 3 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5B53 | Momentan eingerechnete CILC-Werte Injektor 4 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5B54 | Momentan eingerechnete CILC-Werte Injektor 5 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5B55 | Momentan eingerechnete CILC-Werte Injektor 6 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5B60 | CILC-Adaption kalt Injektor 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5B61 | CILC-Adaption kalt Injektor 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5B62 | CILC-Adaption kalt Injektor 3 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5B63 | CILC-Adaption kalt Injektor 4 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5B64 | CILC-Adaption kalt Injektor 5 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5B65 | CILC-Adaption kalt Injektor 6 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5B70 | ER-Adaption MFF-additiv im LL Schicht für Injektor 1 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x5B71 | ER-Adaption MFF-additiv im LL Schicht für Injektor 2 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x5B72 | ER-Adaption MFF-additiv im LL Schicht für Injektor 3 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x5B73 | ER-Adaption MFF-additiv im LL Schicht für Injektor 4 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x5B74 | ER-Adaption MFF-additiv im LL Schicht für Injektor 5 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x5B75 | ER-Adaption MFF-additiv im LL Schicht für Injektor 6 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x5B80 | ER-MFF-aditiv im LL-Schicht (momentan eingerechte Werte) Injektor 1 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x5B81 | ER-MFF-aditiv im LL-Schicht (momentan eingerechte Werte) Injektor 2 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x5B82 | ER-MFF-aditiv im LL-Schicht (momentan eingerechte Werte) Injektor 3 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x5B83 | ER-MFF-aditiv im LL-Schicht (momentan eingerechte Werte) Injektor 4 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x5B84 | ER-MFF-aditiv im LL-Schicht (momentan eingerechte Werte) Injektor 5 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x5B85 | ER-MFF-aditiv im LL-Schicht (momentan eingerechte Werte) Injektor 6 | mg/stk | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| 0x5B90 | ER-Adaptionsfaktor in Schicht Teillast für Injektor 1 | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5B91 | ER-Adaptionsfaktor in Schicht Teillast für Injektor 2 | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5B92 | ER-Adaptionsfaktor in Schicht Teillast für Injektor 3 | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5B93 | ER-Adaptionsfaktor in Schicht Teillast für Injektor 4 | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5B94 | ER-Adaptionsfaktor in Schicht Teillast für Injektor 5 | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5B95 | ER-Adaptionsfaktor in Schicht Teillast für Injektor 6 | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5BA0 | ER-Faktor in Schicht Teillast momentan eingerechnet für Injektor 1 | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5BA1 | ER-Faktor in Schicht Teillast momentan eingerechnet für Injektor 2 | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5BA2 | ER-Faktor in Schicht Teillast momentan eingerechnet für Injektor 3 | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5BA3 | ER-Faktor in Schicht Teillast momentan eingerechnet für Injektor 4 | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5BA4 | ER-Faktor in Schicht Teillast momentan eingerechnet für Injektor 5 | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5BA5 | ER-Faktor in Schicht Teillast momentan eingerechnet für Injektor 6 | - | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| 0x5BB0 | Lambdaadaption am Bandende hat fertig gelernt  | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5BB1 | ER-Balancing am Bandende hat additiv adaptiert  | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5BB2 | Lambdaadaption ist nötig, zyklisch während Motorbetrieb zu 1 gesetzt  | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5BB3 | ER-Balancing am Bandende hat den Faktor adaptiert  | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5BB4 | Zylindersel. Lambdaregelung fordert homogen an, zyklisch während dem Motorbetrieb zu 1 gesetzt  | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5BB5 | Zylindersel. Lambdaregelung kalt am Bandende hat fertig adaptiert  | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5BB6 | Zylindersel. Lambdaregelung warm am Bandende hat fertig adaptiert  | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5BB7 | Zylindersel. Lambdaregelung warm ist nötig, zyklisch während Motorbetrieb zu 1 gesetzt  | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5BB8 | Zylindersel. Lambdaregelung fordert öffnen WG an, zyklisch während dem Motorbetrieb zu 1 gesetzt  | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5BB9 | Zylindersel. Lambdaregelung fordert öffnen WG2 an, zyklisch während dem Motorbetrieb zu 1 gesetzt  | 0/1 | - | 0xFF | - | 1 | 1 | 0 |
| 0x5BBA | Relative Zeit Homogen-Betrieb gesamter Motorlauf | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5BBB | Relative Zeit Homogen-Schicht-Betrieb gesamter Motorlauf | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5BBC | Relative Zeit Schicht-Betrieb gesamter Motorlauf | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| 0x5BBD | Relative Zeit Homogen-Betrieb gesamter Motorlauf | % | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
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
| 0x5BE0 | CILC-Adaptionswert warm High-Range Injektor 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BE1 | CILC-Adaptionswert warm High-Range Injektor 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BE2 | CILC-Adaptionswert warm High-Range Injektor 3 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BE3 | CILC-Adaptionswert warm High-Range Injektor 4 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BE4 | CILC-Adaptionswert warm High-Range Injektor 5 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BE5 | CILC-Adaptionswert warm High-Range Injektor 6 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BF0 | CILC-Adaptionswert warm Low-Range Injektor 1 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BF1 | CILC-Adaptionswert warm Low-Range Injektor 2 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BF2 | CILC-Adaptionswert warm Low-Range Injektor 3 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BF3 | CILC-Adaptionswert warm Low-Range Injektor 4 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BF4 | CILC-Adaptionswert warm Low-Range Injektor 5 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0x5BF5 | CILC-Adaptionswert warm Low-Range Injektor 6 | % | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| 0xXYXY | UWB_UNKNOWN | - | - | - | - | - | - | - |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

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

### MESSWERTETAB

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ITANS | 0x4200 | STAT_ANSAUGLUFTTEMPERATUR_WERT | Ansauglufttemperatur 1 | °C | TIA | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| IPUMG | 0x4201 | STAT_UMGEBUNGSDRUCK_WERT | Umgebungsdruck | hPa | AMP_MES | - | unsigned integer | - | 0,08291752636432648 | 1 | 0,0 |
| IPSAU | 0x4202 | STAT_SAUGROHRDRUCK_WERT | Saugrohrdruck | hPa | MAP_MES | - | unsigned integer | - | 0,08291752636432648 | 1 | 0,0 |
| ILMKG | 0x4203 | STAT_LUFTMASSE_WERT | Massenstrom vom HFM | kg/h | MAF_KGH_MES | - | unsigned integer | - | 0,03125 | 1 | 0,0 |
| ITUMG | 0x4204 | STAT_UMGEBUNGSTEMPERATUR_WERT | Umgebungstemperatur | °C | TAM | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| IPLAD | 0x4205 | STAT_LADEDRUCK_WERT | Saugrohrdruck 1 / Ladedruck 1 | hPa | MAP_DIP_MES_BAS | - | unsigned integer | - | 0,08291752636432648 | 1 | 0,0 |
| ITKUM | 0x4300 | STAT_KUEHLMITTELTEMPERATUR_WERT | Kühlwassertemperatur | °C | TCO | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| STAT_0x4301_WERT | 0x4301 | STAT_0x4301_WERT | Kühlerauslasstemperatur | °C | TCO_2 | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| IPWAB | 0x4302 | STAT_WASSERPUMPENLEISTUNG_BSD_WERT | Wasserpumpe Leistung über BSD | % | REL_CWP_PWR | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| ITWAE | 0x4303 | STAT_WASSERPUMPE_ELEKTRONIK_TEMPERATUR_WERT | Wasserpumpe Elektronik Temperatur | °C | TEMP_EL_CWP | - | unsigned char | - | 1,0 | 1 | -50,0 |
| IIWAP | 0x4304 | STAT_WASSERPUMPE_STROM_WERT | Wasserpumpe Strom | A | CUR_CNS_CWP | - | unsigned char | - | 0,5 | 1 | 0,0 |
| INWAP | 0x4305 | STAT_WASSERPUMPE_DREHZAHL_WERT | Wasserpumpe Drehzahl Ist | - | N_REL_CWP | - | unsigned char | - | 1,0 | 1 | 0,0 |
| SNWAP | 0x4306 | STAT_WASSERPUMPE_DREHZAHL_SOLL_WERT | Wasserpumpe Drehzahl Soll | - | N_REL_CWP_SP | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IBAWP | 0x4307 | STAT_WASSERPUMPE_BETRIEBSART_WERT | Wasserpumpe Betriebsart | 0-n | BA_WM_IST | - | unsigned char | _CNV_S_11_Def_ba_wm_660 | 1 | 1 | 0 |
| IMLOE | 0x4400 | STAT_OELSTAND_LANGZEIT_MITTEL_WERT | Ölstand Mittelwert Langzeit | mm | OZ_NIVLANGT | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| IFSOE | 0x4401 | STAT_FUELLSTAND_MOTOROEL_WERT | Füllstand Motoröl | - | OZ_LP | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ITOEL | 0x4402 | STAT_OELTEMPERATUR_WERT | Öltemperatur | °C | TOEL | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| IKVLS | 0x4403 | STAT_KRAFTSTOFFVERBRAUCH_SEIT_SERVICE_WERT | Kraftstoff-Verbrauch seit letztem Service | - | OZ_KVBSM_UL | - | unsigned long | - | 1,220703125E-4 | 1 | 0,0 |
| IKMLS | 0x4404 | STAT_WEG_SEIT_SERVICE_WERT | km seit letztem Service | km | OZ_OELKM | - | unsigned integer | - | 10,0 | 1 | 0,0 |
| RNIOE | 0x4405 | STAT_OELSENSOR_NIVEAU_ROH_WERT | Ölsensor Niveau Rohwert | - | OZ_NIVR | - | unsigned char | - | 1,0 | 1 | 0,0 |
| RQUOE | 0x4406 | STAT_OELSENSOR_QUALITAET_ROH_WERT | Ölsensor Qualität Rohwert | - | OZ_PERMR | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| RTOEL | 0x4407 | STAT_OELSENSOR_TEMPERATUR_ROH_WERT | Ölsensor Temperatur Rohwert | - | OZ_TEMPR | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ITSOE | 0x4408 | STAT_OELSENSOR_TEMPERATUR_WERT | Ölsensor Temperatur | °C | OZ_TEMPAKT | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| INIOE | 0x4409 | STAT_OELSENSOR_NIVEAU_WERT | Ölsensor Niveau | mm | OZ_NIVAKT | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| IQOEL | 0x440A | STAT_OELSENSOR_QUALITAET_WERT | Ölsensor Qualität | - | OZ_PERMAKT | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 |
| STAT_0x440B_WERT | 0x440B | STAT_0x440B_WERT | Länderfaktor 1 codiert | - | OZ_LF1C | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| STAT_0x440C_WERT | 0x440C | STAT_0x440C_WERT | Länderfaktor 2 codiert | - | OZ_LF2C | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| STAT_0x440D_WERT | 0x440D | STAT_0x440D_WERT | Länderfaktor 1 | - | OZ_LF1T | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| STAT_0x440E_WERT | 0x440E | STAT_0x440E_WERT | Länderfaktor 2 | - | OZ_LF2T | - | unsigned char | - | 0,009999999776482582 | 1 | 0,0 |
| STAT_0x440F_WERT | 0x440F | STAT_0x440F_WERT | Kurzmittelwert-Niveau für den Tester | mm | OZ_NIVKRZT | - | unsigned char | - | 0,29296875 | 1 | 0,0 |
| STAT_0x4410_WERT | 0x4410 | STAT_0x4410_WERT | Restweg aus Permittivität abgeleitet | km | OZ_RWPERM | - | signed integer | - | 10,0 | 1 | 0,0 |
| STAT_0x4411_WERT | 0x4411 | STAT_0x4411_WERT | Restweg aus Kraftstoffverbrauch abgeleitet | km | OZ_RWKVB | - | signed integer | - | 10,0 | 1 | 0,0 |
| STAT_0x4412_WERT | 0x4412 | STAT_0x4412_WERT | Öl-Alter in Monate | - | OZ_OELZEIT | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4413_WERT | 0x4413 | STAT_0x4413_WERT | aufbereitete Permittivität bei letztem Ölwechsel | - | OZ_PERMLOW | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 |
| STAT_0x4414_WERT | 0x4414 | STAT_0x4414_WERT | Permittivität für Bewertung aufbereitet (extrapoliert) | - | OZ_PERMEX | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 |
| STAT_0x4415_WERT | 0x4415 | STAT_0x4415_WERT | Offset für Permittivitätskorrektur | - | OZ_PERMOFF | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 |
| STAT_0x4416_WERT | 0x4416 | STAT_0x4416_WERT | zugeteilte Bonuskraftstoffmenge | - | OZ_KVBOG | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4417_WERT | 0x4417 | STAT_0x4417_WERT | zugeteilter Permittivitätsbonus | - | OZ_PERMBOG | - | unsigned integer | - | 9,1552734375E-5 | 1 | 0,0 |
| STAT_0x4418_WERT | 0x4418 | STAT_0x4418_WERT | Status Peilstabanzeige | - | OZ_LV | - | unsigned char | - | 1,0 | 1 | 0,0 |
| SSPEI | 0x4505 | STAT_NW_EINLASSSPREIZUNG_SOLL_WERT | Sollwert Einlassspreizung | °CRK | CAM_SP_IVVT_IN | - | unsigned char | - | 0,375 | 1 | 59,99999821186071 |
| IPNWE | 0x4506 | STAT_POSITION_NOCKENWELLE_EINLASS_WERT | Nockenwellenposition Einlass | °CRK | PSN_CAM_IN_1 | - | unsigned integer | - | 0,375 | 1 | -95,99999713897714 |
| IPNWA | 0x4507 | STAT_POSITION_NOCKENWELLE_AUSLASS_WERT | Nockenwellenposition Auslass | °CRK | PSN_CAM_EX_1 | - | unsigned integer | - | 0,375 | 1 | -95,99999713897714 |
| ISNWE | 0x4508 | STAT_NW_EINLASSSPREIZUNG_WERT | Istwert Einlassspreizung | °CRK | CAM_IN[1] | - | unsigned char | - | 0,375 | 1 | 59,99999821186071 |
| ISNWA | 0x4509 | STAT_NW_AUSLASSSPREIZUNG_WERT | Istwert Auslassspreizung | °CRK | CAM_EX[1] | - | unsigned char | - | -0,375 | 1 | -39,99999785423285 |
| NSNWA | 0x450A | STAT_NW_NORMSPREIZUNG_AUSLASS_WERT | Normspreizung Auslass | °CRK | CAM_SP_REF_EX | - | signed integer | - | 0,0234375 | 1 | 0,0 |
| NSNWE | 0x450B | STAT_NW_NORMSPREIZUNG_EINLASS_WERT | Normspreizung Einlass | °CRK | CAM_SP_REF_IN | - | signed integer | - | 0,0234375 | 1 | 0,0 |
| IWDKL | 0x4600 | STAT_DROSSELKLAPPENWINKEL_WERT | aktueller Drosselklappenwinkel | °TPS | TPS_AV | - | unsigned integer | - | 0,007294146344065666 | 1 | 0,0 |
| STAT_0x4601_WERT | 0x4601 | STAT_DROSSELKLAPPENWINKEL_SOLL_WERT | Drosselklappe Sollwert aus Modell | °TPS | TPS_SP_MDL | - | unsigned integer | - | 0,007294146344065666 | 1 | 0,0 |
| SUGEB | 0x4602 | STAT_GENERATOR_SPANNUNG_BSD_SOLL_WERT | Generator Sollspannung über BSD | V | V_ALTER_SP | - | unsigned char | - | 0,100000001490116 | 1 | 10,6 |
| ITGEE | 0x4603 | STAT_GENERATOR_ELEKTRONIKTEMPERATUR_WERT | Chiptemperatur Generator 1 | °C | TCHIP | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| IIGEN | 0x4604 | STAT_GENERATOR_STROM_WERT | Generator Strom | - | I_GEN | - | unsigned char | - | 1,0 | 1 | 0,0 |
| VGENE | 0x4605 | STAT_GENERATOR_CHIPVERSION_WERT | Chipversion Generator 1 | - | BSDGENCV | - | unsigned char | - | 1,0 | 1 | 0,0 |
| VGENR | 0x4606 | STAT_GENERATOR_REGLERVERSION_WERT | Reglerversion Generator 1 | - | BSDGENREGV | - | unsigned char | - | 1,0 | 1 | 0,0 |
| VGENH | 0x4607 | STAT_GENERATOR_HERSTELLERCODE_WERT | Herstellercode Generator 1 | - | GEN_MANUFAK | - | unsigned char | - | 1,0 | 1 | 0,0 |
| VGTYP | 0x4608 | STAT_GENERATOR_TYP_WERT | Kennung Generatortyp Generator 1 | - | GEN_TYPKENN | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IUK87 | 0x4609 | STAT_KL87_SPANNUNG_WERT | Kl.87 Spannung / Versorgung DME | V | VB | - | unsigned char | - | 0,1015624925494194 | 1 | 0,0 |
| IUBAT | 0x460A | STAT_UBATT_WERT | Batteriespannung aktuell | V | UBT | - | unsigned integer | - | 0,014999999664723873 | 1 | 0,0 |
| IUIBS | 0x460B | STAT_UBATT_IBS_WERT | Batteriespannung von IBS gemessen | - | U_BATT | - | unsigned integer | - | 2,500000118743628E-4 | 1 | 6,0 |
| IUADW | 0x460C | STAT_UBATT_AD_WANDLER_WERT | Batteriespannung vom AD-Wandler DME | V | VB_BAS | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| STAT_0x460D_WERT | 0x460D | STAT_0x460D_WERT | Korrekturwert Abschaltung | - | ABSCH_KORR | - | signed integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x460E_WERT | 0x460E | STAT_0x460E_WERT | Abstand zur Startfähigkeitsgrenze | - | D_SOC | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| ILBAT | 0x460F | STAT_BATTERIELAST_WERT | Batterielast | % | LOAD_BAT | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IPDIS | 0x4610 | STAT_DISAKLAPPEN_POSITION_WERT | aktuelle Position Disaklappen | % | VIM_AV | - | unsigned integer | - | 0,003051757114008069 | 1 | 0,0 |
| STELU | 0x4611 | STAT_E_LUEFTER_PWM_SOLL_WERT | Sollwert E-Lüfter als PWM Wert | % | N_PERC_ECF | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IIEGE | 0x4612 | STAT_GENERATOR_ERREGERSTROM_WERT | Erregerstrom Generator 1 | A | IERR | - | unsigned char | - | 0,125 | 1 | 0,0 |
| STAT_0x4613_WERT | 0x4613 | STAT_0x4613_WERT | Kopierter Wert von zum Generator gesendeter Sollspannung Generator 1 | V | U_FGEN | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| IGENA | 0x4614 | STAT_AUSLASTUNGSGRAD_GENERATOR_WERT | Auslastungsgrad Generator 1 | % | DFSIGGEN | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x4615_WERT | 0x4615 | STAT_0x4615_WERT | Kopie begrenzter Erregerstrom Generator 1 | A | IERRFGRENZ | - | unsigned char | - | 0,125 | 1 | 0,0 |
| STAT_0x4616_WERT | 0x4616 | STAT_0x4616_WERT | Kopie Generator 1 LR Vorgabe auf Bus gelegt | s | TLRFGEN | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| MGENG | 0x4617 | STAT_GEFILTERTES_GENERATORMOMENT_ABSOLUT_(AUSGANG)_WERT | gefiltertes Generatormoment absolut Ausgang | Nm | MD_GENNM | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x4618_WERT | 0x4618 | STAT_0x4618_WERT | Kopie Drehzahlschwelle für LR-Funktion Generator 1 aktiv | 0/1 | B_LRFOFF | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x4619_WERT | 0x4619 | STAT_0x4619_WERT | Bedingung BSD II Protokoll | 0/1 | B_BSDPROT2 | - | unsigned char | - | 1 | 1 | 0 |
| IUNGE | 0x461A | STAT_NOMINALE_GENERATORSPANNUNG_WERT | Nominale Generatorspannung | V | UREGNOM | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| ISBV1 | 0x4700 | STAT_SONDENBEREITSCHAFT_VORKAT_BANK1 | Status Lambdasonde betriebsbereit vor Katalysator Bank 1 | 0/1 | LV_IPLSL_VLD[1] | - | unsigned char | - | 1 | 1 | 0 |
| ISBV2 | 0x4701 | STAT_SONDENBEREITSCHAFT_VORKAT_BANK2 | Status Lambdasonde betriebsbereit vor Katalysator Bank 2 | 0/1 | LV_IPLSL_VLD[2] | - | unsigned char | - | 1 | 1 | 0 |
| IUSO1 | 0x4702 | STAT_SONDENSPANNUNG_VORKAT_BANK1_MIT_OFFSET_WERT | Spannung Lambdasonde vor Katalysator Bank 1 mit Offsetkorrektur | V | VLS_UP_COR[1] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUSO2 | 0x4703 | STAT_SONDENSPANNUNG_VORKAT_BANK2_MIT_OFFSET_WERT | Spannung Lambdasonde vor Katalysator Bank 2 mit Offsetkorrektur | V | VLS_UP_COR[2] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| SINT1 | 0x4704 | STAT_LAMBDA_BANK1_SOLL_WERT | Lambda Sollwert Bank 1 | - | LAMB_BAS[1] | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| SINT2 | 0x4705 | STAT_LAMBDA_BANK2_SOLL_WERT | Lambda Sollwert Bank 2 | - | LAMB_BAS[2] | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| STAT_0x4710_WERT | 0x4710 | STAT_0x4710_WERT | Kleinstmengenadaption kalt Injektor 1 | mg/stk | MFF_ADD_COLD_LAM_AD_INJ[0] | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| STAT_0x4711_WERT | 0x4711 | STAT_0x4711_WERT | Kleinstmengenadaption kalt  Injektor 5 | mg/stk | MFF_ADD_COLD_LAM_AD_INJ[1] | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| STAT_0x4712_WERT | 0x4712 | STAT_0x4712_WERT | Kleinstmengenadaption kalt Injektor 3 | mg/stk | MFF_ADD_COLD_LAM_AD_INJ[2] | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| STAT_0x4713_WERT | 0x4713 | STAT_0x4713_WERT | Kleinstmengenadaption kalt Injektor 6 | mg/stk | MFF_ADD_COLD_LAM_AD_INJ[3] | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| STAT_0x4714_WERT | 0x4714 | STAT_0x4714_WERT | Kleinstmengenadaption kalt Injektor 2 | mg/stk | MFF_ADD_COLD_LAM_AD_INJ[4] | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| STAT_0x4715_WERT | 0x4715 | STAT_0x4715_WERT | Kleinstmengenadaption kalt  Injektor 4 | mg/stk | MFF_ADD_COLD_LAM_AD_INJ[5] | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| STAT_0x4716_WERT | 0x4716 | STAT_0x4716_WERT | Kleinstmengenadaption warm Injektor 1 | mg/stk | MFF_ADD_HOT_LAM_AD_INJ[0] | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| STAT_0x4717_WERT | 0x4717 | STAT_0x4717_WERT | Kleinstmengenadaption warm Injektor 5 | mg/stk | MFF_ADD_HOT_LAM_AD_INJ[1] | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| STAT_0x4718_WERT | 0x4718 | STAT_0x4718_WERT | Kleinstmengenadaption warm Injektor 3 | mg/stk | MFF_ADD_HOT_LAM_AD_INJ[2] | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| STAT_0x4719_WERT | 0x4719 | STAT_0x4719_WERT | Kleinstmengenadaption warm Injektor 6 | mg/stk | MFF_ADD_HOT_LAM_AD_INJ[3] | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| STAT_0x471A_WERT | 0x471A | STAT_0x471A_WERT | Kleinstmengenadaption warm Injektor 2 | mg/stk | MFF_ADD_HOT_LAM_AD_INJ[4] | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| STAT_0x471B_WERT | 0x471B | STAT_0x471B_WERT | Kleinstmengenadaption warm Injektor 4 | mg/stk | MFF_ADD_HOT_LAM_AD_INJ[5] | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| STAT_0x471C_WERT | 0x471C | STAT_0x471C_WERT | Abstand zur nächsten Kleinstmengenadaption kalt | km | DIST_LAM_AD_INJ_COLD | - | unsigned integer | - | 8,0 | 1 | 0,0 |
| STAT_0x471D_WERT | 0x471D | STAT_0x471D_WERT | Abstand zur nächsten Kleinstmengenadaption warm | km | DIST_LAM_AD_INJ_HOT | - | unsigned integer | - | 8,0 | 1 | 0,0 |
| STAT_0x471E_WERT | 0x471E | STAT_0x471E_WERT | Zähler Kleinstmengenadaption kalt | - | CTR_AD_COLD_LAM_AD_INJ | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x471F_WERT | 0x471F | STAT_0x471F_WERT | Zähler Kleinstmengenadaption warm | - | CTR_AD_HOT_LAM_AD_INJ | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x4720_WERT | 0x4720 | STAT_0x4720_WERT | NOX-Sensor Eigendiagnosewert | - | RATIO_MMV_NS_SHIFT_DIAG[1] | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x4721_WERT | 0x4721 | STAT_0x4721_WERT | Anzahl der erfolgten NOX-Sensor-Systemadaptionen | - | CTR_NS_SHIFT_CYC[1] | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4722_WERT | 0x4722 | STAT_0x4722_WERT | km-stand bei letzter Nox-Sensor-Eigendiagnose | km | DIST_NT_NS_SHIFT[1] | - | unsigned integer | - | 8,0 | 1 | 0,0 |
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
| STAT_0x4850_WERT | 0x4850 | STAT_0x4850_WERT | Anzahl misfire über Lebenszeit, Zyl. 1 | - | CTR_MIS_DET_CYL[0] | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4851_WERT | 0x4851 | STAT_0x4851_WERT | Anzahl misfire über Lebenszeit, Zyl. 5 | - | CTR_MIS_DET_CYL[1] | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4852_WERT | 0x4852 | STAT_0x4852_WERT | Anzahl misfire über Lebenszeit, Zyl. 3 | - | CTR_MIS_DET_CYL[2] | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4853_WERT | 0x4853 | STAT_0x4853_WERT | Anzahl misfire über Lebenszeit, Zyl. 6 | - | CTR_MIS_DET_CYL[3] | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4854_WERT | 0x4854 | STAT_0x4854_WERT | Anzahl misfire über Lebenszeit, Zyl. 2 | - | CTR_MIS_DET_CYL[4] | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x4855_WERT | 0x4855 | STAT_0x4855_WERT | Anzahl misfire über Lebenszeit, Zyl. 4 | - | CTR_MIS_DET_CYL[5] | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x5800_WERT | 0x5800 | STAT_0x5800_WERT | Zeit nach Start | s | OBD_T_AST | - | unsigned char | - | 256,0 | 1 | 0,0 |
| STAT_0x5801_WERT | 0x5801 | STAT_0x5801_WERT | Umgebungsdruck | kPa | OBD_AMP | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ICLR1 | 0x5802 | STAT_LAMBDAREGELUNG_ZUSTAND_BANK1_WERT | Zustand Lambdaregelung Bank 1 | 0-n | STATE_LS[1] | - | unsigned char | _CNV_S_5_LACO_RANGE_439 | 1 | 1 | 0 |
| ICLR2 | 0x5803 | STAT_LAMBDAREGELUNG_ZUSTAND_BANK2_WERT | Zustand Lambdaregelung Bank 2 | 0-n | STATE_LS[2] | - | unsigned char | _CNV_S_5_LACO_RANGE_439 | 1 | 1 | 0 |
| SLAST | 0x5804 | STAT_LASTWERT_BERECHNET_WERT | Berechneter Lastwert | % | LOAD_CLC | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x5805_WERT | 0x5805 | STAT_0x5805_WERT | Kühlmitteltemperatur OBD | °C | OBD_TCO | - | unsigned char | - | 1,0 | 1 | -40,0 |
| ILIN1 | 0x5806 | STAT_LAMBDA_INTEGRATOR_GRUPPE1_WERT | Lambda Integrator Gruppe 1 | % | OBD_LAM_COR[1] | - | unsigned char | - | 0,78125 | 1 | -100,00000223517424 |
| ILAM1 | 0x5807 | STAT_LAMBDA_ADAPTION_MULTIPLIKATIV_GRUPPE1_WERT | Lambda Adaption Summe mul. und add. Gruppe 1 | % | OBD_LAM_AD[1] | - | unsigned char | - | 0,78125 | 1 | -100,00000223517424 |
| ILIN2 | 0x5808 | STAT_LAMBDA_INTEGRATOR_GRUPPE2_WERT | Lambda Integrator Gruppe 2 | % | OBD_LAM_COR[2] | - | unsigned char | - | 0,78125 | 1 | -100,00000223517424 |
| ILAM2 | 0x5809 | STAT_LAMBDA_ADAPTION_MULTIPLIKATIV_GRUPPE2_WERT | Lambda Adaption Summe mul. und add. Gruppe 2 | % | OBD_LAM_AD[2] | - | unsigned char | - | 0,78125 | 1 | -100,00000223517424 |
| STAT_0x580A_WERT | 0x580A | STAT_0x580A_WERT | Mittlere Sollkraftstoffmasse | mg/stk | MFF_SP_MV_KWP | - | unsigned char | - | 5,44705867767334 | 1 | 0,0 |
| IPSA2 | 0x580B | STAT_SAUGROHRDRUCK_2_WERT | Saugrohrdruck | kPa | OBD_MAP | - | unsigned char | - | 1,0 | 1 | 0,0 |
| INAUF | 0x580C | STAT_N_AUFLOESUNG_WERT | Drehzahl | rpm | OBD_N | - | unsigned char | - | 64,0 | 1 | 0,0 |
| IVKM2 | 0x580D | STAT_GESCHWINDIGKEIT_2_WERT | Geschwindigkeit | km/h | VS | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IZZY1 | 0x580E | STAT_ZUENDZEITPUNKT_ZYL1_WERT | Zündzeitpunkt Zylinder 1 | °CRK | OBD_IGA_IGC | - | unsigned char | - | 0,5 | 1 | -64,0 |
| ITANL | 0x580F | STAT_ANSAUGLUFTTEMPERATUR_LAW_WERT | Ansauglufttemperatur | °C | OBD_TIA | - | unsigned char | - | 1,0 | 1 | -40,0 |
| ILMGS | 0x5810 | STAT_LUFTMASSE_GRAMM_PRO_SEKUNDE_WERT | Luftdurchsatz OBD | g/s | OBD_MAF | - | unsigned char | - | 2,559999942779541 | 1 | 0,0 |
| INM32 | 0x5811 | STAT_MOTORDREHZAHL_N32_WERT | Motordrehzahl | rpm | N_32 | - | unsigned char | - | 32,0 | 1 | 0,0 |
| STAT_0x5812_WERT | 0x5812 | STAT_0x5812_WERT | Luftmasse gemessen | kg/h | MAF_KGH_MES_BAS | - | unsigned char | - | 8,0 | 1 | 0,0 |
| ILREL | 0x5813 | STAT_LASTWERT_RELATIV_WERT | Relative Last | % | RF | - | signed char | - | 2,559999942779541 | 1 | 0,0 |
| STAT_0x5814_WERT | 0x5814 | STAT_0x5814_WERT | Fahrpedalwert | % | PV_AV_RAW | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x5815_WERT | 0x5815 | STAT_0x5815_WERT | Batteriespannung | V | OBD_VB | - | unsigned char | - | 0,25600001215934753 | 1 | 0,0 |
| STAT_0x5816_WERT | 0x5816 | STAT_0x5816_WERT | Lambda Setpoint | - | OBD_LAMB_SP | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| STAT_0x5817_WERT | 0x5817 | STAT_0x5817_WERT | Umgebungstemperatur | °C | OBD_TAM | - | unsigned char | - | 1,0 | 1 | -40,0 |
| ILMMG | 0x5818 | STAT_LUFTMASSE_PRO_HUB_WERT | Luftmasse gerechnet | mg/stk | MAF | - | unsigned char | - | 5,425863742828369 | 1 | 0,0 |
| STAT_0x5819_WERT | 0x5819 | STAT_0x5819_WERT | Drehzahl OBD Byte | rpm | N_SAE_BYTE_KWP | - | unsigned char | - | 64,0 | 1 | 0,0 |
| STAT_0x581A_WERT | 0x581A | STAT_0x581A_WERT | Nockenwelle Einlass | °CRK | CAM_IN[1] | - | unsigned char | - | 0,375 | 1 | 59,99999821186071 |
| SANWE | 0x581B | STAT_NW_AUSLASS_SOLL_WERT | Nockenwelle Einlass Sollwert | °CRK | CAM_SP_IVVT_IN | - | unsigned char | - | 0,375 | 1 | 59,99999821186071 |
| STAT_0x581C_WERT | 0x581C | STAT_0x581C_WERT | Nockenwelle Auslass | °CRK | CAM_EX[1] | - | unsigned char | - | -0,375 | 1 | -39,99999785423285 |
| STAT_0x581D_WERT | 0x581D | STAT_0x581D_WERT | Nockenwelle Auslass Sollwert | °CRK | CAM_SP_IVVT_EX | - | unsigned char | - | -0,375 | 1 | -39,99999785423285 |
| STAT_0x581E_WERT | 0x581E | STAT_0x581E_WERT | Ansauglufttemperatur | °C | TIA_MES | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| ITMOT | 0x581F | STAT_MOTORTEMPERATUR_WERT | Motortemperatur | °C | TCO_MES | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| STAT_0x5820_WERT | 0x5820 | STAT_0x5820_WERT | Kühlmitteltemperatur Kühlerausgang | °C | TCO_2_MES | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| STAT_0x5821_WERT | 0x5821 | STAT_0x5821_WERT | Steuergeräte-Innentemperatur | °C | TECU | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| STAT_0x5822_WERT | 0x5822 | STAT_0x5822_WERT | (Motor)-Öltemperatur | °C | TOIL_MES | - | unsigned char | - | 1,0 | 1 | -40,0 |
| IZMOS | 0x5823 | STAT_ZEIT_MOTOR_STEHT_WERT | Zeit Motor steht | min | T_ES | - | unsigned char | - | 256,0 | 1 | 0,0 |
| STAT_0x5824_WERT | 0x5824 | STAT_0x5824_WERT | Umgebungstemperatur | °C | TAM | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| STAT_0x5825_WERT | 0x5825 | STAT_0x5825_WERT | Abstellzeit | min | T_ES_CUS_KWP | - | unsigned char | - | 4,0 | 1 | 0,0 |
| IDKS1 | 0x5826 | STAT_DROSSELKLAPPE_SENSOR1_WERT | Drosselklappe Sensor 1 | °TPS | TPS_AV_1 | - | unsigned char | - | 1,8673014640808105 | 1 | 0,0 |
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
| IMOST | 0x5832 | STAT_MOTOR_STATUS_WERT | Motor Status | 0-n | STATE_ENG | - | unsigned char | _CNV_S_6_RANGE_STAT_179 | 1 | 1 | 0 |
| STAT_0x5833_WERT | 0x5833 | STAT_0x5833_WERT | Umgebungstemperatur beim Start | °C | TAM_ST | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| STAT_0x5834_WERT | 0x5834 | STAT_0x5834_WERT | Umgebungsdruck | hPa | AMP_MES | - | unsigned char | - | 21,226886749267578 | 1 | 0,0 |
| STAT_0x5835_WERT | 0x5835 | STAT_0x5835_WERT | Herstellercode Generator 1 | - | GEN_MANUFAK | - | unsigned char | - | 1,0 | 1 | 0,0 |
| INGRD | 0x5836 | STAT_DREHZAHLGRADIENT_WERT | Drehzahlgradient | rpm/s | N_GRD | - | signed char | - | 32,0 | 1 | 0,0 |
| STAT_0x5837_WERT | 0x5837 | STAT_0x5837_WERT | Status OBD-I Fehler vor Katalysator Bank 1 | 0-n | STATE_ERR_EL_LSL_UP[1] | - | unsigned char | _CNV_S_11_EGCP_RANGE_389 | 1 | 1 | 0 |
| STAT_0x5838_WERT | 0x5838 | STAT_0x5838_WERT | Status OBD-I Fehler vor Katalysator Bank 2 | 0-n | STATE_ERR_EL_LSL_UP[2] | - | unsigned char | _CNV_S_11_EGCP_RANGE_389 | 1 | 1 | 0 |
| ISDKN | 0x5839 | STAT_DROSSELKLAPPE_NOTLAUF_WERT | Status Drosselklappe Notlauf | 0-n | STATE_ETC_LIH | - | unsigned char | _CNV_S_5_RANGE_STAT_301 | 1 | 1 | 0 |
| STAT_0x583A_WERT | 0x583A | STAT_0x583A_WERT | Ansauglufttemperatur beim Start | °C | TIA_ST | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| IKTFS | 0x583B | STAT_KRAFTSTOFFTANK_FUELLSTAND_WERT | Kraftstofftank Füllstand | l | FTL | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x583C_WERT | 0x583C | STAT_0x583C_WERT | Spannung Kl. 87 | V | VB | - | unsigned char | - | 0,1015624925494194 | 1 | 0,0 |
| STAT_0x583D_WERT | 0x583D | STAT_0x583D_WERT | Resettyp | - | RST_CLAS_TYP[0] | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x583E_WERT | 0x583E | STAT_0x583E_WERT | Motordrehzahl bei Reset | rpm | N_RST_DET_KWP | - | unsigned char | - | 32,0 | 1 | 0,0 |
| STAT_0x583F_WERT | 0x583F | STAT_0x583F_WERT | Drosselklappe Sollwert | °TPS | TPS_SP | - | unsigned char | - | 1,8673014640808105 | 1 | 0,0 |
| STAT_0x5840_WERT | 0x5840 | STAT_0x5840_WERT | CPU Last bei Reset | % | CPU_LOAD_RST_DET_KWP | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| RTSGR | 0x5841 | STAT_STEUERGERAETE_INNENTEMPERATUR_ROH_WERT | SG-Innentemperatur Rohwert | V | VP_TECU_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5842_WERT | 0x5842 | STAT_0x5842_WERT | Kennung Generatortyp Generator 1 | - | GEN_TYPKENN | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x5843_WERT | 0x5843 | STAT_0x5843_WERT | Versorgung Fahrtwertgeber 1 | V | VCC_PVS_1_KWP | - | unsigned char | - | 0,0390625037252903 | 1 | 0,0 |
| STAT_0x5844_WERT | 0x5844 | STAT_0x5844_WERT | Chiptemperatur Generator 1 | °C | TCHIP_KWP | - | unsigned char | - | 1,0 | 1 | -48,0 |
| STAT_0x5845_WERT | 0x5845 | STAT_0x5845_WERT | Spannung Lambdasonde vor Katalysator Bank 1 | V | VLS_UP_KWP[1] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5846_WERT | 0x5846 | STAT_0x5846_WERT | Spannung Pedalwertgeber 1 | V | V_PVS_1_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5847_WERT | 0x5847 | STAT_0x5847_WERT | Spannung Pedalwertgeber 2 | V | V_PVS_2_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5848_WERT | 0x5848 | STAT_0x5848_WERT | Spannung Lambdasonde vor Katalysator Bank 2 | V | VLS_UP_KWP[2] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5849_WERT | 0x5849 | STAT_0x5849_WERT | Spannung Lambdasonde hinter Katalysator Bank 1 | V | VLS_DOWN_KWP[1] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| RUK15 | 0x584A | STAT_KL15_SPANNUNG_ROH_WERT | Spannung Kl. 15 Rohwert | V | V_IGK_BAS_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x584B_WERT | 0x584B | STAT_0x584B_WERT | Spannung Lambdasonde hinter Katalysator Bank 2 | V | VLS_DOWN_KWP[2] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x584C_WERT | 0x584C | STAT_0x584C_WERT | Spannung Drosselklappe Potentiometer 2 | V | V_TPS_2_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| SQTEK | 0x584D | STAT_TANKENTLUEFTUNG_DURCHFLUSS_SOLL_WERT | korrigierter Sollwert Durchfluss Tankentlüftung | kg/h | FLOW_COR_CPS | - | unsigned char | - | 0,03125 | 1 | 0,0 |
| STAT_0x584E_WERT | 0x584E | STAT_0x584E_WERT | Spannung Drosselklappe Potentiometer 1 | V | V_TPS_1_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x584F_WERT | 0x584F | STAT_0x584F_WERT | Spannung Luftmasse | V | V_MAF | - | unsigned char | - | 0,019600000232458115 | 1 | 0,0 |
| STAT_0x5850_WERT | 0x5850 | STAT_0x5850_WERT | Spannung Motortemperatur | V | V_TCO_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5851_WERT | 0x5851 | STAT_0x5851_WERT | Spannung Ansauglufttemperatur | V | VP_TIA_KWP | - | unsigned char | - | 0,019600000232458115 | 1 | 0,0 |
| STAT_0x5852_WERT | 0x5852 | STAT_0x5852_WERT | Kühlmitteltemperatur Kühlerausgang Rohwert | V | V_TCO_2_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5853_WERT | 0x5853 | STAT_0x5853_WERT | Spannung Kl.87 Rohwert | V | VB_BAS_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5854_WERT | 0x5854 | STAT_0x5854_WERT | Versorgung Fahrtwertgeber 2 | V | VCC_PVS_2_KWP | - | unsigned char | - | 0,0390625037252903 | 1 | 0,0 |
| STAT_0x5855_WERT | 0x5855 | STAT_0x5855_WERT | Mittelwert Bank 1 | % | FAC_LAM_MV_MMV[1] | - | signed char | - | 0,390625 | 1 | 2,220446098881151E-14 |
| STAT_0x5856_WERT | 0x5856 | STAT_0x5856_WERT | Mittelwert Bank 2 | % | FAC_LAM_MV_MMV[2] | - | signed char | - | 0,390625 | 1 | 2,220446098881151E-14 |
| STAT_0x5857_WERT | 0x5857 | STAT_0x5857_WERT | Erregerstrom Generator 1 | A | IERR | - | unsigned char | - | 0,125 | 1 | 0,0 |
| IADKA | 0x5858 | STAT_AKTUELLER_DK_WINKEL_WERT | Drosselklappe aktueller Wert | °TPS | TPS_AV | - | unsigned char | - | 1,8673014640808105 | 1 | 0,0 |
| STAT_0x5859_WERT | 0x5859 | STAT_0x5859_WERT | DMTL Strom Referenzleck | mA | CUR_DMTL_REF_LEAK_KWP | - | unsigned char | - | 0,1953124701976776 | 1 | 0,0 |
| STAT_0x585A_WERT | 0x585A | STAT_0x585A_WERT | DMTL Strom Grobleck | mA | CUR_DMTL_ROUGH_LEAK_MIN_KWP | - | unsigned char | - | 0,1953124701976776 | 1 | 0,0 |
| STAT_0x585B_WERT | 0x585B | STAT_0x585B_WERT | DMTL Strom Diagnoseende | mA | CUR_DMTL_COR_FIL_KWP | - | unsigned char | - | 0,1953124701976776 | 1 | 0,0 |
| STAT_0x585C_WERT | 0x585C | STAT_0x585C_WERT | Widerstand Lambdasonde hinter Katalysator Bank 1 | ohm | R_IT_LS_DOWN_KWP_H[1] | - | unsigned char | - | 256,0 | 1 | 0,0 |
| IRLN2 | 0x585D | STAT_LAMBDASONDE_WIDERSTAND_NACHKAT2_WERT | Widerstand Lambdasonde hinter Katalysator Bank 2 | ohm | R_IT_LS_DOWN_KWP_H[2] | - | unsigned char | - | 256,0 | 1 | 0,0 |
| IRUN1 | 0x585E | STAT_LAMBDASONDE_WIDERSTAND_NACHKAT1_UNTERES_BYTE_WERT | unteres Byte Widerstand Lambdasonde hinter Katalysator Bank 1 | ohm | R_IT_LS_DOWN_KWP_L[1] | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IRUN2 | 0x585F | STAT_LAMBDASONDE_WIDERSTAND_NACHKAT2_UNTERES_BYTE_WERT | unteres Byte Widerstand Lambdasonde hinter Katalysator Bank 2 | ohm | R_IT_LS_DOWN_KWP_L[2] | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IRLV1 | 0x5860 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT1_WERT | Widerstand Lambdasonde vor Katalysator Bank 1 | ohm | R_IT_LS_UP_KWP_H[1] | - | unsigned char | - | 64,0 | 1 | 0,0 |
| IRLV2 | 0x5861 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT2_WERT | Widerstand Lambdasonde vor Katalysator Bank 2 | ohm | R_IT_LS_UP_KWP_H[2] | - | unsigned char | - | 64,0 | 1 | 0,0 |
| STAT_0x5862_WERT | 0x5862 | STAT_0x5862_WERT | Öldruck Sollwert | hPa | P_OEL_SOLL_KWP | - | unsigned char | - | 32,0 | 1 | 0,0 |
| IRUV1 | 0x5863 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT1_UNTERES_BYTE_WERT | untere Byte Widerstand Lambdasonde vor Katalysator Bank 1 | ohm | R_IT_LS_UP_KWP_L[1] | - | unsigned char | - | 0,25 | 1 | 0,0 |
| IRUV2 | 0x5864 | STAT_LAMBDASONDE_WIDERSTAND_VORKAT2_UNTERES_BYTE_WERT | untere Byte Widerstand Lambdasonde vor Katalysator Bank 2 | ohm | R_IT_LS_UP_KWP_L[2] | - | unsigned char | - | 0,25 | 1 | 0,0 |
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
| STAT_0x586F_WERT | 0x586F | STAT_0x586F_WERT | Ist-Öldruck | hPa | P_OEL_IST_KWP | - | unsigned char | - | 32,0 | 1 | 0,0 |
| STAT_0x5870_WERT | 0x5870 | STAT_0x5870_WERT | Spannung DME Umgebungsdruck | V | V_AMP_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| SLAG1 | 0x5871 | STAT_LAMBDA_SOLLWERT_GRUPPE1_WERT | Lambda-Sollwert Gruppe 1 | - | LAMB_SP_KWP[1] | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| STAT_5872_WERT | 0x5872 | STAT_5872_WERT | Reglerversion Generator 1 | - | BSDGENREGV | - | unsigned char | - | 1,0 | 1 | 0,0 |
| SLAG2 | 0x5873 | STAT_LAMBDA_SOLLWERT_GRUPPE2_WERT | Lambda-Sollwert Gruppe 2 | - | LAMB_SP_KWP[2] | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| STAT_0x5874_WERT | 0x5874 | STAT_0x5874_WERT | Spannung Strommessung DMTL | V | V_DMTL_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5875_WERT | 0x5875 | STAT_0x5875_WERT | Sollwert Motormoment | Nm | TQI_SP_KWP | - | signed char | - | 2,0 | 1 | 0,0 |
| STAT_0x5876_WERT | 0x5876 | STAT_0x5876_WERT | Raildruck OBD (High Byte) | kPa | OBD_FUP_RNG_H_H | - | unsigned char | - | 2560,0 | 1 | 0,0 |
| STAT_0x5877_WERT | 0x5877 | STAT_0x5877_WERT | Raildruck OBD (Low Byte) | kPa | OBD_FUP_RNG_H_L | - | unsigned char | - | 10,0 | 1 | 0,0 |
| ILRR1 | 0x5878 | STAT_LAMBDAVERSCHIEBUNG_RUECKFUEHRREGLER1_WERT | Lambdaverschiebung Rückführregler 1 | - | LAMB_DELTA_I_LAM_ADJ_KWP[1] | - | signed char | - | 9,765625E-4 | 1 | 0,0 |
| ILRR2 | 0x5879 | STAT_LAMBDAVERSCHIEBUNG_RUECKFUEHRREGLER2_WERT | Lambdaverschiebung Rückführregler 2 | - | LAMB_DELTA_I_LAM_ADJ_KWP[2] | - | signed char | - | 9,765625E-4 | 1 | 0,0 |
| ISFGR | 0x587A | STAT_FGR_WERT | Status FGR | 0-n | STATE_CRU | - | unsigned char | _CNV_S_6_RANGE_STAT_113 | 1 | 1 | 0 |
| IMAVA | 0x587B | STAT_ABGLEICH_AGR_VENTILMODELL_WERT | Abgleich Abgasrückführungsventilmodell (Faktor) | - | EISYAGR_KORFAK_B | - | unsigned char | - | 0,125 | 1 | 0,0 |
| ISMST | 0x587C | STAT_MOTORSTEUERUNG_WERT | Status Motorsteuerung | 0-n | ECU_STATE | - | unsigned char | _CNV_S_7_RANGE_ECU__177 | 1 | 1 | 0 |
| STAT_0x587D_WERT | 0x587D | STAT_0x587D_WERT | Symptom bei Schubabschaltung Sonde vor Katalysator Bank 1 | 0-n | STATE_SYM_DIAG_PUC_LSL_UP[1] | - | unsigned char | _CNV_S_4_EGCP_RANGE_400 | 1 | 1 | 0 |
| STAT_0x587E_WERT | 0x587E | STAT_0x587E_WERT | Symptom bei Schubabschaltung Sonde vor Katalysator Bank 2 | 0-n | STATE_SYM_DIAG_PUC_LSL_UP[2] | - | unsigned char | _CNV_S_4_EGCP_RANGE_400 | 1 | 1 | 0 |
| IELTV | 0x587F | STAT_E_LUEFTER_TASTVERHAELTNIS_WERT | Tastverhältnis E-Lüfter | % | ECFPWM[0] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x5880_WERT | 0x5880 | STAT_0x5880_WERT | Tastverhältnis Luftklappe | % | ECRASPWM | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| SBEGA | 0x5881 | STAT_BERECHNETER_GANG_WERT | berechneter Gang | - | GEAR | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ITMOS | 0x5882 | STAT_MOTORTEMPERATUR_BEIM_START_WERT | Motortemperatur beim Start | °C | TCO_ST | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| STAT_0x5883_WERT | 0x5883 | STAT_0x5883_WERT | Spannung Klopfwerte Zylinder 1 | V | NL[0] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5884_WERT | 0x5884 | STAT_0x5884_WERT | Rückgelesener Erregergrenzstrom Generator 1 | A | IERRFGRENZ | - | unsigned char | - | 0,125 | 1 | 0,0 |
| STAT_0x5885_WERT | 0x5885 | STAT_0x5885_WERT | Spannung Klopfwerte Zylinder 3 | V | NL[2] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5886_WERT | 0x5886 | STAT_0x5886_WERT | Spannung Klopfwerte Zylinder 6 | V | NL[3] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5887_WERT | 0x5887 | STAT_0x5887_WERT | Auslastungsgrad Generator 1 | % | DFSIGGEN | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x5888_WERT | 0x5888 | STAT_0x5888_WERT | Spannung Klopfwerte Zylinder 4 | V | NL[5] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| ILAG1 | 0x5889 | STAT_LAMBDA_ISTWERT_GRUPPE1_WERT | Lambda-Istwert Gruppe 1 | - | LAMB_KWP[1] | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| ILAG2 | 0x588A | STAT_LAMBDA_ISTWERT_GRUPPE2_WERT | Lambda-Istwert Gruppe 2 | - | LAMB_KWP[2] | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| IZSSE | 0x588B | STAT_ZEIT_SEIT_STARTENDE_WERT | Zeit seit Startende | s | T_AST | - | unsigned char | - | 25,600000381469727 | 1 | 0,0 |
| ITKV1 | 0x588C | STAT_LAMBDASONDE_KERAMIKTEMPERATUR_VORKAT1_WERT | Keramiktemperatur Lambdasonde vor Katalysator Bank 1 | °C | TTIP_MES_LS_UP[1] | - | signed char | - | 16,0 | 1 | 0,0 |
| IZDML | 0x588D | STAT_ZEIT_DMTL_LECKMESSUNG_WERT | aktuelle Zeit DMTL Leckmessung | s | T_ACT_LEAK_MES | - | unsigned char | - | 25,600000381469727 | 1 | 0,0 |
| IIDMP | 0x588E | STAT_PUMPENSTROM_BEI_DMTL_PUMPENPRUEFUNG_WERT | Pumpenstrom bei DMTL Pumpenprüfung | mA | CUR_DMTL_DMTLS_TEST | - | unsigned char | - | 1,5625238418579102 | 1 | 0,0 |
| ITKV2 | 0x588F | STAT_LAMBDASONDE_KERAMIKTEMPERATUR_VORKAT2_WERT | Keramiktemperatur Lambdasonde vor Katalysator Bank 2 | °C | TTIP_MES_LS_UP[2] | - | signed char | - | 16,0 | 1 | 0,0 |
| STAT_0x5890_WERT | 0x5890 | STAT_0x5890_WERT |  Spannung Bremsunterdrucksensor | V | V_PBSU_KWP | - | unsigned char | - | 0,019531216472387314 | 1 | 0,0 |
| IMOKU | 0x5891 | STAT_MOMENTANFORDERUNG_KUPPLUNG_WERT | Momentanforderung an der Kupplung | Nm | TQ_REQ_CLU | - | signed char | - | 8,0 | 1 | 0,0 |
| STAT_0x5892_WERT | 0x5892 | STAT_0x5892_WERT |  Bremsunterdruck | hPa | PBSU_KWP | - | unsigned char | - | 5,306640625 | 1 | 0,0 |
| IDMGW | 0x5893 | STAT_DREHMOMENTABFALL_BEIM_GANGWECHSEL_WERT | Drehmomentabfall schnell bei Gangwechsel | Nm | TQI_GS_FAST_DEC | - | signed char | - | 8,0 | 1 | 0,0 |
| STAT_0x5894_WERT | 0x5894 | STAT_0x5894_WERT | Symptom Lambdasondenheizung vor Katalysator Bank 1 | 0-n | STATE_SYM_OBD_LSL_LSH_UP[1] | - | unsigned char | _CNV_S_4_EGCP_RANGE_391 | 1 | 1 | 0 |
| STAT_0x5895_WERT | 0x5895 | STAT_0x5895_WERT | Symptom Lambdasondenheizung vor Katalysator Bank 2 | 0-n | STATE_SYM_OBD_LSL_LSH_UP[2] | - | unsigned char | _CNV_S_4_EGCP_RANGE_391 | 1 | 1 | 0 |
| STAT_0x5896_WERT | 0x5896 | STAT_0x5896_WERT | Abgastemperatur hinter Katalysator Bank 1 | °C | TEG_CAT_DOWN_MDL[1] | - | unsigned char | - | 16,0 | 1 | 0,0 |
| STAT_0x5897_WERT | 0x5897 | STAT_0x5897_WERT | Abgastemperatur hinter Katalysator Bank 2 | °C | TEG_CAT_DOWN_MDL[2] | - | unsigned char | - | 16,0 | 1 | 0,0 |
| SUGEN | 0x5898 | STAT_GENERATOR_SPANNUNG_SOLL_WERT | Generator Sollspannung | V | V_ALTER_SP_KWP | - | unsigned char | - | 0,100000001490116 | 1 | 0,0 |
| STAT_0x5899_WERT | 0x5899 | STAT_0x5899_WERT | Istwert DISA-Position | % | VIM_AV | - | unsigned char | - | 0,7812498211860657 | 1 | 0,0 |
| STAT_0x589A_WERT | 0x589A | STAT_0x589A_WERT |  Tastverhältnis Nullgangsensor  | % | PWM_NEUT_PSN_GB_KWP | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IUOS1 | 0x589B | STAT_SPANNUNGSOFFSET_SIGNALPFAD1_WERT | Spannungsoffset Signalpfad CJ120 1 | V | VLS_OFS_LSL_KWP[1] | - | signed char | - | 0,0048827845603227615 | 1 | -3,607843264663677E-6 |
| IUOS2 | 0x589C | STAT_SPANNUNGSOFFSET_SIGNALPFAD2_WERT | Spannungsoffset Signalpfad CJ120 2 | V | VLS_OFS_LSL_KWP[2] | - | signed char | - | 0,0048827845603227615 | 1 | -3,607843264663677E-6 |
| STAT_0x589D_WERT | 0x589D | STAT_0x589D_WERT | Abweichung Lambdasonde zu Lambdamodellwert Überwachung | - | LAMB_DIF_MON_KWP | - | signed char | - | 0,015624979510903358 | 1 | -2,509803727102794E-6 |
| STAT_0x589E_WERT | 0x589E | STAT_0x589E_WERT | Alterungsfaktor durch Schwefel bedingt | - | NT_AGI_SUL_KWP | - | unsigned char | - | 0,00390625 | 1 | 0,0 |
| STAT_0x589F_WERT | 0x589F | STAT_0x589F_WERT | Zeit Katheizfunktion aktiv | s | T_CH_SO2P_ACT_KWP | - | unsigned char | - | 25,600000381469727 | 1 | 0,0 |
| STAT_0x58A0_WERT | 0x58A0 | STAT_0x58A0_WERT | Fahrstrecke seit letzter Desulfatisierung | km | DIST_SO2P_END_KWP | - | unsigned char | - | 40,0 | 1 | 0,0 |
| STAT_0x58A1_WERT | 0x58A1 | STAT_0x58A1_WERT | NOx-Konzentration | ppm | NOX_NS_KWP | - | signed char | - | 16,0 | 1 | 0,0 |
| STAT_0x58A2_WERT | 0x58A2 | STAT_0x58A2_WERT | lineares Spannungssignal NOx-Sensor | - | LAMB_NOX_SENS_KWP | - | unsigned char | - | 0,015625 | 1 | 0,0 |
| STAT_0x58A3_WERT | 0x58A3 | STAT_0x58A3_WERT | binäres Spannungssignal NOx-Sensor | mV | VLS_NOX_SENS_KWP | - | unsigned char | - | 8,0 | 1 | -200,0 |
| STAT_0x58A4_WERT | 0x58A4 | STAT_0x58A4_WERT | Status NOx-Sensor | - | CAN_STATE_NOX_SENS[1] | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58A5_WERT | 0x58A5 | STAT_0x58A5_WERT | gespeicherte Schwefelmasse im Katalysator | mg | NT_SUL_KWP | - | unsigned char | - | 40,959999084472656 | 1 | 0,0 |
| STAT_0x58A6_WERT | 0x58A6 | STAT_0x58A6_WERT | resultierender NOxKatalysator-Alterungsfaktor | - | NT_AGI_KWP | - | unsigned char | - | 0,003921568859368563 | 1 | 0,0 |
| STAT_0x58A7_WERT | 0x58A7 | STAT_0x58A7_WERT | Mittleres Lambda vor Kat | - | LAMB_LS_UP_MV_KWP | - | unsigned char | - | 0,015625 | 1 | 0,0 |
| IZMAB | 0x58A8 | STAT_MOTORABSTELLZEIT_WERT | Motorabstellzeit | min | T_ES_KWP | - | unsigned char | - | 4,0 | 1 | 0,0 |
| STAT_0x58A9_WERT | 0x58A9 | STAT_0x58A9_WERT | Resetzähler Rechnerüberwachung: alter Wert | - | ENVD_3_MON_3 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58AA_WERT | 0x58AA | STAT_0x58AA_WERT | Fehlercode Rechnerüberwachung: alter Wert | - | ENVD_2_MON_3 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IADK1 | 0x58AB | STAT_ABWEICHUNG_DK_POTI1_WERT | Abweichung DK-Potentiometer 1 und Modellwert | °TPS | TPS_DIF_DIAG_COR_1_KWP | - | unsigned char | - | 0,46682536602020264 | 1 | 0,0 |
| IADK2 | 0x58AC | STAT_ABWEICHUNG_DK_POTI2_WERT | Abweichung DK-Potentiometer 2 und Modellwert | °TPS | TPS_DIF_DIAG_COR_2_KWP | - | unsigned char | - | 0,46682536602020264 | 1 | 0,0 |
| IPWG1 | 0x58AD | STAT_PEDALWERTGEBER1_WERT | Pedalwertgeber 1 | % | PV_AV_1 | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x58AE_WERT | 0x58AE | STAT_0x58AE_WERT | Periodendauer Luftmasse | us | T_PER_MAF_FRQ_KWP | - | unsigned char | - | 32,0 | 1 | 0,0 |
| IKRAN | 0x58AF | STAT_KRAFTSTOFF_ANFORDERUNG_AN_PUMPE_WERT | Kraftstoff Anforderung an Pumpe | l/h | VFF_EFP | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IDKAD | 0x58B0 | STAT_DK_ADAPTIONSSCHRITT_WERT | DK-Adaptionsschritt | - | TPS_AD_STEP_KWP | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IZFZ1 | 0x58B1 | STAT_FUNKENBRENNDAUER_ZYL1_WERT | Funkenbrenndauer Zylinder 1 | ms | V_DUR_IGC_0 | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| IZFZ5 | 0x58B2 | STAT_FUNKENBRENNDAUER_ZYL5_WERT | Funkenbrenndauer Zylinder 5 | ms | V_DUR_IGC_1 | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| IZFZ3 | 0x58B3 | STAT_FUNKENBRENNDAUER_ZYL3_WERT | Funkenbrenndauer Zylinder 3 | ms | V_DUR_IGC_2 | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| IZFZ6 | 0x58B4 | STAT_FUNKENBRENNDAUER_ZYL6_WERT | Funkenbrenndauer Zylinder 6 | ms | V_DUR_IGC_3 | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| IZFZ2 | 0x58B5 | STAT_FUNKENBRENNDAUER_ZYL2_WERT | Funkenbrenndauer Zylinder 2 | ms | V_DUR_IGC_4 | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| IZFZ4 | 0x58B6 | STAT_FUNKENBRENNDAUER_ZYL4_WERT | Funkenbrenndauer Zylinder 4 | ms | V_DUR_IGC_5 | - | unsigned char | - | 1,0240000486373901 | 1 | 0,0 |
| IPBRE | 0x58B7 | STAT_BREMSDRUCK_WERT | Bremsdruck | bar | BRAKE_PRS | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58B8_WERT | 0x58B8 | STAT_0x58B8_WERT | Drehzahl Überwachung | rpm | N_32_MON | - | unsigned char | - | 32,0 | 1 | 0,0 |
| STAT_0x58B9_WERT | 0x58B9 | STAT_0x58B9_WERT | Pedalwert Überwachung | % | PV_AV_MON | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x58BA_WERT | 0x58BA | STAT_0x58BA_WERT | eingespritze Kraftstoffmasse | l/h | VFF_MFF_SP_FUP_CTL_KWP | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58BB_WERT | 0x58BB | STAT_0x58BB_WERT | PWM Kraftstoffpumpe | % | EFPPWM_KWP | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x58BC_WERT | 0x58BC | STAT_0x58BC_WERT | Luftmasse Überwachung | mg/stk | MAF_MON | - | unsigned char | - | 5,44705867767334 | 1 | 0,0 |
| STAT_0x58BD_WERT | 0x58BD | STAT_0x58BD_WERT | Schalthäufigkeitszähler Drosselklappe Enteisungsfunktion High-Byte | - | CTR_TPS_JAM_DET_ACT_KWP_H | - | unsigned char | - | 256,0 | 1 | 0,0 |
| STAT_0x58BE_WERT | 0x58BE | STAT_0x58BE_WERT | Schalthäufigkeitszähler Drosselklappe Enteisungsfunktion Low-Byte | - | CTR_TPS_JAM_DET_ACT_KWP_L | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IMMSR | 0x58BF | STAT_MOMENTENANFORDERUNG_VON_MSR_RELATIV_WERT | relative Momentenforderung von MSR über CAN | % | TQI_MSR_CAN | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x58C0_WERT | 0x58C0 | STAT_0x58C0_WERT | Motordrehzahl Ersatzwert Überwachung | rpm | N_32_SUB_MON | - | unsigned char | - | 32,0 | 1 | 0,0 |
| ITLSZ | 0x58C1 | STAT_LAUFUNRUHE_SEGMENTZEIT_WERT | Laufunruhe Segmentzeit | µs | SEG_T_MES | - | unsigned char | - | 256,0 | 1 | 0,0 |
| STAT_0x58C2_WERT | 0x58C2 | STAT_0x58C2_WERT | Statusbyte MFF-Monitoring | - | STATE_LV_ERR_MFF_MON_1 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58C3_WERT | 0x58C3 | STAT_0x58C3_WERT | Statusbyte ISC-Monitoring | - | STATE_LV_ERR_TQ_DIF_ISC_MON_1 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58C4_WERT | 0x58C4 | STAT_0x58C4_WERT | Statusbyte CRU-Monitoring | - | STATE_LV_ERR_CRU_INH_MON_1 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58C5_WERT | 0x58C5 | STAT_0x58C5_WERT | Drehzahl Überwachung (resetsicher) | rpm | N_32_MON_SAVE | - | unsigned char | - | 32,0 | 1 | 0,0 |
| STAT_0x58C6_WERT | 0x58C6 | STAT_0x58C6_WERT | Status Einspritzventile (resetsicher) | - | PREV_STATE_IV_SAVE | - | unsigned char | - | 1,0 | 1 | 0,0 |
| INSUE | 0x58C7 | STAT_LEERLAUF_SOLLDREHZAHLABWEICHUNG_WERT | LL-Solldrehzahlabweichung Überwachung | rpm | N_DIF_SP_IS_MON | - | signed char | - | 32,0 | 1 | 0,0 |
| STAT_0x58C8_WERT | 0x58C8 | STAT_0x58C8_WERT | I-Anteil Momentdifferenz Überwachung und Modell | Nm | TQ_DIF_I_IS_MON | - | signed char | - | 8,0 | 1 | 0,0 |
| STAT_0x58C9_WERT | 0x58C9 | STAT_0x58C9_WERT | I-Anteil LL passive Rampe aktiv | 0/1 | LV_PAS_RAMP_ACT_I_IS | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x58CA_WERT | 0x58CA | STAT_0x58CA_WERT | PD-Anteil langsam Leerlaufregelung | Nm | TQ_DIF_P_D_SLOW_IS | - | signed char | - | 8,0 | 1 | 0,0 |
| STAT_0x58CB_WERT | 0x58CB | STAT_0x58CB_WERT | PD-Anteil schnell Leerlaufregelung | Nm | TQ_DIF_P_D_FAST_IS | - | signed char | - | 8,0 | 1 | 0,0 |
| STAT_0x58CC_WERT | 0x58CC | STAT_0x58CC_WERT | Verlustmoment Überwachung | Nm | TQ_LOSS_MON | - | signed char | - | 8,0 | 1 | 0,0 |
| STAT_0x58CD_WERT | 0x58CD | STAT_0x58CD_WERT | Verlustmomentabweichung Überwachung | Nm | TQ_LOSS_DIF_MON | - | signed char | - | 8,0 | 1 | 0,0 |
| STAT_0x58CE_WERT | 0x58CE | STAT_0x58CE_WERT | Carrierbyte Schalterstati | - | STATE_BYTE_SWI_KWP | - | unsigned char | - | 1,0 | 1 | 0,0 |
| SMOMO | 0x58CF | STAT_MOTORMOMENT_SOLL_WERT | Motormoment Sollwert Überwachung | Nm | TQI_SP_MON | - | unsigned char | - | 2,0 | 1 | 0,0 |
| IMOMO | 0x58D0 | STAT_MOTORMOMENT_IST_WERT | Motormoment Istwert Überwachung | Nm | TQI_AV_MON | - | unsigned char | - | 2,0 | 1 | 0,0 |
| IMOAK | 0x58D1 | STAT_MOTORMOMENT_AKTUELL_WERT | Moment aktueller Wert | Nm | TQI_AV | - | signed char | - | 8,0 | 1 | 0,0 |
| STAT_0x58D2_WERT | 0x58D2 | STAT_0x58D2_WERT | Status Luftklappensystem High Byte | - | STATE_ECRAS_SYS_KWP_H | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58D3_WERT | 0x58D3 | STAT_0x58D3_WERT | Status Luftklappensystem Low Byte | - | STATE_ECRAS_SYS_KWP_L | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58D4_WERT | 0x58D4 | STAT_0x58D4_WERT | Abweichung maximales Moment an Kupplung Überwachung | Nm | TQ_MAX_CLU_DIF_MON | - | signed char | - | 8,0 | 1 | 0,0 |
| STAT_0x58D5_WERT | 0x58D5 | STAT_0x58D5_WERT | Ansauglufttemperatur im Laderstrang | °C | TIA_TCHA_KWP | - | unsigned char | - | 1,0 | 1 | -48,0 |
| STAT_0x58D6_WERT | 0x58D6 | STAT_0x58D6_WERT | Abweichung minimales Moment an Kupplung Überwachung | Nm | TQ_MIN_CLU_DIF_MON | - | signed char | - | 8,0 | 1 | 0,0 |
| STAT_0x58D7_WERT | 0x58D7 | STAT_0x58D7_WERT | Spannung des Ansauglufttemperatursensors im Laderstrang | V | VP_TIA_TCHA_KWP | - | unsigned char | - | 0,012941176071763039 | 1 | 0,0 |
| STAT_0x58D8_WERT | 0x58D8 | STAT_0x58D8_WERT | Abgastemperatur Rohwert | V | VP_TEG_PCAT_DOWN_KWP | - | unsigned char | - | 0,012941176071763039 | 1 | 0,0 |
| STAT_0x58D9_WERT | 0x58D9 | STAT_0x58D9_WERT | Fehlercode Rechnerüberwachung: aktueller Wert | - | ENVD_0_MON_3 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58DA_WERT | 0x58DA | STAT_0x58DA_WERT | Resetzähler Rechnerüberwachung: aktueller Wert | - | ENVD_1_MON_3 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58DB_WERT | 0x58DB | STAT_0x58DB_WERT | Inhalt Statusbyte 1 Drehzahlüberwachung (resetsicher) | - | STATE_TQI_N_MAX_MON_1_1_SAVE | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58DC_WERT | 0x58DC | STAT_0x58DC_WERT | Inhalt Statusbyte 2 Drehzahlüberwachung (resetsicher) | - | STATE_TQI_N_MAX_MON_1_2_SAVE | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58DD_WERT | 0x58DD | STAT_0x58DD_WERT | Druck vor Drosselklappe | kPa | PUT_KWP | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58DE_WERT | 0x58DE | STAT_0x58DE_WERT | Spannung für Drucksensor vor Drosselklappe | V | V_PUT_KWP | - | unsigned char | - | 0,019531216472387314 | 1 | 0,0 |
| IUSPS | 0x58DF | STAT_SPORTSCHALTER_SPANNUNG_WERT | Spannung Sportschalter | V | V_SOF_SWI_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x58E0_WERT | 0x58E0 | STAT_0x58E0_WERT | Abgleich Drosselklappenmodell (Faktor) | - | EISYDK_KORFAK_B | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| STAT_0x58E1_WERT | 0x58E1 | STAT_0x58E1_WERT | Abgleich Drosselklappenmodell (Offset) | kg/h | EISYDK_KOROFF_B | - | signed char | - | 8,0 | 1 | 0,0 |
| STAT_0x58E2_WERT | 0x58E2 | STAT_0x58E2_WERT | Abgleich Einlassventilmodell (Faktor) | - | EISYEV_KORFAK_B | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| STAT_0x58E3_WERT | 0x58E3 | STAT_0x58E3_WERT | NOx Sensor Eigendiagnosewert | - | RATIO_NS_SHIFT_DIAG_KWP[1] | - | signed char | - | 0,00781247019767761 | 1 | -3,76470571580263E-6 |
| STAT_0x58E4_WERT | 0x58E4 | STAT_0x58E4_WERT | Betriebsart Istwert | 0-n | BA_IST | - | unsigned char | _CNV_S_5_Def_ba_gdi_655 | 1 | 1 | 0 |
| STAT_0x58E5_WERT | 0x58E5 | STAT_0x58E5_WERT | Lastwert für Aussetzererkennung | % | LOAD_MIS_KWP | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x58E6_WERT | 0x58E6 | STAT_0x58E6_WERT | Nulllastwert für Aussetzererkennung | % | LOAD_MIN_MIS_KWP | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x58E7_WERT | 0x58E7 | STAT_0x58E7_WERT | Spannung Pedalwertgeber 1 Überwachung | V | V_PVS_1_MON_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| STAT_0x58E8_WERT | 0x58E8 | STAT_0x58E8_WERT | Spannung Pedalwertgeber 2 Überwachung | V | V_PVS_2_MON_KWP | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| IUWAP | 0x58E9 | STAT_WASSERPUMPE_SPANNUNG_WERT | Wasserpumpe Spannung | V | V_CWP | - | unsigned char | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x58EA_WERT | 0x58EA | STAT_0x58EA_WERT | Wasserpumpe Drehzahl | - | N_REL_CWP | - | unsigned char | - | 1,0 | 1 | 0,0 |
| INWSI | 0x58EB | STAT_WASSERPUMPE_DREHZAHL_SOLL_IST_DIFFERENZ_WERT | Wasserpumpe Drehzahl Soll-Ist-Differenz | - | N_REL_CWP_DIF | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58EC_WERT | 0x58EC | STAT_0x58EC_WERT | Wasserpumpe Temperatur Elektronik | °C | TEMP_EL_CWP | - | unsigned char | - | 1,0 | 1 | -50,0 |
| STAT_0x58ED_WERT | 0x58ED | STAT_0x58ED_WERT | Wasserpumpe Stromaufnahme | A | CUR_CNS_CWP | - | unsigned char | - | 0,5 | 1 | 0,0 |
| ILWAP | 0x58EE | STAT_WASSERPUMPE_LEOSTUNGSREDUZIERT_WERT | Wasserpumpe leistungsreduziert | % | REL_CWP_PWR | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x58EF_WERT | 0x58EF | STAT_0x58EF_WERT | gemittelter Raildruck | V | V_FUP_MV_KWP | - | unsigned char | - | 0,019531216472387314 | 1 | 0,0 |
| IPKRS | 0x58F0 | STAT_KRAFTSTOFFDRUCK_WERT | Raildruck | hPa | FUP_KWP | - | unsigned char | - | 1358,5177001953125 | 1 | 0,0 |
| IDMEL | 0x58F1 | STAT_DME_LOSNUMMER_WERT | DME - Losnummer | 0-n | STATE_LRN_ECU_KWP | - | unsigned char | _CNV_S_11_RANGE_STAT_976 | 1 | 1 | 0 |
| STAT_0x58F2_WERT | 0x58F2 | STAT_0x58F2_WERT | PWM-Signal des Mengensteuerventils | % | PWM_VCV_KWP | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x58F3_WERT | 0x58F3 | STAT_0x58F3_WERT | Kraftstoffdruck vor Mengensteuerventil | hPa | FUP_EFP_KWP | - | unsigned char | - | 42,453758239746094 | 1 | 0,0 |
| STAT_0x58F4_WERT | 0x58F4 | STAT_0x58F4_WERT | Spannung für Kraftstoffdrucksensor vor Mengensteuerventil | V | V_FUP_EFP_MV_KWP | - | unsigned char | - | 0,019531216472387314 | 1 | 0,0 |
| STAT_0x58F5_WERT | 0x58F5 | STAT_0x58F5_WERT | Eingangssignal Rückführregler 1 | V | VLS_DIF_LAM_ADJ_KWP[1] | - | signed char | - | 0,0048827845603227615 | 1 | -3,607843264663677E-6 |
| STAT_0x58F6_WERT | 0x58F6 | STAT_0x58F6_WERT | Eingangssignal Rückführregler 2 | V | VLS_DIF_LAM_ADJ_KWP[2] | - | signed char | - | 0,0048827845603227615 | 1 | -3,607843264663677E-6 |
| STAT_0x58F7_WERT | 0x58F7 | STAT_0x58F7_WERT | Öffnungswinkel des AGR-Ventils | % | OPG_ACR_KWP | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| ILSA5 | 0x58F8 | STAT_LAUFUNRUHE_SEGMENTADAPTION_ZYL5_WERT | Segmentadaption Laufunruhe Zyl. 5 | %. | SEG_AD_MMV_ER[1] | - | signed char | - | 0,06103530898690224 | 1 | 1,920958358174273E-5 |
| ILSA3 | 0x58F9 | STAT_LAUFUNRUHE_SEGMENTADAPTION_ZYL3_WERT | Segmentadaption Laufunruhe Zyl. 3 | %. | SEG_AD_MMV_ER[2] | - | signed char | - | 0,06103530898690224 | 1 | 1,920958358174273E-5 |
| STAT_0x58FA_WERT | 0x58FA | STAT_0x58FA_WERT | Beladungsgrad Aktivkohlefilter TEV- Funktionstest | - | CL_MMV_SAE | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| STAT_0x58FB_WERT | 0x58FB | STAT_0x58FB_WERT | Zähler Drehzahlerhöhungen TEV- Funktionstest | cyc | SUM_DIAG_DIAGCPS_SAE | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x58FC_WERT | 0x58FC | STAT_0x58FC_WERT | Sollwert für Öffnungswinkel des AGR-Ventils | % | OPG_SP_ACR_KWP | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| STAT_0x58FD_WERT | 0x58FD | STAT_0x58FD_WERT | PWM-Signal für AGR-Ventil | % | PWM_ACR_KWP | - | signed char | - | 0,78125 | 1 | 0,0 |
| STAT_0x58FE_WERT | 0x58FE | STAT_0x58FE_WERT | Zähler für Umschaltungen nach HOM durch Monitoring | - | CTR_SWI_AFS_MON | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IUPV1 | 0x5A00 | STAT_PWG1_VERSORGUNGSSPANNUNG_WERT | Versorgung Fahrwertgeber 1 | V | VCC_PVS_1 | - | unsigned integer | - | 0,009765591472387314 | 1 | 0,0 |
| IUPV2 | 0x5A01 | STAT_PWG2_VERSORGUNGSSPANNUNG_WERT | Versorgung Fahrwertgeber 2 | V | VCC_PVS_2 | - | unsigned integer | - | 0,009765591472387314 | 1 | 0,0 |
| STAT_0x5A02_WERT | 0x5A02 | STAT_0x5A02_WERT | Leckagediagnose für Turbolader wird durchgeführt | 0/1 | LV_CDN_DIAG_TCHA_LEAK | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5A03_WERT | 0x5A03 | STAT_0x5A03_WERT | Leckagediagnose für Turbolader beendet | 0/1 | LV_END_DIAG_TCHA_LEAK | - | unsigned char | - | 1 | 1 | 0 |
| IUPW1 | 0x5A04 | STAT_PWG1_SPANNUNG_WERT | Spannung Pedalwertgeber 1 | V | V_PVS_1 | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUPW2 | 0x5A05 | STAT_PWG2_SPANNUNG_WERT | Spannung Pedalwertgeber 2 | V | V_PVS_2 | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUDK1 | 0x5A06 | STAT_DK1_SPANNUNG_WERT | Spannung Drosselklappe Potentiometer 1 | V | V_TPS_1 | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUDK2 | 0x5A07 | STAT_DK2_SPANNUNG_WERT | Spannung Drosselklappe Potentiometer 2 | V | V_TPS_2 | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUANS | 0x5A08 | STAT_ANSAUGLUFTTEMPERATUR_SPANNUNG_WERT | Spannung Ansauglufttemperatur | V | VP_TIA | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 |
| IUKUM | 0x5A09 | STAT_KUEHLMITTELTEMPERATUR_SPANNUNG_WERT | Spannung Motortemperatur | V | VP_TCO[1] | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 |
| IUKUA | 0x5A0A | STAT_KUEHLERAUSLASSTEMPERATUR_SPANNUNG_WERT | Spannung Kühlmitteltemperatur Kühlerausgang | V | VP_TCO[2] | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 |
| IUUMG | 0x5A0B | STAT_UMGEBUNGSDRUCK_SPANNUNG_WERT | Spannung DME Umgebungsdruck | V | V_AMP | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IULMM | 0x5A0C | STAT_LUFTMASSE_WERT | Spannung Luftmasse | V | V_MAF | - | unsigned char | - | 0,019600000232458115 | 1 | 0,0 |
| IUSLS | 0x5A0D | STAT_SEKUNDAERLUFT_SPANNUNG_WERT | Spannung Sekundärluft | V | V_SAF | - | unsigned char | - | 0,019600000232458115 | 1 | 0,0 |
| IUSGI | 0x5A0E | STAT_STEUERGERAETE_INNENTEMPERATUR_SPANNUNG_WERT | Spannung SG-Innentemperatur | V | VP_TECU | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 |
| STAT_0x5A0F_WERT | 0x5A0F | STAT_0x5A0F_WERT | Spannung Kl.15 | V | V_IGK_BAS | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUK15 | 0x5A10 | STAT_KL15_SPANNUNG_WERT | Spannung Kl15 | V | V_IGK_MES | - | unsigned integer | - | 0,02806011587381363 | 1 | 0,0 |
| IUSV1 | 0x5A11 | STAT_SONDENSPANNUNG_VORKAT_BANK1_WERT | Spannung Lambdasonde vor Katalysator Bank 1 | V | VLS_UP[1] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUSV2 | 0x5A12 | STAT_SONDENSPANNUNG_VORKAT_BANK2_WERT | Spannung Lambdasonde vor Katalysator Bank 2 | V | VLS_UP[2] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUSN1 | 0x5A13 | STAT_SONDENSPANNUNG_NACHKAT_BANK1_WERT | Spannung Lambdasonde hinter Katalysator Bank 1 | V | VLS_DOWN[1] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUSN2 | 0x5A14 | STAT_SONDENSPANNUNG_NACHKAT_BANK2_WERT | Spannung Lambdasonde hinter Katalysator Bank 2 | V | VLS_DOWN[2] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| STAT_0x5A15_WERT | 0x5A15 | STAT_0x5A15_WERT | Diagnose von zu niedrigem Ladedruck beendet | 0/1 | LV_END_DIAG_TCHA_PRS_LOW | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5A16_WERT | 0x5A16 | STAT_0x5A16_WERT | Diagnose von zu hohem Ladedruck beendet | 0/1 | LV_END_DIAG_TCHA_PRS_HIGH | - | unsigned char | - | 1 | 1 | 0 |
| IUDMT | 0x5A17 | STAT_DMTL_SPANNUNG_WERT | Spannung Strommessung DMTL | V | V_DMTL | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| STAT_0x5A18_WERT | 0x5A18 | STAT_0x5A18_WERT | Spannung Abgastemperatursensor | V | VP_TEG_PCAT_DOWN | - | unsigned integer | - | 1,5258787607308477E-4 | 1 | 0,0 |
| STAT_0x5A1F_WERT | 0x5A1F | STAT_0x5A1F_WERT | Abgastemperatur | °C | TEG_PCAT_DOWN_1 | - | unsigned integer | - | 0,015625 | 1 | 0,0 |
| ITKUA | 0x5A21 | STAT_KUEHLERAUSLASSTEMPERATUR_WERT | Kühlmitteltemperatur Kühlerausgang | °C | TCO_2_MES | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| ITSGI | 0x5A22 | STAT_STEUERGERAETE_INNENTEMPERATUR_WERT | Steuergeräte-Innentemperatur | °C | TECU | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| SPOEL | 0x5A23 | STAT_OELDRUCK_SOLL_WERT | Sollwert Öldruck | hPa | P_OEL_SOLL | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| SWDKL | 0x5A24 | STAT_DK_WINKEL_SOLL_WERT | Drosselklappe Sollwert | °TPS | TPS_SP | - | unsigned integer | - | 0,007294146344065666 | 1 | 0,0 |
| IPOEL | 0x5A25 | STAT_OELDRUCK_IST_WERT | Istwert Öldruck | hPa | P_OEL_IST | - | signed integer | - | 1,0 | 1 | 0,0 |
| STAT_0x5A26_WERT | 0x5A26 | STAT_0x5A26_WERT | Saugrohrdruck  | hPa | map | - | unsigned integer | - | 0,08291752636432648 | 1 | 0,0 |
| IPPW1 | 0x5A27 | STAT_PWG1_WERT | Pedalwertgeber Potentiometer 1 | % | PV_AV_1 | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IPPW2 | 0x5A28 | STAT_PWG2_WERT | Pedalwertgeber Potentiometer 2 | % | PV_AV_2 | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| RFPWG | 0x5A29 | STAT_FAHRERWUNSCH_PEDAL_ROH_WERT | Fahrpedalwert | % | PV_AV_RAW | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| ITVDK | 0x5A2B | STAT_TEMPERATUR_VOR_DROSSELKLAPPE_WERT | Temperatur vor Drosselklappe | °C | TANS | - | signed integer | - | 0,10000000149011612 | 1 | 0,0 |
| IPVDK | 0x5A2C | STAT_DRUCK_VOR_DROSSELKLAPPE_WERT | Druck vor Drosselklappe | hPa | PVDKDS | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| IPNDK | 0x5A2D | STAT_DRUCK_NACH_DROSSELKLAPPE_WERT | Druck nach Drosselklappe | hPa | PS_IST | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| IPKND | 0x5A2E | STAT_KRAFTSTOFF_NIEDERDRUCK_WERT | Kraftstoffniederdrucksensor | hPa | FUP_EFP | - | unsigned integer | - | 2,6533608436584473 | 1 | 0,0 |
| IPRAI | 0x5A2F | STAT_RAILDRUCK_WERT | Raildruck | hPa | FUP | - | unsigned integer | - | 5,3067216873168945 | 1 | 0,0 |
| ILUZ1 | 0x5A30 | STAT_LAUFUNRUHE_ZYL1_WERT | Laufunruhe Zylinder 1 | µs | ER_CYL[0] | - | signed integer | - | 1,0 | 1 | 0,0 |
| ILUZ2 | 0x5A31 | STAT_LAUFUNRUHE_ZYL2_WERT | Laufunruhe Zylinder 2 | µs | ER_CYL[4] | - | signed integer | - | 1,0 | 1 | 0,0 |
| ILUZ3 | 0x5A32 | STAT_LAUFUNRUHE_ZYL3_WERT | Laufunruhe Zylinder 3 | µs | ER_CYL[2] | - | signed integer | - | 1,0 | 1 | 0,0 |
| ILUZ4 | 0x5A33 | STAT_LAUFUNRUHE_ZYL4_WERT | Laufunruhe Zylinder 4 | µs | ER_CYL[5] | - | signed integer | - | 1,0 | 1 | 0,0 |
| ILUZ5 | 0x5A34 | STAT_LAUFUNRUHE_ZYL5_WERT | Laufunruhe Zylinder 5 | µs | ER_CYL[1] | - | signed integer | - | 1,0 | 1 | 0,0 |
| ILUZ6 | 0x5A35 | STAT_LAUFUNRUHE_ZYL6_WERT | Laufunruhe Zylinder 6 | µs | ER_CYL[3] | - | signed integer | - | 1,0 | 1 | 0,0 |
| ISKLO | 0x5A36 | STAT_STATUS_KLOPFEN_WERT | Status Klopfen | 0/1 | LV_KNK | - | unsigned char | - | 1 | 1 | 0 |
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
| STAT_0x5A41_WERT | 0x5A41 | STAT_0x5A41_WERT | Alterungsfaktor durch Schwefel bedingt | - | NT_AGI_SUL | - | unsigned integer | - | 1,52587890625E-5 | 1 | 0,0 |
| STAT_0x5A42_WERT | 0x5A42 | STAT_0x5A42_WERT | resultierender NOx-Katalysator-Alterungsfaktor | - | NT_AGI | - | unsigned integer | - | 1,52587890625E-5 | 1 | 0,0 |
| STAT_0x5A43_WERT | 0x5A43 | STAT_0x5A43_WERT | Alterungsfaktor durch thermische Alterung bedingt | - | NT_AGI_THERMO | - | unsigned integer | - | 1,52587890625E-5 | 1 | 0,0 |
| STAT_0x5A44_WERT | 0x5A44 | STAT_0x5A44_WERT | Anforderung an eine Desulfatisierung mit Katheizen | 0/1 | LV_SO2P_REQ_2 | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5A45_WERT | 0x5A45 | STAT_0x5A45_WERT | Zähler für Katheizversuche | - | CTR_CH_SO2P | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x5A46_WERT | 0x5A46 | STAT_0x5A46_WERT | Fahrstrecke seit letzter Desulfatisierung | km | DIST_SO2P_END | - | unsigned integer | - | 10,0 | 1 | 0,0 |
| STAT_0x5A47_WERT | 0x5A47 | STAT_0x5A47_WERT | Zeit Katheizfunktion aktiv | s | T_CH_SO2P_ACT | - | unsigned integer | - | 0,10000000149011612 | 1 | 0,0 |
| STAT_0x5A48_WERT | 0x5A48 | STAT_0x5A48_WERT | Motorlager Typ | 0/1 | LV_SWI_AEB_TYP | - | unsigned char | - | 1 | 1 | 0 |
| IZWZ1 | 0x5A49 | STAT_ZUENDWINKEL_ZYL1_WERT | Zündwinkel Zylinder 1 | °CRK | IGA_IGC[0] | - | unsigned char | - | 0,375 | 1 | -35,62499893829229 |
| ILASB | 0x5A4B | STAT_BERECHNETE_LAST_WERT | Berechneter Lastwert | % | LOAD_CLC | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| ISDHR | 0x5A4C | STAT_DROSSELKLAPPENHEIZUNGSRELAIS_WERT | Status Drosselklappenheizungsrelais | 0-n | STATE_MTC_HEAT | - | unsigned char | _CNV_S_5_RANGE_STAT_1015 | 1 | 1 | 0 |
| ISDKH | 0x5A4D | STAT_DROSSELKLAPPENHEIZUNG_WERT | Drosselklappenheizung Ein | 0/1 | LV_RLY_MTC_HEAT | - | unsigned char | - | 1 | 1 | 0 |
| ISACR | 0x5A4E | STAT_KLIMAKOMPRESSORRELAIS_EIN | Klimakompressorrelais Ein | 0/1 | LV_ACCOUT_RLY | - | unsigned char | - | 1 | 1 | 0 |
| ILAB1 | 0x5A50 | STAT_LAMBDA_BANK1_WERT | Lambdawert vor Katalysator Bank 1 | - | LAMB_LS_UP[1] | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| ILAB2 | 0x5A51 | STAT_LAMBDA_BANK2_WERT | Lambdawert vor Katalysator Bank 2 | - | LAMB_LS_UP[2] | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| IRNK1 | 0x5A52 | STAT_READINESS_SONDE_NACHKAT_BANK1_WERT | Status LS hinter Katalysator Bank 1 | 0/1 | LV_LS_DOWN_READY[1] | - | unsigned char | - | 1 | 1 | 0 |
| IRNK2 | 0x5A53 | STAT_READINESS_SONDE_NACHKAT_BANK2_WERT | Status LS hinter Katalysator Bank 2 | 0/1 | LV_LS_DOWN_READY[2] | - | unsigned char | - | 1 | 1 | 0 |
| ISHN1 | 0x5A54 | STAT_SONDENHEIZUNG_NACHKAT_BANK1_WERT | Status LS Heizung hinter Katalysator Bank 1 | 0-n | STATE_LSH_DOWN[1] | - | unsigned char | _CNV_S_7_EGCP_RANGE_371 | 1 | 1 | 0 |
| ISHN2 | 0x5A55 | STAT_SONDENHEIZUNG_NACHKAT_BANK2_WERT | Status LS Heizung hinter Katalysator Bank 2 | 0-n | STATE_LSH_DOWN[2] | - | unsigned char | _CNV_S_7_EGCP_RANGE_371 | 1 | 1 | 0 |
| ISHV1 | 0x5A56 | STAT_SONDENHEIZUNG_VORKAT_BANK1_WERT | Status LS Heizung vor Katalysator Bank 1 | 0-n | STATE_LSH_UP[1] | - | unsigned char | _CNV_S_7_EGCP_RANGE_371 | 1 | 1 | 0 |
| ISHV2 | 0x5A57 | STAT_SONDENHEIZUNG_VORKAT_BANK2_WERT | Status LS Heizung vor Katalysator Bank 2 | 0-n | STATE_LSH_UP[2] | - | unsigned char | _CNV_S_7_EGCP_RANGE_371 | 1 | 1 | 0 |
| IAHV1 | 0x5A58 | STAT_SONDENHEIZUNG_PWM_VORKAT_BANK1_WERT | Lambdasondenheizung PWM vor Katalysator Bank 1 | % | LSHPWM_UP[1] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IAHN1 | 0x5A59 | STAT_STAT_SONDENHEIZUNG_PWM_NACHKAT_BANK1_WERT | Lambdasondenheizung PWM hinter Katalysator Bank 1 | % | LSHPWM_DOWN[1] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IAHV2 | 0x5A5A | STAT_STAT_SONDENHEIZUNG_PWM_VORKAT_BANK2_WERT | Lambdasondenheizung PWM vor Katalysator Bank 2 | % | LSHPWM_UP[2] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IAHN2 | 0x5A5B | STAT_SONDENHEIZUNG_PWM_NACHKAT_BANK2_WERT | Lambdasondenheizung PWM hinter Katalysator Bank 2 | % | LSHPWM_DOWN[2] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IFRD1 | 0x5A5C | STAT_FEHLERRUECKMELDUNG_DISA1_WERT | Aktive Fehlerrückmeldung DISA-Klappe 1 | - | ERR_VIMPWM_1_FB | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x5A5D_WERT | 0x5A5D | STAT_0x5A5D_WERT | Schalthäufigkeitszähler DISA-Klappe 1 | - | CTR_VIMPWM_1_EDGE | - | unsigned long | - | 1,0 | 1 | 0,0 |
| IFRD2 | 0x5A5E | STAT_FEHLERRUECKMELDUNG_DISA2_WERT | Aktive Fehlerrückmeldung DISA-Klappe 2 | - | ERR_VIMPWM_2_FB | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x5A5F_WERT | 0x5A5F | STAT_0x5A5F_WERT | Schalthäufigkeitszähler DISA-Klappe 2 | - | CTR_VIMPWM_2_EDGE | - | unsigned long | - | 1,0 | 1 | 0,0 |
| ISBLS | 0x5A60 | STAT_BREMSLICHTSCHALTER_EIN_WERT | Bremslichtschalter Ein | 0/1 | LV_IM_BLS | - | unsigned char | - | 1 | 1 | 0 |
| ISBLT | 0x5A61 | STAT_BREMSLICHTTESTSCHALTER_EIN_WERT | Bremslichttestschalter Ein | 0/1 | LV_IM_BTS | - | unsigned char | - | 1 | 1 | 0 |
| ISOED | 0x5A62 | STAT_OELDRUCKSCHALTER_EIN_WERT | Öldruckschalter Ein | 0/1 | LV_POIL_SWI | - | unsigned char | - | 1 | 1 | 0 |
| ISEBO | 0x5A63 | STAT_E_BOXLUEFTER_EIN_WERT | E-Box-Lüfter Ein | 0/1 | LV_EBOX_CFA | - | unsigned char | - | 1 | 1 | 0 |
| ISMLW | 0x5A64 | STAT_MOTORLAGER_WEICHE_DAEMPFUNG_WERT | Motorlager weiche Dämpfung | 0/1 | LV_SWI_AEB | - | unsigned char | - | 1 | 1 | 0 |
| ISAGK | 0x5A65 | STAT_ABGASKLAPPE_EIN_WERT | Abgasklappe Ein | 0/1 | LV_EF | - | unsigned char | - | 1 | 1 | 0 |
| ISDMP | 0x5A66 | STAT_DMTL_PUMPE_EIN_WERT | DMTL Pumpe Ein | 0/1 | LV_DMTL_PUMP | - | unsigned char | - | 1 | 1 | 0 |
| ISDMV | 0x5A67 | STAT_DMTL_VENTIL_EIN_WERT | DMTL Ventil Ein | 0/1 | LV_DMTLS | - | unsigned char | - | 1 | 1 | 0 |
| ISDMH | 0x5A68 | STAT_DMTL_HEIZUNG_EIN_WERT | DMTL Heizung Ein | 0/1 | LV_HDMTL_ON | - | unsigned char | - | 1 | 1 | 0 |
| ISMIL | 0x5A69 | STAT_MIL_EIN_WERT | MIL Lampe Ein | 0/1 | LV_MIL_CAN | - | unsigned char | - | 1 | 1 | 0 |
| STAT_5A6A_WERT | 0x5A6A | STAT_LAMPE_FGR_EIN | Lampe FGR Ein | 0/1 | LV_CRU_MAIN_SWI | - | unsigned char | - | 1 | 1 | 0 |
| ISCEL | 0x5A6B | STAT_CHECK_ENGINE_LAMPE_EIN_WERT | Lampe Check Engine Ein | 0/1 | LV_WAL_1_CAN | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5A6C_WERT | 0x5A6C | STAT_0x5A6C_WERT | Verbrauchskorrekturfaktor | - | FAC_FCO_KWP | - | signed char | - | 0,0010000000474974513 | 1 | 0,0 |
| ISTFG | 0x5A6D | STAT_TASTE_FGR_EIN_WERT | Status Taste FGR | 0-n | STATE_MSW_CAN | - | unsigned char | _CNV_S_8_RANGE_STAT_23 | 1 | 1 | 0 |
| STAT_0x5A6E_WERT | 0x5A6E | STAT_0x5A6E_WERT | Status für irreversible Abschaltbedingung | - | STATE_CRU_OFF_IRR | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x5A6F_WERT | 0x5A6F | STAT_0x5A6F_WERT | Status für reversible Abschaltbedingung | - | STATE_CRU_OFF_REV | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| IASOU | 0x5A70 | STAT_SOUNDKLAPPE_PWM_WERT | Soundklappe Zustand | 0/1 | LV_SOF | - | unsigned char | - | 1 | 1 | 0 |
| IADS1 | 0x5A71 | STAT_DISA1_PWM_WERT | DISA1 PWM (große/obere Klappe) | % | VIMPWM_1 | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| IADS2 | 0x5A72 | STAT_DISA2_PWM_WERT | DISA2 PWM (kleine/untere Klappe) | % | VIMPWM_2 | - | signed integer | - | 0,0030517578125 | 1 | 0,0 |
| ISBBH | 0x5A73 | STAT_BLOWBYHEIZUNG_EIN_WERT | Kurbelgehäuseentlüftungsheizung ein | 0/1 | LV_RLY_CRCV_HEAT | - | unsigned char | - | 1 | 1 | 0 |
| IAKFT | 0x5A74 | STAT_BEHEIZTER_THERMOSTAT_PWM_WERT | Beheizter Thermostat PWM | % | ECTPWM | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5A76_WERT | 0x5A76 | STAT_0x5A76_WERT | Adaption Öffnungspunkt Tankentlüftungsventil | % | CPPWM_ADD_AD_MEM | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| IATEV | 0x5A77 | STAT_TEV_PWM_WERT | Tankentlüftungsventil PWM | % | CPPWM_CPS | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IAAGK | 0x5A78 | STAT_ABGASKLAPPE_ANSTEUERUNG_WERT | Abgasklappe Ansteuerung | 0/1 | LV_EF | - | unsigned char | - | 1 | 1 | 0 |
| IAELUE | 0x5A79 | STAT_E_LUEFTER_PWM_WERT | E-Lüfter PWM | % | ECFPWM[0] | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IAVEP | 0x5A7A | STAT_VANOS_EINLASS_PWM_WERT | VANOS PWM Wert Einlass | % | IVVTPWM_0 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| IAVAP | 0x5A7B | STAT_VANOS_AUSLASS_PWM_WERT | VANOS PWM Wert Auslass | % | IVVTPWM_1 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5A7C_WERT | 0x5A7C | STAT_0x5A7C_WERT | Nox-Sensor Systemadaptionswert | - | FAC_NOX_NS_AD[1] | - | unsigned integer | - | 0,001953125 | 1 | 0,0 |
| STAT_0x5A7D_WERT | 0x5A7D | STAT_0x5A7C_WERT | Anzahl der erfolgten NOX-SENSOR-Systemadaptionen | - | CTR_NS_AD_CYC[1] | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x5A7E_WERT | 0x5A7E | STAT_0x5A7E_WERT | km-stand bei letzter Nox-Sensor-Eigendiagnose | km | DIST_NT_NS_AD[1] | - | unsigned integer | - | 8,0 | 1 | 0,0 |
| STAT_0x5A7F_WERT | 0x5A7F | STAT_0x5A7F_WERT | Phase-Shift-Adaption Lambdasonde Bank 1 | °CRK | DELTA_CRK_CYL_LAM[1] | - | signed char | - | 6,0 | 1 | 0,0 |
| STAT_0x5A70_WERT | 0x5A80 | STAT_0x5A70_WERT | Phase-Shift-Adaption Lambdasonde Bank 2 | °CRK | DELTA_CRK_CYL_LAM[2] | - | signed char | - | 6,0 | 1 | 0,0 |
| IINT1 | 0x5A81 | STAT_INTEGRATOR_BANK1_WERT | Ausgang Lamdaregler Bank 1 | % | FAC_LAM_LIM[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| IINT2 | 0x5A82 | STAT_INTEGRATOR_BANK2_WERT | Ausgang Lamdaregler Bank 2 | % | FAC_LAM_LIM[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| IADD1 | 0x5A83 | STAT_ADAPTION_ADDITIV_BANK1_WERT | Adaption Offset Lambda Bank 1 | mg/stk | MFF_ADD_LAM_AD_OUT[1] | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| IADD2 | 0x5A84 | STAT_ADAPTION_ADDITIV_BANK2_WERT | Adaption Offset Lambda Bank 2 | mg/stk | MFF_ADD_LAM_AD_OUT[2] | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| IMUL1 | 0x5A85 | STAT_ADAPTION_MULTIPLIKATIV_BANK1_WERT | Adaption Multiplikation Lambda Bank 1 | % | FAC_LAM_AD_CUS[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| IMUL2 | 0x5A86 | STAT_ADAPTION_MULTIPLIKATIV_BANK2_WERT | Adaption Multiplikation Lambda Bank 2 | % | FAC_LAM_AD_CUS[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| IWTR1 | 0x5A87 | STAT_ADAPTION_TRIMREGELUNG_1_WERT | Adaptionswert Trimregelung Bank 1 | - | LAMB_DELTA_AD_LAM_ADJ[1] | - | signed integer | - | 6,103515625E-5 | 1 | 0,0 |
| IWTR2 | 0x5A88 | STAT_ADAPTION_TRIMREGELUNG_2_WERT | Adaptionswert Trimregelung Bank 2 | - | LAMB_DELTA_AD_LAM_ADJ[2] | - | signed integer | - | 6,103515625E-5 | 1 | 0,0 |
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
| SANWA | 0x5A94 | STAT_NW_AUSLASS_SOLL_WERT | Nockenwelle Auslass Sollwert | °CRK | CAM_SP_IVVT_EX | - | unsigned char | - | -0,375 | 1 | -39,99999785423285 |
| IANWA | 0x5A95 | STAT_NW_ADAPTION_AUSLASS_WERT | Adaptionswert Nockenwelle Auslass | °CRK | PSN_AD_CAM_EX_1 | - | unsigned char | - | 0,375 | 1 | -47,99999856948857 |
| IANWE | 0x5A96 | STAT_NW_ADAPTION_EINLASS_WERT | Adaptionswert Nockenwelle Einlass | °CRK | PSN_AD_CAM_IN_1 | - | unsigned char | - | 0,375 | 1 | -47,99999856948857 |
| STAT_0x5A97_WERT | 0x5A97 | STAT_0x5A97_WERT | Bedingung EVANOS im Anschlag beim letzten Abstellen | 0/1 | B_VSEAN_LOC | - | unsigned char | - | 1 | 1 | 0 |
| IAKWF | 0x5A99 | STAT_KURBELWELLEN_ADAPTION_BEENDET_WERT | Kurbelwellen Adaption beendet | 0/1 | LV_SEG_AD_AVL_ER | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5A9A_WERT | 0x5A9A | STAT_0x5A9A_WERT | Status des Erlernens des Heifilmluftmassenmessers | 0/1 | LV_VAR_MAF_LEARNT | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5A9B_WERT | 0x5A9B | STAT_0x5A9B_WERT | Multiplikative Gemischadaption inklusive Langzeitadaption Bank 1 | % | FAC_LAM_AD_BAL[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5A9C_WERT | 0x5A9C | STAT_0x5A9C_WERT | Multiplikative Gemischadaption inklusive Langzeitadaption Bank 2 | % | FAC_LAM_AD_BAL[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5A9D_WERT | 0x5A9D | STAT_0x5A9D_WERT | Gegenwärtige multiplikative Gemischadaption Bank 1 aus Lambdaadaption | % | FAC_LAM_AD_OUT[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5A9E_WERT | 0x5A9E | STAT_0x5A9E_WERT | Gegenwärtige multiplikative Gemischadaption Bank 2 aus Lambdaadaption | % | FAC_LAM_AD_OUT[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5A9F_WERT | 0x5A9F | STAT_0x5A9F_WERT | Langzeitadaption Bank 1 | % | FAC_LAM_ADJ_COR_LAM_AD_CUS[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5AA0_WERT | 0x5AA0 | STAT_0x5AA0_WERT | Langzeitadaption Bank 2 | % | FAC_LAM_ADJ_COR_LAM_AD_CUS[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| IDSLS | 0x5AA1 | STAT_SLS_DIAGNOSE_WERT | Status Diagnose TEV | 0-n | STATE_EOL_KWP_CPS | - | unsigned char | _CNV_S_10_STATE_EOL__478 | 1 | 1 | 0 |
| IDTEV | 0x5AA2 | STAT_TEV_DIAGNOSE_WERT | Status Diagnose DMTL | 0-n | STATE_EOL_KWP_DMTL | - | unsigned char | _CNV_S_10_STATE_EOL__478 | 1 | 1 | 0 |
| IDDMT | 0x5AA3 | STAT_DMTL_DIAGNOSE_WERT | Status Diagnose Lambdasonden | 0-n | STATE_EOL_KWP_VLS | - | unsigned char | _CNV_S_10_STATE_EOL__478 | 1 | 1 | 0 |
| IDLSS | 0x5AA4 | STAT_LS_DIAGNOSE_WERT | Status Diagnose Leerlaufdrehzahlverstellung | 0-n | EOL_RAM[4] | - | unsigned char | _CNV_S_10_STATE_EOL__478 | 1 | 1 | 0 |
| STAT_0x5AA7_WERT | 0x5AA7 | STAT_0x5AA7_WERT | Leckluftadaption Istwert | kg/h | MSNLGOFS_TMP | - | signed integer | - | 0,03125 | 1 | 0,0 |
| ISLKS | 0x5AA8 | STAT_LUFTKLAPPENSYSTEM_WERT | Status Luftklappensystem | - | STATE_ECRAS_SYS | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| ILKST | 0x5AA9 | STAT_LUFTKLAPPENSYSTEM_PWM_WERT | Tastverhältnis: Luftklappe | % | ECRASPWM | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| IODRT | 0x5AAA | STAT_OELDRUCKREGELVENTIL_PWM_WERT | Tastverhältnis Öldruck-Regelventil | % | POIL_PWM | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| IWG1P | 0x5AAB | STAT_WASTEGATE_1_PWM_WERT | Wastegate 1 PWM | % | WGPWM_0 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| IWG2P | 0x5AAC | STAT_WASTEGATE_2_PWM_WERT | Wastegate 2 PWM | % | WGPWM_1 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AAD_WERT | 0x5AAD | STAT_0x5AAD_WERT | Vorsteuerung Ladedruckregelung | % | ATLVST | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AAE_WERT | 0x5AAE | STAT_0x5AAE_WERT | Reglerausgang und Vorsteuerung | % | ATLR | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| ILDRA | 0x5AAF | STAT_ADAPTION_LADEDRUCKREGELUNG_WERT | Adaptionswert von der Ladedruckregelung | - | F_ATLAD | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| IPLDS | 0x5AB0 | STAT_LADEDRUCK_SOLL_WERT | Solladedruck | hPa | PLDR_SOLL | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| IVKMH | 0x5AB1 | STAT_GESCHWINDIGKEIT_WERT | Geschwindigkeit | km/h | VS | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x5AB2_WERT | 0x5AB2 | STAT_0x5AB2_WERT | Periodendauer Luftmasse | µs | T_PER_MAF_FRQ[0] | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| IWMIL | 0x5AB3 | STAT_FAHRSTRECKE_MIL_AN_WERT | Fahrstrecke mit MIL an | km | DIST_ACT_MIL | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| IZBST | 0x5AB4 | STAT_BETRIEBSSTUNDENZAEHLER_WERT | Betriebsstundenzähler | h | TRT | - | unsigned long | - | 2,7777778086601757E-5 | 1 | 0,0 |
| RTANS | 0x5AB6 | STAT_ANSAUGLUFTTEMPERATUR1_ROH_WERT | Rohwert Ansauglufttemperatur 1 | °C | TIA_MES | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| RTKWA | 0x5AB7 | STAT_KUEHLWASSERTEMPERATUR_ROH_WERT | Rohwert Kühlwassertemperatur | °C | TCO_MES | - | unsigned char | - | 0,75 | 1 | -47,99999856948857 |
| IUSAU | 0x5AB8 | STAT_SAUGROHRDRUCK_SPANNUNG_WERT | Spannung Saugrohrdruck | V | V_MAP | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IUSST | 0x5AB9 | STAT_SPORTSCHALTER_SPANNUNG_WERT | Spannung Sportschalter | V | V_SOF_SWI | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IAKSP | 0x5ABA | STAT_KRAFTSTOFFPUMPE_PWM_WERT | Kraftstoffpumpe PWM | % | EFPPWM | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| IMLUF | 0x5ABC | STAT_LUFTMASSE_WERT | Luftmasse | kg/h | MAF_KGH_MES_BAS | - | unsigned integer | - | 0,03125 | 1 | 0,0 |
| IASRE | 0x5ABD | STAT_STARTRELAIS_AKTIV_WERT | Starterrelais aktiv | 0/1 | LV_RLY_ST | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5AC2_WERT | 0x5AC2 | STAT_0x5AC2_WERT | Reset Adresse | - | RST_DBG_BACKTRACE_ADDRESS[0][0] | - | unsigned long | - | 1,0 | 1 | 0,0 |
| STAT_0x5AC3_WERT | 0x5AC3 | STAT_0x5AC3_WERT | Schalthäufigkeitszähler Drosselklappe Enteisungsfunktion | - | CTR_TPS_JAM_DET_ACT | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x5AC4_WERT | 0x5AC4 | STAT_0x5AC4_WERT | Minimale Pumpengeschwindigkeit der elektrischen Kraftsoffpumpe | % | EFPPWM_MIN_AD | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AC5_WERT | 0x5AC5 | STAT_0x5AC5_WERT | Aditiver I-Anteil des EKP-Controllers | % | EFPPWM_I_AD | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| IUARS | 0x5AC6 | STAT_SPANNUNG_AGR_SENSOR_WERT | Sensorspannung AGR | V | V_ACR | - | unsigned integer | - | 0,004882697947323322 | 1 | 0,0 |
| IHARV | 0x5AC7 | STAT_HUB_AGR_VENTIL_WERT | Hub des AGR-Tellerventils | % | OPG_ACR | - | unsigned integer | - | 0,0244140625 | 1 | 0,0 |
| STAT_0x5AC8_WERT | 0x5AC8 | STAT_0x5AC8_WERT | Adaptionswert oberer Anschlag (einmalig gelernt) | V | V_ACR_AD_TOL | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| STAT_0x5AC9_WERT | 0x5AC9 | STAT_0x5AC9_WERT | Adaptionswert unterer Anschlag (immer wieder neu gelernt) | V | V_ACR_AD_BOL | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| STAT_0x5ACA_WERT | 0x5ACA | STAT_0x5ACA_WERT | Adaptionswert unterer Anschlag (einmalig am Anfang gelernt, Uradaption) | V | V_ACR_AD_BOL_0 | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| ILARA | 0x5ACB | STAT_LERNEN_ADAPTION_AGR_WERT | Status des Erlernens der AGR-Adaption | 0-n | STATE_ACR_AD | - | unsigned char | _CNV_S_6_ACRC_RANGE_906 | 1 | 1 | 0 |
| STAT_0x5ACC_WERT | 0x5ACC | STAT_0x5ACC_WERT | DME-Temperaturstatistik, Zähler 1 | - | CTR_STC_TECU_1 | - | unsigned long | - | 1,0 | 1 | 0,0 |
| STAT_0x5ACD_WERT | 0x5ACD | STAT_0x5ACD_WERT | DME-Temperaturstatistik, Zähler 2 | - | CTR_STC_TECU_2 | - | unsigned long | - | 1,0 | 1 | 0,0 |
| STAT_0x5ACE_WERT | 0x5ACE | STAT_0x5ACE_WERT | DME-Temperaturstatistik, Zähler 3 | - | CTR_STC_TECU_3 | - | unsigned long | - | 1,0 | 1 | 0,0 |
| STAT_0x5ACF_WERT | 0x5ACF | STAT_0x5ACF_WERT | DME-Temperaturstatistik, Zähler 4 | - | CTR_STC_TECU_4 | - | unsigned long | - | 1,0 | 1 | 0,0 |
| STAT_0x5AD0_WERT | 0x5AD0 | STAT_0x5AD0_WERT | DME-Temperaturstatistik, Zähler 5 | - | CTR_STC_TECU_5 | - | unsigned long | - | 1,0 | 1 | 0,0 |
| STAT_0x5AD1_WERT | 0x5AD1 | STAT_0x5AD1_WERT | DME-Temperaturstatistik, Zähler 6 | - | CTR_STC_TECU_6 | - | unsigned long | - | 1,0 | 1 | 0,0 |
| STAT_0x5AD2_WERT | 0x5AD2 | STAT_0x5AD2_WERT | DME-Temperaturstatistik, Zähler 7 | - | CTR_STC_TECU_7 | - | unsigned long | - | 1,0 | 1 | 0,0 |
| STAT_0x5AD3_WERT | 0x5AD3 | STAT_0x5AD3_WERT | DME-Temperaturstatistik, Zähler 8 | - | CTR_STC_TECU_8 | - | unsigned long | - | 1,0 | 1 | 0,0 |
| STAT_0x5AD6_WERT | 0x5AD6 | STAT_0x5AD6_WERT | Schubabschaltung | ppm | NOX_OFS_PUC[1] | - | signed integer | - | 1,0 | 1 | 0,0 |
| STAT_0x5AD7_WERT | 0x5AD7 | STAT_0x5AD7_WERT | Beladungsbetrieb NOx-Katalysator | ppm | NOX_OFS_LOAD[1] | - | signed integer | - | 1,0 | 1 | 0,0 |
| STAT_0x5AD8_WERT | 0x5AD8 | STAT_0x5AD8_WERT | NOx-Konzentration | ppm | NOX_NS[1] | - | signed integer | - | 1,0 | 1 | 0,0 |
| STAT_0x5AD9_WERT | 0x5AD9 | STAT_0x5AD9_WERT | Lineares Lambdasignal NOx-Sensor | - | LAMB_NOX_SENS[1] | - | unsigned integer | - | 9,765625E-4 | 1 | 0,0 |
| STAT_0x5ADA_WERT | 0x5ADA | STAT_0x5ADA_WERT | binäres Spannungssignal NOx-Sensor | mV | VLS_NOX_SENS[1] | - | unsigned integer | - | 1,0 | 1 | -200,0 |
| STAT_0x5ADB_WERT | 0x5ADB | STAT_0x5ADB_WERT | Status NOx-Sensor | - | CAN_STATE_NOX_SENS[1] | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x5ADC_WERT | 0x5ADC | STAT_0x5ADC_WERT | Fehler NOx-Sensor | - | CAN_ERR_NOX_SENS[1] | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x5ADF_WERT | 0x5ADF | STAT_0x5ADF_WERT | Taupunkterkennung für NOx-Sensor | 0/1 | LV_CAN_TEMP_MIN_THD_1 | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5AE0_WERT | 0x5AE0 | STAT_0x5AE0_WERT | Status-Byte für sicherheitsrelevante Informationen bezüglich atypischem Reset | - | RST_SEC | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x5AE2_WERT | 0x5AE2 | STAT_0x5AE2_WERT | Resetart des letzten Resets | - | RST_TYP | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x5AE3_WERT | 0x5AE3 | STAT_0x5AE3_WERT | Hintegrundinformationen zum letzten gültigen Reset | - | RST_DBG_BACK_INFO_VLD[0] | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x5AE4_WERT | 0x5AE4 | STAT_0x5AE4_WERT | Zusätzliche Resetinformationen zur Resetursache | - | RST_INFO_ADD[0] | - | unsigned long | - | 1,0 | 1 | 0,0 |
| STAT_0x5AE5_WERT | 0x5AE5 | STAT_0x5AE5_WERT | Fahrstrecke bei Reset | m | DIST_RST_DET[0] | - | unsigned long | - | 100,0 | 1 | 0,0 |
| STAT_0x5AE6_WERT | 0x5AE6 | STAT_0x5AE6_WERT | Betriebsstundenzähler bei Reset | h | TRT_RST_DET[0] | - | unsigned long | - | 2,7777778086601757E-5 | 1 | 0,0 |
| STAT_0x5AE7_WERT | 0x5AE7 | STAT_0x5AE7_WERT | Maximale CPU-Last bei Reseterkennung | % | CPU_LOAD_MAX_RST_DET[0] | - | unsigned integer | - | 0,09765625 | 1 | 0,0 |
| STAT_0x5AE8_WERT | 0x5AE8 | STAT_0x5AE8_WERT | Geschwindigkeit bei maximaler CPU-Last bei Reseterkennung | rpm | N_CPU_LOAD_MAX_RST_DET[0] | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| STAT_0x5AE9_WERT | 0x5AE9 | STAT_0x5AE9_WERT | Sicherheitsinformationen | - | RST_CLAS_SEC[0] | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x5AEA_WERT | 0x5AEA | STAT_0x5AEA_WERT | Anzahl von atypischen Warm-Resets seit letzter Power-Up-Phase (BSW) | - | RST_INFO_CTR | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STAT_0x5AEB_WERT | 0x5AEB | STAT_0x5AEB_WERT | Kühlmitteltemperatur < 98°C | % | TMOT_B1 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AEC_WERT | 0x5AEC | STAT_0x5AEC_WERT | 98°C =< Kühlmitteltemperatur =< 112°C | % | TMOT_B2 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AED_WERT | 0x5AED | STAT_0x5AED_WERT | 113°C =< Kühlmitteltemperatur =< 120°C | % | TMOT_B3 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AEE_WERT | 0x5AEE | STAT_0x5AEE_WERT | 121°C =< Kühlmitteltemperatur =< 125°C | % | TMOT_B4 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AEF_WERT | 0x5AEF | STAT_0x5AEF_WERT | Kühlmitteltemperatur > 125°C | % | TMOT_B5 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AF0_WERT | 0x5AF0 | STAT_0x5AF0_WERT | Motoröltemperatur < 80°C | % | TOEL_B1 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AF1_WERT | 0x5AF1 | STAT_0x5AF1_WERT | 80°C =< Motoröltemperatur =< 110°C | % | TOEL_B2 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AF2_WERT | 0x5AF2 | STAT_0x5AF2_WERT | 110°C =< Motoröltemperatur =< 135°C | % | TOEL_B3 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AF3_WERT | 0x5AF3 | STAT_0x5AF3_WERT | 135°C =< Motoröltemperatur =< 150°C | % | TOEL_B4 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AF4_WERT | 0x5AF4 | STAT_0x5AF4_WERT | Motoröltemperatur > 150°C | % | TOEL_B5 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AF5_WERT | 0x5AF5 | STAT_0x5AF5_WERT | Getriebeöltemperatur < 80°C | % | TGET_B1 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AF6_WERT | 0x5AF6 | STAT_0x5AF6_WERT | 80°C =< Getriebeöltemperatur =< 109°C | % | TGET_B2 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AF7_WERT | 0x5AF7 | STAT_0x5AF7_WERT | 110°C =< Getriebeöltemperatur =< 124°C | % | TGET_B3 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AF8_WERT | 0x5AF8 | STAT_0x5AF8_WERT | 125°C =< Getriebeöltemperatur =< 129°C | % | TGET_B4 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AF9_WERT | 0x5AF9 | STAT_0x5AF9_WERT | Getriebeöltemperatur > 129°C | % | TGET_B5 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AFA_WERT | 0x5AFA | STAT_0x5AFA_WERT | Umgebungstemperatur < 3°C | % | TUMG_B1 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AFB_WERT | 0x5AFB | STAT_0x5AFB_WERT | 3°C =< Umgebungstemperatur =< 19°C | % | TUMG_B2 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AFC_WERT | 0x5AFC | STAT_0x5AFC_WERT | 20°C =< Umgebungstemperatur =< 29°C | % | TUMG_B3 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AFD_WERT | 0x5AFD | STAT_0x5AFD_WERT | 30°C =< Umgebungstemperatur =< 39°C | % | TUMG_B4 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5AFE_WERT | 0x5AFE | STAT_0x5AFE_WERT | Umgebungstemperatur > 39°C | % | TUMG_B5 | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5B00_WERT | 0x5B00 | STAT_0x5B00_WERT | Einspritzzeit Zylinder 1 von der Endstufe rückgemessen  | ms | TI_1_MES[0] | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| STAT_0x5B01_WERT | 0x5B01 | STAT_0x5B01_WERT | Einspritzzeit Zylinder 2 von der Endstufe rückgemessen  | ms | TI_1_MES[4] | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| STAT_0x5B02_WERT | 0x5B02 | STAT_0x5B02_WERT | Einspritzzeit Zylinder 3 von der Endstufe rückgemessen  | ms | TI_1_MES[2] | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| STAT_0x5B03_WERT | 0x5B03 | STAT_0x5B03_WERT | Einspritzzeit Zylinder 4 von der Endstufe rückgemessen  | ms | TI_1_MES[5] | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| STAT_0x5B04_WERT | 0x5B04 | STAT_0x5B04_WERT | Einspritzzeit Zylinder 5 von der Endstufe rückgemessen  | ms | TI_1_MES[1] | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| STAT_0x5B05_WERT | 0x5B05 | STAT_0x5B05_WERT | Einspritzzeit Zylinder 6 von der Endstufe rückgemessen  | ms | TI_1_MES[3] | - | unsigned integer | - | 0,0010000000474974513 | 1 | 0,0 |
| STAT_0x5B10_WERT | 0x5B10 | STAT_0x5B10_WERT | Tastverhältnis Injektor 1 an Endstufe  | % | EGY_STEP_INJ_CHA_GRD[0] | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| STAT_0x5B11_WERT | 0x5B11 | STAT_0x5B11_WERT | Tastverhältnis Injektor 2 an Endstufe  | % | EGY_STEP_INJ_CHA_GRD[4] | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| STAT_0x5B12_WERT | 0x5B12 | STAT_0x5B12_WERT | Tastverhältnis Injektor 3 an Endstufe  | % | EGY_STEP_INJ_CHA_GRD[2] | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| STAT_0x5B13_WERT | 0x5B13 | STAT_0x5B13_WERT | Tastverhältnis Injektor 4 an Endstufe  | % | EGY_STEP_INJ_CHA_GRD[5] | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| STAT_0x5B14_WERT | 0x5B14 | STAT_0x5B14_WERT | Tastverhältnis Injektor 5 an Endstufe  | % | EGY_STEP_INJ_CHA_GRD[1] | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| STAT_0x5B15_WERT | 0x5B15 | STAT_0x5B15_WERT | Tastverhältnis Injektor 6 an Endstufe  | % | EGY_STEP_INJ_CHA_GRD[3] | - | unsigned integer | - | 0,006103515625 | 1 | 0,0 |
| STAT_0x5B20_WERT | 0x5B20 | STAT_0x5B20_WERT | Elektrische Ladung Injektor 1 | uAs | CHA_IV_1_MES[0] | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| STAT_0x5B21_WERT | 0x5B21 | STAT_0x5B21_WERT | Elektrische Ladung Injektor 2 | uAs | CHA_IV_1_MES[4] | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| STAT_0x5B22_WERT | 0x5B22 | STAT_0x5B22_WERT | Elektrische Ladung Injektor 3 | uAs | CHA_IV_1_MES[2] | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| STAT_0x5B23_WERT | 0x5B23 | STAT_0x5B23_WERT | Elektrische Ladung Injektor 4 | uAs | CHA_IV_1_MES[5] | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| STAT_0x5B24_WERT | 0x5B24 | STAT_0x5B24_WERT | Elektrische Ladung Injektor 5 | uAs | CHA_IV_1_MES[1] | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| STAT_0x5B25_WERT | 0x5B25 | STAT_0x5B25_WERT | Elektrische Ladung Injektor 6 | uAs | CHA_IV_1_MES[3] | - | unsigned integer | - | 2,22160005569458 | 1 | 0,0 |
| STAT_0x5B30_WERT | 0x5B30 | STAT_0x5B30_WERT | Spannung Injektor 1 | V | V_IV_1_MES[0] | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5B31_WERT | 0x5B31 | STAT_0x5B31_WERT | Spannung Injektor 2 | V | V_IV_1_MES[4] | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5B32_WERT | 0x5B32 | STAT_0x5B32_WERT | Spannung Injektor 3 | V | V_IV_1_MES[2] | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5B33_WERT | 0x5B33 | STAT_0x5B33_WERT | Spannung Injektor 4 | V | V_IV_1_MES[5] | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5B34_WERT | 0x5B34 | STAT_0x5B34_WERT | Spannung Injektor 5 | V | V_IV_1_MES[1] | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5B35_WERT | 0x5B35 | STAT_0x5B35_WERT | Spannung Injektor 6 | V | V_IV_1_MES[3] | - | unsigned integer | - | 0,01953125 | 1 | 0,0 |
| STAT_0x5B40_WERT | 0x5B40 | STAT_0x5B40_WERT | Adaptionswert der Enstufe Injektor 1 | %/mJ | FAC_EGY_PWM_AD[0] | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5B41_WERT | 0x5B41 | STAT_0x5B41_WERT | Adaptionswert der Enstufe Injektor 2 | %/mJ | FAC_EGY_PWM_AD[4] | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5B42_WERT | 0x5B42 | STAT_0x5B42_WERT | Adaptionswert der Enstufe Injektor 3 | %/mJ | FAC_EGY_PWM_AD[2] | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5B43_WERT | 0x5B43 | STAT_0x5B43_WERT | Adaptionswert der Enstufe Injektor 4 | %/mJ | FAC_EGY_PWM_AD[5] | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5B44_WERT | 0x5B44 | STAT_0x5B44_WERT | Adaptionswert der Enstufe Injektor 5 | %/mJ | FAC_EGY_PWM_AD[1] | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5B45_WERT | 0x5B45 | STAT_0x5B45_WERT | Adaptionswert der Enstufe Injektor 6 | %/mJ | FAC_EGY_PWM_AD[3] | - | unsigned integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5B50_WERT | 0x5B50 | STAT_0x5B50_WERT | Momentan eingerechnete CILC-Werte Injektor 1 | % | FAC_CYL_LAM_COR[0] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5B51_WERT | 0x5B51 | STAT_0x5B51_WERT | Momentan eingerechnete CILC-Werte Injektor 2 | % | FAC_CYL_LAM_COR[4] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5B52_WERT | 0x5B52 | STAT_0x5B52_WERT | Momentan eingerechnete CILC-Werte Injektor 3 | % | FAC_CYL_LAM_COR[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5B53_WERT | 0x5B53 | STAT_0x5B53_WERT | Momentan eingerechnete CILC-Werte Injektor 4 | % | FAC_CYL_LAM_COR[5] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5B54_WERT | 0x5B54 | STAT_0x5B54_WERT | Momentan eingerechnete CILC-Werte Injektor 5 | % | FAC_CYL_LAM_COR[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5B55_WERT | 0x5B55 | STAT_0x5B55_WERT | Momentan eingerechnete CILC-Werte Injektor 6 | % | FAC_CYL_LAM_COR[3] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5B60_WERT | 0x5B60 | STAT_0x5B60_WERT | CILC-Adaption kalt Injektor 1 | % | FAC_LAM_CYL_SEL_ADJ_CST[0] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5B61_WERT | 0x5B61 | STAT_0x5B61_WERT | CILC-Adaption kalt Injektor 2 | % | FAC_LAM_CYL_SEL_ADJ_CST[4] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5B62_WERT | 0x5B62 | STAT_0x5B62_WERT | CILC-Adaption kalt Injektor 3 | % | FAC_LAM_CYL_SEL_ADJ_CST[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5B63_WERT | 0x5B63 | STAT_0x5B63_WERT | CILC-Adaption kalt Injektor 4 | % | FAC_LAM_CYL_SEL_ADJ_CST[5] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5B64_WERT | 0x5B64 | STAT_0x5B64_WERT | CILC-Adaption kalt Injektor 5 | % | FAC_LAM_CYL_SEL_ADJ_CST[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5B65_WERT | 0x5B65 | STAT_0x5B65_WERT | CILC-Adaption kalt Injektor 6 | % | FAC_LAM_CYL_SEL_ADJ_CST[3] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5B70_WERT | 0x5B70 | STAT_0x5B70_WERT | ER-Adaption MFF-additiv im LL Schicht für Injektor 1 | mg/stk | MFF_ADD_AD_ER_BAL[0] | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| STAT_0x5B71_WERT | 0x5B71 | STAT_0x5B71_WERT | ER-Adaption MFF-additiv im LL Schicht für Injektor 2 | mg/stk | MFF_ADD_AD_ER_BAL[4] | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| STAT_0x5B72_WERT | 0x5B72 | STAT_0x5B72_WERT | ER-Adaption MFF-additiv im LL Schicht für Injektor 3 | mg/stk | MFF_ADD_AD_ER_BAL[2] | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| STAT_0x5B73_WERT | 0x5B73 | STAT_0x5B73_WERT | ER-Adaption MFF-additiv im LL Schicht für Injektor 4 | mg/stk | MFF_ADD_AD_ER_BAL[5] | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| STAT_0x5B74_WERT | 0x5B74 | STAT_0x5B74_WERT | ER-Adaption MFF-additiv im LL Schicht für Injektor 5 | mg/stk | MFF_ADD_AD_ER_BAL[1] | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| STAT_0x5B75_WERT | 0x5B75 | STAT_0x5B75_WERT | ER-Adaption MFF-additiv im LL Schicht für Injektor 6 | mg/stk | MFF_ADD_AD_ER_BAL[3] | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| STAT_0x5B80_WERT | 0x5B80 | STAT_0x5B80_WERT | ER-MFF-aditiv im LL-Schicht (momentan eingerechte Werte) Injektor 1 | mg/stk | MFF_ADD_ER_BAL[0] | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| STAT_0x5B81_WERT | 0x5B81 | STAT_0x5B81_WERT | ER-MFF-aditiv im LL-Schicht (momentan eingerechte Werte) Injektor 2 | mg/stk | MFF_ADD_ER_BAL[4] | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| STAT_0x5B82_WERT | 0x5B82 | STAT_0x5B82_WERT | ER-MFF-aditiv im LL-Schicht (momentan eingerechte Werte) Injektor 3 | mg/stk | MFF_ADD_ER_BAL[2] | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| STAT_0x5B83_WERT | 0x5B83 | STAT_0x5B83_WERT | ER-MFF-aditiv im LL-Schicht (momentan eingerechte Werte) Injektor 4 | mg/stk | MFF_ADD_ER_BAL[5] | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| STAT_0x5B84_WERT | 0x5B84 | STAT_0x5B84_WERT | ER-MFF-aditiv im LL-Schicht (momentan eingerechte Werte) Injektor 5 | mg/stk | MFF_ADD_ER_BAL[1] | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| STAT_0x5B85_WERT | 0x5B85 | STAT_0x5B85_WERT | ER-MFF-aditiv im LL-Schicht (momentan eingerechte Werte) Injektor 6 | mg/stk | MFF_ADD_ER_BAL[3] | - | signed integer | - | 0,021194780245423317 | 1 | 3,084246525177049E-13 |
| STAT_0x5B90_WERT | 0x5B90 | STAT_0x5B90_WERT | ER-Adaptionsfaktor in Schicht Teillast für Injektor 1 | - | FAC_TI_AD_ER_BAL[0] | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5B91_WERT | 0x5B91 | STAT_0x5B91_WERT | ER-Adaptionsfaktor in Schicht Teillast für Injektor 2 | - | FAC_TI_AD_ER_BAL[4] | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5B92_WERT | 0x5B92 | STAT_0x5B92_WERT | ER-Adaptionsfaktor in Schicht Teillast für Injektor 3 | - | FAC_TI_AD_ER_BAL[2] | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5B93_WERT | 0x5B93 | STAT_0x5B93_WERT | ER-Adaptionsfaktor in Schicht Teillast für Injektor 4 | - | FAC_TI_AD_ER_BAL[5] | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5B94_WERT | 0x5B94 | STAT_0x5B94_WERT | ER-Adaptionsfaktor in Schicht Teillast für Injektor 5 | - | FAC_TI_AD_ER_BAL[1] | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5B95_WERT | 0x5B95 | STAT_0x5B95_WERT | ER-Adaptionsfaktor in Schicht Teillast für Injektor 6 | - | FAC_TI_AD_ER_BAL[3] | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5BA0_WERT | 0x5BA0 | STAT_0x5BA0_WERT | ER-Faktor in Schicht Teillast momentan eingerechnet für Injektor 1 | - | FAC_TI_ER_BAL[0] | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5BA1_WERT | 0x5BA1 | STAT_0x5BA1_WERT | ER-Faktor in Schicht Teillast momentan eingerechnet für Injektor 2 | - | FAC_TI_ER_BAL[4] | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5BA2_WERT | 0x5BA2 | STAT_0x5BA2_WERT | ER-Faktor in Schicht Teillast momentan eingerechnet für Injektor 3 | - | FAC_TI_ER_BAL[2] | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5BA3_WERT | 0x5BA3 | STAT_0x5BA3_WERT | ER-Faktor in Schicht Teillast momentan eingerechnet für Injektor 4 | - | FAC_TI_ER_BAL[5] | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5BA4_WERT | 0x5BA4 | STAT_0x5BA4_WERT | ER-Faktor in Schicht Teillast momentan eingerechnet für Injektor 5 | - | FAC_TI_ER_BAL[1] | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5BA5_WERT | 0x5BA5 | STAT_0x5BA5_WERT | ER-Faktor in Schicht Teillast momentan eingerechnet für Injektor 6 | - | FAC_TI_ER_BAL[3] | - | signed integer | - | 3,0517578125E-5 | 1 | 0,0 |
| STAT_0x5BB0_WERT | 0x5BB0 | STAT_0x5BB0_WERT | Lambdaadaption am Bandende hat fertig gelernt  | 0/1 | LV_CYL_BAL_LAM_AD_EOL | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5BB1_WERT | 0x5BB1 | STAT_0x5BB1_WERT | ER-Balancing am Bandende hat additiv adaptiert  | 0/1 | LV_CYL_BAL_ER_AD_ADD_EOL | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5BB2_WERT | 0x5BB2 | STAT_0x5BB2_WERT | Lambdaadaption ist nötig, zyklisch während Motorbetrieb zu 1 gesetzt  | 0/1 | LV_CYL_BAL_LAM_AD_DC | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5BB3_WERT | 0x5BB3 | STAT_0x5BB3_WERT | ER-Balancing am Bandende hat den Faktor adaptiert  | 0/1 | LV_CYL_BAL_ER_AD_FAC_EOL | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5BB4_WERT | 0x5BB4 | STAT_0x5BB4_WERT | Zylindersel. Lambdaregelung fordert homogen an, zyklisch während dem Motorbetrieb zu 1 gesetzt  | 0/1 | LV_CYL_BAL_AD_HOM_REQ_DC | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5BB5_WERT | 0x5BB5 | STAT_0x5BB5_WERT | Zylindersel. Lambdaregelung kalt am Bandende hat fertig adaptiert  | 0/1 | LV_CYL_BAL_LAM_SEL_AD_COLD_EOL | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5BB6_WERT | 0x5BB6 | STAT_0x5BB6_WERT | Zylindersel. Lambdaregelung warm am Bandende hat fertig adaptiert  | 0/1 | LV_CYL_BAL_LAM_SEL_AD_HOT_EOL | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5BB7_WERT | 0x5BB7 | STAT_0x5BB7_WERT | Zylindersel. Lambdaregelung warm ist nötig, zyklisch während Motorbetrieb zu 1 gesetzt  | 0/1 | LV_CYL_BAL_LAM_SEL_AD_HOT_DC | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5BB8_WERT | 0x5BB8 | STAT_0x5BB8_WERT | Zylindersel. Lambdaregelung fordert öffnen WG an, zyklisch während dem Motorbetrieb zu 1 gesetzt  | 0/1 | LV_CYL_BAL_AD_WG_OPEN_REQ[1] | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5BB9_WERT | 0x5BB9 | STAT_0x5BB9_WERT | Zylindersel. Lambdaregelung fordert öffnen WG2 an, zyklisch während dem Motorbetrieb zu 1 gesetzt  | 0/1 | LV_CYL_BAL_AD_WG_OPEN_REQ[2] | - | unsigned char | - | 1 | 1 | 0 |
| STAT_0x5BBA_WERT | 0x5BBA | STAT_0x5BBA_WERT | Relative Zeit Homogen-Betrieb gesamter Motorlauf | % | RT_BASTATG_H | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5BBB_WERT | 0x5BBB | STAT_0x5BBB_WERT | Relative Zeit Homogen-Schicht-Betrieb gesamter Motorlauf | % | RT_BASTATG_HS | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5BBC_WERT | 0x5BBC | STAT_0x5BBC_WERT | Relative Zeit Schicht-Betrieb gesamter Motorlauf | % | RT_BASTATG_S | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
| STAT_0x5BBD_WERT | 0x5BBD | STAT_0x5BBD_WERT | Relative Zeit Homogen-Betrieb gesamter Motorlauf | % | RT_BASTATG_SA | - | unsigned integer | - | 0,00152587890625 | 1 | 0,0 |
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
| STAT_0x5BE0_WERT | 0x5BE0 | STAT_0x5BE0_WERT | CILC-Adaptionswert warm High-Range Injektor 1 | % | FAC_LAM_CYL_SEL_ADJ_H_RNG[0] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BE1_WERT | 0x5BE1 | STAT_0x5BE1_WERT | CILC-Adaptionswert warm High-Range Injektor 2 | % | FAC_LAM_CYL_SEL_ADJ_H_RNG[4] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BE2_WERT | 0x5BE2 | STAT_0x5BE2_WERT | CILC-Adaptionswert warm High-Range Injektor 3 | % | FAC_LAM_CYL_SEL_ADJ_H_RNG[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BE3_WERT | 0x5BE3 | STAT_0x5BE3_WERT | CILC-Adaptionswert warm High-Range Injektor 4 | % | FAC_LAM_CYL_SEL_ADJ_H_RNG[5] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BE4_WERT | 0x5BE4 | STAT_0x5BE4_WERT | CILC-Adaptionswert warm High-Range Injektor 5 | % | FAC_LAM_CYL_SEL_ADJ_H_RNG[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BE5_WERT | 0x5BE5 | STAT_0x5BE5_WERT | CILC-Adaptionswert warm High-Range Injektor 6 | % | FAC_LAM_CYL_SEL_ADJ_H_RNG[3] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BF0_WERT | 0x5BF0 | STAT_0x5BF0_WERT | CILC-Adaptionswert warm Low-Range Injektor 1 | % | FAC_LAM_CYL_SEL_ADJ_L_RNG[0] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BF1_WERT | 0x5BF1 | STAT_0x5BF1_WERT | CILC-Adaptionswert warm Low-Range Injektor 2 | % | FAC_LAM_CYL_SEL_ADJ_L_RNG[4] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BF2_WERT | 0x5BF2 | STAT_0x5BF2_WERT | CILC-Adaptionswert warm Low-Range Injektor 3 | % | FAC_LAM_CYL_SEL_ADJ_L_RNG[2] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BF3_WERT | 0x5BF3 | STAT_0x5BF3_WERT | CILC-Adaptionswert warm Low-Range Injektor 4 | % | FAC_LAM_CYL_SEL_ADJ_L_RNG[5] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BF4_WERT | 0x5BF4 | STAT_0x5BF4_WERT | CILC-Adaptionswert warm Low-Range Injektor 5 | % | FAC_LAM_CYL_SEL_ADJ_L_RNG[1] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| STAT_0x5BF5_WERT | 0x5BF5 | STAT_0x5BF5_WERT | CILC-Adaptionswert warm Low-Range Injektor 6 | % | FAC_LAM_CYL_SEL_ADJ_L_RNG[3] | - | signed integer | - | 0,00152587890625 | 1 | 2,220446098881151E-14 |
| - | 0x58FF | - | Umweltbedingung unbekannt | - | - | - | unsigned char | - | 1 | 1 | 0 |

### SG_DIAGNOSEKONZEPT

| RANG | KONZEPT_TEXT |
| --- | --- |
| 1 | BMW-FAST |
| 2 | KWP2000* |
| 3 | KWP2000 |

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

### STATUS_NOX_SENSOR

| NR | STATUS |
| --- | --- |
| 0x00 | Stickoxidsensor: noch keine Aktivität |
| 0x01 | Stickoxidsensor: Spannungsversorgung fehlerhaft |
| 0x02 | Stickoxidsensor: Bereitschaftsebene I, Temperatur in Ordnung |
| 0x0E | Stickoxidsensor: Bereitschaftsebene II, lineares und binäres Lambdasignal in Ordnung |
| 0x1E | Stickoxidsensor: volle Bereitschaftsebene, alle Signale in Ordnung |
| 0x1F | Stickoxidsensor: volle Bereitschaftsebene, aber Spannungsversorgung fehlerhaft |
| 0x40 | Stickoxidsensor: Warten auf Taupunkterkennung |
| 0xFF | Stickoxidsensor: unbekannter Status |

### STATUS_UREGNOM

| NR | TYP |
| --- | --- |
| 0x00 | Spannungssystem: 14V |
| 0x01 | Spannungssystem: 42V |
| 0x02 | Spannungssystem: nicht definiert |
| 0x03 | Spannungssystem: nicht definiert |
| 0xFF | Spannungssystem: unbekannt |

### _CNV_S_10_STATE_EOL__478

| WERT | UWTEXT |
| --- | --- |
| 0x00 | NOT_START |
| 0x01 | ST_INH |
| 0x02 | PAR_NOT_PLAUS |
| 0x03 | WAIT_REL |
| 0x04 | UNDEF |
| 0x05 | ACT |
| 0x06 | END_WOUT_RESULT |
| 0x07 | ABORTED |
| 0x08 | END_WOUT_ERR |
| 0x09 | END_WITH_ERR |
| 0xFF | undefiniert |

### _CNV_S_11_DEF_BA_WM_660

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
| 0xFF | undefiniert |

### _CNV_S_11_EGCP_RANGE_389

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

### _CNV_S_11_RANGE_STAT_976

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

### _CNV_S_4_EGCP_RANGE_391

| WERT | UWTEXT |
| --- | --- |
| 0x00 | NO_SYM |
| 0x01 | TTIP_ERR |
| 0x02 | READY_ERR |
| 0x04 | TTIP_MES_ERR |
| 0xFF | undefiniert |

### _CNV_S_4_EGCP_RANGE_400

| WERT | UWTEXT |
| --- | --- |
| 0x00 | VLS_OK |
| 0x01 | VLS_L |
| 0x02 | VLS_H_OC |
| 0x04 | VLS_AFS_OC |
| 0xFF | undefiniert |

### _CNV_S_5_DEF_BA_GDI_655

| WERT | UWTEXT |
| --- | --- |
| 0x00 | KEINE |
| 0x01 | Schicht |
| 0x02 | Homogen |
| 0x03 | Homogen_Schicht |
| 0x08 | NOTLAUF |
| 0xFF | undefiniert |

### _CNV_S_5_LACO_RANGE_439

| WERT | UWTEXT |
| --- | --- |
| 0x01 | 1:OL_CDN |
| 0x02 | 2:CL |
| 0x04 | 4:OL_INTR |
| 0x08 | 8:OL_ERR |
| 0x10 | 10:CL_ERR |
| 0xFF | undefiniert |

### _CNV_S_5_RANGE_STAT_1015

| WERT | UWTEXT |
| --- | --- |
| 0x00 | HEAT_OFF |
| 0x01 | HEAT_OFF_DLY |
| 0x02 | HEAT_ON_DLY |
| 0x03 | HEAT_ON |
| 0x04 | HEAT_EXT_ADJ |
| 0xFF | undefiniert |

### _CNV_S_5_RANGE_STAT_301

| WERT | UWTEXT |
| --- | --- |
| 0x00 | ETC_NO_LIH |
| 0x01 | ETC_LIH_1 |
| 0x02 | ETC_LIH_2_REV |
| 0x04 | ETC_LIH_2 |
| 0x08 | ETC_LIH_3 |
| 0xFF | undefiniert |

### _CNV_S_6_ACRC_RANGE_906

| WERT | UWTEXT |
| --- | --- |
| 0x00 | ACR_AD_INIT |
| 0x01 | ACR_AD_BOL |
| 0x02 | ACR_GO_TOL |
| 0x03 | ACR_AD_TOL |
| 0x04 | ACR_GO_BOL |
| 0x05 | ACR_AD_END |
| 0xFF | undefiniert |

### _CNV_S_6_RANGE_STAT_113

| WERT | UWTEXT |
| --- | --- |
| 0x00 | PASSIVE |
| 0x01 | CONST_DRIVE |
| 0x03 | RESUME |
| 0x05 | SET_ACC |
| 0x07 | RETARD |
| 0x09 | TIP |
| 0xFF | undefiniert |

### _CNV_S_6_RANGE_STAT_179

| WERT | UWTEXT |
| --- | --- |
| 0x00 | ES |
| 0x01 | ST |
| 0x02 | IS |
| 0x03 | PL |
| 0x04 | PU |
| 0x05 | PUC |
| 0xFF | undefiniert |

### _CNV_S_7_EGCP_RANGE_371

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

### _CNV_S_7_RANGE_ECU__177

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

### _CNV_S_8_RANGE_STAT_23

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

### BITS

| NAME | BYTE | MASK | VALUE |
| --- | --- | --- | --- |
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

### _MSD8ASAM_TABLE_UEN

| NR | TEXT |
| --- | --- |
| 1 | Ruecksetzung erfolgt |
| 2 | Ruecksetzung nicht erfolgt |

### _MSD8ASAM_CNV_S_5_DEF_BA_GDI_588_CM

| NR | TEXT |
| --- | --- |
| 0 | Keine |
| 1 | Schicht |
| 2 | Homogen |
| 3 | Homogen_Schicht |
| 8 | Notlauf |

### _MSD8ASAM_CNV_S_2_DEF_BIT_UB_755_CM_4DC3300S

| NR | TEXT |
| --- | --- |
| 0 | Auslieferungszustand |
| 1 | Abweichung zum Auslieferungszustand |

### _MSD8ASAM_CNV_S_2_DEF_BIT_UB_755_CM0X2_4DC3300S

| NR | TEXT |
| --- | --- |
| 0 | Schaltpunktanzeige inaktiv |
| 1 | Schaltpunktanzeige aktiv |

### _MSD8ASAM_CNV_S_2_DEF_BIT_UB_741_CM

| NR | TEXT |
| --- | --- |
| 0 | Falsch |
| 1 | Wahr |

### _MSD8ASAM_CNV_S_10_STATE_EOL__449_CM_4DC3200S_

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

### _MSD8ASAM_CNV_S_10_STATE_EOL__450_CM_4DC3200S

| NR | TEXT |
| --- | --- |
| 0 | Passiv |
| 1 | Drehzahlerhoehung |
| 2 | Aufheizphase Katalysator |
| 3 | Desulfatisierung |

### _MSD8ASAM_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT7

| NR | TEXT |
| --- | --- |
| 0 | Regelkreis Bank 1 nicht geschlossen |
| 1 | Regelkreis Bank 1 geschlossen |

### _MSD8ASAM_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT6

| NR | TEXT |
| --- | --- |
| 0 | Regelkreis Bank 2 nicht geschlossen |
| 1 | Regelkreis Bank 2 geschlossen |

### _MSD8ASAM_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT5

| NR | TEXT |
| --- | --- |
| 0 | Lambdaregelung vor Katalysator Bank 1 nicht aktiv |
| 1 | Lambdaregelung vor Katalysator Bank 1 aktiv |

### _MSD8ASAM_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT4

| NR | TEXT |
| --- | --- |
| 0 | Lambdaregelung vor Katalysator Bank 2 nicht aktiv |
| 1 | Lambdaregelung vor Katalysator Bank 2 aktiv |

### _MSD8ASAM_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT3

| NR | TEXT |
| --- | --- |
| 0 | Lambdaregelung hinter Katalysator Bank 2 nicht aktiv |
| 1 | Lambdaregelung hinter Katalysator Bank 2 aktiv |

### _MSD8ASAM_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT2

| NR | TEXT |
| --- | --- |
| 0 | Lambdaregelung hinter Katalysator Bank 1 nicht aktiv |
| 1 | Lambdaregelung hinter Katalysator Bank 1 aktiv |

### _MSD8ASAM_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT1

| NR | TEXT |
| --- | --- |
| 0 | keine Vollast |
| 1 | Vollast |

### _MSD8ASAM_TABLE_SWITCH_POSITION_HIGH_BYTE_BIT0

| NR | TEXT |
| --- | --- |
| 0 | kein Leerlauf |
| 1 | Leerlauf |

### _MSD8ASAM_TABLE_SWITCH_POSITION_LOW_BYTE_BIT7

| NR | TEXT |
| --- | --- |
| 0 | Drosselklappen-Neuabgleich nicht erforderlich |
| 1 | Drosselklappen-Neuabgleich erforderlich |

### _MSD8ASAM_TABLE_SWITCH_POSITION_LOW_BYTE_BIT6

| NR | TEXT |
| --- | --- |
| 0 | keine Schubabschaltung aktiv |
| 1 | Schubabschaltung aktiv |

### _MSD8ASAM_TABLE_SWITCH_POSITION_LOW_BYTE_BIT3

| NR | TEXT |
| --- | --- |
| 0 | Gang nicht eingelegt, Park- oder Neutralstellung |
| 1 | Gang eingelegt, nicht Park- oder Neutralstellung |

### _MSD8ASAM_TABLE_SWITCH_POSITION_LOW_BYTE_BIT2

| NR | TEXT |
| --- | --- |
| 0 | kein Kickdown erkannt |
| 1 | Kickdown erkannt |

### _MSD8ASAM_TABLE_TEMPOMAT_AUS_IRR_LOW_BYTE_BIT5

| NR | TEXT |
| --- | --- |
| 0 | kein Fehler Bremse |
| 1 | Fehler Bremse |

### _MSD8ASAM_TABLE_TEMPOMAT_AUS_IRR_LOW_BYTE_BIT4

| NR | TEXT |
| --- | --- |
| 0 | kein Timeout EGS |
| 1 | Timeout EGS |

### _MSD8ASAM_TABLE_TEMPOMAT_AUS_IRR_LOW_BYTE_BIT3

| NR | TEXT |
| --- | --- |
| 0 | kein Fehler Multifunktionslenkrad |
| 1 | Fehler Multifunktionslenkrad |

### _MSD8ASAM_TABLE_TEMPOMAT_AUS_IRR_LOW_BYTE_BIT2

| NR | TEXT |
| --- | --- |
| 0 | kein Fehler Kupplungsschalter |
| 1 | Fehler Kupplungsschalter |

### _MSD8ASAM_TABLE_TEMPOMAT_AUS_IRR_LOW_BYTE_BIT1

| NR | TEXT |
| --- | --- |
| 0 | kein Notlauf Limit Dynamik 2 |
| 1 | Notlauf Limit Dynamik 2 |

### _MSD8ASAM_TABLE_TEMPOMAT_AUS_IRR_LOW_BYTE_BIT0

| NR | TEXT |
| --- | --- |
| 0 | kein Notlauf Limit Dynamik 1 |
| 1 | Notlauf Limit Dynamik 1 |

### _MSD8ASAM_TABLE_TEMPOMAT_AUS_IRR_HIGH_BYTE_BIT6

| NR | TEXT |
| --- | --- |
| 0 | kein EGAS-Notlauf |
| 1 | EGAS-Notlauf |

### _MSD8ASAM_TABLE_TEMPOMAT_AUS_IRR_HIGH_BYTE_BIT5

| NR | TEXT |
| --- | --- |
| 0 | keine Kommunikation zum ASR-Steuergeraet |
| 1 | Kommunikation zum ASR-Steuergeraet |

### _MSD8ASAM_TABLE_TEMPOMAT_AUS_IRR_HIGH_BYTE_BIT4

| NR | TEXT |
| --- | --- |
| 0 | kein Fehler Geschwindigkeit |
| 1 | Fehler Geschwindigkeit |

### _MSD8ASAM_TABLE_TEMPOMAT_AUS_IRR_HIGH_BYTE_BIT3

| NR | TEXT |
| --- | --- |
| 0 | kein Notlauf DK-Steller |
| 1 | Notlauf DK-Steller |

### _MSD8ASAM_TABLE_TEMPOMAT_AUS_IRR_HIGH_BYTE_BIT2

| NR | TEXT |
| --- | --- |
| 0 | kein Notlauf LL-Steller |
| 1 | Notlauf LL-Steller |

### _MSD8ASAM_TABLE_TEMPOMAT_AUS_IRR_HIGH_BYTE_BIT1

| NR | TEXT |
| --- | --- |
| 0 | Geschwindigkeit unplausibel |
| 1 | Geschwindigkeit plausibel |

### _MSD8ASAM_TABLE_TEMPOMAT_AUS_IRR_HIGH_BYTE_BIT0

| NR | TEXT |
| --- | --- |
| 0 | Monitoring Ebene 2 aus |
| 1 | Monitoring Ebene 2 ein |

### _MSD8ASAM_TABLE_TEMPOMAT_AUS_REV_LOW_BYTE_BIT4

| NR | TEXT |
| --- | --- |
| 0 | Multifunktionslenkrad nicht ausgeschaltet |
| 1 | Multifunktionslenkrad ausgeschaltet |

### _MSD8ASAM_TABLE_TEMPOMAT_AUS_REV_LOW_BYTE_BIT3

| NR | TEXT |
| --- | --- |
| 0 | kein externer Drehmomenteneingriff |
| 1 | externer Drehmomenteneingriff |

### _MSD8ASAM_TABLE_TEMPOMAT_AUS_REV_LOW_BYTE_BIT2

| NR | TEXT |
| --- | --- |
| 0 | Sollwert fuer maximale Geschwindigkeit nicht zu lang |
| 1 | Sollwert fuer maximale Geschwindigkeit zu lang |

### _MSD8ASAM_TABLE_TEMPOMAT_AUS_REV_LOW_BYTE_BIT1

| NR | TEXT |
| --- | --- |
| 0 | Geschwindigkeitsuebernahme nicht zu lang |
| 1 | Geschwindigkeitsuebernahme zu lang |

### _MSD8ASAM_TABLE_TEMPOMAT_AUS_REV_LOW_BYTE_BIT0

| NR | TEXT |
| --- | --- |
| 0 | Geschwindigkeitsdifferenz nicht zu hoch |
| 1 | Geschwindigkeitsdifferenz zu hoch |

### _MSD8ASAM_TABLE_TEMPOMAT_AUS_REV_HIGH_BYTE_BIT7

| NR | TEXT |
| --- | --- |
| 0 | Multifunktionslenkrad Notaus nicht aktiv |
| 1 | Multifunktionslenkrad Notaus aktiv |

### _MSD8ASAM_TABLE_TEMPOMAT_AUS_REV_HIGH_BYTE_BIT6

| NR | TEXT |
| --- | --- |
| 0 | Bremsen nicht festgestellt |
| 1 | Bremsen festgestellt |

### _MSD8ASAM_TABLE_TEMPOMAT_AUS_REV_HIGH_BYTE_BIT5

| NR | TEXT |
| --- | --- |
| 0 | Drehzahlbegrenzung nicht aktiv |
| 1 | Drehzahlbegrenzung aktiv |

### _MSD8ASAM_TABLE_TEMPOMAT_AUS_REV_HIGH_BYTE_BIT4

| NR | TEXT |
| --- | --- |
| 0 | Geschwindigkeit nicht zu gering |
| 1 | Geschwindigkeit zu gering |

### _MSD8ASAM_TABLE_TEMPOMAT_AUS_REV_HIGH_BYTE_BIT3

| NR | TEXT |
| --- | --- |
| 0 | Uebernahme und Maximalgeschwindigkeit nicht aktiv |
| 1 | Uebernahme und Maximalgeschwindigkeit aktiv |

### _MSD8ASAM_TABLE_TEMPOMAT_AUS_REV_HIGH_BYTE_BIT2

| NR | TEXT |
| --- | --- |
| 0 | Hochdrehsicherung nicht aktiv |
| 1 | Hochdrehsicherung aktiv |

### _MSD8ASAM_TABLE_TEMPOMAT_AUS_REV_HIGH_BYTE_BIT1

| NR | TEXT |
| --- | --- |
| 0 | Beschleunigungsueberwachung nicht aktiv |
| 1 | Beschleunigungsueberwachung aktiv |

### _MSD8ASAM_TABLE_TEMPOMAT_AUS_REV_HIGH_BYTE_BIT0

| NR | TEXT |
| --- | --- |
| 0 | CAN-Botschaft Geschwindigkeit nicht zu lang |
| 1 | CAN-Botschaft Geschwindigkeit zu lang |

### _MSD8ASAM_TABLE_SWITCH_POSITION_BIT7

| NR | TEXT |
| --- | --- |
| 0 | Anforderung Klimabereitschaft aus |
| 1 | Anforderung Klimabereitschaft ein |

### _MSD8ASAM_TABLE_SWITCH_POSITION_BIT4

| NR | TEXT |
| --- | --- |
| 0 | Bremslichtschalter-Kanal 2 aus |
| 1 | Bremslichtschalter-Kanal 2 ein |

### _MSD8ASAM_TABLE_SWITCH_POSITION_BIT3

| NR | TEXT |
| --- | --- |
| 0 | Bremslichtschalter-Kanal 1 aus |
| 1 | Bremslichtschalter-Kanal 1 ein |

### _MSD8ASAM_TABLE_SWITCH_POSITION_BIT2

| NR | TEXT |
| --- | --- |
| 0 | Kupplung aus |
| 1 | Kupplung ein |

### _MSD8ASAM_TABLE_SWITCH_POSITION_BIT1

| NR | TEXT |
| --- | --- |
| 0 | Motor laeuft |
| 1 | Motor steht |

### _MSD8ASAM_TABLE_SWITCH_POSITION_BIT0

| NR | TEXT |
| --- | --- |
| 0 | Klemme-15 aus |
| 1 | Klemme-15 ein |

### _MSD8ASAM_CNV_S_8_RANGE_STAT_19_CM

| NR | TEXT |
| --- | --- |
| 0 | Heizung aus |
| 1 | Warten auf Heizung aus |
| 2 | Warten auf Heizung an |
| 3 | Heizung an |
| 4 | Heizung, externe Ansteuerung |
| 5 | - |
| 6 | -- |
| 7 | Fehler |

### _MSD8ASAM_CNV_S_2_DEF_BIT_UW_517_CM0X4

| NR | TEXT |
| --- | --- |
| 0 | Falsch |
| 4 | Wahr |

### _MSD8ASAM_CNV_S_2_DEF_BIT_UB_716_CM0X4

| NR | TEXT |
| --- | --- |
| 0 | Falsch |
| 4 | Wahr |

### _MSD8ASAM_CNV_S_4_RANGE_STAT_455_CM_4DC3200S

| NR | TEXT |
| --- | --- |
| 0 | Deaktiviert |
| 1 | Fertigungsmodus |
| 2 | Transportmodus |
| 3 | Werkstattmodus |

### _MSD8ASAM_TABLE_MSA_KUP

| NR | TEXT |
| --- | --- |
| 0 | Kupplung nicht oder zu weniger als 10% betaetigt |
| 1 | Kupplung zu mindestens 10% betaetigt |
| 2 | Kupplungssensorsignal unplausibel |
| 3 | Kupplung zu mindestens 90% betaetigt |

### _MSD8ASAM_CNV_S_10_STATE_EOL__467_CM_4D004N0S

| NR | TEXT |
| --- | --- |
| 0 | Funktion noch nicht gestartet |
| 1 | Start-/Ansteuerbedingung nicht erfuellt |
| 2 | Uebergabeparameter nicht plausibel |
| 3 | Funktion wartet auf Freigabe |
| 4 | UNDEF |
| 5 | Funktion laeuft |
| 6 | Funktion beendet (ohne Ergebnis) |
| 7 | Funktion abgebrochen |
| 8 | Funktion vollstaendig durchlaufen und kein Fehler erkannt |
| 9 | Funktion vollstaendig durchlaufen und Fehler erkannt |

### _MSD8ASAM_CNV_S_5_STATE_OPM_566_CM_4D004N0S

| NR | TEXT |
| --- | --- |
| 0 | NO ACTION |
| 1 | S |
| 2 | AFS |
| 3 | AFL |
| 8 | LIH |

### _MSD8ASAM_TABEL_STATUS_OBD_READINESS

| NR | TEXT |
| --- | --- |
| 0 | Test abgeschlossen oder nicht anwendbar |
| 1 | Test nicht abgeschlossen |

### _MSD8ASAM_TABEL_STATUS_OBD_MONITOR

| NR | TEXT |
| --- | --- |
| 0 | Test wird durch dieses Modul nicht unterstuetzt |
| 1 | Test wird durch dieses Modul unterstuetzt |

### _MSD8ASAM_TABLE_FS

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

### _MSD8ASAMDEF_ST_ATLSVC_BMSNF

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

### _MSD8ASAMDEF_ST_ATLSVC_PVDK_BMSNF

| NR | TEXT |
| --- | --- |
| 0 | Ladedruckdiagnose ohne Ergebnis |
| 1 | Ladedruck fehlerfrei |
| 2 | Gesamtladedruck zu niedrig |
| 3 | Turbolader 1 mit Ladedruckfehler |
| 4 | Turbolader 2 mit Ladedruckfehler |
| 5 | Gesamtladedruck zu niedrig, Bank nicht identifiziert |

### _MSD8ASAM_CNV_S_2_DEF_BIT_UW_683_CM_4DC3500S

| NR | TEXT |
| --- | --- |
| 0 | Falsch |
| 1 | Wahr |

### _MSD8ASAM_CNV_S_13_STATE_DMTL_140_CM

| NR | TEXT |
| --- | --- |
| 0 | Start |
| 1 | Erste Referenzleck Messung |
| 2 | Grobleck Messung Start |
| 3 | Grobleck Messung erweitert |
| 4 | Grobleck Messung beendet |
| 5 | Feinleck Messung Start |
| 6 | Feinleck Messung erweitert |
| 7 | Zweite Referenzleck Messung |
| 8 | Tank geprueft |
| 9 | Feinleck |
| 10 | Grobleck |
| 11 | Modulfehler |
| 12 | Ende |
| 17 | Batteriespannung aus gueltigem Bereich |
| 18 | elektrischer Fehler  |
| 33 | Tank nachfuellen festgestellt |
| 34 | Tankverschluss offen |
| 35 | Batteriespannung Fluktuation zu hoch |
| 36 | Diagnose maximale Zeit erreicht |
| 37 | Fluktuation Referenzsrtom zu hoch |
| 38 | Pumpenstrom abgefallen waehrend der Messung |

### _MSD8ASAM_TABLE_ST_GENTEST

| NR | TEXT |
| --- | --- |
| 0 | Funktion noch nicht gestartet / Initialisierung |
| 1 | Freigabebedingungen erfuellt |
| 2 | -- |
| 3 | --- |
| 4 | ---- |
| 5 | Funktion laeuft |
| 6 | Funktion beendet |
| 7 | Funktion abgebrochen |
| 8 | Freigabebedingungen nicht erfuellt |

### _MSD8ASAM_TABLE_GENIUTEST_ERR_BIT0

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, elektrischer Fehler Generator nicht vorhanden |
| 1 | Generatortest, elektrischer Fehler Generator vorhanden |

### _MSD8ASAM_TABLE_GENIUTEST_ERR_BIT1

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, mechanischer Fehler Generator nicht vorhanden |
| 1 | Generatortest, mechanischer Fehler Generator vorhanden |

### _MSD8ASAM_TABLE_GENIUTEST_ERR_BIT2

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Hochtemperaturfehler Generator nicht vorhanden |
| 1 | Generatortest, Hochtemperaturfehler Generator vorhanden |

### _MSD8ASAM_TABLE_GENIUTEST_ERR_BIT3

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Generatortyp plausibel |
| 1 | Generatortest, Generatortyp unplausibel |

### _MSD8ASAM_TABLE_GENIUTEST_ERR_BIT4

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Generatorkommunikation vorhanden |
| 1 | Generatortest, keine Generatorkommunikation vorhanden |

### _MSD8ASAM_TABLE_GENIUTEST_ERR_BIT5

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Generatorspannung aus Berechnung plausibel |
| 1 | Generatortest, Generatorspannung aus Berechnung unplausibel |

### _MSD8ASAM_TABLE_GENIUTEST_ERR_BIT6

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Hochtemperaturfehler Generator aus Berechnung nicht vorhanden |
| 1 | Generatortest, Hochtemperaturfehler Generator aus Berechnung vorhanden |

### _MSD8ASAM_TABLE_GENIUTEST_ERR_BIT7

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Generatorregler plausibel |
| 1 | Generatortest, Generatorregler unplausibel |

### _MSD8ASAM_TABLE_GENIUTEST_AB_BIT0

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Generatorauslastung nicht zu hoch |
| 1 | Generatortest, Generatorauslastung zu hoch |

### _MSD8ASAM_TABLE_GLF_HIGH_BYTE_BIT7

| NR | TEXT |
| --- | --- |
| 0 | gesteuerte Luftfuehrung, kein Fehler erkannt |
| 1 | gesteuerte Luftfuehrung, Fehler erkannt |

### _MSD8ASAM_TABLE_GLF_HIGH_BYTE_BIT6

| NR | TEXT |
| --- | --- |
| 0 | gesteuerte Luftfuehrung, Kommunikation noch nicht getestet |
| 1 | gesteuerte Luftfuehrung, Kommunikation in Ordnung |

### _MSD8ASAM_TABLE_GLF_HIGH_BYTE_BIT5

| NR | TEXT |
| --- | --- |
| 0 | gesteuerte Luftfuehrung, Testeransteuerung obere Luftklappe nicht aktiv |
| 1 | gesteuerte Luftfuehrung, Testeransteuerung obere Luftklappe aktiv |

### _MSD8ASAM_TABLE_GLF_HIGH_BYTE_BIT4

| NR | TEXT |
| --- | --- |
| 0 | gesteuerte Luftfuehrung, Testeransteuerung untere Luftklappe nicht aktiv |
| 1 | gesteuerte Luftfuehrung, Testeransteuerung untere Luftklappe aktiv |

### _MSD8ASAM_TABLE_GLF_HIGH_BYTE_BIT3

| NR | TEXT |
| --- | --- |
| 0 | gesteuerte Luftfuehrung, Eigendiagnose untere Luftklappe noch nicht beendet |
| 1 | gesteuerte Luftfuehrung, Eigendiagnose untere Luftklappe beendet |

### _MSD8ASAM_TABLE_GLF_HIGH_BYTE_BIT2

| NR | TEXT |
| --- | --- |
| 0 | gesteuerte Luftfuehrung, Eigendiagnose obere Luftklappe noch nicht beendet |
| 1 | gesteuerte Luftfuehrung, Eigendiagnose obere Luftklappe beendet |

### _MSD8ASAM_TABLE_GLF_HIGH_BYTE_BIT1

| NR | TEXT |
| --- | --- |
| 0 | gesteuerte Luftfuehrung, elektrische Diagnose noch nicht beendet |
| 1 | gesteuerte Luftfuehrung, elektrische Diagnose beendet |

### _MSD8ASAM_TABLE_GLF_HIGH_BYTE_BIT0

| NR | TEXT |
| --- | --- |
| 0 | gesteuerte Luftfuehrung, Systemtest noch nicht gestartet bzw. noch nicht beendet |
| 1 | gesteuerte Luftfuehrung, Systemtest beendet |

### _MSD8ASAM_TABLE_GLF_LOW_BYTE_BIT7

| NR | TEXT |
| --- | --- |
| 0 | gesteuerte Luftfuehrung, kein Systemtest aktiv (Normalbetrieb) |
| 1 | gesteuerte Luftfuehrung, Systemtest aktiv |

### _MSD8ASAM_TABLE_GLF_LOW_BYTE_BIT6

| NR | TEXT |
| --- | --- |
| 0 | untere Luftklappe, kein Fehler durch Eigendiagnose erkannt |
| 1 | untere Luftklappe, Fehler durch Eigendiagnose erkannt |

### _MSD8ASAM_TABLE_GLF_LOW_BYTE_BIT5

| NR | TEXT |
| --- | --- |
| 0 | obere Luftklappe, kein Fehler durch Eigendiagnose erkannt |
| 1 | obere Luftklappe, Fehler durch Eigendiagnose erkannt |

### _MSD8ASAM_TABLE_GLF_LOW_BYTE_BIT4

| NR | TEXT |
| --- | --- |
| 0 | gesteuerte Luftfuehrung, kein elektrischer Fehler |
| 1 | gesteuerte Luftfuehrung, elektrischer Fehler |

### _MSD8ASAM_TABLE_GLF_LOW_BYTE_BIT3

| NR | TEXT |
| --- | --- |
| 0 | keine Fehlerabfrage aktiv, Verstellung moeglich (Normalbetrieb) |
| 1 | Fehlerabfrage aktiv, keine Verstellung moeglich |

### _MSD8ASAM_TABLE_GLF_LOW_BYTE_BIT2

| NR | TEXT |
| --- | --- |
| 0 | gesteuerte Luftfuehrung, untere Luftklappe nicht verbaut |
| 1 | gesteuerte Luftfuehrung, untere Luftklappe verbaut |

### _MSD8ASAM_TABLE_GLF_LOW_BYTE_BIT1

| NR | TEXT |
| --- | --- |
| 0 | gesteuerte Luftfuehrung, obere Luftklappe nicht verbaut |
| 1 | gesteuerte Luftfuehrung, obere Luftklappe verbaut |

### _MSD8ASAM_TABLE_GLF_LOW_BYTE_BIT0

| NR | TEXT |
| --- | --- |
| 0 | Varianten lernen noch nicht abgeschlossen |
| 1 | Varianten haetten gelernt werden koennen |

### _MSD8ASAM_CNV_S_14_STATE_VLS__226_CM_4DC3200S

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

### _MSD8ASAM_CNV_S_10_STATE_EOL__449_CM_4DC3200S

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

### _MSD8ASAM_TABLE_ST_TESTPOELSYS

| NR | TEXT |
| --- | --- |
| 0 | Funktion noch nicht gestartet |
| 3 | Funktion wartet auf Freigabe |
| 4 | -- |
| 5 | Funktionstest laeuft |
| 6 | Funktion beendet |
| 7 | Funktion abgebrochen |
| 8 | Funktion vollstaendig durchlaufen und kein Fehler erkannt |
| 9 | Funktion vollstaendig durchlaufen und Fehler erkannt |

### _MSD8ASAM_TABLE_ST_TESTPOELSYS2

| NR | TEXT |
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
| 10 | Testfunktion 3 laeuft (Drehzahl-Rampen, konstanter Sollldruck) |

### _MSD8ASAM_CNV_S_6_STATE_DIAG_157_CM

| NR | TEXT |
| --- | --- |
| 0 | Initialisierung |
| 1 | Schritt 1 |
| 2 | Schritt 2 |
| 3 | Schritt 3 |
| 4 | Rampe |
| 5 | Ende LOCK_STEP |

### _MSD8ASAM_CNV_S_8_RANGE_STAT_18_CM

| NR | TEXT |
| --- | --- |
| 0 | keine Taste gedrueckt |
| 1 | Beschleunigen/Taste+ |
| 2 | Verzoegern/Taste- |
| 3 | Taste Setzen/Wiederaufnahme |
| 4 | Taste I/O |
| 5 | - |
| 6 | -- |
| 7 | Fehler |

### _MSD8ASAM_CNV_S_4_STATE_CH_776_CM_762E940S

| NR | TEXT |
| --- | --- |
| 0 | CH_OFF |
| 1 | CH_AST |
| 2 | CH_LOW_LOAD |
| 3 | CH_SO2P |

### _MSD8ASAM_CNV_S_2_RANGE_STAT_1008_CM_9ZCE401S

| NR | TEXT |
| --- | --- |
| 0 | 0000_NO_CHANGE |
| 1 | 0001_MDRIVE_HUD |

### _MSD8ASAM_CNV_S_4_RANGE_STAT_1009_CM_9ZCE401S

| NR | TEXT |
| --- | --- |
| 0 | 0000_NO_CHANGE |
| 1 | 0001_COMFORT |
| 2 | 0010_NORMAL |
| 10 | 1010_SPORT_ENH |

### _MSD8ASAM_CNV_S_5_RANGE_STAT_1007_CM_9ZCE401S

| NR | TEXT |
| --- | --- |
| 0 | 0000_NO_CHANGE |
| 1 | 0001_ESP_OFF |
| 2 | 0010_ESP_ON |
| 4 | 0100_ESP_ON_SPORT |
| 5 | 0101_ESP_ON_MTRACK |

### _MSD8ASAM_CNV_S_4_RANGE_STAT_1006_CM_9ZCE401S

| NR | TEXT |
| --- | --- |
| 0 | 0000_NO_CHANGE |
| 1 | 0001_MAP1 |
| 2 | 0010_MAP2 |
| 3 | 0011_MAP3 |

### _MSD8ASAM_TABLE_STATUS_CONFIGMDRV_STATE_SPT_PSTE_CAN

| NR | TEXT |
| --- | --- |
| 0 | 00_NO_CHANGE |
| 1 | 01_NORMAL |
| 2 | 10_SPORT |
| 3 | 11_SIGNAL_NOT_VALID |

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

### _EISYAGR_INPA

| NR | AGRPOS_WERT |
| --- | --- |
| 0x00 | 0 |
| 0x01 | 1 |
| 0x02 | 2 |
| 0x03 | 3 |
| 0x04 | 4 |
| 0x05 | 5 |
| 0x06 | 6 |
| 0x07 | 7 |
| 0x08 | 8 |
| 0x09 | 9 |
| 0x0A | 10 |
| 0x0B | 11 |
| 0x0C | 12 |
| 0x0D | 13 |
| 0x0E | 14 |
| 0x0F | 15 |
| 0x10 | 16 |
| 0x11 | 17 |
| 0x12 | 18 |
| 0x13 | 19 |
| 0x14 | 20 |
| 0x15 | 21 |
| 0x16 | 22 |
| 0x17 | 23 |
| 0x18 | 24 |
| 0x19 | 25 |
| 0x1A | 26 |
| 0x1B | 27 |
| 0x1C | 28 |
| 0x1D | 29 |
| 0x1E | 30 |
| 0x1F | 31 |
| 0x20 | 32 |
| 0x21 | 33 |
| 0x22 | 34 |
| 0x23 | 35 |
| 0x24 | 36 |
| 0x25 | 37 |
| 0x26 | 38 |
| 0x27 | 39 |
| 0x28 | 40 |
| 0x29 | 41 |
| 0x2A | 42 |
| 0x2B | 43 |
| 0x2C | 44 |
| 0x2D | 45 |
| 0x2E | 46 |
| 0x2F | 47 |
| 0x30 | 48 |
| 0x31 | 49 |
| 0x32 | 50 |
| 0x33 | 51 |
| 0x34 | 52 |
| 0x35 | 53 |
| 0x36 | 54 |
| 0x37 | 55 |
| 0x38 | 56 |
| 0x39 | 57 |
| 0x3A | 58 |
| 0x3B | 59 |
| 0x3C | 60 |
| 0x3D | 61 |
| 0x3E | 62 |
| 0x3F | 63 |
| 0x40 | 64 |
| 0x41 | 65 |
| 0x42 | 66 |
| 0x43 | 67 |
| 0x44 | 68 |
| 0x45 | 69 |
| 0x46 | 70 |
| 0x47 | 71 |
| 0x48 | 72 |
| 0x49 | 73 |
| 0x4A | 74 |
| 0x4B | 75 |
| 0x4C | 76 |
| 0x4D | 77 |
| 0x4E | 78 |
| 0x4F | 79 |
| 0x50 | 80 |
| 0x51 | 81 |
| 0x52 | 82 |
| 0x53 | 83 |
| 0x54 | 84 |
| 0x54 | 85 |
| 0x54 | 86 |
| 0x54 | 87 |
| 0x54 | 88 |
| 0x54 | 89 |
| 0x54 | 90 |
| 0x54 | 91 |
| 0x54 | 92 |
| 0x54 | 93 |
| 0x54 | 94 |
| 0x54 | 95 |
| 0x54 | 96 |
| 0x54 | 97 |
| 0x54 | 98 |
| 0x54 | 99 |
| 0xFF | 0 |

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

### _EISYAGR_FASTA

| NR | AGRPOS_WERT |
| --- | --- |
| 0x00 | 0 |
| 0x01 | 10 |
| 0x02 | 20 |
| 0x03 | 30 |
| 0x04 | 40 |
| 0x05 | 50 |
| 0x06 | 60 |
| 0x07 | 70 |
| 0x08 | 80 |
| 0x09 | 90 |
| 0xFF | 0 |

### TINDIVIDUALDATALISTE

| ENTRYNR | ISLAST | FROMWHERE | DIAG | CARORKEY | USECASE | TESTER_ALGO | RESERVED | INQY_LEN | INQY_DATA | RESP_LEN | RESP_DATA | WRITE_LEN | WRITE_DATA | W_RESP_LEN | W_RESP_DATA | COMMENT |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0000 | 0x00 | 01 | 12 | 02 | 000F | 01 | 00 | 00 |  | 00 |  | 00 |  | 00 |  | PM.Recovery |
| 0x0001 | 0xFF | 02 | 12 | 02 | 000F | 01 | 00 | 00 |  | 00 |  | 00 |  | 00 |  | AD.Recovery |
