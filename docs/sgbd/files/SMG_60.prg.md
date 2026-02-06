# SMG_60.prg

## General

|  |  |
| --- | --- |
| File | SMG_60.prg |
| Type | PRG |
| Jobs | 48 |
| Tables | 176 |
| Origin | BMW TI-430 Ruediger_Gall |
| Revision | 5.010 |
| Author | BMW TI-430 Ruediger_Gall |
| ECU Comment | GETRAG-7-Gang-Getriebe |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Sequentielles Schaltgetriebe der M-GmbH für den E60 und E63 |  |  |
| ORIGIN | string | BMW TI-430 Ruediger_Gall |  |  |
| REVISION | string | 5.010 |  |  |
| AUTHOR | string | BMW TI-430 Ruediger_Gall |  |  |
| COMMENT | string | GETRAG-7-Gang-Getriebe |  |  |
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

### FS_SPERREN

Sperren bzw. Freigeben des Fehlerspeichers KWP2000: $85 ControlDTCSetting Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SPERREN | string | "ja"   -> Fehlerspeicher sperren "nein" -> Fehlerspeicher freigeben table DigitalArgument TEXT |
| SG_ANTWORT | string | "ja"   -> SG soll antworten "nein" -> SG soll nicht antworten table DigitalArgument TEXT Default:  SG soll antworten |
| FUNKTIONAL | string | "ja"   -> Funktionale Adresse 0xEF wird benutzt nur in Verbindung mit SG_ANTWORT="nein" "nein" -> SG Adresse wird benutzt table DigitalArgument TEXT Default:  SG Adresse wird benutzt |

### HS_LESEN

Historyspeicher lesen (alle History-Meldungen / Ort und Art) KWP2000: $22 ReadDataByCommonIdentifier $2100 HistoryMemory Modus  : Default

_No arguments._

### HS_LESEN_DETAIL

Historypeicher lesen (alle History-Meldungen / Ort und Art) KWP2000: $22 ReadDataByCommonIdentifier $2101 - $21FF HistoryMemoryEntry Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Historycode Wenn dieser Parameter angegeben wird, wird die Position automatisch ermittelt. Es darf dann nicht argument F_POS angegeben werden |
| F_POS | int | gewaehlter Eintrag Wenn dieser Parameter angegeben wird, wird die Position benutzt. Wertebereich 1 - 255 Es darf dann nicht argument F_CODE angegeben werden |

### HS_LOESCHEN

Historyspeicher loeschen KWP2000: $31 StartRoutineByLocalIdentifier $03 ClearHistoryMemory Modus  : Default

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

### ENERGIESPARMODE

Einstellen des Energiesparmodes KWP2000: $31 StartRoutineByLocalIdentifier $0C ControlEnergySavingMode Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| PRODUKTIONSMODE | string | "ein" -> Produktions Mode ein "aus" -> Produktions Mode aus table DigitalArgument TEXT Default: "aus" |
| TRANSPORTMODE | string | "ein" -> Transport Mode ein "aus" -> Transport Mode aus table DigitalArgument TEXT Default: "aus" |
| WERKSTATTMODE | string | "ein" -> Werkstatt Mode ein "aus" -> Werkstatt Mode aus table DigitalArgument TEXT Default: "aus" |

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

### FLASH_PROGRAMMIER_STATUS_LESEN

Programmierstatus des SG lesen KWP2000: $31 StartRoutineByLocalIdentifier $0A CheckProgrammingStatus Modus  : Default

_No arguments._

### AIF_LESEN

Auslesen des Anwender Informations Feldes Standard Flashjob KWP 2000: $23 ReadMemoryByAddress Modus   : Default

| Name | Type | Description |
| --- | --- | --- |
| AIF_NUMMER | int | ==0 : aktuelles AIF > 0 : Nummer des zu lesenden AIF default = 0 : aktuelles AIF |

### STATUS_ISTWERTE

mit dem SGBD-Generator erzeugt

_No arguments._

### STATUS_FAHRZEUGTESTER

mit dem SGBD-Generator erzeugt

_No arguments._

### PROGRAMMERSTELLUNG

Datum der Programmerstellung (speziell fuer GETRAG) (Service ID 0x30, Identifier 0xA4)

_No arguments._

### RBM_RATIO

Dient zum Auslesen der OBD fehlerbezogenen RBM - Ratios (speziell fuer GETRAG) (Service ID 0x22, Identifier 0x53, 0x00)

_No arguments._

### PRUEFCODE_LESEN

Standard Pruefcode lesen fuer Kundendienst KWP2000: $1A ReadECUIdentification KWP2000: $18 ReadDiagnosticTroubleCodesByStatus KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes ---zusätzlich für VS: -------------------------- KWP2000: $30 A2 ADAPTIONSWERTE_GETRIEBE KWP2000: $22 10 VERSCHLEISSDATEN_LESEN KWP2000: $30 A0 ADAPTIONSWERTE_KUPPLUNG KWP2000: $30 A1 ADAPTIONSWERTE_KUPPLUNGSKENNLINIE KWP2000: $30 A3 ADAPTIONSWERTE_EINKUPPELZEITEN Modus  : Default

_No arguments._

### ADAPTIONSWERTE_KUPPLUNG

Adaptionswerte lesen (Service ID 0x30, Identifier 0xA0)

_No arguments._

### ADAPTIONSWERTE_KUPPLUNGSKENNLINIE

Adaptionswerte lesen (Service ID 0x30, Identifier 0xA1)

_No arguments._

### ADAPTIONSWERTE_GETRIEBE

Adaptionswerte lesen (Service ID 0x30, Identifier 0xA2)

_No arguments._

### ADAPTIONSWERTE_EINKUPPELZEITEN

Adaptionswerte lesen (Service ID 0x30, Identifier 0xA3)

_No arguments._

### ADAPTIONSWERTE_ZURUECKSETZEN

Adaptionswerte auf Defaultwerte zuruecksetzen von: Kupplungskennlinie (Service ID 0x30)  ACHTUNG: Im Anschluss Zuendung aus, um Defaultwerte abzuspeichern. Steuergeraete Abfall abwarten Ganganzeige im Kombi bleibt ca. 5s erhalten und faellt dann ab. oder Speichern per Diagnose

| Name | Type | Description |
| --- | --- | --- |
| ADAPTION | string | Argumet: KUPPLUNGSKENNLINIE |

### VERSCHLEISSDATEN_LESEN

Verschleissdaten lesen (Service ID 0x22)

_No arguments._

### VERSCHLEISSDATEN_LOESCHEN

Verschleissdaten loeschen (Service ID 0x2E)

| Name | Type | Description |
| --- | --- | --- |
| LOESCHEN | string | "ja" -> Verschleissdaten sollen geloescht werden |

### CODIERDATEN_LESEN

Codierdaten lesen (Service ID 0x22)

_No arguments._

### CODIERDATEN_SCHREIBEN

Codierung schreiben (Service ID 0x2E)

| Name | Type | Description |
| --- | --- | --- |
| CODIERUNG | string | Codierdaten fuer Auswahl: Argument: ROLLENBETRIEB oder    : RADABRISS ======NUR FUER ENTWICKLER:====================================================== oder    : AUSWERTUNG_HAUBE ==================================================================================  Rollenbetrieb (Nur Hinterachse in Rolle fuer Motorpruefstand) Hinweis: Schaltet sich bei v=35 km/h wieder ab. Radabrissfunktionsabschaltung Bei Adaption des Geberrades (DME) in der Line kann es zum Radabriss kommen. Deshalb abschalten. Auswertung Motorhaubenkontakte !!!!!!Aktivierung/Deaktivierung nur bei C-Steuergeräten möglich!!!!!!! C2-Steuergeräte reagieren nicht auf dieses Argument  ------- Codierung bleibt auch nach Zündungswechsel erhalten! -------  |
| AKTIVIERUNG | int | Argument: 0=inaktiv 1=aktiv |

### STEUERN_STELLGLIED

Ansteuern der Stellglieder  Argumente durch Semikolon trennen.

| Name | Type | Description |
| --- | --- | --- |
| STELLGL | string | Anzusteuerndes Stellglied Argument siehe: table STELLGLIEDER  STELLGLIED STEUERART1 STEUERART2 aus Spalte: STELLGLIED  Anlasserfreigabe, Hydropumpe, Stoeranzeige und Shiftlock werden ueber INAKTIV ausgeschaltet.  --ACHTUNG------------------------------------------------------------------ Hydropumpe schaltet nicht automatisch ab! Bei 100 bar oeffnet das Ueberdruckventil --Pumpe wird vorgeschaedigt, wenn mehrfach ueber das Ventil abgeblasen wird. Pumpe wird maximal 60 sek. angesteuert!  Argument: "RUECKGABE_AN_SG" gilt fuer alle Stellgieder. Rueckgabe der Kontrolle an das Steuergeraet. Einzelne Stellglieder koennen nicht zurückgenommen werden!  --Fuer Soll-Ist-Vergleich z.B. bei MAGNETVENTIL_KUPPLUNG------------------------- muss Job mehrfach angestossen werden, um endgueltige Position auszugeben (Z.B. einmaliges ausfuehren gibt nur momentane Pos. beim Einregeln zurueck) (Staendiges anstossen ist natuerlich auch moeglich.) (Sollposition=Adaptionswert) |
| STEUERART1 | string | Argument: POSITIONSVORGABE oder      STROMVORGABE oder      INAKTIV oder      AKTIV  Welches Argument fuer welches "STELLGL" moeglich ist siehe: table STELLGLIEDER  STELLGLIED STEUERART1  Besonderheit Kupplungsansteuerung bei POSITIONSVORGABE: 0 = Kupplung öffnen 1 = Kupplung an Schleifpunkt positionieren 2 = Kupplung schließen 3 = Kupplung nach Ablageposition >3 = einzustellende Position |
| STEUERART2 | string | Argument siehe: table STELLGLIEDER  STELLGLIED STEUERART1 STEUERART2 aus Spalte: STEUERART2 |

### STEUERN_TESTPRG_STOP

Beenden eines laufenden Testprogrammes (Sowie Zuruecksetzen des Zaehlers.) Muss VOR STEUERN_TESTPRG_STARTEN geschickt werden!

_No arguments._

### STEUERN_TESTPRG_STARTEN

Testprogramm starten Hinweis: Zuvor STEUERN_TESTPRG_STOP schicken! Weitere Istzustaende mittels STEUERN_TESTPRG_ISTZUSTAND auslesen!

| Name | Type | Description |
| --- | --- | --- |
| TESTPRG_NR | int | Argument: siehe: table Testprg  TESTPRG_NR TESTPRG_NAME Dauer typ. Dauer max. aus Spalte: TESTPRG_NR |
| AUSWAHLBYTE | int | Argument: Nur fuer (Testprg:0x21 hex) bel. Gang einlegen: 0 = Neutral, 1-7 = Gang 1-7, 8 = Rueckwaertsgang Alle anderen Testprg benoetigen kein Auswahlbyte. |

### STATUS_TESTPRG_ISTZUSTAND

Istzustand eines STEUERN_TESTPRG_STARTEN abfragen

| Name | Type | Description |
| --- | --- | --- |
| TESTPRG_NR | int | Argument: siehe: table Testprg  TESTPRG_NR TESTPRG_NAME Dauer typ. Dauer max. aus Spalte: TESTPRG_NR |

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
| 0x4F00 | Ebene 2 Getriebe |
| 0x4F01 | Ebene 2 RAM |
| 0x4F02 | Ebene 2 Input |
| 0x4F03 | Ebene 2 Kupplung |
| 0x4F04 | Ebene 3 |
| 0x4F20 | NVRAM Laden unplausibel |
| 0x4F21 | Auswertung ESTATE |
| 0x4F22 | Adaptionswerte Getriebe |
| 0x4F40 | Druckbandunterschreitung HE/Hydraulikeinheit |
| 0x4F41 | Druckbandueberschreitung HE/Hydraulikeinheit |
| 0x4F42 | Baugruppe HE/Hydraulikeinheit |
| 0x4F43 | Einschaltdauer HE/Hydraulikeinheit |
| 0x4F44 | Missbrauch HE/Hydraulikeinheit |
| 0x4F45 | Getriebetemperatur ueberschritten |
| 0x4F60 | Getriebeadaption |
| 0x4F61 | Offsetadaption des Laengsbeschleunigungssensors |
| 0x4F62 | Kupplungsadaption |
| 0x4F63 | Entlueftungen |
| 0x4F64 | Aktionsmodi |
| 0x4F65 | Energiesparmodi |
| 0x4F66 | Adaptionsprogramme Getriebe nicht vollstaendig durchgefuehrt |
| 0x4F67 | Adaptionsprogramme Kupplung nicht vollstaendig durchgefuehrt |
| 0x4F80 | Getriebeproblem |
| 0x4F81 | Uebersetzungspruefung unplausibel |
| 0x4FA0 | Ansteuerung Kupplung |
| 0x4FA1 | Kupplungsueberlastung |
| 0x5000 | Auswertung Motorhaubenkontakt |
| 0x5001 | Auswertung Motorhaubenkontakt im Fahrbetrieb |
| 0x5002 | Auswertung Waehlhebel |
| 0x5003 | Auswertung Wake up |
| 0x5004 | Auswertung Programmwahlschalter Plus |
| 0x5005 | Auswertung Programmwahlschalter Minus |
| 0x5006 | Auswertung Lenkradschalter + |
| 0x5007 | Auswertung Lenkradschalter - |
| 0x5008 | Auswertung Handbremse |
| 0x5100 | Auswertung Hydrauliktemperatur-Sensor |
| 0x5101 | Auswertung Hydraulikdrucksensor |
| 0x5102 | Auswertung Laengsbeschleunigung |
| 0x5103 | Spannungsversorgung Ubatt |
| 0x5104 | Spannungsversorgung A |
| 0x5105 | Spannungsversorgung B |
| 0x5106 | Auswertung Getriebepositionssensor Schaltstange R/1 Hauptsensor |
| 0x5107 | Auswertung Getriebepositionssensor Schaltstange R/1 redundanter Sensor |
| 0x5108 | Auswertung Getriebepositionssensor Schaltstange 5/3 |
| 0x5109 | Auswertung Getriebepositionssensor Schaltstange 2/4 |
| 0x510A | Auswertung Getriebepositionssensor Schaltstange 6/7 |
| 0x510B | Auswertung Getriebeeingangsdrehzahl |
| 0x510C | Auswertung Motordrehzahl (Sensor) |
| 0x510D | Auswertung Kupplungspositionssensor Hauptsensor |
| 0x510E | Auswertung Kupplungspositionssensor redundanter Sensor |
| 0x5200 | Auswertung Motordrehzahl (CAN) |
| 0x5201 | Auswertung Radgeschwindigkeit hinten links |
| 0x5202 | Auswertung Radgeschwindigkeit hinten rechts |
| 0x5203 | Auswertung Radgeschwindigkeit vorne links |
| 0x5204 | Auswertung Radgeschwindigkeit vorne rechts |
| 0x5206 | Auswertung Betriebsbremssignal |
| 0x5208 | Auswertung Drehmoment |
| 0x5209 | Auswertung Fahrpedal |
| 0x520A | Auswertung Lenkwinkel |
| 0x520B | Auswertung Querbeschleunigung |
| 0x520C | Auswertung Laengsbeschleunigung |
| 0x520D | Auswertung Leerlaufdrehzahl |
| 0x520E | Auswertung Status Geschwindigkeitsregelung |
| 0x520F | Auswertung Status Fahrertuer |
| 0x5210 | Auswertung Status Klemme R, 15 und 50 |
| 0x5211 | Auswertung Schluesselnummer |
| 0x5212 | Auswertung Status Anhaenger |
| 0x5213 | Auswertung Status Regelung |
| 0x5214 | Auswertung Status DSC |
| 0x5215 | Auswertung Status Verzoegerung |
| 0x5216 | Auswertung Status Quittierung DSC ASC |
| 0x5217 | Auswertung Bremsdruck |
| 0x5218 | Auswertung Drehzahl Temperaturbereich 1 |
| 0x5219 | Auswertung Drehzahl Temperaturbereich 2 |
| 0x521A | Auswertung Begrenzerdrehzahl |
| 0x521B | Auswertung Status OBD Steuerfunktionen |
| 0x521C | Auswertung Status Schalter Warmlauf |
| 0x5400 | Auswertung Shift Lock |
| 0x5401 | Auswertung Anlasserfreigabe |
| 0x5402 | Auswertung Hydraulikpumpenrelais |
| 0x5403 | Ansteuerung Waehlhebel LED R |
| 0x5404 | Ansteuerung Waehlhebel LED N |
| 0x5405 | Ansteuerung Waehlhebel LED S/D |
| 0x5406 | Ansteuerung Relais Getriebeoelpumpe |
| 0x5500 | Ansteuerung Getriebeventil DRV1 |
| 0x5501 | Ansteuerung Getriebeventil DRV2 |
| 0x5502 | Ansteuerung Getriebeventil PWV1 |
| 0x5503 | Ansteuerung Getriebeventil PWV2 |
| 0x5504 | Ansteuerung Getriebeventil PWV3 |
| 0x5505 | Ansteuerung Getriebeventil PWV4 |
| 0x5506 | Ansteuerung Kupplungsventil |
| 0x5507 | Spannungsversorgung Magnetventile PWV1, PWV3 und PWV4 |
| 0x5508 | Spannungsversorgung Magnetventile DRV1, DRV2 |
| 0x5509 | Spannungsversorgung Magnetventile PWV2 und Kupplungsventil |
| 0xCF07 | Botschaft Bus Off PT CAN |
| 0xCF12 | Botschaft Fahrlicht |
| 0xCF13 | Botschaft Raddruecke |
| 0xCF0B | Bus Off Local CAN |
| 0xCF14 | Botschaft Aussentemperatur Relativzeit |
| 0xCF15 | Botschaft Bedienung Getriebewahlschalter |
| 0xCF16 | Botschaft Geschwindigkeit |
| 0xCF17 | Botschaft Kilometerstand Istwert/Reichweite |
| 0xCF18 | Botschaft Klemmenstatus |
| 0xCF19 | Botschaft Lenkradwinkel |
| 0xCF1A | Botschaft Radgeschwindigkeit |
| 0xCF1B | Botschaft Radtoleranzabgleich |
| 0xCF1C | Botschaft Status Anhaenger |
| 0xCF1D | Botschaft Status DSC |
| 0xCF1E | Botschaft Status Kombi |
| 0xCF1F | Botschaft ZV Klappenzustand |
| 0xCF20 | Botschaft Netzwerk Management |
| 0xCF25 | Botschaft DME 1 |
| 0xCF26 | Botschaft DME 2 |
| 0xCF27 | Botschaft DME 3 |
| 0xCF28 | Botschaft Drehmoment 1 |
| 0xCF29 | Botschaft Drehmoment 3 |
| 0xCF2A | Botschaft Motordaten |
| 0xCF2B | Botschaft M-Drive |
| 0xCF30 | Botschaft Checkcontrol-Meldung |
| 0xCF31 | Botschaft Anzeige Getriebedaten |
| 0xCF32 | Botschaft Drehmomentanforderung EGS |
| 0xCF33 | Botschaft Verzoegerungsanforderung ACC |
| 0xCF34 | Botschaft Getriebedaten |
| 0xCF35 | Botschaft SMG 1 |
| 0xCF36 | Botschaft SMG 2 |
| 0xCF37 | Botschaft SMG 3 |
| 0xCF38 | Botschaft Rohdaten Laengsbeschleunigung |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | ja |
| F_ART_ERW | nein |
| F_PCODE | ja |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### FUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x4F00 | Ebene20x4F00bis02 | DigeinResetfest | 0x009C | GetriebeKuppFussStatus |
| 0x4F01 | Ebene20x4F00bis02 | DigeinResetfest | 0x009C | GetriebeKuppFussStatus |
| 0x4F02 | Ebene20x4F00bis02 | DigeinResetfest | 0x009C | GetriebeKuppFussStatus |
| 0x4F03 | Ebene2Kupplung0x4F03 | - | - | - |
| 0x4F04 | 0x0094 | Ebene30x4F04 | 0x0180 | - |
| 0x4F20 | 0x0094 | 0x005B | 0x0180 | NvramLaden0x4F20 |
| 0x4F21 | 0x0094 | Estate0x4F21 | GetriebeKuppFussStatus | - |
| 0x4F22 | 0x00F0 | - | - | - |
| 0x4F40 | Hydraulik0x4F40bis42 | 0x00CC | - | - |
| 0x4F41 | Hydraulik0x4F40bis42 | 0x00CC | - | - |
| 0x4F42 | Hydraulik0x4F40bis42 | 0x0098 | 0x0099 | 0x00CC |
| 0x4F43 | Hydraulik0x4F43 | 0x0098 | 0x0099 | 0x00CC |
| 0x4F44 | Hydraulik0x4F44 | 0x0098 | 0x0099 | 0x00CC |
| 0x4F45 | Getriebetemp0x4F45 | 0x0076 | - | - |
| 0x4F60 | 0x00F0 | 0x00E2 | 0x00E3 | 0x00E4 |
| 0x4F61 | 0x00F0 | 0x00E2 | 0x00E3 | 0x00E4 |
| 0x4F62 | 0x00F0 | 0x00E2 | 0x00E3 | 0x00E4 |
| 0x4F63 | 0x00F0 | 0x00E2 | 0x00E3 | 0x00E4 |
| 0x4F64 | 0x00F0 | 0x00E2 | 0x00E3 | 0x00E4 |
| 0x4F65 | - | - | - | - |
| 0x4F66 | 0x00F0 | - | - | - |
| 0x4F67 | 0x00F0 | - | - | - |
| 0x4F80 | 0x00F0 | Getriebeproblem0x4F80 | 0x00F1 | 0x0085 |
| 0x4F81 | Uebersetzungsp0x4F81 | 0x0089 | - | - |
| 0x4FA0 | Kupplung0x4FA0_A1 | 0x0029 | - | - |
| 0x4FA1 | Kupplung0x4FA0_A1 | 0x003E | 0x0029 | - |
| 0x5000 | 0x00F0 | MotorhaubenkontakteRoh | MotorhaubenkontakteIst | 0x0055 |
| 0x5001 | 0x00F0 | MotorhaubenkontakteRoh | MotorhaubenkontakteIst | 0x0055 |
| 0x5002 | Wahlhebel0x5002 | WahlhebelsignaleRoh | WahlhebelsignaleIst | FahrtrichtWahlhebel |
| 0x5003 | 0x00F0 | 0x00C2 | 0x0039 | 0x005B |
| 0x5004 | 0x00F0 | Prgwahl0x5004_05_1 | Prgwahl0x5004_05_2 | 0x005A |
| 0x5005 | 0x00F0 | Prgwahl0x5004_05_1 | Prgwahl0x5004_05_2 | 0x005A |
| 0x5006 | 0x00F0 | Lenkrad10x5006_07 | Lenkrad20x5006_07 | 0x005A |
| 0x5007 | 0x00F0 | Lenkrad10x5006_07 | Lenkrad20x5006_07 | 0x005A |
| 0x5008 | Laengsbeschl0x5008 | 0x0005 | 0x0029 | Handbremse0x5008 |
| 0x5100 | 0x00F0 | 0x0050 | 0x00ED | 0x0051 |
| 0x5101 | Hydraulikdrucksens0x5101 | - | - | - |
| 0x5102 | Laengsbeschleunigung | 0x00EB | 0x0055 | 0x0029 |
| 0x5103 | 0x00F0 | 0x0052 | Sensorspannung | - |
| 0x5104 | 0x00F0 | Sensorspannung | 0x0053 | 0x0065 |
| 0x5105 | 0x00F0 | Sensorspannung | 0x0054 | 0x0066 |
| 0x5106 | SchaltstangeR10x5106_07 | 0x00AD | - | - |
| 0x5107 | SchaltstangeR10x5106_07 | 0x00AD | - | - |
| 0x5108 | Sensorposition0x5108bis0A | 0x0078 | 0x00A6 | 0x0098 |
| 0x5109 | Sensorposition0x5108bis0A | 0x0077 | 0x00A5 | 0x0098 |
| 0x510A | Sensorposition0x5108bis0A | 0x0079 | 0x00A7 | 0x0098 |
| 0x510B | Getriebeeingang0x510B | 0x0098 | 0x0099 | - |
| 0x510C | Motordrehz0x510C_5200 | 0x0143 | 0x0098 | 0x0099 |
| 0x510D | Kupplungsposition0x510D_E | 0x00AC | 0x0099 | - |
| 0x510E | Kupplungsposition0x510D_E | 0x00AC | 0x0099 | - |
| 0x5200 | Motordrehz0x510C_5200 | 0x0143 | 0x0098 | 0x0099 |
| 0x5201 | RadgeschwHL0x5201 | 0x005B | GetriebeKuppFussStatus | - |
| 0x5202 | RadgeschwHR0x5202 | 0x005B | GetriebeKuppFussStatus | - |
| 0x5203 | RadgeschwVL0x5203 | 0x005B | 0x0098 | 0x0099 |
| 0x5204 | RadgeschwVR0x5204 | 0x005B | 0x0098 | 0x0099 |
| 0x5206 | Betriebsbremssig0x5206 | 0x0005 | BremsZuendsig0x5206 | - |
| 0x5208 | Drehmoment0x5208 | 0x005B | - | - |
| 0x5209 | 0x00F0 | 0x0046 | 0x0115 | 0x003D |
| 0x520A | Lenkwinkel0x520A | 0x005B | - | - |
| 0x520B | 0x00F0 | 0x0002 | 0x0027 | 0x005B |
| 0x520C | Laengsbeschl0x520C | 0x005B | - | - |
| 0x520D | 0x00F0 | 0x006B | 0x0045 | 0x006C |
| 0x520E | 0x00F0 | 0x003D | 0x00D9 | 0x004D |
| 0x520F | 0x00F0 | 0x003D | 0x00F2 | 0x0038 |
| 0x5210 | KlemmeR_15_500x5210 | 0x005B | - | - |
| 0x5211 | 0x00F0 | 0x009A | 0x0041 | 0x00D8 |
| 0x5212 | 0x00F0 | 0x0003 | 0x0037 | 0x003E |
| 0x5213 | 0x00F0 | 0x00CF | 0x00D7 | 0x004A |
| 0x5214 | 0x00F0 | 0x00CF | 0x00D7 | 0x004A |
| 0x5215 | 0x00F0 | 0x00DA | 0x004E | - |
| 0x5216 | 0x00F0 | 0x00D6 | 0x004C | - |
| 0x5217 | 0x00F0 | 0x0004 | 0x0028 | 0x00CE |
| 0x5218 | 0x00F0 | DrehzahlTemp10x5218 | 0x0099 | - |
| 0x5219 | 0x00F0 | DrehzahlTemp20x5219 | 0x0099 | - |
| 0x521A | 0x00F0 | Begrenzerdrehzahl0x521A | 0x0099 | - |
| 0x521B | 0x00F0 | 0x00D5 | 0x004B | - |
| 0x521C | 0x00F0 | 0x00DB | 0x004F | - |
| 0x5400 | SPG_MDrehz0x5400_01 | StatusDigitaleAusgaenge | FahrtrichtWahlhebel | ShiftLock0x5400 |
| 0x5401 | SPG_MDrehz0x5400_01 | StatusDigitaleAusgaenge | FahrtrichtWahlhebel | Anlasserfreigabe0x5401 |
| 0x5402 | Hydpumpe0x5402 | 0x0123 | 0x0075 | 0x00AB |
| 0x5403 | 0x00F0 | 0x0181 | 0x013A | FahrtrichtWahlhebel |
| 0x5404 | 0x00F0 | 0x0181 | 0x013B | FahrtrichtWahlhebel |
| 0x5405 | 0x00F0 | 0x0181 | 0x013C | FahrtrichtWahlhebel |
| 0x5406 | RelaisGetrOelp0x5406_1 | 0x00C6 | 0x0076 | 0x017D |
| 0x5500 | GetriebeventilDRV10x5500 | 0x000B | 0x0182 | - |
| 0x5501 | GetriebeventilDRV20x5501 | 0x000C | 0x0182 | - |
| 0x5502 | GetriebeventilR_10x5502 | 0x0010 | 0x00C8 | 0x0182 |
| 0x5503 | Getriebeventil5_30x5503 | 0x000E | 0x00C8 | 0x0182 |
| 0x5504 | Getriebeventil6_70x5504 | 0x000D | 0x00C8 | 0x0182 |
| 0x5505 | Getriebeventil2_40x5505 | 0x000F | 0x00C8 | 0x0182 |
| 0x5506 | Kupplungsventil0x5506 | 0x00CA | 0x0182 | - |
| 0x5507 | 0x00F0 | Magnetventile0x5507 | 0x00C8 | - |
| 0x5508 | MagnetventileDRV1_20x5508 | 0x00C9 | 0x0060 | - |
| 0x5509 | Magnetventil5_30x5509 | 0x00CA | - | - |
| 0xCF07 | FehlerstatusCANBus | - | - | - |
| 0xCF0B | FehlerstatusCANBus | - | - | - |
| 0xCF12 | FehlerstatusCANBus | - | - | - |
| 0xCF13 | FehlerstatusCANBus | - | - | - |
| 0xCF14 | FehlerstatusCANBus | - | - | - |
| 0xCF15 | FehlerstatusCANBus | - | - | - |
| 0xCF16 | FehlerstatusCANBus | - | - | - |
| 0xCF17 | FehlerstatusCANBus | - | - | - |
| 0xCF18 | FehlerstatusCANBus | - | - | - |
| 0xCF19 | FehlerstatusCANBus | - | - | - |
| 0xCF1A | FehlerstatusCANBus | - | - | - |
| 0xCF1B | FehlerstatusCANBus | - | - | - |
| 0xCF1C | FehlerstatusCANBus | - | - | - |
| 0xCF1D | FehlerstatusCANBus | - | - | - |
| 0xCF1E | FehlerstatusCANBus | - | - | - |
| 0xCF1F | FehlerstatusCANBus | - | - | - |
| 0xCF20 | FehlerstatusCANBus | - | - | - |
| 0xCF25 | FehlerstatusCANBus | - | - | - |
| 0xCF26 | FehlerstatusCANBus | - | - | - |
| 0xCF27 | FehlerstatusCANBus | - | - | - |
| 0xCF28 | FehlerstatusCANBus | - | - | - |
| 0xCF29 | FehlerstatusCANBus | - | - | - |
| 0xCF2A | FehlerstatusCANBus | - | - | - |
| 0xCF2B | FehlerstatusCANBus | - | - | - |
| 0xCF30 | FehlerstatusCANBus | - | - | - |
| 0xCF31 | FehlerstatusCANBus | - | - | - |
| 0xCF32 | FehlerstatusCANBus | - | - | - |
| 0xCF33 | FehlerstatusCANBus | - | - | - |
| 0xCF34 | FehlerstatusCANBus | - | - | - |
| 0xCF35 | FehlerstatusCANBus | - | - | - |
| 0xCF36 | FehlerstatusCANBus | - | - | - |
| 0xCF37 | FehlerstatusCANBus | - | - | - |
| 0xCF38 | FehlerstatusCANBus | - | - | - |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | Laengsbeschleunigung (CAN) | m/s^2 | high | signed int | - | 0.025 | - | - |
| 0x0002 | Querbeschleunigung (CAN) | m/s^2 | high | signed int | - | 0.025 | - | - |
| 0x0003 | Anhaengerstatus (CAN): | 0-n | - | 0xFF | FUmweltTexte16 | - | - | - |
| 0x0004 | Bremsdruck (CAN) | bar | - | unsigned char | - | - | - | - |
| 0x0005 | Bremssignale: | 0-n | - | 0xFF | FUmweltTexte6 | - | - | - |
| 0x0006 | Byte Empfangskennung PT CAN | - | high | unsigned int | - | - | - | - |
| 0x0007 | Byte Sendekennung PT CAN | - | - | unsigned char | - | - | - | - |
| 0x0008 | Byte Empfangskennung Local CAN | - | - | unsigned char | - | - | - | - |
| 0x0009 | Byte Sendekennung Local CAN | - | - | unsigned char | - | - | - | - |
| 0x000A | Duty-Cycle Kupplung | % | high | unsigned int | - | 0.001526 | - | - |
| 0x000B | Duty-Cycle Druckregler 1 | % | high | unsigned int | - | 0.001526 | - | - |
| 0x000C | Duty-Cycle Druckregler 2 | % | high | unsigned int | - | 0.001526 | - | - |
| 0x000D | Duty-Cycle Schaltzylinder 2/4 | % | high | unsigned int | - | 0.001526 | - | - |
| 0x000E | Duty-Cycle Schaltzylinder 5/3 | % | high | unsigned int | - | 0.001526 | - | - |
| 0x000F | Duty-Cycle Schaltzylinder 6/7 | % | high | unsigned int | - | 0.001526 | - | - |
| 0x0010 | Duty-Cycle Schaltzylinder R/1 | % | high | unsigned int | - | 0.001526 | - | - |
| 0x0011 | Fehlercode MU | - | - | unsigned char | - | - | - | - |
| 0x0012 | Fehlercode MC | - | - | unsigned char | - | - | - | - |
| 0x0013 | Status Fahrzeugzustand (CAN): | 0-n | - | 0x00FF | FUmweltTexte17 | - | - | - |
| 0x0014 | Aktueller Gang 0= Neutral, 1-7= Gang, 8= Rueckwaertsgang | - | - | unsigned char | - | - | - | - |
| 0x0015 | Fahrpedalwert (CAN) | % | high | unsigned char | - | - | - | - |
| 0x0016 | Handbremssignal (CAN): | 0-n | - | 0xFF | FUmweltTexte18 | - | - | - |
| 0x0017 | Iststrom DRV1 Rohwert | mA | high | unsigned int | - | - | - | - |
| 0x0018 | Iststrom DRV2 Rohwert | mA | high | unsigned int | - | - | - | - |
| 0x0019 | Iststrom PWV1 Rohwert | mA | high | unsigned int | - | - | - | - |
| 0x001A | Iststrom PWV2 Rohwert | mA | high | unsigned int | - | - | - | - |
| 0x001B | Iststrom PWV3 Rohwert | mA | high | unsigned int | - | - | - | - |
| 0x001C | Iststrom PWV4 Rohwert | mA | high | unsigned int | - | - | - | - |
| 0x001D | Sollstrom DRV1 | mA | high | unsigned int | - | - | - | - |
| 0x001E | Sollstrom DRV2 | mA | high | unsigned int | - | - | - | - |
| 0x001F | Sollstrom PWV1 | mA | high | unsigned int | - | - | - | - |
| 0x0020 | Sollstrom PWV2 | mA | high | unsigned int | - | - | - | - |
| 0x0021 | Sollstrom PWV3 | mA | high | unsigned int | - | - | - | - |
| 0x0022 | Sollstrom PWV4 | mA | high | unsigned int | - | - | - | - |
| 0x0023 | Iststrom Magnetventil Kupplung Rohwert | mA | high | unsigned int | - | - | - | - |
| 0x0024 | Sollstrom Magnetventil Kupplung | mA | high | unsigned int | - | - | - | - |
| 0x0025 | Laengsbeschleunigung Istwert (CAN) | m/s^2 | high | signed int | - | 0.1 | - | - |
| 0x0026 | Laengsbeschleunigung Istwert (Sensor) | m/s^2 | high | signed int | - | 0.00625 | - | - |
| 0x0027 | Querbeschleunigung Istwert (CAN) | m/s^2 | high | signed int | - | 0.01 | - | - |
| 0x0028 | Bremsdruck Istwert | bar | high | unsigned char | - | - | - | - |
| 0x0029 | Bremssignale Istwert: | 0-n | - | 0xFF | FUmweltTexte19 | - | - | - |
| 0x002A | Handbremssignal gefilterter Istwert (Digitaleingang 1) | 0/1 | high | 0x0001 | - | - | - | - |
| 0x002B | Programmwahlschalter Plus gefilterter Istwert (Digitaleingang 1) | 0/1 | high | 0x0800 | - | - | - | - |
| 0x002C | Programmwahlschalter Minus gefilterter Istwert (Digitaleingang 1) | 0/1 | high | 0x1000 | - | - | - | - |
| 0x002D | Motorhaubenkontakt 1 gefilterter Istwert (Digitaleingang 1) | 0/1 | high | 0x4000 | - | - | - | - |
| 0x002E | Motorhaubenkontakt 2 gefilterter Istwert (Digitaleingang 1) | 0/1 | high | 0x8000 | - | - | - | - |
| 0x002F | Waehlhebelsignal S1 gefilterter Istwert (Digitaleingang 1) | 0/1 | high | 0x0004 | - | - | - | - |
| 0x0030 | Waehlhebelsignal S2 gefilterter Istwert (Digitaleingang 1) | 0/1 | high | 0x0008 | - | - | - | - |
| 0x0031 | Waehlhebelsignal E1 gefilterter Istwert (Digitaleingang 1) | 0/1 | high | 0x0010 | - | - | - | - |
| 0x0032 | Waehlhebelsignal E2 gefilterter Istwert (Digitaleingang 1) | 0/1 | high | 0x0020 | - | - | - | - |
| 0x0033 | Waehlhebelsignal N1 gefilterter Istwert (Digitaleingang 1) | 0/1 | high | 0x0040 | - | - | - | - |
| 0x0034 | Waehlhebelsignal N2 gefilterter Istwert (Digitaleingang 1) | 0/1 | high | 0x0080 | - | - | - | - |
| 0x0035 | Waehlhebelsignal R1 gefilterter Istwert (Digitaleingang 1) | 0/1 | high | 0x0100 | - | - | - | - |
| 0x0036 | Waehlhebelsignal R2 gefilterter Istwert (Digitaleingang 1) | 0/1 | high | 0x0200 | - | - | - | - |
| 0x0037 | Status Anhaenger | 0/1 | high | 0x0001 | - | - | - | - |
| 0x0038 | Status Tuerkontakt (Digitaleingang Ist 1) (0=zu, 1=auf) | 0/1 | high | 0x0080 | - | - | - | - |
| 0x0039 | Wake up gefilterter Istwert | 0/1 | high | 0x0001 | - | - | - | - |
| 0x003A | Lenkradtaster Plus gefilterter Istwert | 0/1 | high | 0x0020 | - | - | - | - |
| 0x003B | Lenkradtaster Minus gefilterter Istwert | 0/1 | high | 0x0040 | - | - | - | - |
| 0x003C | Fahrtrichtung: | 0-n | high | 0xFF | FUmweltTexte2 | - | - | - |
| 0x003D | Fahrpedalwert Istwert | % | high | signed int | - | - | 10 | - |
| 0x003E | Kupplungsschutzklasse: | 0-n | high | 0xFF | FUmweltTexte20 | - | - | - |
| 0x003F | Lenkwinkel Istwert | Grad | high | signed int | - | - | - | - |
| 0x0040 | Drehmoment Motor Istwert | Nm | high | signed int | - | - | - | - |
| 0x0041 | Schluesselnummer Istwert: | 0-n | - | 0xFF | FUmweltTexte21 | - | - | - |
| 0x0042 | Begrenzerdrehzahl Motor Istwert | 1/min | high | unsigned int | - | - | - | - |
| 0x0043 | Getriebeeingangsdrehzahl Istwert | 1/min | high | signed int | - | - | - | - |
| 0x0044 | Getriebeausgangsdrehzahl | 1/min | high | signed int | - | - | - | - |
| 0x0045 | Leerlaufdrehzahl Motor Istwert | 1/min | high | unsigned int | - | - | - | - |
| 0x0046 | Motordrehzahl Istwert | 1/min | high | signed int | - | - | - | - |
| 0x0047 | Drehzahl Temperaturbereich 1 Istwert | 1/min | high | unsigned int | - | - | - | - |
| 0x0048 | Drehzahl Temperaturbereich 2 Istwert | 1/min | high | unsigned int | - | - | - | - |
| 0x0049 | Hydraulikdruck Istwert | bar | high | unsigned int | - | 0.1 | - | - |
| 0x004A | Status Fahrstabilitaetsprogramm Istwert: | 0-n | - | 0xFF | FUmweltTexte22 | - | - | - |
| 0x004B | Byte OBD Steuerfunktionen Istwert | - | - | unsigned char | - | - | - | - |
| 0x004C | Status Quittierung DSC ACC Istwert: | 0-n | - | 0xFF | FUmweltTexte24 | - | - | - |
| 0x004D | Status Geschwindikgeitsregler Istwert: | 0-n | - | 0xFF | FUmweltTexte25 | - | - | - |
| 0x004E | Status Verzoegerung Istwert: | 0-n | - | 0xFF | FUmweltTexte26 | - | - | - |
| 0x004F | Status Schalter Warmlauf Istwert: | 0-n | - | 0xFF | FUmweltTexte27 | - | - | - |
| 0x0050 | Hydrauliktemperatur Istwert | Grad C | - | unsigned char | - | - | - | -48 |
| 0x0051 | Motortemperatur (Kuehlwasser) Istwert | Grad C | - | unsigned char | - | - | - | -48 |
| 0x0052 | Spannungsversorgung Ubatt Istwert | V | high | unsigned int | - | 25 | 1024 | - |
| 0x0053 | Sensorspannungsversorgung A Istwert | V | high | unsigned int | - | - | 1024 | - |
| 0x0054 | Sensorspannungsversorgung B Istwert | V | high | unsigned int | - | - | 1024 | - |
| 0x0055 | Fahrzeuggeschwindigkeit | km/h | high | signed int | - | - | 16 | - |
| 0x0056 | Radgeschwindigkeit hinten links Istwert | km/h | high | signed int | - | - | 16 | - |
| 0x0057 | Radgeschwindigkeit hinten rechts Istwert | km/h | high | signed int | - | - | 16 | - |
| 0x0058 | Radgeschwindigkeit vorne links Istwert | km/h | high | signed int | - | - | 16 | - |
| 0x0059 | Radgeschwindigkeit vorne rechts Istwert | km/h | high | signed int | - | - | 16 | - |
| 0x005A | Waehlhebelposition: | 0-n | high | 0xFF | FUmweltTexte5 | - | - | - |
| 0x005B | Zuendsignal: | 0-n | high | 0xFF | FUmweltTexte28 | - | - | - |
| 0x005C | Kilometerstand | km | high | long[] | - | - | - | - |
| 0x005D | Lenkwinkel (CAN) | Grad | high | signed int | - | 0.04395 | - | - |
| 0x005E | Fehlerstatus ungueltige Checks. der Abgleichwerte: | 0-n | - | 0xFF | FUmweltTexte29 | - | - | - |
| 0x005F | Fehlerstatus HSD 1 Schaltzylinder R/1, 6/7 und 2/4: | 0-n | - | 0xFF | FUmweltTexte29 | - | - | - |
| 0x0060 | Fehlerstatus HSD 2 Druckregler 1 und 2: | 0-n | - | 0xFF | FUmweltTexte29 | - | - | - |
| 0x0061 | Fehlerstatus HSD 3 Schaltzylinder 5/3 und Kupplung: | 0-n | - | 0xFF | FUmweltTexte29 | - | - | - |
| 0x0062 | Fehlerstatus EEPROM-Daten: | 0-n | - | 0xFF | FUmweltTexte29 | - | - | - |
| 0x0063 | Fehlerstatus Oszillatorfrequenz: | 0-n | - | 0xFF | FUmweltTexte29 | - | - | - |
| 0x0064 | Fehlerstatus SPI Kommunikation: | 0-n | - | 0xFF | FUmweltTexte29 | - | - | - |
| 0x0065 | Fehlerstatus Sensorversorgung A: | 0-n | - | 0xFF | FUmweltTexte29 | - | - | - |
| 0x0066 | Fehlerstatus Sensorversorgung B: | 0-n | - | 0xFF | FUmweltTexte29 | - | - | - |
| 0x0067 | Drehmoment Motor (CAN) | Nm | high | signed int | - | - | 2 | - |
| 0x0068 | Begrenzerdrehzahl Motor (CAN) | 1/min | high | unsigned int | - | - | - | - |
| 0x0069 | Motordrehzahl Rohwert (Sensor) | 1/min | high | signed int | - | - | - | - |
| 0x006A | Getriebeeingangsdrehzahl Rohwert | 1/min | high | signed int | - | - | - | - |
| 0x006B | Leerlaufdrehzahl Motor (CAN) | 1/min | - | unsigned char | - | 5 | - | - |
| 0x006C | Motordrehzahl (CAN) | 1/min | high | signed int | - | - | - | - |
| 0x006D | Drehzahl Temperaturbereich 1 (CAN) | 1/min | - | unsigned char | - | 50 | - | - |
| 0x006E | Drehzahl Temperaturbereich 2 (CAN) | 1/min | - | unsigned char | - | 50 | - | - |
| 0x006F | Duty-Cycle Signal OSC_IN | - | - | unsigned int | - | - | - | - |
| 0x0070 | Periodendauer Signal OSC_IN | - | - | unsigned int | - | - | - | - |
| 0x0071 | Status Shift Lock (Digitaleingang) Sollwert | - | high | 0x0001 | - | - | - | - |
| 0x0072 | Status Waehlhebel LED R (Digitalausgang) Sollwert | 0/1 | high | 0x0002 | - | - | - | - |
| 0x0073 | Status Waehlhebel LED S/D (Digitalausgang) Sollwert | 0/1 | high | 0x0400 | - | - | - | - |
| 0x0074 | Status Anlasserfreigabe (Digitaleingang) Sollwert | 0/1 | high | 0x0080 | - | - | - | - |
| 0x0075 | Status Hydraulikpumpenrelais (Digitaleingang) Sollwert | 0/1 | high | 0x0100 | - | - | - | - |
| 0x0076 | Status Getriebeoelpumperelais Sollwert | 0/1 | high | 0x0200 | - | - | - | - |
| 0x0077 | Getriebepositionssensor Schaltstange 2/4 Istwert | Ink | high | signed int | - | - | - | - |
| 0x0078 | Getriebepositionssensor Schaltstange 5/3 Istwert | Ink | high | signed int | - | - | - | - |
| 0x0079 | Getriebepositionssensor Schaltstange 6/7 Istwert | Ink | high | signed int | - | - | - | - |
| 0x007A | Getriebepositionssensor Schaltstange R/1 Istwert | Ink | high | signed int | - | - | - | - |
| 0x007B | Redundanter Getriebeposionssensor Schaltstange R/1 Istwert | Ink | high | signed int | - | - | - | - |
| 0x007C | Getriebepositionssensor Schaltstange 2/4 Rohwert | Ink | high | signed int | - | - | - | - |
| 0x007D | Getriebepositionssensor Schaltstange 5/3 Rohwert | Ink | high | signed int | - | - | - | - |
| 0x007E | Getriebepositionssensor Schaltstange 6/7 Rohwert | Ink | high | signed int | - | - | - | - |
| 0x007F | Getriebepositionssensor Schaltstange R/1 Rohwert | Ink | high | signed int | - | - | - | - |
| 0x0080 | Redundanter Getriebeposionssensor Schaltstange R/1 Rohwert | Ink | high | signed int | - | - | - | - |
| 0x0081 | Getriebepositionssensor Schaltstange 2/4 Sollwert | Ink | high | signed int | - | - | - | - |
| 0x0082 | Getriebepositionssensor Schaltstange 5/3 Sollwert | Ink | high | signed int | - | - | - | - |
| 0x0083 | Getriebepositionssensor Schaltstange 6/7 Sollwert | Ink | high | signed int | - | - | - | - |
| 0x0084 | Getriebepositionssensor Schaltstange R/1 Sollwert | Ink | high | signed int | - | - | - | - |
| 0x0085 | Kupplungsposition Istwert | Ink | high | signed int | - | - | - | - |
| 0x0086 | Kupplungsposition Rohwert Hauptsensor | Ink | high | signed int | - | - | - | - |
| 0x0087 | Kupplungsposition Rohwert redundanter Sensor | Ink | high | signed int | - | - | - | - |
| 0x0088 | Kupplungsposition Sollwert | Ink | high | signed int | - | - | - | - |
| 0x0089 | Bremssignale resetfest: | 0-n | - | 0xFF | FUmweltTexte19 | - | - | - |
| 0x008A | Digitaleingang 1 resetfest: | 0-n | high | 0xFFFF | FUmweltTexte30 | - | - | - |
| 0x008B | Aktueller Gang resetfest 0= Neutral, 1-7= Gang, 8= Rueckwaertsgang | - | high | unsigned char | - | - | - | - |
| 0x008C | Kilometerstand Istwert resetfest | km | high | unsigned int | - | 8 | - | - |
| 0x008D | Motordrehzahl resetfest | 1/min | high | signed int | - | - | - | - |
| 0x008E | Kupplungsposition Istwert resetfest | Ink | high | signed int | - | - | - | - |
| 0x008F | Kupplungsposition Sollwert resetfest | Ink | high | signed int | - | - | - | - |
| 0x0090 | Getriebestatus resetfest: | 0-n | - | 0xFF | FUmweltTexte3 | - | - | - |
| 0x0091 | Spannungsversorgung Ubatt im resetfesten Bereich | V | high | signed int | - | - | 1024 | - |
| 0x0092 | Radgeschwindigkeit der Hinterachse im resetfesten Bereich | km/h | high | signed int | - | - | 16 | - |
| 0x0093 | Radgeschwindigkeit der Vorderachse im resetfesten Bereich | km/h | high | signed int | - | - | 16 | - |
| 0x0094 | Spannungsversorgung Ubatt Rohwert resetfest | V | high | signed int | - | 25 | 1024 | - |
| 0x0095 | Gewuenschter Gang resetfest 0= Neutral, 1-7= Gang, 8= Rueckwaertsgang | - | - | unsigned char | - | - | - | - |
| 0x0096 | Reset-Counter MC | - | - | unsigned char | - | - | - | - |
| 0x0097 | Reset-Counter MU | - | - | unsigned char | - | - | - | - |
| 0x0098 | Getriebestatus: | 0-n | - | 0xFF | FUmweltTexte3 | - | - | - |
| 0x0099 | Kupplungsstatus: | 0-n | - | 0xFF | FUmweltTexte4 | - | - | - |
| 0x009A | Schluesselnummer (CAN): | 0-n | - | 0xFF | FUmweltTexte21 | - | - | - |
| 0x009B | Resetzaehler Sicherheitskonzept Getriebe | - | - | unsigned char | - | - | - | - |
| 0x009C | Byte Fehlervariable des Sicherheitskonzeptes Getriebe | - | high | unsigned int | - | - | - | - |
| 0x009D | SPI Timeout | - | high | unsigned int | - | - | - | - |
| 0x009E | SPI Hardwarefehler | - | high | unsigned char | - | - | - | - |
| 0x009F | Byte Status BIOS-SW | - | high | unsigned int | - | - | - | - |
| 0x00A0 | Kennzeichnung Fehler Bremssignal | - | - | unsigned char | - | - | - | - |
| 0x00A1 | Fehlerstatus CAN Bus: | 0-n | - | 0xFF | FUmweltTexte31 | - | - | - |
| 0x00A2 | Fehlerstatus PWM-Ausgang Kupplung: | 0-n | - | 0xFF | FUmweltTexte32 | - | - | - |
| 0x00A3 | Fehlerstatus PWM-Ausgang Druckregler 1: | 0-n | - | 0xFF | FUmweltTexte32 | - | - | - |
| 0x00A4 | Fehlerstatus PWM-Ausgang Druckregler 2: | 0-n | - | 0xFF | FUmweltTexte32 | - | - | - |
| 0x00A5 | Fehlerstatus PWM-Ausgang Schaltzylinder 2/4: | 0-n | - | 0xFF | FUmweltTexte32 | - | - | - |
| 0x00A6 | Fehlerstatus PWM-Ausgang Schaltzylinder 5/3: | 0-n | - | 0xFF | FUmweltTexte32 | - | - | - |
| 0x00A7 | Fehlerstatus PWM-Ausgang Schaltzylinder 6/7: | 0-n | - | 0xFF | FUmweltTexte32 | - | - | - |
| 0x00A8 | Fehlerstatus PWM-Ausgang Schaltzylinder R/1: | 0-n | - | 0xFF | FUmweltTexte32 | - | - | - |
| 0x00A9 | Kennzeichnung fehlerhafte Motordrehzahl: | 0-n | - | 0xFF | FUmweltTexte33 | - | - | - |
| 0x00AA | Fehlerstatus Netzwerk Manangement: | 0-n | - | 0xFF | FUmweltTexte29 | - | - | - |
| 0x00AB | Fehlerstatus Ansteuerung Hydraulikpumpe: | 0-n | - | 0xFF | FUmweltTexte32 | - | - | - |
| 0x00AC | Kennzeichnung fehlerhafter Kupplungspositionssensor: | 0-n | - | 0xFF | FUmweltTexte34 | - | - | - |
| 0x00AD | Kennzeichnung fehlerhafter Getriebepositionssensor R/1: | 0-n | - | 0xFF | FUmweltTexte34 | - | - | - |
| 0x00AE | Fehlerstatus Ansteuerung Shift Lock: | 0-n | - | 0xFF | FUmweltTexte34 | - | - | - |
| 0x00AF | Fehlerstatus Ansteuerung Relais Anlasser: | 0-n | - | 0xFF | FUmweltTexte34 | - | - | - |
| 0x00B0 | Kennzeichnung fehlerhafte Fahrzeuggeschwindigkeit | - | - | unsigned char | - | - | - | - |
| 0x00B1 | Kennzeichnung fehlerhafte Raddrehzahl hinten links | - | - | unsigned char | - | - | - | - |
| 0x00B2 | Kennzeichnung fehlerhafte Raddrehzahl hinten rechts | - | - | unsigned char | - | - | - | - |
| 0x00B3 | Kennzeichnung fehlerhafte Raddrehzahl vorne links | - | - | unsigned char | - | - | - | - |
| 0x00B4 | Kennzeichnung fehlerhafte Raddrehzahl vorne rechts | - | - | unsigned char | - | - | - | - |
| 0x00B5 | Handbremssignal gefilterter Rohwert | 0/1 | high | 0x0001 | - | - | - | - |
| 0x00B6 | Programmwahlschalter Plus gefilterter Rohwert (Digitaleingang 1) | 0/1 | high | 0x0800 | - | - | - | - |
| 0x00B7 | Programmwahlschalter Minus gefilterter Rohwert (Digitaleingang 1) | 0/1 | high | 0x1000 | - | - | - | - |
| 0x00B8 | Motorhaubenkontakt 1 gefilterter Rohwert (Digitaleingang 1) | 0/1 | high | 0x4000 | - | - | - | - |
| 0x00B9 | Motorhaubenkontakt 2 gefilterter Rohwert (Digitaleingang 1) | 0/1 | high | 0x8000 | - | - | - | - |
| 0x00BA | Waehlhebelsignal S1 gefilterter Rohwert | 0/1 | high | 0x0004 | - | - | - | - |
| 0x00BB | Waehlhebelsignal S2 gefilterter Rohwert | 0/1 | high | 0x0008 | - | - | - | - |
| 0x00BC | Waehlhebelsignal E1 gefilterter Rohwert | 0/1 | high | 0x0010 | - | - | - | - |
| 0x00BD | Waehlhebelsignal E2 gefilterter Rohwert | 0/1 | high | 0x0020 | - | - | - | - |
| 0x00BE | Waehlhebelsignal N1 gefilterter Rohwert | 0/1 | high | 0x0040 | - | - | - | - |
| 0x00BF | Waehlhebelsignal N2 gefilterter Rohwert | 0/1 | high | 0x0080 | - | - | - | - |
| 0x00C0 | Waehlhebelsignal R1 gefilterter Rohwert | 0/1 | high | 0x0100 | - | - | - | - |
| 0x00C1 | Waehlhebelsignal R2 gefilterter Rohwert | 0/1 | high | 0x0200 | - | - | - | - |
| 0x00C2 | Wake up gefilterter Rohwert (Digitaleingang 2) | 0/1 | high | 0x0001 | - | - | - | - |
| 0x00C3 | Lenkradschalter Plus gefilterter Rohwert (Digitalwert 2) | 0/1 | high | 0x0020 | - | - | - | - |
| 0x00C4 | Lenkradschalter Minus gefilterter Rohwert (Digitalwert 2) | 0/1 | high | 0x0040 | - | - | - | - |
| 0x00C5 | Status Shift Lock (Digitaleingang) Rohwert | 0/1 | high | 0x0001 | - | - | - | - |
| 0x00C6 | Status Getriebeoelpumpenrelais Rohwert | 0/1 | high | 0x0200 | - | - | - | - |
| 0x00C8 | Status Ansteuerung HSD 1 (Digitalausgang) Rohwert | 0/1 | high | 0x2000 | - | - | - | - |
| 0x00C9 | Status Ansteuerung HSD 2 (Digitalausgang) Rohwert | 0/1 | high | 0x4000 | - | - | - | - |
| 0x00CA | Status Ansteuerung HSD 3 (Digitalausgang) Rohwert | 0/1 | high | 0x8000 | - | - | - | - |
| 0x00CB | Status Anlasserfreigabe (Digitalausgang) | 0/1 | high | 0x0080 | - | - | - | - |
| 0x00CC | Status Hydraulikpumpenrelais (Digitalausgang) | 0/1 | high | 0x0100 | - | - | - | - |
| 0x00CD | Status Waehlhebel LED N (Digitalausgang) Rohwert | 0/1 | high | 0x0200 | - | - | - | - |
| 0x00CE | Status Bremsdruck (CAN): | 0-n | - | 0xFF | FUmweltTexte35 | - | - | - |
| 0x00CF | Status DSC (CAN): | 0-n | - | 0xFF | FUmweltTexte36 | - | - | - |
| 0x00D0 | Klemmenstatus 15 (CAN): | 0-n | - | 0xFF | FUmweltTexte37 | - | - | - |
| 0x00D1 | Klemmenstatus 50 (CAN): | 0-n | - | 0xFF | FUmweltTexte38 | - | - | - |
| 0x00D2 | Klemmenstatus R (CAN): | 0-n | - | 0xFF | FUmweltTexte39 | - | - | - |
| 0x00D3 | Status Lenkwinkel (CAN): | 0-n | - | 0xFF | FUmweltTexte40 | - | - | - |
| 0x00D4 | Status Drehmoment Motor (CAN): | 0-n | - | 0xFF | FUmweltTexte41 | - | - | - |
| 0x00D5 | Byte OBD Steuerfunktion (CAN) | - | - | unsigned char | - | - | - | - |
| 0x00D6 | Status Quittierung DSC ACC (CAN): | 0-n | - | 0xFF | FUmweltTexte24 | - | - | - |
| 0x00D7 | Status Regelung (CAN): | 0-n | - | 0xFF | FUmweltTexte22 | - | - | - |
| 0x00D8 | Status Schluesselnummer (CAN): | 0-n | - | 0xFF | FUmweltTexte42 | - | - | - |
| 0x00D9 | Status Geschwindigkeitsregler (CAN): | 0-n | - | 0xFF | FUmweltTexte43 | - | - | - |
| 0x00DA | Status Verzoegerung (CAN): | 0-n | - | 0xFF | FUmweltTexte26 | - | - | - |
| 0x00DB | Status Schalter Warmlauf (CAN): | 0-n | - | 0xFF | FUmweltTexte27 | - | - | - |
| 0x00DC | Byte Fehlerursache Sicherheitskonzept Kupplung | - | - | unsigned char | - | - | - | - |
| 0x00DD | Variable fuers Abschalten | - | - | unsigned char | - | - | - | - |
| 0x00DE | Variable fuers Initialisieren: | 0-n | - | 0xFF | FUmweltTexte48 | - | - | - |
| 0x00DF | Fehlerstatus Ansteuerung Waehlhebel LED R: | 0-n | - | 0xFF | FUmweltTexte32 | - | - | - |
| 0x00E0 | Fehlerstatus Ansteuerung Waehlhebel LED N: | 0-n | - | 0xFF | FUmweltTexte32 | - | - | - |
| 0x00E1 | Fehlerstatus Ansteuerung Waehlhebel LED S/D: | 0-n | - | 0xFF | FUmweltTexte32 | - | - | - |
| 0x00E2 | Adaption bzw. Testprogramm   : | 0-n | - | 0xFF | FUmweltTexte51 | - | - | - |
| 0x00E3 | Fehlermeldung einer Adaption : | 0-n | - | 0xFF | FUmweltTexte52 | - | - | - |
| 0x00E4 | Adaptionzustand im Fehlerfall: | 0-n | - | 0xFF | FUmweltTexte53 | - | - | - |
| 0x00E5 | Laengsbeschleunigung Rohwert | mV | high | signed int | - | 4.833 | - | - |
| 0x00E6 | Radgeschwindigkeit der Hinterachse | km/h | high | signed int | - | - | 16 | - |
| 0x00E7 | Radgeschwindigkeit hinten links (CAN) | km/h | high | signed int | - | - | 16 | - |
| 0x00E8 | Radgeschwindigkeit hinten rechts (CAN) | km/h | high | signed int | - | - | 16 | - |
| 0x00E9 | Radgeschwindigkeit der Vorderachse | km/h | high | signed int | - | - | 16 | - |
| 0x00EA | Hydraulikdruck Rohwert | bar | high | signed int | - | 0.1 | - | - |
| 0x00EB | Sensorspannungsversorgung A Rohwert | V | high | signed int | - | - | 1024 | - |
| 0x00EC | Sensorspannungsversorgung B Rohwert | V | high | signed int | - | - | 1024 | - |
| 0x00ED | Hydrauliktemperatur Rohwert | Grad C | high | unsigned char | - | - | - | -48 |
| 0x00EE | Radgeschwindigkeit vorne links (CAN) | km/h | high | signed int | - | - | 16 | - |
| 0x00EF | Radgeschwindigkeit vorne rechts (CAN) | km/h | high | signed int | - | - | 16 | - |
| 0x00F0 | Spannungsversorgung Ubatt Rohwert | V | high | signed int | - | - | 1024 | - |
| 0x00F1 | Gewuenschter Gang 0=N, 1-7, 8=R | - | - | unsigned char | - | - | - | - |
| 0x00F2 | Status Tuerkontakt (CAN): | 0-n | - | 0xFF | FUmweltTexte45 | - | - | - |
| 0x00F3 | Byte Umgebungsvariable Sicherheitskonzept Kupplung | - | high | unsigned int | - | - | - | - |
| 0x00F4 | Fahrtichtung vorwaerts | 0/1 | high | 0x0001 | - | - | - | - |
| 0x00F5 | Fahrtichtung neutral | 0/1 | high | 0x0002 | - | - | - | - |
| 0x00F6 | Fahrtichtung rueckwaerts | 0/1 | high | 0x0004 | - | - | - | - |
| 0x00F7 | Fahrtichtungsignal ungueltig | 0/1 | high | 0x0010 | - | - | - | - |
| 0x00F8 | Waehlhebel in R (Rueckwaerts) | 0/1 | high | 0x0020 | - | - | - | - |
| 0x00F9 | Waehlhebel in 0 (Neutral) | 0/1 | high | 0x0040 | - | - | - | - |
| 0x00FA | Waehlhebel in A (Automatik) | 0/1 | high | 0x0080 | - | - | - | - |
| 0x00FB | Waehlhebel in S (Sequentiell) | 0/1 | high | 0x0100 | - | - | - | - |
| 0x00FC | Waehlhebel in + (Gang hoch) | 0/1 | high | 0x0200 | - | - | - | - |
| 0x00FD | Waehlhebel in - (Gang runter) | 0/1 | high | 0x0400 | - | - | - | - |
| 0x00FE | Waehlhebelposition nicht definiert | 0/1 | high | 0x0800 | - | - | - | - |
| 0x0100 | Handbremssignal CAN aktiv | 0/1 | high | 0x01 | - | - | - | - |
| 0x0101 | Handbremssignal gefiltert Rohwert aktiv | 0/1 | high | 0x02 | - | - | - | - |
| 0x0102 | Handbremssignal gefiltert Istwert aktiv | 0/1 | high | 0x04 | - | - | - | - |
| 0x0103 | Kennzeichung Fehler Antriebsdrehzahlen 1 | - | high | unsigned char | - | - | - | - |
| 0x0104 | Kennzeichung Fehler Antriebsdrehzahlen 2 | - | high | unsigned char | - | - | - | - |
| 0x0105 | Getriebestatus : geschaltet | 0/1 | high | 0x0001 | - | - | - | - |
| 0x0106 | Getriebestatus : aktiv | 0/1 | high | 0x0002 | - | - | - | - |
| 0x0107 | Getriebestatus : Zwischenkuppeln | 0/1 | high | 0x0004 | - | - | - | - |
| 0x0108 | Getriebestatus : Synchronisation | 0/1 | high | 0x0008 | - | - | - | - |
| 0x0109 | Getriebestatus : Schaltweg Neutral | 0/1 | high | 0x0010 | - | - | - | - |
| 0x010A | Getriebestatus : Vorspannen | 0/1 | high | 0x0020 | - | - | - | - |
| 0x010B | Getriebestatus : Getriebeinitialisierung aktiv | 0/1 | high | 0x0040 | - | - | - | - |
| 0x010C | Getriebestatus : Synchronisation fertig | 0/1 | high | 0x0080 | - | - | - | - |
| 0x010D | Getriebestatus : Vor Synchronisation | 0/1 | high | 0x0100 | - | - | - | - |
| 0x010E | Getriebestatus : Vor Synchronisation aktiv | 0/1 | high | 0x0200 | - | - | - | - |
| 0x010F | Kupplungsstatus: offen | 0/1 | high | 0x0400 | - | - | - | - |
| 0x0110 | Kupplungsstatus: geschlossen | 0/1 | high | 0x0800 | - | - | - | - |
| 0x0111 | Kupplungsstatus: oeffnet | 0/1 | high | 0x1000 | - | - | - | - |
| 0x0112 | Kupplungsstatus: schliesst | 0/1 | high | 0x2000 | - | - | - | - |
| 0x0113 | Kupplungsstatus: Zwischenkuppeln aktiv | 0/1 | high | 0x4000 | - | - | - | - |
| 0x0114 | Fussbremse aktiv | 0/1 | high | 0x8000 | - | - | - | - |
| 0x0115 | Fahrpedal Rohwert | % | high | unsigned char | - | - | - | - |
| 0x0116 | Klemme R aus | 0/1 | high | 0x0001 | - | - | - | - |
| 0x0117 | Klemme R ein | 0/1 | high | 0x0002 | - | - | - | - |
| 0x0118 | Signal Klemme R ungueltig | 0/1 | high | 0x0004 | - | - | - | - |
| 0x0119 | Klemme 15 aus | 0/1 | high | 0x0008 | - | - | - | - |
| 0x011A | Klemme 15 ein | 0/1 | high | 0x0010 | - | - | - | - |
| 0x011B | Signal Klemme 15 ungueltig | 0/1 | high | 0x0020 | - | - | - | - |
| 0x011C | Klemme 50 aus | 0/1 | high | 0x0040 | - | - | - | - |
| 0x011D | Klemme 50 ein | 0/1 | high | 0x0080 | - | - | - | - |
| 0x011E | Signal Klemme 50 ungueltig | 0/1 | high | 0x0100 | - | - | - | - |
| 0x011F | Sollwert Status Shift Lock (0=Waehlhebel gesperrt, 1=nicht gesperrt) | 0/1 | high | 0x0001 | - | - | - | - |
| 0x0120 | Sollwert Status Waehlhebel LED R | 0/1 | high | 0x0002 | - | - | - | - |
| 0x0121 | Sollwert Status Weahlhebel LED S/D | 0/1 | high | 0x0004 | - | - | - | - |
| 0x0122 | Sollwert Status Anlasserfreigabe | 0/1 | high | 0x0008 | - | - | - | - |
| 0x0123 | Sollwert Status Hydraulikpumpenrelais | 0/1 | high | 0x0010 | - | - | - | - |
| 0x0124 | Sollwert Status Waehlhebel LED N | 0/1 | high | 0x0020 | - | - | - | - |
| 0x0125 | Rohwert Status Shift Lock (0=Waehlhebel gesperrt, 1=nicht gesperrt) | 0/1 | high | 0x0040 | - | - | - | - |
| 0x0126 | Rohwert Status Waehlhebel LED R | 0/1 | high | 0x0080 | - | - | - | - |
| 0x0127 | Rohwert Status Waehlhebel LED S/D | 0/1 | high | 0x0100 | - | - | - | - |
| 0x0128 | Rohwert Status Notansteuerung HSD1 | 0/1 | high | 0x0200 | - | - | - | - |
| 0x0129 | Rohwert Status Notansteuerung HSD2 | 0/1 | high | 0x0400 | - | - | - | - |
| 0x012A | Rohwert Status Notansteuerung HSD3 | 0/1 | high | 0x0800 | - | - | - | - |
| 0x012B | Rohwert Status Anlasserfreigabe | 0/1 | high | 0x1000 | - | - | - | - |
| 0x012C | Rohwert Status Hydraulikpumpenrelais | 0/1 | high | 0x2000 | - | - | - | - |
| 0x012D | Rohwert Status Waehlhebel LED N | 0/1 | high | 0x4000 | - | - | - | - |
| 0x012E | Zuendung aus | 0/1 | high | 0x0001 | - | - | - | - |
| 0x012F | Radio Ein-Stellung | 0/1 | high | 0x0002 | - | - | - | - |
| 0x0130 | Fahrtstellung | 0/1 | high | 0x0004 | - | - | - | - |
| 0x0131 | Anlassen | 0/1 | high | 0x0008 | - | - | - | - |
| 0x0132 | Bremssignal: Fussbremse betaetigt | 0/1 | high | 0x0010 | - | - | - | - |
| 0x0133 | Bremssignal: Handbremse betaetigt | 0/1 | high | 0x0020 | - | - | - | - |
| 0x0134 | Fehlerstatus Shift Lock: Kurzschluss nach Masse | 0/1 | high | 0x0040 | - | - | - | - |
| 0x0135 | Fehlerstatus Shift Lock: Kurzschluss nach Ubatt | 0/1 | high | 0x0080 | - | - | - | - |
| 0x0136 | Fehlerstatus Shift Lock: Leitungsunterbrechung | 0/1 | high | 0x0100 | - | - | - | - |
| 0x0137 | Fehlerstatus Anlasserfreigabe: Kurzschluss nach Masse | 0/1 | high | 0x0200 | - | - | - | - |
| 0x0138 | Fehlerstatus Anlasserfreigabe: Kurzschluss nach Ubatt | 0/1 | high | 0x0400 | - | - | - | - |
| 0x0139 | Fehlerstatus Anlasserfreigabe: Leitungsunterbrechung | 0/1 | high | 0x0800 | - | - | - | - |
| 0x013A | Fehlerstatus Ansteuerung Waehlhebel LED R: | 0-n | - | 0xFF | FUmweltTexte32 | - | - | - |
| 0x013B | Fehlerstatus Ansteuerung Waehlhebel LED N: | 0-n | - | 0xFF | FUmweltTexte32 | - | - | - |
| 0x013C | Fehlerstatus Ansteuerung Waehlhebel LED D/S: | 0-n | - | 0xFF | FUmweltTexte32 | - | - | - |
| 0x013D | Ungueltige Checks. der Abgleichwerte | 0/1 | high | 0x01 | - | - | - | - |
| 0x013E | Fehler EEPROM-Daten | 0/1 | high | 0x02 | - | - | - | - |
| 0x013F | Fehler Oszillatorfrequenz | 0/1 | high | 0x04 | - | - | - | - |
| 0x0140 | Fehler SPI Kommunikation | 0/1 | high | 0x08 | - | - | - | - |
| 0x0141 | ESTATE (1=Motor ein) | 0/1 | high | 0x0400 | - | - | - | - |
| 0x0142 | Kennzeichnung Fehler Bremssignal: | 0-n | - | 0xFF | FUmweltTexte46 | - | - | - |
| 0x0143 | Status Motordrehzahl CAN: | 0-n | - | 0xFF | FUmweltTexte47 | - | - | - |
| 0x0144 | Handbremse (1=angezogen) (Digitaleingang resetfest) | 0/1 | high | 0x0001 | - | - | - | - |
| 0x0145 | frei (Digitaleingang resetfest) | 0/1 | high | 0x0002 | - | - | - | - |
| 0x0146 | Waehlhebelschalter S1 (Digitaleingang resetfest) | 0/1 | high | 0x0004 | - | - | - | - |
| 0x0147 | Waehlhebelschalter S2 (Digitaleingang resetfest) | 0/1 | high | 0x0008 | - | - | - | - |
| 0x0148 | Waehlhebelschalter E1 (Digitaleingang resetfest) | 0/1 | high | 0x0010 | - | - | - | - |
| 0x0149 | Waehlhebelschalter E2 (Digitaleingang resetfest) | 0/1 | high | 0x0020 | - | - | - | - |
| 0x014A | Waehlhebelschalter N1 (Digitaleingang resetfest) | 0/1 | high | 0x0040 | - | - | - | - |
| 0x014B | Waehlhebelschalter N2 (Digitaleingang resetfest) | 0/1 | high | 0x0080 | - | - | - | - |
| 0x014C | Waehlhebelschalter R1 (Digitaleingang resetfest) | 0/1 | high | 0x0100 | - | - | - | - |
| 0x014D | Waehlhebelschalter R2 (Digitaleingang resetfest) | 0/1 | high | 0x0200 | - | - | - | - |
| 0x014E | ESTATE (1=Motor ein) (Digitaleingang resetfest) | 0/1 | high | 0x0400 | - | - | - | - |
| 0x014F | Programmwahlschalter PLUS (Digitaleingang resetfest) | 0/1 | high | 0x0800 | - | - | - | - |
| 0x0150 | Programmwahlschalter MINUS (Digitaleingang resetfest) | 0/1 | high | 0x1000 | - | - | - | - |
| 0x0151 | frei (Digitaleingang resetfest) | 0/1 | high | 0x2000 | - | - | - | - |
| 0x0152 | Motorhaubenkontakt 2 (rechts) (1=geschlossen) (Digitaleingang resetfest) | 0/1 | high | 0x4000 | - | - | - | - |
| 0x0153 | Motorhaubenkontakt 1 (links) (1=geschlossen) (Digitaleingang resetfest) | 0/1 | high | 0x8000 | - | - | - | - |
| 0x0154 | Getriebe gibt Abschaltfreigabe | 0/1 | high | 0x01 | - | - | - | - |
| 0x0155 | Kupplung gibt Abschaltfreigabe | 0/1 | high | 0x02 | - | - | - | - |
| 0x0156 | Wird nicht in NVRAM gespeichert | 0/1 | high | 0x04 | - | - | - | - |
| 0x0157 | Sofortabschaltung | 0/1 | high | 0x08 | - | - | - | - |
| 0x0158 | Botschaft Aussentemperatur/Relativzeit korrekt emfangen | 0/1 | high | 0x0001 | - | - | - | - |
| 0x0159 | Botschaft Bedienung Getriebewahlschalter korrekt empfangen | 0/1 | high | 0x0002 | - | - | - | - |
| 0x015A | Botschaft Geschwindigkeit korrekt empfangen | 0/1 | high | 0x0004 | - | - | - | - |
| 0x015B | Botschaft Kilometerstand /Reichweite korrekt empfangen | 0/1 | high | 0x0008 | - | - | - | - |
| 0x015C | Botschaft Klemmenstatus korrekt empfangen | 0/1 | high | 0x0010 | - | - | - | - |
| 0x015D | Botschaft Lenkradwinkel korrekt empfangen | 0/1 | high | 0x0020 | - | - | - | - |
| 0x015E | Botschaft Radgeschwindigkeit korrekt empfangen | 0/1 | high | 0x0040 | - | - | - | - |
| 0x015F | Botschaft Radtoleranzabgleich korrekt empfangen | 0/1 | high | 0x0080 | - | - | - | - |
| 0x0160 | Botschaft Anhaenger korrekt empfangen | 0/1 | high | 0x0100 | - | - | - | - |
| 0x0161 | Botschaft DSC korrekt empfangen | 0/1 | high | 0x0200 | - | - | - | - |
| 0x0162 | Botschaft Kombi korrekt empfangen | 0/1 | high | 0x0400 | - | - | - | - |
| 0x0163 | Botschaft ZV und Klappenzustand korrekt empfangen | 0/1 | high | 0x0800 | - | - | - | - |
| 0x0164 | Botschaft Status Fahrlicht korrekt empfangen | 0/1 | high | 0x1000 | - | - | - | - |
| 0x0165 | Botschaft Raddruecke korrekt empfangen | 0/1 | high | 0x2000 | - | - | - | - |
| 0x0166 | Botschaft Anzeige Checkcontrol Meldung korrekt gesendet | 0/1 | high | 0x01 | - | - | - | - |
| 0x0167 | Botschaft Anzeige Getriebedaten korrekt gesendet | 0/1 | high | 0x02 | - | - | - | - |
| 0x0168 | Botschaft Drehmomentanforderung EGS korrekt gesendet | 0/1 | high | 0x04 | - | - | - | - |
| 0x0169 | Botschaft Verzoergungsanforderung korrekt gesendet | 0/1 | high | 0x08 | - | - | - | - |
| 0x016A | Botschaft Rohdaten Laengsbeschleunigung korrekt Empfangen | 0/1 | high | 0x10 | - | - | - | - |
| 0x016B | Botschaft Getriebedaten korrekt Empfangen | 0/1 | high | 0x20 | - | - | - | - |
| 0x016C | Botschaft DME 1 korrekt empfangen | 0/1 | high | 0x01 | - | - | - | - |
| 0x016D | Botschaft DME 2 korrekt empfangen | 0/1 | high | 0x02 | - | - | - | - |
| 0x016E | Botschaft DME 3 korrekt empfangen | 0/1 | high | 0x04 | - | - | - | - |
| 0x016F | Botschaft Drehmoment 1 korrekt empfangen | 0/1 | high | 0x08 | - | - | - | - |
| 0x0170 | Botschaft Drehmoment 2 korrekt empfangen | 0/1 | high | 0x10 | - | - | - | - |
| 0x0171 | Botschaft Motordaten korrekt empfangen | 0/1 | high | 0x20 | - | - | - | - |
| 0x0172 | Botschaft M-Drive korrekt empfangen | 0/1 | high | 0x40 | - | - | - | - |
| 0x0173 | Botschaft SMG 1 korrekt gesendet | 0/1 | high | 0x01 | - | - | - | - |
| 0x0174 | Botschaft SMG 2 korrekt gesendet | 0/1 | high | 0x02 | - | - | - | - |
| 0x0175 | Botschaft SMG 3 korrekt gesendet | 0/1 | high | 0x04 | - | - | - | - |
| 0x0176 | Getriebetemperatur | Grad | high | unsigned char | - | - | - | -48 |
| 0x0177 | Einschaltdauer HE-Motor, kleine Zeitbasis | - | high | unsigned char | - | - | - | - |
| 0x0178 | Einschaltdauer HE-Motor, mittlere Zeitbasis | - | high | unsigned char | - | - | - | - |
| 0x0179 | Einschaltdauer HE-Motor, grosse Zeitbasis | - | high | unsigned char | - | - | - | - |
| 0x017A | Anzahl Getriebeschaltungen, kleine Zeitbasis | - | high | unsigned char | - | - | - | - |
| 0x017B | Anzahl Getriebeschaltungen, mittlere Zeitbasis | - | high | unsigned char | - | - | - | - |
| 0x017C | Anzahl Getriebeschaltungen, grosse Zeitbasis | - | high | unsigned char | - | - | - | - |
| 0x017D | Fehlerstatus Ansteuerung Getrieboelpumpenrelais: | 0-n | - | 0xFF | FUmweltTexte32 | - | - | - |
| 0x017E | Zeitdauer des erkannten Uebersetzungsverhaeltnises | - | high | unsigned int | - | - | - | - |
| 0x017F | Aus Uebersetzungverhältnis erkannter Gang | - | high | unsigned char | - | - | - | - |
| 0x0180 | Status System-Reset: | 0-n | high | 0xFF | FUmweltTexte49 | - | - | - |
| 0x0181 | PWM Wert der LED Ansteuerung | - | high | unsigned int | - | - | - | - |
| 0x0182 | Fehlerstatus Ventil: | 0-n | - | 0xFF | FUmweltTexte50 | - | - | - |
| 0x0183 | Fehlervariable Siemens NVRAM | - | high | unsigned char | - | - | - | - |

### FARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| 0x5000 | 0x00 | 0x00 | 0x09 | 0x00 |
| 0x5001 | 0x0A | 0x00 | 0x00 | 0x00 |
| 0x5002 | 0x0E | 0x0D | 0x0C | 0x0B |
| 0x5003 | 0x00 | 0x00 | 0x00 | 0x0F |
| 0x5004 | 0x00 | 0x00 | 0x10 | 0x00 |
| 0x5005 | 0x00 | 0x00 | 0x11 | 0x00 |
| 0x5006 | 0x00 | 0x00 | 0x12 | 0x00 |
| 0x5007 | 0x00 | 0x00 | 0x13 | 0x00 |
| 0x5008 | 0x00 | 0x00 | 0x14 | 0x00 |
| 0x5100 | 0x00 | 0x00 | 0x17 | 0x16 |
| 0x5101 | 0xF9 | 0x1A | 0x19 | 0x18 |
| 0x5102 | 0x1D | 0x00 | 0x1C | 0x1B |
| 0x5103 | 0x00 | 0x00 | 0x1F | 0x1E |
| 0x5104 | 0x00 | 0x00 | 0x21 | 0x20 |
| 0x5105 | 0x00 | 0x00 | 0x23 | 0x22 |
| 0x5106 | 0x26 | 0xFD | 0x25 | 0x24 |
| 0x5107 | 0x29 | 0xFE | 0x28 | 0x27 |
| 0x5108 | 0x2C | 0xFF | 0x2B | 0x2A |
| 0x5109 | 0x2F | 0x0100 | 0x2E | 0x2D |
| 0x510A | 0x32 | 0x0101 | 0x31 | 0x30 |
| 0x510B | 0x35 | 0x00 | 0x34 | 0x33 |
| 0x510C | 0x38 | 0x00 | 0x37 | 0x36 |
| 0x510D | 0x3B | 0x0106 | 0x3A | 0x39 |
| 0x510E | 0x3E | 0x0107 | 0x3D | 0x3C |
| 0x5200 | 0x41 | 0x00 | 0x40 | 0x3F |
| 0x5201 | 0x44 | 0x00 | 0x43 | 0x42 |
| 0x5202 | 0x47 | 0x00 | 0x46 | 0x45 |
| 0x5203 | 0x4A | 0x00 | 0x49 | 0x48 |
| 0x5204 | 0x4D | 0x00 | 0x4C | 0x4B |
| 0x5206 | 0x4E | 0x00 | 0x00 | 0x00 |
| 0x5208 | 0x4F | 0x00 | 0x00 | 0x00 |
| 0x5209 | 0x50 | 0x00 | 0x00 | 0x00 |
| 0x520A | 0x51 | 0x00 | 0x00 | 0x00 |
| 0x520B | 0x52 | 0x00 | 0x00 | 0x00 |
| 0x520C | 0x53 | 0x00 | 0x00 | 0x00 |
| 0x520D | 0x54 | 0x00 | 0x00 | 0x00 |
| 0x520E | 0x55 | 0x00 | 0x00 | 0x00 |
| 0x520F | 0x56 | 0x00 | 0x00 | 0x00 |
| 0x5210 | 0x57 | 0x00 | 0x00 | 0x00 |
| 0x5211 | 0x58 | 0x00 | 0x00 | 0x00 |
| 0x5212 | 0x59 | 0x00 | 0x00 | 0x00 |
| 0x5213 | 0x5A | 0x00 | 0x00 | 0x00 |
| 0x5214 | 0x5B | 0x00 | 0x00 | 0x00 |
| 0x5215 | 0x5C | 0x00 | 0x00 | 0x00 |
| 0x5217 | 0x5D | 0x00 | 0x00 | 0x00 |
| 0x5218 | 0x5E | 0x00 | 0x00 | 0x00 |
| 0x521A | 0x5F | 0x00 | 0x00 | 0x00 |
| 0x521B | 0x60 | 0x00 | 0x00 | 0x00 |
| 0x521C | 0x61 | 0x00 | 0x00 | 0x00 |
| 0x5400 | 0x00 | 0x64 | 0x63 | 0x62 |
| 0x5401 | 0x00 | 0x67 | 0x66 | 0x65 |
| 0x5402 | 0xFA | 0x6A | 0x69 | 0x68 |
| 0x5403 | 0x00 | 0x00 | 0x6B | 0x00 |
| 0x5404 | 0x00 | 0x00 | 0x6E | 0x00 |
| 0x5405 | 0x00 | 0x00 | 0x71 | 0x00 |
| 0x5406 | 0x00 | 0xF8 | 0xF7 | 0xF6 |
| 0x5500 | 0x77 | 0x76 | 0x75 | 0x74 |
| 0x5501 | 0x7B | 0x7A | 0x79 | 0x78 |
| 0x5502 | 0x7F | 0x7E | 0x7D | 0x7C |
| 0x5503 | 0x83 | 0x82 | 0x81 | 0x80 |
| 0x5504 | 0x87 | 0x86 | 0x85 | 0x84 |
| 0x5505 | 0x8B | 0x8A | 0x89 | 0x88 |
| 0x5506 | 0x8F | 0x8E | 0x8D | 0x8C |
| 0x5507 | 0x00 | 0x00 | 0x90 | 0x00 |
| 0x5508 | 0x00 | 0x00 | 0x91 | 0x00 |
| 0x5509 | 0x00 | 0x00 | 0x92 | 0x00 |
| 0xCF12 | 0x00 | 0x93 | 0x00 | 0x00 |
| 0xCF13 | 0x00 | 0x94 | 0x00 | 0x00 |
| 0xCF14 | 0x00 | 0x95 | 0x00 | 0x00 |
| 0xCF15 | 0x00 | 0x97 | 0x96 | 0x00 |
| 0xCF16 | 0x9A | 0x99 | 0x98 | 0x00 |
| 0xCF17 | 0x00 | 0x9B | 0x00 | 0x00 |
| 0xCF18 | 0x9E | 0x9D | 0x9C | 0x00 |
| 0xCF19 | 0x00 | 0x9F | 0x00 | 0x00 |
| 0xCF1A | 0x00 | 0xA0 | 0x00 | 0x00 |
| 0xCF1B | 0x00 | 0xA1 | 0x00 | 0x00 |
| 0xCF1C | 0x00 | 0xA2 | 0x00 | 0x00 |
| 0xCF1D | 0xA5 | 0xA4 | 0xA3 | 0x00 |
| 0xCF1E | 0xA8 | 0xA7 | 0xA6 | 0x00 |
| 0xCF1F | 0x00 | 0xA9 | 0x00 | 0x00 |
| 0xCF30 | 0x00 | 0xAA | 0x00 | 0x00 |
| 0xCF31 | 0x00 | 0xAB | 0x00 | 0x00 |
| 0xCF32 | 0x00 | 0xAC | 0x00 | 0x00 |
| 0xCF33 | 0x00 | 0xAD | 0x00 | 0x00 |
| 0xCF34 | 0x00 | 0xAE | 0x00 | 0x00 |
| 0xCF38 | 0x00 | 0xAF | 0x00 | 0x00 |
| 0xCF07 | 0x00 | 0xB0 | 0x00 | 0x00 |
| 0xCF25 | 0xB3 | 0xB2 | 0xB1 | 0x00 |
| 0xCF26 | 0xB6 | 0xB5 | 0xB4 | 0x00 |
| 0xCF27 | 0xB9 | 0xB8 | 0xB7 | 0x00 |
| 0xCF28 | 0xBC | 0xBB | 0xBA | 0x00 |
| 0xCF29 | 0xBF | 0xBE | 0xBD | 0x00 |
| 0xCF2A | 0x00 | 0xC1 | 0xC0 | 0x00 |
| 0xCF2B | 0xC4 | 0xC3 | 0xC2 | 0x00 |
| 0xCF35 | 0x00 | 0xC5 | 0x00 | 0x00 |
| 0xCF36 | 0x00 | 0xC6 | 0x00 | 0x00 |
| 0xCF37 | 0x00 | 0xC7 | 0x00 | 0x00 |
| 0xCF0B | 0x00 | 0xC8 | 0x00 | 0x00 |
| 0x4F00 | 0x00 | 0x00 | 0xC9 | 0x00 |
| 0x4F01 | 0x00 | 0x00 | 0xCA | 0x00 |
| 0x4F02 | 0x00 | 0x00 | 0xCB | 0x00 |
| 0x4F03 | 0x00 | 0x00 | 0xCC | 0x00 |
| 0x4F04 | 0x00 | 0x00 | 0xCD | 0x00 |
| 0x4F20 | 0x00 | 0x00 | 0xCE | 0x00 |
| 0x4F21 | 0xCF | 0x00 | 0x00 | 0x00 |
| 0x4F22 | 0xD0 | 0x0103 | 0x0102 | 0x00 |
| 0x4F40 | 0x00 | 0x00 | 0xD1 | 0x00 |
| 0x4F41 | 0x00 | 0x00 | 0x00 | 0xD2 |
| 0x4F42 | 0xFC | 0x00 | 0xFB | 0xD3 |
| 0x4F43 | 0x00 | 0x00 | 0x00 | 0xD4 |
| 0x4F44 | 0x00 | 0x00 | 0x00 | 0xD5 |
| 0x4F60 | 0xD6 | 0x00 | 0x00 | 0x00 |
| 0x4F61 | 0xD7 | 0x00 | 0x00 | 0x00 |
| 0x4F62 | 0x010A | 0xD8 | 0x00 | 0x010B |
| 0x4F63 | 0xD9 | 0x00 | 0x00 | 0x00 |
| 0x4F64 | 0xDA | 0x00 | 0x00 | 0x00 |
| 0x4F65 | 0x00 | 0xDD | 0xDC | 0xDB |
| 0x4F66 | 0x00 | 0x00 | 0x00 | 0xDE |
| 0x4F67 | 0x00 | 0x00 | 0x00 | 0xDF |
| 0x4F80 | 0xF3 | 0xF2 | 0xF1 | 0xF0 |
| 0x4F81 | 0x00 | 0x00 | 0x0105 | 0x0104 |
| 0x4FA0 | 0x0109 | 0x0108 | 0x00 | 0xF4 |
| 0x4FA1 | 0xF5 | 0x00 | 0x00 | 0x00 |
| default | 0x08 | 0x04 | 0x02 | 0x01 |

### FARTTEXTEINDIVIDUELL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | kein passendes Fehlersymptom |
| 0x01 | Signal oder Wert oberhalb Schwelle |
| 0x02 | Signal oder Wert unterhalb Schwelle |
| 0x04 | kein Signal oder Wert |
| 0x08 | unplausibles Signal oder Wert |
| 0x09 | Motorhaubenkontakt im Stand unplausibles Signal |
| 0x0A | Motorhaubenkontakt im Fahrbetrieb unplausibles Signal |
| 0x0B | Waehlhebel Totalausfall |
| 0x0C | Waehlhebel Einzelfehler R |
| 0x0D | Waehlhebel Einzelfehler N/E |
| 0x0E | Waehlhebel Einzelfehler S |
| 0x0F | Wake Up Kurzschluss gegen UBatt |
| 0x10 | Programmwahlschalter Plus Kurzschluss gegen Masse |
| 0x11 | Programmwahlschalter Minus Kurzschluss gegen Masse |
| 0x12 | Lenkradschalter Plus Kurzschluss gegen Masse |
| 0x13 | Lenkradschalter Minus Kurzschluss gegen Masse |
| 0x14 | Handbremssignal Kurzschluss gegen Masse |
| 0x15 | Hydraulikfuellstand |
| 0x16 | Hydrauliktemperatursensor Signal oberhalb Schwelle |
| 0x17 | Hydrauliktemperatursensor Signal unterhalb Schwelle |
| 0x18 | Hydraulikdrucksensor Signal oberhalb Schwelle |
| 0x19 | Hydraulikdrucksensor Signal unterhalb Schwelle |
| 0x1A | Hydraulikdrucksensor Masseleitung gebrochenl |
| 0x1B | Laengsbeschleunigungssensor Signal oberhalb Schwelle |
| 0x1C | Laengsbeschleunigungssensor Signal unterhalb Schwelle |
| 0x1D | Laengsbeschleunigungssensor unplausibles Signal |
| 0x1E | Spannungsversorgung UBatt Signal oberhalb Schwelle |
| 0x1F | Spannungsversorgung UBatt Signal unterhalb Schwelle |
| 0x20 | Sensorspannungsversorgung A Signal oberhalb Schwelle |
| 0x21 | Sensorspannungsversorgung A Signal unterhalb Schwelle |
| 0x22 | Sensorspannungsversorgung B Signal oberhalb Schwelle |
| 0x23 | Sensorspannungsversorgung B Signal unterhalb Schwelle |
| 0x24 | R/1 (Hauptsensor) Signal oberhalb Schwelle |
| 0x25 | R/1 (Hauptsensor) Signal unterhalb Schwelle |
| 0x26 | R/1 (Hauptsensor) unplausibles Signal |
| 0x27 | R/1 (redundanter Sensor) Signal oberhalb Schwelle |
| 0x28 | R/1 (redundanter Sensor) Signal unterhalb Schwelle |
| 0x29 | R/1 (redundanter Sensor) unplausibles Signal |
| 0x2A | 5/3 Signal oberhalb Schwelle |
| 0x2B | 5/3 Signal unterhalb Schwelle |
| 0x2C | 5/3 unplausibles Signal |
| 0x2D | 2/4 Signal oberhalb Schwelle |
| 0x2E | 2/4 Signal unterhalb Schwelle |
| 0x2F | 2/4 unplausibles Signal |
| 0x30 | 6/7 Signal oberhalb Schwelle |
| 0x31 | 6/7 Signal unterhalb Schwelle |
| 0x32 | 6/7 unplausibles Signal |
| 0x33 | Getriebeeingangsdrehzahl Signal oberhalb Schwelle |
| 0x34 | Getriebeeingangsdrehzahl Signal unterhalb Schwelle |
| 0x35 | Getriebeeingangsdrehzahl unplausibles Signal |
| 0x36 | Motordrehzahl (Sensorsignal) Signal oberhalb Schwelle |
| 0x37 | Motordrehzahl (Sensorsignal) Signal unterhalb Schwelle |
| 0x38 | Motordrehzahl (Sensorsignal) unplausibles Signal |
| 0x39 | Kupplungspositionsgeber (Hauptsensor) Signal oberhalb Schwelle |
| 0x3A | Kupplungspositionsgeber (Hauptsensor) Signal unterhalb Schwelle |
| 0x3B | Kupplungspositionsgeber (Hauptsensor) Kurzschluss gegen UBatt |
| 0x3C | Kupplungspositionsgeber (redundanter Sensor) Signal oberhalb Schwelle |
| 0x3D | Kupplungspositionsgeber (redundanter Sensor) Signal unterhalb Schwelle |
| 0x3E | Kupplungspositionsgeber (redundanter Sensor) Kurzschluss gegen UBatt |
| 0x3F | Motordrehzahl (CAN Signal) Signal oberhalb Schwelle |
| 0x40 | Motordrehzahl (CAN Signal) Signal unterhalb Schwelle |
| 0x41 | Motordrehzahl (CAN Signal) unplausibles Signal |
| 0x42 | Radgeschwindigkeit hinten links Signal oberhalb Schwelle |
| 0x43 | Radgeschwindigkeit hinten links Signal unterhalb Schwelle |
| 0x44 | Radgeschwindigkeit hinten links unplausibles Signal |
| 0x45 | Radgeschwindigkeit hinten rechts Signal oberhalb Schwelle |
| 0x46 | Radgeschwindigkeit hinten rechts Signal unterhalb Schwelle |
| 0x47 | Radgeschwindigkeit hinten rechts unplausibles Signal |
| 0x48 | Radgeschwindigkeit vorne links Signal oberhalb Schwelle |
| 0x49 | Radgeschwindigkeit vorne links Signal unterhalb Schwelle |
| 0x4A | Radgeschwindigkeit vorne links unplausibles Signal |
| 0x4B | Radgeschwindigkeit vorne rechts Signal oberhalb Schwelle |
| 0x4C | Radgeschwindigkeit vorne rechts Signal unterhalb Schwelle |
| 0x4D | Radgeschwindigkeit vorne rechts unplausibles Signal |
| 0x4E | Betriebsbremse unplausibles Signal |
| 0x4F | Drehmoment unplausibles Signal |
| 0x50 | Fahrpedal unplausibles Signal |
| 0x51 | Lenkwinkel unplausibles Signal |
| 0x52 | Querbeschleunigung unplausibles Signal |
| 0x53 | Laengsbeschleunigung unplausibles Signal |
| 0x54 | Leerlaufdrehzahl unplausibles Signal |
| 0x55 | Status Geschwindigkeitsregelung unplausibles Signal |
| 0x56 | Status Fahrertuer unplausibles Signal |
| 0x57 | Status Klemme R, 15 und 50 unplausibles Signal |
| 0x58 | Schluesselnummer unplausibles Signal |
| 0x59 | Status Anhaenger unplausibles Signal |
| 0x5A | Status Regelungen unplausibles Signal |
| 0x5B | Status DSC unplausibles Signal |
| 0x5C | Status Verzoegerung unplausibles Signal |
| 0x5D | Bremsdruck unplausibles Signal |
| 0x5E | Drehzahl Temperaturbereich 1 unplausibles Signal |
| 0x5F | Begrenzerdrehzahl unplausibles Signal |
| 0x60 | Status OBD Steuerfunktion unplausibles Signal |
| 0x61 | Status Schalter Warmlauf unplausibles Signal |
| 0x62 | Shift Lock Kurzschluss gegen UBatt |
| 0x63 | Shift Lock Kurzschluss gegen Masse |
| 0x64 | Shift Lock Leitungsunterbrechung |
| 0x65 | Anlasserfreigabe Kurzschluss gegen UBatt |
| 0x66 | Anlasserfreigabe Kurzschluss gegen Masse |
| 0x67 | Anlasserfreigabe Leitungsunterbrechung |
| 0x68 | Hydraulikpumpenrelais Kurzschluss gegen UBatt |
| 0x69 | Hydraulikpumpenrelais Kurzschluss gegen Masse |
| 0x6A | Hydraulikpumpenrelais Leitungsunterbrechung |
| 0x6B | PWM Ausgang Ansteuerung Waehlhebel LED R Symptomspezifisch |
| 0x6E | PWM Ausgang Ansteuerung Wahlhebel LED N Symptomspezifisch |
| 0x71 | PWM Ausgang Ansteuerung Wahlhebel LED S/D Symptomspezifisch |
| 0x74 | Getriebeventil DRV1 Kurzschluss gegen UBatt |
| 0x75 | Getriebeventil DRV1 Kurzschluss gegen Masse |
| 0x76 | Getriebeventil DRV1 Leitungsunterbrechung |
| 0x77 | Getriebeventil DRV1 unplausibles Signal |
| 0x78 | Getriebeventil DRV2 Kurzschluss gegen UBatt |
| 0x79 | Getriebeventil DRV2 Kurzschluss gegen Masse |
| 0x7A | Getriebeventil DRV2 Leitungsunterbrechung |
| 0x7B | Getriebeventil DRV2 unplausibles Signal |
| 0x7C | Getriebeventil PWV1 Kurzschluss gegen UBatt |
| 0x7D | Getriebeventil PWV1 Kurzschluss gegen Masse |
| 0x7E | Getriebeventil PWV1 Leitungsunterbrechung |
| 0x7F | Getriebeventil PWV1 unplausibles Signal |
| 0x80 | Getriebeventil PWV2 Kurzschluss gegen UBatt |
| 0x81 | Getriebeventil PWV2 Kurzschluss gegen Masse |
| 0x82 | Getriebeventil PWV2 Leitungsunterbrechung |
| 0x83 | Getriebeventil PWV2 unplausibles Signal |
| 0x84 | Getriebeventil PWV3 Kurzschluss gegen UBatt |
| 0x85 | Getriebeventil PWV3 Kurzschluss gegen Masse |
| 0x86 | Getriebeventil PWV3 Leitungsunterbrechung |
| 0x87 | Getriebeventil PWV3 unplausibles Signal |
| 0x88 | Getriebeventil PWV4 Kurzschluss gegen UBatt |
| 0x89 | Getriebeventil PWV4 Kurzschluss gegen Masse |
| 0x8A | Getriebeventil PWV4 Leitungsunterbrechung |
| 0x8B | Getriebeventil PWV4 unplausibles Signal |
| 0x8C | Kupplungsventil Kurzschluss gegen UBatt |
| 0x8D | Kupplungsventil Kurzschluss gegen Masse |
| 0x8E | Kupplungsventil Leitungsunterbrechung |
| 0x8F | Kupplungsventil unplausibles Signal |
| 0x90 | Spannungsversorgung Magnetventile PWV1, PWV3 und PWV4 Kurzschluss gegen Masse |
| 0x91 | Spannungsversorgung Magnetventile DRV1und DRV2 Kurzschluss gegen Masse |
| 0x92 | Spannungsversorgung Magnetventile PWV2 und Kupplungsventil Kurzschluss gegen Masse |
| 0x93 | Fahrlicht Timeout |
| 0x94 | Raddrücke Timeout |
| 0x95 | Außentemperatur Relativzeit Timeout |
| 0x96 | Bedienung Getriebewahlschalter Fehler Alivezaehler |
| 0x97 | Bedienung Getriebewahlschalter Timeout |
| 0x98 | Geschwindigkeit Fehler Alivezaehler |
| 0x99 | Geschwindigkeit Timeout |
| 0x9A | Geschwindigkeit Fehler Checksumme |
| 0x9B | Kilometerstand Istwert / Reichweite Timeout |
| 0x9C | Klemmenstatus Fehler Alivezaehler |
| 0x9D | Klemmenstatus Timeout |
| 0x9E | Klemmenstatus Fehler Checksumme |
| 0x9F | Lenkradwinkel Timeout |
| 0xA0 | Radgeschwindigkeit Timeout |
| 0xA1 | Radtoleranzabgleich Timeout |
| 0xA2 | Anhaenger Timeout |
| 0xA3 | DSC Fehler Alivezaehler |
| 0xA4 | DSC Timeout |
| 0xA5 | DSC Fehler Checksumme |
| 0xA6 | Kombi Fehler Alivezaehler |
| 0xA7 | Kombi Timeout |
| 0xA8 | Kombi Fehler Checksumme |
| 0xA9 | ZV Klappenzustand Timeout |
| 0xAA | Checkcontrol Meldungen Timeout |
| 0xAB | Anzeige Getriebedaten Timeout |
| 0xAC | Drehmomentanforderung EGS Timeout |
| 0xAD | Verzoegerungsanforderung ACC Timeout |
| 0xAE | Getriebedaten Timeout |
| 0xAF | Rohdaten Laengsbeschleunigung Timeout |
| 0xB0 | CAN Ueberwachung PT CAN Bus Off |
| 0xB1 | DME 1 Fehler Alivezaehler |
| 0xB2 | DME 1 Timeout |
| 0xB3 | DME 1 Fehler Checksumme |
| 0xB4 | DME 2 Fehler Alivezaehler |
| 0xB5 | DME 2 Timeout |
| 0xB6 | DME 2 Fehler Checksumme |
| 0xB7 | DME 3 Fehler Alivezaehler |
| 0xB8 | DME 3 Timeout |
| 0xB9 | DME 3 Fehler Checksumme |
| 0xBA | Drehmoment 1 Fehler Alivezaehler |
| 0xBB | Drehmoment 1 Timeout |
| 0xBC | Drehmoment 1 Fehler Checksumme |
| 0xBD | Drehmoment 3 Fehler Alivezaehler |
| 0xBE | Drehmoment 3 Timeout |
| 0xBF | Drehmoment 3 Fehler Checksumme |
| 0xC0 | Motordaten Fehler Alivezaehler |
| 0xC1 | Motordaten Timeout |
| 0xC2 | M-Drive Fehler Alivezaehler |
| 0xC3 | M-Drive Timeout |
| 0xC4 | M-Drive Fehler Checksumme |
| 0xC5 | SMG 1 Timeout |
| 0xC6 | SMG 2 Timeout |
| 0xC7 | SMG 3 Timeout |
| 0xC8 | CAN Ueberwachung SMG CAN Bus Off |
| 0xC9 | Sicherheitskonzept Ebene 2 Getriebe fehlerortspezifisch |
| 0xCA | Sicherheitskonzept Ebene 2 RAM fehlerortspezifisch |
| 0xCB | Sicherheitskonzept Ebene 2 Input fehlerortspezifisch |
| 0xCC | Sicherheitskonzept Ebene 2 Kupplung fehlerortspezifisch |
| 0xCD | Sicherheitskonzept Ebene 3 fehlerortspezifisch |
| 0xCE | NVRAM Laden unplausibel |
| 0xCF | Steuergeraet intern Auswertung ESTATE unplausibler Wert |
| 0xD0 | Steuergeraet intern Adaptionswerte Getriebe fehlerhafte Checksumme |
| 0xD1 | Hydraulikeinheit Druckbandunterschreitung Wert unterhalb Schwelle |
| 0xD2 | Hydraulikeinheit Druckbandüberschreitung Wert oberhalb Schwelle |
| 0xD3 | Einschalthaeufigkeit HE Motor oberhalb Schwelle |
| 0xD4 | Hydraulikeinheit Einschaltdauer Wert oberhalb Schwelle |
| 0xD5 | Hydraulikeinheit Missbrauch Wert oberhalb Schwelle |
| 0xD6 | Getriebeadaption unplausibler Wert |
| 0xD7 | Offsetadaption Laengsbeschleunigungssensor unplausibler Wert |
| 0xD8 | Kupplungsschleifpunkt Einlern- und Ansteuerfunktion unplausibler Wert |
| 0xD9 | Entlueftung unplausibler Wert |
| 0xDA | Aktionsmodi unplausibler Wert |
| 0xDB | Energiesparmodi Fertigung aktiv |
| 0xDC | Energiesparmodi Transport aktiv |
| 0xDD | Energiesparmodi Werkstatt aktiv |
| 0xDE | Eines oder mehrere der Getriebeadaptionsprogramme wurden nicht durchgefuehrt |
| 0xDF | Eines oder mehrere der Kupplungsadaptionsprogramme wurden nicht durchgefuehrt |
| 0xF0 | Getriebeproblem: Gang nicht auslegbar |
| 0xF1 | Getriebeproblem: Gang nicht einlegbar |
| 0xF2 | Getriebeproblem: Gangspringer |
| 0xF3 | Getriebeproblem: Drehzahlpruefung |
| 0xF4 | Kupplung Ansteuerung: Statische Soll - Ist Abweichung der Kupplung |
| 0xF5 | Kupplungsueberlastung |
| 0xF6 | Kurzschluss gegen Ubatt |
| 0xF7 | Kurzschluss gegen Masse |
| 0xF8 | Leitungsunterbrechung |
| 0xF9 | Hydraulikdrucksensor ausserhalb Messbereich |
| 0xFA | Hydraulikpumpenrelais klebender Relaiskontakt |
| 0xFB | Druckaufbaugeschwindigkeit unterhalb Schwelle |
| 0xFC | Hydraulikeinheit Baugruppe Leckage |
| 0xFD | R/1 (Hauptsensor) Trägerfrequenz PWM ausserhalb Bereich |
| 0xFE | R/1 (redundanter Sensor)  Trägerfrequenz PWM ausserhalb Bereich |
| 0xFF | 5/3 Trägerfrequenz PWM ausserhalb Bereich |
| 0x0100 | 2/4 Trägerfrequenz PWM ausserhalb Bereich |
| 0x0101 | 6/7 Trägerfrequenz PWM ausserhalb Bereich |
| 0x0102 | Steuergeraet intern Adaptionswerte Getriebe fehlerhafte Stromwerte |
| 0x0103 | Steuergeraet intern Adaptionswerte Getriebe fehlerhafte Positionswerte |
| 0x0104 | Sensor R/1 zu redundantem Signal unplausibel |
| 0x0105 | Uebersetzungsverhältnis beim Synchronisieren unplausibel |
| 0x0106 | Kupplungspositionsgeber (Hauptsensor) Massebruch Sensorversorgung |
| 0x0107 | Kupplungspositionsgeber (redundanter Sensor) Massebruch Sensorversorgung |
| 0x0108 | Kupplung Ansteuerung: Beide Sensoren fehlerhaft |
| 0x0109 | Kupplung Ansteuerung: Summenspannung unplausibel |
| 0x010A | Fehler Checksumme |
| 0x010B | Kupplungsschleifpunkt: Einlern- und Ansteuerfunktion fehlerhaft |
| 0xFFFF | Fehlersymptom nicht definiert |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x4F00 | Ebene 2 Getriebe |
| 0x4F01 | Ebene 2 RAM |
| 0x4F02 | Ebene 2 Input |
| 0x4F03 | Ebene 2 Kupplung |
| 0x4F04 | Ebene 3 |
| 0x4F20 | NVRAM Laden unplausibel |
| 0x4F21 | Auswertung ESTATE |
| 0x4F22 | Adaptionswerte Getriebe |
| 0x4F40 | Druckbandunterschreitung HE/Hydraulikeinheit |
| 0x4F41 | Druckbandueberschreitung HE/Hydraulikeinheit |
| 0x4F42 | Baugruppe HE/Hydraulikeinheit |
| 0x4F43 | Einschaltdauer HE/Hydraulikeinheit |
| 0x4F44 | Missbrauch HE/Hydraulikeinheit |
| 0x4F45 | Getriebetemperatur ueberschritten |
| 0x4F60 | Getriebeadaption |
| 0x4F61 | Offsetadaption des Laengsbeschleunigungssensors |
| 0x4F62 | Kupplungsadaption |
| 0x4F63 | Entlueftungen |
| 0x4F64 | Aktionsmodi |
| 0x4F65 | Energiesparmodi |
| 0x4F66 | Adaptionsprogramme Getriebe nicht vollstaendig durchgefuehrt |
| 0x4F67 | Adaptionsprogramme Kupplung nicht vollstaendig durchgefuehrt |
| 0x4F80 | Getriebeproblem |
| 0x4F81 | Uebersetzungspruefung unplausibel |
| 0x4FA0 | Ansteuerung Kupplung |
| 0x4FA1 | Kupplungsueberlastung |
| 0x5000 | Auswertung Motorhaubenkontakt |
| 0x5001 | Auswertung Motorhaubenkontakt im Fahrbetrieb |
| 0x5002 | Auswertung Waehlhebel |
| 0x5003 | Auswertung Wake up |
| 0x5004 | Auswertung Programmwahlschalter Plus |
| 0x5005 | Auswertung Programmwahlschalter Minus |
| 0x5006 | Auswertung Lenkradschalter + |
| 0x5007 | Auswertung Lenkradschalter - |
| 0x5008 | Auswertung Handbremse |
| 0x5100 | Auswertung Hydrauliktemperatur-Sensor |
| 0x5101 | Auswertung Hydraulikdrucksensor |
| 0x5102 | Auswertung Laengsbeschleunigung |
| 0x5103 | Spannungsversorgung Ubatt |
| 0x5104 | Spannungsversorgung A |
| 0x5105 | Spannungsversorgung B |
| 0x5106 | Auswertung Getriebepositionssensor Schaltstange R/1 Hauptsensor |
| 0x5107 | Auswertung Getriebepositionssensor Schaltstange R/1 redundanter Sensor |
| 0x5108 | Auswertung Getriebepositionssensor Schaltstange 5/3 |
| 0x5109 | Auswertung Getriebepositionssensor Schaltstange 2/4 |
| 0x510A | Auswertung Getriebepositionssensor Schaltstange 6/7 |
| 0x510B | Auswertung Getriebeeingangsdrehzahl |
| 0x510C | Auswertung Motordrehzahl (Sensor) |
| 0x510D | Auswertung Kupplungspositionssensor Hauptsensor |
| 0x510E | Auswertung Kupplungspositionssensor redundanter Sensor |
| 0x5200 | Auswertung Motordrehzahl (CAN) |
| 0x5201 | Auswertung Radgeschwindigkeit hinten links |
| 0x5202 | Auswertung Radgeschwindigkeit hinten rechts |
| 0x5203 | Auswertung Radgeschwindigkeit vorne links |
| 0x5204 | Auswertung Radgeschwindigkeit vorne rechts |
| 0x5206 | Auswertung Betriebsbremssignal |
| 0x5208 | Auswertung Drehmoment |
| 0x5209 | Auswertung Fahrpedal |
| 0x520A | Auswertung Lenkwinkel |
| 0x520B | Auswertung Querbeschleunigung |
| 0x520C | Auswertung Laengsbeschleunigung |
| 0x520D | Auswertung Leerlaufdrehzahl |
| 0x520E | Auswertung Status Geschwindigkeitsregelung |
| 0x520F | Auswertung Status Fahrertuer |
| 0x5210 | Auswertung Status Klemme R, 15 und 50 |
| 0x5211 | Auswertung Schluesselnummer |
| 0x5212 | Auswertung Status Anhaenger |
| 0x5213 | Auswertung Status Regelung |
| 0x5214 | Auswertung Status DSC |
| 0x5215 | Auswertung Status Verzoegerung |
| 0x5216 | Auswertung Status Quittierung DSC ASC |
| 0x5217 | Auswertung Bremsdruck |
| 0x5218 | Auswertung Drehzahl Temperaturbereich 1 |
| 0x5219 | Auswertung Drehzahl Temperaturbereich 2 |
| 0x521A | Auswertung Begrenzerdrehzahl |
| 0x521B | Auswertung Status OBD Steuerfunktionen |
| 0x521C | Auswertung Status Schalter Warmlauf |
| 0x5400 | Auswertung Shift Lock |
| 0x5401 | Auswertung Anlasserfreigabe |
| 0x5402 | Auswertung Hydraulikpumpenrelais |
| 0x5403 | Ansteuerung Waehlhebel LED R |
| 0x5404 | Ansteuerung Waehlhebel LED N |
| 0x5405 | Ansteuerung Waehlhebel LED S/D |
| 0x5406 | Ansteuerung Relais Getriebeoelpumpe |
| 0x5500 | Ansteuerung Getriebeventil DRV1 |
| 0x5501 | Ansteuerung Getriebeventil DRV2 |
| 0x5502 | Ansteuerung Getriebeventil PWV1 |
| 0x5503 | Ansteuerung Getriebeventil PWV2 |
| 0x5504 | Ansteuerung Getriebeventil PWV3 |
| 0x5505 | Ansteuerung Getriebeventil PWV4 |
| 0x5506 | Ansteuerung Kupplungsventil |
| 0x5507 | Spannungsversorgung Magnetventile PWV1, PWV3 und PWV4 |
| 0x5508 | Spannungsversorgung Magnetventile DRV1, DRV2 |
| 0x5509 | Spannungsversorgung Magnetventile PWV2 und Kupplungsventil |
| 0xCF07 | Botschaft Bus Off PT CAN |
| 0xCF12 | Botschaft Fahrlicht |
| 0xCF13 | Botschaft Raddruecke |
| 0xCF0B | Bus Off Local CAN |
| 0xCF14 | Botschaft Aussentemperatur Relativzeit |
| 0xCF15 | Botschaft Bedienung Getriebewahlschalter |
| 0xCF16 | Botschaft Geschwindigkeit |
| 0xCF17 | Botschaft Kilometerstand Istwert/Reichweite |
| 0xCF18 | Botschaft Klemmenstatus |
| 0xCF19 | Botschaft Lenkradwinkel |
| 0xCF1A | Botschaft Radgeschwindigkeit |
| 0xCF1B | Botschaft Radtoleranzabgleich |
| 0xCF1C | Botschaft Status Anhaenger |
| 0xCF1D | Botschaft Status DSC |
| 0xCF1E | Botschaft Status Kombi |
| 0xCF1F | Botschaft ZV Klappenzustand |
| 0xCF20 | Botschaft Netzwerk Management |
| 0xCF25 | Botschaft DME 1 |
| 0xCF26 | Botschaft DME 2 |
| 0xCF27 | Botschaft DME 3 |
| 0xCF28 | Botschaft Drehmoment 1 |
| 0xCF29 | Botschaft Drehmoment 3 |
| 0xCF2A | Botschaft Motordaten |
| 0xCF2B | Botschaft M-Drive |
| 0xCF30 | Botschaft Checkcontrol-Meldung |
| 0xCF31 | Botschaft Anzeige Getriebedaten |
| 0xCF32 | Botschaft Drehmomentanforderung EGS |
| 0xCF33 | Botschaft Verzoegerungsanforderung ACC |
| 0xCF34 | Botschaft Getriebedaten |
| 0xCF35 | Botschaft SMG 1 |
| 0xCF36 | Botschaft SMG 2 |
| 0xCF37 | Botschaft SMG 3 |
| 0xCF38 | Botschaft Rohdaten Laengsbeschleunigung |
| 0xFFFF | unbekannter Fehlerort |

### HDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | ja |
| F_ART_ERW | nein |
| F_PCODE | ja |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | ja |

### HUMWELTMATRIX

| ORT | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 0x4F00 | Ebene20x4F00bis02 | DigeinResetfest | 0x009C | GetriebeKuppFussStatus |
| 0x4F01 | Ebene20x4F00bis02 | DigeinResetfest | 0x009C | GetriebeKuppFussStatus |
| 0x4F02 | Ebene20x4F00bis02 | DigeinResetfest | 0x009C | GetriebeKuppFussStatus |
| 0x4F03 | Ebene2Kupplung0x4F03 | - | - | - |
| 0x4F04 | 0x0094 | Ebene30x4F04 | 0x0180 | - |
| 0x4F20 | 0x0094 | 0x005B | 0x0180 | NvramLaden0x4F20 |
| 0x4F21 | 0x0094 | Estate0x4F21 | GetriebeKuppFussStatus | - |
| 0x4F22 | 0x00F0 | - | - | - |
| 0x4F40 | Hydraulik0x4F40bis42 | 0x00CC | - | - |
| 0x4F41 | Hydraulik0x4F40bis42 | 0x00CC | - | - |
| 0x4F42 | Hydraulik0x4F40bis42 | 0x0098 | 0x0099 | 0x00CC |
| 0x4F43 | Hydraulik0x4F43 | 0x0098 | 0x0099 | 0x00CC |
| 0x4F44 | Hydraulik0x4F44 | 0x0098 | 0x0099 | 0x00CC |
| 0x4F45 | Getriebetemp0x4F45 | 0x0076 | - | - |
| 0x4F60 | 0x00F0 | 0x00E2 | 0x00E3 | 0x00E4 |
| 0x4F61 | 0x00F0 | 0x00E2 | 0x00E3 | 0x00E4 |
| 0x4F62 | 0x00F0 | 0x00E2 | 0x00E3 | 0x00E4 |
| 0x4F63 | 0x00F0 | 0x00E2 | 0x00E3 | 0x00E4 |
| 0x4F64 | 0x00F0 | 0x00E2 | 0x00E3 | 0x00E4 |
| 0x4F65 | - | - | - | - |
| 0x4F66 | 0x00F0 | - | - | - |
| 0x4F67 | 0x00F0 | - | - | - |
| 0x4F80 | 0x00F0 | Getriebeproblem0x4F80 | 0x00F1 | 0x0085 |
| 0x4F81 | Uebersetzungsp0x4F81 | 0x0089 | - | - |
| 0x4FA0 | Kupplung0x4FA0_A1 | 0x0029 | - | - |
| 0x4FA1 | Kupplung0x4FA0_A1 | 0x003E | 0x0029 | - |
| 0x5000 | 0x00F0 | MotorhaubenkontakteRoh | MotorhaubenkontakteIst | 0x0055 |
| 0x5001 | 0x00F0 | MotorhaubenkontakteRoh | MotorhaubenkontakteIst | 0x0055 |
| 0x5002 | Wahlhebel0x5002 | WahlhebelsignaleRoh | WahlhebelsignaleIst | FahrtrichtWahlhebel |
| 0x5003 | 0x00F0 | 0x00C2 | 0x0039 | 0x005B |
| 0x5004 | 0x00F0 | Prgwahl0x5004_05_1 | Prgwahl0x5004_05_2 | 0x005A |
| 0x5005 | 0x00F0 | Prgwahl0x5004_05_1 | Prgwahl0x5004_05_2 | 0x005A |
| 0x5006 | 0x00F0 | Lenkrad10x5006_07 | Lenkrad20x5006_07 | 0x005A |
| 0x5007 | 0x00F0 | Lenkrad10x5006_07 | Lenkrad20x5006_07 | 0x005A |
| 0x5008 | Laengsbeschl0x5008 | 0x0005 | 0x0029 | Handbremse0x5008 |
| 0x5100 | 0x00F0 | 0x0050 | 0x00ED | 0x0051 |
| 0x5101 | Hydraulikdrucksens0x5101 | - | - | - |
| 0x5102 | Laengsbeschleunigung | 0x00EB | 0x0055 | 0x0029 |
| 0x5103 | 0x00F0 | 0x0052 | Sensorspannung | - |
| 0x5104 | 0x00F0 | Sensorspannung | 0x0053 | 0x0065 |
| 0x5105 | 0x00F0 | Sensorspannung | 0x0054 | 0x0066 |
| 0x5106 | SchaltstangeR10x5106_07 | 0x00AD | - | - |
| 0x5107 | SchaltstangeR10x5106_07 | 0x00AD | - | - |
| 0x5108 | Sensorposition0x5108bis0A | 0x0078 | 0x00A6 | 0x0098 |
| 0x5109 | Sensorposition0x5108bis0A | 0x0077 | 0x00A5 | 0x0098 |
| 0x510A | Sensorposition0x5108bis0A | 0x0079 | 0x00A7 | 0x0098 |
| 0x510B | Getriebeeingang0x510B | 0x0098 | 0x0099 | - |
| 0x510C | Motordrehz0x510C_5200 | 0x0143 | 0x0098 | 0x0099 |
| 0x510D | Kupplungsposition0x510D_E | 0x00AC | 0x0099 | - |
| 0x510E | Kupplungsposition0x510D_E | 0x00AC | 0x0099 | - |
| 0x5200 | Motordrehz0x510C_5200 | 0x0143 | 0x0098 | 0x0099 |
| 0x5201 | RadgeschwHL0x5201 | 0x005B | GetriebeKuppFussStatus | - |
| 0x5202 | RadgeschwHR0x5202 | 0x005B | GetriebeKuppFussStatus | - |
| 0x5203 | RadgeschwVL0x5203 | 0x005B | 0x0098 | 0x0099 |
| 0x5204 | RadgeschwVR0x5204 | 0x005B | 0x0098 | 0x0099 |
| 0x5206 | Betriebsbremssig0x5206 | 0x0005 | BremsZuendsig0x5206 | - |
| 0x5208 | Drehmoment0x5208 | 0x005B | - | - |
| 0x5209 | 0x00F0 | 0x0046 | 0x0115 | 0x003D |
| 0x520A | Lenkwinkel0x520A | 0x005B | - | - |
| 0x520B | 0x00F0 | 0x0002 | 0x0027 | 0x005B |
| 0x520C | Laengsbeschl0x520C | 0x005B | - | - |
| 0x520D | 0x00F0 | 0x006B | 0x0045 | 0x006C |
| 0x520E | 0x00F0 | 0x003D | 0x00D9 | 0x004D |
| 0x520F | 0x00F0 | 0x003D | 0x00F2 | 0x0038 |
| 0x5210 | KlemmeR_15_500x5210 | 0x005B | - | - |
| 0x5211 | 0x00F0 | 0x009A | 0x0041 | 0x00D8 |
| 0x5212 | 0x00F0 | 0x0003 | 0x0037 | 0x003E |
| 0x5213 | 0x00F0 | 0x00CF | 0x00D7 | 0x004A |
| 0x5214 | 0x00F0 | 0x00CF | 0x00D7 | 0x004A |
| 0x5215 | 0x00F0 | 0x00DA | 0x004E | - |
| 0x5216 | 0x00F0 | 0x00D6 | 0x004C | - |
| 0x5217 | 0x00F0 | 0x0004 | 0x0028 | 0x00CE |
| 0x5218 | 0x00F0 | DrehzahlTemp10x5218 | 0x0099 | - |
| 0x5219 | 0x00F0 | DrehzahlTemp20x5219 | 0x0099 | - |
| 0x521A | 0x00F0 | Begrenzerdrehzahl0x521A | 0x0099 | - |
| 0x521B | 0x00F0 | 0x00D5 | 0x004B | - |
| 0x521C | 0x00F0 | 0x00DB | 0x004F | - |
| 0x5400 | SPG_MDrehz0x5400_01 | StatusDigitaleAusgaenge | FahrtrichtWahlhebel | ShiftLock0x5400 |
| 0x5401 | SPG_MDrehz0x5400_01 | StatusDigitaleAusgaenge | FahrtrichtWahlhebel | Anlasserfreigabe0x5401 |
| 0x5402 | Hydpumpe0x5402 | 0x0123 | 0x0075 | 0x00AB |
| 0x5403 | 0x00F0 | 0x0181 | 0x013A | FahrtrichtWahlhebel |
| 0x5404 | 0x00F0 | 0x0181 | 0x013B | FahrtrichtWahlhebel |
| 0x5405 | 0x00F0 | 0x0181 | 0x013C | FahrtrichtWahlhebel |
| 0x5406 | RelaisGetrOelp0x5406_1 | 0x00C6 | 0x0076 | 0x017D |
| 0x5500 | GetriebeventilDRV10x5500 | 0x000B | 0x0182 | - |
| 0x5501 | GetriebeventilDRV20x5501 | 0x000C | 0x0182 | - |
| 0x5502 | GetriebeventilR_10x5502 | 0x0010 | 0x00C8 | 0x0182 |
| 0x5503 | Getriebeventil5_30x5503 | 0x000E | 0x00C8 | 0x0182 |
| 0x5504 | Getriebeventil6_70x5504 | 0x000D | 0x00C8 | 0x0182 |
| 0x5505 | Getriebeventil2_40x5505 | 0x000F | 0x00C8 | 0x0182 |
| 0x5506 | Kupplungsventil0x5506 | 0x00CA | 0x0182 | - |
| 0x5507 | 0x00F0 | Magnetventile0x5507 | 0x00C8 | - |
| 0x5508 | MagnetventileDRV1_20x5508 | 0x00C9 | 0x0060 | - |
| 0x5509 | Magnetventil5_30x5509 | 0x00CA | - | - |
| 0xCF07 | FehlerstatusCANBus | - | - | - |
| 0xCF0B | FehlerstatusCANBus | - | - | - |
| 0xCF12 | FehlerstatusCANBus | - | - | - |
| 0xCF13 | FehlerstatusCANBus | - | - | - |
| 0xCF14 | FehlerstatusCANBus | - | - | - |
| 0xCF15 | FehlerstatusCANBus | - | - | - |
| 0xCF16 | FehlerstatusCANBus | - | - | - |
| 0xCF17 | FehlerstatusCANBus | - | - | - |
| 0xCF18 | FehlerstatusCANBus | - | - | - |
| 0xCF19 | FehlerstatusCANBus | - | - | - |
| 0xCF1A | FehlerstatusCANBus | - | - | - |
| 0xCF1B | FehlerstatusCANBus | - | - | - |
| 0xCF1C | FehlerstatusCANBus | - | - | - |
| 0xCF1D | FehlerstatusCANBus | - | - | - |
| 0xCF1E | FehlerstatusCANBus | - | - | - |
| 0xCF1F | FehlerstatusCANBus | - | - | - |
| 0xCF20 | FehlerstatusCANBus | - | - | - |
| 0xCF25 | FehlerstatusCANBus | - | - | - |
| 0xCF26 | FehlerstatusCANBus | - | - | - |
| 0xCF27 | FehlerstatusCANBus | - | - | - |
| 0xCF28 | FehlerstatusCANBus | - | - | - |
| 0xCF29 | FehlerstatusCANBus | - | - | - |
| 0xCF2A | FehlerstatusCANBus | - | - | - |
| 0xCF2B | FehlerstatusCANBus | - | - | - |
| 0xCF30 | FehlerstatusCANBus | - | - | - |
| 0xCF31 | FehlerstatusCANBus | - | - | - |
| 0xCF32 | FehlerstatusCANBus | - | - | - |
| 0xCF33 | FehlerstatusCANBus | - | - | - |
| 0xCF34 | FehlerstatusCANBus | - | - | - |
| 0xCF35 | FehlerstatusCANBus | - | - | - |
| 0xCF36 | FehlerstatusCANBus | - | - | - |
| 0xCF37 | FehlerstatusCANBus | - | - | - |
| 0xCF38 | FehlerstatusCANBus | - | - | - |

### HUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | L/H | UWTYP | NAME | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x0001 | Laengsbeschleunigung (CAN) | m/s^2 | high | signed int | - | 0.025 | - | - |
| 0x0002 | Querbeschleunigung (CAN) | m/s^2 | high | signed int | - | 0.025 | - | - |
| 0x0003 | Anhaengerstatus (CAN): | 0-n | - | 0xFF | FUmweltTexte16 | - | - | - |
| 0x0004 | Bremsdruck (CAN) | bar | - | unsigned char | - | - | - | - |
| 0x0005 | Bremssignale: | 0-n | - | 0xFF | FUmweltTexte6 | - | - | - |
| 0x0006 | Byte Empfangskennung PT CAN | - | high | unsigned int | - | - | - | - |
| 0x0007 | Byte Sendekennung PT CAN | - | - | unsigned char | - | - | - | - |
| 0x0008 | Byte Empfangskennung Local CAN | - | - | unsigned char | - | - | - | - |
| 0x0009 | Byte Sendekennung Local CAN | - | - | unsigned char | - | - | - | - |
| 0x000A | Duty-Cycle Kupplung | % | high | unsigned int | - | 0.001526 | - | - |
| 0x000B | Duty-Cycle Druckregler 1 | % | high | unsigned int | - | 0.001526 | - | - |
| 0x000C | Duty-Cycle Druckregler 2 | % | high | unsigned int | - | 0.001526 | - | - |
| 0x000D | Duty-Cycle Schaltzylinder 2/4 | % | high | unsigned int | - | 0.001526 | - | - |
| 0x000E | Duty-Cycle Schaltzylinder 5/3 | % | high | unsigned int | - | 0.001526 | - | - |
| 0x000F | Duty-Cycle Schaltzylinder 6/7 | % | high | unsigned int | - | 0.001526 | - | - |
| 0x0010 | Duty-Cycle Schaltzylinder R/1 | % | high | unsigned int | - | 0.001526 | - | - |
| 0x0011 | Fehlercode MU | - | - | unsigned char | - | - | - | - |
| 0x0012 | Fehlercode MC | - | - | unsigned char | - | - | - | - |
| 0x0013 | Status Fahrzeugzustand (CAN): | 0-n | - | 0x00FF | FUmweltTexte17 | - | - | - |
| 0x0014 | Aktueller Gang 0= Neutral, 1-7= Gang, 8= Rueckwaertsgang | - | - | unsigned char | - | - | - | - |
| 0x0015 | Fahrpedalwert (CAN) | % | high | unsigned char | - | - | - | - |
| 0x0016 | Handbremssignal (CAN): | 0-n | - | 0xFF | FUmweltTexte18 | - | - | - |
| 0x0017 | Iststrom DRV1 Rohwert | mA | high | unsigned int | - | - | - | - |
| 0x0018 | Iststrom DRV2 Rohwert | mA | high | unsigned int | - | - | - | - |
| 0x0019 | Iststrom PWV1 Rohwert | mA | high | unsigned int | - | - | - | - |
| 0x001A | Iststrom PWV2 Rohwert | mA | high | unsigned int | - | - | - | - |
| 0x001B | Iststrom PWV3 Rohwert | mA | high | unsigned int | - | - | - | - |
| 0x001C | Iststrom PWV4 Rohwert | mA | high | unsigned int | - | - | - | - |
| 0x001D | Sollstrom DRV1 | mA | high | unsigned int | - | - | - | - |
| 0x001E | Sollstrom DRV2 | mA | high | unsigned int | - | - | - | - |
| 0x001F | Sollstrom PWV1 | mA | high | unsigned int | - | - | - | - |
| 0x0020 | Sollstrom PWV2 | mA | high | unsigned int | - | - | - | - |
| 0x0021 | Sollstrom PWV3 | mA | high | unsigned int | - | - | - | - |
| 0x0022 | Sollstrom PWV4 | mA | high | unsigned int | - | - | - | - |
| 0x0023 | Iststrom Magnetventil Kupplung Rohwert | mA | high | unsigned int | - | - | - | - |
| 0x0024 | Sollstrom Magnetventil Kupplung | mA | high | unsigned int | - | - | - | - |
| 0x0025 | Laengsbeschleunigung Istwert (CAN) | m/s^2 | high | signed int | - | 0.1 | - | - |
| 0x0026 | Laengsbeschleunigung Istwert (Sensor) | m/s^2 | high | signed int | - | 0.00625 | - | - |
| 0x0027 | Querbeschleunigung Istwert (CAN) | m/s^2 | high | signed int | - | 0.01 | - | - |
| 0x0028 | Bremsdruck Istwert | bar | high | unsigned char | - | - | - | - |
| 0x0029 | Bremssignale Istwert: | 0-n | - | 0xFF | FUmweltTexte19 | - | - | - |
| 0x002A | Handbremssignal gefilterter Istwert (Digitaleingang 1) | 0/1 | high | 0x0001 | - | - | - | - |
| 0x002B | Programmwahlschalter Plus gefilterter Istwert (Digitaleingang 1) | 0/1 | high | 0x0800 | - | - | - | - |
| 0x002C | Programmwahlschalter Minus gefilterter Istwert (Digitaleingang 1) | 0/1 | high | 0x1000 | - | - | - | - |
| 0x002D | Motorhaubenkontakt 1 gefilterter Istwert (Digitaleingang 1) | 0/1 | high | 0x4000 | - | - | - | - |
| 0x002E | Motorhaubenkontakt 2 gefilterter Istwert (Digitaleingang 1) | 0/1 | high | 0x8000 | - | - | - | - |
| 0x002F | Waehlhebelsignal S1 gefilterter Istwert (Digitaleingang 1) | 0/1 | high | 0x0004 | - | - | - | - |
| 0x0030 | Waehlhebelsignal S2 gefilterter Istwert (Digitaleingang 1) | 0/1 | high | 0x0008 | - | - | - | - |
| 0x0031 | Waehlhebelsignal E1 gefilterter Istwert (Digitaleingang 1) | 0/1 | high | 0x0010 | - | - | - | - |
| 0x0032 | Waehlhebelsignal E2 gefilterter Istwert (Digitaleingang 1) | 0/1 | high | 0x0020 | - | - | - | - |
| 0x0033 | Waehlhebelsignal N1 gefilterter Istwert (Digitaleingang 1) | 0/1 | high | 0x0040 | - | - | - | - |
| 0x0034 | Waehlhebelsignal N2 gefilterter Istwert (Digitaleingang 1) | 0/1 | high | 0x0080 | - | - | - | - |
| 0x0035 | Waehlhebelsignal R1 gefilterter Istwert (Digitaleingang 1) | 0/1 | high | 0x0100 | - | - | - | - |
| 0x0036 | Waehlhebelsignal R2 gefilterter Istwert (Digitaleingang 1) | 0/1 | high | 0x0200 | - | - | - | - |
| 0x0037 | Status Anhaenger | 0/1 | high | 0x0001 | - | - | - | - |
| 0x0038 | Status Tuerkontakt (Digitaleingang Ist 1) (0=zu, 1=auf) | 0/1 | high | 0x0080 | - | - | - | - |
| 0x0039 | Wake up gefilterter Istwert | 0/1 | high | 0x0001 | - | - | - | - |
| 0x003A | Lenkradtaster Plus gefilterter Istwert | 0/1 | high | 0x0020 | - | - | - | - |
| 0x003B | Lenkradtaster Minus gefilterter Istwert | 0/1 | high | 0x0040 | - | - | - | - |
| 0x003C | Fahrtrichtung: | 0-n | high | 0xFF | FUmweltTexte2 | - | - | - |
| 0x003D | Fahrpedalwert Istwert | % | high | signed int | - | - | 10 | - |
| 0x003E | Kupplungsschutzklasse: | 0-n | high | 0xFF | FUmweltTexte20 | - | - | - |
| 0x003F | Lenkwinkel Istwert | Grad | high | signed int | - | - | - | - |
| 0x0040 | Drehmoment Motor Istwert | Nm | high | signed int | - | - | - | - |
| 0x0041 | Schluesselnummer Istwert: | 0-n | - | 0xFF | FUmweltTexte21 | - | - | - |
| 0x0042 | Begrenzerdrehzahl Motor Istwert | 1/min | high | unsigned int | - | - | - | - |
| 0x0043 | Getriebeeingangsdrehzahl Istwert | 1/min | high | signed int | - | - | - | - |
| 0x0044 | Getriebeausgangsdrehzahl | 1/min | high | signed int | - | - | - | - |
| 0x0045 | Leerlaufdrehzahl Motor Istwert | 1/min | high | unsigned int | - | - | - | - |
| 0x0046 | Motordrehzahl Istwert | 1/min | high | signed int | - | - | - | - |
| 0x0047 | Drehzahl Temperaturbereich 1 Istwert | 1/min | high | unsigned int | - | - | - | - |
| 0x0048 | Drehzahl Temperaturbereich 2 Istwert | 1/min | high | unsigned int | - | - | - | - |
| 0x0049 | Hydraulikdruck Istwert | bar | high | unsigned int | - | 0.1 | - | - |
| 0x004A | Status Fahrstabilitaetsprogramm Istwert: | 0-n | - | 0xFF | FUmweltTexte22 | - | - | - |
| 0x004B | Byte OBD Steuerfunktionen Istwert | - | - | unsigned char | - | - | - | - |
| 0x004C | Status Quittierung DSC ACC Istwert: | 0-n | - | 0xFF | FUmweltTexte24 | - | - | - |
| 0x004D | Status Geschwindikgeitsregler Istwert: | 0-n | - | 0xFF | FUmweltTexte25 | - | - | - |
| 0x004E | Status Verzoegerung Istwert: | 0-n | - | 0xFF | FUmweltTexte26 | - | - | - |
| 0x004F | Status Schalter Warmlauf Istwert: | 0-n | - | 0xFF | FUmweltTexte27 | - | - | - |
| 0x0050 | Hydrauliktemperatur Istwert | Grad C | - | unsigned char | - | - | - | -48 |
| 0x0051 | Motortemperatur (Kuehlwasser) Istwert | Grad C | - | unsigned char | - | - | - | -48 |
| 0x0052 | Spannungsversorgung Ubatt Istwert | V | high | unsigned int | - | 25 | 1024 | - |
| 0x0053 | Sensorspannungsversorgung A Istwert | V | high | unsigned int | - | - | 1024 | - |
| 0x0054 | Sensorspannungsversorgung B Istwert | V | high | unsigned int | - | - | 1024 | - |
| 0x0055 | Fahrzeuggeschwindigkeit | km/h | high | signed int | - | - | 16 | - |
| 0x0056 | Radgeschwindigkeit hinten links Istwert | km/h | high | signed int | - | - | 16 | - |
| 0x0057 | Radgeschwindigkeit hinten rechts Istwert | km/h | high | signed int | - | - | 16 | - |
| 0x0058 | Radgeschwindigkeit vorne links Istwert | km/h | high | signed int | - | - | 16 | - |
| 0x0059 | Radgeschwindigkeit vorne rechts Istwert | km/h | high | signed int | - | - | 16 | - |
| 0x005A | Waehlhebelposition: | 0-n | high | 0xFF | FUmweltTexte5 | - | - | - |
| 0x005B | Zuendsignal: | 0-n | high | 0xFF | FUmweltTexte28 | - | - | - |
| 0x005C | Kilometerstand | km | high | long[] | - | - | - | - |
| 0x005D | Lenkwinkel (CAN) | Grad | high | signed int | - | 0.04395 | - | - |
| 0x005E | Fehlerstatus ungueltige Checks. der Abgleichwerte: | 0-n | - | 0xFF | FUmweltTexte29 | - | - | - |
| 0x005F | Fehlerstatus HSD 1 Schaltzylinder R/1, 6/7 und 2/4: | 0-n | - | 0xFF | FUmweltTexte29 | - | - | - |
| 0x0060 | Fehlerstatus HSD 2 Druckregler 1 und 2: | 0-n | - | 0xFF | FUmweltTexte29 | - | - | - |
| 0x0061 | Fehlerstatus HSD 3 Schaltzylinder 5/3 und Kupplung: | 0-n | - | 0xFF | FUmweltTexte29 | - | - | - |
| 0x0062 | Fehlerstatus EEPROM-Daten: | 0-n | - | 0xFF | FUmweltTexte29 | - | - | - |
| 0x0063 | Fehlerstatus Oszillatorfrequenz: | 0-n | - | 0xFF | FUmweltTexte29 | - | - | - |
| 0x0064 | Fehlerstatus SPI Kommunikation: | 0-n | - | 0xFF | FUmweltTexte29 | - | - | - |
| 0x0065 | Fehlerstatus Sensorversorgung A: | 0-n | - | 0xFF | FUmweltTexte29 | - | - | - |
| 0x0066 | Fehlerstatus Sensorversorgung B: | 0-n | - | 0xFF | FUmweltTexte29 | - | - | - |
| 0x0067 | Drehmoment Motor (CAN) | Nm | high | signed int | - | - | 2 | - |
| 0x0068 | Begrenzerdrehzahl Motor (CAN) | 1/min | high | unsigned int | - | - | - | - |
| 0x0069 | Motordrehzahl Rohwert (Sensor) | 1/min | high | signed int | - | - | - | - |
| 0x006A | Getriebeeingangsdrehzahl Rohwert | 1/min | high | signed int | - | - | - | - |
| 0x006B | Leerlaufdrehzahl Motor (CAN) | 1/min | - | unsigned char | - | 5 | - | - |
| 0x006C | Motordrehzahl (CAN) | 1/min | high | signed int | - | - | - | - |
| 0x006D | Drehzahl Temperaturbereich 1 (CAN) | 1/min | - | unsigned char | - | 50 | - | - |
| 0x006E | Drehzahl Temperaturbereich 2 (CAN) | 1/min | - | unsigned char | - | 50 | - | - |
| 0x006F | Duty-Cycle Signal OSC_IN | - | - | unsigned int | - | - | - | - |
| 0x0070 | Periodendauer Signal OSC_IN | - | - | unsigned int | - | - | - | - |
| 0x0071 | Status Shift Lock (Digitaleingang) Sollwert | - | high | 0x0001 | - | - | - | - |
| 0x0072 | Status Waehlhebel LED R (Digitalausgang) Sollwert | 0/1 | high | 0x0002 | - | - | - | - |
| 0x0073 | Status Waehlhebel LED S/D (Digitalausgang) Sollwert | 0/1 | high | 0x0400 | - | - | - | - |
| 0x0074 | Status Anlasserfreigabe (Digitaleingang) Sollwert | 0/1 | high | 0x0080 | - | - | - | - |
| 0x0075 | Status Hydraulikpumpenrelais (Digitaleingang) Sollwert | 0/1 | high | 0x0100 | - | - | - | - |
| 0x0076 | Status Getriebeoelpumperelais Sollwert | 0/1 | high | 0x0200 | - | - | - | - |
| 0x0077 | Getriebepositionssensor Schaltstange 2/4 Istwert | Ink | high | signed int | - | - | - | - |
| 0x0078 | Getriebepositionssensor Schaltstange 5/3 Istwert | Ink | high | signed int | - | - | - | - |
| 0x0079 | Getriebepositionssensor Schaltstange 6/7 Istwert | Ink | high | signed int | - | - | - | - |
| 0x007A | Getriebepositionssensor Schaltstange R/1 Istwert | Ink | high | signed int | - | - | - | - |
| 0x007B | Redundanter Getriebeposionssensor Schaltstange R/1 Istwert | Ink | high | signed int | - | - | - | - |
| 0x007C | Getriebepositionssensor Schaltstange 2/4 Rohwert | Ink | high | signed int | - | - | - | - |
| 0x007D | Getriebepositionssensor Schaltstange 5/3 Rohwert | Ink | high | signed int | - | - | - | - |
| 0x007E | Getriebepositionssensor Schaltstange 6/7 Rohwert | Ink | high | signed int | - | - | - | - |
| 0x007F | Getriebepositionssensor Schaltstange R/1 Rohwert | Ink | high | signed int | - | - | - | - |
| 0x0080 | Redundanter Getriebeposionssensor Schaltstange R/1 Rohwert | Ink | high | signed int | - | - | - | - |
| 0x0081 | Getriebepositionssensor Schaltstange 2/4 Sollwert | Ink | high | signed int | - | - | - | - |
| 0x0082 | Getriebepositionssensor Schaltstange 5/3 Sollwert | Ink | high | signed int | - | - | - | - |
| 0x0083 | Getriebepositionssensor Schaltstange 6/7 Sollwert | Ink | high | signed int | - | - | - | - |
| 0x0084 | Getriebepositionssensor Schaltstange R/1 Sollwert | Ink | high | signed int | - | - | - | - |
| 0x0085 | Kupplungsposition Istwert | Ink | high | signed int | - | - | - | - |
| 0x0086 | Kupplungsposition Rohwert Hauptsensor | Ink | high | signed int | - | - | - | - |
| 0x0087 | Kupplungsposition Rohwert redundanter Sensor | Ink | high | signed int | - | - | - | - |
| 0x0088 | Kupplungsposition Sollwert | Ink | high | signed int | - | - | - | - |
| 0x0089 | Bremssignale resetfest: | 0-n | - | 0xFF | FUmweltTexte19 | - | - | - |
| 0x008A | Digitaleingang 1 resetfest: | 0-n | high | 0xFFFF | FUmweltTexte30 | - | - | - |
| 0x008B | Aktueller Gang resetfest 0= Neutral, 1-7= Gang, 8= Rueckwaertsgang | - | high | unsigned char | - | - | - | - |
| 0x008C | Kilometerstand Istwert resetfest | km | high | unsigned int | - | 8 | - | - |
| 0x008D | Motordrehzahl resetfest | 1/min | high | signed int | - | - | - | - |
| 0x008E | Kupplungsposition Istwert resetfest | Ink | high | signed int | - | - | - | - |
| 0x008F | Kupplungsposition Sollwert resetfest | Ink | high | signed int | - | - | - | - |
| 0x0090 | Getriebestatus resetfest: | 0-n | - | 0xFF | FUmweltTexte3 | - | - | - |
| 0x0091 | Spannungsversorgung Ubatt im resetfesten Bereich | V | high | signed int | - | - | 1024 | - |
| 0x0092 | Radgeschwindigkeit der Hinterachse im resetfesten Bereich | km/h | high | signed int | - | - | 16 | - |
| 0x0093 | Radgeschwindigkeit der Vorderachse im resetfesten Bereich | km/h | high | signed int | - | - | 16 | - |
| 0x0094 | Spannungsversorgung Ubatt Rohwert resetfest | V | high | signed int | - | 25 | 1024 | - |
| 0x0095 | Gewuenschter Gang resetfest 0= Neutral, 1-7= Gang, 8= Rueckwaertsgang | - | - | unsigned char | - | - | - | - |
| 0x0096 | Reset-Counter MC | - | - | unsigned char | - | - | - | - |
| 0x0097 | Reset-Counter MU | - | - | unsigned char | - | - | - | - |
| 0x0098 | Getriebestatus: | 0-n | - | 0xFF | FUmweltTexte3 | - | - | - |
| 0x0099 | Kupplungsstatus: | 0-n | - | 0xFF | FUmweltTexte4 | - | - | - |
| 0x009A | Schluesselnummer (CAN): | 0-n | - | 0xFF | FUmweltTexte21 | - | - | - |
| 0x009B | Resetzaehler Sicherheitskonzept Getriebe | - | - | unsigned char | - | - | - | - |
| 0x009C | Byte Fehlervariable des Sicherheitskonzeptes Getriebe | - | high | unsigned int | - | - | - | - |
| 0x009D | SPI Timeout | - | high | unsigned int | - | - | - | - |
| 0x009E | SPI Hardwarefehler | - | high | unsigned char | - | - | - | - |
| 0x009F | Byte Status BIOS-SW | - | high | unsigned int | - | - | - | - |
| 0x00A0 | Kennzeichnung Fehler Bremssignal | - | - | unsigned char | - | - | - | - |
| 0x00A1 | Fehlerstatus CAN Bus: | 0-n | - | 0xFF | FUmweltTexte31 | - | - | - |
| 0x00A2 | Fehlerstatus PWM-Ausgang Kupplung: | 0-n | - | 0xFF | FUmweltTexte32 | - | - | - |
| 0x00A3 | Fehlerstatus PWM-Ausgang Druckregler 1: | 0-n | - | 0xFF | FUmweltTexte32 | - | - | - |
| 0x00A4 | Fehlerstatus PWM-Ausgang Druckregler 2: | 0-n | - | 0xFF | FUmweltTexte32 | - | - | - |
| 0x00A5 | Fehlerstatus PWM-Ausgang Schaltzylinder 2/4: | 0-n | - | 0xFF | FUmweltTexte32 | - | - | - |
| 0x00A6 | Fehlerstatus PWM-Ausgang Schaltzylinder 5/3: | 0-n | - | 0xFF | FUmweltTexte32 | - | - | - |
| 0x00A7 | Fehlerstatus PWM-Ausgang Schaltzylinder 6/7: | 0-n | - | 0xFF | FUmweltTexte32 | - | - | - |
| 0x00A8 | Fehlerstatus PWM-Ausgang Schaltzylinder R/1: | 0-n | - | 0xFF | FUmweltTexte32 | - | - | - |
| 0x00A9 | Kennzeichnung fehlerhafte Motordrehzahl: | 0-n | - | 0xFF | FUmweltTexte33 | - | - | - |
| 0x00AA | Fehlerstatus Netzwerk Manangement: | 0-n | - | 0xFF | FUmweltTexte29 | - | - | - |
| 0x00AB | Fehlerstatus Ansteuerung Hydraulikpumpe: | 0-n | - | 0xFF | FUmweltTexte32 | - | - | - |
| 0x00AC | Kennzeichnung fehlerhafter Kupplungspositionssensor: | 0-n | - | 0xFF | FUmweltTexte34 | - | - | - |
| 0x00AD | Kennzeichnung fehlerhafter Getriebepositionssensor R/1: | 0-n | - | 0xFF | FUmweltTexte34 | - | - | - |
| 0x00AE | Fehlerstatus Ansteuerung Shift Lock: | 0-n | - | 0xFF | FUmweltTexte34 | - | - | - |
| 0x00AF | Fehlerstatus Ansteuerung Relais Anlasser: | 0-n | - | 0xFF | FUmweltTexte34 | - | - | - |
| 0x00B0 | Kennzeichnung fehlerhafte Fahrzeuggeschwindigkeit | - | - | unsigned char | - | - | - | - |
| 0x00B1 | Kennzeichnung fehlerhafte Raddrehzahl hinten links | - | - | unsigned char | - | - | - | - |
| 0x00B2 | Kennzeichnung fehlerhafte Raddrehzahl hinten rechts | - | - | unsigned char | - | - | - | - |
| 0x00B3 | Kennzeichnung fehlerhafte Raddrehzahl vorne links | - | - | unsigned char | - | - | - | - |
| 0x00B4 | Kennzeichnung fehlerhafte Raddrehzahl vorne rechts | - | - | unsigned char | - | - | - | - |
| 0x00B5 | Handbremssignal gefilterter Rohwert | 0/1 | high | 0x0001 | - | - | - | - |
| 0x00B6 | Programmwahlschalter Plus gefilterter Rohwert (Digitaleingang 1) | 0/1 | high | 0x0800 | - | - | - | - |
| 0x00B7 | Programmwahlschalter Minus gefilterter Rohwert (Digitaleingang 1) | 0/1 | high | 0x1000 | - | - | - | - |
| 0x00B8 | Motorhaubenkontakt 1 gefilterter Rohwert (Digitaleingang 1) | 0/1 | high | 0x4000 | - | - | - | - |
| 0x00B9 | Motorhaubenkontakt 2 gefilterter Rohwert (Digitaleingang 1) | 0/1 | high | 0x8000 | - | - | - | - |
| 0x00BA | Waehlhebelsignal S1 gefilterter Rohwert | 0/1 | high | 0x0004 | - | - | - | - |
| 0x00BB | Waehlhebelsignal S2 gefilterter Rohwert | 0/1 | high | 0x0008 | - | - | - | - |
| 0x00BC | Waehlhebelsignal E1 gefilterter Rohwert | 0/1 | high | 0x0010 | - | - | - | - |
| 0x00BD | Waehlhebelsignal E2 gefilterter Rohwert | 0/1 | high | 0x0020 | - | - | - | - |
| 0x00BE | Waehlhebelsignal N1 gefilterter Rohwert | 0/1 | high | 0x0040 | - | - | - | - |
| 0x00BF | Waehlhebelsignal N2 gefilterter Rohwert | 0/1 | high | 0x0080 | - | - | - | - |
| 0x00C0 | Waehlhebelsignal R1 gefilterter Rohwert | 0/1 | high | 0x0100 | - | - | - | - |
| 0x00C1 | Waehlhebelsignal R2 gefilterter Rohwert | 0/1 | high | 0x0200 | - | - | - | - |
| 0x00C2 | Wake up gefilterter Rohwert (Digitaleingang 2) | 0/1 | high | 0x0001 | - | - | - | - |
| 0x00C3 | Lenkradschalter Plus gefilterter Rohwert (Digitalwert 2) | 0/1 | high | 0x0020 | - | - | - | - |
| 0x00C4 | Lenkradschalter Minus gefilterter Rohwert (Digitalwert 2) | 0/1 | high | 0x0040 | - | - | - | - |
| 0x00C5 | Status Shift Lock (Digitaleingang) Rohwert | 0/1 | high | 0x0001 | - | - | - | - |
| 0x00C6 | Status Getriebeoelpumpenrelais Rohwert | 0/1 | high | 0x0200 | - | - | - | - |
| 0x00C8 | Status Ansteuerung HSD 1 (Digitalausgang) Rohwert | 0/1 | high | 0x2000 | - | - | - | - |
| 0x00C9 | Status Ansteuerung HSD 2 (Digitalausgang) Rohwert | 0/1 | high | 0x4000 | - | - | - | - |
| 0x00CA | Status Ansteuerung HSD 3 (Digitalausgang) Rohwert | 0/1 | high | 0x8000 | - | - | - | - |
| 0x00CB | Status Anlasserfreigabe (Digitalausgang) | 0/1 | high | 0x0080 | - | - | - | - |
| 0x00CC | Status Hydraulikpumpenrelais (Digitalausgang) | 0/1 | high | 0x0100 | - | - | - | - |
| 0x00CD | Status Waehlhebel LED N (Digitalausgang) Rohwert | 0/1 | high | 0x0200 | - | - | - | - |
| 0x00CE | Status Bremsdruck (CAN): | 0-n | - | 0xFF | FUmweltTexte35 | - | - | - |
| 0x00CF | Status DSC (CAN): | 0-n | - | 0xFF | FUmweltTexte36 | - | - | - |
| 0x00D0 | Klemmenstatus 15 (CAN): | 0-n | - | 0xFF | FUmweltTexte37 | - | - | - |
| 0x00D1 | Klemmenstatus 50 (CAN): | 0-n | - | 0xFF | FUmweltTexte38 | - | - | - |
| 0x00D2 | Klemmenstatus R (CAN): | 0-n | - | 0xFF | FUmweltTexte39 | - | - | - |
| 0x00D3 | Status Lenkwinkel (CAN): | 0-n | - | 0xFF | FUmweltTexte40 | - | - | - |
| 0x00D4 | Status Drehmoment Motor (CAN): | 0-n | - | 0xFF | FUmweltTexte41 | - | - | - |
| 0x00D5 | Byte OBD Steuerfunktion (CAN) | - | - | unsigned char | - | - | - | - |
| 0x00D6 | Status Quittierung DSC ACC (CAN): | 0-n | - | 0xFF | FUmweltTexte24 | - | - | - |
| 0x00D7 | Status Regelung (CAN): | 0-n | - | 0xFF | FUmweltTexte22 | - | - | - |
| 0x00D8 | Status Schluesselnummer (CAN): | 0-n | - | 0xFF | FUmweltTexte42 | - | - | - |
| 0x00D9 | Status Geschwindigkeitsregler (CAN): | 0-n | - | 0xFF | FUmweltTexte43 | - | - | - |
| 0x00DA | Status Verzoegerung (CAN): | 0-n | - | 0xFF | FUmweltTexte26 | - | - | - |
| 0x00DB | Status Schalter Warmlauf (CAN): | 0-n | - | 0xFF | FUmweltTexte27 | - | - | - |
| 0x00DC | Byte Fehlerursache Sicherheitskonzept Kupplung | - | - | unsigned char | - | - | - | - |
| 0x00DD | Variable fuers Abschalten | - | - | unsigned char | - | - | - | - |
| 0x00DE | Variable fuers Initialisieren: | 0-n | - | 0xFF | FUmweltTexte48 | - | - | - |
| 0x00DF | Fehlerstatus Ansteuerung Waehlhebel LED R: | 0-n | - | 0xFF | FUmweltTexte32 | - | - | - |
| 0x00E0 | Fehlerstatus Ansteuerung Waehlhebel LED N: | 0-n | - | 0xFF | FUmweltTexte32 | - | - | - |
| 0x00E1 | Fehlerstatus Ansteuerung Waehlhebel LED S/D: | 0-n | - | 0xFF | FUmweltTexte32 | - | - | - |
| 0x00E2 | Adaption bzw. Testprogramm   : | 0-n | - | 0xFF | FUmweltTexte51 | - | - | - |
| 0x00E3 | Fehlermeldung einer Adaption : | 0-n | - | 0xFF | FUmweltTexte52 | - | - | - |
| 0x00E4 | Adaptionzustand im Fehlerfall: | 0-n | - | 0xFF | FUmweltTexte53 | - | - | - |
| 0x00E5 | Laengsbeschleunigung Rohwert | mV | high | signed int | - | 4.833 | - | - |
| 0x00E6 | Radgeschwindigkeit der Hinterachse | km/h | high | signed int | - | - | 16 | - |
| 0x00E7 | Radgeschwindigkeit hinten links (CAN) | km/h | high | signed int | - | - | 16 | - |
| 0x00E8 | Radgeschwindigkeit hinten rechts (CAN) | km/h | high | signed int | - | - | 16 | - |
| 0x00E9 | Radgeschwindigkeit der Vorderachse | km/h | high | signed int | - | - | 16 | - |
| 0x00EA | Hydraulikdruck Rohwert | bar | high | signed int | - | 0.1 | - | - |
| 0x00EB | Sensorspannungsversorgung A Rohwert | V | high | signed int | - | - | 1024 | - |
| 0x00EC | Sensorspannungsversorgung B Rohwert | V | high | signed int | - | - | 1024 | - |
| 0x00ED | Hydrauliktemperatur Rohwert | Grad C | high | unsigned char | - | - | - | -48 |
| 0x00EE | Radgeschwindigkeit vorne links (CAN) | km/h | high | signed int | - | - | 16 | - |
| 0x00EF | Radgeschwindigkeit vorne rechts (CAN) | km/h | high | signed int | - | - | 16 | - |
| 0x00F0 | Spannungsversorgung Ubatt Rohwert | V | high | signed int | - | - | 1024 | - |
| 0x00F1 | Gewuenschter Gang 0=N, 1-7, 8=R | - | - | unsigned char | - | - | - | - |
| 0x00F2 | Status Tuerkontakt (CAN): | 0-n | - | 0xFF | FUmweltTexte45 | - | - | - |
| 0x00F3 | Byte Umgebungsvariable Sicherheitskonzept Kupplung | - | high | unsigned int | - | - | - | - |
| 0x00F4 | Fahrtichtung vorwaerts | 0/1 | high | 0x0001 | - | - | - | - |
| 0x00F5 | Fahrtichtung neutral | 0/1 | high | 0x0002 | - | - | - | - |
| 0x00F6 | Fahrtichtung rueckwaerts | 0/1 | high | 0x0004 | - | - | - | - |
| 0x00F7 | Fahrtichtungsignal ungueltig | 0/1 | high | 0x0010 | - | - | - | - |
| 0x00F8 | Waehlhebel in R (Rueckwaerts) | 0/1 | high | 0x0020 | - | - | - | - |
| 0x00F9 | Waehlhebel in 0 (Neutral) | 0/1 | high | 0x0040 | - | - | - | - |
| 0x00FA | Waehlhebel in A (Automatik) | 0/1 | high | 0x0080 | - | - | - | - |
| 0x00FB | Waehlhebel in S (Sequentiell) | 0/1 | high | 0x0100 | - | - | - | - |
| 0x00FC | Waehlhebel in + (Gang hoch) | 0/1 | high | 0x0200 | - | - | - | - |
| 0x00FD | Waehlhebel in - (Gang runter) | 0/1 | high | 0x0400 | - | - | - | - |
| 0x00FE | Waehlhebelposition nicht definiert | 0/1 | high | 0x0800 | - | - | - | - |
| 0x0100 | Handbremssignal CAN aktiv | 0/1 | high | 0x01 | - | - | - | - |
| 0x0101 | Handbremssignal gefiltert Rohwert aktiv | 0/1 | high | 0x02 | - | - | - | - |
| 0x0102 | Handbremssignal gefiltert Istwert aktiv | 0/1 | high | 0x04 | - | - | - | - |
| 0x0103 | Kennzeichung Fehler Antriebsdrehzahlen 1 | - | high | unsigned char | - | - | - | - |
| 0x0104 | Kennzeichung Fehler Antriebsdrehzahlen 2 | - | high | unsigned char | - | - | - | - |
| 0x0105 | Getriebestatus : geschaltet | 0/1 | high | 0x0001 | - | - | - | - |
| 0x0106 | Getriebestatus : aktiv | 0/1 | high | 0x0002 | - | - | - | - |
| 0x0107 | Getriebestatus : Zwischenkuppeln | 0/1 | high | 0x0004 | - | - | - | - |
| 0x0108 | Getriebestatus : Synchronisation | 0/1 | high | 0x0008 | - | - | - | - |
| 0x0109 | Getriebestatus : Schaltweg Neutral | 0/1 | high | 0x0010 | - | - | - | - |
| 0x010A | Getriebestatus : Vorspannen | 0/1 | high | 0x0020 | - | - | - | - |
| 0x010B | Getriebestatus : Getriebeinitialisierung aktiv | 0/1 | high | 0x0040 | - | - | - | - |
| 0x010C | Getriebestatus : Synchronisation fertig | 0/1 | high | 0x0080 | - | - | - | - |
| 0x010D | Getriebestatus : Vor Synchronisation | 0/1 | high | 0x0100 | - | - | - | - |
| 0x010E | Getriebestatus : Vor Synchronisation aktiv | 0/1 | high | 0x0200 | - | - | - | - |
| 0x010F | Kupplungsstatus: offen | 0/1 | high | 0x0400 | - | - | - | - |
| 0x0110 | Kupplungsstatus: geschlossen | 0/1 | high | 0x0800 | - | - | - | - |
| 0x0111 | Kupplungsstatus: oeffnet | 0/1 | high | 0x1000 | - | - | - | - |
| 0x0112 | Kupplungsstatus: schliesst | 0/1 | high | 0x2000 | - | - | - | - |
| 0x0113 | Kupplungsstatus: Zwischenkuppeln aktiv | 0/1 | high | 0x4000 | - | - | - | - |
| 0x0114 | Fussbremse aktiv | 0/1 | high | 0x8000 | - | - | - | - |
| 0x0115 | Fahrpedal Rohwert | % | high | unsigned char | - | - | - | - |
| 0x0116 | Klemme R aus | 0/1 | high | 0x0001 | - | - | - | - |
| 0x0117 | Klemme R ein | 0/1 | high | 0x0002 | - | - | - | - |
| 0x0118 | Signal Klemme R ungueltig | 0/1 | high | 0x0004 | - | - | - | - |
| 0x0119 | Klemme 15 aus | 0/1 | high | 0x0008 | - | - | - | - |
| 0x011A | Klemme 15 ein | 0/1 | high | 0x0010 | - | - | - | - |
| 0x011B | Signal Klemme 15 ungueltig | 0/1 | high | 0x0020 | - | - | - | - |
| 0x011C | Klemme 50 aus | 0/1 | high | 0x0040 | - | - | - | - |
| 0x011D | Klemme 50 ein | 0/1 | high | 0x0080 | - | - | - | - |
| 0x011E | Signal Klemme 50 ungueltig | 0/1 | high | 0x0100 | - | - | - | - |
| 0x011F | Sollwert Status Shift Lock (0=Waehlhebel gesperrt, 1=nicht gesperrt) | 0/1 | high | 0x0001 | - | - | - | - |
| 0x0120 | Sollwert Status Waehlhebel LED R | 0/1 | high | 0x0002 | - | - | - | - |
| 0x0121 | Sollwert Status Weahlhebel LED S/D | 0/1 | high | 0x0004 | - | - | - | - |
| 0x0122 | Sollwert Status Anlasserfreigabe | 0/1 | high | 0x0008 | - | - | - | - |
| 0x0123 | Sollwert Status Hydraulikpumpenrelais | 0/1 | high | 0x0010 | - | - | - | - |
| 0x0124 | Sollwert Status Waehlhebel LED N | 0/1 | high | 0x0020 | - | - | - | - |
| 0x0125 | Rohwert Status Shift Lock (0=Waehlhebel gesperrt, 1=nicht gesperrt) | 0/1 | high | 0x0040 | - | - | - | - |
| 0x0126 | Rohwert Status Waehlhebel LED R | 0/1 | high | 0x0080 | - | - | - | - |
| 0x0127 | Rohwert Status Waehlhebel LED S/D | 0/1 | high | 0x0100 | - | - | - | - |
| 0x0128 | Rohwert Status Notansteuerung HSD1 | 0/1 | high | 0x0200 | - | - | - | - |
| 0x0129 | Rohwert Status Notansteuerung HSD2 | 0/1 | high | 0x0400 | - | - | - | - |
| 0x012A | Rohwert Status Notansteuerung HSD3 | 0/1 | high | 0x0800 | - | - | - | - |
| 0x012B | Rohwert Status Anlasserfreigabe | 0/1 | high | 0x1000 | - | - | - | - |
| 0x012C | Rohwert Status Hydraulikpumpenrelais | 0/1 | high | 0x2000 | - | - | - | - |
| 0x012D | Rohwert Status Waehlhebel LED N | 0/1 | high | 0x4000 | - | - | - | - |
| 0x012E | Zuendung aus | 0/1 | high | 0x0001 | - | - | - | - |
| 0x012F | Radio Ein-Stellung | 0/1 | high | 0x0002 | - | - | - | - |
| 0x0130 | Fahrtstellung | 0/1 | high | 0x0004 | - | - | - | - |
| 0x0131 | Anlassen | 0/1 | high | 0x0008 | - | - | - | - |
| 0x0132 | Bremssignal: Fussbremse betaetigt | 0/1 | high | 0x0010 | - | - | - | - |
| 0x0133 | Bremssignal: Handbremse betaetigt | 0/1 | high | 0x0020 | - | - | - | - |
| 0x0134 | Fehlerstatus Shift Lock: Kurzschluss nach Masse | 0/1 | high | 0x0040 | - | - | - | - |
| 0x0135 | Fehlerstatus Shift Lock: Kurzschluss nach Ubatt | 0/1 | high | 0x0080 | - | - | - | - |
| 0x0136 | Fehlerstatus Shift Lock: Leitungsunterbrechung | 0/1 | high | 0x0100 | - | - | - | - |
| 0x0137 | Fehlerstatus Anlasserfreigabe: Kurzschluss nach Masse | 0/1 | high | 0x0200 | - | - | - | - |
| 0x0138 | Fehlerstatus Anlasserfreigabe: Kurzschluss nach Ubatt | 0/1 | high | 0x0400 | - | - | - | - |
| 0x0139 | Fehlerstatus Anlasserfreigabe: Leitungsunterbrechung | 0/1 | high | 0x0800 | - | - | - | - |
| 0x013A | Fehlerstatus Ansteuerung Waehlhebel LED R: | 0-n | - | 0xFF | FUmweltTexte32 | - | - | - |
| 0x013B | Fehlerstatus Ansteuerung Waehlhebel LED N: | 0-n | - | 0xFF | FUmweltTexte32 | - | - | - |
| 0x013C | Fehlerstatus Ansteuerung Waehlhebel LED D/S: | 0-n | - | 0xFF | FUmweltTexte32 | - | - | - |
| 0x013D | Ungueltige Checks. der Abgleichwerte | 0/1 | high | 0x01 | - | - | - | - |
| 0x013E | Fehler EEPROM-Daten | 0/1 | high | 0x02 | - | - | - | - |
| 0x013F | Fehler Oszillatorfrequenz | 0/1 | high | 0x04 | - | - | - | - |
| 0x0140 | Fehler SPI Kommunikation | 0/1 | high | 0x08 | - | - | - | - |
| 0x0141 | ESTATE (1=Motor ein) | 0/1 | high | 0x0400 | - | - | - | - |
| 0x0142 | Kennzeichnung Fehler Bremssignal: | 0-n | - | 0xFF | FUmweltTexte46 | - | - | - |
| 0x0143 | Status Motordrehzahl CAN: | 0-n | - | 0xFF | FUmweltTexte47 | - | - | - |
| 0x0144 | Handbremse (1=angezogen) (Digitaleingang resetfest) | 0/1 | high | 0x0001 | - | - | - | - |
| 0x0145 | frei (Digitaleingang resetfest) | 0/1 | high | 0x0002 | - | - | - | - |
| 0x0146 | Waehlhebelschalter S1 (Digitaleingang resetfest) | 0/1 | high | 0x0004 | - | - | - | - |
| 0x0147 | Waehlhebelschalter S2 (Digitaleingang resetfest) | 0/1 | high | 0x0008 | - | - | - | - |
| 0x0148 | Waehlhebelschalter E1 (Digitaleingang resetfest) | 0/1 | high | 0x0010 | - | - | - | - |
| 0x0149 | Waehlhebelschalter E2 (Digitaleingang resetfest) | 0/1 | high | 0x0020 | - | - | - | - |
| 0x014A | Waehlhebelschalter N1 (Digitaleingang resetfest) | 0/1 | high | 0x0040 | - | - | - | - |
| 0x014B | Waehlhebelschalter N2 (Digitaleingang resetfest) | 0/1 | high | 0x0080 | - | - | - | - |
| 0x014C | Waehlhebelschalter R1 (Digitaleingang resetfest) | 0/1 | high | 0x0100 | - | - | - | - |
| 0x014D | Waehlhebelschalter R2 (Digitaleingang resetfest) | 0/1 | high | 0x0200 | - | - | - | - |
| 0x014E | ESTATE (1=Motor ein) (Digitaleingang resetfest) | 0/1 | high | 0x0400 | - | - | - | - |
| 0x014F | Programmwahlschalter PLUS (Digitaleingang resetfest) | 0/1 | high | 0x0800 | - | - | - | - |
| 0x0150 | Programmwahlschalter MINUS (Digitaleingang resetfest) | 0/1 | high | 0x1000 | - | - | - | - |
| 0x0151 | frei (Digitaleingang resetfest) | 0/1 | high | 0x2000 | - | - | - | - |
| 0x0152 | Motorhaubenkontakt 2 (rechts) (1=geschlossen) (Digitaleingang resetfest) | 0/1 | high | 0x4000 | - | - | - | - |
| 0x0153 | Motorhaubenkontakt 1 (links) (1=geschlossen) (Digitaleingang resetfest) | 0/1 | high | 0x8000 | - | - | - | - |
| 0x0154 | Getriebe gibt Abschaltfreigabe | 0/1 | high | 0x01 | - | - | - | - |
| 0x0155 | Kupplung gibt Abschaltfreigabe | 0/1 | high | 0x02 | - | - | - | - |
| 0x0156 | Wird nicht in NVRAM gespeichert | 0/1 | high | 0x04 | - | - | - | - |
| 0x0157 | Sofortabschaltung | 0/1 | high | 0x08 | - | - | - | - |
| 0x0158 | Botschaft Aussentemperatur/Relativzeit korrekt emfangen | 0/1 | high | 0x0001 | - | - | - | - |
| 0x0159 | Botschaft Bedienung Getriebewahlschalter korrekt empfangen | 0/1 | high | 0x0002 | - | - | - | - |
| 0x015A | Botschaft Geschwindigkeit korrekt empfangen | 0/1 | high | 0x0004 | - | - | - | - |
| 0x015B | Botschaft Kilometerstand /Reichweite korrekt empfangen | 0/1 | high | 0x0008 | - | - | - | - |
| 0x015C | Botschaft Klemmenstatus korrekt empfangen | 0/1 | high | 0x0010 | - | - | - | - |
| 0x015D | Botschaft Lenkradwinkel korrekt empfangen | 0/1 | high | 0x0020 | - | - | - | - |
| 0x015E | Botschaft Radgeschwindigkeit korrekt empfangen | 0/1 | high | 0x0040 | - | - | - | - |
| 0x015F | Botschaft Radtoleranzabgleich korrekt empfangen | 0/1 | high | 0x0080 | - | - | - | - |
| 0x0160 | Botschaft Anhaenger korrekt empfangen | 0/1 | high | 0x0100 | - | - | - | - |
| 0x0161 | Botschaft DSC korrekt empfangen | 0/1 | high | 0x0200 | - | - | - | - |
| 0x0162 | Botschaft Kombi korrekt empfangen | 0/1 | high | 0x0400 | - | - | - | - |
| 0x0163 | Botschaft ZV und Klappenzustand korrekt empfangen | 0/1 | high | 0x0800 | - | - | - | - |
| 0x0164 | Botschaft Status Fahrlicht korrekt empfangen | 0/1 | high | 0x1000 | - | - | - | - |
| 0x0165 | Botschaft Raddruecke korrekt empfangen | 0/1 | high | 0x2000 | - | - | - | - |
| 0x0166 | Botschaft Anzeige Checkcontrol Meldung korrekt gesendet | 0/1 | high | 0x01 | - | - | - | - |
| 0x0167 | Botschaft Anzeige Getriebedaten korrekt gesendet | 0/1 | high | 0x02 | - | - | - | - |
| 0x0168 | Botschaft Drehmomentanforderung EGS korrekt gesendet | 0/1 | high | 0x04 | - | - | - | - |
| 0x0169 | Botschaft Verzoergungsanforderung korrekt gesendet | 0/1 | high | 0x08 | - | - | - | - |
| 0x016A | Botschaft Rohdaten Laengsbeschleunigung korrekt Empfangen | 0/1 | high | 0x10 | - | - | - | - |
| 0x016B | Botschaft Getriebedaten korrekt Empfangen | 0/1 | high | 0x20 | - | - | - | - |
| 0x016C | Botschaft DME 1 korrekt empfangen | 0/1 | high | 0x01 | - | - | - | - |
| 0x016D | Botschaft DME 2 korrekt empfangen | 0/1 | high | 0x02 | - | - | - | - |
| 0x016E | Botschaft DME 3 korrekt empfangen | 0/1 | high | 0x04 | - | - | - | - |
| 0x016F | Botschaft Drehmoment 1 korrekt empfangen | 0/1 | high | 0x08 | - | - | - | - |
| 0x0170 | Botschaft Drehmoment 2 korrekt empfangen | 0/1 | high | 0x10 | - | - | - | - |
| 0x0171 | Botschaft Motordaten korrekt empfangen | 0/1 | high | 0x20 | - | - | - | - |
| 0x0172 | Botschaft M-Drive korrekt empfangen | 0/1 | high | 0x40 | - | - | - | - |
| 0x0173 | Botschaft SMG 1 korrekt gesendet | 0/1 | high | 0x01 | - | - | - | - |
| 0x0174 | Botschaft SMG 2 korrekt gesendet | 0/1 | high | 0x02 | - | - | - | - |
| 0x0175 | Botschaft SMG 3 korrekt gesendet | 0/1 | high | 0x04 | - | - | - | - |
| 0x0176 | Getriebetemperatur | Grad | high | unsigned char | - | - | - | -48 |
| 0x0177 | Einschaltdauer HE-Motor, kleine Zeitbasis | - | high | unsigned char | - | - | - | - |
| 0x0178 | Einschaltdauer HE-Motor, mittlere Zeitbasis | - | high | unsigned char | - | - | - | - |
| 0x0179 | Einschaltdauer HE-Motor, grosse Zeitbasis | - | high | unsigned char | - | - | - | - |
| 0x017A | Anzahl Getriebeschaltungen, kleine Zeitbasis | - | high | unsigned char | - | - | - | - |
| 0x017B | Anzahl Getriebeschaltungen, mittlere Zeitbasis | - | high | unsigned char | - | - | - | - |
| 0x017C | Anzahl Getriebeschaltungen, grosse Zeitbasis | - | high | unsigned char | - | - | - | - |
| 0x017D | Fehlerstatus Ansteuerung Getrieboelpumpenrelais: | 0-n | - | 0xFF | FUmweltTexte32 | - | - | - |
| 0x017E | Zeitdauer des erkannten Uebersetzungsverhaeltnises | - | high | unsigned int | - | - | - | - |
| 0x017F | Aus Uebersetzungverhältnis erkannter Gang | - | high | unsigned char | - | - | - | - |
| 0x0180 | Status System-Reset: | 0-n | high | 0xFF | FUmweltTexte49 | - | - | - |
| 0x0181 | PWM Wert der LED Ansteuerung | - | high | unsigned int | - | - | - | - |
| 0x0182 | Fehlerstatus Ventil: | 0-n | - | 0xFF | FUmweltTexte50 | - | - | - |

### HARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| 0x5000 | 0x00 | 0x00 | 0x09 | 0x00 |
| 0x5001 | 0x0A | 0x00 | 0x00 | 0x00 |
| 0x5002 | 0x0E | 0x0D | 0x0C | 0x0B |
| 0x5003 | 0x00 | 0x00 | 0x00 | 0x0F |
| 0x5004 | 0x00 | 0x00 | 0x10 | 0x00 |
| 0x5005 | 0x00 | 0x00 | 0x11 | 0x00 |
| 0x5006 | 0x00 | 0x00 | 0x12 | 0x00 |
| 0x5007 | 0x00 | 0x00 | 0x13 | 0x00 |
| 0x5008 | 0x00 | 0x00 | 0x14 | 0x00 |
| 0x5100 | 0x00 | 0x00 | 0x17 | 0x16 |
| 0x5101 | 0xF9 | 0x1A | 0x19 | 0x18 |
| 0x5102 | 0x1D | 0x00 | 0x1C | 0x1B |
| 0x5103 | 0x00 | 0x00 | 0x1F | 0x1E |
| 0x5104 | 0x00 | 0x00 | 0x21 | 0x20 |
| 0x5105 | 0x00 | 0x00 | 0x23 | 0x22 |
| 0x5106 | 0x26 | 0xFD | 0x25 | 0x24 |
| 0x5107 | 0x29 | 0xFE | 0x28 | 0x27 |
| 0x5108 | 0x2C | 0xFF | 0x2B | 0x2A |
| 0x5109 | 0x2F | 0x0100 | 0x2E | 0x2D |
| 0x510A | 0x32 | 0x0101 | 0x31 | 0x30 |
| 0x510B | 0x35 | 0x00 | 0x34 | 0x33 |
| 0x510C | 0x38 | 0x00 | 0x37 | 0x36 |
| 0x510D | 0x3B | 0x0106 | 0x3A | 0x39 |
| 0x510E | 0x3E | 0x0107 | 0x3D | 0x3C |
| 0x5200 | 0x41 | 0x00 | 0x40 | 0x3F |
| 0x5201 | 0x44 | 0x00 | 0x43 | 0x42 |
| 0x5202 | 0x47 | 0x00 | 0x46 | 0x45 |
| 0x5203 | 0x4A | 0x00 | 0x49 | 0x48 |
| 0x5204 | 0x4D | 0x00 | 0x4C | 0x4B |
| 0x5206 | 0x4E | 0x00 | 0x00 | 0x00 |
| 0x5208 | 0x4F | 0x00 | 0x00 | 0x00 |
| 0x5209 | 0x50 | 0x00 | 0x00 | 0x00 |
| 0x520A | 0x51 | 0x00 | 0x00 | 0x00 |
| 0x520B | 0x52 | 0x00 | 0x00 | 0x00 |
| 0x520C | 0x53 | 0x00 | 0x00 | 0x00 |
| 0x520D | 0x54 | 0x00 | 0x00 | 0x00 |
| 0x520E | 0x55 | 0x00 | 0x00 | 0x00 |
| 0x520F | 0x56 | 0x00 | 0x00 | 0x00 |
| 0x5210 | 0x57 | 0x00 | 0x00 | 0x00 |
| 0x5211 | 0x58 | 0x00 | 0x00 | 0x00 |
| 0x5212 | 0x59 | 0x00 | 0x00 | 0x00 |
| 0x5213 | 0x5A | 0x00 | 0x00 | 0x00 |
| 0x5214 | 0x5B | 0x00 | 0x00 | 0x00 |
| 0x5215 | 0x5C | 0x00 | 0x00 | 0x00 |
| 0x5217 | 0x5D | 0x00 | 0x00 | 0x00 |
| 0x5218 | 0x5E | 0x00 | 0x00 | 0x00 |
| 0x521A | 0x5F | 0x00 | 0x00 | 0x00 |
| 0x521B | 0x60 | 0x00 | 0x00 | 0x00 |
| 0x521C | 0x61 | 0x00 | 0x00 | 0x00 |
| 0x5400 | 0x00 | 0x64 | 0x63 | 0x62 |
| 0x5401 | 0x00 | 0x67 | 0x66 | 0x65 |
| 0x5402 | 0xFA | 0x6A | 0x69 | 0x68 |
| 0x5403 | 0x00 | 0x00 | 0x6B | 0x00 |
| 0x5404 | 0x00 | 0x00 | 0x6E | 0x00 |
| 0x5405 | 0x00 | 0x00 | 0x71 | 0x00 |
| 0x5406 | 0x00 | 0xF8 | 0xF7 | 0xF6 |
| 0x5500 | 0x77 | 0x76 | 0x75 | 0x74 |
| 0x5501 | 0x7B | 0x7A | 0x79 | 0x78 |
| 0x5502 | 0x7F | 0x7E | 0x7D | 0x7C |
| 0x5503 | 0x83 | 0x82 | 0x81 | 0x80 |
| 0x5504 | 0x87 | 0x86 | 0x85 | 0x84 |
| 0x5505 | 0x8B | 0x8A | 0x89 | 0x88 |
| 0x5506 | 0x8F | 0x8E | 0x8D | 0x8C |
| 0x5507 | 0x00 | 0x00 | 0x90 | 0x00 |
| 0x5508 | 0x00 | 0x00 | 0x91 | 0x00 |
| 0x5509 | 0x00 | 0x00 | 0x92 | 0x00 |
| 0xCF12 | 0x00 | 0x93 | 0x00 | 0x00 |
| 0xCF13 | 0x00 | 0x94 | 0x00 | 0x00 |
| 0xCF14 | 0x00 | 0x95 | 0x00 | 0x00 |
| 0xCF15 | 0x00 | 0x97 | 0x96 | 0x00 |
| 0xCF16 | 0x9A | 0x99 | 0x98 | 0x00 |
| 0xCF17 | 0x00 | 0x9B | 0x00 | 0x00 |
| 0xCF18 | 0x9E | 0x9D | 0x9C | 0x00 |
| 0xCF19 | 0x00 | 0x9F | 0x00 | 0x00 |
| 0xCF1A | 0x00 | 0xA0 | 0x00 | 0x00 |
| 0xCF1B | 0x00 | 0xA1 | 0x00 | 0x00 |
| 0xCF1C | 0x00 | 0xA2 | 0x00 | 0x00 |
| 0xCF1D | 0xA5 | 0xA4 | 0xA3 | 0x00 |
| 0xCF1E | 0xA8 | 0xA7 | 0xA6 | 0x00 |
| 0xCF1F | 0x00 | 0xA9 | 0x00 | 0x00 |
| 0xCF30 | 0x00 | 0xAA | 0x00 | 0x00 |
| 0xCF31 | 0x00 | 0xAB | 0x00 | 0x00 |
| 0xCF32 | 0x00 | 0xAC | 0x00 | 0x00 |
| 0xCF33 | 0x00 | 0xAD | 0x00 | 0x00 |
| 0xCF34 | 0x00 | 0xAE | 0x00 | 0x00 |
| 0xCF38 | 0x00 | 0xAF | 0x00 | 0x00 |
| 0xCF07 | 0x00 | 0xB0 | 0x00 | 0x00 |
| 0xCF25 | 0xB3 | 0xB2 | 0xB1 | 0x00 |
| 0xCF26 | 0xB6 | 0xB5 | 0xB4 | 0x00 |
| 0xCF27 | 0xB9 | 0xB8 | 0xB7 | 0x00 |
| 0xCF28 | 0xBC | 0xBB | 0xBA | 0x00 |
| 0xCF29 | 0xBF | 0xBE | 0xBD | 0x00 |
| 0xCF2A | 0x00 | 0xC1 | 0xC0 | 0x00 |
| 0xCF2B | 0xC4 | 0xC3 | 0xC2 | 0x00 |
| 0xCF35 | 0x00 | 0xC5 | 0x00 | 0x00 |
| 0xCF36 | 0x00 | 0xC6 | 0x00 | 0x00 |
| 0xCF37 | 0x00 | 0xC7 | 0x00 | 0x00 |
| 0xCF0B | 0x00 | 0xC8 | 0x00 | 0x00 |
| 0x4F00 | 0x00 | 0x00 | 0xC9 | 0x00 |
| 0x4F01 | 0x00 | 0x00 | 0xCA | 0x00 |
| 0x4F02 | 0x00 | 0x00 | 0xCB | 0x00 |
| 0x4F03 | 0x00 | 0x00 | 0xCC | 0x00 |
| 0x4F04 | 0x00 | 0x00 | 0xCD | 0x00 |
| 0x4F20 | 0x00 | 0x00 | 0xCE | 0x00 |
| 0x4F21 | 0xCF | 0x00 | 0x00 | 0x00 |
| 0x4F22 | 0xD0 | 0x0103 | 0x0102 | 0x00 |
| 0x4F40 | 0x00 | 0x00 | 0xD1 | 0x00 |
| 0x4F41 | 0x00 | 0x00 | 0x00 | 0xD2 |
| 0x4F42 | 0xFC | 0x00 | 0xFB | 0xD3 |
| 0x4F43 | 0x00 | 0x00 | 0x00 | 0xD4 |
| 0x4F44 | 0x00 | 0x00 | 0x00 | 0xD5 |
| 0x4F60 | 0xD6 | 0x00 | 0x00 | 0x00 |
| 0x4F61 | 0xD7 | 0x00 | 0x00 | 0x00 |
| 0x4F62 | 0x010A | 0xD8 | 0x00 | 0x010B |
| 0x4F63 | 0xD9 | 0x00 | 0x00 | 0x00 |
| 0x4F64 | 0xDA | 0x00 | 0x00 | 0x00 |
| 0x4F65 | 0x00 | 0xDD | 0xDC | 0xDB |
| 0x4F66 | 0x00 | 0x00 | 0x00 | 0xDE |
| 0x4F67 | 0x00 | 0x00 | 0x00 | 0xDF |
| 0x4F80 | 0xF3 | 0xF2 | 0xF1 | 0xF0 |
| 0x4F81 | 0x00 | 0x00 | 0x0105 | 0x0104 |
| 0x4FA0 | 0x0109 | 0x0108 | 0x00 | 0xF4 |
| 0x4FA1 | 0xF5 | 0x00 | 0x00 | 0x00 |
| default | 0x08 | 0x04 | 0x02 | 0x01 |

### HARTTEXTEINDIVIDUELL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | kein passendes Fehlersymptom |
| 0x01 | Signal oder Wert oberhalb Schwelle |
| 0x02 | Signal oder Wert unterhalb Schwelle |
| 0x04 | kein Signal oder Wert |
| 0x08 | unplausibles Signal oder Wert |
| 0x09 | Motorhaubenkontakt im Stand unplausibles Signal |
| 0x0A | Motorhaubenkontakt im Fahrbetrieb unplausibles Signal |
| 0x0B | Waehlhebel Totalausfall |
| 0x0C | Waehlhebel Einzelfehler R |
| 0x0D | Waehlhebel Einzelfehler N/E |
| 0x0E | Waehlhebel Einzelfehler S |
| 0x0F | Wake Up Kurzschluss gegen UBatt |
| 0x10 | Programmwahlschalter Plus Kurzschluss gegen Masse |
| 0x11 | Programmwahlschalter Minus Kurzschluss gegen Masse |
| 0x12 | Lenkradschalter Plus Kurzschluss gegen Masse |
| 0x13 | Lenkradschalter Minus Kurzschluss gegen Masse |
| 0x14 | Handbremssignal Kurzschluss gegen Masse |
| 0x15 | Hydraulikfuellstand |
| 0x16 | Hydrauliktemperatursensor Signal oberhalb Schwelle |
| 0x17 | Hydrauliktemperatursensor Signal unterhalb Schwelle |
| 0x18 | Hydraulikdrucksensor Signal oberhalb Schwelle |
| 0x19 | Hydraulikdrucksensor Signal unterhalb Schwelle |
| 0x1A | Hydraulikdrucksensor Masseleitung gebrochenl |
| 0x1B | Laengsbeschleunigungssensor Signal oberhalb Schwelle |
| 0x1C | Laengsbeschleunigungssensor Signal unterhalb Schwelle |
| 0x1D | Laengsbeschleunigungssensor unplausibles Signal |
| 0x1E | Spannungsversorgung UBatt Signal oberhalb Schwelle |
| 0x1F | Spannungsversorgung UBatt Signal unterhalb Schwelle |
| 0x20 | Sensorspannungsversorgung A Signal oberhalb Schwelle |
| 0x21 | Sensorspannungsversorgung A Signal unterhalb Schwelle |
| 0x22 | Sensorspannungsversorgung B Signal oberhalb Schwelle |
| 0x23 | Sensorspannungsversorgung B Signal unterhalb Schwelle |
| 0x24 | R/1 (Hauptsensor) Signal oberhalb Schwelle |
| 0x25 | R/1 (Hauptsensor) Signal unterhalb Schwelle |
| 0x26 | R/1 (Hauptsensor) unplausibles Signal |
| 0x27 | R/1 (redundanter Sensor) Signal oberhalb Schwelle |
| 0x28 | R/1 (redundanter Sensor) Signal unterhalb Schwelle |
| 0x29 | R/1 (redundanter Sensor) unplausibles Signal |
| 0x2A | 5/3 Signal oberhalb Schwelle |
| 0x2B | 5/3 Signal unterhalb Schwelle |
| 0x2C | 5/3 unplausibles Signal |
| 0x2D | 2/4 Signal oberhalb Schwelle |
| 0x2E | 2/4 Signal unterhalb Schwelle |
| 0x2F | 2/4 unplausibles Signal |
| 0x30 | 6/7 Signal oberhalb Schwelle |
| 0x31 | 6/7 Signal unterhalb Schwelle |
| 0x32 | 6/7 unplausibles Signal |
| 0x33 | Getriebeeingangsdrehzahl Signal oberhalb Schwelle |
| 0x34 | Getriebeeingangsdrehzahl Signal unterhalb Schwelle |
| 0x35 | Getriebeeingangsdrehzahl unplausibles Signal |
| 0x36 | Motordrehzahl (Sensorsignal) Signal oberhalb Schwelle |
| 0x37 | Motordrehzahl (Sensorsignal) Signal unterhalb Schwelle |
| 0x38 | Motordrehzahl (Sensorsignal) unplausibles Signal |
| 0x39 | Kupplungspositionsgeber (Hauptsensor) Signal oberhalb Schwelle |
| 0x3A | Kupplungspositionsgeber (Hauptsensor) Signal unterhalb Schwelle |
| 0x3B | Kupplungspositionsgeber (Hauptsensor) Kurzschluss gegen UBatt |
| 0x3C | Kupplungspositionsgeber (redundanter Sensor) Signal oberhalb Schwelle |
| 0x3D | Kupplungspositionsgeber (redundanter Sensor) Signal unterhalb Schwelle |
| 0x3E | Kupplungspositionsgeber (redundanter Sensor) Kurzschluss gegen UBatt |
| 0x3F | Motordrehzahl (CAN Signal) Signal oberhalb Schwelle |
| 0x40 | Motordrehzahl (CAN Signal) Signal unterhalb Schwelle |
| 0x41 | Motordrehzahl (CAN Signal) unplausibles Signal |
| 0x42 | Radgeschwindigkeit hinten links Signal oberhalb Schwelle |
| 0x43 | Radgeschwindigkeit hinten links Signal unterhalb Schwelle |
| 0x44 | Radgeschwindigkeit hinten links unplausibles Signal |
| 0x45 | Radgeschwindigkeit hinten rechts Signal oberhalb Schwelle |
| 0x46 | Radgeschwindigkeit hinten rechts Signal unterhalb Schwelle |
| 0x47 | Radgeschwindigkeit hinten rechts unplausibles Signal |
| 0x48 | Radgeschwindigkeit vorne links Signal oberhalb Schwelle |
| 0x49 | Radgeschwindigkeit vorne links Signal unterhalb Schwelle |
| 0x4A | Radgeschwindigkeit vorne links unplausibles Signal |
| 0x4B | Radgeschwindigkeit vorne rechts Signal oberhalb Schwelle |
| 0x4C | Radgeschwindigkeit vorne rechts Signal unterhalb Schwelle |
| 0x4D | Radgeschwindigkeit vorne rechts unplausibles Signal |
| 0x4E | Betriebsbremse unplausibles Signal |
| 0x4F | Drehmoment unplausibles Signal |
| 0x50 | Fahrpedal unplausibles Signal |
| 0x51 | Lenkwinkel unplausibles Signal |
| 0x52 | Querbeschleunigung unplausibles Signal |
| 0x53 | Laengsbeschleunigung unplausibles Signal |
| 0x54 | Leerlaufdrehzahl unplausibles Signal |
| 0x55 | Status Geschwindigkeitsregelung unplausibles Signal |
| 0x56 | Status Fahrertuer unplausibles Signal |
| 0x57 | Status Klemme R, 15 und 50 unplausibles Signal |
| 0x58 | Schluesselnummer unplausibles Signal |
| 0x59 | Status Anhaenger unplausibles Signal |
| 0x5A | Status Regelungen unplausibles Signal |
| 0x5B | Status DSC unplausibles Signal |
| 0x5C | Status Verzoegerung unplausibles Signal |
| 0x5D | Bremsdruck unplausibles Signal |
| 0x5E | Drehzahl Temperaturbereich 1 unplausibles Signal |
| 0x5F | Begrenzerdrehzahl unplausibles Signal |
| 0x60 | Status OBD Steuerfunktion unplausibles Signal |
| 0x61 | Status Schalter Warmlauf unplausibles Signal |
| 0x62 | Shift Lock Kurzschluss gegen UBatt |
| 0x63 | Shift Lock Kurzschluss gegen Masse |
| 0x64 | Shift Lock Leitungsunterbrechung |
| 0x65 | Anlasserfreigabe Kurzschluss gegen UBatt |
| 0x66 | Anlasserfreigabe Kurzschluss gegen Masse |
| 0x67 | Anlasserfreigabe Leitungsunterbrechung |
| 0x68 | Hydraulikpumpenrelais Kurzschluss gegen UBatt |
| 0x69 | Hydraulikpumpenrelais Kurzschluss gegen Masse |
| 0x6A | Hydraulikpumpenrelais Leitungsunterbrechung |
| 0x6B | PWM Ausgang Ansteuerung Waehlhebel LED R Symptomspezifisch |
| 0x6E | PWM Ausgang Ansteuerung Wahlhebel LED N Symptomspezifisch |
| 0x71 | PWM Ausgang Ansteuerung Wahlhebel LED S/D Symptomspezifisch |
| 0x74 | Getriebeventil DRV1 Kurzschluss gegen UBatt |
| 0x75 | Getriebeventil DRV1 Kurzschluss gegen Masse |
| 0x76 | Getriebeventil DRV1 Leitungsunterbrechung |
| 0x77 | Getriebeventil DRV1 unplausibles Signal |
| 0x78 | Getriebeventil DRV2 Kurzschluss gegen UBatt |
| 0x79 | Getriebeventil DRV2 Kurzschluss gegen Masse |
| 0x7A | Getriebeventil DRV2 Leitungsunterbrechung |
| 0x7B | Getriebeventil DRV2 unplausibles Signal |
| 0x7C | Getriebeventil PWV1 Kurzschluss gegen UBatt |
| 0x7D | Getriebeventil PWV1 Kurzschluss gegen Masse |
| 0x7E | Getriebeventil PWV1 Leitungsunterbrechung |
| 0x7F | Getriebeventil PWV1 unplausibles Signal |
| 0x80 | Getriebeventil PWV2 Kurzschluss gegen UBatt |
| 0x81 | Getriebeventil PWV2 Kurzschluss gegen Masse |
| 0x82 | Getriebeventil PWV2 Leitungsunterbrechung |
| 0x83 | Getriebeventil PWV2 unplausibles Signal |
| 0x84 | Getriebeventil PWV3 Kurzschluss gegen UBatt |
| 0x85 | Getriebeventil PWV3 Kurzschluss gegen Masse |
| 0x86 | Getriebeventil PWV3 Leitungsunterbrechung |
| 0x87 | Getriebeventil PWV3 unplausibles Signal |
| 0x88 | Getriebeventil PWV4 Kurzschluss gegen UBatt |
| 0x89 | Getriebeventil PWV4 Kurzschluss gegen Masse |
| 0x8A | Getriebeventil PWV4 Leitungsunterbrechung |
| 0x8B | Getriebeventil PWV4 unplausibles Signal |
| 0x8C | Kupplungsventil Kurzschluss gegen UBatt |
| 0x8D | Kupplungsventil Kurzschluss gegen Masse |
| 0x8E | Kupplungsventil Leitungsunterbrechung |
| 0x8F | Kupplungsventil unplausibles Signal |
| 0x90 | Spannungsversorgung Magnetventile PWV1, PWV3 und PWV4 Kurzschluss gegen Masse |
| 0x91 | Spannungsversorgung Magnetventile DRV1und DRV2 Kurzschluss gegen Masse |
| 0x92 | Spannungsversorgung Magnetventile PWV2 und Kupplungsventil Kurzschluss gegen Masse |
| 0x93 | Fahrlicht Timeout |
| 0x94 | Raddrücke Timeout |
| 0x95 | Außentemperatur Relativzeit Timeout |
| 0x96 | Bedienung Getriebewahlschalter Fehler Alivezaehler |
| 0x97 | Bedienung Getriebewahlschalter Timeout |
| 0x98 | Geschwindigkeit Fehler Alivezaehler |
| 0x99 | Geschwindigkeit Timeout |
| 0x9A | Geschwindigkeit Fehler Checksumme |
| 0x9B | Kilometerstand Istwert / Reichweite Timeout |
| 0x9C | Klemmenstatus Fehler Alivezaehler |
| 0x9D | Klemmenstatus Timeout |
| 0x9E | Klemmenstatus Fehler Checksumme |
| 0x9F | Lenkradwinkel Timeout |
| 0xA0 | Radgeschwindigkeit Timeout |
| 0xA1 | Radtoleranzabgleich Timeout |
| 0xA2 | Anhaenger Timeout |
| 0xA3 | DSC Fehler Alivezaehler |
| 0xA4 | DSC Timeout |
| 0xA5 | DSC Fehler Checksumme |
| 0xA6 | Kombi Fehler Alivezaehler |
| 0xA7 | Kombi Timeout |
| 0xA8 | Kombi Fehler Checksumme |
| 0xA9 | ZV Klappenzustand Timeout |
| 0xAA | Checkcontrol Meldungen Timeout |
| 0xAB | Anzeige Getriebedaten Timeout |
| 0xAC | Drehmomentanforderung EGS Timeout |
| 0xAD | Verzoegerungsanforderung ACC Timeout |
| 0xAE | Getriebedaten Timeout |
| 0xAF | Rohdaten Laengsbeschleunigung Timeout |
| 0xB0 | CAN Ueberwachung PT CAN Bus Off |
| 0xB1 | DME 1 Fehler Alivezaehler |
| 0xB2 | DME 1 Timeout |
| 0xB3 | DME 1 Fehler Checksumme |
| 0xB4 | DME 2 Fehler Alivezaehler |
| 0xB5 | DME 2 Timeout |
| 0xB6 | DME 2 Fehler Checksumme |
| 0xB7 | DME 3 Fehler Alivezaehler |
| 0xB8 | DME 3 Timeout |
| 0xB9 | DME 3 Fehler Checksumme |
| 0xBA | Drehmoment 1 Fehler Alivezaehler |
| 0xBB | Drehmoment 1 Timeout |
| 0xBC | Drehmoment 1 Fehler Checksumme |
| 0xBD | Drehmoment 3 Fehler Alivezaehler |
| 0xBE | Drehmoment 3 Timeout |
| 0xBF | Drehmoment 3 Fehler Checksumme |
| 0xC0 | Motordaten Fehler Alivezaehler |
| 0xC1 | Motordaten Timeout |
| 0xC2 | M-Drive Fehler Alivezaehler |
| 0xC3 | M-Drive Timeout |
| 0xC4 | M-Drive Fehler Checksumme |
| 0xC5 | SMG 1 Timeout |
| 0xC6 | SMG 2 Timeout |
| 0xC7 | SMG 3 Timeout |
| 0xC8 | CAN Ueberwachung SMG CAN Bus Off |
| 0xC9 | Sicherheitskonzept Ebene 2 Getriebe fehlerortspezifisch |
| 0xCA | Sicherheitskonzept Ebene 2 RAM fehlerortspezifisch |
| 0xCB | Sicherheitskonzept Ebene 2 Input fehlerortspezifisch |
| 0xCC | Sicherheitskonzept Ebene 2 Kupplung fehlerortspezifisch |
| 0xCD | Sicherheitskonzept Ebene 3 fehlerortspezifisch |
| 0xCE | NVRAM Laden unplausibel |
| 0xCF | Steuergeraet intern Auswertung ESTATE unplausibler Wert |
| 0xD0 | Steuergeraet intern Adaptionswerte Getriebe fehlerhafte Checksumme |
| 0xD1 | Hydraulikeinheit Druckbandunterschreitung Wert unterhalb Schwelle |
| 0xD2 | Hydraulikeinheit Druckbandüberschreitung Wert oberhalb Schwelle |
| 0xD3 | Einschalthaeufigkeit HE Motor oberhalb Schwelle |
| 0xD4 | Hydraulikeinheit Einschaltdauer Wert oberhalb Schwelle |
| 0xD5 | Hydraulikeinheit Missbrauch Wert oberhalb Schwelle |
| 0xD6 | Getriebeadaption unplausibler Wert |
| 0xD7 | Offsetadaption Laengsbeschleunigungssensor unplausibler Wert |
| 0xD8 | Kupplungsschleifpunkt Einlern- und Ansteuerfunktion unplausibler Wert |
| 0xD9 | Entlueftung unplausibler Wert |
| 0xDA | Aktionsmodi unplausibler Wert |
| 0xDB | Energiesparmodi Fertigung aktiv |
| 0xDC | Energiesparmodi Transport aktiv |
| 0xDD | Energiesparmodi Werkstatt aktiv |
| 0xDE | Eines oder mehrere der Getriebeadaptionsprogramme wurden nicht durchgefuehrt |
| 0xDF | Eines oder mehrere der Kupplungsadaptionsprogramme wurden nicht durchgefuehrt |
| 0xF0 | Getriebeproblem: Gang nicht auslegbar |
| 0xF1 | Getriebeproblem: Gang nicht einlegbar |
| 0xF2 | Getriebeproblem: Gangspringer |
| 0xF3 | Getriebeproblem: Drehzahlpruefung |
| 0xF4 | Kupplung Ansteuerung: Statische Soll - Ist Abweichung der Kupplung |
| 0xF5 | Kupplungsueberlastung |
| 0xF6 | Kurzschluss gegen Ubatt |
| 0xF7 | Kurzschluss gegen Masse |
| 0xF8 | Leitungsunterbrechung |
| 0xF9 | Hydraulikdrucksensor ausserhalb Messbereich |
| 0xFA | Hydraulikpumpenrelais klebender Relaiskontakt |
| 0xFB | Druckaufbaugeschwindigkeit unterhalb Schwelle |
| 0xFC | Hydraulikeinheit Baugruppe Leckage |
| 0xFD | R/1 (Hauptsensor) Trägerfrequenz PWM ausserhalb Bereich |
| 0xFE | R/1 (redundanter Sensor)  Trägerfrequenz PWM ausserhalb Bereich |
| 0xFF | 5/3 Trägerfrequenz PWM ausserhalb Bereich |
| 0x0100 | 2/4 Trägerfrequenz PWM ausserhalb Bereich |
| 0x0101 | 6/7 Trägerfrequenz PWM ausserhalb Bereich |
| 0x0102 | Steuergeraet intern Adaptionswerte Getriebe fehlerhafte Stromwerte |
| 0x0103 | Steuergeraet intern Adaptionswerte Getriebe fehlerhafte Positionswerte |
| 0x0104 | Sensor R/1 zu redundantem Signal unplausibel |
| 0x0105 | Uebersetzungsverhältnis beim Synchronisieren unplausibel |
| 0x0106 | Kupplungspositionsgeber (Hauptsensor) Massebruch Sensorversorgung |
| 0x0107 | Kupplungspositionsgeber (redundanter Sensor) Massebruch Sensorversorgung |
| 0x0108 | Kupplung Ansteuerung: Beide Sensoren fehlerhaft |
| 0x0109 | Kupplung Ansteuerung: Summenspannung unplausibel |
| 0x010A | Fehler Checksumme |
| 0x010B | Kupplungsschleifpunkt: Einlern- und Ansteuerfunktion fehlerhaft |
| 0xFFFF | Fehlersymptom nicht definiert |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### FUMWELTTEXTE1

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Neutral |
| 0x01 | 1.Gang |
| 0x02 | 2.Gang |
| 0x03 | 3.Gang |
| 0x04 | 4.Gang |
| 0x05 | 5.Gang |
| 0x06 | 6.Gang |
| 0x07 | 7.Gang |
| 0x08 | Rueckwaertsgang |
| 0xXY | nicht definiert |

### FUMWELTTEXTE2

| WERT | UWTEXT |
| --- | --- |
| 0x01 | vorwaerts |
| 0x02 | neutral |
| 0x03 | rueckwaerts |
| 0xFF | ungueltig |
| 0xXY | nicht definiert |

### FUMWELTTEXTE3

| WERT | UWTEXT |
| --- | --- |
| 0x00 | geschaltet |
| 0x01 | aktiv |
| 0x02 | Zwischenkuppeln |
| 0x03 | Synchronisation |
| 0x04 | Schaltweg Neutral |
| 0x05 | Waehlwinkel einregeln |
| 0x06 | Vorspannen |
| 0x07 | Waehlwinkel ablegen aus |
| 0x08 | Getriebe init aktiv |
| 0x09 | Synchronisation fertig |
| 0x0A | vor Synchronisation |
| 0xXY | nicht definiert |

### FUMWELTTEXTE4

| WERT | UWTEXT |
| --- | --- |
| 0x00 | offen |
| 0x01 | geschlossen |
| 0x02 | oeffnet |
| 0x03 | schliesst |
| 0x04 | Zwischenkuppeln aktiv |
| 0xXY | nicht definiert |

### FUMWELTTEXTE5

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Waehlhebel in P (Parken) |
| 0x02 | Waehlhebel in R (Rueckwaerts) |
| 0x03 | Waehlhebel in N (Neutral) |
| 0x04 | Waehlhebel in A (Automatik) |
| 0x05 | Waehlhebel in S (Sequentiell) |
| 0x06 | Waehlhebel in + (Gang hoch) |
| 0x07 | Waehlhebel in - (Gang runter) |
| 0xFF | Waehlhebelposition nicht definiert |

### FUMWELTTEXTE6

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Bremse nicht betaetigt |
| 0x01 | nur Bremslichtschalter geschaltet |
| 0x02 | nur Bremslichttestschalter geschaltet |
| 0x03 | Bremslicht- und -test-schalter |
| 0x07 | Signal unguelitg |
| 0xFF | nicht definiert |

### FUMWELTTEXTE16

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Kein Anhaenger vorhanden |
| 0x01 | Anhaenger vorhanden |
| 0x03 | Signal ungueltig |
| 0xFF | nicht definiert |

### FUMWELTTEXTE17

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Fahrzeug steht |
| 0x01 | Fahrzeug faehrt vorwaerts |
| 0x02 | Fahrzeug faehrt rueckwaerts |
| 0x03 | Fahrzeug faehrt (Richtungserkennung nicht moeglich) |
| 0xFF | nicht definiert |

### FUMWELTTEXTE18

| WERT | UWTEXT |
| --- | --- |
| 0x00 | inaktiv |
| 0x01 | aktiv |
| 0x03 | Signal ungueltig |
| 0xFF | nicht definiert |

### FUMWELTTEXTE19

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Fussbremse und Handbremse wurde nicht betaetigt |
| 0x01 | Fussbremse betaetigt |
| 0x02 | Handbremse betaetigt |
| 0x03 | Fussbremse und Handbremse betaetigt |
| 0xFF | nicht definiert |

### FUMWELTTEXTE20

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Unbelastet |
| 0x01 | Leichte Belastung |
| 0x02 | Mittlere Belastung |
| 0x03 | Hohe Belastung |
| 0xXY | nicht definiert |

### FUMWELTTEXTE21

| WERT | UWTEXT |
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
| 0x0E | Nachlaufschluessel |
| 0x0F | Signal ungueltig |
| 0xXY | nicht definiert |

### FUMWELTTEXTE22

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Keine Regelung |
| 0x01 | ABS Regelung |
| 0x02 | ASC Regelung |
| 0x04 | DSC Regelung |
| 0x08 | HBA Regelung |
| 0x10 | MSR Regelung |
| 0x20 | EBV Regelung |
| 0x80 | ASC DSC ausgeschaltet |
| 0xXY | nicht definiert |

### FUMWELTTEXTE23

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Warm up cycle |
| 0x02 | Aktivbedingung fuer Berechnung Drivingcycle in EGS/SMG |
| 0x04 | Freeze Frame verwaltet fuer Master |
| 0x08 | Freeze Frame verwaltet fuer EGS |
| 0x10 | Freeze Frame verwaltet fuer EKP |
| 0x14 | Freeze Frame verwaltet fuer DME links |
| 0xFF | Signal ungueltig |
| 0xXY | nicht definiert |

### FUMWELTTEXTE24

| WERT | UWTEXT |
| --- | --- |
| 0x00 | In Ordnung |
| 0x01 | Plausibiltaets-/Aktivitaetsfehler |
| 0x02 | Timeoutfehler |
| 0x03 | Signal ungueltig |
| 0xXY | nicht definiert |

### FUMWELTTEXTE25

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Keine Anforderung |
| 0x01 | Konstantfahrt |
| 0x02 | Wiederaufnahme |
| 0x04 | Tempomat Setze Beschleunigung |
| 0x08 | Tempomat Setze Verzoegern |
| 0xXY | nicht definiert |

### FUMWELTTEXTE26

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Keine Anforderung |
| 0x01 | Anforderung ACC akzeptiert |
| 0x02 | Anforderung EMF akzeptiert |
| 0x03 | Anforderung HBA akzeptiert |
| 0x04 | Anforderung ACC umgesetzt |
| 0x05 | Anforderung ACC umgesetzt und Rueckschaltaufforderung ACC (nicht SMG) |
| 0x06 | Anforderung ACC umgesetzt und Rueckschaltaufforderung ACC (nicht SMG) & Schleppmomentunterstuetzung |
| 0x0E | Keine Anforderung umgesetzt |
| 0x0F | Signal ungueltig |
| 0xXY | nicht definiert |

### FUMWELTTEXTE27

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Motor im Warmlauf |
| 0x01 | Motor betriebswarm |
| 0x02 | Motor Uebertemperatur |
| 0x03 | Signal ungueltig |
| 0xXY | nicht definiert |

### FUMWELTTEXTE28

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Zuendung aus |
| 0x01 | Radio Ein-Stellung |
| 0x02 | Fahrtstellung |
| 0x03 | Anlassen |
| 0xXY | nicht definiert |

### FUMWELTTEXTE29

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Kein Fehler vorhanden |
| 0x01 | Fehler |
| 0xXY | nicht definiert |

### FUMWELTTEXTE30

| WERT | UWTEXT |
| --- | --- |
| 0x0001 | Handbremssignal |
| 0x0002 | frei |
| 0x0004 | Waehlhebelschalter S1 |
| 0x0008 | Waehlhebelschalter S2 |
| 0x0010 | Waehlhebelschalter E1 |
| 0x0020 | Waehlhebelschalter E2 |
| 0x0040 | Waehlhebelschalter N1 |
| 0x0080 | Waehlhebelschalter N2 |
| 0x0100 | Waehlhebelschalter R1 |
| 0x0200 | Waehlhebelschalter R2 |
| 0x0400 | ESTATE |
| 0x0800 | Programmwahlschalter PLUS |
| 0x1000 | Programmwahlschalter MINUS |
| 0x2000 | frei |
| 0x4000 | Motorhaubenkontakt 2 |
| 0x8000 | Motorhaubenkontakt 1 |
| 0xXY | nicht definiert |

### FUMWELTTEXTE31

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Kein Fehler vorhanden |
| 0x01 | Bus Off local CAN |
| 0x02 | Bus Off local PT CAN |
| 0xXY | nicht definiert |

### FUMWELTTEXTE32

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Kein Fehler vorhanden |
| 0x01 | Kurzschluss nach Masse |
| 0x02 | Kurzschluss nach Ubatt |
| 0x04 | Leitungsunterbrechung |
| 0xXY | nicht definiert |

### FUMWELTTEXTE33

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Sensorsignal |
| 0x02 | CAN Signal |
| 0xXY | nicht definiert |

### FUMWELTTEXTE34

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Kein Fehler vorhanden |
| 0x01 | Hauptsensor |
| 0x02 | Redundanter Sensor |
| 0xXY | nicht definiert |

### FUMWELTTEXTE35

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Kein Bremsdruck |
| 0x01 | Bremsdruck vorhanden |
| 0x02 | Keine Aussage moeglich |
| 0x03 | Signal ungueltig |
| 0xXY | nicht definiert |

### FUMWELTTEXTE36

| WERT | UWTEXT |
| --- | --- |
| 0x00 | In Ordnung |
| 0x01 | Passiv |
| 0x02 | Defekt |
| 0x03 | Reserviert |
| 0x04 | Traktionsmodus |
| 0x05 | Reserviert |
| 0x06 | Unterspannung DSC |
| 0xXY | nicht definiert |

### FUMWELTTEXTE37

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Klemme 15 AUS |
| 0x01 | Klemme 15 EIN |
| 0x03 | Signal ungueltig |
| 0xXY | nicht definiert |

### FUMWELTTEXTE38

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Klemme 50 AUS |
| 0x01 | Klemme 50 EIN |
| 0x03 | Signal ungueltig |
| 0xXY | nicht definiert |

### FUMWELTTEXTE39

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Klemme R AUS |
| 0x01 | Klemme R EIN |
| 0x03 | Signal ungueltig |
| 0xXY | nicht definiert |

### FUMWELTTEXTE40

| WERT | UWTEXT |
| --- | --- |
| 0x00 | In Ordnung |
| 0x01 | Kein LWS-Signal verfuegbar |
| 0x02 | LWS-Signal fehlerhaft |
| 0x03 | Signal ungueltig |
| 0xXY | nicht definiert |

### FUMWELTTEXTE41

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Eingriffswunsch wird ausgefuehrt |
| 0x01 | Eingriffswunsch wird nicht vollstaendig ausgefuehrt |
| 0x02 | Eingriffswunsch wird nicht vollstaendig ausgefuehrt |
| 0x03 | Eingriffswunsch wird nicht vollstaendig ausgefuehrt |
| 0x0F | Signal ungueltig |
| 0xXY | nicht definiert |

### FUMWELTTEXTE42

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Kein Schluessel erkannt |
| 0x01 | Gueltiger Schluessel erkannt |
| 0x02 | Ungueltiger Schluessel erkannt |
| 0x03 | Signal ungueltig |
| 0xXY | nicht definiert |

### FUMWELTTEXTE43

| WERT | UWTEXT |
| --- | --- |
| 0x00 | ACC-Regelung PWG nicht getreten |
| 0x01 | ACC-Regelung PWG getreten |
| 0x04 | FGR-Regelung Verzoegern |
| 0x05 | FGR-Regelung Konstantfahrt |
| 0x06 | FGR-Regelung Wiederaufnahme |
| 0x07 | FGR-Regelung Beschleunigen |
| 0x08 | Keine ACC-Regelung PWG nicht getreten |
| 0x09 | Keine ACC-Regelung PWG getreten |
| 0x0A | ACC-Regelung PWG uebertreten |
| 0x0B | PWG Kickdown |
| 0x0F | Signal ungueltig |
| 0xXY | nicht definiert |

### FUMWELTTEXTE44

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Unerlaubtes Anfahren |
| 0x02 | Unerlaubtes Oeffnen der Kupplung |
| 0x03 | Zu schnelles Schliessen der Kupplung nach Radabriss |
| 0xXY | nicht definiert |

### FUMWELTTEXTE45

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Fahrertuer ist geschlossen |
| 0x01 | Fahrertuer ist offen |
| 0x02 | Signal unplausibel |
| 0x03 | ungueltig |
| 0xXY | nicht definiert |

### FUMWELTTEXTE46

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Bremskontakte identisch |
| 0x01 | Bremskontakte unterschiedlich |
| 0x02 | Verzoegerung aber kein Bremssignal |
| 0x04 | Beschleunigung aber Bremssignal |
| 0xXY | nicht definiert |

### FUMWELTTEXTE47

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Motordrehzahl CAN in Ordnung |
| 0x01 | Drehzahlgeber defekt |
| 0x02 | Reserve |
| 0x03 | Signal ungueltig |
| 0xXY | nicht definiert |

### FUMWELTTEXTE48

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Initialisierung laeuft |
| 0x01 | Initialisierung ist beendet |
| 0xXY | nicht definiert |

### STELLGLIEDER

| STELLGLIED | STEUERART1 | STEUERART2 | PIN | PIN_INK |
| --- | --- | --- | --- | --- |
| MAGNETVENTIL_KUPPLUNG | STROMVORGABE, POSITIONSVORGABE | 0-3000, 0-1023 | 0x67 | 0x7B |
| MAGNETVENTIL_R_1 | STROMVORGABE, POSITIONSVORGABE | 0-3000, 0-1023 | 0x68 | 0x77 |
| MAGNETVENTIL_5_3 | STROMVORGABE, POSITIONSVORGABE | 0-3000, 0-1023 | 0x69 | 0x78 |
| MAGNETVENTIL_2_4 | STROMVORGABE, POSITIONSVORGABE | 0-3000, 0-1023 | 0x6A | 0x79 |
| MAGNETVENTIL_6_7 | STROMVORGABE, POSITIONSVORGABE | 0-3000, 0-1023 | 0x6B | 0x7A |
| MAGNETVENTIL_DRV_1 | STROMVORGABE | 0-3000 | 0x6C | 0x00 |
| MAGNETVENTIL_DRV_2 | STROMVORGABE | 0-3000 | 0x6D | 0x00 |
| ANLASSER_FREIGABE | AKTIV, INAKTIV |  | 0x22 | 0x00 |
| HYDROPUMPE | AKTIV, INAKTIV |  | 0x23 | 0x00 |
| SHIFTLOCK | AKTIV, INAKTIV |  | 0x20 | 0x00 |
| WAEHLHEBEL_ANZEIGE | AKTIV, INAKTIV | AUS, N, R, D | 0x81 | 0x00 |
| GANG_ANZEIGE | AKTIV, INAKTIV | 0-7=Gang, 8=Rueckwaertsgang, 9=Anzeige dunkel | 0x82 | 0x00 |
| KOMBIANZEIGE_KOMFORTINDEX | AKTIV, INAKTIV | 1-6 | 0x80 | 0x00 |
| WAEHLHEBEL_LED_DS | AKTIV, INAKTIV |  | 0x21 | 0x00 |
| WAEHLHEBEL_LED_R | AKTIV, INAKTIV |  | 0x24 | 0x00 |
| WAEHLHEBEL_LED_N | AKTIV, INAKTIV |  | 0x25 | 0x00 |
| STOERANZEIGE_ROT | AKTIV, INAKTIV |  | 0x83 | 0x00 |
| GETRIEBEOELPUMPE | AKTIV, INAKTIV |  | 0x84 | 0x00 |
| RUECKGABE_AN_SG |  |  | 0xFE | 0x00 |

### TESTPRG

| TESTPRG_NR | TESTPRG_NAME | DAUER TYP. | DAUER MAX. |
| --- | --- | --- | --- |
| 0x20 | Speichervorspanndruck ermitteln | ? sek | ? sek |
| 0x21 | Beliebigen Gang einlegen |  |  |
| 0x22 | Schaltwegmittellage positionieren |  |  |
| 0x23 | Startbedingungen fuer Motor herstellen |  |  |
| 0x30 | Entlueftung Kuppl.-Nehmerzyl./Hydraulikleit. | ? min | ? min |
| 0x31 | Entlueftung Getriebeakuator | ? min | ? min |
| 0x32 | Kupplungsventilkennwerte einlernen | 89 sek | 180 sek |
| 0x33 | Kupplungsschleifpunkt einlernen | 5,6 sek | 30 sek |
| 0x34 | Offsetstroeme PWV einlernen | ? sek | ? sek |
| 0x35 | Hydraulikdruck abbauen |  |  |
| 0x36 | Getriebe komplett einlernen | 43 sek | 88 sek |
| 0x37 | Offset Laengsbeschleunigungssensor einlernen | 5,6 sek | 20 sek |
| 0x38 | Adaptionswerte in NVRAM speichern | ? sek | ? sek |

### STATTESTTEXTE

| STB | TEST_STATUS_TEXT |
| --- | --- |
| 0x00 | Testbedingung nicht erfuellt |
| 0x01 | Testprogramm laeuft |
| 0x02 | Testprogramm beendet |
| 0x03 | Testprogramm nicht ordnungsgemaess beendet |
| 0x04 | Testprogramm durch Bediener abgebrochen |
| 0xFF | Unbekannter Status |

### INFOTEXTE0X20A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Testprogramm Initialisierung |
| 0x14 | Speicher befuellen |
| 0x16 | Speicher leeren |
| 0x18 | Vorspanndruckermittlung beendet |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE0X20F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x0A | Vorspanndruckermittlung nicht durchfuehrbar, aufgrund HE relevanter FS-Eintraege |
| 0x0B | HE-Temperatur bei Vorspanndruckermittlung ausserhalb der zulaessigen Grenzen |
| 0x0C | Druckaufbau in der vorgeschriebenen Zeit nicht Mindestdruckschwelle ueberschritten |
| 0x0D | Druckabbau in der vorgeschriebenen Zeit nicht erreicht |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft oder Zuendung ist aus) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE0X21A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Testprogramm noch nicht gestartet |
| 0x3D | Initialisierung der Funktion |
| 0x3E | Gewuenschten Gang als Zielgang setzen |
| 0x3F | Zeit zum Gangeinlegen abwarten |
| 0x40 | Beliebigen Gang einlegen ist beendet |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE0X21F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x50 | Das Einlegen des gewuenschten Ganges ist gescheitert |
| 0x51 | Ungueltige Gangvorgabe |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft oder Zuendung ist aus) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE0X22A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Testprogramm noch nicht gestartet |
| 0x01 | Kupplung oeffnen |
| 0x28 | Schaltwegmittellage einregeln |
| 0x29 | Schaltwegmittellage einlegen beendet |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE0X22F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Der Ablauf des Automatismus ist nicht korrekt |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft oder Zuendung ist aus) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE0X23A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Testprogramm Initialisierung und Pruefung der Eintrittsbedingungen |
| 0x01 | Ermittlung Ventilkennwerte |
| 0x7F | Adaption Kupplungskennwerte beendet, Startbedingung fuer Motor hergestellt |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE0X23F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x81 | Einkuppelposition ausserhalb der zulaessigen Toleranz |
| 0x82 | Auskuppelposition ausserhalb der zulaessigen Toleranz |
| 0x83 | Kupplungsventil-Nullstrom ausserhalb der zulaessigen Toleranz |
| 0x84 | Zeitueberschreitung bei Ermittlung der Ventilueberdeckung |
| 0x85 | Ventilueberdeckung ausserhalb der zulaessigen Toleranz |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft oder Zuendung ist aus) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE0X30A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Testprogramm Initialisierung |
| 0x01 | Kupplungsentlueftung |
| 0x7F | Entlueftung beendet |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE0X30F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Nehmerzylinder-Mindesthub nicht erreicht |
| 0x7F | Abbruch durch Benutzer |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft, oder Zuendung ist aus) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE0X31A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Testprogramm noch nicht gestartet |
| 0x1B | Initialisierung |
| 0x1C | Durchfuehrung Entlueftung des Stellerblocks |
| 0x1D | Entlueftung beendet |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE0X31F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x10 | Vorspanndruckermittlung nicht durchfuehrbar, aufgrund HE relevanter FS-Eintraege |
| 0x11 | Druckaufbau im Pumpenblock in vorgegebener Zeit nicht erreicht |
| 0x12 | Druckabbau im Pumpenblock in vorgegebener Zeit nicht erreicht |
| 0x13 | Druckaufbau im Stellerblock in vorgegebener Zeit nicht erreicht |
| 0x14 | Druckabbau im Stellerblock in vorgegebener Zeit nicht erreicht |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft oder Zuendung ist aus) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE0X32A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Testprogramm Initialisierung und Pruefung der Eintrittsbedingungen |
| 0x01 | Ermittlung Ventilkennwerte |
| 0x02 | Ermittlung Kupplungs-Lagereglerverstaerkung |
| 0x7F | Adaption Kupplungskennwerte beendet |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE0X32F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler erkannt |
| 0x7F | Abbruch durch Benutzer |
| 0x81 | Einkuppelposition ausserhalb der zulaessigen Toleranz |
| 0x82 | Auskuppelposition ausserhalb der zulaessigen Toleranz |
| 0x83 | Kupplungsventil-Nullstrom ausserhalb der zulaessigen Toleranz |
| 0x84 | Zeitueberschreitung bei Ermittlung der Ventilueberdeckung |
| 0x85 | Ventilueberdeckung ausserhalb der zulaessigen Toleranz |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft oder Zuendung ist aus) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE0X33A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Testprogramm Initialisierung und Pruefung der Eintrittsbedingungen |
| 0x01 | Adaption Kupplungsschleifpunkt |
| 0x7F | Schleifpunktadaption beendet |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE0X33F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler erkannt |
| 0x24 | Getriebedrehzahl beim Anfahren des Einlernbereichs oder Schleifpunkt zu niedrig |
| 0x25 | Keine Getriebedrehzahl bei geschlossener Kupplung oder Schleifpunkt zu hoch |
| 0x26 | Keine Getriebedrehzahl bei geschlossener Kupplung |
| 0x27 | Interner Ablauffehler |
| 0x28 | Getriebedrehzahl nach Kupplungsoeffnen nicht in der geforderten Zeit auf Null |
| 0x7F | Abbruch durch Benutzer |
| 0xA0 | Testbedingung nicht erfuellt (Motor ist aus, N nicht eingelegt, Eingangsdrehz. <> 0, Gaspedal betaetigt) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE0X34A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Testprogramm noch nicht gestartet |
| 0x01 | Kupplung oeffnen |
| 0x28 | Schaltwegmittellage einregeln |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE0X34F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Der Ablauf des Automatismus ist nicht korrekt |
| 0x46 | Die Schaltwegmittellage laesst sich nicht einregeln |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE0X35A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Testprogramm noch nicht gestartet |
| 0x18 | Initialisierung |
| 0x19 | Hydraulikdruck abbauen |
| 0x1A | Druckabbau beendet |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE0X35F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x0E | Vorspanndruckermittlung nicht durchfuehrbar, aufgrund HE relevanter FS-Eintraege |
| 0x0F | Druckabbau in der vorgeschriebenen Zeit nicht erreicht |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE0X36A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Testprogramm noch nicht gestartet |
| 0x01 | Kupplung oeffnen |
| 0x02 | PWV Offsetstromadaption |
| 0x03 | Gang 1 ausmessen |
| 0x04 | Gang 2 ausmessen |
| 0x05 | Gang 3 ausmessen |
| 0x06 | Gang 4 ausmessen |
| 0x07 | Gang 5 ausmessen |
| 0x08 | Gang 6 ausmessen |
| 0x09 | Gang 7 ausmessen |
| 0x0A | Gang R ausmessen |
| 0x0B | Neutralstellung einnehmen |
| 0x0C | Einlernwerte in NVRAM schreiben |
| 0x0D | Einlegehaenger nachbearbeiten |
| 0x0E | Getriebeparameter verarbeiten |
| 0x0F | Getriebe einlernen beendet |
| 0x28 | Schaltwegmittellage einregeln |
| 0x29 | Schaltwegmittellage einlegen beendet |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE0X36F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Der Ablauf des Automatismus ist nicht korrekt |
| 0x02 | Max. zulaessige Zeit fuer Adaption wurde ueberschritten |
| 0x28 | Die Zeit zum Einregeln der Schaltwegmitten ist ueberschritten |
| 0x29 | Der Hydraulikdruck ist zu gering |
| 0x2A | Einlegehaenger erkannt |
| 0x2B | Einlegehaenger in Gang 1 vorhanden / Werte wurden substituiert |
| 0x2C | Einlegehaenger in Gang 2 vorhanden / Werte wurden substituiert |
| 0x2D | Einlegehaenger in Gang 3 vorhanden / Werte wurden substituiert |
| 0x2E | Einlegehaenger in Gang 4 vorhanden / Werte wurden substituiert |
| 0x2F | Einlegehaenger in Gang 5 vorhanden / Werte wurden substituiert |
| 0x30 | Einlegehaenger in Gang 6 vorhanden / Werte wurden substituiert |
| 0x31 | Einlegehaenger in Gang 7 vorhanden / Werte wurden substituiert |
| 0x32 | Einlegehaenger in Rueckwaertsgang vorhanden / Werte wurden substituiert |
| 0x33 | Der Schaltweg rueckt in der Gasse nach Wegnahme der Kraft zu weit aus |
| 0x34 | Redundanter Positionsensor Zylinder R/1 ist defekt |
| 0x35 | Positionsensor Zylinder R/1 ist defekt |
| 0x36 | Positionsensor Zylinder 5/3 ist defekt |
| 0x37 | Positionsensor Zylinder 2/4 ist defekt |
| 0x38 | Positionsensor Zylinder 6/7 ist defekt |
| 0x39 | Bei der Adaption eines Ganges rueckt eine weitere Schaltstange ein |
| 0x3A | Eingelegte Position konnte bei der Schaltkraftmessung nicht erreicht werden |
| 0x3B | Min. Grenzwert Gangposition Gang 1 nicht erreicht |
| 0x3C | Min. Grenzwert Gangposition Gang 2 nicht erreicht |
| 0x3D | Min. Grenzwert Gangposition Gang 3 nicht erreicht |
| 0x3E | Min. Grenzwert Gangposition Gang 4 nicht erreicht |
| 0x3F | Min. Grenzwert Gangposition Gang 5 nicht erreicht |
| 0x40 | Min. Grenzwert Gangposition Gang 6 nicht erreicht |
| 0x41 | Min. Grenzwert Gangposition Gang 7 nicht erreicht |
| 0x42 | Min. Grenzwert Gangposition Gang R nicht erreicht |
| 0x46 | Die Schaltwegmitten lassen sich nicht einregeln Schaltstange R/1 |
| 0x47 | Die Schaltwegmitten lassen sich nicht einregeln Schaltstange 5/3 |
| 0x48 | Die Schaltwegmitten lassen sich nicht einregeln Schaltstange 2/4 |
| 0x49 | Die Schaltwegmitten lassen sich nicht einregeln Schaltstange 6/7 |
| 0xA0 | Testbedingung nicht erfuellt (Motor laeuft oder Fuss betaetigt) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE0X37A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Testprogramm noch nicht gestartet |
| 0x46 | Initialisierung |
| 0x47 | Ersten Wert ermitteln |
| 0x48 | Zeit zwischen zwei Werten abwarten |
| 0x49 | Folgewerte mit 1. Wert vergleichen |
| 0x4A | Offset berechnen |
| 0x4B | Offsetermittlung beendet |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE0X37F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x5A | Eingelernter Wert ausserhalb des fuer Laengsbeschleunigung zulaessigen Bereichs |
| 0x5B | Offset des Laengsbeschleunigungssensors in vorgesehener Zeit nicht erfolgreich eingelernt |
| 0xA0 | Testbedingung nicht erfuellt (Raddrehzahlen <> 0 ) |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE0X38A

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Testprogramm noch nicht gestartet |
| 0x01 | Adaptionswerte sind noch nicht gespeichert, Vorgang laeuft |
| 0x02 | Adaptionswerte wurden gespeichert |
| 0xFF | Unbekannter Infotext |

### INFOTEXTE0X38F

| IB | INFO_TEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0xA0 | Testbedingung nicht erfuellt (N nicht eingelegt, Motordrehzahl <> 0) |
| 0xFF | Unbekannter Infotext |

### MOTORHAUBENKONTAKTEROH

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x00B8 | 0x00B9 |

### MOTORHAUBENKONTAKTEIST

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x002D | 0x002E |

### WAHLHEBELSIGNALEROH

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x00BA | 0x00BB | 0x00BC | 0x00BD | 0x00BE | 0x00BF | 0x00C0 | 0x00C1 |

### WAHLHEBELSIGNALEIST

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x002F | 0x0030 | 0x0031 | 0x0032 | 0x0033 | 0x0034 | 0x0035 | 0x0036 |

### LAENGSBESCHLEUNIGUNG

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x00F0 | 0x0026 | 0x00E5 |

### SENSORSPANNUNG

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x0046 | 0x00EB | 0x00EC |

### GETRIEBEDREHZAHL

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x0043 | 0x0044 |

### KUPPLUNGSPOSITION0X510D_E

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x00EB | 0x0086 | 0x0087 | 0x0043 | 0x0046 | 0x0049 | 0x0085 | 0x0088 |

### RADGESCHWVORNEISTWERT

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x0058 | 0x0059 |

### LAENGSBESCHL0X520C

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x00F0 | 0x0001 | 0x0026 | 0x0025 |

### DREHZAHLTEMP10X5218

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x006D | 0x0047 | 0x0046 | 0x0043 |

### DREHZAHLTEMP20X5219

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x006E | 0x0048 | 0x0047 | 0x0046 | 0x0043 |

### BEGRENZERDREHZAHL0X521A

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x0068 | 0x0042 | 0x0046 | 0x0043 |

### GETRIEBEVENTILDRV10X5500

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | 0x00F0 | 0x0017 | 0x001D | 0x001F | 0x0020 | 0x0049 | 0x0084 | 0x0082 | 0x007A | 0x0078 |

### GETRIEBEVENTILDRV20X5501

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | 0x00F0 | 0x0018 | 0x001E | 0x0021 | 0x0022 | 0x0049 | 0x0081 | 0x0083 | 0x0077 | 0x0079 |

### GETRIEBEVENTILR_10X5502

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 0x00F0 | 0x0019 | 0x001F | 0x001D | 0x0049 | 0x0084 | 0x007A |

### GETRIEBEVENTIL5_30X5503

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 0x00F0 | 0x001A | 0x0020 | 0x001D | 0x0049 | 0x0082 | 0x0078 |

### GETRIEBEVENTIL6_70X5504

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 0x00F0 | 0x001B | 0x0021 | 0x001E | 0x0049 | 0x0081 | 0x0077 |

### GETRIEBEVENTIL2_40X5505

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 0x00F0 | 0x001C | 0x0022 | 0x001E | 0x0049 | 0x0083 | 0x0079 |

### KUPPLUNGSVENTIL0X5506

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x00F0 | 0x0023 | 0x0024 | 0x0049 | 0x0088 | 0x0085 | 0x000A | 0x00A2 |

### MAGNETVENTILE0X5507

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | 0x0019 | 0x001B | 0x001C | 0x001F | 0x0021 | 0x0022 | 0x007A | 0x0077 | 0x0079 | 0x0049 |

### MAGNETVENTILEDRV1_20X5508

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 0x00F0 | 0x0017 | 0x0018 | 0x001D | 0x001E | 0x0014 | 0x0049 |

### RADGESCHWCAN0XCF07

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x00E7 | 0x00E8 | 0x00EE | 0x00EF |

### EBENE2KUPPLUNG0X4F03

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | 0x0094 | 0x0095 | 0x0014 | 0x0093 | 0x0092 | 0x0088 | 0x0085 | 0x00DC | 0x00F3 |

### EBENE30X4F04

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x008D | 0x0096 | 0x0097 | 0x0012 | 0x0011 |

### HYDRAULIK0X4F40BIS42

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x00F0 | 0x0023 | 0x0050 | 0x0051 | 0x00EA | 0x0046 |

### KUPPLUNG0X4FA0_A1

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 0x00F0 | 0x0023 | 0x0050 | 0x0046 | 0x00EA | 0x0085 | 0x0088 |

### FGR

| WERT | TEXT |
| --- | --- |
| 0x00 | FGR passiv |
| 0x01 | FGR aktiv, Konstantfahrt |
| 0x02 | ACC-Regelung Standard |
| 0x03 | FGR aktiv, Wiederaufnahme |
| 0x04 | ACC-Regelung erhoehte Dynamik |
| 0x05 | FGR aktiv, Setzen/Beschleunigen |
| 0x06 | FGR/ACC-Abschaltung |
| 0x07 | FGR aktiv, Verzoegern |
| 0xXY | nicht definiert |

### FREEZE_FRAME_REFERENZ

| WERT | TEXT |
| --- | --- |
| 0x00 | Kein Freeze Frame gespeichert |
| 0x01 | Freeze Frame wird verwaltet fuer DME (Master) |
| 0x02 | Freeze Frame wird verwaltet fuer EGS od. SMG |
| 0x03 | Freeze Frame wird verwaltet fuer EML |
| 0x04 | Freeze Frame wird verwaltet fuer DME links |
| 0xXY | nicht definiert |

### PROGRAMMINFO

| WERT | TEXT |
| --- | --- |
| 0x01 | 1. Programm |
| 0x02 | 2. Programm |
| 0x03 | 3. Programm |
| 0x04 | 4. Programm |
| 0x05 | 5. Programm |
| 0x06 | 6. Programm |
| 0xXY | nicht definiert |

### KOMFORTINDEX

| WERT | TEXT |
| --- | --- |
| 0x00 | komfortabel |
| 0x01 | komfortabel+1 |
| 0x02 | komfortabel+2 |
| 0x03 | komfortabel+3 |
| 0x04 | komfortabel+4 |
| 0x05 | komfortabel+5 |
| 0x06 | normal |
| 0x07 | sportiv-5 |
| 0x08 | sportiv-4 |
| 0x09 | sportiv-3 |
| 0x0A | sportiv-2 |
| 0x0B | sportiv-1 |
| 0x0C | sportiv |
| 0xXY | nicht definiert |

### GANGANZEIGE

| WERT | TEXT |
| --- | --- |
| 0x00 | Neutral |
| 0x01 | 1.Gang |
| 0x02 | 2.Gang |
| 0x03 | 3.Gang |
| 0x04 | 4.Gang |
| 0x05 | 5.Gang |
| 0x06 | 6.Gang |
| 0x07 | 7.Gang |
| 0x08 | Rueckwaertsgang |
| 0x09 | Anzeige dunkel |
| 0xFF | nicht definiert |

### WAEHLHEBELANZEIGE

| WERT | TEXT |
| --- | --- |
| 0x00 | Anzeige dunkel |
| 0x02 | R |
| 0x04 | N |
| 0x08 | D |
| 0xFF | nicht definiert |

### LED

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine LED |
| 0x01 | 1. LED |
| 0x02 | 1. und 2. LED |
| 0xXY | nicht definiert |

### INFOTEXTEFAHRZEUGZUSTAND

| WERT | TEXT |
| --- | --- |
| 0x00 | Keine Systemfreigabe |
| 0x01 | Motor aus, Fahrzeug steht |
| 0x02 | Eingekuppelt |
| 0x03 | Abwuergen |
| 0x04 | Anhalten |
| 0x05 | Anschleppen |
| 0x06 | Abschalten |
| 0x07 | Antiblockiersystem |
| 0x08 | Antriebsschlupfregelung |
| 0x09 | Nebenabtrieb |
| 0x0A | Keine Druckluft |
| 0x0B | Starten |
| 0x0C | Abschalten ohne Systemfreigabe |
| 0x10 | Einkuppeln, Schub |
| 0x11 | Einkuppeln, Zug |
| 0x12 | Einkuppeln, Synchron |
| 0x13 | Einkuppeln, Ueberdrehzahl |
| 0x14 | Einkuppeln, Zug, Sport |
| 0x15 | Einkuppeln, Schub, Sport |
| 0x16 | Einkuppeln, Radabriss |
| 0x17 | Einkuppeln, Schub, Eingriff |
| 0x18 | Einkuppeln, Eingriff |
| 0x20 | Anfahren, Vorweg |
| 0x21 | Anfahren, Normal |
| 0x22 | Anfahren, Kick Down |
| 0x23 | Anfahren, Synchron |
| 0x24 | Anfahren, Rennstart |
| 0x25 | Anfahrhilfe |
| 0x26 | Rennstart vorbereiten |
| 0x27 | Anfahren, Moment |
| 0x30 | Schalten |
| 0x40 | Neutral ohne Einlernen, GW |
| 0x41 | Neutral Einlernen, GW |
| 0x42 | Neutral Einlernen GW beendet |
| 0x43 | Neutral, Fahrzeug steht |
| 0x50 | Verschalten, Zug Normal |
| 0x51 | Verschalten, Zug Extrem |
| 0x52 | Verschalten, Zug Synchron |
| 0x60 | Anrollen |
| 0x70 | Notfahr FP Kuppeln |
| 0x71 | Notfahr N Mot Kuppeln |
| 0x72 | System abschalten |
| 0x80 | Schlupf |
| 0x90 | Ansynchronisieren |
| 0x91 | Ansynchronisieren beendet |
| 0xA0 | KKL Einlernen |
| 0xA1 | KKL Einlernen beendet |
| 0xFF | Unbekannter Infotext |

### EBENE20X4F00BIS02

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x0094 | 0x008D | 0x0095 | 0x0014 | 0x0092 | 0x009B |

### NVRAMLADEN0X4F20

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x0096 | 0x0097 | 0x0012 | 0x0011 | 0x0183 |

### ESTATE0X4F21

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 0x008D | 0x0095 | 0x0014 | 0x0092 | 0x009B | 0x009C | 0x0141 |

### GETRIEBEPROBLEM0X4F80

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | 0x0050 | 0x007A | 0x0078 | 0x0077 | 0x0079 | 0x0084 | 0x0082 | 0x0081 | 0x0083 |

### UEBERSETZUNGSP0X4F81

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 11 | 0x00F0 | 0x0014 | 0x0085 | 0x0043 | 0x0046 | 0x00E6 | 0x00F1 | 0x017E | 0x017F | 0x007F | 0x0080 |

### WAHLHEBEL0X5002

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x00F0 | 0x00F1 |

### FAHRTRICHTWAHLHEBEL

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 11 | 0x00F4 | 0x00F5 | 0x00F6 | 0x00F7 | 0x00F8 | 0x00F9 | 0x00FA | 0x00FB | 0x00FC | 0x00FD | 0x00FE |

### LENKRAD10X5006_07

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x00C3 | 0x00C4 |

### LENKRAD20X5006_07

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x003A | 0x003B |

### LAENGSBESCHL0X5008

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x00F0 | 0x0026 |

### HANDBREMSE0X5008

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x0100 | 0x0101 | 0x0102 |

### HYDRAULIKDRUCKSENS0X5101

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x00F0 | 0x0023 | 0x0050 | 0x00EA | 0x0049 | 0x00EB | 0x0053 | 0x0075 |

### SENSORPOSITION0X5108BIS0A

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x0043 | 0x0044 | 0x0014 | 0x00EC | 0x007F | 0x007D | 0x007C | 0x007E |

### GETRIEBEEINGANG0X510B

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8 | 0x00F0 | 0x006A | 0x0044 | 0x0046 | 0x0014 | 0x00E6 | 0x0103 | 0x0104 |

### SCHALTSTANGER10X5106_07

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 11 | 0x0043 | 0x0044 | 0x008B | 0x00EB | 0x00EC | 0x007F | 0x0080 | 0x007A | 0x007B | 0x007D | 0x0098 |

### MOTORDREHZ0X510C_5200

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | 0x00F0 | 0x0103 | 0x0104 | 0x0043 | 0x0046 | 0x0069 | 0x006C | 0x0014 | 0x0044 |

### RADGESCHWHL0X5201

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | 0x00F0 | 0x0103 | 0x0104 | 0x008B | 0x0043 | 0x00E7 | 0x00E8 | 0x00EE | 0x00EF | 0x0056 |

### RADGESCHWHR0X5202

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | 0x00F0 | 0x0103 | 0x0104 | 0x008B | 0x0043 | 0x00E7 | 0x00E8 | 0x00EE | 0x00EF | 0x0057 |

### RADGESCHWVL0X5203

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | 0x00F0 | 0x00B3 | 0x008B | 0x0043 | 0x00E7 | 0x00E8 | 0x00EE | 0x00EF | 0x0058 |

### RADGESCHWVR0X5204

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | 0x00F0 | 0x00B4 | 0x008B | 0x0043 | 0x00E7 | 0x00E8 | 0x00EE | 0x00EF | 0x0059 |

### BETRIEBSBREMSSIG0X5206

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x00F0 | 0x0026 | 0x003D | 0x0055 | 0x0142 |

### BREMSZUENDSIG0X5206

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR |
| --- | --- | --- | --- | --- | --- | --- |
| 6 | 0x0132 | 0x0133 | 0x012E | 0x012F | 0x0130 | 0x0131 |

### GETRIEBEKUPPFUSSSTATUS

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 16 | 0x0105 | 0x0106 | 0x0107 | 0x0108 | 0x0109 | 0x010A | 0x010B | 0x010C | 0x010D | 0x010E | 0x010F | 0x0110 | 0x0111 | 0x0112 | 0x0113 | 0x0114 |

### LENKWINKEL0X520A

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x00F0 | 0x005D | 0x003F | 0x00D3 |

### DREHMOMENT0X5208

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x00F0 | 0x0067 | 0x0040 | 0x00D4 |

### KLEMMER_15_500X5210

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | 0x00F0 | 0x0046 | 0x0116 | 0x0117 | 0x0118 | 0x0119 | 0x011A | 0x011B | 0x011C | 0x011D | 0x011E |

### STATUSDIGITALEAUSGAENGE

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 15 | 0x011F | 0x0120 | 0x0121 | 0x0122 | 0x0123 | 0x0124 | 0x0125 | 0x0126 | 0x0127 | 0x0128 | 0x0129 | 0x012A | 0x012B | 0x012C | 0x012D |

### SHIFTLOCK0X5400

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x0134 | 0x0135 | 0x0136 |

### SPG_MDREHZ0X5400_01

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x0F0 | 0x0046 |

### ANLASSERFREIGABE0X5401

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x0137 | 0x0138 | 0x0139 |

### HYDPUMPE0X5402

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR |
| --- | --- | --- | --- | --- | --- |
| 5 | 0x00F0 | 0x0023 | 0x0050 | 0x0049 | 0x0046 |

### MAGNETVENTIL5_30X5509

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 10 | 0x00F0 | 0x001A | 0x0023 | 0x0020 | 0x0024 | 0x0088 | 0x0085 | 0x0078 | 0x0049 | 0x0061 |

### DIGEINRESETFEST

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 14 | 0x0144 | 0x0146 | 0x0147 | 0x0148 | 0x0149 | 0x014A | 0x014B | 0x014C | 0x014D | 0x014E | 0x014F | 0x0150 | 0x0152 | 0x0153 |

### FEHLERSTATUSCANBUS

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x00F0 | 0x0069 | 0x00A1 |

### GETRIEBETEMP0X4F44

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7 | 0x00F0 | 0x0050 | 0x0176 | 0x0051 | 0x00EA | 0x0046 | 0x0076 |

### RELAISGETROELP0X5406_1

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x00F0 | 0x0176 | 0x0046 |

### RELAISGETROELP0X5406_2

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR |
| --- | --- | --- | --- |
| 3 | 0x00C6 | 0x0076 | 0x017D |

### GETRIEBETEMP0X4F45

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR |
| --- | --- | --- | --- | --- |
| 4 | 0x00F0 | 0x0050 | 0x0176 | 0x0051 |

### HYDRAULIK0X4F44

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | 0x00F0 | 0x0023 | 0x0050 | 0x0051 | 0x00EA | 0x0046 | 0x017A | 0x017B | 0x017C |

### HYDRAULIK0X4F43

| UW_ANZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 9 | 0x00F0 | 0x0023 | 0x0050 | 0x0051 | 0x00EA | 0x0046 | 0x0177 | 0x0178 | 0x0179 |

### PRGWAHL0X5004_05_1

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x00B6 | 0x00B7 |

### PRGWAHL0X5004_05_2

| UW_ANZ | UW1_NR | UW2_NR |
| --- | --- | --- |
| 2 | 0x002B | 0x002C |

### FUMWELTTEXTE49

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Kaltstart |
| 0x01 | NMI (Non Maskable Interrupt) Sicherheitskonzeptreset MU |
| 0x02 | Stack overflow |
| 0x03 | Stack unterflow |
| 0x04 | Undefinierter Opcode |
| 0x05 | Protected Instruction Fault |
| 0x06 | Illegale Wordoperation |
| 0x07 | Illegaler Instruction Access |
| 0x08 | Illegaler Externer Buszugriff |
| 0x09 | Softwarereset |
| 0x10 | Interner Watchdog Reset |
| 0x11 | Sicherheitskonzeptreset MC |
| 0x12 | Diagnoseprotokollreset |
| 0xXY | nicht definiert |

### FUMWELTTEXTE52

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Der Ablauf eines Automaten ist nicht korrekt |
| 0x02 | Die Maximale Zeit die eine Adaption am Band in Anspruch nehmen darf ist ueberschritten |
| 0x0A | Speichervorspanndruckermittlung nicht durchfuehrbar |
| 0x0B | Powerpack zu warm |
| 0x0C | Druckaufbau fehlerhaft |
| 0x0D | Druckabbau fehlerhaft |
| 0x0E | Entleeren des HE-Systemdrucks nicht durchfuehrbar |
| 0x0F | Bei Entleeren Druckabbau fehlerhaft |
| 0x10 | Entlüften des HE-Systemdrucks nicht durchfuehrbar |
| 0x11 | Druckaufbau Pumpenblock fehlerhaft |
| 0x12 | Druckabbau Pumpenblock fehlerhaft |
| 0x13 | Druckaufbau Stellerblock fehlerhaft |
| 0x14 | Druckabbau Stellerblock fehlerhaft |
| 0x1E | kein gültiger PWV Offsetstrom  |
| 0x28 | die Zeit zum Einlegen der Schaltwegmitten ist ueberschritten |
| 0x29 | Hydraulikdruck ist zu gering  |
| 0x2A | Einlegehaenger erkannt |
| 0x2B | Einlegehaenger in Gang 1 vorhanden / Werte wurden substituiert |
| 0x2C | Einlegehaenger in Gang 2 vorhanden / Werte wurden substituiert |
| 0x2D | Einlegehaenger in Gang 3 vorhanden / Werte wurden substituiert |
| 0x2E | Einlegehaenger in Gang 4 vorhanden / Werte wurden substituiert |
| 0x2F | Einlegehaenger in Gang 5 vorhanden / Werte wurden substituiert |
| 0x30 | Einlegehaenger in Gang 6 vorhanden / Werte wurden substituiert |
| 0x31 | Einlegehaenger in Gang 7 vorhanden / Werte wurden substituiert |
| 0x32 | Einlegehaenger in Rueckwaertsgang vorhanden / Werte wurden substituiert |
| 0x33 | Schaltweg zu weit ausgerueckt |
| 0x34 | Ueberschreitung elektrischer Bereich des redundanten Positionssensors Schaltstange R/1 |
| 0x35 | Ueberschreitung elektrischer Bereich des Positionssensors Schaltstange R/1 |
| 0x36 | Ueberschreitung elektrischer Bereich des Positionssensors Schaltstange 5/3 |
| 0x37 | Ueberschreitung elektrischer Bereich des Positionssensors Schaltstange 2/4 |
| 0x38 | Ueberschreitung elektrischer Bereich des Positionssensors Schaltstange 6/7 |
| 0x39 | Beim Adaptieren einer Schaltstange ist eine weitere Schaltstange verbotenerweise mit eingerueckt |
| 0x3A | Beim Ermitteln der Schaltkraft konnte die zuvor eingelernte Position nicht erreicht werden |
| 0x3B | Beim Adaptieren des 1. Gangs konnte der Positionsgrenzwert nicht erreicht werden |
| 0x3C | Beim Adaptieren des 2. Gangs konnte der Positionsgrenzwert nicht erreicht werden |
| 0x3D | Beim Adaptieren des 3. Gangs konnte der Positionsgrenzwert nicht erreicht werden |
| 0x3E | Beim Adaptieren des 4. Gangs konnte der Positionsgrenzwert nicht erreicht werden |
| 0x3F | Beim Adaptieren des 5. Gangs konnte der Positionsgrenzwert nicht erreicht werden |
| 0x40 | Beim Adaptieren des 6. Gangs konnte der Positionsgrenzwert nicht erreicht werden |
| 0x41 | Beim Adaptieren des 6. Gangs konnte der Positionsgrenzwert nicht erreicht werden |
| 0x42 | Beim Adaptieren des Rueckwaertsgangs konnte der Positionsgrenzwert nicht erreicht werden |
| 0x43 | Wert des Temperatursensors ausserhalb der elektrischen Grenzen |
| 0x46 | Schaltwegmittenpositionierung Schaltstange R/1 gescheitert |
| 0x47 | Schaltwegmittenpositionierung Schaltstange 5/3 gescheitert |
| 0x48 | Schaltwegmittenpositionierung Schaltstange 2/4 gescheitert |
| 0x49 | Schaltwegmittenpositionierung Schaltstange 6/7 gescheitert |
| 0x50 | Beliebigen Gang Einlegen gescheitert |
| 0x51 | Ungueltige Gangvorgabe |
| 0x52 | Dauerlaufabbruch wegen zu heissem Powerpack |
| 0x53 | Dauerlaufabbruch Schaltung konnte nicht ausgefuehrt werden |
| 0x54 | Dauerlaufabbruch ueber extern |
| 0x55 | ???? |
| 0x56 | Dauerlaufabbruch wegen Drehzahldifferenz Soll Ist |
| 0x5A | Eingelernter Wert außerhalb des für Offset zulaessigen Bereichs |
| 0x5B | Zeit zum Offset einlernen abgelaufen ohne dass der Offset ermittelt werden konnte |
| 0x5F | Test Kupplungsventil nicht durchfuehrbar |
| 0x60 | Mindeststartwert für Kupplungsposition nicht gegeben |
| 0x61 | Weg des Kupplungsventils ausserhalb des spezifizierten Bereichs |
| 0x62 | Offsetstromermittlung des Kupplungsventils fehlgeschlagen |
| 0xXY | nicht definiert |

### FUMWELTTEXTE53

| WERT | UWTEXT |
| --- | --- |
| 0x01 | Adaptionsstatus: Kupplung oeffnen |
| 0x02 | Adaptionsstatus: PWV Offsetstromadaption |
| 0x03 | Adaptionsstatus: Gang 1 ausmessen |
| 0x04 | Adaptionsstatus: Gang 2 ausmessen |
| 0x05 | Adaptionsstatus: Gang 3 ausmessen |
| 0x06 | Adaptionsstatus: Gang 4 ausmessen |
| 0x07 | Adaptionsstatus: Gang 5 ausmessen |
| 0x08 | Adaptionsstatus: Gang 6 ausmessen |
| 0x09 | Adaptionsstatus: Gang 7 ausmessen |
| 0x0A | Adaptionsstatus: Gang R ausmessen |
| 0x0B | Adaptionsstatus: Neutralstellung einnehmen |
| 0x0C | Adaptionsstatus: Adaptionsstatuswerte in NVRAM schreiben |
| 0x0D | Adaptionsstatus: Adaptionsstatus: Einlegehänger nach bearbeiten |
| 0x0E | Adaptionsstatus: Getriebeparameter verarbeiten |
| 0x0F | Adaptionsstatus: Getriebe einlernen beenden |
| 0x14 | Initialisierung Speichervorspanndruckermittlung |
| 0x15 | Druckaufbau |
| 0x16 | Druckabbau |
| 0x17 | Speichervorspanndruckermittlung beendet |
| 0x18 | Initialisierung HE Entleeren |
| 0x19 | HE Entleeren Druckabbau |
| 0x1A | HE Entleeren beendet |
| 0x1B | HE System Aktuatorentlüftung |
| 0x1C | Initialisierung Aktuatorentlueftung |
| 0x1D | Aktuatorentlueftung |
| 0x1E | Aktuatorentlüftung beendet |
| 0x28 | Schaltwegmittellagepositionierung |
| 0x29 | Schaltwegmittellagepositionierung beendet |
| 0x3D | Beliebigen Gang einlegen initialisieren |
| 0x3E | Beliebigen Gang übernehmen |
| 0x3F | Warten bis beliebigen Gang eingelegt |
| 0x40 | Beliebigen Gang einlegen beendet |
| 0x46 | Offset des Laengsbeschleunigungssensors einlernen initialisieren |
| 0x47 | Offset des Laengsbeschleunigungssensors einlernen erster Wert |
| 0x48 | Offset des Laengsbeschleunigungssensors einlernen Warten |
| 0x49 | Offset des Laengsbeschleunigungssensors einlernen folgender Wert |
| 0x4A | Offset des Laengsbeschleunigungssensors einlernen berechnen |
| 0x4B | Offset des Laengsbeschleunigungssensors einlernen beendet |
| 0x50 | Kupplungstest initialisieren |
| 0x51 | Ueberpruefen der Kupplungspositionen |
| 0x52 | Ermitteln und Ueberpruefen des Offsetstroms des Kupplungsventils |
| 0x53 | Kupplungstest beendet |
| 0xXY | nicht definiert |

### FUMWELTTEXTE50

| WERT | UWTEXT |
| --- | --- |
| 0x00 | Kein Fehler |
| 0x01 | Kurzschluss nach Masse |
| 0x02 | Kurzschluss nach Ubatt |
| 0x04 | Leitungsunterbrechung |
| 0x08 | Unerlaubter Strom |
| 0x10 | Ventil fehlerhaft geoeffnet |
| 0x20 | Falsche Verfahrrichtung |
| 0xXY | nicht definiert |

### FUMWELTTEXTE51

| WERT | UWTEXT |
| --- | --- |
| 0x20 | 0x20= Speichervorspanndruck ermitteln |
| 0x21 | 0x21= Beliebigen Gang einlegen |
| 0x22 | 0x22= Schaltwegmittellage positionieren |
| 0x23 | 0x23= Startbedingungen fuer Motor herstellen |
| 0x30 | 0x30= Entlueftung Kuppl.-Nehmerzyl./Hydraulikleit. |
| 0x31 | 0x31= Entlueftung Getriebeakuator |
| 0x32 | 0x32= Kupplungsventilkennwerte einlernen |
| 0x33 | 0x33= Kupplungsschleifpunkt einlernen |
| 0x34 | 0x34= Offsetstroeme PWV einlernen |
| 0x35 | 0x35= Hydraulikdruck abbauen |
| 0x36 | 0x36= Getriebe komplett einlernen |
| 0x37 | 0x37= Offset Laengsbeschleunigungssensor einlernen |
| 0x38 | 0x38= Adaptionswerte in NVRAM speichern |
