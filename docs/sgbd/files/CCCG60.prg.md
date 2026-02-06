# CCCG60.prg

## General

|  |  |
| --- | --- |
| File | CCCG60.prg |
| Type | PRG |
| Jobs | 101 |
| Tables | 43 |
| Origin | BMW EE-40 Dieter Vollmerhaus |
| Revision | 5.000 |
| Author | BMW EE-40 Dieter Vollmerhaus, Siemens VDO automotive SV CC80SD-AD Michael Rühe, Siemens VDO automotive SV CC80SD-AD Joerg Keller, BMW EE-40 Sebastian Wilhelm |
| ECU Comment | add job Paralleles Flashen |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | E60_CCC_MOSTCAN_Gateway |  |  |
| ORIGIN | string | BMW EE-40 Dieter Vollmerhaus |  |  |
| REVISION | string | 5.000 |  |  |
| AUTHOR | string | BMW EE-40 Dieter Vollmerhaus, Siemens VDO automotive SV CC80SD-AD Michael Rühe, Siemens VDO automotive SV CC80SD-AD Joerg Keller, BMW EE-40 Sebastian Wilhelm |  |  |
| COMMENT | string | add job Paralleles Flashen |  |  |
| PACKAGE | string | 1.24 |  |  |
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

### FS_SPERREN

Sperren bzw. Freigeben des Fehlerspeichers KWP2000: $85 ControlDTCSetting Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SPERREN | string | "ja"   -> Fehlerspeicher sperren "nein" -> Fehlerspeicher freigeben table DigitalArgument TEXT |
| SG_ANTWORT | string | "ja"   -> SG soll antworten "nein" -> SG soll nicht antworten table DigitalArgument TEXT Default:  SG soll antworten |
| FUNKTIONAL | string | "ja"   -> Funktionale Adresse 0xEF wird benutzt nur in Verbindung mit SG_ANTWORT="nein" "nein" -> SG Adresse wird benutzt table DigitalArgument TEXT Default:  SG Adresse wird benutzt |

### IS_LESEN

Infospeicher lesen (alle Info-Meldungen / Ort und Art) KWP2000: $22 ReadDataByCommonIdentifier $2000 dtcShadowMemory

_No arguments._

### IS_LESEN_DETAIL

Infospeicher lesen (alle Info-Meldungen / Ort und Art) KWP2000: $22 ReadDataByCommonIdentifier $2001 - $20FF dtcShadowMemoryEntry Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Infocode Wenn dieser Parameter angegeben wird, wird die Position automatisch ermittelt. Es darf dann nicht argument F_POS angegeben werden |
| F_POS | int | gewaehlter Eintrag Wenn dieser Parameter angegeben wird, wird die Position benutzt. Wertebereich 1 - 255 Es darf dann nicht argument F_CODE angegeben werden |

### IS_LOESCHEN

Infospeicher loeschen KWP2000: $31 StartRoutineByLocalIdentifier $06 ClearDTCShadowMemory Modus  : Default

_No arguments._

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

### MOST_VERSION_LESEN

Auslesen von Most Version KWP2000: $21 ReadDataByLocalIdentifier LH Diagnose Teil 8, Januar 2000 Seite 67 $A0 MOSTVersion MOST Funktionenkatalog 5.0.0, Januar 2000 Seite 43 

_No arguments._

### STATUS_MOST_3DB

Auslesen des Status der Lichtleistungsabsenkung KWP2000: $21 ReadByLocalIdentifier LH Diagnose Teil 8, Januar 2000 Seite 67 $AF OpticalTransmitPowSwitch MOST Funktionenkatalog 5.0.0, Januar 2000 Seite 43 

_No arguments._

### STEUERN_MOST_3DB

Lichtleistungsabsenkung einschalten KWP2000: $3B WriteDataByLocalIdentifier LH Diagnose Teil 8, Januar 2000 Seite 67 $AF OpticalTransmitPowSwitch $00 S1 geoeffnet = 3dB Absenkung MOST Funktionenkatalog 5.0.0, Januar 2000 Seite 43 

_No arguments._

### STATUS_WAKE_UP_STATUS

Auslesen des Status WakeupStatus KWP2000: $21 ReadByLocalIdentifier LH Diagnose Teil 8, Januar 2000 Seite 67 $AD WakeUpStatus MOST Funktionenkatalog 5.0.0, Januar 2000 Seite 43 

_No arguments._

### STATUS_ABILITY_TO_WAKE

Auslesen des Status AbilityToWake KWP2000: $21 ReadByLocalIdentifier LH Diagnose Teil 8, Januar 2000 Seite 67 $AD WakeUpStatus MOST Funktionenkatalog 5.0.0, Januar 2000 Seite 43 

_No arguments._

### STEUERN_ABILITY_TO_WAKE

AbilityToWake einstellen KWP2000: $3B WriteDataByLocalIdentifier LH Diagnose Teil 8, Januar 2000 Seite 67 $AD AbilityToWake $00 of, $01 on, $02 critical MOST Funktionenkatalog 5.0.0, Januar 2000 Seite 43 

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | gewuenschter AbilityToWake Modus table  AbilityToWake Status Defaultwert: DEFAULT 00 |

### STATUS_VERSION_GATEWAYTABELLE

Lesen der Versionsnummer der Gateway-Tabelle KWP2000: $22 ReadDataByCommonIdentifier $100D recordCommonIdentifier (gatewayTableVersionNumber) Modus  : Default

_No arguments._

### STATUS_GATEWAY_WAKEUP_SOURCE

Liefert die Quelle/Ursache zurück, die zum Wecken des Gateway-Steuergerätes geführt hat. Dieser Job wird von SG ab E60 unterstützt! KWP2000: $21 ReadDataByLocalIdentifier $BB recordLocalIdentifier Modus  : Default

_No arguments._

### STATUS_GATEWAY_OWN_DEVICE_ID

Information über den Gateway-Dispatcher Eigene logische MOST Device-ID KWP2000: $21 ReadDataByLocalIdentifier $B0 recordLocalIdentifier Modus  : Default

_No arguments._

### STATUS_GATEWAY_MOST_DEVICE_COUNT

Information über den Gateway-Dispatcher Anzahl der vom Dispatcher erkannten MOST-Teilnehmer im Ring KWP2000: $21 ReadDataByLocalIdentifier $B1 recordLocalIdentifier Modus  : Default

_No arguments._

### STATUS_GATEWAY_MOST_DEVICES

Ausgabe der erkannten MOST-Devices. Die Erkennung erfolgt ueber die InstID der Diagnose-Funktionsbloecke KWP2000: $21 ReadDataByLocalIdentifier $B2 recordLocalIdentifier Modus  : Default

_No arguments._

### STATUS_GATEWAY_LOCAL_REGISTRY_ELEMENTS

Information über den Gateway-Dispatcher Liste aller lokal (im Gateway-Adreßraum) registrierten FBlocks KWP2000: $21 ReadDataByLocalIdentifier $B2 recordLocalIdentifier Modus  : Default

_No arguments._

### STATUS_GATEWAY_EXTERNAL_REGISTRY_ELEMENTS

Information über den Gateway-Dispatcher Liste aller extern (im MMI-Adreßraum) registrierten FBlocks KWP2000: $21 ReadDataByLocalIdentifier $B3 recordLocalIdentifier Modus  : Default

_No arguments._

### STATUS_GATEWAY_EVENT_SINK_COUNT

Information über den Gateway-Dispatcher Anzahl der am Dispatcher registrierten Event-Kommunikationsteilnehmer KWP2000: $21 ReadDataByLocalIdentifier $B4 recordLocalIdentifier Modus  : Default

_No arguments._

### STATUS_PRAEPROZESSOR_SWITCH

Read out status of pre-processor switch KWP2000: $21 ReadDataByLocalIdentifier $BC recordLocalIdentifier - pre-processor switch state Modus  : Default

_No arguments._

### STATUS_INCLUDED_GW_TAB

Read out status of included GW table KWP2000: $21 ReadDataByLocalIdentifier $BD recordLocalIdentifier - included GW table state Modus  : Default

_No arguments._

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

### START_PARALLELE_PROG

start parallele Programierung Standard Flashjob KWP2000: $31 StartRoutineByLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| TESTER | string | MOST or CAN |

### STOP_PARALLELE_PROG

stop parallele Programierung Standard Flashjob KWP2000: $32 StopFuncionByLocalId Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| TESTER | string | MOST, CAN or GLOBAL |

### SELBSTTEST_STARTEN

Starten des Selbsttests KWP2000: $31 StartRoutineByLocalIdentifier $04 Selftest

| Name | Type | Description |
| --- | --- | --- |
| TEST_NR | int | gewaehltes Testscript 0 - standard tests, > 0 nur für Entwicklung |

### SELBSTTEST_STOPPEN

Abbrechen des Selbsttests KWP2000: $32 StopRoutineByLocalIdentifier $04 Selftest

_No arguments._

### SELBSTTEST_ABFRAGEN

Abfragen des Systemtests KWP2000: $32 RequestRoutineResultsByLocalIdentifier $04 Selftest

_No arguments._

### SYSTEMTEST_STARTEN

Starten des Systemtests KWP2000: $31 StartRoutineByLocalIdentifier $FA OEM-spezifisch: Systemtest

| Name | Type | Description |
| --- | --- | --- |
| TEST_NR | unsigned int | gewaehltes Testscript 0 - standard tests, > 0 nur für Entwicklung |

### SYSTEMTEST_STOPPEN

Abbrechen des Systemtests KWP2000: $32 StopRoutineByLocalIdentifier $FA OEM-spezifisch: Systemtest

| Name | Type | Description |
| --- | --- | --- |
| TEST_NR | int | gewaehltes Testscript |

### SYSTEMTEST_ABFRAGEN

Abfragen des Systemtests KWP2000: $32 RequestRoutineResultsByLocalIdentifier $FA OEM-spezifisch: Systemtest

| Name | Type | Description |
| --- | --- | --- |
| TEST_NR | int | gewaehltes Testscript |

### READ_CURRENT_UIF

currentUIFDataTable KWP2000: $1A ReadECUIdentification Modus  : Default

_No arguments._

### READ_BMW_SACH_NR

SystemSupplierECUHardwareNumber KWP2000: $1A ReadECUIdentification Modus  : Default

_No arguments._

### READ_BMW_HW_VERSION

vehicleManufactureECUHardwareVersionNumber KWP2000: $1A ReadECUIdentification Modus  : Default

_No arguments._

### PROGRAM_REFERENZ_LESEN

vehicleManufECUSoftwareLayerVersionNumber KWP2000: $1A ReadECUIdentification Modus  : Default

_No arguments._

### STATUS_PWB_TEMP

die Temperatur des Sensors auf dem PowerBord wird ausgegeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STEUERN_PWB_TEMP

die Temperatur des Sensors auf dem Powerboard wird simuliert KWP2000: $2E WriteDataByCommonIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| TEMPERATUR_VALUE | int | Temperatur (Grad C) Range [-50 .. 135] |
| TIMEOUT | int | timeout in Sec Range [0 .. 31] |

### STATUS_FOT_TEMP

die Temperatur des Sensors an der FOT wird ausgegeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STEUERN_FOT_TEMP

die Temperatur des Sensors an der FOT wird simuliert KWP2000: $2E WriteDataByCommonIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| TEMPERATUR_VALUE | int | Temperatur (Grad C) Range [-50 .. 135] |
| TIMEOUT | int | timeout in Sec Range [0 .. 31] |

### STATUS_ALL_ADC_VALUES

Die internen Spannungen werden ausgegeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_AMPLIFIER_MUTE

der Mute Mode des PowerAmpifiers wird ausgegeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_LOUDSP_STATUS

der Status der Lautspecherverbindung wird ausgegeben Kurzschluesse zu Masse oder Vcc werden erkannt wenn sie nach dem letzten Aufstarten des Gateway oder nach dem letzten Aufruf dieses Jobs vorlagen. Kurzschluesse zwischen den Lautsprecherleitungen werden erkannt wenn sie nach dem letzten Aufstarten des Gateway oder nach dem letzten Aufruf dieses Jobs vorlagen waehrend der entsprechende Lautsprecher angesteuert wurde (Sound-Ausgabe in ausreichender Lautstärke). Fuer die Erkennung von Kurzschluessen zwischen den Lautsprecherleitungen und unterbrochene Lautsprecherleitungen findet eine Diagnose nach jedem Aufstarten statt (siehe Fehlerspeicher). KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_SPEED_IN2

der Wert des Pins der externen Fahrtrichtungssignals wird ausgegeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_LUEFTER

die Luefter Geschwindigkeit wird ausgegeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STEUERN_LUEFTER

schalte Luefter KWP2000: $2e WriteDataByCommonIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| PWM | int | speed in % Range [50 .. 100] |
| TIMEOUT | int | timeout in Sec Range [0 .. 31] |

### STATUS_EXT_ILLUMINATION

der Status externen Illumination wird ausgegeben (Klemme 58g) KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_FLASH_CHKSUM

lese die Flash Checksumme KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| DESTINATION | string | externer oder interner flash table FlashType FlashName default: intern |

### READ_CURRENT_REGISTRY

der Werte der aktuellen MOST registry wird ausgegeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### READ_DEFAULT_REGISTRY

die Werte der default MOST registry wird ausgegeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STEUERN_ZENTRALE_REGISTRY_SOLLKONFIGURATION

die aktuelle Registry wird in die default Registry uebernommen Der Job kann fruestens 20 sec nach Erreichen eines stabilen MOST-Locks ausgefuehrt werden (Most-Spez. Kapitel 3.2.3.1) KWP2000: $2e ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### READ_DIFF_REGISTRY

Vergleich der Current MOST Registry mit der Default MOST Registry KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_EEPROM_STATUS

der Eeprom Chip Status wird ausgegeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_I2C_OLIC

der Olic Chip Status wird ausgegeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_I2C_AMPLIFIER

der Amplifier Chip Status wird ausgegeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STEUERN_RAD_ON

der Wert des RAD_ON Pins wird gesetzt KWP2000: $2e WriteDataByCommonIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| RAD_ON_CONNECT | string | Ground oder VCC table RadOnStateTABLE STATUS_TEXT |

### STATUS_RAD_ON_DIAG

der Wert des RAD_ON Pins wird ausgegeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STEUERN_RESET_CCC

der gesammte CCC wird zurueckgesetzt KWP2000: $2E WriteDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_MOST_CONFIG

status des MOST rings KWP2000: $21 readDataByLocalIdentifier Modus  : Default

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

### IARTTEXTE

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

### ABILITY_TO_WAKE

| ABILITY_TO_WAKE_NR | ABILITY_TO_WAKE_MODE |
| --- | --- |
| 0x00 | off |
| 0x01 | on |
| 0x02 | critical |
| 0xXY | unbekannter Mode |

### MOST_3DB

| MOST_3DB_NR | MOST_3DB_MODE |
| --- | --- |
| 0x00 | Lichtleistung abgesenkt |
| 0x01 | Volle Lichtleistung |
| 0xXY | unbekannter Mode |

### WAKE_UP_STATUS

| WAKE_UP_STATUS_NR | WAKE_UP_STATUS_MODE |
| --- | --- |
| 0x00 | nicht initialisiert |
| 0x01 | SG hat geweckt |
| 0x02 | SG wurde geweckt |
| 0xXY | unbekannter Mode |

### TLOGMOSTIDRECEIVESTATE

| MASKE | TEXT |
| --- | --- |
| 0x00 | Default Value |
| 0x01 | Current Value |

### TNODETYPE

| MASKE | TEXT |
| --- | --- |
| 0x00 | Virtual Function-Block |
| 0x01 | Local Function-Block |
| 0x02 | External Function-Block |
| 0x03 | Virtual Function-Block-Model |
| 0x04 | Local Function-Block-Model |
| 0x05 | External Function-Block-Model |

### TPRE_PRO_SWI_STATE

| NAME | MASKE |
| --- | --- |
| Classic | 0x00 |
| Compressed | 0x01 |
| Unknown | 0xXY |

### TINC_GW_TAB

| NAME | MASKE |
| --- | --- |
| Classic / Invalid | 0x00 |
| Compressed | 0x01 |
| Unknown | 0xXY |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0x01 | my_first_ERROR_message |
| 0x02 | my_second_ERROR_message |
| ?10? | My ERROR F_CODE message |

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
| 0xA168 | EEPROM antwortet nicht |
| 0xA169 | OLIC antwortet nicht |
| 0xA16A | TDA7563 antwortet nicht |
| 0xA16B | Fehler im Power Source Supply |
| 0xA16C | Fehler Externe Beleuchtung |
| 0xA16D | Temperatur (MOST-FOT,PWB) ausserhalb zulaessigem Bereich |
| 0xA16E | Lautsprecher nicht OK |
| 0xA16F | Fehler im K-CAN Test |
| 0xA170 | RAD_ON Signal (fuer ext.Ampl.) ohne Funktion |
| 0xA171 | Checksum Fehler Eeprom |
| 0xA172 | Checksum Fehler ext.Flash |
| 0xA173 | CAN Transceiver arbeitet nicht |
| 0xA174 | Verbindung SPI - MOST Transc. NOK |
| 0xA175 | Verbindung I2S - DSP-GW-DSP NOK (unp.) |
| 0xA176 | Verbindung I2S - DSP-GW-DSP NOK (p.) |
| 0xA177 | Externer Fan arbeitet nicht |
| 0xA178 | Temperatur Sensor Fehler |
| 0xA179 | Ueber-/Unterspannung interne Spannung |
| 0xA17A | I2C-Amplifier Output |
| 0xA17B | Ueberspannung externe Versorgung (Batterie) |
| 0xA17C | Fehler 0xA17C |
| 0xA17D | Fehler 0xA17D |
| 0xA17E | Fehler 0xA17E |
| 0xA17F | Fehler 0xA17F |
| 0xA180 | Fehler 0xA180 |
| 0xA181 | Fehler 0xA181 |
| 0xA182 | Fehler 0xA182 |
| 0xA183 | Fehler 0xA183 |
| 0xA184 | Fehler 0xA184 |
| 0xA185 | Fehler 0xA185 |
| 0xA186 | Fehler 0xA186 |
| 0xA187 | Energiesparmodus aktiv |
| 0xE184 | K-CAN Leitungsfehler |
| 0xE187 | K-CAN Kommunikationsfehler |
| 0xE18C | Device hat die Monitoringnachricht nicht abgenommen oder bestaetigt. (Error_Monitoring). |
| 0xE18D | Weckendes Device hat 3 mal erfolglos versucht das Netzwerk zu wecken. (Error_WakeUp_Failed). |
| 0xE18E | Obwohl Shutdown(Execute) geschickt wurde ging das Licht nicht aus. (Error_Light_Not_Off). |
| 0xE18F | Zentrale Registry stimmt nicht mit der Sollkonfiguration ueberein (Error_Registry_New). |
| 0xE190 | Ringbruchdiagnose wurde durchgefuehrt (Error_Ring_Diagnose). |
| 0xE191 | Lange und/oder haeufige Unlocks (Error_Unlock_Long). |
| 0xE192 | Ein Device hat sich wegen Uebertemperatur abgeschaltet (Error_Temp_Shutdown). |
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
| 0xA168 | 0x20 | 0x22 | 0x23 | - |
| 0xA169 | 0x20 | 0x22 | 0x23 | - |
| 0xA16A | 0x20 | 0x22 | 0x23 | - |
| 0xA16B | 0x20 | 0x22 | 0x23 | - |
| 0xA16C | 0x20 | 0x22 | 0x23 | - |
| 0xA16D | 0x20 | 0x22 | 0x23 | - |
| 0xA16F | 0x20 | iDetectionSource | - | - |
| 0xA170 | 0x20 | 0x22 | 0x23 | - |
| 0xA171 | 0x20 | 0x22 | 0x23 | - |
| 0xA172 | 0x20 | 0x22 | 0x23 | - |
| 0xA173 | 0x20 | 0x22 | 0x23 | - |
| 0xA174 | 0x20 | 0x22 | 0x23 | - |
| 0xA175 | 0x20 | 0x22 | 0x23 | - |
| 0xA176 | 0x20 | 0x22 | 0x23 | - |
| 0xA177 | 0x20 | 0x22 | 0x23 | - |
| 0xA178 | 0x20 | 0x22 | 0x23 | - |
| 0xA179 | 0x20 | iSpannung | - | -- |
| 0xA17A | 0x20 | 0x22 | 0x23 | - |
| 0xA17B | 0x20 | 0x22 | 0x23 | - |
| 0xA17C | 0x20 | 0x22 | 0x23 | - |
| 0xA17D | 0x20 | 0x22 | 0x23 | - |
| 0xA17F | 0x20 | 0x22 | 0x23 | - |
| 0xA180 | 0x20 | 0x22 | 0x23 | - |
| 0xA181 | 0x20 | 0x22 | 0x23 | - |
| 0xA182 | 0x20 | 0x22 | 0x23 | - |
| 0xA183 | 0x20 | 0x22 | 0x23 | - |
| 0xA184 | 0x20 | 0x22 | 0x23 | - |
| 0xA185 | 0x20 | 0x22 | 0x23 | - |
| 0xA186 | 0x20 | 0x22 | 0x23 | - |
| 0xA187 | 0x20 | 0x22 | 0x23 | - |
| 0xE184 | 0x20 | iDetectionSource | - | - |
| 0xE18C | 0x20 | 0x05 | 0x23 | 0x24 |
| 0xE18D | 0x20 | 0x22 | 0x23 | - |
| 0xE18E | 0x20 | 0x22 | 0x23 | - |
| 0xE18F | 0x20 | 0x05 | 0x23 | 0x24 |
| 0xE190 | 0x20 | 0x06 | 0x23 | 0x24 |
| 0xE191 | 0x20 | 0x22 | 0x23 | - |
| 0xE192 | 0x20 | 0x23 | 0x22 | - |
| default | 0x20 | 0x22 | 0x23 | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x05 | Diagnoseadresse | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x06 | NPR | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x07 | Uebertemperatur | Hex | - | signed long | - | 1 | 1 | 0 |
| 0x10 | Logische-Knotenadresse | Hex | high | unsigned int | -- | 1 | 1 | 0 |
| 0x11 | FBlockID | Hex | - | unsigned char | -- | 1 | 1 | 0 |
| 0x12 | InstID | Hex | - | unsigned char | -- | 1 | 1 | 0 |
| 0x13 | FktID | Hex | high | unsigned int | -- | 1 | 1 | 0 |
| 0x20 | VDO-Error | Hex | - | unsigned long | - | 1 | 1 | 0 |
| 0x21 | Datenlaenge | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x22 | dummy1 | Hex | - | unsigned int | - | 1 | 1 | 0 |
| 0x23 | dummy2 | Hex | - | unsigned long | - | 1 | 1 | 0 |
| 0x24 | dummy3 | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x25 | SensorID | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x26 | SensorName | 0-n | - | 0xFF | SensorName | 1 | 1 | 0 |
| 0x27 | ErrorTyp (0 - Unterspannung, 1 - Ueberspannung) | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x28 | Wert (mVolt) | Int | high | unsigned int | - | 1 | 1 | 0 |
| 0x29 | DetektiertId | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x2A | DetektiertVon | 0-n | - | 0xFF | DetectSource | 1 | 1 | 0 |
| 0x2B | dummy4 | Hex | - | unsigned int | - | 1 | 1 | 0 |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### HDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | nein |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x9308 | Device bekam Reset (Error_Reset). |
| 0x9309 | Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
| 0x930A | Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x930F | Ein Device hat im laufenden Betrieb seinen Bypass All geschlossen (Error_NCE). |
| 0x9310 | Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0xA168 | EEPROM does not respond (obsolete) |
| 0xA169 | OLIC does not respond (obsolete) |
| 0xA16A | TDA7563 does not respond (obsolete) |
| 0xA16B | Power Source Supply (obsolete) |
| 0xA16C | Illumination ext failed (obsolete) |
| 0xA16D | Temp. out of range (MOST-FOT,PWB) (obsolete) |
| 0xA16E | Loudspeaker not OK (obsolete) |
| 0xA16F | K-CAN Test not OK (obsolete) |
| 0xA170 | RAD_ON Signal (for ext.Ampl.) failed (obsolete) |
| 0xA171 | Wrong Checksum Eeprom (obsolete) |
| 0xA172 | Wrong Checksum ext.Flash (obsolete) |
| 0xA173 | CAN Transceiver not working (obsolete) |
| 0xA174 | Connection SPI to MOST Transc. NOK (obsolete) |
| 0xA175 | Connection I2S DSP-GW-DSP not OK (unp.) (obsolete) |
| 0xA176 | Connection I2S DSP-GW-DSP not OK (p.) (obsolete) |
| 0xA177 | Function of ext. Fan failed (obsolete) |
| 0xA178 | Temperatur Sensor Fehler (Obsolete) |
| 0xA179 | Ueber-/Unterspannung interne Spannung (Obsolete) |
| 0xA17A | I2C-Amplifier Output (Obsolete) |
| 0xA187 | Energiesparmodus (FeTraWe) aktiv (Obsolete) |
| 0xFFFF | unbekannter Fehlerort |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### IUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x9308 | 0x20 | 0x22 | 0x23 | -- |
| 0x9309 | 0x20 | 0x22 | 0x23 | -- |
| 0x930A | 0x20 | 0x22 | 0x23 | -- |
| 0x930B | 0x20 | IAddresse | - | -- |
| 0x930C | 0x20 | 0x22 | 0x23 | -- |
| 0x930D | 0x20 | 0x22 | 0x23 | -- |
| 0x930F | 0x20 | 0x05 | 0x23 | 0x24 |
| 0x9310 | 0x20 | IAddresse | - | -- |
| default | 0x20 | 0x22 | 0x23 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x05 | Diagnoseadresse | Hex | - | unsigned char | - | 1 | 1 | 0 |
| 0x10 | Logische-Knotenadresse | Hex | high | unsigned int | -- | 1 | 1 | 0 |
| 0x11 | FBlockID | Hex | - | unsigned char | -- | 1 | 1 | 0 |
| 0x12 | InstID | Hex | - | unsigned char | -- | 1 | 1 | 0 |
| 0x13 | FktID | Hex | high | unsigned int | -- | 1 | 1 | 0 |
| 0x20 | VDO-Error | Hex | - | unsigned long | -- | 1 | 1 | 0 |
| 0x04 | ResetReason | Hex | high | unsigned long | -- | 1 | 1 | 0 |
| 0x22 | dummy1 | Hex | - | unsigned int | - | 1 | 1 | 0 |
| 0x23 | dummy2 | Hex | - | unsigned long | - | 1 | 1 | 0 |
| 0x24 | dummy3 | Hex | - | unsigned char | - | 1 | 1 | 0 |

### FWINERROR

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 2 | 0x20 | 0x21 | - | - |

### IWINERROR

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x20 | 0x21 | 0x22 | 0x23 |

### IADDRESSE

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x10 | 0x11 | 0x12 | 0x13 |

### ISPANNUNG

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x26 | 0x25 | 0x27 | 0x28 | 0x22 |

### SENSORNAME

| WERT | UWTEXT |
| --- | --- |
| 00 | SUPPLY_SENSOR_1.5V |
| 01 | SUPPLY_SENSOR_1.8V |
| 02 | SUPPLY_SENSOR_3.3V |
| 03 | SUPPLY_SENSOR_5.0V |
| 04 | SUPPLY_SENSOR_8.0V |
| 05 | SUPPLY_SENSOR_14V |

### IDETECTIONSOURCE

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x22 | 0x2A | 0x29 | 0x2B | 0x24 |

### DETECTSOURCE

| WERT | UWTEXT |
| --- | --- |
| 0x00 | CAN AUTOdetect |
| 0x01 | SelbstTest |

### TESTERGEBNISSE

| TESTERG_NR | TESTERG_TEXT |
| --- | --- |
| 0x00 | Test nicht gestartet |
| 0x01 | Test läuft - Nummer  |
| 0x7F | Test abgebrochen |
| 0x81 | Test beendet mit Fehler  |
| 0xFF | Test beendet |

### CHIPSTATETABLE

| WERT | ANZEIGE_TEXT |
| --- | --- |
| 0x00 | Error |
| 0x01 | OKAY |
| 0xXY | nicht definiert |

### RADONSTATETABLE

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | Ground |
| 0x01 | VCC |
| 0xXY | nicht definiert |

### RESETECUMASKTABLE

| WERT | ECU |
| --- | --- |
| 0x00 | ALL |
| 0x01 | Host |
| 0x02 | audio |
| 0x04 | tuner |
| 0x08 | GPS |
| 0xXY | nicht definiert |

### FLASHTYPE

| WERT | FLASHNAME |
| --- | --- |
| 0x03 | intern |
| 0x04 | extern |
| 0xXY | nicht definiert |

### TFBLOCKIDTEXTE

| FBLOCKID | NAME |
| --- | --- |
| 0x02 | NetworkMaster |
| 0x03 | ConnectionMaster |
| 0x04 | PowerMaster |
| 0x05 | Vehicle |
| 0x06 | Diagnose |
| 0x07 | VideoSwitch |
| 0x10 | ManMachineInterface |
| 0x11 | Sprachverarbeitungssystem |
| 0x15 | ControlElements |
| 0x16 | Security |
| 0x20 | AudioMaster |
| 0x22 | AudioAmplifier |
| 0x23 | HeadPhoneAmplifier |
| 0x24 | AuxilliaryInput=0x24 |
| 0x26 | MicrophoneInput |
| 0x2E | AudioSinkRouter |
| 0x2F | AudioSourceRouter |
| 0x30 | AudioTapePlayer |
| 0x31 | AudioDiscPlayer |
| 0x32 | MultiMediaChanger |
| 0x40 | AM/FM Tuner |
| 0x41 | TMC Tuner |
| 0x42 | TVTuner |
| 0x43 | ExternSource |
| 0x50 | TelefonFix |
| 0x51 | PhoneBook |
| 0x52 | Navigationssystem |
| 0x6F | Monitor |
| 0x71 | Climate |
| 0x80 | MMI_Terminal |
| 0x81 | KOMBI_Terminal |
| 0x91 | InternalAudioSource |
| 0x92 | InternalAudioSink |
| 0xAB | EDIABAS4MOST |
| 0xC9 | Service |
| 0xCA | KombiMiscFkts |
| 0xCB | Bordcomputer |
| 0xCC | ADASInterface |
| 0xCD | NavigationInfo |
| 0xE0 | KombiInterface |
| 0xE1 | HUDInterface |
| 0xE9 | SoundSignalService |
| 0xF0 | DspRouter |
| 0xXY | Unbekannter FBlock |

### TWAKEUPSOURCE

| MASKE | TEXT |
| --- | --- |
| 0x01 | Weckursache = CAN |
| 0x02 | Weckursache = MOST |
| 0x03 | Weckursache = IPC |
| 0x04 | Weckursache = INTERN |
| 0x05 | Weckursache = RESET/SWITCH TO POWER |

### TMOSTDEVICE

| MASKE | TEXT |
| --- | --- |
| 0x15 | TELCO   (TelCommander) |
| 0x31 | MMC     (Multimedia-Changer) |
| 0x32 | MMIC    (MMI/GT Fond CAN-Interface) |
| 0x34 | MMIF    (MMI/GT Fond CAN-Interface) |
| 0x35 | SVS     (Sprachverarbeitungssystem) |
| 0x36 | TEL     (Telefon-Interface) |
| 0x37 | AMP     (Top-Hifi Verstaerker) |
| 0x3A | KH-INT  (Kopfhoerer-Interface) |
| 0x3B | NAV     (Navigationssystem) |
| 0x3C | CDC     (CD-Wechsler) |
| 0x3D | HUD     (Head-Up Display) |
| 0x3F | ASK     (Audio-System-Kontroller) |
| 0x47 | TUNER   (Antennentuner) |
| 0x49 | SEC1    (Security-Modul 1) |
| 0x4A | SEC2    (Security-Modul 2) |
| 0x4B | VID     (Videomodul) |
| 0x60 | KOMBI   (Instrumentenkombination) |
| 0x53 | IBOC    (In Band on Channel) |
| 0x54 | SDARS   (Satelliten-Radio) |
| 0x61 | FBI     (Flexible Bus-Interface) |
| 0x62 | MCGW    (MOST/CAN-Gateway) |
| 0x63 | MMI     (MMI/GT Front\| M-ASK \| CCC) |
| 0x90 | MMI-FW  (MMI-FW im CCC |
| 0x91 | CCC-DRV (Laufwerk im CCC |
| 0x92 | CCC-DVD (DVD-Laufwerk im CCC |
| 0x93 | CCC-BT  (BT-Modul im CCC |
| 0x94 | CCC-POS (Pos.-Modul im CCC |
| 0x95 | CCC-RS  (Rear Seat G im CCC |
| 0x96 | CCC-OS  (Betriebssystem SH4 im CCC |
| 0x97 | CCC-JVM (Java Virtual Machine im CCC |
| 0x98 | CCC-MM  (MM-FW im CCC |
| 0x99 | CCC-MMI (MMI Descr im CCC |
| 0x9A | CCC-PFS (PFS-FW im CCC |
| 0x9B | CCC-HUD (HUD-Software im CCC |
| 0x9C | CCC-ONL (Online Pack im CCC |
| 0x9D | CCC-MPG (MPEG2 im CCC |
| 0x9E | CCC-DSP (DPS im CCC |
| 0x9F | CCC-NET (Network im CCC |
| 0xA0 | CCC-APP (Applikation im CCC |
