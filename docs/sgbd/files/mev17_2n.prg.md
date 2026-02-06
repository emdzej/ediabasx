# mev17_2n.prg

## General

|  |  |
| --- | --- |
| File | mev17_2n.prg |
| Type | PRG |
| Jobs | 195 |
| Tables | 43 |
| Origin | BMW EA-51, Roman_Stoiber |
| Revision | 5.505 |
| Author | BMW EA-14 Moritz_Zindler |
| ECU Comment | SGBD fuer MEV17.2 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | MEV17.2 fuer NG-Motoren  |  |  |
| ORIGIN | string | BMW EA-51, Roman_Stoiber |  |  |
| REVISION | string | 5.505 |  |  |
| AUTHOR | string | BMW EA-14 Moritz_Zindler |  |  |
| COMMENT | string | SGBD fuer MEV17.2  |  |  |
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

### FS_LESEN_DETAIL

Fehlerspeicher lesen (ein Fehler / alle Details) KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Fehlercode |

### FS_LESEN_LANG

Fehlerspeicher auslesen

| Name | Type | Description |
| --- | --- | --- |
| FEHLERNR | int | ID des zu lesenden Fehlers (zB.0x27AB) |

### DATA_ID_LESEN

Auslesen der Data-ID (PST+DS) des SG

_No arguments._

### IDENT

Identdaten KWP2000: $1A ReadECUIdentification Modus  : Default

_No arguments._

### IDENT_AIF

(1) Auslesen der Identdaten mit KWP2000: $1A ReadECUIdentification (2) Auslesen des Anwender Informations Feldes mit KWP2000: $23 ReadMemoryByAddress (3) =Standard Flashjob

_No arguments._

### SERIENNUMMER_LESEN

Auslesen der Hersteller Seriennummer

_No arguments._

### SPEICHER_LESEN

Auslesen des Steuergeraete-Speichers Als Argumente werden uebergeben: Speichersegment, Start-Adresse und Anzahl der Datenbytes

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | string | LAR, wenn Seg. = linearAdressRange ROMI, wenn Seg. = ROM / EPROM, internal ROMX, wenn Seg. = ROM / EPROM, external NVRAM, wenn Seg. = NV-RAM (characteristic zones, DTC memory RAMIS, wenn Seg. = RAM, internal (short MOV) RAMXX, wenn Seg. = RAM, external (x data MOV) FLASH, wenn Seg. = Flash EPROM, internal UIFM, wenn Seg. = User Info Field Memory RAMIL, wenn Seg. = RAM, internal (long MOV / Register) |
| ADRESSE | long | Anfangsadresse ab welcher der Speicher ausgelesen werden soll |
| ANZAHL | int | Anzahl Speicherzellen, die ausgelesen werden sollen (1 - 254 ) |

### SPEICHER_SCHREIBEN

Beschreiben des Steuergeraete-Speichers Als Argumente werden uebergeben: Speichersegment, Start-Adresse, Anzahl der Datenbytes und Datenbytes (Datenbytes durch Komma getrennt) KWP2000: $3D WriteMemoryByAddress Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | string | LAR, wenn Seg. = linearAdressRange ROMI, wenn Seg. = ROM / EPROM, internal ROMX, wenn Seg. = ROM / EPROM, external NVRAM, wenn Seg. = NV-RAM (characteristic zones, DTC memory RAMIS, wenn Seg. = RAM, internal (short MOV) RAMXX, wenn Seg. = RAM, external (x data MOV) FLASH, wenn Seg. = Flash EPROM, internal UIFM, wenn Seg. = User Info Field Memory RAMIL, wenn Seg. = RAM, internal (long MOV / Register) |
| ADRESSE | long | Anfangsadresse ab welcher Daten in den Speicher geschrieben werden sollen |
| ANZAHL | int | Anzahl der zu schreibenden Daten (max. 249 ) |
| DATEN | string | zu schreibende Daten (Anzahl siehe oben) z.B. 1,2,03,0x04,0x05... |

### RAM_LESEN

Auslesen von beliebigen RAM-Zellen / INTEL-Format (Byte1=LB, Byte2=HB)

| Name | Type | Description |
| --- | --- | --- |
| RAM_ADRESSE | long | Startadresse |
| ANZAHL_BYTE | long | Anzahl der auszulesenden Bytes |

### VARIANTEN_LESEN

Auslesen Bauteilevarianten

_No arguments._

### VARIANTEN_LOESCHEN

Löschen der Varianten

_No arguments._

### ADAPTIONEN_LOESCHEN

Selektives Löschen der Adaptionswerte

| Name | Type | Description |
| --- | --- | --- |
| AUSWAHLBYTE_1 | int | Bit 0 = 1 => Adapt. LL-Regelung werden gelöscht Bit 1 = 1 => Adapt. Klopfregelung werden gelöscht Bit 2 = 1 => Lambdaregelungsfaktor vor KAT wird gelöscht Bit 3 = 1 => Lambdaregelungsfaktor hinter KAT wird gelöscht Bit 4 = 1 => Adapt. Massenströme zum Saugrohr werden gelöscht Bit 5 = 1 => Höhenadaption fho_w wird gelöscht Bit 6 = 1 => Adapt. Fuel-Off /-On werden gelöscht Bit 7 = 1 => Adapt. Lambdasondenalterung wird gelöscht |
| AUSWAHLBYTE_2 | int | Bit 0 = 1 => Adapt. Dynamikvorhalt werden gelöscht Bit 1 = 1 => Adapt. Bereichserkennung Benzin im Öl werden gelöscht Bit 2 = 1 => Adapt. VVT-Anschläge werden gelöscht Bit 3 = 1 => Adapt. VVT-Minhub wird gelöscht Bit 4 = 1 => Adapt. Batterietausch werden gelöscht Bit 5 = 1 => Adapt. der Hochdruckregelung werden gelöscht Bit 6 = 1 => Faktor Hinterachsübersetzung wird gelöscht Bit 7 = 1 => Adapt. Vanos werden gelöscht |

### STATUS_LLABG

Auslesen LL-Abgleichswerte

_No arguments._

### STEUERN_LLABG_VORGEBEN

LL-Abgleichswerte flüchtig vorgeben

| Name | Type | Description |
| --- | --- | --- |
| DNLLMV | int | Abgleichswert LL ohne Fahrstufe (dnllmv) |
| DNSACMV | int | Abgleichswert LL mit Klimaanlage ohne Fahrstufe (dnsacmv) |
| DNSLBV | int | Abgleichswert LL bei niedriger UBatt (dnslbv) |
| DNFSACMV | int | Abgleichswert LL mit Klimaanlage mit Fahrstufe (dnfsacmv) |
| DNFSMV | int | Abgleichswert LL mit Fahrstufe (dnfsmv) |

### STEUERN_LLABG_PROGRAMMIEREN

LL-Abgleichswerte nicht flüchtig vorgeben

| Name | Type | Description |
| --- | --- | --- |
| DNLLMV | int | Abgleichswert LL ohne Fahrstufe (dnllmv) |
| DNSACMV | int | Abgleichswert LL mit Klimaanlage ohne Fahrstufe (dnsacmv) |
| DNSLBV | int | Abgleichswert LL bei niedriger UBatt (dnslbv) |
| DNFSACMV | int | Abgleichswert LL mit Klimaanlage mit Fahrstufe (dnfsacmv) |
| DNFSMV | int | Abgleichswert LL mit Fahrstufe (dnfsmv) |

### STEUERN_LSHVK

Ansteuerung Lambdasondenheizung vor Kat

| Name | Type | Description |
| --- | --- | --- |
| TIMEOUT | unsigned long | Dauer der Ansteurung (0 s...510 s) |

### STEUERN_ENDE_LSHVK

Ansteuerung Lambdasondenheizung vor Kat beenden

_No arguments._

### STEUERN_LSHHK

Ansteuerung Lambdasondenheizung hinter Kat

| Name | Type | Description |
| --- | --- | --- |
| PERIODENDAUER | unsigned long | Periode PWM-Ansteuer-Signal (0 ms...2550 ms) |
| TASTVERHAELTNIS | int | Sollvorgabe resdhlsu für Tastverhältnis (0%...100%) |
| TIMEOUT | unsigned long | Dauer der Ansteurung (0 s...510 s) |

### STEUERN_ENDE_LSHHK

Ansteuerung Lambdasondenheizung hinter Kat beenden

_No arguments._

### STEUERN_MIL

Ansteuerung MIL

| Name | Type | Description |
| --- | --- | --- |
| TIMEOUT | unsigned long | Dauer der Ansteurung (0 s...510 s) |

### STEUERN_ENDE_MIL

Ansteuerung MIL beenden

_No arguments._

### STEUERN_EML

Ansteuerung EML

| Name | Type | Description |
| --- | --- | --- |
| TIMEOUT | unsigned long | Dauer der Ansteurung (0 s...510 s) |

### STEUERN_ENDE_EML

Ansteuerung EML beenden

_No arguments._

### STEUERN_EKP

Ansteuerung elektrische Kraftstoffpumpe

| Name | Type | Description |
| --- | --- | --- |
| TIMEOUT | unsigned long | Dauer der Ansteurung (0 s...510 s) |

### STEUERN_ENDE_EKP

Ansteuerung EKP beenden

_No arguments._

### STEUERN_E_LUEFTER

Ansteuerung E-Lüfter

| Name | Type | Description |
| --- | --- | --- |
| PERIODENDAUER | unsigned long | Periode PWM-Ansteuer-Signal (0 ms...2550 ms) |
| TASTVERHAELTNIS | int | Tastverhältnis tamldia (0%...100%) |
| TIMEOUT | unsigned long | Dauer der Ansteurung (0 s...510 s) |

### STEUERN_ENDE_E_LUEFTER

Ansteuerung E-Lüfter beenden

_No arguments._

### STEUERN_DK

Ansteuerung Drosselklappe

| Name | Type | Description |
| --- | --- | --- |
| PERIODENDAUER | unsigned long | Periode PWM-Ansteuer-Signal (0 ms...2550 ms) |
| TASTVERHAELTNIS | int | Tastverhältnis wdktest_w (0%...100%) |
| TIMEOUT | unsigned long | Dauer der Ansteurung (0 s...510 s) |

### STEUERN_ENDE_DK

Ansteuerung Drosselklappe beenden

_No arguments._

### STEUERN_DMTLP

Ansteuerung DMTL-Pumpe

| Name | Type | Description |
| --- | --- | --- |
| TIMEOUT | unsigned long | Dauer der Ansteurung (0 s...510 s) |

### STEUERN_ENDE_DMTLP

Ansteuerung DMTL-Pumpe beenden

_No arguments._

### STEUERN_DMTLV

Ansteuerung DMTL-Ventil

| Name | Type | Description |
| --- | --- | --- |
| TIMEOUT | unsigned long | Dauer der Ansteuerung (0 s...510 s) |

### STEUERN_ENDE_DMTLV

Ansteuerung DMTL-Ventil beenden

_No arguments._

### STEUERN_DMTLH

Ansteuerung DMTL-Heizung

| Name | Type | Description |
| --- | --- | --- |
| TIMEOUT | unsigned long | Dauer der Ansteurung (0 s...510 s) |

### STEUERN_ENDE_DMTLH

Ansteuerung DMTL-Heizung beenden

_No arguments._

### STEUERN_KFK

Ansteuerung Kennfeldthermostat

| Name | Type | Description |
| --- | --- | --- |
| TIMEOUT | unsigned long | Dauer der Ansteurung (0 s...510 s) |

### STEUERN_TEV

Ansteuerung Tankentlüftungsventil

| Name | Type | Description |
| --- | --- | --- |
| PERIODENDAUER | unsigned long | Periode PWM-Ansteuer-Signal (0 ms...2550 ms) |
| TASTVERHAELTNIS | string | "ein" -> TEV Ansteuerung 100% "aus" -> TEV Ansteuerung 0% table DigitalArgument TEXT |
| TIMEOUT | unsigned long | Dauer der Ansteurung (0 s...510 s) |

### STEUERN_TASTVERHAELTNIS_TEV

Ansteuerung Tankentlüftungsventil

| Name | Type | Description |
| --- | --- | --- |
| PERIODENDAUER | unsigned long | Periode PWM-Ansteuer-Signal (0 ms...2550 ms) |
| TASTVERHAELTNIS | int | Tastverhältnis wdktest_w (0%...100%) |
| TIMEOUT | unsigned long | Dauer der Ansteurung (0 s...510 s) |

### STEUERN_ENDE_TEV

Ansteuerung Tankentlüftungsventil beenden

_No arguments._

### STEUERN_VANOS_EINLASS

Ansteuerung Vanos Einlass-Ventil

| Name | Type | Description |
| --- | --- | --- |
| PERIODENDAUER | unsigned long | Periode PWM-Ansteuer-Signal (0 ms...2550 ms) |
| TASTVERHAELTNIS | int | Tastverhältnis wdktest_w (0%...100%) |
| TIMEOUT | unsigned long | Dauer der Ansteurung (0 s...510 s) |

### STEUERN_ENDE_VANOS_EINLASS

Ansteuerung VANOS Einlass-Ventil beenden

_No arguments._

### STEUERN_VANOS_AUSLASS

Ansteuerung Vanos Auslass-Ventil

| Name | Type | Description |
| --- | --- | --- |
| PERIODENDAUER | unsigned long | Periode PWM-Ansteuer-Signal (0 ms...2550 ms) |
| TASTVERHAELTNIS | int | Tastverhältnis wdktest_w (0%...100%) |
| TIMEOUT | unsigned long | Dauer der Ansteurung (0 s...510 s) |

### STEUERN_ENDE_VANOS_AUSLASS

Ansteuerung VANOS Auslass-Ventil beenden

_No arguments._

### STATUS_RBM_MODE9

Lesen der Rate-Based-Monitoring-Werte Mode 9

_No arguments._

### STATUS_SCHALTERSTATI

Auslesen der Schalterstati

_No arguments._

### STATUS_FUNKTIONSSTATI

Auslesen der Funktionsstati

_No arguments._

### STATUS_NWGADAPTION

Auslesen der NWG-Adaptionen

_No arguments._

### STATUS_VVT

Auslesen der VVT-Messwerte

_No arguments._

### STATUS_UBATT

Auslesen der Batteriespannung

_No arguments._

### STATUS_MOTORDREHZAHL

Auslesen der Motordrehzahl

_No arguments._

### STATUS_MOTORTEMPERATUR

Auslesen der Motortemperatur

_No arguments._

### STATUS_ANSAUGLUFTTEMPERATUR

Auslesen der Ansauglufttemperatur

_No arguments._

### STATUS_PWG_POTI_SPANNUNG

Auslesen der Pedalwertgeber-Stati

_No arguments._

### STATUS_LMM_MASSE

Auslesen des Luftmassenstroms Bei Fz. mit HFM (US-Variante)  => Luftmassenstrom über mshfm_w Bei Fz. ohne HFM (ECE-Variante) => Luftmassenstrom über ml_w

_No arguments._

### STATUS_ULSVK

Auslesen Lambdasondenspannung vor Kat

_No arguments._

### STATUS_ULSHK

Auslesen Lambdasondenspannung hinter Kat

_No arguments._

### STATUS_INT

Auslesen des Lambdaregler-Ausgangs

_No arguments._

### STATUS_MUL

Multipikativer Gemischadaptionsfaktor der Lambdaregelung

_No arguments._

### STATUS_ADD

Additiver Gemischadaptionsfaktor der Lambdaregelung

_No arguments._

### STATUS_LAUFUNRUHE

Auslesen der Laufunruhewerte

_No arguments._

### STATUS_MSA

0x22402F STATUS_MSA     MSA (MotorStopAutomatik) auslesen

_No arguments._

### STATUS_MSARING

0x22401C STATUS_MSARING Ringspeicher Motor-Start/Stop Automatik (MSA) auslesen

_No arguments._

### STATUS_NULLGANG_ERKENNUNG

0x22402E STATUS_NULLGANG_ERKENNUNG     Nullgang Erkennung auslesen

_No arguments._

### STEUERN_MSA_DEAK

0x2E5F8E07 STEUERN_MSA_DEAK     MSA (MotorStopAutomatik) deaktivieren vorgeben   NO_CON keine Vorraussetzungen

_No arguments._

### STATUS_MSA_DEAK

0x225F8E STATUS_MSA_DEAK     MSA (MotorStopAutomatik) deaktivieren auslesen

_No arguments._

### STEUERN_ENDE_MSA_DEAK

0x2E5F8E00 STEUERN_ENDE_MSA_DEAK     MSA (MotorStopAutomatik) deaktivieren Vorgeben beenden  NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_MSA_DEAK_AV

0x2E5F8F07 STEUERN_MSA_DEAK_AV     Selektive Deaktivierung Abschaltverhinderer MSA (MotorStopAutomatik) vorgeben   NO_CON keine Vorraussetzungen

| Name | Type | Description |
| --- | --- | --- |
| SW_STAT_MSA_DEAK_AV_WERT | unsigned long | Selektive Deaktivierung Abschaltverhinderer MSA (MotorStopAutomatik) Swmsaav   Min: 0 Max: 4294967295 |

### STATUS_MSA_DEAK_AV

0x225F8F STATUS_MSA_DEAK_AV     Selektive Deaktivierung Abschaltverhinderer MSA (MotorStopAutomatik) auslesen

_No arguments._

### STEUERN_ENDE_MSA_DEAK_AV

0x2E5F8F00 STEUERN_ENDE_MSA_DEAK_AV     Selektive Deaktivierung Abschaltverhinderer MSA (MotorStopAutomatik) Vorgeben beenden   NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_MSARING_HFKRESET

0x2E5F89 STEUERN_MSARING_HFKRESET MSARING Haeufigkeitszaehler Reset

_No arguments._

### STATUS_KUP

0x300401 STATUS_KUP     Kupplungsschalter auslesen NO_CON keine Vorraussetzungen

_No arguments._

### STEUERN_NULLGANG_SCHREIBEN

0x2E5F8A STEUERN_NULLGANG_SCHREIBEN Schreiben Nullgang Lernwert

| Name | Type | Description |
| --- | --- | --- |
| STAT_NGS_WERT | real | Nullgang Lernwert Tvneutral   Einheit: %   Min: 0 Max: 655.35 |

### STEUERN_NULLGANG_LERNEN

0x312E STEUERN_NULLGANG_LERNEN Ansteuern Nullgang lernen (Der Nullgang-Lernwert ist nichtfluechtig so abzulegen, dass er bei Reprogrammierung nicht überschrieben wird.)

_No arguments._

### STEUERN_CODIERUNG_MSA

0x2E3250 STEUERN_CODIERUNG_MSA Codierung fuer MSA vorgeben  Dieser Service muss waehrend der ganzen Lebensdauer des Fahrzeugs ausfuehrbar sein. Betriebsstundenzaehler und km-Stand haben also keinen Einfluss auf diesen Service.

| Name | Type | Description |
| --- | --- | --- |
| SW_CODIERUNG_MSA_WERT | unsigned long | Codierung fuer MSA, 0 = kein MSA-Fahrzeug, 1 = MSA-Fahrzeug, 1BYTE in 0 bis 255   Min: 0 Max: 255 |

### STATUS_CODIERUNG_MSA

0x223250 STATUS_CODIERUNG_MSA Codierung fuer MSA auslesen

_No arguments._

### STEUERN_MSA_DEAK_DAUERHAFT

0x2E5F8E08 STEUERN_MSA_DEAK_DAUERHAFT MSA (MotorStopAutomatik) MSA dauerhaft (ueber Zuendungswechsel hinweg) deaktivieren vorgeben  Der Diagnosejob zur dauerhaften MSA Deaktivierung ist an den Km-Zaehler zu koppeln. Nach Ablauf von 250 km, wird die permanente MSA Deaktivierung automatisch zurueckgenommen (d.h. MSA permanent aktiviert) und der Job zur dauerhaften MSA Deaktivierung kann nicht mehr ausgefuehrt werden. Dadurch wird noch ein mal mehr sichergestellt, dass im Feld MSA aktiv ist und MSA nicht dauerhaft deaktiviert werden kann. Bei deaktivierter MSA ist kein FS zu erzeugen. Bei deaktivierter MSA muessen alle MSA Diagnosen aktiv bleiben. NO_CON

_No arguments._

### STATUS_STARTZEITENSPEICHER

Auslesen Startverhinderer Aktivierung: Klemme 15 = EIN STAT_BEDKURZ sind die Startverhinderer zwischen 1s < tstart < 4s STAT_BEDLANG sind die Startverhinderer wo tstart > 4s ist

_No arguments._

### IDENT_IBS

$22 40 21 BMW Nr, Seriennummer, SW/HW Index

_No arguments._

### STATUS_BZEINFO

Auslesen Infospeicher Batterie Zustands Erkennung (BZE)

_No arguments._

### STATUS_SYSTEMCHECK_PM_INFO_1

Auslesen Bytefeld 1 Batterie Powermanagement

_No arguments._

### STATUS_SYSTEMCHECK_PM_INFO_2

Auslesen Bytefeld 2 Batterie Powermanagement

_No arguments._

### STEUERN_PM_HISTOGRAM_RESET

0x2E5FF504 STEUERN_PM_HISTOGRAM_RESET Löschen der Powermanagement-Infofelder Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### START_SYSTEMCHECK_PM_MESSEMODE

Anstoßen DiagnoseFunktion PM-Messmode

_No arguments._

### STATUS_SYSTEMCHECK_PM_MESSEMODE

0x33F6 STATUS_SYSTEMCHECK_PM_MESSEMODE Auslesen Messemode

_No arguments._

### STOP_SYSTEMCHECK_PM_MESSEMODE

Systemdiagnose BatterieSensor Reset beenden

_No arguments._

### STEUERN_BATTERIETAUSCH_REGISTRIEREN

0x3130001000 STEUERN_BATTERIETAUSCH_REGISTRIEREN Batterietausch registrieren Aktivierung: Klemme 15 = EIN UND Drehzahl = 0 1/min Activation: LV_IGK = 1 UND LV_ES = 1

_No arguments._

### STEUERN_RUHESTROMMESSUNG

Ansteuern Ruhestrompruefung mit IBS

| Name | Type | Description |
| --- | --- | --- |
| I_MAX_WERT | real | Maximale Ruhestromschwelle (ecomxi) min = 0.0 A, max = 0.3188 A |
| MSB_WERT | real | Messartbedingungen (ecomsb) min = 0.0 s, max = 12.75 s |
| MZ_WERT | real | Dauer Mittelwertmessung (ecomz) min = 0.0 s, max = 12.75 s |
| TO_WERT | real | ECOS Messung Timeout (ecotimo) min = 0.0 s, max = 25.5 s |

### STATUS_RUHESTROMMESSUNG

Auslesen Status Ruhestromprüfung mit IBS

_No arguments._

### START_SYSTEMCHECK_EVAUSBL

Ausblenden von EVs

| Name | Type | Description |
| --- | --- | --- |
| VENTIL_NR | int | Gibt die auszublendenden Ventile an (binaer) Bit0 = 1 => EV1 wird ausgeblendet Bit1 = 1 => EV2 wird ausgeblendet Bit2 = 1 => EV3 wird ausgeblendet Bit3 = 1 => EV4 wird ausgeblendet Bit4...Bit7 = 0 (nicht belegt) => Eingabewert: min = 0, max = 15 |

### STATUS_SYSTEMCHECK_EVAUSBL

Ausgabe der Ausblendstati der EVs

_No arguments._

### STOP_SYSTEMCHECK_EVAUSBL

Ausblenden von EVs beenden

_No arguments._

### START_SYSTEMCHECK_TEV_FUNC

Anstoßen Systemtest TEV

_No arguments._

### STATUS_SYSTEMCHECK_TEV_FUNC

Auslesen Status Systemtest TEV

_No arguments._

### STOP_SYSTEMCHECK_TEV_FUNC

Stop Systemtest TEV

_No arguments._

### START_SYSTEMCHECK_LLERH

Anstoßen Systemtest LL-Erhöhung über Tester

| Name | Type | Description |
| --- | --- | --- |
| LL_WERT | int | Eingabewert = 400....2200 |

### STATUS_SYSTEMCHECK_LLERH

Diagnosestatus LLERH (a) Diag. läuft (llsstat = 0) => wirksame LL-Drehzahl = die über den Tester vorgegebene (b) Diag. läuft nicht (llsstat = 5) => wirksame LL-Drehzahl = Kennlinienwert

_No arguments._

### STOP_SYSTEMCHECK_LLERH

Systemtest LL-Erhöhung beenden

_No arguments._

### START_SYSTEMCHECK_VVT_ANSCHLAG

Anstoßen Diagnose 'VVT-Anschläge lernen'

_No arguments._

### STATUS_SYSTEMCHECK_VVT_ANSCHLAG

Diagnosestatus 'VVT-Anschläge lernen'

_No arguments._

### STOP_SYSTEMCHECK_VVT_ANSCHLAG

Diagnose 'VVT-Anschläge lernen' beenden

_No arguments._

### START_SYSTEMCHECK_DMTL

Anstoßen Tankdiagnose DMTL

_No arguments._

### STATUS_SYSTEMCHECK_DMTL

Status Tankdiagnose DMTL

_No arguments._

### STOP_SYSTEMCHECK_DMTL

Tankdiagnose DMTL beenden

_No arguments._

### START_SYSTEMCHECK_LSVK

Anstoßen Systemdiagnose LS vor KAT

_No arguments._

### STATUS_SYSTEMCHECK_LSVK

Status Systemdiagnose LS vor KAT

_No arguments._

### STOP_SYSTEMCHECK_LSVK

Systemdiagnose LS vor KAT beenden

_No arguments._

### START_SYSTEMCHECK_LSHK

Anstoßen Systemtest LS hinter KAT

_No arguments._

### STOP_SYSTEMCHECK_LSHK

Systemtest LS hinter KAT beenden

_No arguments._

### START_SYSTEMCHECK_KAT

Anstoßen Kurztest KAT

_No arguments._

### STATUS_SYSTEMCHECK_KAT

Auslesen Status Systemtest KAT

_No arguments._

### STOP_SYSTEMCHECK_KAT

Kurztest KAT beenden

_No arguments._

### START_SYSTEMCHECK_GEMISCHADAPT_SPERR

Anstoßen Systemtest 'Gemischadaption sperren'

_No arguments._

### STATUS_SYSTEMCHECK_GEMISCHADAPT_SPERR

Status der Diagnose 'Grundadaption starten'

_No arguments._

### STOP_SYSTEMCHECK_GEMISCHADAPT_SPERR

Systemtest 'Gemischadaption sperren' beenden

_No arguments._

### START_SYSTEMCHECK_GRUNDADAPT

Anstoßen Systemtest 'Grundadaption starten'

_No arguments._

### STATUS_SYSTEMCHECK_GRUNDADAPT

Status der Diagnose 'Grundadaption starten'

_No arguments._

### STOP_SYSTEMCHECK_GRUNDADAPT

Systemtest 'Grundadaption starten' beenden

_No arguments._

### START_SYSTEMCHECK_L_REGELUNG_AUS

Anstoßen Systemtest 'Lambdaregelung aus'

_No arguments._

### STATUS_SYSTEMCHECK_L_REGELUNG_AUS

Auslesen Diagnosestatus 'Lambdaregelung aus'

_No arguments._

### STOP_SYSTEMCHECK_L_REGELUNG_AUS

Stop Systemtest 'Lambdaregelung aus'

_No arguments._

### START_SYSTEMCHECK_IGR_AUS

Start Diagnose IGR deaktivieren

_No arguments._

### STATUS_SYSTEMCHECK_IGR_AUS

Status IGR-Deaktivieren lesen

_No arguments._

### STOP_SYSTEMCHECK_IGR_AUS

Diagnose 'IGR deaktivieren' beenden

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

### STATUS_ENERGIESPARMODE

Auslesen des Energiesparmodus

_No arguments._

### STATUS_FEHLERCODE

Auslesen der Zyklusflags einzelner Fehlerpfade

| Name | Type | Description |
| --- | --- | --- |
| FEHLER_CODE | int | Eingabewert = 0x2710....0x5D0B |

### STEUERN_EKP_DEAKTIVIERUNG

Deaktivierung der elektrische Kraftstoffpumpe Nur eine Zustandsänderung pro Driving Cycle möglich!

| Name | Type | Description |
| --- | --- | --- |
| STATUS_EKP | string | "ein" -> EKP ein "aus" -> EKP aus table DigitalArgument TEXT Default: "ein" |

### STATUS_EKP_DEAKTIVIERUNG

Status der elektrische Kraftstoffpumpe

_No arguments._

### STEUERN_KGEH

Ansteuerung Heizung Kurbelgehäuseentlüftung

| Name | Type | Description |
| --- | --- | --- |
| TIMEOUT | unsigned long | Dauer der Ansteurung (0 s...510 s) |

### STEUERN_ENDE_KGEH

Ansteuerung Heizung Kurbelgehäuseentlüftung

_No arguments._

### STEUERN_WASSERPUMPE

Ansteuerung der Wasserpumpe

| Name | Type | Description |
| --- | --- | --- |
| TASTVERHAELTNIS | int | Sollvorgabe arqtwapu für Tastverhältnis (0%...100%) |
| TIMEOUT | unsigned long | Dauer der Ansteurung (0 s...510 s) |

### STEUERN_ENDE_WASSERPUMPE

Ansteuerung Heizung Kurbelgehäuseentlüftung

_No arguments._

### STATUS_BETRIEBSSTUNDENZAEHLER

$ 22 5A B4 Status Betriebsstundenzaehler auslesen

_No arguments._

### IDENT_GEN

Identifikationsdaten Generator Aktivierung: Klemme 15 = EIN Activation:

_No arguments._

### STATUS_AMUENE

Status AMUENE

_No arguments._

### STEUERN_POWERFAIL

Ansteuerung Heizung Kurbelgehäuseentlüftung

_No arguments._

### STATUS_READINESS

Auslesen Readiness Systemchecks

_No arguments._

### MESSWERTBLOCK_LESEN

0x2CF0 MESSWERTBLOCK_LESEN DDLI Messwerte auf Basis Übergabestring aus DME auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

| Name | Type | Description |
| --- | --- | --- |
| STRING_IN | string | Werte aus DDLI Liste Format 0x58XX,0x42YY,0x43ZZ,... |
| TRENNZEICHEN | string | Werte aus DDLI Liste Format 0x58XX,0x42YY,0x43ZZ,... |

### STATUS_MSAINFO

0x224018 STATUS_MSAINFO Infospeicher Motor-Start/Stop Automatik (MSA) auslesen

_No arguments._

### STATUS_LEMINFO

0x224017 STATUS_LEMINFO Infospeicher Leistungskoordination Elektrisch Mechanisch (LEM) auslesen

_No arguments._

### STATUS_IGRINFO

0x224016 STATUS_IGRINFO Infospeicher Intelligente Generator Regelung (IGR) auslesen

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

### KRAFTSTOFFVERBRAUCH_LESEN

Auslesen der Daten Referenz KWP2000: $22   ReadDataByCommonIdentifier $2504 DREF Modus  : Default

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
| 2 | KWP2000* |
| - | KWP2000 |
| - | DS2 |

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

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

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
| 0xFF | FF Status unbekannt |

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

### TINDIVIDUALDATALISTE

| ENTRYNR | ISLAST | FROMWHERE | DIAG | CARORKEY | USECASE | TESTER_ALGO | RESERVED | INQY_LEN | INQY_DATA | RESP_LEN | RESP_DATA | WRITE_LEN | WRITE_DATA | W_RESP_LEN | W_RESP_DATA | COMMENT |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0000 | 0xFF | 01 | 12 | 02 | 000F | 01 | 00 | 00 |  | 00 |  | 00 |  | 00 |  | PM.Recovery |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x2710 | DFES_DTCM.DFC_CFCmax_C  -  Tankdeckel |
| 0x2711 | DFES_DTCM.DFC_CFCmin_C  -  Tankdeckel |
| 0x2718 | DFES_DTCM.DFC_DHDMTEmax_C  -  DMTL-Heizung, Ansteuerung |
| 0x2719 | DFES_DTCM.DFC_DHDMTEmin_C  -  DMTL-Heizung, Ansteuerung |
| 0x271B | DFES_DTCM.DFC_DHDMTEsig_C  -  DMTL-Heizung, Ansteuerung |
| 0x2727 | DFES_DTCM.DFC_DMMVEmax_C  -  DMTL-Magnetventil, Ansteuerung |
| 0x2728 | DFES_DTCM.DFC_DMMVEmin_C  -  DMTL-Magnetventil, Ansteuerung |
| 0x272A | DFES_DTCM.DFC_DMMVEsig_C  -  DMTL-Magnetventil, Ansteuerung |
| 0x272B | DFES_DTCM.DFC_DMPMEmax_C  -  DMTL-Pumpenmotor, Ansteuerung |
| 0x272C | DFES_DTCM.DFC_DMPMEmin_C  -  DMTL-Pumpenmotor, Ansteuerung |
| 0x272E | DFES_DTCM.DFC_DMPMEsig_C  -  DMTL-Pumpenmotor, Ansteuerung |
| 0x272F | DFES_DTCM.DFC_DMTKmax_C  -  DMTL, Feinstleck |
| 0x2733 | DFES_DTCM.DFC_DMTLmax_C  -  DMTL, Modulfehler |
| 0x2734 | DFES_DTCM.DFC_DMTLmin_C  -  DMTL, Modulfehler |
| 0x2735 | DFES_DTCM.DFC_DMTLnpl_C  -  DMTL, Modulfehler |
| 0x2736 | DFES_DTCM.DFC_DMTLsig_C  -  DMTL, Modulfehler |
| 0x2738 | DFES_DTCM.DFC_DPMEEmin_C  -  DMTL-Leckdiagnosepumpe, Ansteuerung |
| 0x273A | DFES_DTCM.DFC_DPMEEsig_C  -  DMTL-Leckdiagnosepumpe, Ansteuerung |
| 0x273B | DFES_DTCM.DFC_DTEVmax_C  -  Tankentlüftungsventil, mechanisch |
| 0x273C | DFES_DTCM.DFC_DTEVmin_C  -  Tankentlüftungsventil, mechanisch |
| 0x273D | DFES_DTCM.DFC_DZKU0npl_C  -  Zündspule Zylinder 1, Zündkreisüberwachung |
| 0x273E | DFES_DTCM.DFC_DZKU1npl_C  -  Zündspule Zylinder 3, Zündkreisüberwachung |
| 0x273F | DFES_DTCM.DFC_DZKU2npl_C  -  Zündspule Zylinder 4, Zündkreisüberwachung |
| 0x2740 | DFES_DTCM.DFC_DZKU3npl_C  -  Zündspule Zylinder 2, Zündkreisüberwachung |
| 0x2741 | DFES_DTCM.DFC_FMASmax_C  -  Gemischadaption, Summenfehler |
| 0x2742 | DFES_DTCM.DFC_FMASmin_C  -  Gemischadaption, Summenfehler |
| 0x2743 | DFES_DTCM.DFC_FMASnpl_C  -  Gemischadaption, Summenfehler |
| 0x2744 | DFES_DTCM.DFC_FMASsig_C  -  Gemischadaption, Summenfehler |
| 0x274D | DFES_DTCM.DFC_FRAUmax_C  -  Gemischadaption, unterer Drehzahlbereich |
| 0x274E | DFES_DTCM.DFC_FRAUmin_C  -  Gemischadaption, unterer Drehzahlbereich |
| 0x2752 | DFES_DTCM.DFC_FRSTmax_C  -  Gemischadaption, Abweichung |
| 0x2753 | DFES_DTCM.DFC_FRSTmin_C  -  Gemischadaption, Abweichung |
| 0x2754 | DFES_DTCM.DFC_FRSTnpl_C  -  Gemischadaption, Abweichung |
| 0x2755 | DFES_DTCM.DFC_FSTEmax_C  -  Kraftstoff-Füllstandsgeber |
| 0x2756 | DFES_DTCM.DFC_FSTEmin_C  -  Kraftstoff-Füllstandsgeber |
| 0x2757 | DFES_DTCM.DFC_FSTEnpl_C  -  Kraftstoff-Füllstandsgeber |
| 0x2758 | DFES_DTCM.DFC_FSTEsig_C  -  Kraftstoff-Füllstandsgeber |
| 0x275D | DFES_DTCM.DFC_FSTRmax_C  -  Kraftstoff-Füllstandsgeber |
| 0x275E | DFES_DTCM.DFC_FSTRmin_C  -  Kraftstoff-Füllstandsgeber |
| 0x275F | DFES_DTCM.DFC_FSTRnpl_C  -  Kraftstoff-Füllstandsgeber |
| 0x276A | DFES_DTCM.DFC_KATmin_C  -  Katalysatorkonvertierung |
| 0x276D | DFES_DTCM.DFC_KPEmax_C  -  Kraftstoffpumpe, Ansteuerung |
| 0x276E | DFES_DTCM.DFC_KPEmin_C  -  Kraftstoffpumpe, Ansteuerung |
| 0x2770 | DFES_DTCM.DFC_KPEsig_C  -  Kraftstoffpumpe, Ansteuerung |
| 0x2771 | DFES_DTCM.DFC_MD00max_C  -  Verbrennungsaussetzer, Zylinder 1 |
| 0x2772 | DFES_DTCM.DFC_MD00min_C  -  Verbrennungsaussetzer, Zylinder 1 |
| 0x2773 | DFES_DTCM.DFC_MD00npl_C  -  Verbrennungsaussetzer, Zylinder 1 |
| 0x2775 | DFES_DTCM.DFC_MD01max_C  -  Verbrennungsaussetzer, Zylinder 3 |
| 0x2776 | DFES_DTCM.DFC_MD01min_C  -  Verbrennungsaussetzer, Zylinder 3 |
| 0x2777 | DFES_DTCM.DFC_MD01npl_C  -  Verbrennungsaussetzer, Zylinder 3 |
| 0x2779 | DFES_DTCM.DFC_MD02max_C  -  Verbrennungsaussetzer, Zylinder 4 |
| 0x277A | DFES_DTCM.DFC_MD02min_C  -  Verbrennungsaussetzer, Zylinder 4 |
| 0x277B | DFES_DTCM.DFC_MD02npl_C  -  Verbrennungsaussetzer, Zylinder 4 |
| 0x277D | DFES_DTCM.DFC_MD03max_C  -  Verbrennungsaussetzer, Zylinder 2 |
| 0x277E | DFES_DTCM.DFC_MD03min_C  -  Verbrennungsaussetzer, Zylinder 2 |
| 0x277F | DFES_DTCM.DFC_MD03npl_C  -  Verbrennungsaussetzer, Zylinder 2 |
| 0x2781 | DFES_DTCM.DFC_MDmax_C  -  Verbrennungsaussetzer, mehrere Zylinder |
| 0x2782 | DFES_DTCM.DFC_MDmin_C  -  Verbrennungsaussetzer, mehrere Zylinder |
| 0x2783 | DFES_DTCM.DFC_MDnpl_C  -  Verbrennungsaussetzer, mehrere Zylinder |
| 0x2789 | DFES_DTCM.DFC_RKATmax_C  -  Gemischadaption im Leerlauf pro Zeit |
| 0x278A | DFES_DTCM.DFC_RKATmin_C  -  Gemischadaption im Leerlauf pro Zeit |
| 0x27AC | DFES_DTCM.DFC_TESGmax_C  -  DMTL, Grobleck |
| 0x27B0 | DFES_DTCM.DFC_TESmin_C  -  Tankentlüftungssystem, Funktion |
| 0x27B1 | DFES_DTCM.DFC_TEVEmax_C  -  Tankentlüftungsventil, Ansteuerung |
| 0x27B2 | DFES_DTCM.DFC_TEVEmin_C  -  Tankentlüftungsventil, Ansteuerung |
| 0x27B4 | DFES_DTCM.DFC_TEVEsig_C  -  Tankentlüftungsventil, Ansteuerung |
| 0x27C4 | DFES_DTCM.DFC_FSTESmax_C  -  Kraftstoff-Füllstandsgeber |
| 0x27C5 | DFES_DTCM.DFC_FSTESmin_C  -  Kraftstoff-Füllstandsgeber |
| 0x27C6 | DFES_DTCM.DFC_FSTESsig_C  -  Kraftstoff-Füllstandsgeber |
| 0x283D | DFES_DTCM.DFC_ANWSADmin_C  -  VANOS, Auslass: Adaption Anschlag |
| 0x2840 | DFES_DTCM.DFC_ANWSEmax_C  -  VANOS-Magnetventil Auslass, Ansteuerung |
| 0x2841 | DFES_DTCM.DFC_ANWSEmin_C  -  VANOS-Magnetventil Auslass, Ansteuerung |
| 0x2842 | DFES_DTCM.DFC_ANWSEsig_C  -  VANOS-Magnetventil Auslass, Ansteuerung |
| 0x2845 | DFES_DTCM.DFC_ANWSnpl_C  -  VANOS, Auslass: Stellerbewegung |
| 0x2847 | DFES_DTCM.DFC_DIVVTnpl_C  -  Valvetronic Stellmotor, elektrisch |
| 0x284F | DFES_DTCM.DFC_DVESTmax_C  -  Valvetronic Stellmotor, Ansteuerung |
| 0x2850 | DFES_DTCM.DFC_DVESTmin_C  -  Valvetronic Stellmotor, Ansteuerung |
| 0x2851 | DFES_DTCM.DFC_DVESTnpl_C  -  Valvetronic Stellmotor, Ansteuerung |
| 0x2852 | DFES_DTCM.DFC_DVESTsig_C  -  Valvetronic Stellmotor, Ansteuerung |
| 0x2853 | DFES_DTCM.DFC_DVFFSmax_C  -  Valvetronic, Exzenterwellensensor: Führung |
| 0x2854 | DFES_DTCM.DFC_DVFFSmin_C  -  Valvetronic, Exzenterwellensensor: Führung |
| 0x2855 | DFES_DTCM.DFC_DVFFSnpl_C  -  Valvetronic, Exzenterwellensensor: Führung |
| 0x2856 | DFES_DTCM.DFC_DVFFSsig_C  -  Valvetronic, Exzenterwellensensor: Führung |
| 0x2857 | DFES_DTCM.DFC_DVFRSmax_C  -  Valvetronic, Exzenterwellensensor: Referenz |
| 0x2858 | DFES_DTCM.DFC_DVFRSmin_C  -  Valvetronic, Exzenterwellensensor: Referenz |
| 0x2859 | DFES_DTCM.DFC_DVFRSnpl_C  -  Valvetronic, Exzenterwellensensor: Referenz |
| 0x285A | DFES_DTCM.DFC_DVFRSsig_C  -  Valvetronic, Exzenterwellensensor: Referenz |
| 0x285B | DFES_DTCM.DFC_DVLRNmax_C  -  Valvetronic, Verstellbereich |
| 0x285C | DFES_DTCM.DFC_DVLRNmin_C  -  Valvetronic, Verstellbereich |
| 0x285D | DFES_DTCM.DFC_DVLRNnpl_C  -  Valvetronic, Verstellbereich |
| 0x285E | DFES_DTCM.DFC_DVLRNsig_C  -  Valvetronic, Verstellbereich |
| 0x285F | DFES_DTCM.DFC_DVOVLmax_C  -  Valvetronic, thermischer Überlastschutz |
| 0x2860 | DFES_DTCM.DFC_DVOVLmin_C  -  Valvetronic, thermischer  Überlastschutz |
| 0x2861 | DFES_DTCM.DFC_DVPLAnpl_C  -  Valvetronic, Exzenterwellensensor: Plausibilität |
| 0x2863 | DFES_DTCM.DFC_DVPMNmin_C  -  Valvetronic, Leistungsbegrenzung |
| 0x2865 | DFES_DTCM.DFC_DVPMNsig_C  -  Valvetronic, Leistungsbegrenzung |
| 0x2868 | DFES_DTCM.DFC_DVSTEnpl_C  -  Valvetronic Stellmotor, Schwergängigkeit |
| 0x2869 | DFES_DTCM.DFC_DVSTEsig_C  -  Valvetronic Stellmotor, Schwergängigkeit |
| 0x286A | DFES_DTCM.DFC_DVULVmax_C  -  Valvetronic Stellmotor, Spannungsversorgung |
| 0x286B | DFES_DTCM.DFC_DVULVmin_C  -  Valvetronic Stellmotor, Spannungsversorgung |
| 0x286C | DFES_DTCM.DFC_DVULVnpl_C  -  Valvetronic Stellmotor, Spannungsversorgung |
| 0x286D | DFES_DTCM.DFC_DVUSEmax_C  -  Valvetronic, Exzenterwellensensor: Spannungsversorgung |
| 0x286E | DFES_DTCM.DFC_DVUSEmin_C  -  Valvetronic, Exzenterwellensensor: Spannungsversorgung |
| 0x2870 | DFES_DTCM.DFC_ENWSADmin_C  -  VANOS, Einlass: Adaption Anschlag |
| 0x2877 | DFES_DTCM.DFC_ENWSEmax_C  -  VANOS-Magnetventil Einlass, Ansteuerung |
| 0x2878 | DFES_DTCM.DFC_ENWSEmin_C  -  VANOS-Magnetventil Einlass, Ansteuerung |
| 0x287A | DFES_DTCM.DFC_ENWSEsig_C  -  VANOS-Magnetventil Einlass, Ansteuerung |
| 0x287D | DFES_DTCM.DFC_ENWSnpl_C  -  VANOS, Einlass: Stellerbewegung |
| 0x287E | DFES_DTCM.DFC_ENWSsig_C  -  VANOS, Einlass: Stellerbewegung |
| 0x2888 | DFES_DTCM.DFC_MINHUBmax_C  -  Valvetronic, Minimalhub |
| 0x288D | DFES_DTCM.DFC_NWAKWmin_C  -  Auslassnockenwelle zu Kurbelwelle, Korrelation |
| 0x2891 | DFES_DTCM.DFC_NWEKWmin_C  -  Einlassnockenwelle zu Kurbelwelle, Korrelation |
| 0x289C | DFES_DTCM.DFC_NWVPEnpl_C  -  VANOS, Einlass: Verriegelungsposition |
| 0x28B4 | DFES_DTCM.DFC_VVTLRUnpl_C  -  Valvetronic Stellmotor, Schwergängigkeit |
| 0x28B6 | DFES_DTCM.DFC_VVTREmax  -  Valvetronic Relais, Ansteuerung |
| 0x28B7 | DFES_DTCM.DFC_VVTREmin  -  Valvetronic Relais, Ansteuerung |
| 0x28B9 | DFES_DTCM.DFC_VVTREsig  -  Valvetronic Relais, Ansteuerung |
| 0x2968 | DFES_DTCM.DFC_EpmCaSI1ErrSig_C  -  Einlassnockenwellensensor |
| 0x2969 | DFES_DTCM.DFC_EpmCaSI1NoSig_C  -  Einlassnockenwellensensor |
| 0x296A | DFES_DTCM.DFC_EpmCaSI1OfsErr_C  -  Einlassnockenwellensensor |
| 0x296B | DFES_DTCM.DFC_EpmCaSO1ErrSig_C  -  Auslassnockenwellensensor |
| 0x296C | DFES_DTCM.DFC_EpmCaSO1NoSig_C  -  Auslassnockenwellensensor |
| 0x296D | DFES_DTCM.DFC_EpmCaSO1OfsErr_C  -  Auslassnockenwellensensor |
| 0x296E | DFES_DTCM.DFC_EpmCrSErrsig_C  -  Kurbelwellensensor |
| 0x296F | DFES_DTCM.DFC_EpmCrSNosig_C  -  Kurbelwellensensor |
| 0x2970 | DFES_DTCM.DFC_LLRHmax_C  -  Leerlaufregelung im Homogenbetrieb |
| 0x2971 | DFES_DTCM.DFC_LLRHmin_C  -  Leerlaufregelung im Homogenbetrieb |
| 0x2972 | DFES_DTCM.DFC_LLRKHmax_C  -  Leerlaufregelung, Katalysatorheizen |
| 0x2973 | DFES_DTCM.DFC_LLRKHmin_C  -  Leerlaufregelung, Katalysatorheizen |
| 0x2974 | DFES_DTCM.DFC_LLRmax_C  -  Leerlaufregelung |
| 0x2975 | DFES_DTCM.DFC_LLRmin_C  -  Leerlaufregelung |
| 0x2976 | DFES_DTCM.DFC_LLRMmax_C  -  Leerlaufregelung im Magerbetrieb |
| 0x2977 | DFES_DTCM.DFC_LLRMmin_C   -  Leerlaufregelung im Magerbetrieb |
| 0x297C | DFES_DTCM.DFC_EpmCaSI1MntErr_C  -  Einlassnockenwelle, Mechanik |
| 0x2982 | DFES_DTCM.DFC_EpmCaSI1NoSigMax_C  -  Einlassnockenwellensensor |
| 0x2983 | DFES_DTCM.DFC_EpmCaSI1NoSigMin_C  -  Einlassnockenwellensensor |
| 0x2986 | DFES_DTCM.DFC_EpmCaSO1NoSigMax_C  -  Auslassnockenwellensensor |
| 0x2987 | DFES_DTCM.DFC_EpmCaSO1NoSigMin_C  -  Auslassnockenwellensensor |
| 0x2A35 | DFES_DTCM.DFC_DYLSUmin_C  -  Lambdasonde vor Katalysator, Dynamik |
| 0x2A3C | DFES_DTCM.DFC_FTDLAmax_C  -  Lambdasonde vor Katalysator, Trimmregelung |
| 0x2A3D | DFES_DTCM.DFC_FTDLAmin_C  -  Lambdasonde vor Katalysator, Trimmregelung |
| 0x2A47 | DFES_DTCM.DFC_HELSUsig_C  -  Lambdasonde vor Katalysator, Heizereinkopplung |
| 0x2A50 | DFES_DTCM.DFC_HSHEmax_C  -  Lambdasondenbeheizung nach Katalysator, Ansteuerung |
| 0x2A51 | DFES_DTCM.DFC_HSHEmin_C  -  Lambdasondenbeheizung nach Katalysator, Ansteuerung |
| 0x2A53 | DFES_DTCM.DFC_HSHEsig_C  -  Lambdasondenbeheizung nach Katalysator, Ansteuerung |
| 0x2A56 | DFES_DTCM.DFC_HSHnpl_C  -  Lambdasondenheizung nach Katalysator, Funktion |
| 0x2A60 | DFES_DTCM.DFC_HSVEmax_C  -  Lambdasondenheizung vor Katalysator, Ansteuerung |
| 0x2A61 | DFES_DTCM.DFC_HSVEmin_C  -  Lambdasondenheizung vor Katalysator, Ansteuerung |
| 0x2A63 | DFES_DTCM.DFC_HSVEsig_C  -  Lambdasondenheizung vor Katalysator, Ansteuerung |
| 0x2A64 | DFES_DTCM.DFC_HSVmax_C  -  Lambdasondenheizung vor Katalysator, Funktion |
| 0x2A66 | DFES_DTCM.DFC_HSVnpl_C  -  Lambdasondenheizung vor Katalysator, Funktion |
| 0x2A67 | DFES_DTCM.DFC_HSVsig_C  -  Lambdasondenheizung vor Katalysator, Funktion |
| 0x2A6C | DFES_DTCM.DFC_ICLSUmax_C  -  DME, interner Fehler |
| 0x2A6D | DFES_DTCM.DFC_ICLSUmin_C  -  DME, interner Fehler |
| 0x2A6E | DFES_DTCM.DFC_ICLSUnpl_C  -  DME, interner Fehler |
| 0x2A6F | DFES_DTCM.DFC_ICLSUsig_C  -  DME, interner Fehler |
| 0x2A74 | DFES_DTCM.DFC_LASHmax_C  -  Lambdasonde nach Katalysator, Alterung |
| 0x2A75 | DFES_DTCM.DFC_LASHmin_C  -  Lambdasonde nach Katalysator, Alterung |
| 0x2A76 | DFES_DTCM.DFC_LASHnpl_C  -  Lambdasonde nach Katalysator, Alterung |
| 0x2A77 | DFES_DTCM.DFC_LASHsig_C  -  Lambdasonde nach Katalysator, Alterung |
| 0x2A7C | DFES_DTCM.DFC_LSHmax_C  -  Lambdasonde nach Katalysator, elektrisch |
| 0x2A7D | DFES_DTCM.DFC_LSHmin_C  -  Lambdasonde nach Katalysator, elektrisch |
| 0x2A7E | DFES_DTCM.DFC_LSHnpl_C  -  Lambdasonde nach Katalysator, elektrisch |
| 0x2A7F | DFES_DTCM.DFC_LSHsig_C  -  Lambdasonde nach Katalysator, elektrisch |
| 0x2A8B | DFES_DTCM.DFC_LSUIAsig_C  -  Lambdasonde vor Katalysator, Abgleichleitung |
| 0x2A90 | DFES_DTCM.DFC_LSUIPmax_C  -  Lambdasonde vor Katalysator, Pumpstromleitung |
| 0x2A92 | DFES_DTCM.DFC_LSUIPnpl_C  -  Lambdasonde vor Katalysator, Pumpstromleitung |
| 0x2A93 | DFES_DTCM.DFC_LSUIPsig_C  -  Lambdasonde vor Katalysator, Pumpstromleitung |
| 0x2A98 | DFES_DTCM.DFC_LSUKSmax_C  -  Lambdasonde vor Katalysator, Sondenleitungen |
| 0x2A99 | DFES_DTCM.DFC_LSUKSmin_C  -  Lambdasonde vor Katalysator, Sondenleitungen |
| 0x2AA3 | DFES_DTCM.DFC_LSUUNsig_C  -  Lambdasonde vor Katalysator, Nernstleitung |
| 0x2AAB | DFES_DTCM.DFC_LSUVMsig_C  -  Lambdasonde vor Katalysator, virtuelle Masse |
| 0x2AB4 | DFES_DTCM.DFC_LSVEmax_C  -  Lambdasonde vor Katalysator, elektrisch |
| 0x2AB8 | DFES_DTCM.DFC_LSVmax_C  -  Lambdasonde vor Katalysator, elektrisch |
| 0x2AC1 | DFES_DTCM.DFC_PLLSUmax_C  -  Lambdasonde vor Katalysator, Plausibilität |
| 0x2AC2 | DFES_DTCM.DFC_PLLSUmin_C  -  Lambdasonde vor Katalysator, Plausibilität |
| 0x2AC3 | DFES_DTCM.DFC_PLLSUnpl_C  -  Lambdasonde vor Katalysator, Plausibilität |
| 0x2AC4 | DFES_DTCM.DFC_PLLSUsig_C  -  Lambdasonde vor Katalysator, Plausibilität |
| 0x2ACB | DFES_DTCM.DFC_ULSUnpl_C  -  Lambdasonde vor Katalysator,  Anschluss |
| 0x2ACD | DFES_DTCM.DFC_DYLSHsig_C  -  Lambdasonde nach Katalysator, Dynamik im Schubbetrieb |
| 0x2AD2 | DFES_DTCM.DFC_DYLSHmax_C  -  Lambdasonde nach Kat(alysator), Dynamik im Schubbetrieb |
| 0x2AF8 | DFES_DTCM.DFC_BWFnpl_C  -  Fahrpedalmodul Bewegungserkennung |
| 0x2AF9 | DFES_DTCM.DFC_DDSSmax_C  -  Differenzdrucksensor Saugrohr, Signal |
| 0x2AFA | DFES_DTCM.DFC_DDSSmin_C  -  Differenzdrucksensor Saugrohr, Signal |
| 0x2AFC | DFES_DTCM.DFC_DDSSsig_C  -  Differenzdrucksensor Saugrohr, Signal |
| 0x2B01 | DFES_DTCM.DFC_DK1Pmax_C  -  Drosselklappenpotentiometer 1 |
| 0x2B02 | DFES_DTCM.DFC_DK1Pmin_C  -  Drosselklappenpotentiometer 1 |
| 0x2B03 | DFES_DTCM.DFC_DK1Pnpl_C  -  Drosselklappenpotentiometer 1 |
| 0x2B05 | DFES_DTCM.DFC_DK2Pmax_C  -  Drosselklappenpotentiometer 2 |
| 0x2B06 | DFES_DTCM.DFC_DK2Pmin_C  -  Drosselklappenpotentiometer 2 |
| 0x2B07 | DFES_DTCM.DFC_DK2Pnpl_C  -  Drosselklappenpotentiometer 2 |
| 0x2B0B | DFES_DTCM.DFC_DKnpl_C  -  Drosselklappenpotentiometer |
| 0x2B13 | DFES_DTCM.DFC_DKPUPnpl_C  -  Drosselklappenpotentiometer |
| 0x2B15 | DFES_DTCM.DFC_DPSRPLmax_C  -  Differenzdruck Saugrohr, Plausibilität |
| 0x2B16 | DFES_DTCM.DFC_DPSRPLmin_C  -  Differenzdruck Saugrohr, Plausibilität |
| 0x2B1D | DFES_DTCM.DFC_DVEEmax_C  -  Drosselklappensteller, Ansteuerung |
| 0x2B1E | DFES_DTCM.DFC_DVEEmin_C  -  Drosselklappensteller, Ansteuerung |
| 0x2B1F | DFES_DTCM.DFC_DVEEnpl_C  -  Drosselklappensteller, Ansteuerung |
| 0x2B20 | DFES_DTCM.DFC_DVEEsig_C  -  Drosselklappensteller, Ansteuerung |
| 0x2B21 | DFES_DTCM.DFC_DVEFmax_C  -  Drosselklappensteller, schliessende Federprüfung |
| 0x2B22 | DFES_DTCM.DFC_DVEFmin_C  -  Drosselklappensteller, schliessende Federprüfung |
| 0x2B25 | DFES_DTCM.DFC_DVEFOmax_C  -  Drosselklappensteller, öffnende Federprüfung |
| 0x2B26 | DFES_DTCM.DFC_DVEFOmin_C  -  Drosselklappensteller, öffnende Federprüfung |
| 0x2B2B | DFES_DTCM.DFC_DVELnpl_C  -  Drosselklappensteller, Positionsüberwachung |
| 0x2B2F | DFES_DTCM.DFC_DVENnpl_C  -  Drosselklappensteller, Notluftpunkt |
| 0x2B31 | DFES_DTCM.DFC_DVERmax_C  -  Drosselklappensteller, Regelbereich |
| 0x2B32 | DFES_DTCM.DFC_DVERmin_C  -  Drosselklappensteller, Regelbereich |
| 0x2B37 | DFES_DTCM.DFC_DVETnpl_C  -  Drosselklappensteller |
| 0x2B39 | DFES_DTCM.DFC_DVEUBmax_C  -  Drosselklappensteller, Abbruch Adaption wegen Umweltbedingungen |
| 0x2B3A | DFES_DTCM.DFC_DVEUBmin_C  -  Drosselklappensteller, Abbruch Adaption wegen Umweltbedingungen |
| 0x2B3F | DFES_DTCM.DFC_DVEUnpl_C  -  Drosselklappensteller |
| 0x2B43 | DFES_DTCM.DFC_DVEUWnpl_C  -  Drosselklappensteller |
| 0x2B47 | DFES_DTCM.DFC_DVEVnpl_C  -  Drosselklappensteller, Verstärkerabgleich |
| 0x2B49 | DFES_DTCM.DFC_FP1Pmax_C  -  Fahrpedalmodul, Pedalwertgeber Signal 1 |
| 0x2B4A | DFES_DTCM.DFC_FP1Pmin_C  -  Fahrpedalmodul, Pedalwertgeber Signal 1 |
| 0x2B4B | DFES_DTCM.DFC_FP1Pnpl_C  -  Fahrpedalmodul, Pedalwertgeber Signal 1 |
| 0x2B4C | DFES_DTCM.DFC_FP2Pmax_C  -  Fahrpedalmodul, Pedalwertgeber Signal 2 |
| 0x2B4D | DFES_DTCM.DFC_FP2Pmin_C  -  Fahrpedalmodul, Pedalwertgeber Signal 2 |
| 0x2B4E | DFES_DTCM.DFC_FPPnpl_C  -  Fahrpedalmodul, Pedalwertgeber |
| 0x2B4F | DFES_DTCM.DFC_HFMEmax_C  -  Luftmassenmesser, Signal |
| 0x2B50 | DFES_DTCM.DFC_HFMEmin_C  -  Luftmassenmesser, Signal |
| 0x2B51 | DFES_DTCM.DFC_HFMEsig_C  -  Luftmassenmesser, Signal |
| 0x2B55 | DFES_DTCM.DFC_HFMPLmax_C  -  Luftmassenmesser, Plausibilität |
| 0x2B56 | DFES_DTCM.DFC_HFMPLmin_C  -  Luftmassenmesser, Plausibilität |
| 0x2B57 | DFES_DTCM.DFC_HFMPLnpl_C  -  Luftmassenmesser, Plausibilität |
| 0x2B58 | DFES_DTCM.DFC_HFMPLsig_C  -  Luftmassenmesser, Plausibilität |
| 0x2B59 | DFES_DTCM.DFC_HFMRmax_C  -  Luftmassenmesser, Plausibilität |
| 0x2B5A | DFES_DTCM.DFC_HFMRmin_C  -  Luftmassenmesser, Plausibilität |
| 0x2B5B | DFES_DTCM.DFC_HFMRnpl_C  -  Luftmassenmesser, Plausibilität |
| 0x2B5C | DFES_DTCM.DFC_HFMRsig_C  -  Luftmassenmesser, Plausibilität |
| 0x2B5E | DFES_DTCM.DFC_KHFMEmax_C  -  Luftmassenmesser, Korrektursignal |
| 0x2B5F | DFES_DTCM.DFC_KHFMEmin_C  -  Luftmassenmesser, Korrektursignal |
| 0x2B64 | DFES_DTCM.DFC_LZSRnpl_C  -  Saugrohr, Falschluft |
| 0x2B67 | DFES_DTCM.DFC_MSLAMmax_C  -  Luftmassenstrom, Plausibilität |
| 0x2B68 | DFES_DTCM.DFC_MSLAMmin_C  -  Luftmassenstrom, Plausibilität |
| 0x2B69 | DFES_DTCM.DFC_PDDSSmax_C  -  Differenzdrucksensor Saugrohr, Plausibilität |
| 0x2B6A | DFES_DTCM.DFC_PDDSSmin_C  -  Differenzdrucksensor Saugrohr, Plausibilität |
| 0x2B6B | DFES_DTCM.DFC_PDDSSnpl_C  -  Differenzdrucksensor Saugrohr, Plausibilität |
| 0x2B7A | DFES_DTCM.DFC_UFMSACnpl_C  -  Luftmassenstromabgleich |
| 0x2BC0 | DFES_DTCM.DFC_AdcIADC0Cal_C  -  DME, interner Fehler |
| 0x2BC1 | DFES_DTCM.DFC_AdcIADC0Conv_C  -  DME, interner Fehler |
| 0x2BC2 | DFES_DTCM.DFC_AdcIADC1Cal_C  -  DME, interner Fehler |
| 0x2BC3 | DFES_DTCM.DFC_AdcIADC1Conv_C  -  DME, interner Fehler |
| 0x2BC4 | DFES_DTCM.DFC_Cj945SpiCom1_C  -  DME, interner Fehler:  Treiber CJ945 |
| 0x2BC5 | DFES_DTCM.DFC_Cy320SpiCom_C  -  DME, interner Fehler: Sensor CY320 |
| 0x2BC6 | DFES_DTCM.DFC_EEPEraseErr_C  -  DME, interner Fehler |
| 0x2BC7 | DFES_DTCM.DFC_EEPRdErr_C  -  DME, interner Fehler |
| 0x2BC8 | DFES_DTCM.DFC_EEPWrErr_C  -  DME, interner Fehler |
| 0x2BCB | DFES_DTCM.DFC_MDBmax_C  -  Überwachung Motordrehmoment-Begrenzung |
| 0x2BCC | DFES_DTCM.DFC_MoCComctErrMM_C  -  DME, interner Fehler |
| 0x2BCD | DFES_DTCM.DFC_MonUMaxSupply1_C  -  DME, interner Fehler: Treiber CJ945 |
| 0x2BCE | DFES_DTCM.DFC_MonUMinSupply1_C  -  DME, interner Fehler: Treiber CJ945 |
| 0x2BCF | DFES_DTCM.DFC_OCWDAActv_C  -  DME, interner Fehler: Watchdog-Ausgang |
| 0x2BD0 | DFES_DTCM.DFC_OCWDACom_C  -  DME, interner Fehler: Watchdog-Ausgang |
| 0x2BD1 | DFES_DTCM.DFC_OCWDAOvrVltg_C  -  DME, interner Fehler: Watchdog-Ausgang |
| 0x2BD2 | DFES_DTCM.DFC_SSpMon1_C  -  Überwachung Versorgungsspannung 1, Sensor CY320 |
| 0x2BD3 | DFES_DTCM.DFC_SSpMon2_C  -  Überwachung Versorgungsspannung 2, Sensor CY320 |
| 0x2BD4 | DFES_DTCM.DFC_SSpMon3_C  -  Überwachung Versorgungsspannung 3, Sensor CY320 |
| 0x2BD5 | DFES_DTCM.DFC_SWReset_0_C  -  DME, interner Fehler  |
| 0x2BD6 | DFES_DTCM.DFC_SWReset_1_C  -  DME, interner Fehler  |
| 0x2BD7 | DFES_DTCM.DFC_SWReset_2_C  -  DME, interner Fehler  |
| 0x2BD9 | DFES_DTCM.DFC_UFMVnpl_C  -  DME, interner Fehler  |
| 0x2BDA | DFES_DTCM.DFC_UFNCnpl_C  -  DME, interner Fehler  |
| 0x2BDB | DFES_DTCM.DFC_SSpMon1_C  -  DME, interner Fehler  |
| 0x2BDC | DFES_DTCM.DFC_UFRKCnpl_C  -  DME, interner Fehler |
| 0x2BDD | DFES_DTCM.DFC_UFSGAmax_C  -  DME, interner Fehler |
| 0x2BDE | DFES_DTCM.DFC_UFSGAmin_C  -  DME, interner Fehler |
| 0x2BDF | DFES_DTCM.DFC_UFSGAsig_C  -  DME, interner Fehler  |
| 0x2BE0 | DFES_DTCM.DFC_UFSGBmax_C  -  DME, interner Fehler  |
| 0x2BE1 | DFES_DTCM.DFC_UFSGBmin_C  -  DME, interner Fehler |
| 0x2BE2 | DFES_DTCM.DFC_UFSGBsig_C  -  DME, interner Fehler  |
| 0x2BE3 | DFES_DTCM.DFC_UFSGCmax_C  -  DME, interner Fehler |
| 0x2BE4 | DFES_DTCM.DFC_UFSGCmin_C  -  DME, interner Fehler |
| 0x2BE5 | DFES_DTCM.DFC_UFSGCnpl_C  -  DME, interner Fehler |
| 0x2BE6 | DFES_DTCM.DFC_UFSGDmax_C  -  DME, interner Fehler |
| 0x2BE8 | DFES_DTCM.DFC_UFSPSCnpl_C  -  DME, interner Fehler |
| 0x2BE9 | DFES_DTCM.DFC_WDAmax_C  -  DME, interner Fehler  |
| 0x2BEA | DFES_DTCM.DFC_WDAmin_C  -  DME, interner Fehler |
| 0x2BEB | DFES_DTCM.DFC_WDAsig_C  -  DME, interner Fehler |
| 0x2C8D | DFES_DTCM.DFC_PMBATmin_C  -  Powermanagement, Batterieüberwachung |
| 0x2C8E | DFES_DTCM.DFC_PMBATnpl_C  -  Powermanagement, Batterieüberwachung |
| 0x2C90 | DFES_DTCM.DFC_PMBNmax_C  -  Powermanagement, Bordnetzüberwachung |
| 0x2C91 | DFES_DTCM.DFC_PMBNmin_C  -  Powermanagement, Bordnetzüberwachung |
| 0x2C93 | DFES_DTCM.DFC_PMBNsig_C  -  Powermanagement, Bordnetzüberwachung |
| 0x2C96 | DFES_DTCM.DFC_PMRUHVnpl_C  -  Powermanagement, Ruhestromverletzung |
| 0x2C98 | DFES_DTCM.DFC_UBmax_C  -  Bordnetzspannung |
| 0x2C99 | DFES_DTCM.DFC_UBmin_C  -  Bordnetzspannung |
| 0x2C9A | DFES_DTCM.DFC_UBnpl_C  -  Bordnetzspannung |
| 0x2C9C | DFES_DTCM.DFC_UBRmax_C  -  Bordnetzspannung, DME-Hauptrelais |
| 0x2C9D | DFES_DTCM.DFC_UBRmin_C  -  Bordnetzspannung, DME-Hauptrelais |
| 0x2C9E | DFES_DTCM.DFC_UBRnpl_C  -  Bordnetzspannung, DME-Hauptrelais |
| 0x2D53 | DFES_DTCM.DFC_DKRSA_C  -  Klopfregelung, Fehlerprüfung |
| 0x2D54 | DFES_DTCM.DFC_EV1max_C  -  Einspritzventil Zylinder 1, Ansteuerung |
| 0x2D55 | DFES_DTCM.DFC_EV1min_C  -  Einspritzventil Zylinder 1, Ansteuerung |
| 0x2D57 | DFES_DTCM.DFC_EV1sig_C  -  Einspritzventil Zylinder 1, Ansteuerung |
| 0x2D58 | DFES_DTCM.DFC_EV2max_C  -  Einspritzventil Zylinder 3, Ansteuerung |
| 0x2D59 | DFES_DTCM.DFC_EV2min_C  -  Einspritzventil Zylinder 3, Ansteuerung |
| 0x2D5A | DFES_DTCM.DFC_EV2sig_C  -  Einspritzventil Zylinder 3, Ansteuerung |
| 0x2D5C | DFES_DTCM.DFC_EV3max_C  -  Einspritzventil Zylinder 4, Ansteuerung |
| 0x2D5D | DFES_DTCM.DFC_EV3min_C  -  Einspritzventil Zylinder 4, Ansteuerung |
| 0x2D5F | DFES_DTCM.DFC_EV3sig_C  -  Einspritzventil Zylinder 4, Ansteuerung |
| 0x2D60 | DFES_DTCM.DFC_EV4max_C  -  Einspritzventil Zylinder 2, Ansteuerung |
| 0x2D61 | DFES_DTCM.DFC_EV4min_C  -  Einspritzventil Zylinder 2, Ansteuerung |
| 0x2D63 | DFES_DTCM.DFC_EV4sig_C  -  Einspritzventil Zylinder 2, Ansteuerung |
| 0x2D8B | DFES_DTCM.DFC_KnDetSens1PortAmax_C  -  Klopfsensor, elektrisch |
| 0x2D8C | DFES_DTCM.DFC_KnDetSens1PortAmin_C  -  Klopfsensor, elektrisch |
| 0x2D8D | DFES_DTCM.DFC_KnDetSens1PortBmax_C  -  Klopfsensor, elektrisch |
| 0x2D8E | DFES_DTCM.DFC_KnDetSens1PortBmin_C  -  Klopfsensor, elektrisch |
| 0x2D9B | DFES_DTCM.DFC_KS1max_C  -  Klopfsensor, Signal |
| 0x2D9C | DFES_DTCM.DFC_KS1min_C  -  Klopfsensor, Signal |
| 0x2E1A | DFES_DTCM.DFC_BSDnpl_C  -  Bitserielle Datenschnittstelle, Signal |
| 0x2E1B | DFES_DTCM.DFC_BSDsig_C  -  Bitserielle Datenschnittstelle, Signal |
| 0x2E1C | DFES_DTCM.DFC_GENCOMmax_C  -  BSD-Botschaft vom Generator fehlt |
| 0x2E20 | DFES_DTCM.DFC_GENELBmax_C  -  Generator |
| 0x2E24 | DFES_DTCM.DFC_GENELmax_C  -  Generator |
| 0x2E28 | DFES_DTCM.DFC_GENHTBmax_C  -  Generator |
| 0x2E2C | DFES_DTCM.DFC_GENHTmax_C  -  Generator |
| 0x2E30 | DFES_DTCM.DFC_GENmax_C  -  Generator |
| 0x2E31 | DFES_DTCM.DFC_GENmin_C  -  Generator |
| 0x2E32 | DFES_DTCM.DFC_GENnpl_C  -  Generator |
| 0x2E33 | DFES_DTCM.DFC_GENsig_C  -  Generator |
| 0x2E34 | DFES_DTCM.DFC_GENMEmax_C  -  Generator |
| 0x2E38 | DFES_DTCM.DFC_GENREGmax_C  -  Generator |
| 0x2E3C | DFES_DTCM.DFC_GENUPLmax_C  -  Generator |
| 0x2E40 | DFES_DTCM.DFC_IBSAmax_C  -  Intelligenter Batteriesensor, Eigendiagnose 2 |
| 0x2E42 | DFES_DTCM.DFC_IBSAnpl_C  -  Intelligenter Batteriesensor, Eigendiagnose 2 |
| 0x2E43 | DFES_DTCM.DFC_IBSAsig_C  -  Intelligenter Batteriesensor, Eigendiagnose 2 |
| 0x2E44 | DFES_DTCM.DFC_IBSKmax_C  -  Intelligenter Batteriesensor, Signalübertragung |
| 0x2E46 | DFES_DTCM.DFC_IBSKnpl_C  -  Intelligenter Batteriesensor, Signalübertragung |
| 0x2E47 | DFES_DTCM.DFC_IBSKsig_C  -  Intelligenter Batteriesensor, Signalübertragung |
| 0x2E48 | DFES_DTCM.DFC_IBSPmax_C  -  Intelligenter Batteriesensor, Eigendiagnose 1 |
| 0x2E4A | DFES_DTCM.DFC_IBSPnpl_C  -  Intelligenter Batteriesensor, Eigendiagnose 1 |
| 0x2E4B | DFES_DTCM.DFC_IBSPsig_C  -  Intelligenter Batteriesensor, Eigendiagnose 1 |
| 0x2E4F | DFES_DTCM.DFC_BSDD0sig_C  -  BSD-Botschaft vom intelligenten Batteriesensor fehlt |
| 0x2E67 | DFES_DTCM.DFC_BSDD6sig_C  -  BSD-Botschaft vom Generator fehlt |
| 0x2EE0 | DFES_DTCM.DFC_DSACmax_C  -  Kältemitteldrucksensor |
| 0x2EE1 | DFES_DTCM.DFC_DSACmin_C  -  Kältemitteldrucksensor |
| 0x2EE2 | DFES_DTCM.DFC_ETSmax_C  -  Kennfeldthermostat, Ansteuerung |
| 0x2EE3 | DFES_DTCM.DFC_ETSmin_C  -  Kennfeldthermostat, Ansteuerung |
| 0x2EE5 | DFES_DTCM.DFC_ETSsig_C  -  Kennfeldthermostat, Ansteuerung |
| 0x2EE6 | DFES_DTCM.DFC_LUES1Emax_C  -  Elektrolüfter, Ansteuerung Leistungsstufe 1 |
| 0x2EE7 | DFES_DTCM.DFC_LUES1Emin_C  -  Elektrolüfter, Ansteuerung Leistungsstufe 1 |
| 0x2EE8 | DFES_DTCM.DFC_LUES1Esig_C  -  Elektrolüfter, Ansteuerung Leistungsstufe 1 |
| 0x2EEE | DFES_DTCM.DFC_TACSmin_C  -  Ansauglufttemperatur bei Kaltstart |
| 0x2EF1 | DFES_DTCM.DFC_TAEmax_C  -  Ansauglufttemperatursensor, Signal |
| 0x2EF2 | DFES_DTCM.DFC_TAEmin_C  -  Ansauglufttemperatursensor, Signal |
| 0x2EF9 | DFES_DTCM.DFC_TARmax_C  -  Ansauglufttemperatursensor, Plausibilität |
| 0x2EFB | DFES_DTCM.DFC_TARnpl_C  -  Ansauglufttemperatursensor, Plausibilität |
| 0x2F07 | DFES_DTCM.DFC_THMnpl_C  -  Kennfeldthermostat, Mechanik |
| 0x2F09 | DFES_DTCM.DFC_TKAEmax_C  -  Temperatursensor Kühleraustritt, Signal |
| 0x2F0A | DFES_DTCM.DFC_TKAEmin_C  -  Temperatursensor Kühleraustritt, Signal |
| 0x2F15 | DFES_DTCM.DFC_TMCSmax_C  -  Kühlmitteltemperatursensor, Plausibilität |
| 0x2F16 | DFES_DTCM.DFC_TMCSmin_C  -  Kühlmitteltemperatursensor, Plausibilität |
| 0x2F19 | DFES_DTCM.DFC_TMEmax_C  -  Kühlmitteltemperatursensor, Signal |
| 0x2F1A | DFES_DTCM.DFC_TMEmin_C  -  Kühlmitteltemperatursensor, Signal |
| 0x2F21 | DFES_DTCM.DFC_TMPmax_C  -  Motortemperatur, Plausibilität |
| 0x2F22 | DFES_DTCM.DFC_TMPmin_C  -  Motortemperatur, Plausibilität |
| 0x2F23 | DFES_DTCM.DFC_TMPnpl_C  -  Motortemperatur, Plausibilität |
| 0x2F24 | DFES_DTCM.DFC_TMPsig_C  -  Motortemperatur, Plausibilität |
| 0x2F25 | DFES_DTCM.DFC_TUMEmax_C  -  Umgebungstemperatursensor, Signal |
| 0x2F26 | DFES_DTCM.DFC_TUMEmin_C  -  Umgebungstemperatursensor, Signal |
| 0x2F28 | DFES_DTCM.DFC_TUMEsig_C  -  Umgebungstemperatursensor, Signal |
| 0x2F2F | DFES_DTCM.DFC_TUMPnpl_C  -  Umgebungstemperatursensor, Plausibilität |
| 0x2F30 | DFES_DTCM.DFC_TUMPsig_C  -  Umgebungstemperatursensor, Plausibilität |
| 0x2F38 | DFES_DTCM.DFC_DWAPUEmax_C  -  Schaltbare Wasserpumpe, Ansteuerung |
| 0x2F39 | DFES_DTCM.DFC_DWAPUEmin_C  -  Schaltbare Wasserpumpe, Ansteuerung |
| 0x2F3A | DFES_DTCM.DFC_DWAPUEsig_C  -  Schaltbare Wasserpumpe, Ansteuerung |
| 0x2F3B | DFES_DTCM.DFC_CWPPLAUS_C  -  Reibradaktuator, Plausibilität |
| 0x2F3C | DFES_DTCM.DFC_LUES2Emax_C  -  Elektrolüfter, Ansteuerung Leistungsstufe 2 |
| 0x2F3D | DFES_DTCM.DFC_LUES2Emin_C  -  Elektrolüfter, Ansteuerung Leistungsstufe 2 |
| 0x2F3F | DFES_DTCM.DFC_LUES2Esig_C  -  Elektrolüfter, Ansteuerung Leistungsstufe 2 |
| 0x2F40 | DFES_DTCM.DFC_OELHmax_C  -  Motorentlüftungsheizung, Ansteuerung |
| 0x2F41 | DFES_DTCM.DFC_OELHmin_C  -  Motorentlüftungsheizung, Ansteuerung |
| 0x2F42 | DFES_DTCM.DFC_OELHsig_C  -  Motorentlüftungsheizung, Ansteuerung |
| 0x2F8A | DFES_DTCM.DFC_CNCLKDmax_C  -  Motorabstellzeit |
| 0x2F8B | DFES_DTCM.DFC_CNCLKDmin_C  -  Motorabstellzeit |
| 0x2F8C | DFES_DTCM.DFC_CNCLKEsig_C  -  Motorabstellzeit |
| 0x2F8E | DFES_DTCM.DFC_CNCLKHmax_C  -  Motorabstellzeit, Plausibilität |
| 0x2F8F | DFES_DTCM.DFC_CNCLKLmin_C  -  Motorabstellzeit, Plausibilität |
| 0x2F92 | DFES_DTCM.DFC_CNCLKTmax_C  -  Motorabstellzeit |
| 0x2F93 | DFES_DTCM.DFC_CNCLKTmin_C  -  Motorabstellzeit |
| 0x2FAA | DFES_DTCM.DFC_BREMSnpl_C  -  Bremslichtschalter |
| 0x2FAC | DFES_DTCM.DFC_CUHRnpl_C  -  Motorabstellzeit, Plausibilität |
| 0x2FAD | DFES_DTCM.DFC_CUHRsig_C  -  Motorabstellzeit, Plausibilität |
| 0x2FB7 | DFES_DTCM.DFC_FETRWEmin_C  -  Energiesparmodus |
| 0x2FC1 | DFES_DTCM.DFC_KUPPLsig_C  -  Kupplungsschalter, Signal |
| 0x2FC2 | DFES_DTCM.DFC_PBKVEmax_C  -  Drucksensor, Bremskraftverstärker |
| 0x2FC3 | DFES_DTCM.DFC_PBKVEmin_C  -  Drucksensor, Bremskraftverstärker |
| 0x2FC4 | DFES_DTCM.DFC_POELSnpl_C  -  Öldruckschalter, Plausibilität |
| 0x2FC5 | DFES_DTCM.DFC_PUEmax_C  -  DME, interner Fehler |
| 0x2FC6 | DFES_DTCM.DFC_PUEmin_C  -  DME, interner Fehler |
| 0x2FCD | DFES_DTCM.DFC_PURmax_C  -  Umgebungsdrucksensor, Plausibilität |
| 0x2FCE | DFES_DTCM.DFC_PURmin_C  -  Umgebungsdrucksensor, Plausibilität |
| 0x2FCF | DFES_DTCM.DFC_PURnpl_C  -  Umgebungsdrucksensor, Plausibilität |
| 0x2FD0 | DFES_DTCM.DFC_PURsig_C  -  Umgebungsdrucksensor, Plausibilität |
| 0x2FD6 | DFES_DTCM.DFC_SIA_E1min_C  -  EWS-Manipulationsschutz |
| 0x2FD7 | DFES_DTCM.DFC_SIA_E1npl_C  -  EWS-Manipulationsschutz |
| 0x2FD9 | DFES_DTCM.DFC_SIA_E2max_C  -  Schnittstelle EWS-DME |
| 0x2FDA | DFES_DTCM.DFC_SIA_E2min_C  -  Schnittstelle EWS-DME |
| 0x2FDB | DFES_DTCM.DFC_SIA_E2npl_C  -  Schnittstelle EWS-DME |
| 0x2FDC | DFES_DTCM.DFC_SIA_E2sig_C  -  Schnittstelle EWS-DME |
| 0x2FDD | DFES_DTCM.DFC_SIA_E3max_C  -  DME, interner Fehler |
| 0x2FDE | DFES_DTCM.DFC_SIA_E3min_C  -  DME, interner Fehler |
| 0x2FDF | DFES_DTCM.DFC_SIA_E3npl_C  -  DME, interner Fehler |
| 0x2FE0 | DFES_DTCM.DFC_SIA_E3sig_C  -  DME, interner Fehler |
| 0x2FE2 | DFES_DTCM.DFC_SIA_E4min_C  -  Botschaft EWS-DME fehlerhaft |
| 0x2FE4 | DFES_DTCM.DFC_SIA_E4sig_C  -  Botschaft EWS-DME fehlerhaft |
| 0x2FE5 | DFES_DTCM.DFC_STAEmax_C  -  Starter, Ansteuerung |
| 0x2FE6 | DFES_DTCM.DFC_STAEmin_C  -  Starter, Ansteuerung |
| 0x2FE7 | DFES_DTCM.DFC_STAEsig_C  -  Starter, Ansteuerung |
| 0x2FEA | DFES_DTCM.DFC_SWEmax_C  -  Schlechtwegstreckenerkennung |
| 0x2FED | DFES_DTCM.DFC_SWEsig_C  -  Schlechtwegstreckenerkennung |
| 0x2FF2 | DFES_DTCM.DFC_TSGmax_C  -  DME, interner Fehler |
| 0x2FF3 | DFES_DTCM.DFC_TSGmin_C  -  DME, interner Fehler |
| 0x2FF4 | DFES_DTCM.DFC_VATmax_C  -  Fahrzeuggeschwindigkeit, Plausibilität |
| 0x2FF5 | DFES_DTCM.DFC_VATnpl_C  -  Fahrzeuggeschwindigkeit, Plausibilität |
| 0x2FF6 | DFES_DTCM.DFC_VFZEmax_C  -  Fahrzeuggeschwindigkeit, Signal |
| 0x2FF7 | DFES_DTCM.DFC_VFZEmin_C  -  Fahrzeuggeschwindigkeit, Signal |
| 0x2FF9 | DFES_DTCM.DFC_VFZEsig_C  -  Fahrzeuggeschwindigkeit, Signal |
| 0x2FFE | DFES_DTCM.DFC_VFZNPmax_C  -  Fahrzeuggeschwindigkeit, Plausibilität |
| 0x2FFF | DFES_DTCM.DFC_VFZNPmin_C  -  Fahrzeuggeschwindigkeit, Plausibilität |
| 0x3000 | DFES_DTCM.DFC_VFZNPnpl_C  -  Fahrzeuggeschwindigkeit, Plausibilität |
| 0x3008 | DFES_DTCM.DFC_PBKVRmax_C  -  Bremsunterdrucksensor |
| 0x3009 | DFES_DTCM.DFC_PBKVRmin_C  -  Bremsunterdrucksensor |
| 0x300A | DFES_DTCM.DFC_PBKVRnpl_C  -  Bremsunterdrucksensor |
| 0x3013 | DFES_DTCM.DFC_PBREMSUmax_C  -  Bremsunterdrucksensor |
| 0x3014 | DFES_DTCM.DFC_PBREMSUmin_C  -  Bremsunterdrucksensor |
| 0x3015 | DFES_DTCM.DFC_PBREMSUsig_C  -  Bremsunterdrucksensor |
| 0x3016 | DFES_DTCM.DFC_PBREMSUnpl_C  -  Bremsunterdrucksensor |
| 0x301C | DFES_DTCM.DFC_STAMSAmax  -  Freigabeleitung, MSA: Ansteuerung |
| 0x301D | DFES_DTCM.DFC_STAMSAmin  -  Freigabeleitung, MSA: Ansteuerung |
| 0x301E | DFES_DTCM.DFC_STAMSAsig  -  Freigabeleitung, MSA: Ansteuerung |
| 0x3020 | DFES_DTCM.DFC_MSALTGmax_C  -  Freigabeleitung, MSA: Ansteuerung |
| 0x3021 | DFES_DTCM.DFC_MSALTGmin_C  -  Freigabeleitung, MSA: Ansteuerung |
| 0x3022 | DFES_DTCM.DFC_NGANGmax_C  -  Nullgangsensor, Signal |
| 0x3023 | DFES_DTCM.DFC_NGANGmin_C  -  Nullgangsensor, Signal |
| 0x3024 | DFES_DTCM.DFC_NGANGsig_C  -  Nullgangsensor, Signal |
| 0x3025 | DFES_DTCM.DFC_NGANGnpl_C  -  Nullgangsensor, Signal |
| 0x3026 | DFES_DTCM.DFC_NGLERNsig_C  -  Nullgangsensor, Lernen |
| 0x3028 | DFES_DTCM.DFC_GbxNPosRNPosSRCMax_C  -  Nullgangsensor, Signal |
| 0x3029 | DFES_DTCM.DFC_GbxNPosRNPosSRCMin_C  -  Nullgangsensor, Signal |
| 0x302E | DFES_DTCM.DFC_GbxNPosShCirBatVltg_C  -  Nullgangsensor, Signal |
| 0x302F | DFES_DTCM.DFC_GbxNPosShCirGnd_C  -  Nullgangsensor, Signal |
| 0x3031 | DFES_DTCM.DFC_GbxNPosPwmPerSRC_C  -  Nullgangsensor, Signal |
| 0x3032 | DFES_DTCM.DFC_GbxNPosPlaus_C  -  Nullgangsensor, Signal |
| 0x3036 | DFES_DTCM.DFC_EMSInpl_C  -  DME, Manipulationsschutz |
| 0x303E | DFES_DTCM.DFC_CODnpl_C  -  Kodierung, fehlt |
| 0x3043 | DFES_DTCM.DFC_DPLKUPPnpl_C  -  Kupplungsschalter 10% |
| 0x3091 | DFES_DTCM.DFC_CANAsig_C  -  PT-CAN Kommunikationsfehler |
| 0x3094 | DFES_DTCM.DFC_CDSCmin_C  -  CAN-Botschaft DSC  |
| 0x3095 | DFES_DTCM.DFC_CDSCnpl_C  -  CAN-Botschaft DSC  |
| 0x3096 | DFES_DTCM.DFC_CDSCsig_C  -  CAN-Botschaft DSC fehlt |
| 0x3097 | DFES_DTCM.DFC_CEGSmin_C  -  CAN-Botschaft EGS  |
| 0x3098 | DFES_DTCM.DFC_CEGSnpl_C  -  CAN-Botschaft EGS  |
| 0x3099 | DFES_DTCM.DFC_CEGSsig_C  -  CAN-Botschaft EGS fehlt |
| 0x309D | DFES_DTCM.DFC_CIHKAsig_C  -  CAN-Botschaft IHKA fehlt |
| 0x309F | DFES_DTCM.DFC_CINSmin_C  -  CAN-Botschaft KOMBI |
| 0x30A0 | DFES_DTCM.DFC_CINSnpl_C  -  CAN-Botschaft KOMBI |
| 0x30A1 | DFES_DTCM.DFC_CINSsig_C  -  CAN-Botschaft KOMBI fehlt |
| 0x30A4 | DFES_DTCM.DFC_CSZLmin_C  -  CAN-Botschaft SZL |
| 0x30A5 | DFES_DTCM.DFC_CSZLnpl_C  -  CAN-Botschaft SZL |
| 0x30A6 | DFES_DTCM.DFC_CSZLsig_C  -  CAN-Botschaft SZL fehlt |
| 0x30A7 | DFES_DTCM.DFC_X130npl_C  -  Botschaft (Klemmenstatus, 130) |
| 0x30A8 | DFES_DTCM.DFC_X130sig_C  -  Botschaft (Klemmenstatus, 130) fehlt |
| 0x30A9 | DFES_DTCM.DFC_X135sig_C  -  Botschaft (Status Crashabschaltung EKP, 135) fehlt |
| 0x30AA | DFES_DTCM.DFC_X195sig_C  -  Botschaft (Bedienung MSA, 195) fehlt |
| 0x30AB | DFES_DTCM.DFC_X21Asig_C  -  Botschaft (Lampenzustand, 21A) fehlt |
| 0x30AC | DFES_DTCM.DFC_X2E4sig_C  -  Botschaft (Status Anhänger, 2E4) fehlt |
| 0x30AD | DFES_DTCM.DFC_X2F8sig_C  -  Botschaft (Uhrzeit/ Datum, 2F8) fehlt |
| 0x30AE | DFES_DTCM.DFC_X2FCsig_C  -  Botschaft (Status ZV Klappen, 2FC) fehlt |
| 0x30AF | DFES_DTCM.DFC_X315npl_C  -  Botschaft (Fahrzeugmodus, 315) |
| 0x30B0 | DFES_DTCM.DFC_X315sig_C  -  Botschaft (Fahrzeugmodus, 315) fehlt |
| 0x30B2 | DFES_DTCM.DFC_X3B0sig_C  -  Botschaft (Status Rückwärtsgang, 3B0) fehlt |
| 0x30B4 | DFES_DTCM.DFC_X3B5sig_C  -  Botschaft (Status Wasserventil,  3B5) fehlt |
| 0x30B5 | DFES_DTCM.DFC_X580sig_C  -  Botschaft (Verbraucherstatus, 580) fehlt |
| 0x30B9 | DFES_DTCM.DFC_XC4sig_C  -  Botschaft (Lenkradwinkel, C4) fehlt |
| 0x30BA | DFES_DTCM.DFC_X1D2sig_C  -  Botschaft (Sportmodus EGS, 1D2) fehlt |
| 0x30BB | DFES_DTCM.DFC_X5E0sig_C  -  Botschaft (Diagnosestatus OBD-Sensor, 5E0) fehlt |
| 0x30C0 | DFES_DTCM.DFC_X2F1npl_C  -  Botschaft (Fahrererkennung, 2F1) |
| 0x30C1 | DFES_DTCM.DFC_X2F1sig_C  -  Botschaft (Fahrererkennung, 2F1) fehlt |
| 0x31BE | DFES_DTCM.DFC_X365sig_C  -  Botschaft (Klemmenanforderung, 365) fehlt |
| 0xCD87 | DFES_DTCM.DFC_CANAsig_C  -  PT-CAN Kommunikationsfehler |
| 0xFFFF | unbekannter Fehlerort |

### FARTTEXTEINDIVIDUELL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x0000 | kein passendes Fehlersymptom |
| 0x1000 | Abbruch wegen Stromschwankungen bei Feinleckprüfung |
| 0x1001 | Adernschluss oder Lambdasonde vergiftet |
| 0x1002 | AD-Wandler defekt |
| 0x1003 | AD-Wandler, keine AD-Wandlung möglich |
| 0x1004 | AD-Wandler, Zeit für Selbstkalibrierung überschritten |
| 0x1005 | Aliveprüfung fehlerhaft |
| 0x1006 | Anforderung Lambdaschnelltest über Tester fehlerhaft |
| 0x1007 | Ansauglufttemperatur zu hoch |
| 0x1008 | Ansauglufttemperatur zu niedrig |
| 0x1009 | Anschlagadaptionen ungültig |
| 0x100A | Ansteuerung Valvetronic Relais fehlerhaft |
| 0x100C | Batterieloser Betrieb |
| 0x100D | Bereichsverletzung nach oben |
| 0x100E | Bereichsverletzung nach unten |
| 0x1010 | CAN-Botschaft unplausibel |
| 0x1011 | CAN-Bus Off oder CAN-Bus deffekt |
| 0x1012 | CAN-Uhrzeit unplausibel |
| 0x1013 | CAS-Bus HW-Fehler |
| 0x1014 | Drehrichtung unplausibel |
| 0x1015 | Drehzahl zu hoch |
| 0x1016 | Drehzahl zu niedrig |
| 0x1017 | Drosselklappensteller klemmt anhaltend |
| 0x1018 | Drosselklappensteller klemmt kurzfristig |
| 0x101D | Einlassnockenwelle beim Start nicht in Verriegelungsposition |
| 0x101E | Elektrischer Fehler KS (Wackelkontakt) oder KS locker |
| 0x101F | E-Motor: Strom und Temperatur zu hoch |
| 0x1020 | Empfangsfehler CAN-Bus |
| 0x1021 | Empfangsfehler der CAS-Schnittstelle, CRC-Fehler |
| 0x1022 | Empfangsfehler der CAS-Schnittstelle, Frame-Fehler |
| 0x1023 | Endstufe: Strom und Temperatur zu hoch |
| 0x1024 | Erweiterte Kommunikation gestört |
| 0x1025 | EWS-Daten, Checksummenfehler |
| 0x1026 | EWS-Daten, kein freier Secret Key verfügbar |
| 0x1027 | EWS-Daten, Schreibfehler FSC |
| 0x1028 | EWS-Daten, Schreibfehler Secret Key |
| 0x1029 | Exzenterwelle fährt nicht auf Vollhubposition |
| 0x102A | Feder öffnet nicht aus Notluftposition |
| 0x102B | Feder öffnet nicht von unterem mechanischen Anschlag |
| 0x102D | Fehler bei Prüfung der öffnenden Feder |
| 0x102E | Fehler bei Prüfung der Rückstellfeder |
| 0x102F | Fehler bei Prüfung Notluftposition |
| 0x1030 | Fehler bei Vergleich der beiden normierten Potenziometer-Spannungen |
| 0x1031 | Fehler bei Verstärkerabgleich |
| 0x1032 | Fehler elektrisch |
| 0x1033 | Fehler in der Regelbereichsüberwachung |
| 0x1034 | Fehler mechanisch |
| 0x1035 | Fehler unteres Lernfenster |
| 0x1036 | Fehlfunktion |
| 0x1037 | Fehlfunktion Drosselklappenpotentiometer 1 oder 2 |
| 0x1038 | Frage-/Antwort-Kommunikation fehlerhaft |
| 0x1039 | Führungs- und Referenzsensorsignale unplausibel zueinander |
| 0x103B | Gemisch zu fett |
| 0x103C | Gemisch zu mager |
| 0x103D | Generatortyp unplausibel |
| 0x103E | Geschwindigkeitssignal unplausibel |
| 0x103F | Gestörtes Kurbelwellensignal  |
| 0x1040 | Gradientenüberschreitung |
| 0x1041 | Gradientenüberschreitung / Ident |
| 0x1042 | Hardware, Überwachung ADC-Queue |
| 0x1046 | Heiztakteinkopplung auf Signal |
| 0x1047 | HFM-Signal, obere Schwelle überschritten |
| 0x1048 | HFM-Signal, untere Schwelle unterschritten |
| 0x1049 | IBS Softwareversion nicht kompatibel |
| 0x104A | Innentemperatursensor: Wert zu hoch |
| 0x104B | Innentemperatursensor: Wert zu niedrig |
| 0x104C | Innenwiderstand zu hoch |
| 0x104D | Interner Kommunikationsfehler |
| 0x104E | Kalibrierwiderstand im Steuergerät fehlerhaft |
| 0x104F | Kaltstart, Nebenschluss |
| 0x1050 | Kaltstart, Nebenschluss erkannt |
| 0x1051 | Katalysator-Wirkungsgrad zu niedrig |
| 0x1052 | Kein authentisches Response erhalten |
| 0x1053 | Kein Raddrehzahlsignal erhalten |
| 0x1054 | Keine Anschläge gelernt |
| 0x1055 | Keine Signaländerung |
| 0x1056 | KL15 Masseschluss (Pegel Wakeupleitung) |
| 0x1057 | KL15 Wakeupleitung (Pegel unplausibel) |
| 0x1059 | Kommunikationsverlust |
| 0x105A | Kontinuitätsfehler |
| 0x105B | Kurzschluss |
| 0x105C | Kurzschluss nach Masse |
| 0x105D | Kurzschluss nach Minus |
| 0x105E | Kurzschluss nach Plus |
| 0x105F | Kurzschluss nach Plus oder Leitungsunterbrechung |
| 0x1060 | Kurzschluss oder Leitungsunterbrechung  |
| 0x1061 | Kurzschluss Signaleitung mit Heizleitung |
| 0x1062 | Kurzschluss, maximale Periodendauer überschritten |
| 0x1063 | Kurzschluss, minimale Periodendauer unterschritten |
| 0x1064 | Lageabweichung |
| 0x1065 | Lagereglerüberwachung:  Valvetronic System klemmt |
| 0x1066 | Lambda-Regelung-Motortemperaturschwelle nach Wartezeit nicht erreicht |
| 0x1067 | Lambdaregelwert oberhalb Schwelle infolge offener Pumpstromleitung  |
| 0x1068 | Lambdasondenbaustein: Initialisierungsfehler |
| 0x1069 | Lambdasondenbaustein: Kommunikation SPI gestört |
| 0x106A | Lambdasondenbaustein: Signalkreisadaptionswerte zu hoch |
| 0x106B | Lambdasondenbaustein: Unterspannung |
| 0x106C | Leckage 0.5 mm |
| 0x106D | Leckage 1.0 mm |
| 0x106E | Leckluft nach Drosselklappe festgestellt |
| 0x106F | Leitungsunterbrechung |
| 0x1070 | Leitungsunterbrechung, Drehzahlsignal |
| 0x1071 | Lernen unterer mechanischer Anschlag bei der Urinitialisierung abgebrochen |
| 0x1072 | Lernen unterer mechanischer Anschlag beim Wiederlernen abgebrochen |
| 0x1073 | Lernverbot: Batteriespannung zu niedrig |
| 0x1074 | Lernverbot: Prüfbedingungen nicht erfüllt |
| 0x1075 | Lesen EEPROM fehlerhaft |
| 0x1076 | Löschen EEPROM fehlerhaft |
| 0x1077 | HFM-Signal zu hoch |
| 0x1078 | HFM-Signal zu niedrig |
| 0x1079 | Magnetloss-Fehler |
| 0x107A | max Fehler additiv |
| 0x107B | max Fehler multiplikativ |
| 0x107C | Maximal zulässiges Sollmoment wird dauerhaft überschritten |
| 0x107D | Maximale Anzahl der Minhubanschläge überschritten |
| 0x107E | MIL-Ansteuerung unplausibel |
| 0x107F | min Fehler additiv |
| 0x1080 | min Fehler multiplikativ |
| 0x1081 | Mindestgeschwindigkeit im Schub nicht erreicht |
| 0x1082 | Mindestgeschwindigkeit unter Last nicht erreicht |
| 0x1083 | Minimalwert unterschritten |
| 0x1084 | Montage fehlerhaft |
| 0x1085 | Motor mechanisch zu laut oder Klopfsensor außerhalb Toleranz (Empfindlichkeit) |
| 0x1086 | Motorfunktionen, ADC-Überwachung |
| 0x1087 | Motorfunktionen, RL-Überwachung |
| 0x1088 | Motorfunktionen, Zündwinkelüberwachung |
| 0x1089 | Motorstrom unplausibel gegenüber Bordnetzstrom |
| 0x108A | Motortemperatur unplausibel |
| 0x108B | Nebenschluss |
| 0x108C | Nernstzellenwiderstand oder Keramiktemperatur unplausibel, Leitungs- oder Heizungfehler |
| 0x108D | Noch kein Secret Key programmiert |
| 0x108E | Nockenwellen-Verstellsystem hat Frühposition nicht erreicht |
| 0x108F | Nockenwellen-Verstellsystem reagiert nicht auf Sollwertänderungen (NW klemmt) |
| 0x1090 | Nockenwellen-Verstellsystem zu langsam (Schleppfehler über Zeit) |
| 0x1092 | Druck zu hoch |
| 0x1093 | Gemisch zu mager |
| 0x1094 | Obere Schwelle überschritten |
| 0x1095 | Offsetprüfung, System zu fett |
| 0x1096 | Offsetprüfung, System zu mager |
| 0x1097 | Offset über Grenzwert |
| 0x1098 | Parity-Fehler oder kein Signal |
| 0x1099 | Pedalwertgeber 1oder 2 fehlerhaft oder außerhalb der Toleranz |
| 0x109A | Powermanagement defekt |
| 0x109B | Prüfergebnis unplausibel |
| 0x109C | Prüfsumme fehlerhaft |
| 0x109D | Pumpenstrom bei Referenzmessung zu hoch |
| 0x109E | Pumpenstrom bei Referenzmessung zu niedrig |
| 0x109F | Pumpenstrom bei Ventilprüfung zu hoch |
| 0x10A0 | Radgeschwindigkeit zu hoch |
| 0x10A3 | Reibradaktuator rückt nicht aus |
| 0x10A4 | Reset-Fehler |
| 0x10A5 | RI-Regler dauerhaft am oberen Anschlag |
| 0x10A6 | Ruhestromverletzung erkannt |
| 0x10A7 | Saugrohrdruck zu hoch |
| 0x10A8 | Saugrohrdruck zu niedrig |
| 0x10A9 | Schreiben EEPROM fehlerhaft |
| 0x10AA | Schubspannungsschwelle nicht erreicht oder Signal bei Vollast kleiner Schwelle |
| 0x10AB | Schwergängigkeit in Richtung Vollhub oder kein Strom bei höherem Tastverhältnis |
| 0x10AC | Druck unplausibel |
| 0x10AD | Sensorwert zu hoch |
| 0x10AE | Sensorwert zu niedrig |
| 0x10AF | Signal fehlt |
| 0x10B0 | Signal unplausibel |
| 0x10B1 | Signal unplausibel zu Ersatzwert aus Füllung |
| 0x10B2 | Signal zu hoch |
| 0x10B3 | Signal zu hoch, dauerhaft zu fett |
| 0x10B4 | Signal zu hoch, Kurzschluss nach Plus oder Leitungsunterbrechung |
| 0x10B5 | Druck zu niedrig |
| 0x10B6 | Signal zu niedrig, dauerhaft zu mager |
| 0x10B7 | Signal zu niedrig, Kurzschluss nach Masse |
| 0x10B8 | Signalbereitschaft mangelhaft |
| 0x10B9 | Signal-Eingang A, Kurzschluss nach Masse |
| 0x10BA | Signal-Eingang A, Kurzschluss nach Plus |
| 0x10BB | Signal-Eingang B, Kurzschluss nach Masse |
| 0x10BC | Signal-Eingang B, Kurzschluss nach Plus |
| 0x10BD | Signalspannung im Schub zu klein infolge offener Pumpstromleitung |
| 0x10BE | Sonde dynamisch zu langsam |
| 0x10BF | Sonde nicht angesteckt, Sonde an Luft |
| 0x10C0 | Sondensignal zu träge |
| 0x10C1 | Spannung zu hoch |
| 0x10C2 | Spannung zu niedrig |
| 0x10C3 | Spannungsmessung fehlerhaft |
| 0x10C4 | Spätposition der Nockenwellenverstellung nicht erreicht |
| 0x10C5 | Speicherung Lernwerte in EEPROM nicht möglich |
| 0x10C6 | Strommessung fehlerhaft |
| 0x10C7 | SW-Reset |
| 0x10C8 | System zu fett, additiv pro Zeit zu klein |
| 0x10C9 | System zu mager, additiv pro Zeit zu groß |
| 0x10CA | Systemfehler |
| 0x10CB | Tankdeckel offen bei Fahrt |
| 0x10CC | Tankdeckel offen im Nachlauf |
| 0x10CD | Tankentlüftungsventi klemmt geöffnet |
| 0x10CE | Tankentlüftungsventil klemmt geschlossen |
| 0x10D0 | Tankfüllstandsignal unplausibel zu hoch |
| 0x10D1 | Tauscherkennung ohne Adaption |
| 0x10D2 | Temperaturmessung fehlerhaft |
| 0x10D3 | Thermostat klemmt offen |
| 0x10D4 | Tiefentladung |
| 0x10D5 | Timeout EWS4 Telegramm |
| 0x10D6 | Überlastung: Übertemperatur oder Strom zu hoch |
| 0x10D7 | Überspannung |
| 0x10D8 | Übertemperatur |
| 0x10D9 | Überwachung Eingangsgrößen, Kraftstoffkorrektur |
| 0x10DA | Überwachung Eingangsgrößen, Plausibilisierung relative / eingespritzte Kraftstoffmasse |
| 0x10DB | Überwachung Eingangsgrößen, Varianten Codierungsüberwachung |
| 0x10DC | Überwachung Fahrpedalmodul, Pedalwertgeber-, Zuleitung- oder SG-Fehler |
| 0x10DD | Überwachung Hardware, ADC-Testspannung ausserhalb zulässigem Bereich |
| 0x10DE | Überwachung Hardware, Fehler bei ADC-Queue Überwachung |
| 0x10DF | Überwachung Istmoment, Fehler in der Funktionsüberwachung Momentenvergleich |
| 0x10E0 | Überwachung Kraftstoffdruck, Kraftstoffdrucksensor-, Zuleitung- oder SG-Fehler |
| 0x10E1 | Überwachung Lambdaplausibilisierung, Fehler bei Lambdasignal |
| 0x10E2 | Überwachung Motordrehzahl, Funktionsüberwachung Drehzahlgeber-, Zuleitung- oder SG-Fehler |
| 0x10E3 | Überwachung SPI-Kommunikation |
| 0x10E4 | Überwachung Überspannung, Fehler F/A-Kom. FR-UM aktiv, SG-Fehler |
| 0x10E5 | Überwachung Überspannung, SG-Fehler, Überspannung auf VCC aktiv  |
| 0x10E6 | Überwachung Überspannung, SG-Fehler, Überspannung auf VCC geheilt  |
| 0x10E7 | Überwachung Versorgungsspannung |
| 0x10E8 | Überwachungsmodulfehler |
| 0x10E9 | Umgebungsdrucksensor, Kurzschluss nach Masse |
| 0x10EA | Umgebungsdrucksensor, Kurzschluss nach Plus |
| 0x10EB | Umgebungstemperatur höher als Modelltemperatur |
| 0x10EC | Umgebungstemperatur niedriger als Modelltemperatur |
| 0x10ED | Unplausible Periodendauer: Wackelkontakt mit hoher Frequenz |
| 0x10EE | Unplausible Periodendauer: Wackelkontakt mit niedriger Frequenz |
| 0x10F0 | Gemisch zu fett |
| 0x10F1 | Energiesparmodus aktiv |
| 0x10F2 | Untere Schwelle unterschritten |
| 0x10F3 | Unterspannung |
| 0x10F7 | Verbrennungsaussetzer betriebswarm, emissionsverschlechternd |
| 0x10F8 | Verbrennungsaussetzer im Warmlauf emissionsverschlechternd |
| 0x10F9 | Verbrennungsaussetzer mit Zylinderabschaltung |
| 0x10FA | Vergleich aktueller mit letztem Fahrzyklus unplausibel |
| 0x10FB | Versorgungsspannung außerhalb der Schaltschwellen |
| 0x10FC | Versorgungsspannung zu hoch |
| 0x10FD | Versorgungsspannung zu niedrig |
| 0x10FE | Verstellbereich fehlerhaft |
| 0x10FF | WDA-Activ mit unbekannter Ursache |
| 0x1100 | Wert zu hoch |
| 0x1101 | Wert zu modellierter Referenztemperatur unplausibel (high side check) |
| 0x1102 | Wert zu modellierter Referenztemperatur unplausibel (low side check) |
| 0x1103 | Wert zu niedrig |
| 0x1105 | Winkelversatz der äquidistanten Flanken zu hoch |
| 0x1106 | Zahnversatz |
| 0x1107 | Zeitüberschreitung |
| 0x1108 | Zeitüberschreitung, CAN-Uhrzeit nicht empfangen |
| 0x1109 | Gemisch zu fett (Service, Bandendetest) |
| 0x110A | Gemisch zu mager (Service, Bandendetest) |
| 0x110B | Lambdaregelfaktor unplausibel (Service, Bandendetest) |
| 0x110C | Signal unplausibel wegen festhängendem Tankfüllstandsgeber |
| 0x110D | Tankfüllstand größer als Tankvolumen |
| 0x110E | Abweichung zwischen Verbrauch und Füllstandsänderung |
| 0x110F | HFM-Signal unplausibel zu hoch |
| 0x1111 | HFM-Signal unplausibel zu niedrig |
| 0x1112 | Kombi hat Ungültigkeitssignal gesendet |
| 0x1113 | DSC-Signal unplausibel gegenüber Kombi-Anzeige |
| 0x1114 | Kabelabfall |
| 0x1115 | Nullgangsensor konnte nicht gelernt werden |
| 0x1116 | Tastverhältnis > 94 % |
| 0x1117 | Tastverhältnis < 6 % |
| 0x1118 | Festliegend auf mager |
| 0x1119 | Festliegend auf fett |
| 0x111A | Bremsunterdruck zu gering |
| 0x111B | Bremsunterdruck zu hoch |
| 0x111C | Bremsunterdruck nicht plausibel |
| 0x111D | Periodendauer (250Hz) nicht korrekt |
| 0x111E | Drosselklappenpotentiometer 1 und 2 unplausibel zueinander |
| 0x111F | Freischaltung fehlgeschlagen |
| 0x1120 | Steuergerät Kodierprozess, keine Kodierung |
| 0x1121 | Checksumme Fehlerhaft |
| 0x1122 | Fehler elektrisch berechnet |
| 0x1123 | Fehler Übertemperatur berechnet |
| 0x1124 | Reglertyp unplausibel |
| 0x1125 | Luftmasse gegenüber Modell zu hoch |
| 0x1126 | Luftmasse gegenüber Modell zu niedrig |
| 0x1127 | Funktionsüberwachung, Prüfung Vorsteuerfaktoren |
| 0x15CB | Zeit zu kurz in Korrelation zu Motorkühlmittel-Abkühlung |
| 0x15CC | Zeit zu lang in Korrelation zu Motorkühlmittel-Abkühlung |
| 0x15D5 | zu schnell im Motorlauf |
| 0x15D6 | zu langsam im Motorlauf |
| 0x15D7 | zu schnell im Nachlauf |
| 0x15D8 | zu langsam im Nachlauf |
| 0xFFFF | unbekannte Fehlerart |

### FARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| 0x2710 | 0x0000 | 0x0000 | 0x0000 | 0x10CB |
| 0x2711 | 0x0000 | 0x0000 | 0x10CC | 0x0000 |
| 0x2718 | 0x0000 | 0x0000 | 0x0000 | 0x105E |
| 0x2719 | 0x0000 | 0x0000 | 0x105C | 0x0000 |
| 0x271B | 0x0000 | 0x106F | 0x0000 | 0x0000 |
| 0x2727 | 0x0000 | 0x0000 | 0x0000 | 0x105E |
| 0x2728 | 0x0000 | 0x0000 | 0x105C | 0x0000 |
| 0x272A | 0x0000 | 0x106F | 0x0000 | 0x0000 |
| 0x272B | 0x0000 | 0x0000 | 0x0000 | 0x105E |
| 0x272C | 0x0000 | 0x0000 | 0x105C | 0x0000 |
| 0x272E | 0x0000 | 0x106F | 0x0000 | 0x0000 |
| 0x272F | 0x0000 | 0x0000 | 0x0000 | 0x106C |
| 0x2733 | 0x0000 | 0x0000 | 0x0000 | 0x109D |
| 0x2734 | 0x0000 | 0x0000 | 0x109E | 0x0000 |
| 0x2735 | 0x109F | 0x0000 | 0x0000 | 0x0000 |
| 0x2736 | 0x0000 | 0x1000 | 0x0000 | 0x0000 |
| 0x2738 | 0x0000 | 0x0000 | 0x105C | 0x0000 |
| 0x273A | 0x0000 | 0x106F | 0x0000 | 0x0000 |
| 0x273B | 0x0000 | 0x0000 | 0x0000 | 0x10CE |
| 0x273C | 0x0000 | 0x0000 | 0x10CD | 0x0000 |
| 0x273D | 0x10B0 | 0x0000 | 0x0000 | 0x0000 |
| 0x273E | 0x10B0 | 0x0000 | 0x0000 | 0x0000 |
| 0x273F | 0x10B0 | 0x0000 | 0x0000 | 0x0000 |
| 0x2740 | 0x10B0 | 0x0000 | 0x0000 | 0x0000 |
| 0x2741 | 0x0000 | 0x0000 | 0x0000 | 0x107B |
| 0x2742 | 0x0000 | 0x0000 | 0x1080 | 0x0000 |
| 0x2743 | 0x107F | 0x0000 | 0x0000 | 0x0000 |
| 0x2744 | 0x0000 | 0x107A | 0x0000 | 0x0000 |
| 0x274D | 0x0000 | 0x0000 | 0x0000 | 0x1093 |
| 0x274E | 0x0000 | 0x0000 | 0x10F0 | 0x0000 |
| 0x2752 | 0x0000 | 0x0000 | 0x0000 | 0x1109 |
| 0x2753 | 0x0000 | 0x0000 | 0x110A | 0x0000 |
| 0x2754 | 0x110B | 0x0000 | 0x0000 | 0x0000 |
| 0x2755 | 0x0000 | 0x0000 | 0x0000 | 0x105E |
| 0x2756 | 0x0000 | 0x0000 | 0x105D | 0x0000 |
| 0x2757 | 0x10D0 | 0x0000 | 0x0000 | 0x0000 |
| 0x2758 | 0x0000 | 0x1010 | 0x0000 | 0x0000 |
| 0x275D | 0x0000 | 0x0000 | 0x0000 | 0x110C |
| 0x275E | 0x0000 | 0x0000 | 0x110D | 0x0000 |
| 0x275F | 0x110E | 0x0000 | 0x0000 | 0x0000 |
| 0x276A | 0x0000 | 0x0000 | 0x1051 | 0x0000 |
| 0x276D | 0x0000 | 0x0000 | 0x0000 | 0x105E |
| 0x276E | 0x0000 | 0x0000 | 0x105C | 0x0000 |
| 0x2770 | 0x0000 | 0x106F | 0x0000 | 0x0000 |
| 0x2771 | 0x0000 | 0x0000 | 0x0000 | 0x10F9 |
| 0x2772 | 0x0000 | 0x0000 | 0x10F7 | 0x0000 |
| 0x2773 | 0x10F8 | 0x0000 | 0x0000 | 0x0000 |
| 0x2775 | 0x0000 | 0x0000 | 0x0000 | 0x10F9 |
| 0x2776 | 0x0000 | 0x0000 | 0x10F7 | 0x0000 |
| 0x2777 | 0x10F8 | 0x0000 | 0x0000 | 0x0000 |
| 0x2779 | 0x0000 | 0x0000 | 0x0000 | 0x10F9 |
| 0x277A | 0x0000 | 0x0000 | 0x10F7 | 0x0000 |
| 0x277B | 0x10F8 | 0x0000 | 0x0000 | 0x0000 |
| 0x277D | 0x0000 | 0x0000 | 0x0000 | 0x10F9 |
| 0x277E | 0x0000 | 0x0000 | 0x10F7 | 0x0000 |
| 0x277F | 0x10F8 | 0x0000 | 0x0000 | 0x0000 |
| 0x2781 | 0x0000 | 0x0000 | 0x0000 | 0x10F9 |
| 0x2782 | 0x0000 | 0x0000 | 0x10F7 | 0x0000 |
| 0x2783 | 0x10F8 | 0x0000 | 0x0000 | 0x0000 |
| 0x2789 | 0x0000 | 0x0000 | 0x0000 | 0x10C9 |
| 0x278A | 0x0000 | 0x0000 | 0x10C8 | 0x0000 |
| 0x27AC | 0x0000 | 0x0000 | 0x0000 | 0x106D |
| 0x27B0 | 0x0000 | 0x0000 | 0x1036 | 0x0000 |
| 0x27B1 | 0x0000 | 0x0000 | 0x0000 | 0x105E |
| 0x27B2 | 0x0000 | 0x0000 | 0x105C | 0x0000 |
| 0x27B4 | 0x0000 | 0x106F | 0x0000 | 0x0000 |
| 0x27C4 | 0x0000 | 0x0000 | 0x0000 | 0x105E |
| 0x27C5 | 0x0000 | 0x0000 | 0x105D | 0x0000 |
| 0x27C6 | 0x0000 | 0x1010 | 0x0000 | 0x0000 |
| 0x283D | 0x0000 | 0x0000 | 0x10C4 | 0x0000 |
| 0x2840 | 0x0000 | 0x0000 | 0x0000 | 0x105E |
| 0x2841 | 0x0000 | 0x0000 | 0x105C | 0x0000 |
| 0x2842 | 0x0000 | 0x106F | 0x0000 | 0x0000 |
| 0x2845 | 0x108E | 0x0000 | 0x0000 | 0x0000 |
| 0x2847 | 0x1089 | 0x0000 | 0x0000 | 0x0000 |
| 0x284F | 0x0000 | 0x0000 | 0x0000 | 0x105E |
| 0x2850 | 0x0000 | 0x0000 | 0x105C | 0x0000 |
| 0x2851 | 0x106F | 0x0000 | 0x0000 | 0x0000 |
| 0x2852 | 0x0000 | 0x108B | 0x0000 | 0x0000 |
| 0x2853 | 0x0000 | 0x0000 | 0x0000 | 0x1079 |
| 0x2854 | 0x0000 | 0x0000 | 0x10A4 | 0x0000 |
| 0x2855 | 0x1040 | 0x0000 | 0x0000 | 0x0000 |
| 0x2856 | 0x0000 | 0x1098 | 0x0000 | 0x0000 |
| 0x2857 | 0x0000 | 0x0000 | 0x0000 | 0x1079 |
| 0x2858 | 0x0000 | 0x0000 | 0x10A4 | 0x0000 |
| 0x2859 | 0x1041 | 0x0000 | 0x0000 | 0x0000 |
| 0x285A | 0x0000 | 0x1098 | 0x0000 | 0x0000 |
| 0x285B | 0x0000 | 0x0000 | 0x0000 | 0x10FE |
| 0x285C | 0x0000 | 0x0000 | 0x1035 | 0x0000 |
| 0x285D | 0x10C5 | 0x0000 | 0x0000 | 0x0000 |
| 0x285E | 0x0000 | 0x1054 | 0x0000 | 0x0000 |
| 0x285F | 0x0000 | 0x0000 | 0x0000 | 0x1023 |
| 0x2860 | 0x0000 | 0x0000 | 0x101F | 0x0000 |
| 0x2861 | 0x1039 | 0x0000 | 0x0000 | 0x0000 |
| 0x2863 | 0x0000 | 0x0000 | 0x1029 | 0x0000 |
| 0x2865 | 0x0000 | 0x1029 | 0x0000 | 0x0000 |
| 0x2868 | 0x1014 | 0x0000 | 0x0000 | 0x0000 |
| 0x2869 | 0x0000 | 0x1065 | 0x0000 | 0x0000 |
| 0x286A | 0x0000 | 0x0000 | 0x0000 | 0x105E |
| 0x286B | 0x0000 | 0x0000 | 0x105C | 0x0000 |
| 0x286C | 0x100A | 0x0000 | 0x0000 | 0x0000 |
| 0x286D | 0x0000 | 0x0000 | 0x0000 | 0x10FC |
| 0x286E | 0x0000 | 0x0000 | 0x10FD | 0x0000 |
| 0x2870 | 0x0000 | 0x0000 | 0x1009 | 0x0000 |
| 0x2877 | 0x0000 | 0x0000 | 0x0000 | 0x105E |
| 0x2878 | 0x0000 | 0x0000 | 0x105C | 0x0000 |
| 0x287A | 0x0000 | 0x106F | 0x0000 | 0x0000 |
| 0x287D | 0x1090 | 0x0000 | 0x0000 | 0x0000 |
| 0x287E | 0x0000 | 0x108F | 0x0000 | 0x0000 |
| 0x2888 | 0x0000 | 0x0000 | 0x0000 | 0x107D |
| 0x288D | 0x0000 | 0x0000 | 0x1106 | 0x0000 |
| 0x2891 | 0x0000 | 0x0000 | 0x1106 | 0x0000 |
| 0x289C | 0x101D | 0x0000 | 0x0000 | 0x0000 |
| 0x28B4 | 0x10AB | 0x0000 | 0x0000 | 0x0000 |
| 0x28B6 | 0x0000 | 0x0000 | 0x0000 | 0x105E |
| 0x28B7 | 0x0000 | 0x0000 | 0x105C | 0x0000 |
| 0x28B9 | 0x0000 | 0x106F | 0x0000 | 0x0000 |
| 0x2968 | 0x0000 | 0x10B0 | 0x0000 | 0x0000 |
| 0x2969 | 0x0000 | 0x10AF | 0x0000 | 0x0000 |
| 0x296A | 0x0000 | 0x0000 | 0x0000 | 0x1105 |
| 0x296B | 0x0000 | 0x10B0 | 0x0000 | 0x0000 |
| 0x296C | 0x0000 | 0x10AF | 0x0000 | 0x0000 |
| 0x296D | 0x0000 | 0x0000 | 0x0000 | 0x1105 |
| 0x296E | 0x0000 | 0x103F | 0x0000 | 0x0000 |
| 0x296F | 0x0000 | 0x1070 | 0x0000 | 0x0000 |
| 0x2970 | 0x0000 | 0x0000 | 0x0000 | 0x1015 |
| 0x2971 | 0x0000 | 0x0000 | 0x1016 | 0x0000 |
| 0x2972 | 0x0000 | 0x0000 | 0x0000 | 0x1015 |
| 0x2973 | 0x0000 | 0x0000 | 0x1016 | 0x0000 |
| 0x2974 | 0x0000 | 0x0000 | 0x0000 | 0x1015 |
| 0x2975 | 0x0000 | 0x0000 | 0x1016 | 0x0000 |
| 0x2976 | 0x0000 | 0x0000 | 0x0000 | 0x1015 |
| 0x2977 | 0x0000 | 0x0000 | 0x1016 | 0x0000 |
| 0x297C | 0x0000 | 0x0000 | 0x0000 | 0x1084 |
| 0x2982 | 0x0000 | 0x0000 | 0x0000 | 0x105F |
| 0x2983 | 0x0000 | 0x0000 | 0x105C | 0x0000 |
| 0x2986 | 0x0000 | 0x0000 | 0x0000 | 0x105F |
| 0x2987 | 0x0000 | 0x0000 | 0x105C | 0x0000 |
| 0x2A35 | 0x0000 | 0x0000 | 0x10C0 | 0x0000 |
| 0x2A3C | 0x0000 | 0x0000 | 0x0000 | 0x1095 |
| 0x2A3D | 0x0000 | 0x0000 | 0x1096 | 0x0000 |
| 0x2A47 | 0x0000 | 0x1061 | 0x0000 | 0x0000 |
| 0x2A50 | 0x0000 | 0x0000 | 0x0000 | 0x105E |
| 0x2A51 | 0x0000 | 0x0000 | 0x105D | 0x0000 |
| 0x2A53 | 0x0000 | 0x106F | 0x0000 | 0x0000 |
| 0x2A56 | 0x104C | 0x0000 | 0x0000 | 0x0000 |
| 0x2A60 | 0x0000 | 0x0000 | 0x0000 | 0x105E |
| 0x2A61 | 0x0000 | 0x0000 | 0x105C | 0x0000 |
| 0x2A63 | 0x0000 | 0x106F | 0x0000 | 0x0000 |
| 0x2A64 | 0x0000 | 0x0000 | 0x0000 | 0x10A5 |
| 0x2A66 | 0x10B8 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A67 | 0x0000 | 0x104E | 0x0000 | 0x0000 |
| 0x2A6C | 0x0000 | 0x0000 | 0x0000 | 0x106A |
| 0x2A6D | 0x0000 | 0x0000 | 0x106B | 0x0000 |
| 0x2A6E | 0x1068 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A6F | 0x0000 | 0x1069 | 0x0000 | 0x0000 |
| 0x2A74 | 0x0000 | 0x0000 | 0x0000 | 0x10B6 |
| 0x2A75 | 0x0000 | 0x0000 | 0x10B3 | 0x0000 |
| 0x2A76 | 0x10BE | 0x0000 | 0x0000 | 0x0000 |
| 0x2A77 | 0x0000 | 0x10AA | 0x0000 | 0x0000 |
| 0x2A7C | 0x0000 | 0x0000 | 0x0000 | 0x105E |
| 0x2A7D | 0x0000 | 0x0000 | 0x1001 | 0x0000 |
| 0x2A7E | 0x1046 | 0x0000 | 0x0000 | 0x0000 |
| 0x2A7F | 0x0000 | 0x106F | 0x0000 | 0x0000 |
| 0x2A8B | 0x0000 | 0x106F | 0x0000 | 0x0000 |
| 0x2A90 | 0x0000 | 0x0000 | 0x0000 | 0x1067 |
| 0x2A92 | 0x10BD | 0x0000 | 0x0000 | 0x0000 |
| 0x2A93 | 0x0000 | 0x106F | 0x0000 | 0x0000 |
| 0x2A98 | 0x0000 | 0x0000 | 0x0000 | 0x105E |
| 0x2A99 | 0x0000 | 0x0000 | 0x105C | 0x0000 |
| 0x2AA3 | 0x0000 | 0x106F | 0x0000 | 0x0000 |
| 0x2AAB | 0x0000 | 0x106F | 0x0000 | 0x0000 |
| 0x2AB4 | 0x0000 | 0x0000 | 0x0000 | 0x108C |
| 0x2AB8 | 0x0000 | 0x0000 | 0x0000 | 0x1097 |
| 0x2AC1 | 0x0000 | 0x0000 | 0x0000 | 0x1095 |
| 0x2AC2 | 0x0000 | 0x0000 | 0x1096 | 0x0000 |
| 0x2AC3 | 0x1118 | 0x0000 | 0x0000 | 0x0000 |
| 0x2AC4 | 0x0000 | 0x1119 | 0x0000 | 0x0000 |
| 0x2ACB | 0x10BF | 0x0000 | 0x0000 | 0x0000 |
| 0x2ACD | 0x0000 | 0x10C0 | 0x0000 | 0x0000 |
| 0x2AD2 | 0x0000 | 0x0000 | 0x0000 | 0x10C0 |
| 0x2AF8 | 0x10B0 | 0x0000 | 0x0000 | 0x0000 |
| 0x2AF9 | 0x0000 | 0x0000 | 0x0000 | 0x10B4 |
| 0x2AFA | 0x0000 | 0x0000 | 0x10B7 | 0x0000 |
| 0x2B01 | 0x0000 | 0x0000 | 0x0000 | 0x100D |
| 0x2B02 | 0x0000 | 0x0000 | 0x100E | 0x0000 |
| 0x2B03 | 0x10B1 | 0x0000 | 0x0000 | 0x0000 |
| 0x2B05 | 0x0000 | 0x0000 | 0x0000 | 0x100D |
| 0x2B06 | 0x0000 | 0x0000 | 0x100E | 0x0000 |
| 0x2B07 | 0x10B1 | 0x0000 | 0x0000 | 0x0000 |
| 0x2B0B | 0x1037 | 0x0000 | 0x0000 | 0x0000 |
| 0x2B13 | 0x111E | 0x0000 | 0x0000 | 0x0000 |
| 0x2B15 | 0x0000 | 0x0000 | 0x0000 | 0x10A7 |
| 0x2B16 | 0x0000 | 0x0000 | 0x10A8 | 0x0000 |
| 0x2B1D | 0x0000 | 0x0000 | 0x0000 | 0x105B |
| 0x2B1E | 0x0000 | 0x0000 | 0x10D6 | 0x0000 |
| 0x2B1F | 0x104D | 0x0000 | 0x0000 | 0x0000 |
| 0x2B20 | 0x0000 | 0x106F | 0x0000 | 0x0000 |
| 0x2B21 | 0x0000 | 0x0000 | 0x0000 | 0x102E |
| 0x2B22 | 0x0000 | 0x0000 | 0x102D | 0x0000 |
| 0x2B25 | 0x0000 | 0x0000 | 0x0000 | 0x102A |
| 0x2B26 | 0x0000 | 0x0000 | 0x102B | 0x0000 |
| 0x2B2B | 0x1064 | 0x0000 | 0x0000 | 0x0000 |
| 0x2B2F | 0x102F | 0x0000 | 0x0000 | 0x0000 |
| 0x2B31 | 0x0000 | 0x0000 | 0x0000 | 0x1017 |
| 0x2B32 | 0x0000 | 0x0000 | 0x1018 | 0x0000 |
| 0x2B37 | 0x10D1 | 0x0000 | 0x0000 | 0x0000 |
| 0x2B39 | 0x0000 | 0x0000 | 0x0000 | 0x1074 |
| 0x2B3A | 0x0000 | 0x0000 | 0x1073 | 0x0000 |
| 0x2B3F | 0x1071 | 0x0000 | 0x0000 | 0x0000 |
| 0x2B43 | 0x1072 | 0x0000 | 0x0000 | 0x0000 |
| 0x2B47 | 0x1031 | 0x0000 | 0x0000 | 0x0000 |
| 0x2B49 | 0x0000 | 0x0000 | 0x0000 | 0x10C1 |
| 0x2B4A | 0x0000 | 0x0000 | 0x10C2 | 0x0000 |
| 0x2B4B | 0x1030 | 0x0000 | 0x0000 | 0x0000 |
| 0x2B4C | 0x0000 | 0x0000 | 0x0000 | 0x10C1 |
| 0x2B4D | 0x0000 | 0x0000 | 0x10C2 | 0x0000 |
| 0x2B4E | 0x1099 | 0x0000 | 0x0000 | 0x0000 |
| 0x2B4F | 0x0000 | 0x0000 | 0x0000 | 0x10EE |
| 0x2B50 | 0x0000 | 0x0000 | 0x10ED | 0x0000 |
| 0x2B51 | 0x0000 | 0x1060 | 0x0000 | 0x0000 |
| 0x2B55 | 0x0000 | 0x0000 | 0x0000 | 0x1077 |
| 0x2B56 | 0x0000 | 0x0000 | 0x1078 | 0x0000 |
| 0x2B57 | 0x110F | 0x0000 | 0x0000 | 0x0000 |
| 0x2B58 | 0x0000 | 0x1111 | 0x0000 | 0x0000 |
| 0x2B59 | 0x0000 | 0x0000 | 0x0000 | 0x1077 |
| 0x2B5A | 0x0000 | 0x0000 | 0x1078 | 0x0000 |
| 0x2B5B | 0x1125 | 0x0000 | 0x0000 | 0x0000 |
| 0x2B5C | 0x0000 | 0x1126 | 0x0000 | 0x0000 |
| 0x2B5E | 0x0000 | 0x0000 | 0x0000 | 0x1062 |
| 0x2B5F | 0x0000 | 0x0000 | 0x1063 | 0x0000 |
| 0x2B64 | 0x106E | 0x0000 | 0x0000 | 0x0000 |
| 0x2B67 | 0x0000 | 0x0000 | 0x0000 | 0x1100 |
| 0x2B68 | 0x0000 | 0x0000 | 0x1103 | 0x0000 |
| 0x2B69 | 0x0000 | 0x0000 | 0x0000 | 0x1092 |
| 0x2B6A | 0x0000 | 0x0000 | 0x10B5 | 0x0000 |
| 0x2B6B | 0x10AC | 0x0000 | 0x0000 | 0x0000 |
| 0x2B7A | 0x1033 | 0x0000 | 0x0000 | 0x0000 |
| 0x2BC0 | 0x0000 | 0x0000 | 0x0000 | 0x1004 |
| 0x2BC1 | 0x0000 | 0x0000 | 0x0000 | 0x1003 |
| 0x2BC2 | 0x0000 | 0x0000 | 0x0000 | 0x1004 |
| 0x2BC3 | 0x0000 | 0x0000 | 0x0000 | 0x1003 |
| 0x2BC4 | 0x0000 | 0x0000 | 0x0000 | 0x10E3 |
| 0x2BC5 | 0x0000 | 0x0000 | 0x0000 | 0x10E3 |
| 0x2BC6 | 0x0000 | 0x0000 | 0x0000 | 0x1076 |
| 0x2BC7 | 0x0000 | 0x0000 | 0x0000 | 0x1075 |
| 0x2BC8 | 0x0000 | 0x0000 | 0x0000 | 0x10A9 |
| 0x2BCB | 0x0000 | 0x0000 | 0x0000 | 0x107C |
| 0x2BCC | 0x0000 | 0x0000 | 0x0000 | 0x10E8 |
| 0x2BCD | 0x0000 | 0x0000 | 0x0000 | 0x10E7 |
| 0x2BCE | 0x0000 | 0x0000 | 0x0000 | 0x10E7 |
| 0x2BCF | 0x0000 | 0x0000 | 0x0000 | 0x10FF |
| 0x2BD0 | 0x0000 | 0x0000 | 0x0000 | 0x1038 |
| 0x2BD1 | 0x0000 | 0x0000 | 0x0000 | 0x10D8 |
| 0x2BD2 | 0x0000 | 0x0000 | 0x0000 | 0x10FB |
| 0x2BD3 | 0x0000 | 0x0000 | 0x0000 | 0x10FB |
| 0x2BD4 | 0x0000 | 0x0000 | 0x0000 | 0x10FB |
| 0x2BD5 | 0x0000 | 0x0000 | 0x0000 | 0x10C7 |
| 0x2BD6 | 0x0000 | 0x0000 | 0x0000 | 0x10C7 |
| 0x2BD7 | 0x0000 | 0x0000 | 0x0000 | 0x10C7 |
| 0x2BD9 | 0x10DF | 0x0000 | 0x0000 | 0x0000 |
| 0x2BDA | 0x10E2 | 0x0000 | 0x0000 | 0x0000 |
| 0x2BDB | 0x10FB | 0x0000 | 0x0000 | 0x0000 |
| 0x2BDC | 0x10E1 | 0x0000 | 0x0000 | 0x0000 |
| 0x2BDD | 0x0000 | 0x0000 | 0x0000 | 0x1087 |
| 0x2BDE | 0x0000 | 0x0000 | 0x1088 | 0x0000 |
| 0x2BDF | 0x0000 | 0x1086 | 0x0000 | 0x0000 |
| 0x2BE0 | 0x0000 | 0x0000 | 0x0000 | 0x10D9 |
| 0x2BE1 | 0x0000 | 0x0000 | 0x10DA | 0x0000 |
| 0x2BE2 | 0x0000 | 0x10DB | 0x0000 | 0x0000 |
| 0x2BE3 | 0x0000 | 0x0000 | 0x0000 | 0x10DE |
| 0x2BE4 | 0x0000 | 0x0000 | 0x10DD | 0x0000 |
| 0x2BE5 | 0x1042 | 0x0000 | 0x0000 | 0x0000 |
| 0x2BE6 | 0x0000 | 0x0000 | 0x0000 | 0x1127 |
| 0x2BE8 | 0x10DC | 0x0000 | 0x0000 | 0x0000 |
| 0x2BE9 | 0x0000 | 0x0000 | 0x0000 | 0x10E5 |
| 0x2BEA | 0x0000 | 0x0000 | 0x10E6 | 0x0000 |
| 0x2BEB | 0x0000 | 0x10E4 | 0x0000 | 0x0000 |
| 0x2C8D | 0x0000 | 0x0000 | 0x10D4 | 0x0000 |
| 0x2C8E | 0x109A | 0x0000 | 0x0000 | 0x0000 |
| 0x2C90 | 0x0000 | 0x0000 | 0x0000 | 0x10D7 |
| 0x2C91 | 0x0000 | 0x0000 | 0x10F3 | 0x0000 |
| 0x2C93 | 0x0000 | 0x100C | 0x0000 | 0x0000 |
| 0x2C96 | 0x10A6 | 0x0000 | 0x0000 | 0x0000 |
| 0x2C98 | 0x0000 | 0x0000 | 0x0000 | 0x1100 |
| 0x2C99 | 0x0000 | 0x0000 | 0x1103 | 0x0000 |
| 0x2C9A | 0x1002 | 0x0000 | 0x0000 | 0x0000 |
| 0x2C9C | 0x0000 | 0x0000 | 0x0000 | 0x1100 |
| 0x2C9D | 0x0000 | 0x0000 | 0x1103 | 0x0000 |
| 0x2C9E | 0x10B0 | 0x0000 | 0x0000 | 0x0000 |
| 0x2D53 | 0x0000 | 0x0000 | 0x0000 | 0x1036 |
| 0x2D54 | 0x0000 | 0x0000 | 0x0000 | 0x105E |
| 0x2D55 | 0x0000 | 0x0000 | 0x105C | 0x0000 |
| 0x2D57 | 0x0000 | 0x106F | 0x0000 | 0x0000 |
| 0x2D58 | 0x0000 | 0x0000 | 0x0000 | 0x105E |
| 0x2D59 | 0x0000 | 0x0000 | 0x105C | 0x0000 |
| 0x2D5A | 0x0000 | 0x106F | 0x0000 | 0x0000 |
| 0x2D5C | 0x0000 | 0x0000 | 0x0000 | 0x105E |
| 0x2D5D | 0x0000 | 0x0000 | 0x105C | 0x0000 |
| 0x2D5F | 0x0000 | 0x106F | 0x0000 | 0x0000 |
| 0x2D60 | 0x0000 | 0x0000 | 0x0000 | 0x105E |
| 0x2D61 | 0x0000 | 0x0000 | 0x105C | 0x0000 |
| 0x2D63 | 0x0000 | 0x106F | 0x0000 | 0x0000 |
| 0x2D8B | 0x0000 | 0x0000 | 0x0000 | 0x10BA |
| 0x2D8C | 0x0000 | 0x0000 | 0x10B9 | 0x0000 |
| 0x2D8D | 0x0000 | 0x0000 | 0x0000 | 0x10BC |
| 0x2D8E | 0x0000 | 0x0000 | 0x10BB | 0x0000 |
| 0x2D9B | 0x0000 | 0x0000 | 0x0000 | 0x1085 |
| 0x2D9C | 0x0000 | 0x0000 | 0x101E | 0x0000 |
| 0x2E1A | 0x103D | 0x0000 | 0x0000 | 0x0000 |
| 0x2E1B | 0x0000 | 0x1059 | 0x0000 | 0x0000 |
| 0x2E1C | 0x0000 | 0x0000 | 0x0000 | 0x1107 |
| 0x2E20 | 0x0000 | 0x0000 | 0x0000 | 0x1122 |
| 0x2E24 | 0x0000 | 0x0000 | 0x0000 | 0x1032 |
| 0x2E28 | 0x0000 | 0x0000 | 0x0000 | 0x1123 |
| 0x2E2C | 0x0000 | 0x0000 | 0x0000 | 0x10D8 |
| 0x2E30 | 0x0000 | 0x0000 | 0x0000 | 0x10D8 |
| 0x2E31 | 0x0000 | 0x0000 | 0x103D | 0x0000 |
| 0x2E32 | 0x1034 | 0x0000 | 0x0000 | 0x0000 |
| 0x2E33 | 0x0000 | 0x1032 | 0x0000 | 0x0000 |
| 0x2E34 | 0x0000 | 0x0000 | 0x0000 | 0x1034 |
| 0x2E38 | 0x0000 | 0x0000 | 0x0000 | 0x1124 |
| 0x2E3C | 0x0000 | 0x0000 | 0x0000 | 0x103D |
| 0x2E40 | 0x0000 | 0x0000 | 0x0000 | 0x1056 |
| 0x2E42 | 0x1057 | 0x0000 | 0x0000 | 0x0000 |
| 0x2E43 | 0x0000 | 0x10CA | 0x0000 | 0x0000 |
| 0x2E44 | 0x0000 | 0x0000 | 0x0000 | 0x1024 |
| 0x2E46 | 0x1049 | 0x0000 | 0x0000 | 0x0000 |
| 0x2E47 | 0x0000 | 0x1059 | 0x0000 | 0x0000 |
| 0x2E48 | 0x0000 | 0x0000 | 0x0000 | 0x10D2 |
| 0x2E4A | 0x10C6 | 0x0000 | 0x0000 | 0x0000 |
| 0x2E4B | 0x0000 | 0x10C3 | 0x0000 | 0x0000 |
| 0x2E4F | 0x0000 | 0x1107 | 0x0000 | 0x0000 |
| 0x2E67 | 0x0000 | 0x1107 | 0x0000 | 0x0000 |
| 0x2EE0 | 0x0000 | 0x0000 | 0x0000 | 0x10AD |
| 0x2EE1 | 0x0000 | 0x0000 | 0x10AE | 0x0000 |
| 0x2EE2 | 0x0000 | 0x0000 | 0x0000 | 0x105E |
| 0x2EE3 | 0x0000 | 0x0000 | 0x105C | 0x0000 |
| 0x2EE5 | 0x0000 | 0x106F | 0x0000 | 0x0000 |
| 0x2EE6 | 0x0000 | 0x0000 | 0x0000 | 0x105E |
| 0x2EE7 | 0x0000 | 0x0000 | 0x105C | 0x0000 |
| 0x2EE8 | 0x0000 | 0x106F | 0x0000 | 0x0000 |
| 0x2EEE | 0x0000 | 0x0000 | 0x1083 | 0x0000 |
| 0x2EF1 | 0x0000 | 0x0000 | 0x0000 | 0x1007 |
| 0x2EF2 | 0x0000 | 0x0000 | 0x1008 | 0x0000 |
| 0x2EF9 | 0x0000 | 0x0000 | 0x0000 | 0x1007 |
| 0x2EFB | 0x10B0 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F07 | 0x10D3 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F09 | 0x0000 | 0x0000 | 0x0000 | 0x1094 |
| 0x2F0A | 0x0000 | 0x0000 | 0x10F2 | 0x0000 |
| 0x2F15 | 0x0000 | 0x0000 | 0x0000 | 0x104F |
| 0x2F16 | 0x0000 | 0x0000 | 0x1050 | 0x0000 |
| 0x2F19 | 0x0000 | 0x0000 | 0x0000 | 0x105C |
| 0x2F1A | 0x0000 | 0x0000 | 0x105F | 0x0000 |
| 0x2F21 | 0x0000 | 0x0000 | 0x0000 | 0x1101 |
| 0x2F22 | 0x0000 | 0x0000 | 0x1102 | 0x0000 |
| 0x2F23 | 0x108A | 0x0000 | 0x0000 | 0x0000 |
| 0x2F24 | 0x0000 | 0x1066 | 0x0000 | 0x0000 |
| 0x2F25 | 0x0000 | 0x0000 | 0x0000 | 0x1100 |
| 0x2F26 | 0x0000 | 0x0000 | 0x1103 | 0x0000 |
| 0x2F28 | 0x0000 | 0x1010 | 0x0000 | 0x0000 |
| 0x2F2F | 0x10EB | 0x0000 | 0x0000 | 0x0000 |
| 0x2F30 | 0x0000 | 0x10EC | 0x0000 | 0x0000 |
| 0x2F38 | 0x0000 | 0x0000 | 0x0000 | 0x105E |
| 0x2F39 | 0x0000 | 0x0000 | 0x105D | 0x0000 |
| 0x2F3A | 0x0000 | 0x106F | 0x0000 | 0x0000 |
| 0x2F3B | 0x10A3 | 0x0000 | 0x0000 | 0x0000 |
| 0x2F3C | 0x0000 | 0x0000 | 0x0000 | 0x105E |
| 0x2F3D | 0x0000 | 0x0000 | 0x105C | 0x0000 |
| 0x2F3F | 0x0000 | 0x106F | 0x0000 | 0x0000 |
| 0x2F40 | 0x0000 | 0x0000 | 0x0000 | 0x105E |
| 0x2F41 | 0x0000 | 0x0000 | 0x105C | 0x0000 |
| 0x2F42 | 0x0000 | 0x106F | 0x0000 | 0x0000 |
| 0x2F8A | 0x0000 | 0x0000 | 0x0000 | 0x15D5 |
| 0x2F8B | 0x0000 | 0x0000 | 0x15D6 | 0x0000 |
| 0x2F8C | 0x0000 | 0x10AF | 0x0000 | 0x0000 |
| 0x2F8E | 0x0000 | 0x0000 | 0x0000 | 0x15CC |
| 0x2F8F | 0x0000 | 0x0000 | 0x15CB | 0x0000 |
| 0x2F92 | 0x0000 | 0x0000 | 0x0000 | 0x15D7 |
| 0x2F93 | 0x0000 | 0x0000 | 0x15D8 | 0x0000 |
| 0x2FAA | 0x109B | 0x0000 | 0x0000 | 0x0000 |
| 0x2FAC | 0x1012 | 0x0000 | 0x0000 | 0x0000 |
| 0x2FAD | 0x0000 | 0x1108 | 0x0000 | 0x0000 |
| 0x2FB7 | 0x0000 | 0x0000 | 0x10F1 | 0x0000 |
| 0x2FC1 | 0x0000 | 0x10AF | 0x0000 | 0x0000 |
| 0x2FC2 | 0x0000 | 0x0000 | 0x0000 | 0x1100 |
| 0x2FC3 | 0x0000 | 0x0000 | 0x1103 | 0x0000 |
| 0x2FC4 | 0x10B0 | 0x0000 | 0x0000 | 0x0000 |
| 0x2FC5 | 0x0000 | 0x0000 | 0x0000 | 0x10EA |
| 0x2FC6 | 0x0000 | 0x0000 | 0x10E9 | 0x0000 |
| 0x2FCD | 0x0000 | 0x0000 | 0x0000 | 0x1100 |
| 0x2FCE | 0x0000 | 0x0000 | 0x1103 | 0x0000 |
| 0x2FCF | 0x10FA | 0x0000 | 0x0000 | 0x0000 |
| 0x2FD0 | 0x0000 | 0x105A | 0x0000 | 0x0000 |
| 0x2FD6 | 0x0000 | 0x0000 | 0x108D | 0x0000 |
| 0x2FD7 | 0x1052 | 0x0000 | 0x0000 | 0x0000 |
| 0x2FD9 | 0x0000 | 0x0000 | 0x0000 | 0x1013 |
| 0x2FDA | 0x0000 | 0x0000 | 0x1022 | 0x0000 |
| 0x2FDB | 0x1021 | 0x0000 | 0x0000 | 0x0000 |
| 0x2FDC | 0x0000 | 0x10D5 | 0x0000 | 0x0000 |
| 0x2FDD | 0x0000 | 0x0000 | 0x0000 | 0x1026 |
| 0x2FDE | 0x0000 | 0x0000 | 0x1027 | 0x0000 |
| 0x2FDF | 0x1025 | 0x0000 | 0x0000 | 0x0000 |
| 0x2FE0 | 0x0000 | 0x1028 | 0x0000 | 0x0000 |
| 0x2FE2 | 0x0000 | 0x0000 | 0x1020 | 0x0000 |
| 0x2FE4 | 0x0000 | 0x10D5 | 0x0000 | 0x0000 |
| 0x2FE5 | 0x0000 | 0x0000 | 0x0000 | 0x105E |
| 0x2FE6 | 0x0000 | 0x0000 | 0x105C | 0x0000 |
| 0x2FE7 | 0x0000 | 0x106F | 0x0000 | 0x0000 |
| 0x2FEA | 0x0000 | 0x0000 | 0x0000 | 0x10A0 |
| 0x2FED | 0x0000 | 0x1053 | 0x0000 | 0x0000 |
| 0x2FF2 | 0x0000 | 0x0000 | 0x0000 | 0x104A |
| 0x2FF3 | 0x0000 | 0x0000 | 0x104B | 0x0000 |
| 0x2FF4 | 0x0000 | 0x0000 | 0x0000 | 0x1112 |
| 0x2FF5 | 0x1113 | 0x0000 | 0x0000 | 0x0000 |
| 0x2FF6 | 0x0000 | 0x0000 | 0x0000 | 0x10B2 |
| 0x2FF7 | 0x0000 | 0x0000 | 0x1055 | 0x0000 |
| 0x2FF9 | 0x0000 | 0x1010 | 0x0000 | 0x0000 |
| 0x2FFE | 0x0000 | 0x0000 | 0x0000 | 0x1082 |
| 0x2FFF | 0x0000 | 0x0000 | 0x1081 | 0x0000 |
| 0x3000 | 0x103E | 0x0000 | 0x0000 | 0x0000 |
| 0x3008 | 0x0000 | 0x0000 | 0x0000 | 0x111A |
| 0x3009 | 0x0000 | 0x0000 | 0x111B | 0x0000 |
| 0x300A | 0x111C | 0x0000 | 0x0000 | 0x0000 |
| 0x3013 | 0x0000 | 0x0000 | 0x0000 | 0x1092 |
| 0x3014 | 0x0000 | 0x0000 | 0x10B5 | 0x0000 |
| 0x3015 | 0x0000 | 0x1114 | 0x0000 | 0x0000 |
| 0x3016 | 0x10AC | 0x0000 | 0x0000 | 0x0000 |
| 0x301C | 0x0000 | 0x0000 | 0x0000 | 0x105E |
| 0x301D | 0x0000 | 0x0000 | 0x105C | 0x0000 |
| 0x301E | 0x0000 | 0x106F | 0x0000 | 0x0000 |
| 0x3020 | 0x0000 | 0x0000 | 0x0000 | 0x105E |
| 0x3021 | 0x0000 | 0x0000 | 0x105C | 0x0000 |
| 0x3022 | 0x0000 | 0x0000 | 0x0000 | 0x1116 |
| 0x3023 | 0x0000 | 0x0000 | 0x1117 | 0x0000 |
| 0x3024 | 0x0000 | 0x105E | 0x0000 | 0x0000 |
| 0x3025 | 0x105C | 0x0000 | 0x0000 | 0x0000 |
| 0x3026 | 0x0000 | 0x1115 | 0x0000 | 0x0000 |
| 0x3028 | 0x0000 | 0x0000 | 0x0000 | 0x1116 |
| 0x3029 | 0x0000 | 0x0000 | 0x1117 | 0x0000 |
| 0x302E | 0x0000 | 0x105E | 0x0000 | 0x0000 |
| 0x302F | 0x0000 | 0x0000 | 0x105C | 0x0000 |
| 0x3031 | 0x0000 | 0x0000 | 0x0000 | 0x111D |
| 0x3032 | 0x10B0 | 0x0000 | 0x0000 | 0x0000 |
| 0x3036 | 0x1121 | 0x0000 | 0x0000 | 0x0000 |
| 0x303E | 0x1120 | 0x0000 | 0x0000 | 0x0000 |
| 0x3043 | 0x10B0 | 0x0000 | 0x0000 | 0x0000 |
| 0x3091 | 0x0000 | 0x1011 | 0x0000 | 0x0000 |
| 0x3094 | 0x0000 | 0x0000 | 0x1005 | 0x0000 |
| 0x3095 | 0x109C | 0x0000 | 0x0000 | 0x0000 |
| 0x3096 | 0x0000 | 0x1107 | 0x0000 | 0x0000 |
| 0x3097 | 0x0000 | 0x0000 | 0x1005 | 0x0000 |
| 0x3098 | 0x109C | 0x0000 | 0x0000 | 0x0000 |
| 0x3099 | 0x0000 | 0x1107 | 0x0000 | 0x0000 |
| 0x309D | 0x0000 | 0x1107 | 0x0000 | 0x0000 |
| 0x309F | 0x0000 | 0x0000 | 0x1005 | 0x0000 |
| 0x30A0 | 0x107E | 0x0000 | 0x0000 | 0x0000 |
| 0x30A1 | 0x0000 | 0x1107 | 0x0000 | 0x0000 |
| 0x30A4 | 0x0000 | 0x0000 | 0x1005 | 0x0000 |
| 0x30A5 | 0x109C | 0x0000 | 0x0000 | 0x0000 |
| 0x30A6 | 0x0000 | 0x1107 | 0x0000 | 0x0000 |
| 0x30A7 | 0x109C | 0x0000 | 0x0000 | 0x0000 |
| 0x30A8 | 0x0000 | 0x1107 | 0x0000 | 0x0000 |
| 0x30A9 | 0x0000 | 0x1107 | 0x0000 | 0x0000 |
| 0x30AA | 0x0000 | 0x1107 | 0x0000 | 0x0000 |
| 0x30AB | 0x0000 | 0x1107 | 0x0000 | 0x0000 |
| 0x30AC | 0x0000 | 0x1107 | 0x0000 | 0x0000 |
| 0x30AD | 0x0000 | 0x1107 | 0x0000 | 0x0000 |
| 0x30AE | 0x0000 | 0x1107 | 0x0000 | 0x0000 |
| 0x30AF | 0x109C | 0x0000 | 0x0000 | 0x0000 |
| 0x30B0 | 0x0000 | 0x1107 | 0x0000 | 0x0000 |
| 0x30B2 | 0x0000 | 0x1107 | 0x0000 | 0x0000 |
| 0x30B4 | 0x0000 | 0x1107 | 0x0000 | 0x0000 |
| 0x30B5 | 0x0000 | 0x1107 | 0x0000 | 0x0000 |
| 0x30B9 | 0x0000 | 0x1107 | 0x0000 | 0x0000 |
| 0x30BA | 0x0000 | 0x1107 | 0x0000 | 0x0000 |
| 0x30BB | 0x0000 | 0x1107 | 0x0000 | 0x0000 |
| 0x30C0 | 0x109C | 0x0000 | 0x0000 | 0x0000 |
| 0x30C1 | 0x0000 | 0x1107 | 0x0000 | 0x0000 |
| 0x31BE | 0x0000 | 0x1107 | 0x0000 | 0x0000 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0000 | Zeit nach Start  (tnse_w ) | s | - | unsigned char | - | 25,6 | 1 | 0,0 |
| 0x0001 | Umgebungsdruck  (pu) | hPa | - | unsigned char | - | 5,0 | 1 | 0,0 |
| 0x0002 | Zustand Lamdaregelung  (flglrs) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x0004 | Relative Luftmasse  (rml) | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x0005 | Motortemperatur  (tmot) | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x0006 | Lambda-Regler-Ausgang  (fr_w) | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x0007 | Additive Gemischkorrektur der Gemischadaption  (rkat_w) | % | - | signed char | - | 0,2 | 1 | 0,0 |
| 0x000B | Saugrohrdruck  (ps_w) | hPa | - | unsigned char | - | 7,8125 | 1 | 0,0 |
| 0x000C | Drehzahl  (nmot) | Upmin | - | unsigned char | - | 40,0 | 1 | 0,0 |
| 0x000D | Fahrzeuggeschwindigkeit  (vfzg) | km/h | - | unsigned char | - | 1,25 | 1 | 0,0 |
| 0x000E | Zündzeitpunkt Zylinder 1  (zwout) | Grad KW | - | signed char | - | 0,75 | 1 | 0,0 |
| 0x000F | Ansauglufttemperatur  (tans) | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x0013 | Relative Luftfüllung  (rl) | % | - | unsigned char | - | 0,75 | 1 | 0,0 |
| 0x0014 | Fahrpedalwinkel  (wped) | %PED | - | unsigned char | - | 0,3921568 | 1 | 0,0 |
| 0x0015 | Batteriespannung  (ub) | V | - | unsigned char | - | 0,0942 | 1 | 0,0 |
| 0x0016 | Lambdasollwert bezogen auf Einbauort  (lamsons_w) | - | - | unsigned char | - | 0,0625 | 1 | 0,0 |
| 0x0017 | Umgebungstemperatur  (tumg) | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x0018 | Luftmassenfluss gefiltert  (ml) | kg/h | - | unsigned char | - | 4 | 1 | 0,0 |
| 0x001A | Istwinkel Nockenwelle Einlass  (vse_spri) | Grad KW | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x001B | Sollwinkel Nockenwelle Einlass  (vse_sprs) | Grad KW | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x001C | Istwinkel Nockenwelle Auslass  (vsa_spri) | Grad KW | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x001D | Sollwinkel Nockenwelle Auslass  (vsa_sprs) | Grad KW | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x001E | Ansauglufttemperatur, linearisiert  (tanslin) | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x001F | Motortemperatur, linearisiert  (tmotlin) | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x0021 | Steuergeräte-Innentemperatur  (tsg) | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x0022 | Motoröltemperatur  (toel) | Grad C | - | unsigned char | - | 1,0 | 1 | -60,0 |
| 0x0023 | Abstellzeit  (tabst_w) | s | - | unsigned char | - | 256,0 | 1 | 0,0 |
| 0x0026 | Drosselklappenwinkel aus Poti 1 (wdk1) | %DK | - | unsigned char | - | 0,3921568 | 1 | 0,0 |
| 0x0027 | Tastverhältnis für Lambdasondenheizung vor Kat  (tahrlszu_w) | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x0029 | Heizleistung der Lambdasonde hinter Kat  (phlsnh) | - | - | unsigned char | - | 0,01 | 1 | 0,0 |
| 0x002B | Bedingung externer Momenteneingriff  (B_miext) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x002C | Lambdasondenistwert, korrigiert um Zusatzamplitude  (lamzak_w) | - | - | unsigned char | - | 0,0625 | 1 | 0,0 |
| 0x002D | Korrekturwert der LSU-Spannung vor Kat  (kusvk_w) | V | - | signed char | - | 0,001953125 | 1 | 0,0 |
| 0x002E | Lambdaamplitude nach Filterung  (lamsam_w) | - | - | signed char | - | 0,0625 | 1 | 0,0 |
| 0x002F | Abgastemperatur nach Katalysator aus Modell  (tkatm) | Grad C | - | unsigned char | - | 5,0 | 1 | -50,0 |
| 0x0030 | Dynamikwert der LSU  (dynlsu_w) | - | - | unsigned char | - | 0,015625 | 1 | 0,0 |
| 0x0034 | Umgebungsdruck  (pur_w) | hPa | - | unsigned char | - | 7,8125 | 1 | 0,0 |
| 0x0035 | Herstellercode Generator  (genmanufak) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x0036 | Gefilterter Drehzahlgradient  (ngfil) | 1/min/s | - | signed char | - | 100,0 | 1 | 0,0 |
| 0x0038 | Schalter Klemme 50 von CAN  (S_ckl50) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x0039 | Bedingung Sicherheitskraftstoffabschaltung  (B_dkpu) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x003A | Bedingung Startanforderung  (B_staanf) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x003B | Füllstand Kraftstofftank  (fstt) | l | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x003C | Batteriespannung; vom AD-Wandler erfasster Wert  (wub) | V | - | unsigned char | - | 0,0942 | 1 | 0,0 |
| 0x003D | Betriebszeit  (top_w) | min | - | unsigned char | - | 1536,0 | 1 | 0,0 |
| 0x003E | Notlaufposition Drosselklappe; EEPROM-Wert  (wdknlpr) | %DK | - | unsigned char | - | 0,3921568 | 1 | 0,0 |
| 0x003F | Sollwert DK-Winkel bezogen auf unteren Anschlag  (wdks) | %DK | - | unsigned char | - | 0,3921568 | 1 | 0,0 |
| 0x0040 | Notlaufposition Drosselklappe  (wdknlp) | %DK | - | unsigned char | - | 0,3921568 | 1 | 0,0 |
| 0x0042 | Kennung Generatortyp  (gentypkenn) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x0044 | Chiptemperatur Generator  (tchip) | Grad C | - | unsigned char | - | 1,0 | 1 | -40,0 |
| 0x0045 | ADC-Wert Lambdasondenspannung vor Kat  (uulsuv_w) | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0046 | Spannung PWG-Poti 1  (upwg1_w) | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0047 | Spannung PWG-Poti 2  (upwg2_w) | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0049 | ADC-Wert Lambdasondenspannung nach Kat  (uushk_w) | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x004C | Spannung Drosselklappen-Poti 2  (udkp2_w) | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x004D | Massenstrom Tankentlüftung in das Saugrohr  (mste_w) | kg/h | - | unsigned char | - | 0,078125 | 1 | 0,1 |
| 0x004E | Spannung Drosselklappen-Poti 1  (udkp1_w) | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0050 | ADC-Wert Motortemperatur  (wtmot_w) | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0051 | ADC-Wert Ansauglufttemperatur  (wtans) | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0055 | Schneller Mittelwert des Lambdaregelfaktors  (frm_w) | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x0057 | Erregerstrom Generator  (ierr) | - | - | unsigned char | - | 0,125 | 1 | 0,0 |
| 0x0058 | Drosselklappenwinkel bezogen auf unteren Anschlag  (wdkba) | %DK | - | unsigned char | - | 0,3921568 | 1 | 0,0 |
| 0x0059 | Pumpenstrom Referenzleck  (iptrefr_w) | mA | - | unsigned char | - | 0,1953125 | 1 | 0,0 |
| 0x005A | Pumpenstrom bei Grobleckmessung  (iptglmn_w) | mA | - | unsigned char | - | 0,1953125 | 1 | 0,0 |
| 0x005C | Innenwiderstand Lambdasonde nach Kat  (rinh_w) | Ohm | - | unsigned char | - | 2,0 | 1 | 0,0 |
| 0x005E | Innenwiderstand Lambdasonde nach Kat  (rinh_w) | Ohm | - | unsigned char | - | 2,0 | 1 | 0,0 |
| 0x0060 | Innenwiderstand Lambdasonde vor Kat  (rinlsu_w) | Ohm | - | unsigned char | - | 2,0 | 1 | 0,0 |
| 0x0063 | Innenwiderstand Lambdasonde vor Kat  (rinlsu_w) | Ohm | - | unsigned char | - | 2,0 | 1 | 0,0 |
| 0x0067 | Kilometerstand  (kmstand) | km | - | unsigned char | - | 2560,0 | 1 | 0,0 |
| 0x0068 | Status Standverbraucher registriert Teil 1  (statsvreg1) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x0069 | Status Standverbraucher registriert Teil 2  (statsvreg2) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x006A | Batteriespannung von IBS gemessen (ubatt_w) | V | - | unsigned char | - | 0,064 | 1 | 6 |
| 0x006B | Zeit, Ruhestrom liegt bei 80..200mA  (t2hstshort) | min | - | unsigned char | - | 14,93333 | 1 | 0,0 |
| 0x006C | Zeit, Ruhestrom liegt bei 200..1000mA  (t3hstshort) | min | - | unsigned char | - | 14,93334 | 1 | 0,0 |
| 0x006E | Zeit, Ruhestrom ist größer als 1000mA (t4hstshort) | min | - | unsigned char | - | 14,93334 | 1 | 0,0 |
| 0x006F | Multiplikative Gemischkorrektur der Gemischadaption  (fra_w) | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x0070 | ADC-Wert Umgebungsdruck  (udsu_w) | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0072 | Reglerversion Generator (bsdgenregv) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x0074 | Periodendauer des Nullgangsensorsignals (GbxNPos_tiPwmPer) | ms | - | unsigned char | - | 0,0256 | 1 | 0,0 |
| 0x0075 | Status Nullgangerkennung (stngang) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x0078 | I-Anteil der stetigen LRHK  (dlahi_w) | - | - | unsigned char | - | 0,00048828125 | 1 | 0,0 |
| 0x007A | Zustand Fahrgeschwindigkeitsregler  (zstfgr) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x007F | Tastverhältnis E-Lüfter  (taml) | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x0081 | Ist-Gang  (gangi) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x0082 | Motorstarttemperatur  (tmst) | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x0083 | Spannung Klopfwerte Zylinder 1  (rkr_w[0]) | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0085 | Spannung Klopfwerte Zylinder 3  (rkr_w[1]) | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0087 | Auslastungsgrad Generator  (dfsiggen) | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x0088 | Spannung Klopfwerte Zylinder 4  (rkr_w[2]) | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0089 | Lambda-Istwert  (lamsoni_w) | - | - | unsigned char | - | 0,0625 | 1 | 0,0 |
| 0x008B | Zeit nach Startende  (tnst) | s | - | unsigned char | - | 25,6 | 1 | 0,0 |
| 0x008C | Keramiktemperatur der LSU  (tkerlsu_w) | Grad C | - | unsigned char | - | 6,0 | 1 | -273,15 |
| 0x008D | Aktuelle Zeit Leckmessung  (tdmlka_w) | s | - | unsigned char | - | 1,6 | 1 | 0,0 |
| 0x008E | Pumpenstrom Tankdiagnose  (iptes_w) | mA | - | unsigned char | - | 0,1953125 | 1 | 0,0 |
| 0x0090 | Spannung Klopfwerte Zylinder 2  (rkr_w[3]) | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x0091 | Kupplungsmotormoment Istwert  (mkist_w) | Nm | - | unsigned char | - | 4,0 | 1 | -220,0 |
| 0x0096 | Abgastemperatur hinter Kat  (tanhkm_w) | Grad C | - | unsigned char | - | 6,0 | 1 | -273,15 |
| 0x0098 | Sollspannung Generator  (ugen) | V | - | unsigned char | - | 0,1 | 1 | 10,6 |
| 0x009A | Sauerstoffspeichervermögen des Katalysators  (oscdkta_w) | mg | - | unsigned char | - | 2,0 | 1 | 0,0 |
| 0x009E | Status VVT-Entlastungsrelais  (B_vvt) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x009F | Istwert Exenterwinkel VVT  (exwnki_w) | Grad | - | unsigned char | - | 0,8 | 1 | 0,0 |
| 0x00A0 | Sollwert Exenterwinkel VVT  (exwinks_w) | Grad | - | unsigned char | - | 0,8 | 1 | 0,0 |
| 0x00A1 | Tastverhältnis VVT-Stellmotor  (tvvvtm_w) | % | - | signed char | - | 0,78125 | 1 | 0,0 |
| 0x00A2 | Strom für VVT-Motor  (ivvtm_w) | A | - | signed char | - | 1,5625 | 1 | 0,0 |
| 0x00A4 | Spannung am Entlastungsrelais der VVT-Ansteuerung  (wuvvtr) | V | - | unsigned char | - | 0,0942 | 1 | 0,0 |
| 0x00A5 | ADC-Wert VVT-Sensorversorgungspannung  (wvvtusen) | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x00A6 | Deltawinkel Führungs- zu Referenzsensor VVT  (dwvvtfrs_w) | Grad | - | unsigned char | - | 0,703125 | 1 | 0,0 |
| 0x00A7 | VVT-Endstufentemperatur aus Modell  (tvvtes_w) | Grad C | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x00AE | Peridendauer für Massenstrom aus HFM  (tpmshfm_w) | us | - | unsigned char | - | 25,6 | 1 | 0,0 |
| 0x00B0 | Zähler für Lerndauer eines Lernsteps  (lrnstep_c) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x00B1 | Funkenbrenndauer Zylinder 1  (dztbd_w[0]) | ms | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x00B3 | Funkenbrenndauer Zylinder 3  (dztbd_w[2]) | ms | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x00B5 | Funkenbrenndauer Zylinder 2  (dztbd_w[3]) | ms | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x00B6 | Funkenbrenndauer Zylinder 4  (dztbd_w[2]) | ms | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x00B7 | Aktueller Bremsdruck  (pbrems) | bar | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x00B8 | Motordrehzahl in der Funktionsüberwachung  (nmot_um) | Upmin | - | unsigned char | - | 40,0 | 1 | 0,0 |
| 0x00B9 | Pedalsollwert in der Funktionsüberwachung  (spsn_um) | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x00BC | Relative Luftfüllung in der Funktionsüberwachung  (rl_um) | % | - | unsigned char | - | 0,75 | 1 | 0,0 |
| 0x00BF | Indiziertes Soll-Motormoment MSR  (mimsr) | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x00C1 | Korrigierte Segmentdauer  (tsk_l) | us | - | unsigned char | - | 6553,0 | 1 | 0,0 |
| 0x00C2 | Bedingung Kupplungspedal betätigt  (B_kuppl) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x00C3 | MSA NGLERN Eingangstastverhältnis  (tngang_w) | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x00C4 | MSA Bremsunterdruck  (dpbkvur_w) | hPa | - | signed char | - | 7,8125 | 1 | 0,0 |
| 0x00C5 | Kraftstofftemperatur  (tkrst) | Grad C | - | unsigned char | - | 0,75 | 1 | -48,0 |
| 0x00C6 | Abgasmassenstrom ohne Kraftstoffanteil  (msaovhk_w) | kg/h | - | unsigned char | - | 3,2 | 1 | 0,0 |
| 0x00C7 | Spannung Drucksensor Bremskraftverstärker  (udsbkv_w) | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x00C8 | Kupplung durchgetreten  (B_kupp1) | - | - | unsigned char | - | 0,0 | 1 | 0,0 |
| 0x00C9 | SWT-Fehlercode   (SiaT_Res_St) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x00CA | PD-Anteil langsam Leerlaufregelung  (dmllrp_w) | % | - | signed char | - | 0,390625 | 1 | 0,0 |
| 0x00CB | PD-Anteil schnell Leerlaufregelung  (dmllrpz_w) | % | - | signed char | - | 0,390625 | 1 | 0,0 |
| 0x00D5 | koordiniertes Moment für Füllung  (milsol_w) | % | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| 0x00DD | Summenzähler Aussetzer  (fzabgs_w) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x00DE | Funktionsinterner Zähler  (ivzabg_w) | - | - | unsigned char | - | 10,0 | 1 | 0,0 |
| 0x00E0 | Abgleich-Faktor DK-Modell  (eisydkfkaf) | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x00E1 | Abgleich-Offset DK-Modell  (eisydkkoff) | kg/h | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x00E2 | Abgleich-Faktor EV-Modell  (eisyevfkaf) | - | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| 0x00E3 | Abgleich-Offset EV-Modell  (eisyevkoff) | kg/h | - | signed char | - | 8,0 | 1 | 0,0 |
| 0x00E4 | Ist-Betriebsart  (opmodi) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x00E7 | Spannung Pedalwertgeber 1 Überwachung  (sp1s_um) | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x00E8 | Spannung Pedalwertgeber 2 Überwachung  (sp2s_um) | V | - | unsigned char | - | 0,00976525 | 1 | 0,0 |
| 0x00E9 | Heizleistungsanforderung für Lambdasondenheizung  (prhrlsu_w) | % | - | unsigned char | - | 0,78125 | 1 | 0,0 |
| 0x00EB | EGAS-Pfad  (egaspfad) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x00EC | Momenten-Pfad in Funktion und Funktionsüberwachung  (mpfad) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x00ED | Spannung Drosselklappen-Poti 1 am unteren Anschlag  (udkp1a) | V | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| 0x00EF | Tankfüllstand  (tfstq1l) | l | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x00F7 | Kühlmitteldruck in der Klimaanlage  (pac) | hPa | - | unsigned char | - | 154,2 | 1 | 0,0 |
| 0x00F8 | Intelligenter Batteriesensor Fehler 1  (ibsderrs1) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x00F9 | Intelligenter Batteriesensor Fehler 2  (ibsderrs2) | - | - | unsigned char | - | 256 | 1 | 0,0 |
| 0x00FA | Gefilterter Faktor Tankentlüftungs-Adaption  (fteadf) | - | - | signed char | - | 0,5 | 1 | 0,0 |
| 0x00FB | Prüfungszähler für TEV-Diagnose  (zdtev) | - | - | unsigned char | - | 1,0 | 1 | 0,0 |
| 0x00FF | Umweltbedingung unbekannt | - | - | unsigned char | - | 1,0 | 1 | 0,0 |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x2710 | 0x003B | 0x0001 | 0x0017 | 0x0015 |
| 0x2711 | 0x003B | 0x0001 | 0x0017 | 0x0015 |
| 0x2718 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2719 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x271B | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2727 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2728 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x272A | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x272B | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x272C | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x272E | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x272F | 0x003B | 0x0001 | 0x0017 | 0x0015 |
| 0x2733 | 0x003B | 0x0001 | 0x0017 | 0x0015 |
| 0x2734 | 0x003B | 0x0001 | 0x0017 | 0x0015 |
| 0x2735 | 0x003B | 0x0001 | 0x0017 | 0x0015 |
| 0x2736 | 0x003B | 0x0001 | 0x0017 | 0x0015 |
| 0x2738 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x273A | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x273D | 0x000C | 0x0013 | 0x0005 | 0x0015 |
| 0x273E | 0x000C | 0x0013 | 0x0005 | 0x0015 |
| 0x273F | 0x000C | 0x0013 | 0x0005 | 0x0015 |
| 0x2740 | 0x000C | 0x0013 | 0x0005 | 0x0015 |
| 0x274D | 0x000C | 0x0006 | 0x0089 | 0x006F |
| 0x274E | 0x000C | 0x0006 | 0x0089 | 0x006F |
| 0x2752 | 0x000C | 0x0006 | 0x0089 | 0x0013 |
| 0x2753 | 0x000C | 0x0006 | 0x0089 | 0x0013 |
| 0x2754 | 0x000C | 0x0006 | 0x0089 | 0x0013 |
| 0x2755 | 0x000C | 0x003B | 0x00EF | 0x000D |
| 0x2756 | 0x000C | 0x003B | 0x00EF | 0x000D |
| 0x2757 | 0x000C | 0x003B | 0x00EF | 0x000D |
| 0x2758 | 0x000C | 0x003B | 0x00EF | 0x000D |
| 0x275D | 0x000C | 0x003B | 0x00EF | 0x000D |
| 0x275E | 0x000C | 0x003B | 0x00EF | 0x000D |
| 0x275F | 0x000C | 0x003B | 0x00EF | 0x000D |
| 0x276A | 0x0089 | 0x00C6 | 0x009A | 0x0096 |
| 0x276D | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x276E | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2770 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2771 | 0x0036 | 0x00E4 | 0x00C1 | 0x003B |
| 0x2772 | 0x0036 | 0x00E4 | 0x00C1 | 0x003B |
| 0x2773 | 0x0036 | 0x00E4 | 0x00C1 | 0x003B |
| 0x2775 | 0x0036 | 0x00E4 | 0x00C1 | 0x003B |
| 0x2776 | 0x0036 | 0x00E4 | 0x00C1 | 0x003B |
| 0x2777 | 0x0036 | 0x00E4 | 0x00C1 | 0x003B |
| 0x2779 | 0x0036 | 0x00E4 | 0x00C1 | 0x003B |
| 0x277A | 0x0036 | 0x00E4 | 0x00C1 | 0x003B |
| 0x277B | 0x0036 | 0x00E4 | 0x00C1 | 0x003B |
| 0x277D | 0x0036 | 0x00E4 | 0x00C1 | 0x003B |
| 0x277E | 0x0036 | 0x00E4 | 0x00C1 | 0x003B |
| 0x277F | 0x0036 | 0x00E4 | 0x00C1 | 0x003B |
| 0x2781 | 0x0036 | 0x00E4 | 0x00C1 | 0x003B |
| 0x2782 | 0x0036 | 0x00E4 | 0x00C1 | 0x003B |
| 0x2783 | 0x0036 | 0x00E4 | 0x00C1 | 0x003B |
| 0x2789 | 0x000C | 0x000F | 0x003B | 0x0002 |
| 0x278A | 0x000C | 0x000F | 0x003B | 0x0002 |
| 0x27AC | 0x003B | 0x0001 | 0x0017 | 0x0015 |
| 0x27B0 | 0x000C | 0x0013 | 0x000D | 0x0081 |
| 0x27B1 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x27B2 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x27B4 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x27C4 | 0x000C | 0x003B | 0x00EF | 0x000D |
| 0x27C5 | 0x000C | 0x003B | 0x00EF | 0x000D |
| 0x27C6 | 0x000C | 0x003B | 0x00EF | 0x000D |
| 0x283D | 0x00E4 | 0x0005 | 0x001C | 0x001D |
| 0x2840 | 0x000C | 0x0013 | 0x0005 | 0x0015 |
| 0x2841 | 0x000C | 0x0013 | 0x0005 | 0x0015 |
| 0x2842 | 0x000C | 0x0013 | 0x0005 | 0x0015 |
| 0x2845 | 0x000C | 0x0005 | 0x001C | 0x001D |
| 0x2847 | 0x000C | 0x00A2 | 0x009F | 0x00A4 |
| 0x284F | 0x000C | 0x0005 | 0x009F | 0x00A4 |
| 0x2850 | 0x000C | 0x0005 | 0x009F | 0x00A4 |
| 0x2851 | 0x000C | 0x0005 | 0x009F | 0x00A4 |
| 0x2852 | 0x000C | 0x0005 | 0x009F | 0x00A4 |
| 0x2853 | 0x000C | 0x0005 | 0x00A5 | 0x0015 |
| 0x2854 | 0x000C | 0x0005 | 0x00A5 | 0x0015 |
| 0x2855 | 0x000C | 0x0005 | 0x00A5 | 0x0015 |
| 0x2856 | 0x000C | 0x0005 | 0x00A5 | 0x0015 |
| 0x2857 | 0x000C | 0x0005 | 0x00A5 | 0x0015 |
| 0x2858 | 0x000C | 0x0005 | 0x00A5 | 0x0015 |
| 0x2859 | 0x000C | 0x0005 | 0x00A5 | 0x0015 |
| 0x285A | 0x000C | 0x0005 | 0x00A5 | 0x0015 |
| 0x285B | 0x000C | 0x0005 | 0x009F | 0x00A4 |
| 0x285C | 0x000C | 0x0005 | 0x009F | 0x00A4 |
| 0x285D | 0x000C | 0x0005 | 0x009F | 0x00A4 |
| 0x285E | 0x000C | 0x0005 | 0x009F | 0x00A4 |
| 0x285F | 0x000C | 0x0021 | 0x00A7 | 0x0015 |
| 0x2860 | 0x000C | 0x0005 | 0x009F | 0x00A4 |
| 0x2861 | 0x000C | 0x0005 | 0x00A5 | 0x0015 |
| 0x2863 | 0x000C | 0x009F | 0x00A1 | 0x0015 |
| 0x2865 | 0x000C | 0x0013 | 0x00A1 | 0x0015 |
| 0x2868 | 0x000C | 0x00A2 | 0x009F | 0x00A4 |
| 0x2869 | 0x000C | 0x00A2 | 0x009F | 0x00A4 |
| 0x286B | 0x000C | 0x0005 | 0x009F | 0x00A4 |
| 0x286C | 0x000C | 0x0005 | 0x009F | 0x00A4 |
| 0x286D | 0x000C | 0x0005 | 0x00A5 | 0x0015 |
| 0x286E | 0x000C | 0x0005 | 0x00A5 | 0x0015 |
| 0x2870 | 0x001A | 0x001B | 0x0005 | 0x00E4 |
| 0x2877 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2878 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x287A | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x287D | 0x001A | 0x001B | 0x0005 | 0x00E4 |
| 0x2888 | 0x000C | 0x0013 | 0x0005 | 0x0015 |
| 0x288D | 0x000C | 0x0005 | 0x001C | 0x001D |
| 0x2891 | 0x000C | 0x0005 | 0x001A | 0x001B |
| 0x28B4 | 0x000C | 0x00A2 | 0x009F | 0x00A4 |
| 0x28B6 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x28B7 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x28B9 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2968 | 0x000C | 0x0005 | 0x0017 | 0x0015 |
| 0x2969 | 0x000C | 0x0005 | 0x0017 | 0x0015 |
| 0x296A | 0x000C | 0x0005 | 0x0017 | 0x0015 |
| 0x296B | 0x000C | 0x0005 | 0x0017 | 0x0015 |
| 0x296C | 0x000C | 0x0005 | 0x0017 | 0x0015 |
| 0x296D | 0x000C | 0x0005 | 0x0017 | 0x0015 |
| 0x296E | 0x000C | 0x0005 | 0x0017 | 0x0015 |
| 0x296F | 0x000C | 0x0005 | 0x0017 | 0x0015 |
| 0x2972 | 0x000C | 0x0013 | 0x0058 | 0x0015 |
| 0x2973 | 0x000C | 0x0013 | 0x0058 | 0x0015 |
| 0x2974 | 0x000C | 0x0013 | 0x0078 | 0x0058 |
| 0x2975 | 0x000C | 0x0013 | 0x0078 | 0x0058 |
| 0x2982 | 0x000C | 0x0005 | 0x0017 | 0x0015 |
| 0x2983 | 0x000C | 0x0005 | 0x0017 | 0x0015 |
| 0x2986 | 0x000C | 0x0005 | 0x0017 | 0x0015 |
| 0x2987 | 0x000C | 0x0005 | 0x0017 | 0x0015 |
| 0x297C | 0x000C | 0x0005 | 0x0017 | 0x0015 |
| 0x2A35 | 0x0030 | 0x0055 | 0x002E | 0x0045 |
| 0x2A3C | 0x0049 | 0x0045 | 0x0078 | 0x0055 |
| 0x2A3D | 0x0049 | 0x0045 | 0x0078 | 0x0055 |
| 0x2A47 | 0x0096 | 0x008C | 0x0027 | 0x008B |
| 0x2A50 | 0x000C | 0x000F | 0x0005 | 0x0015 |
| 0x2A51 | 0x000C | 0x000F | 0x0005 | 0x0015 |
| 0x2A53 | 0x000C | 0x000F | 0x0005 | 0x0015 |
| 0x2A56 | 0x005C | 0x005E | 0x002F | 0x0049 |
| 0x2A60 | 0x008C | 0x008B | 0x000D | 0x0015 |
| 0x2A61 | 0x008C | 0x008B | 0x000D | 0x0015 |
| 0x2A63 | 0x008C | 0x008B | 0x000D | 0x0015 |
| 0x2A64 | 0x0096 | 0x008C | 0x0027 | 0x008B |
| 0x2A66 | 0x0096 | 0x008C | 0x0027 | 0x008B |
| 0x2A67 | 0x0096 | 0x008C | 0x0027 | 0x008B |
| 0x2A6C | 0x0015 | 0x008B | 0x002D | 0x0045 |
| 0x2A6D | 0x0015 | 0x008B | 0x002D | 0x0045 |
| 0x2A6E | 0x0015 | 0x008B | 0x002D | 0x0045 |
| 0x2A6F | 0x0015 | 0x008B | 0x002D | 0x0045 |
| 0x2A74 | 0x005C | 0x005E | 0x002F | 0x0049 |
| 0x2A75 | 0x005C | 0x005E | 0x002F | 0x0049 |
| 0x2A77 | 0x005C | 0x005E | 0x002F | 0x0049 |
| 0x2A7C | 0x005C | 0x005E | 0x002F | 0x0049 |
| 0x2A7D | 0x005C | 0x005E | 0x002F | 0x0049 |
| 0x2A7E | 0x005C | 0x005E | 0x002F | 0x0049 |
| 0x2A7F | 0x005C | 0x005E | 0x002F | 0x0049 |
| 0x2A8B | 0x008C | 0x0016 | 0x002D | 0x0045 |
| 0x2A90 | 0x008C | 0x0016 | 0x002D | 0x0045 |
| 0x2A92 | 0x008C | 0x0016 | 0x002D | 0x0045 |
| 0x2A93 | 0x008C | 0x0016 | 0x002D | 0x0045 |
| 0x2A98 | 0x0015 | 0x000D | 0x002D | 0x0045 |
| 0x2A99 | 0x0015 | 0x000D | 0x002D | 0x0045 |
| 0x2AA3 | 0x008C | 0x0016 | 0x002D | 0x0045 |
| 0x2AAB | 0x0015 | 0x0016 | 0x002D | 0x0045 |
| 0x2AC1 | 0x0049 | 0x0045 | 0x0078 | 0x0055 |
| 0x2AC2 | 0x0049 | 0x0045 | 0x0078 | 0x0055 |
| 0x2AC3 | 0x0049 | 0x0045 | 0x0078 | 0x0055 |
| 0x2AC4 | 0x0049 | 0x0045 | 0x0078 | 0x0055 |
| 0x2ACB | 0x0015 | 0x008B | 0x002D | 0x0045 |
| 0x2ACD | 0x002F | 0x0018 | 0x0089 | 0x0049 |
| 0x2AD2 | 0x0030 | 0x0055 | 0x002E | 0x0045 |
| 0x2AF9 | 0x000C | 0x0013 | 0x0005 | 0x0015 |
| 0x2AFA | 0x000C | 0x0013 | 0x0005 | 0x0015 |
| 0x2AFC | 0x000C | 0x0013 | 0x0005 | 0x0015 |
| 0x2B01 | 0x000C | 0x0017 | 0x004C | 0x003F |
| 0x2B02 | 0x000C | 0x0017 | 0x004C | 0x003F |
| 0x2B03 | 0x000C | 0x0017 | 0x004C | 0x003F |
| 0x2B05 | 0x000C | 0x0017 | 0x004E | 0x003F |
| 0x2B06 | 0x000C | 0x0017 | 0x004E | 0x003F |
| 0x2B07 | 0x000C | 0x0017 | 0x004E | 0x003F |
| 0x2B0B | 0x000C | 0x004E | 0x004C | 0x0058 |
| 0x2B13 | 0x000C | 0x0017 | 0x004E | 0x003F |
| 0x2B15 | 0x000C | 0x000F | 0x0058 | 0x00AE |
| 0x2B16 | 0x000C | 0x000F | 0x0058 | 0x00AE |
| 0x2B1D | 0x0005 | 0x003F | 0x0058 | 0x0015 |
| 0x2B1E | 0x0005 | 0x003F | 0x0058 | 0x0015 |
| 0x2B1F | 0x0005 | 0x003F | 0x0058 | 0x0015 |
| 0x2B20 | 0x0005 | 0x003F | 0x0058 | 0x0015 |
| 0x2B21 | 0x000F | 0x0040 | 0x0058 | 0x0015 |
| 0x2B22 | 0x000F | 0x0040 | 0x0058 | 0x0015 |
| 0x2B25 | 0x000F | 0x0040 | 0x0058 | 0x0015 |
| 0x2B26 | 0x000F | 0x0040 | 0x0058 | 0x0015 |
| 0x2B2B | 0x000F | 0x003F | 0x0058 | 0x0015 |
| 0x2B2F | 0x000F | 0x0040 | 0x003E | 0x0015 |
| 0x2B31 | 0x000F | 0x003F | 0x0058 | 0x0015 |
| 0x2B32 | 0x000F | 0x003F | 0x0058 | 0x0015 |
| 0x2B39 | 0x000C | 0x000F | 0x0014 | 0x0015 |
| 0x2B3A | 0x000C | 0x000F | 0x0014 | 0x0015 |
| 0x2B3F | 0x000F | 0x004E | 0x00ED | 0x0015 |
| 0x2B43 | 0x000C | 0x000F | 0x0014 | 0x0015 |
| 0x2B47 | 0x000F | 0x004E | 0x00ED | 0x0015 |
| 0x2B49 | 0x000C | 0x0046 | 0x0047 | 0x0014 |
| 0x2B4A | 0x000C | 0x0046 | 0x0047 | 0x0014 |
| 0x2B4B | 0x000C | 0x0046 | 0x0047 | 0x0014 |
| 0x2B4C | 0x000C | 0x0046 | 0x0047 | 0x0014 |
| 0x2B4D | 0x000C | 0x0046 | 0x0047 | 0x0014 |
| 0x2B4E | 0x000C | 0x0046 | 0x0047 | 0x0014 |
| 0x2B4F | 0x000C | 0x000F | 0x0058 | 0x00AE |
| 0x2B50 | 0x000C | 0x000F | 0x0058 | 0x00AE |
| 0x2B51 | 0x000C | 0x000F | 0x0058 | 0x00AE |
| 0x2B55 | 0x000C | 0x0018 | 0x000F | 0x00AE |
| 0x2B56 | 0x000C | 0x0018 | 0x000F | 0x00AE |
| 0x2B57 | 0x000C | 0x0018 | 0x000F | 0x00AE |
| 0x2B58 | 0x000C | 0x0018 | 0x000F | 0x00AE |
| 0x2B59 | 0x000C | 0x000F | 0x0058 | 0x00AE |
| 0x2B5A | 0x000C | 0x000F | 0x0058 | 0x00AE |
| 0x2B5B | 0x000C | 0x000F | 0x0058 | 0x00AE |
| 0x2B5C | 0x000C | 0x000F | 0x0058 | 0x00AE |
| 0x2B5E | 0x000C | 0x000F | 0x0058 | 0x00AE |
| 0x2B5F | 0x000C | 0x000F | 0x0058 | 0x00AE |
| 0x2B67 | 0x000C | 0x000F | 0x0058 | 0x00AE |
| 0x2B68 | 0x000C | 0x000F | 0x0058 | 0x00AE |
| 0x2B69 | 0x000C | 0x0013 | 0x0005 | 0x00E4 |
| 0x2B6A | 0x000C | 0x0013 | 0x0005 | 0x00E4 |
| 0x2B6B | 0x000C | 0x0013 | 0x0005 | 0x00E4 |
| 0x2B7A | 0x000C | 0x0018 | 0x0058 | 0x0015 |
| 0x2BC0 | 0x0026 | 0x0021 | 0x0046 | 0x0047 |
| 0x2BC1 | 0x0026 | 0x0021 | 0x0046 | 0x0047 |
| 0x2BC2 | 0x0026 | 0x0021 | 0x0046 | 0x0047 |
| 0x2BC3 | 0x0026 | 0x0021 | 0x0046 | 0x0047 |
| 0x2BC4 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2BC5 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2BC6 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2BC7 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2BC8 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2BCB | 0x000C | 0x0013 | 0x0005 | 0x0014 |
| 0x2BCC | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2BCD | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2BCE | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2BCF | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2BD0 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2BD1 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2BD2 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2BD3 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2BD4 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2BD5 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2BD6 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2BD7 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2BD9 | 0x000C | 0x0013 | 0x0091 | 0x00EC |
| 0x2BDA | 0x000C | 0x0058 | 0x00EB | 0x0014 |
| 0x2BDB | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2BDC | 0x000C | 0x0021 | 0x0001 | 0x00BC |
| 0x2BDD | 0x000C | 0x000F | 0x0005 | 0x0015 |
| 0x2BDE | 0x000C | 0x000F | 0x0005 | 0x0015 |
| 0x2BDF | 0x000C | 0x000F | 0x0005 | 0x0015 |
| 0x2BE0 | 0x000C | 0x000F | 0x0005 | 0x0015 |
| 0x2BE1 | 0x000C | 0x000F | 0x0005 | 0x0015 |
| 0x2BE2 | 0x000C | 0x000F | 0x0005 | 0x0015 |
| 0x2BE3 | 0x000C | 0x000F | 0x0005 | 0x0015 |
| 0x2BE4 | 0x000C | 0x000F | 0x0005 | 0x0015 |
| 0x2BE5 | 0x000C | 0x000F | 0x0005 | 0x0015 |
| 0x2BE6 | 0x000C | 0x0006 | 0x0089 | 0x006F |
| 0x2BE8 | 0x0046 | 0x0047 | 0x00EB | 0x0014 |
| 0x2BE9 | 0x000C | 0x0005 | 0x008B | 0x0015 |
| 0x2BEA | 0x000C | 0x0005 | 0x008B | 0x0015 |
| 0x2BEB | 0x000C | 0x0005 | 0x008B | 0x0015 |
| 0x2C8D | 0x0068 | 0x0069 | 0x0023 | 0x006A |
| 0x2C8E | 0x0068 | 0x0069 | 0x0023 | 0x006A |
| 0x2C90 | 0x000C | 0x0044 | 0x006A | 0x0098 |
| 0x2C91 | 0x000C | 0x0044 | 0x006A | 0x0098 |
| 0x2C93 | 0x000C | 0x0044 | 0x006A | 0x0098 |
| 0x2C96 | 0x006B | 0x006C | 0x006E | 0x003D |
| 0x2C98 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2C99 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2C9A | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2C9C | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2C9D | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2C9E | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2D53 | 0x000C | 0x0018 | 0x0083 | 0x000F |
| 0x2D54 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2D55 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2D57 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2D58 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2D59 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2D5A | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2D5C | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2D5D | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2D5F | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2D60 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2D61 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2D63 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2D8B | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2D8C | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2D8D | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2D8E | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2D9B | 0x0083 | 0x0085 | 0x0088 | 0x0090 |
| 0x2D9C | 0x0083 | 0x0085 | 0x0088 | 0x0090 |
| 0x2E1C | 0x008B | 0x0035 | 0x0042 | 0x0015 |
| 0x2E20 | 0x0057 | 0x0087 | 0x0098 | 0x0015 |
| 0x2E24 | 0x0057 | 0x0087 | 0x0098 | 0x0015 |
| 0x2E28 | 0x0057 | 0x0087 | 0x0044 | 0x0015 |
| 0x2E2C | 0x0057 | 0x0087 | 0x0044 | 0x0015 |
| 0x2E30 | 0x0098 | 0x0015 | 0x0057 | 0x0087 |
| 0x2E31 | 0x0098 | 0x0015 | 0x0057 | 0x0087 |
| 0x2E32 | 0x0098 | 0x0015 | 0x0057 | 0x0087 |
| 0x2E33 | 0x0098 | 0x0015 | 0x0057 | 0x0087 |
| 0x2E34 | 0x0057 | 0x0087 | 0x0098 | 0x0015 |
| 0x2E38 | 0x0072 | 0x0035 | 0x0042 | 0x0015 |
| 0x2E3C | 0x0072 | 0x0035 | 0x0042 | 0x0015 |
| 0x2E40 | 0x000C | 0x00F8 | 0x00F9 | 0x0015 |
| 0x2E42 | 0x000C | 0x00F8 | 0x00F9 | 0x0015 |
| 0x2E43 | 0x000C | 0x00F8 | 0x00F9 | 0x0015 |
| 0x2E44 | 0x000C | 0x00F8 | 0x00F9 | 0x0015 |
| 0x2E46 | 0x000C | 0x00F8 | 0x00F9 | 0x0015 |
| 0x2E47 | 0x000C | 0x00F8 | 0x00F9 | 0x0015 |
| 0x2E48 | 0x000C | 0x00F8 | 0x00F9 | 0x0015 |
| 0x2E4A | 0x000C | 0x00F8 | 0x00F9 | 0x0015 |
| 0x2E4B | 0x000C | 0x00F8 | 0x00F9 | 0x0015 |
| 0x2E4F | 0x000C | 0x00F8 | 0x00F9 | 0x0015 |
| 0x2E67 | 0x000C | 0x00F8 | 0x00F9 | 0x0015 |
| 0x2EE0 | 0x000C | 0x0001 | 0x0017 | 0x00F7 |
| 0x2EE1 | 0x000C | 0x0001 | 0x0017 | 0x00F7 |
| 0x2EE2 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2EE3 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2EE5 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2EE6 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2EE7 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2EE8 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2EEE | 0x000C | 0x0005 | 0x0017 | 0x0051 |
| 0x2EF1 | 0x000C | 0x0005 | 0x0017 | 0x0051 |
| 0x2EF2 | 0x000C | 0x0005 | 0x0017 | 0x0051 |
| 0x2EF9 | 0x000F | 0x0018 | 0x0005 | 0x0017 |
| 0x2EFB | 0x000F | 0x0018 | 0x0005 | 0x0017 |
| 0x2F07 | 0x000F | 0x0018 | 0x0005 | 0x0017 |
| 0x2F09 | 0x000C | 0x0005 | 0x0017 | 0x0015 |
| 0x2F0A | 0x000C | 0x0005 | 0x0017 | 0x0015 |
| 0x2F19 | 0x000C | 0x000F | 0x0005 | 0x0050 |
| 0x2F1A | 0x000C | 0x000F | 0x0005 | 0x0050 |
| 0x2F22 | 0x000F | 0x0018 | 0x0005 | 0x000D |
| 0x2F23 | 0x000F | 0x0018 | 0x0005 | 0x000D |
| 0x2F25 | 0x000F | 0x0018 | 0x0005 | 0x0017 |
| 0x2F26 | 0x000F | 0x0018 | 0x0005 | 0x0017 |
| 0x2F28 | 0x000F | 0x0018 | 0x0005 | 0x0017 |
| 0x2F2F | 0x000F | 0x0018 | 0x0005 | 0x0017 |
| 0x2F30 | 0x000F | 0x0018 | 0x0005 | 0x0017 |
| 0x2F38 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2F39 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2F3A | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2F3C | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2F3D | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2F3F | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2F40 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2F41 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2F42 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2F8A | 0x0023 | 0x0000 | 0x0017 | 0x0015 |
| 0x2F8B | 0x0023 | 0x0000 | 0x0017 | 0x0015 |
| 0x2F8C | 0x0023 | 0x0000 | 0x0017 | 0x0015 |
| 0x2F8E | 0x0023 | 0x0000 | 0x0017 | 0x0015 |
| 0x2F8F | 0x0023 | 0x0000 | 0x0017 | 0x0015 |
| 0x2F92 | 0x0023 | 0x0000 | 0x0017 | 0x0015 |
| 0x2F93 | 0x0023 | 0x0000 | 0x0017 | 0x0015 |
| 0x2FAA | 0x000C | 0x0005 | 0x000D | 0x0015 |
| 0x2FAC | 0x0023 | 0x008B | 0x0017 | 0x0015 |
| 0x2FAD | 0x0023 | 0x008B | 0x0017 | 0x0015 |
| 0x2FB7 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2FC1 | 0x000C | 0x0005 | 0x000D | 0x0081 |
| 0x2FC2 | 0x00C4 | 0x00C7 | 0x000C | 0x00B7 |
| 0x2FC3 | 0x00C4 | 0x00C7 | 0x000C | 0x00B7 |
| 0x2FC4 | 0x000C | 0x0022 | 0x000D | 0x0023 |
| 0x2FC5 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2FC6 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2FCD | 0x000B | 0x0013 | 0x0070 | 0x0001 |
| 0x2FCE | 0x000B | 0x0013 | 0x0070 | 0x0001 |
| 0x2FCF | 0x000B | 0x0013 | 0x0070 | 0x0001 |
| 0x2FD0 | 0x000B | 0x0013 | 0x0070 | 0x0001 |
| 0x2FD6 | 0x000C | 0x0021 | 0x008B | 0x0015 |
| 0x2FD7 | 0x000C | 0x0021 | 0x008B | 0x0015 |
| 0x2FD9 | 0x000C | 0x0021 | 0x008B | 0x0015 |
| 0x2FDA | 0x000C | 0x0021 | 0x008B | 0x0015 |
| 0x2FDB | 0x000C | 0x0021 | 0x008B | 0x0015 |
| 0x2FDC | 0x000C | 0x0021 | 0x008B | 0x0015 |
| 0x2FDD | 0x000C | 0x0021 | 0x008B | 0x0015 |
| 0x2FDE | 0x000C | 0x0021 | 0x008B | 0x0015 |
| 0x2FDF | 0x000C | 0x0021 | 0x008B | 0x0015 |
| 0x2FE0 | 0x000C | 0x0021 | 0x008B | 0x0015 |
| 0x2FE2 | 0x000C | 0x0021 | 0x008B | 0x0015 |
| 0x2FE4 | 0x000C | 0x0021 | 0x008B | 0x0015 |
| 0x2FE5 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2FE6 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2FE7 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2FF2 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2FF3 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x2FF4 | 0x000C | 0x0013 | 0x000D | 0x0081 |
| 0x2FF5 | 0x000C | 0x0013 | 0x000D | 0x0081 |
| 0x2FF6 | 0x000C | 0x0013 | 0x000D | 0x0081 |
| 0x2FF7 | 0x000C | 0x0013 | 0x000D | 0x0081 |
| 0x2FF9 | 0x000C | 0x0013 | 0x000D | 0x0081 |
| 0x2FFE | 0x000C | 0x0013 | 0x000D | 0x0081 |
| 0x2FFF | 0x000C | 0x0013 | 0x000D | 0x0081 |
| 0x3000 | 0x000C | 0x0013 | 0x000D | 0x0081 |
| 0x300A | 0x00C4 | 0x00C7 | 0x000C | 0x00B7 |
| 0x301C | 0x0015 | 0x000C | 0x003A | 0x0038 |
| 0x301D | 0x0015 | 0x000C | 0x003A | 0x0038 |
| 0x301E | 0x0015 | 0x000C | 0x003A | 0x0038 |
| 0x3026 | 0x00C3 | 0x000C | 0x000D | 0x0075 |
| 0x3028 | 0x00C3 | 0x000C | 0x000D | 0x0017 |
| 0x3029 | 0x00C3 | 0x000C | 0x000D | 0x0017 |
| 0x302E | 0x00C3 | 0x000C | 0x000D | 0x0017 |
| 0x302F | 0x00C3 | 0x000C | 0x000D | 0x0017 |
| 0x3031 | 0x0074 | 0x000C | 0x000D | 0x0017 |
| 0x3032 | 0x00C3 | 0x000C | 0x0014 | 0x0091 |
| 0x3036 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x303E | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x3043 | 0x00C8 | 0x000C | 0x003A | 0x0038 |
| 0x3013 | 0x000C | 0x0006 | 0x0089 | 0x006F |
| 0x3014 | 0x000C | 0x0006 | 0x0089 | 0x006F |
| 0x3015 | 0x000C | 0x0006 | 0x0089 | 0x006F |
| 0x3016 | 0x000C | 0x0006 | 0x0089 | 0x006F |
| 0x3020 | 0x000C | 0x0006 | 0x0089 | 0x006F |
| 0x3021 | 0x000C | 0x0006 | 0x0089 | 0x006F |
| 0x3022 | 0x000C | 0x0006 | 0x0089 | 0x006F |
| 0x3023 | 0x000C | 0x0006 | 0x0089 | 0x006F |
| 0x3024 | 0x000C | 0x0006 | 0x0089 | 0x006F |
| 0x3025 | 0x000C | 0x0006 | 0x0089 | 0x006F |
| 0x3091 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x3094 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x3095 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x3096 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x3097 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x3098 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x3099 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x309D | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x309F | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x30A0 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x30A1 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x30A4 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x30A5 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x30A6 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x30A7 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x30A8 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x30A9 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x30AA | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x30AB | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x30AD | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x30AE | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x30AF | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x30B0 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x30B2 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x30B5 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x30BA | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x30BB | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x30C0 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x30C1 | 0x000C | 0x0021 | 0x000D | 0x0015 |
| 0x31BE | 0x000C | 0x0021 | 0x000D | 0x0015 |

### FARTTEXTEERWEITERT

| ARTMASKE | ARTNR | ARTTEXT |
| --- | --- | --- |
| xxxxxxx0 | 10 | --                          |
| xxxxxxx1 | 11 | Diagnose aktiv            |
| xxxxxx0x | 20 | --                          |
| xxxxxx1x | 21 | Diagnose gestoppt         |
| xxxxx0xx | 30 | --                          |
| xxxxx1xx | 31 | Zyklus-Flag gesetzt       |
| xxxx0xxx | 40 | --                          |
| xxxx1xxx | 41 | Error-Flag gesetzt        |
| xxx0xxxx | 50 | --                          |
| xxx1xxxx | 51 | MIL ein                   |
| xx0xxxxx | 60 | --                          |
| xx1xxxxx | 61 | Fehler in Entprellphase   |

### MESSWERTETAB

| ARG | ID | RESULTNAME | INFO | EINHEIT | LABEL | L/H | DATENTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ABSCHKOR | 0x460D | STAT_KORREKTUR_ABSCHALTUNG_WERT | Korrekturwert Abschaltung |  % | abschkor_w | - | unsigned integer | - | 0,004 | 1 | -100,0 |
| AVKATF | 0x5A91 | STAT_KAT_DIAGNOSE_WERT | Amplitudenverhältnis laafh/laafv gefiltert | - | avkatf | - | unsigned char | - | 0,00390625 | 1 | 0,0 |
| B_ADMTMV | 0x5A67 | STAT_DMTLV_AKTIV_WERT | Bedingung DMTL-Magnetventil an | - | B_admtmv | - | unsigned char | - | 1,0 | 1 | 0,0 |
| B_ADMTPM | 0x5A66 | STAT_DMTLP_AKTIV_WERT | Bedingung DMTL-Pumpenmotor an | - | B_admtpm | - | unsigned char | - | 1,0 | 1 | 0,0 |
| B_BL | 0x5A60 | STAT_BL_AKTIV_WERT | Bedingung Bremslichtschalter betätigt | - | B_bl | - | unsigned char | - | 1,0 | 1 | 0,0 |
| B_BR | 0x5A61 | STAT_BR_AKTIV_WERT | Bedingung Bremslichtschalter betätigt | - | B_br | - | unsigned char | - | 1,0 | 1 | 0,0 |
| B_DKPU | 0x5839 | STAT_SKA_AKTIV_WERT | Bedingung Sicherheitskraftstoffabschaltung (SKA) | - | B_dkpu | - | unsigned char | - | 1,0 | 1 | 0,0 |
| B_EKP | 0x5A1B | STAT_KRAFTSTOFFVERSORGUNG_AKTIV_WERT | Freigabe der EKP-Versorgung | - | B_ekp | - | unsigned char | - | 1,0 | 1 | 0,0 |
| B_EPCL | 0x5A6B | STAT_EPCL_AKTIV_WERT | EGAS Lampe Ein | - | B_epcl | - | unsigned char | - | 1,0 | 1 | 0,0 |
| B_ESTART | 0x4805 | STAT_KL50_AKTIV_WERT | Bedingung KL 50 ein | - | B_estart | - | unsigned char | - | 1,0 | 1 | 0,0 |
| B_HSHA | 0x5A54 | STAT_HEIZUNG_LSHK_AKTIV_WERT | Bedingung Sonde hinter Kat ausreichend beheizt | - | B_hsha | - | unsigned char | - | 1,0 | 1 | 0,0 |
| B_HSTLSUA | 0x5A56 | STAT_HEIZUNG_LSVK_AKTIV_WERT | Bedingung Sonde vor Kat ausreichend beheizt | - | B_hstlsua | - | unsigned char | - | 1,0 | 1 | 0,0 |
| B_KL | 0x5A36 | STAT_KLOPFER_ERKANNT_AKTIV_WERT | Bedingung für erkannte Klopfer | - | B_kl | - | unsigned char | - | 1,0 | 1 | 0,0 |
| B_KOE | 0x4803 | STAT_KLIMAKOMPRESSOR_AKTIV_WERT | Bedingung für Kompressoreinschalten | - | B_koe | - | unsigned char | - | 1,0 | 1 | 0,0 |
| B_KUPPL | 0x4800 | STAT_KUPPLUNG_AKTIV_WERT | Bedingung Kupplungspedal betätigt | - | B_kuppl | - | unsigned char | - | 1,0 | 1 | 0,0 |
| B_LL | 0x4809 | STAT_LL_AKTIV_WERT | Bedingung Leerlauf aktiv | - | B_ll | - | unsigned char | - | 1,0 | 1 | 0,0 |
| B_LRFOFF | 0x4618 | STAT_GENERATOR_AKTIV_WERT | Drehzahlschwelle für LR-Funktion Generator aktiv | - | B_lrfoff | - | unsigned char | - | 1,0 | 1 | 0,0 |
| B_MIEXT | 0x582B | STAT_EXT_MOMENTENEINGRIFF_AKTIV_WERT | Bedingung externer Momenteneingriff | - | B_miext | - | unsigned char | - | 1,0 | 1 | 0,0 |
| B_MIL | 0x5A69 | STAT_MIL_AKTIV_WERT | MIL Lampe Ein | - | B_mil | - | unsigned char | - | 1,0 | 1 | 0,0 |
| B_OELDR | 0x5A62 | STAT_OELDRUCKSCHALTER_AKTIV_WERT | Bedingung Öldruckschalter aktiv | - | B_oeldr | - | unsigned char | - | 1,0 | 1 | 0,0 |
| B_SBBVK | 0x4700 | STAT_LSVK_BETRIEBSBEREIT_WERT | Bedingung Sonde betriebsbereit vor Kat | - | B_sbbvk | - | unsigned char | - | 1,0 | 1 | 0,0 |
| B_SPORT | 0x4802 | STAT_SPORTMODUS_AKTIV_WERT | Bedingung Sportmodus aktiv | - | B_sport | - | unsigned char | - | 1,0 | 1 | 0,0 |
| B_STA | 0x5ABD | STAT_STARTERRELAIS_AKTIV_WERT | Starterrelais aktiv | - | B_sta | - | unsigned char | - | 1,0 | 1 | 0,0 |
| B_VSEANSCH | 0x5A97 | STAT_EINLASS_VANOS_IM_ANSCHLAG_AKTIV_WERT | Bedingung Vanos Einlass im Anschlag aktiv | - | B_vseansch | - | unsigned char | - | 1,0 | 1 | 0,0 |
| B_VVT | 0x589E | STAT_VVT_ENTLASTUNGSRELAIS_ANGESTEUERT_WERT | Bedingung VVT-Entlastungsrelais angesteuert | - | B_vvt | - | unsigned char | - | 1,0 | 1 | 0,0 |
| BSDGENCV | 0x4605 | STAT_CHIPVERSION_GENERATOR_WERT | Chipversion Generator 1 | - | Bsdgencv | - | unsigned char | - | 1,0 | 1 | 0,0 |
| BSDGENREGV | 0x4606 | STAT_REGLERVERSION_GENERATOR_WERT | Reglerversion Generator 1 | - | bsdgenregv | - | unsigned char | - | 1,0 | 1 | 0,0 |
| DFMONITOR | 0x460F | STAT_BATTERIELADEZUSTAND_WERT | Batterieladezustand |  % | dfmonitor | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| DFSIGGEN | 0x4614 | STAT_DFSIGGEN_WERT | Auslastungsgrad Generator |  % | dfsiggen | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| DLAHI | 0x5878 | STAT_I_ANTEIL_LRHK_WERT | I-Anteil der stetigen LRHK |    | dlahi_w | - | unsigned char | - | 0,00048828125 | 1 | 0,0 |
| DMLLRP | 0x58CA | STAT_DMLLRP_WERT | Geforderte Drehmomentänderung von der LLR (P-Anteil) |  % | dmllrp_w | - | signed char | - | 0,390625 | 1 | 0,0 |
| DMLLRPZ | 0x58CB | STAT_DMLLRPZ_WERT | Geforderte Drehmomentänderung von der LLR (P-Zündungsanteil) |  % | dmllrpz_w | - | signed char | - | 0,390625 | 1 | 0,0 |
| DPS | 0x4205 | STAT_SAUGROHRDRUCK_WERT | Saugrohrdruck |  hPa | dps_w | - | signed integer | - | 0,0390625 | 1 | 0,0 |
| DWVVTFRS | 0x58A6 | STAT_DELTA_VVT_RS_FS_WERT | Deltawinkel Führungs- zu Referenzsensor VVT |  Grad | dwvvtfrs_w | - | unsigned char | - | 0,703125 | 1 | 0,0 |
| DYNLSU | 0x5830 | STAT_LSU_DYNAMIK_WERT | Dynamikwert der LSU | - | dynlsu_w | - | unsigned char | - | 0,015625 | 1 | 0,0 |
| DZTBD_ZYL1 | 0x58B1 | STAT_FUNKENBRENNDAUER_ZYL1_WERT | Funkenbrenndauer Zylinder 1 |  ms | dztbd_w[0] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| DZTBD_ZYL2 | 0x58B5 | STAT_FUNKENBRENNDAUER_ZYL2_WERT | Funkenbrenndauer Zylinder 2 |  ms | dztbd_w[3] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| DZTBD_ZYL3 | 0x58B3 | STAT_FUNKENBRENNDAUER_ZYL3_WERT | Funkenbrenndauer Zylinder 3 |  ms | dztbd_w[1] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| DZTBD_ZYL4 | 0x58B6 | STAT_FUNKENBRENNDAUER_ZYL4_WERT | Funkenbrenndauer Zylinder 4 |  ms | dztbd_w[2] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| EGASPFAD | 0x58EB | STAT_EGASPFAD_WERT | EGAS-Pfad | - | egaspfad | - | unsigned char | - | 1,0 | 1 | 0,0 |
| EISYDKFKAF | 0x58E0 | STAT_EISYDKFKAF_WERT | Abgleichsfaktor DK-Modell | - | eisydkfkaf | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| EISYDKKOFF | 0x58E1 | STAT_EISYDKKOFF_WERT | Offset Abgleich DK-Modell |  kg/h | eisydkkoff | - | signed char | - | 8,0 | 1 | 0,0 |
| EISYEVFKAF | 0x58E2 | STAT_EISYEVFAKF_WERT | Abgleichsfaktor EV-Modell | - | eisyevfkaf | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| EISYEVKOFF | 0x58E3 | STAT_EISYEVKOFF_WERT | Offset Abgleich DK-Modell |  kg/h | eisyevkoff | - | signed char | - | 8,0 | 1 | 0,0 |
| HUBADMROFS | 0x4501 | STAT_OFFSET_HUBADAPTION_ISTWERT_WERT | Istwert Offset Hubadaption | - | hubadmrofs_w | - | signed integer | - | 0,0010000000474974513 | 1 | 0,0 |
| EXWNKI | 0x4500 | STAT_VVT_EXCENTER_IST_WERT | VVT-Excenter-Istwert |  Grad | exwnki_w | - | unsigned integer | - | 0,1 | 1 | 0,0 |
| EXWINKS | 0x58A0 | STAT_VVT_EXCENTER_SOLL_WERT | VVT-Excenter-Sollwert |  Grad | exwinks_w | - | unsigned char | - | 0,8 | 1 | 0,0 |
| EXWNSTST | 0x4504 | STAT_TESTER_VVT_SOLL_WERT | VVT- Sollwinkel durch Tester |  Grad  | exwnstst_w | - | unsigned integer | - | 0,1 | 1 | 0,0 |
| FKMSDK | 0x5A19 | STAT_FKMSDK_WERT | Korrekturfaktor Massenstrom Nebenfüllungssignal | - | fkmsdk_w | - | unsigned integer | - | 0,00006103515625 | 1 | 0,0 |
| FLGLRS | 0x5802 | STAT_ZUSTAND_LAMBDAREGELUNG_WERT | Zustand Lambdaregelung | - | flglrs | - | unsigned char | - | 1,0 | 1 | 0,0 |
| FOFSTAT | 0x5A99 | STAT_FUEL_OFF_ADAPTION_WERT | Status der fuel-off Adaption im aktuellen Betriebsbereich | - | fofstat | - | unsigned char | - | 1,0 | 1 | 0,0 |
| FR | 0x5806 | STAT_INT_WERT | Lambdaregler-Ausgang | - | fr_w | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| FRAO | 0x5A89 | STAT_MUL_ADAPTION_HOHE_LAST_WERT | Multipikativer Gemischadaptionsfaktor bei hoher Last | - | frao_w | - | unsigned integer | - | 0,000030517578125 | 1 | 0,0 |
| FRAU | 0x5A8B | STAT_MUL_ADAPTION_NIEDRIGE_LAST_WERT | Multipikativer Gemischadaptionsfaktor bei niedriger Last | - | frau_w | - | unsigned integer | - | 0,000030517578125 | 1 | 0,0 |
| FRM | 0x5855 | STAT_LAMBDAREGELFAKTOR_WERT | Schneller Mittelwert des Lambdaregelfaktors | - | frm_w | - | unsigned char | - | 0,0078125 | 1 | 0,0 |
| FSTT | 0x583B | STAT_FUELLSTAND_KRAFTSTOFFTANK_WERT | Füllstand Kraftstofftank |  l | fstt | - | unsigned char | - | 1,0 | 1 | 0,0 |
| FTEADF | 0x58FA | STAT_FTEADF_WERT | Gefilterter Faktor Tankentlüftungs-Adaption | - | fteadf | - | signed char | - | 0,5 | 1 | 0,0 |
| FZABGS | 0x58DD | STAT_SUMMENZAEHLER_AUSSETZER_WERT | Summenzähler Aussetzer | - | fzabgs_w | - | unsigned char | - | 1,0 | 1 | 0,0 |
| FZABGZYL1 | 0x5AF6 | STAT_ZYL1_ANZ_AUSSETZER_WERT | Aussetzerzähler Zylinder 1 | - | fzabgzyl_w[0] | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| FZABGZYL2 | 0x5AF7 | STAT_ZYL2_ANZ_AUSSETZER_WERT | Aussetzerzähler Zylinder 2 | - | fzabgzyl_w[3] | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| FZABGZYL3 | 0x5AF8 | STAT_ZYL3_ANZ_AUSSETZER_WERT | Aussetzerzähler Zylinder 3 | - | fzabgzyl_w[1] | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| FZABGZYL4 | 0x5AF9 | STAT_ZYL4_ANZ_AUSSETZER_WERT | Aussetzerzähler Zylinder 4 | - | fzabgzyl_w[2] | - | unsigned integer | - | 1,0 | 1 | 0,0 |
| GANGI | 0x5881 | STAT_IST_GANG_WERT | Ist-Gang | - | gangi | - | unsigned char | - | 1,0 | 1 | 0,0 |
| GENMANUFAK | 0x4607 | STAT_HERSTELLERCODE_GENERATOR_WERT | Kennung Generator Hersteller | - | genmanufak | - | unsigned char | - | 1,0 | 1 | 0,0 |
| GENTYPKENN | 0x4608 | STAT_TYPKENNUNG_GENERATOR_WERT | Kennung Generatortyp | - | gentypkenn | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IBSDERRS1 | 0x58F8 | STAT_IBS_FEHLER1_WERT | Intelligenter Batteriesensor Fehler 1 | - | ibsderrs1 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| IBSDERRS2 | 0x58F9 | STAT_IBS_FEHLER2_WERT | Intelligenter Batteriesensor Fehler 2 | - | ibsderrs2 | - | unsigned char | - | 256 | 1 | 0,0 |
| IERR | 0x4612 | STAT_ERREGERSTROM_GENERATOR_WERT | Erregerstrom Generator |  A | ierr | - | unsigned char | - | 0,125 | 1 | 0,0 |
| IERRFGRENZ | 0x4615 | STAT_IERRFGRENZ_WERT | Kopie begrenzter Erregerstrom Generator 1 |  A | ierrfgrenz | - | unsigned char | - | 0,125 | 1 | 0,0 |
| IPBUS | 0x5A1E | STAT_IPBUS_WERT | Differenz zwischen Umgebungsdruck und  Bremskraftverstärker-Druck von Drucksensor (Rohwert) | hPa | dpbkvur_w | - | signed integer | - | 0,0390625 | 1 | 0,0 |
| IUBUS | 0x5A1D | STAT_IUBUS_WERT | Spannung Drucksensor Bremskraftverstärker | V | udsbkv_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| IPTES | 0x588E | STAT_PUMPENSTROM_TANKDIAGNOSE_WERT | Pumpenstrom Tankdiagnose |  mA | iptes_w | - | unsigned char | - | 0,1953125 | 1 | 0,0 |
| IPTGLMN | 0x585A | STAT_PUMPENSTROM_GROBLECK_WERT | Pumpenstrom bei Grobleckmessung |  mA | iptglmn_w | - | unsigned char | - | 0,1953125 | 1 | 0,0 |
| IPTREFR | 0x5859 | STAT_PUMPENSTROM_REFERENZLECK_WERT | Pumpenstrom Referenzleck |  mA | iptrefr_w | - | unsigned char | - | 0,1953125 | 1 | 0,0 |
| IVVTM | 0x58A2 | STAT_VVT_MOTORSTROM_WERT | Strom für VVT-Motor |  A | ivvtm_w | - | signed char | - | 1,5625 | 1 | 0,0 |
| IVZABG | 0x58DE | STAT_FUNKINTERNER_ZAEHLER_WERT | Funktionsinterner Zähler | - | ivzabg_w | - | unsigned char | - | 10,0 | 1 | 0,0 |
| KMSTAND | 0x480A | STAT_KMSTAND_WERT | Wegstrecke_km auf 1km genau |  km | kmstand_l | - | unsigned long | - | 1,0 | 1 | 0,0 |
| KUSVK | 0x582D | STAT_KUSVK_WERT | Korrekturwert der LSU-Spannung vor Kat |  V | kusvk_w | - | signed char | - | 0,001953125 | 1 | 0,0 |
| KVA_KORR | 0x5A6C | STAT_KVA_KORR_WERT | Korrekturfaktor für die Kraftstoffmenge |  % | kva_korr | - | signed char | - | 0,001 | 1 | 0,0 |
| L_FGR | 0x5A6A | STAT_FGR_AKTIV_WERT | FGR Lampe Ein | - | L_fgr | - | unsigned char | - | 1,0 | 1 | 0,0 |
| LAENDER_FAK1 | 0x440D | STAT_LAENDERFAKTOR1_WERT | Länderfaktor 1 | - | ozlf1t | - | unsigned char | - | 0,01 | 1 | 0,0 |
| LAENDER_FAK1_COD | 0x440B | STAT_LAENDERFAKTOR1_CODIERT_WERT | CodingDataSet-ÖL-Länderfaktor1 - EEPROM | - | ozlf1c_eep | - | unsigned char | - | 0,01 | 1 | 0,0 |
| LAENDER_FAK2 | 0x440E | STAT_LAENDERFAKTOR2_WERT | Länderfaktor 2 | - | ozlf2t | - | unsigned char | - | 0,01 | 1 | 0,0 |
| LAENDER_FAK2_COD | 0x440C | STAT_LAENDERFAKTOR2_CODIERT_WERT | CodingDataSet-ÖL-Länderfaktor2 - EEPROM | - | ozlf2c_eep | - | unsigned char | - | 0,01 | 1 | 0,0 |
| LAMSAM | 0x582E | STAT_LAMSAM_WERT | Lambdaamplitude nach Filterung | - | lamsam_w | - | signed char | - | 0,0625 | 1 | 0,0 |
| LAMSBG | 0x4704 | STAT_LAMBDA_SOLLBEGRENZUNG_WERT | Lambdasoll Begrenzung | - | lamsbg_w | - | unsigned integer | - | 0,000244140625 | 1 | 0,0 |
| LAMSONI | 0x5A50 | STAT_LAMBDA_IST_WERT | Lambda-Istwert | - | lamsoni_w | - | unsigned integer | - | 0,000244140625 | 1 | 0,0 |
| LAMSONS | 0x5816 | STAT_LAMBDA_SOLL_WERT | Lambda-Sollwert | - | lamsons_w | - | unsigned char | - | 0,0625 | 1 | 0,0 |
| LAMZAK | 0x582C | STAT_LAMZAK_WERT | Lambdasondenistwert, korrigiert um Zusatzamplitude | - | lamzak_w | - | unsigned char | - | 0,0625 | 1 | 0,0 |
| LRNSTEP | 0x58B0 | STAT_DK_LERNSTEP_WERT | DK-Adaptionsschritt | - | lrnstep_c | - | unsigned char | - | 1,0 | 1 | 0,0 |
| LUTSKZYL1 | 0x5A30 | STAT_ZYL1_LAUFUNRUHE_WERT | Laufunruhe Zylinder 1 |  sec-1 | lutskzyl_w[0] | - | signed integer | - | 0,007105427358 | 1 | 0,0 |
| LUTSKZYL2 | 0x5A31 | STAT_ZYL2_LAUFUNRUHE_WERT | Laufunruhe Zylinder 2 |  sec-1 | lutskzyl_w[3] | - | signed integer | - | 0,007105427358 | 1 | 0,0 |
| LUTSKZYL3 | 0x5A32 | STAT_ZYL3_LAUFUNRUHE_WERT | Laufunruhe Zylinder 3 |  sec-1 | lutskzyl_w[1] | - | signed integer | - | 0,007105427358 | 1 | 0,0 |
| LUTSKZYL4 | 0x5A33 | STAT_ZYL4_LAUFUNRUHE_WERT | Laufunruhe Zylinder 4 |  sec-1 | lutskzyl_w[2] | - | signed integer | - | 0,007105427358 | 1 | 0,0 |
| MDGENVF | 0x4617 | STAT_MDGENVF_WERT | Gefiltertes Generatormoment absolut |  % | mdgenvf_w | - | unsigned integer | - | 0,00152588 | 1 | 0,0 |
| MILSOL | 0x58D5 | STAT_MILSOL_WERT | Koordiniertes Moment für Füllung |  % | milsol_w | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| MIMSR | 0x58BF | STAT_MIMSR_WERT | Indiziertes Soll-Motormoment MSR |  % | mimsr | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| MKIST | 0x5891 | STAT_KUPPLUNGSMOTORMOMENT_IST_WERT | Kupplungsmotormoment Istwert |  Nm | mkist_w | - | unsigned char | - | 4,0 | 1 | -220 |
| ML | 0x5ABC | STAT_LUFTMASSE_WERT | Luftmassenfluss gefiltert |  kg/h | ml_w | - | unsigned integer | - | 0,1 | 1 | 0,0 |
| MPFAD | 0x58EC | STAT_MPFAD_WERT | Momenten-Pfad in Funktion und Funktionsüberwachung | - | mpfad | - | unsigned char | - | 1,0 | 1 | 0,0 |
| MSAOVHK | 0x58C6 | STAT_MSAOVHK_WERT | Abgasmassenstrom ohne Kraftstoffanteil |  kg/h | msaovhk_w | - | unsigned char | - | 3,2 | 1 | 0,0 |
| MSHFM | 0x4203 | STAT_MSHFM_WERT | Luftmassenstrom HFM | kg/h | mshfm_w | - | unsigned integer | - | 0,1 | 1 | 0,0 |
| MSTE | 0x584D | STAT_MSTE_WERT | Massenstrom Tankentlüftung in das Saugrohr |  kg/h | mste_w | - | unsigned char | - | 0,078125 | 1 | 0,0 |
| NGFIL | 0x5836 | STAT_DREHZAHLGRADIENT_WERT | Gefilterter Drehzahlgradient |  1/min/s | ngfil | - | signed char | - | 100,0 | 1 | 0,0 |
| NMOT | 0x4807 | STAT_DREHZAHL_WERT | Motordrehzahl |  Upmin | nmot_w | - | unsigned integer | - | 0,25 | 1 | 0,0 |
| NMOT_UM | 0x58B8 | STAT_DREHZAHL_UEBERWACHUNG_WERT | Motordrehzahl in der Funktionsüberwachung |  Upmin | nmot_um | - | unsigned char | - | 40,0 | 1 | 0,0 |
| NSOL | 0x4808 | STAT_SOLLDREHZAHL_WERT | Leerlaufsolldrehzahl |  Upmin | nsol_w | - | unsigned integer | - | 0,25 | 1 | 0,0 |
| NWA1_POS | 0x4507 | STAT_AUSLASS_NOCKENWELLENPOSITION_WERT | Nockenwellenposition Auslass |  Grad KW | Nwa1_pos | - | unsigned integer | - | 0,1 | 1 | 0,0 |
| NWE1_POS | 0x4506 | STAT_EINLASS_NOCKENWELLENPOSITION_WERT | Nockenwellenposition Einlass |  Grad KW | Nwe1_pos | - | unsigned integer | - | 0,1 | 1 | 0,0 |
| OPMODI | 0x58E4 | STAT_BETRIEBSART_WERT | Ist-Betriebsart | - | opmodi | - | unsigned char | - | 1,0 | 1 | 0,0 |
| OSCDKTA | 0x589A | STAT_KAT_SPEICHERVERMOEGEN_WERT | Sauerstoffspeichervermögen des Katalysators |  mg | oscdkta_w | - | unsigned char | - | 2,0 | 1 | 0,0 |
| OZKVBSM | 0x4403 | STAT_KRAFTSTOFFVERBRAUCH_WERT | Kraftstoffverbrauch seit letztem Service | - | ozkvbsm_ul | - | unsigned long | - | 0,00012207 | 1 | 0,0 |
| PAC | 0x58F7 | STAT_KUEHLMITTELDRUCK_KLIMAANLAGE_WERT | Kühlmitteldruck in der Klimaanlage |  hPa | pac | - | unsigned char | - | 154,2 | 1 | 0,0 |
| PBREMS | 0x58B7 | STAT_BREMSDRUCK_WERT | Aktueller Bremsdruck |  bar | pbrems | - | unsigned char | - | 1,0 | 1 | 0,0 |
| PHLSNH | 0x5A59 | STAT_LSHHK_WERT | Heizleistung der Lambdasonde hinter Kat | - | phlsnh | - | unsigned char | - | 0,01 | 1 | 0,0 |
| PRHRLSU | 0x58E9 | STAT_PRHRLSU_WERT | Heizleistungsanforderung für Lambdasondenheizung |  % | prhrlsu_w | - | unsigned char | - | 0,78125 | 1 | 0,0 |
| PS | 0x4202 | STAT_SAUGROHRDRUCK_WERT | Saugrohrdruck |  hPa | ps_w | - | unsigned integer | - | 0,0390626 | 1 | 0,001 |
| PU | 0x4201 | STAT_UMGEBUNGSDRUCK_WERT | Umgebungsdruck |  hPa | pu_w | - | unsigned integer | - | 0,0390625 | 1 | 0,0 |
| PUR | 0x5834 | STAT_UMGEBUNGSDRUCK_SENSOR_WERT | Umgebungsdruck vom Sensor |  hPa | pur_w | - | unsigned char | - | 7,8125 | 1 | 0,0 |
| QSTRTFGK | 0x460E | STAT_ABST_STARTFAEHIGKEITSGRENZE_WERT | Abstand zur Startfähigkeitsgrenze |  Ah | qstrtfgk_w | - | unsigned integer | - | 0,018204444 | 1 | 0,0 |
| RINH_HB | 0x585C | STAT_INNENWIDERSTAND_LSHK_HB_WERT | Innenwiderstand Lambdasonde nach Kat |  Ohm | rinh_w_HB | - | unsigned char | - | 2,0 | 1 | 0,0 |
| RINH_LB | 0x585E | STAT_INNENWIDERSTAND_LSHK_LB_WERT | Innenwiderstand Lambdasonde nach Kat |  Ohm | rinh_w_LB | - | unsigned char | - | 2,0 | 1 | 0,0 |
| RINLSU_HB | 0x5860 | STAT_INNENWIDERSTAND_LSVK_HB_WERT | Innenwiderstand Lambdasonde vor Kat |  Ohm | rinlsu_w_HB | - | unsigned char | - | 2,0 | 1 | 0,0 |
| RINLSU_LB | 0x5863 | STAT_INNENWIDERSTAND_LSVK_LB_WERT | Innenwiderstand Lambdasonde vor Kat |  Ohm | rinlsu_w_LB | - | unsigned char | - | 2,0 | 1 | 0,0 |
| RKAT | 0x5807 | STAT_ADD_WERT | Additive Gemischkorrektur der Gemischadaption |  % | rkat_w | - | signed char | - | 0,2 | 1 | 0,0 |
| RKR_ZYL1 | 0x5883 | STAT_SPANNUNG_KLOPFWERT_ZYL1_WERT | Spannung Klopfwerte Zylinder 1 |  V | rkr_w[0] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| RKR_ZYL2 | 0x5890 | STAT_SPANNUNG_KLOPFWERT_ZYL2_WERT | Spannung Klopfwerte Zylinder 2 |  V | rkr_w[3] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| RKR_ZYL3 | 0x5885 | STAT_SPANNUNG_KLOPFWERT_ZYL3_WERT | Spannung Klopfwerte Zylinder 3 |  V | rkr_w[1] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| RKR_ZYL4 | 0x5888 | STAT_SPANNUNG_KLOPFWERT_ZYL4_WERT | Spannung Klopfwerte Zylinder 4 |  V | rkr_w[2] | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| RKRNV6_ZYL1 | 0x5A37 | STAT_ZYL1_REFERENZPEGEL_KLOPFREGELUNG_WERT | Referenzpegel Klopfregelung Zyl1 (Bezugspunkt Verstärkung 6) |  V | rkrnv6_w[0] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| RKRNV6_ZYL2 | 0x5A38 | STAT_ZYL2_REFERENZPEGEL_KLOPFREGELUNG_WERT | Referenzpegel Klopfregelung Zyl2 (Bezugspunkt Verstärkung 6) |  V | rkrnv6_w[3] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| RKRNV6_ZYL3 | 0x5A39 | STAT_ZYL3_REFERENZPEGEL_KLOPFREGELUNG_WERT | Referenzpegel Klopfregelung Zyl3 (Bezugspunkt Verstärkung 6) |  V | rkrnv6_w[1] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| RKRNV6_ZYL4 | 0x5A3A | STAT_ZYL4_REFERENZPEGEL_KLOPFREGELUNG_WERT | Referenzpegel Klopfregelung Zyl4 (Bezugspunkt Verstärkung 6) |  V | rkrnv6_w[2] | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| RL | 0x5813 | STAT_RELATIVE_LAST_WERT | Relative Last |  % | rl | - | unsigned char | - | 0,75 | 1 | 0,0 |
| RL_UM | 0x58BC | STAT_LUFTMASSE_UEBERWACHUNG_WERT | Relative Luftfüllung in der Funktionsüberwachung |  % | rl_um | - | unsigned char | - | 0,75 | 1 | 0,0 |
| RML | 0x5804 | STAT_BERECHNETER_LAST_WERT | Berechneter Lastwert |  % | rml | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| SP1S_UM | 0x58E7 | STAT_SPANNUNG_PWG1_UEBERWACHUNG_WERT | Spannung Pedalwertgeber 1 Überwachung |  V | sp1s_um | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| SP2S_UM | 0x58E8 | STAT_SPANNUNG_PWG2_UEBERWACHUNG_WERT | Spannung Pedalwertgeber 2 Überwachung |  V | sp2s_um | - | unsigned char | - | 0,009765625 | 1 | 0,0 |
| SPSN_UM | 0x58B9 | STAT_PEDALSOLLWERT_UEBERWACHUNG_WERT | Pedalsollwert Überwachung |  V | spsn_um | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| ST_I_GEN | 0x4604 | STAT_GENERATORSTROM_WERT | Generatorstrom |  A | st_i_gen | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STATSVREG1 | 0x5868 | STAT_STANDVERBRAUCHER_1_WERT | Status Standverbraucher registriert Teil 1 |    | statsvreg1 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| STATSVREG2 | 0x5869 | STAT_STANDVERBRAUCHER_2_WERT | Status Standverbraucher registriert Teil2 |    | statsvreg2 | - | unsigned char | - | 1,0 | 1 | 0,0 |
| T2HSTSHORT | 0x586B | STAT_ZEIT_RUHESTROM_80_200_WERT | Zeit mit Ruhestrom 80 - 200 mA |  min | t2hstshort | - | unsigned char | - | 14,93333 | 1 | 0,0 |
| T3HSTSHORT | 0x586C | STAT_ZEIT_RUHESTROM_200_1000_WERT | Zeit, Ruhestrom liegt bei 200..1000mA |  min | t3hstshort | - | unsigned char | - | 14,93333 | 1 | 0,0 |
| T4HSTSHORT | 0x586E | STAT_ZEIT_RUHESTROM_AB1000_WERT | Zeit, Ruhestrom ist größer als 1000mA |  min | t4hstshort | - | unsigned char | - | 14,93333 | 1 | 0,0 |
| TABST | 0x5823 | STAT_ABSTELLZEIT_WERT | Abstellzeit |  s | tabst_w | - | unsigned char | - | 256 | 1 | 0,0 |
| TAHRLSU | 0x5A58 | STAT_TV_LSHVK_WERT | Tastverhältnis Lambdasondenheizung vor Kat |  % | tahrlsu_w | - | unsigned integer | - | 0,0030517578125 | 1 | 0,0 |
| TAML | 0x4611 | STAT_TV_E_LUEFTER_WERT | Tastverhältnis E-Lüfter |  % | taml | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| TANHKM | 0x5896 | STAT_ABGASTEMPERATUR_HK_WERT | Abgastemperatur hinter Kat |  °C | tanhkm_w | - | unsigned char | - | 6,0 | 1 | -273,15 |
| TANS | 0x4200 | STAT_ANSAUGLUFTTEMPERATUR_WERT | Ansauglufttemperatur |  °C | tans | - | unsigned char | - | 0.750 | 1 | -48,0 |
| TANSLIN | 0x5AB6 | STAT_ANSAUGLUFTTEMPERATUR_LINEARISIERT_WERT | Ansauglufttemperatur, linearisiert |  °C | tanslin | - | unsigned char | - | 0,75 | 1 | -48,0 |
| TATEOUT | 0x5A77 | STAT_TV_TEV_WERT | Tastverhältnis Tankentlüftungsventil |  % | tateout | - | unsigned char | - | 0,390625 | 1 | 0,0 |
| TCHIP | 0x4603 | STAT_CHIPTEMP_GENERATOR_WERT | Chiptemperatur Generator |  °C | tchip | - | unsigned char | - | 1,0 | 1 | -40,0 |
| TDMLKA | 0x588D | STAT_AKTUELLE_ZEIT_LECKMESSUNG_WERT | Aktuelle Zeit Leckmessung |  s | tdmlka_w | - | unsigned char | - | 1,6 | 1 | 0,0 |
| TEZ_ZYL1 | 0x5A42 | STAT_ZYL1_EINSPRITZZEIT_WERT | Einspritzzeit Zylinder 1 |  ms | tez_l[0] | - | unsigned long | - | 0,001 | 1 | 0,0 |
| TEZ_ZYL2 | 0x5A43 | STAT_ZYL2_EINSPRITZZEIT_WERT | Einspritzzeit Zylinder 2 |  ms | tez_l[3] | - | unsigned long | - | 0,001 | 1 | 0,0 |
| TEZ_ZYL3 | 0x5A44 | STAT_ZYL3_EINSPRITZZEIT_WERT | Einspritzzeit Zylinder 3 |  ms | tez_l[1] | - | unsigned long | - | 0,001 | 1 | 0,0 |
| TEZ_ZYL4 | 0x5A45 | STAT_ZYL4_EINSPRITZZEIT_WERT | Einspritzzeit Zylinder 4 |  ms | tez_l[2] | - | unsigned long | - | 0,001 | 1 | 0,0 |
| TFSTQ1L | 0x58EF | STAT_TANKFUELLSTAND_WERT | Tankfüllstand |  l | tfstq1l | - | unsigned char | - | 1,0 | 1 | 0,0 |
| TKATM | 0x582F | STAT_TKATM_WERT | Abgastemperatur nach Katalysator aus Modell |  °C | tkatm | - | unsigned char | - | 5,0 | 1 | -50,0 |
| TKERLSU | 0x588C | STAT_KERAMIKTEMPERATUR_LSU_WERT | Keramiktemperatur der LSU |  °C | tkerlsu_w | - | unsigned char | - | 6,0 | 1 | -273,15 |
| TKWPWM | 0x5A74 | STAT_TV_KENNFELDTHERMOSTAT_WERT | Tastverhältnis Kennfeldthermostat |    | tkwpwm | - | signed integer | - | 0,1 | 1 | 0,0 |
| TLRFGEN | 0x4616 | STAT_TLRFGEN_WERT | Vom Generator empfangene Load response Zeit |  s | tlrfgen | - | unsigned char | - | 0,1 | 1 | 0,0 |
| TMOT | 0x4300 | STAT_MOTORTEMPERATUR_WERT | Motortemperatur |  °C | tmot | - | unsigned char | - | 0.750 | 1 | -48,0 |
| TMOTLIN | 0x5AB7 | STAT_MOTORTEMPERATUR_LINEARISIERT_WERT | Motortemperatur, linearisiert |  °C | tmotlin | - | unsigned char | - | 0,75 | 1 | -48,0 |
| TMST | 0x5882 | STAT_MOTORSTARTTEMPERATUR_WERT | Motorstarttemperatur |  °C | tmst | - | unsigned char | - | 0,75 | 1 | -48,0 |
| TNSE | 0x5800 | STAT_TNSE_WERT | Zeitzähler ab Startende |  s | tnse_w | - | unsigned char | - | 25,6 | 1 | 0,0 |
| TNST | 0x588B | STAT_ZEIT_NACH_STARTENDE_WERT | Zeit nach Startende |  s | tnst_w | - | unsigned char | - | 2,56 | 1 | 0,0 |
| TOEL | 0x4402 | STAT_OELTEMPERATUR_WERT | Oeltemperatur |  °C | toel | - | unsigned char | - | 1,000 | 1 | -60,0 |
| TOP | 0x5AB4 | STAT_BETRIEBSSTUNDENZAEHLER_WERT | Betriebsstundenzähler |  min | top_w | - | unsigned integer | - | 6,0 | 1 | 0,0 |
| TPMSHFM | 0x5A20 | STAT_TPMSHFM_WERT | Peridendauer für Massenstrom aus HFM |  us | tpmshfm_w | - | unsigned integer | - | 0,1 | 1 | 0,0 |
| TSG | 0x4806 | STAT_SG_INNENTEMPERATUR_WERT | Steuergeräte-Innentemperatur |  °C | tsg | - | unsigned char | - | 0,75 | 1 | -48,0 |
| TSK | 0x58C1 | STAT_KORRIGIERTE_SEGMENTDAUER_WERT | Korrigierte Segmentdauer |  us | tsk_l | - | unsigned char | - | 6553,6 | 1 | 0,0 |
| TUMG | 0x4204 | STAT_UMGEBUNGSTEMPERATUR_WERT | Umgebungstemperatur |  °C | tumg | - | unsigned char | - | 0.750 | 1 | -48,0 |
| TVVTES | 0x58A7 | STAT_VVT_ENDSTUFENTEMPERATUR_WERT | VVT-Endstufentemperatur aus Modell |  °C | tvvtes_w | - | unsigned char | - | 1,0 | 1 | 0,0 |
| TVVTM | 0x58A3 | STAT_VVT_MOTORTEMPERATUR_WERT | VVT Motortemperatur |  °C | tvvtm_w | - | unsigned char | - | 1,0 | 1 | 0,0 |
| TVVVTM | 0x58A1 | STAT_TV_ANSTEUERUNG_VVT_MOTOR_WERT | Tastverhältnis  Ansteuerung VVT-Stellmotor |  % | tvvvtm_w | - | signed char | - | 0,78125 | 1 | 0,0 |
| UA10MO | 0x4702 | STAT_SPANNUNG_LSVK_WERT | Spannung Lambdasonde vor Kat mit Offsetkorrektur |  V | ua10mo_w | - | unsigned integer | - | 0,00048828125 | 1 | 0,0 |
| UB | 0x5815 | STAT_BATTERIESPANNUNG_WERT | Batteriespannung |  V | ub | - | unsigned char | - | 0,0942 | 1 | 0,0 |
| WUB | 0x460C | STAT_BATTERIESPANNUNG_ADC_WERT | ADC-Wert Batteriespannung |  V | wub_w | - | unsigned integer | - | 0,02355 | 1 | 0,0 |
| UBT | 0x460A | STAT_BATTERIESPANNUNG_AKTUELLER_WERT | Aktuelle Batteriespannung |  V | ubt | - | unsigned integer | - | 0,015 | 1 | 0,0 |
| UB_IBS | 0x460B | STAT_BATTERIESPANNUNG_IBS_WERT | Batteriespannung vom IBS gemessen |  V | ubatt_w | - | unsigned integer | - | 0,00025 | 1 | 6,0 |
| UDKP1 | 0x5A06 | STAT_SPANNUNG_DK_POTI_1_WERT | Spannung Drosselklappe Potentiometer 1 |  V | udkp1_w | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 |
| UDKP1A | 0x58ED | STAT_SPANNUNG_DK_POTI1_UA_WERT | Spannung Drosselklappen-Poti 1 am unteren Anschlag |  V | udkp1a | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| UDKP2 | 0x5A07 | STAT_SPANNUNG_DK_POTI_2_WERT | Spannung Drosselklappe Potentiometer 2 |  V | udkp2_w | - | unsigned integer | - | 0,001220703125 | 1 | 0,0 |
| UDSAC | 0x5A15 | STAT_SPANNUNG_DRUCKSENSOR_ADC_WERT | ADC-Wert Spannung Drucksensor |  V | udsac_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| UDSS | 0x5AB8 | STAT_SPANNUNG_SAUGROHRDRUCK_WERT | Spannung Drucksensor Saugrohrdruck |  V | udss_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| UDSU | 0x5A0B | STAT_UMGEBUNGSDRUCK_ADC_WERT | ADC-Wert Umgebungsdruck |  V | udsu_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| UFGEN | 0x4613 | STAT_UFGEN_WERT | Vom Generator empfangene Generatorsollspannung |  V | ufgen | - | unsigned char | - | 0,1 | 1 | 10,6 |
| UGEN | 0x4602 | STAT_SOLLSPANNUNG_GENERATOR_WERT | Generator Sollspannung |  V | ugen | - | unsigned char | - | 0,1 | 1 | 10,6 |
| UPRM | 0x5A16 | STAT_SPANNUNG_RAIL_DRUCKSENSOR_WERT | Mittlere Spannung Raildrucksensor |  V | uprm_w | - | unsigned integer | - | 0,00030517578125 | 1 | 0,0 |
| UPWG1 | 0x5A04 | STAT_SPANNUNG_PWG1_WERT | Spannung Pedalwertgeber 1 |  V | upwg1_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| UPWG2 | 0x5A05 | STAT_SPANNUNG_PWG2_WERT | Spannung Pedalwertgeber 2 |  V | upwg2_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| USHK | 0x5A13 | STAT_SPANNUNG_LSHK_WERT | Sondenspannung hinter Kat (4.88 mV/ LSB) |  V | ushk_w | - | unsigned integer | - | 0,0048828125 | 1 | -1,0 |
| UULSUV | 0x5A11 | STAT_SPANNUNG_LSVK_ADC_WERT | ADC-Wert Sondenspannung vor Kat |  V | uulsuv_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| UUSHK | 0x5849 | STAT_SPANNUNG_LSHK_ADC_WERT | ADC-Wert Lambdasondenspannung nach Kat |  V | uushk_w | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| VBVVTEXW | 0x4502 | STAT_VVT_VERSTELLBEREICH_LERNROUTINE_WERT | Verstellbereich VVT-Exzenterwelle aus Anschlaglernen |  Grad  | vbvvtexw_w | - | unsigned integer | - | 0,02197266 | 1 | 0,0 |
| VFZG | 0x5AB1 | STAT_FAHRZEUGGESCHWINDIGKEIT_WERT | Fahrzeuggeschwindigkeit |  km/h | vfzg | - | unsigned char | - | 1,25 | 1 | 0,0 |
| VSA_ADP_FL | 0x5A95 | STAT_NOCKENWELLE_AUSLASS_ADAPTION_WERT | Adaptionswert Nockenwelle Auslass |  Grad KW | vsa_adp_fl | - | signed char | - | 0,05 | 1 | 0,0 |
| VSA_SPRI | 0x4509 | STAT_AUSLASSPREIZUNG_IST_WERT | Istwert Auslasspreizung variable NWS |  Grad KW | vsa_spri | - | unsigned integer | - | 0,1 | 1 | 0,0 |
| VSA_SPRN | 0x450A | STAT_AUSLASS_NORMSPREIZUNG_WERT | Normspreizung Auslass |  Grad KW | vsa_sprn | - | unsigned integer | - | 0,1 | 1 | 0,0 |
| VSA_SPRS | 0x5A94 | STAT_AUSLASSPREIZUNG_SOLL_WERT | Sollwert Auslasspreizung variable NWS |  Grad KW | vsa_sprs | - | unsigned integer | - | 0,1 | 1 | 0,0 |
| VSA_TV | 0x5A7B | STAT_TV_AUSLASSPREIZUNG_WERT | Tastverhältnis Auslasspreizung variable NWS |  % | vsa_tv | - | unsigned integer | - | 0,01 | 1 | 0,0 |
| VSE_ADP | 0x5A96 | STAT_NOCKENWELLE_EINLASS_ADAPTION_WERT | Adaptionswert Nockenwelle Einlass |  Grad KW | vse_adp_fl | - | unsigned char | - | 0,05 | 1 | 0,0 |
| VSE_SPRI | 0x4508 | STAT_EINLASSPREIZUNG_IST_WERT | Istwert Einlasspreizung variable NWS |  Grad KW | vse_spri | - | unsigned integer | - | 0,1 | 1 | 0,0 |
| VSE_SPRN | 0x450B | STAT_EINLASS_NORMSPREIZUNG_WERT | Normspreizung Einlass |  Grad KW | vse_sprn | - | unsigned integer | - | 0,1 | 1 | 0,0 |
| VSE_SPRS | 0x4505 | STAT_EINLASSPREIZUNG_SOLL_WERT | Sollwert Einlasspreizung variable NWS |  Grad KW | vse_sprs | - | unsigned integer | - | 0,1 | 1 | 0,0 |
| VSE_TV | 0x5A7A | STAT_TV_EINLASSPREIZUNG_WERT | Tastverhältnis Einlasspreizung variable NWS |  % | vse_tv | - | unsigned integer | - | 0,01 | 1 | 0,0 |
| VVT_ANSIO | 0x5AA6 | STAT_GELERNTE_ANSCHLAEGE_WERT | Status gelernte Anschläge | - | vvt_ansio | - | unsigned char | - | 1,0 | 1 | 0,0 |
| VVT_SOLL | 0x4503 | STAT_VVT_SOLL_WERT | VVT_Sollwert |  Grad  | Vvt_soll | - | unsigned integer | - | 0,02197266 | 1 | 0,0 |
| WDK1 | 0x5826 | STAT_DK_WINKEL_POTI1_WERT | Drosselklappenwinkel aus Poti 1 |  %DK | wdk1 | - | unsigned char | - | 0,392156862745 | 1 | 0,0 |
| WDKBA | 0x4600 | STAT_DK_WINKEL_IST_WERT | Aktueller Drosselklappenwinkel |  %DK | wdkba_w | - | signed integer | - | 0,0244140625 | 1 | 0,0 |
| WDKNLP | 0x5840 | STAT_DK_NOTLAUFPOSITION_WERT | Notlaufposition Drosselklappe |  %DK | wdknlp | - | unsigned char | - | 0,3921568 | 1 | 0,0 |
| WDKNLPR | 0x583E | STAT_DK_NOTLAUFPOSITION_EEPROM_WERT | Notlaufposition Drosselklappe; EEPROM-Wert |  %DK | wdknlpr | - | unsigned char | - | 0,3921568 | 1 | 0,0 |
| WDKS | 0x4601 | STAT_DK_WINKEL_SOLL_WERT | Sollwert Drosselklappenwinkel |  %DK | wdks_w | - | unsigned integer | - | 0,0015259022 | 1 | 0,0 |
| WPED | 0x480B | STAT_FAHRPEDALWINKEL_WERT | Normierter Fahrpedalwinkel |  %PED | wped_w | - | unsigned integer | - | 0,0015259022 | 1 | 0,0 |
| WTANS | 0x5A08 | STAT_ANSAUGLUFTTEMPERATUR_ADC_WERT | ADC-Wert Ansauglufttemperatur |  V | wtans | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| WTMOT | 0x5A09 | STAT_MOTORTEMPERATUR_ADC_WERT | ADC-Wert Motortemperatur |  V | wtmot_w | - | unsigned integer | - | 0,0048828125 | 1 | 0,0 |
| WTSG | 0x5A0E | STAT_SG_INNENTEMPERATUR_ADC_WERT | ADC-Wert Steuergeräte-Innentemperatur |  V | wtsg | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| WUBISO | 0x4609 | STAT_VERSORGUNGSSPANNUNG_ADC_WERT | ADC-Wert SG-Versorgungsspannung |  V | wubiso_w | - | unsigned integer | - | 0,001 | 1 | 0,0 |
| WUVVTR | 0x58A4 | STAT_VVT_SPANNUNGSVERSORGUNG_WERT | VVT Spannungsversorgung |  V | wuvvtr | - | unsigned char | - | 0,0942 | 1 | 0,0 |
| WVVTUSEN | 0x58A5 | STAT_VVT_SENSOR_VERSORGUNGSSPANNUNG_WERT | ADC-Wert VVT Sensorversorgungsspannung |  V | wvvtusen | - | unsigned char | - | 0,01953125 | 1 | 0,0 |
| ZDTEV | 0x58FB | STAT_TEV_PRUEFUNGS_ZAEHLER_WERT | Prüfungszähler für TEV-Diagnose | - | zdtev | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ZSTFGR | 0x5A6D | STAT_ZUSTAND_FGR_WERT | Zustand Fahrgeschwindigkeitsregler | - | zstfgr | - | unsigned char | - | 1,0 | 1 | 0,0 |
| ZWCALCAR | 0x5A49 | STAT_ZYL1_ZUENDWINKEL_WERT | Zündwinkel Zylinder1 |  Grad KW | zwcalcar[0] | - | signed char | - | 0,75 | 1 | 0,0 |
| ZWOUT | 0x580E | STAT_ZUENDWINKEL_AUSGABE_WERT | Zündwinkel-Ausgabe |  Grad KW | zwout  | - | signed char | - | 0,75 | 1 | 0,0 |

### BETRIEBSARTEN

| NR | TEXT |
| --- | --- |
| 0 | KEINE |
| 1 | UGD |
| 2 | GD |
| 3 | GD_KLEINER_HUB |
| 6 | DKNOTL |
| 7 | VVTNOTL1 |
| 8 | VVTNOTL |

### DIAGNOSESTATI

| NR | TEXT |
| --- | --- |
| 0 | Funktion nicht gestartet |
| 1 | Start-/Ansteuerbedingungen nicht erfuellt |
| 2 | Uebergabeparameter nicht plausibel |
| 3 | Funktion wartet auf Freigabe |
| 4 | -- |
| 5 | Funktion laeuft |
| 6 | Funktion beendet (ohne Ergebnis) |
| 7 | Funktion abgebrochen (kein Zyklus-/ Readiness-Flag gesetzt) |
| 8 | Funktion vollstaendig durchlaufen (Zyklus-/ Readiness-Flag gesetzt), kein Fehler erkannt |
| 9 | Funktion vollstaendig durchlaufen (Zyklus-/ Readiness-Flag gesetzt), Fehler erkannt |

### KATSTATUS

| NR | TEXT |
| --- | --- |
| 0x00 | Funktion laeuft |
| 0x01 | Start-/Ansteuerbedingungen nicht erfuellt |
| 0x05 | Funktionsanforderung ueber Kurztest nicht gegeben |
| 0x07 | Funktion abgebrochen aufgrund von Fehlereintraegen |
| 0x08 | Funktion vollstaendig durchlaufen (Zyklus-Flag = 1), kein Fehler erkannt (Error-Flag = 0) |
| 0x09 | Funktion vollstaendig durchlaufen (Zyklus-Flag = 1), Fehler erkannt (Error-Flag = 1) |

### TEVSTATUS

| STATI | TEXT |
| --- | --- |
| 0x00 | Systemtest laeuft |
| 0x01 | Systemtest kann nicht gestartet werden |
| 0x05 | Systemtest ist nicht gestartet |
| 0x08 | TEV noch nicht geschlossen für Drehzahlpruefung |
| 0x09 | Beladungspruefung laeuft |
| 0x0A | Systemtest beendet ohne Fehler |
| 0x0B | Systemtest beendet mit Fehler |
| 0xXY | Status Systemtest kann nicht ausgegeben werden |

### LAMBDASTATUS

| STATI | TEXT |
| --- | --- |
| 0x00 | Steuerbetrieb, Startbedingungen noch nicht erfuellt |
| 0x01 | Regelbetrieb mit zwei Sonden |
| 0x02 | Steuerbetrieb durch Betriebsbedingungen |
| 0x04 | Steuerbetrieb nach Systemfehler |
| 0x08 | Regelung mit nur einer Sonde (vor Kat) |
| 0xXY | Status LSU-Diagnose kann nicht ausgegeben werden |

### DMTLSTATUS

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
| 0x1E | Keinen Fehler erkannt |
| 0x1F | Feinstleck erkannt |
| 0x20 | Grobleck erkannt |
| 0x21 | DMTL-Modul-Fehler erkannt |
| 0x22 | Kein Grobleck erkannt |
| 0xXY | Stagepointer unbekannt |

### FETRAWESTATUS

| STATUS | TEXT |
| --- | --- |
| 0x00 | Energiesparmode nicht aktiv |
| 0x01 | Fertigungs-Mode aktiv |
| 0x02 | Transport-Mode aktiv |
| 0x04 | Werkstatt-Mode aktiv |
| 0xXY | Unbekannter Status |

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

### BITS

| NAME | BYTE | MASK | VALUE |
| --- | --- | --- | --- |
| B_KL15 | 3 | 0x01 | 0x01 |
| B_ESTART | 3 | 0x02 | 0x02 |
| B_KUPPL | 3 | 0x04 | 0x04 |
| B_BL | 3 | 0x08 | 0x08 |
| B_BR | 3 | 0x10 | 0x10 |
| B_KO | 3 | 0x80 | 0x80 |
| B_LL | 4 | 0x01 | 0x01 |
| B_VL | 4 | 0x02 | 0x02 |
| B_SBBHK | 4 | 0x08 | 0x08 |
| B_SBBVK | 4 | 0x20 | 0x20 |
| B_LR | 4 | 0x80 | 0x80 |
| B_SPORT | 3 | 0X02 | 0X02 |
| B_KD | 3 | 0x04 | 0x04 |
| B_PN | 3 | 0x08 | 0x08 |
| B_ECULOCK | 3 | 0x10 | 0x10 |
| B_TEHB | 3 | 0x20 | 0x20 |
| B_SA | 3 | 0x40 | 0x40 |
| B_LRNRDY | 3 | 0x80 | 0x80 |
| B_MFL | 5 | 0x40 | 0x40 |
| B_EGS | 6 | 0x40 | 0x40 |
| B_HS | 6 | 0x10 | 0x10 |
| B_ACC | 7 | 0x02 | 0x02 |
| B_ASC | 7 | 0x10 | 0x10 |
| B_KOV | 7 | 0x80 | 0x80 |
| B_IBS | 8 | 0x80 | 0x80 |
| B_OEL | 8 | 0x02 | 0x02 |
| B_MSA | 8 | 0x01 | 0x01 |

### BETRIEBSSTUNDENSTATUS

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Betriebsstundenzaehler verstanden und akzeptiert (top_w < 10h) |
| 0x01 | Betriebsstundenzaehler verstanden aber nicht akzeptiert (top_w > 10h) |
| 0x02 | Betriebsstundenzaehler nicht verstanden und nicht akzeptiert |
| 0xXY | Betriebsstundenzaehler kann nicht ausgegeben werden |

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

### _MOTORSG_TABLE_FS

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

### RDYSTATUS

| STATUS | TEXT |
| --- | --- |
| 0x00 | READY |
| 0x01 | NOT READY |
| 0x02 | MONITOR NOT SUPPORTED |
