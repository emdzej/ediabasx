# eps_72.prg

## General

|  |  |
| --- | --- |
| File | eps_72.prg |
| Type | PRG |
| Jobs | 54 |
| Tables | 45 |
| Origin | BMW EF-440 Fichtner, Helge |
| Revision | 1.200 |
| Author | ZF-Lenksysteme EZPB Bühler, ZF-Lenksysteme EZPFF Gauß, ZF-Lenks |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | EPS_72 |  |  |
| ORIGIN | string | BMW EF-440 Fichtner, Helge |  |  |
| REVISION | string | 1.200 |  |  |
| AUTHOR | string | ZF-Lenksysteme EZPB Bühler, ZF-Lenksysteme EZPFF Gauß, ZF-Lenks |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.48 |  |  |
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

### LERNWERT_RUECKSETZEN

Lernwerte zuruecksetzen Standard job KWP2000: $2E WriteDataByCommonIdentifier $0009 Lernwerte rücksetzen Modus  : Default

_No arguments._

### LW_OFFSET_LESEN

Lenkwinkeloffset lesen Standard job KWP2000: $22 ReadDataByCommonIdentifier $0001 Lenkwinkeloffset Modus  : Default

_No arguments._

### LW_OFFSET_RUECKSETZEN

Lenkwinkeloffset zuruecksetzen Standard job KWP2000: $2E WriteDataByCommonIdentifier $0001 Lenkwinkeloffset Modus  : Default

_No arguments._

### SW_VERSION_ZFLS

ZFLS Softwareversion lesen Standard job KWP2000: $1A ReadECUIdentification $95 systemSupplierECUSoftwareVersionNumber Modus  : Default

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
| 0x63EC | Hardwarefehler Steuergeraet |
| 0x63ED | Lenkmomentensensor 1 (FC 33) |
| 0x63EE | Lenkmomentensensor 2 (FC 34) |
| 0x63EF | Rotordrehzahlgeber 1 nicht eingelernt / initialisiert (FC 9) |
| 0x63F0 | Lenkradwinkel Plausibilisierung 1 (FC 64) |
| 0x63F1 | Lenkradwinkel Plausibilisierung 2 (FC 36) |
| 0x63F2 | Klemmenstatus Plausibilisierung (FC 44) |
| 0x63F3 | Abschaltung aufgrund Versorgungsspannung (FC 59) |
| 0x63F4 | Reduzierung aufgrund Übertemperatur (FC 55) |
| 0x63F5 | Reduzierung aufgrund Versorgungsspannung (FC 56) |
| 0x63F6 | Reduzierung aufgrund Überlastung (FC 57) |
| 0x63F8 | SW-Endanschlag (FC 52) |
| 0x63F9 | Reduzierung aufgrund Rattererkennung (FC 54) |
| 0x63FA | Reibung in Lenkgetriebe |
| 0x63FC | Batterie ab Erkennung (FC 62) |
| 0x63FD | Lenkmomentsensorfehler aller Sensoren (FC 63) |
| 0x63FE | Radiusfehler Lenkmomentsensor1 (FC 80) |
| 0x63FF | Radiusfehler Lenkmomentsensor2 (FC 81) |
| 0x6400 | Radiusfehler aller Lenkmomentsensoren (FC 82) |
| 0x6401 | Reduzierung aufgrund Endstufenfehler (FC 65) |
| 0x6402 | Rotordrehzahlgeber 2 nicht eingelernt / initialisiert (FC 10) |
| 0xD507 | PT-CAN Kommunikationsfehler (FC 41) |
| 0xD514 | Botschaft vom PT-CAN (Motordaten, ID=1D0h) (FC 48) |
| 0xD515 | Botschaft vom PT-CAN (Lenkradwinkel oben, ID=0C4h) (FC 37) |
| 0xD516 | Botschaft vom PT-CAN (Klemmenstatus, ID=130h) (FC 42) |
| 0xD517 | Botschaft vom PT-CAN (Geschwindigkeit, ID=1A0h) (FC 47) |
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
| 0x63EC | StandardBlock | - | - | - |
| 0x63ED | StandardBlock | AmbCondBlock13 | - | - |
| 0x63EE | StandardBlock | AmbCondBlock14 | - | - |
| 0x63EF | StandardBlock | AmbCondBlock0 | - | - |
| 0x63F0 | StandardBlock | AmbCondBlock0 | - | - |
| 0x63F1 | StandardBlock | AmbCondBlock0 | - | - |
| 0x63F2 | StandardBlock | AmbCondBlock0 | - | - |
| 0x63F3 | StandardBlock | AmbCondBlock12 | - | - |
| 0x63F4 | StandardBlock | AmbCondBlock12 | - | - |
| 0x63F5 | StandardBlock | AmbCondBlock12 | - | - |
| 0x63F6 | StandardBlock | AmbCondBlock12 | - | - |
| 0x63F8 | StandardBlock | AmbCondBlock0 | - | - |
| 0x63F9 | StandardBlock | AmbCondBlock12 | - | - |
| 0x63FA | StandardBlock | AmbCondBlock0 | - | - |
| 0x63FC | StandardBlock_BattAb | - | - | - |
| 0x63FD | StandardBlock | AmbCondBlock15 | - | - |
| 0x63FE | StandardBlock | AmbCondBlock13 | - | - |
| 0x63FF | StandardBlock | AmbCondBlock14 | - | - |
| 0x6400 | StandardBlock | AmbCondBlock15 | - | - |
| 0x6401 | StandardBlock | AmbCondBlock3 | - | - |
| 0x6402 | StandardBlock | AmbCondBlock0 | - | - |
| 0xD507 | StandardBlock | AmbCondBlock0 | - | - |
| 0xD514 | StandardBlock | AmbCondBlock0 | - | - |
| 0xD515 | StandardBlock | AmbCondBlock12 | - | - |
| 0xD516 | StandardBlock | AmbCondBlock0 | - | - |
| 0xD517 | StandardBlock | AmbCondBlock0 | - | - |
| default | StandardBlock | - | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Platzhalter | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x02 | Gefilterte Batteriespannung | V | high | unsigned int | - | 1 | 64 | 0 |
| 0x03 | Nicht gefilterte Batteriespannung | V | high | unsigned int | - | 1 | 64 | 0 |
| 0x04 | Rohwert Sin Rotorlagesensor 1 | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x05 | Rohwert Cos Rotorlagesensor 1 | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x06 | Verstärkungsfaktor Sin Rotorlagesensor 1 | - | high | unsigned int | - | 80 | 1024 | 0 |
| 0x07 | Verstärkungsfaktor Cos Rotorlagesensor 1 | - | high | unsigned int | - | 80 | 1024 | 0 |
| 0x08 | Status Rotorlagesensor 1 | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x09 | Gefilterte Temperatur | °C | - | unsigned char | - | 1 | 1 | -70 |
| 0x0a | Rohwert Sin Rotorlagesensor 2 | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x0b | Rohwert Cos Rotorlagesensor 2 | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x0c | Verstärkungsfaktor Sin Rotorlagesensor 2 | - | high | unsigned int | - | 80 | 1024 | 0 |
| 0x0d | Verstärkungsfaktor Cos Rotorlagesensor 2 | - | high | unsigned int | - | 80 | 1024 | 0 |
| 0x0e | Status Rotorlagesensor 2 | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x0f | Motorstrom Phase 1 | A | high | signed int | - | 1 | 64 | 0 |
| 0x10 | Motorstrom Phase 2 | A | high | signed int | - | 1 | 64 | 0 |
| 0x11 | Motorstrom Phase 3 | A | high | signed int | - | 1 | 64 | 0 |
| 0x12 | Status Einschalten und Test Endstufe | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x13 | ASIC Register RequLo | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x14 | aktuelle Priorität PWM Koordinator | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x15 | ASIC Register LWS Status | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x16 | ASIC Register DIA1 | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x17 | ASIC Register DIA2 | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x18 | ASIC Register MR2 State | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x19 | interne ECU Spannung 1V5 | V | high | unsigned int | - | 1 | 64 | 0 |
| 0x1a | Adresse der fehlerhaften ROM Sektion | - | high | signed long | - | 1 | 1 | 0 |
| 0x1b | Adresse der fehlerhaften RAM Zelle | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x1c | Position der fehlerhaften RAM Zelle | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x1d | Nummer der fehlerhaften dynamischen Watchdogantwort | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x1e | Status des Indexsensors | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x1f | Indexsignal | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x20 | Platzhalter / Dummy Größe für ErrorHandler | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x21 | Fahrzeuggeschwindigkeit | km/h | - | unsigned char | - | 1 | 1 | 0 |
| 0x22 | Systemstatus | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x23 | Lenkmoment | Nm | high | signed int | - | 1 | 68 | 0 |
| 0x24 | Begrenztes Motorsollmoment | Nm | high | signed int | - | 1 | 1024 | 0 |
| 0x25 | Identifikationswert Level1 | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x26 | originaler Vergleichswert Level1 | - | high | signed int | - | 1 | 1 | 0 |
| 0x27 | negierter Vergleichswert Level1 | - | high | signed int | - | 1 | 1 | 0 |
| 0x28 | max. Differenz zw. originalem und neg. Vergleichswert | - | high | signed int | - | 1 | 1 | 0 |
| 0x29 | min. Differenz zw. originalem und neg. Vergleichswert | - | high | signed int | - | 1 | 1 | 0 |
| 0x2a | Identifikationswert Level2 | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x2b | Rotorgeschwindigkeit | 1/min | high | signed int | - | 1 | 1 | 0 |
| 0x2c | Interner Lenkwinkel | ° | high | signed int | - | 1 | 10 | 0 |
| 0x2d | Nicht gefilterte Batteriespannung (8 Bit Auflösung) | V | - | unsigned char | - | 1 | 10 | 0 |
| 0x2e | Status der Zustandsmaschine des internen Lenkwinkels | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x2f | Winkelwert Rotorlage +/-90° | ° | high | signed int | - | 180 | 2048 | 0 |
| 0x30 | Gültigkeit der Signale Berechneter Lenkwinkel | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x31 | Diagnosestatus PASA (Momentensensortreiber) | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x32 | Diagnosestatus PASB (Momentensensortreiber) | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x33 | Versorgungsspannung PASA Sensor | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x34 | Versorgungsspannung PASB Sensor | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x35 | ID der defekten EEPROM Area | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x36 | Registerüberwachung: Adresse fehlerhaftes Register | - | high | signed long | - | 1 | 1 | 0 |
| 0x37 | Klemme 15 (Zündung berechnet) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x38 | Reduktionsfaktor Motormoment | - | high | unsigned int | - | 100 | 32768 | 0 |
| 0x39 | gefilterter Lenkwinkel aus Raddrehzahlen | - | high | unsigned int | - | 1 | 22857 | 0 |
| 0x3a | Status der Plausibilisierung über Raddrehzahlen | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x3b | Fahrzeugmotor-Drehzahl (tn-Signal) | 1/min | high | unsigned int | - | 1 | 1 | 0 |
| 0x3c | Fahrzeuggeschwindigkeit gefiltert | km/h | - | unsigned char | - | 1 | 1 | 0 |
| 0x3d | BusOff Status | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x3e | Zustände der CAN-Sensorgrößen | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x3f | RAM-Adresse mit Fehler bei redundanter Ablage | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x40 | Zuordnung zu einer Task bei Stackfehler | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x41 | Aktivierungszeit der 1 ms Task | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x42 | Aktivierungszeit der 10 ms Task | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x43 | Aktivierungszeit der 100 ms Task | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x44 | Radius Lenkmomentsensor (Main) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x45 | Radius Lenkmomentsensor (Backup) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x46 | Lenkmoment Backupsensor (Notlaufmoment) | Nm | high | signed int | - | 1 | 68 | 0 |
| 0x47 | Sinuswert Lenkmomentsensor Main | - | high | signed int | - | 100 | 1024 | 0 |
| 0x48 | Sinuswert Lenkmomentsensor Backup | - | high | signed int | - | 100 | 1024 | 0 |
| 0x49 | Cosinuswert Lenkmomentsensor Main | - | high | signed int | - | 100 | 1024 | 0 |
| 0x4a | Cosinuswert Lenkmomentsensor Backup | - | high | signed int | - | 100 | 1024 | 0 |
| 0x4b | Sinuswert des zuletzt aktiven Lenkmomentsensors | - | high | signed int | - | 100 | 1024 | 0 |
| 0x4c | Cosinuswert des zuletzt aktiven Lenkmomentsensors | - | high | signed int | - | 100 | 1024 | 0 |
| 0x4d | Radius des zuletzt aktiven Lenkmomentsensors | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x4e | Lenkmoment berechnet aus dem zuletzt aktiven Lenkmomentsensor | Nm | high | signed int | - | 1 | 68 | 0 |
| 0x4f | Diagnosestatus des zuletzt aktiven Lenkomentensensortreiber | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x50 | Versorgungsspannung des zuletzt aktiven PAS Sensor | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x51 | Adresse der fehlerhaften RAM Adresse | - | high | signed long | - | 1 | 1 | 0 |
| 0x53 | Adresse der fehlerhaften RAM Zelle | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x54 | Position der fehlerhaften RAM Zelle | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x55 | Adresse der fehlerhaften ROM Zelle | - | high | signed long | - | 1 | 1 | 0 |
| 0x56 | Endstufenspannung | V | high | unsigned int | - | 1 | 64 | 0 |
| 0xf8 | Platzhalter | - | - | signed long | - | 1 | 1 | 0 |
| 0xf9 |   | - | high | unsigned char | - | 1 | 1 | 0 |
| 0xfa | Umweltdaten beim letzten Auftreten des Fehlers: | - | high | unsigned char | - | 1 | 1 | 0 |
| 0xfb | Umweltdaten beim erstem Auftreten des Fehlers: | - | high | unsigned char | - | 1 | 1 | 0 |
| 0xfc | Kilometerstand | km | high | unsigned int | - | 1 | 1 | 0 |
| 0xfd | ZFLS Fehlercode | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xfe | ZFLS Fehlerart | - | high | unsigned int | - | 1 | 1 | 0 |
| 0xff | ohne Bedeutung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x5D0C | Rotordrehzahlgeber (Main) (FC 35) |
| 0x5D0E | Servomotorstrom (FC 17) |
| 0x5D12 | Sensor Endstufentemperatur (FC 01) |
| 0x5D14 | Fehler im Elektromotor (Wicklungen, Zuleitungen) im Drive (FC 38) |
| 0x5D15 | Sternpunktrelais (FC 27) |
| 0x5D18 | Endstufenfehler im Pre-Drive (FC 15) |
| 0x5D19 | Endstufenfehler im Drive (FC 13) |
| 0x5D1A | Interne Spannungen (1V5, 3V3, 5V0, PAS Spannungen) sind nicht korrekt (FC 19) |
| 0x5D1B | Abschaltpfad defekt (FC 18) |
| 0x5D1C | CSI 30 Kommunikationsfehler (FC 07) |
| 0x5D1D | Fehler in der ADC Messung (FC 16) |
| 0x5D1E | Tasklaufzeit (FC 61) |
| 0x5D1F | EEPROM-Fehler, nicht sicherheitskritisch (FC 31) |
| 0x5D20 | EEPROM-Fehler, sicherheitskritisch (FC 32) |
| 0x5D21 | ROM Checksumme ist nicht korekt (FC 20) |
| 0x5D22 | RAM-Fehler (FC 60) |
| 0x5D23 | Intelligenter Watchdog (FC 11) |
| 0x5D24 | Programmablauf nicht korrekt (FC 39) |
| 0x5D25 | Vergleicherfehler Level 1 (FC 66) |
| 0x5D26 | Vergleicherfehler Level 2 (FC 67) |
| 0x5D27 | Rechnerkerntest (FC 21) |
| 0x5D28 | Betriebssystem (FC 58) |
| 0x5D2E | Plausibilisierung Temperatursensor (FC 02) |
| 0x5D2F | Rotorlagesensor 1 (FC 03) |
| 0x5D30 | Rotorlagesensor 2 (FC 04) |
| 0x5D31 | Indexsensor (FC 06) |
| 0x5D32 | ASIC Cl226 (FC 08) |
| 0x5D33 | ESPR Überwachung im Drive |
| 0x5D34 | Überwachung der Differenz zwischen ESPR- und Sternpunktspannung |
| 0x5D35 | KL30 Versorgungsspannung (FC 12) |
| 0x5D36 | PWM validity check (FC 22) |
| 0x5D37 | Register Test (FC 23) |
| 0x5D38 | Endstufenversorgungsspannung (FC 24) |
| 0x5D39 | Serielle Schnittstelle CSI31 (FC 25) |
| 0x5D3A | ASIC Cl202 (FC 26) |
| 0x5D3B | Interner RAM-Fehler (FC 14) |
| 0x5D3C | Schalter für Endstufenspannungsmessung (FC 29) |
| 0x5D3D | Zündungsstatus fehlerhaft (System startet auf obwohl Zündung aus) |
| 0x63EC | Hardwarefehler Steuergeraet |
| 0x63ED | Lenkmomentensensor 1 (FC 33) |
| 0x63EE | Lenkmomentensensor 2 (FC 34) |
| 0x63EF | Rotordrehzahlgeber 1 nicht eingelernt / initialisiert (FC 9) |
| 0x63F0 | Lenkradwinkel Plausibilisierung 1 (FC 64) |
| 0x63F1 | Lenkradwinkel Plausibilisierung 2 (FC 36) |
| 0x63F2 | Klemmenstatus Plausibilisierung (FC 44) |
| 0x63F3 | Abschaltung aufgrund Versorgungsspannung (FC 59) |
| 0x63F4 | Reduzierung aufgrund Übertemperatur (FC 55) |
| 0x63F5 | Reduzierung aufgrund Versorgungsspannung (FC 56) |
| 0x63F6 | Reduzierung aufgrund Überlastung (FC 57) |
| 0x63F8 | SW-Endanschlag (FC 52) |
| 0x63F9 | Reduzierung aufgrund Rattererkennung (FC 54) |
| 0x63FA | Reibung in Lenkgetriebe |
| 0x63FC | Batterie ab Erkennung (FC 62) |
| 0x63FD | Lenkmomentsensorfehler aller Sensoren (FC 63) |
| 0x63FE | Radiusfehler Lenkmomentsensor1 (FC 80) |
| 0x63FF | Radiusfehler Lenkmomentsensor2 (FC 81) |
| 0x6400 | Radiusfehler aller Lenkmomentsensoren (FC 82) |
| 0x6401 | Reduzierung aufgrund Endstufenfehler (FC 65) |
| 0x6402 | Rotordrehzahlgeber 2 nicht eingelernt / initialisiert (FC 10) |
| 0xD507 | PT-CAN Kommunikationsfehler (FC 41) |
| 0xD514 | Botschaft vom PT-CAN (Motordaten, ID=1D0h) (FC 48) |
| 0xD515 | Botschaft vom PT-CAN (Lenkradwinkel oben, ID=0C4h) (FC 37) |
| 0xD516 | Botschaft vom PT-CAN (Klemmenstatus, ID=130h) (FC 42) |
| 0xD517 | Botschaft vom PT-CAN (Geschwindigkeit, ID=1A0h) (FC 47) |
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
| 0x5D0C | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x5D0E | StandardBlock | 0xf7 | AmbCondBlock3 | - |
| 0x5D12 | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x5D14 | StandardBlock | 0xf7 | AmbCondBlock9 | - |
| 0x5D15 | StandardBlock | 0xf7 | AmbCondBlock3 | - |
| 0x5D18 | StandardBlock | 0xf7 | AmbCondBlock3 | - |
| 0x5D19 | StandardBlock | 0xf7 | AmbCondBlock3 | - |
| 0x5D1A | StandardBlock | 0xf7 | AmbCondBlock4 | - |
| 0x5D1B | StandardBlock | 0xf7 | AmbCondBlock3 | - |
| 0x5D1C | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x5D1D | StandardBlock | 0xf7 | AmbCondBlock3 | - |
| 0x5D1E | StandardBlock | 0xf7 | AmbCondBlock8 | - |
| 0x5D1F | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x5D20 | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x5D21 | StandardBlock | 0xf7 | AmbCondBlock6 | - |
| 0x5D22 | StandardBlock | 0xf7 | AmbCondBlock8 | - |
| 0x5D23 | StandardBlock | 0xf7 | AmbCondBlock4 | - |
| 0x5D24 | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x5D25 | StandardBlock | 0xf7 | AmbCondBlock10 | - |
| 0x5D26 | StandardBlock | 0xf7 | AmbCondBlock11 | - |
| 0x5D27 | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x5D28 | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x5D2E | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x5D2F | StandardBlock | 0xf7 | AmbCondBlock1 | - |
| 0x5D30 | StandardBlock | 0xf7 | AmbCondBlock2 | - |
| 0x5D31 | StandardBlock | 0xf7 | AmbCondBlock4 | - |
| 0x5D32 | StandardBlock | 0xf7 | AmbCondBlock4 | - |
| 0x5D33 | StandardBlock | 0xf7 | AmbCondBlock3 | - |
| 0x5D34 | StandardBlock | 0xf7 | AmbCondBlock3 | - |
| 0x5D35 | StandardBlock | 0xf7 | AmbCondBlock3 | - |
| 0x5D36 | StandardBlock | 0xf7 | AmbCondBlock3 | - |
| 0x5D37 | StandardBlock | 0xf7 | AmbCondBlock7 | - |
| 0x5D38 | StandardBlock | 0xf7 | AmbCondBlock7 | - |
| 0x5D3A | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x5D3B | StandardBlock | 0xf7 | AmbCondBlock5 | - |
| 0x5D3C | StandardBlock | 0xf7 | AmbCondBlock7 | - |
| 0x5D3D | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x63ED | StandardBlock | 0xf7 | AmbCondBlock13 | - |
| 0x63EE | StandardBlock | 0xf7 | AmbCondBlock14 | - |
| 0x63EF | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x63F0 | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x63F1 | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x63F2 | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x63F3 | StandardBlock | 0xf7 | AmbCondBlock12 | - |
| 0x63F4 | StandardBlock | 0xf7 | AmbCondBlock12 | - |
| 0x63F5 | StandardBlock | 0xf7 | AmbCondBlock12 | - |
| 0x63F6 | StandardBlock | 0xf7 | AmbCondBlock12 | - |
| 0x63F8 | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x63F9 | StandardBlock | 0xf7 | AmbCondBlock12 | - |
| 0x63FA | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x63FC | StandardBlock_BattAb | 0xf7 | - | - |
| 0x63FD | StandardBlock | 0xf7 | AmbCondBlock15 | - |
| 0x63FE | StandardBlock | 0xf7 | AmbCondBlock13 | - |
| 0x63FF | StandardBlock | 0xf7 | AmbCondBlock14 | - |
| 0x6400 | StandardBlock | 0xf7 | AmbCondBlock15 | - |
| 0x6401 | StandardBlock | 0xf7 | AmbCondBlock3 | - |
| 0x6402 | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0xD507 | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0xD514 | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0xD515 | StandardBlock | 0xf7 | AmbCondBlock12 | - |
| 0xD516 | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0xD517 | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| default | StandardBlock | 0xf7 | AmbCondBlock0 | - |

### HUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Platzhalter | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x02 | Gefilterte Batteriespannung | V | high | unsigned int | - | 1 | 64 | 0 |
| 0x03 | Nicht gefilterte Batteriespannung | V | high | unsigned int | - | 1 | 64 | 0 |
| 0x04 | Rohwert Sin Rotorlagesensor 1 | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x05 | Rohwert Cos Rotorlagesensor 1 | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x06 | Verstärkungsfaktor Sin Rotorlagesensor 1 | - | high | unsigned int | - | 80 | 1024 | 0 |
| 0x07 | Verstärkungsfaktor Cos Rotorlagesensor 1 | - | high | unsigned int | - | 80 | 1024 | 0 |
| 0x08 | Status Rotorlagesensor 1 | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x09 | Gefilterte Temperatur | °C | - | unsigned char | - | 1 | 1 | -70 |
| 0x0a | Rohwert Sin Rotorlagesensor 2 | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x0b | Rohwert Cos Rotorlagesensor 2 | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x0c | Verstärkungsfaktor Sin Rotorlagesensor 2 | - | high | unsigned int | - | 80 | 1024 | 0 |
| 0x0d | Verstärkungsfaktor Cos Rotorlagesensor 2 | - | high | unsigned int | - | 80 | 1024 | 0 |
| 0x0e | Status Rotorlagesensor 2 | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x0f | Motorstrom Phase 1 | A | high | signed int | - | 1 | 64 | 0 |
| 0x10 | Motorstrom Phase 2 | A | high | signed int | - | 1 | 64 | 0 |
| 0x11 | Motorstrom Phase 3 | A | high | signed int | - | 1 | 64 | 0 |
| 0x12 | Status Einschalten und Test Endstufe | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x13 | ASIC Register RequLo | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x14 | aktuelle Priorität PWM Koordinator | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x15 | ASIC Register LWS Status | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x16 | ASIC Register DIA1 | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x17 | ASIC Register DIA2 | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x18 | ASIC Register MR2 State | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x19 | interne ECU Spannung 1V5 | V | high | unsigned int | - | 1 | 64 | 0 |
| 0x1a | Adresse der fehlerhaften ROM Sektion | - | high | signed long | - | 1 | 1 | 0 |
| 0x1b | Adresse der fehlerhaften RAM Zelle | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x1c | Position der fehlerhaften RAM Zelle | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x1d | Nummer der fehlerhaften dynamischen Watchdogantwort | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x1e | Status des Indexsensors | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x1f | Indexsignal | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x20 | Platzhalter / Dummy Größe für ErrorHandler | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x21 | Fahrzeuggeschwindigkeit | km/h | - | unsigned char | - | 1 | 1 | 0 |
| 0x22 | Systemstatus | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x23 | Lenkmoment | Nm | high | signed int | - | 1 | 68 | 0 |
| 0x24 | Begrenztes Motorsollmoment | Nm | high | signed int | - | 1 | 1024 | 0 |
| 0x25 | Identifikationswert Level1 | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x26 | originaler Vergleichswert Level1 | - | high | signed int | - | 1 | 1 | 0 |
| 0x27 | negierter Vergleichswert Level1 | - | high | signed int | - | 1 | 1 | 0 |
| 0x28 | max. Differenz zw. originalem und neg. Vergleichswert | - | high | signed int | - | 1 | 1 | 0 |
| 0x29 | min. Differenz zw. originalem und neg. Vergleichswert | - | high | signed int | - | 1 | 1 | 0 |
| 0x2a | Identifikationswert Level2 | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x2b | Rotorgeschwindigkeit | 1/min | high | signed int | - | 1 | 1 | 0 |
| 0x2c | Interner Lenkwinkel | ° | high | signed int | - | 1 | 10 | 0 |
| 0x2d | Nicht gefilterte Batteriespannung (8 Bit Auflösung) | V | - | unsigned char | - | 1 | 10 | 0 |
| 0x2e | Status der Zustandsmaschine des internen Lenkwinkels | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x2f | Winkelwert Rotorlage +/-90° | ° | high | signed int | - | 180 | 2048 | 0 |
| 0x30 | Gültigkeit der Signale Berechneter Lenkwinkel | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x31 | Diagnosestatus PASA (Momentensensortreiber) | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x32 | Diagnosestatus PASB (Momentensensortreiber) | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x33 | Versorgungsspannung PASA Sensor | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x34 | Versorgungsspannung PASB Sensor | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x35 | ID der defekten EEPROM Area | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x36 | Registerüberwachung: Adresse fehlerhaftes Register | - | high | signed long | - | 1 | 1 | 0 |
| 0x37 | Klemme 15 (Zündung berechnet) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x38 | Reduktionsfaktor Motormoment | - | high | unsigned int | - | 100 | 32768 | 0 |
| 0x39 | gefilterter Lenkwinkel aus Raddrehzahlen | - | high | unsigned int | - | 1 | 22857 | 0 |
| 0x3a | Status der Plausibilisierung über Raddrehzahlen | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x3b | Fahrzeugmotor-Drehzahl (tn-Signal) | 1/min | high | unsigned int | - | 1 | 1 | 0 |
| 0x3c | Fahrzeuggeschwindigkeit gefiltert | km/h | - | unsigned char | - | 1 | 1 | 0 |
| 0x3d | BusOff Status | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x3e | Zustände der CAN-Sensorgrößen | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x3f | RAM-Adresse mit Fehler bei redundanter Ablage | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x40 | Zuordnung zu einer Task bei Stackfehler | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x41 | Aktivierungszeit der 1 ms Task | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x42 | Aktivierungszeit der 10 ms Task | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x43 | Aktivierungszeit der 100 ms Task | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x44 | Radius Lenkmomentsensor (Main) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x45 | Radius Lenkmomentsensor (Backup) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x46 | Lenkmoment Backupsensor (Notlaufmoment) | Nm | high | signed int | - | 1 | 68 | 0 |
| 0x47 | Sinuswert Lenkmomentsensor Main | - | high | signed int | - | 100 | 1024 | 0 |
| 0x48 | Sinuswert Lenkmomentsensor Backup | - | high | signed int | - | 100 | 1024 | 0 |
| 0x49 | Cosinuswert Lenkmomentsensor Main | - | high | signed int | - | 100 | 1024 | 0 |
| 0x4a | Cosinuswert Lenkmomentsensor Backup | - | high | signed int | - | 100 | 1024 | 0 |
| 0x4b | Sinuswert des zuletzt aktiven Lenkmomentsensors | - | high | signed int | - | 100 | 1024 | 0 |
| 0x4c | Cosinuswert des zuletzt aktiven Lenkmomentsensors | - | high | signed int | - | 100 | 1024 | 0 |
| 0x4d | Radius des zuletzt aktiven Lenkmomentsensors | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x4e | Lenkmoment berechnet aus dem zuletzt aktiven Lenkmomentsensor | Nm | high | signed int | - | 1 | 68 | 0 |
| 0x4f | Diagnosestatus des zuletzt aktiven Lenkomentensensortreiber | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x50 | Versorgungsspannung des zuletzt aktiven PAS Sensor | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x51 | Adresse der fehlerhaften RAM Adresse | - | high | signed long | - | 1 | 1 | 0 |
| 0x53 | Adresse der fehlerhaften RAM Zelle | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x54 | Position der fehlerhaften RAM Zelle | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x55 | Adresse der fehlerhaften ROM Zelle | - | high | signed long | - | 1 | 1 | 0 |
| 0x56 | Endstufenspannung | V | high | unsigned int | - | 1 | 64 | 0 |
| 0xf7 | aktuelle Fehlerinformation im Errorhandler | - | high | unsigned char | - | 1 | 1 | 0 |
| 0xf8 | Platzhalter | - | - | signed long | - | 1 | 1 | 0 |
| 0xf9 |   | - | high | unsigned char | - | 1 | 1 | 0 |
| 0xfa | Umweltdaten beim letzten Auftreten des Fehlers: | - | high | unsigned char | - | 1 | 1 | 0 |
| 0xfb | Umweltdaten beim erstem Auftreten des Fehlers: | - | high | unsigned char | - | 1 | 1 | 0 |
| 0xfc | Kilometerstand | km | high | unsigned int | - | 1 | 1 | 0 |
| 0xfd | ZFLS Fehlercode | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xfe | ZFLS Fehlerart | - | high | unsigned int | - | 1 | 1 | 0 |
| 0xff | ohne Bedeutung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x5D0C | Rotordrehzahlgeber (Main) (FC 35) |
| 0x5D0E | Servomotorstrom (FC 17) |
| 0x5D12 | Sensor Endstufentemperatur (FC 01) |
| 0x5D14 | Fehler im Elektromotor (Wicklungen, Zuleitungen) im Drive (FC 38) |
| 0x5D15 | Sternpunktrelais (FC 27) |
| 0x5D18 | Endstufenfehler im Pre-Drive (FC 15) |
| 0x5D19 | Endstufenfehler im Drive (FC 13) |
| 0x5D1A | Interne Spannungen (1V5, 3V3, 5V0, PAS Spannungen) sind nicht korrekt (FC 19) |
| 0x5D1B | Abschaltpfad defekt (FC 18) |
| 0x5D1C | CSI 30 Kommunikationsfehler (FC 07) |
| 0x5D1D | Fehler in der ADC Messung (FC 16) |
| 0x5D1E | Tasklaufzeit (FC 61) |
| 0x5D1F | EEPROM-Fehler, nicht sicherheitskritisch (FC 31) |
| 0x5D20 | EEPROM-Fehler, sicherheitskritisch (FC 32) |
| 0x5D21 | ROM Checksumme ist nicht korekt (FC 20) |
| 0x5D22 | RAM-Fehler (FC 60) |
| 0x5D23 | Intelligenter Watchdog (FC 11) |
| 0x5D24 | Programmablauf nicht korrekt (FC 39) |
| 0x5D25 | Vergleicherfehler Level 1 (FC 66) |
| 0x5D26 | Vergleicherfehler Level 2 (FC 67) |
| 0x5D27 | Rechnerkerntest (FC 21) |
| 0x5D28 | Betriebssystem (FC 58) |
| 0x5D2E | Plausibilisierung Temperatursensor (FC 02) |
| 0x5D2F | Rotorlagesensor 1 (FC 03) |
| 0x5D30 | Rotorlagesensor 2 (FC 04) |
| 0x5D31 | Indexsensor (FC 06) |
| 0x5D32 | ASIC Cl226 (FC 08) |
| 0x5D33 | ESPR Überwachung im Drive |
| 0x5D34 | Überwachung der Differenz zwischen ESPR- und Sternpunktspannung |
| 0x5D35 | KL30 Versorgungsspannung (FC 12) |
| 0x5D36 | PWM validity check (FC 22) |
| 0x5D37 | Register Test (FC 23) |
| 0x5D38 | Endstufenversorgungsspannung (FC 24) |
| 0x5D39 | Serielle Schnittstelle CSI31 (FC 25) |
| 0x5D3A | ASIC Cl202 (FC 26) |
| 0x5D3B | Interner RAM-Fehler (FC 14) |
| 0x5D3C | Schalter für Endstufenspannungsmessung (FC 29) |
| 0x5D3D | Zündungsstatus fehlerhaft (System startet auf obwohl Zündung aus) |
| 0x63EC | Hardwarefehler Steuergeraet |
| 0x63ED | Lenkmomentensensor 1 (FC 33) |
| 0x63EE | Lenkmomentensensor 2 (FC 34) |
| 0x63EF | Rotordrehzahlgeber 1 nicht eingelernt / initialisiert (FC 9) |
| 0x63F0 | Lenkradwinkel Plausibilisierung 1 (FC 64) |
| 0x63F1 | Lenkradwinkel Plausibilisierung 2 (FC 36) |
| 0x63F2 | Klemmenstatus Plausibilisierung (FC 44) |
| 0x63F3 | Abschaltung aufgrund Versorgungsspannung (FC 59) |
| 0x63F4 | Reduzierung aufgrund Übertemperatur (FC 55) |
| 0x63F5 | Reduzierung aufgrund Versorgungsspannung (FC 56) |
| 0x63F6 | Reduzierung aufgrund Überlastung (FC 57) |
| 0x63F8 | SW-Endanschlag (FC 52) |
| 0x63F9 | Reduzierung aufgrund Rattererkennung (FC 54) |
| 0x63FA | Reibung in Lenkgetriebe |
| 0x63FC | Batterie ab Erkennung (FC 62) |
| 0x63FD | Lenkmomentsensorfehler aller Sensoren (FC 63) |
| 0x63FE | Radiusfehler Lenkmomentsensor1 (FC 80) |
| 0x63FF | Radiusfehler Lenkmomentsensor2 (FC 81) |
| 0x6400 | Radiusfehler aller Lenkmomentsensoren (FC 82) |
| 0x6401 | Reduzierung aufgrund Endstufenfehler (FC 65) |
| 0x6402 | Rotordrehzahlgeber 2 nicht eingelernt / initialisiert (FC 10) |
| 0xD507 | PT-CAN Kommunikationsfehler (FC 41) |
| 0xD514 | Botschaft vom PT-CAN (Motordaten, ID=1D0h) (FC 48) |
| 0xD515 | Botschaft vom PT-CAN (Lenkradwinkel oben, ID=0C4h) (FC 37) |
| 0xD516 | Botschaft vom PT-CAN (Klemmenstatus, ID=130h) (FC 42) |
| 0xD517 | Botschaft vom PT-CAN (Geschwindigkeit, ID=1A0h) (FC 47) |
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
| 0x5D0C | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x5D0E | StandardBlock | 0xf7 | AmbCondBlock3 | - |
| 0x5D12 | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x5D14 | StandardBlock | 0xf7 | AmbCondBlock9 | - |
| 0x5D15 | StandardBlock | 0xf7 | AmbCondBlock3 | - |
| 0x5D18 | StandardBlock | 0xf7 | AmbCondBlock3 | - |
| 0x5D19 | StandardBlock | 0xf7 | AmbCondBlock3 | - |
| 0x5D1A | StandardBlock | 0xf7 | AmbCondBlock4 | - |
| 0x5D1B | StandardBlock | 0xf7 | AmbCondBlock3 | - |
| 0x5D1C | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x5D1D | StandardBlock | 0xf7 | AmbCondBlock3 | - |
| 0x5D1E | StandardBlock | 0xf7 | AmbCondBlock8 | - |
| 0x5D1F | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x5D20 | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x5D21 | StandardBlock | 0xf7 | AmbCondBlock6 | - |
| 0x5D22 | StandardBlock | 0xf7 | AmbCondBlock8 | - |
| 0x5D23 | StandardBlock | 0xf7 | AmbCondBlock4 | - |
| 0x5D24 | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x5D25 | StandardBlock | 0xf7 | AmbCondBlock10 | - |
| 0x5D26 | StandardBlock | 0xf7 | AmbCondBlock11 | - |
| 0x5D27 | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x5D28 | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x5D2E | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x5D2F | StandardBlock | 0xf7 | AmbCondBlock1 | - |
| 0x5D30 | StandardBlock | 0xf7 | AmbCondBlock2 | - |
| 0x5D31 | StandardBlock | 0xf7 | AmbCondBlock4 | - |
| 0x5D32 | StandardBlock | 0xf7 | AmbCondBlock4 | - |
| 0x5D33 | StandardBlock | 0xf7 | AmbCondBlock3 | - |
| 0x5D34 | StandardBlock | 0xf7 | AmbCondBlock3 | - |
| 0x5D35 | StandardBlock | 0xf7 | AmbCondBlock3 | - |
| 0x5D36 | StandardBlock | 0xf7 | AmbCondBlock3 | - |
| 0x5D37 | StandardBlock | 0xf7 | AmbCondBlock7 | - |
| 0x5D38 | StandardBlock | 0xf7 | AmbCondBlock7 | - |
| 0x5D3A | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x5D3B | StandardBlock | 0xf7 | AmbCondBlock5 | - |
| 0x5D3C | StandardBlock | 0xf7 | AmbCondBlock7 | - |
| 0x5D3D | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x63ED | StandardBlock | 0xf7 | AmbCondBlock13 | - |
| 0x63EE | StandardBlock | 0xf7 | AmbCondBlock14 | - |
| 0x63EF | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x63F0 | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x63F1 | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x63F2 | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x63F3 | StandardBlock | 0xf7 | AmbCondBlock12 | - |
| 0x63F4 | StandardBlock | 0xf7 | AmbCondBlock12 | - |
| 0x63F5 | StandardBlock | 0xf7 | AmbCondBlock12 | - |
| 0x63F6 | StandardBlock | 0xf7 | AmbCondBlock12 | - |
| 0x63F8 | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x63F9 | StandardBlock | 0xf7 | AmbCondBlock12 | - |
| 0x63FA | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0x63FC | StandardBlock_BattAb | 0xf7 | - | - |
| 0x63FD | StandardBlock | 0xf7 | AmbCondBlock15 | - |
| 0x63FE | StandardBlock | 0xf7 | AmbCondBlock13 | - |
| 0x63FF | StandardBlock | 0xf7 | AmbCondBlock14 | - |
| 0x6400 | StandardBlock | 0xf7 | AmbCondBlock15 | - |
| 0x6401 | StandardBlock | 0xf7 | AmbCondBlock3 | - |
| 0x6402 | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0xD507 | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0xD514 | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0xD515 | StandardBlock | 0xf7 | AmbCondBlock12 | - |
| 0xD516 | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| 0xD517 | StandardBlock | 0xf7 | AmbCondBlock0 | - |
| default | StandardBlock | 0xf7 | AmbCondBlock0 | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Platzhalter | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x02 | Gefilterte Batteriespannung | V | high | unsigned int | - | 1 | 64 | 0 |
| 0x03 | Nicht gefilterte Batteriespannung | V | high | unsigned int | - | 1 | 64 | 0 |
| 0x04 | Rohwert Sin Rotorlagesensor 1 | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x05 | Rohwert Cos Rotorlagesensor 1 | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x06 | Verstärkungsfaktor Sin Rotorlagesensor 1 | - | high | unsigned int | - | 80 | 1024 | 0 |
| 0x07 | Verstärkungsfaktor Cos Rotorlagesensor 1 | - | high | unsigned int | - | 80 | 1024 | 0 |
| 0x08 | Status Rotorlagesensor 1 | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x09 | Gefilterte Temperatur | °C | - | unsigned char | - | 1 | 1 | -70 |
| 0x0a | Rohwert Sin Rotorlagesensor 2 | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x0b | Rohwert Cos Rotorlagesensor 2 | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x0c | Verstärkungsfaktor Sin Rotorlagesensor 2 | - | high | unsigned int | - | 80 | 1024 | 0 |
| 0x0d | Verstärkungsfaktor Cos Rotorlagesensor 2 | - | high | unsigned int | - | 80 | 1024 | 0 |
| 0x0e | Status Rotorlagesensor 2 | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x0f | Motorstrom Phase 1 | A | high | signed int | - | 1 | 64 | 0 |
| 0x10 | Motorstrom Phase 2 | A | high | signed int | - | 1 | 64 | 0 |
| 0x11 | Motorstrom Phase 3 | A | high | signed int | - | 1 | 64 | 0 |
| 0x12 | Status Einschalten und Test Endstufe | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x13 | ASIC Register RequLo | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x14 | aktuelle Priorität PWM Koordinator | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x15 | ASIC Register LWS Status | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x16 | ASIC Register DIA1 | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x17 | ASIC Register DIA2 | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x18 | ASIC Register MR2 State | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x19 | interne ECU Spannung 1V5 | V | high | unsigned int | - | 1 | 64 | 0 |
| 0x1a | Adresse der fehlerhaften ROM Sektion | - | high | signed long | - | 1 | 1 | 0 |
| 0x1b | Adresse der fehlerhaften RAM Zelle | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x1c | Position der fehlerhaften RAM Zelle | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x1d | Nummer der fehlerhaften dynamischen Watchdogantwort | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x1e | Status des Indexsensors | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x1f | Indexsignal | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x20 | Platzhalter / Dummy Größe für ErrorHandler | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x21 | Fahrzeuggeschwindigkeit | km/h | - | unsigned char | - | 1 | 1 | 0 |
| 0x22 | Systemstatus | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x23 | Lenkmoment | Nm | high | signed int | - | 1 | 68 | 0 |
| 0x24 | Begrenztes Motorsollmoment | Nm | high | signed int | - | 1 | 1024 | 0 |
| 0x25 | Identifikationswert Level1 | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x26 | originaler Vergleichswert Level1 | - | high | signed int | - | 1 | 1 | 0 |
| 0x27 | negierter Vergleichswert Level1 | - | high | signed int | - | 1 | 1 | 0 |
| 0x28 | max. Differenz zw. originalem und neg. Vergleichswert | - | high | signed int | - | 1 | 1 | 0 |
| 0x29 | min. Differenz zw. originalem und neg. Vergleichswert | - | high | signed int | - | 1 | 1 | 0 |
| 0x2a | Identifikationswert Level2 | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x2b | Rotorgeschwindigkeit | 1/min | high | signed int | - | 1 | 1 | 0 |
| 0x2c | Interner Lenkwinkel | ° | high | signed int | - | 1 | 10 | 0 |
| 0x2d | Nicht gefilterte Batteriespannung (8 Bit Auflösung) | V | - | unsigned char | - | 1 | 10 | 0 |
| 0x2e | Status der Zustandsmaschine des internen Lenkwinkels | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x2f | Winkelwert Rotorlage +/-90° | ° | high | signed int | - | 180 | 2048 | 0 |
| 0x30 | Gültigkeit der Signale Berechneter Lenkwinkel | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x31 | Diagnosestatus PASA (Momentensensortreiber) | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x32 | Diagnosestatus PASB (Momentensensortreiber) | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x33 | Versorgungsspannung PASA Sensor | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x34 | Versorgungsspannung PASB Sensor | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x35 | ID der defekten EEPROM Area | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x36 | Registerüberwachung: Adresse fehlerhaftes Register | - | high | signed long | - | 1 | 1 | 0 |
| 0x37 | Klemme 15 (Zündung berechnet) | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x38 | Reduktionsfaktor Motormoment | - | high | unsigned int | - | 100 | 32768 | 0 |
| 0x39 | gefilterter Lenkwinkel aus Raddrehzahlen | - | high | unsigned int | - | 1 | 22857 | 0 |
| 0x3a | Status der Plausibilisierung über Raddrehzahlen | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x3b | Fahrzeugmotor-Drehzahl (tn-Signal) | 1/min | high | unsigned int | - | 1 | 1 | 0 |
| 0x3c | Fahrzeuggeschwindigkeit gefiltert | km/h | - | unsigned char | - | 1 | 1 | 0 |
| 0x3d | BusOff Status | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x3e | Zustände der CAN-Sensorgrößen | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x3f | RAM-Adresse mit Fehler bei redundanter Ablage | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x40 | Zuordnung zu einer Task bei Stackfehler | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x41 | Aktivierungszeit der 1 ms Task | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x42 | Aktivierungszeit der 10 ms Task | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x43 | Aktivierungszeit der 100 ms Task | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x44 | Radius Lenkmomentsensor (Main) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x45 | Radius Lenkmomentsensor (Backup) | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x46 | Lenkmoment Backupsensor (Notlaufmoment) | Nm | high | signed int | - | 1 | 68 | 0 |
| 0x47 | Sinuswert Lenkmomentsensor Main | - | high | signed int | - | 100 | 1024 | 0 |
| 0x48 | Sinuswert Lenkmomentsensor Backup | - | high | signed int | - | 100 | 1024 | 0 |
| 0x49 | Cosinuswert Lenkmomentsensor Main | - | high | signed int | - | 100 | 1024 | 0 |
| 0x4a | Cosinuswert Lenkmomentsensor Backup | - | high | signed int | - | 100 | 1024 | 0 |
| 0x4b | Sinuswert des zuletzt aktiven Lenkmomentsensors | - | high | signed int | - | 100 | 1024 | 0 |
| 0x4c | Cosinuswert des zuletzt aktiven Lenkmomentsensors | - | high | signed int | - | 100 | 1024 | 0 |
| 0x4d | Radius des zuletzt aktiven Lenkmomentsensors | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x4e | Lenkmoment berechnet aus dem zuletzt aktiven Lenkmomentsensor | Nm | high | signed int | - | 1 | 68 | 0 |
| 0x4f | Diagnosestatus des zuletzt aktiven Lenkomentensensortreiber | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x50 | Versorgungsspannung des zuletzt aktiven PAS Sensor | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x51 | Adresse der fehlerhaften RAM Adresse | - | high | signed long | - | 1 | 1 | 0 |
| 0x53 | Adresse der fehlerhaften RAM Zelle | - | high | unsigned int | - | 1 | 1 | 0 |
| 0x54 | Position der fehlerhaften RAM Zelle | - | high | unsigned char | - | 1 | 1 | 0 |
| 0x55 | Adresse der fehlerhaften ROM Zelle | - | high | signed long | - | 1 | 1 | 0 |
| 0x56 | Endstufenspannung | V | high | unsigned int | - | 1 | 64 | 0 |
| 0xf7 | aktuelle Fehlerinformation im Errorhandler | - | high | unsigned char | - | 1 | 1 | 0 |
| 0xf8 | Platzhalter | - | - | signed long | - | 1 | 1 | 0 |
| 0xf9 |   | - | high | unsigned char | - | 1 | 1 | 0 |
| 0xfa | Umweltdaten beim letzten Auftreten des Fehlers: | - | high | unsigned char | - | 1 | 1 | 0 |
| 0xfb | Umweltdaten beim erstem Auftreten des Fehlers: | - | high | unsigned char | - | 1 | 1 | 0 |
| 0xfc | Kilometerstand | km | high | unsigned int | - | 1 | 1 | 0 |
| 0xfd | ZFLS Fehlercode | - | - | unsigned char | - | 1 | 1 | 0 |
| 0xfe | ZFLS Fehlerart | - | high | unsigned int | - | 1 | 1 | 0 |
| 0xff | ohne Bedeutung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### AMBCONDBLOCK0

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 3 | 34 | 9 | 35 | 36 | 1 | 1 | 248 |

### AMBCONDBLOCK1

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | 3 | 34 | 9 | 4 | 5 | 6 | 7 | 8 | 1 |

### AMBCONDBLOCK2

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | 3 | 34 | 9 | 10 | 11 | 12 | 13 | 14 | 1 |

### AMBCONDBLOCK3

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | 3 | 34 | 9 | 15 | 16 | 17 | 18 | 19 | 20 | 1 |

### AMBCONDBLOCK4

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 11 | 3 | 34 | 9 | 21 | 22 | 23 | 24 | 19 | 25 | 29 | 1 |

### AMBCONDBLOCK5

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | 3 | 34 | 9 | 81 | 83 | 84 | 1 | 1 | 1 |

### AMBCONDBLOCK6

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 3 | 34 | 9 | 26 | 85 | 1 | 1 |

### AMBCONDBLOCK7

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 3 | 34 | 9 | 54 | 86 | 248 |

### AMBCONDBLOCK8

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | 3 | 34 | 9 | 53 | 63 | 64 | 65 | 66 | 67 |

### AMBCONDBLOCK9

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 3 | 34 | 9 | 36 | 35 | 43 | 15 | 16 |

### AMBCONDBLOCK10

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | 1 | 34 | 9 | 37 | 38 | 39 | 40 | 41 | 1 |

### AMBCONDBLOCK11

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | 1 | 34 | 9 | 42 | 35 | 36 | 43 | 44 | 1 |

### AMBCONDBLOCK12

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | 1 | 34 | 9 | 44 | 47 | 58 | 248 | 1 | 1 |

### AMBCONDBLOCK13

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | 1 | 34 | 9 | 71 | 73 | 35 | 68 | 49 | 51 | 1 |

### STANDARDBLOCK

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x21 | 0x37 | 0x02 | 0xfd | 0xfe |

### ZWEITER_BLOCK

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 0xf9 | 0xfb | 0xfc | 0x3f | 0x35 | 0x0c | 0x0d |

### AMBCONDBLOCK14

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | 1 | 34 | 9 | 72 | 74 | 70 | 69 | 50 | 52 | 1 |

### AMBCONDBLOCK15

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | 1 | 34 | 9 | 75 | 76 | 78 | 77 | 79 | 80 | 1 |

### STANDARDBLOCK_BATTAB

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0xfd | 0xfe |
