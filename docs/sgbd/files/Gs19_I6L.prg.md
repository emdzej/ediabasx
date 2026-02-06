# Gs19_I6L.prg

## General

|  |  |
| --- | --- |
| File | Gs19_I6L.prg |
| Type | PRG |
| Jobs | 94 |
| Tables | 30 |
| Origin | BMW EA-71 Burkhardt |
| Revision | 0.10 |
| Author | BMW EA-71 Burkhardt |
| ECU Comment | @SGBD fuer I6 BMW-fast 9,6 Kbaud@ |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | GS19.0 C Muster |  |  |
| ORIGIN | string | BMW EA-71 Burkhardt |  |  |
| REVISION | string | 0.10 |  |  |
| AUTHOR | string | BMW EA-71 Burkhardt |  |  |
| COMMENT | string | @SGBD fuer I6 BMW-fast 9,6 Kbaud@ |  |  |
| PACKAGE | string | 0.23 |  |  |
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
| SCHLUESSEL | binary | Schluessel |

### FLASH_PROGRAMMIER_STATUS_LESEN

Programmierstatus des SG lesen KWP2000: $31 StartRoutineByLocalIdentifier $0A CheckProgrammingStatus Modus  : Default

_No arguments._

### FLASH_SIGNATUR_PRUEFEN

Flash Signatur pruefen KWP2000: $31 StartRoutineByLocalIdentifier $09 CheckSignature Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| BEREICH | string | 'Programm' 'Daten' |

### STEUERGERAETE_RESET

Seuergeraete reset ausloesen KWP2000: $11 ECUReset $01 PowerOn Modus  : Default  Nach dem Job muss die Steuergeraete-Resetzeit abgewartet werden. Danach ist das Steuergeraet wieder diagnosefaehig  siehe Job FLASH_ZEITEN_LESEN Result FLASH_RESETZEIT

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
| AIF_NUMMER | int | ==0 : aktuelles AIF > 0 : Nummer des zu lesenden AIF default = 0 : aktuelles AIF |

### AIF_SCHREIBEN

Schreiben des Anwender Informations Feldes Standard Flashjob KWP 2000: $3D WriteMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| AIF_FG_NR | string | Fahrgestellnummer 7-stellig |
| AIF_DATUM | string | Datum der SG-Programmierung in der Form JJJJ.MM.TT |
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

### STATUS_IO_LESEN

Auslesen aller Messwerte 0x01..0x7F KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### RESET_EGS

EGS fuehrt Reset aus KWP2000: $11 EcuResetService Modus  : Default

_No arguments._

### AIF_AKTUELL_LESEN

aktuelles Anwenderinfofeld lesen KWP2000: $1A ReadEcuIdentification Modus  : Default

_No arguments._

### STATUS_PHYSICAL_ECU_HW_NR

Auslesen der PHYSICAL_ECU_HW_NR KWP2000: $1A ReadEcuIdentification Modus  : Default

_No arguments._

### STATUS_SYSTEM_SUPPLIER_ECU_SERIAL_NR

Auslesen der SYSTEM_SUPPLIER_ECU_SERIAL_NR KWP2000: $1A ReadEcuIdentification Modus  : Default

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

### SEKUNDAER_FS_LESEN_1

Auslesen Sekundaerfehlerspeicher KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### SEKUNDAER_FS_LESEN_2

Auslesen Sekundaerfehlerspeicher KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_FLARE

Auslesen der Adaptionswerte Flare KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_GLUE

Auslesen der Adaptionswerte GLUE KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_GLS

Auslesen der Adaptionswerte GLS KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_SLZ

Auslesen der Adaptionswerte SLZ KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_SF

Auslesen der Adaptionswerte SF KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_PF

Auslesen der Adaptionswerte PF KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_GWK

Auslesen der Adaptionswerte GWK KWP2000: $21 ReadDataByLocalIdentifier Modus  : Default

_No arguments._

### STATUS_ADAPTIONSWERTE_SBC

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

KWP2000: $21 Modus  : Default

_No arguments._

### FS_LESEN_DETAIL

Fehlerspeicher lesen (ein Fehler / alle Details) KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Fehlercode |

## Tables

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

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
| 0x02 | 0x0000 |
| 0x03 | 0xCF03 |
| 0x04 | 0x4EF2 |
| 0x05 | 0x50DD |
| 0x06 | 0x4FB1 |
| 0x07 | 0x4FB0 |
| 0x08 | 0x51A5 |
| 0x09 | 0x4EE9 |
| 0x0A | 0x5020 |
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
| 0x40 | 0x4F60 |
| 0x41 | 0x4F60 |
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
| 0x56 | 0x5148 |
| 0x?? | ERROR_UNKNOWN |

### ERSTELLER

| ASCII | NAME |
| --- | --- |
| 0 | Vorbelegung ZF TE-H |
| 1 | Wiest ZF ES32 |
| 2 | Zwingenberger ZF ES32 |
| 3 | Buohlert ZF ES32 |
| 4 | Zimmermann ZF ES32 |
| 5 | Cueppers ZF ES32 |
| 6 | Bader ZF ES22 |
| A | Steinke BMW EA-71 |
| B | Mischnick BMW EA-71 |
| C | Noack BMW EA-71 |
| S | Schmeling BMW EA-71 |
| E | Smirnow BMW EA-71 |
| F | Boeker BMW EA-71 |
| G | Daieff BMW EA-71 |
| M | Meyer BMW EA-71 |
| I | Burkhardt BMW EA-71 |
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
| 0x?? | ERROR_UNKNOWN |

### JOBRESULTEXTENDED

| SB |  STATUS_TEXT |
| --- | --- |
| 0XXY | ERROR_UNKNOWN |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x4E20 | EDS 1 |
| 0x4E21 | EDS 2 |
| 0x4E22 | EDS 3 |
| 0x4E23 | EDS 4 |
| 0x4E24 | EDS 5 |
| 0x4E25 | EDS 6 |
| 0x4E84 | MV 1 |
| 0x4E85 | MV 2 |
| 0x4E86 | MV 3 |
| 0x4E87 | MV 4 |
| 0x4EE8 | Drehzahlsensor N_Turbine |
| 0x4EE9 | Drehzahlsensor N_Abtrieb |
| 0x4EF2 | Getriebeoeltemperatursensor |
| 0x4EF3 | Substrattemperatursensor |
| 0x4F4C | Symptom Gangueberwachung |
| 0x4F4D | Gangueberwachung 1 |
| 0x4F4E | Gangueberwachung 2 |
| 0x4F4F | Gangueberwachung 3 |
| 0x4F50 | Gangueberwachung 4 |
| 0x4F51 | Gangueberwachung 5 |
| 0x4F52 | Gangueberwachung 6 |
| 0x4F53 | WK fehlerhaft geoeffnet |
| 0x4F56 | Symptom Schaltungsueberwachung |
| 0x4F57 | Schaltungsueberwachung 12 |
| 0x4F58 | Schaltungsueberwachung 23 |
| 0x4F59 | Schaltungsueberwachung 34 |
| 0x4F5A | Schaltungsueberwachung 45 |
| 0x4F5B | Schaltungsueberwachung 56 |
| 0x4F5C | Schaltungsueberwachung 21 |
| 0x4F5D | Schaltungsueberwachung 32 |
| 0x4F5E | Schaltungsueberwachung 43 |
| 0x4F5F | Schaltungsueberwachung 54 |
| 0x4F60 | Schaltungsueberwachung 65 |
| 0x4F6A | Temperaturabschaltung EGS |
| 0x4F6B | Oelalterungsschwelle |
| 0x4FB0 | Interner Fehler 1 (EPROM) |
| 0x4FB1 | Interner Fehler 2 (EEPROM) |
| 0x4FB2 | Interner Fehler 3 (Watchdog) |
| 0x4FB3 | Interner Fehler 4 (VRAM) |
| 0x5014 | Batteriespannung |
| 0x5015 | Druckregler/Magnetventil Versorgungsspannung |
| 0x5016 | Sensorversorgungsspannung |
| 0x5079 | Serielle Leitung Timeout |
| 0x507A | Serielle Leitung Positionsinfo |
| 0x507B | Parksperrensensoren unplausibel |
| 0x507C | Parksperre fehlerhaft eingelegt |
| 0x507D | Parksperre fehlerhaft ausgelegt |
| 0x50DC | Doppelfehler Positionsinfo CAN/Serielle Leitung |
| 0x50DD | Kombination Ersatzfunktionen |
| 0x5140 | CAN Timeout DME |
| 0x5141 | CAN Timeout DSC |
| 0x5142 | CAN Timeout Kombi |
| 0x5143 | CAN Timeout ACC |
| 0x5144 | CAN Timeout CAS |
| 0x5145 | CAN Timeout EMF |
| 0x5146 | CAN Timeout SSV |
| 0x5147 | CAN Timeout SZL |
| 0x5148 | CAN Timeout PModul |
| 0x51A5 | CAN Momentenschnittstelle |
| 0x51A7 | CAN Motordrehzahl |
| 0x51A8 | CAN Drosselklappe/Fahrpedal |
| 0x51AA | CAN Positionsinfo |
| 0x51AB | CAN P-Taster |
| 0x51AC | CAN ID-Geber steckt |
| 0x51AE | CAN Bremssignal |
| 0xCF03 | CAN Bus off |
| 0x???? | unbekannter Fehlerort |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x4E20 | sgt_Gear0 | 0x01 | 0x02 | 0x03 |
| 0x4E21 | sgt_Gear0 | 0x01 | 0x02 | 0x03 |
| 0x4E22 | sgt_Gear0 | 0x01 | 0x02 | 0x03 |
| 0x4E23 | sgt_Gear0 | 0x01 | 0x02 | 0x03 |
| 0x4E24 | sgt_Gear0 | 0x01 | 0x02 | 0x03 |
| 0x4E25 | sgt_Gear0 | 0x01 | 0x02 | 0x03 |
| 0x4E84 | sgt_Gear0 | 0x01 | 0x02 | sgt_Out0 |
| 0x4E85 | sgt_Gear0 | 0x01 | 0x02 | sgt_Out0 |
| 0x4E86 | sgt_Gear0 | 0x01 | 0x02 | sgt_Out0 |
| 0x4E87 | sgt_Gear0 | 0x01 | 0x02 | sgt_Out0 |
| 0x4EE8 | sgt_Gear0 | 0x07 | 0x04 | 0x05 |
| 0x4EE9 | sgt_Gear0 | 0x03 | 0x04 | 0x0E |
| 0x4EF2 | 0x04 | 0x01 | 0x06 | 0x03 |
| 0x4EF3 | 0x04 | 0x06 | 0x01 | 0x03 |
| 0x4F4C | sgt_Gear0 | 0x0B | 0x01 | 0x03 |
| 0x4F4D | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F4E | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F4F | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F50 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F51 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F52 | 0x0B | 0x01 | 0x03 | 0x07 |
| 0x4F53 | sgt_Gear0 | 0x0B | 0x01 | 0x03 |
| 0x4F56 | sgt_Gear0 | 0x0B | 0x01 | 0x03 |
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
| 0x4F6A | 0x0B | 0x01 | 0x03 | 0x05 |
| 0x4F6B | 0x01 | 0x01 | 0x01 | 0x01 |
| 0x4FB0 | 0x01 | 0x01 | 0x04 | 0x04 |
| 0x4FB1 | 0x01 | 0x01 | 0x04 | 0x04 |
| 0x4FB2 | 0x01 | 0x01 | 0x04 | 0x04 |
| 0x4FB3 | 0x04 | 0x04 | 0x90 | 0x90 |
| 0x5014 | 0x04 | 0x05 | 0x01 | 0x03 |
| 0x5015 | 0x04 | 0x05 | 0x01 | 0x03 |
| 0x5016 | 0x04 | 0x05 | 0x01 | 0x03 |
| 0x5079 | 0x0C | 0x04 | sgt_sig3 | 0x90 |
| 0x507A | 0x0C | 0x04 | sgt_sig3 | 0x90 |
| 0x507B | sgt_Inp0 | sgt_Inp0 | 0x02 | 0x05 |
| 0x507C | sgt_sig0 | sgt_Inp0 | 0x02 | 0x05 |
| 0x507D | sgt_sig0 | sgt_Inp0 | 0x02 | 0x05 |
| 0x50DC | 0x0C | 0x04 | 0x05 | 0x90 |
| 0x50DD | 0xFE | 0xFE | 0xFE | 0xFE |
| 0x5140 | 0x0C | 0x04 | 0x01 | 0x05 |
| 0x5141 | 0x0C | 0x04 | 0x01 | 0x05 |
| 0x5142 | 0x0C | 0x04 | 0x01 | 0x05 |
| 0x5143 | 0x0C | 0x04 | 0x01 | 0x05 |
| 0x5144 | 0x0C | 0x04 | 0x01 | 0x05 |
| 0x5145 | 0x0C | 0x04 | 0x01 | 0x05 |
| 0x5146 | 0x0C | 0x04 | 0x01 | 0x05 |
| 0x5147 | 0x0C | 0x04 | 0x01 | 0x05 |
| 0x5148 | 0x0C | 0x04 | 0x01 | 0x05 |
| 0x51A5 | 0x0C | 0x04 | sgt_Can0 | 0x05 |
| 0x51A7 | 0x0C | 0x04 | sgt_Can0 | 0x0B |
| 0x51A8 | 0x0C | 0x04 | sgt_Can0 | 0x05 |
| 0x51AA | 0x0C | 0x04 | sgt_Sig3 | 0x90 |
| 0x51AB | 0x0C | 0x04 | sgt_Sig3 | 0x90 |
| 0x51AC | 0x0C | 0x04 | sgt_Can0 | 0x90 |
| 0x51AE | 0x0C | 0x04 | sgt_Can0 | 0x05 |
| 0xCF07 | 0x0C | 0x04 | 0x01 | 0x05 |
| default | 0xFF | 0xFF | 0xFF | 0xFF |

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

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x80 | 0x81 | 0x82 |

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
| 0x0A | Sollmoment Motoreingriff | Nm | - | unsigned char | - | 4 | 1 | 0 |
| 0x0B | Motoristmoment | Nm | - | unsigned char | - | 4 | 1 | 0 |
| 0x0C | Zeit nach Reset | ms | - | unsigned char | - | 30 | 1 | 0 |
| 0x0D | rcn_Stand | - | - | unsigned char | - | 1 | 1 | 0 |
| 0x0E | Mittl. Radgeschw. ang. | km/h | - | unsigned char | - | 2 | 1 | 0 |
| 0x0F | Mittl. Radgeschw. nicht ang. | km/h | - | unsigned char | - | 2 | 1 | 0 |
| 0x10 | Mittl. Radgeschw. alle Raeder | km/h | - | unsigned char | - | 2 | 1 | 0 |
| 0x20 | Zustand WK | 0-n | - | 0x60 | WK_TAB | - | - | - |
| 0x21 | Schaltart | 0-n | - | 0x1F | SA_TAB | - | - | - |
| 0x22 | Sollzustand M1 (0/1 aus/an) | 0/1 | - | 0x80 | - | - | - | - |
| 0x23 | Sollzustand M2 (0/1 aus/an) | 0/1 | - | 0x40 | - | - | - | - |
| 0x24 | Sollzustand M3 (0/1 kein Peak/Peak) | 0/1 | - | 0x20 | - | - | - | - |
| 0x25 | Sollzustand M3 (0/1 kein Hold/Hold) | 0/1 | - | 0x10 | - | - | - | - |
| 0x26 | Sollzustand M4 (0/1 aus/an) | 0/1 | - | 0x08 | - | - | - | - |
| 0x30 | Pegel an L1 Pin (0/1 low/high) | 0/1 | - | 0x80 | - | - | - | - |
| 0x31 | Pegel an L2 Pin (0/1 low/high) | 0/1 | - | 0x40 | - | - | - | - |
| 0x32 | Pegel an L3 Pin (0/1 low/high) | 0/1 | - | 0x20 | - | - | - | - |
| 0x33 | Pegel an L4 Pin ((0/1 low/high) | 0/1 | - | 0x10 | - | - | - | - |
| 0x34 | Pegel an Tip+ Pin (0/1 low/high) | 0/1 | - | 0x08 | - | - | - | - |
| 0x35 | Pegel an Tip- Pin (0/1 low/high) | 0/1 | - | 0x04 | - | - | - | - |
| 0x36 | Pegel an M-Gassen Pin (0/1 low/high) | 0/1 | - | 0x02 | - | - | - | - |
| 0x40 | Status Substrattemp.     (0=iO, 1=F/ES) | 0/1 | - | 0x20 | - | - | - | - |
| 0x41 | Status Getriebeoeltemp.  (0=iO, 1=F/ES) | 0/1 | - | 0x10 | - | - | - | - |
| 0x42 | Status Parksperrensensor (0=iO, 1=F/ES) | 0/1 | - | 0x08 | - | - | - | - |
| 0x43 | Status Positionssensor   (0=iO, 1=F/ES) | 0/1 | - | 0x04 | - | - | - | - |
| 0x44 | Status Turbinendrehzahl  (0=iO, 1=F/ES) | 0/1 | - | 0x02 | - | - | - | - |
| 0x45 | Status Abtriebsdrehzahl  (0=iO, 1=F/ES) | 0/1 | - | 0x01 | - | - | - | - |
| 0x50 | Status Motordrehzahl     (0=iO, 1=F/ES) | 0/1 | - | 0x80 | - | - | - | - |
| 0x51 | Status Drosselklappe     (0=iO, 1=F/ES) | 0/1 | - | 0x40 | - | - | - | - |
| 0x52 | Status Parksperrenanf.   (0=iO, 1=F/ES) | 0/1 | - | 0x20 | - | - | - | - |
| 0x53 | Status Moment 1 (MMM)    (0=iO, 1=F/ES) | 0/1 | - | 0x01 | - | - | - | - |
| 0x60 | Status Bremssignal       (0=iO, 1=F/ES) | 0/1 | - | 0x20 | - | - | - | - |
| 0x61 | Status Drehrichtung     (0=iO, 1=F/ES) | 0/1 | - | 0x10 | - | - | - | - |
| 0x62 | Status Radgeschw HL      (0=iO, 1=F/ES) | 0/1 | - | 0x08 | - | - | - | - |
| 0x63 | Status Radgeschw HR      (0=iO, 1=F/ES) | 0/1 | - | 0x04 | - | - | - | - |
| 0x64 | Status Radgeschw VL      (0=iO, 1=F/ES) | 0/1 | - | 0x02 | - | - | - | - |
| 0x65 | Status Radgeschw VR      (0=iO, 1=F/ES) | 0/1 | - | 0x01 | - | - | - | - |
| 0x70 | Status S-Taster CAN      (0=iO, 1=F/ES) | 0/1 | - | 0x80 | - | - | - | - |
| 0x71 | Status Tip-Taster CAN    (0=iO, 1=F/ES) | 0/1 | - | 0x40 | - | - | - | - |
| 0x72 | Status Position ser. Ltg (0=iO, 1=F/ES) | 0/1 | - | 0x20 | - | - | - | - |
| 0x73 | Status Position CAN      (0=iO, 1=F/ES) | 0/1 | - | 0x10 | - | - | - | - |
| 0x74 | Status Fahrertuer        (0=iO, 1=F/ES) | 0/1 | - | 0x08 | - | - | - | - |
| 0x75 | Status Fahrersitz        (0=iO, 1=F/ES) | 0/1 | - | 0x04 | - | - | - | - |
| 0x76 | Status ID-Geber steckt   (0=iO, 1=F/ES) | 0/1 | - | 0x02 | - | - | - | - |
| 0x77 | Status CAN Kl15 Signal   (0=iO, 1=F/ES) | 0/1 | - | 0x01 | - | - | - | - |
| 0x80 | Standardabsicherung DME3 (0=iO, 1=F/ES) | 0/1 | - | 0x04 | - | - | - | - |
| 0x81 | Standardabsicherung DME2 (0=iO, 1=F/ES) | 0/1 | - | 0x02 | - | - | - | - |
| 0x82 | Standardabsicherung DME1 (0=iO, 1=F/ES) | 0/1 | - | 0x01 | - | - | - | - |
| 0x90 | Status Zuendung | 0-n | - | 0x07 | ZUEND_TAB | - | - | - |
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
| 0x0A | Schaltart 1 nach 2 |
| 0x0B | Schaltart 2 nach 3 |
| 0x0C | Schaltart 3 nach 4 |
| 0x0D | Schaltart 4 nach 5 |
| 0x0E | Schaltart 5 nach 6 |
| 0x11 | Schaltart 2 nach 1 |
| 0x12 | Schaltart 3 nach 2 |
| 0x13 | Schaltart 4 nach 3 |
| 0x14 | Schaltart 5 nach 4 |
| 0x15 | Schaltart 6 nach 5 |
| 0x16 | Schaltart 3 nach 1 |
| 0x17 | Schaltart 4 nach 2 |
| 0x18 | Schaltart 5 nach 3 |
| 0x19 | Schaltart 6 nach 4 |
| 0x1A | Schaltart  P/N nach D |
| 0x1B | Schaltart  P/N nach R |
| 0xXY | Schaltart unplausibel |

### ZUEND_TAB

| WERT | UWTEXT |
| --- | --- |
| 0x00 | undefiniert |
| 0x01 | Uebergang Zuendung AUS-EIN |
| 0x02 | Zuendung EIN |
| 0x03 | Uebergang Zuendung EIN-AUS |
| 0xXY | Fehler |

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

### PROGRAMMIERSTATUS

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | Anlieferzustand |
| 0x01 | Normalbetrieb |
| 0x02 | nicht benutzt |
| 0x03 | nicht benutzt |
| 0x04 | nicht benutzt |
| 0x05 | Signaturpruefung PAF nicht durchgefuehrt |
| 0x06 | Signaturpruefung DAF nicht durchgefuehrt |
| 0x07 | nicht benutzt |
| 0x08 | nicht benutzt |
| 0x09 | Hardwarereferenzeintrag fehlerhaft |
| 0x0A | Programmreferenzeintrag fehlerhaft |
| 0x0B | Referenzierungsfehler Hardware -> Programm |
| 0x0C | Programm nicht vollstaendig |
| 0x0D | Datenreferenzeintrag fehlerhaft |
| 0x0E | Referenzierungsfehler Programm -> Daten |
| 0x0F | Daten nicht vollstaendig |
| 0x10 | Reserviert fuer BMW |
| 0x80 | Reserviert fuer Zulieferer |
| 0xXY | unbekannter Programmierstatus |
