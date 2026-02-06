# ACSM60.prg

## General

|  |  |
| --- | --- |
| File | ACSM60.prg |
| Type | PRG |
| Jobs | 65 |
| Tables | 31 |
| Origin | BMW EI-62 Scherer Ingo |
| Revision | 3.002 |
| Author | BERATA EngineeringConsulting Chafigoulline, BERATA EngineeringConsulting Schieferstein |
| ECU Comment | Airbag Steuergeraet fuer CAN-Bus Anwendungen fuer E60, E61, E63, E64, R55, R56, R57 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | ACSM / Advanced Crash and Safety Management E60, E61, E63, E64, (auch MRS6 Steuergerät benutzt diese SGBD für:  R55, R56, R57) |  |  |
| ORIGIN | string | BMW EI-62 Scherer Ingo |  |  |
| REVISION | string | 3.002 |  |  |
| AUTHOR | string | BERATA EngineeringConsulting Chafigoulline, BERATA EngineeringConsulting Schieferstein |  |  |
| COMMENT | string | Airbag Steuergeraet fuer CAN-Bus Anwendungen fuer E60, E61, E63, E64, R55, R56, R57 |  |  |
| PACKAGE | string | 1.30 |  |  |
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

### STEUERGERAETE_RESET

Steuergeraete reset ausloesen KWP2000: $11 ECUReset $01 PowerOn Modus  : Default  Nach dem Job muss die Steuergeraete-Resetzeit abgewartet werden. Danach ist das Steuergeraet wieder diagnosefaehig  siehe Job FLASH_ZEITEN_LESEN Result FLASH_RESETZEIT

_No arguments._

### AIF_LESEN

Auslesen des Anwender Informations Feldes Standard Flashjob KWP 2000: $23 ReadMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| AIF_NUMMER | int | ==0 : aktuelles AIF > 0 : Nummer des zu lesenden AIF default = 0 : aktuelles AIF |

### STATUS_AUSSTATTUNG

mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_FREIGABE_ZUENDKREISE

Zugriff auf Steuergeraete Ein- und Ausgaenge KWP2000: $300X01 InputOutputControlByLocalIdentifier X = Gruppe Modus  : Default

_No arguments._

### STATUS_ZUENDKREISWIDERSTAENDE

Zugriff auf Steuergeraete Ein- und Ausgaenge KWP2000: $300X01 InputOutputControlByLocalIdentifier X = Gruppe Modus  : Default

_No arguments._

### STATUS_GURTKONTAKTE

Zugriff auf Steuergeraete Ein- und Ausgaenge Gurtkontaktwerte in [mA] Der Gurtkontakt ist als 2-Draht-Hall Sensor ausgeführt und wird über das zentrale Airbagsteuergerät versorgt Der Passenger Airbag Off Schalter ist als 2-Draht-Hall Sensor ausgeführt und wird über das zentrale Airbagsteuergerät versorgt KWP2000: $300X01 InputOutputControlByLocalIdentifier X = Gruppe Modus  : Default

_No arguments._

### STATUS_BATTERIELEITUNGSDIAGNOSE

Zugriff auf Steuergeraete Ein- und Ausgaenge KWP2000: $300X01 InputOutputControlByLocalIdentifier X = Gruppe Modus  : Default

_No arguments._

### STATUS_SPS_FAHRER

Zugriff auf Steuergeraete Ein- und Ausgaenge KWP2000: $300X01 InputOutputControlByLocalIdentifier X = Gruppe Modus  : Default

_No arguments._

### IDENT_OC3

Identdaten der OC3-Matte KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### IDENT_ROC

Identdaten des ROC KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STATUS_LESEN

Status des ACSM lesen KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### HERSTELLERDATEN_LESEN

Kodierte KFZ-Herstellerdaten lesen KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### HERSTELLER_SPEZDATEN_LESEN

Herstellerspezifischedaten lesen KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### VERRIEGELUNG_LESEN

Auslesen des Pruefstempels / Sind Airbags scharfgeschaltet? KWP2000: $22 ReadDataByCommonIdentifier $1000 TestStamp Modus  : Default  BYTE1=BYTE2=BYTE3 =   0 = 0x00 = verriegelt BYTE1=BYTE2=BYTE3 = 255 = 0xFF = nicht verriegelt

_No arguments._

### VERRIEGELUNG_SCHREIBEN

Das Steuergeraet wird verriegelt Oder alternativ ueber PRUEFSTEMPEL_SCHREIBEN verriegelbar.  Hinweis zu Job PRUEFSTEMPEL_SCHREIBEN: Argument: 0 0 0 , um Steuergeraet zu verriegeln. / Airbags scharfschalten WICHTIG: Werte durch Semikolon getrennt eingeben!! ---Steuergeraet kann NUR durch die Entwicklung entriegelt werden.---  KWP2000: $2E WriteDataByCommonIdentifier $1000 TestStamp Modus  : Default

_No arguments._

### MRSA_LESEN

Lesen Seriennummer fuer jeden Satellit Read seriell number of all satellits

_No arguments._

### CONTROLLER_RESET

Steuergeraete reset ausloesen KWP2000: $11 ECUReset $01 PowerOn Modus  : Default  Nach dem Job muss die Steuergeraete-Resetzeit abgewartet werden. Danach ist das Steuergeraet wieder diagnosefaehig  siehe Job FLASH_ZEITEN_LESEN Result FLASH_RESETZEIT

_No arguments._

### STATUS_ROC

Status des Rollover Controller lesen KWP2000: $22 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### STANDARD_LOGIN_ROC

Standard Login Rollover Controller KWP2000: $2E ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### DIAGNOSE_AUFRECHT_ROC

Diagnosemode des SG aufrecht erhalten KWP2000: $2E TesterPresent Modus  : Default

_No arguments._

### DIAGNOSE_ENDE_ROC

Diagnosemode des SG beenden KWP2000: $2E StopDiagnosticSession Modus  : Default

_No arguments._

### TESTAUSLOESUNG_ROC

Testausloesung KWP2000: $2E StopDiagnosticSession Modus  : Default

_No arguments._

### TCU_NOTRUF

Funktionstest TCU Schnittstelle Telefon-Notruf KWP2000: $31 ReadDataByCommonIdentifier Modus  : Default

_No arguments._

### POL_TEST

Zugriff auf Steuergeräte Ein- und Ausgaenge POL leuchtet unmittelbar nach Ausführung für 1 Sekunde KWP2000: $30 InputOutputControlByLocalIdentifier Modus  : Default

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
| 0x76 | CEL |
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
| - | KWP2000 |
| - | KWP2000* |
| - | DS2 |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x93A8 | ZK0 / Airbag Fahrer 1.Stufe |
| 0x93A9 | ZK1 / Gurtstrammer Fahrer |
| 0x93AA | ZK2 / Gurtstrammer Beifahrer |
| 0x93AB | ZK3 / Airbag Beifahrer 1.Stufe |
| 0x93AC | ZK4 / Seitenairbag Thorax vorne Fahrerseite |
| 0x93AD | ZK5 / Seitenairbag Thorax vorne Beifahrerseite |
| 0x93AE | ZK6 / Seitenairbag Thorax hinten Fahrerseite |
| 0x93AF | ZK7 / Seitenairbag Thorax hinten Beifahrerseite |
| 0x93B0 | ZK8 / Kopfairbag Fahrerseite |
| 0x93B1 | ZK9 / Kopfairbag Beifahrerseite |
| 0x93B2 | ZK10 / Sicherheitsbatterieklemme |
| 0x93B3 | ZK11 / Airbag Beifahrer 2.Stufe |
| 0x93B4 | ZK12 / Airbag Fahrer 2.Stufe |
| 0x93B5 | ZK13 / Endbeschlagstrammer hinten Fahrerseite |
| 0x93B6 | ZK14 / Endbeschlagstrammer hinten Beifahrerseite |
| 0x93B8 | ZK15 / Knieairbag Fahrer |
| 0x93F7 | ZK16 / Knieairbag Beifahrer |
| 0x93F8 | ZK17 / Endbeschlagstrammer Fahrer |
| 0x93F9 | ZK18 / Kopfstuetze Fahrer |
| 0x93FA | ZK19 / Kopfstuetze Beifahrer |
| 0x93BA | Gurtkontakt Fahrer |
| 0x93BB | Gurtkontakt Beifahrer |
| 0x93BC | Gurtkontakt hinten Fahrerseite |
| 0x93BD | Gurtkontakt hinten Beifahrerseite |
| 0x93BE | Passenger Airbag Off Schalter (POS) |
| 0x93BF | Sitzpositionssensor Fahrer SPSF |
| 0x93C1 | SBE Beifahrer |
| 0x93C2 | SBE Sitzmatte Beifahrer |
| 0x93C3 | OC3 |
| 0x93C4 | OC3 - Datenspeicher voll |
| 0x93C5 | OC3 - System noch nicht freigegeben |
| 0x93D8 | OC3 - System konnte nicht freigegeben werden |
| 0x93C6 | SLV Fahrer |
| 0x93C7 | SLV Beifahrer |
| 0x93C8 | UPFRONT Fahrerseite |
| 0x93D9 | UPFRONT Fahrerseite - falscher Messbereich |
| 0x93DA | UPFRONT Fahrerseite - Sensor Daten unplausibel |
| 0x93C9 | UPFRONT Beifahrerseite |
| 0x93DB | UPFRONT Beifahrerseite - falscher Messbereich |
| 0x93DC | UPFRONT Beifahrerseite -Sensor Daten unplausibel |
| 0x93CA | Satellit B- Saeule X Fahrerseite |
| 0x93DD | Satellit B- Saeule X Fahrerseite - falscher Messbereich |
| 0x93DE | Satellit B- Saeule X Fahrerseite - Sensor Daten unplausibel |
| 0x93CB | Satellit B- Saeule X Beifahrerseite |
| 0x93DF | Satellit B- Saeule X Beifahrerseite - falscher Messbereich |
| 0x93E0 | Satellit B- Saeule X Beifahrerseite - Sensor Daten unplausibel |
| 0x93CC | Satellit B- Saeule Y Fahrerseite |
| 0x93E1 | Satellit B- Saeule Y Fahrerseite - falscher Messbereich |
| 0x93E2 | Satellit B- Saeule Y Fahrerseite - Sensor Daten unplausibel |
| 0x93CD | Satellit B- Saeule Y Beifahrerseite |
| 0x93E3 | Satellit B- Saeule Y Beifahrerseite - falscher Messbereich |
| 0x93E4 | Satellit B- Saeule Y Beifahrerseite - Sensor Daten unplausibel |
| 0x93CE | Satellit Tuere Fahrerseite |
| 0x93E5 | Satellit Tuere Fahrerseite - falscher Messbereich |
| 0x93E6 | Satellit Tuere Fahrerseite - Sensor Daten unplausibel |
| 0x93CF | Satellit Tuere Beifahrerseite |
| 0x93E7 | Satellit Tuere Beifahrerseite - falscher Messbereich |
| 0x93E8 | Satellit Tuere Beifahrerseite - Sensor Daten unplausibel |
| 0x93F1 | Satellit Tuere Beifahrerseite - Drucksensor ausser Messbereich |
| 0x93D0 | Versorgungsspannung - Unterspannung |
| 0x93D1 | Versorgungsspannung - Ueberspannung |
| 0x93D2 | Passenger Airbag Off Leuchte (POL) |
| 0x93EB | TCU-Ausgang_(Schnittstelle Telefon - Notruf) |
| 0x93D3 | CBD -Block - CRC Fehler durch Schreiben Codierdaten |
| 0x93EC | EEPROM Layout passt nicht zur SW-Version |
| 0x93ED | Zentralsteuergeraet - Satelilliten unbekannter Fehler |
| 0x93EE | Satellit Tuere Fahrerseite - Drucksensor ausser Messbereich |
| 0x93D4 | Crashtelegrammspeicher - Mindestens ein Crashtelegramm ist gespeichert |
| 0x93D5 | Crashtelegrammspeicher - Drei Crashtelegramme sind gespeichert |
| 0x93FB | Geschwindigkeit - Geschwindigkeitssignal fehlt |
| 0x93FC | B+ - Leitung |
| 0x93FD | B- - Leitung |
| 0x93FE | Roll over Function - Sensor nicht verbaut |
| 0x93FF | RollOverController |
| 0x9401 | RollOverController - Alive-Zaehler fehlerhaft |
| 0x9402 | RollOverController - Interner Fehler |
| 0x9403 | RollOverController - Ausloesekreis links |
| 0x9404 | RolloverController - Ausloesekreis rechts |
| 0x9405 | RollOverController - Datenspeicher voll |
| 0x9406 | RollOverController - Unterspannung |
| 0x9407 | RollOverController - PDC dauert zu lange |
| 0x9409 | RollOverController - Weiterer PDC im Normalbetrieb |
| 0x9400 | SBE Beifahrer - Fehlverbau SBE - Typ |
| 0x940B | Drehratensensor - AD - Wandler übersteuert |
| 0x940C | Drehratensensor - Sensorelement schwingt nicht |
| 0x940D | LCD Leuchtdichte - Telegramm mit Helligkeitsinfo nicht empfangen |
| 0x93D6 | Zentralsteuergeraet - SG ist nicht verriegelt |
| 0x93D7 | Zentralsteuergeraet - Interner Fehler |
| 0xC944 | Bus Leitungsfehler - Allg. |
| 0x940A | Ueberspannung im PDC |
| 0x9408 | Unterspannung im PDC |
| 0xC947 | Bus Kommunikationsfehler |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | 11111111 |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FARTTEXTEERWEITERT

| ARTMASKE | ARTNR | ARTTEXT |
| --- | --- | --- |
| 00000001 | 11 | Widerstand zu gross (ZK) |
| 00000010 | 12 | Widerstand zu klein (ZK) |
| 00000100 | 14 | Widerstand nicht definiert |
| 00001000 | 18 | Verkopplung (Leitungsfehler) |
| 00010000 | 116 | Kommunikations-Stoerung |
| 00100000 | 132 | Sensor / Modul sendet nicht (Kein ID-Telegramm) |
| 01000000 | 164 | Sensor / Modul Fehler |
| 10000000 | 1128 | Falscher Typ |
| xxxxxxxx | 0 | Kein passendes Fehlersymptom |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| default | ZEIT | MONATTAG | ZEIT2 | 0x0C |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Power On - Zaehler | zyklus | -- | signed int | -- | -- | -- | -- |
| 0x02 | Systemzeit Fehler - Beginn | Sek. | -- | signed long | -- | -- | -- | -- |
| 0x03 | Systemzeit Fehler - Ende | Sek. | -- | signed long | -- | -- | -- | -- |
| 0x04 | Absolutzeit Fehler - Beginn - Stunden | Std. | -- | signed char | -- | -- | -- | -- |
| 0x05 | Absolutzeit Fehler - Beginn - Minuten | Min. | -- | signed char | -- | -- | -- | -- |
| 0x06 | Absolutzeit Fehler - Beginn - Sekunden | Sek. | -- | signed char | -- | -- | -- | -- |
| 0x07 | Absolutzeit Fehler - Beginn - Tag | Tag | -- | signed char | -- | -- | -- | -- |
| 0x08 | Absolutzeit Fehler - Beginn - Monat | 0-n | -- | 0xF0 | Monat | -- | -- | -- |
| 0x09 | Absolutzeit Fehler - Beginn - Wochentag | 0-n | -- | 0x0F | Wochentag | -- | -- | -- |
| 0x0A | Absolutzeit Fehler - Beginn - Jahr High Byte | Jahr | -- | unsigned char | -- | -- | -- | -- |
| 0x0B | Absolutzeit Fehler - Beginn - Jahr Low Byte | Jahr | -- | unsigned char | -- | -- | -- | -- |
| 0x0C | Absolutzeit Fehler - Beginn - Sommer/Winterzeit | 0-n | -- | 0x02 | Jahreszeit | -- | -- | -- |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xC200 | Interner Beschleunigungsmesser X - Aktiver Selbsttest nicht bestanden |
| 0xC201 | Interner Beschleunigungsmesser X - Offset außerhalb zugelassener Abweichungen |
| 0xC203 | Interner Beschleunigungsmesser Y - Aktiver Selbsttest nicht bestanden |
| 0xC204 | Interner Beschleunigungsmesser Y - Offset außerhalb zugelassener Abweichungen |
| 0xC206 | Interner Low-G Beschleunigungsmesser Y - Aktiver Selbsttest nicht bestanden |
| 0xC207 | Interner Low-G Beschleunigungsmesser Y - Offset außerhalb zugelassener Abweichungen |
| 0xC208 | Interner Low-G Beschleunigungsmesser Y - Plausibilitätsfehler |
| 0xC209 | Interner Low-G Beschleunigungsmesser Z - Aktiver Selbsttest nicht bestanden |
| 0xC20A | Interner Low-G Beschleunigungsmesser Z - Offset außerhalb zugelassener Abweichungen |
| 0xC20B | Interner Low-G Beschleunigungsmesser Z - Plausibilitätsfehler |
| 0xC20C | Gyro - ungueltige Daten |
| 0xC20D | Gyro - Unrealistischer Messwert |
| 0xC20E | Gyro - Offset außerhalb zugelassener Abweichungen |
| 0xC20F | Gyro - Selbsttest nicht bestanden |
| 0xC210 | RSU ASIC 1 - Erhöhte Temperatur im RSU ASIC 1 diagnostisiert |
| 0xC211 | RSU ASIC 2 - Erhöhte Temperatur im RSU ASIC 2 diagnostisiert |
| 0xC212 | ASIC 3 - Fehlerhafte Funktion der internen High Side Transistoren in ASIC3 |
| 0xC213 | ASIC 1 - Fehlerhafte Funktion der internen Low Side Transistoren in ASIC1 |
| 0xC214 | ASIC 2 - Fehlerhafte Funktion der internen Low Side Transistoren in ASIC2 |
| 0xC215 | ASIC 3 - Fehlerhafte Funktion der internen Low Side Transistoren in ASIC3 |
| 0xC216 | ASIC 1 - Missglücktes Entriegeln / Verriegeln des Firing ASIC 1 |
| 0xC217 | ASIC 2 - Missglücktes Entriegeln / Verriegeln des Firing ASIC 2 |
| 0xC218 | ASIC 3 - Missglücktes Entriegeln / Verriegeln des Firing ASIC 3 |
| 0xC219 | ASIC 1 - Messresultat des Referenzstroms, ASIC 1, außerhalb zugelassener Abweichungen |
| 0xC21A | ASIC 2 - Messresultat des Referenzstroms, ASIC 2, außerhalb zugelassener Abweichungen |
| 0xC21B | ASIC 3 - Messresultat des Referenzstroms, ASIC 3, außerhalb zugelassener Abweichungen |
| 0xC21C | EEPROM - Inkorrekte Kontrollsumme |
| 0xC21D | EEPROM - Missglückte Datenablage im EEPROM |
| 0xC21E | Energiereserve - Kapazitaetsmesswert der Energiereserve ermittelt im Startup außerhalb zugelassener Abweichungen |
| 0xC21F | Energiereserve - Kapazitaetsmesswert der Energiereserve ermittelt in der zyklischen Pruefung außerhalb zugelassener Abweichungen |
| 0xC220 | Energiereserve - Spannungswert der Energiereserve unterhalb des unteren Schwellwerts |
| 0xC221 | Power supply - Diode zwischen der Spannungsversorgung und der Energiereserve defekt |
| 0xC222 | Arming- Test des Arming-Signals missglueckt |
| 0xC223 | ASIC 1 - Fehlerhafte Funktion der internen high Side Transistoren in ASIC1 |
| 0xC224 | ASIC 2 - Fehlerhafte Funktion der internen High Side Transistoren in ASIC2 |
| 0xC225 | External HSS - Fehlerhafte Funktion der externen High Side Transistoren |
| 0xC226 | Hilfsprozessor MCU - Armierungsprozessor ( Hilfsprozessor ) detektiert Offset außerhalb zugelassener Abweichungen - High-G X- Sensor |
| 0xC227 | Hilfsprozessor MCU - Armierungsprozessor ( Hilfsprozessor ) detektiert Offset außerhalb zugelassener Abweichungen - High-G Y- Sensor |
| 0xC228 | Hilfsprozessor MCU - Armierungsprozessor ( Hilfsprozessor ) detektiert Offset außerhalb zugelassener Abweichungen - Low-G Y- Sensor |
| 0xC229 | Hilfsprozessor MCU - Armierungsprozessor ( Hilfsprozessor ) detektiert Offset außerhalb zugelassener Abweichungen - Low-G Z- Sensor |
| 0xC22A | Hilfsprozessor MCU - Armierungsprozessor ( Hilfsprozessor ) detektiert: Aktiver Selbsttest nicht bestanden - interner High-G Sensor |
| 0xC22B | Hilfsprozessor MCU - Armierungsprozessor ( Hilfsprozessor ) detektiert: Aktiver Selbsttest nicht bestanden - interner Low-G Sensor |
| 0xC22C | RAM - Test Datenablage im RAM missglueckt |
| 0xC22D | ROM - Inkorrekte Kontrollsumme - ROM |
| 0xC22E | Watchdog - Aktiver Watchdogtest missglückt |
| 0xC22F | MCU - inkorrekte Reihenfolge im Programmablauf |
| 0xC230 | ADC - Timeout bei ADC - Umwandlung |
| 0xC231 | ADC - Referenzfehler bei ADC - Umwandlung |
| 0xc232 | Algo - Zündentscheidung mit Zeitverzögerung durch Arming nicht bestätigt |
| 0xC235 | RSU ASIC 0 Fehler |
| 0xC236 | RSU ASIC 1 Fehler |
| 0xC237 | Aux - Software Version des Hilfscontrollers inkompatibel |
| 0xC238 | Gyro - ADC Überlauf |
| 0xC239 | Gyro - Exc Fehler |
| 0xC23A | Gyro - Arithmetischer Übelauf Drehratensensor |
| 0xC23B | Gyro - OTP Paritätsfehler Drehratensensor |
| 0xC23C | Gyro - Spannung des Drehratensensors ausserhalb des zulässigem Bereichs |
| 0xC23D | EEPROM - Checksummen-Fehler im Bereich der AES Konfigurationsdaten |
| 0xC23E | EEPROM - Checksummen-Fehler direkt nach dem Flashen |
| 0xC23F | Aux MCU - Fehler im Programmablauf im Hilfs-Prozessor |
| 0xC240 | Arming - Zündentscheidung lag vor, aber keine Bestätigung durch Arming |
| 0xC241 | Aux MCU - Hauptkontroller Kommunikationsfehler bzw. Synchronisierungsfehler |
| 0xC242 | Fehler im Control ASIC |
| 0xC243 | Batterieleitungsdiagnose- ECU interner Fehler |
| 0xC244 | Crashparametersatz nur fuer Testzwecke geeignet |
| 0xC245 | Hilfsprozessor MCU -Fehler auf der RSU SPI Leitung |
| 0xC246 | Watchdog - 5V Reset |
| 0xC247 | Hilfsprozessor MCU - Arming Replica Error |
| 0xFFFF | unbekannter Fehlerort |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | 11111111 |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### IUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| default | ZEIT | MONATTAG | ZEIT2 | 0x0C |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Power On - Zaehler | zyklus | -- | signed int | -- | -- | -- | -- |
| 0x02 | Systemzeit Fehler - Beginn | Sek. | -- | signed long | -- | -- | -- | -- |
| 0x03 | Systemzeit Fehler - Ende | Sek. | -- | signed long | -- | -- | -- | -- |
| 0x04 | Absolutzeit Fehler - Beginn - Stunden | Std. | -- | signed char | -- | -- | -- | -- |
| 0x05 | Absolutzeit Fehler - Beginn - Minuten | Min. | -- | signed char | -- | -- | -- | -- |
| 0x06 | Absolutzeit Fehler - Beginn - Sekunden | Sek. | -- | signed char | -- | -- | -- | -- |
| 0x07 | Absolutzeit Fehler - Beginn - Tag | Tag | -- | signed char | -- | -- | -- | -- |
| 0x08 | Absolutzeit Fehler - Beginn - Monat | 0-n | -- | 0xF0 | Monat | -- | -- | -- |
| 0x09 | Absolutzeit Fehler - Beginn - Wochentag | 0-n | -- | 0x0F | Wochentag | -- | -- | -- |
| 0x0A | Absolutzeit Fehler - Beginn - Jahr High Byte | Jahr | -- | signed char | -- | -- | -- | -- |
| 0x0B | Absolutzeit Fehler - Beginn - Jahr Low Byte | Jahr | -- | signed char | -- | -- | -- | -- |
| 0x0C | Absolutzeit Fehler - Beginn - Sommer/Winterzeit | 0-n | -- | 0x02 | Jahreszeit | -- | -- | -- |

### IARTTEXTEERWEITERT

| ARTMASKE | ARTNR | ARTTEXT |
| --- | --- | --- |
| xxxxxxxx | 0 | Kein passendes Fehlersymptom |

### ZEIT

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 0x01 | 0x02 | 0x03 | 0x04 | 0x05 | 0x06 | 0x07 |

### ZEIT2

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x0A | 0x0B |

### MONATTAG

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x08 | 0x09 |

### MONAT

| WERT | UWTEXT |
| --- | --- |
| 0x10 | Januar |
| 0x20 | Februar |
| 0x30 | Maerz |
| 0x40 | April |
| 0x50 | Mai |
| 0x60 | Juni |
| 0x70 | Juli |
| 0x80 | August |
| 0x90 | September |
| 0xA0 | Oktober |
| 0xB0 | November |
| 0xC0 | Dezember |
| 0xXY | unplausibel |

### WOCHENTAG

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Montag |
| 0x02 | Dienstag |
| 0x03 | Mitwoch |
| 0x04 | Donnerstag |
| 0x05 | Freitag |
| 0x06 | Samstag |
| 0x07 | Sonntag |
| 0xXY | unplausibel |

### JAHRESZEIT

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Winterzeit |
| 0x02 | Sommerzeit |
| 0xXY | unplausibel |

### SITZBELEGUNG_FAHRER_BEIFAHRER

| JOBS | RESULTS | SBR-MATTE | SBE | OC3 |
| --- | --- | --- | --- | --- |
| 1. STATUS_LESEN | STAT_SITZBELEGUNG_BEIFAHRER | kann Zustand 'unbelegt' nicht ausgeben | gibt zustaetzlich den Zustand unbelegt aus | gibt den Zustand unbelegt ueber den Zustand Gewichtsklasse 0 aus |
| 2. STATUS_LESEN | STAT_SBE_BEIFAHRER_BELEGT_AIRBAG_ON | Sitzbelegung wird ausgegeben, aber keinen Einfluss auf das Ausloesen von Rueckhaltemitteln | Sitzbelegung wird ausgegeben und Einfluss auf das Ausloesen von Rueckhaltemitteln | Sitzbelegung wird ausgegeben und Einfluss auf das Ausloesen von Rueckhaltemitteln |
| 3. STATUS_LESEN | STAT_SBE_BEIFAHRER_BELEGT_AIRBAG_ON_SBR | Sitzbelegung wird ausgegeben, aber keinen Einfluss auf das Ausloesen von Rueckhaltemitteln | Sitzbelegung wird ausgegeben und Einfluss auf das Ausloesen von Rueckhaltemitteln | Sitzbelegung wird ausgegeben und Einfluss auf das Ausloesen von Rueckhaltemitteln |
| 4. STATUS_LESEN | STAT_SBE_BEIFAHRER_VERBAUT | Info ob SBE im SG codiert ist | Info ob SBE im SG codiert ist | - |
| 5. STATUS_LESEN | STAT_SITZBELEGUNG_FAHRER | kann Zustand 'unbelegt' nicht ausgeben | System fahrerseitig nicht vorhanden | System fahrerseitig nicht vorhanden |
| 6. STATUS_LESEN | STAT_SBE_FAHRER_VERBAUT | Info ob Fahrer-SBE in SG codiert ist | System fahrerseitig nicht vorhanden | System fahrerseitig nicht vorhanden |
| 7. STATUS_LESEN | STAT_OC3_VERBAUT | - | - | Info ob OC3 im SG codiert ist |
| 8. STATUS_LESEN | STAT_FREIGABE | - | - | OC3 System ist noch nicht ueber SG freigegeben worden |
| 9. STATUS_LESEN | STAT_DATENSPEICHER | - | - | Datenspeicher der OC3 muss geloescht werden |
| 10. STATUS_LESEN | STAT_GEWICHTSKLASSE | - | - | Ausgabe der Belegungszustaende |
| 11. STATUS_AUSSTATTUNG | STAT_SBR_MATTE_BEIFAHRER_VERBAUT | Dieses Bit gibt Aufschluss, ob SBE oder SBR Matte verbaut wurde. Wird der Zustand unbelegt ausgegeben, wird im Fehlerspeicher ein Fehlerverbau gesetzt | - | - |
| 12. STATUS_AUSSTATTUNG | STAT_SBR_MATTE_FAHRER_VERBAUT | Dieses Bit gibt Aufschluss, ob SBE oder SBR-Matte verbaut wurde. Wird der Zustand unbelegt ausgegeben, wird ein Plausibilitaetsfehler ueber das K-CAN Telegramm ausgegeben | - | - |
