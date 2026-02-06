# GS19C.prg

## General

|  |  |
| --- | --- |
| File | GS19C.prg |
| Type | PRG |
| Jobs | 156 |
| Tables | 56 |
| Origin | BMW EA-71 Burkhardt |
| Revision | 0.010 |
| Author | ZF TE-HI H.Windberg, ZF ES52 H.Wagner |
| ECU Comment | SGBD fuer GS19.11 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Getriebesteuerung GS19.11  |  |  |
| ORIGIN | string | BMW EA-71 Burkhardt |  |  |
| REVISION | string | 0.010 |  |  |
| AUTHOR | string | ZF TE-HI H.Windberg, ZF ES52 H.Wagner |  |  |
| COMMENT | string | SGBD fuer GS19.11  |  |  |
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

### SPEICHER_SCHREIBEN

Beschreiben des Steuergeraete-Speichers Als Argumente werden uebergeben: Speichersegment, Start-Adresse, Anzahl der Datenbytes und Datenbytes (Datenbytes durch Komma getrennt) KWP2000: $3D WriteMemoryByAddress Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | string | table SpeicherSegment SEG_NAME SEG_TEXT |
| ADRESSE | long | 0x000000 - 0xFFFFFF |
| ANZAHL | int | 1 - n ( max. 249 ) |
| DATEN | string | zu schreibende Daten (Anzahl siehe oben) z.B. 1,2,03,0x04,0x05... |

### PRUEFCODE_LESEN

Standard Pruefcode lesen fuer Kundendienst KWP2000: $1A ReadECUIdentification KWP2000: $18 ReadDiagnosticTroubleCodesByStatus KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes Modus  : Default

_No arguments._

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

### SIGNATURTEST_DAF

Signaturtest DAF KWP2000: $31 StartRoutineByLocalIdentifier Modus  : Default

_No arguments._

### SIGNATURTEST_PAF

Signaturtest PAF KWP2000: $31 StartRoutineByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_GETRIEBETEMPERATUR

Auslesen der Getriebetemperatur KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_MOTORTEMPERATUR

Auslesen der Motortemperatur KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_FAHRPEDALWINKEL

Auslesen des Fahrpedalwinkels KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ABTRIEBSDREHZAHL

Auslesen der Abtriebsdrehzahl KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_TURBINENDREHZAHL

Auslesen der Turbinendrehzahl KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_MOTORDREHZAHL

Auslesen der Motordrehzahl KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_RADGESCHWINDIGKEITEN

Auslesen der mittleren Radgeschwindigkeiten KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_MOTORISTMOMENT

Auslesen des Motoristmoments KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_MOTORSOLLMOMENT

Auslesen des Motorsollmoments KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ISTGANG

Auslesen des ISTGANGS KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_WK

Auslesen des Wandlerkupplung KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_BATTERIESPANNUNG

Auslesen der Batteriespannung KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_DR_MV_SPANNUNG

Auslesen des DR/MV Versorgungsspannung KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_MAGNETVENTILE

Auslesen des Sollzustandes der MV KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_INPUTPEGEL

Auslesen der Inputpegel KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_SIGNAL_0

Auslesen der Signalstati 0 KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_SIGNAL_1

Auslesen der Signalstati 1 KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_SIGNAL_2

Auslesen der Signalstati 2 KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_SIGNAL_3

Auslesen der Signalstati 3 KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_GEAR

Auslesen Status Wandlerkupplung Schaltart KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_STEPTRONIC

Auslesen Zustand der aktuellen Steptronictaster KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_WH_POSITION

Auslesen Status aktuelle Waehlhebelposition KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_GETRIEBEPOSITION

Auslesen  aktuelle Getriebeposition KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_AGS

Auslesen  AGS Schaltdiagramm/Kurvenfahrt KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ERSATZPROGRAMME_3

Auslesen  der aktiven Ersatzprogramme im EGS KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ERSATZPROGRAMME_2

Auslesen  der aktiven Ersatzprogramme im EGS KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ERSATZPROGRAMME_1

Auslesen  der aktiven Ersatzprogramme im EGS KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ERSATZPROGRAMME_0

Auslesen  der aktiven Ersatzprogramme im EGS KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_E_SCHALTUNG

Auslesen Groessen fuer E-Schaltung KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_STANDARDABSICHERUNG

Auslesen Fehler Standardabsicherung KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_NOTENTRIEGELUNG

Der Zustand der Notentriegelung wird zurueckgegeben Notentriegelung betaetigt, wenn RP0=P und P-Leitungen sensieren unplausibel oder ausgelegt Modus  : Default

_No arguments._

### STATUS_IO_LESEN

Auslesen aller Messwerte 0x01..0x7F KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### RESET_EGS

EGS fuehrt Reset aus KWP2000: $11 EcuResetService Modus  : Default

_No arguments._

### AIF_AKTUELL_LESEN

aktuelles Anwenderinfofeld lesen KWP2000: $1A ReadEcuIdentification Modus  : Default

_No arguments._

### STATUS_SYSTEM_SUPPLIER_ECU_SERIAL_NR

Auslesen der SYSTEM_SUPPLIER_ECU_SERIAL_NR KWP2000: $1A ReadEcuIdentification Modus  : Default

_No arguments._

### STATUS_MODUL_SERIAL_NR

Auslesen der MODUL_SERIAL_NR KWP2000: $1A ReadMODULIdentification Modus  : Default

_No arguments._

### STATUS_SYSTEM_BOOT_VERSION_NR

Auslesen der SYSTEM_BOOT_VERSION_NR und SYSTEM_BOOT_TYPE KWP2000: $1A ReadEcuIdentification Modus  : Default

_No arguments._

### STATUS_SYSTEM_BS_BOOT_VERSION_NR

Auslesen der SYSTEM_BS_BOOT_VERSION_NR KWP2000: $1A ReadEcuIdentification Modus  : Default

_No arguments._

### STATUS_SW_STAND_ENTWICKLUNG

Auslesen der SYSTEM_SUPPLIER_ECU_SOFTWARE_VERSION_NR KWP2000: $1A ReadEcuIdentification Modus  : Default

_No arguments._

### STATUS_SYSTEM_SUPPLIER_ECU_HW_NR

Auslesen der SYSTEM_SUPPLIER_ECU_HW_NR KWP2000: $1A ReadEcuIdentification Modus  : Default

_No arguments._

### STATUS_SYSTEM_NAME_OR_ENGINE_TYPE

KWP2000: $1A ReadEcuIdentification Modus  : Default

_No arguments._

### STEUERN_GANGANZEIGE_STARTEN

Anzeige Gang im Kombi KWP2000: $31 StartRoutineByLocalIdentifier Modus  : Default

_No arguments._

### STEUERN_LERNFUNKTIONEN_RUECKSETZEN

Ruecksetzen aller Lernfunktionen auf Default KWP2000: $31 StartRoutineByLocalIdentifier Modus  : Default

_No arguments._

### STEUERN_GANGANZEIGE_STOPPEN

Anzeige Gang im Kombi beenden KWP2000: $32 StopRoutineByLocalIdentifier Modus  : Default

_No arguments._

### BACKUP_FS_LESEN

Backup-Fehlerspeicher lesen KWP2000:  ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STEUERN_SIGNAL_STELLGLIED

Status setzen der Signale/Stellglieder KWP2000: $30 InputOutputControlByLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SIGNAL | string | MV1,MV2,MV3,EDS1,EDS2,EDS3,EDS4,EDS5,EDS6,SHIFTLOCK,INTERLOCK,KOMBI |
| ZUSTAND | string | EIN,EIN/AUS,AUS |

### STATUS_SIGNAL_STELLGLIED

Auslesen Status der Signale/Stellglieder KWP2000: $30 InputOutputControlByLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SIGNAL | string | MV1,MV2,MV3,EDS1,EDS2,EDS3,EDS4,EDS5,EDS6,L1,L2,L3,L4,P_LEITUNG,SHIFTLOCK,INTERLOCK |

### SEKUNDAER_FS_LESEN

Auslesen Sekundaerfehlerspeicher KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BEREICH | int | 1=RB1..RB42, 2=RB43..RB84 3=RB85..RB96 |

### STATUS_ADAPTIONSWERTE_1

Auslesen der Adaptionswerte Flare Teil 1 KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_2

Auslesen der Adaptionswerte Flare Teil 2 KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_3

Auslesen der Adaptionswerte Flare Teil 3 KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_4

Auslesen der Adaptionswerte Flare Teil 4 KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_5

Auslesen der Adaptionswerte GLÜ Teil 1 KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_6

Auslesen der Adaptionswerte GLÜ Teil 2 KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_7

Auslesen der Adaptionswerte GLÜ Teil 3 KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_8

Auslesen der Adaptionswerte GLÜ Teil 4 KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_9

Auslesen der Adaptionswerte GLS Teil 1 KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_10

Auslesen der Adaptionswerte GLS Teil 2 KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_11

Auslesen der Adaptionswerte GLS Teil 3 KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_12

Auslesen der Adaptionswerte GLS Teil 4 KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_13

Auslesen der Adaptionswerte GLS Teil 5 KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_14

Auslesen der Adaptionswerte GLS Teil 6 KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_15

Auslesen der Adaptionswerte GLS Teil 7 KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_16

Auslesen der Adaptionswerte GLS Teil 8 KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_17

Auslesen der Adaptionswerte PFN kupplungsbezogen KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_18

Auslesen der Adaptionswerte SBC KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STEUERN_ADAPTIONSWERTE_RUECKSETZEN

alle Adaptionswerte ruecksetzen KWP2000: $31 StartRoutineByLocalIdentifier Modus  : Default

_No arguments._

### QUICKTEST

Anzahl Fehler / Kilometerstand KWP2000: $31 StartRoutineByLocalIdentifier Modus  : Default

_No arguments._

### EGS_DIAGNOSE_TESTJOB

Job fuer EGS Diagnosetest KWP2000: Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ANZAHL_DATEN | int | Anzahl Datenbytes |
| DATEN_1 | int | Daten Byte 1 |
| DATEN_2 | int | Daten Byte 2 |
| DATEN_3 | int | Daten Byte 3 |
| DATEN_4 | int | Daten Byte 4 |
| DATEN_5 | int | Daten Byte 5 |
| DATEN_6 | int | Daten Byte 6 |

### STATUS_HARDWARE_REFERENZ

BRIF Inhalt ausgeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_PROGRAMM_REFERENZ

ZIF Inhalt ausgeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_DATEN_REFERENZ

DIF Inhalt ausgeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_RESET_ZAEHLER

Resetzaehler aus EEPROM auslesen KWP2000: $21 Modus  : Default

_No arguments._

### STATUS_TIMEOUTDIAGNOSE

Timeoutdiagnose aktiv für CAN Nachrichten auslesen KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_TEMPERATURKOLLEKTIV

Temperaturkollektiv aus EEPROM auslesen KWP2000: $21 Modus  : Default

_No arguments._

### STATUS_ZWANGSHOCHSCHALTUNG_ZAEHLER

Zaehler Zwangshochschaltung DME aus EEPROM auslesen KWP2000: $21 Modus  : Default

_No arguments._

### STATUS_AUTO_P_PM1_ZAEHLER

Zaehler Auto-P wegen Power Modul Anforderung KWP2000: $21 Modus  : Default

_No arguments._

### STATUS_AUTO_P_EMF1_ZAEHLER

Zaehler Auto-P wegen EMF Anforderung KWP2000: $21 Modus  : Default

_No arguments._

### STATUS_AUTO_P_EMF2_ZAEHLER

Zaehler Auto-P wegen Absicherung EMF Komfortebene KWP2000: $21 Modus  : Default

_No arguments._

### STATUS_AUTO_N_SZL_ZAEHLER

Zaehler Auto-N wegen Zwischenposition/Init von SZL KWP2000: $21 Modus  : Default

_No arguments._

### STATUS_D_S_M_ZAEHLER

Fahrprogrammkollektiv aus EEPROM auslesen KWP2000: $21 Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_GLUE_1_2

Auslesen der Adaptionswerte KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_GLUE_2_3

Auslesen der Adaptionswerte KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_GLUE_3_4

Auslesen der Adaptionswerte KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_GLUE_4_5

Auslesen der Adaptionswerte KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_GLUE_5_6

Auslesen der Adaptionswerte KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_PFN

Auslesen der Adaptionswerte KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_PF

Auslesen der Adaptionswerte KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_SF

Auslesen der Adaptionswerte KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_ADA

Auslesen der Adaptionswerte KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_FLARE_2_1

Auslesen der Adaptionswerte KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_FLARE_3_2

Auslesen der Adaptionswerte KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_FLARE_4_3

Auslesen der Adaptionswerte KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_FLARE_5_4

Auslesen der Adaptionswerte KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_FLARE_6_5

Auslesen der Adaptionswerte KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_SBC

Auslesen der Adaptionswerte KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_GANGEINLEGEN

Auslesen der Adaptionswerte KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_GLS_1_2

Auslesen der Adaptionswerte KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_GLS_2_3

Auslesen der Adaptionswerte KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_GLS_3_4

Auslesen der Adaptionswerte KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_GLS_4_5

Auslesen der Adaptionswerte KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_GLS_5_6

Auslesen der Adaptionswerte KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_GLS_2_1

Auslesen der Adaptionswerte KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_GLS_3_2

Auslesen der Adaptionswerte KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_GLS_4_3

Auslesen der Adaptionswerte KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_GLS_5_4

Auslesen der Adaptionswerte KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_GLS_6_5

Auslesen der Adaptionswerte KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_RAUS

Auslesen des DR/MV Versorgungsspannung KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_EGS_PRUEFCODE_LESEN

Auslesen diverser Daten zur Expertendiagnose KWP2000: $21 Modus  : Default

_No arguments._

### STATUS_KD_MASKE

Auslesen der Kundendienstmaske aus EGS KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STEUERN_KD_MASKE

Programmieren der Kundendienstmaske KWP2000: $3B WriteDataByLocalId Oeltemp < 80 Grad, Nab < 100 U/min, Ntu < 100 U/min

| Name | Type | Description |
| --- | --- | --- |
| MTRONIK | int | 0=Original-Mechatronik, 1=Tausch-Mechatronik |
| EDS6 | int | 0=kein KD-Druckregler verbaut, 1=KD-Druckregler verbaut |
| EDS5 | int | 0=kein KD-Druckregler verbaut, 1=KD-Druckregler verbaut |
| EDS4 | int | 0=kein KD-Druckregler verbaut, 1=KD-Druckregler verbaut |
| EDS3 | int | 0=kein KD-Druckregler verbaut, 1=KD-Druckregler verbaut |
| EDS2 | int | 0=kein KD-Druckregler verbaut, 1=KD-Druckregler verbaut |
| EDS1 | int | 0=kein KD-Druckregler verbaut, 1=KD-Druckregler verbaut |

### _RBM_RATIOS_AUSLESEN

RBM Inhalt ausgeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_TEMP_KOLLEKTIV_GETRIEBEOEL

Temperaturkollektiv aus EEPROM auslesen KWP2000: $21 Modus  : Default

_No arguments._

### STEUERN_TEMP_KOLLEKTIV_RUECKSETZEN

Temperaturkollektiv ruecksetzen KWP2000: $31 StartRoutineByLocalIdentifier Modus  : Default

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

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### SG_DIAGNOSEKONZEPT

| RANG | KONZEPT_TEXT |
| --- | --- |
| 1 | BMW-FAST |
| 2 | KWP2000* |
| 3 | KWP2000 |
| - | DS2 |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x4E20 | Elektronisches Drucksteuerventil 1 |
| 0x4E21 | Elektronisches Drucksteuerventil 2 |
| 0x4E22 | Elektronisches Drucksteuerventil 3 |
| 0x4E23 | Elektronisches Drucksteuerventil 4 |
| 0x4E24 | Elektronisches Drucksteuerventil 5 |
| 0x4E25 | Elektronisches Drucksteuerventil 6 |
| 0x4E26 | Stromfehler EDS in P/R/N |
| 0x4E84 | Magnetventil  1 |
| 0x4E85 | Magnetventil  2 |
| 0x4E86 | Magnetventil  3 |
| 0x4E87 | Magnetventil  4 (Shiftlock) |
| 0x4E89 | Magnetventil 1 oder Magnetventil 2 klemmt mechanisch |
| 0x4EE8 | Turbinendrehzahlsensor |
| 0x4EE9 | Abtriebsdrehzahlsensor |
| 0x4EEB | Abtriebsdrehzahl - Gradient zu hoch |
| 0x4EF2 | Getriebeoeltemperatursensor |
| 0x4EF3 | Steuergerät-Temperatursensor |
| 0x4F81 | Übersetzungsueberwachung Kupplung A |
| 0x4F82 | Übersetzungsueberwachung Kupplung B |
| 0x4F83 | Übersetzungsueberwachung Kupplung C |
| 0x4F84 | Übersetzungsueberwachung Kupplung D |
| 0x4F85 | Übersetzungsueberwachung Kupplung E |
| 0x4F53 | Wandlerüberbrückungskupplung fehlerhaft geöffnet |
| 0x4F87 | Übersetzungsueberwachung Schaltung 1-2 |
| 0x4F88 | Übersetzungsueberwachung Schaltung 2-3 |
| 0x4F89 | Übersetzungsueberwachung Schaltung 3-4 |
| 0x4F8A | Übersetzungsueberwachung Schaltung 4-5 |
| 0x4F8B | Übersetzungsueberwachung Schaltung 5-6 |
| 0x4F8C | Übersetzungsueberwachung Schaltung 6-5 |
| 0x4F8D | Übersetzungsueberwachung Schaltung 5-4 |
| 0x4F8E | Übersetzungsueberwachung Schaltung 4-3 |
| 0x4F8F | Übersetzungsueberwachung Schaltung 3-2 |
| 0x4F90 | Übersetzungsueberwachung Schaltung 2-1 |
| 0x4F91 | Übersetzungsueberwachung Kupplung A-D |
| 0x4F92 | Übersetzungsueberwachung Kupplung A-C |
| 0x4F93 | Übersetzungsueberwachung Kupplung A-B |
| 0x4F94 | Übersetzungsueberwachung Kupplung A-E |
| 0x4F95 | Übersetzungsueberwachung Kupplung B-E |
| 0x4F96 | Übersetzungsueberwachung Kupplung C-E |
| 0x4F97 | Übersetzungsueberwachung Kupplung B-D |
| 0x4F6B | Ölalterungsschwelle |
| 0x4F6F | Hohe Drehungleichförmigkeit |
| 0x4F70 | Motorüberdrehzahl |
| 0x4F71 | Botschaft von der Instrumentenkombination fehlt während Notentriegelung Parksperre betätigt |
| 0x4F77 | Fehlerhafter Positiver Motoreingriff |
| 0x4FB0 | Getriebesteuerung:interner Fehler (EPROM/FLASH) |
| 0x4FB1 | Getriebesteuerung:interner Fehler (EEPROM) |
| 0x4FB2 | Getriebesteuerung:interner Fehler (Watchdog) |
| 0x4FB7 | Getriebesteuerung:interner Fehler (EEPROM schreiben) |
| 0x4FB8 | Getriebesteuerung:interner Fehler (Überwachungsebene 2) |
| 0x4FB9 | Getriebesteuerung:interner Fehler (TPU/QADC |
| 0x5014 | Versorgungsspannung, Getriebesteuerung |
| 0x5015 | EDS/MV Versorgungsspannung |
| 0x5016 | Sensorversorgungsspannung |
| 0x5079 | Botschaft über Serielle Leitung fehlt |
| 0x507A | Information Serielle Leitung unplausibel |
| 0x507B | Parksperrensensoren unplausibel |
| 0x507C | Parksperre fehlerhaft eingelegt |
| 0x507D | Parksperre fehlerhaft ausgelegt |
| 0x5087 | Tipp- oder M-Gassenschalter |
| 0x5088 | Getriebewahlschaltersensoren fehlerhaft |
| 0x5089 | P/N-Leitung passt nicht zu Getriebeposition |
| 0x50DC | Getriebepositionssensor |
| 0x50DD | Aktivierung zweier Ersatzfunktionen gleicher Priorität |
| 0x51A5 | Signal (Momentenschnittstelle) von der Motorsteuerung fehlerhaft |
| 0x51A7 | Signal (Motordrehzahl) von der Motorsteuerung fehlerhaft |
| 0x51A8 | Signal (Drosselklappe/Fahrpedal)von der Motorsteuerung fehlerhaft |
| 0x51AD | Botschaft (Raddrehzahlen) von der DSC fehlt |
| 0x51AA | Signal (Positionsinformation) vom Schaltzentrum Lenksäule fehlt |
| 0x51AB | Signal (P-Taster) vom Schaltzentrum Lenksäule fehlerhaft |
| 0x51AC | Signal (Identifikationsgeber steckt) vom Car Access System fehlerhaft |
| 0x51AE | Botschaft (Bremslichtschalter) von der Motorsteuerung unplausibel |
| 0xCF07 | Kommunikationsfehler:PT-CAN |
| 0xCF14 | Botschaft von der Motorsteuerung:Drehmoment 1 |
| 0xCF15 | Botschaft von der Motorsteuerung:Drehmoment 2 |
| 0xCF16 | Botschaft von der Motorsteuerung:Drehmoment 3 |
| 0xCF17 | Botschaft von der Motorsteuerung:Motordaten |
| 0xCF18 | Botschaft von der Motorsteuerung:Fahrgeschwindigkeitsreglert |
| 0xCF19 | Botschaft von der DSC:Radgeschwindigkeit PT-CAN |
| 0xCF1A | Botschaft von der DSC:Status DSC PT-CAN |
| 0xCF1B | Botschaft von der DSC:Geschwindigkeit PT-CAN |
| 0xCF1C | Botschaft von der DSC:Drehmomentanforderung |
| 0xCF1D | Botschaft von der DSC:Status HDC |
| 0xCF1E | Botschaft von der DSC:Radtoleranzabgleich |
| 0xCF1F | Botschaft von der CAS: Klemmenstatus |
| 0xCF20 | Botschaft von der CAS: ZV und Klappenzustand |
| 0xCF21 | Botschaft von der Instrumentenkombination:Kilometerstand Reichweite |
| 0xCF22 | Botschaft von der Instrumentenkombination:Aussentemperatur Relativzeit |
| 0xCF23 | Botschaft von der Instrumentenkombination:Status KOMBI |
| 0xCF24 | Botschaft von der Parkbremse (EMF): Verzögerungsanforderung |
| 0xCF25 | Botschaft vom Satellit Sitz Fahrer (SSFA): Sitzbelegung Gurtkontakte |
| 0xCF26 | Botschaft von der Actice Cruise Control(ACC): Drehmomentanforderung |
| 0xCF27 | Botschaft vom Schaltzentrum Lenksäule (SZL): Bedienung Getriebewahlschalter |
| 0xCF28 | Botschaft vom Powermodul: Powermanagement Batteriespannung |
| 0xCF29 | Botschaft vom Anhängermodul: Status Anhänger |
| 0xCF2A | Botschaft vom Schaltzentrum Mittelkonsole (SZM): Fahrzeugmodus |
| 0xCF2B | Botschaft vom Längsdynamikmanagement (LDM): Anforderung Radmoment Antriebsstrang |
| 0xCF2C | Botschaft vom Verteilergetriebe:DXC1 |
| 0x4F7A | Botschaft vom Verteilergetriebe fehlerhaft |
| 0x4FBA | Aktuatoransteuerung und Wählhebelposition unplausibel, Geschwindigkeit über Schwellwert |
| 0x4FBB | Aktuatoransteuerung und Wählhebelposition unplausibel, Geschwindigkeit unter Schwellwert |
| 0x4EFB | Getriebe-Übertemperatur |
| 0x4EFD | Getriebesteuerung:internes Bauteil defekt (CG122-HS-FET) |
| 0x4EFE | Getriebesteuerung:internes Bauteil defekt (CG122), Spannungseingänge |
| 0x4EFF | Ölschädigung |
| 0x4EFC | Getriebesteuerung:internes Bauteil defekt (CG122) |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | ja |
| F_ART_ERW | nein |
| F_PCODE | ja |
| F_PCODE7 | ja |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x4E20 | sgt_Gear0 | 0x01 | 0x02 | 0x03 |
| 0x4E21 | sgt_Gear0 | 0x01 | 0x02 | 0x03 |
| 0x4E22 | sgt_Gear0 | 0x01 | 0x02 | 0x03 |
| 0x4E23 | sgt_Gear0 | 0x01 | 0x02 | 0x03 |
| 0x4E24 | sgt_Gear0 | 0x01 | 0x02 | 0x03 |
| 0x4E25 | sgt_Gear0 | 0x01 | 0x02 | 0x03 |
| 0x4E26 | sgt_Gear0 | 0x01 | 0x02 | 0x03 |
| 0x4E84 | sgt_Gear0 | 0x01 | 0x02 | sgt_Out0 |
| 0x4E85 | sgt_Gear0 | 0x01 | 0x02 | sgt_Out0 |
| 0x4E86 | sgt_Gear0 | 0x01 | 0x02 | sgt_Out0 |
| 0x4E87 | sgt_Gear0 | 0x01 | 0x02 | sgt_Out0 |
| 0x4E89 | sgt_Gear0 | 0x01 | sgt_Inp0 | sgt_Out0 |
| 0x4EE8 | sgt_Gear0 | 0x03 | 0x07 | 0x01 |
| 0x4EE9 | sgt_Gear0 | 0x0E | 0x03 | 0x01 |
| 0x4EEB | sgt_Gear0 | 0x0E | 0x03 | 0x01 |
| 0x4EF2 | 0x01 | 0x06 | 0x04 | sgt_Sig0 |
| 0x4EF3 | 0x01 | 0x06 | 0x04 | sgt_Gear0 |
| 0x4F81 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F82 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F83 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F84 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F85 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F53 | sgt_Gear0 | 0x0B | 0x05 | 0x07 |
| 0x4F87 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F88 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F89 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F8A | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F8B | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F8C | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F8D | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F8E | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F8F | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F90 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F91 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F92 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F93 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F94 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F95 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F96 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F97 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F6B | 0x01 | 0x01 | 0x06 | 0x08 |
| 0x4F6F | sgt_Gear0 | 0x0B | 0x05 | 0x07 |
| 0x4F70 | sgt_Gear0 | 0x05 | 0x03 | 0x07 |
| 0x4F71 | sgt_Inp0 | 0x04 | sgt_Gear0 | sgt_Out0 |
| 0x4F77 | 0x0B | sgt_Can0 | sgt_Gear0 | 0x05 |
| 0x4FB0 | 0x01 | 0x04 | sck_Fast_Error | sck_Error |
| 0x4FB1 | 0x01 | 0x04 | sck_Fast_Error | sck_Error |
| 0x4FB2 | 0x01 | 0x04 | 0x06 | 0x0C |
| 0x4FB7 | 0x01 | 0x04 | sck_Fast_Error | sck_Error |
| 0x4FB8 | 0xFE | 0xFE | 0xFE | 0x0E |
| 0x4FB9 | 0x17 | 0x02 | 0x01 | 0x06 |
| 0x5014 | 0x05 | 0x04 | 0x01 | sgt_Gear0 |
| 0x5015 | 0x0C | 0x04 | 0x02 | 0x01 |
| 0x5016 | 0x04 | 0x17 | 0x01 | 0x03 |
| 0x5079 | 0x0C | 0x04 | sgt_Sig3 | 0x90 |
| 0x507A | 0x0C | 0x04 | sgt_Sig3 | 0x90 |
| 0x507B | sgt_Sig0 | sgt_Inp0 | 0x02 | sgt_Out0 |
| 0x507C | sgt_Sig0 | sgt_Inp0 | 0x02 | sgt_Out0 |
| 0x507D | sgt_Sig0 | sgt_Inp0 | 0x02 | sgt_Out0 |
| 0x5087 | sgt_Inp0 | 0x04 | sgt_Gear0 | 0x06 |
| 0x5088 | sgt_Inp0 | 0x17 | 0x03 | 0x01 |
| 0x5089 | sgt_Inp0 | sgt_Sig0 | 0x04 | 0x01 |
| 0x50DC | sgt_Can0 | 0x04 | sgt_Sig3 | 0x90 |
| 0x50DD | rdi_massn0 | rdi_massn1 | rdi_massn2 | rdi_massn3 |
| 0x51A5 | 0x0B | 0x04 | sgt_Can0 | 0x05 |
| 0x51A7 | 0x05 | 0x04 | sgt_Can0 | 0x08 |
| 0x51A8 | 0x09 | 0x04 | sgt_Can0 | 0x05 |
| 0x51AD | sgt_Gear0 | 0x03 | 0x07 | 0x0E |
| 0x51AA | 0x0C | 0x04 | sgt_Sig3 | 0x90 |
| 0x51AB | sgt_Inp0 | sgt_Gear0 | sgt_Sig3 | 0x90 |
| 0x51AC | sgt_Sig3 | 0x04 | sgt_Can0 | 0x90 |
| 0x51AE | sgt_Sig2 | 0x04 | sgt_Can0 | sgt_Sig3 |
| 0xCF07 | 0x0C | 0x04 | sgt_Can0 | sgt_Sig3 |
| 0xCF14 | 0x0C | 0x04 | sgt_Can0 | 0x05 |
| 0xCF15 | 0x0C | 0x04 | sgt_Can0 | 0x05 |
| 0xCF16 | 0x0C | 0x04 | sgt_Can0 | 0x05 |
| 0xCF17 | 0x0C | 0x04 | sgt_Can0 | 0x05 |
| 0xCF18 | 0x0C | 0x04 | sgt_Can0 | 0x05 |
| 0xCF19 | 0x0C | 0x04 | sgt_Can0 | 0x03 |
| 0xCF1A | 0x0C | 0x04 | sgt_Can0 | 0x03 |
| 0xCF1B | 0x0C | 0x04 | sgt_Can0 | 0x03 |
| 0xCF1C | 0x0C | 0x04 | sgt_Can0 | 0x03 |
| 0xCF1D | 0x0C | 0x04 | sgt_Can0 | 0x03 |
| 0xCF1E | 0x0C | 0x04 | sgt_Can0 | 0x03 |
| 0xCF1F | 0x0C | 0x04 | sgt_Can0 | 0x03 |
| 0xCF20 | 0x0C | 0x04 | sgt_Can0 | 0x03 |
| 0xCF21 | 0x0C | 0x04 | sgt_Can0 | sgt_Sig3 |
| 0xCF22 | 0x0C | 0x04 | sgt_Can0 | sgt_Sig3 |
| 0xCF23 | 0x0C | 0x04 | sgt_Can0 | sgt_Sig3 |
| 0xCF24 | 0x0C | 0x04 | sgt_Can0 | 0x03 |
| 0xCF25 | 0x0C | 0x04 | sgt_Can0 | sgt_Sig2 |
| 0xCF26 | 0x0C | 0x04 | sgt_Can0 | 0x03 |
| 0xCF27 | 0x0C | 0x04 | sgt_Sig3 | 0x90 |
| 0xCF28 | 0x0C | 0x04 | sgt_Can0 | 0x03 |
| 0xCF29 | 0x0C | 0x04 | sgt_Can0 | sgt_Sig3 |
| 0xCF2A | 0x0C | 0x04 | sgt_Can0 | 0x03 |
| 0xCF2B | 0x0C | 0x04 | sgt_Can0 | 0x90 |
| 0xCF2C | 0x0C | 0x04 | sgt_Sig3 | 0x90 |
| 0x4F7A | sgt_Gear0 | 0x0B | 0x03 | 0x07 |
| 0x4FBA | 0x03 | 0x01 | sgt_Gear0 | 0x04 |
| 0x4FBB | 0x03 | 0x01 | sgt_Gear0 | 0x04 |
| 0x4EFB | 0x11 | 0x12 | rgt_HotStat | sgt_Gear0 |
| 0x4EFD | 0x05 | 0x04 | 0x01 | 0x03 |
| 0x4EFE | 0x05 | 0x04 | 0x01 | 0x03 |
| 0x4EFF | 0x01 | 0x01 | 0x06 | 0x08 |
| 0x4EFC | 0x11 | 0x12 | rgt_HotStat | sgt_Gear0 |
| default | 0xFF | 0xFF | 0xFF | 0xFF |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Getriebeoeltemperatur | Grad C | - | unsigned char | - | 1 | 1 | -40 |
| 0x02 | Versorgungsspannung DR/MV | Volt | - | unsigned char | - | 0.08 | 1 | 0 |
| 0x03 | Abbtriebsdrehzahl | 1/min | - | unsigned char | - | 32 | 1 | 0 |
| 0x04 | Batteriespannung | Volt | - | unsigned char | - | 0.08 | 1 | 0 |
| 0x05 | Motordrehzahl | 1/min | - | unsigned char | - | 32 | 1 | 0 |
| 0x06 | Substrattemperatur | Grad C | - | unsigned char | - | 1 | 1 | -40 |
| 0x07 | Turbinendrehzahl | 1/min | - | unsigned char | - | 32 | 1 | 0 |
| 0x08 | Motortemperatur | Grad C | - | unsigned char | - | 1 | 1 | -48 |
| 0x09 | Fahrpedalwinkel | % | - | unsigned char | - | 100 | 255 | 0 |
| 0x0A | Sollmoment fuer Motoreingriff | Nm | - | unsigned char | - | 4 | 1 | 0 |
| 0x0B | Motoristmoment | Nm | - | unsigned char | - | 4 | 1 | -100 |
| 0x0C | Zeit nach Reset/ Zuendung AUS-EIN | ms | - | unsigned char | - | 30 | 1 | 0 |
| 0x0D | CAN Stand | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x0E | Mittl. Radgeschw. ang.Raeder | km/h | - | unsigned char | - | 2 | 1 | 0 |
| 0x0F | Mittl. Radgeschw. nicht ang.Raeder | km/h | - | unsigned char | - | 2 | 1 | 0 |
| 0x10 | Mittl. Radgeschw. alle Raeder | km/h | - | unsigned char | - | 2 | 1 | 0 |
| 0x11 | Oeltemp. bei Heißabschaltung | Grad C | - | unsigned char | - | 1 | 1 | -40 |
| 0x12 | Substrattemp. bei Heißabschaltung | Grad C | - | unsigned char | - | 1 | 1 | -40 |
| 0x13 | Status Oeltemperatursensor | 0-n | - | 0x03 | TEMP1_TAB | - | - | - |
| 0x14 | Status Substrattemperatursensor | 0-n | - | 0x0B | TEMP2_TAB | - | - | - |
| 0x15 | Status Spannungsregelung (0=iO, 1=niO) | 0/1 | - | 0x10 | - | - | - | - |
| 0x16 | Heissabschaltung in Initphase (0=nein, 1=ja) | 0/1 | - | 0x20 | - | - | - | - |
| 0x17 | Sensorversorgungsspannung | Volt | - | unsigned char | - | 0.08 | 1 | 0 |
| 0x18 | Letzte exception number vor Reset | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x19 | Hot Mode Zähler zgt_HotByte0 | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x1A | Hot Mode Zähler zgt_HOTbyte1 | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x1B | Chiptemperatur bei Fehlereintrag KFC_INFOHOT | Grad C | - | unsigned char | - | 1 | 1 | -40 |
| 0x1C | Getriebeöltemperatur bei Fehlereintrag KFC_INFOHOT | Grad C | - | unsigned char | - | 1 | 1 | -40 |
| 0x20 | Zustand WK | 0-n | - | 0x60 | WK_TAB | - | - | - |
| 0x21 | Schaltart | 0-n | - | 0x1F | SA_TAB | - | - | - |
| 0x22 | Sollzustand M1            (0=aus 1=an) | 0/1 | - | 0x80 | - | - | - | - |
| 0x23 | Sollzustand M2            (0=aus 1=an) | 0/1 | - | 0x40 | - | - | - | - |
| 0x24 | Sollzustand M3 Peek Phase (0=aus 1=an) | 0/1 | - | 0x20 | - | - | - | - |
| 0x25 | Sollzustand M3 Hold Phase (0=aus 1=an) | 0/1 | - | 0x10 | - | - | - | - |
| 0x26 | Sollzustand M4            (0=aus 1=an) | 0/1 | - | 0x08 | - | - | - | - |
| 0x30 | Pegel an L1 Pin           (1=low 0=high) | 0/1 | - | 0x80 | - | - | - | - |
| 0x31 | Pegel an L2 Pin           (1=low 0=high) | 0/1 | - | 0x40 | - | - | - | - |
| 0x32 | Pegel an L3 Pin           (1=low 0=high) | 0/1 | - | 0x20 | - | - | - | - |
| 0x33 | Pegel an L4 Pin           (1=low 0=high) | 0/1 | - | 0x10 | - | - | - | - |
| 0x34 | Pegel an Tip+ Pin         (1=low 0=high) | 0/1 | - | 0x08 | - | - | - | - |
| 0x35 | Pegel an Tip- Pin         (1=low 0=high) | 0/1 | - | 0x04 | - | - | - | - |
| 0x36 | Pegel an M-Gassen Pin     (1=low 0=high) | 0/1 | - | 0x02 | - | - | - | - |
| 0x40 | Status Substrattemp.      (0=iO, 1=F/ES) | 0/1 | - | 0x20 | - | - | - | - |
| 0x41 | Status Getriebeoeltemp.   (0=iO, 1=F/ES) | 0/1 | - | 0x10 | - | - | - | - |
| 0x42 | Status Parksperrensensor  (0=iO, 1=F/ES) | 0/1 | - | 0x08 | - | - | - | - |
| 0x43 | Status Positionssensor    (0=iO, 1=F/ES) | 0/1 | - | 0x04 | - | - | - | - |
| 0x44 | Status Turbinendrehzahl   (0=iO, 1=F/ES) | 0/1 | - | 0x02 | - | - | - | - |
| 0x45 | Status Abtriebsdrehzahl   (0=iO, 1=F/ES) | 0/1 | - | 0x01 | - | - | - | - |
| 0x50 | Status Motordrehzahl      (0=iO, 1=F/ES) | 0/1 | - | 0x80 | - | - | - | - |
| 0x51 | Status Fahrpedal          (0=iO, 1=F/ES) | 0/1 | - | 0x40 | - | - | - | - |
| 0x52 | Status Parksperrenanf.    (0=aus,1=ein ) | 0/1 | - | 0x20 | - | - | - | - |
| 0x53 | Status Motoristmoment     (0=iO, 1=F/ES) | 0/1 | - | 0x01 | - | - | - | - |
| 0x60 | Status Bremssignal        (0=iO, 1=F/ES) | 0/1 | - | 0x20 | - | - | - | - |
| 0x61 | Status Drehrichtung       (0=iO, 1=F/ES) | 0/1 | - | 0x10 | - | - | - | - |
| 0x62 | Status Radgeschw HL       (0=iO, 1=F/ES) | 0/1 | - | 0x08 | - | - | - | - |
| 0x63 | Status Radgeschw HR       (0=iO, 1=F/ES) | 0/1 | - | 0x04 | - | - | - | - |
| 0x64 | Status Radgeschw VL       (0=iO, 1=F/ES) | 0/1 | - | 0x02 | - | - | - | - |
| 0x65 | Status Radgeschw VR       (0=iO, 1=F/ES) | 0/1 | - | 0x01 | - | - | - | - |
| 0x70 | Status S-Taster CAN       (0=iO, 1=F/ES) | 0/1 | - | 0x80 | - | - | - | - |
| 0x71 | Status Tip-Taster CAN     (0=iO, 1=F/ES) | 0/1 | - | 0x40 | - | - | - | - |
| 0x72 | Status Position ser. Ltg  (0=iO, 1=F/ES) | 0/1 | - | 0x20 | - | - | - | - |
| 0x73 | Status Position CAN       (0=iO, 1=F/ES) | 0/1 | - | 0x10 | - | - | - | - |
| 0x74 | Status Fahrertuer CAN     (0=iO, 1=F/ES) | 0/1 | - | 0x08 | - | - | - | - |
| 0x75 | Status Fahrersitz CAN     (0=iO, 1=F/ES) | 0/1 | - | 0x04 | - | - | - | - |
| 0x76 | Status Schluessel CAN     (0=iO, 1=F/ES) | 0/1 | - | 0x02 | - | - | - | - |
| 0x77 | Status Kl15 Signal CAN    (0=iO, 1=F/ES) | 0/1 | - | 0x01 | - | - | - | - |
| 0x80 | Standardabsicherung ACC   (0=iO, 1=Fehler) | 0/1 | - | 0x10 | - | - | - | - |
| 0x81 | Standardabsicherung CAS   (0=iO, 1=Fehler) | 0/1 | - | 0x08 | - | - | - | - |
| 0x82 | Standardabsicherung DME3  (0=iO, 1=Fehler) | 0/1 | - | 0x04 | - | - | - | - |
| 0x83 | Standardabsicherung DME2  (0=iO, 1=Fehler) | 0/1 | - | 0x02 | - | - | - | - |
| 0x84 | Standardabsicherung DME1  (0=iO, 1=Fehler) | 0/1 | - | 0x01 | - | - | - | - |
| 0x90 | Status Zuendung | 0-n | - | 0x07 | ZUEND_TAB | - | - | - |
| 0x91 | Abgleichdaten Checksumme  (0=iO, 1=Fehler) | 0/1 | - | 0x10 | - | - | - | - |
| 0x92 | Bootloader Checksumme     (0=iO, 1=Fehler) | 0/1 | - | 0x08 | - | - | - | - |
| 0x93 | Kundenblock Checksumme    (0=iO, 1=Fehler) | 0/1 | - | 0x04 | - | - | - | - |
| 0x94 | Drive Programm Checksumme (0=iO, 1=Fehler) | 0/1 | - | 0x02 | - | - | - | - |
| 0x95 | Drive Daten Checksumme    (0=iO, 1=Fehler) | 0/1 | - | 0x01 | - | - | - | - |
| 0x98 | Daten FastChecksumme      (0=iO, 1=Fehler) | 0/1 | - | 0x02 | - | - | - | - |
| 0x99 | Konstanten FastChecksumme (0=iO, 1=Fehler) | 0/1 | - | 0x01 | - | - | - | - |
| 0xA0 | Stand By Control AUS      (0=iO, 1=aktiv) | 0/1 | - | 0x80 | - | - | - | - |
| 0xA1 | Lowside FETs AUS          (0=iO, 1=aktiv) | 0/1 | - | 0x40 | - | - | - | - |
| 0xA2 | MV4 Lowside AUS           (0=iO, 1=aktiv) | 0/1 | - | 0x20 | - | - | - | - |
| 0xA3 | MV3 Lowside AUS           (0=iO, 1=aktiv) | 0/1 | - | 0x10 | - | - | - | - |
| 0xA4 | Notlaufflag ACC           (0=iO, 1=aktiv) | 0/1 | - | 0x08 | - | - | - | - |
| 0xA5 | Max.Systemdruck           (0=iO, 1=aktiv) | 0/1 | - | 0x04 | - | - | - | - |
| 0xA6 | Reduzierung Anfahrbeschl. (0=iO, 1=aktiv) | 0/1 | - | 0x02 | - | - | - | - |
| 0xA7 | Mechanischer Notlauf      (0=iO, 1=aktiv) | 0/1 | - | 0x01 | - | - | - | - |
| 0xA8 | Schalten in G4 und halten (0=iO, 1=aktiv) | 0/1 | - | 0x80 | - | - | - | - |
| 0xA9 | Schalten in G5 und halten (0=iO, 1=aktiv) | 0/1 | - | 0x40 | - | - | - | - |
| 0xAA | Aktuellen Gang halten     (0=iO, 1=aktiv) | 0/1 | - | 0x20 | - | - | - | - |
| 0xAB | Shift Lock AUS            (0=iO, 1=aktiv) | 0/1 | - | 0x10 | - | - | - | - |
| 0xAC | Nab aus Nrad              (0=iO, 1=aktiv) | 0/1 | - | 0x08 | - | - | - | - |
| 0xAD | Nrad aus Nab              (0=iO, 1=aktiv) | 0/1 | - | 0x04 | - | - | - | - |
| 0xAE | Kein S/M Programm         (0=iO, 1=aktiv) | 0/1 | - | 0x02 | - | - | - | - |
| 0xAF | Wandlerkupplung AUF       (0=iO, 1=aktiv) | 0/1 | - | 0x01 | - | - | - | - |
| 0xB0 | Adaptionswerte AUS        (0=iO, 1=aktiv) | 0/1 | - | 0x80 | - | - | - | - |
| 0xB1 | nicht realisiert                          | 0/1 | - | 0x40 | - | - | - | - |
| 0xB2 | nicht realisiert                          | 0/1 | - | 0x20 | - | - | - | - |
| 0xB3 | nicht realisiert                          | 0/1 | - | 0x10 | - | - | - | - |
| 0xB4 | El. Notprogramm G5/G3     (0=iO, 1=aktiv) | 0/1 | - | 0x08 | - | - | - | - |
| 0xB5 | El. Notprogramm G5        (0=iO, 1=aktiv) | 0/1 | - | 0x04 | - | - | - | - |
| 0xB6 | nicht realisiert                          | 0/1 | - | 0x02 | - | - | - | - |
| 0xB7 | nicht realisiert                          | 0/1 | - | 0x01 | - | - | - | - |
| 0xB8 | Position P halten         (0=iO, 1=aktiv) | 0/1 | - | 0x80 | - | - | - | - |
| 0xB9 | Kein Fahrerwunsch D       (0=iO, 1=aktiv) | 0/1 | - | 0x40 | - | - | - | - |
| 0xBA | Bedingtes Schalten G2     (0=iO, 1=aktiv) | 0/1 | - | 0x20 | - | - | - | - |
| 0xBB | Bedingtes Schalten G1     (0=iO, 1=aktiv) | 0/1 | - | 0x10 | - | - | - | - |
| 0xBC | Bedingtes Schalten G4     (0=iO, 1=aktiv) | 0/1 | - | 0x08 | - | - | - | - |
| 0xBD | Bedingtes Schalten G3     (0=iO, 1=aktiv) | 0/1 | - | 0x04 | - | - | - | - |
| 0xBE | Kein Fahrerwunsch R       (0=iO, 1=aktiv) | 0/1 | - | 0x02 | - | - | - | - |
| 0xBF | Moduliertes Schalten G3   (0=iO, 1=aktiv) | 0/1 | - | 0x01 | - | - | - | - |
| 0xC0 | Unbekannter Resetort | - | - | - | - | - | - | - |
| 0xC1 | Reset in Initilisation | - | - | - | - | - | - | - |
| 0xC2 | Reset in Standby | - | - | - | - | - | - | - |
| 0xC3 | Reset in Betrieb | - | - | - | - | - | - | - |
| 0xC4 | Reset in Limp-Home | - | - | - | - | - | - | - |
| 0xFE | nicht definiert | 1 | - | unsigned char | - | 1 | 1 | 0 |
| 0xFF | ohne Bedeutung | 1 | - | unsigned char | - | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### FARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| 0xCF14 | 0x0010 | 0x0020 | 0x0030 | 0x0040 |
| 0xCF15 | 0x0010 | 0x0020 | 0x0030 | 0x0040 |
| 0xCF16 | 0x0010 | 0x0020 | 0x0030 | 0x0040 |
| 0xCF17 | 0x0010 | 0x0020 | 0x0030 | 0x0040 |
| 0xCF18 | 0x0010 | 0x0020 | 0x0030 | 0x0040 |
| 0xCF19 | 0x0040 | 0x0020 | 0x0040 | 0x0040 |
| 0xCF1A | 0x0040 | 0x0020 | 0x0040 | 0x0040 |
| 0xCF1B | 0x0040 | 0x0020 | 0x0040 | 0x0040 |
| 0xCF1C | 0x0040 | 0x0020 | 0x0040 | 0x0040 |
| 0xCF1D | 0x0040 | 0x0020 | 0x0040 | 0x0040 |
| 0xCF1E | 0x0040 | 0x0020 | 0x0040 | 0x0040 |
| 0xCF1F | 0x0010 | 0x0020 | 0x0030 | 0x0040 |
| 0xCF20 | 0x0010 | 0x0020 | 0x0030 | 0x0040 |
| 0xCF21 | 0x0040 | 0x0020 | 0x0040 | 0x0040 |
| 0xCF22 | 0x0040 | 0x0020 | 0x0040 | 0x0040 |
| 0xCF23 | 0x0040 | 0x0020 | 0x0040 | 0x0040 |
| 0xCF24 | 0x0010 | 0x0020 | 0x0030 | 0x0040 |
| 0xCF25 | 0x0010 | 0x0020 | 0x0030 | 0x0040 |
| 0xCF26 | 0x0010 | 0x0020 | 0x0030 | 0x0040 |
| 0xCF27 | 0x0010 | 0x0020 | 0x0030 | 0x0040 |
| 0xCF28 | 0x0010 | 0x0020 | 0x0030 | 0x0040 |
| 0xCF29 | 0x0010 | 0x0020 | 0x0030 | 0x0040 |
| 0xCF2A | 0x0010 | 0x0020 | 0x0030 | 0x0040 |
| 0xCF2B | 0x0010 | 0x0020 | 0x0030 | 0x0040 |
| 0xCF2C | 0x0010 | 0x0020 | 0x0030 | 0x0040 |
| 0x51A7 | 0x0008 | 0x0040 | 0x0040 | 0x0040 |
| 0xCF07 | 0x0080 | 0x0040 | 0x0040 | 0x0040 |
| 0x4EF2 | 0x0052 | 0x006F | 0x0075 | 0x0070 |
| 0x50DD | 0x0040 | 0x0040 | 0x0091 | 0x005B |
| 0x4FB1 | 0x0089 | 0x0040 | 0x0040 | 0x0040 |
| 0x4FB0 | 0x0087 | 0x0040 | 0x0040 | 0x0040 |
| 0x51A5 | 0x0053 | 0x0040 | 0x0040 | 0x0040 |
| 0x4EE9 | 0x0055 | 0x0060 | 0x0074 | 0x0071 |
| 0x4F70 | 0x0061 | 0x0040 | 0x0040 | 0x0040 |
| 0x4EE8 | 0x0062 | 0x0040 | 0x0074 | 0x0090 |
| 0x4F6B | 0x006D | 0x0040 | 0x0040 | 0x0040 |
| 0x507B | 0x0054 | 0x0040 | 0x0040 | 0x0040 |
| 0x50DC | 0x0081 | 0x0040 | 0x0040 | 0x0040 |
| 0x51AC | 0x0053 | 0x0040 | 0x0040 | 0x0040 |
| 0x5015 | 0x0053 | 0x0073 | 0x0072 | 0x0071 |
| 0x4FB2 | 0x0084 | 0x0085 | 0x0083 | 0x0086 |
| 0x4F53 | 0x0040 | 0x0040 | 0x0067 | 0x0040 |
| 0x4E20 | 0x0068 | 0x0069 | 0x0074 | 0x0077 |
| 0x4E21 | 0x0068 | 0x0069 | 0x0074 | 0x0077 |
| 0x4E22 | 0x0068 | 0x0069 | 0x0074 | 0x0077 |
| 0x4E23 | 0x0068 | 0x0069 | 0x0074 | 0x0077 |
| 0x4E24 | 0x0068 | 0x0069 | 0x0074 | 0x0077 |
| 0x4E25 | 0x0068 | 0x0069 | 0x0074 | 0x0077 |
| 0x4E84 | 0x0040 | 0x0073 | 0x0074 | 0x0071 |
| 0x4E85 | 0x0040 | 0x0073 | 0x0074 | 0x0071 |
| 0x4E86 | 0x0040 | 0x0073 | 0x0074 | 0x0071 |
| 0x4E87 | 0x0040 | 0x0073 | 0x0074 | 0x0071 |
| 0x4F81 | 0x0051 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F82 | 0x0051 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F83 | 0x0051 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F84 | 0x0051 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F85 | 0x0051 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F87 | 0x0051 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F88 | 0x0051 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F89 | 0x0051 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F8A | 0x0051 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F8B | 0x0051 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F8C | 0x0051 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F8D | 0x0051 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F8E | 0x0051 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F8F | 0x0051 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F90 | 0x0051 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F91 | 0x0051 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F92 | 0x0051 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F93 | 0x0051 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F94 | 0x0051 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F95 | 0x0051 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F96 | 0x0051 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F97 | 0x0051 | 0x0040 | 0x0040 | 0x0040 |
| 0x5079 | 0x0098 | 0x0040 | 0x0040 | 0x0040 |
| 0x51AA | 0x0053 | 0x0040 | 0x0040 | 0x0040 |
| 0x507A | 0x0053 | 0x0040 | 0x0040 | 0x0040 |
| 0x4EF3 | 0x0040 | 0x0095 | 0x0064 | 0x0063 |
| 0x5016 | 0x0040 | 0x0040 | 0x0002 | 0x0001 |
| 0x5014 | 0x006A | 0x0040 | 0x006E | 0x006C |
| 0x507C | 0x00A4 | 0x0040 | 0x0040 | 0x0040 |
| 0x507D | 0x00AC | 0x0040 | 0x0040 | 0x0040 |
| 0x51AB | 0x0053 | 0x0040 | 0x0040 | 0x0040 |
| 0x51A8 | 0x0053 | 0x0040 | 0x0040 | 0x0040 |
| 0x51AE | 0x00C8 | 0x0040 | 0x0040 | 0x0040 |
| 0x4E89 | 0x00A3 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F71 | 0x0096 | 0x0040 | 0x0040 | 0x0040 |
| 0x4E26 | 0x0097 | 0x0040 | 0x0040 | 0x0040 |
| 0x4EEB | 0x006B | 0x0040 | 0x0040 | 0x0040 |
| 0x5087 | 0x0056 | 0x0040 | 0x0040 | 0x0040 |
| 0x51AD | 0x0057 | 0x0082 | 0x0040 | 0x0040 |
| 0x5088 | 0x0058 | 0x0076 | 0x0040 | 0x0040 |
| 0x4F6F | 0x00A2 | 0x0040 | 0x0040 | 0x0040 |
| 0x4FB7 | 0x0088 | 0x0040 | 0x0040 | 0x0040 |
| 0x5089 | 0x0059 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F77 | 0x005A | 0x0040 | 0x0040 | 0x0040 |
| 0x4FB8 | 0x00A6 | 0x00A7 | 0x0040 | 0x00A5 |
| 0x4FB9 | 0x00AB | 0x00A9 | 0x00AA | 0x00A8 |
| 0x4F7A | 0x009B | 0x009A | 0x0040 | 0x0040 |
| 0x4EFB | 0x0040 | 0x0040 | 0x0040 | 0x00AD |
| 0x4EFC | 0x0040 | 0x0040 | 0x0040 | 0x00AE |
| 0x4FBA | 0x00B2 | 0x00B1 | 0x00B0 | 0x00AF |
| 0x4FBB | 0x00B7 | 0x00B6 | 0x00B5 | 0x00B4 |
| 0x4EFD | 0x0040 | 0x0040 | 0x0040 | 0x00C2 |
| 0x4EFE | 0x0040 | 0x0040 | 0x0040 | 0x00C3 |
| 0x4EFF | 0x0040 | 0x0040 | 0x0040 | 0x00C4 |
| defaut | 0x0008 | 0x0004 | 0x0002 | 0x0001 |

### FARTTEXTEINDIVIDUELL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x0000 | kein passendes Fehlersymptom |
| 0x0001 | Signal oder Wert oberhalb Schwelle |
| 0x0002 | Signal oder Wert unterhalb Schwelle |
| 0x0004 | kein Signal oder Wert |
| 0x0008 | unplausibles Signal oder Wert |
| 0x0010 | Checksummenfehler |
| 0x0020 | Timeout-Fehler |
| 0x0030 | Alivecounter-Fehler |
| 0x0040 | nicht belegt |
| 0x0051 | Plausibilität |
| 0x0052 | Plausibilität CGT, CChip |
| 0x0053 | Unplausibles Signal oder Wert |
| 0x0054 | Parksperrenposition unplausibel |
| 0x0055 | Abtrieb unplausibel zu Turbine/Räder |
| 0x0056 | Tipp- und M-Gassenschalter unplausibel |
| 0x0057 | Raddrehzahl unplausibel zu Abtrieb/Turbine |
| 0x0058 | Leitungscodierung des Positionssensors ist unplausibel |
| 0x0059 | Status Anlasserfreigabe unplausibel zur Getriebeposition |
| 0x005A | Plausibilisierung der zurückgelesenen Sendebotschaft ist fehlgeschlagen |
| 0x005B | unerlaubte EDS-Ansteuerung |
| 0x0060 | Abtriebsdrehzahl grösser Schwelle |
| 0x0061 | Motordrehzahl grösser Schwelle |
| 0x0062 | Turbinendrehzahl grösser/kleiner Schwelle |
| 0x0063 | analoger Temperaturwert oberhalb Schwelle |
| 0x0064 | analoger Temperaturwert unterhalb Schwelle |
| 0x0067 | Schlupf Wandlerkupplung grösser Schwelle |
| 0x0068 | EDS-Strom ausserhalb der Schwellen |
| 0x0069 | Nebenschlusstrom grösser Schwelle |
| 0x006A | Versorgungsspannung kleiner Schwelle, Aktuator-Versorgung nicht gewährleistet |
| 0x006B | Abfall des Abtriebsgradienten grösser Schwelle |
| 0x006C | Versorgungsspannung grösser Schwelle |
| 0x006D | Ölverschleiß aufgrund hoher Temperaturbeanspruchung |
| 0x006E | Versorgungsspannung bei EGS-Abschaltgrenze |
| 0x006F | Temperatursprung CGT |
| 0x0070 | elektrischer Fehler (KSP, KSM, U) |
| 0x0071 | Kurzschluß nach Plus |
| 0x0072 | Kurzschluss nach Masse |
| 0x0073 | Unterbrechung |
| 0x0074 | Kurzschluss nach Masse oder Unterbrechung |
| 0x0075 | Kurzschluss im Sensor |
| 0x0076 | Kurzschluss L3 oder L4 |
| 0x0077 | Kurzschluss nach Plus oder Unterbrechung |
| 0x007A | Symptom Schaltungsüberwachung |
| 0x0080 | CAN-Kommunikation gestört |
| 0x0081 | CAN und serielles Signal vom SZL defekt |
| 0x0082 | CAN-Signal eines Antriebsrades ist fehlerhaft |
| 0x0083 | während Initialisierung: Watchdog-Fehler allgemein _1 |
| 0x0084 | Watchdog-Fehler allgemein _1 (Plausibilität FET Aktivierungsfehler) |
| 0x0085 | Watchdog-Fehler allgemein _2 (KS Plus, KS Masse, Unterbrechung) |
| 0x0086 | Watchdog-Fehler allgemein _3 (Laufzeitfehler, Signal zu groß, Signal zu klein) |
| 0x0087 | Checksummenfehler im Flash-Speicher |
| 0x0088 | SoftwareVerif bei EEProm-Emulation fehlgeschlagen |
| 0x0089 | Defekt im EEPROM-Bereich |
| 0x0090 | allgemeiner Fehler |
| 0x0091 | Kollision von Ersatzmaßnahmen |
| 0x0092 | Symptom Gangüberwachung |
| 0x0093 | Gangüberwachung Rückwärtsgang |
| 0x0094 | Hochtemperatur-Abschaltung |
| 0x0095 | Fehlerstatus digitaler Sensor |
| 0x0096 | keine Fahrerinfo möglich über betätigte Notentriegelung |
| 0x0097 | spezielle Stromüberwachung |
| 0x0098 | serieller Timeout |
| 0x0099 | EGS-Reset |
| 0x009A | Störung im Verteilergetriebe |
| 0x009B | Signal Verteilergetriebe fehlerhaft |
| 0x009C | Zwangshochschaltung 5-6 durch DME |
| 0x009D | Auto-P wegen PowerModul Abschaltung |
| 0x009E | Auto-P wegen Absicherung EMF |
| 0x009F | Auto-P wegen Hilferuf EMF |
| 0x00A0 | Auto-N wegen Zwischenposition SZL |
| 0x00A1 | Auto-P wegen Wegfall CAN-Information SZL |
| 0x00A2 | Motordrehungleichförmigkeit |
| 0x00A3 | MV1 -2 fehlerhaft offen |
| 0x00A4 | Parksperre fehlerhaft eingelegt |
| 0x00A5 | pos. Motoreingriff fehlerhaft (ZF) |
| 0x00A6 | Überwachungsebene2-Berechnung, shift by wire |
| 0x00A7 | Überwachungsebene2-Berechnung pos. Motoreingriff |
| 0x00A8 | Fehler TPURAM |
| 0x00A9 | Fehler TPU AliveCounter |
| 0x00AA | leichter Fehler QADC |
| 0x00AB | schwerer Fehler QADC |
| 0x00AC | Parksperre fehlerhaft ausgelegt |
| 0x00AD | Chip- oder Öltemperatur zu groß |
| 0x00AE | CG122 konnte nicht abschalten |
| 0x00AF | Störzähler1>Grenzwert |
| 0x00B0 | Störzähler2>Grenzwert |
| 0x00B1 | Störzähler3>Grenzwert |
| 0x00B2 | Störzähler4>Grenzwert |
| 0x00B3 | Störzähler14>Grenzwert |
| 0x00B4 | Störzähler1<Grenzwert |
| 0x00B5 | Störzähler2<Grenzwert |
| 0x00B6 | Störzähler3<Grenzwert |
| 0x00B7 | Störzähler4<Grenzwert |
| 0x00B8 | Störzähler14<Grenzwert |
| 0x00B9 | Exception |
| 0x00BA | WD Fehlerzähler |
| 0x00BB | Vermutlich Unterspannung in Init |
| 0x00BC | Vermutlich Unterspannung in Cruise oder Limp-Home |
| 0x00BD | Vermutlich Unterspannung in Standby |
| 0x00BE | Inkonsistenzen von Istgang und Zielgang |
| 0x00BF | Inkonsistenzen von Kraftflussvariablen |
| 0x00C0 | Inkonsistenzen von Kraftfluss zu Gang |
| 0x00C1 | Inkonsistenzen von Ventilen/Kupplung |
| 0x00C2 | Pull-Up Spannung zu klein |
| 0x00C3 | Spannung M3 oder M2 > Grenzwert |
| 0x00C4 | Grenzwert erreicht |
| 0x00C5 | Funktion Hotmode Stufe 1 |
| 0x00C6 | Funktion Hotmode Stufe 2 |
| 0x00C7 | Funktion Hotmode Stufe 3 |
| 0x00C8 | Status Bremslichtschalter fehlerhaft |
| 0x00C9 | Status Bremsdrucksignal fehlerhaft |
| 0xFFFF | unbekannte Fehlerart |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x4F80 | Übersetzungsueberwachung Symptom Gangueberwachung |
| 0x4F86 | Übersetzungsueberwachung Symptom Schaltungsueberwachung |
| 0x5118 | Infozähler1 - EGS-Reset |
| 0x5113 | Infozähler2 - DME-Zwangshochschaltung |
| 0x510E | Infozähler3 - Auto-P PM |
| 0x510F | Infozähler4 - Auto-P EMF |
| 0x5110 | Infozähler5 - Auto-P EMF |
| 0x5111 | Infozähler6 - Auto-N SZL |
| 0x5112 | Infozähler7 - Auto-P SZL |
| 0x5114 | Funktionalität der Hotmode Stufe 1,2 oder 3 ausgelöst |
| 0x5115 | Anzeige für Hotmode Stufe 1 oder 2 ausgelöst |
| 0x5119 | Reset im Bosch SW-Teil |
| 0x511A | Reset im ZF SW-Teil |
| 0xFFFF | unbekannter Fehlerort |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | ja |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | ja |

### IUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x4F80 | sgt_Gear0 | 0x0B | 0x01 | 0x03 |
| 0x4F86 | sgt_Gear0 | 0x0B | 0x01 | 0x03 |
| 0x5118 | 0x01 | 0x04 | 0x06 | 0x0C |
| 0x5113 | 0x01 | 0x06 | sgt_Gear0 | sgt_Sig0 |
| 0x510E | 0x04 | 0x01 | sgt_Gear0 | sgt_Sig0 |
| 0x510F | 0x03 | sgt_Sig3 | sgt_Gear0 | sgt_Sig0 |
| 0x5110 | 0x03 | sgt_Sig3 | sgt_Gear0 | sgt_Sig0 |
| 0x5111 | sgt_Inp0 | sgt_Gear0 | 0x03 | 0x01 |
| 0x5112 | sgt_Inp0 | sgt_Gear0 | 0x03 | 0x01 |
| 0x5119 | 0x05 | 0x03 | 0xC0 | 0x18 |
| 0x511A | 0x05 | 0x03 | 0xC0 | 0x18 |
| 0x5114 | 0xD1 | 0xD3 | 0x1C | 0x1B |
| 0x5115 | 0xD1 | 0xD3 | 0x1C | 0x1B |
| default | 0x01 | 0x02 | -- | -- |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Getriebeoeltemperatur | Grad C | - | unsigned char | - | 1 | 1 | -40 |
| 0x02 | Versorgungsspannung DR/MV | Volt | - | unsigned char | - | 0.08 | 1 | 0 |
| 0x03 | Abbtriebsdrehzahl | 1/min | - | unsigned char | - | 32 | 1 | 0 |
| 0x04 | Batteriespannung | Volt | - | unsigned char | - | 0.08 | 1 | 0 |
| 0x05 | Motordrehzahl | 1/min | - | unsigned char | - | 32 | 1 | 0 |
| 0x06 | Substrattemperatur | Grad C | - | unsigned char | - | 1 | 1 | -40 |
| 0x07 | Turbinendrehzahl | 1/min | - | unsigned char | - | 32 | 1 | 0 |
| 0x08 | Motortemperatur | Grad C | - | unsigned char | - | 1 | 1 | -48 |
| 0x09 | Fahrpedalwinkel | % | - | unsigned char | - | 100 | 255 | 0 |
| 0x0A | Sollmoment fuer Motoreingriff | Nm | - | unsigned char | - | 4 | 1 | 0 |
| 0x0B | Motoristmoment | Nm | - | unsigned char | - | 4 | 1 | -100 |
| 0x0C | Zeit nach Reset/ Zuendung AUS-EIN | ms | - | unsigned char | - | 30 | 1 | 0 |
| 0x0D | CAN Stand | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x0E | Mittl. Radgeschw. ang.Raeder | km/h | - | unsigned char | - | 2 | 1 | 0 |
| 0x0F | Mittl. Radgeschw. nicht ang.Raeder | km/h | - | unsigned char | - | 2 | 1 | 0 |
| 0x10 | Mittl. Radgeschw. alle Raeder | km/h | - | unsigned char | - | 2 | 1 | 0 |
| 0x11 | Oeltemp. bei Heißabschaltung | Grad C | - | unsigned char | - | 1 | 1 | -40 |
| 0x12 | Substrattemp. bei Heißabschaltung | Grad C | - | unsigned char | - | 1 | 1 | -40 |
| 0x13 | Status Oeltemperatursensor | 0-n | - | 0x03 | TEMP1_TAB | - | - | - |
| 0x14 | Status Substrattemperatursensor | 0-n | - | 0x0B | TEMP2_TAB | - | - | - |
| 0x15 | Status Spannungsregelung (0=iO, 1=niO) | 0/1 | - | 0x10 | - | - | - | - |
| 0x16 | Heissabschaltung in Initphase (0=nein, 1=ja) | 0/1 | - | 0x20 | - | - | - | - |
| 0x18 | Letzte exception number vor Reset | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x19 | Hot Mode Zähler zgt_HotByte0 | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x1A | Hot Mode Zähler zgt_HOTbyte1 | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x1B | Chiptemperatur bei Fehlereintrag KFC_INFOHOT | Grad C | - | unsigned char | - | 1 | 1 | -40 |
| 0x1C | Getriebeöltemperatur bei Fehlereintrag KFC_INFOHOT | Grad C | - | unsigned char | - | 1 | 1 | -40 |
| 0x20 | Zustand WK | 0-n | - | 0x60 | WK_TAB | - | - | - |
| 0x21 | Schaltart | 0-n | - | 0x1F | SA_TAB | - | - | - |
| 0x22 | Sollzustand M1            (0=aus 1=an) | 0/1 | - | 0x80 | - | - | - | - |
| 0x23 | Sollzustand M2            (0=aus 1=an) | 0/1 | - | 0x40 | - | - | - | - |
| 0x24 | Sollzustand M3 Peek Phase (0=aus 1=an) | 0/1 | - | 0x20 | - | - | - | - |
| 0x25 | Sollzustand M3 Hold Phase (0=aus 1=an) | 0/1 | - | 0x10 | - | - | - | - |
| 0x26 | Sollzustand M4            (0=aus 1=an) | 0/1 | - | 0x08 | - | - | - | - |
| 0x30 | Pegel an L1 Pin           (1=low 0=high) | 0/1 | - | 0x80 | - | - | - | - |
| 0x31 | Pegel an L2 Pin           (1=low 0=high) | 0/1 | - | 0x40 | - | - | - | - |
| 0x32 | Pegel an L3 Pin           (1=low 0=high) | 0/1 | - | 0x20 | - | - | - | - |
| 0x33 | Pegel an L4 Pin           (1=low 0=high) | 0/1 | - | 0x10 | - | - | - | - |
| 0x34 | Pegel an Tip+ Pin         (1=low 0=high) | 0/1 | - | 0x08 | - | - | - | - |
| 0x35 | Pegel an Tip- Pin         (1=low 0=high) | 0/1 | - | 0x04 | - | - | - | - |
| 0x36 | Pegel an M-Gassen Pin     (1=low 0=high) | 0/1 | - | 0x02 | - | - | - | - |
| 0x40 | Status Substrattemp.      (0=iO, 1=F/ES) | 0/1 | - | 0x20 | - | - | - | - |
| 0x41 | Status Getriebeoeltemp.   (0=iO, 1=F/ES) | 0/1 | - | 0x10 | - | - | - | - |
| 0x42 | Status Parksperrensensor  (0=iO, 1=F/ES) | 0/1 | - | 0x08 | - | - | - | - |
| 0x43 | Status Positionssensor    (0=iO, 1=F/ES) | 0/1 | - | 0x04 | - | - | - | - |
| 0x44 | Status Turbinendrehzahl   (0=iO, 1=F/ES) | 0/1 | - | 0x02 | - | - | - | - |
| 0x45 | Status Abtriebsdrehzahl   (0=iO, 1=F/ES) | 0/1 | - | 0x01 | - | - | - | - |
| 0x50 | Status Motordrehzahl      (0=iO, 1=F/ES) | 0/1 | - | 0x80 | - | - | - | - |
| 0x51 | Status Fahrpedal          (0=iO, 1=F/ES) | 0/1 | - | 0x40 | - | - | - | - |
| 0x52 | Status Parksperrenanf.    (0=aus,1=ein ) | 0/1 | - | 0x20 | - | - | - | - |
| 0x53 | Status Motoristmoment     (0=iO, 1=F/ES) | 0/1 | - | 0x01 | - | - | - | - |
| 0x60 | Status Bremssignal        (0=iO, 1=F/ES) | 0/1 | - | 0x20 | - | - | - | - |
| 0x61 | Status Drehrichtung       (0=iO, 1=F/ES) | 0/1 | - | 0x10 | - | - | - | - |
| 0x62 | Status Radgeschw HL       (0=iO, 1=F/ES) | 0/1 | - | 0x08 | - | - | - | - |
| 0x63 | Status Radgeschw HR       (0=iO, 1=F/ES) | 0/1 | - | 0x04 | - | - | - | - |
| 0x64 | Status Radgeschw VL       (0=iO, 1=F/ES) | 0/1 | - | 0x02 | - | - | - | - |
| 0x65 | Status Radgeschw VR       (0=iO, 1=F/ES) | 0/1 | - | 0x01 | - | - | - | - |
| 0x70 | Status S-Taster CAN       (0=iO, 1=F/ES) | 0/1 | - | 0x80 | - | - | - | - |
| 0x71 | Status Tip-Taster CAN     (0=iO, 1=F/ES) | 0/1 | - | 0x40 | - | - | - | - |
| 0x72 | Status Position ser. Ltg  (0=iO, 1=F/ES) | 0/1 | - | 0x20 | - | - | - | - |
| 0x73 | Status Position CAN       (0=iO, 1=F/ES) | 0/1 | - | 0x10 | - | - | - | - |
| 0x74 | Status Fahrertuer CAN     (0=iO, 1=F/ES) | 0/1 | - | 0x08 | - | - | - | - |
| 0x75 | Status Fahrersitz CAN     (0=iO, 1=F/ES) | 0/1 | - | 0x04 | - | - | - | - |
| 0x76 | Status Schluessel CAN     (0=iO, 1=F/ES) | 0/1 | - | 0x02 | - | - | - | - |
| 0x77 | Status Kl15 Signal CAN    (0=iO, 1=F/ES) | 0/1 | - | 0x01 | - | - | - | - |
| 0x80 | Standardabsicherung ACC   (0=iO, 1=Fehler) | 0/1 | - | 0x10 | - | - | - | - |
| 0x81 | Standardabsicherung CAS   (0=iO, 1=Fehler) | 0/1 | - | 0x08 | - | - | - | - |
| 0x82 | Standardabsicherung DME3  (0=iO, 1=Fehler) | 0/1 | - | 0x04 | - | - | - | - |
| 0x83 | Standardabsicherung DME2  (0=iO, 1=Fehler) | 0/1 | - | 0x02 | - | - | - | - |
| 0x84 | Standardabsicherung DME1  (0=iO, 1=Fehler) | 0/1 | - | 0x01 | - | - | - | - |
| 0x90 | Status Zuendung | 0-n | - | 0x07 | ZUEND_TAB | - | - | - |
| 0x91 | Abgleichdaten Checksumme  (0=iO, 1=Fehler) | 0/1 | - | 0x10 | - | - | - | - |
| 0x92 | Bootloader Checksumme     (0=iO, 1=Fehler) | 0/1 | - | 0x08 | - | - | - | - |
| 0x93 | Kundenblock Checksumme    (0=iO, 1=Fehler) | 0/1 | - | 0x04 | - | - | - | - |
| 0x94 | Drive Programm Checksumme (0=iO, 1=Fehler) | 0/1 | - | 0x02 | - | - | - | - |
| 0x95 | Drive Daten Checksumme    (0=iO, 1=Fehler) | 0/1 | - | 0x01 | - | - | - | - |
| 0x98 | Daten FastChecksumme      (0=iO, 1=Fehler) | 0/1 | - | 0x02 | - | - | - | - |
| 0x99 | Konstanten FastChecksumme (0=iO, 1=Fehler) | 0/1 | - | 0x01 | - | - | - | - |
| 0xA0 | Stand By Control AUS      (0=iO, 1=aktiv) | 0/1 | - | 0x80 | - | - | - | - |
| 0xA1 | Lowside FETs AUS          (0=iO, 1=aktiv) | 0/1 | - | 0x40 | - | - | - | - |
| 0xA2 | MV4 Lowside AUS           (0=iO, 1=aktiv) | 0/1 | - | 0x20 | - | - | - | - |
| 0xA3 | MV3 Lowside AUS           (0=iO, 1=aktiv) | 0/1 | - | 0x10 | - | - | - | - |
| 0xA4 | Notlaufflag ACC           (0=iO, 1=aktiv) | 0/1 | - | 0x08 | - | - | - | - |
| 0xA5 | Max.Systemdruck           (0=iO, 1=aktiv) | 0/1 | - | 0x04 | - | - | - | - |
| 0xA6 | Reduzierung Anfahrbeschl. (0=iO, 1=aktiv) | 0/1 | - | 0x02 | - | - | - | - |
| 0xA7 | Mechanischer Notlauf      (0=iO, 1=aktiv) | 0/1 | - | 0x01 | - | - | - | - |
| 0xA8 | Schalten in G4 und halten (0=iO, 1=aktiv) | 0/1 | - | 0x80 | - | - | - | - |
| 0xA9 | Schalten in G5 und halten (0=iO, 1=aktiv) | 0/1 | - | 0x40 | - | - | - | - |
| 0xAA | Aktuellen Gang halten     (0=iO, 1=aktiv) | 0/1 | - | 0x20 | - | - | - | - |
| 0xAB | Shift Lock AUS            (0=iO, 1=aktiv) | 0/1 | - | 0x10 | - | - | - | - |
| 0xAC | Nab aus Nrad              (0=iO, 1=aktiv) | 0/1 | - | 0x08 | - | - | - | - |
| 0xAD | Nrad aus Nab              (0=iO, 1=aktiv) | 0/1 | - | 0x04 | - | - | - | - |
| 0xAE | Kein S/M Programm         (0=iO, 1=aktiv) | 0/1 | - | 0x02 | - | - | - | - |
| 0xAF | Wandlerkupplung AUF       (0=iO, 1=aktiv) | 0/1 | - | 0x01 | - | - | - | - |
| 0xB0 | Adaptionswerte AUS        (0=iO, 1=aktiv) | 0/1 | - | 0x80 | - | - | - | - |
| 0xB1 | nicht realisiert                          | 0/1 | - | 0x40 | - | - | - | - |
| 0xB2 | nicht realisiert                          | 0/1 | - | 0x20 | - | - | - | - |
| 0xB3 | nicht realisiert                          | 0/1 | - | 0x10 | - | - | - | - |
| 0xB4 | El. Notprogramm G5/G3     (0=iO, 1=aktiv) | 0/1 | - | 0x08 | - | - | - | - |
| 0xB5 | El. Notprogramm G5        (0=iO, 1=aktiv) | 0/1 | - | 0x04 | - | - | - | - |
| 0xB6 | nicht realisiert                          | 0/1 | - | 0x02 | - | - | - | - |
| 0xB7 | nicht realisiert                          | 0/1 | - | 0x01 | - | - | - | - |
| 0xB8 | Position P halten         (0=iO, 1=aktiv) | 0/1 | - | 0x80 | - | - | - | - |
| 0xB9 | Kein Fahrerwunsch D       (0=iO, 1=aktiv) | 0/1 | - | 0x40 | - | - | - | - |
| 0xBA | Bedingtes Schalten G2     (0=iO, 1=aktiv) | 0/1 | - | 0x20 | - | - | - | - |
| 0xBB | Bedingtes Schalten G1     (0=iO, 1=aktiv) | 0/1 | - | 0x10 | - | - | - | - |
| 0xBC | Bedingtes Schalten G4     (0=iO, 1=aktiv) | 0/1 | - | 0x08 | - | - | - | - |
| 0xBD | Bedingtes Schalten G3     (0=iO, 1=aktiv) | 0/1 | - | 0x04 | - | - | - | - |
| 0xBE | Kein Fahrerwunsch R       (0=iO, 1=aktiv) | 0/1 | - | 0x02 | - | - | - | - |
| 0xBF | Moduliertes Schalten G3   (0=iO, 1=aktiv) | 0/1 | - | 0x01 | - | - | - | - |
| 0xC0 | Zeitpunkt des Resets | 0-n | - | 0x07 | TTCurLast_TAB | - | - | - |
| 0xD1 | Zähler Hot Mode Stufe 1                   | 0-n | - | 0x1F | - | - | - | - |
| 0xD3 | Zähler Hot Mode Stufe 3                   | 0-n | - | 0x7C | - | - | - | - |
| 0xFE | nicht definiert | 1 | - | unsigned char | - | 1 | 1 | 0 |
| 0xFF | ohne Bedeutung | 1 | - | unsigned char | - | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### IARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| 0x4F86 | 0x007A | 0x0040 | 0x0040 | 0x0040 |
| 0x4F80 | 0x0092 | 0x0040 | 0x0040 | 0x0040 |
| 0x5118 | 0x0099 | 0x0040 | 0x0040 | 0x0040 |
| 0x5113 | 0x009C | 0x0040 | 0x0040 | 0x0040 |
| 0x510E | 0x009D | 0x0040 | 0x0040 | 0x0040 |
| 0x510F | 0x009E | 0x0040 | 0x0040 | 0x0040 |
| 0x5110 | 0x009F | 0x0040 | 0x0040 | 0x0040 |
| 0x5111 | 0x00A0 | 0x0040 | 0x0040 | 0x0040 |
| 0x5112 | 0x00A1 | 0x0040 | 0x0040 | 0x0040 |
| 0x5114 | 0x0040 | 0x00C7 | 0x00C6 | 0x00C5 |
| 0x5115 | 0x0040 | 0x0040 | 0x00C6 | 0x00C5 |
| 0x5119 | 0x00BD | 0x00BC | 0x00BB | 0x00BA |
| 0x511A | 0x00C1 | 0x00C0 | 0x00BF | 0x00BE |
| defaut | 0x0008 | 0x0004 | 0x0002 | 0x0001 |

### IARTTEXTEINDIVIDUELL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x0040 | nicht belegt |
| 0x007A | Symptom Schaltungsüberwachung |
| 0x0092 | Symptom Gangüberwachung |
| 0x0099 | EGS-Reset |
| 0x009C | Zwangshochschaltung 5-6 durch DME |
| 0x009D | Auto-P wegen PowerModul Abschaltung |
| 0x009E | Auto-P wegen Absicherung EMF |
| 0x009F | Auto-P wegen Hilferuf EMF |
| 0x00A0 | Auto-N wegen Zwischenposition SZL |
| 0x00A1 | Auto-P wegen Wegfall CAN-Information SZL |
| 0x00BA | WD Fehlerzähler |
| 0x00BB | Vermutlich Unterspannung in Init |
| 0x00BC | Vermutlich Unterspannung in Cruise oder Limp-Home |
| 0x00BD | Vermutlich Unterspannung in Standby |
| 0x00BE | Inkonsistenzen von Istgang und Zielgang |
| 0x00BF | Inkonsistenzen von Kraftflussvariablen |
| 0x00C0 | Inkonsistenzen von Kraftfluss zu Gang |
| 0x00C1 | Inkonsistenzen von Ventilen/Kupplung |
| 0x00C5 | Funktion Hotmode Stufe 1 |
| 0x00C6 | Funktion Hotmode Stufe 2 |
| 0x00C7 | Funktion Hotmode Stufe 3 |
| 0xFFFF | unbekannte Fehlerart |

### CONTROLSTATEUMRECHNUNG

| CONTROLSTATE | CS |
| --- | --- |
| EIN | 0x02 |
| EIN/AUS | 0x01 |
| AUS | 0x00 |
|  | 0x03 |

### IDENTIFIER_LESEN

| IDENTIFIER | SIGNAL | 0X00 | 0X01 | 0X02 |
| --- | --- | --- | --- | --- |
| 0x01 | MV1 | AUS | - | EIN |
| 0x02 | MV2 | AUS | - | EIN |
| 0x03 | MV3 | AUS | - | EIN |
| 0x10 | EDS1 | <=100mA | - | >100mA |
| 0x11 | EDS2 | <=100mA | - | >100mA |
| 0x12 | EDS3 | <=100mA | - | >100mA |
| 0x13 | EDS4 | <=100mA | - | >100mA |
| 0x14 | EDS5 | <=100mA | - | >100mA |
| 0x15 | EDS6 | <=100mA | - | >100mA |
| 0x20 | L1 | L-Leitung LOW | - | L-Leitung HIGH |
| 0x21 | L2 | L-Leitung LOW | - | L-Leitung HIGH |
| 0x22 | L3 | L-Leitung LOW | - | L-Leitung HIGH |
| 0x23 | L4 | L-Leitung LOW | - | L-Leitung HIGH |
| 0x24 | P_Leitung | AUS | - | EIN |
| 0x30 | Shiftlock | AUS | - | EIN |
| 0x31 | Interlock | AUS | - | EIN |
| 0x00 |  | - | - | - |

### IDENTIFIER_SETZEN

| IDENTIFIER | SIGNAL | 0X00 | 0X01 | 0X02 |
| --- | --- | --- | --- | --- |
| 0x01 | MV1 | AUS | AUS/EIN 1s | EIN |
| 0x02 | MV2 | AUS | AUS/EIN 1s | EIN |
| 0x03 | MV3 | AUS | AUS/EIN 1s | EIN |
| 0x10 | EDS1 | 50mA | AUS/EIN 1s | EIN |
| 0x11 | EDS2 | 50mA | 50mA/800mA 1s | 800mA |
| 0x12 | EDS3 | 50mA | 50mA/800mA 1s | 800mA |
| 0x13 | EDS4 | 50mA | 50mA/800mA 1s | 800mA |
| 0x14 | EDS5 | 50mA | 50mA/800mA 1s | 800mA |
| 0x15 | EDS6 | 50mA | 50mA/800mA 1s | 800mA |
| 0x24 | P_Leitung | AUS | AUS/EIN 1s | EIN |
| 0x30 | Shiftlock | AUS | AUS/EIN 1s | EIN |
| 0x31 | Interlock | AUS | AUS/EIN 1s | EIN |
| 0x40 | Kombi | Kombi dunkel | - | Kombi an |
| 0x00 |  |  |  |  |

### FORTRBBMW

| RB | BMW |
| --- | --- |
| 0x00 | 0x0000 |
| 0x01 | 0x51A7 |
| 0x03 | 0xCF07 |
| 0x04 | 0x4EF2 |
| 0x05 | 0x50DD |
| 0x06 | 0x4FB1 |
| 0x07 | 0x4FB0 |
| 0x08 | 0x51A5 |
| 0x09 | 0x4EE9 |
| 0x0A | 0x4F70 |
| 0x0B | 0x4EE8 |
| 0x0C | 0x4F6B |
| 0x0D | 0x507B |
| 0x0E | 0x50DC |
| 0x0F | 0x51AC |
| 0x10 | 0x5014 |
| 0x11 | 0x4EFC |
| 0x12 | 0x5015 |
| 0x13 | 0x4FB2 |
| 0x14 | 0x4F53 |
| 0x15 | 0x4E20 |
| 0x16 | 0x4E20 |
| 0x17 | 0x4E21 |
| 0x18 | 0x4E21 |
| 0x19 | 0x4E22 |
| 0x1A | 0x4E22 |
| 0x1B | 0x4E23 |
| 0x1C | 0x4E23 |
| 0x1D | 0x4E24 |
| 0x1E | 0x4E24 |
| 0x1F | 0x4E25 |
| 0x20 | 0x4E25 |
| 0x21 | 0x4E84 |
| 0x22 | 0x4E84 |
| 0x23 | 0x4E85 |
| 0x24 | 0x4E85 |
| 0x25 | 0x4E86 |
| 0x26 | 0x4E86 |
| 0x27 | 0x4E87 |
| 0x28 | 0x4E87 |
| 0x29 | 0x4F80 |
| 0x2A | 0x4F81 |
| 0x2B | 0x4F82 |
| 0x2C | 0x4F83 |
| 0x2D | 0x4F84 |
| 0x2E | 0x4F85 |
| 0x2F | 0x4F86 |
| 0x30 | 0x4F87 |
| 0x31 | 0x4F88 |
| 0x32 | 0x4F89 |
| 0x33 | 0x4F8A |
| 0x34 | 0x4F8B |
| 0x35 | 0x4F8C |
| 0x36 | 0x4F8D |
| 0x37 | 0x4F8E |
| 0x38 | 0x4F8F |
| 0x39 | 0x4F90 |
| 0x3A | 0x4F91 |
| 0x3B | 0x4F92 |
| 0x3C | 0x4F93 |
| 0x3D | 0x4F94 |
| 0x3E | 0x4F95 |
| 0x3F | 0x4F96 |
| 0x40 | 0x4F97 |
| 0x41 | 0x4EE9 |
| 0x42 | 0xCF24 |
| 0x44 | 0xCF25 |
| 0x46 | 0xCF26 |
| 0x49 | 0xCF27 |
| 0x4A | 0x5079 |
| 0x4B | 0x51AA |
| 0x4C | 0x507A |
| 0x4D | 0x4EF3 |
| 0x4E | 0x5016 |
| 0x50 | 0x5014 |
| 0x51 | 0x507C |
| 0x52 | 0x507D |
| 0x53 | 0x51AB |
| 0x54 | 0x51A8 |
| 0x55 | 0x51AE |
| 0x56 | 0xCF28 |
| 0x57 | 0x4E89 |
| 0x58 | 0x4F71 |
| 0x59 | 0x4E26 |
| 0x5B | 0xCF29 |
| 0x5C | 0x4EEB |
| 0x5D | 0x5087 |
| 0x5E | 0x51AD |
| 0x5F | 0xCF2A |
| 0x60 | 0x4F6F |
| 0x61 | 0x5014 |
| 0x62 | 0x5088 |
| 0x63 | 0x4FB7 |
| 0x64 | 0x5118 |
| 0x65 | 0x5113 |
| 0x66 | 0x510E |
| 0x67 | 0x510F |
| 0x68 | 0x5110 |
| 0x69 | 0x5111 |
| 0x6A | 0x5112 |
| 0x6B | 0x5089 |
| 0x6C | 0x4F77 |
| 0x6D | 0x4FB8 |
| 0x6E | 0x4FB9 |
| 0x6F | 0xCF2B |
| 0x70 | 0xCF2C |
| 0x71 | 0x4F7A |
| 0x72 | 0xCF14 |
| 0x73 | 0xCF15 |
| 0x74 | 0xCF16 |
| 0x75 | 0xCF17 |
| 0x76 | 0xCF18 |
| 0x77 | 0xCF19 |
| 0x78 | 0xCF1A |
| 0x79 | 0xCF1B |
| 0x7A | 0xCF1C |
| 0x7B | 0xCF1D |
| 0x7C | 0xCF1E |
| 0x7D | 0xCF1F |
| 0x7E | 0xCF20 |
| 0x7F | 0xCF21 |
| 0x80 | 0xCF22 |
| 0x81 | 0xCF23 |
| 0x82 | 0x4FBA |
| 0x83 | 0x4FBB |
| 0x84 | 0x4EFB |
| 0x85 | 0x4EFD |
| 0x86 | 0x4EFE |
| 0x87 | 0x5119 |
| 0x88 | 0x511A |
| 0x89 | 0x4EFF |
| 0x8A | 0x5114 |
| 0x8B | 0x5115 |
| 0x?? | ERROR_UNKNOWN |

### ERSTELLER

| ASCII | NAME |
| --- | --- |
| 0 | Serienstand Ersteller ZF TE-H |
| 1 | Wiest ZF |
| 2 | Koesling ZF |
| 3 | Buohlert ZF |
| 4 | Zimmermann ZF |
| 5 | Cueppers ZF |
| 6 | Rosi ZF |
| 7 | Haegele ZF |
| A | Steinke BMW EA-71 |
| C | Noack BMW EA-71 |
| D | Dubreuil BMW EA-71 |
| E | Bravo BMW EA-71 |
| F | Boeker BMW EA-71 |
| I | Burkhardt BMW EA-71 |
| J | Schroeder BMW EA-71 |
| K | Hezel BMW EE-222 |
| L | Bruer BMW EA-71 |
| M | Kantelberg BMW EA-71 |
| N | Pfisterer BMW EA-71 |
| O | Reichler BMW EA-71 |
| P | Kara BMW EA-71 |
| Q | Deuke BMW EA-71 |
| S | Schmeling BMW EA-71 |
| 0x?? | ERROR_UNKNOWN |

### FARTRBBMW

| RB | BMW |
| --- | --- |
| 0x00 | 0x00 |
| 0x01 | 0x08 |
| 0x02 | 0x01 |
| 0x03 | 0x02 |
| 0x04 | 0x04 |
| 0x05 | 0x00 |
| 0x06 | 0x00 |
| 0x07 | 0x01 |
| 0x08 | 0x02 |
| 0x09 | 0x00 |
| 0x0A | 0x00 |
| 0x0B | 0x00 |
| 0x0C | 0x00 |
| 0x0D | 0x00 |
| 0x0E | 0x00 |
| 0x0F | 0x00 |
| 0x?? | ERROR_UNKNOWN |

### RDI_MASSN3

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0xA0 | 0xA1 | 0xA2 | 0xA3 | 0xA4 | 0xA5 | 0xA6 | 0xA7 |

### RDI_MASSN2

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0xA8 | 0xA9 | 0xAA | 0xAB | 0xAC | 0xAD | 0xAE | 0xAF |

### RDI_MASSN1

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0xB0 | 0xB1 | 0xB2 | 0xB3 | 0xB4 | 0xB5 | 0xB6 | 0xB7 |

### RDI_MASSN0

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0xB8 | 0xB9 | 0xBA | 0xBB | 0xBC | 0xBD | 0xBE | 0xBF |

### SCK_ERROR

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x91 | 0x92 | 0x93 | 0x94 | 0x95 |

### SCK_FAST_ERROR

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x98 | 0x99 |

### SGT_OUT0

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x22 | 0x23 | 0x24 | 0x25 | 0x26 |

### SGT_INP0

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 0x30 | 0x31 | 0x32 | 0x33 | 0x34 | 0x35 | 0x36 |

### SGT_GEAR0

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x20 | 0x21 |

### SGT_SIG0

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x40 | 0x41 | 0x42 | 0x43 | 0x44 | 0x45 |

### SGT_SIG1

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x50 | 0x51 | 0x52 | 0x53 |

### SGT_SIG2

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x60 | 0x61 | 0x62 | 0x63 | 0x64 | 0x65 |

### SGT_SIG3

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x70 | 0x71 | 0x72 | 0x73 | 0x74 | 0x75 | 0x76 | 0x77 |

### SGT_CAN0

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x80 | 0x81 | 0x82 | 0x83 | 0x84 |

### RGT_HOTSTAT

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x13 | 0x14 | 0x15 | 0x16 |

### WK_TAB

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Wandlerkupplung offen |
| 0x20 | Wandlerkupplung geregelt |
| 0x40 | Wandlerkupplung zu |
| 0xXY | Wandlerkupplung unplausibel |

### TEMP1_TAB

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Oeltemperatursensor iO |
| 0x01 | Oeltemperatursensor niO |
| 0x02 | beide Temperatursensoren niO |
| 0xXY | nicht definiert |

### TEMP2_TAB

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Substrattemperatursensor iO |
| 0x01 | Substrattemperatursensor niO |
| 0x02 | beide Temperatursensoren niO |
| 0xXY | nicht definiert |

### SA_TAB

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Schaltart nicht definiert |
| 0x01 | Schaltart 1 nach 1 |
| 0x02 | Schaltart 2 nach 2 |
| 0x03 | Schaltart 3 nach 3 |
| 0x04 | Schaltart 4 nach 4 |
| 0x05 | Schaltart 5 nach 5 |
| 0x06 | Schaltart 6 nach 6 |
| 0x07 | Schaltart R nach R |
| 0x08 | Schaltart 1 nach 2 |
| 0x09 | Schaltart 2 nach 3 |
| 0x0A | Schaltart 3 nach 4 |
| 0x0B | Schaltart 4 nach 5 |
| 0x0C | Schaltart 5 nach 6 |
| 0x0D | Schaltart 6 nach 5 |
| 0x0E | Schaltart 5 nach 4 |
| 0x0F | Schaltart 4 nach 3 |
| 0x10 | Schaltart 3 nach 2 |
| 0x11 | Schaltart 2 nach 1 |
| 0x12 | Schaltart D1 nach R |
| 0x13 | Schaltart D2 nach R |
| 0x14 | Schaltart R nach D1 |
| 0x15 | Schaltart R nach D2 |
| 0x16 | Schaltart NPD nach R |
| 0x17 | Schaltart NPR nach D |
| 0x18 | Schaltart R nach P |
| 0x19 | Vorhalt |
| 0x1A | Schaltart D nach P |
| 0x1B | Vorhalt |
| 0x1C | Schaltart R nach N |
| 0x1D | Schaltart D nach N |
| 0x1E | Schaltart P nach P |
| 0x1F | Schaltart N nach N |
| 0xXY | Schaltart unplausibel |

### ZUEND_TAB

| WERT | UWTEXT |
| --- | --- |
| 0x00 | undefiniert |
| 0x01 | Uebergang Zuendung AUS-EIN |
| 0x02 | Zuendung EIN |
| 0x03 | Uebergang Zuendung EIN-AUS |
| 0x04 | Zuendung AUS |
| 0xXY | Fehler |

### TTCURLAST_TAB

| WERT | UWTEXT |
| --- | --- |
| 0x00 | undefiniert |
| 0x01 | Reset in Initilisation |
| 0x02 | Reset in Standby |
| 0x03 | Reset in Betrieb |
| 0x04 | Reset in Limp-Home |
| 0xXY | Fehler |

### HOTMODE0_TAB

| WERT | UWTEXT |
| --- | --- |
| 0x00 | undefiniert |
| 0x1F | Zähler Hot Mode Stufe 1 |
| 0xXY | Fehler |

### HOTMODE1_TAB

| WERT | UWTEXT |
| --- | --- |
| 0x00 | undefiniert |
| 0x7C | Zähler Hot Mode Stufe 3 |
| 0xXY | Fehler |

### PCODETEXTE

| PCODE | STRING | TEXT |
| --- | --- | --- |
| 0x0000 | -- |  |
| 0x0001 | P0001 | P0001 Kraftstoffvolumenregler - Fehlfunktion oder Leitungsunterbrechung |
| 0x0002 | P0002 | P0002 Kraftstoffvolumenregler - Meßbereichs- oder Leistungsproblem |
| 0x0003 | P0003 | P0003 Kraftstoffvolumenregler - Input niedrig |
| 0x0004 | P0004 | P0004 Kraftstoffvolumenregler - Input hoch |
| 0x0005 | P0005 | P0005 Kraftstoffabsperrventil 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0006 | P0006 | P0006 Kraftstoffabsperrventil 1 - Input niedrig |
| 0x0007 | P0007 | P0007 Kraftstoffabsperrventil 1 - Input hoch |
| 0x0008 | P0008 | P0008 Kurbelwellengeber Bezugsmarke zu Nockenwellengeber Bezugsmarke (Bank 1) - Plausibilitätsfehler |
| 0x0009 | P0009 | P0009 Kurbelwellengeber Bezugsmarke zu Nockenwellengeber Bezugsmarke (Bank 2) - Plausibilitätsfehler |
| 0x0010 | P0010 | P0010 Nockenwellenversteller Einlass (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0011 | P0011 | P0011 Nockenwellensteuerung Einlass (Bank 1) - Adaptionswert Spätposition unplausibel oder Leistungsproblem |
| 0x0012 | P0012 | P0012 Nockenwellensteuerung Einlass (Bank 1) - Regelfehler, unplausible Position |
| 0x0013 | P0013 | P0013 Nockenwellenversteller Auslass (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0014 | P0014 | P0014 Nockenwellensteuerung Auslass (Bank 1) - Adaptionswert Frühposition unplausibel oder Leistungsproblem |
| 0x0015 | P0015 | P0015 Nockenwellensteuerung Auslass (Bank 1) - Regelfehler, unplausible Position |
| 0x0016 | P0016 | P0016 Kurbelwellenstellung - Nockenwellenstellung Einlass (Bank 1) - Korrelationsfehler |
| 0x0017 | P0017 | P0017 Kurbelwellenstellung - Nockenwellenstellung Auslass (Bank 1) - Korrelationsfehler |
| 0x0018 | P0018 | P0018 Kurbelwellenstellung - Nockenwellenstellung Einlass (Bank 2) - Korrelationsfehler |
| 0x0019 | P0019 | P0019 Kurbelwellenstellung - Nockenwellenstellung Auslass (Bank 2) - Korrelationsfehler |
| 0x0020 | P0020 | P0020 Nockenwellenversteller Einlass (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0021 | P0021 | P0021 Nockenwellensteuerung Einlass (Bank 2) - Adaptionswert Spätposition unplausibel oder Leistungsproblem |
| 0x0022 | P0022 | P0022 Nockenwellensteuerung Einlass (Bank 2) - Regelfehler, unplausible Position |
| 0x0023 | P0023 | P0023 Nockenwellenversteller Auslass (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0024 | P0024 | P0024 Nockenwellensteuerung Auslass (Bank 2) - Adaptionswert Frühposition unplausibel oder Leistungsproblem |
| 0x0025 | P0025 | P0025 Nockenwellensteuerung Auslass (Bank 2) - Regelfehler, unplausible Position |
| 0x0026 | P0026 | P0026 Einlassventil Versteller/Aktuator (Bank 1) - Meßbereichs- oder Leistungsproblem  |
| 0x0027 | P0027 | P0027 Auslassventil Versteller/Aktuator (Bank 1) - Meßbereichs- oder Leistungsproblem |
| 0x0028 | P0028 | P0028 Einlassventil Versteller/Aktuator (Bank 2) - Meßbereichs- oder Leistungsproblem |
| 0x0029 | P0029 | P0029 Auslassventil Versteller/Aktuator (Bank 2) - Meßbereichs- oder Leistungsproblem |
| 0x0030 | P0030 | P0030 Beheizte Lambdasonde Heizungsschaltkreis (Bank 1, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0031 | P0031 | P0031 Beheizte Lambdasonde Heizungsschaltkreis (Bank 1, vor Katalysator) - Input niedrig |
| 0x0032 | P0032 | P0032 Beheizte Lambdasonde Heizungsschaltkreis (Bank 1, vor Katalysator) - Input hoch |
| 0x0033 | P0033 | P0033 Turbolader/Verdichter Bypassventil - Fehlfunktion |
| 0x0034 | P0034 | P0034 Turbolader/Verdichter Bypassventil - Input niedrig |
| 0x0035 | P0035 | P0035 Turbolader/Verdichter Bypassventil - Input hoch |
| 0x0036 | P0036 | P0036 Beheizte Lambdasonde Heizungsschaltkreis (Bank 1, nach Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0037 | P0037 | P0037 Beheizte Lambdasonde Heizungsschaltkreis (Bank 1, nach Katalysator) - Input niedrig |
| 0x0038 | P0038 | P0038 Beheizte Lambdasonde Heizungsschaltkreis (Bank 1, nach Katalysator) - Input hoch |
| 0x0039 | P0039 | P0039 Turbolader/Verdichter Bypassventil - Meßbereichs- oder Leistungsproblem |
| 0x0040 | P0040 | P0040 Lambdasonden Signal Bank 1 vor Katalysator / Bank 2 vor Katalysator - vertauscht  |
| 0x0041 | P0041 | P0041 Lambdasonden Signal Bank 1 nach Katalysator / Bank 2 nach Katalysator - vertauscht  |
| 0x0042 | P0042 | P0042 Beheizte Lambdasonde Heizungsschaltkreis (Bank 1, Sonde 3)  - Fehlfunktion oder Leitungsunterbrechung |
| 0x0043 | P0043 | P0043 Beheizte Lambdasonde Heizungsschaltkreis (Bank 1, Sonde 3) - Input niedrig |
| 0x0044 | P0044 | P0044 Beheizte Lambdasonde Heizungsschaltkreis (Bank 1, Sonde 3) - Input hoch |
| 0x0045 | P0045 | P0045 Turbolader/Verdichter Ladedruck Versteller/Aktuator 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0046 | P0046 | P0046 Turbolader/Verdichter Ladedruck Versteller/Aktuator 1 - Meßbereichs- oder Leistungsproblem |
| 0x0047 | P0047 | P0047 Turbolader/Verdichter Ladedruck Versteller/Aktuator 1 - Input niedrig |
| 0x0048 | P0048 | P0048 Turbolader/Verdichter Ladedruck Versteller/Aktuator 1 - Input hoch |
| 0x0049 | P0049 | P0049 Turbolader/Verdichter Turbine - Überdrehzahl |
| 0x004A | P004A | P004A Turbolader/Verdichter Ladedruck Versteller/Aktuator 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x004B | P004B | P004B Turbolader/Verdichter Ladedruck Versteller/Aktuator 2 - Meßbereichs- oder Leistungsproblem |
| 0x004C | P004C | P004C Turbolader/Verdichter Ladedruck Versteller/Aktuator 2 - Input niedrig |
| 0x004D | P004D | P004D Turbolader/Verdichter Ladedruck Versteller/Aktuator 2 - Input hoch |
| 0x004E | P004E | P004E Turbolader/Verdichter Ladedruck Versteller/Aktuator 1 - Input sporadisch/unregelmäßig |
| 0x004F | P004F | P004F Turbolader/Verdichter Ladedruck Versteller/Aktuator 2 - Input sporadisch/unregelmäßig |
| 0x0050 | P0050 | P0050 Beheizte Lambdasonde Heizungsschaltkreis (Bank 2, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0051 | P0051 | P0051 Beheizte Lambdasonde Heizungsschaltkreis (Bank 2, vor Katalysator) - Input niedrig |
| 0x0052 | P0052 | P0052 Beheizte Lambdasonde Heizungsschaltkreis (Bank 2, vor Katalysator) - Input hoch |
| 0x0053 | P0053 | P0053 Beheizte Lambdasonde Heizwiderstand (Bank 1, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0054 | P0054 | P0054 Beheizte Lambdasonde Heizwiderstand (Bank 1, nach Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0055 | P0055 | P0055 Beheizte Lambdasonde Heizwiderstand (Bank 1, Sonde 3) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0056 | P0056 | P0056 Beheizte Lambdasonde Heizungsschaltkreis (Bank 2, nach Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0057 | P0057 | P0057 Beheizte Lambdasonde Heizungsschaltkreis (Bank 2, nach Katalysator) - Input niedrig |
| 0x0058 | P0058 | P0058 Beheizte Lambdasonde Heizungsschaltkreis (Bank 2, nach Katalysator) - Input hoch |
| 0x0059 | P0059 | P0059 Beheizte Lambdasonde Heizwiderstand (Bank 2, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0060 | P0060 | P0060 Beheizte Lambdasonde Heizwiderstand (Bank 2, nach Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0061 | P0061 | P0061 Beheizte Lambdasonde Heizwiderstand (Bank 2, Sonde 3) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0062 | P0062 | P0062 Beheizte Lambdasonde Heizungsschaltkreis (Bank 2, Sonde 3)  - Fehlfunktion oder Leitungsunterbrechung |
| 0x0063 | P0063 | P0063 Beheizte Lambdasonde Heizungsschaltkreis (Bank 2, Sonde 3) - Input niedrig |
| 0x0064 | P0064 | P0064 Beheizte Lambdasonde Heizungsschaltkreis (Bank 2, Sonde 3) - Input hoch |
| 0x0065 | P0065 | P0065 Luftumfasstes Einspritzventil - Meßbereichs- oder Leistungsproblem |
| 0x0066 | P0066 | P0066 Luftumfasstes Einspritzventil - Fehlfunktion oder Input niedrig |
| 0x0067 | P0067 | P0067 Luftumfasstes Einspritzventil - Input hoch |
| 0x0068 | P0068 | P0068 Absoluter Saugrohrdruck / Luftmassendurchsatz Drosselklappenstellung - Korrelationsfehler |
| 0x0069 | P0069 | P0069 Absoluter Saugrohrdruck / barometrischer Druck - Korrelationsfehler |
| 0x0070 | P0070 | P0070 Umgebungstemperaturfühler -  Fehlfunktion |
| 0x0071 | P0071 | P0071 Umgebungstemperaturfühler - Meßbereichs- oder Leistungsproblem |
| 0x0072 | P0072 | P0072 Umgebungstemperaturfühler - Input niedrig |
| 0x0073 | P0073 | P0073 Umgebungstemperaturfühler - Input hoch |
| 0x0074 | P0074 | P0074 Umgebungstemperaturfühler - Input sporadisch |
| 0x0075 | P0075 | P0075 Einlassventil Versteller/Aktuator (Bank 1) - Fehlfunktion |
| 0x0076 | P0076 | P0076 Einlassventil Versteller/Aktuator (Bank 1) - Input niedrig |
| 0x0077 | P0077 | P0077 Einlassventil Versteller/Aktuator (Bank 1) - Input hoch |
| 0x0078 | P0078 | P0078 Auslassventil Versteller/Aktuator (Bank 1) - Fehlfunktion |
| 0x0079 | P0079 | P0079 Auslassventil Versteller/Aktuator (Bank 1) - Input niedrig |
| 0x0080 | P0080 | P0080 Auslassventil Versteller/Aktuator (Bank 1) - Input hoch |
| 0x0081 | P0081 | P0081 Einlassventil Versteller/Aktuator (Bank 2) - Fehlfunktion |
| 0x0082 | P0082 | P0082 Einlassventil Versteller/Aktuator (Bank 2) - Input niedrig |
| 0x0083 | P0083 | P0083 Einlassventil Versteller/Aktuator (Bank 2) - Input hoch |
| 0x0084 | P0084 | P0084 Auslassventil Versteller/Aktuator (Bank 2) - Fehlfunktion |
| 0x0085 | P0085 | P0085 Auslassventil Versteller/Aktuator (Bank 2) - input niedrig |
| 0x0086 | P0086 | P0086 Auslassventil Versteller/Aktuator (Bank 2) - Input hoch |
| 0x0087 | P0087 | P0087 Kraftstoffeinspritzleiste/-system (Bank 1) - Druck zu niedrig |
| 0x0088 | P0088 | P0088 Kraftstoffeinspritzleiste/-system (Bank 1) - Druck zu hoch |
| 0x0089 | P0089 | P0089 Kraftstoffdruckregler 1 - Leistungsproblem |
| 0x0090 | P0090 | P0090 Kraftstoffdruckregler 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0091 | P0091 | P0091 Kraftstoffdruckregler 1 - Input niedrig |
| 0x0092 | P0092 | P0092 Kraftstoffdruckregler 1 - Input hoch |
| 0x0093 | P0093 | P0093 Kraftstoffsystem - großes Leck entdeckt |
| 0x0094 | P0094 | P0094 Kraftstoffsystem - kleines Leck entdeckt |
| 0x0095 | P0095 | P0095 Ansauglufttemperaturfühler 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0096 | P0096 | P0096 Ansauglufttemperaturfühler 2 - Meßbereichs- oder Leistungsproblem |
| 0x0097 | P0097 | P0097 Ansauglufttemperaturfühler 2 - Input niedrig |
| 0x0098 | P0098 | P0098 Ansauglufttemperaturfühler 2 - Input hoch |
| 0x0099 | P0099 | P0099 Ansauglufttemperaturfühler 2 - Input sporadisch/unregelmäßig |
| 0x0100 | P0100 | P0100 Luftmassen- oder Luftmengendurchsatz 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0101 | P0101 | P0101 Luftmassen- oder Luftmengendurchsatz 1 - Meßbereichs- oder Leistungsproblem |
| 0x0102 | P0102 | P0102 Luftmassen- oder Luftmengendurchsatz 1 - Input niedrig |
| 0x0103 | P0103 | P0103 Luftmassen- oder Luftmengendurchsatz 1 - Input hoch |
| 0x0104 | P0104 | P0104 Luftmassen- oder Luftmengendurchsatz 1 - Input sporadisch |
| 0x0105 | P0105 | P0105 Absoluter Saugrohrdruck / barometrischer Druck - Fehlfunktion |
| 0x0106 | P0106 | P0106 Absoluter Saugrohrdruck / barometrischer Druck - Meßbereichs- oder Leistungsproblem |
| 0x0107 | P0107 | P0107 Absoluter Saugrohrdruck / barometrischer Druck - Input niedrig |
| 0x0108 | P0108 | P0108 Absoluter Saugrohrdruck / barometrischer Druck - Input hoch |
| 0x0109 | P0109 | P0109 Absoluter Saugrohrdruck / barometrischer Druck - Input sporadisch |
| 0x010A | P010A | P010A Luftmassen- oder Luftmengendurchsatz 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x010B | P010B | P010B Luftmassen- oder Luftmengendurchsatz 2 - Meßbereichs- oder Leistungsproblem |
| 0x010C | P010C | P010C Luftmassen- oder Luftmengendurchsatz 2 - Input niedrig |
| 0x010D | P010D | P010D Luftmassen- oder Luftmengendurchsatz 2 - Input hoch |
| 0x010E | P010E | P010E Luftmassen- oder Luftmengendurchsatz 2 - Input sporadisch |
| 0x010F | P010F | P010F Luftmassen- oder Luftmengendurchsatz 1/2 - Korrelationsfehler |
| 0x0110 | P0110 | P0110 Ansauglufttemperaturfühler 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0111 | P0111 | P0111 Ansauglufttemperaturfühler 1 - Meßbereichs- oder Leistungsproblem |
| 0x0112 | P0112 | P0112 Ansauglufttemperaturfühler 1 - Input niedrig |
| 0x0113 | P0113 | P0113 Ansauglufttemperaturfühler 1 - Input hoch |
| 0x0114 | P0114 | P0114 Ansauglufttemperaturfühler 1 - Input sporadisch |
| 0x0115 | P0115 | P0115 Motorkühlmitteltemperaturfühler 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0116 | P0116 | P0116 Motorkühlmitteltemperaturfühler 1 - Meßbereichs- oder Leistungsproblem |
| 0x0117 | P0117 | P0117 Motorkühlmitteltemperaturfühler 1 - Input niedrig |
| 0x0118 | P0118 | P0118 Motorkühlmitteltemperaturfühler 1 - Input hoch |
| 0x0119 | P0119 | P0119 Motorkühlmitteltemperaturfühler 1 - Input sporadisch |
| 0x011A | P011A | P011A Motorkühlmitteltemperaturfühler 1/2 - Korrelationsfehler |
| 0x0120 | P0120 | P0120 Drosselklappenpotentiometer 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0121 | P0121 | P0121 Drosselklappenpotentiometer 1 - Meßbereichs- oder Leistungsproblem |
| 0x0122 | P0122 | P0122 Drosselklappenpotentiometer 1 - Input niedrig |
| 0x0123 | P0123 | P0123 Drosselklappenpotentiometer 1 - Input hoch |
| 0x0124 | P0124 | P0124 Drosselklappenpotentiometer 1 - Input sporadisch |
| 0x0125 | P0125 | P0125 Kühlmitteltemperatur - zu niedrig für Lambdaregelung |
| 0x0126 | P0126 | P0126 Kühlmitteltemperatur - zu niedrig für stetigen Betrieb |
| 0x0127 | P0127 | P0127 Ansauglufttemperatur - zu hoch |
| 0x0128 | P0128 | P0128 Kühlmittelthermostat (Kühlmitteltemperatur unterhalb Thermostat Regeltemperatur) |
| 0x0129 | P0129 | P0129 Barometrischer Druck zu niedrig |
| 0x0130 | P0130 | P0130 Lambdasonde (Bank 1, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0131 | P0131 | P0131 Lambdasonde (Bank 1, vor Katalysator) - Spannung niedrig |
| 0x0132 | P0132 | P0132 Lambdasonde (Bank 1, vor Katalysator) - Spannung hoch |
| 0x0133 | P0133 | P0133 Lambdasonde (Bank 1, vor Katalysator) - langsame Reaktion |
| 0x0134 | P0134 | P0134 Lambdasonde (Bank 1, vor Katalysator) - keine Aktivität festzustellen |
| 0x0135 | P0135 | P0135 Lambdasonde Heizungsschaltkreis (Bank 1, vor Katalysator) - Fehlfunktion |
| 0x0136 | P0136 | P0136 Lambdasonde (Bank 1, nach Katalysator) - Fehlfunktion |
| 0x0137 | P0137 | P0137 Lambdasonde (Bank 1, nach Katalysator) - Spannung niedrig |
| 0x0138 | P0138 | P0138 Lambdasonde (Bank 1, nach Katalysator) - Spannung hoch |
| 0x0139 | P0139 | P0139 Lambdasonde (Bank 1, nach Katalysator) - langsame Reaktion |
| 0x0140 | P0140 | P0140 Lambdasonde (Bank 1, nach Katalysator) - keine Aktivität festzustellen |
| 0x0141 | P0141 | P0141 Lambdasonde Heizungsschaltkreis (Bank 1, nach Katalysator) - Fehlfunktion |
| 0x0142 | P0142 | P0142 Lambdasonde (Bank 1, Sensor 3) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0143 | P0143 | P0143 Lambdasonde (Bank 1, Sensor 3) - Spannung niedrig |
| 0x0144 | P0144 | P0144 Lambdasonde (Bank 1, Sensor 3) - Spannung hoch |
| 0x0145 | P0145 | P0145 Lambdasonde (Bank 1, Sensor 3) - langsame Reaktion |
| 0x0146 | P0146 | P0146 Lambdasonde (Bank 1, Sensor 3) - keine Aktivität festzustellen |
| 0x0147 | P0147 | P0147 Lambdasonde Heizungsschaltkreis (Bank 1, Sensor 3) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0148 | P0148 | P0148 Kraftstoffversorgung - Fehler |
| 0x0149 | P0149 | P0149 Kraftstoff-Einspritzzeitpunkt - Fehler |
| 0x0150 | P0150 | P0150 Lambdasonde (Bank 2, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0151 | P0151 | P0151 Lambdasonde (Bank 2, vor Katalysator) - Spannung niedrig |
| 0x0152 | P0152 | P0152 Lambdasonde (Bank 2, vor Katalysator) - Spannung hoch |
| 0x0153 | P0153 | P0153 Lambdasonde (Bank 2, vor Katalysator) - langsame Reaktion |
| 0x0154 | P0154 | P0154 Lambdasonde (Bank 2, vor Katalysator) - keine Aktivität festzustellen |
| 0x0155 | P0155 | P0155 Lambdasonde Heizungsschaltkreis (Bank 2, vor Katalysator) - Fehlfunktion |
| 0x0156 | P0156 | P0156 Lambdasonde (Bank 2, nach Katalysator) - Fehlfunktion |
| 0x0157 | P0157 | P0157 Lambdasonde (Bank 2, nach Katalysator) - Spannung niedrig |
| 0x0158 | P0158 | P0158 Lambdasonde (Bank 2, nach Katalysator) - Spannung hoch |
| 0x0159 | P0159 | P0159 Lambdasonde (Bank 2, nach Katalysator) - langsame Reaktion |
| 0x0160 | P0160 | P0160 Lambdasonde (Bank 2, nach Katalysator) - keine Aktivität festzustellen |
| 0x0161 | P0161 | P0161 Lambdasonde Heizungsschaltkreis (Bank 2, nach Katalysator) - Fehlfunktion |
| 0x0162 | P0162 | P0162 Lambdasonde (Bank 2, Sensor 3) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0163 | P0163 | P0163 Lambdasonde (Bank 2, Sensor 3) - Spannung niedrig |
| 0x0164 | P0164 | P0164 Lambdasonde (Bank 2, Sensor 3) - Spannung hoch |
| 0x0165 | P0165 | P0165 Lambdasonde (Bank 2, Sensor 3) - langsame Reaktion |
| 0x0166 | P0166 | P0166 Lambdasonde (Bank 2, Sensor 3) - keine Aktivität festzustellen |
| 0x0167 | P0167 | P0167 Lambdasonde Heizungsschaltkreis (Bank 2, Sonde 3) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0168 | P0168 | P0168 Kraftstofftemperatur - zu hoch |
| 0x0169 | P0169 | P0169 Kraftstoffzusammensetzung - fehlerhaft |
| 0x0170 | P0170 | P0170 Gemischregelung (Bank 1) - Fehlfunktion |
| 0x0171 | P0171 | P0171 Gemischregelung (Bank 1) - System zu mager |
| 0x0172 | P0172 | P0172 Gemischregelung (Bank 1) - System zu fett |
| 0x0173 | P0173 | P0173 Gemischregelung (Bank 2) - Fehlfunktion |
| 0x0174 | P0174 | P0174 Gemischregelung (Bank 2) - System zu mager |
| 0x0175 | P0175 | P0175 Gemischregelung (Bank 2) - System zu fett |
| 0x0176 | P0176 | P0176 Meßsonde Kraftstoffzusammensetzung - Fehlfunktion oder Leitungsunterbrechung |
| 0x0177 | P0177 | P0177 Meßsonde Kraftstoffzusammensetzung - Meßbereichs- oder Leistungsproblem |
| 0x0178 | P0178 | P0178 Meßsonde Kraftstoffzusammensetzung - Input niedrig |
| 0x0179 | P0179 | P0179 Meßsonde Kraftstoffzusammensetzung - Input hoch |
| 0x0180 | P0180 | P0180 Kraftstofftemperaturfühler 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0181 | P0181 | P0181 Kraftstofftemperaturfühler 1 - Meßbereichs- oder Leistungsproblem |
| 0x0182 | P0182 | P0182 Kraftstofftemperaturfühler 1 - Input niedrig |
| 0x0183 | P0183 | P0183 Kraftstofftemperaturfühler 1 - Input hoch |
| 0x0184 | P0184 | P0184 Kraftstofftemperaturfühler 1 - Input sporadisch |
| 0x0185 | P0185 | P0185 Kraftstofftemperaturfühler 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0186 | P0186 | P0186 Kraftstofftemperaturfühler 2 - Meßbereichs- oder Leistungsproblem |
| 0x0187 | P0187 | P0187 Kraftstofftemperaturfühler 2 - Input niedrig |
| 0x0188 | P0188 | P0188 Kraftstofftemperaturfühler 2 - Input hoch |
| 0x0189 | P0189 | P0189 Kraftstofftemperaturfühler 2 - Input sporadisch |
| 0x018A | P018A | P018A Kraftstoff-Drucksensor 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x018B | P018B | P018B Kraftstoff-Drucksensor 2 - Meßbereichs- oder Leistungsproblem |
| 0x018C | P018C | P018C Kraftstoff-Drucksensor 2 - Input niedrig |
| 0x018D | P018D | P018D Kraftstoff-Drucksensor 2 - Input hoch |
| 0x018E | P018E | P018E Kraftstoff-Drucksensor 2 - Input sporadisch/unregelmäßig |
| 0x0190 | P0190 | P0190 Kraftstoffeinspritzleiste Drucksensor 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0191 | P0191 | P0191 Kraftstoffeinspritzleiste Drucksensor 1 - Meßbereichs- oder Leistungsproblem |
| 0x0192 | P0192 | P0192 Kraftstoffeinspritzleiste Drucksensor 1 - Input niedrig |
| 0x0193 | P0193 | P0193 Kraftstoffeinspritzleiste Drucksensor 1 - Input hoch |
| 0x0194 | P0194 | P0194 Kraftstoffeinspritzleiste Drucksensor 1 - Input sporadisch/unregelmäßig |
| 0x0195 | P0195 | P0195 Motoröltemperaturfühler - Fehlfunktion |
| 0x0196 | P0196 | P0196 Motoröltemperaturfühler - Meßbereichs- oder Leistungsproblem |
| 0x0197 | P0197 | P0197 Motoröltemperaturfühler - Input niedrig |
| 0x0198 | P0198 | P0198 Motoröltemperaturfühler - Input hoch |
| 0x0199 | P0199 | P0199 Motoröltemperaturfühler - Input sporadisch |
| 0x0200 | P0200 | P0200 Einspritzventil - Fehlfunktion oder Leitungsunterbrechung |
| 0x0201 | P0201 | P0201 Einspritzventil Zylinder 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0202 | P0202 | P0202 Einspritzventil Zylinder 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0203 | P0203 | P0203 Einspritzventil Zylinder 3 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0204 | P0204 | P0204 Einspritzventil Zylinder 4 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0205 | P0205 | P0205 Einspritzventil Zylinder 5 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0206 | P0206 | P0206 Einspritzventil Zylinder 6 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0207 | P0207 | P0207 Einspritzventil Zylinder 7 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0208 | P0208 | P0208 Einspritzventil Zylinder 8 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0209 | P0209 | P0209 Einspritzventil Zylinder 9 - Fehlfunktion oder Leitungsunterbrechung |
| 0x020A | P020A | P020A Einspritzzeitregelung Zylinder 1 - Fehlfunktion |
| 0x020B | P020B | P020B Einspritzzeitregelung Zylinder 2 - Fehlfunktion |
| 0x020C | P020C | P020C Einspritzzeitregelung Zylinder 3 - Fehlfunktion |
| 0x020D | P020D | P020D Einspritzzeitregelung Zylinder 4 - Fehlfunktion |
| 0x020E | P020E | P020E Einspritzzeitregelung Zylinder 5 - Fehlfunktion |
| 0x020F | P020F | P020F Einspritzzeitregelung Zylinder 6 - Fehlfunktion |
| 0x0210 | P0210 | P0210 Einspritzventil Zylinder 10 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0211 | P0211 | P0211 Einspritzventil Zylinder 11 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0212 | P0212 | P0212 Einspritzventil Zylinder 12 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0213 | P0213 | P0213 Kaltstarteinspritventil 1 - Fehlfunktion |
| 0x0214 | P0214 | P0214 Kaltstarteinspritzventil 2 - Fehlfunktion |
| 0x0215 | P0215 | P0215 Absperrmagnetventil Motor - Fehlfunktion |
| 0x0216 | P0216 | P0216 Einspritzzeitregelung - Fehlfunktion |
| 0x0217 | P0217 | P0217 Motorkühlmitteltemperatur - zu hoch |
| 0x0218 | P0218 | P0218 Getriebeöltemperatur - zu hoch |
| 0x0219 | P0219 | P0219 Motordrehzahl - zu hoch |
| 0x021A | P021A | P021A Einspritzzeitregelung Zylinder 7 - Fehlfunktion |
| 0x021B | P021B | P021B Einspritzzeitregelung Zylinder 8 - Fehlfunktion |
| 0x021C | P021C | P021C Einspritzzeitregelung Zylinder 9 - Fehlfunktion |
| 0x021D | P021D | P021D Einspritzzeitregelung Zylinder 10 - Fehlfunktion |
| 0x021E | P021E | P021E Einspritzzeitregelung Zylinder 11 - Fehlfunktion |
| 0x021F | P021F | P021F Einspritzzeitregelung Zylinder 12 - Fehlfunktion |
| 0x0220 | P0220 | P0220 Drosselklappenpotentiometer 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0221 | P0221 | P0221 Drosselklappenpotentiometer 2 - Meßbereichs- oder Leistungsproblem |
| 0x0222 | P0222 | P0222 Drosselklappenpotentiometer 2 - Input niedrig |
| 0x0223 | P0223 | P0223 Drosselklappenpotentiometer 2 - Input hoch |
| 0x0224 | P0224 | P0224 Drosselklappenpotentiometer 2 - Input sporadisch |
| 0x0225 | P0225 | P0225 Drosselklappenpotentiometer 3 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0226 | P0226 | P0226 Drosselklappenpotentiometer 3 - Meßbereichs- oder Leistungsproblem |
| 0x0227 | P0227 | P0227 Drosselklappenpotentiometer 3 - Input niedrig |
| 0x0228 | P0228 | P0228 Drosselklappenpotentiometer 3 - Input hoch |
| 0x0229 | P0229 | P0229 Drosselklappenpotentiometer 3 - Input sporadisch |
| 0x022A | P022A | P022A Ladeluftkühler Bypass 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x022B | P022B | P022B Ladeluftkühler Bypass 1 - Input niedrig |
| 0x022C | P022C | P022C Ladeluftkühler Bypass 1 - Input hoch |
| 0x022D | P022D | P022D Ladeluftkühler Bypass 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x022E | P022E | P022E Ladeluftkühler Bypass 2 - Input niedrig |
| 0x022F | P022F | P022F Ladeluftkühler Bypass 2 - Input hoch |
| 0x0230 | P0230 | P0230 Kraftstoffpumpe Primärkreis - Fehlfunktion |
| 0x0231 | P0231 | P0231 Kraftstoffpumpe Sekundärkreis - Input niedrig |
| 0x0232 | P0232 | P0232 Kraftstoffpumpe Sekundärkreis - Input hoch |
| 0x0233 | P0233 | P0233 Kraftstoffpumpe Sekundärkreis - Input sporadisch |
| 0x0234 | P0234 | P0234 Turbolader/Verdichter - Ladedruck zu hoch |
| 0x0235 | P0235 | P0235 Turbolader/Verdichter Ladedrucksensor 1 - Fehlfunktion |
| 0x0236 | P0236 | P0236 Turbolader/Verdichter Ladedrucksensor 1 - Meßbereichs- oder Leistungsproblem |
| 0x0237 | P0237 | P0237 Turbolader/Verdichter Ladedrucksensor 1 - Input niedrig |
| 0x0238 | P0238 | P0238 Turbolader/Verdichter Ladedrucksensor 1 - Input hoch |
| 0x0239 | P0239 | P0239 Turbolader/Verdichter Ladedrucksensor 2 - Fehlfunktion |
| 0x023A | P023A | P023A Ladeluftkühler Kühlmittelpumpe - Fehlfunktion oder Leitungsunterbrechung |
| 0x023B | P023B | P023B Ladeluftkühler Kühlmittelpumpe - Input niedrig |
| 0x023C | P023C | P023C Ladeluftkühler Kühlmittelpumpe - Input hoch |
| 0x0240 | P0240 | P0240 Turbolader/Verdichter Ladedrucksensor 2 - Meßbereichs- oder Leistungsproblem |
| 0x0241 | P0241 | P0241 Turbolader/Verdichter Ladedrucksensor 2 - Input niedrig |
| 0x0242 | P0242 | P0242 Turbolader/Verdichter Ladedrucksensor 2 - Input hoch |
| 0x0243 | P0243 | P0243 Turbolader/Verdichter Ladedruckventil 1 - Fehlfunktion |
| 0x0244 | P0244 | P0244 Turbolader/Verdichter Ladedruckventil 1 - Meßbereichs- oder Leistungsproblem |
| 0x0245 | P0245 | P0245 Turbolader/Verdichter Ladedruckventil 1 -  Input niedrig |
| 0x0246 | P0246 | P0246 Turbolader/Verdichter Ladedruckventil 1 - Input hoch |
| 0x0247 | P0247 | P0247 Turbolader/Verdichter Ladedruckventil 2 - Fehlfunktion |
| 0x0248 | P0248 | P0248 Turbolader/Verdichter Ladedruckventil 2 - Meßbereichs- oder Leistungsproblem |
| 0x0249 | P0249 | P0249 Turbolader/Verdichter Ladedruckventil 2 - Input niedrig |
| 0x0250 | P0250 | P0250 Turbolader/Verdichter Ladedruckventil 2 - Input hoch |
| 0x0251 | P0251 | P0251 Einspritzpumpe 1 Kraftstoffdosierung (Nocke/Rotor/Injektor) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0252 | P0252 | P0252 Einspritzpumpe 1 Kraftstoffdosierung (Nocke/Rotor/Injektor) - Meßbereichs- oder Leistungsproblem |
| 0x0253 | P0253 | P0253 Einspritzpumpe 1 Kraftstoffdosierung (Nocke/Rotor/Injektor) - Input niedrig |
| 0x0254 | P0254 | P0254 Einspritzpumpe 1 Kraftstoffdosierung (Nocke/Rotor/Injektor) - Input hoch |
| 0x0255 | P0255 | P0255 Einspritzpumpe 1 Kraftstoffdosierung (Nocke/Rotor/Injektor) - Input sporadisch |
| 0x0256 | P0256 | P0256 Einspritzpumpe 2 Kraftstoffdosierung (Nocke/Rotor/Injektor) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0257 | P0257 | P0257 Einspritzpumpe 2 Kraftstoffdosierung (Nocke/Rotor/Injektor) - Meßbereichs- oder Leistungsproblem |
| 0x0258 | P0258 | P0258 Einspritzpumpe 2 Kraftstoffdosierung (Nocke/Rotor/Injektor) - Input niedrig |
| 0x0259 | P0259 | P0259 Einspritzpumpe 2 Kraftstoffdosierung (Nocke/Rotor/Injektor) - Input hoch |
| 0x0260 | P0260 | P0260 Einspritzpumpe 2 Kraftstoffdosierung (Nocke/Rotor/Injektor) - Input sporadisch |
| 0x0261 | P0261 | P0261 Einspritzventil Zylinder 1 - Input niedrig |
| 0x0262 | P0262 | P0262 Einspritzventil Zylinder 1 - Input hoch |
| 0x0263 | P0263 | P0263 Einspritzventil Zylinder 1 - Gleichverteilungsfehler |
| 0x0264 | P0264 | P0264 Einspritzventil Zylinder 2 - Input niedrig |
| 0x0265 | P0265 | P0265 Einspritzventil Zylinder 2 - Input hoch |
| 0x0266 | P0266 | P0266 Einspritzventil Zylinder 2 - Gleichverteilungsfehler |
| 0x0267 | P0267 | P0267 Einspritzventil Zylinder 3 - Input niedrig |
| 0x0268 | P0268 | P0268 Einspritzventil Zylinder 3 - Input hoch |
| 0x0269 | P0269 | P0269 Einspritzventil Zylinder 3 - Gleichverteilungsfehler |
| 0x0270 | P0270 | P0270 Einspritzventil Zylinder 4 - Input niedrig |
| 0x0271 | P0271 | P0271 Einspritzventil Zylinder 4 - Input hoch |
| 0x0272 | P0272 | P0272 Einspritzventil Zylinder 4 - Gleichverteilungsfehler |
| 0x0273 | P0273 | P0273 Einspritzventil Zylinder 5 - Input niedrig |
| 0x0274 | P0274 | P0274 Einspritzventil Zylinder 5 - Input hoch |
| 0x0275 | P0275 | P0275 Einspritzventil Zylinder 5 - Gleichverteilungsfehler |
| 0x0276 | P0276 | P0276 Einspritzventil Zylinder 6 - Input niedrig |
| 0x0277 | P0277 | P0277 Einspritzventil Zylinder 6 - Input hoch |
| 0x0278 | P0278 | P0278 Einspritzventil Zylinder 6 - Gleichverteilungsfehler |
| 0x0279 | P0279 | P0279 Einspritzventil Zylinder 7 - Input niedrig |
| 0x0280 | P0280 | P0280 Einspritzventil Zylinder 7 - Input hoch |
| 0x0281 | P0281 | P0281 Einspritzventil Zylinder 7 - Gleichverteilungsfehler |
| 0x0282 | P0282 | P0282 Einspritzventil Zylinder 8 - Input niedrig |
| 0x0283 | P0283 | P0283 Einspritzventil Zylinder 8 - Input hoch |
| 0x0284 | P0284 | P0284 Einspritzventil Zylinder 8 - Gleichverteilungsfehler |
| 0x0285 | P0285 | P0285 Einspritzventil Zylinder 9 - Input niedrig |
| 0x0286 | P0286 | P0286 Einspritzventil Zylinder 9 - Input hoch |
| 0x0287 | P0287 | P0287 Einspritzventil Zylinder 9 - Gleichverteilungsfehler |
| 0x0288 | P0288 | P0288 Einspritzventil Zylinder 10 - Input niedrig |
| 0x0289 | P0289 | P0289 Einspritzventil Zylinder 10 - Input hoch |
| 0x0290 | P0290 | P0290 Einspritzventil Zylinder 10 - Gleichverteilungsfehler |
| 0x0291 | P0291 | P0291 Einspritzventil Zylinder 11 - Input niedrig |
| 0x0292 | P0292 | P0292 Einspritzventil Zylinder 11 - Input hoch |
| 0x0293 | P0293 | P0293 Einspritzventil Zylinder 11 - Gleichverteilungsfehler |
| 0x0294 | P0294 | P0294 Einspritzventil Zylinder 12 - Input niedrig |
| 0x0295 | P0295 | P0295 Einspritzventil Zylinder 12 - Input hoch |
| 0x0296 | P0296 | P0296 Einspritzventil Zylinder 12 - Gleichverteilungsfehler |
| 0x0297 | P0297 | P0297 Fahrzeuggeschwindigkeit - zu hoch |
| 0x0298 | P0298 | P0298 Motoröltemperatur - zu hoch |
| 0x0299 | P0299 | P0299 Turbolader/Verdichter - Ladedruck zu niedrig |
| 0x0300 | P0300 | P0300 Verbrennungsaussetzer erkannt - mehrere Zylinder |
| 0x0301 | P0301 | P0301 Verbrennungsaussetzer erkannt - Zylinder 1 |
| 0x0302 | P0302 | P0302 Verbrennungsaussetzer erkannt - Zylinder 2 |
| 0x0303 | P0303 | P0303 Verbrennungsaussetzer erkannt - Zylinder 3 |
| 0x0304 | P0304 | P0304 Verbrennungsaussetzer erkannt - Zylinder 4 |
| 0x0305 | P0305 | P0305 Verbrennungsaussetzer erkannt - Zylinder 5 |
| 0x0306 | P0306 | P0306 Verbrennungsaussetzer erkannt - Zylinder 6 |
| 0x0307 | P0307 | P0307 Verbrennungsaussetzer erkannt - Zylinder 7 |
| 0x0308 | P0308 | P0308 Verbrennungsaussetzer erkannt - Zylinder 8 |
| 0x0309 | P0309 | P0309 Verbrennungsaussetzer erkannt - Zylinder 9 |
| 0x0310 | P0310 | P0310 Verbrennungsaussetzer erkannt - Zylinder 10 |
| 0x0311 | P0311 | P0311 Verbrennungsaussetzer erkannt - Zylinder 11 |
| 0x0312 | P0312 | P0312 Verbrennungsaussetzer erkannt - Zylinder 12 |
| 0x0313 | P0313 | P0313 Verbrennungsaussetzer erkannt bei niedrigem Kraftstoffstand |
| 0x0314 | P0314 | P0314 Verbrennungsaussetzer, Einzelzylinder (Zylinder nicht angegeben) |
| 0x0315 | P0315 | P0315 Kurbelwellenstellung - Variation nicht gelernt |
| 0x0316 | P0316 | P0316 Verbrennungsaussetzer erkannt im Start (erste 1000 Umdrehungen) |
| 0x0317 | P0317 | P0317 Schlechtwegstreckenerkennung - Hardware nicht vorhanden |
| 0x0318 | P0318 | P0318 Schlechtwegstreckensensor A Signalstromkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0319 | P0319 | P0319 Schlechtwegstreckensensor B Signalstromkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0320 | P0320 | P0320 Zündverteiler, Eingangssignal Motordrehzahl - Fehlfunktion |
| 0x0321 | P0321 | P0321 Zündverteiler, Eingangssignal Motordrehzahl - Meßbereichs- oder Leistungsproblem |
| 0x0322 | P0322 | P0322 Zündverteiler, Eingangssignal Motordrehzahl - kein Signal |
| 0x0323 | P0323 | P0323 Zündverteiler, Eingangssignal Motordrehzahl -  Input sporadisch |
| 0x0324 | P0324 | P0324 Klopfregelsystem - Fehler |
| 0x0325 | P0325 | P0325 Klopfsensor 1 (Bank 1 oder Einzelsensor) - Fehlfunktion |
| 0x0326 | P0326 | P0326 Klopfsensor 1 (Bank 1 oder Einzelsensor) - Meßbereichs- oder Leistungsproblem |
| 0x0327 | P0327 | P0327 Klopfsensor 1 (Bank 1 oder Einzelsensor) - Input niedrig |
| 0x0328 | P0328 | P0328 Klopfsensor 1 (Bank 1 oder Einzelsensor) - Input hoch |
| 0x0329 | P0329 | P0329 Klopfsensor 1 (Bank 1 oder Einzelsensor) - Input sporadisch |
| 0x0330 | P0330 | P0330 Klopfsensor 2 (Bank 2) - Fehlfunktion |
| 0x0331 | P0331 | P0331 Klopfsensor 2 (Bank 2) - Meßbereichs- oder Leistungsproblem |
| 0x0332 | P0332 | P0332 Klopfsensor 2 (Bank 2) - Input niedrig |
| 0x0333 | P0333 | P0333 Klopfsensor 2 (Bank 2) - Input hoch |
| 0x0334 | P0334 | P0334 Klopfsensor 2 (Bank 2) - Input sporadisch |
| 0x0335 | P0335 | P0335 Kurbelwellengeber 1 - Fehlfunktion |
| 0x0336 | P0336 | P0336 Kurbelwellengeber 1 - Meßbereichs- oder Leistungsproblem |
| 0x0337 | P0337 | P0337 Kurbelwellengeber 1 - Input niedrig |
| 0x0338 | P0338 | P0338 Kurbelwellengeber 1 - Input hoch |
| 0x0339 | P0339 | P0339 Kurbelwellengeber 1 - Input sporadisch |
| 0x0340 | P0340 | P0340 Nockenwellengeber Einlass (Bank 1 oder Einzelsensor) - Fehlfunktion |
| 0x0341 | P0341 | P0341 Nockenwellengeber Einlass (Bank 1 oder Einzelsensor) - Meßbereichs- oder Leistungsproblem |
| 0x0342 | P0342 | P0342 Nockenwellengeber Einlass (Bank 1 oder Einzelsensor) - Input niedrig |
| 0x0343 | P0343 | P0343 Nockenwellengeber Einlass (Bank 1 oder Einzelsensor) - Input hoch |
| 0x0344 | P0344 | P0344 Nockenwellengeber Einlass (Bank 1 oder Einzelsensor) - Input sporadisch |
| 0x0345 | P0345 | P0345 Nockenwellengeber Einlass (Bank 2) - Fehlfunktion |
| 0x0346 | P0346 | P0346 Nockenwellengeber Einlass (Bank 2) - Meßbereichs- oder Leistungsproblem |
| 0x0347 | P0347 | P0347 Nockenwellengeber Einlass (Bank 2) - Input niedrig |
| 0x0348 | P0348 | P0348 Nockenwellengeber Einlass (Bank 2) - Input hoch |
| 0x0349 | P0349 | P0349 Nockenwellengeber Einlass (Bank 2) - Input sporadisch |
| 0x0350 | P0350 | P0350 Zündspule, Primär-/Sekundäkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0351 | P0351 | P0351 Zündspule 1, Primär-/Sekundärkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0352 | P0352 | P0352 Zündspule 2, Primär-/Sekundärkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0353 | P0353 | P0353 Zündspule 3, Primär-/Sekundärkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0354 | P0354 | P0354 Zündspule 4, Primär-/Sekundärkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0355 | P0355 | P0355 Zündspule 5, Primär-/Sekundärkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0356 | P0356 | P0356 Zündspule 6, Primär-/Sekundärkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0357 | P0357 | P0357 Zündspule 7, Primär-/Sekundärkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0358 | P0358 | P0358 Zündspule 8, Primär-/Sekundärkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0359 | P0359 | P0359 Zündspule 9, Primär-/Sekundärkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0360 | P0360 | P0360 Zündspule 10, Primär-/Sekundärkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0361 | P0361 | P0361 Zündspule 11, Primär-/Sekundärkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0362 | P0362 | P0362 Zündspule 12, Primär-/Sekundärkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0363 | P0363 | P0363 Verbrennungsaussetzer erkannt mit Kraftstoffabschaltung |
| 0x0365 | P0365 | P0365 Nockenwellengeber Auslass (Bank 1) - Fehlfunktion |
| 0x0366 | P0366 | P0366 Nockenwellengeber Auslass (Bank 1) - Meßbereichs- oder Leistungsproblem |
| 0x0367 | P0367 | P0367 Nockenwellengeber Auslass (Bank 1) - Input niedrig |
| 0x0368 | P0368 | P0368 Nockenwellengeber Auslass (Bank 1) - Input hoch |
| 0x0369 | P0369 | P0369 Nockenwellengeber Auslass (Bank 1) - Input sporadisch |
| 0x0370 | P0370 | P0370 Kurbelwellengebersignal Erkennung Bezugsmarke 'A' - Fehlfunktion |
| 0x0371 | P0371 | P0371 Kurbelwellengebersignal Erkennung Bezugsmarke 'A' - zu viele Impulse |
| 0x0372 | P0372 | P0372 Kurbelwellengebersignal Erkennung Bezugsmarke 'A' - zu wenige Impulse |
| 0x0373 | P0373 | P0373 Kurbelwellengebersignal Erkennung Bezugsmarke 'A' - Impulse sporadisch/unregelmäßig |
| 0x0374 | P0374 | P0374 Kurbelwellengebersignal Erkennung Bezugsmarke 'A' - keine Impulse |
| 0x0375 | P0375 | P0375 Kurbelwellengebersignal Erkennung Bezugsmarke 'B' - Fehlfunktion |
| 0x0376 | P0376 | P0376 Kurbelwellengebersignal Erkennung Bezugsmarke 'B' - zu viele Impulse |
| 0x0377 | P0377 | P0377 Kurbelwellengebersignal Erkennung Bezugsmarke 'B' - zu wenige Impulse |
| 0x0378 | P0378 | P0378 Kurbelwellengebersignal Erkennung Bezugsmarke 'B' - Impulse sporadisch/unregelmäßig |
| 0x0379 | P0379 | P0379 Kurbelwellengebersignal Erkennung Bezugsmarke 'B' - keine Impulse |
| 0x0380 | P0380 | P0380 Glühkerzen-Heizung A - Fehlfunktion oder Leitungsunterbrechung |
| 0x0381 | P0381 | P0381 Glühkerzen-Heizung, Anzeige - Fehlfunktion oder Leitungsunterbrechung |
| 0x0382 | P0382 | P0382 Glühkerzen-Heizung B - Fehlfunktion oder Leitungsunterbrechung |
| 0x0383 | P0383 | P0383 Glühkerzen-Steuergerät - Input niedrig |
| 0x0384 | P0384 | P0384 Glühkerzen-Steuergerät - Input hoch |
| 0x0385 | P0385 | P0385 Kurbelwellengeber 2 - Fehlfunktion |
| 0x0386 | P0386 | P0386 Kurbelwellengeber 2 - Meßbereichs- oder Leistungsproblem |
| 0x0387 | P0387 | P0387 Kurbelwellengeber 2 - Input niedrig |
| 0x0388 | P0388 | P0388 Kurbelwellengeber 2 - Input hoch |
| 0x0389 | P0389 | P0389 Kurbelwellengeber 2 - Input sporadisch |
| 0x0390 | P0390 | P0390 Nockenwellengeber Auslass (Bank 2) - Fehlfunktion |
| 0x0391 | P0391 | P0391 Nockenwellengeber Auslass (Bank 2) - Meßbereichs- oder Leistungsproblem |
| 0x0392 | P0392 | P0392 Nockenwellengeber Auslass (Bank 2) - Input niedrig |
| 0x0393 | P0393 | P0393 Nockenwellengeber Auslass (Bank 2) - Input hoch |
| 0x0394 | P0394 | P0394 Nockenwellengeber Auslass (Bank 2) - Input sporadisch |
| 0x0400 | P0400 | P0400 Abgasrückführung - Durchsatzfehler |
| 0x0401 | P0401 | P0401 Abgasrückführung - Durchsatz zu gering |
| 0x0402 | P0402 | P0402 Abgasrückführung - Durchsatz zu groß |
| 0x0403 | P0403 | P0403 Abgasrückführung Schaltkreis - Durchsatzfehler |
| 0x0404 | P0404 | P0404 Abgasrückführung Schaltkreis - Meßbereichs- oder Leistungsproblem |
| 0x0405 | P0405 | P0405 Abgasrückführungssensor 1 - Input niedrig |
| 0x0406 | P0406 | P0406 Abgasrückführungssensor 1 - Input hoch |
| 0x0407 | P0407 | P0407 Abgasrückführungssensor 2 - Input niedrig |
| 0x0408 | P0408 | P0408 Abgasrückführungssensor 2 - Input hoch |
| 0x0409 | P0409 | P0409 Abgasrückführungssensor 1 - Fehlfunktion |
| 0x0410 | P0410 | P0410 Sekundärluftsystem - Fehlfunktion |
| 0x0411 | P0411 | P0411 Sekundärluftsystem - Durchsatzfehler erkannt |
| 0x0412 | P0412 | P0412 Sekundärluftventil 1 - Fehlfunktion |
| 0x0413 | P0413 | P0413 Sekundärluftventil 1 - Leitungsunterbrechung |
| 0x0414 | P0414 | P0414 Sekundärluftventil 1 - Schaltkreis kurzgeschlossen |
| 0x0415 | P0415 | P0415 Sekundärluftventil 2 - Fehlfunktion |
| 0x0416 | P0416 | P0416 Sekundärluftventil 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0417 | P0417 | P0417 Sekundärluftventil 2 - Schaltkreis kurzgeschlossen |
| 0x0418 | P0418 | P0418 Sekundärluftsystem 'A' - Fehlfunktion |
| 0x0419 | P0419 | P0419 Sekundärluftsystem 'B' - Fehlfunktion |
| 0x0420 | P0420 | P0420 Katalysator (Bank 1) - Wirkungsgrad unter Schwellwert |
| 0x0421 | P0421 | P0421 Katalysator (Bank 1) - Wirkungsgrad bei Aufheizzeit unter Schwellwert |
| 0x0422 | P0422 | P0422 Hauptkatalysator (Bank 1) - Wirkungsgrad unter Schwellwert |
| 0x0423 | P0423 | P0423 E-Katalysator (Bank 1) - Wirkungsgrad unter Schwellwert |
| 0x0424 | P0424 | P0424 E-Katalysator (Bank 1) - Temperatur unter Schwellwert |
| 0x0425 | P0425 | P0425 Katalysatortemperaturfühler (Bank 1, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0426 | P0426 | P0426 Katalysatortemperaturfühler (Bank 1, vor Katalysator) - Meßbereichs- oder Leistungsproblem |
| 0x0427 | P0427 | P0427 Katalysatortemperaturfühler (Bank 1, vor Katalysator) - Input niedrig |
| 0x0428 | P0428 | P0428 Katalysatortemperaturfühler (Bank 1, vor Katalysator) - Input hoch |
| 0x0429 | P0429 | P0429 Katalysator Heizungsschaltkreis (Bank 1) - Fehlfunktion |
| 0x042A | P042A | P042A Katalysatortemperaturfühler (Bank 1, nach Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x042B | P042B | P042B Katalysatortemperaturfühler (Bank 1, nach Katalysator) - Meßbereichs- oder Leistungsproblem |
| 0x042C | P042C | P042C Katalysatortemperaturfühler (Bank 1, nach Katalysator) - Input niedrig |
| 0x042D | P042D | P042D Katalysatortemperaturfühler (Bank 1, nach Katalysator) - Input hoch |
| 0x0430 | P0430 | P0430 Katalysator (Bank 2) - Wirkungsgrad unter Schwellwert |
| 0x0431 | P0431 | P0431 Katalysator (Bank 2) - Wirkungsgrad bei Aufheizzeit unter Schwellwert |
| 0x0432 | P0432 | P0432 Hauptkatalysator (Bank 2) - Wirkungsgrad unter Schwellwert |
| 0x0433 | P0433 | P0433 E-Katalysator (Bank 2) - Wirkungsgrad unter Schwellwert |
| 0x0434 | P0434 | P0434 E-Katalysator (Bank 2) - Temperatur unter Schwellwert |
| 0x0435 | P0435 | P0435 Katalysatortemperaturfühler (Bank 2, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0436 | P0436 | P0436 Katalysatortemperaturfühler (Bank 2, vor Katalysaator) - Meßbereichs- oder Leistungsproblem |
| 0x0437 | P0437 | P0437 Katalysatortemperaturfühler (Bank 2, vor Katalysator) - Input niedrig |
| 0x0438 | P0438 | P0438 Katalysatortemperaturfühler (Bank 2, vor Katalysator) - Input hoch |
| 0x0439 | P0439 | P0439 Katalysator Heizungsschaltkreis (Bank 2) - Fehlfunktion |
| 0x043A | P043A | P043A Katalysatortemperaturfühler (Bank 2, nach Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x043B | P043B | P043B Katalysatortemperaturfühler (Bank 2, nach Katalysator) - Meßbereichs- oder Leistungsproblem |
| 0x043C | P043C | P043C Katalysatortemperaturfühler (Bank 2, nach Katalysator) - Input niedrig |
| 0x043D | P043D | P043D Katalysatortemperaturfühler (Bank 2, nach Katalysator) - Input hoch |
| 0x043E | P043E | P043E Tankentlüftungssystem Leckdiagnose Referenzbohrung - Durchfluss niedrig |
| 0x043F | P043F | P043F Tankentlüftungssystem Leckdiagnose Referenzbohrung - Durchfluss hoch |
| 0x0440 | P0440 | P0440 Tankentlüftungssystem - Fehlfunktion |
| 0x0441 | P0441 | P0441 Tankentlüftungssystem - fehlerhafter Durchfluss |
| 0x0442 | P0442 | P0442 Tankentlüftungssystem - kleines Leck entdeckt |
| 0x0443 | P0443 | P0443 Tankentlüftungssystem Spülventil/Tankentlüftungsventil - Fehlfunktion |
| 0x0444 | P0444 | P0444 Tankentlüftungssystem Spülventil/Tankentlüftungsventil - Leitungsunterbrechung |
| 0x0445 | P0445 | P0445 Tankentlüftungssystem Spülventil/Tankentlüftungsventil - Kurzschluss |
| 0x0446 | P0446 | P0446 Tankentlüftungssystem Entlüftungskreislauf - Fehlfunktion |
| 0x0447 | P0447 | P0447 Tankentlüftungssystem Entlüftungskreislauf - Leitungsunterbrechung |
| 0x0448 | P0448 | P0448 Tankentlüftungssystem Entlüftungskreislauf - Kurzschluss |
| 0x0449 | P0449 | P0449 Tankentlüftungssystem Entlüftungsventil - Fehlfunktion oder Leitungsunterbrechung |
| 0x0450 | P0450 | P0450 Tankentlüftungssystem Drucksensor/-schalter - Fehlfunktion |
| 0x0451 | P0451 | P0451 Tankentlüftungssystem Drucksensor/-schalter - Meßbereichs- oder Leistungsproblem |
| 0x0452 | P0452 | P0452 Tankentlüftungssystem Drucksensor/-schalter - Input niedrig |
| 0x0453 | P0453 | P0453 Tankentlüftungssystem Drucksensor/-schalter - Input hoch |
| 0x0454 | P0454 | P0454 Tankentlüftungssystem Drucksensor/-schalter - Input sporadisch |
| 0x0455 | P0455 | P0455 Tankentlüftungssystem - großes Leck entdeckt |
| 0x0456 | P0456 | P0456 Tankentlüftungssystem - sehr kleines Leck entdeckt |
| 0x0457 | P0457 | P0457 Tankentlüftungssystem - Leck entdeckt (Tankdeckel lose/weg) |
| 0x0458 | P0458 | P0458 Tankentlüftungssystem Spülventil/Tankentlüftungsventil - Input niedrig |
| 0x0459 | P0459 | P0459 Tankentlüftungssystem Spülventil/Tankentlüftungsventil - Input hoch |
| 0x0460 | P0460 | P0460 Kraftstoff-Füllstandssensor 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0461 | P0461 | P0461 Kraftstoff-Füllstandssensor 1 - Meßbereichs- oder Leistungsproblem |
| 0x0462 | P0462 | P0462 Kraftstoff-Füllstandssensor 1 - Input niedrig |
| 0x0463 | P0463 | P0463 Kraftstoff-Füllstandssensor 1 - Input hoch |
| 0x0464 | P0464 | P0464 Kraftstoff-Füllstandssensor 1 - Input sporadisch |
| 0x0465 | P0465 | P0465 Tankentlüftungssystem Spülluftdurchflusssensor - Fehlfunktion oder Leitungsunterbrechung |
| 0x0466 | P0466 | P0466 Tankentlüftungssystem Spülluftdurchflusssensor - Meßbereichs- oder Leistungsproblem |
| 0x0467 | P0467 | P0467 Tankentlüftungssystem Spülluftdurchflusssensor - Input niedrig |
| 0x0468 | P0468 | P0468 Tankentlüftungssystem Spülluftdurchflusssensor - Input hoch |
| 0x0469 | P0469 | P0469 Tankentlüftungssystem Spülluftdurchflusssensor - Input sporadisch |
| 0x0470 | P0470 | P0470 Abgasdrucksensor 1 - Fehlfunktion |
| 0x0471 | P0471 | P0471 Abgasdrucksensor 1 - Meßbereichs- oder Leistungsproblem |
| 0x0472 | P0472 | P0472 Abgasdrucksensor 1 - Input niedrig |
| 0x0473 | P0473 | P0473 Abgasdrucksensor 1 - Input hoch |
| 0x0474 | P0474 | P0474 Abgasdrucksensor 1 - Input sporadisch/unregelmäßig |
| 0x0475 | P0475 | P0475 Abgasklappe - Fehlfunktion oder Leitungsunterbrechung |
| 0x0476 | P0476 | P0476 Abgasklappe - Meßbereichs- oder Leistungsproblem |
| 0x0477 | P0477 | P0477 Abgasklappe - Input niedrig |
| 0x0478 | P0478 | P0478 Abgasklappe - Input hoch |
| 0x0479 | P0479 | P0479 Abgasklappe - Input sporadisch |
| 0x0480 | P0480 | P0480 Motorlüfter 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0481 | P0481 | P0481 Motorlüfter 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0482 | P0482 | P0482 Motorlüfter 3 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0483 | P0483 | P0483 Motorlüfter - Plausibilitätsfehler |
| 0x0484 | P0484 | P0484 Motorlüfter - Überstrom |
| 0x0485 | P0485 | P0485 Motorlüfter Haupstrom-/Masseschaltkreis - Fehlfunktion |
| 0x0486 | P0486 | P0486 Abgasrückführungssensor 2 - Fehlfunktion |
| 0x0487 | P0487 | P0487 Abgasrückführung Drosselklappenstellung - Fehlfunktion |
| 0x0488 | P0488 | P0488 Abgasrückführung Drosselklappenstellung - Meßbereichs- oder Leistungsproblem |
| 0x0489 | P0489 | P0489 Abgasrückführung Schaltkreis - Input niedrig |
| 0x0490 | P0490 | P0490 Abgasrückführung Schaltkreis - Input hoch |
| 0x0491 | P0491 | P0491 Sekundärluftsystem (Bank 1) - Durchsatz zu gering |
| 0x0492 | P0492 | P0492 Sekundärluftsystem (Bank 2) - Durchsatz zu gering |
| 0x0493 | P0493 | P0493 Motorlüfter - Überdrehzahl |
| 0x0494 | P0494 | P0494 Motorlüfter - Drehzahl niedrig |
| 0x0495 | P0495 | P0495 Motorlüfter - Drehzahl hoch |
| 0x0496 | P0496 | P0496 Tankentlüftungssystem - Durchfluss hoch |
| 0x0497 | P0497 | P0497 Tankentlüftungssystem - Durchfluss niedrig |
| 0x0498 | P0498 | P0498 Tankentlüftungssystem Entlüftungsventil - Input niedrig |
| 0x0499 | P0499 | P0499 Tankentlüftungssystem Entlüftungsventil - Input hoch |
| 0x0500 | P0500 | P0500 Fahrzeuggeschwindigkeitssensor 1 - Fehlfunktion |
| 0x0501 | P0501 | P0501 Fahrzeuggeschwindigkeitssensor 1 - Meßbereichs- oder Leistungsproblem |
| 0x0502 | P0502 | P0502 Fahrzeuggeschwindigkeitssensor 1 - Input niedrig |
| 0x0503 | P0503 | P0503 Fahrzeuggeschwindigkeitssensor 1 - sporadisch/unregelmäßig/zu hoch |
| 0x0504 | P0504 | P0504 Bremsschalter/Bremstestschalter - Korrelationsfehler |
| 0x0505 | P0505 | P0505 Leerlaufregelsystem - Fehlfunktion |
| 0x0506 | P0506 | P0506 Leerlaufregelsystem - Drehzahl niedriger als erwartet |
| 0x0507 | P0507 | P0507 Leerlaufregelsystem - Drehzahl höher als erwartet |
| 0x0508 | P0508 | P0508 Leerlaufregelsystem - Input niedrig |
| 0x0509 | P0509 | P0509 Leerlaufregelsystem - Input hoch |
| 0x0510 | P0510 | P0510 Geschlossene Drosselklappe, Schalter - Fehlfunktion |
| 0x0511 | P0511 | P0511 Leerlaufluft - Fehlfunktion |
| 0x0512 | P0512 | P0512 Startautomatik - Fehlfunktion |
| 0x0513 | P0513 | P0513 EWS (elektronische Wegfahrsperre) - falsche Schlüsseldaten |
| 0x0514 | P0514 | P0514 Batterietemperaturfühler - Meßbereichs- oder Leistungsproblem |
| 0x0515 | P0515 | P0515 Batterietemperaturfühler - Fehlfunktion |
| 0x0516 | P0516 | P0516 Batterietemperaturfühler - Input niedrig |
| 0x0517 | P0517 | P0517 Batterietemperaturfühler - Input hoch |
| 0x0518 | P0518 | P0518 Leerlaufluft - Input sporadisch |
| 0x0519 | P0519 | P0519 Leerlaufluft - Leistungsproblem |
| 0x0520 | P0520 | P0520 Motoröldruck Sensor/Schalter - Fehlfunktion |
| 0x0521 | P0521 | P0521 Motoröldruck Sensor/Schalter - Meßbereichs- oder Leistungsproblem |
| 0x0522 | P0522 | P0522 Motoröldruck Sensor/Schalter - Input niedrig |
| 0x0523 | P0523 | P0523 Motoröldruck Sensor/Schalter - Input hoch |
| 0x0524 | P0524 | P0524 Motoröldruck - zu niedrig |
| 0x0525 | P0525 | P0525 Fahrgeschwindigkeitsregelung Servo - Meßbereichs- oder Leistungsproblem |
| 0x0526 | P0526 | P0526 Motorlüfter Drehzahlsensor - Fehlfunktion oder Leitungsunterbrechung |
| 0x0527 | P0527 | P0527 Motorlüfter Drehzahlsensor - Meßbereichs- oder Leistungsproblem |
| 0x0528 | P0528 | P0528 Motorlüfter Drehzahlsensor - kein Signal |
| 0x0529 | P0529 | P0529 Motorlüfter Drehzahlsensor - Input sporadisch |
| 0x0530 | P0530 | P0530 Klimaanlage Kältemitteldrucksensor 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0531 | P0531 | P0531 Klimaanlage Kältemitteldrucksensor 1 - Meßbereichs- oder Leistungsproblem |
| 0x0532 | P0532 | P0532 Klimaanlage Kältemitteldrucksensor 1 - Input niedrig |
| 0x0533 | P0533 | P0533 Klimaanlage Kältemitteldrucksensor 1 - Input hoch |
| 0x0534 | P0534 | P0534 Klimaanlage Kältemittel - Füllungsverlust |
| 0x0535 | P0535 | P0535 Klimaanlage Verdampfer Temperaturfühler - Fehlfunktion oder Leitungsunterbrechung |
| 0x0536 | P0536 | P0536 Klimaanlage Verdampfer Temperaturfühler - Meßbereichs- oder Leistungsproblem |
| 0x0537 | P0537 | P0537 Klimaanlage Verdampfer Temperaturfühler - Input niedrig |
| 0x0538 | P0538 | P0538 Klimaanlage Verdampfer Temperaturfühler - Input hoch |
| 0x0539 | P0539 | P0539 Klimaanlage Verdampfer Temperaturfühler - Input sporadisch |
| 0x0540 | P0540 | P0540 Ansaugluftvorwärmer 1 - Fehlfunktion |
| 0x0541 | P0541 | P0541 Ansaugluftvorwärmer 1 - Input niedrig |
| 0x0542 | P0542 | P0542 Ansaugluftvorwärmer 1 - Input hoch |
| 0x0543 | P0543 | P0543 Ansaugluftvorwärmer 1 - Leitungsunterbrechung |
| 0x0544 | P0544 | P0544 Abgastemperaturfühler (Bank 1, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0545 | P0545 | P0545 Abgastemperaturfühler (Bank 1, vor Katalysator) - Input niedrig |
| 0x0546 | P0546 | P0546 Abgastemperaturfühler (Bank 1, vor Katalysator) - Input hoch |
| 0x0547 | P0547 | P0547 Abgastemperaturfühler (Bank 2, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0548 | P0548 | P0548 Abgastemperaturfühler (Bank 2, vor Katalysator) - Input niedrig |
| 0x0549 | P0549 | P0549 Abgastemperaturfühler (Bank 2, vor Katalysator) - Input hoch |
| 0x0550 | P0550 | P0550 Servolenkung, Drucksensor/-schalter - Fehlfunktion |
| 0x0551 | P0551 | P0551 Servolenkung, Drucksensor/-schalter - Meßbereichs- oder Leistungsproblem |
| 0x0552 | P0552 | P0552 Servolenkung, Drucksensor/-schalter - Input niedrig |
| 0x0553 | P0553 | P0553 Servolenkung, Drucksensor/-schalter - Input hoch |
| 0x0554 | P0554 | P0554 Servolenkung, Drucksensor/-schalter - Input sporadisch |
| 0x0555 | P0555 | P0555 Bremskraftverstärker Drucksensor - Fehlfunktion |
| 0x0556 | P0556 | P0556 Bremskraftverstärker Drucksensor - Meßbereichs- oder Leistungsproblem |
| 0x0557 | P0557 | P0557 Bremskraftverstärker Drucksensor - Input niedrig |
| 0x0558 | P0558 | P0558 Bremskraftverstärker Drucksensor - Input hoch |
| 0x0559 | P0559 | P0559 Bremskraftverstärker Drucksensor - Input sporadisch |
| 0x0560 | P0560 | P0560 Versorgungsspannung - Fehlfunktion |
| 0x0561 | P0561 | P0561 Versorgungsspannung - Instabil |
| 0x0562 | P0562 | P0562 Versorgungsspannung - niedrig |
| 0x0563 | P0563 | P0563 Versorgungsspannung - hoch |
| 0x0564 | P0564 | P0564 Fahrgeschwindigkeitsregelung, Multifunktion Eingangssignal 'A' - Fehlfunktion oder Leitungsunterbrechung |
| 0x0565 | P0565 | P0565 Fahrgeschwindigkeitsregelung, Signal 'an' - Fehlfunktion |
| 0x0566 | P0566 | P0566 Fahrgeschwindigkeitsregelung, Signal 'aus' - Fehlfunktion |
| 0x0567 | P0567 | P0567 Fahrgeschwindigkeitsregelung, Signal 'wiederaufnehmen' - Fehlfunktion |
| 0x0568 | P0568 | P0568 Fahrgeschwindigkeitsregelung, Signal 'einstellen' - Fehlfunktion |
| 0x0569 | P0569 | P0569 Fahrgeschwindigkeitsregelung, Signal 'ausrollen' - Fehlfunktion |
| 0x0570 | P0570 | P0570 Fahrgeschwindigkeitsregelung, Signal 'beschleunigen' - Fehlfunktion |
| 0x0571 | P0571 | P0571 Bremsschalter 1 - Fehlfunktion |
| 0x0572 | P0572 | P0572 Bremsschalter 1 - Input niedrig |
| 0x0573 | P0573 | P0573 Bremsschalter 1 - Input hoch |
| 0x0574 | P0574 | P0574 Fahrgeschwindigkeitsregelung - Fahrzeuggeschwindigkeit zu hoch |
| 0x0575 | P0575 | P0575 Fahrgeschwindigkeitsregelung Eingangssignal - Fehlfunktion |
| 0x0576 | P0576 | P0576 Fahrgeschwindigkeitsregelung Eingangssignal - Input niedrig |
| 0x0577 | P0577 | P0577 Fahrgeschwindigkeitsregelung Eingangssignal - Input hoch |
| 0x0578 | P0578 | P0578 Fahrgeschwindigkeitsregelung, Multifunktion Eingangssignal 'A' - Signal festliegend |
| 0x0579 | P0579 | P0579 Fahrgeschwindigkeitsregelung, Multifunktion Eingangssignal 'A' - Meßbereichs- oder Leistungsprobelm |
| 0x0580 | P0580 | P0580 Fahrgeschwindigkeitsregelung, Multifunktion Eingangssignal 'A' - Input niedrig |
| 0x0581 | P0581 | P0581 Fahrgeschwindigkeitsregelung, Multifunktion Eingangssignal 'A' - Input hoch |
| 0x0582 | P0582 | P0582 Fahrgeschwindigkeitsregelung Unterdruckkreislauf - Fehlfunktion oder Leitungunterbrechung |
| 0x0583 | P0583 | P0583 Fahrgeschwindigkeitsregelung Unterdruckkreislauf - Input niedrig |
| 0x0584 | P0584 | P0584 Fahrgeschwindigkeitsregelung Unterdruckkreislauf - Input hoch |
| 0x0585 | P0585 | P0585 Fahrgeschwindigkeitsregelung, Multifunktion Eingangssignal 'A'/'B' - Korrelationsfehler |
| 0x0586 | P0586 | P0586 Fahrgeschwindigkeitsregelung Entlüftungskreislauf - Fehlfunktion oder Leitungsunterbrechung |
| 0x0587 | P0587 | P0587 Fahrgeschwindigkeitsregelung Entlüftungskreislauf - Input niedrig |
| 0x0588 | P0588 | P0588 Fahrgeschwindigkeitsregelung Entlüftungskreislauf - Input hoch |
| 0x0589 | P0589 | P0589 Fahrgeschwindigkeitsregelung, Multifunktion Eingangssignal 'B' - Fehlfunktion oder Leitungsunterbrechung |
| 0x0590 | P0590 | P0590 Fahrgeschwindigkeitsregelung, Multifunktion Eingangssignal 'B' - Signal festliegend |
| 0x0591 | P0591 | P0591 Fahrgeschwindigkeitsregelung, Multifunktion Eingangssignal 'B' - Meßbereichs- oder Leistungsproblem |
| 0x0592 | P0592 | P0592 Fahrgeschwindigkeitsregelung, Multifunktion Eingangssignal 'B' - Input niedrig |
| 0x0593 | P0593 | P0593 Fahrgeschwindigkeitsregelung, Multifunktion Eingangssignal 'B' - Input hoch |
| 0x0594 | P0594 | P0594 Fahrgeschwindigkeitsregelung Servo - Fehlfunktion oder Leitungsunterbrechung |
| 0x0595 | P0595 | P0595 Fahrgeschwindigkeitsregelung Servo - Input niedrig |
| 0x0596 | P0596 | P0596 Fahrgeschwindigkeitsregelung Servo - Input hoch |
| 0x0597 | P0597 | P0597 Thermostat Heizungsschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0598 | P0598 | P0598 Thermostat Heizungsschaltkreis - Input niedrig |
| 0x0599 | P0599 | P0599 Thermostat Heizungsschaltkreis - Input hoch |
| 0x0600 | P0600 | P0600 Serielle Kommunikationsverbindung - Fehlfunktion |
| 0x0601 | P0601 | P0601 Steuergerät - interner Prüfsummenfehler |
| 0x0602 | P0602 | P0602 Steuergerät - Programmierfehler |
| 0x0603 | P0603 | P0603 Steuergerät - interner 'Keep Alive Memory' (KAM) Fehler |
| 0x0604 | P0604 | P0604 Steuergerät - interner 'Random Access Memory' (RAM) Fehler |
| 0x0605 | P0605 | P0605 Steuergerät - interner 'Read only Memory' (ROM) Fehler |
| 0x0606 | P0606 | P0606 Motorsteuergerät/Powerstrain Steuergerät - interner Prozessorfehler |
| 0x0607 | P0607 | P0607 Steuergerät - Leistungsproblem |
| 0x0608 | P0608 | P0608 Fahrzeuggeschwindigkeitssensor-Steuergerät Ausgang 'A' - Fehlfunktion |
| 0x0609 | P0609 | P0609 Fahrzeuggeschwindigkeitssensor-Steuergerät Ausgang 'B' - Fehlfunktion |
| 0x0611 | P0611 | P0611 Einspritzventil-Steuergerät - Leistungsproblem |
| 0x0612 | P0612 | P0612 Einspritzventil-Steuergerät Relais - Fehlfunktion |
| 0x0613 | P0613 | P0613 Getriebesteuergerät - interner Prozessorfehler |
| 0x0614 | P0614 | P0614 Motorsteuergerät/Getriebesteuergerät - Kompatibilitätsfehler |
| 0x0615 | P0615 | P0615 Anlasserrelais - Fehlfunktion |
| 0x0616 | P0616 | P0616 Anlasserrelais - Input niedrig |
| 0x0617 | P0617 | P0617 Anlasserrelais - Input hoch |
| 0x0618 | P0618 | P0618 Alternativkraftstoff-Steuergerät - interner 'Keep Alive Memory' (KAM) Fehler |
| 0x0619 | P0619 | P0619 Alternativkraftstoff-Steuergerät - interner 'Random Access Memory'/ 'Read only Memory' (RAM/ROM) Fehler |
| 0x0620 | P0620 | P0620 Generator - Fehlfunktion |
| 0x0622 | P0622 | P0622 Generatorfeld / Klemme 'F' - Fehlfunktion |
| 0x0625 | P0625 | P0625 Generatorfeld / Klemme 'F' - Input niedrig |
| 0x0627 | P0627 | P0627 Kraftstoffpumpe 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0628 | P0628 | P0628 Kraftstoffpumpe 1 - Input niedrig |
| 0x0629 | P0629 | P0629 Kraftstoffpumpe 1 - Input hoch |
| 0x062A | P062A | P062A Kraftstoffpumpe 1 - Meßbereichs- oder Leistungsproblem |
| 0x0630 | P0630 | P0630 Motorsteuergerät/Powertrain Steuergerät - Fahrgestellnummer nicht programmiert oder nicht kompatibel |
| 0x0631 | P0631 | P0631 Getriebesteuergerät - Fahrgestellnummer nicht programmiert oder nicht kompatibel |
| 0x0632 | P0632 | P0632 Motorsteuergerät/Powertrain Steuergerät - Kilometerzähler nicht programmiert |
| 0x0633 | P0633 | P0633 Motorsteuergerät/Powerstrain Steuergerät; EWS (elektronische Wegfahrsperre) - Schlüsseldaten nicht programmiert |
| 0x0634 | P0634 | P0634 Powertrain Steuergerät/Motorsteuergerät/Getriebesteuergerät - Innentemperatur zu hoch |
| 0x0635 | P0635 | P0635 Servolenkung - Fehlfunktion |
| 0x0636 | P0636 | P0636 Servolenkung - Input niedrig |
| 0x0637 | P0637 | P0637 Servolenkung - Input hoch |
| 0x0638 | P0638 | P0638 Drosselklappensteller (Bank 1) - Meßbereichs- oder Leistungsproblem |
| 0x0639 | P0639 | P0639 Drosselklappensteller (Bank 2) - Meßbereichs- oder Leistungsproblem |
| 0x0640 | P0640 | P0640 Ansaugluftvorwärmer Schaltkreis - Fehlfunktion |
| 0x0641 | P0641 | P0641 Versorgungsspannung 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0642 | P0642 | P0642 Versorgungsspannung 1 - Input niedrig |
| 0x0643 | P0643 | P0643 Versorgungsspannung 1 - Input hoch |
| 0x0645 | P0645 | P0645 Klimakompressor-Kupplungsrelais - Fehlfunktion |
| 0x0646 | P0646 | P0646 Klimakompressor-Kupplungsrelais - Input niedrig |
| 0x0647 | P0647 | P0647 Klimakompressor-Kupplungsrelais - Input hoch |
| 0x0648 | P0648 | P0648 EWS (elektronische Wegfahrsperre) Kontrollleuchte - Fehlfunktion |
| 0x0650 | P0650 | P0650 Malfunction Indicator Lamp (MIL) - Fehlfunktion |
| 0x0651 | P0651 | P0651 Versorgungsspannung 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0652 | P0652 | P0652 Versorgungsspannung 2 - Input niedrig |
| 0x0653 | P0653 | P0653 Versorgungsspannung 2 - Input hoch |
| 0x0654 | P0654 | P0654 Motordrehzahl Ausgang - Fehlfunktion |
| 0x0656 | P0656 | P0656 Kraftstoff-Füllstand Ausgang - Fehlfunktion |
| 0x0660 | P0660 | P0660 Ansaugklappe (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0661 | P0661 | P0661 Ansaugklappe (Bank 1) - Input niedrig |
| 0x0662 | P0662 | P0662 Ansaugklappe (Bank 1) - Input hoch |
| 0x0663 | P0663 | P0663 Ansaugklappe (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x0664 | P0664 | P0664 Ansaugklappe (Bank 2) - Input niedrig |
| 0x0665 | P0665 | P0665 Ansaugklappe (Bank 2) - Input hoch |
| 0x0666 | P0666 | P0666 Powertrain Steuergerät/Motorsteuergerät/Getriebesteuergerät interner Temperaturfühler - Fehlfunktion |
| 0x0667 | P0667 | P0667 Powertrain Steuergerät/Motorsteuergerät/Getriebesteuergerät interner Temperaturfühler - Meßbereichs- oder Leistungsproblem |
| 0x0668 | P0668 | P0668 Powertrain Steuergerät/Motorsteuergerät/Getriebesteuergerät interner Temperaturfühler - Input niedrig |
| 0x0669 | P0669 | P0669 Powertrain Steuergerät/Motorsteuergerät/Getriebesteuergerät interner Temperaturfühler - Input hoch |
| 0x0670 | P0670 | P0670 Glühkerzen-Steuergerät - Fehlfunktion oder Leitungsunterbrechung |
| 0x0671 | P0671 | P0671 Glühkerze Zylinder 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0672 | P0672 | P0672 Glühkerze Zylinder 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0673 | P0673 | P0673 Glühkerze Zylinder 3 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0674 | P0674 | P0674 Glühkerze Zylinder 4 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0675 | P0675 | P0675 Glühkerze Zylinder 5 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0676 | P0676 | P0676 Glühkerze Zylinder 6 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0677 | P0677 | P0677 Glühkerze Zylinder 7 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0678 | P0678 | P0678 Glühkerze Zylinder 8 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0679 | P0679 | P0679 Glühkerze Zylinder 9 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0680 | P0680 | P0680 Glühkerze Zylinder 10 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0681 | P0681 | P0681 Glühkerze Zylinder 11 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0682 | P0682 | P0682 Glühkerze Zylinder 12 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0683 | P0683 | P0683 Glühkerzen-Steuergerät an Powertrain Steuergerät Kommunikationsschaltkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x0684 | P0684 | P0684 Glühkerzen-Steuergerät an Powertrain Steuergerät Kommunikationsschaltkreis - Meßbereichs- oder Leistungsprobelm |
| 0x0685 | P0685 | P0685 Motorsteuergerät/Powertrain Steuergerät Hauptrelais - Fehlfunktion oder Leitungsunterbrechung |
| 0x0686 | P0686 | P0686 Motorsteuergerät/Powertrain Steuergerät Hauptrelais - Input niedrig |
| 0x0687 | P0687 | P0687 Motorsteuergerät/Powertrain Steuergerät Hauptrelais - Input hoch |
| 0x0688 | P0688 | P0688 Motorsteuergerät/Powertrain Steuergerät Hauptrelais Überwachungskreis - Fehlfunktion oder Letungsunterbrechung |
| 0x0689 | P0689 | P0689 Motorsteuergerät/Powertrain Steuergerät Hauptrelais Überwachungskreis - Input niedrig |
| 0x0690 | P0690 | P0690 Motorsteuergerät/Powertrain Steuergerät Hauptrelais Überwachungskreis - Input hoch |
| 0x0691 | P0691 | P0691 Motorlüfter 1 - Input niedrig |
| 0x0692 | P0692 | P0692 Motorlüfter 1 - Input hoch |
| 0x0693 | P0693 | P0693 Motorlüfter 2 - Input niedrig |
| 0x0694 | P0694 | P0694 Motorlüfter 2 - Input hoch |
| 0x0695 | P0695 | P0695 Motorlüfter 3 - Input niedrig |
| 0x0696 | P0696 | P0696 Motorlüfter 3 - Input hoch |
| 0x0697 | P0697 | P0697 Versorgungsspannung 3 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0698 | P0698 | P0698 Versorgungsspannung 3 - Input niedrig |
| 0x0699 | P0699 | P0699 Versorgungsspannung 3 - Input hoch |
| 0x0700 | P0700 | P0700 Getriebesteuersystem Malfunction Indicator Lamp (MIL) Anforderung - Fehlfunktion  |
| 0x0701 | P0701 | P0701 Getriebesteuersystem - Meßbereichs- oder Leistungsproblem |
| 0x0702 | P0702 | P0702 Getriebesteuersystem - elektrischer Fehler |
| 0x0703 | P0703 | P0703 Bremstestschalter - Fehlfunktion |
| 0x0704 | P0704 | P0704 Eingangssignal Kupplungsschalter, Eingangssignal - Fehlfunktion |
| 0x0705 | P0705 | P0705 Getriebepositionssensor 1 (PRNDL) - Fehlfunktion |
| 0x0706 | P0706 | P0706 Getriebepositionssensor 1- Meßbereichs- oder Leistungsproblem |
| 0x0707 | P0707 | P0707 Getriebepositionssensor 1 - Input niedrig |
| 0x0708 | P0708 | P0708 Getriebepositionssensor 1 - Input hoch |
| 0x0709 | P0709 | P0709 Getriebepositionssensor 1 - Input sporadisch |
| 0x0710 | P0710 | P0710 Getriebeöltemperaturfühler 1 - Fehlfunktion |
| 0x0711 | P0711 | P0711 Getriebeöltemperaturfühler 1 - Meßbereichs- oder Leistungsproblem |
| 0x0712 | P0712 | P0712 Getriebeöltemperaturfühler 1 - Input niedrig |
| 0x0713 | P0713 | P0713 Getriebeöltemperaturfühler 1 - Input hoch |
| 0x0714 | P0714 | P0714 Getriebeöltemperaturfühler 1 - Input sporadisch |
| 0x0715 | P0715 | P0715 Eingangsdrehzahlfühler 1 Turbine - Fehlfunktion |
| 0x0716 | P0716 | P0716 Eingangsdrehzahlfühler 1 Turbine - Meßbereichs- oder Leistungsproblem |
| 0x0717 | P0717 | P0717 Eingangsdrehzahlfühler 1 Turbine - kein Signal |
| 0x0718 | P0718 | P0718 Eingangsdrehzahlfühler 1 Turbine - Input sporadisch |
| 0x0719 | P0719 | P0719 Bremstestschalter - Input niedrig |
| 0x0720 | P0720 | P0720 Abtriebsdrehzahlfühler - Fehlfunktion |
| 0x0721 | P0721 | P0721 Abtriebsdrehzahlfühler - Meßbereichs- oder Leistungsproblem |
| 0x0722 | P0722 | P0722 Abtriebsdrehzahlfühler - kein Signal |
| 0x0723 | P0723 | P0723 Abtriebsdrehzahlfühler - Input sporadisch |
| 0x0724 | P0724 | P0724 Bremstestschalter - Input hoch |
| 0x0725 | P0725 | P0725 Motordrehzahl, Eingangssignal - Fehlfunktion |
| 0x0726 | P0726 | P0726 Motordrehzahl, Eingangssignal - Meßbereichs- oder Leistungsproblem |
| 0x0727 | P0727 | P0727 Motordrehzahl, Eingangssignal  - kein Signal |
| 0x0728 | P0728 | P0728 Motordrehzahl, Eingangssignal  - Input sporadisch |
| 0x0729 | P0729 | P0729 Falsches Übersetzungsverhältnis - 6. Gang |
| 0x0730 | P0730 | P0730 Falsches Übersetzungsverhältnis |
| 0x0731 | P0731 | P0731 Falsches Übersetzungsverhältnis - 1. Gang |
| 0x0732 | P0732 | P0732 Falsches Übersetzungsverhältnis - 2. Gang |
| 0x0733 | P0733 | P0733 Falsches Übersetzungsverhältnis - 3. Gang |
| 0x0734 | P0734 | P0734 Falsches Übersetzungsverhältnis - 4. Gang |
| 0x0735 | P0735 | P0735 Falsches Übersetzungsverhältnis - 5. Gang |
| 0x0736 | P0736 | P0736 Falsches Übersetzungsverhältnis - Rückwärtsgang |
| 0x0737 | P0737 | P0737 Getriebesteuergerät, Motordrehzahl Ausgangssignal - Fehlfunktion |
| 0x0738 | P0738 | P0738 Getriebesteuergerät, Motordrehzahl Ausgangssignal - Input niedrig |
| 0x0739 | P0739 | P0739 Getriebesteuergerät, Motordrehzahl Ausgangssignal - Input hoch |
| 0x0740 | P0740 | P0740 Wandlerüberbrückungskupplung - Fehlfunktion oder Leitungsunterbrechung |
| 0x0741 | P0741 | P0741 Wandlerüberbrückungskupplung - Leistungsproblem oder klemmt offen |
| 0x0742 | P0742 | P0742 Wandlerüberbrückungskupplung - klemmt geschlossen |
| 0x0743 | P0743 | P0743 Wandlerüberbrückungskupplung - elektrischer Fehler |
| 0x0744 | P0744 | P0744 Wandlerüberbrückungskupplung - Input sporadisch |
| 0x0745 | P0745 | P0745 Elektrischer Drucksteller 1 - Fehlfunktion |
| 0x0746 | P0746 | P0746 Elektrischer Drucksteller 1 - Leistungsproblem oder klemmt offen |
| 0x0747 | P0747 | P0747 Elektrischer Drucksteller 1 - klemmt geschlossen |
| 0x0748 | P0748 | P0748 Elektrischer Drucksteller 1 - elektrischer Fehler |
| 0x0749 | P0749 | P0749 Elektrischer Drucksteller 1 - Input sporadisch |
| 0x0750 | P0750 | P0750 Magnetventil 1 - Fehlfunktion |
| 0x0751 | P0751 | P0751 Magnetventil 1 - Leistungsproblem oder klemmt offen |
| 0x0752 | P0752 | P0752 Magnetventil 1 - klemmt geschlossen |
| 0x0753 | P0753 | P0753 Magnetventil 1 - elektrischer Fehler |
| 0x0754 | P0754 | P0754 Magnetventil 1 - Input sporadisch |
| 0x0755 | P0755 | P0755 Magnetventil 2 - Fehlfunktion |
| 0x0756 | P0756 | P0756 Magnetventil 2 - Leistungsproblem oder klemmt offen |
| 0x0757 | P0757 | P0757 Magnetventil 2 - klemmt geschlossen |
| 0x0758 | P0758 | P0758 Magnetventil 2 - elektrischer Fehler |
| 0x0759 | P0759 | P0759 Magnetventil 2 - Input sporadisch |
| 0x0760 | P0760 | P0760 Magnetventil 3 - Fehlfunktion |
| 0x0761 | P0761 | P0761 Magnetventil 3 - Leistungsproblem oder klemmt offen |
| 0x0762 | P0762 | P0762 Magnetventil 2 - klemmt geschlossen |
| 0x0763 | P0763 | P0763 Magnetventil 3 - elektrischer Fehler |
| 0x0764 | P0764 | P0764 Magnetventil 3 - Input sporadisch |
| 0x0765 | P0765 | P0765 Magnetventil 4 - Fehlfunktion |
| 0x0766 | P0766 | P0766 Magnetventil 4 - Leistungsproblem oder klemmt offen |
| 0x0767 | P0767 | P0767 Magnetventil 4 - klemmt geschlossen |
| 0x0768 | P0768 | P0768 Magnetventil 4 - elektrischer Fehler |
| 0x0769 | P0769 | P0769 Magnetventil 4 - Input sporadisch |
| 0x0770 | P0770 | P0770 Magnetventil 5 - Fehlfunktion |
| 0x0771 | P0771 | P0771 Magnetventil 5 - Leistungsproblem oder klemmt offen |
| 0x0772 | P0772 | P0772 Magnetventil 5 - klemmt geschlossen |
| 0x0773 | P0773 | P0773 Magnetventil 5 - elektrischer Fehler |
| 0x0774 | P0774 | P0774 Magnetventil 5 - Input sporadisch |
| 0x0775 | P0775 | P0775 Elektrischer Drucksteller 2 - Fehlfunktion |
| 0x0776 | P0776 | P0776 Elektrischer Drucksteller 2 - Leistungsproblem oder klemmt offen |
| 0x0777 | P0777 | P0777 Elektrischer Drucksteller 2 - klemmt geschlossen |
| 0x0778 | P0778 | P0778 Elektrischer Drucksteller 2 - elektrischer Fehler |
| 0x0779 | P0779 | P0779 Elektrischer Drucksteller 2 - Input sporadisch |
| 0x0780 | P0780 | P0780 Schaltvorgang - Fehler |
| 0x0781 | P0781 | P0781 Schaltvorgang 1./2. Gang - Fehlfunktion |
| 0x0782 | P0782 | P0782 Schaltvorgang 2./3. Gang - Fehlfunktion |
| 0x0783 | P0783 | P0783 Schaltvorgang 3./4. Gang - Fehlfunktion |
| 0x0784 | P0784 | P0784 Schaltvorgang 4./5. Gang - Fehlfunktion |
| 0x0790 | P0790 | P0790 Getriebeprogrammschalter - Fehlfunktion |
| 0x0791 | P0791 | P0791 Zwischenwelle Drehzahlfühler 1 - Fehlfunktion |
| 0x0792 | P0792 | P0792 Zwischenwelle Drehzahlfühler 1 - Meßbereichs- oder Leistungsproblem |
| 0x0793 | P0793 | P0793 Zwischenwelle Drehzahlfühler 1 - kein Signal |
| 0x0794 | P0794 | P0794 Zwischenwelle Drehzahlfühler 1 - Input sporadisch |
| 0x0795 | P0795 | P0795 Elektrischer Drucksteller 3 - Fehlfunktion |
| 0x0796 | P0796 | P0796 Elektrischer Drucksteller 3 - Leistungsproblem oder klemmt offen |
| 0x0797 | P0797 | P0797 Elektrischer Drucksteller 3 - klemmt geschlossen |
| 0x0798 | P0798 | P0798 Elektrischer Drucksteller 3 - elektrischer Fehler |
| 0x0799 | P0799 | P0799 Elektrischer Drucksteller 3 - Input sporadisch |
| 0x0800 | P0800 | P0800 Verteilergetriebesteuersystem (Malfunction Indicator Lamp (MIL) Anforderung - Fehlfunktion  |
| 0x0802 | P0802 | P0802 Getriebesteuersystem Malfunction Indicator Lamp (MIL) Anforderung - Fehlfunktion oder Leitungsunterbrechung |
| 0x0805 | P0805 | P0805 Kupplungspositionssensor - Fehlfunktion oder Leitungsunterbrechung |
| 0x0806 | P0806 | P0806 Kupplungspositionssensor - Meßbereichs- oder Leistungsproblem |
| 0x0807 | P0807 | P0807 Kupplungspositionssensor - Input niedrig |
| 0x0808 | P0808 | P0808 Kupplungspositionssensor - Input hoch |
| 0x0809 | P0809 | P0809 Kupplungspositionssensor - Input sporadisch |
| 0x0812 | P0812 | P0812 Rückwärtsgang Eingangssignal - Fehlfunktion oder Leitungsunterbrechung |
| 0x0813 | P0813 | P0813 Rückwärtsgang Ausgang - Fehlfunktion oder Leitungsunterbrechung |
| 0x0815 | P0815 | P0815 Hochschaltungs-Schalter - Fehlfunktion oder Leitungsunterbrechung |
| 0x0816 | P0816 | P0816 Zurückschaltungs-Schalter - Fehlfunktion |
| 0x0829 | P0829 | P0829 Schaltvorgang 5./6. Gang - Fehlfunktion |
| 0x0830 | P0830 | P0830 Kupplungspedalschalter 1 - Fehlfunktion |
| 0x0831 | P0831 | P0831 Kupplungspedalschalter 1 - Input niedrig |
| 0x0832 | P0832 | P0832 Kupplungspedalschalter 1 - Input hoch |
| 0x0833 | P0833 | P0833 Kupplungspedalschalter 2 - Fehlfunktion |
| 0x0834 | P0834 | P0834 Kupplungspedalschalter 2 - Input niedrig |
| 0x0835 | P0835 | P0835 Kupplungspedalschalter 2 - Input hoch |
| 0x0840 | P0840 | P0840 Getriebeöldrucksensor/-schalter 1 - Fehlfunktion |
| 0x0841 | P0841 | P0841 Getriebeöldrucksensor/-schalter 1 - Meßbereichs- oder Leistungsproblem |
| 0x0842 | P0842 | P0842 Getriebeöldrucksensor/-schalter 1 - Input niedrig |
| 0x0843 | P0843 | P0843 Getriebeöldrucksensor/-schalter 1 - Input hoch |
| 0x0844 | P0844 | P0844 Getriebeöldrucksensor/-schalter 1 - Input sporadisch |
| 0x0845 | P0845 | P0845 Getriebeöldrucksensor/-schalter 2 - Fehlfunktion |
| 0x0846 | P0846 | P0846 Getriebeöldrucksensor/-schalter 2 - Meßbereichs- oder Leistungsproblem |
| 0x0847 | P0847 | P0847 Getriebeöldrucksensor/-schalter 2 - Input niedrig |
| 0x0848 | P0848 | P0848 Getriebeöldrucksensor/-schalter 2 - Input hoch |
| 0x0849 | P0849 | P0849 Getriebeöldrucksensor/-schalter 2 - Input sporadisch |
| 0x0856 | P0856 | P0856 Schlupfregelung Eingangssignal - Fehlfunktion |
| 0x0857 | P0857 | P0857 Schlupfregelung Eingangssignal - Meßbereichs- oder Leistungsproblem |
| 0x0858 | P0858 | P0858 Schlupfregelung Eingangssignal - Input niedrig |
| 0x0859 | P0859 | P0859 Schlupfregelung Eingangssignal - Input hoch |
| 0x0863 | P0863 | P0863 Getriebesteuergerät Kommunikationsschaltkreis - Fehlfunktion |
| 0x0864 | P0864 | P0864 Getriebesteuergerät Kommunikationsschaltkreis - Meßbereichs- oder Leistungsproblem |
| 0x0865 | P0865 | P0865 Getriebesteuergerät Kommunikationsschaltkreis - Input niedrig |
| 0x0866 | P0866 | P0866 Getriebesteuergerät Kommunikationsschaltkreis - Input hoch |
| 0x0867 | P0867 | P0867 Getriebeöldruck - Fehlfunktion |
| 0x0868 | P0868 | P0868 Getriebeöldruck - niedrig |
| 0x0869 | P0869 | P0869 Getriebeöldruck - hoch |
| 0x0870 | P0870 | P0870 Getriebeöldrucksensor/-schalter 3 - Fehlfunktion |
| 0x0871 | P0871 | P0871 Getriebeöldrucksensor/-schalter 3 - Meßbereichs- oder Leistungsproblem |
| 0x0872 | P0872 | P0872 Getriebeöldrucksensor/-schalter 3 - Input niedrig |
| 0x0873 | P0873 | P0873 Getriebeöldrucksensor/-schalter 3 - Input hoch |
| 0x0874 | P0874 | P0874 Getriebeöldrucksensor/-schalter 3 - Input sporadisch |
| 0x0875 | P0875 | P0875 Getriebeöldrucksensor/-schalter 4 - Fehlfunktion |
| 0x0876 | P0876 | P0876 Getriebeöldrucksensor/-schalter 4 - Meßbereichs- oder Leistungsproblem |
| 0x0877 | P0877 | P0877 Getriebeöldrucksensor/-schalter 4 - Input niedrig |
| 0x0878 | P0878 | P0878 Getriebeöldrucksensor/-schalter 4 - Input hoch |
| 0x0879 | P0879 | P0879 Getriebeöldrucksensor/-schalter 4 - Input sporadisch |
| 0x0880 | P0880 | P0880 Getriebesteuergerät Versorgungsspannungssignal - Fehlfunktion |
| 0x0881 | P0881 | P0881 Getriebesteuergerät Versorgungsspannungssignal - Meßberichs- oder Leistungsproblem |
| 0x0882 | P0882 | P0882 Getriebesteuergerät Versorgungsspannungssignal - Input niedrig |
| 0x0883 | P0883 | P0883 Getriebesteuergerät Versorgungsspannungssignal - Input hoch |
| 0x0884 | P0884 | P0884 Getriebesteuergerät Versorgungsspannungssignal - Input sporadisch |
| 0x0885 | P0885 | P0885 Getriebesteuergerät Hauptrelais - Fehlfunktion oder Leitungsunterbrechung |
| 0x0886 | P0886 | P0886 Getriebesteuergerät Hauptrelais - Input niedrig |
| 0x0887 | P0887 | P0887 Getriebesteuergerät Hauptrelais - Input hoch |
| 0x0888 | P0888 | P0888 Getriebesteuergerät Hauptrelais Überwachungskreis - Fehlfunktion |
| 0x0889 | P0889 | P0889 Getriebesteuergerät Hauptrelais Überwachungskreis - Meßbereichs- oder Leistungsproblem |
| 0x0890 | P0890 | P0890 Getriebesteuergerät Hauptrelais Überwachungskreis - Input niedrig |
| 0x0891 | P0891 | P0891 Getriebesteuergerät Hauptrelais Überwachungskreis - Input hoch |
| 0x0892 | P0892 | P0892 Getriebesteuergerät Hauptrelais Überwachungskreis - Input sporadisch |
| 0x0893 | P0893 | P0893 Zahnräder - Mehrfacheingriff |
| 0x0895 | P0895 | P0895 Schaltzeit - zu kurz |
| 0x0896 | P0896 | P0896 Schaltzeit - zu lang |
| 0x0898 | P0898 | P0898 Getriebesteuersystem Malfunction Indicator Lamp (MIL) Anforderung - Input niedrig |
| 0x0899 | P0899 | P0899 Getriebesteuersystem Malfunction Indicator Lamp (MIL) Anforderung - Input hoch |
| 0x0900 | P0900 | P0900 Kupplungssteller - Fehlfunktion oder Leitungsunterbrechung |
| 0x0901 | P0901 | P0901 Kupplungssteller - Meßbereichs- oder Leistungsproblem |
| 0x0902 | P0902 | P0902 Kupplungssteller - Input niedrig |
| 0x0903 | P0903 | P0903 Kupplungssteller - Input hoch |
| 0x0932 | P0932 | P0932 Hydraulikdrucksensor - Fehlfunktion |
| 0x0933 | P0933 | P0933 Hydraulikdrucksensor - Meßbereichs- oder Leistungsproblem |
| 0x0934 | P0934 | P0934 Hydraulikdrucksensor - Input niedrig |
| 0x0935 | P0935 | P0935 Hydraulikdrucksensor - Input hoch |
| 0x0936 | P0936 | P0936 Hydraulikdrucksensor - Input sporadisch |
| 0x0937 | P0937 | P0937 Hydrauliköltemperaturfühler - Fehlfunktion |
| 0x0938 | P0938 | P0938 Hydrauliköltemperaturfühler - Meßbereichs- oder Leistungspoblem |
| 0x0939 | P0939 | P0939 Hydrauliköltemperaturfühler - Input niedrig |
| 0x0940 | P0940 | P0940 Hydrauliköltemperaturfühler - Input hoch |
| 0x0941 | P0941 | P0941 Hydrauliköltemperaturfühler - Input sporadisch |
| 0x0942 | P0942 | P0942 Hydraulikeinheit - Fehlfunktion |
| 0x0943 | P0943 | P0943 Hydraulikeinheit - Taktdauer zu kurz |
| 0x0944 | P0944 | P0944 Hydraulikeinheit - Druckverlust |
| 0x0945 | P0945 | P0945 Hydraulikpumpenrelais - Fehlfunktion oder Leitungsunterbrechung |
| 0x0946 | P0946 | P0946 Hydraulikpumpenrelais - Meßbereichs- oder Leistungsproblem |
| 0x0947 | P0947 | P0947 Hydraulikpumpenrelais - Input niedrig |
| 0x0948 | P0948 | P0948 Hydraulikpumpenrelais - Input hoch |
| 0x0960 | P0960 | P0960 Elektrischer Drucksteller 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0961 | P0961 | P0961 Elektrischer Drucksteller 1 - Meßbereichs- oder Leistungsproblem |
| 0x0962 | P0962 | P0962 Elektrischer Drucksteller 1 - Input niedrig |
| 0x0963 | P0963 | P0963 Elektrischer Drucksteller 1 - Input hoch |
| 0x0964 | P0964 | P0964 Elektrischer Drucksteller 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0965 | P0965 | P0965 Elektrischer Drucksteller 2 - Meßbereichs- oder Leistungsproblem |
| 0x0966 | P0966 | P0966 Elektrischer Drucksteller 2 - Input niedrig |
| 0x0967 | P0967 | P0967 Elektrischer Drucksteller 2 - Input hoch |
| 0x0968 | P0968 | P0968 Elektrischer Drucksteller 3 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0969 | P0969 | P0969 Elektrischer Drucksteller 3 - Meßbereichs- oder Leistungsproblem |
| 0x0970 | P0970 | P0970 Elektrischer Drucksteller 3 - Input niedrig |
| 0x0971 | P0971 | P0971 Elektrischer Drucksteller 3 - Input hoch |
| 0x0972 | P0972 | P0972 Magnetventil 1 - Meßbereichs- oder Leistungsproblem |
| 0x0973 | P0973 | P0973 Magnetventil 1 - Input niedrig |
| 0x0974 | P0974 | P0974 Magnetventil 1 - Input hoch |
| 0x0975 | P0975 | P0975 Magnetventil 2 - Meßbereichs- oder Leistungsproblem |
| 0x0976 | P0976 | P0976 Magnetventil 2 - Input niedrig |
| 0x0977 | P0977 | P0977 Magnetventil 2 - Input hoch |
| 0x0978 | P0978 | P0978 Magnetventil 3 - Meßbereichs- oder Leistungsproblem |
| 0x0979 | P0979 | P0979 Magnetventil 3 - Input niedrig |
| 0x0980 | P0980 | P0980 Magnetventil 3 - Input hoch |
| 0x0981 | P0981 | P0981 Magnetventil 4 - Meßbereichs- oder Leistungsproblem |
| 0x0982 | P0982 | P0982 Magnetventil 4 - Input niedrig |
| 0x0983 | P0983 | P0983 Magnetventil 4 - Input hoch |
| 0x0984 | P0984 | P0984 Magnetventil 5 - Meßbereichs- oder Leistungsproblem |
| 0x0985 | P0985 | P0985 Magnetventil 5 - Input niedrig |
| 0x0986 | P0986 | P0986 Magnetventil 5 - Input hoch |
| 0x0987 | P0987 | P0987 Getriebeöldrucksensor/-schalter 5 - Fehlfunktion |
| 0x0988 | P0988 | P0988 Getriebeöldrucksensor/-schalter 5 - Meßbereichs- oder Leistungsproblem |
| 0x0989 | P0989 | P0989 Getriebeöldrucksensor/-schalter 5 - Input niedrig |
| 0x0990 | P0990 | P0990 Getriebeöldrucksensor/-schalter 5 - Input hoch |
| 0x0991 | P0991 | P0991 Getriebeöldrucksensor/-schalter 5 - Input sporadisch |
| 0x0992 | P0992 | P0992 Getriebeöldrucksensor/-schalter 6 - Fehlfunktion |
| 0x0993 | P0993 | P0993 Getriebeöldrucksensor/-schalter 6 - Meßbereichs- oder Leistungsproblem |
| 0x0994 | P0994 | P0994 Getriebeöldrucksensor/-schalter 6 - Input niedrig |
| 0x0995 | P0995 | P0995 Getriebeöldrucksensor/-schalter 6 - Input hoch |
| 0x0996 | P0996 | P0996 Getriebeöldrucksensor/-schalter 6 - Input sporadisch |
| 0x0997 | P0997 | P0997 Magnetventil 6 - Meßbereichs- oder Leistungsproblem |
| 0x0998 | P0998 | P0998 Magnetventil 6 - Input niedrig |
| 0x0999 | P0999 | P0999 Magnetventil 6 - Input hoch |
| 0x0A00 | P0A00 | P0A00 Motorelektronik Kühlmitteltemperaturfühler - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A01 | P0A01 | P0A01 Motorelektronik Kühlmitteltemperaturfühler - Meßbereichs- oder Leistungsproblem |
| 0x0A02 | P0A02 | P0A02 Motorelektronik Kühlmitteltemperaturfühler - Input niedrig |
| 0x0A03 | P0A03 | P0A03 Motorelektronik Kühlmitteltemperaturfühler - Input hoch |
| 0x0A04 | P0A04 | P0A04 Motorelektronik Kühlmitteltemperaturfühler - Input sporadisch |
| 0x0A05 | P0A05 | P0A05 Motorelektronik Kühlmittelpumpe - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A06 | P0A06 | P0A06 Motorelektronik Kühlmittelpumpe - Input niedrig |
| 0x0A07 | P0A07 | P0A07 Motorelektronik Kühlmittelpumpe - Input hoch |
| 0x0A08 | P0A08 | P0A08 DC/DC Wandler Status - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A09 | P0A09 | P0A09 DC/DC Wandler Status - Input niedrig |
| 0x0A0A | P0A0A | P0A0A Hochspannungssystem Interlockschalter - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A0B | P0A0B | P0A0B Hochspannungssystem Interlockschalter - Leistungsproblem |
| 0x0A0C | P0A0C | P0A0C Hochspannungssystem Interlockschalter - Input niedrig |
| 0x0A0D | P0A0D | P0A0D Hochspannungssystem Interlockschalter - Input hoch |
| 0x0A0E | P0A0E | P0A0E Hochspannungssystem Interlockschalter - Input sporadisch |
| 0x0A0F | P0A0F | P0A0F Motorstart - fehlgeschlagen |
| 0x0A10 | P0A10 | P0A10 DC/DC Wandler Status - Input hoch |
| 0x0A11 | P0A11 | P0A11 DC/DC Wandler Freigabe - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A12 | P0A12 | P0A12 DC/DC Wandler Freigabe - Input niedrig |
| 0x0A13 | P0A13 | P0A13 DC/DC Wandler Freigabe - Input hoch |
| 0x0A14 | P0A14 | P0A14 Motorlager 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A15 | P0A15 | P0A15 Motorlager 1 - Input niedrig |
| 0x0A16 | P0A16 | P0A16 Motorlager 1 - Input hoch |
| 0x0A17 | P0A17 | P0A17 Motor Drehmomentsensor - Fehlfunktion |
| 0x0A18 | P0A18 | P0A18 Motor Drehmomentsensor - Meßbereichs- oder Leistungsproblem |
| 0x0A19 | P0A19 | P0A19 Motor Drehmomentsensor - Input niedrig |
| 0x0A1A | P0A1A | P0A1A Generator-Steuergerät - Fehlfunktion |
| 0x0A1B | P0A1B | P0A1B Antriebsmotor 1 Steuergerät - Fehlfunktion |
| 0x0A1C | P0A1C | P0A1C Antriebsmotor 2 Steuergerät - Fehlfunktion |
| 0x0A1E | P0A1E | P0A1E Anlasser-/Generator-Steuergerät - Fehlfunktion |
| 0x0A20 | P0A20 | P0A20 Motor Drehmomentsensor - Innput hoch |
| 0x0A21 | P0A21 | P0A21 Motor Drehmomentsensor - Input sporadisch |
| 0x0A22 | P0A22 | P0A22 Generator Drehmomentsensor - Fehlfunktion |
| 0x0A23 | P0A23 | P0A23 Generator Drehmomentsensor - Meßbereichs- oder Leistungsproblem |
| 0x0A24 | P0A24 | P0A24 Generator Drehmomentsensor - Input niedrig |
| 0x0A25 | P0A25 | P0A25 Generator Drehmomentsensor - Input hoch |
| 0x0A26 | P0A26 | P0A26 Generator Drehmomentsensor - Input sporadisch |
| 0x0A2A | P0A2A | P0A2A Antriebsmotor 1 Temperaturfühler - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A2B | P0A2B | P0A2B Antriebsmotor 1 Temperaturfühler - Meßbereichs- oder Leistungsproblem |
| 0x0A2C | P0A2C | P0A2C Antriebsmotor 1 Temperaturfühler - Input niedrig |
| 0x0A2D | P0A2D | P0A2D Antriebsmotor 1 Temperaturfühler - Input hoch |
| 0x0A2E | P0A2E | P0A2E Antriebsmotor 1 Temperaturfühler - Input sporadisch |
| 0x0A2F | P0A2F | P0A2F Antriebsmotor 1 Temperaturfühler - Übertemperatur |
| 0x0A30 | P0A30 | P0A30 Antriebsmotor 2 Temperaturfühler - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A31 | P0A31 | P0A31 Antriebsmotor 2 Temperaturfühler - Meßbereichs- oder Leistungsproblem |
| 0x0A32 | P0A32 | P0A32 Antriebsmotor 2 Temperaturfühler - Input niedrig |
| 0x0A33 | P0A33 | P0A33 Antriebsmotor 2 Temperaturfühler - Input hoch |
| 0x0A34 | P0A34 | P0A34 Antriebsmotor 2 Temperaturfühler - Input sporadisch |
| 0x0A35 | P0A35 | P0A35 Antriebsmotor 2 Temperaturfühler - Übertemperatur |
| 0x0A36 | P0A36 | P0A36 Generator Temperaturfühler - Fehlfunktion |
| 0x0A37 | P0A37 | P0A37 Generator Temperaturfühler - Meßbereichs- oder Leistungsproblem |
| 0x0A38 | P0A38 | P0A38 Generator Temperaturfühler - Input niedrig |
| 0x0A39 | P0A39 | P0A39 Generator Temperaturfühler - Input hoch |
| 0x0A3A | P0A3A | P0A3A Generator Temperaturfühler - Input sporadisch |
| 0x0A3B | P0A3B | P0A3B Generator - Übertemperatur |
| 0x0A3C | P0A3C | P0A3C Antriebsmotor 1 Inverter - Übertemperatur |
| 0x0A3D | P0A3D | P0A3D Antriebsmotor 2 Inverter - Übertemperatur |
| 0x0A3E | P0A3E | P0A3E Generator Inverter - Übertemperatur |
| 0x0A3F | P0A3F | P0A3F Antriebsmotor 1 Positionssensor - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A40 | P0A40 | P0A40 Antriebsmotor 1 Positionssensor - Meßbereichs- odr Leistungsproblem |
| 0x0A41 | P0A41 | P0A41 Antriebsmotor 1 Positionssensor - Input niedrig |
| 0x0A42 | P0A42 | P0A42 Antriebsmotor 1 Positionssensor - Input hoch |
| 0x0A43 | P0A43 | P0A43 Antriebsmotor 1 Positionssensor - Input sporadisch |
| 0x0A44 | P0A44 | P0A44 Antriebsmotor 1 Positionssensor - Überdrehzahl |
| 0x0A45 | P0A45 | P0A45 Antriebsmotor 2 Positionssensor - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A46 | P0A46 | P0A46 Antriebsmotor 2 Positionssensor - Meßbereichs- oder Leistungsproblem |
| 0x0A47 | P0A47 | P0A47 Antriebsmotor 2 Positionssensor - Input niedrig |
| 0x0A48 | P0A48 | P0A48 Antriebsmotor 2 Positionssensor - Input hoch |
| 0x0A49 | P0A49 | P0A49 Antriebsmotor 2 Positionssensor - Input sporadisch |
| 0x0A4A | P0A4A | P0A4A Antriebsmotor 2 Positionssensor - Überdrehzahl |
| 0x0A4B | P0A4B | P0A4B Generator Positionssensor - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A4C | P0A4C | P0A4C Generator Positionssensor - Meßbereichs- oder Leistungsproblem |
| 0x0A4D | P0A4D | P0A4D Generator Positionssensor - Input niedrig |
| 0x0A4E | P0A4E | P0A4E Generator Positionssensor - Input hoch |
| 0x0A4F | P0A4F | P0A4F Generator Positionssensor - Input sporadisch |
| 0x0A50 | P0A50 | P0A50 Generator Positionssensor - Überdrehzahl |
| 0x0A51 | P0A51 | P0A51 Antriebsmotor 1 Stromsensor - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A52 | P0A52 | P0A52 Antriebsmotor 1 Stromsensor - Meßbereichs- oder Leistungsproblem |
| 0x0A53 | P0A53 | P0A53 Antriebsmotor 1 Stromsensor - Input niedrig |
| 0x0A54 | P0A54 | P0A54 Antriebsmotor 1 Stromsensor - Input hoch |
| 0x0A55 | P0A55 | P0A55 Antriebsmotor 2 Stromsensor - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A56 | P0A56 | P0A56 Antriebsmotor 2 Stromsensor - Meßbereichs- oder Leistungsproblem |
| 0x0A57 | P0A57 | P0A57 Antriebsmotor 2 Stromsensor - Input niedrig |
| 0x0A58 | P0A58 | P0A58 Antriebsmotor 2 Stromsensor - Input hoch |
| 0x0A59 | P0A59 | P0A59 Generator Stromsensor - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A5A | P0A5A | P0A5A Generator Stromsensor - Meßbereichs- oder Leistungsproblem |
| 0x0A5B | P0A5B | P0A5B Generator Stromsensor - Input niedrig |
| 0x0A5C | P0A5C | P0A5C Generator Stromsensor - Input hoch |
| 0x0A5D | P0A5D | P0A5D Antriebsmotor 1 Strom Phase U - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A5E | P0A5E | P0A5E Antriebsmotor 1 Strom Phase U - Input niedrig |
| 0x0A5F | P0A5F | P0A5F Antriebsmotor 1 Strom Phase U - Input hoch |
| 0x0A60 | P0A60 | P0A60 Antriebsmotor 1 Strom Phase V - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A61 | P0A61 | P0A61 Antriebsmotor 1 Strom Phase V - Input niedrig |
| 0x0A62 | P0A62 | P0A62 Antriebsmotor 1 Strom Phase V - Input hoch |
| 0x0A63 | P0A63 | P0A63 Antriebsmotor 1 Strom Phase W - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A64 | P0A64 | P0A64 Antriebsmotor 1 Strom Phase W - Input niedrig |
| 0x0A65 | P0A65 | P0A65 Antriebsmotor 1 Strom Phase W - Input hoch |
| 0x0A66 | P0A66 | P0A66 Antriebsmotor 2 Strom Phase u - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A67 | P0A67 | P0A67 Antriebsmotor 2 Strom Phase U - Input niedrig |
| 0x0A68 | P0A68 | P0A68 Antriebsmotor 2 Strom Phase U - Input hoch |
| 0x0A69 | P0A69 | P0A69 Antriebsmotor 2 Strom Phase V - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A6A | P0A6A | P0A6A Antriebsmotor 2 Strom Phase V - Input niedrig |
| 0x0A6B | P0A6B | P0A6B Antriebsmotor 2 Strom Phase V - Input hoch |
| 0x0A6C | P0A6C | P0A6C Antriebsmotor 2 Strom Phase W - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A6D | P0A6D | P0A6D Antriebsmotor 2 Strom Phase W - Input niedrig |
| 0x0A6E | P0A6E | P0A6E Antriebsmotor 2 Strom Phase W - Input hoch |
| 0x0A6F | P0A6F | P0A6F Generator Strom Phase U - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A70 | P0A70 | P0A70 Generator Strom Phase U - Input niedrig |
| 0x0A71 | P0A71 | P0A71 Generator Strom Phase U - Input hoch |
| 0x0A72 | P0A72 | P0A72 Generator Strom Phase V - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A73 | P0A73 | P0A73 Generator Strom Phase V - Input niedrig |
| 0x0A74 | P0A74 | P0A74 Generator Strom Phase V - Input hoch |
| 0x0A75 | P0A75 | P0A75 Generator Strom Phase W - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A76 | P0A76 | P0A76 Generator Strom Phase W - Input niedrig |
| 0x0A77 | P0A77 | P0A77 Generator Strom Phase W - Input hoch |
| 0x0A78 | P0A78 | P0A78 Antriebsmotor 1 Inverter - Leistungsproblem |
| 0x0A79 | P0A79 | P0A79 Antriebsmotor 2 Inverter - Leistungsproblem |
| 0x0A7A | P0A7A | P0A7A Generator Inverter - Leistungsproblem |
| 0x0A7C | P0A7C | P0A7C Motorelektronik - Übertemperatur |
| 0x0A7D | P0A7D | P0A7D Hybridbatteriesatz - Ladezustand niedrig |
| 0x0A7E | P0A7E | P0A7E Hybridbatteriesatz - Übertemperatur |
| 0x0A7F | P0A7F | P0A7F Hybridbatteriesatz - Verschleiß |
| 0x0A80 | P0A80 | P0A80 Hybridbatteriesatz - Austausch erforderlich |
| 0x0A81 | P0A81 | P0A81 Hybridbatteriesatz Lüfter 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A82 | P0A82 | P0A82 Hybridbatteriesatz Lüfter 1 - Leistungsproblem oder klemmt offen |
| 0x0A83 | P0A83 | P0A83 Hybridbatteriesatz Lüfter 1 - klemmt geschlossen |
| 0x0A84 | P0A84 | P0A84 Hybridbatteriesatz Lüfter 1 - Input niedrig |
| 0x0A85 | P0A85 | P0A85 Hybridbatteriesatz Lüfter 1 - Input hoch |
| 0x0A86 | P0A86 | P0A86 14 Volt Powermodul Stromsensor - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A87 | P0A87 | P0A87 14 Volt Powermodul Stromsensor - Meßbereichs- oder Leistungsproblem |
| 0x0A88 | P0A88 | P0A88 14 Volt Powermodul Stromsensor - Input niedrig |
| 0x0A89 | P0A89 | P0A89 14 Volt Powermodul Stromsensor - Input hoch |
| 0x0A8A | P0A8A | P0A8A 14 Volt Powermodul Stromsensor - Input sporadisch |
| 0x0A8B | P0A8B | P0A8B 14 Volt Powermodul Versorgungsspannung - Fehlfunktion |
| 0x0A8C | P0A8C | P0A8C 14 Volt Powermodul Versorgungsspannung - Instabil |
| 0x0A8D | P0A8D | P0A8D 14 Volt Powermodul Versorgungsspannung - Input niedrig |
| 0x0A8E | P0A8E | P0A8E 14 Volt Powermodul Versorgungsspannung - Input hoch |
| 0x0A8F | P0A8F | P0A8F 14 Volt Powermodul Versorgungsspannung - Leistungsproblem |
| 0x0A90 | P0A90 | P0A90 Antriebsmotor 1 - Leistungsproblem |
| 0x0A91 | P0A91 | P0A91 Antriebsmotor 2 - Leistungsproblem |
| 0x0A92 | P0A92 | P0A92 Hybridgenerator - Leistungsproblem |
| 0x0A94 | P0A94 | P0A94 DC/DC Wandler - Leistungsproblem |
| 0x0A95 | P0A95 | P0A95 Hochspannungssicherung - Fehlfunktion |
| 0x0A96 | P0A96 | P0A96 Hybridbatteriesatz Lüfter 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A97 | P0A97 | P0A97 Hybridbatteriesatz Lüfter 2 - Leistungsproblem oder klemmt offen |
| 0x0A98 | P0A98 | P0A98 Hybridbatteriesatz Lüfter 2 - klemmt geschlossen |
| 0x0A99 | P0A99 | P0A99 Hybridbatteriesatz Lüfter 2 - Input niedrig |
| 0x0A9A | P0A9A | P0A9A Hybridbatteriesatz Lüfter 2 - Input hoch |
| 0x0A9B | P0A9B | P0A9B Hybridbatterie Temperaturfühler 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0A9C | P0A9C | P0A9C Hybridbatterie Temperaturfühler 1 - Meßbereichs- oder Leistungsproblem |
| 0x0A9D | P0A9D | P0A9D Hybridbatterie Temperaturfühler 1 - Input niedrig |
| 0x0A9E | P0A9E | P0A9E Hybridbatterie Temperaturfühler 1 - Input hoch |
| 0x0A9F | P0A9F | P0A9F Hybridbatterie Temperaturfühler 1 - Input sporadisch/unregelmäßig |
| 0x0AA0 | P0AA0 | P0AA0 Hybridbatterie Pluspol - Fehlfunktion oder Leitungsunterbrechung |
| 0x0AA1 | P0AA1 | P0AA1 Hybridbatterie Pluspol - verklebt/festgebrannt im geschlossenen Zustand |
| 0x0AA2 | P0AA2 | P0AA2 Hybridbatterie Pluspol - verklebt/festgebrannt im offenen Zustand |
| 0x0AA3 | P0AA3 | P0AA3 Hybridbatterie Minuspol - Fehlfunktion oder Leitungsunterbrechung |
| 0x0AA4 | P0AA4 | P0AA4 Hybridbatterie Minuspol - verklebt/festgebrannt im geschlossenen Zustand |
| 0x0AA5 | P0AA5 | P0AA5 Hybridbatterie Minuspol - verklebt/festgebrannt im offenen Zustand |
| 0x0AAC | P0AAC | P0AAC Hybridbatteriesatz Lufttemperaturfühler 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0AAD | P0AAD | P0AAD Hybridbatteriesatz Lufttemperaturfühler 1 - Meßbereichs- oder Leistungsproblem |
| 0x0AAE | P0AAE | P0AAE Hybridbatteriesatz Lufttemperaturfühler 1 - Input niedrig |
| 0x0AAF | P0AAF | P0AAF Hybridbatteriesatz Lufttemperaturfühler 1 - Input hoch |
| 0x0AB0 | P0AB0 | P0AB0 Hybridbatteriesatz Lufttemperaturfühler 1 - Input sporadisch/unregelmäßig |
| 0x0AB1 | P0AB1 | P0AB1 Hybridbatteriesatz Lufttemperaturfühler 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0AB2 | P0AB2 | P0AB2 Hybridbatteriesatz Lufttemperaturfühler 2 - Meßbereichs- oder Leistungsproblem |
| 0x0AB3 | P0AB3 | P0AB3 Hybridbatteriesatz Lufttemperaturfühler 2 - Input niedrig |
| 0x0AB4 | P0AB4 | P0AB4 Hybridbatteriesatz Lufttemperaturfühler 2 - Input hoch |
| 0x0AB5 | P0AB5 | P0AB5 Hybridbatteriesatz Lufttemperaturfühler 2 - Input sporadisch/unregelmäßig |
| 0x0AB6 | P0AB6 | P0AB6 Motorlager 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x0AB7 | P0AB7 | P0AB7 Motorlager 2 - Input niedrig |
| 0x0AB8 | P0AB8 | P0AB8 Motorlager 2 - Input hoch |
| 0x0AB9 | P0AB9 | P0AB9 Hybridsystem - Leistungsproblem |
| 0x1000 | P1000 | P1000 VVT-System Minhubadaption - Anschlaganzahl überschritten |
| 0x1001 | P1001 | P1001 VVT-Notlaufanforderung - Input hoch |
| 0x1002 | P1002 | P1002 VVT-Notlaufanforderung - Input niedrig |
| 0x1003 | P1003 | P1003 VVT-Notlaufanforderung - Leitungsunterbrechung |
| 0x1004 | P1004 | P1004 VVT-Führungssensor (Bank 1) - Magnetverlust |
| 0x1005 | P1005 | P1005 VVT-Führungssensor (Bank 1) - Resetfehler |
| 0x1006 | P1006 | P1006 VVT-Führungssensor (Bank 1) - Parityfehler |
| 0x1007 | P1007 | P1007 VVT-Führungssensor (Bank 1) - Gradientenfehler |
| 0x1008 | P1008 | P1008 VVT-Führungssensor (Bank 2) - Magnetverlust |
| 0x1009 | P1009 | P1009 VVT-Führungssensor (Bank 2) - Resetfehler |
| 0x100A | P100A | P100A Kraftstoffeinspritzleiste/-system (Bank 2) - Druck zu niedrig |
| 0x100B | P100B | P100B Kraftstoffeinspritzleiste/-system (Bank 2) - Druck zu hoch |
| 0x100C | P100C | P100C VVT-Notlaufanforderung (Bank 2) - Drehzahl- und Füllungsbegrenzung |
| 0x100D | P100D | P100D VVT-Notlaufanforderung (Bank 2) - Vollhubposition nicht erreicht |
| 0x100E | P100E | P100E VVT-Notlaufanforderung (Bank 2) - Luftmassen-Plausibilitätsfehler |
| 0x1010 | P1010 | P1010 VVT-Führungssensor (Bank 2) - Parityfehler |
| 0x1011 | P1011 | P1011 VVT-Führungssensor (Bank 2) - Gradientenfehler |
| 0x1012 | P1012 | P1012 VVT-Referenzsensor (Bank 1) - Magnetverlust |
| 0x1013 | P1013 | P1013 VVT-Referenzsensor (Bank 1) - Resetfehler |
| 0x1014 | P1014 | P1014 VVT-Referenzsensor (Bank 1) - Parityfehler |
| 0x1015 | P1015 | P1015 VVT-Referenzsensor (Bank 1) - Gradientenfehler |
| 0x1016 | P1016 | P1016 Kraftstoffvolumenregelung (Bank 1) - Plausibilitätsfehler |
| 0x1017 | P1017 | P1017 VVT-Sensoren (Bank 1) - Plausibilitätsfehler |
| 0x1018 | P1018 | P1018 VVT-Sensoren (Bank 2) - Plausibilitätsfehler |
| 0x1019 | P1019 | P1019 VVT-Versorgungsspannung Sensoren (Bank 1) - Input hoch |
| 0x1020 | P1020 | P1020 VVT-Versorgungsspannung Sensoren (Bank 1) - Input niedrig |
| 0x1021 | P1021 | P1021 VVT-Versorgungsspannung Sensoren (Bank 2) - Input hoch |
| 0x1022 | P1022 | P1022 VVT-Versorgungsspannung Sensoren (Bank 2) - Input niedrig |
| 0x1023 | P1023 | P1023 VVT-Lernfunktion (Bank 1) - Verstellbereich fehlerhaft |
| 0x1024 | P1024 | P1024 VVT-Lernfunktion (Bank 1) - unteres Lernfenster im unzulässigen Bereich |
| 0x1025 | P1025 | P1025 VVT-Lernfunktion (Bank 1) - keine Positionen gespeichert |
| 0x1026 | P1026 | P1026 VVT-Lernfunktion (Bank 2) - Verstellbereich fehlerhaft |
| 0x1027 | P1027 | P1027 VVT-Lernfunktion (Bank 2) - unteres Lernfenster im unzulässigen Bereich |
| 0x1028 | P1028 | P1028 VVT-Lernfunktion (Bank 2) - keine Positionen gespeichert |
| 0x1029 | P1029 | P1029 VVT-Stellgliedüberwachung Stellmotortemperatur (Bank 1) - Input hoch |
| 0x1030 | P1030 | P1030 VVT-Stellglied Lagereglerüberwachung (Bank 1) - Regeldifferenz |
| 0x1031 | P1031 | P1031 VVT-Stellgliedüberwachung Drehrichtungserkennung (Bank 1) - Plausibilitätsfehler |
| 0x1032 | P1032 | P1032 Kraftstoffvolumenregelung (Bank 2) - Plausibilitätsfehler |
| 0x1033 | P1033 | P1033 VVT-Stellglied Lagereglerüberwachung (Bank 2) - Regeldifferenz |
| 0x1034 | P1034 | P1034 VVT-Stellgliedüberwachung Drehrichtungserkennung (Bank 2) - Plausibilitätsfehler |
| 0x1035 | P1035 | P1035 VVT-CAN-Botschaftsüberwachung (Bank 1) - Sollwertbotschaft fehlerhaft |
| 0x1036 | P1036 | P1036 VVT-CAN-Timeout (Bank 1) - VVT-Sollwertbotschaft |
| 0x1037 | P1037 | P1037 VVT-CAN-Timeout (Bank 1) - VVT-Botschaft |
| 0x1038 | P1038 | P1038 VVT-CAN-Botschaftsüberwachung (Bank 2) - Sollwertbotschaft fehlerhaft |
| 0x1039 | P1039 | P1039 VVT-CAN-Timeout (Bank 2) - VVT-Sollwertbotschaft |
| 0x1040 | P1040 | P1040 VVT-CAN-Timeout (Bank 2) - VVT-Botschaft |
| 0x1041 | P1041 | P1041 VVT-Steuergerät (Bank 1) - interner EEPROM Fehler |
| 0x1042 | P1042 | P1042 VVT-Steuergerät (Bank 1) - interner 'Random Access Memory' (RAM) Fehler |
| 0x1043 | P1043 | P1043 VVT-Steuergerät (Bank 1) - interner 'Read Only Memory' (ROM) Fehler |
| 0x1044 | P1044 | P1044 VVT-Steuergerät (Bank 2) - interner EEPROM-Fehler |
| 0x1045 | P1045 | P1045 VVT-Steuergerät (Bank 2) - interner 'Random Access Memory' (RAM) Fehler |
| 0x1046 | P1046 | P1046 VVT-Steuergerät (Bank 2) - interner 'Read Only Memory' (ROM) Fehler |
| 0x1047 | P1047 | P1047 VVT-Ansteuerung (Bank 1) - Input hoch |
| 0x1048 | P1048 | P1048 VVT-Ansteuerung (Bank 1) - Input niedrig |
| 0x1049 | P1049 | P1049 VVT-Ansteuerung Motorleitungen (Bank 1) - Kurzschluss |
| 0x1050 | P1050 | P1050 VVT-Ansteuerung (Bank 1) - Fehlfunktion |
| 0x1051 | P1051 | P1051 VVT-Ansteuerung (Bank 2) - Input hoch |
| 0x1052 | P1052 | P1052 VVT-Ansteuerung (Bank 2) - Input niedrig |
| 0x1053 | P1053 | P1053 VVT-Ansteuerung Motorleitungen (Bank 2) - Kurzschluss |
| 0x1054 | P1054 | P1054 VVT-Ansteuerung (Bank 2) - Fehlfunktion |
| 0x1055 | P1055 | P1055 VVT-Versorgungsspannung Stellmotor (Bank 1) - Input hoch |
| 0x1056 | P1056 | P1056 VVT-Versorgungsspannung Stellmotor (Bank 1) - Input niedrig |
| 0x1057 | P1057 | P1057 VVT-Versorgungsspannung Stellmotor (Bank 1) - elektrischer Fehler |
| 0x1058 | P1058 | P1058 VVT-Versorgungsspannung Stellmotor (Bank 2) - Input hoch |
| 0x1059 | P1059 | P1059 VVT-Versorgungsspannung Stellmotor (Bank 2) - Input niedrig |
| 0x1060 | P1060 | P1060 VVT-Versorgungsspannung Stellmotor (Bank 2) - elektrischer Fehler |
| 0x1061 | P1061 | P1061 VVT-Notlaufanforderung (Bank 1) - Drehzahl- und Füllungsbegrenzung |
| 0x1062 | P1062 | P1062 VVT-Notlaufanforderung (Bank 1) - Vollhubposition nicht erreicht |
| 0x1063 | P1063 | P1063 VVT-Notlaufanforderung (Bank 1) - Luftmassen-Plausibilitätsfehler |
| 0x1064 | P1064 | P1064 VVT-Wertevergleich Abstellposition/Startposition (Bank 1) - Plausibilitätsfehler |
| 0x1065 | P1065 | P1065 VVT-CAN-Timeout - kein Signal |
| 0x1066 | P1066 | P1066 VVT-CAN-Botschaftsüberwachung - Istwert fehlerhaft |
| 0x1067 | P1067 | P1067 VVT-Referenzsensor (Bank 2) - Magnetverlust |
| 0x1068 | P1068 | P1068 VVT-Referenzsensor (Bank 2) - Resetfehler |
| 0x1069 | P1069 | P1069 VVT-Referenzsensor (Bank 2) - Parityfehler |
| 0x1070 | P1070 | P1070 VVT Referenzsensor (Bank 2) - Gradientenfehler |
| 0x1071 | P1071 | P1071 VVT-Steuergerät (Bank 1) - interner Watchdog oder Temperaturfühlerfehler |
| 0x1072 | P1072 | P1072 VVT-Steuergerät (Bank 2) - interner Watchdog oder Temperaturfühlerfehler |
| 0x1073 | P1073 | P1073 VVT-Sensoren (Bank 1) - Datenkonformität |
| 0x1074 | P1074 | P1074 VVT-Sensoren (Bank 2) - Datenkonformität |
| 0x1075 | P1075 | P1075 VVT-Überlastschutz (Bank 1) - Fehlfunktion |
| 0x1076 | P1076 | P1076 VVT-Überlastschutz SG-Temperatur (Bank 1) - Input hoch |
| 0x1077 | P1077 | P1077 VVT-Überlastschutz Stellmotortemperatur (Bank 1) - Input hoch |
| 0x1078 | P1078 | P1078 VVT-Überlastschutz Stellmotorstrom (Bank 1) - Input hoch |
| 0x1079 | P1079 | P1079 VVT-Überlastschutz (Bank 2) - Fehlfunktion |
| 0x1080 | P1080 | P1080 VVT-Überlastschutz SG-Temperatur (Bank 2) - Input hoch |
| 0x1081 | P1081 | P1081 VVT-Überlastschutz Stellmotortemperatur (Bank 2) - Input hoch |
| 0x1082 | P1082 | P1082 VVT-Überlastschutz Stellmotorstrom (Bank 2) - Input hoch |
| 0x1083 | P1083 | P1083 Gemischaufbereitung am Regelanschlag (Bank 1, vor Katalysator) - System zu mager |
| 0x1084 | P1084 | P1084 Gemischaufbereitung am Regelanschlag (Bank 1, vor Katalysator) - System zu fett |
| 0x1085 | P1085 | P1085 Gemischaufbereitung am Regelanschlag (Bank 2, vor Katalysator) - System zu mager |
| 0x1086 | P1086 | P1086 Gemischaufbereitung am Regelanschlag (Bank 2, vor Katalysator) - System zu fett |
| 0x1087 | P1087 | P1087 Lambdasonde (Bank 1, vor Katalysator) - langsame Reaktion im Magerbereich der Regelschwingung |
| 0x1088 | P1088 | P1088 Lambdasonde (Bank 1, vor Katalysator) - langsame Reaktion im Fettbereich der Regelschwingung |
| 0x1089 | P1089 | P1089 Lambdasonde (Bank 2, vor Katalysator) - langsame Reaktion im Magerbereich der Regelschwingung |
| 0x1090 | P1090 | P1090 Gemischregelung (Bank 1, vor Katalysator) - System zu mager |
| 0x1091 | P1091 | P1091 Gemischregelung (Bank 2, vor Katalysator) - System zu mager |
| 0x1092 | P1092 | P1092 Gemischregelung (Bank 1, vor Katalysator) - System zu fett |
| 0x1093 | P1093 | P1093 Gemischregelung (Bank 2, vor Katalysator) - System zu fett |
| 0x1094 | P1094 | P1094 Lambdasonde (Bank 2, vor Katalysator) - langsame Reaktion in Fettbereich der Regelschwingung |
| 0x1095 | P1095 | P1095 Lambdasonde Signalkreis (Bank 1, vor Katalysator) - Sprungzeit mager nach fett und fett nach Mager langsame Reaktion |
| 0x1096 | P1096 | P1096 Lambdasonde Signalkreis (Bank 2, vor Katalysator) - Sprungzeit mager nach fett und fett nach mager langsame Reaktion |
| 0x1097 | P1097 | P1097 Lambdasonde (Bank 1, nach Katalysator) - langsame Reaktion nach Schubabschaltphase |
| 0x1098 | P1098 | P1098 Lambdasonde (Bank 2, nach Katalysator) - langsame Reaktion nach Schubabschaltphase |
| 0x1099 | P1099 | P1099 VVT-Wertevergleich Abstellposition/Startposition (Bank 2) - Plausibilitätsfehler |
| 0x1100 | P1100 | P1100 Lambdasonde (Bank 1, vor Katalysator) - langsame Reaktion nach Schubabschaltphase  (S62: Luftmassenmesser - Input hoch) |
| 0x1101 | P1101 | P1101 Lambdasonde (Bank 2, vor Katalysator) - langsame Reaktion nach Schubabschaltphase |
| 0x1102 | P1102 | P1102 Leerlaufregelsystem - Nebenluft Massenstromadaption zu klein |
| 0x1103 | P1103 | P1103 Leerlaufregelsystem - Nebenluft Massenstromadaption zu groß |
| 0x1104 | P1104 | P1104 Differenzdrucksensor Saugrohr (Bank 1) - Druck zu niedrig |
| 0x1105 | P1105 | P1105 Differenzdrucksensor Saugrohr (Bank 1) - Druck zu hoch |
| 0x1106 | P1106 | P1106 Drucksensor Saugrohr - Input zu niedrig bei stehendem Motor |
| 0x1107 | P1107 | P1107 Drucksensor Saugrohr - Input zu niedrig im Leerlauf |
| 0x1108 | P1108 | P1108 Drucksensor Saugrohr - Input zu niedrig bei Volllast bei niedriger Motordrehzahl |
| 0x1109 | P1109 | P1109 Drucksensor Saugrohr - Input zu hoch bei Schub |
| 0x110A | P110A | P110A Differenzdrucksensor Saugrohr (Bank 2) - Druck zu niedrig |
| 0x110B | P110B | P110B Differenzdrucksensor Saugrohr (Bank 2) - Druck zu hoch |
| 0x1110 | P1110 | P1110 Motoröltemperatur - zu hoch |
| 0x1111 | P1111 | P1111 Temperaturfühler Kühleraustritt - Input niedrig |
| 0x1112 | P1112 | P1112 Temperaturfühler Kühleraustritt - Input hoch |
| 0x1113 | P1113 | P1113 Temperaturfühler Kühleraustritt - Input sporadisch |
| 0x1114 | P1114 | P1114 Lambdasonde Signalkreis (Bank 2, vor Katalysator) - Sprungzeit mager nach fett langsame Reaktion |
| 0x1115 | P1115 | P1115 Umgebungstemperaturfühler - Fehlerwert empfangen (M52LEV, S54 bis 09/00: Kühlmitteltemperatursensor - Plausibilitätsfehler) |
| 0x1116 | P1116 | P1116 Luftmassen- oder Luftmengendurchsatz (Bank 2) - Meßbereichs- oder Leistungsproblem |
| 0x1117 | P1117 | P1117 Luftmassen- oder Luftmengendurchsatz (Bank 2) - Input niedrig |
| 0x1118 | P1118 | P1118 Luftmassen- oder Luftmengendurchsatz (Bank 2) - Input hoch |
| 0x1119 | P1119 | P1119 Lambdasonde Signalkreis (Bank 1, vor Katalysator) - Sprungzeit mager nach fett langsame Reaktion |
| 0x1120 | P1120 | P1120 Pedalwertgeber - Fehlfunktion |
| 0x1121 | P1121 | P1121 Pedalwertgeber 1 - Meßbereichs- oder Leistungsproblem |
| 0x1122 | P1122 | P1122 Pedalwertgeber 1 - Input niedrig |
| 0x1123 | P1123 | P1123 Pedalwertgeber 1 - Input hoch |
| 0x1125 | P1125 | P1125 Drosselklappenpotentiometer 1 und 2 - Meßbereichs- oder Leistungsproblem (kleiner Fehler) |
| 0x1126 | P1126 | P1126 Drosselklappenpotentiometer 1 und 2 - Meßbereichs- oder Leistungsproblem (großer Fehler) |
| 0x1127 | P1127 | P1127 Ölniveausensor Signal - Plausibilitätsfehler |
| 0x1128 | P1128 | P1128 Ölniveausensor - kein Signal |
| 0x1129 | P1129 | P1129 Ölniveausensor Signal - Ölstand zu niedrig |
| 0x1130 | P1130 | P1130 Lambdasonde (Bank 1, nach Katalysator) - Dynamikprüfung |
| 0x1131 | P1131 | P1131 Lambdasonde (Bank 2, nach Katalysator) - Dynamikprüfung |
| 0x1132 | P1132 | P1132 Lambdasonde Heizungsschaltkreis (Bank 1, vor Katalysator) - Fehlfunktion |
| 0x1133 | P1133 | P1133 Lambdasonde Heizungsschaltkreis (Bank 2, vor Katalysator) - Fehlfunktion |
| 0x1134 | P1134 | P1134 Lambdasonde Heizungsschaltkreis (Bank 1, vor Katalysator) - Signal sporadisch |
| 0x1135 | P1135 | P1135 Lambdasonde Heizungschaltkreis (Bank 1, vor Katalysator) - Spannung niedrig |
| 0x1136 | P1136 | P1136 Lambdasonde Heizungschaltkreis (Bank 1, vor Katalysator) - Spannung hoch |
| 0x1137 | P1137 | P1137 Lambdasonde Heizungschaltkreis (Bank 1 nach Katalysator) - Signal sporadisch |
| 0x1138 | P1138 | P1138 Lambdasonde Heizungschaltkreis (Bank 1 nach Katalysator) - Spannung niedrig |
| 0x1139 | P1139 | P1139 Lambdasonde Heizungschaltkreis (Bank 1 nach Katalysator) - Spannung hoch |
| 0x1140 | P1140 | P1140 Luftmassen- oder Luftmengendurchsatz - Meßbereichs- oder Leistungsproblem |
| 0x1141 | P1141 | P1141 Wertevergleich Drosselklapenpotentiometer 1/Heißfilmluftmassenmesser |
| 0x1142 | P1142 | P1142 Wertevergleich Drosselklapenpotentiometer 2/Heißfilmluftmassenmesser |
| 0x1143 | P1143 | P1143 Lambdasonde Aktivitätsüberprüfung (Bank 1, nach Katalysator) - Signal zu hoch |
| 0x1144 | P1144 | P1144 Lambdasonde Aktivitätsüberprüfung (Bank 1, nach Katalysator) - Signal zu niedrig |
| 0x1145 | P1145 | P1145 Magnetventil Running Losses Ansteuerung - elektrischer Fehler |
| 0x1146 | P1146 | P1146 Magnetventil Running Losses Ansteuerung - Leitungsunterbrechung |
| 0x1147 | P1147 | P1147 Magnetventil Running Losses Ansteuerung - Input niedrig |
| 0x1148 | P1148 | P1148 Magnetventil Running Losses Ansteuerung - Input hoch |
| 0x1149 | P1149 | P1149 Lambdasonde Aktivitätsüberprüfung (Bank 2, nach Katalysator) - Signal zu hoch |
| 0x1150 | P1150 | P1150 Lambdasonde Aktivitätsüberprüfung (Bank 2, nach Katalysator) - Signal zu niedrig |
| 0x1151 | P1151 | P1151 Lambdasonde Heizungschaltkreis (Bank 2, vor Katalysator) - Signal sporadisch |
| 0x1152 | P1152 | P1152 Lambdasonde Heizungschaltkreis (Bank 2, vor Katalysator) - Spannung niedrig |
| 0x1153 | P1153 | P1153 Lambdasonde Heizungschaltkreis (Bank 2, vor Katalysator) - Spannung hoch |
| 0x1154 | P1154 | P1154 Differenzdrucksensor Saugrohr (Bank 2) - Input hoch |
| 0x1155 | P1155 | P1155 Lambdasonde Heizungschaltkreis (Bank 2, nach Katalysator) - Signal sporadisch |
| 0x1156 | P1156 | P1156 Lambdasonde Heizungschaltkreis (Bank 2, nach Katalysator) - Spannung niedrig |
| 0x1157 | P1157 | P1157 Lambdasonde Heizungschaltkreis (Bank 2, nach Katalysator) - Spannung hoch |
| 0x1158 | P1158 | P1158 Gemischregelung Adaption additiv pro Zeit (Bank 1) - zu klein |
| 0x1159 | P1159 | P1159 Gemischregelung Adaption additiv pro Zeit (Bank 1)  - zu groß |
| 0x1160 | P1160 | P1160 Gemischregelung Adaption additiv pro Zeit (Bank 2)  - zu klein |
| 0x1161 | P1161 | P1161 Gemischregelung Adaption additiv pro Zeit (Bank 2)  - zu groß (M52: Motoröltemperaturfühler - Fehlfunktion) |
| 0x1162 | P1162 | P1162 Gemischregelung Adaption additiv pro Zündung (Bank 1)  - zu klein |
| 0x1163 | P1163 | P1163 Gemischregelung Adaption additiv pro Zündung (Bank 1) - zu groß |
| 0x1164 | P1164 | P1164 Gemischregelung Adaption additiv pro Zündung (Bank 2) - zu klein |
| 0x1165 | P1165 | P1165 Gemischregelung Adaption additiv pro Zündung (Bank 2) - zu groß |
| 0x1166 | P1166 | P1166 Lambdasonden vertauscht |
| 0x1167 | P1167 | P1167 Lambdasonde Heizereinkopplung (Bank 1, vor Katalysator) - Signal zu hoch |
| 0x1168 | P1168 | P1168 Gemischfeinregelung (Bank 1) - Regler Korrekturwert über Schwellwert |
| 0x1169 | P1169 | P1169 Lambdasonde Heizereinkopplung (Bank 2, vor Katalysator) - Signal zu hoch |
| 0x1170 | P1170 | P1170 Gemischfeinregelung (Bank 2) - Regler Korrekturwert über Schwellwert |
| 0x1171 | P1171 | P1171 Umgebungsdrucksensor, Variantenerkennung - Wert im Bootbereich unplausibel |
| 0x1172 | P1172 | P1172 Umgebungsdrucksensor, Variantenerkennung - Fehlerwert im Bootbereich abgelegt |
| 0x1173 | P1173 | P1173 Umgebungsdrucksensor, Variantenerkennung - Lernen fehlgeschlagen |
| 0x1174 | P1174 | P1174 Gemischregelung Adaption additiv pro Zeit (Bank 1) - Fehlfunktion |
| 0x1175 | P1175 | P1175 Gemischregelung Adaption additiv pro Zeit (Bank 2) - Fehlfunktion |
| 0x1176 | P1176 | P1176 Lambdasondenalterung (Bank 1) - Zeitverzögerung |
| 0x1177 | P1177 | P1177 Lambdasondenalterung (Bank 2) - Zeitverzögerung |
| 0x1178 | P1178 | P1178 Lambdasonde Signalkreis (Bank 1, vor Katalysator) - Sprungzeit fett nach mager langsame Reaktion |
| 0x1179 | P1179 | P1179 Lambdasonde Signalkreis (Bank 2, vor Katalysator) - Sprungzeit fett nach mager langsame Reaktion |
| 0x1180 | P1180 | P1180 Lambdasonde Signalkreis (Bank 1, nach Katalysator) - Sprungzeit fett nach mager langsame Reaktion |
| 0x1181 | P1181 | P1181 Lambdasonde Signalkreis (Bank 1, nach Katalysator) - Sprungzeit fett nach mager langsame Reaktion |
| 0x1182 | P1182 | P1182 Lambdasonde (Bank 1, nach Katalysator) - Leitungsunterbrechung bei Schubabschaltung |
| 0x1183 | P1183 | P1183 Lambdasonde (Bank 2, nach Katalysator) - Leitungsunterbrechung bei Schubabschaltung |
| 0x1184 | P1184 | P1184 Beheizte Lambdasonde Spannungshub (Bank 1, vor Katalysator) - elektrischer Fehler |
| 0x1185 | P1185 | P1185 Beheizte Lambdasonde Spannungshub (Bank 2, vor Katalysator) - elektrischer Fehler |
| 0x1186 | P1186 | P1186 Lambdasonde Heizungsschaltkreis (Bank 1, nach Katalysator) - Fehlfunktion |
| 0x1187 | P1187 | P1187 Lambdasonde Heizungsschaltkreis (Bank 2, nach Katalysator) - Fehlfunktion |
| 0x1188 | P1188 | P1188 Gemischaufbereitung am Regelanschlag (Bank 1, vor Katalysator) - Fehlfunktion |
| 0x1189 | P1189 | P1189 Gemischaufbereitung am Regelanschlag (Bank 2 , vor Katalysator) - Fehlfunktion |
| 0x1190 | P1190 | P1190 Gemischregelung (Bank 1, vor Katalysator) - Fehlfunktion |
| 0x1191 | P1191 | P1191 Gemischregelung (Bank 2, vor Katalysator) - Fehlfunktion |
| 0x1192 | P1192 | P1192 Gemischfeinregelung (Bank 1, nach Katalysator) - Fehlfunktion |
| 0x1193 | P1193 | P1193 Gemischfeinregelung (Bank 2, nach Katalysator) - Fehlfunktion |
| 0x1195 | P1195 | P1195 Differenzdrucksensor Saugrohr (Bank 2) - Druck Plausibilitätsfehler |
| 0x1196 | P1196 | P1196 Differenzdrucksensor Saugrohr (Bank 2) - Input niedrig |
| 0x1197 | P1197 | P1197 Differenzdrucksensor Saugrohr (Bank 1) - Input hoch |
| 0x1198 | P1198 | P1198 Differenzdrucksensor Saugrohr (Bank 1) - Input niedrig |
| 0x1199 | P1199 | P1199 Differenzdrucksensor Saugrohr (Bank 1) - Druck Plausibilitätsfehler |
| 0x1200 | P1200 | P1200 Gemischregelung oberer Adaptionsbereich (Bank 1) - System zu mager |
| 0x1201 | P1201 | P1201 Gemischregelung oberer Adaptionsbereich (Bank 1) - System zu fett |
| 0x1202 | P1202 | P1202 Gemischregelung oberer Adaptionsbereich (Bank 2) - System zu mager |
| 0x1203 | P1203 | P1203 Gemischregelung oberer Adaptionsbereich (Bank 2) - System zu fett |
| 0x1204 | P1204 | P1204 Lambdasonde (Bank 1, nach Katalysator) Volllastprüfung - Signal zu niedrig |
| 0x1205 | P1205 | P1205 Lambdasonde (Bank 2, nach Katalysator) Volllastprüfung - Signal zu niedrig |
| 0x1206 | P1206 | P1206 Saugstrahlpumpe Absperrventil - Input niedrig |
| 0x1207 | P1207 | P1207 Saugstrahlpumpe Absperrventil - Input hoch |
| 0x1208 | P1208 | P1208 Saugstrahlpumpe Absperrventil - Leitungsunterbrechung |
| 0x1209 | P1209 | P1209 Saugstrahlpumpe Absperrventil - Plausibilitätsfehler |
| 0x1210 | P1210 | P1210 Lambdasonde (Bank 1, vor Katalysator) - begrenzter Spannungshub |
| 0x1211 | P1211 | P1211 Lambdasonde (Bank 2, vor Katalysator) - begrenzter Spannungshub |
| 0x1212 | P1212 | P1212 Abgasrückführsteller - Input hoch |
| 0x1213 | P1213 | P1213 Abgasrückführsteller - Input niedrig |
| 0x1214 | P1214 | P1214 Kraftstoffpumpe - Drehzahl zu hoch |
| 0x1215 | P1215 | P1215 Kraftstoffpumpe - Drehzahl zu niedrig |
| 0x1216 | P1216 | P1216 Kraftstoffpumpe - Notlauf |
| 0x1217 | P1217 | P1217 Kraftstoffpumpe - Übertemperatur |
| 0x1218 | P1218 | P1218 Drosselklappenpotentiometer 1 (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x1219 | P1219 | P1219 Drosselklappenpotentiometer 1 (Bank 2) - Meßbereichs- oder Leistungsproblem |
| 0x1220 | P1220 | P1220 Drosselklappenpotentiometer 1 (Bank 2) - Input niedrig |
| 0x1221 | P1221 | P1221 Pedalwertgeber 2 - Meßbereichs- oder Leistungsproblem |
| 0x1222 | P1222 | P1222 Pedalwertgeber 2 - Input niedrig |
| 0x1223 | P1223 | P1223 Pedalwertgeber 2 - Input hoch |
| 0x1224 | P1224 | P1224 Pedalwertgeber 1 und 2 - Meßbereichs- oder Leistungsproblem |
| 0x1225 | P1225 | P1225 Drosselklappenpotentiometer 1 (Bank 2) - Input hoch |
| 0x1226 | P1226 | P1226 Drosselklappe - Fehlfunktion (Klappenfehlfunktion) |
| 0x1227 | P1227 | P1227 Drosselklappenpotentiometer 2 (Bank 2) - Meßbereichs- oder Leistungsproblem |
| 0x1228 | P1228 | P1228 Drosselklappenpotentiometer 2 (Bank 2) - Input niedrig |
| 0x1229 | P1229 | P1229 Drosselklappenpotentiometer - Adaptionsfehler |
| 0x1230 | P1230 | P1230 Kraftstoffpumpen-Relais Primärkreis - Fehlfunktion |
| 0x1231 | P1231 | P1231 Kraftstoffpumpe 2 - Signal niedrig |
| 0x1232 | P1232 | P1232 Kraftstoffpumpe 2 - Signal hoch |
| 0x1233 | P1233 | P1233 Kraftstoffpumpe 2 - Signal sporadisch |
| 0x1234 | P1234 | P1234 Kraftstoffpumpen-Relais Primärkreis - Input niedrig |
| 0x1235 | P1235 | P1235 Drucksensor Saugrohr vor Kompressor - Input sporadisch |
| 0x1236 | P1236 | P1236 Kraftstoffpumpen-Relais Primärkreis - Input hoch |
| 0x1237 | P1237 | P1237 Drucksensor Saugrohr vor Kompressor - Input niedrig |
| 0x1238 | P1238 | P1238 Drucksensor Saugrohr vor Kompressor - Input  hoch |
| 0x1239 | P1239 | P1239 Drucksensor Saugrohr vor Kompressor - Input zu niedrig bei stehendem Motor |
| 0x1240 | P1240 | P1240 Drucksensor Saugrohr vor Kompressor - Input zu niedrig im Leerlauf |
| 0x1241 | P1241 | P1241 Drucksensor Saugrohr vor Kompressor - Input zu niedrig bei Volllast bei niedriger Motordrehzahl |
| 0x1242 | P1242 | P1242 Drucksensor Saugrohr vor Kompressor - Input zu hoch bei Schub |
| 0x1243 | P1243 | P1243 Drosselklappenpotentiometer 2 (Bank 2) - Input hoch |
| 0x1244 | P1244 | P1244 Kraftstoffpumpe - Notabschaltung |
| 0x1245 | P1245 | P1245 Ladelufttemperaturfühler - Input hoch |
| 0x1246 | P1246 | P1246 Ladelufttemperaturfühler - Input niedrig |
| 0x1247 | P1247 | P1247 Umgebungsdruck - Plausibilitätsfehler |
| 0x1249 | P1249 | P1249 Kraftstoffvolumenregler (Bank 2) - Leitungsunterbrechung |
| 0x1251 | P1251 | P1251 Ladedrucksteller - Input hoch |
| 0x1252 | P1252 | P1252 Ladedrucksteller - Input niedrig |
| 0x1253 | P1253 | P1253 Ladedrucksteller - Leitungsunterbrechung |
| 0x1254 | P1254 | P1254 Ladedrucksteller Endstufe - Übertemperatur |
| 0x1256 | P1256 | P1256 Ladedrucksteller (Bank 2) - Input hoch |
| 0x1257 | P1257 | P1257 Ladedrucksteller (Bank 2) - Input niedrig |
| 0x1258 | P1258 | P1258 Ladedrucksteller (Bank 2) - Leitungsunterbrechung |
| 0x1259 | P1259 | P1259 Ladedrucksteller Endstufe (Bank 2) - Übertemperatur |
| 0x1261 | P1261 | P1261 Luftmassen- oder Luftmengendurchsatz - zu groß im Leerlauf |
| 0x1262 | P1262 | P1262 Luftmassen- oder Luftmengendurchsatz - zu groß in Volllast |
| 0x1263 | P1263 | P1263 Luftmassen- oder Luftmengendurchsatz (Bank 2) - zu groß im Leerlauf |
| 0x1264 | P1264 | P1264 Luftmassen- oder Luftmengendurchsatz (Bank 2) - zu groß in Volllast |
| 0x1265 | P1265 | P1265 Abgasrückführsteller (Bank 2) - Input hoch |
| 0x1266 | P1266 | P1266 Abgasrückführsteller (Bank 2) - Input niedrig |
| 0x1267 | P1267 | P1267 Abgasrückführsteller (Bank 2) - Leitungsunterbrechung |
| 0x1268 | P1268 | P1268 Abgasrückführsteller Endstufe (Bank 2) - Übertemperatur |
| 0x1269 | P1269 | P1269 Abgasrückführsteller Endstufe - Übertemperatur |
| 0x1270 | P1270 | P1270 Steuergeräte-Selbsttest, Momentüberwachung (M73: Luftmassenmesser Bankvergleich - Plausibilitätsfehler) |
| 0x1271 | P1271 | P1271 Umgebungsdrucksensor - elektrischer Fehler (M73: Höhendrucksensor / Ladedrucksensor Wertevergleich - Plausibilitätsfehler) |
| 0x1272 | P1272 | P1272 Ladedrucksteller (Bank 1) - elektrisch oder mechanisch defekt |
| 0x1273 | P1273 | P1273 Ladedrucksteller (Bank 1) - Ansteuersignal unplausibel |
| 0x1274 | P1274 | P1274 Ladedrucksteller (Bank 1) - Versorgungsspannung zu niedrig |
| 0x1275 | P1275 | P1275 Ladedrucksteller (Bank 2) - elektrisch oder mechanisch defekt |
| 0x1276 | P1276 | P1276 Ladedrucksteller (Bank 2) - Ansteuersignal unplausibel |
| 0x1277 | P1277 | P1277 Ladedrucksteller (Bank 2) - Versorgungsspannung zu niedrig |
| 0x1278 | P1278 | P1278 Laufruheregler -  Korrekturmenge zu hoch |
| 0x1279 | P1279 | P1279 Laufruheregler - Korrekturmenge zu niedrig |
| 0x1280 | P1280 | P1280 Luftumfasstes Einspritzsystem (Bank 1) - Fehlfunktion |
| 0x1281 | P1281 | P1281 Kraftstoffvolumenregler (Bank 2) - Input niedrig |
| 0x1282 | P1282 | P1282 Kraftstoffvolumenregler (Bank 2) - Input hoch |
| 0x1283 | P1283 | P1283 Schaltventil für luftumfasste Einspritzventile (Bank 1) Ansteuerung - elektrischer Fehler |
| 0x1284 | P1284 | P1284 Schaltventil für luftumfasste Einspritzventile (Bank 1) Ansteuerung - Signal niedrig |
| 0x1285 | P1285 | P1285 Schaltventil für luftumfasste Einspritzventile (Bank 1) Ansteuerung - Signal hoch |
| 0x1286 | P1286 | P1286 Abgasrückführsteller - Leitungsunterbrechung |
| 0x1287 | P1287 | P1287 Schaltventil für luftumfasste Einspritzventile (Bank 2) Ansteuerung - elektrischer Fehler |
| 0x1288 | P1288 | P1288 Schaltventil für luftumfasste Einspritzventile (Bank 2) Ansteuerung - Signal niedrig |
| 0x1289 | P1289 | P1289 Schaltventil für luftumfasste Einspritzventile (Bank 2) Ansteuerung - Signal hoch |
| 0x1291 | P1291 | P1291 Kraftstoffvolumenregler Endstufe - Übertemperatur  |
| 0x1292 | P1292 | P1292 Füllungsbegrenzung - Plausibilitätsfehler |
| 0x1293 | P1293 | P1293 Füllungsbegrenzung - Lambda zu fett |
| 0x1294 | P1294 | P1294 Füllungsbegrenzung - Überlast Hochdruckpumpe |
| 0x1296 | P1296 | P1296 Ladedruckregelung - Ladedruck zu hoch |
| 0x1297 | P1297 | P1297 Ladedruckregelung - Ladedruck zu niedrig  |
| 0x1301 | P1301 | P1301 Zündkreisüberwachung Zyl. 1 - Brenndauer zu klein |
| 0x1302 | P1302 | P1302 Zündkreisüberwachung Zyl. 2 - Brenndauer zu klein |
| 0x1303 | P1303 | P1303 Zündkreisüberwachung Zyl. 3 - Brenndauer zu klein |
| 0x1304 | P1304 | P1304 Zündkreisüberwachung Zyl. 4 - Brenndauer zu klein |
| 0x1305 | P1305 | P1305 Zündkreisüberwachung Zyl. 5 - Brenndauer zu klein |
| 0x1306 | P1306 | P1306 Zündkreisüberwachung Zyl. 6 - Brenndauer zu klein |
| 0x1307 | P1307 | P1307 Zündkreisüberwachung Zyl. 7 - Brenndauer zu klein |
| 0x1308 | P1308 | P1308 Zündkreisüberwachung Zyl. 8 - Brenndauer zu klein |
| 0x1309 | P1309 | P1309 Zündkreisüberwachung Zyl. 9 - Brenndauer zu klein |
| 0x1310 | P1310 | P1310 Zündkreisüberwachung Zyl. 10 - Brenndauer zu klein |
| 0x1311 | P1311 | P1311 Zündkreisüberwachung Zyl. 11 - Brenndauer zu klein |
| 0x1312 | P1312 | P1312 Zündkreisüberwachung Zyl. 12 - Brenndauer zu klein |
| 0x1313 | P1313 | P1313 Nockenwellenversteller Einlass - Plausibilitätsfehler (S54 bis 09/00: Nockenwellengeber Auslass (Bank 1 ) - Input sporadisch) |
| 0x1314 | P1314 | P1314 Gemischabweichung entdeckt bei niedrigem Kraftstoffstand |
| 0x1315 | P1315 | P1315 Nockenwellengeber Einlass (Bank 1) - Signaldauer nach Initialisierung |
| 0x1316 | P1316 | P1316 Nockenwellengeber Einlass (Bank 1) - Signaldauer während Initialisierung |
| 0x1317 | P1317 | P1317 Nockenwellenversteller Auslass - Plausibilitätsfehler |
| 0x1318 | P1318 | P1318 Nockenwellengeber Auslass (Bank 1) - Signaldauer nach Initialisierung |
| 0x1319 | P1319 | P1319 Nockenwellengeber Auslass (Bank 1) - Signaldauer während Initialisierung |
| 0x1320 | P1320 | P1320 Schwungradadaption für Aussetzererkennung - Meßbereichsproblem |
| 0x1321 | P1321 | P1321 Schwungradadaption für Aussetzererkennung - Leistungsproblem |
| 0x1322 | P1322 | P1322 Nockenwelle Einlass (Bank 1) - Abstellposition nicht erreicht |
| 0x1323 | P1323 | P1323 Nockenwelle Einlass (Bank 1) - Startposition nicht erreicht |
| 0x1324 | P1324 | P1324 Nockenwelle Auslass (Bank 1) - Abstellposition nicht erreicht |
| 0x1325 | P1325 | P1325 Nockenwelle Auslass (Bank 1) - Startposition nicht erreicht |
| 0x1326 | P1326 | P1326 Nockenwellensteuerung Einlass (Bank 1) - Referenzposition außerhalb Gültigkeitsbereich |
| 0x1327 | P1327 | P1327 Klopfsensor 2 (Bank 1) - Input niedrig |
| 0x1328 | P1328 | P1328 Klopfsensor 2 (Bank 1) - Input hoch |
| 0x1329 | P1329 | P1329 Klopfsensor 3 - Input niedrig |
| 0x1330 | P1330 | P1330 Klopfsensor 3 - Input hoch |
| 0x1331 | P1331 | P1331 Nockenwellensteuerung Auslass (Bank 1) - Referenzposition außerhalb Gültigkeitsbereich |
| 0x1332 | P1332 | P1332 Klopfsensor 4 - Input niedrig |
| 0x1333 | P1333 | P1333 Klopfsensor 4 - Input hoch |
| 0x1334 | P1334 | P1334 Klopfsensor 5 - Input niedrig |
| 0x1335 | P1335 | P1335 Klopfsensor 5 - Input hoch |
| 0x1336 | P1336 | P1336 Klopfsensor 6 - Input niedrig |
| 0x1337 | P1337 | P1337 Klopfsensor 6 - Input hoch |
| 0x1338 | P1338 | P1338 Nockenwellengeber Einlass (Bank 1) - Phasenposition fehlerhaft |
| 0x1339 | P1339 | P1339 Nockenwellengeber Auslass (Bank 1) - Phasenposition fehlerhaft |
| 0x1340 | P1340 | P1340 Aussetzer im Start - Mehrfachfehler |
| 0x1341 | P1341 | P1341 Aussetzer mit Kraftstoffabschaltung - Mehrfachfehler |
| 0x1342 | P1342 | P1342 Aussetzer im Start Zylinder 1 |
| 0x1343 | P1343 | P1343 Aussetzer mit Kraftstoffabschaltung Zylinder 1 |
| 0x1344 | P1344 | P1344 Aussetzer im Start Zylinder 2 |
| 0x1345 | P1345 | P1345 Aussetzer mit Kraftstoffabschaltung Zylinder 2 |
| 0x1346 | P1346 | P1346 Aussetzer im Start Zylinder 3 |
| 0x1347 | P1347 | P1347 Aussetzer mit Kraftstoffabschaltung Zylinder 3 |
| 0x1348 | P1348 | P1348 Aussetzer im Start Zylinder 4 |
| 0x1349 | P1349 | P1349 Aussetzer mit Kraftstoffabschaltung Zylinder 4 |
| 0x1350 | P1350 | P1350 Aussetzer im Start Zylinder 5 |
| 0x1351 | P1351 | P1351 Aussetzer mit Kraftstoffabschaltung Zylinder 5 |
| 0x1352 | P1352 | P1352 Aussetzer im Start Zylinder 6 |
| 0x1353 | P1353 | P1353 Aussetzer mit Kraftstoffabschaltung Zylinder 6 |
| 0x1354 | P1354 | P1354 Aussetzer im Start Zylinder 7 |
| 0x1355 | P1355 | P1355 Aussetzer mit Kraftstoffabschaltung Zylinder 7 |
| 0x1356 | P1356 | P1356 Aussetzer im Start Zylinder 8 |
| 0x1357 | P1357 | P1357 Aussetzer mit Kraftstoffabschaltung Zylinder 8 |
| 0x1358 | P1358 | P1358 Aussetzer im Start Zylinder 9 |
| 0x1359 | P1359 | P1359 Aussetzer mit Kraftstoffabschaltung Zylinder 9 |
| 0x1360 | P1360 | P1360 Aussetzer im Start Zylinder 10 |
| 0x1361 | P1361 | P1361 Aussetzer mit Kraftstoffabschaltung Zylinder 10 |
| 0x1362 | P1362 | P1362 Aussetzer im Start Zylinder 11 |
| 0x1363 | P1363 | P1363 Aussetzer mit Kraftstoffabschaltung Zylinder 11 |
| 0x1364 | P1364 | P1364 Aussetzer im Start Zylinder 12 |
| 0x1365 | P1365 | P1365 Aussetzer mit Kraftstoffabschaltung Zylinder 12 |
| 0x1366 | P1366 | P1366 Zündspule 1 Primär-/Sekundärkreis - Input niedrig |
| 0x1367 | P1367 | P1367 Zündspule 2 Primär-/Sekundärkreis - Input niedrig |
| 0x1377 | P1377 | P1377 Nockenwellengeber - Masternockenwellengeber nicht definiert |
| 0x1378 | P1378 | P1378 Steuergeräte-Selbsttest, Klopfregelung Offset (Bank 2) |
| 0x1379 | P1379 | P1379 Steuergeräte-Selbsttest, Klopfregelung Testimpuls (Bank 2) |
| 0x1380 | P1380 | P1380 Steuergeräte-Selbsttest, Klopfregelung Nulltest (Bank 2) |
| 0x1381 | P1381 | P1381 Steuergeräte-Selbsttest, Klopfregelung Offset (Bank 1) |
| 0x1382 | P1382 | P1382 Steuergeräte-Selbsttest, Klopfregelung Testimpuls (Bank 1) |
| 0x1383 | P1383 | P1383 Zündkreisüberwachung - Fehlfunktion |
| 0x1384 | P1384 | P1384 Klopfsensor 3 - Fehlfunktion |
| 0x1385 | P1385 | P1385 Klopfsensor 4 - Fehlfunktion |
| 0x1386 | P1386 | P1386 Steuergeräte-Selbsttest, Klopfregelung Nulltest (Bank 1) |
| 0x1396 | P1396 | P1396 Kurbelwellengeber Segmentzeitmessung - Plausibilitätsfehler |
| 0x1397 | P1397 | P1397 Nockenwellengeber Auslass (Bank 1) - Fehlfunktion |
| 0x1400 | P1400 | P1400 E-Katalysator (Bank 1) - Batteriespannung oder Strom zu gering beim Heizen |
| 0x1401 | P1401 | P1401 E-Katalysator (Bank 1) - Strom zu groß beim Heizen |
| 0x1402 | P1402 | P1402 E-Katalysator Leistungsschalter (Bank 1) - Übertemperatur |
| 0x1403 | P1403 | P1403 Aktivkohlefilterabsperrventil Ansteuerung - elektrischer Fehler (M73: E-Katalysator (Bank 2) - Batteriespannung oder Strom zu gering beim Heizen) |
| 0x1404 | P1404 | P1404 E-Katalysator (Bank 2) - Strom zu groß beim Heizen |
| 0x1405 | P1405 | P1405 E-Katalysator Leistungsschalter (Bank 2) - Übertemperatur |
| 0x1406 | P1406 | P1406 E-Katalysator Steuergerät - interner Prüfsummenfehler/ROM |
| 0x1407 | P1407 | P1407 Kraftstoff-Füllstandssignal 1 - Signal fehlerhaft |
| 0x1408 | P1408 | P1408 Kraftstoff-Füllstandssignal 2 - Signal fehlerhaft |
| 0x1409 | P1409 | P1409 Kraftstoff-Füllstand - CAN Fehler |
| 0x140A | P140A | P140A Sekundärluftsystem - Durchsatz Summe (Bank 1 und Bank 2) zu gering |
| 0x140B | P140B | P140B Sekundärluftsystem - Durchsatz Summe (Bank 1 und Bank 2) zu gering und Durchsatz Bank 1 zu gering |
| 0x140C | P140C | P140C Sekundärluftsystem - Durchsatz Summe (Bank 1 und Bank 2) zu gering und Durchsatz Bank 2 zu gering |
| 0x1410 | P1410 | P1410 Kraftstoff-Füllstandssignal - Plausibilitätsfehler |
| 0x1411 | P1411 | P1411 Sekundärluftpumpe - keine Aktivität festzustellen |
| 0x1412 | P1412 | P1412 Sekundärluftpumpe/Sekundärluftventil - grobe Undichtigkeit |
| 0x1413 | P1413 | P1413 Sekundärluftpumpenrelais - Signal niedrig |
| 0x1414 | P1414 | P1414 Sekundärluftpumpenrelais - Signal hoch |
| 0x1415 | P1415 | P1415 Luftmassen- oder Luftmengendurchsatz - zu gering |
| 0x1416 | P1416 | P1416 Sekundärluftventil - klemmt offen |
| 0x1418 | P1418 | P1418 Sekundärluftventil/Sekundärluftschlauch - blockiert |
| 0x1419 | P1419 | P1419 Sekundärluftmassenmesser - Fehlfunktion |
| 0x141A | P141A | P141A Abgasklappe 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x141B | P141B | P141B Abgasklappe 2 - Meßbereichs- oder Leistungsproblem |
| 0x141C | P141C | P141C Abgasklappe 2 - Input niedrig |
| 0x141D | P141D | P141D Abgasklappe 2 - Input hoch |
| 0x141E | P141E | P141E Abgasklappe 2 - Input sporadisch |
| 0x1420 | P1420 | P1420 Sekundärluftventil - elektrischer Fehler |
| 0x1421 | P1421 | P1421 Sekundärluftsystem System (Bank 2) - Fehlfunktion |
| 0x1423 | P1423 | P1423 Sekundärluftsystem System (Bank 1) - Fehlfunktion |
| 0x1425 | P1425 | P1425 Drallklappe - Input hoch |
| 0x1426 | P1426 | P1426 Drallklappe - Input niedrig |
| 0x1427 | P1427 | P1427 Drallklappe - Leitungsunterbrechung |
| 0x1428 | P1428 | P1428 Drallklappe Endstufe - Übertemperatur |
| 0x1429 | P1429 | P1429 Diagnosemodul Tankleckage (DM-TL) Heizung - Fehlfunktion oder Leitungsunterbrechung |
| 0x1430 | P1430 | P1430 Diagnosemodul Tankleckage (DM-TL) Heizung - Input niedrig |
| 0x1431 | P1431 | P1431 Diagnosemodul Tankleckage (DM-TL) Heizung - Input hoch |
| 0x1432 | P1432 | P1432 Sekundärluftsystem - Durchsatzfehler erkannt |
| 0x1434 | P1434 | P1434 Diagnosemodul Tankleckage (DM-TL) - Fehlfunktion |
| 0x1436 | P1436 | P1436 Leckdiagnosepumpe - Leitungsunterbrechung |
| 0x1437 | P1437 | P1437 Leckdiagnosepumpe - Meßbereichs- oder Leistungsproblem |
| 0x1438 | P1438 | P1438 Tankentlüftungsventil - Leitungsunterbrechung |
| 0x1439 | P1439 | P1439 Tankentlüftungsventil - Signal niedrig |
| 0x1440 | P1440 | P1440 Tankentlüftungsventil - Signal hoch |
| 0x1441 | P1441 | P1441 Leckdiagnosepumpe - Leitungsunterbrechung |
| 0x1442 | P1442 | P1442 Leckdiagnosepumpe - Signal niedrig |
| 0x1443 | P1443 | P1443 Leckdiagnosepumpe - Signal hoch |
| 0x1444 | P1444 | P1444 Diagnosemodul Tankleckage (DM-TL) Pumpe - Leitungsunterbrechung |
| 0x1445 | P1445 | P1445 Diagnosemodul Tankleckage (DM-TL) Pumpe - Signal niedrig |
| 0x1446 | P1446 | P1446 Diagnosemodul Tankleckage (DM-TL) Pumpe - Signal hoch |
| 0x1447 | P1447 | P1447 Diagnosemodul Tankleckage (DM-TL) - Pumpenstrom bei Ventilprüfung zu groß |
| 0x1448 | P1448 | P1448 Diagnosemodul Tankleckage (DM-TL) - Pumpenstrom zu klein |
| 0x1449 | P1449 | P1449 Diagnosemodul Tankleckage (DM-TL) - Pumpenstrom zu groß |
| 0x1450 | P1450 | P1450 Diagnosemodul Tankleckage (DM-TL) Ventil - Leitungsunterbrechung |
| 0x1451 | P1451 | P1451 Diagnosemodul Tankleckage (DM-TL) Ventil - Signal niedrig |
| 0x1452 | P1452 | P1452 Diagnosemodul Tankleckage (DM-TL) Ventil - Signal hoch |
| 0x1453 | P1453 | P1453 Sekundärluftpumpenrelais - elektrischer Fehler |
| 0x1454 | P1454 | P1454 Sekundärluftpumpe mit Vorwiderstand - elektrischer Fehler |
| 0x1456 | P1456 | P1456 E-Katalysator Heizung Leistungspfad (Bank 1) - Leitungsunterbrechung |
| 0x1457 | P1457 | P1457 E-Katalysator Temperaturfühler Leistungsschalter (Bank 1) - elektrischer Fehler |
| 0x1459 | P1459 | P1459 E-Katalysator Heizung Leistungspfad (Bank 2) - Leitungsunterbrechung |
| 0x1460 | P1460 | P1460 E-Katalysator Temperaturfühler Leistungsschalter (Bank 2) - elektrischer Fehler |
| 0x1461 | P1461 | P1461 E-Katalysator Gatespannung - Signal niedrig |
| 0x1462 | P1462 | P1462 E-Katalysator Steuergerät - interner Prüfsummenfehler/EEPROM |
| 0x1463 | P1463 | P1463 E-Katalysator Batterietemperaturfühler 1 - elektrischer Fehler |
| 0x1464 | P1464 | P1464 E-Katalysator Batterietemperaturfühler 2 - elektrischer Fehler |
| 0x1465 | P1465 | P1465 E-Katalysator Batterietemperaturfühler 1 oder 2 - Plausibilitätsfehler |
| 0x1466 | P1466 | P1466 E-Katalysator Temperaturfühler Leistungsschalter - Plausibilitätsfehler |
| 0x1467 | P1467 | P1467 E-Katalysator Vergleich der Batteriespannungen der Leistungsschalter - Plausibilitätsfehler |
| 0x1468 | P1468 | P1468 E-Katalysator Batterietrennschalter - Plausibilitätsfehler |
| 0x1470 | P1470 | P1470 Leckdiagnosepumpe Ansteuerung - elektrischer Fehler |
| 0x1471 | P1471 | P1471 Leckdiagnosepumpe - Leitungsunterbrechung |
| 0x1472 | P1472 | P1472 Diagnosemodul Tankleckage (DM-TL) Ventil Ansteuerung - elektrischer Fehler |
| 0x1473 | P1473 | P1473 Diagnosemodul Tankleckage (DM-TL) - Pumpenstrom Plausibilitätsfehler |
| 0x1474 | P1474 | P1474 Leckdiagnosepumpe Reed Switch - schließt nicht |
| 0x1475 | P1475 | P1475 Leckdiagnosepumpe Reed Switch - nicht geschlossen |
| 0x1476 | P1476 | P1476 Leckdiagnosepumpe - blockierte Leitung (M52 MJ99/00: Leckdiagnosepumpe Reed Switch - Fehlfunktion) |
| 0x1477 | P1477 | P1477 Leckdiagnosepumpe Reed Switch - öffnet nicht |
| 0x1478 | P1478 | P1478 Tankentlüftungssystem - sehr kleines Leck entdeckt |
| 0x1481 | P1481 | P1481 Motorlüfter Relais 1 - Input niedrig |
| 0x1482 | P1482 | P1482 Motorlüfter Relais 1 - Input hoch |
| 0x1483 | P1483 | P1483 Diagnosemodul Tankleckage (DM-TL) Heizung - Input hoch |
| 0x1484 | P1484 | P1484 Motorlüfter Relais 2 - Input niedrig |
| 0x1485 | P1485 | P1485 Motorlüfter Relais 2 - Input hoch |
| 0x1487 | P1487 | P1487 Motorlüfter Relais 3 - Input niedrig |
| 0x1488 | P1488 | P1488 Motorlüfter Relais 3 - Input hoch |
| 0x1490 | P1490 | P1490 Abgastemperaturfühler 1 - elektrischer Fehler |
| 0x1491 | P1491 | P1491 Abgasrückführung (Bank 2) - Durchsatz zu gering |
| 0x1492 | P1492 | P1492 Abgasrückführung (Bank 2) - Durchsatz zu groß |
| 0x1495 | P1495 | P1495 Umgebungsdrucksensor - elektrischer Fehler |
| 0x1497 | P1497 | P1497 Leckluft nach Drosselklappe |
| 0x1498 | P1498 | P1498 Leckluft nach Kompressor |
| 0x1499 | P1499 | P1499 Luftfilter - Leckage |
| 0x14A0 | P14A0 | P14A0 Abgasgegendrucksensor (Bank 1, vor Partikelfilter) - Input niedrig |
| 0x14A1 | P14A1 | P14A1 Abgasgegendrucksensor (Bank 1, vor Partikelfilter) - Input hoch |
| 0x14A2 | P14A2 | P14A2 Abgasgegendrucksensor (Bank 1, vor Partikelfilter) - Meßbereichs- oder Leistungsproblem |
| 0x14A3 | P14A3 | P14A3 Abgasgegendrucksensor (Bank 1, vor Partikelfilter) / Ladedrucksensor / Umgebungsdrucksensor - Korrelationsfehler  |
| 0x14A4 | P14A4 | P14A4 Abgastemperaturfühler (Bank 1, vor Dieselpartikelfilter) - Input niedrig |
| 0x14A5 | P14A5 | P14A5 Abgastemperaturfühler (Bank 1, vor Dieselpartikelfilter) - Input hoch |
| 0x14A6 | P14A6 | P14A6 Partikelfilter (Bank 1) - Strömungswiderstand niedrig |
| 0x14A7 | P14A7 | P14A7 Partikelfilter (Bank 1) - Strömungswiderstand hoch |
| 0x1500 | P1500 | P1500 Leerlaufsteller - klemmt offen |
| 0x1501 | P1501 | P1501 Leerlaufsteller - klemmt geschlossen |
| 0x1502 | P1502 | P1502 Leerlaufsteller schließende Spule - Signal hoch |
| 0x1503 | P1503 | P1503 Leerlaufsteller schließende Spule - Signal niedrig |
| 0x1504 | P1504 | P1504 Leerlaufsteller schließende Spule - Leitungsunterbrechung |
| 0x1505 | P1505 | P1505 Leerlaufsteller schließende Spule - elektrischer Fehler |
| 0x1506 | P1506 | P1506 Leerlaufsteller öffnende Spule - Signal hoch |
| 0x1507 | P1507 | P1507 Leerlaufsteller öffnende Spule - Signal niedrig |
| 0x1508 | P1508 | P1508 Leerlaufsteller öffnende Spule - Leitungsunterbrechung |
| 0x1509 | P1509 | P1509 Leerlaufsteller öffnende Spule - elektrischer Fehler |
| 0x150A | P150A | P150A Batteriesensor BSD (Bitserielle Datenschnittstelle) erweiterte Kommunikation - Fehlfunktion |
| 0x150B | P150B | P150B Batteriesensor BSD (Bitserielle Datenschnittstelle) Kommunikation - Fehlfunktion |
| 0x150C | P150C | P150C Batteriesensor - Firmware unplausibel |
| 0x150D | P150D | P150D Batteriesensor - Temperaturfehler |
| 0x150E | P150E | P150E Batteriesensor - Spannungsfehler |
| 0x150F | P150F | P150F Batteriesensor - Stromfehler |
| 0x1510 | P1510 | P1510 Leerlaufsteller - klemmt offen oder geschlossen |
| 0x1511 | P1511 | P1511 DISA (differenzierte Sauganlage) - elektrischer Fehler |
| 0x1512 | P1512 | P1512 DISA (differenzierte Sauganlage) - Signal niedrig |
| 0x1513 | P1513 | P1513 DISA (differenzierte Sauganlage) - Signal hoch |
| 0x1514 | P1514 | P1514 Gaspedal und Bremspedal - Plausibilitätsfehler |
| 0x1515 | P1515 | P1515 Zeitgeber extern - Plausibilitätsfehler |
| 0x1517 | P1517 | P1517 Schlechtwegstreckenerkennung - Radrehzahl kein Signal |
| 0x1518 | P1518 | P1518 Schlechtwegstreckenerkennung - Raddrehzahl zu hoch |
| 0x1519 | P1519 | P1519 Motorölqualitätssensor Temperaturmessung - Fehlfunktion (M62/M52/S52: Nockenwellenversteller Einlass Bank 1 - Fehlfunktion) |
| 0x151A | P151A | P151A Batteriesensor - Klemme 15/30 Wakeup Fehlfunktion |
| 0x151B | P151B | P151B Batteriesensor - Wakeup Fehlfunktion |
| 0x151C | P151C | P151C Batteriesensor - Systemfehler |
| 0x1520 | P1520 | P1520 Motorölqualitätssensor Niveaumessung - Fehlfunktion (M52: Nockenwellenversteller Auslass Bank 1 - Fehlfunktion) |
| 0x1521 | P1521 | P1521 Motorölqualitätssensor - Kommunikationsfehler |
| 0x1522 | P1522 | P1522 Motorölqualitätssensor Permeabilitätsmessung - Fehlfunktion (M62: Nockenwellenversteller Einlass Bank 2 - Fehlfunktion; M52: Nockenwellenversteller Einlass - schwergängig oder blockiert) |
| 0x1523 | P1523 | P1523 Nockenwellenversteller Einlass (Bank 1) - Signal niedrig (M52: Nockenwellenversteller Auslass - schwergängig oder blockiert) |
| 0x1524 | P1524 | P1524 Nockenwellenversteller Einlass (Bank 1) - Signal hoch |
| 0x1525 | P1525 | P1525 Nockenwellenversteller Einlass (Bank 1) - Leitungsunterbrechung |
| 0x1526 | P1526 | P1526 Nockenwellenversteller Einlass (Bank 2) - Leitungsunterbrechung |
| 0x1527 | P1527 | P1527 Nockenwellenversteller Einlass (Bank 2) - Signal niedrig |
| 0x1528 | P1528 | P1528 Nockenwellenversteller Einlass (Bank 2) - Signal hoch |
| 0x1529 | P1529 | P1529 Nockenwellenversteller Auslass (Bank 1) - Signal niedrig |
| 0x1530 | P1530 | P1530 Nockenwellenversteller Auslass (Bank 1) - Signal hoch (S54 bis 09/00: Drosselklappen Lageregelung - Regeldifferenz) |
| 0x1531 | P1531 | P1531 Nockenwellenversteller Auslass (Bank 1) - Leitungsunterbrechung |
| 0x1532 | P1532 | P1532 Nockenwellenversteller Auslass (Bank 2) - Leitungsunterbrechung (S54 bis 09/00: Drosselklappen Ansteuerung - Fehlfunktion) |
| 0x1533 | P1533 | P1533 Nockenwellenversteller Auslass (Bank 2) - Signal niedrig (S54 bis 09/00: SG - interner Prozessorfehler) |
| 0x1534 | P1534 | P1534 Nockenwellenversteller Auslass (Bank 2) - Signal hoch |
| 0x1535 | P1535 | P1535 DISA (differenzierte Sauganlage) - Wicklungstemperaturgrenzwert überschritten |
| 0x1536 | P1536 | P1536 DISA (differenzierte Sauganlage) Reglerüberwachung - Regeldifferenz |
| 0x1537 | P1537 | P1537 DISA (differenzierte Sauganlage) - Potentiometerspannung im unteren Diagnosebereich |
| 0x1538 | P1538 | P1538 DISA (differenzierte Sauganlage) - Potentiometerspannung im oberen Diagnosebereich |
| 0x1539 | P1539 | P1539 DISA (differenzierte Sauganlage) - Wicklungstemperaturschwellwert überschritten |
| 0x1540 | P1540 | P1540 Fahrdynamikkontrollschalter - Input hoch |
| 0x1541 | P1541 | P1541 Fahrdynamikkontrollschalter - Input niedrig |
| 0x1542 | P1542 | P1542 Pedalwertgeber - elektrischer Fehler |
| 0x1543 | P1543 | P1543 Drosselklappe 1 Potentiometer 1/2 - Input niedrig |
| 0x1544 | P1544 | P1544 Drosselklappe 1 Potentiometer 1/2 - Input hoch |
| 0x1545 | P1545 | P1545 Drosselklappe 1 Potentiometer 1/2 - Plausibilitätsfehler |
| 0x1546 | P1546 | P1546 Steuergerätekopplung - interner Prüfsummenfehler, SG Bank 1 defekt |
| 0x1547 | P1547 | P1547 Steuergerätekopplung - CAN-Timeout, SG Bank 1 defekt |
| 0x1548 | P1548 | P1548 Leerlaufregelsystem (Bank 2) - Drehzahl niedriger als erwartet |
| 0x1549 | P1549 | P1549 Leerlaufregelsystem (Bank 2) - Drehzahl höher als erwartet |
| 0x1550 | P1550 | P1550 Leerlaufsteller schließende Spule - elektrischer Fehler |
| 0x1552 | P1552 | P1552 Nockenwellenversteller Einlass (Bank 1) - Leitungsunterbrechung |
| 0x1555 | P1555 | P1555 Klimakompressor - Signal sporadisch |
| 0x1556 | P1556 | P1556 Klimakompressor - Signal niedrig (S54 bis 09/00: Nockenwellenversteller Einlass (Bank 1) - Leitungsunterbrechung) |
| 0x1557 | P1557 | P1557 Klimakompressor - Signal hoch |
| 0x1558 | P1558 | P1558 Drosselklappe Microchip Controller 1/2 - Fehlfunktion |
| 0x1560 | P1560 | P1560 Nockenwellenversteller Auslass (Bank 1) - Leitungsunterbrechung |
| 0x1563 | P1563 | P1563 Multifunktionslenkrad (MFL) - Wippschalter defekt |
| 0x1564 | P1564 | P1564 Steuergeräteauswahl - Plausibilitätsfehler |
| 0x1565 | P1565 | P1565 Multifunktionslenkrad (MFL) Schnittstelle - Bitfehler oder Tasten '+' und '-' gedrückt (S54 bis 09/00: Nockenwellenversteller Auslass (Bank 1) - Leitungsunterbrechung) |
| 0x1566 | P1566 | P1566 Multifunktionslenkrad (MFL) - Telegrammfrequenz falsch (M62/TU: MFL - Togglebitfehler) |
| 0x1567 | P1567 | P1567 Multifunktionslenkrad (MFL) - Togglebitfehler (M62/TU: MFL -Timeout Telegramm) |
| 0x1568 | P1568 | P1568 Multifunktionslenkrad (MFL) - Timeout Telegramm (M62/TU: MFL - Telegrammfrequenz falsch) |
| 0x1569 | P1569 | P1569 Nockenwellenversteller Einlass (Bank 2) - Leitungsunterbrechung |
| 0x1570 | P1570 | P1570 Steuergerät Sensorversorgung A - Output niedrig |
| 0x1571 | P1571 | P1571 Steuergerät Sensorversorgung A - Output hoch |
| 0x1572 | P1572 | P1572 Steuergerät Sensorversorgung A - Signal rauschend |
| 0x1573 | P1573 | P1573 Steuergerät Sensorversorgung B - Output niedrig (S54/S62: Nockenwellenversteller Einlass (Bank 2) - Signal niedrig) |
| 0x1574 | P1574 | P1574 Steuergerät Sensorversorgung B - Output hoch |
| 0x1575 | P1575 | P1575 Steuergerät Sensorversorgung B - Signal rauschend |
| 0x1577 | P1577 | P1577 Geschwindigkeitsanzeige Instrumentenkombination - Signal fehlerhaft |
| 0x1578 | P1578 | P1578 Geschwindigkeitsanzeige Kombi - Signal Instrumentenkombination / ASC nicht kompatibel |
| 0x1580 | P1580 | P1580 Drosselklappe - klemmt mechanisch (M73: Drosselklappe 1 Federtest - Fehlfunktion) |
| 0x1581 | P1581 | P1581 Nockenwellenversteller Auslass (Bank 2) - Leitungsunterbrechung (M73: Drosselklappe 2 Federtest - Fehlfunktion) |
| 0x1585 | P1585 | P1585 Verbrennungsaussetzer entdeckt bei niedrigem Kraftstoffstand |
| 0x1589 | P1589 | P1589 Steuergeräte-Selbsttest, Klopfregelung Testimpuls (Bank 1) |
| 0x1590 | P1590 | P1590 Drosselklappe 2 Potentiometer 1/2 - Input niedrig |
| 0x1591 | P1591 | P1591 Drosselklappe 2 Potentiometer 1/2 - Input hoch |
| 0x1592 | P1592 | P1592 Drosselklappe 2 Potentiometer 1/2 - Plausibilitätsfehler |
| 0x1593 | P1593 | P1593 DISA (differenzierte Sauganlage) - elektrischer Fehler |
| 0x1594 | P1594 | P1594 Nockenwellenversteller Auslass (Bank 2) - Leitungsunterbrechung |
| 0x1595 | P1595 | P1595 Steuergerätekopplung - interner Prüfsummenfehler, SG Bank 2 defekt |
| 0x1596 | P1596 | P1596 Steuergerätekopplung - CAN-Timeout, SG Bank 2 defekt |
| 0x1597 | P1597 | P1597 Steuergeräteauswahl - Entprellfehler |
| 0x1598 | P1598 | P1598 Steuergeräteauswahl Master/Slave - Plausibilitätsfehler |
| 0x1599 | P1599 | P1599 CAN-Timeout Getriebesteuergerät 2 |
| 0x1600 | P1600 | P1600 Steuergerät - externer 'Random Access Memory' (RAM) Fehler |
| 0x1601 | P1601 | P1601 Steuergeräte-Selbsttest, Sicherheitskraftstoffabschaltung (SKA) - Fehlfunktion |
| 0x1602 | P1602 | P1602 Steuergeräte-Selbsttest, Gerät defekt |
| 0x1603 | P1603 | P1603 Steuergeräte-Selbsttest, Momentüberwachung |
| 0x1604 | P1604 | P1604 Steuergeräte-Selbsttest, Drehzahlüberwachung |
| 0x1605 | P1605 | P1605 Sicherheitskonzept Momentbegrenzung Ebene 1 |
| 0x1606 | P1606 | P1606 Fehlerspeicher - Plausibilitätsfehler |
| 0x1607 | P1607 | P1607 CAN-Stand |
| 0x1608 | P1608 | P1608 Serielle Kommunikationsverbindung Steuergerät |
| 0x1609 | P1609 | P1609 Serielle Kommunikationsverbindung EML (elektronische Motorleistungsregelung) |
| 0x160A | P160A | P160A Powermanagement - Tiefentladung |
| 0x160B | P160B | P160B Powermanagement - Defekt |
| 0x160C | P160C | P160C Powermanagement - Überspannung |
| 0x160D | P160D | P160D Powermanagement - Unterspannung |
| 0x160E | P160E | P160E Powermanagement - Batterieloser Betrieb |
| 0x160F | P160F | P160F Powermanagement - Ruhestromfehler |
| 0x1610 | P1610 | P1610 Serielle Kommunikationsverbindung E-Katalysator |
| 0x1611 | P1611 | P1611 Serielle Kommunikationsverbindung Getriebesteuergerät |
| 0x1612 | P1612 | P1612 Serielle Kommunikationsverbindung Instrumentenkombination |
| 0x1613 | P1613 | P1613 Serielle Kommunikationsverbindung ASC (Automatic Stability Control) |
| 0x1614 | P1614 | P1614 Serielle Kommunikationsverbindung ACC (Adaptive Cruise Control) |
| 0x1615 | P1615 | P1615 Steuergerät Prozessor SPI-Bus - Fehlfunktion |
| 0x1616 | P1616 | P1616 Steuergerät Kodierspeicher - Prüfsummenfehler |
| 0x1617 | P1617 | P1617 Steuergerät H-Brückentreiber |
| 0x1618 | P1618 | P1618 Steuergeräte-Selbsttest, AD-Wandler-Überwachung |
| 0x1619 | P1619 | P1619 Kennfeldkühlung Thermostat Ansteuerung - Signal niedrig |
| 0x161A | P161A | P161A Kraftstoffrücklaufbelüftungsventil - Input hoch |
| 0x161B | P161B | P161B Kraftstoffrücklaufbelüftungsventil - Input niedrig |
| 0x161C | P161C | P161C Kraftstoffrücklaufbelüftungsventil - Leitungsunterbrechung |
| 0x161D | P161D | P161D Drosselklappen-Adaption (Bank 2) - Federtest verfehlt |
| 0x161E | P161E | P161E Drosselklappensteller Federtest (Bank 2) - Fehlfunktion |
| 0x161F | P161F | P161F Drosselklappensteller Federtest (Bank 2) - Fehlfunktion beim Öffnen |
| 0x1620 | P1620 | P1620 Kennfeldkühlung Thermostat Ansteuerung - Signal hoch |
| 0x1621 | P1621 | P1621 Kennfeldkühlung Thermostat Ansteuerung - Signal sporadisch |
| 0x1622 | P1622 | P1622 Kennfeldkühlung Thermostat Ansteuerung - elektrischer Fehler |
| 0x1623 | P1623 | P1623 Pedalwertgeber Potentiometerversorgung - Fehlfunktion |
| 0x1624 | P1624 | P1624 Pedalwertgeber Potentiometerversorgung Kanal 1 - elektrischer Fehler (M52: Kühlmittelthermostat (Kühlmitteltemperatur unterhalb Thermostat Regeltemperatur)) |
| 0x1625 | P1625 | P1625 Pedalwertgeber Potentiometerversorgung Kanal 2 - elektrischer Fehler |
| 0x1626 | P1626 | P1626 Generator Lastsensor - Input niedrig |
| 0x1627 | P1627 | P1627 Generator Lastsensor - Input hoch |
| 0x1628 | P1628 | P1628 Drosselklappensteller Federtest (Bank 1) - Fehlfunktion beim Öffnen |
| 0x1629 | P1629 | P1629 Drosselklappensteller Federtest (Bank 1) - Abbruch, Feder öffnet nicht |
| 0x162A | P162A | P162A Drosselklappensteller Federtest (Bank 2) - Abbruch, Feder öffnet nicht |
| 0x162B | P162B | P162B Drosselklappen Lageregelung  (Bank 2) - Regeldifferenz |
| 0x162C | P162C | P162C Drosselklappen Lageregelung (Bank 2) - klemmt kurzzeitig |
| 0x162D | P162D | P162D Drosselklappen Lageregelung (Bank 2) - klemmt anhaltend |
| 0x1630 | P1630 | P1630 Drosselklappen Ansteuerung (Bank 2) - Fehlfunktion |
| 0x1631 | P1631 | P1631 Drosselklappensteller Federtest (Bank 1) - Fehlfunktion |
| 0x1632 | P1632 | P1632 Drosselklappen-Adaption - Randbedingungen verletzt |
| 0x1633 | P1633 | P1633 Drosselklappen-Adaption - Notluftpunkt nicht adaptiert |
| 0x1634 | P1634 | P1634 Drosselklappen-Adaption (Bank 1) - Federtest verfehlt |
| 0x1635 | P1635 | P1635 Drosselklappen-Adaption - unterer mechanischer Anschlag (UMA) nicht adaptiert |
| 0x1636 | P1636 | P1636 Drosselklappen Ansteuerung (Bank 1) - Fehlfunktion |
| 0x1637 | P1637 | P1637 Drosselklappen Lageregelung  (Bank 1) - Regeldifferenz |
| 0x1638 | P1638 | P1638 Drosselklappen Lageregelung (Bank 1) - klemmt kurzzeitig |
| 0x1639 | P1639 | P1639 Drosselklappen Lageregelung (Bank 1) - klemmt anhaltend |
| 0x1640 | P1640 | P1640 Steuergerät - interner RAM/ROM Fehler |
| 0x1641 | P1641 | P1641 Drosselklappen-Adaption - Abbruch wegen Umweltbedingungen |
| 0x1642 | P1642 | P1642 Drosselklappen-Adaption - Abbruch wegen Umweltgrößen |
| 0x1643 | P1643 | P1643 Drosselklappensteller Startprüfung Verstärkerabgleich - Plausibilitätsfehler |
| 0x1644 | P1644 | P1644 Drosselklappen-Adaption - Abbruch unterer mechanischer Anschlag (UMA) Wiederlernen |
| 0x1645 | P1645 | P1645 Steuergerät - interner 'Random Access Memory' (RAM) Lesefehler |
| 0x1646 | P1646 | P1646 Anlasserrelais 2 Ansteuerung - Signal sporadisch |
| 0x1647 | P1647 | P1647 Anlasserrelais 2 Ansteuerung - Signal niedrig |
| 0x1648 | P1648 | P1648 Anlasserrelais 2 Ansteuerung - Signal hoch |
| 0x1649 | P1649 | P1649 Steuergerät - interner 'Random Access Memory' (RAM) Schreibfehler |
| 0x1650 | P1650 | P1650 Start in laufendem Motor |
| 0x1651 | P1651 | P1651 Malfunction Indicator Lamp (MIL) - Signal niedrig |
| 0x1652 | P1652 | P1652 Malfunction Indicator Lamp (MIL) - Signal hoch |
| 0x1653 | P1653 | P1653 Getriebemoment - Plausibilitätsfehler |
| 0x1654 | P1654 | P1654 CAN-Timeout Message Counter |
| 0x1655 | P1655 | P1655 EWS (elektronische Wegfahrsperre) - Wechselcode-Ablage Fehlfunktion |
| 0x1656 | P1656 | P1656 EWS (elektronische Wegfahrsperre) - falscher Code |
| 0x1657 | P1657 | P1657 EWS (elektronische Wegfahrsperre) - Wechselcode-Ablage im Flash fehlerhaft |
| 0x1658 | P1658 | P1658 EWS (elektronische Wegfahrsperre) - Wechselcode vorletztes Wort im Flash fehlerhaft |
| 0x1659 | P1659 | P1659 EWS (elektronische Wegfahrsperre) - Wechselcode-Ablage im RAM fehlerhaft |
| 0x1660 | P1660 | P1660 EWS (elektronische Wegfahrsperre) - Telegrammfehler |
| 0x1661 | P1661 | P1661 Timeout EWS (elektronische Wegfahrsperre)-Telegramm |
| 0x1662 | P1662 | P1662 EWS (elektronische Wegfahrsperre) - Telegrammparityfehler |
| 0x1663 | P1663 | P1663 EWS (elektronische Wegfahrsperre) - Wechselcode-Ablage im EEPROM fehlerhaft |
| 0x1664 | P1664 | P1664 EWS (elektronische Wegfahrsperre) - Schreib-/Lesefehler EEPROM |
| 0x1665 | P1665 | P1665 EWS (elektronische Wegfahrsperre) - Manipulation über Wechselcode |
| 0x1666 | P1666 | P1666 EWS (elektronische Wegfahrsperre) - Manipulation über KWP2000* / Startwert nicht akzeptiert |
| 0x1667 | P1667 | P1667 EWS (elektronische Wegfahrsperre) - noch kein Startwert programmiert |
| 0x1668 | P1668 | P1668 EWS (elektronische Wegfahrsperre) - Startwert zerstört |
| 0x1669 | P1669 | P1669 EWS (elektronische Wegfahrsperre) - Startwertprogrammierung fehlerhaft |
| 0x1670 | P1670 | P1670 Getriebeeingriff - Plausibilitätsfehler |
| 0x1671 | P1671 | P1671 ASC (Automatic Stability Control)-Eingriff mit Zylinderabschaltung - Plausibilitätsfehler |
| 0x1672 | P1672 | P1672 MSR (MotorSchleppmomentRegelung)-Eingriff - Plausibilitätsfehler |
| 0x1673 | P1673 | P1673 ASC (Automatic Stability Control)-Eingriff - Plausibilitätsfehler |
| 0x1674 | P1674 | P1674 ASC (Automatic Stability Control) - keine Aktivität festzustellen |
| 0x1675 | P1675 | P1675 Drosselklappensteller Startprüfung - Neuadaption erforderlich |
| 0x1676 | P1676 | P1676 ACC (Adaptive Cruise Control) Signal - Plausibilitätsfehler |
| 0x1677 | P1677 | P1677 ACC (Adaptive Cruise Control) - keine Aktivität festzustellen |
| 0x1678 | P1678 | P1678 ACC (Adaptive Cruise Control) - keine Reaktion auf ACC Abschaltung |
| 0x1679 | P1679 | P1679 Elektronische Drosselklappenüberwachung Ebene 2/3 Verlustmomentberechung - Fehler |
| 0x167A | P167A | P167A ACC (Adaptive Cruise Control) - sporadische Aktivität festzustellen |
| 0x1680 | P1680 | P1680 Elektronische Drosselklappenüberwachung Ebene 2/3 AD-Wandler -  Prozesserfehler |
| 0x1681 | P1681 | P1681 Elektronische Drosselklappenüberwachung Ebene 2/3 Drehzahl - Berechnungsfehler |
| 0x1682 | P1682 | P1682 Elektronische Drosselklappenüberwachung Ebene 2/3 Leerlaufdrehzahl 'A' - Berechnungsfehler |
| 0x1683 | P1683 | P1683 Elektronische Drosselklappenüberwachung Ebene 2/3 Leerlaufdrehzahl 'B' - Berechnungsfehler |
| 0x1684 | P1684 | P1684 Elektronische Drosselklappenüberwachung Ebene 2/3 Kupplungsmoment - Min-Fehler |
| 0x1685 | P1685 | P1685 Elektronische Drosselklappenüberwachung Ebene 2/3 Kupplungsmoment - Max-Fehler |
| 0x1686 | P1686 | P1686 Elektronische Drosselklappenüberwachung Ebene 2/3 Pedalwertgeber - Diagnosefehler |
| 0x1687 | P1687 | P1687 Elektronische Drosselklappenüberwachung Ebene 2/3 Drosselklappenpotentiometer - Diagnosefehler |
| 0x1688 | P1688 | P1688 Elektronische Drosselklappenüberwachung Ebene 2/3  Luftmassenberechnung - Fehler |
| 0x1689 | P1689 | P1689 Elektronische Drosselklappenüberwachung Ebene 2/3 Momentenberechnung - Fehler |
| 0x1690 | P1690 | P1690 Malfunction Indicator Lamp (MIL) - elektrischer Fehler |
| 0x1691 | P1691 | P1691 Elektronische Drosselklappenüberwachung Ebene 2/3 Motordrehzahlbegrenzung - Fehler |
| 0x1692 | P1692 | P1692 Elektronische Drosselklappenüberwachung Ebene 2/3 Motordrosselklappe und Einspritzabschaltung 'A' |
| 0x1693 | P1693 | P1693 Elektronische Drosselklappenüberwachung Ebene 2/3 Motordrosselklappe und Einspritzabschaltung 'B' |
| 0x1694 | P1694 | P1694 Drosselklappensteller Startprüfung - Federtest und Notluftprüfung verfehlt |
| 0x1695 | P1695 | P1695 Hauptrelais - elektrischer Fehler |
| 0x1696 | P1696 | P1696 Hauptrelais Ansteuerung - Input niedrig |
| 0x1697 | P1697 | P1697 Hauptrelais Ansteuerung - Input hoch |
| 0x1698 | P1698 | P1698 Getriebesteuergerät - Steuerungsfehler |
| 0x1699 | P1699 | P1699 Getriebesteuergerät - Prüfsummenfehler |
| 0x16A0 | P16A0 | P16A0 Steuergerät - interner Prüfsummenfehler in Bootsoftware |
| 0x16A1 | P16A1 | P16A1 Steuergerät - interner Prüfsummenfehler in Applikatonssoftware |
| 0x16A2 | P16A2 | P16A2 Steuergerät - interner Prüfsummenfehler im Datenbereich |
| 0x16A3 | P16A3 | P16A3 Steuergerät - interner 'Non-Volatile Memory' (NVMY) Fehler |
| 0x16A4 | P16A4 | P16A4 Timeout Steuergerät Klopfsensor SPI-Bus |
| 0x16A5 | P16A5 | P16A5 Timeout Steuergerät Mehrfachendstufe SPI-Bus |
| 0x16A6 | P16A6 | P16A6 Steuergeräte-Selbsttest, Fahrgeschwindigkeitsregelungsüberwachung |
| 0x16A7 | P16A7 | P16A7 Steuergeräte-Selbsttest, Heißfilmluftmassenmesser (HFM)-Überwachung |
| 0x16A8 | P16A8 | P16A8 Steuergeräte-Selbsttest, Drosselklappenstellungsüberwachung |
| 0x16A9 | P16A9 | P16A9 Steuergeräte-Selbsttest, Drehzahlüberwachung Reset |
| 0x16B0 | P16B0 | P16B0 Steuergeräte-Selbsttest, Pedalwertüberwachung |
| 0x16B1 | P16B1 | P16B1 Steuergeräte-Selbsttest, Leerlaufregelsystemüberwachung integrierender Anteil - Plausibilitätsfehler |
| 0x16B2 | P16B2 | P16B2 Steuergeräte-Selbsttest, Leerlaufregelsystemüberwachung PD (Proportional-Differential)-Anteil - Plausibilitätsfehler |
| 0x16B3 | P16B3 | P16B3 Steuergeräte-Selbsttest, MSR (MotorSchleppmomentRegelung)-Überwachung |
| 0x16B4 | P16B4 | P16B4 Steuergeräte-Selbsttest, DCC (Dynamic Cruise Control)-Überwachung |
| 0x16B5 | P16B5 | P16B5 Steuergeräte-Selbsttest, SSG (sequentielles Schaltgetriebe)-Überwachung |
| 0x16B6 | P16B6 | P16B6 Steuergeräte-Selbsttest, EGS (elektronische Getriebesteuerung)-Überwachung |
| 0x16B7 | P16B7 | P16B7 Steuergeräte-Selbsttest, Kupplungsmomentüberwachung - Maximalwert Plausibilitätsfehler |
| 0x16B8 | P16B8 | P16B8 Steuergeräte-Selbsttest, Kupplungsmomentüberwachung - Minimalwert Plausibilitätsfehler |
| 0x16B9 | P16B9 | P16B9 Steuergeräte-Selbsttest, Verlustmomentüberwachung |
| 0x16C0 | P16C0 | P16C0 Steuergeräte-Selbsttest, Fahrdynamikkontrollschalter-Überwachung |
| 0x16C1 | P16C1 | P16C1 Steuergeräte-Selbsttest, Momentüberwachung - aktuell indizierter Wert Plausibilitätsfehler |
| 0x16C2 | P16C2 | P16C2 Steuergeräte-Selbsttest, Drehzahlbegrenzungsüberwachung |
| 0x16C3 | P16C3 | P16C3 Steuergeräte-Selbsttest, Drehzahlbegrenzung Reset |
| 0x16C4 | P16C4 | P16C4 Schaltphase - Drehmoment Plausibilitätsfehler |
| 0x16C5 | P16C5 | P16C5 Hauptrelais - Schaltverzögerung |
| 0x16C6 | P16C6 | P16C6 CAN-Timeout BSD (Bitserielle Datenschnittstelle) |
| 0x16C7 | P16C7 | P16C7 ASC/DSC (Automatic Stability Control/Dynamic Stability Control) - Sperrung wegen unplausibler Werte |
| 0x16C8 | P16C8 | P16C8 Serielle Kommunikationverbindung EKP (elektrische Kraftstoffpumpe) |
| 0x1700 | P1700 | P1700 Doppelfehler Abtriebsdrehzahl und Turbinendrehzahl |
| 0x1701 | P1701 | P1701 Doppelfehler Positionsinformation CAN / serielle Leitung |
| 0x1702 | P1702 | P1702 Kombination Ersatzfunktion |
| 0x1703 | P1703 | P1703 Getriebewählschalter - Fehlfunktion |
| 0x1705 | P1705 | P1705 Getriebesteuergerät LED Output - Leitungsunterbrechung |
| 0x1706 | P1706 | P1706 Getriebesteuergerät LED Output - Kurzschluss |
| 0x1707 | P1707 | P1707 EGS (elektronische Getriebesteuerung) Sicherheitskonzept Getriebe - Fehlfunktion |
| 0x1708 | P1708 | P1708 EGS (elektronische Getriebesteuerung) Sicherheitskonzept Kupplung - Fehlfunktion |
| 0x1709 | P1709 | P1709 EGS (elektronische Getriebesteuerung) Sicherheitskonzept - Fehlfunktion |
| 0x170A | P170A | P170A Elektrischer Drucksteller 1 - Nebenschlussüberwachung |
| 0x170B | P170B | P170B Elektrischer Drucksteller 2 - Nebenschlussüberwachung |
| 0x170C | P170C | P170C Elektrischer Drucksteller 3 - Nebenschlussüberwachung |
| 0x170D | P170D | P170D Elektrischer Drucksteller 4 - Nebenschlussüberwachung |
| 0x170E | P170E | P170E Elektrischer Drucksteller 5 - Nebenschlussüberwachung |
| 0x170F | P170F | P170F Elektrischer Drucksteller 6 - Nebenschlussüberwachung |
| 0x1710 | P1710 | P1710 Getriebesteuergerät Temperaturfühler - Signal zu hoch |
| 0x1711 | P1711 | P1711 Getriebesteuergerät Temperaturfühler - Signal zu niedrig |
| 0x1715 | P1715 | P1715 Hydraulikeinheit Drucküberwachung - Fehlfunktion |
| 0x1716 | P1716 | P1716 Hydraulikeinheit Einschalthäufigkeit - Fehlfunktion |
| 0x1717 | P1717 | P1717 Hydraulikeinheit Einschaltdauer - Fehlfunktion |
| 0x1719 | P1719 | P1719 CAN Stand Fehler |
| 0x1720 | P1720 | P1720 CAN-Timeout Steuergerät |
| 0x1721 | P1721 | P1721 CAN-Timeout ASC/DSC (Automatic Stability Control/Dynamic Stability Control) |
| 0x1727 | P1727 | P1727 CAN Motordrehzahl |
| 0x1728 | P1728 | P1728 Motorüberdrehzahl |
| 0x1729 | P1729 | P1729 Motor - hohe Drehungleichförmigkeit |
| 0x1731 | P1731 | P1731 Falsches Übersetzungsverhältnis - 1. Gang manuell |
| 0x1732 | P1732 | P1732 Gangüberwachung 4 bei elektrischem Ersatzprogramm |
| 0x1734 | P1734 | P1734 Elektrischer Drucksteller 2 - elektrischer Fehler |
| 0x1736 | P1736 | P1736 Falsches Übersetzungsverhältnis - 6. Gang |
| 0x1738 | P1738 | P1738 Elektrischer Drucksteller 3 - elektrischer Fehler |
| 0x1739 | P1739 | P1739 Kupplungsmagnet - Kommunikationsfehler |
| 0x1740 | P1740 | P1740 Kupplungsmagnet - Meßbereichs- oder Leistungsproblem |
| 0x1741 | P1741 | P1741 Kupplungsmagnet - Leitungsunterbrechung |
| 0x1742 | P1742 | P1742 Kupplungsmagnet - Kurzschluss |
| 0x1743 | P1743 | P1743 Elektrischer Drucksteller 5 - elektrischer Fehler (M44/M52: Bremsband - elektrischer Fehler) |
| 0x1744 | P1744 | P1744 Elektrischer Drucksteller 1 - elektrischer Fehler |
| 0x1745 | P1745 | P1745 Elektrischer Drucksteller 5 - Fehlfunktion |
| 0x1746 | P1746 | P1746 Getriebesteuergerät - Endstufenfehler |
| 0x1747 | P1747 | P1747 CAN-Bus Überwachung |
| 0x1748 | P1748 | P1748 Getriebesteuergerät Selbsttest - Fehlfunktion |
| 0x1749 | P1749 | P1749 Sekundär-Drucksteller - Kommunikationsfehler (M52: Getriebesteuergerät - interner Fehler) |
| 0x1750 | P1750 | P1750 Sekundär-Drucksteller - Meßbereichs- oder Leistungsproblem (M44/M52/S52/M62/M73: Versorgungsspannung - Input niedrig) |
| 0x1751 | P1751 | P1751 Sekundär-Drucksteller - Leitungsunterbrechung (M52: Versorgungsspannung - Input hoch) |
| 0x1752 | P1752 | P1752 Sekundär-Drucksteller - Kurzschluss |
| 0x1753 | P1753 | P1753 Elektrischer Drucksteller 4 - elektrischer Fehler |
| 0x1755 | P1755 | P1755 Elektrischer Drucksteller 4 - Fehlfunktion |
| 0x1756 | P1756 | P1756 Schaltvorgang X-Position Gang nicht einlegbar |
| 0x1757 | P1757 | P1757 Schaltvorgang Gangspringer |
| 0x1758 | P1758 | P1758 Schaltvorgang Y-Position nicht regelbar |
| 0x1759 | P1759 | P1759 Schaltvorgang X-Position Gang nicht auslegbar |
| 0x1760 | P1760 | P1760 Motoreingriff - Plausibilitätsfehler |
| 0x1761 | P1761 | P1761 Magnetventil Shiftlock - Fehlfunktion |
| 0x1762 | P1762 | P1762 Magnetventil Shiftlock - Input hoch |
| 0x1763 | P1763 | P1763 Magnetventil Shiftlock - Input niedrig |
| 0x1764 | P1764 | P1764 Magnetventil Shiftlock - Leitungsunterbrechung |
| 0x1765 | P1765 | P1765 CAN Drosselklappe - Fehlfunktion |
| 0x1766 | P1766 | P1766 Doppelfehler Motordrehzahl CAN / direkt verdrahtet |
| 0x1767 | P1767 | P1767 CAN Raddrehzahlen Hinterachse |
| 0x1770 | P1770 | P1770 CAN Momentenschnittstelle - Fehlfunktion |
| 0x1771 | P1771 | P1771 CAN Momentenschnittstelle - Plausibilitätsfehler |
| 0x1780 | P1780 | P1780 CAN Momentreduzierung - Fehlfunktion |
| 0x1782 | P1782 | P1782 CAN Bremssignal |
| 0x1785 | P1785 | P1785 Getriebeübersetzungssteller - Fehlfunktion |
| 0x1786 | P1786 | P1786 Getriebeübersetzungssteller - Meßbereichs- oder Leistungsproblem |
| 0x1787 | P1787 | P1787 Getriebeübersetzungssteller - Leitungsunterbrechung |
| 0x1788 | P1788 | P1788 Getriebeübersetzungssteller - Kurzschluss |
| 0x1789 | P1789 | P1789 Getriebeübersetzungssteller - Kommunikationsfehler |
| 0x1790 | P1790 | P1790 Getriebesteuergerät - interner Prüfsummenfehler/EPROM  |
| 0x1791 | P1791 | P1791 Getriebesteuergerät - interner Prüfsummenfehler/EEPROM |
| 0x1792 | P1792 | P1792 Getriebesteuergerät - interner Watchdogfehler |
| 0x1793 | P1793 | P1793 EGS (elektronische Getriebesteuerung) - Abschaltung wegen Übertemperatur |
| 0x1794 | P1794 | P1794 Getriebesteuergerät - interner Prüfsummenfehler |
| 0x1796 | P1796 | P1796 Getriebesteuergerät - interner Fehler 7 (High Side Treiber) |
| 0x1797 | P1797 | P1797 Getriebesteuergerät - interner 'Random Access Memory' (RAM) Fehler  |
| 0x1798 | P1798 | P1798 Getriebesteuergerät - interner Schreibfehler EEPROM |
| 0x1801 | P1801 | P1801 Magnetventil 1 - Input niedrig |
| 0x1802 | P1802 | P1802 Magnetventil 2 - Input niedrig |
| 0x1803 | P1803 | P1803 Magnetventil 3 - Input niedrig |
| 0x1804 | P1804 | P1804 Magnetventil 4 - Input niedrig |
| 0x1806 | P1806 | P1806 Magnetventil 1 oder 2 klemmt mechanisch |
| 0x1810 | P1810 | P1810 Eingangsdrehzahlfühler Turbine - Input hoch |
| 0x1811 | P1811 | P1811 Eingangsdrehzahlfühler Turbine - Input niedrig |
| 0x1812 | P1812 | P1812 Abtriebsdrehzahlfühler - Input hoch |
| 0x1813 | P1813 | P1813 Abtriebsdrehzahlfühler - Input niedrig |
| 0x1814 | P1814 | P1814 Abtriebsdrehzahlsensor - Gradient zu hoch |
| 0x1815 | P1815 | P1815 Getriebestufenschalter am Lenkrad Taste '+' - Input niedrig |
| 0x1816 | P1816 | P1816 Getriebestufenschalter am Lenkrad Taste '-' - Input niedrig |
| 0x1817 | P1817 | P1817 Wählhebel GSL0 Leitung - Input hoch |
| 0x1818 | P1818 | P1818 Wählhebel GSL0 Leitung - Input niedrig |
| 0x1819 | P1819 | P1819 Wählhebel GSL0 Leitung - Plausibilitätsfehler |
| 0x1820 | P1820 | P1820 Wählhebel GSL1 Leitung - Input hoch |
| 0x1821 | P1821 | P1821 Wählhebel GSL1 Leitung - Input niedrig |
| 0x1822 | P1822 | P1822 Wählhebel GSL1 Leitung - Plausibilitätsfehler |
| 0x1823 | P1823 | P1823 Wählhebel Digitalleitung - Plausibilitätsfehler |
| 0x1825 | P1825 | P1825 Shiftlock - Fehlfunktion |
| 0x1826 | P1826 | P1826 Shiftlock Relais (CVT) - Input niedrig |
| 0x1827 | P1827 | P1827 Shiftlock Relais (CVT) - Input hoch |
| 0x1830 | P1830 | P1830 Drucksteller - Stromfehler in P/R/N |
| 0x1831 | P1831 | P1831 Elektrischer Drucksteller 1 - Input hoch |
| 0x1832 | P1832 | P1832 Elektrischer Drucksteller 2 - Input hoch |
| 0x1833 | P1833 | P1833 Elektrischer Drucksteller 3 - Input hoch |
| 0x1834 | P1834 | P1834 Elektrischer Drucksteller 4 - Input hoch |
| 0x1835 | P1835 | P1835 Elektrischer Drucksteller 5 - Input hoch |
| 0x1836 | P1836 | P1836 Wandlerüberbrückungskupplung - Input hoch |
| 0x1841 | P1841 | P1841 Elektrischer Drucksteller 1 - Input niedrig |
| 0x1842 | P1842 | P1842 Elektrischer Drucksteller 2 - Input niedrig |
| 0x1843 | P1843 | P1843 Elektrischer Drucksteller 3 - Input niedrig |
| 0x1844 | P1844 | P1844 Elektrischer Drucksteller 4 - Input niedrig |
| 0x1845 | P1845 | P1845 Elektrischer Drucksteller 5 - Input niedrig |
| 0x1846 | P1846 | P1846 Wandlerüberbrückungskupplung - Input niedrig |
| 0x1848 | P1848 | P1848 Getriebepositionssensor - Fehlfunktion |
| 0x1850 | P1850 | P1850 Wählwinkel Sensor - Input hoch |
| 0x1851 | P1851 | P1851 Wählwinkel Sensor - Input niedrig |
| 0x1852 | P1852 | P1852 Wählwinkel Sensor - Plausibilitätsfehler |
| 0x1853 | P1853 | P1853 Kupplungsweg Sensor - Input hoch |
| 0x1854 | P1854 | P1854 Kupplungsweg Sensor - Input niedrig |
| 0x1855 | P1855 | P1855 Kupplungsweg Sensor - Plausibilitätsfehler |
| 0x1856 | P1856 | P1856 Hydraulikdrucksensor - Input hoch |
| 0x1857 | P1857 | P1857 Hydraulikdrucksensor - Input niedrig |
| 0x1858 | P1858 | P1858 Hydraulikdrucksensor - Plausibilitätsfehler |
| 0x1859 | P1859 | P1859 Kupplungsdrehzahl Sensor - Plausibilitätsfehler |
| 0x1860 | P1860 | P1860 Wählhebel Hallsensor Fehler 1 |
| 0x1861 | P1861 | P1861 Schaltvorgang 2./1. Gang - Fehlfunktion |
| 0x1862 | P1862 | P1862 Schaltvorgang 3./2. Gang - Fehlfunktion |
| 0x1863 | P1863 | P1863 Schaltvorgang 4./3. Gang - Fehlfunktion |
| 0x1864 | P1864 | P1864 Schaltvorgang 5./4. Gang - Fehlfunktion |
| 0x1865 | P1865 | P1865 Schaltvorgang 6./5. Gang - Fehlfunktion |
| 0x1866 | P1866 | P1866 Wählhebel GSL2 Leitung - Input hoch |
| 0x1867 | P1867 | P1867 Wählhebel GSL2 Leitung - Input niedrig |
| 0x1868 | P1868 | P1868 Wählhebel GSL2 Leitung - Plausibilität |
| 0x1869 | P1869 | P1869 Wählhebel GSL3 Leitung - Input hoch |
| 0x1870 | P1870 | P1870 Wählhebel GSL3 Leitung - Input niedrig |
| 0x1871 | P1871 | P1871 Schaltvorgang 2./1. Gang - Input hoch |
| 0x1872 | P1872 | P1872 Schaltvorgang 3./2. Gang - Input hoch |
| 0x1873 | P1873 | P1873 Schaltvorgang 4./3. Gang - Input hoch |
| 0x1874 | P1874 | P1874 Schaltvorgang 5./4. Gang - Input hoch |
| 0x1875 | P1875 | P1875 Schaltvorgang 6./5. Gang - Input hoch |
| 0x1876 | P1876 | P1876 Wählhebel GSL3 Leitung - Plausibilität |
| 0x1877 | P1877 | P1877 Wählhebel GSL4 Leitung - Input hoch |
| 0x1878 | P1878 | P1878 Wählhebel GSL4 Leitung - Input niedrig |
| 0x1879 | P1879 | P1879 Wählhebel GSL4 Leitung - Plausibilität |
| 0x1881 | P1881 | P1881 Schaltvorgang 1./2. Gang - Input hoch |
| 0x1882 | P1882 | P1882 Schaltvorgang 2./3. Gang - Input hoch |
| 0x1883 | P1883 | P1883 Schaltvorgang 3./4. Gang - Input hoch |
| 0x1884 | P1884 | P1884 Schaltvorgang 4./5. Gang - Input hoch |
| 0x1885 | P1885 | P1885 Schaltvorgang 5./6. Gang -Input hoch |
| 0x1886 | P1886 | P1886 Schaltvorgang 5./6. Gang - Fehlfunktion |
| 0x1887 | P1887 | P1887 Hydraulikpumpe - Fehlfunktion |
| 0x1888 | P1888 | P1888 CAN-Timeout Instrumentenkombination bei Betätigung Parksperren-Notentriegelung |
| 0x1889 | P1889 | P1889 Versorgungsspannung - elektrischer Fehler |
| 0x1890 | P1890 | P1890 Versorgungsspannung - Fehlfunktion |
| 0x1891 | P1891 | P1891 Versorgungsspannung - Input hoch |
| 0x1892 | P1892 | P1892 Versorgungsspannung - Input niedrig |
| 0x1893 | P1893 | P1893 Versorgungsspannung Elektrischer Drucksteller/Magnetventil - Input hoch |
| 0x1894 | P1894 | P1894 Versorgungsspannung Elektrischer Drucksteller/Magnetventil - Input niedrig |
| 0x1895 | P1895 | P1895 Versorgungsspannung Elektrischer Drucksteller/Magnetventil - kein Signal |
| 0x1896 | P1896 | P1896 Versorgungsspannung Elektrischer Drucksteller/Magnetventil - Fehlfunktion |
| 0x1897 | P1897 | P1897 Versorgungsspannung Sensoren - Input hoch |
| 0x1898 | P1898 | P1898 Versorgungsspannung Sensoren - Input niedrig |
| 0x2000 | P2000 | P2000 NOx-Speicher (Bank 1) - Wirkungsgrad unter Schwellwert |
| 0x2001 | P2001 | P2001 NOx-Speicher (Bank 2) - Wirkungsgrad unter Schwellwert |
| 0x2002 | P2002 | P2002 Dieselpartikelfilter (Bank 1) - Wirkungsgrad unter Schwellwert |
| 0x2003 | P2003 | P2003 Dieselpartikelfilter (Bank 2) - Wirkungsgrad unter Schwellwert |
| 0x2024 | P2024 | P2024 Tankentlüftungssystem Kraftstoffverdunstung Temperaturfühler - Fehlfunktion oder Leitungsunterbrechung |
| 0x2025 | P2025 | P2025 Tankentlüftungssystem Kraftstoffverdunstung Temperaturfühler - Leistungsproblem  |
| 0x2026 | P2026 | P2026 Tankentlüftungssystem  Kraftstoffverdunstung Temperaturfühler - Spannung niedrig |
| 0x2027 | P2027 | P2027 Tankentlüftungssystem Kraftstoffverdunstung Temperaturfühler - Spannung hoch  |
| 0x2028 | P2028 | P2028 Tankentlüftungssystem Kraftstoffverdunstung Temperaturfühler - Input sporadisch |
| 0x2031 | P2031 | P2031 Abgastemperaturfühler (Bank 1, nach Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2032 | P2032 | P2032 Abgastemperaturfühler (Bank 1, nach Katalysator) - Input niedrig |
| 0x2033 | P2033 | P2033 Abgastemperaturfühler (Bank 1, nach Katalysator) - Input hoch |
| 0x2034 | P2034 | P2034 Abgastemperaturfühler (Bank 2, nach Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2035 | P2035 | P2035 Abgastemperaturfühler (Bank 2, nach Katalysator) - Input niedrig |
| 0x2036 | P2036 | P2036 Abgastemperaturfühler (Bank 2, nach Katalysator) - Input hoch |
| 0x2065 | P2065 | P2065 Kraftstoff-Füllstandssensor 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x2066 | P2066 | P2066 Kraftstoff-Füllstandssensor 2 - Meßbereichs- oder Leistungsproblem |
| 0x2067 | P2067 | P2067 Kraftstoff-Füllstandssensor 2 - Input niedrig |
| 0x2068 | P2068 | P2068 Kraftstoff-Füllstandssensor 2 - Input hoch |
| 0x2069 | P2069 | P2069 Kraftstoff-Füllstandssensor 2 - Input sporadisch |
| 0x2072 | P2072 | P2072 Drosselklappensteller Stellsystem - Eisblockade |
| 0x2073 | P2073 | P2073 Absoluter Saugrohrdruck / Luftmassendurchsatz Drosselklappenstellung - Korrelationsfehler im Leerlauf |
| 0x2074 | P2074 | P2074 Absoluter Saugrohrdruck / Luftmassendurchsatz Drosselklappenstellung - Korrelationsfehler in Volllast |
| 0x2080 | P2080 | P2080 Abgastemperaturfühler (Bank 1, vor Katalysator) - Meßbereichs- oder Leistungsproblem |
| 0x2081 | P2081 | P2081 Abgastemperaturfühler (Bank 1, vor Katalysator) - Input sporadisch |
| 0x2082 | P2082 | P2082 Abgastemperaturfühler (Bank 2, vor Katalysator) - Meßbereichs- oder Leistungsproblem |
| 0x2083 | P2083 | P2083 Abgastemperaturfühler (Bank 2, vor Katalysator) - Input sporadisch |
| 0x2084 | P2084 | P2084 Abgastemperaturfühler (Bank 1, nach Katalysator) - Meßbereichs- oder Leistungsproblem |
| 0x2085 | P2085 | P2085 Abgastemperaturfühler (Bank 1, nach Katalysator) - Input sporadisch |
| 0x2086 | P2086 | P2086 Abgastemperaturfühler (Bank 2, nach Katalysator) - Meßbereichs- oder Leistungsproblem |
| 0x2087 | P2087 | P2087 Abgastemperaturfühler (Bank 2, nach Katalysator) - Input sporadisch |
| 0x2088 | P2088 | P2088 Nockenwellenversteller Einlass (Bank 1) - Input niedrig |
| 0x2089 | P2089 | P2089 Nockenwellenversteller Einlass (Bank 1) - Input hoch |
| 0x2090 | P2090 | P2090 Nockenwellenversteller Auslass (Bank 1) - Input niedrig |
| 0x2091 | P2091 | P2091 Nockenwellenversteller Auslass (Bank 1) - Input hoch |
| 0x2092 | P2092 | P2092 Nockenwellenversteller Einlass (Bank 2) - Input niedrig |
| 0x2093 | P2093 | P2093 Nockenwellenversteller Einlass (Bank 2) - Input hoch |
| 0x2094 | P2094 | P2094 Nockenwellenversteller Auslass (Bank 2) - Input niedrig |
| 0x2095 | P2095 | P2095 Nockenwellenversteller Auslass (Bank 2) - Input hoch |
| 0x2096 | P2096 | P2096 Gemischfeinregelung (Bank 1, nach Katalysator) - System zu mager |
| 0x2097 | P2097 | P2097 Gemischfeinregelung (Bank 1, nach Katalysator) - System zu fett |
| 0x2098 | P2098 | P2098 Gemischfeinregelung (Bank 2, nach Katalysator) - System zu mager |
| 0x2099 | P2099 | P2099 Gemischfeinregelung (Bank 2, nach Katalysator) - System zu fett |
| 0x2100 | P2100 | P2100 Drosselklappensteller Stellmotor - Fehlfunktion oder Leitungsunterbrechung |
| 0x2101 | P2101 | P2101 Drosselklappensteller Stellmotor - Meßbereichs- oder Leistungsproblem |
| 0x2102 | P2102 | P2102 Drosselklappensteller Stellmotor - Input niedrig |
| 0x2103 | P2103 | P2103 Drosselklappensteller Stellmotor - Input hoch |
| 0x2104 | P2104 | P2104 Drosselklappensteller Stellsystem - Zwangs-Leerlauf |
| 0x2105 | P2105 | P2105 Drosselklappensteller Stellsystem - Zwangs-Motorabstellung |
| 0x2106 | P2106 | P2106 Drosselklappensteller Stellsystem - Zwangs-Leistungsbegrenzung |
| 0x2107 | P2107 | P2107 Drosselklappensteller-Steuergerät Prozessor - Fehlfunktion |
| 0x2108 | P2108 | P2108 Drosselklappensteller-Steuergerät - Leistungsproblem |
| 0x2109 | P2109 | P2109 Drosselklappenpotentiometer 1 Minimalanschlag - Leistungsproblem |
| 0x2110 | P2110 | P2110 Drosselklappensteller Stellsystem - Zwangs-Drehzahlbegrenzung |
| 0x2111 | P2111 | P2111 Drosselklappensteller Stellsystem - klemmt offen |
| 0x2112 | P2112 | P2112 Drosselklappensteller Stellsystem - klemmt geschlossen |
| 0x2113 | P2113 | P2113 Drosselklappenpotentiometer 2 Minimalanschlag - Leistungsproblem |
| 0x2114 | P2114 | P2114 Drosselklappenpotentiometer 3 Minimalanschlag - Leistungsproblem |
| 0x2115 | P2115 | P2115 Pedalwertgeber 1 Minimalanschlag - Leistungsproblem |
| 0x2116 | P2116 | P2116 Pedalwertgeber 2 Minimalanschlag - Leistungsproblem |
| 0x2117 | P2117 | P2117 Pedalwertgeber 3 Minimalanschlag - Leistungsproblem |
| 0x2118 | P2118 | P2118 Drosselklappensteller Stellmotorstrom - Meßbereichs- oder Leistungsproblem |
| 0x2119 | P2119 | P2119 Drosselklappensteller Klappenstutzen - Meßbereichs- oder Leistungsproblem |
| 0x2120 | P2120 | P2120 Pedalwertgeber 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x2121 | P2121 | P2121 Pedalwertgeber 1 - Meßbereichs- oder Leistungsproblem |
| 0x2122 | P2122 | P2122 Pedalwertgeber 1 - Input niedrig |
| 0x2123 | P2123 | P2123 Pedalwertgeber 1 - Input hoch |
| 0x2124 | P2124 | P2124 Pedalwertgeber 1 - Input sporadisch |
| 0x2125 | P2125 | P2125 Pedalwertgeber 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x2126 | P2126 | P2126 Pedalwertgeber 2 - Meßbereichs- oder Leistungsproblem |
| 0x2127 | P2127 | P2127 Pedalwertgeber 2 - Input niedrig |
| 0x2128 | P2128 | P2128 Pedalwertgeber 2 - Input hoch |
| 0x2129 | P2129 | P2129 Pedalwertgeber 2 - Input sporadisch |
| 0x2130 | P2130 | P2130 Pedalwertgeber 3 - Fehlfunktion oder Leitungsunterbrechung |
| 0x2131 | P2131 | P2131 Pedalwertgeber 3 - Meßbereichs- oder Leistungsproblem |
| 0x2132 | P2132 | P2132 Pedalwertgeber 3 - Input niedrig |
| 0x2133 | P2133 | P2133 Pedalwertgeber 3 - Input hoch |
| 0x2134 | P2134 | P2134 Pedalwertgeber 3 - Input sporadisch |
| 0x2135 | P2135 | P2135 Drosselklappenpotentiometer 1/2 Spannung - Korrelationsfehler |
| 0x2136 | P2136 | P2136 Drosselklappenpotentiometer 1/3 Spannung - Korrelationsfehler |
| 0x2137 | P2137 | P2137 Drosselklappenpotentiometer 2/3 Spannung - Korrelationsfehler |
| 0x2138 | P2138 | P2138 Pedalwertgeber 1/2 Spannung - Korrelationsfehler |
| 0x2139 | P2139 | P2139 Pedalwertgeber 1/3 Spannung - Korrelationsfehler |
| 0x2140 | P2140 | P2140 Pedalwertgeber 2/3 Spannung - Korrelationsfehler |
| 0x2141 | P2141 | P2141 Abgasrückführung Drosselklappensteuerung - Input niedrig |
| 0x2142 | P2142 | P2142 Abgasrückführung Drosselklappensteuerung - Input hoch |
| 0x2143 | P2143 | P2143 Abgasrückführung Entlüftungsventil - Fehlfunktion oder Leitungsunterbrechung |
| 0x2144 | P2144 | P2144 Abgasrückführung Entlüftungsventil - Input niedrig |
| 0x2145 | P2145 | P2145 Abgasrückführung Entlüftungsventil - Input hoch |
| 0x2146 | P2146 | P2146 Einspritzventil Gruppe A Versorgungsspannung - Fehlfunktion oder Leitungsunterbrechung |
| 0x2147 | P2147 | P2147 Einspritzventil Gruppe A Versorgungsspannung - Input niedrig |
| 0x2148 | P2148 | P2148 Einspritzventil Gruppe A Versorgungsspannung - Input hoch |
| 0x2149 | P2149 | P2149 Einspritzventil Gruppe B Versorgungsspannung - Fehlfunktion oder Leitungsunterbrechung |
| 0x2150 | P2150 | P2150 Einspritzventil Gruppe B Versorgungsspannung - Input niedrig |
| 0x2151 | P2151 | P2151 Einspritzventil Gruppe B Versorgungsspannung - Input hoch |
| 0x2152 | P2152 | P2152 Einspritzventil Gruppe C Versorgungsspannung - Fehlfunktion oder Leitungsunterbrechung |
| 0x2153 | P2153 | P2153 Einspritzventil Gruppe C Versorgungsspannung - Input niedrig |
| 0x2154 | P2154 | P2154 Einspritzventil Gruppe C Versorgungsspannung - Input hoch |
| 0x2155 | P2155 | P2155 Einspritzventil Gruppe A Versorgungsspannung - Fehlfunktion oder Leitungsunterbrechung |
| 0x2156 | P2156 | P2156 Einspritzventil Gruppe D Versorgungsspannung - Input niedrig |
| 0x2157 | P2157 | P2157 Einspritzventil Gruppe D Versorgungsspannung - Input hoch |
| 0x2158 | P2158 | P2158 Fahrzeuggeschwindigkeitssensor 2 - Fehlfunktion |
| 0x2159 | P2159 | P2159 Fahrzeuggeschwindigkeitssensor 2 - Meßbereichs- oder Leistungsproblem |
| 0x2160 | P2160 | P2160 Fahrzeuggeschwindigkeitssensor 2 - Input niedrig |
| 0x2161 | P2161 | P2161 Fahrzeuggeschwindigkeitssensor 2 - sporadisch/unregelmäßig/zu hoch |
| 0x2162 | P2162 | P2162 Fahrzeuggeschwindigkeitssensor 1/2 - Korrelationsfehler |
| 0x2163 | P2163 | P2163 Drosselklappenpotentiometer 1 Maximalanschlag - Leistungsproblem |
| 0x2164 | P2164 | P2164 Drosselklappenpotentiometer 2 Maximalanschlag - Leistungsproblem |
| 0x2165 | P2165 | P2165 Drosselklappenpotentiometer 3 Maximalanschlag - Leistungsproblem |
| 0x2166 | P2166 | P2166 Pedalwertgeber 1 Maximalanschlag - Leistungsproblem |
| 0x2167 | P2167 | P2167 Pedalwertgeber 2 Maximalanschlag - Leistungsproblem |
| 0x2168 | P2168 | P2168 Pedalwertgeber 3 Maximalanschlag - Leistungsproblem |
| 0x2169 | P2169 | P2169 Abgasdruckregler Entlüftungsventil - Fehlfunktion oder Leitungsunterbrechung |
| 0x2170 | P2170 | P2170 Abgasdruckregler Entlüftungsventil - Input niedrig |
| 0x2171 | P2171 | P2171 Abgasdruckregler Entlüftungsventil - Input hoch |
| 0x2172 | P2172 | P2172 Drosselklappensteller Stellsystem - plötzlicher hoher Luftdurchsatz entdeckt |
| 0x2173 | P2173 | P2173 Drosselklappensteller Stellsystem - hoher Luftdurchsatz entdeckt |
| 0x2174 | P2174 | P2174 Drosselklappensteller Stellsystem - plötzlicher niedriger Luftdurchsatz entdeckt |
| 0x2175 | P2175 | P2175 Drosselklappensteller Stellsystem - niedriger Luftdurchsatz entdeckt |
| 0x2176 | P2176 | P2176 Drosselklappensteller Stellsystem - Leerlaufposition nicht gelernt |
| 0x2177 | P2177 | P2177 Gemischregelung in Teillast (Bank 1) - Gemisch zu mager |
| 0x2178 | P2178 | P2178 Gemischregelung in Teillast (Bank 1) - Gemisch zu fett |
| 0x2179 | P2179 | P2179 Gemischregelung in Teillast (Bank 2) - Gemisch zu mager |
| 0x2180 | P2180 | P2180 Gemischregelung in Teillast (Bank 2) - Gemisch zu fett |
| 0x2181 | P2181 | P2181 Kühlsystem - Leistungsproblem |
| 0x2182 | P2182 | P2182 Motorkühlmitteltemperaturfühler 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x2183 | P2183 | P2183 Motorkühlmitteltemperaturfühler 2 - Meßbereichs- oder Leistungsproblem |
| 0x2184 | P2184 | P2184 Motorkühlmitteltemperaturfühler 2 - Input niedrig |
| 0x2185 | P2185 | P2185 Motorkühlmitteltemperaturfühler 2 - Input hoch |
| 0x2186 | P2186 | P2186 Motorkühlmitteltemperaturfühler 2 - Input sporadisch/unregelmäßig |
| 0x2187 | P2187 | P2187 Gemischregelung im Leerlauf (Bank 1) - Gemisch zu mager |
| 0x2188 | P2188 | P2188 Gemischregelung im Leerlauf (Bank 1) - Gemisch zu fett |
| 0x2189 | P2189 | P2189 Gemischregelung im Leerlauf (Bank 2) - Gemisch zu mager |
| 0x2190 | P2190 | P2190 Gemischregelung im Leerlauf (Bank 2) - Gemisch zu fett |
| 0x2191 | P2191 | P2191 Gemischregelung in Volllast (Bank 1) - Gemisch zu mager |
| 0x2192 | P2192 | P2192 Gemischregelung in Volllast (Bank 1) - Gemisch zu fett |
| 0x2193 | P2193 | P2193 Gemischregelung in Volllast (Bank 2) - Gemisch zu mager |
| 0x2194 | P2194 | P2194 Gemischregelung in Volllast (Bank 2) - Gemisch zu fett |
| 0x2195 | P2195 | P2195 Lambdasonde (Bank 1, vor Katalysator) - Kennliniendrehung/Signal festliegend auf Mager |
| 0x2196 | P2196 | P2196 Lambdasonde (Bank 1, vor Katalysator) - Kennliniendrehung/Signal festliegend auf Fett |
| 0x2197 | P2197 | P2197 Lambdasonde (Bank 2, vor Katalysator) - Kennliniendrehung/Signal festliegend auf Mager |
| 0x2198 | P2198 | P2198 Lambdasonde (Bank 2, vor Katalysator) - Kennliniendrehung/Signal festliegend auf Fett |
| 0x2199 | P2199 | P2199 Ansauglufttemperaturfühler 1/2 - Korrelationsfehler |
| 0x2200 | P2200 | P2200 NOx Sensor (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2201 | P2201 | P2201 NOx Sensor (Bank 1) - Meßbereichs- oder Leistungsproblem |
| 0x2202 | P2202 | P2202 NOx Sensor (Bank 1) - Input niedrig |
| 0x2203 | P2203 | P2203 NOx Sensor (Bank 1) - Input hoch |
| 0x2204 | P2204 | P2204 NOx Sensor (Bank 1) - Input sporadisch |
| 0x2205 | P2205 | P2205 NOx Sensor Heizungsschaltkreis (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2206 | P2206 | P2206 NOx Sensor Heizungsschaltkreis (Bank 1) - Input niedrig |
| 0x2207 | P2207 | P2207 NOx Sensor Heizungsschaltkreis (Bank 1) - Input hoch |
| 0x2208 | P2208 | P2208 NOx Sensor Heizungsüberwachungskreis (Bank 1) - Fehlfunktion |
| 0x2209 | P2209 | P2209 NOx Sensor Heizungsüberwachungskreis (Bank 1) - Meßbereichs- oder Leistungsproblem |
| 0x2210 | P2210 | P2210 NOx Sensor Heizungsüberwachungskreis (Bank 1) - Input niedrig |
| 0x2211 | P2211 | P2211 NOx Sensor Heizungsüberwachungskreis (Bank 1) - Input hoch |
| 0x2212 | P2212 | P2212 NOx Sensor Heizungsüberwachungskreis (Bank 1) - Input sporadisch |
| 0x2213 | P2213 | P2213 NOx Sensor (Bank 2) - Fehlfunktion |
| 0x2214 | P2214 | P2214 NOx Sensor (Bank 2) - Meßbereichs- oder Leistungsproblem |
| 0x2215 | P2215 | P2215 NOx Sensor (Bank 2) - Input niedrig |
| 0x2216 | P2216 | P2216 NOx Sensor (Bank 2) - Input hoch |
| 0x2217 | P2217 | P2217 NOx Sensor (Bank 2) - Input sporadisch |
| 0x2218 | P2218 | P2218 NOx Sensor Heizungsschaltkreis (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2219 | P2219 | P2219 NOx Sensor Heizungsschaltkreis (Bank 2) - Input niedrig |
| 0x2220 | P2220 | P2220 NOx Sensor Heizungsschaltkreis (Bank 2) - Input hoch |
| 0x2221 | P2221 | P2221 NOx Sensor Heizungsüberwachungskreis (Bank 2) - Fehlfunktion |
| 0x2222 | P2222 | P2222 NOx Sensor Heizungsüberwachungskreis (Bank 2) - Meßbereichs- oder Leistungsproblem |
| 0x2223 | P2223 | P2223 NOx Sensor Heizungsüberwachungskreis (Bank 2) - Input niedrig |
| 0x2224 | P2224 | P2224 NOx Sensor Heizungsüberwachungskreis (Bank 2) - Input hoch |
| 0x2225 | P2225 | P2225 NOx Sensor Heizungsüberwachungskreis (Bank 2) - Input sporadisch |
| 0x2226 | P2226 | P2226 Umgebungsdruckschaltkreis - Fehlfunktion |
| 0x2227 | P2227 | P2227 Umgebungsdruckschaltkreis - Meßbereichs- oder Leistungsproblem |
| 0x2228 | P2228 | P2228 Umgebungsdruckschaltkreis - Input niedrig |
| 0x2229 | P2229 | P2229 Umgebungsdruckschaltkreis - Input hoch |
| 0x2230 | P2230 | P2230 Umgebungsdruckschaltkreis - Input sporadisch |
| 0x2231 | P2231 | P2231 Lambdasonde (Bank 1, vor Katalysator) - Heizereinkopplung auf Signalpfad  |
| 0x2232 | P2232 | P2232 Lambdasonde (Bank 1, nach Katalysator) - Heizereinkopplung auf Signalpfad  |
| 0x2233 | P2233 | P2233 Lambdasonde (Bank 1, Sonde 3) - Heizereinkopplung auf Signalpfad  |
| 0x2234 | P2234 | P2234 Lambdasonde (Bank 2, vor Katalysator) - Heizereinkopplung auf Signalpfad  |
| 0x2235 | P2235 | P2235 Lambdasonde (Bank 2, nach Katalysator) Heizereinkopplung auf Signalpfad  |
| 0x2236 | P2236 | P2236 Lambdasonde (Bank 1, Sensor 3) - Heizereinkopplung auf Signalpfad  |
| 0x2237 | P2237 | P2237 Lambdasonde Pumpstromleitung (Bank 1, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2238 | P2238 | P2238 Lambdasonde Pumpstromleitung (Bank 1, vor Katalysator) - Input niedrig |
| 0x2239 | P2239 | P2239 Lambdasonde Pumpstromleitung (Bank 1, vor Katalysator) - Input hoch |
| 0x2240 | P2240 | P2240 Lambdasonde Pumpstromleitung (Bank 2, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2241 | P2241 | P2241 Lambdasonde Pumpstromleitung (Bank 2, vor Katalysator) - Input niedrig |
| 0x2242 | P2242 | P2242 Lambdasonde Pumpstromleitung (Bank 2, vor Katalysator) - Input hoch |
| 0x2243 | P2243 | P2243 Lambdasonde Nernstleitung (Bank 1, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2244 | P2244 | P2244 Lambdasonde Nernstleitung (Bank 1, vor Katalysator) - Leistungsproblem |
| 0x2245 | P2245 | P2245 Lambdasonde Nernstleitung (Bank 1, vor Katalysator) - Input niedrig |
| 0x2246 | P2246 | P2246 Lambdasonde Nernstleitung (Bank 1, vor Katalysator) - Input hoch |
| 0x2247 | P2247 | P2247 Lambdasonde Nernstleitung (Bank 2, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2248 | P2248 | P2248 Lambdasonde Nernstleitung (Bank 2, vor Katalysator) - Leistungsproblem |
| 0x2249 | P2249 | P2249 Lambdasonde Nernstleitung (Bank 2, vor Katalysator) - Input niedrig |
| 0x2250 | P2250 | P2250 Lambdasonde Nernstleitung (Bank 2, vor Katalysator) - Input hoch |
| 0x2251 | P2251 | P2251 Lambdasonde virtuelle Masse (Bank 1, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2252 | P2252 | P2252 Lambdasonde virtuelle Masse (Bank 1, vor Katalysator) - Input niedrig |
| 0x2253 | P2253 | P2253 Lambdasonde virtuelle Masse (Bank 1, vor Katalysator) - Input hoch |
| 0x2254 | P2254 | P2254 Lambdasonde virtuelle Masse (Bank 2, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2255 | P2255 | P2255 Lambdasonde virtuelle Masse (Bank 2, vor Katalysator) - Input niedrig |
| 0x2256 | P2256 | P2256 Lambdasonde virtuelle Masse (Bank 2, vor Katalysator) - Input hoch |
| 0x2261 | P2261 | P2261 Turbolader/Verdichter Bypassventil - mechanischer Fehler |
| 0x2262 | P2262 | P2262 Turbolader/Verdichter Ladedruck nicht erkannt - mechanischer Fehler |
| 0x2263 | P2263 | P2263 Turbolader/Verdichter Ladedrucksystem - Leistungsproblem |
| 0x2270 | P2270 | P2270 Lambdasonde (Bank 1, nach Katalysator) - Signal festliegend auf Mager |
| 0x2271 | P2271 | P2271 Lambdasonde (Bank 1, nach Katalysator) - Signal festliegend auf Fett |
| 0x2272 | P2272 | P2272 Lambdasonde (Bank 2, nach Katalysator) - Signal festliegend auf Mager |
| 0x2273 | P2273 | P2273 Lambdasonde (Bank 2, nach Katalysator) - Signal festliegend auf Fett |
| 0x2274 | P2274 | P2274 Lambdasonde (Bank 1, Sensor 3) - Signal festliegend auf Mager |
| 0x2275 | P2275 | P2275 Lambdasonde (Bank 1, Sensor 3) - Signal festliegend auf Fett |
| 0x2276 | P2276 | P2276 Lambdasonde (Bank 2, Sensor 3) - Signal festliegend auf Mager |
| 0x2277 | P2277 | P2277 Lambdasonde (Bank 2, Sensor 3) - Signal festliegend auf Fett |
| 0x2278 | P2278 | P2278 Lambdasonden Signal Bank 1 Sensor 3 / Bank 2 Sensor 3 - vertauscht  |
| 0x2279 | P2279 | P2279 Ansaugluftsystem - Leck entdeckt |
| 0x2282 | P2282 | P2282 Leckluft zwischen Drosselklappensteller und Einlassventilen |
| 0x2293 | P2293 | P2293 Kraftstoffdruckregler 2 - Leistungsproblem |
| 0x2294 | P2294 | P2294 Kraftstoffdruckregler 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x2295 | P2295 | P2295 Kraftstoffdruckregler 2 - Input niedrig |
| 0x2296 | P2296 | P2296 Kraftstoffdruckregler 2 - input hoch |
| 0x2297 | P2297 | P2297 Lambdasonde (Bank 1, vor Katalysator) - Spannungswert außerhalb Gültigkeitsbereich im Schub |
| 0x2298 | P2298 | P2298 Lambdasonde (Bank 2, vor Katalysator) - Spannungswert außerhalb Gültigkeitsbereich im Schub |
| 0x2299 | P2299 | P2299 Gaspedal- und Bremspedalstellung - Kompatibilitätsfehler |
| 0x2300 | P2300 | P2300 Zündspule 1, Primärkreis - Input niedrig |
| 0x2301 | P2301 | P2301 Zündspule 1, Primärkreis - Input hoch |
| 0x2302 | P2302 | P2302 Zündspule 1, Sekundärkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2303 | P2303 | P2303 Zündspule 2, Primärkreis - Input niedrig |
| 0x2304 | P2304 | P2304 Zündspule 2, Primärkreis - Input hoch |
| 0x2305 | P2305 | P2305 Zündspule 2, Sekundärkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2306 | P2306 | P2306 Zündspule 3, Primärkreis - Input niedrig |
| 0x2307 | P2307 | P2307 Zündspule 3, Primärkreis - Input hoch |
| 0x2308 | P2308 | P2308 Zündspule 3, Sekundärkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2309 | P2309 | P2309 Zündspule 4, Primärkreis - Input niedrig |
| 0x2310 | P2310 | P2310 Zündspule 4, Primärkreis - Input hoch |
| 0x2311 | P2311 | P2311 Zündspule 4, Sekundärkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2312 | P2312 | P2312 Zündspule 5, Primärkreis - Input niedrig |
| 0x2313 | P2313 | P2313 Zündspule 5, Primärkreis - Input hoch |
| 0x2314 | P2314 | P2314 Zündspule 5, Sekundärkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2315 | P2315 | P2315 Zündspule 6, Primärkreis - Input niedrig |
| 0x2316 | P2316 | P2316 Zündspule 6, Primärkreis - Input hoch |
| 0x2317 | P2317 | P2317 Zündspule 6, Sekundärkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2318 | P2318 | P2318 Zündspule 7, Primärkreis - Input niedrig |
| 0x2319 | P2319 | P2319 Zündspule 7, Primärkreis - Input hoch |
| 0x2320 | P2320 | P2320 Zündspule 7, Sekundärkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2321 | P2321 | P2321 Zündspule 8, Primärkreis - Input niedrig |
| 0x2322 | P2322 | P2322 Zündspule 8, Primärkreis - Input hoch |
| 0x2323 | P2323 | P2323 Zündspule 8, Sekundärkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2324 | P2324 | P2324 Zündspule 9, Primärkreis - Input niedrig |
| 0x2325 | P2325 | P2325 Zündspule 9, Primärkreis - Input hoch |
| 0x2326 | P2326 | P2326 Zündspule 9, Sekundärkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2327 | P2327 | P2327 Zündspule 10, Primärkreis - Input niedrig |
| 0x2328 | P2328 | P2328 Zündspule 10, Primärkreis - Input hoch |
| 0x2329 | P2329 | P2329 Zündspule 10, Sekundärkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2330 | P2330 | P2330 Zündspule 11, Primärkreis - Input niedrig |
| 0x2331 | P2331 | P2331 Zündspule 11, Primärkreis - Input hoch |
| 0x2332 | P2332 | P2332 Zündspule 11, Sekundärkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2333 | P2333 | P2333 Zündspule 12, Primärkreis - Input niedrig |
| 0x2334 | P2334 | P2334 Zündspule 12, Primärkreis - Input hoch |
| 0x2335 | P2335 | P2335 Zündspule 12, Sekundärkreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2336 | P2336 | P2336 Zylinder 1 - Klopfwert über Schwellwert |
| 0x2337 | P2337 | P2337 Zylinder 2 - Klopfwert über Schwellwert |
| 0x2338 | P2338 | P2338 Zylinder 3 - Klopfwert über Schwellwert |
| 0x2339 | P2339 | P2339 Zylinder 4 - Klopfwert über Schwellwert |
| 0x2340 | P2340 | P2340 Zylinder 5 - Klopfwert über Schwellwert |
| 0x2341 | P2341 | P2341 Zylinder 6 - Klopfwert über Schwellwert |
| 0x2342 | P2342 | P2342 Zylinder 7 - Klopfwert über Schwellwert |
| 0x2343 | P2343 | P2343 Zylinder 8 - Klopfwert über Schwellwert |
| 0x2344 | P2344 | P2344 Zylinder 9 - Klopfwert über Schwellwert |
| 0x2345 | P2345 | P2345 Zylinder 10 - Klopfwert über Schwellwert |
| 0x2346 | P2346 | P2346 Zylinder 11 - Klopfwert über Schwellwert |
| 0x2347 | P2347 | P2347 Zylinder 12 - Klopfwert über Schwellwert |
| 0x2400 | P2400 | P2400 Tankentlüftungssystem Leckdiagnosepumpe - Fehlfunktion oder Leitungsunterbrechung |
| 0x2401 | P2401 | P2401 Tankentlüftungssystem Leckdiagnosepumpe - Input niedrig |
| 0x2402 | P2402 | P2402 Tankentlüftungssystem Leckdiagnosepumpe - Input hoch |
| 0x2403 | P2403 | P2403 Tankentlüftungssystem Leckdiagnosepumpe, Überwachungskreis - Fehlfunktion oder Leitungsunterbrechung |
| 0x2404 | P2404 | P2404 Tankentlüftungssystem Leckdiagnosepumpe, Überwachungskreis - Meßbereichs- oder Leistungsproblem |
| 0x2405 | P2405 | P2405 Tankentlüftungssystem Leckdiagnosepumpe, Überwachungskreis - Input niedrig |
| 0x2406 | P2406 | P2406 Tankentlüftungssystem Leckdiagnosepumpe, Überwachungskreis - Input hoch |
| 0x2407 | P2407 | P2407 Tankentlüftungssystem Leckdiagnosepumpe, Überwachungskreis - Input sporadisch/unregelmäßig |
| 0x2408 | P2408 | P2408 Tankdeckel Sensor/Schalter - Fehlfunktion |
| 0x2409 | P2409 | P2409 Tankdeckel Sensor/Schalter - Meßbereichs- oder Leistungsproblem |
| 0x2410 | P2410 | P2410 Tankdeckel Sensor/Schalter - Input niedrig |
| 0x2411 | P2411 | P2411 Tankdeckel Sensor/Schalter - Input hoch |
| 0x2412 | P2412 | P2412 Tankdeckel Sensor/Schalter - Input sporadisch/unregelmäßig |
| 0x2413 | P2413 | P2413 Abgasrückführungssystem - Leistungsproblem |
| 0x2414 | P2414 | P2414 Lambdasonde (Bank 1, vor Katalysator) - nicht angesteckt |
| 0x2415 | P2415 | P2415 Lambdasonde (Bank 2, vor Katalysator) - nicht angesteckt |
| 0x2416 | P2416 | P2416 Lambdasonden Signal Bank 1 nach Katalysator / Bank 1 Sensor 3 - vertauscht  |
| 0x2417 | P2417 | P2417 Lambdasonden Signal Bank 2 nach Katalysator / Bank 2 Sensor 3 - vertauscht  |
| 0x2418 | P2418 | P2418 Tankentlüftungssystem Umschaltventil - Fehlfunktion oder Leitungsunterbrechung |
| 0x2419 | P2419 | P2419 Tankentlüftungssystem Umschaltventil - Input niedrig |
| 0x2420 | P2420 | P2420 Tankentlüftungssystem Umschaltventil - Input hoch |
| 0x2421 | P2421 | P2421 Tankentlüftungssystem Entlüftungsventil - klemmt offen |
| 0x2422 | P2422 | P2422 Tankentlüftungssystem Entlüftungsventil - klemmt geschlossen |
| 0x2423 | P2423 | P2423 HC-Speicherung Katalysator (Bank 1) - Wirkungsgrad unter Schwellwert |
| 0x2424 | P2424 | P2424 HC-Speicherung Katalysator (Bank 2) - Wirkungsgrad unter Schwellwert |
| 0x2425 | P2425 | P2425 Abgasrückführung Kühlventil - Fehlfunktion oder Leitungsunterbrechung |
| 0x2426 | P2426 | P2426 Abgasrückführung Kühlventil - Input niedrig |
| 0x2427 | P2427 | P2427 Abgasrückführung Kühlventil - Input hoch |
| 0x2428 | P2428 | P2428 Abgastemperatur (Bank 1) - zu hoch |
| 0x2429 | P2429 | P2429 Abgastemperatur (Bank 2) - zu hoch |
| 0x2430 | P2430 | P2430 Sekundärluftmassenmesser/Drucksensor (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2431 | P2431 | P2431 Sekundärluftmassenmesser/Drucksensor (Bank 1) - Meßbereichs- oder Leistungsproblem |
| 0x2432 | P2432 | P2432 Sekundärluftmassenmesser/Drucksensor (Bank 1) - Input niedrig |
| 0x2433 | P2433 | P2433 Sekundärluftmassenmesser/Drucksensor (Bank 1) - Input hoch |
| 0x2434 | P2434 | P2434 Sekundärluftmassenmesser/Drucksensor (Bank 1) - Input sporadisch/unregelmäßig |
| 0x2435 | P2435 | P2435 Sekundärluftmassenmesser/Drucksensor (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2436 | P2436 | P2436 Sekundärluftmassenmesser/Drucksensor (Bank 2) - Meßbereichs- oder Leistungsproblem |
| 0x2437 | P2437 | P2437 Sekundärluftmassenmesser/Drucksensor (Bank 2) - Input niedrig |
| 0x2438 | P2438 | P2438 Sekundärluftmassenmesser/Drucksensor (Bank 2) - Input hoch |
| 0x2439 | P2439 | P2439 Sekundärluftmassenmesser/Drucksensor (Bank 2) - Input sporadisch/unregelmäßig |
| 0x2440 | P2440 | P2440 Sekundärluftventil (Bank 1) - klemmt offen |
| 0x2441 | P2441 | P2441 Sekundärluftventil (Bank 1) - klemmt geschlossen |
| 0x2442 | P2442 | P2442 Sekundärluftventil (Bank 2) - klemmt offen |
| 0x2443 | P2443 | P2443 Sekundärluftventil (Bank 2) - klemmt geschlossen |
| 0x2444 | P2444 | P2444 Sekundärluftpumpe (Bank 1) - klemmt geschlossen |
| 0x2445 | P2445 | P2445 Sekundärluftpumpe (Bank 1) - klemmt offen |
| 0x2446 | P2446 | P2446 Sekundärluftpumpe (Bank 2) - klemmt geschlossen |
| 0x2447 | P2447 | P2447 Sekundärluftpumpe (Bank 2) - klemmt offen |
| 0x2448 | P2448 | P2448 Sekundärluftsystem (Bank 1) - hoher Durchsatz |
| 0x2449 | P2449 | P2449 Sekundärluftsystem (Bank 2) - hoher Durchsatz |
| 0x2450 | P2450 | P2450 Tankentlüftungssystem Umschaltventil - Leistungsproblem oder klemmt offen |
| 0x2451 | P2451 | P2451 Tankentlüftungssystem Umschaltventil - klemmt geschlossen |
| 0x2505 | P2505 | P2505 Motorsteuergerät/Powerstrain Steuergerät Versorgungsspannungssignal - Fehlfunktion |
| 0x2506 | P2506 | P2506 Motorsteuergerät/Powerstrain Steuergerät Versorgungsspannungssignal - Meßbereichs- oder Leistungsproblem |
| 0x2507 | P2507 | P2507 Motorsteuergerät/Powerstrain Steuergerät Versorgungsspannungssignal - Input niedrig |
| 0x2508 | P2508 | P2508 Motorsteuergerät/Powerstrain Steuergerät Versorgungsspannungssignal - Input hoch |
| 0x2509 | P2509 | P2509 Motorsteuergerät/Powerstrain Steuergerät Versorgungsspannungssignal - Input sporadisch |
| 0x250A | P250A | P250A Motorölstandsfühler - Fehlfunktion oder Leitungsunterbrechung |
| 0x250B | P250B | P250B Motorölstandsfühler - Meßbereichs- oder Leistungsproblem |
| 0x250C | P250C | P250C Motorölstandsfühler - Input niedrig |
| 0x250D | P250D | P250D Motorölstandsfühler - Input hoch |
| 0x250E | P250E | P250E Motorölstandsfühler - Input sporadisch/unregelmäßig |
| 0x250F | P250F | P250F Motorölstand - zu niedrig |
| 0x2510 | P2510 | P2510 Motorsteuergerät/Powertrain Steuergerät Hauptrelais Überwachungskreis - Meßbereichs- oder Leistungsproblem |
| 0x2511 | P2511 | P2511 Motorsteuergerät/Powertrain Steuergerät Hauptrelais Überwachungskreis - Input sporadisch |
| 0x2515 | P2515 | P2515 Klimaanlage Kältemitteldrucksensor 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x2516 | P2516 | P2516 Klimaanlage Kältemitteldrucksensor 2 - Meßbereichs- oder Leistungsproblem |
| 0x2517 | P2517 | P2517 Klimaanlage Kältemitteldrucksensor 2 - Input niedrig |
| 0x2518 | P2518 | P2518 Klimaanlage Kältemitteldrucksensor 2 - Input hoch |
| 0x2519 | P2519 | P2519 Klimaanlage Anforderung 1 - Fehlfunktion |
| 0x2520 | P2520 | P2520 Klimaanlage Anforderung 1 - Input niedrig |
| 0x2521 | P2521 | P2521 Klimaanlage Anforderung 1 - Input hoch |
| 0x2522 | P2522 | P2522 Klimaanlage Anforderung 2 - Fehlfunktion |
| 0x2523 | P2523 | P2523 Klimaanlage Anforderung 2 - Input niedrig |
| 0x2524 | P2524 | P2524 Klimaanlage Anforderung 2 - Input hoch |
| 0x252A | P252A | P252A Motorölqualitätssensor - Fehlfunktion oder Leitungsunterbrechung |
| 0x252B | P252B | P252B Motorölqualitätssensor - Meßbereichs- oder Leistungsproblem |
| 0x252C | P252C | P252C Motorölqualitätssensor - Input niedrig |
| 0x252D | P252D | P252D Motorölqualitätssensor - Input hoch |
| 0x252E | P252E | P252E Motorölqualitätssensor - Input sporadisch/unregelmäßig |
| 0x252F | P252F | P252F Motorölstand - zu hoch |
| 0x2556 | P2556 | P2556 Motorkühlmittel-Füllstandssensor/-schalter - Fehlfunktion oder Leitungsunterbrechung |
| 0x2557 | P2557 | P2557 Motorkühlmittel-Füllstandssensor/-schalter - Meßbereichs- oder Leistungsproblem |
| 0x2558 | P2558 | P2558 Motorkühlmittel-Füllstandssensor/-schalter - Input niedrig |
| 0x2559 | P2559 | P2559 Motorkühlmittel-Füllstandssensor/-schalter - Input hoch |
| 0x2560 | P2560 | P2560 Motorkühlmittel - Füllstand zu niedrig |
| 0x2562 | P2562 | P2562 Turbolader Ladedruckregelung Positionssensor 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x2563 | P2563 | P2563 Turbolader Ladedruckregelung Positionssensor 1 - Meßbereichs- oder Leistungsproblem |
| 0x2564 | P2564 | P2564 Turbolader Ladedruckregelung Positionssensor 1 - Input niedrig |
| 0x2565 | P2565 | P2565 Turbolader Ladedruckregelung Positionssensor 1 - Input hoch |
| 0x2566 | P2566 | P2566 Turbolader Ladedruckregelung Positionssensor 1 - Input sporadisch |
| 0x256A | P256A | P256A Motorleerlaufdrehzahl Wählsensor/Wählschalter - Fehlfunktion oder Leitungsunterbrechung |
| 0x256B | P256B | P256B Motorleerlaufdrehzahl Wählsensor/Wählschalter - Meßbereichs- oder Leitungsproblem |
| 0x256C | P256C | P256C Motorleerlaufdrehzahl Wählsensor/Wählschalter - Input niedrig |
| 0x256D | P256D | P256D Motorleerlaufdrehzahl Wählsensor/Wählschalter - Input hoch |
| 0x256E | P256E | P256E Motorleerlaufdrehzahl Wählsensor/Wählschalter - Input sporadisch/unregelmäßig |
| 0x2577 | P2577 | P2577 Direkte Ozon-Reduzierung Katalysator - Wirkungsgrad unter Schwellwert |
| 0x2578 | P2578 | P2578 Turbolader Drehzahlfühler - Fehlfunktion oder Leitungsunterbrechung |
| 0x2579 | P2579 | P2579 Turbolader Drehzahlfühler - Meßbereichs- oder Leistungsproblem |
| 0x2580 | P2580 | P2580 Turbolader Drehzahlfühler - Input niedrig |
| 0x2581 | P2581 | P2581 Turbolader Drehzahlfühler - Input high |
| 0x2582 | P2582 | P2582 Turbolader Drehzahlfühler - Input sporadisch |
| 0x2583 | P2583 | P2583 Fahrgeschwindigkeitsregelung Abstandsmesser vorn - Fehlfunktion |
| 0x2586 | P2586 | P2586 Turbolader Ladedruckregelung Positionssensor 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x2587 | P2587 | P2587 Turbolader Ladedruckregelung Positionssensor 2 - Meßbereichs- oder Leistungsproblem |
| 0x2588 | P2588 | P2588 Turbolader Ladedruckregelung Positionssensor 2 - Input niedrig |
| 0x2589 | P2589 | P2589 Turbolader Ladedruckregelung Positionssensor 2 - Input hoch |
| 0x2590 | P2590 | P2590 Turbolader Ladedruckregelung Positionssensor 2 - Input sporadisch/unregelmäßig |
| 0x2600 | P2600 | P2600 Kühlmittelpumpe - Fehlfunktion oder Leitungsunterbrechung |
| 0x2601 | P2601 | P2601 Kühlmittelpumpe - Meßbereichs- oder Leistungsproblem |
| 0x2602 | P2602 | P2602 Kühlmittelpumpe - Input niedrig |
| 0x2603 | P2603 | P2603 Kühlmittelpumpe - Input hoch |
| 0x2604 | P2604 | P2604 Ansaugluftvorwärmer 1 - Meßbereichs- oder Leistungsproblem |
| 0x2605 | P2605 | P2605 Ansaugluftvorwärmer 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x2606 | P2606 | P2606 Ansaugluftvorwärmer 2 - Meßbereichs- oder Leistungsproblem |
| 0x2607 | P2607 | P2607 Ansaugluftvorwärmer 2 - Input niedrig |
| 0x2608 | P2608 | P2608 Ansaugluftvorwärmer 2 - Input hoch |
| 0x2609 | P2609 | P2609 Ansaugluftvorwärmesystem - Leistungsproblem |
| 0x2610 | P2610 | P2610 Motorsteuergerät/Powerstrain Steuergerät Zeitgeber - Leistungsproblem |
| 0x2611 | P2611 | P2611 Klimaanlage Kältemittelverteilerventil - Fehlfunktion oder Leitungsunterbrechung |
| 0x2612 | P2612 | P2612 Klimaanlage Kältemittelverteilerventil - Input niedrig |
| 0x2613 | P2613 | P2613 Klimaanlage Kältemittelverteilerventil - Input hoch |
| 0x2614 | P2614 | P2614 Nockenwellengebersignal Ausgang - Fehlfunktion oder Leitungsunterbrechung |
| 0x2615 | P2615 | P2615 Nockenwellengebersignal Ausgang - Input niedrig |
| 0x2616 | P2616 | P2616 Nockenwellengebersignal Ausgang - Input hoch |
| 0x2617 | P2617 | P2617 Kurbelwellengebersignal Ausgang - Fehlfunktion oder Leitungsunterbrechung |
| 0x2618 | P2618 | P2618 Kurbelwellengebersignal Ausgang - Input niedrig |
| 0x2619 | P2619 | P2619 Kurbelwellengebersignal Ausgang - Input hoch |
| 0x2620 | P2620 | P2620 Drosselklappenstellung Ausgang - Fehlfunktion oder Leitungsunterbrechung |
| 0x2621 | P2621 | P2621 Drosselklappenstellung Ausgang - Input niedrig |
| 0x2622 | P2622 | P2622 Drosselklappenstellung Ausgang - Input hoch |
| 0x2626 | P2626 | P2626 Lambdasonde Pumpstrom-Abgleichleitung (Bank 1, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2627 | P2627 | P2627 Lambdasonde Pumpstrom-Abgleichleitung (Bank 1, vor Katalysator) - Input niedrig |
| 0x2628 | P2628 | P2628 Lambdasonde Pumpstrom-Abgleichleitung (Bank 1, vor Katalysator) - Input hoch |
| 0x2629 | P2629 | P2629 Lambdasonde Pumpstrom-Abgleichleitung (Bank 2, vor Katalysator) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2630 | P2630 | P2630 Lambdasonde Pumpstrom-Abgleichleitung (Bank 2, vor Katalysator) - Input niedrig |
| 0x2631 | P2631 | P2631 Lambdasonde Pumpstrom-Abgleichleitung (Bank 2, vor Katalysator) - Input hoch |
| 0x2632 | P2632 | P2632 Kraftstoffpumpe 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x2633 | P2633 | P2633 Kraftstoffpumpe 2 - Input niedrig |
| 0x2634 | P2634 | P2634 Kraftstoffpumpe 2 - Input hoch |
| 0x2635 | P2635 | P2635 Kraftstoffpumpe 1 - Durchsatz niedrig oder Leistungsproblem |
| 0x2636 | P2636 | P2636 Kraftstoffpumpe 2 - Durchsatz niedrig oder Leistungsproblem |
| 0x2645 | P2645 | P2645 Ventilkipphebel Einlass Versteller/Aktuator (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2646 | P2646 | P2646 Ventilkipphebel Einlass Versteller/Aktuator (Bank 1) - Leistungsproblem oder klemmt offen |
| 0x2647 | P2647 | P2647 Ventilkipphebel Einlass Versteller/Aktuator (Bank 1) - klemmt geschlossen |
| 0x2648 | P2648 | P2648 Ventilkipphebel Einlass Versteller/Aktuator (Bank 1) - Input niedrig |
| 0x2649 | P2649 | P2649 Ventilkipphebel Einlass Versteller/Aktuator (Bank 1) - Input hoch |
| 0x2650 | P2650 | P2650 Ventilkipphebel Auslass Versteller/Aktuator (Bank 1) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2651 | P2651 | P2651 Ventilkipphebel Auslass Versteller/Aktuator (Bank 1) - Leistungsproblem oder klemmt offen |
| 0x2652 | P2652 | P2652 Ventilkipphebel Auslass Versteller/Aktuator (Bank 1) - klemmt geschlossen |
| 0x2653 | P2653 | P2653 Ventilkipphebel Auslass Versteller/Aktuator (Bank 1) - Input niedrig |
| 0x2654 | P2654 | P2654 Ventilkipphebel Auslass Versteller/Aktuator (Bank 1) - Input hoch |
| 0x2655 | P2655 | P2655 Ventilkipphebel Einlass Versteller/Aktuator (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2656 | P2656 | P2656 Ventilkipphebel Einlass Versteller/Aktuator (Bank 2) - Leistungsproblem oder klemmt offen |
| 0x2657 | P2657 | P2657 Ventilkipphebel Einlass Versteller/Aktuator (Bank 2) - klemmt geschlossen |
| 0x2658 | P2658 | P2658 Ventilkipphebel Einlass Versteller/Aktuator (Bank 2) - Input niedrig |
| 0x2659 | P2659 | P2659 Ventilkipphebel Einlass Versteller/Aktuator (Bank 2) - Input hoch |
| 0x2660 | P2660 | P2660 Ventilkipphebel Auslass Versteller/Aktuator (Bank 2) - Fehlfunktion oder Leitungsunterbrechung |
| 0x2661 | P2661 | P2661 Ventilkipphebel Auslass Versteller/Aktuator (Bank 2) - Leistungsproblem oder klemmt offen |
| 0x2662 | P2662 | P2662 Ventilkipphebel Auslass Versteller/Aktuator (Bank 2) - klemmt geschlossen |
| 0x2663 | P2663 | P2663 Ventilkipphebel Auslass Versteller/Aktuator (Bank 2) - Input niedrig |
| 0x2664 | P2664 | P2664 Ventilkipphebel Auslass Versteller/Aktuator (Bank 2) - Input hoch |
| 0x2665 | P2665 | P2665 Kraftstoffabsperrventil 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x2666 | P2666 | P2666 Kraftstoffabsperrventil 2 - Input niedrig |
| 0x2667 | P2667 | P2667 Kraftstoffabsperrventil 2 - Input hoch |
| 0x2672 | P2672 | P2672 Einspritzpumpe - Einspritzzeitpunkt Offset |
| 0x2673 | P2673 | P2673 Einspritzpumpe - Kalibrierung Einspritzzeit nicht gelernt |
| 0x2674 | P2674 | P2674 Einspritzpumpe - Kalibrierung Kraftstoff nicht gelernt |
| 0x2675 | P2675 | P2675 Luftfilter Einlass - Fehlfunktion oder Leitungsunterbrechung |
| 0x2676 | P2676 | P2676 Luftfilter Einlass - Input niedrig |
| 0x2677 | P2677 | P2677 Luftfilter Einlass - Input hoch |
| 0x2678 | P2678 | P2678 Kühlmittel Entgasungsventil - Fehlfunktion oder Leitungsunterbrechung |
| 0x2679 | P2679 | P2679 Kühlmittel Entgasungsventil - Input niedrig |
| 0x2680 | P2680 | P2680 Kühlmittel Entgasungsventil - Input hoch |
| 0x2681 | P2681 | P2681 Motorkühlmittel Bypassventil - Fehlfunktion oder Leitungsunterbrechung |
| 0x2682 | P2682 | P2682 Motorkühlmittel Bypassventil - Input niedrig |
| 0x2683 | P2683 | P2683 Motorkühlmittel Bypassventil - Input hoch |
| 0x2706 | P2706 | P2706 Magnetventil 6 - Fehlfunktion |
| 0x2707 | P2707 | P2707 Magnetventil 6 - Leistungsproblem oder klemmt offen |
| 0x2708 | P2708 | P2708 Magnetventil 6 - klemmt geschlossen |
| 0x2709 | P2709 | P2709 Magnetventil 6 - elektrischer Fehler |
| 0x2710 | P2710 | P2710 Magnetventil 6 - Input sporadisch |
| 0x2712 | P2712 | P2712 Hydraulikaggregat - Leck |
| 0x2713 | P2713 | P2713 Elektrischer Drucksteller 4 - Fehlfunktion |
| 0x2714 | P2714 | P2714 Elektrischer Drucksteller 4 - Leistungsproblem oder klemmt offen |
| 0x2715 | P2715 | P2715 Elektrischer Drucksteller 4 - klemmt geschlossen |
| 0x2716 | P2716 | P2716 Elektrischer Drucksteller 4 - elektrischer Fehler |
| 0x2717 | P2717 | P2717 Elektrischer Drucksteller 4 - Input sporadisch |
| 0x2718 | P2718 | P2718 Elektrischer Drucksteller 4 - Fehlfunktion oder Leitungsunterbrechung |
| 0x2719 | P2719 | P2719 Elektrischer Drucksteller 4 - Meßbereichs- oder Leistungsproblem |
| 0x2720 | P2720 | P2720 Elektrischer Drucksteller 4 - Input niedrig |
| 0x2721 | P2721 | P2721 Elektrischer Drucksteller 4 - Input hoch |
| 0x2722 | P2722 | P2722 Elektrischer Drucksteller 5 - Fehlfunktion |
| 0x2723 | P2723 | P2723 Elektrischer Drucksteller 5 - Leistungsproblem oder klemmt offen |
| 0x2724 | P2724 | P2724 Elektrischer Drucksteller 5 - klemmt geschlossen |
| 0x2725 | P2725 | P2725 Elektrischer Drucksteller 5 - elektrischer Fehler  |
| 0x2726 | P2726 | P2726 Elektrischer Drucksteller 5 - Input sporadisch |
| 0x2727 | P2727 | P2727 Elektrischer Drucksteller 5 - Fehlfunktion oder Leitungsunterbrechung |
| 0x2728 | P2728 | P2728 Elektrischer Drucksteller 5 - Meßbereichs- oder Leistungsproblem |
| 0x2729 | P2729 | P2729 Elektrischer Drucksteller 5 - Input niedrig |
| 0x2730 | P2730 | P2730 Elektrischer Drucksteller 5 - Input hoch |
| 0x2731 | P2731 | P2731 Elektrischer Drucksteller 6 - Fehlfunktion |
| 0x2732 | P2732 | P2732 Elektrischer Drucksteller 6 - Leistungsproblem oder klemmt offen |
| 0x2733 | P2733 | P2733 Elektrischer Drucksteller 6 - klemmt geschlossen |
| 0x2734 | P2734 | P2734 Elektrischer Drucksteller 6 - elektrischer Fehler |
| 0x2735 | P2735 | P2735 Elektrischer Drucksteller 6 - Input sporadisch |
| 0x2736 | P2736 | P2736 Elektrischer Drucksteller 6 - Fehlfunktion oder Leitungsunterbrechung |
| 0x2737 | P2737 | P2737 Elektrischer Drucksteller 6 - Meßbereichs- oder Leistungsproblem |
| 0x2738 | P2738 | P2738 Elektrischer Drucksteller 6 - Input niedrig |
| 0x2739 | P2739 | P2739 Elektrischer Drucksteller 6 - Input hoch |
| 0x2740 | P2740 | P2740 Getriebeöltemperaturfühler 2 - Fehlfunktion |
| 0x2741 | P2741 | P2741 Getriebeöltemperaturfühler 2 - Meßbereichs- oder Leistungsproblem |
| 0x2742 | P2742 | P2742 Getriebeöltemperaturfühler 2 - Input niedrig |
| 0x2743 | P2743 | P2743 Getriebeöltemperaturfühler 2 - Input hoch |
| 0x2744 | P2744 | P2744 Getriebeöltemperaturfühler 2 - Input sporadisch |
| 0x2745 | P2745 | P2745 Zwischenwelle Drehzahlfühler 2 - Fehlfunktion |
| 0x2746 | P2746 | P2746 Zwischenwelle Drehzahlfühler 2 - Meßbereichs- oder Leistungsproblem |
| 0x2747 | P2747 | P2747 Zwischenwelle Drehzahlfühler 2 - kein Signal |
| 0x2748 | P2748 | P2748 Zwischenwelle Drehzahlfühler 2 - Input sporadisch |
| 0x2749 | P2749 | P2749 Zwischenwelle Drehzahlfühler 3 - Fehlfunktion |
| 0x2750 | P2750 | P2750 Zwischenwelle Drehzahlfühler 3 - Meßbereichs- oder Leistungsproblem |
| 0x2751 | P2751 | P2751 Zwischenwelle Drehzahlfühler 3 - kein Signal |
| 0x2752 | P2752 | P2752 Zwischenwelle Drehzahlfühler 3 - Input sporadisch |
| 0x2753 | P2753 | P2753 Getriebeölkühler - Fehlfunktion oder Leitungsunterbrechung |
| 0x2754 | P2754 | P2754 Getriebeölkühler - Input niedrig |
| 0x2755 | P2755 | P2755 Getriebeölkühler - Input hoch |
| 0x2756 | P2756 | P2756 Wandlerüberbrückungskupplung elektrischer Drucksteller - Fehlfunktion |
| 0x2757 | P2757 | P2757 Wandlerüberbrückungskupplung elektrischer Drucksteller - Leistungsproblem oder klemmt offen |
| 0x2758 | P2758 | P2758 Wandlerüberbrückungskupplung elektrischer Drucksteller - klemmt geschlossen |
| 0x2759 | P2759 | P2759 Wandlerüberbrückungskupplung elektrischer Drucksteller - elektrischer Fehler |
| 0x2760 | P2760 | P2760 Wandlerüberbrückungskupplung elektrischer Drucksteller - Input sporadisch |
| 0x2761 | P2761 | P2761 Wandlerüberbrückungskupplung elektrischer Drucksteller - Fehlfunktion oder Leitungsunterbrechung |
| 0x2762 | P2762 | P2762 Wandlerüberbrückungskupplung elektrischer Drucksteller - Meßbereichs- oder Leistungsproblem |
| 0x2763 | P2763 | P2763 Wandlerüberbrückungskupplung elektrischer Drucksteller - Input hoch |
| 0x2764 | P2764 | P2764 Wandlerüberbrückungskupplung elektrischer Drucksteller - Input niedrig |
| 0x2765 | P2765 | P2765 Eingangsdrehzahlfühler 2 Turbine - Fehlfunktion |
| 0x2766 | P2766 | P2766 Eingangsdrehzahlfühler 2 Turbine - Meßbereichs- oder Leistungsproblem |
| 0x2767 | P2767 | P2767 Eingangsdrehzahlfühler 2 Turbine - kein Signal |
| 0x2768 | P2768 | P2768 Eingangsdrehzahlfühler 2 Turbine - Input sporadisch |
| 0x2769 | P2769 | P2769 Wandlerüberbrückungskupplung - Input niedrig |
| 0x2770 | P2770 | P2770 Wandlerüberbrückungskupplung - Input hoch |
| 0x2775 | P2775 | P2775 Hochschaltungs-Schalter - Meßbereichs- oder Leistungsproblem |
| 0x2776 | P2776 | P2776 Hochschaltungs-Schalter - Input niedrig |
| 0x2777 | P2777 | P2777 Hochschaltungs-Schalter - Input hoch |
| 0x2778 | P2778 | P2778 Hochschaltungs-Schalter - Input sporadisch/unregelmäßig |
| 0x2783 | P2783 | P2783 Wandler - Temperatur zu hoch |
| 0x2784 | P2784 | P2784 Eingangsdrehzahlfühler 1/2 Turbine - Korrelationsfehler |
| 0x2785 | P2785 | P2785 Kupplungssteller - Temperatur zu hoch |
| 0x2787 | P2787 | P2787 Kupplung - Temperatur zu hoch |
| 0x2796 | P2796 | P2796 Getriebeöl Zusatzpumpe - Fehlfunktion oder Leitungsunterbrechung |
| 0x2797 | P2797 | P2797 Getriebeöl Zusatzpumpe - Leistungsproblem |
| 0x2798 | P2798 | P2798 Getriebeöl Zusatzpumpe - Input niedrig |
| 0x2799 | P2799 | P2799 Getriebeöl Zusatzpumpe - Input hoch |
| 0x2800 | P2800 | P2800 Getriebepositionssensor 2 (PRNDL) - Fehlfunktion |
| 0x2801 | P2801 | P2801 Getriebepositionssensor 2- Meßbereichs- oder Leistungsproblem |
| 0x2802 | P2802 | P2802 Getriebepositionssensor 2 - Input niedrig |
| 0x2803 | P2803 | P2803 Getriebepositionssensor 2 - Input hoch |
| 0x2804 | P2804 | P2804 Getriebepositionssensor 2 - Input sporadisch |
| 0x2805 | P2805 | P2805 Getriebepositionssensor 1/2 - Korrelationsfehler |
| 0x2806 | P2806 | P2806 Getriebepositionssensor - mechanisch nicht ausgerichtet |
| 0x2807 | P2807 | P2807 Elektrischer Drucksteller 7 - Fehlfunktion |
| 0x2808 | P2808 | P2808 Elektrischer Drucksteller 7 - Leistungsproblem oder klemmt offen |
| 0x2809 | P2809 | P2809 Elektrischer Drucksteller 7 - klemmt geschlossen |
| 0x2810 | P2810 | P2810 Elektrischer Drucksteller 7 - elektrischer Fehler |
| 0x2811 | P2811 | P2811 Elektrischer Drucksteller 7 - Input sporadisch |
| 0x2812 | P2812 | P2812 Elektrischer Drucksteller 7 - Fehlfunktion oder Leitungsunterbrechung |
| 0x2813 | P2813 | P2813 Elektrischer Drucksteller 7 - Meßbereichs- oder Leistungsproblem |
| 0x2814 | P2814 | P2814 Elektrischer Drucksteller 7 - Input niedrig |
| 0x2815 | P2815 | P2815 Elektrischer Drucksteller 7 - Input hoch |
| 0x2A00 | P2A00 | P2A00 Lambdasonde (Bank 1, vor Katalysator) - Meßbereichs- oder Leistungsproblem |
| 0x2A01 | P2A01 | P2A01 Lambdasonde (Bank 1, nach Katalysator) - Meßbereichs- oder Leistungsproblem |
| 0x2A02 | P2A02 | P2A02 Lambdasonde (Bank 1, Sensor 3) - Meßbereichs- oder Leistungsproblem |
| 0x2A03 | P2A03 | P2A03 Lambdasonde (Bank 2, vor Katalysator) - Meßbereichs- oder Leistungsproblem |
| 0x2A04 | P2A04 | P2A04 Lambdasonde (Bank 2, nach Katalysator) - Meßbereichs- oder Leistungsproblem |
| 0x2A05 | P2A05 | P2A05 Lambdasonde (Bank 2, Sensor 3) - Meßbereichs- oder Leistungsproblem |
| 0x3000 | P3000 | P3000 Kraftstoffeinspritzleiste Drucksensor - Offset Maximum überschritten |
| 0x3001 | P3001 | P3001 Kraftstoffeinspritzleiste Drucksensor - Offset Minimum unterschritten |
| 0x3002 | P3002 | P3002 Kraftstoffeinspritzdruck mengengeregelt - Druck zu niedrig |
| 0x3003 | P3003 | P3003 Kraftstoffeinspritzdruck mengengeregelt - Druck zu hoch |
| 0x3004 | P3004 | P3004 Kraftstoffeinspritzdruck mengengeregelt - Maximaldruck überschritten |
| 0x3005 | P3005 | P3005 Kraftstoffeinspritzdruck druckgeregelt - Druck zu niedrig |
| 0x3006 | P3006 | P3006 Kraftstoffeinspritzdruck druckgeregelt - Druck zu hoch |
| 0x3007 | P3007 | P3007 Kraftstoffeinspritzdruck druckgeregelt - Maximaldruck überschritten |
| 0x3008 | P3008 | P3008 Lambdasonde (Bank 1, vor Katalysator) - Input niedrig nach Kaltstart |
| 0x3009 | P3009 | P3009 Lambdasonde (Bank 2, vor Katalysator) - Input niedrig nach Kaltstart |
| 0x300A | P300A | P300A Gesteuerte Luftführung Ansteuerung - Input hoch |
| 0x300B | P300B | P300B Gesteuerte Luftführung Ansteuerung - Input niedrig |
| 0x300C | P300C | P300C Gesteuerte Luftführung Ansteuerung - Leitungsunterbrechung |
| 0x3010 | P3010 | P3010 Lambdasonde (Bank 1, nach Katalysator) - Input niedrig nach Kaltstart |
| 0x3011 | P3011 | P3011 Lambdasonde (Bank 2, nach Katalysator) - Input niedrig nach Kaltstart |
| 0x3012 | P3012 | P3012 Lambdasonde Signalkreis (Bank 1, vor Katalysator) - Adaptionswert zu hoch |
| 0x3013 | P3013 | P3013 Lambdasonde Signalkreis (Bank 2, vor Katalysator) - Adaptionswert zu hoch |
| 0x3014 | P3014 | P3014 Lambdasonde (Bank 1, vor Katalysator) - WRAF-IC-Versorgungsspannung zu niedrig |
| 0x3015 | P3015 | P3015 Lambdasonde (Bank 2, vor Katalysator) - WRAF-IC-Versorgungsspannung zu niedrig |
| 0x3016 | P3016 | P3016 Lambdasonde Kalibrierwiderstand am WRAF-IC (Bank 1, vor Katalysator) - Plausibilitätsfehler |
| 0x3017 | P3017 | P3017 Lambdasonde Kalibrierwiderstand am WRAF-IC (Bank 2, vor Katalysator) - Plausibilitätsfehler |
| 0x3018 | P3018 | P3018 Lambdasonde (Bank 1, vor Katalysator) - Lambdareglerwert oberhalb Schwelle infolge offener Pumpstromleitung |
| 0x3019 | P3019 | P3019 Lambdasonde (Bank 2, vor Katalysator) - Lambdareglerwert oberhalb Schwelle infolge offener Pumpstromleitung |
| 0x3020 | P3020 | P3020 Lambdasonde (Bank 1, vor Katalysator) - Signalspannung bei Schubabschaltung zu klein infolge offener Pumpstromleitung |
| 0x3021 | P3021 | P3021 Lambdasonde (Bank 2, vor Katalysator) - Signalspannung bei Schubabschaltung zu klein infolge offener Pumpstromleitung |
| 0x3022 | P3022 | P3022 Lambdasonde (Bank 1, vor Katalysator) - SPI-Kommunikation zum WRAF-IC gestört |
| 0x3023 | P3023 | P3023 Lambdasonde (Bank 2, vor Katalysator) - SPI-Kommunikation zum WRAF-IC gestört |
| 0x3024 | P3024 | P3024 Lambdasonde (Bank 1, vor Katalysator) - Initialisierungsfehler WRAF-IC |
| 0x3025 | P3025 | P3025 Lambdasonde (Bank 2, vor Katalysator) - Initialisierungsfehler WRAF-IC |
| 0x3026 | P3026 | P3026 Lambdasonde (Bank 1, vor Katalysator) - Betriebstemperatur nicht erreicht |
| 0x3027 | P3027 | P3027 Lambdasonde (Bank 2, vor Katalysator) - Betriebstemperatur nicht erreicht |
| 0x3028 | P3028 | P3028 Lambdasonde Heizungsansteuerung (Bank 1, vor Katalysator) - keine Aktivität festzustellen |
| 0x3029 | P3029 | P3029 Lambdasonde Heizungsansteuerung (Bank 2, vor Katalysator) - keine Aktivität festzustellen |
| 0x3030 | P3030 | P3030 Lambdasonde Innenwiderstandsmesspfad (Bank 1, vor Katalysator) - Adaptionswert zu hoch |
| 0x3031 | P3031 | P3031 Lambdasonde Innenwiderstandsmesspfad (Bank 2, vor Katalysator) - Adaptionswert zu hoch |
| 0x3032 | P3032 | P3032 Lambdasonde Innenwiderstandsmesspfad (Bank 1, vor Katalysator) - Verstärkungsfaktor Plausibilitätsfehler |
| 0x3033 | P3033 | P3033 Lambdasonde Innenwiderstandsmesspfad (Bank 2, vor Katalysator) - Verstärkungsfaktor Plausibilitätsfehler |
| 0x3034 | P3034 | P3034 Lambdasonde (Bank 1, vor Katalysator) - Kennliniensteigung zu flach |
| 0x3035 | P3035 | P3035 Lambdasonde (Bank 2, vor Katalysator) - Kennliniensteigung zu flach |
| 0x3036 | P3036 | P3036 Lambdasonde (Bank 1, vor Katalysator) - Unterschiedliche Länge von Fett- und Magerphase in der Regelschwingung |
| 0x3037 | P3037 | P3037 Lambdasonde (Bank 2, vor Katalysator) - Unterschiedliche Länge von Fett- und Magerphase in der Regelschwingung |
| 0x3038 | P3038 | P3038 Lambdasonde (Bank 1, vor Katalysator) - Asymmetrie von Fett- und Magerschaltzeit |
| 0x3039 | P3039 | P3039 Lambdasonde (Bank 2, vor Katalysator) - Asymmetrie von Fett- und Magerschaltzeit |
| 0x3040 | P3040 | P3040 Lambdasonde (Bank 1, nach Katalysator) - Mager- und Fettspannungsschwellen nicht erreicht |
| 0x3041 | P3041 | P3041 Lambdasonde (Bank 2, nach Katalysator) - Mager- und Fettspannungsschwellen nicht erreicht |
| 0x3050 | P3050 | P3050 Hochdruckeinspritzventil (HDEV) Zylinder 1 - Leitungsunterbrechung |
| 0x3051 | P3051 | P3051 Hochdruckeinspritzventil (HDEV) Zylinder 1 - Input niedrig |
| 0x3052 | P3052 | P3052 Hochdruckeinspritzventil (HDEV) Zylinder 1 - Input hoch |
| 0x3053 | P3053 | P3053 Hochdruckeinspritzventil (HDEV) Zylinder 2 - Leitungsunterbrechung |
| 0x3054 | P3054 | P3054 Hochdruckeinspritzventil (HDEV) Zylinder 2 - Input niedrig |
| 0x3055 | P3055 | P3055 Hochdruckeinspritzventil (HDEV) Zylinder 2 - Input hoch |
| 0x3056 | P3056 | P3056 Hochdruckeinspritzventil (HDEV) Zylinder 3 - Leitungsunterbrechung |
| 0x3057 | P3057 | P3057 Hochdruckeinspritzventil (HDEV) Zylinder 3 - Input niedrig |
| 0x3058 | P3058 | P3058 Hochdruckeinspritzventil (HDEV) Zylinder 3 - Input hoch |
| 0x3059 | P3059 | P3059 Hochdruckeinspritzventil (HDEV) Zylinder 4 - Leitungsunterbrechung |
| 0x3060 | P3060 | P3060 Hochdruckeinspritzventil (HDEV) Zylinder 4 - Input niedrig |
| 0x3061 | P3061 | P3061 Hochdruckeinspritzventil (HDEV) Zylinder 4 - Input hoch |
| 0x3062 | P3062 | P3062 Hochdruckeinspritzventil (HDEV) Zylinder 5 - Leitungsunterbrechung |
| 0x3063 | P3063 | P3063 Hochdruckeinspritzventil (HDEV) Zylinder 5 - Input niedrig |
| 0x3064 | P3064 | P3064 Hochdruckeinspritzventil (HDEV) Zylinder 5 - Input hoch |
| 0x3065 | P3065 | P3065 Hochdruckeinspritzventil (HDEV) Zylinder 6 - Leitungsunterbrechung |
| 0x3066 | P3066 | P3066 Hochdruckeinspritzventil (HDEV) Zylinder 6 - Input niedrig |
| 0x3067 | P3067 | P3067 Hochdruckeinspritzventil (HDEV) Zylinder 6 - Input hoch |
| 0x3068 | P3068 | P3068 Hochdruckeinspritzventil (HDEV) Zylinder 7 - Leitungsunterbrechung |
| 0x3069 | P3069 | P3069 Hochdruckeinspritzventil (HDEV) Zylinder 7 - Input niedrig |
| 0x3070 | P3070 | P3070 Hochdruckeinspritzventil (HDEV) Zylinder 7 - Input hoch |
| 0x3071 | P3071 | P3071 Hochdruckeinspritzventil (HDEV) Zylinder 8 - Leitungsunterbrechung |
| 0x3072 | P3072 | P3072 Hochdruckeinspritzventil (HDEV) Zylinder 8 - Input niedrig |
| 0x3073 | P3073 | P3073 Hochdruckeinspritzventil (HDEV) Zylinder 8 - Input hoch |
| 0x3074 | P3074 | P3074 Hochdruckeinspritzventil (HDEV) Zylinder 9 - Leitungsunterbrechung |
| 0x3075 | P3075 | P3075 Hochdruckeinspritzventil (HDEV) Zylinder 9 - Input niedrig |
| 0x3076 | P3076 | P3076 Hochdruckeinspritzventil (HDEV) Zylinder 9 - Input hoch |
| 0x3077 | P3077 | P3077 Hochdruckeinspritzventil (HDEV) Zylinder 10 - Leitungsunterbrechung |
| 0x3078 | P3078 | P3078 Hochdruckeinspritzventil (HDEV) Zylinder 10 - Input niedrig |
| 0x3079 | P3079 | P3079 Hochdruckeinspritzventil (HDEV) Zylinder 10 - Input hoch |
| 0x3080 | P3080 | P3080 Hochdruckeinspritzventil (HDEV) Zylinder 11 - Leitungsunterbrechung |
| 0x3081 | P3081 | P3081 Hochdruckeinspritzventil (HDEV) Zylinder 11 - Input niedrig |
| 0x3082 | P3082 | P3082 Hochdruckeinspritzventil (HDEV) Zylinder 11 - Input hoch |
| 0x3083 | P3083 | P3083 Hochdruckeinspritzventil (HDEV) Zylinder 12 - Leitungsunterbrechung |
| 0x3084 | P3084 | P3084 Hochdruckeinspritzventil (HDEV) Zylinder 12 - Input niedrig |
| 0x3085 | P3085 | P3085 Hochdruckeinspritzventil (HDEV) Zylinder 12 - Input hoch |
| 0x3090 | P3090 | P3090 Kraftstoffeinspritzdruck mengengeregelt - Minimaldruck unterschritten |
| 0x3091 | P3091 | P3091 Kraftstoffeinspritzdruck druckgeregelt - Minimaldruck unterschritten |
| 0x3100 | P3100 | P3100 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 1 - Leitungsunterbrechung |
| 0x3101 | P3101 | P3101 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 1 - Input niedrig |
| 0x3102 | P3102 | P3102 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 1 - Input hoch |
| 0x3103 | P3103 | P3103 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 1 - Boosterzeitfehler |
| 0x3104 | P3104 | P3104 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 2 - Leitungsunterbrechung |
| 0x3105 | P3105 | P3105 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 2 - Input niedrig |
| 0x3106 | P3106 | P3106 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 2 - Input hoch |
| 0x3107 | P3107 | P3107 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 2 - Boosterzeitfehler |
| 0x3108 | P3108 | P3108 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 3 - Leitungsunterbrechung |
| 0x3109 | P3109 | P3109 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 3 - Input niedrig |
| 0x3110 | P3110 | P3110 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 3 - Input hoch |
| 0x3111 | P3111 | P3111 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 3 - Boosterzeitfehler |
| 0x3112 | P3112 | P3112 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 4 - Leitungsunterbrechung |
| 0x3113 | P3113 | P3113 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 4 - Input niedrig |
| 0x3114 | P3114 | P3114 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 4 - Input hoch |
| 0x3115 | P3115 | P3115 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 4 - Boosterzeitfehler |
| 0x3116 | P3116 | P3116 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 5 - Leitungsunterbrechung |
| 0x3117 | P3117 | P3117 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 5 - Input niedrig |
| 0x3118 | P3118 | P3118 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 5 - Input hoch |
| 0x3119 | P3119 | P3119 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 5 - Boosterzeitfehler |
| 0x3120 | P3120 | P3120 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 6 - Leitungsunterbrechung  |
| 0x3121 | P3121 | P3121 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 6 - Input niedrig |
| 0x3122 | P3122 | P3122 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 6 - Input hoch |
| 0x3123 | P3123 | P3123 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 6 - Boosterzeitfehler |
| 0x3124 | P3124 | P3124 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 7 - Leitungsunterbrechung |
| 0x3125 | P3125 | P3125 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 7 - Input niedrig |
| 0x3126 | P3126 | P3126 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 7 - Input hoch |
| 0x3127 | P3127 | P3127 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 7 - Boosterzeitfehler |
| 0x3128 | P3128 | P3128 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 8 - Leitungsunterbrechung |
| 0x3129 | P3129 | P3129 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 8 - Input niedrig |
| 0x3130 | P3130 | P3130 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 8 - Input hoch |
| 0x3131 | P3131 | P3131 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 8 - Boosterzeitfehler |
| 0x3132 | P3132 | P3132 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 9 - Leitungsunterbrechung |
| 0x3133 | P3133 | P3133 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 9 - Input niedrig |
| 0x3134 | P3134 | P3134 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 9 - Input hoch |
| 0x3135 | P3135 | P3135 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 9 - Boosterzeitfehler |
| 0x3136 | P3136 | P3136 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 10 - Leitungsunterbrechung |
| 0x3137 | P3137 | P3137 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 10 - Input niedrig |
| 0x3138 | P3138 | P3138 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 10 - Input hoch |
| 0x3139 | P3139 | P3139 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 10 - Boosterzeitfehler |
| 0x3140 | P3140 | P3140 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 11 - Leitungsunterbrechung |
| 0x3141 | P3141 | P3141 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 11 - Input niedrig |
| 0x3142 | P3142 | P3142 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 11 - Input hoch |
| 0x3143 | P3143 | P3143 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 11 - Boosterzeitfehler |
| 0x3144 | P3144 | P3144 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 12 - Leitungsunterbrechung |
| 0x3145 | P3145 | P3145 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 12 - Input niedrig |
| 0x3146 | P3146 | P3146 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 12 - Input hoch |
| 0x3147 | P3147 | P3147 Hochdruckeinspritzventil (HDEV) Low Side Zylinder 12 - Boosterzeitfehler |
| 0x3148 | P3148 | P3148 Hochdruckeinspritzventil (HDEV) High Side Zylinder 1 - Kurzschluss Spule |
| 0x3149 | P3149 | P3149 Hochdruckeinspritzventil (HDEV) High Side Zylinder 1 - Input niedrig |
| 0x3150 | P3150 | P3150 Hochdruckeinspritzventil (HDEV) High Side Zylinder 1 - Input hoch |
| 0x3151 | P3151 | P3151 Hochdruckeinspritzventil (HDEV) High Side Zylinder 2 - Kurzschluss Spule |
| 0x3152 | P3152 | P3152 Hochdruckeinspritzventil (HDEV) High Side Zylinder 2 - Input niedrig |
| 0x3153 | P3153 | P3153 Hochdruckeinspritzventil (HDEV) High Side Zylinder 2 - Input hoch |
| 0x3154 | P3154 | P3154 Hochdruckeinspritzventil (HDEV) High Side Zylinder 3 - Kurzschluss Spule |
| 0x3155 | P3155 | P3155 Hochdruckeinspritzventil (HDEV) High Side Zylinder 3 - Input niedrig |
| 0x3156 | P3156 | P3156 Hochdruckeinspritzventil (HDEV) High Side Zylinder 3 - Input hoch |
| 0x3157 | P3157 | P3157 Hochdruckeinspritzventil (HDEV) High Side Zylinder 4 - Kurzschluss Spule |
| 0x3158 | P3158 | P3158 Hochdruckeinspritzventil (HDEV) High Side Zylinder 4 - Input niedrig |
| 0x3159 | P3159 | P3159 Hochdruckeinspritzventil (HDEV) High Side Zylinder 4 - Input hoch |
| 0x3160 | P3160 | P3160 Hochdruckeinspritzventil (HDEV) High Side Zylinder 5 - Kurzschluss Spule |
| 0x3161 | P3161 | P3161 Hochdruckeinspritzventil (HDEV) High Side Zylinder 5 - Input niedrig |
| 0x3162 | P3162 | P3162 Hochdruckeinspritzventil (HDEV) High Side Zylinder 5 - Input hoch |
| 0x3163 | P3163 | P3163 Hochdruckeinspritzventil (HDEV) High Side Zylinder 6 - Kurzschluss Spule |
| 0x3164 | P3164 | P3164 Hochdruckeinspritzventil (HDEV) High Side Zylinder 6 - Input niedrig |
| 0x3165 | P3165 | P3165 Hochdruckeinspritzventil (HDEV) High Side Zylinder 6 - Input hoch |
| 0x3166 | P3166 | P3166 Hochdruckeinspritzventil (HDEV) High Side Zylinder 7 - Kurzschluss Spule |
| 0x3167 | P3167 | P3167 Hochdruckeinspritzventil (HDEV) High Side Zylinder 7 - Input niedrig |
| 0x3168 | P3168 | P3168 Hochdruckeinspritzventil (HDEV) High Side Zylinder 7 - Input hoch |
| 0x3169 | P3169 | P3169 Hochdruckeinspritzventil (HDEV) High Side Zylinder 8 - Kurzschluss Spule |
| 0x3170 | P3170 | P3170 Hochdruckeinspritzventil (HDEV) High Side Zylinder 8 - Input niedrig |
| 0x3171 | P3171 | P3171 Hochdruckeinspritzventil (HDEV) High Side Zylinder 8 - Input hoch |
| 0x3172 | P3172 | P3172 Hochdruckeinspritzventil (HDEV) High Side Zylinder 9 - Kurzschluss Spule |
| 0x3173 | P3173 | P3173 Hochdruckeinspritzventil (HDEV) High Side Zylinder 9 - Input niedrig |
| 0x3174 | P3174 | P3174 Hochdruckeinspritzventil (HDEV) High Side Zylinder 9 - Input hoch |
| 0x3175 | P3175 | P3175 Hochdruckeinspritzventil (HDEV) High Side Zylinder 10 - Kurzschluss Spule |
| 0x3176 | P3176 | P3176 Hochdruckeinspritzventil (HDEV) High Side Zylinder 10 - Input niedrig |
| 0x3177 | P3177 | P3177 Hochdruckeinspritzventil (HDEV) High Side Zylinder 10 - Input hoch |
| 0x3178 | P3178 | P3178 Hochdruckeinspritzventil (HDEV) High Side Zylinder 11 - Kurzschluss Spule |
| 0x3179 | P3179 | P3179 Hochdruckeinspritzventil (HDEV) High Side Zylinder 11 - Input niedrig |
| 0x3180 | P3180 | P3180 Hochdruckeinspritzventil (HDEV) High Side Zylinder 11 - Input hoch |
| 0x3181 | P3181 | P3181 Hochdruckeinspritzventil (HDEV) High Side Zylinder 12 - Kurzschluss Spule |
| 0x3182 | P3182 | P3182 Hochdruckeinspritzventil (HDEV) High Side Zylinder 12 - Input niedrig |
| 0x3183 | P3183 | P3183 Hochdruckeinspritzventil (HDEV) High Side Zylinder 12 - Input hoch |
| 0x3184 | P3184 | P3184 HDEV (Hochdruckeinspritzventil) Steuergerät (Bank 1) - Kommunikationsfehler |
| 0x3185 | P3185 | P3185 HDEV (Hochdruckeinspritzventil) Steuergerät (Bank 2) - Kommunikationsfehler |
| 0x3186 | P3186 | P3186 Ansauglufttemperaturfühler (Bank 2) - Input niedrig |
| 0x3187 | P3187 | P3187 Ansauglufttemperaturfühler (Bank 2) - Input hoch |
| 0x3188 | P3188 | P3188 CAN-Timeout Hochdruckeinspritzventil (HDEV) Botschaft |
| 0x3189 | P3189 | P3189 CAN-Timeout Hochdruckeinspritzventil (HDEV) Botschaft (Bank 2) |
| 0x3190 | P3190 | P3190 Ansauglufttemperaturfühler (Bank 2) - Meßbereichs- oder Leistungsproblem |
| 0x3198 | P3198 | P3198 Motorkühlmitteltemperatur - Gradient zu hoch |
| 0x3199 | P3199 | P3199 Motorkühlmitteltemperatur - Signal festliegend |
| 0x3200 | P3200 | P3200 Powertrain CAN, CAN-Baustein - defekt |
| 0x3201 | P3201 | P3201 Powertrain CAN, DPRAM-CAN-Baustein - defekt |
| 0x3202 | P3202 | P3202 Powertrain CAN, CAN-Baustein - Abschaltung |
| 0x3203 | P3203 | P3203 Local CAN, LoCAN-Baustein - defekt |
| 0x3204 | P3204 | P3204 Local CAN, DPRAM-LoCAN-Baustein - defekt |
| 0x3205 | P3205 | P3205 Local CAN, CAN-Baustein - Abschaltung |
| 0x3206 | P3206 | P3206 CAN-Timeout ARS (Active Roll Stabilisation) |
| 0x3207 | P3207 | P3207 CAN-Botschaftsüberwachung ARS (Active Roll Stabilisation) - kein Signal |
| 0x3208 | P3208 | P3208 CAN-Botschaftsüberwachung ARS (Active Roll Stabilisation) - Plausibilitätsfehler |
| 0x3209 | P3209 | P3209 CAN-Botschaftsüberwachung ASC/DSC (Automatic Stability Control/Dynamic Stability Control) - Aliveprüfung |
| 0x320A | P320A | P320A Botschaftsüberwachung Momentenberechnung AFS (Active Front Steering) - Aliveprüfung/Prüfsummenfehler |
| 0x320B | P320B | P320B Botschaftsüberwachung Momentenberechnung AFS (Active Front Steering) - Timeout |
| 0x320C | P320C | P320C Botschaftsüberwachung Momentenberechnung AFS (Active Front Steering) - Plausibilitätsfehler |
| 0x320D | P320D | P320D CAN-Botschaftsüberwachung EGS (elektronische Getriebesteuerung) - Timeout |
| 0x320E | P320E | P320E Generator 2 - Übertemperatur |
| 0x320F | P320F | P320F Generator 2 - Fehlfunktion |
| 0x3210 | P3210 | P3210 CAN-Botschaftsüberwachung ASC/DSC (Automatic Stability Control/Dynamic Stability Control) - Plausibilitätsfehler |
| 0x3211 | P3211 | P3211 CAN-Botschaftsüberwachung CAS (Car Access System) - kein Signal |
| 0x3212 | P3212 | P3212 CAN-Botschaftsüberwachung CAS (Car Access System) - Plausibilitätsfehler |
| 0x3213 | P3213 | P3213 CAN-Botschaftsüberwachung EGS (elektronische Getriebesteuerung) - Aliveprüfung |
| 0x3214 | P3214 | P3214 CAN-Botschaftsüberwachung EGS (elektronische Getriebesteuerung) - Plausibilitätsfehler |
| 0x3215 | P3215 | P3215 CAN-Botschaftsüberwachung IHKA (integrierte Heiz- und Klimaautomatik) - kein Signal |
| 0x3216 | P3216 | P3216 CAN-Timeout Instrumentenkombination |
| 0x3217 | P3217 | P3217 CAN-Botschaftsüberwachung Instrumentenkombination - Plausibilitätsfehler |
| 0x3218 | P3218 | P3218 CAN-Botschaftsüberwachung PWML (Powermodul) - kein Signal |
| 0x3219 | P3219 | P3219 CAN-Botschaftsüberwachung SZL (Schaltzentrum Lenksäule) - Aliveprüfung |
| 0x321A | P321A | P321A Generator 2 - mechanischer Fehler |
| 0x321B | P321B | P321B Generator 2 - Kommunikationsverlust |
| 0x321C | P321C | P321C Generator 2 - Kommunikationsfehler |
| 0x3220 | P3220 | P3220 CAN-Botschaftsüberwachung SZL (Schaltzentrum Lenksäule) - kein Signal |
| 0x3221 | P3221 | P3221 CAN-Botschaftsüberwachung SZL (Schaltzentrum Lenksäule) - Plausibilitätsfehler |
| 0x3222 | P3222 | P3222 Generator - Übertemperatur |
| 0x3223 | P3223 | P3223 Generator - mechanischer Fehler |
| 0x3224 | P3224 | P3224 Generator - Kommunikationsverlust |
| 0x3225 | P3225 | P3225 Generator - Kommunikationsfehler |
| 0x3226 | P3226 | P3226 E-Box Ansteuerung Lüfter - Input hoch |
| 0x3227 | P3227 | P3227 E-Box Ansteuerung Lüfter - Input niedrig |
| 0x3228 | P3228 | P3228 E-Box Ansteuerung Lüfter - Leitungsunterbrechung |
| 0x3229 | P3229 | P3229 Lastsensorüberwachung VVT-Ventilhub - Plausibilitätsfehler |
| 0x3230 | P3230 | P3230 Lastsensorüberwachung Drucksensor - Plausibilitätsfehler |
| 0x3231 | P3231 | P3231 Steuergeräteüberwachung Fehlerreaktion - Plausibilitätsfehler |
| 0x3232 | P3232 | P3232 Steuergeräteüberwachung Zündwinkel - Plausibilitätsfehler |
| 0x3233 | P3233 | P3233 Steuergeräteüberwachung relative Füllung - Plausibilitätsfehler |
| 0x3234 | P3234 | P3234 Steuergeräteüberwachung Drosselklappensteller Anschlagüberprüfung - Fehlfunktion |
| 0x3235 | P3235 | P3235 Steuergeräteüberwachung Variantencodierung - Plausibilitätsfehler |
| 0x3236 | P3236 | P3236 Steuergeräteüberwachung Einspritzzeit relative Kraftstoffmenge - Plausibilitätsfehler |
| 0x3237 | P3237 | P3237 Steuergeräteüberwachung Kraftstoffkorrektur - Fehler |
| 0x3238 | P3238 | P3238 Steuergeräteüberwachung TPU-Baustein - defekt |
| 0x3239 | P3239 | P3239 Steuergerät Kodierprozess - keine Kodierung |
| 0x3240 | P3240 | P3240 Kennfeldkühlung Thermostat Ansteuerung - Leitungsunterbrechung |
| 0x3241 | P3241 | P3241 Kennfeldkühlung Thermostat Ansteuerung - Input niedrig  |
| 0x3242 | P3242 | P3242 Kennfeldkühlung Thermostat Ansteuerung - Input hoch |
| 0x3243 | P3243 | P3243 CAN-Timeout elektrischer Zusatzheizer |
| 0x3244 | P3244 | P3244 Elektrischer Zusatzheizer - defekt |
| 0x3245 | P3245 | P3245 Elektrischer Zusatzheizer - Übertemperatur |
| 0x3246 | P3246 | P3246 Elektrischer Zusatzheizer - Fehlfunktion |
| 0x3247 | P3247 | P3247 Steuergerät - interner NVRAM Backup Fehler |
| 0x3248 | P3248 | P3248 Momentenvergleich - Bankabweichungen zu gross |
| 0x3249 | P3249 | P3249 Kraftstoffeinspritzleiste Drucksensor (Bank 2) - Fehlfunktion |
| 0x3250 | P3250 | P3250 Kraftstoffeinspritzleiste Drucksensor (Bank 2) - Input niedrig |
| 0x3251 | P3251 | P3251 Kraftstoffeinspritzleiste Drucksensor (Bank 2) - Input hoch |
| 0x3252 | P3252 | P3252 Tankentlüftungssystem Spülventil/Tankentlüftungsventil 2 (Bank 2) - Fehlfunktion |
| 0x3253 | P3253 | P3253 Tankentlüftungssystem Spülventil/Tankentlüftungsventil 2 (Bank 2) - Leitungsunterbrechung |
| 0x3254 | P3254 | P3254 Tankentlüftungssystem Spülventil/Tankentlüftungsventil 2 (Bank 2) - Kurzschluss |
| 0x3255 | P3255 | P3255 Generator - Spannung in Startphase über Schwellwert |
| 0x3256 | P3256 | P3256 CAN-Timeout Lenkwinkelsensor (LWS) Steuergerät |
| 0x3260 | P3260 | P3260 Luftmassen- oder Luftmengendurchsatz - Plausibilitätsfehler wegen Sensordrift |
| 0x3261 | P3261 | P3261 Luftmassen- oder Luftmengendurchsatz (Bank 1) - zu groß wegen Offsetdrift |
| 0x3262 | P3262 | P3262 Luftmassen- oder Luftmengendurchsatz (Bank 1) - zu gering wegen Offsetdrift |
| 0x3263 | P3263 | P3263 Luftmassen- oder Luftmengendurchsatz (Bank 1) - zu groß wegen Sensordrift |
| 0x3264 | P3264 | P3264 Luftmassen- oder Luftmengendurchsatz (Bank 1) - zu gering wegen Sensordrift |
| 0x3269 | P3269 | P3269 Luftmassenmesser Versorgungsspannung (Bank 1) - Input hoch |
| 0x3270 | P3270 | P3270 Luftmassenmesser Versorgungsspannung (Bank 1) - Input niedrig |
| 0x3273 | P3273 | P3273 Luftmassen- oder Luftmengendurchsatz - zu gering wegen zu niederiger Signalfrequenz |
| 0x3274 | P3274 | P3274 Luftmassen- oder Luftmengendurchsatz - zu groß wegen zu hoher Signalfrequenz |
| 0x3277 | P3277 | P3277 Ladedrucksteller - Fehlfunktion |
| 0x3278 | P3278 | P3278 Abgasrückführsteller - Fehlfunktion |
| 0x3279 | P3279 | P3279 Drallklappe - Fehlfunktion |
| 0x3280 | P3280 | P3280 Laufruheregler - Korrekturmenge zu hoch oder zu niedrig |
| 0x3300 | P3300 | P3300 Zündspule Zylinder 1 - Input hoch oder Nichtimpedanz |
| 0x3301 | P3301 | P3301 Zündspule Zylinder 1 - Übergangswiderstand oder Hochimpedanz |
| 0x3302 | P3302 | P3302 Zündspule Zylinder 1 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3303 | P3303 | P3303 Zündspule Zylinder 5 - Input hoch oder Nichtimpedanz |
| 0x3304 | P3304 | P3304 Zündspule Zylinder 5 - Übergangswiderstand oder Hochimpedanz |
| 0x3305 | P3305 | P3305 Zündspule Zylinder 5 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3306 | P3306 | P3306 Zündspule Zylinder 4 - Input hoch oder Nichtimpedanz |
| 0x3307 | P3307 | P3307 Zündspule Zylinder 4 - Übergangswiderstand oder Hochimpedanz |
| 0x3308 | P3308 | P3308 Zündspule Zylinder 4 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3309 | P3309 | P3309 Zündspule Zylinder 8 - Input hoch oder Nichtimpedanz |
| 0x330A | P330A | P330A Motoröl-Kontrollleuchte - Input hoch |
| 0x330B | P330B | P330B Motoröl-Kontrollleuchte - Input niedrig |
| 0x330C | P330C | P330C Motoröl-Kontrollleuchte - Fehlfunktion |
| 0x3310 | P3310 | P3310 Zündspule Zylinder 8 - Übergangswiderstand oder Hochimpedanz |
| 0x3311 | P3311 | P3311 Zündspule Zylinder 8 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3312 | P3312 | P3312 Zündspule Zylinder 6 - Input hoch oder Nichtimpedanz |
| 0x3313 | P3313 | P3313 Zündspule Zylinder 6 - Übergangswiderstand oder Hochimpedanz |
| 0x3314 | P3314 | P3314 Zündspule Zylinder 6 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3315 | P3315 | P3315 Zündspule Zylinder 3 - Input hoch oder Nichtimpedanz |
| 0x3316 | P3316 | P3316 Zündspule Zylinder 3 - Übergangswiderstand oder Hochimpedanz |
| 0x3317 | P3317 | P3317 Zündspule Zylinder 3 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3318 | P3318 | P3318 Zündspule Zylinder 7 - Input hoch oder Nichtimpedanz |
| 0x3319 | P3319 | P3319 Zündspule Zylinder 7 - Übergangswiderstand oder Hochimpedanz |
| 0x3320 | P3320 | P3320 Zündspule Zylinder 7 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3321 | P3321 | P3321 Zündspule Zylinder 2 - Input hoch oder Nichtimpedanz |
| 0x3322 | P3322 | P3322 Zündspule Zylinder 2 - Übergangswiderstand oder Hochimpedanz |
| 0x3323 | P3323 | P3323 Zündspule Zylinder 2 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3324 | P3324 | P3324 Zündspule Zylinder 9 - Input hoch oder Nichtimpedanz |
| 0x3325 | P3325 | P3325 Zündspule Zylinder 9 - Übergangswiderstand oder Hochimpedanz |
| 0x3326 | P3326 | P3326 Zündspule Zylinder 9 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3327 | P3327 | P3327 Zündspule Zylinder 10 - Input hoch oder Nichtimpedanz |
| 0x3328 | P3328 | P3328 Zündspule Zylinder 10 - Übergangswiderstand oder Hochimpedanz |
| 0x3329 | P3329 | P3329 Zündspule Zylinder 10 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3330 | P3330 | P3330 Zündspule Zylinder 11 - Input hoch oder Nichtimpedanz |
| 0x3331 | P3331 | P3331 Zündspule Zylinder 11 - Übergangswiderstand oder Hochimpedanz |
| 0x3332 | P3332 | P3332 Zündspule Zylinder 11 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3333 | P3333 | P3333 Zündspule Zylinder 12 - Input hoch oder Nichtimpedanz |
| 0x3334 | P3334 | P3334 Zündspule Zylinder 12 - Übergangswiderstand oder Hochimpedanz |
| 0x3335 | P3335 | P3335 Zündspule Zylinder 12 - Abschaltung wegen Übertemperatur oder kein Signal |
| 0x3336 | P3336 | P3336 Funktionsüberwachung - Steuergerätekommunikation Master/Slave |
| 0x3337 | P3337 | P3337 Funktionsüberwachung - Lambdaplausibilisierung |
| 0x3400 | P3400 | P3400 Zylinderabschaltungssystem (Bank 1) - Fehlfunktion |
| 0x3401 | P3401 | P3401 Abschaltung Zylinder 1/Einlassventil - Fehlfunktion oder Leitungsunterbrechung |
| 0x3402 | P3402 | P3402 Abschaltung Zylinder 1/Einlassventil - Leistungsproblem |
| 0x3403 | P3403 | P3403 Abschaltung Zylinder 1/Einlassventil - Input niedrig |
| 0x3404 | P3404 | P3404 Abschaltung Zylinder 1/Einlassventil - Input hoch |
| 0x3405 | P3405 | P3405 Auslassventil Zylinder 1 - Fehlfunktion oder Leitungsunterbrechung |
| 0x3406 | P3406 | P3406 Auslassventil Zylinder 1 - Leistungsproblem |
| 0x3407 | P3407 | P3407 Auslassventil Zylinder 1 - Input niedrig |
| 0x3408 | P3408 | P3408 Auslassventil Zylinder 1 - Input hoch |
| 0x3409 | P3409 | P3409 Abschaltung Zylinder 2/Einlassventil - Fehlfunktion oder Leitungsunterbrechung |
| 0x3410 | P3410 | P3410 Abschaltung Zylinder 2/Einlassventil - Leistungsproblem |
| 0x3411 | P3411 | P3411 Abschaltung Zylinder 2/Einlassventil - Input niedrig |
| 0x3412 | P3412 | P3412 Abschaltung Zylinder 2/Einlassventil - Input hoch |
| 0x3413 | P3413 | P3413 Auslassventil Zylinder 2 - Fehlfunktion oder Leitungsunterbrechung |
| 0x3414 | P3414 | P3414 Auslassventil Zylinder 2 - Leistungsproblem |
| 0x3415 | P3415 | P3415 Auslassventil Zylinder 2 - Input niedrig |
| 0x3416 | P3416 | P3416 Auslassventil Zylinder 2 - Input hoch |
| 0x3417 | P3417 | P3417 Abschaltung Zylinder 3/Einlassventil - Fehlfunktion oder Leitungsunterbrechung |
| 0x3418 | P3418 | P3418 Abschaltung Zylinder 3/Einlassventil - Leistungsproblem |
| 0x3419 | P3419 | P3419 Abschaltung Zylinder 3/Einlassventil - Input niedrig |
| 0x3420 | P3420 | P3420 Abschaltung Zylinder 3/Einlassventil - Input hoch |
| 0x3421 | P3421 | P3421 Auslassventil Zylinder 3 - Fehlfunktion oder Leitungsunterbrechung |
| 0x3422 | P3422 | P3422 Auslassventil Zylinder 3 - Leistungsproblem |
| 0x3423 | P3423 | P3423 Auslassventil Zylinder 3 - Input niedrig |
| 0x3424 | P3424 | P3424 Auslassventil Zylinder 3 - Input hoch |
| 0x3425 | P3425 | P3425 Abschaltung Zylinder 4/Einlassventil - Fehlfunktion oder Leitungsunterbrechung |
| 0x3426 | P3426 | P3426 Abschaltung Zylinder 4/Einlassventil - Leistungsproblem |
| 0x3427 | P3427 | P3427 Abschaltung Zylinder 4/Einlassventil - Input niedrig |
| 0x3428 | P3428 | P3428 Abschaltung Zylinder 4/Einlassventil - Input hoch |
| 0x3429 | P3429 | P3429 Auslassventil Zylinder 4 - Fehlfunktion oder Leitungsunterbrechung |
| 0x3430 | P3430 | P3430 Auslassventil Zylinder 4 - Leistungsproblem |
| 0x3431 | P3431 | P3431 Auslassventil Zylinder 4 - Input niedrig |
| 0x3432 | P3432 | P3432 Auslassventil Zylinder 4 - Input hoch |
| 0x3433 | P3433 | P3433 Abschaltung Zylinder 5/Einlassventil - Fehlfunktion oder Leitungsunterbrechung |
| 0x3434 | P3434 | P3434 Abschaltung Zylinder 5/Einlassventil - Leistungsproblem |
| 0x3435 | P3435 | P3435 Abschaltung Zylinder 5/Einlassventil - Input niedrig |
| 0x3436 | P3436 | P3436 Abschaltung Zylinder 5/Einlassventil - Input hoch |
| 0x3437 | P3437 | P3437 Auslassventil Zylinder 5 - Fehlfunktion oder Leitungsunterbrechung |
| 0x3438 | P3438 | P3438 Auslassventil Zylinder 5 - Leistungsproblem |
| 0x3439 | P3439 | P3439 Auslassventil Zylinder 5 - Input niedrig |
| 0x3440 | P3440 | P3440 Auslassventil Zylinder 5 - Input hoch |
| 0x3441 | P3441 | P3441 Abschaltung Zylinder 6/Einlassventil - Fehlfunktion oder Leitungsunterbrechung |
| 0x3442 | P3442 | P3442 Abschaltung Zylinder 6/Einlassventil - Leistungsproblem |
| 0x3443 | P3443 | P3443 Abschaltung Zylinder 6/Einlassventil - Input niedrig |
| 0x3444 | P3444 | P3444 Abschaltung Zylinder 6/Einlassventil - Input hoch |
| 0x3445 | P3445 | P3445 Auslassventil Zylinder 6 - Fehlfunktion oder Leitungsunterbrechung |
| 0x3446 | P3446 | P3446 Auslassventil Zylinder 6 - Leistungsproblem |
| 0x3447 | P3447 | P3447 Auslassventil Zylinder 6 - Input niedrig |
| 0x3448 | P3448 | P3448 Auslassventil Zylinder 6 - Input hoch |
| 0x3449 | P3449 | P3449 Abschaltung Zylinder 7/Einlassventil - Fehlfunktion oder Leitungsunterbrechung |
| 0x3450 | P3450 | P3450 Abschaltung Zylinder 7/Einlassventil - Leistungsproblem |
| 0x3451 | P3451 | P3451 Abschaltung Zylinder 7/Einlassventil - Input niedrig |
| 0x3452 | P3452 | P3452 Abschaltung Zylinder 7/Einlassventil - Input hoch |
| 0x3453 | P3453 | P3453 Auslassventil Zylinder 7 - Fehlfunktion oder Leitungsunterbrechung |
| 0x3454 | P3454 | P3454 Auslassventil Zylinder 7 - Leistungsproblem |
| 0x3455 | P3455 | P3455 Auslassventil Zylinder 7 - Input niedrig |
| 0x3456 | P3456 | P3456 Auslassventil Zylinder 7 - Input hoch |
| 0x3457 | P3457 | P3457 Abschaltung Zylinder 8/Einlassventil - Fehlfunktion oder Leitungsunterbrechung |
| 0x3458 | P3458 | P3458 Abschaltung Zylinder 8/Einlassventil - Leistungsproblem |
| 0x3459 | P3459 | P3459 Abschaltung Zylinder 8/Einlassventil - Input niedrig |
| 0x3460 | P3460 | P3460 Abschaltung Zylinder 8/Einlassventil - Input hoch |
| 0x3461 | P3461 | P3461 Auslassventil Zylinder 8 - Fehlfunktion oder Leitungsunterbrechung |
| 0x3462 | P3462 | P3462 Auslassventil Zylinder 8 - Leistungsproblem |
| 0x3463 | P3463 | P3463 Auslassventil Zylinder 8 - Input niedrig |
| 0x3464 | P3464 | P3464 Auslassventil Zylinder 8 - Input hoch |
| 0x3465 | P3465 | P3465 Abschaltung Zylinder 9/Einlassventil - Fehlfunktion oder Leitungsunterbrechung |
| 0x3466 | P3466 | P3466 Abschaltung Zylinder 9/Einlassventil - Leistungsproblem |
| 0x3467 | P3467 | P3467 Abschaltung Zylinder 9/Einlassventil - Input niedrig |
| 0x3468 | P3468 | P3468 Abschaltung Zylinder 9/Einlassventil - Input hoch |
| 0x3469 | P3469 | P3469 Auslassventil Zylinder 9 - Fehlfunktion oder Leitungsunterbrechung |
| 0x3470 | P3470 | P3470 Auslassventil Zylinder 9 - Leistungsproblem |
| 0x3471 | P3471 | P3471 Auslassventil Zylinder 9 - Input niedrig |
| 0x3472 | P3472 | P3472 Auslassventil Zylinder 9 - Input hoch |
| 0x3473 | P3473 | P3473 Abschaltung Zylinder 10/Einlassventil - Fehlfunktion oder Leitungsunterbrechung |
| 0x3474 | P3474 | P3474 Abschaltung Zylinder 10/Einlassventil - Leistungsproblem |
| 0x3475 | P3475 | P3475 Abschaltung Zylinder 10/Einlassventil - Input niedrig |
| 0x3476 | P3476 | P3476 Abschaltung Zylinder 10/Einlassventil - Input hoch |
| 0x3477 | P3477 | P3477 Auslassventil Zylinder 10 - Fehlfunktion oder Leitungsunterbrechung |
| 0x3478 | P3478 | P3478 Auslassventil Zylinder 10 - Leistungsproblem |
| 0x3479 | P3479 | P3479 Auslassventil Zylinder 10 - Input niedrig |
| 0x3480 | P3480 | P3480 Auslassventil Zylinder 10 - Input hoch |
| 0x3481 | P3481 | P3481 Abschaltung Zylinder 11/Einlassventil - Fehlfunktion oder Leitungsunterbrechung |
| 0x3482 | P3482 | P3482 Abschaltung Zylinder 11/Einlassventil - Leistungsproblem |
| 0x3483 | P3483 | P3483 Abschaltung Zylinder 11/Einlassventil - Input niedrig |
| 0x3484 | P3484 | P3484 Abschaltung Zylinder 11/Einlassventil - Input hoch |
| 0x3485 | P3485 | P3485 Auslassventil Zylinder 11 - Fehlfunktion oder Leitungsunterbrechung |
| 0x3486 | P3486 | P3486 Auslassventil Zylinder 11 - Leistungsproblem |
| 0x3487 | P3487 | P3487 Auslassventil Zylinder 11 - Input niedrig |
| 0x3488 | P3488 | P3488 Auslassventil Zylinder 11 - Input hoch |
| 0x3489 | P3489 | P3489 Abschaltung Zylinder 12/Einlassventil - Fehlfunktion oder Leitungsunterbrechung |
| 0x3490 | P3490 | P3490 Abschaltung Zylinder 12/Einlassventil - Leistungsproblem |
| 0x3491 | P3491 | P3491 Abschaltung Zylinder 12/Einlassventil - Input niedrig |
| 0x3492 | P3492 | P3492 Abschaltung Zylinder 12/Einlassventil - Input hoch |
| 0x3493 | P3493 | P3493 Auslassventil Zylinder 12 - Fehlfunktion oder Leitungsunterbrechung |
| 0x3494 | P3494 | P3494 Auslassventil Zylinder 12 - Leistungsproblem |
| 0x3495 | P3495 | P3495 Auslassventil Zylinder 12 - Input niedrig |
| 0x3496 | P3496 | P3496 Auslassventil Zylinder 12 - Input hoch |
| 0x3497 | P3497 | P3497 Zylinderabschaltungssystem (Bank 2) - Fehlfunktion |
| 0x0001 | U0001 | U0001 High Speed CAN-Kommunikationsbus - Fehlfunktion |
| 0x0002 | U0002 | U0002 High Speed CAN-Kommunikationsbus - Leistungsproblem |
| 0x0003 | U0003 | U0003 High Speed CAN-Kommunikationsbus (+) - Leitungsunterbrechung |
| 0x0004 | U0004 | U0004 High Speed CAN-Kommunikationsbus (+) - Input niedrig |
| 0x0005 | U0005 | U0005 High Speed CAN-Kommunikationsbus (+) - Input hoch |
| 0x0006 | U0006 | U0006 High Speed CAN-Kommunikationsbus (-) - Leitungsunterbrechung |
| 0x0007 | U0007 | U0007 High Speed CAN-Kommunikationsbus (-) - Input niedrig |
| 0x0008 | U0008 | U0008 High Speed CAN-Kommunikationsbus (-) - Input hoch |
| 0x0009 | U0009 | U0009 High Speed CAN-Kommunikationsbus (-) - Kurzschluss mit Bus (+) |
| 0x0010 | U0010 | U0010 Medium Speed CAN-Kommunikationsbus - Fehlfunktion |
| 0x0011 | U0011 | U0011 Medium Speed CAN-Kommunikationsbus - Leistungsproblem |
| 0x0012 | U0012 | U0012 Medium Speed CAN-Kommunikationsbus (+) - Leitungsunterbrechung |
| 0x0013 | U0013 | U0013 Medium Speed CAN-Kommunikationsbus (+) - Input niedrig |
| 0x0014 | U0014 | U0014 Medium Speed CAN-Kommunikationsbus (+) - Input hoch |
| 0x0015 | U0015 | U0015 Medium Speed CAN-Kommunikationsbus (-) - Leitungsunterbrechung |
| 0x0016 | U0016 | U0016 Medium Speed CAN-Kommunikationsbus (-) - Input niedrig |
| 0x0017 | U0017 | U0017 Medium Speed CAN-Kommunikationsbus (-) - Input hoch |
| 0x0018 | U0018 | U0018 Medium Speed CAN-Kommunikationsbus (-) - Kurzschluss mit Bus (+) |
| 0x0019 | U0019 | U0019 Low Speed CAN-Kommunikationsbus - Fehlfunktion |
| 0x0020 | U0020 | U0020 Low Speed CAN-Kommunikationsbus - Leistungsproblem |
| 0x0021 | U0021 | U0021 Low Speed CAN-Kommunikationsbus (+) - Leitungsunterbrechung |
| 0x0022 | U0022 | U0022 Low Speed CAN-Kommunikationsbus (+) - Input niedrig |
| 0x0023 | U0023 | U0023 Low Speed CAN-Kommunikationsbus (+) - Input hoch |
| 0x0024 | U0024 | U0024 Low Speed CAN-Kommunikationsbus (-) - Leitungsunterbrechung |
| 0x0025 | U0025 | U0025 Low Speed CAN-Kommunikationsbus (-) - Input niedrig |
| 0x0026 | U0026 | U0026 Low Speed CAN-Kommunikationsbus (-) - Input hoch |
| 0x0027 | U0027 | U0027 Low Speed CAN-Kommunikationsbus (-) - Kurzschluss mit Bus (+) |
| 0x0028 | U0028 | U0028 Fahrzeug-Kommunikationsbus A - Fehlfunktion |
| 0x0029 | U0029 | U0029 Fahrzeug-Kommunikationsbus A - Leistungsproblem |
| 0x0030 | U0030 | U0030 Fahrzeug-Kommunikationsbus (+) - Leitungsunterbrechung |
| 0x0031 | U0031 | U0031 Fahrzeug-Kommunikationsbus A (+) - Input niedrig |
| 0x0032 | U0032 | U0032 Fahrzeug-Kommunikationsbus A (+) - Input hoch |
| 0x0033 | U0033 | U0033 Fahrzeug-Kommunikationsbus A (-) - Leitungsunterbrechung |
| 0x0034 | U0034 | U0034 Fahrzeug-Kommunikationsbus A (-) - Input niedrig |
| 0x0035 | U0035 | U0035 Fahrzeug-Kommunikationsbus A (-) - Input hoch |
| 0x0036 | U0036 | U0036 Fahrzeug-Kommunikationsbus A (-) - Kurzschluss mit Bus A (+) |
| 0x0037 | U0037 | U0037 Fahrzeug-Kommunikationsbus B - Fehlfunktion |
| 0x0038 | U0038 | U0038 Fahrzeug-Kommunikationsbus B - Leistungsproblem |
| 0x0039 | U0039 | U0039 Fahrzeug-Kommunikationsbus B (+) - Leitungsunterbrechung |
| 0x0040 | U0040 | U0040 Fahrzeug-Kommunikationsbus B (+) - Input niedrig |
| 0x0041 | U0041 | U0041 Fahrzeug-Kommunikationsbus B (+) - Input hoch |
| 0x0042 | U0042 | U0042 Fahrzeug-Kommunikationsbus B (-) - Leitungsunterbrechung |
| 0x0043 | U0043 | U0043 Fahrzeug-Kommunikationsbus B (-) - Input niedrig |
| 0x0044 | U0044 | U0044 Fahrzeug-Kommunikationsbus B (-) - Input niedrig |
| 0x0045 | U0045 | U0045 Fahrzeug-Kommunikationsbus B (-) - Kurzschluss mit Bus B (+) |
| 0x0046 | U0046 | U0046 Fahrzeug-Kommunikationsbus C - Fehlfunktion |
| 0x0047 | U0047 | U0047 Fahrzeug-Kommunikationsbus C - Leistungsproblem |
| 0x0048 | U0048 | U0048 Fahrzeug-Kommunikationsbus C (+) - Leitungsunterbrechung |
| 0x0049 | U0049 | U0049 Fahrzeug-Kommunikationsbus C (+) - Input niedrig |
| 0x0050 | U0050 | U0050 Fahrzeug-Kommunikationsbus C (+) - Input hoch |
| 0x0051 | U0051 | U0051 Fahrzeug-Kommunikationsbus C (-) - Leitungsunterbrechung |
| 0x0052 | U0052 | U0052 Fahrzeug-Kommunikationsbus C (-) - Input niedrig |
| 0x0053 | U0053 | U0053 Fahrzeug-Kommunikationsbus C (-) - Input hoch |
| 0x0054 | U0054 | U0054 Fahrzeug-Kommunikationsbus C (-) - Kurzschluss mit Bus C (+) |
| 0x0055 | U0055 | U0055 Fahrzeug-Kommunikationsbus D - Fehlfunktion |
| 0x0056 | U0056 | U0056 Fahrzeug-Kommunikationsbus D - Leistungsproblem |
| 0x0057 | U0057 | U0057 Fahrzeug-Kommunikationsbus D (+) - Leitungsunterbrechung |
| 0x0058 | U0058 | U0058 Fahrzeug-Kommunikationsbus D (+) - Input niedrig |
| 0x0059 | U0059 | U0059 Fahrzeug-Kommunikationsbus D (+) - Input hoch |
| 0x0060 | U0060 | U0060 Fahrzeug-Kommunikationsbus D (-) - Leitungsunterbrechung |
| 0x0061 | U0061 | U0061 Fahrzeug-Kommunikationsbus D (-) - Input niedrig |
| 0x0062 | U0062 | U0062 Fahrzeug-Kommunikationsbus D (-) - Input hoch |
| 0x0063 | U0063 | U0063 Fahrzeug-Kommunikationsbus D (-) - Kurzschluss mit Bus D (+) |
| 0x0064 | U0064 | U0064 Fahrzeug-Kommunikationsbus E - Fehlfunktion |
| 0x0065 | U0065 | U0065 Fahrzeug-Kommunikationsbus E - Leistungsproblem |
| 0x0066 | U0066 | U0066 Fahrzeug-Kommunikationsbus E (+) - Leitungsunterbrechung |
| 0x0067 | U0067 | U0067 Fahrzeug-Kommunikationsbus E (+) - Input niedrig |
| 0x0068 | U0068 | U0068 Fahrzeug-Kommunikationsbus E (+) - Input hoch |
| 0x0069 | U0069 | U0069 Fahrzeug-Kommunikationsbus E (-) - Leitungsunterbrechung |
| 0x0070 | U0070 | U0070 Fahrzeug-Kommunikationsbus E (-) - Input niedrig |
| 0x0071 | U0071 | U0071 Fahrzeug-Kommunikationsbus E (-) - Input hoch |
| 0x0072 | U0072 | U0072 Fahrzeug-Kommunikationsbus E (-) - Kurzschluss mit Bus E (+) |
| 0x0073 | U0073 | U0073 Steuergerätekommunikation - Bus off |
| 0x0100 | U0100 | U0100 Kommunikationsverlust mit Motorsteuergerät/Powertrain Steuergerät 1 |
| 0x0101 | U0101 | U0101 Kommunikationsverlust mit Getriebesteuergerät |
| 0x0102 | U0102 | U0102 Kommunikationsverlust mit Verteilergetriebe Steuergerät |
| 0x0103 | U0103 | U0103 Kommunikationsverlust mit Schaltungs-Steuergerät |
| 0x0104 | U0104 | U0104 Kommunikationsverlust mit Fahrgeschwindigkeitsregelungs-Steuergerät |
| 0x0105 | U0105 | U0105 Kommunikationsverlust mit Einspritzventil-Steuergerät |
| 0x0106 | U0106 | U0106 Kommunikationsverlust mit Glühkerzen-Steuergerät |
| 0x0107 | U0107 | U0107 Kommunikationsverlust mit Drosselklappensteller-Steuergerät |
| 0x0108 | U0108 | U0108 Kommunikationsverlust mit Alternativkraftstoff-Steuergerät |
| 0x0109 | U0109 | U0109 Kommunikationsverlust mit Kraftstoffpumpen-Steuergerät |
| 0x0110 | U0110 | U0110 Kommunikationsverlust mit Antriebsmotor-Steuergerät '1' |
| 0x0115 | U0115 | U0115 Kommunikationsverlust mit Motorsteuergerät/Powertrain Steuergerät 2 |
| 0x0116 | U0116 | U0116 Kommunikationsverlust mit Kühlmitteltemperatur-Steuergerät |
| 0x0118 | U0118 | U0118 Kommunikationsverlust mit Kraftstoffadditiv-Steuergerät |
| 0x0119 | U0119 | U0119 Kommunikationsverlust mit Brennstoffzellen-Steuergerät |
| 0x0120 | U0120 | U0120 Kommunikationsverlust mit Anlasser-/Generator-Steuergerät |
| 0x0121 | U0121 | U0121 Kommunikationsverlust mit ABS Bremssystem-Steuergerät |
| 0x0122 | U0122 | U0122 Kommunikationsverlust mit Fahrdynamik-Steuergerät |
| 0x0123 | U0123 | U0123 Kommunikationsverlust mit Gierratensensor-Modul |
| 0x0124 | U0124 | U0124 Kommunikationsverlust mit Querbeschleunigungssensor-Modul |
| 0x0125 | U0125 | U0125 Kommunikationsverlust mit Mehrachsen-Beschleunigungssensor-Modul |
| 0x0126 | U0126 | U0126 Kommunikationsverlust mit Lenkwinkelsensor (LWS)-Modul |
| 0x0127 | U0127 | U0127 Kommunikationsverlust mit Reifendruck-Überwachungsmodul |
| 0x0128 | U0128 | U0128 Kommunikationsverlust mit Feststellbremsen-Steuergerät |
| 0x0129 | U0129 | U0129 Kommunikationsverlust mit Bremssystem-Steuergerät |
| 0x0130 | U0130 | U0130 Kommunikationsverlust mit Lenkkraft-Steuergerät |
| 0x0131 | U0131 | U0131 Kommunikationsverlust mit Servolenkung-Steuergerät |
| 0x0132 | U0132 | U0132 Kommunikationsverlust mit Höhenstands-Steuergerät |
| 0x0134 | U0134 | U0134 Kommunikationsverlust mit Servolenkung-Steuergerät (hinten) |
| 0x0135 | U0135 | U0135 Kommunikationsverlust mit Differential-Steuergerät (vorne) |
| 0x0136 | U0136 | U0136 Kommunikationsverlust mit Differential-Steuergerät (hinten) |
| 0x0137 | U0137 | U0137 Kommunikationsverlust mit Anhängerbremsen-Steuergerät |
| 0x0140 | U0140 | U0140 Kommunikationsverlust mit Karosserie-Steuergerät |
| 0x0141 | U0141 | U0141 Kommunikationsverlust mit Karosserie-Steuergerät 1 |
| 0x0142 | U0142 | U0142 Kommunikationsverlust mit Karosserie-Steuergerät 2 |
| 0x0143 | U0143 | U0143 Kommunikationsverlust mit Karosserie-Steuergerät 3 |
| 0x0144 | U0144 | U0144 Kommunikationsverlust mit Karosserie-Steuergerät 4 |
| 0x0145 | U0145 | U0145 Kommunikationsverlust mit Karosserie-Steuergerät 5 |
| 0x0146 | U0146 | U0146 Kommunikationsverlust mit Gateway 1 |
| 0x0147 | U0147 | U0147 Kommunikationsverlust mit Gateway 2 |
| 0x0148 | U0148 | U0148 Kommunikationsverlust mit Gateway 3 |
| 0x0149 | U0149 | U0149 Kommunikationsverlust mit Gateway 4 |
| 0x0150 | U0150 | U0150 Kommunikationsverlust mit Gateway 5 |
| 0x0151 | U0151 | U0151 Kommunikationsverlust mit Rückhaltesystem-Steuergerät |
| 0x0152 | U0152 | U0152 Kommunikationsverlust mit Rückhaltesystem-Steuergerät (links) |
| 0x0153 | U0153 | U0153 Kommunikationsverlust mit Rückhaltesystem-Steuergerät (rechts) |
| 0x0158 | U0158 | U0158 Kommunikationsverlust mit Head Up Display |
| 0x0159 | U0159 | U0159 Kommunikationsverlust mit Einparkhilfe-Steuergerät 1 |
| 0x0160 | U0160 | U0160 Kommunikationsverlust mit akustischem Warn-Steuergerät |
| 0x0161 | U0161 | U0161 Kommunikationsverlust mit Kompass-Modul |
| 0x0162 | U0162 | U0162 Kommunikationsverlust mit Navigations-Dispay-Modul |
| 0x0163 | U0163 | U0163 Kommunikationsverlust mit Navigations-Steuergerät |
| 0x0164 | U0164 | U0164 Kommunikationsverlust mit Heizungs-/Lüftungs-/Klimatisierungs-Steuergerät |
| 0x0165 | U0165 | U0165 Kommunikationsverlust mit Heizungs-/Lüftungs-/Klimatisierungs-Steuergerät (hinten) |
| 0x0166 | U0166 | U0166 Kommunikationsverlust mit Zusatzheizer-Steuergerät |
| 0x0167 | U0167 | U0167 Kommunikationsverlust mit EWS (elektronische Wegfahrsperre)-Steuergerät |
| 0x0168 | U0168 | U0168 Kommunikationsverlust mit Fahrzeugsicherheits-Steuergerät |
| 0x0169 | U0169 | U0169 Kommunikationsverlust mit Schiebedach-Steuergerät |
| 0x0170 | U0170 | U0170 Kommunikationsverlust mit Rückhaltesystem Sensor 1 |
| 0x0171 | U0171 | U0171 Kommunikationsverlust mit Rückhaltesystem Sensor 2 |
| 0x0172 | U0172 | U0172 Kommunikationsverlust mit Rückhaltesystem Sensor 3 |
| 0x0173 | U0173 | U0173 Kommunikationsverlust mit Rückhaltesystem Sensor 4 |
| 0x0174 | U0174 | U0174 Kommunikationsverlust mit Rückhaltesystem Sensor 5 |
| 0x0175 | U0175 | U0175 Kommunikationsverlust mit Rückhaltesystem Sensor 6 |
| 0x0176 | U0176 | U0176 Kommunikationsverlust mit Rückhaltesystem Sensor 7 |
| 0x0177 | U0177 | U0177 Kommunikationsverlust mit Rückhaltesystem Sensor 8 |
| 0x0178 | U0178 | U0178 Kommunikationsverlust mit Rückhaltesystem Sensor 9 |
| 0x0179 | U0179 | U0179 Kommunikationsverlust mit Rückhaltesystem Sensor 10 |
| 0x0180 | U0180 | U0180 Kommunikationsverlust mit autom. Beleuchtungs-Steuergerät |
| 0x0181 | U0181 | U0181 Kommunikationsverlust mit Leuchtweitenregulierungs-Steuergerät |
| 0x0182 | U0182 | U0182 Kommunikationsverlust mit Beleuchtungs-Steuergerät (vorne) |
| 0x0183 | U0183 | U0183 Kommunikationsverlust mit Beleuchtungs-Steuergerät (hinten) |
| 0x0184 | U0184 | U0184 Kommunikationsverlust mit Radio |
| 0x0185 | U0185 | U0185 Kommunikationsverlust mit Antennen-Steuergerät |
| 0x0186 | U0186 | U0186 Kommunikationsverlust mit Audio Verstärker |
| 0x0191 | U0191 | U0191 Kommunikationsverlust mit Fernsehen |
| 0x0192 | U0192 | U0192 Kommunikationsverlust mit Personalcomputer |
| 0x0196 | U0196 | U0196 Kommunikationsverlust mit Entertainment-Steuergerät - (hinten 1) |
| 0x0197 | U0197 | U0197 Kommunikationsverlust mit Telefon-Steuergerät |
| 0x0198 | U0198 | U0198 Kommunikationsverlust mit Telematik-Steuergerät |
| 0x0199 | U0199 | U0199 Kommunikationsverlust mit Tür-Steuergerät 1 |
| 0x0200 | U0200 | U0200 Kommunikationsverlust mit Tür-Steuergerät 2 |
| 0x0201 | U0201 | U0201 Kommunikationsverlust mit Tür-Steuergerät 3 |
| 0x0202 | U0202 | U0202 Kommunikationsverlust mit Tür-Steuergerät 4 |
| 0x0203 | U0203 | U0203 Kommunikationsverlust mit Tür-Steuergerät 5 |
| 0x0204 | U0204 | U0204 Kommunikationsverlust mit Tür-Steuergerät 6 |
| 0x0205 | U0205 | U0205 Kommunikationsverlust mit Tür-Steuergerät 7 |
| 0x0206 | U0206 | U0206 Kommunikationsverlust mit Verdeck-Steuergerät |
| 0x0208 | U0208 | U0208 Kommunikationsverlust mit Sitz-Steuergerät 1 |
| 0x0209 | U0209 | U0209 Kommunikationsverlust mit Sitz-Steuergerät 2 |
| 0x0210 | U0210 | U0210 Kommunikationsverlust mit Sitz-Steuergerät 3 |
| 0x0211 | U0211 | U0211 Kommunikationsverlust mit Sitz-Steuergerät 4 |
| 0x0212 | U0212 | U0212 Kommunikationsverlust mit Lenksäulen-Steuergerät |
| 0x0213 | U0213 | U0213 Kommunikationsverlust mit Spiegel-Steuergerät 1 |
| 0x0214 | U0214 | U0214 Kommunikationsverlust mit Fernbedienungsfunktion |
| 0x0215 | U0215 | U0215 Kommunikationsverlust mit Türschalter 1 |
| 0x0216 | U0216 | U0216 Kommunikationsverlust mit Türschalter 2 |
| 0x0217 | U0217 | U0217 Kommunikationsverlust mit Türschalter 3 |
| 0x0218 | U0218 | U0218 Kommunikationsverlust mit Türschalter 4 |
| 0x0219 | U0219 | U0219 Kommunikationsverlust mit Türschalter 5 |
| 0x0220 | U0220 | U0220 Kommunikationsverlust mit Türschalter 6 |
| 0x0221 | U0221 | U0221 Kommunikationsverlust mit Türschalter 7 |
| 0x0222 | U0222 | U0222 Kommunikationsverlust mit Fensterhebermotor 1 |
| 0x0223 | U0223 | U0223 Kommunikationsverlust mit Fensterhebermotor 2 |
| 0x0224 | U0224 | U0224 Kommunikationsverlust mit Fensterhebermotor 3 |
| 0x0225 | U0225 | U0225 Kommunikationsverlust mit Fensterhebermotor 4 |
| 0x0226 | U0226 | U0226 Kommunikationsverlust mit Fensterhebermotor 5 |
| 0x0227 | U0227 | U0227 Kommunikationsverlust mit Fensterhebermotor 6 |
| 0x0228 | U0228 | U0228 Kommunikationsverlust mit Fensterhebermotor 7 |
| 0x0229 | U0229 | U0229 Kommunikationsverlust mit Modul heizbarem Lenkrad |
| 0x0231 | U0231 | U0231 Kommunikationsverlust mit Regensensor-Modul |
| 0x0235 | U0235 | U0235 Kommunikationsverlust mit Fahrgeschwindigkeitsregelung Abstandsmesser vorn |
| 0x0236 | U0236 | U0236 Kommunikationsverlust mit Lenksäulenschloss-Modul |
| 0x0241 | U0241 | U0241 Kommunikationsverlust mit Scheinwerfer-Steuergerät 1 |
| 0x0242 | U0242 | U0242 Kommunikationsverlust mit Scheinwerfer-Steuergerät 2 |
| 0x0243 | U0243 | U0243 Kommunikationsverlust mit Einparkhilfe-Steuergerät 2 |
| 0x0244 | U0244 | U0244 Kommunikationsverlust mit Trittbrett-Steuergerät |
| 0x0245 | U0245 | U0245 Kommunikationsverlust mit Entertainment-Steuergerät (vorne) |
| 0x0246 | U0246 | U0246 Kommunikationsverlust mit Sitz-Steuergerät 5 |
| 0x0247 | U0247 | U0247 Kommunikationsverlust mit Sitz-Steuergerät 6 |
| 0x0249 | U0249 | U0249 Kommunikationsverlust mit Entertainment-Steuergerät (hinten 2) |
| 0x0300 | U0300 | U0300 Steuergerät - interner Software-Kompatibilitätsfehler |
| 0x0301 | U0301 | U0301 Software-Inkompatibilität mit Motorsteuergerät/Powertrain Steuergerät |
| 0x0302 | U0302 | U0302 Software-Inkompatibilität mit Getriebesteuergerät |
| 0x0303 | U0303 | U0303 Software-Inkompatibilität mit Verteilergetriebe Steuergerät |
| 0x0304 | U0304 | U0304 Software-Inkompatibilität mit Schaltungs-Steuergerät |
| 0x0305 | U0305 | U0305 Software-Inkompatibilität mit Fahrgeschwindigkeitsregelungs-Steuergerät |
| 0x0306 | U0306 | U0306 Software-Inkompatibilität mit Einspritzventil-Steuergerät |
| 0x0307 | U0307 | U0307 Software-Inkompatibilität mit Glühkerzen-Steuergerät |
| 0x0308 | U0308 | U0308 Software-Inkompatibilität mit Drosselklappensteller-Steuergerät |
| 0x0309 | U0309 | U0309 Software-Inkompatibilität mit Alternativkraftstoff-Steuergerät |
| 0x0310 | U0310 | U0310 Software-Inkompatibilität mit Kraftstoffpumpen-Steuergerät |
| 0x0311 | U0311 | U0311 Software-Inkompatibilität mit Antriebsmotor-Steuergerät |
| 0x0315 | U0315 | U0315 Software-Inkompatibilität mit ABS Bremssystem-Steuergerät |
| 0x0316 | U0316 | U0316 Software-Inkompatibilität mit Fahrdynamik-Steuergerät |
| 0x0317 | U0317 | U0317 Software-Inkompatibilität mit Feststellbremsen-Steuergerät |
| 0x0318 | U0318 | U0318 Software-Inkompatibilität mit Bremssystem-Steuergerät |
| 0x0319 | U0319 | U0319 Software-Inkompatibilität mit Lenkkraft-Steuergerät |
| 0x0320 | U0320 | U0320 Software-Inkompatibilität mit Servolenkung-Steuergerät |
| 0x0321 | U0321 | U0321 Software-Inkompatibilität mit Höhenstands-Steuergerät |
| 0x0322 | U0322 | U0322 Software-Inkompatibilität mit Karosserie-Steuergerät |
| 0x0324 | U0324 | U0324 Software-Inkompatibilität mit Heizungs-/Lüftungs-/Klimatisierungs-Steuergerät |
| 0x0325 | U0325 | U0325 Software-Inkompatibilität mit Zusatzheizer-Steuergerät |
| 0x0326 | U0326 | U0326 Software-Inkompatibilität mit EWS (elektronische Wegfahrsperre)-Steuergerät |
| 0x0327 | U0327 | U0327 Software-Inkompatibilität mit Fahrzeugsicherheits-Steuergerät |
| 0x0328 | U0328 | U0328 Software-Inkompatibilität mit Lenkwinkelsensor (LWS)-Modul |
| 0x0329 | U0329 | U0329 Software-Inkompatibilität mit Lenksäulen-Steuergerät |
| 0x0330 | U0330 | U0330 Software-Inkompatibilität mit Reifendruck-Überwachungsmodul |
| 0x0331 | U0331 | U0331 Software-Inkompatibilität mit Karosserie-Steuergerät 1 |
| 0x0332 | U0332 | U0332 Software-Inkompatibilität mit Mehrachsen-Beschleunigungssensor-Modul |
| 0x0400 | U0400 | U0400 Ungültige Daten erhalten |
| 0x0401 | U0401 | U0401 Ungültige Daten erhalten vom Motorsteuergerät/Powertrain Steuergerät |
| 0x0402 | U0402 | U0402 Ungültige Daten erhalten vom Getriebesteuergerät |
| 0x0403 | U0403 | U0403 Ungültige Daten erhalten vom Verteilergetriebe Steuergerät |
| 0x0404 | U0404 | U0404 Ungültige Daten erhalten vom Schaltungs-Steuergerät |
| 0x0405 | U0405 | U0405 Ungültige Daten erhalten vom Fahrgeschwindigkeitsregelungs-Steuergerät |
| 0x0406 | U0406 | U0406 Ungültige Daten erhalten vom Einspritzventil-Steuergerät |
| 0x0407 | U0407 | U0407 Ungültige Daten erhalten vom Glühkerzen-Steuergerät |
| 0x0408 | U0408 | U0408 Ungültige Daten erhalten vom Drosselklappensteller-Steuergerät |
| 0x0409 | U0409 | U0409 Ungültige Daten erhalten vom Alternativkraftstoff-Steuergerät |
| 0x0410 | U0410 | U0410 Ungültige Daten erhalten vom Kraftstoffpumpen-Steuergerät |
| 0x0411 | U0411 | U0411 Ungültige Daten erhalten vom Antriebsmotor-Steuergerät |
| 0x0415 | U0415 | U0415 Ungültige Daten erhalten vom ABS Bremssystem-Steuergerät |
| 0x0416 | U0416 | U0416 Ungültige Daten erhalten vom Fahrdynamik-Steuergerät |
| 0x0417 | U0417 | U0417 Ungültige Daten erhalten vom Feststellbremsen-Steuergerät |
| 0x0418 | U0418 | U0418 Ungültige Daten erhalten vom Bremssystem-Steuergerät |
| 0x0419 | U0419 | U0419 Ungültige Daten erhalten vom Lenkkraft-Steuergerät |
| 0x0420 | U0420 | U0420 Ungültige Daten erhalten vom Servolenkung-Steuergerät |
| 0x0421 | U0421 | U0421 Ungültige Daten erhalten vom Höhenstands-Steuergerät |
| 0x0422 | U0422 | U0422 Ungültige Daten erhalten vom Karosserie-Steuergerät |
| 0x0424 | U0424 | U0424 Ungültige Daten erhalten vom Heizungs-/Lüftungs-/Klimatisierungs-Steuergerät |
| 0x0425 | U0425 | U0425 Ungültige Daten erhalten vom Zusatzheizer-Steuergerät |
| 0x0426 | U0426 | U0426 Ungültige Daten erhalten vom EWS (elektronische Wegfahrsperre)-Steuergerät |
| 0x0427 | U0427 | U0427 Ungültige Daten erhalten vom Fahrzeugsicherheits-Steuergerät |
| 0x0428 | U0428 | U0428 Ungültige Daten erhalten vom Lenkwinkelsensor (LWS)-Modul |
| 0x0429 | U0429 | U0429 Ungültige Daten erhalten vom Lenksäulen-Steuergerät |
| 0x0430 | U0430 | U0430 Ungültige Daten erhalten vom Reifendruck-Überwachungsmodul |
| 0x0431 | U0431 | U0431 Ungültige Daten erhalten vom Karosserie-Steuergerät 1 |
| 0x0432 | U0432 | U0432 Ungültige Daten erhalten vom Mehrachsen-Beschleunigungssensor-Modul |
| 0x0433 | U0433 | U0433 Ungültige Daten erhalten vom Fahrgeschwindigkeitsregelung Abstandsmesser vorn |
| 0x1101 | U1101 | U1101 Kommunikationsverlust mit Umgebungstemperatur/Relativzeit |
| 0x1102 | U1102 | U1102 Botschaftsüberwachung Bedienung Fahrgeschwindigkeitsregelung/ACC (Adaptive Cruise Control) - Aliveprüfung |
| 0x1103 | U1103 | U1103 Kommunikationsverlust mit Bedienung Fahrgeschwindigkeitsregelung/ACC (Adaptive Cruise Control) |
| 0x1104 | U1104 | U1104 Botschaftsüberwachung Bedienung Fahrgeschwindigkeitsregelung/ACC (Adaptive Cruise Control) - Prüfsummenfehler |
| 0x1105 | U1105 | U1105 Botschaftsüberwachung Drehmomentanforderung ACC (Adaptive Cruise Control) - Aliveprüfung |
| 0x1106 | U1106 | U1106 Kommunikationsverlust mit Drehmomentanforderung ACC (Adaptive Cruise Control) |
| 0x1107 | U1107 | U1107 Botschaftsüberwachung Drehmomentanforderung ACC (Adaptive Cruise Control) - Prüfsummenfehler |
| 0x1108 | U1108 | U1108 Botschaftsüberwachung Drehmomentanforderung AFS (Active Front Steering) - Aliveprüfung |
| 0x1109 | U1109 | U1109 Kommunikationsverlust mit Drehmomentanforderung AFS (Active Front Steering) |
| 0x110A | U110A | U110A Botschaftsüberwachung Drehmomentanforderung AFS (Active Front Steering) - Prüfsummenfehler |
| 0x110B | U110B | U110B Botschaftsüberwachung Drehmomentanforderung DSC (Dynamic Stability Control) - Aliveprüfung |
| 0x110C | U110C | U110C Kommunikationsverlust mit Drehmomentanforderung DSC (Dynamic Stability Control) |
| 0x110D | U110D | U110D Botschaftsüberwachung Drehmomentanforderung DSC (Dynamic Stability Control) - Prüfsummenfehler |
| 0x110E | U110E | U110E Botschaftsüberwachung Drehmomentanforderung EGS (elektronische Getriebesteuerung) - Aliveprüfung |
| 0x110F | U110F | U110F Kommunikationsverlust mit Drehmomentanforderung EGS (elektronische Getriebesteuerung) |
| 0x1110 | U1110 | U1110 Botschaftsüberwachung Drehmomentanforderung EGS (elektronische Getriebesteuerung) - Prüfsummenfehler |
| 0x1111 | U1111 | U1111 Botschaftsüberwachung Drehmomentanforderung SSG (sequentielles Schaltgetriebe) - Aliveprüfung |
| 0x1112 | U1112 | U1112 Kommunikationsverlust mit Drehmomentanforderung SSG (sequentielles Schaltgetriebe) |
| 0x1113 | U1113 | U1113 Botschaftsüberwachung Drehmomentanforderung SSG (sequentielles Schaltgetriebe) - Prüfsummenfehler |
| 0x1114 | U1114 | U1114 Botschaftsüberwachung Status Fahrzeugmodus - Aliveprüfung |
| 0x1115 | U1115 | U1115 Kommunikationsverlust mit Status Fahrzeugmodus |
| 0x1116 | U1116 | U1116 Botschaftsüberwachung Status Fahrzeugmodus - Prüfsummenfehler |
| 0x1117 | U1117 | U1117 Botschaftsüberwachung Geschwindigkeit - Aliveprüfung |
| 0x1118 | U1118 | U1118 Kommunikationsverlust mit Geschwindigkeit |
| 0x1119 | U1119 | U1119 Botschaftsüberwachung Geschwindigkeit - Prüfsummenfehler |
| 0x111A | U111A | U111A Kommunikationsverlust mit Getriebedaten |
| 0x111B | U111B | U111B Kommunikationsverlust mit Getriebedaten2 |
| 0x111C | U111C | U111C Kommunikationsverlust mit Kilometerstand/Reichweite |
| 0x111D | U111D | U111D Botschaftsüberwachung Klemmenstatus - Aliveprüfung |
| 0x111E | U111E | U111E Kommunikationsverlust mit Klemmenstatus |
| 0x111F | U111F | U111F Botschaftsüberwachung Klemmenstatus - Prüfsummenfehler |
| 0x1120 | U1120 | U1120 Kommunikationsverlust mit Lenkradwinkel |
| 0x1121 | U1121 | U1121 Kommunikationsverlust mit Powermanagement Batteriespannung |
| 0x1122 | U1122 | U1122 Kommunikationsverlust mit Powermanagement Ladespannung |
| 0x1123 | U1123 | U1123 Botschaftsüberwachung Status Modul ARS (Active Roll Stabilisation) - Aliveprüfung |
| 0x1124 | U1124 | U1124 Kommunikationsverlust mit Status Modul ARS (Active Roll Stabilisation) |
| 0x1125 | U1125 | U1125 Botschaftsüberwachung Status DSC (Dynamic Stability Control) - Aliveprüfung |
| 0x1126 | U1126 | U1126 Kommunikationsverlust mit Status DSC (Dynamic Stability Control) |
| 0x1127 | U1127 | U1127 Botschaftsüberwachung Status DSC (Dynamic Stability Control) - Prüfsummenfehler |
| 0x1128 | U1128 | U1128 Kommunikationsverlust mit Status EKP (Elektrische Kraftstoffpumpe) |
| 0x1129 | U1129 | U1129 Kommunikationsverlust mit Status Rückwärtsgang |
| 0x112A | U112A | U112A Botschaftsüberwachung Status Instrumentenkombination - Aliveprüfung |
| 0x112B | U112B | U112B Kommunikationsverlust mit Status Instrumentenkombination |
| 0x112C | U112C | U112C Kommunikationsverlust mit Wärmestrom/Lastmoment Klima |
| 0x112D | U112D | U112D Kommunikationsverlust mit Steuerung Crashabschaltung EKP (elektrische Kraftstoffpumpe) |
| 0x3000 | U3000 | U3000 Steuergerät - Fehlfunktion |
| 0x3002 | U3002 | U3002 Fahrgestellnummer |
| 0x3003 | U3003 | U3003 Batteriespannung - Fehlfunktion |
| 0xXYXY | ?? | unbekannter P-Code |
