# can_pl4.prg

## General

|  |  |
| --- | --- |
| File | can_pl4.prg |
| Type | PRG |
| Jobs | 8 |
| Tables | 12 |
| Origin | BMW VP-33 Richard Amann |
| Revision | 0.12 |
| Author | ra Richard Amann |
| ECU Comment | CAN-Busanalyse PL4 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | CAN_PL4 |  |  |
| ORIGIN | string | BMW VP-33 Richard Amann |  |  |
| REVISION | string | 0.12 |  |  |
| AUTHOR | string | ra Richard Amann |  |  |
| COMMENT | string | CAN-Busanalyse PL4 |  |  |
| PACKAGE | string | 1.42 |  |  |
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
| 0xAA | ArvinMeritor |
| 0xAB | Kongsberg Automotive GmbH |
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
| 0x2AD0 | 2AD0 DME: Botschaft der Getriebesteuerung fehlt |
| 0x2DC8 | 2DC8 DME: Botschaft vom EGS fehlt, EGS 1 |
| 0x2DC9 | 2DC9 DME: Botschaft vom EGS fehlt, EGS 2 |
| 0x2DCA | 2DCA DME: Botschaft vom EGS fehlt |
| 0x2DCB | 2DCB DME: Botschaft vom SMG fehlt |
| 0x2DCC | 2DCC DME: Botschaft vom ASC/DSC fehlt, ASC 1 |
| 0x2DCD | 2DCD DME: Botschaft vom ASC/DSC fehlt, ASC 3 |
| 0x2DCE | 2DCE DME: Botschaft vom ASC/DSC fehlt, ASC 4 |
| 0x2DCF | 2DCF DME: Botschaft vom KOMBI fehlt |
| 0x2DD0 | 2DD0 DME: Botschaft von der Instrumentenkombination fehlt, I-Kombi 2 |
| 0x2DD1 | 2DD1 DME: Botschaft von der Instrumentenkombination fehlt, I-Kombi 3 |
| 0x2DD2 | 2DD2 DME: Botschaft vom LWS-Steuergerät fehlt, LWS |
| 0x2DD3 | 2DD3 DME: Botschaft vom SMG-Steuergerät fehlt, SMG 1 |
| 0x2DD7 | 2DD7 DME: Botschaft vom DSC fehlt |
| 0x2DD9 | 2DD9 DME: Botschaft vom ARS fehlt |
| 0x2DDA | 2DDA DME: Botschaft vom CAS fehlt |
| 0x2DDB | 2DDB DME: Botschaft vom IHKA fehlt |
| 0x2DDC | 2DDC DME: Botschaft vom SZL fehlt |
| 0x2DE0 | 2DE0 DME: Botschaft von der elektrischen Kraftstoffpumpe fehlt, EKP |
| 0x2DE3 | 2DE3 DME: Botschaft von der Instrumentenkombination fehlt, I-Kombi 7 |
| 0x2E41 | 2E41 DDE: Schnittstelle EWS-DDE |
| 0x2E46 | 2E46 DDE: Botschaft EWS-DDE fehlerhaft |
| 0x2E47 | 2E47 DDE: Botschaft EWS-DDE fehlerhaft |
| 0x2E7F | 2E7F DME: EGS über PT-CAN2 und PT-CAN |
| 0x2F50 | 2F50 DME: Botschaft vom KOMBI fehlt |
| 0x3166 | 3166 DME: PT-CAN, Botschaft (Status Sitzbelegung Gurtkontakt Fahrer, 0x2F1) |
| 0x3167 | 3167 DME: PT-CAN, Botschaft (Status Sitzbelegung Gurtkontakte, 0x2FA) |
| 0x316A | 316A DME: PT-CAN, Botschaft (Status Leckdiagnose Drucktank, 0x2E7) |
| 0x316D | 316D DME: PT-CAN, Botschaft (Anforderung Radmoment Antriebstrang Summe FAS, 0x15D) |
| 0x3179 | 3179 DME: PT-CAN, Botschaft (Radgeschwindigkeit, 0xCE) |
| 0x317A | 317A DME: PT-CAN, Botschaft (Austausch EHB3 SBA, 0xE7) |
| 0x317B | 317B DME: PT-CAN, Botschaft (Status Türsensoren, 0x1E1) |
| 0x3BC5 | 3BC5 DME: PT-CAN, Botschaft (ARS Steuergerät): fehlt |
| 0x3BC7 | 3BC7 DME: PT-CAN, Botschaft (CAS Steuergerät): fehlt |
| 0x3BCC | 3BCC DME: PT-CAN, Botschaft (IHKA Steuergerät): fehlt |
| 0x3BCE | 3BCE DME: PT-CAN, Botschaft (KOMBI Steuergerät): fehlt |
| 0x3BD1 | 3BD1 DME: PT-CAN, Botschaft (Anforderung Drehmoment DSC, 0B6): fehlt |
| 0x3BD2 | 3BD2 DME: PT-CAN, Botschaft (Geschwindigkeit Rad, 0CE): fehlt |
| 0x3BD4 | 3BD4 DME: PT-CAN, Botschaft (Getriebedaten 4, 10A): fehlt |
| 0x3BD5 | 3BD5 DME: PT-CAN, Botschaft (Status DSC, 19E): fehlt |
| 0x3BD7 | 3BD7 DME: PT-CAN, Botschaft (Geschwindigkeit Fahrzeug, 1A0): fehlt |
| 0x3BD8 | 3BD8 DME: PT-CAN, Botschaft (Getriebedaten 2, 1A2): fehlt |
| 0x3BDD | 3BDD DME: PT-CAN, Botschaft (Anforderung Drehmoment EGS, B5): fehlt |
| 0x3BE1 | 3BE1 DME: PT-CAN, Botschaft (Getriebedaten, BA): fehlt |
| 0x3BED | 3BED DME: PT-CAN, Botschaft (Bedienung Tempomat, 194): fehlt |
| 0x412F | 412F DDE: Botschaft (STAT_ZV_KLAPPEN, 0x2FC) |
| 0x41A6 | 41A6 DDE: Botschaft (CBS Reset, 0x580) |
| 0x41A8 | 41A8 DDE: Botschaft (CBS Reset, 0x580) |
| 0x430F | 430F DDE: Botschaft (Fahrzeugtyp, 388) |
| 0x4325 | 4325 DDE: Botschaft (Drehmoment SSG, 0xBD) |
| 0x4326 | 4326 DDE: Botschaft (Drehmoment SSG, 0xBD) |
| 0x4328 | 4328 DDE: Botschaft (Drehmoment SSG, 0xBD) |
| 0x438A | 438A DDE: Botschaft (Anforderung Radmoment Antriebstrang, BF) |
| 0x438B | 438B DDE: Botschaft (Anforderung Radmoment Antriebstrang, BF) |
| 0x438D | 438D DDE: Botschaft (Anforderung Radmoment Antriebstrang, BF) |
| 0x4445 | 4445 DDE: Botschaft (Drehmoment AFS, 0xB9) |
| 0x4446 | 4446 DDE: Botschaft (Drehmoment AFS, 0xB9) |
| 0x4448 | 4448 DDE: Botschaft (Drehmoment AFS, 0xB9) |
| 0x4458 | 4458 DDE: Botschaft (Lenkradwinkel, 0xC4) |
| 0x453B | 453B DDE: Power Train CAN Bus |
| 0x4568 | 4568 DDE: Botschaft (Codierung, 0x395) |
| 0x4578 | 4578 DDE: Botschaft (Steuerung Crashabschaltung EKP, 0x135) |
| 0x4598 | 4598 DDE: Botschaft (Programmierung Stufentempomat, 0x331) |
| 0x465B | 465B DDE: Botschaft (GETRIEBEDATEN_4, 0x10A) |
| 0x47F8 | 47F8 DDE: Botschaft (Sitzbelegung/Gurt, 0x2FA) |
| 0x4824 | 4824 DDE: Botschaft (Radmomentanforderung, 0xBF) |
| 0x4829 | 4829 DDE: Botschaft (Radmomentanforderung, 0xBF) |
| 0x482E | 482E DDE: Botschaft (Radmomentanforderung, 0xBF) |
| 0x482F | 482F DDE: Botschaft (Radmomentanforderung, 0xBF) |
| 0x4910 | 4910 DDE: PT-CAN-Bus |
| 0x4991 | 4991 DDE: Botschaft (Kombi, 0x1B4) |
| 0x4993 | 4993 DDE: Botschaft (Kombi, 0x1B4) |
| 0x49A3 | 49A3 DDE: Botschaft (Außentemperatur, 0x310) |
| 0x49A8 | 49A8 DDE: Botschaft (Anforderung Elektrolüfter, 0x580) |
| 0x49B8 | 49B8 DDE: Botschaft (Status EKP, 0x335) |
| 0x49F3 | 49F3 DDE: Botschaft (Geschwindigkeit, 0xCE) |
| 0x4A98 | 4A98 DDE: Botschaft (CBS Reset, 0x580) |
| 0x4AA8 | 4AA8 DDE: Botschaft (Status Anhänger, 0x2E4) |
| 0x4AB8 | 4AB8 DDE: Botschaft (Uhrzeit/Datum, 0x2F8) |
| 0x4B12 | 4B12 DDE: Botschaft (Geschwindigkeit, 0x1A0) |
| 0x4B13 | 4B13 DDE: Botschaft (Geschwindigkeit, 0x1A0) |
| 0x4B4A | 4B4A DDE: Botschaft (Drehmomentanforderung AFS, 0xB1) |
| 0x4B4B | 4B4B DDE: Botschaft (Drehmomentanforderung AFS, 0xB1) |
| 0x4B4D | 4B4D DDE: Botschaft (Drehmomentanforderung AFS, 0xB1) |
| 0x4BE3 | 4BE3 DDE: Botschaft (Getriebedaten, 0xBA) |
| 0x4BE8 | 4BE8 DDE: Botschaft (Getriebedaten 2, 0x1A2) |
| 0x4BF3 | 4BF3 DDE: Botschaft (Klimaanlage, 0x1B5) |
| 0x4BF8 | 4BF8 DDE: Botschaft (Reichweite, 0x330) |
| 0x4C06 | 4C06 DDE: Botschaft (Status ARS, 0x1AC) |
| 0x4C08 | 4C08 DDE: Botschaft (Status ARS, 0x1AC) |
| 0x4C13 | 4C13 DDE: Botschaft (Status DSC, 0x19E) |
| 0x4C15 | 4C15 DDE: Botschaft (Klemme 15, 0x130) |
| 0x4C16 | 4C16 DDE: Botschaft (Klemme 15, 0x130) |
| 0x4C17 | 4C17 DDE: Botschaft (Klemme 15, 0x130) |
| 0x4C18 | 4C18 DDE: Botschaft (Klemme 15, 0x130) |
| 0x4C20 | 4C20 DDE: Botschaft (Drehmoment DSC, 0xB6) |
| 0x4C21 | 4C21 DDE: Botschaft (Drehmoment DSC, 0xB6) |
| 0x4C23 | 4C23 DDE: Botschaft (Drehmoment DSC, 0xB6) |
| 0x4C28 | 4C28 DDE: Botschaft (Geschwindigkeit, 0x1A0) |
| 0x4C3C | 4C3C DDE: Botschaft (Sollmomentanforderung, 0xBB) |
| 0x4C3D | 4C3D DDE: Botschaft (Sollmomentanforderung, 0xBB) |
| 0x4C97 | 4C97 DDE: Botschaft (Fahrererkennung, 0x2F1) |
| 0x4C98 | 4C98 DDE: Botschaft (Fahrererkennung, 0x2F1) |
| 0x4C9B | 4C9B DDE: Botschaft (Fahrererkennung, 0x2F1) |
| 0x4C9C | 4C9C DDE: Botschaft (Fahrererkennung, 0x2F1) |
| 0x4D2A | 4D2A DDE: Botschaft (Status EMF, 0x201) |
| 0x4D2B | 4D2B DDE: Botschaft (Status EMF, 0x201) |
| 0x4D2D | 4D2D DDE: Botschaft (Status EMF, 0x201) |
| 0x4D3A | 4D3A DDE: Botschaft (Stellanforderung EMF, 0x1A7) |
| 0x4D3B | 4D3B DDE: Botschaft (Stellanforderung EMF, 0x1A7) |
| 0x4D3D | 4D3D DDE: Botschaft (Stellanforderung EMF, 0x1A7) |
| 0x4DDD | 4DDD DDE: Botschaft (Anzeige Getriebedaten, 0x1D2) |
| 0x4DF0 | 4DF0 DDE: Botschaft (Drehmoment Getriebe, 0xB5) |
| 0x4DF1 | 4DF1 DDE: Botschaft (Drehmoment Getriebe, 0xB5) |
| 0x4DF3 | 4DF3 DDE: Botschaft (Drehmoment Getriebe, 0xB5) |
| 0x55C4 | 55C4 VTG: Botschaft (Sollmoment, BB) |
| 0x55C5 | 55C5 VTG: Botschaft (Motormoment, AA) |
| 0x55C6 | 55C6 VTG: Botschaft (Geschwindigkeit Rad, CE) |
| 0x55C7 | 55C7 VTG: Botschaft (Geschwindigkeit, 1A0) |
| 0x55C8 | 55C8 VTG: Botschaft (Klemmenstatus, 130) |
| 0x55C9 | 55C9 VTG: Botschaft (Motormoment 1, A8) |
| 0x55CA | 55CA VTG: Botschaft (Kilometerstand, 330) |
| 0x55CB | 55CB VTG: Botschaft (Aussentemperatur Relativzeit, 310) |
| 0x55CD | 55CD VTG: Botschaft (Status DSC, 19E) |
| 0x55CE | 55CE VTG: Botschaft (Getriebedaten, BA) |
| 0x55CF | 55CF VTG: Botschaft (Getriebedaten, 1A2) |
| 0x55D0 | 55D0 VTG: Botschaft (Lenkradwinkel, C4) |
| 0x5E8C | 5E8C DSC: Botschaft ( Anhänger 2E4) fehlt |
| 0x5F25 | 5F25 DSC: Botschaft (Dynamic Drive, 1AC) fehlt |
| 0x5F26 | 5F26 DSC: Botschaft (Dynamic Drive, 1AC) fehlerhaft |
| 0x5F2E | 5F2E DSC: Botschaft (Getriebe 0BA) fehlt |
| 0x5F34 | 5F34 DSC: Botschaft (Motorsteuerung, A8) fehlerhaft |
| 0x5F35 | 5F35 DSC: Botschaft (Motorsteuerung, A9) fehlerhaft |
| 0x5F36 | 5F36 DSC: Botschaft (Motorsteuerung, AA) fehlerhaft |
| 0x5F5C | 5F5C DSC: Botschaft (AHM, 2E4) fehlt |
| 0x6DD0 | 6DD0 DSC: Botschaft (EHC, 212) fehlerhaft |
| 0x6DE8 | 6DE8 DSC: F-CAN Botschaft (Aktivlenkung, 118) fehlerhaft |
| 0x6E00 | 6E00 DSC: F-CAN Botschaft (Aktivlenkung, 120) fehlerhaft |
| 0x6E1D | 6E1D DSC: Botschaft (Motorsteuerung B4) fehlerhaft |
| 0x6E1E | 6E1E DSC: Botschaft (Motorsteuerung B4) fehlerhaft |
| 0x6E1F | 6E1F DSC: Botschaft (Motorsteuerung AC) fehlerhaft |
| 0x6E20 | 6E20 DSC: Botschaft (Motorsteuerung AC) fehlerhaft |
| 0x6EAD | 6EAD DSC: PT-CAN Botschaft (SBA, E8) fehlt |
| 0x6F4B | 6F4B DSC: PT-CAN Botschaft (LDM, D5) fehlerhaft |
| 0x6F4E | 6F4E DSC: Botschaft (EMF, 201) fehlt |
| 0x6F4F | 6F4F DSC: Botschaft (EMF, 201) fehlerhaft |
| 0x6F50 | 6F50 DSC: Botschaft (Airbag, 2FA) fehlt |
| 0x6F51 | 6F51 DSC: Botschaft (EHC, 212) fehlt |
| 0x6F52 | 6F52 DSC: Botschaft (C9h) fehlt |
| 0x6F53 | 6F53 DSC: F-CAN Botschaft (Aktivlenkung, 120) fehlt |
| 0x6F54 | 6F54 DSC: Botschaft (Aktivlenkung, 120) fehlerhaft |
| 0x6F56 | 6F56 DSC: Botschaft (Motorsteuerung, B4) fehlt |
| 0x6F57 | 6F57 DSC: Botschaft (Motorsteuerung, AC) fehlt |
| 0x6F60 | 6F60 DSC: Botschaft (Getriebesteuerung, 1A2) fehlt |
| 0x6F62 | 6F62 DSC: Botschaft (Getriebesteuerung, 1A2) fehlerhaft |
| 0x6F63 | 6F63 DSC: Botschaft (Reifen Druck Control, 31C) fehlt |
| 0x6F64 | 6F64 DSC: PT-CAN Verdacht auf Leitungsunterbrechung (Kommunikation) |
| 0x6F65 | 6F65 DSC: Botschaft (Kombi, 1B4) fehlerhaft |
| 0x6F78 | 6F78 DSC: PT-CAN Botschaft (DME, 8F) fehlt |
| 0x6F7A | 6F7A DSC: PT-CAN Botschaft (DME, 144) fehlt |
| 0x6F7C | 6F7C DSC: PT-CAN Botschaft (DME, DC) fehlt |
| 0x6F7E | 6F7E DSC: PT-CAN Botschaft (DME, DD) fehlt |
| 0x6F80 | 6F80 DSC: PT-CAN Botschaft (SBA, E8) fehlt |
| 0x6F82 | 6F82 DSC: PT-CAN Botschaft (DME, 1D0) fehlt |
| 0x6F83 | 6F83 DSC: PT-CAN Botschaft (DME, 3FC) fehlt |
| 0x6F84 | 6F84 DSC: PT-CAN Botschaft (DME, FF) fehlt |
| 0x6F86 | 6F86 DSC: PT-CAN Botschaft (DME, 145) fehlt |
| 0x6F88 | 6F88 DSC: PT-CAN Botschaft (DME, 399) fehlt |
| 0x6F8A | 6F8A DSC: PT-CAN Botschaft (Airbag, 2F1) fehlt |
| 0x6F8C | 6F8C DSC: PT-CAN Botschaft (FRM, 1E1) fehlt |
| 0x6F8E | 6F8E DSC: PT-CAN Botschaft (Getriebesteuerung, BA) fehlt |
| 0x93C6 | 93C6 ACSM: Lehnenverriegelung (E93)/Sitzmemory (E70/E71) für Fahrersitz |
| 0x93C7 | 93C7 ACSM: Lehnenverriegelung für Beifahrersitz |
| 0x93FB | 93FB MRS / ACSM: Botschaft (Geschwindigkeit) von DSC fehlt |
| 0x940D | 940D MRS / ACSM: Botschaft (Helligkeit LCD) von der Instrumentenkombination fehlt |
| 0x9414 | 9414 ACSM: Botschaft vom Steuergerät DSC fehlt |
| 0x9415 | 9415 ACSM: Botschaft vom Steuergerät DSC fehlt |
| 0xA173 | A173 CCC-GW: K-CAN Leitungsfehler |
| 0xA3A8 | A3A8 KOMBI: K-CAN Kommunikationsfehler |
| 0xA3AA | A3AA KOMBI: Botschaft (Getriebedaten, 1D2) fehlt |
| 0xA3AB | A3AB KOMBI: Botschaft (Anzeige Aktive Geschwindigkeitsregelung, 193) fehlt |
| 0xA3AC | A3AC KOMBI: Botschaft (Wegstrecke, 1A6) fehlt |
| 0xA3AD | A3AD KOMBI: Botschaft (Motordaten, 1D0) fehlt |
| 0xA3AE | A3AE KOMBI: Botschaft (Motordrehzahl, 0AA) fehlt |
| 0xA3AF | A3AF KOMBI: Botschaft (Geschwindigkeitssollwert, 200) fehlt |
| 0xA3B0 | A3B0 KOMBI: Botschaft (Dimmung, 202) fehlt |
| 0xA3B1 | A3B1 KOMBI: Botschaft (Fahrtrichtungsanzeiger-Zyklus, 1F6) fehlt |
| 0xA3B2 | A3B2 KOMBI: Botschaft (Klemmenstatus, 130) fehlt |
| 0xA3B3 | A3B3 KOMBI: Botschaft (Aktive Rollstabilisierung, 0BE) fehlt |
| 0xA3B4 | A3B4 KOMBI: Botschaft (Lampenzustand, 21A) fehlt |
| 0xA3B6 | A3B6 KOMBI: Botschaft (Datenablage Condition Based Service, 5C0) fehlt |
| 0xA3B8 | A3B8 KOMBI: Botschaft (Elektronische Dämpfer-Control, 326) fehlt |
| 0xA3B9 | A3B9 KOMBI: Botschaft (Dynamische Stabilitätskontrolle, 19E) fehlt |
| 0xA3BB | A3BB KOMBI: Botschaft (Türenstatus, 2FC) fehlt |
| 0xA3BC | A3BC KOMBI: CAN Komunikationsstörung |
| 0xA3BD | A3BD KOMBI: Botschaft (Zentrales Gateway Modul,0C0) fehlt |
| 0xA3BE | A3BE KOMBI: Botschaft vom Steuergerät CAS fehlt |
| 0xA3C0 | A3C0 KOMBI: Botschaft vom Steuergerät AHM fehlt |
| 0xA3C1 | A3C1 KOMBI: Botschaft vom Steuergerät FRM fehlt |
| 0xA3C3 | A3C3 KOMBI: Botschaft vpm Steuergerät RDC fehlt |
| 0xA3C6 | A3C6 KOMBI: Botschaft Konsistenzfehler Getriebewählschalter |
| 0xA3C7 | A3C7 KOMBI: Botschaft vom Steuergerät Luftfederung fehlt |
| 0xA4F2 | A4F2 HUD: Botschaft (Klemmenstatus, 130) |
| 0xA4F3 | A4F3 HUD: Botschaft (Aktive Geschwindigkeitsregelung, 190) |
| 0xA4F4 | A4F4 HUD: Botschaft (Geschwindigkeit, 1A0) |
| 0xA4F5 | A4F5 HUD: Botschaft (Instrumentenkombination-Status, 1B4) |
| 0xA4F7 | A4F7 HUD: Botschaft (LCD-Leuchtdichte, 2C0) |
| 0xA4F8 | A4F8 HUD: Botschaft (Dimmung, 202) |
| 0xA4FA | A4FA HUD: Botschaft (Wegstreckenzählerstand/Reichweite, 330) |
| 0xA503 | A503 HUD: Botschaft (Funkschlüssel, 23A) fehlt |
| 0xA548 | A548 KOMBI: Botschaft (Aktivlenkung, 1FC) fehlt |
| 0xA549 | A549 KOMBI: Botschaft (Fahrzeugmodus, 315) fehlt |
| 0xA54A | A54A KOMBI: Botschaft (Car Access System, 394) fehlt |
| 0xA54C | A54C KOMBI: Botschaft (Rohdaten Füllstand Tank) fehlt |
| 0xA54D | A54D KOMBI: Botschaft vom Steuergerät EKP fehlt |
| 0xA54E | A54E KOMBI: Botschaft (Lehnenverriegelung Fahrer) fehlt |
| 0xA54F | A54F KOMBI: Botschaft (Lehnenverriegelung Beifahrer) fehlt |
| 0xA550 | A550 KOMBI: Botschaft (Geschwindigkeit, 1A0) fehlt |
| 0xA551 | A551 KOMBI: Botschaft (Feststellbrems-Warnschalter, 34F) fehlt |
| 0xA555 | A555 KOMBI: Botschaft (Sitzbelegung Gurtkontakte) fehlt |
| 0xA556 | A556 KOMBI: Botschaft (HDC Anzeige) fehlt |
| 0xA558 | A558 KOMBI: Botschaft (Parkbremse) fehlt |
| 0xA55B | A55B KOMBI: Botschaft (Airbag) fehlt |
| 0xA560 | A560 KOMBI: Botschaft (Anzeige Schalthinweis) fehlt |
| 0xA565 | A565 KOMBI: Botschaft (Anzeige Motordaten) fehlt |
| 0xA566 | A566 KOMBI: Botschaft (Status QSG, 180, ICM_QL an KOMBI) fehlt |
| 0xA56C | A56C KOMBI: Botschaft (Anzeige Status Hybrid, 2BC, HIM an KOMBI) fehlt |
| 0xA56D | A56D KOMBI: Botschaft (Status SBA, 323, SBA an KOMBI) fehlt |
| 0xA56E | A56E KOMBI: Botschaft (Status Leckdiagnose Drucktank, 2E7, TFE an KOMBI) fehlt |
| 0xA73B | A73B JBE: Fehler Botschaft (K-CAN: Wasserventil, 2BF) |
| 0xA812 | A812 RFK: Botschaft vom Steuergerät CAS fehlt |
| 0xA813 | A813 RFK: Botschaft vom Steuergerät FRMFA fehlt |
| 0xA814 | A814 RFK: Botschaft vom Steuergerät EHB3 fehlt |
| 0xA815 | A815 RFK: Botschaft vom Steuergerät PDC fehlt |
| 0xA816 | A816 RFK: Botschaft vom Steuergerät PDC fehlt |
| 0xA819 | A819 RFK: Botschaft vom Steuergerät EGS fehlt |
| 0xA81A | A81A RFK: Botschaft vom Steuergrät EHB3 fehlt |
| 0xA81B | A81B RFK: Botschaft vom Steuergerät EHB3 fehlt |
| 0xA81C | A81C RFK: Botschaft vom Steuergerät CAS fehlt |
| 0xC907 | C907 JBE: K-CAN Kommunikationsfehler |
| 0xC908 | C908 JBE: K-CAN Leitungsfehler |
| 0xC90B | C90B JBE: PT-CAN Kommunikationsfehler |
| 0xC914 | C914 JBE: Botschaft (K-CAN: Status Klima, 246) fehlt |
| 0xC915 | C915 JBE: Fehler Botschaft (K-CAN: Kompressorventil, 246) |
| 0xC916 | C916 JBE: Fehler Botschaft (K-CAN: Heckscheibenheizung, 246) |
| 0xC917 | C917 JBE: Fehler Botschaft (K-CAN: Zusatzwasserpumpe, 246) |
| 0xC918 | C918 JBE: Botschaft (PT-CAN: Wischerbedienung, 2A6) fehlt |
| 0xC919 | C919 JBE: Botschaft (PT-CAN: Motorwärmestrom, 1B6) fehlt |
| 0xC91A | C91A JBE: Fehler Botschaft (PT-CAN: Wasserventil, 1B6) |
| 0xC91B | C91B JBE: Fehler Botschaft (K-CAN: Sitzheizung Fahrerseite, 1E7) |
| 0xC91C | C91C JBE: Fehler Botschaft (K-CAN: Sitzheizung Beifahrerseite, 1E8) |
| 0xC91D | C91D JBE: Fehler Botschaft (K-CAN: Kompressorkupplung, 246) |
| 0xC91E | C91E JBE: Botschaft (K-CAN: Klemmenstatus, 130) fehlt |
| 0xC91F | C91F JBE: Botschaft (K-CAN: Kilometerstand/Reichweite, 330) fehlt |
| 0xC920 | C920 JBE: Botschaft (PT-CAN: Geschwindigkeit, 1A0) falsch oder fehlt |
| 0xC921 | C921 JBE: Botschaft (PT-CAN: Drehmoment, AA) falsch oder fehlt |
| 0xC922 | C922 JBE: Botschaft (PT-CAN: Lenkwinkel, C4) falsch oder fehlt |
| 0xC923 | C923 JBE: Fehler Botschaft (PT-CAN: Drehmoment Getriebe, B5) |
| 0xC924 | C924 JBE: Botschaft (PT-CAN: Drehmoment Getriebe, B5) fehlt |
| 0xC944 | C944 MRS / ACSM: K-CAN Leitungsfehler |
| 0xC94B | C94B ACSM: F-CAN Kommunikationsfehler |
| 0xCA84 | CA84 TRSVC: K-CAN: Leitungsfehler |
| 0xCA87 | CA87 TRSVC: K-CAN: Kommunikationsfehler |
| 0xCA9A | CA9A TRSVC: Botschaft (Relativzeit, 0x328) fehlerhaft |
| 0xCA9B | CA9B TRSVC: Botschaft (Kilometerstand/Reichweite, 0x330) fehlerhaft |
| 0xCA9C | CA9C TRSVC: Botschaft (Geschwindigkeit Fahrzeug, 0x1A0) fehlerhaft |
| 0xCA9D | CA9D TRSVC: Botschaft (Fahrzeugzustand, 0x3A0) fehlerhaft |
| 0xCA9E | CA9E TRSVC: Botschaft (Lampenzustand, 0x21A) fehlerhaft |
| 0xCA9F | CA9F TRSVC: Botschaft (Bedienung Taster Stoßfängerkamera, 0x387) fehlerhaft |
| 0xCAA0 | CAA0 TRSVC: Botschaft (Lenkwinkel K-CAN, 0xC4) fehlerhaft |
| 0xCAA1 | CAA1 TRSVC: Botschaft (Klemmen, 0x130) fehlerhaft |
| 0xCAA2 | CAA2 TRSVC: Botschaft (Status Anhänger, 0x2E4) fehlerhaft |
| 0xCAA3 | CAA3 TRSVC: Botschaft (Status Fahrlicht, 0x314) fehlerhaft |
| 0xCAA4 | CAA4 TRSVC: Botschaft (Status Gang, 0x304) fehlerhaft |
| 0xCAA5 | CAA5 TRSVC: Botschaft (Wegstrecke Fahrzeug, 0x1A6) fehlerhaft |
| 0xCAA6 | CAA6 TRSVC: Botschaft (ZV und Klappenzustand, 0x2FC) fehlerhaft |
| 0xCAA7 | CAA7 TRSVC: Botschaft (Abstandsmessung PDC, 0x36D) fehlerhaft |
| 0xCAA8 | CAA8 TRSVC: Botschaft (Aussentemperatur, 0x2CA) fehlerhaft |
| 0xCAA9 | CAA9 TRSVC: Botschaft (Bordnetz Spannungswert, 0x3B4) fehlerhaft |
| 0xCAAA | CAAA TRSVC: Botschaft (Fahrzeugneigung, 0x306) fehlerhaft |
| 0xCAAB | CAAB TRSVC: Botschaft (Status Aktivierung Funktion Parken, 0x3AF) fehlerhaft |
| 0xCAAC | CAAC TRSVC: Botschaft (Status Funktion PDC, 0x377) fehlerhaft |
| 0xCAAD | CAAD TRSVC: Botschaft (Status Gang Rueckwärts, 0x3B0) fehlerhaft |
| 0xCB47 | CB47 HIM: Bus Kommunikationsfehler (PT-CAN) |
| 0xCB54 | CB54 HIM: Botschaft (Anforderung Kühlung Hochvoltbatterie, 0x299) von IHKA fehlt |
| 0xCB87 | CB87 SBA: PT-CAN: Kommunikationsfehler (OBDII U180C) |
| 0xCB94 | CB94 Botschaft (Austausch EHB3 SBA, E7) fehlt, Empfänger SBA (PT-CAN), Sender DSC (PT-CAN) |
| 0xCB97 | CB97 Botschaft (Geschwindigkeit PT-CAN, 1A0) fehlt, Empfänger SBA (PT-CAN), Sender DSC (PT-CAN) |
| 0xCB9A | CB9A Botschaft (Radgeschwindigkeit PT-CAN, CE) fehlt, Empfänger SBA (PT-CAN), Sender DSC (PT-CAN) |
| 0xCB9D | CB9D Botschaft (Status DSC PT-CAN, 19E) fehlt, Empfänger SBA (PT-CAN), Sender DSC (PT-CAN) |
| 0xCBA0 | CBA0 Botschaft (Aussentemperatur/Relativzeit, 310) fehlt, Empfänger SBA (PT-CAN), Sender KOMBI (K-CAN) |
| 0xCBA1 | CBA1 Botschaft (Kilometerstand/Reichweite, 330) fehlt, Empfänger SBA (PT-CAN), Sender KOMBI (K-CAN) |
| 0xCBA2 | CBA2 Botschaft (Klemmenstatus, 130) fehlt, Empfänger SBA (PT-CAN), Sender CAS (K-CAN) |
| 0xCBA8 | CBA8 Botschaft (Getriebedaten, BA) fehlt, Empfänger SBA (PT-CAN), Sender HIM (PT-CAN) |
| 0xCBAB | CBAB Botschaft (Drehmoment 3 PT-CAN, AA) fehlt, Empfänger SBA (PT-CAN), Sender DME (PT-CAN) |
| 0xCBAE | CBAE Botschaft (Fahrgestellnummer, 380) fehlt, Empfänger SBA (PT-CAN), Sender CAS (K-CAN) |
| 0xCBAF | CBAF Botschaft (Radmoment Antrieb 5, DD) fehlt, Empfänger SBA (PT-CAN), Sender DME (PT-CAN) |
| 0xCBB8 | CBB8 Botschaft (Nachlaufzeit Stromversorgung, 3BE) fehlt, Empfänger SBA (PT-CAN), Sender CAS (K-CAN) |
| 0xCBBA | CBBA Botschaft (Beschleunigungsdaten, 2B3) fehlt, Empfänger SBA (PT-CAN), Sender DSC (PT-CAN) |
| 0xCCCF | CCCF QMVH: PT CAN Kommunikationsfehler |
| 0xCCE5 | CCE5 QMVH: Botschaft ( Drehmoment 1, PT-CAN) von Motorsteuerung fehlt |
| 0xCCE6 | CCE6 QMVH: Botschaft ( Drehmoment 3, PT-CAN) von Motorsteuerung fehlt |
| 0xCCE7 | CCE7 QMVH: Botschaft ( Geschwindigkeit Rad, PT-CAN) von der DSC fehlt |
| 0xCCE8 | CCE8 QMVH: Botschaft ( Lenkradwinkel , PT-CAN) von DSC fehlt |
| 0xCCE9 | CCE9 QMVH: Botschaft ( Klemmenstatus , PT-CAN) von CAS fehlt |
| 0xCCEA | CCEA QMVH: Botschaft ( Status DSC, PT-CAN) von DSC fehlt |
| 0xCCEB | CCEB QMVH: Botschaft ( Getriebedaten 2, PT-CAN) von EGS fehlt |
| 0xCCEC | CCEC QMVH: Botschaft ( Uhrzeit - Datum , PT-CAN) von Kombiinstrument fehlt |
| 0xCCED | CCED QMVH: Botschaft ( Kilometerstand , PT-CAN) von Kombiinstrument fehlt |
| 0xCCEE | CCEE QMVH: Botschaft (Powermanagement-Batteriespannung , PT-CAN) von Motorsteuerung fehlt |
| 0xCD86 | CD86 DME: PT-CAN, Botschaft (Klemmenstatus, 130): fehlt |
| 0xCD87 | CD87 DME/DDE: PT-CAN Kommunikationsfehler: CAN-Bus Off oder CAN-Bus defekt |
| 0xCD89 | CD89 DME: PT-CAN, Botschaft (Status Crashabschaltung EKP, 135): fehlt |
| 0xCD8C | CD8C DME: PT-CAN, Botschaft (Stellanforderung EMF, 1A7): fehlt |
| 0xCD8F | CD8F DME: PT-CAN, Botschaft (Anzeige Getriebedaten, 1D2): fehlt |
| 0xCD92 | CD92 DME: PT-CAN, Botschaft (Status EMF, 201): fehlt |
| 0xCD94 | CD94 DME: Botschaft (Außentemperatur/Relativzeit, 310) |
| 0xCD97 | CD97 DME: Botschaft (Drehmomentanforderung AFS, B1) |
| 0xCD99 | CD99 DME: Botschaft (Drehmomentanforderung EGS, B5) |
| 0xCD9A | CD9A DME: Botschaft (Drehmomentanforderung SMG, BD) |
| 0xCD9C | CD9C DME: Botschaft (Geschwindigkeit, 1A0) |
| 0xCD9F | CD9F DME: Botschaft (Kilometerstand/Reichweite, 330) |
| 0xCDA0 | CDA0 DME: Botschaft (Klemmenstatus, 130) |
| 0xCDAD | CDAD DME: Botschaft (Anforderung Radmoment Antriebstrang, BF) fehlt |
| 0xCDAE | CDAE DME: Botschaft (Uhrzeit/Datum, 2F8) |
| 0xCDAF | CDAF DME: Botschaft (Status Anhänger, 2E4) |
| 0xCDB3 | CDB3 DME: Botschaft (Drehmomentanforderung Lenkung, B1h) |
| 0xCDB5 | CDB5 DME: PT-CAN Kommunikationsfehler |
| 0xCDB9 | CDB9 DME: Botschaft (Status EMF, 201) |
| 0xCDBA | CDBA DME: Botschaft (Stellanforderung EMF, 1A7) |
| 0xCDC2 | CDC2 DME: Botschaft (Status Anforderung EMF, 1FDH) |
| 0xCDEB | CDEB DME: Botschaft (Lampenzustand, 21A) |
| 0xCDED | CDED DME: Botschaft (Anforderung Radmoment Antriebstrang, BF) |
| 0xCDEE | CDEE DME: Botschaft (Uhrzeit/Datum, 2F8) |
| 0xCDEF | CDEF DME: Botschaft (Status Anhänger, 2E4) |
| 0xCDF9 | CDF9 DME: Botschaft (Status EMF, 201) |
| 0xCDFA | CDFA DME: Botschaft (Stellanforderung EMF, 1A7) |
| 0xCE4F | CE4F LDM: Botschaft (Navigation GPS 2, 34C) fehlerhaft, Sender CIC |
| 0xCE50 | CE50 LDM: Botschaft (Navigation System Information, 34E) fehlerhaft, Sender CIC |
| 0xCE51 | CE51 LDM: Botschaft (Übereinstimmung Navigationsgraph, 348) fehlerhaft, Sender CIC |
| 0xCE52 | CE52 LDM: Botschaft (Navigationsgraph, 278) fehlerhaft, Sender CIC |
| 0xCE53 | CE53 LDM: Botschaft (Synchronisation Navigationsgraph, 27A) fehlerhaft, Sender CIC |
| 0xCE55 | CE55 LDM: Botschaft (Außentemperatur/Relativzeit, 310) fehlerhaft, Sender Kombi |
| 0xCE56 | CE56 LDM: Botschaft (Bedienung Tempomat, 194) fehlerhaft, Sender DSC |
| 0xCE57 | CE57 LDM: Botschaft (Blinken, 1F6) fehlerhaft, Sender FRM |
| 0xCE58 | CE58 LDM: Botschaft (Drehmoment 1 PT-CAN, A8) fehlerhaft, Sender DME / DDE |
| 0xCE59 | CE59 LDM: Botschaft (Drehmoment 2, A9) fehlerhaft, Sender DME / DDE |
| 0xCE5A | CE5A LDM: Botschaft (Drehmoment 3 PT-CAN, AA) fehlerhaft, Sender DME / DDE |
| 0xCE5C | CE5C LDM: Botschaft (Geschwindigkeit PT-CAN, 1A0) fehlerhaft, Sender DSC |
| 0xCE5D | CE5D LDM: Botschaft (Getriebedaten, BA) fehlerhaft, Sender EGS |
| 0xCE5E | CE5E LDM: Botschaft (Kilometerstand / Reichweite, 330) fehlerhaft, Sender KOMBI |
| 0xCE5F | CE5F LDM: Botschaft (Klemmenstatus, 130) fehlerhaft, Sender CAS |
| 0xCE60 | CE60 LDM: Botschaft (Lenkradwinkel PT-CAN, C4) fehlerhaft, Sender DSC |
| 0xCE61 | CE61 LDM: Botschaft (Anforderung Radmoment Antriebsstrang, BF) fehlerhaft, Sender DSC, LDM |
| 0xCE62 | CE62 LDM: Botschaft (Raddrücke PT-CAN, 2B2) fehlerhaft, Sender DSC |
| 0xCE63 | CE63 LDM: Botschaft (Radgeschwindigkeit PT-CAN, CE) fehlerhaft, Sender DSC |
| 0xCE64 | CE64 LDM: Botschaft (Radmoment Antriebsstrang 1, B4) fehlerhaft, Sender DME / DDE |
| 0xCE65 | CE65 LDM: Botschaft (Radmoment Antriebsstrang 2, AC) fehlerhaft, Sender DME / DDE |
| 0xCE66 | CE66 LDM: Botschaft (Radmoment Bremse, E1) fehlerhaft, Sender DSC |
| 0xCE67 | CE67 LDM: Botschaft (Radtoleranzabgleich, 374) fehlerhaft, Sender DSC |
| 0xCE68 | CE68 LDM: Botschaft (Status Fahrererkennung, 2F1) fehlerhaft, Sender ACSM |
| 0xCE69 | CE69 LDM: Botschaft (Beschleunigungsdaten, 2B3) fehlerhaft, Sender DSC |
| 0xCE6A | CE6A LDM: Botschaft (Status Anhänger, 2E4) fehlerhaft, Sender AHM |
| 0xCE6B | CE6B LDM: Botschaft (Status DSC PT-CAN, 19E) fehlerhaft, Sender DSC |
| 0xCE6C | CE6C LDM: Botschaft (Status Tuersensoren Abgesichert BN2000, 1E1) fehlerhaft, Sender FRM |
| 0xCE6F | CE6F LDM: Botschaft (Sollmomentanforderung, BB) fehlerhaft, Sender DSC |
| 0xCE70 | CE70 LDM: Botschaft (Status Kombi, 1B4) fehlerhaft, Sender KOMBI |
| 0xCE72 | CE72 LDM: Botschaft (Status EMF PT-CAN, 201) fehlerhaft, Sender EMF |
| 0xCE73 | CE73 LDM: Botschaft (Stellanforderung EMF, 1A7) fehlerhaft, Sender DSC |
| 0xCE80 | CE80 LDM: Botschaft (Motordaten, 1D0) fehlerhaft, Sender DME / DDE |
| 0xCE83 | CE83 LDM: Botschaft (Status Fahrlicht, 314) fehlerhaft, Sender FZD |
| 0xCE87 | CE87 AL: F-CAN Kommunikationsfehler |
| 0xCE8B | CE8B AL: PT-CAN Kommunikationsfehler |
| 0xCE8C | CE8C AL: Botschaft (Radbremsdruecke , ID=2B2) von PT-CAN |
| 0xCE8D | CE8D AL: Botschaft (Status MSA, 308 ) von PT-CAN |
| 0xCE91 | CE91 AL: Botschaft (Sensorcluster) von F-CAN |
| 0xCE92 | CE92 AL: Botschaft (Sensorcluster 3, 0F4) von F-CAN |
| 0xCE94 | CE94 AL: Botschaft (Sensorcluster 1, 0D8) von F-CAN |
| 0xCE95 | CE95 AL: Botschaft (Sensorcluster 2, 0E3) von F-CAN |
| 0xCE96 | CE96 AL: Botschaft (Radgeschwindigkeiten, 0CE) von DSC F-CAN |
| 0xCE97 | CE97 AL: Botschaft (Sensorcluster Status, 165) von F-CAN |
| 0xCE98 | CE98 AL: Botschaft (Regeleingriffe DSC, 11E) von DSC F-CAN |
| 0xCE99 | CE99 AL: Botschaft (Lenkradwinkel oben, 0C9) von SZL F-CAN |
| 0xCE9A | CE9A AL: Botschaft (Anhängerdaten, 2E4) von PT-CAN |
| 0xCE9B | CE9B AL: Botschaft (Status DXC Kupplung, BC) von PT-CAN |
| 0xCE9C | CE9C AL: Botschaft (Status DSC, 19E) von DSC PT-CAN |
| 0xCE9D | CE9D AL: Botschaft (Motormoment 1, 0A8) von DME PT-CAN |
| 0xCE9E | CE9E AL: Botschaft (Motormoment 3, 0AA) von DME PT-CAN |
| 0xCE9F | CE9F AL: Botschaft (Motordaten, 1D0) von DME PT-CAN |
| 0xCEA0 | CEA0 AL: Botschaft (Getriebedaten 1, BA) von EGS PT-CAN |
| 0xCEA1 | CEA1 AL: Botschaft (Klemmenstatus, 130) von CAS PT-CAN |
| 0xCEA2 | CEA2 AL: Botschaft (Status ARS, 1AC) von ARS PT-CAN |
| 0xCEA3 | CEA3 AL: Botschaft (Kilometerstand, 330) von KOMBI PT-CAN |
| 0xCEC7 | CEC7 EKPS: PT-CAN Kommunikationsfehler |
| 0xCED4 | CED4 EKPS: Botschaft von Motorsteuerung (0xAA) fehlt |
| 0xCF07 | CF07 EGS: Kommunikationsfehler: PT-CAN |
| 0xCF25 | CF25 EGS: Botschaft vom SSFA: Sitzbelegung Gurtkontakte |
| 0xCF27 | CF27 EGS: Botschaft vom SZL: Bedienung Getriebewahlschalter |
| 0xCF29 | CF29 EGS: Botschaft vom AHM: Status Anhänger |
| 0xCF2B | CF2B EGS: Botschaft vom Längsdynamikmanagement fehlt |
| 0xCF30 | CF30 EGS: Botschaft (CAN) vom GWS |
| 0xCF33 | CF33 EGS: Botschaft von der Motorsteuerung fehlt |
| 0xCF34 | CF34 EGS: Botschaft von der DSC |
| 0xCF35 | CF35 EGS: Botschaften vom CAS |
| 0xCF4B | CF4B VTG: PT-CAN Kommunikationsfehler |
| 0xCF54 | CF54 VTG: Botschaft (Sollmoment, BB) |
| 0xCF55 | CF55 VTG: Botschaft (Motormoment, AA) |
| 0xCF56 | CF56 VTG: Botschaft (Geschwindigkeit Rad, CE) |
| 0xCF57 | CF57 VTG: Botschaft (Geschwindigkeit, 1A0) |
| 0xCF58 | CF58 VTG: Botschaft (Klemmenstatus, 130) |
| 0xCF59 | CF59 VTG: Botschaft (Motormoment 1, A8) |
| 0xCF5A | CF5A VTG: Botschaft (Kilometerstand, 330) |
| 0xCF5B | CF5B VTG: Botschaft (Aussentemperatur Relativzeit, 310) |
| 0xCF5D | CF5D VTG: Botschaft (Status DSC, 19E) |
| 0xCF5E | CF5E VTG: Botschaft (Getriebedaten, BA) |
| 0xCF5F | CF5F VTG: Botschaft (Getriebedaten 2, 1A2) |
| 0xCF60 | CF60 VTG: Botschaft (Lenkradwinkel, C4) |
| 0xD010 | D010 ICM: Botschaft (SZL, 0C9) fehlerhaft |
| 0xD011 | D011 ICM: Botschaft (EHB, 0CE) fehlerhaft |
| 0xD012 | D012 ICM: Botschaft (DSC, 0D8) fehlerhaft |
| 0xD013 | D013 ICM: Botschaft (DSC, 0E3) fehlerhaft |
| 0xD014 | D014 ICM: Botschaft (DSC, 0F4) fehlerhaft |
| 0xD015 | D015 ICM: Botschaft (DSC, 11E) fehlerhaft |
| 0xD016 | D016 ICM: Botschaft (DSC, 12D) fehlerhaft |
| 0xD017 | D017 ICM: F-CAN Botschaft (CAS, 130) fehlerhaft |
| 0xD018 | D018 ICM: Botschaft (DSC, 165) fehlerhaft |
| 0xD019 | D019 ICM: Botschaft (Airbag, 12A) fehlerhaft |
| 0xD020 | D020 ICM: Botschaft (Motorsteuerung, 0A8) fehlerhaft |
| 0xD021 | D021 ICM: Botschaft (Motorsteuerung, 0AA) fehlerhaft |
| 0xD022 | D022 ICM: Botschaft (Getriebesteuerung, 0BA) fehlerhaft |
| 0xD023 | D023 ICM: Botschaft (VTG, 0BC) fehlerhaft |
| 0xD024 | D024 ICM: Botschaft (CAS, 130) fehlerhaft |
| 0xD025 | D025 ICM: Botschaft (DSC, 19E) fehlerhaft |
| 0xD026 | D026 ICM: Botschaft (ARS, 1AC) fehlerhaft |
| 0xD027 | D027 ICM: Botschaft (Motorsteuerung, 1D0) fehlerhaft |
| 0xD028 | D028 ICM: Botschaft (DSC, 2B2) fehlerhaft |
| 0xD029 | D029 ICM: Botschaft (AHM, 2E4) fehlerhaft |
| 0xD02A | D02A ICM: Botschaft (Kombi, 330) fehlerhaft |
| 0xD02B | D02B ICM: Botschaft (CAS, 380) fehlerhaft |
| 0xD047 | D047 TFE: CAN -Bus-Kommunikationsfehler |
| 0xD054 | D054 TFE: Botschaft von DME fehlt |
| 0xD104 | D104 RDC: K-CAN Leitungsfehler |
| 0xD107 | D107 RDC: K-CAN Kommunikationsfehler |
| 0xD13E | D13E RDC: Fehler Botschaft vom Steuergerät |
| 0xD1C7 | D1C7 ARS: PT-CAN Kommunikationsfehler |
| 0xD1C8 | D1C8 ARS: F-CAN Kommunikationsfehler |
| 0xD284 | D284 RSE: K-CAN Leitungsfehler |
| 0xD287 | D287 RSE: K-CAN Kommunikationsfehler |
| 0xD2C4 | D2C4 CA: K-CAN Leitungsfehler |
| 0xD2C7 | D2C7 CA: K-CAN Kommunikationsfehler |
| 0xD347 | D347 DSC: PT-CAN Kommunikationsfehler |
| 0xD34B | D34B DSC: F-CAN Kommunikationsfehler |
| 0xD34C | D34C DSC: PT-CAN passiv |
| 0xD34D | D34D DSC: F-CAN passiv |
| 0xD354 | D354 DSC: Botschaft (Drehmoment 0A8) fehlt |
| 0xD355 | D355 DSC: Botschaft (Drehmoment 0A9) fehlt |
| 0xD356 | D356 DSC: Botschaft (Drehmoment 0AA) fehlt |
| 0xD358 | D358 DSC: Botschaft (Getriebe 0BA) fehlt |
| 0xD359 | D359 DSC: F-CAN Botschaft (SZL 0C8) fehlt |
| 0xD35A | D35A DSC: Botschaft (Klemmenstatus 130) fehlt |
| 0xD35C | D35C DSC: Botschaft (Kombi 1B4) fehlt |
| 0xD35D | D35D DSC: Botschaft (AFS 1FC) fehlt |
| 0xD35E | D35E DSC: Botschaft (Temperatur 310) fehlt |
| 0xD35F | D35F DSC: Botschaft (ARS 1AC) fehlt |
| 0xD360 | D360 DSC: Botschaft (Kilometerstand 330) fehlt |
| 0xD361 | D361 DSC: Botschaft (VIN 380) fehlt |
| 0xD362 | D362 DSC: Botschaft (Typ 388) fehlt |
| 0xD363 | D363 DSC: Botschaft (398) fehlt |
| 0xD365 | D365 DSC: Botschaft (Kombi; 5E0) fehlt |
| 0xD367 | D367 DSC: F-CAN Botschaft (AL, 118) fehlt |
| 0xD368 | D368 DSC: F-CAN Botschaft (LWS Lenkgetriebe, C3) fehlt |
| 0xD36A | D36A DSC: Botschaft (VTG, BC) fehlt |
| 0xD36B | D36B DSC: Botschaft (VTG, 376) fehlt |
| 0xD374 | D374 DSC: Botschaft (FRM, 3B0) fehlt |
| 0xD37D | D37D DSC: Botschaft (FZD/RLS, 226) fehlt |
| 0xD37F | D37F DSC: Botschaft (IHKA, 316) fehlt |
| 0xD380 | D380 DSC: Botschaft (IHKA, 31A) fehlt |
| 0xD381 | D381 DSC: Botschaft (Instrumentenkombination, 319) fehlt |
| 0xD387 | D387 EMF: PT CAN Kommunikationsfehler |
| 0xD394 | D394 EMF: Botschaft vom Steuergerät DSC fehlt |
| 0xD395 | D395 EMF: Botschaft vom Steuergerät EGS fehlt |
| 0xD397 | D397 EMF: Botschaft (Klemme 30G) fehlt |
| 0xD398 | D398 EMF: Botschaft vom Steuergerät DSC fehlt |
| 0xD399 | D399 EMF: Botschaft vom Steuergerät DSC fehlt |
| 0xD39A | D39A EMF: Botschaft vom Steuergerät Junction-Box fehlt |
| 0xD507 | D507 EPS: PT-CAN Kommunikationsfehler |
| 0xD514 | D514 EPS: Botschaft (Motordaten, ID=1D0h) fehlt, Empfänger EPS (PT-CAN) |
| 0xD515 | D515 EPS: Botschaft (Lenkradwinkel oben, ID=0C4h) fehlt, Empfänger EPS (PT-CAN) |
| 0xD516 | D516 EPS: Botschaft (Klemmenstatus, ID=130h) fehlt, Empfänger EPS (PT-CAN) |
| 0xD517 | D517 EPS: Botschaft (Geschwindigkeit, ID=1A0h) fehlt, Empfänger EPS (PT-CAN) |
| 0xD6C4 | D6C4 AMPH: K-CAN Leitungsfehler |
| 0xD6C7 | D6C7 AMPH: K-CAN Kommunikationsfehler |
| 0xD704 | D704 EHC: K-CAN Leitungsfehler |
| 0xD707 | D707 EHC: K-CAN Kommunikationsfehler |
| 0xD710 | D710 EHC: Botschaft (Status Zentralverriegelung, 2FC) |
| 0xD711 | D711 EHC: Botschaft (Motordaten, 1D0) |
| 0xD712 | D712 EHC: Botschaft (Geschwindigkeit, 1A0) |
| 0xD713 | D713 EHC: Botschaft (Klemmenstatus, 130) |
| 0xD747 | D747 VDM: PT-CAN Kommunikationsfehler |
| 0xD74B | D74B VDM: F-CAN Kommunikationsfehler |
| 0xD754 | D754 VDM: Botschaft (Kilometerstand/Reichweite, 330) |
| 0xD755 | D755 VDM: Botschaft (Außentemperatur/Relativzeit, 310) |
| 0xD756 | D756 VDM: Botschaft (Geschwindigkeit, 1A0) |
| 0xD757 | D757 VDM: Botschaft (Status DSC, 19E) |
| 0xD758 | D758 VDM: Botschaft (Taster Vertikaldynamik, 28C) |
| 0xD759 | D759 VDM: Botschaft (Motordaten, 1D0) |
| 0xD75A | D75A VDM: Botschaft (Klemmenstatus, 130) |
| 0xD75B | D75B VDM: Botschaft (Drehmoment 3, 0AA) |
| 0xD75C | D75C VDM: Botschaft (Getriebedaten, 0BA) |
| 0xD75D | D75D VDM: Botschaft (Status ARS-Modul, 1AC) |
| 0xD75E | D75E VDM: Botschaft (Status Funkschlüssel, 23A) |
| 0xD760 | D760 VDM: Botschaft (Lenkradwinkel oben 2, 0C9) |
| 0xD761 | D761 VDM: Botschaft (Querdynamik ARS VDM, 0F7) |
| 0xD762 | D762 VDM: Botschaft (Austausch AFS DSC, 118) |
| 0xD763 | D763 VDM: Botschaft (Lenkradwinkel oben, 0C8) |
| 0xD765 | D765 VDM: Botschaft (Status DSC-Sensor, 165) |
| 0xD766 | D766 VDM: Botschaft 1 (DSC-Sensor, 0D8) |
| 0xD767 | D767 VDM: Botschaft 2 (DSC-Sensor, 0E3) |
| 0xD76D | D76D VDM: Botschaft (Signal Wankwinkel, 12A) |
| 0xD844 | D844 HUD: K-CAN Leitungsfehler |
| 0xD847 | D847 HUD: K-CAN Kommunikationsfehler |
| 0xD904 | D904 CAS: K-CAN Leitungsfehler |
| 0xD907 | D907 CAS: K-CAN Kommunikationsfehler |
| 0xDB04 | DB04 VS: K-CAN Leitungsfehler |
| 0xDB07 | DB07 VS: K-CAN Kommunikationsfehler |
| 0xDCC4 | DCC4 EKK: K-CAN Kommunikationsfehler |
| 0xDCC6 | DCC6 EKK: Botschaft (Aussentemperatur/Referenzzeit, 310): fehlt, Empfänger EKK (PT-CAN), Sender Kombi (K-CAN) |
| 0xDCC7 | DCC7 EKK: Botschaft (Freigabe Elektrischer Klimakompressor, 29C): fehlt, Empfänger EKK (PT-CAN), Sender HIM (PT-CAN) |
| 0xDCC8 | DCC8 EKK: Botschaft (Kilometerstand, 330): fehlt, Empfänger EKK (PT-CAN), Sender CAS (K-CAN) |
| 0xDCC9 | DCC9 EKK: Botschaft (Klemmenstatus, 130): fehlt, Empfänger EKK (PT-CAN), Sender CAS (K-CAN) |
| 0xDCCA | DCCA EKK: Botschaft (Status Druck Kältekreislauf, 2D2): fehlt, Empfänger EKK (PT-CAN), Sender JBBF (K-CAN) |
| 0xDCCC | DCCC EKK: Botschaft (Steuerung Klimakompressor Elektrisch, 29D): fehlt, Empfänger EKK (PT-KAN), Sender IHKA (K-CAN) |
| 0xDCCD | DCCD EKK: Botschaft (Status Hochvoltbatterie, 2B7): fehlt, Empfänger EKK (PT-CAN), Sender HIM (PT-CAN) |
| 0xDE84 | DE84 FZD: K-CAN Leitungsfehler |
| 0xDE87 | DE87 FZD: K-CAN Kommunikationsfehler |
| 0xE047 | E047 KAFAS: PT-CAN Kommunikationsfehler |
| 0xE054 | E054 KAFAS: Botschaftsfehler(130h, Klemmenstatus) |
| 0xE055 | E055 KAFAS: Botschaftsfehler(19Eh, Status DSC)) |
| 0xE056 | E056 KAFAS: Botschaftsfehler(1A0h, Geschwindigkeit) |
| 0xE057 | E057 KAFAS: Botschaftsfehler(1B4h, Status Kombi) |
| 0xE058 | E058 KAFAS: Botschaftsfehler(1D6h, Bedienung Taster Audio/Telefon) |
| 0xE059 | E059 KAFAS: Botschaftsfehler(1EEh,Bedienung Lenkstock) |
| 0xE05A | E05A KAFAS: Botschaftsfehler(1F6h, Blinken) |
| 0xE05B | E05B KAFAS: Botschaftsfehler (C8h, Lenkradwinkel oben) |
| 0xE05C | E05C KAFAS: Botschaftsfehler(21Ah, Lampenzustand) |
| 0xE05D | E05D KAFAS: Botschaftsfehler(226h,Regensensor Wischergeschwindigkeit) |
| 0xE05E | E05E KAFAS: Botschaftsfehler(252h, Wischerstatus) |
| 0xE05F | E05F KAFAS: Botschaftsfehler(278h, Navigationsgraph) |
| 0xE060 | E060 KAFAS: Botschaftsfehler(27Ah, Synchronisation Navigationsgraph) |
| 0xE061 | E061 KAFAS: Botschaftsfehler(2A6h, Bedienung Wischertaster) |
| 0xE062 | E062 KAFAS: Botschaftsfehler(2E4h,Status Anhaenger) |
| 0xE063 | E063 KAFAS: Botschaftsfehler(2F8h, Uhrzeit / Datum) |
| 0xE064 | E064 KAFAS: Botschaftsfehler(310h, Aussentemperatur / Relativzeit) |
| 0xE065 | E065 KAFAS: Botschaftsfehler(314h, Status Fahrlicht) |
| 0xE066 | E066 KAFAS: Botschaftsfehler(330h, Kilometerstand / Reichweite) |
| 0xE067 | E067 KAFAS: Botschaftsfehler(347h, Status Koordination Vibration Lenkrad) |
| 0xE068 | E068 KAFAS: Botschaftsfehler(348h, Uebereinstimmung Navigationsgraph) |
| 0xE069 | E069 KAFAS: Botschaftsfehler(34Ch, Navigation GPS2) |
| 0xE06A | E06A KAFAS: Botschaftsfehler(34Eh, Navigation System Information) |
| 0xE06B | E06B KAFAS: Botschaftsfehler(380h, Fahrgestellnummer) |
| 0xE06C | E06C KAFAS: Botschaftsfehler(36Ah, Status Fernlicht Assistenz) |
| 0xE06D | E06D KAFAS: Botschaftsfehler(3B0h, Status Gang Rueckwaerts) |
| 0xE06E | E06E KAFAS: Botschaftsfehler(3CCh, Navigationsgraph Geschwindigkeit) |
| 0xE06F | E06F KAFAS: Botschaftsfehler(3F7h, Navigationsgraph Fahrspur) |
| 0xE070 | E070 KAFAS: Botschaftsfehler(1A3h, Rohdaten Laengsbeschleunigung) |
| 0xE087 | E087 GWS: PT-CAN Kommunikationsfehler |
| 0xE094 | E094 GWS: Botschaft von der EGS fehlt: Anzeige Getriebedaten PT-CAN |
| 0xE096 | E096 GWS: Botschaft (Klemmenstatus, 130) |
| 0xE097 | E097 GWS: Botschaft (Dimmung, 202) |
| 0xE098 | E098 GWS: Botschaft (LCD-Leuchtdichte, 2C0) |
| 0xE099 | E099 GWS: Botschaft (Status-Dämpferprogramm, 326) |
| 0xE0C4 | E0C4 FLA: K-CAN: Leitungsfehler |
| 0xE0C7 | E0C7 FLA: K-CAN: Kommunikationsfehler |
| 0xE0D4 | E0D4 FLA: Botschaft (Außentemperatur, 0x2CA) fehlerhaft |
| 0xE0D5 | E0D5 FLA: Botschaft (Bedienung Lenkstocktaster, 0x1EE) fehlerhaft |
| 0xE0D6 | E0D6 FLA: Botschaft (Geschwindigkeit, 0x1A0) fehlerhaft |
| 0xE0D7 | E0D7 FLA: Botschaft (Kilometerstand / Reichweite, 0x330) fehlerhaft |
| 0xE0D8 | E0D8 FLA: Botschaft (Lampenzustand, 0x21A) fehlerhaft |
| 0xE0D9 | E0D9 FLA: Botschaft (Lenkradwinkel, 0xC4) fehlerhaft |
| 0xE0DA | E0DA FLA: Botschaft (RLS / Wischergeschwindigkeit, 0x226) fehlerhaft |
| 0xE0DB | E0DB FLA: Botschaft (Status Gang, 0x304) fehlerhaft |
| 0xE104 | E104 KOMBI: K-CAN Leitungsfehler |
| 0xE107 | E107 KOMBI: K-CAN Kommunikationsfehler |
| 0xE184 | E184 CD / M-ASK / CCC / RAD2 / CHAMP -GW: K-CAN Leitungsfehler |
| 0xE187 | E187 CD / M-ASK / CCC / RAD2 / CHAMP -GW: K-CAN Kommunikationsfehler |
| 0xE188 | E188 M-ASK-GW: K-CAN Leitungsfehler |
| 0xE204 | E204 PDC: K-CAN-Low Leitungsfehler |
| 0xE205 | E205 PDC: K-CAN-High Leitungsfehler |
| 0xE206 | E206 PDC: K-CAN Massefehler |
| 0xE207 | E207 PDC: CAN: Kommunikationsfehler |
| 0xE214 | E214 PDC: Botschaft (Klemmenstatus, 130) fehlerhaft |
| 0xE215 | E215 PDC: Botschaft (Bedienung Taster PDC, 317) fehlerhaft |
| 0xE216 | E216 PDC: Botschaft (Kilometerstand/Reichweite, 330) fehlerhaft |
| 0xE217 | E217 PDC: Botschaft (Außentemperatur/Relativzeit, 310) fehlerhaft |
| 0xE218 | E218 PDC: Botschaft (Status Qualifier Top-View, 379) fehlt |
| 0xE219 | E219 PDC: Botschaft (Status Qualifier Rear-View, 37A) fehlt |
| 0xE21A | E21A PDC: Botschaft (Getriebedaten, BA) fehlerhaft |
| 0xE21B | E21B PDC: Botschaft (Status Rückwärtsgang, 3B0) fehlerhaft |
| 0xE21C | E21C PDC: Botschaft (Wegstrecke, 1A6) fehlerhaft |
| 0xE21D | E21D PDC: Botschaft (Status Anhänger, 2E4) fehlerhaft |
| 0xE21E | E21E PDC: Botschaft (Geschwindigkeit, 1A0) fehlerhaft |
| 0xE2C4 | E2C4 CON: K-CAN Leitungsfehler |
| 0xE2C7 | E2C7 CON: K-CAN Kommunikationsfehler |
| 0xE2D4 | E2D4 CON: Botschaft (Klemmenstatus, 130) fehlerhaft |
| 0xE2D5 | E2D5 CON: Botschaft (Dimmung, 202) fehlerhaft |
| 0xE2D6 | E2D6 CON: Botschaft (Kilometerstand, 330) fehlerhaft |
| 0xE2D7 | E2D7 CON: Botschaft (CIC, 273) fehlerhaft |
| 0xE3C4 | E3C4 HKL: K-CAN Leitungsfehler |
| 0xE444 | E444 SMFA: K-CAN Leitungsfehler |
| 0xE484 | E484 SMBF: K-CAN Leitungsfehler |
| 0xE487 | E487 SMBF: K-CAN Kommunikationsfehler |
| 0xE544 | E544 AHM: K-CAN Leitungsfehler |
| 0xE545 | E545 AHM: K-CAN Leitungsfehler |
| 0xE547 | E547 AHM: K-CAN Kommunikationsfehler |
| 0xE554 | E554 AHM: Botschaft (Blinken, 0x1F6): fehlt |
| 0xE555 | E555 AHM: Botschaft (Motordaten, 0x1D0): fehlt |
| 0xE556 | E556 AHM: Botschaft (Geschwindigkeit K-CAN, 0x1A0): fehlt |
| 0xE557 | E557 AHM: Botschaft (Kilometerstand/Reichweite, 0x330): fehlt |
| 0xE558 | E558 AHM: Botschaft (Klemmenstatus, 0x130): fehlt |
| 0xE559 | E559 AHM: Botschaft (Lampenzustand, 0x21A): fehlt |
| 0xE55A | E55A AHM: Botschaft (Nachlaufzeit Stromversorgung, 0x3BE): fehlt |
| 0xE55B | E55B AHM: Botschaft (Powermanagement Verbrauchersteuerung, 0x3B3): fehlt |
| 0xE55C | E55C AHM: Botschaft (Status DSC K-CAN, 0x19E): fehlt |
| 0xE55D | E55D AHM: Botschaft (Status Zentralverriegelung Heckklappe, 0x0F2): fehlt |
| 0xE584 | E584 FRM: FRM: K-CAN Leitungsfehler |
| 0xE587 | E587 FRM: FRM: K-CAN Kommunikationsfehler |
| 0xE594 | E594 FRM: FRM: Botschaft (Lenkwinkel) fehlt |
| 0xE595 | E595 FRM: FRM: Botschaft vom Anhängermodul fehlt |
| 0xE596 | E596 FRM: FRM: Botschaft vom FLA fehlt |
| 0xE597 | E597 FRM: FRM: Botschaft vom Steuergerät DSC fehlt |
| 0xE598 | E598 FRM: FRM: Botschaft (Fahrlicht) fehlt |
| 0xE599 | E599 FRM: FRM: 5999 Botschaft (Fahrzeuggeschwindigkeit) fehlt |
| 0xE59A | E59A FRM: FRM: Botschaft (Gierwinkelgeschwindigkeit) fehlt |
| 0xE59B | E59B FRM: FRM: Botschaft (Klemmenstatus) fehlt |
| 0xE59C | E59C FRM: FRM: Botschaft PT-CAN Lenkwinkel fehlt |
| 0xE5C4 | E5C4 CID: K-CAN Leitungsfehler |
| 0xE5C7 | E5C7 CID: K-CAN Kommunikationsfehler |
| 0xE5D6 | E5D6 CID: Botschaft (CRT Monitor, 0x2CE) fehlerhaft, Empfänger CID (K-CAN) |
| 0xE5D8 | E5D8 CID: Botschaft (Dimmung, 0x202) fehlerhaft, Empfänger CID (K-CAN) |
| 0xE5DA | E5DA CID: Botschaft (Leuchtdichte LCD, 0x2C0) fehlerhaft, Empfänger CID (K-CAN) |
| 0xE5DE | E5DE CID: Botschaft (Relativzeit, 0x328) fehlerhaft, Empfänger CID (K-CAN) |
| 0xE5DF | E5DF CID: Botschaft (Kilometerstand, 0x330) fehlerhaft, Empfänger CID (K-CAN) |
| 0xE5E0 | E5E0 CID: Botschaft (Klemmenstatus, 0x130) fehlerhaft, Empfänger CID (K-CAN) |
| 0xE604 | E604 FD: K-CAN Leitungsfehler |
| 0xE607 | E607 FD: K-CAN Kommunikationsfehler |
| 0xE6C4 | E6C4 RFK: K-CAN Leitungsfehler |
| 0xE6C7 | E6C7 RFK: K-CAN Kommunikationsfehler |
| 0xE704 | E704 IHKA: K-CAN Leitungsfehler |
| 0xE707 | E707 IHKA: K-CAN Kommunikationsfehler |
| 0xE714 | E714 IHKA: Botschaft (Batteriespannung, 3B4) fehlt |
| 0xE715 | E715 IHKA: Botschaft (Kilometerstand, 330) fehlt |
| 0xE716 | E716 IHKA: Botschaft (Verbrauchersteuerung, 3B3) fehlt |
| 0xE717 | E717 IHKA: Botschaft (Relativzeit, 328) fehlt |
| 0xE718 | E718 IHKA: Botschaft (Motorwärmestrom, 1B6) fehlt |
| 0xE719 | E719 IHKA: Botschaft (Motordaten, 1D0) fehlt |
| 0xE71A | E71A IHKA: Botschaft (Klemmenstatus, 130) fehlt |
| 0xE71B | E71B IHKA: Botschaft (Außentemperatur, 2CA) fehlt |
| 0xE71C | E71C IHKA: Botschaft (Geschwindigkeit, 1A0) fehlt |
| 0xE71D | E71D IHKA: Botschaft (Zusatzwasserpumpe, 2EC) fehlt |
| 0xE71E | E71E IHKA: Botschaft (Drehmoment, 0AA) fehlt |
| 0xE71F | E71F IHKA: Botschaft (Dimmung, 202) fehlt |
| 0xE720 | E720 IHKA: Botschaft (LCD-Leuchtdichte, 2C0) fehlt |
| 0xE721 | E721 IHKA: Botschaft (Ausfall HDC-Anzeige, 32D) fehlt |
| 0xE722 | E722 IHKA: Botschaft (Crash, 1FE) fehlt |
| 0xE723 | E723 IHKA: Botschaft (Beschlagsensor, 2D1) fehlt |
| 0xE724 | E724 IHKA: Botschaft (Beifahrersitz, 22A) fehlt |
| 0xE725 | E725 IHKA: Botschaft (Fahrersitz, 232) fehlt |
| 0xE726 | E726 IHKA: Botschaft (Fond-Heiz-Klimaanlage, 23E) fehlt |
| 0xE727 | E727 IHKA: Botschaft (PDC, 24A) fehlt |
| 0xE728 | E728 IHKA: Botschaft (Fondschichtung, 2D3) fehlt |
| 0xE729 | E729 IHKA: Botschaft (AUC-Sensor, 2D0) fehlt |
| 0xE72A | E72A IHKA: Botschaft (Druck im Kältemittelkreislauf, 2D2) fehlt |
| 0xE72B | E72B IHKA: Botschaft (Solarsensor, 3D3) fehlt |
| 0xE72C | E72C IHKA: Botschaft (Temperatur-Sollwert Fond, 3FA) fehlt |
| 0xE72D | E72D IHKA: Botschaft (Regelventil im Klimakompressor, 2D6) fehlt |
| 0xE72E | E72E IHKA: Botschaft (Zusatzwasserpumpe, 2CF) fehlt |
| 0xE72F | E72F IHKA: Botschaft (Temperatur-Istwert Fond, 2C2) fehlt |
| 0xE744 | E744 FKA: K-CAN Leitungsfehler |
| 0xE747 | E747 FKA: K-CAN Kommunikationsfehler |
| 0xE754 | E754 FKA: Botschaft (Powermanagement Batteriespannung, 3B4) fehlt |
| 0xE755 | E755 FKA: Botschaft (Kilometerstand/Reichweite, 330) fehlt |
| 0xE756 | E756 FKA: Botschaft (Powermanagement Verbrauchersteuerung, 3B3) fehlt |
| 0xE757 | E757 FKA: Botschaft (Status Klima Front, 242) fehlt |
| 0xE758 | E758 FKA: Botschaft (Relativzeit, 328) fehlt |
| 0xE759 | E759 FKA: Botschaft (Steuerung Klima Fond , 3F8) fehlt |
| 0xE75A | E75A FKA: Botschaft (Motordaten, 1D0) fehlt |
| 0xE75B | E75B FKA: Botschaft (Status Klima Luftverteilung Fahrerseite, 2E6) fehlt |
| 0xE75C | E75C FKA: Botschaft (Klemmenstatus, 130) fehlt |
| 0xE75D | E75D FKA: Botschaft (Außentemperatur, 2CA) fehlt |
| 0xE75E | E75E FKA: Botschaft (Dimmung, 202) fehlt |
| 0xE75F | E75F FKA: Botschaft (LCD-Leuchtdichte, 2C0) fehlt |

### FCMATRIX

| NUMMER | ORT | ADR | STGR | VONSTGR | NICHTORT | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 51 | 2 |  |  |  | 0xEA | 0xE9 | 0xE7 | 0x01 | 0x16 | 0x71 | 0x37 | 0x23 | 0x27 | 0x40 | 0x62 | 0x73 | 0x12 | 0x29 | 0x18 | 0x4F | 0x17 | 0x38 | 0x2A | 0x74 | 0x5F | 0x79 | 0x72 | 0x56 | 0x5E | 0x09 | 0x3D | 0x1C | 0x78 | 0x00 | 0x60 | 0x15 | 0x64 | 0x20 | 0x77 | 0x26 | 0x0F | 0xE0 | 0x0A | 0x6E | 0x6D | 0xE2 | 0x1D | 0x39 | 0x19 | 0x67 | 0x48 | 0x6B | 0x06 | 0x5D | 0x30 |
| 1 | 0x2AD0 | 0x12 | DME | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 2 | 0x2DC8 | 0x12 | DME | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 3 | 0x2DC9 | 0x12 | DME | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 4 | 0x2DCA | 0x12 | DME | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 5 | 0x2DCB | 0x12 | DME | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 6 | 0x2DCC | 0x12 | DME | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 7 | 0x2DCD | 0x12 | DME | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 8 | 0x2DCE | 0x12 | DME | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 9 | 0x2DCF | 0x12 | DME | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 10 | 0x2DD0 | 0x12 | DME | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 11 | 0x2DD1 | 0x12 | DME | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 12 | 0x2DD2 | 0x12 | DME | SZL_LWS | 0x0000 | 14 | 14 | 14 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | 14 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | 14 | -23 | -23 | -23 | -23 | -23 | -23 | 14 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | 14 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 |
| 13 | 0x2DD3 | 0x12 | DME | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 14 | 0x2DD7 | 0x12 | DME | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 15 | 0x2DD9 | 0x12 | DME | ARS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 16 | 0x2DDA | 0x12 | DME | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 17 | 0x2DDB | 0x12 | DME | IHKA | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 18 | 0x2DDC | 0x12 | DME | SZL_LWS | 0x0000 | 14 | 14 | 14 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | 14 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | 14 | -23 | -23 | -23 | -23 | -23 | -23 | 14 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | 14 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 |
| 19 | 0x2DE0 | 0x12 | DME | EKP | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 20 | 0x2DE3 | 0x12 | DME | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 21 | 0x2E41 | 0x12 | DDE | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 22 | 0x2E46 | 0x12 | DDE | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 23 | 0x2E47 | 0x12 | DDE | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 24 | 0x2E7F | 0x12 | DME | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 25 | 0x2F50 | 0x12 | DME | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 26 | 0x3166 | 0x12 | DME | ACSM | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 27 | 0x3167 | 0x12 | DME | ACSM | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 28 | 0x316A | 0x12 | DME | TFE | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 29 | 0x316D | 0x12 | DME | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 30 | 0x3179 | 0x12 | DME | DSC | 0x0000 | 25 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 31 | 0x317A | 0x12 | DME | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 32 | 0x317B | 0x12 | DME | FRM | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 33 | 0x3BC5 | 0x12 | DME | ARS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 34 | 0x3BC7 | 0x12 | DME | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 35 | 0x3BCC | 0x12 | DME | IHKA | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 36 | 0x3BCE | 0x12 | DME | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 37 | 0x3BD1 | 0x12 | DME | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 38 | 0x3BD2 | 0x12 | DME | DSC | 0x0000 | 25 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 39 | 0x3BD4 | 0x12 | DME | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 40 | 0x3BD5 | 0x12 | DME | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 41 | 0x3BD7 | 0x12 | DME | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 42 | 0x3BD8 | 0x12 | DME | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 43 | 0x3BDD | 0x12 | DME | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 44 | 0x3BE1 | 0x12 | DME | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 45 | 0x3BED | 0x12 | DME | SZL_LWS | 0x0000 | 14 | 14 | 14 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | 14 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | 14 | -23 | -23 | -23 | -23 | -23 | -23 | 14 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | 14 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 |
| 46 | 0x412F | 0x12 | DDE | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 47 | 0x41A6 | 0x12 | DDE | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 48 | 0x41A8 | 0x12 | DDE | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 49 | 0x430F | 0x12 | DDE | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 50 | 0x4325 | 0x12 | DDE | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 51 | 0x4326 | 0x12 | DDE | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 52 | 0x4328 | 0x12 | DDE | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 53 | 0x438A | 0x12 | DDE | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 54 | 0x438B | 0x12 | DDE | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 55 | 0x438D | 0x12 | DDE | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 56 | 0x4445 | 0x12 | DDE | AFS | 0x0000 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 57 | 0x4446 | 0x12 | DDE | AFS | 0x0000 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 58 | 0x4448 | 0x12 | DDE | AFS | 0x0000 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 59 | 0x4458 | 0x12 | DDE | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 60 | 0x453B | 0x12 | DDE | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 61 | 0x4568 | 0x12 | DDE | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 62 | 0x4578 | 0x12 | DDE | ACSM | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 63 | 0x4598 | 0x12 | DDE | CCC/MASK2/CHAMP | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 64 | 0x465B | 0x12 | DDE | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 65 | 0x47F8 | 0x12 | DDE | ACSM | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 66 | 0x4824 | 0x12 | DDE | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 67 | 0x4829 | 0x12 | DDE | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 68 | 0x482E | 0x12 | DDE | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 69 | 0x482F | 0x12 | DDE | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 70 | 0x4910 | 0x12 | DDE | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 71 | 0x4991 | 0x12 | DDE | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 72 | 0x4993 | 0x12 | DDE | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 73 | 0x49A3 | 0x12 | DDE | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 74 | 0x49A8 | 0x12 | DDE | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 75 | 0x49B8 | 0x12 | DDE | EKP | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 76 | 0x49F3 | 0x12 | DDE | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 77 | 0x4A98 | 0x12 | DDE | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 78 | 0x4AA8 | 0x12 | DDE | AHM | 0x0000 | 20 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 79 | 0x4AB8 | 0x12 | DDE | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 80 | 0x4B12 | 0x12 | DDE | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 81 | 0x4B13 | 0x12 | DDE | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 82 | 0x4B4A | 0x12 | DDE | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 83 | 0x4B4B | 0x12 | DDE | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 84 | 0x4B4D | 0x12 | DDE | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 85 | 0x4BE3 | 0x12 | DDE | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 86 | 0x4BE8 | 0x12 | DDE | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 87 | 0x4BF3 | 0x12 | DDE | IHKA | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 88 | 0x4BF8 | 0x12 | DDE | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 89 | 0x4C06 | 0x12 | DDE | ARS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 90 | 0x4C08 | 0x12 | DDE | ARS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 91 | 0x4C13 | 0x12 | DDE | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 92 | 0x4C15 | 0x12 | DDE | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 93 | 0x4C16 | 0x12 | DDE | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 94 | 0x4C17 | 0x12 | DDE | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 95 | 0x4C18 | 0x12 | DDE | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 96 | 0x4C20 | 0x12 | DDE | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 97 | 0x4C21 | 0x12 | DDE | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 98 | 0x4C23 | 0x12 | DDE | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 99 | 0x4C28 | 0x12 | DDE | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 100 | 0x4C3C | 0x12 | DDE | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 101 | 0x4C3D | 0x12 | DDE | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 102 | 0x4C97 | 0x12 | DDE | ACSM | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 103 | 0x4C98 | 0x12 | DDE | ACSM | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 104 | 0x4C9B | 0x12 | DDE | ACSM | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 105 | 0x4C9C | 0x12 | DDE | ACSM | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 106 | 0x4D2A | 0x12 | DDE | EMF | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 107 | 0x4D2B | 0x12 | DDE | EMF | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 108 | 0x4D2D | 0x12 | DDE | EMF | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 109 | 0x4D3A | 0x12 | DDE | EMF | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 110 | 0x4D3B | 0x12 | DDE | EMF | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 111 | 0x4D3D | 0x12 | DDE | EMF | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 112 | 0x4DDD | 0x12 | DDE | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 113 | 0x4DF0 | 0x12 | DDE | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 114 | 0x4DF1 | 0x12 | DDE | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 115 | 0x4DF3 | 0x12 | DDE | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 116 | 0x55C4 | 0x19 | VTG | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 |
| 117 | 0x55C5 | 0x19 | VTG | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 |
| 118 | 0x55C6 | 0x19 | VTG | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 |
| 119 | 0x55C7 | 0x19 | VTG | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 |
| 120 | 0x55C8 | 0x19 | VTG | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 |
| 121 | 0x55C9 | 0x19 | VTG | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 |
| 122 | 0x55CA | 0x19 | VTG | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 |
| 123 | 0x55CB | 0x19 | VTG | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 |
| 124 | 0x55CD | 0x19 | VTG | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 |
| 125 | 0x55CE | 0x19 | VTG | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 |
| 126 | 0x55CF | 0x19 | VTG | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 |
| 127 | 0x55D0 | 0x19 | VTG | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 |
| 128 | 0x5E8C | 0x29 | DSC | AHM | 0x0000 | 20 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 129 | 0x5F25 | 0x29 | DSC | ARS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 130 | 0x5F26 | 0x29 | DSC | ARS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 131 | 0x5F2E | 0x29 | DSC | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 132 | 0x5F34 | 0x29 | DSC | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 133 | 0x5F35 | 0x29 | DSC | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 134 | 0x5F36 | 0x29 | DSC | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 135 | 0x5F5C | 0x29 | DSC | AHM | 0x0000 | 20 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 136 | 0x6DD0 | 0x29 | DSC | EHC | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 137 | 0x6DE8 | 0x29 | DSC | AFS | 0x0000 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 138 | 0x6E00 | 0x29 | DSC | AFS | 0x0000 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 139 | 0x6E1D | 0x29 | DSC | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 140 | 0x6E1E | 0x29 | DSC | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 141 | 0x6E1F | 0x29 | DSC | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 142 | 0x6E20 | 0x29 | DSC | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 143 | 0x6EAD | 0x29 | DSC | SBA | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 144 | 0x6F4B | 0x29 | DSC | LDM_L4 | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 145 | 0x6F4E | 0x29 | DSC | EMF | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 146 | 0x6F4F | 0x29 | DSC | EMF | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 147 | 0x6F50 | 0x29 | DSC | ACSM | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 148 | 0x6F51 | 0x29 | DSC | EHC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 149 | 0x6F52 | 0x29 | DSC | SZL_LWS | 0x0000 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 150 | 0x6F53 | 0x29 | DSC | AFS | 0x0000 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 151 | 0x6F54 | 0x29 | DSC | AFS | 0x0000 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 152 | 0x6F56 | 0x29 | DSC | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 153 | 0x6F57 | 0x29 | DSC | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 154 | 0x6F60 | 0x29 | DSC | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 155 | 0x6F62 | 0x29 | DSC | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 156 | 0x6F63 | 0x29 | DSC | RDC | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 157 | 0x6F64 | 0x29 | DSC | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 158 | 0x6F65 | 0x29 | DSC | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 159 | 0x6F78 | 0x29 | DSC | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 160 | 0x6F7A | 0x29 | DSC | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 161 | 0x6F7C | 0x29 | DSC | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 162 | 0x6F7E | 0x29 | DSC | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 163 | 0x6F80 | 0x29 | DSC | SBA | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 164 | 0x6F82 | 0x29 | DSC | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 165 | 0x6F83 | 0x29 | DSC | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 166 | 0x6F84 | 0x29 | DSC | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 167 | 0x6F86 | 0x29 | DSC | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 168 | 0x6F88 | 0x29 | DSC | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 169 | 0x6F8A | 0x29 | DSC | ACSM | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 170 | 0x6F8C | 0x29 | DSC | FRM | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 171 | 0x6F8E | 0x29 | DSC | HIM | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 172 | 0x93C6 | 0x01 | ACSM | SMFA | 0x0000 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 173 | 0x93C7 | 0x01 | ACSM | SMBF | 0x0000 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 174 | 0x93FB | 0x01 | ACSM | DSC | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 175 | 0x940D | 0x01 | ACSM | KOMBI | 0x0000 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 176 | 0x9414 | 0x01 | ACSM | DSC | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 177 | 0x9415 | 0x01 | ACSM | DSC | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 178 | 0xA173 | 0x62 | CCC/MASK2/CHAMP | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 179 | 0xA3A8 | 0x60 | KOMBI | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 180 | 0xA3AA | 0x60 | KOMBI | EGS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 181 | 0xA3AB | 0x60 | KOMBI | DSC | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 182 | 0xA3AC | 0x60 | KOMBI | DSC | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 183 | 0xA3AD | 0x60 | KOMBI | DME | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 184 | 0xA3AE | 0x60 | KOMBI | DME | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 185 | 0xA3AF | 0x60 | KOMBI | DSC | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 186 | 0xA3B0 | 0x60 | KOMBI | FRM | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 187 | 0xA3B1 | 0x60 | KOMBI | FRM | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 188 | 0xA3B2 | 0x60 | KOMBI | CAS | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 189 | 0xA3B3 | 0x60 | KOMBI | ARS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 190 | 0xA3B4 | 0x60 | KOMBI | FRM | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 191 | 0xA3B6 | 0x60 | KOMBI | CAS | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 192 | 0xA3B8 | 0x60 | KOMBI | VDM | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 193 | 0xA3B9 | 0x60 | KOMBI | DSC | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 194 | 0xA3BB | 0x60 | KOMBI | CAS | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 195 | 0xA3BC | 0x60 | KOMBI | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 196 | 0xA3BD | 0x60 | KOMBI | JBE | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 197 | 0xA3BE | 0x60 | KOMBI | CAS | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 198 | 0xA3C0 | 0x60 | KOMBI | AHM | 0x0000 | -21 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 199 | 0xA3C1 | 0x60 | KOMBI | FRM | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 200 | 0xA3C3 | 0x60 | KOMBI | RDC | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 201 | 0xA3C6 | 0x60 | KOMBI | EGS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 202 | 0xA3C7 | 0x60 | KOMBI | EHC | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 203 | 0xA4F2 | 0x3D | HUD | CAS | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 204 | 0xA4F3 | 0x3D | HUD | DSC | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 205 | 0xA4F4 | 0x3D | HUD | DSC | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 206 | 0xA4F5 | 0x3D | HUD | KOMBI | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 207 | 0xA4F7 | 0x3D | HUD | KOMBI | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 208 | 0xA4F8 | 0x3D | HUD | FRM | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 209 | 0xA4FA | 0x3D | HUD | KOMBI | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 210 | 0xA503 | 0x3D | HUD | CAS | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 211 | 0xA548 | 0x60 | KOMBI | AFS | 0x0000 | 20 | 20 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 212 | 0xA549 | 0x60 | KOMBI | DME | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 213 | 0xA54A | 0x60 | KOMBI | CAS | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 214 | 0xA54C | 0x60 | KOMBI | JBE | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 215 | 0xA54D | 0x60 | KOMBI | EKP | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 216 | 0xA54E | 0x60 | KOMBI | SMFA | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 217 | 0xA54F | 0x60 | KOMBI | SMBF | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 218 | 0xA550 | 0x60 | KOMBI | DSC | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 219 | 0xA551 | 0x60 | KOMBI | EMF | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 220 | 0xA555 | 0x60 | KOMBI | ACSM | 0x0000 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 221 | 0xA556 | 0x60 | KOMBI | DSC | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 222 | 0xA558 | 0x60 | KOMBI | EMF | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 223 | 0xA55B | 0x60 | KOMBI | ACSM | 0x0000 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 224 | 0xA560 | 0x60 | KOMBI | DME | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 225 | 0xA565 | 0x60 | KOMBI | DME | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 226 | 0xA566 | 0x60 | KOMBI | ICM | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 227 | 0xA56C | 0x60 | KOMBI | HIM | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 228 | 0xA56D | 0x60 | KOMBI | SBA | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 229 | 0xA56E | 0x60 | KOMBI | TFE | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 230 | 0xA73B | 0x00 | JBE | IHKA | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 231 | 0xA812 | 0x77 | RFK | CAS | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 232 | 0xA813 | 0x77 | RFK | FRM | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 233 | 0xA814 | 0x77 | RFK | DSC | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 234 | 0xA815 | 0x77 | RFK | PDC | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 235 | 0xA816 | 0x77 | RFK | PDC | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 236 | 0xA819 | 0x77 | RFK | EGS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 237 | 0xA81A | 0x77 | RFK | DSC | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 238 | 0xA81B | 0x77 | RFK | DSC | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 239 | 0xA81C | 0x77 | RFK | CAS | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 240 | 0xC907 | 0x00 | JBE | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 241 | 0xC908 | 0x00 | JBE | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 242 | 0xC90B | 0x00 | JBE | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 243 | 0xC914 | 0x00 | JBE | IHKA | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 244 | 0xC915 | 0x00 | JBE | IHKA | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 245 | 0xC916 | 0x00 | JBE | IHKA | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 246 | 0xC917 | 0x00 | JBE | IHKA | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 247 | 0xC918 | 0x00 | JBE | SZL_LWS | 0x0000 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 248 | 0xC919 | 0x00 | JBE | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 249 | 0xC91A | 0x00 | JBE | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 250 | 0xC91B | 0x00 | JBE | IHKA | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 251 | 0xC91C | 0x00 | JBE | IHKA | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 252 | 0xC91D | 0x00 | JBE | IHKA | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 253 | 0xC91E | 0x00 | JBE | CAS | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 254 | 0xC91F | 0x00 | JBE | KOMBI | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 255 | 0xC920 | 0x00 | JBE | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 256 | 0xC921 | 0x00 | JBE | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 257 | 0xC922 | 0x00 | JBE | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 258 | 0xC923 | 0x00 | JBE | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 259 | 0xC924 | 0x00 | JBE | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 260 | 0xC944 | 0x01 | ACSM | leer | 0x0000 | 0 | 50 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 261 | 0xC94B | 0x01 | ACSM | leer | 0x0000 | 0 | 50 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 262 | 0xCA84 | 0x06 | TRSVC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 |
| 263 | 0xCA87 | 0x06 | TRSVC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 |
| 264 | 0xCA9A | 0x06 | TRSVC | KOMBI | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 |
| 265 | 0xCA9B | 0x06 | TRSVC | KOMBI | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 |
| 266 | 0xCA9C | 0x06 | TRSVC | DSC | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 |
| 267 | 0xCA9D | 0x06 | TRSVC | JBE | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 |
| 268 | 0xCA9E | 0x06 | TRSVC | FRM | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 |
| 269 | 0xCA9F | 0x06 | TRSVC | IHKA | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 |
| 270 | 0xCAA0 | 0x06 | TRSVC | DSC | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 |
| 271 | 0xCAA1 | 0x06 | TRSVC | CAS | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 |
| 272 | 0xCAA2 | 0x06 | TRSVC | AHM | 0x0000 | -21 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 |
| 273 | 0xCAA3 | 0x06 | TRSVC | FZD | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 |
| 274 | 0xCAA4 | 0x06 | TRSVC | EGS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 |
| 275 | 0xCAA5 | 0x06 | TRSVC | DSC | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 |
| 276 | 0xCAA6 | 0x06 | TRSVC | CAS | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 |
| 277 | 0xCAA7 | 0x06 | TRSVC | PDC | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 |
| 278 | 0xCAA8 | 0x06 | TRSVC | KOMBI | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 |
| 279 | 0xCAA9 | 0x06 | TRSVC | DME | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 |
| 280 | 0xCAAA | 0x06 | TRSVC | FRM | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 |
| 281 | 0xCAAB | 0x06 | TRSVC | PDC | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 |
| 282 | 0xCAAC | 0x06 | TRSVC | PDC | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 |
| 283 | 0xCAAD | 0x06 | TRSVC | FRM | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 |
| 284 | 0xCB47 | 0x09 | HIM | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 285 | 0xCB54 | 0x09 | HIM | IHKA | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 286 | 0xCB87 | 0x0A | SBA | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 287 | 0xCB94 | 0x0A | SBA | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 288 | 0xCB97 | 0x0A | SBA | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 289 | 0xCB9A | 0x0A | SBA | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 290 | 0xCB9D | 0x0A | SBA | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 291 | 0xCBA0 | 0x0A | SBA | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 292 | 0xCBA1 | 0x0A | SBA | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 293 | 0xCBA2 | 0x0A | SBA | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 294 | 0xCBA8 | 0x0A | SBA | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 295 | 0xCBAB | 0x0A | SBA | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 296 | 0xCBAE | 0x0A | SBA | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 297 | 0xCBAF | 0x0A | SBA | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 298 | 0xCBB8 | 0x0A | SBA | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 299 | 0xCBBA | 0x0A | SBA | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 300 | 0xCCCF | 0x0F | QSG | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 301 | 0xCCE5 | 0x0F | QSG | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 302 | 0xCCE6 | 0x0F | QSG | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 303 | 0xCCE7 | 0x0F | QSG | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 304 | 0xCCE8 | 0x0F | QSG | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 305 | 0xCCE9 | 0x0F | QSG | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 306 | 0xCCEA | 0x0F | QSG | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 307 | 0xCCEB | 0x0F | QSG | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 308 | 0xCCEC | 0x0F | QSG | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 309 | 0xCCED | 0x0F | QSG | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 310 | 0xCCEE | 0x0F | QSG | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 311 | 0xCD86 | 0x12 | DME | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 312 | 0xCD87 | 0x12 | DME | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 313 | 0xCD89 | 0x12 | DME | ACSM | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 314 | 0xCD8C | 0x12 | DME | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 315 | 0xCD8F | 0x12 | DME | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 316 | 0xCD92 | 0x12 | DME | EMF | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 317 | 0xCD94 | 0x12 | DME | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 318 | 0xCD97 | 0x12 | DME | AFS | 0x0000 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 319 | 0xCD99 | 0x12 | DME | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 320 | 0xCD9A | 0x12 | DME | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 321 | 0xCD9C | 0x12 | DME | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 322 | 0xCD9F | 0x12 | DME | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 323 | 0xCDA0 | 0x12 | DME | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 324 | 0xCDAD | 0x12 | DME | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 325 | 0xCDAE | 0x12 | DME | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 326 | 0xCDAF | 0x12 | DME | AHM | 0x0000 | 20 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 327 | 0xCDB3 | 0x12 | DME | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 328 | 0xCDB5 | 0x12 | DME | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 329 | 0xCDB9 | 0x12 | DME | EMF | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 330 | 0xCDBA | 0x12 | DME | EMF | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 331 | 0xCDC2 | 0x12 | DME | EMF | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 332 | 0xCDEB | 0x12 | DME | FRM | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 333 | 0xCDED | 0x12 | DME | DSC | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 334 | 0xCDEE | 0x12 | DME | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 335 | 0xCDEF | 0x12 | DME | AHM | 0x0000 | 20 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 336 | 0xCDF9 | 0x12 | DME | EMF | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 337 | 0xCDFA | 0x12 | DME | EMF | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 338 | 0xCE4F | 0x15 | LDM_L4 | CCC/MASK2/CHAMP | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 339 | 0xCE50 | 0x15 | LDM_L4 | CCC/MASK2/CHAMP | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 340 | 0xCE51 | 0x15 | LDM_L4 | CCC/MASK2/CHAMP | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 341 | 0xCE52 | 0x15 | LDM_L4 | CCC/MASK2/CHAMP | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 342 | 0xCE53 | 0x15 | LDM_L4 | CCC/MASK2/CHAMP | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 343 | 0xCE55 | 0x15 | LDM_L4 | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 344 | 0xCE56 | 0x15 | LDM_L4 | DSC | 0x0000 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 345 | 0xCE57 | 0x15 | LDM_L4 | FRM | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 346 | 0xCE58 | 0x15 | LDM_L4 | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 347 | 0xCE59 | 0x15 | LDM_L4 | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 348 | 0xCE5A | 0x15 | LDM_L4 | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 349 | 0xCE5C | 0x15 | LDM_L4 | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 350 | 0xCE5D | 0x15 | LDM_L4 | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 351 | 0xCE5E | 0x15 | LDM_L4 | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 352 | 0xCE5F | 0x15 | LDM_L4 | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 353 | 0xCE60 | 0x15 | LDM_L4 | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 354 | 0xCE61 | 0x15 | LDM_L4 | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 355 | 0xCE62 | 0x15 | LDM_L4 | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 356 | 0xCE63 | 0x15 | LDM_L4 | DSC | 0x0000 | 25 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 357 | 0xCE64 | 0x15 | LDM_L4 | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 358 | 0xCE65 | 0x15 | LDM_L4 | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 359 | 0xCE66 | 0x15 | LDM_L4 | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 360 | 0xCE67 | 0x15 | LDM_L4 | DSC | 0x0000 | 25 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 361 | 0xCE68 | 0x15 | LDM_L4 | ACSM | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 362 | 0xCE69 | 0x15 | LDM_L4 | DSC | 0x0000 | 25 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 363 | 0xCE6A | 0x15 | LDM_L4 | AHM | 0x0000 | 20 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 364 | 0xCE6B | 0x15 | LDM_L4 | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 365 | 0xCE6C | 0x15 | LDM_L4 | FRM | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 366 | 0xCE6F | 0x15 | LDM_L4 | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 367 | 0xCE70 | 0x15 | LDM_L4 | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 368 | 0xCE72 | 0x15 | LDM_L4 | EMF | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 369 | 0xCE73 | 0x15 | LDM_L4 | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 370 | 0xCE80 | 0x15 | LDM_L4 | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 371 | 0xCE83 | 0x15 | LDM_L4 | FZD | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 372 | 0xCE87 | 0x16 | AFS | leer | 0x0000 | 0 | 0 | 50 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 373 | 0xCE8B | 0x16 | AFS | leer | 0x0000 | 50 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 374 | 0xCE8C | 0x16 | AFS | DSC | 0x0000 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 375 | 0xCE8D | 0x16 | AFS | DME | 0x0000 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 376 | 0xCE91 | 0x16 | AFS | DSC-Sensor | 0x0000 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 377 | 0xCE92 | 0x16 | AFS | DSC-Sensor | 0x0000 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 378 | 0xCE94 | 0x16 | AFS | DSC-Sensor | 0x0000 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 379 | 0xCE95 | 0x16 | AFS | DSC-Sensor | 0x0000 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 380 | 0xCE96 | 0x16 | AFS | DSC | 0x0000 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 381 | 0xCE97 | 0x16 | AFS | DSC-Sensor | 0x0000 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 382 | 0xCE98 | 0x16 | AFS | DSC | 0x0000 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 383 | 0xCE99 | 0x16 | AFS | SZL_LWS | 0x0000 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 384 | 0xCE9A | 0x16 | AFS | AHM | 0x0000 | 20 | 20 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 385 | 0xCE9B | 0x16 | AFS | DSC | 0x0000 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 386 | 0xCE9C | 0x16 | AFS | DSC | 0x0000 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 387 | 0xCE9D | 0x16 | AFS | DME | 0x0000 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 388 | 0xCE9E | 0x16 | AFS | DME | 0x0000 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 389 | 0xCE9F | 0x16 | AFS | DME | 0x0000 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 390 | 0xCEA0 | 0x16 | AFS | EGS | 0x0000 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 391 | 0xCEA1 | 0x16 | AFS | CAS | 0x0000 | 20 | 20 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 392 | 0xCEA2 | 0x16 | AFS | ARS | 0x0000 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 393 | 0xCEA3 | 0x16 | AFS | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 394 | 0xCEC7 | 0x18 | EKP | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 395 | 0xCED4 | 0x18 | EKP | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 396 | 0xCF07 | 0x18 | EGS | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 397 | 0xCF25 | 0x18 | EGS | ACSM | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 398 | 0xCF27 | 0x18 | EGS | SZL_LWS | 0x0000 | 14 | 14 | 14 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | 14 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | 14 | -23 | -23 | -23 | -23 | -23 | -23 | 14 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | 14 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 |
| 399 | 0xCF29 | 0x18 | EGS | AHM | 0x0000 | 20 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 400 | 0xCF2B | 0x18 | EGS | GWS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 401 | 0xCF30 | 0x18 | EGS | GWS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 402 | 0xCF33 | 0x18 | EGS | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 403 | 0xCF34 | 0x18 | EGS | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 404 | 0xCF35 | 0x18 | EGS | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 405 | 0xCF4B | 0x19 | VTG | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 |
| 406 | 0xCF54 | 0x19 | VTG | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 |
| 407 | 0xCF55 | 0x19 | VTG | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 |
| 408 | 0xCF56 | 0x19 | VTG | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 |
| 409 | 0xCF57 | 0x19 | VTG | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 |
| 410 | 0xCF58 | 0x19 | VTG | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 |
| 411 | 0xCF59 | 0x19 | VTG | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 |
| 412 | 0xCF5A | 0x19 | VTG | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 |
| 413 | 0xCF5B | 0x19 | VTG | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 |
| 414 | 0xCF5D | 0x19 | VTG | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 |
| 415 | 0xCF5E | 0x19 | VTG | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 |
| 416 | 0xCF5F | 0x19 | VTG | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 |
| 417 | 0xCF60 | 0x19 | VTG | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 |
| 418 | 0xD010 | 0x1C | ICM | SZL_LWS | 0x0000 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 419 | 0xD011 | 0x1C | ICM | DSC | 0x0000 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 420 | 0xD012 | 0x1C | ICM | DSC | 0x0000 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 421 | 0xD013 | 0x1C | ICM | DSC | 0x0000 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 422 | 0xD014 | 0x1C | ICM | DSC | 0x0000 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 423 | 0xD015 | 0x1C | ICM | DSC | 0x0000 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 424 | 0xD016 | 0x1C | ICM | DSC | 0x0000 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 425 | 0xD017 | 0x1C | ICM | CAS | 0x0000 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 426 | 0xD018 | 0x1C | ICM | DSC | 0x0000 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 427 | 0xD019 | 0x1C | ICM | ACSM | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 428 | 0xD020 | 0x1C | ICM | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 429 | 0xD021 | 0x1C | ICM | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 430 | 0xD022 | 0x1C | ICM | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 431 | 0xD023 | 0x1C | ICM | VTG | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 |
| 432 | 0xD024 | 0x1C | ICM | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 433 | 0xD025 | 0x1C | ICM | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 434 | 0xD026 | 0x1C | ICM | ARS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 435 | 0xD027 | 0x1C | ICM | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 436 | 0xD028 | 0x1C | ICM | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 437 | 0xD029 | 0x1C | ICM | AHM | 0x0000 | 20 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 438 | 0xD02A | 0x1C | ICM | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 439 | 0xD02B | 0x1C | ICM | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 440 | 0xD047 | 0x1D | TFE | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 441 | 0xD054 | 0x1D | TFE | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 442 | 0xD104 | 0x70 | RDC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 443 | 0xD107 | 0x70 | RDC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 444 | 0xD13E | 0x70 | RDC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 445 | 0xD1C7 | 0x23 | ARS | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 446 | 0xD1C8 | 0x23 | ARS | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 447 | 0xD284 | 0x26 | RSE | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 448 | 0xD287 | 0x26 | RSE | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 449 | 0xD2C4 | 0x27 | CA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 450 | 0xD2C7 | 0x27 | CA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 451 | 0xD347 | 0x29 | DSC | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 452 | 0xD34B | 0x29 | DSC | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 453 | 0xD34C | 0x29 | DSC | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 454 | 0xD34D | 0x29 | DSC | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 455 | 0xD354 | 0x29 | DSC | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 456 | 0xD355 | 0x29 | DSC | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 457 | 0xD356 | 0x29 | DSC | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 458 | 0xD358 | 0x29 | DSC | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 459 | 0xD359 | 0x29 | DSC | SZL_LWS | 0x0000 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 460 | 0xD35A | 0x29 | DSC | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 461 | 0xD35C | 0x29 | DSC | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 462 | 0xD35D | 0x29 | DSC | AFS | 0x0000 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 463 | 0xD35E | 0x29 | DSC | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 464 | 0xD35F | 0x29 | DSC | ARS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 465 | 0xD360 | 0x29 | DSC | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 466 | 0xD361 | 0x29 | DSC | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 467 | 0xD362 | 0x29 | DSC | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 468 | 0xD363 | 0x29 | DSC | CCC/MASK2/CHAMP | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 469 | 0xD365 | 0x29 | DSC | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 470 | 0xD367 | 0x29 | DSC | AFS | 0x0000 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 471 | 0xD368 | 0x29 | DSC | SZL_LWS | 0x0000 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 472 | 0xD36A | 0x29 | DSC | VTG | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 |
| 473 | 0xD36B | 0x29 | DSC | VTG | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 |
| 474 | 0xD374 | 0x29 | DSC | FRM | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 475 | 0xD37D | 0x29 | DSC | FZD | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 476 | 0xD37F | 0x29 | DSC | IHKA | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 477 | 0xD380 | 0x29 | DSC | IHKA | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 478 | 0xD381 | 0x29 | DSC | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 479 | 0xD387 | 0x2A | EMF | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 480 | 0xD394 | 0x2A | EMF | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 481 | 0xD395 | 0x2A | EMF | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 482 | 0xD397 | 0x2A | EMF | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 483 | 0xD398 | 0x2A | EMF | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 484 | 0xD399 | 0x2A | EMF | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 485 | 0xD39A | 0x2A | EMF | JBE | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 486 | 0xD507 | 0x30 | EPS | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 |
| 487 | 0xD514 | 0x30 | EPS | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 |
| 488 | 0xD515 | 0x30 | EPS | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 |
| 489 | 0xD516 | 0x30 | EPS | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 |
| 490 | 0xD517 | 0x30 | EPS | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 |
| 491 | 0xD6C4 | 0x37 | AMP | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 492 | 0xD6C7 | 0x37 | AMP | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 493 | 0xD704 | 0x38 | EHC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 494 | 0xD707 | 0x38 | EHC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 495 | 0xD710 | 0x38 | EHC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 496 | 0xD711 | 0x38 | EHC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 497 | 0xD712 | 0x38 | EHC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 498 | 0xD713 | 0x38 | EHC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 499 | 0xD747 | 0x39 | VDM | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 500 | 0xD74B | 0x39 | VDM | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 501 | 0xD754 | 0x39 | VDM | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 502 | 0xD755 | 0x39 | VDM | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 503 | 0xD756 | 0x39 | VDM | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 504 | 0xD757 | 0x39 | VDM | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 505 | 0xD758 | 0x39 | VDM | GWS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 506 | 0xD759 | 0x39 | VDM | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 507 | 0xD75A | 0x39 | VDM | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 508 | 0xD75B | 0x39 | VDM | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 509 | 0xD75C | 0x39 | VDM | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 510 | 0xD75D | 0x39 | VDM | ARS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 511 | 0xD75E | 0x39 | VDM | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 512 | 0xD760 | 0x39 | VDM | SZL_LWS | 0x0000 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 513 | 0xD761 | 0x39 | VDM | ARS | 0x0000 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 514 | 0xD762 | 0x39 | VDM | AFS | 0x0000 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 515 | 0xD763 | 0x39 | VDM | SZL_LWS | 0x0000 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 516 | 0xD765 | 0x39 | VDM | DSC-Sensor | 0x0000 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 517 | 0xD766 | 0x39 | VDM | DSC-Sensor | 0x0000 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 518 | 0xD767 | 0x39 | VDM | DSC-Sensor | 0x0000 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 519 | 0xD76D | 0x39 | VDM | ARS | 0x0000 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 520 | 0xD844 | 0x3D | HUD | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 521 | 0xD847 | 0x3D | HUD | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 522 | 0xD904 | 0x40 | CAS | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 523 | 0xD907 | 0x40 | CAS | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 524 | 0xDB04 | 0x48 | VS | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 |
| 525 | 0xDB07 | 0x48 | VS | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 |
| 526 | 0xDCC4 | 0x4F | EKK | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 527 | 0xDCC6 | 0x4F | EKK | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 528 | 0xDCC7 | 0x4F | EKK | HIM | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 529 | 0xDCC8 | 0x4F | EKK | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 530 | 0xDCC9 | 0x4F | EKK | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 531 | 0xDCCA | 0x4F | EKK | JBE | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 532 | 0xDCCC | 0x4F | EKK | IHKA | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 533 | 0xDCCD | 0x4F | EKK | HIM | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 534 | 0xDE84 | 0x56 | FZD | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 535 | 0xDE87 | 0x56 | FZD | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 536 | 0xE047 | 0x5D | KAFAS | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 |
| 537 | 0xE054 | 0x5D | KAFAS | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 |
| 538 | 0xE055 | 0x5D | KAFAS | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 |
| 539 | 0xE056 | 0x5D | KAFAS | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 |
| 540 | 0xE057 | 0x5D | KAFAS | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 |
| 541 | 0xE058 | 0x5D | KAFAS | SZL_LWS | 0x0000 | 14 | 14 | 14 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | 14 | -23 | -23 | -23 | -23 | -23 | -23 | 14 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | 14 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | 14 | -23 |
| 542 | 0xE059 | 0x5D | KAFAS | FRM | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 |
| 543 | 0xE05A | 0x5D | KAFAS | FRM | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 |
| 544 | 0xE05B | 0x5D | KAFAS | SZL_LWS | 0x0000 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 |
| 545 | 0xE05C | 0x5D | KAFAS | FRM | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 |
| 546 | 0xE05D | 0x5D | KAFAS | FZD | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 |
| 547 | 0xE05E | 0x5D | KAFAS | JBE | 0x0000 | 25 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 |
| 548 | 0xE05F | 0x5D | KAFAS | CCC/MASK2/CHAMP | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 |
| 549 | 0xE060 | 0x5D | KAFAS | CCC/MASK2/CHAMP | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 |
| 550 | 0xE061 | 0x5D | KAFAS | SZL_LWS | 0x0000 | 14 | 14 | 14 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | 14 | -23 | -23 | -23 | -23 | -23 | -23 | 14 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | 14 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | 14 | -23 |
| 551 | 0xE062 | 0x5D | KAFAS | AHM | 0x0000 | 20 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 |
| 552 | 0xE063 | 0x5D | KAFAS | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 |
| 553 | 0xE064 | 0x5D | KAFAS | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 |
| 554 | 0xE065 | 0x5D | KAFAS | FZD | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 |
| 555 | 0xE066 | 0x5D | KAFAS | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 |
| 556 | 0xE067 | 0x5D | KAFAS | FRM | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 |
| 557 | 0xE068 | 0x5D | KAFAS | CCC/MASK2/CHAMP | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 |
| 558 | 0xE069 | 0x5D | KAFAS | CCC/MASK2/CHAMP | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 |
| 559 | 0xE06A | 0x5D | KAFAS | CCC/MASK2/CHAMP | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 |
| 560 | 0xE06B | 0x5D | KAFAS | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 |
| 561 | 0xE06C | 0x5D | KAFAS | FRM | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 |
| 562 | 0xE06D | 0x5D | KAFAS | FRM | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 |
| 563 | 0xE06E | 0x5D | KAFAS | CCC/MASK2/CHAMP | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 |
| 564 | 0xE06F | 0x5D | KAFAS | CCC/MASK2/CHAMP | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 |
| 565 | 0xE070 | 0x5D | KAFAS | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 |
| 566 | 0xE087 | 0x5E | GWS | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 567 | 0xE094 | 0x5E | GWS | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 568 | 0xE096 | 0x5E | GWS | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 569 | 0xE097 | 0x5E | GWS | FRM | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 570 | 0xE098 | 0x5E | GWS | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 571 | 0xE099 | 0x5E | GWS | VDM | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 572 | 0xE0C4 | 0x5F | FLA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 573 | 0xE0C7 | 0x5F | FLA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 574 | 0xE0D4 | 0x5F | FLA | KOMBI | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 575 | 0xE0D5 | 0x5F | FLA | FRM | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 576 | 0xE0D6 | 0x5F | FLA | DSC | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 577 | 0xE0D7 | 0x5F | FLA | KOMBI | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 578 | 0xE0D8 | 0x5F | FLA | FRM | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 579 | 0xE0D9 | 0x5F | FLA | DSC | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 580 | 0xE0DA | 0x5F | FLA | FZD | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 581 | 0xE0DB | 0x5F | FLA | EGS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 582 | 0xE104 | 0x60 | KOMBI | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 583 | 0xE107 | 0x60 | KOMBI | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 584 | 0xE184 | 0x62 | CCC/MASK2/CHAMP | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 585 | 0xE187 | 0x62 | CCC/MASK2/CHAMP | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 586 | 0xE188 | 0x62 | CCC/MASK2/CHAMP | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 587 | 0xE204 | 0x64 | PDC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 588 | 0xE205 | 0x64 | PDC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 589 | 0xE206 | 0x64 | PDC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 590 | 0xE207 | 0x64 | PDC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 591 | 0xE214 | 0x64 | PDC | CAS | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 592 | 0xE215 | 0x64 | PDC | IHKA | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 593 | 0xE216 | 0x64 | PDC | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 594 | 0xE217 | 0x64 | PDC | KOMBI | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 595 | 0xE218 | 0x64 | PDC | TRSVC | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 |
| 596 | 0xE219 | 0x64 | PDC | TRSVC | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 |
| 597 | 0xE21A | 0x64 | PDC | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 598 | 0xE21B | 0x64 | PDC | FRM | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 599 | 0xE21C | 0x64 | PDC | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 600 | 0xE21D | 0x64 | PDC | AHM | 0x0000 | 20 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 601 | 0xE21E | 0x64 | PDC | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 602 | 0xE2C4 | 0x67 | CON | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 |
| 603 | 0xE2C7 | 0x67 | CON | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 |
| 604 | 0xE2D4 | 0x67 | CON | CAS | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 |
| 605 | 0xE2D5 | 0x67 | CON | FRM | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 |
| 606 | 0xE2D6 | 0x67 | CON | KOMBI | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 |
| 607 | 0xE2D7 | 0x67 | CON | CCC/MASK2/CHAMP | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 |
| 608 | 0xE3C4 | 0x6B | HKL | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 |
| 609 | 0xE444 | 0x6D | SMFA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 610 | 0xE484 | 0x6E | SMBF | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 611 | 0xE487 | 0x6E | SMBF | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 612 | 0xE544 | 0x71 | AHM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 613 | 0xE545 | 0x71 | AHM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 614 | 0xE547 | 0x71 | AHM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 615 | 0xE554 | 0x71 | AHM | FRM | 0x0000 | -21 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 616 | 0xE555 | 0x71 | AHM | DME | 0x0000 | 20 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 617 | 0xE556 | 0x71 | AHM | DSC | 0x0000 | 20 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 618 | 0xE557 | 0x71 | AHM | KOMBI | 0x0000 | -21 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 619 | 0xE558 | 0x71 | AHM | CAS | 0x0000 | -21 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 620 | 0xE559 | 0x71 | AHM | FRM | 0x0000 | -21 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 621 | 0xE55A | 0x71 | AHM | CAS | 0x0000 | -21 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 622 | 0xE55B | 0x71 | AHM | DME | 0x0000 | 20 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 623 | 0xE55C | 0x71 | AHM | DSC | 0x0000 | 20 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 624 | 0xE55D | 0x71 | AHM | JBE | 0x0000 | -21 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 625 | 0xE584 | 0x72 | FRM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 626 | 0xE587 | 0x72 | FRM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 627 | 0xE594 | 0x72 | FRM | SZL_LWS | 0x0000 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 628 | 0xE595 | 0x72 | FRM | AHM | 0x0000 | -21 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 629 | 0xE596 | 0x72 | FRM | FLA | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 630 | 0xE597 | 0x72 | FRM | DSC | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 631 | 0xE598 | 0x72 | FRM | FZD | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 632 | 0xE599 | 0x72 | FRM | DSC | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 633 | 0xE59A | 0x72 | FRM | DSC | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 634 | 0xE59B | 0x72 | FRM | CAS | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 635 | 0xE59C | 0x72 | FRM | SZL_LWS | 0x0000 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 636 | 0xE5C4 | 0x73 | CID | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 637 | 0xE5C7 | 0x73 | CID | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 638 | 0xE5D6 | 0x73 | CID | CCC/MASK2/CHAMP | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 639 | 0xE5D8 | 0x73 | CID | FRM | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 640 | 0xE5DA | 0x73 | CID | KOMBI | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 641 | 0xE5DE | 0x73 | CID | KOMBI | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 642 | 0xE5DF | 0x73 | CID | KOMBI | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 643 | 0xE5E0 | 0x73 | CID | CAS | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 644 | 0xE604 | 0x74 | FD | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 645 | 0xE607 | 0x74 | FD | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 646 | 0xE6C4 | 0x77 | RFK | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 647 | 0xE6C7 | 0x77 | RFK | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 648 | 0xE704 | 0x78 | IHKA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 649 | 0xE707 | 0x78 | IHKA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 650 | 0xE714 | 0x78 | IHKA | DME | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 651 | 0xE715 | 0x78 | IHKA | KOMBI | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 652 | 0xE716 | 0x78 | IHKA | DME | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 653 | 0xE717 | 0x78 | IHKA | KOMBI | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 654 | 0xE718 | 0x78 | IHKA | DME | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 655 | 0xE719 | 0x78 | IHKA | DME | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 656 | 0xE71A | 0x78 | IHKA | CAS | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 657 | 0xE71B | 0x78 | IHKA | KOMBI | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 658 | 0xE71C | 0x78 | IHKA | DSC | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 659 | 0xE71D | 0x78 | IHKA | JBE | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 660 | 0xE71E | 0x78 | IHKA | DME | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 661 | 0xE71F | 0x78 | IHKA | FRM | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 662 | 0xE720 | 0x78 | IHKA | KOMBI | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 663 | 0xE721 | 0x78 | IHKA | DSC | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 664 | 0xE722 | 0x78 | IHKA | ACSM | 0x0000 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 665 | 0xE723 | 0x78 | IHKA | FZD | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 666 | 0xE724 | 0x78 | IHKA | SMBF | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 667 | 0xE725 | 0x78 | IHKA | SMFA | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 668 | 0xE726 | 0x78 | IHKA | FKA | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 669 | 0xE727 | 0x78 | IHKA | PDC | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 670 | 0xE728 | 0x78 | IHKA | JBE | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 671 | 0xE729 | 0x78 | IHKA | JBE | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 672 | 0xE72A | 0x78 | IHKA | JBE | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 673 | 0xE72B | 0x78 | IHKA | FZD | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 674 | 0xE72C | 0x78 | IHKA | FKA | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 675 | 0xE72D | 0x78 | IHKA | JBE | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 676 | 0xE72E | 0x78 | IHKA | JBE | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 677 | 0xE72F | 0x78 | IHKA | FKA | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 678 | 0xE744 | 0x79 | FKA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 679 | 0xE747 | 0x79 | FKA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 680 | 0xE754 | 0x79 | FKA | DME | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 681 | 0xE755 | 0x79 | FKA | KOMBI | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 682 | 0xE756 | 0x79 | FKA | DME | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 683 | 0xE757 | 0x79 | FKA | IHKA | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 684 | 0xE758 | 0x79 | FKA | KOMBI | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 685 | 0xE759 | 0x79 | FKA | IHKA | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 686 | 0xE75A | 0x79 | FKA | DME | 0x0000 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 687 | 0xE75B | 0x79 | FKA | IHKA | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 688 | 0xE75C | 0x79 | FKA | CAS | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 689 | 0xE75D | 0x79 | FKA | KOMBI | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 690 | 0xE75E | 0x79 | FKA | FRM | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 691 | 0xE75F | 0x79 | FKA | KOMBI | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 692 | 0xFFF9 | 0x15 | LDM_L4 | leer | 0x0000 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 693 | 0xFFFB | 0x0A | SBA | leer | 0x0000 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 694 | 0xFFFC | 0x1D | TFE | leer | 0x0000 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 695 | 0xFFFD | 0xE2 | SZL_LWS | leer | 0x0000 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 696 | 0xFFFE | 0xE0 | DSC-Sensor | leer | 0x0000 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

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
| 0x01 | ACSM | Crash-Sicherheits-Modul                                   |
| 0x06 | TRSVC | Rundumsichtkamera                                        |
| 0x09 | HIM | Hybrid Interface Modul                                    |
| 0x0A | SBA | Sensotronic Brake Actuation                               |
| 0x0F | QSG | QuerMomentenverteilung-Hinterachse-Steuergerät            |
| 0x12 | DME,DDE | Motor Elektronik / Diesel Elektronik                   |
| 0x13 | DME2,DDE2 | Motor Elektronik 2 / Diesel Elektronik Slave         |
| 0x15 | LDM_L4 | Längsdynamikmanagement                                  |
| 0x16 | AFS | Aktivlenkung                                               |
| 0x17 | EKP | Kraftstoffpumpe                                            |
| 0x18 | EGS,SMG,HIM | Getriebesteuerung / Sequenzielles Manuelles Getriebe / Hybrid Interface Modul  |
| 0x19 | VTG | Verteilergetriebe                                          |
| 0x1C | ICM | Integriertes Chassis Management                            |
| 0x1D | TFE | Tank Funktions Elektronik                                  |
| 0x20 | RDC | Reifendruck-Control                                        |
| 0x23 | ARS | Dynamic Drive                                              |
| 0x26 | RSE | Fond-Unterhaltungssystem                                   |
| 0x27 | PGS bzw. CA | Passive-Go-Steuergerät bzw. Comfort Access         |
| 0x29 | DSC, EHB | Dynamische Stabilitäts-Control / Elektrohydraulische Bremse  |
| 0x2A | EMF | Feststellbremse                           	            |
| 0x30 | EPS | elektromechanische Servolenkung                            |
| 0x37 | AMP | Verstärker                                                 |
| 0x38 | EHC | Höhenstands-Control                                        |
| 0x39 | VDM | Vertikaldynamikmanagement                                  |
| 0x3D | HUD | Head-Up Display                                            |
| 0x40 | CAS | Car Access System                                          |
| 0x48 | VS | Videoswitch                                                 |
| 0x4F | EKK | elektrischer Klimakompressor                               |
| 0x56 | FZD | Funktionszentrum Dach                                      |
| 0x5D | KAFAS | kamerabasierte Fahrerassistenzsysteme                    |
| 0x5E | GWS | Gangwahlschalter					    |
| 0x5F | FLA | Fernlichtassistent                                         |
| 0x60 | KOMBI | Instrumentenkombination                                  |
| 0x62 | CCC,M-ASK,CHAMP | Multi-Audiosystem-Kontroller / Car Communication Computer / CHAMP  |
| 0x64 | PDC | Park Distance Control                                      |
| 0x67 | CON | Controller                                                 |
| 0x6B | HKL | Heckklappenlift                                            |
| 0x6D | SMFA | Sitzmodul Fahrer                                          |
| 0x6E | SMBF | Sitzmodul Beifahrer                                       |
| 0x71 | AHM | Anhängermodul                                              |
| 0x72 | FRM | Fußraummodul	                                            |
| 0x73 | CID | Central Information Display                                |
| 0x74 | CIDF,FD | Central Information Display hinten / Fond-Display      |
| 0x77 | RFK | Rückfahrkammera                                            |
| 0x78 | IHKA | Integrierte Heiz-Klima-Automatik                          |
| 0x79 | FKA | Fondklimaautomatik		                            |
| 0xE0 | DSC-Sensor | DSC-Sensor                                          |
| 0xE2 | SZL-LWS | Lenkwinkelsensor SZL                                   |
| 0xE7 | F-CAN | Bus-System F-CAN                                         |
| 0xE9 | K-CAN | Bus-System für Karosserieumfänge                         |
| 0xEA | PT-CAN | Bus-System im Antriebs- und Fahrwerksbereich            |
| 0xFF | unbekannt | unbekanntes Steuergerät                              |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |
