# can_pl2.prg

## General

|  |  |
| --- | --- |
| File | can_pl2.prg |
| Type | PRG |
| Jobs | 8 |
| Tables | 12 |
| Origin | BMW VP-31 R.Amann |
| Revision | 0.73 |
| Author | ra Richard Amann |
| ECU Comment | CAN-Busanalyse PL2 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | CAN_PL2 |  |  |
| ORIGIN | string | BMW VP-31 R.Amann |  |  |
| REVISION | string | 0.73 |  |  |
| AUTHOR | string | ra Richard Amann |  |  |
| COMMENT | string | CAN-Busanalyse PL2 |  |  |
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
| 0x2AD0 | 2AD0 msd80/msv70/msv80: DME: Botschaft der Getriebesteuerung fehlt |
| 0x2B51 | 2B51 mss60: DME: Botschaft (Status EKP, 0x420) |
| 0x2D5B | 2D5B msv70: DME: Botschaft von der EGS (Momentenanforderung) fehlerhaft |
| 0x2DB4 | 2DB4 me9n45/mev9n46/mev9n46l: DME: Botschaft vom SZL fehlt |
| 0x2DC0 | 2DC0 msd80/msd80n43/msv70/msv80: DME: Botschaft vom LDM fehlt |
| 0x2DC3 | 2DC3 msd80: DME: Überwachung Klemme 15 |
| 0x2DC6 | 2DC6 msv70: DME: Tankfüllstandswert, Plausibilität |
| 0x2DC8 | 2DC8 msd80/msv70/msv80: DME: Botschaft vom EGS fehlt, EGS 1 |
| 0x2DC9 | 2DC9 msd80/msv70/msv80: DME: Botschaft vom EGS fehlt, EGS 2 |
| 0x2DCA | 2DCA me9n45/mev9n46/mev9n46l: DME: Botschaft vom EGS fehlt |
| 0x2DCC | 2DCC msv70/msv80: DME: Botschaft vom ASC/DSC fehlt, ASC 1 |
| 0x2DCD | 2DCD msv70/msv80: DME: Botschaft vom ASC/DSC fehlt, ASC 3 |
| 0x2DCE | 2DCE msv70/msv80: DME: Botschaft vom ASC/DSC fehlt, ASC 4 |
| 0x2DCF | 2DCF me9n45/mev9n46/mev9n46l: DME: Botschaft vom KOMBI fehlt |
| 0x2DD0 | 2DD0 msv70/msv80: DME: Botschaft von der Instrumentenkombination fehlt, I-Kombi 2 |
| 0x2DD1 | 2DD1 msv70/msv80: DME: Botschaft von der Instrumentenkombination fehlt, I-Kombi 3 |
| 0x2DD2 | 2DD2 msv70/msv80: DME: Botschaft vom LWS-Steuergerät fehlt, LWS |
| 0x2DD5 | 2DD5 msv70: DME: Botschaft von der EKP fehlt |
| 0x2DD7 | 2DD7 me9n45/mev9n46/mev9n46l: DME: Botschaft vom DSC fehlt |
| 0x2DDA | 2DDA me9n45/mev9n46l: DME: Botschaft vom CAS fehlt |
| 0x2DDB | 2DDB me9n45/mev9n46/mev9n46l: DME: Botschaft vom IHKA fehlt |
| 0x2DDC | 2DDC me9n45/mev9n46l: DME: Botschaft vom SZL fehlt |
| 0x2DE0 | 2DE0 msv70/msv80: DME: Botschaft von der elektrischen Kraftstoffpumpe fehlt, EKP |
| 0x2DE3 | 2DE3 msv70/msv80: DME: Botschaft von der Instrumentenkombination fehlt, I-Kombi 7 |
| 0x2E46 | 2E46 d73n57b0/d73n57c0: DDE: Botschaft EWS-DDE fehlerhaft |
| 0x2E47 | 2E47 d73n57b0/d73n57c0: DDE: Botschaft EWS-DDE fehlerhaft |
| 0x2E7F | 2E7F msd80/msd80n43: DME: EGS über PT-CAN2 und PT-CAN |
| 0x2F50 | 2F50 me9n45/mev9n46/mev9n46l: DME: Botschaft vom KOMBI fehlt |
| 0x3090 | 3090 me17n45/mev17n46: DME: PT-CAN Kommunikationsfehler |
| 0x3091 | 3091 me17n45/mev17n46: DME: PT-CAN Kommunikationsfehler |
| 0x3094 | 3094 me17n45/mev17n46: DME: CAN-Botschaft DSC |
| 0x3095 | 3095 me17n45/mev17n46: DME: CAN-Botschaft DSC |
| 0x3096 | 3096 me17n45/mev17n46: DME: CAN-Botschaft DSC fehlt |
| 0x3097 | 3097 me17n45/mev17n46: DME: CAN-Botschaft EGS |
| 0x3098 | 3098 me17n45/mev17n46: DME: CAN-Botschaft EGS |
| 0x3099 | 3099 me17n45/mev17n46: DME: CAN-Botschaft EGS fehlt |
| 0x309D | 309D me17n45/mev17n46: DME: CAN-Botschaft IHKA fehlt |
| 0x309F | 309F me17n45/mev17n46: DME: CAN-Botschaft KOMBI |
| 0x30A0 | 30A0 me17n45/mev17n46: DME: CAN-Botschaft KOMBI |
| 0x30A1 | 30A1 me17n45/mev17n46: DME: CAN-Botschaft KOMBI fehlt |
| 0x30A4 | 30A4 me17n45/mev17n46: DME: CAN-Botschaft SZL |
| 0x30A5 | 30A5 me17n45/mev17n46: DME: CAN-Botschaft SZL |
| 0x30A6 | 30A6 me17n45/mev17n46: DME: CAN-Botschaft SZL fehlt |
| 0x3131 | 3131 me17n45/mev17n46: DME: Botschaft (Fahrzeugmodus, 315) |
| 0x3132 | 3132 me17n45/mev17n46: DME: Botschaft (Fahrzeugmodus, 315) fehlt |
| 0x3145 | 3145 me17n45/mev17n46: DME: Botschaft (Klemmenstatus, 130) |
| 0x3146 | 3146 me17n45/mev17n46: DME: Botschaft (Klemmenstatus, 130) fehlt |
| 0x314A | 314A me17n45/mev17n46: DME: Botschaft (Lenkradwinkel, C4) fehlt |
| 0x314E | 314E me17n45/mev17n46: DME: Botschaft (Powermanagement Batteriespannung, 3B4) |
| 0x3162 | 3162 me17n45/mev17n46: DME: Botschaft (Status Rückwärtsgang, 3B0) fehlt |
| 0x316E | 316E me17n45/mev17n46: DME: Botschaft (Status Crashabschaltung EKP, 135) fehlt |
| 0x3177 | 3177 me17n45/mev17n46: DME: Botschaft (Anforderung Radmoment Antriebstrang, BF) |
| 0x3179 | 3179 me17n45/mev17n46: DME: Botschaft (Anforderung Radmoment Antriebstrang, BF) |
| 0x317A | 317A me17n45/mev17n46: DME: Botschaft (Anforderung Radmoment Antriebstrang, BF) fehlt |
| 0x317E | 317E me17n45/mev17n46: DME: Botschaft (Uhrzeit/ Datum, 2F8) fehlt |
| 0x3182 | 3182 me17n45/mev17n46: DME: Botschaft (Status Anhänger, 2E4) fehlt |
| 0x31A2 | 31A2 me17n45/mev17n46: DME: Botschaft (Status Standverbraucher, 5E0) |
| 0x3F62 | 3F62 d50m57d0/d50m57e0/d60m47a0/d62m57b0/d63mm670: DDE: Fahrgeschwindigkeitssignal über CAN |
| 0x412F | 412F d70n47a0/d71n47a0/d71n47b0/d73n57b0/d73n57c0: DDE: Botschaft (ZV und Klappenzustand, 0x2FC) |
| 0x41A6 | 41A6 d60m57a0/d62m57a0: DDE: Botschaft (CBS Reset, 0x580) |
| 0x41A7 | 41A7 d50m57d0/d50m57e0/d60m47a0: DDE: Botschaft (CBS Reset, 0x580) |
| 0x41A8 | 41A8 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0: DDE: Botschaft (CBS Reset, 0x580) |
| 0x430F | 430F d60m57a0/d62m57a0: DDE: Botschaft (Fahrzeugtyp, 388) |
| 0x4325 | 4325 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0: DDE: Botschaft (Drehmoment SSG, 0xBD) |
| 0x4326 | 4326 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0: DDE: Botschaft (Drehmoment SSG, 0xBD) |
| 0x4327 | 4327 d50m57d0/d50m57e0/d60m47a0: DDE: Botschaft (Drehmoment SSG, 0xBD) |
| 0x4328 | 4328 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0: DDE: Botschaft (Drehmoment SSG, 0xBD) |
| 0x438A | 438A d60m57a0/d62m57a0: DDE: Botschaft (Anforderung Radmoment Antriebstrang, BF) |
| 0x438B | 438B d60m57a0/d62m57a0: DDE: Botschaft (Anforderung Radmoment Antriebstrang, BF) |
| 0x438D | 438D d60m57a0/d62m57a0: DDE: Botschaft (Anforderung Radmoment Antriebstrang, BF) |
| 0x4445 | 4445 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0/d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Drehmoment AFS, 0xB9) |
| 0x4446 | 4446 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0/d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Drehmoment AFS, 0xB9) |
| 0x4447 | 4447 d50m57d0/d50m57e0/d60m47a0: DDE: Botschaft (Drehmoment AFS, 0xB9) |
| 0x4448 | 4448 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0/d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Drehmoment AFS, 0xB9) |
| 0x4457 | 4457 d50m57d0/d50m57e0/d60m47a0/d62m57b0/d63mm670: DDE: Botschaft (Lenkradwinkel, 0xC4) |
| 0x4458 | 4458 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0/d62m57b0/d63mm670/d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Lenkradwinkel, 0xC4) |
| 0x453B | 453B d60m57a0/d62m57a0/d62m57b0/d63mm670: DDE: Power Train CAN Bus |
| 0x453C | 453C d62m57b0/d63mm670: DDE: Power Train CAN Bus |
| 0x453D | 453D d62m57b0/d63mm670: DDE: Power Train CAN Bus |
| 0x4567 | 4567 d50m57d0/d50m57e0/d60m47a0: DDE: Botschaft (Codierung PM, 0x395) |
| 0x4568 | 4568 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0: DDE: Botschaft (Codierung, 0x395) |
| 0x4577 | 4577 d50m57d0/d50m57e0/d60m47a0: DDE: Botschaft (Steuerung Crashabschaltung EKP, 0x135) |
| 0x4578 | 4578 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0/d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Steuerung Crashabschaltung EKP, 0x135) |
| 0x4598 | 4598 d50m57d0/d50m57e0/d60m47a0: DDE: Botschaft (Programmierung Stufentempomat, 0x331) |
| 0x45F5 | 45F5 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0/d62m57b0/d63mm670: DDE: Botschaft (Drehmoment ACC, 0xB7) |
| 0x45F6 | 45F6 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0/d62m57b0/d63mm670: DDE: Botschaft (Drehmoment ACC, 0xB7) |
| 0x45F7 | 45F7 d50m57d0/d50m57e0/d60m47a0/d62m57b0/d63mm670: DDE: Botschaft (Drehmoment ACC, 0xB7) |
| 0x45F8 | 45F8 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0/d62m57b0/d63mm670: DDE: Botschaft (Drehmoment ACC, 0xB7) |
| 0x4638 | 4638 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0/d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Standverbraucher) |
| 0x47F8 | 47F8 d60m57a0/d62m57a0/d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Sitzbelegung/Gurt, 0x2FA) |
| 0x4803 | 4803 d50m57d0/d50m57e0/d60m47a0/d62m57b0/d63mm670: DDE: Botschaft (Drehmomentüberwachung) vom ACC/LDM |
| 0x4810 | 4810 d50m57d0/d50m57e0/d60m47a0/d62m57b0/d63mm670: DDE: Botschaft (Drehmomenteingriff) vom ACC/LDM |
| 0x4824 | 4824 d73n57b0/d73n57c0: DDE: Botschaft (Radmomentanforderung, 0xBF) |
| 0x4829 | 4829 d73n57b0/d73n57c0: DDE: Botschaft (Radmomentanforderung, 0xBF) |
| 0x482E | 482E d73n57b0/d73n57c0: DDE: Botschaft (Radmomentanforderung, 0xBF) |
| 0x482F | 482F d73n57b0/d73n57c0: DDE: Botschaft (Radmomentanforderung, 0xBF) |
| 0x4834 | 4834 d73n57b0/d73n57c0: DDE: Botschaft (Drehmomentanforderung DKG, 0xB8) |
| 0x4839 | 4839 d73n57b0/d73n57c0: DDE: Botschaft (Drehmomentanforderung DKG, 0xB8) |
| 0x483E | 483E d73n57b0/d73n57c0: DDE: Botschaft (Drehmomentanforderung DKG, 0xB8) |
| 0x483F | 483F d73n57b0/d73n57c0: DDE: Botschaft (Drehmomentanforderung DKG, 0xB8) |
| 0x48A5 | 48A5 d60m57a0/d62m57a0: DDE: Botschaft (Fahrzeugmodus, 0x315) |
| 0x48A6 | 48A6 d60m57a0/d62m57a0: DDE: Botschaft (Fahrzeugmodus, 0x315) |
| 0x48A8 | 48A8 d60m57a0/d62m57a0: DDE: Botschaft (Fahrzeugmodus, 0x315) |
| 0x4910 | 4910 d70n47a0/d71n47a0/d71n47b0/d73n57c0/d73n57b0: DDE: CAN Bus B |
| 0x497F | 497F d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Status Rückwärtsgang, 0x3B0) |
| 0x4991 | 4991 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0/d62m57b0/d63mm670/d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Kombi, 0x1B4) |
| 0x4992 | 4992 d50m57d0/d50m57e0/d60m47a0/d62m57b0/d63mm670: DDE: Botschaft (Kombi, 0x1B4) |
| 0x4993 | 4993 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0/d62m57b0/d63mm670/d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Kombi, 0x1B4) |
| 0x49A2 | 49A2 d50m57d0/d50m57e0/d60m47a0/d62m57b0/d63mm670: DDE: Botschaft (Außentemperatur, 0x310) |
| 0x49A3 | 49A3 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0/d62m57b0/d63mm670/d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Außentemperatur, 0x310) |
| 0x49A8 | 49A8 d60m57a0/d62m57a0: DDE: Botschaft (Anforderung Elektrolüfter, 0x580) |
| 0x49B8 | 49B8 d60m57a0/d62m57a0/d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Status EKP, 0x335) |
| 0x49F2 | 49F2 d50m57d0/d50m57e0/d60m47a0/d62m57b0/d63mm670: DDE: Botschaft (Geschwindigkeit, 0xCE) |
| 0x49F3 | 49F3 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0/d62m57b0/d63mm670/d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Geschwindigkeit, 0xCE) |
| 0x4A89 | 4A89 d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Getriebedaten, 0xBA) |
| 0x4A98 | 4A98 d60m57a0/d62m57a0: DDE: Botschaft (CBS Reset, 0x580) |
| 0x4AA8 | 4AA8 d60m57a0/d62m57a0/d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Status Anhänger, 0x2E4) |
| 0x4AB8 | 4AB8 d60m57a0/d62m57a0/d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Uhrzeit/Datum, 0x2F8) |
| 0x4AEF | 4AEF d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Getriebedaten, 0xBA) |
| 0x4B12 | 4B12 d73n57b0/d73n57c0: DDE: Botschaft (Geschwindigkeit, 0x1A0) |
| 0x4B13 | 4B13 d73n57b0/d73n57c0: DDE: Botschaft (Geschwindigkeit, 0x1A0) |
| 0x4B2D | 4B2D d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Bedienung MSA, 0x195) |
| 0x4B4A | 4B4A d60m57a0/d62m57a0/d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Drehmomentanforderung AFS, 0xB1) |
| 0x4B4B | 4B4B d60m57a0/d62m57a0/d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Drehmomentanforderung AFS, 0xB1) |
| 0x4B4D | 4B4D d60m57a0/d62m57a0/d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Drehmomentanforderung AFS, 0xB1) |
| 0x4BE2 | 4BE2 d50m57d0/d50m57e0/d60m47a0/d62m57b0/d63mm670: DDE: Botschaft (Getriebedaten, 0xBA) |
| 0x4BE3 | 4BE3 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0/d62m57b0/d63mm670/d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Getriebedaten, 0xBA) |
| 0x4BE5 | 4BE5 d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Getriebedaten 2, 0x1A2) |
| 0x4BE6 | 4BE6 d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Getriebedaten 2, 0x1A2) |
| 0x4BE7 | 4BE7 d50m57d0/d50m57e0/d60m47a0/d62m57b0/d63mm670: DDE: Botschaft (Getriebedaten 2, 0x1A2) |
| 0x4BE8 | 4BE8 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0/d62m57b0/d63mm670: DDE: Botschaft (Getriebedaten 2, 0x1A2) |
| 0x4BF2 | 4BF2 d50m57d0/d50m57e0/d60m47a0/d62m57b0/d63mm670: DDE: Botschaft (Klimaanlage, 0x1B5) |
| 0x4BF3 | 4BF3 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0/d62m57b0/d63mm670/d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Klimaanlage, 0x1B5) |
| 0x4BF7 | 4BF7 d50m57d0/d50m57e0/d60m47a0/d62m57b0/d63mm670/d73n57b0/d73n57c0: DDE: Botschaft (Reichweite, 0x330) |
| 0x4BF8 | 4BF8 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0/d62m57b0/d63mm670/d70n47a0/d71n47a0/d71n47b0/d73n57b0/d73n57c0: DDE: Botschaft (Reichweite, 0x330) |
| 0x4C00 | 4C00 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0/d62m57b0/d63mm670/d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Fahrgeschwindigkeitsregelung/ACC, 0x194) |
| 0x4C01 | 4C01 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0/d62m57b0/d63mm670/d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Fahrgeschwindigkeitsregelung/ACC, 0x194) |
| 0x4C02 | 4C02 d50m57d0/d50m57e0/d60m47a0/d62m57b0/d63mm670: DDE: Botschaft (Fahrgeschwindigkeitsregelung/ACC, 0x194) |
| 0x4C03 | 4C03 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0/d62m57b0/d63mm670/d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Fahrgeschwindigkeitsregelung/ACC, 0x194) |
| 0x4C12 | 4C12 d50m57d0/d50m57e0/d60m47a0/d62m57b0/d63mm670: DDE: Botschaft (Status DSC, 0x19E) |
| 0x4C13 | 4C13 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0/d62m57b0/d63mm670/d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Status DSC, 0x19E) |
| 0x4C15 | 4C15 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0/d62m57b0/d63mm670/d70n47a0/d71n47a0/d71n47b0/d73n57b0/d73n57c0: DDE: Botschaft (Klemme 15, 0x130) |
| 0x4C16 | 4C16 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0/d62m57b0/d63mm670/d70n47a0/d71n47a0/d71n47b0/d73n57b0/d73n57c0: DDE: Botschaft (Klemme 15, 0x130) |
| 0x4C17 | 4C17 d50m57d0/d50m57e0/d60m47a0/d62m57b0/d63mm670/d73n57b0/d73n57c0: DDE: Botschaft (Klemme 15, 0x130) |
| 0x4C18 | 4C18 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0/d62m57b0/d63mm670/d70n47a0/d71n47a0/d71n47b0/d73n57b0/d73n57c0: DDE: Botschaft (Klemme 15, 0x130) |
| 0x4C20 | 4C20 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0/d62m57b0/d63mm670/d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Drehmoment DSC, 0xB6) |
| 0x4C21 | 4C21 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0/d62m57b0/d63mm670/d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Drehmoment DSC, 0xB6) |
| 0x4C22 | 4C22 d50m57d0/d50m57e0/d60m47a0/d62m57b0/d63mm670: DDE: Botschaft (Drehmoment DSC, 0xB6) |
| 0x4C23 | 4C23 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0/d62m57b0/d63mm670/d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Drehmoment DSC, 0xB6) |
| 0x4C27 | 4C27 d50m57d0/d50m57e0/d60m47a0/d62m57b0/d63mm670: DDE: Botschaft (Geschwindigkeit, 0x1A0) |
| 0x4C28 | 4C28 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0/d62m57b0/d63mm670/d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Geschwindigkeit, 0x1A0) |
| 0x4C3C | 4C3C d73n57b0/d73n57c0: DDE: Botschaft (Sollmomentanforderung, 0xBB) |
| 0x4C3D | 4C3D d60m57a0/d62m57a0/d70n47a0/d71n47a0/d71n47b0/d73n57b0/d73n57c0: DDE: Botschaft (Sollmomentanforderung, 0xBB) |
| 0x4C97 | 4C97 d73n57b0/d73n57c0: DDE: Botschaft (Fahrererkennung, 0x2F1) |
| 0x4C98 | 4C98 d73n57b0/d73n57c0: DDE: Botschaft (Fahrererkennung, 0x2F1) |
| 0x4C9B | 4C9B d73n57b0/d73n57c0: DDE: Botschaft (Fahrererkennung, 0x2F1) |
| 0x4C9C | 4C9C d73n57b0/d73n57c0: DDE: Botschaft (Fahrererkennung, 0x2F1) |
| 0x4CB8 | 4CB8 d73n57b0/d73n57c0: DDE: Botschaft (Anzeige Getriebe, 0x1D2) |
| 0x4DDD | 4DDD d60m57a0/d62m57a0: DDE: Botschaft (Anzeige Getriebedaten, 0x1D2) |
| 0x4DF0 | 4DF0 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0/d62m57b0/d63mm670/d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Drehmoment Getriebe, 0xB5) |
| 0x4DF1 | 4DF1 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0/d62m57b0/d63mm670/d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Drehmoment Getriebe, 0xB5) |
| 0x4DF2 | 4DF2 d50m57d0/d50m57e0/d60m47a0/d62m57b0/d63mm670: DDE: Botschaft (Drehmoment Getriebe, 0xB5) |
| 0x4DF3 | 4DF3 d50m57d0/d50m57e0/d60m47a0/d60m57a0/d62m57a0/d62m57b0/d63mm670/d70n47a0/d71n47a0/d71n47b0: DDE: Botschaft (Drehmoment Getriebe, 0xB5) |
| 0x4F77 | 4F77 gs19b: EGS: Fehlerhafter Positiver Motoreingriff |
| 0x51A5 | 51A5 gs19b: Getriebesteuerung: Botschaft (Momentenschnittstelle) von der Motorsteuerung fehlt |
| 0x51A7 | 51A7 gs19b: Getriebesteuerung: Botschaft (Motordrehzahl) von der Motorsteuerung fehlt |
| 0x51A8 | 51A8 gs19b: Getriebesteuerung: Botschaft (Drosselklappe/Fahrpedal) von der Motorsteuerung fehlt |
| 0x51AC | 51AC gs19b: EGS: Botschaft (Identifikationsgeber steckt) vom Car Access System fehlt |
| 0x51AD | 51AD gs19b: Getriebesteuerung: Botschaft von der Dynamischen Stabilitäts-Control fehlt |
| 0x51AE | 51AE gs19b: Getriebesteuerung: Botschaft (Bremslichtschalter) von der Motorsteuerung fehlt |
| 0x51BB | 51BB ssg_60: SMG: Signal des Klemme 15 Status fehlerhaft |
| 0x55C0 | 55C0 vgsg90: VTG: Allrad Abschaltung. Abbruch Allrad-Notlaufregelung ( falsche CAN-Signale) |
| 0x55C2 | 55C2 vgsg90: VTG: Allrad Abschaltung. Keine DXC Sollmomentenvorgabe. |
| 0x55C4 | 55C4 vgsg90: VTG: Botschaft (Sollmoment, BB) |
| 0x55C5 | 55C5 vgsg90: VTG: Botschaft (Motormoment 3, AA) |
| 0x55C6 | 55C6 vgsg90: VTG: Botschaft (Geschwindigkeit Rad, CE) |
| 0x55C7 | 55C7 vgsg90: VTG: Botschaft (Geschwindigkeit, 1A0) |
| 0x55C8 | 55C8 vgsg90: VTG: Botschaft (Klemmenstatus, 130) |
| 0x55C9 | 55C9 vgsg90: VTG: Botschaft (Motormoment 1, A8) |
| 0x55CA | 55CA vgsg90: VTG: Botschaft (Kilometerstand, 330) |
| 0x55CB | 55CB vgsg90: VTG: Botschaft (Aussentemperatur Relativzeit, 310) |
| 0x55CD | 55CD vgsg90: VTG: Botschaft (Status DSC, 19E) |
| 0x55CE | 55CE vgsg90: VTG: Botschaft (Getriebedaten, BA) |
| 0x55CF | 55CF vgsg90: VTG: Botschaft (Getriebedaten, 1A2) |
| 0x55D0 | 55D0 vgsg90: VTG: Botschaft (Lenkradwinkel, C4) |
| 0x57B3 | 57B3 gs1912: EGS: Botschaft von der Motorsteuerung fehlt: Drehmoment1 |
| 0x57B5 | 57B5 gs1912: EGS: Botschaft von der Motorsteuerung fehlt: Drehmoment3 |
| 0x57B6 | 57B6 gs1912: EGS: Botschaft von der Motorsteuerung fehlt: Engine1 |
| 0x57B9 | 57B9 gs1912: EGS: Botschaft von der DSC fehlt: Geschwindigkeit |
| 0x57BA | 57BA gs1912: EGS: Botschaft von der DSC fehlt: Status DSC |
| 0x57BB | 57BB gs1912: EGS: Botschaft von der DSC fehlt: Radgeschwindigkeit |
| 0x57BC | 57BC gs1912: EGS: Botschaft vom Kombi fehlt: Kilometerstand/Reichweite |
| 0x57C0 | 57C0 gs1912: EGS: Botschaft vom Kombi fehlt: Aussentemperatur Relativzeit |
| 0x57C1 | 57C1 gs1912: EGS: Botschaft von der DSC fehlt: Radtoleranzvergleich |
| 0x57C2 | 57C2 gs1912: EGS: Botschaft vom Kombi fehlt: Status Kombi |
| 0x57C3 | 57C3 gs1912: EGS: Botschaft von der Motorsteuerung fehlt: Geschwindigkeitsregelung |
| 0x57C5 | 57C5 gs1912: EGS: Botschaft von der DSC fehlt: Drehmomentanforderung DSC |
| 0x57C7 | 57C7 gs1912: EGS: Botschaft von der Motorsteuerung fehlt: Drehmoment2 |
| 0x57CB | 57CB gs1912: EGS: Botschaft von der DSC fehlt: Drehmomentanforderung DSC |
| 0x57CC | 57CC gs1912: EGS: Botschaft von der Motorsteuerung fehlt: Engine2 |
| 0x57D0 | 57D0 gs1912: EGS: Botschaft von der DSC fehlt: ASC1 |
| 0x57D1 | 57D1 gs1912: EGS: Botschaft von der DSC fehlt: ASC2 |
| 0x57D2 | 57D2 gs1912: EGS: Botschaft von der DSC fehlt: ASC3 |
| 0x57D3 | 57D3 gs1912: EGS: Botschaft von der DSC fehlt: ASC4 |
| 0x57D4 | 57D4 gs1912: EGS: Botschaft von der Motorsteuerung fehlt: DME1_DDE1 |
| 0x57D5 | 57D5 gs1912: EGS: Botschaft von der Motorsteuerung fehlt: DME2_DDE2 |
| 0x57D6 | 57D6 gs1912: EGS: Botschaft von der Motorsteuerung fehlt: DME3_DDE3 |
| 0x57D7 | 57D7 gs1912: EGS: Botschaft vom Kombi fehlt: INSTR2 |
| 0x57D8 | 57D8 gs1912: EGS: Botschaft vom Kombi fehlt: INSTR3 |
| 0x57D9 | 57D9 gs1912: EGS: Botschaft von der Motorsteuerung fehlt: DME4_DDE4 |
| 0x57DB | 57DB gs1912: EGS: Botschaft von der Motorsteuerung fehlt: Radmoment Antriebsstrang2 |
| 0x57DF | 57DF gs1912: EGS: Botschaft von der Motorsteuerung fehlt: OBD Daten Motor (BN2000) |
| 0x57E0 | 57E0 gs1912: EGS: Botschaft von der DSC fehlt: ASC5 |
| 0x57F0 | 57F0 gs1912: EGS: Botschaft von der Motorsteuerung Checksummenfehler: Drehmoment1 |
| 0x57F1 | 57F1 gs1912: EGS: Botschaft von der Motorsteuerung Checksummenfehler: Drehmoment3 |
| 0x57F4 | 57F4 gs1912: EGS: Botschaft von der DSC Checksummenfehler: Status DSC |
| 0x57F6 | 57F6 gs1912: EGS: Botschaft von der DSC Checksummenfehler: Geschwindigkeit |
| 0x57FB | 57FB gs1912: EGS: Botschaft von der Motorsteuerung Checksummenfehler: Drehmoment2 |
| 0x57FC | 57FC gs1912: EGS: Botschaft von der DSC Checksummenfehler: Drehmomentanforderung DSC |
| 0x5E8C | 5E8C dxc_90: DSC: Botschaft ( Anhänger 2E4) fehlt |
| 0x5F07 | 5F07 dxc_90: DSC: Botschaft (ACC-Sensor, AD) fehlt |
| 0x5F08 | 5F08 dxc_90: DSC: Botschaft (ACC-Sensor, AD) fehlerhaft |
| 0x5F2D | 5F2D dxc_90: DSC: Botschaft (ACC-Sensor, AD) fehlerhaft |
| 0x5F2E | 5F2E dxc_90: DSC: Botschaft (Getriebe 0BA) fehlt |
| 0x5F34 | 5F34 dxc_90: DSC: Botschaft (Motorsteuerung, A8) fehlerhaft |
| 0x5F35 | 5F35 dxc_90: DSC: Botschaft (Motorsteuerung, A9) fehlerhaft |
| 0x5F36 | 5F36 dxc_90: DSC: Botschaft (Motorsteuerung, AA) fehlerhaft |
| 0x5F5C | 5F5C dxc_90: DSC: Botschaft (AHM, 2E4) fehlt |
| 0x5FFF | 5FFF edck65: EDC: CAN-Klemmenstatus: Timeout oder ungueltig |
| 0x6E1D | 6E1D dxc_90: DSC: Botschaft (Motorsteuerung B4) fehlerhaft |
| 0x6E1E | 6E1E dxc_90: DSC: Botschaft (Motorsteuerung, B4) fehlerhaft |
| 0x6E1F | 6E1F dxc_90: DSC: Botschaft (Motorsteuerung AC) fehlerhaft |
| 0x6E20 | 6E20 dxc_90: DSC: Botschaft (Motorsteuerung, AC) fehlerhaft |
| 0x6E9E | 6E9E dxc_90: DSC: Botschaft (EMF, 1FD) fehlerhaft |
| 0x6F4B | 6F4B dxc_90: DSC: Botschaft (LDM, D5) fehlerhaft |
| 0x6F52 | 6F52 dxc_90: DSC: Botschaft (SZL, C8) fehlt |
| 0x6F56 | 6F56 dxc_90: DSC: Botschaft (Motorsteuerung, B4) fehlt |
| 0x6F57 | 6F57 dxc_90: DSC: Botschaft (Motorsteuerung, AC) fehlt |
| 0x6F63 | 6F63 dxc_90: DSC: Botschaft (RDC, 31C) fehlt |
| 0x6F65 | 6F65 dxc_90: DSC: Botschaft (Kombi, 1B4) fehlerhaft |
| 0x6F70 | 6F70 dxc_90: DSC: Botschaft (EMF, 1FD) fehlt |
| 0x6F71 | 6F71 dxc_90: DSC: Botschaft (EMF, 1FD) fehlerhaft |
| 0x6F73 | 6F73 dxc_90: DSC: Botschaft (EMF, 315) fehlerhaft |
| 0x6F74 | 6F74 dxc_90: DSC: Botschaft (Motorsteuerung, 308) fehlt |
| 0x6F75 | 6F75 dxc_90: DSC: Botschaft (Motorsteuerung, 308) fehlerhaft |
| 0x93C6 | 93C6 acsm2: ACSM: Lehnenverriegelung (E93)/Sitzmemory (E70/E71) für Fahrersitz |
| 0x93C7 | 93C7 acsm2: ACSM: Lehnenverriegelung für Beifahrersitz |
| 0x93FB | 93FB acsm2/mrs5: MRS / ACSM: Botschaft (Geschwindigkeit) von DSC fehlt |
| 0x940D | 940D acsm2/mrs5: MRS / ACSM: Botschaft (Helligkeit LCD) von der Instrumentenkombination fehlt |
| 0x9414 | 9414 acsm2: ACSM: Botschaft vom Steuergerät DSC fehlt |
| 0x9415 | 9415 acsm2: ACSM: Botschaft vom Steuergerät DSC fehlt |
| 0xA173 | A173 cccg60: CCC-GW: K-CAN Leitungsfehler |
| 0xA3A8 | A3A8 komb87: KOMBI: Botschaft fehlt |
| 0xA3A9 | A3A9 komb87: KOMBI: Botschaft (Lenkstocktastersignal, 1EE) |
| 0xA3AB | A3AB komb87: KOMBI: Botschaft (LDM 190) |
| 0xA3AC | A3AC komb87: KOMBI: Botschaft (Wegstrecke, 1A6) |
| 0xA3AD | A3AD komb87: KOMBI: Botschaft (Motordaten, 1D0) |
| 0xA3AE | A3AE komb87: KOMBI: Botschaft (Motordrehzahl, 0AA) |
| 0xA3AF | A3AF komb87: KOMBI: Botschaft (Geschwindigkeitssollwert, 200) |
| 0xA3B1 | A3B1 komb87: KOMBI: Botschaft (Blinkerkontrollleuchten-Zyklus, 1F6) |
| 0xA3B2 | A3B2 komb87: KOMBI: Botschaft (Klemmenstatus, 130) |
| 0xA3B4 | A3B4 komb87: KOMBI: Botschaft (Beleuchtungszustand, 21A) |
| 0xA3B9 | A3B9 komb87: KOMBI: Sporadischer Fehler (Ausfall DSC-Botschaft, 19E): Keine Reparaturmaßnahme verfügbar |
| 0xA3BB | A3BB komb87: KOMBI: Botschaft (Türenstatus, 2FC) |
| 0xA3BD | A3BD komb87: KOMBI: Botschaft (JB Junction Box, 0C0) |
| 0xA3BE | A3BE komb87: KOMBI: Botschaft (Car Access System, 4C0) |
| 0xA3C0 | A3C0 komb87: KOMBI: Botschaft (Anhängermodul, 4F1) |
| 0xA3C1 | A3C1 komb87: KOMBI: Botschaft (FRM Fußraummodul, 4F0) |
| 0xA548 | A548 komb87: KOMBI: Botschaft (Aktivlenkung, 1FC) |
| 0xA54A | A54A komb87: KOMBI: Botschaft (Car Access System, 394) |
| 0xA54B | A54B komb87: KOMBI: Botschaft (Electrical Power Steering, 1FB) |
| 0xA54C | A54C komb87: KOMBI: Botschaft (Rohdaten Füllstand Tank, 349) |
| 0xA54D | A54D komb87: KOMBI: Botschaft (Elektrische Kraftstoffpumpe, 335) |
| 0xA54E | A54E komb87: KOMBI: Botschaft (Sitzlehnenverriegelung Fahrer, 34B) |
| 0xA54F | A54F komb87: KOMBI: Botschaft (Sitzlehnenverriegelung Beifahrer, 34D) |
| 0xA550 | A550 komb87: KOMBI: Botschaft (Geschwindigkeit, 1A0) |
| 0xA551 | A551 komb87: KOMBI: Botschaft (Kontakt Handbremse, 34F) |
| 0xA555 | A555 komb87: KOMBI: Botschaft (Sitzbelegung Gurtkontakte, 2FA) |
| 0xA556 | A556 komb87: KOMBI: Botschaft (Ausfall HDC-Anzeige, 32D) |
| 0xA560 | A560 komb87: KOMBI: Botschaft (Anzeige Schalthinweis) fehlt |
| 0xA562 | A562 komb87: KOMBI: Botschaft (Status MSA, 308, MSA an KOMBI) |
| 0xA565 | A565 komb87: KOMBI: Botschaft (Anzeige Motordaten, 175, DME,DDE an KOMBI) fehlt |
| 0xA568 | A568 komb87: KOMBI: Botschaft (Status Verdeck Cabrio, 27E, CVM an KOMBI) fehlt |
| 0xA56A | A56A komb87: KOMBI: Botschaft (Status Anforderung EMF, 1FD, EMF an KOMBI) fehlt |
| 0xA56B | A56B komb87: KOMBI: Botschaft (Fahrzeugmodus, 315, JBBF an KOMBI) fehlt |
| 0xA737 | A737 jbbf70: JBE: Botschaft (K-CAN: Wasserventil, 2BF) fehlt |
| 0xA73B | A73B jbbf70: JBE: Fehler Botschaft (K-CAN: Wasserventil, 2BF) |
| 0xA73C | A73C jbbf70: JBE: Fehler Botschaft (PT-CAN: Zusatzwasserpumpe, 37D) |
| 0xA73D | A73D jbbf70: JBE: Botschaft (PT-CAN: Zusatzwasserpumpe, 37D) fehlt |
| 0xC904 | C904 jbbf87: JBE: K-CAN Leitungsfehler |
| 0xC905 | C905 jbbf87: JBE: K-CAN Leitungsfehler |
| 0xC907 | C907 jbbf70/jbbf87: JBE: K-CAN Kommunikationsfehler |
| 0xC908 | C908 jbbf70: JBE: K-CAN Leitungsfehler |
| 0xC910 | C910 jbbf87: JBE: Botschaft von IHKA fehlt |
| 0xC911 | C911 jbbf87: JBE: Botschaft von IHKA fehlt |
| 0xC912 | C912 jbbf87: JBE: Botschaft von IHKA fehlt |
| 0xC913 | C913 jbbf87: JBE: Botschaft von IHKA fehlt |
| 0xC917 | C917 jbbf70: JBE: Fehler Botschaft (K-CAN: Zusatzwasserpumpe, 246) |
| 0xC919 | C919 jbbf70: JBE: Botschaft (PT-CAN: Motorwärmestrom, 1B6) fehlt |
| 0xC91C | C91C jbbf70: JBE: Fehler Botschaft (K-CAN: Sitzheizung Beifahrerseite, 1E8) |
| 0xC91D | C91D jbbf70: JBE: Fehler Botschaft (K-CAN: Kompressorkupplung, 246) |
| 0xC91E | C91E jbbf70: JBE: Botschaft (K-CAN: Klemmenstatus, 130) fehlt |
| 0xC91F | C91F jbbf70: JBE: Botschaft (K-CAN: Kilometerstand/Reichweite, 330) fehlt |
| 0xC920 | C920 jbbf70: JBE: Botschaft (PT-CAN: Geschwindigkeit, 1A0) falsch oder fehlt |
| 0xC921 | C921 jbbf70: JBE: Botschaft (PT-CAN: Drehmoment, AA) falsch oder fehlt |
| 0xC922 | C922 jbbf70: JBE: Botschaft (PT-CAN: Lenkwinkel, C4) falsch oder fehlt |
| 0xC923 | C923 jbbf70: JBE: Fehler Botschaft (PT-CAN: Drehmoment Getriebe, B5) |
| 0xC924 | C924 jbbf70: JBE: Botschaft (PT-CAN: Drehmoment Getriebe, B5) fehlt |
| 0xC944 | C944 acsm2/mrs5: MRS / ACSM: K-CAN Leitungsfehler |
| 0xC947 | C947 mrs5: MRS: K-CAN Kommunikationsfehler |
| 0xC94B | C94B acsm2: ACSM: F-CAN Kommunikationsfehler |
| 0xCD87 | CD87 d60m57a0/d62m57a0/d62m57b0/d63mm670/d70n47a0/d71n47a0/d71n47b0/me9n45/mev9n46/mev9n46l/msd80/msd80n43/mss60/msv80/d50m57d0/d50m57e0/d60m47a0/msv70: DME/DDE: PT-CAN Kommunikationsfehler |
| 0xCD8F | CD8F msv70: DME: PT-CAN Kommunikationsfehler |
| 0xCD94 | CD94 msd80/msd80n43/mss60/msv70/msv80: DME: Botschaft (Außentemperatur/Relativzeit, 310) |
| 0xCD95 | CD95 msd80/msd80n43/mss60/msv70/msv80: DME: Botschaft (Bedienung Tempomat/ACC, 194) |
| 0xCD96 | CD96 msd80/msv70/msv80: DME: Botschaft (Drehmomentanforderung ACC, B7) |
| 0xCD97 | CD97 msd80/msd80n43/msv70/msv80: DME: Botschaft (Drehmomentanforderung AFS, B1) |
| 0xCD98 | CD98 msd80/msd80n43/mss60/msv70/msv80: DME: Botschaft (Drehmomentanforderung DSC, B6) |
| 0xCD99 | CD99 msd80/msd80n43/msv70/msv80: DME: Botschaft (Drehmomentanforderung EGS, B5) |
| 0xCD9B | CD9B me9n45/mev9n46l/msd80/msd80n43/mss60/msv70/msv80: DME: Botschaft (Fahrzeugmodus, 315) |
| 0xCD9C | CD9C msd80/msd80n43/mss60/msv70/msv80: DME: Botschaft (Geschwindigkeit, 1A0) |
| 0xCD9D | CD9D msd80/msd80n43/mss60/msv70/msv80: DME: Botschaft (Getriebedaten, BA) |
| 0xCD9E | CD9E msd80/msd80n43/mss60/msv70/msv80: DME: Botschaft (Getriebedaten 2, 1A2) |
| 0xCD9F | CD9F msd80/msd80n43/mss60/msv70/msv80: DME: Botschaft (Kilometerstand/Reichweite, 330) |
| 0xCDA0 | CDA0 msd80/msd80n43/mss60/msv70/msv80: DME: Botschaft (Klemmenstatus, 130) |
| 0xCDA1 | CDA1 me9n45/mev9n46l/msd80/msd80n43/mss60/msv70/msv80: DME: Botschaft (Lenkradwinkel, C4) |
| 0xCDA2 | CDA2 me9n45/mev9n46l/msd80/msd80n43/msv70/msv80: DME: Botschaft (Powermanagement Batteriespannung, 3B4) |
| 0xCDA5 | CDA5 msd80/msd80n43/mss60/msv70/msv80: DME: Botschaft (Status DSC, 19E) |
| 0xCDA6 | CDA6 msd80/msd80n43/msv70/msv80: DME: Botschaft (Status EKP, 335) |
| 0xCDA7 | CDA7 me9n45/mev9n46l/msd80/msd80n43/mss60/msv70/msv80: DME: Botschaft (Status Rückwärtsgang, 3B0) |
| 0xCDA8 | CDA8 msd80/msd80n43/mss60/msv70/msv80: DME: Botschaft (Status KOMBI, 1B4) |
| 0xCDA9 | CDA9 msd80/msd80n43/mss60/msv70/msv80: DME: Botschaft (Klimaanforderung, 1B5) |
| 0xCDAA | CDAA me9n45/mev9n46l/msd80/msd80n43/mss60/msv70/msv80: DME: Botschaft (Status Crashabschaltung EKP, 135) |
| 0xCDAB | CDAB msd80/msd80n43/msv70/msv80: DME: Botschaft (Lampenzustand, 21A) |
| 0xCDAC | CDAC msd80/msv70/msv80: DME: Botschaft (Status Wasserventil, 3B5) |
| 0xCDAD | CDAD msd80/msd80n43/msv70/msv80: DME: Botschaft (Anforderung Radmoment Antriebstrang, BF) |
| 0xCDAE | CDAE msd80/msd80n43/msv70/msv80: DME: Botschaft (Uhrzeit/Datum, 2F8) |
| 0xCDAF | CDAF msd80/msd80n43/mss60/msv70/msv80: DME: Botschaft (Status Anhänger, 2E4) |
| 0xCDB0 | CDB0 msd80/msd80n43/mss60/msv70/msv80: DME: Botschaft (Anzeige Getriebedaten, 1D2) |
| 0xCDB1 | CDB1 msd80/msd80n43/msv80: DME: Botschaft (Status Zentralveriegelung, 2FC) |
| 0xCDB3 | CDB3 msd80/msd80n43/msv80: DME: Botschaft (Drehmomentanforderung Lenkung, B1h) |
| 0xCDB4 | CDB4 msd80/msd80n43/mss60/msv80: DME: Botschaft (Getriebedaten, 3B1) |
| 0xCDB5 | CDB5 msd80/msv80: DME: PT-CAN Kommunikationsfehler |
| 0xCDB8 | CDB8 msd80/mss60/msv80: DME: Botschaft (Drehmomentanforderung DKG, B8) |
| 0xCDBB | CDBB mss60: DME: Botschaft (Radgeschwindigkeiten, CE) |
| 0xCDBC | CDBC mss60: DME: Botschaft (Bedienung Taster M-Drive, 1D6) |
| 0xCDC0 | CDC0 msd80n43: DME: Botschaft (Radgeschwindigkeit, CE) |
| 0xCDC7 | CDC7 d62m57b0/d63mm670: DDE: PT-CAN Kommunikationsfehler |
| 0xCE87 | CE87 afs_70/afs_90: AL: F-CAN Kommunikationsfehler |
| 0xCE8B | CE8B afs_70/afs_90: AL: PT-CAN Kommunikationsfehler |
| 0xCE8C | CE8C afs_70: AL: Botschaft (Radbremsdruecke , ID=2B2) von PT-CAN |
| 0xCE8D | CE8D afs_70: AL: Botschaft (Status MSA, 308 ) von PT-CAN |
| 0xCE91 | CE91 afs_70: AL: Botschaft (Sensorcluster) von F-CAN |
| 0xCE92 | CE92 afs_70: AL: Botschaft (Sensorcluster 3, 0F4) von F-CAN |
| 0xCE96 | CE96 afs_70/afs_90: AL: Botschaft (Radgeschwindigkeiten, 0CE) von DSC F-CAN |
| 0xCE9A | CE9A afs_70: AL: Botschaft (Anhängerdaten, 2E4) von PT-CAN |
| 0xCE9B | CE9B afs_70: AL: Botschaft (Status DXC Kupplung, BC) von PT-CAN |
| 0xCE9C | CE9C afs_70/afs_90: AL: Botschaft (Status DSC, 19E) von DSC PT-CAN |
| 0xCE9D | CE9D afs_70/afs_90: AL: Botschaft (Motormoment 1, 0A8) von DME PT-CAN |
| 0xCE9E | CE9E afs_70/afs_90: AL: Botschaft (Motormoment 3, 0AA) von DME PT-CAN |
| 0xCE9F | CE9F afs_70/afs_90: AL: Botschaft (Motordaten, 1D0) von DME PT-CAN |
| 0xCEA0 | CEA0 afs_70: AL: Botschaft (Getriebedaten 1, BA) von EGS PT-CAN |
| 0xCEA1 | CEA1 afs_70/afs_90: AL: Botschaft (Klemmenstatus, 130) von CAS PT-CAN |
| 0xCEA3 | CEA3 afs_70/afs_90: AL: Botschaft (Kilometerstand, 330) von KOMBI PT-CAN |
| 0xCEC7 | CEC7 ekp360/ekpm60_2/ekpm60_3: EKPS: PT-CAN Kommunikationsfehler |
| 0xCED4 | CED4 ekp360/ekpm60_2/ekpm60_3: EKPS: Botschaft von Motorsteuerung (0xAA) fehlt |
| 0xCF07 | CF07 dkg_90/gs1912/gs19d/gs19b: Getriebesteuerung: Kommunikationsfehler: PT-CAN |
| 0xCF10 | CF10 dkg_90: DKG: Botschaft (Anforderung Radmoment Antriebsstrang, PT-CAN) vom LDM |
| 0xCF11 | CF11 dkg_90: DKG: Botschaft (Außentemperatur /Relativzeit, PT-CAN) vom Kombiinstrument |
| 0xCF12 | CF12 dkg_90: DKG: Botschaft (Bedienung Getriebewahlschalter 2, PT-CAN) vom GWS |
| 0xCF13 | CF13 dkg_90: DKG: Botschaft (Drehmoment 1, PT-CAN) von der Motorsteuerung |
| 0xCF2B | CF2B gs1912/gs19b/gs19d: EGS: Botschaft vom Längsdynamikmanagement fehlt |
| 0xCF2C | CF2C gs1912: EGS: Botschaft von der Motorsteuerung Checksummenfehler: Engine Controller |
| 0xCF2D | CF2D gs1912: EGS: Botschaft von der DSC Checksummenfehler: DSC Controller |
| 0xCF2E | CF2E gs1912: EGS: Botschaft von der DSC Fehler Alive Zähler: ASC5 |
| 0xCF2F | CF2F gs1912: EGS: Botschaft von der DSC Checksummenfehler: ASC5 |
| 0xCF33 | CF33 gs19d: EGS: Botschaft von der Motorsteuerung fehlt |
| 0xCF34 | CF34 gs19d: EGS: Botschaft von der DSC |
| 0xCF35 | CF35 gs19d: EGS: Botschaften vom CAS |
| 0xCF37 | CF37 gs19d: EGS: Botschaft von CAS auf K-Bus fehlerhaft |
| 0xCF4B | CF4B lmv_84/vgsg90: VTG: PT-CAN Kommunikationsfehler |
| 0xCF54 | CF54 vgsg90: VTG: Botschaft (Sollmoment, BB) |
| 0xCF55 | CF55 vgsg90: VTG: Botschaft (Motormoment 3, AA) |
| 0xCF56 | CF56 vgsg90: VTG: Botschaft (Geschwindigkeit Rad, CE) |
| 0xCF57 | CF57 vgsg90: VTG: Botschaft (Geschwindigkeit, 1A0) |
| 0xCF5C | CF5C lmv_84: Botschaft (Getriebedaten, BA) fehlt |
| 0xCF61 | CF61 lmv_84: Botschaft (Status DSC, 19E) fehlt |
| 0xCF62 | CF62 lmv_84: Botschaft (Drehmoment 1, A8) fehlt |
| 0xCF63 | CF63 lmv_84: Botschaft (Drehmoment 3, AA) fehlt |
| 0xCF68 | CF68 lmv_84: Botschaft (Außentemperatur/Relativzeit, 310) fehlerhaft |
| 0xCF69 | CF69 lmv_84: Botschaft (Fahrzeugtyp, 388) fehlerhaft |
| 0xCF6A | CF6A lmv_84: Botschaft (Geschwindigkeit, 1A0) fehlerhaft |
| 0xCF6B | CF6B lmv_84: Botschaft (Radgeschwindigkeit, CE) fehlerhaft |
| 0xCF6C | CF6C lmv_84: Botschaft (Getriebedaten, BA) fehlerhaft |
| 0xCF6D | CF6D lmv_84: Botschaft (Kilometerstand/Reichweite, 330) fehlerhaft |
| 0xCF6E | CF6E lmv_84: Botschaft (Klemmenstatus, 130) fehlerhaft |
| 0xCF6F | CF6F lmv_84: Botschaft (Lenkradwinkel, C4) fehlerhaft |
| 0xCF70 | CF70 lmv_84: Botschaft (Sollmomentanforderung, BB) fehlerhaft |
| 0xCF71 | CF71 lmv_84: Botschaft (Status DSC, 19E) fehlerhaft |
| 0xCF72 | CF72 lmv_84: Botschaft (Drehmoment 1, A8) fehlerhaft |
| 0xCF73 | CF73 lmv_84: Botschaft (Drehmoment 3, AA) fehlerhaft |
| 0xD007 | D007 ldm_90: LDM: PT-CAN Kommunikationsfehler |
| 0xD00B | D00B ldm_90: LDM: S-CAN Kommunikationsfehler |
| 0xD014 | D014 ldm_90: LDM: Botschaft Getriebedaten (1D2) |
| 0xD016 | D016 ldm_90: LDM: Botschaft Bedienung FGR/ACC (194) |
| 0xD018 | D018 ldm_90: LDM: Botschaft Drehmoment 1 (A8) |
| 0xD019 | D019 ldm_90: LDM: Botschaft Drehmoment 2 (A9) |
| 0xD01A | D01A ldm_90: LDM: Botschaft Drehmoment 3 (AA) |
| 0xD01C | D01C ldm_90: LDM: Botschaft Geschwindigkeit (1A0) |
| 0xD01E | D01E ldm_90: LDM: Botschaft Kilometerstand/Reichweite (330) |
| 0xD01F | D01F ldm_90: LDM: Botschaft Klemmenstatus (130) |
| 0xD021 | D021 ldm_90: LDM: Botschaft ACC (159) |
| 0xD023 | D023 ldm_90: LDM: Botschaft Radgeschwindigkeit (CE) |
| 0xD024 | D024 ldm_90: LDM: Botschaft Radmoment Antriebsstrang 1 (B4) |
| 0xD025 | D025 ldm_90: LDM: Botschaft Radmoment Antriebsstrang 2, (AC) |
| 0xD026 | D026 ldm_90: LDM: Botschaft Radmoment Bremse (E1) |
| 0xD029 | D029 ldm_90: LDM: Botschaft Status ACC (15C) |
| 0xD02A | D02A ldm_90: LDM: Botschaft Status Anhaenger (2E4) |
| 0xD02B | D02B ldm_90: LDM: Botschaft Status DSC (19E) |
| 0xD02F | D02F ldm_90: LDM: Botschaft Sollmomentanforderung (BB) |
| 0xD030 | D030 ldm_90: LDM: Botschaft Status Kombi (1B4) |
| 0xD031 | D031 ldm_90: LDM: Botschaft Fahrgestellnummer (380) |
| 0xD104 | D104 rdc_60/rdc_can/rdckwp: RDC: K-CAN Leitungsfehler |
| 0xD107 | D107 rdc_60/rdc_can/rdckwp: RDC: K-CAN Kommunikationsfehler |
| 0xD110 | D110 rdckwp: Botschaft (Klemmen, 0x130) fehlt, Empfänger RDC (K-CAN), Sender CAS (FlexRay) |
| 0xD111 | D111 rdckwp: Botschaft (Aussentemperatur, 0x2CA) fehlt, Empfänger RDC (K-CAN), Sender KOMBI (FlexRay) |
| 0xD112 | D112 rdckwp: Botschaft (Kilometerstand, 0x330) fehlt, Empfänger RDC (K-CAN), Sender KOMBI (FlexRay) |
| 0xD113 | D113 rdckwp: Botschaft (Daten Antriebsstrang, 0x1D0) fehlt, Empfänger RDC (K-CAN), Sender DME/DDE (FlexRay) |
| 0xD114 | D114 rdckwp: Botschaft (Geschwindigkeit, 0x1A0) fehlt, Empfänger RDC (K-CAN), Sender DSC (FlexRay) |
| 0xD13E | D13E rdc_60/rdc_can: RDC: Fehler Botschaft vom Steuergerät |
| 0xD147 | D147 acc2/lrr_60: ACC: PT-CAN Kommunikationsfehler |
| 0xD204 | D204 ctm_89/ctm_93_5/cvm_88_2: CTM/CVM: K-CAN Leitungsfehler |
| 0xD207 | D207 ctm_89/ctm_93_5/cvm_88_2: CTM/CVM: K-CAN Kommunikationsfehler |
| 0xD214 | D214 cvm_88_2: CVM: Botschaft (Außentemperatur) fehlt |
| 0xD215 | D215 cvm_88_2: CVM: Botschaft (Geschwindigkeit) fehlt |
| 0xD216 | D216 cvm_88_2: CVM: Botschaft (Zentralverrriegelung) fehlt |
| 0xD217 | D217 cvm_88_2: CVM: Botschaft (Klemmenstatus) fehlt |
| 0xD218 | D218 cvm_88_2: CVM: Botschaft (Bedienung Taster Verdeck) fehlt |
| 0xD219 | D219 cvm_88_2: CVM: Botschaft (Komfortsteuerung FH/SHD) fehlt |
| 0xD2C4 | D2C4 pgs_65_2: CA: K-CAN Leitungsfehler |
| 0xD2C7 | D2C7 pgs_65_2: CA: K-CAN Kommunikationsfehler |
| 0xD347 | D347 dsc_87/dxc_90: DSC: PT-CAN Kommunikationsfehler |
| 0xD34B | D34B dsc_87/dxc_90: DSC: F-CAN Kommunikationsfehler |
| 0xD34C | D34C dxc_90: DSC: PT-CAN passiv |
| 0xD34D | D34D dxc_90: DSC: F-CAN passiv |
| 0xD354 | D354 dsc_87: DSC: Botschaft (Motor 168) fehlt |
| 0xD355 | D355 dsc_87: DSC: Botschaft (Motor 169) fehlt |
| 0xD356 | D356 dsc_87: DSC: Botschaft (Motor 170) fehlt |
| 0xD357 | D357 dsc_87: DSC: Botschaft (Getriebe 186) fehlt |
| 0xD358 | D358 dsc_87: DSC: Botschaft (Kombi 784) fehlt |
| 0xD359 | D359 dsc_87: DSC: Botschaft (Kombi 816) fehlt |
| 0xD35A | D35A dsc_87: DSC: Botschaft (CAS 304) fehlt |
| 0xD35B | D35B dsc_87: DSC: Botschaft (LDM 213) fehlt |
| 0xD35C | D35C dxc_90: DSC: Botschaft (Kombi 1B4) fehlt |
| 0xD35D | D35D dsc_87: DSC: Botschaft (LDM 419) fehlt |
| 0xD35E | D35E dxc_90: DSC: Botschaft (Temperatur 310) fehlt |
| 0xD360 | D360 dsc_87: DSC: Botschaft (ACC B4) fehlt |
| 0xD361 | D361 dsc_87: DSC: Botschaft (CAS 896) fehlt |
| 0xD362 | D362 dsc_87: DSC: Botschaft (ACC AC) fehlt |
| 0xD363 | D363 dsc_87: DSC: Botschaft (Kombi 1B4) fehlt |
| 0xD364 | D364 dsc_87: DSC: Botschaft (Kombi 194) fehlt |
| 0xD36A | D36A dxc_90: DSC: Botschaft (VTG, BC) fehlt |
| 0xD36B | D36B dxc_90: DSC: Botschaft (VTG, 376) fehlt |
| 0xD370 | D370 dsc_87: DSC: Botschaft (DSC-Sensor 205) fehlt |
| 0xD371 | D371 dsc_87: DSC: Botschaft (DSC-Sensor 209) fehlt |
| 0xD372 | D372 dsc_87: DSC: Botschaft (DSC-Sensor 212) fehlt |
| 0xD373 | D373 dsc_87: DSC: Botschaft (SZL C8, C9) fehlt |
| 0xD374 | D374 dsc_87: DSC: Botschaft (LWS-RAD 195) fehlt |
| 0xD375 | D375 dsc_87: DSC: Botschaft (AFS 280) fehlt |
| 0xD376 | D376 dsc_87: DSC: Botschaft (AFS 287) fehlt |
| 0xD377 | D377 dsc_87: DSC: Botschaft (AHM 740) fehlt |
| 0xD378 | D378 dsc_87: DSC: Botschaft (FRMFA ID 944) fehlerhaft (Rückwärtsgangschalter) |
| 0xD37D | D37D dxc_90: DSC: Botschaft (FZD/RLS, 226) fehlt |
| 0xD37F | D37F dxc_90: DSC: Botschaft (IHKA, 316) fehlt |
| 0xD380 | D380 dxc_90: DSC: Botschaft (IHKA, 31A) fehlt |
| 0xD381 | D381 dxc_90: DSC: Botschaft (Instrumentenkombination, 319) fehlt |
| 0xD382 | D382 dxc_90: DSC: Botschaft LDM (D5) fehlt |
| 0xD383 | D383 dxc_90: DSC: Botschaft LDM (D5) fehlt |
| 0xD396 | D396 emf_89: Botschaft (Drehmoment 1, A8) fehlt |
| 0xD399 | D399 emf_89: Botschaft (Drehmoment 3, AA) fehlt |
| 0xD39C | D39C emf_89: Botschaft (Geschwindigkeit, 1A0) fehlt |
| 0xD39F | D39F emf_89: Botschaft (Getriebedaten, BA) fehlt |
| 0xD3A2 | D3A2 emf_89: Botschaft (Klemmenstatus, 130) fehlt |
| 0xD3A5 | D3A5 emf_89: Botschaft (Motordaten, 1D0) fehlt |
| 0xD3A8 | D3A8 emf_89: Botschaft (Status DSC, 19E) fehlt |
| 0xD3AB | D3AB emf_89: Botschaft (Temperatur_Bremse, 37E) fehlt |
| 0xD3AD | D3AD emf_89: Botschaft (Außentemperatur, 310) fehlt |
| 0xD3AF | D3AF emf_89: Botschaft (Bremsdruck Rad, 2B2) fehlt |
| 0xD3B1 | D3B1 emf_89: Botschaft (Dimmung, 202) fehlt |
| 0xD3B3 | D3B3 emf_89: Botschaft (Nachlaufzeit Stromversorgung, 3BE) fehlt |
| 0xD3B5 | D3B5 emf_89: Botschaft (Radgeschwindigkeit, CE) fehlt |
| 0xD3B7 | D3B7 emf_89: Botschaft (Kilometerstand, 330) fehlt |
| 0xD507 | D507 eps_90: EPS: PT-CAN Kommunikationsfehler |
| 0xD514 | D514 eps_90: EPS: Botschaftsfehler PT-CAN: Motorlauf |
| 0xD515 | D515 eps_90: EPS: Botschaftsfehler PT-CAN: Lenkradwinkel |
| 0xD516 | D516 eps_90: EPS: Botschaftsfehler PT-CAN: Klemmenstatus |
| 0xD517 | D517 eps_90: EPS: Botschaftsfehler PT-CAN: Fahrzeuggeschwindigkeit |
| 0xD747 | D747 edck65: EDC: Pt-CAN Kommunikationsfehler |
| 0xD904 | D904 cas/cas_rr: CAS: K-CAN Leitungsfehler |
| 0xD907 | D907 cas/cas_rr: CAS: K-CAN Kommunikationsfehler |
| 0xD944 | D944 dwa_63/dwa_e65: DWA: K-CAN Leitungsfehler |
| 0xD947 | D947 dwa_63/dwa_e65: DWA: K-CAN Kommunikationsfehler |
| 0xDA04 | DA04 sd_kwp: SHD: K-CAN Leitungsfehler |
| 0xDA07 | DA07 sd_kwp: SHD: K-CAN Kommunikationsfehler |
| 0xDE84 | DE84 fzd_87: FZD: K-CAN Leitungsfehler |
| 0xDE87 | DE87 fzd_87: FZD: K-CAN Kommunikationsfehler |
| 0xE087 | E087 GWS_60_2/gws_60/gws_90: GWS: PT-CAN Kommunikationsfehler |
| 0xE094 | E094 GWS_60_2/gws_60/gws_90: GWS: Botschaft von der EGS fehlt: Anzeige Getriebedaten PT-CAN |
| 0xE09A | E09A gws_60/GWS_60_2: GWS: Botschaft Geschwindigkeit |
| 0xE105 | E105 komb87: KOMBI: K-CAN High Leitungsfehler |
| 0xE106 | E106 komb87: KOMBI: K-CAN Massefehler |
| 0xE107 | E107 komb87: KOMBI: K-CAN Kommunikationsfehler |
| 0xE184 | E184 cccg60/mask2gw/mcgw60/rad2_gw: CD / M-ASK / CCC / RAD2 / CHAMP -GW: K-CAN Leitungsfehler |
| 0xE187 | E187 cccg60/mask2gw/mcgw60/rad2_gw: CD / M-ASK / CCC / RAD2 / CHAMP -GW: K-CAN Kommunikationsfehler |
| 0xE188 | E188 mask2gw: M-ASK-GW: K-CAN Leitungsfehler |
| 0xE194 | E194 rad2_gw: RAD2-GW: Botschaft von CAS fehlt |
| 0xE1C4 | E1C4 champ2r/cicmr/cicr/rad1: mmi: K-CAN Leitungsfehler |
| 0xE1C7 | E1C7 champ2r/cicmr/cicr/rad1: mmi: K-CAN Kommunikationsfehler |
| 0xE1CE | E1CE rad1: RAD: Botschaft von CAS fehlt |
| 0xE1CF | E1CF rad1: RAD: Botschaft von KOMBI fehlt |
| 0xE1D0 | E1D0 rad1: RAD: Botschaft von SZL fehlt |
| 0xE1D2 | E1D2 rad1: RAD: Botschaft von DME fehlt |
| 0xE204 | E204 pdc_87: PDC: K-CAN Leitungsfehler |
| 0xE207 | E207 pdc_87: PDC: K-CAN Kommunikationsfehler |
| 0xE2C4 | E2C4 zbe_60_2/zbeh60/zbeh87/zbel87/zbel87_2: CON: K-CAN Leitungsfehler |
| 0xE2C7 | E2C7 zbe_60_2/zbeh60/zbeh87/zbel87/zbel87_2: CON: K-CAN Kommunikationsfehler |
| 0xE2D4 | E2D4 zbe_60_2: CON: Botschaft (Klemmenstatus, 130) fehlerhaft |
| 0xE2D5 | E2D5 zbe_60_2: CON: Botschaft (Dimmung, 202) fehlerhaft |
| 0xE2D6 | E2D6 zbe_60_2: CON: Botschaft (Kilometerstand, 330) fehlerhaft |
| 0xE2D7 | E2D7 zbe_60_2: CON: Botschaft (CIC, 273) fehlerhaft |
| 0xE444 | E444 fas_plx: SMFA: K-CAN Leitungsfehler |
| 0xE447 | E447 fas_plx: SMFA: K-CAN Kommunikationsfehler |
| 0xE484 | E484 bfs_plx: SMBF: K-CAN Leitungsfehler |
| 0xE487 | E487 bfs_plx: SMBF: K-CAN Kommunikationsfehler |
| 0xE544 | E544 ahm_e65/ahm_70: AHM: K-CAN Leitungsfehler |
| 0xE545 | E545 ahm_e65: AHM: K-CAN Leitungsfehler |
| 0xE546 | E546 ahm_e65: AHM: K-CAN Massefehler |
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
| 0xE584 | E584 frm_70/frm_87: FRM: K-CAN Leitungsfehler |
| 0xE587 | E587 frm_70/frm_87: FRM: K-CAN Kommunikationsfehler |
| 0xE588 | E588 frm_87: FRM: PT-CAN Kommunikationsfehler |
| 0xE594 | E594 frm_70: FRM: Botschaft (Lenkwinkel) fehlt |
| 0xE595 | E595 frm_70: FRM: Botschaft vom Anhängermodul fehlt |
| 0xE596 | E596 frm_70: FRM: Botschaft vom FLA fehlt |
| 0xE597 | E597 frm_70: FRM: Botschaft vom Steuergerät DSC fehlt |
| 0xE598 | E598 frm_70: FRM: Botschaft (Fahrlicht) fehlt |
| 0xE599 | E599 frm_70: FRM: 5999 Botschaft (Fahrzeuggeschwindigkeit) fehlt |
| 0xE59A | E59A frm_70: FRM: Botschaft (Gierwinkelgeschwindigkeit) fehlt |
| 0xE59B | E59B frm_70: FRM: Botschaft (Klemmenstatus) fehlt |
| 0xE59C | E59C frm_70: FRM: Botschaft PT-CAN Lenkwinkel fehlt |
| 0xE5C4 | E5C4 cid_87/cid_89/cid_90: CID: K-CAN Leitungsfehler |
| 0xE5C7 | E5C7 cid_87/cid_89/cid_90: CID: K-CAN Kommunikationsfehler |
| 0xE704 | E704 ihka87/ihka89/ihkr89/ihkr90/ihr_87/ihka87_2: Heiz-Klimasteuergerät: K-CAN Leitungsfehler |
| 0xE707 | E707 ihka87/ihka89/ihkr89/ihkr90/ihr_87/ihka87_2: Heiz-Klimasteuergerät: K-CAN Kommunikationsfehler |
| 0xE714 | E714 ihka87/ihka89/ihkr89/ihkr90/ihr_87/ihka87_2: Heiz-Klimasteuergerät: Botschaft (Klemmenstatus, 130) |
| 0xE715 | E715 ihka87/ihka89/ihkr89/ihkr90/ihr_87/ihka87_2: Heiz-Klimasteuergerät: Botschaft (Außentemperatur, 2CA) |
| 0xE716 | E716 ihka87/ihka89/ihkr89/ihkr90/ihr_87/ihka87_2: Heiz-Klimasteuergerät: Botschaft (Dimmung, 202) |
| 0xE717 | E717 ihka87/ihka89/ihkr89/ihkr90/ihr_87/ihka87_2: Heiz-Klimasteuergerät: Botschaft (Motordaten, 1D0) |
| 0xE718 | E718 ihka87/ihka89/ihkr89/ihkr90/ihr_87/ihka87_2: Heiz-Klimasteuergerät: Botschaft (Status Druck Kältekreislauf, 2D2) |
| 0xE719 | E719 ihka87/ihka89/ihkr89/ihkr90/ihr_87/ihka87_2: Heiz-Klimasteuergerät: Botschaft (Kilometerstand/Reichweite, 330) |
| 0xE71A | E71A ihka87/ihka89/ihkr89/ihkr90/ihr_87/ihka87_2: Heiz-Klimasteuergerät: Botschaft (Drehmoment 3, AA) |
| 0xE71B | E71B ihka87/ihka89/ihkr89/ihkr90/ihr_87/ihka87_2: Heiz-Klimasteuergerät: Botschaft (Wärmestrom Motor, 1B6) |
| 0xE71C | E71C ihka87/ihka89/ihkr89/ihkr90/ihr_87/ihka87_2: Heiz-Klimasteuergerät: Botschaft (Geschwindigkeit, 1A0) |
| 0xE71D | E71D ihka87/ihka89/ihkr89/ihkr90/ihr_87/ihka87_2: Heiz-Klimasteuergerät: Botschaft (Status PDC, 24A) |
| 0xE71E | E71E ihka87/ihka89/ihkr89/ihkr90/ihr_87/ihka87_2: Heiz-Klimasteuergerät: Botschaft (Status BFS, 22A) |
| 0xE71F | E71F ihka87/ihka89/ihkr89/ihkr90/ihr_87/ihka87_2: Heiz-Klimasteuergerät: Botschaft (Status FAS, 232) |
| 0xE720 | E720 ihka87/ihka89/ihkr89/ihkr90/ihr_87/ihka87_2: Heiz-Klimasteuergerät: Botschaft (Powermanagement Verbrauchersteuerung, 3B3) |
| 0xE721 | E721 ihka87/ihka89/ihkr89/ihkr90/ihr_87/ihka87_2: Heiz-Klimasteuergerät: Botschaft (Status Sensor AUC, 2D0) |
| 0xE722 | E722 ihka87/ihka89/ihkr89/ihkr90/ihr_87/ihka87_2: Heiz-Klimasteuergerät: Botschaft (Status Funkschlüssel, 23A) |
| 0xE723 | E723 ihka87/ihkr90/ihr_87/ihka87_2: Heiz-Klimasteuergerät: Botschaft (Status Beschlag Scheibe vorn, 2D1) |
| 0xE724 | E724 ihka87/ihkr90/ihr_87/ihka87_2: Heiz-Klimasteuergerät: Botschaft (Status Schichtung Fond, 2D3) |
| 0xE725 | E725 ihka87/ihka89/ihkr89/ihkr90/ihr_87/ihka87_2: Heiz-Klimasteuergerät: Botschaft (Fahrgestellnummer, 380) |
| 0xE726 | E726 ihka87/ihkr90/ihr_87/ihka87_2: Heiz-Klimasteuergerät: Botschaft (Einheiten, 2F7) |
| 0xE727 | E727 ihka87/ihkr90/ihr_87/ihka87_2: Heiz-Klimasteuergerät: Botschaft (LCD-Leuchtdichte, 2C0) |
| 0xE728 | E728 ihka87/ihka89/ihkr89/ihkr90/ihr_87/ihka87_2: Heiz-Klimasteuergerät: Botschaft (Relativzeit, 328) |
| 0xE729 | E729 ihka87/ihkr90/ihr_87/ihka87_2: Heiz-Klimasteuergerät: Botschaft (Status HDC, 1AF) |
| 0xE72A | E72A ihka87/ihka89/ihkr89/ihka87_2: Heiz-Klimasteuergerät: Botschaft (Status Wasserventil, 3B5) |
| 0xE72B | E72B ihka87/ihka89/ihkr89/ihka87_2: Heiz-Klimasteuergerät: Botschaft (Status Zusatzwasserpumpe, 2CF) |
| 0xE72C | E72C ihka87/ihka87_2: Heiz-Klimasteuergerät: Botschaft (Crash, 1FE) |
| 0xE72D | E72D ihka87/ihka89/ihkr89/ihka87_2: Heiz-Klimasteuergerät: Botschaft (Status Ventil Klimakompressor, 2D6, (1E2 E87)) |
| 0xE72E | E72E ihr_87/ihka87/ihka89/ihkr89/ihka87_2: Heiz-Klimasteuergerät: Botschaft (Status MSA, 308) |
| 0xE72F | E72F ihka89/ihkr89: Heiz-Klimasteuergerät: Botschaft (Status Fahrlicht, 314) |
| 0xE730 | E730 ihka89/ihkr89: Heiz-Klimasteuergerät: Botschaft (Status Heizung Heckscheibe, 2D5) |
| 0xE733 | E733 ihka89/ihkr89: Heiz-Klimasteuergerät: Botschaft (Fahrzeugtyp, 388) |
| 0xE737 | E737 ihka89/ihkr89: Heiz-Klimasteuergerät: Botschaft (Nachlaufzeit Stromversorgung, 3BE) |

### FCMATRIX

| NUMMER | ORT | ADR | STGR | VONSTGR | NICHTORT | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 41 | 2 |  |  |  | 0xEA | 0xE9 | 0xE7 | 0x00 | 0x21 | 0x16 | 0x71 | 0x40 | 0x62 | 0x73 | 0x24 | 0x12 | 0x29 | 0xE0 | 0x41 | 0x18 | 0x5E | 0x17 | 0x30 | 0x2A | 0x1D | 0x72 | 0x56 | 0x78 | 0x60 | 0x1C | 0xE1 | 0x01 | 0x64 | 0x27 | 0x63 | 0x6E | 0x6D | 0xE2 | 0x19 | 0x67 | 0x3B | 0x20 | 0x39 | 0x44 | 0x5F |
| 1 | 0x2AD0 | 0x12 | DME | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 2 | 0x2B51 | 0x12 | DME | EKP | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 3 | 0x2D5B | 0x12 | DME | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 4 | 0x2DB4 | 0x12 | DME | SZL | 0x0000 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 5 | 0x2DC0 | 0x12 | DME | LDM | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 6 | 0x2DC3 | 0x12 | DME | CAS | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 7 | 0x2DC6 | 0x12 | DME | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 8 | 0x2DC8 | 0x12 | DME | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 9 | 0x2DC9 | 0x12 | DME | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 10 | 0x2DCA | 0x12 | DME | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 11 | 0x2DCC | 0x12 | DME | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 12 | 0x2DCD | 0x12 | DME | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 13 | 0x2DCE | 0x12 | DME | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 14 | 0x2DCF | 0x12 | DME | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 15 | 0x2DD0 | 0x12 | DME | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 16 | 0x2DD1 | 0x12 | DME | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 17 | 0x2DD2 | 0x12 | DME | SZL | 0x0000 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 18 | 0x2DD5 | 0x12 | DME | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 19 | 0x2DD7 | 0x12 | DME | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 20 | 0x2DDA | 0x12 | DME | CAS | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 21 | 0x2DDB | 0x12 | DME | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 22 | 0x2DDC | 0x12 | DME | SZL | 0x0000 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 23 | 0x2DE0 | 0x12 | DME | EKP | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 24 | 0x2DE3 | 0x12 | DME | KOMBI | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 25 | 0x2E46 | 0x12 | DDE | CAS | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 26 | 0x2E47 | 0x12 | DDE | CAS | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 27 | 0x2E7F | 0x12 | DME | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 28 | 0x2F50 | 0x12 | DME | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 29 | 0x3090 | 0x12 | DME | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 30 | 0x3091 | 0x12 | DME | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 31 | 0x3094 | 0x12 | DME | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 32 | 0x3095 | 0x12 | DME | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 33 | 0x3096 | 0x12 | DME | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 34 | 0x3097 | 0x12 | DME | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 35 | 0x3098 | 0x12 | DME | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 36 | 0x3099 | 0x12 | DME | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 37 | 0x309D | 0x12 | DME | IHKA | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 38 | 0x309F | 0x12 | DME | KOMBI | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 39 | 0x30A0 | 0x12 | DME | KOMBI | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 40 | 0x30A1 | 0x12 | DME | KOMBI | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 41 | 0x30A4 | 0x12 | DME | SZL | 0x0000 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 42 | 0x30A5 | 0x12 | DME | SZL | 0x0000 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 43 | 0x30A6 | 0x12 | DME | SZL | 0x0000 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 44 | 0x3131 | 0x12 | DME | JBE | 0x0000 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 45 | 0x3132 | 0x12 | DME | JBE | 0x0000 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 46 | 0x3145 | 0x12 | DME | CAS | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 47 | 0x3146 | 0x12 | DME | CAS | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 48 | 0x314A | 0x12 | DME | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 49 | 0x314E | 0x12 | DME | DME | 0x0000 | 50 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 50 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 50 | 0x3162 | 0x12 | DME | FRM | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 51 | 0x316E | 0x12 | DME | ACSM/MRS5 | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 52 | 0x3177 | 0x12 | DME | LDM | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 53 | 0x3179 | 0x12 | DME | LDM | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 54 | 0x317A | 0x12 | DME | LDM | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 55 | 0x317E | 0x12 | DME | KOMBI | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 56 | 0x3182 | 0x12 | DME | AHM | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 57 | 0x31A2 | 0x12 | DME | KOMBI | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 58 | 0x3F62 | 0x12 | DDE | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 59 | 0x41A6 | 0x12 | DDE | KOMBI | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 60 | 0x41A7 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 61 | 0x41A8 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 62 | 0x412F | 0x12 | DDE | CAS | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 63 | 0x430F | 0x12 | DDE | CAS | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 64 | 0x4325 | 0x12 | DDE | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 65 | 0x4326 | 0x12 | DDE | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 66 | 0x4327 | 0x12 | DDE | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 67 | 0x4328 | 0x12 | DDE | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 68 | 0x438A | 0x12 | DDE | DSC | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 69 | 0x438B | 0x12 | DDE | DSC | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 70 | 0x438D | 0x12 | DDE | DSC | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 71 | 0x4445 | 0x12 | DDE | AFS | 0x0000 | 33 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 72 | 0x4446 | 0x12 | DDE | AFS | 0x0000 | 33 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 73 | 0x4447 | 0x12 | DDE | AFS | 0x0000 | 33 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 74 | 0x4448 | 0x12 | DDE | AFS | 0x0000 | 33 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 75 | 0x4457 | 0x12 | DDE | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 76 | 0x4458 | 0x12 | DDE | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 77 | 0x453B | 0x12 | DDE | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 78 | 0x453C | 0x12 | DDE | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 79 | 0x453D | 0x12 | DDE | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 80 | 0x4567 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 81 | 0x4568 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 82 | 0x4577 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 83 | 0x4578 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 84 | 0x4598 | 0x12 | DDE | CCC/MASK/RAD2 | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 85 | 0x45F5 | 0x12 | DDE | LDM | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 86 | 0x45F6 | 0x12 | DDE | LDM | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 87 | 0x45F7 | 0x12 | DDE | LDM | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 88 | 0x45F8 | 0x12 | DDE | LDM | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 89 | 0x4638 | 0x12 | DME | KOMBI | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 90 | 0x47F8 | 0x12 | DDE | ACSM/MRS5 | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 91 | 0x4803 | 0x12 | DDE | LDM | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 92 | 0x4810 | 0x12 | DDE | LDM | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 93 | 0x4824 | 0x12 | DDE | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 94 | 0x4829 | 0x12 | DDE | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 95 | 0x482E | 0x12 | DDE | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 96 | 0x482F | 0x12 | DDE | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 97 | 0x4834 | 0x12 | DDE | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 98 | 0x4839 | 0x12 | DDE | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 99 | 0x483E | 0x12 | DDE | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 100 | 0x483F | 0x12 | DDE | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 101 | 0x48A5 | 0x12 | DDE | JBE | 0x0000 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 102 | 0x48A6 | 0x12 | DDE | JBE | 0x0000 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 103 | 0x48A8 | 0x12 | DDE | JBE | 0x0000 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 104 | 0x49A8 | 0x12 | DDE | AFS | 0x0000 | 33 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 105 | 0x4910 | 0x12 | DDE | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 106 | 0x497F | 0x12 | DDE | FRM | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 107 | 0x4991 | 0x12 | DDE | KOMBI | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 108 | 0x4992 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 109 | 0x4993 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 110 | 0x49A2 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 111 | 0x49A3 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 112 | 0x49B8 | 0x12 | DDE | EKP | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 113 | 0x49F2 | 0x12 | DDE | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 114 | 0x49F3 | 0x12 | DDE | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 115 | 0x4A89 | 0x12 | DDE | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 116 | 0x4A98 | 0x12 | DDE | KOMBI | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 117 | 0x4AA8 | 0x12 | DDE | AHM | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 118 | 0x4AB8 | 0x12 | DDE | KOMBI | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 119 | 0x4AEF | 0x12 | DDE | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 120 | 0x4B12 | 0x12 | DDE | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 121 | 0x4B13 | 0x12 | DDE | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 122 | 0x4B2D | 0x12 | DDE | IHKA | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 123 | 0x4B4A | 0x12 | DDE | AFS | 0x0000 | 33 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 124 | 0x4B4B | 0x12 | DDE | AFS | 0x0000 | 33 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 125 | 0x4B4D | 0x12 | DDE | AFS | 0x0000 | 33 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 126 | 0x4BE2 | 0x12 | DDE | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 127 | 0x4BE3 | 0x12 | DDE | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 128 | 0x4BE5 | 0x12 | DDE | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 129 | 0x4BE6 | 0x12 | DDE | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 130 | 0x4BE7 | 0x12 | DDE | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 131 | 0x4BE8 | 0x12 | DDE | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 132 | 0x4BF2 | 0x12 | DDE | IHKA | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 133 | 0x4BF3 | 0x12 | DDE | IHKA | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 134 | 0x4BF7 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 135 | 0x4BF8 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 136 | 0x4C00 | 0x12 | DDE | SZL | 0x0000 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 137 | 0x4C01 | 0x12 | DDE | SZL | 0x0000 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 138 | 0x4C02 | 0x12 | DDE | SZL | 0x0000 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 139 | 0x4C03 | 0x12 | DDE | SZL | 0x0000 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 140 | 0x4C12 | 0x12 | DDE | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 141 | 0x4C13 | 0x12 | DDE | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 142 | 0x4C15 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 143 | 0x4C16 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 144 | 0x4C17 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 145 | 0x4C18 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 146 | 0x4C20 | 0x12 | DDE | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 147 | 0x4C21 | 0x12 | DDE | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 148 | 0x4C22 | 0x12 | DDE | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 149 | 0x4C23 | 0x12 | DDE | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 150 | 0x4C27 | 0x12 | DDE | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 151 | 0x4C28 | 0x12 | DDE | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 152 | 0x4C3C | 0x12 | DDE | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 153 | 0x4C3D | 0x12 | DDE | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 154 | 0x4C97 | 0x12 | DDE | ACSM/MRS5 | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 155 | 0x4C98 | 0x12 | DDE | ACSM/MRS5 | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 156 | 0x4C9B | 0x12 | DDE | ACSM/MRS5 | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 157 | 0x4C9C | 0x12 | DDE | ACSM/MRS5 | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 158 | 0x4CB8 | 0x12 | DDE | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 159 | 0x4DDD | 0x12 | DDE | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 160 | 0x4DF0 | 0x12 | DDE | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 161 | 0x4DF1 | 0x12 | DDE | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 162 | 0x4DF2 | 0x12 | DDE | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 163 | 0x4DF3 | 0x12 | DDE | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 164 | 0x4F77 | 0x18 | EGS | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 165 | 0x51A5 | 0x18 | EGS | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 166 | 0x51A7 | 0x18 | EGS | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 167 | 0x51A8 | 0x18 | EGS | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 168 | 0x51AC | 0x18 | EGS  | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 169 | 0x51AD | 0x18 | EGS | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 170 | 0x51AE | 0x18 | EGS | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 171 | 0x51BB | 0x18 | SMG | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 172 | 0x55C0 | 0x33 | VTG | leer | 0x0000 | 14 | -29 | 14 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | 14 | 14 | -29 | -29 | 14 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | 14 | 14 | -29 | -29 | -29 | -29 | -29 | -29 |
| 173 | 0x55C2 | 0x33 | VTG | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 |
| 174 | 0x55C4 | 0x33 | VTG | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 |
| 175 | 0x55C5 | 0x33 | VTG | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 |
| 176 | 0x55C6 | 0x33 | VTG | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 |
| 177 | 0x55C7 | 0x33 | VTG | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 |
| 178 | 0x55C8 | 0x33 | VTG | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 |
| 179 | 0x55C9 | 0x33 | VTG | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 |
| 180 | 0x55CA | 0x33 | VTG | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 |
| 181 | 0x55CB | 0x33 | VTG | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 |
| 182 | 0x55CD | 0x33 | VTG | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 |
| 183 | 0x55CE | 0x33 | VTG | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 |
| 184 | 0x55CF | 0x33 | VTG | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 |
| 185 | 0x55D0 | 0x33 | VTG | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 |
| 186 | 0x57B3 | 0x18 | EGS | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 187 | 0x57B5 | 0x18 | EGS | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 188 | 0x57B6 | 0x18 | EGS | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 189 | 0x57B9 | 0x18 | EGS | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 190 | 0x57BA | 0x18 | EGS | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 191 | 0x57BB | 0x18 | EGS | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 192 | 0x57BC | 0x18 | EGS | KOMBI | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 193 | 0x57C0 | 0x18 | EGS | KOMBI | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 194 | 0x57C1 | 0x18 | EGS | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 195 | 0x57C2 | 0x18 | EGS | KOMBI | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 196 | 0x57C3 | 0x18 | EGS | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 197 | 0x57C5 | 0x18 | EGS | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 198 | 0x57C7 | 0x18 | EGS | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 199 | 0x57CB | 0x18 | EGS | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 200 | 0x57CC | 0x18 | EGS | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 201 | 0x57D0 | 0x18 | EGS | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 202 | 0x57D1 | 0x18 | EGS | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 203 | 0x57D2 | 0x18 | EGS | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 204 | 0x57D3 | 0x18 | EGS | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 205 | 0x57D4 | 0x18 | EGS | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 206 | 0x57D5 | 0x18 | EGS | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 207 | 0x57D6 | 0x18 | EGS | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 208 | 0x57D7 | 0x18 | EGS | KOMBI | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 209 | 0x57D8 | 0x18 | EGS | KOMBI | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 210 | 0x57D9 | 0x18 | EGS | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 211 | 0x57DB | 0x18 | EGS | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 212 | 0x57DF | 0x18 | EGS | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 213 | 0x57E0 | 0x18 | EGS | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 214 | 0x57F0 | 0x18 | EGS | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 215 | 0x57F1 | 0x18 | EGS | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 216 | 0x57F4 | 0x18 | EGS | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 217 | 0x57F6 | 0x18 | EGS | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 218 | 0x57FB | 0x18 | EGS | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 219 | 0x57FC | 0x18 | EGS | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 220 | 0x5E8C | 0x29 | DSC | AHM | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 221 | 0x5F07 | 0x29 | DSC | ACC | 0x0000 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 222 | 0x5F08 | 0x29 | DSC | ACC | 0x0000 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 223 | 0x5F2D | 0x29 | DSC | ACC | 0x0000 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 224 | 0x5F2E | 0x29 | DSC | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 225 | 0x5F34 | 0x29 | DSC | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 226 | 0x5F35 | 0x29 | DSC | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 227 | 0x5F36 | 0x29 | DSC | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 228 | 0x5F5C | 0x29 | DSC | AHM | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 229 | 0x5FFF | 0x39 | EDC-K | CAS | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 |
| 230 | 0x6E1D | 0x29 | DSC | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 231 | 0x6E1E | 0x29 | DSC | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 232 | 0x6E1F | 0x29 | DSC | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 233 | 0x6E9E | 0x29 | DSC | EMF | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 234 | 0x6F70 | 0x29 | DSC | EMF | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 235 | 0x6F71 | 0x29 | DSC | EMF | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 236 | 0x6F73 | 0x29 | DSC | EMF | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 237 | 0x6E20 | 0x29 | DSC | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 238 | 0x6F56 | 0x29 | DSC | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 239 | 0x6F57 | 0x29 | DSC | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 240 | 0x6F63 | 0x29 | DSC | RDC | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 |
| 241 | 0x6F65 | 0x29 | DSC | KOMBI | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 242 | 0x6F4B | 0x29 | DSC | LDM | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 243 | 0x6F52 | 0x29 | DSC | leer | 0x0000 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 244 | 0x6F74 | 0x29 | DSC | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 245 | 0x6F75 | 0x29 | DSC | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 246 | 0x93C6 | 0x01 | ACSM/MRS5 | SMFA | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 247 | 0x93C7 | 0x01 | ACSM/MRS5 | SMFA | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 248 | 0x93FB | 0x01 | ACSM/MRS5 | DSC | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 249 | 0x940D | 0x01 | ACSM/MRS5 | KOMBI | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 250 | 0x9414 | 0x01 | ACSM/MRS5 | DSC | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 251 | 0x9415 | 0x01 | ACSM/MRS5 | DSC | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 252 | 0xA173 | 0x62 | CCC-GW | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 253 | 0xA3A8 | 0x60 | KOMBI | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 254 | 0xA3A9 | 0x60 | KOMBI | leer | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 255 | 0xA3AB | 0x60 | KOMBI | LDM | 0xA3A8 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 256 | 0xA3AC | 0x60 | KOMBI | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 257 | 0xA3AD | 0x60 | KOMBI | leer | 0xA3A8 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 258 | 0xA3AE | 0x60 | KOMBI | leer | 0xA3A8 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 259 | 0xA3AF | 0x60 | KOMBI | leer | 0xA3A8 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 260 | 0xA3B1 | 0x60 | KOMBI | leer | 0xA3A8 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 261 | 0xA3B2 | 0x60 | KOMBI | leer | 0xA3A8 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 262 | 0xA3B4 | 0x60 | KOMBI | leer | 0xA3A8 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 263 | 0xA3B9 | 0x60 | KOMBI | leer | 0xA3A8 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 264 | 0xA3BB | 0x60 | KOMBI | leer | 0xA3A8 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 265 | 0xA3BD | 0x60 | KOMBI | leer | 0xA3A8 | -26 | 33 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 266 | 0xA3BE | 0x60 | KOMBI | leer | 0xA3A8 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 267 | 0xA3C0 | 0x60 | KOMBI | AHM | 0xA3A8 | -26 | 33 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 268 | 0xA3C1 | 0x60 | KOMBI | leer | 0xA3A8 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 269 | 0xA548 | 0x60 | KOMBI | AFS | 0xA3A8 | 20 | 20 | -28 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 270 | 0xA54A | 0x60 | KOMBI | leer | 0xA3A8 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 271 | 0xA54B | 0x60 | KOMBI | leer | 0xA3A8 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 272 | 0xA54C | 0x60 | KOMBI | leer | 0xA3A8 | -26 | 33 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 273 | 0xA54D | 0x60 | KOMBI | EKP | 0xA3A8 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 274 | 0xA54E | 0x60 | KOMBI | SMFA | 0xA3A8 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 275 | 0xA54F | 0x60 | KOMBI | SMBF | 0xA3A8 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 276 | 0xA550 | 0x60 | KOMBI | leer | 0xA3A8 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 277 | 0xA551 | 0x60 | KOMBI | leer | 0xA3A8 | -26 | 33 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 278 | 0xA555 | 0x60 | KOMBI | leer | 0xA3A8 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 279 | 0xA556 | 0x60 | KOMBI | leer | 0xA3A8 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 280 | 0xA560 | 0x60 | KOMBI | DME | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 281 | 0xA562 | 0x60 | KOMBI | DME | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 282 | 0xA565 | 0x60 | KOMBI | DME | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 283 | 0xA568 | 0x60 | KOMBI | CVM | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 284 | 0xA56A | 0x60 | KOMBI | EMF | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 285 | 0xA56B | 0x60 | KOMBI | JBE | 0x0000 | -26 | 33 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 286 | 0xA737 | 0x00 | JBE | IHKA | 0x0000 | -26 | 33 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 287 | 0xA73B | 0x00 | JBE | IHKA | 0x0000 | -26 | 33 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 288 | 0xA73C | 0x00 | JBE | DME | 0x0000 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 289 | 0xA73D | 0x00 | JBE | DME | 0x0000 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 290 | 0xC904 | 0x00 | JBE | leer | 0x0000 | 0 | 50 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 291 | 0xC905 | 0x00 | JBE | leer | 0x0000 | 0 | 50 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 292 | 0xC907 | 0x00 | JBE | leer | 0x0000 | 0 | 50 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 293 | 0xC908 | 0x00 | JBE | leer | 0x0000 | 0 | 50 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 294 | 0xC910 | 0x00 | JBE | IHKA | 0x0000 | -26 | 33 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 295 | 0xC911 | 0x00 | JBE | IHKA | 0x0000 | -26 | 33 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 296 | 0xC912 | 0x00 | JBE | IHKA | 0x0000 | -26 | 33 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 297 | 0xC913 | 0x00 | JBE | IHKA | 0x0000 | -26 | 33 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 298 | 0xC917 | 0x00 | JBE | IHKA | 0x0000 | -26 | 33 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 299 | 0xC919 | 0x00 | JBE | DME | 0x0000 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 300 | 0xC91C | 0x00 | JBE | IHKA | 0x0000 | -26 | 33 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 301 | 0xC91D | 0x00 | JBE | IHKA | 0x0000 | -26 | 33 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 302 | 0xC91E | 0x00 | JBE | CAS | 0x0000 | -26 | 33 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 303 | 0xC91F | 0x00 | JBE | KOMBI | 0x0000 | -26 | 33 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 304 | 0xC920 | 0x00 | JBE | DSC | 0x0000 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 305 | 0xC921 | 0x00 | JBE | DME | 0x0000 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 306 | 0xC922 | 0x00 | JBE | DSC | 0x0000 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 307 | 0xC923 | 0x00 | JBE | EGS | 0x0000 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 308 | 0xC924 | 0x00 | JBE | EGS | 0x0000 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 309 | 0xC944 | 0x01 | ACSM/MRS5 | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 310 | 0xC947 | 0x01 | ACSM/MRS5 | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 311 | 0xC94B | 0x01 | ACSM/MRS5 | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 312 | 0xCD87 | 0x12 | DME | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 313 | 0xCD8F | 0x12 | DME | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 314 | 0xCD94 | 0x12 | DME | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 315 | 0xCD95 | 0x12 | DME | ACC | 0x0000 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 316 | 0xCD96 | 0x12 | DME | ACC | 0x0000 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 317 | 0xCD97 | 0x12 | DME | AFS | 0x0000 | 33 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 318 | 0xCD98 | 0x12 | DME | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 319 | 0xCD99 | 0x12 | DME | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 320 | 0xCD9B | 0x12 | DME | leer | 0x0000 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 321 | 0xCD9C | 0x12 | DME | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 322 | 0xCD9D | 0x12 | DME | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 323 | 0xCD9E | 0x12 | DME | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 324 | 0xCD9F | 0x12 | DME | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 325 | 0xCDA0 | 0x12 | DME | CAS | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 326 | 0xCDA1 | 0x12 | DME | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 327 | 0xCDA2 | 0x12 | DME | DME | 0x0000 | 50 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 50 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 328 | 0xCDA5 | 0x12 | DME | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 329 | 0xCDA6 | 0x12 | DME | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 330 | 0xCDA7 | 0x12 | DME | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 331 | 0xCDA8 | 0x12 | DME | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 332 | 0xCDA9 | 0x12 | DME | IHKA | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 333 | 0xCDAA | 0x12 | DME | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 334 | 0xCDAB | 0x12 | DME | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 335 | 0xCDAC | 0x12 | DME | leer | 0x0000 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 336 | 0xCDAD | 0x12 | DME | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 337 | 0xCDAE | 0x12 | DME | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 338 | 0xCDAF | 0x12 | DME | AHM | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 339 | 0xCDB0 | 0x12 | DME | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 340 | 0xCDB1 | 0x12 | DME | CAS | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 341 | 0xCDB3 | 0x12 | DDE | AFS | 0x0000 | 33 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 342 | 0xCDB4 | 0x12 | DME | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 343 | 0xCDB5 | 0x12 | DME | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 344 | 0xCDB8 | 0x12 | DDE | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 345 | 0xCDBB | 0x12 | DME | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 346 | 0xCDBC | 0x12 | DME | SZL | 0x0000 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 347 | 0xCDC0 | 0x12 | DME | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 348 | 0xCDC7 | 0x12 | DDE | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 349 | 0xCE87 | 0x16 | AFS | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 350 | 0xCE8B | 0x16 | AFS | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 351 | 0xCE8C | 0x16 | AFS | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 352 | 0xCE8D | 0x16 | AFS | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 353 | 0xCE91 | 0x16 | AFS | DSC-Sensor | 0x0000 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 354 | 0xCE92 | 0x16 | AFS | DSC-Sensor | 0x0000 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 355 | 0xCE96 | 0x16 | AFS | DSC | 0x0000 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 356 | 0xCE9C | 0x16 | AFS | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 357 | 0xCE9A | 0x16 | AFS | AHM | 0x0000 | 20 | 20 | -28 | 20 | -28 | 20 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 358 | 0xCE9B | 0x16 | AFS | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 359 | 0xCE9D | 0x16 | AFS | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 360 | 0xCE9E | 0x16 | AFS | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 361 | 0xCE9F | 0x16 | AFS | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 362 | 0xCEA0 | 0x16 | AFS | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 363 | 0xCEA1 | 0x16 | AFS | CAS | 0x0000 | 20 | 20 | -28 | 20 | -28 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 364 | 0xCEA3 | 0x16 | AFS | KOMBI | 0x0000 | 20 | 20 | -28 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 365 | 0xCEC7 | 0x17 | EKP | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 366 | 0xCED4 | 0x17 | EKP | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 367 | 0xCF07 | 0x18 | EGS | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 368 | 0xCF10 | 0x18 | DKG | LDM | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 369 | 0xCF11 | 0x18 | DKG | KOMBI | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 370 | 0xCF12 | 0x18 | DKG | GWS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 371 | 0xCF13 | 0x18 | DKG | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 372 | 0xCF2B | 0x18 | EGS | LDM | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 373 | 0xCF2C | 0x18 | EGS | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 374 | 0xCF2D | 0x18 | EGS | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 375 | 0xCF2E | 0x18 | EGS | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 376 | 0xCF2F | 0x18 | EGS | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 377 | 0xCF33 | 0x18 | EGS | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 378 | 0xCF34 | 0x18 | EGS | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 379 | 0xCF35 | 0x18 | EGS | CAS | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 380 | 0xCF37 | 0x18 | EGS | CAS | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 381 | 0xCF4B | 0x33 | VTG | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 |
| 382 | 0xCF54 | 0x33 | VTG | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 |
| 383 | 0xCF55 | 0x33 | VTG | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 |
| 384 | 0xCF56 | 0x33 | VTG | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 |
| 385 | 0xCF57 | 0x33 | VTG | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 |
| 386 | 0xCF5C | 0x33 | VTG | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 |
| 387 | 0xCF61 | 0x33 | VTG | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 |
| 388 | 0xCF62 | 0x33 | VTG | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 |
| 389 | 0xCF63 | 0x33 | VTG | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 |
| 390 | 0xCF68 | 0x33 | VTG | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 |
| 391 | 0xCF69 | 0x33 | VTG | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 |
| 392 | 0xCF6A | 0x33 | VTG | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 |
| 393 | 0xCF6B | 0x33 | VTG | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 |
| 394 | 0xCF6C | 0x33 | VTG | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 |
| 395 | 0xCF6D | 0x33 | VTG | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 |
| 396 | 0xCF6E | 0x33 | VTG | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 |
| 397 | 0xCF6F | 0x33 | VTG | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 |
| 398 | 0xCF70 | 0x33 | VTG | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 |
| 399 | 0xCF71 | 0x33 | VTG | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 |
| 400 | 0xCF72 | 0x33 | VTG | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 |
| 401 | 0xCF73 | 0x33 | VTG | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 |
| 402 | 0xD007 | 0x1C | LDM | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 403 | 0xD00B | 0x1C | LDM | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 404 | 0xD014 | 0x1C | LDM | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 405 | 0xD016 | 0x1C | LDM | leer | 0x0000 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 406 | 0xD018 | 0x1C | LDM | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 407 | 0xD019 | 0x1C | LDM | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 408 | 0xD01A | 0x1C | LDM | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 409 | 0xD01C | 0x1C | LDM | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 410 | 0xD01E | 0x1C | LDM | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 411 | 0xD01F | 0x1C | LDM | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 412 | 0xD021 | 0x1C | LDM | leer | 0x0000 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 413 | 0xD023 | 0x1C | LDM | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 414 | 0xD024 | 0x1C | LDM | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 415 | 0xD025 | 0x1C | LDM | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 416 | 0xD026 | 0x1C | LDM | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 417 | 0xD029 | 0x1C | LDM | leer | 0x0000 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 418 | 0xD02A | 0x1C | LDM | AHM | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 419 | 0xD02B | 0x1C | LDM | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 420 | 0xD02F | 0x1C | LDM | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 421 | 0xD030 | 0x1C | LDM | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 422 | 0xD031 | 0x1C | LDM | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 423 | 0xD104 | 0x20 | RDC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 |
| 424 | 0xD107 | 0x20 | RDC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 |
| 425 | 0xD110 | 0x20 | RDC | leer | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 |
| 426 | 0xD111 | 0x20 | RDC | leer | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 |
| 427 | 0xD112 | 0x20 | RDC | leer | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 |
| 428 | 0xD113 | 0x20 | RDC | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 |
| 429 | 0xD114 | 0x20 | RDC | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 |
| 430 | 0xD13E | 0x20 | RDC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 |
| 431 | 0xD147 | 0x21 | ACC | leer | 0x0000 | 50 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 432 | 0xD204 | 0x24 | CVM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 433 | 0xD207 | 0x24 | CVM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 434 | 0xD214 | 0x24 | CVM | leer | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 435 | 0xD215 | 0x24 | CVM | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 436 | 0xD216 | 0x24 | CVM | leer | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 437 | 0xD217 | 0x24 | CVM | leer | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 438 | 0xD218 | 0x24 | CVM | leer | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 439 | 0xD219 | 0x24 | CVM | leer | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 440 | 0xD2C4 | 0x27 | CA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 441 | 0xD2C7 | 0x27 | CA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 442 | 0xD347 | 0x29 | DSC | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 443 | 0xD34B | 0x29 | DSC | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 444 | 0xD34C | 0x29 | DSC | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 445 | 0xD34D | 0x29 | DSC | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 446 | 0xD354 | 0x29 | DSC | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 447 | 0xD355 | 0x29 | DSC | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 448 | 0xD356 | 0x29 | DSC | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 449 | 0xD357 | 0x29 | DSC | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 450 | 0xD358 | 0x29 | DSC | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 451 | 0xD359 | 0x29 | DSC | KOMBI | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 452 | 0xD35A | 0x29 | DSC | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 453 | 0xD35B | 0x29 | DSC | LDM | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 454 | 0xD35C | 0x29 | DSC | KOMBI | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 455 | 0xD35D | 0x29 | DSC | LDM | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 456 | 0xD35E | 0x29 | DSC | KOMBI | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 457 | 0xD360 | 0x29 | DSC | ACC | 0x0000 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 458 | 0xD361 | 0x29 | DSC | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 459 | 0xD362 | 0x29 | DSC | ACC | 0x0000 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 460 | 0xD363 | 0x29 | DSC | KOMBI | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 461 | 0xD364 | 0x29 | DSC | KOMBI | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 462 | 0xD36A | 0x29 | DSC | VTG | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 |
| 463 | 0xD36B | 0x29 | DSC | VTG | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 |
| 464 | 0xD370 | 0x29 | DSC | leer | 0x0000 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 465 | 0xD371 | 0x29 | DSC | leer | 0x0000 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 466 | 0xD372 | 0x29 | DSC | leer | 0x0000 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 467 | 0xD373 | 0x29 | DSC | leer | 0x0000 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 468 | 0xD374 | 0x29 | DSC | leer | 0x0000 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 469 | 0xD375 | 0x29 | DSC | AFS | 0x0000 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 470 | 0xD376 | 0x29 | DSC | AFS | 0x0000 | -26 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 471 | 0xD377 | 0x29 | DSC | AHM | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 472 | 0xD378 | 0x29 | DSC | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 473 | 0xD37D | 0x29 | DSC | FZD | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 474 | 0xD37F | 0x29 | DSC | IHKA | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 475 | 0xD380 | 0x29 | DSC | IHKA | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 476 | 0xD381 | 0x29 | DSC | KOMBI | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 477 | 0xD382 | 0x29 | DSC | LDM | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 478 | 0xD383 | 0x29 | DSC | LDM | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 479 | 0xD396 | 0x2A | EMF | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 480 | 0xD399 | 0x2A | EMF | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 481 | 0xD39C | 0x2A | EMF | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 482 | 0xD39F | 0x2A | EMF | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 483 | 0xD3A2 | 0x2A | EMF | CAS | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 484 | 0xD3A5 | 0x2A | EMF | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 485 | 0xD3A8 | 0x2A | EMF | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 486 | 0xD3AB | 0x2A | EMF | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 487 | 0xD3AD | 0x2A | EMF | KOMBI | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 488 | 0xD3AF | 0x2A | EMF | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 489 | 0xD3B1 | 0x2A | EMF | KOMBI | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 490 | 0xD3B3 | 0x2A | EMF | CAS | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 491 | 0xD3B5 | 0x2A | EMF | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 492 | 0xD3B7 | 0x2A | EMF | KOMBI | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 493 | 0xD507 | 0x30 | EPS | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 494 | 0xD514 | 0x30 | EPS | DME | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 495 | 0xD515 | 0x30 | EPS | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 496 | 0xD516 | 0x30 | EPS | CAS | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 497 | 0xD517 | 0x30 | EPS | DSC | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 498 | 0xD747 | 0x39 | EDC-K | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 |
| 499 | 0xD904 | 0x40 | CAS | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 500 | 0xD907 | 0x40 | CAS | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 501 | 0xD944 | 0x41 | DWA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 502 | 0xD947 | 0x41 | DWA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 503 | 0xDA04 | 0x44 | SHD | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 |
| 504 | 0xDA07 | 0x44 | SHD | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 |
| 505 | 0xDE84 | 0x56 | FZD | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 506 | 0xDE87 | 0x56 | FZD | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 507 | 0xE087 | 0x5E | GWS | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 508 | 0xE094 | 0x5E | GWS | EGS | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 509 | 0xE09A | 0x5E | GWS | DSC | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 510 | 0xE105 | 0x60 | KOMBI | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 511 | 0xE106 | 0x60 | KOMBI | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 512 | 0xE107 | 0x60 | KOMBI | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 513 | 0xE184 | 0x62 | CCC/MASK/RAD2 | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 514 | 0xE187 | 0x62 | CCC/MASK/RAD2 | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 515 | 0xE188 | 0x62 | mask2gw | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 516 | 0xE194 | 0x62 | CCC/MASK/RAD2 | leer | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 517 | 0xE1C4 | 0x62 | RAD | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 518 | 0xE1C7 | 0x62 | RAD | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 519 | 0xE1CE | 0x62 | CCC/MASK/RAD2 | leer | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 520 | 0xE1CF | 0x62 | RAD | leer | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 521 | 0xE1D0 | 0x62 | RAD | leer | 0x0000 | 14 | 14 | 14 | 14 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | 14 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | 14 | -29 | -29 | 14 | -29 | -29 | -29 | -29 | -29 | -29 | -29 |
| 522 | 0xE1D2 | 0x62 | RAD | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 523 | 0xE204 | 0x64 | PDC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 524 | 0xE207 | 0x64 | PDC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 525 | 0xE2C4 | 0x67 | CON | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 |
| 526 | 0xE2C7 | 0x67 | CON | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 |
| 527 | 0xE2D4 | 0x67 | CON | CAS | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 |
| 528 | 0xE2D5 | 0x67 | CON | KOMBI | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 |
| 529 | 0xE2D6 | 0x67 | CON | KOMBI | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 |
| 530 | 0xE2D7 | 0x67 | CON | CCC/MASK/RAD2 | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 |
| 531 | 0xE444 | 0x6D | SMFA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 532 | 0xE447 | 0x6D | SMFA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 533 | 0xE484 | 0x6E | SMBF | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 534 | 0xE487 | 0x6E | SMBF | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 535 | 0xE544 | 0x71 | AHM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 536 | 0xE545 | 0x78 | IHKA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 537 | 0xE546 | 0x78 | IHKA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 538 | 0xE547 | 0x71 | AHM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 539 | 0xE554 | 0x71 | AHM | leer | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 540 | 0xE555 | 0x71 | AHM | DME | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 541 | 0xE556 | 0x71 | AHM | DSC | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 542 | 0xE557 | 0x71 | AHM | KOMBI | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 543 | 0xE558 | 0x71 | AHM | leer | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 544 | 0xE559 | 0x71 | AHM | leer | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 545 | 0xE55A | 0x71 | AHM | CAS | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 546 | 0xE55B | 0x71 | AHM | DME | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 547 | 0xE55C | 0x71 | AHM | DSC | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 548 | 0xE55D | 0x71 | AHM | JBE | 0x0000 | -26 | 33 | -26 | 33 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 549 | 0xE584 | 0x72 | FRM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 550 | 0xE587 | 0x72 | FRM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 551 | 0xE588 | 0x72 | FRM | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 552 | 0xE594 | 0x72 | FRM | leer | 0x0000 | 14 | 14 | 14 | 14 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | 14 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | 14 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | -29 | 14 | -29 | -29 | -29 | -29 | -29 | -29 | -29 |
| 553 | 0xE595 | 0x72 | FRM | AHM | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 554 | 0xE596 | 0x72 | FRM | FLA | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 |
| 555 | 0xE597 | 0x72 | FRM | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 556 | 0xE598 | 0x72 | FRM | FZD | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 557 | 0xE599 | 0x72 | FRM | DSC | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 558 | 0xE59A | 0x72 | FRM | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 559 | 0xE59B | 0x72 | FRM | leer | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 560 | 0xE59C | 0x72 | FRM | leer | 0x0000 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 561 | 0xE5C4 | 0x73 | CID | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 562 | 0xE5C7 | 0x73 | CID | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 563 | 0xE704 | 0x78 | IHKA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 564 | 0xE707 | 0x78 | IHKA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 565 | 0xE714 | 0x78 | IHKA | leer | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 566 | 0xE715 | 0x78 | IHKA | leer | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 567 | 0xE716 | 0x78 | IHKA | leer | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 568 | 0xE717 | 0x78 | IHKA | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 569 | 0xE718 | 0x78 | IHKA | leer | 0x0000 | -26 | 33 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 570 | 0xE719 | 0x78 | IHKA | leer | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 571 | 0xE71A | 0x78 | IHKA | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 572 | 0xE71B | 0x78 | IHKA | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 573 | 0xE71C | 0x78 | IHKA | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 574 | 0xE71D | 0x78 | IHKA | PDC | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 575 | 0xE71E | 0x78 | IHKA | leer | 0x0000 | -26 | 33 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 576 | 0xE71F | 0x78 | IHKA | leer | 0x0000 | -26 | 33 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 577 | 0xE720 | 0x78 | IHKA | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 578 | 0xE721 | 0x78 | IHKA | leer | 0x0000 | -26 | 33 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 579 | 0xE722 | 0x78 | IHKA | leer | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 580 | 0xE723 | 0x78 | IHKA | FZD | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 581 | 0xE724 | 0x78 | IHKA | leer | 0x0000 | -26 | 33 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 582 | 0xE725 | 0x78 | IHKA | leer | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 583 | 0xE726 | 0x78 | IHKA | leer | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 584 | 0xE727 | 0x78 | IHKA | leer | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 585 | 0xE728 | 0x78 | IHKA | leer | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 586 | 0xE729 | 0x78 | IHKA | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 587 | 0xE72A | 0x78 | IHKA | JBE | 0x0000 | -26 | 33 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 588 | 0xE72B | 0x78 | IHKA | JBE | 0x0000 | -26 | 33 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 589 | 0xE72C | 0x78 | IHKA | ACSM/MRS5 | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 590 | 0xE72D | 0x78 | IHKA | CCC/MASK/RAD2 | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 591 | 0xE72E | 0x78 | IHKA | leer | 0x0000 | 20 | 20 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | 20 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 | -28 |
| 592 | 0xE72F | 0x78 | IHKA | FZD | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 593 | 0xE730 | 0x78 | IHKA | JBE | 0x0000 | -26 | 33 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 594 | 0xE733 | 0x78 | IHKA | CAS | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 595 | 0xE737 | 0x78 | IHKA | CAS | 0x0000 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | 33 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 | -26 |
| 596 | 0xFFFC | 0xE2 | SZL | leer | 0x0000 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 597 | 0xFFFD | 0x5F | FLA | leer | 0x0000 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 598 | 0xFFFE | 0xE0 | DSC-Sensor | leer | 0x0000 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

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
| 0x01 | MRS,ACSM | Mehrfach-Rückhaltesystem / Crash Sicherheitsmodul     |
| 0x12 | DME,DDE | Motor Elektronik / Diesel Elektronik                   |
| 0x13 | DME2,DDE2 | Motor Elektronik 2 / Diesel Elektronik Slave         |
| 0x16 | AFS | Aktivlenkung                                               |
| 0x17 | EKP | Kraftstoffpumpe                                            |
| 0x18 | EGS,SMG | Getriebesteuerung/Sequenzielles Manuelles Getriebe     |
| 0x19 | VTG | Verteilergetriebe                                          |
| 0x1C | LDM | Längsdynamikmanagement                                     |
| 0x1D | FFP | Aktives Fahrpedal                                          |
| 0x21 | ACC | Aktive Geschwindigkeitsregelung                            |
| 0x24 | CVM | Cabrioverdeck-Modul                                        |
| 0x27 | PGS, CA | Passive-Go-Steuergerät / Comfort Access                |
| 0x29 | DSC | Dynamische Stabilitäts-Control                             |
| 0x2A | EMF | Elektromechanische Feststellbremse                         |
| 0x30 | EPS | Elektrische Servolenkung                                   |
| 0x39 | EDC-K | Dämpfer-Control                                          |
| 0x3B | JNAV | Navigationssystem Japan                                   |
| 0x40 | CAS | Car Access System                                          |
| 0x41 | DWA | Diebstahlwarnanlage                                        |
| 0x44 | SHD | Schiebehebedach                                            |
| 0x56 | FZD | Funktionszentrum Dach                                      |
| 0x5E | GWS | Gangwahlschalter(ab M3 3 2008)                             |
| 0x5F | FLA | Fernlichtassistent                                         |
| 0x60 | KOMBI | Instrumentenkombination                                  |
| 0x62 | CCC,M-ASK,RAD | Car Communication Computer / M-ASK / Radio       |
| 0x63 | RAD | Radio                                                      |
| 0x64 | PDC | Park Distance Control                                      |
| 0x67 | CON | Controller                                                 |
| 0x6D | SMFA | Sitzmodul Fahrer                                          |
| 0x6E | SMBF | Sitzmodul Beifahrer                                       |
| 0x70 | RDC | Reifendruck-Control                                        |
| 0x71 | AHM | Anhängermodul                                              |
| 0x72 | FRM | Fußraummodul                                               |
| 0x73 | CID | Central Information Display                                |
| 0x78 | IHKA | Integrierte Heiz-Klima-Automatik                          |
| 0xE0 | DSC-Sensor | DSC-Sensor                                          |
| 0xE1 | LWS-RAD | Lenkwinkelsensor                                       |
| 0xE2 | SZL-LWS | Lenkwinkelsensor                                       |
| 0xE7 | F-CAN | Bus-System für Fahrwerksbereich                          |
| 0xE9 | K-CAN | Bus-System für Karosserieumfänge                         |
| 0xEA | PT-CAN | Bus-System im Antriebs- und Fahrwerksbereich            |
| 0xFF | unbekannt | unbekanntes Steuergerät                              |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |
