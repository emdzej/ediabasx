# GS19A.prg

## General

|  |  |
| --- | --- |
| File | GS19A.prg |
| Type | PRG |
| Jobs | 153 |
| Tables | 52 |
| Origin | BMW EA-71 Burkhardt |
| Revision | 3.02 |
| Author | ZF TE-HI H.Windberg ES52 H.Wagner |
| ECU Comment | SGBD fuer GS19.04 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Getriebesteuerung GS19.04 |  |  |
| ORIGIN | string | BMW EA-71 Burkhardt |  |  |
| REVISION | string | 3.02 |  |  |
| AUTHOR | string | ZF TE-HI H.Windberg ES52 H.Wagner     |  |  |
| COMMENT | string | SGBD fuer GS19.04 |  |  |
| PACKAGE | string | 1.26 |  |  |
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

### RBM_RATIOS_AUSLESEN

RBM Inhalt ausgeben KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

## Tables

### SG_DIAGNOSEKONZEPT

| RANG | KONZEPT_TEXT |
| --- | --- |
| 1 | BMW-FAST |
| 2 | KWP2000* |
| 3 | KWP2000 |
| - | DS2 |

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

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

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
| 0x4EEA | Abtriebsdrehzahlsensor |
| 0x4F4B | Gangueberwachung R |
| 0x4F4C | Symptom Gangueberwachung |
| 0x4F4D | Gangueberwachung 1 |
| 0x4F4E | Gangueberwachung 2 |
| 0x4F4F | Gangueberwachung 3 |
| 0x4F50 | Gangueberwachung 4 |
| 0x4F51 | Gangueberwachung 5 |
| 0x4F52 | Gangueberwachung 6 |
| 0x4F57 | Schaltungsueberwachung 1-2 |
| 0x4F58 | Schaltungsueberwachung 2-3 |
| 0x4F59 | Schaltungsueberwachung 3-4 |
| 0x4F5A | Schaltungsueberwachung 4-5 |
| 0x4F5B | Schaltungsueberwachung 5-6 |
| 0x4F5C | Schaltungsueberwachung 2-1 |
| 0x4F5D | Schaltungsueberwachung 3-2 |
| 0x4F5E | Schaltungsueberwachung 4-3 |
| 0x4F5F | Schaltungsueberwachung 5-4 |
| 0x4F60 | Schaltungsueberwachung 6-5 |
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
| 0x4F6A | Getriebesteuerung: Abschaltung Übertemperatur |
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
| 0x4FB3 | Getriebesteuerung:interner Fehler (VRAM |
| 0x4F78 | Botschaft vom Längsdynamikmanagement (LDM) fehlt |
| 0x51AF | Botschaft vom Verteilergetriebe fehlt |
| 0x4F7A | Botschaft vom Verteilergetriebe fehlerhaft |
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
| 0x5140 | Botschaft von der Motosteuerung fehlt |
| 0x5141 | Botschaft von der dynamischen Stabilitäts-Control fehlt |
| 0x5142 | Botschaft von der Instrumentenkombination fehlt |
| 0x5143 | Botschaft von der Active Cruise-Control fehlt |
| 0x5144 | Botschaft vom Car Access System fehlt |
| 0x5145 | Botschaft von der Parkbremse (EMF) fehlt |
| 0x5146 | Botschaft vom Satellit Sitz Fahrer (SSFA) fehlt |
| 0x5147 | Botschaft vom Schaltzentrum Lenksäule (SZL) fehlt |
| 0x5149 | Botschaft vom Powermodul fehlt |
| 0x514A | Botschaft vom Schaltzentrum Mittelkonsole fehlt |
| 0x5150 | Botschaft vom Anhängermodul fehlt |
| 0x51A5 | Signal (Momentenschnittstelle) von der Motorsteuerung fehlerhaft |
| 0x51A7 | Signal (Motordrehzahl) von der Motorsteuerung fehlerhaft |
| 0x51A8 | Signal (Drosselklappe/Fahrpedal)von der Motorsteuerung fehlerhaft |
| 0x51AD | Botschaft (Raddrehzahlen) von der DSC fehlt |
| 0x51AA | Signal (Positionsinformation) vom Schaltzentrum Lenkäule fehlt |
| 0x51AB | Signal (P-Taster) vom Schaltzentrum Lenksäule fehlerhaft |
| 0x51AC | Signal (Identifikationsgeber steckt) vom Car Access System fehlerhaft |
| 0x51AE | Botschaft (Bremslichtschalter) von der Motorsteuerung unplausibel |
| 0x51B0 | Botschaft (Bremslichtschalter) von der DSC unplausibel |
| 0xCF07 | Kommunikationsfehler:PT-CAN |
| 0x51A4 | Botschaft CAN11-Stand fehlerhaft |
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

### FARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| 0x51A7 | 0x0008 | 0x0040 | 0x0040 | 0x0040 |
| 0xCF07 | 0x0080 | 0x0040 | 0x0040 | 0x0040 |
| 0x51A4 | 0x00CF | 0x0040 | 0x0040 | 0x0040 |
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
| 0x4FB3 | 0x0051 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F78 | 0x008A | 0x0040 | 0x0040 | 0x0040 |
| 0x4F7A | 0x009B | 0x009A | 0x0040 | 0x0040 |
| 0x4F6A | 0x0094 | 0x0040 | 0x0040 | 0x0040 |
| 0x51AF | 0x008A | 0x0040 | 0x0040 | 0x0040 |
| 0x5140 | 0x008A | 0x0040 | 0x0040 | 0x0040 |
| 0x5141 | 0x008A | 0x0040 | 0x0040 | 0x0040 |
| 0x5142 | 0x008A | 0x0040 | 0x0040 | 0x0040 |
| 0x5143 | 0x008A | 0x0040 | 0x0040 | 0x0040 |
| 0x5144 | 0x008A | 0x0040 | 0x0040 | 0x0040 |
| 0x5145 | 0x008A | 0x0040 | 0x0040 | 0x0040 |
| 0x5146 | 0x008A | 0x0040 | 0x0040 | 0x0040 |
| 0x5147 | 0x008A | 0x0040 | 0x0040 | 0x0040 |
| 0x5149 | 0x008A | 0x0040 | 0x0040 | 0x0040 |
| 0x514A | 0x008A | 0x0040 | 0x0040 | 0x0040 |
| 0x5150 | 0x008A | 0x0040 | 0x0040 | 0x0040 |
| 0x51B0 | 0x00C9 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F4B | 0x0093 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F4C | 0x00D0 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F4D | 0x00D0 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F4E | 0x00D0 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F4F | 0x00D0 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F50 | 0x00D0 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F51 | 0x00D0 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F52 | 0x00D0 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F57 | 0x00D1 | 0x00D2 | 0x0040 | 0x0040 |
| 0x4F58 | 0x00D1 | 0x00D2 | 0x0040 | 0x0040 |
| 0x4F59 | 0x00D1 | 0x00D2 | 0x0040 | 0x0040 |
| 0x4F5A | 0x00D1 | 0x00D2 | 0x0040 | 0x0040 |
| 0x4F5B | 0x00D1 | 0x00D2 | 0x0040 | 0x0040 |
| 0x4F5C | 0x00D1 | 0x00D2 | 0x0040 | 0x0040 |
| 0x4F5D | 0x00D1 | 0x00D2 | 0x0040 | 0x0040 |
| 0x4F5E | 0x00D1 | 0x00D2 | 0x0040 | 0x0040 |
| 0x4F5F | 0x00D1 | 0x00D2 | 0x0040 | 0x0040 |
| 0x4F60 | 0x00D1 | 0x00D2 | 0x0040 | 0x0040 |
| 0x4EEA | 0x0055 | 0x0060 | 0x0040 | 0x0040 |
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
| 0x008A | Fehler CAN-Botschaft |
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
| 0x00CF | Fehler Datenstand |
| 0x00D0 | Kupplungsschlupf |
| 0x00D1 | Getriebe ohne Kraftschluss |
| 0x00D2 | Verspanntes Getriebe |
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
| 0x02 | 0x51A4 |
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
| 0x11 | 0x4F6A |
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
| 0x40 | 0x4E97 |
| 0x41 | 0x4EE9 |
| 0x42 | 0x5145 |
| 0x43 | 0x5142 |
| 0x44 | 0x5146 |
| 0x45 | 0x5140 |
| 0x46 | 0x5143 |
| 0x47 | 0x5144 |
| 0x48 | 0x5141 |
| 0x49 | 0x5147 |
| 0x4A | 0x5079 |
| 0x4B | 0x51AA |
| 0x4C | 0x507A |
| 0x4D | 0x4EF3 |
| 0x4E | 0x5016 |
| 0x4F | 0x4FB3 |
| 0x50 | 0x5014 |
| 0x51 | 0x507C |
| 0x52 | 0x507D |
| 0x53 | 0x51AB |
| 0x54 | 0x51A8 |
| 0x55 | 0x51AE |
| 0x56 | 0x5149 |
| 0x57 | 0x4E89 |
| 0x58 | 0x4F71 |
| 0x59 | 0x4E26 |
| 0x5B | 0x5150 |
| 0x5C | 0x4EEB |
| 0x5D | 0x5087 |
| 0x5E | 0x51AD |
| 0x5F | 0x514A |
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
| 0x6F | 0x4F78 |
| 0x70 | 0x51AF |
| 0x71 | 0x4F7A |
| 0x72 | 0x5119 |
| 0x73 | 0x511A |
| 0x74 | 0x51B0 |
| 0x75 | 0x5114 |
| 0x76 | 0x5115 |
| 0x5A | 0x4F4B |
| 0x29 | 0x4F4C |
| 0x2A | 0x4F4D |
| 0x2B | 0x4F4E |
| 0x2C | 0x4F4F |
| 0x2D | 0x4F50 |
| 0x2E | 0x4F51 |
| 0x2F | 0x4F52 |
| 0x30 | 0x4F56 |
| 0x31 | 0x4F57 |
| 0x32 | 0x4F57 |
| 0x33 | 0x4F58 |
| 0x34 | 0x4F58 |
| 0x35 | 0x4F59 |
| 0x36 | 0x4F59 |
| 0x37 | 0x4F5A |
| 0x38 | 0x4F5A |
| 0x39 | 0x4F5B |
| 0x3A | 0x4F5C |
| 0x3B | 0x4F5C |
| 0x3C | 0x4F5D |
| 0x3D | 0x4F5E |
| 0x3E | 0x4F5F |
| 0x3F | 0x4F5F |
| 0x40 | 0x4EEA |
| 0x41 | 0x4F60 |
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
| 0x4EE8 | sgt_Gear0 | 0x07 | 0x04 | 0x05 |
| 0x4EEB | sgt_Gear0 | 0x03 | 0x07 | 0x0E |
| 0x4EF2 | 0x01 | 0x04 | 0x06 | sgt_Gear0 |
| 0x4EF3 | 0x01 | 0x04 | 0x06 | sgt_Gear0 |
| 0x4EE9 | sgt_Gear0 | 0x03 | 0x01 | 0x0E |
| 0x4EEA | sgt_Gear0 | 0x03 | 0x07 | 0x0E |
| 0x4F4B | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F4C | sgt_Gear0 | 0x0B | 0x01 | 0x03 |
| 0x4F4D | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F4E | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F4F | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F50 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F51 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F52 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F57 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F58 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F59 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F5A | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F5B | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F5C | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F5D | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F5E | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F5F | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F60 | 0x0B | 0x01 | 0x03 | 0x07 |
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
| 0x4F6B | 0x01 | 0x04 | 0x06 | 0x08 |
| 0x4F6F | sgt_Gear0 | 0x0B | 0x05 | 0x07 |
| 0x4F70 | sgt_Gear0 | 0x05 | 0x03 | 0x07 |
| 0x4F71 | sgt_Inp0 | 0x04 | sgt_Gear0 | sgt_Out0 |
| 0x4F77 | 0x0B | sgt_Can0 | sgt_Gear0 | 0x05 |
| 0x4FB0 | 0x01 | 0x04 | sck_Fast_Error | sck_Error |
| 0x4FB1 | 0x01 | 0x04 | sck_Fast_Error | sck_Error |
| 0x4FB2 | 0x01 | 0x04 | 0x06 | 0x0C |
| 0x4FB3 | 0x01 | 0x04 | 0x06 | 0x90 |
| 0x4FB7 | 0x01 | 0x04 | sck_Fast_Error | sck_Error |
| 0x4FB8 | 0xFE | 0xFE | 0xFE | 0x0E |
| 0x4FB9 | 0x17 | 0x02 | 0x01 | 0x06 |
| 0x4F78 | 0x0C | 0x04 | sgt_Can0 | 0x90 |
| 0x51AF | 0x0C | 0x04 | sgt_Sig3 | 0x90 |
| 0x4F7A | sgt_Gear0 | 0x0B | 0x03 | 0x07 |
| 0x5014 | 0x05 | 0x04 | 0x02 | 0x07 |
| 0x5015 | 0x0C | 0x04 | 0x02 | 0x05 |
| 0x5016 | sgt_Inp0 | 0x04 | 0x07 | 0x03 |
| 0x5079 | 0x0C | 0x04 | sgt_Sig3 | 0x90 |
| 0x507A | 0x0C | 0x04 | sgt_Sig3 | 0x90 |
| 0x507B | sgt_Sig0 | sgt_Inp0 | 0x02 | sgt_Out0 |
| 0x507C | sgt_Sig0 | sgt_Inp0 | 0x02 | sgt_Out0 |
| 0x507D | sgt_Sig0 | sgt_Inp0 | 0x02 | sgt_Out0 |
| 0x5087 | 0x04 | sgt_Inp0 | sgt_Sig0 | sgt_Sig3 |
| 0x5088 | 0x0C | 0x04 | sgt_Sig3 | 0x90 |
| 0x5089 | sgt_Inp0 | sgt_Sig0 | 0x04 | 0x05 |
| 0x50DC | 0x0C | 0x04 | sgt_Sig3 | 0x90 |
| 0x50DD | rdi_massn0 | rdi_massn1 | rdi_massn2 | rdi_massn3 |
| 0x5140 | 0x0C | 0x04 | sgt_Can0 | 0x05 |
| 0x5141 | 0x0C | 0x04 | sgt_Can0 | 0x03 |
| 0x5142 | 0x0C | 0x04 | sgt_Can0 | sgt_Sig3 |
| 0x5143 | 0x0C | 0x04 | sgt_Can0 | 0x03 |
| 0x5144 | 0x0C | 0x04 | sgt_Can0 | 0x03 |
| 0x5145 | 0x0C | 0x04 | sgt_Can0 | 0x03 |
| 0x5146 | 0x0C | 0x04 | sgt_Can0 | sgt_Sig2 |
| 0x5147 | 0x0C | 0x04 | sgt_Sig3 | 0x90 |
| 0x5149 | 0x0C | 0x04 | sgt_Can0 | 0x03 |
| 0x514A | 0x0C | 0x04 | sgt_Can0 | 0x03 |
| 0x5150 | 0x0C | 0x04 | sgt_Can0 | sgt_Sig3 |
| 0x51A5 | 0x0B | 0x04 | sgt_Can0 | 0x05 |
| 0x51A7 | 0x05 | 0x04 | sgt_Can0 | 0x08 |
| 0x51A8 | 0x09 | 0x04 | sgt_Can0 | 0x05 |
| 0x51AD | sgt_Gear0 | 0x03 | 0x07 | 0x0E |
| 0x51AA | 0x0C | 0x04 | sgt_Sig3 | 0x90 |
| 0x51AB | sgt_Inp0 | sgt_Gear0 | sgt_Sig3 | 0x90 |
| 0x51AC | sgt_Sig3 | 0x04 | sgt_Can0 | 0x90 |
| 0x51AE | sgt_Sig2 | 0x04 | sgt_Can0 | sgt_Sig3 |
| 0x51B0 | sgt_Sig2 | 0x04 | sgt_Can0 | sgt_Sig3 |
| 0xCF07 | 0x0C | 0x04 | sgt_Can0 | sgt_Sig3 |
| 0x51A4 | 0x0C | 0x04 | 0x01 | 0xFF |
| default | 0xFF | 0xFF | 0xFF | 0xFF |

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
| 0xFE | nicht definiert | 1 | - | unsigned char | - | 1 | 1 | 0 |
| 0xFF | ohne Bedeutung | 1 | - | unsigned char | - | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

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
| 0x5119 | Reset im Bosch SW-Teil |
| 0x511A | Reset im ZF SW-Teil |
| 0x5114 | Funktionalität der Hotmode Stufe 1,2 oder 3 ausgelöst |
| 0x5115 | Anzeige für Hotmode Stufe 1 oder 2 ausgelöst |
| 0x4F4C | Symptom Gangueberwachung |
| 0x4F56 | Schaltungsueberwachung Überschneidungsschaltung |
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

### IARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
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
| 0x4F80 | 0x0092 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F86 | 0x007A | 0x0040 | 0x0040 | 0x0040 |
| 0x4F4C | 0x00D0 | 0x0040 | 0x0040 | 0x0040 |
| 0x4F56 | 0x00D1 | 0x0040 | 0x0040 | 0x0040 |
| defaut | 0x0008 | 0x0004 | 0x0002 | 0x0001 |

### IARTTEXTEINDIVIDUELL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x0040 | nicht belegt |
| 0x0099 | EGS-Reset |
| 0x007A | Symptom Schaltungsüberwachung |
| 0x0092 | Symptom Gangüberwachung |
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
| 0x00D0 | Kupplungsschlupf |
| 0x00D1 | Getriebe ohne Kraftschluss |
| 0x00D2 | Verspanntes Getriebe |
| 0xFFFF | unbekannte Fehlerart |

### IUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x5118 | 0x01 | 0x04 | 0x06 | 0x0C |
| 0x5113 | 0x01 | 0x06 | sgt_Gear0 | sgt_Sig0 |
| 0x510E | 0x04 | 0x01 | sgt_Gear0 | sgt_Sig0 |
| 0x510F | 0x03 | sgt_Sig3 | sgt_Gear0 | sgt_Sig0 |
| 0x5110 | 0x03 | sgt_Sig3 | sgt_Gear0 | sgt_Sig0 |
| 0x5111 | sgt_Inp0 | sgt_Gear0 | 0x03 | 0x01 |
| 0x5112 | sgt_Inp0 | sgt_Gear0 | 0x03 | 0x01 |
| 0x5119 | 0x05 | 0x03 | 0xC0 | 0x17 |
| 0x511A | 0x05 | 0x03 | 0xC0 | 0x17 |
| 0x5114 | 0xD1 | 0xD3 | 0x1C | 0x1B |
| 0x5115 | 0xD1 | 0xD3 | 0x1C | 0x1B |
| 0x4F80 | sgt_Gear0 | 0x0B | 0x01 | 0x03 |
| 0x4F86 | sgt_Gear0 | 0x0B | 0x01 | 0x03 |
| 0x4F4C | sgt_Gear0 | 0x0B | 0x01 | 0x03 |
| 0x4F56 | sgt_Gear0 | 0x0B | 0x01 | 0x03 |
| default | 0x01 | 0x02 | -- | -- |

### TTCURLAST_TAB

| WERT | UWTEXT |
| --- | --- |
| 0x00 | undefiniert |
| 0x01 | Reset in Initilisation |
| 0x02 | Reset in Standby |
| 0x03 | Reset in Betrieb |
| 0x04 | Reset in Limp-Home |
| 0xXY | Fehler |

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
| 0x17 | Letzte Exception-Nr. vor Reset: | - | - | unsigned char | - | 1 | 1 | 0 |
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
