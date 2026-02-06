# mcgw60.prg

## General

|  |  |
| --- | --- |
| File | mcgw60.prg |
| Type | PRG |
| Jobs | 91 |
| Tables | 33 |
| Origin | BMW EE-40  Koenigseder |
| Revision | 3.31 |
| Author | BECKER SDE Hr. Kroell,Hr.Bubb EI-44 |
| ECU Comment | Stand 24.01.2007 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | MCGW fuer E60 im Geraet MASK |  |  |
| ORIGIN | string | BMW EE-40  Koenigseder |  |  |
| REVISION | string | 3.31 |  |  |
| AUTHOR | string | BECKER SDE Hr. Kroell,Hr.Bubb EI-44 |  |  |
| COMMENT | string | Stand 24.01.2007 |  |  |
| PACKAGE | string | 1.36 |  |  |
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

### IS_LESEN

Infospeicher lesen (alle Info-Meldungen / Ort und Art) KWP2000: $22 ReadDataByCommonIdentifier $2000 dtcShadowMemory

_No arguments._

### IS_LESEN_DETAIL

Infospeicher lesen (alle Info-Meldungen / Ort und Art) KWP2000: $22 ReadDataByCommonIdentifier $2001 - $20FF dtcShadowMemoryEntry

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Infocode Wenn dieser Parameter angegeben wird, wird die Position automatisch ermittelt. Es darf dann nicht argument F_POS angegeben werden |
| F_POS | int | gewaehlter Eintrag Wenn dieser Parameter angegeben wird, wird die Position benutzt. Wertebereich 1 - 255 Es darf dann nicht argument F_CODE angegeben werden |

### IS_LOESCHEN

Infospeicher loeschen KWP2000: $31 StartRoutineByLocalIdentifier $06 ClearDTCShadowMemory Modus  : Default

_No arguments._

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

SG in Sleep-Mode versetzen KWP2000: $31 StartRoutineByLocalIdentifier $05 PowerDown $00 all ECU Modus  : Default

_No arguments._

### ENERGIESPARMODE

Einstellen des Energiesparmodes KWP2000: $31 StartRoutineByLocalIdentifier $0C ControlEnergySavingMode Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| PRODUKTIONSMODE | string | "ein" -> Produktions Mode ein "aus" -> Produktions Mode aus table DigitalArgument TEXT Default: "aus" |
| TRANSPORTMODE | string | "ein" -> Transport Mode ein "aus" -> Transport Mode aus table DigitalArgument TEXT Default: "aus" |
| WERKSTATTMODE | string | "ein" -> Werkstatt Mode ein "aus" -> Werkstatt Mode aus table DigitalArgument TEXT Default: "aus" |

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

### PRUEFCODE_LESEN

Standard Pruefcode lesen fuer Kundendienst KWP2000: $1A ReadECUIdentification KWP2000: $18 ReadDiagnosticTroubleCodesByStatus KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes Modus  : Default

_No arguments._

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

### STATUS_HW_REF_GW

Auslesen der HW-Referenz des Gateways KWP2000: $21 readDataByLocalIdentifier $FB recordLocalIdentifier Modus  : Default

_No arguments._

### STATUS_HW_NUM_GW

Auslesen der HW-Nummer des Gateways KWP2000: $21 readDataByLocalIdentifier $FB recordLocalIdentifier Modus  : Default

_No arguments._

### STEUERN_REPAIR_GW_PROGSTATE9

Reparieren des Programmierstatus 9 beim Gateways KWP2000: $21 readDataByLocalIdentifier $FB recordLocalIdentifier Modus  : Default

_No arguments._

### STEUERN_SELBSTTEST

Ansteuerung des Selbsttests Gateway-Rechner - Test der IPC (interprocessor communication) - Speichertests RAM, FLASH_ROM, EEPROM - Test der Werte des Helligkeitssensors auf Plausibilität - Ueberpruefung der Temperatur Bei Erkennung eines Fehlverhaltens erfolgt ein Eintrag im Primaer- und Shadowfehlerspeicher. KWP2000: $31 StartRoutineByLocalIdentifier $04 routineLocalIdentifier (selfTest) Modus  : Default

_No arguments._

### DISABLE_MCGW

Schaltet die Umsetzung im MOST/CAN-Gateway vollständig ab. Die Eigendiagnose des Gateways von MOST und CAN aus ist noch möglich KWP2000: $31 StartRoutineByLocalIdentifier $0F routineLocalIdentifier (disableMCGW) Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| REQUEST_TESTER | unsigned char | Gibt an, von welchem Tester die Abschaltung angefordert wurde. Folgende Tester sind erlaubt: $F1: BMW-Tester (Tester auf CAN) $FA: MOST-Tester (Tester auf MOST) |

### ENABLE_MCGW

Schaltet die Umsetzung im MOST/CAN-Gateway wieder ein. Damit das MCGW die Nachrichtenumsetzung wieder aufnimmt, muß das MCGW von beiden Testern freigegeben werden KWP2000: $32 StopRoutineByLocalIdentifier $0F routineLocalIdentifier (enableMCGW) Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| REQUEST_TESTER | unsigned char | Gibt an, von welchem Tester die Freigabe angefordert wurde. Folgende Tester sind erlaubt: $F1: BMW-Tester (Tester auf CAN) $FA: MOST-Tester (Tester auf MOST) |

### STATUS_ANALOG_SPANNUNG

Auslesen der Spannungswerte von Board, SH3 und FPGA KWP2000: $30 InputOutputControlByLocalIdentifier $02 inputOutputLocalIdentifier $07 shortTermAdjustment Modus  : Default

_No arguments._

### STATUS_ANALOG_TEMPERATUR

Status der Temperaturwerte FOT Board, Mod4020 und Endstufe KWP2000: $30 InputOutputControlByLocalIdentifier $03 inputOutputLocalIdentifier $07 shortTermAdjustment Modus  : Default

_No arguments._

### STEUERN_ZENTRALE_REGISTRY_SOLLKONFIGURATION

Ausgelesene Zentrale Registry wird als Sollkonfiguration abgespeichert KWP2000: $30 InputOutputControlByLocalIdentifier $06 inputOutputLocalIdentifier $07 ShortTermAdjustment Modus  : Default

_No arguments._

### READ_CURRENT_REGISTRY

Auslesen der Registry vom ASK KWP2000: $21 ReadDataByLocalIdentifier LH Diagnose Teil 8, Januar 2000 Seite 67 $B5 recordLocalIdentifier Modus   : Default

_No arguments._

### READ_DEFAULT_REGISTRY

Auslesen der Registry vom ASK KWP2000: $21 ReadDataByLocalIdentifier LH Diagnose Teil 8, Januar 2000 Seite 67 $B6 recordLocalIdentifier Modus   : Default

_No arguments._

### hw_nummer_lesen

Hardware-Nummer lesen KWP2000: $1A ReadECUIdentification $87 physicalECUHardwareNumber Modus  : Default

_No arguments._

### STEUERN_LUEFTER

Setzen der Lüfterwerte KWP2000: $30 InputOutputControlByLocalIdentifier $04 inputOutputLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SPEED_GRADE | unsigned char | Bestimmt die Drehgeschwindigkeit des Lüfters Es sind 4 Geschwindigkeitsstufen definiert: 0: Stop, 1: niedrige, 2: mittlere, 3: maximale |

### STATUS_LUEFTER

Lesen der Lüfterwerte KWP2000: $21 ReadDataByLocalIdentifier $B7 recordLocalIdentifier Modus  : Default

_No arguments._

### STEUERN_TEMPERATURABSCHALTWERTE

Setzen der Temperaturabschaltwerte Alle Werte sind in °C anzugeben KWP2000: $3B WriteDataByLocalIdentifier $B8 localIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| TEMP_RELEASE | unsigned char | Temperaturwert unterschreiten: MMI wird eingeschaltet |
| TEMP_WARM | unsigned char | Hat derzeit keine Bedeutung |
| TEMP_HIGH | unsigned char | Temperaturwert überschreiten: MMI wird abgeschaltet Temperaturwert unterschreiten: MOST wird eingeschaltet |
| TEMP_CRIT | unsigned char | Temperaturwert überschreiten: MOST wird abgeschaltet |

### STATUS_TEMPERATURABSCHALTWERTE

Lesen der Temperaturabschaltwerte KWP2000: $21 ReadDataByLocalIdentifier $B8 recordLocalIdentifier Modus  : Default

_No arguments._

### STATUS_TASTE_GEDRUECKT

Auslesen, ob gerade eine Taste gedrueckt ist KWP2000: $21 ReadDataByLocalIdentifier $B9 recordLocalIdentifier - any key pressed Modus  : Default

_No arguments._

### STATUS_TEL_MUTE

Ausgabe, ob Tel-Mute-Leitung aktiv oder inaktiv ist KWP2000: $21 ReadDataByLocalIdentifier $BA recordLocalIdentifier Modus  : Default

_No arguments._

### read_sahara_sw_number

Lesen der Sahara Software Version Nummer KWP2000: $21 ReadDataByLocalIdentifier $FD recordLocalIdentifier Modus  : Default

_No arguments._

### STATUS_LUEFTER_CTRL_DATA

Lesen der Lüftersteuerungsparameter KWP2000: $21 ReadDataByLocalIdentifier $FC recordLocalIdentifier Modus  : Default

_No arguments._

### STEUERN_LUEFTER_CTRL_DATA

Setzen der Lüfter Steuer Daten KWP2000: $3B WriteDataByLocalIdentifier $21 localIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FAN_PARAM_SET | unsigned char | Nummer des Fan Parametersatzes 0: Default 1: xyz1 2: xyz2 |

### STATUS_IS_POWERFOLLOWUP

Infospeicher u. Details 0xA18B lesen und auswerten KWP2000: $22 ReadDataByCommonIdentifier $2001 - $20FF dtcShadowMemoryEntry

_No arguments._

### READ_DIFF_REGISTRY

Vergleich der Current und Default Registry vom ASK KWP2000: $21 ReadDataByLocalIdentifier $B5 recordLocalIdentifier $B6 recordLocalIdentifier

_No arguments._

### CHECK_1C55

Datenbyte 0x1C55 prüfen KWP2000: $31 StartRoutineByLocalIdentifier $FA systemSupplierSpecific $39 localIdentifier Modus  : Default

_No arguments._

### READ_RIT

Auslesen der Routing Information Table eines beliebigen MOST-Devices KWP2000: $21 ReadDataByLocalIdentifier $C0 recordLocalIdentifier  (via LESE_MOSTREGISTER) Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| DEVICEID | string | Logische MOST-Deviceadresse 4-stellig leer lassen wenn DIAG_ADRESSE genutzt wird Beispiel: 0101 |
| DIAG_ADRESSE | unsigned char | Diagnose Steuergeräteadresse (alternativ zu logischer Deviceadresse) Beispiel: 0x62 |

### LESE_MOSTREGISTER

Es wird ein bestimmtes MOST-Register eines bestimmten MOST-Devices ausgelesen KWP2000: $21 ReadDataByLocalIdentifier $C0 recordLocalIdentifier Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| DEVICEID | string | Logische MOST-Deviceadresse 4-stellig leer lassen wenn DIAG_ADRESSE genutzt wird Beispiel: 0101 |
| DIAG_ADRESSE | unsigned char | Diagnose Steuergeräteadresse (alternativ zu logischer Deviceadresse) Beispiel: 0x62 |
| REGISTER | unsigned char | Auszulesende MOST-Registeradresse Beispiel: 0x08 |

### STATUS_SEARCH_FBLOCK

Suche Fblock,InstID KWP2000: $21 ReadDataByLocalIdentifier $B5 recordLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| FBLOCKID | unsigned char | FunktionsblockID |
| INSTID | unsigned char | InstID |

### STATUS_FAN_HISTORY

Lesen des Lüfteransteuerungsverlaufs für den Normalbetrieb KWP2000: $21 ReadDataByLocalIdentifier $FB recordLocalIdentifier Modus  : Default

_No arguments._

### STEUERN_CLEAR_FAN_HISTORY

Löschen des Lüfteransteuerungsverlaufs KWP2000: $31 StartRoutineByLocalIdentifier $FB systemSupplierSpecific Modus  : Default

_No arguments._

### READ_DEVIDS_CURRENT_REGISTRY

Auslesen der DEVIDS der Current Registry KWP2000: $21 ReadDataByLocalIdentifier $BC recordLocalIdentifier Modus   : Default

_No arguments._

### READ_DEVIDS_DEFAULT_REGISTRY

Auslesen der DEVIDS der Default Registry KWP2000: $21 ReadDataByLocalIdentifier $BE recordLocalIdentifier Modus   : Default

_No arguments._

### READ_FBLOCKS_CURRENT_REGISTRY

Auslesen der FBlockIDs einer DEVID der Current Registry KWP2000: $21 ReadDataByLocalIdentifier $BD recordLocalIdentifier Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| ARG_DEVNODE | string | Logische MOST-Deviceadresse 4-stellig Beispiel: 0101 |

### READ_FBLOCKS_DEFAULT_REGISTRY

Auslesen der FBlockIDs einer DEVID der Default Registry KWP2000: $21 ReadDataByLocalIdentifier $BF recordLocalIdentifier Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| ARG_DEVNODE | string | Logische MOST-Deviceadresse 4-stellig Beispiel: 0101 |

### WRITE_NEWSEELAND

Neuseeland Tuner Parametersatz ändern Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| NZ_PARAM_SET | unsigned char | Nummer des Neuseeland Parametersatzes 0: Orginalzustand 1: NZ Codierung |

### STATUS_CHECK_ADC

Datenbyte 0x1E05 prüfen KWP2000: $31 StartRoutineByLocalIdentifier $FA systemSupplierSpecific $39 localIdentifier Modus  : Default

_No arguments._

### STEUERN_ADC_ANHEBUNG

Datenblock ins EEProm schreiben KWP2000: $31 StartRoutineByLocalIdentifier $FA systemSupplierSpecific $37 localIdentifier Modus  : Default

_No arguments._

## Tables

### KONZEPT_TABELLE

| NR | KONZEPT_TEXT |
| --- | --- |
| 0x0F | BMW-FAST |
| 0x0C | KWP2000 |

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

### IARTTEXTE

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
| Compressed Intel | 0x01 |
| Compressed Motorola | 0x02 |
| Unknown | 0xXY |

### TINC_GW_TAB

| NAME | MASKE |
| --- | --- |
| Classic / Invalid | 0x00 |
| Compressed Intel | 0x01 |
| Compressed Motorola | 0x02 |
| Unknown | 0xXY |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | ERROR_ARGUMENT_NOT_IN_TABLE |
| 0x01 | ERROR_INVALID_ARGUMENT |
| 0x02 | ERROR_MISSING_ARGUMENT |
| 0x03 | ERROR_EXECUTION_LOCALROUTINE |
| 0xXY | ERROR_UNKNOWN |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xA168 | Hardware-Defekt Gateway-Rechner |
| 0xA169 | Hardware-Defekt LCD |
| 0xA16A | Prüfsummenfehler Gateway-Tabelle |
| 0xA16B | Energiesparmode aktiv |
| 0xE184 | CAN Low |
| 0xE187 | CAN Controller |
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
| F_ART_ERW | nein |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | ja |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0xA168 | 0x01 | 0x03 | 0x04 | -- |
| 0xE18C | 0x21 | -- | -- | -- |
| 0xE18F | 0x21 | -- | -- | -- |
| 0xE190 | 0x22 | -- | -- | -- |
| 0xE192 | 0x21 | -- | -- | -- |
| default | -- | -- | -- | -- |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Temperatur MMI-Rechner | Grad C | high | signed int | -- | 1 | 1 | 0 |
| 0x03 | Bordnetzspannung | Volt | high | unsigned int | -- | 1 | 10 | 0 |
| 0x04 | Fehlerursache | Hex | high | unsigned int | -- | 1 | 1 | 0 |
| 0x21 | Diagnoseadresse | Hex | high | unsigned int | -- | 1 | 1 | 0 |
| 0x22 | NPR | Hex | high | unsigned int | -- | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | high | unsigned int | -- | 1 | 1 | 0 |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xA170 | Fehler IPC Startup |
| 0xA171 | Fehler IPC Operation |
| 0xA172 | Fehler Laden FPGA |
| 0xA173 | Fehler OS8805 |
| 0xA174 | Fehler FLASH-ROM |
| 0xA175 | Fehler RAM |
| 0xA176 | Fehler EEPROM |
| 0xA177 | MMI-Rechner Temperatur zu hoch |
| 0xA180 | Pufferueberlauf Empfangspuffer |
| 0xA181 | Pufferueberlauf Sendepuffer |
| 0xA182 | Laenge der CAN Input-Nachricht nicht korrekt |
| 0xA183 | Laenge der MOST Input-Nachricht nicht korrekt |
| 0xA184 | Timeout CAN Input-Nachricht |
| 0xA185 | RAD-ON oder SUB-ON Kurzschluss |
| 0xA186 | Sahara DSP Fehler |
| 0xA187 | Sahara Lüfter defekt |
| 0xA188 | Endstufen Fehler |
| 0xA189 | Fehler SH3 Spannungsversorgung |
| 0xA18A | Fehler FPGA Spannungsversorgung |
| 0xA18B | Nachlauf-Stromversorgung Zeitüberschreitung |
| 0x9308 | Device bekam Reset (Error_Reset). |
| 0x9309 | Bis zum Auftreten des Timeouts konnte kein Licht bzw. kein stabiler Lock erkannt werden (Error_NSInit_Timeout). |
| 0x930A | Device ist im Zustand Normal Operation und das Licht am Eingang geht ohne Vorankuendigung aus (Error_Sudden_light_off). |
| 0x930B | Anfragendes Device bekommt keine Antwort obwohl Partner vorhanden ist (Error_Device_No_Answer). |
| 0x930C | Kurze Unlocks (Error_Unlock_Short). |
| 0x930D | Kein Broadcast Configuration(Status) vom Networkmaster erhalten (Error_t_CfgStatus). |
| 0x930F | Ein Device hat im laufenden Betrieb seinen Bypass All geschlossen (Error_NCE). |
| 0x9310 | Empfaenger hat eine Nachricht nicht abgenommen (Error_NAK). |
| 0xFFFF | unbekannter Fehlerort |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | ja |

### IUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0xA170 | 0x01 | 0x03 | -- | -- |
| 0xA171 | 0x01 | 0x03 | -- | -- |
| 0xA172 | 0x01 | 0x03 | -- | -- |
| 0xA173 | 0x01 | 0x03 | -- | -- |
| 0xA174 | 0x01 | 0x03 | -- | -- |
| 0xA175 | 0x01 | 0x03 | -- | -- |
| 0xA176 | 0x01 | 0x03 | -- | -- |
| 0xA177 | 0x01 | 0x03 | -- | -- |
| 0xA180 | 0x08 | -- | -- | -- |
| 0xA181 | 0x08 | -- | -- | -- |
| 0xA182 | 0x04 | 0x07 | -- | -- |
| 0xA183 | 0x05 | 0x06 | 0x07 | -- |
| 0xA184 | 0x04 | -- | -- | -- |
| 0xA185 | 0x01 | -- | -- | -- |
| 0xA186 | 0x01 | -- | -- | -- |
| 0xA187 | 0x01 | 0x03 | -- | -- |
| 0xA18B | 0x26 | 0x27 | 0x28 | 0x25 |
| 0x930B | 0x21 | 0x22 | 0x23 | 0x24 |
| 0x930F | 0x25 | -- | -- | -- |
| 0x9310 | 0x21 | 0x22 | 0x23 | 0x24 |
| default | -- | -- | -- | -- |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Temperatur MMI-Rechner | Grad C | high | signed int | -- | 1 | 1 | 0 |
| 0x03 | Bordnetzspannung | Volt | high | unsigned int | -- | 1 | 10 | 0 |
| 0x04 | CAN-Identifier | Hex | high | unsigned int | -- | 1 | 1 | 0 |
| 0x05 | FBlockID&InstID | Hex | high | unsigned int | -- | 1 | 1 | 0 |
| 0x06 | FktID&OpType | Hex | high | unsigned int | -- | 1 | 1 | 0 |
| 0x07 | Laenge Nachricht | Hex | high | unsigned int | -- | 1 | 1 | 0 |
| 0x08 | Bustyp | Hex | high | unsigned int | -- | 1 | 1 | 0 |
| 0x21 | Logische-Kotenadresse | Hex | high | unsigned int | -- | 1 | 1 | 0 |
| 0x22 | FBlockID | Hex | high | unsigned int | -- | 1 | 1 | 0 |
| 0x23 | InstID | Hex | high | unsigned int | -- | 1 | 1 | 0 |
| 0x24 | FktID | Hex | high | unsigned int | -- | 1 | 1 | 0 |
| 0x25 | Diagnoseadresse | Hex | high | unsigned int | -- | 1 | 1 | 0 |
| 0x26 | Weckgrund       | Hex | high | unsigned int | -- | 1 | 1 | 0 |
| 0x27 | Einschlaf Fehlerursache | Hex | high | unsigned int | -- | 1 | 1 | 0 |
| 0x28 | Task-Signatur   | Hex | high | unsigned int | -- | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | -- | unsigned int | -- | 1 | 1 | 0 |

### TWAKEUPSOURCE

| MASKE | TEXT |
| --- | --- |
| 0x01 | Weckursache = CAN |
| 0x02 | Weckursache = MOST |
| 0x03 | Weckursache = IPC |
| 0x04 | Weckursache = INTERN |
| 0x05 | Weckursache = RESET/SWITCH TO POWER |
| 0x40 | Weckursache = ENTERTAINMENT BUTTON |
| 0x41 | Weckursache = CD-EJECT |
| 0x42 | Weckursache = CD-INSERT |
| 0x45 | Weckursache = OTHER |

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
| 0x54 | SDARS   (Satelliten-Radio) |
| 0x61 | FBI     (Flexible Bus-Interface) |
| 0x62 | MCGW    (MOST/CAN-Gateway) |
| 0x63 | MMI     (MMI/GT Front\| M-ASK \| CCC) |
| 0x90 | Sahara DSP |
| 0x91 | Sprachpaket |
| 0x92 | Virtuelles SG Hardware |
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
| 0x30 | AudioTapePlayer |
| 0x31 | AudioDiscPlayer |
| 0x32 | MultiMediaChanger |
| 0x40 | AM/FM Tuner |
| 0x41 | TMC Tuner |
| 0x42 | TVTuner |
| 0x43 | ExternSource |
| 0x44 | SDARS |
| 0x50 | TelefonFix |
| 0x51 | PhoneBook |
| 0x52 | Navigationssystem |
| 0x54 | Bluetooth |
| 0x6F | Monitor |
| 0x71 | Climate |
| 0x80 | MMI_Terminal |
| 0x81 | KOMBI_Terminal |
| 0x82 | HUD_Terminal |
| 0x90 | Telematik |
| 0xAB | EDIABAS4MOST |
| 0xC9 | Service |
| 0xCA | KombiMiscFkts |
| 0xCB | Bordcomputer |
| 0xCC | ADASInterface |
| 0xDE | Telematic |
| 0xE0 | KombiInterface |
| 0xE1 | HUDInterface |
| 0xXY | Unbekannter FBlock |

### TTASTE_GEDRUECKT

| MASKE | NAME |
| --- | --- |
| 0x03 | Eject |
| 0x04 | Entertainment |
| 0x05 | Suchlauf_Ab |
| 0x06 | Suchlauf_Auf |

### TTELMUTE

| MASKE | TEXT |
| --- | --- |
| 0x00 | Tel-Mute-Leitung inaktiv |
| 0x01 | Tel-Mute-Leitung aktiv |

### TWAKEUPREASON

| VALUE | REASON |
| --- | --- |
| 0x0001 | CAN - BUS |
| 0x0002 | MOST - BUS |
| 0x0003 | Unused |
| 0x0004 | Unused |
| 0x0005 | POWER - UP - BOOT |
| 0x0040 | KEY_ENTERTAINMENT / MMI_REQUEST |
| 0x0041 | KEY_EJECT |
| 0x0042 | CD_INSERT |
| 0x0045 | UNDEFINED (nur für interne Tests) |

### TASLEEPERRORREASON

| VALUE | REASON |
| --- | --- |
| 0x00 | No Sleep-Request Error detected yetLow Byte (xx) is Substate in SleepRequest before WDG. |
| 0x01 | one GW- or MMI task creates Sleep-Request-Timeout |
| 0x02 | GW- or MMI task is not ready for sleep |
| 0x04 | MOST-Bus answer creates Sleep-Request-Timeout |
| 0x08 | MOST-Bus is not ready for sleep |
| 0x10 | CAN-Bus answer creates Sleep-Request-Timeout |
| 0x20 | CAN-Bus is not ready for sleep |
| 0x40 | Repetive Request Restart |

### TTASKSIGNATURE

| VALUE | TASK |
| --- | --- |
| 0x77 | CAN - Task |
| 0x78 | EEPROM - Task |
| 0x98 | Analog/Digital Conversion - Task |
| 0x99 | IPC - Task |
| 0x9A | MMI - Task |
| 0x9B | IPC - Task ( development ) |
| 0x9C | IPC - Task MMI wait |
| 0xAA | Gateway Core  - Task |
| 0xAD | Gateway Administrator - Task |
| 0xBB | Viewer - Task |
| 0xBE | MOST - Task |
| 0xCC | Gateway Administrator - Task (Sleep Request) |
| 0xFF | Message Simulator - Task ( development ) |
