# 15MRBMSE.PRG

## General

|  |  |
| --- | --- |
| File | 15MRBMSE.PRG |
| Type | PRG |
| Jobs | 160 |
| Tables | 24 |
| Origin | BMW_Motorrad UX-EE-1 Stefan Krimmer |
| Revision | 15.000 |
| Author | MM Motorbike Fabio_Felici, MM Motorbike Walter_Geri, BMW_Motorr |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | MRBMSE |  |  |
| ORIGIN | string | BMW_Motorrad UX-EE-1 Stefan Krimmer |  |  |
| REVISION | string | 15.000 |  |  |
| AUTHOR | string | MM Motorbike Fabio_Felici, MM Motorbike Walter_Geri, BMW_Motorr |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.58 |  |  |
| SPRACHE | string | English |  |  |

## Jobs

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

### SPEICHER_SCHREIBEN

Beschreiben des Steuergeraete-Speichers Als Argumente werden uebergeben: Speichersegment, Start-Adresse, Anzahl der Datenbytes und Datenbytes (Datenbytes durch Komma getrennt) KWP2000: $3D WriteMemoryByAddress Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | string | table SpeicherSegment SEG_NAME SEG_TEXT |
| ADRESSE | long | 0x000000 - 0xFFFFFF |
| ANZAHL | int | 1 - n ( max. 249 ) |
| DATEN | string | zu schreibende Daten (Anzahl siehe oben) z.B. 1,2,03,0x04,0x05... |

### C_CI_LESEN

Codierindex lesen Standard Codierjob KWP2000: $1A ReadECUIdentification $9B Vehicle Manufacturer Coding Index oder alternativ KWP2000: $1A ReadECUIdentification $80 ECUIdentificationDataTable Modus  : Default

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

### FLASH_PROGRAMMIER_STATUS_LESEN

Programmierstatus des SG lesen KWP2000: $31 StartRoutineByLocalIdentifier $0A CheckProgrammingStatus Modus  : Default

_No arguments._

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

### BAUDRATE_115200

Umschaltung auf 115200 Baud (und BMW-FAST wg. Fast-Initialisation)

_No arguments._

### NG_FLASH_LOESCHEN

Flash loeschen Standard Flashjob KWP2000: $31 StartRoutineByLocalIdentifier $02 ClearMemory Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : Loeschzeit in Sekunden (Byteparameter 1) Byte 5,6            : Loeschzeit in Sekunden (WordParameter 1 (low/high)) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : Anzahl Wortdaten (low/high) Byte 17,18,19,20    : Wortadresse (low/highbyte, low/highword) Byte 21,....        : (unbenutzt) Flashdaten Byte 21+Anzahl Daten: ETX (0x03) |

### FLASH_CHECKSUMME

Flash Checksumme pruefen KWP2000: $31 StartRoutineByLocalIdentifier $01 CheckCodingChecksum $02 Program (Application Code), $04 Data (Calibration Code) Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BEREICH | string | 'Programm' 'Daten' |
| SIGNATURTESTZEIT | int | Zeit in Sekunden |

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### FLASH_SCHREIBEN_XXL

Flash Daten schreiben XXL-Format Standard Flashjob KWP2000: $36 TransferData Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Als Argument wird ein vorgefuellter Binaerbuffer uebergeben Der Binaerbuffer hat folgenden Aufbau Byte 0              : Datentyp (1:Daten, 2:Maskendaten) Byte 1              : (unbenutzt) Wortbreite (1:Byte, 2:Word, 3:DWord) Byte 2              : (unbenutzt) Byteordnung (0:LSB zuerst, 1 MSB zuerst) Byte 3              : (unbenutzt) Adressierung (0: freie Adressierung, 1:Blockadressierung) Byte 4              : (unbenutzt) Byteparameter 1 Byte 5,6            : (unbenutzt) WordParameter 1 (low/high) Byte 7,8            : (unbenutzt) WordParameter 2 (low/high) Byte 9,10,11,12     : (unbenutzt) Maske (linksbuendig) Byte 13,14          : Anzahl Bytedaten (low/high) Byte 15,16          : (unbenutzt) Anzahl Wortdaten (low/high) Byte 17,18,19,20    : (unbenutzt) Wortadresse (low/highbyte, low/highword) Byte 21,....        : Flashdaten Byte 21+Anzahl Daten: ETX (0x03) |

### SEED_KEY

Security Access KWP2000: $27 Security Access Request $03 to $04 Access Mode

_No arguments._

### C_FA_LESEN

Fahrzeugauftrag lesen KWP2000: $22   ReadDataByCommonIdentifier $3F00 vehicle order Modus  : Default

_No arguments._

### C_FA_SCHREIBEN

Fahrzeugauftrag schreiben KWP2000: $2E   WriteDataByCommonIdentifier $3F00 Fahrzeugauftrag Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FAHRZEUGAUFTRAG | string |  |

### C_FA_AUFTRAG

Fahrzeugauftrag schreiben und zuruecklesen KWP2000: $2E   WriteDataByCommonIdentifier $3F00 vehicle order KWP2000: $22   ReadDataByCommonIdentifier $3F00 vehicle order Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FAHRZEUGAUFTRAG | string | max Laenge 200 Byte |

### C_FG_LESEN

7-stellige Fahrgestellnummer lesen KWP 2000: $22 ReadDataByCommonIdentifier CommonIdentifier=0x1010 Modus   : Default

_No arguments._

### STATUS_BOOT_VERSION

Identdaten KWP2000: $1A ReadBootVersion Modus  : Default

_No arguments._

### STATUS_LIEFERUNG_VERSION

Software Delivery Type KWP2000: $22 ReadDataByCommonIdentifier $1020 Read Software Delivery Type Modus  : Default

_No arguments._

### STATUS_SW_CALIB_VERSION

Software Ident KWP2000: $22 ReadDataByCommonIdentifier $2510 Read Software and Calibration Version Modus  : Default

_No arguments._

### STATUS_DIGITAL_KL15

Status Klemme 15 KWP2000: $22 ReadDataByCommonIdentifier $0031 Status Digital Klemme 15 Modus  : Default

_No arguments._

### STATUS_ROHWERT_BATTERIESPANNUNG

Bordnetzspannung Rohwert KWP2000: $22 ReadDataByCommonIdentifier $0006 Battery Voltage (raw) Modus  : Default

_No arguments._

### STATUS_BATTERIESPANNUNG

Bordnetzspannung KWP2000: $22 ReadDataByCommonIdentifier $0007 Battery Voltage (processed) Modus  : Default

_No arguments._

### STATUS_ROHWERT_BREMSE

Spannung Bremsschalter Rohwert KWP2000: $22 ReadDataByCommonIdentifier $0020 Brake Switch input voltage Modus  : Default

_No arguments._

### STATUS_DIGITAL_BREMSE

Status Bremsschalter KWP2000: $22 ReadDataByCommonIdentifier $0021 Status Digital Bremse Modus  : Default

_No arguments._

### STATUS_DIGITAL_KILL_SCHALTER

Status Kill-Schalter KWP2000: $22 ReadDataByCommonIdentifier $0032 Status Digital Kill-Schalter Modus  : Default

_No arguments._

### STATUS_DIGITAL_START_SCHALTER

Status Start-Schalter KWP2000: $22 ReadDataByCommonIdentifier $0033 Status Digital Start-Schalter Modus  : Default

_No arguments._

### STATUS_ROHWERT_DROSSELKLAPPE

Spannung Drosselklappe Rohwert KWP2000: $22 ReadDataByCommonIdentifier $0000 TPS Voltage Modus  : Default

_No arguments._

### STATUS_ROHWERT_DROSSELKLAPPE_ADAPTIERT

Spannung Drosselklappe Rohwert Adaptiert KWP2000: $22 ReadDataByCommonIdentifier $0005 TPS Voltage Adapted Modus  : Default

_No arguments._

### STATUS_DROSSELKLAPPENWINKEL

Drosselklappenwinkel KWP2000: $22 ReadDataByCommonIdentifier $0004 TPS Angle Modus  : Default

_No arguments._

### STATUS_DROSSELKLAPPENPOSITION

Drosselklappenposition KWP2000: $22 ReadDataByCommonIdentifier $0001 TPS percentage Modus  : Default

_No arguments._

### STATUS_ROHWERT_GETRIEBEEINGANG

Spannung Getriebeeingang Rohwert KWP2000: $22 ReadDataByCommonIdentifier $0014 Gear input Voltage Modus  : Default

_No arguments._

### STATUS_DIGITAL_NEUTRALSCHALTER

Status Neutralschalter KWP2000: $22 ReadDataByCommonIdentifier $0015 Status Digital Neutralschalter Modus  : Default

_No arguments._

### STATUS_DIGITAL_GANG

Status Gang KWP2000: $22 ReadDataByCommonIdentifier $0025 Status Digital Gang Modus  : Default

_No arguments._

### STATUS_ROHWERT_SSA

Spannung Seitenstuetze E Rohwert KWP2000: $22 ReadDataByCommonIdentifier $0022 Side-stand Switch 1 Voltage Modus  : Default

_No arguments._

### STATUS_ROHWERT_SSA2

Spannung Seitenstuetze A Rohwert KWP2000: $22 ReadDataByCommonIdentifier $0023 Side-stand Switch 2 Voltage Modus  : Default

_No arguments._

### STATUS_ROHWERT_KUPPLUNGSSCHALTER

Spannung Kupplungseingang Rohwert KWP2000: $22 ReadDataByCommonIdentifier $0026 Clutch switch input Voltage Modus  : Default

_No arguments._

### STATUS_KUPPLUNGSSCHALTER

Status Kupplungsschalter KWP2000: $22 ReadDataByCommonIdentifier $0027 Status Kupplungsschalter Modus  : Default

_No arguments._

### STATUS_DIGITAL_SEITENSTUETZE

Status Seitenstuetze KWP2000: $22 ReadDataByCommonIdentifier $0024 Status Digital Seitenstuetze Modus  : Default

_No arguments._

### STATUS_DIGITAL_OELNIVEAUSCHALTER

Status Oelniveauschalter KWP2000: $22 ReadDataByCommonIdentifier $0041 Status Digital Oelniveauschalter Modus  : Default

_No arguments._

### STATUS_OELNIVEAU

Status Oelniveau KWP2000: $22 ReadDataByCommonIdentifier $0042 Oil Level Status Modus  : Default

_No arguments._

### STATUS_DIGITAL_ABS_TASTER

Status ABS Taster KWP2000: $22 ReadDataByCommonIdentifier $0028 Status Digital ABS Taster Modus  : Default

_No arguments._

### STATUS_ROHWERT_OELTEMPERATUR

Spannung Oeltemperatur Rohwert KWP2000: $22 ReadDataByCommonIdentifier $0016 Oil Temperature Voltage Modus  : Default

_No arguments._

### STATUS_OELTEMPERATUR

Oeltemperatur KWP2000: $22 ReadDataByCommonIdentifier $0017 Oil Temperature Modus  : Default

_No arguments._

### STATUS_ROHWERT_KUEHLWASSERTEMPERATUR

Spannung Kuehlwassertemperatur Rohwert KWP2000: $22 ReadDataByCommonIdentifier $0008 Coolant Temperature Sensor Voltage Modus  : Default

_No arguments._

### STATUS_KUEHLWASSERTEMPERATUR

Kuehlwassertemperatur KWP2000: $22 ReadDataByCommonIdentifier $0009 Coolant Temperature Modus  : Default

_No arguments._

### STATUS_ROHWERT_ANSAUGLUFTTEMPERATUR

Spannung Ansauglufttemperatur Rohwert KWP2000: $22 ReadDataByCommonIdentifier $0010 Air Temperature Sensor Voltage Modus  : Default

_No arguments._

### STATUS_ANSAUGLUFTTEMPERATUR

Ansauglufttemperatur KWP2000: $22 ReadDataByCommonIdentifier $0011 Air Temperature Modus  : Default

_No arguments._

### STATUS_ROHWERT_LAMBDA

Spannung Lambda Rohwert KWP2000: $22 ReadDataByCommonIdentifier $0012 Lambda Sensor Voltage Modus  : Default

_No arguments._

### STATUS_LAMBDA

Status Lambda KWP2000: $22 ReadDataByCommonIdentifier $0013 Status Lambda Modus  : Default

_No arguments._

### STATUS_MOTORDREHZAHL

Motordrehzahl KWP2000: $22 ReadDataByCommonIdentifier $0100 Engine Speed Modus  : Default

_No arguments._

### STATUS_FAHRZEUGGESCHWINDIGKEIT

Status Fahrzeuggeschwindigkeit KWP2000: $22 ReadDataByCommonIdentifier $0101 Fahrzeuggeschwindigkeit Modus  : Default

_No arguments._

### STATUS_DIGITAL_LASTRELAIS

Status Lastrelais KWP2000: $22 ReadDataByCommonIdentifier $0061 Status Digital Lastrelais Modus  : Default

_No arguments._

### STATUS_DIGITAL_START_RELAIS

Status Start-Relais KWP2000: $22 ReadDataByCommonIdentifier $0062 Status Digital Start-Relais Modus  : Default

_No arguments._

### STATUS_DIGITAL_EKP_RELAIS

Status EKP-Relais KWP2000: $22 ReadDataByCommonIdentifier $0060 Status Digital EKP-Relais Modus  : Default

_No arguments._

### STATUS_DIGITAL_LUEFTERRELAIS

Status Luefterrelais KWP2000: $22 ReadDataByCommonIdentifier $0063 Status Digital Luefterrelais Modus  : Default

_No arguments._

### STATUS_TEV

Status TEV KWP2000: $22 ReadDataByCommonIdentifier $0185 PWM TEV Modus  : Default

_No arguments._

### STATUS_EINSPRITZDAUER_ZYL1

Status Einspritzventil 1 KWP2000: $22 ReadDataByCommonIdentifier $0110 Einspritzdauer Zylinder 1 Modus  : Default

_No arguments._

### STATUS_EINSPRITZDAUER_ZYL2

Status Einspritzventil 2 KWP2000: $22 ReadDataByCommonIdentifier $0111 Einspritzdauer Zylinder 2 Modus  : Default

_No arguments._

### STATUS_DIGITAL_UEBERTEMPERATURWARNLEUCHTE

Status Uebertemperaturwarnleuchte KWP2000: $22 ReadDataByCommonIdentifier $0108 Status Digital Uebertemperaturwarnleuchte Modus  : Default

_No arguments._

### STATUS_ZUENDZEITPUNKT_ZYL1

Status Zuendzeitpunkt Zyl. 1 KWP2000: $22 ReadDataByCommonIdentifier $0120 Zuendzeitpunkt Zylinder 1 Modus  : Default

_No arguments._

### STATUS_SCHLIESSZEIT_ZYL1

Status Schliesszeit Zyl. 1 KWP2000: $22 ReadDataByCommonIdentifier $0130 Schliesszeit Zylinder 1 Modus  : Default

_No arguments._

### STATUS_ZUENDZEITPUNKT_ZYL2

Status Zuendzeitpunkt Zyl. 2 KWP2000: $22 ReadDataByCommonIdentifier $0121 Zuendzeitpunkt Zylinder 2 Modus  : Default

_No arguments._

### STATUS_SCHLIESSZEIT_ZYL2

Status Schliesszeit Zyl. 2 KWP2000: $22 ReadDataByCommonIdentifier $0131 Schliesszeit Zylinder 2 Modus  : Default

_No arguments._

### STATUS_ABGASKLAPPE

Status Abgasklappenposition KWP2000: $22 ReadDataByCommonIdentifier $0186 Abgasklappenposition Modus  : Default

_No arguments._

### STATUS_LAM1_HZ

Status Lambdasondenheizung KWP2000: $22 ReadDataByCommonIdentifier $0190 PWM Lambdasondenheizung Modus  : Default

_No arguments._

### STATUS_STEPPERMOTOR

Status Steppermotorposition KWP2000: $22 ReadDataByCommonIdentifier $0090 Stepper Motor Position Modus  : Default

_No arguments._

### STATUS_ROHWERT_UMGEBUNGSDRUCK

Spannung Umgebungsdruck Rohwert KWP2000: $22 ReadDataByCommonIdentifier $0002 Atmospheric Pressure Sensor Voltage Modus  : Default

_No arguments._

### STATUS_UMGEBUNGSDRUCK

Status Umgebungsdruck KWP2000: $22 ReadDataByCommonIdentifier $0003 Umgebungsdruck Modus  : Default

_No arguments._

### STATUS_VORDERRADGESCHWINDIGKEIT

Status Vorderradgeschwindigkeit KWP2000: $22 ReadDataByCommonIdentifier $0103 Geschwindigkeit Vorderrad Modus  : Default

_No arguments._

### STATUS_HINTERRADGESCHWINDIGKEIT

Status Hinterradgeschwindigkeit KWP2000: $22 ReadDataByCommonIdentifier $0104 Geschwindigkeit Hinterrad Modus  : Default

_No arguments._

### STATUS_LEERLAUFDREHZAHL_SOLL

Status Sollleerlaufdrehzahl KWP2000: $22 ReadDataByCommonIdentifier $0105 Leerlaufdrehzahl Soll Modus  : Default

_No arguments._

### STATUS_LEERLAUFADAPTIONSWERT

Status Leerlaufadaptionswert KWP2000: $22 ReadDataByCommonIdentifier $0106 Leerlaufadaptionswert (Stepper) Modus  : Default

_No arguments._

### STATUS_DIGITAL_LAMBDASONDENHEIZUNG

Status Lambdasondenheizung KWP2000: $22 ReadDataByCommonIdentifier $0064 Status Digital Lambdasondenheizung Modus  : Default

_No arguments._

### STATUS_LAMBDAREGELFAKTOR

Status Lambdaregelfaktor KWP2000: $22 ReadDataByCommonIdentifier $0065 Lambdaregelfaktor Modus  : Default

_No arguments._

### STATUS_LAMBDAREGELADAPTION

Status Lambdaregeladaption KWP2000: $22 ReadDataByCommonIdentifier $0066 Lambdaregeladaption Modus  : Default

_No arguments._

### STATUS_DIGITAL_LAMBDAREGELUNG

Status Lambdaregelung KWP2000: $22 ReadDataByCommonIdentifier $0067 Status Digital Lambdaregelung Modus  : Default

_No arguments._

### STATUS_DIGITAL_MOTORLAST

Status Motorlast KWP2000: $22 ReadDataByCommonIdentifier $0068 Status Digital Motorlast Modus  : Default

_No arguments._

### STATUS_DROSSELKLAPPENADAPTION_ZU

Status Drosselklappenadaption Zu KWP2000: $22 ReadDataByCommonIdentifier $0018 Drosselklappenadaption Position Zu Modus  : Default

_No arguments._

### STATUS_DROSSELKLAPPENADAPTION_AUF

Status Drosselklappenadaption Auf KWP2000: $22 ReadDataByCommonIdentifier $0019 Drosselklappenadaption Position Auf Modus  : Default

_No arguments._

### STATUS_GANGADAPTION_GANG_1

Status Gangadaption 1 KWP2000: $22 ReadDataByCommonIdentifier $0141 Adaptionswert Gang 1 Modus  : Default

_No arguments._

### STATUS_GANGADAPTION_GANG_2

Status Gangadaption 2 KWP2000: $22 ReadDataByCommonIdentifier $0142 Adaptionswert Gang 2 Modus  : Default

_No arguments._

### STATUS_GANGADAPTION_GANG_3

Status Gangadaption 3 KWP2000: $22 ReadDataByCommonIdentifier $0143 Adaptionswert Gang 3 Modus  : Default

_No arguments._

### STATUS_GANGADAPTION_GANG_4

Status Gangadaption 4 KWP2000: $22 ReadDataByCommonIdentifier $0144 Adaptionswert Gang 4 Modus  : Default

_No arguments._

### STATUS_GANGADAPTION_GANG_5

Status Gangadaption 5 KWP2000: $22 ReadDataByCommonIdentifier $0145 Adaptionswert Gang 5 Modus  : Default

_No arguments._

### STATUS_GANGADAPTION_GANG_6

Status Gangadaption 6 KWP2000: $22 ReadDataByCommonIdentifier $0146 Adaptionswert Gang 6 Modus  : Default

_No arguments._

### STATUS_FAHRZEUGMODUS_SOLL

Status Fahrzeugmodus Soll KWP2000: $22 ReadDataByCommonIdentifier $0151 Status Fahrzeugmodus Soll Modus  : Default

_No arguments._

### STATUS_FAHRZEUGMODUS_IST

Status Fahrzeugmodus IST KWP2000: $22 ReadDataByCommonIdentifier $0152 Status Fahrzeugmodus IST Modus  : Default

_No arguments._

### STATUS_DIGITAL_STARTFREIGABE

Status Startfreigabe KWP2000: $22 ReadDataByCommonIdentifier $0070 Status Digital Startfreigabe Modus  : Default

_No arguments._

### STATUS_DIGITAL_EWS_FREIGABE

Status EWS-Freigabe KWP2000: $22 ReadDataByCommonIdentifier $0071 Status Digital EWS-Freigabe Modus  : Default

_No arguments._

### STATUS_DIGITAL_MOTORWARNLEUCHTE

Status Motorwarnleuchte KWP2000: $22 ReadDataByCommonIdentifier $0072 Status Digital Motorwarnleuchte Modus  : Default

_No arguments._

### STATUS_DIGITAL_SHOWROOMMODUS

Status Showroommodus KWP2000: $22 ReadDataByCommonIdentifier $1021 Status Digital Showroommodus Modus  : Default

_No arguments._

### STATUS_GEMISCHADAPTION

Fuel Adaption Table Reading KWP2000: $22 ReadDataByCommonIdentifier $0300 ReadWarmAdaptionTable $0301 ReadColdAdaptionTable Modus  : Default

_No arguments._

### STATUS_DIGITAL_GEPAECKFACH

Status Gepaeckfach KWP2000: $22 ReadDataByCommonIdentifier $0073 Status Digital Gepaeckfach Modus  : Default

_No arguments._

### STATUS_DIGITAL_SYNCRO

Status Motorsyncronization KWP2000: $22 ReadDataByCommonIdentifier $0076 Status Digital Syncro Modus  : Default

_No arguments._

### STATUS_EWS

KWP 2000: $22 ReadDataByCommonIdentifier CommonIdentifier=0xC000 Zurücklesen verschiedener interner Stati für EWS

_No arguments._

### STATUS_EWS4_SK

KWP 2000: $22 ReadDataByCommonIdentifier CommonIdentifier=0xC002 Lesen des SecretKey des Server sowie Client für EWS4

_No arguments._

### STEUERN_EWS4_SK

17 "EWS4-data" schreiben KWP 2000: $2E WriteDataByCommonIdentifier CommonIdentifier=0xC001

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | Byte0 LOCK_SERVER_SK LOCK_CLIENT_SK WRITE_SERVER_SK WRITE_CLIENT_SK UNLOCK_CLIENT_SK RESET_CLIENT_SK |
| DATA | string | Byte1...16 16 Byte Daten (SecretKey), falls MODE = WRITE_SERVER_SK/WRITE_CLIENT_SK, "0x01,0x02,.." 16 Byte Daten (Hash code), falls MODE = RESET_CLIENT_SK, "0x01,0x02,.." KEINE Daten nötig, falls MODE = LOCK_SERVER_SK/LOCK_CLIENT_SK |

### STATUS_HIREVCNT

KWP2000: $22 ReadDataByCommonIdentifier $0501 Modus  : Default

_No arguments._

### STATUS_GWSZ_ANZEIGE

Lesen des Kilometerstandes KWP2000:    $22   ReadDataByCommonIdentifier $C010 "redundanter Kilometerstand" Modus:      Default

_No arguments._

### STEUERN_GWSZ_ANZEIGE_SCHREIBEN

Schreiben des Kilometerstandes KWP2000:    $2E   WriteDataByCommonIdentifier $C011 "redundanter Kilometerstand schreiben" Modus:      Default

| Name | Type | Description |
| --- | --- | --- |
| GWSZ_ANZEIGE_WERT | real | Tachometerstand (KM oder Meilen) gueltiger Bereich: 0 bis 999999 km |
| GWSZ_ANZEIGE_EINH | string | km od. miles |

### STATUS_SERVICE_RESTWEG

redundanten BMSKP KM-Zaehlerstand bis zum naechsten Service auslesen KWP2000: $22   ReadDataByCommonIdentifier $C030 Local-ID für Lesen SERVKM zusaetzlich wird noch der BMSKP interne KM-Stand ausgelesen daraus wird die Differenz (Intervall/Zaehlerstand) berechnet  KWP2000: $22   ReadDataByCommonIdentifier KWP2000: $C010 Local-ID für internen KM-Stand lesen

_No arguments._

### STEUERN_SERVICE_RESTWEG

redundanten BMSKP KM-Zaehlerstand bis zum naechsten Service setzen KWP2000: $2E   WriteDataByCommonIdentifier $C031 Local-ID für Service Datum (SERVKM) schreiben [km] zusaetzlich wird noch der BMSKP interne KM-Stand ausgelesen dazu wird das Intervall/Zaehlerstand addiert  KWP2000: $22   ReadDataByCommonIdentifier KWP2000: $C010 Local-ID für internen KM-Stand lesen

| Name | Type | Description |
| --- | --- | --- |
| SERV_WEG_WERT | real | Neuer Startwert fuer Serviceintervallzaehler in km oder meilen (nur ganze Werte <= 65535 eingeben) |
| SERV_WEG_EINH | string | km od. miles |

### STATUS_SERVICE_DATE

redundantes Service-Datum aus BMSKP auslesen KWP2000: $22   ReadDataByCommonIdentifier $C032 Local-ID für Lesen SERVDAT

_No arguments._

### STEUERN_SERVICE_DATE

redundantes Service-Datum in BMSKP Setzen KWP2000: $2E   WriteDataByCommonIdentifier $C033 Local-ID für Service Datum (SERVDAT) schreiben

| Name | Type | Description |
| --- | --- | --- |
| SERV_DATE_DD | int | Service-Datum: Tag  TT = 1..28,29,30,31 |
| SERV_DATE_MM | int | Service-Datum: Monat  MM = 1..12 |
| SERV_DATE_YYYY | int | Service-Datum: Jahr  YYYY = 2006..2099 |

### STATUS_FAHRGESTELLNUMMER

17 ASCII Byte Fahrgestell-Nummer KWP 2000: $22 ReadDataByCommonIdentifier CommonIdentifier=0x1010 Modus   : Default

_No arguments._

### STEUERN_FAHRGESTELLNUMMER

17 ASCII "Fahrgestellnummer" schreiben KWP2000: $2E WriteDataByCommonIdentifier CommonIdentifier=$1010 Full Vehicle Identification Number Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FG_NUMMER | string | "Fahrgestellnummer" 17 x {1...0A...Z} ======> Byte0-16 |

### STEUERN_LASTRELAIS

Steuern Lastrelais KWP2000: $31 StartRoutineByLocalIdentifier $A1 Start Routine Activation Load Relay Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ENTRY_OPTION | unsigned char | 0x00: TEST with a Timeout of 10s 0x01: Relay ON TEST Default: 0x00 |

### STEUERN_ENDE_LASTRELAIS

Steuern Ende Lastrelais KWP2000: $32 StopRoutineByLocalIdentifier $A1 Stop Routine Activation Load Relay Modus  : Default

_No arguments._

### STEUERN_EKP_RELAIS

Steuern EKP-Relais KWP2000: $31 StartRoutineByLocalIdentifier $A7 Start Routine Activation Fuel Pump Relay Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ENTRY_OPTION | unsigned char | 0x00: TEST with a Timeout of 10s 0x01: Relay ON TEST Default: 0x00 |

### STEUERN_ENDE_EKP_RELAIS

Steuern Ende EKP-Relais KWP2000: $32 StopRoutineByLocalIdentifier $A7 Stop Routine Activation Fuel Pump Relay Modus  : Default

_No arguments._

### STEUERN_LUEFTERRELAIS

Steuern Luefterrelais KWP2000: $31 StartRoutineByLocalIdentifier $A8 Start Routine Activation Fan Relay Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ENTRY_OPTION | unsigned char | 0x00: TEST with Relay OFF for the first 3s and ON for the next 7s, the Timeout is 10s 0x01: TEST with Relay OFF for the first 3s, then Relay ON without Timeout Default: 0x00 |

### STEUERN_ENDE_LUEFTERRELAIS

Steuern Ende Luefterrelais KWP2000: $32 StopRoutineByLocalIdentifier $A8 Stop Routine Activation Fan Relay Modus  : Default

_No arguments._

### STEUERN_TEV

Steuern TEV KWP2000: $31 StartRoutineByLocalIdentifier $A6 Start Routine Activation Canister Valve Modus  : Duty Cycle 15%, frequency 12Hz, up to timeout of 10s

_No arguments._

### STEUERN_ENDE_TEV

Steuern Ende TEV KWP2000: $32 StopRoutineByLocalIdentifier $A6 Stop Routine Activation Canister Valve Modus  : Stop immediately the active diagnosis test of the Canister Valve

_No arguments._

### STEUERN_EV1

Steuern EV1 KWP2000: $31 StartRoutineByLocalIdentifier $A5 Start Routine Activation Injection cyl 1 Modus  : ton = 1.2 ms, toff = 98.8 ms, frequency 10Hz, up to timeout of 10s

_No arguments._

### STEUERN_ENDE_EV1

Steuern Ende EV1 KWP2000: $32 StopRoutineByLocalIdentifier $A5 Stop Routine Activation Injection cyl 1 Modus  : Stop immediately the activation of the injection cyl 1

_No arguments._

### STEUERN_EV2

Steuern EV2 KWP2000: $31 StartRoutineByLocalIdentifier $AB Start Routine Activation Injection cyl 2 Modus  : ton = 1.2 ms, toff = 98.8 ms, frequency 10Hz, up to timeout of 10s

_No arguments._

### STEUERN_ENDE_EV2

Steuern Ende EV2 KWP2000: $32 StopRoutineByLocalIdentifier $AB Stop Routine Activation Injection cyl 2 Modus  : Stop immediately the activation of the injection cyl 2

_No arguments._

### STEUERN_UEBERTEMPERATURLEUCHTE

Steuern Uebertemperaturleuchte KWP2000: $31 StartRoutineByLocalIdentifier $AD Start Routine Activation Temperature Warning Lamp Modus  : The Warning Lamp Flashes with Duty Cycle 50%, frequency 1Hz, up to timeout of 10s

_No arguments._

### STEUERN_ENDE_UEBERTEMPERATURLEUCHTE

Steuern Ende Uebertemperaturleuchte KWP2000: $32 StopRoutineByLocalIdentifier $AD Stop Routine Activation Temperature Warning Lamp Modus  : Stop immediately the activation of the Temperature Warning Lamp

_No arguments._

### STEUERN_ABGASKLAPPE

Steuern Abgasklappe KWP2000: $31 StartRoutineByLocalIdentifier $AA Start Routine Activation Exhaust Valve Modus  : The target duty cycle is 5% for the first 5s and 95% for the next 5s, the timeout is 10s

_No arguments._

### STEUERN_ENDE_ABGASKLAPPE

Steuern Ende Abgasklappe KWP2000: $32 StopRoutineByLocalIdentifier $AA Stop Routine Activation Exhaust Valve Modus  : Stop immediately the active diagnosis test of the Exhaust Valve

_No arguments._

### STEUERN_LAMBDASONDENHEIZUNG

Steuern Lambdasondenheizung KWP2000: $31 StartRoutineByLocalIdentifier $AF Start Routine Activation O2 Heater Modus  : Duty Cycle 50%, frequency 12Hz, up to timeout of 10s

_No arguments._

### STEUERN_ENDE_LAMBDASONDENHEIZUNG

Steuern Ende Lambdasondenheizung KWP2000: $32 StopRoutineByLocalIdentifier $AF Stop Routine Activation O2 Heater Modus  : Stop immediately the active diagnosis test of the O2 Heater

_No arguments._

### STEUERN_STEPPERMOTOR

Steuern Steppermotor KWP2000: $31 StartRoutineByLocalIdentifier $A9 Start Routine Activation of the Stepper Motor Modus  : The target position is 87.5% for the first 4s and 4% for the next 6s, the timeout is 10s

_No arguments._

### STEUERN_ENDE_STEPPERMOTOR

Steuern Ende Steppermotor KWP2000: $32 StopRoutineByLocalIdentifier $A9 Stop Routine Activation of the Stepper Motor Modus  : Stop immediately the active diagnosis test of the Stepper Motor

_No arguments._

### STEUERN_MOTORWARNLEUCHTE

Steuern Motorwarnleuchte KWP2000: $31 StartRoutineByLocalIdentifier $AC Start Routine Activation Engine Warning Lamp Modus  : The Warning Lamp Flashes with Duty Cycle 50%, frequency 1Hz, up to timeout of 10s

_No arguments._

### STEUERN_ENDE_MOTORWARNLEUCHTE

Steuern Ende Motorwarnleuchte KWP2000: $32 StopRoutineByLocalIdentifier $AC Stop Routine Activation Engine Warning Lamp Modus  : Stop immediately the activation of the Engine Warning Lamp

_No arguments._

### STEUERN_SHOWROOMMODUS

Steuern Showroom Modus KWP2000: $31 StartRoutineByLocalIdentifier $29 Start Routine Activation of the Showroom Modus

_No arguments._

### STEUERN_ENDE_SHOWROOMMODUS

Steuern Ende Showroom Modus KWP2000: $32 StopRoutineByLocalIdentifier $29 Stop Routine Activation of the Showroom Modus

_No arguments._

### STEUERN_ADAPTIONSWERTE_LOESCHEN

Steuern Adaptionswerte Loeschen KWP2000: $31 StartRoutineByLocalIdentifier $A0 Delete All Adaption Values Modus  : Default

_No arguments._

### STEUERN_ZERO_TPS

Steuern Zero TPS KWP2000: $31 StartRoutineByLocalIdentifier $21 Learning of the Idle TPS position KWP2000: $33 ReadRoutineResultByLocalIdentifier Modus  : Default

_No arguments._

### STEUERN_RESET_STEPPER

Steuern Reset Stepper KWP2000: $31 StartRoutineByLocalIdentifier $22 Reset Stepper KWP2000: $33 ReadRoutineResultByLocalIdentifier Modus  : Default

_No arguments._

### STEUERN_NEUTRALGANG_ADAPTION

Steuern Neutralgang Adaption KWP2000: $31 StartRoutineByLocalIdentifier $23 Gear Self-learning procedure KWP2000: $33 ReadRoutineResultByLocalIdentifier Modus  : Default

_No arguments._

## Tables

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
| 0xXY | -- | Unknown diagnostic mode |

### BAUDRATE

| NR | BAUD | BAUD_TEXT |
| --- | --- | --- |
| 0x01 | PC9600 | Baudrate 9.6 kBaud |
| 0x02 | PC19200 | Baudrate 19.2 kBaud |
| 0x03 | PC38400 | Baudrate 38.4 kBaud |
| 0x04 | PC57600 | Baudrate 57.6 kBaud |
| 0x05 | PC115200 | Baudrate 115.2 kBaud |
| 0x06 | SB | Specific Baudrate |
| 0xXY | -- | Unknown Baudrate |

### PROGRAMMIERSTATUS

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | Delivery status |
| 0x01 | Normal operation |
| 0x02 | unused |
| 0x03 | Memory erased |
| 0x04 | unused |
| 0x05 | Signature check PAF not done |
| 0x06 | Signature check DAF not done |
| 0x07 | Program-programming session active |
| 0x08 | Data-programming session active |
| 0x09 | Hardware reference faulty |
| 0x0A | Program reference faulty |
| 0x0B | Referencing error Hardware -> Program |
| 0x0C | Program not available or not complete |
| 0x0D | Data reference faulty |
| 0x0E | Referencing error Program -> Data |
| 0x0F | Data not available or not complete |
| 0x10 | reserved for BMW |
| 0x80 | reserved for Manufacturer |
| 0xXY | Unknown programming status |

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
| 0xFF | ??? | Unknown memory segment |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### SG_DIAGNOSEKONZEPT

| RANG | KONZEPT_TEXT |
| --- | --- |
| - | BMW-FAST |
| - | KWP2000* |
| 1 | KWP2000 |
| - | DS2 |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x2710 | EWS4: unauthenticated response received |
| 0x2720 | EWS4: CAN bus timeout error |
| 0x2730 | EWS4: no secret key programmed |
| 0x2740 | EWS4: data storage write error |
| 0x2741 | EWS4: data storage plausibility error |
| 0x2760 | Injector 1 circuit malfunction |
| 0x2761 | Injector 2 circuit malfunction |
| 0x2762 | Ignition coil 1 circuit malfunction |
| 0x2763 | Ignition coil 2 circuit malfunction |
| 0x2764 | Crankshaft sensor circuit malfunction |
| 0x2765 | HEGO1 sensor heater - circuit short to Vbatt |
| 0x2766 | HEGO1 sensor heater - circuit short to GND or open circuit |
| 0x2767 | HEGO1 sensor circuit malfunction |
| 0x2768 | Throttle position sensor - circuit low voltage |
| 0x2769 | Throttle position sensor - circuit high voltage |
| 0x2770 | Atmospheric pressure 1 sensor - circuit low voltage |
| 0x2771 | Atmospheric pressure 1 sensor - circuit high voltage |
| 0x2772 | Intake air temperature sensor - circuit low voltage |
| 0x2773 | Intake air temperature sensor - circuit high voltage |
| 0x2774 | Engine coolant temperature sensor - circuit low voltage |
| 0x2775 | Engine coolant temperature sensor - circuit high voltage |
| 0x2776 | Fuel pump relay - circuit short to Vbatt |
| 0x2777 | Fuel pump relay - circuit short to GND or open circuit |
| 0x2778 | Load relay - circuit short to Vbatt or open circuit |
| 0x2779 | Load relay - circuit short to GND |
| 0x2780 | Starter relay - circuit short to Vbatt |
| 0x2781 | Starter relay - circuit short to GND or open circuit |
| 0x2782 | Fan coil relay - circuit short to Vbatt |
| 0x2783 | Fan coil relay - circuit short to GND |
| 0x2784 | Fan coil relay - open circuit |
| 0x2785 | Malfunction of the STH motor |
| 0x2786 | System voltage circuit malfunction |
| 0x2787 | EEPROM error |
| 0x2788 | Purge canister valve solenoid - circuit short to Vbatt |
| 0x2789 | Purge canister valve solenoid - circuit short to GND or open circuit |
| 0x2790 | Oil temperature sensor - circuit low voltage |
| 0x2791 | Oil temperature sensor - circuit high voltage |
| 0x2792 | Side Stand switch - circuit high voltage |
| 0x2793 | Camshaft sensor - signal not plausible |
| 0x2794 | Idle control - signal not plausible |
| 0x2795 | RAM test - signal not plausible |
| 0x2796 | ROM test - signal not plausible |
| 0x2797 | Lambda self adaption - signal not plausible |
| 0x2798 | HEGO2 sensor circuit malfunction |
| 0x2799 | Warning lamp circuit malfunction |
| 0x2800 | HEGO2 sensor heater - circuit short to Vbatt |
| 0x2801 | HEGO2 sensor heater - circuit short to GND or open circuit |
| 0x2802 | ECU system malfunction |
| 0x2803 | Vehicle speed too high |
| 0x2804 | Vehicle speed not plausible |
| 0x2805 | Tachometer circuit malfunction |
| 0x2806 | Gear sensor - circuit high voltage |
| 0x2807 | Gear sensor - circuit low voltage |
| 0x2808 | Gear sensor - signal not plausible |
| 0x2809 | Showroommode active |
| 0xCD84 | EWS4: CAN frame error |
| 0xCD85 | Bus-Off or BMS mute node |
| 0xCD86 | No Rx ABS frame |
| 0xCD87 | No Rx KOMBI 0x3FF frame |
| 0xCD88 | No Rx KOMBI 0x2B4 frame |
| 0xCD89 | No Rx SPEED MBK 0x2A8 frame |
| 0xFFFF | Unknown error location |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | nein |
| F_LZ | nein |
| F_UWB_ERW | ja |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x2710 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2720 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2730 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2740 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2741 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2760 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2761 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2762 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2763 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2764 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2765 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2766 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2767 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2768 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2769 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2770 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2771 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2772 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2773 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2774 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2775 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2776 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2777 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2778 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2779 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2780 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2781 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2782 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2783 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2784 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2785 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2786 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2787 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2788 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2789 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2790 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2791 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2792 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2793 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2794 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2795 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2796 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2797 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2798 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2799 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2800 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2801 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2802 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2803 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2804 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2805 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2806 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2807 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2808 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0x2809 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0xCD84 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0xCD85 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0xCD86 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0xCD87 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0xCD88 | 0x01 | 0x02 | 0x03 | 0x04 |
| 0xCD89 | 0x01 | 0x02 | 0x03 | 0x04 |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | Unknown error location |

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
| 0xFFFF | Unknown error location |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | nein |
| F_LZ | nein |
| F_UWB_ERW | nein |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Engine speed | rpm | - | unsigned char | - | 50 | 1 | 0 |
| 0x02 | Coolant temperature | °C | - | unsigned char | - | 1 | 1 | -40 |
| 0x03 | Throttle position | % | - | unsigned char | - | 0,5 | 1 | 0 |
| 0x04 | Battery voltage | V | - | unsigned char | - | 0,1 | 1 | 0 |

### KONZEPT_TABELLE

| NR | KONZEPT_TEXT |
| --- | --- |
| 0x10 | D-CAN |
| 0x0F | BMW-FAST |
| 0x0D | KWP2000* |
| 0x0C | KWP2000 |
| 0x06 | DS2 |

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
| 0x19 | Electromatic South Africa |
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
| 0x51 | ZF Steering systems |
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
| 0xAF | Alfmeier |
| 0xB0 | ELTEK VALERE DEUTSCHLAND GMBH |
| 0xB1 | Omron Automotive Electronics Europe Group |
| 0xB2 | ASK |
| 0xB3 | CML Innovative Technologies GmbH & Co. KG |
| 0xB4 | APAG Elektronik AG |
| 0xB5 | Nexteer Automotive World Headquarters |
| 0xB6 | Hans Widmaier |
| 0xB7 | SB LiMotive Germany GmbH |
| 0xFF | Unknown manufacturer |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | No matching error symptom |
| 0x01 | Signal or value above threshold |
| 0x02 | Signal or value below threshold |
| 0x04 | No signal or value |
| 0x08 | Implausible signal or value |
| 0x10 | Test conditions fulfilled |
| 0x11 | Test conditions not yet fulfilled |
| 0x20 | Error not occurred yet |
| 0x21 | Error not present now, but already stored |
| 0x22 | Error present now, but not yet stored (debouncing phase) |
| 0x23 | Error present now and already stored |
| 0x30 | Error would not cause a warning lamp to light up |
| 0x31 | Error would cause a warning lamp to light up |
| 0xFF | Unknown type of error |

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
| 0x35 | ERROR_ECU_INVALID_KEY |
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
| 0x81 | ERROR_ECU_RESERVED_BY_DOCUMENT |
| 0x90 | ERROR_ECU_RESERVED_BY_DOCUMENT |
| 0xFA | ERROR_ECU_SUSTEM_SUPPLIER_SPEZIFIC |
| 0xFF | ERROR_ECU_RESERVED_BY_DOCUMENT |
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

### STATCLIENTAUTHTXT

| SB | TEXT |
| --- | --- |
| 0x00 | clearance from ignition and injection not yet gained (not yet challenged or communication disturbed, engine run locked) |
| 0x01 | clearance from ignition and injection gained (challenge-response successful) |
| 0x02 | clearance from ignition and injection declined (challenge-response failed, wrong response, communication ok) |
| 0x03 | not definded |

### STATFREESKTXT

| SB | TEXT |
| --- | --- |
| 0xFE | delivery unlimited |
| 0xFF | invalid |
| 0xXY | free delivery |

### STATEWSVERTXT

| SB | TEXT |
| --- | --- |
| 0x01 | direct writing off SecretKey |
| 0x02 | direct writing of SecretKey and DH sync |
| 0xXY | unknown |

### SWTFEHLER_TAB

| SB | STATUS_TEXT |
| --- | --- |
| 0x31 | OUT_OF_RANGE |
| 0xCD | KEYFAKTOR_NICHT_VORHANDEN |
| 0xD0 | EXTENSION_CHECK_FEHLERHAFT |
| 0xD1 | FSC_UNGUELTIG |
| 0xD2 | FGN_ZUGRIFF_FEHLERHAFT |
| 0xD3 | KEIN_SPEICHERPLATZ_MEHR_VORHANDEN |
| 0xD4 | FALSCHER_ZERTIFIKATSINHALT_UNBEKANNTES_CRIT-ELEMENT |
| 0xD5 | FALSCHER_FSC_INHALT |
| 0xD6 | FALSCHE_PARAMETERS |
| 0xD7 | FSCS_ZERTIFIKAT_ABGELEHNT |
| 0xD8 | KEINE_DATEN_ZU_ANGEGEBENEM_SG_VORHANDEN |
| 0xD9 | KEINE_AUTHENTISIERUNG |
| 0xDA | FINGER_PRINT_MECHANISMUS_NOT_OK |
| 0xDB | SIGS_ID_UND_ZERTIFIKAT_PASSEN_NICHT_ZUSAMMEN |
| 0xDC | GUELTIGKEITS_PRUEFUNG_SCHLUG_FEHL |
| 0xDD | FAHRGESTELLNUMMER_FEHLERHAFT |
| 0xDE | FGN_PRUEFUNG_SCHLUG_FEHL |
| 0xDF | FLASH_LESEFEHLER |
| 0xE0 | FLASH_SCHREIBFEHLER |
| 0xE1 | FALSCHER_ZERTIFIKATSINHALT_KEY_USAGE |
| 0xE2 | FALSCHER_ZERTIFIKATSINHALT_ISSUER |
| 0xE3 | FALSCHER_ZERTIFIKATSINHALT_VALIDITY |
| 0xE4 | FSCS_ZERTIFIKAT_PRUEFUNG_SCHLUG_FEHL |
| 0xE5 | FSCS_ZERTIFIKAT_UNGUELTIG |
| 0xE6 | FSCS_ZERTIFIKAT_NOCH_NICHT_GEPRUEFT |
| 0xE7 | FSCS_ZERTIFIKAT_NICHT_VORHANDEN |
| 0xE8 | SIGS_ZERTIFIKAT__PRUEFUNG_SCHLUG_FEHL |
| 0xE9 | SIGS_ZERTIFIKAT_UNGUELTIG |
| 0xEA | SIGS_ZERTIFIKAT_NOCH_NICHT_GEPRUEFT |
| 0xEB | SIGS_ZERTIFIKAT_NICHT_VORHANDEN |
| 0xEC | ROOT_ZERTIFIKAT_UNGUELTIG |
| 0xED | ROOT_ZERTIFIKAT_STATUS_ABGELEHNT |
| 0xEE | ROOT_ZERTIFIKAT_FEHLERHAFT |
| 0xEF | ROOT_ZERTIFIKAT_NICHT_LESBAR |
| 0xF0 | ROOT_ZERTIFIKAT_NICHT_VORHANDEN |
| 0xF1 | ZERTIFIKAT_STATUS_ABGELEHNT |
| 0xF2 | ZERTIFIKAT_NICHT_VORHANDEN |
| 0xF3 | FSC_PRUEFUNG_SCHLUG_FEHL |
| 0xF4 | FSC_STORNIERT |
| 0xF5 | FSC_STATUS_ABGELEHNT |
| 0xF6 | FSC_NICHT_VORHANDEN |
| 0xF7 | FALSCHE_FSCS_ID_IM_FSC |
| 0xF8 | UNGUELTIGES_FSC_ERSTELLUNGSDDATUM |
| 0xF9 | SIGNATUR_PRUEFUNG_SCHLUG_FEHL |
| 0xFA | SW_SIGNATURPRUEFUNG_SCHLUG_FEHL |
| 0xFB | SW_SIG_STATUS_ABGELEHNT |
| 0xFC | SW_ID_PRUEFUNG_SCHLUG_FEHL |
| 0xFD | SW_NICHT_AKTIVIERT |
| 0xFE | SW_NICHT_EINGESPIELT |
| 0xFF | UNBEKANNTER_FEHLER |
| 0xXY | ERROR_ECU_UNKNOWN_NEGATIVE_RESPONSE |
