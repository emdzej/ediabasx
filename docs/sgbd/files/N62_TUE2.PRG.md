# N62_TUE2.PRG

## General

|  |  |
| --- | --- |
| File | N62_TUE2.PRG |
| Type | PRG |
| Jobs | 255 |
| Tables | 54 |
| Origin | BMW EA-41 Holger Dieffenbach |
| Revision | 1.000 |
| Author | ValleyForge-T.I.S. EA-41 Wieser |
| ECU Comment | SGBD fuer ME9.2.3 mit SW 733W4000 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | ME9.2.3 fuer N62 mit EWS3 oder CAS  |  |  |
| ORIGIN | string | BMW EA-41 Holger Dieffenbach |  |  |
| REVISION | string | 1.000 |  |  |
| AUTHOR | string | ValleyForge-T.I.S. EA-41 Wieser |  |  |
| COMMENT | string | SGBD fuer ME9.2.3 mit SW 733W4000 |  |  |
| PACKAGE | string | 1.31 |  |  |
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
| CBS_KENNUNG | string | gewuenschte CBS-Kennung table CbsKennung CBS_K CBS_K_TEXT Werte Kombi-Umfaenge: Brfl, ZKrz, Sic, Kfl, TUV, AU, Ueb Werte externe Umfaenge: Oel, Br_v, Br_h, Filt, CSF, Batt, VTG, ZKrz_a, DAD Defaultwert: 0x00 (ungueltig) |
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

### _STATUS_BZEINFO

0x22401A _STATUS_BZEINFO Infospeicher Batterie Zustands Erkennung (BZE) auslesen Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### _STATUS_GENINFO

0x22401B _STATUS_GENINFO Infospeicher Generatordiagnose erweitert auslesen Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### DATA_ID_LESEN

0x222504 DATA_ID_LESEN Data-ID des SG auslesen Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### PROGSTAND_LONG_LESEN

0x222504 PROGSTAND_LONG_LESEN Programmstand-Nr. des SG auslesen Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### IDENT_AIF

0x1A80 und 0x23 IDENT_AIF Identdaten und Anwender Informations Felder Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_POWER_DOWN

Anforderung Power Down Mode

_No arguments._

### STATUS_CODIERUNG_BZE

0x223230 STATUS_CODIERUNG_BZE Codierung fuer BZE (Batterie Zustands Erkennung) auslesen Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_CODIERUNG_IGR

0x223210 STATUS_CODIERUNG_IGR Codierung fuer IGR (Intelligente Generator-Regelung) auslesen Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_CODIERUNG_KAT

0x223001 STATUS_CODIERUNG_KAT Codierung fuer Katalysator auslesen Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_CODIERUNG_MIL

0x223000 STATUS_CODIERUNG_MIL Codierung fuer MIL (Malfunction Indication Lamp) auslesen Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_CODIERUNG_OEL

0x223200 STATUS_CODIERUNG_OEL Codierung fuer Oelwechselintervall auslesen Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_CODIERUNG_PROTOKOLL

0x223030 STATUS_CODIERUNG_PROTOKOLL Codierung Protokoll auslesen Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_CODIERUNG_SPA

0x223220 STATUS_CODIERUNG_SPA Codierung fuer SPA (Schaltpunktanzeige) auslesen Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_CODIERUNG_VMAX

0x223010 STATUS_CODIERUNG_VMAX Codierung fuer maximale Geschwindigkeit auslesen Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_CODIERUNG_XENON

0x223211 STATUS_CODIERUNG_XENON Codierung fuer Xenon-Lichtverbau auslesen Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_RBMMODE9

0x224026 STATUS_RBMMODE9 Rate Based Monitoring Mode 9 auslesen (Ausgabe der Werte wie im Scantool Mode 9) Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_RBMME1

0x224029 STATUS_RBMME1 Lesen der RBM-Werte Block1 Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_RBMME2

0x22402A STATUS_RBMME2 Lesen der RBM-Werte Block2 Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_VVT_ANSCHLAG

0x312706 STEUERN_VVT_ANSCHLAG Lernen der VVT-Anschlaege Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_VVT_ANSCHLAG

0x211B STATUS_VVT_ANSCHLAG Status Lernen VVT-Anschlaege Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STOP_VVT_ANSCHLAG

0x322706 STOP_VVT_ANSCHLAG Ende von Lernen der VVT-Anschlaege Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### FS_HEX_LESEN

0x210A0000 FS_HEX_LESEN Fehlerspeicher auslesen als Hex Dump Aktivierung: Klemme 15 = EIN Activation:

| Name | Type | Description |
| --- | --- | --- |
| FEHLERNR | int | wird die Nummer des zu lesenden Fehlers im Fehlerspeicher uebergeben |

### FS_LESEN_LANG

0x210A0000 FS_LESEN_LANG Fehlerspeicher auslesen Aktivierung: Klemme 15 = EIN Activation:

| Name | Type | Description |
| --- | --- | --- |
| FEHLERNR | int | wird die Nummer des zu lesenden Fehlers uebergeben |

### STEUERN_EV_1

0x30CB07FF STEUERN_EV_1 Stellgliedansteuerung Einspritzventile Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_EV_2

0x30CC07FF STEUERN_EV_2 Stellgliedansteuerung Einspritzventile Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_EV_3

0x30CD07FF STEUERN_EV_3 Stellgliedansteuerung Einspritzventile Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_EV_4

0x30CE07FF STEUERN_EV_4 Stellgliedansteuerung Einspritzventile Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_EV_5

0x30CF07FF STEUERN_EV_5 Stellgliedansteuerung Einspritzventile Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_EV_6

0x30D107FF STEUERN_EV_6 Stellgliedansteuerung Einspritzventile Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_EV_7

0x30D207FF STEUERN_EV_7 Stellgliedansteuerung Einspritzventile Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_EV_8

0x30D307FF STEUERN_EV_8 Stellgliedansteuerung Einspritzventile Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_EV_1_AUS

0x30CB00 STEUERN_EV_1_AUS Stellgliedansteuerung Einspritzventile Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_EV_2_AUS

0x30CC00 STEUERN_EV_2_AUS Stellgliedansteuerung Einspritzventile Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_EV_3_AUS

0x30CD00 STEUERN_EV_3_AUS Stellgliedansteuerung Einspritzventile Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_EV_4_AUS

0x30CE00 STEUERN_EV_4_AUS Stellgliedansteuerung Einspritzventile Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_EV_5_AUS

0x30CF00 STEUERN_EV_5_AUS Stellgliedansteuerung Einspritzventile Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_EV_6_AUS

0x30D100 STEUERN_EV_6_AUS Stellgliedansteuerung Einspritzventile Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_EV_7_AUS

0x30D200 STEUERN_EV_7_AUS Stellgliedansteuerung Einspritzventile deaktivieren Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_EV_8_AUS

0x30D300 STEUERN_EV_8_AUS Stellgliedansteuerung Einspritzventile Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_E_LUEFTER

0x30C10700 STEUERN_E_LUEFTER Stellgliedansteuerung E-Luefter Aktivierung: Klemme 15 = EIN Activation:

| Name | Type | Description |
| --- | --- | --- |
| TASTRATE | int | zwischen 0 und 100 % Ansteuerverhaeltins |

### STEUERN_E_LUEFTER_AUS

0x30C100 STEUERN_E_LUEFTER_AUS Stellgliedansteuerung E-Luefter Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### START_SYSTEMCHECK_TEV

0x312200 START_SYSTEMCHECK_TEV Systemtest von TEV Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_SYSTEMCHECK_TEV

0x2112 STATUS_SYSTEMCHECK_TEV Status Systemtest TEV Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STOP_SYSTEMCHECK_TEV

0x322200 STOP_SYSTEMCHECK_TEV Beenden von TEV-Systemtest Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_TEV_AUS

0x30C500 STEUERN_TEV_AUS Stellgliedansteuerung TEV vom Tester an DME freigeben Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_TEV

0x30C50704 STEUERN_TEV Stellgliedansteuerung TEV Aktivierung: Klemme 15 = EIN Activation:

| Name | Type | Description |
| --- | --- | --- |
| ANSTEUERRATE | int | Sollwert 0 - 100% |

### STEUERN_KFK

0x30C307FF STEUERN_KFK Stellgliedansteuerung KFK Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_KFK_AUS

0x30C300 STEUERN_KFK_AUS Stellgliedansteuerung KFK Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_MIL

0x30F107FF STEUERN_MIL Ansteuerung MIL (MIL blinken) Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_MIL_AUS

0x30F100 STEUERN_MIL_AUS Beenden der MIL-Ansteuerung Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_EML

0x30F307FF STEUERN_EML Stellgliedansteuerung EML Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_EML_AUS

0x30F300 STEUERN_EML_AUS Beenden der Stellgliedansteuerung EML Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_EKP

0xC607FF STEUERN_EKP Stellgliedansteuerung EKP Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_EKP_AUS

0x30C600 STEUERN_EKP_AUS Stellgliedansteuerung EKP Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_HLS1

0x30C70705 STEUERN_HLS1 Stellgliedansteuerung Lambdasondenheizung 1 Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_HLS1_AUS

0x30C700 STEUERN_HLS1_AUS Stellgliedansteuerung Lambdasondeheizung 1 aus Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_HLS2

0x30C80705 STEUERN_HLS2 Stellgliedansteuerung Lambdasondenheizung 2 Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_HLS2_AUS

0x30C800 STEUERN_HLS2_AUS Stellgliedansteuerung Lambdasondeheizung 2 aus Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_HLS3

0x30C90705 STEUERN_HLS3 Stellgliedansteuerung Lambdasondenheizung 3 Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_HLS3_AUS

0x30C900 STEUERN_HLS3_AUS Stellgliedansteuerung Lambdasondeheizung 3 aus Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_HLS4

0x30CA0705 STEUERN_HLS4 Stellgliedansteuerung Lambdasondenheizung 4 Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_HLS4_AUS

0x30CA00 STEUERN_HLS4_AUS Stellgliedansteuerung Lambdasondeheizung 4 aus Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_EBL

0x30D807FF STEUERN_EBL Stellgliedansteuerung E-Box-Luefter Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_EBL_AUS

0x30D800 STEUERN_EBL_AUS Stellgliedansteuerung E-Box-Luefter aus Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_AGK

0x30D90700 STEUERN_AGK Stellgliedansteuerung Abgasklappe Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_AGK_AUS

0x30D900 STEUERN_AGK_AUS Stellgliedansteuerung Abgasklappe aus Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_DMTLP

0x30DA07FF STEUERN_DMTLP Stellgliedansteuerung DM-TL Pumpe Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_DMTLP_AUS

0x30DA00 STEUERN_DMTLP_AUS Stellgliedansteuerung DM-TL Pumpe aus Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_DMTLV

0x30DB07FF STEUERN_DMTLV Stellgliedansteuerung DM-TL Ventil Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_DMTLV_AUS

0x30DB00 STEUERN_DMTLV_AUS Stellgliedansteuerung DM-TL Ventil aus Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_DMTLH

0x30F407FF STEUERN_DMTLH Ansteuerung DMTL-Heizung (nur bei US-Fahrzeugen) Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_DMTLH_AUS

0x30F400 STEUERN_DMTLH_AUS Beenden Ansteuerung DMTL-Heizung Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### RAM_BACKUP

0x31E900 RAM_BACKUP Loeschen der RAM-Backup-Werte Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_ZWANG_RAMBACKUP

0x31F200 STEUERN_ZWANG_RAMBACKUP Zwangssichern der RAM-Backup-Werte Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### START_SYSTEMCHECK_LLERH

0x312600 START_SYSTEMCHECK_LLERH Diagnosefunktion LL-Erhoehung Aktivierung: Klemme 15 = EIN Activation:

| Name | Type | Description |
| --- | --- | --- |
| LL_WERT | int | Eingabewert: 0...1200 wg. Begr. i. PST sind nur Werte zw. 400 Upmin u. 1200 Upmin wirksam |

### STATUS_SYSTEMCHECK_LLERH

0x2116 STATUS_SYSTEMCHECK_LLERH Diagnosefunktion LL-Erhoehung Status lesen Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STOP_SYSTEMCHECK_LLERH

0x322600 STOP_SYSTEMCHECK_LLERH Diagnosefunktion LL-Erhoehung Status lesen Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### START_SYSTEMCHECK_DMTL

0x31DA00 START_SYSTEMCHECK_DMTL Start Systemtest DMTL Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_SYSTEMCHECK_DMTL

0x2119 STATUS_SYSTEMCHECK_DMTL Status Systemtest DMTL Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STOP_SYSTEMCHECK_DMTL

0x32DA00 STOP_SYSTEMCHECK_DMTL Ende Systemtest DM-TL Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_VANOS_EINLASS

0x30E30700 STEUERN_VANOS_EINLASS Stellgliedansteuerung Einlass-VANOS Aktivierung: Klemme 15 = EIN Activation:

| Name | Type | Description |
| --- | --- | --- |
| WINKEL | real | gibt den Verstellwinkel an (-102..102) |

### STEUERN_VANOS_EINLASS_AUS

0x30E300 STEUERN_VANOS_EINLASS_AUS Stellgliedansteuerung Einlass-VANOS freigeben Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_VANOS_AUSLASS

0x30E40700 STEUERN_VANOS_AUSLASS Stellgliedansteuerung Auslass-VANOS Aktivierung: Klemme 15 = EIN Activation:

| Name | Type | Description |
| --- | --- | --- |
| WINKEL | real | gibt den Verstellwinkel an (-102..102) |

### STEUERN_VANOS_AUSLASS_AUS

0x30E400 STEUERN_VANOS_AUSLASS_AUS Stellgliedansteuerung Auslass-VANOS freigeben Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_DISA

0x30E60700 STEUERN_DISA Stellgliedansteuerung DISA Aktivierung: Klemme 15 = EIN Activation:

| Name | Type | Description |
| --- | --- | --- |
| WINKEL | int | gibt den Verstellwinkel an (0..100) |

### STEUERN_DISA_AUS

0x30E600 STEUERN_DISA_AUS Stellgliedansteuerung DISA freigeben Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_EVAUSBL

0x312500 STEUERN_EVAUSBL Systemdiagnose Einspritzventile ausblenden Aktivierung: Klemme 15 = EIN Activation:

| Name | Type | Description |
| --- | --- | --- |
| VENTIL_NR | int | Ausblendung Einspritzventile evz_austot   Min: 0 Max: 255 |

### STEUERN_EVAUSBL_AUS

0x322500 STEUERN_EVAUSBL_AUS Ende Systemtest Einspritzventile ausblenden Aktivierung: Klemme 15 = EIN Activation:

| Name | Type | Description |
| --- | --- | --- |
| VENTIL_NR | int | gibt die Ventile (binaer, jedes Bit ein EV) an, die ausgeblendet werden |

### STATUS_MESSWERTE

0x224000 STATUS_MESSWERTE Auslesen von Messwerten Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_MESSWERTE_OEL

0x224000 STATUS_MESSWERTE_OEL Auslesen von Oelwerten Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_BATTERIEINTEGRATOR

0x224001 STATUS_BATTERIEINTEGRATOR Auslesen des Batterie-Ladezustands Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_SCHALTERSTATI

0x224002 STATUS_SCHALTERSTATI Auslesen von SchalterStatusflags Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_FUNKTIONSSTATI

0x224007 STATUS_FUNKTIONSSTATI Auslesen der Funktionsstati Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_LAUFUNRUHE

0x224003 STATUS_LAUFUNRUHE Auslesen von Laufunruhewerten Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_DKHFM

0x224008 STATUS_DKHFM Auslesen von DK/HFM-Abgleichswerten Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_VVT

0x30DD07 STEUERN_VVT VVT ansteuern Aktivierung: Klemme 15 = EIN Activation:

| Name | Type | Description |
| --- | --- | --- |
| SW_PHY_VVT_WERT | real | SW_PHY_VVT_WERT = Vorgabewert (0..180) |

### STEUERN_VVT_AUS

0x30EE00 STEUERN_VVT_AUS beenden Stellgliedansteuerung VVT Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_VVT_ENABLE

0x30E707FF STEUERN_VVT_ENABLE Generieren eines Testsignals auf der VVT-Enable-Leitung Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_VVT_ENABLE_AUS

0x30E700 STEUERN_VVT_ENABLE_AUS Testsignal von VVT-Enable-Leitung zurücknehmen Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_CO_ABGLEICH

0x30A201 STATUS_CO_ABGLEICH Auslesen des LL-CO-Wertes Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_CO_ABGLEICH_VERSTELLEN

0x30A20700 STEUERN_CO_ABGLEICH_VERSTELLEN LL-CO-Wert vorgeben Aktivierung: Klemme 15 = EIN Activation:

| Name | Type | Description |
| --- | --- | --- |
| CO_WERT | int | LL CO-Abgleichswert |

### STEUERN_CO_ABGLEICH_PROGRAMMIEREN

0xA20800 STEUERN_CO_ABGLEICH_PROGRAMMIEREN LL-CO-WERT programmieren Aktivierung: Klemme 15 = EIN Activation:

| Name | Type | Description |
| --- | --- | --- |
| CO_FEST | int | LL CO-Abgleichswert |

### STATUS_GEMISCH

0x224004 STATUS_GEMISCH Auslesen von Gemischwerten Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_AUSGAENGE

0x224005 STATUS_AUSGAENGE Auslesen von Ausgaengen Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_NOCKENWELLE_ADAPTION

0x224006 STATUS_NOCKENWELLE_ADAPTION Auslesen der NWG-Adaptionen Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### ECU_CONFIG

0x30A801 ECU_CONFIG Auslesen der Variante Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### ECU_CONFIG_RESET

0x30A804 ECU_CONFIG_RESET Loeschen der Varianten Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_KVA

0x21C1 STATUS_KVA Auslesen Faktor KVA Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_KVA

0x3BC100 STEUERN_KVA Korrekturfaktor Kraftstoffverbrauch kva_korr programmieren Aktivierung: Klemme 15 = EIN Activation:

| Name | Type | Description |
| --- | --- | --- |
| KVA_WERT | int | Wertebereich Übergabeparameter: -128 ... 127 kva_korr = KVA_WERT \ 1000 zB: KVA_WERT = -55   => kva_korr = -0.055% |

### STATUS_READINESS

0x2105 STATUS_READINESS Auslesen des Readinessbyte Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_FGR

0x2107 STATUS_FGR Auslesen der FGR-Stati Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_LL_ABGLEICH

0x30A107 STEUERN_LL_ABGLEICH Abgleichwert LL (Leerlauf) vorgeben Aktivierung: Klemme 15 = EIN UND Leerlauf = EIN Activation:

| Name | Type | Description |
| --- | --- | --- |
| STAT_DNLLMV_WERT | long | Abgleichswert LL DNLLMV   Einheit: 1/min   Min: -128 Max: 127 |
| STAT_DNSACMV_WERT | long | Abgleichswert LL mit Klimaanlage DNSACMV   Einheit: 1/min   Min: -128 Max: 127 |
| STAT_DNSLBV_WERT | long | Abgleichswert LL mit niedriger Batteriespannung DNSLBV   Einheit: 1/min   Min: -128 Max: 127 |
| STAT_DNFSACMV_WERT | long | Abgleichswert LL mit Klima und Fahrbedingung DNFSACMV   Einheit: 1/min   Min: -128 Max: 127 |
| STAT_DNFSMV_WERT | long | Abgleichswert LL mit Fahrstufe DNFSMV   Einheit: 1/min   Min: -128 Max: 127 |

### STEUERN_LLABG_PROG

0x30A108 STEUERN_LLABG_PROG Abgleichwert LL (Leerlauf) programmieren Aktivierung: Klemme 15 = EIN UND Leerlauf = EIN Activation:

| Name | Type | Description |
| --- | --- | --- |
| STAT_DNLLMV_WERT | long | Abgleichswert LL DNLLMV   Einheit: 1/min   Min: -128 Max: 127 |
| STAT_DNSACMV_WERT | long | Abgleichswert LL mit Klimaanlage DNSACMV   Einheit: 1/min   Min: -128 Max: 127 |
| STAT_DNSLBV_WERT | long | Abgleichswert LL mit niedriger Batteriespannung DNSLBV   Einheit: 1/min   Min: -128 Max: 127 |
| STAT_DNFSACMV_WERT | long | Abgleichswert LL mit Klima und Fahrbedingung DNFSACMV   Einheit: 1/min   Min: -128 Max: 127 |
| STAT_DNFSMV_WERT | long | Abgleichswert LL mit Fahrstufe DNFSMV   Einheit: 1/min   Min: -128 Max: 127 |

### STATUS_LL_ABGLEICH

0x225FF0 STATUS_LL_ABGLEICH Abgleichwert LL (Leerlauf) auslesen Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_LRP

0x30F601 STATUS_LRP Auslesen Funktionseingriffe bei der Laufruheprüfung Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_LRP

0x30F607 STEUERN_LRP Funktionseingriffe für die Laufruheprüfung vorgeben Aktivierung: Klemme 15 = EIN Activation:

| Name | Type | Description |
| --- | --- | --- |
| HUBEINGRIFF_INAKTIV | int | zyl.selektiver Hubeingriff (1=deaktiviert, 0=aktiviert) |
| MINHUBEINGRIFF_INAKTIV | int | Minhubeingriff (1=deaktiviert, 0=aktiviert) |
| ZUENDWINKELEINGRIFF_INAKTIV | int | Zuendwinkeleingriff (1=deaktiviert, 0=aktiviert) |
| GEMISCHEINGRIFF_INAKTIV | int | Gemischeingriff (1=deaktiviert, 0=aktiviert) |

### STEUERN_LRP_AUS

0x30F600 STEUERN_LRP_AUS Vorgabe Funktionseingriffe für die Laufruheprüfung stoppen Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_PROGRAMM_LRP

0x30F608 STEUERN_PROGRAMM_LRP Prüfeingriffe für die Laufruheprüfung programmieren Aktivierung: Klemme 15 = EIN Activation:

| Name | Type | Description |
| --- | --- | --- |
| HUBEINGRIFF_INAKTIV | int | zyl.selektiver Hubeingriff (1=deaktiviert, 0=aktiviert) |
| MINHUBEINGRIFF_INAKTIV | int | Minhubeingriff (1=deaktiviert, 0=aktiviert) |
| ZUENDWINKELEINGRIFF_INAKTIV | int | Zuendwinkeleingriff (1=deaktiviert, 0=aktiviert) |
| GEMISCHEINGRIFF_INAKTIV | int | Gemischeingriff (1=deaktiviert, 0=aktiviert) |

### STATUS_MESSWERTE_LRP

0x22402D STATUS_MESSWERTE_LRP Ausgelesen der Messwerte Laufruheprüfung Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_MESSWERTE_VVT

0x22400B STATUS_MESSWERTE_VVT VVT Messwerte auslesen Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_FASTA1

0x22400C STATUS_FASTA1 Auslesen FASTA-Messwertblock 1 Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_FASTA2

0x22400D STATUS_FASTA2 Auslesen FASTA-Messwertblock 2 Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_FASTA3

0x22400E STATUS_FASTA3 Auslesen FASTA-Messwertblock 3 Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_FASTA4

0x22400F STATUS_FASTA4 Auslesen FASTA-Messwertblock 4 Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_FASTA5

0x224010 STATUS_FASTA5 Auslesen FASTA-Messwertblock 5 Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_FASTA6

0x224011 STATUS_FASTA6 Auslesen FASTA-Messwertblock 6 Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_FASTA7

0x224012 STATUS_FASTA7 Auslesen FASTA-Messwertblock 7 Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_FASTA10

0x224015 STATUS_FASTA10 Auslesen FASTA-Messwertblock 10 Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_MESSWERTBLOCK_ADC

0x304101 STATUS_MESSWERTBLOCK_ADC Auslesen ADC-Werte Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### START_SYSTEMCHECK_LSU

0x31E800 START_SYSTEMCHECK_LSU Systemdiagnose LSU starten Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_SYSTEMCHECK_LSU

0x2125 STATUS_SYSTEMCHECK_LSU Status Systemdiagnose LSU Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_SYSTEMCHECK_LSU_NEU

0x2125 STATUS_SYSTEMCHECK_LSU_NEU Status Systemdiagnose LSU Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STOP_SYSTEMCHECK_LSU

0x32E800 STOP_SYSTEMCHECK_LSU Ende Systemdiagnose LSU Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### START_SYSTEMCHECK_KAT

0x31EB00 START_SYSTEMCHECK_KAT Systemdiagnose KAT Aktivierung: Klemme 15 = EIN Activation:

| Name | Type | Description |
| --- | --- | --- |
| BANK | int | selektiert die Bank aus (1--> Bank 1, 2--> Bank 2, 3--> Bank 1 und 2) |

### STATUS_SYSTEMCHECK_KAT

0x211C STATUS_SYSTEMCHECK_KAT Status Systemtest KAT Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STOP_SYSTEMCHECK_KAT

0x32EB00 STOP_SYSTEMCHECK_KAT Ende Systemdiagnose KAT Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_DIAGNOSE_LSV

0x31402C45 und 0x31402C46 STATUS_DIAGNOSE_LSV Status LSV-Diagnose auslesen Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### START_SYSTEMCHECK_LSH

0x31ED00 START_SYSTEMCHECK_LSH Start der Systemdiagnose LSH Aktivierung: Klemme 15 = EIN Activation:

| Name | Type | Description |
| --- | --- | --- |
| BANK | int | selektiert die Bank aus (1--> Bank 1, 2--> Bank 2, 3--> Bank 1 und 2) |

### STATUS_SYSTEMCHECK_LSH

0x31402C71 und 0x31402C72 STATUS_SYSTEMCHECK_LSH Status LSH-Diagnose auslesen Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STOP_SYSTEMCHECK_LSH

0x32ED00 STOP_SYSTEMCHECK_LSH Ende der Systemdiagnose LSH Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### START_SYSTEMCHECK_GRUNDADAPT

0x313200 START_SYSTEMCHECK_GRUNDADAPT Systemdiagnose Grundadaptionenen Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_SYSTEMCHECK_GRUNDADAPT

0x2127 STATUS_SYSTEMCHECK_GRUNDADAPT Status Systemdiagnose Grundadaptionen starten Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STOP_SYSTEMCHECK_GRUNDADAPT

0x323200 STOP_SYSTEMCHECK_GRUNDADAPT Ende Systemdiagnose Grundadaptionen starten Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### START_SYSTEMCHECK_GEMISCHADAPT_SPERR

0x31D800 START_SYSTEMCHECK_GEMISCHADAPT_SPERR Systemdiagnose Gemischadaptionen sperren Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STOP_SYSTEMCHECK_GEMISCHADAPT_SPERR

0x32D800 STOP_SYSTEMCHECK_GEMISCHADAPT_SPERR Ende Systemdiagnose Gemischadaptionen sperren Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### START_SYSTEMCHECK_LAMBDA_AUS

0x31D900 START_SYSTEMCHECK_LAMBDA_AUS Systemdiagnose Labdaregelung aus Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_SYSTEMCHECK_LAMBDA_AUS

0x2118 STATUS_SYSTEMCHECK_LAMBDA_AUS Status Systemdiagnose Lambdaregelung aus Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STOP_SYSTEMCHECK_LAMBDA_AUS

0x32D900 STOP_SYSTEMCHECK_LAMBDA_AUS Ende Systemdiagnose Lambdaregelung aus Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### START_SYSTEMCHECK_KOMPRESSION

0x31F300 START_SYSTEMCHECK_KOMPRESSION Systemdiagnose Kompressionstest Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STOP_SYSTEMCHECK_KOMPRESSION

0x32F300 STOP_SYSTEMCHECK_KOMPRESSION Ende Systemdiagnose Kompressiostest Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_RUHESTROMMESSUNG

0x312B STEUERN_RUHESTROMMESSUNG Ansteuern Ruhestrompruefung mit IBS Aktivierung: Klemme 15 = EIN Activation:

| Name | Type | Description |
| --- | --- | --- |
| I_MAX_WERT | real | Max. Ruhestromschwelle (Eco_max_i) Eco_max_i   Einheit: A   Min: 0 Max: 0.3187 |
| MSB_WERT | real | Ecos Messtartbedingung (Eco_msb) Eco_msb   Einheit: s   Min: 0 Max: 12.75 |
| MZ_WERT | real | Dauer Mittelwertmessung (Eco_mz) Eco_mz   Einheit: s   Min: 0 Max: 12.75 |
| TO_WERT | unsigned long | Ecos Messung Timeout (Eco_timo) Eco_timo   Einheit: s   Min: 0 Max: 255 |

### STATUS_RUHESTROMMESSUNG

0x332B STATUS_RUHESTROMMESSUNG Auslesen Ruhestrompruefung mit IBS Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### START_SYSTEMCHECK_GLF

0x31D5 START_SYSTEMCHECK_GLF Start Systemcheck 'geführte Luftsteuerung' Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STOP_SYSTEMCHECK_GLF

0x32D5 STOP_SYSTEMCHECK_GLF Systemcheck 'geführte Luftsteuerung' beenden Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_SYSTEMCHECK_GLF

0x33D5 STATUS_SYSTEMCHECK_GLF Stati Systemcheck 'geführte Luftsteuerung' Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_GLF

0x30ED07FF000A STEUERN_GLF Stellgliedansteuerung GLF (obere Klappe) Aktivierung: Klemme 15 = EIN Activation:

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_GLF_WERT | int | Klappe auf = 1, Klappe zu = 0 |

### STEUERN_ENDE_GLF

0x30ED00 STEUERN_ENDE_GLF Ansteuerung GLF (obere Klappe) beenden Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_GLF

0x30ED01 STATUS_GLF Status obere und untere Klappe Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_GLF2

0x30BE07FF000A STEUERN_GLF2 Stellgliedansteuerung GLF2 (untere Klappe) Aktivierung: Klemme 15 = EIN Activation:

| Name | Type | Description |
| --- | --- | --- |
| SW_TV_GLF2_WERT | int | Klappe auf = 1, Klappe zu = 0 |

### STEUERN_ENDE_GLF2

0x30BE00 STEUERN_ENDE_GLF2 Stellgliedansteuerung GLF beenden Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_GLF2

0x30BE01 STATUS_GLF2 Status obere und untere Klappe Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_DISA_ANSCHLAG

0x31E600 STEUERN_DISA_ANSCHLAG lernen der DISA-Anschlaege Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_DISA_ANSCHLAG

0x212A STATUS_DISA_ANSCHLAG Status Lernen der DISA-Anschlaege Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STOP_DISA_ANSCHLAG

0x32E600 STOP_DISA_ANSCHLAG Ende des Lernes DISA-Anschlaege Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_MINHUB

0x30A301 STATUS_MINHUB Auslesen VVT-Minhub Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_MINHUB

0x22400F STEUERN_MINHUB VVT-Minhub vorgeben Aktivierung: Klemme 15 = EIN Activation:

| Name | Type | Description |
| --- | --- | --- |
| MINHUB | int | Vorsteuerwert minhubvs_w in tausendstel Milimeter |

### STEUERN_MINHUB_PROGRAMM

0x30A308010000 STEUERN_MINHUB_PROGRAMM Programmieren VVT-Minhub Aktivierung: Klemme 15 = EIN Activation:

| Name | Type | Description |
| --- | --- | --- |
| MINHUB | int | zu programmierender Wert minhubvs_w in tausendstel Milimeter |

### STATUS_BANKABGLEICH

0x30A401 STATUS_BANKABGLEICH Auslesen des VVT-Bankabgleiches Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_BANKABGLEICH_PROGRAMM

0x30A408010000 STEUERN_BANKABGLEICH_PROGRAMM Programmieren des Winkeloffset Excenterwelle (ofwnktest) Verstellbereich Bank 1: 0°...5° Verstellbereich Bank 2: 0°...-5° Aktivierung: Klemme 15 = EIN Activation:

| Name | Type | Description |
| --- | --- | --- |
| OFWTSTBER | int | Offsetbereich, nur ein Dummy, wird nicht ausgewertet |
| OFWNKTEST | int | Eingabewert für Winkeloffset (Eingabebereich: -50....50) zB: OFWNKTEST = 30  => ofwnktest = 3° |

### STATUS_BETRIEBSSTUNDENZAEHLER

0x21C3 STATUS_BETRIEBSSTUNDENZAEHLER Status Betriebsstundenzaehler auslesen Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### DME_STARTWERT_ABGLEICH

Kopiert die ISN auf beide Wechselcodes KWP2000: $31 StartRoutineByLocalIdentifier LocalIdentifier $20 Modus  : Default

_No arguments._

### EWS_STARTWERT

0x318300 EWS_STARTWERT EWS-Startwertinitialisierung Aktivierung: Klemme 15 = EIN Activation:

| Name | Type | Description |
| --- | --- | --- |
| PARAMETER | int | Parameter zur Initialisierung |

### EWS_EMPFANG

0x2106 EWS_EMPFANG EWS-Empfangsstatus auslesen Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_MOTORTEMPERATUR

0x224000 STATUS_MOTORTEMPERATUR Auslesen der Motortemperatur Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_MOTORDREHZAHL

0x224000 STATUS_MOTORDREHZAHL Auslesen der Motordrehzahl Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_AN_LUFTTEMPERATUR

0x224000 STATUS_AN_LUFTTEMPERATUR Auslesen der Lufttemperatur Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_LMM_MASSE

0x224000 STATUS_LMM_MASSE Auslesen der Luftmasse Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_L_SONDE

0x224003 STATUS_L_SONDE Auslesen der Lambdasondenspannung vorne Bank 1 Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_L_SONDE_2

0x224003 STATUS_L_SONDE_2 Auslesen der Lambdasondenspannung vorne Bank 2 Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_L_SONDE_H

0x304801 STATUS_L_SONDE_H Auslesen der Lambdasondenspannung hinten Bank 1 Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_L_SONDE_2_H

0x304501 STATUS_L_SONDE_2_H Auslesen der Lambdasondenspannung hinten Bank 2 Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_INT

0x224000 STATUS_INT Auslesen der Lambdaregelung Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_INT_2

0x224000 STATUS_INT_2 Auslesen der Lambdaregelung Bank 2 Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_ADD

0x224004 STATUS_ADD Auslesen der additiven Lambdaregelung Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_ADD_2

0x224004 STATUS_ADD_2 Auslesen der additiven Lambdaregelung Bank 2 Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_MUL

0x224004 STATUS_MUL Auslesen der multipikativen Lambdaregelung Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_MUL_2

0x224004 STATUS_MUL_2 Auslesen der multipikativen Lambdaregelung Bank 2 Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_MOTORLAUFUNRUHE

0x224003 STATUS_MOTORLAUFUNRUHE Auslesen der Laufunruhewerte Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_UBATT

0x224000 STATUS_UBATT Auslesen der Batteriespannung Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_GEBERRAD_ADAPTION

0x224006 STATUS_GEBERRAD_ADAPTION Auslesen der NWG-Adaptionen Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_DIGITAL

0x224002 & 0x224007 STATUS_DIGITAL Auslesen der Schalter- und Funktionsstati Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_PWG_POTI_SPANNUNG

0x304601 & 0x304701 STATUS_PWG_POTI_SPANNUNG Auslesen des Pedalwertgebers Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_MESSWERTE_IBS

0x22402B STATUS_MESSWERTE_IBS Auslesen von Temperatur, Spannung und Strom der Batterie Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_MESSWERTE_GEN

0x22402C STATUS_MESSWERTE_GEN Auslesen der Generator-Messwerte Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_MESSWERTE_VAD

0x224025 STATUS_MESSWERTE_VAD Variantenadaptionen auslesen Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### IDENT_IBS

0x224021 IDENT_IBS Identifikationsdaten für IBS auslesen (BMW Nr, Seriennummer, SW/HW Index) Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_SYSTEMCHECK_PM_INFO_1

0x224022 STATUS_SYSTEMCHECK_PM_INFO_1 Batterie Powermanagement Bytefeld 1 lesen Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_SYSTEMCHECK_PM_INFO_2

0x224023 STATUS_SYSTEMCHECK_PM_INFO_2 Batterie Powermanagement Bytefeld 2 lesen Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STEUERN_PM_HISTOGRAM_RESET

0x2E5FF504 STEUERN_PM_HISTOGRAM_RESET Löschen der Powermanagement-Infofelder Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### ADAP_SELEKTIV_LOESCHEN

0x3130 ADAP_SELEKTIV_LOESCHEN Löschen von Adaptionen und gelernte Varianten Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation:

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHLBYTE_1 | int | Bit=1 löscht Bit=0 behält alten Wert |
| AUSWAHLBYTE_2 | int | Bit=1 löscht Bit=0 behält alten Wert |
| AUSWAHLBYTE_3 | int | Bit=1 löscht Bit=0 behält alten Wert |

### STEUERN_BATTERIETAUSCH_REGISTRIEREN

0x3130001000 STEUERN_BATTERIETAUSCH_REGISTRIEREN Batterietausch registrieren Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation:

_No arguments._

### START_SYSTEMCHECK_PM_MESSEMODE

0x31F6 START_SYSTEMCHECK_PM_MESSEMODE Systemdiagnose BatterieSensor Messemode setzen Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STOP_SYSTEMCHECK_PM_MESSEMODE

0x32F6 STOP_SYSTEMCHECK_PM_MESSEMODE Systemdiagnose BatterieSensor Messmode beenden Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### _STATUS_IGRINFO

0x224016 _STATUS_IGRINFO Infospeicher Intelligente Generator Regelung (IGR) auslesen Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### _STATUS_LEMINFO

0x224017 _STATUS_LEMINFO Infospeicher Leistungskoordination Elektrisch Mechanisch (LEM) auslesen Aktivierung: Klemme 15 = EIN Activation:

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
| 0x76 | CEL |
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
| 0x0A | ZKrz_a | Zuendkerzen adaptiv |

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
| 0x0000 | 0000 FehlerOrt nicht bedatet |
| 0x29CC | CDKMD - Verbrennungsaussetzer, mehrere Zylinder |
| 0x29CD | CDKMD00 - Verbrennungsaussetzer, Zylinder 1 |
| 0x29CE | CDKMD07 - Verbrennungsaussetzer, Zylinder 2 |
| 0x29CF | CDKMD05 - Verbrennungsaussetzer, Zylinder 3 |
| 0x29D0 | CDKMD02 - Verbrennungsaussetzer, Zylinder 4 |
| 0x29D1 | CDKMD01 - Verbrennungsaussetzer, Zylinder 5 |
| 0x29D2 | CDKMD04 - Verbrennungsaussetzer, Zylinder 6 |
| 0x29D3 | CDKMD06 - Verbrennungsaussetzer, Zylinder 7 |
| 0x29D4 | CDKMD03 - Verbrennungsaussetzer, Zylinder 8 |
| 0x29D9 | CDKCPFLL - Verbrennungsaussetzer bei geringem Tankfüllstand |
| 0x29DD | CDKSWE - Schlechtwegstreckenerkennung |
| 0x29E5 | CDKFRAO - Gemischadaption, oberer Drehzahlbereich |
| 0x29E6 | CDKFRAO2 - Gemischadaption 2, oberer Drehzahlbereich |
| 0x29E7 | CDKRKAT - Gemischadaption im Leerlauf pro Zeit |
| 0x29E8 | CDKRKAT2 - Gemischadaption 2 im Leerlauf pro Zeit |
| 0x29ED | CDKFRAU - Gemischadaption, unterer Drehzahlbereich |
| 0x29EE | CDKFRAU2 - Gemischadaption 2, unterer Drehzahlbereich |
| 0x29EF | CDKFMAS - Gemischadaption, Summenfehler |
| 0x29F0 | CDKFMAS2 - Gemischadaption 2, Summenfehler |
| 0x29F4 | CDKKAT - Katalysatorkonvertierung |
| 0x29F5 | CDKKAT2 - Katalysatorkonvertierung 2 |
| 0x29FA | CDKMDKH - Katalysatorheizung |
| 0x2A12 | CDKDMMVE - DMTL-Magnetventil, Ansteuerung |
| 0x2A13 | CDKDMPME - DMTL-Leckdiagnosepumpe, Ansteuerung |
| 0x2A14 | CDKDMTK - DMTL, Feinstleck |
| 0x2A15 | CDKTESG - DMTL, Feinleck |
| 0x2A16 | CDKDMTKNM - DMTL, Feinstleck |
| 0x2A17 | CDKDMTL - DMTL, Systemfehler |
| 0x2A18 | CDKDHDMTE - DMTL, Heizung: Ansteuerung |
| 0x2A19 | CDKTEVE - Tankentlüftungsventil, Ansteuerung |
| 0x2A1A | CDKTES - Tankentlüftungssystem, Funktion |
| 0x2A1D | CDKFSTP - Tankfüllstand, Plausibilität |
| 0x2A1E | CDKFSTSI - Tankfüllstand, Signal |
| 0x2A58 | CDKVVTE - Valvetronic,  Spannungsversorgung |
| 0x2A59 | CDKDVFFS - Valvetronic, Exzenterwellensensor: Führung |
| 0x2A5A | CDKDVFFS2 - Valvetronic, Exzenterwellensensor 2: Führung |
| 0x2A5B | CDKDVFRS - Valvetronic, Exzenterwellensensor: Referenz |
| 0x2A5C | CDKDVFRS2 - Valvetronic, Exzenterwellensensor 2: Referenz |
| 0x2A5D | CDKDVPLA - Valvetronic, Exzenterwellensensor: Plausibilität |
| 0x2A5E | CDKDVPLA2 - Valvetronic, Exzenterwellensensor 2: Plausibilität |
| 0x2A5F | CDKDVUSE - Valvetronic, Exzenterwellensensor: Spannungsversorgung |
| 0x2A60 | CDKDVUSE2 - Valvetronic, Exzenterwellensensor 2: Spannungsversorgung |
| 0x2A61 | CDKDVLRN - Valvetronic, Verstellbereich |
| 0x2A62 | CDKDVLRN2 - Valvetronic, Verstellbereich 2 |
| 0x2A63 | CDKDVSTE - Valvetronic, Stellmotor: Überwachung Schwergängigkeit, Drehrichtung |
| 0x2A64 | CDKDVSTE2 - Valvetronic, Stellmotor 2: Überwachung Schwergängigkeit, Drehrichtung |
| 0x2A65 | CDKDVFSG - Valvetronic,  interner Fehler |
| 0x2A66 | CDKDVFSG2 - Valvetronic,  interner Fehler 2 |
| 0x2A67 | CDKDVEST - Valvetronic, Stellmotor: Ansteuerung |
| 0x2A68 | CDKDVEST2 - Valvetronic, Stellmotor 2: Ansteuerung |
| 0x2A69 | CDKDVULV - Valvetronic, Stellmotor: Spannungsversorgung |
| 0x2A6A | CDKDVULV2 - Valvetronic, Stellmotor 2: Spannungsversorgung |
| 0x2A6B | CDKDVPMN - Valvetronic, Leistungsbegrenzung |
| 0x2A6C | CDKDVAN - Valvetronic, Position bei Neustart: Plausibilität |
| 0x2A6D | CDKDVOVL - Valvetronic, elektrischer Überlastschutz |
| 0x2A6E | CDKDVOVL2 - Valvetronic, elektrischer Überlastschutz 2 |
| 0x2A6F | CDKMINHUB - Valvetronic, Minimalhub |
| 0x2A80 | CDKENWSE - Einlass-VANOS, Ansteuerung |
| 0x2A81 | CDKENWSE2 - Einlass-VANOS, Ansteuerung 2 |
| 0x2A83 | CDKENWS - Einlass-VANOS |
| 0x2A84 | CDKENWS2 - Einlass-VANOS 2 |
| 0x2A85 | CDKANWSE - Auslass-VANOS, Ansteuerung |
| 0x2A86 | CDKANWSE2 - Auslass-VANOS, Ansteuerung 2 |
| 0x2A88 | CDKANWS - Auslass-VANOS |
| 0x2A89 | CDKANWS2 - Auslass-VANOS 2 |
| 0x2A8A | CDKENWSAD - Einlass-VANOS, Adaption Anschlag |
| 0x2A8B | CDKENWSAD2 - Einlass-VANOS, Adaption Anschlag 2 |
| 0x2A8C | CDKANWSAD - Auslass-VANOS, Adaption Anschlag |
| 0x2A8D | CDKANWSAD2 - Auslass-VANOS, Adaption Anschlag 2 |
| 0x2A8E | CDKNWEKW - Einlassnockenwelle, Zahnversatz zur Kurbelwelle |
| 0x2A8F | CDKNWEKW2 - Einlassnockenwelle 2, Zahnversatz zur Kurbelwelle |
| 0x2A90 | CDKNWAKW - Auslassnockenwelle, Zahnversatz zur Kurbelwelle |
| 0x2A91 | CDKNWAKW2 - Auslassnockenwelle 2, Zahnversatz zur Kurbelwelle |
| 0x2B5C | CDKN - Kurbelwellensensor, Signal |
| 0x2B5D | CDKBM - Kurbelwellensensor, Plausibilität |
| 0x2B62 | CDKPH - Nockenwellensensor, Einlass |
| 0x2B63 | CDKPH2 - Nockenwellensensor, Auslass |
| 0x2B64 | CDKPH3 - Nockenwellensensor 2, Einlass |
| 0x2B65 | CDKPH4 - Nockenwellensensor 2, Auslass |
| 0x2B66 | CDKPHM - Nockenwellensensor, Master |
| 0x2B70 | CDKSUE - Variable Sauganlage, Ansteuerung |
| 0x2B71 | CDKDISA - Variable Sauganlage |
| 0x2B72 | CDKDISAT - Variable Sauganlage, Temperaturwarnschwelle |
| 0x2B73 | CDKDISAPL - Variable Sauganlage, Plausibilität |
| 0x2B80 | CDKLLR - Leerlaufregelung |
| 0x2B82 | CDKLLRKH - Leerlaufregelung bei Katalysatorbeheizung |
| 0x2B98 | CDKNVRMON - Steuergerät, interner Fehler: RAM Backup, Plausibilität |
| 0x2B99 | CDKNVRBUP - Steuergerät, interner Fehler: RAM Backup |
| 0x2B9A | CDKURRAM - Steuergerät, interner Fehler: RAM |
| 0x2B9B | CDKURROM - Steuergerät, interner Fehler: ROM |
| 0x2B9C | CDKURRST - Steuergerät, interner Fehler: Reset |
| 0x2B9D | CDKWDA - Steuergerät, interner Fehler: Überspannung |
| 0x2B9E | CDKFETRWE - Steuergerät, Drehzahlbegrenzung aktiviert |
| 0x2BC0 | CDKTUMP - Umgebungstemperatursensor, Plausibilität |
| 0x2BC1 | CDKTUME - Umgebungstemperatursensor, Signal |
| 0x2C24 | CDKLSVV - Lambdasonden vor Katalysator, vertauscht |
| 0x2C31 | CDKFTDLA - Lambdasonde vor Katalysator, Trimmregelung |
| 0x2C32 | CDKFTDLA2 - Lambdasonde vor Katalysator 2, Trimmregelung |
| 0x2C37 | CDKHELSU - Lambdasonde vor Katalysator, Heizereinkopplung |
| 0x2C38 | CDKHELSU2 - Lambdasonde vor Katalysator 2, Heizereinkopplung |
| 0x2C39 | CDKDYLSU - Lambdasonde vor Katalysator, Dynamik |
| 0x2C3A | CDKDYLSU2 - Lambdasonde vor Katalysator 2, Dynamik |
| 0x2C3B | CDKULSU - Lambdasonde vor Katalysator, nicht angesteckt |
| 0x2C3C | CDKULSU2 - Lambdasonde vor Katalysator 2, nicht angesteckt |
| 0x2C47 | CDKLSUKS - Lambdasonde vor Katalysator, Sondenleitungen |
| 0x2C48 | CDKLSUKS2 - Lambdasonde vor Katalysator 2, Sondenleitungen |
| 0x2C49 | CDKPLLSU - Lambdasonde vor Katalysator, Plausibilität |
| 0x2C4A | CDKPLLSU2 - Lambdasonde vor Katalysator 2, Plausibilität |
| 0x2C4B | CDKICLSU - Steuergerät, interner Fehler: Lambdasondenbaustein |
| 0x2C4C | CDKICLSU2 - Steuergerät, interner Fehler: Lambdasondenbaustein 2 |
| 0x2C4D | CDKLSUIP - Lambdasonde vor Katalysator, Pumpstromleitung |
| 0x2C4E | CDKLSUIP2 - Lambdasonde vor Katalysator 2, Pumpstromleitung |
| 0x2C4F | CDKLSUIA - Lambdasonde vor Katalysator, Abgleichleitung |
| 0x2C50 | CDKLSUIA2 - Lambdasonde vor Katalysator 2, Abgleichleitung |
| 0x2C51 | CDKLSUUN - Lambdasonde vor Katalysator, Nernstleitung |
| 0x2C52 | CDKLSUUN2 - Lambdasonde vor Katalysator 2, Nernstleitung |
| 0x2C53 | CDKLSUVM - Lambdasonde vor Katalysator, virtuelle Masse |
| 0x2C54 | CDKLSUVM2 - Lambdasonde vor Katalysator 2, virtuelle Masse |
| 0x2C61 | CDKLSVE - Lamdasonde vor Katalysator, elektrischer Fehler |
| 0x2C62 | CDKLSVE2 - Lamdasonde vor Katalysator 2, elektrischer Fehler |
| 0x2C6D | CDKLASH - Lambdasonde nach Katalysator, Alterung |
| 0x2C6E | CDKLASH2 - Lambdasonde nach Katalysator 2, Alterung |
| 0x2C71 | CDKLSH - Lambdasonde nach Katalysator |
| 0x2C72 | CDKLSH2 - Lambdasonde nach Katalysator 2 |
| 0x2C84 | CDKDYLSH - Lambdasonde nach Katalysator, Dynamik |
| 0x2C85 | CDKDYLSH2 - Lambdasonde 2 nach Katalysator, Dynamik |
| 0x2C9C | CDKHSVE - Lambdasondenbeheizung vor Katalysator, Ansteuerung |
| 0x2C9D | CDKHSVE2 - Lambdasondenbeheizung vor Katalysator 2, Ansteuerung |
| 0x2C9E | CDKHSHE - Lambdasondenbeheizung nach Katalysator, Ansteuerung |
| 0x2C9F | CDKHSHE2 - Lambdasondenbeheizung nach Katalysator 2, Ansteuerung |
| 0x2CA0 | CDKHSV - Lambdasondenbeheizung vor Katalysator |
| 0x2CA1 | CDKHSV2 - Lambdasondenbeheizung vor Katalysator 2 |
| 0x2CA8 | CDKHSH - Lambdasondenbeheizung nach Katalysator, Funktion |
| 0x2CA9 | CDKHSH2 - Lambdasondenbeheizung nach Katalysator 2, Funktion |
| 0x2CEF | CDKDVEE - Drosselklappensteller, Ansteuerung |
| 0x2CF0 | CDKDVER - Drosselklappensteller, Regelbereich |
| 0x2CF1 | CDKDVEL - Drosselklappensteller, Positionsüberwachung |
| 0x2CF8 | CDKDK - Drosselklappenpotenziometer |
| 0x2CF9 | CDKDK1P - Drosselklappenpotenziometer 1 |
| 0x2CFA | CDKDK2P - Drosselklappenpotenziometer 2 |
| 0x2CFF | CDKDVEV - Drosselklappensteller, Verstärkerabgleich |
| 0x2D00 | CDKDVEF - Drosselklappensteller, Federprüfung schliessende Feder |
| 0x2D01 | CDKDVEFO - Drosselklappensteller, Federprüfung öffnende Feder |
| 0x2D02 | CDKDVEN - Drosselklappensteller, Notluftpunkt |
| 0x2D03 | CDKDVEUB - Drosselklappensteller, Abbruch Adaption wegen Umweltbedingungen |
| 0x2D04 | CDKDVEU - Drosselklappensteller, Prüfung unterer Anschlag |
| 0x2D05 | CDKDVEUW - Drosselklappensteller, Abbruch bei UMA-Wiederlernen |
| 0x2D0F | CDKHFME - Luftmassenmesser, Signal |
| 0x2D14 | CDKKHFME - Luftmassenmesser, Korrektursignal |
| 0x2D1A | CDKFPP - Fahrpedalmodul, Pedalwertgeber |
| 0x2D1B | CDKFP1P - Fahrpedalmodul, Pedalwertgeber Signal 1 |
| 0x2D1C | CDKFP2P - Fahrpedalmodul, Pedalwertgeber Signal 2 |
| 0x2D28 | CDKDDSS - Differenzdrucksensor, Saugrohr: Signal |
| 0x2D29 | CDKPDDSS - Differenzdrucksensor, Saugrohr: Plausibilität |
| 0x2D32 | CDKDPSRPL - Differenzdrucksensor, Saugrohr: Plausibilität |
| 0x2D6E | CDKUFMV - DME, interner Fehler: Überwachung Istmoment |
| 0x2D70 | CDKUFSGA - DME, interner Fehler: Überwachung Motorfunktionen |
| 0x2D71 | CDKUFSGB - DME, interner Fehler: Überwachung Eingangsgrößen |
| 0x2D72 | CDKUFSGC - DME, interner Fehler: Überwachung Hardware |
| 0x2D75 | CDKUFNC - DME, interner Fehler: Überwachung Motordrehzahl |
| 0x2D76 | CDKUFSPSC - DME, interner Fehler: Überwachung Fahrpedalmodul |
| 0x2D78 | CDKUFMSAC - Luftmassenstromabgleich |
| 0x2DBF | CDKCACC - CAN, ACC: Signalfehler |
| 0x2DCA | CDKCEGS - Botschaft vom EGS fehlt, Timeout |
| 0x2DCB | CDKCSSG - CAN, SSG: Signalfehler |
| 0x2DCF | CDKCINS - CAN, Instrumentenkombination: Signalfehler |
| 0x2DD7 | CDKCDSC - Botschaft vom DSC fehlt, Timeout |
| 0x2DD9 | CDKCARS - CAN, ARS: Signalfehler |
| 0x2DDA | CDKCCAS - CAN, CAS: Signalfehler |
| 0x2DDB | CDKCIHKA - CAN, IHKA: Signalfehler |
| 0x2DDC | CDKCSZL - Botschaft vom SZL fehlt |
| 0x2DDD | CDKCVVT - Botschaft vom Valvetronic-Steuergerät fehlt |
| 0x2DDE | CDKDVCAN - Local-CAN Kommunikation |
| 0x2DDF | CDKDVCAN2 - Local-CAN Kommunikation 2 |
| 0x2DEB | CDKPMBN - Powermanagement, Bordnetzüberwachung |
| 0x2DEC | CDKPMBAT - Powermanagement, Batterieüberwachung |
| 0x2DED | CDKPMRUHV - Powermanagement, Ruhestromüberwachung |
| 0x2E24 | CDKDZKU0 - Zündspule Zylinder 1 |
| 0x2E25 | CDKDZKU7 - Zündspule Zylinder 2 |
| 0x2E26 | CDKDZKU5 - Zündspule Zylinder 3 |
| 0x2E27 | CDKDZKU2 - Zündspule Zylinder 4 |
| 0x2E28 | CDKDZKU1 - Zündspule Zylinder 5 |
| 0x2E29 | CDKDZKU4 - Zündspule Zylinder 6 |
| 0x2E2A | CDKDZKU6 - Zündspule Zylinder 7 |
| 0x2E2B | CDKDZKU3 - Zündspule Zylinder 8 |
| 0x2E30 | CDKEV1 - Einspritzventil Zylinder 1, Ansteuerung |
| 0x2E31 | CDKEV8 - Einspritzventil Zylinder 2, Ansteuerung |
| 0x2E32 | CDKEV6 - Einspritzventil Zylinder 3, Ansteuerung |
| 0x2E33 | CDKEV3 - Einspritzventil Zylinder 4, Ansteuerung |
| 0x2E34 | CDKEV2 - Einspritzventil Zylinder 5, Ansteuerung |
| 0x2E35 | CDKEV5 - Einspritzventil Zylinder 6, Ansteuerung |
| 0x2E36 | CDKEV7 - Einspritzventil Zylinder 7, Ansteuerung |
| 0x2E37 | CDKEV4 - Einspritzventil Zylinder 8, Ansteuerung |
| 0x2E68 | CDKKS1 - Klopfsensorsignal 1 |
| 0x2E69 | CDKKS2 - Klopfsensorsignal 2 |
| 0x2E6A | CDKKS3 - Klopfsensorsignal 3 |
| 0x2E6B | CDKKS4 - Klopfsensorsignal 4 |
| 0x2E6E | CDKDZKUB1 - Zündung, Überwachung: Brenndauer |
| 0x2E6F | CDKDZKUB2 - Zündung 2, Überwachung: Brenndauer |
| 0x2E72 | CDKKRIC - Steuergerät, interner Fehler: Klopfsensorbaustein |
| 0x2E73 | CDKKRSPI - Steuergerät, interner Fehler: Klopfsensorbaustein |
| 0x2E7C | CDKBSD - Bitserielle Datenschnittstelle, Signal |
| 0x2E8B | CDKIBSK - Intelligenter Batteriesensor, Signal |
| 0x2E8C | CDKIBSP - Intelligenter Batteriesensor, Funktion |
| 0x2E8D | CDKIBSA - Intelligenter Batteriesensor, Signalübertragung |
| 0x2E97 | CDKGEN - Generator |
| 0x2EA0 | CDKQLT - Ölzustandssensor |
| 0x2EB8 | CDKBSDD0 - BSD-Botschaft vom intelligenten Batteriesensor fehlt |
| 0x2EBA | CDKBSDD2 - BSD-Botschaft von der elektrischen Kühlmittelpumpe, Elektronik fehlt |
| 0x2EBB | CDKBSDD3 - BSD-Botschaft von der elektrischen Kühlmittelpumpe, Motor fehlt |
| 0x2EBC | CDKBSDD4 - BSD-Botschaft vom Ölzustandssensor fehlt |
| 0x2EBD | CDKBSDD6 - BSD-Botschaft vom Generator fehlt |
| 0x2EBE | CDKBSDD5 - BSD-Botschaft vom Generator 2 fehlt |
| 0x2ECC | CDKGENCOM - Generator, Kommunikation |
| 0x2ECD | CDKGENEL - Generator, elektrisch |
| 0x2ECE | CDKGENELB - Generator, Plausibilität: elektrisch |
| 0x2ECF | CDKGENHT - Generator, Übertemperatur |
| 0x2ED0 | CDKGENHTB - Generator,  Plausibilität: Temperatur |
| 0x2ED1 | CDKGENME - Generator, mechanisch |
| 0x2ED2 | CDKGENREG - Generator, Regler falsch |
| 0x2ED3 | CDKGENUPL - Generator, Typ falsch |
| 0x2EE0 | CDKTME - Kühlmitteltemperatursensor, Signal |
| 0x2EE1 | CDKTMP - Kühlmitteltemperatursensor, Plausibilität |
| 0x2EEA | CDKTKAE - Temperatursensor Kühleraustritt, Signal |
| 0x2EEC | CDKTKAR - Temperatursensor Kühleraustritt, Plausibilität |
| 0x2EF4 | CDKTHM - Kennfeldthermostat, Mechanik |
| 0x2EF5 | CDKETS - Kennfeldthermostat, Ansteuerung |
| 0x2EFE | CDKMLE - Elektrolüfter, Ansteuerung |
| 0x2F08 | CDKTAE - Ansauglufttemperatursensor, Signal |
| 0x2F09 | CDKTAR - Ansauglufttemperatursensor, Plausibilität |
| 0x2F0B | CDKTACS - Ansauglufttemperatursensor: Kaltanteil, Plausibilität (vorläufig) |
| 0x2F0D | CDKGLFE - Kühlerjalousie, Ansteuerung, (GLF) |
| 0x2F10 | CDKPKKSFB - Kühlerjalousie, unten |
| 0x2F11 | CDKAKKSFB - Kühlerjalousie, oben |
| 0x2F12 | CDKKOSE - Klimakompressor, Ansteuerung |
| 0x2F17 | CDKMTOEL - Motoröltemperatur, zeitweise zu hoch, EGS-Zwangsschaltung |
| 0x2F44 | CDKWFS - EWS Manipulationsschutz |
| 0x2F45 | CDKDWA - Schnittstelle EWS-DME |
| 0x2F46 | CDKWCA - EWS Wechselcode-Abspeicherng |
| 0x2F4E | CDKVFZE - Fahrzeuggeschwindigkeit, Signal |
| 0x2F4F | CDKVFZNP - Fahrzeuggeschwindigkeit, Plausibilität |
| 0x2F50 | CDKVAT - Fahrzeuggeschwindigkeit, Plausibilität |
| 0x2F59 | CDKSTS - Startautomatik, Startsignal |
| 0x2F5A | CDKSTA - Startautomatik |
| 0x2F62 | CDKBREMS - Bremslichtschalter |
| 0x2F67 | CDKKUPPL - Kupplungsschalter, Signal |
| 0x2F6C | CDKAKRE - Abgasklappe, Ansteuerung |
| 0x2F71 | CDKELS - E-Box-Lüfter, Ansteuerung |
| 0x2F77 | CDKPUR - Umgebungsdrucksensor, Plausibilität |
| 0x2F78 | CDKPUE - DME, interner Fehler: Umgebungsdrucksensor |
| 0x2F7B | CDKPOELS - Öldruckschalter, Plausibilität |
| 0x2F80 | CDKCUHR - Motorabstellzeit, Plausibilität |
| 0x2F8A | CDKUB - Batteriespannung |
| 0x2F94 | CDKKPE - Kraftstoffpumpenrelais, Ansteuerung |
| 0x2F9E | CDKTOENS - Thermischer Ölniveausensor |
| 0x2FA3 | CDKCOD - Codierung fehlt |
| 0xCD87 | CDKCANA - PT-CAN Kommunikationsfehler |
| 0xCD8B | CDKCANB - Local-CAN Kommunikationsfehler |
| 0xCD97 | CDKXB1 - Botschaft (Drehmomentanforderung AFS, B1) |
| 0xCD9B | CDKX315 - Botschaft (Fahrzeugmodus, 315) |
| 0xCDA1 | CDKXC4 - Botschaft (Lenkradwinkel, C4) |
| 0xCDA2 | CDKX3B4 - Botschaft (Powermanagement Batteriespannung, 3B4) |
| 0xCDA3 | CDKX334 - Botschaft (Powermanagement Ladespannung, 334) |
| 0xCDA7 | CDKX3B0 - Botschaft (Status Rückwärtsgang, 3B0) |
| 0xCDAA | CDKX135 - Botschaft (Status Crashabschaltung EKP, 135) |
| 0xCDAC | CDKX3B5 - Botschaft (Status Wasserventil,  3B5) |
| 0xCDB0 | CDKX1D2 - Botschaft (Anzeige Getriebedaten) |
| 0xCDB3 | CDKXB9 - Botschaft (Drehmomentanforderung Lenkung, B9) |
| 0xCDB7 | CDKX5E0 - Botschaft (OBD-Sensor Diagnosestatus, 5E0) |
| 0xCDEB | CDKX21A - Botschaft (Lampenzustand,  21A) |
| 0xCDED | CDKXBF - Botschaft (Anforderung Radmoment Antriebstrang,  BF) |
| 0xCDEE | CDKX2F8 - Botschaft (Uhrzeit/Datum, 2F8) |
| 0xCDEF | CDKX2E4 - Botschaft (Status Anhänger, 2E4) |
| 0xCDF9 | CDKX201 - Botschaft (Status EMF, 201) (vorläufig) |
| 0xCDFA | CDKX1A7 - Botschaft (Stellanforderung EMF, 1A7) (vorläufig) |
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
| xxxxxxx1 | 11 | Diagnose aktiv |
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
| 0x0000 | 0x00FF | 0x00FF | 0x00FF | 0x00FF |
| 0x29CC | 0x000A | 0x001A | 0x0012 | 0x003C |
| 0x29CD | 0x000A | 0x001A | 0x0012 | 0x003C |
| 0x29CE | 0x000A | 0x001A | 0x0012 | 0x003C |
| 0x29CF | 0x000A | 0x001A | 0x0012 | 0x003C |
| 0x29D0 | 0x000A | 0x001A | 0x0012 | 0x003C |
| 0x29D1 | 0x000A | 0x001A | 0x0012 | 0x003C |
| 0x29D2 | 0x000A | 0x001A | 0x0012 | 0x003C |
| 0x29D3 | 0x000A | 0x001A | 0x0012 | 0x003C |
| 0x29D4 | 0x000A | 0x001A | 0x0012 | 0x003C |
| 0x29D9 | 0x003C | 0x0005 | 0x00B2 | 0x00B3 |
| 0x29DD | 0x000A | 0x001A | 0x000B | 0x008C |
| 0x29E5 | 0x000B | 0x001A | 0x0008 | 0x0006 |
| 0x29E6 | 0x000B | 0x001A | 0x0006 | 0x0008 |
| 0x29E7 | 0x000A | 0x0013 | 0x003C | 0x0005 |
| 0x29E8 | 0x000A | 0x0013 | 0x003C | 0x0007 |
| 0x29ED | 0x000A | 0x001A | 0x00AD | 0x00AC |
| 0x29EE | 0x000B | 0x001A | 0x00AD | 0x00AC |
| 0x29EF | 0x0005 | 0x0006 | 0x001A | 0x000A |
| 0x29F0 | 0x0007 | 0x0008 | 0x001A | 0x000A |
| 0x29F4 | 0x00A3 | 0x001A | 0x00BF | 0x00C1 |
| 0x29F5 | 0x00A4 | 0x001A | 0x00C0 | 0x00C2 |
| 0x29FA | 0x000A | 0x002B | 0x0014 | 0x00A5 |
| 0x2A12 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2A13 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2A14 | 0x003C | 0x0035 | 0x0024 | 0x0014 |
| 0x2A15 | 0x003C | 0x0035 | 0x0024 | 0x0014 |
| 0x2A16 | 0x003C | 0x0035 | 0x0024 | 0x0014 |
| 0x2A17 | 0x003C | 0x0035 | 0x0024 | 0x0014 |
| 0x2A18 | 0x000A | 0x0014 | 0x0024 | 0x000B |
| 0x2A19 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2A1A | 0x000A | 0x001A | 0x0024 | 0x0035 |
| 0x2A1D | 0x000A | 0x003C | 0x0014 | 0x000B |
| 0x2A1E | 0x000A | 0x003C | 0x0014 | 0x000B |
| 0x2A58 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2A59 | 0x000A | 0x0014 | 0x0012 | 0x00C5 |
| 0x2A5A | 0x000A | 0x0014 | 0x0012 | 0x00C6 |
| 0x2A5B | 0x000A | 0x0014 | 0x0012 | 0x00C5 |
| 0x2A5C | 0x000A | 0x0014 | 0x0012 | 0x00C6 |
| 0x2A5D | 0x000A | 0x0014 | 0x0012 | 0x00C3 |
| 0x2A5E | 0x000A | 0x0014 | 0x0012 | 0x00C4 |
| 0x2A5F | 0x000A | 0x0014 | 0x0012 | 0x0024 |
| 0x2A60 | 0x000A | 0x0014 | 0x0012 | 0x0024 |
| 0x2A61 | 0x000A | 0x0014 | 0x0012 | 0x0024 |
| 0x2A62 | 0x000A | 0x0014 | 0x0012 | 0x0024 |
| 0x2A63 | 0x000A | 0x0014 | 0x0012 | 0x00C5 |
| 0x2A64 | 0x000A | 0x0014 | 0x0012 | 0x00C6 |
| 0x2A65 | 0x000A | 0x0014 | 0x0012 | 0x0024 |
| 0x2A66 | 0x000A | 0x0014 | 0x0012 | 0x0024 |
| 0x2A67 | 0x000A | 0x0014 | 0x0012 | 0x00C5 |
| 0x2A68 | 0x000A | 0x0014 | 0x0012 | 0x00C6 |
| 0x2A69 | 0x000A | 0x0014 | 0x0012 | 0x0024 |
| 0x2A6A | 0x000A | 0x0014 | 0x0012 | 0x0024 |
| 0x2A6B | 0x000A | 0x0014 | 0x0012 | 0x00C5 |
| 0x2A6C | 0x000A | 0x0014 | 0x0012 | 0x00BE |
| 0x2A6D | 0x000A | 0x008C | 0x0012 | 0x00C5 |
| 0x2A6E | 0x000A | 0x008C | 0x0012 | 0x00C6 |
| 0x2A6F | 0x0012 | 0x00BE | 0x000A | 0x001A |
| 0x2A80 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2A81 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2A83 | 0x000A | 0x001A | 0x0012 | 0x00C7 |
| 0x2A84 | 0x000A | 0x001A | 0x0012 | 0x00C7 |
| 0x2A85 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2A86 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2A88 | 0x000A | 0x001A | 0x0012 | 0x00C7 |
| 0x2A89 | 0x000A | 0x001A | 0x0012 | 0x00C7 |
| 0x2A8A | 0x000A | 0x001A | 0x0012 | 0x00C7 |
| 0x2A8B | 0x000A | 0x001A | 0x0012 | 0x00C7 |
| 0x2A8C | 0x000A | 0x001A | 0x0012 | 0x00C7 |
| 0x2A8D | 0x000A | 0x001A | 0x0012 | 0x00C7 |
| 0x2A8E | 0x000A | 0x001A | 0x0012 | 0x00C7 |
| 0x2A8F | 0x000A | 0x001A | 0x0012 | 0x00C7 |
| 0x2A90 | 0x000A | 0x001A | 0x0012 | 0x00C7 |
| 0x2A91 | 0x000A | 0x001A | 0x0012 | 0x00C7 |
| 0x2B5C | 0x000A | 0x0012 | 0x0024 | 0x0014 |
| 0x2B5D | 0x000A | 0x0012 | 0x0024 | 0x0014 |
| 0x2B62 | 0x000A | 0x0012 | 0x0024 | 0x0014 |
| 0x2B63 | 0x000A | 0x0012 | 0x0024 | 0x0014 |
| 0x2B64 | 0x000A | 0x0012 | 0x0024 | 0x0014 |
| 0x2B65 | 0x000A | 0x0012 | 0x0024 | 0x0014 |
| 0x2B66 | 0x000A | 0x0012 | 0x0024 | 0x0014 |
| 0x2B70 | 0x000A | 0x0012 | 0x0013 | 0x0023 |
| 0x2B71 | 0x0012 | 0x000A | 0x0013 | 0x0023 |
| 0x2B72 | 0x0012 | 0x000A | 0x0013 | 0x0023 |
| 0x2B73 | 0x0012 | 0x000A | 0x0013 | 0x0023 |
| 0x2B80 | 0x000A | 0x001A | 0x0014 | 0x0015 |
| 0x2B82 | 0x000A | 0x001A | 0x0014 | 0x0015 |
| 0x2B98 | 0x0014 | 0x00BE | 0x0012 | 0x0024 |
| 0x2B99 | 0x000A | 0x0014 | 0x0012 | 0x00BE |
| 0x2B9A | 0x000A | 0x001A | 0x001F | 0x0022 |
| 0x2B9B | 0x000A | 0x001A | 0x001F | 0x0022 |
| 0x2B9C | 0x000A | 0x001A | 0x001F | 0x0022 |
| 0x2B9D | 0x000A | 0x0012 | 0x0014 | 0x008C |
| 0x2B9E | 0x0014 | 0x00BE | 0x00FF | 0x00FF |
| 0x2BC0 | 0x0012 | 0x0013 | 0x0024 | 0x0014 |
| 0x2BC1 | 0x0012 | 0x0013 | 0x0024 | 0x0014 |
| 0x2C24 | 0x0012 | 0x008C | 0x00A8 | 0x00A9 |
| 0x2C31 | 0x009D | 0x00A8 | 0x0017 | 0x0085 |
| 0x2C32 | 0x009E | 0x00A9 | 0x0019 | 0x0086 |
| 0x2C37 | 0x0082 | 0x00A8 | 0x0029 | 0x003C |
| 0x2C38 | 0x0083 | 0x00A9 | 0x002A | 0x003C |
| 0x2C39 | 0x00AA | 0x00B0 | 0x00A8 | 0x0085 |
| 0x2C3A | 0x00AB | 0x00B1 | 0x00A9 | 0x0086 |
| 0x2C3B | 0x008C | 0x00A8 | 0x0017 | 0x0044 |
| 0x2C3C | 0x008C | 0x00A9 | 0x0019 | 0x0045 |
| 0x2C47 | 0x0014 | 0x000B | 0x00A8 | 0x009F |
| 0x2C48 | 0x0014 | 0x000B | 0x00A9 | 0x00A0 |
| 0x2C49 | 0x009D | 0x00A8 | 0x0017 | 0x0085 |
| 0x2C4A | 0x009E | 0x00A9 | 0x0019 | 0x0086 |
| 0x2C4B | 0x009F | 0x008C | 0x0014 | 0x00A8 |
| 0x2C4C | 0x00A0 | 0x008C | 0x0014 | 0x00A9 |
| 0x2C4D | 0x00A8 | 0x0082 | 0x0044 | 0x009F |
| 0x2C4E | 0x00A9 | 0x0083 | 0x0045 | 0x00A0 |
| 0x2C4F | 0x00A8 | 0x0082 | 0x0044 | 0x008C |
| 0x2C50 | 0x00A9 | 0x0083 | 0x0045 | 0x008C |
| 0x2C51 | 0x00A8 | 0x0082 | 0x0044 | 0x009F |
| 0x2C52 | 0x00A9 | 0x0083 | 0x0045 | 0x00A0 |
| 0x2C53 | 0x0014 | 0x00A8 | 0x0082 | 0x009F |
| 0x2C54 | 0x0014 | 0x00A9 | 0x0083 | 0x00A0 |
| 0x2C61 | 0x0029 | 0x0044 | 0x00A8 | 0x000B |
| 0x2C62 | 0x002A | 0x0045 | 0x00A9 | 0x000B |
| 0x2C6D | 0x000A | 0x002B | 0x0033 | 0x0017 |
| 0x2C6E | 0x000A | 0x002C | 0x0034 | 0x0019 |
| 0x2C71 | 0x002B | 0x008C | 0x0033 | 0x0017 |
| 0x2C72 | 0x002C | 0x008C | 0x0034 | 0x0019 |
| 0x2C84 | 0x002B | 0x008C | 0x0033 | 0x0017 |
| 0x2C85 | 0x002C | 0x008C | 0x0034 | 0x0019 |
| 0x2C9C | 0x000B | 0x008C | 0x0014 | 0x0044 |
| 0x2C9D | 0x000B | 0x008C | 0x0014 | 0x0045 |
| 0x2C9E | 0x000A | 0x0012 | 0x0013 | 0x0014 |
| 0x2C9F | 0x000A | 0x0012 | 0x0013 | 0x0014 |
| 0x2CA0 | 0x000B | 0x008C | 0x0029 | 0x0044 |
| 0x2CA1 | 0x000B | 0x008C | 0x002A | 0x0045 |
| 0x2CA8 | 0x007E | 0x0017 | 0x002B | 0x0033 |
| 0x2CA9 | 0x007F | 0x0019 | 0x002C | 0x0034 |
| 0x2CEF | 0x0014 | 0x0012 | 0x0015 | 0x0028 |
| 0x2CF0 | 0x0014 | 0x0013 | 0x0015 | 0x0028 |
| 0x2CF1 | 0x0014 | 0x0013 | 0x0015 | 0x0028 |
| 0x2CF8 | 0x000A | 0x0015 | 0x0026 | 0x0027 |
| 0x2CF9 | 0x000A | 0x0028 | 0x0024 | 0x0027 |
| 0x2CFA | 0x000A | 0x0028 | 0x0024 | 0x0026 |
| 0x2CFF | 0x0014 | 0x0013 | 0x0026 | 0x0065 |
| 0x2D00 | 0x0014 | 0x0013 | 0x0015 | 0x0064 |
| 0x2D01 | 0x0014 | 0x0013 | 0x0015 | 0x0064 |
| 0x2D02 | 0x0014 | 0x0013 | 0x0064 | 0x00FF |
| 0x2D03 | 0x000A | 0x0014 | 0x0013 | 0x0023 |
| 0x2D04 | 0x0014 | 0x0013 | 0x0026 | 0x0065 |
| 0x2D05 | 0x000A | 0x0014 | 0x0013 | 0x0023 |
| 0x2D0F | 0x000A | 0x0012 | 0x0014 | 0x001A |
| 0x2D14 | 0x000A | 0x0012 | 0x0014 | 0x001A |
| 0x2D1A | 0x000A | 0x0023 | 0x001B | 0x001D |
| 0x2D1B | 0x000A | 0x0023 | 0x001B | 0x001D |
| 0x2D1C | 0x000A | 0x0023 | 0x001B | 0x001D |
| 0x2D28 | 0x000A | 0x001A | 0x0012 | 0x0014 |
| 0x2D29 | 0x000A | 0x001A | 0x0012 | 0x00C7 |
| 0x2D32 | 0x000A | 0x0013 | 0x0015 | 0x00FF |
| 0x2D6E | 0x000A | 0x001A | 0x0020 | 0x0021 |
| 0x2D70 | 0x0014 | 0x0013 | 0x000A | 0x0012 |
| 0x2D71 | 0x0014 | 0x0013 | 0x000A | 0x0012 |
| 0x2D72 | 0x0014 | 0x0013 | 0x000A | 0x0012 |
| 0x2D75 | 0x000A | 0x0015 | 0x001F | 0x0023 |
| 0x2D76 | 0x001B | 0x001C | 0x0023 | 0x001F |
| 0x2D78 | 0x0011 | 0x000A | 0x0015 | 0x0014 |
| 0x2DBF | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0x2DCA | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0x2DCB | 0x000A | 0x001A | 0x0014 | 0x00C9 |
| 0x2DCF | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0x2DD7 | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0x2DD9 | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0x2DDA | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0x2DDB | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0x2DDC | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0x2DDD | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0x2DDE | 0x000A | 0x0014 | 0x0012 | 0x008C |
| 0x2DDF | 0x000A | 0x0014 | 0x0012 | 0x008C |
| 0x2DEB | 0x00DF | 0x00BA | 0x000A | 0x00BC |
| 0x2DEC | 0x00DD | 0x00DE | 0x00DF | 0x00A5 |
| 0x2DED | 0x00FB | 0x00FC | 0x00FD | 0x00BE |
| 0x2E24 | 0x000A | 0x0012 | 0x0003 | 0x0014 |
| 0x2E25 | 0x000A | 0x0012 | 0x0003 | 0x0014 |
| 0x2E26 | 0x000A | 0x0012 | 0x0003 | 0x0014 |
| 0x2E27 | 0x000A | 0x0012 | 0x0003 | 0x0014 |
| 0x2E28 | 0x000A | 0x0012 | 0x0003 | 0x0014 |
| 0x2E29 | 0x000A | 0x0012 | 0x0003 | 0x0014 |
| 0x2E2A | 0x000A | 0x0012 | 0x0003 | 0x0014 |
| 0x2E2B | 0x000A | 0x0012 | 0x0003 | 0x0014 |
| 0x2E30 | 0x000A | 0x0012 | 0x0014 | 0x0005 |
| 0x2E31 | 0x000A | 0x0012 | 0x0014 | 0x0005 |
| 0x2E32 | 0x000A | 0x0012 | 0x0014 | 0x0005 |
| 0x2E33 | 0x000A | 0x0012 | 0x0014 | 0x0005 |
| 0x2E34 | 0x000A | 0x0012 | 0x0014 | 0x0007 |
| 0x2E35 | 0x000A | 0x0012 | 0x0014 | 0x0007 |
| 0x2E36 | 0x000A | 0x0012 | 0x0014 | 0x0007 |
| 0x2E37 | 0x000A | 0x0012 | 0x0014 | 0x0007 |
| 0x2E68 | 0x000A | 0x001A | 0x008D | 0x0094 |
| 0x2E69 | 0x000A | 0x001A | 0x0092 | 0x008F |
| 0x2E6A | 0x000A | 0x001A | 0x008E | 0x0091 |
| 0x2E6B | 0x000A | 0x001A | 0x0093 | 0x0090 |
| 0x2E6E | 0x000A | 0x0012 | 0x0003 | 0x0014 |
| 0x2E6F | 0x000A | 0x0012 | 0x0003 | 0x0014 |
| 0x2E72 | 0x000A | 0x001A | 0x0080 | 0x00FF |
| 0x2E73 | 0x000A | 0x001A | 0x0080 | 0x00FF |
| 0x2E7C | 0x000A | 0x0012 | 0x0014 | 0x008C |
| 0x2E8B | 0x00D4 | 0x00D5 | 0x000A | 0x0014 |
| 0x2E8C | 0x00D4 | 0x00D5 | 0x000A | 0x0014 |
| 0x2E8D | 0x00D4 | 0x00D5 | 0x000A | 0x0014 |
| 0x2E97 | 0x004B | 0x00FA | 0x00BA | 0x0014 |
| 0x2EA0 | 0x000A | 0x00E1 | 0x0014 | 0x00FF |
| 0x2EB8 | 0x00D4 | 0x00D5 | 0x0014 | 0x008C |
| 0x2EBA | 0x000A | 0x0012 | 0x0014 | 0x008C |
| 0x2EBB | 0x000A | 0x0012 | 0x0014 | 0x008C |
| 0x2EBC | 0x000A | 0x0012 | 0x0014 | 0x008C |
| 0x2EBD | 0x008C | 0x0054 | 0x0048 | 0x0014 |
| 0x2EBE | 0x008C | 0x0054 | 0x0048 | 0x0014 |
| 0x2ECC | 0x008C | 0x0054 | 0x0048 | 0x0014 |
| 0x2ECD | 0x00F8 | 0x00FA | 0x00F9 | 0x0014 |
| 0x2ECE | 0x00F8 | 0x00FA | 0x00F9 | 0x0014 |
| 0x2ECF | 0x004B | 0x00FA | 0x00F8 | 0x0014 |
| 0x2ED0 | 0x004B | 0x00FA | 0x00F8 | 0x004A |
| 0x2ED1 | 0x008C | 0x00FA | 0x00F9 | 0x0014 |
| 0x2ED2 | 0x0049 | 0x0054 | 0x0048 | 0x0014 |
| 0x2ED3 | 0x008C | 0x0054 | 0x0048 | 0x0014 |
| 0x2EE0 | 0x0025 | 0x0013 | 0x000A | 0x0072 |
| 0x2EE1 | 0x0025 | 0x0013 | 0x000A | 0x0072 |
| 0x2EEA | 0x000A | 0x0012 | 0x0024 | 0x0074 |
| 0x2EEC | 0x000A | 0x0012 | 0x0024 | 0x0074 |
| 0x2EF4 | 0x000A | 0x0012 | 0x0024 | 0x0074 |
| 0x2EF5 | 0x000A | 0x0012 | 0x0013 | 0x0014 |
| 0x2EFE | 0x000A | 0x0012 | 0x0014 | 0x006B |
| 0x2F08 | 0x000A | 0x0012 | 0x0024 | 0x0073 |
| 0x2F09 | 0x000A | 0x0012 | 0x0024 | 0x0073 |
| 0x2F0B | 0x000A | 0x0012 | 0x0024 | 0x0073 |
| 0x2F0D | 0x000A | 0x0012 | 0x0013 | 0x0014 |
| 0x2F10 | 0x0014 | 0x0024 | 0x0047 | 0x0046 |
| 0x2F11 | 0x0014 | 0x0024 | 0x0047 | 0x0046 |
| 0x2F12 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2F17 | 0x000A | 0x0012 | 0x0013 | 0x0014 |
| 0x2F44 | 0x000A | 0x0012 | 0x0014 | 0x008C |
| 0x2F45 | 0x000A | 0x0012 | 0x0014 | 0x00BE |
| 0x2F46 | 0x000A | 0x0012 | 0x0014 | 0x008C |
| 0x2F4E | 0x000A | 0x001A | 0x00CB | 0x0014 |
| 0x2F4F | 0x000A | 0x001A | 0x00CB | 0x0014 |
| 0x2F50 | 0x000A | 0x001A | 0x00CB | 0x0014 |
| 0x2F59 | 0x000A | 0x0014 | 0x0012 | 0x008C |
| 0x2F5A | 0x000A | 0x001A | 0x0014 | 0x000B |
| 0x2F62 | 0x000A | 0x0012 | 0x000B | 0x0014 |
| 0x2F67 | 0x000A | 0x0012 | 0x000B | 0x0014 |
| 0x2F6C | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2F71 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2F77 | 0x000A | 0x000B | 0x0024 | 0x0075 |
| 0x2F78 | 0x000A | 0x000B | 0x0024 | 0x0075 |
| 0x2F7B | 0x000A | 0x0012 | 0x001A | 0x008C |
| 0x2F80 | 0x0014 | 0x0024 | 0x00A5 | 0x008C |
| 0x2F8A | 0x000A | 0x0014 | 0x0024 | 0x0012 |
| 0x2F94 | 0x000A | 0x0012 | 0x0014 | 0x000B |
| 0x2F9E | 0x000A | 0x00E1 | 0x0014 | 0x00FF |
| 0x2FA3 | 0x0014 | 0x000A | 0x008C | 0x00BE |
| 0xCD87 | 0x000A | 0x0014 | 0x0013 | 0x000B |
| 0xCD8B | 0x000A | 0x0014 | 0x0013 | 0x000B |
| 0xCD97 | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xCD9B | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xCDA1 | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xCDA2 | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xCDA3 | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xCDA7 | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xCDAA | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xCDAC | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xCDB0 | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xCDB3 | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xCDB7 | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xCDEB | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xCDED | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xCDEE | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xCDEF | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xCDF9 | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xCDFA | 0x000A | 0x001A | 0x0014 | 0x008C |
| 0xFFFF | 0x00FF | 0x00FF | 0x00FF | 0x00FF |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | Regelstatus Bank 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x0002 | Regelstatus Bank 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x0003 | Relative Luftmasse | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x0004 | Motortemperatur | Grad C | - | unsigned char | - | 1,0 | 1 | -40,0 |
| 0x0005 | Regelfaktor Bank 1 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x0006 | Adaptionsfaktor Bank 1 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x0007 | Regelfaktor Bank 2 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x0008 | Adaptionsfaktor Bank 2 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x000A | Motordrehzahl | 1/min | - | unsigned char | - | 40,0 | 1 | 0,0 |
| 0x000B | Fahrzeuggeschwindigkeit | km/h | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x0011 | Luftmassenfluß | kg/h | - | unsigned char | - | 4,0 | 1 | 0,0 |
| 0x0012 | Motortemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x0013 | Ansauglufttemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x0014 | Batteriespannung | V | - | unsigned char | - | 0,094200000166893 | 1 | 0,0 |
| 0x0015 | Drosselklappenwinkel bezogen auf unteren Anschlag | %DK | - | unsigned char | - | 0,39215686917305 | 1 | 0,0 |
| 0x0017 | Sondenspannung hinter Katalysator Bank 1 | V | - | unsigned char | - | 0,00521568628028035 | 1 | -0,2 |
| 0x0019 | Sondenspannung hinter Katalysator Bank 2 | V | - | unsigned char | - | 0,00521568628028035 | 1 | -0,2 |
| 0x001A | relative Luftfüllung | % | - | unsigned char | - | 0,75 | 1 | 0,0 |
| 0x001B | Spannung Pedalwertgeber Poti 1 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x001C | Spannung Pedalwertgeber Poti 2 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x001D | Verdoppelte Spannung Pedalwertgeber Poti 2 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x001E | Pfadidentifier SKA-Überwachung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x001F | Pfadidentifier EGAS-Überwachung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x0020 | Pfadidentifier Momenten-Überwachung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x0021 | Istmoment beim Momentenvergleich | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x0022 | Pfadidentifier Reset-Überwachung | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x0023 | normierter Fahrpedalwinkel | %PED | - | unsigned char | - | 0,39215686917305 | 1 | 0,0 |
| 0x0024 | Umgebungstemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x0025 |  Motortemperatur Ersatzwert aus Modell | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x0026 | Spannung Drosselklappenpotenziometer 1 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0027 | Spannung Drosselklappenpotenziometer 2 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0028 | Sollwert DK-Winkel bez. auf unteren Anschlag | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x0029 | Abgastemperatur vor Katalysator aus Modell | Grad C | - | unsigned char | - | 5,0 | 1 | -50,0 |
| 0x002A | Abgastemperatur vor Katalysator aus Modell Bank 2 | Grad C | - | unsigned char | - | 5,0 | 1 | -50,0 |
| 0x002B | Katalysatortemperatur aus Modell | Grad C | - | unsigned char | - | 5,0 | 1 | -50,0 |
| 0x002C | Katalysatortemperatur aus Modell Bank 2 | Grad C | - | unsigned char | - | 5,0 | 1 | -50,0 |
| 0x0033 | Innenwiderstand Lambdasonde hinter Kat. | Ohm | - | unsigned char | - | 64,0 | 1 | 0,0 |
| 0x0034 | Innenwiderstand Lambdasonde hinter Kat. Bank 2 | Ohm | - | unsigned char | - | 64,0 | 1 | 0,0 |
| 0x0035 | Umgebungsdruck | hPa | - | unsigned char | - | 5,0 | 1 | 0,0 |
| 0x003C | Tankfüllstand 1L / Ink. | l | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x003E | Motortemperatur, linearisiert und umgerechnet | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x003F | Motortemperatur-Referenzwert aus Modell | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x0040 | Berechnetes Ist-Moment in der Funktionsüberwachung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x0041 | Ist Gang | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x0042 | Zulässiges indiziertes Moment vor Filter | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x0043 | Indiziertes Sollmoment für ZW-Eingriff vor Momentenbegrenzung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x0044 | Innenwiderstand LSU | Ohm | - | unsigned char | - | 10,0 | 1 | 0,0 |
| 0x0045 | Innenwiderstand LSU, Bank 2 | Ohm | - | unsigned char | - | 10,0 | 1 | 0,0 |
| 0x0046 | Status Luftklappensystem Low Byte | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x0047 | Status Luftklappensystem High Byte | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x0048 | Kennung Generatortyp und Hersteller Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x0049 | Reglerversion on Generator 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x004A | Kopie begrenzter Erregerstrom Generator 1 | A | - | unsigned char | - | 0,125 | 1 | 0,0 |
| 0x004B | Chiptemperatur Generator 1 | Grad C | - | unsigned char | - | 1,0 | 1 | -40,0 |
| 0x0054 | Kennung Generator Hersteller | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x0064 | DK-Winkel der Notluftposition | % | - | unsigned char | - | 0,390630960464478 | 1 | 0,0 |
| 0x0065 | Spannung Drosselklappen-Poti 1 am unteren Anschlag | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0069 | Spannung Lambdasonde hinter Katalysator | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x006A | Spannung Lambdasonde hinter Katalysator 2 | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x006B | Tastverhältnis Elektrolüfter | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x006C | Istwinkel für Einlass-Nockenwelle | Grad KW | - | signed char | - | 1,0 | 1 | 0,0 |
| 0x006D | Istwinkel für Einlass-Nockenwelle Bank 2 | Grad KW | - | signed char | - | 1,0 | 1 | 0,0 |
| 0x006E | Abgleich DK Modell (Faktor) | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x006F | Abgleich DK Modell (Offset) | kg/h | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x0072 | ADC- Spannung Motortemperatur | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0073 | ADC- Spannung Ansauglufttemperatur | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0074 | ADC- Spannung Temperaturkuehleraustritt | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0075 | ADC- Spannung Umgebungsdrucksensor | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0077 | Integratorwert Klopfregelung Meßfensterende Testimpuls | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0078 | gefilterte Katalysatortemperatur aus Modell | Grad C | - | unsigned char | - | 5,0 | 1 | -50,0 |
| 0x0079 | gefilterte Katalysatortemperatur aus Modell, Bank2 | Grad C | - | unsigned char | - | 5,0 | 1 | -50,0 |
| 0x007E | normierte Heizleistung der Lambdasonde hinter Kat | - | - | unsigned char | - | 0,00999999977648258 | 1 | 0,0 |
| 0x007F | normierte Heizleistung der Lambdasonde hinter Kat 2 | - | - | unsigned char | - | 0,00999999977648258 | 1 | 0,0 |
| 0x0080 | Integratorgradient für Nulltest-Diagnose Klopfregelung | V/s | - | signed char | - | 23,841869354248 | 1 | 0,0 |
| 0x0082 | Lambda-Sollwert bez. auf Einbauort Lambdasonde | - | - | unsigned char | - | 0,0625 | 1 | 0,0 |
| 0x0083 | Lambda-Sollwert bez. auf Einbauort Lambdasonde Bank 2 | - | - | unsigned char | - | 0,0625 | 1 | 0,0 |
| 0x0084 | Motorstarttemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x0085 | schneller Mittelwert des Lambdaregelfaktors | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x0086 | schneller Mittelwert des Lambdaregelfaktors Bank2 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x008B | Faktor Luftdichte f(Ansauglufttemp., Höhe) | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x008C | Zeit nach Startende | s | - | unsigned char | - | 25,6000003814697 | 1 | 0,0 |
| 0x008D | normierter Referenzpegel KR SW- Zylinder 0 | V | - | unsigned char | - | 0,078125 | 1 | 0,0 |
| 0x008E | normierter Referenzpegel KR SW- Zylinder 1 | V | - | unsigned char | - | 0,078125 | 1 | 0,0 |
| 0x008F | normierter Referenzpegel KR SW- Zylinder 2 | V | - | unsigned char | - | 0,078125 | 1 | 0,0 |
| 0x0090 | normierter Referenzpegel KR SW- Zylinder 3 | V | - | unsigned char | - | 0,078125 | 1 | 0,0 |
| 0x0091 | normierter Referenzpegel KR SW- Zylinder 4 | V | - | unsigned char | - | 0,078125 | 1 | 0,0 |
| 0x0092 | normierter Referenzpegel KR SW- Zylinder 5 | V | - | unsigned char | - | 0,078125 | 1 | 0,0 |
| 0x0093 | normierter Referenzpegel KR SW- Zylinder 6 | V | - | unsigned char | - | 0,078125 | 1 | 0,0 |
| 0x0094 | normierter Referenzpegel KR SW- Zylinder 7 | V | - | unsigned char | - | 0,078125 | 1 | 0,0 |
| 0x0095 | Statusflag ti- Abschaltung bei kat. schädigenden Aussetzerraten | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x0096 | Tankfüllstand | l | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x0097 | DMTL Pumpenstrom Referenzleck | mA | - | unsigned char | - | 0,1953125 | 1 | 0,0 |
| 0x0098 | aktuelle Zeit DMTL Leckmessung | s | - | unsigned char | - | 1,60000002384186 | 1 | 0,0 |
| 0x0099 | Abgleich EV Modell (Faktor) | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x009A | Differenz Pumpstrom zwischen Referenz und min. bei Grobleckmessung | mA | - | unsigned char | - | 0,1953125 | 1 | 0,0 |
| 0x009B | Abgleich EV Modell (Offset) | kg/h | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x009D | I-Anteil der stetigen LRHK | - | - | signed char | - | 4,8828125E-4 | 1 | 0,0 |
| 0x009E | I-Anteil der stetigen LRHK Bank 2 | - | - | signed char | - | 4,8828125E-4 | 1 | 0,0 |
| 0x009F | Korrekturwert der LSU-Spannung vor Katalysator | V | - | signed char | - | 0,001953125 | 1 | 0,0 |
| 0x00A0 | Korrekturwert der LSU-Spannung vor Katalysator Bank 2 | V | - | signed char | - | 0,001953125 | 1 | 0,0 |
| 0x00A3 | Abgasmassenfluß gefiltert, Bank 1 | kg/h | - | unsigned char | - | 4,0 | 1 | 0,0 |
| 0x00A4 | Abgasmassenfluß gefiltert, Bank 2 | kg/h | - | unsigned char | - | 4,0 | 1 | 0,0 |
| 0x00A5 | Abstellzeit | s | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x00A6 | LSU-Spannung vor Katalysator, korrigiert (Byte) | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x00A7 | LSU-Spannung vor Katalysator, korrigiert Bank2 (Byte) | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x00A8 | Sondenspannung vor Katalysator einer Breitbandlambdasonde (ADC-Wert) (Byte) | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x00A9 | Sondenspannung vor Katalysator einer Breitbandlambdasonde Bank2 (ADC-Wert) (Byte) | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x00AA | Dynamikwert der LSU | - | - | unsigned char | - | 0,015625 | 1 | 0,0 |
| 0x00AB | Dynamikwert der LSU Bank 2 | - | - | unsigned char | - | 0,015625 | 1 | 0,0 |
| 0x00AC | multiplikativer Gemischadaptionsfaktor unterer multiplikativer Bereich | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x00AD | multiplikativer Gemischadaptionsfaktor unterer multiplikativer Bereich der Bank 2 | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x00AE | Regelabweichung Lambda | - | - | signed char | - | 0,0078125 | 1 | 0,0 |
| 0x00AF | Regelabweichung Lambda Bank 2 | - | - | signed char | - | 0,0078125 | 1 | 0,0 |
| 0x00B0 | Lambdaamplitude nach Filterung | - | - | signed char | - | 0,0625 | 1 | 0,0 |
| 0x00B1 | Lambdaamplitude nach Filterung Bank 2 | - | - | signed char | - | 0,0625 | 1 | 0,0 |
| 0x00B2 | Lambda-Istwert | - | - | unsigned char | - | 0,0625 | 1 | 0,0 |
| 0x00B3 | Lambda-Istwert Bank 2 | - | - | unsigned char | - | 0,0625 | 1 | 0,0 |
| 0x00B4 | Absolutdruck Abgassystem | hPa | - | unsigned char | - | 10,0 | 1 | 0,0 |
| 0x00B5 | Absolutdruck Abgassystem 2  | hPa | - | unsigned char | - | 10,0 | 1 | 0,0 |
| 0x00BA | Generatorspannung | V | - | unsigned char | - | 0,100000001490116 | 1 | 10,6 |
| 0x00BB | vom Generator empfangenes Lastsignal | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x00BC | Generatortemperatur | Grad C | - | unsigned char | - | 192,0 | 1 | -48,0 |
| 0x00BD | Beladung des Aktivkohlefilters | - | - | signed char | - | 0,5 | 1 | 0,0 |
| 0x00BE | Betriebszeit | min | - | unsigned char | - | 1536,0 | 1 | 0,0 |
| 0x00BF | Abgastemperatur im Katalysator aus Modell | Grad C | - | unsigned char | - | 5,0 | 1 | -50,0 |
| 0x00C0 | Abgastemperatur im Katalysator aus Modell Bank 2 | Grad C | - | unsigned char | - | 5,0 | 1 | -50,0 |
| 0x00C1 | Istwert Lambdasonde, korrigiert um Zusatzamplitude | - | - | unsigned char | - | 0,0625 | 1 | 0,0 |
| 0x00C2 | Istwert Lambdasonde, korrigiert um Zusatzamplitude, Bank 2 | - | - | unsigned char | - | 0,0625 | 1 | 0,0 |
| 0x00C3 | VVT-Sollwert in Prozent bezüglich Verstellbereich Bank1 | % | - | unsigned char | - | 0,390625089406967 | 1 | 0,0 |
| 0x00C4 | VVT-Sollwert in Prozent bezüglich Verstellbereich Bank 2 | % | - | unsigned char | - | 0,390625089406967 | 1 | 0,0 |
| 0x00C5 | VVT-Istwert in Prozent bezüglich Verstellbereich Bank1 | % | - | unsigned char | - | 0,390625089406967 | 1 | 0,0 |
| 0x00C6 | VVT-Istwert in Prozent bezüglich Verstellbereich Bank2 | % | - | unsigned char | - | 0,390625089406967 | 1 | 0,0 |
| 0x00C7 | Betriebsartenbyte | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x00C8 | Delta Counter NVRAM-Backup | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x00C9 | Status SMG-Diagnose | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x00CA | Korrekturfaktor Höhe (byte) | - | - | unsigned char | - | 0,015625 | 1 | 0,0 |
| 0x00CB | Fahrzeuggeschwindigkeit, CAN-Signal | km/h | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x00CC | schneller Mittelwert des Lambdaregelfaktors | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x00CD | Lambda-Sollwert bezogen auf Einbauort Lambda-Sensor | - | - | unsigned char | - | 0,0625 | 1 | 0,0 |
| 0x00CE | Korrekturfaktor Höhe | - | - | unsigned char | - | 0,015625 | 1 | 0,0 |
| 0x00CF | Motorstarttemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x00D0 | schneller Mittelwert des Lambdaregelfaktors | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x00D1 | Lambda-Sollwert bezogen auf Einbauort Lambda-Sensor | - | - | unsigned char | - | 0,0625 | 1 | 0,0 |
| 0x00D2 | Korrekturfaktor Höhe | - | - | unsigned char | - | 0,015625 | 1 | 0,0 |
| 0x00D3 | Motorstarttemperatur | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x00D4 | intelligenter Batteriesensor Fehler 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x00D5 | intelligenter Batteriesensor Fehler 2 | - | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x00D6 | Referenzmoment für Aussetzererkennung | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x00D9 | relative Kraftstoffmasse | % | - | unsigned char | - | 3,0 | 1 | 0,0 |
| 0x00DA | O2- Überschuss bzw. O2-Mangel der LSU im Abgas | % O2 | - | signed char | - | 0,25 | 1 | 0,0 |
| 0x00DB | Korrekturwert für den Innenwiderstand der Nernstzelle der LSU (Byte) | Ohm | - | signed char | - | 10,0 | 1 | 0,0 |
| 0x00DC | Korrekturfaktor für Funktionspumstrom LSU aus Schubabgleich | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x00DD | Status Standverbraucher registriert Teil 1 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x00DE | Status Standverbraucher registriert Teil 2 | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x00DF | aktuelle Batteriespannung | V | - | unsigned char | - | 0,0640000030398369 | 1 | 6,0 |
| 0x00E1 | relativer Fuellstand des Motoroels | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x00F8 | Erregerstrom Generator | A | - | unsigned char | - | 0,125 | 1 | 0,0 |
| 0x00F9 | vom Generator empfangene Generatorsollspannung | V | - | unsigned char | - | 0,100000001490116 | 1 | 10,6 |
| 0x00FA | Auslastungsgrad Generator | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x00FB | Verweildauer des Ruhestroms innerhalb 80-200mA | min | - | unsigned char | - | 14,9333333969116 | 1 | 0,0 |
| 0x00FC | Verweildauer des Ruhestroms innerhalb 200-1000mA | min | - | unsigned char | - | 14,9333333969116 | 1 | 0,0 |
| 0x00FD | Verweildauer des Ruhestroms grösser 1000mA | min | - | unsigned char | - | 14,9333333969116 | 1 | 0,0 |
| 0x00FF | Umweltbedingung unbekannt | - | - | unsigned char | - | 1 | 1 | 0 |

### FARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| 0x29CC | 0x1113 | 0x0000 | 0x1114 | 0x1115 |
| 0x29CD | 0x1113 | 0x0000 | 0x1114 | 0x1115 |
| 0x29CE | 0x1113 | 0x0000 | 0x1114 | 0x1115 |
| 0x29CF | 0x1113 | 0x0000 | 0x1114 | 0x1115 |
| 0x29D0 | 0x1113 | 0x0000 | 0x1114 | 0x1115 |
| 0x29D1 | 0x1113 | 0x0000 | 0x1114 | 0x1115 |
| 0x29D2 | 0x1113 | 0x0000 | 0x1114 | 0x1115 |
| 0x29D3 | 0x1113 | 0x0000 | 0x1114 | 0x1115 |
| 0x29D4 | 0x1113 | 0x0000 | 0x1114 | 0x1115 |
| 0x29D9 | 0x0000 | 0x0000 | 0x11EB | 0x0000 |
| 0x29DD | 0x0000 | 0x1116 | 0x0000 | 0x1117 |
| 0x29E5 | 0x0000 | 0x0000 | 0x11EC | 0x11ED |
| 0x29E6 | 0x0000 | 0x0000 | 0x11EC | 0x11ED |
| 0x29E7 | 0x0000 | 0x0000 | 0x11EE | 0x111D |
| 0x29E8 | 0x0000 | 0x0000 | 0x11EE | 0x111D |
| 0x29ED | 0x0000 | 0x0000 | 0x11EF | 0x11F0 |
| 0x29EE | 0x0000 | 0x0000 | 0x11EF | 0x11F0 |
| 0x29EF | 0x11F1 | 0x11F2 | 0x11F4 | 0x11F3 |
| 0x29F0 | 0x11F1 | 0x11F2 | 0x11F4 | 0x11F3 |
| 0x29F4 | 0x0000 | 0x0000 | 0x11F5 | 0x0000 |
| 0x29F5 | 0x0000 | 0x0000 | 0x11F5 | 0x0000 |
| 0x29FA | 0x0000 | 0x0000 | 0x0000 | 0x13B6 |
| 0x2A12 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2A13 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2A14 | 0x0000 | 0x0000 | 0x0000 | 0x1120 |
| 0x2A15 | 0x0000 | 0x0000 | 0x0000 | 0x1121 |
| 0x2A16 | 0x0000 | 0x0000 | 0x11F6 | 0x0000 |
| 0x2A17 | 0x101D | 0x101E | 0x101F | 0x101C |
| 0x2A18 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2A19 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2A1A | 0x0000 | 0x0000 | 0x1123 | 0x0000 |
| 0x2A1D | 0x1124 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A1E | 0x0000 | 0x13C5 | 0x1015 | 0x1060 |
| 0x2A58 | 0x0000 | 0x1016 | 0x11F8 | 0x11F9 |
| 0x2A59 | 0x11FA | 0x112A | 0x1127 | 0x1126 |
| 0x2A5A | 0x11FA | 0x112A | 0x1127 | 0x1126 |
| 0x2A5B | 0x11FA | 0x112A | 0x1127 | 0x1126 |
| 0x2A5C | 0x11FA | 0x112A | 0x1127 | 0x1126 |
| 0x2A5D | 0x1028 | 0x11FB | 0x0000 | 0x0000 |
| 0x2A5E | 0x1028 | 0x11FB | 0x0000 | 0x0000 |
| 0x2A5F | 0x0000 | 0x0000 | 0x112B | 0x112C |
| 0x2A60 | 0x0000 | 0x0000 | 0x112B | 0x112C |
| 0x2A61 | 0x0000 | 0x102A | 0x112D | 0x112E |
| 0x2A62 | 0x0000 | 0x102A | 0x112D | 0x112E |
| 0x2A63 | 0x112F | 0x1029 | 0x0000 | 0x0000 |
| 0x2A64 | 0x112F | 0x1029 | 0x0000 | 0x0000 |
| 0x2A65 | 0x1130 | 0x1132 | 0x1133 | 0x1131 |
| 0x2A66 | 0x1130 | 0x11FC | 0x1133 | 0x1131 |
| 0x2A67 | 0x1134 | 0x102F | 0x1015 | 0x1014 |
| 0x2A68 | 0x1134 | 0x102F | 0x1015 | 0x1014 |
| 0x2A69 | 0x102E | 0x0000 | 0x1135 | 0x1136 |
| 0x2A6A | 0x102E | 0x0000 | 0x1135 | 0x1136 |
| 0x2A6B | 0x0000 | 0x11FD | 0x1039 | 0x1138 |
| 0x2A6C | 0x0000 | 0x0000 | 0x0000 | 0x1139 |
| 0x2A6D | 0x11FF | 0x113D | 0x113C | 0x11FE |
| 0x2A6E | 0x11FF | 0x113D | 0x113C | 0x11FE |
| 0x2A6F | 0x0000 | 0x0000 | 0x0000 | 0x113E |
| 0x2A80 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2A81 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2A83 | 0x1200 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A84 | 0x1200 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A85 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2A86 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2A88 | 0x1201 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A89 | 0x1201 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A8A | 0x0000 | 0x0000 | 0x1141 | 0x0000 |
| 0x2A8B | 0x0000 | 0x0000 | 0x1141 | 0x0000 |
| 0x2A8C | 0x0000 | 0x0000 | 0x1202 | 0x0000 |
| 0x2A8D | 0x0000 | 0x0000 | 0x1202 | 0x0000 |
| 0x2A8E | 0x0000 | 0x0000 | 0x1143 | 0x0000 |
| 0x2A8F | 0x0000 | 0x0000 | 0x1143 | 0x0000 |
| 0x2A90 | 0x0000 | 0x0000 | 0x1143 | 0x0000 |
| 0x2A91 | 0x0000 | 0x0000 | 0x1143 | 0x0000 |
| 0x2B5C | 0x1203 | 0x1144 | 0x0000 | 0x0000 |
| 0x2B5D | 0x1204 | 0x1146 | 0x0000 | 0x1147 |
| 0x2B62 | 0x1148 | 0x1149 | 0x1015 | 0x1060 |
| 0x2B63 | 0x1148 | 0x1149 | 0x1015 | 0x1060 |
| 0x2B64 | 0x1148 | 0x1149 | 0x1015 | 0x1060 |
| 0x2B65 | 0x1148 | 0x1149 | 0x1015 | 0x1060 |
| 0x2B66 | 0x0000 | 0x1205 | 0x0000 | 0x0000 |
| 0x2B70 | 0x1206 | 0x0000 | 0x1015 | 0x1014 |
| 0x2B71 | 0x1207 | 0x1208 | 0x120A | 0x1209 |
| 0x2B72 | 0x0000 | 0x0000 | 0x120B | 0x0000 |
| 0x2B73 | 0x0000 | 0x0000 | 0x120C | 0x120D |
| 0x2B80 | 0x0000 | 0x0000 | 0x13B8 | 0x13B7 |
| 0x2B82 | 0x0000 | 0x0000 | 0x13B8 | 0x13B7 |
| 0x2B98 | 0x1151 | 0x0000 | 0x0000 | 0x0000 |
| 0x2B99 | 0x0000 | 0x0000 | 0x1210 | 0x1211 |
| 0x2B9A | 0x1154 | 0x0000 | 0x0000 | 0x0000 |
| 0x2B9B | 0x1155 | 0x0000 | 0x0000 | 0x0000 |
| 0x2B9C | 0x1212 | 0x1213 | 0x1214 | 0x0000 |
| 0x2B9D | 0x0000 | 0x1215 | 0x1216 | 0x1217 |
| 0x2B9E | 0x13B9 | 0x13B9 | 0x13B9 | 0x13B9 |
| 0x2BC0 | 0x10EE | 0x1090 | 0x0000 | 0x0000 |
| 0x2BC1 | 0x0000 | 0x13C5 | 0x13C7 | 0x13C6 |
| 0x2C24 | 0x121A | 0x0000 | 0x0000 | 0x0000 |
| 0x2C31 | 0x0000 | 0x0000 | 0x1161 | 0x1162 |
| 0x2C32 | 0x0000 | 0x0000 | 0x1161 | 0x1162 |
| 0x2C37 | 0x0000 | 0x1163 | 0x0000 | 0x0000 |
| 0x2C38 | 0x0000 | 0x1163 | 0x0000 | 0x0000 |
| 0x2C39 | 0x0000 | 0x0000 | 0x1076 | 0x0000 |
| 0x2C3A | 0x0000 | 0x0000 | 0x1076 | 0x0000 |
| 0x2C3B | 0x1164 | 0x0000 | 0x0000 | 0x0000 |
| 0x2C3C | 0x1164 | 0x0000 | 0x0000 | 0x0000 |
| 0x2C47 | 0x0000 | 0x0000 | 0x1015 | 0x1014 |
| 0x2C48 | 0x0000 | 0x0000 | 0x1015 | 0x1014 |
| 0x2C49 | 0x1165 | 0x1166 | 0x0000 | 0x0000 |
| 0x2C4A | 0x1165 | 0x1166 | 0x0000 | 0x0000 |
| 0x2C4B | 0x1072 | 0x121C | 0x121B | 0x1168 |
| 0x2C4C | 0x1072 | 0x121C | 0x121B | 0x1168 |
| 0x2C4D | 0x116A | 0x116B | 0x0000 | 0x116C |
| 0x2C4E | 0x116A | 0x116B | 0x0000 | 0x116C |
| 0x2C4F | 0x0000 | 0x106E | 0x0000 | 0x0000 |
| 0x2C50 | 0x0000 | 0x106E | 0x0000 | 0x0000 |
| 0x2C51 | 0x0000 | 0x106F | 0x0000 | 0x0000 |
| 0x2C52 | 0x0000 | 0x106F | 0x0000 | 0x0000 |
| 0x2C53 | 0x0000 | 0x121D | 0x0000 | 0x0000 |
| 0x2C54 | 0x0000 | 0x121D | 0x0000 | 0x0000 |
| 0x2C61 | 0x0000 | 0x0000 | 0x0000 | 0x116D |
| 0x2C62 | 0x0000 | 0x0000 | 0x0000 | 0x116D |
| 0x2C6D | 0x116E | 0x1171 | 0x1170 | 0x116F |
| 0x2C6E | 0x116E | 0x1171 | 0x1170 | 0x116F |
| 0x2C71 | 0x1172 | 0x1016 | 0x121E | 0x1014 |
| 0x2C72 | 0x1172 | 0x1016 | 0x121E | 0x1014 |
| 0x2C84 | 0x0000 | 0x13BA | 0x0000 | 0x0000 |
| 0x2C85 | 0x0000 | 0x13BA | 0x0000 | 0x0000 |
| 0x2C9C | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2C9D | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2C9E | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2C9F | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2CA0 | 0x1174 | 0x121F | 0x1175 | 0x1176 |
| 0x2CA1 | 0x1174 | 0x121F | 0x1175 | 0x1176 |
| 0x2CA8 | 0x1178 | 0x0000 | 0x0000 | 0x0000 |
| 0x2CA9 | 0x1178 | 0x0000 | 0x0000 | 0x0000 |
| 0x2CEF | 0x1220 | 0x117B | 0x117C | 0x117A |
| 0x2CF0 | 0x0000 | 0x0000 | 0x1221 | 0x1222 |
| 0x2CF1 | 0x1223 | 0x0000 | 0x0000 | 0x0000 |
| 0x2CF8 | 0x1224 | 0x0000 | 0x0000 | 0x0000 |
| 0x2CF9 | 0x1181 | 0x0000 | 0x1225 | 0x1226 |
| 0x2CFA | 0x1181 | 0x0000 | 0x1225 | 0x1226 |
| 0x2CFF | 0x1227 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D00 | 0x0000 | 0x0000 | 0x1228 | 0x1229 |
| 0x2D01 | 0x0000 | 0x0000 | 0x122A | 0x1186 |
| 0x2D02 | 0x122B | 0x0000 | 0x0000 | 0x0000 |
| 0x2D03 | 0x0000 | 0x0000 | 0x122C | 0x122D |
| 0x2D04 | 0x118A | 0x0000 | 0x0000 | 0x0000 |
| 0x2D05 | 0x122E | 0x0000 | 0x0000 | 0x0000 |
| 0x2D0F | 0x0000 | 0x122F | 0x1231 | 0x1230 |
| 0x2D14 | 0x0000 | 0x0000 | 0x1234 | 0x1235 |
| 0x2D1A | 0x1236 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D1B | 0x118F | 0x0000 | 0x1237 | 0x1238 |
| 0x2D1C | 0x0000 | 0x0000 | 0x1237 | 0x1238 |
| 0x2D28 | 0x0000 | 0x0000 | 0x1192 | 0x1239 |
| 0x2D29 | 0x123A | 0x0000 | 0x1196 | 0x1195 |
| 0x2D32 | 0x0000 | 0x0000 | 0x123C | 0x123B |
| 0x2D6E | 0x1197 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D70 | 0x119B | 0x119E | 0x119C | 0x119D |
| 0x2D71 | 0x123D | 0x11A1 | 0x123F | 0x123E |
| 0x2D72 | 0x0000 | 0x0000 | 0x1240 | 0x11A3 |
| 0x2D75 | 0x1241 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D76 | 0x1242 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D78 | 0x1243 | 0x0000 | 0x0000 | 0x0000 |
| 0x2DBF | 0x1244 | 0x10B5 | 0x1246 | 0x1245 |
| 0x2DCA | 0x11A8 | 0x1274 | 0x11AA | 0x0000 |
| 0x2DCB | 0x1248 | 0x1249 | 0x0000 | 0x0000 |
| 0x2DCF | 0x124A | 0x1274 | 0x11AA | 0x0000 |
| 0x2DD7 | 0x11A8 | 0x1274 | 0x124B | 0x0000 |
| 0x2DD9 | 0x124C | 0x10B5 | 0x124D | 0x0000 |
| 0x2DDA | 0x1275 | 0x1274 | 0x0000 | 0x0000 |
| 0x2DDB | 0x0000 | 0x1247 | 0x0000 | 0x0000 |
| 0x2DDC | 0x11A8 | 0x1247 | 0x11AA | 0x0000 |
| 0x2DDD | 0x124F | 0x10B5 | 0x0000 | 0x0000 |
| 0x2DDE | 0x1250 | 0x1251 | 0x0000 | 0x124F |
| 0x2DDF | 0x1250 | 0x1251 | 0x0000 | 0x124F |
| 0x2DEB | 0x0000 | 0x10BB | 0x1031 | 0x1032 |
| 0x2DEC | 0x1252 | 0x0000 | 0x10BD | 0x0000 |
| 0x2DED | 0x10BE | 0x0000 | 0x0000 | 0x0000 |
| 0x2E24 | 0x12EE | 0x0000 | 0x0000 | 0x0000 |
| 0x2E25 | 0x12EE | 0x0000 | 0x0000 | 0x0000 |
| 0x2E26 | 0x12EE | 0x0000 | 0x0000 | 0x0000 |
| 0x2E27 | 0x12EE | 0x0000 | 0x0000 | 0x0000 |
| 0x2E28 | 0x12EE | 0x0000 | 0x0000 | 0x0000 |
| 0x2E29 | 0x12EE | 0x0000 | 0x0000 | 0x0000 |
| 0x2E2A | 0x12EE | 0x0000 | 0x0000 | 0x0000 |
| 0x2E2B | 0x12EE | 0x0000 | 0x0000 | 0x0000 |
| 0x2E30 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2E31 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2E32 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2E33 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2E34 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2E35 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2E36 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2E37 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2E68 | 0x1253 | 0x0000 | 0x1254 | 0x11B6 |
| 0x2E69 | 0x1253 | 0x0000 | 0x1254 | 0x11B6 |
| 0x2E6A | 0x1253 | 0x0000 | 0x1254 | 0x11B6 |
| 0x2E6B | 0x1253 | 0x0000 | 0x1254 | 0x1255 |
| 0x2E6E | 0x12ED | 0x0000 | 0x0000 | 0x0000 |
| 0x2E6F | 0x12ED | 0x0000 | 0x0000 | 0x0000 |
| 0x2E72 | 0x1253 | 0x0000 | 0x11B9 | 0x11B8 |
| 0x2E73 | 0x11BA | 0x0000 | 0x0000 | 0x0000 |
| 0x2E7C | 0x10DC | 0x1256 | 0x0000 | 0x0000 |
| 0x2E8B | 0x1257 | 0x1256 | 0x0000 | 0x1258 |
| 0x2E8C | 0x1259 | 0x125A | 0x0000 | 0x11C0 |
| 0x2E8D | 0x125B | 0x10D8 | 0x0000 | 0x125C |
| 0x2E97 | 0x125D | 0x125E | 0x10DC | 0x1055 |
| 0x2EA0 | 0x11BE | 0x1071 | 0x11C1 | 0x11C0 |
| 0x2EB8 | 0x0000 | 0x1274 | 0x0000 | 0x0000 |
| 0x2EBA | 0x0000 | 0x1274 | 0x0000 | 0x0000 |
| 0x2EBB | 0x0000 | 0x1274 | 0x0000 | 0x0000 |
| 0x2EBC | 0x0000 | 0x1274 | 0x0000 | 0x0000 |
| 0x2EBD | 0x0000 | 0x1274 | 0x0000 | 0x0000 |
| 0x2EBE | 0x0000 | 0x1274 | 0x0000 | 0x0000 |
| 0x2ECC | 0x0000 | 0x0000 | 0x0000 | 0x10DA |
| 0x2ECD | 0x0000 | 0x0000 | 0x0000 | 0x1091 |
| 0x2ECE | 0x0000 | 0x0000 | 0x0000 | 0x10E4 |
| 0x2ECF | 0x0000 | 0x0000 | 0x0000 | 0x1055 |
| 0x2ED0 | 0x0000 | 0x0000 | 0x0000 | 0x10E5 |
| 0x2ED1 | 0x0000 | 0x0000 | 0x0000 | 0x10DD |
| 0x2ED2 | 0x0000 | 0x0000 | 0x0000 | 0x10E6 |
| 0x2ED3 | 0x0000 | 0x0000 | 0x0000 | 0x10E7 |
| 0x2EE0 | 0x13BB | 0x10B5 | 0x10EE | 0x1090 |
| 0x2EE1 | 0x13BD | 0x0000 | 0x13BE | 0x13BC |
| 0x2EEA | 0x0000 | 0x0000 | 0x1060 | 0x1015 |
| 0x2EEC | 0x125F | 0x0000 | 0x0000 | 0x1260 |
| 0x2EF4 | 0x11C7 | 0x0000 | 0x0000 | 0x0000 |
| 0x2EF5 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2EFE | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2F08 | 0x13CB | 0x0000 | 0x1015 | 0x1014 |
| 0x2F09 | 0x13CC | 0x0000 | 0x0000 | 0x118D |
| 0x2F0B | 0x0000 | 0x0000 | 0x13BF | 0x12EF |
| 0x2F0D | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2F10 | 0x0000 | 0x0000 | 0x0000 | 0x1091 |
| 0x2F11 | 0x10F0 | 0x0000 | 0x10DD | 0x10F2 |
| 0x2F12 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2F17 | 0x0000 | 0x0000 | 0x0000 | 0x11C8 |
| 0x2F44 | 0x1261 | 0x1263 | 0x1262 | 0x1264 |
| 0x2F45 | 0x11CD | 0x1265 | 0x11CF | 0x0000 |
| 0x2F46 | 0x0000 | 0x1266 | 0x1268 | 0x1267 |
| 0x2F4E | 0x0000 | 0x1269 | 0x11D3 | 0x118D |
| 0x2F4F | 0x11D4 | 0x0000 | 0x11D5 | 0x11D6 |
| 0x2F50 | 0x11D7 | 0x0000 | 0x0000 | 0x126A |
| 0x2F59 | 0x0000 | 0x11D9 | 0x0000 | 0x0000 |
| 0x2F5A | 0x0000 | 0x11DA | 0x0000 | 0x0000 |
| 0x2F62 | 0x11DB | 0x0000 | 0x0000 | 0x0000 |
| 0x2F67 | 0x0000 | 0x126B | 0x0000 | 0x0000 |
| 0x2F6C | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2F71 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2F77 | 0x126C | 0x126D | 0x118C | 0x118D |
| 0x2F78 | 0x0000 | 0x0000 | 0x1015 | 0x1014 |
| 0x2F7B | 0x126E | 0x0000 | 0x0000 | 0x0000 |
| 0x2F80 | 0x11C2 | 0x10B9 | 0x0000 | 0x0000 |
| 0x2F8A | 0x126F | 0x11E1 | 0x1191 | 0x1190 |
| 0x2F94 | 0x0000 | 0x1016 | 0x1015 | 0x1014 |
| 0x2F9E | 0x1018 | 0x1071 | 0x1270 | 0x0000 |
| 0x2FA3 | 0x1271 | 0x0000 | 0x0000 | 0x0000 |
| 0xCD87 | 0x0000 | 0x1272 | 0x11EA | 0x1273 |
| 0xCD8B | 0x0000 | 0x1272 | 0x11EA | 0x1273 |
| 0xCD97 | 0x1275 | 0x1274 | 0x13C9 | 0x13C8 |
| 0xCD9B | 0x1111 | 0x1274 | 0x0000 | 0x0000 |
| 0xCDA1 | 0x0000 | 0x1274 | 0x0000 | 0x0000 |
| 0xCDA2 | 0x0000 | 0x1274 | 0x0000 | 0x0000 |
| 0xCDA3 | 0x0000 | 0x1274 | 0x0000 | 0x0000 |
| 0xCDA7 | 0x0000 | 0x1274 | 0x0000 | 0x0000 |
| 0xCDAA | 0x0000 | 0x1274 | 0x0000 | 0x0000 |
| 0xCDAC | 0x0000 | 0x1274 | 0x0000 | 0x0000 |
| 0xCDB0 | 0x0000 | 0x1274 | 0x0000 | 0x0000 |
| 0xCDB3 | 0x1275 | 0x1274 | 0x13C9 | 0x13C8 |
| 0xCDB7 | 0x0000 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDEB | 0x0000 | 0x1274 | 0x0000 | 0x0000 |
| 0xCDED | 0x1275 | 0x1274 | 0x0000 | 0x0000 |
| 0xCDEE | 0x0000 | 0x1274 | 0x0000 | 0x0000 |
| 0xCDEF | 0x0000 | 0x1274 | 0x0000 | 0x0000 |
| 0xCDF9 | 0x12F1 | 0x10B9 | 0x0000 | 0x0000 |
| 0xCDFA | 0x12F1 | 0x10B9 | 0x0000 | 0x0000 |

### FARTTEXTEINDIVIDUELL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x0000 | kein passendes Fehlersymptom |
| 0x1014 | Kurzschluss nach Plus |
| 0x1015 | Kurzschluss nach Minus |
| 0x1016 | Leitungsunterbrechung |
| 0x1018 | Signal unplausibel |
| 0x101C | obere Schwelle Pumpenstrom bei Referenzmessung |
| 0x101D | Pumpenstromschwelle bei Ventilprüfung erreicht |
| 0x101E | Abbruch wegen Stromschwankungen bei Feinleckprüfung |
| 0x101F | untere Schwelle Pumpenstrom bei Referenzmessung |
| 0x1028 | Sensorsignale zueinander unplausibel |
| 0x1029 | Lagereglerüberwachung |
| 0x102A | keine Anschläge gelernt |
| 0x102E | Relais-Fehler |
| 0x102F | Kurzschluss der Motorleitungen |
| 0x1031 | Unterspannung |
| 0x1032 | Überspannung |
| 0x1039 | Exzenterwinkel fährt nicht auf Vollhubposition |
| 0x1055 | Übertemperatur |
| 0x1060 | Kurzschluss nach Plus oder Leitungsunterbrechung |
| 0x106E | Unterbrechung Abgleichsleitung |
| 0x106F | Unterbrechung Nernstleitung |
| 0x1071 | Kommunikationsfehler |
| 0x1072 | Initialisierungsfehler |
| 0x1076 | Sondensignal zu träge |
| 0x1090 | Signal oberhalb Schwelle |
| 0x1091 | elektrisch |
| 0x10B5 | kein Signal |
| 0x10B9 | Timeout |
| 0x10BB | batterieloser Betrieb |
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
| 0x10EE | Signal unterhalb Schwelle |
| 0x10F0 | keine Kommunikation |
| 0x10F2 | Hardwaredefekt |
| 0x1111 | Prüfsumme ungleich errechnetem Wert |
| 0x1113 | Verbrennungsaussetzer im Warmlauf, emissionsverschlechternd |
| 0x1114 | Verbrennungsaussetzer betriebswarm, emissionsverschlechternd |
| 0x1115 | Verbrennungsaussetzer mit Zylinderabschaltung |
| 0x1116 | kein Raddrehzahlsignal erhalten |
| 0x1117 | Radgeschwindigkeit zu hoch |
| 0x111D | System zu mager additiv pro Zeit zu groß |
| 0x1120 | Feinleck erkannt |
| 0x1121 | Leckage größer 1,0mm |
| 0x1123 | Tankentlüftungssystem |
| 0x1124 | Tankfüllstandssignal unplausibel |
| 0x1125 | CAN, Ungültigkeitswert empfangen |
| 0x1126 | Magnetloss-Fehler |
| 0x1127 | Reset-Fehler |
| 0x112A | Parity-Fehler oder kein Signal |
| 0x112B | Sensorversorgungsspannung zu klein |
| 0x112C | Sensorversorgungsspannung zu hoch |
| 0x112D | Fehler unteres Lernfenster |
| 0x112E | Verstellbereich fehlerhaft |
| 0x112F | Drehrichtungserkennung |
| 0x1130 | ROM-Test-Fehler |
| 0x1131 | EEPROM-Test-Fehler |
| 0x1132 | Watchdog oder Temperatursensorfehler |
| 0x1133 | RAM-Test-Fehler |
| 0x1134 | Ansteuerungsfehler allgemein |
| 0x1135 | Spannung zu klein |
| 0x1136 | Spannung zu hoch |
| 0x1138 | Drehzahlfüllungsbegrenzung |
| 0x1139 | Anschläge lernen notwendig |
| 0x113C | Temperatur E-Motor zu hoch |
| 0x113D | Steuergerätetemperatur zu hoch |
| 0x113E | maximale Anzahl der Minhubanschläge überschritten |
| 0x1141 | Anschlagadaptionen außerhalb gültigem Bereich |
| 0x1143 | Korrelationsfehler, ein Zahn Versatz |
| 0x1144 | Leitungsunterbrechung, Drehzahlsignal |
| 0x1146 | Zahnkorrektur bei einem Zahn zuwenig |
| 0x1147 | Zahnkorrektur bei einem Zahn zuviel |
| 0x1148 | unplausible Phasenflankenanzahl |
| 0x1149 | Lage der Phasenflanken oder Einbaulage außerhalb Toleranzen |
| 0x1151 | Aktualitätszähler EEPROM und RAMBACKUP unterschiedlich |
| 0x1154 | Rechnerüberwachung: RAM |
| 0x1155 | Rechnerüberwachung: ROM |
| 0x115A | Plausibilitätsfehler |
| 0x115F | CAN Botschaft fehlerhaft |
| 0x1161 | Offsetprüfung, System zu mager |
| 0x1162 | Offsetprüfung, System zu fett |
| 0x1163 | Heizereinkopplung auf Signalpfad |
| 0x1164 | Sonde an Luft |
| 0x1165 | Signal zu mager |
| 0x1166 | Signal zu fett |
| 0x1168 | Signalkreisaptionswert zu hoch |
| 0x116A | Signalspannung im Schub zu klein infolge offener Pumpstromleitung |
| 0x116B | Unterbrechung Pumpstrompfad |
| 0x116C | Lambdaregelwert oberhalb Schwelle infolge offener Pumpstromleitung |
| 0x116D | Nernstzellenwiderstand oder Keramiktemperatur unplausibel, Leitungs- oder Heizerfehler |
| 0x116E | Sonde dynamisch zu langsam |
| 0x116F | Signal überschreitet Schwellwert nicht |
| 0x1170 | Signal unterschreitet Schwellwert nicht |
| 0x1171 | Schubspannungsschwelle nicht erreicht |
| 0x1172 | Heiztakteinkopplung auf Signal |
| 0x1174 | Innenwiderstand der Nernstzelle unplausibel oder zu späte Betriebsbereitschaft |
| 0x1175 | RI-Regler dauerhaft am unteren Anschlag |
| 0x1176 | RI-Regler dauerhaft am oberen Anschlag |
| 0x1178 | Sondenheizung defekt (Innenwiderstand) |
| 0x117A | Kurzschluss |
| 0x117B | Lastabfall |
| 0x117C | Überlastung |
| 0x1181 | unplausibel zu Ersatzwert aus Füllung |
| 0x1186 | Fehler bei Federprüfung 'Öffnen', Abbruch Feder öffnet nicht |
| 0x118A | UMA-Lernen während Urinitialisierung abgebrochen |
| 0x118C | untere Schwelle unterschritten |
| 0x118D | obere Schwelle überschritten |
| 0x118F | Gleichlauffehler zwischen PWG1 und PWG2 |
| 0x1190 | Spannungsschwellwert überschritten |
| 0x1191 | Spannungsschwellwert unterschritten |
| 0x1192 | Signal unterhalb Schwelle, Kurzschluss nach Minus |
| 0x1195 | Drucksensor hat obere Schwelle überschritten |
| 0x1196 | Drucksensor hat untere Schwelle unterschritten |
| 0x1197 | Funktionsüberwachung Momentenvergleich |
| 0x119B | Reaktionsüberwachung |
| 0x119C | Zündwinkelüberwachung |
| 0x119D | RL-Überwachung |
| 0x119E | ADC-Überwachung |
| 0x11A1 | Varianten Codierungsüberwachung |
| 0x11A3 | TPU-Überwachung |
| 0x11A8 | Checksumme fehlerhaft |
| 0x11AA | Alive-Fehler |
| 0x11B1 | Signal nicht plausibel, Zündkreisüberwachung |
| 0x11B2 | Übertemperaturabschaltung oder Signalabfall |
| 0x11B3 | Kurzschluss nach Plus, Nichtimpedanz |
| 0x11B4 | Übergangswiderstand, Hochimpedanz |
| 0x11B6 | Motor mechanisch zu laut oder Sensor außerhalb Toleranz (Empfindlichkeit) |
| 0x11B8 | Testimpulsfehler |
| 0x11B9 | Nulltestfehler |
| 0x11BA | SPI Kommunikation unplausibel |
| 0x11BE | Permittivitätsmessung fehlerhaft |
| 0x11C0 | Temperaturmessung fehlerhaft |
| 0x11C1 | Niveaumessung fehlerhaft |
| 0x11C2 | unplausibel |
| 0x11C6 | Kaltstart, Nebenschluss erkannt |
| 0x11C7 | Thermostat fehlerhaft |
| 0x11C8 | Maximalwert Öltemperatur überschritten |
| 0x11CD | Mehr als 3 Parity-Fehler erkannt |
| 0x11CF | Empfangsfehler des EWS-Telegramms (Start-, Stopbit- oder Framefehler) |
| 0x11D3 | keine Signaländerungen |
| 0x11D4 | Geschwindigkeit unplausibel |
| 0x11D5 | Mindestgeschwindigkeit im Schub nicht erreicht |
| 0x11D6 | Mindestgeschwindigkeit unter Last nicht erreicht |
| 0x11D7 | Geschwindigkeitssignal vom Kombi und ASC nicht kompatibel |
| 0x11D9 | Start in laufenden Motor |
| 0x11DA | Signalfehler Startautomatik |
| 0x11DB | Prüfresultat unplausibel |
| 0x11E1 | Stromversorgung instabil |
| 0x11EA | CAN Baustein DPRAM defekt |
| 0x11EB | Aussetzer aufgrund leerem Tank |
| 0x11EC | Untere Plausibilitätsschwelle unterschritten (obere Multipl.) |
| 0x11ED | Obere Plausibilitätsschwelle überschritten (obere Multipl.) |
| 0x11EE | System zu fett additiv pro Zeit zu klein |
| 0x11EF | Untere Plausibilitätsschwelle unterschritten (Gemisch zu fett) |
| 0x11F0 | Obere Plausibilitätsschwelle überschritten (Gemisch zu mager) |
| 0x11F1 | min Fehler additiv |
| 0x11F2 | max Fehler additiv |
| 0x11F3 | max Fehler multiplikativ |
| 0x11F4 | min Fehler multiplikativ |
| 0x11F5 | Katalysator-Wirkungsgrad unter Schwellwert |
| 0x11F6 | 'Minimalwert' erkannt (Kleinstleck, keine MIL on) |
| 0x11F7 | nicht  korrekt geschlossen |
| 0x11F8 | Kurzschluss nach Masse |
| 0x11F9 | Kurzschluss nach Ubatt |
| 0x11FA | Gradientenüberschreitung / Ident |
| 0x11FB | Datenkonformität |
| 0x11FC | Stack-Test-Fehler |
| 0x11FD | Exzenterwinkel Überlast erkennt Fehler |
| 0x11FE | Strom E-Motoransteuerung zu hoch |
| 0x11FF | Überlastschutz VVT-System |
| 0x1200 | Regelanschlag zu lange, zu groß |
| 0x1201 | Nockenwellenverstellung hat Frühposition nicht erreicht |
| 0x1202 | Nockenwellenverstellung hat Spätposition nicht erreicht |
| 0x1203 | gestörtes Drehzahlsignal |
| 0x1204 | Kurbelwellenzahnfehler oder Lückenverlust |
| 0x1205 | keine Master NW vorhanden |
| 0x1206 | Leitungsunterbrechung oder Überlastung |
| 0x1207 | E_Disamot 'Temperaturgrenzwert Motorschutzmodell' (5 s entprellt) |
| 0x1208 | Reglerüberwachung 'Regeldifferenz zu groß' (0,1 s entprellt) |
| 0x1209 | Potimax 'Potispannung im oberen Diagnosebereich' (30 ms entprellt) |
| 0x120A | Potimin 'Potispannung im unteren Diagnosebereich' (30 ms entprellt) |
| 0x120B | E_Disawarn 'Temperaturschwelle Motorschutzmodell' (5 s entprellt) |
| 0x120C | Pulsation unterhalb Schwelle |
| 0x120D | Pulsation oberhalb Schwelle |
| 0x120E | LL-Steller Öffnung zu gering |
| 0x120F | LL-Steller Öffnung zu groß oder Leckluft |
| 0x1210 | Schreibfehler, RAM Backup Fehler |
| 0x1211 | Lesefehler, RAM Backup Fehler |
| 0x1212 | Rechnerüberwachung RESET |
| 0x1213 | Reset TPU-Überwachung |
| 0x1214 | Reset TPU-RAM |
| 0x1215 | Fehler F/A-Kom. FR-UM aktiv, SG-Fehler |
| 0x1216 | Uberspannung auf VCC geheilt, SG-Fehler |
| 0x1217 | Uberspannung auf VCC aktiv, SG-Fehler |
| 0x1218 | Umgebungstemperatur grösser Modelltemperatur |
| 0x1219 | Umgebungstemperatur kleiner Modelltemperatur |
| 0x121A | Vertauschte Lambdasonden |
| 0x121B | Ubatt low |
| 0x121C | Kommunikation SPI gestört |
| 0x121D | Unterbrechung virtuelle Masse |
| 0x121E | Adernschluß oder CSD (Referenzluft vergiftet) |
| 0x121F | Kalibrierwiderstand im SG fehlerhaft |
| 0x1220 | interner Kommunikationfehler |
| 0x1221 | DK-Lagereg. klemmt kurzzeitig |
| 0x1222 | DK-Lagereg. klemmt anhaltend |
| 0x1223 | DV-E Lageabweichung |
| 0x1224 | Fehler DK-Poti 1 oder DK-Poti 2 |
| 0x1225 | Bereichsverletzung nach unten |
| 0x1226 | Bereichsverletzung nach oben |
| 0x1227 | DV-E Fehler bei Verstärkerabgleich |
| 0x1228 | DV-E Fehler bei Prüfung der öffnenden Feder |
| 0x1229 | DV-E Fehler bei Prüfung der Rückstellfeder |
| 0x122A | Klappe läßt sich nicht von UMA schließen, weil Feder nicht öffnet |
| 0x122B | DV-E Fehler bei Prüfung Notluftposition |
| 0x122C | Lernverbot Status Prüfbedingung = 27 |
| 0x122D | Lernverbot Status Prüfbedingung >0 aber nicht 27 |
| 0x122E | Fehler bei UMA-Lernen (Wiederholung) |
| 0x122F | Kurzschluss oder Leitungsunterbrechung |
| 0x1230 | Wackelkontakt (Periodendauer unplausibel), niedrige Frequenz |
| 0x1231 | Wackelkontakt (Periodendauer unplausibel), hohe Frequenz |
| 0x1232 | Luftmasse gegenüber Modell zu gross |
| 0x1233 | Luftmasse gegenüber Modell zu gering |
| 0x1234 | Kurzschluss, minimale Periodendauer unterschritten |
| 0x1235 | Kurzschluss, maximale Periodendauer überschritten |
| 0x1236 | PWG1 oder PWG2 fehlerhaft oder außerhalb der Toleranz |
| 0x1237 | Spannung unterhalb Min-Wert |
| 0x1238 | Spannung oberhalb Max-Wert |
| 0x1239 | Signal oberhalb Schwelle, Kurzschluss nach Plus oder Leitungsunterbrechung |
| 0x123A | Plausibilität Differenzdrucksensor |
| 0x123B | Saugrohrdruck oberhalb Schwelle |
| 0x123C | Saugrohrdruck unterhalb Schwelle |
| 0x123D | DK-Anschlagüberwachung (UMA) Ebene 2 |
| 0x123E | Kraftstoffkorrektur |
| 0x123F | Plausibilisierung relative Kraftstoffmasse / eingespritzte Kraftstoffmasse |
| 0x1240 | ADC-Testspannung außerhalb zulässigem Bereich |
| 0x1241 | Funktionsüberwachung Drehzahlgeber-, Zuleitung- oder SG-Fehler |
| 0x1242 | Fktüberwachung: Pedalwertgeber-, Zuleitung- oder SG-Fehler |
| 0x1243 | Regelbereichsüberwachung fehlerhaft |
| 0x1244 | CACC-Signal unplausibel |
| 0x1245 | keine Reaktion |
| 0x1246 | Alive |
| 0x1247 | Timeouterkennung |
| 0x1248 | CAN-Schnittstelle, Timeout EGS |
| 0x1249 | CAN-Botschaftsüberwachung EGS (elektronische Getriebesteuerung) - Timeout |
| 0x124A | Plausibilitätsfehler MIL Ansteuerung |
| 0x124B | Aliveprüfung |
| 0x124C | Plausfehler der ARS-Botschaft |
| 0x124D | Aktivitätsfehler CAN-ARS-Botschaft |
| 0x124E | Checksumme fehlerhaft/Alive-Fehler |
| 0x124F | Botschaftüberwachung fehlerhaft |
| 0x1250 | VVT-Botschaft nicht empfangen (DME ALL) |
| 0x1251 | VVT-Botschaft (Sollwertbotschaft) nicht empfangen |
| 0x1252 | Powermanagement defekt |
| 0x1253 | Parityfehler |
| 0x1254 | elektrischer Fehler (Wackelkontakt) oder Sensor locker |
| 0x1255 | Motor mechanisch zu laut oder Sensor außerhalb Toelranz (Empfindlichkeit) |
| 0x1256 | Kommunikationsverlust |
| 0x1257 | IBS Softwareversion nicht kompatibel |
| 0x1258 | erweiterte Kommunikation gestört |
| 0x1259 | Strommessung fehlerhaft |
| 0x125A | Spannungsmessung fehlerhaft |
| 0x125B | Kl 15 Wakeupleitung (Pegel unplausibel) |
| 0x125C | KL15 Masseschluss (Pegel Wakeupleitung) |
| 0x125D | Fehler mechanisch |
| 0x125E | Fehler elektrisch |
| 0x125F | Kühleraustrittstemperatur unplausibel |
| 0x1260 | Signalfehler aus Highside-Check erkannt |
| 0x1261 | Falsche EWS-Telegramme empfangen. Die Fangbereichsrechnung ist für mindestens 5 Telegrammauswertungen fehlgeschlagen. |
| 0x1262 | Kein Startwert programmiert |
| 0x1263 | Fehler beim Programmieren oder Rücksetzen des Startwertes. |
| 0x1264 | 1. Startwert im Flash zerstört. 2- aus 3-Auswahl fehlgeschlagen oder 2. Fehlerrückmeldung: Startwertprogrammierroutine |
| 0x1265 | Timeoutfehler: 10 Sekunden nach Kl. 15 EIN noch kein EWS-Telegramm empfangen, evtl. Leitungsunterbrechung oder Kurzschluss nach Minus) |
| 0x1266 | Schreiben auf die Wechselcodeablage im EEPROM fehlerhaft |
| 0x1267 | Lesen der Wechselcodeablage in EEPROM-Spiegel war fehlerhaft |
| 0x1268 | Fehler Ablage (z.B. Powerfail) |
| 0x1269 | CAN Botschaften fehlerhaft |
| 0x126A | Kombi hat ein Ungültigkeitssignal gesendet |
| 0x126B | Signal inaktiv |
| 0x126C | Vergleich aktueller/letzter Fahrzyklus unplausibel |
| 0x126D | Kontinuitätsfehler |
| 0x126E | unplausibler Öldruckschalter |
| 0x126F | ADC-Fehler, HW-Fehler |
| 0x1270 | Ölverlust |
| 0x1271 | DME noch nicht codiert |
| 0x1272 | CAN-Baustein Bus Off oder CAN-Bus defekt |
| 0x1273 | CAN-Baustein im Zustand Passiv |
| 0x1274 | Timeout CAN-Kommunikation |
| 0x1275 | Alive oder Checksummenfehler |
| 0x12D0 | Berechneter Wert ist zu groß |
| 0x12D1 | Wert außerhalb gültigem Bereich |
| 0x12ED | Bankabschaltung |
| 0x12EE | Brenndauerüberwachung, Signal unplausibel |
| 0x12EF | Ansaugluftemperatur oberhalb Motortemperaturschwelle |
| 0x12F0 | Ansaugluftemperatur unterhalb Motortemperaturschwelle |
| 0x12F1 | Alive oder Checksumme fehlerhaft |
| 0x13B6 | Momentendifferenz oberhalb Schwelle |
| 0x13B7 | Überdrehzahlfehler (Leckluft oder Drosselklappenöffnung zu gross) |
| 0x13B8 | Unterdrehzahlfehler (Drosselklappenöffnung zu klein) |
| 0x13B9 | Fertigungs- oder Transportmodus aktiv |
| 0x13BA | Signalfehler im Schubbetrieb |
| 0x13BB | Signalsprünge detektiert |
| 0x13BC | High-Side Check unplausibel |
| 0x13BD | Stuck-Check unplausibel |
| 0x13BE | Low-Side Check unplausibel |
| 0x13BF | Ansauglufttemperatur unterhalb Motortemperaturschwelle |
| 0x13C5 | CAN Botschaft Ungültig |
| 0x13C6 | Wert oberhalb Schwelle |
| 0x13C7 | Wert unterhalb Schwelle |
| 0x13C8 | Verlustmoment zu gross |
| 0x13C9 | AFS/STE disabled oder Lenkmoment ungültig |
| 0x13CB | Wackelkontakt |
| 0x13CC | Bereichsprüfung unplausibel |
| 0xFFFF | unbekannte Fehlerart |

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
| FR_W | 8312F1224000 | 0 | 0 | 0x00 | 5 | 5 | -- | 0.000030517578125 | 0 | 0 | 0 | - |
| FR2_W | 8312F1224000 | 0 | 0 | 0x00 | 7 | 5 | -- | 0.000030517578125 | 0 | 0 | 0 | - |
| VFZG | 8312F1224000 | 0 | 0 | 0x00 | 9 | 2 | -- | 1.25 | 0 | 0 | 0 | km/h |
| NMOT_W | 8312F1224000 | 0 | 0 | 0x00 | 10 | 5 | -- | 0.25 | 0 | 0 | 0 | min-1 |
| NSOL | 8312F1224000 | 0 | 0 | 0x00 | 12 | 2 | -- | 10 | 0 | 0 | 0 | min-1 |
| WNWKWE_W | 8312F1224000 | 0 | 0 | 0x00 | 13 | 5 | -- | 0.1 | 0 | 0 | 0 | GradKW |
| WNWKWA_W | 8312F1224000 | 0 | 0 | 0x00 | 15 | 5 | -- | 0.1 | 0 | 0 | 0 | GradKW |
| TANS | 8312F1224000 | 0 | 0 | 0x00 | 17 | 2 | -- | 0.75 | -48 | 0 | 0 | Grad C |
| TMOT | 8312F1224000 | 0 | 0 | 0x00 | 18 | 2 | -- | 0.75 | -48 | 0 | 0 | Grad C |
| ZWOUT | 8312F1224000 | 0 | 0 | 0x00 | 19 | 3 | -- | 0.75 | 0 | 0 | 0 | Grad |
| WDKBA | 8312F1224000 | 0 | 0 | 0x00 | 20 | 2 | -- | 0.392156 | 0 | 0 | 0 | % DK |
| MSHFM_W | 8312F1224000 | 0 | 0 | 0x00 | 21 | 5 | -- | 0.1 | 0 | 0 | 0 | kg/h |
| MIIST_W | 8312F1224000 | 0 | 0 | 0x00 | 23 | 5 | -- | 0.0015259 | 0 | 0 | 0 | % |
| UB | 8312F1224000 | 0 | 0 | 0x00 | 25 | 2 | -- | 0.0942 | 0 | 0 | 0 | V |
| UPWG_W | 8312F1224000 | 0 | 0 | 0x00 | 26 | 5 | -- | 0.0048828 | 0 | 0 | 0 | V |
| TKA | 8312F1224000 | 0 | 0 | 0x00 | 28 | 2 | -- | 0.75 | -48 | 0 | 0 | Grad C |
| RKRN_W_0 | 8312F1224000 | 0 | 0 | 0x00 | 29 | 5 | -- | 0.0006103 | 0 | 0 | 0 | V |
| RKRN_W_1 | 8312F1224000 | 0 | 0 | 0x00 | 31 | 5 | -- | 0.0006103 | 0 | 0 | 0 | V |
| RKRN_W_2 | 8312F1224000 | 0 | 0 | 0x00 | 33 | 5 | -- | 0.0006103 | 0 | 0 | 0 | V |
| RKRN_W_3 | 8312F1224000 | 0 | 0 | 0x00 | 35 | 5 | -- | 0.0006103 | 0 | 0 | 0 | V |
| RKRN_W_4 | 8312F1224000 | 0 | 0 | 0x00 | 37 | 5 | -- | 0.0006103 | 0 | 0 | 0 | V |
| RKRN_W_5 | 8312F1224000 | 0 | 0 | 0x00 | 39 | 5 | -- | 0.0006103 | 0 | 0 | 0 | V |
| RKRN_W_6 | 8312F1224000 | 0 | 0 | 0x00 | 41 | 5 | -- | 0.0006103 | 0 | 0 | 0 | V |
| RKRN_W_7 | 8312F1224000 | 0 | 0 | 0x00 | 43 | 5 | -- | 0.0006103 | 0 | 0 | 0 | V |
| DFMONITOR | 8312F1224001 | 0 | 0 | 0x00 | 3 | 2 | -- | 0,390625 | 0 | 0 | 0 | % |
| LUTSFI1 | 8312F1224003 | 0 | 0 | 0x00 | 3 | 7 | -- | 0.0027756 | 0 | 0 | 0 | (1/min/s)^2 |
| LUTSFI2 | 8312F1224003 | 0 | 0 | 0x00 | 5 | 7 | -- | 0.0027756 | 0 | 0 | 0 | (1/min/s)^2 |
| LUTSFI3 | 8312F1224003 | 0 | 0 | 0x00 | 7 | 7 | -- | 0.0027756 | 0 | 0 | 0 | (1/min/s)^2 |
| LUTSFI4 | 8312F1224003 | 0 | 0 | 0x00 | 9 | 7 | -- | 0.0027756 | 0 | 0 | 0 | (1/min/s)^2 |
| LUTSFI5 | 8312F1224003 | 0 | 0 | 0x00 | 11 | 7 | -- | 0.0027756 | 0 | 0 | 0 | (1/min/s)^2 |
| LUTSFI6 | 8312F1224003 | 0 | 0 | 0x00 | 13 | 7 | -- | 0.0027756 | 0 | 0 | 0 | (1/min/s)^2 |
| LUTSFI7 | 8312F1224003 | 0 | 0 | 0x00 | 15 | 7 | -- | 0.0027756 | 0 | 0 | 0 | (1/min/s)^2 |
| LUTSFI8 | 8312F1224003 | 0 | 0 | 0x00 | 17 | 7 | -- | 0.0027756 | 0 | 0 | 0 | (1/min/s)^2 |
| UULSUV | 8312F1224003 | 0 | 0 | 0x00 | 20 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| UULSUV2 | 8312F1224003 | 0 | 0 | 0x00 | 22 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| MSNDKO | 8312F1224008 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.1 | 0 | 0 | 0 | kg/h |
| FKMSDKA | 8312F1224008 | 0 | 0 | 0x00 | 5 | 5 | -- | 0.00006103 | 0 | 0 | 0 | - |
| FKMSDK | 8312F1224008 | 0 | 0 | 0x00 | 7 | 5 | -- | 0.00006103 | 0 | 0 | 0 | - |
| RKAT | 8312F1224004 | 0 | 0 | 0x00 | 3 | 7 | -- | 0.04687 | 0 | 0 | 0 | % |
| RKAT2 | 8312F1224004 | 0 | 0 | 0x00 | 5 | 7 | -- | 0.04687 | 0 | 0 | 0 | % |
| FRA | 8312F1224004 | 0 | 0 | 0x00 | 7 | 5 | -- | 0.000030517578125 | 0 | 0 | 0 | - |
| FRA2 | 8312F1224004 | 0 | 0 | 0x00 | 9 | 5 | -- | 0.000030517578125 | 0 | 0 | 0 | - |
| TEDUB | 8312F1224004 | 0 | 0 | 0x00 | 11 | 2 | -- | 0.01 | 0 | 0 | 0 | s |
| TEDUB2 | 8312F1224004 | 0 | 0 | 0x00 | 12 | 2 | -- | 0.01 | 0 | 0 | 0 | s |
| DYNLSU | 8312F1224004 | 0 | 0 | 0x00 | 13 | 5 | -- | 0.000244140625 | 0 | 0 | 0 | - |
| DYNLSU2 | 8312F1224004 | 0 | 0 | 0x00 | 15 | 5 | -- | 0.000244140625 | 0 | 0 | 0 | - |
| LAMSONI | 8312F1224004 | 0 | 0 | 0x00 | 17 | 5 | -- | 0.000244140625 | 0 | 0 | 0 | - |
| LAMSONI2 | 8312F1224004 | 0 | 0 | 0x00 | 19 | 5 | -- | 0.000244140625 | 0 | 0 | 0 | - |
| TATEIST | 8312F1224005 | 0 | 0 | 0x00 | 3 | 2 | -- | 0.390625 | 0 | 0 | 0 | % |
| VSASPRI | 8312F1224005 | 0 | 0 | 0x00 | 4 | 5 | -- | 0.1 | 0 | 0 | 0 | Grd KW |
| VSASPRI2 | 8312F1224005 | 0 | 0 | 0x00 | 6 | 5 | -- | 0.1 | 0 | 0 | 0 | Grd KW |
| VSESPRI | 8312F1224005 | 0 | 0 | 0x00 | 8 | 5 | -- | 0.1 | 0 | 0 | 0 | Grd KW |
| VSESPRI2 | 8312F1224005 | 0 | 0 | 0x00 | 10 | 5 | -- | 0.1 | 0 | 0 | 0 | Grd KW |
| VSATV | 8312F1224005 | 0 | 0 | 0x00 | 12 | 5 | -- | 0.01 | 0 | 0 | 0 | % |
| VSATV2 | 8312F1224005 | 0 | 0 | 0x00 | 14 | 5 | -- | 0.01 | 0 | 0 | 0 | % |
| VSETV | 8312F1224005 | 0 | 0 | 0x00 | 16 | 5 | -- | 0.01 | 0 | 0 | 0 | % |
| VSETV2 | 8312F1224005 | 0 | 0 | 0x00 | 18 | 5 | -- | 0.01 | 0 | 0 | 0 | % |
| TAML | 8312F1224005 | 0 | 0 | 0x00 | 20 | 2 | -- | 0.390625 | 0 | 0 | 0 | % |
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
| DNLLMV | 8312F130A101 | 0 | 0 | 0x00 | 6 | 3 | -- | 10 | 0 | 0 | 0 | 1/min |
| DNSACMV | 8312F130A101 | 0 | 0 | 0x00 | 7 | 3 | -- | 10 | 0 | 0 | 0 | 1/min |
| DNSLBV | 8312F130A101 | 0 | 0 | 0x00 | 8 | 3 | -- | 10 | 0 | 0 | 0 | 1/min |
| DNFSACMV | 8312F130A101 | 0 | 0 | 0x00 | 9 | 3 | -- | 10 | 0 | 0 | 0 | 1/min |
| DNFSMV | 8312F130A101 | 0 | 0 | 0x00 | 10 | 3 | -- | 10 | 0 | 0 | 0 | 1/min |
| VVTSW | 8312F122400B | 0 | 0 | 0x00 | 3 | 5 | -- | 0.0015259 | 0 | 0 | 0 | % |
| VVTIW | 8312F122400B | 0 | 0 | 0x00 | 5 | 5 | -- | 0.0015259 | 0 | 0 | 0 | % |
| VVTTV | 8312F122400B | 0 | 0 | 0x00 | 7 | 2 | -- | 0.390625 | 0 | 0 | 0 | % |
| VVTES | 8312F122400B | 0 | 0 | 0x00 | 8 | 2 | -- | 0.5 | -63.5 | 0 | 0 |  |
| VVTSW2 | 8312F122400B | 0 | 0 | 0x00 | 9 | 5 | -- | 0.0015259 | 0 | 0 | 0 | % |
| VVTIW2 | 8312F122400B | 0 | 0 | 0x00 | 11 | 5 | -- | 0.0015259 | 0 | 0 | 0 | % |
| VVTTV2 | 8312F122400B | 0 | 0 | 0x00 | 13 | 2 | -- | 0.390625 | 0 | 0 | 0 | % |
| VVTES2 | 8312F122400B | 0 | 0 | 0x00 | 14 | 2 | -- | 0.5 | -63.5 | 0 | 0 | - |
| MINHUBVSI | 8312F122400B | 0 | 0 | 0x00 | 17 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| DELTAGVFI | 8312F122400B | 0 | 0 | 0x00 | 19 | 7 | -- | 0.0019532 | 0 | 0 | 0 | - |
| FLUB1 | 8312F122400B | 0 | 0 | 0x00 | 21 | 7 | -- | 0.000244140625 | 0 | 0 | 0 | - |
| FLUB2 | 8312F122400B | 0 | 0 | 0x00 | 23 | 7 | -- | 0.000244140625 | 0 | 0 | 0 | - |
| MINHUBROH | 8312F122400B | 0 | 0 | 0x00 | 27 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| TSG | 8312F122400C | 0 | 0 | 0x00 | 3 | 2 | -- | 0.75 | -48 | 0 | 0 | Grad C |
| DMVAD | 8312F122400C | 0 | 0 | 0x00 | 5 | 7 | -- | 0.00305175 | 0 | 0 | 0 | % |
| DPS | 8312F122400C | 0 | 0 | 0x00 | 7 | 7 | -- | 0.0390625 | 0 | 0 | 0 | hPa |
| DPSRAUS | 8312F122400C | 0 | 0 | 0x00 | 9 | 5 | -- | 0.0390625 | -1280 | 0 | 0 | hPa |
| FKMSVVT | 8312F122400C | 0 | 0 | 0x00 | 11 | 5 | -- | 0.00006104 | 0 | 0 | 0 | - |
| FPRSTEP | 8312F122400C | 0 | 0 | 0x00 | 13 | 2 | -- | 1 | 0 | 0 | 0 | - |
| LRNSTEP | 8312F122400C | 0 | 0 | 0x00 | 14 | 2 | -- | 1 | 0 | 0 | 0 | - |
| MSNVVTO | 8312F122400C | 0 | 0 | 0x00 | 15 | 7 | -- | 0.1 | 0 | 0 | 0 | kg/h |
| NNW10 | 8312F122400C | 0 | 0 | 0x00 | 17 | 7 | -- | 0.0009765625 | 0 | 0 | 0 | - |
| NNW11 | 8312F122400C | 0 | 0 | 0x00 | 19 | 7 | -- | 0.0009765625 | 0 | 0 | 0 | - |
| NNW12 | 8312F122400C | 0 | 0 | 0x00 | 21 | 7 | -- | 0.0009765625 | 0 | 0 | 0 | - |
| NNW20 | 8312F122400C | 0 | 0 | 0x00 | 23 | 7 | -- | 0.0009765625 | 0 | 0 | 0 | - |
| NNW21 | 8312F122400C | 0 | 0 | 0x00 | 25 | 7 | -- | 0.0009765625 | 0 | 0 | 0 | - |
| NNW22 | 8312F122400C | 0 | 0 | 0x00 | 27 | 7 | -- | 0.0009765625 | 0 | 0 | 0 | - |
| NSOLFASTA | 8312F122400D | 0 | 0 | 0x00 | 3 | 5 | -- | 0.25 | 0 | 0 | 0 | min-1 |
| RL | 8312F122400D | 0 | 0 | 0x00 | 5 | 5 | -- | 0.0234375 | 0 | 0 | 0 | % |
| RLSOL | 8312F122400D | 0 | 0 | 0x00 | 7 | 5 | -- | 0.0234375 | 0 | 0 | 0 | % |
| TE | 8312F122400D | 0 | 0 | 0x00 | 9 | 5 | -- | 0.008 | 0 | 0 | 0 | ms |
| TE2 | 8312F122400D | 0 | 0 | 0x00 | 11 | 5 | -- | 0.008 | 0 | 0 | 0 | ms |
| VVTSTATUS | 8312F122400D | 0 | 0 | 0x00 | 13 | 5 | -- | 1 | 0 | 0 | 0 | - |
| WDKBAFASTA | 8312F122400D | 0 | 0 | 0x00 | 15 | 5 | -- | 0.0244140625 | 0 | 0 | 0 | %DK |
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
| DFFGEN | 8312F122400E | 0 | 0 | 0x00 | 12 | 2 | -- | 0.390625 | 0 | 0 | 0 | % |
| TUMG | 8312F122400E | 0 | 0 | 0x00 | 13 | 2 | -- | 0.75 | -48 | 0 | 0 | Grad C |
| DMVADFS | 8312F122400E | 0 | 0 | 0x00 | 14 | 7 | -- | 0.0030518 | 0 | 0 | 0 | % |
| DMVADKO | 8312F122400E | 0 | 0 | 0x00 | 16 | 7 | -- | 0.0030518 | 0 | 0 | 0 | % |
| DLAHI | 8312F122400E | 0 | 0 | 0x00 | 18 | 7 | -- | 0.000030517578125 | 0 | 0 | 0 | - |
| DLAHI2 | 8312F122400E | 0 | 0 | 0x00 | 20 | 7 | -- | 0.000030517578125 | 0 | 0 | 0 | - |
| RINH | 8312F122400E | 0 | 0 | 0x00 | 22 | 5 | -- | 2 | 0 | 0 | 0 | Ohm |
| RINH2 | 8312F122400E | 0 | 0 | 0x00 | 24 | 5 | -- | 2 | 0 | 0 | 0 | Ohm |
| RKATS | 8312F122400E | 0 | 0 | 0x00 | 26 | 7 | -- | 0.0468749 | 0 | 0 | 0 | % |
| DPSSOL | 8312F122400E | 0 | 0 | 0x00 | 28 | 7 | -- | 0.0390625 | 0 | 0 | 0 | hPa |
| CO_POT | 8312F122400F | 0 | 0 | 0x00 | 5 | 7 | -- | 1 | 0 | 0 | 0 | - |
| UPWG | 8312F122400F | 0 | 0 | 0x00 | 7 | 5 | -- | 0.0048828 | 0 | 0 | 0 | V |
| MINHUB | 8312F122400F | 0 | 0 | 0x00 | 9 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| GVIST | 8312F122400F | 0 | 0 | 0x00 | 12 | 7 | -- | 0.001953125 | 0 | 0 | 0 | - |
| FTBR | 8312F122400F | 0 | 0 | 0x00 | 14 | 5 | -- | 0.000030517578125 | 0 | 0 | 0 | - |
| FHO | 8312F122400F | 0 | 0 | 0x00 | 16 | 5 | -- | 0.00006104 | 0 | 0 | 0 | - |
| FTVDK | 8312F122400F | 0 | 0 | 0x00 | 18 | 2 | -- | 0.0078125 | 0 | 0 | 0 | - |
| MSNVVTOLL | 8312F122400F | 0 | 0 | 0x00 | 20 | 7 | -- | 0.1 | 0 | 0 | 0 | kg/h |
| VSESPRS | 8312F122400F | 0 | 0 | 0x00 | 24 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad KW |
| VSE2SPRS | 8312F122400F | 0 | 0 | 0x00 | 26 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad KW |
| VSASPRS | 8312F122400F | 0 | 0 | 0x00 | 29 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad KW |
| VSA2SPRS | 8312F122400F | 0 | 0 | 0x00 | 30 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad KW |
| EVHUBI | 8312F1224010 | 0 | 0 | 0x00 | 5 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| EVHUBI2 | 8312F1224010 | 0 | 0 | 0x00 | 7 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| EVHUBS | 8312F1224010 | 0 | 0 | 0x00 | 9 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| OFWNKADBG | 8312F1224010 | 0 | 0 | 0x00 | 11 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad |
| DFSERESZ | 8312F1224010 | 0 | 0 | 0x00 | 16 | 5 | -- | 1 | 0 | 0 | 0 | - |
| DMVADFK | 8312F1224010 | 0 | 0 | 0x00 | 18 | 7 | -- | 0.0030517 | 0 | 0 | 0 | % |
| DMVADLL | 8312F1224010 | 0 | 0 | 0x00 | 20 | 7 | -- | 0.0030517 | 0 | 0 | 0 | % |
| EXWINKI | 8312F1224010 | 0 | 0 | 0x00 | 22 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad |
| EXWINKI2 | 8312F1224010 | 0 | 0 | 0x00 | 24 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad |
| EXWINKS | 8312F1224010 | 0 | 0 | 0x00 | 26 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad |
| FKMSVVTA | 8312F1224011 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.00006104 | 0 | 0 | 0 | - |
| FOFRESZ | 8312F1224011 | 0 | 0 | 0x00 | 5 | 5 | -- | 1 | 0 | 0 | 0 | - |
| MSDIF | 8312F1224011 | 0 | 0 | 0x00 | 7 | 7 | -- | 0.1 | 0 | 0 | 0 | kg/h |
| TABGM | 8312F1224011 | 0 | 0 | 0x00 | 9 | 2 | -- | 5 | -50 | 0 | 0 | Grad C |
| TNSE | 8312F1224011 | 0 | 0 | 0x00 | 10 | 5 | -- | 0.1 | 0 | 0 | 0 | s |
| OZRWPERM | 8312F1224011 | 0 | 0 | 0x00 | 12 | 7 | -- | 10 | 0 | 0 | 0 | - |
| OZRWKVB | 8312F1224011 | 0 | 0 | 0x00 | 14 | 7 | -- | 10 | 0 | 0 | 0 | - |
| OZPERMLOW | 8312F1224011 | 0 | 0 | 0x00 | 24 | 5 | -- | 0.00009155 | 0 | 0 | 0 | - |
| OZPERMEX | 8312F1224011 | 0 | 0 | 0x00 | 26 | 5 | -- | 0.00009155 | 0 | 0 | 0 | - |
| OZPERMOFF | 8312F1224011 | 0 | 0 | 0x00 | 28 | 7 | -- | 0.0001831 | 0 | 0 | 0 | - |
| OZKVBOG | 8312F1224011 | 0 | 0 | 0x00 | 30 | 7 | -- | 0.01831082 | 0 | 0 | 0 | - |
| OZPERMBOG | 8312F1224011 | 0 | 0 | 0x00 | 32 | 7 | -- | 0.000030517578125 | 0 | 0 | 0 | - |
| OZOELKM | 8312F1224011 | 0 | 0 | 0x00 | 34 | 7 | -- | 10 | 0 | 0 | 0 | km |
| NADMTLL | 8312F1224012 | 0 | 0 | 0x00 | 3 | 5 | -- | 1 | 0 | 0 | 0 | - |
| NTGLM | 8312F1224012 | 0 | 0 | 0x00 | 5 | 5 | -- | 1 | 0 | 0 | 0 | - |
| NTKLM | 8312F1224012 | 0 | 0 | 0x00 | 7 | 5 | -- | 1 | 0 | 0 | 0 | - |
| NDIPFRO | 8312F1224012 | 0 | 0 | 0x00 | 9 | 5 | -- | 1 | 0 | 0 | 0 | - |
| NKFL | 8312F1224012 | 0 | 0 | 0x00 | 11 | 2 | -- | 1 | 0 | 0 | 0 | - |
| SSLLCNT | 8312F1224012 | 0 | 0 | 0x00 | 12 | 2 | -- | 1 | 0 | 0 | 0 | - |
| MINHUBFAK | 8312F1224012 | 0 | 0 | 0x00 | 15 | 2 | -- | 0.00784314 | 0 | 0 | 0 | - |
| MINADRDY | 8312F1224012 | 0 | 0 | 0x00 | 16 | 2 | -- | 1 | 0 | 0 | 0 | - |
| FDLUBBGL | 8312F1224012 | 0 | 0 | 0x00 | 21 | 5 | -- | 0.000244140625 | 0 | 0 | 0 | - |
| OFWNKBG1 | 8312F1224012 | 0 | 0 | 0x00 | 24 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad |
| OFWNKBG2 | 8312F1224012 | 0 | 0 | 0x00 | 26 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad |
| OFWNKMX | 8312F1224012 | 0 | 0 | 0x00 | 28 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad |
| WTSG | 8312F1304101 | 0 | 0 | 0x00 | 3 | 2 | -- | 0.019531 | 0 | 0 | 0 | V |
| USHK2 | 8312F1304501 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| UPWG1 | 8312F1304601 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| UPWG2 | 8312F1304701 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| USHK | 8312F1304801 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| WUB | 8312F1304A01 | 0 | 0 | 0x00 | 3 | 2 | -- | 0.0942 | 0 | 0 | 0 | V |
| UDKP2 | 8312F1304C01 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.001221 | 0 | 0 | 0 | V |
| UDKP1V | 8312F1304D01 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.00488 | 0 | 0 | 0 | V |
| UDKP1 | 8312F1304E01 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.001221 | 0 | 0 | 0 | V |
| TPMSHFM | 8312F1304F01 | 0 | 0 | 0x00 | 3 | 5 | -- | 0.0001 | 0 | 0 | 0 | V |
| WTMOT | 8312F1305001 | 0 | 0 | 0x00 | 3 | 2 | -- | 0.00488 | 0 | 0 | 0 | V |
| WTFA1 | 8312F1305101 | 0 | 0 | 0x00 | 3 | 2 | -- | 0.00488 | 0 | 0 | 0 | V |
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
| OFWTSTBER | 8312F130A401 | 0 | 0 | 0x00 | 3 | 2 | -- | 1 | 0 | 0 | 0 | - |
| OFWNKTEST | 8312F130A401 | 0 | 0 | 0x00 | 4 | 7 | -- | 0.1 | 0 | 0 | 0 | Grad |
| OSCDKTF | 8212F1211C | 0 | 0 | 0x00 | 4 | 5 | -- | 0.000244140625 | 0 | 0 | 0 | - |
| OSCDKTF2 | 8212F1211C | 0 | 0 | 0x00 | 6 | 5 | -- | 0.000244140625 | 0 | 0 | 0 | - |
| UBATT | 8312F122402B | 0 | 0 | 0x00 | 3 | 5 | -- | 0.00025 | 6 | 0 | 0 | V |
| IBATT | 8312F122402B | 0 | 0 | 0x00 | 3 | 5 | -- | 0.08 | -200 | 0 | 0 | A |
| TBATT | 8312F122402B | 0 | 0 | 0x00 | 3 | 2 | -- | 0.75 | -48 | 0 | 0 | Grad C |
| GENMANUFAK | 8312F122402C | 0 | 0 | 0x00 | 3 | 2 | -- | 1 | 0 | 0 | 0 | - |
| GENTYPKENN | 8312F122402C | 0 | 0 | 0x00 | 3 | 2 | -- | 1 | 0 | 0 | 0 | - |
| BSDGENREGV | 8312F122402C | 0 | 0 | 0x00 | 3 | 2 | -- | 1 | 0 | 0 | 0 | - |
| DFFGEN1 | 8312F122402C | 0 | 0 | 0x00 | 3 | 2 | -- | 0.390625 | 0 | 0 | 0 | % |
| UGEN | 8312F122402C | 0 | 0 | 0x00 | 3 | 2 | -- | 0.1 | 10.6 | 0 | 0 | V |
| UFGEN | 8312F122402C | 0 | 0 | 0x00 | 3 | 2 | -- | 0.1 | 10.6 | 0 | 0 | V |
| TLRGEN | 8312F122402C | 0 | 0 | 0x00 | 3 | 2 | -- | 0.1 | 0 | 0 | 0 | s |
| TLRFGEN | 8312F122402C | 0 | 0 | 0x00 | 3 | 2 | -- | 0.1 | 0 | 0 | 0 | s |
| MDGENVF | 8312F122402C | 0 | 0 | 0x00 | 3 | 5 | -- | 0.0015259 | 0 | 0 | 0 | % |
| STIGEN | 8312F122402C | 0 | 0 | 0x00 | 3 | 2 | -- | 1 | 0 | 0 | 0 | A |
| IERR | 8312F122402C | 0 | 0 | 0x00 | 3 | 2 | -- | 0.125 | 0 | 0 | 0 | A |
| IERRGRENZ | 8312F122402C | 0 | 0 | 0x00 | 3 | 2 | -- | 0.125 | 0 | 0 | 0 | A |
| IERRFGRENZ | 8312F122402C | 0 | 0 | 0x00 | 3 | 2 | -- | 0.125 | 0 | 0 | 0 | A |
| TCHIP | 8312F122402C | 0 | 0 | 0x00 | 3 | 2 | -- | 1 | -40 | 0 | 0 | Grad C |
| FAKIHA | 8312F1224025 | 0 | 0 | 0x00 | 3 | 2 | -- | 0.01 | 0 | 0 | 0 | - |
| OZNIVKRZT | 8312F1224000 | 0 | 0 | 0x00 | 45 | 2 | -- | 0.29296875 | 0 | 0 | 0 | mm |
| OZNIVLANGT | 8312F1224000 | 0 | 0 | 0x00 | 46 | 2 | -- | 0.29296875 | 0 | 0 | 0 | mm |
| OZNIV | 8312F1300E01 | 0 | 0 | 0x00 | 3 | 2 | -- | 0.29296875 | 0 | 0 | 0 | mm |
| OZTEMP | 8312F1300E01 | 0 | 0 | 0x00 | 4 | 7 | -- | 0.1 | 0 | 0 | 0 | Grad C |
| OZPERM | 8312F1300E01 | 0 | 0 | 0x00 | 6 | 5 | -- | 0.000091553 | 0 | 0 | 0 | - |
| EISYDKFKAF | 8312F1224008 | 0 | 0 | 0x00 | 3 | 2 | -- | 0.007813 | 0 | 0 | 0 | - |
| EISYDKKOFF | 8312F1224008 | 0 | 0 | 0x00 | 4 | 3 | -- | 8 | 0 | 0 | 0 | kg/h |
| EISYEVFKAF | 8312F1224008 | 0 | 0 | 0x00 | 5 | 2 | -- | 0.007813 | 0 | 0 | 0 | - |
| EISYEVKOFF | 8312F1224008 | 0 | 0 | 0x00 | 6 | 3 | -- | 8 | 0 | 0 | 0 | kg/h |
| AMO_05 | 8312F122402D | 0 | 0 | 0x00 | 0 | 5 | -- | 0.000244140625 | 0 | 0 | 0 | - |
| AMO_10 | 8312F122402D | 0 | 0 | 0x00 | 0 | 5 | -- | 0.000244140625 | 0 | 0 | 0 | - |
| AMO_15 | 8312F122402D | 0 | 0 | 0x00 | 0 | 5 | -- | 0.000244140625 | 0 | 0 | 0 | - |
| AMO_20 | 8312F122402D | 0 | 0 | 0x00 | 0 | 5 | -- | 0.000244140625 | 0 | 0 | 0 | - |
| EXWINKKOR | 8312F122402D | 0 | 0 | 0x00 | 0 | 7 | -- | 0.021972656 | 0 | 0 | 0 | Grad |
| MNHUB | 8312F122402D | 0 | 0 | 0x00 | 0 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| F_MNHUB | 8312F122402D | 0 | 0 | 0x00 | 0 | 5 | -- | 0.00001525879 | 0 | 0 | 0 | - |
| MNHUB_ROH | 8312F122402D | 0 | 0 | 0x00 | 0 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| MNHUBVS | 8312F122402D | 0 | 0 | 0x00 | 0 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| MNHUBVS_IST | 8312F122402D | 0 | 0 | 0x00 | 0 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| MNHUBVSNV | 8312F122402D | 0 | 0 | 0x00 | 0 | 5 | -- | 0.001 | 0 | 0 | 0 | mm |
| F_TIKORRVR | 8312F122402D | 0 | 0 | 0x00 | 0 | 5 | -- | 0.000030517578125 | 0 | 0 | 0 | mm |
| LURABS_F | 8312F122402D | 0 | 0 | 0x00 | 0 | 5 | -- | 0.1 | 0 | 0 | 0 | mm |
| LURDIF_F | 8312F122402D | 0 | 0 | 0x00 | 0 | 5 | -- | 0.1 | 0 | 0 | 0 | mm |
| ZW_OFFKORRVR | 8312F122402D | 0 | 0 | 0x00 | 0 | 5 | -- | 0.1 | 0 | 0 | 0 | Grad |
| ENDE |  |  |  |  | 1 | 1 | -- | 1 | 0 | 0 | 0 | - |

### BITS

| NAME | BYTE | MASK | VALUE |
| --- | --- | --- | --- |
| B_FOFR1 | 19 | 0x01 | 0x01 |
| B_HUBEINGR_INAKT | 3 | 0x08 | 0x08 |
| B_MINHUBEINGR_INAKT | 3 | 0x04 | 0x04 |
| B_ZWEINGR_INAKT | 3 | 0x02 | 0x02 |
| B_GEMISCHEINGR_INAKT | 3 | 0x01 | 0x01 |
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
| B_PEDSPORT | 4 | 0X02 | 0X02 |
| B_KD | 4 | 0x04 | 0x04 |
| B_PN | 4 | 0x08 | 0x08 |
| B_ECULOCK | 4 | 0x10 | 0x10 |
| B_TEHB | 4 | 0x20 | 0x20 |
| B_SA | 4 | 0x40 | 0x40 |
| B_LRNRDY | 4 | 0x80 | 0x80 |
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
| B_AKKS_VAR | 6 | 0x04 | 0x04 |
| B_PKKS_VAR | 6 | 0x08 | 0x08 |
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
| 0x00 | Anschlaege werden gerade gelernt |
| 0x01 | Lernanforderung durch VVT-SG zurueckgewiesen |
| 0x02 | Lernen durch DME abgebrochen |
| 0x03 | Lernen durch VVT abgebrochen |
| 0x05 | Keine Anforderung zum Anschlaglernen |
| 0x06 | Lernvorgang beendet |
| 0x07 | Signal ungueltig |
| 0xXY | Fehlerhafter Status |

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
| 0x00 | --                                                     |
| 0x01 | Regelung AUS, Einschaltbedingung noch nicht erfuellt |
| 0x02 | Regelung EIN |
| 0x04 | Regelung AUS wegen Fahrbedingung |
| 0x08 | Regelung AUS wegen erkanntem Fehler |
| 0x10 | Regelung EIN mit Einschraenkung |
| 0xXY | ?? |

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
| 0x00 | LSU Dynamikprüfung wegen Umweltbedingung nicht aktiv |
| 0x01 | LSU Prüfung aktiv |
| 0xXY | LSU Prüfung abgeschlossen  |

### LSUSTATUS_NEU

| STATI | TEXT |
| --- | --- |
| 0x00 | Systemtest noch nicht gestartet wegen fehlender Bedingung oder Fehlereintrag |
| 0x01 | Systemtest für Bank 1 läuft, für Bank 2 noch nicht gestartet |
| 0x02 | Systemtest für Bank 2 läuft, für Bank 1 noch nicht gestartet |
| 0x03 | Systemtest läuft |
| 0x04 | Systemtest für Bank 1 abgeschlossen, für Bank 2 noch nicht gestartet |
| 0x05 | Systemtest für Bank 1 abgeschlossen, Fehler im System auf Bank 2 |
| 0x06 | Systemtest für Bank 2 abgeschlossen, für Bank 1 noch nicht gestartet |
| 0x07 | Systemtest für Bank 2 abgeschlossen, Fehler im System auf Bank 1 |
| 0x08 | Systemtest für Bank 1 abgeschlossen, für Bank 2 noch nicht abgeschlossen |
| 0x09 | Systemtest für Bank 2 abgeschlossen, für Bank 1 noch nicht abgeschlossen |
| 0x10 | Systemtest abgeschlossen |
| 0xFF | Status LSU-Diagnose kann nicht ausgegeben werden |

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

### _ME923_CNV_S_2_DEF_BIT_UB_741_CM

| NR | TEXT |
| --- | --- |
| 0 | Falsch |
| 1 | Wahr |

### _ME923_CNV_S_2_DEF_BIT_UB_755_CM

| NR | TEXT |
| --- | --- |
| 0 | Auslieferungszustand |
| 1 | Abweichung zum Auslieferungszustand |

### _ME923_CNV_S_2_DEF_BIT_UB_755_CM0X2

| NR | TEXT |
| --- | --- |
| 0 | Schaltpunktanzeige inaktiv |
| 1 | Schaltpunktanzeige aktiv |

### _ME923_TABLE_ST_GENTEST

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

### _ME923_TABLE_GENIUTEST_ERR_BIT0

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, elektrischer Fehler Generator nicht vorhanden |
| 1 | Generatortest, elektrischer Fehler Generator vorhanden |

### _ME923_TABLE_GENIUTEST_ERR_BIT1

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, mechanischer Fehler Generator nicht vorhanden |
| 1 | Generatortest, mechanischer Fehler Generator vorhanden |

### _ME923_TABLE_GENIUTEST_ERR_BIT2

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Hochtemperaturfehler Generator nicht vorhanden |
| 1 | Generatortest, Hochtemperaturfehler Generator vorhanden |

### _ME923_TABLE_GENIUTEST_ERR_BIT3

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Generatortyp plausibel |
| 1 | Generatortest, Generatortyp unplausibel |

### _ME923_TABLE_GENIUTEST_ERR_BIT4

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Generatorkommunikation vorhanden |
| 1 | Generatortest, keine Generatorkommunikation vorhanden |

### _ME923_TABLE_GENIUTEST_ERR_BIT5

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Generatorspannung aus Berechnung plausibel |
| 1 | Generatortest, Generatorspannung aus Berechnung unplausibel |

### _ME923_TABLE_GENIUTEST_ERR_BIT6

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Hochtemperaturfehler Generator aus Berechnung nicht vorhanden |
| 1 | Generatortest, Hochtemperaturfehler Generator aus Berechnung vorhanden |

### _ME923_TABLE_GENIUTEST_ERR_BIT7

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Generatorregler plausibel |
| 1 | Generatortest, Generatorregler unplausibel |

### _ME923_TABLE_GENIUTEST_AB_BIT0

| NR | TEXT |
| --- | --- |
| 0 | Generatortest, Generatorauslastung nicht zu hoch |
| 1 | Generatortest, Generatorauslastung zu hoch |

### _ME923_TABLE_FS

| NR | TEXT |
| --- | --- |
| 0 | Funktion noch nicht gestartet |
| 1 | Start-/Ansteuerbedingung nicht erfuellt |
| 2 | Uebergabeparameter nicht plausibel |
| 3 | Funktion wartet auf Freigabe |
| 4 | -- |
| 5 | Funktion laeuft |
| 6 | Funktion beendet (ohne Ergebnis) |
| 7 | Funktion abgebrochen |
| 8 | Funktion vollstaendig durchlaufen und kein Fehler erkannt |
| 9 | Funktion vollstaendig durchlaufen und Fehler erkannt |

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
