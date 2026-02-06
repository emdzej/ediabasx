# fzgident.prg

## General

|  |  |
| --- | --- |
| File | fzgident.prg |
| Type | PRG |
| Jobs | 9 |
| Tables | 9 |
| Origin | BMW VS-42 Volk |
| Revision | 19.00 |
| Author | BMW VP-33 Volk |
| ECU Comment | SGBD zur Fahrzeugidentifikation, fzgident.b2s |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Fahrzeugidentifikation |  |  |
| ORIGIN | string | BMW VS-42 Volk |  |  |
| REVISION | string | 19.00 |  |  |
| AUTHOR | string | BMW VP-33 Volk |  |  |
| COMMENT | string | SGBD zur Fahrzeugidentifikation, fzgident.b2s |  |  |
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

### STRINGS_LESEN

_No description._

| Name | Type | Description |
| --- | --- | --- |
| GMTYP | string | Typschluessel |

### STRINGS_LESEN_TYPSCHLUESSEL

_No description._

| Name | Type | Description |
| --- | --- | --- |
| FZGTYP | string | Typschluessel |

### ERSTE_BR_ERMITTELN

_No description._

| Name | Type | Description |
| --- | --- | --- |
| FA_BR | string | Baureihe aus FA.PRG |

### GRUNDMERKMALE_LESEN

_No description._

| Name | Type | Description |
| --- | --- | --- |
| GMTYP | string | Typschluessel aus FA oder ZCS |

### GM_LESEN_TYPSCHLUESSEL

_No description._

| Name | Type | Description |
| --- | --- | --- |
| GMTYP | string | Typschluessel aus FA oder ZCS |

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

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### BR_TEXTE

| BR | DIS_BR |
| --- | --- |
| E36 | E36 |
| E38 | E38 |
| E39 | E39 |
| E46 | E46 |
| E52 | E52 |
| E53 | E53 |
| E65 | E65 |
| E66 | E65 |
| E67 | E65 |
| E68 | E65 |
| E60 | E60 |
| E61 | E60 |
| E63 | E63 |
| E64 | E63 |
| E70 | E70 |
| E71 | E71 |
| E72 | E72 |
| E81 | E87 |
| E82 | E87 |
| E83 | E83 |
| E84 | E84 |
| E85 | E85 |
| E86 | E85 |
| E87 | E87 |
| E88 | E87 |
| E89 | E89 |
| E90 | E90 |
| E91 | E90 |
| E92 | E90 |
| E93 | E90 |
| F01 | F01 |
| F02 | F01 |
| F04 | F01 |
| F07 | F07 |
| F10 | F10 |
| F11 | F10 |
| R50 | R50 |
| R52 | R50 |
| R53 | R50 |
| R56 | R56 |
| R55 | R56 |
| R57 | R56 |
| RR1 | RR01 |
| RR2 | RR01 |
| RR3 | RR01 |
| RR4 | RR4 |
| UNBEK | UNBEK |

### TYP_TEXTE

| GMTYP | TYP | BAUREIHE | MODELL | LA | TAIS | DESRS |
| --- | --- | --- | --- | --- | --- | --- |
| 1031 | BE11 | E36 | 316i_M43_COUPE | EUR_LL | X | X |
| 1032 | BE12 | E36 | 316i_M43_COUPE | EUR_RL | X | X |
| 1041 | BE21 | E36 | 316i_M43_COUPE | EUR_LL | X | X |
| 1042 | BE22 | E36 | 316i_M43_COUPE | EUR_RL | X | X |
| 1051 | BE51 | E36 | 318is_M42_COUPE | ECE_LL | X | O |
| 1052 | BE52 | E36 | 318is_M42_COUPE | ECE_RL | X | O |
| 1053 | BE53 | E36 | 318is_M42_COUPE | USA_LL | X | O |
| 1061 | BE61 | E36 | 318is_M42_COUPE | ECE_LL | X | O |
| 1062 | BE62 | E36 | 318is_M42_COUPE | ECE_RL | X | O |
| 1063 | BE63 | E36 | 318is_M42_COUPE | USA_LL | X | O |
| 1071 | BE71 | E36 | 318is_M44_COUPE | EUR_LL | X | X |
| 1072 | BE72 | E36 | 318is_M44_COUPE | EUR_RL | X | X |
| 1073 | BE73 | E36 | 318is_M44_COUPE | USA_LL | X | X |
| 1081 | BE81 | E36 | 318is_M44_COUPE | EUR_LL | X | X |
| 1082 | BE82 | E36 | 318is_M44_COUPE | EUR_RL | X | X |
| 1083 | BE83 | E36 | 318is_M44_COUPE | USA_LL | X | X |
| 1103 | BF03 | E36 | M3_S50US_COUPE | USA_LL | X | O |
| 1111 | BF11 | E36 | 320i_M50_COUPE | ECE_LL | X | O |
| 1112 | BF12 | E36 | 320i_M50_COUPE | ECE_RL | X | O |
| 1121 | BF21 | E36 | 320i_M50_COUPE | ECE_LL | X | O |
| 1122 | BF22 | E36 | 320i_M50_COUPE | ECE_RL | X | O |
| 1131 | BF31 | E36 | 325i_M50_COUPE | ECE_LL | X | O |
| 1132 | BF32 | E36 | 325i_M50_COUPE | ECE_RL | X | O |
| 1133 | BF33 | E36 | 325is_M50_COUPE | USA_LL | X | O |
| 1138 | BF38 | E36 | 325i_M50_COUPE | ZAF_RL | X | O |
| 1141 | BF41 | E36 | 325i_M50_COUPE | ECE_LL | X | O |
| 1142 | BF42 | E36 | 325i_M50_COUPE | ECE_RL | X | O |
| 1143 | BF43 | E36 | 325is_M50_COUPE | USA_LL | X | O |
| 1148 | BF48 | E36 | 325i_M50_COUPE | ZAF_RL | X | O |
| 1151 | BF51 | E36 | 320i_M52_COUPE | EUR_LL | X | X |
| 1161 | BF61 | E36 | 320i_M52_COUPE | EUR_LL | X | X |
| 1171 | BF71 | E36 | 323i_M52_COUPE | EUR_LL | X | X |
| 1172 | BF72 | E36 | 323i_M52_COUPE | EUR_RL | X | X |
| 1173 | BF73 | E36 | 323i_M52_COUPE | USA_LL | X | X |
| 1181 | BF81 | E36 | 323i_M52_COUPE | EUR_LL | X | X |
| 1182 | BF82 | E36 | 323i_M52_COUPE | EUR_RL | X | X |
| 1183 | BF83 | E36 | 323i_M52_COUPE | USA_LL | X | X |
| 1191 | BF91 | E36 | M3_S50_COUPE | ECE_LL | X | O |
| 1192 | BF92 | E36 | M3_S50_COUPE | ECE_RL | X | O |
| 1193 | BF93 | E36 | M3_S50US_COUPE | USA_LL | X | O |
| 1198 | BF98 | E36 | M3_S50_COUPE | ZAF_RL | X | O |
| 1199 | BF99 | E36 | M3_S50_COUPE | EUR_LL | X | X |
| 11A1 | BG11 | E36 | 328i_M52_COUPE | EUR_LL | X | X |
| 11A2 | BG12 | E36 | 328i_M52_COUPE | EUR_RL | X | X |
| 11A3 | BG13 | E36 | 328i_M52_COUPE | USA_LL | X | X |
| 11B1 | BG21 | E36 | 328i_M52_COUPE | EUR_LL | X | X |
| 11B2 | BG22 | E36 | 328i_M52_COUPE | EUR_RL | X | X |
| 11B3 | BG23 | E36 | 328i_M52_COUPE | USA_LL | X | X |
| 11E1 | BG91 | E36 | M3_S50_COUPE | EUR_LL | X | X |
| 11E2 | BG92 | E36 | M3_S50_COUPE | EUR_RL | X | X |
| 11E3 | BG93 | E36 | M3_S52_COUPE | USA_LL | X | X |
| 1221 | CP21 | E36 | 316i_M43_LIM | ZAF_LL | X | X |
| 1231 | CP31 | E36 | 318i_M43_LIM | ZAF_LL | X | X |
| 1232 | CP32 | E36 | 318i_M43_LIM | ZAF_RL | X | X |
| 1242 | CP42 | E36 | 318i_M43_LIM | ZAF_RL | X | X |
| 1271 | CP71 | E36 | 323i_M52_LIM | ZAF_LL | X | X |
| 1272 | CP72 | E36 | 323i_M52_LIM | ZAF_RL | X | X |
| 1281 | CP81 | E36 | 323i_M52_LIM | ZAF_LL | X | X |
| 1282 | CP82 | E36 | 323i_M52_LIM | ZAF_RL | X | X |
| 1303 | BK03 | E36 | M3_S52_CABRIO | USA_LL | X | X |
| 1391 | BK91 | E36 | M3_S50_CABRIO | EUR_LL | X | X |
| 1392 | BK92 | E36 | M3_S50_CABRIO | EUR_RL | X | X |
| 1393 | BK93 | E36 | M3_S52_CABRIO | USA_LL | X | X |
| 13E1 | BH31 | E36 | 318i_M43_CABRIO | EUR_LL | X | X |
| 13E2 | BH32 | E36 | 318i_M43_CABRIO | EUR_RL | X | X |
| 1401 | BH41 | E36 | 318i_M43_CABRIO | EUR_LL | X | X |
| 1402 | BH42 | E36 | 318i_M43_CABRIO | EUR_RL | X | X |
| 1411 | BJ11 | E36 | 320i_M50_CABRIO | ECE_LL | X | O |
| 1412 | BJ12 | E36 | 320i_M50_CABRIO | ECE_RL | X | O |
| 1421 | BJ21 | E36 | 320i_M50_CABRIO | ECE_LL | X | O |
| 1422 | BJ22 | E36 | 320i_M50_CABRIO | ECE_RL | X | O |
| 1431 | BJ31 | E36 | 320i_M52_CABRIO | EUR_LL | X | X |
| 1432 | BJ32 | E36 | 320i_M52_CABRIO | EUR_RL | X | O |
| 1441 | BJ41 | E36 | 320i_M52_CABRIO | EUR_LL | X | X |
| 1442 | BJ42 | E36 | 320i_M52_CABRIO | EUR_RL | X | O |
| 1451 | BJ51 | E36 | 325i_M50_CABRIO | ECE_LL | X | O |
| 1452 | BJ52 | E36 | 325i_M50_CABRIO | ECE_RL | X | O |
| 1453 | BJ53 | E36 | 325i_M50_CABRIO | USA_LL | X | O |
| 1461 | BJ61 | E36 | 325i_M50_CABRIO | ECE_LL | X | O |
| 1462 | BJ62 | E36 | 325i_M50_CABRIO | ECE_RL | X | O |
| 1463 | BJ63 | E36 | 325i_M50_CABRIO | USA_LL | X | O |
| 1471 | BJ71 | E36 | 323i_M52_CABRIO | EUR_LL | X | X |
| 1472 | BJ72 | E36 | 323i_M52_CABRIO | EUR_RL | X | X |
| 1473 | BJ73 | E36 | 323i_M52_CABRIO | USA_LL | X | X |
| 1481 | BJ81 | E36 | 323i_M52_CABRIO | EUR_LL | X | X |
| 1482 | BJ82 | E36 | 323i_M52_CABRIO | EUR_RL | X | X |
| 1483 | BJ83 | E36 | 323i_M52_CABRIO | USA_LL | X | X |
| 1491 | BJ91 | E36 | M3_S50_CABRIO | ECE_LL | X | O |
| 1492 | BJ92 | E36 | M3_S50_CABRIO | ECE_RL | X | O |
| 14A3 | BK53 | E36 | 318i_M42_CABRIO | USA_LL | X | O |
| 14B3 | BK63 | E36 | 318i_M42_CABRIO | USA_LL | X | O |
| 14C3 | BH73 | E36 | 318is_M44_CABRIO | USA_LL | X | X |
| 14D3 | BH83 | E36 | 318is_M44_CABRIO | USA_LL | X | X |
| 14E1 | BK71 | E36 | 328i_M52_CABRIO | EUR_LL | X | X |
| 14E2 | BK72 | E36 | 328i_M52_CABRIO | EUR_RL | X | X |
| 14E3 | BK73 | E36 | 328i_M52_CABRIO | USA_LL | X | X |
| 14F1 | BK81 | E36 | 328i_M52_CABRIO | EUR_LL | X | X |
| 14F2 | BK82 | E36 | 328i_M52_CABRIO | EUR_RL | X | X |
| 14F3 | BK83 | E36 | 328i_M52_CABRIO | USA_LL | X | X |
| 1501 | CA01 | E36 | 318i_M43_LIM | EUR_LL | X | X |
| 1502 | CA02 | E36 | 318i_M43_LIM | EUR_RL | X | X |
| 1504 | CA04 | E36 | 318i_M43_LIM | MYS_RL | X | O |
| 1505 | CA05 | E36 | 318i_M43_LIM | THA_RL | X | X |
| 1508 | CA08 | E36 | 318i_M43_LIM | ZAF_RL | X | X |
| 1509 | CA09 | E36 | 318i_M43_LIM | ZAF_RL | X | X |
| 1511 | CA11 | E36 | 316i_M40_LIM | ECE_LL | X | O |
| 1512 | CA12 | E36 | 316i_M40_LIM | ECE_RL | X | O |
| 1521 | CA21 | E36 | 316i_M40_LIM | ECE_LL | X | O |
| 1522 | CA22 | E36 | 316i_M40_LIM | ECE_RL | X | O |
| 1531 | CA31 | E36 | 318i_M40_LIM | ECE_LL | X | O |
| 1532 | CA32 | E36 | 318i_M40_LIM | ECE_RL | X | O |
| 1534 | CA34 | E36 | 318i_M40_LIM | MYS_RL | X | O |
| 1535 | CA35 | E36 | 318i_M40_LIM | THA_RL | X | O |
| 1537 | CA37 | E36 | 318i_M40_LIM | IDN_RL | X | O |
| 1538 | CA38 | E36 | 316i_M40_LIM | ZAF_RL | X | O |
| 1541 | CA41 | E36 | 318i_M40_LIM | ECE_LL | X | O |
| 1542 | CA42 | E36 | 318i_M40_LIM | ECE_RL | X | O |
| 1544 | CA44 | E36 | 318i_M40_LIM | MYS_RL | X | O |
| 1545 | CA45 | E36 | 318i_M40_LIM | THA_RL | X | O |
| 1547 | CA47 | E36 | 318i_M40_LIM | IDN_RL | X | O |
| 1548 | CA48 | E36 | 316i_M40_LIM | ZAF_RL | X | O |
| 1551 | CA51 | E36 | 318is_M42_LIM | ECE_LL | X | O |
| 1552 | CA52 | E36 | 318is_M42_LIM | ECE_RL | X | O |
| 1553 | CA53 | E36 | 318i_M42_LIM | USA_LL | X | O |
| 1558 | CA58 | E36 | 318i_M42_LIM | ZAF_RL | X | O |
| 1561 | CA61 | E36 | 318is_M42_LIM | ECE_LL | X | O |
| 1562 | CA62 | E36 | 318is_M42_LIM | ECE_RL | X | O |
| 1563 | CA63 | E36 | 318i_M42_LIM | USA_LL | X | O |
| 1568 | CA68 | E36 | 318i_M42_LIM | ZAF_RL | X | O |
| 1571 | CA71 | E36 | 316i_M43_LIM | EUR_LL | X | X |
| 1572 | CA72 | E36 | 316i_M43_LIM | EUR_RL | X | X |
| 1579 | CA79 | E36 | 316i_M43_LIM | PHL_LL | X | X |
| 1581 | CA81 | E36 | 316i_M43_LIM | EUR_LL | X | X |
| 1582 | CA82 | E36 | 316i_M43_LIM | EUR_RL | X | X |
| 1591 | CA91 | E36 | 318i_M43_LIM | EUR_LL | X | X |
| 1592 | CA92 | E36 | 318i_M43_LIM | EUR_RL | X | X |
| 1594 | CA94 | E36 | 318i_M43_LIM | MYS_RL | X | O |
| 1595 | CA95 | E36 | 318i_M43_LIM | THA_RL | X | X |
| 1597 | CA97 | E36 | 318i_M43_LIM | IDN_RL | X | X |
| 1598 | CA98 | E36 | 318i_M43_LIM | ZAF_RL | X | X |
| 1599 | CA99 | E36 | 318i_M43_LIM | ZAF_RL | X | X |
| 15A3 | CC73 | E36 | 318i_M42_LIM | USA_LL | X | O |
| 15B3 | CC83 | E36 | 318i_M42_LIM | USA_LL | X | O |
| 15C1 | CD71 | E36 | 318is_M44_LIM | EUR_LL | X | O |
| 15C2 | CD72 | E36 | 318is_M44_LIM | EUR_RL | X | O |
| 15C3 | CC93 | E36 | 318i_M44_LIM | USA_LL | X | X |
| 15C8 | CD78 | E36 | 318is_M44_LIM | ZAF_RL | X | X |
| 15D1 | CD81 | E36 | 318is_M44_LIM | EUR_LL | X | O |
| 15D2 | CD82 | E36 | 318is_M44_LIM | EUR_RL | X | O |
| 15D3 | CC03 | E36 | 318i_M44_LIM | USA_LL | X | X |
| 15D8 | CD88 | E36 | 318is_M44_LIM | ZAF_RL | X | X |
| 15E2 | CD52 | E36 | 318is_M44_LIM | ZAF_RL | X | X |
| 15F2 | CD62 | E36 | 318is_M44_LIM | ZAF_RL | X | X |
| 1611 | CB11 | E36 | 320i_M50_LIM | ECE_LL | X | O |
| 1612 | CB12 | E36 | 320i_M50_LIM | ECE_RL | X | O |
| 1613 | CB13 | E36 | 320i_M50_LIM | USA_LL | X | O |
| 1617 | CB17 | E36 | 320i_M50_LIM | IDN_RL | X | O |
| 1618 | CB18 | E36 | 320i_M50_LIM | ZAF_RL | X | O |
| 1621 | CB21 | E36 | 320i_M50_LIM | ECE_LL | X | O |
| 1622 | CB22 | E36 | 320i_M50_LIM | ECE_RL | X | O |
| 1623 | CB23 | E36 | 320i_M50_LIM | USA_LL | X | O |
| 1627 | CB27 | E36 | 320i_M50_LIM | IDN_RL | X | O |
| 1628 | CB28 | E36 | 320i_M50_LIM | ZAF_RL | X | O |
| 1631 | CB31 | E36 | 325i_M50_LIM | ECE_LL | X | O |
| 1632 | CB32 | E36 | 325i_M50_LIM | ECE_RL | X | O |
| 1633 | CB33 | E36 | 325i_M50_LIM | USA_LL | X | O |
| 1634 | CB34 | E36 | 325i_M50_LIM | MYS_RL | X | O |
| 1635 | CB35 | E36 | 325i_M50_LIM | THA_RL | X | O |
| 1638 | CB38 | E36 | 325i_M50_LIM | ZAF_RL | X | O |
| 1639 | CB39 | E36 | 325i_M50_LIM | URY_LL | X | O |
| 1641 | CB41 | E36 | 325i_M50_LIM | ECE_LL | X | O |
| 1642 | CB42 | E36 | 325i_M50_LIM | ECE_RL | X | O |
| 1643 | CB43 | E36 | 325i_M50_LIM | USA_LL | X | O |
| 1644 | CB44 | E36 | 325i_M50_LIM | MYS_RL | X | O |
| 1645 | CB45 | E36 | 325i_M50_LIM | THA_RL | X | O |
| 1647 | CB47 | E36 | 325i_M50_LIM | MEX_LL | X | O |
| 1648 | CB48 | E36 | 325i_M50_LIM | ZAF_RL | X | O |
| 1651 | CB51 | E36 | 320i_M52_LIM | EUR_LL | X | O |
| 1652 | CB52 | E36 | 320i_M52_LIM | EUR_RL | X | X |
| 1657 | CB57 | E36 | 320i_M52_LIM | IDN_RL | X | O |
| 1659 | CB59 | E36 | 320i_M52_LIM | VNM_LL | X | X |
| 1661 | CB61 | E36 | 320i_M52_LIM | EUR_LL | X | O |
| 1662 | CB62 | E36 | 320i_M52_LIM | EUR_RL | X | X |
| 1667 | CB67 | E36 | 320i_M52_LIM | IDN_RL | X | O |
| 1669 | CB69 | E36 | 320i_M52_LIM | PHL_LL | X | X |
| 1671 | CB71 | E36 | 323i_M52_LIM | EUR_LL | X | O |
| 1672 | CB72 | E36 | 323i_M52_LIM | EUR_RL | X | X |
| 1675 | CB75 | E36 | 323i_M52_LIM | THA_RL | X | X |
| 1677 | CB77 | E36 | 323i_M52_LIM | IDN_RL | X | X |
| 1678 | CB78 | E36 | 323i_M52_LIM | ZAF_RL | X | X |
| 1681 | CB81 | E36 | 323i_M52_LIM | EUR_LL | X | O |
| 1682 | CB82 | E36 | 323i_M52_LIM | EUR_RL | X | X |
| 1685 | CB85 | E36 | 323i_M52_LIM | THA_RL | X | X |
| 1687 | CB87 | E36 | 323i_M52_LIM | IDN_RL | X | X |
| 1688 | CB88 | E36 | 323i_M52_LIM | ZAF_RL | X | X |
| 1689 | CB89 | E36 | 323i_M52_LIM | MEX_LL | X | X |
| 1691 | CB91 | E36 | M3_S50_LIM | ECE_LL | X | O |
| 1692 | CB92 | E36 | M3_S50_LIM | ECE_RL | X | O |
| 16A1 | CD11 | E36 | 328i_M52_LIM | EUR_LL | X | X |
| 16A2 | CD12 | E36 | 328i_M52_LIM | EUR_RL | X | O |
| 16A3 | CD13 | E36 | 328i_M52_LIM | USA_LL | X | X |
| 16A8 | CD18 | E36 | 328i_M52_LIM | ZAF_RL | X | X |
| 16B1 | CD21 | E36 | 328i_M52_LIM | EUR_LL | X | X |
| 16B2 | CD22 | E36 | 328i_M52_LIM | EUR_RL | X | O |
| 16B3 | CD23 | E36 | 328i_M52_LIM | USA_LL | X | X |
| 16B4 | CD24 | E36 | 328i_M52_LIM | MYS_RL | X | X |
| 16B7 | CD27 | E36 | 328i_M52_LIM | MEX_LL | X | X |
| 16B8 | CD28 | E36 | 328i_M52_LIM | ZAF_RL | X | X |
| 16C3 | CD33 | E36 | 328i_M52_LIM | USA_LL | X | X |
| 16D3 | CD43 | E36 | 328i_M52_LIM | USA_LL | X | X |
| 16E1 | CD91 | E36 | M3_S50_LIM | EUR_LL | X | O |
| 16E2 | CD92 | E36 | M3_S50_LIM | EUR_RL | X | O |
| 16E3 | CD93 | E36 | M3_S52_LIM | USA_LL | X | X |
| 16E8 | CD98 | E36 | M3_S50_LIM | ZAF_RL | X | X |
| 16F3 | CD03 | E36 | M3_S52_LIM | USA_LL | X | X |
| 1711 | CC11 | E36 | 325td_M51_LIM | EUR_LL | X | O |
| 1712 | CC12 | E36 | 325td_M51_LIM | EUR_RL | X | O |
| 1721 | CC21 | E36 | 325td_M51_LIM | EUR_LL | X | O |
| 1722 | CC22 | E36 | 325td_M51_LIM | EUR_RL | X | O |
| 1731 | CC31 | E36 | 325tds_M51_LIM | EUR_LL | X | O |
| 1732 | CC32 | E36 | 325tds_M51_LIM | EUR_RL | X | O |
| 1738 | CC38 | E36 | 325tds_M51_LIM | ZAF_RL | X | X |
| 1741 | CC41 | E36 | 325tds_M51_LIM | EUR_LL | X | O |
| 1742 | CC42 | E36 | 325tds_M51_LIM | EUR_RL | X | O |
| 1751 | CC51 | E36 | 318tds_M41_LIM | EUR_LL | X | O |
| 1752 | CC52 | E36 | 318tds_M41_LIM | EUR_RL | X | O |
| 17A1 | CF51 | E36 | 318tds_M41_TOUR | EUR_LL | X | X |
| 17A2 | CF52 | E36 | 318tds_M41_TOUR | EUR_RL | X | X |
| 17C1 | CF91 | E36 | 325tds_M51_TOUR | EUR_LL | X | X |
| 17C2 | CF92 | E36 | 325tds_M51_TOUR | EUR_RL | X | X |
| 17D1 | CF01 | E36 | 325tds_M51_TOUR | EUR_LL | X | X |
| 17D2 | CF02 | E36 | 325tds_M51_TOUR | EUR_RL | X | X |
| 1811 | CE11 | E36 | 316i_M43_TOUR | EUR_LL | X | X |
| 1812 | CE12 | E36 | 316i_M43_TOUR | EUR_RL | X | X |
| 1821 | CE21 | E36 | 316i_M43_TOUR | EUR_LL | X | X |
| 1822 | CE22 | E36 | 316i_M43_TOUR | EUR_RL | X | X |
| 1831 | CE31 | E36 | 318i_M43_TOUR | EUR_LL | X | X |
| 1832 | CE32 | E36 | 318i_M43_TOUR | EUR_RL | X | X |
| 1841 | CE41 | E36 | 318i_M43_TOUR | EUR_LL | X | X |
| 1842 | CE42 | E36 | 318i_M43_TOUR | EUR_RL | X | X |
| 1851 | CE51 | E36 | 320i_M52_TOUR | EUR_LL | X | X |
| 1852 | CE52 | E36 | 320i_M52_TOUR | EUR_RL | X | O |
| 1861 | CE61 | E36 | 320i_M52_TOUR | EUR_LL | X | X |
| 1862 | CE62 | E36 | 320i_M52_TOUR | EUR_RL | X | O |
| 1871 | CE71 | E36 | 323i_M52_TOUR | EUR_LL | X | X |
| 1872 | CE72 | E36 | 323i_M52_TOUR | EUR_RL | X | X |
| 1881 | CE81 | E36 | 323i_M52_TOUR | EUR_LL | X | X |
| 1882 | CE82 | E36 | 323i_M52_TOUR | EUR_RL | X | X |
| 18A1 | CF11 | E36 | 328i_M52_TOUR | EUR_LL | X | X |
| 18A2 | CF12 | E36 | 328i_M52_TOUR | EUR_RL | X | X |
| 18B1 | CF21 | E36 | 328i_M52_TOUR | EUR_LL | X | X |
| 18B2 | CF22 | E36 | 328i_M52_TOUR | EUR_RL | X | X |
| 1C11 | CG11 | E36 | 316i_M43_COMP | EUR_LL | X | X |
| 1C12 | CG12 | E36 | 316i_M43_COMP | EUR_RL | X | X |
| 1C21 | CG21 | E36 | 316i_M43_COMP | EUR_LL | X | X |
| 1C22 | CG22 | E36 | 316i_M43_COMP | EUR_RL | X | X |
| 1C31 | CG31 | E36 | 323ti_M52_COMP | EUR_LL | X | X |
| 1C41 | CG41 | E36 | 323ti_M52_COMP | EUR_LL | X | X |
| 1C51 | CG51 | E36 | 318ti_M42_COMP | ECE_LL | X | O |
| 1C52 | CG52 | E36 | 318ti_M42_COMP | ECE_RL | X | O |
| 1C53 | CG53 | E36 | 318ti_M42_COMP | USA_LL | X | O |
| 1C61 | CG61 | E36 | 318ti_M42_COMP | ECE_LL | X | O |
| 1C62 | CG62 | E36 | 318ti_M42_COMP | ECE_RL | X | O |
| 1C63 | CG63 | E36 | 318ti_M42_COMP | USA_LL | X | O |
| 1C71 | CG71 | E36 | 318ti_M44_COMP | EUR_LL | X | X |
| 1C72 | CG72 | E36 | 318ti_M44_COMP | EUR_RL | X | X |
| 1C73 | CG73 | E36 | 318ti_M44_COMP | USA_LL | X | X |
| 1C81 | CG81 | E36 | 318ti_M44_COMP | EUR_LL | X | X |
| 1C82 | CG82 | E36 | 318ti_M44_COMP | EUR_RL | X | X |
| 1C83 | CG83 | E36 | 318ti_M44_COMP | USA_LL | X | X |
| 1CA1 | CH11 | E36 | 316g_M43_COMP | EUR_LL | X | X |
| 1D11 | CT31 | E36 | 323ti_M52_COMP | EUR_LL | X | X |
| 1D21 | CT41 | E36 | 323ti_M52_COMP | EUR_LL | X | X |
| 1D31 | CS11 | E36 | 316i_M43/TU_COMP | EUR_LL | X | X |
| 1D32 | CS12 | E36 | 316i_M43/TU_COMP | EUR_RL | X | X |
| 1D41 | CS21 | E36 | 316i_M43/TU_COMP | EUR_LL | X | X |
| 1D42 | CS22 | E36 | 316i_M43/TU_COMP | EUR_RL | X | X |
| 1D51 | CJ51 | E36 | 318tds_M41_COMP | EUR_LL | X | X |
| 1D52 | CJ52 | E36 | 318tds_M41_COMP | EUR_RL | X | X |
| 1E01 | CM91 | E36 | Z3_S50_COUPE | EUR_LL | X | X |
| 1E02 | CM92 | E36 | Z3_S50_COUPE | EUR_RL | X | X |
| 1E03 | CM93 | E36 | Z3_S52_COUPE | USA_LL | X | X |
| 1E04 | CN91 | E36 | Z3_S54_COUPE | EUR_LL | X | X |
| 1E05 | CN92 | E36 | Z3_S54_COUPE | EUR_RL | X | X |
| 1E06 | CN93 | E36 | Z3_S54_COUPE | USA_LL | X | X |
| 1E11 | CH71 | E36 | Z3_M44_ROADST | EUR_LL | X | X |
| 1E12 | CH72 | E36 | Z3_M44_ROADST | EUR_RL | X | X |
| 1E13 | CH73 | E36 | Z3_M44_ROADST | USA_LL | X | X |
| 1E31 | CJ11 | E36 | Z3_M43_ROADST | EUR_LL | X | X |
| 1E41 | CM11 | E36 | Z3_1.8_M43/TU_ROADST | EUR_LL | X | X |
| 1E42 | CM12 | E36 | Z3_1.8_M43/TU_ROADST | EUR_RL | X | X |
| 1E51 | CJ31 | E36 | Z3_M52_ROADST | EUR_LL | X | X |
| 1E52 | CJ32 | E36 | Z3_M52_ROADST | EUR_RL | X | X |
| 1E53 | CJ33 | E36 | Z3_M52_ROADST | USA_LL | X | X |
| 1E61 | CH31 | E36 | Z3_2.8_M52/TU_ROADST | EUR_LL | X | X |
| 1E62 | CH32 | E36 | Z3_2.8_M52/TU_ROADST | EUR_RL | X | X |
| 1E63 | CH33 | E36 | Z3_2.8_M52/TU_ROADST | USA_LL | X | X |
| 1E73 | CH93 | E36 | Z3_2.3_M52/TU_ROADST | USA_LL | X | X |
| 1E81 | CL31 | E36 | Z3_2.0_M52/TU_ROADST | EUR_LL | X | X |
| 1E82 | CL32 | E36 | Z3_2.0_M52/TU_ROADST | EUR_RL | X | X |
| 1E91 | CK91 | E36 | Z3_S50_ROADST | EUR_LL | X | X |
| 1E92 | CK92 | E36 | Z3_S50_ROADST | EUR_RL | X | X |
| 1E93 | CK93 | E36 | Z3_S52_ROADST | USA_LL | X | X |
| 1E94 | CL91 | E36 | Z3_S54_ROADST | EUR_LL | X | X |
| 1E95 | CL92 | E36 | Z3_S54_ROADST | EUR_RL | X | X |
| 1E96 | CL93 | E36 | Z3_S54_ROADST | USA_LL | X | X |
| 1EA1 | CN11 | E36 | Z3_2.2_M54_ROADST | EUR_LL | X | X |
| 1EA2 | CN12 | E36 | Z3_2.2_M54_ROADST | EUR_RL | X | X |
| 1EB3 | CN33 | E36 | Z3_2.5_M54_ROADST | USA_LL | X | X |
| 1EC1 | CN51 | E36 | Z3_3.0_M54_ROADST | EUR_LL | X | X |
| 1EC2 | CN52 | E36 | Z3_3.0_M54_ROADST | EUR_RL | X | X |
| 1EC3 | CN53 | E36 | Z3_3.0_M54_ROADST | USA_LL | X | X |
| 1ED1 | CK71 | E36 | Z3_3.0_M54_COUPE | EUR_LL | X | X |
| 1ED3 | CK73 | E36 | Z3_3.0_M54_COUPE | USA_LL | X | X |
| 1EE1 | CK31 | E36 | Z3_M52_COUPE | EUR_LL | X | X |
| 1EF1 | CK51 | E36 | Z3_2.8_M52/TU_COUPE | EUR_LL | X | X |
| 1EF3 | CK53 | E36 | Z3_2.8_M52/TU_COUPE | USA_LL | X | X |
| 4001 | GE01 | E38 | 725tds_A_M51_LIM | EUR_LL | X | X |
| 4011 | GE11 | E38 | 728i_M_M52_LIM | EUR_LL | X | X |
| 4021 | GE21 | E38 | 728i_A_M52_LIM | EUR_LL | X | X |
| 4022 | GE22 | E38 | 728i_A_M52_LIM | EUR_RL | X | X |
| 4031 | GE31 | E38 | 728i_M_M52/TU_LIM | EUR_LL | X | X |
| 4041 | GE41 | E38 | 728i_A_M52/TU_LIM | EUR_LL | X | X |
| 4042 | GE42 | E38 | 728i_A_M52/TU_LIM | EUR_RL | X | X |
| 4061 | GE61 | E38 | 730d_A_M57_LIM | EUR_LL | X | X |
| 4081 | GE81 | E38 | 740d_A_M67_LIM | EUR_LL | X | X |
| 4091 | GE91 | E38 | 725tds_M_M51_LIM | EUR_LL | X | X |
| 4111 | GF11 | E38 | 730i_M_M60/1_LIM | EUR_LL | X | X |
| 4121 | GF21 | E38 | 730i_A_M60/1_LIM | EUR_LL | X | X |
| 4122 | GF22 | E38 | 730i_A_M60/1_LIM | EUR_RL | X | X |
| 4125 | GF25 | E38 | 730i_A_M60/1_LIM | THA_RL | X | X |
| 4131 | GF31 | E38 | 735i_M_M62_LIM | EUR_LL | X | X |
| 4141 | GF41 | E38 | 735i_A_M62_LIM | EUR_LL | X | X |
| 4142 | GF42 | E38 | 735i_A_M62_LIM | EUR_RL | X | X |
| 4151 | GF51 | E38 | 740i_M_M60/2_LIM | EUR_LL | X | X |
| 4161 | GF61 | E38 | 740i_A_M60/2_LIM | EUR_LL | X | X |
| 4162 | GF62 | E38 | 740i_A_M60/2_LIM | EUR_RL | X | X |
| 4163 | GF63 | E38 | 740i_A_M60/2_LIM | USA_LL | X | X |
| 4171 | GF71 | E38 | 740i_M_M62_LIM | EUR_LL | X | X |
| 4181 | GF81 | E38 | 740i_A_M62_LIM | EUR_LL | X | X |
| 4182 | GF82 | E38 | 740i_A_M62_LIM | EUR_RL | X | X |
| 4183 | GF83 | E38 | 740i_A_M62_LIM | USA_LL | X | X |
| 4201 | GG01 | E38 | 750i_A_M73/TU_LIM | EUR_LL | X | X |
| 4202 | GG02 | E38 | 750i_A_M73/TU_LIM | EUR_RL | X | X |
| 4221 | GG21 | E38 | 750i_A_M73_LIM | EUR_LL | X | X |
| 4222 | GG22 | E38 | 750i_A_M73_LIM | EUR_RL | X | X |
| 4241 | GG41 | E38 | 735i_A_M62/TU_LIM | EUR_LL | X | X |
| 4242 | GG42 | E38 | 735i_A_M62/TU_LIM | EUR_RL | X | X |
| 4281 | GG81 | E38 | 740i_A_M62/TU_LIM | EUR_LL | X | X |
| 4282 | GG82 | E38 | 740i_A_M62/TU_LIM | EUR_RL | X | X |
| 4283 | GG83 | E38 | 740i_A_M62/TU_LIM | USA_LL | X | X |
| 4301 | GH01 | E38 | 740iL_A_M62/TU_LIM_PL | EUR_LL | X | X |
| 4303 | GH03 | E38 | 740iL_A_M62/TU_LIM_PL | USA_LL | X | X |
| 4321 | GH21 | E38 | 728iL_A_M52_LIM | EUR_LL | X | X |
| 4325 | GH25 | E38 | 728iL_A_M52_LIM | THA_RL | X | X |
| 4341 | GH41 | E38 | 728iL_A_M52/TU_LIM | EUR_LL | X | X |
| 4345 | GH45 | E38 | 728iL_A_M52/TU_LIM | THA_RL | X | X |
| 4361 | GH61 | E38 | 735iL_A_M62/TU_LIM | EUR_LL | X | X |
| 4362 | GH62 | E38 | 735iL_A_M62/TU_LIM | EUR_RL | X | X |
| 4367 | GH67 | E38 | 735iL_A_M62/TU_LIM | IDN_RL | X | X |
| 4381 | GH81 | E38 | 740iL_A_M62/TU_LIM | EUR_LL | X | X |
| 4382 | GH82 | E38 | 740iL_A_M62/TU_LIM | EUR_RL | X | X |
| 4383 | GH83 | E38 | 740iL_A_M62/TU_LIM | USA_LL | X | X |
| 4385 | GH85 | E38 | 740iL_A_M62/TU_LIM | THA_RL | X | X |
| 4401 | GJ01 | E38 | 750iL_A_M73/TU_LIM | EUR_LL | X | X |
| 4402 | GJ02 | E38 | 750iL_A_M73/TU_LIM | EUR_RL | X | X |
| 4403 | GJ03 | E38 | 750iL_A_M73/TU_LIM | USA_LL | X | X |
| 4411 | GJ11 | E38 | 730iL_M_M60/1_LIM | EUR_LL | X | X |
| 4421 | GJ21 | E38 | 730iL_A_M60/1_LIM | EUR_LL | X | X |
| 4422 | GJ22 | E38 | 730iL_A_M60/1_LIM | EUR_RL | X | X |
| 4427 | GJ27 | E38 | 730iL_A_M60/1_LIM | IDN_RL | X | X |
| 4441 | GJ41 | E38 | 735iL_A_M62_LIM | EUR_LL | X | X |
| 4442 | GJ42 | E38 | 735iL_A_M62_LIM | EUR_RL | X | X |
| 4447 | GJ47 | E38 | 735iL_A_M62_LIM | IDN_RL | X | X |
| 4461 | GJ61 | E38 | 740iL_A_M60/2_LIM | EUR_LL | X | X |
| 4462 | GJ62 | E38 | 740iL_A_M60/2_LIM | EUR_RL | X | X |
| 4463 | GJ63 | E38 | 740iL_A_M60/2_LIM | USA_LL | X | X |
| 4481 | GJ81 | E38 | 740iL_A_M62_LIM | EUR_LL | X | X |
| 4482 | GJ82 | E38 | 740iL_A_M62_LIM | EUR_RL | X | X |
| 4483 | GJ83 | E38 | 740iL_A_M62_LIM | USA_LL | X | X |
| 4485 | GJ85 | E38 | 740iL_A_M62_LIM | THA_RL | X | X |
| 4487 | GJ87 | E38 | 740iL_A_M62_LIM | MEX_LL | X | X |
| 4521 | GK21 | E38 | 750iL_A_M73_LIM | EUR_LL | X | X |
| 4522 | GK22 | E38 | 750iL_A_M73_LIM | EUR_RL | X | X |
| 4523 | GK23 | E38 | 750iL_A_M73_LIM | USA_LL | X | X |
| 4561 | GK61 | E38 | 750iXL_A_M73_LIM | EUR_LL | X | X |
| 4562 | GK62 | E38 | 750iXL_A_M73_LIM | EUR_RL | X | X |
| 4581 | GK81 | E38 | 750iXL_A_M73/TU_LIM | EUR_LL | X | X |
| 4582 | GK82 | E38 | 750iXL_A_M73/TU_LIM | EUR_RL | X | X |
| 4591 | GK91 | E38 | 750iL_A_M73/TU_LIM_PL | EUR_LL | X | X |
| 4593 | GK93 | E38 | 750iL_A_M73/TU_LIM_PL | USA_LL | X | X |
| 5171 | DL71 | E39 | 530d_M_M57_LIM | EUR_LL | X | X |
| 5172 | DL72 | E39 | 530d_M_M57_LIM | EUR_RL | X | X |
| 5181 | DL81 | E39 | 530d_A_M57_LIM | EUR_LL | X | X |
| 5182 | DL82 | E39 | 530d_A_M57_LIM | EUR_RL | X | X |
| 5311 | DD11 | E39 | 520i_M_M52_LIM | EUR_LL | X | X |
| 5312 | DD12 | E39 | 520i_M_M52_LIM | EUR_RL | X | X |
| 5321 | DD21 | E39 | 520i_A_M52_LIM | EUR_LL | X | X |
| 5322 | DD22 | E39 | 520i_A_M52_LIM | EUR_RL | X | X |
| 5324 | DD24 | E39 | 520i_A_M52_LIM | MYS_RL | X | X |
| 5331 | DD31 | E39 | 523i_M_M52_LIM | EUR_LL | X | X |
| 5332 | DD32 | E39 | 523i_M_M52_LIM | EUR_RL | X | X |
| 5337 | DD37 | E39 | 523i_M_M52_LIM | IDN_RL | X | X |
| 5341 | DD41 | E39 | 523i_A_M52_LIM | EUR_LL | X | X |
| 5342 | DD42 | E39 | 523i_A_M52_LIM | EUR_RL | X | X |
| 5344 | DD44 | E39 | 523i_A_M52_LIM | MYS_RL | X | X |
| 5345 | DD45 | E39 | 523i_A_M52_LIM | THA_RL | X | X |
| 5346 | DD46 | E39 | 523i_A_M52_LIM | EGY_LL | X | X |
| 5347 | DD47 | E39 | 523i_A_M52_LIM | IDN_RL | X | X |
| 5349 | DD49 | E39 | 523i_A_M52_LIM | PHL_LL | X | X |
| 5351 | DD51 | E39 | 528i_M_M52_LIM | EUR_LL | X | X |
| 5352 | DD52 | E39 | 528i_M_M52_LIM | EUR_RL | X | X |
| 5353 | DD53 | E39 | 528i_M_M52_LIM | USA_LL | X | X |
| 5359 | DD59 | E39 | 528i_M_M52_LIM | VNM_LL | X | X |
| 5361 | DD61 | E39 | 528i_A_M52_LIM | EUR_LL | X | X |
| 5362 | DD62 | E39 | 528i_A_M52_LIM | EUR_RL | X | X |
| 5363 | DD63 | E39 | 528i_A_M52_LIM | USA_LL | X | X |
| 5366 | DD66 | E39 | 528i_A_M52_LIM | IDN_RL | X | X |
| 5367 | DD67 | E39 | 528i_A_M52_LIM | MEX_LL | X | X |
| 5411 | DE11 | E39 | 535i_M_M62_LIM | EUR_LL | X | X |
| 5412 | DE12 | E39 | 535i_M_M62_LIM | EUR_RL | X | X |
| 5421 | DE21 | E39 | 535i_A_M62_LIM | EUR_LL | X | X |
| 5422 | DE22 | E39 | 535i_A_M62_LIM | EUR_RL | X | X |
| 5451 | DE51 | E39 | 540i_M_M62_LIM | EUR_LL | X | X |
| 5452 | DE52 | E39 | 540i_M_M62_LIM | EUR_RL | X | X |
| 5453 | DE53 | E39 | 540i_M_M62_LIM | USA_LL | X | X |
| 5461 | DE61 | E39 | 540i_A_M62_LIM | EUR_LL | X | X |
| 5462 | DE62 | E39 | 540i_A_M62_LIM | EUR_RL | X | X |
| 5463 | DE63 | E39 | 540i_A_M62_LIM | USA_LL | X | X |
| 5467 | DE67 | E39 | 540i_A_M62_LIM | MEX_LL | X | X |
| 5481 | DE81 | E39 | 540i_A_M62_LIM_PL | EUR_LL | X | X |
| 5482 | DE82 | E39 | 540i_A_M62_LIM_PL | EUR_RL | X | X |
| 5483 | DE83 | E39 | 540i_A_M62_LIM_PL | USA_LL | X | X |
| 5487 | DE87 | E39 | 540i_A_M62_LIM_PL | MEX_LL | X | X |
| 5491 | DE91 | E39 | M5_M_S62_LIM | EUR_LL | X | X |
| 5492 | DE92 | E39 | M5_M_S62_LIM | EUR_RL | X | X |
| 5493 | DE93 | E39 | M5_M_S62_LIM | USA_LL | X | X |
| 5551 | DF51 | E39 | 525td_M_M51_LIM | EUR_LL | X | X |
| 5571 | DF71 | E39 | 525tds_M_M51_LIM | EUR_LL | X | X |
| 5572 | DF72 | E39 | 525tds_M_M51_LIM | EUR_RL | X | X |
| 5581 | DF81 | E39 | 525tds_A_M51_LIM | EUR_LL | X | X |
| 5582 | DF82 | E39 | 525tds_A_M51_LIM | EUR_RL | X | X |
| 5671 | DG71 | E39 | 525tds_M_M51_TOUR | EUR_LL | X | X |
| 5672 | DG72 | E39 | 525tds_M_M51_TOUR | EUR_RL | X | X |
| 5681 | DG81 | E39 | 525tds_A_M51_TOUR | EUR_LL | X | X |
| 5682 | DG82 | E39 | 525tds_A_M51_TOUR | EUR_RL | X | X |
| 5711 | DH11 | E39 | 520i_M_M52_TOUR | EUR_LL | X | X |
| 5712 | DH12 | E39 | 520i_M_M52_TOUR | EUR_RL | X | X |
| 5721 | DH21 | E39 | 520i_A_M52_TOUR | EUR_LL | X | X |
| 5722 | DH22 | E39 | 520i_A_M52_TOUR | EUR_RL | X | X |
| 5731 | DH31 | E39 | 523i_M_M52_TOUR | EUR_LL | X | X |
| 5732 | DH32 | E39 | 523i_M_M52_TOUR | EUR_RL | X | X |
| 5741 | DH41 | E39 | 523i_A_M52_TOUR | EUR_LL | X | X |
| 5742 | DH42 | E39 | 523i_A_M52_TOUR | EUR_RL | X | X |
| 5751 | DH51 | E39 | 528i_M_M52_TOUR | EUR_LL | X | X |
| 5752 | DH52 | E39 | 528i_M_M52_TOUR | EUR_RL | X | X |
| 5761 | DH61 | E39 | 528i_A_M52_TOUR | EUR_LL | X | X |
| 5762 | DH62 | E39 | 528i_A_M52_TOUR | EUR_RL | X | X |
| 5871 | DP71 | E39 | 530d_M_M57_TOUR | EUR_LL | X | X |
| 5872 | DP72 | E39 | 530d_M_M57_TOUR | EUR_RL | X | X |
| 5881 | DP81 | E39 | 530d_A_M57_TOUR | EUR_LL | X | X |
| 5882 | DP82 | E39 | 530d_A_M57_TOUR | EUR_RL | X | X |
| 5951 | DJ51 | E39 | 540i_M_M62_TOUR | EUR_LL | X | X |
| 5952 | DJ52 | E39 | 540i_M_M62_TOUR | EUR_RL | X | X |
| 5961 | DJ61 | E39 | 540i_A_M62_TOUR | EUR_LL | X | X |
| 5962 | DJ62 | E39 | 540i_A_M62_TOUR | EUR_RL | X | X |
| 5A11 | DM11 | E39 | 520i_M_M52/TU_LIM | EUR_LL | X | X |
| 5A12 | DM12 | E39 | 520i_M_M52/TU_LIM | EUR_RL | X | X |
| 5A21 | DM21 | E39 | 520i_A_M52/TU_LIM | EUR_LL | X | X |
| 5A22 | DM22 | E39 | 520i_A_M52/TU_LIM | EUR_RL | X | X |
| 5A24 | DM24 | E39 | 520i_A_M52/TU_LIM | MYS_RL | X | X |
| 5A26 | DM26 | E39 | 520i_A_M52/TU_LIM | EGY_LL | X | X |
| 5A31 | DM31 | E39 | 523i_M_M52/TU_LIM | EUR_LL | X | X |
| 5A32 | DM32 | E39 | 523i_M_M52/TU_LIM | EUR_RL | X | X |
| 5A37 | DM37 | E39 | 523i_M_M52/TU_LIM | IDN_RL | X | X |
| 5A41 | DM41 | E39 | 523i_A_M52/TU_LIM | EUR_LL | X | X |
| 5A42 | DM42 | E39 | 523i_A_M52/TU_LIM | EUR_RL | X | X |
| 5A44 | DM44 | E39 | 523i_A_M52/TU_LIM | MYS_RL | X | X |
| 5A45 | DM45 | E39 | 523i_A_M52/TU_LIM | THA_RL | X | X |
| 5A46 | DM46 | E39 | 523i_A_M52/TU_LIM | EGY_LL | X | X |
| 5A47 | DM47 | E39 | 523i_A_M52/TU_LIM | IDN_RL | X | X |
| 5A49 | DM49 | E39 | 523i_A_M52/TU_LIM | PHL_LL | X | X |
| 5A51 | DM51 | E39 | 528i_M_M52/TU_LIM | EUR_LL | X | X |
| 5A52 | DM52 | E39 | 528i_M_M52/TU_LIM | EUR_RL | X | X |
| 5A53 | DM53 | E39 | 528i_M_M52/TU_LIM | USA_LL | X | X |
| 5A58 | DM58 | E39 | 528i_M_M52/TU_LIM | RUS_LL | X | X |
| 5A61 | DM61 | E39 | 528i_A_M52/TU_LIM | EUR_LL | X | X |
| 5A62 | DM62 | E39 | 528i_A_M52/TU_LIM | EUR_RL | X | X |
| 5A63 | DM63 | E39 | 528i_A_M52/TU_LIM | USA_LL | X | X |
| 5A64 | DM64 | E39 | 528i_A_M52/TU_LIM | MYS_RL | X | X |
| 5A66 | DM66 | E39 | 528i_A_M52/TU_LIM | IDN_RL | X | X |
| 5A67 | DM67 | E39 | 528i_A_M52/TU_LIM | MEX_LL | X | X |
| 5A68 | DM68 | E39 | 528i_A_M52/TU_LIM | RUS_LL | X | X |
| 5A69 | DM69 | E39 | 528i_A_M52/TU_LIM | VNM_LL | X | X |
| 5A71 | DM71 | E39 | 520d_M_M47_LIM | EUR_LL | X | X |
| 5A87 | DM87 | E39 | 528i_A_M52/TU_LIM_PL | MEX_LL | X | X |
| 5B11 | DN11 | E39 | 535i_M_M62/TU_LIM | EUR_LL | X | X |
| 5B12 | DN12 | E39 | 535i_M_M62/TU_LIM | EUR_RL | X | X |
| 5B21 | DN21 | E39 | 535i_A_M62/TU_LIM | EUR_LL | X | X |
| 5B22 | DN22 | E39 | 535i_A_M62/TU_LIM | EUR_RL | X | X |
| 5B51 | DN51 | E39 | 540i_M_M62/TU_LIM | EUR_LL | X | X |
| 5B52 | DN52 | E39 | 540i_M_M62/TU_LIM | EUR_RL | X | X |
| 5B53 | DN53 | E39 | 540i_M_M62/TU_LIM | USA_LL | X | X |
| 5B61 | DN61 | E39 | 540i_A_M62/TU_LIM | EUR_LL | X | X |
| 5B62 | DN62 | E39 | 540i_A_M62/TU_LIM | EUR_RL | X | X |
| 5B63 | DN63 | E39 | 540i_A_M62/TU_LIM | USA_LL | X | X |
| 5B67 | DN67 | E39 | 540i_A_M62/TU_LIM | MEX_LL | X | X |
| 5B81 | DN81 | E39 | 540i_A_M62/TU_LIM_PL | EUR_LL | X | X |
| 5B82 | DN82 | E39 | 540i_A_M62/TU_LIM_PL | EUR_RL | X | X |
| 5B83 | DN83 | E39 | 540i_A_M62/TU_LIM_PL | USA_LL | X | X |
| 5B87 | DN87 | E39 | 540i_A_M62/TU_LIM_PL | MEX_LL | X | X |
| 5C01 | DP01 | E39 | 525d_A_M57_TOUR | EUR_LL | X | X |
| 5C02 | DP02 | E39 | 525d_A_M57_TOUR | EUR_RL | X | X |
| 5C11 | DR11 | E39 | 520i_M_M52/TU_TOUR | EUR_LL | X | X |
| 5C12 | DR12 | E39 | 520i_M_M52/TU_TOUR | EUR_RL | X | X |
| 5C21 | DR21 | E39 | 520i_A_M52/TU_TOUR | EUR_LL | X | X |
| 5C22 | DR22 | E39 | 520i_A_M52/TU_TOUR | EUR_RL | X | X |
| 5C31 | DR31 | E39 | 523i_M_M52/TU_TOUR | EUR_LL | X | X |
| 5C32 | DR32 | E39 | 523i_M_M52/TU_TOUR | EUR_RL | X | X |
| 5C41 | DR41 | E39 | 523i_A_M52/TU_TOUR | EUR_LL | X | X |
| 5C42 | DR42 | E39 | 523i_A_M52/TU_TOUR | EUR_RL | X | X |
| 5C51 | DP51 | E39 | 528i_M_M52/TU_TOUR | EUR_LL | X | X |
| 5C52 | DP52 | E39 | 528i_M_M52/TU_TOUR | EUR_RL | X | X |
| 5C53 | DP53 | E39 | 528i_M_M52/TU_TOUR | USA_LL | X | X |
| 5C61 | DP61 | E39 | 528i_A_M52/TU_TOUR | EUR_LL | X | X |
| 5C62 | DP62 | E39 | 528i_A_M52/TU_TOUR | EUR_RL | X | X |
| 5C63 | DP63 | E39 | 528i_A_M52/TU_TOUR | USA_LL | X | X |
| 5C91 | DP91 | E39 | 525d_M_M57_TOUR | EUR_LL | X | X |
| 5C92 | DP92 | E39 | 525d_M_M57_TOUR | EUR_RL | X | X |
| 5D51 | DR51 | E39 | 540i_M_M62/TU_TOUR | EUR_LL | X | X |
| 5D52 | DR52 | E39 | 540i_M_M62/TU_TOUR | EUR_RL | X | X |
| 5D61 | DR61 | E39 | 540i_A_M62/TU_TOUR | EUR_LL | X | X |
| 5D62 | DR62 | E39 | 540i_A_M62/TU_TOUR | EUR_RL | X | X |
| 5D63 | DR63 | E39 | 540i_A_M62/TU_TOUR | USA_LL | X | X |
| 5D71 | DR71 | E39 | 520d_M_M47_TOUR | EUR_LL | X | X |
| 5E01 | DL01 | E39 | 525d_A_M57_LIM | EUR_LL | X | X |
| 5E02 | DL02 | E39 | 525d_A_M57_LIM | EUR_RL | X | X |
| 5E11 | DS11 | E39 | 520i_M_M54_TOUR | EUR_LL | X | X |
| 5E12 | DS12 | E39 | 520i_M_M54_TOUR | EUR_RL | X | X |
| 5E21 | DS21 | E39 | 520i_A_M54_TOUR | EUR_LL | X | X |
| 5E22 | DS22 | E39 | 520i_A_M54_TOUR | EUR_RL | X | X |
| 5E31 | DS31 | E39 | 525i_M_M54_TOUR | EUR_LL | X | X |
| 5E32 | DS32 | E39 | 525i_M_M54_TOUR | EUR_RL | X | X |
| 5E33 | DS33 | E39 | 525i_M_M54_TOUR | USA_LL | X | X |
| 5E38 | DL38 | E39 | 523i_M_M52/TU_LIM | RUS_LL | X | X |
| 5E41 | DS41 | E39 | 525i_A_M54_TOUR | EUR_LL | X | X |
| 5E42 | DS42 | E39 | 525i_A_M54_TOUR | EUR_RL | X | X |
| 5E43 | DS43 | E39 | 525i_A_M54_TOUR | USA_LL | X | X |
| 5E48 | DL48 | E39 | 523i_A_M52/TU_LIM | RUS_LL | X | X |
| 5E51 | DS51 | E39 | 530i_M_M54_TOUR | EUR_LL | X | X |
| 5E52 | DS52 | E39 | 530i_M_M54_TOUR | EUR_RL | X | X |
| 5E61 | DS61 | E39 | 530i_A_M54_TOUR | EUR_LL | X | X |
| 5E62 | DS62 | E39 | 530i_A_M54_TOUR | EUR_RL | X | X |
| 5E91 | DL91 | E39 | 525d_M_M57_LIM | EUR_LL | X | X |
| 5E92 | DL92 | E39 | 525d_M_M57_LIM | EUR_RL | X | X |
| 5F11 | DT11 | E39 | 520i_M_M54_LIM | EUR_LL | X | X |
| 5F12 | DT12 | E39 | 520i_M_M54_LIM | EUR_RL | X | X |
| 5F21 | DT21 | E39 | 520i_A_M54_LIM | EUR_LL | X | X |
| 5F22 | DT22 | E39 | 520i_A_M54_LIM | EUR_RL | X | X |
| 5F23 | DT27 | E39 | 520i_A_M54_LIM | IDN_RL | X | X |
| 5F24 | DT24 | E39 | 520i_A_M54_LIM | MYS_RL | X | X |
| 5F26 | DT26 | E39 | 520i_A_M54_LIM | EGY_LL | X | X |
| 5F31 | DT31 | E39 | 525i_M_M54_LIM | EUR_LL | X | X |
| 5F32 | DT32 | E39 | 525i_M_M54_LIM | EUR_RL | X | X |
| 5F33 | DT33 | E39 | 525i_M_M54_LIM | USA_LL | X | X |
| 5F35 | DT35 | E39 | 525i_M_M54_LIM | RUS_LL | X | X |
| 5F41 | DT41 | E39 | 525i_A_M54_LIM | EUR_LL | X | X |
| 5F42 | DT42 | E39 | 525i_A_M54_LIM | EUR_RL | X | X |
| 5F43 | DT43 | E39 | 525i_A_M54_LIM | USA_LL | X | X |
| 5F44 | DT44 | E39 | 525i_A_M54_LIM | MYS_RL | X | X |
| 5F45 | DT45 | E39 | 525i_A_M54_LIM | RUS_LL | X | X |
| 5F46 | DT46 | E39 | 525i_A_M54_LIM | EGY_LL | X | X |
| 5F47 | DT47 | E39 | 525i_A_M54_LIM | IDN_RL | X | X |
| 5F48 | DT48 | E39 | 525i_A_M54_LIM | VNM_LL | X | X |
| 5F49 | DT49 | E39 | 525i_A_M54_LIM | PHL_LL | X | X |
| 5F51 | DT51 | E39 | 530i_M_M54_LIM | EUR_LL | X | X |
| 5F52 | DT52 | E39 | 530i_M_M54_LIM | EUR_RL | X | X |
| 5F53 | DT53 | E39 | 530i_M_M54_LIM | USA_LL | X | X |
| 5F55 | DT55 | E39 | 530i_M_M54_LIM | RUS_LL | X | X |
| 5F61 | DT61 | E39 | 530i_A_M54_LIM | EUR_LL | X | X |
| 5F62 | DT62 | E39 | 530i_A_M54_LIM | EUR_RL | X | X |
| 5F63 | DT63 | E39 | 530i_A_M54_LIM | USA_LL | X | X |
| 5F65 | DT65 | E39 | 530i_A_M54_LIM | RUS_LL | X | X |
| 5F66 | DT66 | E39 | 530i_A_M54_LIM | IDN_RL | X | X |
| 5F68 | DT68 | E39 | 530i_A_M54_LIM | MYS_RL | X | X |
| 6031 | BL31 | E46 | 318Ci_M43/TU_COUPE | EUR_LL | X | X |
| 6032 | BL32 | E46 | 318Ci_M43/TU_COUPE | EUR_RL | X | X |
| 6051 | BL51 | E46 | 316Ci_M43/TU_COUPE | EUR_LL | X | X |
| 6111 | BM11 | E46 | 320Ci_M52/TU_COUPE | EUR_LL | X | X |
| 6121 | BN11 | E46 | 320Ci_M54_COUPE | EUR_LL | X | X |
| 6122 | BN12 | E46 | 320Ci_M54_COUPE | EUR_RL | X | X |
| 6131 | BM31 | E46 | 323Ci_M52/TU_COUPE | EUR_LL | X | X |
| 6132 | BM32 | E46 | 323Ci_M52/TU_COUPE | EUR_RL | X | X |
| 6133 | BM33 | E46 | 323Ci_M52/TU_COUPE | USA_LL | X | X |
| 6141 | BN31 | E46 | 325Ci_M54_COUPE | EUR_LL | X | X |
| 6142 | BN32 | E46 | 325Ci_M54_COUPE | EUR_RL | X | X |
| 6143 | BN33 | E46 | 325Ci_M54_COUPE | USA_LL | X | X |
| 6151 | BM51 | E46 | 328Ci_M52/TU_COUPE | EUR_LL | X | X |
| 6152 | BM52 | E46 | 328Ci_M52/TU_COUPE | EUR_RL | X | X |
| 6153 | BM53 | E46 | 328Ci_M52/TU_COUPE | USA_LL | X | X |
| 6161 | BN51 | E46 | 330Ci_M54_COUPE | EUR_LL | X | X |
| 6162 | BN52 | E46 | 330Ci_M54_COUPE | EUR_RL | X | X |
| 6163 | BN53 | E46 | 330Ci_M54_COUPE | USA_LL | X | X |
| 6191 | BL91 | E46 | M3_S54_COUPE | EUR_LL | X | X |
| 6192 | BL92 | E46 | M3_S54_COUPE | EUR_RL | X | X |
| 6193 | BL93 | E46 | M3_S54_COUPE | USA_LL | X | X |
| 6421 | BS11 | E46 | 320Ci_M54_CABRIO | EUR_LL | X | X |
| 6422 | BS12 | E46 | 320Ci_M54_CABRIO | EUR_RL | X | X |
| 6431 | BR31 | E46 | 323Ci_M52/TU_CABRIO | EUR_LL | X | X |
| 6432 | BR32 | E46 | 323Ci_M52/TU_CABRIO | EUR_RL | X | X |
| 6433 | BR33 | E46 | 323Ci_M52/TU_CABRIO | USA_LL | X | X |
| 6441 | BS31 | E46 | 325Ci_M54_CABRIO | EUR_LL | X | X |
| 6442 | BS32 | E46 | 325Ci_M54_CABRIO | EUR_RL | X | X |
| 6443 | BS33 | E46 | 325Ci_M54_CABRIO | USA_LL | X | X |
| 6461 | BS51 | E46 | 330Ci_M54_CABRIO | EUR_LL | X | X |
| 6462 | BS52 | E46 | 330Ci_M54_CABRIO | EUR_RL | X | X |
| 6463 | BS53 | E46 | 330Ci_M54_CABRIO | USA_LL | X | X |
| 6491 | BR91 | E46 | M3_S54_CABRIO | EUR_LL | X | X |
| 6492 | BR92 | E46 | M3_S54_CABRIO | EUR_RL | X | X |
| 6493 | BR93 | E46 | M3_S54_CABRIO | USA_LL | X | X |
| 6511 | AL11 | E46 | 316i_M43/TU_LIM | EUR_LL | X | X |
| 6512 | AL12 | E46 | 316i_M43/TU_LIM | EUR_RL | X | X |
| 6518 | AL18 | E46 | 318i_M43/TU_LIM | VNM_LL | X | X |
| 6531 | AL31 | E46 | 318i_M43/TU_LIM | EUR_LL | X | X |
| 6532 | AL32 | E46 | 318i_M43/TU_LIM | EUR_RL | X | X |
| 6534 | AL34 | E46 | 318i_M43/TU_LIM | MYS_RL | X | X |
| 6535 | AL35 | E46 | 318i_M43/TU_LIM | THA_RL | X | X |
| 6536 | AL36 | E46 | 318i_M43/TU_LIM | EGY_LL | X | X |
| 6537 | AL37 | E46 | 318i_M43/TU_LIM | IDN_RL | X | X |
| 6539 | AL39 | E46 | 318i_M43/TU_LIM | PHL_LL | X | X |
| 6541 | AV31 | E46 | 325i_M54_LIM | EUR_LL | X | X |
| 6542 | AV32 | E46 | 325i_M54_LIM | EUR_RL | X | X |
| 6543 | AV33 | E46 | 325i_M54_LIM | USA_LL | X | X |
| 6545 | AV35 | E46 | 325i_M54_LIM | MYS_RL | X | X |
| 6546 | AV36 | E46 | 325i_M54_LIM | IDN_RL | X | X |
| 6547 | AV37 | E46 | 325i_M54_LIM | PHL_LL | X | X |
| 6548 | AV38 | E46 | 325i_M54_LIM | VNM_LL | X | X |
| 6549 | AV39 | E46 | 325i_M54_LIM | MEX_LL | X | X |
| 6551 | AL51 | E46 | 316i_M43/TU_LIM | EUR_LL | X | X |
| 6555 | AL55 | E46 | 316i_M43/TU_LIM | PHL_LL | X | X |
| 6558 | AL58 | E46 | 318i_M43/TU_LIM | RUS_LL | X | X |
| 6561 | AV51 | E46 | 330i_M54_LIM | EUR_LL | X | X |
| 6562 | AV52 | E46 | 330i_M54_LIM | EUR_RL | X | X |
| 6563 | AV53 | E46 | 330i_M54_LIM | USA_LL | X | X |
| 6569 | AV59 | E46 | 330i_M54_LIM | MEX_LL | X | X |
| 6572 | AN72 | E46 | 316i_M43/TU_LIM | EUR_RL | X | X |
| 6591 | AN91 | E46 | 318i_M43/TU_LIM | EUR_LL | X | X |
| 6592 | AN92 | E46 | 318i_M43/TU_LIM | EUR_RL | X | X |
| 6611 | AM11 | E46 | 320i_M52/TU_LIM | EUR_LL | X | X |
| 6612 | AM12 | E46 | 320i_M52/TU_LIM | EUR_RL | X | X |
| 6621 | AV11 | E46 | 320i_M54_LIM | EUR_LL | X | X |
| 6622 | AV12 | E46 | 320i_M54_LIM | EUR_RL | X | X |
| 6623 | AV13 | E46 | 320i_M54_LIM | USA_LL | X | X |
| 6628 | AV18 | E46 | 320i_M54_LIM | RUS_LL | X | X |
| 6631 | AM31 | E46 | 323i_M52/TU_LIM | EUR_LL | X | X |
| 6632 | AM32 | E46 | 323i_M52/TU_LIM | EUR_RL | X | X |
| 6633 | AM33 | E46 | 323i_M52/TU_LIM | USA_LL | X | X |
| 6635 | AM35 | E46 | 323i_M52/TU_LIM | THA_RL | X | X |
| 6635 | ES35 | E46 | 323i_M52/TU_LIM | THA_RL | X | X |
| 6636 | AM36 | E46 | 323i_M52/TU_LIM | VNM_LL | X | X |
| 6637 | AM37 | E46 | 323i_M52/TU_LIM | IDN_RL | X | X |
| 6638 | AM38 | E46 | 323i_M52/TU_LIM | MEX_LL | X | X |
| 6639 | AM39 | E46 | 323i_M52/TU_LIM | PHL_LL | X | X |
| 6651 | AM51 | E46 | 328i_M52/TU_LIM | EUR_LL | X | X |
| 6652 | AM52 | E46 | 328i_M52/TU_LIM | EUR_RL | X | X |
| 6653 | AM53 | E46 | 328i_M52/TU_LIM | USA_LL | X | X |
| 6654 | AM54 | E46 | 328i_M52/TU_LIM | MYS_RL | X | X |
| 6657 | AM57 | E46 | 328i_M52/TU_LIM | MEX_LL | X | X |
| 6661 | AN15 | E46 | 320i_M54_LIM | EUR_LL | X | X |
| 6662 | AN16 | E46 | 320i_M54_LIM | EUR_RL | X | X |
| 6671 | AN11 | E46 | 320i_M52/TU_LIM | EUR_LL | X | X |
| 6672 | AN12 | E46 | 320i_M52/TU_LIM | EUR_RL | X | X |
| 66A1 | AN31 | E46 | 323i_M52/TU_LIM | EUR_LL | X | X |
| 66A2 | AN32 | E46 | 323i_M52/TU_LIM | EUR_RL | X | X |
| 66A3 | AN33 | E46 | 323i_M52/TU_LIM | USA_LL | X | X |
| 66B1 | AN35 | E46 | 325i_M54_LIM | EUR_LL | X | X |
| 66B2 | AN36 | E46 | 325i_M54_LIM | EUR_RL | X | X |
| 66B3 | AN37 | E46 | 325i_M54_LIM | USA_LL | X | X |
| 66C1 | AN51 | E46 | 328i_M52/TU_LIM | EUR_LL | X | X |
| 66C2 | AN52 | E46 | 328i_M52/TU_LIM | EUR_RL | X | X |
| 66D1 | AN55 | E46 | 330i_M54_LIM | EUR_LL | X | X |
| 66D2 | AN56 | E46 | 330i_M54_LIM | EUR_RL | X | X |
| 6722 | AV72 | E46 | 320d_M47_LIM | EUR_RL | X | X |
| 6771 | AL71 | E46 | 320d_M47_LIM | EUR_LL | X | X |
| 6772 | AL72 | E46 | 320d_M47_LIM | EUR_RL | X | X |
| 6781 | AL91 | E46 | 330d_M57_LIM | EUR_LL | X | X |
| 6782 | AL92 | E46 | 330d_M57_LIM | EUR_RL | X | X |
| 67A1 | AP71 | E46 | 320d_M47/TU_TOUR | EUR_LL | X | X |
| 67A2 | AP72 | E46 | 320d_M47/TU_TOUR | EUR_RL | X | X |
| 67B1 | AS71 | E46 | 320d_M47/TU_LIM | EUR_LL | X | X |
| 67B2 | AS72 | E46 | 320d_M47/TU_LIM | EUR_RL | X | X |
| 67C1 | AX71 | E46 | 320d_M47_TOUR | EUR_LL | X | X |
| 67C2 | AX72 | E46 | 320d_M47_TOUR | EUR_RL | X | X |
| 6831 | AP31 | E46 | 318i_M43/TU_TOUR | EUR_LL | X | X |
| 6832 | AP32 | E46 | 318i_M43/TU_TOUR | EUR_RL | X | X |
| 6891 | AP91 | E46 | 330d_M57_TOUR | EUR_LL | X | X |
| 6892 | AP92 | E46 | 330d_M57_TOUR | EUR_RL | X | X |
| 6911 | AR11 | E46 | 320i_M52/TU_TOUR | EUR_LL | X | X |
| 6921 | AW11 | E46 | 320i_M54_TOUR | EUR_LL | X | X |
| 6922 | AW12 | E46 | 320i_M54_TOUR | EUR_RL | X | X |
| 6933 | AR33 | E46 | 323i_M52/TU_TOUR | USA_LL | X | X |
| 6951 | AR51 | E46 | 328i_M52/TU_TOUR | EUR_LL | X | X |
| 6952 | AR52 | E46 | 328i_M52/TU_TOUR | EUR_RL | X | X |
| 6971 | AW31 | E46 | 325i_M54_TOUR | EUR_LL | X | X |
| 6972 | AW32 | E46 | 325i_M54_TOUR | EUR_RL | X | X |
| 6973 | AW33 | E46 | 325i_M54_TOUR | USA_LL | X | X |
| 6981 | AW51 | E46 | 330i_M54_TOUR | EUR_LL | X | X |
| 6982 | AW52 | E46 | 330i_M54_TOUR | EUR_RL | X | X |
| 6C11 | AT11 | E46 | 316ti_N40_COMP | EUR_LL | X | X |
| 6C21 | AT31 | E46 | 325ti_M54_COMP | EUR_LL | X | X |
| 6C22 | AT32 | E46 | 325ti_M54_COMP | EUR_RL | X | X |
| 6C31 | AT51 | E46 | 316ti_N42_COMP | EUR_LL | X | X |
| 6C32 | AT52 | E46 | 316ti_N42_COMP | EUR_RL | X | X |
| 6C41 | AT71 | E46 | 320td_M47/TU_COMP | EUR_LL | X | X |
| 6C42 | AT72 | E46 | 320td_M47/TU_COMP | EUR_RL | X | X |
| 6C71 | AU51 | E46 | 318ti_N42_COMP | EUR_LL | X | X |
| 6C72 | AU52 | E46 | 318ti_N42_COMP | EUR_RL | X | X |
| 6C83 | AU33 | E46 | 325ti_M56_COMP | USA_LL | X | O |
| 7011 | EJ11 | E52 | Z8_S62_ROADST | EUR_LL | X | O |
| 7013 | EJ13 | E52 | Z8_S62_ROADST | USA_LL | X | O |
| 8011 | FA11 | E53 | X5_3.0i_M54_GEFZG | EUR_LL | X | X |
| 8012 | FA12 | E53 | X5_3.0i_M54_GEFZG | EUR_RL | X | X |
| 8013 | FA13 | E53 | X5_3.0i_M54_GEFZG | USA_LL | X | X |
| 8051 | FA51 | E53 | X5_3.0i_M54_GEFZG | EUR_LL | X | X |
| 8052 | FA52 | E53 | X5_3.0i_M54_GEFZG | EUR_RL | X | X |
| 8053 | FA53 | E53 | X5_3.0i_M54_GEFZG | USA_LL | X | X |
| 8071 | FA71 | E53 | X5_3.0d_M57_GEFZG | EUR_LL | X | X |
| 8072 | FA72 | E53 | X5_3.0d_M57_GEFZG | EUR_RL | X | X |
| 8091 | FA91 | E53 | X5_4.8is_N62/S_GEFZG | EUR_LL | X | O |
| 8092 | FA92 | E53 | X5_4.8is_N62/S_GEFZG | EUR_RL | X | O |
| 8093 | FA93 | E53 | X5_4.8is_N62/S_GEFZG | USA_LL | X | O |
| 8131 | FB31 | E53 | X5_4.4i_M62/TU_GEFZG | EUR_LL | X | X |
| 8132 | FB32 | E53 | X5_4.4i_M62/TU_GEFZG | EUR_RL | X | X |
| 8133 | FB33 | E53 | X5_4.4i_M62/TU_GEFZG | USA_LL | X | X |
| 8151 | FB51 | E53 | X5_4.4i_N62_GEFZG | EUR_LL | X | X |
| 8152 | FB52 | E53 | X5_4.4i_N62_GEFZG | EUR_RL | X | X |
| 8153 | FB53 | E53 | X5_4.4i_N62_GEFZG | USA_LL | X | X |
| 8171 | FB71 | E53 | X5_3.0d_M57/TU_GEFZG | EUR_LL | X | X |
| 8172 | FB72 | E53 | X5_3.0d_M57/TU_GEFZG | EUR_RL | X | X |
| 8191 | FB91 | E53 | X5_4.6is_M62/TU_GEFZG | EUR_LL | X | X |
| 8192 | FB92 | E53 | X5_4.6is_M62/TU_GEFZG | EUR_RL | X | X |
| 8193 | FB93 | E53 | X5_4.6is_M62/TU_GEFZG | USA_LL | X | X |
| 8301 | 8301 | E93 | 325i_N53_CABRIO | EUR_LL | X | X |
| 8302 | 8302 | E93 | 325i_N53_CABRIO | EUR_RL | X | X |
| 8303 | 8303 | E93 | 325i_N51_CABRIO | USA_LL | X | O |
| 8304 | 8304 | E93 | 320i_N43_CABRIO | EUR_LL | X | O |
| 8305 | 8305 | E93 | 330Cd_M57/T2_CABRIO | EUR_LL | X | X |
| 8306 | 8306 | E93 | 335i_N54_CABRIO | EUR_LL | X | O |
| 8307 | 8307 | E93 | 320i_N43_CABRIO | EUR_RL | X | O |
| 8308 | 8308 | E93 | 330i_N52K_CABRIO | USA_LL | X | O |
| 8309 | 8309 | E93 | 320d_N47_CABRIO | EUR_LL | X | O |
| 8313 | 8313 | E93 | 335i_N54_CABRIO | USA_LL | X | X |
| 8321 | 8321 | RR2 | RR01_N73_CABRIO | EUR_LL | X | O |
| 8322 | 8322 | RR2 | RR01_N73_CABRIO | EUR_LL | X | O |
| 8323 | 8323 | RR2 | RR01_N73_CABRIO | EUR_LL | X | O |
| 8331 | 8331 | E81 | 116i_N45_COUPE | EUR_LL | X | O |
| 8332 | 8332 | E81 | 120i_N43_COUPE | EUR_LL | X | O |
| 8333 | 8333 | E81 | 120i_N43_COUPE | EUR_RL | X | O |
| 8334 | 8334 | E81 | 118d_N47_COUPE | EUR_LL | X | O |
| 8335 | 8335 | E81 | 118d_N47_COUPE | EUR_RL | X | O |
| 8338 | 8338 | E88 | 120i_N43_CABRIO | EUR_RL | X | O |
| 8339 | 8339 | E88 | 123d_N47S_CABRIO | EUR_LL | X | O |
| 8340 | 8340 | E88 | 120i_N43_CABRIO | EUR_LL | X | O |
| 8341 | 8341 | E88 | 116i_N43_CABRIO | EUR_LL | X | O |
| 8342 | 8342 | E88 | 116i_N43_CABRIO | EUR_RL | X | O |
| 8343 | 8343 | E88 | 130i_N52_CABRIO | EUR_LL | X | O |
| 8344 | 8344 | E88 | 130i_N52_CABRIO | EUR_RL | X | O |
| 8345 | 8345 | E88 | 120d_N47_CABRIO | EUR_LL | X | O |
| 8346 | 8346 | E88 | 120d_N47_CABRIO | EUR_RL | X | O |
| 8347 | 8347 | E88 | 135is_N54_CABRIO | USA_LL | X | O |
| 8348 | 8348 | E88 | 135is_N54_CABRIO | EUR_LL | X | O |
| 8349 | 8349 | E88 | 128i_N52K_CABRIO | USA_LL | X | O |
| 8350 | 8350 | E88 | 128i_N51_CABRIO | USA_LL | X | O |
| 8351 | 8351 | F01 | 760i_N74_LIM | USA_LL | X | O |
| 8352 | 8352 | E71 | X6_3.0si_N54_SC | USA_LL | X | O |
| 8353 | 8353 | E71 | X6_3.0sd_M57Y_SC | EUR_RL | X | O |
| 8354 | 8354 | E71 | X6_3.0sd_M57Y_SC | EUR_LL | X | O |
| 8355 | 8355 | E71 | X6_4.4si_N63_SC | EUR_LL | X | O |
| 8360 | 8360 | F01 | 740i_N54_LIM | EUR_LL | X | O |
| 8361 | 8361 | F01 | 740i_N54_LIM | EUR_RL | X | O |
| 8362 | 8362 | F01 | 750i_N63_LIM | EUR_LL | X | O |
| 8363 | 8363 | F01 | 750i_N63_LIM | EUR_RL | X | O |
| 8364 | 8364 | F01 | 750i_N63_LIM | USA_LL | X | O |
| 8365 | 8365 | F01 | 750xi_N63_LIM | EUR_LL | X | O |
| 8366 | 8366 | F01 | 750xi_N63_LIM | USA_LL | X | O |
| 8368 | 8368 | F01 | 735d_N57S_LIM | EUR_LL | X | O |
| 8369 | 8369 | F01 | 760i_N74_LIM | EUR_LL | X | O |
| 8370 | 8370 | F02 | 730Li_N52K_LIM | EUR_LL | X | O |
| 8371 | 8371 | F02 | 740Li_N54_LIM | EUR_LL | X | O |
| 8372 | 8372 | F02 | 750Li_N63_LIM | EUR_LL | X | O |
| 8373 | 8373 | F02 | 750Li_N63_LIM | USA_LL | X | O |
| 8374 | 8374 | F02 | 750Lxi_N63_LIM | EUR_LL | X | O |
| 8375 | 8375 | F02 | 750Lxi_N63_LIM | USA_LL | X | O |
| 8376 | 8376 | F02 | 760Li_N74_LIM | EUR_RL | X | O |
| 8377 | 8377 | F02 | 730Ld_N57_LIM | EUR_RL | X | O |
| 8378 | 8378 | F02 | 760Li_N74_LIM | EUR_LL | X | O |
| 8380 | 8380 | E89 | Z4_2.5i_N52K_ROADST | EUR_LL | X | O |
| 8381 | 8381 | E89 | Z4_2.5i_N52K_ROADST | EUR_RL | X | O |
| 8382 | 8382 | E89 | Z4_3.0i_N52K_ROADST | EUR_LL | X | O |
| 8383 | 8383 | E89 | Z4_3.0i_N52K_ROADST | EUR_RL | X | O |
| 8384 | 8384 | E89 | Z4_3.0i_N52K_ROADST | USA_LL | X | O |
| 8385 | 8385 | E89 | Z4_3.0si_N54_ROADST | EUR_LL | X | O |
| 8386 | 8386 | E89 | Z4_3.0si_N54_ROADST | EUR_RL | X | O |
| 8387 | 8387 | E89 | Z4_3.0si_N54_ROADST | USA_LL | X | O |
| 9011 | EJ11 | E52 | Z8_S62_ROADST | EUR_LL | X | O |
| 9013 | EJ13 | E52 | Z8_S62_ROADST | USA_LL | X | O |
| AA52 | AA52 | E52 | Z8_S62_ROADST | EUR_LL | X | O |
| AA89 | AA89 | RR1 | RR01_N73_LIM | EUR_LL | X | X |
| AA93 | AA93 | E65 | 730i_M54_LIM | EUR_LL | X | X |
| AL11 | AL11 | E46 | 316i_M43/TU_LIM | EUR_LL | X | X |
| AL12 | AL12 | E46 | 316i_M43/TU_LIM | EUR_RL | X | X |
| AL18 | AL18 | E46 | 318i_M43/TU_LIM | VNM_LL | X | X |
| AL31 | AL31 | E46 | 318i_M43/TU_LIM | EUR_LL | X | X |
| AL32 | AL32 | E46 | 318i_M43/TU_LIM | EUR_RL | X | X |
| AL34 | AL34 | E46 | 318i_M43/TU_LIM | MYS_RL | X | X |
| AL35 | AL35 | E46 | 318i_M43/TU_LIM | THA_RL | X | X |
| AL36 | AL36 | E46 | 318i_M43/TU_LIM | EGY_LL | X | X |
| AL37 | AL37 | E46 | 318i_M43/TU_LIM | IDN_RL | X | X |
| AL39 | AL39 | E46 | 318i_M43/TU_LIM | PHL_LL | X | X |
| AL51 | AL51 | E46 | 316i_M43/TU_LIM | EUR_LL | X | X |
| AL55 | AL55 | E46 | 316i_M43/TU_LIM | PHL_LL | X | X |
| AL58 | AL58 | E46 | 318i_M43/TU_LIM | RUS_LL | X | X |
| AL71 | AL71 | E46 | 320d_M47_LIM | EUR_LL | X | X |
| AL72 | AL72 | E46 | 320d_M47_LIM | EUR_RL | X | X |
| AL91 | AL91 | E46 | 330d_M57_LIM | EUR_LL | X | X |
| AL92 | AL92 | E46 | 330d_M57_LIM | EUR_RL | X | X |
| AM11 | AM11 | E46 | 320i_M52/TU_LIM | EUR_LL | X | X |
| AM12 | AM12 | E46 | 320i_M52/TU_LIM | EUR_RL | X | X |
| AM31 | AM31 | E46 | 323i_M52/TU_LIM | EUR_LL | X | X |
| AM32 | AM32 | E46 | 323i_M52/TU_LIM | EUR_RL | X | X |
| AM33 | AM33 | E46 | 323i_M52/TU_LIM | USA_LL | X | X |
| AM35 | AM35 | E46 | 323i_M52/TU_LIM | THA_RL | X | X |
| AM36 | AM36 | E46 | 323i_M52/TU_LIM | VNM_LL | X | X |
| AM37 | AM37 | E46 | 323i_M52/TU_LIM | IDN_RL | X | X |
| AM38 | AM38 | E46 | 323i_M52/TU_LIM | MEX_LL | X | X |
| AM39 | AM39 | E46 | 323i_M52/TU_LIM | PHL_LL | X | X |
| AM51 | AM51 | E46 | 328i_M52/TU_LIM | EUR_LL | X | X |
| AM52 | AM52 | E46 | 328i_M52/TU_LIM | EUR_RL | X | X |
| AM53 | AM53 | E46 | 328i_M52/TU_LIM | USA_LL | X | X |
| AM54 | AM54 | E46 | 328i_M52/TU_LIM | MYS_RL | X | X |
| AM57 | AM57 | E46 | 328i_M52/TU_LIM | MEX_LL | X | X |
| AN11 | AN11 | E46 | 320i_M52/TU_LIM | EUR_LL | X | X |
| AN12 | AN12 | E46 | 320i_M52/TU_LIM | EUR_RL | X | X |
| AN15 | AN15 | E46 | 320i_M54_LIM | EUR_LL | X | X |
| AN16 | AN16 | E46 | 320i_M54_LIM | EUR_RL | X | X |
| AN31 | AN31 | E46 | 323i_M52/TU_LIM | EUR_LL | X | X |
| AN32 | AN32 | E46 | 323i_M52/TU_LIM | EUR_RL | X | X |
| AN33 | AN33 | E46 | 323i_M52/TU_LIM | USA_LL | X | X |
| AN35 | AN35 | E46 | 325i_M54_LIM | EUR_LL | X | X |
| AN36 | AN36 | E46 | 325i_M54_LIM | EUR_RL | X | X |
| AN37 | AN37 | E46 | 325i_M54_LIM | USA_LL | X | X |
| AN51 | AN51 | E46 | 328i_M52/TU_LIM | EUR_LL | X | X |
| AN52 | AN52 | E46 | 328i_M52/TU_LIM | EUR_RL | X | X |
| AN55 | AN55 | E46 | 330i_M54_LIM | EUR_LL | X | X |
| AN56 | AN56 | E46 | 330i_M54_LIM | EUR_RL | X | X |
| AN72 | AN72 | E46 | 316i_M43/TU_LIM | EUR_RL | X | X |
| AN91 | AN91 | E46 | 318i_M43/TU_LIM | EUR_LL | X | X |
| AN92 | AN92 | E46 | 318i_M43/TU_LIM | EUR_RL | X | X |
| AP31 | AP31 | E46 | 318i_M43/TU_TOUR | EUR_LL | X | X |
| AP32 | AP32 | E46 | 318i_M43/TU_TOUR | EUR_RL | X | X |
| AP71 | AP71 | E46 | 320d_M47/TU_TOUR | EUR_LL | X | X |
| AP72 | AP72 | E46 | 320d_M47/TU_TOUR | EUR_RL | X | X |
| AP91 | AP91 | E46 | 330d_M57_TOUR | EUR_LL | X | X |
| AP92 | AP92 | E46 | 330d_M57_TOUR | EUR_RL | X | X |
| AR11 | AR11 | E46 | 320i_M52/TU_TOUR | EUR_LL | X | X |
| AR33 | AR33 | E46 | 323i_M52/TU_TOUR | USA_LL | X | X |
| AR51 | AR51 | E46 | 328i_M52/TU_TOUR | EUR_LL | X | X |
| AR52 | AR52 | E46 | 328i_M52/TU_TOUR | EUR_RL | X | X |
| AS71 | AS71 | E46 | 320d_M47/TU_LIM | EUR_LL | X | X |
| AS72 | AS72 | E46 | 320d_M47/TU_LIM | EUR_RL | X | X |
| AT11 | AT11 | E46 | 316ti_N40_COMP | EUR_LL | X | X |
| AT31 | AT31 | E46 | 325ti_M54_COMP | EUR_LL | X | X |
| AT32 | AT32 | E46 | 325ti_M54_COMP | EUR_RL | X | X |
| AT51 | AT51 | E46 | 316ti_N42_COMP | EUR_LL | X | X |
| AT52 | AT52 | E46 | 316ti_N42_COMP | EUR_RL | X | X |
| AT71 | AT71 | E46 | 320td_M47/TU_COMP | EUR_LL | X | X |
| AT72 | AT72 | E46 | 320td_M47/TU_COMP | EUR_RL | X | X |
| AT91 | AT91 | E46 | 318td_M47/TU_COMP | EUR_LL | X | X |
| AU51 | AU51 | E46 | 318ti_N42_COMP | EUR_LL | X | X |
| AU52 | AU52 | E46 | 318ti_N42_COMP | EUR_RL | X | X |
| AV11 | AV11 | E46 | 320i_M54_LIM | EUR_LL | X | X |
| AV12 | AV12 | E46 | 320i_M54_LIM | EUR_RL | X | X |
| AV13 | AV13 | E46 | 320i_M54_LIM | USA_LL | X | X |
| AV18 | AV18 | E46 | 320i_M54_LIM | RUS_LL | X | X |
| AV31 | AV31 | E46 | 325i_M54_LIM | EUR_LL | X | X |
| AV32 | AV32 | E46 | 325i_M54_LIM | EUR_RL | X | X |
| AV33 | AV33 | E46 | 325i_M54_LIM | USA_LL | X | X |
| AV35 | AV35 | E46 | 325i_M54_LIM | MYS_RL | X | X |
| AV36 | AV36 | E46 | 325i_M54_LIM | IDN_RL | X | X |
| AV37 | AV37 | E46 | 325i_M54_LIM | PHL_LL | X | X |
| AV38 | AV38 | E46 | 325i_M54_LIM | VNM_LL | X | X |
| AV39 | AV39 | E46 | 325i_M54_LIM | MEX_LL | X | X |
| AV51 | AV51 | E46 | 330i_M54_LIM | EUR_LL | X | X |
| AV52 | AV52 | E46 | 330i_M54_LIM | EUR_RL | X | X |
| AV53 | AV53 | E46 | 330i_M54_LIM | USA_LL | X | X |
| AV59 | AV59 | E46 | 330i_M54_LIM | MEX_LL | X | X |
| AV72 | AV72 | E46 | 320d_M47_LIM | EUR_RL | X | X |
| AW11 | AW11 | E46 | 320i_M54_TOUR | EUR_LL | X | X |
| AW12 | AW12 | E46 | 320i_M54_TOUR | EUR_RL | X | X |
| AW31 | AW31 | E46 | 325i_M54_TOUR | EUR_LL | X | X |
| AW32 | AW32 | E46 | 325i_M54_TOUR | EUR_RL | X | X |
| AW33 | AW33 | E46 | 325i_M54_TOUR | USA_LL | X | X |
| AW51 | AW51 | E46 | 330i_M54_TOUR | EUR_LL | X | X |
| AW52 | AW52 | E46 | 330i_M54_TOUR | EUR_RL | X | X |
| AX13 | AX13 | E46 | 325i_M56_TOUR | USA_LL | X | X |
| AX31 | AX31 | E46 | 316i_N42_TOUR | EUR_LL | X | X |
| AX32 | AX32 | E46 | 316i_N42_TOUR | EUR_RL | X | X |
| AX51 | AX51 | E46 | 318i_N42_TOUR | EUR_LL | X | X |
| AX52 | AX52 | E46 | 318i_N42_TOUR | EUR_RL | X | X |
| AX71 | AX71 | E46 | 320d_M47_TOUR | EUR_LL | X | X |
| AX72 | AX72 | E46 | 320d_M47_TOUR | EUR_RL | X | X |
| AY11 | AY11 | E46 | 316i_N40_LIM | EUR_LL | X | X |
| AY15 | AY15 | E46 | 316i_N40_LIM | PHL_LL | X | X |
| AY31 | AY31 | E46 | 316i_N42_LIM | EUR_LL | X | X |
| AY32 | AY32 | E46 | 316i_N42_LIM | EUR_RL | X | X |
| AY71 | AY71 | E46 | 318i_N42_LIM | EUR_LL | X | X |
| AY72 | AY72 | E46 | 318i_N42_LIM | EUR_RL | X | X |
| AY74 | AY74 | E46 | 318i_N42_LIM | MYS_RL | X | X |
| AY75 | AY75 | E46 | 318i_N42_LIM | THA_RL | X | X |
| AY76 | AY76 | E46 | 318i_N42_LIM | EGY_LL | X | X |
| AY77 | AY77 | E46 | 318i_N42_LIM | IDN_RL | X | X |
| AY78 | AY78 | E46 | 318i_N42_LIM | VNM_LL | X | X |
| AY79 | AY79 | E46 | 318i_N42_LIM | PHL_LL | X | X |
| AY91 | AY91 | E46 | 320i_M52/TU_LIM | EUR_LL | X | X |
| AY96 | AY96 | E46 | 318i_N42_LIM | EGY_LL | X | X |
| AY97 | AY97 | E46 | 318i_N42_LIM | CHN_LL | X | X |
| AY98 | AY98 | E46 | 318i_N42_LIM | RUS_LL | X | X |
| AZ12 | AZ12 | E46 | 320d_M47/TU_LIM | EUR_RL | X | X |
| AZ33 | AZ33 | E46 | 325i_M56_LIM | USA_LL | X | X |
| AZ71 | AZ71 | E46 | 318i_N42_LIM | EUR_LL | X | X |
| AZ72 | AZ72 | E46 | 318i_N42_LIM | EUR_RL | X | X |
| AZ96 | AZ96 | E46 | 325i_M54_LIM | EGY_LL | X | X |
| B011 | RA11 | R50 | MINI_ONE_W10_COUPE | EUR_LL | X | X |
| B012 | RA12 | R50 | MINI_ONE_W10_COUPE | EUR_RL | X | X |
| B031 | RA31 | R50 | MINI_ONE_W10_COUPE | EUR_LL | X | X |
| B032 | RA32 | R50 | MINI_ONE_W10_COUPE | EUR_RL | X | X |
| B111 | RB11 | R50 | MINI_ONE_W17_COUPE | EUR_LL | X | X |
| B112 | RB12 | R50 | MINI_ONE_W17_COUPE | EUR_RL | X | X |
| B131 | RD31 | R52 | MINI_ONE_W10_CABRIO | EUR_LL | X | X |
| B132 | RD32 | R52 | MINI_ONE_W10_CABRIO | EUR_RL | X | X |
| B231 | RC31 | R50 | COOPER_W10_COUPE | EUR_LL | X | X |
| B232 | RC32 | R50 | COOPER_W10_COUPE | EUR_RL | X | X |
| B233 | RC33 | R50 | COOPER_W10_COUPE | USA_LL | X | X |
| B331 | RF31 | R52 | COOPER_W10_CABRIO | EUR_LL | X | X |
| B332 | RF32 | R52 | COOPER_W10_CABRIO | EUR_RL | X | X |
| B333 | RF33 | R52 | COOPER_W10_CABRIO | USA_LL | X | X |
| B431 | RE31 | R53 | COOPER_S_W11_COUPE | EUR_LL | X | X |
| B432 | RE32 | R53 | COOPER_S_W11_COUPE | EUR_RL | X | X |
| B433 | RE33 | R53 | COOPER_S_W11_COUPE | USA_LL | X | X |
| B491 | RE91 | R53 | COOPER_S_W11_COUPE | EUR_LL | X | X |
| B492 | RE92 | R53 | COOPER_S_W11_COUPE | EUR_RL | X | X |
| B493 | RE93 | R53 | COOPER_S_W11_COUPE | USA_LL | X | X |
| B531 | RH31 | R52 | COOPER_S_W11_CABRIO | EUR_LL | X | X |
| B532 | RH32 | R52 | COOPER_S_W11_CABRIO | EUR_RL | X | X |
| B533 | RH33 | R52 | COOPER_S_W11_CABRIO | USA_LL | X | X |
| BD11 | BD11 | E46 | 320Ci_M54_COUPE | EUR_LL | X | X |
| BD12 | BD12 | E46 | 320Ci_M54_COUPE | EUR_RL | X | X |
| BD31 | BD31 | E46 | 325Ci_M54_COUPE | EUR_LL | X | X |
| BD32 | BD32 | E46 | 325Ci_M54_COUPE | EUR_RL | X | X |
| BD33 | BD33 | E46 | 325Ci_M54_COUPE | USA_LL | X | X |
| BD51 | BD51 | E46 | 330Ci_M54_COUPE | EUR_LL | X | X |
| BD52 | BD52 | E46 | 330Ci_M54_COUPE | EUR_RL | X | X |
| BD53 | BD53 | E46 | 330Ci_M54_COUPE | USA_LL | X | X |
| BD71 | BD71 | E46 | 316Ci_N40_COUPE | EUR_LL | X | X |
| BD91 | BD91 | E46 | 318Ci_N42_COUPE | EUR_LL | X | X |
| BD92 | BD92 | E46 | 318Ci_N42_COUPE | EUR_RL | X | X |
| BL31 | BL31 | E46 | 318Ci_M43/TU_COUPE | EUR_LL | X | X |
| BL32 | BL32 | E46 | 318Ci_M43/TU_COUPE | EUR_RL | X | X |
| BL51 | BL51 | E46 | 316Ci_M43/TU_COUPE | EUR_LL | X | X |
| BL91 | BL91 | E46 | M3_S54_COUPE | EUR_LL | X | X |
| BL92 | BL92 | E46 | M3_S54_COUPE | EUR_RL | X | X |
| BL93 | BL93 | E46 | M3_S54_COUPE | USA_LL | X | X |
| BL95 | BL95 | E46 | M3_S54_COUPE | EUR_LL | X | X |
| BL96 | BL96 | E46 | M3_S54_COUPE | EUR_RL | X | X |
| BM11 | BM11 | E46 | 320Ci_M52/TU_COUPE | EUR_LL | X | X |
| BM31 | BM31 | E46 | 323Ci_M52/TU_COUPE | EUR_LL | X | X |
| BM32 | BM32 | E46 | 323Ci_M52/TU_COUPE | EUR_RL | X | X |
| BM33 | BM33 | E46 | 323Ci_M52/TU_COUPE | USA_LL | X | X |
| BM51 | BM51 | E46 | 328Ci_M52/TU_COUPE | EUR_LL | X | X |
| BM52 | BM52 | E46 | 328Ci_M52/TU_COUPE | EUR_RL | X | X |
| BM53 | BM53 | E46 | 328Ci_M52/TU_COUPE | USA_LL | X | X |
| BM71 | BM71 | E46 | 316Ci_N40_COUPE | EUR_LL | X | X |
| BN11 | BN11 | E46 | 320Ci_M54_COUPE | EUR_LL | X | X |
| BN12 | BN12 | E46 | 320Ci_M54_COUPE | EUR_RL | X | X |
| BN31 | BN31 | E46 | 325Ci_M54_COUPE | EUR_LL | X | X |
| BN32 | BN32 | E46 | 325Ci_M54_COUPE | EUR_RL | X | X |
| BN33 | BN33 | E46 | 325Ci_M54_COUPE | USA_LL | X | X |
| BN51 | BN51 | E46 | 330Ci_M54_COUPE | EUR_LL | X | X |
| BN52 | BN52 | E46 | 330Ci_M54_COUPE | EUR_RL | X | X |
| BN53 | BN53 | E46 | 330Ci_M54_COUPE | USA_LL | X | X |
| BN73 | BN73 | E46 | 325Ci_M56_COUPE | USA_LL | X | X |
| BP71 | BP71 | E46 | 318Ci_N42_CABRIO | EUR_LL | X | X |
| BP72 | BP72 | E46 | 318Ci_N42_CABRIO | EUR_RL | X | X |
| BR31 | BR31 | E46 | 323Ci_M52/TU_CABRIO | EUR_LL | X | X |
| BR32 | BR32 | E46 | 323Ci_M52/TU_CABRIO | EUR_RL | X | X |
| BR33 | BR33 | E46 | 323Ci_M52/TU_CABRIO | USA_LL | X | X |
| BR91 | BR91 | E46 | M3_S54_CABRIO | EUR_LL | X | X |
| BR92 | BR92 | E46 | M3_S54_CABRIO | EUR_RL | X | X |
| BR93 | BR93 | E46 | M3_S54_CABRIO | USA_LL | X | X |
| BS11 | BS11 | E46 | 320Ci_M54_CABRIO | EUR_LL | X | X |
| BS12 | BS12 | E46 | 320Ci_M54_CABRIO | EUR_RL | X | X |
| BS31 | BS31 | E46 | 325Ci_M54_CABRIO | EUR_LL | X | X |
| BS32 | BS32 | E46 | 325Ci_M54_CABRIO | EUR_RL | X | X |
| BS33 | BS33 | E46 | 325Ci_M54_CABRIO | USA_LL | X | X |
| BS51 | BS51 | E46 | 330Ci_M54_CABRIO | EUR_LL | X | X |
| BS52 | BS52 | E46 | 330Ci_M54_CABRIO | EUR_RL | X | X |
| BS53 | BS53 | E46 | 330Ci_M54_CABRIO | USA_LL | X | X |
| BS71 | BS71 | E46 | 320Cd_M47/TU_CABRIO | EUR_LL | X | X |
| BS72 | BS72 | E46 | 320Cd_M47/TU_CABRIO | EUR_RL | X | X |
| BT11 | BT11 | E85 | Z4_2.2i_M54_ROADST | EUR_LL | X | X |
| BT12 | BT12 | E85 | Z4_2.2i_M54_ROADST | EUR_RL | X | X |
| BT31 | BT31 | E85 | Z4_2.5i_M54_ROADST | EUR_LL | X | X |
| BT32 | BT32 | E85 | Z4_2.5i_M54_ROADST | EUR_RL | X | X |
| BT33 | BT33 | E85 | Z4_2.5i_M54_ROADST | USA_LL | X | X |
| BT51 | BT51 | E85 | Z4_3.0i_M54_ROADST | EUR_LL | X | X |
| BT52 | BT52 | E85 | Z4_3.0i_M54_ROADST | EUR_RL | X | X |
| BT53 | BT53 | E85 | Z4_3.0i_M54_ROADST | USA_LL | X | X |
| BT91 | BT91 | E85 | Z4_S54_ROADST | EUR_LL | X | X |
| BT92 | BT92 | E85 | Z4_S54_ROADST | EUR_RL | X | X |
| BT93 | BT93 | E85 | Z4_S54_ROADST | USA_LL | X | X |
| BU11 | BU11 | E85 | Z4_2.5i_N52_ROADST | EUR_LL | X | X |
| BU12 | BU12 | E85 | Z4_2.5i_N52_ROADST | EUR_RL | X | X |
| BU31 | BU31 | E85 | Z4_2.5si_N52_ROADST | EUR_LL | X | X |
| BU32 | BU32 | E85 | Z4_2.5si_N52_ROADST | EUR_RL | X | X |
| BU33 | BU33 | E85 | Z4_3.0i_N52_ROADST | USA_LL | X | X |
| BU51 | BU51 | E85 | Z4_3.0si_N52_ROADST | EUR_LL | X | X |
| BU52 | BU52 | E85 | Z4_3.0si_N52_ROADST | EUR_RL | X | X |
| BU53 | BU53 | E85 | Z4_3.0si_N52_ROADST | USA_LL | X | X |
| BV13 | BV13 | E46 | 325Ci_M56_COUPE | USA_LL | X | X |
| BV51 | BV51 | E46 | 320Cd_M47/TU_COUPE | EUR_LL | X | X |
| BV52 | BV52 | E46 | 320Cd_M47/TU_COUPE | EUR_RL | X | X |
| BV71 | BV71 | E46 | 318Ci_N42_COUPE | EUR_LL | X | X |
| BV72 | BV72 | E46 | 318Ci_N42_COUPE | EUR_RL | X | X |
| BV91 | BV91 | E46 | 330Cd_M57/TU_COUPE | EUR_LL | X | X |
| BV92 | BV92 | E46 | 330Cd_M57/TU_COUPE | EUR_RL | X | X |
| BW11 | BW11 | E46 | 320Ci_M54_CABRIO | EUR_LL | X | X |
| BW12 | BW12 | E46 | 320Ci_M54_CABRIO | EUR_RL | X | X |
| BW31 | BW31 | E46 | 325Ci_M54_CABRIO | EUR_LL | X | X |
| BW32 | BW32 | E46 | 325Ci_M54_CABRIO | EUR_RL | X | X |
| BW33 | BW33 | E46 | 325Ci_M54_CABRIO | USA_LL | X | X |
| BW51 | BW51 | E46 | 330Ci_M54_CABRIO | EUR_LL | X | X |
| BW52 | BW52 | E46 | 330Ci_M54_CABRIO | EUR_RL | X | X |
| BW53 | BW53 | E46 | 330Ci_M54_CABRIO | USA_LL | X | X |
| BW71 | BW71 | E46 | 318Ci_N42_CABRIO | EUR_LL | X | X |
| BW72 | BW72 | E46 | 318Ci_N42_CABRIO | EUR_RL | X | X |
| BW91 | BW91 | E46 | 330Cd_M57/TU_CABRIO | EUR_LL | X | X |
| BW92 | BW92 | E46 | 330Cd_M57/TU_CABRIO | EUR_RL | X | X |
| BX71 | BX71 | E46 | 316Ci_N45_COUPE | EUR_LL | X | X |
| BX91 | BX91 | E46 | 318Ci_N46_COUPE | EUR_LL | X | X |
| BX92 | BX92 | E46 | 318Ci_N46_COUPE | EUR_RL | X | X |
| BY71 | BY71 | E46 | 318Ci_N46_CABRIO | EUR_LL | X | X |
| BY72 | BY72 | E46 | 318Ci_N46_CABRIO | EUR_RL | X | X |
| BZ11 | BZ11 | E85 | Z4_2.0i_N46_ROADST | EUR_LL | X | X |
| BZ12 | BZ12 | E85 | Z4_2.0i_N46_ROADST | EUR_RL | X | X |
| CH03 | CH03 | E36 | Z3_M52/TU_ROADST | USA_LL | X | X |
| CK62 | CK62 | E36 | Z3_M52/TU_COUPE | EUR_RL | X | O |
| CK63 | CK63 | E36 | Z3_M52/TU_COUPE | USA_LL | X | O |
| DA51 | DA51 | E39 | 518i_M_N42_LIM | EUR_LL | X | O |
| DA52 | DA52 | E39 | 518i_M_N42_LIM | EUR_RL | X | O |
| DA61 | DA61 | E39 | 518i_A_N42_LIM | EUR_LL | X | O |
| DA62 | DA62 | E39 | 518i_A_N42_LIM | EUR_RL | X | O |
| DG51 | DG51 | E39 | 518i_M_N42_TOUR | EUR_LL | X | O |
| DG52 | DG52 | E39 | 518i_M_N42_TOUR | EUR_RL | X | O |
| DG61 | DG61 | E39 | 518i_A_N42_TOUR | EUR_LL | X | O |
| DG62 | DG62 | E39 | 518i_A_N42_TOUR | EUR_RL | X | O |
| DU51 | DU51 | E86 | Z4_3.0si_N52_COUPE | EUR_LL | X | O |
| DU52 | DU52 | E86 | Z4_3.0si_N52_COUPE | EUR_RL | X | O |
| DU53 | DU53 | E86 | Z4_3.0si_N52_COUPE | USA_LL | X | O |
| DU91 | DU91 | E86 | Z4_S54_COUPE | EUR_LL | X | X |
| DU92 | DU92 | E86 | Z4_S54_COUPE | EUR_RL | X | X |
| DU93 | DU93 | E86 | Z4_S54_COUPE | USA_LL | X | X |
| EA11 | EA11 | E63 | 630i_N52K_COUPE | EUR_LL | X | O |
| EA12 | EA12 | E63 | 630i_N52K_COUPE | EUR_RL | X | O |
| EA31 | EA31 | E63 | 630i_N53_COUPE | EUR_LL | X | O |
| EA32 | EA32 | E63 | 630i_N53_COUPE | EUR_RL | X | O |
| EA51 | EA51 | E63 | 650i_N62/TU_COUPE | EUR_LL | X | X |
| EA52 | EA52 | E63 | 650i_N62/TU_COUPE | EUR_RL | X | X |
| EA53 | EA53 | E63 | 650i_N62/TU_COUPE | USA_LL | X | X |
| EA71 | EA71 | E63 | 635d_M57Y_COUPE | EUR_LL | X | O |
| EA72 | EA72 | E63 | 635d_M57Y_COUPE | EUR_RL | X | O |
| EB11 | EB11 | E64 | 630i_N52K_CABRIO | EUR_LL | X | O |
| EB12 | EB12 | E64 | 630i_N52K_CABRIO | EUR_RL | X | O |
| EB31 | EB31 | E64 | 630i_N53_CABRIO | EUR_LL | X | O |
| EB32 | EB32 | E64 | 630i_N53_CABRIO | EUR_RL | X | O |
| EB51 | EB51 | E64 | 650i_N62/TU_CABRIO | EUR_LL | X | X |
| EB52 | EB52 | E64 | 650i_N62/TU_CABRIO | EUR_RL | X | X |
| EB53 | EB53 | E64 | 650i_N62/TU_CABRIO | USA_LL | X | X |
| EB71 | EB71 | E64 | 635d_M57Y_CABRIO | EUR_LL | X | O |
| EB72 | EB72 | E64 | 635d_M57Y_CABRIO | EUR_RL | X | O |
| ED71 | ED71 | E46 | 330xd_M57/TU_LIM | EUR_LL | X | X |
| ED91 | ED91 | E46 | 330d_M57/TU_LIM | EUR_LL | X | X |
| ED92 | ED92 | E46 | 330d_M57/TU_LIM | EUR_RL | X | X |
| EH11 | EH11 | E63 | 650i_N62/TU_COUPE | EUR_LL | X | X |
| EH12 | EH12 | E63 | 650i_N62/TU_COUPE | EUR_RL | X | X |
| EH13 | EH13 | E63 | 650i_N62/TU_COUPE | USA_LL | X | X |
| EH31 | EH31 | E63 | 630i_N52_COUPE | EUR_LL | X | X |
| EH32 | EH32 | E63 | 630i_N52_COUPE | EUR_RL | X | X |
| EH71 | EH71 | E63 | 645Ci_N62_COUPE | EUR_LL | X | X |
| EH72 | EH72 | E63 | 645Ci_N62_COUPE | EUR_RL | X | X |
| EH73 | EH73 | E63 | 645Ci_N62_COUPE | USA_LL | X | X |
| EH91 | EH91 | E63 | M6_S85_COUPE | EUR_LL | X | X |
| EH92 | EH92 | E63 | M6_S85_COUPE | EUR_RL | X | X |
| EH93 | EH93 | E63 | M6_S85_COUPE | USA_LL | X | X |
| EJ11 | EJ11 | E52 | Z8_S62_ROADST | EUR_LL | X | O |
| EJ13 | EJ13 | E52 | Z8_S62_ROADST | USA_LL | X | O |
| EJ92 | EJ92 | E46 | 330d_M57/TU_LIM | EUR_RL | X | X |
| EK11 | EK11 | E64 | 650i_N62/TU_CABRIO | EUR_LL | X | X |
| EK12 | EK12 | E64 | 650i_N62/TU_CABRIO | EUR_RL | X | X |
| EK13 | EK13 | E64 | 650i_N62/TU_CABRIO | USA_LL | X | X |
| EK31 | EK31 | E64 | 630i_N52_CABRIO | EUR_LL | X | X |
| EK32 | EK32 | E64 | 630i_N52_CABRIO | EUR_RL | X | X |
| EK71 | EK71 | E64 | 645Ci_N62_CABRIO | EUR_LL | X | X |
| EK72 | EK72 | E64 | 645Ci_N62_CABRIO | EUR_RL | X | X |
| EK73 | EK73 | E64 | 645Ci_N62_CABRIO | USA_LL | X | X |
| EK91 | EK91 | E64 | M6_S85_CABRIO | EUR_LL | X | X |
| EK92 | EK92 | E64 | M6_S85_CABRIO | EUR_RL | X | X |
| EK93 | EK93 | E64 | M6_S85_CABRIO | USA_LL | X | X |
| EL51 | EL51 | E46 | 318d_M47_TOUR | EUR_LL | X | X |
| EL71 | EL71 | E46 | 318d_M47/TU_TOUR | EUR_LL | X | X |
| EL72 | EL72 | E46 | 318d_M47/TU_TOUR | EUR_RL | X | X |
| EL91 | EL91 | E46 | 330d_M57_TOUR | EUR_LL | X | X |
| EL92 | EL92 | E46 | 330d_M57_TOUR | EUR_RL | X | X |
| EN11 | EN11 | E46 | 320i_M54_TOUR | EUR_LL | X | X |
| EN12 | EN12 | E46 | 320i_M54_TOUR | EUR_RL | X | X |
| EN31 | EN31 | E46 | 325i_M54_TOUR | EUR_LL | X | X |
| EN32 | EN32 | E46 | 325i_M54_TOUR | EUR_RL | X | X |
| EN33 | EN33 | E46 | 325i_M54_TOUR | USA_LL | X | X |
| EN51 | EN51 | E46 | 330i_M54_TOUR | EUR_LL | X | X |
| EN52 | EN52 | E46 | 330i_M54_TOUR | EUR_RL | X | X |
| EP31 | EP31 | E46 | 325xi_M54_TOUR | EUR_LL | X | X |
| EP33 | EP33 | E46 | 325xi_M54_TOUR | USA_LL | X | X |
| EP51 | EP51 | E46 | 330xi_M54_TOUR | EUR_LL | X | X |
| EP71 | EP71 | E46 | 330xd_M57_TOUR | EUR_LL | X | X |
| ER11 | ER11 | E46 | 316i_M43/TU_LIM | EUR_LL | X | X |
| ER12 | ER12 | E46 | 316i_M43/TU_LIM | EUR_RL | X | X |
| ER51 | ER51 | E46 | 316i_M43/TU_LIM | EUR_LL | X | X |
| ER55 | ER55 | E46 | 316i_M43/TU_LIM | PHL_LL | X | X |
| ER91 | ER91 | E46 | 330d_M57_LIM | EUR_LL | X | X |
| ER92 | ER92 | E46 | 330d_M57_LIM | EUR_RL | X | X |
| ES35 | ES35 | E46 | 323i_M52/TU_LIM | THA_RL | X | X |
| ES92 | ES92 | E46 | 330d_M57_LIM | EUR_RL | X | X |
| ET15 | ET15 | E46 | 320i_M54_LIM | EUR_LL | X | X |
| ET16 | ET16 | E46 | 320i_M54_LIM | EUR_RL | X | X |
| ET35 | ET35 | E46 | 325i_M54_LIM | EUR_LL | X | X |
| ET36 | ET36 | E46 | 325i_M54_LIM | EUR_RL | X | X |
| ET37 | ET37 | E46 | 325i_M54_LIM | USA_LL | X | X |
| ET55 | ET55 | E46 | 330i_M54_LIM | EUR_LL | X | X |
| ET56 | ET56 | E46 | 330i_M54_LIM | EUR_RL | X | X |
| ET57 | ET57 | E46 | 330i_M54_LIM | USA_LL | X | X |
| ET75 | ET75 | E46 | 318i_N46_LIM | EUR_LL | X | X |
| ET76 | ET76 | E46 | 318i_N46_LIM | EUR_RL | X | X |
| EU31 | EU31 | E46 | 325xi_M54_LIM | EUR_LL | X | X |
| EU33 | EU33 | E46 | 325xi_M54_LIM | USA_LL | X | X |
| EU51 | EU51 | E46 | 318d_M47_LIM | EUR_LL | X | X |
| EU71 | EU71 | E46 | 318d_M47/TU_LIM | EUR_LL | X | X |
| EU72 | EU72 | E46 | 318d_M47/TU_LIM | EUR_RL | X | X |
| EV11 | EV11 | E46 | 320i_M54_LIM | EUR_LL | X | X |
| EV12 | EV12 | E46 | 320i_M54_LIM | EUR_RL | X | X |
| EV13 | EV13 | E46 | 320i_M54_LIM | USA_LL | X | X |
| EV18 | EV18 | E46 | 320i_M54_LIM | RUS_LL | X | X |
| EV19 | EV19 | E46 | 325i_M54_LIM | CHN_LL | X | X |
| EV31 | EV31 | E46 | 325i_M54_LIM | EUR_LL | X | X |
| EV32 | EV32 | E46 | 325i_M54_LIM | EUR_RL | X | X |
| EV33 | EV33 | E46 | 325i_M54_LIM | USA_LL | X | X |
| EV34 | EV34 | E46 | 325i_M54_LIM | THA_RL | X | X |
| EV35 | EV35 | E46 | 325i_M54_LIM | MYS_RL | X | X |
| EV36 | EV36 | E46 | 325i_M54_LIM | IDN_RL | X | X |
| EV37 | EV37 | E46 | 325i_M54_LIM | PHL_LL | X | X |
| EV38 | EV38 | E46 | 325i_M54_LIM | VNM_LL | X | X |
| EV39 | EV39 | E46 | 325i_M54_LIM | MEX_LL | X | X |
| EV51 | EV51 | E46 | 330i_M54_LIM | EUR_LL | X | X |
| EV52 | EV52 | E46 | 330i_M54_LIM | EUR_RL | X | X |
| EV53 | EV53 | E46 | 330i_M54_LIM | USA_LL | X | X |
| EV55 | EV55 | E46 | 330i_M54_LIM | THA_RL | X | X |
| EV57 | EV57 | E46 | 330i_M54_LIM | CHN_LL | X | X |
| EV59 | EV59 | E46 | 330i_M54_LIM | MEX_LL | X | X |
| EV91 | EV91 | E46 | 330xd_M57_LIM | EUR_LL | X | X |
| EW51 | EW51 | E46 | 330xi_M54_LIM | EUR_LL | X | X |
| EW53 | EW53 | E46 | 330xi_M54_LIM | USA_LL | X | X |
| EX31 | EX31 | E46 | 316i_N46_TOUR | EUR_LL | X | X |
| EX32 | EX32 | E46 | 316i_N46_TOUR | EUR_RL | X | X |
| EX51 | EX51 | E46 | 318i_N46_TOUR | EUR_LL | X | X |
| EX52 | EX52 | E46 | 318i_N46_TOUR | EUR_RL | X | X |
| EX71 | EX71 | E46 | 330xd_M57/TU_TOUR | EUR_LL | X | X |
| EX91 | EX91 | E46 | 330d_M57/TU_TOUR | EUR_LL | X | X |
| EX92 | EX92 | E46 | 330d_M57/TU_TOUR | EUR_RL | X | X |
| EY11 | EY11 | E46 | 316i_N45_LIM | EUR_LL | X | X |
| EY15 | EY15 | E46 | 316i_N45_LIM | PHL_LL | X | X |
| EY31 | EY31 | E46 | 316i_N46_LIM | EUR_LL | X | X |
| EY32 | EY32 | E46 | 316i_N46_LIM | EUR_RL | X | X |
| EY71 | EY71 | E46 | 318i_N46_LIM | EUR_LL | X | X |
| EY72 | EY72 | E46 | 318i_N46_LIM | EUR_RL | X | X |
| EY74 | EY74 | E46 | 318i_N46_LIM | MYS_RL | X | X |
| EY75 | EY75 | E46 | 318i_N46_LIM | THA_RL | X | X |
| EY76 | EY76 | E46 | 318i_N46_LIM | EGY_LL | X | X |
| EY77 | EY77 | E46 | 318i_N46_LIM | IDN_RL | X | X |
| EY78 | EY78 | E46 | 318i_N46_LIM | VNM_LL | X | X |
| EY79 | EY79 | E46 | 318i_N46_LIM | PHL_LL | X | X |
| EY97 | EY97 | E46 | 318i_N46_LIM | CHN_LL | X | X |
| EY98 | EY98 | E46 | 318i_N46_LIM | RUS_LL | X | X |
| EZ31 | EZ31 | E46 | 316ti_N45_COMP | EUR_LL | X | X |
| EZ51 | EZ51 | E46 | 316ti_N46_COMP | EUR_LL | X | X |
| EZ52 | EZ52 | E46 | 316ti_N46_COMP | EUR_RL | X | X |
| EZ71 | EZ71 | E46 | 318ti_N46_COMP | EUR_LL | X | X |
| EZ72 | EZ72 | E46 | 318ti_N46_COMP | EUR_RL | X | X |
| FA11 | FA11 | E53 | X5_3.0i_M54_GEFZG | EUR_LL | X | X |
| FA12 | FA12 | E53 | X5_3.0i_M54_GEFZG | EUR_RL | X | X |
| FA13 | FA13 | E53 | X5_3.0i_M54_GEFZG | USA_LL | X | X |
| FA51 | FA51 | E53 | X5_3.0i_M54_GEFZG | EUR_LL | X | X |
| FA52 | FA52 | E53 | X5_3.0i_M54_GEFZG | EUR_RL | X | X |
| FA53 | FA53 | E53 | X5_3.0i_M54_GEFZG | USA_LL | X | X |
| FA71 | FA71 | E53 | X5_3.0d_M57_GEFZG | EUR_LL | X | X |
| FA72 | FA72 | E53 | X5_3.0d_M57_GEFZG | EUR_RL | X | X |
| FA91 | FA91 | E53 | X5_4.8is_N62/S_GEFZG | EUR_LL | X | X |
| FA92 | FA92 | E53 | X5_4.8is_N62/S_GEFZG | EUR_RL | X | X |
| FA93 | FA93 | E53 | X5_4.8is_N62/S_GEFZG | USA_LL | X | X |
| FB31 | FB31 | E53 | X5_4.4i_M62/TU_GEFZG | EUR_LL | X | X |
| FB32 | FB32 | E53 | X5_4.4i_M62/TU_GEFZG | EUR_RL | X | X |
| FB33 | FB33 | E53 | X5_4.4i_M62/TU_GEFZG | USA_LL | X | X |
| FB51 | FB51 | E53 | X5_4.4i_N62_GEFZG | EUR_LL | X | X |
| FB52 | FB52 | E53 | X5_4.4i_N62_GEFZG | EUR_RL | X | X |
| FB53 | FB53 | E53 | X5_4.4i_N62_GEFZG | USA_LL | X | X |
| FB71 | FB71 | E53 | X5_3.0d_M57/TU_GEFZG | EUR_LL | X | X |
| FB72 | FB72 | E53 | X5_3.0d_M57/TU_GEFZG | EUR_RL | X | X |
| FB91 | FB91 | E53 | X5_4.6is_M62/TU_GEFZG | EUR_LL | X | X |
| FB92 | FB92 | E53 | X5_4.6is_M62/TU_GEFZG | EUR_RL | X | X |
| FB93 | FB93 | E53 | X5_4.6is_M62/TU_GEFZG | USA_LL | X | X |
| FE41 | FE41 | E70 | X5_3.0si_N52K_GEFZG | EUR_LL | X | O |
| FE42 | FE42 | E70 | X5_3.0si_N52K_GEFZG | EUR_RL | X | O |
| FE43 | FE43 | E70 | X5_3.0si_N52K_GEFZG | USA_LL | X | X |
| FE81 | FE81 | E70 | X5_4.8i_N62/TU_GEFZG | EUR_LL | X | X |
| FE82 | FE82 | E70 | X5_4.8i_N62/TU_GEFZG | EUR_RL | X | X |
| FE83 | FE83 | E70 | X5_4.8i_N62/TU_GEFZG | USA_LL | X | X |
| FF01 | FF01 | E70 | X5_3.0sd_M57Y_GEFZG | EUR_LL | X | O |
| FF02 | FF02 | E70 | X5_3.0sd_M57Y_GEFZG | EUR_RL | X | O |
| FF03 | FF03 | E70 | X5_3.0sd_M57Y_GEFZG | USA_LL | X | O |
| FF41 | FF41 | E70 | X5_3.0d_M57/T2_GEFZG | EUR_LL | X | O |
| FF42 | FF42 | E70 | X5_3.0d_M57/T2_GEFZG | EUR_RL | X | O |
| GY01 | GY01 | E70 | X5_M_S63_GEFZG | EUR_LL | X | X |
| GY02 | GY02 | E70 | X5_M_S63_GEFZG | EUR_RL | X | X |
| GY03 | GY03 | E70 | X5_M_S63_GEFZG | USA_LL | X | X |
| FG01 | FG01 | E71 | X6_3.0sd_M57Y_SC | EUR_LL | X | O |
| FG02 | FG02 | E71 | X6_3.0sd_M57Y_SC | EUR_RL | X | O |
| FG41 | FG41 | E71 | X6_3.0si_N54_SC | EUR_LL | X | O |
| FG42 | FG42 | E71 | X6_3.0si_N54_SC | EUR_RL | X | O |
| FG43 | FG43 | E71 | X6_3.0si_N54_SC | USA_LL | X | O |
| FG61 | FG61 | E71 | X6_3.0d_M57/T2_SC | EUR_LL | X | O |
| FG62 | FG62 | E71 | X6_3.0d_M57/T2_SC | EUR_RL | X | O |
| FG81 | FG81 | E71 | X6_5.0i_N63_SC | EUR_LL | X | O |
| FG82 | FG82 | E71 | X6_5.0i_N63_SC | EUR_RL | X | O |
| FG83 | FG83 | E71 | X6_5.0i_N63_SC | USA_LL | X | O |
| GZ01 | GZ01 | E70 | X6_M_S63_SC | EUR_LL | X | X |
| GZ02 | GZ02 | E71 | X6_M_S63_SC | EUR_RL | X | X |
| GZ03 | GZ03 | E71 | X6_M_S63_SC | USA_LL | X | X |
| FH03 | FH03 | E72 | X6_5.0i_Hybrid_N63_SC | USA_LL | X | O |
| FH21 | FH21 | E72 | X6_5.0i_Hybrid_N63_SC | EUR_LL | X | O |
| FK01 | FK01 | RR1 | RR01_N73_LIM | EUR_LL | X | X |
| FK02 | FK02 | RR1 | RR01_N73_LIM | EUR_RL | X | X |
| FK03 | FK03 | RR1 | RR01_N73_LIM | USA_LL | X | X |
| FK41 | FK41 | RR4 | RR4_N74R_LIM | EUR_LL | X | O |
| FK42 | FK42 | RR4 | RR4_N74R_LIM | EUR_RL | X | O |
| FK43 | FK43 | RR4 | RR4_N74R_LIM | USA_LL | X | O |
| FK61 | FK61 | RR1 | RR01_N73_LIM | EUR_LL | X | X |
| FK62 | FK62 | RR1 | RR01_N73_LIM | EUR_RL | X | X |
| FK63 | FK63 | RR1 | RR01_N73_LIM | USA_LL | X | X |
| FK81 | FK81 | RR2 | RR01_N73_CABRIO | EUR_LL | X | O |
| FK82 | FK82 | RR2 | RR01_N73_CABRIO | EUR_RL | X | O |
| FK83 | FK83 | RR2 | RR01_N73_CABRIO | USA_LL | X | O |
| FK21 | FK21 | RR3 | RR01_N73_COUPE | EUR_LL | X | O |
| FK22 | FK22 | RR3 | RR01_N73_COUPE | EUR_RL | X | O |
| FK23 | FK23 | RR3 | RR01_N73_COUPE | USA_LL | X | O |
| FN41 | FN41 | E70 | X5_3.0si_N54_GEFZG | EUR_LL | X | O |
| FN42 | FN42 | E70 | X5_3.0si_N54_GEFZG | EUR_RL | X | O |
| FN43 | FN43 | E70 | X5_3.0si_N54_GEFZG | USA_LL | X | O |
| FN81 | FN81 | E70 | X5_4.4si_N63_GEFZG | EUR_LL | X | O |
| FN82 | FN82 | E70 | X5_4.4si_N63_GEFZG | EUR_RL | X | O |
| FN83 | FN83 | E70 | X5_4.4si_N63_GEFZG | USA_LL | X | O |
| FP11 | FP11 | F10 | 520i_N46T_LIM | EUR_LL | X | O |
| FP12 | FP12 | F10 | 520i_N46T_LIM | EUR_RL | X | O |
| FP31 | FP31 | F10 | 523i_N52K_LIM | EUR_LL | X | O |
| FP32 | FP32 | F10 | 523i_N52K_LIM | EUR_RL | X | O |
| FP51 | FP51 | F10 | 523i_N53_LIM | EUR_LL | X | O |
| FP52 | FP52 | F10 | 523i_N53_LIM | EUR_RL | X | O |
| FP71 | FP71 | F10 | 525i_N52K_LIM | EUR_LL | X | O |
| FP72 | FP72 | F10 | 525i_N52K_LIM | EUR_RL | X | O |
| FP91 | FP91 | F10 | 525i_N53_LIM | EUR_LL | X | O |
| FP92 | FP92 | F10 | 525i_N53_LIM | EUR_RL | X | O |
| FR13 | FR13 | F10 | 528i_N52K_LIM | USA_LL | X | O |
| FR31 | FR31 | F10 | 530i_N52K_LIM | EUR_LL | X | O |
| FR32 | FR32 | F10 | 530i_N52K_LIM | EUR_RL | X | O |
| FR51 | FR51 | F10 | 530i_N53_LIM | EUR_LL | X | O |
| FR52 | FR52 | F10 | 530i_N53_LIM | EUR_RL | X | O |
| FR71 | FR71 | F10 | 535i_N54_LIM | EUR_LL | X | O |
| FR72 | FR72 | F10 | 535i_N54_LIM | EUR_RL | X | O |
| FR73 | FR73 | F10 | 535i_N54_LIM | USA_LL | X | O |
| FR91 | FR91 | F10 | 550i_N63_LIM | EUR_LL | X | O |
| FR92 | FR92 | F10 | 550i_N63_LIM | EUR_RL | X | O |
| FR93 | FR93 | F10 | 550i_N63_LIM | USA_LL | X | O |
| FU33 | FU33 | F10 | 528xi_N52K_LIM | USA_LL | X | O |
| FU51 | FU51 | F10 | 530xi_N53_LIM | EUR_LL | X | O |
| FU71 | FU71 | F10 | 535xi_N54_LIM | EUR_LL | X | O |
| FU73 | FU73 | F10 | 535xi_N54_LIM | USA_LL | X | O |
| FU91 | FU91 | F10 | 550xi_N63_LIM | EUR_LL | X | O |
| FU93 | FU93 | F10 | 550xi_N63_LIM | USA_LL | X | O |
| FV11 | FV11 | F10 | 525xd_N57_LIM | EUR_LL | X | O |
| FV31 | FV31 | F10 | 530xd_N57_LIM | EUR_LL | X | O |
| FW11 | FW11 | F10 | 520d_N47_LIM | EUR_LL | X | O |
| FW12 | FW12 | F10 | 520d_N47_LIM | EUR_RL | X | O |
| FW31 | FW31 | F10 | 525d_N57_LIM | EUR_LL | X | O |
| FW32 | FW32 | F10 | 525d_N57_LIM | EUR_RL | X | O |
| FW51 | FW51 | F10 | 530d_N57_LIM | EUR_LL | X | O |
| FW52 | FW52 | F10 | 530d_N57_LIM | EUR_RL | X | O |
| FW71 | FW71 | F10 | 535d_N57S_LIM | EUR_LL | X | O |
| FW72 | FW72 | F10 | 535d_N57S_LIM | EUR_RL | X | O |
| GL21 | GL21 | E65 | 730i_M54_LIM | EUR_LL | X | X |
| GL22 | GL22 | E65 | 730i_M54_LIM | EUR_RL | X | X |
| GL41 | GL41 | E65 | 735i_N62_LIM | EUR_LL | X | X |
| GL42 | GL42 | E65 | 735i_N62_LIM | EUR_RL | X | X |
| GL61 | GL61 | E65 | 745i_N62_LIM | EUR_LL | X | X |
| GL62 | GL62 | E65 | 745i_N62_LIM | EUR_RL | X | X |
| GL63 | GL63 | E65 | 745i_N62_LIM | USA_LL | X | X |
| GL81 | GL81 | E65 | 760i_N73_LIM | EUR_LL | X | X |
| GL82 | GL82 | E65 | 760i_N73_LIM | EUR_RL | X | X |
| GL83 | GL83 | E65 | 760i_N73_LIM | USA_LL | X | X |
| GM21 | GM21 | E65 | 730d_M57/TU_LIM | EUR_LL | X | X |
| GM22 | GM22 | E65 | 730d_M57/TU_LIM | EUR_RL | X | X |
| GM41 | GM41 | E65 | 740d_M67_LIM | EUR_LL | X | X |
| GN21 | GN21 | E66 | 730Li_M54_LIM | EUR_LL | X | X |
| GN22 | GN22 | E66 | 730Li_M54_LIM | EUR_RL | X | X |
| GN25 | GN25 | E66 | 730Li_M54_LIM | THA_RL | X | X |
| GN41 | GN41 | E66 | 735Li_N62_LIM | EUR_LL | X | X |
| GN42 | GN42 | E66 | 735Li_N62_LIM | EUR_RL | X | X |
| GN45 | GN45 | E66 | 735Li_N62_LIM | THA_RL | X | X |
| GN61 | GN61 | E66 | 745Li_N62_LIM | EUR_LL | X | X |
| GN62 | GN62 | E66 | 745Li_N62_LIM | EUR_RL | X | X |
| GN63 | GN63 | E66 | 745Li_N62_LIM | USA_LL | X | X |
| GN81 | GN81 | E66 | 760Li_N73_LIM | EUR_LL | X | X |
| GN82 | GN82 | E66 | 760Li_N73_LIM | EUR_RL | X | X |
| GN83 | GN83 | E66 | 760Li_N73_LIM | USA_LL | X | X |
| GP61 | GP61 | E67 | 745Li_N62_LIM | EUR_LL | X | X |
| GP62 | GP62 | E67 | 745Li_N62_LIM | EUR_RL | X | X |
| GP81 | GP81 | E67 | 760Li_N73_LIM | EUR_LL | X | X |
| GP82 | GP82 | E67 | 760Li_N73_LIM | EUR_RL | X | X |
| GX81 | GX81 | E68 | H7_N73H_LIM | EUR_LL | X | O |
| HL01 | HL01 | E65 | 760i_N73_LIM | EUR_LL | X | X |
| HL02 | HL02 | E65 | 760i_N73_LIM | EUR_RL | X | X |
| HL03 | HL03 | E65 | 760i_N73_LIM | USA_LL | X | X |
| HL21 | HL21 | E65 | 730i_N52_LIM | EUR_LL | X | X |
| HL22 | HL22 | E65 | 730i_N52_LIM | EUR_RL | X | X |
| HL61 | HL61 | E65 | 740i_N62/TU_LIM | EUR_LL | X | X |
| HL62 | HL62 | E65 | 740i_N62/TU_LIM | EUR_RL | X | X |
| HL81 | HL81 | E65 | 750i_N62/TU_LIM | EUR_LL | X | X |
| HL82 | HL82 | E65 | 750i_N62/TU_LIM | EUR_RL | X | X |
| HL83 | HL83 | E65 | 750i_N62/TU_LIM | USA_LL | X | X |
| HM21 | HM21 | E65 | 730d_M57/T2_LIM | EUR_LL | X | X |
| HM22 | HM22 | E65 | 730d_M57/T2_LIM | EUR_RL | X | X |
| HM41 | HM41 | E66 | 730Ld_M57/T2_LIM | EUR_LL | X | X |
| HM42 | HM42 | E66 | 730Ld_M57/T2_LIM | EUR_RL | X | X |
| HM61 | HM61 | E65 | 745d_M67/TU_LIM | EUR_LL | X | X |
| HN01 | HN01 | E66 | 760Li_N73_LIM | EUR_LL | X | X |
| HN02 | HN02 | E66 | 760Li_N73_LIM | EUR_RL | X | X |
| HN03 | HN03 | E66 | 760Li_N73_LIM | USA_LL | X | X |
| HN21 | HN21 | E66 | 730Li_N52_LIM | EUR_LL | X | X |
| HN22 | HN22 | E66 | 730Li_N52_LIM | EUR_RL | X | X |
| HN25 | HN25 | E66 | 730Li_N52_LIM | THA_RL | X | X |
| HN61 | HN61 | E66 | 740Li_N62/TU_LIM | EUR_LL | X | X |
| HN62 | HN62 | E66 | 740Li_N62/TU_LIM | EUR_RL | X | X |
| HN65 | HN65 | E66 | 740Li_N62/TU_LIM | THA_RL | X | X |
| HN66 | HN66 | E66 | 740Li_N62/TU_LIM | EGY_LL | X | X |
| HN81 | HN81 | E66 | 750Li_N62/TU_LIM | EUR_LL | X | X |
| HN82 | HN82 | E66 | 750Li_N62/TU_LIM | EUR_RL | X | X |
| HN83 | HN83 | E66 | 750Li_N62/TU_LIM | USA_LL | X | X |
| HP61 | HP61 | E67 | 745Li_N62_LIM | EUR_LL | X | X |
| HP62 | HP62 | E67 | 745Li_N62_LIM | EUR_RL | X | X |
| HP81 | HP81 | E67 | 760Li_N73_LIM | EUR_LL | X | X |
| HP82 | HP82 | E67 | 760Li_N73_LIM | EUR_RL | X | X |
| KA01 | KA01 | F01 | 760i_N74_LIM | EUR_LL | X | O |
| KA02 | KA02 | F01 | 760i_N74_LIM | EUR_RL | X | O |
| KA41 | KA41 | F01 | 740i_N54_LIM | EUR_LL | X | O |
| KA42 | KA42 | F01 | 740i_N54_LIM | EUR_RL | X | O |
| KA81 | KA81 | F01 | 750i_N63_LIM | EUR_LL | X | O |
| KA82 | KA82 | F01 | 750i_N63_LIM | EUR_RL | X | O |
| KA83 | KA83 | F01 | 750i_N63_LIM | USA_LL | X | O |
| KB01 | KB01 | F02 | 760Li_N74_LIM | EUR_LL | X | O |
| KB02 | KB02 | F02 | 760Li_N74_LIM | EUR_RL | X | O |
| KB03 | KB03 | F02 | 760Li_N74_LIM | USA_LL | X | O |
| KB21 | KB21 | F02 | 730Li_N52K_LIM | EUR_LL | X | O |
| KB22 | KB22 | F02 | 730Li_N52K_LIM | EUR_RL | X | O |
| KB25 | KB25 | F02 | 730Li_N52K_LIM | THA_RL | X | O |
| KB41 | KB41 | F02 | 740Li_N54_LIM | EUR_LL | X | O |
| KB42 | KB42 | F02 | 740Li_N54_LIM | EUR_RL | X | O |
| KB81 | KB81 | F02 | 750Li_N63_LIM | EUR_LL | X | O |
| KB82 | KB82 | F02 | 750Li_N63_LIM | EUR_RL | X | O |
| KB83 | KB83 | F02 | 750Li_N63_LIM | USA_LL | X | O |
| KC61 | KC61 | F01 | 750xi_N63_LIM | EUR_LL | X | O |
| KC63 | KC63 | F01 | 750xi_N63_LIM | USA_LL | X | O |
| KC81 | KC81 | F02 | 750Lxi_N63_LIM | EUR_LL | X | O |
| KC83 | KC83 | F02 | 750Lxi_N63_LIM | USA_LL | X | O |
| KM21 | KM21 | F01 | 730d_N57_LIM | EUR_LL | X | O |
| KM22 | KM22 | F01 | 730d_N57_LIM | EUR_LL | X | O |
| KM42 | KM42 | F02 | 730Ld_N57_LIM | EUR_RL | X | O |
| KM81 | KM81 | F01 | 735d_N57S_LIM | EUR_LL | X | O |
| KM82 | KM82 | F01 | 735d_N57S_LIM | EUR_RL | X | O |
| LK21 | LK21 | F03 | 750Li_N63_LIM | EUR_LL | X | O |
| LK22 | LK22 | F03 | 750Li_N63_LIM | EUR_RL | X | O |
| LK41 | LK41 | F03 | 760Li_N74_LIM | EUR_LL | X | O |
| LK42 | LK42 | F03 | 760Li_N74_LIM | EUR_RL | X | O |
| LM31 | LM31 | E89 | Z4_sDrive23i_N52K_ROADST | EUR_LL | X | O |
| LM32 | LM32 | E89 | Z4_sDrive23i_N52K_ROADST | EUR_RL | X | O |
| LM51 | LM51 | E89 | Z4_sDrive30i_N52K_ROADST | EUR_LL | X | O |
| LM52 | LM52 | E89 | Z4_sDrive30i_N52K_ROADST | EUR_RL | X | O |
| LM53 | LM53 | E89 | Z4_sDrive30i_N52K_ROADST | USA_LL | X | O |
| LM71 | LM71 | E89 | Z4_sDrive35i_N54_ROADST | EUR_LL | X | O |
| LM72 | LM72 | E89 | Z4_sDrive35i_N54_ROADST | EUR_RL | X | O |
| LM73 | LM73 | E89 | Z4_sDrive35i_N54_ROADST | USA_LL | X | O |
| ME11 | ME11 | R56 | MINI_ONE_N12_COUPE | EUR_LL | X | X |
| ME31 | ME31 | R56 | MINI_ONE_N12_COUPE | EUR_LL | X | X |
| ME32 | ME32 | R56 | MINI_ONE_N12_COUPE | EUR_RL | X | X |
| MF31 | MF31 | R56 | COOPER_N12_COUPE | EUR_LL | X | X |
| MF32 | MF32 | R56 | COOPER_N12_COUPE | EUR_RL | X | X |
| MF33 | MF33 | R56 | COOPER_N12_COUPE | USA_LL | X | X |
| MF71 | MF71 | R56 | COOPER_S_N14_COUPE | EUR_LL | X | X |
| MF72 | MF72 | R56 | COOPER_S_N14_COUPE | EUR_RL | X | X |
| MF73 | MF73 | R56 | COOPER_S_N14_COUPE | USA_LL | X | X |
| MF91 | MF91 | R56 | COOPER_S_N14_COUPE | EUR_LL | X | X |
| MF92 | MF92 | R56 | COOPER_S_N14_COUPE | EUR_RL | X | X |
| MF93 | MF93 | R56 | COOPER_S_N14_COUPE | USA_LL | X | X |
| MG11 | MG11 | R56 | ONE_D_W16_COUPE | EUR_LL | X | O |
| MG12 | MG12 | R56 | ONE_D_W16_COUPE | EUR_RL | X | O |
| MG31 | MG31 | R56 | COOPER_D_W16_COUPE | EUR_LL | X | X |
| MG32 | MG32 | R56 | COOPER_D_W16_COUPE | EUR_RL | X | X |
| MH31 | MH31 | R55 | MINI_ONE_N12_HB | EUR_LL | X | O |
| MH32 | MH32 | R55 | MINI_ONE_N12_HB | EUR_RL | X | O |
| ML31 | ML31 | R55 | COOPER_N12_HB | EUR_LL | X | X |
| ML32 | ML32 | R55 | COOPER_N12_HB | EUR_RL | X | X |
| ML33 | ML33 | R55 | COOPER_N12_HB | USA_LL | X | O |
| MM31 | MM31 | R55 | COOPER_S_N14_HB | EUR_LL | X | X |
| MM32 | MM32 | R55 | COOPER_S_N14_HB | EUR_RL | X | X |
| MM33 | MM33 | R55 | COOPER_S_N14_HB | USA_LL | X | O |
| MM91 | MM91 | R55 | COOPER_S_N14_HB | EUR_LL | X | X |
| MM92 | MM92 | R55 | COOPER_S_N14_HB | EUR_RL | X | X |
| MM93 | MM93 | R55 | COOPER_S_N14_HB | USA_LL | X | O |
| MN11 | MN11 | R55 | ONE_D_W16_HB | EUR_LL | X | O |
| MN12 | MN12 | R55 | ONE_D_W16_HB | EUR_RL | X | O |
| MN51 | MN51 | R55 | COOPER_D_W16_HB | EUR_LL | X | X |
| MN52 | MN52 | R55 | COOPER_D_W16_HB | EUR_RL | X | X |
| MP31 | MP31 | R57 | MINI_ONE_N12_CABRIO | EUR_LL | X | O |
| MP32 | MP32 | R57 | MINI_ONE_N12_CABRIO | EUR_RL | X | O |
| MR31 | MR31 | R57 | COOPER_N12_CABRIO | EUR_LL | X | O |
| MR32 | MR32 | R57 | COOPER_N12_CABRIO | EUR_RL | X | O |
| MR33 | MR33 | R57 | COOPER_N12_CABRIO | USA_LL | X | O |
| MS31 | MS31 | R57 | COOPER_S_N14_CABRIO | EUR_LL | X | O |
| MS32 | MS32 | R57 | COOPER_S_N14_CABRIO | EUR_RL | X | O |
| MS33 | MS33 | R57 | COOPER_S_N14_CABRIO | USA_LL | X | O |
| MS91 | MS91 | R57 | COOPER_S_N14_CABRIO | EUR_LL | X | O |
| MS92 | MS92 | R57 | COOPER_S_N14_CABRIO | EUR_RL | X | O |
| MS93 | MS93 | R57 | COOPER_S_N14_CABRIO | USA_LL | X | O |
| MT31 | MT31 | F11 | 520i_N46T_TOUR | EUR_LL | X | O |
| MT32 | MT32 | F11 | 520i_N46T_TOUR | EUR_RL | X | O |
| MT51 | MT51 | F11 | 523i_N53_TOUR | EUR_LL | X | O |
| MT52 | MT52 | F11 | 523i_N53_TOUR | EUR_RL | X | O |
| MT71 | MT71 | F11 | 525i_N52K_TOUR | EUR_LL | X | O |
| MT72 | MT72 | F11 | 525i_N52K_TOUR | EUR_RL | X | O |
| MT91 | MT91 | F11 | 525i_N53_TOUR | EUR_LL | X | O |
| MT92 | MT92 | F11 | 525i_N53_TOUR | EUR_RL | X | O |
| MU31 | MU31 | F11 | 530i_N52K_TOUR | EUR_LL | X | O |
| MU32 | MU32 | F11 | 530i_N52K_TOUR | EUR_RL | X | O |
| MU51 | MU51 | F11 | 530i_N53_TOUR | EUR_LL | X | O |
| MU52 | MU52 | F11 | 530i_N53_TOUR | EUR_RL | X | O |
| MU71 | MU71 | F11 | 535i_N54_TOUR | EUR_LL | X | O |
| MU72 | MU72 | F11 | 535i_N54_TOUR | EUR_RL | X | O |
| MU91 | MU91 | F11 | 550i_N63_TOUR | EUR_LL | X | O |
| MU92 | MU92 | F11 | 550i_N63_TOUR | EUR_RL | X | O |
| MW31 | MW31 | F11 | 530xi_N53_TOUR | EUR_LL | X | O |
| MW51 | MW51 | F11 | 535xi_N54_TOUR | EUR_LL | X | O |
| MW53 | MW53 | F11 | 535xi_N54_TOUR | USA_LL | X | O |
| MW71 | MW71 | F11 | 525xd_N57_TOUR | EUR_LL | X | O |
| MW91 | MW91 | F11 | 530xd_N57_TOUR | EUR_LL | X | O |
| MX11 | MX11 | F11 | 520d_N47_TOUR | EUR_LL | X | O |
| MX12 | MX12 | F11 | 520d_N47_TOUR | EUR_RL | X | O |
| MX31 | MX31 | F11 | 525d_N57_TOUR | EUR_LL | X | O |
| MX32 | MX32 | F11 | 525d_N57_TOUR | EUR_RL | X | O |
| MX51 | MX51 | F11 | 530d_N57_TOUR | EUR_LL | X | O |
| MX52 | MX52 | F11 | 530d_N57_TOUR | EUR_RL | X | O |
| MX71 | MX71 | F11 | 535d_N57S_TOUR | EUR_LL | X | O |
| MX72 | MX72 | F11 | 535d_N57S_TOUR | EUR_RL | X | O |
| NA31 | NA31 | E60 | 520i_M54_LIM | EUR_LL | X | X |
| NA32 | NA32 | E60 | 520i_M54_LIM | EUR_RL | X | X |
| NA34 | NA34 | E60 | 520i_M54_LIM | MYS_RL | X | X |
| NA36 | NA36 | E60 | 520i_M54_LIM | EGY_LL | X | X |
| NA37 | NA37 | E60 | 520i_M54_LIM | IDN_RL | X | X |
| NA38 | NA38 | E60 | 525i_M54_LIM | THA_RL | X | X |
| NA39 | NA39 | E60 | 520i_M54_LIM | CHN_LL | X | X |
| NA51 | NA51 | E60 | 525i_M54_LIM | EUR_LL | X | X |
| NA52 | NA52 | E60 | 525i_M54_LIM | EUR_RL | X | X |
| NA53 | NA53 | E60 | 525i_M54_LIM | USA_LL | X | X |
| NA54 | NA54 | E60 | 525i_M54_LIM | MYS_RL | X | X |
| NA55 | NA55 | E60 | 525i_M54_LIM | VNM_LL | X | X |
| NA56 | NA56 | E60 | 525i_M54_LIM | EGY_LL | X | X |
| NA57 | NA57 | E60 | 525i_M54_LIM | IDN_RL | X | X |
| NA58 | NA58 | E60 | 525i_M54_LIM | RUS_LL | X | X |
| NA59 | NA59 | E60 | 525i_M54_LIM | PHL_LL | X | X |
| NA71 | NA71 | E60 | 530i_M54_LIM | EUR_LL | X | X |
| NA72 | NA72 | E60 | 530i_M54_LIM | EUR_RL | X | X |
| NA73 | NA73 | E60 | 530i_M54_LIM | USA_LL | X | X |
| NA74 | NA74 | E60 | 530i_M54_LIM | MYS_RL | X | X |
| NA76 | NA76 | E60 | 530i_M54_LIM | EGY_LL | X | X |
| NA77 | NA77 | E60 | 530i_M54_LIM | IDN_RL | X | X |
| NA78 | NA78 | E60 | 530i_M54_LIM | RUS_LL | X | X |
| NA79 | NA79 | E60 | 530i_M54_LIM | CHN_LL | X | X |
| NA98 | NA98 | E60 | 525i_M54_LIM | CHN_LL | X | X |
| NA99 | NA99 | E60 | 520i_M54_LIM | THA_RL | X | X |
| NB11 | NB11 | E60 | 540i_N62/TU_LIM | EUR_LL | X | X |
| NB12 | NB12 | E60 | 540i_N62/TU_LIM | EUR_RL | X | X |
| NB31 | NB31 | E60 | 545i_N62_LIM | EUR_LL | X | X |
| NB32 | NB32 | E60 | 545i_N62_LIM | EUR_RL | X | X |
| NB33 | NB33 | E60 | 545i_N62_LIM | USA_LL | X | X |
| NB51 | NB51 | E60 | 550i_N62/TU_LIM | EUR_LL | X | X |
| NB52 | NB52 | E60 | 550i_N62/TU_LIM | EUR_RL | X | X |
| NB53 | NB53 | E60 | 550i_N62/TU_LIM | USA_LL | X | X |
| NB91 | NB91 | E60 | M5_S85_LIM | EUR_LL | X | X |
| NB92 | NB92 | E60 | M5_S85_LIM | EUR_RL | X | X |
| NB93 | NB93 | E60 | M5_S85_LIM | USA_LL | X | X |
| NC31 | NC31 | E60 | 520d_M47/T2_LIM | EUR_LL | X | O |
| NC32 | NC32 | E60 | 520d_M47/T2_LIM | EUR_RL | X | O |
| NC37 | NC37 | E60 | 520d_M47/T2_LIM | THA_RL | X | O |
| NC51 | NC51 | E60 | 525d_M57/TU_LIM | EUR_LL | X | X |
| NC52 | NC52 | E60 | 525d_M57/TU_LIM | EUR_RL | X | X |
| NC71 | NC71 | E60 | 530d_M57/TU_LIM | EUR_LL | X | X |
| NC72 | NC72 | E60 | 530d_M57/TU_LIM | EUR_RL | X | X |
| NC91 | NC91 | E60 | 535d_M57X_LIM | EUR_LL | X | O |
| NC92 | NC92 | E60 | 535d_M57X_LIM | EUR_RL | X | O |
| ND71 | ND71 | E60 | 530i_N53_LIM | EUR_LL | X | O |
| ND72 | ND72 | E60 | 530i_N53_LIM | EUR_RL | X | O |
| ND75 | ND75 | E60 | 530i_N52K_LIM | IND_RL | X | X |
| ND79 | ND79 | E60 | 530i_N52K_LIM | CHN_LL | X | O |
| NE31 | NE31 | E60 | 523i_N52_LIM | EUR_LL | X | X |
| NE32 | NE32 | E60 | 523i_N52_LIM | EUR_RL | X | X |
| NE34 | NE34 | E60 | 523i_N52_LIM | MYS_RL | X | X |
| NE36 | NE36 | E60 | 523i_N52_LIM | EGY_LL | X | X |
| NE37 | NE37 | E60 | 523i_N52_LIM | IDN_RL | X | X |
| NE38 | NE38 | E60 | 523i_N52_LIM | THA_RL | X | X |
| NE39 | NE39 | E60 | 523i_N52_LIM | CHN_LL | X | X |
| NE51 | NE51 | E60 | 525i_N52_LIM | EUR_LL | X | X |
| NE52 | NE52 | E60 | 525i_N52_LIM | EUR_RL | X | X |
| NE53 | NE53 | E60 | 525i_N52_LIM | USA_LL | X | X |
| NE54 | NE54 | E60 | 525i_N52_LIM | MYS_RL | X | X |
| NE56 | NE56 | E60 | 525i_N52_LIM | EGY_LL | X | X |
| NE58 | NE58 | E60 | 525i_N52_LIM | THA_RL | X | X |
| NE59 | NE59 | E60 | 525i_N52_LIM | RUS_LL | X | X |
| NE71 | NE71 | E60 | 530i_N52_LIM | EUR_LL | X | X |
| NE72 | NE72 | E60 | 530i_N52_LIM | EUR_RL | X | X |
| NE73 | NE73 | E60 | 530i_N52_LIM | USA_LL | X | X |
| NE74 | NE74 | E60 | 530i_N52_LIM | MYS_RL | X | X |
| NE76 | NE76 | E60 | 530i_N52_LIM | EGY_LL | X | X |
| NE77 | NE77 | E60 | 530i_N52_LIM | IDN_RL | X | X |
| NE78 | NE78 | E60 | 530i_N52_LIM | RUS_LL | X | X |
| NE79 | NE79 | E60 | 530i_N52_LIM | CHN_LL | X | X |
| NE98 | NE98 | E60 | 525i_N52_LIM | CHN_LL | X | X |
| NF31 | NF31 | E60 | 525xi_N52_LIM | EUR_LL | X | X |
| NF33 | NF33 | E60 | 525xi_N52_LIM | USA_LL | X | X |
| NF38 | NF38 | E60 | 525xi_N52_LIM | RUS_LL | X | X |
| NF71 | NF71 | E60 | 530xi_N52_LIM | EUR_LL | X | X |
| NF73 | NF73 | E60 | 530xi_N52_LIM | USA_LL | X | X |
| NF78 | NF78 | E60 | 530xi_N52_LIM | RUS_LL | X | X |
| NG11 | NG11 | E61 | 520i_N43_TOUR | EUR_LL | X | O |
| NG12 | NG12 | E61 | 520i_N43_TOUR | EUR_RL | X | O |
| NG51 | NG51 | E61 | 525i_M54_TOUR | EUR_LL | X | X |
| NG52 | NG52 | E61 | 525i_M54_TOUR | EUR_RL | X | X |
| NH31 | NH31 | E61 | 545i_N62_TOUR | EUR_LL | X | X |
| NH32 | NH32 | E61 | 545i_N62_TOUR | EUR_RL | X | X |
| NH51 | NH51 | E61 | 550i_N62/TU_TOUR | EUR_LL | X | X |
| NH52 | NH52 | E61 | 550i_N62/TU_TOUR | EUR_RL | X | X |
| NJ31 | NJ31 | E61 | 520d_M47/T2_TOUR | EUR_LL | X | O |
| NJ32 | NJ32 | E61 | 520d_M47/T2_TOUR | EUR_RL | X | O |
| NJ51 | NJ51 | E61 | 525d_M57/TU_TOUR | EUR_LL | X | X |
| NJ52 | NJ52 | E61 | 525d_M57/TU_TOUR | EUR_RL | X | X |
| NJ71 | NJ71 | E61 | 530d_M57/TU_TOUR | EUR_LL | X | X |
| NJ72 | NJ72 | E61 | 530d_M57/TU_TOUR | EUR_RL | X | X |
| NJ91 | NJ91 | E61 | 535d_M57X_TOUR | EUR_LL | X | O |
| NJ92 | NJ92 | E61 | 535d_M57X_TOUR | EUR_RL | X | O |
| NK71 | NK71 | E61 | 530i_N53_TOUR | EUR_LL | X | O |
| NK72 | NK72 | E61 | 530i_N53_TOUR | EUR_RL | X | O |
| NL31 | NL31 | E61 | 523i_N52_TOUR | EUR_LL | X | X |
| NL32 | NL32 | E61 | 523i_N52_TOUR | EUR_RL | X | X |
| NL51 | NL51 | E61 | 525i_N52_TOUR | EUR_LL | X | X |
| NL52 | NL52 | E61 | 525i_N52_TOUR | EUR_RL | X | X |
| NL71 | NL71 | E61 | 530i_N52_TOUR | EUR_LL | X | X |
| NL72 | NL72 | E61 | 530i_N52_TOUR | EUR_RL | X | X |
| NM71 | NM71 | E60 | 530xd_M57/T2_LIM | EUR_LL | X | O |
| NN51 | NN51 | E61 | 525xi_N52_TOUR | EUR_LL | X | X |
| NN71 | NN71 | E61 | 530xi_N52_TOUR | EUR_LL | X | X |
| NN73 | NN73 | E61 | 530xi_N52_TOUR | USA_LL | X | X |
| NP71 | NP71 | E61 | 530xd_M57/T2_TOUR | EUR_LL | X | O |
| NR11 | NR11 | E60 | 523i_N52_LIM | EUR_LL | X | X |
| NR31 | NR31 | E60 | 525i_N52_LIM | EUR_LL | X | X |
| NR51 | NR51 | E60 | 530i_N52_LIM | EUR_LL | X | X |
| NR71 | NR71 | E60 | 530d_M57/T2_LIM | EUR_LL | X | O |
| NR72 | NR72 | E60 | 530d_M57/T2_LIM | EUR_RL | X | O |
| NS71 | NS71 | E61 | 530d_M57/T2_TOUR | EUR_LL | X | O |
| NS72 | NS72 | E61 | 530d_M57/T2_TOUR | EUR_RL | X | O |
| NT11 | NT11 | E60 | 520i_N46T_LIM | EUR_LL | X | O |
| NT12 | NT12 | E60 | 520i_N46T_LIM | EUR_RL | X | O |
| NT15 | NT15 | E60 | 520i_N46T_LIM | RUS_LL | X | O |
| NT17 | NT17 | E60 | 520Li_N46T_LIM | CHN_LL | X | X |
| NT31 | NT31 | E60 | 520i_N43_LIM | EUR_LL | X | O |
| NT32 | NT32 | E60 | 520i_N43_LIM | EUR_RL | X | O |
| NU11 | NU11 | E60 | 523i_N52K_LIM | EUR_LL | X | O |
| NU12 | NU12 | E60 | 523i_N52K_LIM | EUR_RL | X | O |
| NU14 | NU14 | E60 | 523i_N52K_LIM | MYS_RL | X | O |
| NU15 | NU15 | E60 | 523Li_N52_LIM | CHN_LL | X | X |
| NU16 | NU16 | E60 | 523i_N52K_LIM | EGY_LL | X | O |
| NU17 | NU17 | E60 | 523i_N52K_LIM | IDN_RL | X | O |
| NU18 | NU18 | E60 | 523i_N52K_LIM | THA_RL | X | O |
| NU31 | NU31 | E60 | 523i_N53_LIM | EUR_LL | X | O |
| NU32 | NU32 | E60 | 523i_N53_LIM | EUR_RL | X | O |
| NU35 | NU35 | E60 | 523i_N52K_LIM | IND_RL | X | O |
| NU39 | NU39 | E60 | 523Li_N52K_LIM | CHN_LL | X | O |
| NU51 | NU51 | E60 | 525i_N52K_LIM | EUR_LL | X | O |
| NU52 | NU52 | E60 | 525i_N52K_LIM | EUR_RL | X | O |
| NU53 | NU53 | E60 | 528i_N52K_LIM | USA_LL | X | O |
| NU54 | NU54 | E60 | 525i_N52K_LIM | MYS_RL | X | O |
| NU55 | NU55 | E60 | 525i_N52K_LIM | RUS_LL | X | X |
| NU56 | NU56 | E60 | 525i_N52K_LIM | EGY_LL | X | O |
| NU57 | NU57 | E60 | 525Li_N52_LIM | CHN_LL | X | X |
| NU58 | NU58 | E60 | 525i_N52K_LIM | THA_RL | X | O |
| NU71 | NU71 | E60 | 525i_N53_LIM | EUR_LL | X | O |
| NU72 | NU72 | E60 | 525i_N53_LIM | EUR_RL | X | O |
| NU75 | NU75 | E60 | 525i_N52K_LIM | IND_RL | X | O |
| NU79 | NU79 | E60 | 525Li_N52K_LIM | CHN_LL | X | O |
| NU91 | NU91 | E60 | 530i_N52K_LIM | EUR_LL | X | O |
| NU92 | NU92 | E60 | 530i_N52K_LIM | EUR_RL | X | O |
| NU93 | NU93 | E60 | 530i_N52K_LIM | USA_LL | X | O |
| NU94 | NU94 | E60 | 530i_N52K_LIM | MYS_RL | X | O |
| NU95 | NU95 | E60 | 530i_N52K_LIM | RUS_LL | X | X |
| NU96 | NU96 | E60 | 530i_N52K_LIM | EGY_LL | X | O |
| NU97 | NU97 | E60 | 530i_N52K_LIM | IDN_RL | X | O |
| NU98 | NU98 | E60 | 530Li_N52_LIM | CHN_LL | X | X |
| NV13 | NV13 | E60 | 528i_N52K_LIM | USA_LL | X | O |
| NV31 | NV31 | E60 | 525xi_N53_LIM | EUR_LL | X | O |
| NV35 | NV35 | E60 | 525xi_N53_LIM | RUS_LL | X | O |
| NV51 | NV51 | E60 | 530xi_N52K_LIM | EUR_LL | X | O |
| NV53 | NV53 | E60 | 530xi_N52K_LIM | USA_LL | X | O |
| NV58 | NV58 | E60 | 530xi_N52K_LIM | RUS_LL | X | O |
| NV71 | NV71 | E60 | 530xi_N53_LIM | EUR_LL | X | O |
| NV93 | NV93 | E60 | 535xi_N54_LIM | USA_LL | X | O |
| NW13 | NW13 | E60 | 535i_N54_LIM | USA_LL | X | O |
| NW31 | NW31 | E60 | 540i_N62/TU_LIM | EUR_LL | X | X |
| NW32 | NW32 | E60 | 540i_N62/TU_LIM | EUR_RL | X | X |
| NW51 | NW51 | E60 | 550i_N62/TU_LIM | EUR_LL | X | X |
| NW52 | NW52 | E60 | 550i_N62/TU_LIM | EUR_RL | X | X |
| NW53 | NW53 | E60 | 550i_N62/TU_LIM | USA_LL | X | X |
| NX11 | NX11 | E60 | 520d_M47/T2_LIM | EUR_LL | X | O |
| NX12 | NX12 | E60 | 520d_M47/T2_LIM | EUR_RL | X | O |
| NX17 | NX17 | E60 | 520d_M47/T2_LIM | THA_RL | X | O |
| NX31 | NX31 | E60 | 520d_N47_LIM | EUR_LL | X | O |
| NX32 | NX32 | E60 | 520d_N47_LIM | EUR_RL | X | O |
| NX35 | NX35 | E60 | 520d_N47_LIM | IND_RL | X | O |
| NX37 | NX37 | E60 | 520d_N47_LIM | THA_RL | X | O |
| NX51 | NX51 | E60 | 525d_M57/T2_LIM | EUR_LL | X | O |
| NX52 | NX52 | E60 | 525d_M57/T2_LIM | EUR_RL | X | O |
| NX55 | NX55 | E60 | 525d_M57/T2_LIM | IND_RL | X | O |
| NX71 | NX71 | E60 | 530d_M57/T2_LIM | EUR_LL | X | O |
| NX72 | NX72 | E60 | 530d_M57/T2_LIM | EUR_RL | X | O |
| NX75 | NX75 | E60 | 530d_M57/T2_LIM | IND_RL | X | O |
| NX91 | NX91 | E60 | 535d_M57Y_LIM | EUR_LL | X | O |
| NX92 | NX92 | E60 | 535d_M57Y_LIM | EUR_RL | X | O |
| NY51 | NY51 | E60 | 525xd_M57/T2_LIM | EUR_LL | X | O |
| NY71 | NY71 | E60 | 530xd_M57/T2_LIM | EUR_LL | X | O |
| NZ11 | NZ11 | E60 | 523Li_N52K_LIM | EUR_LL | X | O |
| NZ31 | NZ31 | E60 | 525Li_N52K_LIM | EUR_LL | X | O |
| NZ51 | NZ51 | E60 | 530Li_N52K_LIM | EUR_LL | X | O |
| PA31 | PA31 | E83 | X3_2.0i_N46_GEFZG | EUR_LL | X | X |
| PA32 | PA32 | E83 | X3_2.0i_N46_GEFZG | EUR_RL | X | X |
| PA71 | PA71 | E83 | X3_2.5i_M54_GEFZG | EUR_LL | X | X |
| PA72 | PA72 | E83 | X3_2.5i_M54_GEFZG | EUR_RL | X | X |
| PA73 | PA73 | E83 | X3_2.5i_M54_GEFZG | USA_LL | X | X |
| PA74 | PA74 | E83 | X3_2.5i_M54_GEFZG | THA_RL | X | X |
| PA75 | PA75 | E83 | X3_2.5i_M54_GEFZG | THA_RL | X | X |
| PA76 | PA76 | E83 | X3_2.5i_M54_GEFZG | EGY_LL | X | X |
| PA91 | PA91 | E83 | X3_3.0i_M54_GEFZG | EUR_LL | X | X |
| PA92 | PA92 | E83 | X3_3.0i_M54_GEFZG | EUR_RL | X | X |
| PA93 | PA93 | E83 | X3_3.0i_M54_GEFZG | USA_LL | X | X |
| PA96 | PA96 | E83 | X3_3.0i_M54_GEFZG | EGY_LL | X | X |
| PB11 | PB11 | E83 | X3_2.0d_M47/T2_GEFZG | EUR_LL | X | O |
| PB12 | PB12 | E83 | X3_2.0d_M47/T2_GEFZG | EUR_RL | X | O |
| PB51 | PB51 | E83 | X3_3.0d_M57/TU_GEFZG | EUR_LL | X | X |
| PC31 | PC31 | E83 | X3_2.0i_N46_GEFZG | EUR_LL | X | X |
| PC32 | PC32 | E83 | X3_2.0i_N46_GEFZG | EUR_RL | X | X |
| PC71 | PC71 | E83 | X3_2.5si_N52K_GEFZG | EUR_LL | X | X |
| PC72 | PC72 | E83 | X3_2.5si_N52K_GEFZG | EUR_RL | X | X |
| PC73 | PC73 | E83 | X3_3.0i_N52K_GEFZG | USA_LL | X | X |
| PC75 | PC75 | E83 | X3_2.5i_N52K_GEFZG | THA_RL | X | X |
| PC78 | PC78 | E83 | X3_2.5si_N52K_GEFZG | RUS_LL | X | X |
| PC91 | PC91 | E83 | X3_3.0si_N52K_GEFZG | EUR_LL | X | X |
| PC92 | PC92 | E83 | X3_3.0si_N52K_GEFZG | EUR_RL | X | X |
| PC93 | PC93 | E83 | X3_3.0si_N52K_GEFZG | USA_LL | X | X |
| PC96 | PC96 | E83 | X3_3.0i_N52K_GEFZG | EGY_LL | X | X |
| PC98 | PC98 | E83 | X3_3.0si_N52K_GEFZG | RUS_LL | X | X |
| PD11 | PD11 | E83 | X3_2.0d_M47/T2_GEFZG | EUR_LL | X | O |
| PD12 | PD12 | E83 | X3_2.0d_M47/T2_GEFZG | EUR_RL | X | O |
| PD51 | PD51 | E83 | X3_3.0d_M57/T2_GEFZG | EUR_LL | X | O |
| PD52 | PD52 | E83 | X3_3.0d_M57/T2_GEFZG | EUR_RL | X | O |
| PD71 | PD71 | E83 | X3_3.0sd_M57Y_GEFZG | EUR_LL | X | O |
| PD72 | PD72 | E83 | X3_3.0sd_M57Y_GEFZG | EUR_RL | X | O |
| PD91 | PD91 | E83 | X3_3.0d_M57/T2_GEFZG | EUR_LL | X | O |
| PD92 | PD92 | E83 | X3_3.0d_M57/T2_GEFZG | EUR_RL | X | O |
| PE11 | PE11 | E83 | X3_2.0d_N47_GEFZG | EUR_LL | X | O |
| PE12 | PE12 | E83 | X3_2.0d_N47_GEFZG | EUR_RL | X | O |
| PE51 | PE51 | E83 | X3_2.0d_N47_GEFZG | EUR_LL | X | O |
| PE52 | PE52 | E83 | X3_2.0d_N47_GEFZG | EUR_RL | X | O |
| PT11 | PT11 | E61 | 520i_N43_TOUR | EUR_LL | X | O |
| PT12 | PT12 | E61 | 520i_N43_TOUR | EUR_RL | X | O |
| PT31 | PT31 | E61 | 520i_N46T_TOUR | EUR_LL | X | O |
| PT32 | PT32 | E61 | 520i_N46T_TOUR | EUR_RL | X | O |
| PT73 | PT73 | E61 | 535xi_N54_TOUR | USA_LL | X | O |
| PU11 | PU11 | E61 | 523i_N52K_TOUR | EUR_LL | X | O |
| PU12 | PU12 | E61 | 523i_N52K_TOUR | EUR_RL | X | O |
| PU31 | PU31 | E61 | 523i_N53_TOUR | EUR_LL | X | O |
| PU32 | PU32 | E61 | 523i_N53_TOUR | EUR_RL | X | O |
| PU51 | PU51 | E61 | 525i_N52K_TOUR | EUR_LL | X | O |
| PU52 | PU52 | E61 | 525i_N52K_TOUR | EUR_RL | X | O |
| PU71 | PU71 | E61 | 525i_N53_TOUR | EUR_LL | X | O |
| PU72 | PU72 | E61 | 525i_N53_TOUR | EUR_RL | X | O |
| PU91 | PU91 | E61 | 530i_N52K_TOUR | EUR_LL | X | O |
| PU92 | PU92 | E61 | 530i_N52K_TOUR | EUR_RL | X | O |
| PV31 | PV31 | E61 | 525xi_N53_TOUR | EUR_LL | X | O |
| PV51 | PV51 | E61 | 530xi_N52K_TOUR | EUR_LL | X | O |
| PV53 | PV53 | E61 | 530xi_N52K_TOUR | USA_LL | X | O |
| PV71 | PV71 | E61 | 530xi_N53_TOUR | EUR_LL | X | O |
| PV91 | PV91 | E61 | M5_S85_TOUR | EUR_LL | X | O |
| PV92 | PV92 | E61 | M5_S85_TOUR | EUR_RL | X | O |
| PW51 | PW51 | E61 | 550i_N62/TU_TOUR | EUR_LL | X | X |
| PW52 | PW52 | E61 | 550i_N62/TU_TOUR | EUR_RL | X | X |
| PX11 | PX11 | E61 | 520d_M47/T2_TOUR | EUR_LL | X | O |
| PX12 | PX12 | E61 | 520d_M47/T2_TOUR | EUR_RL | X | O |
| PX31 | PX31 | E61 | 520d_N47_TOUR | EUR_LL | X | O |
| PX32 | PX32 | E61 | 520d_N47_TOUR | EUR_RL | X | O |
| PX51 | PX51 | E61 | 525d_M57/T2_TOUR | EUR_LL | X | O |
| PX52 | PX52 | E61 | 525d_M57/T2_TOUR | EUR_RL | X | O |
| PX71 | PX71 | E61 | 530d_M57/T2_TOUR | EUR_LL | X | O |
| PX72 | PX72 | E61 | 530d_M57/T2_TOUR | EUR_RL | X | O |
| PX91 | PX91 | E61 | 535d_M57Y_TOUR | EUR_LL | X | O |
| PX92 | PX92 | E61 | 535d_M57Y_TOUR | EUR_RL | X | O |
| PY51 | PY51 | E61 | 525xd_M57/T2_TOUR | EUR_LL | X | O |
| PY71 | PY71 | E61 | 530xd_M57/T2_TOUR | EUR_LL | X | O |
| RA11 | RA11 | R50 | MINI_ONE_W10_COUPE | EUR_LL | X | X |
| RA12 | RA12 | R50 | MINI_ONE_W10_COUPE | EUR_RL | X | X |
| RA31 | RA31 | R50 | MINI_ONE_W10_COUPE | EUR_LL | X | X |
| RA32 | RA32 | R50 | MINI_ONE_W10_COUPE | EUR_RL | X | X |
| RA91 | RA91 | R50 | Dummy_W10_LIM | EUR_LL | X | O |
| RA92 | RA92 | R50 | Dummy_W10_LIM | EUR_RL | X | O |
| RB11 | RB11 | R50 | MINI_ONE_W17_COUPE | EUR_LL | X | X |
| RB12 | RB12 | R50 | MINI_ONE_W17_COUPE | EUR_RL | X | X |
| RC31 | RC31 | R50 | COOPER_W10_COUPE | EUR_LL | X | X |
| RC32 | RC32 | R50 | COOPER_W10_COUPE | EUR_RL | X | X |
| RC33 | RC33 | R50 | COOPER_W10_COUPE | USA_LL | X | X |
| RC91 | RC91 | R50 | Dummy_W10_LIM | EUR_LL | X | O |
| RC92 | RC92 | R50 | Dummy_W10_LIM | EUR_RL | X | O |
| RC93 | RC93 | R50 | Dummy_W10_LIM | USA_LL | X | O |
| RD31 | RD31 | R52 | MINI_ONE_W10_CABRIO | EUR_LL | X | X |
| RD32 | RD32 | R52 | MINI_ONE_W10_CABRIO | EUR_RL | X | X |
| RE31 | RE31 | R53 | COOPER_S_W11_COUPE | EUR_LL | X | X |
| RE32 | RE32 | R53 | COOPER_S_W11_COUPE | EUR_RL | X | X |
| RE33 | RE33 | R53 | COOPER_S_W11_COUPE | USA_LL | X | X |
| RE91 | RE91 | R53 | COOPER_S_W11_COUPE | EUR_LL | X | X |
| RE92 | RE92 | R53 | COOPER_S_W11_COUPE | EUR_RL | X | X |
| RE93 | RE93 | R53 | COOPER_S_W11_COUPE | USA_LL | X | X |
| RF31 | RF31 | R52 | COOPER_W10_CABRIO | EUR_LL | X | X |
| RF32 | RF32 | R52 | COOPER_W10_CABRIO | EUR_RL | X | X |
| RF33 | RF33 | R52 | COOPER_W10_CABRIO | USA_LL | X | X |
| RH31 | RH31 | R52 | COOPER_S_W11_CABRIO | EUR_LL | X | X |
| RH32 | RH32 | R52 | COOPER_S_W11_CABRIO | EUR_RL | X | X |
| RH33 | RH33 | R52 | COOPER_S_W11_CABRIO | USA_LL | X | X |
| TW71 | TW71 | E81 | 120tis_N48_COMP | EUR_LL | X | O |
| TW72 | TW72 | E81 | 120tis_N48_COMP | EUR_RL | X | O |
| UA11 | UA11 | E81 | 116i_N45T_HC | EUR_LL | X | O |
| UA12 | UA12 | E81 | 116i_N45T_HC | EUR_RL | X | O |
| UA31 | UA31 | E81 | 118i_N46T_HC | EUR_LL | X | O |
| UA32 | UA32 | E81 | 118i_N46T_HC | EUR_RL | X | O |
| UA51 | UA51 | E81 | 120i_N46T_HC | EUR_LL | X | O |
| UA52 | UA52 | E81 | 120i_N46T_HC | EUR_RL | X | O |
| UA71 | UA71 | E81 | 120i_N43_HC | EUR_LL | X | O |
| UA72 | UA72 | E81 | 120i_N43_HC | EUR_RL | X | O |
| UB11 | UB11 | E81 | 130i_N52K_HC | EUR_LL | X | O |
| UB12 | UB12 | E81 | 130i_N52K_HC | EUR_RL | X | O |
| UB31 | UB31 | E81 | 118d_N47_HC | EUR_LL | X | O |
| UB32 | UB32 | E81 | 118d_N47_HC | EUR_RL | X | O |
| UB51 | UB51 | E81 | 120d_N47_HC | EUR_LL | X | O |
| UB52 | UB52 | E81 | 120d_N47_HC | EUR_RL | X | O |
| UB71 | UB71 | E81 | 116i_N43_HC | EUR_LL | X | O |
| UB72 | UB72 | E81 | 116i_N43_HC | EUR_RL | X | O |
| UB91 | UB91 | E81 | 118i_N43_HC | EUR_LL | X | O |
| UB92 | UB92 | E81 | 118i_N43_HC | EUR_RL | X | O |
| UC31 | UC31 | E82 | 125i_N52K_COUPE | EUR_LL | X | O |
| UC32 | UC32 | E82 | 125i_N52K_COUPE | EUR_RL | X | O |
| UC71 | UC71 | E82 | 135is_N54_COUPE | EUR_LL | X | O |
| UC72 | UC72 | E82 | 135is_N54_COUPE | EUR_RL | X | O |
| UC73 | UC73 | E82 | 135is_N54_COUPE | USA_LL | X | O |
| UD11 | UD11 | E87 | 120i_N43_SH | EUR_LL | X | O |
| UD12 | UD12 | E87 | 120i_N43_SH | EUR_RL | X | O |
| UD31 | UD31 | E87 | 120i_N46T_SH | EUR_LL | X | O |
| UD32 | UD32 | E87 | 120i_N46T_SH | EUR_RL | X | O |
| UD51 | UD51 | E87 | 130i_N52K_SH | EUR_LL | X | O |
| UD52 | UD52 | E87 | 130i_N52K_SH | EUR_RL | X | O |
| UD71 | UD71 | E87 | 118d_N47_SH | EUR_LL | X | O |
| UD72 | UD72 | E87 | 118d_N47_SH | EUR_RL | X | O |
| UD91 | UD91 | E87 | 120d_N47_SH | EUR_LL | X | O |
| UD92 | UD92 | E87 | 120d_N47_SH | EUR_RL | X | O |
| UE11 | UE11 | E87 | 116i_N45T_SH | EUR_LL | X | O |
| UE12 | UE12 | E87 | 116i_N45T_SH | EUR_RL | X | O |
| UE31 | UE31 | E87 | 116i_N43_SH | EUR_LL | X | O |
| UE32 | UE32 | E87 | 116i_N43_SH | EUR_RL | X | O |
| UE51 | UE51 | E87 | 118i_N43_SH | EUR_LL | X | O |
| UE52 | UE52 | E87 | 118i_N43_SH | EUR_RL | X | O |
| UE71 | UE71 | E87 | 118i_N46T_SH | EUR_LL | X | O |
| UE72 | UE72 | E87 | 118i_N46T_SH | EUR_RL | X | O |
| UF11 | UF11 | E87 | 116i_N45_SH | EUR_LL | X | X |
| UF12 | UF12 | E87 | 116i_N45_SH | EUR_RL | X | X |
| UF31 | UF31 | E87 | 118i_N46_SH | EUR_LL | X | X |
| UF32 | UF32 | E87 | 118i_N46_SH | EUR_RL | X | X |
| UF51 | UF51 | E87 | 120i_N46_SH | EUR_LL | X | X |
| UF52 | UF52 | E87 | 120i_N46_SH | EUR_RL | X | X |
| UF91 | UF91 | E87 | 130i_N52_SH | EUR_LL | X | X |
| UF92 | UF92 | E87 | 130i_N52_SH | EUR_RL | X | X |
| UG12 | UG12 | E90 | M3_S65_LIM | EUR_LL | X | O |
| UG31 | UG31 | E87 | 118d_M47/T2_SH | EUR_LL | X | O |
| UG32 | UG32 | E87 | 118d_M47/T2_SH | EUR_RL | X | O |
| UG51 | UG51 | E87 | 120d_M47/T2_SH | EUR_LL | X | O |
| UG52 | UG52 | E87 | 120d_M47/T2_SH | EUR_RL | X | O |
| UH11 | UH11 | E87 | 123d_N47S_SH | EUR_LL | X | O |
| UH12 | UH12 | E87 | 123d_N47S_SH | EUR_RL | X | O |
| UH31 | UH31 | E87 | 116i_N43_SH | EUR_LL | X | X |
| UH32 | UH32 | E87 | 116i_N43_SH | EUR_RL | X | X |
| UH51 | UH51 | E87 | 116d_N47DK0_SH | EUR_LL | X | X |
| UH52 | UH52 | E87 | 116d_N47DK0_SH | EUR_RL | X | X |
| UK11 | UK11 | E81 | 123d_N47S_HC | EUR_LL | X | O |
| UK12 | UK12 | E81 | 123d_N47S_HC | EUR_RL | X | O |
| UK31 | UK31 | E81 | 116i_N43_HC | EUR_RL | X | X |
| UK32 | UK32 | E81 | 116i_N43_HC | EUR_RL | X | X |
| UK51 | UK51 | E81 | 116d_N47DK0_HC | EUR_LL | X | X |
| UK52 | UK52 | E81 | 116d_N47DK0_HC | EUR_RL | X | X |
| UL31 | UL31 | E88 | 116i_N43_CABRIO | EUR_LL | X | O |
| UL32 | UL32 | E88 | 116i_N43_CABRIO | EUR_RL | X | O |
| UL51 | UL51 | E88 | 120i_N46T_CABRIO | EUR_LL | X | O |
| UL52 | UL52 | E88 | 120i_N46T_CABRIO | EUR_RL | X | O |
| UL73 | UL73 | E88 | 128i_N52K_CABRIO | USA_LL | X | O |
| UL91 | UL91 | E88 | 125i_N52K_CABRIO | EUR_LL | X | O |
| UL92 | UL92 | E88 | 125i_N52K_CABRIO | EUR_RL | X | O |
| UL93 | UL93 | E88 | 130i_N52K_CABRIO | USA_LL | X | O |
| UM11 | UM11 | E88 | 118i_N43_CABRIO | EUR_LL | X | O |
| UM12 | UM12 | E88 | 118i_N43_CABRIO | EUR_RL | X | O |
| UM31 | UM31 | E88 | 118i_N46T_CABRIO | EUR_LL | X | O |
| UM32 | UM32 | E88 | 118i_N46T_CABRIO | EUR_RL | X | O |
| UM51 | UM51 | E88 | 120i_N43_CABRIO | EUR_LL | X | O |
| UM52 | UM52 | E88 | 120i_N43_CABRIO | EUR_RL | X | O |
| UM71 | UM71 | E88 | 120d_N47_CABRIO | EUR_LL | X | O |
| UM72 | UM72 | E88 | 120d_N47_CABRIO | EUR_RL | X | O |
| UM72 | UM72 | E88 | 120d_N47_CABRIO | EUR_RL | X | O |
| UM91 | UM91 | E88 | 118d_N47_CABRIO | EUR_LL | X | O |
| UM92 | UM92 | E88 | 118d_N47_CABRIO | EUR_RL | X | O |
| UN13 | UN13 | E88 | 128i_N51_CABRIO | USA_LL | X | O |
| UN91 | UN91 | E88 | 135i_N54_CABRIO | EUR_LL | X | O |
| UN92 | UN92 | E88 | 135i_N54_CABRIO | EUR_RL | X | O |
| UN93 | UN93 | E88 | 135i_N54_CABRIO | USA_LL | X | O |
| UP11 | UP11 | E88 | 123d_N47S_CABRIO | EUR_LL | X | O |
| UP12 | UP12 | E88 | 123d_N47S_CABRIO | EUR_RL | X | O |
| UP73 | UP73 | E82 | 128i_N52K_COUPE | USA_LL | X | O |
| UP93 | UP93 | E82 | 128i_N51_COUPE | USA_LL | X | O |
| UR31 | UR31 | E82 | 120d_N47_COUPE | EUR_LL | X | O |
| UR32 | UR32 | E82 | 120d_N47_COUPE | EUR_RL | X | O |
| UR51 | UR51 | E82 | 123d_N47S_COUPE | EUR_LL | X | O |
| UR52 | UR52 | E82 | 123d_N47S_COUPE | EUR_RL | X | O |
| PF11 | PF11 | E90 | 316i_N45T_LIM | EUR_LL | X | X |
| PF12 | PF12 | E90 | 316i_N45T_LIM | EUR_RL | X | X |
| PF31 | PF31 | E90 | 316i_N43_LIM | EUR_LL | X | X |
| PF32 | PF32 | E90 | 316i_N43_LIM | EUR_RL | X | X |
| PF51 | PF51 | E90 | 318i_N43_LIM | EUR_LL | X | X |
| PF52 | PF52 | E90 | 318i_N43_LIM | EUR_RL | X | X |
| PF71 | PF71 | E90 | 318i_N46T_LIM | EUR_LL | X | X |
| PF72 | PF72 | E90 | 318i_N46T_LIM | EUR_RL | X | X |
| PF77 | PF77 | E90 | 318i_N46T_LIM | THA_RL | X | X |
| PF78 | PF78 | E90 | 318i_N46T_LIM | RUS_LL | X | X |
| PG11 | PG11 | E90 | 318d_N47T_LIM | EUR_LL | X | O |
| PG12 | PG12 | E90 | 318d_N47T_LIM | EUR_RL | X | O |
| PG31 | PG31 | E90 | 320i_N43_LIM | EUR_LL | X | X |
| PG32 | PG32 | E90 | 320i_N43_LIM | EUR_RL | X | X |
| PG36 | PG36 | E90 | 320i_N43_LIM | EUR_RL | X | X |
| PG51 | PG51 | E90 | 320i_N46T_LIM | EUR_LL | X | X |
| PG52 | PG52 | E90 | 320i_N46T_LIM | EUR_RL | X | X |
| PG54 | PG54 | E90 | 320i_N46T_LIM | MYS_RL | X | X |
| PG55 | PG55 | E90 | 320i_N46T_LIM | EUR_LL | X | X |
| PG56 | PG56 | E90 | 320i_N46T_LIM | EUR_RL | X | X |
| PG57 | PG57 | E90 | 320i_N46T_LIM | IDN_RL | X | X |
| PG59 | PG59 | E90 | 318i_N46T_LIM | EGY_LL | X | O |
| PG71 | PG71 | E90 | 323i_N52K_LIM | EUR_LL | X | X |
| PG72 | PG72 | E90 | 323i_N52K_LIM | EUR_RL | X | X |
| PG73 | PG73 | E90 | 323i_N52K_LIM | USA_LL | X | X |
| PG74 | PG74 | E90 | 323i_N52K_LIM | MYS_RL | X | X |
| PG75 | PG75 | E90 | 323i_N52K_LIM | EUR_LL | X | X |
| PG76 | PG76 | E90 | 323i_N52K_LIM | EUR_RL | X | X |
| PG95 | PG95 | E90 | 320i_N46T_LIM | IND_RL | X | X |
| PG96 | PG96 | E90 | 320i_N46T_LIM | CHN_LL | X | X |
| PG97 | PG97 | E90 | 320i_N46T_LIM | THA_RL | X | X |
| PG98 | PG98 | E90 | 320i_N46T_LIM | RUS_LL | X | X |
| PG99 | PG99 | E90 | 320i_N46T_LIM | EGY_LL | X | X |
| PH11 | PH11 | E90 | 325i_N52K_LIM | EUR_LL | X | X |
| PH12 | PH12 | E90 | 325i_N52K_LIM | EUR_RL | X | X |
| PH14 | PH14 | E90 | 325i_N52K_LIM | RUS_LL | X | X |
| PH15 | PH15 | E90 | 325i_N52K_LIM | EUR_LL | X | X |
| PH16 | PH16 | E90 | 325i_N52K_LIM | EUR_RL | X | X |
| PH17 | PH17 | E90 | 325i_N52K_LIM | THA_RL | X | X |
| PH18 | PH18 | E90 | 325i_N52K_LIM | CHN_LL | X | X |
| PH31 | PH31 | E90 | 325i_N53_LIM | EUR_LL | X | X |
| PH32 | PH32 | E90 | 325i_N53_LIM | EUR_RL | X | X |
| PH35 | PH35 | E90 | 325i_N53_LIM | EUR_LL | X | X |
| PH36 | PH36 | E90 | 325i_N53_LIM | EUR_RL | X | X |
| PH37 | PH37 | E90 | 325i_N52K_LIM | IDN_RL | X | X |
| PH39 | PH39 | E90 | 325i_N52K_LIM | MYS_RL | X | X |
| PH51 | PH51 | E90 | 328i_N51_LIM | EUR_LL | X | X |
| PH53 | PH53 | E90 | 328i_N51_LIM | USA_LL | X | X |
| PH55 | PH55 | E90 | 328i_N51_LIM | EUR_LL | X | X |
| PH57 | PH57 | E90 | 328i_N51_LIM | USA_LL | X | X |
| PH73 | PH73 | E90 | 328i_N52K_LIM | USA_LL | X | X |
| PH77 | PH77 | E90 | 328i_N52K_LIM | USA_LL | X | X |
| PH95 | PH95 | E90 | 325i_N52K_LIM | IND_RL | X | X |
| PK11 | PK11 | E90 | 325xi_N52K_LIM | EUR_LL | X | X |
| PK14 | PK14 | E90 | 325xi_N52K_LIM | RUS_LL | X | X |
| PK31 | PK31 | E90 | 325xi_N53_LIM | EUR_LL | X | X |
| PK53 | PK53 | E90 | 328xi_N51_LIM | USA_LL | X | X |
| PK73 | PK73 | E90 | 328xi_N52K_LIM | USA_LL | X | X |
| PL11 | PL11 | E90 | 330xi_N53_LIM | EUR_LL | X | X |
| PL31 | PL31 | E90 | 335xi_N54_LIM | EUR_LL | X | X |
| PL33 | PL33 | E90 | 335xi_N54_LIM | USA_LL | X | X |
| PL51 | PL51 | E90 | 335xi_N55_LIM | EUR_LL | X | O |
| PL53 | PL53 | E90 | 335xi_N55_LIM | USA_LL | X | O |
| PM11 | PM11 | E90 | 330i_N53_LIM | EUR_LL | X | X |
| PM12 | PM12 | E90 | 330i_N53_LIM | EUR_RL | X | X |
| PM31 | PM31 | E90 | 330i_N52K_LIM | EUR_LL | X | X |
| PM32 | PM32 | E90 | 330i_N52K_LIM | EUR_RL | X | X |
| PM35 | PM35 | E90 | 330i_N52K_LIM | EUR_LL | X | X |
| PM36 | PM36 | E90 | 330i_N52K_LIM | EUR_RL | X | X |
| PM38 | PM38 | E90 | 330i_N52K_LIM | THA_RL | X | X |
| PM39 | PM39 | E90 | 330i_N52K_LIM | EGY_LL | X | O |
| PM51 | PM51 | E90 | 335i_N55_LIM | EUR_LL | X | O |
| PM52 | PM52 | E90 | 335i_N55_LIM | EUR_RL | X | O |
| PM53 | PM53 | E90 | 335i_N55_LIM | USA_LL | X | O |
| PM55 | PM55 | E90 | 335i_N55_LIM | EUR_LL | X | O |
| PM56 | PM56 | E90 | 335i_N55_LIM | EUR_RL | X | O |
| PM57 | PM57 | E90 | 335i_N55_LIM | USA_LL | X | O |
| PM71 | PM71 | E90 | 335i_N54_LIM | EUR_LL | X | X |
| PM72 | PM72 | E90 | 335i_N54_LIM | EUR_RL | X | X |
| PM73 | PM73 | E90 | 335i_N54_LIM | USA_LL | X | X |
| PM75 | PM75 | E90 | 335i_N54_LIM | EUR_LL | X | X |
| PM76 | PM76 | E90 | 335i_N54_LIM | EUR_RL | X | X |
| PM77 | PM77 | E90 | 335i_N54_LIM | USA_LL | X | X |
| PM91 | PM91 | E90 | M3_S65_LIM | EUR_LL | X | X |
| PM92 | PM92 | E90 | M3_S65_LIM | EUR_RL | X | X |
| PM93 | PM93 | E90 | M3_S65_LIM | USA_LL | X | X |
| PN11 | PN11 | E90 | 318d_N47_LIM | EUR_LL | X | X |
| PN12 | PN12 | E90 | 318d_N47_LIM | EUR_RL | X | X |
| PN31 | PN31 | E90 | 320d_N47_LIM | EUR_LL | X | X |
| PN32 | PN32 | E90 | 320d_N47_LIM | EUR_RL | X | X |
| PN35 | PN35 | E90 | 320d_N47_LIM | EUR_LL | X | X |
| PN36 | PN36 | E90 | 320d_N47_LIM | EUR_RL | X | X |
| PN37 | PN37 | E90 | 320d_N47_LIM | IND_RL | X | X |
| PN38 | PN38 | E90 | 320d_N47_LIM | THA_RL | X | X |
| PN51 | PN51 | E90 | 325d_M57/T2_LIM | EUR_LL | X | X |
| PN52 | PN52 | E90 | 325d_M57/T2_LIM | EUR_RL | X | X |
| PN71 | PN71 | E90 | 335d_M57Y_LIM | EUR_LL | X | X |
| PN72 | PN72 | E90 | 335d_M57Y_LIM | EUR_RL | X | X |
| PN73 | PN73 | E90 | 335d_M57Y_LIM | USA_LL | X | X |
| PP11 | PP11 | E90 | 320d_N47T_LIM | EUR_LL | X | O |
| PP12 | PP12 | E90 | 320d_N47T_LIM | EUR_RL | X | O |
| PP14 | PP14 | E90 | 320d_N47T_LIM | THA_RL | X | O |
| PP16 | PP16 | E90 | 320d_N47T_LIM | EUR_RL | X | O |
| PP17 | PP17 | E90 | 320d_N47T_LIM | IND_RL | X | O |
| PP31 | PP31 | E90 | 320xd_N47T_LIM | EUR_LL | X | O |
| PP71 | PP71 | E90 | 320xd_N47_LIM | EUR_LL | X | X |
| PP91 | PP91 | E90 | 330xd_N57_LIM | EUR_LL | X | X |
| PR91 | PR91 | E90 | 330d_N57_LIM | EUR_LL | X | X |
| PR92 | PR92 | E90 | 330d_N57_LIM | EUR_RL | X | X |
| PR96 | PR96 | E90 | 330d_N57_LIM | EUR_RL | X | X |
| PS31 | PS31 | E90 | 318i_N46T_LIM | CHN_LL | X | X |
| PS51 | PS51 | E90 | 320i_N46T_LIM | CHN_LL | X | X |
| PS71 | PS71 | E90 | 325i_N52K_LIM | CHN_LL | X | X |
| VA11 | VA11 | E90 | 316i_N45_LIM | EUR_LL | X | X |
| VA12 | VA12 | E90 | 316i_N45_LIM | EUR_RL | X | X |
| VA31 | VA31 | E90 | 328i_N51_LIM | EUR_LL | X | X |
| VA33 | VA33 | E90 | 328i_N52K_LIM | USA_LL | X | X |
| VA37 | VA37 | E90 | 328i_N52K_LIM | USA_LL | X | X |
| VA51 | VA51 | E90 | 318i_N46_LIM | EUR_LL | X | X |
| VA52 | VA52 | E90 | 318i_N46_LIM | EUR_RL | X | X |
| VA57 | VA57 | E90 | 318i_N46_LIM | THA_RL | X | X |
| VA71 | VA71 | E90 | 320i_N46_LIM | EUR_LL | X | X |
| VA72 | VA72 | E90 | 320i_N46_LIM | EUR_RL | X | X |
| VA74 | VA74 | E90 | 320i_N46_LIM | MYS_RL | X | X |
| VA75 | VA75 | E90 | 320i_N46_LIM | EUR_LL | X | X |
| VA76 | VA76 | E90 | 320i_N46_LIM | EUR_RL | X | X |
| VA77 | VA77 | E90 | 320i_N46_LIM | IDN_RL | X | X |
| VA91 | VA91 | E90 | M3_S65_LIM | EUR_LL | X | X |
| VA92 | VA92 | E90 | M3_S65_LIM | EUR_RL | X | X |
| VA93 | VA93 | E90 | M3_S65_LIM | USA_LL | X | X |
| VA95 | VA95 | E90 | 320i_N46_LIM | IND_RL | X | X |
| VA96 | VA96 | E90 | 320i_N46_LIM | CHN_LL | X | X |
| VA97 | VA97 | E90 | 320i_N46_LIM | THA_RL | X | X |
| VA98 | VA98 | E90 | 320i_N46_LIM | RUS_LL | X | X |
| VA99 | VA99 | E90 | 320i_N46_LIM | EGY_LL | X | X |
| VB11 | VB11 | E90 | 325i_N52_LIM | EUR_LL | X | X |
| VB12 | VB12 | E90 | 325i_N52_LIM | EUR_RL | X | X |
| VB13 | VB13 | E90 | 325i_N52_LIM | USA_LL | X | X |
| VB14 | VB14 | E90 | 325i_N52_LIM | RUS_LL | X | X |
| VB15 | VB15 | E90 | 325i_N52_LIM | EUR_LL | X | X |
| VB16 | VB16 | E90 | 325i_N52_LIM | EUR_RL | X | X |
| VB17 | VB17 | E90 | 325i_N52_LIM | USA_LL | X | X |
| VB19 | VB19 | E90 | 325i_N52_LIM | IDN_RL | X | X |
| VB31 | VB31 | E90 | 330i_N52_LIM | EUR_LL | X | X |
| VB32 | VB32 | E90 | 330i_N52_LIM | EUR_RL | X | X |
| VB33 | VB33 | E90 | 330i_N52_LIM | USA_LL | X | X |
| VB35 | VB35 | E90 | 330i_N52_LIM | EUR_LL | X | X |
| VB36 | VB36 | E90 | 330i_N52_LIM | EUR_RL | X | X |
| VB37 | VB37 | E90 | 330i_N52_LIM | CHN_LL | X | X |
| VB38 | VB38 | E90 | 330i_N52_LIM | THA_RL | X | X |
| VB51 | VB51 | E90 | 323i_N52_LIM | EUR_LL | X | X |
| VB52 | VB52 | E90 | 323i_N52_LIM | EUR_RL | X | X |
| VB53 | VB53 | E90 | 323i_N52_LIM | USA_LL | X | X |
| VB55 | VB55 | E90 | 323i_N52_LIM | EUR_LL | X | X |
| VB56 | VB56 | E90 | 323i_N52_LIM | EUR_RL | X | X |
| VB59 | VB59 | E90 | 325i_N52_LIM | CHN_LL | X | X |
| VB71 | VB71 | E90 | 335i_N54_LIM | EUR_LL | X | X |
| VB72 | VB72 | E90 | 335i_N54_LIM | EUR_RL | X | X |
| VB73 | VB73 | E90 | 335i_N54_LIM | USA_LL | X | X |
| VB75 | VB75 | E90 | 335i_N54_LIM | EUR_LL | X | X |
| VB76 | VB76 | E90 | 335i_N54_LIM | EUR_RL | X | X |
| VB77 | VB77 | E90 | 335i_N54_LIM | USA_LL | X | X |
| VB79 | VB79 | E90 | 325i_N52_LIM | EGY_LL | X | X |
| VB95 | VB95 | E90 | 325i_N52_LIM | IND_RL | X | X |
| VB97 | VB97 | E90 | 325i_N52_LIM | THA_RL | X | X |
| VB99 | VB99 | E90 | 325i_N52_LIM | MYS_RL | X | X |
| VC11 | VC11 | E90 | 318d_M47/T2_LIM | EUR_LL | X | O |
| VC12 | VC12 | E90 | 318d_M47/T2_LIM | EUR_RL | X | O |
| VC31 | VC31 | E90 | 320d_M47/T2_LIM | EUR_LL | X | X |
| VC32 | VC32 | E90 | 320d_M47/T2_LIM | EUR_RL | X | X |
| VC36 | VC36 | E90 | 320d_M47/T2_LIM | EUR_RL | X | X |
| VC37 | VC37 | E90 | 320d_M47/T2_LIM | IND_RL | X | X |
| VC51 | VC51 | E90 | 325d_M57/T2_LIM | EUR_LL | X | X |
| VC52 | VC52 | E90 | 325d_M57/T2_LIM | EUR_RL | X | X |
| VC53 | VC53 | E90 | 328i_N51_LIM | USA_LL | X | X |
| VC57 | VC57 | E90 | 328i_N51_LIM | USA_LL | X | X |
| VC73 | VC73 | E90 | 328xi_N51_LIM | USA_LL | X | X |
| VC91 | VC91 | E90 | 330d_M57/T2_LIM | EUR_LL | X | X |
| VC92 | VC92 | E90 | 330d_M57/T2_LIM | EUR_RL | X | X |
| VC93 | VC93 | E90 | 328xi_N52K_LIM | USA_LL | X | X |
| VC96 | VC96 | E90 | 330d_M57/T2_LIM | EUR_RL | X | X |
| VD11 | VD11 | E90 | 325xi_N52_LIM | EUR_LL | X | X |
| VD13 | VD13 | E90 | 325xi_N52_LIM | USA_LL | X | X |
| VD31 | VD31 | E90 | 330xi_N52_LIM | EUR_LL | X | X |
| VD33 | VD33 | E90 | 330xi_N52_LIM | USA_LL | X | X |
| VD51 | VD51 | E90 | 335xi_N54_LIM | EUR_LL | X | X |
| VD53 | VD53 | E90 | 335xi_N54_LIM | USA_LL | X | X |
| VD71 | VD71 | E90 | 335d_M57Y_LIM | EUR_LL | X | X |
| VD72 | VD72 | E90 | 335d_M57Y_LIM | EUR_RL | X | X |
| VD91 | VD91 | E90 | 330xd_M57/T2_LIM | EUR_LL | X | O |
| VE31 | VE31 | E90 | 325i_N53_LIM | EUR_LL | X | X |
| VE32 | VE32 | E90 | 325i_N53_LIM | EUR_RL | X | X |
| VE51 | VE51 | E90 | 325xi_N53_LIM | EUR_LL | X | X |
| VE71 | VE71 | E90 | 330i_N53_LIM | EUR_LL | X | X |
| VE72 | VE72 | E90 | 330i_N53_LIM | EUR_RL | X | X |
| VE91 | VE91 | E90 | 330xi_N53_LIM | EUR_LL | X | X |
| VF11 | VF11 | E90 | 325xi_N52K_LIM | EUR_LL | X | X |
| VF14 | VF14 | E90 | 325xi_N52K_LIM | RUS_LL | X | X |
| VF31 | VF31 | E90 | 316i_N43_LIM | EUR_LL | X | X |
| VF32 | VF32 | E90 | 316i_N43_LIM | EUR_RL | X | X |
| VF51 | VF51 | E90 | 318i_N43_LIM | EUR_LL | X | X |
| VF52 | VF52 | E90 | 318i_N43_LIM | EUR_RL | X | X |
| VF71 | VF71 | E90 | 320si_N45_LIM | EUR_LL | X | X |
| VF72 | VF72 | E90 | 320si_N45_LIM | EUR_RL | X | X |
| VF91 | VF91 | E90 | 320i_N43_LIM | EUR_LL | X | X |
| VF92 | VF92 | E90 | 320i_N43_LIM | EUR_RL | X | X |
| VG11 | VG11 | E90 | 318d_N47_LIM | EUR_LL | X | X |
| VG12 | VG12 | E90 | 318d_N47_LIM | EUR_RL | X | X |
| VG31 | VG31 | E90 | 316i_N45T_LIM | EUR_LL | X | X |
| VG32 | VG32 | E90 | 316i_N45T_LIM | EUR_RL | X | X |
| VG37 | VG37 | E90 | 320d_N47_LIM | IND_RL | X | X |
| VG38 | VG38 | E90 | 320d_N47_LIM | THA_RL | X | X |
| VG51 | VG51 | E90 | 318i_N46T_LIM | EUR_LL | X | X |
| VG52 | VG52 | E90 | 318i_N46T_LIM | EUR_RL | X | X |
| VG57 | VG57 | E90 | 318i_N46T_LIM | THA_RL | X | X |
| VG58 | VG58 | E90 | 318i_N46T_LIM | RUS_LL | X | X |
| VG71 | VG71 | E90 | 320i_N46T_LIM | EUR_LL | X | X |
| VG72 | VG72 | E90 | 320i_N46T_LIM | EUR_RL | X | X |
| VG74 | VG74 | E90 | 320i_N46T_LIM | MYS_RL | X | X |
| VG75 | VG75 | E90 | 320i_N46T_LIM | EUR_LL | X | X |
| VG76 | VG76 | E90 | 320i_N46T_LIM | EUR_RL | X | X |
| VG77 | VG77 | E90 | 320i_N46T_LIM | IDN_RL | X | X |
| VG79 | VG79 | E90 | 320i_N46T_LIM | CHN_LL | X | X |
| VG91 | VG91 | E90 | 320d_N47_LIM | EUR_LL | X | X |
| VG92 | VG92 | E90 | 320d_N47_LIM | EUR_RL | X | X |
| VG95 | VG95 | E90 | 320i_N46T_LIM | IND_RL | X | X |
| VG96 | VG96 | E90 | 320d_N47_LIM | EUR_RL | X | X |
| VG97 | VG97 | E90 | 320i_N46T_LIM | THA_RL | X | X |
| VG98 | VG98 | E90 | 320i_N46T_LIM | RUS_LL | X | X |
| VG99 | VG99 | E90 | 320i_N46T_LIM | EGY_LL | X | X |
| VH11 | VH11 | E90 | 323i_N52K_LIM | EUR_LL | X | X |
| VH12 | VH12 | E90 | 323i_N52K_LIM | EUR_RL | X | X |
| VH13 | VH13 | E90 | 323i_N52K_LIM | USA_LL | X | X |
| VH15 | VH15 | E90 | 323i_N52K_LIM | EUR_LL | X | X |
| VH16 | VH16 | E90 | 323i_N52K_LIM | EUR_RL | X | X |
| VH31 | VH31 | E90 | 325i_N52K_LIM | EUR_LL | X | X |
| VH32 | VH32 | E90 | 325i_N52K_LIM | EUR_RL | X | X |
| VH34 | VH34 | E90 | 325i_N52K_LIM | RUS_LL | X | X |
| VH35 | VH35 | E90 | 325i_N52K_LIM | EUR_LL | X | X |
| VH36 | VH36 | E90 | 325i_N52K_LIM | EUR_RL | X | X |
| VH37 | VH37 | E90 | 325i_N52K_LIM | THA_RL | X | X |
| VH38 | VH38 | E90 | 325i_N52K_LIM | CHN_LL | X | X |
| VH39 | VH39 | E90 | 325i_N52K_LIM | EGY_LL | X | X |
| VH51 | VH51 | E90 | 330i_N52K_LIM | EUR_LL | X | X |
| VH52 | VH52 | E90 | 330i_N52K_LIM | EUR_RL | X | X |
| VH55 | VH55 | E90 | 330i_N52K_LIM | EUR_LL | X | X |
| VH56 | VH56 | E90 | 330i_N52K_LIM | EUR_RL | X | X |
| VH57 | VH57 | E90 | 325i_N52K_LIM | IDN_RL | X | X |
| VH58 | VH58 | E90 | 330i_N52K_LIM | THA_RL | X | X |
| VH59 | VH59 | E90 | 325i_N52K_LIM | MYS_RL | X | X |
| VH95 | VH95 | E90 | 325i_N52K_LIM | IND_RL | X | X |
| US11 | US11 | E91 | 316i_N43_TOUR | EUR_LL | X | X |
| US31 | US31 | E91 | 318i_N43_TOUR | EUR_LL | X | X |
| US32 | US32 | E91 | 318i_N43_TOUR | EUR_RL | X | X |
| US51 | US51 | E91 | 318i_N46T_TOUR | EUR_LL | X | X |
| US52 | US52 | E91 | 318i_N46T_TOUR | EUR_RL | X | X |
| US71 | US71 | E91 | 320i_N46T_TOUR | EUR_LL | X | X |
| US72 | US72 | E91 | 320i_N46T_TOUR | EUR_RL | X | X |
| US91 | US91 | E91 | 320i_N43_TOUR | EUR_LL | X | X |
| US92 | US92 | E91 | 320i_N43_TOUR | EUR_RL | X | X |
| UT31 | UT31 | E91 | 318d_N47T_TOUR | EUR_LL | X | O |
| UT32 | UT32 | E91 | 318d_N47T_TOUR | EUR_RL | X | O |
| UT52 | UT52 | E91 | 323i_N52K_TOUR | EUR_RL | X | X |
| UT71 | UT71 | E91 | 325i_N53_TOUR | EUR_LL | X | X |
| UT72 | UT72 | E91 | 325i_N53_TOUR | EUR_RL | X | X |
| UT91 | UT91 | E91 | 325i_N52K_TOUR | EUR_LL | X | X |
| UT92 | UT92 | E91 | 325i_N52K_TOUR | EUR_RL | X | X |
| UT93 | UT93 | E91 | 328i_N52K_TOUR | USA_LL | X | X |
| UU11 | UU11 | E91 | 335xi_N55_TOUR | EUR_LL | X | O |
| UU31 | UU31 | E91 | 325xi_N52K_TOUR | EUR_LL | X | X |
| UU33 | UU33 | E91 | 328xi_N52K_TOUR | USA_LL | X | X |
| UU51 | UU51 | E91 | 325xi_N53_TOUR | EUR_LL | X | X |
| UU71 | UU71 | E91 | 330xi_N53_TOUR | EUR_LL | X | X |
| UU91 | UU91 | E91 | 335xi_N54_TOUR | EUR_LL | X | X |
| UV31 | UV31 | E91 | 330i_N52K_TOUR | EUR_LL | X | X |
| UV32 | UV32 | E91 | 330i_N52K_TOUR | EUR_RL | X | X |
| UV51 | UV51 | E91 | 330i_N53_TOUR | EUR_LL | X | X |
| UV52 | UV52 | E91 | 330i_N53_TOUR | EUR_RL | X | X |
| UV71 | UV71 | E91 | 335i_N54_TOUR | EUR_LL | X | X |
| UV72 | UV72 | E91 | 335i_N54_TOUR | EUR_RL | X | X |
| UV91 | UV91 | E91 | 335i_N55_TOUR | EUR_LL | X | O |
| UV92 | UV92 | E91 | 335i_N55_TOUR | EUR_RL | X | O |
| UW71 | UW71 | E91 | 320xd_N47_TOUR | EUR_LL | X | X |
| UW91 | UW91 | E91 | 330xd_N57_TOUR | EUR_LL | X | X |
| UX11 | UX11 | E91 | 318d_N47_TOUR | EUR_LL | X | X |
| UX12 | UX12 | E91 | 318d_N47_TOUR | EUR_RL | X | X |
| UX31 | UX31 | E91 | 320d_N47_TOUR | EUR_LL | X | X |
| UX32 | UX32 | E91 | 320d_N47_TOUR | EUR_RL | X | X |
| UX51 | UX51 | E91 | 325d_M57/T2_TOUR | EUR_LL | X | X |
| UX52 | UX52 | E91 | 325d_M57/T2_TOUR | EUR_RL | X | X |
| UX71 | UX71 | E91 | 335d_M57Y_TOUR | EUR_LL | X | O |
| UX72 | UX72 | E91 | 335d_M57Y_TOUR | EUR_RL | X | O |
| UY11 | UY11 | E91 | 320d_N47T_TOUR | EUR_LL | X | O |
| UY12 | UY12 | E91 | 320d_N47T_TOUR | EUR_RL | X | O |
| UY31 | UY31 | E91 | 320xd_N47T_TOUR | EUR_LL | X | O |
| UY91 | UY91 | E91 | 330d_N57_TOUR | EUR_LL | X | X |
| UY92 | UY92 | E91 | 330d_N57_TOUR | EUR_RL | X | X |
| VR31 | VR31 | E91 | 318i_N43_TOUR | EUR_LL | X | X |
| VR32 | VR32 | E91 | 318i_N43_TOUR | EUR_RL | X | X |
| VR51 | VR51 | E91 | 318i_N46_TOUR | EUR_LL | X | X |
| VR52 | VR52 | E91 | 318i_N46_TOUR | EUR_RL | X | X |
| VR71 | VR71 | E91 | 320i_N46_TOUR | EUR_LL | X | X |
| VR72 | VR72 | E91 | 320i_N46_TOUR | EUR_RL | X | X |
| VR91 | VR91 | E91 | 320i_N43_TOUR | EUR_LL | X | X |
| VR92 | VR92 | E91 | 320i_N43_TOUR | EUR_RL | X | X |
| VS11 | VS11 | E91 | 325i_N52_TOUR | EUR_LL | X | X |
| VS12 | VS12 | E91 | 325i_N52_TOUR | EUR_RL | X | X |
| VS13 | VS13 | E91 | 328i_N52K_TOUR | USA_LL | X | X |
| VS31 | VS31 | E91 | 330i_N52_TOUR | EUR_LL | X | X |
| VS32 | VS32 | E91 | 330i_N52_TOUR | EUR_RL | X | X |
| VS51 | VS51 | E91 | 323i_N52_TOUR | EUR_LL | X | X |
| VS52 | VS52 | E91 | 323i_N52_TOUR | EUR_RL | X | X |
| VS71 | VS71 | E91 | 335i_N54_TOUR | EUR_LL | X | X |
| VS72 | VS72 | E91 | 335i_N54_TOUR | EUR_RL | X | X |
| VS91 | VS91 | E91 | 335d_M57Y_TOUR | EUR_LL | X | O |
| VS92 | VS92 | E91 | 335d_M57Y_TOUR | EUR_RL | X | O |
| VT11 | VT11 | E91 | 325xi_N52_TOUR | EUR_LL | X | X |
| VT13 | VT13 | E91 | 325xi_N52_TOUR | USA_LL | X | X |
| VT31 | VT31 | E91 | 330xi_N52_TOUR | EUR_LL | X | X |
| VT51 | VT51 | E91 | 335xi_N54_TOUR | EUR_LL | X | X |
| VT71 | VT71 | E91 | 325xi_N52K_TOUR | EUR_LL | X | X |
| VT73 | VT73 | E91 | 328xi_N52K_TOUR | USA_LL | X | X |
| VT91 | VT91 | E91 | 330xd_M57/T2_TOUR | EUR_LL | X | O |
| VU11 | VU11 | E91 | 318d_M47/T2_TOUR | EUR_LL | X | O |
| VU12 | VU12 | E91 | 318d_M47/T2_TOUR | EUR_RL | X | O |
| VU31 | VU31 | E91 | 320d_M47/T2_TOUR | EUR_LL | X | O |
| VU32 | VU32 | E91 | 320d_M47/T2_TOUR | EUR_RL | X | O |
| VU51 | VU51 | E91 | 320d_N47_TOUR | EUR_LL | X | X |
| VU52 | VU52 | E91 | 320d_N47_TOUR | EUR_RL | X | X |
| VU71 | VU71 | E91 | 325d_M57/T2_TOUR | EUR_LL | X | X |
| VU72 | VU72 | E91 | 325d_M57/T2_TOUR | EUR_RL | X | X |
| VU91 | VU91 | E91 | 330d_M57/T2_TOUR | EUR_LL | X | O |
| VU92 | VU92 | E91 | 330d_M57/T2_TOUR | EUR_RL | X | O |
| VV31 | VV31 | E91 | 325i_N53_TOUR | EUR_LL | X | X |
| VV32 | VV32 | E91 | 325i_N53_TOUR | EUR_RL | X | X |
| VV51 | VV51 | E91 | 325xi_N53_TOUR | EUR_LL | X | X |
| VV71 | VV71 | E91 | 330i_N53_TOUR | EUR_LL | X | X |
| VV72 | VV72 | E91 | 330i_N53_TOUR | EUR_RL | X | X |
| VV91 | VV91 | E91 | 330xi_N53_TOUR | EUR_LL | X | X |
| VW11 | VW11 | E91 | 318d_N47_TOUR | EUR_LL | X | X |
| VW12 | VW12 | E91 | 318d_N47_TOUR | EUR_RL | X | X |
| VW31 | VW31 | E91 | 318i_N46T_TOUR | EUR_LL | X | X |
| VW32 | VW32 | E91 | 318i_N46T_TOUR | EUR_RL | X | X |
| VW52 | VW52 | E91 | 323i_N52K_TOUR | EUR_RL | X | X |
| VW71 | VW71 | E91 | 320i_N46T_TOUR | EUR_LL | X | X |
| VW72 | VW72 | E91 | 320i_N46T_TOUR | EUR_RL | X | X |
| VW91 | VW91 | E91 | 325i_N52K_TOUR | EUR_LL | X | X |
| VW92 | VW92 | E91 | 325i_N52K_TOUR | EUR_RL | X | X |
| VY31 | VY31 | E91 | 330i_N52K_TOUR | EUR_LL | X | X |
| VY32 | VY32 | E91 | 330i_N52K_TOUR | EUR_RL | X | X |
| KG01 | KG01 | E92 | M3_S65_COUPE | EUR_LL | X | X |
| KG91 | KG91 | E92 | M3_S65_COUPE | EUR_LL | X | X |
| KG92 | KG92 | E92 | M3_S65_COUPE | EUR_RL | X | X |
| KG93 | KG93 | E92 | M3_S65_COUPE | USA_LL | X | X |
| WA11 | WA11 | E92 | 316i_N43_COUPE | EUR_LL | X | X |
| WA12 | WA12 | E92 | 316i_N43_COUPE | EUR_RL | X | X |
| WA51 | WA51 | E92 | 320i_N46T_COUPE | EUR_LL | X | X |
| WA52 | WA52 | E92 | 320i_N46T_COUPE | EUR_RL | X | X |
| WA71 | WA71 | E92 | 320i_N43_COUPE | EUR_LL | X | X |
| WA72 | WA72 | E92 | 320i_N43_COUPE | EUR_RL | X | X |
| WA91 | WA91 | E92 | 330d_N57_COUPE | EUR_LL | X | X |
| WA92 | WA92 | E92 | 330d_N57_COUPE | EUR_RL | X | X |
| WB12 | WB12 | E92 | 323i_N52K_COUPE | EUR_RL | X | X |
| WB31 | WB31 | E92 | 325i_N52K_COUPE | EUR_LL | X | X |
| WB32 | WB32 | E92 | 325i_N52K_COUPE | EUR_RL | X | X |
| WB33 | WB33 | E92 | 328i_N52K_COUPE | USA_LL | X | X |
| WB51 | WB51 | E92 | 330i_N52K_COUPE | EUR_LL | X | X |
| WB52 | WB52 | E92 | 330i_N52K_COUPE | EUR_RL | X | X |
| WB71 | WB71 | E92 | 335i_N54_COUPE | EUR_LL | X | X |
| WB72 | WB72 | E92 | 335i_N54_COUPE | EUR_RL | X | X |
| WB73 | WB73 | E92 | 335i_N54_COUPE | USA_LL | X | X |
| WB91 | WB91 | E92 | 330xd_N57_COUPE | EUR_LL | X | X |
| WC11 | WC11 | E92 | 320xd_N47_COUPE | EUR_LL | X | X |
| WC31 | WC31 | E92 | 325xi_N52K_COUPE | EUR_LL | X | X |
| WC33 | WC33 | E92 | 328xi_N52K_COUPE | USA_LL | X | X |
| WC51 | WC51 | E92 | 330xi_N52K_COUPE | EUR_LL | X | X |
| WC71 | WC71 | E92 | 335xi_N54_COUPE | EUR_LL | X | X |
| WC73 | WC73 | E92 | 335xi_N54_COUPE | USA_LL | X | X |
| WC91 | WC91 | E92 | 330xd_M57/T2_COUPE | EUR_LL | X | O |
| WD11 | WD11 | E92 | 320d_N47_COUPE | EUR_LL | X | X |
| WD12 | WD12 | E92 | 320d_N47_COUPE | EUR_RL | X | X |
| WD31 | WD31 | E92 | 325d_M57/T2_COUPE | EUR_LL | X | X |
| WD32 | WD32 | E92 | 325d_M57/T2_COUPE | EUR_RL | X | X |
| WD51 | WD51 | E92 | 330d_M57/T2_COUPE | EUR_LL | X | O |
| WD52 | WD52 | E92 | 330d_M57/T2_COUPE | EUR_RL | X | O |
| WD71 | WD71 | E92 | 335d_M57Y_COUPE | EUR_LL | X | O |
| WD72 | WD72 | E92 | 335d_M57Y_COUPE | EUR_RL | X | O |
| WD91 | WD91 | E92 | M3_S65_COUPE | EUR_LL | X | X |
| WD92 | WD92 | E92 | M3_S65_COUPE | EUR_RL | X | X |
| WD93 | WD93 | E92 | M3_S65_COUPE | USA_LL | X | X |
| WE31 | WE31 | E92 | 325i_N53_COUPE | EUR_LL | X | X |
| WE32 | WE32 | E92 | 325i_N53_COUPE | EUR_RL | X | X |
| WE51 | WE51 | E92 | 325xi_N53_COUPE | EUR_LL | X | X |
| WE71 | WE71 | E92 | 330i_N53_COUPE | EUR_LL | X | X |
| WE72 | WE72 | E92 | 330i_N53_COUPE | EUR_RL | X | X |
| WE91 | WE91 | E92 | 330xi_N53_COUPE | EUR_LL | X | X |
| WV13 | WV13 | E92 | 328i_N51_COUPE | USA_LL | X | X |
| WV53 | WV53 | E92 | 328xi_N51_COUPE | USA_LL | X | X |
| DX91 | DX91 | E93 | M3_S65_CABRIO | EUR_LL | X | X |
| DX92 | DX92 | E93 | M3_S65_CABRIO | EUR_RL | X | X |
| DX93 | DX93 | E93 | M3_S65_CABRIO | USA_LL | X | X |
| WK51 | WK51 | E93 | 320i_N46T_CABRIO | EUR_LL | X | X |
| WK52 | WK52 | E93 | 320i_N46T_CABRIO | EUR_RL | X | X |
| WK71 | WK71 | E93 | 320i_N43_CABRIO | EUR_LL | X | X |
| WK72 | WK72 | E93 | 320i_N43_CABRIO | EUR_RL | X | X |
| WL11 | WL11 | E93 | 325i_N52K_CABRIO | EUR_LL | X | X |
| WL12 | WL12 | E93 | 325i_N52K_CABRIO | EUR_RL | X | X |
| WL13 | WL13 | E93 | 328i_N52K_CABRIO | USA_LL | X | X |
| WL32 | WL32 | E93 | 323i_N52K_CABRIO | EUR_RL | X | X |
| WL51 | WL51 | E93 | 330i_N52K_CABRIO | EUR_LL | X | X |
| WL52 | WL52 | E93 | 330i_N52K_CABRIO | EUR_RL | X | X |
| WL71 | WL71 | E93 | 335i_N54_CABRIO | EUR_LL | X | X |
| WL72 | WL72 | E93 | 335i_N54_CABRIO | EUR_RL | X | X |
| WL73 | WL73 | E93 | 335i_N54_CABRIO | USA_LL | X | X |
| WL91 | WL91 | E93 | M3_S65_CABRIO | EUR_LL | X | X |
| WL92 | WL92 | E93 | M3_S65_CABRIO | EUR_RL | X | X |
| WL93 | WL93 | E93 | M3_S65_CABRIO | USA_LL | X | X |
| WM31 | WM31 | E93 | 320d_N47_CABRIO | EUR_LL | X | X |
| WM32 | WM32 | E93 | 320d_N47_CABRIO | EUR_RL | X | X |
| WM51 | WM51 | E93 | 330d_M57/T2_CABRIO | EUR_LL | X | X |
| WM52 | WM52 | E93 | 330d_M57/T2_CABRIO | EUR_RL | X | X |
| WM71 | WM71 | E93 | 325d_M57/T2_CABRIO | EUR_LL | X | X |
| WM72 | WM72 | E93 | 325d_M57/T2_CABRIO | EUR_RL | X | X |
| WM91 | WM91 | E93 | 330d_N57_CABRIO | EUR_LL | X | X |
| WM92 | WM92 | E93 | 330d_N57_CABRIO | EUR_RL | X | X |
| WN31 | WN31 | E93 | 325i_N53_CABRIO | EUR_LL | X | X |
| WN32 | WN32 | E93 | 325i_N53_CABRIO | EUR_RL | X | X |
| WN71 | WN71 | E93 | 330i_N53_CABRIO | EUR_LL | X | X |
| WN72 | WN72 | E93 | 330i_N53_CABRIO | EUR_RL | X | X |
| WR31 | WR31 | E93 | 328i_N51_CABRIO | EUR_LL | X | X |
| WR33 | WR33 | E93 | 328i_N51_CABRIO | USA_LL | X | X |
| UNBEK | UNBEK | UNBEK | UNBEK | UNBEK | - | - |

### GM_TEXTE

| GMTYP | TYP | BR | VERK | MOTOR | ANTR | GETR | HUBR | KAROS | LEIST | LENK | TUER | LAND | REIHE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 8301 | 8301 | E93 | 325I OL | N53 | HECK | MECH | 25.00 | CABRIO | 160 | LL | 2 | EUR | 3 |
| 0T16 | 0T16 | R51 | R51/2 | 2-ZYL |  |  | 5.00 |  | 0 |  | 0 | ECE | R |
| 0T17 | 0T17 | R51 | R51/3 | 2-ZYL |  |  | 5.00 |  | 0 |  | 0 | ECE | R |
| 0T19 | 0T19 | R67 | R67 | 2-ZYL |  |  | 6.00 |  | 0 |  | 0 | ECE | R |
| 0T20 | 0T20 | R67 | R67/2/3 | 2-ZYL |  |  | 6.00 |  | 0 |  | 0 | ECE | R |
| 0T21 | 0T21 | R68 | R68 | 2-ZYL |  |  | 6.00 |  | 0 |  | 0 | ECE | R |
| 1031 | BE11 | E36 | 316I | M43 | HECK | MECH | 16.00 | COUPE | 75 | LL | 2 | EUR | 3 |
| 1032 | BE12 | E36 | 316I | M43 | HECK | MECH | 16.00 | COUPE | 75 | RL | 2 | EUR | 3 |
| 1041 | BE21 | E36 | 316I | M43 | HECK | AUT | 16.00 | COUPE | 75 | LL | 2 | EUR | 3 |
| 1042 | BE22 | E36 | 316I | M43 | HECK | AUT | 16.00 | COUPE | 75 | RL | 2 | EUR | 3 |
| 1051 | BE51 | E36 | 318IS | M42 | HECK | MECH | 18.00 | COUPE | 103 | LL | 2 | ECE | 3 |
| 1052 | BE52 | E36 | 318IS | M42 | HECK | MECH | 18.00 | COUPE | 103 | RL | 2 | ECE | 3 |
| 1053 | BE53 | E36 | 318IS | M42 | HECK | MECH | 18.00 | COUPE | 103 | LL | 2 | USA | 3 |
| 1061 | BE61 | E36 | 318IS | M42 | HECK | AUT | 18.00 | COUPE | 103 | LL | 2 | ECE | 3 |
| 1062 | BE62 | E36 | 318IS | M42 | HECK | AUT | 18.00 | COUPE | 103 | RL | 2 | ECE | 3 |
| 1063 | BE63 | E36 | 318IS | M42 | HECK | AUT | 18.00 | COUPE | 103 | LL | 2 | USA | 3 |
| 1071 | BE71 | E36 | 318IS | M44 | HECK | MECH | 19.00 | COUPE | 103 | LL | 2 | EUR | 3 |
| 1072 | BE72 | E36 | 318IS | M44 | HECK | MECH | 19.00 | COUPE | 103 | RL | 2 | EUR | 3 |
| 1073 | BE73 | E36 | 318IS | M44 | HECK | MECH | 19.00 | COUPE | 103 | LL | 2 | USA | 3 |
| 1081 | BE81 | E36 | 318IS | M44 | HECK | AUT | 19.00 | COUPE | 103 | LL | 2 | EUR | 3 |
| 1082 | BE82 | E36 | 318IS | M44 | HECK | AUT | 19.00 | COUPE | 103 | RL | 2 | EUR | 3 |
| 1083 | BE83 | E36 | 318IS | M44 | HECK | AUT | 19.00 | COUPE | 103 | LL | 2 | USA | 3 |
| 1103 | BF03 | E36 | M3 | S50US | HECK | AUT | 30.00 | COUPE | 176 | LL | 2 | USA | 3 |
| 1111 | BF11 | E36 | 320I | M50 | HECK | MECH | 20.00 | COUPE | 110 | LL | 2 | ECE | 3 |
| 1112 | BF12 | E36 | 320I | M50 | HECK | MECH | 20.00 | COUPE | 110 | RL | 2 | ECE | 3 |
| 1121 | BF21 | E36 | 320I | M50 | HECK | AUT | 20.00 | COUPE | 110 | LL | 2 | ECE | 3 |
| 1122 | BF22 | E36 | 320I | M50 | HECK | AUT | 20.00 | COUPE | 110 | RL | 2 | ECE | 3 |
| 1131 | BF31 | E36 | 325I | M50 | HECK | MECH | 25.00 | COUPE | 141 | LL | 2 | ECE | 3 |
| 1132 | BF32 | E36 | 325I | M50 | HECK | MECH | 25.00 | COUPE | 141 | RL | 2 | ECE | 3 |
| 1133 | BF33 | E36 | 325IS | M50 | HECK | MECH | 25.00 | COUPE | 141 | LL | 2 | USA | 3 |
| 1138 | BF38 | E36 | 325I | M50 | HECK | MECH | 25.00 | COUPE | 141 | RL | 2 | ZAF | 3 |
| 1141 | BF41 | E36 | 325I | M50 | HECK | AUT | 25.00 | COUPE | 141 | LL | 2 | ECE | 3 |
| 1142 | BF42 | E36 | 325I | M50 | HECK | AUT | 25.00 | COUPE | 141 | RL | 2 | ECE | 3 |
| 1143 | BF43 | E36 | 325IS | M50 | HECK | AUT | 25.00 | COUPE | 141 | LL | 2 | USA | 3 |
| 1148 | BF48 | E36 | 325I | M50 | HECK | AUT | 25.00 | COUPE | 141 | RL | 2 | ZAF | 3 |
| 1151 | BF51 | E36 | 320I | M52 | HECK | MECH | 20.00 | COUPE | 110 | LL | 2 | EUR | 3 |
| 1161 | BF61 | E36 | 320I | M52 | HECK | AUT | 20.00 | COUPE | 110 | LL | 2 | EUR | 3 |
| 1171 | BF71 | E36 | 323I | M52 | HECK | MECH | 25.00 | COUPE | 125 | LL | 2 | EUR | 3 |
| 1172 | BF72 | E36 | 323I | M52 | HECK | MECH | 25.00 | COUPE | 125 | RL | 2 | EUR | 3 |
| 1173 | BF73 | E36 | 323I | M52 | HECK | MECH | 25.00 | COUPE | 125 | LL | 2 | USA | 3 |
| 1181 | BF81 | E36 | 323I | M52 | HECK | AUT | 25.00 | COUPE | 125 | LL | 2 | EUR | 3 |
| 1182 | BF82 | E36 | 323I | M52 | HECK | AUT | 25.00 | COUPE | 125 | RL | 2 | EUR | 3 |
| 1183 | BF83 | E36 | 323I | M52 | HECK | AUT | 25.00 | COUPE | 125 | LL | 2 | USA | 3 |
| 1191 | BF91 | E36 | M3 | S50 | HECK | MECH | 30.00 | COUPE | 210 | LL | 2 | ECE | 3 |
| 1192 | BF92 | E36 | M3 | S50 | HECK | MECH | 30.00 | COUPE | 210 | RL | 2 | ECE | 3 |
| 1193 | BF93 | E36 | M3 | S50US | HECK | MECH | 30.00 | COUPE | 176 | LL | 2 | USA | 3 |
| 1198 | BF98 | E36 | M3 | S50 | HECK | MECH | 30.00 | COUPE | 210 | RL | 2 | ZAF | 3 |
| 1199 | BF99 | E36 | M3 | S50 | HECK | MECH | 30.00 | COUPE | 217 | LL | 2 | EUR | 3 |
| 11A1 | BG11 | E36 | 328I | M52 | HECK | MECH | 28.00 | COUPE | 142 | LL | 2 | EUR | 3 |
| 11A2 | BG12 | E36 | 328I | M52 | HECK | MECH | 28.00 | COUPE | 142 | RL | 2 | EUR | 3 |
| 11A3 | BG13 | E36 | 328I | M52 | HECK | MECH | 28.00 | COUPE | 142 | LL | 2 | USA | 3 |
| 11B1 | BG21 | E36 | 328I | M52 | HECK | AUT | 28.00 | COUPE | 142 | LL | 2 | EUR | 3 |
| 11B2 | BG22 | E36 | 328I | M52 | HECK | AUT | 28.00 | COUPE | 142 | RL | 2 | EUR | 3 |
| 11B3 | BG23 | E36 | 328I | M52 | HECK | AUT | 28.00 | COUPE | 142 | LL | 2 | USA | 3 |
| 11E1 | BG91 | E36 | M3 | S50 | HECK | MECH | 32.00 | COUPE | 236 | LL | 2 | EUR | 3 |
| 11E2 | BG92 | E36 | M3 | S50 | HECK | MECH | 32.00 | COUPE | 236 | RL | 2 | EUR | 3 |
| 11E3 | BG93 | E36 | M3 | S52 | HECK | MECH | 32.00 | COUPE | 179 | LL | 2 | USA | 3 |
| 1221 | CP21 | E36 | 316I | M43 | HECK | AUT | 16.00 | LIM | 75 | LL | 4 | ZAF | 3 |
| 1231 | CP31 | E36 | 318I | M43 | HECK | MECH | 18.00 | LIM | 85 | LL | 4 | ZAF | 3 |
| 1232 | CP32 | E36 | 318I | M43 | HECK | MECH | 18.00 | LIM | 85 | RL | 4 | ZAF | 3 |
| 1242 | CP42 | E36 | 318I | M43 | HECK | AUT | 18.00 | LIM | 85 | RL | 4 | ZAF | 3 |
| 1271 | CP71 | E36 | 323I | M52 | HECK | MECH | 25.00 | LIM | 125 | LL | 4 | ZAF | 3 |
| 1272 | CP72 | E36 | 323I | M52 | HECK | MECH | 25.00 | LIM | 125 | RL | 4 | ZAF | 3 |
| 1281 | CP81 | E36 | 323I | M52 | HECK | AUT | 25.00 | LIM | 125 | LL | 4 | ZAF | 3 |
| 1282 | CP82 | E36 | 323I | M52 | HECK | AUT | 25.00 | LIM | 125 | RL | 4 | ZAF | 3 |
| 1303 | BK03 | E36 | M3 | S52 | HECK | AUT | 32.00 | CABRIO | 179 | LL | 2 | USA | 3 |
| 1391 | BK91 | E36 | M3 | S50 | HECK | MECH | 32.00 | CABRIO | 236 | LL | 2 | EUR | 3 |
| 1392 | BK92 | E36 | M3 | S50 | HECK | MECH | 32.00 | CABRIO | 236 | RL | 2 | EUR | 3 |
| 1393 | BK93 | E36 | M3 | S52 | HECK | MECH | 32.00 | CABRIO | 179 | LL | 2 | USA | 3 |
| 13E1 | BH31 | E36 | 318I | M43 | HECK | MECH | 18.00 | CABRIO | 85 | LL | 2 | EUR | 3 |
| 13E2 | BH32 | E36 | 318I | M43 | HECK | MECH | 18.00 | CABRIO | 85 | RL | 2 | EUR | 3 |
| 1401 | BH41 | E36 | 318I | M43 | HECK | AUT | 18.00 | CABRIO | 85 | LL | 2 | EUR | 3 |
| 1402 | BH42 | E36 | 318I | M43 | HECK | AUT | 18.00 | CABRIO | 85 | RL | 2 | EUR | 3 |
| 1411 | BJ11 | E36 | 320I | M50 | HECK | MECH | 20.00 | CABRIO | 110 | LL | 2 | ECE | 3 |
| 1412 | BJ12 | E36 | 320I | M50 | HECK | MECH | 20.00 | CABRIO | 110 | RL | 2 | ECE | 3 |
| 1421 | BJ21 | E36 | 320I | M50 | HECK | AUT | 20.00 | CABRIO | 110 | LL | 2 | ECE | 3 |
| 1422 | BJ22 | E36 | 320I | M50 | HECK | AUT | 20.00 | CABRIO | 110 | RL | 2 | ECE | 3 |
| 1431 | BJ31 | E36 | 320I | M52 | HECK | MECH | 20.00 | CABRIO | 110 | LL | 2 | EUR | 3 |
| 1432 | BJ32 | E36 | 320I | M52 | HECK | MECH | 20.00 | CABRIO | 110 | RL | 2 | EUR | 3 |
| 1441 | BJ41 | E36 | 320I | M52 | HECK | AUT | 20.00 | CABRIO | 110 | LL | 2 | EUR | 3 |
| 1442 | BJ42 | E36 | 320I | M52 | HECK | AUT | 20.00 | CABRIO | 110 | RL | 2 | EUR | 3 |
| 1451 | BJ51 | E36 | 325I | M50 | HECK | MECH | 25.00 | CABRIO | 141 | LL | 2 | ECE | 3 |
| 1452 | BJ52 | E36 | 325I | M50 | HECK | MECH | 25.00 | CABRIO | 141 | RL | 2 | ECE | 3 |
| 1453 | BJ53 | E36 | 325I | M50 | HECK | MECH | 25.00 | CABRIO | 141 | LL | 2 | USA | 3 |
| 1461 | BJ61 | E36 | 325I | M50 | HECK | AUT | 25.00 | CABRIO | 141 | LL | 2 | ECE | 3 |
| 1462 | BJ62 | E36 | 325I | M50 | HECK | AUT | 25.00 | CABRIO | 141 | RL | 2 | ECE | 3 |
| 1463 | BJ63 | E36 | 325I | M50 | HECK | AUT | 25.00 | CABRIO | 141 | LL | 2 | USA | 3 |
| 1471 | BJ71 | E36 | 323I | M52 | HECK | MECH | 25.00 | CABRIO | 125 | LL | 2 | EUR | 3 |
| 1472 | BJ72 | E36 | 323I | M52 | HECK | MECH | 25.00 | CABRIO | 125 | RL | 2 | EUR | 3 |
| 1473 | BJ73 | E36 | 323I | M52 | HECK | MECH | 25.00 | CABRIO | 125 | LL | 2 | USA | 3 |
| 1481 | BJ81 | E36 | 323I | M52 | HECK | AUT | 25.00 | CABRIO | 125 | LL | 2 | EUR | 3 |
| 1482 | BJ82 | E36 | 323I | M52 | HECK | AUT | 25.00 | CABRIO | 125 | RL | 2 | EUR | 3 |
| 1483 | BJ83 | E36 | 323I | M52 | HECK | AUT | 25.00 | CABRIO | 125 | LL | 2 | USA | 3 |
| 1491 | BJ91 | E36 | M3 | S50 | HECK | MECH | 30.00 | CABRIO | 210 | LL | 2 | ECE | 3 |
| 1492 | BJ92 | E36 | M3 | S50 | HECK | MECH | 30.00 | CABRIO | 210 | RL | 2 | ECE | 3 |
| 14A3 | BK53 | E36 | 318I | M42 | HECK | MECH | 18.00 | CABRIO | 103 | LL | 2 | USA | 3 |
| 14B3 | BK63 | E36 | 318I | M42 | HECK | AUT | 18.00 | CABRIO | 103 | LL | 2 | USA | 3 |
| 14C3 | BH73 | E36 | 318IS | M44 | HECK | MECH | 19.00 | CABRIO | 103 | LL | 2 | USA | 3 |
| 14D3 | BH83 | E36 | 318IS | M44 | HECK | AUT | 19.00 | CABRIO | 103 | LL | 2 | USA | 3 |
| 14E1 | BK71 | E36 | 328I | M52 | HECK | MECH | 28.00 | CABRIO | 142 | LL | 2 | EUR | 3 |
| 14E2 | BK72 | E36 | 328I | M52 | HECK | MECH | 28.00 | CABRIO | 142 | RL | 2 | EUR | 3 |
| 14E3 | BK73 | E36 | 328I | M52 | HECK | MECH | 28.00 | CABRIO | 142 | LL | 2 | USA | 3 |
| 14F1 | BK81 | E36 | 328I | M52 | HECK | AUT | 28.00 | CABRIO | 142 | LL | 2 | EUR | 3 |
| 14F2 | BK82 | E36 | 328I | M52 | HECK | AUT | 28.00 | CABRIO | 142 | RL | 2 | EUR | 3 |
| 14F3 | BK83 | E36 | 328I | M52 | HECK | AUT | 28.00 | CABRIO | 142 | LL | 2 | USA | 3 |
| 1501 | CA01 | E36 | 318I | M43 | HECK | AUT | 18.00 | LIM | 85 | LL | 4 | EUR | 3 |
| 1502 | CA02 | E36 | 318I | M43 | HECK | AUT | 18.00 | LIM | 85 | RL | 4 | EUR | 3 |
| 1504 | CA04 | E36 | 318I | M43 | HECK | AUT | 18.00 | LIM | 85 | RL | 4 | MYS | 3 |
| 1505 | CA05 | E36 | 318I | M43 | HECK | AUT | 18.00 | LIM | 85 | RL | 4 | THA | 3 |
| 1508 | CA08 | E36 | 318I | M43 | HECK | AUT | 18.00 | LIM | 85 | RL | 4 | ZAF | 3 |
| 1509 | CA09 | E36 | 318I | M43 | HECK | AUT | 18.00 | LIM | 85 | RL | 4 | ZAF | 3 |
| 1511 | CA11 | E36 | 316I | M40 | HECK | MECH | 16.00 | LIM | 73 | LL | 4 | ECE | 3 |
| 1512 | CA12 | E36 | 316I | M40 | HECK | MECH | 16.00 | LIM | 73 | RL | 4 | ECE | 3 |
| 1521 | CA21 | E36 | 316I | M40 | HECK | AUT | 16.00 | LIM | 75 | LL | 4 | ECE | 3 |
| 1522 | CA22 | E36 | 316I | M40 | HECK | AUT | 16.00 | LIM | 73 | RL | 4 | ECE | 3 |
| 1531 | CA31 | E36 | 318I | M40 | HECK | MECH | 18.00 | LIM | 83 | LL | 4 | ECE | 3 |
| 1532 | CA32 | E36 | 318I | M40 | HECK | MECH | 18.00 | LIM | 83 | RL | 4 | ECE | 3 |
| 1534 | CA34 | E36 | 318I | M40 | HECK | MECH | 18.00 | LIM | 83 | RL | 4 | MYS | 3 |
| 1535 | CA35 | E36 | 318I | M40 | HECK | MECH | 18.00 | LIM | 83 | RL | 4 | THA | 3 |
| 1537 | CA37 | E36 | 318I | M40 | HECK | MECH | 18.00 | LIM | 83 | RL | 4 | IDN | 3 |
| 1538 | CA38 | E36 | 316I | M40 | HECK | MECH | 18.00 | LIM | 83 | RL | 4 | ZAF | 3 |
| 1541 | CA41 | E36 | 318I | M40 | HECK | AUT | 18.00 | LIM | 83 | LL | 4 | ECE | 3 |
| 1542 | CA42 | E36 | 318I | M40 | HECK | AUT | 18.00 | LIM | 83 | RL | 4 | ECE | 3 |
| 1544 | CA44 | E36 | 318I | M40 | HECK | AUT | 18.00 | LIM | 83 | RL | 4 | MYS | 3 |
| 1545 | CA45 | E36 | 318I | M40 | HECK | AUT | 18.00 | LIM | 83 | RL | 4 | THA | 3 |
| 1547 | CA47 | E36 | 318I | M40 | HECK | AUT | 18.00 | LIM | 83 | RL | 4 | IDN | 3 |
| 1548 | CA48 | E36 | 316I | M40 | HECK | AUT | 18.00 | LIM | 83 | RL | 4 | ZAF | 3 |
| 1551 | CA51 | E36 | 318IS | M42 | HECK | MECH | 18.00 | LIM | 103 | LL | 4 | ECE | 3 |
| 1552 | CA52 | E36 | 318IS | M42 | HECK | MECH | 18.00 | LIM | 103 | RL | 4 | ECE | 3 |
| 1553 | CA53 | E36 | 318I | M42 | HECK | MECH | 18.00 | LIM | 103 | LL | 4 | USA | 3 |
| 1558 | CA58 | E36 | 318I | M42 | HECK | MECH | 18.00 | LIM | 103 | RL | 4 | ZAF | 3 |
| 1561 | CA61 | E36 | 318IS | M42 | HECK | AUT | 18.00 | LIM | 103 | LL | 4 | ECE | 3 |
| 1562 | CA62 | E36 | 318IS | M42 | HECK | AUT | 18.00 | LIM | 103 | RL | 4 | ECE | 3 |
| 1563 | CA63 | E36 | 318I | M42 | HECK | AUT | 18.00 | LIM | 103 | LL | 4 | USA | 3 |
| 1568 | CA68 | E36 | 318I | M42 | HECK | AUT | 18.00 | LIM | 103 | RL | 4 | ZAF | 3 |
| 1571 | CA71 | E36 | 316I | M43 | HECK | MECH | 16.00 | LIM | 75 | LL | 4 | EUR | 3 |
| 1572 | CA72 | E36 | 316I | M43 | HECK | MECH | 16.00 | LIM | 75 | RL | 4 | EUR | 3 |
| 1579 | CA79 | E36 | 316I | M43 | HECK | MECH | 16.00 | LIM | 75 | LL | 4 | PHL | 3 |
| 1581 | CA81 | E36 | 316I | M43 | HECK | AUT | 16.00 | LIM | 75 | LL | 4 | EUR | 3 |
| 1582 | CA82 | E36 | 316I | M43 | HECK | AUT | 16.00 | LIM | 75 | RL | 4 | EUR | 3 |
| 1591 | CA91 | E36 | 318I | M43 | HECK | MECH | 18.00 | LIM | 85 | LL | 4 | EUR | 3 |
| 1592 | CA92 | E36 | 318I | M43 | HECK | MECH | 18.00 | LIM | 85 | RL | 4 | EUR | 3 |
| 1594 | CA94 | E36 | 318I | M43 | HECK | MECH | 18.00 | LIM | 85 | RL | 4 | MYS | 3 |
| 1595 | CA95 | E36 | 318I | M43 | HECK | MECH | 18.00 | LIM | 85 | RL | 4 | THA | 3 |
| 1597 | CA97 | E36 | 318I | M43 | HECK | MECH | 18.00 | LIM | 85 | RL | 4 | IDN | 3 |
| 1598 | CA98 | E36 | 318I | M43 | HECK | MECH | 18.00 | LIM | 85 | RL | 4 | ZAF | 3 |
| 1599 | CA99 | E36 | 318I | M43 | HECK | MECH | 18.00 | LIM | 85 | RL | 4 | ZAF | 3 |
| 15A3 | CC73 | E36 | 318I | M42 | HECK | MECH | 18.00 | LIM | 103 | LL | 4 | USA | 3 |
| 15B3 | CC83 | E36 | 318I | M42 | HECK | AUT | 18.00 | LIM | 103 | LL | 4 | USA | 3 |
| 15C1 | CD71 | E36 | 318IS | M44 | HECK | MECH | 19.00 | LIM | 103 | LL | 4 | EUR | 3 |
| 15C2 | CD72 | E36 | 318IS | M44 | HECK | MECH | 19.00 | LIM | 103 | RL | 4 | EUR | 3 |
| 15C3 | CC93 | E36 | 318I | M44 | HECK | MECH | 19.00 | LIM | 103 | LL | 4 | USA | 3 |
| 15C8 | CD78 | E36 | 318IS | M44 | HECK | MECH | 19.00 | LIM | 103 | RL | 4 | ZAF | 3 |
| 15D1 | CD81 | E36 | 318IS | M44 | HECK | AUT | 19.00 | LIM | 103 | LL | 4 | EUR | 3 |
| 15D2 | CD82 | E36 | 318IS | M44 | HECK | AUT | 19.00 | LIM | 103 | RL | 4 | EUR | 3 |
| 15D3 | CC03 | E36 | 318I | M44 | HECK | AUT | 19.00 | LIM | 103 | LL | 4 | USA | 3 |
| 15D8 | CD88 | E36 | 318IS | M44 | HECK | AUT | 19.00 | LIM | 103 | RL | 4 | ZAF | 3 |
| 15E2 | CD52 | E36 | 318IS | M44 | HECK | MECH | 19.00 | LIM | 103 | RL | 4 | ZAF | 3 |
| 15F2 | CD62 | E36 | 318IS | M44 | HECK | AUT | 19.00 | LIM | 103 | RL | 4 | ZAF | 3 |
| 1611 | CB11 | E36 | 320I | M50 | HECK | MECH | 20.00 | LIM | 110 | LL | 4 | ECE | 3 |
| 1612 | CB12 | E36 | 320I | M50 | HECK | MECH | 20.00 | LIM | 110 | RL | 4 | ECE | 3 |
| 1613 | CB13 | E36 | 320I | M50 | HECK | MECH | 20.00 | LIM | 110 | LL | 4 | USA | 3 |
| 1617 | CB17 | E36 | 320I | M50 | HECK | MECH | 20.00 | LIM | 110 | RL | 4 | IDN | 3 |
| 1618 | CB18 | E36 | 320I | M50 | HECK | MECH | 20.00 | LIM | 110 | RL | 4 | ZAF | 3 |
| 1621 | CB21 | E36 | 320I | M50 | HECK | AUT | 20.00 | LIM | 110 | LL | 4 | ECE | 3 |
| 1622 | CB22 | E36 | 320I | M50 | HECK | AUT | 20.00 | LIM | 110 | RL | 4 | ECE | 3 |
| 1623 | CB23 | E36 | 320I | M50 | HECK | AUT | 20.00 | LIM | 110 | LL | 4 | USA | 3 |
| 1627 | CB27 | E36 | 320I | M50 | HECK | AUT | 20.00 | LIM | 110 | RL | 4 | IDN | 3 |
| 1628 | CB28 | E36 | 320I | M50 | HECK | AUT | 20.00 | LIM | 110 | RL | 4 | ZAF | 3 |
| 1631 | CB31 | E36 | 325I | M50 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | ECE | 3 |
| 1632 | CB32 | E36 | 325I | M50 | HECK | MECH | 25.00 | LIM | 141 | RL | 4 | ECE | 3 |
| 1633 | CB33 | E36 | 325I | M50 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | USA | 3 |
| 1634 | CB34 | E36 | 325I | M50 | HECK | MECH | 25.00 | LIM | 141 | RL | 4 | MYS | 3 |
| 1635 | CB35 | E36 | 325I | M50 | HECK | MECH | 24.00 | LIM | 0 | RL | 4 | THA | 3 |
| 1638 | CB38 | E36 | 325I | M50 | HECK | MECH | 25.00 | LIM | 141 | RL | 4 | ZAF | 3 |
| 1639 | CB39 | E36 | 325I | M50 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | URY | 3 |
| 1641 | CB41 | E36 | 325I | M50 | HECK | AUT | 25.00 | LIM | 141 | LL | 4 | ECE | 3 |
| 1642 | CB42 | E36 | 325I | M50 | HECK | AUT | 25.00 | LIM | 141 | RL | 4 | ECE | 3 |
| 1643 | CB43 | E36 | 325I | M50 | HECK | AUT | 25.00 | LIM | 141 | LL | 4 | USA | 3 |
| 1644 | CB44 | E36 | 325I | M50 | HECK | AUT | 25.00 | LIM | 141 | RL | 4 | MYS | 3 |
| 1645 | CB45 | E36 | 325I | M50 | HECK | AUT | 24.00 | LIM | 0 | RL | 4 | THA | 3 |
| 1647 | CB47 | E36 | 325I | M50 | HECK | AUT | 25.00 | LIM | 141 | LL | 4 | MEX | 3 |
| 1648 | CB48 | E36 | 325I | M50 | HECK | AUT | 25.00 | LIM | 141 | RL | 4 | ZAF | 3 |
| 1651 | CB51 | E36 | 320I | M52 | HECK | MECH | 20.00 | LIM | 110 | LL | 4 | EUR | 3 |
| 1652 | CB52 | E36 | 320I | M52 | HECK | MECH | 20.00 | LIM | 110 | RL | 4 | EUR | 3 |
| 1657 | CB57 | E36 | 320I | M52 | HECK | MECH | 20.00 | LIM | 110 | RL | 4 | IDN | 3 |
| 1659 | CB59 | E36 | 320I | M52 | HECK | MECH | 20.00 | LIM | 110 | LL | 4 | VNM | 3 |
| 1661 | CB61 | E36 | 320I | M52 | HECK | AUT | 20.00 | LIM | 110 | LL | 4 | EUR | 3 |
| 1662 | CB62 | E36 | 320I | M52 | HECK | AUT | 20.00 | LIM | 110 | RL | 4 | EUR | 3 |
| 1667 | CB67 | E36 | 320I | M52 | HECK | AUT | 20.00 | LIM | 110 | RL | 4 | IDN | 3 |
| 1669 | CB69 | E36 | 320I | M52 | HECK | AUT | 20.00 | LIM | 110 | LL | 4 | PHL | 3 |
| 1671 | CB71 | E36 | 323I | M52 | HECK | MECH | 25.00 | LIM | 125 | LL | 4 | EUR | 3 |
| 1672 | CB72 | E36 | 323I | M52 | HECK | MECH | 25.00 | LIM | 125 | RL | 4 | EUR | 3 |
| 1675 | CB75 | E36 | 323I | M52 | HECK | MECH | 24.00 | LIM | 140 | RL | 4 | THA | 3 |
| 1677 | CB77 | E36 | 323I | M52 | HECK | MECH | 25.00 | LIM | 125 | RL | 4 | IDN | 3 |
| 1678 | CB78 | E36 | 323I | M52 | HECK | MECH | 25.00 | LIM | 125 | RL | 4 | ZAF | 3 |
| 1681 | CB81 | E36 | 323I | M52 | HECK | AUT | 25.00 | LIM | 125 | LL | 4 | EUR | 3 |
| 1682 | CB82 | E36 | 323I | M52 | HECK | AUT | 25.00 | LIM | 125 | RL | 4 | EUR | 3 |
| 1685 | CB85 | E36 | 323I | M52 | HECK | AUT | 24.00 | LIM | 140 | RL | 4 | THA | 3 |
| 1687 | CB87 | E36 | 323I | M52 | HECK | AUT | 25.00 | LIM | 125 | RL | 4 | IDN | 3 |
| 1688 | CB88 | E36 | 323I | M52 | HECK | AUT | 25.00 | LIM | 125 | RL | 4 | ZAF | 3 |
| 1689 | CB89 | E36 | 323I | M52 | HECK | AUT | 25.00 | LIM | 125 | LL | 4 | MEX | 3 |
| 1691 | CB91 | E36 | M3 | S50 | HECK | MECH | 30.00 | LIM | 210 | LL | 4 | ECE | 3 |
| 1692 | CB92 | E36 | M3 | S50 | HECK | MECH | 30.00 | LIM | 210 | RL | 4 | ECE | 3 |
| 16A1 | CD11 | E36 | 328I | M52 | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | EUR | 3 |
| 16A2 | CD12 | E36 | 328I | M52 | HECK | MECH | 28.00 | LIM | 142 | RL | 4 | EUR | 3 |
| 16A3 | CD13 | E36 | 328I | M52 | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | USA | 3 |
| 16A8 | CD18 | E36 | 328I | M52 | HECK | MECH | 28.00 | LIM | 150 | RL | 4 | ZAF | 3 |
| 16B1 | CD21 | E36 | 328I | M52 | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | EUR | 3 |
| 16B2 | CD22 | E36 | 328I | M52 | HECK | AUT | 28.00 | LIM | 142 | RL | 4 | EUR | 3 |
| 16B3 | CD23 | E36 | 328I | M52 | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | USA | 3 |
| 16B4 | CD24 | E36 | 328I | M52 | HECK | AUT | 28.00 | LIM | 142 | RL | 4 | MYS | 3 |
| 16B7 | CD27 | E36 | 328I | M52 | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | MEX | 3 |
| 16B8 | CD28 | E36 | 328I | M52 | HECK | AUT | 28.00 | LIM | 142 | RL | 4 | ZAF | 3 |
| 16C3 | CD33 | E36 | 328I | M52 | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | USA | 3 |
| 16D3 | CD43 | E36 | 328I | M52 | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | USA | 3 |
| 16E1 | CD91 | E36 | M3 | S50 | HECK | MECH | 32.00 | LIM | 236 | LL | 4 | EUR | 3 |
| 16E2 | CD92 | E36 | M3 | S50 | HECK | MECH | 32.00 | LIM | 236 | RL | 4 | EUR | 3 |
| 16E3 | CD93 | E36 | M3 | S52 | HECK | MECH | 32.00 | LIM | 179 | LL | 4 | USA | 3 |
| 16E8 | CD98 | E36 | M3 | S50 | HECK | MECH | 32.00 | LIM | 236 | RL | 4 | ZAF | 3 |
| 16F3 | CD03 | E36 | M3 | S52 | HECK | AUT | 32.00 | LIM | 179 | LL | 4 | USA | 3 |
| 1711 | CC11 | E36 | 325TD | M51 | HECK | MECH | 25.00 | LIM | 85 | LL | 4 | EUR | 3 |
| 1712 | CC12 | E36 | 325TD | M51 | HECK | MECH | 25.00 | LIM | 85 | RL | 4 | EUR | 3 |
| 1721 | CC21 | E36 | 325TD | M51 | HECK | AUT | 25.00 | LIM | 85 | LL | 4 | EUR | 3 |
| 1722 | CC22 | E36 | 325TD | M51 | HECK | AUT | 25.00 | LIM | 85 | RL | 4 | EUR | 3 |
| 1731 | CC31 | E36 | 325TDS | M51 | HECK | MECH | 25.00 | LIM | 105 | LL | 4 | EUR | 3 |
| 1732 | CC32 | E36 | 325TDS | M51 | HECK | MECH | 25.00 | LIM | 105 | RL | 4 | EUR | 3 |
| 1738 | CC38 | E36 | 325TDS | M51 | HECK | MECH | 25.00 | LIM | 105 | RL | 4 | ZAF | 3 |
| 1741 | CC41 | E36 | 325TDS | M51 | HECK | AUT | 25.00 | LIM | 105 | LL | 4 | EUR | 3 |
| 1742 | CC42 | E36 | 325TDS | M51 | HECK | AUT | 25.00 | LIM | 105 | RL | 4 | EUR | 3 |
| 1751 | CC51 | E36 | 318TDS | M41 | HECK | MECH | 17.00 | LIM | 66 | LL | 4 | EUR | 3 |
| 1752 | CC52 | E36 | 318TDS | M41 | HECK | MECH | 17.00 | LIM | 66 | RL | 4 | EUR | 3 |
| 17A1 | CF51 | E36 | 318TDS | M41 | HECK | MECH | 17.00 | TOUR | 66 | LL | 5 | EUR | 3 |
| 17A2 | CF52 | E36 | 318TDS | M41 | HECK | MECH | 17.00 | TOUR | 66 | RL | 5 | EUR | 3 |
| 17C1 | CF91 | E36 | 325TDS | M51 | HECK | MECH | 25.00 | TOUR | 105 | LL | 5 | EUR | 3 |
| 17C2 | CF92 | E36 | 325TDS | M51 | HECK | MECH | 25.00 | TOUR | 105 | RL | 5 | EUR | 3 |
| 17D1 | CF01 | E36 | 325TDS | M51 | HECK | AUT | 25.00 | TOUR | 105 | LL | 5 | EUR | 3 |
| 17D2 | CF02 | E36 | 325TDS | M51 | HECK | AUT | 25.00 | TOUR | 105 | RL | 5 | EUR | 3 |
| 1811 | CE11 | E36 | 316I | M43 | HECK | MECH | 16.00 | TOUR | 75 | LL | 5 | EUR | 3 |
| 1812 | CE12 | E36 | 316I | M43 | HECK | MECH | 16.00 | TOUR | 75 | RL | 5 | EUR | 3 |
| 1821 | CE21 | E36 | 316I | M43 | HECK | AUT | 16.00 | TOUR | 75 | LL | 5 | EUR | 3 |
| 1822 | CE22 | E36 | 316I | M43 | HECK | AUT | 16.00 | TOUR | 75 | RL | 5 | EUR | 3 |
| 1831 | CE31 | E36 | 318I | M43 | HECK | MECH | 18.00 | TOUR | 85 | LL | 5 | EUR | 3 |
| 1832 | CE32 | E36 | 318I | M43 | HECK | MECH | 18.00 | TOUR | 85 | RL | 5 | EUR | 3 |
| 1841 | CE41 | E36 | 318I | M43 | HECK | AUT | 18.00 | TOUR | 85 | LL | 5 | EUR | 3 |
| 1842 | CE42 | E36 | 318I | M43 | HECK | AUT | 18.00 | TOUR | 85 | RL | 5 | EUR | 3 |
| 1851 | CE51 | E36 | 320I | M52 | HECK | MECH | 20.00 | TOUR | 110 | LL | 5 | EUR | 3 |
| 1852 | CE52 | E36 | 320I | M52 | HECK | MECH | 20.00 | TOUR | 110 | RL | 5 | EUR | 3 |
| 1861 | CE61 | E36 | 320I | M52 | HECK | AUT | 20.00 | TOUR | 110 | LL | 5 | EUR | 3 |
| 1862 | CE62 | E36 | 320I | M52 | HECK | AUT | 20.00 | TOUR | 110 | RL | 5 | EUR | 3 |
| 1871 | CE71 | E36 | 323I | M52 | HECK | MECH | 25.00 | TOUR | 125 | LL | 5 | EUR | 3 |
| 1872 | CE72 | E36 | 323I | M52 | HECK | MECH | 25.00 | TOUR | 125 | RL | 5 | EUR | 3 |
| 1881 | CE81 | E36 | 323I | M52 | HECK | AUT | 25.00 | TOUR | 125 | LL | 5 | EUR | 3 |
| 1882 | CE82 | E36 | 323I | M52 | HECK | AUT | 25.00 | TOUR | 125 | RL | 5 | EUR | 3 |
| 18A1 | CF11 | E36 | 328I | M52 | HECK | MECH | 28.00 | TOUR | 142 | LL | 5 | EUR | 3 |
| 18A2 | CF12 | E36 | 328I | M52 | HECK | MECH | 28.00 | TOUR | 142 | RL | 5 | EUR | 3 |
| 18B1 | CF21 | E36 | 328I | M52 | HECK | AUT | 28.00 | TOUR | 142 | LL | 5 | EUR | 3 |
| 18B2 | CF22 | E36 | 328I | M52 | HECK | AUT | 28.00 | TOUR | 142 | RL | 5 | EUR | 3 |
| 1C11 | CG11 | E36 | 316I | M43 | HECK | MECH | 16.00 | COMP | 75 | LL | 3 | EUR | 3 |
| 1C12 | CG12 | E36 | 316I | M43 | HECK | MECH | 16.00 | COMP | 75 | RL | 3 | EUR | 3 |
| 1C21 | CG21 | E36 | 316I | M43 | HECK | AUT | 16.00 | COMP | 75 | LL | 3 | EUR | 3 |
| 1C22 | CG22 | E36 | 316I | M43 | HECK | AUT | 16.00 | COMP | 75 | RL | 3 | EUR | 3 |
| 1C31 | CG31 | E36 | 323TI | M52 | HECK | MECH | 25.00 | COMP | 125 | LL | 3 | EUR | 3 |
| 1C41 | CG41 | E36 | 323TI | M52 | HECK | AUT | 25.00 | COMP | 125 | LL | 3 | EUR | 3 |
| 1C51 | CG51 | E36 | 318TI | M42 | HECK | MECH | 18.00 | COMP | 103 | LL | 3 | ECE | 3 |
| 1C52 | CG52 | E36 | 318TI | M42 | HECK | MECH | 18.00 | COMP | 103 | RL | 3 | ECE | 3 |
| 1C53 | CG53 | E36 | 318TI | M42 | HECK | MECH | 18.00 | COMP | 103 | LL | 3 | USA | 3 |
| 1C61 | CG61 | E36 | 318TI | M42 | HECK | AUT | 18.00 | COMP | 103 | LL | 3 | ECE | 3 |
| 1C62 | CG62 | E36 | 318TI | M42 | HECK | AUT | 18.00 | COMP | 103 | RL | 3 | ECE | 3 |
| 1C63 | CG63 | E36 | 318TI | M42 | HECK | AUT | 18.00 | COMP | 103 | LL | 3 | USA | 3 |
| 1C71 | CG71 | E36 | 318TI | M44 | HECK | MECH | 19.00 | COMP | 103 | LL | 3 | EUR | 3 |
| 1C72 | CG72 | E36 | 318TI | M44 | HECK | MECH | 19.00 | COMP | 103 | RL | 3 | EUR | 3 |
| 1C73 | CG73 | E36 | 318TI | M44 | HECK | MECH | 19.00 | COMP | 103 | LL | 3 | USA | 3 |
| 1C81 | CG81 | E36 | 318TI | M44 | HECK | AUT | 19.00 | COMP | 103 | LL | 3 | EUR | 3 |
| 1C82 | CG82 | E36 | 318TI | M44 | HECK | AUT | 19.00 | COMP | 103 | RL | 3 | EUR | 3 |
| 1C83 | CG83 | E36 | 318TI | M44 | HECK | AUT | 19.00 | COMP | 103 | LL | 3 | USA | 3 |
| 1CA1 | CH11 | E36 | 316G | M43 | HECK | MECH | 16.00 | COMP | 65 | LL | 3 | EUR | 3 |
| 1D11 | CT31 | E36 | 323TI | M52 | HECK | MECH | 25.00 | COMP | 125 | LL | 3 | EUR | 3 |
| 1D21 | CT41 | E36 | 323TI | M52 | HECK | AUT | 25.00 | COMP | 125 | LL | 3 | EUR | 3 |
| 1D31 | CS11 | E36 | 316I | M43/TU | HECK | MECH | 19.00 | COMP | 77 | LL | 3 | EUR | 3 |
| 1D32 | CS12 | E36 | 316I | M43/TU | HECK | MECH | 19.00 | COMP | 77 | RL | 3 | EUR | 3 |
| 1D41 | CS21 | E36 | 316I | M43/TU | HECK | AUT | 19.00 | COMP | 77 | LL | 3 | EUR | 3 |
| 1D42 | CS22 | E36 | 316I | M43/TU | HECK | AUT | 19.00 | COMP | 77 | RL | 3 | EUR | 3 |
| 1D51 | CJ51 | E36 | 318TDS | M41 | HECK | MECH | 17.00 | COMP | 66 | LL | 3 | EUR | 3 |
| 1D52 | CJ52 | E36 | 318TDS | M41 | HECK | MECH | 17.00 | COMP | 66 | RL | 3 | EUR | 3 |
| 1E01 | CM91 | E36 | M-COUPE | S50 | HECK | MECH | 32.00 | COUPE | 236 | LL | 2 | EUR | 3 |
| 1E02 | CM92 | E36 | M-COUPE | S50 | HECK | MECH | 32.00 | COUPE | 236 | RL | 2 | EUR | 3 |
| 1E03 | CM93 | E36 | M-COUPE | S52 | HECK | MECH | 32.00 | COUPE | 176 | LL | 2 | USA | 3 |
| 1E04 | CN91 | E36 | M-COUPE | S54 | HECK | MECH | 32.00 | COUPE | 239 | LL | 2 | EUR | 3 |
| 1E05 | CN92 | E36 | M-COUPE | S54 | HECK | MECH | 32.00 | COUPE | 239 | RL | 2 | EUR | 3 |
| 1E06 | CN93 | E36 | M-COUPE | S54 | HECK | MECH | 32.00 | COUPE | 239 | LL | 2 | USA | 3 |
| 1E11 | CH71 | E36 | Z3 | M44 | HECK | MECH | 19.00 | ROADST | 103 | LL | 2 | EUR | 3 |
| 1E12 | CH72 | E36 | Z3 | M44 | HECK | MECH | 19.00 | ROADST | 103 | RL | 2 | EUR | 3 |
| 1E13 | CH73 | E36 | Z3 | M44 | HECK | MECH | 19.00 | ROADST | 103 | LL | 2 | USA | 3 |
| 1E31 | CJ11 | E36 | Z3 | M43 | HECK | MECH | 18.00 | ROADST | 85 | LL | 2 | EUR | 3 |
| 1E41 | CM11 | E36 | Z3 1.8 | M43/TU | HECK | MECH | 19.00 | ROADST | 87 | LL | 2 | EUR | 3 |
| 1E42 | CM12 | E36 | Z3 1.8 | M43/TU | HECK | MECH | 19.00 | ROADST | 87 | RL | 2 | EUR | 3 |
| 1E51 | CJ31 | E36 | Z3 | M52 | HECK | MECH | 28.00 | ROADST | 142 | LL | 2 | EUR | 3 |
| 1E52 | CJ32 | E36 | Z3 | M52 | HECK | MECH | 28.00 | ROADST | 142 | RL | 2 | EUR | 3 |
| 1E53 | CJ33 | E36 | Z3 | M52 | HECK | MECH | 28.00 | ROADST | 142 | LL | 2 | USA | 3 |
| 1E61 | CH31 | E36 | Z3 2.8 | M52/TU | HECK | MECH | 28.00 | ROADST | 142 | LL | 2 | EUR | 3 |
| 1E62 | CH32 | E36 | Z3 2.8 | M52/TU | HECK | MECH | 28.00 | ROADST | 142 | RL | 2 | EUR | 3 |
| 1E63 | CH33 | E36 | Z3 2.8 | M52/TU | HECK | MECH | 28.00 | ROADST | 142 | LL | 2 | USA | 3 |
| 1E73 | CH93 | E36 | Z3 2.3 | M52/TU | HECK | MECH | 25.00 | ROADST | 125 | LL | 2 | USA | 3 |
| 1E81 | CL31 | E36 | Z3 2.0 | M52/TU | HECK | MECH | 20.00 | ROADST | 110 | LL | 2 | EUR | 3 |
| 1E82 | CL32 | E36 | Z3 2.0 | M52/TU | HECK | MECH | 20.00 | ROADST | 110 | RL | 2 | EUR | 3 |
| 1E91 | CK91 | E36 | M-ROADST | S50 | HECK | MECH | 32.00 | ROADST | 236 | LL | 2 | EUR | 3 |
| 1E92 | CK92 | E36 | M-ROADST | S50 | HECK | MECH | 32.00 | ROADST | 236 | RL | 2 | EUR | 3 |
| 1E93 | CK93 | E36 | M-ROADST | S52 | HECK | MECH | 32.00 | ROADST | 179 | LL | 2 | USA | 3 |
| 1E94 | CL91 | E36 | M-ROADST | S54 | HECK | MECH | 32.00 | ROADST | 239 | LL | 2 | EUR | 3 |
| 1E95 | CL92 | E36 | M-ROADST | S54 | HECK | MECH | 32.00 | ROADST | 239 | RL | 2 | EUR | 3 |
| 1E96 | CL93 | E36 | M-ROADST | S54 | HECK | MECH | 32.00 | ROADST | 239 | LL | 2 | USA | 3 |
| 1EA1 | CN11 | E36 | Z3 2.2 | M54 | HECK | MECH | 22.00 | ROADST | 125 | LL | 2 | EUR | 3 |
| 1EA2 | CN12 | E36 | Z3 2.2 | M54 | HECK | MECH | 22.00 | ROADST | 125 | RL | 2 | EUR | 3 |
| 1EB3 | CN33 | E36 | Z3 2.5 | M54 | HECK | MECH | 25.00 | ROADST | 141 | LL | 2 | USA | 3 |
| 1EC1 | CN51 | E36 | Z3 3.0 | M54 | HECK | MECH | 30.00 | ROADST | 170 | LL | 2 | EUR | 3 |
| 1EC2 | CN52 | E36 | Z3 3.0 | M54 | HECK | MECH | 30.00 | ROADST | 170 | RL | 2 | EUR | 3 |
| 1EC3 | CN53 | E36 | Z3 3.0 | M54 | HECK | MECH | 30.00 | ROADST | 170 | LL | 2 | USA | 3 |
| 1ED1 | CK71 | E36 | Z3 3.0 | M54 | HECK | MECH | 30.00 | COUPE | 170 | LL | 2 | EUR | 3 |
| 1ED3 | CK73 | E36 | Z3 3.0 | M54 | HECK | MECH | 30.00 | COUPE | 170 | LL | 2 | USA | 3 |
| 1EE1 | CK31 | E36 | Z3 | M52 | HECK | MECH | 28.00 | COUPE | 142 | LL | 2 | EUR | 3 |
| 1EF1 | CK51 | E36 | Z3 2.8 | M52/TU | HECK | MECH | 28.00 | COUPE | 142 | LL | 2 | EUR | 3 |
| 1EF3 | CK53 | E36 | Z3 2.8 | M52/TU | HECK | MECH | 28.00 | COUPE | 142 | LL | 2 | USA | 3 |
| 4001 | GE01 | E38 | 725TDS | M51 | HECK | AUT | 25.00 | LIM | 105 | LL | 4 | EUR | 7 |
| 4011 | GE11 | E38 | 728I | M52 | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | EUR | 7 |
| 4021 | GE21 | E38 | 728I | M52 | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | EUR | 7 |
| 4022 | GE22 | E38 | 728I | M52 | HECK | AUT | 28.00 | LIM | 142 | RL | 4 | EUR | 7 |
| 4031 | GE31 | E38 | 728I | M52/TU | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | EUR | 7 |
| 4041 | GE41 | E38 | 728I | M52/TU | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | EUR | 7 |
| 4042 | GE42 | E38 | 728I | M52/TU | HECK | AUT | 28.00 | LIM | 142 | RL | 4 | EUR | 7 |
| 4061 | GE61 | E38 | 730D | M57 | HECK | AUT | 30.00 | LIM | 135 | LL | 4 | EUR | 7 |
| 4081 | GE81 | E38 | 740D | M67 | HECK | AUT | 39.00 | LIM | 180 | LL | 4 | EUR | 7 |
| 4091 | GE91 | E38 | 725TDS | M51 | HECK | MECH | 25.00 | LIM | 105 | LL | 4 | EUR | 7 |
| 4111 | GF11 | E38 | 730I | M60/1 | HECK | MECH | 30.00 | LIM | 160 | LL | 4 | EUR | 7 |
| 4121 | GF21 | E38 | 730I | M60/1 | HECK | AUT | 30.00 | LIM | 160 | LL | 4 | EUR | 7 |
| 4122 | GF22 | E38 | 730I | M60/1 | HECK | AUT | 30.00 | LIM | 160 | RL | 4 | EUR | 7 |
| 4125 | GF25 | E38 | 730I | M60/1 | HECK | AUT | 30.00 | LIM | 160 | RL | 4 | THA | 7 |
| 4131 | GF31 | E38 | 735I | M62 | HECK | MECH | 35.00 | LIM | 170 | LL | 4 | EUR | 7 |
| 4141 | GF41 | E38 | 735I | M62 | HECK | AUT | 35.00 | LIM | 170 | LL | 4 | EUR | 7 |
| 4142 | GF42 | E38 | 735I | M62 | HECK | AUT | 35.00 | LIM | 170 | RL | 4 | EUR | 7 |
| 4151 | GF51 | E38 | 740I | M60/2 | HECK | MECH | 40.00 | LIM | 210 | LL | 4 | EUR | 7 |
| 4161 | GF61 | E38 | 740I | M60/2 | HECK | AUT | 40.00 | LIM | 210 | LL | 4 | EUR | 7 |
| 4162 | GF62 | E38 | 740I | M60/2 | HECK | AUT | 40.00 | LIM | 210 | RL | 4 | EUR | 7 |
| 4163 | GF63 | E38 | 740I | M60/2 | HECK | AUT | 40.00 | LIM | 210 | LL | 4 | USA | 7 |
| 4171 | GF71 | E38 | 740I | M62 | HECK | MECH | 44.00 | LIM | 210 | LL | 4 | EUR | 7 |
| 4181 | GF81 | E38 | 740I | M62 | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | EUR | 7 |
| 4182 | GF82 | E38 | 740I | M62 | HECK | AUT | 44.00 | LIM | 210 | RL | 4 | EUR | 7 |
| 4183 | GF83 | E38 | 740I | M62 | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | USA | 7 |
| 4201 | GG01 | E38 | 750I | M73/TU | HECK | AUT | 54.00 | LIM | 240 | LL | 4 | EUR | 7 |
| 4202 | GG02 | E38 | 750I | M73/TU | HECK | AUT | 54.00 | LIM | 240 | RL | 4 | EUR | 7 |
| 4221 | GG21 | E38 | 750I | M73 | HECK | AUT | 54.00 | LIM | 240 | LL | 4 | EUR | 7 |
| 4222 | GG22 | E38 | 750I | M73 | HECK | AUT | 54.00 | LIM | 240 | RL | 4 | EUR | 7 |
| 4241 | GG41 | E38 | 735I | M62/TU | HECK | AUT | 35.00 | LIM | 175 | LL | 4 | EUR | 7 |
| 4242 | GG42 | E38 | 735I | M62/TU | HECK | AUT | 35.00 | LIM | 175 | RL | 4 | EUR | 7 |
| 4281 | GG81 | E38 | 740I | M62/TU | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | EUR | 7 |
| 4282 | GG82 | E38 | 740I | M62/TU | HECK | AUT | 44.00 | LIM | 210 | RL | 4 | EUR | 7 |
| 4283 | GG83 | E38 | 740I | M62/TU | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | USA | 7 |
| 4301 | GH01 | E38 | 740IL | M62/TU | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | EUR | 7 |
| 4303 | GH03 | E38 | 740IL | M62/TU | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | USA | 7 |
| 4321 | GH21 | E38 | 728IL | M52 | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | EUR | 7 |
| 4325 | GH25 | E38 | 728IL | M52 | HECK | AUT | 28.00 | LIM | 142 | RL | 4 | THA | 7 |
| 4341 | GH41 | E38 | 728IL | M52/TU | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | EUR | 7 |
| 4345 | GH45 | E38 | 728IL | M52/TU | HECK | AUT | 28.00 | LIM | 142 | RL | 4 | THA | 7 |
| 4361 | GH61 | E38 | 735IL | M62/TU | HECK | AUT | 35.00 | LIM | 175 | LL | 4 | EUR | 7 |
| 4362 | GH62 | E38 | 735IL | M62/TU | HECK | AUT | 35.00 | LIM | 175 | RL | 4 | EUR | 7 |
| 4367 | GH67 | E38 | 735IL | M62/TU | HECK | AUT | 35.00 | LIM | 173 | RL | 4 | IDN | 7 |
| 4381 | GH81 | E38 | 740IL | M62/TU | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | EUR | 7 |
| 4382 | GH82 | E38 | 740IL | M62/TU | HECK | AUT | 44.00 | LIM | 210 | RL | 4 | EUR | 7 |
| 4383 | GH83 | E38 | 740IL | M62/TU | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | USA | 7 |
| 4385 | GH85 | E38 | 740IL | M62/TU | HECK | AUT | 44.00 | LIM | 210 | RL | 4 | THA | 7 |
| 4401 | GJ01 | E38 | 750IL | M73/TU | HECK | AUT | 54.00 | LIM | 0 | LL | 4 | EUR | 7 |
| 4402 | GJ02 | E38 | 750IL | M73/TU | HECK | AUT | 54.00 | LIM | 0 | RL | 4 | EUR | 7 |
| 4403 | GJ03 | E38 | 750IL | M73/TU | HECK | AUT | 54.00 | LIM | 0 | LL | 4 | USA | 7 |
| 4411 | GJ11 | E38 | 730IL | M60/1 | HECK | MECH | 30.00 | LIM | 160 | LL | 4 | EUR | 7 |
| 4421 | GJ21 | E38 | 730IL | M60/1 | HECK | AUT | 30.00 | LIM | 160 | LL | 4 | EUR | 7 |
| 4422 | GJ22 | E38 | 730IL | M60/1 | HECK | AUT | 30.00 | LIM | 160 | RL | 4 | EUR | 7 |
| 4427 | GJ27 | E38 | 730IL | M60/1 | HECK | AUT | 30.00 | LIM | 160 | RL | 4 | IDN | 7 |
| 4441 | GJ41 | E38 | 735IL | M62 | HECK | AUT | 35.00 | LIM | 170 | LL | 4 | EUR | 7 |
| 4442 | GJ42 | E38 | 735IL | M62 | HECK | AUT | 35.00 | LIM | 170 | RL | 4 | EUR | 7 |
| 4447 | GJ47 | E38 | 735IL | M62 | HECK | AUT | 35.00 | LIM | 170 | RL | 4 | IDN | 7 |
| 4461 | GJ61 | E38 | 740IL | M60/2 | HECK | AUT | 40.00 | LIM | 210 | LL | 4 | EUR | 7 |
| 4462 | GJ62 | E38 | 740IL | M60/2 | HECK | AUT | 40.00 | LIM | 210 | RL | 4 | EUR | 7 |
| 4463 | GJ63 | E38 | 740IL | M60/2 | HECK | AUT | 40.00 | LIM | 210 | LL | 4 | USA | 7 |
| 4481 | GJ81 | E38 | 740IL | M62 | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | EUR | 7 |
| 4482 | GJ82 | E38 | 740IL | M62 | HECK | AUT | 44.00 | LIM | 210 | RL | 4 | EUR | 7 |
| 4483 | GJ83 | E38 | 740IL | M62 | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | USA | 7 |
| 4485 | GJ85 | E38 | 740IL | M62 | HECK | AUT | 44.00 | LIM | 210 | RL | 4 | THA | 7 |
| 4487 | GJ87 | E38 | 740IL | M62 | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | MEX | 7 |
| 4501 | GK01 | E38 | 750IL | M73/TU | HECK | AUT | 54.00 | LIM | 240 | LL | 4 | EUR | 7 |
| 4502 | GK02 | E38 | 750IL | M73/TU | HECK | AUT | 54.00 | LIM | 240 | RL | 4 | EUR | 7 |
| 4521 | GK21 | E38 | 750IL | M73 | HECK | AUT | 54.00 | LIM | 240 | LL | 4 | EUR | 7 |
| 4522 | GK22 | E38 | 750IL | M73 | HECK | AUT | 54.00 | LIM | 240 | RL | 4 | EUR | 7 |
| 4523 | GK23 | E38 | 750IL | M73 | HECK | AUT | 54.00 | LIM | 240 | LL | 4 | USA | 7 |
| 4541 | GK41 | E38 | 750IL | M73 | HECK | AUT | 54.00 | LIM | 240 | LL | 4 | EUR | 7 |
| 4542 | GK42 | E38 | 750IL | M73 | HECK | AUT | 54.00 | LIM | 240 | RL | 4 | EUR | 7 |
| 4561 | GK61 | E38 | 750IXL | M73 | HECK | AUT | 54.00 | LIM | 240 | LL | 4 | EUR | 7 |
| 4562 | GK62 | E38 | 750IXL | M73 | HECK | AUT | 54.00 | LIM | 240 | RL | 4 | EUR | 7 |
| 4581 | GK81 | E38 | 750IXL | M73/TU | HECK | AUT | 54.00 | LIM | 240 | LL | 4 | EUR | 7 |
| 4582 | GK82 | E38 | 750IXL | M73/TU | HECK | AUT | 54.00 | LIM | 240 | RL | 4 | EUR | 7 |
| 4591 | GK91 | E38 | 750IL | M73/TU | HECK | AUT | 54.00 | LIM | 240 | LL | 4 | EUR | 7 |
| 4593 | GK93 | E38 | 750IL | M73/TU | HECK | AUT | 54.00 | LIM | 240 | LL | 4 | USA | 7 |
| 5171 | DL71 | E39 | 530D | M57 | HECK | MECH | 30.00 | LIM | 142 | LL | 4 | EUR | 5 |
| 5172 | DL72 | E39 | 530D | M57 | HECK | MECH | 30.00 | LIM | 142 | RL | 4 | EUR | 5 |
| 5181 | DL81 | E39 | 530D | M57 | HECK | AUT | 30.00 | LIM | 142 | LL | 4 | EUR | 5 |
| 5182 | DL82 | E39 | 530D | M57 | HECK | AUT | 30.00 | LIM | 142 | RL | 4 | EUR | 5 |
| 5311 | DD11 | E39 | 520I | M52 | HECK | MECH | 20.00 | LIM | 110 | LL | 4 | EUR | 5 |
| 5312 | DD12 | E39 | 520I | M52 | HECK | MECH | 20.00 | LIM | 110 | RL | 4 | EUR | 5 |
| 5321 | DD21 | E39 | 520I | M52 | HECK | AUT | 20.00 | LIM | 110 | LL | 4 | EUR | 5 |
| 5322 | DD22 | E39 | 520I | M52 | HECK | AUT | 20.00 | LIM | 110 | RL | 4 | EUR | 5 |
| 5324 | DD24 | E39 | 520I | M52 | HECK | AUT | 20.00 | LIM | 110 | RL | 4 | MYS | 5 |
| 5331 | DD31 | E39 | 523I | M52 | HECK | MECH | 25.00 | LIM | 125 | LL | 4 | EUR | 5 |
| 5332 | DD32 | E39 | 523I | M52 | HECK | MECH | 25.00 | LIM | 125 | RL | 4 | EUR | 5 |
| 5337 | DD37 | E39 | 523I | M52 | HECK | MECH | 25.00 | LIM | 125 | RL | 4 | IDN | 5 |
| 5341 | DD41 | E39 | 523I | M52 | HECK | AUT | 25.00 | LIM | 125 | LL | 4 | EUR | 5 |
| 5342 | DD42 | E39 | 523I | M52 | HECK | AUT | 25.00 | LIM | 125 | RL | 4 | EUR | 5 |
| 5344 | DD44 | E39 | 523I | M52 | HECK | AUT | 25.00 | LIM | 125 | RL | 4 | MYS | 5 |
| 5345 | DD45 | E39 | 523I | M52 | HECK | AUT | 24.00 | LIM | 140 | RL | 4 | THA | 5 |
| 5346 | DD46 | E39 | 523I | M52 | HECK | AUT | 25.00 | LIM | 125 | LL | 4 | EGY | 5 |
| 5347 | DD47 | E39 | 523I | M52 | HECK | AUT | 25.00 | LIM | 125 | RL | 4 | IDN | 5 |
| 5349 | DD49 | E39 | 523I | M52 | HECK | AUT | 25.00 | LIM | 125 | LL | 4 | PHL | 5 |
| 5351 | DD51 | E39 | 528I | M52 | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | EUR | 5 |
| 5352 | DD52 | E39 | 528I | M52 | HECK | MECH | 28.00 | LIM | 142 | RL | 4 | EUR | 5 |
| 5353 | DD53 | E39 | 528I | M52 | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | USA | 5 |
| 5359 | DD59 | E39 | 528I | M52 | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | VNM | 5 |
| 5361 | DD61 | E39 | 528I | M52 | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | EUR | 5 |
| 5362 | DD62 | E39 | 528I | M52 | HECK | AUT | 28.00 | LIM | 142 | RL | 4 | EUR | 5 |
| 5363 | DD63 | E39 | 528I | M52 | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | USA | 5 |
| 5366 | DD66 | E39 | 528I | M52 | HECK | AUT | 28.00 | LIM | 142 | RL | 4 | IDN | 5 |
| 5367 | DD67 | E39 | 528I | M52 | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | MEX | 5 |
| 5411 | DE11 | E39 | 535I | M62 | HECK | MECH | 35.00 | LIM | 170 | LL | 4 | EUR | 5 |
| 5412 | DE12 | E39 | 535I | M62 | HECK | MECH | 35.00 | LIM | 170 | RL | 4 | EUR | 5 |
| 5421 | DE21 | E39 | 535I | M62 | HECK | AUT | 35.00 | LIM | 170 | LL | 4 | EUR | 5 |
| 5422 | DE22 | E39 | 535I | M62 | HECK | AUT | 35.00 | LIM | 170 | RL | 4 | EUR | 5 |
| 5451 | DE51 | E39 | 540I | M62 | HECK | MECH | 44.00 | LIM | 210 | LL | 4 | EUR | 5 |
| 5452 | DE52 | E39 | 540I | M62 | HECK | MECH | 44.00 | LIM | 210 | RL | 4 | EUR | 5 |
| 5453 | DE53 | E39 | 540I | M62 | HECK | MECH | 44.00 | LIM | 210 | LL | 4 | USA | 5 |
| 5461 | DE61 | E39 | 540I | M62 | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | EUR | 5 |
| 5462 | DE62 | E39 | 540I | M62 | HECK | AUT | 44.00 | LIM | 210 | RL | 4 | EUR | 5 |
| 5463 | DE63 | E39 | 540I | M62 | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | USA | 5 |
| 5467 | DE67 | E39 | 540I | M62 | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | MEX | 5 |
| 5481 | DE81 | E39 | 540I | M62 | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | EUR | 5 |
| 5482 | DE82 | E39 | 540I | M62 | HECK | AUT | 44.00 | LIM | 210 | RL | 4 | EUR | 5 |
| 5483 | DE83 | E39 | 540I | M62 | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | USA | 5 |
| 5487 | DE87 | E39 | 540I | M62 | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | MEX | 5 |
| 5491 | DE91 | E39 | M5 | S62 | HECK | MECH | 50.00 | LIM | 294 | LL | 4 | EUR | 5 |
| 5492 | DE92 | E39 | M5 | S62 | HECK | MECH | 50.00 | LIM | 294 | RL | 4 | EUR | 5 |
| 5493 | DE93 | E39 | M5 | S62 | HECK | MECH | 50.00 | LIM | 294 | LL | 4 | USA | 5 |
| 5551 | DF51 | E39 | 525TD | M51 | HECK | MECH | 25.00 | LIM | 85 | LL | 4 | EUR | 5 |
| 5571 | DF71 | E39 | 525TDS | M51 | HECK | MECH | 25.00 | LIM | 105 | LL | 4 | EUR | 5 |
| 5572 | DF72 | E39 | 525TDS | M51 | HECK | MECH | 25.00 | LIM | 105 | RL | 4 | EUR | 5 |
| 5581 | DF81 | E39 | 525TDS | M51 | HECK | AUT | 25.00 | LIM | 105 | LL | 4 | EUR | 5 |
| 5582 | DF82 | E39 | 525TDS | M51 | HECK | AUT | 25.00 | LIM | 105 | RL | 4 | EUR | 5 |
| 5671 | DG71 | E39 | 525TDS | M51 | HECK | MECH | 25.00 | TOUR | 105 | LL | 5 | EUR | 5 |
| 5672 | DG72 | E39 | 525TDS | M51 | HECK | MECH | 25.00 | TOUR | 105 | RL | 5 | EUR | 5 |
| 5681 | DG81 | E39 | 525TDS | M51 | HECK | AUT | 25.00 | TOUR | 105 | LL | 5 | EUR | 5 |
| 5682 | DG82 | E39 | 525TDS | M51 | HECK | AUT | 25.00 | TOUR | 105 | RL | 5 | EUR | 5 |
| 5711 | DH11 | E39 | 520I | M52 | HECK | MECH | 20.00 | TOUR | 110 | LL | 5 | EUR | 5 |
| 5712 | DH12 | E39 | 520I | M52 | HECK | MECH | 20.00 | TOUR | 110 | RL | 5 | EUR | 5 |
| 5721 | DH21 | E39 | 520I | M52 | HECK | AUT | 20.00 | TOUR | 110 | LL | 5 | EUR | 5 |
| 5722 | DH22 | E39 | 520I | M52 | HECK | AUT | 20.00 | TOUR | 110 | RL | 5 | EUR | 5 |
| 5731 | DH31 | E39 | 523I | M52 | HECK | MECH | 25.00 | TOUR | 125 | LL | 5 | EUR | 5 |
| 5732 | DH32 | E39 | 523I | M52 | HECK | MECH | 25.00 | TOUR | 125 | RL | 5 | EUR | 5 |
| 5741 | DH41 | E39 | 523I | M52 | HECK | AUT | 25.00 | TOUR | 125 | LL | 5 | EUR | 5 |
| 5742 | DH42 | E39 | 523I | M52 | HECK | AUT | 25.00 | TOUR | 125 | RL | 5 | EUR | 5 |
| 5751 | DH51 | E39 | 528I | M52 | HECK | MECH | 28.00 | TOUR | 142 | LL | 5 | EUR | 5 |
| 5752 | DH52 | E39 | 528I | M52 | HECK | MECH | 28.00 | TOUR | 142 | RL | 5 | EUR | 5 |
| 5761 | DH61 | E39 | 528I | M52 | HECK | AUT | 28.00 | TOUR | 142 | LL | 5 | EUR | 5 |
| 5762 | DH62 | E39 | 528I | M52 | HECK | AUT | 28.00 | TOUR | 142 | RL | 5 | EUR | 5 |
| 5871 | DP71 | E39 | 530D | M57 | HECK | MECH | 30.00 | TOUR | 142 | LL | 5 | EUR | 5 |
| 5872 | DP72 | E39 | 530D | M57 | HECK | MECH | 30.00 | TOUR | 142 | RL | 5 | EUR | 5 |
| 5881 | DP81 | E39 | 530D | M57 | HECK | AUT | 30.00 | TOUR | 142 | LL | 5 | EUR | 5 |
| 5882 | DP82 | E39 | 530D | M57 | HECK | AUT | 30.00 | TOUR | 142 | RL | 5 | EUR | 5 |
| 5951 | DJ51 | E39 | 540I | M62 | HECK | MECH | 44.00 | TOUR | 210 | LL | 5 | EUR | 5 |
| 5952 | DJ52 | E39 | 540I | M62 | HECK | MECH | 44.00 | TOUR | 210 | RL | 5 | EUR | 5 |
| 5961 | DJ61 | E39 | 540I | M62 | HECK | AUT | 44.00 | TOUR | 210 | LL | 5 | EUR | 5 |
| 5962 | DJ62 | E39 | 540I | M62 | HECK | AUT | 44.00 | TOUR | 210 | RL | 5 | EUR | 5 |
| 5A11 | DM11 | E39 | 520I | M52/TU | HECK | MECH | 20.00 | LIM | 110 | LL | 4 | EUR | 5 |
| 5A12 | DM12 | E39 | 520I | M52/TU | HECK | MECH | 20.00 | LIM | 110 | RL | 4 | EUR | 5 |
| 5A21 | DM21 | E39 | 520I | M52/TU | HECK | AUT | 20.00 | LIM | 110 | LL | 4 | EUR | 5 |
| 5A22 | DM22 | E39 | 520I | M52/TU | HECK | AUT | 20.00 | LIM | 110 | RL | 4 | EUR | 5 |
| 5A24 | DM24 | E39 | 520I | M52/TU | HECK | AUT | 20.00 | LIM | 110 | RL | 4 | MYS | 5 |
| 5A26 | DM26 | E39 | 520I | M52/TU | HECK | AUT | 20.00 | LIM | 100 | LL | 4 | EGY | 5 |
| 5A31 | DM31 | E39 | 523I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | LL | 4 | EUR | 5 |
| 5A32 | DM32 | E39 | 523I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | RL | 4 | EUR | 5 |
| 5A37 | DM37 | E39 | 523I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | RL | 4 | IDN | 5 |
| 5A41 | DM41 | E39 | 523I | M52/TU | HECK | AUT | 25.00 | LIM | 125 | LL | 4 | EUR | 5 |
| 5A42 | DM42 | E39 | 523I | M52/TU | HECK | AUT | 25.00 | LIM | 125 | RL | 4 | EUR | 5 |
| 5A44 | DM44 | E39 | 523I | M52/TU | HECK | AUT | 25.00 | LIM | 125 | RL | 4 | MYS | 5 |
| 5A45 | DM45 | E39 | 523I | M52/TU | HECK | AUT | 24.00 | LIM | 135 | RL | 4 | THA | 5 |
| 5A46 | DM46 | E39 | 523I | M52/TU | HECK | AUT | 25.00 | LIM | 125 | LL | 4 | EGY | 5 |
| 5A47 | DM47 | E39 | 523I | M52/TU | HECK | AUT | 25.00 | LIM | 125 | RL | 4 | IDN | 5 |
| 5A49 | DM49 | E39 | 523I | M52/TU | HECK | AUT | 25.00 | LIM | 125 | LL | 4 | PHL | 5 |
| 5A51 | DM51 | E39 | 528I | M52/TU | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | EUR | 5 |
| 5A52 | DM52 | E39 | 528I | M52/TU | HECK | MECH | 28.00 | LIM | 142 | RL | 4 | EUR | 5 |
| 5A53 | DM53 | E39 | 528I | M52/TU | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | USA | 5 |
| 5A58 | DM58 | E39 | 528I | M52/TU | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | RUS | 5 |
| 5A61 | DM61 | E39 | 528I | M52/TU | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | EUR | 5 |
| 5A62 | DM62 | E39 | 528I | M52/TU | HECK | AUT | 28.00 | LIM | 142 | RL | 4 | EUR | 5 |
| 5A63 | DM63 | E39 | 528I | M52/TU | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | USA | 5 |
| 5A64 | DM64 | E39 | 528I | M52/TU | HECK | AUT | 28.00 | LIM | 142 | RL | 4 | MYS | 5 |
| 5A66 | DM66 | E39 | 528I | M52/TU | HECK | AUT | 28.00 | LIM | 142 | RL | 4 | IDN | 5 |
| 5A67 | DM67 | E39 | 528I | M52/TU | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | MEX | 5 |
| 5A68 | DM68 | E39 | 528I | M52/TU | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | RUS | 5 |
| 5A69 | DM69 | E39 | 528I | M52/TU | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | VNM | 5 |
| 5A71 | DM71 | E39 | 520D | M47 | HECK | MECH | 20.00 | LIM | 100 | LL | 4 | EUR | 5 |
| 5A87 | DM87 | E39 | 528I | M52/TU | HECK | AUT | 28.00 | LIM | 142 | LL | 4 | MEX | 5 |
| 5B11 | DN11 | E39 | 535I | M62/TU | HECK | MECH | 35.00 | LIM | 180 | LL | 4 | EUR | 5 |
| 5B12 | DN12 | E39 | 535I | M62/TU | HECK | MECH | 35.00 | LIM | 180 | RL | 4 | EUR | 5 |
| 5B21 | DN21 | E39 | 535I | M62/TU | HECK | AUT | 35.00 | LIM | 180 | LL | 4 | EUR | 5 |
| 5B22 | DN22 | E39 | 535I | M62/TU | HECK | AUT | 35.00 | LIM | 180 | RL | 4 | EUR | 5 |
| 5B51 | DN51 | E39 | 540I | M62/TU | HECK | MECH | 44.00 | LIM | 210 | LL | 4 | EUR | 5 |
| 5B52 | DN52 | E39 | 540I | M62/TU | HECK | MECH | 44.00 | LIM | 210 | RL | 4 | EUR | 5 |
| 5B53 | DN53 | E39 | 540I | M62/TU | HECK | MECH | 44.00 | LIM | 210 | LL | 4 | USA | 5 |
| 5B61 | DN61 | E39 | 540I | M62/TU | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | EUR | 5 |
| 5B62 | DN62 | E39 | 540I | M62/TU | HECK | AUT | 44.00 | LIM | 210 | RL | 4 | EUR | 5 |
| 5B63 | DN63 | E39 | 540I | M62/TU | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | USA | 5 |
| 5B67 | DN67 | E39 | 540I | M62/TU | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | MEX | 5 |
| 5B81 | DN81 | E39 | 540I | M62/TU | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | EUR | 5 |
| 5B82 | DN82 | E39 | 540I | M62/TU | HECK | AUT | 44.00 | LIM | 210 | RL | 4 | EUR | 5 |
| 5B83 | DN83 | E39 | 540I | M62/TU | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | USA | 5 |
| 5B87 | DN87 | E39 | 540I | M62/TU | HECK | AUT | 44.00 | LIM | 210 | LL | 4 | MEX | 5 |
| 5C01 | DP01 | E39 | 525D | M57 | HECK | AUT | 25.00 | TOUR | 120 | LL | 5 | EUR | 5 |
| 5C02 | DP02 | E39 | 525D | M57 | HECK | AUT | 25.00 | TOUR | 120 | RL | 5 | EUR | 5 |
| 5C11 | DR11 | E39 | 520I | M52/TU | HECK | MECH | 20.00 | TOUR | 110 | LL | 5 | EUR | 5 |
| 5C12 | DR12 | E39 | 520I | M52/TU | HECK | MECH | 20.00 | TOUR | 110 | RL | 5 | EUR | 5 |
| 5C21 | DR21 | E39 | 520I | M52/TU | HECK | AUT | 20.00 | TOUR | 110 | LL | 5 | EUR | 5 |
| 5C22 | DR22 | E39 | 520I | M52/TU | HECK | AUT | 20.00 | TOUR | 110 | RL | 5 | EUR | 5 |
| 5C31 | DR31 | E39 | 523I | M52/TU | HECK | MECH | 25.00 | TOUR | 125 | LL | 5 | EUR | 5 |
| 5C32 | DR32 | E39 | 523I | M52/TU | HECK | MECH | 25.00 | TOUR | 125 | RL | 5 | EUR | 5 |
| 5C41 | DR41 | E39 | 523I | M52/TU | HECK | AUT | 25.00 | TOUR | 125 | LL | 5 | EUR | 5 |
| 5C42 | DR42 | E39 | 523I | M52/TU | HECK | AUT | 25.00 | TOUR | 125 | RL | 5 | EUR | 5 |
| 5C51 | DP51 | E39 | 528I | M52/TU | HECK | MECH | 28.00 | TOUR | 142 | LL | 5 | EUR | 5 |
| 5C52 | DP52 | E39 | 528I | M52/TU | HECK | MECH | 28.00 | TOUR | 142 | RL | 5 | EUR | 5 |
| 5C53 | DP53 | E39 | 528I | M52/TU | HECK | MECH | 28.00 | TOUR | 142 | LL | 5 | USA | 5 |
| 5C61 | DP61 | E39 | 528I | M52/TU | HECK | AUT | 28.00 | TOUR | 142 | LL | 5 | EUR | 5 |
| 5C62 | DP62 | E39 | 528I | M52/TU | HECK | AUT | 28.00 | TOUR | 142 | RL | 5 | EUR | 5 |
| 5C63 | DP63 | E39 | 528I | M52/TU | HECK | AUT | 28.00 | TOUR | 142 | LL | 5 | USA | 5 |
| 5C91 | DP91 | E39 | 525D | M57 | HECK | MECH | 25.00 | TOUR | 120 | LL | 5 | EUR | 5 |
| 5C92 | DP92 | E39 | 525D | M57 | HECK | MECH | 25.00 | TOUR | 120 | RL | 5 | EUR | 5 |
| 5D51 | DR51 | E39 | 540I | M62/TU | HECK | MECH | 44.00 | TOUR | 210 | LL | 5 | EUR | 5 |
| 5D52 | DR52 | E39 | 540I | M62/TU | HECK | MECH | 44.00 | TOUR | 210 | RL | 5 | EUR | 5 |
| 5D61 | DR61 | E39 | 540I | M62/TU | HECK | AUT | 44.00 | TOUR | 210 | LL | 5 | EUR | 5 |
| 5D62 | DR62 | E39 | 540I | M62/TU | HECK | AUT | 44.00 | TOUR | 210 | RL | 5 | EUR | 5 |
| 5D63 | DR63 | E39 | 540I | M62/TU | HECK | AUT | 44.00 | TOUR | 210 | LL | 5 | USA | 5 |
| 5D71 | DR71 | E39 | 520D | M47 | HECK | MECH | 20.00 | TOUR | 100 | LL | 5 | EUR | 5 |
| 5E01 | DL01 | E39 | 525D | M57 | HECK | AUT | 25.00 | LIM | 120 | LL | 4 | EUR | 5 |
| 5E02 | DL02 | E39 | 525D | M57 | HECK | AUT | 25.00 | LIM | 120 | RL | 4 | EUR | 5 |
| 5E11 | DS11 | E39 | 520I | M54 | HECK | MECH | 22.00 | TOUR | 125 | LL | 5 | EUR | 5 |
| 5E12 | DS12 | E39 | 520I | M54 | HECK | MECH | 22.00 | TOUR | 125 | RL | 5 | EUR | 5 |
| 5E21 | DS21 | E39 | 520I | M54 | HECK | AUT | 22.00 | TOUR | 125 | LL | 5 | EUR | 5 |
| 5E22 | DS22 | E39 | 520I | M54 | HECK | AUT | 22.00 | TOUR | 125 | RL | 5 | EUR | 5 |
| 5E31 | DS31 | E39 | 525I | M54 | HECK | MECH | 25.00 | TOUR | 141 | LL | 5 | EUR | 5 |
| 5E32 | DS32 | E39 | 525I | M54 | HECK | MECH | 25.00 | TOUR | 141 | RL | 5 | EUR | 5 |
| 5E33 | DS33 | E39 | 525I | M54 | HECK | MECH | 25.00 | TOUR | 141 | LL | 5 | USA | 5 |
| 5E38 | DL38 | E39 | 523I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | LL | 4 | RUS | 5 |
| 5E41 | DS41 | E39 | 525I | M54 | HECK | AUT | 25.00 | TOUR | 141 | LL | 5 | EUR | 5 |
| 5E42 | DS42 | E39 | 525I | M54 | HECK | AUT | 25.00 | TOUR | 141 | RL | 5 | EUR | 5 |
| 5E43 | DS43 | E39 | 525I | M54 | HECK | AUT | 25.00 | TOUR | 141 | LL | 5 | USA | 5 |
| 5E48 | DL48 | E39 | 523I | M52/TU | HECK | AUT | 25.00 | LIM | 125 | LL | 4 | RUS | 5 |
| 5E51 | DS51 | E39 | 530I | M54 | HECK | MECH | 30.00 | TOUR | 170 | LL | 5 | EUR | 5 |
| 5E52 | DS52 | E39 | 530I | M54 | HECK | MECH | 30.00 | TOUR | 170 | RL | 5 | EUR | 5 |
| 5E61 | DS61 | E39 | 530I | M54 | HECK | AUT | 30.00 | TOUR | 170 | LL | 5 | EUR | 5 |
| 5E62 | DS62 | E39 | 530I | M54 | HECK | AUT | 30.00 | TOUR | 170 | RL | 5 | EUR | 5 |
| 5E91 | DL91 | E39 | 525D | M57 | HECK | MECH | 25.00 | LIM | 120 | LL | 4 | EUR | 5 |
| 5E92 | DL92 | E39 | 525D | M57 | HECK | MECH | 25.00 | LIM | 120 | RL | 4 | EUR | 5 |
| 5F11 | DT11 | E39 | 520I | M54 | HECK | MECH | 22.00 | LIM | 125 | LL | 4 | EUR | 5 |
| 5F12 | DT12 | E39 | 520I | M54 | HECK | MECH | 22.00 | LIM | 125 | RL | 4 | EUR | 5 |
| 5F21 | DT21 | E39 | 520I | M54 | HECK | AUT | 22.00 | LIM | 125 | LL | 4 | EUR | 5 |
| 5F22 | DT22 | E39 | 520I | M54 | HECK | AUT | 22.00 | LIM | 125 | RL | 4 | EUR | 5 |
| 5F23 | DT27 | E39 | 520I | M54 | HECK | AUT | 22.00 | LIM | 125 | RL | 4 | IDN | 5 |
| 5F24 | DT24 | E39 | 520I | M54 | HECK | AUT | 22.00 | LIM | 125 | RL | 4 | MYS | 5 |
| 5F26 | DT26 | E39 | 520I | M54 | HECK | AUT | 22.00 | LIM | 125 | LL | 4 | EGY | 5 |
| 5F31 | DT31 | E39 | 525I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | EUR | 5 |
| 5F32 | DT32 | E39 | 525I | M54 | HECK | MECH | 25.00 | LIM | 141 | RL | 4 | EUR | 5 |
| 5F33 | DT33 | E39 | 525I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | USA | 5 |
| 5F35 | DT35 | E39 | 525I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | RUS | 5 |
| 5F41 | DT41 | E39 | 525I | M54 | HECK | AUT | 25.00 | LIM | 141 | LL | 4 | EUR | 5 |
| 5F42 | DT42 | E39 | 525I | M54 | HECK | AUT | 25.00 | LIM | 141 | RL | 4 | EUR | 5 |
| 5F43 | DT43 | E39 | 525I | M54 | HECK | AUT | 25.00 | LIM | 141 | LL | 4 | USA | 5 |
| 5F44 | DT44 | E39 | 525I | M54 | HECK | AUT | 25.00 | LIM | 141 | RL | 4 | MYS | 5 |
| 5F45 | DT45 | E39 | 525I | M54 | HECK | AUT | 25.00 | LIM | 141 | LL | 4 | RUS | 5 |
| 5F46 | DT46 | E39 | 525I | M54 | HECK | AUT | 25.00 | LIM | 141 | LL | 4 | EGY | 5 |
| 5F47 | DT47 | E39 | 525I | M54 | HECK | AUT | 25.00 | LIM | 141 | RL | 4 | IDN | 5 |
| 5F48 | DT48 | E39 | 525I | M54 | HECK | AUT | 25.00 | LIM | 141 | LL | 4 | VNM | 5 |
| 5F49 | DT49 | E39 | 525I | M54 | HECK | AUT | 25.00 | LIM | 141 | LL | 4 | PHL | 5 |
| 5F51 | DT51 | E39 | 530I | M54 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | EUR | 5 |
| 5F52 | DT52 | E39 | 530I | M54 | HECK | MECH | 30.00 | LIM | 170 | RL | 4 | EUR | 5 |
| 5F53 | DT53 | E39 | 530I | M54 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | USA | 5 |
| 5F55 | DT55 | E39 | 530I | M54 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | RUS | 5 |
| 5F61 | DT61 | E39 | 530I | M54 | HECK | AUT | 30.00 | LIM | 170 | LL | 4 | EUR | 5 |
| 5F62 | DT62 | E39 | 530I | M54 | HECK | AUT | 30.00 | LIM | 170 | RL | 4 | EUR | 5 |
| 5F63 | DT63 | E39 | 530I | M54 | HECK | AUT | 30.00 | LIM | 170 | LL | 4 | USA | 5 |
| 5F65 | DT65 | E39 | 530I | M54 | HECK | AUT | 30.00 | LIM | 170 | LL | 4 | RUS | 5 |
| 5F66 | DT66 | E39 | 530I | M54 | HECK | AUT | 30.00 | LIM | 170 | RL | 4 | IDN | 5 |
| 5F68 | DT68 | E39 | 530I | M54 | HECK | AUT | 30.00 | LIM | 170 | RL | 4 | MYS | 5 |
| 6031 | BL31 | E46 | 318CI | M43/TU | HECK | MECH | 19.00 | COUPE | 87 | LL | 2 | EUR | 3 |
| 6032 | BL32 | E46 | 318CI | M43/TU | HECK | MECH | 19.00 | COUPE | 87 | RL | 2 | EUR | 3 |
| 6051 | BL51 | E46 | 316CI | M43/TU | HECK | MECH | 16.00 | COUPE | 77 | LL | 2 | EUR | 3 |
| 6111 | BM11 | E46 | 320CI | M52/TU | HECK | MECH | 20.00 | COUPE | 110 | LL | 2 | EUR | 3 |
| 6121 | BN11 | E46 | 320CI | M54 | HECK | MECH | 22.00 | COUPE | 125 | LL | 2 | EUR | 3 |
| 6122 | BN12 | E46 | 320CI | M54 | HECK | MECH | 22.00 | COUPE | 125 | RL | 2 | EUR | 3 |
| 6131 | BM31 | E46 | 323CI | M52/TU | HECK | MECH | 25.00 | COUPE | 125 | LL | 2 | EUR | 3 |
| 6132 | BM32 | E46 | 323CI | M52/TU | HECK | MECH | 25.00 | COUPE | 125 | RL | 2 | EUR | 3 |
| 6133 | BM33 | E46 | 323CI | M52/TU | HECK | MECH | 25.00 | COUPE | 125 | LL | 2 | USA | 3 |
| 6141 | BN31 | E46 | 325CI | M54 | HECK | MECH | 25.00 | COUPE | 141 | LL | 2 | EUR | 3 |
| 6142 | BN32 | E46 | 325CI | M54 | HECK | MECH | 25.00 | COUPE | 141 | RL | 2 | EUR | 3 |
| 6143 | BN33 | E46 | 325CI | M54 | HECK | MECH | 25.00 | COUPE | 141 | LL | 2 | USA | 3 |
| 6151 | BM51 | E46 | 328CI | M52/TU | HECK | MECH | 28.00 | COUPE | 142 | LL | 2 | EUR | 3 |
| 6152 | BM52 | E46 | 328CI | M52/TU | HECK | MECH | 28.00 | COUPE | 142 | RL | 2 | EUR | 3 |
| 6153 | BM53 | E46 | 328CI | M52/TU | HECK | MECH | 28.00 | COUPE | 142 | LL | 2 | USA | 3 |
| 6161 | BN51 | E46 | 330CI | M54 | HECK | MECH | 30.00 | COUPE | 170 | LL | 2 | EUR | 3 |
| 6162 | BN52 | E46 | 330CI | M54 | HECK | MECH | 30.00 | COUPE | 170 | RL | 2 | EUR | 3 |
| 6163 | BN53 | E46 | 330CI | M54 | HECK | MECH | 30.00 | COUPE | 170 | LL | 2 | USA | 3 |
| 6191 | BL91 | E46 | M3 | S54 | HECK | MECH | 32.00 | COUPE | 252 | LL | 2 | EUR | 3 |
| 6192 | BL92 | E46 | M3 | S54 | HECK | MECH | 32.00 | COUPE | 252 | RL | 2 | EUR | 3 |
| 6193 | BL93 | E46 | M3 | S54 | HECK | MECH | 32.00 | COUPE | 252 | LL | 2 | USA | 3 |
| 6421 | BS11 | E46 | 320CI | M54 | HECK | MECH | 22.00 | CABRIO | 125 | LL | 2 | EUR | 3 |
| 6422 | BS12 | E46 | 320CI | M54 | HECK | MECH | 22.00 | CABRIO | 125 | RL | 2 | EUR | 3 |
| 6431 | BR31 | E46 | 323CI | M52/TU | HECK | MECH | 25.00 | CABRIO | 125 | LL | 2 | EUR | 3 |
| 6432 | BR32 | E46 | 323CI | M52/TU | HECK | MECH | 25.00 | CABRIO | 125 | RL | 2 | EUR | 3 |
| 6433 | BR33 | E46 | 323CI | M52/TU | HECK | MECH | 25.00 | CABRIO | 125 | LL | 2 | USA | 3 |
| 6441 | BS31 | E46 | 325CI | M54 | HECK | MECH | 25.00 | CABRIO | 141 | LL | 2 | EUR | 3 |
| 6442 | BS32 | E46 | 325CI | M54 | HECK | MECH | 25.00 | CABRIO | 141 | RL | 2 | EUR | 3 |
| 6443 | BS33 | E46 | 325CI | M54 | HECK | MECH | 25.00 | CABRIO | 141 | LL | 2 | USA | 3 |
| 6461 | BS51 | E46 | 330CI | M54 | HECK | MECH | 30.00 | CABRIO | 170 | LL | 2 | EUR | 3 |
| 6462 | BS52 | E46 | 330CI | M54 | HECK | MECH | 30.00 | CABRIO | 170 | RL | 2 | EUR | 3 |
| 6463 | BS53 | E46 | 330CI | M54 | HECK | MECH | 30.00 | CABRIO | 170 | LL | 2 | USA | 3 |
| 6491 | BR91 | E46 | M3 | S54 | HECK | MECH | 32.00 | CABRIO | 252 | LL | 2 | EUR | 3 |
| 6492 | BR92 | E46 | M3 | S54 | HECK | MECH | 32.00 | CABRIO | 252 | RL | 2 | EUR | 3 |
| 6493 | BR93 | E46 | M3 | S54 | HECK | MECH | 32.00 | CABRIO | 252 | LL | 2 | USA | 3 |
| 6511 | AL11 | E46 | 316I | M43/TU | HECK | MECH | 19.00 | LIM | 77 | LL | 4 | EUR | 3 |
| 6512 | AL12 | E46 | 316I | M43/TU | HECK | MECH | 19.00 | LIM | 77 | RL | 4 | EUR | 3 |
| 6518 | AL18 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | LIM | 87 | LL | 4 | VNM | 3 |
| 6531 | AL31 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | LIM | 87 | LL | 4 | EUR | 3 |
| 6532 | AL32 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | LIM | 87 | RL | 4 | EUR | 3 |
| 6534 | AL34 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | LIM | 87 | RL | 4 | MYS | 3 |
| 6535 | AL35 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | LIM | 87 | RL | 4 | THA | 3 |
| 6536 | AL36 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | LIM | 87 | LL | 4 | EGY | 3 |
| 6537 | AL37 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | LIM | 87 | RL | 4 | IDN | 3 |
| 6539 | AL39 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | LIM | 87 | LL | 4 | PHL | 3 |
| 6541 | AV31 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | EUR | 3 |
| 6542 | AV32 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | RL | 4 | EUR | 3 |
| 6543 | AV33 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | USA | 3 |
| 6545 | AV35 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | RL | 4 | MYS | 3 |
| 6546 | AV36 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | RL | 4 | IDN | 3 |
| 6547 | AV37 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | PHL | 3 |
| 6548 | AV38 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | VNM | 3 |
| 6549 | AV39 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | MEX | 3 |
| 6551 | AL51 | E46 | 316I | M43/TU | HECK | MECH | 16.00 | LIM | 75 | LL | 4 | EUR | 3 |
| 6555 | AL55 | E46 | 316I | M43/TU | HECK | MECH | 16.00 | LIM | 77 | LL | 4 | PHL | 3 |
| 6558 | AL58 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | LIM | 85 | LL | 4 | RUS | 3 |
| 6561 | AV51 | E46 | 330I | M54 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | EUR | 3 |
| 6562 | AV52 | E46 | 330I | M54 | HECK | MECH | 30.00 | LIM | 170 | RL | 4 | EUR | 3 |
| 6563 | AV53 | E46 | 330I | M54 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | USA | 3 |
| 6569 | AV59 | E46 | 330I | M54 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | MEX | 3 |
| 6572 | AN72 | E46 | 316I | M43/TU | HECK | MECH | 19.00 | LIM | 77 | RL | 4 | EUR | 3 |
| 6591 | AN91 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | LIM | 87 | LL | 4 | EUR | 3 |
| 6592 | AN92 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | LIM | 87 | RL | 4 | EUR | 3 |
| 6611 | AM11 | E46 | 320I | M52/TU | HECK | MECH | 20.00 | LIM | 110 | LL | 4 | EUR | 3 |
| 6612 | AM12 | E46 | 320I | M52/TU | HECK | MECH | 20.00 | LIM | 110 | RL | 4 | EUR | 3 |
| 6621 | AV11 | E46 | 320I | M54 | HECK | MECH | 22.00 | LIM | 125 | LL | 4 | EUR | 3 |
| 6622 | AV12 | E46 | 320I | M54 | HECK | MECH | 22.00 | LIM | 125 | RL | 4 | EUR | 3 |
| 6623 | AV13 | E46 | 320I | M54 | HECK | MECH | 22.00 | LIM | 125 | LL | 4 | USA | 3 |
| 6628 | AV18 | E46 | 320I | M54 | HECK | MECH | 22.00 | LIM | 125 | LL | 4 | RUS | 3 |
| 6631 | AM31 | E46 | 323I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | LL | 4 | EUR | 3 |
| 6632 | AM32 | E46 | 323I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | RL | 4 | EUR | 3 |
| 6633 | AM33 | E46 | 323I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | LL | 4 | USA | 3 |
| 6635 | ES35 | E46 | 323I | M52/TU | HECK | MECH | 24.00 | LIM | 135 | RL | 4 | THA | 3 |
| 6636 | AM36 | E46 | 323I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | LL | 4 | VNM | 3 |
| 6637 | AM37 | E46 | 323I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | RL | 4 | IDN | 3 |
| 6638 | AM38 | E46 | 323I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | LL | 4 | MEX | 3 |
| 6639 | AM39 | E46 | 323I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | LL | 4 | PHL | 3 |
| 6651 | AM51 | E46 | 328I | M52/TU | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | EUR | 3 |
| 6652 | AM52 | E46 | 328I | M52/TU | HECK | MECH | 28.00 | LIM | 142 | RL | 4 | EUR | 3 |
| 6653 | AM53 | E46 | 328I | M52/TU | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | USA | 3 |
| 6654 | AM54 | E46 | 328I | M52/TU | HECK | MECH | 28.00 | LIM | 142 | RL | 4 | MYS | 3 |
| 6657 | AM57 | E46 | 328I | M52/TU | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | MEX | 3 |
| 6661 | AN15 | E46 | 320I | M54 | HECK | MECH | 22.00 | LIM | 125 | LL | 4 | EUR | 3 |
| 6662 | AN16 | E46 | 320I | M54 | HECK | MECH | 22.00 | LIM | 125 | RL | 4 | EUR | 3 |
| 6671 | AN11 | E46 | 320I | M52/TU | HECK | MECH | 20.00 | LIM | 110 | LL | 4 | EUR | 3 |
| 6672 | AN12 | E46 | 320I | M52/TU | HECK | MECH | 20.00 | LIM | 110 | RL | 4 | EUR | 3 |
| 66A1 | AN31 | E46 | 323I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | LL | 4 | EUR | 3 |
| 66A2 | AN32 | E46 | 323I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | RL | 4 | EUR | 3 |
| 66A3 | AN33 | E46 | 323I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | LL | 4 | USA | 3 |
| 66B1 | AN35 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | EUR | 3 |
| 66B2 | AN36 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | RL | 4 | EUR | 3 |
| 66B3 | AN37 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | USA | 3 |
| 66C1 | AN51 | E46 | 328I | M52/TU | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | EUR | 3 |
| 66C2 | AN52 | E46 | 328I | M52/TU | HECK | MECH | 28.00 | LIM | 142 | RL | 4 | EUR | 3 |
| 66D1 | AN55 | E46 | 330I | M54 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | EUR | 3 |
| 66D2 | AN56 | E46 | 330I | M54 | HECK | MECH | 30.00 | LIM | 170 | RL | 4 | EUR | 3 |
| 6722 | AV72 | E46 | 320D | M47 | HECK | MECH | 20.00 | LIM | 100 | RL | 4 | EUR | 3 |
| 6771 | AL71 | E46 | 320D | M47 | HECK | MECH | 20.00 | LIM | 100 | LL | 4 | EUR | 3 |
| 6772 | AL72 | E46 | 320D | M47 | HECK | MECH | 20.00 | LIM | 100 | RL | 4 | EUR | 3 |
| 6781 | AL91 | E46 | 330D | M57 | HECK | MECH | 30.00 | LIM | 135 | LL | 4 | EUR | 3 |
| 6782 | AL92 | E46 | 330D | M57 | HECK | MECH | 30.00 | LIM | 135 | RL | 4 | EUR | 3 |
| 67A1 | AP71 | E46 | 320D | M47/TU | HECK | MECH | 20.00 | TOUR | 110 | LL | 5 | EUR | 3 |
| 67A2 | AP72 | E46 | 320D | M47/TU | HECK | MECH | 20.00 | TOUR | 110 | RL | 5 | EUR | 3 |
| 67B1 | AS71 | E46 | 320D | M47/TU | HECK | MECH | 20.00 | LIM | 110 | LL | 4 | EUR | 3 |
| 67B2 | AS72 | E46 | 320D | M47/TU | HECK | MECH | 20.00 | LIM | 110 | RL | 4 | EUR | 3 |
| 67C1 | AX71 | E46 | 320D | M47 | HECK | MECH | 20.00 | TOUR | 100 | LL | 5 | EUR | 3 |
| 67C2 | AX72 | E46 | 320D | M47 | HECK | MECH | 20.00 | TOUR | 100 | RL | 5 | EUR | 3 |
| 6831 | AP31 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | TOUR | 87 | LL | 5 | EUR | 3 |
| 6832 | AP32 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | TOUR | 87 | RL | 5 | EUR | 3 |
| 6891 | AP91 | E46 | 330D | M57 | HECK | MECH | 30.00 | TOUR | 135 | LL | 5 | EUR | 3 |
| 6892 | AP92 | E46 | 330D | M57 | HECK | MECH | 30.00 | TOUR | 135 | RL | 5 | EUR | 3 |
| 6911 | AR11 | E46 | 320I | M52/TU | HECK | MECH | 20.00 | TOUR | 110 | LL | 5 | EUR | 3 |
| 6921 | AW11 | E46 | 320I | M54 | HECK | MECH | 22.00 | TOUR | 125 | LL | 5 | EUR | 3 |
| 6922 | AW12 | E46 | 320I | M54 | HECK | MECH | 22.00 | TOUR | 125 | RL | 5 | EUR | 3 |
| 6933 | AR33 | E46 | 323I | M52/TU | HECK | MECH | 25.00 | TOUR | 125 | LL | 5 | USA | 3 |
| 6951 | AR51 | E46 | 328I | M52/TU | HECK | MECH | 28.00 | TOUR | 142 | LL | 5 | EUR | 3 |
| 6952 | AR52 | E46 | 328I | M52/TU | HECK | MECH | 28.00 | TOUR | 142 | RL | 5 | EUR | 3 |
| 6971 | AW31 | E46 | 325I | M54 | HECK | MECH | 25.00 | TOUR | 141 | LL | 5 | EUR | 3 |
| 6972 | AW32 | E46 | 325I | M54 | HECK | MECH | 25.00 | TOUR | 141 | RL | 5 | EUR | 3 |
| 6973 | AW33 | E46 | 325I | M54 | HECK | MECH | 25.00 | TOUR | 141 | LL | 5 | USA | 3 |
| 6981 | AW51 | E46 | 330I | M54 | HECK | MECH | 30.00 | TOUR | 170 | LL | 5 | EUR | 3 |
| 6982 | AW52 | E46 | 330I | M54 | HECK | MECH | 30.00 | TOUR | 170 | RL | 5 | EUR | 3 |
| 6C11 | AT11 | E46 | 316TI | N40 | HECK | MECH | 16.00 | COMP | 85 | LL | 3 | EUR | 3 |
| 6C21 | AT31 | E46 | 325TI | M54 | HECK | MECH | 25.00 | COMP | 141 | LL | 3 | EUR | 3 |
| 6C22 | AT32 | E46 | 325TI | M54 | HECK | MECH | 25.00 | COMP | 141 | RL | 3 | EUR | 3 |
| 6C31 | AT51 | E46 | 316TI | N42 | HECK | MECH | 18.00 | COMP | 85 | LL | 3 | EUR | 3 |
| 6C32 | AT52 | E46 | 316TI | N42 | HECK | MECH | 18.00 | COMP | 85 | RL | 3 | EUR | 3 |
| 6C41 | AT71 | E46 | 320TD | M47/TU | HECK | MECH | 20.00 | COMP | 110 | LL | 3 | EUR | 3 |
| 6C42 | AT72 | E46 | 320TD | M47/TU | HECK | MECH | 20.00 | COMP | 110 | RL | 3 | EUR | 3 |
| 6C71 | AU51 | E46 | 318TI | N42 | HECK | MECH | 20.00 | COMP | 105 | LL | 3 | EUR | 3 |
| 6C72 | AU52 | E46 | 318TI | N42 | HECK | MECH | 20.00 | COMP | 105 | RL | 3 | EUR | 3 |
| 6C83 | AU33 | E46 | 325TI | M56 | HECK | MECH | 25.00 | COMP | 135 | LL | 3 | USA | 3 |
| 7011 | EJ11 | E52 | Z8 | S62 | HECK | MECH | 50.00 | ROADST | 294 | LL | 2 | EUR | 8 |
| 7013 | EJ13 | E52 | Z8 | S62 | HECK | MECH | 50.00 | ROADST | 294 | LL | 2 | USA | 8 |
| 8011 | FA11 | E53 | X5 3.0I | M54 | ALLR | MECH | 30.00 | GEFZG | 170 | LL | 5 | EUR | 5 |
| 8012 | FA12 | E53 | X5 3.0I | M54 | ALLR | MECH | 30.00 | GEFZG | 170 | RL | 5 | EUR | 5 |
| 8013 | FA13 | E53 | X5 3.0I | M54 | ALLR | MECH | 30.00 | GEFZG | 170 | LL | 5 | USA | 5 |
| 8051 | FA51 | E53 | X5 3.0I | M54 | ALLR | MECH | 30.00 | GEFZG | 170 | LL | 5 | EUR | 5 |
| 8052 | FA52 | E53 | X5 3.0I | M54 | ALLR | MECH | 30.00 | GEFZG | 170 | RL | 5 | EUR | 5 |
| 8053 | FA53 | E53 | X5 3.0I | M54 | ALLR | MECH | 30.00 | GEFZG | 170 | LL | 5 | USA | 5 |
| 8071 | FA71 | E53 | X5 3.0D | M57 | ALLR | MECH | 30.00 | GEFZG | 135 | LL | 5 | EUR | 5 |
| 8072 | FA72 | E53 | X5 3.0D | M57 | ALLR | MECH | 30.00 | GEFZG | 135 | RL | 5 | EUR | 5 |
| 8091 | FA91 | E53 | X5 4.8IS | N62 | ALLR | MECH | 48.00 | GEFZG | 275 | LL | 5 | EUR | 5 |
| 8092 | FA92 | E53 | X5 4.8IS | N62 | ALLR | MECH | 48.00 | GEFZG | 275 | RL | 5 | EUR | 5 |
| 8093 | FA93 | E53 | X5 4.8IS | N62 | ALLR | MECH | 48.00 | GEFZG | 275 | LL | 5 | USA | 5 |
| 8131 | FB31 | E53 | X5 4.4I | M62/TU | ALLR | MECH | 44.00 | GEFZG | 210 | LL | 5 | EUR | 5 |
| 8132 | FB32 | E53 | X5 4.4I | M62/TU | ALLR | MECH | 44.00 | GEFZG | 210 | RL | 5 | EUR | 5 |
| 8133 | FB33 | E53 | X5 4.4I | M62/TU | ALLR | MECH | 44.00 | GEFZG | 210 | LL | 5 | USA | 5 |
| 8151 | FB51 | E53 | X5 4.4I | N62 | ALLR | MECH | 44.00 | GEFZG | 238 | LL | 5 | EUR | 5 |
| 8152 | FB52 | E53 | X5 4.4I | N62 | ALLR | MECH | 44.00 | GEFZG | 238 | RL | 5 | EUR | 5 |
| 8153 | FB53 | E53 | X5 4.4I | N62 | ALLR | MECH | 44.00 | GEFZG | 238 | LL | 5 | USA | 5 |
| 8171 | FB71 | E53 | X5 3.0D | M57/TU | ALLR | MECH | 30.00 | GEFZG | 150 | LL | 5 | EUR | 5 |
| 8172 | FB72 | E53 | X5 3.0D | M57/TU | ALLR | MECH | 30.00 | GEFZG | 150 | RL | 5 | EUR | 5 |
| 8191 | FB91 | E53 | X5 4.6IS | M62/TU | ALLR | MECH | 46.00 | GEFZG | 255 | LL | 5 | EUR | 5 |
| 8192 | FB92 | E53 | X5 4.6IS | M62/TU | ALLR | MECH | 46.00 | GEFZG | 255 | RL | 5 | EUR | 5 |
| 8193 | FB93 | E53 | X5 4.6IS | M62/TU | ALLR | MECH | 46.00 | GEFZG | 255 | LL | 5 | USA | 5 |
| 8301 | 8301 | E93 | 325I OL | N53 | HECK | MECH | 25.00 | CABRIO | 160 | LL | 2 | EUR | 3 |
| 8302 | 8302 | E93 | 325I OL | N53 | HECK | MECH | 25.00 | CABRIO | 160 | RL | 2 | EUR | 3 |
| 8303 | 8303 | E93 | 325I UL | N51 | HECK | MECH | 30.00 | CABRIO | 157 | LL | 2 | USA | 3 |
| 8304 | 8304 | E93 | 320I OL | N43 | HECK | MECH | 20.00 | CABRIO | 120 | LL | 2 | EUR | 3 |
| 8305 | 8305 | E93 | 330CD | M57/T2 | HECK | MECH | 30.00 | CABRIO | 170 | LL | 2 | EUR | 3 |
| 8306 | 8306 | E93 | 335I | N54 | HECK | MECH | 30.00 | CABRIO | 225 | LL | 2 | EUR | 3 |
| 8307 | 8307 | E93 | 320I OL | N43 | HECK | MECH | 20.00 | CABRIO | 120 | RL | 2 | EUR | 3 |
| 8308 | 8308 | E93 | 330I | N52K | HECK | MECH | 30.00 | CABRIO | 190 | LL | 2 | USA | 3 |
| 8309 | 8309 | E93 | 320D OL | N47 | HECK | MECH | 20.00 | CABRIO | 130 | LL | 2 | EUR | 3 |
| 8313 | 8313 | E93 | 335I | N54 | HECK | MECH | 30.00 | CABRIO | 225 | LL | 2 | USA | 3 |
| 8321 | 8321 | RR2 | R-ROYCE | N73 | HECK | AUT | 67.00 | CABRIO | 327 | LL | 2 | EUR | R |
| 8322 | 8322 | RR2 | R-ROYCE | N73 | HECK | AUT | 67.00 | CABRIO | 327 | LL | 2 | EUR | R |
| 8323 | 8323 | RR2 | R-ROYCE | N73 | HECK | AUT | 67.00 | CABRIO | 327 | LL | 2 | EUR | R |
| 8331 | 8331 | E81 | 116I | N45 | HECK | MECH | 16.00 | COUPE | 85 | LL | 3 | EUR | 1 |
| 8332 | 8332 | E81 | 120I OL | N43 | HECK | MECH | 20.00 | COUPE | 120 | LL | 3 | EUR | 1 |
| 8333 | 8333 | E81 | 120I OL | N43 | HECK | MECH | 20.00 | COUPE | 120 | RL | 3 | EUR | 1 |
| 8334 | 8334 | E81 | 118D UL | N47 | HECK | MECH | 20.00 | COUPE | 90 | LL | 3 | EUR | 1 |
| 8335 | 8335 | E81 | 118D UL | N47 | HECK | MECH | 20.00 | COUPE | 100 | RL | 3 | EUR | 1 |
| 8338 | 8338 | E88 | 120I OL | N43 | HECK | MECH | 20.00 | CABRIO | 125 | RL | 2 | EUR | 1 |
| 8339 | 8339 | E88 | 123D | N47S | HECK | MECH | 20.00 | CABRIO | 150 | LL | 2 | EUR | 1 |
| 8340 | 8340 | E88 | 120I OL | N43 | HECK | MECH | 20.00 | CABRIO | 125 | LL | 2 | EUR | 1 |
| 8341 | 8341 | E88 | 116I | N43 | HECK | MECH | 16.00 | CABRIO | 90 | LL | 2 | EUR | 1 |
| 8342 | 8342 | E88 | 116I | N43 | HECK | MECH | 16.00 | CABRIO | 90 | RL | 2 | EUR | 1 |
| 8343 | 8343 | E88 | 130I | N52 | HECK | MECH | 30.00 | CABRIO | 190 | LL | 2 | EUR | 1 |
| 8344 | 8344 | E88 | 130I | N52 | HECK | MECH | 30.00 | CABRIO | 190 | RL | 2 | EUR | 1 |
| 8345 | 8345 | E88 | 120D OL | N47 | HECK | MECH | 20.00 | CABRIO | 130 | LL | 2 | EUR | 1 |
| 8346 | 8346 | E88 | 120D OL | N47 | HECK | MECH | 20.00 | CABRIO | 130 | RL | 2 | EUR | 1 |
| 8347 | 8347 | E88 | 135IS | N54 | HECK | MECH | 30.00 | CABRIO | 225 | LL | 2 | USA | 1 |
| 8348 | 8348 | E88 | 135IS | N54 | HECK | MECH | 30.00 | CABRIO | 225 | LL | 2 | EUR | 1 |
| 8349 | 8349 | E88 | 128I ML | N52K | HECK | MECH | 30.00 | CABRIO | 172 | LL | 2 | USA | 1 |
| 8350 | 8350 | E88 | 128I ML | N51 | HECK | MECH | 30.00 | CABRIO | 172 | LL | 2 | USA | 1 |
| 8351 | 8351 | F01 | 760I | N74 | HECK | AUT | 60.00 | LIM | 400 | LL | 4 | USA | 7 |
| 8352 | 8352 | E71 | X6 3.0SI | N54 | ALLR | AUT | 30.00 | SC | 225 | LL | 5 | USA | 6 |
| 8353 | 8353 | E71 | X6 3.0SD | M57Y | ALLR | AUT | 30.00 | SC | 210 | RL | 5 | EUR | 6 |
| 8354 | 8354 | E71 | X6 3.0SD | M57Y | ALLR | AUT | 30.00 | SC | 210 | LL | 5 | EUR | 6 |
| 8355 | 8355 | E71 | X6 4.4SI | N63 | ALLR | AUT | 44.00 | SC | 300 | LL | 5 | EUR | 6 |
| 8360 | 8360 | F01 | 740I | N54 | HECK | AUT | 30.00 | LIM | 240 | LL | 4 | EUR | 7 |
| 8361 | 8361 | F01 | 740I | N54 | HECK | AUT | 30.00 | LIM | 240 | RL | 4 | EUR | 7 |
| 8362 | 8362 | F01 | 750I | N63 | HECK | AUT | 44.00 | LIM | 300 | LL | 4 | EUR | 7 |
| 8363 | 8363 | F01 | 750I | N63 | HECK | AUT | 44.00 | LIM | 300 | RL | 4 | EUR | 7 |
| 8364 | 8364 | F01 | 750I | N63 | HECK | AUT | 44.00 | LIM | 300 | LL | 4 | USA | 7 |
| 8365 | 8365 | F01 | 750XI | N63 | ALLR | AUT | 44.00 | LIM | 300 | LL | 4 | EUR | 7 |
| 8366 | 8366 | F01 | 750XI | N63 | ALLR | AUT | 44.00 | LIM | 300 | LL | 4 | USA | 7 |
| 8367 | 8367 | F01 | 730D OL | N57 | HECK | AUT | 30.00 | LIM | 180 | LL | 4 | EUR | 7 |
| 8368 | 8368 | F01 | 735D | N57S | HECK | AUT | 30.00 | LIM | 220 | LL | 4 | EUR | 7 |
| 8369 | 8369 | F01 | 760I | N74 | HECK | AUT | 60.00 | LIM | 400 | LL | 4 | EUR | 7 |
| 8370 | 8370 | F02 | 730LI | N52K | HECK | AUT | 30.00 | LIM | 200 | LL | 4 | EUR | 7 |
| 8371 | 8371 | F02 | 740LI | N54 | HECK | AUT | 30.00 | LIM | 240 | LL | 4 | EUR | 7 |
| 8372 | 8372 | F02 | 750LI | N63 | HECK | AUT | 44.00 | LIM | 300 | LL | 4 | EUR | 7 |
| 8373 | 8373 | F02 | 750LI | N63 | HECK | AUT | 44.00 | LIM | 300 | LL | 4 | USA | 7 |
| 8374 | 8374 | F02 | 750LXI | N63 | ALLR | AUT | 44.00 | LIM | 300 | LL | 4 | EUR | 7 |
| 8375 | 8375 | F02 | 750LXI | N63 | ALLR | AUT | 44.00 | LIM | 300 | LL | 4 | USA | 7 |
| 8376 | 8376 | F02 | 760LI | N74 | HECK | AUT | 60.00 | LIM | 400 | RL | 4 | EUR | 7 |
| 8377 | 8377 | F02 | 730LD | N57 | HECK | AUT | 30.00 | LIM | 180 | RL | 4 | EUR | 7 |
| 8378 | 8378 | F02 | 760LI | N74 | HECK | AUT | 60.00 | LIM | 400 | LL | 4 | EUR | 7 |
| 8380 | 8380 | E89 | Z4 2.5I | N52K | HECK | MECH | 25.00 | ROADST | 150 | LL | 2 | EUR | Z |
| 8381 | 8381 | E89 | Z4 2.5I | N52K | HECK | MECH | 25.00 | ROADST | 150 | RL | 2 | EUR | Z |
| 8382 | 8382 | E89 | Z4 3.0I | N52K | HECK | MECH | 30.00 | ROADST | 190 | LL | 2 | EUR | Z |
| 8383 | 8383 | E89 | Z4 3.0I | N52K | HECK | MECH | 30.00 | ROADST | 190 | RL | 2 | EUR | Z |
| 8384 | 8384 | E89 | Z4 3.0I | N52K | HECK | MECH | 30.00 | ROADST | 190 | LL | 2 | USA | Z |
| 8385 | 8385 | E89 | Z4 3.0SI | N54 | HECK | MECH | 30.00 | ROADST | 225 | LL | 2 | EUR | Z |
| 8386 | 8386 | E89 | Z4 3.0SI | N54 | HECK | MECH | 30.00 | ROADST | 225 | RL | 2 | EUR | Z |
| 8387 | 8387 | E89 | Z4 3.0SI | N54 | HECK | MECH | 30.00 | ROADST | 225 | LL | 2 | USA | Z |
| 9011 | EJ11 | E52 | Z8 | S62 | HECK | MECH | 50.00 | ROADST | 294 | LL | 2 | EUR | 8 |
| 9013 | EJ13 | E52 | Z8 | S62 | HECK | MECH | 50.00 | ROADST | 294 | LL | 2 | USA | 8 |
| AA52 | AA52 | E52 | Z8 | S62 | HECK | MECH | 50.00 | ROADST | 294 | LL | 2 | EUR | 8 |
| AA89 | AA89 | RR1 | R-ROYCE | N73 | HECK | AUT | 67.50 | LIM | 300 | LL | 4 | EUR | R |
| AA93 | AA93 | E65 | 730I | M54 | HECK | AUT | 30.00 | LIM | 170 | LL | 4 | EUR | 7 |
| AL11 | AL11 | E46 | 316I | M43/TU | HECK | MECH | 19.00 | LIM | 77 | LL | 4 | EUR | 3 |
| AL12 | AL12 | E46 | 316I | M43/TU | HECK | MECH | 19.00 | LIM | 77 | RL | 4 | EUR | 3 |
| AL18 | AL18 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | LIM | 87 | LL | 4 | VNM | 3 |
| AL31 | AL31 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | LIM | 87 | LL | 4 | EUR | 3 |
| AL32 | AL32 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | LIM | 87 | RL | 4 | EUR | 3 |
| AL34 | AL34 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | LIM | 87 | RL | 4 | MYS | 3 |
| AL35 | AL35 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | LIM | 87 | RL | 4 | THA | 3 |
| AL36 | AL36 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | LIM | 87 | LL | 4 | EGY | 3 |
| AL37 | AL37 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | LIM | 87 | RL | 4 | IDN | 3 |
| AL39 | AL39 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | LIM | 87 | LL | 4 | PHL | 3 |
| AL51 | AL51 | E46 | 316I | M43/TU | HECK | MECH | 16.00 | LIM | 75 | LL | 4 | EUR | 3 |
| AL55 | AL55 | E46 | 316I | M43/TU | HECK | MECH | 16.00 | LIM | 77 | LL | 4 | PHL | 3 |
| AL58 | AL58 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | LIM | 85 | LL | 4 | RUS | 3 |
| AL71 | AL71 | E46 | 320D | M47 | HECK | MECH | 20.00 | LIM | 100 | LL | 4 | EUR | 3 |
| AL72 | AL72 | E46 | 320D | M47 | HECK | MECH | 20.00 | LIM | 100 | RL | 4 | EUR | 3 |
| AL91 | AL91 | E46 | 330D | M57 | HECK | MECH | 30.00 | LIM | 135 | LL | 4 | EUR | 3 |
| AL92 | AL92 | E46 | 330D | M57 | HECK | MECH | 30.00 | LIM | 135 | RL | 4 | EUR | 3 |
| AM11 | AM11 | E46 | 320I | M52/TU | HECK | MECH | 20.00 | LIM | 110 | LL | 4 | EUR | 3 |
| AM12 | AM12 | E46 | 320I | M52/TU | HECK | MECH | 20.00 | LIM | 110 | RL | 4 | EUR | 3 |
| AM31 | AM31 | E46 | 323I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | LL | 4 | EUR | 3 |
| AM32 | AM32 | E46 | 323I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | RL | 4 | EUR | 3 |
| AM33 | AM33 | E46 | 323I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | LL | 4 | USA | 3 |
| AM35 | AM35 | E46 | 323I | M52/TU | HECK | MECH | 24.00 | LIM | 135 | RL | 4 | THA | 3 |
| AM36 | AM36 | E46 | 323I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | LL | 4 | VNM | 3 |
| AM37 | AM37 | E46 | 323I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | RL | 4 | IDN | 3 |
| AM38 | AM38 | E46 | 323I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | LL | 4 | MEX | 3 |
| AM39 | AM39 | E46 | 323I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | LL | 4 | PHL | 3 |
| AM51 | AM51 | E46 | 328I | M52/TU | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | EUR | 3 |
| AM52 | AM52 | E46 | 328I | M52/TU | HECK | MECH | 28.00 | LIM | 142 | RL | 4 | EUR | 3 |
| AM53 | AM53 | E46 | 328I | M52/TU | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | USA | 3 |
| AM54 | AM54 | E46 | 328I | M52/TU | HECK | MECH | 28.00 | LIM | 142 | RL | 4 | MYS | 3 |
| AM57 | AM57 | E46 | 328I | M52/TU | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | MEX | 3 |
| AN11 | AN11 | E46 | 320I | M52/TU | HECK | MECH | 20.00 | LIM | 110 | LL | 4 | EUR | 3 |
| AN12 | AN12 | E46 | 320I | M52/TU | HECK | MECH | 20.00 | LIM | 110 | RL | 4 | EUR | 3 |
| AN15 | AN15 | E46 | 320I | M54 | HECK | MECH | 22.00 | LIM | 125 | LL | 4 | EUR | 3 |
| AN16 | AN16 | E46 | 320I | M54 | HECK | MECH | 22.00 | LIM | 125 | RL | 4 | EUR | 3 |
| AN31 | AN31 | E46 | 323I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | LL | 4 | EUR | 3 |
| AN32 | AN32 | E46 | 323I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | RL | 4 | EUR | 3 |
| AN33 | AN33 | E46 | 323I | M52/TU | HECK | MECH | 25.00 | LIM | 125 | LL | 4 | USA | 3 |
| AN35 | AN35 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | EUR | 3 |
| AN36 | AN36 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | RL | 4 | EUR | 3 |
| AN37 | AN37 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | USA | 3 |
| AN51 | AN51 | E46 | 328I | M52/TU | HECK | MECH | 28.00 | LIM | 142 | LL | 4 | EUR | 3 |
| AN52 | AN52 | E46 | 328I | M52/TU | HECK | MECH | 28.00 | LIM | 142 | RL | 4 | EUR | 3 |
| AN55 | AN55 | E46 | 330I | M54 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | EUR | 3 |
| AN56 | AN56 | E46 | 330I | M54 | HECK | MECH | 30.00 | LIM | 170 | RL | 4 | EUR | 3 |
| AN72 | AN72 | E46 | 316I | M43/TU | HECK | MECH | 19.00 | LIM | 77 | RL | 4 | EUR | 3 |
| AN91 | AN91 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | LIM | 87 | LL | 4 | EUR | 3 |
| AN92 | AN92 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | LIM | 87 | RL | 4 | EUR | 3 |
| AP31 | AP31 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | TOUR | 87 | LL | 5 | EUR | 3 |
| AP32 | AP32 | E46 | 318I | M43/TU | HECK | MECH | 19.00 | TOUR | 87 | RL | 5 | EUR | 3 |
| AP71 | AP71 | E46 | 320D | M47/TU | HECK | MECH | 20.00 | TOUR | 110 | LL | 5 | EUR | 3 |
| AP72 | AP72 | E46 | 320D | M47/TU | HECK | MECH | 20.00 | TOUR | 110 | RL | 5 | EUR | 3 |
| AP91 | AP91 | E46 | 330D | M57 | HECK | MECH | 30.00 | TOUR | 135 | LL | 5 | EUR | 3 |
| AP92 | AP92 | E46 | 330D | M57 | HECK | MECH | 30.00 | TOUR | 135 | RL | 5 | EUR | 3 |
| AR11 | AR11 | E46 | 320I | M52/TU | HECK | MECH | 20.00 | TOUR | 110 | LL | 5 | EUR | 3 |
| AR33 | AR33 | E46 | 323I | M52/TU | HECK | MECH | 25.00 | TOUR | 125 | LL | 5 | USA | 3 |
| AR51 | AR51 | E46 | 328I | M52/TU | HECK | MECH | 28.00 | TOUR | 142 | LL | 5 | EUR | 3 |
| AR52 | AR52 | E46 | 328I | M52/TU | HECK | MECH | 28.00 | TOUR | 142 | RL | 5 | EUR | 3 |
| AS71 | AS71 | E46 | 320D | M47/TU | HECK | MECH | 20.00 | LIM | 110 | LL | 4 | EUR | 3 |
| AS72 | AS72 | E46 | 320D | M47/TU | HECK | MECH | 20.00 | LIM | 110 | RL | 4 | EUR | 3 |
| AT11 | AT11 | E46 | 316TI | N40 | HECK | MECH | 16.00 | COMP | 85 | LL | 3 | EUR | 3 |
| AT31 | AT31 | E46 | 325TI | M54 | HECK | MECH | 25.00 | COMP | 141 | LL | 3 | EUR | 3 |
| AT32 | AT32 | E46 | 325TI | M54 | HECK | MECH | 25.00 | COMP | 141 | RL | 3 | EUR | 3 |
| AT51 | AT51 | E46 | 316TI | N42 | HECK | MECH | 18.00 | COMP | 85 | LL | 3 | EUR | 3 |
| AT52 | AT52 | E46 | 316TI | N42 | HECK | MECH | 18.00 | COMP | 85 | RL | 3 | EUR | 3 |
| AT71 | AT71 | E46 | 320TD | M47/TU | HECK | MECH | 20.00 | COMP | 110 | LL | 3 | EUR | 3 |
| AT72 | AT72 | E46 | 320TD | M47/TU | HECK | MECH | 20.00 | COMP | 110 | RL | 3 | EUR | 3 |
| AT91 | AT91 | E46 | 318TD | M47/TU | HECK | MECH | 20.00 | COMP | 85 | LL | 3 | EUR | 3 |
| AU51 | AU51 | E46 | 318TI | N42 | HECK | MECH | 20.00 | COMP | 105 | LL | 3 | EUR | 3 |
| AU52 | AU52 | E46 | 318TI | N42 | HECK | MECH | 20.00 | COMP | 105 | RL | 3 | EUR | 3 |
| AV11 | AV11 | E46 | 320I | M54 | HECK | MECH | 22.00 | LIM | 125 | LL | 4 | EUR | 3 |
| AV12 | AV12 | E46 | 320I | M54 | HECK | MECH | 22.00 | LIM | 125 | RL | 4 | EUR | 3 |
| AV13 | AV13 | E46 | 320I | M54 | HECK | MECH | 22.00 | LIM | 125 | LL | 4 | USA | 3 |
| AV18 | AV18 | E46 | 320I | M54 | HECK | MECH | 22.00 | LIM | 125 | LL | 4 | RUS | 3 |
| AV31 | AV31 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | EUR | 3 |
| AV32 | AV32 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | RL | 4 | EUR | 3 |
| AV33 | AV33 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | USA | 3 |
| AV35 | AV35 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | RL | 4 | MYS | 3 |
| AV36 | AV36 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | RL | 4 | IDN | 3 |
| AV37 | AV37 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | PHL | 3 |
| AV38 | AV38 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | VNM | 3 |
| AV39 | AV39 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | MEX | 3 |
| AV51 | AV51 | E46 | 330I | M54 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | EUR | 3 |
| AV52 | AV52 | E46 | 330I | M54 | HECK | MECH | 30.00 | LIM | 170 | RL | 4 | EUR | 3 |
| AV53 | AV53 | E46 | 330I | M54 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | USA | 3 |
| AV59 | AV59 | E46 | 330I | M54 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | MEX | 3 |
| AV72 | AV72 | E46 | 320D | M47 | HECK | MECH | 20.00 | LIM | 100 | RL | 4 | EUR | 3 |
| AW11 | AW11 | E46 | 320I | M54 | HECK | MECH | 22.00 | TOUR | 125 | LL | 5 | EUR | 3 |
| AW12 | AW12 | E46 | 320I | M54 | HECK | MECH | 22.00 | TOUR | 125 | RL | 5 | EUR | 3 |
| AW31 | AW31 | E46 | 325I | M54 | HECK | MECH | 25.00 | TOUR | 141 | LL | 5 | EUR | 3 |
| AW32 | AW32 | E46 | 325I | M54 | HECK | MECH | 25.00 | TOUR | 141 | RL | 5 | EUR | 3 |
| AW33 | AW33 | E46 | 325I | M54 | HECK | MECH | 25.00 | TOUR | 141 | LL | 5 | USA | 3 |
| AW51 | AW51 | E46 | 330I | M54 | HECK | MECH | 30.00 | TOUR | 170 | LL | 5 | EUR | 3 |
| AW52 | AW52 | E46 | 330I | M54 | HECK | MECH | 30.00 | TOUR | 170 | RL | 5 | EUR | 3 |
| AX13 | AX13 | E46 | 325I | M56 | HECK | MECH | 25.00 | TOUR | 132 | LL | 5 | USA | 3 |
| AX31 | AX31 | E46 | 316I | N42 | HECK | MECH | 18.00 | TOUR | 85 | LL | 5 | EUR | 3 |
| AX32 | AX32 | E46 | 316I | N42 | HECK | MECH | 18.00 | TOUR | 85 | RL | 5 | EUR | 3 |
| AX51 | AX51 | E46 | 318I | N42 | HECK | MECH | 20.00 | TOUR | 105 | LL | 5 | EUR | 3 |
| AX52 | AX52 | E46 | 318I | N42 | HECK | MECH | 20.00 | TOUR | 105 | RL | 5 | EUR | 3 |
| AX71 | AX71 | E46 | 320D | M47 | HECK | MECH | 20.00 | TOUR | 100 | LL | 5 | EUR | 3 |
| AX72 | AX72 | E46 | 320D | M47 | HECK | MECH | 20.00 | TOUR | 100 | RL | 5 | EUR | 3 |
| AY11 | AY11 | E46 | 316I | N40 | HECK | MECH | 16.00 | LIM | 85 | LL | 4 | EUR | 3 |
| AY15 | AY15 | E46 | 316I | N40 | HECK | MECH | 16.00 | LIM | 85 | LL | 4 | PHL | 3 |
| AY31 | AY31 | E46 | 316I | N42 | HECK | MECH | 18.00 | LIM | 85 | LL | 4 | EUR | 3 |
| AY32 | AY32 | E46 | 316I | N42 | HECK | MECH | 18.00 | LIM | 85 | RL | 4 | EUR | 3 |
| AY71 | AY71 | E46 | 318I | N42 | HECK | MECH | 20.00 | LIM | 105 | LL | 4 | EUR | 3 |
| AY72 | AY72 | E46 | 318I | N42 | HECK | MECH | 20.00 | LIM | 105 | RL | 4 | EUR | 3 |
| AY74 | AY74 | E46 | 318I | N42 | HECK | MECH | 20.00 | LIM | 105 | RL | 4 | MYS | 3 |
| AY75 | AY75 | E46 | 318I | N42 | HECK | MECH | 20.00 | LIM | 105 | RL | 4 | THA | 3 |
| AY76 | AY76 | E46 | 318I | N42 | HECK | MECH | 20.00 | LIM | 105 | LL | 4 | EGY | 3 |
| AY77 | AY77 | E46 | 318I | N42 | HECK | MECH | 20.00 | LIM | 105 | RL | 4 | IDN | 3 |
| AY78 | AY78 | E46 | 318I | N42 | HECK | MECH | 20.00 | LIM | 105 | LL | 4 | VNM | 3 |
| AY79 | AY79 | E46 | 318I | N42 | HECK | MECH | 20.00 | LIM | 105 | LL | 4 | PHL | 3 |
| AY91 | AY91 | E46 | 320I | M52/TU | HECK | MECH | 20.00 | LIM | 154 | LL | 4 | EUR | 3 |
| AY96 | AY96 | E46 | 318I | N42 | HECK | MECH | 20.00 | LIM | 105 | LL | 4 | EGY | 3 |
| AY97 | AY97 | E46 | 318I | N42 | HECK | MECH | 20.00 | LIM | 105 | LL | 4 | CHN | 3 |
| AY98 | AY98 | E46 | 318I | N42 | HECK | MECH | 20.00 | LIM | 105 | LL | 4 | RUS | 3 |
| AZ12 | AZ12 | E46 | 320D | M47/TU | HECK | MECH | 20.00 | LIM | 110 | RL | 4 | EUR | 3 |
| AZ33 | AZ33 | E46 | 325I | M56 | HECK | MECH | 25.00 | LIM | 132 | LL | 4 | USA | 3 |
| AZ71 | AZ71 | E46 | 318I | N42 | HECK | MECH | 20.00 | LIM | 105 | LL | 4 | EUR | 3 |
| AZ72 | AZ72 | E46 | 318I | N42 | HECK | MECH | 20.00 | LIM | 105 | RL | 4 | EUR | 3 |
| AZ96 | AZ96 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | EGY | 3 |
| B011 | RA11 | R50 | MINI ONE | W10 | FRONT | MECH | 14.00 | COUPE | 55 | LL | 3 | EUR | M |
| B012 | RA12 | R50 | MINI ONE | W10 | FRONT | MECH | 14.00 | COUPE | 55 | RL | 3 | EUR | M |
| B031 | RA31 | R50 | MINI ONE | W10 | FRONT | MECH | 16.00 | COUPE | 66 | LL | 3 | EUR | M |
| B032 | RA32 | R50 | MINI ONE | W10 | FRONT | MECH | 16.00 | COUPE | 66 | RL | 3 | EUR | M |
| B111 | RB11 | R50 | MINI ONE | W17 | FRONT | MECH | 14.00 | COUPE | 55 | LL | 3 | EUR | M |
| B112 | RB12 | R50 | MINI ONE | W17 | FRONT | MECH | 14.00 | COUPE | 55 | RL | 3 | EUR | M |
| B131 | RD31 | R52 | MINI ONE | W10 | FRONT | MECH | 16.00 | CABRIO | 66 | LL | 2 | EUR | M |
| B132 | RD32 | R52 | MINI ONE | W10 | FRONT | MECH | 16.00 | CABRIO | 66 | RL | 2 | EUR | M |
| B231 | RC31 | R50 | COOPER | W10 | FRONT | MECH | 16.00 | COUPE | 85 | LL | 3 | EUR | M |
| B232 | RC32 | R50 | COOPER | W10 | FRONT | MECH | 16.00 | COUPE | 85 | RL | 3 | EUR | M |
| B233 | RC33 | R50 | COOPER | W10 | FRONT | MECH | 16.00 | COUPE | 85 | LL | 3 | USA | M |
| B331 | RF31 | R52 | COOPER | W10 | FRONT | MECH | 16.00 | CABRIO | 85 | LL | 2 | EUR | M |
| B332 | RF32 | R52 | COOPER | W10 | FRONT | MECH | 16.00 | CABRIO | 85 | RL | 2 | EUR | M |
| B333 | RF33 | R52 | COOPER | W10 | FRONT | MECH | 16.00 | CABRIO | 85 | LL | 2 | USA | M |
| B431 | RE31 | R53 | COOPER S | W11 | FRONT | MECH | 16.00 | COUPE | 125 | LL | 3 | EUR | M |
| B432 | RE32 | R53 | COOPER S | W11 | FRONT | MECH | 16.00 | COUPE | 125 | RL | 3 | EUR | M |
| B433 | RE33 | R53 | COOPER S | W11 | FRONT | MECH | 16.00 | COUPE | 125 | LL | 3 | USA | M |
| B491 | RE91 | R53 | COOPER S | W11 | FRONT | MECH | 16.00 | COUPE | 155 | LL | 3 | EUR | M |
| B492 | RE92 | R53 | COOPER S | W11 | FRONT | MECH | 16.00 | COUPE | 155 | RL | 3 | EUR | M |
| B493 | RE93 | R53 | COOPER S | W11 | FRONT | MECH | 16.00 | COUPE | 155 | LL | 3 | USA | M |
| B531 | RH31 | R52 | COOPER S | W11 | FRONT | MECH | 16.00 | CABRIO | 125 | LL | 2 | EUR | M |
| B532 | RH32 | R52 | COOPER S | W11 | FRONT | MECH | 16.00 | CABRIO | 125 | RL | 2 | EUR | M |
| B533 | RH33 | R52 | COOPER S | W11 | FRONT | MECH | 16.00 | CABRIO | 125 | LL | 2 | USA | M |
| BD11 | BD11 | E46 | 320CI | M54 | HECK | MECH | 22.00 | COUPE | 125 | LL | 2 | EUR | 3 |
| BD12 | BD12 | E46 | 320CI | M54 | HECK | MECH | 22.00 | COUPE | 125 | RL | 2 | EUR | 3 |
| BD31 | BD31 | E46 | 325CI | M54 | HECK | MECH | 25.00 | COUPE | 141 | LL | 2 | EUR | 3 |
| BD32 | BD32 | E46 | 325CI | M54 | HECK | MECH | 25.00 | COUPE | 141 | RL | 2 | EUR | 3 |
| BD33 | BD33 | E46 | 325CI | M54 | HECK | MECH | 25.00 | COUPE | 141 | LL | 2 | USA | 3 |
| BD51 | BD51 | E46 | 330CI | M54 | HECK | MECH | 30.00 | COUPE | 170 | LL | 2 | EUR | 3 |
| BD52 | BD52 | E46 | 330CI | M54 | HECK | MECH | 30.00 | COUPE | 170 | RL | 2 | EUR | 3 |
| BD53 | BD53 | E46 | 330CI | M54 | HECK | MECH | 30.00 | COUPE | 170 | LL | 2 | USA | 3 |
| BD71 | BD71 | E46 | 316CI | N40 | HECK | MECH | 16.00 | COUPE | 85 | LL | 2 | EUR | 3 |
| BD91 | BD91 | E46 | 318CI | N42 | HECK | MECH | 20.00 | COUPE | 105 | LL | 2 | EUR | 3 |
| BD92 | BD92 | E46 | 318CI | N42 | HECK | MECH | 20.00 | COUPE | 105 | RL | 2 | EUR | 3 |
| BL31 | BL31 | E46 | 318CI | M43/TU | HECK | MECH | 19.00 | COUPE | 87 | LL | 2 | EUR | 3 |
| BL32 | BL32 | E46 | 318CI | M43/TU | HECK | MECH | 19.00 | COUPE | 87 | RL | 2 | EUR | 3 |
| BL51 | BL51 | E46 | 316CI | M43/TU | HECK | MECH | 16.00 | COUPE | 77 | LL | 2 | EUR | 3 |
| BL91 | BL91 | E46 | M3 | S54 | HECK | MECH | 32.00 | COUPE | 252 | LL | 2 | EUR | 3 |
| BL92 | BL92 | E46 | M3 | S54 | HECK | MECH | 32.00 | COUPE | 252 | RL | 2 | EUR | 3 |
| BL93 | BL93 | E46 | M3 | S54 | HECK | MECH | 32.00 | COUPE | 252 | LL | 2 | USA | 3 |
| BL95 | BL95 | E46 | M3 CSL | S54 | HECK | MECH | 32.00 | COUPE | 261 | LL | 2 | EUR | 3 |
| BL96 | BL96 | E46 | M3 CSL | S54 | HECK | MECH | 32.00 | COUPE | 261 | RL | 2 | EUR | 3 |
| BM11 | BM11 | E46 | 320CI | M52/TU | HECK | MECH | 20.00 | COUPE | 110 | LL | 2 | EUR | 3 |
| BM31 | BM31 | E46 | 323CI | M52/TU | HECK | MECH | 25.00 | COUPE | 125 | LL | 2 | EUR | 3 |
| BM32 | BM32 | E46 | 323CI | M52/TU | HECK | MECH | 25.00 | COUPE | 125 | RL | 2 | EUR | 3 |
| BM33 | BM33 | E46 | 323CI | M52/TU | HECK | MECH | 25.00 | COUPE | 125 | LL | 2 | USA | 3 |
| BM51 | BM51 | E46 | 328CI | M52/TU | HECK | MECH | 28.00 | COUPE | 142 | LL | 2 | EUR | 3 |
| BM52 | BM52 | E46 | 328CI | M52/TU | HECK | MECH | 28.00 | COUPE | 142 | RL | 2 | EUR | 3 |
| BM53 | BM53 | E46 | 328CI | M52/TU | HECK | MECH | 28.00 | COUPE | 142 | LL | 2 | USA | 3 |
| BM71 | BM71 | E46 | 316CI | N40 | HECK | MECH | 16.00 | COUPE | 85 | LL | 2 | EUR | 3 |
| BN11 | BN11 | E46 | 320CI | M54 | HECK | MECH | 22.00 | COUPE | 125 | LL | 2 | EUR | 3 |
| BN12 | BN12 | E46 | 320CI | M54 | HECK | MECH | 22.00 | COUPE | 125 | RL | 2 | EUR | 3 |
| BN31 | BN31 | E46 | 325CI | M54 | HECK | MECH | 25.00 | COUPE | 141 | LL | 2 | EUR | 3 |
| BN32 | BN32 | E46 | 325CI | M54 | HECK | MECH | 25.00 | COUPE | 141 | RL | 2 | EUR | 3 |
| BN33 | BN33 | E46 | 325CI | M54 | HECK | MECH | 25.00 | COUPE | 141 | LL | 2 | USA | 3 |
| BN51 | BN51 | E46 | 330CI | M54 | HECK | MECH | 30.00 | COUPE | 170 | LL | 2 | EUR | 3 |
| BN52 | BN52 | E46 | 330CI | M54 | HECK | MECH | 30.00 | COUPE | 170 | RL | 2 | EUR | 3 |
| BN53 | BN53 | E46 | 330CI | M54 | HECK | MECH | 30.00 | COUPE | 170 | LL | 2 | USA | 3 |
| BN73 | BN73 | E46 | 325CI | M56 | HECK | MECH | 25.00 | COUPE | 132 | LL | 2 | USA | 3 |
| BP71 | BP71 | E46 | 318CI | N42 | HECK | MECH | 20.00 | CABRIO | 105 | LL | 2 | EUR | 3 |
| BP72 | BP72 | E46 | 318CI | N42 | HECK | MECH | 20.00 | CABRIO | 105 | RL | 2 | EUR | 3 |
| BR31 | BR31 | E46 | 323CI | M52/TU | HECK | MECH | 25.00 | CABRIO | 125 | LL | 2 | EUR | 3 |
| BR32 | BR32 | E46 | 323CI | M52/TU | HECK | MECH | 25.00 | CABRIO | 125 | RL | 2 | EUR | 3 |
| BR33 | BR33 | E46 | 323CI | M52/TU | HECK | MECH | 25.00 | CABRIO | 125 | LL | 2 | USA | 3 |
| BR91 | BR91 | E46 | M3 | S54 | HECK | MECH | 32.00 | CABRIO | 252 | LL | 2 | EUR | 3 |
| BR92 | BR92 | E46 | M3 | S54 | HECK | MECH | 32.00 | CABRIO | 252 | RL | 2 | EUR | 3 |
| BR93 | BR93 | E46 | M3 | S54 | HECK | MECH | 32.00 | CABRIO | 252 | LL | 2 | USA | 3 |
| BS11 | BS11 | E46 | 320CI | M54 | HECK | MECH | 22.00 | CABRIO | 125 | LL | 2 | EUR | 3 |
| BS12 | BS12 | E46 | 320CI | M54 | HECK | MECH | 22.00 | CABRIO | 125 | RL | 2 | EUR | 3 |
| BS31 | BS31 | E46 | 325CI | M54 | HECK | MECH | 25.00 | CABRIO | 141 | LL | 2 | EUR | 3 |
| BS32 | BS32 | E46 | 325CI | M54 | HECK | MECH | 25.00 | CABRIO | 141 | RL | 2 | EUR | 3 |
| BS33 | BS33 | E46 | 325CI | M54 | HECK | MECH | 25.00 | CABRIO | 141 | LL | 2 | USA | 3 |
| BS51 | BS51 | E46 | 330CI | M54 | HECK | MECH | 30.00 | CABRIO | 170 | LL | 2 | EUR | 3 |
| BS52 | BS52 | E46 | 330CI | M54 | HECK | MECH | 30.00 | CABRIO | 170 | RL | 2 | EUR | 3 |
| BS53 | BS53 | E46 | 330CI | M54 | HECK | MECH | 30.00 | CABRIO | 170 | LL | 2 | USA | 3 |
| BS71 | BS71 | E46 | 320CD | M47/TU | HECK | MECH | 20.00 | CABRIO | 110 | LL | 2 | EUR | 3 |
| BS72 | BS72 | E46 | 320CD | M47/TU | HECK | MECH | 20.00 | CABRIO | 110 | RL | 2 | EUR | 3 |
| BT11 | BT11 | E85 | Z4 2.2I | M54 | HECK | MECH | 22.00 | ROADST | 125 | LL | 2 | EUR | Z |
| BT12 | BT12 | E85 | Z4 2.2I | M54 | HECK | MECH | 22.00 | ROADST | 125 | RL | 2 | EUR | Z |
| BT31 | BT31 | E85 | Z4 2.5I | M54 | HECK | MECH | 25.00 | ROADST | 141 | LL | 2 | EUR | Z |
| BT32 | BT32 | E85 | Z4 2.5I | M54 | HECK | MECH | 25.00 | ROADST | 141 | RL | 2 | EUR | Z |
| BT33 | BT33 | E85 | Z4 2.5I | M54 | HECK | MECH | 25.00 | ROADST | 141 | LL | 2 | USA | Z |
| BT51 | BT51 | E85 | Z4 3.0I | M54 | HECK | MECH | 30.00 | ROADST | 170 | LL | 2 | EUR | Z |
| BT52 | BT52 | E85 | Z4 3.0I | M54 | HECK | MECH | 30.00 | ROADST | 170 | RL | 2 | EUR | Z |
| BT53 | BT53 | E85 | Z4 3.0I | M54 | HECK | MECH | 30.00 | ROADST | 170 | LL | 2 | USA | Z |
| BT91 | BT91 | E85 | M-ROADST | S54 | HECK | MECH | 32.00 | ROADST | 252 | LL | 2 | EUR | Z |
| BT92 | BT92 | E85 | M-ROADST | S54 | HECK | MECH | 32.00 | ROADST | 252 | RL | 2 | EUR | Z |
| BT93 | BT93 | E85 | M-ROADST | S54 | HECK | MECH | 32.00 | ROADST | 246 | LL | 2 | USA | Z |
| BU11 | BU11 | E85 | Z4 2.5I | N52 | HECK | MECH | 25.00 | ROADST | 130 | LL | 2 | EUR | Z |
| BU12 | BU12 | E85 | Z4 2.5I | N52 | HECK | MECH | 25.00 | ROADST | 130 | RL | 2 | EUR | Z |
| BU31 | BU31 | E85 | Z4 2.5SI | N52 | HECK | MECH | 25.00 | ROADST | 160 | LL | 2 | EUR | Z |
| BU32 | BU32 | E85 | Z4 2.5SI | N52 | HECK | MECH | 25.00 | ROADST | 160 | RL | 2 | EUR | Z |
| BU33 | BU33 | E85 | Z4 3.0I | N52 | HECK | MECH | 30.00 | ROADST | 160 | LL | 2 | USA | Z |
| BU51 | BU51 | E85 | Z4 3.0SI | N52 | HECK | MECH | 30.00 | ROADST | 190 | LL | 2 | EUR | Z |
| BU51 | BU51 | E85 | Z4 3.0SI | N52 | HECK | MECH | 30.00 | ROADST | 195 | LL | 2 | EUR | Z |
| BU52 | BU52 | E85 | Z4 3.0SI | N52 | HECK | MECH | 30.00 | ROADST | 190 | RL | 2 | EUR | Z |
| BU52 | BU52 | E85 | Z4 3.0SI | N52 | HECK | MECH | 30.00 | ROADST | 195 | RL | 2 | EUR | Z |
| BU53 | BU53 | E85 | Z4 3.0SI | N52 | HECK | MECH | 30.00 | ROADST | 190 | LL | 2 | USA | Z |
| BV13 | BV13 | E46 | 325CI | M56 | HECK | MECH | 25.00 | COUPE | 132 | LL | 2 | USA | 3 |
| BV51 | BV51 | E46 | 320CD | M47/TU | HECK | MECH | 20.00 | COUPE | 110 | LL | 2 | EUR | 3 |
| BV52 | BV52 | E46 | 320CD | M47/TU | HECK | MECH | 20.00 | COUPE | 110 | RL | 2 | EUR | 3 |
| BV71 | BV71 | E46 | 318CI | N42 | HECK | MECH | 20.00 | COUPE | 105 | LL | 2 | EUR | 3 |
| BV72 | BV72 | E46 | 318CI | N42 | HECK | MECH | 20.00 | COUPE | 105 | RL | 2 | EUR | 3 |
| BV91 | BV91 | E46 | 330CD | M57/TU | HECK | MECH | 30.00 | COUPE | 150 | LL | 2 | EUR | 3 |
| BV92 | BV92 | E46 | 330CD | M57/TU | HECK | MECH | 30.00 | COUPE | 150 | RL | 2 | EUR | 3 |
| BW11 | BW11 | E46 | 320CI | M54 | HECK | MECH | 22.00 | CABRIO | 125 | LL | 2 | EUR | 3 |
| BW12 | BW12 | E46 | 320CI | M54 | HECK | MECH | 22.00 | CABRIO | 125 | RL | 2 | EUR | 3 |
| BW31 | BW31 | E46 | 325CI | M54 | HECK | MECH | 25.00 | CABRIO | 141 | LL | 2 | EUR | 3 |
| BW32 | BW32 | E46 | 325CI | M54 | HECK | MECH | 25.00 | CABRIO | 141 | RL | 2 | EUR | 3 |
| BW33 | BW33 | E46 | 325CI | M54 | HECK | MECH | 25.00 | CABRIO | 141 | LL | 2 | USA | 3 |
| BW51 | BW51 | E46 | 330CI | M54 | HECK | MECH | 30.00 | CABRIO | 170 | LL | 2 | EUR | 3 |
| BW52 | BW52 | E46 | 330CI | M54 | HECK | MECH | 30.00 | CABRIO | 170 | RL | 2 | EUR | 3 |
| BW53 | BW53 | E46 | 330CI | M54 | HECK | MECH | 30.00 | CABRIO | 170 | LL | 2 | USA | 3 |
| BW71 | BW71 | E46 | 318CI | N42 | HECK | MECH | 20.00 | CABRIO | 105 | LL | 2 | EUR | 3 |
| BW72 | BW72 | E46 | 318CI | N42 | HECK | MECH | 20.00 | CABRIO | 105 | RL | 2 | EUR | 3 |
| BW91 | BW91 | E46 | 330CD | M57/TU | HECK | MECH | 30.00 | CABRIO | 150 | LL | 2 | EUR | 3 |
| BW92 | BW92 | E46 | 330CD | M57/TU | HECK | MECH | 30.00 | CABRIO | 150 | RL | 2 | EUR | 3 |
| BX71 | BX71 | E46 | 316CI | N45 | HECK | MECH | 16.00 | COUPE | 85 | LL | 2 | EUR | 3 |
| BX91 | BX91 | E46 | 318CI | N46 | HECK | MECH | 20.00 | COUPE | 110 | LL | 2 | EUR | 3 |
| BX92 | BX92 | E46 | 318CI | N46 | HECK | MECH | 20.00 | COUPE | 110 | RL | 2 | EUR | 3 |
| BY71 | BY71 | E46 | 318CI | N46 | HECK | MECH | 20.00 | CABRIO | 110 | LL | 2 | EUR | 3 |
| BY72 | BY72 | E46 | 318CI | N46 | HECK | MECH | 20.00 | CABRIO | 110 | RL | 2 | EUR | 3 |
| BZ11 | BZ11 | E85 | Z4 2.0I | N46 | HECK | MECH | 20.00 | ROADST | 110 | LL | 2 | EUR | Z |
| BZ12 | BZ12 | E85 | Z4 2.0I | N46 | HECK | MECH | 20.00 | ROADST | 110 | RL | 2 | EUR | Z |
| DU51 | DU51 | E86 | Z4 3.0SI | N52 | HECK | MECH | 30.00 | RCOUPE | 195 | LL | 2 | EUR | Z |
| DU52 | DU52 | E86 | Z4 3.0SI | N52 | HECK | MECH | 30.00 | RCOUPE | 195 | RL | 2 | EUR | Z |
| DU53 | DU53 | E86 | Z4 3.0SI | N52 | HECK | MECH | 30.00 | RCOUPE | 195 | LL | 2 | USA | Z |
| DU91 | DU91 | E86 | M-COUPE | S54 | HECK | MECH | 32.00 | RCOUPE | 252 | LL | 2 | EUR | Z |
| DU92 | DU92 | E86 | M-COUPE | S54 | HECK | MECH | 32.00 | RCOUPE | 252 | RL | 2 | EUR | Z |
| DU93 | DU93 | E86 | M-COUPE | S54 | HECK | MECH | 32.00 | RCOUPE | 252 | LL | 2 | USA | Z |
| EA11 | EA11 | E63 | 630I | N52K | HECK | MECH | 30.00 | COUPE | 200 | LL | 2 | EUR | 6 |
| EA12 | EA12 | E63 | 630I | N52K | HECK | MECH | 30.00 | COUPE | 200 | RL | 2 | EUR | 6 |
| EA31 | EA31 | E63 | 630I | N53 | HECK | MECH | 30.00 | COUPE | 200 | LL | 2 | EUR | 6 |
| EA32 | EA32 | E63 | 630I | N53 | HECK | MECH | 30.00 | COUPE | 200 | RL | 2 | EUR | 6 |
| EA51 | EA51 | E63 | 650I | N62/TU | HECK | MECH | 48.00 | COUPE | 270 | LL | 2 | EUR | 6 |
| EA52 | EA52 | E63 | 650I | N62/TU | HECK | MECH | 48.00 | COUPE | 270 | RL | 2 | EUR | 6 |
| EA53 | EA53 | E63 | 650I | N62/TU | HECK | MECH | 48.00 | COUPE | 270 | LL | 2 | USA | 6 |
| EA71 | EA71 | E63 | 635D | M57Y | HECK | MECH | 30.00 | COUPE | 210 | LL | 2 | EUR | 6 |
| EA72 | EA72 | E63 | 635D | M57Y | HECK | MECH | 30.00 | COUPE | 210 | RL | 2 | EUR | 6 |
| EB11 | EB11 | E64 | 630I | N52K | HECK | MECH | 30.00 | CABRIO | 200 | LL | 2 | EUR | 6 |
| EB12 | EB12 | E64 | 630I | N52K | HECK | MECH | 30.00 | CABRIO | 200 | RL | 2 | EUR | 6 |
| EB31 | EB31 | E64 | 630I | N53 | HECK | MECH | 30.00 | CABRIO | 190 | LL | 2 | EUR | 6 |
| EB31 | EB31 | E64 | 630I | N53 | HECK | MECH | 30.00 | CABRIO | 200 | LL | 2 | EUR | 6 |
| EB32 | EB32 | E64 | 630I | N53 | HECK | MECH | 30.00 | CABRIO | 190 | RL | 2 | EUR | 6 |
| EB32 | EB32 | E64 | 630I | N53 | HECK | MECH | 30.00 | CABRIO | 200 | RL | 2 | EUR | 6 |
| EB51 | EB51 | E64 | 650I | N62/TU | HECK | MECH | 48.00 | CABRIO | 270 | LL | 2 | EUR | 6 |
| EB52 | EB52 | E64 | 650I | N62/TU | HECK | MECH | 48.00 | CABRIO | 270 | RL | 2 | EUR | 6 |
| EB53 | EB53 | E64 | 650I | N62/TU | HECK | MECH | 48.00 | CABRIO | 270 | LL | 2 | USA | 6 |
| EB71 | EB71 | E64 | 635D | M57Y | HECK | MECH | 30.00 | CABRIO | 210 | LL | 2 | EUR | 6 |
| EB72 | EB72 | E64 | 635D | M57Y | HECK | MECH | 30.00 | CABRIO | 210 | RL | 2 | EUR | 6 |
| ED71 | ED71 | E46 | 330XD | M57/TU | ALLR | MECH | 30.00 | LIM | 150 | LL | 4 | EUR | 3 |
| ED91 | ED91 | E46 | 330D | M57/TU | HECK | MECH | 30.00 | LIM | 150 | LL | 4 | EUR | 3 |
| ED92 | ED92 | E46 | 330D | M57/TU | HECK | MECH | 30.00 | LIM | 150 | RL | 4 | EUR | 3 |
| EH11 | EH11 | E63 | 650I | N62/TU | HECK | MECH | 48.00 | COUPE | 270 | LL | 2 | EUR | 6 |
| EH12 | EH12 | E63 | 650I | N62/TU | HECK | MECH | 48.00 | COUPE | 270 | RL | 2 | EUR | 6 |
| EH13 | EH13 | E63 | 650I | N62/TU | HECK | MECH | 48.00 | COUPE | 270 | LL | 2 | USA | 6 |
| EH31 | EH31 | E63 | 630I | N52 | HECK | MECH | 30.00 | COUPE | 190 | LL | 2 | EUR | 6 |
| EH32 | EH32 | E63 | 630I | N52 | HECK | MECH | 30.00 | COUPE | 190 | RL | 2 | EUR | 6 |
| EH71 | EH71 | E63 | 645CI | N62 | HECK | MECH | 44.00 | COUPE | 245 | LL | 2 | EUR | 6 |
| EH72 | EH72 | E63 | 645CI | N62 | HECK | MECH | 44.00 | COUPE | 245 | RL | 2 | EUR | 6 |
| EH73 | EH73 | E63 | 645CI | N62 | HECK | MECH | 44.00 | COUPE | 245 | LL | 2 | USA | 6 |
| EH91 | EH91 | E63 | M6 | S85 | HECK | MECH | 50.00 | COUPE | 373 | LL | 2 | EUR | 6 |
| EH92 | EH92 | E63 | M6 | S85 | HECK | MECH | 50.00 | COUPE | 373 | RL | 2 | EUR | 6 |
| EH93 | EH93 | E63 | M6 | S85 | HECK | MECH | 50.00 | COUPE | 373 | LL | 2 | USA | 6 |
| EJ11 | EJ11 | E52 | Z8 | S62 | HECK | MECH | 50.00 | ROADST | 294 | LL | 2 | EUR | 8 |
| EJ13 | EJ13 | E52 | Z8 | S62 | HECK | MECH | 50.00 | ROADST | 294 | LL | 2 | USA | 8 |
| EJ92 | EJ92 | E46 | 330D | M57/TU | HECK | MECH | 30.00 | LIM | 150 | RL | 4 | EUR | 3 |
| EK11 | EK11 | E64 | 650I | N62/TU | HECK | MECH | 48.00 | CABRIO | 270 | LL | 2 | EUR | 6 |
| EK12 | EK12 | E64 | 650I | N62/TU | HECK | MECH | 48.00 | CABRIO | 270 | RL | 2 | EUR | 6 |
| EK13 | EK13 | E64 | 650I | N62/TU | HECK | MECH | 48.00 | CABRIO | 270 | LL | 2 | USA | 6 |
| EK31 | EK31 | E64 | 630I | N52 | HECK | MECH | 30.00 | CABRIO | 190 | LL | 2 | EUR | 6 |
| EK32 | EK32 | E64 | 630I | N52 | HECK | MECH | 30.00 | CABRIO | 190 | RL | 2 | EUR | 6 |
| EK71 | EK71 | E64 | 645CI | N62 | HECK | MECH | 44.00 | CABRIO | 245 | LL | 2 | EUR | 6 |
| EK72 | EK72 | E64 | 645CI | N62 | HECK | MECH | 44.00 | CABRIO | 245 | RL | 2 | EUR | 6 |
| EK73 | EK73 | E64 | 645CI | N62 | HECK | MECH | 44.00 | CABRIO | 245 | LL | 2 | USA | 6 |
| EK91 | EK91 | E64 | M6 | S85 | HECK | MECH | 50.00 | CABRIO | 373 | LL | 2 | EUR | 6 |
| EK92 | EK92 | E64 | M6 | S85 | HECK | MECH | 50.00 | CABRIO | 373 | RL | 2 | EUR | 6 |
| EK93 | EK93 | E64 | M6 | S85 | HECK | MECH | 50.00 | CABRIO | 373 | LL | 2 | USA | 6 |
| EL51 | EL51 | E46 | 318D | M47 | HECK | MECH | 20.00 | TOUR | 85 | LL | 5 | EUR | 3 |
| EL71 | EL71 | E46 | 318D | M47/TU | HECK | MECH | 20.00 | TOUR | 85 | LL | 5 | EUR | 3 |
| EL72 | EL72 | E46 | 318D | M47/TU | HECK | MECH | 20.00 | TOUR | 85 | RL | 5 | EUR | 3 |
| EL91 | EL91 | E46 | 330D | M57 | HECK | MECH | 30.00 | TOUR | 135 | LL | 5 | EUR | 3 |
| EL92 | EL92 | E46 | 330D | M57 | HECK | MECH | 30.00 | TOUR | 135 | RL | 5 | EUR | 3 |
| EN11 | EN11 | E46 | 320I | M54 | HECK | MECH | 22.00 | TOUR | 125 | LL | 5 | EUR | 3 |
| EN12 | EN12 | E46 | 320I | M54 | HECK | MECH | 22.00 | TOUR | 125 | RL | 5 | EUR | 3 |
| EN31 | EN31 | E46 | 325I | M54 | HECK | MECH | 25.00 | TOUR | 141 | LL | 5 | EUR | 3 |
| EN32 | EN32 | E46 | 325I | M54 | HECK | MECH | 25.00 | TOUR | 141 | RL | 5 | EUR | 3 |
| EN33 | EN33 | E46 | 325I | M54 | HECK | MECH | 25.00 | TOUR | 141 | LL | 5 | USA | 3 |
| EN51 | EN51 | E46 | 330I | M54 | HECK | MECH | 30.00 | TOUR | 170 | LL | 5 | EUR | 3 |
| EN52 | EN52 | E46 | 330I | M54 | HECK | MECH | 30.00 | TOUR | 170 | RL | 5 | EUR | 3 |
| EP31 | EP31 | E46 | 325XI | M54 | ALLR | MECH | 25.00 | TOUR | 141 | LL | 5 | EUR | 3 |
| EP33 | EP33 | E46 | 325XI | M54 | ALLR | MECH | 25.00 | TOUR | 141 | LL | 5 | USA | 3 |
| EP51 | EP51 | E46 | 330XI | M54 | ALLR | MECH | 30.00 | TOUR | 170 | LL | 5 | EUR | 3 |
| EP71 | EP71 | E46 | 330XD | M57 | ALLR | MECH | 30.00 | TOUR | 135 | LL | 5 | EUR | 3 |
| ER11 | ER11 | E46 | 316I | M43/TU | HECK | MECH | 19.00 | LIM | 77 | LL | 4 | EUR | 3 |
| ER12 | ER12 | E46 | 316I | M43/TU | HECK | MECH | 19.00 | LIM | 77 | RL | 4 | EUR | 3 |
| ER51 | ER51 | E46 | 316I | M43/TU | HECK | MECH | 16.00 | LIM | 77 | LL | 4 | EUR | 3 |
| ER55 | ER55 | E46 | 316I | M43/TU | HECK | MECH | 16.00 | LIM | 77 | LL | 4 | PHL | 3 |
| ER91 | ER91 | E46 | 330D | M57 | HECK | MECH | 30.00 | LIM | 135 | LL | 4 | EUR | 3 |
| ER92 | ER92 | E46 | 330D | M57 | HECK | MECH | 30.00 | LIM | 135 | RL | 4 | EUR | 3 |
| ES35 | ES35 | E46 | 323I | M52/TU | HECK | MECH | 24.00 | LIM | 135 | RL | 4 | THA | 3 |
| ES92 | ES92 | E46 | 330D | M57 | HECK | MECH | 30.00 | LIM | 135 | RL | 4 | EUR | 3 |
| ET15 | ET15 | E46 | 320I | M54 | HECK | MECH | 22.00 | LIM | 125 | LL | 4 | EUR | 3 |
| ET16 | ET16 | E46 | 320I | M54 | HECK | MECH | 22.00 | LIM | 125 | RL | 4 | EUR | 3 |
| ET35 | ET35 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | EUR | 3 |
| ET36 | ET36 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | RL | 4 | EUR | 3 |
| ET37 | ET37 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | USA | 3 |
| ET55 | ET55 | E46 | 330I | M54 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | EUR | 3 |
| ET56 | ET56 | E46 | 330I | M54 | HECK | MECH | 30.00 | LIM | 170 | RL | 4 | EUR | 3 |
| ET57 | ET57 | E46 | 330I | M54 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | USA | 3 |
| ET75 | ET75 | E46 | 318I | N46 | HECK | MECH | 20.00 | LIM | 105 | LL | 4 | EUR | 3 |
| ET76 | ET76 | E46 | 318I | N46 | HECK | MECH | 20.00 | LIM | 105 | RL | 4 | EUR | 3 |
| EU31 | EU31 | E46 | 325XI | M54 | ALLR | MECH | 25.00 | LIM | 141 | LL | 4 | EUR | 3 |
| EU33 | EU33 | E46 | 325XI | M54 | ALLR | MECH | 25.00 | LIM | 141 | LL | 4 | USA | 3 |
| EU51 | EU51 | E46 | 318D | M47 | HECK | MECH | 20.00 | LIM | 85 | LL | 4 | EUR | 3 |
| EU71 | EU71 | E46 | 318D | M47/TU | HECK | MECH | 20.00 | LIM | 85 | LL | 4 | EUR | 3 |
| EU72 | EU72 | E46 | 318D | M47/TU | HECK | MECH | 20.00 | LIM | 85 | RL | 4 | EUR | 3 |
| EV11 | EV11 | E46 | 320I | M54 | HECK | MECH | 22.00 | LIM | 125 | LL | 4 | EUR | 3 |
| EV12 | EV12 | E46 | 320I | M54 | HECK | MECH | 22.00 | LIM | 125 | RL | 4 | EUR | 3 |
| EV13 | EV13 | E46 | 320I | M54 | HECK | MECH | 22.00 | LIM | 125 | LL | 4 | USA | 3 |
| EV18 | EV18 | E46 | 320I | M54 | HECK | MECH | 22.00 | LIM | 125 | LL | 4 | RUS | 3 |
| EV19 | EV19 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | CHN | 3 |
| EV31 | EV31 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | EUR | 3 |
| EV32 | EV32 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | RL | 4 | EUR | 3 |
| EV33 | EV33 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | USA | 3 |
| EV34 | EV34 | E46 | 325I | M54 | HECK | MECH | 24.00 | LIM | 140 | RL | 4 | THA | 3 |
| EV35 | EV35 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | RL | 4 | MYS | 3 |
| EV36 | EV36 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | RL | 4 | IDN | 3 |
| EV37 | EV37 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | PHL | 3 |
| EV38 | EV38 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | VNM | 3 |
| EV39 | EV39 | E46 | 325I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | MEX | 3 |
| EV51 | EV51 | E46 | 330I | M54 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | EUR | 3 |
| EV52 | EV52 | E46 | 330I | M54 | HECK | MECH | 30.00 | LIM | 170 | RL | 4 | EUR | 3 |
| EV53 | EV53 | E46 | 330I | M54 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | USA | 3 |
| EV55 | EV55 | E46 | 330I | M54 | HECK | MECH | 30.00 | LIM | 161 | RL | 4 | THA | 3 |
| EV57 | EV57 | E46 | 330I | M54 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | CHN | 3 |
| EV59 | EV59 | E46 | 330I | M54 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | MEX | 3 |
| EV91 | EV91 | E46 | 330XD | M57 | ALLR | MECH | 30.00 | LIM | 135 | LL | 4 | EUR | 3 |
| EW51 | EW51 | E46 | 330XI | M54 | ALLR | MECH | 30.00 | LIM | 170 | LL | 4 | EUR | 3 |
| EW53 | EW53 | E46 | 330XI | M54 | ALLR | MECH | 30.00 | LIM | 170 | LL | 4 | USA | 3 |
| EX31 | EX31 | E46 | 316I | N46 | HECK | MECH | 18.00 | TOUR | 85 | LL | 5 | EUR | 3 |
| EX32 | EX32 | E46 | 316I | N46 | HECK | MECH | 18.00 | TOUR | 85 | RL | 5 | EUR | 3 |
| EX51 | EX51 | E46 | 318I | N46 | HECK | MECH | 20.00 | TOUR | 105 | LL | 5 | EUR | 3 |
| EX52 | EX52 | E46 | 318I | N46 | HECK | MECH | 20.00 | TOUR | 105 | RL | 5 | EUR | 3 |
| EX71 | EX71 | E46 | 330XD | M57/TU | ALLR | MECH | 30.00 | TOUR | 150 | LL | 5 | EUR | 3 |
| EX91 | EX91 | E46 | 330D | M57/TU | HECK | MECH | 30.00 | TOUR | 150 | LL | 5 | EUR | 3 |
| EX92 | EX92 | E46 | 330D | M57/TU | HECK | MECH | 30.00 | TOUR | 150 | RL | 5 | EUR | 3 |
| EY11 | EY11 | E46 | 316I | N45 | HECK | MECH | 16.00 | LIM | 85 | LL | 4 | EUR | 3 |
| EY15 | EY15 | E46 | 316I | N45 | HECK | MECH | 16.00 | LIM | 85 | LL | 4 | PHL | 3 |
| EY31 | EY31 | E46 | 316I | N46 | HECK | MECH | 18.00 | LIM | 85 | LL | 4 | EUR | 3 |
| EY32 | EY32 | E46 | 316I | N46 | HECK | MECH | 18.00 | LIM | 85 | RL | 4 | EUR | 3 |
| EY71 | EY71 | E46 | 318I | N46 | HECK | MECH | 20.00 | LIM | 105 | LL | 4 | EUR | 3 |
| EY72 | EY72 | E46 | 318I | N46 | HECK | MECH | 20.00 | LIM | 105 | RL | 4 | EUR | 3 |
| EY74 | EY74 | E46 | 318I | N46 | HECK | MECH | 20.00 | LIM | 105 | RL | 4 | MYS | 3 |
| EY75 | EY75 | E46 | 318I | N46 | HECK | MECH | 20.00 | LIM | 105 | RL | 4 | THA | 3 |
| EY76 | EY76 | E46 | 318I | N46 | HECK | MECH | 20.00 | LIM | 105 | LL | 4 | EGY | 3 |
| EY77 | EY77 | E46 | 318I | N46 | HECK | MECH | 20.00 | LIM | 105 | RL | 4 | IDN | 3 |
| EY78 | EY78 | E46 | 318I | N46 | HECK | MECH | 20.00 | LIM | 105 | LL | 4 | VNM | 3 |
| EY79 | EY79 | E46 | 318I | N46 | HECK | MECH | 20.00 | LIM | 105 | LL | 4 | PHL | 3 |
| EY97 | EY97 | E46 | 318I | N46 | HECK | MECH | 20.00 | LIM | 105 | LL | 4 | CHN | 3 |
| EY98 | EY98 | E46 | 318I | N46 | HECK | MECH | 20.00 | LIM | 105 | LL | 4 | RUS | 3 |
| EZ31 | EZ31 | E46 | 316TI | N45 | HECK | MECH | 16.00 | COMP | 85 | LL | 3 | EUR | 3 |
| EZ51 | EZ51 | E46 | 316TI | N46 | HECK | MECH | 18.00 | COMP | 85 | LL | 3 | EUR | 3 |
| EZ52 | EZ52 | E46 | 316TI | N46 | HECK | MECH | 18.00 | COMP | 85 | RL | 3 | EUR | 3 |
| EZ71 | EZ71 | E46 | 318TI | N46 | HECK | MECH | 20.00 | COMP | 105 | LL | 3 | EUR | 3 |
| EZ72 | EZ72 | E46 | 318TI | N46 | HECK | MECH | 20.00 | COMP | 105 | RL | 3 | EUR | 3 |
| FA11 | FA11 | E53 | X5 3.0I | M54 | ALLR | MECH | 30.00 | GEFZG | 170 | LL | 5 | EUR | 5 |
| FA12 | FA12 | E53 | X5 3.0I | M54 | ALLR | MECH | 30.00 | GEFZG | 170 | RL | 5 | EUR | 5 |
| FA13 | FA13 | E53 | X5 3.0I | M54 | ALLR | MECH | 30.00 | GEFZG | 170 | LL | 5 | USA | 5 |
| FA51 | FA51 | E53 | X5 3.0I | M54 | ALLR | MECH | 30.00 | GEFZG | 170 | LL | 5 | EUR | 5 |
| FA52 | FA52 | E53 | X5 3.0I | M54 | ALLR | MECH | 30.00 | GEFZG | 170 | RL | 5 | EUR | 5 |
| FA53 | FA53 | E53 | X5 3.0I | M54 | ALLR | MECH | 30.00 | GEFZG | 170 | LL | 5 | USA | 5 |
| FA71 | FA71 | E53 | X5 3.0D | M57 | ALLR | MECH | 30.00 | GEFZG | 135 | LL | 5 | EUR | 5 |
| FA72 | FA72 | E53 | X5 3.0D | M57 | ALLR | MECH | 30.00 | GEFZG | 135 | RL | 5 | EUR | 5 |
| FA91 | FA91 | E53 | X5 4.8IS | N62/S | ALLR | MECH | 48.00 | GEFZG | 265 | LL | 5 | EUR | 5 |
| FA92 | FA92 | E53 | X5 4.8IS | N62/S | ALLR | MECH | 48.00 | GEFZG | 265 | RL | 5 | EUR | 5 |
| FA93 | FA93 | E53 | X5 4.8IS | N62/S | ALLR | MECH | 48.00 | GEFZG | 265 | LL | 5 | USA | 5 |
| FB31 | FB31 | E53 | X5 4.4I | M62/TU | ALLR | MECH | 44.00 | GEFZG | 210 | LL | 5 | EUR | 5 |
| FB32 | FB32 | E53 | X5 4.4I | M62/TU | ALLR | MECH | 44.00 | GEFZG | 210 | RL | 5 | EUR | 5 |
| FB33 | FB33 | E53 | X5 4.4I | M62/TU | ALLR | MECH | 44.00 | GEFZG | 210 | LL | 5 | USA | 5 |
| FB51 | FB51 | E53 | X5 4.4I | N62 | ALLR | MECH | 44.00 | GEFZG | 235 | LL | 5 | EUR | 5 |
| FB52 | FB52 | E53 | X5 4.4I | N62 | ALLR | MECH | 44.00 | GEFZG | 235 | RL | 5 | EUR | 5 |
| FB53 | FB53 | E53 | X5 4.4I | N62 | ALLR | MECH | 44.00 | GEFZG | 235 | LL | 5 | USA | 5 |
| FB71 | FB71 | E53 | X5 3.0D | M57/TU | ALLR | MECH | 30.00 | GEFZG | 160 | LL | 5 | EUR | 5 |
| FB72 | FB72 | E53 | X5 3.0D | M57/TU | ALLR | MECH | 30.00 | GEFZG | 160 | RL | 5 | EUR | 5 |
| FB91 | FB91 | E53 | X5 4.6IS | M62/TU | ALLR | MECH | 46.00 | GEFZG | 255 | LL | 5 | EUR | 5 |
| FB92 | FB92 | E53 | X5 4.6IS | M62/TU | ALLR | MECH | 46.00 | GEFZG | 255 | RL | 5 | EUR | 5 |
| FB93 | FB93 | E53 | X5 4.6IS | M62/TU | ALLR | MECH | 46.00 | GEFZG | 255 | LL | 5 | USA | 5 |
| FE41 | FE41 | E70 | X5 3.0SI | N52K | ALLR | AUT | 30.00 | GEFZG | 195 | LL | 5 | EUR | 5 |
| FE42 | FE42 | E70 | X5 3.0SI | N52K | ALLR | AUT | 30.00 | GEFZG | 195 | RL | 5 | EUR | 5 |
| FE43 | FE43 | E70 | X5 3.0SI | N52K | ALLR | AUT | 30.00 | GEFZG | 190 | LL | 5 | USA | 5 |
| FE81 | FE81 | E70 | X5 4.8I | N62/TU | ALLR | AUT | 48.00 | GEFZG | 250 | LL | 5 | EUR | 5 |
| FE82 | FE82 | E70 | X5 4.8I | N62/TU | ALLR | AUT | 48.00 | GEFZG | 250 | RL | 5 | EUR | 5 |
| FE83 | FE83 | E70 | X5 4.8I | N62/TU | ALLR | AUT | 48.00 | GEFZG | 250 | LL | 5 | USA | 5 |
| FF01 | FF01 | E70 | X5 3.0SD | M57Y | ALLR | AUT | 30.00 | GEFZG | 210 | LL | 5 | EUR | 5 |
| FF02 | FF02 | E70 | X5 3.0SD | M57Y | ALLR | AUT | 30.00 | GEFZG | 210 | RL | 5 | EUR | 5 |
| FF41 | FF41 | E70 | X5 3.0D | M57/T2 | ALLR | AUT | 30.00 | GEFZG | 170 | LL | 5 | EUR | 5 |
| FF42 | FF42 | E70 | X5 3.0D | M57/T2 | ALLR | AUT | 30.00 | GEFZG | 170 | RL | 5 | EUR | 5 |
| FG01 | FG01 | E71 | X6 3.0D | M57 | ALLR | AUT | 30.00 | SC | 210 | LL | 5 | EUR | 6 |
| FG01 | FG01 | E71 | X6 3.0SD | M57Y | ALLR | AUT | 30.00 | SC | 210 | LL | 5 | EUR | 6 |
| FG02 | FG02 | E71 | X6 3.0SD | M57Y | ALLR | AUT | 30.00 | SC | 210 | RL | 5 | EUR | 6 |
| FG41 | FG41 | E71 | X6 3.0SI | N54 | ALLR | AUT | 30.00 | SC | 225 | LL | 5 | EUR | 6 |
| FG42 | FG42 | E71 | X6 3.0SI | N54 | ALLR | AUT | 30.00 | SC | 225 | RL | 5 | EUR | 6 |
| FG43 | FG43 | E71 | X6 3.0SI | N54 | ALLR | AUT | 30.00 | SC | 225 | LL | 5 | USA | 6 |
| FG61 | FG61 | E71 | X6 3.0D | M57/T2 | ALLR | AUT | 30.00 | SC | 170 | LL | 5 | EUR | 6 |
| FG62 | FG62 | E71 | X6 3.0D | M57/T2 | ALLR | AUT | 30.00 | SC | 170 | RL | 5 | EUR | 6 |
| FG81 | FG81 | E71 | X6 4.4SI | N63 | ALLR | AUT | 44.00 | SC | 300 | LL | 5 | EUR | 6 |
| FG82 | FG82 | E71 | X6 4.4SI | N63 | ALLR | AUT | 44.00 | SC | 300 | RL | 5 | EUR | 6 |
| FG83 | FG83 | E71 | X6 4.4SI | N63 | ALLR | AUT | 44.00 | SC | 300 | LL | 5 | USA | 6 |
| FK01 | FK01 | RR1 | R-ROYCE | N73 | HECK | AUT | 67.50 | LIM | 338 | LL | 4 | EUR | R |
| FK02 | FK02 | RR1 | R-ROYCE | N73 | HECK | AUT | 67.50 | LIM | 338 | RL | 4 | EUR | R |
| FK03 | FK03 | RR1 | R-ROYCE | N73 | HECK | AUT | 67.50 | LIM | 338 | LL | 4 | USA | R |
| FK41 | FK41 | RR4 | R-ROYCE | N74R | HECK | AUT | 66.00 | LIM | 420 | LL | 4 | EUR | R |
| FK43 | FK43 | RR4 | R-ROYCE | N74R | HECK | AUT | 66.00 | LIM | 420 | LL | 4 | USA | R |
| FK61 | FK61 | RR1 | R-ROYCE | N73 | HECK | AUT | 67.50 | LIM | 338 | LL | 4 | EUR | R |
| FK62 | FK62 | RR1 | R-ROYCE | N73 | HECK | AUT | 67.50 | LIM | 338 | RL | 4 | EUR | R |
| FK63 | FK63 | RR1 | R-ROYCE | N73 | HECK | AUT | 67.50 | LIM | 338 | LL | 4 | USA | R |
| FK81 | FK81 | RR2 | R-ROYCE | N73 | HECK | AUT | 67.50 | CABRIO | 338 | LL | 2 | EUR | R |
| FK82 | FK82 | RR2 | R-ROYCE | N73 | HECK | AUT | 67.50 | CABRIO | 338 | RL | 2 | EUR | R |
| FK83 | FK83 | RR2 | R-ROYCE | N73 | HECK | AUT | 67.50 | CABRIO | 338 | LL | 2 | USA | R |
| FN41 | FN41 | E70 | X5 3.0SI | N54 | ALLR | AUT | 30.00 | GEFZG | 225 | LL | 5 | EUR | 5 |
| FN42 | FN42 | E70 | X5 3.0SI | N54 | ALLR | AUT | 30.00 | GEFZG | 225 | RL | 5 | EUR | 5 |
| FN43 | FN43 | E70 | X5 3.0SI | N54 | ALLR | AUT | 30.00 | GEFZG | 225 | LL | 5 | USA | 5 |
| FN81 | FN81 | E70 | X5 4.4SI | N63 | ALLR | AUT | 44.00 | GEFZG | 300 | LL | 5 | EUR | 5 |
| FN82 | FN82 | E70 | X5 4.4SI | N63 | ALLR | AUT | 44.00 | GEFZG | 300 | RL | 5 | EUR | 5 |
| FN83 | FN83 | E70 | X5 4.4SI | N63 | ALLR | AUT | 44.00 | GEFZG | 300 | LL | 5 | USA | 5 |
| FP11 | FP11 | F10 | 520I | N46T | HECK | MECH | 20.00 | LIM | 115 | LL | 4 | EUR | 5 |
| FP12 | FP12 | F10 | 520I | N46T | HECK | MECH | 20.00 | LIM | 115 | RL | 4 | EUR | 5 |
| FP31 | FP31 | F10 | 523I | N52K | HECK | MECH | 25.00 | LIM | 140 | LL | 4 | EUR | 5 |
| FP32 | FP32 | F10 | 523I | N52K | HECK | MECH | 25.00 | LIM | 140 | RL | 4 | EUR | 5 |
| FP51 | FP51 | F10 | 523I | N53 | HECK | MECH | 25.00 | LIM | 140 | LL | 4 | EUR | 5 |
| FP52 | FP52 | F10 | 523I | N53 | HECK | MECH | 25.00 | LIM | 140 | RL | 4 | EUR | 5 |
| FP71 | FP71 | F10 | 525I | N52K | HECK | MECH | 25.00 | LIM | 160 | LL | 4 | EUR | 5 |
| FP72 | FP72 | F10 | 525I | N52K | HECK | MECH | 25.00 | LIM | 160 | RL | 4 | EUR | 5 |
| FP91 | FP91 | F10 | 525I | N53 | HECK | MECH | 30.00 | LIM | 160 | LL | 4 | EUR | 5 |
| FP92 | FP92 | F10 | 525I | N53 | HECK | MECH | 30.00 | LIM | 160 | RL | 4 | EUR | 5 |
| FR13 | FR13 | F10 | 528I | N52K | HECK | MECH | 30.00 | LIM | 172 | LL | 4 | USA | 5 |
| FR31 | FR31 | F10 | 530I | N52K | HECK | MECH | 30.00 | LIM | 200 | LL | 4 | EUR | 5 |
| FR32 | FR32 | F10 | 530I | N52K | HECK | MECH | 30.00 | LIM | 200 | RL | 4 | EUR | 5 |
| FR51 | FR51 | F10 | 530I | N53 | HECK | MECH | 30.00 | LIM | 200 | LL | 4 | EUR | 5 |
| FR52 | FR52 | F10 | 530I | N53 | HECK | MECH | 30.00 | LIM | 200 | RL | 4 | EUR | 5 |
| FR71 | FR71 | F10 | 535I | N54 | HECK | MECH | 30.00 | LIM | 225 | LL | 4 | EUR | 5 |
| FR72 | FR72 | F10 | 535I | N54 | HECK | MECH | 30.00 | LIM | 225 | RL | 4 | EUR | 5 |
| FR73 | FR73 | F10 | 535I | N54 | HECK | MECH | 30.00 | LIM | 225 | LL | 4 | USA | 5 |
| FR91 | FR91 | F10 | 550I | N63 | HECK | MECH | 44.00 | LIM | 300 | LL | 4 | EUR | 5 |
| FR92 | FR92 | F10 | 550I | N63 | HECK | MECH | 44.00 | LIM | 300 | RL | 4 | EUR | 5 |
| FR93 | FR93 | F10 | 550I | N63 | HECK | MECH | 44.00 | LIM | 300 | LL | 4 | USA | 5 |
| FU33 | FU33 | F10 | 528XI | N52K | ALLR | MECH | 30.00 | LIM | 172 | LL | 4 | USA | 5 |
| FU51 | FU51 | F10 | 530XI | N53 | ALLR | MECH | 30.00 | LIM | 200 | LL | 4 | EUR | 5 |
| FU71 | FU71 | F10 | 535XI | N54 | ALLR | MECH | 30.00 | LIM | 225 | LL | 4 | EUR | 5 |
| FU73 | FU73 | F10 | 535XI | N54 | ALLR | MECH | 30.00 | LIM | 225 | LL | 4 | USA | 5 |
| FU91 | FU91 | F10 | 550XI | N63 | ALLR | MECH | 44.00 | LIM | 400 | LL | 4 | EUR | 5 |
| FU93 | FU93 | F10 | 550XI | N63 | ALLR | MECH | 44.00 | LIM | 400 | LL | 4 | USA | 5 |
| FV11 | FV11 | F10 | 525XD | N57 | ALLR | MECH | 30.00 | LIM | 150 | LL | 4 | EUR | 5 |
| FV31 | FV31 | F10 | 530XD | N57 | ALLR | MECH | 30.00 | LIM | 180 | LL | 4 | EUR | 5 |
| FW11 | FW11 | F10 | 520D | N47 | HECK | MECH | 20.00 | LIM | 130 | LL | 4 | EUR | 5 |
| FW12 | FW12 | F10 | 520D | N47 | HECK | MECH | 20.00 | LIM | 130 | RL | 4 | EUR | 5 |
| FW31 | FW31 | F10 | 525D | N57 | HECK | MECH | 30.00 | LIM | 150 | LL | 4 | EUR | 5 |
| FW32 | FW32 | F10 | 525D | N57 | HECK | MECH | 30.00 | LIM | 150 | RL | 4 | EUR | 5 |
| FW51 | FW51 | F10 | 530D | N57 | HECK | MECH | 30.00 | LIM | 180 | LL | 4 | EUR | 5 |
| FW52 | FW52 | F10 | 530D | N57 | HECK | MECH | 30.00 | LIM | 180 | RL | 4 | EUR | 5 |
| FW71 | FW71 | F10 | 535D | N57S | HECK | MECH | 30.00 | LIM | 220 | LL | 4 | EUR | 5 |
| FW72 | FW72 | F10 | 535D | N57S | HECK | MECH | 30.00 | LIM | 220 | RL | 4 | EUR | 5 |
| GL21 | GL21 | E65 | 730I | M54 | HECK | AUT | 30.00 | LIM | 170 | LL | 4 | EUR | 7 |
| GL22 | GL22 | E65 | 730I | M54 | HECK | AUT | 30.00 | LIM | 170 | RL | 4 | EUR | 7 |
| GL41 | GL41 | E65 | 735I | N62 | HECK | AUT | 36.00 | LIM | 200 | LL | 4 | EUR | 7 |
| GL42 | GL42 | E65 | 735I | N62 | HECK | AUT | 36.00 | LIM | 200 | RL | 4 | EUR | 7 |
| GL61 | GL61 | E65 | 745I | N62 | HECK | AUT | 44.00 | LIM | 245 | LL | 4 | EUR | 7 |
| GL62 | GL62 | E65 | 745I | N62 | HECK | AUT | 44.00 | LIM | 245 | RL | 4 | EUR | 7 |
| GL63 | GL63 | E65 | 745I | N62 | HECK | AUT | 44.00 | LIM | 245 | LL | 4 | USA | 7 |
| GL81 | GL81 | E65 | 760I | N73 | HECK | AUT | 60.00 | LIM | 327 | LL | 4 | EUR | 7 |
| GL82 | GL82 | E65 | 760I | N73 | HECK | AUT | 60.00 | LIM | 327 | RL | 4 | EUR | 7 |
| GL83 | GL83 | E65 | 760I | N73 | HECK | AUT | 60.00 | LIM | 327 | LL | 4 | USA | 7 |
| GM21 | GM21 | E65 | 730D | M57/TU | HECK | AUT | 30.00 | LIM | 150 | LL | 4 | EUR | 7 |
| GM22 | GM22 | E65 | 730D | M57/TU | HECK | AUT | 30.00 | LIM | 150 | RL | 4 | EUR | 7 |
| GM41 | GM41 | E65 | 740D | M67 | HECK | AUT | 40.00 | LIM | 190 | LL | 4 | EUR | 7 |
| GN21 | GN21 | E66 | 730LI | M54 | HECK | AUT | 30.00 | LIM | 170 | LL | 4 | EUR | 7 |
| GN22 | GN22 | E66 | 730LI | M54 | HECK | AUT | 30.00 | LIM | 170 | RL | 4 | EUR | 7 |
| GN25 | GN25 | E66 | 730LI | M54 | HECK | AUT | 30.00 | LIM | 161 | RL | 4 | THA | 7 |
| GN41 | GN41 | E66 | 735LI | N62 | HECK | AUT | 36.00 | LIM | 200 | LL | 4 | EUR | 7 |
| GN42 | GN42 | E66 | 735LI | N62 | HECK | AUT | 36.00 | LIM | 200 | RL | 4 | EUR | 7 |
| GN45 | GN45 | E66 | 735LI | N62 | HECK | AUT | 36.00 | LIM | 200 | RL | 4 | THA | 7 |
| GN61 | GN61 | E66 | 745LI | N62 | HECK | AUT | 44.00 | LIM | 245 | LL | 4 | EUR | 7 |
| GN62 | GN62 | E66 | 745LI | N62 | HECK | AUT | 44.00 | LIM | 245 | RL | 4 | EUR | 7 |
| GN63 | GN63 | E66 | 745LI | N62 | HECK | AUT | 44.00 | LIM | 245 | LL | 4 | USA | 7 |
| GN81 | GN81 | E66 | 760LI | N73 | HECK | AUT | 60.00 | LIM | 327 | LL | 4 | EUR | 7 |
| GN82 | GN82 | E66 | 760LI | N73 | HECK | AUT | 60.00 | LIM | 327 | RL | 4 | EUR | 7 |
| GN83 | GN83 | E66 | 760LI | N73 | HECK | AUT | 60.00 | LIM | 327 | LL | 4 | USA | 7 |
| GP61 | GP61 | E67 | 745LI | N62 | HECK | AUT | 44.00 | LIM | 245 | LL | 4 | EUR | 7 |
| GP62 | GP62 | E67 | 745LI | N62 | HECK | AUT | 44.00 | LIM | 245 | RL | 4 | EUR | 7 |
| GP81 | GP81 | E67 | 760LI | N73 | HECK | AUT | 60.00 | LIM | 327 | LL | 4 | EUR | 7 |
| GP82 | GP82 | E67 | 760LI | N73 | HECK | AUT | 60.00 | LIM | 327 | RL | 4 | EUR | 7 |
| GX81 | GX81 | E68 | H7 | N73H | HECK | AUT | 60.00 | LIM | 185 | LL | 4 | EUR | 7 |
| HL01 | HL01 | E65 | 760I | N73 | HECK | AUT | 60.00 | LIM | 327 | LL | 4 | EUR | 7 |
| HL02 | HL02 | E65 | 760I | N73 | HECK | AUT | 60.00 | LIM | 327 | RL | 4 | EUR | 7 |
| HL03 | HL03 | E65 | 760I | N73 | HECK | AUT | 60.00 | LIM | 327 | LL | 4 | USA | 7 |
| HL21 | HL21 | E65 | 730I | N52 | HECK | AUT | 30.00 | LIM | 190 | LL | 4 | EUR | 7 |
| HL22 | HL22 | E65 | 730I | N52 | HECK | AUT | 30.00 | LIM | 190 | RL | 4 | EUR | 7 |
| HL61 | HL61 | E65 | 740I | N62/TU | HECK | AUT | 40.00 | LIM | 225 | LL | 4 | EUR | 7 |
| HL62 | HL62 | E65 | 740I | N62/TU | HECK | AUT | 40.00 | LIM | 225 | RL | 4 | EUR | 7 |
| HL81 | HL81 | E65 | 750I | N62/TU | HECK | AUT | 48.00 | LIM | 270 | LL | 4 | EUR | 7 |
| HL82 | HL82 | E65 | 750I | N62/TU | HECK | AUT | 48.00 | LIM | 270 | RL | 4 | EUR | 7 |
| HL83 | HL83 | E65 | 750I | N62/TU | HECK | AUT | 48.00 | LIM | 270 | LL | 4 | USA | 7 |
| HM21 | HM21 | E65 | 730D | M57/T2 | HECK | AUT | 30.00 | LIM | 170 | LL | 4 | EUR | 7 |
| HM22 | HM22 | E65 | 730D | M57/T2 | HECK | AUT | 30.00 | LIM | 170 | RL | 4 | EUR | 7 |
| HM41 | HM41 | E66 | 730LD | M57/T2 | HECK | AUT | 30.00 | LIM | 170 | LL | 4 | EUR | 7 |
| HM42 | HM42 | E66 | 730LD | M57/T2 | HECK | AUT | 30.00 | LIM | 170 | RL | 4 | EUR | 7 |
| HM61 | HM61 | E65 | 745D | M67/TU | HECK | AUT | 44.00 | LIM | 242 | LL | 4 | EUR | 7 |
| HN01 | HN01 | E66 | 760LI | N73 | HECK | AUT | 60.00 | LIM | 327 | LL | 4 | EUR | 7 |
| HN02 | HN02 | E66 | 760LI | N73 | HECK | AUT | 60.00 | LIM | 327 | RL | 4 | EUR | 7 |
| HN03 | HN03 | E66 | 760LI | N73 | HECK | AUT | 60.00 | LIM | 327 | LL | 4 | USA | 7 |
| HN21 | HN21 | E66 | 730LI | N52 | HECK | AUT | 30.00 | LIM | 190 | LL | 4 | EUR | 7 |
| HN22 | HN22 | E66 | 730LI | N52 | HECK | AUT | 30.00 | LIM | 190 | RL | 4 | EUR | 7 |
| HN25 | HN25 | E66 | 730LI | N52 | HECK | AUT | 30.00 | LIM | 190 | RL | 4 | THA | 7 |
| HN61 | HN61 | E66 | 740LI | N62/TU | HECK | AUT | 40.00 | LIM | 225 | LL | 4 | EUR | 7 |
| HN62 | HN62 | E66 | 740LI | N62/TU | HECK | AUT | 40.00 | LIM | 225 | RL | 4 | EUR | 7 |
| HN65 | HN65 | E66 | 740LI | N62/TU | HECK | AUT | 40.00 | LIM | 225 | RL | 4 | THA | 7 |
| HN66 | HN66 | E66 | 740LI | N62/TU | HECK | AUT | 40.00 | LIM | 225 | LL | 4 | EGY | 7 |
| HN81 | HN81 | E66 | 750LI | N62/TU | HECK | AUT | 48.00 | LIM | 270 | LL | 4 | EUR | 7 |
| HN82 | HN82 | E66 | 750LI | N62/TU | HECK | AUT | 48.00 | LIM | 270 | RL | 4 | EUR | 7 |
| HN83 | HN83 | E66 | 750LI | N62/TU | HECK | AUT | 48.00 | LIM | 270 | LL | 4 | USA | 7 |
| HP61 | HP61 | E67 | 745LI | N62 | HECK | AUT | 44.00 | LIM | 245 | LL | 4 | EUR | 7 |
| HP62 | HP62 | E67 | 745LI | N62 | HECK | AUT | 44.00 | LIM | 245 | RL | 4 | EUR | 7 |
| HP81 | HP81 | E67 | 760LI | N73 | HECK | AUT | 60.00 | LIM | 327 | LL | 4 | EUR | 7 |
| HP82 | HP82 | E67 | 760LI | N73 | HECK | AUT | 60.00 | LIM | 327 | RL | 4 | EUR | 7 |
| KA01 | KA01 | F01 | 760I | N74 | HECK | AUT | 60.00 | LIM | 400 | LL | 4 | EUR | 7 |
| KA02 | KA02 | F01 | 760I | N74 | HECK | AUT | 60.00 | LIM | 400 | RL | 4 | EUR | 7 |
| KA41 | KA41 | F01 | 740I | N54 | HECK | AUT | 30.00 | LIM | 240 | LL | 4 | EUR | 7 |
| KA42 | KA42 | F01 | 740I | N54 | HECK | AUT | 30.00 | LIM | 240 | RL | 4 | EUR | 7 |
| KA81 | KA81 | F01 | 750I | N63 | HECK | AUT | 44.00 | LIM | 300 | LL | 4 | EUR | 7 |
| KA82 | KA82 | F01 | 750I | N63 | HECK | AUT | 44.00 | LIM | 300 | RL | 4 | EUR | 7 |
| KA83 | KA83 | F01 | 750I | N63 | HECK | AUT | 44.00 | LIM | 300 | LL | 4 | USA | 7 |
| KB01 | KB01 | F02 | 760LI | N74 | HECK | AUT | 60.00 | LIM | 400 | LL | 4 | EUR | 7 |
| KB02 | KB02 | F02 | 760LI | N74 | HECK | AUT | 60.00 | LIM | 400 | RL | 4 | EUR | 7 |
| KB03 | KB03 | F02 | 760LI | N74 | HECK | AUT | 60.00 | LIM | 400 | LL | 4 | USA | 7 |
| KB21 | KB21 | F02 | 730LI | N52K | HECK | AUT | 30.00 | LIM | 200 | LL | 4 | EUR | 7 |
| KB22 | KB22 | F02 | 730LI | N52K | HECK | AUT | 30.00 | LIM | 200 | RL | 4 | EUR | 7 |
| KB25 | KB25 | F02 | 730LI | N52K | HECK | AUT | 30.00 | LIM | 200 | RL | 4 | THA | 7 |
| KB41 | KB41 | F02 | 740LI | N54 | HECK | AUT | 30.00 | LIM | 240 | LL | 4 | EUR | 7 |
| KB42 | KB42 | F02 | 740LI | N54 | HECK | AUT | 30.00 | LIM | 240 | RL | 4 | EUR | 7 |
| KB81 | KB81 | F02 | 750LI | N63 | HECK | AUT | 44.00 | LIM | 300 | LL | 4 | EUR | 7 |
| KB82 | KB82 | F02 | 750LI | N63 | HECK | AUT | 44.00 | LIM | 300 | RL | 4 | EUR | 7 |
| KB83 | KB83 | F02 | 750LI | N63 | HECK | AUT | 44.00 | LIM | 300 | LL | 4 | USA | 7 |
| KC61 | KC61 | F01 | 750XI | N63 | ALLR | AUT | 44.00 | LIM | 300 | LL | 4 | EUR | 7 |
| KC63 | KC63 | F01 | 750XI | N63 | ALLR | AUT | 44.00 | LIM | 300 | LL | 4 | USA | 7 |
| KC81 | KC81 | F02 | 750LXI | N63 | ALLR | AUT | 44.00 | LIM | 300 | LL | 4 | EUR | 7 |
| KC83 | KC83 | F02 | 750LXI | N63 | ALLR | AUT | 44.00 | LIM | 300 | LL | 4 | USA | 7 |
| KM21 | KM21 | F01 | 730D OL | N57 | HECK | AUT | 30.00 | LIM | 180 | LL | 4 | EUR | 7 |
| KM22 | KM22 | F01 | 730D OL | N57 | HECK | AUT | 30.00 | LIM | 180 | RL | 4 | EUR | 7 |
| KM41 | KM41 | F02 | 730LD | N57 | HECK | AUT | 30.00 | LIM | 180 | LL | 4 | EUR | 7 |
| KM42 | KM42 | F02 | 730LD | N57 | HECK | AUT | 30.00 | LIM | 180 | RL | 4 | EUR | 7 |
| KM81 | KM81 | F01 | 735D | N57S | HECK | AUT | 30.00 | LIM | 220 | LL | 4 | EUR | 7 |
| KM82 | KM82 | F01 | 735D | N57S | HECK | AUT | 30.00 | LIM | 220 | RL | 4 | EUR | 7 |
| LK21 | LK21 | F03 | 750LI | N63 | HECK | AUT | 44.00 | LIM | 300 | LL | 4 | EUR | 7 |
| LK22 | LK22 | F03 | 750LI | N63 | HECK | AUT | 44.00 | LIM | 300 | RL | 4 | EUR | 7 |
| LK41 | LK41 | F03 | 760LI | N74 | HECK | AUT | 60.00 | LIM | 400 | LL | 4 | EUR | 7 |
| LK42 | LK42 | F03 | 760LI | N74 | HECK | AUT | 60.00 | LIM | 400 | RL | 4 | EUR | 7 |
| LM31 | LM31 | E89 | Z4 2.5I | N52K | HECK | MECH | 25.00 | ROADST | 150 | LL | 2 | EUR | Z |
| LM32 | LM32 | E89 | Z4 2.5I | N52K | HECK | MECH | 25.00 | ROADST | 150 | RL | 2 | EUR | Z |
| LM51 | LM51 | E89 | Z4 3.0I | N52K | HECK | MECH | 30.00 | ROADST | 190 | LL | 2 | EUR | Z |
| LM52 | LM52 | E89 | Z4 3.0I | N52K | HECK | MECH | 30.00 | ROADST | 190 | RL | 2 | EUR | Z |
| LM53 | LM53 | E89 | Z4 3.0I | N52K | HECK | MECH | 30.00 | ROADST | 190 | LL | 2 | USA | Z |
| LM71 | LM71 | E89 | Z4 3.0SI | N54 | HECK | MECH | 30.00 | ROADST | 225 | LL | 2 | EUR | Z |
| LM72 | LM72 | E89 | Z4 3.0SI | N54 | HECK | MECH | 30.00 | ROADST | 225 | RL | 2 | EUR | Z |
| LM73 | LM73 | E89 | Z4 3.0SI | N54 | HECK | MECH | 30.00 | ROADST | 225 | LL | 2 | USA | Z |
| ME11 | ME11 | R56 | MINI ONE | N12 | FRONT | MECH | 14.00 | COUPE | 55 | LL | 3 | EUR | M |
| ME31 | ME31 | R56 | MINI ONE | N12 | FRONT | MECH | 14.00 | COUPE | 66 | LL | 3 | EUR | M |
| ME32 | ME32 | R56 | MINI ONE | N12 | FRONT | MECH | 14.00 | COUPE | 66 | RL | 3 | EUR | M |
| MF31 | MF31 | R56 | COOPER | N12 | FRONT | MECH | 16.00 | COUPE | 88 | LL | 3 | EUR | M |
| MF32 | MF32 | R56 | COOPER | N12 | FRONT | MECH | 16.00 | COUPE | 88 | RL | 3 | EUR | M |
| MF33 | MF33 | R56 | COOPER | N12 | FRONT | MECH | 16.00 | COUPE | 88 | LL | 3 | USA | M |
| MF71 | MF71 | R56 | COOPER S | N14 | FRONT | MECH | 16.00 | COUPE | 128 | LL | 3 | EUR | M |
| MF72 | MF72 | R56 | COOPER S | N14 | FRONT | MECH | 16.00 | COUPE | 128 | RL | 3 | EUR | M |
| MF73 | MF73 | R56 | COOPER S | N14 | FRONT | MECH | 16.00 | COUPE | 128 | LL | 3 | USA | M |
| MF91 | MF91 | R56 | COOPER S | N14 | FRONT | MECH | 16.00 | COUPE | 154 | LL | 3 | EUR | M |
| MF92 | MF92 | R56 | COOPER S | N14 | FRONT | MECH | 16.00 | COUPE | 154 | RL | 3 | EUR | M |
| MF93 | MF93 | R56 | COOPER S | N14 | FRONT | MECH | 16.00 | COUPE | 154 | LL | 3 | USA | M |
| MG11 | MG11 | R56 | ONE D | W16 | FRONT | MECH | 16.00 | COUPE | 66 | LL | 3 | EUR | M |
| MG12 | MG12 | R56 | ONE D | W16 | FRONT | MECH | 16.00 | COUPE | 66 | RL | 3 | EUR | M |
| MG31 | MG31 | R56 | COOPER D | W16 | FRONT | MECH | 16.00 | COUPE | 80 | LL | 3 | EUR | M |
| MG32 | MG32 | R56 | COOPER D | W16 | FRONT | MECH | 16.00 | COUPE | 80 | RL | 3 | EUR | M |
| MH31 | MH31 | R55 | MINI ONE | N12 | FRONT | MECH | 14.00 | HB | 66 | LL | 4 | EUR | M |
| MH32 | MH32 | R55 | MINI ONE | N12 | FRONT | MECH | 14.00 | HB | 66 | RL | 4 | EUR | M |
| ML31 | ML31 | R55 | COOPER | N12 | FRONT | MECH | 16.00 | HB | 88 | LL | 4 | EUR | M |
| ML32 | ML32 | R55 | COOPER | N12 | FRONT | MECH | 16.00 | HB | 88 | RL | 4 | EUR | M |
| ML33 | ML33 | R55 | COOPER | N12 | FRONT | MECH | 16.00 | HB | 88 | LL | 4 | USA | M |
| MM31 | MM31 | R55 | COOPER S | N14 | FRONT | MECH | 16.00 | HB | 128 | LL | 4 | EUR | M |
| MM32 | MM32 | R55 | COOPER S | N14 | FRONT | MECH | 16.00 | HB | 128 | RL | 4 | EUR | M |
| MM33 | MM33 | R55 | COOPER S | N14 | FRONT | MECH | 16.00 | HB | 128 | LL | 4 | USA | M |
| MM91 | MM91 | R55 | COOPER S | N14 | FRONT | MECH | 16.00 | HB | 154 | LL | 4 | EUR | M |
| MM92 | MM92 | R55 | COOPER S | N14 | FRONT | MECH | 16.00 | HB | 154 | RL | 4 | EUR | M |
| MM93 | MM93 | R55 | COOPER S | N14 | FRONT | MECH | 16.00 | HB | 154 | LL | 4 | USA | M |
| MN11 | MN11 | R55 | ONE D | W16 | FRONT | MECH | 16.00 | HB | 66 | LL | 4 | EUR | M |
| MN12 | MN12 | R55 | ONE D | W16 | FRONT | MECH | 16.00 | HB | 66 | RL | 4 | EUR | M |
| MN51 | MN51 | R55 | COOPER D | W16 | FRONT | MECH | 16.00 | HB | 80 | LL | 4 | EUR | M |
| MN52 | MN52 | R55 | COOPER | W16 | FRONT | MECH | 16.00 | HB | 80 | RL | 4 | EUR | M |
| MN52 | MN52 | R55 | COOPER D | W16 | FRONT | MECH | 16.00 | HB | 80 | RL | 4 | EUR | M |
| MP31 | MP31 | R57 | MINI ONE | N12 | FRONT | MECH | 14.00 | CABRIO | 66 | LL | 2 | EUR | M |
| MP32 | MP32 | R57 | MINI ONE | N12 | FRONT | MECH | 14.00 | CABRIO | 66 | RL | 2 | EUR | M |
| MR31 | MR31 | R57 | COOPER | N12 | FRONT | MECH | 16.00 | CABRIO | 88 | LL | 2 | EUR | M |
| MR32 | MR32 | R57 | COOPER | N12 | FRONT | MECH | 16.00 | CABRIO | 88 | RL | 2 | EUR | M |
| MR33 | MR33 | R57 | COOPER | N12 | FRONT | MECH | 16.00 | CABRIO | 88 | LL | 2 | USA | M |
| MS31 | MS31 | R57 | COOPER S | N14 | FRONT | MECH | 16.00 | CABRIO | 128 | LL | 2 | EUR | M |
| MS32 | MS32 | R57 | COOPER S | N14 | FRONT | MECH | 16.00 | CABRIO | 128 | RL | 2 | EUR | M |
| MS33 | MS33 | R57 | COOPER S | N14 | FRONT | MECH | 16.00 | CABRIO | 128 | LL | 2 | USA | M |
| MS91 | MS91 | R57 | COOPER S | N14 | FRONT | MECH | 16.00 | CABRIO | 154 | LL | 2 | EUR | M |
| MS92 | MS92 | R57 | COOPER S | N14 | FRONT | MECH | 16.00 | CABRIO | 154 | RL | 2 | EUR | M |
| MS93 | MS93 | R57 | COOPER S | N14 | FRONT | MECH | 16.00 | CABRIO | 154 | LL | 2 | USA | M |
| MT31 | MT31 | F11 | 520I | N46T | HECK | MECH | 20.00 | TOUR | 115 | LL | 5 | EUR | 5 |
| MT32 | MT32 | F11 | 520I | N46T | HECK | MECH | 20.00 | TOUR | 115 | RL | 5 | EUR | 5 |
| MT51 | MT51 | F11 | 523I | N53 | HECK | MECH | 25.00 | TOUR | 140 | LL | 5 | EUR | 5 |
| MT52 | MT52 | F11 | 523I | N53 | HECK | MECH | 25.00 | TOUR | 140 | RL | 5 | EUR | 5 |
| MT71 | MT71 | F11 | 525I | N52K | HECK | MECH | 25.00 | TOUR | 160 | LL | 5 | EUR | 5 |
| MT72 | MT72 | F11 | 525I | N52K | HECK | MECH | 25.00 | TOUR | 160 | RL | 5 | EUR | 5 |
| MT91 | MT91 | F11 | 525I | N53 | HECK | MECH | 30.00 | TOUR | 160 | LL | 5 | EUR | 5 |
| MT92 | MT92 | F11 | 525I | N53 | HECK | MECH | 30.00 | TOUR | 160 | RL | 5 | EUR | 5 |
| MU31 | MU31 | F11 | 530I | N52K | HECK | MECH | 30.00 | TOUR | 200 | LL | 5 | EUR | 5 |
| MU32 | MU32 | F11 | 530I | N52K | HECK | MECH | 30.00 | TOUR | 200 | RL | 5 | EUR | 5 |
| MU51 | MU51 | F11 | 530I | N53 | HECK | MECH | 30.00 | TOUR | 200 | LL | 5 | EUR | 5 |
| MU52 | MU52 | F11 | 530I | N53 | HECK | MECH | 30.00 | TOUR | 200 | RL | 5 | EUR | 5 |
| MU71 | MU71 | F11 | 535I | N54 | HECK | MECH | 30.00 | TOUR | 225 | LL | 5 | EUR | 5 |
| MU72 | MU72 | F11 | 535I | N54 | HECK | MECH | 30.00 | TOUR | 225 | RL | 5 | EUR | 5 |
| MU91 | MU91 | F11 | 550I | N63 | HECK | MECH | 44.00 | TOUR | 300 | LL | 5 | EUR | 5 |
| MU92 | MU92 | F11 | 550I | N63 | HECK | MECH | 44.00 | TOUR | 300 | RL | 5 | EUR | 5 |
| MW31 | MW31 | F11 | 530XI | N53 | ALLR | MECH | 30.00 | TOUR | 200 | LL | 5 | EUR | 5 |
| MW51 | MW51 | F11 | 535XI | N54 | ALLR | MECH | 30.00 | TOUR | 225 | LL | 5 | EUR | 5 |
| MW53 | MW53 | F11 | 535XI | N54 | ALLR | MECH | 30.00 | TOUR | 200 | LL | 5 | USA | 5 |
| MW71 | MW71 | F11 | 525XD | N57 | ALLR | MECH | 30.00 | TOUR | 150 | LL | 5 | EUR | 5 |
| MW91 | MW91 | F11 | 530XD | N57 | ALLR | MECH | 30.00 | TOUR | 180 | LL | 5 | EUR | 5 |
| MX11 | MX11 | F11 | 520D | N47 | HECK | MECH | 20.00 | TOUR | 130 | LL | 5 | EUR | 5 |
| MX12 | MX12 | F11 | 520D | N47 | HECK | MECH | 20.00 | TOUR | 130 | RL | 5 | EUR | 5 |
| MX31 | MX31 | F11 | 525D | N57 | HECK | MECH | 30.00 | TOUR | 150 | LL | 5 | EUR | 5 |
| MX32 | MX32 | F11 | 525D | N57 | HECK | MECH | 30.00 | TOUR | 150 | RL | 5 | EUR | 5 |
| MX51 | MX51 | F11 | 530D | N57 | HECK | MECH | 30.00 | TOUR | 180 | LL | 5 | EUR | 5 |
| MX52 | MX52 | F11 | 530D | N57 | HECK | MECH | 30.00 | TOUR | 180 | RL | 5 | EUR | 5 |
| MX71 | MX71 | F11 | 535D | N57S | HECK | MECH | 30.00 | TOUR | 220 | LL | 5 | EUR | 5 |
| MX72 | MX72 | F11 | 535D | N57S | HECK | MECH | 30.00 | TOUR | 180 | RL | 5 | EUR | 5 |
| NA31 | NA31 | E60 | 520I | M54 | HECK | MECH | 22.00 | LIM | 125 | LL | 4 | EUR | 5 |
| NA32 | NA32 | E60 | 520I | M54 | HECK | MECH | 22.00 | LIM | 125 | RL | 4 | EUR | 5 |
| NA34 | NA34 | E60 | 520I | M54 | HECK | MECH | 22.00 | LIM | 125 | RL | 4 | MYS | 5 |
| NA36 | NA36 | E60 | 520I | M54 | HECK | MECH | 22.00 | LIM | 125 | LL | 4 | EGY | 5 |
| NA37 | NA37 | E60 | 520I | M54 | HECK | MECH | 22.00 | LIM | 125 | RL | 4 | IDN | 5 |
| NA38 | NA38 | E60 | 525I | M54 | HECK | MECH | 24.00 | LIM | 140 | RL | 4 | THA | 5 |
| NA39 | NA39 | E60 | 520I | M54 | HECK | MECH | 22.00 | LIM | 125 | LL | 4 | CHN | 5 |
| NA51 | NA51 | E60 | 525I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | EUR | 5 |
| NA52 | NA52 | E60 | 525I | M54 | HECK | MECH | 25.00 | LIM | 141 | RL | 4 | EUR | 5 |
| NA53 | NA53 | E60 | 525I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | USA | 5 |
| NA54 | NA54 | E60 | 525I | M54 | HECK | MECH | 25.00 | LIM | 141 | RL | 4 | MYS | 5 |
| NA55 | NA55 | E60 | 525I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | VNM | 5 |
| NA56 | NA56 | E60 | 525I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | EGY | 5 |
| NA57 | NA57 | E60 | 525I | M54 | HECK | MECH | 25.00 | LIM | 141 | RL | 4 | IDN | 5 |
| NA58 | NA58 | E60 | 525I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | RUS | 5 |
| NA59 | NA59 | E60 | 525I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | PHL | 5 |
| NA71 | NA71 | E60 | 530I | M54 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | EUR | 5 |
| NA72 | NA72 | E60 | 530I | M54 | HECK | MECH | 30.00 | LIM | 170 | RL | 4 | EUR | 5 |
| NA73 | NA73 | E60 | 530I | M54 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | USA | 5 |
| NA74 | NA74 | E60 | 530I | M54 | HECK | MECH | 30.00 | LIM | 170 | RL | 4 | MYS | 5 |
| NA76 | NA76 | E60 | 530I | M54 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | EGY | 5 |
| NA77 | NA77 | E60 | 530I | M54 | HECK | MECH | 30.00 | LIM | 170 | RL | 4 | IDN | 5 |
| NA78 | NA78 | E60 | 530I | M54 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | RUS | 5 |
| NA79 | NA79 | E60 | 530I | M54 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | CHN | 5 |
| NA98 | NA98 | E60 | 525I | M54 | HECK | MECH | 25.00 | LIM | 141 | LL | 4 | CHN | 5 |
| NA99 | NA99 | E60 | 520I | M54 | HECK | MECH | 22.00 | LIM | 125 | RL | 4 | THA | 5 |
| NB11 | NB11 | E60 | 540I | N62/TU | HECK | MECH | 40.00 | LIM | 220 | LL | 4 | EUR | 5 |
| NB12 | NB12 | E60 | 540I | N62/TU | HECK | MECH | 40.00 | LIM | 220 | RL | 4 | EUR | 5 |
| NB31 | NB31 | E60 | 545I | N62 | HECK | MECH | 44.00 | LIM | 245 | LL | 4 | EUR | 5 |
| NB32 | NB32 | E60 | 545I | N62 | HECK | MECH | 44.00 | LIM | 245 | RL | 4 | EUR | 5 |
| NB33 | NB33 | E60 | 545I | N62 | HECK | MECH | 44.00 | LIM | 245 | LL | 4 | USA | 5 |
| NB51 | NB51 | E60 | 550I | N62/TU | HECK | MECH | 48.00 | LIM | 270 | LL | 4 | EUR | 5 |
| NB52 | NB52 | E60 | 550I | N62/TU | HECK | MECH | 48.00 | LIM | 270 | RL | 4 | EUR | 5 |
| NB53 | NB53 | E60 | 550I | N62/TU | HECK | MECH | 48.00 | LIM | 270 | LL | 4 | USA | 5 |
| NB91 | NB91 | E60 | M5 | S85 | HECK | MECH | 50.00 | LIM | 373 | LL | 4 | EUR | 5 |
| NB92 | NB92 | E60 | M5 | S85 | HECK | MECH | 50.00 | LIM | 373 | RL | 4 | EUR | 5 |
| NB93 | NB93 | E60 | M5 | S85 | HECK | MECH | 50.00 | LIM | 373 | LL | 4 | USA | 5 |
| NC31 | NC31 | E60 | 520D OL | M47/T2 | HECK | MECH | 20.00 | LIM | 120 | LL | 4 | EUR | 5 |
| NC32 | NC32 | E60 | 520D OL | M47/T2 | HECK | MECH | 20.00 | LIM | 120 | RL | 4 | EUR | 5 |
| NC37 | NC37 | E60 | 520D OL | M47/T2 | HECK | MECH | 20.00 | LIM | 120 | RL | 4 | THA | 5 |
| NC51 | NC51 | E60 | 525D | M57/TU | HECK | MECH | 25.00 | LIM | 130 | LL | 4 | EUR | 5 |
| NC52 | NC52 | E60 | 525D | M57/TU | HECK | MECH | 25.00 | LIM | 130 | RL | 4 | EUR | 5 |
| NC71 | NC71 | E60 | 530D | M57/TU | HECK | MECH | 30.00 | LIM | 160 | LL | 4 | EUR | 5 |
| NC72 | NC72 | E60 | 530D | M57/TU | HECK | MECH | 30.00 | LIM | 150 | RL | 4 | EUR | 5 |
| NC91 | NC91 | E60 | 535D | M57X | HECK | MECH | 30.00 | LIM | 200 | LL | 4 | EUR | 5 |
| NC92 | NC92 | E60 | 535D | M57X | HECK | MECH | 30.00 | LIM | 200 | RL | 4 | EUR | 5 |
| ND71 | ND71 | E60 | 530I | N53 | HECK | MECH | 30.00 | LIM | 200 | LL | 4 | EUR | 5 |
| ND72 | ND72 | E60 | 530I | N53 | HECK | MECH | 30.00 | LIM | 200 | RL | 4 | EUR | 5 |
| ND75 | ND75 | E60 | 530I | N52K | HECK | MECH | 30.00 | LIM | 200 | RL | 4 | IND | 5 |
| ND79 | ND79 | E60 | 530LI | N52K | HECK | MECH | 30.00 | LIM | 200 | LL | 4 | CHN | 5 |
| NE31 | NE31 | E60 | 523I UL | N52 | HECK | MECH | 25.00 | LIM | 130 | LL | 4 | EUR | 5 |
| NE32 | NE32 | E60 | 523I UL | N52 | HECK | MECH | 25.00 | LIM | 130 | RL | 4 | EUR | 5 |
| NE34 | NE34 | E60 | 523I UL | N52 | HECK | MECH | 25.00 | LIM | 130 | RL | 4 | MYS | 5 |
| NE36 | NE36 | E60 | 523I UL | N52 | HECK | MECH | 25.00 | LIM | 130 | LL | 4 | EGY | 5 |
| NE37 | NE37 | E60 | 523I UL | N52 | HECK | MECH | 25.00 | LIM | 130 | RL | 4 | IDN | 5 |
| NE38 | NE38 | E60 | 523I UL | N52 | HECK | MECH | 25.00 | LIM | 125 | RL | 4 | THA | 5 |
| NE39 | NE39 | E60 | 523I UL | N52 | HECK | MECH | 25.00 | LIM | 130 | LL | 4 | CHN | 5 |
| NE51 | NE51 | E60 | 525I OL | N52 | HECK | MECH | 25.00 | LIM | 160 | LL | 4 | EUR | 5 |
| NE52 | NE52 | E60 | 525I OL | N52 | HECK | MECH | 25.00 | LIM | 160 | RL | 4 | EUR | 5 |
| NE53 | NE53 | E60 | 525I UL | N52 | HECK | MECH | 30.00 | LIM | 160 | LL | 4 | USA | 5 |
| NE54 | NE54 | E60 | 525I OL | N52 | HECK | MECH | 25.00 | LIM | 160 | RL | 4 | MYS | 5 |
| NE56 | NE56 | E60 | 525I OL | N52 | HECK | MECH | 25.00 | LIM | 160 | LL | 4 | EGY | 5 |
| NE58 | NE58 | E60 | 525I | N52 | HECK | MECH | 25.00 | LIM | 160 | RL | 4 | THA | 5 |
| NE59 | NE59 | E60 | 525I OL | N52 | HECK | MECH | 25.00 | LIM | 160 | LL | 4 | RUS | 5 |
| NE71 | NE71 | E60 | 530I | N52 | HECK | MECH | 30.00 | LIM | 190 | LL | 4 | EUR | 5 |
| NE72 | NE72 | E60 | 530I | N52 | HECK | MECH | 30.00 | LIM | 190 | RL | 4 | EUR | 5 |
| NE73 | NE73 | E60 | 530I | N52 | HECK | MECH | 30.00 | LIM | 190 | LL | 4 | USA | 5 |
| NE74 | NE74 | E60 | 530I | N52 | HECK | MECH | 30.00 | LIM | 190 | RL | 4 | MYS | 5 |
| NE76 | NE76 | E60 | 530I | N52 | HECK | MECH | 30.00 | LIM | 190 | LL | 4 | EGY | 5 |
| NE77 | NE77 | E60 | 530I | N52 | HECK | MECH | 30.00 | LIM | 190 | RL | 4 | IDN | 5 |
| NE78 | NE78 | E60 | 530I | N52 | HECK | MECH | 30.00 | LIM | 190 | LL | 4 | RUS | 5 |
| NE79 | NE79 | E60 | 530I | N52 | HECK | MECH | 30.00 | LIM | 190 | LL | 4 | CHN | 5 |
| NE98 | NE98 | E60 | 525I OL | N52 | HECK | MECH | 25.00 | LIM | 160 | LL | 4 | CHN | 5 |
| NF31 | NF31 | E60 | 525XI OL | N52 | ALLR | MECH | 25.00 | LIM | 160 | LL | 4 | EUR | 5 |
| NF33 | NF33 | E60 | 525XI UL | N52 | ALLR | MECH | 30.00 | LIM | 160 | LL | 4 | USA | 5 |
| NF38 | NF38 | E60 | 525XI OL | N52 | ALLR | MECH | 25.00 | LIM | 160 | LL | 4 | RUS | 5 |
| NF71 | NF71 | E60 | 530XI | N52 | ALLR | MECH | 30.00 | LIM | 190 | LL | 4 | EUR | 5 |
| NF73 | NF73 | E60 | 530XI | N52 | ALLR | MECH | 30.00 | LIM | 190 | LL | 4 | USA | 5 |
| NF78 | NF78 | E60 | 530XI | N52 | ALLR | MECH | 30.00 | LIM | 190 | LL | 4 | RUS | 5 |
| NG11 | NG11 | E61 | 520I | N43 | HECK | MECH | 20.00 | TOUR | 120 | LL | 5 | EUR | 5 |
| NG12 | NG12 | E61 | 520I | N43 | HECK | MECH | 20.00 | TOUR | 120 | RL | 5 | EUR | 5 |
| NG51 | NG51 | E61 | 525I | M54 | HECK | MECH | 25.00 | TOUR | 141 | LL | 5 | EUR | 5 |
| NG52 | NG52 | E61 | 525I | M54 | HECK | MECH | 25.00 | TOUR | 141 | RL | 5 | EUR | 5 |
| NH31 | NH31 | E61 | 545I | N62 | HECK | MECH | 44.00 | TOUR | 245 | LL | 5 | EUR | 5 |
| NH32 | NH32 | E61 | 545I | N62 | HECK | MECH | 44.00 | TOUR | 245 | RL | 5 | EUR | 5 |
| NH51 | NH51 | E61 | 550I | N62/TU | HECK | MECH | 48.00 | TOUR | 270 | LL | 5 | EUR | 5 |
| NH52 | NH52 | E61 | 550I | N62/TU | HECK | MECH | 48.00 | TOUR | 270 | RL | 5 | EUR | 5 |
| NJ31 | NJ31 | E61 | 520D OL | M47/T2 | HECK | MECH | 20.00 | TOUR | 120 | LL | 5 | EUR | 5 |
| NJ32 | NJ32 | E61 | 520D OL | M47/T2 | HECK | MECH | 20.00 | TOUR | 120 | RL | 5 | EUR | 5 |
| NJ51 | NJ51 | E61 | 525D | M57/TU | HECK | MECH | 25.00 | TOUR | 130 | LL | 5 | EUR | 5 |
| NJ52 | NJ52 | E61 | 525D | M57/TU | HECK | MECH | 25.00 | TOUR | 130 | RL | 5 | EUR | 5 |
| NJ71 | NJ71 | E61 | 530D | M57/TU | HECK | MECH | 30.00 | TOUR | 160 | LL | 5 | EUR | 5 |
| NJ72 | NJ72 | E61 | 530D | M57/TU | HECK | MECH | 30.00 | TOUR | 160 | RL | 5 | EUR | 5 |
| NJ91 | NJ91 | E61 | 535D | M57X | HECK | MECH | 30.00 | TOUR | 200 | LL | 5 | EUR | 5 |
| NJ92 | NJ92 | E61 | 535D | M57X | HECK | MECH | 30.00 | TOUR | 200 | RL | 5 | EUR | 5 |
| NK71 | NK71 | E61 | 530I | N53 | HECK | MECH | 30.00 | TOUR | 200 | LL | 5 | EUR | 5 |
| NK72 | NK72 | E61 | 530I | N53 | HECK | MECH | 30.00 | TOUR | 200 | RL | 5 | EUR | 5 |
| NL31 | NL31 | E61 | 523I UL | N52 | HECK | MECH | 25.00 | TOUR | 130 | LL | 5 | EUR | 5 |
| NL32 | NL32 | E61 | 523I UL | N52 | HECK | MECH | 25.00 | TOUR | 130 | RL | 5 | EUR | 5 |
| NL51 | NL51 | E61 | 525I OL | N52 | HECK | MECH | 25.00 | TOUR | 160 | LL | 5 | EUR | 5 |
| NL52 | NL52 | E61 | 525I OL | N52 | HECK | MECH | 25.00 | TOUR | 160 | RL | 5 | EUR | 5 |
| NL71 | NL71 | E61 | 530I | N52 | HECK | MECH | 30.00 | TOUR | 190 | LL | 5 | EUR | 5 |
| NL72 | NL72 | E61 | 530I | N52 | HECK | MECH | 30.00 | TOUR | 190 | RL | 5 | EUR | 5 |
| NM71 | NM71 | E60 | 530XD | M57/T2 | ALLR | MECH | 30.00 | LIM | 170 | LL | 4 | EUR | 5 |
| NN51 | NN51 | E61 | 525XI OL | N52 | ALLR | MECH | 25.00 | TOUR | 160 | LL | 5 | EUR | 5 |
| NN71 | NN71 | E61 | 530XI | N52 | ALLR | MECH | 30.00 | TOUR | 190 | LL | 5 | EUR | 5 |
| NN73 | NN73 | E61 | 530XI | N52 | ALLR | MECH | 30.00 | TOUR | 190 | LL | 5 | USA | 5 |
| NP71 | NP71 | E61 | 530XD | M57/T2 | ALLR | MECH | 30.00 | TOUR | 170 | LL | 5 | EUR | 5 |
| NR11 | NR11 | E60 | 523LI | N52 | HECK | MECH | 25.00 | LIM | 130 | LL | 4 | EUR | 5 |
| NR31 | NR31 | E60 | 525LI | N52 | HECK | MECH | 25.00 | LIM | 160 | LL | 4 | EUR | 5 |
| NR51 | NR51 | E60 | 530LI | N52 | HECK | MECH | 30.00 | LIM | 190 | LL | 4 | EUR | 5 |
| NR71 | NR71 | E60 | 530D | M57/T2 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | EUR | 5 |
| NR72 | NR72 | E60 | 530D | M57/T2 | HECK | MECH | 30.00 | LIM | 170 | RL | 4 | EUR | 5 |
| NS71 | NS71 | E61 | 530D | M57/T2 | HECK | MECH | 30.00 | TOUR | 170 | LL | 5 | EUR | 5 |
| NS72 | NS72 | E61 | 530D | M57/T2 | HECK | MECH | 30.00 | TOUR | 170 | RL | 5 | EUR | 5 |
| NT11 | NT11 | E60 | 520I OL | N46T | HECK | MECH | 20.00 | LIM | 115 | LL | 4 | EUR | 5 |
| NT12 | NT12 | E60 | 520I OL | N46T | HECK | MECH | 20.00 | LIM | 115 | RL | 4 | EUR | 5 |
| NT31 | NT31 | E60 | 520I OL | N43 | HECK | MECH | 20.00 | LIM | 125 | LL | 4 | EUR | 5 |
| NT32 | NT32 | E60 | 520I OL | N43 | HECK | MECH | 20.00 | LIM | 125 | RL | 4 | EUR | 5 |
| NU11 | NU11 | E60 | 523I UL | N52K | HECK | MECH | 25.00 | LIM | 140 | LL | 4 | EUR | 5 |
| NU12 | NU12 | E60 | 523I UL | N52K | HECK | MECH | 25.00 | LIM | 140 | RL | 4 | EUR | 5 |
| NU14 | NU14 | E60 | 523I UL | N52K | HECK | MECH | 25.00 | LIM | 140 | RL | 4 | MYS | 5 |
| NU15 | NU15 | E60 | 523LI | N52 | HECK | MECH | 25.00 | LIM | 130 | LL | 4 | CHN | 5 |
| NU16 | NU16 | E60 | 523I UL | N52K | HECK | MECH | 25.00 | LIM | 140 | LL | 4 | EGY | 5 |
| NU17 | NU17 | E60 | 523I UL | N52K | HECK | MECH | 25.00 | LIM | 140 | RL | 4 | IDN | 5 |
| NU18 | NU18 | E60 | 523I UL | N52K | HECK | MECH | 25.00 | LIM | 140 | RL | 4 | THA | 5 |
| NU31 | NU31 | E60 | 523I UL | N53 | HECK | MECH | 25.00 | LIM | 140 | LL | 4 | EUR | 5 |
| NU32 | NU32 | E60 | 523I UL | N53 | HECK | MECH | 25.00 | LIM | 140 | RL | 4 | EUR | 5 |
| NU35 | NU35 | E60 | 523I UL | N52K | HECK | MECH | 25.00 | LIM | 140 | RL | 4 | IND | 5 |
| NU39 | NU39 | E60 | 523LI | N52K | HECK | MECH | 25.00 | LIM | 130 | LL | 4 | CHN | 5 |
| NU51 | NU51 | E60 | 525I OL | N52K | HECK | MECH | 25.00 | LIM | 160 | LL | 4 | EUR | 5 |
| NU52 | NU52 | E60 | 525I OL | N52K | HECK | MECH | 25.00 | LIM | 160 | RL | 4 | EUR | 5 |
| NU53 | NU53 | E60 | 528I ML | N52K | HECK | MECH | 30.00 | LIM | 172 | LL | 4 | USA | 5 |
| NU54 | NU54 | E60 | 525I OL | N52K | HECK | MECH | 25.00 | LIM | 160 | RL | 4 | MYS | 5 |
| NU55 | NU55 | E60 | 525I OL | N52K | HECK | MECH | 25.00 | LIM | 160 | LL | 4 | RUS | 5 |
| NU56 | NU56 | E60 | 525I OL | N52K | HECK | MECH | 25.00 | LIM | 160 | LL | 4 | EGY | 5 |
| NU57 | NU57 | E60 | 525LI | N52 | HECK | MECH | 25.00 | LIM | 160 | LL | 4 | CHN | 5 |
| NU58 | NU58 | E60 | 525I OL | N52K | HECK | MECH | 25.00 | LIM | 160 | RL | 4 | THA | 5 |
| NU71 | NU71 | E60 | 525I UL | N53 | HECK | MECH | 30.00 | LIM | 160 | LL | 4 | EUR | 5 |
| NU72 | NU72 | E60 | 525I UL | N53 | HECK | MECH | 30.00 | LIM | 160 | RL | 4 | EUR | 5 |
| NU75 | NU75 | E60 | 525I OL | N52K | HECK | MECH | 25.00 | LIM | 160 | RL | 4 | IND | 5 |
| NU79 | NU79 | E60 | 525LI | N52K | HECK | MECH | 25.00 | LIM | 160 | LL | 4 | CHN | 5 |
| NU91 | NU91 | E60 | 530I | N52K | HECK | MECH | 30.00 | LIM | 200 | LL | 4 | EUR | 5 |
| NU92 | NU92 | E60 | 530I | N52K | HECK | MECH | 30.00 | LIM | 200 | RL | 4 | EUR | 5 |
| NU93 | NU93 | E60 | 530I | N52K | HECK | MECH | 30.00 | LIM | 190 | LL | 4 | USA | 5 |
| NU94 | NU94 | E60 | 530I | N52K | HECK | MECH | 30.00 | LIM | 200 | RL | 4 | MYS | 5 |
| NU95 | NU95 | E60 | 530I | N52K | HECK | MECH | 30.00 | LIM | 200 | LL | 4 | RUS | 5 |
| NU96 | NU96 | E60 | 530I | N52K | HECK | MECH | 30.00 | LIM | 200 | LL | 4 | EGY | 5 |
| NU97 | NU97 | E60 | 530I | N52K | HECK | MECH | 30.00 | LIM | 200 | RL | 4 | IDN | 5 |
| NU98 | NU98 | E60 | 530LI | N52 | HECK | MECH | 30.00 | LIM | 190 | LL | 4 | CHN | 5 |
| NV13 | NV13 | E60 | 528XI ML | N52K | ALLR | MECH | 30.00 | LIM | 172 | LL | 4 | USA | 5 |
| NV31 | NV31 | E60 | 525XI UL | N53 | ALLR | MECH | 30.00 | LIM | 160 | LL | 4 | EUR | 5 |
| NV51 | NV51 | E60 | 530XI | N52K | ALLR | MECH | 30.00 | LIM | 200 | LL | 4 | EUR | 5 |
| NV53 | NV53 | E60 | 530XI | N52K | ALLR | MECH | 30.00 | LIM | 190 | LL | 4 | USA | 5 |
| NV58 | NV58 | E60 | 530XI | N52K | ALLR | MECH | 30.00 | LIM | 200 | LL | 4 | RUS | 5 |
| NV71 | NV71 | E60 | 530XI | N53 | ALLR | MECH | 30.00 | LIM | 200 | LL | 4 | EUR | 5 |
| NV93 | NV93 | E60 | 535XI | N54 | ALLR | MECH | 30.00 | LIM | 225 | LL | 4 | USA | 5 |
| NW13 | NW13 | E60 | 535I | N54 | HECK | MECH | 30.00 | LIM | 225 | LL | 4 | USA | 5 |
| NW31 | NW31 | E60 | 540I | N62/TU | HECK | MECH | 40.00 | LIM | 220 | LL | 4 | EUR | 5 |
| NW32 | NW32 | E60 | 540I | N62/TU | HECK | MECH | 40.00 | LIM | 220 | RL | 4 | EUR | 5 |
| NW51 | NW51 | E60 | 550I | N62/TU | HECK | MECH | 48.00 | LIM | 270 | LL | 4 | EUR | 5 |
| NW52 | NW52 | E60 | 550I | N62/TU | HECK | MECH | 48.00 | LIM | 270 | RL | 4 | EUR | 5 |
| NW53 | NW53 | E60 | 550I | N62/TU | HECK | MECH | 48.00 | LIM | 270 | LL | 4 | USA | 5 |
| NX11 | NX11 | E60 | 520D OL | M47/T2 | HECK | MECH | 20.00 | LIM | 120 | LL | 4 | EUR | 5 |
| NX12 | NX12 | E60 | 520D OL | M47/T2 | HECK | MECH | 20.00 | LIM | 120 | RL | 4 | EUR | 5 |
| NX17 | NX17 | E60 | 520D OL | M47/T2 | HECK | MECH | 20.00 | LIM | 120 | RL | 4 | THA | 5 |
| NX31 | NX31 | E60 | 520D OL | N47 | HECK | MECH | 20.00 | LIM | 130 | LL | 4 | EUR | 5 |
| NX32 | NX32 | E60 | 520D OL | N47 | HECK | MECH | 20.00 | LIM | 130 | RL | 4 | EUR | 5 |
| NX37 | NX37 | E60 | 520D OL | N47 | HECK | MECH | 20.00 | LIM | 130 | RL | 4 | THA | 5 |
| NX51 | NX51 | E60 | 525D UL | M57/T2 | HECK | MECH | 30.00 | LIM | 145 | LL | 4 | EUR | 5 |
| NX52 | NX52 | E60 | 525D UL | M57/T2 | HECK | MECH | 30.00 | LIM | 145 | RL | 4 | EUR | 5 |
| NX55 | NX55 | E60 | 525D UL | M57/T2 | HECK | MECH | 30.00 | LIM | 145 | RL | 4 | IND | 5 |
| NX71 | NX71 | E60 | 530D | M57/T2 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | EUR | 5 |
| NX72 | NX72 | E60 | 530D | M57/T2 | HECK | MECH | 30.00 | LIM | 170 | RL | 4 | EUR | 5 |
| NX91 | NX91 | E60 | 535D | M57Y | HECK | MECH | 30.00 | LIM | 210 | LL | 4 | EUR | 5 |
| NX92 | NX92 | E60 | 535D | M57Y | HECK | MECH | 30.00 | LIM | 210 | RL | 4 | EUR | 5 |
| NY51 | NY51 | E60 | 525XD UL | M57/T2 | ALLR | MECH | 30.00 | LIM | 145 | LL | 4 | EUR | 5 |
| NY71 | NY71 | E60 | 530XD | M57/T2 | ALLR | MECH | 30.00 | LIM | 170 | LL | 4 | EUR | 5 |
| NZ11 | NZ11 | E60 | 523LI | N52K | HECK | MECH | 25.00 | LIM | 130 | LL | 4 | EUR | 5 |
| NZ31 | NZ31 | E60 | 525LI | N52K | HECK | MECH | 25.00 | LIM | 160 | LL | 4 | EUR | 5 |
| NZ51 | NZ51 | E60 | 530LI | N52K | HECK | MECH | 30.00 | LIM | 200 | LL | 4 | EUR | 5 |
| PA31 | PA31 | E83 | X3 2.0I | N46 | ALLR | MECH | 20.00 | GEFZG | 110 | LL | 5 | EUR | 3 |
| PA32 | PA32 | E83 | X3 2.0I | N46 | ALLR | MECH | 20.00 | GEFZG | 110 | RL | 5 | EUR | 3 |
| PA71 | PA71 | E83 | X3 2.5I | M54 | ALLR | MECH | 25.00 | GEFZG | 141 | LL | 5 | EUR | 3 |
| PA72 | PA72 | E83 | X3 2.5I | M54 | ALLR | MECH | 25.00 | GEFZG | 141 | RL | 5 | EUR | 3 |
| PA73 | PA73 | E83 | X3 2.5I | M54 | ALLR | MECH | 25.00 | GEFZG | 141 | LL | 5 | USA | 3 |
| PA74 | PA74 | E83 | X3.2.5I | M54 | ALLR | MECH | 25.00 | GEFZG | 141 | RL | 5 | THA | 3 |
| PA75 | PA75 | E83 | X3 2.5I | M54 | ALLR | MECH | 25.00 | GEFZG | 141 | RL | 5 | THA | 3 |
| PA76 | PA76 | E83 | X3 2.5I | M54 | ALLR | MECH | 25.00 | GEFZG | 141 | LL | 5 | EGY | 3 |
| PA91 | PA91 | E83 | X3 3.0I | M54 | ALLR | MECH | 30.00 | GEFZG | 170 | LL | 5 | EUR | 3 |
| PA92 | PA92 | E83 | X3 3.0I | M54 | ALLR | MECH | 30.00 | GEFZG | 170 | RL | 5 | EUR | 3 |
| PA93 | PA93 | E83 | X3 3.0I | M54 | ALLR | MECH | 30.00 | GEFZG | 170 | LL | 5 | USA | 3 |
| PA96 | PA96 | E83 | X3 3.0I | M54 | ALLR | MECH | 30.00 | GEFZG | 170 | LL | 5 | EGY | 3 |
| PB11 | PB11 | E83 | X3 2.0D | M47/T2 | ALLR | MECH | 20.00 | GEFZG | 110 | LL | 5 | EUR | 3 |
| PB12 | PB12 | E83 | X3 2.0D | M47/T2 | ALLR | MECH | 20.00 | GEFZG | 110 | RL | 5 | EUR | 3 |
| PB51 | PB51 | E83 | X3 3.0D | M57/TU | ALLR | MECH | 30.00 | GEFZG | 150 | LL | 5 | EUR | 3 |
| PC31 | PC31 | E83 | X3 2.0I | N46 | ALLR | MECH | 20.00 | GEFZG | 110 | LL | 5 | EUR | 3 |
| PC32 | PC32 | E83 | X3 2.0I | N46T | ALLR | MECH | 20.00 | GEFZG | 115 | RL | 5 | EUR | 3 |
| PC32 | PC32 | E83 | X3 2.0I | N46 | ALLR | MECH | 20.00 | GEFZG | 110 | RL | 5 | EUR | 3 |
| PC71 | PC71 | E83 | X3 2.5SI | N52K | ALLR | MECH | 25.00 | GEFZG | 160 | LL | 5 | EUR | 3 |
| PC72 | PC72 | E83 | X3 2.5SI | N52K | ALLR | MECH | 25.00 | GEFZG | 160 | RL | 5 | EUR | 3 |
| PC73 | PC73 | E83 | X3 3.0I | N52K | ALLR | MECH | 30.00 | GEFZG | 160 | LL | 5 | USA | 3 |
| PC75 | PC75 | E83 | X3 2.5I | N52K | ALLR | MECH | 25.00 | GEFZG | 160 | RL | 5 | THA | 3 |
| PC76 | PC76 | E83 | X3 2.5I | N52K | ALLR | MECH | 25.00 | GEFZG | 160 | LL | 5 | EGY | 3 |
| PC78 | PC78 | E83 | X3 2.5SI | N52K | ALLR | MECH | 25.00 | GEFZG | 160 | LL | 5 | RUS | 3 |
| PC91 | PC91 | E83 | X3 3.0SI | N52K | ALLR | MECH | 30.00 | GEFZG | 200 | LL | 5 | EUR | 3 |
| PC92 | PC92 | E83 | X3 3.0SI | N52K | ALLR | MECH | 30.00 | GEFZG | 200 | RL | 5 | EUR | 3 |
| PC93 | PC93 | E83 | X3 3.0SI | N52K | ALLR | MECH | 30.00 | GEFZG | 194 | LL | 5 | USA | 3 |
| PC96 | PC96 | E83 | X3 3.0I | N52K | ALLR | MECH | 30.00 | GEFZG | 200 | LL | 5 | EGY | 3 |
| PC98 | PC98 | E83 | X3 3.0SI | N52K | ALLR | MECH | 30.00 | GEFZG | 200 | LL | 5 | RUS | 3 |
| PD11 | PD11 | E83 | X3 2.0D | M47/T2 | ALLR | MECH | 20.00 | GEFZG | 110 | LL | 5 | EUR | 3 |
| PD12 | PD12 | E83 | X3 2.0D | M47/T2 | ALLR | MECH | 20.00 | GEFZG | 110 | RL | 5 | EUR | 3 |
| PD51 | PD51 | E83 | X3 3.0D | M57/T2 | ALLR | MECH | 30.00 | GEFZG | 160 | LL | 5 | EUR | 3 |
| PD52 | PD52 | E83 | X3 3.0D | M57/T2 | ALLR | MECH | 30.00 | GEFZG | 160 | RL | 5 | EUR | 3 |
| PD71 | PD71 | E83 | X3 3.0SD | M57Y | ALLR | MECH | 30.00 | GEFZG | 210 | LL | 5 | EUR | 3 |
| PD72 | PD72 | E83 | X3 3.0SD | M57Y | ALLR | MECH | 30.00 | GEFZG | 210 | RL | 5 | EUR | 3 |
| PD91 | PD91 | E83 | X3 3.0D | M57/T2 | ALLR | MECH | 30.00 | GEFZG | 160 | LL | 5 | EUR | 3 |
| PD92 | PD92 | E83 | X3 3.0D | M57/T2 | ALLR | MECH | 30.00 | GEFZG | 160 | RL | 5 | EUR | 3 |
| PE11 | PE11 | E83 | X3 2.0D | N47 | ALLR | MECH | 20.00 | GEFZG | 130 | LL | 5 | EUR | 3 |
| PE12 | PE12 | E83 | X3 2.0D | N47 | ALLR | MECH | 20.00 | GEFZG | 130 | RL | 5 | EUR | 3 |
| PE51 | PE51 | E83 | X3 2.0D | N47 | ALLR | MECH | 20.00 | GEFZG | 100 | LL | 5 | EUR | 3 |
| PE52 | PE52 | E83 | X3 2.0D | N47 | ALLR | MECH | 20.00 | GEFZG | 100 | RL | 5 | EUR | 3 |
| PF11 | PF11 | E90 | 316I | N45T | HECK | MECH | 16.00 | LIM | 85 | LL | 4 | EUR | 3 |
| PF12 | PF12 | E90 | 316I | N45T | HECK | MECH | 16.00 | LIM | 85 | RL | 4 | EUR | 3 |
| PF31 | PF31 | E90 | 316I | N43 | HECK | MECH | 16.00 | LIM | 90 | LL | 4 | EUR | 3 |
| PF32 | PF32 | E90 | 316I | N43 | HECK | MECH | 16.00 | LIM | 90 | RL | 4 | EUR | 3 |
| PF51 | PF51 | E90 | 318I UL | N43 | HECK | MECH | 20.00 | LIM | 105 | LL | 4 | EUR | 3 |
| PF52 | PF52 | E90 | 318I UL | N43 | HECK | MECH | 20.00 | LIM | 105 | RL | 4 | EUR | 3 |
| PF71 | PF71 | E90 | 318I UL | N46T | HECK | MECH | 20.00 | LIM | 100 | LL | 4 | EUR | 3 |
| PF72 | PF72 | E90 | 318I UL | N46T | HECK | MECH | 20.00 | LIM | 100 | RL | 4 | EUR | 3 |
| PG31 | PG31 | E90 | 320I OL | N43 | HECK | MECH | 20.00 | LIM | 125 | LL | 4 | EUR | 3 |
| PG32 | PG32 | E90 | 320I OL | N43 | HECK | MECH | 20.00 | LIM | 125 | RL | 4 | EUR | 3 |
| PG51 | PG51 | E90 | 320I OL | N46T | HECK | MECH | 20.00 | LIM | 115 | LL | 4 | EUR | 3 |
| PG52 | PG52 | E90 | 320I OL | N46T | HECK | MECH | 20.00 | LIM | 115 | RL | 4 | EUR | 3 |
| PG55 | PG55 | E90 | 320I OL | N46T | HECK | MECH | 20.00 | LIM | 115 | LL | 4 | EUR | 3 |
| PG56 | PG56 | E90 | 320I OL | N46T | HECK | MECH | 20.00 | LIM | 115 | RL | 4 | EUR | 3 |
| PG71 | PG71 | E90 | 323I UL | N52K | HECK | MECH | 25.00 | LIM | 140 | LL | 4 | EUR | 3 |
| PG72 | PG72 | E90 | 323I UL | N52K | HECK | MECH | 25.00 | LIM | 140 | RL | 4 | EUR | 3 |
| PG73 | PG73 | E90 | 323I UL | N52K | HECK | MECH | 25.00 | LIM | 140 | LL | 4 | USA | 3 |
| PG75 | PG75 | E90 | 323I UL | N52K | HECK | MECH | 25.00 | LIM | 140 | LL | 4 | EUR | 3 |
| PG76 | PG76 | E90 | 323I UL | N52K | HECK | MECH | 25.00 | LIM | 140 | RL | 4 | EUR | 3 |
| PH11 | PH11 | E90 | 325I OL | N52K | HECK | MECH | 25.00 | LIM | 160 | LL | 4 | EUR | 3 |
| PH12 | PH12 | E90 | 325I OL | N52K | HECK | MECH | 25.00 | LIM | 160 | RL | 4 | EUR | 3 |
| PH15 | PH15 | E90 | 325I OL | N52K | HECK | MECH | 25.00 | LIM | 160 | LL | 4 | EUR | 3 |
| PH16 | PH16 | E90 | 325I OL | N52K | HECK | MECH | 25.00 | LIM | 160 | RL | 4 | EUR | 3 |
| PH31 | PH31 | E90 | 325I UL | N53 | HECK | MECH | 30.00 | LIM | 160 | LL | 4 | EUR | 3 |
| PH32 | PH32 | E90 | 325I UL | N53 | HECK | MECH | 30.00 | LIM | 160 | RL | 4 | EUR | 3 |
| PH51 | PH51 | E90 | 328I ML | N51 | HECK | MECH | 30.00 | LIM | 172 | LL | 4 | EUR | 3 |
| PH53 | PH53 | E90 | 328I ML | N51 | HECK | MECH | 30.00 | LIM | 172 | LL | 4 | USA | 3 |
| PH73 | PH73 | E90 | 328I ML | N52K | HECK | MECH | 30.00 | LIM | 172 | LL | 4 | USA | 3 |
| PH77 | PH77 | E90 | 328I ML | N52K | HECK | MECH | 30.00 | LIM | 172 | LL | 4 | USA | 3 |
| PK11 | PK11 | E90 | 325XI OL | N52K | ALLR | MECH | 25.00 | LIM | 160 | LL | 4 | EUR | 3 |
| PK31 | PK31 | E90 | 325XI UL | N53 | ALLR | MECH | 30.00 | LIM | 160 | LL | 4 | EUR | 3 |
| PK53 | PK53 | E90 | 328XI | N51 | ALLR | MECH | 30.00 | LIM | 172 | LL | 4 | USA | 3 |
| PK73 | PK73 | E90 | 328XI ML | N52K | ALLR | MECH | 30.00 | LIM | 172 | LL | 4 | USA | 3 |
| PL11 | PL11 | E90 | 330XI OL | N53 | ALLR | MECH | 30.00 | LIM | 200 | LL | 4 | EUR | 3 |
| PL31 | PL31 | E90 | 335XI | N54 | ALLR | MECH | 30.00 | LIM | 225 | LL | 4 | EUR | 3 |
| PL33 | PL33 | E90 | 335XI | N54 | ALLR | MECH | 30.00 | LIM | 225 | LL | 4 | USA | 3 |
| PM11 | PM11 | E90 | 330I OL | N53 | HECK | MECH | 30.00 | LIM | 200 | LL | 4 | EUR | 3 |
| PM12 | PM12 | E90 | 330I OL | N53 | HECK | MECH | 30.00 | LIM | 200 | RL | 4 | EUR | 3 |
| PM31 | PM31 | E90 | 330I OL | N52K | HECK | MECH | 30.00 | LIM | 200 | LL | 4 | EUR | 3 |
| PM32 | PM32 | E90 | 330I OL | N52K | HECK | MECH | 30.00 | LIM | 200 | RL | 4 | EUR | 3 |
| PM35 | PM35 | E90 | 330I OL | N52K | HECK | MECH | 30.00 | LIM | 190 | LL | 4 | EUR | 3 |
| PM36 | PM36 | E90 | 330I OL | N52K | HECK | MECH | 30.00 | LIM | 190 | RL | 4 | EUR | 3 |
| PM71 | PM71 | E90 | 335I | N54 | HECK | MECH | 30.00 | LIM | 225 | LL | 4 | EUR | 3 |
| PM72 | PM72 | E90 | 335I | N54 | HECK | MECH | 30.00 | LIM | 225 | RL | 4 | EUR | 3 |
| PM73 | PM73 | E90 | 335I | N54 | HECK | MECH | 30.00 | LIM | 225 | LL | 4 | USA | 3 |
| PM76 | PM76 | E90 | 335I | N54 | HECK | MECH | 30.00 | LIM | 225 | RL | 4 | EUR | 3 |
| PN11 | PN11 | E90 | 318D UL | N47 | HECK | MECH | 20.00 | LIM | 105 | LL | 4 | EUR | 3 |
| PN12 | PN12 | E90 | 318D UL | N47 | HECK | MECH | 20.00 | LIM | 105 | RL | 4 | EUR | 3 |
| PN31 | PN31 | E90 | 320D OL | N47 | HECK | MECH | 20.00 | LIM | 125 | LL | 4 | EUR | 3 |
| PN32 | PN32 | E90 | 320D OL | N47 | HECK | MECH | 20.00 | LIM | 125 | RL | 4 | EUR | 3 |
| PN36 | PN36 | E90 | 320D OL | N47 | HECK | MECH | 20.00 | LIM | 125 | RL | 4 | EUR | 3 |
| PN51 | PN51 | E90 | 325D UL | M57/T2 | HECK | MECH | 30.00 | LIM | 145 | LL | 4 | EUR | 3 |
| PN52 | PN52 | E90 | 325D UL | M57/T2 | HECK | MECH | 30.00 | LIM | 145 | RL | 4 | EUR | 3 |
| PN71 | PN71 | E90 | 335D | M57Y | HECK | MECH | 30.00 | LIM | 210 | LL | 4 | EUR | 3 |
| PN72 | PN72 | E90 | 335D | M57Y | HECK | MECH | 30.00 | LIM | 210 | RL | 4 | EUR | 3 |
| PT11 | PT11 | E61 | 520I OL | N43 | HECK | MECH | 20.00 | TOUR | 125 | LL | 5 | EUR | 5 |
| PT12 | PT12 | E61 | 520I OL | N43 | HECK | MECH | 20.00 | TOUR | 125 | RL | 5 | EUR | 5 |
| PT31 | PT31 | E61 | 520I OL | N46T | HECK | MECH | 20.00 | TOUR | 115 | LL | 5 | EUR | 5 |
| PT32 | PT32 | E61 | 520I OL | N46T | HECK | MECH | 20.00 | TOUR | 115 | RL | 5 | EUR | 5 |
| PT73 | PT73 | E61 | 535XI | N54 | ALLR | MECH | 30.00 | TOUR | 225 | LL | 5 | USA | 5 |
| PU11 | PU11 | E61 | 523I UL | N52K | HECK | MECH | 25.00 | TOUR | 140 | LL | 5 | EUR | 5 |
| PU12 | PU12 | E61 | 523I UL | N52K | HECK | MECH | 25.00 | TOUR | 140 | RL | 5 | EUR | 5 |
| PU31 | PU31 | E61 | 523I UL | N53 | HECK | MECH | 25.00 | TOUR | 140 | LL | 5 | EUR | 5 |
| PU32 | PU32 | E61 | 523I UL | N53 | HECK | MECH | 25.00 | TOUR | 140 | RL | 5 | EUR | 5 |
| PU51 | PU51 | E61 | 525I OL | N52K | HECK | MECH | 25.00 | TOUR | 160 | LL | 5 | EUR | 5 |
| PU52 | PU52 | E61 | 525I OL | N52K | HECK | MECH | 25.00 | TOUR | 160 | RL | 5 | EUR | 5 |
| PU71 | PU71 | E61 | 525I UL | N53 | HECK | MECH | 30.00 | TOUR | 160 | LL | 5 | EUR | 5 |
| PU72 | PU72 | E61 | 525I UL | N53 | HECK | MECH | 30.00 | TOUR | 160 | RL | 5 | EUR | 5 |
| PU91 | PU91 | E61 | 530I | N52K | HECK | MECH | 30.00 | TOUR | 200 | LL | 5 | EUR | 5 |
| PU92 | PU92 | E61 | 530I | N52K | HECK | MECH | 30.00 | TOUR | 200 | RL | 5 | EUR | 5 |
| PV31 | PV31 | E61 | 525XI UL | N53 | ALLR | MECH | 30.00 | TOUR | 160 | LL | 5 | EUR | 5 |
| PV51 | PV51 | E61 | 530XI | N52K | ALLR | MECH | 30.00 | TOUR | 200 | LL | 5 | EUR | 5 |
| PV53 | PV53 | E61 | 530XI | N52K | ALLR | MECH | 30.00 | TOUR | 190 | LL | 5 | USA | 5 |
| PV71 | PV71 | E61 | 530XI | N53 | ALLR | MECH | 30.00 | TOUR | 200 | LL | 5 | EUR | 5 |
| PV91 | PV91 | E61 | M5 | S85 | HECK | MECH | 50.00 | TOUR | 373 | LL | 5 | EUR | 5 |
| PV92 | PV92 | E61 | M5 | S85 | HECK | MECH | 50.00 | TOUR | 373 | RL | 5 | EUR | 5 |
| PW51 | PW51 | E61 | 550I | N62/TU | HECK | MECH | 48.00 | TOUR | 270 | LL | 5 | EUR | 5 |
| PW52 | PW52 | E61 | 550I | N62/TU | HECK | MECH | 48.00 | TOUR | 270 | RL | 5 | EUR | 5 |
| PX11 | PX11 | E61 | 520D OL | M47/T2 | HECK | MECH | 20.00 | TOUR | 120 | LL | 5 | EUR | 5 |
| PX12 | PX12 | E61 | 520D OL | M47/T2 | HECK | MECH | 20.00 | TOUR | 120 | RL | 5 | EUR | 5 |
| PX31 | PX31 | E61 | 520D OL | N47 | HECK | MECH | 20.00 | TOUR | 130 | LL | 5 | EUR | 5 |
| PX32 | PX32 | E61 | 520D OL | N47 | HECK | MECH | 20.00 | TOUR | 130 | RL | 5 | EUR | 5 |
| PX51 | PX51 | E61 | 525D UL | M57/T2 | HECK | MECH | 30.00 | TOUR | 145 | LL | 5 | EUR | 5 |
| PX52 | PX52 | E61 | 525D UL | M57/T2 | HECK | MECH | 30.00 | TOUR | 140 | RL | 5 | EUR | 5 |
| PX52 | PX52 | E61 | 525D UL | M57/T2 | HECK | MECH | 30.00 | TOUR | 150 | RL | 5 | EUR | 5 |
| PX71 | PX71 | E61 | 530D | M57/T2 | HECK | MECH | 30.00 | TOUR | 170 | LL | 5 | EUR | 5 |
| PX72 | PX72 | E61 | 530D | M57/T2 | HECK | MECH | 30.00 | TOUR | 170 | RL | 5 | EUR | 5 |
| PX91 | PX91 | E61 | 535D | M57Y | HECK | MECH | 30.00 | TOUR | 210 | LL | 5 | EUR | 5 |
| PX92 | PX92 | E61 | 535D | M57Y | HECK | MECH | 30.00 | TOUR | 210 | RL | 5 | EUR | 5 |
| PY51 | PY51 | E61 | 525XD UL | M57/T2 | ALLR | MECH | 30.00 | TOUR | 145 | LL | 5 | EUR | 5 |
| PY71 | PY71 | E61 | 530XD | M57/T2 | ALLR | MECH | 30.00 | TOUR | 170 | LL | 5 | EUR | 5 |
| RA11 | RA11 | R50 | MINI ONE | W10 | FRONT | MECH | 14.00 | COUPE | 55 | LL | 3 | EUR | M |
| RA12 | RA12 | R50 | MINI ONE | W10 | FRONT | MECH | 14.00 | COUPE | 55 | RL | 3 | EUR | M |
| RA31 | RA31 | R50 | MINI ONE | W10 | FRONT | MECH | 16.00 | COUPE | 66 | LL | 3 | EUR | M |
| RA32 | RA32 | R50 | MINI ONE | W10 | FRONT | MECH | 16.00 | COUPE | 66 | RL | 3 | EUR | M |
| RA91 | RA91 | R50 | DAMMY | W10 | FRONT | MECH | 16.00 | LIM | 67 | LL | 3 | EUR | M |
| RA92 | RA92 | R50 | DUMMY | W10 | FRONT | MECH | 16.00 | LIM | 67 | RL | 3 | EUR | M |
| RB11 | RB11 | R50 | MINI ONE | W17 | FRONT | MECH | 14.00 | COUPE | 65 | LL | 3 | EUR | M |
| RB12 | RB12 | R50 | MINI ONE | W17 | FRONT | MECH | 14.00 | COUPE | 65 | RL | 3 | EUR | M |
| RC31 | RC31 | R50 | COOPER | W10 | FRONT | MECH | 16.00 | COUPE | 85 | LL | 3 | EUR | M |
| RC32 | RC32 | R50 | COOPER | W10 | FRONT | MECH | 16.00 | COUPE | 85 | RL | 3 | EUR | M |
| RC33 | RC33 | R50 | COOPER | W10 | FRONT | MECH | 16.00 | COUPE | 85 | LL | 3 | USA | M |
| RC91 | RC91 | R50 | DUMMY | W10 | FRONT | MECH | 16.00 | LIM | 85 | LL | 3 | EUR | M |
| RC92 | RC92 | R50 | DUMMY | W10 | FRONT | MECH | 16.00 | LIM | 85 | RL | 3 | EUR | M |
| RC93 | RC93 | R50 | DUMMY | W10 | FRONT | MECH | 16.00 | LIM | 85 | LL | 3 | USA | M |
| RD31 | RD31 | R52 | MINI ONE | W10 | FRONT | MECH | 16.00 | CABRIO | 66 | LL | 2 | EUR | M |
| RD32 | RD32 | R52 | MINI ONE | W10 | FRONT | MECH | 16.00 | CABRIO | 66 | RL | 2 | EUR | M |
| RE31 | RE31 | R53 | COOPER S | W11 | FRONT | MECH | 16.00 | COUPE | 125 | LL | 3 | EUR | M |
| RE32 | RE32 | R53 | COOPER S | W11 | FRONT | MECH | 16.00 | COUPE | 125 | RL | 3 | EUR | M |
| RE33 | RE33 | R53 | COOPER S | W11 | FRONT | MECH | 16.00 | COUPE | 125 | LL | 3 | USA | M |
| RE91 | RE91 | R53 | COOPER S | W11 | FRONT | MECH | 16.00 | COUPE | 160 | LL | 3 | EUR | M |
| RE92 | RE92 | R53 | COOPER S | W11 | FRONT | MECH | 16.00 | COUPE | 160 | RL | 3 | EUR | M |
| RE93 | RE93 | R53 | COOPER S | W11 | FRONT | MECH | 16.00 | COUPE | 160 | LL | 3 | USA | M |
| RF31 | RF31 | R52 | COOPER | W10 | FRONT | MECH | 16.00 | CABRIO | 85 | LL | 2 | EUR | M |
| RF32 | RF32 | R52 | COOPER | W10 | FRONT | MECH | 16.00 | CABRIO | 85 | RL | 2 | EUR | M |
| RF33 | RF33 | R52 | COOPER | W10 | FRONT | MECH | 16.00 | CABRIO | 85 | LL | 2 | USA | M |
| RH31 | RH31 | R52 | COOPER S | W11 | FRONT | MECH | 16.00 | CABRIO | 125 | LL | 2 | EUR | M |
| RH32 | RH32 | R52 | COOPER S | W11 | FRONT | MECH | 16.00 | CABRIO | 125 | RL | 2 | EUR | M |
| RH33 | RH33 | R52 | COOPER S | W11 | FRONT | MECH | 16.00 | CABRIO | 125 | LL | 2 | USA | M |
| RW21 | RW21 | R50 | NIE PORX | W10 | FRONT | AUT | 14.00 | COUPE | 55 | LL | 3 | EUR | M |
| SN21 | SN21 | F07 | 3.0SI | N55 | HECK | AUT | 29.00 | SAT | 235 | LL | 4 | EUR | S |
| SN22 | SN22 | F07 | 3.0SI | N55 | HECK | AUT | 29.00 | SAT | 235 | RL | 2 | EUR | S |
| SN41 | SN41 | F07 | 4.4SI | N63 | HECK | AUT | 44.00 | SAT | 300 | LL | 4 | EUR | S |
| SN42 | SN42 | F07 | 4.4SI | N63 | HECK | AUT | 44.00 | SAT | 300 | RL | 4 | EUR | S |
| SN61 | SN61 | F07 | 3.0D OL | N57 | HECK | AUT | 30.00 | SAT | 180 | LL | 4 | EUR | S |
| SN62 | SN62 | F07 | 3.0D OL | N57 | HECK | AUT | 30.00 | SAT | 180 | RL | 4 | EUR | S |
| SN81 | SN81 | F07 | 3.0SD | N57S | HECK | AUT | 30.00 | SAT | 220 | LL | 4 | EUR | S |
| SN82 | SN82 | F07 | 3.0SD | N57S | HECK | AUT | 30.00 | SAT | 220 | RL | 4 | EUR | S |
| TW71 | TW71 | E81 | 120TIS | N48 | HECK | MECH | 20.00 | COMP | 141 | LL | 3 | EUR | 1 |
| TW72 | TW72 | E81 | 120TIS | N48 | HECK | MECH | 20.00 | COMP | 141 | RL | 3 | EUR | 1 |
| UA11 | UA11 | E81 | 116I | N45T | HECK | MECH | 16.00 | HC | 85 | LL | 3 | EUR | 1 |
| UA12 | UA12 | E81 | 116I | N45T | HECK | MECH | 16.00 | HC | 85 | RL | 3 | EUR | 1 |
| UA31 | UA31 | E81 | 118I UL | N46T | HECK | MECH | 20.00 | HC | 100 | LL | 3 | EUR | 1 |
| UA32 | UA32 | E81 | 118I UL | N46T | HECK | MECH | 20.00 | HC | 100 | RL | 3 | EUR | 1 |
| UA51 | UA51 | E81 | 120I OL | N46T | HECK | MECH | 20.00 | HC | 115 | LL | 3 | EUR | 1 |
| UA52 | UA52 | E81 | 120I OL | N46T | HECK | MECH | 20.00 | HC | 115 | RL | 3 | EUR | 1 |
| UA71 | UA71 | E81 | 120I OL | N43 | HECK | MECH | 20.00 | HC | 125 | LL | 3 | EUR | 1 |
| UA72 | UA72 | E81 | 120I OL | N43 | HECK | MECH | 20.00 | HC | 125 | RL | 3 | EUR | 1 |
| UA91 | UA91 | E81 | IEX-PROT | N42 | HECK | MECH | 20.00 | COMP | 105 | LL | 3 | EUR | 1 |
| UB11 | UB11 | E81 | 130I | N52K | HECK | MECH | 30.00 | HC | 195 | LL | 3 | EUR | 1 |
| UB12 | UB12 | E81 | 130I | N52K | HECK | MECH | 30.00 | HC | 195 | RL | 3 | EUR | 1 |
| UB31 | UB31 | E81 | 118D UL | N47 | HECK | MECH | 20.00 | HC | 105 | LL | 3 | EUR | 1 |
| UB32 | UB32 | E81 | 118D UL | N47 | HECK | MECH | 20.00 | HC | 105 | RL | 3 | EUR | 1 |
| UB51 | UB51 | E81 | 120D OL | N47 | HECK | MECH | 20.00 | HC | 130 | LL | 3 | EUR | 1 |
| UB52 | UB52 | E81 | 120D OL | N47 | HECK | MECH | 20.00 | HC | 130 | RL | 3 | EUR | 1 |
| UB71 | UB71 | E81 | 116I | N43 | HECK | MECH | 16.00 | HC | 90 | LL | 3 | EUR | 1 |
| UB72 | UB72 | E81 | 116I | N43 | HECK | MECH | 16.00 | HC | 90 | RL | 3 | EUR | 1 |
| UB91 | UB91 | E81 | 118I UL | N43 | HECK | MECH | 20.00 | HC | 105 | LL | 3 | EUR | 1 |
| UB92 | UB92 | E81 | 118I UL | N43 | HECK | MECH | 20.00 | HC | 105 | RL | 3 | EUR | 1 |
| UC31 | UC31 | E82 | 125I UL | N52K | HECK | MECH | 30.00 | COUPE | 160 | LL | 2 | EUR | 2 |
| UC32 | UC32 | E82 | 125I UL | N52K | HECK | MECH | 30.00 | COUPE | 160 | RL | 2 | EUR | 2 |
| UC71 | UC71 | E82 | 135IS | N54 | HECK | MECH | 30.00 | COUPE | 225 | LL | 2 | EUR | 2 |
| UC72 | UC72 | E82 | 135IS | N54 | HECK | MECH | 30.00 | COUPE | 225 | RL | 2 | EUR | 2 |
| UC73 | UC73 | E82 | 135IS | N54 | HECK | MECH | 30.00 | COUPE | 225 | LL | 2 | USA | 2 |
| UD11 | UD11 | E87 | 120I OL | N43 | HECK | MECH | 20.00 | SH | 125 | LL | 5 | EUR | 1 |
| UD12 | UD12 | E87 | 120I OL | N43 | HECK | MECH | 20.00 | SH | 125 | RL | 5 | EUR | 1 |
| UD31 | UD31 | E87 | 120I OL | N46T | HECK | MECH | 20.00 | SH | 115 | LL | 5 | EUR | 1 |
| UD32 | UD32 | E87 | 120I OL | N46T | HECK | MECH | 20.00 | SH | 115 | RL | 5 | EUR | 1 |
| UD51 | UD51 | E87 | 130I | N52K | HECK | MECH | 30.00 | SH | 195 | LL | 5 | EUR | 1 |
| UD52 | UD52 | E87 | 130I | N52K | HECK | MECH | 30.00 | SH | 195 | RL | 5 | EUR | 1 |
| UD71 | UD71 | E87 | 118D UL | N47 | HECK | MECH | 20.00 | SH | 105 | LL | 5 | EUR | 1 |
| UD72 | UD72 | E87 | 118D UL | N47 | HECK | MECH | 20.00 | SH | 105 | RL | 5 | EUR | 1 |
| UD91 | UD91 | E87 | 120D OL | N47 | HECK | MECH | 20.00 | SH | 130 | LL | 5 | EUR | 1 |
| UD92 | UD92 | E87 | 120D OL | N47 | HECK | MECH | 20.00 | SH | 130 | RL | 5 | EUR | 1 |
| UE11 | UE11 | E87 | 116I | N45T | HECK | MECH | 16.00 | SH | 85 | LL | 5 | EUR | 1 |
| UE12 | UE12 | E87 | 116I | N45T | HECK | MECH | 16.00 | SH | 85 | RL | 5 | EUR | 1 |
| UE31 | UE31 | E87 | 116I | N43 | HECK | MECH | 16.00 | SH | 90 | LL | 5 | EUR | 1 |
| UE32 | UE32 | E87 | 116I | N43 | HECK | MECH | 16.00 | SH | 90 | RL | 5 | EUR | 1 |
| UE51 | UE51 | E87 | 118I UL | N43 | HECK | MECH | 20.00 | SH | 105 | LL | 5 | EUR | 1 |
| UE52 | UE52 | E87 | 118I UL | N43 | HECK | MECH | 20.00 | SH | 105 | RL | 5 | EUR | 1 |
| UE71 | UE71 | E87 | 118I UL | N46T | HECK | MECH | 20.00 | SH | 100 | LL | 5 | EUR | 1 |
| UE72 | UE72 | E87 | 118I UL | N46T | HECK | MECH | 20.00 | SH | 100 | RL | 5 | EUR | 1 |
| UE91 | UE91 | E87 | IEX-PROT | N42 | HECK | MECH | 20.00 | TOUR | 110 | LL | 5 | EUR | 1 |
| UF11 | UF11 | E87 | 116I | N45 | HECK | MECH | 16.00 | SH | 85 | LL | 5 | EUR | 1 |
| UF12 | UF12 | E87 | 116I | N45 | HECK | MECH | 16.00 | SH | 85 | RL | 5 | EUR | 1 |
| UF31 | UF31 | E87 | 118I UL | N46 | HECK | MECH | 20.00 | SH | 95 | LL | 5 | EUR | 1 |
| UF32 | UF32 | E87 | 118I UL | N46 | HECK | MECH | 20.00 | SH | 95 | RL | 5 | EUR | 1 |
| UF51 | UF51 | E87 | 120I OL | N46 | HECK | MECH | 20.00 | SH | 110 | LL | 5 | EUR | 1 |
| UF52 | UF52 | E87 | 120I OL | N46 | HECK | MECH | 20.00 | SH | 110 | RL | 5 | EUR | 1 |
| UF91 | UF91 | E87 | 130I | N52 | HECK | MECH | 30.00 | SH | 195 | LL | 5 | EUR | 1 |
| UF92 | UF92 | E87 | 130I | N52 | HECK | MECH | 30.00 | SH | 195 | RL | 5 | EUR | 1 |
| UG00 | UG00 | E90 | IEX | N42 | HECK | MECH | 20.00 | LIM | 105 | LL | 4 | EUR | 3 |
| UG01 | UG01 | E91 | IEX | N42 | HECK | MECH | 20.00 | TOUR | 105 | LL | 5 | EUR | 3 |
| UG02 | UG02 | E92 | IEX | N42 | HECK | MECH | 20.00 | COUPE | 105 | LL | 2 | EUR | 3 |
| UG03 | UG03 | E93 | IEX | N42 | HECK | MECH | 20.00 | CABRIO | 105 | LL | 2 | EUR | 3 |
| UG04 | UG04 | E94 | IEX | N42 | HECK | MECH | 20.00 | COMP | 105 | LL | 3 | EUR | 3 |
| UG05 | UG05 | E90 | IEX | N42 | HECK | MECH | 20.00 | LIM | 105 | LL | 4 | EUR | 3 |
| UG06 | UG06 | E87 | PPP | N42 | HECK | MECH | 20.00 | COMP | 105 | LL | 5 | EUR | 1 |
| UG07 | UG07 | E90 | PPP | N42 | HECK | MECH | 20.00 | LIM | 105 | LL | 4 | EUR | 3 |
| UG08 | UG08 | E91 | PPP | N42 | HECK | MECH | 20.00 | TOUR | 105 | LL | 5 | EUR | 3 |
| UG09 | UG09 | E93 | IEX | N42 | HECK | MECH | 20.00 | CABRIO | 105 | LL | 2 | EUR | 3 |
| UG11 | UG11 | E70 | IEX | N53 | ALLR | MECH | 30.00 | GEFZG | 190 | LL | 5 | EUR | 5 |
| UG12 | UG12 | E90 | M3 KVT | S65 | HECK | MECH | 40.00 | LIM | 294 | LL | 4 | EUR | 3 |
| UG13 | UG13 | E93 | PPP | N42 | HECK | MECH | 20.00 | CABRIO | 105 | LL | 2 | EUR | 3 |
| UG16 | UG16 | E70 | PPP | N53 | ALLR | MECH | 30.00 | GEFZG | 190 | LL | 5 | EUR | 5 |
| UG17 | UG17 | E81 | BBG | N45 | HECK | MECH | 16.00 | COUPE | 85 | LL | 3 | EUR | 1 |
| UG18 | UG18 | E88 | EBG | N45 | HECK | MECH | 16.00 | CABRIO | 85 | LL | 2 | EUR | 1 |
| UG19 | UG19 | E88 | BBG | N45 | HECK | MECH | 16.00 | CABRIO | 85 | LL | 2 | EUR | 1 |
| UG20 | UG20 | E82 | PVL | N45 | HECK | MECH | 16.00 | COUPE | 85 | LL | 2 | EUR | 2 |
| UG21 | UG21 | E89 | EBG | N52K | HECK | MECH | 25.00 | ROADST | 160 | LL | 2 | EUR | Z |
| UG31 | UG31 | E87 | 118D UL | M47/T2 | HECK | MECH | 20.00 | SH | 90 | LL | 5 | EUR | 1 |
| UG32 | UG32 | E87 | 118D UL | M47/T2 | HECK | MECH | 20.00 | SH | 90 | RL | 5 | EUR | 1 |
| UG51 | UG51 | E87 | 120D OL | M47/T2 | HECK | MECH | 20.00 | SH | 120 | LL | 5 | EUR | 1 |
| UG52 | UG52 | E87 | 120D OL | M47/T2 | HECK | MECH | 20.00 | SH | 120 | RL | 5 | EUR | 1 |
| UH11 | UH11 | E87 | 123D | N47S | HECK | MECH | 20.00 | SH | 150 | LL | 5 | EUR | 1 |
| UH12 | UH12 | E87 | 123D | N47S | HECK | MECH | 20.00 | SH | 150 | RL | 5 | EUR | 1 |
| UK11 | UK11 | E81 | 123D | N47S | HECK | MECH | 20.00 | HC | 150 | LL | 3 | EUR | 1 |
| UK12 | UK12 | E81 | 123D | N47S | HECK | MECH | 20.00 | HC | 150 | RL | 3 | EUR | 1 |
| UL31 | UL31 | E88 | 116I | N43 | HECK | MECH | 16.00 | CABRIO | 90 | LL | 2 | EUR | 1 |
| UL32 | UL32 | E88 | 116I | N43 | HECK | MECH | 16.00 | CABRIO | 90 | RL | 2 | EUR | 1 |
| UL51 | UL51 | E88 | 120I OL | N46T | HECK | MECH | 20.00 | CABRIO | 115 | LL | 2 | EUR | 1 |
| UL52 | UL52 | E88 | 120I OL | N46T | HECK | MECH | 20.00 | CABRIO | 115 | RL | 2 | EUR | 1 |
| UL73 | UL73 | E88 | 128I ML | N52K | HECK | MECH | 30.00 | CABRIO | 172 | LL | 2 | USA | 1 |
| UL91 | UL91 | E88 | 125I UL | N52K | HECK | MECH | 30.00 | CABRIO | 160 | LL | 2 | EUR | 1 |
| UL92 | UL92 | E88 | 125I UL | N52K | HECK | MECH | 30.00 | CABRIO | 160 | RL | 2 | EUR | 1 |
| UL93 | UL93 | E88 | 130I | N52K | HECK | MECH | 30.00 | CABRIO | 200 | LL | 2 | USA | 1 |
| UM11 | UM11 | E88 | 118I UL | N43 | HECK | MECH | 20.00 | CABRIO | 105 | LL | 2 | EUR | 1 |
| UM12 | UM12 | E88 | 118I UL | N43 | HECK | MECH | 20.00 | CABRIO | 105 | RL | 2 | EUR | 1 |
| UM31 | UM31 | E88 | 118I UL | N46T | HECK | MECH | 20.00 | CABRIO | 100 | LL | 2 | EUR | 1 |
| UM32 | UM32 | E88 | 118I UL | N46T | HECK | MECH | 20.00 | CABRIO | 100 | RL | 2 | EUR | 1 |
| UM51 | UM51 | E88 | 120I OL | N43 | HECK | MECH | 20.00 | CABRIO | 125 | LL | 2 | EUR | 1 |
| UM52 | UM52 | E88 | 120I OL | N43 | HECK | MECH | 20.00 | CABRIO | 125 | RL | 2 | EUR | 1 |
| UM71 | UM71 | E88 | 120D OL | N47 | HECK | MECH | 20.00 | CABRIO | 130 | LL | 2 | EUR | 1 |
| UM72 | UM72 | E88 | 120D OL | N47 | HECK | MECH | 20.00 | CABRIO | 130 | RL | 2 | EUR | 1 |
| UM91 | UM91 | E88 | 118D UL | N47 | HECK | MECH | 20.00 | CABRIO | 105 | LL | 2 | EUR | 1 |
| UM92 | UM92 | E88 | 118D UL | N47 | HECK | MECH | 20.00 | CABRIO | 105 | RL | 2 | EUR | 1 |
| UN13 | UN13 | E88 | 128I ML | N51 | HECK | MECH | 30.00 | CABRIO | 172 | LL | 2 | USA | 1 |
| UN91 | UN91 | E88 | 135IS | N54 | HECK | MECH | 30.00 | CABRIO | 225 | LL | 2 | EUR | 1 |
| UN92 | UN92 | E88 | 135IS | N54 | HECK | MECH | 30.00 | CABRIO | 225 | RL | 2 | EUR | 1 |
| UN93 | UN93 | E88 | 135IS | N54 | HECK | MECH | 30.00 | CABRIO | 225 | LL | 2 | USA | 1 |
| UP11 | UP11 | E88 | 123D | N47S | HECK | MECH | 20.00 | CABRIO | 150 | LL | 2 | EUR | 1 |
| UP12 | UP12 | E88 | 123D | N47S | HECK | MECH | 20.00 | CABRIO | 150 | RL | 2 | EUR | 1 |
| UP73 | UP73 | E82 | 128I ML | N52K | HECK | MECH | 30.00 | COUPE | 172 | LL | 2 | USA | 2 |
| UP93 | UP93 | E82 | 128I ML | N51 | HECK | MECH | 30.00 | COUPE | 172 | LL | 2 | USA | 2 |
| UR31 | UR31 | E82 | 120D OL | N47 | HECK | MECH | 20.00 | COUPE | 130 | LL | 2 | EUR | 2 |
| UR32 | UR32 | E82 | 120D OL | N47 | HECK | MECH | 20.00 | COUPE | 130 | RL | 2 | EUR | 2 |
| UR51 | UR51 | E82 | 123D | N47S | HECK | MECH | 20.00 | COUPE | 150 | LL | 2 | EUR | 2 |
| UR52 | UR52 | E82 | 123D | N47S | HECK | MECH | 20.00 | COUPE | 150 | RL | 2 | EUR | 2 |
| US31 | US31 | E91 | 318I UL | N43 | HECK | MECH | 20.00 | TOUR | 105 | LL | 5 | EUR | 3 |
| US32 | US32 | E91 | 318I UL | N43 | HECK | MECH | 20.00 | TOUR | 105 | RL | 5 | EUR | 3 |
| US51 | US51 | E91 | 318I UL | N46T | HECK | MECH | 20.00 | TOUR | 100 | LL | 5 | EUR | 3 |
| US52 | US52 | E91 | 318I UL | N46T | HECK | MECH | 20.00 | TOUR | 100 | RL | 5 | EUR | 3 |
| US71 | US71 | E91 | 320I OL | N46T | HECK | MECH | 20.00 | TOUR | 115 | LL | 5 | EUR | 3 |
| US72 | US72 | E91 | 320I OL | N46T | HECK | MECH | 20.00 | TOUR | 115 | RL | 5 | EUR | 3 |
| US91 | US91 | E91 | 320I OL | N43 | HECK | MECH | 20.00 | TOUR | 125 | LL | 5 | EUR | 3 |
| US92 | US92 | E91 | 320I OL | N43 | HECK | MECH | 20.00 | TOUR | 125 | RL | 5 | EUR | 3 |
| UT52 | UT52 | E91 | 323I UL | N52K | HECK | MECH | 25.00 | TOUR | 140 | RL | 5 | EUR | 3 |
| UT71 | UT71 | E91 | 325I UL | N53 | HECK | MECH | 30.00 | TOUR | 160 | LL | 5 | EUR | 3 |
| UT72 | UT72 | E91 | 325I UL | N53 | HECK | MECH | 30.00 | TOUR | 160 | RL | 5 | EUR | 3 |
| UT91 | UT91 | E91 | 325I OL | N52K | HECK | MECH | 25.00 | TOUR | 160 | LL | 5 | EUR | 3 |
| UT92 | UT92 | E91 | 325I OL | N52K | HECK | MECH | 25.00 | TOUR | 160 | RL | 5 | EUR | 3 |
| UT93 | UT93 | E91 | 328I ML | N52K | HECK | MECH | 30.00 | TOUR | 172 | LL | 5 | USA | 3 |
| UU31 | UU31 | E91 | 325XI OL | N52K | ALLR | MECH | 25.00 | TOUR | 160 | LL | 5 | EUR | 3 |
| UU33 | UU33 | E91 | 328XI ML | N52K | ALLR | MECH | 30.00 | TOUR | 172 | LL | 5 | USA | 3 |
| UU51 | UU51 | E91 | 325XI UL | N53 | ALLR | MECH | 30.00 | TOUR | 160 | LL | 5 | EUR | 3 |
| UU71 | UU71 | E91 | 330XI OL | N53 | ALLR | MECH | 30.00 | TOUR | 200 | LL | 5 | EUR | 3 |
| UU91 | UU91 | E91 | 335XI | N54 | ALLR | MECH | 30.00 | TOUR | 225 | LL | 5 | EUR | 3 |
| UV31 | UV31 | E91 | 330I OL | N52K | HECK | MECH | 30.00 | TOUR | 200 | LL | 5 | EUR | 3 |
| UV32 | UV32 | E91 | 330I OL | N52K | HECK | MECH | 30.00 | TOUR | 200 | RL | 5 | EUR | 3 |
| UV51 | UV51 | E91 | 330I OL | N53 | HECK | MECH | 30.00 | TOUR | 200 | LL | 5 | EUR | 3 |
| UV52 | UV52 | E91 | 330I OL | N53 | HECK | MECH | 30.00 | TOUR | 200 | RL | 5 | EUR | 3 |
| UV71 | UV71 | E91 | 335I | N54 | HECK | MECH | 30.00 | TOUR | 225 | LL | 5 | EUR | 3 |
| UV72 | UV72 | E91 | 335I | N54 | HECK | MECH | 30.00 | TOUR | 225 | RL | 5 | EUR | 3 |
| UX11 | UX11 | E91 | 318D UL | N47 | HECK | MECH | 20.00 | TOUR | 105 | LL | 5 | EUR | 3 |
| UX12 | UX12 | E91 | 318D UL | N47 | HECK | MECH | 20.00 | TOUR | 105 | RL | 5 | EUR | 3 |
| UX31 | UX31 | E91 | 320D OL | N47 | HECK | MECH | 20.00 | TOUR | 130 | LL | 5 | EUR | 3 |
| UX32 | UX32 | E91 | 320D OL | N47 | HECK | MECH | 20.00 | TOUR | 130 | RL | 5 | EUR | 3 |
| UX51 | UX51 | E91 | 325D UL | M57/T2 | HECK | MECH | 30.00 | TOUR | 145 | LL | 5 | EUR | 3 |
| UX52 | UX52 | E91 | 325D UL | M57/T2 | HECK | MECH | 30.00 | TOUR | 145 | RL | 5 | EUR | 3 |
| UX71 | UX71 | E91 | 335D | M57Y | HECK | MECH | 30.00 | TOUR | 210 | LL | 5 | EUR | 3 |
| UX72 | UX72 | E91 | 335D | M57Y | HECK | MECH | 30.00 | TOUR | 210 | RL | 5 | EUR | 3 |
| VA11 | VA11 | E90 | 316I | N45 | HECK | MECH | 16.00 | LIM | 85 | LL | 4 | EUR | 3 |
| VA12 | VA12 | E90 | 316I | N45 | HECK | MECH | 16.00 | LIM | 85 | RL | 4 | EUR | 3 |
| VA15 | VA15 | E90 | 316I | N45 | HECK | MECH | 16.00 | LIM | 85 | LL | 4 | PHL | 3 |
| VA31 | VA31 | E90 | 328I ML | N51 | HECK | MECH | 30.00 | LIM | 172 | LL | 4 | EUR | 3 |
| VA33 | VA33 | E90 | 328I ML | N52K | HECK | MECH | 30.00 | LIM | 172 | LL | 4 | USA | 3 |
| VA37 | VA37 | E90 | 328I ML | N52K | HECK | MECH | 30.00 | LIM | 172 | LL | 4 | USA | 3 |
| VA51 | VA51 | E90 | 318I UL | N46 | HECK | MECH | 20.00 | LIM | 95 | LL | 4 | EUR | 3 |
| VA52 | VA52 | E90 | 318I UL | N46 | HECK | MECH | 20.00 | LIM | 95 | RL | 4 | EUR | 3 |
| VA57 | VA57 | E90 | 318I UL | N46 | HECK | MECH | 20.00 | LIM | 95 | RL | 4 | THA | 3 |
| VA71 | VA71 | E90 | 320I OL | N46 | HECK | MECH | 20.00 | LIM | 110 | LL | 4 | EUR | 3 |
| VA72 | VA72 | E90 | 320I OL | N46 | HECK | MECH | 20.00 | LIM | 110 | RL | 4 | EUR | 3 |
| VA74 | VA74 | E90 | 320I OL | N46 | HECK | MECH | 20.00 | LIM | 110 | RL | 4 | MYS | 3 |
| VA75 | VA75 | E90 | 320I OL | N46 | HECK | MECH | 20.00 | LIM | 110 | LL | 4 | EUR | 3 |
| VA76 | VA76 | E90 | 320I OL | N46 | HECK | MECH | 20.00 | LIM | 110 | RL | 4 | EUR | 3 |
| VA77 | VA77 | E90 | 320I OL | N46 | HECK | MECH | 20.00 | LIM | 110 | RL | 4 | IDN | 3 |
| VA78 | VA78 | E90 | 320I | N46 | HECK | MECH | 20.00 | LIM | 110 | LL | 4 | VNM | 3 |
| VA79 | VA79 | E90 | 320I | N46 | HECK | MECH | 20.00 | LIM | 110 | LL | 4 | PHL | 3 |
| VA91 | VA91 | E90 | M3 | S65 | HECK | MECH | 40.00 | LIM | 300 | LL | 4 | EUR | 3 |
| VA92 | VA92 | E90 | M3 | S65 | HECK | MECH | 40.00 | LIM | 300 | RL | 4 | EUR | 3 |
| VA93 | VA93 | E90 | M3 | S65 | HECK | MECH | 40.00 | LIM | 300 | LL | 4 | USA | 3 |
| VA95 | VA95 | E90 | 320I OL | N46 | HECK | MECH | 20.00 | LIM | 110 | RL | 4 | IND | 3 |
| VA96 | VA96 | E90 | 320I OL | N46 | HECK | MECH | 20.00 | LIM | 110 | LL | 4 | CHN | 3 |
| VA97 | VA97 | E90 | 320I OL | N46 | HECK | MECH | 20.00 | LIM | 110 | RL | 4 | THA | 3 |
| VA98 | VA98 | E90 | 320I OL | N46 | HECK | MECH | 20.00 | LIM | 110 | LL | 4 | RUS | 3 |
| VA99 | VA99 | E90 | 320I OL | N46 | HECK | MECH | 20.00 | LIM | 110 | LL | 4 | EGY | 3 |
| VB11 | VB11 | E90 | 325I OL | N52 | HECK | MECH | 25.00 | LIM | 160 | LL | 4 | EUR | 3 |
| VB12 | VB12 | E90 | 325I OL | N52 | HECK | MECH | 25.00 | LIM | 160 | RL | 4 | EUR | 3 |
| VB13 | VB13 | E90 | 325I UL | N52 | HECK | MECH | 30.00 | LIM | 160 | LL | 4 | USA | 3 |
| VB14 | VB14 | E90 | 325I OL | N52 | HECK | MECH | 25.00 | LIM | 160 | LL | 4 | RUS | 3 |
| VB15 | VB15 | E90 | 325I OL | N52 | HECK | MECH | 25.00 | LIM | 160 | LL | 4 | EUR | 3 |
| VB16 | VB16 | E90 | 325I OL | N52 | HECK | MECH | 25.00 | LIM | 160 | RL | 4 | EUR | 3 |
| VB17 | VB17 | E90 | 325I UL | N52 | HECK | MECH | 30.00 | LIM | 160 | LL | 4 | USA | 3 |
| VB18 | VB18 | E90 | 325I | N52 | HECK | MECH | 25.00 | LIM | 155 | LL | 4 | VNM | 3 |
| VB19 | VB19 | E90 | 325I OL | N52 | HECK | MECH | 25.00 | LIM | 160 | RL | 4 | IDN | 3 |
| VB31 | VB31 | E90 | 330I OL | N52 | HECK | MECH | 30.00 | LIM | 190 | LL | 4 | EUR | 3 |
| VB32 | VB32 | E90 | 330I OL | N52 | HECK | MECH | 30.00 | LIM | 190 | RL | 4 | EUR | 3 |
| VB33 | VB33 | E90 | 330I OL | N52 | HECK | MECH | 30.00 | LIM | 190 | LL | 4 | USA | 3 |
| VB35 | VB35 | E90 | 330I OL | N52 | HECK | MECH | 30.00 | LIM | 190 | LL | 4 | EUR | 3 |
| VB36 | VB36 | E90 | 330I OL | N52 | HECK | MECH | 30.00 | LIM | 190 | RL | 4 | EUR | 3 |
| VB37 | VB37 | E90 | 330I | N52 | HECK | MECH | 30.00 | LIM | 190 | LL | 4 | CHN | 3 |
| VB38 | VB38 | E90 | 330I OL | N52 | HECK | MECH | 30.00 | LIM | 190 | RL | 4 | THA | 3 |
| VB51 | VB51 | E90 | 323I UL | N52 | HECK | MECH | 25.00 | LIM | 130 | LL | 4 | EUR | 3 |
| VB52 | VB52 | E90 | 323I UL | N52 | HECK | MECH | 25.00 | LIM | 130 | RL | 4 | EUR | 3 |
| VB53 | VB53 | E90 | 323I UL | N52 | HECK | MECH | 25.00 | LIM | 130 | LL | 4 | USA | 3 |
| VB55 | VB55 | E90 | 323I UL | N52 | HECK | MECH | 25.00 | LIM | 130 | LL | 4 | EUR | 3 |
| VB56 | VB56 | E90 | 323I UL | N52 | HECK | MECH | 25.00 | LIM | 130 | RL | 4 | EUR | 3 |
| VB57 | VB57 | E90 | 323I UL | N52 | HECK | MECH | 25.00 | LIM | 130 | LL | 4 | CHN | 3 |
| VB58 | VB58 | E90 | 323I UL | N52 | HECK | MECH | 25.00 | LIM | 130 | LL | 4 | RUS | 3 |
| VB59 | VB59 | E90 | 325I OL | N52 | HECK | MECH | 25.00 | LIM | 160 | LL | 4 | CHN | 3 |
| VB71 | VB71 | E90 | 335I | N54 | HECK | MECH | 30.00 | LIM | 225 | LL | 4 | EUR | 3 |
| VB72 | VB72 | E90 | 335I | N54 | HECK | MECH | 30.00 | LIM | 225 | RL | 4 | EUR | 3 |
| VB73 | VB73 | E90 | 335I | N54 | HECK | MECH | 30.00 | LIM | 225 | LL | 4 | USA | 3 |
| VB75 | VB75 | E90 | 335I | N54 | HECK | MECH | 30.00 | LIM | 225 | LL | 4 | EUR | 3 |
| VB76 | VB76 | E90 | 335I | N54 | HECK | MECH | 30.00 | LIM | 225 | RL | 4 | EUR | 3 |
| VB79 | VB79 | E90 | 325I OL | N52 | HECK | MECH | 25.00 | LIM | 160 | LL | 4 | EGY | 3 |
| VB95 | VB95 | E90 | 325I OL | N52 | HECK | MECH | 25.00 | LIM | 160 | RL | 4 | IND | 3 |
| VB97 | VB97 | E90 | 325I OL | N52 | HECK | MECH | 25.00 | LIM | 160 | RL | 4 | THA | 3 |
| VB98 | VB98 | E90 | 325I | N52 | HECK | MECH | 25.00 | LIM | 155 | LL | 4 | PHL | 3 |
| VB99 | VB99 | E90 | 325I OL | N52 | HECK | MECH | 25.00 | LIM | 160 | RL | 4 | MYS | 3 |
| VC11 | VC11 | E90 | 318D UL | M47/T2 | HECK | MECH | 20.00 | LIM | 90 | LL | 4 | EUR | 3 |
| VC12 | VC12 | E90 | 318D UL | M47/T2 | HECK | MECH | 20.00 | LIM | 90 | RL | 4 | EUR | 3 |
| VC31 | VC31 | E90 | 320D OL | M47/T2 | HECK | MECH | 20.00 | LIM | 120 | LL | 4 | EUR | 3 |
| VC32 | VC32 | E90 | 320D OL | M47/T2 | HECK | MECH | 20.00 | LIM | 120 | RL | 4 | EUR | 3 |
| VC36 | VC36 | E90 | 320D OL | M47/T2 | HECK | MECH | 20.00 | LIM | 120 | RL | 4 | EUR | 3 |
| VC37 | VC37 | E90 | 320D OL | M47/T2 | HECK | MECH | 20.00 | LIM | 120 | RL | 4 | IND | 3 |
| VC51 | VC51 | E90 | 325D UL | M57/T2 | HECK | MECH | 30.00 | LIM | 145 | LL | 4 | EUR | 3 |
| VC52 | VC52 | E90 | 325D UL | M57/T2 | HECK | MECH | 30.00 | LIM | 145 | RL | 4 | EUR | 3 |
| VC53 | VC53 | E90 | 328I ML | N51 | HECK | MECH | 30.00 | LIM | 172 | LL | 4 | USA | 3 |
| VC73 | VC73 | E90 | 328XI | N51 | ALLR | MECH | 30.00 | LIM | 172 | LL | 4 | USA | 3 |
| VC91 | VC91 | E90 | 330D OL | M57/T2 | HECK | MECH | 30.00 | LIM | 170 | LL | 4 | EUR | 3 |
| VC92 | VC92 | E90 | 330D OL | M57/T2 | HECK | MECH | 30.00 | LIM | 170 | RL | 4 | EUR | 3 |
| VC93 | VC93 | E90 | 328XI ML | N52K | ALLR | MECH | 30.00 | LIM | 172 | LL | 4 | USA | 3 |
| VC96 | VC96 | E90 | 330D OL | M57/T2 | HECK | MECH | 30.00 | LIM | 170 | RL | 4 | EUR | 3 |
| VD11 | VD11 | E90 | 325XI OL | N52 | ALLR | MECH | 25.00 | LIM | 160 | LL | 4 | EUR | 3 |
| VD13 | VD13 | E90 | 325XI UL | N52 | ALLR | MECH | 30.00 | LIM | 160 | LL | 4 | USA | 3 |
| VD31 | VD31 | E90 | 330XI OL | N52 | ALLR | MECH | 30.00 | LIM | 190 | LL | 4 | EUR | 3 |
| VD33 | VD33 | E90 | 330XI OL | N52 | ALLR | MECH | 30.00 | LIM | 190 | LL | 4 | USA | 3 |
| VD51 | VD51 | E90 | 335XI | N54 | ALLR | MECH | 30.00 | LIM | 225 | LL | 4 | EUR | 3 |
| VD53 | VD53 | E90 | 335XI | N54 | ALLR | MECH | 30.00 | LIM | 225 | LL | 4 | USA | 3 |
| VD71 | VD71 | E90 | 335D | M57Y | HECK | MECH | 30.00 | LIM | 210 | LL | 4 | EUR | 3 |
| VD72 | VD72 | E90 | 335D | M57Y | HECK | MECH | 30.00 | LIM | 210 | RL | 4 | EUR | 3 |
| VD91 | VD91 | E90 | 330XD OL | M57/T2 | ALLR | MECH | 30.00 | LIM | 170 | LL | 4 | EUR | 3 |
| VE31 | VE31 | E90 | 325I UL | N53 | HECK | MECH | 30.00 | LIM | 160 | LL | 4 | EUR | 3 |
| VE32 | VE32 | E90 | 325I UL | N53 | HECK | MECH | 30.00 | LIM | 160 | RL | 4 | EUR | 3 |
| VE51 | VE51 | E90 | 325XI UL | N53 | ALLR | MECH | 30.00 | LIM | 160 | LL | 4 | EUR | 3 |
| VE71 | VE71 | E90 | 330I OL | N53 | HECK | MECH | 30.00 | LIM | 200 | LL | 4 | EUR | 3 |
| VE72 | VE72 | E90 | 330I OL | N53 | HECK | MECH | 30.00 | LIM | 200 | RL | 4 | EUR | 3 |
| VE91 | VE91 | E90 | 330XI OL | N53 | ALLR | MECH | 30.00 | LIM | 200 | LL | 4 | EUR | 3 |
| VF11 | VF11 | E90 | 325XI OL | N52K | ALLR | MECH | 25.00 | LIM | 160 | LL | 4 | EUR | 3 |
| VF31 | VF31 | E90 | 316I | N43 | HECK | MECH | 16.00 | LIM | 90 | LL | 4 | EUR | 3 |
| VF32 | VF32 | E90 | 316I | N43 | HECK | MECH | 16.00 | LIM | 90 | RL | 4 | EUR | 3 |
| VF51 | VF51 | E90 | 318I UL | N43 | HECK | MECH | 20.00 | LIM | 105 | LL | 4 | EUR | 3 |
| VF52 | VF52 | E90 | 318I UL | N43 | HECK | MECH | 20.00 | LIM | 105 | RL | 4 | EUR | 3 |
| VF71 | VF71 | E90 | 320SI | N45 | HECK | MECH | 20.00 | LIM | 127 | LL | 4 | EUR | 3 |
| VF72 | VF72 | E90 | 320SI | N45 | HECK | MECH | 20.00 | LIM | 127 | RL | 4 | EUR | 3 |
| VF91 | VF91 | E90 | 320I OL | N43 | HECK | MECH | 20.00 | LIM | 125 | LL | 4 | EUR | 3 |
| VF92 | VF92 | E90 | 320I OL | N43 | HECK | MECH | 20.00 | LIM | 125 | RL | 4 | EUR | 3 |
| VG11 | VG11 | E90 | 318D UL | N47 | HECK | MECH | 20.00 | LIM | 105 | LL | 4 | EUR | 3 |
| VG12 | VG12 | E90 | 318D UL | N47 | HECK | MECH | 20.00 | LIM | 105 | RL | 4 | EUR | 3 |
| VG31 | VG31 | E90 | 316I | N45T | HECK | MECH | 16.00 | LIM | 85 | LL | 4 | EUR | 3 |
| VG32 | VG32 | E90 | 316I | N45T | HECK | MECH | 16.00 | LIM | 85 | RL | 4 | EUR | 3 |
| VG51 | VG51 | E90 | 318I UL | N46T | HECK | MECH | 20.00 | LIM | 100 | LL | 4 | EUR | 3 |
| VG52 | VG52 | E90 | 318I UL | N46T | HECK | MECH | 20.00 | LIM | 100 | RL | 4 | EUR | 3 |
| VG57 | VG57 | E90 | 318I UL | N46T | HECK | MECH | 20.00 | LIM | 100 | RL | 4 | THA | 3 |
| VG71 | VG71 | E90 | 320I OL | N46T | HECK | MECH | 20.00 | LIM | 115 | LL | 4 | EUR | 3 |
| VG72 | VG72 | E90 | 320I OL | N46T | HECK | MECH | 20.00 | LIM | 115 | RL | 4 | EUR | 3 |
| VG74 | VG74 | E90 | 320I OL | N46T | HECK | MECH | 20.00 | LIM | 115 | RL | 4 | MYS | 3 |
| VG75 | VG75 | E90 | 320I OL | N46T | HECK | MECH | 20.00 | LIM | 115 | LL | 4 | EUR | 3 |
| VG76 | VG76 | E90 | 320I OL | N46T | HECK | MECH | 20.00 | LIM | 115 | RL | 4 | EUR | 3 |
| VG77 | VG77 | E90 | 320I OL | N46T | HECK | MECH | 20.00 | LIM | 115 | RL | 4 | IDN | 3 |
| VG79 | VG79 | E90 | 320I OL | N46T | HECK | MECH | 20.00 | LIM | 115 | LL | 4 | CHN | 3 |
| VG91 | VG91 | E90 | 320D OL | N47 | HECK | MECH | 20.00 | LIM | 125 | LL | 4 | EUR | 3 |
| VG92 | VG92 | E90 | 320D OL | N47 | HECK | MECH | 20.00 | LIM | 125 | RL | 4 | EUR | 3 |
| VG96 | VG96 | E90 | 320D OL | N47 | HECK | MECH | 20.00 | LIM | 125 | RL | 4 | EUR | 3 |
| VG97 | VG97 | E90 | 320I OL | N46T | HECK | MECH | 20.00 | LIM | 115 | RL | 4 | THA | 3 |
| VG98 | VG98 | E90 | 320I OL | N46T | HECK | MECH | 20.00 | LIM | 115 | LL | 4 | RUS | 3 |
| VG99 | VG99 | E90 | 320I OL | N46T | HECK | MECH | 20.00 | LIM | 115 | LL | 4 | EGY | 3 |
| VH11 | VH11 | E90 | 323I UL | N52K | HECK | MECH | 25.00 | LIM | 140 | LL | 4 | EUR | 3 |
| VH12 | VH12 | E90 | 323I UL | N52K | HECK | MECH | 25.00 | LIM | 140 | RL | 4 | EUR | 3 |
| VH13 | VH13 | E90 | 323I UL | N52K | HECK | MECH | 25.00 | LIM | 140 | LL | 4 | USA | 3 |
| VH15 | VH15 | E90 | 323I UL | N52K | HECK | MECH | 25.00 | LIM | 140 | LL | 4 | EUR | 3 |
| VH16 | VH16 | E90 | 323I UL | N52K | HECK | MECH | 25.00 | LIM | 140 | RL | 4 | EUR | 3 |
| VH31 | VH31 | E90 | 325I OL | N52K | HECK | MECH | 25.00 | LIM | 160 | LL | 4 | EUR | 3 |
| VH32 | VH32 | E90 | 325I OL | N52K | HECK | MECH | 25.00 | LIM | 160 | RL | 4 | EUR | 3 |
| VH34 | VH34 | E90 | 325I OL | N52K | HECK | MECH | 25.00 | LIM | 160 | LL | 4 | RUS | 3 |
| VH35 | VH35 | E90 | 325I OL | N52K | HECK | MECH | 25.00 | LIM | 160 | LL | 4 | EUR | 3 |
| VH36 | VH36 | E90 | 325I OL | N52K | HECK | MECH | 25.00 | LIM | 160 | RL | 4 | EUR | 3 |
| VH37 | VH37 | E90 | 325I OL | N52K | HECK | MECH | 25.00 | LIM | 160 | RL | 4 | THA | 3 |
| VH38 | VH38 | E90 | 325I OL | N52K | HECK | MECH | 25.00 | LIM | 160 | LL | 4 | CHN | 3 |
| VH39 | VH39 | E90 | 325I OL | N52K | HECK | MECH | 25.00 | LIM | 160 | LL | 4 | EGY | 3 |
| VH51 | VH51 | E90 | 330I OL | N52K | HECK | MECH | 30.00 | LIM | 200 | LL | 4 | EUR | 3 |
| VH52 | VH52 | E90 | 330I OL | N52K | HECK | MECH | 30.00 | LIM | 200 | RL | 4 | EUR | 3 |
| VH55 | VH55 | E90 | 330I OL | N52K | HECK | MECH | 30.00 | LIM | 200 | LL | 4 | EUR | 3 |
| VH56 | VH56 | E90 | 330I OL | N52K | HECK | MECH | 30.00 | LIM | 200 | RL | 4 | EUR | 3 |
| VH57 | VH57 | E90 | 325I OL | N52K | HECK | MECH | 25.00 | LIM | 160 | RL | 4 | IDN | 3 |
| VH58 | VH58 | E90 | 330I OL | N52K | HECK | MECH | 30.00 | LIM | 200 | RL | 4 | THA | 3 |
| VH59 | VH59 | E90 | 325I OL | N52K | HECK | MECH | 25.00 | LIM | 160 | RL | 4 | MYS | 3 |
| VH91 | VH91 | E90 | 330D OL | N57 | HECK | MECH | 30.00 | LIM | 180 | LL | 4 | EUR | 3 |
| VH92 | VH92 | E90 | 330D OL | N57 | HECK | MECH | 30.00 | LIM | 180 | RL | 4 | EUR | 3 |
| VH95 | VH95 | E90 | 325I OL | N52K | HECK | MECH | 25.00 | LIM | 160 | RL | 4 | EUR | 3 |
| VH96 | VH96 | E90 | 330D OL | N57 | HECK | MECH | 30.00 | LIM | 180 | RL | 4 | EUR | 3 |
| VK51 | VK51 | E90 | 330XI OL | N52K | ALLR | MECH | 30.00 | LIM | 190 | LL | 4 | EUR | 3 |
| VK52 | VK52 | E90 | 330XI OL | N52K | ALLR | MECH | 30.00 | LIM | 190 | RL | 4 | EUR | 3 |
| VK71 | VK71 | E90 | 320XD OL | N47 | ALLR | MECH | 20.00 | LIM | 130 | LL | 4 | EUR | 3 |
| VK91 | VK91 | E90 | 330XD OL | N57 | ALLR | MECH | 30.00 | LIM | 180 | LL | 4 | EUR | 3 |
| VR31 | VR31 | E91 | 318I UL | N43 | HECK | MECH | 20.00 | TOUR | 105 | LL | 5 | EUR | 3 |
| VR32 | VR32 | E91 | 318I UL | N43 | HECK | MECH | 20.00 | TOUR | 105 | RL | 5 | EUR | 3 |
| VR51 | VR51 | E91 | 318I UL | N46 | HECK | MECH | 20.00 | TOUR | 95 | LL | 5 | EUR | 3 |
| VR52 | VR52 | E91 | 318I UL | N46 | HECK | MECH | 20.00 | TOUR | 95 | RL | 5 | EUR | 3 |
| VR62 | VR62 | E91 | NIE PORX | N46 | HECK | AUT | 20.00 | TOUR | 95 | RL | 5 | EUR | 3 |
| VR71 | VR71 | E91 | 320I OL | N46 | HECK | MECH | 20.00 | TOUR | 110 | LL | 5 | EUR | 3 |
| VR72 | VR72 | E91 | 320I OL | N46 | HECK | MECH | 20.00 | TOUR | 110 | RL | 5 | EUR | 3 |
| VR91 | VR91 | E91 | 320I OL | N43 | HECK | MECH | 20.00 | TOUR | 125 | LL | 5 | EUR | 3 |
| VR92 | VR92 | E91 | 320I OL | N43 | HECK | MECH | 20.00 | TOUR | 125 | RL | 5 | EUR | 3 |
| VS11 | VS11 | E91 | 325I OL | N52 | HECK | MECH | 25.00 | TOUR | 160 | LL | 5 | EUR | 3 |
| VS12 | VS12 | E91 | 325I OL | N52 | HECK | MECH | 25.00 | TOUR | 160 | RL | 5 | EUR | 3 |
| VS13 | VS13 | E91 | 328I ML | N52K | HECK | MECH | 30.00 | TOUR | 172 | LL | 5 | USA | 3 |
| VS31 | VS31 | E91 | 330I OL | N52 | HECK | MECH | 30.00 | TOUR | 190 | LL | 5 | EUR | 3 |
| VS32 | VS32 | E91 | 330I OL | N52 | HECK | MECH | 30.00 | TOUR | 190 | RL | 5 | EUR | 3 |
| VS51 | VS51 | E91 | 323I UL | N52 | HECK | MECH | 25.00 | TOUR | 130 | LL | 5 | EUR | 3 |
| VS52 | VS52 | E91 | 323I UL | N52 | HECK | MECH | 25.00 | TOUR | 130 | RL | 5 | EUR | 3 |
| VS71 | VS71 | E91 | 335I | N54 | HECK | MECH | 30.00 | TOUR | 225 | LL | 5 | EUR | 3 |
| VS72 | VS72 | E91 | 335I | N54 | HECK | MECH | 30.00 | TOUR | 225 | RL | 5 | EUR | 3 |
| VS91 | VS91 | E91 | 335D | M57Y | HECK | MECH | 30.00 | TOUR | 210 | LL | 5 | EUR | 3 |
| VS92 | VS92 | E91 | 335D | M57Y | HECK | MECH | 30.00 | TOUR | 210 | RL | 5 | EUR | 3 |
| VT11 | VT11 | E91 | 325XI OL | N52 | ALLR | MECH | 25.00 | TOUR | 160 | LL | 5 | EUR | 3 |
| VT13 | VT13 | E91 | 325XI UL | N52 | ALLR | MECH | 30.00 | TOUR | 160 | LL | 5 | USA | 3 |
| VT31 | VT31 | E91 | 330XI OL | N52 | ALLR | MECH | 30.00 | TOUR | 190 | LL | 5 | EUR | 3 |
| VT51 | VT51 | E91 | 335XI | N54 | ALLR | MECH | 30.00 | TOUR | 225 | LL | 5 | EUR | 3 |
| VT71 | VT71 | E91 | 325XI OL | N52K | ALLR | MECH | 25.00 | TOUR | 160 | LL | 5 | EUR | 3 |
| VT73 | VT73 | E91 | 328XI ML | N52K | ALLR | MECH | 30.00 | TOUR | 172 | LL | 5 | USA | 3 |
| VT91 | VT91 | E91 | 330XD OL | M57/T2 | ALLR | MECH | 30.00 | TOUR | 170 | LL | 5 | EUR | 3 |
| VU11 | VU11 | E91 | 318D UL | M47/T2 | HECK | MECH | 20.00 | TOUR | 90 | LL | 5 | EUR | 3 |
| VU12 | VU12 | E91 | 318D UL | M47/T2 | HECK | MECH | 20.00 | TOUR | 90 | RL | 5 | EUR | 3 |
| VU31 | VU31 | E91 | 320D OL | M47/T2 | HECK | MECH | 20.00 | TOUR | 120 | LL | 5 | EUR | 3 |
| VU32 | VU32 | E91 | 320D OL | M47/T2 | HECK | MECH | 20.00 | TOUR | 120 | RL | 5 | EUR | 3 |
| VU51 | VU51 | E91 | 320D OL | N47 | HECK | MECH | 20.00 | TOUR | 130 | LL | 5 | EUR | 3 |
| VU52 | VU52 | E91 | 320D OL | N47 | HECK | MECH | 20.00 | TOUR | 130 | RL | 5 | EUR | 3 |
| VU71 | VU71 | E91 | 325D UL | M57/T2 | HECK | MECH | 30.00 | TOUR | 145 | LL | 5 | EUR | 3 |
| VU72 | VU72 | E91 | 325D UL | M57/T2 | HECK | MECH | 30.00 | TOUR | 145 | RL | 5 | EUR | 3 |
| VU91 | VU91 | E91 | 330D OL | M57/T2 | HECK | MECH | 30.00 | TOUR | 170 | LL | 5 | EUR | 3 |
| VU92 | VU92 | E91 | 330D OL | M57/T2 | HECK | MECH | 30.00 | TOUR | 170 | RL | 5 | EUR | 3 |
| VV31 | VV31 | E91 | 325I UL | N53 | HECK | MECH | 30.00 | TOUR | 160 | LL | 5 | EUR | 3 |
| VV32 | VV32 | E91 | 325I UL | N53 | HECK | MECH | 30.00 | TOUR | 160 | RL | 5 | EUR | 3 |
| VV51 | VV51 | E91 | 325XI UL | N53 | ALLR | MECH | 30.00 | TOUR | 160 | LL | 5 | EUR | 3 |
| VV71 | VV71 | E91 | 330I OL | N53 | HECK | MECH | 30.00 | TOUR | 200 | LL | 5 | EUR | 3 |
| VV72 | VV72 | E91 | 330I OL | N53 | HECK | MECH | 30.00 | TOUR | 200 | RL | 5 | EUR | 3 |
| VV91 | VV91 | E91 | 330XI OL | N53 | ALLR | MECH | 30.00 | TOUR | 200 | LL | 5 | EUR | 3 |
| VW11 | VW11 | E91 | 318D UL | N47 | HECK | MECH | 20.00 | TOUR | 105 | LL | 5 | EUR | 3 |
| VW12 | VW12 | E91 | 318D UL | N47 | HECK | MECH | 20.00 | TOUR | 105 | RL | 5 | EUR | 3 |
| VW31 | VW31 | E91 | 318I UL | N46T | HECK | MECH | 20.00 | TOUR | 100 | LL | 5 | EUR | 3 |
| VW32 | VW32 | E91 | 318I UL | N46T | HECK | MECH | 20.00 | TOUR | 100 | RL | 5 | EUR | 3 |
| VW51 | VW51 | E91 | 323I UL | N52K | HECK | MECH | 25.00 | TOUR | 130 | LL | 5 | EUR | 3 |
| VW52 | VW52 | E91 | 323I UL | N52K | HECK | MECH | 25.00 | TOUR | 140 | RL | 5 | EUR | 3 |
| VW71 | VW71 | E91 | 320I OL | N46T | HECK | MECH | 20.00 | TOUR | 115 | LL | 5 | EUR | 3 |
| VW72 | VW72 | E91 | 320I OL | N46T | HECK | MECH | 20.00 | TOUR | 115 | RL | 5 | EUR | 3 |
| VW91 | VW91 | E91 | 325I OL | N52K | HECK | MECH | 25.00 | TOUR | 160 | LL | 5 | EUR | 3 |
| VW92 | VW92 | E91 | 325I OL | N52K | HECK | MECH | 25.00 | TOUR | 160 | RL | 5 | EUR | 3 |
| VX91 | VX91 | E91 | 330D OL | N57 | HECK | MECH | 30.00 | TOUR | 180 | LL | 5 | EUR | 3 |
| VX92 | VX92 | E91 | 330D OL | N57 | HECK | MECH | 30.00 | TOUR | 180 | RL | 5 | EUR | 3 |
| VY31 | VY31 | E91 | 330I OL | N52K | HECK | MECH | 30.00 | TOUR | 200 | LL | 5 | EUR | 3 |
| VY32 | VY32 | E91 | 330I OL | N52K | HECK | MECH | 30.00 | TOUR | 200 | RL | 5 | EUR | 3 |
| VY51 | VY51 | E91 | 330XI OL | N52K | ALLR | MECH | 30.00 | TOUR | 190 | LL | 5 | EUR | 3 |
| VY71 | VY71 | E91 | 320XD OL | N47 | ALLR | MECH | 20.00 | TOUR | 130 | LL | 5 | EUR | 3 |
| VY91 | VY91 | E91 | 330XD OL | N57 | ALLR | MECH | 30.00 | TOUR | 180 | LL | 5 | EUR | 3 |
| WA11 | WA11 | E92 | 316I | N43 | HECK | MECH | 16.00 | COUPE | 90 | LL | 2 | EUR | 3 |
| WA31 | WA31 | E92 | 316I | N45T | HECK | MECH | 16.00 | COUPE | 85 | LL | 2 | EUR | 3 |
| WA51 | WA51 | E92 | 320I OL | N46T | HECK | MECH | 20.00 | COUPE | 115 | LL | 2 | EUR | 3 |
| WA52 | WA52 | E92 | 320I OL | N46T | HECK | MECH | 20.00 | COUPE | 115 | RL | 2 | EUR | 3 |
| WA71 | WA71 | E92 | 320I OL | N43 | HECK | MECH | 20.00 | COUPE | 125 | LL | 2 | EUR | 3 |
| WA72 | WA72 | E92 | 320I OL | N43 | HECK | MECH | 20.00 | COUPE | 125 | RL | 2 | EUR | 3 |
| WA91 | WA91 | E92 | 330D OL | N57 | HECK | MECH | 30.00 | COUPE | 180 | LL | 2 | EUR | 3 |
| WA92 | WA92 | E92 | 330D OL | N57 | HECK | MECH | 30.00 | COUPE | 180 | RL | 2 | EUR | 3 |
| WB11 | WB11 | E92 | 323I UL | N52K | HECK | MECH | 25.00 | COUPE | 130 | LL | 2 | EUR | 3 |
| WB12 | WB12 | E92 | 323I UL | N52K | HECK | MECH | 25.00 | COUPE | 140 | RL | 2 | EUR | 3 |
| WB31 | WB31 | E92 | 325I OL | N52K | HECK | MECH | 25.00 | COUPE | 160 | LL | 2 | EUR | 3 |
| WB32 | WB32 | E92 | 325I OL | N52K | HECK | MECH | 25.00 | COUPE | 160 | RL | 2 | EUR | 3 |
| WB33 | WB33 | E92 | 328I ML | N52K | HECK | MECH | 30.00 | COUPE | 172 | LL | 2 | USA | 3 |
| WB51 | WB51 | E92 | 330I OL | N52K | HECK | MECH | 30.00 | COUPE | 200 | LL | 2 | EUR | 3 |
| WB52 | WB52 | E92 | 330I OL | N52K | HECK | MECH | 30.00 | COUPE | 200 | RL | 2 | EUR | 3 |
| WB71 | WB71 | E92 | 335I | N54 | HECK | MECH | 30.00 | COUPE | 225 | LL | 2 | EUR | 3 |
| WB72 | WB72 | E92 | 335I | N54 | HECK | MECH | 30.00 | COUPE | 225 | RL | 2 | EUR | 3 |
| WB73 | WB73 | E92 | 335I | N54 | HECK | MECH | 30.00 | COUPE | 225 | LL | 2 | USA | 3 |
| WB91 | WB91 | E92 | 330XD OL | N57 | ALLR | MECH | 30.00 | COUPE | 180 | LL | 2 | EUR | 3 |
| WC11 | WC11 | E92 | 320XD OL | N47 | ALLR | MECH | 20.00 | COUPE | 130 | LL | 2 | EUR | 3 |
| WC31 | WC31 | E92 | 325XI OL | N52K | ALLR | MECH | 25.00 | COUPE | 160 | LL | 2 | EUR | 3 |
| WC33 | WC33 | E92 | 328XI ML | N52K | ALLR | MECH | 30.00 | COUPE | 172 | LL | 2 | USA | 3 |
| WC51 | WC51 | E92 | 330XI OL | N52K | ALLR | MECH | 30.00 | COUPE | 200 | LL | 2 | EUR | 3 |
| WC53 | WC53 | E92 | 330XI | N52K | ALLR | MECH | 30.00 | COUPE | 190 | LL | 2 | USA | 3 |
| WC71 | WC71 | E92 | 335XI | N54 | ALLR | MECH | 30.00 | COUPE | 225 | LL | 2 | EUR | 3 |
| WC73 | WC73 | E92 | 335XI | N54 | ALLR | MECH | 30.00 | COUPE | 225 | LL | 2 | USA | 3 |
| WC91 | WC91 | E92 | 330XD OL | M57/T2 | ALLR | MECH | 30.00 | COUPE | 170 | LL | 2 | EUR | 3 |
| WD11 | WD11 | E92 | 320D OL | N47 | HECK | MECH | 20.00 | COUPE | 130 | LL | 2 | EUR | 3 |
| WD12 | WD12 | E92 | 320D OL | N47 | HECK | MECH | 20.00 | COUPE | 130 | RL | 2 | EUR | 3 |
| WD31 | WD31 | E92 | 325D UL | M57/T2 | HECK | MECH | 30.00 | COUPE | 145 | LL | 2 | EUR | 3 |
| WD32 | WD32 | E92 | 325D UL | M57/T2 | HECK | MECH | 30.00 | COUPE | 145 | RL | 2 | EUR | 3 |
| WD51 | WD51 | E92 | 330D OL | M57/T2 | HECK | MECH | 30.00 | COUPE | 170 | LL | 2 | EUR | 3 |
| WD52 | WD52 | E92 | 330D OL | M57/T2 | HECK | MECH | 30.00 | COUPE | 170 | RL | 2 | EUR | 3 |
| WD71 | WD71 | E92 | 335D | M57Y | HECK | MECH | 30.00 | COUPE | 210 | LL | 2 | EUR | 3 |
| WD72 | WD72 | E92 | 335D | M57Y | HECK | MECH | 30.00 | COUPE | 210 | RL | 2 | EUR | 3 |
| WD91 | WD91 | E92 | M3 | S65 | HECK | MECH | 40.00 | COUPE | 300 | LL | 2 | EUR | 3 |
| WD92 | WD92 | E92 | M3 | S65 | HECK | MECH | 40.00 | COUPE | 300 | RL | 2 | EUR | 3 |
| WD93 | WD93 | E92 | M3 | S65 | HECK | MECH | 40.00 | COUPE | 300 | LL | 2 | USA | 3 |
| WE31 | WE31 | E92 | 325I UL | N53 | HECK | MECH | 30.00 | COUPE | 160 | LL | 2 | EUR | 3 |
| WE32 | WE32 | E92 | 325I UL | N53 | HECK | MECH | 30.00 | COUPE | 160 | RL | 2 | EUR | 3 |
| WE51 | WE51 | E92 | 325XI UL | N53 | ALLR | MECH | 30.00 | COUPE | 160 | LL | 2 | EUR | 3 |
| WE71 | WE71 | E92 | 330I OL | N53 | HECK | MECH | 30.00 | COUPE | 200 | LL | 2 | EUR | 3 |
| WE72 | WE72 | E92 | 330I OL | N53 | HECK | MECH | 30.00 | COUPE | 200 | RL | 2 | EUR | 3 |
| WE91 | WE91 | E92 | 330XI OL | N53 | ALLR | MECH | 30.00 | COUPE | 200 | LL | 2 | EUR | 3 |
| WK51 | WK51 | E93 | 320I OL | N46T | HECK | MECH | 20.00 | CABRIO | 115 | LL | 2 | EUR | 3 |
| WK52 | WK52 | E93 | 320I OL | N46T | HECK | MECH | 20.00 | CABRIO | 115 | RL | 2 | EUR | 3 |
| WK71 | WK71 | E93 | 320I OL | N43 | HECK | MECH | 20.00 | CABRIO | 125 | LL | 2 | EUR | 3 |
| WK72 | WK72 | E93 | 320I OL | N43 | HECK | MECH | 20.00 | CABRIO | 125 | RL | 2 | EUR | 3 |
| WL11 | WL11 | E93 | 325I OL | N52K | HECK | MECH | 25.00 | CABRIO | 160 | LL | 2 | EUR | 3 |
| WL12 | WL12 | E93 | 325I OL | N52K | HECK | MECH | 25.00 | CABRIO | 160 | RL | 2 | EUR | 3 |
| WL13 | WL13 | E93 | 328I ML | N52K | HECK | MECH | 30.00 | CABRIO | 172 | LL | 2 | USA | 3 |
| WL31 | WL31 | E93 | 323I UL | N52K | HECK | MECH | 25.00 | CABRIO | 130 | LL | 2 | EUR | 3 |
| WL32 | WL32 | E93 | 323I UL | N52K | HECK | MECH | 25.00 | CABRIO | 140 | RL | 2 | EUR | 3 |
| WL51 | WL51 | E93 | 330I OL | N52K | HECK | MECH | 30.00 | CABRIO | 200 | LL | 2 | EUR | 3 |
| WL52 | WL52 | E93 | 330I OL | N52K | HECK | MECH | 30.00 | CABRIO | 200 | RL | 2 | EUR | 3 |
| WL53 | WL53 | E93 | 330I | N52K | HECK | MECH | 30.00 | CABRIO | 190 | LL | 2 | USA | 3 |
| WL71 | WL71 | E93 | 335I | N54 | HECK | MECH | 30.00 | CABRIO | 225 | LL | 2 | EUR | 3 |
| WL72 | WL72 | E93 | 335I | N54 | HECK | MECH | 30.00 | CABRIO | 225 | RL | 2 | EUR | 3 |
| WL73 | WL73 | E93 | 335I | N54 | HECK | MECH | 30.00 | CABRIO | 225 | LL | 2 | USA | 3 |
| WL91 | WL91 | E93 | M3 | S65 | HECK | MECH | 40.00 | CABRIO | 300 | LL | 2 | EUR | 3 |
| WL92 | WL92 | E93 | M3 | S65 | HECK | MECH | 40.00 | CABRIO | 300 | RL | 2 | EUR | 3 |
| WL93 | WL93 | E93 | M3 | S65 | HECK | MECH | 40.00 | CABRIO | 300 | LL | 2 | USA | 3 |
| WM31 | WM31 | E93 | 320D OL | N47 | HECK | MECH | 20.00 | CABRIO | 130 | LL | 2 | EUR | 3 |
| WM32 | WM32 | E93 | 320D OL | N47 | HECK | MECH | 20.00 | CABRIO | 130 | RL | 2 | EUR | 3 |
| WM51 | WM51 | E93 | 330D OL | M57/T2 | HECK | MECH | 30.00 | CABRIO | 170 | LL | 2 | EUR | 3 |
| WM52 | WM52 | E93 | 330D OL | M57/T2 | HECK | MECH | 30.00 | CABRIO | 170 | RL | 2 | EUR | 3 |
| WM71 | WM71 | E93 | 325D UL | M57/T2 | HECK | MECH | 30.00 | CABRIO | 145 | LL | 2 | EUR | 3 |
| WM72 | WM72 | E93 | 325D UL | M57/T2 | HECK | MECH | 30.00 | CABRIO | 145 | RL | 2 | EUR | 3 |
| WM91 | WM91 | E93 | 330D OL | N57 | HECK | MECH | 30.00 | CABRIO | 180 | LL | 2 | EUR | 3 |
| WM92 | WM92 | E93 | 330D OL | N57 | HECK | MECH | 30.00 | CABRIO | 180 | RL | 2 | EUR | 3 |
| WN31 | WN31 | E93 | 325I UL | N53 | HECK | MECH | 30.00 | CABRIO | 160 | LL | 2 | EUR | 3 |
| WN32 | WN32 | E93 | 325I UL | N53 | HECK | MECH | 30.00 | CABRIO | 160 | RL | 2 | EUR | 3 |
| WN71 | WN71 | E93 | 330I OL | N53 | HECK | MECH | 30.00 | CABRIO | 200 | LL | 2 | EUR | 3 |
| WN72 | WN72 | E93 | 330I OL | N53 | HECK | MECH | 30.00 | CABRIO | 200 | RL | 2 | EUR | 3 |
| WR31 | WR31 | E93 | 328I ML | N51 | HECK | MECH | 30.00 | CABRIO | 172 | LL | 2 | EUR | 3 |
| WR33 | WR33 | E93 | 328I ML | N51 | HECK | MECH | 30.00 | CABRIO | 172 | LL | 2 | USA | 3 |
| WV13 | WV13 | E92 | 328I ML | N51 | HECK | MECH | 30.00 | COUPE | 172 | LL | 2 | USA | 3 |
| WV53 | WV53 | E92 | 328XI ML | N51 | ALLR | MECH | 30.00 | COUPE | 172 | LL | 2 | USA | 3 |
| UNBEK | UNBEK | UNBEK | UNBEK | UNBEK | UNBEK | UNBEK | UNBEK | UNBEK | UNBEK | UNBEK | UNBEK | UNBEK | UNBEK |
