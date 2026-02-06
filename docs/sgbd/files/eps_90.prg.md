# eps_90.prg

## General

|  |  |
| --- | --- |
| File | eps_90.prg |
| Type | PRG |
| Jobs | 58 |
| Tables | 44 |
| Origin | BMW EF-440 Jungmann, Michael |
| Revision | 6.950 |
| Author | ZFLS EEPA Fritz, ZFLS EZPB Buehler, ZFPLZ ED Janacek |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | EPS_90 |  |  |
| ORIGIN | string | BMW EF-440 Jungmann, Michael |  |  |
| REVISION | string | 6.950 |  |  |
| AUTHOR | string | ZFLS EEPA Fritz, ZFLS EZPB Buehler, ZFPLZ ED Janacek |  |  |
| COMMENT | string |  |  |  |
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

### IS_LESEN

Infospeicher lesen (alle Info-Meldungen / Ort und Art) KWP2000: $22 ReadDataByCommonIdentifier $2000 dtcShadowMemory

_No arguments._

### IS_LESEN_DETAIL

Infospeicher lesen (alle Info-Meldungen / Ort und Art) KWP2000: $22 ReadDataByCommonIdentifier $2001 - $20FF dtcShadowMemoryEntry Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Infocode Wenn dieser Parameter angegeben wird, wird die Position automatisch ermittelt. Es darf dann nicht argument F_POS angegeben werden |
| F_POS | int | gewaehlter Eintrag Wenn dieser Parameter angegeben wird, wird die Position benutzt. Wertebereich 1 - 255 Es darf dann nicht argument F_CODE angegeben werden |

### HS_LESEN

Historyspeicher lesen (alle History-Meldungen / Ort und Art) KWP2000: $22 ReadDataByCommonIdentifier $2100 HistoryMemory Modus  : Default

_No arguments._

### HS_LESEN_DETAIL

Historypeicher lesen (alle History-Meldungen / Ort und Art) KWP2000: $22 ReadDataByCommonIdentifier $2101 - $21FF HistoryMemoryEntry Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Historycode Wenn dieser Parameter angegeben wird, wird die Position automatisch ermittelt. Es darf dann nicht argument F_POS angegeben werden |
| F_POS | int | gewaehlter Eintrag Wenn dieser Parameter angegeben wird, wird die Position benutzt. Wertebereich 1 - 255 Es darf dann nicht argument F_CODE angegeben werden |

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

### FLASH_ZEITEN_LESEN

Auslesen der Flash Loeschzeit, Signaturtestzeit, Authentisierberechnungszeit und Resetzeit KWP2000: $22   ReadDataByCommonIdentifier $2501 Zeiten Modus  : Default

_No arguments._

### FLASH_BLOCKLAENGE_LESEN

Auslesen des maximalen Blocklaenge beim Flashen KWP2000: $22   ReadDataByCommonIdentifier $2506 MaximaleBlockLaenge Modus  : Default

_No arguments._

### FLASH_PROGRAMMIER_STATUS_LESEN

Programmierstatus des SG lesen KWP2000: $31 StartRoutineByLocalIdentifier $0A CheckProgrammingStatus Modus  : Default

_No arguments._

### STEUERGERAETE_RESET

Steuergeraete reset ausloesen KWP2000: $11 ECUReset $01 PowerOn Modus  : Default  Nach dem Job muss die Steuergeraete-Resetzeit abgewartet werden. Danach ist das Steuergeraet wieder diagnosefaehig  siehe Job FLASH_ZEITEN_LESEN Result FLASH_RESETZEIT

_No arguments._

### AIF_LESEN

Auslesen des Anwender Informations Feldes Standard Flashjob KWP 2000: $23 ReadMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| AIF_NUMMER | int | ==0 : aktuelles AIF > 0 : Nummer des zu lesenden AIF default = 0 : aktuelles AIF |

### C_CHECKSUMME

Checksumme generieren und in BINAER_BUFFER schreiben Optionaler Codierjob

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : Codierdaten Byte 21+Anzahl Daten: ETX (0x03) |

### EEPROM_LESEN

EEPROM Daten lesen ueber COTOOL(Loehnert) KWP2000: $23 readMemoryByAddress,(RMBA) MemoryTypeIdentifier,ROMX = 2 gueltige NEC Speicher Adressen: 0x0000-0x0FFF NEC Speichergroesse 4096 Byte maximale DPRAM Uebertragungsbreite 128 Byte maximale Aufrufbreite fuer ZFLS Fkt. 16 Byte Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Headerdaten |

### EEPROM_SCHREIBEN

EEPROM Daten schreiben ueber COTOOL(Loehnert) KWP2000: $3D writeMemoryByAddress,(RMBA) MemoryTypeIdentifier,ROMX = 2 gueltige Speicher Adressen: 0x0000-0x0FFF Speichergroesse 4096 Byte maximale DPRAM Uebertragungsbreite 128 Byte maximale Aufrufbreite fuer ZFLS Fkt. 16 Byte Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Headerdaten |

### LERNWERT_RUECKSETZEN

Lernwerte zuruecksetzen Standard job KWP2000: $2E WriteDataByCommonIdentifier $0009 Lernwerte rücksetzen Modus  : Default

_No arguments._

### LW_OFFSET_LESEN

Lenkwinkeloffset lesen Standard job KWP2000: $22 ReadDataByCommonIdentifier $0001 Lenkwinkeloffset Modus  : Default

_No arguments._

### LW_OFFSET_RUECKSETZEN

Lenkwinkeloffset zuruecksetzen Standard job KWP2000: $2E WriteDataByCommonIdentifier $0001 Lenkwinkeloffset Modus  : Default

_No arguments._

### STATUS_INPUT_SIGNALE

Werte und Stati der EPS-Eingangssignale

_No arguments._

### STATUS_OUTPUT_SIGNALE

Werte und Stati der EPS-Ausgangssignale

_No arguments._

### STATUS_EPS

Interne Werte und Zustände der EPS

_No arguments._

### STATUS_LENKRADWINKEL

Lenkradwinkelwerte und -stati (intern/extern)

_No arguments._

### STATUS_STROEME

Werte von Motor-, Grob- und Feinströmen

_No arguments._

### STATUS_MOMENTENSENSOR

Lenkradmoment und Momentensensor

_No arguments._

### STATUS_ROTORLAGESENSOR

Rotorlage und Rotordrehzahl

_No arguments._

### SW_ENDANSCHLAG_LERNWERTE_SPEICHERN

Die eingelernten SW-Endanschlagswerte speichern KWP2000: $31 StartRoutineByLocalIdentifier $FD DiagnoseMode $08 SetEndStop Modus       : Default Vorbedingungen: "SW-Endanschlag Einlernen abgeschlossen" "Fahrzeug steht"

_No arguments._

### SW_VERSION_ZFLS

ZFLS Softwareversion lesen Standard job KWP2000: $1A ReadECUIdentification $95 systemSupplierECUSoftwareVersionNumber Modus  : Default

_No arguments._

### SG_SPEZIFISCHE_AKTION

Sonderfunktionen der EPS Standard job KWP2000: $31 StartRoutineByLocalId $20-$F9 ProjectSpecific Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| AKTION_NAME | string | Bezeichnung der gewünschten Aktion |

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

### HARTTEXTE

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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x63ed | Lenkmomentsensor (FC 01 / FC 02) |
| 0x63ee | Lenkmomentsensor (FC 01 / FC 02) |
| 0x63ef | Rotordrehzahlgeber nicht eingelernt / initialisiert (FC 05) |
| 0xd515 | Botschaft vom PT-CAN (Lenkradwinkel oben, ID=0c4h) (FC 06) |
| 0x63f0 | Lenkradwinkel Plausibilisierung 1 (FC 07) |
| 0x63f1 | Lenkradwinkel Plausibilisierung 2 (FC 08) |
| 0xd517 | Botschaft vom PT-CAN (Geschwindigkeit, ID=1a0h) (FC 09) |
| 0xd514 | Botschaft vom PT-CAN (Motordaten, ID=1d0h) (FC 10) |
| 0xd516 | Botschaft vom PT-CAN (Klemmenstatus, ID=130h) (FC 11) |
| 0x63f2 | Klemmenstatus Plausibilisierung (FC 12) |
| 0xd507 | PT-CAN Kommunikationsfehler (FC 13) |
| 0x63ec | Hardwarefehler Steuergerät |
| 0x63f3 | Abschaltung aufgrund Versorgungsspannung (FC 37) |
| 0x63f4 | Reduzierung aufgrund Übertemperatur (FC 38) |
| 0x63f5 | Reduzierung aufgrund Versorgungsspannung (FC 39) |
| 0x63f6 | Reduzierung aufgrund Überlastung (FC 40) |
| 0x63f9 | Reduzierung aufgrund Rattererkennung (FC 46) |
| 0x63f8 | SW-Endanschlag nicht eingelernt (FC 49) |
| 0x63FA | Reibung in Lenkgetriebe (FC 52) |
| 0x63FB | Bordnetzwiderstand (FC 53) |
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
| 0x63ec | StandardBlock | - | - | - |
| 0x63ed | StandardBlock | AmbCondBlock1 | ZusatzBlock | AmbCondBlock1 |
| 0x63ee | StandardBlock | AmbCondBlock2 | ZusatzBlock | AmbCondBlock2 |
| 0x63ef | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0xd515 | StandardBlock | AmbCondBlock8 | ZusatzBlock | AmbCondBlock8 |
| 0x63f0 | StandardBlock | AmbCondBlock8 | ZusatzBlock | AmbCondBlock8 |
| 0x63f1 | StandardBlock | AmbCondBlock8 | ZusatzBlock | AmbCondBlock8 |
| 0xd517 | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0xd514 | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0xd516 | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x63f2 | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0xd507 | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x63f3 | StandardBlock | AmbCondBlock6 | ZusatzBlock | AmbCondBlock6 |
| 0x63f4 | StandardBlock | AmbCondBlock6 | ZusatzBlock | AmbCondBlock6 |
| 0x63f5 | StandardBlock | AmbCondBlock6 | ZusatzBlock | AmbCondBlock6 |
| 0x63f6 | StandardBlock | AmbCondBlock6 | ZusatzBlock | AmbCondBlock6 |
| 0x63f9 | StandardBlock | AmbCondBlock6 | ZusatzBlock | AmbCondBlock6 |
| 0x63f8 | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x63FA | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x63FB | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| default | StandardBlock | - | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Radius des Rotorlagesignals | V | high | signed int | - | 1 | 204.6 | 0 |
| 0x02 | Sinuswert Rotorlage Main | V | high | unsigned int | - | 1 | 204.6 | 0 |
| 0x03 | Cosinuswert Rotorlage Main | V | high | unsigned int | - | 1 | 204.6 | 0 |
| 0x04 | Sinuswert Rotorlage Backup | V | high | unsigned int | - | 1 | 204.6 | 0 |
| 0x05 | Cosinuswert Rotorlage Backup | V | high | unsigned int | - | 1 | 204.6 | 0 |
| 0x06 | Status Lenkwinkelsensor | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x07 | Lwint Status | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x08 | nicht korrigierter Lenkwinkel | ° | high | signed int | - | 1 | 22.8571 | 0 |
| 0x09 | interner Lenkwinkel | ° | high | signed int | - | 1 | 22.8571 | 0 |
| 0x0a | Rotorlage / Polwinkel | ° | high | signed int | - | 1 | 17.8722 | 0 |
| 0x0b | Rotordrehzahl, gefiltert | 1/min | high | signed int | - | 1 | 1 | 0 |
| 0x0c | Klemme 30 (Batteriespannung) | V | high | unsigned int | - | 1 | 40.18 | 0 |
| 0x0d | Phasenspannung 1 | V | high | unsigned int | - | 1 | 40.18 | 0 |
| 0x0e | Phasenspannung 2 | V | high | unsigned int | - | 1 | 40.18 | 0 |
| 0x0f | Phasenspannung 3 | V | high | unsigned int | - | 1 | 40.18 | 0 |
| 0x10 | gefilterte Temperatur | °C | - | unsigned char | - | 1 | 1 | -70 |
| 0x11 | Temperatur DBC | °C | - | unsigned char | - | 1 | 1 | -70 |
| 0x12 | Temperatur LTTC | °C | - | unsigned char | - | 1 | 1 | -70 |
| 0x13 | berech. Strom 1 | A | high | signed int | - | 1 | 16 | 0 |
| 0x14 | berech. Strom 2 | A | high | signed int | - | 1 | 16 | 0 |
| 0x15 | Phasenstrom 1 grob, nicht korrigiert | A | high | signed int | - | 1 | 16 | 0 |
| 0x16 | Phasenstrom 2 grob, nicht korrigiert | A | high | signed int | - | 1 | 16 | 0 |
| 0x17 | Phasenstrom 3 grob, nicht korrigiert | A | high | signed int | - | 1 | 16 | 0 |
| 0x18 | Phasenstrom 1 fein, nicht korrigiert | A | high | signed int | - | 1 | 16 | 0 |
| 0x19 | Phasenstrom 2 fein, nicht korrigiert | A | high | signed int | - | 1 | 16 | 0 |
| 0x1a | Ansteuerspg. Sternpunktrelais HIGH Side Schalter | V | high | unsigned int | - | 1 | 40.18 | 0 |
| 0x1b | Systemstatus | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x1c | Zündung CAN | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x1d | Wake Up | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x1e | Typ Endstufentreiberfehler | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x1f | Sinuswert Lenkmomentsensor Main | - | high | signed int | - | 1 | 1 | 0 |
| 0x20 | Sinuswert Lenkmomentsensor Backup | - | high | signed int | - | 1 | 1 | 0 |
| 0x21 | Cosinuswert Lenkmomentsensor Main | - | high | signed int | - | 1 | 1 | 0 |
| 0x22 | Cosinuswert Lenkmomentsensor Backup | - | high | signed int | - | 1 | 1 | 0 |
| 0x23 | Radius Lenkmomentsensor Main | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x24 | Radius Lenkmomentsensor Backup | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x25 | Radius Lenkmomentsensor Main, gefiltert | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x26 | Radius Lenkmomentsensor Backup, gefiltert | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x27 | Motorsollmoment | Nm | high | signed int | - | 1 | 1024 | 0 |
| 0x28 | Lenkmoment | Nm | high | signed int | - | 1 | 68 | 0 |
| 0x29 | Handmoment Backupsensor: Sensornotlauf | Nm | high | signed int | - | 1 | 68 | 0 |
| 0x2a | Fehler ID Level 1 Vergleicherfehler | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x2b | Fehler ID Level 2 Vergleicherfehler | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x2c | Vergleicherwert 1 (pos. Wert) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x2d | Vergleicherwert 2 (neg. Wert) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x2e | Vergleicherwert obere Grenze | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x2f | Vergleicherwert untere Grenze | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x30 | Laufzeitfehler: Nummer fehlerhafte Task | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x31 | Aktivierungszeit der 1 ms Task | µs | high | unsigned int | - | 1 | 1 | 0 |
| 0x32 | Aktivierungszeit der 10 ms Task | µs | high | unsigned int | - | 1 | 1 | 0 |
| 0x33 | Aktivierungszeit der 100 ms Task | µs | high | signed long | - | 1 | 1 | 0 |
| 0x34 | Systemstatus | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x35 | Fahrzeuggeschwindigkeit | km/h | high | unsigned char | - | 1 | 1 | 0 |
| 0x36 | Bereich Stackfehler | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x37 | Position des fehlerhaften Bytes bei Parity-Fehler | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x38 | Adresse der fehlerhaften RAM-Zelle bei Parity Check | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x39 | Prio PWM Koordinator | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x3A | Status Sternpunktrelais | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x3B | Status Endstufentreiber (SW) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x3C | Anzahl fehlerhafter Taskaktivierungen | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x3D | Counter 1 ms Task | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x3E | Counter 100 ms Task | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x3F | Klemme 15 (Zündung berechnet) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x40 | Ansteuerspg. Sternpunktrelais LOW Side Schalter | V | high | unsigned int | - | 3.3 | 1023 | 0 |
| 0x41 | Adresse der fehlerhaften RAM-Zelle bei DAMOS-diversitärer Ablage | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x42 | Debuginformation des Registertests | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x43 | Status Endstufentreiber (HW) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x44 | berech. Strom 3 | A | high | signed int | - | 1 | 16 | 0 |
| 0x45 | CAN BusOff | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x46 | Status DBC | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x47 | korrigierter Lenkwinkel | ° | high | signed int | - | 1 | 22.8571 | 0 |
| 0x48 | Rotordrehzahl, absolut | 1/min | high | signed int | - | 1 | 1 | 0 |
| 0xf9 |   | - | high | unsigned char | - | 1 | 1 | 0 |
| 0xfa | Umweltdaten beim letzten Auftreten des Fehlers: | - | high | unsigned char | - | 1 | 1 | 0 |
| 0xfb | Umweltdaten beim erstem Auftreten des Fehlers: | - | high | unsigned char | - | 1 | 1 | 0 |
| 0xfc | Kilometerstand | km | high | unsigned int | - | 1 | 1 | 0 |
| 0xfd | ZFLS Fehlercode | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xfe | ZFLS Fehlerart | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xff | ohne Bedeutung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x63ed | Lenkmomentsensor 1 (FC 01) |
| 0x63ee | Lenkmomentsensor 2 (FC 02) |
| 0x5d0c | Rotordrehzahlgeber (Main) (FC 03) |
| 0x5d0d | Rotordrehzahlgeber (Backup) (FC 04) |
| 0x63ef | Rotordrehzahlgeber nicht eingelernt / initialisiert (FC 05) |
| 0xd515 | Botschaft vom PT-CAN (Lenkradwinkel oben, ID=0c4h) (FC 06) |
| 0x63f0 | Lenkradwinkel Plausibilisierung 1 (FC 07) |
| 0x63f1 | Lenkradwinkel Plausibilisierung 2 (FC 08) |
| 0xd517 | Botschaft vom PT-CAN (Geschwindigkeit, ID=1a0h) (FC 09) |
| 0xd514 | Botschaft vom PT-CAN (Motordaten, ID=1d0h) (FC 10) |
| 0xd516 | Botschaft vom PT-CAN (Klemmenstatus, ID=130h) (FC 11) |
| 0x63f2 | Klemmenstatus Plausibilisierung (FC 12) |
| 0xd507 | PT-CAN Kommunikationsfehler (FC 13) |
| 0x5d0e | Servomotorstrom (grob) (FC 14) |
| 0x5d0f | Servomotorstrom 1 (fein) (FC 15) |
| 0x5d10 | Servomotorstrom 2 (fein) (FC 16) |
| 0x5d11 | Stromoffset zu hoch (FC 17) |
| 0x5d12 | Sensor Endstufentemperatur (FC 18) |
| 0x5d13 | Fehler im Elektromotor (Wicklungen, Zuleitungen) im Pre-Drive (FC 19) |
| 0x5d14 | Fehler im Elektromotor (Wicklungen, Zuleitungen) im Drive (FC 20) |
| 0x5d15 | Sternpunktrelais (FC 21) |
| 0x5d16 | Ansteuerung Sternpunktrelais im Drive (FC 22) |
| 0x5d17 | Endstufentreiber (FC 23) |
| 0x5d18 | Endstufenfehler im Pre-Drive (FC 24) |
| 0x5d19 | Endstufenfehler im Drive (FC 25) |
| 0x5d1a | Interne Spannungen (1V5, 3V3, 5V0, PAS Spannungen) sind nicht korrekt (FC 26) |
| 0x5d1b | Abschaltpfad defekt (FC 27) |
| 0x5d1c | CSI 30 Kommunikationsfehler (FC 28) |
| 0x5d1d | Fehler in der ADC Messung (FC 29) |
| 0x5d1e | Tasklaufzeit (FC 30) |
| 0x5d1f | EEPROM-Fehler, nicht sicherheitskritisch (FC 31) |
| 0x5d20 | EEPROM-Fehler, sicherheitskritisch (FC 32) |
| 0x5d21 | ROM Checksumme ist nicht korrekt (FC 33) |
| 0x5d22 | RAM-Fehler (FC 34) |
| 0x5d23 | Intelligenter Watchdog (FC 35) |
| 0x5d24 | Programmablauf nicht korrekt (FC 36) |
| 0x63f3 | Abschaltung aufgrund Versorgungsspannung (FC 37) |
| 0x63f4 | Reduzierung aufgrund Übertemperatur (FC 38) |
| 0x63f5 | Reduzierung aufgrund Versorgungsspannung (FC 39) |
| 0x63f6 | Reduzierung aufgrund Überlastung (FC 40) |
| 0x5d2a | Hardware I/O (Input/Output) Fehler (FC 41) |
| 0x5d2b | Programmablauf im PreDrive nicht korrekt (FC 42) |
| 0x5d25 | Vergleicherfehler Level 1 (FC 43) |
| 0x5d26 | Vergleicherfehler Level 2 (FC 44) |
| 0x5d27 | Rechnerkerntest (FC 45) |
| 0x63f9 | Reduzierung aufgrund Rattererkennung (FC 46) |
| 0x5D28 | Betriebssystemfehler (FC 47) |
| 0x5D29 | Plausibilitätsprüfung PWM Koordinator (FC 48) |
| 0x63f8 | SW-Endanschlag nicht eingelernt (FC 49) |
| 0x5D2C | Sternpunktrelais geschlossen beim Ausschalten (FC 50) |
| 0x5D2D | Endstufentest: Verdacht auf geschlossenes Sternpunktrelais vor Ansteuerung (FC 51) |
| 0x63FA | Reibung in Lenkgetriebe (FC 52) |
| 0x63FB | Bordnetzwiderstand (FC 53) |
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
| F_UWB_ERW | ja |

### HUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x63ed | StandardBlock | AmbCondBlock1 | ZusatzBlock | AmbCondBlock1 |
| 0x63ee | StandardBlock | AmbCondBlock2 | ZusatzBlock | AmbCondBlock2 |
| 0x5d0c | StandardBlock | AmbCondBlock9 | ZusatzBlock | AmbCondBlock9 |
| 0x5d0d | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x63ef | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0xd515 | StandardBlock | AmbCondBlock8 | ZusatzBlock | AmbCondBlock8 |
| 0x63f0 | StandardBlock | AmbCondBlock8 | ZusatzBlock | AmbCondBlock8 |
| 0x63f1 | StandardBlock | AmbCondBlock8 | ZusatzBlock | AmbCondBlock8 |
| 0xd517 | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0xd514 | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0xd516 | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x63f2 | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0xd507 | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x5d0e | StandardBlock | AmbCondBlock4 | ZusatzBlock | AmbCondBlock4 |
| 0x5d0f | StandardBlock | AmbCondBlock4 | ZusatzBlock | AmbCondBlock4 |
| 0x5d10 | StandardBlock | AmbCondBlock4 | ZusatzBlock | AmbCondBlock4 |
| 0x5d11 | StandardBlock | AmbCondBlock4 | ZusatzBlock | AmbCondBlock4 |
| 0x5d12 | StandardBlock | AmbCondBlock5 | ZusatzBlock | AmbCondBlock5 |
| 0x5d13 | StandardBlock | AmbCondBlock7 | ZusatzBlock | AmbCondBlock7 |
| 0x5d14 | StandardBlock | AmbCondBlock7 | ZusatzBlock | AmbCondBlock7 |
| 0x5d15 | StandardBlock | AmbCondBlock7 | ZusatzBlock | AmbCondBlock7 |
| 0x5d16 | StandardBlock | AmbCondBlock7 | ZusatzBlock | AmbCondBlock7 |
| 0x5d17 | StandardBlock | AmbCondBlock3 | ZusatzBlock | AmbCondBlock3 |
| 0x5d18 | StandardBlock | AmbCondBlock3 | ZusatzBlock | AmbCondBlock3 |
| 0x5d19 | StandardBlock | AmbCondBlock3 | ZusatzBlock | AmbCondBlock3 |
| 0x5d1a | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x5d1b | StandardBlock | AmbCondBlock3 | ZusatzBlock | AmbCondBlock3 |
| 0x5d1c | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x5d1d | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x5d1e | StandardBlock | AmbCondBlock12 | ZusatzBlock | AmbCondBlock12 |
| 0x5d1f | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x5d20 | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x5d21 | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x5d22 | StandardBlock | AmbCondBlock13 | ZusatzBlock | AmbCondBlock13 |
| 0x5d23 | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x5d24 | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x63f3 | StandardBlock | AmbCondBlock6 | ZusatzBlock | AmbCondBlock6 |
| 0x63f4 | StandardBlock | AmbCondBlock6 | ZusatzBlock | AmbCondBlock6 |
| 0x63f5 | StandardBlock | AmbCondBlock6 | ZusatzBlock | AmbCondBlock6 |
| 0x63f6 | StandardBlock | AmbCondBlock6 | ZusatzBlock | AmbCondBlock6 |
| 0x5d2a | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x5d2b | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x5d25 | StandardBlock | AmbCondBlock10 | ZusatzBlock | AmbCondBlock10 |
| 0x5d26 | StandardBlock | AmbCondBlock11 | ZusatzBlock | AmbCondBlock11 |
| 0x5d27 | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x63f9 | StandardBlock | AmbCondBlock6 | ZusatzBlock | AmbCondBlock6 |
| 0x5D28 | StandardBlock | AmbCondBlock14 | ZusatzBlock | AmbCondBlock14 |
| 0x5D29 | StandardBlock | AmbCondBlock15 | ZusatzBlock | AmbCondBlock15 |
| 0x63f8 | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x5D2C | StandardBlock | AmbCondBlock7 | ZusatzBlock | AmbCondBlock7 |
| 0x5D2D | StandardBlock | AmbCondBlock3 | ZusatzBlock | AmbCondBlock3 |
| 0x63FA | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x63FB | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| default | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |

### HUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Radius des Rotorlagesignals | V | high | signed int | - | 1 | 204.6 | 0 |
| 0x02 | Sinuswert Rotorlage Main | V | high | unsigned int | - | 1 | 204.6 | 0 |
| 0x03 | Cosinuswert Rotorlage Main | V | high | unsigned int | - | 1 | 204.6 | 0 |
| 0x04 | Sinuswert Rotorlage Backup | V | high | unsigned int | - | 1 | 204.6 | 0 |
| 0x05 | Cosinuswert Rotorlage Backup | V | high | unsigned int | - | 1 | 204.6 | 0 |
| 0x06 | Status Lenkwinkelsensor | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x07 | Lwint Status | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x08 | nicht korrigierter Lenkwinkel | ° | high | signed int | - | 1 | 22.8571 | 0 |
| 0x09 | interner Lenkwinkel | ° | high | signed int | - | 1 | 22.8571 | 0 |
| 0x0a | Rotorlage / Polwinkel | ° | high | signed int | - | 1 | 17.8722 | 0 |
| 0x0b | Rotordrehzahl, gefiltert | 1/min | high | signed int | - | 1 | 1 | 0 |
| 0x0c | Klemme 30 (Batteriespannung) | V | high | unsigned int | - | 1 | 40.18 | 0 |
| 0x0d | Phasenspannung 1 | V | high | unsigned int | - | 1 | 40.18 | 0 |
| 0x0e | Phasenspannung 2 | V | high | unsigned int | - | 1 | 40.18 | 0 |
| 0x0f | Phasenspannung 3 | V | high | unsigned int | - | 1 | 40.18 | 0 |
| 0x10 | gefilterte Temperatur | °C | - | unsigned char | - | 1 | 1 | -70 |
| 0x11 | Temperatur DBC | °C | - | unsigned char | - | 1 | 1 | -70 |
| 0x12 | Temperatur LTTC | °C | - | unsigned char | - | 1 | 1 | -70 |
| 0x13 | berech. Strom 1 | A | high | signed int | - | 1 | 16 | 0 |
| 0x14 | berech. Strom 2 | A | high | signed int | - | 1 | 16 | 0 |
| 0x15 | Phasenstrom 1 grob, nicht korrigiert | A | high | signed int | - | 1 | 16 | 0 |
| 0x16 | Phasenstrom 2 grob, nicht korrigiert | A | high | signed int | - | 1 | 16 | 0 |
| 0x17 | Phasenstrom 3 grob, nicht korrigiert | A | high | signed int | - | 1 | 16 | 0 |
| 0x18 | Phasenstrom 1 fein, nicht korrigiert | A | high | signed int | - | 1 | 16 | 0 |
| 0x19 | Phasenstrom 2 fein, nicht korrigiert | A | high | signed int | - | 1 | 16 | 0 |
| 0x1a | Ansteuerspg. Sternpunktrelais HIGH Side Schalter | V | high | unsigned int | - | 1 | 40.18 | 0 |
| 0x1b | Systemstatus | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x1c | Zündung CAN | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x1d | Wake Up | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x1e | Typ Endstufentreiberfehler | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x1f | Sinuswert Lenkmomentsensor Main | - | high | signed int | - | 1 | 1 | 0 |
| 0x20 | Sinuswert Lenkmomentsensor Backup | - | high | signed int | - | 1 | 1 | 0 |
| 0x21 | Cosinuswert Lenkmomentsensor Main | - | high | signed int | - | 1 | 1 | 0 |
| 0x22 | Cosinuswert Lenkmomentsensor Backup | - | high | signed int | - | 1 | 1 | 0 |
| 0x23 | Radius Lenkmomentsensor Main | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x24 | Radius Lenkmomentsensor Backup | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x25 | Radius Lenkmomentsensor Main, gefiltert | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x26 | Radius Lenkmomentsensor Backup, gefiltert | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x27 | Motorsollmoment | Nm | high | signed int | - | 1 | 1024 | 0 |
| 0x28 | Lenkmoment | Nm | high | signed int | - | 1 | 68 | 0 |
| 0x29 | Handmoment Backupsensor: Sensornotlauf | Nm | high | signed int | - | 1 | 68 | 0 |
| 0x2a | Fehler ID Level 1 Vergleicherfehler | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x2b | Fehler ID Level 2 Vergleicherfehler | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x2c | Vergleicherwert 1 (pos. Wert) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x2d | Vergleicherwert 2 (neg. Wert) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x2e | Vergleicherwert obere Grenze | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x2f | Vergleicherwert untere Grenze | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x30 | Laufzeitfehler: Nummer fehlerhafte Task | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x31 | Aktivierungszeit der 1 ms Task | µs | high | unsigned int | - | 1 | 1 | 0 |
| 0x32 | Aktivierungszeit der 10 ms Task | µs | high | unsigned int | - | 1 | 1 | 0 |
| 0x33 | Aktivierungszeit der 100 ms Task | µs | high | signed long | - | 1 | 1 | 0 |
| 0x34 | Systemstatus | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x35 | Fahrzeuggeschwindigkeit | km/h | high | unsigned char | - | 1 | 1 | 0 |
| 0x36 | Bereich Stackfehler | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x37 | Position des fehlerhaften Bytes bei Parity-Fehler | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x38 | Adresse der fehlerhaften RAM-Zelle bei Parity Check | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x39 | Prio PWM Koordinator | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x3A | Status Sternpunktrelais | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x3B | Status Endstufentreiber (SW) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x3C | Anzahl fehlerhafter Taskaktivierungen | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x3D | Counter 1 ms Task | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x3E | Counter 100 ms Task | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x3F | Klemme 15 (Zündung berechnet) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x40 | Ansteuerspg. Sternpunktrelais LOW Side Schalter | V | high | unsigned int | - | 3.3 | 1023 | 0 |
| 0x41 | Adresse der fehlerhaften RAM-Zelle bei DAMOS-diversitärer Ablage | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x42 | Debuginformation des Registertests | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x43 | Status Endstufentreiber (HW) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x44 | berech. Strom 3 | A | high | signed int | - | 1 | 16 | 0 |
| 0x45 | CAN BusOff | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x46 | Status DBC | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x47 | korrigierter Lenkwinkel | ° | high | signed int | - | 1 | 22.8571 | 0 |
| 0x48 | Rotordrehzahl, absolut | 1/min | high | signed int | - | 1 | 1 | 0 |
| 0xf9 |   | - | high | unsigned char | - | 1 | 1 | 0 |
| 0xfa | Umweltdaten beim letzten Auftreten des Fehlers: | - | high | unsigned char | - | 1 | 1 | 0 |
| 0xfb | Umweltdaten beim erstem Auftreten des Fehlers: | - | high | unsigned char | - | 1 | 1 | 0 |
| 0xfc | Kilometerstand | km | high | unsigned int | - | 1 | 1 | 0 |
| 0xfd | ZFLS Fehlercode | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xfe | ZFLS Fehlerart | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xff | ohne Bedeutung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x63ed | Lenkmomentsensor 1 (FC 01) |
| 0x63ee | Lenkmomentsensor 2 (FC 02) |
| 0x5d0c | Rotordrehzahlgeber (Main) (FC 03) |
| 0x5d0d | Rotordrehzahlgeber (Backup) (FC 04) |
| 0x63ef | Rotordrehzahlgeber nicht eingelernt / initialisiert (FC 05) |
| 0xd515 | Botschaft vom PT-CAN (Lenkradwinkel oben, ID=0c4h) (FC 06) |
| 0x63f0 | Lenkradwinkel Plausibilisierung 1 (FC 07) |
| 0x63f1 | Lenkradwinkel Plausibilisierung 2 (FC 08) |
| 0xd517 | Botschaft vom PT-CAN (Geschwindigkeit, ID=1a0h) (FC 09) |
| 0xd514 | Botschaft vom PT-CAN (Motordaten, ID=1d0h) (FC 10) |
| 0xd516 | Botschaft vom PT-CAN (Klemmenstatus, ID=130h) (FC 11) |
| 0x63f2 | Klemmenstatus Plausibilisierung (FC 12) |
| 0xd507 | PT-CAN Kommunikationsfehler (FC 13) |
| 0x5d0e | Servomotorstrom (grob) (FC 14) |
| 0x5d0f | Servomotorstrom 1 (fein) (FC 15) |
| 0x5d10 | Servomotorstrom 2 (fein) (FC 16) |
| 0x5d11 | Stromoffset zu hoch (FC 17) |
| 0x5d12 | Sensor Endstufentemperatur (FC 18) |
| 0x5d13 | Fehler im Elektromotor (Wicklungen, Zuleitungen) im Pre-Drive (FC 19) |
| 0x5d14 | Fehler im Elektromotor (Wicklungen, Zuleitungen) im Drive (FC 20) |
| 0x5d15 | Sternpunktrelais (FC 21) |
| 0x5d16 | Ansteuerung Sternpunktrelais im Drive (FC 22) |
| 0x5d17 | Endstufentreiber (FC 23) |
| 0x5d18 | Endstufenfehler im Pre-Drive (FC 24) |
| 0x5d19 | Endstufenfehler im Drive (FC 25) |
| 0x5d1a | Interne Spannungen (1V5, 3V3, 5V0, PAS Spannungen) sind nicht korrekt (FC 26) |
| 0x5d1b | Abschaltpfad defekt (FC 27) |
| 0x5d1c | CSI 30 Kommunikationsfehler (FC 28) |
| 0x5d1d | Fehler in der ADC Messung (FC 29) |
| 0x5d1e | Tasklaufzeit (FC 30) |
| 0x5d1f | EEPROM-Fehler, nicht sicherheitskritisch (FC 31) |
| 0x5d20 | EEPROM-Fehler, sicherheitskritisch (FC 32) |
| 0x5d21 | ROM Checksumme ist nicht korrekt (FC 33) |
| 0x5d22 | RAM-Fehler (FC 34) |
| 0x5d23 | Intelligenter Watchdog (FC 35) |
| 0x5d24 | Programmablauf nicht korrekt (FC 36) |
| 0x63f3 | Abschaltung aufgrund Versorgungsspannung (FC 37) |
| 0x63f4 | Reduzierung aufgrund Übertemperatur (FC 38) |
| 0x63f5 | Reduzierung aufgrund Versorgungsspannung (FC 39) |
| 0x63f6 | Reduzierung aufgrund Überlastung (FC 40) |
| 0x5d2a | Hardware I/O (Input/Output) Fehler (FC 41) |
| 0x5d2b | Programmablauf im PreDrive nicht korrekt (FC 42) |
| 0x5d25 | Vergleicherfehler Level 1 (FC 43) |
| 0x5d26 | Vergleicherfehler Level 2 (FC 44) |
| 0x5d27 | Rechnerkerntest (FC 45) |
| 0x63f9 | Reduzierung aufgrund Rattererkennung (FC 46) |
| 0x5D28 | Betriebssystemfehler (FC 47) |
| 0x5D29 | Plausibilitätsprüfung PWM Koordinator (FC 48) |
| 0x63f8 | SW-Endanschlag nicht eingelernt (FC 49) |
| 0x5D2C | Sternpunktrelais geschlossen beim Ausschalten (FC 50) |
| 0x5D2D | Endstufentest: Verdacht auf geschlossenes Sternpunktrelais vor Ansteuerung (FC 51) |
| 0x63FA | Reibung in Lenkgetriebe (FC 52) |
| 0x63FB | Bordnetzwiderstand (FC 53) |
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
| 0x63ed | StandardBlock | AmbCondBlock1 | ZusatzBlock | AmbCondBlock1 |
| 0x63ee | StandardBlock | AmbCondBlock2 | ZusatzBlock | AmbCondBlock2 |
| 0x5d0c | StandardBlock | AmbCondBlock9 | ZusatzBlock | AmbCondBlock9 |
| 0x5d0d | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x63ef | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0xd515 | StandardBlock | AmbCondBlock8 | ZusatzBlock | AmbCondBlock8 |
| 0x63f0 | StandardBlock | AmbCondBlock8 | ZusatzBlock | AmbCondBlock8 |
| 0x63f1 | StandardBlock | AmbCondBlock8 | ZusatzBlock | AmbCondBlock8 |
| 0xd517 | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0xd514 | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0xd516 | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x63f2 | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0xd507 | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x5d0e | StandardBlock | AmbCondBlock4 | ZusatzBlock | AmbCondBlock4 |
| 0x5d0f | StandardBlock | AmbCondBlock4 | ZusatzBlock | AmbCondBlock4 |
| 0x5d10 | StandardBlock | AmbCondBlock4 | ZusatzBlock | AmbCondBlock4 |
| 0x5d11 | StandardBlock | AmbCondBlock4 | ZusatzBlock | AmbCondBlock4 |
| 0x5d12 | StandardBlock | AmbCondBlock5 | ZusatzBlock | AmbCondBlock5 |
| 0x5d13 | StandardBlock | AmbCondBlock7 | ZusatzBlock | AmbCondBlock7 |
| 0x5d14 | StandardBlock | AmbCondBlock7 | ZusatzBlock | AmbCondBlock7 |
| 0x5d15 | StandardBlock | AmbCondBlock7 | ZusatzBlock | AmbCondBlock7 |
| 0x5d16 | StandardBlock | AmbCondBlock7 | ZusatzBlock | AmbCondBlock7 |
| 0x5d17 | StandardBlock | AmbCondBlock3 | ZusatzBlock | AmbCondBlock3 |
| 0x5d18 | StandardBlock | AmbCondBlock3 | ZusatzBlock | AmbCondBlock3 |
| 0x5d19 | StandardBlock | AmbCondBlock3 | ZusatzBlock | AmbCondBlock3 |
| 0x5d1a | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x5d1b | StandardBlock | AmbCondBlock3 | ZusatzBlock | AmbCondBlock3 |
| 0x5d1c | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x5d1d | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x5d1e | StandardBlock | AmbCondBlock12 | ZusatzBlock | AmbCondBlock12 |
| 0x5d1f | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x5d20 | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x5d21 | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x5d22 | StandardBlock | AmbCondBlock13 | ZusatzBlock | AmbCondBlock13 |
| 0x5d23 | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x5d24 | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x63f3 | StandardBlock | AmbCondBlock6 | ZusatzBlock | AmbCondBlock6 |
| 0x63f4 | StandardBlock | AmbCondBlock6 | ZusatzBlock | AmbCondBlock6 |
| 0x63f5 | StandardBlock | AmbCondBlock6 | ZusatzBlock | AmbCondBlock6 |
| 0x63f6 | StandardBlock | AmbCondBlock6 | ZusatzBlock | AmbCondBlock6 |
| 0x5d2a | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x5d2b | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x5d25 | StandardBlock | AmbCondBlock10 | ZusatzBlock | AmbCondBlock10 |
| 0x5d26 | StandardBlock | AmbCondBlock11 | ZusatzBlock | AmbCondBlock11 |
| 0x5d27 | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x63f9 | StandardBlock | AmbCondBlock6 | ZusatzBlock | AmbCondBlock6 |
| 0x5D28 | StandardBlock | AmbCondBlock14 | ZusatzBlock | AmbCondBlock14 |
| 0x5D29 | StandardBlock | AmbCondBlock15 | ZusatzBlock | AmbCondBlock15 |
| 0x63f8 | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x5D2C | StandardBlock | AmbCondBlock7 | ZusatzBlock | AmbCondBlock7 |
| 0x5D2D | StandardBlock | AmbCondBlock3 | ZusatzBlock | AmbCondBlock3 |
| 0x63FA | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| 0x63FB | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |
| default | StandardBlock | AmbCondBlock0 | ZusatzBlock | AmbCondBlock0 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Radius des Rotorlagesignals | V | high | signed int | - | 1 | 204.6 | 0 |
| 0x02 | Sinuswert Rotorlage Main | V | high | unsigned int | - | 1 | 204.6 | 0 |
| 0x03 | Cosinuswert Rotorlage Main | V | high | unsigned int | - | 1 | 204.6 | 0 |
| 0x04 | Sinuswert Rotorlage Backup | V | high | unsigned int | - | 1 | 204.6 | 0 |
| 0x05 | Cosinuswert Rotorlage Backup | V | high | unsigned int | - | 1 | 204.6 | 0 |
| 0x06 | Status Lenkwinkelsensor | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x07 | Lwint Status | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x08 | nicht korrigierter Lenkwinkel | ° | high | signed int | - | 1 | 22.8571 | 0 |
| 0x09 | interner Lenkwinkel | ° | high | signed int | - | 1 | 22.8571 | 0 |
| 0x0a | Rotorlage / Polwinkel | ° | high | signed int | - | 1 | 17.8722 | 0 |
| 0x0b | Rotordrehzahl, gefiltert | 1/min | high | signed int | - | 1 | 1 | 0 |
| 0x0c | Klemme 30 (Batteriespannung) | V | high | unsigned int | - | 1 | 40.18 | 0 |
| 0x0d | Phasenspannung 1 | V | high | unsigned int | - | 1 | 40.18 | 0 |
| 0x0e | Phasenspannung 2 | V | high | unsigned int | - | 1 | 40.18 | 0 |
| 0x0f | Phasenspannung 3 | V | high | unsigned int | - | 1 | 40.18 | 0 |
| 0x10 | gefilterte Temperatur | °C | - | unsigned char | - | 1 | 1 | -70 |
| 0x11 | Temperatur DBC | °C | - | unsigned char | - | 1 | 1 | -70 |
| 0x12 | Temperatur LTTC | °C | - | unsigned char | - | 1 | 1 | -70 |
| 0x13 | berech. Strom 1 | A | high | signed int | - | 1 | 16 | 0 |
| 0x14 | berech. Strom 2 | A | high | signed int | - | 1 | 16 | 0 |
| 0x15 | Phasenstrom 1 grob, nicht korrigiert | A | high | signed int | - | 1 | 16 | 0 |
| 0x16 | Phasenstrom 2 grob, nicht korrigiert | A | high | signed int | - | 1 | 16 | 0 |
| 0x17 | Phasenstrom 3 grob, nicht korrigiert | A | high | signed int | - | 1 | 16 | 0 |
| 0x18 | Phasenstrom 1 fein, nicht korrigiert | A | high | signed int | - | 1 | 16 | 0 |
| 0x19 | Phasenstrom 2 fein, nicht korrigiert | A | high | signed int | - | 1 | 16 | 0 |
| 0x1a | Ansteuerspg. Sternpunktrelais HIGH Side Schalter | V | high | unsigned int | - | 1 | 40.18 | 0 |
| 0x1b | Systemstatus | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x1c | Zündung CAN | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x1d | Wake Up | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x1e | Typ Endstufentreiberfehler | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x1f | Sinuswert Lenkmomentsensor Main | - | high | signed int | - | 1 | 1 | 0 |
| 0x20 | Sinuswert Lenkmomentsensor Backup | - | high | signed int | - | 1 | 1 | 0 |
| 0x21 | Cosinuswert Lenkmomentsensor Main | - | high | signed int | - | 1 | 1 | 0 |
| 0x22 | Cosinuswert Lenkmomentsensor Backup | - | high | signed int | - | 1 | 1 | 0 |
| 0x23 | Radius Lenkmomentsensor Main | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x24 | Radius Lenkmomentsensor Backup | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x25 | Radius Lenkmomentsensor Main, gefiltert | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x26 | Radius Lenkmomentsensor Backup, gefiltert | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x27 | Motorsollmoment | Nm | high | signed int | - | 1 | 1024 | 0 |
| 0x28 | Lenkmoment | Nm | high | signed int | - | 1 | 68 | 0 |
| 0x29 | Handmoment Backupsensor: Sensornotlauf | Nm | high | signed int | - | 1 | 68 | 0 |
| 0x2a | Fehler ID Level 1 Vergleicherfehler | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x2b | Fehler ID Level 2 Vergleicherfehler | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x2c | Vergleicherwert 1 (pos. Wert) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x2d | Vergleicherwert 2 (neg. Wert) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x2e | Vergleicherwert obere Grenze | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x2f | Vergleicherwert untere Grenze | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x30 | Laufzeitfehler: Nummer fehlerhafte Task | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x31 | Aktivierungszeit der 1 ms Task | µs | high | unsigned int | - | 1 | 1 | 0 |
| 0x32 | Aktivierungszeit der 10 ms Task | µs | high | unsigned int | - | 1 | 1 | 0 |
| 0x33 | Aktivierungszeit der 100 ms Task | µs | high | signed long | - | 1 | 1 | 0 |
| 0x34 | Systemstatus | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x35 | Fahrzeuggeschwindigkeit | km/h | high | unsigned char | - | 1 | 1 | 0 |
| 0x36 | Bereich Stackfehler | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x37 | Position des fehlerhaften Bytes bei Parity-Fehler | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x38 | Adresse der fehlerhaften RAM-Zelle bei Parity Check | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x39 | Prio PWM Koordinator | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x3A | Status Sternpunktrelais | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x3B | Status Endstufentreiber (SW) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x3C | Anzahl fehlerhafter Taskaktivierungen | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x3D | Counter 1 ms Task | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x3E | Counter 100 ms Task | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x3F | Klemme 15 (Zündung berechnet) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x40 | Ansteuerspg. Sternpunktrelais LOW Side Schalter | V | high | unsigned int | - | 3.3 | 1023 | 0 |
| 0x41 | Adresse der fehlerhaften RAM-Zelle bei DAMOS-diversitärer Ablage | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x42 | Debuginformation des Registertests | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x43 | Status Endstufentreiber (HW) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x44 | berech. Strom 3 | A | high | signed int | - | 1 | 16 | 0 |
| 0x45 | CAN BusOff | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x46 | Status DBC | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x47 | korrigierter Lenkwinkel | ° | high | signed int | - | 1 | 22.8571 | 0 |
| 0x48 | Rotordrehzahl, absolut | 1/min | high | signed int | - | 1 | 1 | 0 |
| 0xf9 |   | - | high | unsigned char | - | 1 | 1 | 0 |
| 0xfa | Umweltdaten beim letzten Auftreten des Fehlers: | - | high | unsigned char | - | 1 | 1 | 0 |
| 0xfb | Umweltdaten beim erstem Auftreten des Fehlers: | - | high | unsigned char | - | 1 | 1 | 0 |
| 0xfc | Kilometerstand | km | high | unsigned int | - | 1 | 1 | 0 |
| 0xfd | ZFLS Fehlercode | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xfe | ZFLS Fehlerart | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xff | ohne Bedeutung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### AMBCONDBLOCK0

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 0x27 | 0x45 | 0x10 | 0x1b | 0x1c | 0x1d | 0x28 |

### AMBCONDBLOCK1

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x1f | 0x21 | 0x28 | 0x23 | 0x25 |

### AMBCONDBLOCK2

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x20 | 0x22 | 0x29 | 0x24 | 0x26 |

### AMBCONDBLOCK3

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x13 | 0x14 | 0x44 | 0x3a | 0x10 | 0x1e |

### AMBCONDBLOCK4

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x15 | 0x16 | 0x17 | 0x18 | 0x19 |

### AMBCONDBLOCK5

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 0x1b | 0x27 | 0x3d | 0x10 | 0x11 | 0x46 | 0x12 |

### AMBCONDBLOCK6

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x1b | 0x43 | 0x10 | 0x27 | 0x28 | 0x1e |

### AMBCONDBLOCK7

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x1a | 0x40 | 0x43 | 0x10 | 0x13 | 0x14 |

### AMBCONDBLOCK8

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x06 | 0x07 | 0x08 | 0x09 | 0x47 | 0xb |

### AMBCONDBLOCK9

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x34 | 0x10 | 0x2 | 0x3 | 0x1 | 0xa |

### AMBCONDBLOCK10

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x2a | 0x2c | 0x2d | 0x2e | 0x2f |

### AMBCONDBLOCK11

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x2b | 0x27 | 0x28 | 0x0b | 0x09 |

### AMBCONDBLOCK12

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x34 | 0x30 | 0x31 | 0x32 | 0x33 |

### AMBCONDBLOCK13

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x41 | 0x1b | 0x42 | 0x37 | 0x38 | 0x36 |

### AMBCONDBLOCK14

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x34 | 0x3c | 0x31 | 0x32 | 0x3d | 0x3e |

### AMBCONDBLOCK15

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 0x1b | 0x48 | 0x39 | 0x3a | 0x43 | 0x3b | 0xb |

### STANDARDBLOCK

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x35 | 0x3f | 0x0c | 0xfd | 0xfe |

### ZUSATZBLOCK

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0xf9 | 0xfb | 0xfc | 0x35 | 0x3f | 0x0c |
