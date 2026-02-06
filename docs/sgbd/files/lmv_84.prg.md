# lmv_84.prg

## General

|  |  |
| --- | --- |
| File | lmv_84.prg |
| Type | PRG |
| Jobs | 73 |
| Tables | 84 |
| Origin | BMW EA-745 Frank Reuter |
| Revision | 5.011 |
| Author | MAGNASTEYR EEC Sauer, MAGNASTEYR HES Suppan, MAGNASTEYR HES Pod |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Laengsmomenten-Verteilergetriebe Steuergeraet |  |  |
| ORIGIN | string | BMW EA-745 Frank Reuter |  |  |
| REVISION | string | 5.011 |  |  |
| AUTHOR | string | MAGNASTEYR EEC Sauer, MAGNASTEYR HES Suppan, MAGNASTEYR HES Pod |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.53 |  |  |
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

### FS_SPERREN

Sperren bzw. Freigeben des Fehlerspeichers KWP2000: $85 ControlDTCSetting Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SPERREN | string | "ja"   -> Fehlerspeicher sperren "nein" -> Fehlerspeicher freigeben table DigitalArgument TEXT |
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

### SLEEP_MODE

SG in Sleep-Mode versetzen KWP2000: $31 StartRoutineByLocalIdentifier a)       $0E Time controlled PowerDown oder b)       $05 PowerDown $00 all ECU Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | real | a) Zeit nach der das Steuergerät einschläft Bereich   : 0.5 bis 20.0 [Sekunden] Auflösung : 0.5 [Sekunden] => zeitgesteuerter Power-Down (0x0E) wird aktiviert b) Default: (Es wird kein Argument übergeben!) => normaler Power-Down (0x05) wird aktiviert |

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

### STATUS_AKTUATOR_MOTORREGLER

Ein- Ausgangsgrößen Aktuator Motorregler

_No arguments._

### STATUS_ATIC

Fehlerspeicherregister und Initialisierungsregister des ATIC106

_No arguments._

### STATUS_AUTOCODIERUNG

Codierstatus / daten

_No arguments._

### STATUS_INTEGRATOREN

HO Getriebe und Lamellen Schädigungs Integratoren

_No arguments._

### STATUS_ISTMOMENT

Momenten Istwert vom VGSG

_No arguments._

### STATUS_KALIBRIERUNG

Kalibrierstatus / daten

_No arguments._

### STATUS_KLASSIERUNG

Offset / Steigungsklassierung Verteilergetriebe

_No arguments._

### STATUS_KLEMMENSPANNUNG

Spannungen an den VGSG Eingangsklemmen

_No arguments._

### STATUS_KUPPLUNGSSTATUS

Status des VGSG

_No arguments._

### STATUS_LT_INTEGRATOREN

Lifetime Getriebe und Lamellen Schädigungs Integratoren

_No arguments._

### STATUS_SOLLMOMENT

Momenten Sollwert

_No arguments._

### STATUS_SYSINFO_LESEN

Liest den SW-Stand aus Achtung: STAT_ATIC_ID_* nur direkt nach einem Power-up gültig!

_No arguments._

### STATUS_TEMPERATURHISTOGRAMM

Temperaturverteilung VGSG / Betriebszeit

_No arguments._

### STATUS_VTG_SN_LESEN

Liest die VTG-SN aus (wird am Getriebe EOL geschrieben)

_No arguments._

### STEUERN_AUTOCODIERUNG_DEFAULT

Aktivierung eines uncodierten SG mit Default Werten Bedingungen: v_fzg < 3 km/h und VKMaus und Kl15ein Achtung: Dieser Job kann nur innerhalb von 20 Sekunden nach Kl15ein aktiviert werden!

_No arguments._

### STEUERN_CODIERDATEN_RUECKSETZEN

Codierdaten im EEPROM loeschen Bedingungen: v_fzg < 3 km/h und VKMaus und Kl15ein

_No arguments._

### STEUERN_FUNKTIONSPRUEFUNG

Funktionsprüfung der Kupplung mit vorherigem Loeschen des Kalibrierwinkels Bedingungen: Wenn (vFzg < 3 km/h && VKMaus && KL15ein && gültige Klassierung) oder (vFzg < 3 km/h && VKMein && MKsoll < 10 Nm && gültige Klassierung)

| Name | Type | Description |
| --- | --- | --- |
| MODE | int | Kein Argument : Funktionsprüfung der Kupplung mit vorherigem löschen des Kalibrierwinkels und SG-Reset Argument = 1  : Funktionsprüfung der Kupplung ohne vorherigem löschen des Kalibrierwinkels und ohne SG-Reset |

### STEUERN_INTEGRATOREN_LOESCHEN

HO Getriebe und Lamellenintegratoren zurücksetzen Bedingungen: v_fzg < 3 km/h und VKMaus und Kl15ein

_No arguments._

### STEUERN_KALIBRIERUNG_LOESCHEN

Kalibrierwinkel im EEPROM loeschen Bedingungen: Wenn (vFzg < 3 km/h && VKMaus && KL15ein) oder (vFzg < 3 km/h && VKMein && MKsoll < 10 Nm)

_No arguments._

### STEUERN_KLASSIERSPEICHER_RUECKSETZEN

Setzt die Klassierinformation im EEPROM auf den Initialwert (unklassiert) zurück Bedingungen: v_fzg < 3 km/h und VKMaus und Kl15ein

_No arguments._

### STEUERN_KLASSIERSPEICHER_SETZEN

Setzt die Klassierinformation im EEPROM auf die Werte des Arguments Bedingungen: v_fzg < 3 km/h und VKMaus und Kl15ein

| Name | Type | Description |
| --- | --- | --- |
| ARG_OFFSET | int | EE_idxOffsetClass = Argument_1 (1 - 15) |
| ARG_GAIN | int | EE_idxGainClass = Argument_2 (1 - 15) |

### STEUERN_KUPPLUNG_FUNKTIONSPRUEFUNG

Funktionsprüfung der Kupplung Bedingungen: Wenn (vFzg < 3 km/h && VKMaus && KL15ein && gültige Klassierung) oder (vFzg < 3 km/h && VKMein && MKsoll < 10 Nm && gültige Klassierung)

_No arguments._

### STEUERN_LT_INTEGRATOREN_LOESCHEN

Lifetime Getriebe und Lamellenintegratoren zurücksetzen Bedingungen: v_fzg < 3 km/h und VKMaus und Kl15ein

_No arguments._

### WRITE_GETRIEBE_INTEGRATOREN

Schreibt die HO Getriebe Integratoren und den Intervall km Stand ins EEPROM Bedingungen: v_fzg < 3 km/h und VKMaus und Kl15ein

| Name | Type | Description |
| --- | --- | --- |
| ARG_HO_GETRIEBE_1 | real | EE_workChain = Argument_1 (0 - 4772,185883 [kWh]) |
| ARG_HO_GETRIEBE_2 | real | EE_workClutch = Argument_2 (0 - 4772,185883 [kWh]) |
| ARG_HO_INTEGRATOR_KM | unsigned long | EE_kmVehServOil = Argument_3 (0 - 4294967295 [km]) |
| ARG_MOM_UEBERGLZ_1 | unsigned long | EE_rngRunInComp1 = Argument_4 (0 - 60000) |
| ARG_MOM_UEBERGLZ_2 | unsigned long | EE_rngRunInComp2 = Argument_5 (0 - 6000000) |
| ARG_MOM_UEBERGLZ_3 | unsigned long | EE_rngRunInComp3 = Argument_6 (0 - 60000) |

### WRITE_LAMELLEN_INTEGRATOREN

Schreibt die HO Lamellen Integratoren ins EEPROM Bedingungen: v_fzg < 3 km/h und VKMaus und Kl15ein

| Name | Type | Description |
| --- | --- | --- |
| ARG_HO_LAMELLE_1 | real | EE_workBld1 = Argument_1 (0 - 1193,04647083 [kWh]) |
| ARG_HO_LAMELLE_2 | real | EE_workBld2 = Argument_2 (0 - 1193,04647083 [kWh]) |
| ARG_HO_LAMELLE_3 | real | EE_workBld3 = Argument_3 (0 - 1193,04647083 [kWh]) |

### WRITE_LT_GETRIEBE_INTEGRATOREN

Schreibt die LT Getriebe Integratoren ins EEPROM Bedingungen: v_fzg < 3 km/h und VKMaus und Kl15ein

| Name | Type | Description |
| --- | --- | --- |
| ARG_LT_GETRIEBE_1 | real | EE_workChain_LT   = Argument_1 (0 - 4772,185883 [kWh]) |
| ARG_LT_GETRIEBE_2 | real | EE_workClutch_LT  = Argument_2 (0 - 4772,185883 [kWh]) |
| ARG_LT_OEL | real | EE_workOil_LT     = Argument_3 (0 - 2047 [kWh]) |

### WRITE_LT_LAMELLEN_INTEGRATOREN

Schreibt die LT Lamellen Integratoren ins EEPROM Bedingungen: v_fzg < 3 km/h und VKMaus und Kl15ein

| Name | Type | Description |
| --- | --- | --- |
| ARG_LT_LAMELLE_1 | real | EE_workBld1_LT = Argument_1 (0 - 1193 [kWh]) |
| ARG_LT_LAMELLE_2 | real | EE_workBld2_LT = Argument_2 (0 - 1193 [kWh]) |
| ARG_LT_LAMELLE_3 | real | EE_workBld3_LT = Argument_3 (0 - 1193 [kWh]) |

### WRITE_VTG_SN

Schreibt eine 20 stellige Getriebe SN ins EEPROM Bedingungen: v_fzg < 3 km/h und VKMaus und Kl15ein

| Name | Type | Description |
| --- | --- | --- |
| ARG_VTG_SN | string | Seriennummer des LMV-SG Beispiel: 35AA0000000 01-01-01 |

### WRITE_SOLLMOMENT

Setzt SG intern eine Sollmomentenvorgabe und den Sollwertqualifier auf Sollwert umsetzen Bedingungen: v_fzg < 20 km/h && VKMein && Kl15 ein

| Name | Type | Description |
| --- | --- | --- |
| ARG_SOLLMOMENT | int | S_trqDrive = Argument_1 (-2,0 - 1400 [Nm]) -2... Kupplung lüften |
| ARG_TIMETICKS | int | S_TrqDrive_ST = Argument_2 (0 - 300 [s]) 0... Laufenden Job abbrechen |

### STATUS_GETRIEBEKLASSE

Getriebeklasse, Offset- und Steigungsklassierung Verteilergetriebe Dieser Job kann erst ab 09/2011 bzw. ab einer Software-Version ab H500 verwendet werden.

_No arguments._

### STEUERN_GETRIEBEKLASSE_RUECKSETZEN

Setzt die Klassierinformation im EEPROM auf den Initialwert (unklassiert) zurück Bedingungen: v_fzg < 3 km/h und VKMaus und Kl15ein Dieser Job kann erst ab 09/2011 bzw. ab einer Software-Version ab H500 verwendet werden.

_No arguments._

### STEUERN_GETRIEBEKLASSE_SETZEN

Setzt die Klassierinformation im EEPROM auf die Werte des Arguments für ATClight Klassierung Bedingungen: v_fzg < 3 km/h und VKMaus und Kl15ein Dieser Job kann erst ab 09/2011 bzw. ab einer Software-Version ab H500 verwendet werden.

| Name | Type | Description |
| --- | --- | --- |
| ARG_CLASSGRB | int | EEClassGrb = Argument_1 (1 - 239, 3013 - 7411) |

### STATUS_VERTEILERGETRIEBE

Verteilergetriebedaten für FASTA Auswertung

_No arguments._

### STEUERN_PRUEFSTAND

Setzt SG intern eine Sollmomentenvorgabe ohne Restbussimulation

| Name | Type | Description |
| --- | --- | --- |
| ARG_PRUEFSTANDMODE | int | P_Input_enIgnMan = Argument_1 (0, 1) 0      ... Pruefstandmode AUS 1      ... Pruefstandmode EIN |
| ARG_AUTOCODIERUNG | int | 0      ... Default Codierung 255    ... Fahrzeugtypbotschaft wird verwendet 1-254  ... Autocodierungstabelle |
| ARG_NKAL | int | P_stCombEngMan = Argument_3 (0, 1) 0      ... VKM AUS 1      ... VKM EIN |
| ARG_SOLLMOMENT | int | P_S_trqCltReqMan = Argument_4 (-2, 0...1400 Nm) -2    ... Kupplung lüften |

### STATUS_PRUEFSTAND

Pruefstandsmodus Status / Daten

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

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0x13 | ERROR_INCORRECT_MESSAGE_LENGTH_OR_INVALID_FORMAT |
| 0x83 | ERROR_ENGINE_IS_RUNNING |
| 0x84 | ERROR_ENGINE_IS_NOT_RUNNING |
| 0x88 | ERROR_VEHICLE_SPEED_TOO_HIGH |
| 0xE0 | ERROR_SYSTEM_BUSY |
| 0xE1 | ERROR_TIMEOUT_JOB_START |
| 0xE2 | ERROR_REJECT_JOB_START |
| 0xE3 | ERROR_TIMEOUT_JOB_PENDING |
| 0xE4 | ERROR_REJECT_JOB_PENDING |
| 0xE5 | ERROR_TIMEOUT_JOB |
| 0xE6 | ERROR_REJECT_JOB |
| 0xE9 | ERROR_PARAMETER_OUT_OF_RANGE |
| 0xF0 | ERROR_JOB_ABORTED |
| 0xF1 | ERROR_STATE_ERROR |
| 0xF2 | ERROR_FSM_NOT_IDLE |
| 0xF8 | ERROR_EEPROM_ERROR_1 |
| 0xF9 | ERROR_EEPROM_ERROR_2 |
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
| 0x5209 | Klemme 30: Unterspannung |
| 0x520A | Klemme 30: Überspannung |
| 0x520B | Klemme 30: Leitungsunterbrechung |
| 0x520C | Klemme 30g: Unterspannung |
| 0x520D | Klemme 30g: Leitungsunterbrechung |
| 0x5212 | Motorlagesensor: fehlerhaft |
| 0x5213 | Stellmotor: Fehler Lastkreis |
| 0x5214 | Elektrischer Lastkreis: fehlerhaft |
| 0x5215 | Steuergerät: interner Fehler (Watchdog) |
| 0x5216 | Steuergerät: Übertemperatur |
| 0x5219 | Steuergerät: EEPROM Schreib-Lese-Fehler |
| 0x521A | Steuergerät: EEPROM End of Life |
| 0x521C | Steuergerät: nicht kodiert |
| 0x521D | Kodierdaten: unplausibel |
| 0x521E | Steuergerät: unerlaubter Kreuztausch |
| 0x521F | Gestelltes Moment ausserhalb Momentenkennlinie |
| 0x5220 | Anschlagsuche: unplausibel |
| 0x5221 | Ankerkreiswiderstand: unplausibel |
| 0x5222 | Steuergerät: Fehler Gesamtsystem |
| 0x5223 | Ende Lebensdauer Getriebe erreicht |
| 0x5224 | VTG: Ölverschleiss |
| 0x5225 | Klassierung: fehlt |
| 0x5226 | Erstkalibrierung: fehlt |
| 0x5227 | Kalibrierung: fehlerhaft |
| 0x522A | Steuergerät: interner Fehler (Watchdog, unerwarteter Reset) |
| 0x522B | Steuergerät: interner Fehler (Watchdog, deaktiviert) |
| 0x522D | Steuergerät: interner Fehler |
| 0x522E | Offset-Kompensation: fehlerhaft |
| 0x5245 | Falschverbau - Allradverteilergetriebe passt nicht zur Fahrzeugvariante |
| 0x5246 | Falschverbau - Allradverteilergetriebe ATCx5L passt nicht zur Fahrzeugvariante |
| 0x5247 | VTG: Kalibrierwinkelabweichung ausserhalb Toleranz |
| 0x5248 | VTG: Klassierungsplausibilisierung fehlgeschlagen oder nicht durchführbar |
| 0x5249 | Allradverteilergetriebe temporär stillgelegt |
| 0x524A | Allradverteilergetriebe temporär stillgelegt - Aktuatorschutz |
| 0x524D | Unerwartete Deaktivierung PWM |
| 0x524E | Motorlagesensor: fehlerhaft |
| 0x524F | Schutzfunktion Antriebsstrang deaktiviert |
| 0x5252 | Gestelltes Moment ausserhalb Momentenkennlinie |
| 0xCF4B | PT-CAN Kommunikationsfehler |
| 0xCF57 | Botschaft (Engine 1, 1D0): Botschaft fehlt |
| 0xCF5D | Botschaft (Kilometerstand/Reichweite, 330): Botschaft fehlt |
| 0xCF5E | Botschaft (Klemmenstatus, 130): Botschaft fehlt |
| 0xCF60 | Botschaft (Sollmomentanforderung, BB): Botschaft fehlt |
| 0xCF63 | Botschaft (Drehmoment 3 PT-CAN, AA): Botschaft fehlt |
| 0xCF6D | Botschaft (Kilometerstand/Reichweite, 330): Fehler in der Botschaft |
| 0xCF6E | Botschaft (Klemmenstatus, 130): Fehler in der Botschaft |
| 0xCF70 | Botschaft (Sollmomentanforderung, BB): Fehler in der Botschaft |
| 0xCF73 | Botschaft (Drehmoment 3 PT-CAN, AA): Fehler in der Botschaft |
| 0xCF77 | Botschaft (Engine 1, 1D0): unplausibles Signal oder Wert |
| 0xCF7D | Signal vom Kombiinstrument: Kilometerstand/Reichweite |
| 0xCF7E | Signal vom CAS: Klemmenstatus |
| 0xCF80 | Signal von der DSC: Sollmomentenanforderung |
| 0xCF83 | Signal von der Motorsteuerung: Drehmoment 3 |
| 0xCF86 | Botschaft (Drehmoment 3 PT-CAN, AA): Botschaft fehlt |
| 0xCF8C | Pruefstandsmodus |
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
| 0x520C | TAB_DID_1_3AB | TAB_DID_7AB | FF_Hardware_2n | - |
| 0x520D | TAB_DID_1_3AB | TAB_DID_7AB | FF_Hardware_2n | - |
| 0x5215 | TAB_DID_1_3AB | TAB_DID_7AB | FF_Hardware_2n | - |
| 0x522A | TAB_DID_1_3AB | TAB_DID_7AB | FF_Hardware_2n | - |
| 0x522B | TAB_DID_1_3AB | TAB_DID_7AB | FF_Hardware_2n | - |
| 0x521F | TAB_DID_1_3AB | TAB_DID_19AB | 0x18 | FF_Function_7n |
| 0x5220 | TAB_DID_1_3AB | TAB_DID_19AB | 0x18 | FF_Function_7n |
| 0x5221 | TAB_DID_1_3AB | TAB_DID_19AB | 0x18 | FF_Function_7n |
| 0x5222 | TAB_DID_1_3AB | TAB_DID_19AB | 0x18 | FF_Function_7n |
| 0x5223 | TAB_DID_1_3AB | TAB_DID_19AB | 0x18 | FF_Function_7n |
| 0x5224 | TAB_DID_1_3AB | TAB_DID_19AB | 0x18 | FF_Function_7n |
| 0x5225 | TAB_DID_1_3AB | TAB_DID_19AB | 0x18 | FF_Function_7n |
| 0x5226 | TAB_DID_1_3AB | TAB_DID_19AB | 0x18 | FF_Function_7n |
| 0x5227 | TAB_DID_1_3AB | TAB_DID_19AB | 0x18 | FF_Function_7n |
| 0x522E | TAB_DID_1_3AB | TAB_DID_19AB | 0x18 | FF_Function_7n |
| 0x5245 | TAB_DID_1_3AB | TAB_DID_19AB | 0x18 | FF_Function_7n |
| 0x5246 | TAB_DID_1_3AB | TAB_DID_19AB | 0x18 | FF_Function_7n |
| 0x5247 | TAB_DID_1_3AB | TAB_DID_19AB | 0x18 | FF_Function_7n |
| 0x5248 | TAB_DID_1_3AB | TAB_DID_19AB | 0x18 | FF_Function_7n |
| 0x5249 | TAB_DID_1_3AB | TAB_DID_19AB | 0x18 | FF_Function_7n |
| 0x524A | TAB_DID_1_3AB | TAB_DID_19AB | 0x18 | FF_Function_7n |
| 0x524D | TAB_DID_N29AB | FF_Hardware_11n | - | - |
| 0x524E | TAB_DID_1_3AB | TAB_DID_19AB | 0x18 | FF_Function_7n |
| 0x5252 | TAB_DID_1_3AB | TAB_DID_19AB | 0x18 | FF_Function_7n |
| 0x522D | TAB_DID_1_3AB | TAB_DID_7AB | FF_Hardware_2n | - |
| 0x521C | FF_Coding_12n | FF_Coding_12Bn | 0x32 | 0x33 |
| 0x521D | FF_Coding_12n | FF_Coding_12Bn | 0x32 | 0x33 |
| 0x521E | FF_Coding_12n | FF_Coding_12Bn | 0x32 | 0x33 |
| 0xFFFF | TAB_DID_1_3AB | TAB_DID_7AB | FF_Hardware_2n | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Bordnetzspannung VGSG | V | - | unsigned char | - | - | 8 | - |
| 0x02 | Winkel auf Niveau Aktuatorwelle | - | high | unsigned int | - | - | - | - |
| 0x03 | Brueckentemperatur | ° | - | unsigned char | - | - | - | -40 |
| 0x04 | Status FSW | 0-n | - | 0xff | TAB_S_stMainCtl | - | - | - |
| 0x05 | Bordnetzspannung LMV Klemme 30 | V | - | unsigned char | - | - | 8 | - |
| 0x06 | Bordnetzspannung LMV Klemme 30g | V | - | unsigned char | - | - | 8 | - |
| 0x07 | Status Fahrzeug Zustand | text | - | 1 | - | - | - | - |
| 0x08 | [DSC] Sollwertvorgabe Moment | Nm | - | unsigned char | - | 8 | - | - |
| 0x09 | [LMV] Sollwertumsetzung Moment | Nm | - | unsigned char | - | 8 | - | - |
| 0x0A | [LMV] Service Qualifier | text | - | 2 | - | - | - | - |
| 0x0B | ATIC Status Register B1 | Hex | high | unsigned int | - | - | - | - |
| 0x0C | ATIC Status Register B2 | Hex | high | unsigned int | - | - | - | - |
| 0x0D | ST_VEH_CON | 0-n | high | 0xf000 | TAB_SUB_ST_VEH_CON_N1a | - | - | - |
| 0x0E | Status BSW | 0-n | high | 0x0f00 | TAB_SUB_Status_BSW_N1b | - | - | - |
| 0x0F | Status FSW | 0-n | high | 0x003f | TAB_SUB_Status_FSW_N3a | - | - | - |
| 0x10 | Stat_SysUpTime | 0-n | high | 0x00c0 | TAB_SUB_Status_SystemUpTime_N3b | - | - | - |
| 0x11 | Local Condition FSW | Hex | high | unsigned int | - | - | - | - |
| 0x12 | SystemUp Time | ms | high | unsigned int | - | 10 | - | - |
| 0x13 | Local Condition BSW | Hex | - | unsigned char | - | - | - | - |
| 0x14 | Stat WD Dis. | 0-n | - | 0xC0 | TAB_SUB_WD_Disabled_7a | - | - | - |
| 0x15 | Task ID | 0-n | - | 0x3F | TAB_SUB_Task_ID_7b | - | - | - |
| 0x16 | S12 Reset Register | Hex | - | unsigned char | - | - | - | - |
| 0x17 | V_VEH | km/h | - | signed char | - | 2 | - | - |
| 0x18 | NLR Status | 0-n | high | 0xFF | TAB_SUB_NLR_Status_10a | - | - | - |
| 0x19 | S_iSM | A | high | signed int | - | - | 16 | - |
| 0x1A | S_rpsDltTicSMmax | Grad/ms | - | unsigned char | - | - | - | - |
| 0x1B | S_nSM | U/min | - | signed char | - | - | - | - |
| 0x1C | Status_Bridge_Enable | 0-n | - | 0xE0 | TAB_SUB_Status_Bridge_Enable | - | - | - |
| 0x1D | SM_PWM | 0-n | - | 0x1F | TAB_SUB_SM_PWM_19b | - | - | - |
| 0x1E | phiCal | Grad | - | unsigned char | - | - | 2 | -16 |
| 0x1F | philCal_raw | Grad | - | unsigned char | - | - | 2 | -16 |
| 0x20 | ATIC_Response_Command_E | Hex | high | unsigned int | - | - | - | - |
| 0x21 | ATIC_Response_Command_D1 | Hex | high | unsigned int | - | - | - | - |
| 0x22 | ATIC_Response_Command_D2 | Hex | high | unsigned int | - | - | - | - |
| 0x23 | UKl30_Min_Anfilterung | V | - | unsigned char | - | - | 8 | - |
| 0x25 | Status FSW | 0-n | - | 0x3F | TAB_SUB_Status_FSW_N3a_Byte | - | - | - |
| 0x26 | Generic | 0-n | - | 0xC0 | TAB_SUB_Upper2Bit | - | - | - |
| 0x27 | Coding_IgnState | - | - | unsigned char | - | - | - | - |
| 0x28 | Coding_EngState | - | - | unsigned char | - | - | - | - |
| 0x29 | Coding_VehDataIdx | - | - | unsigned char | - | - | - | - |
| 0x2A | Coding_EEWrite_AutoCod | - | - | unsigned char | - | - | - | - |
| 0x2B | Coding_EEWrie_AutoCodRy | 0-n | - | 0xFF | TAB_SUB_NVM_RET_VAL | - | - | - |
| 0x2C | Coding_Auto_Cod_Time | ms | high | signed long | - | - | - | - |
| 0x2D | Coding_Request_Cnt | - | - | unsigned char | - | - | - | - |
| 0x2E | Coding_Receive_Cnt | - | - | unsigned char | - | - | - | - |
| 0x2F | Coding_VEH_TYP_ANDX | - | - | unsigned char | - | - | - | - |
| 0x30 | Coding_VEH_TYP_ORX | - | - | unsigned char | - | - | - | - |
| 0x31 | Coding_Error_Exit | 0-n | - | 0xFF | TAB_COD_ERROR_EXIT_PATH | - | - | - |
| 0x32 | Coding_NVM_LocalRdy | 0-n | - | 0xFF | TAB_SUB_NVM_RET_VAL | - | - | - |
| 0x33 | Coding_NVM_Fail_State | 0-n | - | 0xFF | TAB_NVM_FAIL_STATE | - | - | - |
| 0xFF | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### HDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | nein |
| F_LZ | nein |
| F_UWB_ERW | ja |

### HUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0xFFFF | - | - | - | - |

### HUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0xFFFF | unbekannter Fehlerort | text | - | 0 | - | - | - | - |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x5218 | HW-Register: Registerfehler |
| 0x5228 | Notlaufregler: Abbruch |
| 0x522C | Steuergerät: internern Fehler (VTG Software: Systemüberlastung) |
| 0x522D | Steuergerät: interner Fehler |
| 0x523B | NVM Kontrollfehler |
| 0x523C | NVM Löschfehler |
| 0x523D | NVM Lesefehler aller Daten |
| 0x523E | NVM Lesefehler |
| 0x523F | NVM Schreibfehler aller Daten |
| 0x5240 | NVM Schreibfehler |
| 0x5241 | NVM Konfigurationsfehler |
| 0x524F | Schutzfunktion Antriebsstrang deaktiviert |
| 0xCF58 | Botschaft (Außentemperatur/Relativzeit, 310): Botschaft fehlt |
| 0xCF5A | Botschaft (Geschwindigkeit PT-CAN, 1A0): Botschaft fehlt |
| 0xCF5B | Botschaft (Radgeschwindigkeit PT-CAN, CE): Botschaft fehlt |
| 0xCF5C | Botschaft (Getriebedaten, BA): Botschaft fehlt |
| 0xCF5F | Botschaft (Lenkradwinkel PT-CAN, C4): Botschaft fehlt |
| 0xCF61 | Botschaft (Status DSC PT-CAN, 19E): Botschaft fehlt |
| 0xCF62 | Botschaft (Drehmoment 1 PT-CAN, A8): Botschaft fehlt |
| 0xCF68 | Botschaft (Außentemperatur/Relativzeit, 310): Fehler in der Botschaft |
| 0xCF6A | Botschaft (Geschwindigkeit PT-CAN, 1A0): Fehler in der Botschaft |
| 0xCF6B | Botschaft (Radgeschwindigkeit PT-CAN, CE): Fehler in der Botschaft |
| 0xCF6C | Botschaft (Getriebedaten, BA): Fehler in der Botschaft |
| 0xCF6F | Botschaft (Lenkradwinkel PT-CAN, C4): Fehler in der Botschaft |
| 0xCF71 | Botschaft (Status DSC PT-CAN, 19E): Fehler in der Botschaft |
| 0xCF72 | Botschaft (Drehmoment 1 PT-CAN, A8): Fehler in der Botschaft |
| 0xCF78 | Signal vom Kombiinstrument: Außentemperatur/Relativzeit |
| 0xCF7A | Signal von der DSC: Geschwindigkeit |
| 0xCF7B | Signal von der DSC: Radgeschwindigkeit |
| 0xCF7C | Signal von der EGS: Getriebedaten |
| 0xCF7F | Signal von der DSC: Lenkradwinkel |
| 0xCF81 | Signal von der DSC: Status DSC |
| 0xCF82 | Signal von der Motorsteuerung: Drehmoment 1 |
| 0xCF8C | Pruefstandsmodus |
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
| 0x522C | TAB_DID_1_3AB | TAB_DID_7AB | FF_Hardware_2n | - |
| 0x5228 | TAB_DID_1_3AB | TAB_DID_19AB | 0x18 | FF_Function_7n |
| 0x524F | TAB_DID_1_3AB | TAB_DID_19AB | 0x18 | FF_Function_7n |
| 0xFFFF | TAB_DID_1_3AB | TAB_DID_7AB | FF_Hardware_2n | - |

### IUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | Bordnetzspannung VGSG | V | - | unsigned char | - | - | 8 | - |
| 0x02 | Winkel auf Niveau Aktuatorwelle | - | high | unsigned int | - | - | - | - |
| 0x03 | Brueckentemperatur | ° | - | unsigned char | - | - | - | -40 |
| 0x04 | Status FSW | 0-n | - | 0xff | TAB_S_stMainCtl | - | - | - |
| 0x05 | Bordnetzspannung LMV Klemme 30 | V | - | unsigned char | - | - | 8 | - |
| 0x06 | Bordnetzspannung LMV Klemme 30g | V | - | unsigned char | - | - | 8 | - |
| 0x07 | Status Fahrzeug Zustand | text | - | 1 | - | - | - | - |
| 0x08 | [DSC] Sollwertvorgabe Moment | Nm | - | unsigned char | - | 8 | - | - |
| 0x09 | [LMV] Sollwertumsetzung Moment | Nm | - | unsigned char | - | 8 | - | - |
| 0x0A | [LMV] Service Qualifier | text | - | 2 | - | - | - | - |
| 0x0B | ATIC Status Register B1 | Hex | high | unsigned int | - | - | - | - |
| 0x0C | ATIC Status Register B2 | Hex | high | unsigned int | - | - | - | - |
| 0x0D | ST_VEH_CON | 0-n | high | 0xf000 | TAB_SUB_ST_VEH_CON_N1a | - | - | - |
| 0x0E | Status BSW | 0-n | high | 0x0f00 | TAB_SUB_Status_BSW_N1b | - | - | - |
| 0x0F | Status FSW | 0-n | high | 0x003f | TAB_SUB_Status_FSW_N3a | - | - | - |
| 0x10 | Stat_SysUpTime | 0-n | high | 0x00c0 | TAB_SUB_Status_SystemUpTime_N3b | - | - | - |
| 0x11 | Local Condition FSW | Hex | high | unsigned int | - | - | - | - |
| 0x12 | SystemUp Time | ms | high | unsigned int | - | 10 | - | - |
| 0x13 | Local Condition BSW | Hex | - | unsigned char | - | - | - | - |
| 0x14 | Stat WD Dis. | 0-n | - | 0xC0 | TAB_SUB_WD_Disabled_7a | - | - | - |
| 0x15 | Task ID | 0-n | - | 0x3F | TAB_SUB_Task_ID_7b | - | - | - |
| 0x16 | S12 Reset Register | Hex | - | unsigned char | - | - | - | - |
| 0x17 | V_VEH | km/h | - | signed char | - | 2 | - | - |
| 0x18 | NLR Status | 0-n | high | 0xFF | TAB_SUB_NLR_Status_10a | - | - | - |
| 0x19 | S_iSM | A | high | signed int | - | - | 16 | - |
| 0x1A | S_rpsDltTicSMmax | Grad/ms | - | unsigned char | - | - | - | - |
| 0x1B | S_nSM | U/min | - | signed char | - | - | - | - |
| 0x1C | Status_Bridge_Enable | 0-n | - | 0xE0 | TAB_SUB_Status_Bridge_Enable | - | - | - |
| 0x1D | SM_PWM | 0-n | - | 0x1F | TAB_SUB_SM_PWM_19b | - | - | - |
| 0x1E | phiCal | Grad | - | unsigned char | - | - | 2 | -16 |
| 0x1F | philCal_raw | Grad | - | unsigned char | - | - | 2 | -16 |
| 0x20 | ATIC_Response_Command_E | Hex | high | unsigned int | - | - | - | - |
| 0x21 | ATIC_Response_Command_D1 | Hex | high | unsigned int | - | - | - | - |
| 0x22 | ATIC_Response_Command_D2 | Hex | high | unsigned int | - | - | - | - |
| 0x23 | UKl30_Min_Anfilterung | V | - | unsigned char | - | - | 8 | - |
| 0x25 | Status FSW | 0-n | - | 0x3F | TAB_SUB_Status_FSW_N3a_Byte | - | - | - |
| 0x26 | Generic | 0-n | - | 0xC0 | TAB_SUB_Upper2Bit | - | - | - |
| 0xFF | unbekannte Umweltbedingung | 1 | - | unsigned char | - | 1 | 1 | 0 |

### TAB_LMV_WECKLEITUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | KL15 WakeUp aus |
| 0x01 | KL15 WakeUp ein |
| 0xFF | nicht definiert |

### TAB_LMV_KALIBRIERFUNKTION

| WERT | TEXT |
| --- | --- |
| 0x00 | deaktiviert |
| 0x01 | aktiviert |
| 0xFF | nicht definiert |

### TAB_LMV_CODIERSTATUS

| WERT | TEXT |
| --- | --- |
| 0x00 | Codierung passt nicht zu Fahrzeugdaten, aktuell ungültig codiert |
| 0x01 | Codierung passt zu Fahrzeugdaten, gültig codiert |
| 0xFF | nicht definiert |

### TAB_LMV_EEPROM_CODIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | keine gültige Erstcodierung vorhanden |
| 0x01 | gültige Erstcodierung vorhanden |
| 0xFF | nicht definiert |

### TAB_LMV_BAUREIHE

| WERT | TEXT |
| --- | --- |
| 16 | E70 |
| 17 | E71 |
| 40 | E84 |
| 0xXY | unbekannt |

### TAB_LMV_GETR_TYP

| WERT | TEXT |
| --- | --- |
| 0x00 | Handschaltung |
| 0x01 | Automatik |
| 0x02 | Steptronik |
| 0x03 | Sequentielles Schaltgetriebe |
| 0x04 | Doppelkupplungsgetriebe |
| 0x0f | Signal ungültig |

### TAB_LMV_QU_TRNRAO

| WERT | TEXT |
| --- | --- |
| 0x08 | Initialisierung |
| 0x01 | Signalwert ist gültig, abgesichert und plausibilisiert, Zustand/Status permanent |
| 0x09 | Signalwert ist gültig und abgesichert, Zustand/Status temporär |
| 0x02 | Signalwert ist gültig, Zustand/Status permanent |
| 0x03 | Signalqualität bzw. Überwachung eingeschränkt, Zustand/Status permanent |
| 0x0B | Signalqualität bzw. Überwachung eingeschränkt, Zustand/Status temporär |
| 0x04 | Ersatzwert ist im Nutzsignal gesetzt, Zustand/Status permanent |
| 0x0C | Abgleichwert ist im Nutzsignal gesetzt, Zustand/Status temporär |
| 0x06 | Signalwert ist ungültig, Zustand/Status permanent |
| 0x0E | Signalwert ist ungültig, Zustand/Status temporär |
| 0x07 | Sensor nicht vorhanden |
| 0x0F | Signal ungültig |

### TAB_LMV_SOLLWERTQUALIFIER

| WERT | TEXT |
| --- | --- |
| 0x20 | Sollwert umsetzen |
| 0x28 | Kupplung schnell oeffnen |
| 0x60 | Sollwert nicht umsetzen, Notlaufregler |
| 0x61 | Sollwert nicht umsetzen, Notlaufregler, RTA Abgleich |
| 0x62 | Sollwert nicht umsetzen, Notlaufregler, Kupplung schnell öffnen |
| 0x70 | Sollwert nicht vorhanden, Heckantrieb |
| 0x80 | Initialisierung |
| 0xE0 | Sollwert nicht vorhanden, Standby |
| 0xFF | Sollwert ungueltig |

### TAB_LMV_ECU_QUALIFIER

| WERT | TEXT |
| --- | --- |
| 0x00 | Zustand Initialisierung |
| 0x01 | Zustand Normalbetrieb |
| 0x02 | Zustand Normalbetrieb/Überspannung sensiert |
| 0x03 | Zustand Normalbetrieb/Unterspannung sensiert |
| 0x04 | Zustand Diagnose |
| 0x05 | Zustand Diagnose/Überspannung sensiert |
| 0x06 | Zustand Diagnose/Unterspannung sensiert |
| 0x07 | Zustand Powerdown |
| 0x08 | Zustand PowerSave |
| 0x09 | Zustand nicht verfügbar |
| 0xFF | Signal ungültig |

### TAB_LMV_ISTMOMENTQUALIFIER

| WERT | TEXT |
| --- | --- |
| 0x02 | Signalwert gültig |
| 0x06 | Signalwert ungültig |
| 0x08 | Initialisierung |
| 0x0C | Abgleichwert |
| 0xFF | nicht definiert |

### TAB_4004_1

| WERT | TEXT |
| --- | --- |
| 0x0800 | Initialisierung |
| 0x0200 | Service verfügbar |
| 0x0B00 | Service temporär eingeschränkt verfügbar - Akutschutz aktiv |
| 0x0300 | Service permanent eingeschränkt verfügbar - Langzeitschutz aktiv |
| 0x0600 | Service nicht verfügbar - Fehler |
| 0x0E00 | Service nicht verfügbar - Standby |

### TAB_4004_2

| WERT | TEXT |
| --- | --- |
| 0x0000 | Notlaufregler nicht aktiv |
| 0x0080 | Notlaufregler aktiv |

### TAB_4004_3

| WERT | TEXT |
| --- | --- |
| 0x0000 | Position LMV Stellglied bekannt |
| 0x0040 | Position LMV Stellglied nicht bekannt |

### TAB_4004_4

| WERT | TEXT |
| --- | --- |
| 0x0000 | LMV Schutzfunktion nicht aktiv |
| 0x0020 | LMV Schutzfunktion aktiv |

### TAB_LMV_VV_KUPPLUNG

| WERT | TEXT |
| --- | --- |
| 0x0000 | volle Verfügbarkeit Kupplung Stufe 0, THR_STRS_CLT = 0-50% |
| 0x0001 | eingeschränkte Verfügbarkeit Kupplung Stufe 1, THR_STSR_CLT = 51-80% |
| 0x0002 | eingeschränkte Verfügbarkeit Kupplung Stufe 2, THR_STRS_CLT = 81-100% |
| 0xFFFF | unplausibel |

### TAB_LMV_VV_STELLGLIED

| WERT | TEXT |
| --- | --- |
| 0x0000 | volle Verfügbarkeit Stellglied Stufe 0, THR_STRS_CLT = 0-30% |
| 0x0004 | eingeschränkte Verfügbarkeit Stellglied Stufe 1, THR_STSR_CLT = 31-50% |
| 0x0008 | eingeschränkte Verfügbarkeit Stellglied Stufe 2, THR_STRS_CLT = 51-80% |
| 0x000C | eingeschränkte Verfügbarkeit Stellglied Stufe 3, THR_STRS_CLT = 81-100% |
| 0xFFFF | unplausibel |

### TAB_S_STMAINCTL

| WERT | UWTEXT |
| --- | --- |
| 1 | Kalibrierung läuft |
| 2 | Momentenstellen |
| 3 | erhöhte Toleranz Aktuatorschutzmodell (inaktiv) |
| 4 | Maximalmoment begrenzt Aktuatorschutzmodell |
| 5 | Kupplung ist geöffnet |
| 6 | Anschlagsuche |
| 7 | Kupplung wird geöffnet |
| 8 | Erstkalibrierung läuft |
| 9 | 9 |
| 10 | keine Kupplungsansteuerung möglich |
| 11 | 11 |
| 12 | 12 |
| 13 | 13 |
| 14 | 14 |
| 15 | 15 |
| 16 | 16 |
| 17 | 17 |
| 18 | 18 |
| 19 | 19 |
| 20 | 20 |
| 21 | Position unbekannt (Anschlagsuche fehlgeschalgen) |
| 22 | 22 |
| 23 | 23 |
| 24 | 24 |
| 25 | 25 |
| 26 | 26 |
| 27 | 27 |
| 28 | 28 |
| 29 | 29 |
| 30 | 30 |
| 31 | 31 |
| 32 | 32 |
| 33 | 33 |
| 34 | 34 |
| 35 | 35 |
| 36 | 36 |
| 37 | 37 |
| 38 | 38 |
| 39 | 39 |
| 40 | 40 |
| 41 | 41 |
| 42 | 42 |
| 43 | 43 |
| 44 | 44 |
| 45 | 45 |
| 46 | 46 |
| 47 | 47 |
| 48 | 48 |
| 49 | 49 |
| 50 | 50 |
| 51 | 51 |
| 52 | 52 |
| 53 | 53 |
| 54 | 54 |
| 55 | 55 |
| 56 | 56 |
| 57 | 57 |
| 58 | 58 |
| 59 | 59 |
| 60 | 60 |
| 61 | 61 |
| 62 | 62 |
| 63 | 63 |
| 64 | 64 |
| 65 | 65 |
| 66 | 66 |
| 67 | 67 |
| 68 | 68 |
| 69 | 69 |
| 70 | 70 |
| 71 | 71 |
| 72 | 72 |
| 73 | 73 |
| 74 | 74 |
| 75 | 75 |
| 76 | 76 |
| 77 | 77 |
| 78 | 78 |
| 79 | 79 |
| 80 | 80 |
| 81 | 81 |
| 82 | 82 |
| 83 | 83 |
| 84 | 84 |
| 85 | 85 |
| 86 | 86 |
| 87 | 87 |
| 88 | 88 |
| 89 | 89 |
| 90 | 90 |
| 91 | 91 |
| 92 | 92 |
| 93 | 93 |
| 94 | 94 |
| 95 | 95 |
| 96 | 96 |
| 97 | 97 |
| 98 | 98 |
| 99 | 99 |
| 100 | 100 |
| 101 | 101 |
| 102 | 102 |
| 103 | 103 |
| 104 | 104 |
| 105 | 105 |
| 106 | 106 |
| 107 | 107 |
| 108 | 108 |
| 109 | 109 |
| 110 | 110 |
| 111 | 111 |
| 112 | 112 |
| 113 | 113 |
| 114 | 114 |
| 115 | 115 |
| 116 | 116 |
| 117 | 117 |
| 118 | 118 |
| 119 | 119 |
| 120 | 120 |
| 121 | 121 |
| 122 | 122 |
| 123 | 123 |
| 124 | 124 |
| 125 | 125 |
| 126 | 126 |
| 127 | 127 |
| 128 | 128 |
| 129 | 129 |
| 130 | 130 |
| 131 | 131 |
| 132 | 132 |
| 133 | 133 |
| 134 | 134 |
| 135 | 135 |
| 136 | 136 |
| 137 | 137 |
| 138 | 138 |
| 139 | 139 |
| 140 | 140 |
| 141 | 141 |
| 142 | 142 |
| 143 | 143 |
| 144 | 144 |
| 145 | 145 |
| 146 | 146 |
| 147 | 147 |
| 148 | 148 |
| 149 | 149 |
| 150 | 150 |
| 151 | 151 |
| 152 | 152 |
| 153 | 153 |
| 154 | 154 |
| 155 | 155 |
| 156 | 156 |
| 157 | 157 |
| 158 | 158 |
| 159 | 159 |
| 160 | 160 |
| 161 | 161 |
| 162 | 162 |
| 163 | 163 |
| 164 | 164 |
| 165 | 165 |
| 166 | 166 |
| 167 | 167 |
| 168 | 168 |
| 169 | 169 |
| 170 | 170 |
| 171 | 171 |
| 172 | 172 |
| 173 | 173 |
| 174 | 174 |
| 175 | 175 |
| 176 | 176 |
| 177 | 177 |
| 178 | 178 |
| 179 | 179 |
| 180 | 180 |
| 181 | 181 |
| 182 | 182 |
| 183 | 183 |
| 184 | 184 |
| 185 | 185 |
| 186 | 186 |
| 187 | 187 |
| 188 | 188 |
| 189 | 189 |
| 190 | 190 |
| 191 | 191 |
| 192 | 192 |
| 193 | 193 |
| 194 | 194 |
| 195 | 195 |
| 196 | 196 |
| 197 | 197 |
| 198 | 198 |
| 199 | 199 |
| 200 | 200 |
| 201 | 201 |
| 202 | 202 |
| 203 | 203 |
| 204 | 204 |
| 205 | 205 |
| 206 | 206 |
| 207 | 207 |
| 208 | 208 |
| 209 | 209 |
| 210 | 210 |
| 211 | 211 |
| 212 | 212 |
| 213 | 213 |
| 214 | 214 |
| 215 | 215 |
| 216 | 216 |
| 217 | 217 |
| 218 | 218 |
| 219 | 219 |
| 220 | 220 |
| 221 | 221 |
| 222 | 222 |
| 223 | 223 |
| 224 | 224 |
| 225 | 225 |
| 226 | 226 |
| 227 | 227 |
| 228 | 228 |
| 229 | 229 |
| 230 | 230 |
| 231 | 231 |
| 232 | 232 |
| 233 | 233 |
| 234 | 234 |
| 235 | 235 |
| 236 | 236 |
| 237 | 237 |
| 238 | 238 |
| 239 | 239 |
| 240 | 240 |
| 241 | 241 |
| 242 | 242 |
| 243 | 243 |
| 244 | 244 |
| 245 | 245 |
| 246 | 246 |
| 247 | 247 |
| 248 | 248 |
| 249 | 249 |
| 250 | 250 |
| 251 | 251 |
| 252 | 252 |
| 253 | 253 |
| 254 | Init-Wert |
| 255 | Fehlerwert |
| 0xFFFF | unplausibel |

### TAB_S_STTCMAIN

| WERT | TEXT |
| --- | --- |
| 0 | Kein Status bekannt |
| 1 | Initialisierung |
| 2 | Kupplung betriebsbereit |
| 3 | Kalibrierung/Funktionstest wird durchgeführt |
| 4 | Fehler VTG mit bekannter Position |
| 5 | Fehler VTG mit unbekannter Position |
| 7 | Signal ungültig |
| 0xFF | unplausibel |

### TAB_S_STTCERROR

| WERT | TEXT |
| --- | --- |
| 0 | Kein Fehler erkannt |
| 1 | Kupplung temporär stillgelegt wegen zu hohem Belastungsgrad |
| 2 | Kupplung in Notregelung, weicher Kupplungsfehler |
| 3 | Kupplung komplett stillgelegt (Stromversorgung unterbrochen) |
| 4 | VTG macht Kupplungsansteuerung eigenständig, DXC-Ausfall |
| 5 | Stellgenauigkeit nicht erfüllt (Lamellenverschleiß) |
| 7 | Signal ungültig |
| 0xFF | unplausibel |

### TAB_HWE_ID

| WERT | TEXT |
| --- | --- |
| 159 | B4 |
| 149 | B5 |
| 139 | B6 |
| 129 | B7 |
| 99 | C0 |
| 89 | C1 |
| 79 | C2 |
| 69 | C3 |
| 29 | D0 |
| 19 | D1 |
| 09 | D2 |
| 00 | D3 |
| 250 | Defaultwert (entspricht B4) |
| 254 | Initialwert (Signal ungültig) |
| 255 | Fehlerwert (Signal ungültig) |
| 0xXY | unbekannt |

### TAB_ATIC_ID

| WERT | TEXT |
| --- | --- |
| 0x0340 | silicon A1 or A2 |
| 0x0341 | silicon B1 |
| 0xFFFF | unbekannt |

### TAB_MCU_FAMILY

| WERT | TEXT |
| --- | --- |
| 0xD4 | MC9S12XF512 (or family derivate) |
| 0xXY | unbekannt |

### TAB_MCU_MASK

| WERT | TEXT |
| --- | --- |
| 0x80 | 0M64J (nicht-eindeutige Detektionsmethode) |
| 0x81 | 1M64J or 2M64J (nicht-eindeutige Detektionsmethode) |
| 0xD4800001 | 0M64J |
| 0xD4810001 | 1M64J |
| 0xD4810006 | 2M64J |
| 0xXY | unbekannt |

### TAB_KALIBRIERUNG_INFO

| WERT | TEXT |
| --- | --- |
| 0 | nicht kalibriert |
| 1 | kalibriert |
| 0xXY | unbekannt |

### TAB_KLASSIERUNG_OFFSET

| WERT | TEXT |
| --- | --- |
| 0 | Offset unklassiert, Ersatzwert neutrale Offset Klasse |
| 1 | Offset klassiert |
| 0xXY | nicht definiert |

### TAB_KLASSIERUNG_GAIN

| WERT | TEXT |
| --- | --- |
| 0 | Steigung unklassiert, Ersatzwert neutrale Klasse |
| 1 | Steigung klassiert |
| 0xXY | nicht definiert |

### TAB_GETRIEBEKLASSE_GEARBOX

| WERT | TEXT |
| --- | --- |
| 0 | Getriebe unklassiert |
| 1 | Getriebeklasse ATC x50 |
| 2 | Getriebeklasse ATClight |
| 0xXY | nicht definiert |

### TAB_GETRIEBEKLASSE_OFFSET

| WERT | TEXT |
| --- | --- |
| 0 | Offset unklassiert |
| 1 | Offset klassiert ATC x50 |
| 2 | Offset klassiert ATClight |
| 0xXY | nicht definiert |

### TAB_GETRIEBEKLASSE_GAIN

| WERT | TEXT |
| --- | --- |
| 0 | Steigung unklassiert |
| 1 | Steigung klassiert ATC x50 |
| 2 | Steigung klassiert ATClight |
| 0xXY | nicht definiert |

### TAB_SUB_STATUS_FSW_N3A

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | Defaultwert |
| 0x0001 | Kalibrierung läuft |
| 0x0002 | Momentenstellen |
| 0x0003 | erhöhte Toleranz Aktuatorschutzmodell (inaktiv) |
| 0x0004 | Maximalmoment begrenzt Aktuatorschutzmodell |
| 0x0005 | Kupplung ist geöffnet |
| 0x0006 | Anschlagsuche |
| 0x0007 | Kupplung wird geöffnet |
| 0x0008 | Erstkalibrierung läuft |
| 0x0009 | Ersatzprogramm wird ausgeführt |
| 0x000A | keine Kupplungsansteuerung möglich |
| 0x000B | Ersatzprogramm beenden |
| 0x0015 | Position unbekannt (Anschlagsuche fehlgeschlagen) |
| 0x003e | Initialwert |
| 0x003f | Fehlerwert |
| 0xXYXY | unplausibel |

### TAB_SUB_STATUS_BSW_N1B

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | APPL_STATE_STARTUP |
| 0x0100 | APPL_STATE_PRE_KL15HIGH |
| 0x0200 | APPL_STATE_NORMAL_OPERATION |
| 0x0300 | APPL_STATE_RESTART |
| 0x0400 | APPL_STATE_RESET |
| 0x0500 | APPL_STATE_SHUTDOWN_PH1 |
| 0x0600 | APPL_STATE_SHUTDOWN_PH2 |
| 0x0700 | APPL_STATE_SHUTDOWN_PH3 |
| 0x0800 | APPL_STATE_CANCEL_SHUTDOWN |
| 0xXYXY | nicht definiert |

### TAB_DID_10AB

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x18 | 0x19 |

### TAB_SUB_STATUS_SYSTEMUPTIME_N3B

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | 0-Power_On |
| 0x0040 | 1-KL15_an |
| 0x0080 | 2-VKM_ein |
| 0x00C0 | 3-Nachlauf |
| 0xXY | nicht definiert |

### TAB_SUB_TASK_ID_7B

| WERT | UWTEXT |
| --- | --- |
| 0xXY | 0xXY |

### TAB_LMV_VEHDATA_STAT

| WERT | TEXT |
| --- | --- |
| 0x00 | 000 - Signal nicht empfangen (TO oder Busfehler usw.) |
| 0x01 | 001 - Signal empfangen/ In Codierung akzeptiert (alles i.O.) |
| 0x02 | 010 - Signal empfangen/ nicht akzeptiert (Wert nicht in der Autocodierungstabelle gefunden)  |
| 0x03 | 011 - Signal empfangen/ nicht geprüft (alle weiteren Werte, die zwar empfangen aber nicht mehr in der Autocodierungstabelle geprüft wurden)  |
| 0x04 | 100 - Defaultwert |
| 0x05 | 101 - Klemmenwechsel erforderlich |
| 0x06 | 110 - EEPROM-Daten corrupt, Klemmenwechsel erforderlich |
| 0x07 | 111 - Timeout beim Schreiben bzw. Konsistenz-Check von NVM-Daten |
| 0xFF | nicht definiert |

### TAB_SUB_ST_VEH_CON_N1A

| WERT | UWTEXT |
| --- | --- |
| 0x0000 | Klemme 15 AUS, Motor aus |
| 0x1000 | Klemme 15 AUS, Motor startet |
| 0x2000 | Klemme 15 AUS, Motor läuft |
| 0x3000 | Klemme 15 AUS, Motor, Signal ungültig |
| 0x4000 | Klemme 15 EIN, Motor aus |
| 0x5000 | Klemme 15 EIN, Motor startet |
| 0x6000 | Klemme 15 EIN, Motor läuft |
| 0x7000 | Klemme 15 EIN,  Motor, Signal ungültig |
| 0x8000 | Klemme 15 Reserviert, Motor aus |
| 0x9000 | Klemme 15 Reserviert, Motor startet |
| 0xA000 | Klemme 15 Reserviert, Motor läuft |
| 0xB000 | Klemme 15 Reserviert,  Motor, Signal ungültig |
| 0xC000 | Klemme 15 Signal ungültig, Motor aus |
| 0xD000 | Klemme 15 Signal ungültig, Motor startet |
| 0xE000 | Klemme 15 Signal ungültig, Motor läuft |
| 0xF000 | Klemme 15 Signal ungültig,  Motor, Signal ungültig |
| 0xXYXY | nicht definiert |

### TAB_DID_19AB

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x1C | 0x1D |

### TAB_DID_7AB

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x14 | 0x15 |

### TAB_SUB_S_ISM_10B

| WERT | UWTEXT |
| --- | --- |
| 0xXY | 0xXY |

### TAB_SUB_WD_DISABLED_7A

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Port PJ1=Low -- Port PJ2=Low |
| 0x40 | Port PJ1=Low -- Port PJ2=High |
| 0x80 | Port PJ1=High -- Port PJ2=Low |
| 0xC0 | Port PJ1=High -- Port PJ2=High |
| 0xXY | nicht definiert |

### TAB_SUB_NLR_STATUS_10A

| WERT | UWTEXT |
| --- | --- |
| 0x00 | NLR nicht aktiv |
| 0x40 | NLR aktiv |
| 0x80 | NLR Abbruch |
| 0xC0 | Einachsrollen-Prüfstandmodus |
| 0xXY | nicht definiert |

### TAB_SUB_SM_PWM_19B

| WERT | UWTEXT |
| --- | --- |
| 0 | 93,75% |
| 1 | 87,5% |
| 2 | 81,25% |
| 3 | 75% |
| 4 | 68,75% |
| 5 | 62,5% |
| 6 | 56,25% |
| 7 | 50% |
| 8 | 43,75% |
| 9 | 37,5% |
| 10 | 31,25% |
| 11 | 25% |
| 12 | 18,75% |
| 13 | 12,5% |
| 14 | 6,25% |
| 15 | 0% |
| 16 | -6,25% |
| 17 | -12,5% |
| 18 | -18,75% |
| 19 | -25% |
| 20 | -31,25% |
| 21 | -37,5% |
| 22 | -43,75% |
| 23 | -50% |
| 24 | -56,25% |
| 25 | -62,5% |
| 26 | -68,75% |
| 27 | -75% |
| 28 | -81,25% |
| 29 | -87,5% |
| 30 | -93,75% |
| 31 | -100% |
| 0xXY | 0xXY |

### TAB_SUB_STATUS_BRIDGE_ENABLE

| WERT | UWTEXT |
| --- | --- |
| 0x00 | ATIC=0,BSW=0,FSW=0 |
| 0x20 | ATIC=0,BSW=0,FSW=1 |
| 0x40 | ATIC=0,BSW=1,FSW=0 |
| 0x60 | ATIC=0,BSW=1,FSW=1 |
| 0x80 | ATIC=1,BSW=0,FSW=0 |
| 0xA0 | ATIC=1,BSW=0,FSW=1 |
| 0xC0 | ATIC=1,BSW=1,FSW=0 |
| 0xE0 | ATIC=1,BSW=1,FSW=1 |
| 0xXY | nicht definiert |

### FF_HARDWARE_2N

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | 0x05 | 0x03 | 0x0B | 0x0C | 0x11 | 0x12 | 0x13 | 0x16 | 0x17 |

### FF_FUNCTION_7N

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | 0x19 | 0x02 | 0x11 | 0x12 | 0x17 | 0x1A | 0x1B | 0x1E | 0x1F |

### TAB_DID_1_3AB

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x0D | 0x0E | 0x0F | 0x10 |

### TAB_STAT_EEPROM

| WERT | TEXT |
| --- | --- |
| 0x00 | EEPROM ok,  STAT_EEPROM_xy_WERT=Dead/Rdy Sektoren |
| 0x01 | EEPROM Test nicht ok - Abfrage fehlgeschlagen, STAT_EEPROM_xy_WERT ungültig |
| 0x20 | Falsche Partionierung des EEPROM,  STAT_EEPROM_xy_WERT=ERPART |
| 0x40 | Falsche Partionierung des EEPROM,  STAT_EEPROM_xy_WERT=DFPART |
| 0x80 | EEPROM defekt,  STAT_EEPROM_xy_WERT=Dead/Rdy Sektoren |
| 0xXY | unbekannt |

### TAB_DID_N29AB

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x26 | 0x25 |

### FF_HARDWARE_11N

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x13 | 0x20 | 0x21 | 0x22 | 0x23 | 0x03 | 0x0B | 0x0C |

### TAB_SUB_STATUS_FSW_N3A_BYTE

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Defaultwert |
| 0x01 | Kalibrierung läuft |
| 0x02 | Momentenstellen |
| 0x03 | erhöhte Toleranz Aktuatorschutzmodell (inaktiv) |
| 0x04 | Maximalmoment begrenzt Aktuatorschutzmodell |
| 0x05 | Kupplung ist geöffnet |
| 0x06 | Anschlagsuche |
| 0x07 | Kupplung wird geöffnet |
| 0x08 | Erstkalibrierung läuft |
| 0x09 | Ersatzprogramm wird ausgeführt |
| 0x0A | keine Kupplungsansteuerung möglich |
| 0x0B | Ersatzprogramm beenden |
| 0x15 | Position unbekannt (Anschlagsuche fehlgeschlagen) |
| 0x3e | Initialwert |
| 0x3f | Fehlerwert |
| 0xXYXY | unplausibel |

### TAB_SUB_UPPER2BIT

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Low Low |
| 0x40 | Low High |
| 0x80 | High Low |
| 0xC0 | High High |
| 0xXY | nicht definiert |

### TAB_SUB_NVM_RET_VAL

| WERT | UWTEXT |
| --- | --- |
| 0x00 | NVM_REQ_OK |
| 0x01 | NVM_REQ_NOT_OK |
| 0x02 | NVM_REQ_PENDING |
| 0x03 | NVM_REQ_LISTED |
| 0x04 | NVM_REQ_INTEGRITY_FAILED |
| 0x05 | NVM_REQ_NO_ROM_BLOCK |
| 0x06 | NVM_REQ_ROM_LOADED |
| 0x07 | NVM_REQ_PREV_WALKING_DATA |
| 0x08 | NVM_REQ_NV_INVALID |
| 0x09 | NVM_REQ_NV_BLANK |
| 0x0A | NVM_REQ_NV_ERASE_FAILED |
| 0x0B | NVM_REQ_CANCELED |
| 0x0C | NVM_REQ_RAM_INVALID |
| 0x0D | NVM_REQ_READ_ALL_FAILED |
| 0x0E | NVM_REQ_WRITE_ALL_FAILED |
| 0x0F | NVM_REQ_WRONG_CONFIG_ID |
| 0x10 | NVM_REQ_WRITE_RETRIES_FAILED |
| 0x11 | NVM_REQ_DRIVER_FAILED |
| 0xXY | nicht definiert |

### TAB_COD_ERROR_EXIT_PATH

| WERT | UWTEXT |
| --- | --- |
| 0x00 | AUTOCODING_UNKNOWN_ERROR_EXIT |
| 0x01 | AUTOCODING_UNCODED_DATA_ACQUISITION_ERROR_EXIT_1 |
| 0x02 | AUTOCODING_CODED_DATA_ACQUISITION_ERROR_EXIT_1 |
| 0x03 | AUTOCODING_CODED_DATA_ACQUISITION_ERROR_EXIT_2 |
| 0x04 | AUTOCODING_SAVING_DATA_ERROR_EXIT_1 |
| 0x05 | AUTOCODING_SAVING_DATA_ERROR_EXIT_2 |
| 0x06 | AUTOCODING_SETTING_DEFAULTCODING_ERROR_EXIT_1 |
| 0x07 | AUTOCODING_RESETTING_CODING_ERROR_EXIT_1 |
| 0x08 | AUTOCODING_RESETTING_CODING_ERROR_EXIT_2 |
| 0x09 | AUTOCODING_WRITING_DATA_TO_NVM_ERROR_EXIT_1 |
| 0x0A | AUTOCODING_TERMINATED_WITHOUT_ERROR_EXIT |
| 0x0B | AUTOCODING_SET_TO_DEFAULT_ERROR_EXIT_1 |
| 0xXY | nicht definiert |

### TAB_NVM_FAIL_STATE

| WERT | UWTEXT |
| --- | --- |
| 0x00 | DEFAULT |
| 0x01 | INIT |
| 0x02 | CHK_QUEUED |
| 0x03 | CHK_FAIL_QUEUE |
| 0x04 | CHK_IN_PRG |
| 0x05 | WRT_QUEUED |
| 0x06 | WRT_FAIL_QUEUE |
| 0x07 | CONTENT_EQUAL |
| 0x08 | WRT_IN_PRG |
| 0x09 | WRT_FINISHED |
| 0x0A | TIMEOUT |
| 0x0B | PREPARE |
| 0xXY | nicht definiert |

### FF_CODING_12N

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x27 | 0x28 | 0x29 | 0x2A | 0x2B |

### FF_CODING_12BN

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x2C | 0x2D | 0x2E | 0x2F | 0x30 | 0x31 |

### TAB_WRITE_SOLLMOMENT

| WERT | TEXT |
| --- | --- |
| 61 | 0x3D |
| 62 | 0x3E |
| 63 | 0x3F |
| 64 | 0x3F |
| 65 | 0x40 |
| 66 | 0x41 |
| 67 | 0x41 |
| 68 | 0x42 |
| 69 | 0x43 |
| 70 | 0x43 |
| 71 | 0x44 |
| 72 | 0x45 |
| 73 | 0x45 |
| 74 | 0x46 |
| 75 | 0x47 |
| 76 | 0x47 |
| 77 | 0x48 |
| 78 | 0x48 |
| 79 | 0x49 |
| 80 | 0x4A |
| 81 | 0x4A |
| 82 | 0x4B |
| 83 | 0x4B |
| 84 | 0x4C |
| 85 | 0x4D |
| 86 | 0x4D |
| 87 | 0x4E |
| 88 | 0x4E |
| 89 | 0x4F |
| 90 | 0x4F |
| 91 | 0x50 |
| 92 | 0x51 |
| 93 | 0x51 |
| 94 | 0x52 |
| 95 | 0x52 |
| 96 | 0x53 |
| 97 | 0x53 |
| 98 | 0x54 |
| 99 | 0x55 |
| 100 | 0x55 |
| 101 | 0x56 |
| 102 | 0x56 |
| 103 | 0x57 |
| 104 | 0x57 |
| 105 | 0x58 |
| 106 | 0x58 |
| 107 | 0x59 |
| 108 | 0x59 |
| 109 | 0x5A |
| 110 | 0x5A |
| 111 | 0x5B |
| 112 | 0x5B |
| 113 | 0x5C |
| 114 | 0x5C |
| 115 | 0x5D |
| 116 | 0x5D |
| 117 | 0x5E |
| 118 | 0x5E |
| 119 | 0x5F |
| 120 | 0x5F |
| 121 | 0x60 |
| 122 | 0x60 |
| 123 | 0x61 |
| 124 | 0x61 |
| 125 | 0x62 |
| 126 | 0x62 |
| 127 | 0x63 |
| 128 | 0x63 |
| 129 | 0x64 |
| 130 | 0x64 |
| 131 | 0x65 |
| 132 | 0x65 |
| 133 | 0x66 |
| 134 | 0x66 |
| 135 | 0x67 |
| 136 | 0x67 |
| 137 | 0x68 |
| 138 | 0x68 |
| 139 | 0x69 |
| 140 | 0x69 |
| 141 | 0x6A |
| 142 | 0x6A |
| 143 | 0x6B |
| 144 | 0x6B |
| 145 | 0x6B |
| 146 | 0x6C |
| 147 | 0x6C |
| 148 | 0x6D |
| 149 | 0x6D |
| 150 | 0x6E |
| 151 | 0x6E |
| 152 | 0x6F |
| 153 | 0x6F |
| 154 | 0x6F |
| 155 | 0x70 |
| 156 | 0x70 |
| 157 | 0x71 |
| 158 | 0x71 |
| 159 | 0x72 |
| 160 | 0x72 |
| 161 | 0x73 |
| 162 | 0x73 |
| 163 | 0x73 |
| 164 | 0x74 |
| 165 | 0x74 |
| 166 | 0x75 |
| 167 | 0x75 |
| 168 | 0x76 |
| 169 | 0x76 |
| 170 | 0x76 |
| 171 | 0x77 |
| 172 | 0x77 |
| 173 | 0x78 |
| 174 | 0x78 |
| 175 | 0x79 |
| 176 | 0x79 |
| 177 | 0x79 |
| 178 | 0x7A |
| 179 | 0x7A |
| 180 | 0x7B |
| 181 | 0x7B |
| 182 | 0x7B |
| 183 | 0x7C |
| 184 | 0x7C |
| 185 | 0x7D |
| 186 | 0x7D |
| 187 | 0x7D |
| 188 | 0x7E |
| 189 | 0x7E |
| 190 | 0x7F |
| 191 | 0x7F |
| 192 | 0x7F |
| 193 | 0x80 |
| 194 | 0x80 |
| 195 | 0x81 |
| 196 | 0x81 |
| 197 | 0x81 |
| 198 | 0x82 |
| 199 | 0x82 |
| 200 | 0x83 |
| 201 | 0x83 |
| 202 | 0x83 |
| 203 | 0x84 |
| 204 | 0x84 |
| 205 | 0x85 |
| 206 | 0x85 |
| 207 | 0x85 |
| 208 | 0x86 |
| 209 | 0x86 |
| 210 | 0x87 |
| 211 | 0x87 |
| 212 | 0x87 |
| 213 | 0x88 |
| 214 | 0x88 |
| 215 | 0x88 |
| 216 | 0x89 |
| 217 | 0x89 |
| 218 | 0x8A |
| 219 | 0x8A |
| 220 | 0x8A |
| 221 | 0x8B |
| 222 | 0x8B |
| 223 | 0x8B |
| 224 | 0x8C |
| 225 | 0x8C |
| 226 | 0x8D |
| 227 | 0x8D |
| 228 | 0x8D |
| 229 | 0x8E |
| 230 | 0x8E |
| 231 | 0x8E |
| 232 | 0x8F |
| 233 | 0x8F |
| 234 | 0x8F |
| 235 | 0x90 |
| 236 | 0x90 |
| 237 | 0x91 |
| 238 | 0x91 |
| 239 | 0x91 |
| 240 | 0x92 |
| 241 | 0x92 |
| 242 | 0x92 |
| 243 | 0x93 |
| 244 | 0x93 |
| 245 | 0x93 |
| 246 | 0x94 |
| 247 | 0x94 |
| 248 | 0x95 |
| 249 | 0x95 |
| 250 | 0x95 |
| 251 | 0x96 |
| 252 | 0x96 |
| 253 | 0x96 |
| 254 | 0x97 |
| 255 | 0x97 |
| 256 | 0x97 |
| 257 | 0x98 |
| 258 | 0x98 |
| 259 | 0x98 |
| 260 | 0x99 |
| 261 | 0x99 |
| 262 | 0x99 |
| 263 | 0x9A |
| 264 | 0x9A |
| 265 | 0x9A |
| 266 | 0x9B |
| 267 | 0x9B |
| 268 | 0x9B |
| 269 | 0x9C |
| 270 | 0x9C |
| 271 | 0x9C |
| 272 | 0x9D |
| 273 | 0x9D |
| 274 | 0x9D |
| 275 | 0x9E |
| 276 | 0x9E |
| 277 | 0x9E |
| 278 | 0x9F |
| 279 | 0x9F |
| 280 | 0x9F |
| 281 | 0xA0 |
| 282 | 0xA0 |
| 283 | 0xA0 |
| 284 | 0xA1 |
| 285 | 0xA1 |
| 286 | 0xA1 |
| 287 | 0xA2 |
| 288 | 0xA2 |
| 289 | 0xA2 |
| 290 | 0xA3 |
| 291 | 0xA3 |
| 292 | 0xA3 |
| 293 | 0xA4 |
| 294 | 0xA4 |
| 295 | 0xA4 |
| 296 | 0xA5 |
| 297 | 0xA5 |
| 298 | 0xA5 |
| 299 | 0xA6 |
| 300 | 0xA6 |

### TAB_PRUEFSTAND_INFO

| WERT | TEXT |
| --- | --- |
| 0x00 | Pruefstandsmodus nicht aktiviert |
| 0x01 | Pruefstandsmodus aktiviert |
| 0xXY | unplausibel |

### TAB_PRUEFSTAND_AUTOCODIERUNG

| WERT | TEXT |
| --- | --- |
| 0x00 | Default Codierung |
| 0xFF | Fahrzeugtypbotschaft wird verwendet |
| 0xXY | Autocodierungstabelle |

### TAB_PRUEFSTAND_VKM

| WERT | TEXT |
| --- | --- |
| 0x00 | VKM Aus |
| 0x01 | VKM Ein |
| 0xXY | unplausibel |
