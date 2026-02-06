# mrbmsc2.prg

## General

|  |  |
| --- | --- |
| File | mrbmsc2.prg |
| Type | PRG |
| Jobs | 44 |
| Tables | 21 |
| Origin | BMW EA-92 Dr. Schneider |
| Revision | 1.900 |
| Author | Softing ?? Roman Marziw, BMW EA-413 Thomas Klöker, BMW UX-EE-1 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Motorsteuerung BMSC2 |  |  |
| ORIGIN | string | BMW EA-92 Dr. Schneider |  |  |
| REVISION | string | 1.900 |  |  |
| AUTHOR | string | Softing ?? Roman Marziw, BMW EA-413 Thomas Klöker, BMW UX-EE-1  |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.52 |  |  |
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

### C_FG_LESEN

Fahrgestellnummer lesen Standard Codierjob KWP2000: $1A ReadECUIdentification $90 Vehicle Identification Number Modus  : Default

_No arguments._

### SERIENNUMMER_LESEN

Hersteller Seriennummer lesen KWP2000: $1A ReadECUIdentification $89 SystemSupplierECUSerialNumber oder alternativ KWP2000: $1A ReadECUIdentification $80 ECUIdentificationDataTable Modus  : Default

_No arguments._

### FLASH_PROGRAMMIER_STATUS_LESEN

Programmierstatus des SG lesen KWP2000: $31 StartRoutineByLocalIdentifier $0A CheckProgrammingStatus Modus  : Default

_No arguments._

### STEUERGERAETE_RESET

Steuergeraete reset ausloesen KWP2000: $11 ECUReset $01 PowerOn Modus  : Default  Nach dem Job muss die Steuergeraete-Resetzeit abgewartet werden. Danach ist das Steuergeraet wieder diagnosefaehig  siehe Job FLASH_ZEITEN_LESEN Result FLASH_RESETZEIT

_No arguments._

### FLASH_BLOCKLAENGE_LESEN

Auslesen des maximalen Blocklaenge beim Flashen

_No arguments._

### DATEN_REFERENZ_LESEN

Auslesen der Daten Referenz

_No arguments._

### HARDWARE_REFERENZ_LESEN

Auslesen der Hardware Referenz

_No arguments._

### ZIF_LESEN

Auslesen des Zulieferinfofeldes

_No arguments._

### ZIF_BACKUP_LESEN

Auslesen des Backups des Zulieferinfofeldes ProgrammReferenzBackup         PRGREFB vehicleManufECUHW*NumberBackup VMECUH*NB

_No arguments._

### AIF_LESEN

Auslesen des Anwender Informations Feldes

| Name | Type | Description |
| --- | --- | --- |
| AIF_NUMMER | int | ==0 : aktuelles AIF > 0 : Nummer des zu lesenden AIF default = 0 : aktuelles AIF |

### SEED_KEY

Schutzmechanismus SEED_KEY

| Name | Type | Description |
| --- | --- | --- |
| ACCESS_MODE | int | Access-Mode 0x01 => Freischaltung Speicher schreiben und löschen (Programmierung) 0x03 => Freischaltung Speicher schreiben und ausführen (Entwicklung) 0x05 => Freischaltung Steppertest (Wartung) |

### FLASH_SIGNATUR_PRUEFEN

Flash Signatur pruefen

| Name | Type | Description |
| --- | --- | --- |
| BEREICH | string | 'Programm' oder 'Daten', wird ignoriert |
| SIGNATURTESTZEIT | int | Zeit in Sekunden, wird ignoriert |

### FLASH_ZEITEN_LESEN

Auslesen der Flash Loeschzeit, Signaturtestzeit, Authentisierberechnungszeit und Resetzeit

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen KWP2000: $14 ClearDiagnosticInformation Modus  : Default

_No arguments._

### FS_LESEN

Fehlerspeicher lesen (alle Fehler / Ort und Art) KWP2000: $18 ReadDiagnosticTroubleCodesByStatus Modus  : Default

_No arguments._

### RESET_STATUS

Abfrage der letzten Reset-Ursache

_No arguments._

### ADAPTION_LESEN_SETZEN

Adaptionen lesen oder zurücksetzen Durch das gleichzeitige Setzen mehrerer Bits können auch mehrere Adaptionswerte gleichzeitig zurückgesetzt werden, gelesen werden kann aber immer nur ein Adaptionswert.

| Name | Type | Description |
| --- | --- | --- |
| IOCP_ADAPTION | int | Auswahlbyte Aktion 0x04 => Adaptionen selektiv löschen 0x09 => Adaptionen selektiv lesen |
| CS1_ADAPTION | int | Adaption Auswahlbyte 1 Bit 0 => Normale Drosselklappenadaption Bit 1 => Lambdaadaption für Teil- und Volllast Bit 2 => Leerlaufregleradaption Bit 3 => Leerlaufstellernullabgleich Bit 4 => Lambdaadaption für Leerlauf Bit 5 => Nicht benutzt Bit 6 => Nicht benutzt Bit 7 => Nicht benutzt |
| CS2_ADAPTION | int | Adaption Auswahlbyte 2 Bit 0 => Schnelle Drosselklappenadaption Bit 1 => Nicht benutzt Bit 2 => Nicht benutzt Bit 3 => Nicht benutzt Bit 4 => Nicht benutzt Bit 5 => Nicht benutzt Bit 6 => Nicht benutzt Bit 7 => Nicht benutzt |

### IO_STATUS_VORGEBEN

Ein-/Ausgabestatus vorgeben zum testweisen Ansteuerung der Endstufen

| Name | Type | Description |
| --- | --- | --- |
| IDENTIFIER_IO_STATUS | int | Auswahlbyte Endstufe 0x10 => Elektrolüfter 0x11 => Elektrische Kraftstoffpumpe 0x12 => Einspritzventil 0x13 => Tankentlüftungsventil (falls verbaut) 0x14 => Übertemperaturanzeige 0x15 => Leerlaufsteller 0x16 => Lambdasondenheizung 0x17 => Sekundärluftventil (Vorhalt) |
| IOCP_IO_STATUS | int | Auswahlbyte Aktion 0x00 => Ansteuerung durch Fahrprogramm wieder freigeben (Normalbetrieb) 0x01 => Ansteuerungszustand durch Diagnose lesen 0x06 => Ansteuerungszustand durch Diagnose setzen |
| CS1_IO_STATUS | int | Auswahlbyte 1 zum Setzen eines Zustands IDENTIFIER_IO_STATUS = 0x10: 0x00 => ELUE aus 0xFF => ELUE ein IDENTIFIER_IO_STATUS = 0x11: 0x00 => EKP aus 0xFF => EKP ein IDENTIFIER_IO_STATUS = 0x12: Ansteuerungsdauer EV mit 100 ms Periode und 1 % Tastverhältnis als Vielfaches von 39,2 ms (0x01 => 39,2 ms, 0xff => 10s) IDENTIFIER_IO_STATUS = 0x13: CS2_IO_STATUS = 0x00: Ansteuerungsdauer TEV mit 160 ms Periode und 50 % Tastverhältnis als Vielfaches von 39,2 ms (minimal 100 ms, maximal 10s) CS2_IO_STATUS = 0x01: 0x00 => TEV-Funktion ausschalten 0x01 => TEV-Funktion einschalten IDENTIFIER_IO_STATUS = 0x14: 0x00 => UET aus 0xFF => UET ein IDENTIFIER_IO_STATUS = 0x15: Anzahl Schritte, um die LLS verfahren werden soll. IDENTIFIER_IO_STATUS = 0x16: 0x00 => LSH aus 0xFF => LSH ein IDENTIFIER_IO_STATUS = 0x17: Ansteuerungsdauer SLV mit 160 ms Periode und 50 % Tastverhältnis als Vielfaches von 39,2 ms (minimal 100 ms, maximal 10s) |
| CS2_IO_STATUS | int | Auswahlbyte 2 zum Setzen eines Zustands IDENTIFIER_IO_STATUS = 0x10: Wird nicht ausgewertet IDENTIFIER_IO_STATUS = 0x11: Wird nicht ausgewertet IDENTIFIER_IO_STATUS = 0x12: Wird nicht ausgewertet IDENTIFIER_IO_STATUS = 0x13: 0x00 => TEV ansteuern 0x01 => TEV-Funktion ein-/ausschalten IDENTIFIER_IO_STATUS = 0x14: Wird nicht ausgewertet IDENTIFIER_IO_STATUS = 0x15: 0x00 => LLS verfahren in Richtung auf 0xFF => LLS verfahren in Richtung zu IDENTIFIER_IO_STATUS = 0x16: Wird nicht ausgewertet IDENTIFIER_IO_STATUS = 0x17: Wird nicht ausgewertet |

### SG_STATUS_VORGEBEN

Vorgeben von steuergeräteinternen Stati zum einzelnes Abschalten der Zündendstufen oder zur Abschaltung oder Störgrößenaufschaltung für Lambdaregler

| Name | Type | Description |
| --- | --- | --- |
| RECORD_LOCAL_IDENTIFIER | int | Auswahl des Status 0x80 => Störgrößenaufschaltung für Lambdaregler 0x81 => Sperrung des Lambdareglers 0x82 => Abschaltung einzelner Zündendstufen |
| SG_STATUS | int | Wert des Status RECORD_LOCAL_IDENTIFIER = 0x80: Grundanpassungsfaktor für Einspritzzeit Ti (Umrechung x/128) RECORD_LOCAL_IDENTIFIER = 0x81: 0 => Lambdaregler gesperrt 1 => Lambdaregler freigegeben (Normalzustand) RECORD_LOCAL_IDENTIFIER = 0x82: 0x00 => Beide Zündendstufen eingeschaltet (Normalzustand) 0x40 => Zündendstufe 1 abgeschaltet 0x80 => Zündendstufe 2 abgeschaltet 0xC0 => Beide Zündendstufen abgeschaltet (wenig sinnvoll) |

### STATUS_MESSWERTE_BLOCK1

Auslesen der Stati des Messwerteblocks 1

_No arguments._

### STATUS_MESSWERTE_BLOCK2

Auslesen der Stati des Messwerteblocks 2

_No arguments._

### STATUS_SCHALTERINFO_BLOCK1

Auslesen der Stati des Schalterinfoblocks 1

_No arguments._

### FS_LESEN_DETAIL

Fehlerspeicher lesen (ein Fehler / alle Details) KWP2000: $17 ReadStatusOfDiagnosticTroubleCodes Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | int | gewaehlter Fehlercode |

### SLEEP_MODE

SG in Sleep-Mode versetzen KWP2000: $31 StartRoutineByLocalIdentifier a)       $0E Time controlled PowerDown oder b)       $05 PowerDown $00 all ECU Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | real | a) Zeit nach der das Steuergerät einschläft Bereich   : 0.5 bis 20.0 [Sekunden] Auflösung : 0.5 [Sekunden] => zeitgesteuerter Power-Down (0x0E) wird aktiviert b) Default: (Es wird kein Argument übergeben!) => normaler Power-Down (0x05) wird aktiviert |

### IDENT_FUNKTIONAL

Identdaten KWP2000: $1A ReadECUIdentification Modus  : Default

_No arguments._

### AIF_LESEN_FUNKTIONAL

Auslesen des Anwender Informations Feldes

| Name | Type | Description |
| --- | --- | --- |
| AIF_NUMMER | int | ==0 : aktuelles AIF > 0 : Nummer des zu lesenden AIF default = 0 : aktuelles AIF |

### C_FA_LESEN

Dummy-Job Fahrzeugauftrag lesen damit wird immer der Standard FA mit Baureihe und Typnummer aus der Fahrgestellnummer ausgegeben Modus  : Default

_No arguments._

### I_STUFE_LESEN

Auslesen des Pruefstempels aus Motorsteuerung KWP2000: $22 ReadDataByCommonIdentifier $1000 TestStamp Modus  : Default

_No arguments._

### I_STUFE_SCHREIBEN

Beschreiben des Pruefstempels Es muessen immer alle drei Argumente uebergeben werden. KWP2000: $2E WriteDataByCommonIdentifier $1000 TestStamp Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| I_STUFE_WERK | string | kein Argument - es wird 0x00 im Steuergeraet abgelegt table I_STUFE_K1X I_STUFE_TEXT es wird auch 0 akzeptiert, es wird 0x00 geschrieben Entspricht Byte 1 des Pruefstempels |
| I_STUFE_HO | string | kein Argument - es wird 0x00 im Steuergeraet abgelegt table I_STUFE_K1X I_STUFE_TEXT es wird auch 0 akzeptiert, es wird 0x00 geschrieben Entspricht Byte 2 des Pruefstempels |
| I_STUFE_HO_BACKUP | string | kein Argument - es wird 0x00 im Steuergeraet abgelegt table I_STUFE_K1X I_STUFE_TEXT es wird auch 0 akzeptiert, es wird 0x00 geschrieben Entspricht Byte 3 des Pruefstempels |

### FLASH_PROGRAMMIER_STATUS_LESEN_FUNKTIONAL

Programmierstatus des SG lesen KWP2000: $31 StartRoutineByLocalIdentifier $0A CheckProgrammingStatus Modus  : Default

_No arguments._

### SERIENNUMMER_LESEN_FUNKTIONAL

Hersteller Seriennummer lesen KWP2000: $1A ReadECUIdentification $89 SystemSupplierECUSerialNumber oder alternativ KWP2000: $1A ReadECUIdentification $80 ECUIdentificationDataTable Modus  : Default

_No arguments._

### STATUS_FAHRGESTELLNUMMER

Fahrgestellnummer lesen Über Auslesen des AIF Modus  : Default

_No arguments._

### STEUERN_FAHRGESTELLNUMMER

Fahrgestellnummer schreiben und ruecklesen Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (17-stellig) |

### STEUERN_LOGISTIK_WIEDERHERSTELLEN

Diagnoseindex, ZIF und HW-Nummer schreiben und ruecklesen Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| DIAG_INDEX | int | Diagnoseindex (z.B. 5) |
| ZIF | string | Zuliefererinfofeld (3x4-stellig <Sg-Kennung><Projekt-Nr><Prog-St>, z.B."0039IZ1A210E") |
| BMW_NUMMER | string | BMW HW-/SW-Nummer (7-stellig, z.B. "7714905") |

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
| - | BMW-FAST |
| - | KWP2000* |
| 1 | KWP2000 |
| - | DS2 |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x0105 | Umgebungsdrucksensor |
| 0x0110 | Ansauglufttemperaturfühler |
| 0x0115 | Motortemperaturfühler |
| 0x0120 | Drosselklappenpotentiometer |
| 0x0121 | schnelle Drosselklappenadaption |
| 0x0130 | Lambdasonde |
| 0x0135 | Lambdasondenheizung |
| 0x0201 | Einspritzventil |
| 0x0230 | Elektrische Kraftstoffpumpe |
| 0x0335 | KW-Signal |
| 0x0412 | Sekundärluftventil |
| 0x0443 | Tankentlüftungsventil |
| 0x0480 | Elektrischer Lüfter |
| 0x0500 | Geschwindigkeitssignal |
| 0x0505 | Leerlaufregler |
| 0x0560 | Ubatt-Signal |
| 0x0561 | Wackelkontakt |
| 0x0601 | E2-Emulation |
| 0x0603 | Steuergerätetest (SGS) |
| 0x0608 | UEXT Spannungsversorgung DKP |
| 0x0655 | Übertemperatur LED |
| 0x1510 | Elektrischer Lüfter |
| 0x1600 | Steuergerätetest (SGS) |
| 0x9997 | schnelle Drosselklappenadaption |
| 0x9999 | Übertemperatur LED |
| 0xFFFF | unbekannter Fehlerort |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | ja |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | nein |

### FARTTYP

| ORT | PLAUS | SIG | MIN | MAX |
| --- | --- | --- | --- | --- |
| default | 0x08 | 0x04 | 0x02 | 0x01 |

### FARTTEXTEINDIVIDUELL

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | kein passendes Fehlersymptom |
| 0x01 | Signal oder Wert oberhalb Schwelle |
| 0x02 | Signal oder Wert unterhalb Schwelle |
| 0x04 | kein Signal oder Wert |
| 0x08 | unplausibles Signal oder Wert |
| 0x05 | Übertemperatur |
| 0x06 | DKP-Adaption Drehzahl |
| 0x07 | DKP-Adaption Delta überschritten |
| 0x09 | DKP-Adaption Bereich überschritten |
| 0x0A | Bank 1 fehlerhaft |
| 0x0B | Bank 2 fehlerhaft |
| 0x0C | CRC16 fehlerhaft |
| 0x0D | RAM-Test fehlerhaft |
| 0x0E | Flash Device Id |
| 0x10 | Testbedingungen erfüllt |
| 0x11 | Testbedingungen noch nicht erfüllt |
| 0x20 | Fehler bisher nicht aufgetreten |
| 0x21 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x22 | Fehler momentan vorhanden, aber noch nicht gespeichert (Entprellphase) |
| 0x23 | Fehler momentan vorhanden und bereits gespeichert |
| 0x30 | Fehler würde kein Aufleuchten einer Warnlampe verursachen |
| 0x31 | Fehler würde das Aufleuchten einer Warnlampe verursachen |
| 0xFFFF | unbenutzte Fehlerart |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### JOBRESULT2

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | ERROR_ECU_RESERVED_BY_DOCUMENT |
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
| ?00? | OKAY |
| ?01? | BUSY |
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

### FARTTEXTE2

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | kein passendes Fehlersymptom |
| 0x01 | Signal oder Wert oberhalb Schwelle |
| 0x02 | Signal oder Wert unterhalb Schwelle |
| 0x04 | kein Signal oder Wert |
| 0x08 | unplausibles Signal oder Wert |
| 0x05 | Übertemperatur |
| 0x06 | DKP-Adaption Drehzahl |
| 0x07 | DKP-Adaption Delta überschritten |
| 0x09 | DKP-Adaption Bereich überschritten |
| 0x0A | Bank 1 fehlerhaft |
| 0x0B | Bank 2 fehlerhaft |
| 0x0C | CRC16 fehlerhaft |
| 0x0D | RAM-Test fehlerhaft |
| 0x0E | Flash Device Id |
| 0x10 | Testbedingungen erfüllt |
| 0x11 | Testbedingungen noch nicht erfüllt |
| 0x20 | Fehler bisher nicht aufgetreten |
| 0x21 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x22 | Fehler momentan vorhanden, aber noch nicht gespeichert (Entprellphase) |
| 0x23 | Fehler momentan vorhanden und bereits gespeichert |
| 0x30 | Fehler würde kein Aufleuchten einer Warnlampe verursachen |
| 0x31 | Fehler würde das Aufleuchten einer Warnlampe verursachen |
| 0xFF | unbekannte Fehlerart |

### TYPSCHLUESSEL

| TYPNUMMER | BAUREIHE | INFO |
| --- | --- | --- |
| 0x0175 | 0xC914FF | R13 MÜ |
| 0x0176 | 0xC914FF | R13 DA MÜ |
| 0x0185 | 0xC914FF | R13 US MÜ |
| 0x0186 | 0xC914FF | R13 DA US MÜ |
| 0x0178 | 0xC914FF | R13/31 Behörde |
| 0x0179 | 0xC914FF | R13/31 US |
| 0x0180 | 0xC914FF | R13/31 Zivil |
| 0x0177 | 0xAD153F | K14/02 |
| 0x0187 | 0xAD153F | K14/02 US |
| 0x0164 | 0xAD157F | K15(SCR) |
| 0x0141 | 0xAD157F | K15(Country) |
| 0x0165 | 0xAD157F | K15(HE) |
| 0x0142 | 0xAD157F | K15(Challenge) |
| 0x0167 | 0xAD157F | K15(SM) |
| 0x0143 | 0xAD157F | K15(Moto) |
| 0x0194 | 0xAD157F | K15 US(SCR) |
| 0x0151 | 0xAD157F | K15 US(Country) |
| 0x0195 | 0xAD157F | K15 US(HE) |
| 0x0152 | 0xAD157F | K15 US(Challenge) |
| 0x0197 | 0xAD157F | K15 US(SM) |
| 0x0153 | 0xAD157F | K15 US(Moto) |
| 0x0171 | 0xC914FF | R13/31 CKD Brasilien |
| 0x0188 | 0xC914FF | R13/40 ECE (G650 GS) |
| 0x0189 | 0xC914FF | R13/40 US (G650 GS) |
| 0x0135 | 0xC914FF | R13/40 CKD (G650 GS) |
| 0x0136 | 0xC914FF | R13/40 ECE Sertao (G650 GS Sertao) |
| 0x0146 | 0xC914FF | R13/40 US Sertao (G650 GS Sertao) |
| 0x0137 | 0xC914FF | R13/40 CKD Sertao (G650 GS Sertao) |
