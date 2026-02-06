# SZL_56.prg

## General

|  |  |
| --- | --- |
| File | SZL_56.prg |
| Type | PRG |
| Jobs | 51 |
| Tables | 22 |
| Origin | MSF EEK-E Krenn |
| Revision | 1.001 |
| Author | Valeo TS Wigger |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Schaltzentrum Lenksäule / Lenkwinkelsensor  |  |  |
| ORIGIN | string | MSF EEK-E Krenn |  |  |
| REVISION | string | 1.001 |  |  |
| AUTHOR | string | Valeo TS Wigger |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.29 |  |  |
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

### STATUS_LENKSTOCK

Status der Lenkstock-Funktionen

_No arguments._

### STATUS_TASTER_LENKRAD

Status der einzelnen Tasten am Lenkrad

_No arguments._

### STATUS_LENKWINKELSENSOR

Status des Lenkwinkelsensors (nur fuer Variante mit Lenkwinkelsensor)

_No arguments._

### STATUS_BLINKERRUECKSTELLUNG

Status der Blinkerrueckstellung (nur fuer Variante ohne Lenkwinkelsensor)

_No arguments._

### STATUS_CAN_SIGNALE

Status der empfangenen CAN-Signale

_No arguments._

### STATUS_SOFTWARE_BUILD_INFO

Auslesen der Software Build Informationen

_No arguments._

### STATUS_LENKSTOCK_INTERN

Interner Status der Lenkstock-Funktionen

_No arguments._

### STATUS_TASTER_LENKRAD_INTERN

Interner Status der einzelnen Tasten am Lenkrad

_No arguments._

### STATUS_LENKWINKELSENSOR_INTERN

Interner Status des Lenkwinkelsensors (nur fuer Variante mit Lenkwinkelsensor)

_No arguments._

### STATUS_BLINKERRUECKSTELLUNG_INTERN

Interner Status der Blinkerrueckstellung (nur fuer Variante ohne Lenkwinkelsensor)

_No arguments._

### STATUS_LWS_NULLPUNKT_OFFSET

Auslesen des Offsets vom Nullpunkt-Abgleich des Lenkwinkelsensors (nur fuer Variante mit Lenkwinkelsensor)

_No arguments._

### STATUS_LWS_SERIENNUMMER

Auslesen der Seriennummer des Lenkwinkelsensors

_No arguments._

### STATUS_LWS_HALL_SKALIERUNG

Auslesen der Skalierungsfaktoren der Hall-Elemente des Lenkwinkelsensors (nur fuer Variante mit Lenkwinkelsensor)

_No arguments._

### STEUERN_LWS_ABGLEICH

Abgleichen des Lenkwinkelsensors bei Lenkrad-Geradeausstellung (nur fuer Variante mit Lenkwinkelsensor) Vorbedingungen fuer Abgleich: - Aktueller Lenkwinkel im Bereich -15 Grad bis +15 Grad - Alle gueltigen Radgeschwindigkeiten gleich 0 km/h - Hoechstens eine Radgeschwindigkeit ist ungueltig

| Name | Type | Description |
| --- | --- | --- |
| JOB_INFO_GELESEN | string | Dient nur zur Sicherheit, wird nicht im Telegramm verwendet "start" -> Job ausfuehren |

### STEUERN_LWS_ABGLEICH_RUECKSETZEN

Abgleichwert wird zurueckgesetzt (nur fuer Variante mit Lenkwinkelsensor) Ist bei R56 vor einem erneuten Abgleich nicht notwendig Dient nur zur Verwendung in der Valeo Fertigung

| Name | Type | Description |
| --- | --- | --- |
| JOB_INFO_GELESEN | string | Dient nur zur Sicherheit, wird nicht im Telegramm verwendet "start" -> Job ausfuehren |

### STEUERN_MC2_FLASH_SCHREIBEN

Programmcode des MC-2 von MC-1 nach MC-2 schreiben (nur fuer Variante mit Lenkwinkelsensor)

| Name | Type | Description |
| --- | --- | --- |
| JOB_INFO_GELESEN | string | Dient nur zur Sicherheit, wird nicht im Telegramm verwendet "start" -> Job ausfuehren |

### _STATUS_FEHLER_LESEN_INTERN

Auslesen der internen Fehlercodes und -zaehler

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
| 0x72 | ASIN AWCO.LTD |
| 0x73 | Shorlock |
| 0x74 | Schrader |
| 0x75 | BERU Electronics GmbH |
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
| - | KWP2000* |
| - | KWP2000 |
| - | DS2 |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x9E28 | SG interner Fehler |
| 0x9E29 | Lenkradwinkel |
| 0x9E2A | Lenkradwinkelgeschwindigkeit |
| 0x9E2C | Multifunktionslenkrad (MFL) - Timeout Telegramm |
| 0x9E2D | Multifunktionslenkrad (MFL) - Togglebitfehler |
| 0x9E2E | Multifunktionslenkrad (MFL) - Timeout Geraetestatus |
| 0x9E2F | PT-CAN Weckleitung - Plausibilitaetsfehler |
| 0x9E30 | Ueberspannung |
| 0x9E31 | Unterspannung |
| 0x9E32 | Flash-Download fuer MC-2 erforderlich |
| 0x9E33 | Nullpunktabgleich fuer Lenkwinkelsensor erforderlich |
| 0xC987 | Bus Kommunikationsfehler (PT-CAN) |
| 0xC98B | Bus Kommunikationsfehler (F-CAN) |
| 0xC994 | Botschaft (Klemmenstatus, 130h) |
| 0xC995 | Signal (ST_KL_15) |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | nein |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### STAT_LENKSTOCK_WISCHER

| WERT | VSWERT | STATUS_TEXT |
| --- | --- | --- |
| 0x00 | 0 | Lenkstock Wischer in Nullstellung |
| 0x08 | 1 | Tippwischen betaetigt |
| 0x02 | 2 | Lenkstock Wischer in Stufe 1 betaetigt |
| 0x03 | 3 | Lenkstock Wischer in Stufe 2 betaetigt |
| 0x10 | 4 | Frontwaschen betaetigt |
| 0x01 | 5 | Lenkstock Wischer in Stellung Intervall |
| 0x40 | 6 | Heckwischen betaetigt |
| 0x80 | 7 | Heckwaschen betaetigt |
| 0x?? | 8 | Mehrfachbetaetigung |

### STAT_MFL1

| WERT | VSWERT | STATUS_TEXT |
| --- | --- | --- |
| 0x00 | 0 | Keine Betaetigung |
| 0x40 | 1 | Push to talk betaetigt |
| 0x08 | 2 | Volume/Lautstaerke plus betaetigt |
| 0x04 | 3 | Volume/Lautstaerke minus betaetigt |
| 0x01 | 4 | Telefontaste betaetigt |
| 0x?? | 5 | Mehrfachbetaetigung |

### STAT_MFL2

| WERT | VSWERT | STATUS_TEXT |
| --- | --- | --- |
| 0x00 | 0 | Keine Betaetigung |
| 0x20 | 3 | Suchlauf auf betaetigt |
| 0x10 | 4 | Suchlauf ab betaetigt |
| 0x?? | 5 | Mehrfachbetaetigung |

### STAT_LENKWINKEL

| WERT | VSWERT | STATUS_TEXT |
| --- | --- | --- |
| 0x02 | 0 | Fehlerhaft |
| 0x00 | 1 | Absolut |
| 0x?? | 2 | Relativ |
| 0x03 | 3 | Ungueltig |
| 0xFF | 255 | Unbekannter Status |

### SG_ENCODERPOSITION

| ENC_NR | ENC_TEXT |
| --- | --- |
| 0x0013 |  -21.0 Grad |
| 0x001B |  -22.5 Grad |
| 0x0026 | -129.0 Grad |
| 0x0027 | -130.5 Grad |
| 0x003B |  -24.0 Grad |
| 0x004C |   24.0 Grad |
| 0x004D |   22.5 Grad |
| 0x0067 | -132.0 Grad |
| 0x0082 |   -4.5 Grad |
| 0x008A |   -3.0 Grad |
| 0x00A2 |   -6.0 Grad |
| 0x00CD |   21.0 Grad |
| 0x0108 |    1.5 Grad |
| 0x010A |    0.0 Grad |
| 0x0135 |  -45.0 Grad |
| 0x0137 |  -43.5 Grad |
| 0x0139 |  -27.0 Grad |
| 0x013B |  -25.5 Grad |
| 0x0157 | -151.5 Grad |
| 0x015F | -153.0 Grad |
| 0x0175 |  -46.5 Grad |
| 0x017F | -154.5 Grad |
| 0x018A |   -1.5 Grad |
| 0x018C |  106.5 Grad |
| 0x0193 |  126.0 Grad |
| 0x0198 |  109.5 Grad |
| 0x019B |  127.5 Grad |
| 0x019C |  108.0 Grad |
| 0x01B3 |  124.5 Grad |
| 0x01B9 |  -28.5 Grad |
| 0x0201 |  -16.5 Grad |
| 0x0203 |  -18.0 Grad |
| 0x0213 |  -19.5 Grad |
| 0x0263 | -135.0 Grad |
| 0x0267 | -133.5 Grad |
| 0x026C | -108.0 Grad |
| 0x026E | -106.5 Grad |
| 0x0273 | -136.5 Grad |
| 0x0280 |   34.5 Grad |
| 0x02A0 |   36.0 Grad |
| 0x02A6 | -180.0 Grad |
| 0x02A8 |   37.5 Grad |
| 0x02AE | -178.5 Grad |
| 0x02E6 |  178.5 Grad |
| 0x02EC | -109.5 Grad |
| 0x0315 | -147.0 Grad |
| 0x0317 | -148.5 Grad |
| 0x0318 |  112.5 Grad |
| 0x0319 |  114.0 Grad |
| 0x0328 |   40.5 Grad |
| 0x032A |   42.0 Grad |
| 0x0357 | -150.0 Grad |
| 0x035D |  -51.0 Grad |
| 0x0375 |  -48.0 Grad |
| 0x037D |  -49.5 Grad |
| 0x0391 |  -33.0 Grad |
| 0x0398 |  111.0 Grad |
| 0x03A8 |   39.0 Grad |
| 0x03B1 |  -31.5 Grad |
| 0x03B7 |  -76.5 Grad |
| 0x03B9 |  -30.0 Grad |
| 0x03BF |  -75.0 Grad |
| 0x03F7 |  -78.0 Grad |
| 0x0402 | -124.5 Grad |
| 0x0406 | -126.0 Grad |
| 0x0426 | -127.5 Grad |
| 0x04C6 |  162.0 Grad |
| 0x04C9 |   18.0 Grad |
| 0x04CD |   19.5 Grad |
| 0x04CE |  163.5 Grad |
| 0x04D9 |   16.5 Grad |
| 0x04E6 |  160.5 Grad |
| 0x0519 |  132.0 Grad |
| 0x051B |  130.5 Grad |
| 0x057E | -157.5 Grad |
| 0x057F | -156.0 Grad |
| 0x059B |  129.0 Grad |
| 0x05D7 |  -58.5 Grad |
| 0x05DF |  -57.0 Grad |
| 0x05F7 |  -60.0 Grad |
| 0x05FE | -159.0 Grad |
| 0x062A | -174.0 Grad |
| 0x062E | -175.5 Grad |
| 0x0631 | -141.0 Grad |
| 0x064C |  168.0 Grad |
| 0x064E |  166.5 Grad |
| 0x0671 | -139.5 Grad |
| 0x0673 | -138.0 Grad |
| 0x067D |  148.5 Grad |
| 0x067F |  150.0 Grad |
| 0x06A2 |  -96.0 Grad |
| 0x06AE | -177.0 Grad |
| 0x06C4 | -114.0 Grad |
| 0x06CE |  165.0 Grad |
| 0x06E2 |  -94.5 Grad |
| 0x06E4 | -112.5 Grad |
| 0x06EA |  -93.0 Grad |
| 0x06EC | -111.0 Grad |
| 0x06FD |  147.0 Grad |
| 0x0715 | -145.5 Grad |
| 0x0731 | -142.5 Grad |
| 0x0735 | -144.0 Grad |
| 0x073B |  -70.5 Grad |
| 0x073F |  -72.0 Grad |
| 0x075D |  -52.5 Grad |
| 0x075F |  -54.0 Grad |
| 0x076A |  -90.0 Grad |
| 0x076E |  -88.5 Grad |
| 0x07BF |  -73.5 Grad |
| 0x07D5 |  142.5 Grad |
| 0x07DF |  -55.5 Grad |
| 0x07E6 | -163.5 Grad |
| 0x07EA |  -91.5 Grad |
| 0x07F5 |  144.0 Grad |
| 0x07F6 | -162.0 Grad |
| 0x07FD |  145.5 Grad |
| 0x07FE | -160.5 Grad |
| 0x0804 |   28.5 Grad |
| 0x080C |   27.0 Grad |
| 0x0820 |  -10.5 Grad |
| 0x084C |   25.5 Grad |
| 0x08A0 |   -9.0 Grad |
| 0x08A2 |   -7.5 Grad |
| 0x08AE |   64.5 Grad |
| 0x08AF |   63.0 Grad |
| 0x08CA |   99.0 Grad |
| 0x08CE |  100.5 Grad |
| 0x08EA |   97.5 Grad |
| 0x08EF |   61.5 Grad |
| 0x0908 |    3.0 Grad |
| 0x0910 |    6.0 Grad |
| 0x0913 |  -39.0 Grad |
| 0x0917 |  -40.5 Grad |
| 0x0918 |    4.5 Grad |
| 0x0931 |  120.0 Grad |
| 0x0937 |  -42.0 Grad |
| 0x098C |  105.0 Grad |
| 0x098E |  103.5 Grad |
| 0x09B1 |  121.5 Grad |
| 0x09B3 |  123.0 Grad |
| 0x09CE |  102.0 Grad |
| 0x0A01 |  -15.0 Grad |
| 0x0A04 |   30.0 Grad |
| 0x0A20 |  -12.0 Grad |
| 0x0A21 |  -13.5 Grad |
| 0x0A26 | -102.0 Grad |
| 0x0A2E | -103.5 Grad |
| 0x0A64 |  174.0 Grad |
| 0x0A6E | -105.0 Grad |
| 0x0A80 |   33.0 Grad |
| 0x0A84 |   31.5 Grad |
| 0x0ABD |   85.5 Grad |
| 0x0ABF |   87.0 Grad |
| 0x0AE4 |  175.5 Grad |
| 0x0AE6 |  177.0 Grad |
| 0x0AEB |   58.5 Grad |
| 0x0AEF |   60.0 Grad |
| 0x0AFB |   57.0 Grad |
| 0x0AFD |   84.0 Grad |
| 0x0B13 |  -37.5 Grad |
| 0x0B19 |  115.5 Grad |
| 0x0B2A |   43.5 Grad |
| 0x0B31 |  118.5 Grad |
| 0x0B32 |   46.5 Grad |
| 0x0B39 |  117.0 Grad |
| 0x0B3A |   45.0 Grad |
| 0x0B76 |  -82.5 Grad |
| 0x0B91 |  -34.5 Grad |
| 0x0B93 |  -36.0 Grad |
| 0x0BDC |   79.5 Grad |
| 0x0BF6 |  -81.0 Grad |
| 0x0BF7 |  -79.5 Grad |
| 0x0BFC |   81.0 Grad |
| 0x0BFD |   82.5 Grad |
| 0x0C02 | -123.0 Grad |
| 0x0C40 | -120.0 Grad |
| 0x0C42 | -121.5 Grad |
| 0x0C67 |  156.0 Grad |
| 0x0C8A |   69.0 Grad |
| 0x0C8E |   67.5 Grad |
| 0x0C91 |   12.0 Grad |
| 0x0CAB |   93.0 Grad |
| 0x0CAE |   66.0 Grad |
| 0x0CD1 |   13.5 Grad |
| 0x0CD9 |   15.0 Grad |
| 0x0CE6 |  159.0 Grad |
| 0x0CE7 |  157.5 Grad |
| 0x0CEA |   96.0 Grad |
| 0x0CEB |   94.5 Grad |
| 0x0D10 |    7.5 Grad |
| 0x0D19 |  133.5 Grad |
| 0x0D51 |  136.5 Grad |
| 0x0D59 |  135.0 Grad |
| 0x0D73 |  -64.5 Grad |
| 0x0D8A |   70.5 Grad |
| 0x0D90 |    9.0 Grad |
| 0x0D91 |   10.5 Grad |
| 0x0DC8 |   73.5 Grad |
| 0x0DCA |   72.0 Grad |
| 0x0DF3 |  -63.0 Grad |
| 0x0DF7 |  -61.5 Grad |
| 0x0E26 | -100.5 Grad |
| 0x0E2A | -172.5 Grad |
| 0x0E40 | -118.5 Grad |
| 0x0E4C |  169.5 Grad |
| 0x0E62 | -169.5 Grad |
| 0x0E64 |  172.5 Grad |
| 0x0E67 |  154.5 Grad |
| 0x0E6A | -171.0 Grad |
| 0x0E6C |  171.0 Grad |
| 0x0E6F |  153.0 Grad |
| 0x0E7F |  151.5 Grad |
| 0x0EA2 |  -97.5 Grad |
| 0x0EA6 |  -99.0 Grad |
| 0x0EAB |   91.5 Grad |
| 0x0EAF |   90.0 Grad |
| 0x0EB3 |   52.5 Grad |
| 0x0EBF |   88.5 Grad |
| 0x0EC0 | -117.0 Grad |
| 0x0EC4 | -115.5 Grad |
| 0x0EF3 |   54.0 Grad |
| 0x0EFB |   55.5 Grad |
| 0x0F32 |   48.0 Grad |
| 0x0F3B |  -69.0 Grad |
| 0x0F51 |  138.0 Grad |
| 0x0F62 | -168.0 Grad |
| 0x0F6E |  -87.0 Grad |
| 0x0F73 |  -66.0 Grad |
| 0x0F76 |  -84.0 Grad |
| 0x0F7B |  -67.5 Grad |
| 0x0F7E |  -85.5 Grad |
| 0x0FB2 |   49.5 Grad |
| 0x0FB3 |   51.0 Grad |
| 0x0FC8 |   75.0 Grad |
| 0x0FD1 |  139.5 Grad |
| 0x0FD5 |  141.0 Grad |
| 0x0FD8 |   76.5 Grad |
| 0x0FDC |   78.0 Grad |
| 0x0FE2 | -166.5 Grad |
| 0x0FE6 | -165.0 Grad |
| 0xFFFF | kein Wert vorhanden |
| 0x???? | ungueltiges Codewort |

### SG_MC2ANTWORT

| MC2_NR | MC2_TEXT |
| --- | --- |
| 0x00 | MC-2: OKAY |
| 0x01 | MC-2: Timeout beim Flash-Ablauf (1) |
| 0x02 | MC-2: Timeout beim Flash-Ablauf (2) |
| 0x03 | MC-2: Timeout beim Flash-Ablauf (3) |
| 0x04 | MC-2: Timeout beim Flash-Ablauf (4) |
| 0x05 | MC-2: Timeout beim Flash-Ablauf (5) |
| 0x06 | MC-2: Timeout beim Flash-Ablauf (6) |
| 0x07 | MC-2: Timeout beim Flash-Ablauf (7) |
| 0x08 | MC-2: Timeout beim Flash-Ablauf (8) |
| 0x80 | MC-2: Ungueltiger Flash-Service |
| 0x81 | MC-2: Ungueltiger Flash-Bereich |
| 0x82 | MC-2: Fehler im Flash-Ablauf |
| 0x83 | MC-2: Fehler bei Flash-Verifizierung |
| 0x?? | MC-2: Antwort unbekannt |
