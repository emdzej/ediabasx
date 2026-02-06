# VGSG83.prg

## General

|  |  |
| --- | --- |
| File | VGSG83.prg |
| Type | PRG |
| Jobs | 77 |
| Tables | 41 |
| Origin | BMW EA-71 Jochen Schröder |
| Revision | 1.04 |
| Author | MAGNA SFT EEE-S Bohlen Robert, Podpecan Mirko |
| ECU Comment | SGBD Für E83 & E53Mü, kompatiabel ab SW 3.57 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Verteilergetriebe Steuergerät ATC400/500 |  |  |
| ORIGIN | string | BMW EA-71 Jochen Schröder |  |  |
| REVISION | string | 1.04 |  |  |
| AUTHOR | string | MAGNA SFT EEE-S Bohlen Robert, Podpecan Mirko |  |  |
| COMMENT | string | SGBD Für E83 & E53Mü, kompatiabel ab SW 3.57 |  |  |
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

### DIAGNOSE_AUFRECHT

Diagnosemode des SG aufrecht erhalten KWP2000: $3E TesterPresent Modus  : Default

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

### PRUEFCODE_LESEN

Standard Pruefcode lesen fuer Kundendienst KWP2000: $1A ReadECUIdentification KWP2000: $18 ReadDiagnosticTroubleCodesByStatus KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes Modus  : Default

_No arguments._

### STATUS_STATUSINFORMATIONEN

dxc Status und Fehlerinformation KWP2000: $21 ReadDataByLocalIdentifier LID01 Modus  : Default

_No arguments._

### STATUS_AKTUATOR_STROM

Aktuator_Strom KWP2000: $21 ReadDataByLocalIdentifier LID02 Modus  : Default

_No arguments._

### STATUS_PHISMSPERRE

KWP2000: $21 ReadDataByLocalIdentifier LID03 Modus  : Default

_No arguments._

### STATUS_T_E_MOT

Thermische Belastung des Aktuator Stellmotor KWP2000: $21 ReadDataByLocalIdentifier LID04 Modus  : Default

_No arguments._

### STATUS_THR_STRS_E_MOT

Thermische Belastung des Aktuator Stellmotor KWP2000: $21 ReadDataByLocalIdentifier LID05 Modus  : Default

_No arguments._

### STATUS_T_OEL_DXC

Oel Temperatur VGSG KWP2000: $21 ReadDataByLocalIdentifier LID06 Modus  : Default

_No arguments._

### STATUS_THR_STRS_CLT

Thermische Belastung der Kupplung KWP2000: $21 ReadDataByLocalIdentifier LID07 Modus  : Default

_No arguments._

### STATUS_MK_SOLL

MK_Soll KWP2000: $21 ReadDataByLocalIdentifier LID08 Modus  : Default

_No arguments._

### STATUS_MK_IST

MK_Ist KWP2000: $21 ReadDataByLocalIdentifier LID09 Modus  : Default

_No arguments._

### STATUS_CODIERSTATUS

Codierung KWP2000: $21 ReadDataByLocalIdentifier LID0A Modus  : Default

_No arguments._

### STATUS_V_FZG

KWP2000: $21 ReadDataByLocalIdentifier LID0B Modus  : Default

_No arguments._

### STATUS_N_MOT

Motordrehzahl KWP2000: $21 ReadDataByLocalIdentifier LID0C Modus  : Default

_No arguments._

### STATUS_KLEMMENSPANNUNG

Klemmenspannung am Verteilergetriebe KWP2000: $21 ReadDataByLocalIdentifier LID0D Modus  : Default

_No arguments._

### STATUS_GETRIEBE_INTEGRATOREN

Getriebe Integratoren KWP2000: $21 ReadDataByLocalIdentifier LID0E Modus  : Default

_No arguments._

### STATUS_LAMELLEN_INTEGRATOREN

Lamellen Integratoren KWP2000: $21 ReadDataByLocalIdentifier LID0F Modus  : Default

_No arguments._

### STATUS_KLASSIERSPEICHER

Wiederstandsklassierung des Getriebe KWP2000: $21 ReadDataByLocalIdentifier LID11 Modus  : Default

_No arguments._

### STATUS_CODIERDATEN

dxc Status und Fehlerinformation KWP2000: $21 ReadDataByLocalIdentifier LID1A Modus  : Default

_No arguments._

### STATUS_LT_GETRIEBE_INTEGRATOREN

Life Time Getriebe Integratoren KWP2000: $21 ReadDataByLocalIdentifier LID1E Modus  : Default

_No arguments._

### STATUS_LT_LAMELLEN_INTEGRATOREN

Life Time Lamellen Integratoren KWP2000: $21 ReadDataByLocalIdentifier LID1F Modus  : Default

_No arguments._

### STATUS_KALIBRIERUNG

dxc Status und Fehlerinformation KWP2000: $21 ReadDataByLocalIdentifier LID21 Modus  : Default

_No arguments._

### WRITE_MK_SOLL

Sollmomentvorgabe per Diagnose KWP2000: $3B WriteDataByLocalIdentifier Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN_1 | string | Daten Sollmoment |

### WRITE_GETRIEBE_INTEGRATOREN

Getriebe Integratoren ins EEPROM schreiben KWP2000: $3B WriteDataByLocalIdentifier Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN_1 | string | Daten GetriebeArbeit1 |
| DATEN_2 | string | Daten GetriebeArbeit2 |
| DATEN_3 | string | Daten KM Stand Integrator |

### WRITE_LAMELLEN_INTEGRATOREN

Lamellen Integratoren ins EEPROM schreiben KWP2000: $3B WriteDataByLocalIdentifier Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN_1 | string | Daten Lamelle1 |
| DATEN_2 | string | Daten Lamelle2 |
| DATEN_3 | string | Daten Lamelle3 |

### STEUERN_KLASSIERSPEICHER_RUECKSETZEN

Widerstandsklasse des Getriebe neu setzen KWP2000: $3B WriteDataByLocalIdentifier LID11 Modus: Default

_No arguments._

### WRITE_LT_GETRIEBE_INTEGRATOREN

Lifetime Getriebe Integratoren ins EEPROM schreiben KWP2000: $3B WriteDataByLocalIdentifier Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN_1 | string | Daten GetriebeArbeit1 |
| DATEN_2 | string | Daten GetriebeArbeit2 |
| DATEN_3 | string | Daten KM Stand Integrator |

### WRITE_LT_LAMELLEN_INTEGRATOREN

Lifetime Lamellen Integratoren ins EEPROM schreiben KWP2000: $3B WriteDataByLocalIdentifier Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| DATEN_1 | string | Daten Lamelle1 |
| DATEN_2 | string | Daten Lamelle2 |
| DATEN_3 | string | Daten Lamelle3 |

### STEUERN_KUPP_FUNKTIONSPRUEFUNG

KWP2000: $31 StartRoutineByLocalIdentifier $30 Funktionspruefung Kupplung Modus  : Default

_No arguments._

### STEUERN_HO_INTEGRATOREN_LOESCHEN

KWP2000: $31 StartRoutineByLocalIdentifier $31 Funktionspruefung Kupplung Modus  : Default

_No arguments._

### STEUERN_KALIBRIERUNG_LOESCHEN

KWP2000: $31 StartRoutineByLocalIdentifier $32 Funktionspruefung Kupplung Modus  : Default

_No arguments._

### STEUERN_LT_INTEGRATOREN_LOESCHEN

KWP2000: $31 StartRoutineByLocalIdentifier $33 Funktionspruefung Kupplung Modus  : Default

_No arguments._

### STEUERN_FUNKTIONSPRUEFUNG

KWP2000: $31 StartRoutineByLocalIdentifier $32 Kalibrierung loeschen KWP2000: $11 ECUReset $01 PowerOn KWP2000: $31 StartRoutineByLocalIdentifier $30 Funktionspruefung Kupplung Modus  : Default

_No arguments._

### STATUS_AKTUELLES_AIF_LESEN

Auslesen des Anwender Informations Feldes KWP 2000: $1A ReadEcuIdentification LID86 Modus   : Default

_No arguments._

### VGSG_DIAGNOSE_TESTJOB

Job fuer VGSG Diagnosetest KWP2000*: Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ANZAHL_DATEN | int | Anzahl Datenbytes |
| DATEN_1 | int | Daten Byte 1 |
| DATEN_2 | int | Daten Byte 2 |
| DATEN_3 | int | Daten Byte 3 |
| DATEN_4 | int | Daten Byte 4 |
| DATEN_5 | int | Daten Byte 5 |
| DATEN_6 | int | Daten Byte 6 |

## Tables

### KONZEPT_TABELLE

| NR | KONZEPT_TEXT |
| --- | --- |
| 0x0D | KWP2000* |
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

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x5208 | 5208 Stellmotor Verkabelung |
| 0x52D0 | 52D0 Inkrementalgeber DIR - Leitung |
| 0x52D1 | 52D1 Inkrementalgeber Versorgung |
| 0x52D2 | 52D2 Inkrementalgeber IMP - Leitung |
| 0x52D4 | 52D4 Inkrementalgeber unplausibel |
| 0x5398 | 5398 Prüfsummenfehler Programmcode |
| 0x5399 | 5399 Prüfsummenfehler EEPROM |
| 0x539A | 539A Watchdog Fehlfunktion |
| 0x539B | 539B Prüffehler  RAM |
| 0x539D | 539D Steuergerät interner Fehler |
| 0x53A0 | 53A0 Verteilergetriebe Steuergerät - Codierung |
| 0x53FB | 53FB FEHLENDE_VERSORGUNG |
| 0x53FC | 53FC KL30 Versorgungsspannung |
| 0x53FE | 53FE Unerwarteter Reset |
| 0x53FF | 53FF Kl15 Plausibilität |
| 0x5460 | 5460 Motorstrommessung Plausibilität |
| 0x5461 | 5461 Fehler Stellmotoransteuerung |
| 0x5462 | 5462 Fehler Stellmotor oder erhöhter Kraftbedarf Kupplung |
| 0x5463 | 5463 Bruch Mechanik |
| 0x54C4 | 54C4 Erstkalibrierung fehlerhaft |
| 0x54C5 | 54C5 Motorstrommessung Offset Strommessung |
| 0x54C6 | 54C6 Ölverschleiss |
| 0x55C0 | 55C0 Notlaufregler Abbruch |
| 0x55C4 | 55C4 CAN_MESSAGE_DSC1 |
| 0x55C5 | 55C5 CAN_MESSAGE_DME1 |
| 0x55C6 | 55C6 CAN_MESSAGE_DME2 |
| 0x55C8 | 55C8 CAN_MESSAGE_ASC2 |
| 0x55C9 | 55C9 CAN_MESSAGE_ASC4 |
| 0x55CA | 55CA CAN_MESSAGE_INSTR2 |
| 0x55CB | 55CB CAN_MESSAGE_INSTR3 |
| 0x55CC | 55CC CAN_MESSAGE_ASC1 |
| 0x55CD | 55CD CAN_MESSAGE_ASC3 |
| 0x55CE | 55CE CAN_MESSAGE_EGS1_SMG1 |
| 0x55CF | 55CF CAN_MESSAGE_EGS2 |
| 0x55D0 | 55D0 CAN_MESSAGE_LWS1 |
| 0xD607 | D607 CAN Bus Off |
| 0xD614 | D614 CAN_TIMEOUT_DSC1 |
| 0xD615 | D615 CAN_TIMEOUT_DME1 |
| 0xD616 | D616 CAN_TIMEOUT_DME2 |
| 0xD618 | D618 CAN_TIMEOUT_ASC2 |
| 0xD619 | D619 CAN_TIMEOUT_ASC4 |
| 0xD61A | D61A CAN_TIMEOUT_INSTR2 |
| 0xD61B | D61B CAN_TIMEOUT_INSTR3 |
| 0xD61C | D61C CAN_TIMEOUT_ASC1 |
| 0xD61D | D61D CAN_TIMEOUT_ASC3 |
| 0xD61E | D61E CAN_TIMEOUT_EGS1_SMG1 |
| 0xD61F | D61F CAN_TIMEOUT_EGS2 |
| 0xD620 | D620 CAN_TIMEOUT_LWS1 |
| 0x55C1 | 55C1 ALLRADVERLUST |
| 0x54C7 | 54C7 INC_MODEL_UNPLAUSIBEL |
| 0x54C8 | 54C8 Klassierwiderstand am Stellmotor |
| 0x539E | 539E Funktionsfehler VTG Gesamtsystem |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FARTTEXTEERWEITERT

| ARTMASKE | ARTNR | ARTTEXT |
| --- | --- | --- |
| xxxx00xx | 20 | Text a |
| xxxx01xx | 21 | Text b |
| xxxx10xx | 22 | Text c |
| xxxx11xx | 23 | Text d |
| xxxxxx01 | 11 | Text x |
| xxxxxx10 | 12 | Text y |
| xxxxxxxx | 0 | -- |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x5208 | 0x01 | FF_x_a | FF_3_b | - |
| 0x54C8 | 0x01 | FF_x_a | FF_3_b | - |
| 0x52D0 | 0x01 | FF_x_a | FF_2_b | FF_2_c |
| 0x52D1 | 0x01 | FF_x_a | FF_2_b | FF_2_c |
| 0x52D2 | 0x01 | FF_x_a | FF_2_b | FF_2_c |
| 0x52D4 | 0x01 | FF_x_a | FF_2_b | FF_2_c |
| 0x5398 | 0x01 | FF_x_a | FF_7_b | - |
| 0x5399 | 0x01 | FF_x_a | FF_7_b | - |
| 0x539A | 0x01 | FF_x_a | FF_4_b | - |
| 0x539B | 0x01 | FF_x_a | FF_4_b | - |
| 0x539D | 0x01 | FF_x_a | FF_4_b | - |
| 0x53A0 | 0x01 | FF_x_a | FF_4_b | - |
| 0x53FB | 0x01 | FF_x_a | FF_1_b | 0x0F |
| 0x53FC | 0x01 | FF_x_a | FF_2_b | FF_2_c |
| 0x53FE | 0x01 | FF_x_a | FF_1_b | 0x0F |
| 0x53FF | 0x01 | FF_x_a | FF_0_b | - |
| 0x5460 | 0x01 | FF_x_a | FF_6_b | - |
| 0x5461 | 0x01 | FF_x_a | FF_6_b | - |
| 0x5462 | 0x01 | FF_x_a | FF_6_b | - |
| 0x5463 | 0x01 | FF_x_a | FF_6_b | - |
| 0x54C4 | 0x01 | FF_x_a | FF_6_b | - |
| 0x54C5 | 0x01 | FF_x_a | FF_6_b | - |
| 0x54C6 | 0x01 | FF_x_a | FF_0_b | - |
| 0x54C7 | 0x01 | FF_x_a | FF_6_b | - |
| 0x539E | 0x01 | FF_x_a | FF_6_b | - |
| 0x55C4 | 0x01 | FF_x_a | FF_8_b | - |
| 0x55C5 | 0x01 | FF_x_a | FF_9_b | - |
| 0x55C8 | 0x01 | FF_x_a | FF_A_b | - |
| 0x55C1 | 0x01 | FF_x_a | FF_B_b | - |
| default | 0x01 | FF_x_a | FF_5_b | - |

### FF_X_0

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x02 | 0x03 | 0x04 |

### FF_X_A

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x02 | 0x03 | 0x04 | 0x05 |

### FF_0_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0A | 0x0B |

### FF_1_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x06 | 0x0B | 0x12 | 0x13 |

### FF_2_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x0E | 0x07 | 0x08 | 0x09 | 0x0B |

### FF_2_C

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x15 | 0x16 | 0x17 | 0x18 | 0x19 |

### FF_3_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x06 | 0x07 | 0x09 | 0x0B | 0x13 | 0x0E |

### FF_4_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x0E | 0x0B | 0x1A | 0x12 | 0x13 |

### FF_5_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0B | 0x14 |

### FF_6_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x0E | 0x07 | 0x10 | 0x09 | 0x0B | 0x11 |

### FF_7_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x1B | 0x1C | 0x1A | 0x12 | 0x13 |

### FF_8_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0B | 0x1D |

### FF_9_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0B | 0x1E |

### FF_A_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0B | 0x1F |

### FF_B_B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 0x20 | 0x21 | 0x0B | 0x09 | 0x22 | 0x23 | 0x24 |

### KL15CAN

| WERT | UWTEXT |
| --- | --- |
| 0x00 | CAN Signal OK -- KL15 aus |
| 0x01 | CAN Signal OK -- KL15 ein |
| 0xXY | CAN Signal Timeout -- KL15 unbekannt |

### KL15

| WERT | UWTEXT |
| --- | --- |
| 0x00 | KL15. aus |
| 0x04 | KL15. ein |

### NMOT

| WERT | UWTEXT |
| --- | --- |
| 0x00 | CAN Signal OK -- VKM aus |
| 0x08 | CAN Signal OK -- VKM ein |
| 0x10 | Ersatzwert -- VKM aus |
| 0x18 | Ersatzwert -- VKM ein |

### RQ

| WERT | UWTEXT |
| --- | --- |
| 0x00 | UNKOWN_SOURCE |
| 0x20 | EE_RST_MARKER |
| 0x40 | OSEK_SHUTDOWN |
| 0x60 | BASIS_DRIVER_ERROR |
| 0x80 | UNDER_VOLTAGE |
| 0xA0 | INTERNAL_WATCHDOG |
| 0xC0 | EXTERN_WATCHDOG |
| 0xE0 | NO RESET |

### DSC1

| WERT | UWTEXT |
| --- | --- |
| 0x01 | DSC1_MK_SOLL |
| 0x02 | DSC1_S_OEFFNEN |
| 0x04 | DSC1_DYN_MK_SOLL |
| 0x08 | DSC1_FKT_TEST |
| 0x10 | DSC1_NL_OEFFNEN  |
| 0xXY | multiple Signals |

### DME1

| WERT | UWTEXT |
| --- | --- |
| 0x01 | DME1_DDE1_N_MOT |
| 0x02 | DME1_DDE1_MD_IND_NE |
| 0x04 | DME1_DDE1_MD_IND |
| 0x08 | DME1_DDE1_MD_REIB |
| 0x10 | DME1_DDE1_S_KL15 |
| 0xXY | multiple Signals |

### ASC2

| WERT | UWTEXT |
| --- | --- |
| 0x01 | ASC2_VRD_RV_ASC |
| 0x02 | ASC2_VRD_LV_ASC |
| 0x04 | ASC2_VRD_RH_ASC |
| 0x08 | ASC2_VRD_LH_ASC |
| 0xXY | multiple Signals |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Eingangsspannung KL30 | Volt | - | unsigned char | - |  1 |  8 | 0 |
| 0x02 | KL15 Status CAN | 0-n | - | 0x03 | KL15CAN |  1 |  1 | 0 |
| 0x03 | KL15 Intern | 0-n | - | 0x04 | KL15 |  1 |  1 | 0 |
| 0x04 | Motordrehzahl | 0-n | - | 0x18 | NMOT |  1 |  1 | 0 |
| 0x05 | Reset-Quelle | 0-n | - | 0xE0 | RQ |  1 |  1 | 0 |
| 0x06 | MKSOLL | Nm | - | unsigned char | - | 10 |  1 | 0 |
| 0x07 | MSperrIstPosLim | Nm | - | unsigned char | - |  8 |  1 | 0 |
| 0x08 | deltaPhiSperreCal | Grad | - | unsigned char | - | -1 |  1 | 0 |
| 0x09 | SperreError | 1 | - | unsigned char | - |  1 |  1 | 0 |
| 0x0A | SperreState | 1 | - | unsigned char | - |  1 |  1 | 0 |
| 0x0B | SperreMainState | 1 | - | unsigned char | - |  1 |  1 | 0 |
| 0x0E | iSM | Ampere | - | signed char | - |  1 |  2 | 0 |
| 0x0F | ResetWhileEngineOn | 0/1 | - | 0x01 | - |  1 |  1 | 0 |
| 0x10 | Fehlerzähler Kalibrierversuche | 1 | - | unsigned char | - |  1 |  1 | 0 |
| 0x11 | Fehlerzähler Zeitüberschreitung | 1 | - | unsigned char | - |  1 |  1 | 0 |
| 0x12 | SwErrNr | HEX | - | unsigned int | H |  1 |  1 | 0 |
| 0x13 | SGTemp | Grad C | - | signed char | - |  2 |  1 | 0 |
| 0x14 | CAN_Fehlersignale | 1 | - | unsigned char | _ |  1 |  1 | 0 |
| 0x15 | uSM_IE_VCC_ST | 0/1 | - | 0x01 | - |  1 |  1 | 0 |
| 0x16 | Plausib_Ink_Gradient | 0/1 | - | 0x02 | - |  1 |  1 | 0 |
| 0x17 | Plausib_Ink_Frequenz | 0/1 | - | 0x04 | - |  1 |  1 | 0 |
| 0x18 | Plausib_MotorModell | 0/1 | - | 0x08 | - |  1 |  1 | 0 |
| 0x19 | Plausib_Ink_Wackler | 0/1 | - | 0x10 | - |  1 |  1 | 0 |
| 0x1A | Page Number | HEX | - | unsigned char | - |  1 |  1 | 0 |
| 0x1B | Info | 1 | - | unsigned char | - |  1 |  1 | 0 |
| 0x1C | Status | 1 | - | unsigned char | - |  1 |  1 | 0 |
| 0x1D | DSC1_Fehlersignale | 0-n | - | 0x1F | DSC1 |  1 |  1 | 0 |
| 0x1E | DME1_Fehlersignale | 0-n | - | 0x1F | DME1 |  1 |  1 | 0 |
| 0x1F | ASC2_Fehlersignale | 0-n | - | 0x0F | ASC2 |  1 |  1 | 0 |
| 0x20 | SperreNotlauf | 1 | - | unsigned char | - |  1 |  1 | 0 |
| 0x21 | EP_Sperre | 1 | - | unsigned char | - |  1 |  1 | 0 |
| 0x22 | ExeptionHandlingKUPPSTAT | 1 | - | unsigned char | - |  1 |  1 | 0 |
| 0x23 | ExeptionHandlingKUPPSTATERR | 1 | - | unsigned char | - |  1 |  1 | 0 |
| 0x24 | ErrorKUPPSTAT | 1 | - | unsigned char | - |  1 |  1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | - | unsigned char | - |  1 |  1 | 0 |

### MESSDATENTEXTE

| MDNR | MDTEXT | MD_EINH | L/H | MDTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Status Kupplung | - | -- | unsigned char | -- |  1 |  1 | 0 |
| 0x02 | Aktuator Strom | Amp | -- | signed int | -- | 12 | 77 | 0 |
| 0x04 | Motortemperatur | Grad C | -- | signed int | -- |  1 | 128 | 0 |
| 0x05 | Motorbelastungsgrad | Prozent | -- | unsigned char | -- |  1 |  1 | 0 |
| 0x0C | Motordrehzahl | 1/min | -- | unsigned int | -- | 12 | 77 | 0 |
| 0x0D | Batteriespannung | Volt | -- | unsigned char | -- |  1 |  8 | 0 |
| 0x10 | Aktuatorposition | Grad | -- | signed int | -- |  1 | 16 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | low | unsigned char | -- |  1 |  1 | 0 |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x5398 | Prüfsummenfehler Programmcode |
| 0x5399 | Prüfsummenfehler EEPROM |
| 0x539B | Prüffehler  RAM |
| 0x1004 | Fehler d |
| 0x1005 | Fehler e |
| 0x1006 | Fehler f |
| 0xFFFF | unbekannter Fehlerort |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_HFK | nein |
| F_LZ | ja |
| F_UWB_ERW | ja |

### IUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| default | 0x01 | 0x02 | -- | -- |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Batteriespannung | Volt | -- | unsigned char | -- | 1 | 22 | 0 |
| 0x02 | Aussentemperatur | Grad C | -- | signed char | -- | 1 | 1 | 0 |
| 0x03 | Motordrehzahl | 1/min | low | unsigned int | -- | 1 | 1 | 0 |
| 0xXY | unbekannte Umweltbedingung | 1 | -- | unsigned char | -- | 1 | 1 | 0 |
