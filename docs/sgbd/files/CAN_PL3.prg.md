# CAN_PL3.prg

## General

|  |  |
| --- | --- |
| File | CAN_PL3.prg |
| Type | PRG |
| Jobs | 8 |
| Tables | 12 |
| Origin | BMW VP-31 Richard Amann |
| Revision | 0.07 |
| Author | ra Richard Amann |
| ECU Comment | CAN-Busanalyse PL3 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | CAN_PL3 |  |  |
| ORIGIN | string | BMW VP-31 Richard Amann |  |  |
| REVISION | string | 0.07 |  |  |
| AUTHOR | string | ra Richard Amann |  |  |
| COMMENT | string | CAN-Busanalyse PL3 |  |  |
| PACKAGE | string | 1.41 |  |  |
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

Identdaten

_No arguments._

### FS_LESEN

CAN-Fehler mit funktionaler Adressierung auslesen

_No arguments._

### IS_LESEN

CAN-Fehler mit funktionaler Adressierung auslesen

_No arguments._

### BUS_BEWERTEN

CAN-Fehler auslesen und fehlerhaften Bus erkennen

| Name | Type | Description |
| --- | --- | --- |
| ZAHL1 | unsigned int | Gewichtung für die Berechnung für: hat getroffen - Belastung 0 bis 6 (default 4) |
| ZAHL2 | unsigned int | Gewichtung für die Berechnung für: hat nicht getroffen - Entlastung 0 bis 6 (default 2) |
| ZAHL3 | unsigned int | Gewichtung für die Berechnung für: hätte getroffen - Entlastung 0 bis 6 (default 2) |

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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | Kommunikationsfehler |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x3091 | 3091 med17_2/med17_2n/mev17_2/mev17_2n: DME: PT-CAN Kommunikationsfehler |
| 0x3094 | 3094 med17_2/med17_2n/mev17_2/mev17_2n: DME: CAN-Botschaft DSC |
| 0x3095 | 3095 med17_2/med17_2n/mev17_2/mev17_2n: DME: CAN-Botschaft DSC |
| 0x3096 | 3096 med17_2/med17_2n/mev17_2/mev17_2n: DME: CAN-Botschaft DSC fehlt |
| 0x3097 | 3097 med17_2/med17_2n/mev17_2/mev17_2n: DME: CAN-Botschaft EGS |
| 0x3098 | 3098 med17_2/med17_2n/mev17_2/mev17_2n: DME: CAN-Botschaft EGS |
| 0x3099 | 3099 med17_2/med17_2n/mev17_2/mev17_2n: DME: CAN-Botschaft EGS fehlt |
| 0x309D | 309D med17_2/med17_2n/mev17_2/mev17_2n: DME: CAN-Botschaft IHKA fehlt |
| 0x309F | 309F med17_2/med17_2n/mev17_2/mev17_2n: DME: CAN-Botschaft KOMBI |
| 0x30A0 | 30A0 med17_2/med17_2n/mev17_2/mev17_2n: DME: CAN-Botschaft KOMBI |
| 0x30A1 | 30A1 med17_2/med17_2n/mev17_2/mev17_2n: DME: CAN-Botschaft KOMBI fehlt |
| 0x30A4 | 30A4 med17_2/med17_2n/mev17_2/mev17_2n: DME: CAN-Botschaft SZL |
| 0x30A5 | 30A5 med17_2/med17_2n/mev17_2/mev17_2n: DME: CAN-Botschaft SZL |
| 0x30A6 | 30A6 med17_2/med17_2n/mev17_2/mev17_2n: DME: CAN-Botschaft SZL fehlt |
| 0x30A7 | 30A7 med17_2/med17_2n/mev17_2/mev17_2n: DME: Botschaft (Klemmenstatus, 130) |
| 0x30A8 | 30A8 med17_2/med17_2n/mev17_2/mev17_2n: DME: Botschaft (Klemmenstatus, 130) fehlt |
| 0x30A9 | 30A9 med17_2/med17_2n/mev17_2/mev17_2n: DME: Botschaft (Status Crashabschaltung EKP, 135) fehlt |
| 0x30AA | 30AA med17_2/med17_2n/mev17_2/mev17_2n: DME: Botschaft (Bedienung MSA, 195) fehlt |
| 0x30AB | 30AB mev17_2/mev17_2n: DME: Botschaft (Lampenzustand, 21A) fehlt |
| 0x30AC | 30AC med17_2/med17_2n/mev17_2/mev17_2n: DME: Botschaft (Status Anhänger, 2E4) fehlt |
| 0x30AD | 30AD med17_2/med17_2n/mev17_2/mev17_2n: DME: Botschaft (Uhrzeit/ Datum, 2F8) fehlt |
| 0x30AE | 30AE med17_2/med17_2n/mev17_2/mev17_2n: DME: Botschaft (Status ZV Klappen, 2FC) fehlt |
| 0x30AF | 30AF med17_2/med17_2n/mev17_2/mev17_2n: DME: Botschaft (Fahrzeugmodus, 315) |
| 0x30B0 | 30B0 med17_2/mev17_2/med17_2n/mev17_2n: DME: Botschaft (Fahrzeugmodus, 315) fehlt |
| 0x30B2 | 30B2 med17_2/med17_2n/mev17_2/mev17_2n: DME: Botschaft (Status Rückwärtsgang, 3B0) fehlt |
| 0x30B5 | 30B5 med17_2/med17_2n/mev17_2/mev17_2n: DME: Botschaft (Verbraucherstatus, 580) fehlt |
| 0x30B9 | 30B9 med17_2/med17_2n/mev17_2/mev17_2n: DME: Botschaft (Lenkradwinkel, C4) fehlt |
| 0x30BA | 30BA med17_2/mev17_2/med17_2n/mev17_2n: DME: Botschaft (Sportmodus EGS, 1D2) fehlt |
| 0x30C0 | 30C0 med17_2n/mev17_2n: DME: Botschaft (Fahrererkennung, 2F1) |
| 0x30C1 | 30C1 med17_2n/mev17_2n: DME: Botschaft (Fahrererkennung, 2F1) fehlt |
| 0x31BE | 31BE med17_2n/mev17_2n: DME: Botschaft (Klemmenanforderung, 365) fehlt |
| 0x3F0A | 3F0A d60psa0: DDE: CAN Bus C |
| 0x3F0B | 3F0B d60psa0: DDE: CAN Bus C |
| 0x3F0C | 3F0C d60psa0: DDE: CAN Bus C |
| 0x41A6 | 41A6 d60psa0: DDE: Botschaft (CBS_RESET, 0x580) |
| 0x41A8 | 41A8 d60psa0: DDE: Botschaft (CBS_RESET, 0x580) |
| 0x4568 | 4568 d60psa0: DDE: Botschaft (CODIERUNG_PM, 0x395) |
| 0x4578 | 4578 d60psa0: DDE: Botschaft (Steuerung Crashabschaltung EKP, 0x135) |
| 0x4598 | 4598 d60psa0: DDE: Botschaft (Programmierung Stufentempomat, 0x331) |
| 0x48A6 | 48A6 d60psa0: DDE: Botschaft (Fahrzeugmodus, 0x315) |
| 0x48A8 | 48A8 d60psa0: DDE: Botschaft (Fahrzeugmodus, 0x315) |
| 0x48F1 | 48F1 d60psa0: DDE: CAN Bus A |
| 0x4911 | 4911 d60psa0: DDE: CAN Bus B |
| 0x4991 | 4991 d60psa0: DDE: Botschaft (Kombi, 0x1B4) |
| 0x4993 | 4993 d60psa0: DDE: Botschaft (Kombi, 0x1B4) |
| 0x49A3 | 49A3 d60psa0: DDE: Botschaft (Außentemperatur) |
| 0x49F3 | 49F3 d60psa0: DDE: Botschaft (WHEEL_SPEED, 0xCE) |
| 0x4A32 | 4A32 d60psa0: DDE: Multifunktionslenkrad, Signal |
| 0x4A98 | 4A98 d60psa0: DDE: Botschaft (CBS_RESET_2, 0x580) |
| 0x4AA8 | 4AA8 d60psa0: DDE: Botschaft (Status Anhänger, 0x2E4) |
| 0x4AB8 | 4AB8 d60psa0: DDE: Botschaft (Uhrzeit/Datum, 0x2F8) |
| 0x4BE1 | 4BE1 d60psa0: DDE: Botschaft (Getriebedaten, 0xBA) |
| 0x4BE3 | 4BE3 d60psa0: DDE: Botschaft (Getriebedaten) |
| 0x4BE8 | 4BE8 d60psa0: DDE: Botschaft (Getriebedaten 2, 0x1A2) |
| 0x4BF3 | 4BF3 d60psa0: DDE: Botschaft (Klimaanlage) |
| 0x4BF8 | 4BF8 d60psa0: DDE: Botschaft (Reichweite) |
| 0x4C13 | 4C13 d60psa0: DDE: Botschaft (Status DSC) |
| 0x4C16 | 4C16 d60psa0: DDE: Botschaft (Klemme 15) |
| 0x4C18 | 4C18 d60psa0: DDE: Botschaft (Klemme 15) |
| 0x4C21 | 4C21 d60psa0: DDE: Botschaft (Drehmomentenanforderung DSC) |
| 0x4C23 | 4C23 d60psa0: DDE: Botschaft (Drehmomentenanforderung DSC) |
| 0x4C28 | 4C28 d60psa0: DDE: Botschaft (Geschwindigkeitssignal) |
| 0x4C5D | 4C5D d60psa0: DDE: Botschaft (Nachfüllvolumen) |
| 0x4DF1 | 4DF1 d60psa0: DDE: Botschaft (Drehmomentenanforderung Getriebe) |
| 0x4DF3 | 4DF3 d60psa0: DDE: Botschaft (Drehmomentenanforderung Getriebe) |
| 0x93FB | 93FB acsm60: ACSM/MRS: Botschaft (Geschwindigkeit) von DSC fehlt |
| 0x940D | 940D acsm60: ACSM/MRS: Botschaft (Helligkeit LCD) von der Instrumentenkombination fehlt |
| 0xA173 | A173 cccg60: CCC-GW: K-CAN Leitungsfehler |
| 0xA3A9 | A3A9 komb56: KOMBI: Botschaft (Lenkstockschaltersignal, 1EE) |
| 0xA3AA | A3AA komb56: KOMBI: Botschaft (Getriebedaten, 1D2) |
| 0xA3AB | A3AB komb56: KOMBI: Botschaft (Aktive Geschwindigkeitsregelung, 190) |
| 0xA3AC | A3AC komb56: KOMBI: Botschaft (Wegstrecke, 1A6) |
| 0xA3AD | A3AD komb56: KOMBI: Botschaft (Motordaten, 1D0) |
| 0xA3AE | A3AE komb56: KOMBI: Botschaft (Motordrehzahl, 0AA) |
| 0xA3AF | A3AF komb56: KOMBI: Botschaft (Geschwindigkeitssollwert, 200) |
| 0xA3B1 | A3B1 komb56: KOMBI: Botschaft (Blinkerkontrollleuchten-Zyklus, 1F6) |
| 0xA3B2 | A3B2 komb56: KOMBI: Botschaft (Klemmenstatus, 130) |
| 0xA3B4 | A3B4 komb56: KOMBI: Botschaft (Beleuchtungszustand, 21A) |
| 0xA3B6 | A3B6 komb56: KOMBI: Botschaft vom CAS fehlt |
| 0xA3B9 | A3B9 komb56: KOMBI: Botschaft (Dynamische Stabilitätskontrolle, 19E) |
| 0xA3BB | A3BB komb56: KOMBI: Botschaft (Türenstatus, 2FC) |
| 0xA3BD | A3BD komb56: KOMBI: Botschaft (JBE Junction Box, 0C0) |
| 0xA3BE | A3BE komb56: KOMBI: Botschaft (Car Access System, 4C0) |
| 0xA3C0 | A3C0 komb56: KOMBI: Botschaft (Anhängermodul, 4F1) |
| 0xA3C1 | A3C1 komb56: KOMBI: Botschaft (FRM Fußraummodul, 4F0) |
| 0xA3C3 | A3C3 komb56: KOMBI: Reifen Druck Control (RDC) Kommunikationsstörung |
| 0xA549 | A549 komb56: KOMBI: Botschaft (Fahrzeugmodus, 315) fehlt |
| 0xA54A | A54A komb56: KOMBI: Botschaft (Car Access System, 394) |
| 0xA54B | A54B komb56: KOMBI: Botschaft (Electrical Power Steering, 1FB) |
| 0xA54C | A54C komb56: KOMBI: Botschaft (Rohdaten Füllstand Tank, 349) |
| 0xA550 | A550 komb56: KOMBI: Botschaft (Geschwindigkeit, 1A0) |
| 0xA551 | A551 komb56: KOMBI: Botschaft (Kontakt Handbremse, 34F) |
| 0xA554 | A554 komb56: KOMBI: Botschaft (Telefon, C1H) |
| 0xA555 | A555 komb56: KOMBI: Botschaft (Sitzbelegung Gurtkontakte, 2FA) |
| 0xA560 | A560 komb56: KOMBI: Botschaft (Anzeige Schalthinweis) fehlt |
| 0xA562 | A562 komb56: KOMBI: Botschaft (Motor-Start-Stopp-Automatik) fehlt |
| 0xA565 | A565 komb56: KOMBI: Botschaft (Motordaten) fehlt |
| 0xA567 | A567 komb56: KOMBI: Botschaft (Lenkstockschalter) fehlt |
| 0xA568 | A568 komb56: KOMBI: Botschaft (Status Cabrioverdeck) fehlt |
| 0xA869 | A869 speg56: JBE: Botschaft K-CAN (KLIMA - Frontscheibenheizung) ungültig |
| 0xA870 | A870 speg56: JBE: Botschaft K-CAN (KLIMA - Frontscheibenheizung) fehlt |
| 0xC904 | C904 speg56: JBE: K-CAN Leitungsfehler |
| 0xC905 | C905 speg56: JBE: K-CAN Leitungsfehler |
| 0xC907 | C907 speg56: JBE: K-CAN Kommunikationsfehler |
| 0xC908 | C908 speg56: JBE: K-CAN Leitungsfehler |
| 0xC90B | C90B speg56: JBE: PT-CAN Kommunikationsfehler |
| 0xC910 | C910 speg56: JBE: Botschaft PT-CAN (DME / DDE) fehlt |
| 0xC911 | C911 speg56: JBE: Botschaft PT-CAN (DME / DDE) ungültig |
| 0xC912 | C912 speg56: JBE: Botschaft K-CAN (KLIMA - Heckscheibenheizung) ungültig |
| 0xC914 | C914 speg56: JBE: Botschaft PT-CAN (SZL) fehlt |
| 0xC918 | C918 speg56: JBE: Botschaft K-CAN (KLIMA - Sitzheizung FA) ungültig |
| 0xC91A | C91A speg56: JBE: Botschaft K-CAN (KLIMA - Sitzheizung BF) ungültig |
| 0xC91E | C91E speg56: JBE: Botschaft K-CAN (Klemmenstatus, 130) fehlt |
| 0xC91F | C91F speg56: JBE: Botschaft K-CAN (KOMBI - LCD) fehlt |
| 0xC920 | C920 speg56: JBE: Botschaft K-CAN (KOMBI - LCD) ungültig |
| 0xC944 | C944 acsm60: ACSM/MRS: K-CAN Leitungsfehler |
| 0xC987 | C987 szl_56: SZL: Bus Kommunikationsfehler (PT-CAN) |
| 0xC98B | C98B szl_56: SZL: Bus Kommunikationsfehler (F-CAN) |
| 0xC994 | C994 szl_56: SZL: Botschaft PT-CAN (Klemmenstatus, 130h) fehlt |
| 0xC995 | C995 szl_56: SZL: Signal (15WUP) CAS ungültig |
| 0xCD87 | CD87 med17_2n/mev17_2n: DME: PT-CAN Kommunikationsfehler |
| 0xCF07 | CF07 gsf21a: EGS: CAN keine Kommunikation |
| 0xCF12 | CF12 gsf21a: EGS: Botschaft (Drehmoment 1) von Motorsteuerung: Alive-Signal |
| 0xCF13 | CF13 gsf21a: EGS: Botschaft (Drehmoment 1) von Motorsteuerung: fehlt |
| 0xCF14 | CF14 gsf21a: EGS: Botschaft (Drehmoment 1) von Motorsteuerung: Prüfsumme |
| 0xCF15 | CF15 gsf21a: EGS: Botschaft vom ABS/ASC/DSC: fehlt |
| 0xCF39 | CF39 gsf21a: EGS: Botschaft (Drehmoment 3) von Motorsteuerung: Alive-Signal |
| 0xCF3A | CF3A gsf21a: EGS: Botschaft (Drehmoment 3) von Motorsteuerung: fehlt |
| 0xCF3B | CF3B gsf21a: EGS: Botschaft (Drehmoment 3) von Motorsteuerung: Prüfsumme |
| 0xCF3C | CF3C gsf21a: EGS: Botschaft (Klemmenstatus) vom CAS: Alive-Signal |
| 0xCF3D | CF3D gsf21a: EGS: Botschaft (Klemmenstatus) vom CAS: fehlt |
| 0xCF3E | CF3E gsf21a: EGS: Botschaft (Klemmenstatus) vom CAS: Prüfsumme |
| 0xCF43 | CF43 gsf21a: EGS: Botschaft (Engine 1) von Motorsteuerung: fehlt |
| 0xD104 | D104 rdc_can/rdckwp: RDC: K-CAN Leitungsfehler |
| 0xD107 | D107 rdc_can/rdckwp: RDC: K-CAN Kommunikationsfehler |
| 0xD110 | D110 rdckwp: Botschaft (Klemmen, 0x130) fehlt, Empfänger RDC (K-CAN), Sender CAS (FlexRay) |
| 0xD111 | D111 rdckwp: Botschaft (Aussentemperatur, 0x2CA) fehlt, Empfänger RDC (K-CAN), Sender KOMBI (FlexRay) |
| 0xD112 | D112 rdckwp: Botschaft (Kilometerstand, 0x330) fehlt, Empfänger RDC (K-CAN), Sender KOMBI (FlexRay) |
| 0xD113 | D113 rdckwp: Botschaft (Daten Antriebsstrang, 0x1D0) fehlt, Empfänger RDC (K-CAN), Sender DME/DDE (FlexRay) |
| 0xD114 | D114 rdckwp: Botschaft (Geschwindigkeit, 0x1A0) fehlt, Empfänger RDC (K-CAN), Sender DSC (FlexRay) |
| 0xD13E | D13E rdc_can: RDC: Fehler Botschaft vom Steuergerät |
| 0xD204 | D204 cvm_57: CVM: K-CAN Leitungsfehler |
| 0xD207 | D207 cvm_57: CVM: K-CAN Kommunikationsfehler |
| 0xD214 | D214 cvm_57: CVM: Botschaft (Außentemperatur) fehlt |
| 0xD215 | D215 cvm_57: CVM: Botschaft (Geschwindigkeit) fehlt |
| 0xD216 | D216 cvm_57: CVM: Botschaft (Zentralverrriegelung) fehlt |
| 0xD217 | D217 cvm_57: CVM: Botschaft (Klemmenstatus) fehlt |
| 0xD219 | D219 cvm_57: CVM: Botschaft (Komfortsteuerung FH/SHD) fehlt |
| 0xD2C4 | D2C4 pgs_56: CA: K-CAN Low Leitungsfehler |
| 0xD2C7 | D2C7 pgs_56: CA: K-CAN Kommunikationsfehler |
| 0xD347 | D347 dsc_56: DSC: PT-CAN Kommunikationsfehler |
| 0xD34B | D34B dsc_56: DSC: F-CAN Kommunikationsfehler |
| 0xD355 | D355 dsc_56: DSC: PT-CAN Botschaft fehlt |
| 0xD357 | D357 dsc_56: DSC: F-CAN Botschaft fehlt |
| 0xD358 | D358 dsc_56: DSC: Botschaftsfehler: FRM |
| 0xD359 | D359 dsc_56: DSC: Botschaftsfehler: CCC_GW |
| 0xD35B | D35B dsc_56: DSC: Botschaftsfehler: CAS |
| 0xD35C | D35C dsc_56: DSC: Botschaftsfehler: JBE |
| 0xD35D | D35D dsc_56: DSC: Botschaftsfehler: CAS |
| 0xD35E | D35E dsc_56: DSC: Botschaftsfehler: KOMBI |
| 0xD35F | D35F dsc_56: DSC: Botschaftsfehler: KOMBI |
| 0xD360 | D360 dsc_56: DSC: Botschaftsfehler: KOMBI |
| 0xD362 | D362 dsc_56: DSC: Botschaftsfehler: JBE |
| 0xD363 | D363 dsc_56: DSC: Botschaftsfehler: JBE |
| 0xD364 | D364 dsc_56: DSC: Botschaftsfehler: EGS |
| 0xD365 | D365 dsc_56: DSC: Botschaftsfehler: DME / DDE |
| 0xD366 | D366 dsc_56: DSC: Botschaftsfehler: DME / DDE |
| 0xD367 | D367 dsc_56: DSC: Botschaftsfehler: DME / DDE |
| 0xD36D | D36D dsc_56: DSC: Botschaftsfehler: SZL_LWS |
| 0xD370 | D370 dsc_56: DSC: Botschaftsfehler: KOMBI |
| 0xD507 | D507 eps_56: EPS: PT-CAN Kommunikationsfehler |
| 0xD514 | D514 eps_56: EPS: Botschaftsfehler: Geschwindigkeitssignal |
| 0xD515 | D515 eps_56: EPS: Botschaftsfehler: DME / DDE |
| 0xD516 | D516 eps_56: EPS: Botschaftsfehler: Lenkradwinkel |
| 0xD517 | D517 eps_56: EPS: Botschaftsfehler: Klemmenstatus |
| 0xD518 | D518 eps_56: EPS: Botschaftsfehler: DME / DDE - MSA |
| 0xD519 | D519 eps_56: EPS: Botschaftfehler: Fahrzeugmodus |
| 0xD520 | D520 eps_56: EPS: Botschaftsfehler: Raddrehzahl |
| 0xD6C4 | D6C4 amph56/amphh2: AMP: K-CAN Leitungsfehler |
| 0xD6C7 | D6C7 amph56/amphh2: AMP: K-CAN Kommunikationsfehler |
| 0xD904 | D904 cas/cas_rr: CAS: K-CAN Leitungsfehler |
| 0xD907 | D907 cas/cas_rr: CAS: K-CAN Kommunikationsfehler |
| 0xDA04 | DA04 sd_kwp: SHD: K-CAN Leitungsfehler |
| 0xDA07 | DA07 sd_kwp: SHD: K-CAN Kommunikationsfehler |
| 0xE104 | E104 komb56: KOMBI: K-CAN Low Leitungsfehler |
| 0xE107 | E107 komb56: KOMBI: K-CAN Kommunikationsfehler |
| 0xE184 | E184 cccg60/rad2_gw: CD / M-ASK / CCC / RAD2 / CHAMP -GW: K-CAN Leitungsfehler |
| 0xE187 | E187 cccg60/rad2_gw: CD / M-ASK / CCC / RAD2 / CHAMP -GW: K-CAN Kommunikationsfehler |
| 0xE1C4 | E1C4 rad1: RAD / CIC / CHAMP: K-CAN Leitungsfehler |
| 0xE1C7 | E1C7 rad1: RAD / CIC / CHAMP: K-CAN Kommunikationsfehler |
| 0xE1CE | E1CE rad1: RAD: Botschaft von CAS fehlt |
| 0xE1CF | E1CF rad1: RAD: Botschaft von KOMBI fehlt |
| 0xE1D1 | E1D1 rad1: RAD: Botschaft von DSC fehlt |
| 0xE1D2 | E1D2 rad1: RAD: Botschaft von DME fehlt |
| 0xE204 | E204 pdc_87: PDC: K-CAN Leitungsfehler |
| 0xE207 | E207 pdc_87: PDC: K-CAN Kommunikationsfehler |
| 0xE2C4 | E2C4 zbe_56: MJOY: K-CAN Leitungsfehler |
| 0xE2C7 | E2C7 zbe_56: MJOY: K-CAN Kommunikationsfehler |
| 0xE544 | E544 ahm_e65/ahm_70: AHM: K-CAN Leitungsfehler |
| 0xE545 | E545 ahm_e65: AHM: K-CAN Leitungsfehler |
| 0xE547 | E547 ahm_e65/ahm_70: AHM: K-CAN Kommunikationsfehler |
| 0xE554 | E554 ahm_70: Botschaft (Blinken, 0x1F6): fehlt |
| 0xE555 | E555 ahm_70: Botschaft (Motordaten, 0x1D0): fehlt |
| 0xE556 | E556 ahm_70: Botschaft (Geschwindigkeit K-CAN, 0x1A0): fehlt |
| 0xE557 | E557 ahm_70: Botschaft (Kilometerstand/Reichweite, 0x330): fehlt |
| 0xE558 | E558 ahm_70: Botschaft (Klemmenstatus, 0x130): fehlt |
| 0xE559 | E559 ahm_70: Botschaft (Lampenzustand, 0x21A): fehlt |
| 0xE55A | E55A ahm_70: Botschaft (Nachlaufzeit Stromversorgung, 0x3BE): fehlt |
| 0xE55B | E55B ahm_70: Botschaft (Powermanagement Verbrauchersteuerung, 0x3B3): fehlt |
| 0xE55C | E55C ahm_70: Botschaft (Status DSC K-CAN, 0x19E): fehlt |
| 0xE55D | E55D ahm_70: Botschaft (Status Zentralverriegelung Heckklappe, 0x0F2): fehlt |
| 0xE584 | E584 frm_70: FRM: K-CAN Leitungsfehler |
| 0xE587 | E587 frm_70: FRM: K-CAN Kommunikationsfehler |
| 0xE594 | E594 frm_70: FRM: Botschaft (Lenkwinkel) fehlt |
| 0xE595 | E595 frm_70: FRM: Botschaft vom Anhängermodul fehlt |
| 0xE597 | E597 frm_70: FRM: Botschaft vom Steuergerät DSC fehlt |
| 0xE598 | E598 frm_70: FRM: Botschaft (Fahrlicht) fehlt |
| 0xE599 | E599 frm_70: FRM: 5999 Botschaft (Fahrzeuggeschwindigkeit) fehlt |
| 0xE59A | E59A frm_70: FRM: Botschaft (Gierwinkelgeschwindigkeit) fehlt |
| 0xE59B | E59B frm_70: FRM: Botschaft (Klemmenstatus) fehlt |
| 0xE59C | E59C frm_70: FRM: Botschaft PT-CAN Lenkwinkel fehlt |
| 0xE5C4 | E5C4 cid_90: CID: K-CAN Leitungsfehler |
| 0xE5C7 | E5C7 cid_90: CID: K-CAN Kommunikationsfehler |
| 0xE707 | E707 ihka56/ihks56/ihs_56: K-CAN Kommunikationsfehler |
| 0xE714 | E714 ihka56/ihks56/ihs_56: Botschaft (Klemmenstatus, 130) fehlt |
| 0xE715 | E715 ihka56/ihks56/ihs_56: Botschaft (Außentemperatur, 2CA) fehlt |
| 0xE716 | E716 ihka56/ihks56/ihs_56: Botschaft (Dimmen, 202) fehlt |
| 0xE717 | E717 ihka56/ihks56/ihs_56: Botschaft (Motordaten, 1D0) fehlt |
| 0xE719 | E719 ihka56/ihks56/ihs_56: Botschaft (Kilometerstand/Reichweite, 330) fehlt |
| 0xE71A | E71A ihka56/ihks56: Botschaft (Drehmoment 3, AA) fehlt |
| 0xE71B | E71B ihka56/ihks56/ihs_56: Botschaft (Wärmestrom Motor, 1B6) fehlt |
| 0xE71C | E71C ihka56/ihks56/ihs_56: Botschaft (Geschwindigkeit, 1A0) fehlt |
| 0xE71E | E71E ihka56/ihks56/ihs_56: Botschaft (Status BFS, 22A) fehlt |
| 0xE71F | E71F ihka56/ihks56/ihs_56: Botschaft (Status FAS, 232) fehlt |
| 0xE720 | E720 ihka56/ihks56/ihs_56: Botschaft (Powermanagement Verbrauchersteuerung, 3B3) fehlt |
| 0xE725 | E725 ihka56/ihks56/ihs_56: Botschaft (Fahrgestellnummer, 380) fehlt |
| 0xE726 | E726 ihka56: IHKA: Botschaft (Einheiten, 2F7) fehlt |
| 0xE727 | E727 ihka56/ihks56/ihs_56: Botschaft (LCD-Leuchtdichte, 2C0) fehlt |
| 0xE728 | E728 ihka56/ihks56/ihs_56: Botschaft (Relativzeit, 328) fehlt |
| 0xE72B | E72B ihka56/ihks56/ihs_56: Botschaft (Position EFH Beifahrertür) fehlt |
| 0xE72C | E72C ihka56/ihks56/ihs_56: Botschaft (Position EFH Fahrertür) fehlt |
| 0xE72D | E72D ihka56: IHKA: Botschaft (Position SHD) fehlt |
| 0xE72E | E72E ihka56/ihks56/ihs_56: Botschaft (Powermanagement Batteriespannung) fehlt |
| 0xE72F | E72F ihka56: IHKA: Botschaft (Status Fahrlicht) fehlt |
| 0xE730 | E730 ihka56/ihks56/ihs_56: Botschaft (Status Heckscheibenheizung) fehlt |
| 0xE731 | E731 ihka56/ihks56/ihs_56: Botschaft (Status Frontscheibenheizung) fehlt |
| 0xE732 | E732 ihka56/ihks56/ihs_56: Botschaft (Steuerung EFH / SHD) fehlt |
| 0xE733 | E733 ihka56/ihks56/ihs_56: Botschaft (Fahrzeugtyp) fehlt |
| 0xE734 | E734 ihka56: IHKA: Botschaft (Status AUC) fehlt |
| 0xE735 | E735 ihka56: IHKA: Botschaft (RLS-Wischergeschwindigkeit) fehlt |
| 0xE736 | E736 ihka56/ihks56: Botschaft (Status Ventil Klimakompressor) fehlt |
| 0xE737 | E737 ihka56: IHKA: Botschaft (Nachlaufzeit Stromversorgung) fehlt |
| 0xE738 | E738 ihka56/ihks56: Botschaft (Bedienung Wischertaster) fehlt |
| 0xE739 | E739 ihka56/ihks56/ihs_56: Botschaft (Status MSA) fehlt |
| 0xE73A | E73A ihka56/ihks56/ihs_56: Botschaft (Status Verdeck Cabrio) fehlt |
| 0xE73B | E73B ihka56/ihks56/ihs_56: Botschaft (Position Fensterheber Beifahrerseite hinten) fehlt |
| 0xE73C | E73C ihka56/ihks56/ihs_56: Botschaft (Position Fensterheber Fahrerseite hinten) fehlt |

### FCMATRIX

| NUMMER | ORT | ADR | STGR | VONSTGR | NICHTORT | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 24 | 2 |  |  |  | 0xEA | 0xE9 | 0xE7 | 0x71 | 0x37 | 0x27 | 0x40 | 0x62 | 0x73 | 0x12 | 0x29 | 0x18 | 0x30 | 0x72 | 0x78 | 0x00 | 0x60 | 0x67 | 0x01 | 0x64 | 0x44 | 0x02 | 0x20 | 0x24 |
| 1 | 0x3091 | 0x12 | DME | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 2 | 0x3094 | 0x12 | DME | DSC | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 3 | 0x3095 | 0x12 | DME | DSC | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 4 | 0x3096 | 0x12 | DME | DSC | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 5 | 0x3097 | 0x12 | DME | EGS | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 6 | 0x3098 | 0x12 | DME | EGS | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 7 | 0x3099 | 0x12 | DME | EGS | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 8 | 0x309D | 0x12 | DME | IHKA/IHKS/IHS | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 9 | 0x309F | 0x12 | DME | KOMBI | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 10 | 0x30A0 | 0x12 | DME | KOMBI | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 11 | 0x30A1 | 0x12 | DME | KOMBI | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 12 | 0x30A4 | 0x12 | DME | SZL | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 |
| 13 | 0x30A5 | 0x12 | DME | SZL | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 |
| 14 | 0x30A6 | 0x12 | DME | SZL | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 |
| 15 | 0x30A7 | 0x12 | DME | CAS | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 16 | 0x30A8 | 0x12 | DME | CAS | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 17 | 0x30A9 | 0x12 | DME | MRS | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 |
| 18 | 0x30AA | 0x12 | DME | JBE | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 19 | 0x30AB | 0x12 | DME | FRM | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | 20 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 20 | 0x30AC | 0x12 | DME | AHM | 0x0000 | 20 | 20 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 21 | 0x30AD | 0x12 | DME | KOMBI | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 22 | 0x30AE | 0x12 | DME | CAS | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 23 | 0x30AF | 0x12 | DME | JBE | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 24 | 0x30B0 | 0x12 | DME | JBE | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 25 | 0x30B2 | 0x12 | DME | FRM | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | 20 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 26 | 0x30B5 | 0x12 | DME | JBE | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 27 | 0x30B9 | 0x12 | DME | SZL | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 |
| 28 | 0x30BA | 0x12 | DME | EGS | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 29 | 0x30C0 | 0x12 | DME | MRS | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 |
| 30 | 0x30C1 | 0x12 | DME | MRS | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 |
| 31 | 0x31BE | 0x12 | DME | CAS | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 32 | 0x3F0A | 0x12 | DDE | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 33 | 0x3F0B | 0x12 | DDE | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 34 | 0x3F0C | 0x12 | DDE | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 35 | 0x41A6 | 0x12 | DDE | KOMBI | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 36 | 0x41A8 | 0x12 | DDE | KOMBI | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 37 | 0x4568 | 0x12 | DDE | CAS | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 38 | 0x4578 | 0x12 | DDE | MRS | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 |
| 39 | 0x4598 | 0x29 | DDE | CCC/RAD2/RAD1 | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 40 | 0x48A6 | 0x12 | DDE | JBE | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 41 | 0x48A8 | 0x12 | DDE | JBE | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 42 | 0x48F1 | 0x12 | DDE | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 43 | 0x4911 | 0x12 | DDE | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 44 | 0x4991 | 0x12 | DDE | KOMBI | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 45 | 0x4993 | 0x12 | DDE | KOMBI | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 46 | 0x49A3 | 0x12 | DDE | KOMBI | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 47 | 0x49F3 | 0x12 | DDE | DSC | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 48 | 0x4A32 | 0x12 | DDE | SZL | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 |
| 49 | 0x4A98 | 0x12 | DDE | KOMBI | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 50 | 0x4AA8 | 0x12 | DDE | AHM | 0x0000 | 20 | 20 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 51 | 0x4AB8 | 0x12 | DDE | KOMBI | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 52 | 0x4BE1 | 0x12 | DDE | EGS | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 53 | 0x4BE3 | 0x12 | DDE | EGS | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 54 | 0x4BE8 | 0x12 | DDE | EGS | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 55 | 0x4BF3 | 0x12 | DDE | IHKA/IHKS/IHS | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 56 | 0x4BF8 | 0x12 | DDE | KOMBI | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 57 | 0x4C13 | 0x12 | DDE | DSC | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 58 | 0x4C16 | 0x12 | DDE | CAS | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 59 | 0x4C18 | 0x12 | DDE | CAS | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 60 | 0x4C21 | 0x12 | DDE | DSC | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 61 | 0x4C23 | 0x12 | DDE | DSC | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 62 | 0x4C28 | 0x12 | DDE | DSC | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 63 | 0x4C5D | 0x12 | DDE | KOMBI | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 64 | 0x4DF1 | 0x12 | DDE | EGS | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 65 | 0x4DF3 | 0x12 | DDE | EGS | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 66 | 0x93FB | 0x01 | MRS | DSC | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 |
| 67 | 0x940D | 0x01 | MRS | KOMBI | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | 33 | -48 | -48 | -48 | -48 | -48 |
| 68 | 0xA173 | 0x62 | CCC/RAD2/RAD1 | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 69 | 0xA3A9 | 0x60 | KOMBI | SZL | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | 20 | -53 | -53 |
| 70 | 0xA3AA | 0x60 | KOMBI | EGS | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 71 | 0xA3AB | 0x60 | KOMBI | DSC | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 72 | 0xA3AC | 0x60 | KOMBI | DSC | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 73 | 0xA3AD | 0x60 | KOMBI | DME | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 74 | 0xA3AE | 0x60 | KOMBI | DME | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 75 | 0xA3AF | 0x60 | KOMBI | DSC | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 76 | 0xA3B1 | 0x60 | KOMBI | FRM | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 77 | 0xA3B2 | 0x60 | KOMBI | CAS | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 78 | 0xA3B4 | 0x60 | KOMBI | FRM | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 79 | 0xA3B6 | 0x60 | KOMBI | CAS | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 80 | 0xA3B9 | 0x60 | KOMBI | DSC | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 81 | 0xA3BB | 0x60 | KOMBI | CAS | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 82 | 0xA3BD | 0x60 | KOMBI | JBE | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 83 | 0xA3BE | 0x60 | KOMBI | CAS | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 84 | 0xA3C0 | 0x60 | KOMBI | AHM | 0x0000 | -48 | 33 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 85 | 0xA3C1 | 0x60 | KOMBI | FRM | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 86 | 0xA3C3 | 0x60 | KOMBI | RDC | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | 33 | -48 |
| 87 | 0xA549 | 0x60 | KOMBI | JBE | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 88 | 0xA54A | 0x60 | KOMBI | CAS | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 89 | 0xA54B | 0x60 | KOMBI | EPS | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 90 | 0xA54C | 0x60 | KOMBI | JBE | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 91 | 0xA550 | 0x60 | KOMBI | DSC | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 92 | 0xA551 | 0x60 | KOMBI | JBE | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 93 | 0xA554 | 0x60 | KOMBI | CCC/RAD2/RAD1 | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 94 | 0xA555 | 0x60 | KOMBI | MRS | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | 33 | -48 | -48 | -48 | -48 | -48 |
| 95 | 0xA560 | 0x60 | KOMBI | DME | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 96 | 0xA562 | 0x60 | KOMBI | DME | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 97 | 0xA565 | 0x60 | KOMBI | DME | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 98 | 0xA567 | 0x60 | KOMBI | SZL | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | 20 | -53 | -53 |
| 99 | 0xA568 | 0x60 | KOMBI | CVM | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | 33 |
| 100 | 0xA869 | 0x00 | JBE | IHKA/IHKS/IHS | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 101 | 0xA870 | 0x00 | JBE | IHKA/IHKS/IHS | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 102 | 0xC904 | 0x00 | JBE | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 103 | 0xC905 | 0x00 | JBE | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 104 | 0xC907 | 0x00 | JBE | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 105 | 0xC908 | 0x00 | JBE | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 106 | 0xC90B | 0x00 | JBE | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 107 | 0xC910 | 0x00 | JBE | DME | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 108 | 0xC911 | 0x00 | JBE | DME | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 109 | 0xC912 | 0x00 | JBE | IHKA/IHKS/IHS | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 110 | 0xC914 | 0x00 | JBE | SZL | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 |
| 111 | 0xC918 | 0x00 | JBE | IHKA/IHKS/IHS | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 112 | 0xC91A | 0x00 | JBE | IHKA/IHKS/IHS | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 113 | 0xC91E | 0x00 | JBE | CAS | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 114 | 0xC91F | 0x00 | JBE | KOMBI | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 115 | 0xC920 | 0x00 | JBE | KOMBI | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 116 | 0xC944 | 0x01 | MRS | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 |
| 117 | 0xC987 | 0x02 | SZL | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 |
| 118 | 0xC98B | 0x02 | SZL | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 |
| 119 | 0xC994 | 0x02 | SZL | CAS | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 |
| 120 | 0xC995 | 0x02 | SZL | CAS | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 |
| 121 | 0xCD87 | 0x00 | DME | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 122 | 0xCF07 | 0x18 | EGS | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | -500 | -500 |
| 123 | 0xCF12 | 0x18 | EGS | DME | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 124 | 0xCF13 | 0x18 | EGS | DME | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 125 | 0xCF14 | 0x18 | EGS | DME | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 126 | 0xCF15 | 0x18 | EGS | DSC | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 127 | 0xCF39 | 0x18 | EGS | DME | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 128 | 0xCF3A | 0x18 | EGS | DME | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 129 | 0xCF3B | 0x18 | EGS | DME | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 130 | 0xCF3C | 0x18 | EGS | CAS | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 131 | 0xCF3D | 0x18 | EGS | CAS | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 132 | 0xCF3E | 0x18 | EGS | CAS | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 133 | 0xCF43 | 0x18 | EGS | DME | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 134 | 0xD104 | 0x20 | RDC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 |
| 135 | 0xD107 | 0x20 | RDC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 |
| 136 | 0xD110 | 0x20 | RDC | CAS | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 |
| 137 | 0xD111 | 0x20 | RDC | KOMBI | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | 33 | -48 |
| 138 | 0xD112 | 0x20 | RDC | KOMBI | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | 33 | -48 |
| 139 | 0xD113 | 0x20 | RDC | DME | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 |
| 140 | 0xD114 | 0x20 | RDC | DSC | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 |
| 141 | 0xD13E | 0x20 | RDC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 |
| 142 | 0xD204 | 0x24 | CVM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 |
| 143 | 0xD207 | 0x24 | CVM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 |
| 144 | 0xD214 | 0x24 | CVM | KOMBI | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | 33 |
| 145 | 0xD215 | 0x24 | CVM | DSC | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 |
| 146 | 0xD216 | 0x24 | CVM | CAS | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 |
| 147 | 0xD217 | 0x24 | CVM | CAS | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 |
| 148 | 0xD219 | 0x24 | CVM | CAS | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 |
| 149 | 0xD2C4 | 0x27 | CA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 150 | 0xD2C7 | 0x27 | CA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 151 | 0xD347 | 0x29 | DSC | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 152 | 0xD34B | 0x29 | DSC | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 153 | 0xD355 | 0x29 | DSC | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 154 | 0xD357 | 0x29 | DSC | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 155 | 0xD358 | 0x29 | DSC | FRM | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | 20 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 156 | 0xD359 | 0x29 | DSC | CCC/RAD2/RAD1 | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 157 | 0xD35B | 0x29 | DSC | CAS | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 158 | 0xD35C | 0x29 | DSC | JBE | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 159 | 0xD35D | 0x29 | DSC | CAS | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 160 | 0xD35E | 0x29 | DSC | KOMBI | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 161 | 0xD35F | 0x29 | DSC | KOMBI | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 162 | 0xD360 | 0x29 | DSC | KOMBI | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 163 | 0xD362 | 0x29 | DSC | JBE | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 164 | 0xD363 | 0x29 | DSC | JBE | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 165 | 0xD364 | 0x29 | DSC | EGS | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 166 | 0xD365 | 0x29 | DSC | DME | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 167 | 0xD366 | 0x29 | DSC | DME | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 168 | 0xD367 | 0x29 | DSC | DME | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 169 | 0xD36D | 0x29 | DSC | SZL | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 |
| 170 | 0xD370 | 0x29 | DSC | KOMBI | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 171 | 0xD507 | 0x30 | EPS | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 172 | 0xD514 | 0x30 | EPS | DSC | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 173 | 0xD515 | 0x30 | EPS | DME | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 174 | 0xD516 | 0x30 | EPS | SZL | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 |
| 175 | 0xD517 | 0x30 | EPS | CAS | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 176 | 0xD518 | 0x30 | EPS | DME | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 177 | 0xD519 | 0x30 | EPS | JBE | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 178 | 0xD520 | 0x30 | EPS | DSC | 0x0000 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 179 | 0xD6C4 | 0x37 | AMP | leer | 0x0000 | 0 | 50 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 180 | 0xD6C7 | 0x37 | AMP | leer | 0x0000 | 0 | 50 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 181 | 0xD904 | 0x40 | CAS | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 182 | 0xD907 | 0x40 | CAS | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 183 | 0xDA04 | 0x44 | SHD | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 |
| 184 | 0xDA07 | 0x44 | SHD | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 |
| 185 | 0xE104 | 0x60 | KOMBI | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 186 | 0xE107 | 0x60 | KOMBI | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 187 | 0xE184 | 0x62 | CCC/RAD2/RAD1 | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 188 | 0xE187 | 0x62 | CCC/RAD2/RAD1 | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 189 | 0xE1C4 | 0x62 | CCC/RAD2/RAD1 | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 190 | 0xE1C7 | 0x62 | CCC/RAD2/RAD1 | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 191 | 0xE1CE | 0x62 | CCC/RAD2/RAD1 | CAS | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 192 | 0xE1CF | 0x62 | CCC/RAD2/RAD1 | KOMBI | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 193 | 0xE1D1 | 0x62 | CCC/RAD2/RAD1 | DSC | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 194 | 0xE1D2 | 0x62 | CCC/RAD2/RAD1 | DME | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 195 | 0xE204 | 0x64 | PDC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 |
| 196 | 0xE207 | 0x64 | PDC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 |
| 197 | 0xE2C4 | 0x67 | MJOY | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 |
| 198 | 0xE2C7 | 0x67 | MJOY | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 |
| 199 | 0xE544 | 0x71 | AHM | leer | 0x0000 | 0 | 50 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 200 | 0xE545 | 0x71 | AHM | leer | 0x0000 | 0 | 50 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 201 | 0xE547 | 0x71 | AHM | leer | 0x0000 | 0 | 50 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 202 | 0xE554 | 0x71 | AHM | FRM | 0x0000 | -48 | 33 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 203 | 0xE555 | 0x71 | AHM | DME | 0x0000 | 20 | 20 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 204 | 0xE556 | 0x71 | AHM | DSC | 0x0000 | 20 | 20 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 205 | 0xE557 | 0x71 | AHM | KOMBI | 0x0000 | -48 | 33 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 206 | 0xE558 | 0x71 | AHM | CAS | 0x0000 | -48 | 33 | -48 | 33 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 207 | 0xE559 | 0x71 | AHM | FRM | 0x0000 | -48 | 33 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 208 | 0xE55A | 0x71 | AHM | CAS | 0x0000 | -48 | 33 | -48 | 33 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 209 | 0xE55B | 0x71 | AHM | DME | 0x0000 | 20 | 20 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 210 | 0xE55C | 0x71 | AHM | DSC | 0x0000 | 20 | 20 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 211 | 0xE55D | 0x71 | AHM | JBE | 0x0000 | -48 | 33 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 212 | 0xE584 | 0x72 | FRM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 213 | 0xE587 | 0x72 | FRM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 214 | 0xE594 | 0x72 | FRM | SZL | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 |
| 215 | 0xE595 | 0x72 | FRM | AHM | 0x0000 | -48 | 33 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 216 | 0xE597 | 0x72 | FRM | DSC | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | 20 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 217 | 0xE598 | 0x72 | FRM | JBE | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 218 | 0xE599 | 0x72 | FRM | DSC | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | 20 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 219 | 0xE59A | 0x72 | FRM | DSC | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | 20 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 220 | 0xE59B | 0x72 | FRM | CAS | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 221 | 0xE59C | 0x72 | FRM | SZL | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 |
| 222 | 0xE5C4 | 0x73 | CID | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 223 | 0xE5C7 | 0x73 | CID | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 224 | 0xE707 | 0x78 | IHKA/IHKS/IHS | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 225 | 0xE714 | 0x78 | IHKA/IHKS/IHS | CAS | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 226 | 0xE715 | 0x78 | IHKA/IHKS/IHS | KOMBI | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 227 | 0xE716 | 0x78 | IHKA/IHKS/IHS | KOMBI | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 228 | 0xE717 | 0x78 | IHKA/IHKS/IHS | DME | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 229 | 0xE719 | 0x78 | IHKA/IHKS/IHS | KOMBI | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 230 | 0xE71A | 0x78 | IHKA/IHKS/IHS | DME | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 231 | 0xE71B | 0x78 | IHKA/IHKS/IHS | DME | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 232 | 0xE71C | 0x78 | IHKA/IHKS/IHS | DSC | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 233 | 0xE71E | 0x78 | IHKA/IHKS/IHS | JBE | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 234 | 0xE71F | 0x78 | IHKA/IHKS/IHS | JBE | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 235 | 0xE720 | 0x78 | IHKA/IHKS/IHS | DME | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 236 | 0xE725 | 0x78 | IHKA/IHKS/IHS | CAS | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 237 | 0xE726 | 0x78 | IHKA/IHKS/IHS | KOMBI | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 238 | 0xE727 | 0x78 | IHKA/IHKS/IHS | KOMBI | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 239 | 0xE728 | 0x78 | IHKA/IHKS/IHS | KOMBI | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 240 | 0xE72B | 0x78 | IHKA/IHKS/IHS | FRM | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 241 | 0xE72C | 0x78 | IHKA/IHKS/IHS | FRM | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 242 | 0xE72D | 0x78 | IHKA/IHKS/IHS | SHD | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 |
| 243 | 0xE72E | 0x78 | IHKA/IHKS/IHS | DME | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 244 | 0xE72F | 0x78 | IHKA/IHKS/IHS | JBE | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 245 | 0xE730 | 0x78 | IHKA/IHKS/IHS | JBE | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 246 | 0xE731 | 0x78 | IHKA/IHKS/IHS | JBE | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 247 | 0xE732 | 0x78 | IHKA/IHKS/IHS | SHD | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 |
| 248 | 0xE733 | 0x78 | IHKA/IHKS/IHS | CAS | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 249 | 0xE734 | 0x78 | IHKA/IHKS/IHS | JBE | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 250 | 0xE735 | 0x78 | IHKA/IHKS/IHS | JBE | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 251 | 0xE736 | 0x78 | IHKA/IHKS/IHS | JBE | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 252 | 0xE737 | 0x78 | IHKA/IHKS/IHS | CAS | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 253 | 0xE738 | 0x78 | IHKA/IHKS/IHS | SZL | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 |
| 254 | 0xE739 | 0x78 | IHKA/IHKS/IHS | DME | 0x0000 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | 20 | -53 | -53 | -53 | -53 | 20 | 20 | -53 | -53 | -53 | -53 | -53 | -53 | -53 | -53 |
| 255 | 0xE73A | 0x78 | IHKA/IHKS/IHS | CVM | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 |
| 256 | 0xE73B | 0x78 | IHKA/IHKS/IHS | CAS | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 257 | 0xE73C | 0x78 | IHKA/IHKS/IHS | CAS | 0x0000 | -48 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | 33 | 33 | -48 | -48 | -48 | -48 | -48 | -48 | -48 | -48 |
| 258 | 0xFFFC | 0x24 | CVM | leer | 0x0000 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

### LOWBAT

| ORT | STGR |
| --- | --- |
| 0x613A | AFS |
| 0xA46B | CID |
| 0x4536 | DDE |
| 0x9CCE | FRM |
| 0x4A56 | DDE |

### STGR_NAMEN

| STGR_ADRESSE | STGR_KURZNAME | STGR_LANGNAME |
| --- | --- | --- |
| 0x00 | JBE | Junction-Box-Elektronik                                    |
| 0x01 | MRS | Mehrfach-Rückhaltesystem                                   |
| 0x02 | SZL | Schaltzentrum Lenksäule                                    |
| 0x12 | DME,DDE | Motor Elektronik / Diesel Elektronik                   |
| 0x13 | DME2,DDE2 | Motor Elektronik 2 / Diesel Elektronik Slave         |
| 0x18 | EGS,SMG | Getriebesteuerung / Sequenzielles Manuelles Getriebe   |
| 0x20 | RDC | Reifendruck-Control                                        |
| 0x24 | CVM | Cabrioverdeck-Modul                                        |
| 0x27 | PGS,CA | Passive-Go-Steuergerät / Comfort Access                 |
| 0x29 | DSC | Dynamische Stabilitäts-Control                             |
| 0x30 | EPS | Elektrische Servolenkung                                   |
| 0x37 | AMP | Verstärker                                                 |
| 0x40 | CAS | Car Access System                                          |
| 0x44 | SHD | Schiebehebedach                                            |
| 0x60 | KOMBI | Instrumentenkombination                                  |
| 0x62 | CCC,RAD1,RAD2 | Car Communication Computer, Radio 1, Radio 2     |
| 0x63 | CCC,RAD1,RAD2 | Car Communication Computer, Radio 1, Radio 2     |
| 0x64 | PDC | Park Distance Control                                      |
| 0x67 | MJOY | MINI Joystick                                             |
| 0x71 | AHM | Anhängermodul                                              |
| 0x72 | FRM | Fußraummodul                                               |
| 0x73 | CID | Central Information Display                                |
| 0x78 | IHKA | Integrierte Heiz-Klima-Automatik                          |
| 0xE7 | F-CAN | Bus-System für Fahrwerksumfänge                          |
| 0xE9 | K-CAN | Bus-System für Karosserieumfänge                         |
| 0xEA | PT-CAN | Bus-System im Antriebs- und Fahrwerksbereich            |
| 0xFF | unbekannt | unbekanntes Steuergerät                              |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |
