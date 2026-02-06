# CAS_I3.PRG

## General

|  |  |
| --- | --- |
| File | CAS_I3.PRG |
| Type | PRG |
| Jobs | 50 |
| Tables | 41 |
| Origin | Michael Koblbauer BMW EE-201 |
| Revision | 0.2 |
| Author | Mikhail Vaisman Siemens ATBEAST5 |
| ECU Comment | Keine Bemerkung |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | CAS E_65 |  |  |
| ORIGIN | string | Michael Koblbauer BMW EE-20 |  |  |
| REVISION | string | 0.02 |  |  |
| AUTHOR | string | Mikhail Vaisman Siemens ATBEAST5 |  |  |
| COMMENT | string | Keine Bemerkung |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### INFO

Information SGBD

_No arguments._

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

### DIAGNOSE_ENDE

Diagnosemode des SG beenden KWP2000: $20 StopDiagnosticSession Modus  : Default

_No arguments._

### DIAGNOSE_MODE

SG in bestimmten Diagnosemode bringen KWP2000: $10 StartDiagnosticSession Modus  : einstellbar mit diesem Job

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | gewuenschter Diagnose-Modus table DiagMode MODE MODE_TEXT Defaultwert: DEFAULT (DefaultMode) |

### SLEEP_MODE

SG in Sleep-Mode versetzen KWP2000: $31 StartRoutineByLocalIdentifier $05 PowerDown $00 alle SG in den Power Down Modus Modus  : Default

_No arguments._

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

### C_CI_LESEN

Codierindex lesen Standard Codierjob KWP2000: $1A ReadECUIdentification $9B Vehicle Manufacturer Coding Index Modus  : Default

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

Hersteller Seriennummer lesen KWP2000: $1A ReadECUIdentification $89 SystemSupplierECUSerialNumber Modus  : Default

_No arguments._

### PROGRAMM_REFERENZ_BACKUP_LESEN

Auslesen des Backups der Programm Referenz KWP2000: $22   ReadDataByCommonIdentifier $2500 ProgrammReferenzBackup Modus  : Default

_No arguments._

### FLASH_LOESCHZEIT_LESEN

Auslesen der Flash Loeschzeit KWP2000: $22   ReadDataByCommonIdentifier $2501 Loeschzeit Modus  : Default

_No arguments._

### HARDWARE_REFERENZ_LESEN

Auslesen der Hardware Referenz KWP2000: $22   ReadDataByCommonIdentifier $2502 HardwareReferenz Modus  : Default

_No arguments._

### PROGRAMM_REFERENZ_LESEN

Auslesen der Programm Referenz KWP2000: $22   ReadDataByCommonIdentifier $2503 ProgrammReferenz Modus  : Default

_No arguments._

### DATEN_REFERENZ_LESEN

Auslesen der Daten Referenz KWP2000: $22   ReadDataByCommonIdentifier $2504 DatenReferenz Modus  : Default

_No arguments._

### FLASH_BLOCKLAENGE_LESEN

Auslesen des maximalen Blocklaenge beim Flashen KWP2000: $22   ReadDataByCommonIdentifier $2506 MaximaleBlockLaenge Modus  : Default

_No arguments._

### FLASH_PROGRAMMIER_STATUS_LESEN

Programmierstatus des SG lesen KWP2000: $31 StartRoutineByLocalIdentifier $0A CheckProgrammingStatus Modus  : Default

_No arguments._

### FLASH_SIGNATUR_PRUEFEN

Flash Signatur pruefen KWP2000: $31 StartRoutineByLocalIdentifier $09 CheckSignature Modus  : Default

_No arguments._

### STEUERGERAETE_RESET

Seuergeraete reset ausloesen KWP2000: $11 ECUReset $01 PowerOn Modus  : Default

_No arguments._

### FLASH_LOESCHEN

Flash loeschen Standard Flashjob KWP2000: $31 StartRoutineByLocalIdentifier $02 ClearMemory Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : (unbenutzt) Flashdaten Byte 21+Anzahl Daten: ETX (0x03) |

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
| AIF_NR | int | ==0 : aktuelles AIF > 0 : Nummer des zu lesenden AIF default = 0 : aktuelles AIF |

### AIF_SCHREIBEN

Schreiben des Anwender Informations Feldes Standard Flashjob KWP 2000: $3D WriteMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| AIF_FAHRGESTELL_NR | string | Fahrgestellnummer 7-stellig |
| AIF_PROGRAMMIER_DATUM | string | Datum der SG-Programmierung in der Form JJJJ.MM.TT |
| AIF_ZUSAMMENBAU_NR | string | BMW/Rover Zusammenbaunummer |
| AIF_DATENSATZ_NR | string | BMW/Rover Datensatznummer - Softwarenummer |
| AIF_BEHOERDEN_NR | string | BMW/Rover Behoerdennummer |
| AIF_HAENDLER_NR | string | Haendlernummer |
| AIF_TESTER_NR | string | Tester Seriennummer |
| AIF_KM_STAND | long | km-Stand bei der Programmierung |
| AIF_PROGRAMM_STAND | string | Programmstandsnummer |

### PRUEFCODE_LESEN

Standard Pruefcode lesen fuer Kundendienst KWP2000: $1A ReadECUIdentification KWP2000: $18 ReadDiagnosticTroubleCodesByStatus KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes Modus  : Default

_No arguments._

### STATUS_IODIGITAL

Auslesen der Stati von digitale Signale KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table IODigitalSignaleFuerLesen NAME TEXT |

### STATUS_ANALOG

Auslesen der Stati von analoge Signale KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table AnalogSignaleFuerLesen NAME EINHEIT TEXT |

### STATUS_CAN_SIGNAL_REAL

Auslesen der Stati von CAN Signale KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table CANSignaleReal NAME EINHEIT TEXT |

### STATUS_CAN_SIGNAL_INT

Auslesen der Stati von CAN Signale KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table CANSignaleInt NAME EINHEIT TEXT |

### STATUS_CAN_DISKRET

Auslesen der Stati von CAN Signale KWP2000: $30 InputOutputControlByLocalIdentifier $01 ReportCurrentState Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table CANDiskretSignale NAME TABELLE TEXT |

### STEUERN_IODIGITAL

Ansteuern von I/O DigitalSignal mit DIGITALWERT KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAdjustment Ohne DIGITALWERT->Return Control To ECU KWP2000: $30 InputOutputControlByLocalIdentifier $00 ReturnControlToECU Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table IODigitalSignaleFuerSchreiben NAME TEXT |
| DIGITALWERT | string | Werte: true, false, on, off,... table DigitalArgument TEXT Achtung: Ohne dem Arggumet DIGITALWERT wird die Kontrolle ueber den Input/Output der ECU zurueckgegeben! |

### STEUERN_CAN_SIGNAL_REAL

Ansteuern von CAN Signale mit CAN_WERT KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAjustment Ohne CAN_WERT ->Return Control To ECU KWP2000: $30 InputOutputControlByLocalIdentifier $00 ReturnControlToECU Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table CANSignaleReal NAME EINHEIT TEXT MIN MAX |
| CAN_WERT | real | sehe Einheit in CANSignaleReal Achtung: Ohne dem Argument CAN_WERT wird die Kontrolle ueber dieses CAN Signal der ECU zurueckgegeben! |

### STEUERN_CAN_SIGNAL_INT

Ansteuern von CAN Signale mit CAN_WERT KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAjustment Ohne CAN_WERT -> ReturnControlToECU KWP2000: $30 InputOutputControlByLocalIdentifier $00 ReturnControlToECU Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table CANSignaleInt NAME EINHEIT TEXT MIN MAX |
| CAN_WERT | long | sehe Einheit in CANSignaleInt Achtung: Ohne dem Argument CAN_WERT wird die Kontrolle ueber dieses CAN Signal der ECU zurueckgegeben! |

### STEUERN_CAN_DISKRET

Ansteuern von CAN Signale mit CAN_WERT KWP2000: $30 InputOutputControlByLocalIdentifier $07 ShortTermAjustment Ohne CAN_WERT -> ReturnControlToECU KWP2000: $30 InputOutputControlByLocalIdentifier $00 ReturnControlToECU Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table CANDiskretSignale NAME TABELLE TEXT |
| CAN_WERT | int | Achtung: Ohne dem Argument CAN_WERT wird die Kontrolle ueber dieses CAN Signal der ECU zurueckgegeben! |

### ISN_WIEDERABGLEICH

Wechselcode schreiben KWP2000: $22 ReadDataByCommonIdentifier $3000 DME Wechselcode 1,2 und ISN Individual Service Number KWP2000: $2E WriteDataByCommonIdentifier $3000 Wechselcode 1,2 und ISN Individual Service Number Modus  : Default

_No arguments._

## Tables

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
| ?10? | ERROR_F_CODE |
| ?20? | ERROR_SEGMENT |
| ?21? | ERROR_ADDRESS |
| ?22? | ERROR_NUMBER |
| ?30? | ERROR_DATA |
| ?40? | ERROR_MODE |
| ?50? | ERROR_BYTE1 |
| ?51? | ERROR_BYTE2 |
| ?52? | ERROR_BYTE3 |
| ?60? | ERROR_ARGUMENT |
| 0xXY | ERROR_ECU_UNKNOWN_NEGATIVE_RESPONSE |

### LIEFERANTEN

| LIEF_NR | LIEF_TEXT |
| --- | --- |
| 0x01 | Reinshagen / Delphi |
| 0x02 | Kostal |
| 0x03 | Hella |
| 0x04 | Siemens |
| 0x05 | Eaton |
| 0x06 | UTA |
| 0x07 | Helbako |
| 0x08 | Bosch |
| 0x09 | Loewe |
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
| 0x28 | DODUCO |
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
| yes | 1 |
| no | 0 |
| on | 1 |
| off | 0 |
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
| 0xXY | -- | @unbekannter Diagnose-Mode@ |

### SPEICHERSEGMENT

| SEG_BYTE | SEG_NAME | SEG_TEXT |
| --- | --- | --- |
| 0x00 | LAR | linearAdressRange |
| 0x01 | ROMI | ROM / EPROM, internal |
| 0x02 | ROMX | ROM / EPROM, external |
| 0x03 | NVRAM | NV-RAM (characteristic zones, DTC memory |
| 0x04 | RAMIS | RAM, internal (short MOV) |
| 0x05 | RAMXX | RAM, external (x data MOV) |
| 0x0B | RAMIL | RAM, internal (long MOV / Register) |
| 0xFF | ??? | unbekanntes Speichersegment |

### PROGRAMMIERSTATUS

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | @Anlieferzustand@ |
| 0x01 | @Normalbetrieb@ |
| 0x02 | @nicht benutzt@ |
| 0x03 | @nicht benutzt@ |
| 0x04 | @nicht benutzt@ |
| 0x05 | @nicht benutzt@ |
| 0x06 | @nicht benutzt@ |
| 0x07 | @Programmprogrammiersitzung@ aktiv |
| 0x08 | @Datenprogrammiersitzung@ aktiv |
| 0x09 | @Datenreferenzeintrag@ @fehlerhaft@ |
| 0x0A | @Programmreferenzeintrag@ @fehlerhaft@ |
| 0x0B | @Referenzierungsfehler@ @Hardware@ -> @Programm@ |
| 0x0C | @Programm@ nicht @vollstaendig@ |
| 0x0D | @Datenreferenzeintrag@ @fehlerhaft@ |
| 0x0E | @Referenzierungsfehler@ @Programm@ -> @Daten@ |
| 0x0F | @Daten@ nicht @vollstaendig@ |
| 0x10 | @Reserviert@ fuer BMW |
| 0x80 | @Reserviert@ fuer @Zulieferer@ |
| 0xXY | @unbekannter Programmierstatus@ |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x6001 | Fehler 6001 |
| 0x6002 | Fehler 6002 |
| 0x6004 | Fehler 6004 |
| 0x6005 | Fehler 6005 |
| 0x6008 | Fehler 6008 |
| 0x600B | Fehler 600B |
| 0x600C | Fehler 600C |
| 0x600D | Fehler 600D |
| 0x6014 | Fehler 6014 |
| 0x6015 | Fehler 6015 |
| 0x6016 | Fehler 6016 |
| 0x601A | Fehler 601A |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_HFK | nein |
| F_LZ | nein |
| F_UWB_ERW | nein |

### IODIGITALSIGNALEFUERLESEN

| IOLI | NAME | TEXT |
| --- | --- | --- |
| 0x10 | H1_OUT | Hallsensor H1 |
| 0x11 | H2_OUT | Hallsensor H2 |
| 0x12 | H4_OUT | Hallsensor H4 |
| 0x13 | H5_OUT | Hallsensor H5 |
| 0x14 | H6_OUT | Hallsensor H6 |
| 0x15 | P_N_Eingang | Waehlhebel in Stellung P |
| 0x16 | KL15_WUP_SYNCRO | KL15 Wakeup Synchronisation |
| 0x17 | S_HTLSTLGVIOS | Hotelschalter |
| 0x18 | S_HK_FAHRERVIOS | Heckklappentaster |
| 0x19 | S_CLT_ERVIOS | Entriegelt-Taster |
| 0x1A | S_CLT_VRVIOS | Verriegelt-Taster |
| 0x1B | MOT_FERN_START | Motorfernstart |
| 0x1C | MHK | Motorhaubenkontakt |
| 0x1D | ELV_SAFE | Lenkungsverriegelung |
| 0x1E | WHP | Waehlhebel in Stellung P |
| 0x1F | RF_IN | Funksignal |
| 0x20 | BS_DOUT | Datenleitung fuer Basestation IC |
| 0x21 | RXD0 | Serie-Signale |
| 0x22 | RXD1 | Serie-Signale |
| 0x23 | NERR0 | CAN-Signale |
| 0x24 | NERR1 | CAN-Signale |
| 0x25 | ST_HS_KL_15_FZG_1_2 | Diagnoseleitung der KL15_1und_2 |
| 0x26 | ST_HS_KL_15_FZG_3_4 | Diagnoseleitung der KL15_3und_4 |
| 0x27 | ST_HS_KL_15_FZG_5 | Diagnoseleitung der KL15_5 |
| 0x28 | ST_HS_KL_15_FZG_6 | Diagnoseleitung der KL15_6 |
| 0x50 | HUB_MAG3_uC | Ansteuerung der Drehsperre |
| 0x51 | ELV_ON_uC | Ansteuerung der ELV |
| 0x52 | FBD_ON_uC | Ansteuerung der FBD |
| 0x53 | KL_50_LOWPOWER_uC | Ausgang fuer KL50: fuer max.50mA |
| 0x54 | VCC_HALL_1_2_uC | Spannungsversorgung der Hallsensoren Hall 1,2 |
| 0x55 | VCC_HALL_4_6_uC | Spannungsversorgung der Hallsensoren Hall 4,5,6 |
| 0x56 | KL50_uC_B | Freigabesignal fuer KL50 |
| 0x57 | KL50_uC_A | Freigabesignal fuer KL50 |
| 0x58 | GAL_CLK_OUTREG | Freigabesignal damit Hallsignatur ins CPLD Ausgangsregister geschrieben werden |
| 0x59 | GAL_CLK_INREG | Freigabesignal damit Hallsignatur ins CPLD Eingangsregister geschrieben werden |
| 0x5A | KL_15_WUP_uC | Ansteuersignal fuer Endstufe KL15 Wake-Up |
| 0x5B | ON_K_LINE_ELV | Diskrete K-Bus Loesung |
| 0x5C | HUB_MAG1_uC | Ansteuerung der Abzussperre |
| 0x5D | KL15_FZG_uC_1 | Ansteuerung der KL15_1 von Seiten des uC |
| 0x5E | KL15_FZG_uC_2 | Ansteuerung der KL15_2 von Seiten des uC |
| 0x5F | KL15_FZG_uC_3 | Ansteuerung der KL15_3 von Seiten des uC |
| 0x60 | KL15_FZG_uC_4 | Ansteuerung der KL15_4 von Seiten des uC |
| 0x61 | KL15_FZG_uC_5 | Ansteuerung der KL15_5 von Seiten des uC |
| 0x62 | KL15_FZG_uC_6 | Ansteuerung der KL15_6 von Seiten des uC |
| 0x63 | K_BUS_DME_HIGH | K-Bus DME wird auf high geschaltet |
| 0x64 | BS_CLK | Clockleitung fuer Basestation IC |
| 0x65 | BS_MODE | Modeeinstellung fuer Basestation IC |
| 0x66 | BS_DIN | Datenleitung fuer Basestation IC |
| 0x67 | TXD0 | Serie-Signale |
| 0x68 | TXD1 | Serie-Signale |
| 0x69 | STB0 | CAN-Signale |
| 0x6A | STB1 | CAN-Signale |
| 0x6B | EN0 | CAN-Signale |
| 0x6C | RESET_CPLD_uC | Resetleitung fuer das CPLD |
| 0x6D | FLASH_SHDN | Erzeugung der int.Flashspannung |
| 0x6E | EN1 | CAN-Signale |
| 0x6F | VCC_CPLD_uC | Spannungsversorgung fuer CPLD |

### IODIGITALSIGNALEFUERSCHREIBEN

| IOLI | NAME | TEXT |
| --- | --- | --- |
| 0x25 | ST_HS_KL_15_FZG_1_2 | Diagnoseleitung der KL15_1und_2 |
| 0x26 | ST_HS_KL_15_FZG_3_4 | Diagnoseleitung der KL15_3und_4 |
| 0x27 | ST_HS_KL_15_FZG_5 | Diagnoseleitung der KL15_5 |
| 0x28 | ST_HS_KL_15_FZG_6 | Diagnoseleitung der KL15_6 |
| 0x63 | K_BUS_DME_HIGH | K-Bus DME wird auf high geschaltet |
| 0x64 | BS_CLK | Clockleitung fuer Basestation IC |
| 0x65 | BS_MODE | Modeeinstellung fuer Basestation IC |
| 0x66 | BS_DIN | Datenleitung fuer Basestation IC |
| 0x67 | TXD0 | Serie-Signale |
| 0x68 | TXD1 | Serie-Signale |
| 0x6C | RESET_CPLD_uC | Resetleitung fuer das CPLD |
| 0x6F | VCC_CPLD_uC | Spannungsversorgung fuer CPLD |

### ANALOGSIGNALEFUERLESEN

| IOLI | NAME | EINHEIT | MUL | DIV | ADD | TEXT |
| --- | --- | --- | --- | --- | --- | --- |
| 0xA0 | AD_HUBMAG2 | Volt | 590 | 18432 | 0 | Diagnoseleitung der Hubmag2 |
| 0xA1 | AD_VCC_HALL_1_2 | Volt | 590 | 18432 | 0 | Diagnoseleitung der VCC-Hall 1_2 |
| 0xA2 | AD_KL_15_WUP | Volt | 590 | 18432 | -0.7 | Diagnoseleitung der KL_15_WUP |
| 0xA3 | AD_FBD_ON | Volt | 590 | 18432 | 0 | Diagnoseleitung der FBD_ON |
| 0xA4 | ST_HS_KL_50_B | Volt | 5 | 1024 | 0 | Diagnoseleitung der KL50_B |
| 0xA5 | AD_HUBMAG1 | Volt | 590 | 18432 | 0 | Diagnoseleitung der Hubmag1 |
| 0xA6 | AD_HUBMAG3 | Volt | 590 | 18432 | 0 | Diagnoseleitung der Hubmag3 |
| 0xA7 | AD_ELV_ON | Volt | 590 | 18432 | 0 | Diagnoseleitung der ELV_ON |
| 0xA8 | ST_HS_KL_50_A | Volt | 5 | 1024 | 0 | Diagnoseleitung der KL50_A |
| 0xA9 | VBAT | Volt | 1416 | 44236.8 | 0 | Diagnoseleitung der KL30 |
| 0xAA | AD_VCC_HALL_4_6 | Volt | 590 | 18432 | 0 | Diagnoseleitung der VCC-Hall4_6 |

### CANSIGNALEREAL

| IOLI | NAME | BYTE | EINHEIT | KF1 | KF2 | DIF | MIN | MAX | TEXT |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0xC1 | V_VEH | 2 | Km/h | 1 | 10 | 0 | 0 | 350 | Geschwindigkeit_Fahrzeug |
| 0xEB | RPM_ENG | 2 | 1/min | 1 | 4 | 0 | 0 | 8000 | Drehzahl_Motor |

### CANSIGNALEINT

| IOLI | NAME | BYTE | EINHEIT | KF1 | KF2 | DIF | MIN | MAX | TEXT |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0xB2 | MILE_KM | 3 | Km | 1 | 1 | 0 | 0 | 16777214 | Wegstrecke_Kilometer |
| 0xB3 | ST_DIAG_ANT_3 | 1 | - | 1 | 1 | 0 | 0 | 255 | Status_Diagnose_Antenne_3 |
| 0xB4 | ST_DIAG_ANT_2 | 1 | - | 1 | 1 | 0 | 0 | 255 | Status_Diagnose_Antenne_2 |
| 0xB5 | ST_DIAG_ANT_1 | 1 | - | 1 | 1 | 0 | 0 | 255 | Status_Diagnose_Antenne_1 |
| 0xC3 | AUTH_CLSY_BTL | 4 | - | 1 | 1 | 0 | 0 | -2 | Authenttisierung_Zentralverriegelung_Heckklappe |
| 0xCB | AUTH_CLSY_DVDR | 4 | - | 1 | 1 | 0 | 0 | -2 | Authenttisierung_Zentralverriegelung_FATH |
| 0xD3 | AUTH_CLSY_DRD | 4 | - | 1 | 1 | 0 | 0 | -2 | Authenttisierung_Zentralverriegelung_FAT |
| 0xDB | AUTH_CLSY_PSDR | 4 | - | 1 | 1 | 0 | 0 | -2 | Authenttisierung_Zentralverriegelung_BFTH |
| 0xE3 | AUTH_CLSY_PSD | 4 | - | 1 | 1 | 0 | 0 | -2 | Authenttisierung_Zentralverriegelung_BFT |

### CANDISKRETSIGNALE

| IOLI | NAME | TABELLE | MASK | TEXT |
| --- | --- | --- | --- | --- |
| 0xB0 | ST_CHISL_PSDR | Tabelle1 | 0x3 | Status_Kindersicherung_in_der_Beifahretuere_hinten |
| 0xB1 | ST_CHISL_DVDR | Tabelle1 | 0x3 | Status_Kindersicherung_in_der_Fahretuere_hinten |
| 0xB6 | ST_GR_GRB | Tabelle2 | 0xF | Status_Gang_Getriebe |
| 0xB7 | CTR_ENG_RMST_AIC | Tabelle3 | 0x3 | Steuerung_Motor_Fernstart_Klima |
| 0xB8 | ST_COS_SWO | Tabelle4 | 0x3 | Status_Verbraucher_Abschaltung |
| 0xB9 | CTR_ITLI | Tabelle5 | 0x3 | Steuerung_Innenbeleuchtung |
| 0xBA | ST_SW_DSTB | Tabelle6 | 0x3 | Status_Schalter_Distribution |
| 0xBB | CTR_DWA_RCPT | Tabelle7 | 0xF | Steuerung_DWA_Quittierung |
| 0xBC | CTR_DWA_AL | Tabelle8 | 0x7 | Steuerung_DWA_Alarm |
| 0xBD | OP_NO_KEY_PRSL_IMME | Tabelle9 | 0xF | Bedienung_Nummer_Schluessel_Personalisierung_Aktuell |
| 0xBE | ST_EXCE_THRV_ACLN | Tabelle10 | 0x3 | Status_Ueberschreitung_Schwellwert_Beschleunigung |
| 0xBF | ST_CRSE | Tabelle11 | 0x7 | Status_Crashschwere |
| 0xC0 | ST_VEH_DVCO | Tabelle12 | 0x7 | Status_Fahrzeug_Fahrzustand |
| 0xC2 | OP_CHISL | Tabelle13 | 0x3 | Bedienung_Kindersicherung |
| 0xC4 | ST_CT_BTL_PERI | Tabelle14 | 0x3 | Status_Kontakt_Heckklappe_Peripherie |
| 0xC5 | ST_CLSY_UNIT_RPLK_BTL | Tabelle15 | 0x3 | Status_Zentralverrigelung_Aggregat_Wiederholsperre_Heckklappe |
| 0xC6 | CLASF_RQ_BTL | Tabelle16 | 0x7 | Klassifizierung_Anforderung_Heckklappe |
| 0xC7 | NO_KEY_BTL | Tabelle17 | 0xF | Nummer_Schluessel_Heckklappe |
| 0xC9 | OP_CLSY_BTL | Tabelle18 | 0xF | Bedienung_Zentralverriegelung_Heckklappe |
| 0xCA | ST_CLSY_BTL | Tabelle19 | 0xF | Status_Zentralverriegelung_Heckklappe |
| 0xCC | ST_DSW_DVDR_PERI | Tabelle20 | 0x3 | Status_Tuerkontakt_FATH_Peripherie |
| 0xCD | ST_CLSY_UNIT_RPLK_DVDR | Tabelle15 | 0x3 | Status_Zentralverrigelung_Aggregat_Wiederholsperre_FATH |
| 0xCE | CLASF_RQ_DVDR | Tabelle21 | 0x7 | Klassifizierung_Anforderung_FATH |
| 0xD0 | NO_KEY_DVDR | Tabelle17 | 0xF | Nummer_Schluessel_FATH |
| 0xD1 | OP_CLSY_DVDR | Tabelle18 | 0xF | Bedienung_Zentralverriegelung_FATH |
| 0xD2 | ST_CLSY_DVDR | Tabelle19 | 0xF | Status_Zentralverriegelung_FATH |
| 0xD4 | ST_DSW_DRD_PERI | Tabelle22 | 0x3 | Status_Tuerkontakt_FAT_Peripherie |
| 0xD5 | ST_CLSY_UNIT_RPLK_DRD | Tabelle15 | 0x3 | Status_Zentralverrigelung_Aggregat_Wiederholsperre_FAT |
| 0xD6 | CLASF_RQ_DRD | Tabelle16 | 0x7 | Klassifizierung_Anforderung_FAT |
| 0xD8 | NO_KEY_DRD | Tabelle17 | 0xF | Nummer_Schluessel_FAT |
| 0xD9 | OP_CLSY_DRD | Tabelle18 | 0xF | Bedienung_Zentralverriegelung_FAT |
| 0xDA | ST_CLSY_DRD | Tabelle19 | 0xF | Status_Zentralverriegelung_FAT |
| 0xDC | ST_DSW_PSDR_PERI | Tabelle23 | 0x3 | Status_Tuerkontakt_BFTH_Peripherie |
| 0xDD | ST_CLSY_UNIT_RPLK_PSDR | Tabelle15 | 0x3 | Status_Zentralverrigelung_Aggregat_Wiederholsperre_BFTH |
| 0xDE | CLASF_RQ_PSDR | Tabelle21 | 0x7 | Klassifizierung_Anforderung_BFTH |
| 0xE0 | NO_KEY_PSDR | Tabelle17 | 0xF | Nummer_Schluessel_BFTH |
| 0xE1 | OP_CLSY_PSDR | Tabelle18 | 0xF | Bedienung_Zentralverriegelung_BFTH |
| 0xE2 | ST_CLSY_PSDR | Tabelle19 | 0xF | Status_Zentralverriegelung_BFTH |
| 0xE4 | ST_DSW_PSD_PERI | Tabelle24 | 0x3 | Status_Tuerkontakt_BFT_Peripherie |
| 0xE5 | ST_CLSY_UNIT_RPLK_PSD | Tabelle15 | 0x3 | Status_Zentralverrigelung_Aggregat_Wiederholsperre_BFT |
| 0xE6 | CLASF_RQ_PSD | Tabelle16 | 0x7 | Klassifizierung_Anforderung_BFT |
| 0xE8 | NO_KEY_PSD | Tabelle17 | 0xF | Nummer_Schluessel_BFT |
| 0xE9 | OP_CLSY_PSD | Tabelle18 | 0xF | Bedienung_Zentralverriegelung_BFT |
| 0xEA | ST_CLSY_PSD | Tabelle19 | 0xF | Status_Zentralverriegelung_BFT |
| 0xEC | ST_ENG_RUN | Tabelle25 | 0x3 | Status_Motor_Laeuft |

### TABELLE1

| WERT | TEXT |
| --- | --- |
| 0x00 | Nicht Aktiv |
| 0x01 | Aktiv |
| 0x03 | Signal ungueltig |

### TABELLE2

| WERT | TEXT |
| --- | --- |
| 0x00 | Reserve |
| 0x01 | N Kein Kraftschluss |
| 0x02 | R Rueckwaertsgang |
| 0x03 | P Kraftschluss |
| 0x04 | Reserve |
| 0x05 | 1. Gang |
| 0x06 | 2. Gang |
| 0x07 | 3. Gang |
| 0x08 | 4. Gang |
| 0x09 | 5. Gang |
| 0x0A | 6. Gang |
| 0x0F | Signal ungueltig |

### TABELLE3

| WERT | TEXT |
| --- | --- |
| 0x00 | Motor nicht starten |
| 0x01 | Motor starten fuer Standklima |
| 0x03 | Signal ungueltig |

### TABELLE4

| WERT | TEXT |
| --- | --- |
| 0x00 | Verbraucherabschaltung AUS |
| 0x01 | Verbraucherabschaltung EIN |
| 0x03 | Signal ungueltig |

### TABELLE5

| WERT | TEXT |
| --- | --- |
| 0x00 | Innenbeleuchtung ausschalten |
| 0x01 | Innenbeleuchtung einschalten |
| 0x03 | Signal ungueltig |

### TABELLE6

| WERT | TEXT |
| --- | --- |
| 0x00 | Distributionsschalter offen |
| 0x01 | Distributionsschalter geschlossen |
| 0x03 | Signal ungueltig |

### TABELLE7

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Quittierung |
| 0x01 | Schaerfen 1x Warnblinken |
| 0x02 | Entschaerfen 2x Warnblinken |
| 0x03 | Dauerlicht Warnblinken fuer 2s |
| 0x0F | Signal ungueltig |

### TABELLE8

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aktion |
| 0x01 | Warnblinken |
| 0x02 | Abblendlicht |
| 0x03 | Abblendlicht und Warnblinken |
| 0x04 | Fernlicht |
| 0x05 | Fernlicht und Warnblinken |
| 0x06 | Fernlicht und Abblendlicht |
| 0x07 | Signal ungueltig |

### TABELLE9

| WERT | TEXT |
| --- | --- |
| 0x00 | Schluesselnummer 0 |
| 0x01 | Schluesselnummer 1 |
| 0x02 | Schluesselnummer 2 |
| 0x03 | Schluesselnummer 3 |
| 0x0F | Signal ungueltig |

### TABELLE10

| WERT | TEXT |
| --- | --- |
| 0x00 | Beschleunigungsschwelle nicht ueberschritten |
| 0x01 | Beschleunigungsschwelle_ueberschritten |
| 0x03 | Signal ungueltig |

### TABELLE11

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Crash |
| 0x01 | Crash 1 |
| 0x02 | Crash 2 |
| 0x03 | Crash 3 |
| 0x04 | Crash 4 |
| 0x07 | Signal ungueltig |

### TABELLE12

| WERT | TEXT |
| --- | --- |
| 0x00 | Fahrzeug_steht |
| 0x01 | Fahrzeug_faehrt_vorwaerts |
| 0x02 | Fahrzeug_faehrt_rueckwaerts |
| 0x03 | Fahrzeug_faehrt_Richungserkennung_nicht_moeglich |
| 0x07 | Signal ungueltig |

### TABELLE13

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Aktion |
| 0x01 | Taster wurde betaetigt |
| 0x03 | Signal ungueltig |

### TABELLE14

| WERT | TEXT |
| --- | --- |
| 0x00 | HK ist geschlossen |
| 0x01 | HK ist offen |
| 0x03 | Signal ungueltig |

### TABELLE15

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Wiederholsperre |
| 0x01 | Wiederholsperre aktiv |
| 0x03 | Signal_ungueltig |

### TABELLE16

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Anforderung |
| 0x01 | Schlisszylinder |
| 0x02 | Schlisszylinder mit Ringantenne |
| 0x03 | Passive Entry |
| 0x07 | Signal ungueltig |

### TABELLE17

| WERT | TEXT |
| --- | --- |
| 0x00 | Schluesselnummer 0 |
| 0x01 | Schluesselnummer 1 |
| 0x02 | Schluesselnummer 2 |
| 0x03 | Schluesselnummer 3 |
| 0x04 | Schluesselnummer 4 |
| 0x05 | Schluesselnummer 5 |
| 0x06 | Schluesselnummer 6 |
| 0x07 | Schluesselnummer 7 |
| 0x08 | Schluesselnummer 8 |
| 0x09 | Schluesselnummer 9 |
| 0x0F | Signal ungueltig |

### TABELLE18

| WERT | TEXT |
| --- | --- |
| 0x00 | Elektrische Kindersicherung deaktivieren angefordert |
| 0x01 | Entriegeln angefordert und Elektrische Kindersicherung deaktivieren angefordert |
| 0x02 | Verriegeln angefordert und Elektrische Kindersicherung deaktivieren angefordert |
| 0x03 | Sichern angefordert und Elektrische Kindersicherung deaktivieren angefordert |
| 0x04 | Elektrische Kindersicherung aktivieren angefordert |
| 0x05 | Elektrische Kindersicherung aktivieren angefordert und Entriegeln angefordert |
| 0x06 | Elektrische Kindersicherung aktivieren angefordert und Verriegeln angefordert |
| 0x07 | Elektrische Kindersicherung aktivieren angefordert und Sichern angefordert |
| 0x08 | Keine Anfoderung gestellt |
| 0x0F | Signal ungueltig |

### TABELLE19

| WERT | TEXT |
| --- | --- |
| 0x00 | Elektrische Kindersicherung inaktiv |
| 0x01 | Entriegelt und Elektrische Kindersicherung inaktiv |
| 0x02 | Verriegelt und Elektrische Kindersicherung inaktiv |
| 0x03 | Gesichert und Elektrische Kindersicherung inaktiv |
| 0x04 | Elektrische Kindersicherung aktiv |
| 0x05 | Elektrische Kindersicherung aktiv und Entriegelt |
| 0x06 | Elektrische Kindersicherung aktiv und Verriegelt |
| 0x07 | Elektrische Kindersicherung aktiv und Gesichert |
| 0x08 | ZV nicht verbaut |
| 0x0F | Signal ungueltig |

### TABELLE20

| WERT | TEXT |
| --- | --- |
| 0x00 | FATH ist geschlossen |
| 0x01 | FATH ist offen |
| 0x03 | Signal ungueltig |

### TABELLE21

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Anforderung |
| 0x01 | Passive Entry |
| 0x03 | Signal ungueltig |

### TABELLE22

| WERT | TEXT |
| --- | --- |
| 0x00 | FAT ist geschlossen |
| 0x01 | FAT ist offen |
| 0x03 | Signal ungueltig |

### TABELLE23

| WERT | TEXT |
| --- | --- |
| 0x00 | BFTH ist geschlossen |
| 0x01 | BFTH ist offen |
| 0x03 | Signal ungueltig |

### TABELLE24

| WERT | TEXT |
| --- | --- |
| 0x00 | BFT ist geschlossen |
| 0x01 | BFT ist offen |
| 0x03 | Signal ungueltig |

### TABELLE25

| WERT | TEXT |
| --- | --- |
| 0x00 | Motor aus |
| 0x01 | Motor startet |
| 0x02 | Motor laeuft |
| 0x03 | Signal ungueltig |
