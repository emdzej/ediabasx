# I510_cbd.prg

## General

|  |  |
| --- | --- |
| File | I510_cbd.prg |
| Type | PRG |
| Jobs | 19 |
| Tables | 13 |
| Origin | BMW Abteilung Name |
| Revision | 0.4 |
| Author | WABCO PF-6 Dittrich, Piepho |
| ECU Comment | Nur Fuer Entwicklung |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | 1-Achs-Luftfederung E65 |  |  |
| ORIGIN | string | intern |  |  |
| REVISION | string | 0.04 |  |  |
| AUTHOR | string | WABCO PF-6 Dittrich, Piepho |  |  |
| COMMENT | string | Codierdaten I4-E65 29.10.99 |  |  |
| PACKAGE | string | 0.10 |  |  |
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
| SG_ANTWORT | string | "ja"   -> SG soll antworten "nein" -> SG soll nicht antworten table DigitalArgument TEXT Default:  SG soll antworten |
| FUNKTIONAL | string | "ja"   -> Funktionale Adresse 0xEF wird benutzt nur in Verbindung mit SG_ANTWORT="nein" "nein" -> SG Adresse wird benutzt table DigitalArgument TEXT Default:  SG Adresse wird benutzt |

### DIAGNOSE_AUFRECHT

Diagnosemode des SG aufrecht erhalten KWP2000: $3E TesterPresent Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| SG_ANTWORT | string | "ja"   -> SG soll antworten "nein" -> SG soll nicht antworten table DigitalArgument TEXT Default:  SG soll antworten |
| FUNKTIONAL | string | "ja"   -> Funktionale Adresse 0xEF wird benutzt nur in Verbindung mit SG_ANTWORT="nein" "nein" -> SG Adresse wird benutzt table DigitalArgument TEXT Default:  SG Adresse wird benutzt |

### REFERENZ_FELDER_LESEN

Auslesen der Hardware Referenz KWP2000: $22   ReadDataByCommonIdentifier $3000 HardwareReferenz Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| REFERENZ | int | ?Erklaerung? Bereich: ?min? bis ?max? ?Einheit? |

### CBD_SCHREIBEN

Auslesen des Backups der Programm Referenz KWP2000: $2E   WriteDataByCommonIdentifier $3000 CBD Modus  : Default

_No arguments._

### FZ_ABGLEICH_SCHREIBEN

Auslesen des Backups der Programm Referenz KWP2000: $2E   WriteDataByCommonIdentifier $3001 FZ_ABGLEICH Modus  : Default

_No arguments._

### WABCO_ABGLEICH_SCHREIBEN

Auslesen des Backups der Programm Referenz KWP2000: $2E   WriteDataByCommonIdentifier $3002 WABCO_ABGLEICH Modus  : Default

_No arguments._

### BRIF_SCHREIBEN

Auslesen des Backups der Programm Referenz KWP2000: $2E   WriteDataByCommonIdentifier $3010 BRIF Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| HSW | int | ?Erklaerung? Bereich: ?min? bis ?max? ?Einheit? |
| MSW | int | ?Erklaerung? Bereich: ?min? bis ?max? ?Einheit? |
| LSW | int | ?Erklaerung? Bereich: ?min? bis ?max? ?Einheit? |

### ZIF_SCHREIBEN

Auslesen des Backups der Programm Referenz KWP2000: $2E   WriteDataByCommonIdentifier $3011 ZIF Modus  : Default

| Name | Type | Description |
| --- | --- | --- |
| E_INDEX | int | ?Erklaerung? Bereich: ?min? bis ?max? ?Einheit? |

### PROG_STATUS_SCHREIBEN

Auslesen des Backups der Programm Referenz KWP2000: $2E   WriteDataByCommonIdentifier $3013 Status Modus  : Default

_No arguments._

### DIF_SCHREIBEN

Auslesen des Backups der Programm Referenz KWP2000: $2E   WriteDataByCommonIdentifier $3012 DIF Modus  : Default

_No arguments._

### AIF_DEFAULT_SCHREIBEN

Auslesen des Backups der Programm Referenz KWP2000: $2E   WriteDataByCommonIdentifier $3014 AIF Modus  : Default

_No arguments._

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
| ?10? | ERROR_F_CODE |
| ?11? | ERROR_TABLE |
| ?12? | ERROR_INTERPRETATION |
| ?13? | ERROR_F_POS |
| ?20? | ERROR_SEGMENT |
| ?21? | ERROR_ADDRESS |
| ?22? | ERROR_NUMBER |
| ?30? | ERROR_DATA |
| ?40? | ERROR_MODE |
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
| ?8A? | ERROR_LARGE_UIF_FOUND |
| ?8B? | ERROR_SMALL_UIF_FOUND |
| ?8C? | ERROR_NO_FREE_UIF |
| ?8D? | ERROR_MAX_UIF |
| ?8E? | ERROR_LEVEL |
| ?8F? | ERROR_KEY |
| ?90? | ERROR_AUTHENTICATION |
| ?91? | ERROR_FLASH_SIGNATURE_METHOD |
| ?F0? | ERROR_ARGUMENT |
| 0xXY | ERROR_ECU_UNKNOWN_NEGATIVE_RESPONSE |

### LIEFERANTEN

| LIEF_NR | LIEF_TEXT |
| --- | --- |
| 0x01 | Reinshagen / Delphi |
| 0x02 | Kostal |
| 0x03 | Hella |
| 0x04 | Siemens |
| 0x05 | Eaton |
| 0x06 | UTA |
| 0x07 | Helbako |
| 0x08 | Bosch |
| 0x09 | Loewe |
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
| 0x28 | BERU (DODUCO) |
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
| yes | 1 |
| no | 0 |
| on | 1 |
| off | 0 |
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

### SPEICHERSEGMENT

| SEG_BYTE | SEG_NAME | SEG_TEXT |
| --- | --- | --- |
| 0x00 | LAR | linearAdressRange |
| 0x01 | ROMI | ROM / EPROM, internal |
| 0x02 | ROMX | ROM / EPROM, external |
| 0x03 | NVRAM | NV-RAM (characteristic zones, DTC memory |
| 0x04 | RAMIS | RAM, internal (short MOV) |
| 0x05 | RAMXX | RAM, external (x data MOV) |
| 0x06 | FLASH | Flash EPROM |
| 0x07 | UIFM | User Info Field Memory |
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
| 0x05 | nicht benutzt |
| 0x06 | nicht benutzt |
| 0x07 | Programmprogrammiersitzung aktiv |
| 0x08 | Datenprogrammiersitzung aktiv |
| 0x09 | Datenreferenzeintrag fehlerhaft |
| 0x0A | Programmreferenzeintrag fehlerhaft |
| 0x0B | Referenzierungsfehler Hardware -> Programm |
| 0x0C | Programm nicht vollstaendig |
| 0x0D | Datenreferenzeintrag fehlerhaft |
| 0x0E | Referenzierungsfehler Programm -> Daten |
| 0x0F | Daten nicht vollstaendig |
| 0x10 | Reserviert fuer BMW |
| 0x80 | Reserviert fuer Zulieferer |
| 0xXY | unbekannter Programmierstatus |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0x08 | Fehler nun bekannt |
| 0xXY | ERROR_UNKNOWN |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_HFK | ja |
| F_LZ | ja |
| F_UWB_ERW | nein |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x5F8E | Sensor hinten links |
| 0x5F8F | Sensor hinten rechts |
| 0x5F90 | ECU Spannungsversorgung |
| 0x5F92 | Sensorspannungsversorgung hinten links |
| 0x5F93 | Sensorspannungsversorgung hinten rechts |
| 0x5F94 | Magnetventil hinten links |
| 0x5F95 | Magnetventil hinten rechts |
| 0x5F96 | Ablass Ventil |
| 0x5F97 | Kompressor-Relais |
| 0x5F98 | Regelzeit einseitig hinten links |
| 0x5F99 | Regelzeit einseitig hinten rechts |
| 0x5F9A | Regelzeit heben |
| 0x5F9B | Regelzeit senken |
| 0x5F9C | Sensoraktivitaet hinten links |
| 0x5F9D | Sensoraktivitaet hinten rechts |
| 0x5FB0 | Steuergeraet interner Fehler |
| 0xD004 | K-CAN Signal KL. 15 |
| 0xD005 | K-CAN Signal Klappe |
| 0xD006 | K-CAN Hoehenstand von LWR |
| 0xD007 | K-CAN Signal Motor Status |
| 0xD008 | K-CAN Signal KL. VA |
| 0xD009 | K-CAN Signal Lenkwinkel |
| 0xD00A | K-CAN Signal Geschwindigkeit |
| 0xD00B | K-CAN Signal Querbeschleunigung |
| 0xD00C | K-CAN Signal Wegstrecke_KM |
| 0xD00D | K-CAN Signal Relativzeit |
| 0xFFFF | unbekannter Fehlerort |

### DIGITALID

| LID  | NAME    | READ/WRITE | BESCHREIBUNG |
| --- | --- | --- | --- |
| 0x11 | MV_RL | RW | Balgventil hinten links |
| 0x12 | MV_RR | RW | Balgventil hinten rechts |
| 0x13 | MV_EX | RW | Ablassventil |
| 0x14 | COMP | RW | Kompressoransteuerung |
| 0x15 | U_RL | RW | Sensorspannungsversorgung hinten links |
| 0x16 | U_RR | RW | Sensorspannungsversorgung hinten rechts |
| 0x17 | INH | RW | Selbsthaltung vom uController |
| 0x32 | CAN_MOT | RW | K-CAN Signal Motor An |
| 0x33 | CAN_KLR | RW | K-CAN Signal Klemme R |
| 0x34 | CAN_KL15 | RW | K-CAN Signal Klemme 15 |
| 0x35 | CAN_DOOR | RW | K-CAN Signal Tuerzustand |

### ANALOGID

| LID | NAME | READ/WRITE | BESCHREIBUNG |
| --- | --- | --- | --- |
| 0x01 | ADC_RL | RW | AD Wandlerwert hinten links |
| 0x02 | ADC_RR | RW | AD Wandlerwert hinten rechts |
| 0x03 | ADC_KL30 | RW | AD Wandlerwert Kl. 30 |
| 0x04 | ADC_U_RL | RW | AD Wandlerwert Sensorversorgung hinten links |
| 0x05 | ADC_U_RR | RW | AD Wandlerwert Sensorversorgung hinten rechts |
| 0x30 | CAN_SPEED | RW | K-CAN Signal Geschwindigkeit |
| 0x31 | CAN_AQUER | RW | K-CAN Signal Querbeschleunigung |

### EEPROMID

| LID | NAME | READ/WRITE | BESCHREIBUNG |
| --- | --- | --- | --- |
| 0x40 | MODE | RW | Betriebsmodus |
| 0x41 | ADJ_RL | RW | Nullabgleich hinten links |
| 0x42 | ADJ_RR | RW | Nullabgleich hinten rechts |
