# EDME82.prg

## General

|  |  |
| --- | --- |
| File | EDME82.prg |
| Type | PRG |
| Jobs | 93 |
| Tables | 58 |
| Origin | DELPHI DEG Cyril Ravenet |
| Revision | 1.008 |
| Author | DELPHI DEG Cyril_Ravenet, DELPHI DEG Julien_Monnard |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | eDME10 |  |  |
| ORIGIN | string | DELPHI DEG Cyril Ravenet |  |  |
| REVISION | string | 1.008 |  |  |
| AUTHOR | string | DELPHI DEG Cyril_Ravenet, DELPHI DEG Julien_Monnard |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.57 |  |  |
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

Infospeicher lesen (alle Info-Meldungen / Ort und Art) KWP2000: $18 ReadDiagnosticTroubleCodesByStatus $04 requestIdentifiedShadowMemoryDTCAndStatus

_No arguments._

### IS_LESEN_DETAIL

Infospeicher lesen (alle Info-Meldungen / Ort und Art) KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Fehlercode |

### IS_LOESCHEN

Infospeicher loeschen KWP2000: $31 StartRoutineByLocalIdentifier $06 ClearDTCShadowMemory Modus  : Default

_No arguments._

### SLEEP_MODE

SG in Sleep-Mode versetzen KWP2000: $31 StartRoutineByLocalIdentifier a)       $0E Time controlled PowerDown oder b)       $05 PowerDown $00 all ECU Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | real | a) Zeit nach der das Steuergerät einschläft Bereich   : 0.5 bis 20.0 [Sekunden] Auflösung : 0.5 [Sekunden] => zeitgesteuerter Power-Down (0x0E) wird aktiviert b) Default: (Es wird kein Argument übergeben!) => normaler Power-Down (0x05) wird aktiviert |

### ENERGIESPARMODE

Einstellen des Energiesparmodes KWP2000: $31 StartRoutineByLocalIdentifier $0C ControlEnergySavingMode Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| PRODUKTIONSMODE | string | "ein" -> Produktions Mode ein "aus" -> Produktions Mode aus table DigitalArgument TEXT Default: "aus" |
| TRANSPORTMODE | string | "ein" -> Transport Mode ein "aus" -> Transport Mode aus table DigitalArgument TEXT Default: "aus" |
| WERKSTATTMODE | string | "ein" -> Werkstatt Mode ein "aus" -> Werkstatt Mode aus table DigitalArgument TEXT Default: "aus" |

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

### _SERIENNUMMER_LESEN

Hersteller Seriennummer lesen KWP2000: $1A ReadECUIdentification $89 SystemSupplierECUSerialNumber oder alternativ KWP2000: $1A ReadECUIdentification $80 ECUIdentificationDataTable Modus  : Default

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
| MODE | string | Byte0 LOCK_SERVER_SK LOCK_CLIENT_SK WRITE_SERVER_SK WRITE_CLIENT_SK UNLOCK_CLIENT_SK |
| DATA | string | Byte1...16 16 Byte Daten (SecretKey), falls MODE = WRITE_SERVER_SK/WRITE_CLIENT_SK, "0x01,0x02,.." KEINE Daten nötig, falls MODE = LOCK_SERVER_SK/LOCK_CLIENT_SK |

### _FREISCHALTCODE_SCHREIBEN_ALL

Mehrere Aktionen, FSC Laenge schreiben, FSC schreiben KWP 2000: $31 $1F $F2 / SetFSCLen KWP 2000: $31 $1F $F1 / FSCwrite KWP 2000: $31 $1F $EE / FSCcheck

| Name | Type | Description |
| --- | --- | --- |
| DATA | string | Daten werden in Hex-Form ohne vorangestelltes 0x, ohne Zwischenraum uebertragen |

### STATUS_MONTAGEMODUS

0x3343 STATUS_MONTAGEMODUS Auslesen Montage-Modus

_No arguments._

### STEUERN_ENDE_MONTAGEMODUS

0x3243 STEUERN_ENDE_MONTAGEMODUS Ende Montage-Modus

_No arguments._

### STEUERN_MONTAGEMODUS

0x3143 STEUERN_MONTAGEMODUS Ansteuern Montage-Modus

_No arguments._

### STATUS_HVPM_DCDC_ALS

HVPM DCDC ALS EME_HVPM_DCDC_ALS (0xDE1C)

_No arguments._

### STATUS_HVPM_DCDC_ANSTEUERUNG

DCDC Ansteuerung EME_HVPM_DCDC_ANSTEUERUNG (0xDE00)

_No arguments._

### STATUS_HVPM_ENERGIEBORDNETZ_2

Anzahl Herstellung Fahrbereitschaft im SOC Bereich EME_HVPM_ENERGIEBORDNETZ_2 (0xDE04)

_No arguments._

### STATUS_HVPM_ENERGIEBORDNETZ

HV Energie / Zellspannungen EME_HVPM_ENERGIEBORDNETZ (0xDE03)

_No arguments._

### STATUS_HVPM_PKOR

HVPM Leistungskoordinator EME_HVPM_PKOR (0xDE06)

_No arguments._

### STATUS_KLE

Infos zu Ladekabel und Phasenströme STATUS_KLE (0xDE97)

_No arguments._

### IDENT_IBS

0x224021 IDENT_IBS Identifikationsdaten fuer IBS-Sensor auslesen Aktivierung: Klemme 15 = EIN Activation: LV_IGK = 1

_No arguments._

### STEUERN_BATTERIETAUSCH_REGISTRIEREN

UDS $31 F8 Batterietausch registrieren

_No arguments._

### STATUS_LEMINFO_AEP

0x224017 STATUS_LEMINFO_AEP Infospeicher Leistungskoordination Elektrisch Mechanisch (LEM) auslesen

_No arguments._

### STATUS_MESSWERTE_IBS

0x22402B STATUS_MESSWERTE_IBS Messwerte IBS auslesen

_No arguments._

### STATUS_VERBREDINFO

0x22401D STATUS_VERBREDINFO Verbraucherreduzierungsspeicher auslesen

_No arguments._

### STEUERN_DCDC_WANDLER_RESULT

RIDI_DCDC - Steuern der HV-Spannung des DC/DC-Wandlers EME_DCDC_WANDLER (0xF1)

_No arguments._

### STEUERN_DCDC_WANDLER_START

RIDI_DCDC - Steuern der HV-Spannung des DC/DC-Wandlers EME_DCDC_WANDLER (0xF1)

| Name | Type | Description |
| --- | --- | --- |
| ST_DIAG_DCDC_ANF | unsigned char | Anforderung Betriebsart DCDC |
| ST_B_DIAG_DCDC | unsigned char | Auswahl der Systemgrenze |
| SOC_DIAG_LAD_LMT | unsigned int | SOC HV Batterie Ladegrenze |
| I_DIAG_DCDC_LV_OUT | int | LV Stromgrenze Systemgrenze |
| I_DIAG_DCDC_HV_OUT | int | HV Stromgrenze Systemgrenze |
| U_DIAG_DCDC_LV_OUT | unsigned int | LV Spannung Systemgrenze |
| U_DIAG_DCDC_HV_OUT | unsigned int | HV Spannung Systemgrenze |

### STEUERN_HVPM_INFOSPEICHER_PKOR_LOESCHEN

RIDI_HVPM_PKOR_CLR - Alle Infospeicher aus Job STATUS_HVPM_EKMV Null setzen EME_HVPM_INFOSPEICHER_PKOR_LOESCHEN (0xDE08)

_No arguments._

### STEUERN_HVPM_INFOSPEICHER_SPMON_LOESCHEN

RIDI_HVPM_SPMON_CLR - Löschen Infospeicher HVPM (SPMON) EME_HVPM_INFOSPEICHER_SPMON_LOESCHEN (0xDE0A)

_No arguments._

### STEUERN_HVPM_INFOSPEICHER_STRZLR_LOESCHEN

RIDI_HVPM_STRZLR_CLR - Löschen Infospeicher HSPM (STRZL) EME_HVPM_INFOSPEICHER_STRZLR_LOESCHEN (0xDE09)

_No arguments._

### STEUERN_PM_HISTOGRAM_RESET

UDS $40 2B AEP Histogram Reset

_No arguments._

### STATUS_PEDALWERTGEBER

Werte vom Pedalwertgeber PEDALWERTGEBER (0xDE9C)

_No arguments._

### STATUS_HVSTART_FEHLER

Angabe des Fehlers beim Hochfahren des HV-Systems EME_HVSTART_FEHLER (0xDE26)

_No arguments._

### STEUERN_ELUE_RESULT

Ansteuerung E-Lüfter ELUE (0xF7)

_No arguments._

### STEUERN_ELUE_START

Ansteuerung E-Lüfter ELUE (0xF7)

| Name | Type | Description |
| --- | --- | --- |
| STAT_ELUESOLL_WERT | real | Vorgabe der Lüfterdrehzahl (0 - 99.6 %) |

### STEUERN_ELUE_STOP

Ansteuerung E-Lüfter ELUE (0xF7)

_No arguments._

### STATUS_CONNECTED_DRIVE

Informationen über Connected Drive STATUS_CONNECTED_DRIVE (0xE0)

_No arguments._

### STATUS_HVPM_HV_SYSTEM_ON_OFF

Hochvoltsystem An / Aus EME_HVPM_HV_SYSTEM_ON_OFF (0xDE02)

_No arguments._

### STEUERN_EME_EWAP_RESULT

Ansteuerung der LIN Wasserpumpe EME mit Vorgabe Drehzahl und Ansteuerzeit EME_EWAP (0xF6)

_No arguments._

### STEUERN_EME_EWAP_START

Ansteuerung der LIN Wasserpumpe EME mit Vorgabe Drehzahl und Ansteuerzeit EME_EWAP (0xF6)

| Name | Type | Description |
| --- | --- | --- |
| DREHZAHL_WERT | unsigned char | geforderte Drehzahl (0-100%) nur möglich, falls Temperatur des Jobs job STATUS_TEMP_EMASCHINE zwischen 15 und 45 °C |
| ZEIT_ANSTEUERUNG_WERT | unsigned int | geforderte Ansteuerzeit (0-500s) |

### STEUERN_EME_EWAP_STOP

Ansteuerung der LIN Wasserpumpe EME mit Vorgabe Drehzahl und Ansteuerzeit EME_EWAP (0xF6)

_No arguments._

### STATUS_AE

Info über AE: DCDC, ELUP, Temperaturen STATUS_AE (0xDE99)

_No arguments._

### STATUS_SME

Temperatur, Spannungen,Strom, SOC der HV-Batterie STATUS_SME (0xDE98)

_No arguments._

### STEUERN_LADELEISTUNG_START

STEUERN_LADELEISTUNG (0xC2)

| Name | Type | Description |
| --- | --- | --- |
| MAX_LADELEISTUNG | unsigned long | Vorgabe maximaler Ladeleistung an eDME |

### STATUS_ELUP

aktueller Zustand ELUP EME_ELUP (0xDE19)

_No arguments._

### STATUS_EME_ANSTEUERUNG_ELUP

Aktueller Schaltzustand ELUP (0 = Aus, 1 = Ein) EME_ANSTEUERUNG_ELUP (0xDE0E)

_No arguments._

### STATUS_TSR_LADEN

Alle Rückgabewerte bezüglich TSR Laden STATUS_TSR_LADEN (0xE4)

_No arguments._

### STATUS_SYSTEMCHECK_PM_INFO_1

0x224022 STATUS_SYSTEMCHECK_PM_INFO_1 Intelligenter Batteriesensor Bitfeld Pminfo1 lesen

_No arguments._

### STATUS_SYSTEMCHECK_PM_INFO_2

0x224023 STATUS_SYSTEMCHECK_PM_INFO_2 Intelligenter Batteriesensor Bitfeld Pminfo2 lesen

_No arguments._

### STATUS_TSR_PKOR

Status TSR Leistungskoordinator STATUS_TSR_PKOR (0xDEAC)

_No arguments._

### STATUS_ECOPRO

STATUS_ECOPRO (0xDEB8)

_No arguments._

### STATUS_TSR_3_LESEN

Teleservice Daten 3 auslesen STATUS_TSR_3_LESEN (0xE3)

_No arguments._

### STATUS_BPAS_LESEN

Teleservice Daten bzgl. BPAS auslesen STATUS_TSR_3_LESEN (0xE6)

_No arguments._

### STATUS_SYSTEMCHECK_AEP_INFO_1

0x22DEBA STATUS_SYSTEMCHECK_AEP_INFO_1 Intelligenter Batteriesensor Bitfeld Pminfo1 lesen

_No arguments._

### STATUS_SYSTEMCHECK_AEP_INFO_2

0x22DEBB STATUS_SYSTEMCHECK_AEP_INFO_2 Intelligenter Batteriesensor Bitfeld Pminfo2 lesen

_No arguments._

### STEUERN_FLASHMODE_ACAN_RESULT

Flashmode ACAN (0xF5)

_No arguments._

### STEUERN_FLASHMODE_ACAN_START

Flashmode ACAN (0xF5)

_No arguments._

### STEUERN_FLASHMODE_ACAN_STOP

Flashmode ACAN (0xF5)

_No arguments._

### STATUS_TSR_1_LESEN

Tele Service Daten auslesen STATUS_TSR_1_LESEN (0xE1)

_No arguments._

### STEUERN_START_LADEN_START

Ladestart anfordern STEUERN_START_LADEN (0xC0)

_No arguments._

### STEUERN_STOP_LADEN_STOP

Ladestop anfordern STEUERN_STOP_LADEN (0xC100)

_No arguments._

### STATUS_TSR_2_LESEN

Tele Service Daten auslesen STATUS_TSR_2_LESEN (0xE2)

_No arguments._

### STATUS_DEGRAD_DISP_LESEN

Angezeigte Degradationen der letzten 10 Fahrzyklen DEGRAD_DISP_LESEN (0xDEC1)

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
| 0x2725 | Steuergeraet interner Fehler -Analog Digital Wandler Fehler |
| 0xCD89 | PT_CAN -Kommunikationsstoerung Botschaft (Anforderung Radmomente Antriebsstrang 0xBF Sender DSC) |
| 0xCDA1 | A_CAN -Kommunikationsstoerung Botschaft (Ist Daten DC/DC Wandler Ladeelektronik Langzeit 0x2C8 Sender AE) |
| 0xCDBA | A_CAN -Kommunikationsstoerung Botschaft (Ist Daten Komfort Ladeelektronik Langzeit 0x211 Sender KLE) |
| 0xCDA2 | A_CAN -Kommunikationsstoerung Botschaft (Ist Daten Ladeelektronik 0x108 Sender AE) |
| 0xCDA3 | A_CAN -Kommunikationsstoerung Botschaft (Ist Daten E Motor Traktion 0x100 Sender AE) |
| 0xCDA4 | A_CAN -Kommunikationsstoerung Botschaft (Ist Daten E Motor Traktion Langzeit 0x2C9 Sender AE) |
| 0xCDA5 | A_CAN -Kommunikationsstoerung Botschaft (Ist Daten Parksperre 0x35B Sender AE) |
| 0xCD86 | A_CAN -CAN Baustein Abschaltung |
| 0x2710 | Bremslichtschalter |
| 0x2711 | Charge Enable Control  |
| 0x2712 | Ladeleuchte  |
| 0x2713 | Elektroluefter Relais  |
| 0x2714 | Kuehlpumpe Notlaufeingang  |
| 0x2715 | Eingang MSA  |
| 0x271B | 12V Relais Ansteuerung  |
| 0x2716 | Klemme 50  |
| 0xCD88 | PT_CAN -Kommunikationsstoerung Botschaft (Aussentemperatur/Relativzeit 0x310 Sender Kombi) |
| 0x2717 | Ansteuerung Elektroluefter  |
| 0x2812 | Spannungsversorgung -Wert unplausibel |
| 0xCD8A | PT_CAN -Kommunikationsstoerung Botschaft (Bedienung Getriebewahlschalter 0x198 Sender GWS) |
| 0xCD9B | PT_CAN -Kommunikationsstoerung Botschaft (Bedienung Taster MSA 0x195 Sender IHKA) |
| 0x280A | Powermanagement -Niedervoltbatterie defekt waehrend Transport |
| 0x280B | Powermanagement -Niedervoltbatterie entladen wahrend Transport |
| 0x280C | Powermanagement -Niedervoltbatterie Bordnetzinstabilitaet |
| 0x2838 | AEP -12 V Batterie wird nicht geladen |
| 0x2839 | AEP -12 V Batterie wird nicht geladen |
| 0x2817 | Powermanagement - Niedervoltbatterie wird nicht geladen |
| 0x280D | Powermanagement -Ruhestromverletzung |
| 0x280E | Powermanagement -Niedervoltbatterie tiefentlanden |
| 0x280F | Powermanagement -Niedervolt Bordnetz Ueberspannung |
| 0x2810 | Powermanagement -Niedervolt Bordnetz Unterspannung |
| 0x2811 | Powermanagement -elektrische Verbraucher eingeschraenkt |
| 0x283A | AEP -12 V Batterie stark entladen |
| 0x27A9 | Bremspedal -Plausibilitaetsfehler |
| 0x2815 | Niedervoltbatterie defekt |
| 0x2816 | Niedervoltbatterie tiefentlanden |
| 0x27B1 | Checkcontrol 174 -Getriebeposition P nur im Stillstand |
| 0x27B2 | Checkcontrol 175 -Getriebepostion P gestoert |
| 0x27B3 | Checkcontrol 203 -Getriebe in N Waschstrassenfunktion |
| 0x27B4 | Checkcontrol 220 -Erhoehte Batterieentladung |
| 0x27B5 | Checkcontrol 244 -Zum Gangeinlegen Bremse treten |
| 0x27B6 | Checkcontrol 250 -Gang ohne Bremse einlegebar |
| 0x27B7 | Checkcontrol 251 -Getriebeposition P wird eingelegt |
| 0x27B8 | Checkcontrol 252 -Gong bei ungenuegender P Betaetigung |
| 0x27B9 | Checkcontrol 394 -Waehlhebel gestoert |
| 0x27BA | Checkcontrol 557 -Fahrzeug gegen Wegrollen sichern |
| 0x27BB | Checkcontrol 565 -Getriebeposition P nur im Stillstand |
| 0x27BC | Checkcontrol 636 -Hochvoltsystem abgeschaltet |
| 0x27BD | Checkcontrol 802 -Ladekabel pruefen |
| 0x27BE | Checkcontrol 803 -Netzleistung zu gering |
| 0x27BF | Checkcontrol 804 -Laden nicht moeglich |
| 0x27C0 | Checkcontrol 809 -Zum Laden P einlegen |
| 0x2784 | Checkcontrol-Uebertemperatur Antrieb China |
| 0x27C1 | Checkcontrol - Ueberstrom Parkaktuator. P kann eventuell nicht mehr ausgelegt werden. |
| 0x2774 | Notlaufmanager -Abschaltung DCDC Wandler wegen Ueberstrom |
| 0x2775 | Notlaufmanager -Abschaltung DCDC Wandler wegen HW Fehler |
| 0x2776 | Notlaufmanager -DCDC Wandler Abschaltung wegen Uebertemperatur |
| 0x2777 | Notlaufmanager -DCDC Wandler Abschaltung wegen Spannungskriterium |
| 0x2968 | N/A |
| 0x27A6 | Betriebsstrategie -Begrenzung der Antriebsleistung Stufe 1 |
| 0x27A7 | Betriebsstrategie -Begrenzung der Antriebsleistung Stufe 2 |
| 0x27AD | BEV13 |
| 0x2969 | N/A |
| 0x27F7 | - |
| 0x2976 | Elektrische Unterdruckpumpe -Elektrischer Fehler |
| 0x27E3 | Elektrische Unterdruckpumpe -Blockiert |
| 0x27E4 | Elektrische Unterdruckpumpe -Drucksensor Fehler |
| 0x27E7 | Elektrische Unterdruckpumpe - Ansteuerung seitens AE nicht moeglich elektrischer Fehler oder Montagemode aktiv |
| 0x27E5 | Elektrische Unterdruckpumpe -Leckage erkannt |
| 0x27E6 | Elektrische Unterdruckpumpe -Laufzeit Fehler |
| 0x2786 | Notlaufmanager - Abschaltung wegen Fehlerbedingte Nullmomentenregelung |
| 0x2787 | Notlaufmanager - Abschaltung wegen Fehlerbedingter AKS |
| 0x2788 | Notlaufmanager - Abschaltung wegen Fehlerbedingter Freilauf |
| 0x2779 | Notlaufmanager -Drehzahl der Elektromaschine hat Grenzwert ueberschritten |
| 0x275B | Kuehlmittelpumpe -Kommunikation |
| 0x275C | Kuehlmittelpumpe -Temperaturschwelle 1 ueberschritten |
| 0x275D | Kuehlmittelpumpe -Temperaturschwelle 2 ueberschritten |
| 0x275E | Kuehlmittelpumpe Kommunikation -Notlaufeingang Plausibilitaetsfehler |
| 0x275F | Kuehlmittelpumpe -Drehzahl ausserhalb Gueltigkeitsbereich |
| 0x2760 | Kuehlmittelpumpe -Trockenlauf |
| 0x2761 | Kuehlmittelpumpe -Ueberspannung |
| 0x2762 | Kuehlmittelpumpe -Ueberstrom |
| 0x2763 | Kuehlmittelpumpe -Uebertemperatur |
| 0x2764 | Kuehlmittelpumpe -Unterspannung |
| 0x27AB | Gaspedal und Bremspedalstellung -Plausibilitaetsfehler |
| 0x2820 | Herstellen Fahrbereitschaft nicht moeglich wegen Temperatur HV-Batterie zu hoch |
| 0x27AA | Betriebsstrategie -Herstellen der Fahrbereitschaft wegen des gesteckten Ladekabels nicht moeglich |
| 0x27AC | Betriebsstrategie -Herstellen der Fahrbereitschaft wegen des unplausiblen Ladekabelzustandes nur verzoegert moeglich |
| 0x282C | HV Powermanagement -HV Power Down aufgrund niedrigem Ladezustand HV Batterie |
| 0x282D | HV Batterie -Isoaltionsfehler |
| 0x282E | HV Batterie -Isolationswarnung |
| 0x2855 | Hochvoltbatterie - Temperatur kritischer Wert |
| 0x2821 | Hochvoltbatterie - Temperatur verlaesst Normalbereich |
| 0x2822 | Hochvoltbatterie - Temperatur wieder im Normalbereich |
| 0x282F | HV Zwischenkreisentladung -HV Zwischenkreis nicht spannungsfrei trotz Anforderung |
| 0x2830 | HV Powermanagement -keine HV Freigabe trotz Anforderung |
| 0x274C | Intelligenter Batteriesensor -Kommunikation |
| 0x274D | Intelligenter Batteriesensor -Strommessung unplausibel |
| 0x274E | Intelligenter Batteriesensor -Firmware unplausibel |
| 0x274F | Intelligenter Batteriesensor -Systemfehler |
| 0x2750 | Intelligenter Batteriesensor -Temperaturmessung unplausibel |
| 0x2751 | Intelligenter Batteriesensor -Spannungsmessung unplausibel |
| 0x2752 | Intelligenter Batteriesensor -Wake Up Leitung Leitungsbruch |
| 0x2753 | Intelligenter Batteriesensor -Wake Up Leitung ueber oder unter Schwellwert |
| 0x2831 | HV Powermanagement -Interlock unterbrochen |
| 0x283B | Lademanagement - AC-Spannung fehlt. HV-Speicher wird nicht geladen |
| 0x2823 | Lademanagement -AC Spannung fehlt nach Ladebeginn |
| 0x2824 | Lademanagement -AC Spannung dauerhaft instabil |
| 0x2825 | Lademanagement -SLE/KLE in Failsafe |
| 0x2826 | Lademanagement -Ladefehler |
| 0x2827 | Lademanagement -Ladeziel nicht erreichbar (SLE Leistung zu gering) |
| 0x2828 | Lademanagement -Ladeziel nicht erreichbar (Entladeschutz NV BN) |
| 0x2836 | Lademanagement -Zustand Ladestecker unbekannt |
| 0x2829 | Lademanagement -Ladestoerung |
| 0x290F | Fehlerort 1 fur FSP Testfunktion Layer |
| 0x2910 | Fehlerort 2 fur FSP Testfunktion Layer |
| 0x27AE | BEV13 |
| 0x2970 | N/A |
| 0x296A | N/A |
| 0x296B | N/A |
| 0x296E | N/A |
| 0x296F | N/A |
| 0x296C | N/A |
| 0x296D | N/A |
| 0x2971 | N/A |
| 0x282A | Lademanagement -Pilotsignal ungueltig |
| 0x2837 | Lademanagement -Pilotsignal ungueltig ausserhalb Ladebereitschaft |
| 0x27A8 | Betriebsstrategie -Begrenzung der Rekuperation |
| 0x27AF | BEV13 |
| 0x2832 | HV Batterie -einfacher Schuetzkleber |
| 0x2785 | Signalausfall-Moment und Betriebsartvorgabe E Maschine |
| 0x2833 | Signalausfall -HV Powermanagement |
| 0x2834 | Signalausfall -Antriebselektronik |
| 0x2835 | Signalausfall -HV Batterie |
| 0x2780 | Notlaufmanager -Hochvolt Batterie Service Request (Fehlerkategorie 3) |
| 0x2783 | Notlaufmanager -Hochvolt Batterie Nullstromanforderung (Fehlerkategorie 5) |
| 0x2781 | Notlaufmanager -Hochvolt Batterie Anforderung schnelles Schuetze oeffnen (Fehlerkategorie 6) |
| 0x2782 | Notlaufmanager -Hochvolt Batterie Anforderung unmittelbares Schuetze oeffen (Fehlerkategorie 7) |
| 0x2972 | N/A |
| 0x27B0 | BEV13 |
| 0x27F1 | Interne Getriebeueberwachung -Parkposition aktuell nicht detektierbar |
| 0x27F2 | Interne Getriebeueberwachung -Parkposition aktuell eingelegt aktuell kein Fahrerwunsch Parken vorhanden |
| 0x27F3 | Interne Getriebeueberwachung -Parkposition aktuell nicht eingelegt aktuell Fahrerwunsch Parken vorhanden |
| 0x27F4 | Interner Fehler ShiftbyWire Ueberwachung -Geschwindigkeit unplausibel |
| 0x27F5 | Interner Fehler ShiftbyWire Ueberwachung -Falsche Anweisung |
| 0x27F6 | Interner Fehler ShiftbyWire Ueberwachung -Falsche Positionsanzeige |
| 0x282B | Lademanagement -Vorkonditionierung nicht moglich |
| 0x2973 | N/A |
| 0x2974 | N/A |
| 0x2975 | N/A |
| 0xCD9F | PT_CAN -Kommunikationsstoerung Botschaft (Codierung Powermanagement 0x395 Sender CAS) |
| 0xCD8C | PT_CAN -Kommunikationsstoerung Botschaft (Steuerung Crashabschaltung EKP 0x135 Sender MRSZ) |
| 0x2856 | Steuergeraet interner Fehler - stuck relay error |
| 0xCD8D | PT_CAN -Kommunikationsstoerung Botschaft (Drehmomentanforderung DSC 0xB6 Sender DSC) |
| 0x2857 | Steuergeraet interner Fehler - main relay dropout error |
| 0xCDA6 | A_CAN -Kommunikationsstoerung Botschaft (Daten Bremssystem Motorsteuerung 0x206 Sender AE) |
| 0xCDA7 | A_CAN -Kommunikationsstoerung Botschaft (Daten Antrieb Elektrisch 0x32F Sender AE) |
| 0xCDA8 | A_CAN -Kommunikationsstoerung Botschaft (Daten Hochvoltspeicher 0x431 Sender SME) |
| 0x2905 | Energiesparmode aktiv |
| 0xCDA9 | A_CAN -Kommunikationsstoerung Botschaft (Energieverbrauch Ladeelektronik 0x354 Sender AE) |
| 0xCDAA | A_CAN -Kommunikationsstoerung Botschaft (Fehlerstatus Ladeelektronik 0x359 Sender AE) |
| 0x283C | Ebene 2 Ueberwachung -Kommunikation PIC Watchdog Falsche Anfrage |
| 0x284A | Ebene 2 Ueberwachung - Double Storage Error |
| 0x2858 | Steuergeraet interner Fehler - ESM memory integrity error (All Code) |
| 0x2859 | Steuergeraet interner Fehler - ESM memory integrity error (All Data) |
| 0x285A | Steuergeraet interner Fehler - ESM memory integrity error (All Ram) |
| 0x2840 | Ebene 2 Ueberwachung -Code Pruefsummen Fehler |
| 0x2841 | Ebene 2 Ueberwachung -Daten Pruefsummen Fehler |
| 0x2842 | Ebene 2 Ueberwachung -RAM Pruefsummen Fehler |
| 0x285B | Steuergeraet interner Fehler - ESM L2 trip error |
| 0x285C | Steuergeraet interner Fehler - ESM L3 trip error |
| 0x285D | Steuergeraet interner Fehler - ESM Monitoring Module reset timeout |
| 0x285E | Steuergeraet interner Fehler - ESM trip error |
| 0x2843 | Ebene 2 Ueberwachung -Kein Clock vom Watchdog |
| 0x27D8 | Fahrpedalmodul -ESM Plausibilitaets Fehler |
| 0x2844 | Ebene 2 Ueberwachung -Programm Ablauf Fehler |
| 0x285F | Steuergeraet interner Fehler - ESM power off CAN shutdown fault |
| 0x2860 | Steuergeraet interner Fehler - ESM power off reset fault |
| 0x2845 | Steuergeraet interner Fehler -Referenzspannung zu hoch |
| 0x2847 | Ebene 2 Ueberwachung -Anfrage Fehler |
| 0x2861 | Steuergeraet interner Fehler - ESM L3 Shutoff path test error |
| 0x2848 | Ebene 2 Ueberwachung -Fehler Sicherheitskonzept |
| 0x2849 | Ebene 2 Ueberwachung -Unplausibilitaet Bremsdruck |
| 0x286E | Interner Fehler EWS-Daten: Pruefsummenfehler |
| 0x286F | Botschaft EWS-DME fehlerhaft: Zeitueberschreitung |
| 0x2870 | Botschaft EWS-DME fehlerhaft: Framefehler |
| 0x2871 | EWS Manipulationsschutz: kein Startwert programmiert |
| 0x2872 | EWS Manipulationsschutz: erwartete Antwort unplausibel |
| 0x2873 | Botschaft EWS-DME fehlerhaft: Framefehler |
| 0x2874 | Interner Fehler EWS-Daten: Schreibfehler Secret Key |
| 0xCD8E | PT_CAN -Kommunikationsstoerung Botschaft (Nachlaufzeit Stromversorgung 0x3BE Sender CAS) |
| 0xCD8F | PT_CAN -Kommunikationsstoerung Botschaft (Geschwindigkeit 0x1A0 Sender DSC) |
| 0xCD90 | PT_CAN -Kommunikationsstoerung Botschaft (Radgeschwindigkeit 0xCE Sender DSC) |
| 0x27E1 | Fahrpedalmodul -Pedalwertgeber 2 Analog Digital Wandler Test Fehler |
| 0xCDAB | A_CAN -Kommunikationsstoerung Botschaft (Identifikation Hochvoltspeicher 0x363 Sender SME) |
| 0xCD91 | PT_CAN -Kommunikationsstoerung Botschaft (Kilometerstand 0x330 Sender Kombi) |
| 0xCD92 | PT_CAN -Kommunikationsstoerung Botschaft (Klemmenstatus 0x130 Sender CAS) |
| 0x2718 | Plausibilitaetsueberwachung fuer FGR-Funktion (WMOM_PT_ENB / ST_DRASY_PT) |
| 0xCD93 | PT_CAN -Kommunikationsstoerung Botschaft (Lenkradwinkel 0xC4 Sender DSC) |
| 0xCD9E | PT_CAN -Kommunikationsstoerung Botschaft (Lenkradwinkel Oben 0xC8 Sender SZL_LWS) |
| 0xCDAC | A_CAN -Kommunikationsstoerung Botschaft (Begrenzung Ladung Entladung Hochvoltspeicher 0x2F5 Sender SME) |
| 0xCDAD | A_CAN -Kommunikationsstoerung Botschaft (Begrenzung Ladeelektronik 0x1F5 Sender AE) |
| 0x2742 | LIN BUS -Globaler Fehler Batteriesensor oder Wasserpumpe |
| 0x2743 | LIN BUS -Kommunikation zum Batteriesensor gestoert |
| 0x2744 | LIN BUS -Kommunikation zur Wasserpumpe gestoert |
| 0x2745 | LIN BUS -Kommunikation zur Wasserpumpe unplausibel |
| 0x2862 | Steuergeraet interner Fehler - ESM memory integrity error (Ram Parity error) |
| 0xCDAE | A_CAN -Kommunikationsstoerung Botschaft (Modus Spannungsgesteuert 0x432 Sender SME) |
| 0x2904 | Montagemodus aktiv |
| 0x27D9 | Fahrpedalmodul -Pedalwertgeber Sensor Korrelationsfehler |
| 0x27DB | Gaspedal und Bremspedalstellung -Kompatibilitaetsfehler Notlauf |
| 0x27DC | Gaspedal und Bremspedalstellung -Kompatibilitaetsfehler Leistungseinschraenkung |
| 0x27DD | Fahrpedalmodul -Pedal klemmt |
| 0x27DE | Fahrpedalmodul -Pedalwertgeber 1 Analog Digital Wandler Fehler |
| 0x27E2 | Fahrpedalmodul -Pedalwertgeber 2 Analog Digital Wandler Fehler |
| 0x271A | CEC Proximity  |
| 0xCD87 | PT_CAN -CAN Baustein Abschaltung |
| 0x2726 | Steuergeraet interner Fehler -EEPROM Zugriff nicht moeglich |
| 0x2727 | Steuergeraet interner Fehler -Daten inkonsistent |
| 0xCD9D | PT_CAN -Kommunikationsstoerung Botschaft (Status Anhaenger 0x2E4 Sender AHM) |
| 0xCD96 | PT_CAN -Kommunikationsstoerung Botschaft (Status DSC 0x19E Sender DSC) |
| 0xCD95 | PT_CAN -Kommunikationsstoerung Botschaft (Status Tuersensoren Abgesichert BN2000 0x1E1 Sender FRMFA) |
| 0xCD97 | A_CAN -Kommunikationsstoerung Botschaft (Status Hochvoltspeicher 2 0x112 Sender SME) |
| 0xCD98 | PT_CAN -Kommunikationsstoerung Botschaft (ZV und Klappenzustand 0x2FC Sender CAS) |
| 0xCDB9 | A_CAN -Kommunikationsstoerung Botschaft (Status Ladeschnittstelle 0x3B4 Sender KLE) |
| 0xCDB1 | A_CAN -Kommunikationsstoerung Botschaft (Status Ladung Hochvoltspeicher 2 0x430 Sender SME) |
| 0xCDB2 | A_CAN -Kommunikationsstoerung Botschaft (Status Ladung Hochvoltspeicher 3 0x3EB Sender SME) |
| 0xCDB3 | A_CAN -Kommunikationsstoerung Botschaft (Status DCDC 0x429 Sender AE) |
| 0xCD94 | PT_CAN -Kommunikationsstoerung Botschaft (Status Fahrererkennung 0x2F1 Sender MRSZ) |
| 0xCDB5 | A_CAN -Kommunikationsstoerung Botschaft (Status Heizung Hochvoltspeicher 0x2FF Sender SME) |
| 0xCDB6 | A_CAN -Kommunikationsstoerung Botschaft (Status Hochvoltspeicher 1 0x1AF Sender SME) |
| 0xCDB7 | A_CAN -Kommunikationsstoerung Botschaft (Status Begrenzung E Motor Traktion 0x2E8 Sender AE) |
| 0xCDA0 | PT_CAN -Kommunikationsstoerung Botschaft (Status Teleservice 0x436 Sender COMBOXMAIN) |
| 0xCD8B | PT_CAN -Kommunikationsstoerung Botschaft (Konfiguration Laden Hochvoltspeicher 0x340 Sender CIC) |
| 0xCDC2 | PT_CAN -Kommunikationsstoerung Botschaft (Dienste 0x5F8 Sender IHx) |
| 0xCDC3 | PT_CAN -Kommunikationsstoerung Botschaft (Dienste 0x5E0 Sender KOMBI) |
| 0x284E | Ebene 2 Ueberwachung -Fehler Beschleunigungsueberwachung |
| 0x284D | Ebene 2 Ueberwachung -Fehler Betriebsartenueberwachung |
| 0x284B | Ebene 2 Ueberwachung -Fehler Sollmomentenueberwachung |
| 0x284C | Ebene 2 Ueberwachung -Fehler Stillstandsueberwachung |
| 0x2852 | Ebene2-Ueberwachung: Fehler Istmoment der AE |
| 0x2850 | Ebene 2 Ueberwachung Fahreranwesenheit - Fehler Solldrehrichtung |
| 0x2851 | Ebene 2 Ueberwachung Fahreranwesenheit - Fehler Herstellung Fahrbereitschaft |
| 0x284F | Ebene 2 Ueberwachung -Fehler Fahrtrichtungsueberwachung |
| 0xCD99 | PT_CAN -Kommunikationsstoerung Botschaft (Uhrzeit/Datum 0x2F8 Sender Kombi) |
| 0x272E | Steuergeraet interner Fehler -Spannungsregler 1 Spannung ausserhalb gueltiger Bereich |
| 0x272F | Steuergeraet interner Fehler -Spannungsregler 2 Reglerfehler |
| 0x2731 | Steuergeraet interner Fehler -Spannungsregler 2 AUX Reglerfehler |
| 0xCD9A | PT_CAN -Kommunikationsstoerung Botschaft (Waermestrom Klima 0x1B5 Sender IHKA) |
| 0xFFFF | Unknown error location |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | ja |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x2725 | 52 | 51 | 48 | 47 |
| 0xCD89 | 52 | 45 | 38 | 44 |
| 0xCDA1 | 52 | 45 | 38 | 44 |
| 0xCDBA | 52 | 45 | 38 | 44 |
| 0xCDA2 | 52 | 45 | 38 | 44 |
| 0xCDA3 | 52 | 45 | 38 | 44 |
| 0xCDA4 | 52 | 45 | 38 | 44 |
| 0xCDA5 | 52 | 45 | 38 | 44 |
| 0xCD86 | 52 | 45 | 38 | 44 |
| 0x2710 | 52 | 51 | 48 | 47 |
| 0x2711 | 52 | 51 | 48 | 47 |
| 0x2712 | 52 | 51 | 48 | 47 |
| 0x2713 | 52 | 6 | 5 | 47 |
| 0x2714 | 52 | 51 | 48 | 47 |
| 0x2715 | 52 | 51 | 48 | 47 |
| 0x271B | 52 | 51 | 48 | 47 |
| 0x2716 | 52 | 51 | 48 | 47 |
| 0xCD88 | 52 | 45 | 38 | 44 |
| 0x2717 | 52 | 6 | 5 | 47 |
| 0x2812 | 52 | 51 | 48 | 47 |
| 0xCD8A | 52 | 45 | 38 | 44 |
| 0xCD9B | 52 | 45 | 38 | 44 |
| 0x280A | 45 | 9 | 29 | 30 |
| 0x280B | 45 | 9 | 29 | 30 |
| 0x280C | 45 | 9 | 29 | 30 |
| 0x2838 | 45 | 9 | 29 | 30 |
| 0x2839 | 45 | 9 | 29 | 30 |
| 0x2817 | 45 | 9 | 29 | 30 |
| 0x280D | 45 | 9 | 29 | 30 |
| 0x280E | 45 | 9 | 29 | 30 |
| 0x280F | 45 | 9 | 29 | 30 |
| 0x2810 | 45 | 9 | 29 | 30 |
| 0x2811 | 45 | 9 | 29 | 30 |
| 0x283A | 45 | 9 | 29 | 30 |
| 0x27A9 | 52 | 51 | 48 | 47 |
| 0x2815 | 52 | 51 | 48 | 47 |
| 0x2816 | 52 | 51 | 48 | 47 |
| 0x27B1 | 52 | 51 | 48 | 47 |
| 0x27B2 | 52 | 51 | 48 | 47 |
| 0x27B3 | 52 | 51 | 48 | 47 |
| 0x27B4 | 52 | 51 | 48 | 47 |
| 0x27B5 | 52 | 51 | 48 | 47 |
| 0x27B6 | 52 | 51 | 48 | 47 |
| 0x27B7 | 52 | 51 | 48 | 47 |
| 0x27B8 | 52 | 51 | 48 | 47 |
| 0x27B9 | 52 | 51 | 48 | 47 |
| 0x27BA | 52 | 51 | 48 | 47 |
| 0x27BB | 52 | 51 | 48 | 47 |
| 0x27BC | 52 | 27 | 28 | 46 |
| 0x27BD | 52 | 18 | 19 | 26 |
| 0x27BE | 52 | 18 | 19 | 26 |
| 0x27BF | 52 | 18 | 19 | 26 |
| 0x27C0 | 52 | 18 | 19 | 26 |
| 0x2784 | 52 | 51 | 48 | 47 |
| 0x27C1 | 52 | 51 | 48 | 47 |
| 0x2774 | 52 | 51 | 48 | 47 |
| 0x2775 | 52 | 51 | 48 | 47 |
| 0x2776 | 52 | 51 | 48 | 47 |
| 0x2777 | 52 | 51 | 48 | 47 |
| 0x2968 | 52 | 51 | 48 | 47 |
| 0x27A6 | 52 | 51 | 48 | 47 |
| 0x27A7 | 52 | 51 | 48 | 47 |
| 0x27AD | 52 | 51 | 48 | 47 |
| 0x2969 | 52 | 51 | 48 | 47 |
| 0x27F7 | 52 | 51 | 48 | 47 |
| 0x2976 | 52 | 51 | 48 | 47 |
| 0x27E3 | 52 | 51 | 48 | 47 |
| 0x27E4 | 52 | 51 | 48 | 47 |
| 0x27E7 | 52 | 51 | 48 | 47 |
| 0x27E5 | 52 | 51 | 48 | 47 |
| 0x27E6 | 52 | 51 | 48 | 47 |
| 0x2786 | 52 | 51 | 48 | 47 |
| 0x2787 | 52 | 51 | 48 | 47 |
| 0x2788 | 52 | 51 | 48 | 47 |
| 0x2779 | 52 | 51 | 48 | 47 |
| 0x275B | 52 | 17 | 16 | 42 |
| 0x275C | 52 | 17 | 16 | 42 |
| 0x275D | 52 | 17 | 16 | 42 |
| 0x275E | 52 | 17 | 16 | 42 |
| 0x275F | 52 | 17 | 16 | 13 |
| 0x2760 | 52 | 17 | 16 | 13 |
| 0x2761 | 52 | 13 | 50 | 42 |
| 0x2762 | 52 | 13 | 50 | 42 |
| 0x2763 | 52 | 13 | 50 | 42 |
| 0x2764 | 52 | 13 | 50 | 42 |
| 0x27AB | 52 | 51 | 48 | 47 |
| 0x2820 | 52 | 18 | 19 | 26 |
| 0x27AA | 52 | 51 | 48 | 47 |
| 0x27AC | 52 | 51 | 48 | 47 |
| 0x282C | 52 | 27 | 28 | 46 |
| 0x282D | 52 | 27 | 28 | 46 |
| 0x282E | 52 | 27 | 28 | 46 |
| 0x2855 | 52 | 18 | 19 | 26 |
| 0x2821 | 52 | 18 | 19 | 26 |
| 0x2822 | 52 | 18 | 19 | 26 |
| 0x282F | 52 | 27 | 28 | 46 |
| 0x2830 | 52 | 27 | 28 | 46 |
| 0x274C | 45 | 9 | 29 | 30 |
| 0x274D | 45 | 9 | 29 | 30 |
| 0x274E | 45 | 9 | 29 | 30 |
| 0x274F | 45 | 9 | 29 | 30 |
| 0x2750 | 45 | 9 | 29 | 30 |
| 0x2751 | 45 | 9 | 29 | 30 |
| 0x2752 | 45 | 9 | 29 | 30 |
| 0x2753 | 45 | 9 | 29 | 30 |
| 0x2831 | 52 | 27 | 28 | 46 |
| 0x283B | 52 | 18 | 19 | 26 |
| 0x2823 | 52 | 18 | 19 | 26 |
| 0x2824 | 52 | 18 | 19 | 26 |
| 0x2825 | 52 | 18 | 19 | 26 |
| 0x2826 | 52 | 18 | 19 | 26 |
| 0x2827 | 52 | 18 | 19 | 26 |
| 0x2828 | 52 | 18 | 19 | 26 |
| 0x2836 | 52 | 18 | 19 | 26 |
| 0x2829 | 52 | 18 | 19 | 26 |
| 0x290F | 52 | 51 | 48 | 47 |
| 0x2910 | 52 | 51 | 48 | 47 |
| 0x27AE | 52 | 51 | 48 | 47 |
| 0x2970 | 52 | 51 | 48 | 47 |
| 0x296A | 52 | 51 | 48 | 47 |
| 0x296B | 52 | 51 | 48 | 47 |
| 0x296E | 52 | 51 | 48 | 47 |
| 0x296F | 52 | 51 | 48 | 47 |
| 0x296C | 52 | 51 | 48 | 47 |
| 0x296D | 52 | 51 | 48 | 47 |
| 0x2971 | 52 | 51 | 48 | 47 |
| 0x282A | 52 | 18 | 19 | 26 |
| 0x2837 | 52 | 18 | 19 | 26 |
| 0x27A8 | 52 | 51 | 48 | 47 |
| 0x27AF | 52 | 51 | 48 | 47 |
| 0x2832 | 52 | 27 | 28 | 46 |
| 0x2785 | 52 | 51 | 48 | 47 |
| 0x2833 | 52 | 27 | 28 | 32 |
| 0x2834 | 52 | 27 | 28 | 32 |
| 0x2835 | 52 | 27 | 28 | 32 |
| 0x2780 | 52 | 51 | 48 | 47 |
| 0x2783 | 52 | 51 | 48 | 47 |
| 0x2781 | 52 | 51 | 48 | 47 |
| 0x2782 | 52 | 51 | 48 | 47 |
| 0x2972 | 52 | 51 | 48 | 47 |
| 0x27B0 | 52 | 51 | 48 | 47 |
| 0x27F1 | 52 | 51 | 48 | 47 |
| 0x27F2 | 52 | 51 | 48 | 47 |
| 0x27F3 | 52 | 51 | 48 | 47 |
| 0x27F4 | 52 | 51 | 48 | 47 |
| 0x27F5 | 52 | 51 | 48 | 47 |
| 0x27F6 | 52 | 51 | 48 | 47 |
| 0x282B | 52 | 18 | 19 | 26 |
| 0x2973 | 52 | 51 | 48 | 47 |
| 0x2974 | 52 | 51 | 48 | 47 |
| 0x2975 | 52 | 51 | 48 | 47 |
| 0xCD9F | 52 | 45 | 38 | 44 |
| 0xCD8C | 52 | 45 | 38 | 44 |
| 0x2856 | 52 | 51 | 48 | 47 |
| 0xCD8D | 52 | 45 | 38 | 44 |
| 0x2857 | 52 | 51 | 48 | 47 |
| 0xCDA6 | 52 | 45 | 38 | 44 |
| 0xCDA7 | 52 | 45 | 38 | 44 |
| 0xCDA8 | 52 | 45 | 38 | 44 |
| 0x2905 | 52 | 51 | 48 | 47 |
| 0xCDA9 | 52 | 45 | 38 | 44 |
| 0xCDAA | 52 | 45 | 38 | 44 |
| 0x283C | 52 | 51 | 48 | 47 |
| 0x284A | 52 | 51 | 48 | 47 |
| 0x2858 | 52 | 51 | 48 | 47 |
| 0x2859 | 52 | 51 | 48 | 47 |
| 0x285A | 52 | 51 | 48 | 47 |
| 0x2840 | 52 | 51 | 48 | 47 |
| 0x2841 | 52 | 51 | 48 | 47 |
| 0x2842 | 52 | 51 | 48 | 47 |
| 0x285B | 52 | 51 | 48 | 47 |
| 0x285C | 52 | 51 | 48 | 47 |
| 0x285D | 52 | 51 | 48 | 47 |
| 0x285E | 52 | 51 | 48 | 47 |
| 0x2843 | 52 | 51 | 48 | 47 |
| 0x27D8 | 52 | 51 | 48 | 47 |
| 0x2844 | 52 | 51 | 48 | 47 |
| 0x285F | 52 | 51 | 48 | 47 |
| 0x2860 | 52 | 51 | 48 | 47 |
| 0x2845 | 52 | 51 | 48 | 47 |
| 0x2847 | 52 | 51 | 48 | 47 |
| 0x2861 | 52 | 51 | 48 | 47 |
| 0x2848 | 52 | 51 | 48 | 47 |
| 0x2849 | 52 | 51 | 48 | 47 |
| 0x286E | 52 | 51 | 48 | 47 |
| 0x286F | 52 | 51 | 48 | 47 |
| 0x2870 | 52 | 51 | 48 | 47 |
| 0x2871 | 52 | 51 | 48 | 47 |
| 0x2872 | 52 | 51 | 48 | 47 |
| 0x2873 | 52 | 51 | 48 | 47 |
| 0x2874 | 52 | 51 | 48 | 47 |
| 0xCD8E | 52 | 45 | 38 | 44 |
| 0xCD8F | 52 | 45 | 38 | 44 |
| 0xCD90 | 52 | 45 | 38 | 44 |
| 0x27E1 | 52 | 51 | 48 | 47 |
| 0xCDAB | 52 | 45 | 38 | 44 |
| 0xCD91 | 52 | 45 | 38 | 44 |
| 0xCD92 | 52 | 45 | 38 | 44 |
| 0x2718 | 52 | 45 | 38 | 44 |
| 0xCD93 | 52 | 45 | 38 | 44 |
| 0xCD9E | 52 | 45 | 38 | 44 |
| 0xCDAC | 52 | 45 | 38 | 44 |
| 0xCDAD | 52 | 45 | 38 | 44 |
| 0x2742 | 52 | 51 | 48 | 47 |
| 0x2743 | 45 | 9 | 29 | 30 |
| 0x2744 | 52 | 51 | 48 | 47 |
| 0x2745 | 52 | 51 | 48 | 47 |
| 0x2862 | 52 | 51 | 48 | 47 |
| 0xCDAE | 52 | 45 | 38 | 44 |
| 0x2904 | 52 | 51 | 48 | 47 |
| 0x27D9 | 52 | 51 | 48 | 47 |
| 0x27DB | 52 | 51 | 48 | 47 |
| 0x27DC | 52 | 51 | 48 | 47 |
| 0x27DD | 52 | 51 | 48 | 47 |
| 0x27DE | 52 | 51 | 48 | 47 |
| 0x27E2 | 52 | 51 | 48 | 47 |
| 0x271A | 52 | 51 | 48 | 47 |
| 0xCD87 | 52 | 45 | 38 | 44 |
| 0x2726 | 52 | 51 | 48 | 47 |
| 0x2727 | 52 | 51 | 48 | 47 |
| 0xCD9D | 52 | 45 | 38 | 44 |
| 0xCD96 | 52 | 45 | 38 | 44 |
| 0xCD95 | 52 | 45 | 38 | 44 |
| 0xCD97 | 52 | 45 | 38 | 44 |
| 0xCD98 | 52 | 45 | 38 | 44 |
| 0xCDB9 | 52 | 45 | 38 | 44 |
| 0xCDB1 | 52 | 45 | 38 | 44 |
| 0xCDB2 | 52 | 45 | 38 | 44 |
| 0xCDB3 | 52 | 45 | 38 | 44 |
| 0xCD94 | 52 | 45 | 38 | 44 |
| 0xCDB5 | 52 | 45 | 38 | 44 |
| 0xCDB6 | 52 | 45 | 38 | 44 |
| 0xCDB7 | 52 | 45 | 38 | 44 |
| 0xCDA0 | 52 | 45 | 38 | 44 |
| 0xCD8B | 52 | 45 | 38 | 44 |
| 0xCDC2 | 52 | 45 | 38 | 44 |
| 0xCDC3 | 52 | 45 | 38 | 44 |
| 0x284E | 52 | 51 | 48 | 47 |
| 0x284D | 52 | 51 | 48 | 47 |
| 0x284B | 52 | 51 | 48 | 47 |
| 0x284C | 52 | 51 | 48 | 47 |
| 0x2852 | 52 | 51 | 48 | 47 |
| 0x2850 | 52 | 51 | 48 | 47 |
| 0x2851 | 52 | 51 | 48 | 47 |
| 0x284F | 52 | 51 | 48 | 47 |
| 0xCD99 | 52 | 45 | 38 | 44 |
| 0x272E | 52 | 51 | 48 | 47 |
| 0x272F | 52 | 51 | 48 | 47 |
| 0x2731 | 52 | 51 | 48 | 47 |
| 0xCD9A | 52 | 45 | 38 | 44 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Auslastung DCDC-Wandler | - | high | unsigned char | - | 100 | 256 | 0 |
| 2 | Ist_Strom_Hochvoltspeicher | A | high | signed int | - | 1 | 10 | 0 |
| 3 | Ist_Spannung_Hochvoltspeicher | V | high | unsigned int | - | 1 | 10 | 0 |
| 4 | Ladezustand_Hochvoltspeicher | % | high | unsigned int | - | 1 | 10 | 0 |
| 5 | Hardwarestatus E-Luefter | % | high | unsigned char | - | 100 | 256 | 0 |
| 6 | Batterie Spannung eDME | V | high | signed int | - | 1 | 128 | 0 |
| 7 | Status Zuendung | - | high | unsigned long | - | 1 | 1 | 0 |
| 8 | Kilometer | Km | high | unsigned long | - | 1 | 1 | 0 |
| 9 | Batteriestrom vom IBS | A | high | unsigned int | - | 1 | 12.5 | -200 |
| 10 | Ist_Strom_Hochspannung_Zwischenkreis_E-Motor_Traktion | A | high | signed int | - | 1 | 4 | 0 |
| 11 | HV-Strom DCDC-Wandler | A | high | signed int | - | 1 | 10 | 0 |
| 12 | Ist-Strom Ladegeraet | A | high | signed int | - | 1 | 10 | 0 |
| 13 | Strom elektr. Wasserpumpe | A | high | signed int | - | 1 | 10 | 0 |
| 14 | Ist_Drehmoment_E-Motor_Traktion | Nm | high | signed int | - | 1 | 10 | 0 |
| 15 | Ist_Drehzahl_E-Motor_Traktion | 1/min | high | signed int | - | 1 | 1 | 0 |
| 16 | Istdrehzahl elektr. Wasserpumpe | rpm | high | unsigned char | - | 1 | 1 | 0 |
| 17 | Sollwert zum Ansteuern der EWP | rpm | high | unsigned char | - | 1 | 1 | 0 |
| 18 | Zustand Lademanager | HEX | high | signed long | - | 1 | 1 | 0 |
| 19 | letzte Uebergaenge Lademanager | HEX | high | signed long | - | 1 | 1 | 0 |
| 20 | Pedal Position | % | high | unsigned char | - | 1 | 128 | 0 |
| 21 | Raw information signal from Pedal track 1 | cnt | high | signed int | - | 1 | 1 | 0 |
| 22 | Raw information signal from Pedal track 2 | cnt | high | signed int | - | 1 | 1 | 0 |
| 23 | Q_iruhe1 | Ah | high | unsigned int | - | 18 | 989 | 0 |
| 24 | ENV_V_VEH | km/h | high | unsigned int | - | 1 | 64 | 0 |
| 25 | Fehlerstatus DCDC-Wandler | enum | high | signed int | - | 1 | 1 | 0 |
| 26 | Status Vorkonditionierung | - | high | unsigned char | - | 1 | 1 | 0 |
| 27 | Fehler HV-System | HEX | high | signed long | - | 1 | 1 | 0 |
| 28 | Status HV-System | - | high | unsigned char | - | 1 | 1 | 0 |
| 29 | LIN_ERR_ST_BYTE_02_IBS_LIN LIN ERR_ST_IBS_LIN | - | high | unsigned char | - | 1 | 1 | 0 |
| 30 | LIN_ERR_ST_BYTE_03_IBS_LIN LIN ERR_ST_IBS_LIN | - | high | unsigned char | - | 1 | 1 | 0 |
| 31 | ENV_ST_IO1_OUT | - | high | unsigned int | - | 1 | 1 | 0 |
| 32 | Status Signalfehler HVPM | - | high | unsigned long | - | 1 | 1 | 0 |
| 33 | STAT_SV_REG2 | - | high | unsigned char | - | 1 | 1 | 0 |
| 34 | T2histshort | min | high | unsigned char | - | 224 | 15 | 0 |
| 35 | T3histshort | min | high | unsigned char | - | 224 | 15 | 0 |
| 36 | T4histshort | min | high | unsigned char | - | 224 | 15 | 0 |
| 37 | Ist_Temperatur_Hochvoltspeicher | grad | high | signed int | - | 1 | 10 | 0 |
| 38 | Batterietemperatur vom IBS gemessen | grad | high | signed int | - | 1 | 10 | 0 |
| 39 | Ist_Temperatur_DC/DC_Wandler | grad | high | signed int | - | 1 | 10 | 0 |
| 40 | Ist_Temperatur_E-Motor_1 | grad | high | signed int | - | 1 | 100 | 0 |
| 41 | Ist_Temperatur_Ladeelektronik | grad | high | signed int | - | 1 | 10 | 0 |
| 42 | Temperatur elektr. Wasserpumpe | grad | high | signed int | - | 1 | 100 | 0 |
| 43 | T_MOT | grad | high | signed int | - | 1 | 100 | 0 |
| 44 | Aussentemperatur | grad | high | signed int | - | 1 | 10 | 0 |
| 45 | Batteriespannung vom IBS | V | high | unsigned int | - | 1 | 4000 | 6 |
| 46 | Ist_Spannung_Hochspannung_Zwischenkreis_E-Motor_Traktion | V | high | unsigned int | - | 1 | 10 | 0 |
| 47 | Ist_Spannung_DC/DC_Wandler_Hochspannung | V | high | unsigned int | - | 1 | 50 | 0 |
| 48 | Ist_Spannung_Niederspannung_DC/DC_Wandler | V | high | unsigned int | - | 1 | 10 | 0 |
| 49 | Vorgabe Sollspannung | V | high | unsigned int | - | 1 | 10 | 0 |
| 50 | Spannung elektr. Wasserpumpe | V | high | unsigned char | - | 1 | 10 | 0 |
| 51 | Fahrzeuggeschwindigkeit | km/h | high | unsigned int | - | 1 | 10 | 0 |
| 52 | Relativzeit | HEX | high | signed long | - | 1 | 1 | 1 |

### FARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| default | 0x0008 | 0x0004 | 0x0002 | 0x0001 |
| 0x2750 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2833 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27AA | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2839 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCDB3 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0xCDB9 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x271B | 0x0008 | 0x000b | 0x000c | 0x000d |
| 0x280D | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x2717 | 0x0008 | 0x000b | 0x000c | 0x000d |
| 0x27A8 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x283B | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x274F | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x296C | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x2871 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27F7 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2810 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x2844 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2779 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x2849 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27AE | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2725 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x274E | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2830 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2726 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2848 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2975 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x2811 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2823 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2760 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2777 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x27E3 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCDB6 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27C1 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2870 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2829 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x283C | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2718 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27C0 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2858 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCD8D | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0xCDAA | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2745 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x285A | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2971 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x272F | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27B6 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x274D | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCDA7 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27BA | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x275E | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x280F | 0x0008 | 0x0004 | 0x000f | 0x0001 |
| 0x27B1 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27E2 | 0x0008 | 0x000a | 0x000f | 0x000e |
| 0x2816 | 0x0008 | 0x0004 | 0x000f | 0x0001 |
| 0x27DE | 0x0008 | 0x000a | 0x000f | 0x000e |
| 0xCDA2 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27BE | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x283E | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2742 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x284D | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2862 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2825 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27F1 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2752 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27B3 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCD96 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0xCD9B | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2788 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0xCDA1 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2713 | 0x0008 | 0x000b | 0x000c | 0x000d |
| 0x2824 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2843 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2860 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2751 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x284C | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x285B | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2763 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x282E | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCD92 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2817 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2782 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCD89 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27E7 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCD98 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2727 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2826 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x280A | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27B9 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2820 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x2976 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2785 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0xCD9F | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27A7 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x282B | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2716 | 0x0008 | 0x000b | 0x000c | 0x000d |
| 0xCD95 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27E6 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27BB | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2764 | 0x0008 | 0x0004 | 0x000f | 0x0001 |
| 0x275F | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x285E | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x275B | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2970 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x296A | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0xCD88 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27B2 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCD8E | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27F2 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27B5 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2831 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27AF | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2852 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCDA6 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27F6 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2775 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27E1 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCD8B | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x290F | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0xCD9D | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27AB | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCD97 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2835 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2834 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2787 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x27B0 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2712 | 0x0008 | 0x000b | 0x000c | 0x000d |
| 0x2910 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x27BF | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2861 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2874 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x296B | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0xCDAE | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0xCDA3 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x283D | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2857 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2730 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x284F | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCD99 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2837 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x280B | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27DC | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2821 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x2855 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x296E | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x2744 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x274C | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2784 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x283F | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27DB | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCDA0 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x284B | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCDC3 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0xCDA9 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0xCD94 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0xCDAC | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2904 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2973 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x2850 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27B8 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2840 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27F3 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x286F | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27E5 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCD9E | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2774 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0xCDB7 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2776 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x2715 | 0x0008 | 0x000b | 0x000c | 0x000d |
| 0xCDC2 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2856 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2762 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x2842 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCD91 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x275C | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x27AC | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2859 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27A6 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCD8F | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0xCDA8 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2838 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCDB5 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x282D | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27F5 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x296F | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x2731 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2832 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2968 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x282A | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27BC | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2873 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2732 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x285C | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2827 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCDB1 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2710 | 0x0008 | 0x000b | 0x000c | 0x000d |
| 0x2781 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2845 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2743 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0xCD87 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0xCD8A | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27B7 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x285D | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCDA4 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2905 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2780 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2822 | 0x0008 | 0x0004 | 0x000f | 0x0001 |
| 0x27A9 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x284A | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x296D | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0xCDAD | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2828 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x284E | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x271A | 0x0014 | 0x0004 | 0x0013 | 0x0012 |
| 0x2836 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27F4 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27D9 | 0x0011 | 0x0010 | 0x0002 | 0x0001 |
| 0x2974 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x27DD | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2847 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27E4 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCDAB | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2815 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x275D | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x2972 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x2714 | 0x0008 | 0x000b | 0x000c | 0x000d |
| 0x2812 | 0x0008 | 0x000a | 0x000f | 0x000e |
| 0xCD90 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2841 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2783 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCDB2 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x272E | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27AD | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2786 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0xCDBA | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x280E | 0x0008 | 0x0004 | 0x000f | 0x0001 |
| 0x27BD | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCD8C | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0xCD86 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x286E | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCD9A | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x282F | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2846 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x283A | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2872 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2969 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0xCD93 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x285F | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x280C | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2851 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2753 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0xCDA5 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2711 | 0x0008 | 0x000b | 0x000c | 0x000d |
| 0x27B4 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x282C | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27D8 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2761 | 0x0008 | 0x0004 | 0x0002 | 0x000e |

### FARTTEXTEINDIVIDUELL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x0000 | kein passendes Fehlersymptom |
| 0x0001 | Signal oder Wert oberhalb Schwelle |
| 0x0002 | Signal oder Wert unterhalb Schwelle |
| 0x0004 | kein Signal oder Wert |
| 0x0008 | unplausibles Signal oder Wert |
| 0x0009 | Signal oder Wert unplausibel |
| 0x000a | kein Signal oder Wert |
| 0x000b | Leitungsunterbrechung |
| 0x000c | Kurzschluss nach Masse |
| 0x000d | Kurzschluss nach Ubat |
| 0x000e | Signal oder Wert oberhalb Schwelle |
| 0x000f | Signal oder Wert unterhalb Schwelle |
| 0x0010 | Sensor 1 |
| 0x0011 | Sensor 2 |
| 0x0012 | Spannung ueber Schwelle |
| 0x0013 | Spannung unter Schwelle |
| 0x0014 | ungueltige Spannung erkannt |
| 0xFFFF | unbekannte Fehlerart |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x2710 | Bremslichtschalter |
| 0x2711 | Charge Enable Control  |
| 0x2712 | Ladeleuchte  |
| 0x2713 | Elektroluefter Relais  |
| 0x2714 | Kuehlpumpe Notlaufeingang  |
| 0x2715 | Eingang MSA  |
| 0x2716 | Klemme 50  |
| 0x2717 | Ansteuerung Elektroluefter  |
| 0x2718 | Plausibilitaetsueberwachung fuer FGR-Funktion (WMOM_PT_ENB / ST_DRASY_PT) |
| 0x271A | CEC Proximity  |
| 0x271B | 12V Relais Ansteuerung  |
| 0x2725 | Steuergeraet interner Fehler -Analog Digital Wandler Fehler |
| 0x2726 | Steuergeraet interner Fehler -EEPROM Zugriff nicht moeglich |
| 0x2727 | Steuergeraet interner Fehler -Daten inkonsistent |
| 0x272E | Steuergeraet interner Fehler -Spannungsregler 1 Spannung ausserhalb gueltiger Bereich |
| 0x272F | Steuergeraet interner Fehler -Spannungsregler 2 Reglerfehler |
| 0x2731 | Steuergeraet interner Fehler -Spannungsregler 2 AUX Reglerfehler |
| 0x2742 | LIN BUS -Globaler Fehler Batteriesensor oder Wasserpumpe |
| 0x2743 | LIN BUS -Kommunikation zum Batteriesensor gestoert |
| 0x2744 | LIN BUS -Kommunikation zur Wasserpumpe gestoert |
| 0x2745 | LIN BUS -Kommunikation zur Wasserpumpe unplausibel |
| 0x274C | Intelligenter Batteriesensor -Kommunikation |
| 0x274D | Intelligenter Batteriesensor -Strommessung unplausibel |
| 0x274E | Intelligenter Batteriesensor -Firmware unplausibel |
| 0x274F | Intelligenter Batteriesensor -Systemfehler |
| 0x2750 | Intelligenter Batteriesensor -Temperaturmessung unplausibel |
| 0x2751 | Intelligenter Batteriesensor -Spannungsmessung unplausibel |
| 0x2752 | Intelligenter Batteriesensor -Wake Up Leitung Leitungsbruch |
| 0x2753 | Intelligenter Batteriesensor -Wake Up Leitung ueber oder unter Schwellwert |
| 0x275B | Kuehlmittelpumpe -Kommunikation |
| 0x275C | Kuehlmittelpumpe -Temperaturschwelle 1 ueberschritten |
| 0x275D | Kuehlmittelpumpe -Temperaturschwelle 2 ueberschritten |
| 0x275E | Kuehlmittelpumpe Kommunikation -Notlaufeingang Plausibilitaetsfehler |
| 0x275F | Kuehlmittelpumpe -Drehzahl ausserhalb Gueltigkeitsbereich |
| 0x2760 | Kuehlmittelpumpe -Trockenlauf |
| 0x2761 | Kuehlmittelpumpe -Ueberspannung |
| 0x2762 | Kuehlmittelpumpe -Ueberstrom |
| 0x2763 | Kuehlmittelpumpe -Uebertemperatur |
| 0x2764 | Kuehlmittelpumpe -Unterspannung |
| 0x2774 | Notlaufmanager -Abschaltung DCDC Wandler wegen Ueberstrom |
| 0x2775 | Notlaufmanager -Abschaltung DCDC Wandler wegen HW Fehler |
| 0x2776 | Notlaufmanager -DCDC Wandler Abschaltung wegen Uebertemperatur |
| 0x2777 | Notlaufmanager -DCDC Wandler Abschaltung wegen Spannungskriterium |
| 0x2779 | Notlaufmanager -Drehzahl der Elektromaschine hat Grenzwert ueberschritten |
| 0x2780 | Notlaufmanager -Hochvolt Batterie Service Request (Fehlerkategorie 3) |
| 0x2781 | Notlaufmanager -Hochvolt Batterie Anforderung schnelles Schuetze oeffnen (Fehlerkategorie 6) |
| 0x2782 | Notlaufmanager -Hochvolt Batterie Anforderung unmittelbares Schuetze oeffen (Fehlerkategorie 7) |
| 0x2783 | Notlaufmanager -Hochvolt Batterie Nullstromanforderung (Fehlerkategorie 5) |
| 0x2784 | Checkcontrol-Uebertemperatur Antrieb China |
| 0x2785 | Signalausfall-Moment und Betriebsartvorgabe E Maschine |
| 0x2786 | Notlaufmanager - Abschaltung wegen Fehlerbedingte Nullmomentenregelung |
| 0x2787 | Notlaufmanager - Abschaltung wegen Fehlerbedingter AKS |
| 0x2788 | Notlaufmanager - Abschaltung wegen Fehlerbedingter Freilauf |
| 0x27A6 | Betriebsstrategie -Begrenzung der Antriebsleistung Stufe 1 |
| 0x27A7 | Betriebsstrategie -Begrenzung der Antriebsleistung Stufe 2 |
| 0x27A8 | Betriebsstrategie -Begrenzung der Rekuperation |
| 0x27A9 | Bremspedal -Plausibilitaetsfehler |
| 0x27AA | Betriebsstrategie -Herstellen der Fahrbereitschaft wegen des gesteckten Ladekabels nicht moeglich |
| 0x27AB | Gaspedal und Bremspedalstellung -Plausibilitaetsfehler |
| 0x27AC | Betriebsstrategie -Herstellen der Fahrbereitschaft wegen des unplausiblen Ladekabelzustandes nur verzoegert moeglich |
| 0x27AD | BEV13 |
| 0x27AE | BEV13 |
| 0x27AF | BEV13 |
| 0x27B0 | BEV13 |
| 0x27B1 | Checkcontrol 174 -Getriebeposition P nur im Stillstand |
| 0x27B2 | Checkcontrol 175 -Getriebepostion P gestoert |
| 0x27B3 | Checkcontrol 203 -Getriebe in N Waschstrassenfunktion |
| 0x27B4 | Checkcontrol 220 -Erhoehte Batterieentladung |
| 0x27B5 | Checkcontrol 244 -Zum Gangeinlegen Bremse treten |
| 0x27B6 | Checkcontrol 250 -Gang ohne Bremse einlegebar |
| 0x27B7 | Checkcontrol 251 -Getriebeposition P wird eingelegt |
| 0x27B8 | Checkcontrol 252 -Gong bei ungenuegender P Betaetigung |
| 0x27B9 | Checkcontrol 394 -Waehlhebel gestoert |
| 0x27BA | Checkcontrol 557 -Fahrzeug gegen Wegrollen sichern |
| 0x27BB | Checkcontrol 565 -Getriebeposition P nur im Stillstand |
| 0x27BC | Checkcontrol 636 -Hochvoltsystem abgeschaltet |
| 0x27BD | Checkcontrol 802 -Ladekabel pruefen |
| 0x27BE | Checkcontrol 803 -Netzleistung zu gering |
| 0x27BF | Checkcontrol 804 -Laden nicht moeglich |
| 0x27C0 | Checkcontrol 809 -Zum Laden P einlegen |
| 0x27C1 | Checkcontrol - Ueberstrom Parkaktuator. P kann eventuell nicht mehr ausgelegt werden. |
| 0x27D8 | Fahrpedalmodul -ESM Plausibilitaets Fehler |
| 0x27D9 | Fahrpedalmodul -Pedalwertgeber Sensor Korrelationsfehler |
| 0x27DB | Gaspedal und Bremspedalstellung -Kompatibilitaetsfehler Notlauf |
| 0x27DC | Gaspedal und Bremspedalstellung -Kompatibilitaetsfehler Leistungseinschraenkung |
| 0x27DD | Fahrpedalmodul -Pedal klemmt |
| 0x27DE | Fahrpedalmodul -Pedalwertgeber 1 Analog Digital Wandler Fehler |
| 0x27E1 | Fahrpedalmodul -Pedalwertgeber 2 Analog Digital Wandler Test Fehler |
| 0x27E2 | Fahrpedalmodul -Pedalwertgeber 2 Analog Digital Wandler Fehler |
| 0x27E3 | Elektrische Unterdruckpumpe -Blockiert |
| 0x27E4 | Elektrische Unterdruckpumpe -Drucksensor Fehler |
| 0x27E5 | Elektrische Unterdruckpumpe -Leckage erkannt |
| 0x27E6 | Elektrische Unterdruckpumpe -Laufzeit Fehler |
| 0x27E7 | Elektrische Unterdruckpumpe - Ansteuerung seitens AE nicht moeglich elektrischer Fehler oder Montagemode aktiv |
| 0x27F1 | Interne Getriebeueberwachung -Parkposition aktuell nicht detektierbar |
| 0x27F2 | Interne Getriebeueberwachung -Parkposition aktuell eingelegt aktuell kein Fahrerwunsch Parken vorhanden |
| 0x27F3 | Interne Getriebeueberwachung -Parkposition aktuell nicht eingelegt aktuell Fahrerwunsch Parken vorhanden |
| 0x27F4 | Interner Fehler ShiftbyWire Ueberwachung -Geschwindigkeit unplausibel |
| 0x27F5 | Interner Fehler ShiftbyWire Ueberwachung -Falsche Anweisung |
| 0x27F6 | Interner Fehler ShiftbyWire Ueberwachung -Falsche Positionsanzeige |
| 0x27F7 | - |
| 0x280A | Powermanagement -Niedervoltbatterie defekt waehrend Transport |
| 0x280B | Powermanagement -Niedervoltbatterie entladen wahrend Transport |
| 0x280C | Powermanagement -Niedervoltbatterie Bordnetzinstabilitaet |
| 0x280D | Powermanagement -Ruhestromverletzung |
| 0x280E | Powermanagement -Niedervoltbatterie tiefentlanden |
| 0x280F | Powermanagement -Niedervolt Bordnetz Ueberspannung |
| 0x2810 | Powermanagement -Niedervolt Bordnetz Unterspannung |
| 0x2811 | Powermanagement -elektrische Verbraucher eingeschraenkt |
| 0x2812 | Spannungsversorgung -Wert unplausibel |
| 0x2815 | Niedervoltbatterie defekt |
| 0x2816 | Niedervoltbatterie tiefentlanden |
| 0x2817 | Powermanagement - Niedervoltbatterie wird nicht geladen |
| 0x2820 | Herstellen Fahrbereitschaft nicht moeglich wegen Temperatur HV-Batterie zu hoch |
| 0x2821 | Hochvoltbatterie - Temperatur verlaesst Normalbereich |
| 0x2822 | Hochvoltbatterie - Temperatur wieder im Normalbereich |
| 0x2823 | Lademanagement -AC Spannung fehlt nach Ladebeginn |
| 0x2824 | Lademanagement -AC Spannung dauerhaft instabil |
| 0x2825 | Lademanagement -SLE/KLE in Failsafe |
| 0x2826 | Lademanagement -Ladefehler |
| 0x2827 | Lademanagement -Ladeziel nicht erreichbar (SLE Leistung zu gering) |
| 0x2828 | Lademanagement -Ladeziel nicht erreichbar (Entladeschutz NV BN) |
| 0x2829 | Lademanagement -Ladestoerung |
| 0x282A | Lademanagement -Pilotsignal ungueltig |
| 0x282B | Lademanagement -Vorkonditionierung nicht moglich |
| 0x282C | HV Powermanagement -HV Power Down aufgrund niedrigem Ladezustand HV Batterie |
| 0x282D | HV Batterie -Isoaltionsfehler |
| 0x282E | HV Batterie -Isolationswarnung |
| 0x282F | HV Zwischenkreisentladung -HV Zwischenkreis nicht spannungsfrei trotz Anforderung |
| 0x2830 | HV Powermanagement -keine HV Freigabe trotz Anforderung |
| 0x2831 | HV Powermanagement -Interlock unterbrochen |
| 0x2832 | HV Batterie -einfacher Schuetzkleber |
| 0x2833 | Signalausfall -HV Powermanagement |
| 0x2834 | Signalausfall -Antriebselektronik |
| 0x2835 | Signalausfall -HV Batterie |
| 0x2836 | Lademanagement -Zustand Ladestecker unbekannt |
| 0x2837 | Lademanagement -Pilotsignal ungueltig ausserhalb Ladebereitschaft |
| 0x2838 | AEP -12 V Batterie wird nicht geladen |
| 0x2839 | AEP -12 V Batterie wird nicht geladen |
| 0x283A | AEP -12 V Batterie stark entladen |
| 0x283B | Lademanagement - AC-Spannung fehlt. HV-Speicher wird nicht geladen |
| 0x283C | Ebene 2 Ueberwachung -Kommunikation PIC Watchdog Falsche Anfrage |
| 0x2840 | Ebene 2 Ueberwachung -Code Pruefsummen Fehler |
| 0x2841 | Ebene 2 Ueberwachung -Daten Pruefsummen Fehler |
| 0x2842 | Ebene 2 Ueberwachung -RAM Pruefsummen Fehler |
| 0x2843 | Ebene 2 Ueberwachung -Kein Clock vom Watchdog |
| 0x2844 | Ebene 2 Ueberwachung -Programm Ablauf Fehler |
| 0x2845 | Steuergeraet interner Fehler -Referenzspannung zu hoch |
| 0x2847 | Ebene 2 Ueberwachung -Anfrage Fehler |
| 0x2848 | Ebene 2 Ueberwachung -Fehler Sicherheitskonzept |
| 0x2849 | Ebene 2 Ueberwachung -Unplausibilitaet Bremsdruck |
| 0x284A | Ebene 2 Ueberwachung - Double Storage Error |
| 0x284B | Ebene 2 Ueberwachung -Fehler Sollmomentenueberwachung |
| 0x284C | Ebene 2 Ueberwachung -Fehler Stillstandsueberwachung |
| 0x284D | Ebene 2 Ueberwachung -Fehler Betriebsartenueberwachung |
| 0x284E | Ebene 2 Ueberwachung -Fehler Beschleunigungsueberwachung |
| 0x284F | Ebene 2 Ueberwachung -Fehler Fahrtrichtungsueberwachung |
| 0x2850 | Ebene 2 Ueberwachung Fahreranwesenheit - Fehler Solldrehrichtung |
| 0x2851 | Ebene 2 Ueberwachung Fahreranwesenheit - Fehler Herstellung Fahrbereitschaft |
| 0x2852 | Ebene2-Ueberwachung: Fehler Istmoment der AE |
| 0x2855 | Hochvoltbatterie - Temperatur kritischer Wert |
| 0x2856 | Steuergeraet interner Fehler - stuck relay error |
| 0x2857 | Steuergeraet interner Fehler - main relay dropout error |
| 0x2858 | Steuergeraet interner Fehler - ESM memory integrity error (All Code) |
| 0x2859 | Steuergeraet interner Fehler - ESM memory integrity error (All Data) |
| 0x285A | Steuergeraet interner Fehler - ESM memory integrity error (All Ram) |
| 0x285B | Steuergeraet interner Fehler - ESM L2 trip error |
| 0x285C | Steuergeraet interner Fehler - ESM L3 trip error |
| 0x285D | Steuergeraet interner Fehler - ESM Monitoring Module reset timeout |
| 0x285E | Steuergeraet interner Fehler - ESM trip error |
| 0x285F | Steuergeraet interner Fehler - ESM power off CAN shutdown fault |
| 0x2860 | Steuergeraet interner Fehler - ESM power off reset fault |
| 0x2861 | Steuergeraet interner Fehler - ESM L3 Shutoff path test error |
| 0x2862 | Steuergeraet interner Fehler - ESM memory integrity error (Ram Parity error) |
| 0x286E | Interner Fehler EWS-Daten: Pruefsummenfehler |
| 0x286F | Botschaft EWS-DME fehlerhaft: Zeitueberschreitung |
| 0x2870 | Botschaft EWS-DME fehlerhaft: Framefehler |
| 0x2871 | EWS Manipulationsschutz: kein Startwert programmiert |
| 0x2872 | EWS Manipulationsschutz: erwartete Antwort unplausibel |
| 0x2873 | Botschaft EWS-DME fehlerhaft: Framefehler |
| 0x2874 | Interner Fehler EWS-Daten: Schreibfehler Secret Key |
| 0x2904 | Montagemodus aktiv |
| 0x2905 | Energiesparmode aktiv |
| 0x290F | Fehlerort 1 fur FSP Testfunktion Layer |
| 0x2910 | Fehlerort 2 fur FSP Testfunktion Layer |
| 0x2968 | N/A |
| 0x2969 | N/A |
| 0x296A | N/A |
| 0x296B | N/A |
| 0x296C | N/A |
| 0x296D | N/A |
| 0x296E | N/A |
| 0x296F | N/A |
| 0x2970 | N/A |
| 0x2971 | N/A |
| 0x2972 | N/A |
| 0x2973 | N/A |
| 0x2974 | N/A |
| 0x2975 | N/A |
| 0x2976 | Elektrische Unterdruckpumpe -Elektrischer Fehler |
| 0xCD86 | A_CAN -CAN Baustein Abschaltung |
| 0xCD87 | PT_CAN -CAN Baustein Abschaltung |
| 0xCD88 | PT_CAN -Kommunikationsstoerung Botschaft (Aussentemperatur/Relativzeit 0x310 Sender Kombi) |
| 0xCD89 | PT_CAN -Kommunikationsstoerung Botschaft (Anforderung Radmomente Antriebsstrang 0xBF Sender DSC) |
| 0xCD8A | PT_CAN -Kommunikationsstoerung Botschaft (Bedienung Getriebewahlschalter 0x198 Sender GWS) |
| 0xCD8B | PT_CAN -Kommunikationsstoerung Botschaft (Konfiguration Laden Hochvoltspeicher 0x340 Sender CIC) |
| 0xCD8C | PT_CAN -Kommunikationsstoerung Botschaft (Steuerung Crashabschaltung EKP 0x135 Sender MRSZ) |
| 0xCD8D | PT_CAN -Kommunikationsstoerung Botschaft (Drehmomentanforderung DSC 0xB6 Sender DSC) |
| 0xCD8E | PT_CAN -Kommunikationsstoerung Botschaft (Nachlaufzeit Stromversorgung 0x3BE Sender CAS) |
| 0xCD8F | PT_CAN -Kommunikationsstoerung Botschaft (Geschwindigkeit 0x1A0 Sender DSC) |
| 0xCD90 | PT_CAN -Kommunikationsstoerung Botschaft (Radgeschwindigkeit 0xCE Sender DSC) |
| 0xCD91 | PT_CAN -Kommunikationsstoerung Botschaft (Kilometerstand 0x330 Sender Kombi) |
| 0xCD92 | PT_CAN -Kommunikationsstoerung Botschaft (Klemmenstatus 0x130 Sender CAS) |
| 0xCD93 | PT_CAN -Kommunikationsstoerung Botschaft (Lenkradwinkel 0xC4 Sender DSC) |
| 0xCD94 | PT_CAN -Kommunikationsstoerung Botschaft (Status Fahrererkennung 0x2F1 Sender MRSZ) |
| 0xCD95 | PT_CAN -Kommunikationsstoerung Botschaft (Status Tuersensoren Abgesichert BN2000 0x1E1 Sender FRMFA) |
| 0xCD96 | PT_CAN -Kommunikationsstoerung Botschaft (Status DSC 0x19E Sender DSC) |
| 0xCD97 | A_CAN -Kommunikationsstoerung Botschaft (Status Hochvoltspeicher 2 0x112 Sender SME) |
| 0xCD98 | PT_CAN -Kommunikationsstoerung Botschaft (ZV und Klappenzustand 0x2FC Sender CAS) |
| 0xCD99 | PT_CAN -Kommunikationsstoerung Botschaft (Uhrzeit/Datum 0x2F8 Sender Kombi) |
| 0xCD9A | PT_CAN -Kommunikationsstoerung Botschaft (Waermestrom Klima 0x1B5 Sender IHKA) |
| 0xCD9B | PT_CAN -Kommunikationsstoerung Botschaft (Bedienung Taster MSA 0x195 Sender IHKA) |
| 0xCD9D | PT_CAN -Kommunikationsstoerung Botschaft (Status Anhaenger 0x2E4 Sender AHM) |
| 0xCD9E | PT_CAN -Kommunikationsstoerung Botschaft (Lenkradwinkel Oben 0xC8 Sender SZL_LWS) |
| 0xCD9F | PT_CAN -Kommunikationsstoerung Botschaft (Codierung Powermanagement 0x395 Sender CAS) |
| 0xCDA0 | PT_CAN -Kommunikationsstoerung Botschaft (Status Teleservice 0x436 Sender COMBOXMAIN) |
| 0xCDA1 | A_CAN -Kommunikationsstoerung Botschaft (Ist Daten DC/DC Wandler Ladeelektronik Langzeit 0x2C8 Sender AE) |
| 0xCDA2 | A_CAN -Kommunikationsstoerung Botschaft (Ist Daten Ladeelektronik 0x108 Sender AE) |
| 0xCDA3 | A_CAN -Kommunikationsstoerung Botschaft (Ist Daten E Motor Traktion 0x100 Sender AE) |
| 0xCDA4 | A_CAN -Kommunikationsstoerung Botschaft (Ist Daten E Motor Traktion Langzeit 0x2C9 Sender AE) |
| 0xCDA5 | A_CAN -Kommunikationsstoerung Botschaft (Ist Daten Parksperre 0x35B Sender AE) |
| 0xCDA6 | A_CAN -Kommunikationsstoerung Botschaft (Daten Bremssystem Motorsteuerung 0x206 Sender AE) |
| 0xCDA7 | A_CAN -Kommunikationsstoerung Botschaft (Daten Antrieb Elektrisch 0x32F Sender AE) |
| 0xCDA8 | A_CAN -Kommunikationsstoerung Botschaft (Daten Hochvoltspeicher 0x431 Sender SME) |
| 0xCDA9 | A_CAN -Kommunikationsstoerung Botschaft (Energieverbrauch Ladeelektronik 0x354 Sender AE) |
| 0xCDAA | A_CAN -Kommunikationsstoerung Botschaft (Fehlerstatus Ladeelektronik 0x359 Sender AE) |
| 0xCDAB | A_CAN -Kommunikationsstoerung Botschaft (Identifikation Hochvoltspeicher 0x363 Sender SME) |
| 0xCDAC | A_CAN -Kommunikationsstoerung Botschaft (Begrenzung Ladung Entladung Hochvoltspeicher 0x2F5 Sender SME) |
| 0xCDAD | A_CAN -Kommunikationsstoerung Botschaft (Begrenzung Ladeelektronik 0x1F5 Sender AE) |
| 0xCDAE | A_CAN -Kommunikationsstoerung Botschaft (Modus Spannungsgesteuert 0x432 Sender SME) |
| 0xCDB1 | A_CAN -Kommunikationsstoerung Botschaft (Status Ladung Hochvoltspeicher 2 0x430 Sender SME) |
| 0xCDB2 | A_CAN -Kommunikationsstoerung Botschaft (Status Ladung Hochvoltspeicher 3 0x3EB Sender SME) |
| 0xCDB3 | A_CAN -Kommunikationsstoerung Botschaft (Status DCDC 0x429 Sender AE) |
| 0xCDB5 | A_CAN -Kommunikationsstoerung Botschaft (Status Heizung Hochvoltspeicher 0x2FF Sender SME) |
| 0xCDB6 | A_CAN -Kommunikationsstoerung Botschaft (Status Hochvoltspeicher 1 0x1AF Sender SME) |
| 0xCDB7 | A_CAN -Kommunikationsstoerung Botschaft (Status Begrenzung E Motor Traktion 0x2E8 Sender AE) |
| 0xCDB9 | A_CAN -Kommunikationsstoerung Botschaft (Status Ladeschnittstelle 0x3B4 Sender KLE) |
| 0xCDBA | A_CAN -Kommunikationsstoerung Botschaft (Ist Daten Komfort Ladeelektronik Langzeit 0x211 Sender KLE) |
| 0xCDC2 | PT_CAN -Kommunikationsstoerung Botschaft (Dienste 0x5F8 Sender IHx) |
| 0xCDC3 | PT_CAN -Kommunikationsstoerung Botschaft (Dienste 0x5E0 Sender KOMBI) |
| 0xFFFF | Unknown error location |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | ja |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### IUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x2725 | 52 | 51 | 48 | 47 |
| 0xCD89 | 52 | 45 | 38 | 44 |
| 0xCDA1 | 52 | 45 | 38 | 44 |
| 0xCDBA | 52 | 45 | 38 | 44 |
| 0xCDA2 | 52 | 45 | 38 | 44 |
| 0xCDA3 | 52 | 45 | 38 | 44 |
| 0xCDA4 | 52 | 45 | 38 | 44 |
| 0xCDA5 | 52 | 45 | 38 | 44 |
| 0xCD86 | 52 | 45 | 38 | 44 |
| 0x2710 | 52 | 51 | 48 | 47 |
| 0x2711 | 52 | 51 | 48 | 47 |
| 0x2712 | 52 | 51 | 48 | 47 |
| 0x2713 | 52 | 6 | 5 | 47 |
| 0x2714 | 52 | 51 | 48 | 47 |
| 0x2715 | 52 | 51 | 48 | 47 |
| 0x271B | 52 | 51 | 48 | 47 |
| 0x2716 | 52 | 51 | 48 | 47 |
| 0xCD88 | 52 | 45 | 38 | 44 |
| 0x2717 | 52 | 6 | 5 | 47 |
| 0x2812 | 52 | 51 | 48 | 47 |
| 0xCD8A | 52 | 45 | 38 | 44 |
| 0xCD9B | 52 | 45 | 38 | 44 |
| 0x280A | 45 | 9 | 29 | 30 |
| 0x280B | 45 | 9 | 29 | 30 |
| 0x280C | 45 | 9 | 29 | 30 |
| 0x2838 | 45 | 9 | 29 | 30 |
| 0x2839 | 45 | 9 | 29 | 30 |
| 0x2817 | 45 | 9 | 29 | 30 |
| 0x280D | 45 | 9 | 29 | 30 |
| 0x280E | 45 | 9 | 29 | 30 |
| 0x280F | 45 | 9 | 29 | 30 |
| 0x2810 | 45 | 9 | 29 | 30 |
| 0x2811 | 45 | 9 | 29 | 30 |
| 0x283A | 45 | 9 | 29 | 30 |
| 0x27A9 | 52 | 51 | 48 | 47 |
| 0x2815 | 52 | 51 | 48 | 47 |
| 0x2816 | 52 | 51 | 48 | 47 |
| 0x27B1 | 52 | 51 | 48 | 47 |
| 0x27B2 | 52 | 51 | 48 | 47 |
| 0x27B3 | 52 | 51 | 48 | 47 |
| 0x27B4 | 52 | 51 | 48 | 47 |
| 0x27B5 | 52 | 51 | 48 | 47 |
| 0x27B6 | 52 | 51 | 48 | 47 |
| 0x27B7 | 52 | 51 | 48 | 47 |
| 0x27B8 | 52 | 51 | 48 | 47 |
| 0x27B9 | 52 | 51 | 48 | 47 |
| 0x27BA | 52 | 51 | 48 | 47 |
| 0x27BB | 52 | 51 | 48 | 47 |
| 0x27BC | 52 | 27 | 28 | 46 |
| 0x27BD | 52 | 18 | 19 | 26 |
| 0x27BE | 52 | 18 | 19 | 26 |
| 0x27BF | 52 | 18 | 19 | 26 |
| 0x27C0 | 52 | 18 | 19 | 26 |
| 0x2784 | 52 | 51 | 48 | 47 |
| 0x27C1 | 52 | 51 | 48 | 47 |
| 0x2774 | 52 | 51 | 48 | 47 |
| 0x2775 | 52 | 51 | 48 | 47 |
| 0x2776 | 52 | 51 | 48 | 47 |
| 0x2777 | 52 | 51 | 48 | 47 |
| 0x2968 | 52 | 51 | 48 | 47 |
| 0x27A6 | 52 | 51 | 48 | 47 |
| 0x27A7 | 52 | 51 | 48 | 47 |
| 0x27AD | 52 | 51 | 48 | 47 |
| 0x2969 | 52 | 51 | 48 | 47 |
| 0x27F7 | 52 | 51 | 48 | 47 |
| 0x2976 | 52 | 51 | 48 | 47 |
| 0x27E3 | 52 | 51 | 48 | 47 |
| 0x27E4 | 52 | 51 | 48 | 47 |
| 0x27E7 | 52 | 51 | 48 | 47 |
| 0x27E5 | 52 | 51 | 48 | 47 |
| 0x27E6 | 52 | 51 | 48 | 47 |
| 0x2786 | 52 | 51 | 48 | 47 |
| 0x2787 | 52 | 51 | 48 | 47 |
| 0x2788 | 52 | 51 | 48 | 47 |
| 0x2779 | 52 | 51 | 48 | 47 |
| 0x275B | 52 | 17 | 16 | 42 |
| 0x275C | 52 | 17 | 16 | 42 |
| 0x275D | 52 | 17 | 16 | 42 |
| 0x275E | 52 | 17 | 16 | 42 |
| 0x275F | 52 | 17 | 16 | 13 |
| 0x2760 | 52 | 17 | 16 | 13 |
| 0x2761 | 52 | 13 | 50 | 42 |
| 0x2762 | 52 | 13 | 50 | 42 |
| 0x2763 | 52 | 13 | 50 | 42 |
| 0x2764 | 52 | 13 | 50 | 42 |
| 0x27AB | 52 | 51 | 48 | 47 |
| 0x2820 | 52 | 18 | 19 | 26 |
| 0x27AA | 52 | 51 | 48 | 47 |
| 0x27AC | 52 | 51 | 48 | 47 |
| 0x282C | 52 | 27 | 28 | 46 |
| 0x282D | 52 | 27 | 28 | 46 |
| 0x282E | 52 | 27 | 28 | 46 |
| 0x2855 | 52 | 18 | 19 | 26 |
| 0x2821 | 52 | 18 | 19 | 26 |
| 0x2822 | 52 | 18 | 19 | 26 |
| 0x282F | 52 | 27 | 28 | 46 |
| 0x2830 | 52 | 27 | 28 | 46 |
| 0x274C | 45 | 9 | 29 | 30 |
| 0x274D | 45 | 9 | 29 | 30 |
| 0x274E | 45 | 9 | 29 | 30 |
| 0x274F | 45 | 9 | 29 | 30 |
| 0x2750 | 45 | 9 | 29 | 30 |
| 0x2751 | 45 | 9 | 29 | 30 |
| 0x2752 | 45 | 9 | 29 | 30 |
| 0x2753 | 45 | 9 | 29 | 30 |
| 0x2831 | 52 | 27 | 28 | 46 |
| 0x283B | 52 | 18 | 19 | 26 |
| 0x2823 | 52 | 18 | 19 | 26 |
| 0x2824 | 52 | 18 | 19 | 26 |
| 0x2825 | 52 | 18 | 19 | 26 |
| 0x2826 | 52 | 18 | 19 | 26 |
| 0x2827 | 52 | 18 | 19 | 26 |
| 0x2828 | 52 | 18 | 19 | 26 |
| 0x2836 | 52 | 18 | 19 | 26 |
| 0x2829 | 52 | 18 | 19 | 26 |
| 0x290F | 52 | 51 | 48 | 47 |
| 0x2910 | 52 | 51 | 48 | 47 |
| 0x27AE | 52 | 51 | 48 | 47 |
| 0x2970 | 52 | 51 | 48 | 47 |
| 0x296A | 52 | 51 | 48 | 47 |
| 0x296B | 52 | 51 | 48 | 47 |
| 0x296E | 52 | 51 | 48 | 47 |
| 0x296F | 52 | 51 | 48 | 47 |
| 0x296C | 52 | 51 | 48 | 47 |
| 0x296D | 52 | 51 | 48 | 47 |
| 0x2971 | 52 | 51 | 48 | 47 |
| 0x282A | 52 | 18 | 19 | 26 |
| 0x2837 | 52 | 18 | 19 | 26 |
| 0x27A8 | 52 | 51 | 48 | 47 |
| 0x27AF | 52 | 51 | 48 | 47 |
| 0x2832 | 52 | 27 | 28 | 46 |
| 0x2785 | 52 | 51 | 48 | 47 |
| 0x2833 | 52 | 27 | 28 | 32 |
| 0x2834 | 52 | 27 | 28 | 32 |
| 0x2835 | 52 | 27 | 28 | 32 |
| 0x2780 | 52 | 51 | 48 | 47 |
| 0x2783 | 52 | 51 | 48 | 47 |
| 0x2781 | 52 | 51 | 48 | 47 |
| 0x2782 | 52 | 51 | 48 | 47 |
| 0x2972 | 52 | 51 | 48 | 47 |
| 0x27B0 | 52 | 51 | 48 | 47 |
| 0x27F1 | 52 | 51 | 48 | 47 |
| 0x27F2 | 52 | 51 | 48 | 47 |
| 0x27F3 | 52 | 51 | 48 | 47 |
| 0x27F4 | 52 | 51 | 48 | 47 |
| 0x27F5 | 52 | 51 | 48 | 47 |
| 0x27F6 | 52 | 51 | 48 | 47 |
| 0x282B | 52 | 18 | 19 | 26 |
| 0x2973 | 52 | 51 | 48 | 47 |
| 0x2974 | 52 | 51 | 48 | 47 |
| 0x2975 | 52 | 51 | 48 | 47 |
| 0xCD9F | 52 | 45 | 38 | 44 |
| 0xCD8C | 52 | 45 | 38 | 44 |
| 0x2856 | 52 | 51 | 48 | 47 |
| 0xCD8D | 52 | 45 | 38 | 44 |
| 0x2857 | 52 | 51 | 48 | 47 |
| 0xCDA6 | 52 | 45 | 38 | 44 |
| 0xCDA7 | 52 | 45 | 38 | 44 |
| 0xCDA8 | 52 | 45 | 38 | 44 |
| 0x2905 | 52 | 51 | 48 | 47 |
| 0xCDA9 | 52 | 45 | 38 | 44 |
| 0xCDAA | 52 | 45 | 38 | 44 |
| 0x283C | 52 | 51 | 48 | 47 |
| 0x284A | 52 | 51 | 48 | 47 |
| 0x2858 | 52 | 51 | 48 | 47 |
| 0x2859 | 52 | 51 | 48 | 47 |
| 0x285A | 52 | 51 | 48 | 47 |
| 0x2840 | 52 | 51 | 48 | 47 |
| 0x2841 | 52 | 51 | 48 | 47 |
| 0x2842 | 52 | 51 | 48 | 47 |
| 0x285B | 52 | 51 | 48 | 47 |
| 0x285C | 52 | 51 | 48 | 47 |
| 0x285D | 52 | 51 | 48 | 47 |
| 0x285E | 52 | 51 | 48 | 47 |
| 0x2843 | 52 | 51 | 48 | 47 |
| 0x27D8 | 52 | 51 | 48 | 47 |
| 0x2844 | 52 | 51 | 48 | 47 |
| 0x285F | 52 | 51 | 48 | 47 |
| 0x2860 | 52 | 51 | 48 | 47 |
| 0x2845 | 52 | 51 | 48 | 47 |
| 0x2847 | 52 | 51 | 48 | 47 |
| 0x2861 | 52 | 51 | 48 | 47 |
| 0x2848 | 52 | 51 | 48 | 47 |
| 0x2849 | 52 | 51 | 48 | 47 |
| 0x286E | 52 | 51 | 48 | 47 |
| 0x286F | 52 | 51 | 48 | 47 |
| 0x2870 | 52 | 51 | 48 | 47 |
| 0x2871 | 52 | 51 | 48 | 47 |
| 0x2872 | 52 | 51 | 48 | 47 |
| 0x2873 | 52 | 51 | 48 | 47 |
| 0x2874 | 52 | 51 | 48 | 47 |
| 0xCD8E | 52 | 45 | 38 | 44 |
| 0xCD8F | 52 | 45 | 38 | 44 |
| 0xCD90 | 52 | 45 | 38 | 44 |
| 0x27E1 | 52 | 51 | 48 | 47 |
| 0xCDAB | 52 | 45 | 38 | 44 |
| 0xCD91 | 52 | 45 | 38 | 44 |
| 0xCD92 | 52 | 45 | 38 | 44 |
| 0x2718 | 52 | 45 | 38 | 44 |
| 0xCD93 | 52 | 45 | 38 | 44 |
| 0xCD9E | 52 | 45 | 38 | 44 |
| 0xCDAC | 52 | 45 | 38 | 44 |
| 0xCDAD | 52 | 45 | 38 | 44 |
| 0x2742 | 52 | 51 | 48 | 47 |
| 0x2743 | 45 | 9 | 29 | 30 |
| 0x2744 | 52 | 51 | 48 | 47 |
| 0x2745 | 52 | 51 | 48 | 47 |
| 0x2862 | 52 | 51 | 48 | 47 |
| 0xCDAE | 52 | 45 | 38 | 44 |
| 0x2904 | 52 | 51 | 48 | 47 |
| 0x27D9 | 52 | 51 | 48 | 47 |
| 0x27DB | 52 | 51 | 48 | 47 |
| 0x27DC | 52 | 51 | 48 | 47 |
| 0x27DD | 52 | 51 | 48 | 47 |
| 0x27DE | 52 | 51 | 48 | 47 |
| 0x27E2 | 52 | 51 | 48 | 47 |
| 0x271A | 52 | 51 | 48 | 47 |
| 0xCD87 | 52 | 45 | 38 | 44 |
| 0x2726 | 52 | 51 | 48 | 47 |
| 0x2727 | 52 | 51 | 48 | 47 |
| 0xCD9D | 52 | 45 | 38 | 44 |
| 0xCD96 | 52 | 45 | 38 | 44 |
| 0xCD95 | 52 | 45 | 38 | 44 |
| 0xCD97 | 52 | 45 | 38 | 44 |
| 0xCD98 | 52 | 45 | 38 | 44 |
| 0xCDB9 | 52 | 45 | 38 | 44 |
| 0xCDB1 | 52 | 45 | 38 | 44 |
| 0xCDB2 | 52 | 45 | 38 | 44 |
| 0xCDB3 | 52 | 45 | 38 | 44 |
| 0xCD94 | 52 | 45 | 38 | 44 |
| 0xCDB5 | 52 | 45 | 38 | 44 |
| 0xCDB6 | 52 | 45 | 38 | 44 |
| 0xCDB7 | 52 | 45 | 38 | 44 |
| 0xCDA0 | 52 | 45 | 38 | 44 |
| 0xCD8B | 52 | 45 | 38 | 44 |
| 0xCDC2 | 52 | 45 | 38 | 44 |
| 0xCDC3 | 52 | 45 | 38 | 44 |
| 0x284E | 52 | 51 | 48 | 47 |
| 0x284D | 52 | 51 | 48 | 47 |
| 0x284B | 52 | 51 | 48 | 47 |
| 0x284C | 52 | 51 | 48 | 47 |
| 0x2852 | 52 | 51 | 48 | 47 |
| 0x2850 | 52 | 51 | 48 | 47 |
| 0x2851 | 52 | 51 | 48 | 47 |
| 0x284F | 52 | 51 | 48 | 47 |
| 0xCD99 | 52 | 45 | 38 | 44 |
| 0x272E | 52 | 51 | 48 | 47 |
| 0x272F | 52 | 51 | 48 | 47 |
| 0x2731 | 52 | 51 | 48 | 47 |
| 0xCD9A | 52 | 45 | 38 | 44 |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | Auslastung DCDC-Wandler | - | high | unsigned char | - | 100 | 256 | 0 |
| 2 | Ist_Strom_Hochvoltspeicher | A | high | signed int | - | 1 | 10 | 0 |
| 3 | Ist_Spannung_Hochvoltspeicher | V | high | unsigned int | - | 1 | 10 | 0 |
| 4 | Ladezustand_Hochvoltspeicher | % | high | unsigned int | - | 1 | 10 | 0 |
| 5 | Hardwarestatus E-Luefter | % | high | unsigned char | - | 100 | 256 | 0 |
| 6 | Batterie Spannung eDME | V | high | signed int | - | 1 | 128 | 0 |
| 7 | Status Zuendung | - | high | unsigned long | - | 1 | 1 | 0 |
| 8 | Kilometer | Km | high | unsigned long | - | 1 | 1 | 0 |
| 9 | Batteriestrom vom IBS | A | high | unsigned int | - | 1 | 12.5 | -200 |
| 10 | Ist_Strom_Hochspannung_Zwischenkreis_E-Motor_Traktion | A | high | signed int | - | 1 | 4 | 0 |
| 11 | HV-Strom DCDC-Wandler | A | high | signed int | - | 1 | 10 | 0 |
| 12 | Ist-Strom Ladegeraet | A | high | signed int | - | 1 | 10 | 0 |
| 13 | Strom elektr. Wasserpumpe | A | high | signed int | - | 1 | 10 | 0 |
| 14 | Ist_Drehmoment_E-Motor_Traktion | Nm | high | signed int | - | 1 | 10 | 0 |
| 15 | Ist_Drehzahl_E-Motor_Traktion | 1/min | high | signed int | - | 1 | 1 | 0 |
| 16 | Istdrehzahl elektr. Wasserpumpe | rpm | high | unsigned char | - | 1 | 1 | 0 |
| 17 | Sollwert zum Ansteuern der EWP | rpm | high | unsigned char | - | 1 | 1 | 0 |
| 18 | Zustand Lademanager | HEX | high | signed long | - | 1 | 1 | 0 |
| 19 | letzte Uebergaenge Lademanager | HEX | high | signed long | - | 1 | 1 | 0 |
| 20 | Pedal Position | % | high | unsigned char | - | 1 | 128 | 0 |
| 21 | Raw information signal from Pedal track 1 | cnt | high | signed int | - | 1 | 1 | 0 |
| 22 | Raw information signal from Pedal track 2 | cnt | high | signed int | - | 1 | 1 | 0 |
| 23 | Q_iruhe1 | Ah | high | unsigned int | - | 18 | 989 | 0 |
| 24 | ENV_V_VEH | km/h | high | unsigned int | - | 1 | 64 | 0 |
| 25 | Fehlerstatus DCDC-Wandler | enum | high | signed int | - | 1 | 1 | 0 |
| 26 | Status Vorkonditionierung | - | high | unsigned char | - | 1 | 1 | 0 |
| 27 | Fehler HV-System | HEX | high | signed long | - | 1 | 1 | 0 |
| 28 | Status HV-System | - | high | unsigned char | - | 1 | 1 | 0 |
| 29 | LIN_ERR_ST_BYTE_02_IBS_LIN LIN ERR_ST_IBS_LIN | - | high | unsigned char | - | 1 | 1 | 0 |
| 30 | LIN_ERR_ST_BYTE_03_IBS_LIN LIN ERR_ST_IBS_LIN | - | high | unsigned char | - | 1 | 1 | 0 |
| 31 | ENV_ST_IO1_OUT | - | high | unsigned int | - | 1 | 1 | 0 |
| 32 | Status Signalfehler HVPM | - | high | unsigned long | - | 1 | 1 | 0 |
| 33 | STAT_SV_REG2 | - | high | unsigned char | - | 1 | 1 | 0 |
| 34 | T2histshort | min | high | unsigned char | - | 224 | 15 | 0 |
| 35 | T3histshort | min | high | unsigned char | - | 224 | 15 | 0 |
| 36 | T4histshort | min | high | unsigned char | - | 224 | 15 | 0 |
| 37 | Ist_Temperatur_Hochvoltspeicher | grad | high | signed int | - | 1 | 10 | 0 |
| 38 | Batterietemperatur vom IBS gemessen | grad | high | signed int | - | 1 | 10 | 0 |
| 39 | Ist_Temperatur_DC/DC_Wandler | grad | high | signed int | - | 1 | 10 | 0 |
| 40 | Ist_Temperatur_E-Motor_1 | grad | high | signed int | - | 1 | 100 | 0 |
| 41 | Ist_Temperatur_Ladeelektronik | grad | high | signed int | - | 1 | 10 | 0 |
| 42 | Temperatur elektr. Wasserpumpe | grad | high | signed int | - | 1 | 100 | 0 |
| 43 | T_MOT | grad | high | signed int | - | 1 | 100 | 0 |
| 44 | Aussentemperatur | grad | high | signed int | - | 1 | 10 | 0 |
| 45 | Batteriespannung vom IBS | V | high | unsigned int | - | 1 | 4000 | 6 |
| 46 | Ist_Spannung_Hochspannung_Zwischenkreis_E-Motor_Traktion | V | high | unsigned int | - | 1 | 10 | 0 |
| 47 | Ist_Spannung_DC/DC_Wandler_Hochspannung | V | high | unsigned int | - | 1 | 50 | 0 |
| 48 | Ist_Spannung_Niederspannung_DC/DC_Wandler | V | high | unsigned int | - | 1 | 10 | 0 |
| 49 | Vorgabe Sollspannung | V | high | unsigned int | - | 1 | 10 | 0 |
| 50 | Spannung elektr. Wasserpumpe | V | high | unsigned char | - | 1 | 10 | 0 |
| 51 | Fahrzeuggeschwindigkeit | km/h | high | unsigned int | - | 1 | 10 | 0 |
| 52 | Relativzeit | HEX | high | signed long | - | 1 | 1 | 1 |

### IARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| default | 0x0008 | 0x0004 | 0x0002 | 0x0001 |
| 0x2750 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2833 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27AA | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2839 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCDB3 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0xCDB9 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x271B | 0x0008 | 0x000b | 0x000c | 0x000d |
| 0x280D | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x2717 | 0x0008 | 0x000b | 0x000c | 0x000d |
| 0x27A8 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x283B | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x274F | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x296C | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x2871 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27F7 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2810 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x2844 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2779 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x2849 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27AE | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2725 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x274E | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2830 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2726 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2848 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2975 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x2811 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2823 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2760 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2777 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x27E3 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCDB6 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27C1 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2870 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2829 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x283C | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2718 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27C0 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2858 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCD8D | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0xCDAA | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2745 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x285A | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2971 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x272F | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27B6 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x274D | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCDA7 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27BA | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x275E | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x280F | 0x0008 | 0x0004 | 0x000f | 0x0001 |
| 0x27B1 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27E2 | 0x0008 | 0x000a | 0x000f | 0x000e |
| 0x2816 | 0x0008 | 0x0004 | 0x000f | 0x0001 |
| 0x27DE | 0x0008 | 0x000a | 0x000f | 0x000e |
| 0xCDA2 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27BE | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x283E | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2742 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x284D | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2862 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2825 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27F1 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2752 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27B3 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCD96 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0xCD9B | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2788 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0xCDA1 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2713 | 0x0008 | 0x000b | 0x000c | 0x000d |
| 0x2824 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2843 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2860 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2751 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x284C | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x285B | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2763 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x282E | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCD92 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2817 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2782 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCD89 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27E7 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCD98 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2727 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2826 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x280A | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27B9 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2820 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x2976 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2785 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0xCD9F | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27A7 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x282B | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2716 | 0x0008 | 0x000b | 0x000c | 0x000d |
| 0xCD95 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27E6 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27BB | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2764 | 0x0008 | 0x0004 | 0x000f | 0x0001 |
| 0x275F | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x285E | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x275B | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2970 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x296A | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0xCD88 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27B2 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCD8E | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27F2 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27B5 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2831 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27AF | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2852 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCDA6 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27F6 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2775 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27E1 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCD8B | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x290F | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0xCD9D | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27AB | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCD97 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2835 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2834 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2787 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x27B0 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2712 | 0x0008 | 0x000b | 0x000c | 0x000d |
| 0x2910 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x27BF | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2861 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2874 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x296B | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0xCDAE | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0xCDA3 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x283D | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2857 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2730 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x284F | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCD99 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2837 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x280B | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27DC | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2821 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x2855 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x296E | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x2744 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x274C | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2784 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x283F | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27DB | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCDA0 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x284B | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCDC3 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0xCDA9 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0xCD94 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0xCDAC | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2904 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2973 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x2850 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27B8 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2840 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27F3 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x286F | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27E5 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCD9E | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2774 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0xCDB7 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2776 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x2715 | 0x0008 | 0x000b | 0x000c | 0x000d |
| 0xCDC2 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2856 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2762 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x2842 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCD91 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x275C | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x27AC | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2859 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27A6 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCD8F | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0xCDA8 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2838 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCDB5 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x282D | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27F5 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x296F | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x2731 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2832 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2968 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x282A | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27BC | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2873 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2732 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x285C | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2827 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCDB1 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2710 | 0x0008 | 0x000b | 0x000c | 0x000d |
| 0x2781 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2845 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2743 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0xCD87 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0xCD8A | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27B7 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x285D | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCDA4 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2905 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2780 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2822 | 0x0008 | 0x0004 | 0x000f | 0x0001 |
| 0x27A9 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x284A | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x296D | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0xCDAD | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2828 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x284E | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x271A | 0x0014 | 0x0004 | 0x0013 | 0x0012 |
| 0x2836 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27F4 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27D9 | 0x0011 | 0x0010 | 0x0002 | 0x0001 |
| 0x2974 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x27DD | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2847 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27E4 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCDAB | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2815 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x275D | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x2972 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0x2714 | 0x0008 | 0x000b | 0x000c | 0x000d |
| 0x2812 | 0x0008 | 0x000a | 0x000f | 0x000e |
| 0xCD90 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2841 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2783 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCDB2 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x272E | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x27AD | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2786 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0xCDBA | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x280E | 0x0008 | 0x0004 | 0x000f | 0x0001 |
| 0x27BD | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCD8C | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0xCD86 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x286E | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0xCD9A | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x282F | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2846 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x283A | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2872 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2969 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0xCD93 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x285F | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x280C | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2851 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2753 | 0x0008 | 0x0004 | 0x0002 | 0x000e |
| 0xCDA5 | 0x0008 | 0x000a | 0x0002 | 0x0001 |
| 0x2711 | 0x0008 | 0x000b | 0x000c | 0x000d |
| 0x27B4 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x282C | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x27D8 | 0x0009 | 0x0004 | 0x0002 | 0x0001 |
| 0x2761 | 0x0008 | 0x0004 | 0x0002 | 0x000e |

### IARTTEXTEINDIVIDUELL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x0000 | kein passendes Fehlersymptom |
| 0x0001 | Signal oder Wert oberhalb Schwelle |
| 0x0002 | Signal oder Wert unterhalb Schwelle |
| 0x0004 | kein Signal oder Wert |
| 0x0008 | unplausibles Signal oder Wert |
| 0x0009 | Signal oder Wert unplausibel |
| 0x000a | kein Signal oder Wert |
| 0x000b | Leitungsunterbrechung |
| 0x000c | Kurzschluss nach Masse |
| 0x000d | Kurzschluss nach Ubat |
| 0x000e | Signal oder Wert oberhalb Schwelle |
| 0x000f | Signal oder Wert unterhalb Schwelle |
| 0x0010 | Sensor 1 |
| 0x0011 | Sensor 2 |
| 0x0012 | Spannung ueber Schwelle |
| 0x0013 | Spannung unter Schwelle |
| 0x0014 | ungueltige Spannung erkannt |
| 0xFFFF | unbekannte Fehlerart |

### _MSD85YL6_TABLE_FS

| NR | TEXT |
| --- | --- |
| 0 | Funktion noch nicht gestartet |
| 1 | Start-/Ansteuerbedingung nicht erfuellt |
| 2 | Uebergabeparameter nicht plausibel |
| 3 | Funktion wartet auf Freigabe |
| 4 | -- |
| 5 | Funktion laeuft |
| 6 | Funktion beendet (ohne Ergebnis) |
| 7 | Funktion abgebrochen (kein Zyklusflag/Readiness gesetzt) |
| 8 | Funktion vollstaendig durchlaufen (Zyklusflag/Readiness gesetzt) und kein Fehler erkannt |
| 9 | Funktion vollstaendig durchlaufen (Zyklusflag/Readiness gesetzt) und Fehler erkannt |
| 255 | ungueltiger Wert |

### _MSD85YL6_TABLE_ST_MONTAGEMODUS_AKTIV_INAKTIV

| NR | TEXT |
| --- | --- |
| 0 | Montage-Modus ist inaktiv |
| 1 | Montage-Modus ist aktiv |

### T_TAB_EDME_LADEKABEL

| WERT | TEXT |
| --- | --- |
| 0 | Kein Kabel angesteckt |
| 1 | Kabel angesteckt |
| 2 | Fehler |
| 3 | Signal ungültig |

### T_TAB_EDME_BETRIEBSMODE_DCDC

| WERT | TEXT |
| --- | --- |
| 1 | Standby |
| 2 | Buck |
| 3 | Error-State |
| 4 | Signal ungültig |

### STATCLIENTAUTHTXT

| SB | TEXT |
| --- | --- |
| 0x00 | Freigabe (noch) nicht erteilt (noch nicht versucht oder Kommunikation gestört) |
| 0x01 | Freigabe erteilt (Challenge-Response erfolgreich) |
| 0x02 | Freigabe abgelehnt (Challenge-Response fehlgeschlagen, falsche Response, Kommunikation i.O.) |
| 0x03 | nicht definiert |

### STATFREESKTXT

| SB | TEXT |
| --- | --- |
| 0xFE | Ablage unbegrenzt |
| 0xFF | ungültig |
| 0xXY | freie Ablagen |

### STATEWSVERTXT

| SB | TEXT |
| --- | --- |
| 0x01 | Direktschreiben des SecretKey |
| 0x02 | Direktschreiben des SecretKey und DH-Abgleich |
| 0xXY | unbekannt |

### TAB_STAT_ST_DIAG_DCDC_MODUS

| WERT | TEXT |
| --- | --- |
| 0 | Antwort ausstehend |
| 1 | Erfolg |
| 2 | Fehler |

### TAB_STAT_ST_DIAG_DCDC_GRENZEN

| WERT | TEXT |
| --- | --- |
| 0 | erfolgreich |
| 1 | nicht erfolgreich: mindestens eine geforderte Grenze verletzt eine Systemgrenze, stattdessen wird diese verwendet |

### T_TAB_ST_B_DIAG_DCDC

| WERT | TEXT |
| --- | --- |
| 1 | Soc_diag_lad_lmt verwenden |
| 2 | I_diag_dcdc_lv_out verwenden |
| 4 | I_diag_dcdc_hv_out verwenden |
| 8 | U_diag_dcdc_lv_out verwenden |
| 16 | U_diag_dcdc_hv_out verwenden |

### T_TAB_ST_DIAG_DCDC_ANF

| WERT | TEXT |
| --- | --- |
| 0 | Kontrolle an EME-SW |
| 1 | Anforderung Buck-Modus |
| 2 | Anforderung Boost-Modus |
| 3 | Anforderung Standby-Modus |

### T_TAB_EDME_REMOTE_LADEN

| WERT | TEXT |
| --- | --- |
| 1 | RemoteLaden nicht aktiv |
| 2 | RemoteLaden on Hold |
| 4 | RemoteLaden aktiv |
| 255 | ungültig |

### T_TAB_EDME_STATUS_LADEN

| WERT | TEXT |
| --- | --- |
| 1 | kein Laden |
| 2 | Ladestecker gesteckt - kein Laden |
| 4 | Laden aktiv |
| 8 | Laden beendet |
| 16 | Ladestörung |
| 32 | Ladefehler |
| 255 | ungültig |

### T_TAB_EDME_TIMER_LADEN_NR

| WERT | TEXT |
| --- | --- |
| 1 | TimerLaden nicht aktiv |
| 2 | TimerLaden on Hold |
| 4 | TimerLaden aktiv |
| 255 | ungültig |

### T_TAB_EME_HVSTART_KOMM

| WERT | TEXT |
| --- | --- |
| 0 | HV aus |
| 1 | HV ein Anforderung |
| 2 | Freigabe HV |
| 3 | HV-Batterie Nullstromanforderung |
| 4 | HV Nachlauf 1 |
| 5 | HV Nachlauf 2 |
| 6 | Shutdown: Anforderung Schütze öffnen |
| 7 | Shutdown: Anforderung HV-Zwischenkreisentladung |
| 9 | Anforderung Batterieloser Betrieb |
| 10 | HV Batterieloser Betrieb: Anforderung Schütze öffnen |
| 11 | HV Batterieloser Betrieb aktiv |
| 12 | fehlerbedingter Shutdown: Rücknahme Freigabe HV |
| 13 | fehlerbedingter Shutdown: Anforderung Schütze öffnen |
| 14 | fehlerbedingter Shutdown: Anforderung HV-Zwischenkreisentladung |
| 15 | HV Störung |
| 16 | Initialisierung / ungültig |

### T_TAB_EME_I0ANF_HVB

| WERT | TEXT |
| --- | --- |
| 0 | keine Anforderung |
| 1 | Anforderung Nullstrom ohne EV: HV-Batteriefehler der Kategorie 5 oder geringe Ladeleistung |
| 2 | Anforderung Nullstrom mit EV: Entladeschutzfunktion HV-Batterie |
| 3 | Anforderung Nullstrom mit EV: HV-Power-Down |
| 4 | Anforderung Nullstrom mit EV: Batterieloser Betrieb |

### T_TAB_TSR_LADEN_STAT_ART_LADEANF_BIT_0

| WERT | TEXT |
| --- | --- |
| 0 | keine Ladeanforderung HVB |
| 1 | Ladeanforderung HVB |

### T_TAB_TSR_LADEN_STAT_ART_LADEANF_BIT_1

| WERT | TEXT |
| --- | --- |
| 0 | keine Vorkonditionierung |
| 1 | Vorkonditionierung |

### T_TAB_TSR_LADEN_STAT_ART_LADEANF_BIT_2

| WERT | TEXT |
| --- | --- |
| 0 | keine Nachladeanforderung NVB |
| 1 | Nachladeanforderung NVB |

### T_TAB_TSR_LADEN_ST_BEDINGUNG_LADESTART

| WERT | TEXT |
| --- | --- |
| 1 | Ungesteuertes Laden |
| 2 | Ladestart via CIC |
| 3 | Ladestart via Timer |
| 4 | Ladestart über Startfunktion I-Phone |
| 7 | ungueltig |

### T_TAB_TSR_LADEN_ST_ABBRUCHBEDINGUNG

| WERT | TEXT |
| --- | --- |
| 0 | Abbruch des Ladens aufgrund Fehlerzustand |
| 1 | Beenden des Ladevorgangs über Remotefunktion I-Phone |
| 2 | Beenden des Ladevorgangs durch Entriegeln des Ladesteckers |
| 3 | Ladeende bei Ziel-SoC erreicht |

### T_TAB_TSR_LADEN_ST_REAS_LDUNTERBR

| WERT | TEXT |
| --- | --- |
| 1 | Gewalttrennung des Steckers |
| 2 | AC-Spannung fehlt oder Netzverbindung instabil |
| 3 | Stecker nicht verriegelt |
| 4 | Fehler: Hardwarefehler |
| 5 | Fehler: Unterspannung AC |
| 6 | Fehler: Überspannung AC |
| 7 | Fehler: Überstrom AC |
| 8 | Fehler: Unterspannung DC |
| 9 | Fehler: Überspannung DC |
| 10 | Fehler: Überstrom DC |
| 11 | Fehler Temperatur |
| 15 | ungueltig |

### T_TAB_TSR_LADEN_STAT_REAS_DERATING_BIT_0

| WERT | TEXT |
| --- | --- |
| 0 | keine Übertemperatur |
| 1 | Übertemperatur |

### T_TAB_TSR_LADEN_STAT_REAS_DERATING_BIT_1

| WERT | TEXT |
| --- | --- |
| 0 | Netzfrequenz nicht zu niedrig |
| 1 | Netzfrequenz zu niedrig |

### T_TAB_TSR_LADEN_STAT_REAS_DERATING_BIT_2

| WERT | TEXT |
| --- | --- |
| 0 | kein Ausfall eines Lademoduls |
| 1 | Ausfall eines Lademoduls |

### T_TAB_TSR_LADEN_STAT_REAS_DERATING_BIT_3

| WERT | TEXT |
| --- | --- |
| 0 | keine DC-Strombegrenzung |
| 1 | DC-Strombegrenzung |

### T_TAB_TSR_LADEN_STAT_REAS_DERATING_BIT_4

| WERT | TEXT |
| --- | --- |
| 0 | Netzseitig verfügbare Leistung nicht kleiner Nennleistung |
| 1 | Netzseitig verfügbare Leistung kleiner Nennleistung |

### T_TAB_TSR_LADEN_STAT_ANF_ART_VOKO_BIT_0

| WERT | TEXT |
| --- | --- |
| 0 | keine Voko Innenraum |
| 1 | Voko Innenraum |

### T_TAB_TSR_LADEN_STAT_ANF_ART_VOKO_BIT_1

| WERT | TEXT |
| --- | --- |
| 0 | keine Voko Innenraum forced |
| 1 | Voko Innenraum forced |

### T_TAB_TSR_LADEN_STAT_ANF_ART_VOKO_BIT_2

| WERT | TEXT |
| --- | --- |
| 0 | keine Voko Batt |
| 1 | Voko Batt |

### T_TAB_TSR_LADEN_STAT_ANF_ART_VOKO_BIT_3

| WERT | TEXT |
| --- | --- |
| 0 | keine Voko Batt forced |
| 1 | Voko Batt forced |

### T_TAB_TSR_LADEN_STAT_NACHLADEANFORDERUNG

| WERT | TEXT |
| --- | --- |
| 1 | Nachladeanforderung durch Wecken von IBS |
| 2 | Nachladeanforderung während das Fzg. wach war |
| 3 | ungueltig |

### T_TAB_TSR_LADEN_STAT_ZUSATZINFO_ABBRUCHBEDINGUNG

| WERT | TEXT |
| --- | --- |
| 1 | Abbruch aufgrund min. HVB-SoC unterschritten |
| 2 | Abbruch aufgrund min. Nachladestrom NVB unterschritten |
| 4 | Abbruch aufgrund Status Kl. 15 |
| 8 | Abbruch aufgrund schlechter Ladebilanz |
| 15 | ungueltig |

### _MOTORUDSCODIERUNG_RUHESTROM

| NR | TEXT |
| --- | --- |
| 0 | Ruhestrom kleiner 80mA, keine Aktion des IBS |
| 1 | Ruhestrom = 80...200mA, keine Aktion da Entladung kleiner 1Ah |
| 2 | Ruhestrom = 200...1000mA, keine Aktion da Entladung kleiner 1Ah |
| 3 | Ruhestrom groesser 1000mA, keine Aktion da Entladung kleiner 1Ah |
| 4 | Ruhestrom kleiner 80mA, Anforderung Reset Kl.30f (B_ierr1 = 1) |
| 5 | Ruhestrom = 80...200mA, Anforderung Reset Kl.30f (B_ierr1 = 1) |
| 6 | Ruhestrom = 200...1000mA, Anforderung Reset Kl.30f (B_ierr1 = 1) |
| 7 | Ruhestrom groesser 1000mA, Anforderung Reset Kl.30f (B_ierr1 = 1) |
| 8 | Ruhestrom kleiner 80mA, Anforderung Abschaltung Kl.30f (B_ierr2 = 1) |
| 9 | Ruhestrom = 80...200mA, Anforderung Abschaltung Kl.30f (B_ierr2 = 1) |
| 10 | Ruhestrom = 200...1000mA, Anforderung Abschaltung Kl.30f (B_ierr2 = 1) |
| 11 | Ruhestrom groesser 1000mA, Anforderung Abschaltung Kl.30f (B_ierr2 = 1) |
| 12 | Ruhestrom kleiner 80mA, erneuter Fehler bei Kl.30f aus (B_ierr3 = 1) |
| 13 | Ruhestrom = 80...200mA, erneuter Fehler bei Kl.30f aus (B_ierr3 = 1) |
| 14 | Ruhestrom = 200...1000mA, erneuter Fehler bei Kl.30f aus (B_ierr3 = 1) |
| 15 | Ruhestrom groesser 1000mA, erneuter Fehler bei Kl.30f aus (B_ierr3 = 1) |

### T_TAB_EDME_ECOPRO

| WERT | TEXT |
| --- | --- |
| 0 | ECOPro inaktiv |
| 1 | ECOPro aktiv |
