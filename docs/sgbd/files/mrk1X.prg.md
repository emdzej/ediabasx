# mrk1X.prg

## General

|  |  |
| --- | --- |
| File | mrk1X.prg |
| Type | PRG |
| Jobs | 18 |
| Tables | 12 |
| Origin | UX-EE-1 Krimmer/BMW |
| Revision | 3.34 |
| Author | UX-EE-1 Sergl/ESG, UX-EE-1 Krimmer/BMW, UX-EE-1 Berisha/ESG, UX |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Funktionale Jobs fuer Motorrad |  |  |
| ORIGIN | string | UX-EE-1 Krimmer/BMW |  |  |
| REVISION | string | 3.34 |  |  |
| AUTHOR | string | UX-EE-1 Sergl/ESG, UX-EE-1 Krimmer/BMW, UX-EE-1 Berisha/ESG, UX |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.43 |  |  |
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

### IDENT_FUNKTIONAL

Identdaten KWP2000: $1A ReadECUIdentification Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FUNKTIONALE_ADRESSE | string | gewuenschte funktionale Adresse table FunktionaleAdresse F_ADR F_ADR_TEXT oder spezifische SG-Adresse Defaultwert: ALL |
| GRUPPENDATEI | string | optionales Argument nicht in Verbindung mit FUNKTIONALE_ADRESSE |

### FS_LESEN_FUNKTIONAL

Fehlerspeicher lesen (alle Fehler / Ort und Art) KWP2000: $18 ReadDiagnosticTroubleCodesByStatus Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FUNKTIONALE_ADRESSE | string | gewuenschte funktionale Adresse table FunktionaleAdresse F_ADR F_ADR_TEXT Defaultwert: ALL ( alle Steuergeraete ) |
| FEHLER_GRUPPE | string | gewuenschte funktionale Fehlergruppe table FunktionalerFehlerGruppe F_DTC F_DTC_TEXT Defaultwert: AG ( alle Fehlergruppen ) |

### FS_LOESCHEN_FUNKTIONAL

Fehlerspeicher loeschen KWP2000: $14 ClearDiagnosticInformation Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FUNKTIONALE_ADRESSE | string | gewuenschte funktionale Adresse table FunktionaleAdresse F_ADR F_ADR_TEXT Defaultwert: ALL ( alle Steuergeraete ) |
| FEHLER_GRUPPE | string | gewuenschte funktionale Fehlergruppe table FunktionalerFehlerGruppe F_DTC F_DTC_TEXT Defaultwert: AG ( alle Fehlergruppen ) |

### C_AEI_LESEN_FUNKTIONAL

Aenderungsindex der Codierdaten lesen Standard Codierjob KWP2000: $22   ReadDataByCommonIdentifier $3FFF ChangeIndexOfCodingData Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FUNKTIONALE_ADRESSE | string | gewuenschte funktionale Adresse table FunktionaleAdresse F_ADR F_ADR_TEXT Defaultwert: ALL ( alle Steuergeraete ) |

### FLASH_PROGRAMMIER_STATUS_LESEN_FUNKTIONAL

Programmierstatus des SG lesen KWP2000: $31 StartRoutineByLocalIdentifier $0A CheckProgrammingStatus Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FUNKTIONALE_ADRESSE | string | gewuenschte funktionale Adresse table FunktionaleAdresse F_ADR F_ADR_TEXT Defaultwert: ALL ( alle Steuergeraete ) |

### SERIENNUMMER_LESEN_FUNKTIONAL

Hersteller Seriennummer lesen KWP2000: $1A ReadECUIdentification $89 SystemSupplierECUSerialNumber Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FUNKTIONALE_ADRESSE | string | gewuenschte funktionale Adresse table FunktionaleAdresse F_ADR F_ADR_TEXT Defaultwert: ALL ( alle Steuergeraete ) |

### PHYSIKALISCHE_HW_NR_LESEN_FUNKTIONAL

Auslesen der physikalischen Hardwarenummer KWP2000: $1A ReadECUIdentification $87 physicalECUHardwareNumber (PECUHN) Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FUNKTIONALE_ADRESSE | string | gewuenschte funktionale Adresse table FunktionaleAdresse F_ADR F_ADR_TEXT Defaultwert: ALL ( alle Steuergeraete ) |

### ENERGIESPARMODE_FUNKTIONAL

Einstellen des Energiesparmodes KWP2000: $31 StartRoutineByLocalIdentifier $0C ControlEnergySavingMode Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FUNKTIONALE_ADRESSE | string | gewuenschte funktionale Adresse table FunktionaleAdresse F_ADR F_ADR_TEXT Defaultwert: ALL ( alle Steuergeraete ) |
| PRODUKTIONSMODE | string | "ein" -> Produktions Mode ein "aus" -> Produktions Mode aus table DigitalArgument TEXT Default: "aus" |
| TRANSPORTMODE | string | "ein" -> Transport Mode ein "aus" -> Transport Mode aus table DigitalArgument TEXT Default: "aus" |
| WERKSTATTMODE | string | "ein" -> Werkstatt Mode ein "aus" -> Werkstatt Mode aus table DigitalArgument TEXT Default: "aus" |

### AIF_LESEN_FUNKTIONAL

Auslesen des Anwender Informations Feldes KWP2000: $1A ReadECUIdentification $86 CurrentUIFDataTable Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FUNKTIONALE_ADRESSE | string | gewuenschte funktionale Adresse table FunktionaleAdresse F_ADR F_ADR_TEXT Defaultwert: ALL ( alle Steuergeraete ) |

### I_STUFE_LESEN

Auslesen des Pruefstempels aus Kombi Wenn Kombi tot bzw. Daten nicht plausibel auch aus ZFE Wenn ZFE tot bzw. Daten nicht plausibel auch aus BMSKP KWP2000: $22 ReadDataByCommonIdentifier $1000 TestStamp Modus  : Default

_No arguments._

### I_STUFE_SCHREIBEN

Beschreiben des Pruefstempels der ZFE und des Kombis und evtl BMSKP Es muessen immer alle drei Argumente uebergeben werden. KWP2000: $2E WriteDataByCommonIdentifier $1000 TestStamp Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| I_STUFE_WERK | string | kein Argument - es wird 0x00 im Steuergeraet abgelegt table I_STUFE_K24 I_STUFE_TEXT es wird auch 0 akzeptiert, es wird 0x00 geschrieben Entspricht Byte 1 des Pruefstempels |
| I_STUFE_HO | string | kein Argument - es wird 0x00 im Steuergeraet abgelegt table I_STUFE_K24 I_STUFE_TEXT es wird auch 0 akzeptiert, es wird 0x00 geschrieben Entspricht Byte 2 des Pruefstempels |
| I_STUFE_HO_BACKUP | string | kein Argument - es wird 0x00 im Steuergeraet abgelegt table I_STUFE_K24 I_STUFE_TEXT es wird auch 0 akzeptiert, es wird 0x00 geschrieben Entspricht Byte 3 des Pruefstempels |

### C_FA_LESEN

Fahrzeugauftrag lesen zuerst aus Kombi, bei Timeout oder neuem Kombi aus ZFE, dann bei Timeout ZFE oder neue ZFE aus BMSKP KWP2000: $22   ReadDataByCommonIdentifier $3F00 - $3F7F Fahrzeugauftrag Modus  : Default

_No arguments._

### STATUS_FAHRGESTELLNUMMER

17 ASCII Byte Fahrgestell-Nummer aus BMSK KWP 2000: $21 ReadDataByLocalIdentifier LocalIdentifier $30 Falls keine Antwort von BMSKP (weil BMSKP im Bootblock), wird auf die FGNR aus dem FA-Bereich ($22, $10, $10) zurueckgegriffen Modus   : Default

_No arguments._

### NETTODATEN_LESEN_FUNKTIONAL

Nettodaten der Codierdaten lesen Standard Codierjob KWP2000: $22   ReadDataByCommonIdentifier $3xxx Codierdaten-Adressen Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FUNKTIONALE_ADRESSE | string | gewuenschte funktionale Adresse table FunktionaleAdresse F_ADR F_ADR_TEXT Defaultwert: ALL ( alle Steuergeraete ) |

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
| 0xFF | unbekannter Hersteller |

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

### FUNKTIONALEADRESSE

| NR | F_ADR | F_ADR_TEXT |
| --- | --- | --- |
| 0xE6 | VD-FLEXRAY | Vertikaldynamik Flexray Steuergeräte |
| 0xE7 | SWT | Sweeping technologies Steuergeräte |
| 0xE8 | LIN | LIN-Bus Master Steuergeräte |
| 0xE9 | K-CAN | Karosserie-CAN Steuergeräte |
| 0xEA | PT-CAN | Powertrain-CAN Steuergeräte |
| 0xEB | SI | Sicherheits-BUS Steuergeräte |
| 0xEC | MOST | MOST-BUS Steuergeräte |
| 0xED | BOS | Bedarfsorientierter Service |
| 0xED | CBS | Bedarfsorientierter Service |
| 0xEE | PERSONAL | Personalisierung |
| 0xEF | ALL | alle Steuergeräte |

### FUNKTIONALERFEHLERGRUPPE

| NR | F_DTC | F_DTC_TEXT |
| --- | --- | --- |
| 0xFFFB | PG | Antriebsstrang Gruppe |
| 0xFFFC | CG | Fahrwerk Gruppe |
| 0xFFFD | BG | Karosserie Gruppe |
| 0xFFFE | NG | Netzwerk Kommunikation Gruppe |
| 0xFFFF | AG | alle Gruppen |

### KONZEPT_TABELLE

| NR | KONZEPT_TEXT |
| --- | --- |
| 0x10 | D-CAN |
| 0x0F | BMW-FAST |
| 0x0D | KWP2000* |
| 0x0C | KWP2000 |
| 0x06 | DS2 |

### AUTHENTISIERUNG

| AUTH_NR | AUTH_TEXT |
| --- | --- |
| 0x01 | Simple |
| 0x02 | Symetrisch |
| 0x03 | Asymetrisch |
| 0xFF | Keine |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### I_STUFE_K24

| NR | I_STUFE_TEXT |
| --- | --- |
| 0x00 |  |
| 0x01 | K024-02-10-100 |
| 0x02 | K024-03-03-200 |
| 0x03 | K024-03-05-310 |
| 0x04 | K024-03-05-311 |
| 0x05 | K024-03-08-420 |
| 0x06 | K024-03-10-500 |
| 0x07 | K024-03-10-510 |
| 0x08 | K024-04-03-400 |
| 0x09 | K024-04-03-500 |
| 0x0A | K024-04-05-510 |
| 0x0B | K024-04-07-500 |
| 0x0C | K024-04-11-500 |
| 0x0F | K024-04-11-510 |
| 0x10 | K024-04-11-520 |
| 0x11 | K024-04-11-530 |
| 0x0E | K024-05-02-500 |
| 0x12 | K024-05-02-510 |
| 0x0D | K024-05-05-400 |
| 0x17 | K024-05-05-500 |
| 0x18 | K024-05-05-510 |
| 0x19 | K024-05-05-520 |
| 0x1A | K024-05-08-500 |
| 0x1D | K024-05-08-510 |
| 0x13 | K024-05-11-300 |
| 0x1C | K024-05-11-500 |
| 0x20 | K024-05-11-510 |
| 0x14 | K024-05-12-300 |
| 0x15 | K024-05-12-310 |
| 0x16 | K024-05-12-320 |
| 0x1B | K024-05-12-400 |
| 0x1E | K024-06-01-300 |
| 0x1F | K024-06-01-500 |
| 0x22 | K024-06-01-510 |
| 0x21 | K024-06-07-500 |
| 0x23 | K024-06-08-400 |
| 0x24 | K024-06-08-500 |
| 0x2F | K024-06-08-510 |
| 0x26 | K024-06-10-500 |
| 0x30 | K024-07-01-500 |
| 0x27 | K024-07-02-500 |
| 0x2E | K024-07-05-500 |
| 0x31 | K024-07-05-510 |
| 0x32 | K024-07-05-520 |
| 0x35 | K024-07-05-530 |
| 0x2C | K024-07-08-500 |
| 0x25 | K024-07-10-200 |
| 0x28 | K024-07-10-210 |
| 0x29 | K024-07-10-220 |
| 0x2A | K024-07-10-300 |
| 0x2B | K024-07-10-400 |
| 0x2D | K024-07-10-500 |
| 0x36 | K024-07-10-505 |
| 0x37 | K024-07-10-510 |
| 0x34 | K024-08-01-500 |
| 0x3A | K024-08-05-500 |
| 0x39 | K024-08-08-400 |
| 0x3B | K024-08-08-500 |
| 0x3E | K024-08-08-550 |
| 0x33 | K024-08-12-300 |
| 0x3C | K024-09-09-200 |
| 0x3F | K024-09-09-300 |
| 0x3D | K024-09-10-300 |
| 0x38 |  |
| 0xFF |  |
| 0xFE | unbekannte I-Stufe |

### GROBNAME

| ADR | GROBNAME |
| --- | --- |
| 0x12 | BMSK |
| 0x29 | ABS |
| 0x41 | DWA |
| 0x47 | RADIO |
| 0x60 | KOMBI |
| 0x63 | AUDIO |
| 0x72 | ZFE |
| 0x73 | RBT |
| 0xXY | ???? |

### SG_DIAGNOSEKONZEPT

| RANG | KONZEPT_TEXT |
| --- | --- |
| - | BMW-FAST |
| - | KWP2000* |
| 1 | KWP2000 |
| - | DS2 |
