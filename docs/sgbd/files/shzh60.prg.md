# shzh60.prg

## General

|  |  |
| --- | --- |
| File | shzh60.prg |
| Type | PRG |
| Jobs | 59 |
| Tables | 13 |
| Origin | BMW EE-54 Ralph Ostermeier |
| Revision | 0.19 |
| Author | Webasto Thermosysteme EET-2 Markus Hanke |
| ECU Comment | SGBD fuer Steuergeraet Stand-/Zuheizer E60 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Steuergeraet Stand-/Zuheizer E60 |  |  |
| ORIGIN | string | BMW EE-54 Ralph Ostermeier |  |  |
| REVISION | string | 0.19 |  |  |
| AUTHOR | string | Webasto Thermosysteme EET-2 Markus Hanke |  |  |
| COMMENT | string | SGBD fuer Steuergeraet Stand-/Zuheizer E60 |  |  |
| PACKAGE | string | 1.14 |  |  |
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
| COD_AE_INDEX | string | Aenderungsindex max. 2-stellig ASCII 'a', 'b', .., 'y', 'z', 'aa', 'ab', .., 'zy', 'zz' |

### C_AEI_AUFTRAG

Aenderungsindex der Codierdaten schreiben und ruecklesen Standard Codierjob KWP2000: $2E   WriteDataByCommonIdentifier $3FFF ChangeIndexOfCodingData KWP2000: $22   ReadDataByCommonIdentifier $3FFF ChangeIndexOfCodingData Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| COD_AE_INDEX | string | Aenderungsindex max. 2-stellig ASCII 'a', 'b', .., 'y', 'z', 'aa', 'ab', .., 'zy', 'zz' |

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

Auslesen der physikalischen Hardwarenummer KWP2000: $1A ReadECUIdentification $87 physicalECUHardwareNumber (PECUHN) Modus  : Default

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

Seuergeraete reset ausloesen KWP2000: $11 ECUReset $01 PowerOn Modus  : Default  Nach dem Job muss die Steuergeraete-Resetzeit abgewartet werden. Danach ist das Steuergeraet wieder diagnosefaehig  siehe Job FLASH_ZEITEN_LESEN Result FLASH_RESETZEIT

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

### EINSTELLWERTE_LESEN

_No description._

_No arguments._

### EINSTELLWERTE_SPEICHERN

_No description._

| Name | Type | Description |
| --- | --- | --- |
| UNTERSPANNUNGSABSCHALTGRENZE | string | Einstellwert der Unterspannungsabschaltgrenze in 68,5mV Schritten 0x94 < U < 0xB0 |
| HEIZZEIT | string | Einstellwert der Heizzeit in 10 Min. Schritten Max. Wert ist 60Min. |

### BETRIEBSDATEN_LESEN

_No description._

_No arguments._

### STARTZAEHLER_SNR_LESEN

_No description._

_No arguments._

### MESSWERTE_LESEN

_No description._

_No arguments._

### ERGEBNIS_HEIZUNGSTESTLAUF_LESEN

_No description._

_No arguments._

### STEUERN_STANDHEIZER

Ansteuern des Standheizers Der Standheizer kann ein- bzw. ausgeschaltet werden.

| Name | Type | Description |
| --- | --- | --- |
| CTRL | string | Werte gemaess bmw_digi.b2s |

### STEUERN_ZUHEIZER

Ansteuern des Zuheizers Der Zuheizer kann ein- bzw. ausgeschaltet werden. Alle CAN-Telegramme werden waehrend des Testlaufes ignoriert ! Der Heizer wird automatisch nach 3 Minuten abgeschaltet.

| Name | Type | Description |
| --- | --- | --- |
| CTRL | string | Werte gemaess bmw_digi.b2s |

### LEITUNGSBEFUELLUNG

Zum Befuellen der Kraftstoffleitung

| Name | Type | Description |
| --- | --- | --- |
| ANSTEUERZEIT | int | Zeit    =  30 - 120 s default =  70 s |

### CO2_EINSTELLUNG

Einstellung CO2-Wert Brenner Falsche Einstellung fuehrt zu Brennabbruch !!! Wert nicht veraendern !!!

| Name | Type | Description |
| --- | --- | --- |
| KORREKTURFAKTOR | int | Korrekturfaktor    =  0xA0 - 0xCF default =  0xA0 |

### HGV_ENTRIEGELN

Heizgeraeteverriegelung aufheben Zum Aufheben einer Ueberhitzungs- bzw. Stoerverriegelung

_No arguments._

### KOMPONENTENTEST

Test der angeschlossenen Komponennten

| Name | Type | Description |
| --- | --- | --- |
| TESTDEVICE | int | OKAY, wenn fehlerfrei |

### STATUS_IO

Status lesen

_No arguments._

### KODIERUNG_LESEN_SCHREIBEN

Kodierungsbyte lesen oder schreiben

| Name | Type | Description |
| --- | --- | --- |
| CODEBYTE_1 | int | OKAY, wenn fehlerfrei |
| CODEBYTE_2 | int | OKAY, wenn fehlerfrei |

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
| ?A0? | ERROR_DIAG_PROT |
| ?A1? | ERROR_SG_ADRESSE |
| ?A2? | ERROR_SG_MAXANZAHL_AIF |
| ?A3? | ERROR_SG_GROESSE_AIF |
| ?A4? | ERROR_SG_ENDEKENNUNG_AIF |
| ?A5? | ERROR_SG_AUTHENTISIERUNG |
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

### ZUSTANDTEXTE

| NR_DIESEL | NR_BENZIN | ABKUERZUNG | TEXT |
| --- | --- | --- | --- |
| 0x01 | 0x01 | ABR11 | Ausbrennen 11 |
| 0x02 | 0x02 | ABR12 | Ausbrennen 12 |
| 0x03 | 0x03 | ABR13 | Ausbrennen 13 |
| 0x04 | ---- | ABR14 | Ausbrennen 14 |
| 0x05 | 0x05 | ABR15 | Ausbrennen 15 |
| 0x06 | ---- | ABR16 | Ausbrennen 16 |
| 0x07 | 0x07 | ABR22 | Ausbrennen 22 |
| 0x08 | 0x08 | ABR23 | Ausbrennen 23 |
| 0x09 | 0x09 | ABR24 | Ausbrennen 24 |
| 0x0A | 0x0A | ABR25 | Ausbrennen 25 |
| 0x0B | ---- | ABR31 | Ausbrennen 31 |
| 0x0C | 0x0B | ABR32 | Ausbrennen 32 |
| 0x0D | ---- | ABR41 | Ausbrennen 41 |
| 0x0E | ---- | ABR42 | Ausbrennen 42 |
| 0x0F | ---- | ABR51 | Ausbrennen 51 |
| 0x10 | ---- | ABR61 | Ausbrennen 61 |
| 0x11 | ---- | ABR71 | Ausbrennen 71 |
| 0x12 | 0x12 | ABSCH | Abschaltung |
| 0x13 | 0x13 | AUS | Auszustand |
| 0x14 | 0x14 | BBTL | Brennbetrieb TL |
| 0x15 | 0x15 | BBVL | Brennbetrieb VL |
| 0x16 | 0x16 | BFOE11 | Brennstoffoerdern 11 |
| 0x17 | ---- | BFOE12 | Brennstoffoerdern 12 |
| 0x18 | ---- | BFOE13 | Brennstoffoerdern 13 |
| 0x19 | ---- | BFOE14 | Brennstoffoerdern 14 |
| 0x1A | ---- | BFOE15 | Brennstoffoerdern 15 |
| ---- | 0x1B | BFOE21 | Brennstoffoerdern 21 |
| 0x1C | ---- | BFOE25 | Brennstoffoerdern 25 |
| 0x1D | 0x1D | BFOE33 | Brennstoffoerdern 33 |
| 0x1E | ---- | BFOE34 | Brennstoffoerdern 34 |
| 0x1F | 0x1F | BFOE42 | Brennstoffoerdern 42 |
| 0x20 | 0x20 | FLA1 | Flammwaechterabfrage 1 |
| 0x21 | 0x21 | FLA2 | Flammwaechterabfrage 2 |
| 0x22 | 0x22 | FLA3 | Flammwaechterabfrage 3 |
| 0x23 | 0x23 | FLA4 | Flammwaechterabfrage 4 |
| 0x24 | 0x24 | FLM1 | Flammwaechtermessphase 1 |
| 0x25 | 0x25 | FLM2 | Flammwaechtermessphase 2 |
| 0x26 | 0x26 | FLM3 | Flammwaechtermessphase 3 |
| ---- | 0x27 | FLM4 | Flammwaechtermessphase 4 |
| 0x28 | ---- | GBU | Gebleaseunterbrechung |
| 0x29 | 0x29 | GSR1 | Gluehstift Rampe 1 |
| 0x2A | 0x2A | GSR2 | Gluehstift Rampe 2 |
| 0x2B | 0x2B | GSR3 | Gluehstift Rampe 3 |
| ---- | 0x2C | GSR4 | Gluehstift Rampe 4 |
| 0x2D | 0x2D | HGA | Verriegelungsabspeicherung |
| 0x2E | 0x2E | HGE | Heizungsentriegelung |
| 0x2F | 0x2F | HGV | Heizungsverriegelung |
| 0x30 | 0x30 | KUEG1 | Kuehlung 1 |
| 0x31 | 0x31 | KUEG2 | Kuehlung 2 |
| 0x32 | 0x32 | KUEG3 | Kuehlung 3 |
| 0x33 | 0x33 | KUEG4 | Kuehlung 4 |
| 0x34 | 0x34 | LTV1 | Lastwechsel TL-VL1 |
| 0x35 | 0x35 | LTV2 | Lastwechsel TL-VL2 |
| 0x38 | 0x38 | LUE | Lueften |
| 0x36 | 0x36 | LVT1 | Lastwechsel VL-TL1 |
| 0x37 | 0x37 | LVT2 | Lastwechsel VL-TL2 |
| 0x50 | 0x50 | LOS | Brennermotor Losreissimpuls |
| 0x39 | ---- | RP1 | Regelpause 1 |
| 0x3A | 0x3A | RP2 | Regelpause 2 |
| 0x3B | 0x3B | RUA | Ruhezeitabspeicherung |
| 0x3C | 0x3C | STV | Stoerverriegelung |
| 0x3D | ---- | STZ | Stabilisierungszeit |
| 0x3E | 0x3E | VFOE1 | Vorfoerdern 1 |
| 0x3F | ---- | VFOE2 | Vorfoerdern 2 |
| 0x53 | ---- | VFOE3 | Vorfoerdern 3 |
| 0x54 | ---- | VFOE4 | Vorfoerdern 4 |
| 0x55 | ---- | VFOE5 | Vorfoerdern 5 |
| 0x40 | 0x40 | VGL1 | Vorgluehen 1 |
| 0x46 | 0x46 | VGL10 | Vorgluehen 10 |
| 0x47 | 0x47 | VGL11 | Vorgluehen 11 |
| 0x48 | ---- | VGL21 | Vorgluehen 21 |
| ---- | 0x41 | VGL2 | Vorgluehen 2 |
| ---- | 0x42 | VGL3 | Vorgluehen 3 |
| 0x43 | 0x43 | VGL4 | Vorgluehen 4 |
| 0x44 | 0x44 | VGL5 | Vorgluehen 5 |
| 0x45 | ---- | VGL6 | Vorgluehen 6 |
| 0x30 | 0x77 | WPE | Wasserpumpe EIN |
| 0x?? | 0x?? | ??? | unbekannter Zustand |

### WASSERTEMPERATUR

| WERT | DEZIMALWERT | TEMPERATUR |
| --- | --- | --- |
| 0x00 |   0 | 150.0 |
| 0x01 |   1 | 150.0 |
| 0x02 |   2 | 150.0 |
| 0x03 |   3 | 150.0 |
| 0x04 |   4 | 150.0 |
| 0x05 |   5 | 150.0 |
| 0x06 |   6 | 150.0 |
| 0x07 |   7 | 150.0 |
| 0x08 |   8 | 150.0 |
| 0x09 |   9 | 150.0 |
| 0x0A |  10 | 150.0 |
| 0x0B |  11 | 150.0 |
| 0x0C |  12 | 150.0 |
| 0x0D |  13 | 150.0 |
| 0x0E |  14 | 150.0 |
| 0x0F |  15 | 145.0 |
| 0x10 |  16 | 142.5 |
| 0x11 |  17 | 140.0 |
| 0x12 |  18 | 137.5 |
| 0x13 |  19 | 135.0 |
| 0x14 |  20 | 132.5 |
| 0x15 |  21 | 130.0 |
| 0x16 |  22 | 128.3 |
| 0x17 |  23 | 126.7 |
| 0x18 |  24 | 125.0 |
| 0x19 |  25 | 123.3 |
| 0x1A |  26 | 121.7 |
| 0x1B |  27 | 120.0 |
| 0x1C |  28 | 118.3 |
| 0x1D |  29 | 116.7 |
| 0x1E |  30 | 115.0 |
| 0x1F |  31 | 113.8 |
| 0x20 |  32 | 112.5 |
| 0x21 |  33 | 111.3 |
| 0x22 |  34 | 110.0 |
| 0x23 |  35 | 108.8 |
| 0x24 |  36 | 107.5 |
| 0x25 |  37 | 106.3 |
| 0x26 |  38 | 105.0 |
| 0x27 |  39 | 103.8 |
| 0x28 |  40 | 102.5 |
| 0x29 |  41 | 101.3 |
| 0x2A |  42 | 100.0 |
| 0x2B |  43 |  99.0 |
| 0x2C |  44 |  98.0 |
| 0x2D |  45 |  97.0 |
| 0x2E |  46 |  96.0 |
| 0x2F |  47 |  95.0 |
| 0x30 |  48 |  94.2 |
| 0x31 |  49 |  93.3 |
| 0x32 |  50 |  92.5 |
| 0x33 |  51 |  91.7 |
| 0x34 |  52 |  90.8 |
| 0x35 |  53 |  90.0 |
| 0x36 |  54 |  89.3 |
| 0x37 |  55 |  88.6 |
| 0x38 |  56 |  87.9 |
| 0x39 |  57 |  87.1 |
| 0x3A |  58 |  86.4 |
| 0x3B |  59 |  85.7 |
| 0x3C |  60 |  85.0 |
| 0x3D |  61 |  84.3 |
| 0x3E |  62 |  83.6 |
| 0x3F |  63 |  82.9 |
| 0x40 |  64 |  82.1 |
| 0x41 |  65 |  81.4 |
| 0x42 |  66 |  80.7 |
| 0x43 |  67 |  80.0 |
| 0x44 |  68 |  79.4 |
| 0x45 |  69 |  78.8 |
| 0x46 |  70 |  78.1 |
| 0x47 |  71 |  77.5 |
| 0x48 |  72 |  76.9 |
| 0x49 |  73 |  76.3 |
| 0x4A |  74 |  75.6 |
| 0x4B |  75 |  75.0 |
| 0x4C |  76 |  74.4 |
| 0x4D |  77 |  73.8 |
| 0x4E |  78 |  73.1 |
| 0x4F |  79 |  72.5 |
| 0x50 |  80 |  71.9 |
| 0x51 |  81 |  71.3 |
| 0x52 |  82 |  70.6 |
| 0x53 |  83 |  70.0 |
| 0x54 |  84 |  69.4 |
| 0x55 |  85 |  68.9 |
| 0x56 |  86 |  68.3 |
| 0x57 |  87 |  67.8 |
| 0x58 |  88 |  67.2 |
| 0x59 |  89 |  66.7 |
| 0x5A |  90 |  66.1 |
| 0x5B |  91 |  65.6 |
| 0x5C |  92 |  65.0 |
| 0x5D |  93 |  64.5 |
| 0x5E |  94 |  64.0 |
| 0x5F |  95 |  63.5 |
| 0x60 |  96 |  63.0 |
| 0x61 |  97 |  62.5 |
| 0x62 |  98 |  62.0 |
| 0x63 |  99 |  61.5 |
| 0x64 | 100 |  61.0 |
| 0x65 | 101 |  60.5 |
| 0x66 | 102 |  60.0 |
| 0x67 | 103 |  59.5 |
| 0x68 | 104 |  59.0 |
| 0x69 | 105 |  58.5 |
| 0x6A | 106 |  58.0 |
| 0x6B | 107 |  57.5 |
| 0x6C | 108 |  57.0 |
| 0x6D | 109 |  56.5 |
| 0x6E | 110 |  56.0 |
| 0x6F | 111 |  55.5 |
| 0x70 | 112 |  55.0 |
| 0x71 | 113 |  54.5 |
| 0x72 | 114 |  54.1 |
| 0x73 | 115 |  53.6 |
| 0x74 | 116 |  53.2 |
| 0x75 | 117 |  52.7 |
| 0x76 | 118 |  52.3 |
| 0x77 | 119 |  51.8 |
| 0x78 | 120 |  51.4 |
| 0x79 | 121 |  50.9 |
| 0x7A | 122 |  50.5 |
| 0x7B | 123 |  50.0 |
| 0x7C | 124 |  49.5 |
| 0x7D | 125 |  49.1 |
| 0x7E | 126 |  48.6 |
| 0x7F | 127 |  48.2 |
| 0x80 | 128 |  47.7 |
| 0x81 | 129 |  47.3 |
| 0x82 | 130 |  46.8 |
| 0x83 | 131 |  46.4 |
| 0x84 | 132 |  45.9 |
| 0x85 | 133 |  45.5 |
| 0x86 | 134 |  45.0 |
| 0x87 | 135 |  44.5 |
| 0x88 | 136 |  44.1 |
| 0x89 | 137 |  43.6 |
| 0x8A | 138 |  43.2 |
| 0x8B | 139 |  42.7 |
| 0x8C | 140 |  42.3 |
| 0x8D | 141 |  41.8 |
| 0x8E | 142 |  41.4 |
| 0x8F | 143 |  40.9 |
| 0x90 | 144 |  40.5 |
| 0x91 | 145 |  40.0 |
| 0x92 | 146 |  39.5 |
| 0x93 | 147 |  39.1 |
| 0x94 | 148 |  38.6 |
| 0x95 | 149 |  38.2 |
| 0x96 | 150 |  37.7 |
| 0x97 | 151 |  37.3 |
| 0x98 | 152 |  36.8 |
| 0x99 | 153 |  36.4 |
| 0x9A | 154 |  35.9 |
| 0x9B | 155 |  35.5 |
| 0x9C | 156 |  35.0 |
| 0x9D | 157 |  34.5 |
| 0x9E | 158 |  34.1 |
| 0x9F | 159 |  33.6 |
| 0xA0 | 160 |  33.2 |
| 0xA1 | 161 |  32.7 |
| 0xA2 | 162 |  32.3 |
| 0xA3 | 163 |  31.8 |
| 0xA4 | 164 |  31.4 |
| 0xA5 | 165 |  30.9 |
| 0xA6 | 166 |  30.5 |
| 0xA7 | 167 |  30.0 |
| 0xA8 | 168 |  29.5 |
| 0xA9 | 169 |  29.0 |
| 0xAA | 170 |  28.5 |
| 0xAB | 171 |  28.0 |
| 0xAC | 172 |  27.5 |
| 0xAD | 173 |  27.0 |
| 0xAE | 174 |  26.5 |
| 0xAF | 175 |  26.0 |
| 0xB0 | 176 |  25.5 |
| 0xB1 | 177 |  25.0 |
| 0xB2 | 178 |  24.5 |
| 0xB3 | 179 |  24.0 |
| 0xB4 | 180 |  23.5 |
| 0xB5 | 181 |  23.0 |
| 0xB6 | 182 |  22.5 |
| 0xB7 | 183 |  22.0 |
| 0xB8 | 184 |  21.5 |
| 0xB9 | 185 |  21.0 |
| 0xBA | 186 |  20.5 |
| 0xBB | 187 |  20.0 |
| 0xBC | 188 |  19.4 |
| 0xBD | 189 |  18.9 |
| 0xBE | 190 |  18.3 |
| 0xBF | 191 |  17.8 |
| 0xC0 | 192 |  17.2 |
| 0xC1 | 193 |  16.7 |
| 0xC2 | 194 |  16.1 |
| 0xC3 | 195 |  15.6 |
| 0xC4 | 196 |  15.0 |
| 0xC5 | 197 |  14.4 |
| 0xC6 | 198 |  13.8 |
| 0xC7 | 199 |  13.1 |
| 0xC8 | 200 |  12.5 |
| 0xC9 | 201 |  11.9 |
| 0xCA | 202 |  11.3 |
| 0xCB | 203 |  10.6 |
| 0xCC | 204 |  10.0 |
| 0xCD | 205 |   9.3 |
| 0xCE | 206 |   8.6 |
| 0xCF | 207 |   7.9 |
| 0xD0 | 208 |   7.1 |
| 0xD1 | 209 |   6.4 |
| 0xD2 | 210 |   5.7 |
| 0xD3 | 211 |   5.0 |
| 0xD4 | 212 |   4.2 |
| 0xD5 | 213 |   3.3 |
| 0xD6 | 214 |   2.5 |
| 0xD7 | 215 |   1.7 |
| 0xD8 | 216 |   0.8 |
| 0xD9 | 217 |   0.0 |
| 0xDA | 218 |  -1.0 |
| 0xDB | 219 |  -2.0 |
| 0xDC | 220 |  -3.0 |
| 0xDD | 221 |  -4.0 |
| 0xDE | 222 |  -5.0 |
| 0xDF | 223 |  -6.0 |
| 0xE0 | 224 |  -7.0 |
| 0xE1 | 225 |  -8.0 |
| 0xE2 | 226 |  -9.0 |
| 0xE3 | 227 | -10.0 |
| 0xE4 | 228 | -11.7 |
| 0xE5 | 229 | -13.3 |
| 0xE6 | 230 | -15.0 |
| 0xE7 | 231 | -16.3 |
| 0xE8 | 232 | -17.5 |
| 0xE9 | 233 | -18.8 |
| 0xEA | 234 | -20.0 |
| 0xEB | 235 | -22.5 |
| 0xEC | 236 | -25.0 |
| 0xED | 237 | -27.5 |
| 0xEE | 238 | -30.0 |
| 0xEF | 239 | -32.5 |
| 0xF0 | 240 | -35.0 |
| 0xF1 | 241 | -40.0 |
| 0xF2 | 242 | -40.0 |
| 0xF3 | 243 | -40.0 |
| 0xF4 | 244 | -40.0 |
| 0xF5 | 245 | -40.0 |
| 0xF6 | 246 | -40.0 |
| 0xF7 | 247 | -40.0 |
| 0xF8 | 248 | -40.0 |
| 0xF9 | 249 | -40.0 |
| 0xFA | 250 | -40.0 |
| 0xFB | 251 | -40.0 |
| 0xFC | 252 | -40.0 |
| 0xFD | 253 | -40.0 |
| 0xFE | 254 | -40.0 |
| 0xFF | 255 | -40.0 |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x9B28 | Steuergeraet fehlerhaft |
| 0x9B29 | Kein Start |
| 0x9B2A | Flammabbruch |
| 0x9B2B | Ueber-/Unterspannung |
| 0x9B2C | Fremdlicht |
| 0x9B2D | Ueberhitzung |
| 0x9B2E | Heizgeraeteverriegelung |
| 0x9B2F | Dosierpumpenkreis fehlerhaft |
| 0x9B30 | Brennluftgeblaesekreis fehlerhaft |
| 0x9B31 | Gluehelement / Brennraumsensor fehlerhaft |
| 0x9B32 | Wasserpumpenkreis fehlerhaft |
| 0x9B33 | Absperrventilkreis fehlerhaft |
| 0x9B34 | Kraftstoffcodierung fehlerhaft |
| 0x9B35 | Plausibilitaetsfehler |
| 0x9B36 | Betriebsmodus fehlerhaft |
| 0x9B37 | WBus Fehler |
| 0x9B38 | Wassertemperatursensor Fehler |
| 0x9B39 | Brennluftgeblaeseschutz |
| 0x9B3A | Brennraumsensor Fehler |
| 0x9B3B | Unterspannungsabschaltung |
| 0x9B3C | Magnetventiltest Fehler |
| 0x9B3D | Kein Ausstattungscodesignal |
| 0x9B3E | Brennstoffsensor Fehler |
| 0xE784 | CAN Low Leitungsfehler |
| 0xE787 | Kommunikationsfehler |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_HFK | nein |
| F_LZ | nein |
| F_UWB_ERW | nein |

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
