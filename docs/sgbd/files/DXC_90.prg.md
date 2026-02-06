# DXC_90.prg

## General

|  |  |
| --- | --- |
| File | DXC_90.prg |
| Type | PRG |
| Jobs | 108 |
| Tables | 43 |
| Origin | BMW EF-43 Kusch |
| Revision | 3.000 |
| Author | BMW EF-43 Kusch, BMW EF-43 Barbet |
| ECU Comment | Robert Bosch DXC8 PLUS - BMW FAST |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Dynamische Stabilitaets Control DXC8 PLUS E90-16  |  |  |
| ORIGIN | string | BMW EF-43 Kusch |  |  |
| REVISION | string | 3.000 |  |  |
| AUTHOR | string | BMW EF-43 Kusch, BMW EF-43 Barbet |  |  |
| COMMENT | string | Robert Bosch DXC8 PLUS - BMW FAST  |  |  |
| PACKAGE | string | 1.29 |  |  |
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

### C_C_AUFTRAG

Codierdaten schreiben und ruecklesen Standard Codierjob KWP2000: $2E   WriteDataByCommonIdentifier $3000 - $3EFF CodingDataSet KWP2000: $22   ReadDataByCommonIdentifier $3000 - $3EFF CodingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : Codierdaten Byte 21+Anzahl Daten: ETX (0x03) |

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels Es muessen immer alle drei Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden. Diag_Mode ist integriert KWP2000: $2E WriteDataByCommonIdentifier $1000 TestStamp Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE2 | int | Bereich: 0-255 bzw. 0x00-0xFF |
| BYTE3 | int | Bereich: 0-255 bzw. 0x00-0xFF |

### STATUS_RADGESCHWINDIGKEIT

Radgeschwindigkeiten auslesen KWP2000: $21,$01 ReadDataByLocalIdentifier service Modus  : Default

_No arguments._

### STATUS_DIGITAL

Status Eingaenge KWP2000: $21,$03 ReadDataByLocalIdentifier service

_No arguments._

### STATUS_ANALOG

Status Eingaenge DSC_8 KWP2000: $21,$02 ReadDataByLocalIdentifier service

_No arguments._

### STATUS_CAN

Status CAN DXC8_PLUS Fuer die Zuordnung Text-Wertausgabe, siehe Tabelle CAN_FAHRZUSTAND KWP2000: $21 $04

_No arguments._

### STATUS_CBS_SENSOR_BBV

CBS Bremsbelagverschleiss (BBV) Sensor auslesen Verschleiss-Schwellen: 2_stufig Fuer die Zuordnung Text-Wert siehe Tabelle CBS_BBV KWP2000: $21 $11 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STEUERN_STOP

Digitale Stellglieder ansteuern ABS_DSC57 KWP2000: $30,$10 InputOutputByLocalIdentifier service

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E, Wiederholung = W |

### LAENGSBESCHLEUNIGUNG_DSC_ABGLEICHEN

der Parameter"R" ist optional: "R" fordert zusaetzlich ein Ergebnis-Telegramm an Musterparametersatz: R mit diesem Job wird auch die MM3.x Teilenummer in die ECU eingelesen KWP2000 : $30,$0B InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| ERGEBNIS | string | Default: Ergebnis nicht abholen. Wenn Argument <Ergebnis> vorhanden, dann Ergebnis abholen |

### STEUERN_D_STELLGLIED

Digitale Stellglieder ansteuern KWP2000: $30,$04 InputOutputControlByLocalIdentifier Parameter (argument) koennen ausgewaehlt werden Mit dem Parameter"E" werden 2 Telegramme gesendet Diagnose_Mode,  und Ansteuersequenz-Ausfuehren: Mit dem Parameter"W" wird nur die Ansteuersequenz ausgefuehrt Der Parameter"R" ist optional: "R" fordert zusaetzlich ein Ergebnis-Telegramm an Musterparametersatz: "E,EIN,EVVL,AUS,AVVL,1000,EIN,MRA,EIN,USV1" Musterparametersatz: "E,EIN,EVVL,AUS,AVVL,1000,EIN,MRA,EIN,USV,R" jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !)

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E, Wiederholung = W |
| BEFEHL_1 | string | Ein = 64, Aus = 00 |
| ST_1 | string | Stellglied 1 |
| BEFEHL_2 | string | Ein = 64, Aus = 00 |
| ST_2 | string | Stellglied 2 |
| W_ZEIT | int | Wartezeit vor Ansteuerung 3. u. 4. Stellglied |
| BEFEHL_3 | string | Ein = 64, Aus = 00 |
| ST_3 | string | Stellglied 3 |
| BEFEHL_4 | string | Ein = 64, Aus = 00 |
| ST_4 | string | Stellglied 4 |
| ERGEBNIS | string | Default: Ergebnis nicht abholen. Wenn Argument <Ergebnis> vorhanden, dann Ergebnis abholen |

### STEUERN_DX_STELLGLIED

Digitale Stellglieder ansteuern DSC_8 KWP2000 star: $30,$04 InputOutputControlByLocalIdentifier Mit dem Parameter"E" werden 2 Telegramme gesendet Diagnose_Mode,  und Ansteuersequenz-Ausfuehren: Mit dem Parameter"W" wird nur die Ansteuersequenz ausgefuehrt Der Parameter"R" ist optional: "R" fordert zusaetzlich ein Ergebnis-Telegramm an Musterparametersatz_1: "E,EIN,0,0,USV1,USV2,EIN,0,0,0,MRA,800,AUS,0,0,USV2,USV1,EIN,EVVL,EVVR,EVHL,EVHR" Musterparametersatz_2: "W,EIN,VLV1,VLV1,VLV2,VLV2,EIN,MRA,MRA,MRA,MRA,800,AUS,USV1,USV2,USV2,USV1,EIN,AVVL,AVVL,AVVR,AVHR,R" jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) es gibt 5 Stellgliedgruppen "EIN/AUS,MRA" "EIN/AUS,USV1,USV2" "EIN/AUS,VLV1,VLV2" "EIN/AUS,EVVL,EVVR,EVHL,EVHR" "EIN/AUS,AVVL,AVVR,AVHL,AVHR" in jedem Job koennen dann 4 beliebige Stellgliedgruppen angesteuert werden und zwar 2 Stellgliedgruppen vor dem Zeitglied und 2 Stellgliedgruppen nach dem Zeitglied dazwischen steht das Argument fuer die Wartezeit:  W_ZEIT in ms eine Stellgliedgruppe besteht aus 5 Argumenten: einem Befehl "EIN" oder "AUS" und aus genau 4 Stellgliedern werden weniger als 4 Stellglieder angesteuert, bzw. koennen pro Gruppe nur 1 bzw. 2 Stellglieder angesteuert werden, so sind die restlichen linksbuendig mit "0" zu besetzen(siehe Musterparametersatz_1) um Nullen zu vermeiden kann man sie auch mehrfach mit dem gleichen Stellglied besetzen (siehe Musterparametersatz_2) die Stellglieder einer Gruppen duerfen nicht mit Stellgliedern anderer Gruppen gemixt werden

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E, Wiederholung = W |
| BEFEHL_1 | string |  |
| ST_1 | string | Stellglied 1 |
| ST_2 | string | Stellglied 2 |
| ST_3 | string | Stellglied 3 |
| ST_4 | string | Stellglied 4 |
| BEFEHL_2 | string |  |
| ST_5 | string | Stellglied 5 |
| ST_6 | string | Stellglied 6 |
| ST_7 | string | Stellglied 7 |
| ST_8 | string | Stellglied 8 |
| W_ZEIT | int | Wartezeit vor Ansteuerung  Stellglied 5-8 |
| BEFEHL_3 | string |  |
| ST_9 | string | Stellglied 5 |
| ST_10 | string | Stellglied 5 |
| ST_11 | string | Stellglied 6 |
| ST_12 | string | Stellglied 7 |
| BEFEHL_4 | string |  |
| ST_13 | string | Stellglied 8 |
| ST_14 | string | Stellglied 5 |
| ST_15 | string | Stellglied 6 |
| ST_16 | string | Stellglied 7 |
| ERGEBNIS | string | Default: Ergebnis nicht abholen. Wenn Argument <Ergebnis> vorhanden, dann Ergebnis abholen |

### STEUERN_STELLGLIED_DYNAMISCH

Digitale Stellglieder ansteuern DSC_8 KWP2000 star: $30,$04 InputOutputControlByLocalIdentifier Mit dem Parameter"E" werden 2 Telegramme gesendet Diagnose_Mode,  und Ansteuersequenz-Ausfuehren: Mit dem Parameter"W" wird nur die Ansteuersequenz ausgefuehrt Der Parameter"R" ist optional: "R" fordert zusaetzlich ein Ergebnis-Telegramm an Musterparametersatz_1: "E,EIN,0,0,USV1,USV2,EIN,0,0,0,MRA,800,AUS,0,0,USV2,USV1,EIN,EVVL,EVVR,EVHL,EVHR,100" Musterparametersatz_2: "W,EIN,VLV1,VLV1,VLV2,VLV2,EIN,MRA,MRA,MRA,MRA,800,AUS,USV1,USV2,USV2,USV1,EIN,AVVL,AVVL,AVVR,AVHR,200,R" jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) es gibt 5 Stellgliedgruppen "EIN/AUS,MRA" "EIN/AUS,USV1,USV2" "EIN/AUS,VLV1,VLV2" "EIN/AUS,EVVL,EVVR,EVHL,EVHR" "EIN/AUS,AVVL,AVVR,AVHL,AVHR" in jedem Job koennen dann 4 beliebige Stellgliedgruppen angesteuert werden und zwar 2 Stellgliedgruppen vor dem Zeitglied und 2 Stellgliedgruppen nach dem Zeitglied dazwischen steht das Argument fuer die Wartezeit:  W_ZEIT in ms eine Stellgliedgruppe besteht aus 5 Argumenten: einem Befehl "EIN" oder "AUS" und aus genau 4 Stellgliedern werden weniger als 4 Stellglieder angesteuert, bzw. koennen pro Gruppe nur 1 bzw. 2 Stellglieder angesteuert werden, so sind die restlichen linksbuendig mit "0" zu besetzen(siehe Musterparametersatz_1) um Nullen zu vermeiden kann man sie auch mehrfach mit dem gleichen Stellglied besetzen (siehe Musterparametersatz_2) die Stellglieder einer Gruppen duerfen nicht mit Stellgliedern anderer Gruppen gemixt werden

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E, Wiederholung = W |
| BEFEHL_1 | string |  |
| ST_1 | string | Stellglied 1 |
| ST_2 | string | Stellglied 2 |
| ST_3 | string | Stellglied 3 |
| ST_4 | string | Stellglied 4 |
| BEFEHL_2 | string |  |
| ST_5 | string | Stellglied 5 |
| ST_6 | string | Stellglied 6 |
| ST_7 | string | Stellglied 7 |
| ST_8 | string | Stellglied 8 |
| W_ZEIT_1 | int | Wartezeit nach der Ansteuerung der Stellglieder 1-8 |
| BEFEHL_3 | string |  |
| ST_9 | string | Stellglied 9 |
| ST_10 | string | Stellglied 10 |
| ST_11 | string | Stellglied 11 |
| ST_12 | string | Stellglied 12 |
| BEFEHL_4 | string |  |
| ST_13 | string | Stellglied 13 |
| ST_14 | string | Stellglied 14 |
| ST_15 | string | Stellglied 15 |
| ST_16 | string | Stellglied 16 |
| W_ZEIT_2 | int | Wartezeit nach der Ansteuerung der Stellglieder 9-16 |
| ERGEBNIS | string | Default: Ergebnis nicht abholen. Wenn Argument <Ergebnis> vorhanden, dann Ergebnis abholen |

### STEUERN_DREHZAHLFUEHLER_ALLE

Test Drehzahlfuehler Musterparametersatz: 2000 jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) KWP2000 : $30,$03 InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| A_ZEIT | int | Ausfuehrungszeit in ms |

### STEUERN_AKTUATORIK

Statischer Test der Komponenten DSC_8 Musterparametersatz: 600,400 jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) KWP2000 : $30,$06 InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| USV_ZEIT | int | Ausfuehrungszeit in ms: t >= 400ms Verzoegerungszeit bis zur Aktivierung der USVs |
| PUMPE_ZEIT | int | Ausfuehrungszeit in ms: t >= 200ms Verzoegerungszeit zwischen der Aktivierung der USVs und Abschalten des Pumpenmotors |

### STEUERN_KUPPLUNGS_TEST

der Kupplungstest dauert ca. 10 sec im n.i.O. Fall dauert der Kupplungstest ca. 26 sec der Parameter"R" oder "r" ist optional "R" fordert zusaetzlich ein Ergebnis-Telegramm an Fuer die Zuordnung Text-Wertausgabe, siehe Tabelle ERGEBNIS_ROUTINE KWP2000: $30,$09 InputOutputByLocalIdentifier service

| Name | Type | Description |
| --- | --- | --- |
| ERGEBNIS | string | Default: Ergebnis nicht abholen. Wenn Argument <Ergebnis> vorhanden, dann Ergebnis abholen |

### STEUERN_KUPPLUNG

Kupplung aktiv bzw. passiv schalten KWP2000 : $31,$20 Musterparametersatz: "AKTIV" oder "PASSIV" Default ist aktiv Fuer die Zuordnung Text-Wertausgabe, siehe Tabelle TAB_STEUERN_KUPPLUNG

| Name | Type | Description |
| --- | --- | --- |
| ARG_1 | string | "AKTIV" oder "PASSIV" Default ist aktiv |

### RESET_SENSORCLUSTER_MM3_X

loescht den internen Fehlerspeicher des Sensorclusters KWP2000:

_No arguments._

### STEUERN_VAK_BEFUELL

Evakuierung und Befuellung der Parameter"R" ist optional: "R" fordert zusaetzlich ein Ergebnis-Telegramm an Musterparametersatz: E,12,6,R jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) KWP2000 : $30,$01 InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E, Wiederholung = W |
| ZEIT_ROUTINE | int | Zeit =< 150 sec |
| DELAY_PUMPE | int | Verzoegerung Pumpenansteuerung Zeit >= 1sec |
| ERGEBNIS | string | Default: Ergebnis nicht abholen. Wenn Argument <Ergebnis> vorhanden, dann Ergebnis abholen |

### STEUERN_REP_ENTLUEFTUNG

Evakuierung und Befuellung der Parameter"R" ist optional: "R" fordert zusaetzlich ein Ergebnis-Telegramm an diese Reihenfolge beachten Musterparametersatz: E,H_links,3,R Musterparametersatz: E,V_links,3,R Musterparametersatz: E,V_rechts,3,R Musterparametersatz: E,H_rechts,3,R jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) Fuer die Zuordnung Text-Wertausgabe, siehe Tabelle ERGEBNIS_ROUTINE KWP2000 : $30,$02 InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E, Wiederholung = W |
| RAD_NR | string | H_Links,V_Links,V_rechts,H_rechts |
| WIEDERHOLUNG | int | 3,4 oder 5 Wiederholungen nur bei V_rechts und H_rechts aktiv |
| ERGEBNIS | string | Default: Ergebnis nicht abholen. Wenn Argument <Ergebnis> vorhanden, dann Ergebnis abholen |

### STEUERN_ERGEBNIS_ROUTINE

Ergebnis der Routine abholen Musterparametersatz: "REP_ENTLUEFTUNG" Musterparametersatz: "VAK_BEFUELL" Musterparametersatz: "KUPPLUNGS_TEST" Musterparametersatz: "LWS" Musterparametersatz: "AL_ABGLEICH" Fuer die Zuordnung Text-Wertausgabe, siehe Tabelle ERGEBNIS_ROUTINE KWP2000 : $33,$01 02 09 InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| TYP | string | Typ der Routine angeben |

### SPEICHER_LESEN

Auslesen des Steuergeraete-Speichers Als Argumente werden uebergeben: Speichersegment, Start-Adresse und Anzahl der Datenbytes Musterparametersatz: ROMI,0xFF12AB,12 jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) das High-Byte ist bei R.Bosch DSC_60 immer 0xFFxxxx KWP 2000: $23 ReadMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | string | table SpeicherSegment SEG_NAME SEG_TEXT |
| ADRESSE | long | 0x000000 - 0xFFFFFF |
| ANZAHL | int | 1 - n ( 254 ) |

### SPEICHER_SCHREIBEN

Beschreiben des Steuergeraete-Speichers Als Argumente werden uebergeben: Speichersegment, Start-Adresse, Anzahl der Datenbytes und Datenbytes (Datenbytes durch Komma getrennt !) Musterparametersatz: ROMI,0xFF12AB,12,Datenbytes Argumente mit "Strich_Punkt" getrennt (nicht mit Komma !) 0x04,0x05,0x0B,0x0C...Datenbytes(hex) durch Komma getrennt !) 04,05,03,11,12 ... Datenbytes(dec) durch Komma getrennt !) das High-Byte ist bei R.Bosch DSC_60 immer 0xFFxxxx KWP2000: $3D WriteMemoryByAddress Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | string | table SpeicherSegment SEG_NAME SEG_TEXT |
| ADRESSE | long | 0x000000 - 0xFFFFFF |
| ANZAHL | int | 1 - n ( max. 249 ) |
| DATEN | string | zu schreibende Daten (Anzahl siehe oben) z.B. 1,2,03,0x04,0x05... |

### IDENT_VIN

Identdaten KWP2000: $1A $90 ReadECUIdentification Modus  : Default

_No arguments._

### IDENT_BOSCH_HW_NR

Identdaten KWP2000: $1A $92 ReadECUIdentification Modus  : Default

_No arguments._

### IDENT_BOSCH_SW_BB_NR

Identdaten KWP2000: $1A $94 ReadECUIdentification Modus  : Default

_No arguments._

### IDENT_BOSCH_SW_VERSION_NR

Identdaten KWP2000: $1A $95 ReadECUIdentification Modus  : Default

_No arguments._

### IDENT_BOSCH_HW_NR_SCHREIBEN

KWP2000: $3B WriteDataByLocalIdentifier $92 BMW Identifikation schreiben

| Name | Type | Description |
| --- | --- | --- |
| DATAS | string | Es muessen 5 Ident_Daten als ein Hex_String uebergeben werden: z.B. 02,65,56,12,18 Bereich:  0x00-0xFF |

### STATUS_RPA

Radgeschwindigkeiten auslesen KWP2000: $21,$05 ReadDataByLocalIdentifier service Modus  : Default

_No arguments._

### STATUS_RPA_FASTA

RPA Fastadaten auslesen KWP2000: $21,$06 ReadDataByLocalIdentifier service Modus  : Default

_No arguments._

### STATUS_RPA_STANDARDISIERUNG_1

Radgeschwindigkeiten auslesen KWP2000: $21,$07 ReadDataByLocalIdentifier service Modus  : Default

_No arguments._

### STATUS_RPA_STANDARDISIERUNG_2

Radgeschwindigkeiten auslesen KWP2000: $21,$08 ReadDataByLocalIdentifier service Modus  : Default

_No arguments._

### STATUS_RPA_STANDARDISIERUNG_3

Radgeschwindigkeiten auslesen erst ab DXC8 SW19 und DSC8 I5.20 KWP2000: $21,$09 ReadDataByLocalIdentifier service Modus  : Default

_No arguments._

### RPA_SCHREIBEN

KWP2000: $3B WriteDataByLocalIdentifier $05 RPA Standardisierung 00: keine Aktion 01: Standardisierung starten

| Name | Type | Description |
| --- | --- | --- |
| DATA | string | Es muss 1 Byte uebergeben werden z.B. 35 Bereich:  0x00-0xFF |

### RPA_FASTA_LOESCHEN

KWP2000: $3B WriteDataByLocalIdentifier $06 RPA_FASTA_loeschen

_No arguments._

### RPA_DEFAULT

KWP2000: $3B WriteDataByLocalIdentifier $06 RPA_FASTA_loeschen $07 Standardisierungdaten_1 $08 Standardisierungdaten_2 $09 Standardisierungdaten_3 Fasta- und Standardisierungsdaten auf default setzten

_No arguments._

### _RPA_STANDARDISIERUNG_SCHREIBEN

KWP2000: $3B WriteDataByLocalIdentifier $07,$08,$09, RPA Standardisierungsdaten vorgeben Es muessen die Standardisierungsdaten als ein Hex_String uebergeben werden, beginnend mit der Standardisierungsblock-Nr: z.B. 01,AB,56,FF ... 18

| Name | Type | Description |
| --- | --- | --- |
| DATA | string | Musterparametersatz: 01,AB,56,FF ... 18 Bereich:  0x00-0xFF |

### _COD_LESEN

Auslesen der Codierdaten Es muessen 2 Byte (Blocknummer) als Hex_String uebergeben werden Argument: z.B.: 30,04 KWP2000: $22 ReadDataByCommonIdentifier $300x Codierdaten Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| C_BLOCK | string | Codierblock 30,00 ... 30,05 |

### _COD_SCHREIBEN

Codierdaten schreiben Es muessen die Codierbytes als ein Hex_String uebergeben werden, beginnend mit der Codier-Blocknummer Argument: z.B.: 30,02,A1,02,F7,65 ..... das Laengenbyte wird automatisch von der SGBD berechnet KWP2000: $2E WriteDataByCommonIdentifier $300x codingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| C_BYTES | string | Block-Nr und Codierbytes: 30,02,A1,02,F7,65 ..... |

### _COD_SCHREIBEN_ZUSATZFUNKTIONEN

Zusatzfunktionen auscodieren Es koennen max. 8 Argumente uebergeben werden ECD:  Electronic Controlled Deceleration (ACC) CBS:  Condition Based Service FLR:  Fahrleistungsreduzierung VCH:  charkt. Geschwindigkeit (im E60-16 nicht vorhanden) HBA:  Hydraulischer Bremsassistent AY:   Offsetabgleich AY gesperrt LW:   Offsetabgleich Lenkwinkel gesperrt PSI_STAND: Offsetabgleich im Stand fuer Giergeschwindigkeit gesperrt PSI_FAHRT: Offsetabgleich waehrend der Fahrt fuer Giergeschwindigkeit gesperrt PSI_EMPF:  Empfindlichkeitsabgleich fuer Giergeschwindigkeit gesperrt SW:        Steilwandmodus aktiviert HVV:  hydraulische Vollverzögerung SST:  Softstop EVB:  Bremsbereitschaft BSW:  Trockenbremsen HHC:  Anfahrassistenz HPS:  Hydraulic Fading Compensation ASL:  Anhaengerschlingerlogik HDC:  Hill Descent Control Argument: z.B.: EDC,HBA,ASL jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) werden keine Argumente übergeben ist die Defaultcodierung wieder aktiv KWP2000: $2E WriteDataByCommonIdentifier $300x codingDataSet Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| C_OPTION_1 | string | Zusatzfunktion |
| C_OPTION_2 | string | Zusatzfunktion |
| C_OPTION_3 | string | Zusatzfunktion |
| C_OPTION_4 | string | Zusatzfunktion |
| C_OPTION_5 | string | Zusatzfunktion |
| C_OPTION_6 | string | Zusatzfunktion |
| C_OPTION_7 | string | Zusatzfunktion |
| C_OPTION_8 | string | Zusatzfunktion |

### _IDENT_SENSORCLUSTER_MM3_X

Auslesen des DSC Sensor-Clusters KWP2000: $22 ReadDataByCommonIdentifier $1602 DSC Sensor-Cluster  lesen Modus    : Default

_No arguments._

### _TEST_AUTO_CODIERUNG

Autocodierung wird ausgeloest

_No arguments._

### LENKWINKEL_DSC_ABGLEICHEN

KWP2000 star: $30,$08 InputOutputControlByLocalIdentifier service

| Name | Type | Description |
| --- | --- | --- |
| LWS_OFFSET_KORREKTUR_GRAD | real | LWS-Offset in Grad Unbedingt ein PUNKT als Dezimaltrennzeichen benutzen Format: -0.123 Gueltigkeitsbereich: -1°.. 1° Offset=0 (Defaultwert), wenn kein Argument uebergeben wird |

### STAT_ERGEBNIS_ABGLEICH_ROUTINE

Ergebnis der Routine LWS abholen dieser Job wurde identisch zur DSC_87 aufgebaut und gilt nur fuer den LWS Musterparametersatz: "LWS" fuer Abgleich Lenkwinkelsensor oder mit 2. Argument "R": "LWS,R" dann wird eine Schleife max. 20sec durchlaufen, bis endgueltiges Ergebnis der Routine vorliegt jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) Fuer die Zuordnung der Ausgabe Text-Wert siehe Tabelle ABGLEICH_V_ERGEBNIS KWP2000: $33 $08 RequestRoutineResultsByLocalIdentifier

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

### _FS_LESEN_SAR

Fehlerspeicher lesen (alle Fehler / Ort und Art) KWP2000: $18 ReadDiagnosticTroubleCodesByStatus Modus  : Default

_No arguments._

### _FS_LESEN_INPA

KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes KWP2000: $18 ReadDiagnosticTroubleCodesByStatus kombinierter Job §17 und §18 Fehlerspeicher lesen mit allen Umweltdaten Ausgabe der Results wie INPA

_No arguments._

### CBS_EEPROM_LESEN

EEPROM lesen KWP2000: $23 Argument vorbelegt mit "E90_16" Argumente siehe auch Tabellen Info: EEPROM_BELEGUNG

| Name | Type | Description |
| --- | --- | --- |
| ARG | string | Argument vorbelegt mit "E90_16" Argumente siehe auch Tabellen Info: EEPROM_BELEGUNG |

### CBS_ZUSTAND_NEUFAHRZEUG

CBS Daten schreiben KWP2000: $3D Argument vorbelegt mit "E90_16" Argumente siehe auch Tabellen Info: EEPROM_BELEGUNG Ruecksetzen VA und HA auf 100% Verfuegbarkeit CUS-Block01/02: Neuzustand-Bremsbelagdicken (BPTXA) für VA =13,7mm und HA = 11,2 mm Gesamtlaufleistung Bremsbeläge (TotalMilageXA)  für VA und HA = 0 km CUS-Block03: Enable Korrektur wegen Info1XA (EnKorr1XA)  für VA und HA = 1 Enable Korrektur wegen Info2XA (EnKorr1XA)  für VA und HA = 0 Info Verschleißpillen (Info1XA, Info2XA) für VA und HA = 0 Steuerbits plausibel (CtrlBitsEEPROM) = 1 Anforderung Serviceinfo (ServReqXa) für VA und HA=0 Stopbit (StopBPTXA) für VA und HA = 0 Manipulationsbit (ManipulationXA) für VA und HA = 0 Korrekturfaktor (PKorrXA) für VA und HA = 1,0 CUS-Block04: Anfangs-Restlaufleistung (BPTMXA) für VA=40.000km und für HA=50.000km Servicezaehler (ServCntXA)  für VA und HA =1

| Name | Type | Description |
| --- | --- | --- |
| ARG | string | Argument vorbelegt mit "E90_16" Argumente siehe auch Tabellen Info: EEPROM_BELEGUNG |

### CBS_LERNWERTE_RUECKSETZEN

Argument vorbelegt mit "E90_16" Argumente siehe auch Tabellen Info: EEPROM_BELEGUNG es werden folgende Defaultwerte uebergeben Gesamtlaufleistung VA=40000 (km) Gesamtlaufleistung HA=50000 (km) Korrekturfaktor VA=1 Korrekturfaktor HA=1 KWP2000: $3D

| Name | Type | Description |
| --- | --- | --- |
| ARG | string | "E90_16" |

### _CBS_BASISINITIALISIERUNG

CBS Daten schreiben KWP2000: $3D Argument vorbelegt mit "E90_16" Argumente siehe auch Tabellen Info: EEPROM_BELEGUNG Neuzustand DSC-Steuergerät = Auslieferungszustand RB-Werk ASW-Block: CBS: Prognose Wegintervall variabel aus EEPROM CUS-Block01/02: Neuzustand-Bremsbelagdicken (BPTXA) für VA=0 mm und HA = 0,0 mm Gesamtlaufleistung Bremsbeläge (TotalMilageXA)  für VA und HA = 0 km CUS-Block03: Enable Korrektur wegen Info1XA (EnKorr1XA)  für VA und HA = 1 Enable Korrektur wegen Info2XA (EnKorr1XA)  für VA und HA = 0 Info Verschleißpillen (Info1XA, Info2XA) für VA und HA = 0 Steuerbits plausibel (CtrlBitsEEPROM) = 0 Anforderung Serviceinfo (ServReqXa) für VA und HA = 1 Stopbit (StopBPTXA) für VA und HA = 0 Manipulationsbit (ManipulationXA) für VA und HA = 0 Korrekturfaktor (PKorrXA) für VA und HA = 1,0 CUS-Block04: Anfangs-Restlaufleistung (BPTMXA) für VA = 0 km und für  HA = 0 km Servicezaehler (ServCntXA)  für VA und HA = 0

| Name | Type | Description |
| --- | --- | --- |
| ARG | string | Argument vorbelegt mit "E90_16" Argumente siehe auch Tabellen Info: EEPROM_BELEGUNG |

### CBS_KORREKTURFAKTOR

CBS_KORREKTURFAKTOR eingeben es koennen 2 weitere  Argumente uebergeben werden Korrekturfaktor VA, Korrekturfaktor HA wird nur ein Korrekturfaktor uebergeben, dann wird nur die VA geaendert die HA wird auf die Basiswert Korrekturfaktor=1.0 eingestellt Musterparametersatz: "1.2,0.9" jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) zulaessige Werte: 0.2 .... 7.9 werden keine Korrekturfaktor-Argumente uebergeben, dann ist die Basiseinstellung aktiv d.h. Korrekturfaktor=1.0 KWP2000: $3D

| Name | Type | Description |
| --- | --- | --- |
| KORR_FAK_VA | string |  |
| KORR_FAK_HA | string |  |

### _CBS_MANIPULATIONS_BIT

CBS_MANIPULATIONS_BIT eingeben Argument erforderlich: z.B. "E90_16" Argumente siehe auch Tabellen Info: EEPROM_BELEGUNG dann koennen max. 2 weitere Argumente uebergeben werden Manipulationsbit VA, Manipulationsbit HA wird nur ein Manipulationsbit uebergeben, dann wird nur die VA geaendert die HA wird auf die Basiswert Manipulationsbit=0 eingestellt Musterparametersatz: "E90_16,0,1" jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) zulaessige Werte: 0 bzw. 1 werden keine Manipulationsbit-Argumente uebergeben, dann ist die Basiseinstellung aktiv d.h. Manipulationsbit=0 KWP2000: $3D

| Name | Type | Description |
| --- | --- | --- |
| ARG | string | "E90_16" |
| MANIPULATIONS_BIT_VA | int |  |
| MANIPULATIONS_BIT_HA | int |  |

### _CBS_TOTALMILAGE_STARTWERTE

EEPROM lesen/schreiben Argument erforderlich: z.B. "E90_16" Argumente siehe auch Tabellen Info: EEPROM_BELEGUNG dann koennen max. 2 weitere Argumente uebergeben werden Gesamtlaufleistung VA (km), Gesamtlaufleistung HA (km) wird nur ein Korrekturfaktor uebergeben, dann wird nur die VA geaendert die HA wird auf die Basiswert 50000km eingestellt Musterparametersatz: "E90_16,35000,45000" jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) zulaessiger Bereich: 10000 ... 80000km werden keine Korrekturfaktor-Argumente uebergeben, dann ist die Basiseinstellung aktiv VA=40000km, HA=50000km der aktuelle Service-Zaehlerstand wird immer uebernommen zulaessiger Bereich 0 ... 31 KWP2000: $3D

| Name | Type | Description |
| --- | --- | --- |
| ARG | string | "E90_16" |
| ARGVA | long |  |
| ARGHA | long |  |

### _CBS_SERVICEZAEHLER

EEPROM lesen/schreiben Argument erforderlich: z.B. "E90_16" Argumente siehe auch Tabellen Info: EEPROM_BELEGUNG dann koennen max. 2 weitere Argumente uebergeben werden Servicezaehler VA, Servicezaehler HA wird nur ein Servicezaehlerstand (ServCntXA) uebergeben, dann wird nur die VA geaendert die HA wird auf die Basiswert 1 eingestellt Musterparametersatz: "E90_16,1,2" jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) zulaessiger Bereich: 0 ... 31 werden keine Servicezaehler_Argumente uebergeben, dann ist die Basiseinstellung aktiv VA = 1, HA = 1 der aktuelle Gesamtlaufleistung wird immer uebernommen Servicezaehler-wert (ServCntXA) 31 : fuehrt zum automatischen Inkrementieren des Servicezaehlers im DSC- SG um +1 Servicezaehler (ServCntXA)  0 fuehrt zur Anforderung (ServiceRequest) der aktuellen CBS-Werte vom Kombiinstrument KWP2000: $3D

| Name | Type | Description |
| --- | --- | --- |
| ARG | string | "E90_16" |
| ARGVA | long |  |
| ARGHA | long |  |

### _BREMSENTEMPERATUR

EEPROM lesen und schreiben es muessen 5 Argumente in folgender Reihenfolge uebergeben werden 1.Argument: z.B. "E90_16" Argumente siehe auch Tabellen Info: EEPROM_BELEGUNG Bremsentemperatur E90_16,VL,VR,HL,HR Musterparametersatz: "E90_16,500,550,600,720" jedoch mit "Strich_Punkt" getrennt (nicht mit Komma !) zulaessige Werte: 50 .... 850 Grad werden keine Temperaturargumente uebergeben, dann werden die vorhandenen Temperaturwerte beibehalten KWP2000: $23,$3D

| Name | Type | Description |
| --- | --- | --- |
| ARG | string | Argument erforderlich: z.B. "E90_16" Argumente siehe auch Tabellen Info: EEPROM_BELEGUNG |
| ARG_TEMP_BREMSE_VL | long | Bremsentemperatur VL Einheit = Grad C |
| ARG_TEMP_BREMSE_VR | long | Bremsentemperatur VR Einheit = Grad C |
| ARG_TEMP_BREMSE_HL | long | Bremsentemperatur HL Einheit = Grad C |
| ARG_TEMP_BREMSE_HR | long | Bremsentemperatur HR Einheit = Grad C |

### _ECU_SERIENNUMMER_LESEN

Hersteller (R.Bosch) Seriennummer lesen KWP2000: $1A ReadECUIdentification $89 SystemSupplierECUSerialNumber Modus    : Default

_No arguments._

### _DSC_EEPROM_LESEN

DSC EEPROM lesen KWP2000: $23

| Name | Type | Description |
| --- | --- | --- |
| ARG | string | Argument vorbelegt mit "E90_16" Argumente siehe auch Tabellen Info: EEPROM_BELEGUNG |

### _SERIENNUMMER_LESEN_EEPROM

Auslesen des Steuergeraete-Speichers Als Argumente werden uebergeben:

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
| 0x5d8c | 5D8C - Rueckfoerderpumpe: Fehler bei Rueckmeldung aus Spannungsueberwachung: RFP AN aber erwartet: AUS. - Gutpruefung nach behobenem Defekt erforderlich! - Leitungsstoerung? |
| 0x5d8d | 5D8D - Rueckfoerderpumpe: RFP steht. Fehler bei Rueckmeldung aus Spannungsueberwachung: RFP AUS, aber erwartet: AN - Gutpruefung nach behobenem Defekt erforderlich! - Sicherung oder Pumpenmotorrelais defekt? |
| 0x5d8e | 5D8E - Rueckfoerderpumpe: Nachlauf zu kurz - Gutpruefung nach behobenem Defekt erforderlich! |
| 0x5d8f | 5D8F - Infoeintrag: Rueckfoerderpumpe: Freigabe des Pumpenanlaufzyklus. Kein Fehler - Gutpruefung nach behobenem Defekt erforderlich. |
| 0x5d90 | 5D90 - Ventilrelais: VR offen. Fehler verursacht durch zu viele erkannte Einzelventilfehler - Sicherung defekt? |
| 0x5d91 | 5D91 - Ventilrelais: VR offen. Relais schliesst nicht waehrend Startup-Test - Sicherung defekt? |
| 0x5d92 | 5D92 - Ventilrelais: VR-Ansteuerungsinformation via SP-Interface zeigt keinen Effekt. |
| 0x5d93 | 5D93 - Ventilrelais: Mittel- oder hochohmiger Kurzschluss von Spannungsversorgung_VR oder Ventil nach Masse ueber Startup-Test erkannt. |
| 0x5d94 | 5D94 - Ventilrelais: VR steckt in geschlossener Position. Relais schaltet waehrend Startup-Test nicht ab. |
| 0x5d95 | 5D95 - Ventilrelais: VR offen, Spannungsversorgung_VR waehrend Startup-Test zu niedrig (verglichen mit Uz Versorgungsspannung_Klemme_15). - Sicherung defekt? |
| 0x5d96 | 5D96 - Ventilrelais: Kurzschluss zu Uz Versorgungsspannung_Klemme_15 im zyklischen Ventilrelais-Test festgestellt. |
| 0x5d97 | 5D97 - Ventilrelais: Mittel- oder hochohmiger Kurzschluss der Spannungsversorgung_VR oder des Ventils auf Masse waehrend zyklischem Ventilrelais-Test registriert. |
| 0x5d98 | 5D98 - Einlassventil (EV) Vorne Links: Fehler bei zyklischerm Ventil- und Relaistest. |
| 0x5d99 | 5D99 - Einlassventil (EV) Vorne Links: Allgemeiner Fehler. |
| 0x5d9b | 5D9B - Einlassventil (EV) Vorne Links: Ventilspannung defekt (Driftfehler) - Leitungsverbindung oder Endstufe defekt? |
| 0x5dda | 5DDA - Einlassventil (EV) Vorne Links: Masse Kurzschluß erkannt. |
| 0x5ddb | 5DDB - Einlassventil (EV) Vorne Links: Nicht zuordenbarer Fehler. |
| 0x5d9d | 5D9E - Auslassventil (AV) Vorne Links: Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5d9e | 5D9E - Auslassventil (AV) Vorne Links: Allgemeiner Fehler. |
| 0x5de5 | 5DE5 - Auslassventil (AV) Vorne Links: Masse Kurzschluß erkannt. |
| 0x5de6 | 5DE6 - Auslassventil (AV) Vorne Links: Nicht zuordenbarer Fehler. |
| 0x5da1 | 5DA1 - Einlassventil (EV) Vorne Rechts: Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5da2 | 5DA2 - Einlassventil (EV) Vorne Rechts: Allgemeiner Fehler. |
| 0x5e94 | 5E94 - Einlassventil (EV) Vorne Rechts: Ventilspannung defekt (Driftfehler) - Leitungsverbindung oder Endstufe defekt? |
| 0x5e29 | 5E29 - Einlassventil (EV) Vorne Rechts: Masse Kurzschluß erkannt. |
| 0x5e2a | 5E2A - Einlassventil (EV) Vorne Rechts: Nicht zuordenbarer Fehler. |
| 0x5da6 | 5DA6 - Auslassventil (AV) Vorne Rechts: Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5da7 | 5DA7 - Auslassventil (AV) Vorne Rechts: Allgemeiner Fehler. |
| 0x5e2b | 5E2B - Auslassventil (AV) Vorne Rechts: Masse Kurzschluß erkannt. |
| 0x5e78 | 5E78 - Auslassventil (AV) Vorne Rechts: Nicht zuordenbarer Fehler. |
| 0x5daa | 5DAA - Einlassventil (EV) Hinten Links: Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5dab | 5DAB - Einlassventil (EV) Hinten Links: Allgemeiner Fehler. |
| 0x5dad | 5DAD - Einlassventil (EV) Hinten Links: Ventilspannung defekt (Driftfehler) - Leitungsverbindung oder Endstufe defekt? |
| 0x5e47 | 5E47 - Einlassventil (EV) Hinten Links: Masse Kurzschluß erkannt. |
| 0x5e48 | 5E48 - Einlassventil (EV) Hinten Links: Nicht zuordenbarer Fehler. |
| 0x5daf | 5DAF - Auslassventil (AV) Hinten Links: Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5db0 | 5DB0 - Auslassventil (AV) Hinten Links: Allgemeiner Fehler. |
| 0x5e6e | 5E6E - Auslassventil (AV) Hinten Links: Masse Kurzschluß erkannt. |
| 0x5e6f | 5E6F - Auslassventil (AV) Hinten Links: Nicht zuordenbarer Fehler. |
| 0x5db3 | 5DB3 - Einlassventil (EV) Hinten Rechts: Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5db4 | 5DB4 - Einlassventil (EV) Hinten Rechts: Allgemeiner Fehler. |
| 0x5e71 | 5E71 - Einlassventil (EV) Hinten Rechts: Masse Kurzschluß erkannt. |
| 0x5e73 | 5E73 - Einlassventil (EV) Hinten Rechts: Nicht zuordenbarer Fehler. |
| 0x5db8 | 5DB8 - Auslassventil (AV) Hinten Rechts: Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5db9 | 5DB9 - Auslassventil (AV) Hinten Rechts: Allgemeiner Fehler. |
| 0x5e7c | 5E7F - Auslassventil (AV) Hinten Rechts: Masse Kurzschluß erkannt. |
| 0x5e7d | 5E7D - Auslassventil (AV) Hinten Rechts: Nicht zuordenbarer Fehler. |
| 0x5dbc | 5DBC - Ventil (USV1): Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5dbd | 5DBD - Ventil (USV1): Allgemeiner Fehler. |
| 0x5dbf | 5DBF - Ventil (USV1): Ventilspannung defekt (Driftfehler) - Leitungsverbindung oder Endstufe defekt? |
| 0x5e7f | 5E7F - Ventil (USV1): Masse Kurzschluß erkannt. |
| 0x5e80 | 5E80 - Ventil (USV1): Nicht zuordenbarer Fehler. |
| 0x5dc1 | 5DC1 - Ventil (USV2): Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5dc2 | 5DC2 - Ventil (USV2): Allgemeiner Fehler. |
| 0x5f4f | 5F4F - Ventil (USV2): Ventilspannung defekt (Driftfehler) - Leitungsverbindung oder Endstufe defekt? |
| 0x5e81 | 5E81 - Ventil (USV2): Masse Kurzschluß erkannt. |
| 0x5e82 | 5E82 - Ventil (USV2): Nicht zuordenbarer Fehler. |
| 0x5dc6 | 5DC6 - Ventil (HSV1): Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5dc7 | 5DC7 - Ventil (HSV1): Allgemeiner Fehler. |
| 0x5dc8 | 5DC8 - Ventil (HSV1): Masse Kurzschluß erkannt. |
| 0x5dc9 | 5DC9 - Ventil (HSV1): Nicht zuordenbarer Fehler. |
| 0x5dca | 5DCA - Ventil (HSV2): Fehler bei zyklischem Ventil- und Relaistest. |
| 0x5dcb | 5DCB - Ventil (HSV2): Allgemeiner Fehler. |
| 0x5dcc | 5DCC - Ventil (HSV2): Masse Kurzschluß erkannt. |
| 0x5dcd | 5DCD - Ventil (HSV2): Nicht zuordenbarer Fehler. |
| 0x5dce | 5DCE - Uz Versorgungsspannung_Klemme_15-Fehler: leichte Unterspannung (Spannung zu niedrig). |
| 0x5dcf | 5DCF - Uz Versorgungsspannung_Klemme_15-Fehler: schwere Unterspannung (Spannung viel zu niedrig). |
| 0x5dd0 | 5DD0 - Uz Versorgungsspannung_Klemme_15-Fehler: Ueberspannung (Spannung zu hoch). |
| 0x5dd1 | 5DD1 - Uz Versorgungsspannung_Klemme_15-Fehler: Kurzschluss einer Raddrehzahlfuehler-Spannungsleitung auf UBatt. (Stromfluss durch den ASPxx-Pin des Drehzahlfuehler_Inputamplifiers). |
| 0x5dd2 | 5DD2 - Uz Versorgungsspannung_Klemme_15-Fehler: Spannungsspitze auf Uz. |
| 0x5dd3 | 5DD3 - DSC-ECU: ECU-intern: Gemessene Uz Versorgungsspannung_Klemme_15 zu niedrig (Spannungsteiler-Fehler). |
| 0x5dd4 | 5DD4 - DSC-ECU: ECU-intern: Raddrehzahlfuehler-Driverchip: Fehler bei Versorgungsspannung/Masse. Reset-Response-Test fehlerhaft. |
| 0x5dd5 | 5DD5 - DSC-ECU: ECU-intern: Enable-Leitung kann nicht eingeschaltet werden (Startup-Test Enable high). |
| 0x5dd6 | 5DD6 - DSC-ECU: ECU-intern: Enable-Leitung kann nicht ausgeschaltet werden (Startup-Test Enable low). |
| 0x5dd8 | 5DD8 - DSC-ECU: ECU-intern: System Startup-Synchronisations-Timeout aufgetreten. |
| 0x5dd9 | 5DD9 - DSC-ECU: ECU-intern: SP-Interface: Hardwarfehler erkannt. |
| 0x5ddc | 5DDC - DSC-ECU: ECU-intern: Het-SP-Interface sendet Fehler Nachricht nicht korrekt uebertragen. |
| 0x5ddd | 5DDD - DSC-ECU: ECU-intern: Zugang in Uebersetzungstabelle des Het-SP-Interface ist nicht moeglich. |
| 0x5dde | 5DDE - DSC-ECU: ECU-intern: Watchdog-Ueberwachung meldet: Datenfehler aufgetreten. |
| 0x5ddf | 5DDF - DSC-ECU: ECU-intern: Watchdog-Ueberwachung meldet: Status nicht korrekt. |
| 0x5de0 | 5DE0 - DSC-ECU: ECU-intern: Plausibilität des VASP-U_Bit in Bezug zu Uz Versorgungsspannung_Klemme_15. |
| 0x5de1 | 5DE1 - DSC-ECU: ECU-intern: Clockstatus des SP-Interface zeigt fehlende Uhr. |
| 0x5de2 | 5DE2 - DSC-ECU: ECU-intern: DePwm Status: Software-/ Hardwarekonfigurationen passen nicht zusammen (DF11i/s). |
| 0x5de3 | 5DE3 - DSC-ECU: ECU-intern: Status_Raddrehzahlfuehlerausgang des SP-Interface passt nicht zur Konfiguration. |
| 0x5de4 | 5DE4 - DSC-ECU: ECU-intern: Boot Block ROM Checksummentest-Fehler. |
| 0x5dee | 5DEE - DSC-ECU: ECU-intern: Fehlererkennungssystem-Fehler in Status/Transfer: SP-Interface-Fehler im Algorithm Server. |
| 0x5def | 5DEF - DSC-ECU: ECU-intern: ROM Checksummentest-Fehler. |
| 0x5df0 | 5DF0 - DSC-ECU: ECU-intern: RAM Adressierungstest-Fehler. |
| 0x5df1 | 5DF1 - DSC-ECU: ECU-intern: RAM Checkpatterntest-Fehler. |
| 0x5df2 | 5DF2 - DSC-ECU: ECU-intern: HET RAM Adressierungstest-Fehler. |
| 0x5df3 | 5DF3 - DSC-ECU: ECU-intern: HET RAM Checkpatterntest-Fehler. |
| 0x5df4 | 5DF4 - DSC-ECU: ECU-intern: ADC Kalibrierungs-Fehler. |
| 0x5df5 | 5DF5 - DSC-ECU: ECU-intern: Can RAM Checkpatterntest-Fehler. |
| 0x5df6 | 5DF6 - DSC-ECU: ECU-intern: Betriebssystem Rechenzykluszeit zu hoch - falsches Rechenzyklus (Task)-Timing. |
| 0x5df7 | 5DF7 - DSC-ECU: ECU-intern: Betriebssystem: Geringe Background-Rechenzyklus(Task)-Aktivitaet - System ueberlastet! |
| 0x5df8 | 5DF8 - DSC-ECU: ECU-intern: Betriebssystem Ausnahmefehler. |
| 0x5df9 | 5DF9 - DSC-ECU: ECU-intern: Betriebssystem: Rechenzyklus (Task) fehlt bzw. nicht aktiviert. |
| 0x5dfa | 5DFA - DSC-ECU: ECU-intern: Undefinierter Fast-Interrupt-Request (FIQ) aufgetreten. |
| 0x5dfb | 5DFB - DSC-ECU: ECU-intern: Datenabbruch -> Mikrocontroller-mode: Daboard. |
| 0x5dfc | 5DFC - DSC-ECU: ECU-intern: Programm Abbruch -> Mikrocontroller-mode: Paboard. |
| 0x5dfd | 5DFD - DSC-ECU: ECU-intern: Illegalen Opcode gefunden -> Mikrocontroller-mode: undefiniert. |
| 0x5dfe | 5DFE - DSC-ECU: ECU-intern: ROM Checksummentest-Fehler. |
| 0x5dff | 5DFF - DSC-ECU: ECU-intern: RAM Adressierungstest-Fehler. |
| 0x5e00 | 5E00 - DSC-ECU: ECU-intern: RAM Checkpatterntest-Fehler. |
| 0x5e01 | 5E01 - DSC-ECU: ECU-intern: HET RAM Adressierungstest-Fehler. |
| 0x5e02 | 5E02 - DSC-ECU: ECU-intern: HET RAM Checkpatterntest-Fehler. |
| 0x5e03 | 5E03 - DSC-ECU: ECU-intern: Allgemeiner Fehler des Ventiltreiber-Status oder -antriebes durch zyklischen Ventilrelaistest registriert. |
| 0x5e04 | 5E04 - DSC-ECU: ECU-intern: Fehler der permanenten Enable-Leitungsueberwachung (Enable ist low nach Startup-Test). |
| 0x5e05 | 5E05 - DSC-ECU: ECU-intern: Nicht moeglich SP-Interface-Transfer zu planen. |
| 0x5e06 | 5E06 - DSC-ECU: ECU-intern: Planmaessige Datenuebertragung nicht verfuegbar. |
| 0x5e07 | 5E07 - DSC-ECU: ECU-intern: Datenuebertragungsfehler (Antwort des SP-Interface Haendler). |
| 0x5e08 | 5E08 - DSC-ECU: ECU-intern: Planmaessiger Build-in-self-test (BIST) nicht korrekt (BIST Kontinuität). |
| 0x5e09 | 5E09 - DSC-ECU: ECU-intern: Build-in-self-test (BIST)-Signaturen verschieden, CPU Fehler im Algorithm- oder System-Server. |
| 0x5e0a | 5E0A - DSC-ECU: ECU-intern: Allgemeiner Steuergeraete-Fehler. |
| 0x5e0b | 5E0B - DSC-ECU: ECU-intern: FPS Fehler und Status Transfer: First-in-first-out-Overflow im System-Server aufgetreten. |
| 0x5e0c | 5E0C - DSC-ECU: ECU-intern: Build-in-self-test(BIST)-Signaturen verschieden. CPU Fehler im Algorithm- oder System-Server. |
| 0x5e0d | 5E0D - DSC-ECU: ECU-intern: Timeout des Build-in-self-test(BIST). Antwort durch Algorithm-Server. |
| 0x5e0e | 5E0E - DSC-ECU: ECU-intern: Betriebssystem Rechenzykluszeit zu hoch - falsches Rechenzyklus(Task)-Timing. |
| 0x5e0f | 5E0F - DSC-ECU: ECU-intern: Betriebssystem Rechenzyklus (Task) fehlt bzw. nicht aktiviert. |
| 0x5e10 | 5E10 - DSC-ECU: ECU-intern: Betriebssystem geringe Background Rechenzyklus(Task)-Aktivität - System ueberlastet! |
| 0x5e11 | 5E11 - DSC-ECU: ECU-intern: Undefiniertes Fast-Interrupt-Request (FIQ) aufgetreten. |
| 0x5e12 | 5E12 - DSC-ECU: ECU-intern: Illegaler Opcode gefunden -> Mikrocontroller-mode: undefiniert. |
| 0x5e13 | 5E13 - DSC-ECU: ECU-intern: Programm Abbruch -> Mikrocontroller-mode: Paboard. |
| 0x5e14 | 5E14 - DSC-ECU: ECU-intern: Daten Abbruch -> Mikrocontroller-mode: Daboard. |
| 0x5e15 | 5E15 - DSC-ECU: ECU-intern: FPS Status Transfer: SP-Interface timeout im System-Server. |
| 0x5e16 | 5E16 - DSC-ECU: ECU-intern: FPS Fehlertransfer: SP-Interface timeout im System-Server. |
| 0x5e17 | 5E17 - DSC-ECU: ECU-intern: FPS Status Transfer: SP-Interface Fehler im System-Server. |
| 0x5e18 | 5E18 - DSC-ECU: ECU-intern: Datenmenge fuer Peripherie SP-Interface ueberschreitet Bufferlaenge. |
| 0x5e19 | 5E19 - DSC-ECU: ECU-intern: Serial-Peripheral-Interface (SPI): ID Anfrage nicht akzeptiert. |
| 0x5e1a | 5E1A - DSC-ECU: ECU-intern: Serial-Peripheral-Interface (SPI): Uebersetzungsfehler multi IC. |
| 0x5e1b | 5E1B - DSC-ECU: ECU-intern: Serial-Peripheral-Interface (SPI): Uebersetzungsfehler im EEPROM. |
| 0x5e1c | 5E1C - DSC-ECU: ECU-intern: Bandluecken Spannung ausserhalb gueltigem Bereich. |
| 0x5e1d | 5E1D - DSC-ECU: ECU-intern: ADC Umwandlung Start-Fehler. |
| 0x5e1e | 5E1E - DSC-ECU: ECU-intern: Flash Reprogrammierungszyklus ist fehlgeschlagen (Zellen nicht reprogrammiert). |
| 0x5e1f | 5E1F - Infoeintrag: DSC-ECU: Flash Reprogrammierungszyklus erfolgreich ausgefuehrt (Info). |
| 0x5e20 | 5E20 - DSC-ECU: Allgemeiner Steuergeraete-Fehler. |
| 0x5e21 | 5E21 - DSC-ECU: ECU-intern: Betriebssystem Ausnahmefehler. |
| 0x5f03 | 5F03 - DSC-ECU: ECU-intern: Fehler beim Auslesen der EEPROM-Werte: EEPROM-Zelle defekt. |
| 0x5f04 | 5F04 - DSC-ECU: ECU-intern: Auslesen der EEPROM-Werte dauert zu lange. |
| 0x5f05 | 5F05 - DSC-ECU: ECU-intern: Testpin Leitungs-Unterbrechung ueber ValveDriftCheck fuer U467 erkannt. |
| 0x5f06 | 5F06 - DSC-ECU: ECU-intern: Fehlerhafter Zugriff auf Ventilansteuerungs-Ausgang. |
| 0x5f16 | 5F16 - DSC-ECU: ECU-intern: Radgeschwindigkeit von Hauptprozessor und Coprozessor stimmen nicht ueberein. |
| 0x5f17 | 5F17 - DSC-ECU: ECU-intern: High-end-timer (HET) - Fehler aufgetreten. |
| 0x5e22 | 5E22 - Raddrehzahlfuehler Vorne Links: Leitungsstoerung oder Kurzschluss. |
| 0x5e23 | 5E23 - Raddrehzahlfuehler Vorne Links: Langzeitig (mehere Sek.) vorhandener Fehlerverdacht fuehrte zu Fehler-Modus. |
| 0x5e24 | 5E24 - Raddrehzahlfuehler Vorne Links: Signalflanke fehlt (RDF-Typ 11i). |
| 0x5e25 | 5E25 - Raddrehzahlfuehler Vorne Links: falsche Signalweite (>2ms) - Korrekter RDF-Typ verbaut? |
| 0x5e26 | 5E26 - Raddrehzahlfuehler Vorne Links: Luftspalt zu groß. |
| 0x5e27 | 5E27 - Raddrehzahlfuehler Vorne Links: Dynamischen Signalverlust registriert - Gutpuefung nach behobenem Defekt erforderlich! |
| 0x5e28 | 5E28 - Raddrehzahlfuehler Vorne Links: Fehler Signaleinsteuungs-Ueberwachung (Noise Monitor) - Gutpuefung nach behobenem Defekt erforderlich! |
| 0x5e2d | 5E2D - Raddrehzahlfuehler Vorne Links: Fehlender Zahn Rad VL - Gutpuefung nach behobenem Defekt erforderlich! |
| 0x5e2e | 5E2E - Raddrehzahlfuehler Vorne Links: Radschlupfueberwachung Rad VL - Gutpuefung nach behobenem Defekt erforderlich! |
| 0x5e2f | 5E2F - Raddrehzahlfuehler Vorne Links: Fehler Anfahrerkennung Rad VL (RDF-Signalwert ungueltig) - Gutpuefung nach behobenem Defekt erforderlich! |
| 0x5efe | 5EFE - Raddrehzahlfuehler Vorne Links: Rad VL max. Zeitspanne von unplausiblem Sensorwert (InplRad) ueberschritten. |
| 0x5e30 | 5E30 - Raddrehzahlfuehler Hinten Links: Leitungsstoerung oder Kurzschluss. |
| 0x5e31 | 5E31 - Raddrehzahlfuehler Hinten Links: Langzeitig (mehere Sek.) vorhandener Fehlerverdacht fuehrte zu Fehler-Modus. |
| 0x5e32 | 5E32 - Raddrehzahlfuehler Hinten Links: Signalflanke fehlt (RDF-Typ 11i). |
| 0x5e33 | 5E33 - Raddrehzahlfuehler Hinten Links: falsche Signalweite (>2ms) - Korrekter RDF-Typ verbaut? |
| 0x5e34 | 5E34 - Raddrehzahlfuehler Hinten Links: Luftspalt zu groß. |
| 0x5e35 | 5E35 - Raddrehzahlfuehler Hinten Links: Dynamischen Signalverlust registriert - Gutpuefung nach behobenem Defekt erforderlich! |
| 0x5e36 | 5E36 - Raddrehzahlfuehler Hinten Links: Fehler Signaleinsteuungs-Ueberwachung (Noise Monitor) - Gutpuefung nach behobenem Defekt erforderlich! |
| 0x5e3b | 5E3B - Raddrehzahlfuehler Hinten Links: Fehlender Zahn Rad HL - Gutpuefung nach behobenem Defekt erforderlich! |
| 0x5e3c | 5E3C - Raddrehzahlfuehler Hinten Links: Radschlupfueberwachung Rad HL - Gutpuefung nach behobenem Defekt erforderlich! |
| 0x5e3d | 5E3D - Raddrehzahlfuehler Hinten Links: Fehler Anfahrerkennung Rad HL (RDF-Signalwert ungueltig) - Gutpuefung nach behobenem Defekt erforderlich! |
| 0x5eff | 5EFF - Raddrehzahlfuehler Hinten Links: Rad HL max. Zeitspanne von unplausiblem Sensorwert (InplRad) ueberschritten. |
| 0x5e3e | 5E3E - Raddrehzahlfuehler Hinten Rechts: Leitungsstoerung oder Kurzschluss. |
| 0x5e3f | 5E3F - Raddrehzahlfuehler Hinten Rechts: Langzeitig (mehere Sek.) vorhandener Fehlerverdacht fuehrte zu Fehler-Modus. |
| 0x5e40 | 5E40 - Raddrehzahlfuehler Hinten Rechts: Signalflanke fehlt (RDF-Typ 11i). |
| 0x5e41 | 5E41 - Raddrehzahlfuehler Hinten Rechts: falsche Signalweite (>2ms) - Korrekter RDF-Typ verbaut? |
| 0x5e42 | 5E42 - Raddrehzahlfuehler Hinten Rechts: Luftspalt zu groß. |
| 0x5e43 | 5E43 - Raddrehzahlfuehler Hinten Rechts: Dynamischen Signalverlust registriert - Gutpuefung nach behobenem Defekt erforderlich! |
| 0x5e44 | 5E44 - Raddrehzahlfuehler Hinten Rechts: Fehler Signaleinsteuungs-Ueberwachung (Noise Monitor) - Gutpuefung nach behobenem Defekt erforderlich! |
| 0x5e49 | 5E49 - Raddrehzahlfuehler Hinten Rechts: Fehlender Zahn Rad HR - Gutpuefung nach behobenem Defekt erforderlich! |
| 0x5e4a | 5E4A - Raddrehzahlfuehler Hinten Rechts: Radschlupfueberwachung HR - Gutpuefung nach behobenem Defekt erforderlich! |
| 0x5e4b | 5E4B - Raddrehzahlfuehler Hinten Rechts: Fehler Anfahrerkennung Rad HR (RDF-Signalwert ungueltig) - Gutpuefung nach behobenem Defekt erforderlich! |
| 0x5f00 | 5F00 - Raddrehzahlfuehler Hinten Rechts: Rad HR max. Zeitspanne von unplausiblem Sensorwert (InplRad) ueberschritten. |
| 0x5e4c | 5E4C - Raddrehzahlfuehler Vorne Rechts: Leitungsstoerung oder Kurzschluss. |
| 0x5e4d | 5E4D - Raddrehzahlfuehler Vorne Rechts: Langzeitig (mehere Sek.) vorhandener Fehlerverdacht fuehrte zu Fehler-Modus. |
| 0x5e4e | 5E4E - Raddrehzahlfuehler Vorne Rechts: Signalflanke fehlt (RDF-Typ 11i). |
| 0x5e4f | 5E4F - Raddrehzahlfuehler Vorne Rechts: Falsche Signalweite (>2ms) Korrekter RDF-Typ verbaut? |
| 0x5e50 | 5E50 - Raddrehzahlfuehler Vorne Rechts: Luftspalt zu groß. |
| 0x5e51 | 5E51 - Raddrehzahlfuehler Vorne Rechts: Dynamischen Signalverlust registriert - Gutpuefung nach behobenem Defekt erforderlich. |
| 0x5e52 | 5E52 - Raddrehzahlfuehler Vorne Rechts: Fehler Signaleinsteuungs-Ueberwachung (Noise Monitor) - Gutpuefung nach behobenem Defekt erforderlich. |
| 0x5e57 | 5E57 - Raddrehzahlfuehler Vorne Rechts: Fehlender Zahn Rad VR - Gutpuefung nach behobenem Defekt erforderlich. |
| 0x5e58 | 5E58 - Raddrehzahlfuehler Vorne Rechts: Radschlupfueberwachung Rad VR - Gutpuefung nach behobenem Defekt erforderlich. |
| 0x5e59 | 5E59 - Raddrehzahlfuehler Vorne Rechts: Fehler Anfahrerkennung Rad VR (RDF-Signalwert ungueltig) - Gutpuefung nach behobenem Defekt erforderlich. |
| 0x5f01 | 5F01 - Raddrehzahlfuehler Vorne Rechts:  Rad VR max. Zeitspanne von unplausiblem Sensorwert (InplRad) ueberschritten. |
| 0x5e5a | 5E5A - Raddrehzahlfuehler allgemein: Langzeitig (mehrere Sek.) vorhandener Fehlerverdacht von 2 RDF führte zu Fehler-Modus. |
| 0x5e5b | 5E5B - Raddrehzahlfuehler allgemein: Langzeitig (mehrere Sec.) vorhandener Fehlerverdacht von 3-4 RDF führte zu Fehler-Modus. |
| 0x5e5c | 5E5C - Raddrehzahlfuehler allgemein: Plausibilitaet Drehrichtung. |
| 0x5e5d | 5E5D - Raddrehzahlfuehler allgemein: Unplausibilitaet bei ABS-Regelung. |
| 0x5e5e | 5E5E - Raddrehzahlfuehler allgemein: Allg. Fehler bei Schlupfueberwachung (Lambda). |
| 0x5e5f | 5E5F - Raddrehzahlfuehler allgemein: kurzzeitig (wenige Sec.) vorhandener Fehlerverdacht von 2-3 RDF. Temporaer (heilbarer) Fehler. |
| 0x5e66 | 5E66 - Raddrehzahlfuehler allgemein: Vertauschte Raddrehzahlfuehler an Vorderachse. |
| 0x5e67 | 5E67 - Raddrehzahlfuehler allgemein: Vertauschte Raddrehzahlfuehler an Hinterachse. |
| 0x5e68 | 5E68 - Raddrehzahlfuehler allgemein: Vertauschte Raddrehzahlfuehler an Vorderachse - Gutpruefung nach behobenem Defekt erforderlich! |
| 0x5e69 | 5E69 - Raddrehzahlfuehler allgemein: Vertauschte Raddrehzahlfuehler an Hinterachse - Gutpruefung nach behobenem Defekt erforderlich! |
| 0x5f02 | 5F02 - Raddrehzahlfuehler allgemein: max. Anzahl von unplausiblen Sensorwerten (InplRad) ueberschritten. |
| 0x5e60 | 5E60 - Bremslichschalter: Plausibilitaet des BLS-Signals gegen gemeldetes BS-Signal von DME - Leitungs-Kurzschluss? |
| 0x5e62 | 5E62 - Bremslichschalter: Ueberwachung BLS permanent high. (ECU sieht permanent getretenes Bremspedal) - Leitungsunterbrechung oder Kurzschluss? |
| 0x5e63 | 5E63 - Bremslichschalter: Ueberwachung BLS permanent high. (ECU sieht permanent getretenes Bremspedal) - Gutpruefung nach behobenem Defekt erforderlich! - Leitungsunterbrechung oder Kurzschluss? |
| 0x5eee | 5EEE - Bremslichschalter: Plausibilitaet 1: Plausibilisierung Drucksensor gegen BLS (niedriger Bremsdruckbereich). |
| 0x5eef | 5EEF - Bremslichschalter: Plausibilitaet 2: Plausibilisierung Drucksensor gegen BLS (mittlerer Bremsdruckbereich). |
| 0x5ef0 | 5EF0 - Bremslichschalter: Plausibilitaet 3: Plausibilisierung Drucksensor gegen BLS (hoher Bremsdruckbereich). |
| 0x5f37 | 5F37 - Bremslichschalter: DME meldet ungueltiges Status des Signals BREMSSCHALTER. |
| 0xD347 | D347 - PT-CAN: BusOff oder Initialisierungs-Fehler. CAN Leitung unterbrochen? |
| 0xD34B | D34B - F-CAN: BusOff oder Initialisierungs-Fehler. - CAN Leitung unterbrochen? |
| 0xD34c | D34C - PT-CAN: Allg. CAN Fehler. CAN1 passiv CAN Leitung unterbrochen? |
| 0xD34d | D34D - F-CAN: Allg. CAN Fehler. CAN2 passiv CAN Leitung unterbrochen? |
| 0xD354 | D354 - PT-CAN: Botschaft TORQUE_1 (ID 0xA8) nicht empfangen oder falsche Botschaftslaenge (DLC). [Sender: DME] |
| 0xD355 | D355 - PT-CAN: Botschaft TORQUE_2 (ID 0x0A9) nicht empfangen oder falsche Botschaftslaenge (DLC). [Sender: DME] |
| 0xD356 | D356 - PT-CAN: Botschaft TORQUE_3 (ID 0xAA) nicht empfangen oder falsche Botschaftslaenge (DLC). [Sender: DME] |
| 0xD357 | D357 - PT-CAN: Botschaft VERZOEGERUNG_ANF-ACC (ID 0x0AD) nicht empfangen (von DSC-SG empfangen). [Sender: ACC] |
| 0x5e6a | 5E6A - PT-CAN: Botschaft DREHMOMENT_ANF_DSC (ID 0x0B6) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0xD358 | D358 - PT-CAN: Botschaft GETRIEBEDATEN (ID 0xBA) nicht empfangen (von DSC-SG empfangen). [Sender: EGS] |
| 0x5e6b | 5E6B - PT-Can: Botschaft LENKRADWINKEL (ID 0x0C4) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0xD359 | D359 - F-CAN: Botschaft LENKRADWINKEL_OBEN (ID 0x0C9) nicht empfangen (von DSC-SG empfangen). [Sender: SZL] |
| 0x5e72 | 5E72 - PT-Can: Botschaft GESCHWINDIGKEIT_RAD (ID 0x0CE) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0xD35A | D35A - PT-CAN: Botschaft KLEMMENSTATUS (ID 0x130) nicht empfangen. [Sender:CAS] |
| 0x5e74 | 5E74 - PT-Can: Botschaft STAT_DSC (ID 0x19E, Status DSC) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0x5e75 | 5E75 - PT-Can: Botschaft GESCHWINDIGKEIT (ID 0x1A0) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0x5e76 | 5E76 - PT-Can: Botschaft WEGSTRECKE (ID 0x1A6) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0xD35F | D35F - PT-CAN: Botschaft STAT_ARS (ID 0x1AC) nicht empfangen. [Sender: ARS] |
| 0xD35C | D35C - PT-CAN: Botschaft STAT_KOMBI (ID 0x1B4) nicht empfangen. [Sender: Kombi] |
| 0xD35D | D35D - PT-CAN: Botschaft STAT_AFS (ID 0x1FC) nicht empfangen. [Sender: AFS] |
| 0x5e7a | 5E7A - PT-Can: Botschaft BREMSDRUCK_RAD (ID 0x2B2) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0xD35E | D35E - PT-CAN: Botschaft A_TEMP_RELATIVZEIT (ID 0x310) nicht empfangen. [Sender: Kombi] |
| 0x5e77 | 5E77 - PT-Can: Botschaft STAT_RPA (ID 0x31D Reifenpannenanzeige) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0xD360 | D360 - PT-CAN: Botschaft KILOMETERSTAND (ID 0x330) nicht empfangen. [Sender:Kombi] |
| 0x5e7e | 5E7E - PT-Can: Botschaft RAD_TOLERANZ (ID 0x374Radtoleranzabgleich) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0xD361 | D361 - PT-CAN: Botschaft FAHRGESTELLNUMMER (ID 0x380) nicht empfangen. [Sender:CAS] |
| 0xD362 | D362 - CAN-Fehler: Botschaft FAHRZEUGTYP (ID 0x388) nicht empfangen. [Sender:CAS] |
| 0xD363 | D363 - PT-CAN: Botschaft BEDIENUNG_FAHRWERK (ID 0x398) nicht empfangen (von DSC-SG empfangen). [Sender: CCC,MASK] |
| 0xD364 | D364 - PT-CAN: Botschaft NETZWERKMANAGEMENT (ID 0x480) nicht empfangen oder falsche Botschaftslaenge (DLC). |
| 0x5e83 | 5E83 - PT-Can: Botschaft Netzwerkmanagement_DSC (ID 0x5A9) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0x5e84 | 5E84 - PT-Can: Botschaft BOS_MELDUNG_DSC (ID 0x5A9, Bremsbelagverschleiss) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0xD365 | D365 - PT-CAN: Botschaft BOS_RUECKSTELLUNG (ID 0x5E0) nicht empfangen. [Sender:Kombi] |
| 0x5e85 | 5E85 - CAN-Fehler: Botschaft YAW_REQUEST (ID 0xC5) nicht abgeschickt! |
| 0xD366 | D366 - CAN-Fehler: Botschaft YAW_ANSWER (ID 0xC7) nicht empfangen (von DSC-SG empfangen). |
| 0xD367 | D367 - F-CAN: Botschaft EXCH_AFS_DSC (ID 0x118) nicht empfangen (von DSC-SG empfangen). [Sender:AFS] |
| 0xD368 | D368 - PT-CAN: Botschaft RWDT_STEA_WHL (ID 0x0C3) nicht empfangen oder falsche Botschaftslaenge (DLC). [Sender: SZL] |
| 0x5e89 | 5E89 - CAN-Fehler: Botschaft YAW_REQUEST_2 (ID 0xCA) nicht abgeschickt! |
| 0xD369 | D369 - CAN-Fehler: Botschaft YAW_ANSWER_2 (ID 0x0CB) fehlt! |
| 0x5e8a | 5E8A - F-CAN: Botschaft REGELEINGRIFF_DSC_AFS (ID 0x11E) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0x5e8b | 5E8B - F-CAN: Botschaft GESCHWINDIGKEIT_RAD (ID 0x0CE) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0x5e8c | 5E8C - PT-CAN: Botschaft STATUS_ANHAENGER (ID 0x2E4) nicht empfangen (von DSC-SG empfangen). [Sender:AHM] |
| 0x5e6c | 5E6C - PT-CAN: Botschaft SOLL_MOM_ANF (0xBB) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0xD36B | D36B - PT-CAN: Botschaft ST_WEAR_DISK (0x376) nicht empfangen oder falsch Botschaftslaenge. (DLC). [Sender:VGSG] |
| 0x5e6d | 5E6D - F-CAN: Botschaft SYNC (ID 0x080) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0xD36C | D36C - CAN: Timeout der Botschaft BEDIENUNG_AUDIO_TEL (ID ox1D). |
| 0xD36D | D36D - CAN: Botschaft BEDIENUNG_TEMPOMAT (ID 0x194) nicht empfangen oder falsche Botschaftslaenge (DLC). [Sender:SZL] |
| 0xD36E | D36E - CAN: Botschaft BEDIENUNG_WISCHER (ID 0x2A6) nicht empfangen oder falsche Botschaftslaenge (DLC). [Sender:SZL] |
| 0xD373 | D373 - F-CAN: Botschaft LENKRADWINKEL_OBEN_Gateway TimeOut (ID 0x0C9h) nicht empfangen oder falsche Botschaftslaenge (DLC) [Sender: SZL] |
| 0x5e79 | 5E7E - PT-CAN: Botschaft RAD_TOLERANZ (ID 0x374, Radtoleranzabgleich) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0xD37D | D37D - PT-CAN: Botschaft WISCHERGESCHWINDIGKEIT (0x226) nicht empfangen oder falsche Botschaftslaenge (DLC) [Sender: Regensensor] |
| 0xD37E | D37E - PT-CAN: Botschaft BEDIENUNG_SONDERFUNKTION (0x228) nicht empfangen oder falsche Botschaftslaenge (DLC). [Sender: CCC,MASK] |
| 0xD37F | D37F - CAN-Fehler: Botschaft BEDIENUNG_TASTER_DSC (ID 0x316) nicht empfangen oder falsche Botschaftslaenge (DLC). |
| 0xD380 | D380 - PT-CAN: Botschaft BEDIENUNG_TASTER_HDC (ID 0x31A) nicht empfangen oder falsche Botschaftslaenge (DLC). [Sender: CCC,MASK] |
| 0xD381 | D381 - CAN-Fehler: Botschaft BEDIENUNG_TASTER_RDC (ID 0x319) nicht empfangen oder falsche Botschaftslaenge (DLC). |
| 0xD382 | D382 - PT-CAN: Botschaft ANF_RADMOM_BREMSE (ID 0xD5) nicht empfangen oder falsche Botschaftslaenge (DLC) [Sender: LDM] |
| 0x5e7b | 5E7B - PT-Can: Botschaft RADMOM_BREMSE (0xE1) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0x5ec2 | 5EC2 - Infoeintrag: CAN: Allrad-Software ist geladen. |
| 0x6f51 | 6F51 - PT-Can: Botschaft HOEHENSTAND_LUFTFEDER (ID 0x212)nicht empfangen oder falsche Botschaftslaenge |
| 0x6dcf | 6dcf - CAN-Botschaft/ Luftfeder: Signal HGLV_RH_AISP in CAN-Botschaft HOEHENSTAND_LUFTFEDER ungueltig. |
| 0x6dd0 | 6dd0 - CAN-Botschaft/ Luftfeder: Signal ALIV_AISP in CAN-Botschaft HOEHENSTAND_LUFTFEDER ungueltig. |
| 0x5e61 | 5E61 - Querbeschleunigungssensor: Controller Release System (CRS) - Fehlerverdacht Gradient. |
| 0x5e8e | 5E8E - Querbeschleunigungssensor: Messbereich ueberschritten. |
| 0x5e90 | 5E90 - Querbeschleunigungssensor: Langzeit-Offset ueberschreitet Limit. |
| 0x5e91 | 5E91 - Querbeschleunigungssensor: Wert waehrend Stillstand zu gross. |
| 0x5e92 | 5E92 - Querbeschleunigungssensor: Plausibilitaetsfehler, obwohl Modellgueltigkeit gegeben. |
| 0x5e93 | 5E93 - Querbeschleunigungssensor: Plausibilitaetsfehler waehrend Signalbeobachtung (Modellgueltigkeit nicht mehr vorhanden). |
| 0x5e95 | 5E95 - Querbeschleunigungssensor: Controller Release System (CRS) - Fehlerverdacht Signalgradient. |
| 0x5e96 | 5E96 - Querbeschleunigungssensor: Plattform-Software (PSW) - Fehlerverdacht. |
| 0x5e97 | 5E97 - Querbeschleunigungssensor: Controller Release System (CRS) - Fehlerverdacht bei Messbereichsueberschreitung. |
| 0x5e98 | 5E98 - Querbeschleunigungssensor: Interner Querbeschleunigungswert ausserhalb Messbereich (DrsERRN02). |
| 0x5e99 | 5E99 - Querbeschleunigungssensor: Interner Selbsttest fehlgeschlagen (DrsERRN04). |
| 0x5f64 | 5F64 - Querbeschleunigungssensor2: Interner Wert ausserhalb Messbereich (Drs2ERRN02). |
| 0x5f65 | 5F65 - Querbeschleunigungssensor2: Interner Selbsttest fehlgeschlagen (Drs2ERRN04). |
| 0x5e8d | 5E8D - Laengsbeschleunigungs-Sensor: Langzeit-Offsetwert ausserhalb Wertebereich. |
| 0x5e8f | 5E8F - Laengsbeschleunigungs-Sensor: Fehler in Plausibilitaetsueberwachung. |
| 0x5eb6 | 5EB6 - Laengsbeschleunigungs-Sensor: Wertebereich ueberschritten. |
| 0x5e9a | 5E9A - Drehratensensor: Vorzeichenfehler - Gutpruefung nach behobenem Defekt erforderlich. |
| 0x5e9b | 5E9B - Drehratensensor: Beabsichtigte Signalstoerung (Static Bite) fehlerhaft. |
| 0x5ea1 | 5EA1 - Drehratensensor: Beabsichtigte Signalstoerung (Dynamic Bite) fehlerhaft. |
| 0x5ea9 | 5EA9 - Drehratensensor: Controller Release System (CRS) - Fehlerverdacht bei beabsichtigter Signalstoerung (Static BITE). |
| 0x5eab | 5EAB - Drehratensensor: Controller Release System (CRS) - Fehlerverdacht bei beabsichtigter Sinalstoerung (Dynamic BITE). |
| 0x5eac | 5EAC - Drehratensensor: Plattform-Software (PSW) - Fehlerverdacht DRS. |
| 0x5ead | 5EAD - Drehratensensor: Drs-ID passt nicht zur angefragten ID. |
| 0x5eae | 5EAE - Drehratensensor: Checksumme der empfangenen DRS-Botschaft falsch. |
| 0x5eaf | 5EAF - Drehratensensor: Fehler des ERR- oder TERR-Bits. Keine zusaetzliche Information (ERRNO = 0). |
| 0x5eb0 | 5EB0 - Drehratensensor: Interner Gierratenwert ausserhalb Wertebereich (DrsERRNO1). |
| 0x5eb1 | 5EB1 - Drehratensensor: Interne Referenzvariable ausserhalb Wertebereich (DrsERRNO3). |
| 0x5eb2 | 5EB2 - Drehratensensor: Empfangene Nachricht zu früh (DrsERRNO5). |
| 0x5eb3 | 5EB3 - Drehratensensor: Spannungsversorgung zu niedrig (DrsERRNO6). |
| 0x5eb4 | 5EB4 - Drehratensensor: Spannungsversorgung zu hoch (DrsERRNO7). |
| 0x5eb5 | 5EB5 - Drehratensensor: Sensor in Initialisierung (DrsERRNO8). |
| 0x5f58 | 5F58 - Drehratensensor: Controller Release System (CRS) - Fehlerverdacht bei beabsichtigter Signalstoerung (Dynamic Bite). |
| 0x5f59 | 5F59 - Drehratensensor: Controller Release System (CRS) - Fehlerverdacht bei Signalgradient. |
| 0x5d9a | 5D9A - Drehratensensor: DRS sendet Signal DrsAX1=INITStatusfehler. (DRS-Typ MM 3.x). |
| 0x5d9c | 5D9C - Drehratensensor: DRS sendet Signal DrsAY1=INITStatusfehler (DRS-Typ MM 3.x). |
| 0x5d9f | 5D9F - Drehratensensor: DRS sendet Signal DrsAY2=INITStatusfehler (DRS-Typ MM 3.x). |
| 0x5da0 | 5DA0 - Drehratensensor: DRS sendet Signal DrsPSIP1=INITStatusfehler (DRS-Typ MM 3.x). |
| 0x5da3 | 5DA3 - Drehratensensor: DRS sendet Signal DrsPSIP2=INIT,Statusfehler (DRS-Typ MM 3.x). |
| 0x5da4 | 5DA4 - Drehratensensor: DRS sendet Signal DrsAX1=Signalfehler. Resertierbar (DRS-Typ MM 3.x). |
| 0x5da5 | 5DA5 - Drehratensensor: DRS sendet Signal DrsAY1=Signalfehler. Resertierbar (DRS-Typ MM 3.x). |
| 0x5da8 | 5DA8 - Drehratensensor: DRS sendet Signal DrsAY2=Signalfehler. Resertierbar (DRS-Typ MM 3.x). |
| 0x5da9 | 5DA9 - Drehratensensor: DRS sendet Signal DrsPSIP1=Signalfehler. Resertierbar (DRS-Typ MM 3.x). |
| 0x5dac | 5DAC - Drehratensensor: DRS sendet Signal DrsPSIP2=Signalfehler. Resertierbar (DRS-Typ MM 3.x). |
| 0x5dae | 5DAE - Drehratensensor: DRS sendet Signal AX1=ungueltig (DRS-Typ MM 3.x). |
| 0x5db1 | 5DB1 - Drehratensensor: DRS sendet Signal AY1=ungueltig (DRS-Typ MM 3.x). |
| 0x5db2 | 5DB2 - Drehratensensor: DRS sendet Signal AY2=ungueltig (DRS-Typ MM 3.x). |
| 0x5db5 | 5DB5 - Drehratensensor: DRS sendet Signal PSIP!=ungueltig (DRS-Typ MM 3.x). |
| 0x5db6 | 5DB6 - Drehratensensor: DRS sendet Signal PSIP2=ungeltig (DRS-Typ MM 3.x). |
| 0x5db7 | 5DB7 - Drehratensensor: DRS sendet Signal PSIPP=ungueltig (DRS-Typ MM 3.x). |
| 0x5dba | 5DBA - Drehratensensor: Interner Fehler: Ax1SensNotAvailable (DRS-Typ MM3.x). |
| 0x5dbb | 5DBB - Drehratensensor: Interner Fehler: Ay1SensNotAvailable (DRS-Typ MM3.x). |
| 0x5dbe | 5DBE - Drehratensensor: Interner Fehler: Ay2SensNotAvailable (DRS-Typ MM3.x) |
| 0x5dc0 | 5DC0 - Drehratensensor: Interner Fehler: PSIP1SensNotAvailable (DRS-Typ MM3.x). |
| 0x5dc3 | 5DC3 - Drehratensensor: Interner Fehler: PSIP2SensNotAvailable (DRS-Typ MM3.x) |
| 0x5dc4 | 5DC4 - Drehratensensor: Interner Fehler: PSIPPSensNotAvailable (DRS-TypMM 3.x). DRS MM 3.x (R): DRS - PSIPPSensNotAvailable. |
| 0xD375 | D375 - Drehratensensor: CAN-Botschaftszaehler meldet Fehler (DRS Typ MM 3.x). |
| 0xD376 | D376 - Drehratensensor: CAN-Botschaftszaehler meldet Fehler (DRS Typ MM 3.x). |
| 0xD377 | D377 - Drehratensensor: CAN-Botschaftszaehler meldet Fehler (DRS Typ MM 3.x). |
| 0xD378 | D378 - Drehratensensor: CAN-Botschaftszaehler meldet Fehler (DRS Typ MM 3.x). |
| 0xD379 | D379 - Drehratensensor: Checksumme der Botschaft ist falsch (DRS Typ MM 3.x). |
| 0xD37A | D37A - Drehratensensor: Checksumme der Botschaft ist falsch (DRS Typ MM 3.x). |
| 0xD37B | D37B - Drehratensensor: Checksumme der Botschaft ist falsch (DRS Typ MM 3.x). |
| 0xD37C | D37C - Drehratensensor: Checksumme der Botschaft ist falsch (DRS Typ MM 3.x). |
| 0x5e2c | 5E2C - Drehratensensor: Ueber CAN-Bus empfangene DRS-Type passt nicht zur Konfiguration (DRS-Typ MM 3.x). |
| 0x5e37 | 5E37 - Drehratensensor: DRS-Type falsch oder CluType-ID7 nicht erlaubt (DRS-Typ MM 3.x). |
| 0x5e38 | 5E38 - Drehratensensor: DRS meldet CheckTimeout. DrsVARCheckTimeout (DRS-Typ MM 3.x). |
| 0x5e39 | 5E39 - Drehratensensor: Interner Fehler. SensDetectedCRC (DRS-Typ MM 3.x). |
| 0x5e3a | 5E3A - Drehratensensor: Interner Fehler. Ueberspannung erkannt. |
| 0x5e45 | 5E45 - Drehratensensor: Interner Fehler (DRS-Typ MM 3.x). |
| 0xD36F | D36F - F-CAN: Botschaft CLU1_VDA (ID 0x0D8) nicht empfangen oder falsch Botschaftslaenge (DLC) [Sender: DRS] -  Spgs.versorgung DRS defekt? |
| 0xD370 | D370 - F-CAN: Botschaft CLU2_VDA (0x0E3) nicht empfangen oder falsche Botschaftslaenge (DLC). [Sender: DRS] - Spgs.versorgung DRS defekt? |
| 0xD371 | D371 - F-CAN: Botschaft CLU3_VDA (0x0F4) nicht empfangen oder falsche Botschaftslaenge. [Sender: DRS] - Spgs.versorgung DRS defekt? |
| 0xD372 | D372 - F-CAN: Botschaft CLU_St_VDA (ID 0x165) nicht empfangen oder falsche Botschaftslaenge (DLC). [Sender: DRS] - Spgs.versorgung DRS defekt? |
| 0x5e46 | 5E46 - F-CAN: Botschaft SYNC (ID 0x80, Synchronisation Sensorcluster) konnte nicht abgeschickt werden (von DSC-SG gesendet). |
| 0x6dc0 | 6DC0 - Drehratensensor: Offset-Kalibrierung nicht möglich, da Laengsbeschleungingswert ausserhalb Wertebereich (DRS-Typ MM3x). |
| 0x6dc1 | 6DC1 - Drehratensensor: Fehler während EEProm-Zugriff aufgetreten (DRS-Typ MM3x). |
| 0x6dc2 | 6DC2 - Drehratensensor: Zu viele ungueltige Laengsbeschleunigungswerte waehrend Laengsbeschleunigungs-Kalibrierung aufgetreten (DRS-Typ MM3x). |
| 0x6dc3 | 6DC3 - Drehratensensor: Neuer DRS-Sensor erkannt. Abgespeicherte Seriennummer paßt nicht zu empfangener Seriennr. Laengsbeschleunigungs-Sensor neu abgleichen |
| 0x5e9c | 5E9C - Drehratensensor: Plausibilitaetsfehler in Bezug zu Lenkwinkelsensor. |
| 0x5e9d | 5E9D - Drehratensensor: Messbereich ueberschritten. |
| 0x5e9e | 5E9E - Drehratensensor: Vorzeichenfehler. |
| 0x5e9f | 5E9F - Drehratensensor: Offset ueberschreitet Limit waehrend Stillstand. |
| 0x5ea0 | 5EA0 - Drehratensensor: Signalgradient DRS. |
| 0x5ea2 | 5EA2 - Drehratensensor: Offset ueberschreitet Limit waehrend schneller Kompensation. |
| 0x5ea3 | 5EA3 - Drehratensensor: Empfindlichkeit (Gain) ueberschreitet Limit. |
| 0x5ea4 | 5EA4 - Drehratensensor: Offset ueberschreitet Limit waehrend langsamer Kompensation. |
| 0x5ea5 | 5EA5 - Drehratensensor: Plausibilitaetsfehler, obwohl Modellgueltigkeit gegeben. |
| 0x5ea6 | 5EA6 - Drehratensensor: Plausibilitaetsfehler waehrend Signalbeobachtung (Modellgueltigkeit nicht mehr vorhanden). |
| 0x5ea7 | 5EA7 - Drehratensensor: Redundanz Fehler. |
| 0x5ea8 | 5EA8 - Drehratensensor: Controller Release System (CRS) - Fehlerverdacht bei Messbereich DRS. |
| 0x5eaa | 5EAA - Drehratensensor: Controller Release System (CRS) - Fehlerverdacht bei beabsichtigter Signalstoerung (Dynamic Bite). |
| 0x5f7a | 5F7A - Drehratensensor: DRS-Fehler dem DRS_1 zugeordnet. |
| 0x5f66 | 5F66 - Drehratensensor2: DRS2-ID passt nicht zur angefragten ID. |
| 0x5f67 | 5F67 - Drehratensensor2: Checksumme der empfangenen DRS-Botschaften falsch. |
| 0x5f68 | 5F68 - Drehratensensor2: Fehler des ERR- oder TERR-Bits. Keine zusaetzliche Information (ERRNO = 0). |
| 0x5f69 | 5F69 - Drehratensensor2: Interner Gierratenwert ausserhalb Wertebereich (DrsERRNO1). |
| 0x5f6a | 5F6A - Drehratensensor2: Interne Referenzvariable ausserhalb Wertebereich (DrsERRNO3). |
| 0x5f6b | 5F6B - Drehratensensor2: Empfangene Nachricht zu frueh (DrsERRNO5). |
| 0x5f6c | 5F6C - Drehratensensor2: Spannungsversorgung zu niedrig (DrsERRNO6). |
| 0x5f6d | 5F6D - Drehratensensor2: Spannungsversorgung zu hoch (DrsERRNO7). |
| 0x5f6e | 5F6E - Drehratensensor2: Sensor in Initialisierung (DrsERRNO8). |
| 0x5f7b | 5F7B - Drehratensensor: DRS-Fehler dem DRS_2 zugeordnet. |
| 0x5ee2 | 5EE2 - Drucksensor: Plausibilitaet Drucksensor_Signalleitungen. (DS-Typ 5: DSLine+DSLine2 = 5Volt). |
| 0x5ee4 | 5EE4 - Drucksensor: Fehler in Spannungsversorgung. |
| 0x5ee5 | 5EE5 - Drucksensor: Leitungsfehler. |
| 0x5ee6 | 5EE6 - Drucksensor: Leitungsfehler. Signal invertiert. |
| 0x5ee7 | 5EE7 - Drucksensor: Fehler bei Power Up Selbsttest (POS). |
| 0x5eed | 5EED - Drucksensor: DS-Offset ungueltig. |
| 0x5ec4 | 5EC4 - Drucksensor: Testpuls-Fehler. |
| 0x5f28 | 5F28 - Drucksensor: Leitungsfehler des Temperatursignals. - Kurzschluss zu +12V, Masse? |
| 0x5f29 | 5F29 - Drucksensor: Temperatursignal Fehler. Parity failure, Transmission error (Ds-Typ DS5). |
| 0x5f2a | 5F2A - Drucksensor: Temperatursignal ausserhalb Wertebereich (DS-Typ DS5). |
| 0x5e86 | 5E86 - Interner Drucksensor Mc1: Fehler in Spannungsversorgung (Kreis 1). |
| 0x5edd | 5EDD - Interner Drucksensor Mc1: Fehler bei Power On Selbsttest. |
| 0x5ede | 5EDE - Interner Drucksensor Mc1: Leitungsfehler Kanal 1. |
| 0x5edf | 5EDF - Interner Drucksensor Mc1: Leitungsfehler Kanal 2. |
| 0x5ee1 | 5EE1 - Interner Drucksensor Mc1: Plausibilitaetsfehler. |
| 0x5e87 | 5E87 - Drucksensor Ci1: Fehler in Spannungsversorgung (Kreis 1). |
| 0x5ee3 | 5EE3 - Drucksensor Ci1: Fehler bei Power-On-Selbsttest. |
| 0x5ee8 | 5EE8 - Drucksensor Ci1: Kanal 1 Leitungsfehler. |
| 0x5ee9 | 5EE9 - Drucksensor Ci1: Kanal 2 Leitungsfehler. |
| 0x5eea | 5EEA - Drucksensor Ci1: Plausibilitaetsfehler. |
| 0x5e88 | 5E88 - Drucksensor Ci2: Fehler in Spannungsversorgung (Kreis 2). |
| 0x5eeb | 5EEB - Drucksensor Ci2: Fehler bei Power-On-Selbsttest. |
| 0x5eec | 5EEC - Drucksensor Ci2: Kanal 1 Leitungsfehler. |
| 0x5ef1 | 5EF1 - Drucksensor Ci2: Kanal 2 Leitungsfehler. |
| 0x5f27 | 5F27 - Drucksensor Ci2: Plausibilitaetsfehler. |
| 0x5eba | 5EBA - Lenkwinkelsensor: Statusfehler. Lenkwinkel Signal ungueltig oder Lenkwinkel Signal nur relativ. Mittenstellung unbekannt. Lernquadrant aktiv. Auf Anschlag lenken. |
| 0x5ebb | 5EBB - Lenkwinkelsensor: Signalfehler - Gutpruefung nach behobenem Defekt erforderlich. |
| 0x5ebc | 5EBC - Lenkwinkelsensor: Vorzeichenfehler. |
| 0x5ebd | 5EBD - Lenkwinkelsensor: Signal verbleibt auf konstanten Wert. |
| 0x5ebe | 5EBE - Lenkwinkelsensor: Messbereich LWS. |
| 0x5ebf | 5EBF - Lenkwinkelsensor: Signalgradient LWS. |
| 0x5ec0 | 5EC0 - Lenkwinkelsensor: Langzeit-Offset-Wert ueberschreitet Limit. |
| 0x5ec1 | 5EC1 - Lenkwinkelsensor: Plausibilitaetsfehler in Bezug zu Drehratensensor. |
| 0x5ec5 | 5EC5 - Lenkwinkelsensor: CAN-Botschaftszaehler meldet Fehler. |
| 0x5f0d | 5F0D - Lenkwinkelsensor: Segment-Finde Algorithmus fand falsches Segment. |
| 0x5f0e | 5F0E - Lenkwinkelsensor: SFA fand kein Segment und Fahrzeuggeschw. > 25 km/h - Temporaerer Fehler. |
| 0x5f63 | 5F63 - Lenkwinkelsensor: LWS nicht abgeglichen (LWS-Typ: LWS4,RWDT_STEA_WHL). |
| 0x5ec6 | 5EC6 - Lenkwinkelsensor: Signal nicht OK. |
| 0x5ec7 | 5EC7 - Lenkwinkelsensor: Seriennummer ungueltig. |
| 0x5ec8 | 5EC8 - Lenkwinkelsensor: Signal STWA_TOP=ungueltig empfangen. |
| 0x5ec9 | 5EC9 - Lenkwinkelsensor: Die im DXC gespeicherte LWS-Serienummer ist falsch. |
| 0x5eca | 5ECA - Lenkwinkelsensor: Lesen der gespeicherten LWS-Seriennummer nicht moeglich.Lenkwinkelsensor neu abgleichen |
| 0x5ecb | 5ECB - Lenkwinkelsensor: Signal STWA_TOP_COMP in F-CAN-Botschaft LENKRADWINKEL_OBEN (ID C9h) ungueltig. |
| 0x6dc6 | 6dc6 - Lenkwinkelsensor: SZL Codierung Timeout |
| 0x6dc7 | 6dc7 - Lenkwinkelsensor: SZL nicht codiert |
| 0x6dc8 | 6dc8 - Lenkwinkelsensor: Signal ALIV_COU_STWA_TOP in F-CAN-Botschaft LENKRADWINKEL_OBEN2 (ID 0xC9) empfangen. |
| 0x5ed4 | 5ED4 - Unplausible DSC-Regelung: Unplausibilitaet bei Gierratenregelung (FZR-Controlling). |
| 0x5ed5 | 5ED5 - Unplausible DSC-Regelung: Notbremsfunktion ausgeloest (Wegen unplausibler Regelung: Blockieren der Raeder wird moeglich gemacht). |
| 0x5ed6 | 5ED6 - Infoeintrag: Langzeitabgleich: LWS-, DRS- und ay-Sensor-Langzeitabgleiche deaktiviert. |
| 0x5eda | 5EDA - Variantencodierung: Codierungswert in EEPROM nicht zulaessig. |
| 0x5edb | 5EDB - Variantencodierung: Codierungswert ausserhalb Wertebereich. |
| 0x5edc | 5EDC - Variantenkodierung: Codierungswert nicht freigegeben in diesem Projekt. von CAS gesendete Variante wird nicht aktzeptiert |
| 0x5efb | 5EFB - Variantencodierung: Variantenschalter konnte aus EEPROM nicht gelesen werden. |
| 0x5efc | 5EFC - Variantencodierung: Keine Fahrzeugtyp Daten empfangen. |
| 0x5efd | 5EFD - Infoeintrag: Variantencodierung: Neuer Variantenkodierungswert gesetzt. |
| 0x5f23 | 5F23 - Variantenkodierung: EEPROM Konfiguration ACB Hba Value im EEPROM nicht gueltig. |
| 0x5f2c | 5F2C - Variantenkodierung: EEPROM Inhalt nicht gueltig. |
| 0x5f60 | 5F60 - Variantenkodierungswert passt nicht zum Fahrzeug. |
| 0x5f18 | 5F18 - Variantenkodierung: EEPROM Konfiguration FZR: Anhaenger-Schlinger-Logik_Wert in EEPROM ungueltig. |
| 0x5f4d | 5F4D - Variantenkodierung: ASWVARCON lesen nicht moeglich. |
| 0x6dc4 | 6dc4 - Variantenkodierung: Variantencode ungueltig. |
| 0x6dc5 | 6dc5 - Variantenkodierung: SZL Codierbyte nicht vorhanden, DXC Codierung durchfuehren. |
| 0x5f1e | 5F1E - Infoeintrag: Variantenkodierung: Anhaenger-Stabilisierungs-Logik ueber EEPROM deaktiviert. |
| 0x5ef9 | 5EF9 - DSC-Software: ECU-intern: Timeout in Software-Startup-Phase. |
| 0x5efa | 5EFA - DSC-Software: ECU-intern: Asynchroner Rechenzyklus(Task)-Counter in Software. |
| 0x5f20 | 5F20 - DSC-Software: ECU-intern: Software fordert vollstaendiges Abschalten des Systems an. |
| 0x5f21 | 5F21 - DSC-Software: ECU-intern: Software fordert nur EBV Funktion an. |
| 0x5f22 | 5F22 - DSC-Software: ECU-intern: Software fordert nur ABS Funktion an. |
| 0x5f30 | 5F30 - DME-Fehler: DME sendet Motordrehzahl=ungueltig. |
| 0x5f31 | 5F31 - DME-Fehler: DME sendet Mittleres_Effektivdrehmoment=ungueltig. |
| 0x5f32 | 5F32 - DME-Fehler: DME sendet Unbearbeitetes_Gaspedal=ungueltig. |
| 0x5f33 | 5F33 - DME-Fehler: Rueckmeldung aus angefordetem DME-Stelleingriff (ASR,MSR) ist Null. |
| 0x5f34 | 5F34 - DME-Fehler: Checksummen- oder Timeout-Fehler der Botschaft TORQUE_1. |
| 0x5f35 | 5F35 - DME-Fehler: Checksummen- oder Timeout-Fehler der Botschaft TORQUE_2. |
| 0x5f36 | 5F36 - DME-Fehler: Checksummen- oder Timeout-Fehler der Botschaft TORQUE_3. |
| 0x5f6f | 5F6F - DME-Fehler: DME sendet Drehmoment_aktueller_Wert=ungueltig (PT-CAN, ID 0xA8, Signal TORQ_AVL). |
| 0x5f70 | 5F70 - DME-Fehler: DME sendet Status Kupplungsschalter=ungueltig (PT-CAN, ID 0xA8, Signal ST_SW_CLT). |
| 0x5f71 | 5F71 - DME-Fehler: DME sendet Drehmoment_aktuelles_Minimum=ungueltig (PT-CAN,ID 0xA9, Signal TORQ_AVL_MIN). |
| 0x5f72 | 5F72 - DME-Fehler: DME sendet Drehmoment_aktuelles_Maximum=ungueltig (PT-CAN,ID 0xA9, Signal TORQ_AVL_MAX). |
| 0x5f73 | 5F73 - DME-Fehler: DME sendet Drehmomentwert=ungueltig (PT-CAN, ID 0xA9, Signal TORQ_AVL_SPAR_POS). |
| 0x5f74 | 5F74 - DME-Fehler: DME sendet Gaspedalwinkel=ungueltig (PT-CAN, ID 0xAA, Signal ANG_ACPD). |
| 0x5f75 | 5F75 - DME-Fehler: DME sendet Drehmoment_Fahrer_Wahl=ungueltig (PT-CAN, ID 0xAA, Signal TORQ_DVCH). |
| 0x5f76 | 5F76 - DME-Fehler: DME sendet Drehzahlwert=ungueltig (PT-CAN ID 0x0AA, Signal RPM_ENG). |
| 0x5f77 | 5F77 - DME-Fehler: DME sendet Drehmomentwert=ungueltig (PT-CAN, ID 0xA8, Signal ST_RCPT_ENG_DSC). |
| 0x5f78 | 5F78 - DME-Fehler: DME sendet Motorstatus=ungueltig (PT-CAN, ID 0xA8, Signal ST_RCPT_ENG_DSC). |
| 0x5f2e | 5F2E - EGS-Fehler: EGS sendet EGS_not_alive ODER Checksumme ungueltig (PT-CAN, ID 0xBA, Signal ALIV_GRB, CHKSM_GRB). |
| 0x5f2f | 5F2F - EGS-Fehler: EGS sendet Getriebe_Status=ungueltig ODER Schalthebel=ungueltig ODER Getriebe_negativelift=ungueltig (PT-CAN, ID 0xBA, Signal RPM_GRB_NEGL, ST_GRLV_ACV, ST_GR_GRB). |
| 0x5f07 | 5F07 - DSC-ACC-Schnittstelle: Timeout bei Empfang der CAN Botschaften fuer ACC. |
| 0x5f08 | 5F08 - DSC-Acc-Schnittstelle (ECD): ACC sendet ACC not alive (PT-CAN, ID 0xAD, Signal ALIV_DCRN_BRP_ACC). |
| 0x5f09 | 5F09 - DSC-Acc-Schnittstelle (ECD): ACC sendet Gueltigkeitscheck des gesetzten Wertes gescheitert (PT-CAN, ID 0xAD, Signal ST_DCRN_BRP_TAR_ACC, DCRN_BRP_TAR_ACC). |
| 0x5f2d | 5F2D - DSC-Acc-Schnittstelle (ECD): ACC sendet Checksumme der empfangenen ACC Botschaft falsch (PT-CAN, ID 0xAD, Signal CHKSM_DCRN_BRP_ACC). |
| 0x5f25 | 5F25 - ARS-ECU: Timeout waehrend Empfang von CAN Botschaften (Temporaer heilbarer Fehler). |
| 0x5f26 | 5F26 - ARS-ECU: ARS alive-Fehler (Botschaft ID 0x1AC, Signal ALIV_COU_ARS). |
| 0x5f1f | 5F1F - ARS-ECU: ARS meldet Status ungueltig (Botschaft ID 0x1AC, Signal ST_ARS). |
| 0x5f10 | 5F10 - Bremsbelagverschleiss: Vorderachse Sensorcheck gescheitert. - BBV-Fuehler abgesteckt? |
| 0x5f12 | 5F12 - Bremsbelagverschleiss: Vorderachse Verschleissgrenze erreicht. |
| 0x5f14 | 5F14 - Bremsbelagverschleiss: Plausibilitaetsfehler. Verschleisszustand des BBV-Vorderachsefuehlers passt nicht zu berechnetem Verschleisswert oder zum Ruecksetzwunsch. |
| 0x5f11 | 5F11 - Bremsbelagverschleiss: Hinterachse Sensorcheck gescheitert. - BBV-Fuehler abgesteckt? |
| 0x5f13 | 5F13 - Bremsbelagverschleiss: Hinterachse Verschleissgrenze erreicht. |
| 0x5f15 | 5F15 - Bremsbelagverschleiss: Plausibilitaetsfehler. Verschleisszustand des BBV-Hinterachsefuehlers passt nicht zu berechnetem Verschleisswert oder zum Ruecksetzwunsch. |
| 0x5f1a | 5F1A - Infoeintrag: Fahrleistungsreduzierung durch DSC-Befehl aktiv. |
| 0x5f1b | 5F1B - Infoeintrag: Fahrleistungsreduzierung durch DSC-Befehl abgeschaltet. |
| 0x5f1c | 5F1C - Infoeintrag: Aktiver Bremseneingriff bei ueberhitzten Bremsscheiben. |
| 0x5ef2 | 5EF2 - Drucksensor_ACC_vorne: Offset-Fehler. |
| 0x5ef4 | 5EF4 - Drucksensor_ACC_vorne: Plausibilitaets-Fehler. |
| 0x5ef6 | 5EF6 - Drucksensor_ACC_vorne: Leitungsfehler (DS2Add1). |
| 0x5ef8 | 5EF8 - Drucksensor_ACC_vorne: Spannungsversorgungs-Fehler. |
| 0x5ef3 | 5EF3 - Drucksensor_ACC_hinten: Offset-Fehler. |
| 0x5ef5 | 5EF5 - Drucksensor_ACC_hinten: Plausibilitaets-Fehler. |
| 0x5ef7 | 5EF7 - Drucksensor_ACC_hinten: Spannungsversorgungs-Fehler. |
| 0x5f50 | 5F50 - Ventile allgemein: Uebertemperatur Fehler. |
| 0x5f45 | 5F45 - Bremsfluessigkeitniveau zu niedrig. |
| 0x5f47 | 5F47 - Kombi: Kombi Alive-Fehler. |
| 0x5f48 | 5F48 - Kombi: Kombi sendet Zeit oder Temperatur=ungueltig (PT-CAN, ID 0x310, Signal TEMP_EX,T_SEC_COU_REL) |
| 0x5f49 | 5F49 - Kombi: Kombi sendet Kilometerstand=ungueltig (PT-CAN, ID 0x330, Signal MILE_KM) |
| 0x5f4a | 5F4A - Kombi: Kombi sendet Bremsbelagverschleiss_vorne_oder_hinten=ungueltig |
| 0x5f4b | 5F4B - Kombi: Kombi sendet Status_Handbremslichtschalter=ungueltig (PT-CAN, ID 0x1B4, Signal ST_IDLI_HABR) |
| 0x5f5c | 5f5c - CAN-Botschaft/Kombi: Anhaenger-Stabilisierungs-Logik wegen fehlender CAN-Botschaft INSTR3 (ID 0x615) deaktiviert |
| 0x5e65 | 5E65 - Kombi: OP_PUBU_DSC Signal ungueltig (Botschaft BEDIENUNG_TASTER_DSC, ID 0x316) |
| 0x5ec3 | 5EC3 - Kombi: OP_PUBU_TPCT Signal ungueltig (Botschaft  BEDIENUNG_TASTER_RDC, ID 0x319) |
| 0x5f52 | 5F52 - CCC/MASK-Fehler: CCC meldet Bedienung_Reifendruckkontrolle ungueltig |
| 0xD36A | D36A - PT-CAN: Botschaft STAT_SOLL_MOM_UMSETZUNG (ID 0x0BC) nicht empfangen oder falsche Botschaftslaenge (DLC). [Sender:VGSG] |
| 0x5de7 | 5DE7 - Verteilergetriebe-ECU: VG-ECU meldet: Funktionspruefung nicht Ok |
| 0x5de8 | 5DE8 - Verteilergetriebe-ECU: Kupplung ueber Diagnose deaktiviert |
| 0x5de9 | 5DE9 - Infoeintrag: Verteilergetriebe-ECU: VG-ECU meldet unkomfortable VG-Kupplungsregelung (PT-CAN, 0xBC, Signal ST_TXU_ERR) |
| 0x5dea | 5DEA - Infoeintrag: Verteilergetriebe-ECU: Reduktion Momentenvorsteuerung wegen Reibarbeit im VG |
| 0x5dec | 5DEC - Verteilergetriebe-ECU: Kupplung voruebergehend (temporaer) stillgelegt |
| 0x5f39 | 5F39 - Verteilergetriebe-ECU: VG-Kupplung defekt - Kupplungsposition unbekannt |
| 0x5f3a | 5F3A - Verteilergetriebe-ECU: VG-Kupplung defekt - Kupplung ist in geoeffneter Position - Heckantrieb! |
| 0x5f3b | 5F3B - Infoeintrag: Verteilergetriebe-ECU: VG-ECU meldet Einbussen in der Stellgenauigkeit. Unkomfortable Regelung (PT-CAN, ID 0xBC, Signal ST_TXU_Err). |
| 0x5f3c | 5F3C - setzt Momentenvorgabe nicht zufriedenstellend um |
| 0x5f3d | 5F3D - Verteilergetriebe-ECU: VG-Kupplung leitet kein Antriebsmoment zur VA. Sollvorgabe wird nicht ausgefuehrt - ALLRADVERLUST |
| 0x5f3e | 5F3E - Verteilergetriebe-ECU: Botschaft ST_WEAR_DISK (ID 0x376h): Signal_Lamelle sendet Fehlercode |
| 0x5f3f | 5F3F - Verteilergetriebe-ECU: Botschaft ST_WEAR_DISK (ID 0x376h): Signal_Kette sendet Fehlercode |
| 0x5f41 | 5F41 - Infoeintrag: Verteilergetriebe-ECU: Notregelung der Verteiergetriebkupplung aktiv. VG uebernimmt Kupplungsregelung) |
| 0x6dc9 | 6dc9 - Infoeintrag: Verteilergetriebe-ECU: End-of-line Test läuft – Erwartetes Ende nach 30 Sek |
| 0x6dca | 6dca - Verteilergetriebe-ECU: End-of-line Test fehlerhaft. VG-Kupplung nicht betriebsbereit! |
| 0x5f54 | 5F54 - CAS: Fahrgestell-NR ungueltig |
| 0x5f55 | 5F55 - CAS: Motor-Typ ungueltig |
| 0x5f56 | 5F56 - CAS: CAS sendet Signal KL_15 ungueltig oder Signal KL_R ungueltig oder Unplausibilitaet zwischen Signal KL_15 und WakeUp Signal (PT-Can (ID 0x130h),Signal ST_KL_R,ST_KL_15). |
| 0x5f57 | 5F57 - CAN: Allgemeine CAN Stoerung Time-Out alle CAS Botschaften (ID 0x130h),(ID 0x380h),(ID 0x388h) |
| 0x5f61 | 5F61 - AFS: AFS meldet Status ungueltig (Botschaft ID 0x1FC, Signal ST_FN_AFS) |
| 0x5f62 | 5F62 - AFS: Signalaustausch AFS-DSC ungueltig |
| 0x5f79 | 5F79 - Anhaengermodul: Anhaenger-Signal ungueltig |
| 0x5f51 | 5F51 - Hydraulischer Bremsassistent: EEPROM-Eintrag ungueltig (HPS, HVV) |
| 0x5f53 | 5F53 - Hill Descent Control: HDC EEPROM Eintrag ungueltig |
| 0x5ecc | 5ECC - Hill Descent Control: MASK/CCC sendet Operation_HDC=ungueltig. (PT-CAN, Bedienung_Fahrwerk ID 398h, Signal OP_HDC) |
| 0x5ecd | 5ECD - Hill Descent Control: MASK/CCC sendet Signal=ungueltig. (PT-CAN, Bedienung_Sonderfunktion ID 228h, Signal ID_SPFN) |
| 0x5ece | 5ECE - Hill Descent Control: SZL sendet Signal_Checksumme oder Signal_Alive=ungueltig. (Bedienung_Tempomat ID 194h, Signal CHKSM_CCTR, ALIV_CCTR) |
| 0x5ecf | 5ECF - Hill Descent Control: SZL sendet Signal_OpPUshButtonAcc=ungueltig. (Bedienung_Tempomat ID 194h, Signal OpPushButtonACC) |
| 0x5ed0 | 5ED0 - Hill Descent Control: SZL sendet Signal_OpGapcAcc=ungueltig. (Bedienung_Tempomat ID 194h, Signal OpGapcAcc) |
| 0x5ed1 | 5ED1 - Hill Descent Control: SZL sendet Signal_OpModChoCcca=ungueltig. (Bedienung_Tempomat ID 194h, Signal OpModChoCcca) |
| 0x5f2b | 5F2B - PT-Can: Botschaft ANZEIGE_HDC (ID 0x32D) konnte nicht abgeschickt werden (von DSC-SG gesendet) |
| 0x5f4e | 5F4E - Hill Descent Control: MASK/CCC sendet Signal_Taster_HDC=ungueltig. (PT-CAN, Bedienung_Taster_HDC ID 31Ah, Signal OP_PUBU_HDC) |
| 0x5f5d | 5F5D - Elektron. Brems-Vorbefüllung: EEPROM-Eintrag der EVB-Funktion ungueltig |
| 0x6dcb | 6dcb - Elektron. Brems-Vorbefüllung: Signal ST_CLCTR_V  in PT-CAN-Botschaft TORQUE_3 (ID 0xAA) ungueltig |
| 0x5f5e | 5F5E - Bremsscheiben-Wischer: EEPROM Eintrag ungueltig |
| 0x5f5f | 5F5F - Berg-Anfahrassistent: EEPROM Eintrag ungueltig |
| 0xD374 | D374 - PT-CAN: Botschaft STAT_GANG_RUECKWAERTS (ID 0x3B0) nicht empfangen oder falsche Botschaftslaenge (DLC). [Sender: LM] |
| 0x5f7c | 5F7C - DSC-ECU: ECU-intern: VAFS-Prozessor: VAFS-SP-Interface Übertragungsfehler des VAFS-Controllers |
| 0x5f7d | 5F7D - DSC-ECU: ECU-intern: VAFS-Prozessor: Falscher Speicherzugriff auf den VAFS-Controller |
| 0x5f7e | 5F7E - DSC-ECU: ECU-intern: VAFS-Prozessor: ADC Kalibrierfehler des VAFS-Controllers |
| 0x5f7f | 5F7F - DSC-ECU: ECU-intern: VAFS-Prozessor: ADC Konvertierungsstartfehler des VAFS-Controllers |
| 0x5f80 | 5F80 - DSC-ECU: ECU-intern: VAFS-Prozessor: ADC Übertragungsfehler des VAFS-Controllers |
| 0x5f81 | 5F81 - DSC-ECU: ECU-intern: VAFS-Prozessor: Softwareuebertragungsfehler (ASW-PSW) |
| 0x5f82 | 5F82 - DSC-ECU: ECU-intern: VAFS-Prozessor: Allg. HSW-Fehler des VAFS-Controllers |
| 0x5f83 | 5F83 - DSC-ECU: ECU-intern: VAFS-Prozessor: CAN-Hardwarefehler des VAFS-Controllers |
| 0x5f84 | 5F84 - DSC-ECU: ECU-intern: VAFS-Prozessor: CAN Botschafts-Timeout des VAFS-Controller |
| 0x5f85 | 5F85 - DSC-ECU: ECU-intern: VAFS-Prozessor: CAN Signalfehler des VAFS-Controllers |
| 0x5f86 | 5F86 - DSC-ECU: ECU-intern: VAFS-Prozessor: Allg. VAFS-Fehler des VAFS-Controllers |
| 0x5f44 | 5F44 - Kupplung: Kupplungsschalter niemals gedrueckt |
| 0x5f46 | 5F46 - Kupplung: Kupplungsschalte permanent gedrueckt |
| 0x5ed7 | 5ED7 - Rueckwaertsgangschalter: Ueberwachung meldet: Schalter permantent Rueckwaerts |
| 0x5ed8 | 5ED8 - Rueckwaertsgangschalter: Ueberwachung meldet: Schalter permantent Vorwaerts |
| 0x5ed9 | 5ED9 - PT-CAN: Signal STATUS_GEAR_BACKWARDS in Botschaft STATUS_GANG_RUECKWAERTS (ID 3B0h) ungueltig (verwendet fuer Hill-Hold-Funktion) |
| 0x5ed2 | 5ED2 - Bremsscheiben-Wischer: RLS sendet ungueltige Signale in Botschaft REGENSENSOR_WISCHERGESCHWINDIGKEIT (PT-CAN, ID 0x226) |
| 0x5ed3 | 5ED3 - Bremsscheiben-Wischer: SZL sendet Signal OP_WISW=ungueltig (F-CAN, ID 0x2a6, Signal OP_WISW) |
| 0xD383 | D383 - LDM-Fehler: Checksummen-Fehler |
| 0x6f4b | 6F4B - LDM-Fehler: Alive-Fehler |
| 0x6e59 | 6E59 - LDM-Fehler: Fahrpedalueberwachung, LDM-Bremsanforderung gegenueber Fahrpedal unplausibel |
| 0x6df8 | 6DF8 - LDM-Fehler: Freigabeueberwachung, LDM-Bremsanforderung ohne Freigabe |
| 0x5e55 | 5E55 - CAN-Fehler: Botschaft LDM_Anforderung_Radmoment_Sollwert ungueltig |
| 0x5e56 | 5E56 - CAN-Fehler: Botschaft G237 LDM_Anforderung_Radmoment_Sollwertverteilung (vorne/hinten) ungültig. |
| 0x5e53 | 5E53 - Infoeintrag: Hydraulische Fading Control: HFC ist laenger als 500ms aktiv und Bremsscheibentemp. oberhalb Grenzwert 550 Grad |
| 0x5e54 | 5E54 - Infoeintrag: Hydraulische Fading Control: HFC ist aktiv und Bremsscheibentemperatur oberhalb Grenzwert 700 Grad |
| 0x60ac | 60AC - Reifenpannenanzeige: RPA Codierdaten unplausibel |
| 0x60ad | 60AD - Reifenpannenanzeige: RPA Standartisierungsdaten unplausibel |
| 0x60ae | 60AE - Reifenpannenanzeige: RPA-FASTA-Daten unplausibel |
| 0x60af | 60AF - Reifenpannenanzeige: RPA inaktiv wegen zu grosser Luftfeder-Hoehendifferenz an Vorderachse |
| 0x60b0 | 60B0 - Reifenpannenanzeige: RPA inaktiv wegen zu grosser Luftfeder-Hoehendifferenz an Hinterachse |
| 0x94B0 | 94B0 - SZL: Fehlereintrag fuer SZL: LWS-Fehler: Synchronisation mit Sub nicht möglich |
| 0x94B1 | 94B1 - SZL: Fehlereintrag fuer SZL: LWS-Fehler: Verbindungstest zur PDA fehlgeschlagen |
| 0x94B2 | 94B2 - SZL: Fehlereintrag fuer SZL: LWS-Fehler: Umgebungshelligkeit zu hoch |
| 0x94B3 | 94B3 - SZL: Fehlereintrag fuer SZL: LWS-Fehler: Keine Referenzspur gefunden |
| 0x94B4 | 94B4 - SZL: Fehlereintrag fuer SZL: LWS-Fehler: Sensorfehler: Referenzspurabstand außerhalb des Toleranzbandes |
| 0x94B5 | 94B5 - SZL: Fehlereintrag fuer SZL: LWS-Fehler: Illegaler Code |
| 0x94B6 | 94B6 - SZL: Fehlereintrag fuer SZL: LWS-Fehler: Winkelsprung zu gross |
| 0x94B7 | 94B7 - SZL: Fehlereintrag fuer SZL: LWS-Fehler: Messbereich überschritten (Rundenoverflow) |
| 0x94B8 | 94B8 - SZL: Fehlereintrag fuer SZL: LWS-Fehler: Winkelverifizierung durch Main und Sub fehlerhaft |
| 0x94B9 | 94B9 - SZL: Fehlereintrag fuer SZL: LWS-Fehler: LWS nicht abgeglichen: EEPROM defekt |
| 0x94BA | 94BA - DSC-SZL: Fehlereintrag fuer SZL: Belichtungszeit=0 |
| 0x94BB | 94BB - DSC-SZL: Fehlereintrag fuer SZL: Abwurf durch Vergleicher |
| 0x94BC | 94BC - DSC-SZL: Fehlereintrag fuer SZL: CRC Fehler im Codierdatenblock |
| 0x94BD | 94BD - DSC-SZL: Fehlereintrag fuer SZL: CRC Fehler im RAM Save Bereich |
| 0x94BE | 94BE - DSC-SZL: Fehlereintrag fuer SZL: Digitalwinkel ausserhalb Praediktionsbereich |
| 0x94BF | 94BF - DSC-SZL: Fehlereintrag fuer SZL: StartUp Prozesskommunikation Timeout |
| 0x94C0 | 94C0 - DSC-SZL: Fehlereintrag fuer SZL: WakeUp TimeOut Belichtungsregelung |
| 0x94C1 | 94C1 - DSC-SZL: Fehlereintrag fuer SZL: Error 16 |
| 0x94C2 | 94C2 - DSC-SZL: Fehlereintrag fuer SZL: LWS nicht abgeglichen |
| 0x94C3 | 94C3 - DSC-SZL: Fehlereintrag fuer SZL: allgemeiner Sensorfehler |
| 0x94C4 | 94C4 - DSC-SZL: Fehlereintrag fuer SZL: eine Referenzspur nicht gefunden |
| 0x94C5 | 94C5 - DSC-SZL: Fehlereintrag fuer SZL: CRC Fehler im RAM Save Bereich |
| 0x94C6 | 94C6 - DSC-SZL: Fehlereintrag fuer SZL: fuer CRC Referenzspur reserviert |
| 0x94C7 | 94C7 - DSC-SZL: Fehlereintrag fuer SZL: StartUp LWS Shadow Nullpunktdaten CRC Fehler |
| 0x94C8 | 94C8 - DSC-SZL: Fehlereintrag fuer SZL: StartUp LWS Shadow Bandendedaten CRC Fehler |
| 0x94C9 | 94C9 - DSC-SZL: Fehlereintrag fuer SZL: StartUp EEPROM wurde nicht erfolgreich geladen |
| 0xC987 | C987 - SZL: Fehlereintrag fuer SZL: LWS-Fehler: Keine Botschaften am F-CAN. BusOff-Fehler. |
| 0xC995 | C995 - SZL: Fehlereintrag fuer SZL: LWS-Fehler: Signal oder Wert oberhalb Schwelle, nicht belegt Radgeschwindigkeit >300km/h: F-CAN Radgeschwindigkeit, Kommunikation mit DSC. |
| 0xC996 | C996 - SZL: Fehlereintrag fuer SZL: LWS-Fehler: Signal oder Wert unterhalb Schwelle Radgeschwindigkeit < 300km/h: F-CAN Radgeschwindigkeit, Kommunikation mit DSC. |
| 0xC998 | C998 - SZL: Fehlereintrag fuer SZL: LWS-Fehler: Signal oder Wert unterhalb Schwelle Radtoleranzabgleich < -5%: F-CAN Radtoleranzabgleich, Kommunikation mit DSC. |
| 0xC99A | C99A - SZL: Fehlereintrag fuer SZL: LWS-Fehler: Signal oder Wert oberhalb Schwelle, nicht belegt Radtoleranzabgleich > 5%: F-CAN Radtoleranzabgleich, Kommunikation mit DSC. |
| 0xC994 | C994 - SZL: Fehlereintrag fuer SZL: LWS-Fehler: Kein Signal oder Wert Timeout (Nachricht in applizierbarer Zeit nicht empfangen): F-CAN Radgeschwindigkeit, Kommunikation mit DSC. |
| 0xC997 | C997 - SZL: Fehlereintrag fuer SZL: LWS-Fehler: Kein Signal oder Wert Timeout (Nachricht in applizierbarer Zeit nicht empfangen): F-CAN Radtoleranzabgleich, Kommunikation mit DSC. |
| 0xC99B | C99B - SZL: Fehlereintrag fuer SZL: LWS-Fehler: Kein Signal oder Wert Timeout (Nachricht in applizierbarer Zeit nicht empfangen): F-CAN Sync. |
| 0xC99C | C99C - SZL: Fehlereintrag fuer SZL: LWS-Fehler: Kein Signal oder Wert Timeout (Nachricht in applizierbarer Zeit nicht empfangen): Keine Kommunikation mit DSC. |
| 0x94E0 | 94E0 - SZL: Fehlereintrag fuer SZL: LWS-Fehler: EEPROM - defekt: Prozessor defekt. |
| 0x9500 | 9500 - SZL: Fehlereintrag fuer SZL: LWS-Fehler: Unterspannung: UBatt < 8.5 V. |
| 0x9501 | 9501 - SZL: Fehlereintrag fuer SZL: LWS-Fehler: Ueberspannung: UBatt > 16,5 V. |
| 0x9510 | 9510 - SZL: Fehlereintrag fuer SZL: LWS-Fehler: FGR/ACC-Schalter haengt(alle tastenden Schalter): mechanisches Problem, Kontakt. |
| 0x9511 | 9511 - SZL: Fehlereintrag fuer SZL: LWS-Fehler: FGR/ACC-Schalter unplausibel: Unzulässige Kombination im Tempomatschalter aufgetreten. |
| 0x9512 | 9512 - SZL: Fehlereintrag fuer SZL: LWS-Fehler: FGR/ACC-Schalter defekt : spannungscodierter Zweig (Abruf / ACC) unterbrochen bzw. Kurzschluß oder LED unterbrochen / kurzgeschlossen. |
| 0x9518 | 9518 - SZL: Fehlereintrag fuer SZL: LWS-Fehler: Scheibenwischerschalter (alle tastenden Schalter): mechanisches Problem, Kontakt. |
| 0x9519 | 9519 - SZL: Fehlereintrag fuer SZL: LWS-Fehler: Scheibenwischerschalter unplausibel: Unzulässige Kombination im Scheibenwischerschalter aufgetreten. |
| 0x951A | 951A - SZL: Fehlereintrag fuer SZL: LWS-Fehler: Scheibenwischerschalter -Schalter defekt : spannungscodierter Zweig (RS / IntervallPoti) unterbrochen bzw. Kurzschluß-LED unterbrochen / Kurzschluß oder LED unterbrochen / kurzgeschlossen. |
| 0x9520 | 9520 - SZL: Fehlereintrag fuer SZL: LWS-Fehler: Audio/Telefontaster: mechanisches Problem, Kontakt. |
| 0x6dd1 | 6DD1 - ECU: ungueltige Durchfuehrungsgeschwindigkeit vom High End Timer HET (z. B. verursacht durch nicht passenden vorskalierten Faktoren vom HET). |
| 0x6dd2 | 6DD2 - ECU: ungueltiger Arbeitszyklus vom High End Timer HET (HetPin 14 wurde mit einem Betriebstest getestet. |
| 0x6dd3 | 6DD3 - Raddrehzahlfuehler vorne links: Fehler beim Vergleich zwischen Geschwindigkeit Raddrehzahlfuehler vorne links (MonCTM) und zweitem Pfad (AS/SCON). |
| 0x6dd4 | 6DD4 - Raddrehzahlfuehler hinten links: Fehler beim Vergleich zwischen Geschwindigkeit Raddrehzahlfuehler hinten links (MonCTM) und zweitem Pfad (AS/SCON). |
| 0x6dd5 | 6DD5 - Raddrehzahlfuehler hinten rechts: Fehler beim Vergleich zwischen Geschwindigkeit Raddrehzahlfuehler hinten rechts (MonCTM) und zweitem Pfad (AS/SCON). |
| 0x6dd6 | 6DD6 - Raddrehzahlfuehler vorne rechts: Fehler beim Vergleich zwischen Geschwindigkeit Raddrehzahlfuehler vorne rechts (MonCTM) und zweitem Pfad (AS/SCON). |
| 0x6dd7 | 6DD7 - Getriebe: Signal ST_RSTA in CAN Bostchaft GETRIEBEDATEN ungueltig. |
| 0x6f52 | 6F52 - CAN-Fehler: Botschaft LENKRADWINKEL_OBEN_2 (0xC9h) fehlt oder falsche Botschaftslaenge (DLC). |
| 0x6dd8 | 6DD8 - Kombi-Fehler: Signal FRC_INTM_WAY_BOS_RSTG_2_F in CAN Botschaft BOS_RUECKSTELLUNG ungueltig. |
| 0x6dd9 | 6DD9 - Kombi-Fehler: Signal FRC_INTM_WAY_BOS_RSTG_2_R in CAN Botschaft BOS_RUECKSTELLUNG ungueltig. |
| 0x6df1 | 6DF1 - Varianten codierung EEPROM Konfiguration VHC ungueltig |
| 0x6df2 | 6DF2 - Getriebefehler:  Signal ST_MOD_GRB in CAN Botschaft Getriebedaten unplausibel |
| 0x6df3 | 6DF3 - ECU intern: VAFS (Value Added Function Server) Versionen inkompatible |
| 0x6df4 | 6DF4 - ECU intern: VAFS (Value Added Function Server) Transfer Timeout |
| 0x6df5 | 6DF5 - ECU intern: VAFS (Value Added Function Server) Data Checksum Fehler |
| 0x6df6 | 6DF6 - ECU intern: VAFS (Value Added Function Server) allgemeiner Spi Fehler |
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
| default | 0x01 | DIGITAL | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Fahrzeuggeschwindigkeit | km/h | High | unsigned int | - | 1 | 16.0 | 0 |
| 0x02 | ACB | 0/1 | - | 0x01 | - | 1 | 1 | 0 |
| 0x03 | DBC | 0/1 | - | 0x02 | - | 1 | 1 | 0 |
| 0x04 | ECD | 0/1 | - | 0x04 | - | 1 | 1 | 0 |
| 0x05 | HDC (nur 4x4) | 0/1 | - | 0x08 | - | 1 | 1 | 0 |
| 0x06 | DSC | 0/1 | - | 0x10 | - | 1 | 1 | 0 |
| 0x07 | ABS | 0/1 | - | 0x20 | - | 1 | 1 | 0 |
| 0x08 | BLS | 0/1 | - | 0x40 | - | 1 | 1 | 0 |
| 0x09 | ASC | 0/1 | - | 0x80 | - | 1 | 1 | 0 |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### DIGITAL

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x02 | 0x03 | 0x04 | 0x05 | 0x06 | 0x07 | 0x08 | 0x09 |

### STG_TABELLE

| SIGNAL | KANAL | HB | LB |
| --- | --- | --- | --- |
| MRA | 0x22 | 0xFF | 0xFF |
| EVVL | 0x30 | 0x00 | 0x55 |
| AVVL | 0x32 | 0x00 | 0x64 |
| EVVR | 0x34 | 0x00 | 0x55 |
| AVVR | 0x36 | 0x00 | 0x64 |
| EVHR | 0x38 | 0x00 | 0x55 |
| AVHR | 0x3A | 0x00 | 0x64 |
| EVHL | 0x3C | 0x00 | 0x55 |
| AVHL | 0x3E | 0x00 | 0x64 |
| USV1 | 0x4E | 0x00 | 0x32 |
| USV2 | 0x50 | 0x00 | 0x32 |
| VLV1 | 0x52 | 0x00 | 0x55 |
| VLV2 | 0x54 | 0x00 | 0x55 |
| 40VLV1 | 0x52 | 0x00 | 0x28 |
| 40VLV2 | 0x54 | 0x00 | 0x28 |
| 0 | 0x00 | 0x00 | 0x00 |
| 00 | 0x00 | 0x00 | 0x00 |

### STEUERN_I_O_EIN

| SIGNAL | KANAL | HB | LB |
| --- | --- | --- | --- |
| MRA | 0x22 | 0xFF | 0xFF |
| EVVL | 0x28 | 0x55 | 0x01 |
| AVVL | 0x2A | 0x64 | 0x02 |
| EVVR | 0x28 | 0x55 | 0x04 |
| AVVR | 0x2A | 0x64 | 0x08 |
| EVHL | 0x28 | 0x55 | 0x10 |
| AVHL | 0x2A | 0x64 | 0x20 |
| EVHR | 0x28 | 0x55 | 0x40 |
| AVHR | 0x2A | 0x64 | 0x80 |
| USV1 | 0x2C | 0x32 | 0x01 |
| USV2 | 0x2C | 0x32 | 0x02 |
| VLV1 | 0x2E | 0x55 | 0x04 |
| VLV2 | 0x2E | 0x55 | 0x08 |
| 40VLV1 | 0x2E | 0x28 | 0x04 |
| 40VLV2 | 0x2E | 0x28 | 0x08 |
| 0 | 0x00 | 0x00 | 0x00 |
| 00 | 0x00 | 0x00 | 0x00 |
| XYZ | 0x00 | 0x00 | 0x00 |

### STEUERN_I_O_AUS

| SIGNAL | KANAL | HB | LB |
| --- | --- | --- | --- |
| MRA | 0x22 | 0x00 | 0x00 |
| EVVL | 0x28 | 0x00 | 0x01 |
| AVVL | 0x2A | 0x00 | 0x02 |
| EVVR | 0x28 | 0x00 | 0x04 |
| AVVR | 0x2A | 0x00 | 0x08 |
| EVHL | 0x28 | 0x00 | 0x10 |
| AVHL | 0x2A | 0x00 | 0x20 |
| EVHR | 0x28 | 0x00 | 0x40 |
| AVHR | 0x2A | 0x00 | 0x80 |
| USV1 | 0x2C | 0x00 | 0x01 |
| USV2 | 0x2C | 0x00 | 0x02 |
| VLV1 | 0x2E | 0x00 | 0x04 |
| VLV2 | 0x2E | 0x00 | 0x08 |
| 0 | 0x00 | 0x00 | 0x00 |
| 00 | 0x00 | 0x00 | 0x00 |
| XYZ | 0x00 | 0x00 | 0x00 |

### RAD_NR_TABELLE

| SIGNAL | BYTE | BYTE_REPAIR |
| --- | --- | --- |
| V_LINKS | 0xA0 | 0x23 |
| V_RECHTS | 0xA2 | 0x24 |
| H_RECHTS | 0xA4 | 0x25 |
| H_LINKS | 0xA6 | 0x22 |

### BOSKENNUNG

| NR | BOS_K | BOS_K_TEXT |
| --- | --- | --- |
| 0x01 | Oel | Ölqualität |
| 0x02 | Br_v | Bremsbelagverschleiss vorne |
| 0x03 | Brfl | Bremsflüssigkeit |
| 0x04 | Filt | Mikrofilter |
| 0x05 | Batt | Batteriezustand |
| 0x06 | Br_h | Bremsbelagverschleiss hinten |
| 0x10 | ZKrz | Zündkerzen |
| 0x11 | Sic | Sichtprüfung |
| 0x12 | Kfl | Kühlflüssigkeit |
| 0x20 | TUV | TÜV |
| 0x21 | AU | AU |

### EEPROM_BELEGUNG

| BLOCK | E90_16 |
| --- | --- |
| ASW | 0x03 |
| SIC_01 | 0x0B |
| SIC_02 | 0x15 |
| SIC_03 | 0x21 |
| SIC_05 | 0xFF |
| SIC_04 | 0x7D |
| SIC_05 | 0x8B |
| SMO_01 | 0x27 |
| SMO_02 | 0x2B |
| SCO_01 | 0x2F |
| SCO_02 | 0x39 |
| SCO_03 | 0x41 |
| BTM | 0x49 |
| CUS_01 | 0x53 |
| CUS_02 | 0x61 |
| CUS_03 | 0x6F |
| CUS_04 | 0x75 |
| AST | 0x91 |
| ERROR_UNKNOWN | 0xXY |

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

### RADDREHRICHTUNG

| BIT | DREHRICHTUNG_VL_TEXT | DREHRICHTUNG_VR_TEXT | DREHRICHTUNG_HL_TEXT | DREHRICHTUNG_HR_TEXT | WERT |
| --- | --- | --- | --- | --- | --- |
| 0x00 | rueckwaerts | rueckwaerts | rueckwaerts | rueckwaerts | 2 |
| 0x01 |  |  |  | vorwaerts | 1 |
| 0x02 |  |  | vorwaerts |  | 1 |
| 0x04 |  | vorwaerts |  |  | 1 |
| 0x08 | vorwaerts |  |  |  | 1 |
| 0xFF | steht | steht | steht | steht | 0 |
| 0xXY | nicht_definiert | nicht_definiert | nicht_definiert | nicht_definiert | 99 |

### CAN_FAHRZUSTAND

| BIT | CAN_FAHRZUSTAND_TEXT | WERT |
| --- | --- | --- |
| 0x00 | Fahrzeug_steht | 1 |
| 0x01 | Fahrzeug_faehrt_vorwaerts | 2 |
| 0x02 | Fahrzeug_faehrt_rueckwaerts | 3 |
| 0x03 | Richtungserkennung_nicht_moeglich | 4 |
| 0x07 | Signal_ungueltig | 5 |
| 0xXY | nicht_definiert | 99 |

### TAB_STEUERN_KUPPLUNG

| BIT | STEUERN_KUPPLUNG_TEXT | WERT |
| --- | --- | --- |
| 0x00 | Kupplung_aktiv | 1 |
| 0x01 | Kupplung_passiv_geschaltet | 2 |
| 0xXY | nicht_definiert | 99 |

### ERGEBNIS_ROUTINE

| BIT | STEUERN_KUPPLUNGS_TEST_TEXT | ENTL_BEF_TEXT | AL_ABGLEICH | WERT |
| --- | --- | --- | --- | --- |
| 0x00 | Funktionspruefung_Kupplung_erfolgreich_ausgefuehrt | Funktion_initialisiert |  | 1 |
| 0x01 |  | Funktion_noch_nicht_beendet | Abgleich_erfolgreich | 3 |
| 0x02 |  | Funktion_beendet |  | 4 |
| 0x04 |  | Funktion_wurde_unterbrochen |  | 5 |
| 0x08 | Funktionspruefung_Kupplung_nicht_o.k. | Fehler_waehrend_der_Ausfuehrung_aufgetreten |  | 2 |
| 0x10 |  | Initialisierung_waehrend_der_Ausfuehrung |  | 6 |
| 0xFF |  |  | Fehler_waehrend_der_Ausfuehrung_aufgetreten | 7 |
| 0xXY | nicht_definiert | nicht_definiert | nicht_definiert | 99 |

### CBS_BBV

| BIT | CBS_BBV_TEXT | WERT |
| --- | --- | --- |
| 0x00 | OK | 1 |
| 0x01 | 1. Schwelle erreicht | 2 |
| 0x02 | nicht OK | 3 |
| 0xFF | Signal nicht verfuegbar | 4 |
| 0xXY | nicht_definiert | 99 |

### ABGLEICH_LWS_ERGEBNIS

| BIT | TEXT | WERT |
| --- | --- | --- |
| 0xFF | Routine_nicht_erfolgreich_beendet_oder_Routine_wurde_nicht_gestartet | 0 |
| 0x01 | Routine_erfolgreich_beendet | 1 |
| 0xXY | kein_Ergebnis | 99 |

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

### AUDIO_TEL

| BIT | TEXT_TASTER_TEL | TEXT_TASTER_AUDIO | TEXT_TASTER_SUCH | TEXT_TASTER_TALK | TEXT_TASTER_HORN | TEXT_TASTER_SONDER | TEXT_TASTER_HEAR | WERT |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x00 | Keine_Aktion | Keine_Aktion | Keine_Aktion | Keine_Aktion | Keine_Aktion | Keine_Aktion | Keine_Aktion | 1 |
| 0x01 | Taster_TEL_gedrueckt |  |  | Taster_PTT_gedrueckt |  |  |  | 2 |
| 0x03 | Signal_ungueltig |  |  | Signal_ungueltig |  |  |  | 4 |
| 0x04 |  | Lautstaerke_leiser |  |  | Taster_HORN_gedrueckt |  |  | 2 |
| 0x08 |  | Lautstaerke_lauter |  |  |  |  |  | 3 |
| 0x0C |  | Signal_ungueltig |  |  | Signal_ungueltig |  |  | 4 |
| 0x10 |  |  | Suchlauf_abwaerts |  |  | Taster_gedrueckt |  | 2 |
| 0x20 |  |  | Suchlauf_aufwaerts |  |  |  |  | 3 |
| 0x30 |  |  | Signal_ungueltig |  |  | Signal_ungueltig |  | 4 |
| 0x40 |  |  |  |  |  |  | Taster_PTH_gedrueckt | 2 |
| 0xC0 |  |  |  |  |  |  | Signal_ungueltig | 4 |
| 0xXY | nicht_definiert | nicht_definiert | nicht_definiert | nicht_definiert | nicht_definiert | nicht_definiert | nicht_definiert | 99 |

### TEMP_ACC

| BIT | TEXT_TASTER | TEXT_ABSTAND | TEXT_MODUS | WERT |
| --- | --- | --- | --- | --- |
| 0x00 | Keine_Aktion | Keine_Aktion | Taster_Mode_Wahl_nicht_gedrueckt | 1 |
| 0x01 | Tippen_nach_vorne | Tippen_nach_oben |  | 2 |
| 0x02 | Ueberdruecken_nach_vorne | Tippen_nach_unten |  | 3 |
| 0x03 |  | Signal_ungueltig |  | 4 |
| 0x04 | Tippen_nach_hinten |  | Taster_Mode_Wahl_gedrueckt | 4 |
| 0x08 | Ueberdruecken_nach_hinten |  |  | 5 |
| 0x0C |  |  | Signal_ungueltig | 3 |
| 0x10 | Tippen_nach_unten |  |  | 6 |
| 0x40 | Axial_Tippen |  |  | 7 |
| 0x90 | Tippen_nach_oben |  |  | 8 |
| 0xFF | Signal_ungueltig |  |  | 9 |
| 0xXY | nicht_definiert | nicht_definiert | nicht_definiert | 99 |

### WISCHER

| BIT | TEXT_TASTER | TEXT_POTI | WERT |
| --- | --- | --- | --- |
| 0x00 | Keine_Aktion | Stufe_1 | 1 |
| 0x01 | Intervall/Automatik | Stufe_2 | 2 |
| 0x02 | Stufe_1 | Stufe_3 | 3 |
| 0x03 | Stufe_2 |  | 4 |
| 0x04 |  | Stufe_4 | 4 |
| 0x07 |  | Signal_ungueltig | 5 |
| 0x08 | Tippwischen |  | 5 |
| 0x10 | Frontwaschen |  | 6 |
| 0x40 | Heckwischen |  | 7 |
| 0x80 | Heckwaschen |  | 8 |
| 0xFF | Signal_ungueltig |  | 9 |
| 0xXY | nicht_definiert | nicht_definiert | 99 |

### BOSCH_TTNR1

| ASCII | ZAHL | BEZEICHNUNG |
| --- | --- | --- |
| A | 0265 | ABS_SG |
| B | 0265 | NFZ_SG |
| C | 0265 | ASR_SG |
| D | 0265 | LK5_ABS/ASR/FDR/EHB_LP |
| E | 0265 | LWS |
| F | 0265 | ABS8/ASR8/ESP8 |
| G | 0260 | GS_SG |
| H | 0273 | GA7_SG |
| I | 0265 | Gx8_SG/EHB_HY |
| J |  |  |
| K | 0285 | AB_SG |
| L |  |  |
| M | 0486 | NFZ_SG |
| N | 0504 | Niveau_R. |
| O |  |  |
| P |  |  |
| Q |  |  |
| R |  |  |
| S | 2269 | NFZ/ORM_Interim |
| T | 2261 | EHB_HY |
| U | 2265 | EHB_HY |
| V | 1487 | NFZ/DRM |
| W | 9285 | AB_Interim |
| X | 9265 | ABS/FDR_Interim |
| Y | 2267 | NFZ_Baugr. |
| Z |  |  |

### BOSCH_TTNR2

| ASCII | ZAHL |
| --- | --- |
| A | 800 |
| B | 900 |
| C | 950 |
| D | 960 |
| E | 032 |
| F | 106 |

### BOSCH

| ASCII | ZAHL |
| --- | --- |
| 0 | 0 |
| 1 | 1 |
| 2 | 2 |
| 3 | 3 |
| 4 | 4 |
| 5 | 5 |
| 6 | 6 |
| 7 | 7 |
| 8 | 8 |
| 9 | 9 |
| A | 10 |
| B | 11 |
| C | 12 |
| D | 13 |
| E | 14 |
| F | 15 |
| G | 16 |
| H | 17 |
| I | 18 |
| J | 19 |
| K | 20 |
| L | 21 |
| M | 22 |
| N | 23 |
| O | 24 |
| P | 25 |
| Q | 26 |
| R | 27 |
| S | 28 |
| T | 29 |
| U | 30 |
| V | 31 |
| W | 32 |
| X | 33 |
| Y | 34 |
| Z | 35 |

### WERKSKENNZAHL

| ZAHL | WERK |
| --- | --- |
| 1 | ANDERSON |
| 2 | ANSBACH |
| 3 | TOCHIGI |

### SCHICHTKENNZEICHEN

| KENNZEICHEN | LINIE | SCHICHT |
| --- | --- | --- |
| A | 1 | 1 |
| B | 1 | 2 |
| C | 1 | 3 |
| D | 2 | 1 |
| E | 2 | 2 |
| F | 2 | 3 |
| G | 3 | 1 |
| H | 3 | 2 |
| I | 3 | 3 |
| J | 4 | 1 |
| K | 4 | 2 |
| L | 4 | 3 |
