# ffp_90.prg

## General

|  |  |
| --- | --- |
| File | ffp_90.prg |
| Type | PRG |
| Jobs | 82 |
| Tables | 34 |
| Origin | BMW EE-23 Bart/Zeng |
| Revision | 1.00 |
| Author | Conti Temic L/B1/EB-N Schwarz |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Force-Feedback-Pedal |  |  |
| ORIGIN | string | BMW EE-23 Bart/Zeng |  |  |
| REVISION | string | 1.00 |  |  |
| AUTHOR | string | Conti Temic L/B1/EB-N Schwarz |  |  |
| COMMENT | string |  |  |  |
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

Infospeicher lesen (alle Info-Meldungen / Ort und Art) KWP2000: $22 ReadDataByCommonIdentifier $2001 - $20FF dtcShadowMemoryEntry

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Infocode Wenn dieser Parameter angegeben wird, wird die Position automatisch ermittelt. Es darf dann nicht argument F_POS angegeben werden |
| F_POS | int | gewaehlter Eintrag Wenn dieser Parameter angegeben wird, wird die Position benutzt. Wertebereich 1 - 255 Es darf dann nicht argument F_CODE angegeben werden |

### IS_LOESCHEN

Infospeicher loeschen KWP2000: $31 StartRoutineByLocalIdentifier $06 ClearDTCShadowMemory Modus  : Default

_No arguments._

### HS_LESEN

Historyspeicher lesen (alle History-Meldungen / Ort und Art) KWP2000: $22 ReadDataByCommonIdentifier $2100 HistoryMemory Modus  : Default

_No arguments._

### HS_LESEN_DETAIL

Historypeicher lesen (alle History-Meldungen / Ort und Art) KWP2000: $22 ReadDataByCommonIdentifier $2101 - $21FF HistoryMemoryEntry Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Historycode Wenn dieser Parameter angegeben wird, wird die Position automatisch ermittelt. Es darf dann nicht argument F_POS angegeben werden |
| F_POS | int | gewaehlter Eintrag Wenn dieser Parameter angegeben wird, wird die Position benutzt. Wertebereich 1 - 255 Es darf dann nicht argument F_CODE angegeben werden |

### HS_LOESCHEN

Historyspeicher loeschen KWP2000: $31 StartRoutineByLocalIdentifier $03 ClearHistoryMemory Modus  : Default

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

### STATUS_UBATT

Status Batteriespannung mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_WECKL

Status der Weckleitung nach Plausibilisierung mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_AD_C_TEMP

AD Wert des Temperatursensors mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_AD_C_HALL

AD Wert des Ist-Winkels mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_ISOLL

Rücklesewert ist der Ist-Strom mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_CAN_F_MIN

Kraft Min über CAN mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_CAN_F_MAX

Kraft Max über CAN mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_CAN_STIFF

Steifigkeit über CAN mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_CAN_ANG_TAR

Sollwinkel über CAN mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_CAN_KLEMME15

Klemme 15 über CAN nach Plausibilisierung mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_TEMP_NACH_UEE

Motortemperatur nach der Fehlerprüfung mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_PWM

Status der PWM mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_ISOLL_OHNE

Sollstromvorgabe ohne Korrektur mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_CA

CA Bit mit dem SGBD-Generator erzeugt

_No arguments._

### TEM_FS_LESEN

Fehlerspeicher lesen KWP2000: $18 ReadDiagnosticTroubleCodesByStatus Diagnosemodus: Default

| Name | Type | Description |
| --- | --- | --- |
| MODE | unsigned char | Parameter SODTC der Anfrage $18 0: identified BCD 1: supported BCD 2: identified 2ByteHex 3: supported 2ByteHex  |

### TEM_SECURITY_ACCESS

Security Access, SG Zugang KWP2000: $27 SecurityAccess $03 requestSeedTemic $05 sendKeyTemic

| Name | Type | Description |
| --- | --- | --- |
| SA_AM_SENDKEY | int |  |
| SA_AM_REQUESTSEED | int |  |
| SA_KEY | int | gewaehlter Fehlercode |

### RLI_LESEN

RLI_LESEN KWP2000: $21 ReadDataByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| RLI_TESTER | string | table RLI MNEMONIC |

### RLI_MESSWERTE_LESEN

RLI_MESSWERTE lesen KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### RLI_CAN_LESEN

RLI_CAN_LESEN lesen KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### RLI_ROHWERTE_LESEN

RLI_ROHWERTE lesen KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### TEM_FS_LOESCHEN

Fehlerspeicher loeschen (alle Fehler / Ort und Art) KWP2000: $14 Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| GODTC | unsigned int |  |

### TEM_WDBLI_AB

AB EEPROM schreiben Als Argumente werden uebergeben: Der RecordLocalIdentifier und 10 Datenbytes (durch Komma getrennt) KWP2000: $3B WriteDataByLocalIdentifier Diagnosemodus: Default

| Name | Type | Description |
| --- | --- | --- |
| RLI_ABE | unsigned char | 1 (RLI_ABE_EE) oder 2 (RLI_ABE_ID_EE) |
| DATEN | string | zu schreibende Daten z.B. 1,2,03,0x04,0x05... |

### TEM_DIAG_KWP

KWP2000 Anfragen zusammenstellen KWP2000: Diagnosemodus: Default

| Name | Type | Description |
| --- | --- | --- |
| SID | unsigned char |  |
| ANZAHL_PAR | unsigned char |  |
| PARAMETER | string | z.B. 1,2,03,0x04,0x05...   |

### RLI_AB_LESEN

RLI_AB_LESEN KWP2000: $21 ReadDataByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| RLI_ABE | unsigned char | 1 (RLI_ABE_EE) oder 2 (RLI_ABE_ID_EE) |

### TEM_IOLI

TEM_IOLI KWP2000: $30 InputOutputControlByLocalIdentifier

| Name | Type | Description |
| --- | --- | --- |
| IOLI | string | table IOLI MNEMONIC |
| CONTROL_OPTION | unsigned char | table IOLI MNEMONIC |
| CONTROL_PARAMETER | real | table IOLI MNEMONIC |

### STEUERN_WECKL

_No description._

| Name | Type | Description |
| --- | --- | --- |
| CONTROL_PARAMETER | real |  |

### STEUERN_UBATT

_No description._

| Name | Type | Description |
| --- | --- | --- |
| CONTROL_PARAMETER | real |  |

### STEUERN_AD_C_TEMP

_No description._

| Name | Type | Description |
| --- | --- | --- |
| CONTROL_PARAMETER | real |  |

### STEUERN_AD_C_HALL

_No description._

| Name | Type | Description |
| --- | --- | --- |
| CONTROL_PARAMETER | real |  |

### STEUERN_ISOLL

_No description._

| Name | Type | Description |
| --- | --- | --- |
| CONTROL_PARAMETER | real |  |

### STEUERN_CAN_F_MIN

_No description._

| Name | Type | Description |
| --- | --- | --- |
| CONTROL_PARAMETER | real |  |

### STEUERN_CAN_F_MAX

_No description._

| Name | Type | Description |
| --- | --- | --- |
| CONTROL_PARAMETER | real |  |

### STEUERN_CAN_STIFF

_No description._

| Name | Type | Description |
| --- | --- | --- |
| CONTROL_PARAMETER | real |  |

### STEUERN_CAN_ANG_TAR

_No description._

| Name | Type | Description |
| --- | --- | --- |
| CONTROL_PARAMETER | real |  |

### STEUERN_CAN_KLEMME15

_No description._

| Name | Type | Description |
| --- | --- | --- |
| CONTROL_PARAMETER | real |  |

### STEUERN_TEMP_NACH_UEE

_No description._

| Name | Type | Description |
| --- | --- | --- |
| CONTROL_PARAMETER | real |  |

### STEUERN_PWM

_No description._

| Name | Type | Description |
| --- | --- | --- |
| CONTROL_PARAMETER | real |  |

### IOLI_RETURN_CTRL

_No description._

| Name | Type | Description |
| --- | --- | --- |
| IOLI | unsigned char | InputOutputControlLocalIdentifier |

### ABE_ZUGANG

Freischaltung,ABE SG Zugang KWP2000: $10 StartDiagnosticSession EOLSSM $27 SecurityAccess $05 requestSeedABE $06 sendKeyABE

_No arguments._

### STEUERN_ISOLL_OHNE

_No description._

| Name | Type | Description |
| --- | --- | --- |
| CONTROL_PARAMETER | real |  |

### STEUERN_CA

_No description._

| Name | Type | Description |
| --- | --- | --- |
| CONTROL_PARAMETER | real |  |

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
| 0x18 | Teves |
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

### HARTTEXTE

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
| 0x00 | ERROR_WRONG_KEY |
| 0x01 | ERROR_ARGUMENT_KEY |
| 0x02 | ERROR_ARGUMENT_ACCESS_MODE |
| 0x03 | ERROR_ARGUMENT_RLI |
| 0x04 | ERROR_ARGUMENT_RCI |
| 0x05 | ERROR_ARGUMENT_IOLI |
| 0x06 | ERROR_ARGUMENT_RELI |
| 0x07 | ERROR_ARGUMENT_MODE |
| 0x08 | ERROR_ARGUMENT_SID |
| 0x09 | ERROR_ARGUMENT_ANZAH_PAR |
| 0xA | ERROR_ARGUMENT_PARAMETER |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x62EC | Temperatursensor |
| 0x62ED | Motorhallsensor |
| 0x62EE | H-Brücke/Torquemotor |
| 0x62EF | S12DG128MFU |
| 0x62F0 | Fehlerhaftes CAN Signal in Botschaft ANF_WINKEL_FFP, LDM fehlerhaft |
| 0x62F1 | KL 30 |
| 0x62F2 | Weckleitung |
| 0x62F3 | Fehlerhaftes CAN Signal in Botschaft KLEMMENSTATUS, CAS fehlerhaft |
| 0x62F4 | EEPROM Fehler |
| 0x62F5 | Temperaturerwärmung |
| 0xD047 | Pt-Can Kommunikationsfehler |
| 0xD054 | CAN Botschaft (ANF_WINKEL_FFP, 0x15F) |
| 0xD055 | CAN Botschaft (KILOMETERSTAND, 0x330) |
| 0xD056 | CAN Botschaft (KLEMMENSTATUS, 0x130) |
| 0xD058 | CAN Botschaft (A_TEMP_RELATIVZEIT, 0x310) |
| 0x62F7 | Strommessung |
| 0x62F8 | Regelanforderung |
| 0x62F9 | Hallsensor Plausibilität |

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
| 0x62EC | ANALOG | 0x06 | VAR_UMW | - |
| 0x62ED | ANALOG | 0x06 | VAR_UMW | - |
| 0x62EE | ANALOG | 0x06 | VAR_UMW | - |
| 0x62EF | ANALOG | 0x0B | VAR_UMW | - |
| 0x62F0 | ANALOG | 0x06 | VAR_UMW | - |
| 0x62F1 | ANALOG | 0x06 | VAR_UMW | - |
| 0x62F2 | ANALOG | 0x06 | VAR_UMW | - |
| 0x62F3 | ANALOG | 0x06 | VAR_UMW | - |
| 0x62F4 | ANALOG | 0x0A | VAR_UMW | - |
| 0x62F5 | ANALOG | 0x06 | VAR_UMW | - |
| 0xD047 | ANALOG | 0x06 | VAR_UMW | - |
| 0xD054 | ANALOG | 0x06 | VAR_UMW | - |
| 0xD055 | ANALOG | 0x06 | VAR_UMW | - |
| 0xD056 | ANALOG | 0x06 | VAR_UMW | - |
| 0xD058 | ANALOG | 0x06 | VAR_UMW | - |
| 0x62F7 | ANALOG | 0x06 | VAR_UMW | - |
| 0x62F8 | ANALOG | 0x06 | VAR_UMW | - |
| 0x62F9 | ANALOG | 0x06 | VAR_UMW | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Batteriespannung | Volt | high | signed int | - | 0.001953125 | 1 | - |
| 0x02 | Motortemperatur | Grad | high | signed int | - | 0.0078125 | 1 | - |
| 0x03 | Motorstrom | % | high | signed int | - | 0.02441406 | 1 | - |
| 0x04 | Ist Winkel | % | high | unsigned int | - | 0.025 | 1 | - |
| 0x05 | Soll Winkel | % | high | unsigned int | - | 0.025 | 1 | - |
| 0x06 | Variabel 1 | - | high | unsigned int | - | 1 | 1 | - |
| 0x07 | Variabel 2 | - | high | signed int | - | 1 | 1 | - |
| 0x08 | Variabel 3 | - | high | signed int | - | 1 | 1 | - |
| 0x09 | Variabel 4 | - | high | signed int | - | 1 | 1 | - |
| 0x0A | EEPROM Blocknummer | - | high | unsigned int | - | 1 | 1 | - |
| 0x0B | S12 Fehlerart | - | high | unsigned int | - | 1 | 1 | - |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x62EC | Temperatursensor |
| 0x62ED | Motorhallsensor |
| 0x62EE | H-Brücke/Torquemotor |
| 0x62EF | S12DG128MFU |
| 0x62F0 | Fehlerhaftes CAN Signal in Botschaft ANF_WINKEL_FFP, LDM fehlerhaft |
| 0x62F1 | KL 30 |
| 0x62F2 | Weckleitung |
| 0x62F3 | Fehlerhaftes CAN Signal in Botschaft KLEMMENSTATUS, CAS fehlerhaft |
| 0x62F4 | EEPROM Fehler |
| 0x62F5 | Temperaturerwärmung |
| 0xD047 | Pt-Can Kommunikationsfehler |
| 0xD054 | CAN Botschaft (ANF_WINKEL_FFP, 0x15F) |
| 0xD055 | CAN Botschaft (KILOMETERSTAND, 0x330) |
| 0xD056 | CAN Botschaft (KLEMMENSTATUS, 0x130) |
| 0xD058 | CAN Botschaft (A_TEMP_RELATIVZEIT, 0x310) |
| 0x62F7 | Strommessung |
| 0x62F8 | Regelanforderung |
| 0x62F9 | Hallsensor Plausibilität |

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

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x62EC | Temperatursensor |
| 0x62ED | Motorhallsensor |
| 0x62EE | H-Brücke/Torquemotor |
| 0x62EF | S12DG128MFU |
| 0x62F0 | Fehlerhaftes CAN Signal in Botschaft ANF_WINKEL_FFP, LDM fehlerhaft |
| 0x62F1 | KL 30 |
| 0x62F2 | Weckleitung |
| 0x62F3 | Fehlerhaftes CAN Signal in Botschaft KLEMMENSTATUS, CAS fehlerhaft |
| 0x62F4 | EEPROM Fehler |
| 0x62F5 | Temperaturerwärmung |
| 0xD047 | Pt-Can Kommunikationsfehler |
| 0xD054 | CAN Botschaft (ANF_WINKEL_FFP, 0x15F) |
| 0xD055 | CAN Botschaft (KILOMETERSTAND, 0x330) |
| 0xD056 | CAN Botschaft (KLEMMENSTATUS, 0x130) |
| 0xD058 | CAN Botschaft (A_TEMP_RELATIVZEIT, 0x310) |
| 0x62F7 | Strommessung |
| 0x62F8 | Regelanforderung |
| 0x62F9 | Hallsensor Plausibilität |

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
| 0x62EC | ANALOG | 0x06 | VAR_UMW | - |
| 0x62ED | ANALOG | 0x06 | VAR_UMW | - |
| 0x62EE | ANALOG | 0x06 | VAR_UMW | - |
| 0x62EF | ANALOG | 0x0B | VAR_UMW | - |
| 0x62F0 | ANALOG | 0x06 | VAR_UMW | - |
| 0x62F1 | ANALOG | 0x06 | VAR_UMW | - |
| 0x62F2 | ANALOG | 0x06 | VAR_UMW | - |
| 0x62F3 | ANALOG | 0x06 | VAR_UMW | - |
| 0x62F4 | ANALOG | 0x0A | VAR_UMW | - |
| 0x62F5 | ANALOG | 0x06 | VAR_UMW | - |
| 0xD047 | ANALOG | 0x06 | VAR_UMW | - |
| 0xD054 | ANALOG | 0x06 | VAR_UMW | - |
| 0xD055 | ANALOG | 0x06 | VAR_UMW | - |
| 0xD056 | ANALOG | 0x06 | VAR_UMW | - |
| 0xD058 | ANALOG | 0x06 | VAR_UMW | - |
| 0x62F7 | ANALOG | 0x06 | VAR_UMW | - |
| 0x62F8 | ANALOG | 0x06 | VAR_UMW | - |
| 0x62F9 | ANALOG | 0x06 | VAR_UMW | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Batteriespannung | Volt | high | signed int | - | 0.001953125 | 1 | - |
| 0x02 | Motortemperatur | Grad | high | signed int | - | 0.0078125 | 1 | - |
| 0x03 | Motorstrom | % | high | signed int | - | 0.02441406 | 1 | - |
| 0x04 | Ist Winkel | % | high | unsigned int | - | 0.025 | 1 | - |
| 0x05 | Soll Winkel | % | high | unsigned int | - | 0.025 | 1 | - |
| 0x06 | Variabel 1 | % | high | signed int | - | 1 | 1 | - |
| 0x07 | Variabel 2 | % | high | signed int | - | 1 | 1 | - |
| 0x08 | Variabel 3 | % | high | signed int | - | 1 | 1 | - |
| 0x09 | Variabel 4 | % | high | signed int | - | 1 | 1 | - |
| 0x0A | EEPROM Blocknummer | - | high | unsigned int | - | 1 | 1 | - |
| 0x0B | S12 Fehlerart | - | high | unsigned int | - | 1 | 1 | - |

### ANALOG

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x01 | 0x02 | 0x03 | 0x04 | 0x05 |

### RLI

| WERT | MNEMONIC | TEXT | ANZAHL_MW |
| --- | --- | --- | --- |
| 0x01 | RLI_ABE_EE | ABE Kalibrierdaten EEPROM | 1 |
| 0x02 | RLI_ABE_ID_EE | ABE Prozessdaten EEPROM | 1 |
| 0x03 | RLI_MESSWERTE | Messwerte | 4 |
| 0x04 | RLI_CAN | CAN Botschaften FFP | 14 |
| 0x05 | RLI_BMW | BMW Messwerte | 0 |
| 0x06 | RLI_ROHWERTE | Rohwerte | 8 |
| 0x12 | RLI_TEMIC_TRACE | TEMIC Tracenummer schreiben | 1 |
| 0x13 | RLI_END_STAT | Endtest-Status und Zähler schreiben | 1 |
| 0x89 | RLI_TEMIC_SN | TEMIC Seriennummer schreiben | 1 |
| 0x90 | RLI_VIN | VIN schreiben | 1 |
| 0x9D | RLI_TEMIC_ECUM | TEMIC Produktionsdatum schreiben | 1 |
| 0xFF | DEFAULT | default | 0 |

### ZUGANG_SA

| WERT | MNEMONIC | TEXT |
| --- | --- | --- |
| 0x03 | RSD_TEMIC | requestSeedTemic (Anfrage für Seed bei Temic Authentisierung) |
| 0x04 | SK_TEMIC | sendKeyTemic (Sende Key bei Temic Authentisierung) |
| 0x05 | RSD_ABE | requestSeedABE |
| 0x06 | SK_ABE | sendKeyABE |

### RCI

| WERT | MNEMONIC | TEXT |
| --- | --- | --- |
| 0x1000 | TSP | Prüfstempel |
| 0x2000 | DTCSM | Shadow Speicher |
| 0x2100 | DTCHM | History Speicher |
| 0x2500 | PRBHW*B | programmReferenzBackup/vehicleManufacturerECUHW*NrBackup |
| 0x2501 | ERT | eraseTime |
| 0x2502 | HWREF | HardwareReferenz |
| 0x2503 | PRGREF | ProgrammReferenz |
| 0x2504 | DREF | DatenReferenz |
| 0x2506 | MXBL | MaximaleBlockLaenge |
| 0xFFFF | DEFAULT | default |

### IOLI

| WERT | MNEMONIC | TEXT | FAKTOR | OFFSET | EINHEIT |
| --- | --- | --- | --- | --- | --- |
| 0x01 | IOLI_DI_WECKL | Weckleitung | 1 | 0 | - |
| 0x02 | IOLI_UB_PHYS | physikalische Batteriespannung | 0.001953125 | 0 | Volt |
| 0x03 | IOLI_AD_C_TEMP | AD Temperatur | 0.0002441406 | 0 | Volt |
| 0x04 | IOLI_AD_C_HALL | AD Winkelsensor | 0.0002441406 | 0 | Volt |
| 0x05 | IOLI_ISOLL | Sollstrom | 0.0002441406 | 0 | % |
| 0x06 | IOLI_CAN_F_MIN | F Min | 0.0002441406 | 0 | % |
| 0x07 | IOLI_CAN_F_MAX | F Max | 0.0002441406 | 0 | % |
| 0x08 | IOLI_CAN_STIFF | Steifigkeit | 0.0002441406 | 0 | % |
| 0x09 | IOLI_CAN_ANG_TAR | Sollwinkel | 0.0002441406 | 0 | % |
| 0x0A | IOLI_CAN_KLEMME15 | Klemme 15 | 1 | 0 | - |
| 0x0B | IOLI_TEMP_NACH_UEE | Temperatur nach Ueberwachung | 0.0078125 | 0 | Grad Celsius |
| 0x0C | IOLI_PWM | PWM | 0.0001220703 | 0 | % |
| 0x0D | IOLI_ISOLL_OHNE | Sollstromvorgabe ohne Korrektur | 0.0002441406 | 0 | % |
| 0x0E | IOLI_CA | CA Bit | 1 | 0 | - |
| 0xFFFF | DEFAULT | default | - | - | - |

### RELI

| WERT | MNEMONIC | TEXT |
| --- | --- | --- |
| 0x03 | CHM | clearHistoryMemory |
| 0x06 | CDTCSM | clearDTCShadowMemory |
| 0x07 | RQA | requestForAuthentication |
| 0x08 | RLA | releaseAuthentication |
| 0x0A | CPROGS | checkProgrammingStatus |
| 0x20 | DFABE1 | DiagnosticFunction ABE1 |
| 0x21 | DFABE2 | DiagnosticFunction ABE2 |
| 0x22 | DFBMW1 | DiagnosticFunction BMW1 |
| 0x23 | DFBMW2 | DiagnosticFunction BMW1 |
| 0x24 | DFTEMIC1 | DiagnosticFunction TEMIC1 |
| 0x25 | DFTEMIC2 | DiagnosticFunction TEMIC1 |
| 0xFF | DEFAULT | default |

### IO

| WERT | MNEMONIC | TEXT |
| --- | --- | --- |
| 0x80 | ECUIDT | ECUIdentificationDataTable |
| 0x86 | CUIFDT | currentUIFDataTable |
| 0x87 | PECUHN | physicalECUHardwareNumber |
| 0x89 | SSECUSEN | systemSupplierECUSerialNumber |
| 0x90 | VIN | VIN (Vehicle Identification Number) |
| 0x91 | VMECUHN | vehicleManufacturerHardwareNumber |
| 0x99 | PD | ProgrammingDate |
| 0x9A | VMECUHVN | vehicleManufaturerECUHardwareVersionNumber |
| 0x9B | VMCI | vehicleManufacturerCodingIndex |
| 0x9C | VMDI | vehicleManufacturerDiagnosticIndex |

### RLI_CAN

| TEXT | GROESSE | FAKTOR | OFFSET | EINHEIT |
| --- | --- | --- | --- | --- |
| Checksumme_Anforderung_Winkel_FFP | 1 | 1 | 0 | - |
| Alive_Anforderung_Winkel_FFP | 1 | 1 | 0 | - |
| Winkel_Soll_FFP | 2 | 0.025 | 0 | % |
| Kraft_Soll_FFP_Maximal | 1 | 0.4 | 0 | % |
| Kraft_Soll_FFP_Minimal | 1 | 0.4 | 0 | % |
| Frequenz_Jitter_FFP | 1 | 1 | 0 | - |
| Typ_Jitter_FFP | 1 | 1 | 0 | - |
| Amplitude_Jitter_FFP | 1 | 1 | 0 | - |
| Anforderung_Fehler_Speicher_FFP | 1 | 1 | 0 | - |
| Steifigkeit_FFP | 1 | 0.4 | 0 | % |
| Klemme 15 | 1 | 1 | 0 | - |
| Aussentemperatur | 1 | 0.5 | -40 | grad |
| Relativzeit | 4 | 1 | 0 | s |
| Kilometerstand | 3 | 1 | 0 | km |

### RLI_MESSWERTE

| TEXT | GROESSE | FAKTOR | OFFSET | EINHEIT |
| --- | --- | --- | --- | --- |
| Batteriespannung | 2 | 0.001953125 | 0 | Volt |
| Motorwinkel | 2 | 0.02441406 | 0 | % |
| Motortemperatur | 2 | 0.0078125 | 0 | Grad Celsius |
| Motorstrom | 2 | 0.0002441406 | 0 | % |

### RLI_ROHWERTE

| TEXT | GROESSE | FAKTOR | OFFSET | EINHEIT |
| --- | --- | --- | --- | --- |
| AD_UBATT | 2 | 0.0002441406 | 0 | Volt |
| AD_I_MOTOR_PLUS | 2 | 0.0002441406 | 0 | Volt |
| AD_I_MOTOR_MINUS | 2 | 0.0002441406 | 0 | Volt |
| AD_C_TEMP | 2 | 0.0002441406 | 0 | Volt |
| AD_C_HALL | 2 | 0.0002441406 | 0 | Volt |
| AD_DIAG_PLUS | 2 | 0.0002441406 | 0 | Volt |
| AD_DIAG_MINUS | 2 | 0.0002441406 | 0 | Volt |
| Weckleitung | 1 | 1 | 0 | - |

### FARTTEXTEIND

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| 0x62EC | - | - | Spannung Temperatursensor zu niedrig(U<0,3V) | Spannung Temperatursensor zu hoch (U>2,4V) |
| 0x62ED | unplausibles Signal/Wert | - | Spannung Motorhallsensor zu niedrig(U<0,2V) | Spannung Motorhallsensor zu hoch (U>4,8V) |
| 0x62EE | unplausibles Signal/Wert | - | Signal bzw. Wert unterhalb Schwelle | Signal bzw. Wert oberhalb Schwelle |
| 0x62EF | unplausibles Signal/Wert | - | - | - |
| 0x62F0 | Status | - | Jitter | Kraft |
| 0x62F1 | - | - | Unterspannung | Überspannung |
| 0x62F2 | unplausibles Signal/Wert | - | - | - |
| 0x62F3 | LDM Fehler | - | - | - |
| 0x62F4 | unplausibles Signal/Wert | - | - | - |
| 0x62F5 | - | - | Polplattentemperatur unter Schwellwert | Polplattentemperatur steigt ueber 100 grad |
| 0xD047 | - | Bus off | - | - |
| 0xD054 | Fehler Checksumme | Timeout | Fehler Alive Zaehler | - |
| 0xD055 | - | Timeout | - | - |
| 0xD056 | Fehler Checksumme | Timeout | Fehler Alive Zaehler | - |
| 0xD058 | - | Timeout | - | - |
| 0x62F7 | Spannung Nebenstromrichtung zu niedrig | Spannung Nebenstromrichtung zu hoch | Spannung Hauptstromrichtung zu niedrig | Spannung Hauptstromrichtung zu hoch |
| 0x62F8 | - | - | Regelanforderung teilweise umgesetzt | Regelanforderung nicht umgesetzt |
| 0x62F9 | - | - | Hallsensor, Drift zur oberen Spannungsschwelle | Hallsensor, Drift zur unteren Spannungsschwelle |

### VAR_UMW

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x07 | 0x08 | 0x09 |
