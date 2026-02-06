# RR1.PRG

## General

|  |  |
| --- | --- |
| File | RR1.PRG |
| Type | PRG |
| Jobs | 24 |
| Tables | 12 |
| Origin | BMW TI-545 Drexel |
| Revision | 1.60 |
| Author | BMW TI-545 Drexel |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Funktionale Jobs für RR1 |  |  |
| ORIGIN | string | BMW TI-545 Drexel |  |  |
| REVISION | string | 1.60 |  |  |
| AUTHOR | string | BMW TI-545 Drexel |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.85 |  |  |
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

### IS_LOESCHEN_FUNKTIONAL

Infospeicher loeschen KWP2000: $31 StartRoutineByLocalIdentifier $06 ClearDTCShadowMemory Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FUNKTIONALE_ADRESSE | string | gewuenschte funktionale Adresse table FunktionaleAdresse F_ADR F_ADR_TEXT Defaultwert: ALL ( alle Steuergeraete ) |

### HS_LOESCHEN_FUNKTIONAL

Historyspeicher loeschen KWP2000: $31 StartRoutineByLocalIdentifier $03 ClearHistoryMemory Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FUNKTIONALE_ADRESSE | string | gewuenschte funktionale Adresse table FunktionaleAdresse F_ADR F_ADR_TEXT Defaultwert: ALL ( alle Steuergeraete ) |

### SLEEP_MODE_FUNKTIONAL

SG in Sleep-Mode versetzen KWP2000: $31 StartRoutineByLocalIdentifier $05 PowerDown Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FUNKTIONALE_ADRESSE | string | gewuenschte funktionale Adresse table FunktionaleAdresse F_ADR F_ADR_TEXT Defaultwert: ALL ( alle Steuergeraete ) |
| OHNE_POWERMODUL | string | Power Down ohne Powermodul Werte: JA, NEIN table DigitalArgument TEXT Defaultwert: NEIN |

### AIF_LESEN_FUNKTIONAL

Auslesen des Anwender Informations Feldes KWP2000: $1A ReadECUIdentification $86 CurrentUIFDataTable Modus  : Default

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

### C_FG_LESEN_FUNKTIONAL

Fahrgestellnummer lesen KWP2000: $1A ReadECUIdentification $90 Vehicle Identification Number Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FUNKTIONALE_ADRESSE | string | gewuenschte funktionale Adresse table FunktionaleAdresse F_ADR F_ADR_TEXT oder spezifische SG-Adresse Defaultwert: ALL |

### C_AEI_LESEN_FUNKTIONAL

Aenderungsindex der Codierdaten lesen Standard Codierjob KWP2000: $22   ReadDataByCommonIdentifier $3FFF ChangeIndexOfCodingData Modus  : Default

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

### SENSOREN_ANZAHL_LESEN_FUNKTIONAL

Anzahl der intelligenten Subbussensoren lesen KWP2000: $22 ReadDataByCommonIdentifier $1600 IdentifyNumberofSubbusMembers Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FUNKTIONALE_ADRESSE | string | gewuenschte funktionale Adresse table FunktionaleAdresse F_ADR F_ADR_TEXT Defaultwert: ALL ( alle Steuergeraete ) |

### SENSOREN_IDENT_LESEN_FUNKTIONAL

Identifikation der intelligenten Subbussensoren lesen KWP2000: $22 ReadDataByCommonIdentifier $1600 IdentifyNumberofSubbusMembers $16xx SubbusMemberSerialNumber Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| FUNKTIONALE_ADRESSE | string | gewuenschte funktionale Adresse table FunktionaleAdresse F_ADR F_ADR_TEXT Defaultwert: ALL ( alle Steuergeraete ) |
| SENSOR_NR | long | optionales Argument nur bei physikalischer Adressierung gewuenschter Sensor xx (0x01 - 0xFF) |

### MOST_CAN_GATEWAY_DISABLE

Stoppen der Kommunikation über das Gateway KWP2000: $31 StartRoutineByLocalIdentifier $0F disableMCGW Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| TESTER_ADRESSE | unsigned char | 0xF1, wenn BMW-Tester 0xFA, wenn MOST-Tester |

### MOST_CAN_GATEWAY_ENABLE

Restart der Kommunikation über das Gateway KWP2000: $32 StopRoutineByLocalIdentifier $0F disableMCGW Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| TESTER_ADRESSE | unsigned char | 0xF1, wenn BMW-Tester 0xFA, wenn MOST-Tester |

### GRP2SGADR

Ermittlung der SG-Adresse aus ZuordnungsTabelle

| Name | Type | Description |
| --- | --- | --- |
| GRUPPENDATEI | string | Name der Gruppendatei |

### I_STUFE_LESEN

Auslesen des Pruefstempels aus Lichtmodul Wenn Daten nicht plausibel auch aus CAS KWP2000: $22 ReadDataByCommonIdentifier $1000 TestStamp Modus  : Default

_No arguments._

### I_STUFE_SCHREIBEN

Beschreiben des Pruefstempels des Lichtmoduls Es muessen immer alle drei Argumente uebergeben werden. KWP2000: $2E WriteDataByCommonIdentifier $1000 TestStamp Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| I_STUFE_WERK | string | table I_STUFE_RR1 I_STUFE_TEXT Entspricht Byte 1 des Pruefstempels |
| I_STUFE_HO | string | table I_STUFE_RR1 I_STUFE_TEXT Entspricht Byte 2 des Pruefstempels |
| I_STUFE_HO_BACKUP | string | table I_STUFE_RR1 I_STUFE_TEXT Entspricht Byte 3 des Pruefstempels |

## Tables

### KONZEPT_TABELLE

| NR | KONZEPT_TEXT |
| --- | --- |
| 0x0F | BMW-FAST |
| 0x0C | KWP2000 |

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
| 0x01 | Reinshagen / Delphi |
| 0x02 | Leopold Kostal GmbH & Co. KG |
| 0x03 | Hella Fahrzeugkomponenten GmbH |
| 0x04 | Siemens |
| 0x05 | Eaton |
| 0x06 | UTA |
| 0x07 | Helbako GmbH |
| 0x08 | Robert Bosch GmbH |
| 0x09 | Lear Corporation |
| 0x10 | VDO |
| 0x11 | Valeo GmbH |
| 0x12 | MBB |
| 0x13 | Kammerer |
| 0x14 | SWF |
| 0x15 | Blaupunkt |
| 0x16 | Philips |
| 0x17 | Alpine Electronics GmbH |
| 0x18 | Continental Teves AG & Co. OHG |
| 0x19 | Elektromatik Südafrika |
| 0x20 | Harman Becker Automotive Systems |
| 0x21 | Preh GmbH |
| 0x22 | Alps Electric Co. Ltd. |
| 0x23 | Motorola |
| 0x24 | Temic |
| 0x25 | Webasto SE |
| 0x26 | MotoMeter |
| 0x27 | Delphi Automotive PLC |
| 0x28 | DODUCO (Beru) |
| 0x29 | DENSO |
| 0x30 | NEC |
| 0x31 | DASA |
| 0x32 | Pioneer Corporation |
| 0x33 | Jatco |
| 0x34 | FUBA Automotive GmbH & Co. KG |
| 0x35 | UK-NSI |
| 0x36 | AABG |
| 0x37 | Dunlop |
| 0x38 | Sachs |
| 0x39 | ITT |
| 0x40 | FTE (Fahrzeugtechnik Ebern) |
| 0x41 | Megamos |
| 0x42 | TRW Automotive GmbH |
| 0x43 | WABCO Fahrzeugsysteme GmbH |
| 0x44 | ISAD Electronic Systems |
| 0x45 | HEC Hella Electronics Corporation |
| 0x46 | Gemel |
| 0x47 | ZF Friedrichshafen AG |
| 0x48 | GMPT |
| 0x49 | Harman Becker Automotive Systems GmbH |
| 0x50 | Remes GmbH |
| 0x51 | ZF Lenksysteme GmbH |
| 0x52 | Magneti Marelli S.p.A. |
| 0x53 | Johnson Controls Inc. |
| 0x54 | GETRAG Getriebe- und Zahnradf. Hermann Hagenmeyer GmbH & Co. KG |
| 0x55 | Behr-Hella Thermocontrol GmbH |
| 0x56 | Siemens VDO Automotive |
| 0x57 | Visteon Innovation & Technology GmbH |
| 0x58 | Autoliv AB |
| 0x59 | Haberl Electronic GmbH & Co. KG |
| 0x60 | Magna International Inc. |
| 0x61 | Marquardt GmbH |
| 0x62 | AB Elektronik GmbH |
| 0x63 | SDVO/BORG |
| 0x64 | Hirschmann Car Communication GmbH |
| 0x65 | hoerbiger-electronics |
| 0x66 | Thyssen Krupp Automotive |
| 0x67 | Gentex Corporation |
| 0x68 | Atena GmbH |
| 0x69 | Magna-Donelly |
| 0x70 | Koyo Steeting Europe |
| 0x71 | NSI Beheer B.V. |
| 0x72 | Aisin AW Co. Ltd. |
| 0x73 | Schorlock |
| 0x74 | Schrader Electronics Ltd. |
| 0x75 | Huf-Electronics Bretten GmbH |
| 0x76 | CEL |
| 0x77 | AUDIO MOBIL Elektronik GmbH |
| 0x78 | rd electronic |
| 0x79 | iSYS RTS GmbH |
| 0x80 | Westfalia-Automotive GmbH |
| 0x81 | Tyco Electronics |
| 0x82 | Paragon AG |
| 0x83 | IEE S.A. |
| 0x84 | TEMIC AUTOMOTIVE of NA |
| 0x85 | Sonceboz S.A. |
| 0x86 | Meta System S.p.A. |
| 0x87 | Huf Hülsbeck & Fürst GmbH & Co. KG |
| 0x88 | MANN+HUMMEL GmbH |
| 0x89 | Brose Fahrzeugteile GmbH & Co. |
| 0x90 | Keihin |
| 0x91 | Vimercati S.p.a |
| 0x92 | CRH |
| 0x93 | TPO Display Corp |
| 0x94 | Küster Automotive GmbH |
| 0x95 | Hitachi Automotive |
| 0x96 | Continental AG |
| 0x97 | TI-Automotive |
| 0x98 | Hydro |
| 0x99 | Johnson Controls Inc. |
| 0x9A | Takata-Petri |
| 0x9B | Mitsubishi Electric B.V. (Melco) |
| 0x9C | Autokabel |
| 0x9D | GKN Plc |
| 0x9E | Zollner Elektronik AG |
| 0x9F | peiker acustic GmbH & Co. KG |
| 0xA0 | Bosal-Oris |
| 0xA1 | Cobasys |
| 0xA2 | Automotive Lighting Reutlingen GmbH |
| 0xA3 | CONTI VDO |
| 0xA4 | A.D.C. Automotive Distance Control Systems GmbH |
| 0xA5 | Novero Dabendorf GmbH |
| 0xA6 | LAMES S.p.a. |
| 0xA7 | Magna/Closures |
| 0xA8 | Harbin Wan Yu Technology Co |
| 0xA9 | ThyssenKrupp Presta AG |
| 0xAA | ArvinMeritor |
| 0xAB | Kongsberg Automotive GmbH |
| 0xAC | SMR Automotive Mirrors Stuttgart GmbH |
| 0xAD | So.Ge.Mi. |
| 0xAE | MTA S.p.A. |
| 0xAF | Alfmeier Präzision AG |
| 0xB0 | Eltek Deutechland GmbH |
| 0xB1 | OMRON Automotive Electronics Europe GmbH |
| 0xB2 | ASK Industries GmbH |
| 0xB3 | CML Innovative Technologies GmbH & Co. KG |
| 0xB4 | APAG Elektronik AG |
| 0xB5 | Nexteer Automotive |
| 0xB6 | Hans Widmaier Fernmelde- und Feinwerktechnik |
| 0xB7 | Robert Bosch Battery Systems GmbH |
| 0xB8 | Kyocera Display Europe GmbH |
| 0xB9 | Magna Powertrain AG & Co. KG |
| 0xBA | BorgWarner Beru Systems GmbH |
| 0xBB | BMW AG |
| 0xBC | Benteler Duncan Plant |
| 0xBD | U-Shin Deutschland Zugangssysteme GmbH |
| 0xBE | Schaeffler Technologies AG & Co. KG |
| 0xBF | JTEKT Corporation |
| 0xC0 | VLF |
| 0xC1 | Flextronics |
| 0xC2 | LG Chem |
| 0xC3 | Panasonic |
| 0xC4 | Alpitronic GmbH |
| 0xC5 | Telemotive AG |
| 0xC6 | Garmin |
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

### VERBAUORTTABELLE

| ORT | ORTTEXT | LIN_2_FORMAT |
| --- | --- | --- |
| 0x0100 | Batteriesensor BSD | - |
| 0x0150 | Ölqualitätsensor BSD | - |
| 0x0200 | Elektrische Wasserpumpe BSD | - |
| 0x0250 | Elektrische Kraftstoffpumpe BSD | - |
| 0x0300 | Generator 1 | - |
| 0x0350 | Generator 2 | - |
| 0x03A0 | Druck- Temperatursensor Tank | 1 |
| 0x03C0 | EAC-Sensor | - |
| 0x0400 | Schaltzentrum Lenksäule | - |
| 0x0500 | DSC Sensor-Cluster | - |
| 0x0600 | Nahbereichsradarsensor links | - |
| 0x0700 | Nahbereichsradarsensor rechts | - |
| 0x0800 | Funkempfänger | - |
| 0x0900 | Elektrische Lenksäulenverriegelung | - |
| 0x0A00 | Regen- Lichtsensor | - |
| 0x290A00 | DSC Hydraulikblock | - |
| 0x0B00 | Nightvision Kamera | - |
| 0x0C00 | TLC Kamera | - |
| 0x0D00 | Spurwechselradarsensor hinten links | - |
| 0x0E00 | Heckklima Bedienteil rechts | 1 |
| 0x0F00 | Rearview Kamera hinten | 1 |
| 0x0F80 | Frontview Kamera vorne | 1 |
| 0x1000 | Topview Kamera Außenspiegel links | 1 |
| 0x1100 | Topview Kamera Außenspiegel rechts | 1 |
| 0x1200 | Sideview Kamera Stoßfänger vorne links | 1 |
| 0x1210 | Sideview Kamera Kotflügel vorne links | 1 |
| 0x1300 | Sideview Kamera Stoßfänger vorne rechts | 1 |
| 0x1310 | Sideview Kamera Kotflügel vorne rechts | 1 |
| 0x1400 | Wischermotor | 1 |
| 0x1500 | Regen- Lichtsensor | 1 |
| 0x1600 | Innenspiegel | 1 |
| 0x1700 | Garagentoröffner | 1 |
| 0x1800 | AUC-Sensor | 1 |
| 0x1900 | Druck- Temperatursensor | 1 |
| 0x1A20 | Schalterblock Sitzheizung hinten links | 1 |
| 0x1A40 | Schalterblock Sitzheizung hinten rechts | 1 |
| 0x1A60 | Sitzheizung Fahrer | 1 |
| 0x1A80 | Sitzheizung Beifahrer | 1 |
| 0x1AA0 | Sitzheizung Fahrer hinten | 1 |
| 0x1AC0 | Sitzheizung Beifahrer hinten | 1 |
| 0x1B00 | Schalterblock Sitzmemory/-massage Fahrer | 1 |
| 0x1C00 | Schalterblock Sitzmemory/-massage Beifahrer | 1 |
| 0x1C80 | Sitzverstellschalter Beifahrer über Fond | 1 |
| 0x1D00 | Sonnenrollo Seitenfenster Fahrer | 1 |
| 0x1E00 | Sonnenrollo Seitenfenster Beifahrer | 1 |
| 0x1E40 | Heckklappenemblem | 1 |
| 0x1F00 | KAFAS Kamera | 1 |
| 0x2000 | Automatische Anhängevorrichtung | 1 |
| 0x2100 | SINE | 1 |
| 0x2110 | DWA Mikrowellensensor vorne rechts | 1 |
| 0x2120 | DWA Mikrowellensensor hinten rechts | 1 |
| 0x2130 | DWA Mikrowellensensor hinten links | 1 |
| 0x2140 | DWA Mikrowellensensor vorne links | 1 |
| 0x2150 | DWA Mikrowellensensor hinten | 1 |
| 0x2180 | DWA Ultraschallsensor | 1 |
| 0x2200 | Aussenspiegel Fahrer | - |
| 0x2210 | Aussenspiegel Fahrer | 1 |
| 0x2300 | Aussenspiegel Beifahrer | - |
| 0x2310 | Aussenspiegel Beifahrer | 1 |
| 0x2400 | Schaltzentrum Tür | 1 |
| 0x2500 | Schalterblock Sitz Fahrer | 1 |
| 0x2600 | Schalterblock Sitz Beifahrer | 1 |
| 0x2700 | Gurtbringer Fahrer | 1 |
| 0x2800 | Gurtbringer Beifahrer | 1 |
| 0x2900 | Treibermodul Scheinwerfer links | 1 |
| 0x2A00 | Treibermodul Scheinwerfer rechts | 1 |
| 0x2B00 | Bedieneinheit Fahrerassistenzsysteme | 1 |
| 0x2C00 | Bedieneinheit Licht | 1 |
| 0x2D00 | Smart Opener | 1 |
| 0x2E00 | LED-Hauptlicht-Modul links | 1 |
| 0x2F00 | LED-Hauptlicht-Modul rechts | 1 |
| 0x0910 | Elektrische Lenksäulenverriegelung | 1 |
| 0x3200 | Funkempfänger | 1 |
| 0x3300 | Funkempfänger 2 | 1 |
| 0x3400 | Türgriffelektronik Fahrer | - |
| 0x3500 | Türgriffelektronik Beifahrer | - |
| 0x3600 | Türgriffelektronik Fahrer hinten | - |
| 0x3700 | Türgriffelektronik Beifahrer hinten | - |
| 0x3800 | Telestart-Handsender 1 | - |
| 0x3900 | Telestart-Handsender 2 | - |
| 0x3A00 | Fond-Fernbedienung | - |
| 0x3B00 | Elektrische Wasserpumpe | 1 |
| 0x3B10 | Elektrische Wasserpumpe 1 | 1 |
| 0x3B20 | Elektrische Wasserpumpe 2 | 1 |
| 0x3B80 | Elektrische Zusatzwasserpumpe | 1 |
| 0x3C00 | Batteriesensor LIN | - |
| 0x3D00 | Aktives Kühlklappensystem | 1 |
| 0x3D10 | Aktiver Kühlluftklappensteller oberer Kühllufteinlass | 1 |
| 0x3D20 | Aktiver Kühlluftklappensteller unterer Kühllufteinlass | 1 |
| 0x3D80 | Lüfter | 1 |
| 0x3D88 | Lüfter 2 | 1 |
| 0x3E00 | PCU(DCDC) | 1 |
| 0x3E80 | DCDC Versorgung Zustartbatterie | 1 |
| 0x3F00 | Startergenerator | 1 |
| 0x3F80 | Generator | 1 |
| 0x4000 | Sitzverstellschalter Fahrer | 1 |
| 0x4100 | Sitzverstellschalter Beifahrer | 1 |
| 0x4200 | Sitzverstellschalter Fahrer hinten | 1 |
| 0x4300 | Sitzverstellschalter Beifahrer hinten | 1 |
| 0x4400 | Gepäckraumschalter links | 1 |
| 0x4500 | Gepäckraumschalter rechts | 1 |
| 0x4600 | Nackenwärmer | 1 |
| 0x4700 | Nackenwärmer Bedienschalter | 1 |
| 0x4A00 | Fond-Klimaanlage | 1 |
| 0x4B00 | Elektrischer Klimakompressor | 1 |
| 0x4C00 | Klimabedienteil | 1 |
| 0x4C80 | Klimabedienteil 3. Sitzreihe | 1 |
| 0x4D00 | Gebläseregler | 1 |
| 0x4E00 | Klappenmotor | 0 |
| 0x4F00 | Elektrischer Kältemittelverdichter eKMV | 1 |
| 0x4F80 | Elektrischer Zuheizer PTC | 1 |
| 0x4FC0 | Elektrischer Zuheizer 3. Sitzreihe | 1 |
| 0x6000 | Standheizung | 1 |
| 0x6100 | Wärmepumpe | 1 |
| 0x6180 | LIN-Zusatzwasserpumpe | 1 |
| 0x6200 | elektrischer Durchlaufheizer | 1 |
| 0x6300 | Ionisator | 1 |
| 0x6400 | Bedufter | 1 |
| 0x6500 | Sense-Touch-Modul links | 1 |
| 0x6600 | Sense-Touch-Modul rechts | 1 |
| 0x5000 | PMA Sensor links | 1 |
| 0x5100 | PMA Sensor rechts | 1 |
| 0x5200 | CID-Klappe | - |
| 0x5300 | Schaltzentrum Lenksäule | 1 |
| 0x5400 | Multifunktionslenkrad | 1 |
| 0x5500 | Lenkradelektronik | 1 |
| 0x5600 | CID | - |
| 0x5700 | Satellit Upfront links | 0 |
| 0x5708 | Satellit Upfront rechts | 0 |
| 0x570C | Satellit Upfront mitte | 0 |
| 0x5710 | Satellit Tür links | 0 |
| 0x5718 | Satellit Tür rechts | 0 |
| 0x5720 | Satellit B-Säule links X | 0 |
| 0x5728 | Satellit B-Säule rechts X | 0 |
| 0x5730 | Satellit B-Säule links Y | 0 |
| 0x5738 | Satellit B-Säule rechts Y | 0 |
| 0x5740 | Satellit Zentralsensor X | 0 |
| 0x5748 | Satellit Zentralsensor Y | 0 |
| 0x5750 | Satellit Zentralsensor Low g Y | 0 |
| 0x5758 | Satellit Zentralsensor Low g Z | 0 |
| 0x5760 | Satellit Zentralsensor Roll Achse | 0 |
| 0x5768 | Fussgängerschutz Sensor vorne links | 0 |
| 0x5770 | Fussgängerschutz Sensor vorne rechts | 0 |
| 0x5778 | Fussgängerschutz Sensor vorne mitte | 0 |
| 0x5780 | Fussgängerschutzsensor statisch | 0 |
| 0x5782 | Fussgängerschutz Zusatzsensor Beschleunigung links | 0 |
| 0x5784 | Fussgängerschutz Zusatzsensor Beschleunigung rechts | 0 |
| 0x5788 | Satellit C-Säule links Y | 0 |
| 0x5790 | Satellit C-Säule rechts Y | 0 |
| 0x5798 | Satellit Zentrale Körperschall | 0 |
| 0x57A0 | Kapazitive Insassen- Sensorik CIS | 1 |
| 0x57A8 | Sitzbelegungserkennung Beifahrer SBR | 1 |
| 0x57B0 | Fussgängerschutzsensor dynamisch 1 | 0 |
| 0x57B8 | Fussgängerschutzsensor dynamisch 2 | 0 |
| 0x57C0 | Satellit Drucksensor Schlauch PTS 1 vorne links p | 0 |
| 0x57C4 | Satellit Drucksensor Schlauch PTS 1 vorne rechts p | 0 |
| 0x57C8 | Satellit Drucksensor Schlauch PTS 2 vorne links p | 0 |
| 0x57CC | Satellit Drucksensor Schlauch PTS 2 vorne rechts p | 0 |
| 0x57D0 | Beschleunigungssensor vorne links X | 0 |
| 0x57D4 | Beschleunigungssensor vorne mitte X | 0 |
| 0x57D8 | Beschleunigungssensor vorne rechts X | 0 |
| 0x57DC | Beschleunigungssensor hinten mitte X | 0 |
| 0x57E0 | Sitzbelegungserkennung Beifahrer CIS/Bladder | 1 |
| 0x57E4 | Sitzbelegungserkennung 2. Sitzreihe links CIS/Bladder | 1 |
| 0x57E8 | Sitzbelegungserkennung 2. Sitzreihe rechts CIS/Bladder | 1 |
| 0x5800 | HUD | 1 |
| 0x5900 | Audio-Bedienteil | 1 |
| 0x5A00 | Innenlichtelektronik | 1 |
| 0x5A01 | Innenbeleuchtung - Lichtschwert links | 1 |
| 0x5A02 | Innenbeleuchtung - Lichtschwert rechts | 1 |
| 0x5A03 | Innenbeleuchtung - Lautsprecher Hutablage rechts | 1 |
| 0x5A04 | Innenbeleuchtung - Lautsprecher Hutablage links | 1 |
| 0x5A05 | Innenbeleuchtung - Lautsprecher hinten links | 1 |
| 0x5A06 | Innenbeleuchtung - Lautsprecher Mitteltöner vorne links | 1 |
| 0x5A07 | Innenbeleuchtung - Lautsprecher Hochtöner vorne links | 1 |
| 0x5A08 | Innenbeleuchtung - Lautsprecher hinten rechts | 1 |
| 0x5A09 | Innenbeleuchtung - Lautsprecher Mitteltöner vorne rechts | 1 |
| 0x5A0A | Innenbeleuchtung - Lautsprecher Hochtöner vorne rechts | 1 |
| 0x5A0B | Innenbeleuchtung - Lautsprecher Centerspeaker | 1 |
| 0x5A0C | Innenbeleuchtung - Panoramadach LED Modul 1 (hinteres Glasfestelement) | 1 |
| 0x5A0D | Innenbeleuchtung - Panoramadach LED Modul 2 (hinteres Glasfestelement) | 1 |
| 0x5A0E | Innenbeleuchtung - Panoramadach LED Modul 3 (hinteres Glasfestelement) | 1 |
| 0x5A0F | Innenbeleuchtung - Panoramadach LED Modul 4 (hinteres Glasfestelement) | 1 |
| 0x5A10 | Innenbeleuchtung - Panoramadach LED Modul 5 (vorderes Glasschiebedach) | 1 |
| 0x5A11 | Innenbeleuchtung - Panoramadach LED Modul 6 (vorderes Glasschiebedach) | 1 |
| 0x5A12 | Innenbeleuchtung - Panoramadach LED Modul 7 (vorderes Glasschiebedach) | 1 |
| 0x5A13 | Innenbeleuchtung - Panoramadach LED Modul 8 (vorderes Glasschiebedach) | 1 |
| 0x5A14 | Touch Command Snap-In Adapter - Mittelkonsole Fond | 1 |
| 0x5A20 | Innenlichteinheit 2 | 1 |
| 0x5A30 | Innenlichteinheit 3 | 1 |
| 0x5A40 | Innenlichteinheit 4 | 1 |
| 0x5A50 | Innenlichteinheit 5 | 1 |
| 0x5AFF | unbekannter Verbauort | - |
| 0x5B00 | Zentralinstrument | 1 |
| 0x5B40 | CID | 1 |
| 0x5B80 | Fondmonitor links | 1 |
| 0x5BC0 | Fondmonitor rechts | 1 |
| 0x5B60 | Fondcontroller | 1 |
| 0x5C00 | Elektrische Lenksäulenverstellung ELSV | 1 |
| 0x5D00 | Hands-Off Detection HOD | 1 |
| 0x5E01 | Innenbeleuchtung Fußraum Fahrer vorne | 1 |
| 0x5E02 | Innenbeleuchtung Fußraum Fahrer hinten | 1 |
| 0x5E03 | Innenbeleuchtung Fußraum Beifahrer vorne | 1 |
| 0x5E04 | Innenbeleuchtung Fußraum Beifahrer hinten | 1 |
| 0x5E05 | Innenbeleuchtung Konturlinie Fahrertür vorne | 1 |
| 0x5E06 | Innenbeleuchtung Dekor indirekt Fahrertür vorne | 1 |
| 0x5E07 | Innenbeleuchtung Türöffner Fahrertür vorne | 1 |
| 0x5E08 | Innenbeleuchtung Fahrertür vorne Kartentasche | 1 |
| 0x5E09 | Innenbeleuchtung Konturlinie Fahrertür hinten | 1 |
| 0x5E0A | Innenbeleuchtung Dekor indirekt Fahrertür hinten | 1 |
| 0x5E0B | Innenbeleuchtung Fahrertür hinten Kartentasche | 1 |
| 0x5E0C | Innenbeleuchtung Konturlinie Beifahrertür vorne | 1 |
| 0x5E0D | Innenbeleuchtung Dekor indirekt Beifahrertür vorne | 1 |
| 0x5E0E | Innenbeleuchtung Türöffner Beifahrertür vorne | 1 |
| 0x5E0F | Innenbeleuchtung Beifahrertür vorne Kartentasche | 1 |
| 0x5E10 | Innenbeleuchtung Konturlinie Beifahrertür hinten | 1 |
| 0x5E11 | Innenbeleuchtung Dekor indirekt Beifahrertür hinten | 1 |
| 0x5E12 | Innenbeleuchtung Beifahrertür hinten Kartentasche | 1 |
| 0x5E13 | Innenbeleuchtung Konturlinie I-Tafel Fahrer | 1 |
| 0x5E14 | Innenbeleuchtung Dekor indirekt I-Tafel Fahrer | 1 |
| 0x5E15 | Innenbeleuchtung Konturlinie I-Tafel Mitte | 1 |
| 0x5E16 | Innenbeleuchtung Dekor indirekt I-Tafel Mitte | 1 |
| 0x5E17 | Innenbeleuchtung Konturlinie I-Tafel Beifahrer | 1 |
| 0x5E18 | Innenbeleuchtung Dekor indirekt I-Tafel Beifahrer | 1 |
| 0x5E19 | Innenbeleuchtung B-Säule Fahrer | 1 |
| 0x5E1A | Innenbeleuchtung B-Säule Beifahrer | 1 |
| 0x5E1B | Innenbeleuchtung Lehne Fahrersitz | 1 |
| 0x5E1C | Innenbeleuchtung Lehne Beifahrersitz | 1 |
| 0x5E1D | Innenbeleuchtung Centerstack Ablagefach | 1 |
| 0x5E1E | Innenbeleuchtung Mittelkonsole Ablagefach | 1 |
| 0x5E1F | Innenbeleuchtung Gangwahlschalter links | 1 |
| 0x5E20 | Innenbeleuchtung Gangwahlschalter rechts | 1 |
| 0x5E21 | Innenbeleuchtung Türöffner Fahrertür hinten | 1 |
| 0x5E22 | Innenbeleuchtung Türöffner Beifahrertür hinten | 1 |
| 0x5E23 | Innenbeleuchtung Fußraum Fahrer 3SR | 1 |
| 0x5E24 | Innenbeleuchtung Fußraum Beifahrer 3SR | 1 |
| 0x5E25 | Innenbeleuchtung Kartentasche Fahrertür 3SR | 1 |
| 0x5E26 | Innenbeleuchtung Kartentasche Beifahrertür 3SR | 1 |
| 0x5E27 | Innenbeleuchtung Konturlinie Fahrertür 3SR | 1 |
| 0x5E28 | Innenbeleuchtung Konturlinie Beifahrertür 3SR | 1 |
| 0x5E29 | Innenbeleuchtung Dekor indirekt Fahrertür 3SR | 1 |
| 0x5E2A | Innenbeleuchtung Dekor indirekt Beifahrertür 3SR | 1 |
| 0x5E2B | Innenbeleuchtung Konturlinie Mittelkonsole Fahrer vorne | 1 |
| 0x5E2C | Innenbeleuchtung Konturlinie Mittelkonsole Fahrer hinten | 1 |
| 0x5E2D | Innenbeleuchtung Konturlinie Mittelkonsole Beifahrer vorne | 1 |
| 0x5E2E | Innenbeleuchtung Konturlinie Mittelkonsole Beifahrer hinten | 1 |
| 0x5E2F | Innenbeleuchtung Dekor indirekt Mittelkonsole Fahrer vorne | 1 |
| 0x5E30 | Innenbeleuchtung Dekor indirekt Mittelkonsole Fahrer hinten | 1 |
| 0x5E31 | Innenbeleuchtung Dekor indirekt Mittelkonsole Beifahrer vorne | 1 |
| 0x5E32 | Innenbeleuchtung Dekor indirekt Mittelkonsole Beifahrer hinten | 1 |
| 0x5E33 | Innenbeleuchtung Backpanel Fahrersitz 2SR | 1 |
| 0x5E34 | Innenbeleuchtung Backpanel Beifahrersitz 2SR | 1 |
| 0x5E35 | Innenbeleuchtung Panoramadach Glasdeckel Front links vorne | 1 |
| 0x5E36 | Innenbeleuchtung Panoramadach Glasdeckel Front links hinten | 1 |
| 0x5E37 | Innenbeleuchtung Panoramadach Glasdeckel Front rechts vorne | 1 |
| 0x5E38 | Innenbeleuchtung Panoramadach Glasdeckel Front rechts hinten | 1 |
| 0x5E39 | Innenbeleuchtung Panoramadach Glasdeckel Fond links vorne | 1 |
| 0x5E3A | Innenbeleuchtung Panoramadach Glasdeckel Fond links hinten | 1 |
| 0x5E3B | Innenbeleuchtung Panoramadach Glasdeckel Fond rechts vorne | 1 |
| 0x5E3C | Innenbeleuchtung Panoramadach Glasdeckel Fond rechts hinten | 1 |
| 0x5E3D | Innenbeleuchtung Lichtschwert links | 1 |
| 0x5E3E | Innenbeleuchtung Lichtschwert rechts | 1 |
| 0x5E3F | Innenbeleuchtung Dekor hinterleuchtet Fahrertür vorne vorne | 1 |
| 0x5E40 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür vorne hinten | 1 |
| 0x5E41 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür hinten vorne | 1 |
| 0x5E42 | Innenbeleuchtung Dekor hinterleuchtet Fahrertür hinten hinten | 1 |
| 0x5E43 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür vorne vorne | 1 |
| 0x5E44 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür vorne hinten | 1 |
| 0x5E45 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür hinten vorne | 1 |
| 0x5E46 | Innenbeleuchtung Dekor hinterleuchtet Beifahrertür hinten hinten | 1 |
| 0x5E47 | Innenbeleuchtung Dekor hinterleuchtet Mittelkonsole Fahrer vorne | 1 |
| 0x5E48 | Innenbeleuchtung Dekor hinterleuchtet Mittelkonsole Fahrer hinten | 1 |
| 0x5E49 | Innenbeleuchtung Dekor hinterleuchtet Mittelkonsole Beifahrer vorne | 1 |
| 0x5E4A | Innenbeleuchtung Dekor hinterleuchtet Mittelkonsole Beifahrer hinten | 1 |
| 0x5E4B | Innenbeleuchtung Cupholder vorne | 1 |
| 0x5E4C | Innenbeleuchtung Cupholder hinten | 1 |
| 0x5E80 | Stromverteiler hinten | 1 |
| 0x5EA0 | Wireless Charging Ablage | - |
| 0x5EC0 | Thermocupholder | 1 |
| 0x5F00 | Integrierte Fensterheber Elektronik Fahrer | 1 |
| 0x5F10 | Integrierte Fensterheber Elektronik Beifahrer | 1 |
| 0x5F20 | Integrierte Fensterheber Elektronik Fahrer hinten | 1 |
| 0x5F30 | Integrierte Fensterheber Elektronik Beifahrer hinten | 1 |
| 0x5F40 | Schalterblock Sitzmemory Fahrer | 1 |
| 0x5F50 | Schalterblock Sitzmemory Beifahrer | 1 |
| 0x5F60 | Schalterblock Sitzmemory Fahrer hinten | 1 |
| 0x5F70 | Schalterblock Sitzmemory Beifahrer hinten | 1 |
| 0x5F80 | Sonnenrollo Seitenfenster Fahrer | 1 |
| 0x5F90 | Sonnenrollo Seitenfenster Beifahrer | 1 |
| 0x5FA0 | Bedieneinheit Mittelkonsole | 1 |
| 0x5FB0 | WB und SARAH Schalter | 1 |
| 0x5FC0 | ABW-Türschloss Fahrer | 1 |
| 0x5FD0 | ABW-Türschloss Beifahrer | 1 |
| 0x7000 | Abschattungs-Elektronik-Dach | 1 |
| 0x7040 | Frontwischermotor | 1 |
| 0x7100 | NFC Leser Innenraum vorne | 1 |
| 0x7108 | NFC Leser Türgriff Fahrer | 1 |
| 0x7200 | Spurwechselradarsensor vorne rechts | 1 |
| 0x7208 | Spurwechselradarsensor vorne links | 1 |
| 0x7210 | Spurwechselradarsensor hinten rechts (Master) | 1 |
| 0x7218 | Spurwechselradarsensor hinten links | 1 |
| 0x7300 | Tanksensor links | 1 |
| 0x7310 | Tanksensor rechts | 1 |
| 0x7400 | Cargo Steuergeraet | 1 |
| 0x7500 | CID-Klappe | 1 |
| 0x7600 | Handschuhkasten | 1 |
| 0x7620 | Sternenhimmel Steuergerät | 1 |
| 0x7640 | Partition Wall Steuergerät | 1 |
| 0x7680 | Durchreiche Partition Wall | 1 |
| 0x76A0 | Bedienelement Dach | 1 |
| 0x7700 | Booster | 1 |
| 0x7800 | Dualspeicher | 1 |
| 0x7900 | Tablet | - |
| 0x7A00 | Beschleunigungssensor vorne links | 1 |
| 0x7A08 | Beschleunigungssensor vorne rechts | 1 |
| 0x7A10 | Beschleunigungssensor hinten links | 1 |
| 0x7A18 | Beschleunigungssensor hinten rechts | 1 |
| 0x7A20 | Abdeckrollo-Steuergerät | 1 |
| 0x7A28 | Schalterblock Gepäckraum | 1 |
| 0x7A30 | Unteres Heckklappenschloss links | 1 |
| 0x7A38 | Unteres Heckklappenschloss rechts | 1 |
| 0x7B00 | ISC - Inertial Sensor Cluster | 1 |
| 0xFFFF | unbekannter Verbauort | - |

### PARTNRTABELLE

| PART_NR | BMW_NR | KOMMENTAR |
| --- | --- | --- |
| -- | -- | unbekannte Teilenummer |

### GROBNAME

| ADR | GROBNAME |
| --- | --- |
| 0x00 | ZGM_JBBF |
| 0x01 | SIM/SGM_MRS |
| 0x02 | SZL |
| 0x03 | SASL |
| 0x04 | SASR |
| 0x05 | STVL/TEFA |
| 0x06 | STVR/TEBF |
| 0x07 | SSFA |
| 0x08 | SSBF |
| 0x09 | SBSL_HIM |
| 0x0A | SBSR_SBA |
| 0x0D | SSH |
| 0x0E | SFZ_SVT |
| 0x0F | QSG |
| 0x12 | DME/DDE |
| 0x13 | DME/DDE |
| 0x14 | CEM |
| 0x15 | LDM |
| 0x16 | AFS |
| 0x17 | EKP |
| 0x18 | EGS |
| 0x19 | VGSG |
| 0x1A | HCP |
| 0x1B | VVT |
| 0x1C | LDM/ICM |
| 0x1D | TFE |
| 0x1E | VVT2 |
| 0x20 | RDC |
| 0x21 | ACC |
| 0x22 | ALC |
| 0x23 | ARS/SVT |
| 0x24 | CVM/CTM |
| 0x26 | RSE |
| 0x27 | PGS |
| 0x28 | APM |
| 0x29 | DSC |
| 0x2A | EMF |
| 0x30 | EPS |
| 0x31 | MMC |
| 0x32 | MMIFGW |
| 0x34 | MMIF |
| 0x35 | SVS |
| 0x36 | TEL/MULF |
| 0x37 | AMP |
| 0x38 | EHC |
| 0x39 | EDC |
| 0x3A | KHI |
| 0x3B | NAV |
| 0x3C | CDC |
| 0x3D | HUD |
| 0x3E | ADP |
| 0x3F | ASK |
| 0x40 | CAS |
| 0x41 | DWA |
| 0x42 | CIM |
| 0x43 | POW |
| 0x44 | SHD/MDS |
| 0x45 | RLS |
| 0x46 | WIM |
| 0x47 | ANTTU |
| 0x48 | VSW |
| 0x49 | SECU1 |
| 0x4A | SECU2 |
| 0x4B | VIDEO |
| 0x4C | TMFT_USB/IPOD |
| 0x4D | TMBT |
| 0x4E | TMFTH |
| 0x4F | TMBTH_EKK |
| 0x50 | SINE |
| 0x53 | IBOC |
| 0x54 | RADIO |
| 0x55 | ISPB |
| 0x56 | FZD |
| 0x57 | NVE |
| 0x58 | ADPF |
| 0x59 | ALBV_FA |
| 0x5A | ALBV_BF |
| 0x5B | DAB |
| 0x5C | BEHO |
| 0x5D | TLC/KAFAS |
| 0x5E | GWS |
| 0x5F | FLA |
| 0x60 | KOMBI |
| 0x61 | FBI |
| 0x62 | MOSTGW |
| 0x63 | MMI_MASK/CCC |
| 0x64 | PDC |
| 0x65 | BZM/SZM |
| 0x66 | BZMF |
| 0x67 | ZBE |
| 0x68 | ZBEF |
| 0x69 | FAH |
| 0x6A | BFH |
| 0x6B | HKL |
| 0x6C | KFS |
| 0x6D | FAS |
| 0x6E | BFS |
| 0x70 | LM |
| 0x71 | AHM |
| 0x72 | KBM_FRM |
| 0x73 | CID |
| 0x74 | CIDF |
| 0x75 | CIDF2 |
| 0x77 | RFK |
| 0x78 | KLIMA |
| 0x79 | KLIMA2 |
| 0x7A | SHZH |
| 0x7D | FDM_VS |
| 0x8B | NVC |
| 0x90 | VIRTSG90 |
| 0x91 | VIRTSG91 |
| 0x92 | VIRTSG92 |
| 0x93 | VIRTSG93 |
| 0x95 | DSM |
| 0x96 | MCPA |
| 0x97 | MCPB |
| 0x98 | VIRTSG98 |
| 0x99 | EMPI |
| 0x9A | BPCM |
| 0x9B | VIRTSG9B |
| 0xA0 | CCC |
| 0xA1 | SBSL |
| 0xA2 | SBSR |
| 0xA4 | SIM |
| 0xA5 | EDC_VL |
| 0xA6 | EDC_VR |
| 0xA7 | EDC_HL |
| 0xA8 | EDC_HR |
| 0xA9 | CDCDSP |
| 0xAB | MMCDSP |
| 0xAD | STVL |
| 0xAE | STVR |
| 0xXY | ???? |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### I_STUFE_RR1

| NR | I_STUFE_TEXT |
| --- | --- |
| 0x00 | 0 |
| 0x01 | 1.10 |
| 0x05 | 1.11 |
| 0x02 | 2.00 |
| 0x06 | 2.01 |
| 0x07 | 2.03 |
| 0x03 | 2.10 |
| 0x08 | 2.11 |
| 0x04 | 2.20 |
| 0x0C | 2.21 |
| 0x09 | 2.30 |
| 0x0A | 2.31 |
| 0x0F | 2.32 |
| 0x0B | 2.40 |
| 0x0C | 2.41 |
| 0x10 | 2.42 |
| 0x0D | 2.45 |
| 0x11 | 2.46 |
| 0x13 | 2.47 |
| 0x16 | 2.48 |
| 0x18 | 2.48A |
| 0x1A | 2.48B |
| 0x1C | 2.48C |
| 0x1E | 2.48D |
| 0x22 | 2.48E |
| 0x25 | 2.48F |
| 0x27 | 2.48G |
| 0x0E | 2.50 |
| 0x14 | 2.51 |
| 0x17 | 2.55 |
| 0x12 | RR01-04-03-500 |
| 0x1D | RR01-04-03-505 |
| 0x20 | RR01-04-03-510 |
| 0x21 | RR01-04-03-515 |
| 0x23 | RR01-04-03-520 |
| 0x26 | RR01-04-03-525 |
| 0x28 | RR01-04-03-530 |
| 0x2A | RR01-04-03-535 |
| 0x19 | RR01-04-08-500 |
| 0x15 | RR01-04-09-500 |
| 0x24 | RR01-04-09-505 |
| 0x1B | RR01-04-09-501 |
| 0x29 | RR01-04-09-510 |
| 0x2B | RR01-04-09-515 |
| 0x1F | RR01-05-03-500 |
| 0x2D | RR01-05-03-510 |
| 0x2E | RR01-05-03-515 |
| 0x2C | RR01-05-03-800 |
| 0x2F | RR01-05-03-810 |
| 0x30 | RR01-05-06-500 |
| 0x31 | RR01-05-06-800 |
| 0x32 | RR01-05-09-500 |
| 0x33 | RR01-05-09-800 |
| 0x34 | RR01-06-03-500 |
| 0x42 | RR01-06-03-510 |
| 0x45 | RR01-06-03-520 |
| 0x35 | RR01-06-03-800 |
| 0x43 | RR01-06-03-810 |
| 0x44 | RR01-06-09-410 |
| 0x46 | RR01-06-09-450 |
| 0x36 | RR01-06-09-500 |
| 0x37 | RR01-06-09-800 |
| 0x38 | RR01-07-03-500 |
| 0x39 | RR01-07-03-800 |
| 0x3A | RR01-07-06-300 |
| 0x3B | RR01-07-06-350 |
| 0x3C | RR01-07-06-450 |
| 0x3D | RR01-07-06-500 |
| 0x47 | RR01-07-06-510 |
| 0x3E | RR01-07-09-500 |
| 0x48 | RR01-07-09-510 |
| 0x4C | RR01-07-09-520 |
| 0x4D | RR01-07-09-530 |
| 0x3F | RR01-07-09-800 |
| 0x40 | RR01-08-03-500 |
| 0x41 | RR01-08-03-800 |
| 0x49 | RR01-08-06-500 |
| 0x4A | RR01-09-01-500 |
| 0x4B | RR01-09-06-500 |
| 0x4F | RR01-09-06-510 |
| 0x4E | RR01-10-06-500 |
| 0x50 | RR01-11-06-500 |
| 0x5E | RR01-11-06-501 |
| 0x57 | RR01-12-06-300 |
| 0x58 | RR01-12-06-350 |
| 0x59 | RR01-12-06-370 |
| 0x5D | RR01-12-06-390 |
| 0x5A | RR01-12-06-400 |
| 0x5B | RR01-12-06-450 |
| 0x5F | RR01-12-06-490 |
| 0x5C | RR01-12-06-500 |
| 0x60 | RR01-12-06-510 |
| 0x61 | RR01-12-06-520 |
| 0x63 | RR01-12-06-525 |
| 0x62 | RR01-12-06-530 |
| 0x64 | RR01-13-03-500 |
| 0x68 | RR01-13-03-502 |
| 0x65 | RR01-13-07-500 |
| 0x66 | RR01-14-03-500 |
| 0x67 | RR01-14-07-500 |
| 0x69 | RR01-15-03-500 |
| 0x6A | RR01-15-07-420 |
| 0x6B | RR01-15-07-500 |
| 0x70 | RR01-15-07-501 |
| 0x6C | RR01-16-03-500 |
| 0x6D | RR01-16-07-420 |
| 0x6E | RR01-16-07-500 |
| 0x74 | RR01-16-07-505 |
| 0x75 | RR01-16-07-507 |
| 0x6F | RR01-17-03-500 |
| 0x71 | RR01-17-07-500 |
| 0x72 | RR01-18-03-500 |
| 0x76 | RR01-18-03-510 |
| 0x73 | RR01-18-07-500 |
| 0xXY | unbekannte I-Stufe |
