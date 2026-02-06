# CAN_BUS.prg

## General

|  |  |
| --- | --- |
| File | CAN_BUS.prg |
| Type | PRG |
| Jobs | 8 |
| Tables | 12 |
| Origin | BMW VP-33 Amann |
| Revision | 17.00 |
| Author | ra Amann (VP-33), pa Asum (VS-42), ad David (VS-42), jr Rossman |
| ECU Comment | CAN-Busanalyse |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | CAN_BUS |  |  |
| ORIGIN | string | BMW VP-33 Amann |  |  |
| REVISION | string | 17.00 |  |  |
| AUTHOR | string | ra Amann (VP-33), pa Asum (VS-42), ad David (VS-42), jr Rossman |  |  |
| COMMENT | string | CAN-Busanalyse |  |  |
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
| 0x2776 | 2776 me9e65_6/me9n62: DME: Botschaft vom SZL fehlt |
| 0x27EC | 27EC me9e65_6/me9n62/n73_r0/n73_l0: DME: Botschaft vom EGS fehlt |
| 0x27ED | 27ED me9e65_6/me9n62/n73_r0/n73_l0: DME: Botschaft vom DSC fehlt |
| 0x27EE | 27EE me9e65_6/me9n62/n73_r0/n73_l0: DME: Botschaft von der Instrumentenkombination fehlt |
| 0x27EF | 27EF me9e65_6/me9n62/n73_r0/n73_l0: DME: Botschaft vom ACC fehlt |
| 0x27F4 | 27F4 n73_r0: DME: Botschaft vom Kombi fehlt |
| 0x2828 | 2828 me9e65_6/me9n62/n73_r0/n73_l0: DME: Botschaft vom ARS fehlt |
| 0x2829 | 2829 me9e65_6/me9n62/n73_r0/n73_l0: DME: Botschaft vom CAS fehlt |
| 0x282A | 282A me9e65_6/me9n62/n73_r0/n73_l0: DME: Botschaft vom IHKA fehlt |
| 0x282B | 282B me9e65_6/me9n62/n73_r0/n73_l0: DME: Botschaft vom Powermodul fehlt |
| 0x282C | 282C me9e65_6/me9n62/n73_r0/n73_l0: DME: Botschaft vom SZL fehlt |
| 0x2908 | 2908 me9n62: DME: CAN Timeout DSC-Steuergerät |
| 0x2909 | 2909 me9n62: DME: CAN Timeout Getriebesteuergerät |
| 0x293D | 293D ms450ds0: DME: Botschaftsüberwachung: EKP |
| 0x2947 | 2947 ms450ds0: DME: Botschaftsüberwachung: Drehmomentanforderung ACC |
| 0x2948 | 2948 ms450ds0: DME: Botschaftsüberwachung: ARS |
| 0x2949 | 2949 ms450ds0: DME: Botschaftsüberwachung: CAS |
| 0x294A | 294A ms450ds0: DME: Botschaftsüberwachung: Drehmomentanforderung DSC |
| 0x294B | 294B ms450ds0: DME: Botschaftsüberwachung: Geschwindigkeit DSC |
| 0x294C | 294C ms450ds0: DME: Botschaftsüberwachung: Status DSC |
| 0x294D | 294D ms450ds0: DME: Botschaftsüberwachung: Drehmomentanforderung EGS |
| 0x294E | 294E ms450ds0: DME: Botschaftsüberwachung: Getriebedaten EGS/SMG |
| 0x294F | 294F ms450ds0: DME: Botschaftsüberwachung: Drehmomentanforderung SMG |
| 0x2950 | 2950 ms450ds0: DME: Botschaftsüberwachung: Klimafunktion |
| 0x2951 | 2951 ms450ds0: DME: Botschaftsüberwachung: Temperatur Instrumentenkombination |
| 0x2952 | 2952 ms450ds0: DME: Botschaftsüberwachung: Kilometerstand Instrumentenkombination |
| 0x2953 | 2953 ms450ds0: DME: Botschaftsüberwachung: Status Instrumentenkombination |
| 0x2954 | 2954 ms450ds0: DME: Botschaftsüberwachung: Batteriespannung Powermodul |
| 0x2955 | 2955 ms450ds0: DME: Botschaftsüberwachung: Ladespannung Powermodul |
| 0x2956 | 2956 ms450ds0: DME: Botschaftsüberwachung: Bedienung Fahrgeschwindigkeitsregler Schaltzentrum Lenksäule |
| 0x2957 | 2957 ms450ds0: DME: Botschaftsüberwachung: Lenkradwinkel Schaltzentrum Lenksäule |
| 0x2958 | 2958 ms450ds0: DME: Botschaftsüberwachung: Sporttaster |
| 0x2AD0 | 2AD0 msv70: DME: Botschaft der Getriebesteuerung fehlt |
| 0x2D5B | 2D5B msv70: DME: Botschaft von der EGS (Momentenanforderung) fehlerhaft |
| 0x2DBF | 2DBF me9n62_2/n62_tue/n62_tue2/n73tu_r0/n73tu_l0: DME: Botschaft vom ACC fehlt |
| 0x2DC1 | 2DC1 n73h_r0/n73tu_r0/n73h_l0/n73tu_l0: DME: Botschaft vom Powermodul fehlt |
| 0x2DC6 | 2DC6 msv70: DME: Tankfüllstandswert, Plausibilität |
| 0x2DC8 | 2DC8 msv70: DME: Botschaft vom EGS fehlt, EGS 1 |
| 0x2DC9 | 2DC9 msv70: DME: Botschaft vom EGS fehlt, EGS 2 |
| 0x2DCA | 2DCA me9n62_2/n62_tue/n62_tue2: DME: Botschaft vom EGS fehlt |
| 0x2DCC | 2DCC msv70: DME: Botschaft vom ASC/DSC fehlt, ASC 1 |
| 0x2DCD | 2DCD msv70: DME: Botschaft vom ASC/DSC fehlt, ASC 3 |
| 0x2DCE | 2DCE msv70: DME: Botschaft vom ASC/DSC fehlt, ASC 4 |
| 0x2DCF | 2DCF me9n62_2/n62_tue/n62_tue2/n73h_r0/n73tu_r0/n73h_l0/n73tu_l0: DME: Botschaft vom KOMBI fehlt |
| 0x2DD0 | 2DD0 msv70: DME: Botschaft von der Instrumentenkombination fehlt, I-Kombi 2 |
| 0x2DD1 | 2DD1 msv70: DME: Botschaft von der Instrumentenkombination fehlt, I-Kombi 3 |
| 0x2DD2 | 2DD2 msv70: DME: Botschaft vom LWS-Steuergerät fehlt, LWS |
| 0x2DD3 | 2DD3 msv70: DME: Botschaft vom SMG-Steuergerät fehlt, SMG 1 |
| 0x2DD5 | 2DD5 msv70: DME: Botschaft von der EKP fehlt |
| 0x2DD7 | 2DD7 me9n62_2/n62_tue/n62_tue2/n73h_r0/n73tu_r0/n73h_l0/n73tu_l0: DME: Botschaft vom DSC fehlt |
| 0x2DDA | 2DDA me9n62_2/n62_tue/n62_tue2/n73h_r0/n73tu_r0/n73h_l0/n73tu_l0: DME: Botschaft vom CAS fehlt |
| 0x2DDB | 2DDB me9n62_2/n62_tue/n62_tue2/n73h_r0/n73tu_r0/n73h_l0/n73tu_l0: DME: Botschaft vom IHKA fehlt |
| 0x2DDC | 2DDC me9n62_2/n62_tue/n62_tue2/n73h_r0/n73tu_r0/n73h_l0/n73tu_l0: DME: Botschaft vom SZL fehlt |
| 0x2DE0 | 2DE0 msv70: DME: Botschaft von der elektrischen Kraftstoffpumpe fehlt, EKP |
| 0x2DE3 | 2DE3 msv70: DME: Botschaft von der Instrumentenkombination fehlt, I-Kombi 7 |
| 0x2F4E | 2F4E msv70: DME: Fahrzeuggeschwindigkeit, Signal |
| 0x2F50 | 2F50 me9n62_2/n62_tue/n62_tue2: DME: Botschaft vom KOMBI fehlt |
| 0x331D | 331D n73h_r0/n73h_l0: DME: Botschaft vom CEM fehlt |
| 0x331E | 331E n73h_r0/n73h_l0: DME: Botschaft vom KOMBI, Systemzeit: Zeitüberschreitung |
| 0x3F62 | 3F62 d62m57b0/d63mm670/d63sm670: DDE: Fahrgeschwindigkeitssignal über CAN |
| 0x41A6 | 41A6 d50m57a0/d51mm670: DDE: Botschaft (CBS Reset, 0x580) |
| 0x41A7 | 41A7 d50m57a0/d51mm670/d62m57b0/d51sm670: DDE: Botschaft (CBS Reset, 0x580) |
| 0x41A8 | 41A8 d50m57a0/d51mm670/d51sm670: DDE: Botschaft (CBS Reset, 0x580) |
| 0x4327 | 4327 d62m57b0: DDE: Botschaft (Drehmoment SSG, 0xBD) |
| 0x438C | 438C d62m57b0: DDE: Botschaft (Radmomentanforderung, 0xBF) |
| 0x4457 | 4457 d50m57a0/d51mm670/d62m57b0/d51sm670/d63sm670: DDE: Botschaft (Lenkradwinkel, 0xC4) |
| 0x4458 | 4458 d50m57a0/d51mm670/d62m57b0/d63mm670/d51sm670/d63sm670: DDE: Botschaft (Lenkradwinkel, 0xC4) |
| 0x453B | 453B d62m57b0/d63mm670/d63sm670: DDE: Power Train CAN Bus |
| 0x4567 | 4567 d62m57b0: DDE: Botschaft (Codierung PM, 0x395) |
| 0x4577 | 4577 d62m57b0: DDE: Botschaft (Steuerung Crashabschaltung EKP, 0x135) |
| 0x45F5 | 45F5 d50m57a0/d51mm670/d62m57b0/d63mm670/d51sm670/d63sm670: DDE: Botschaft (Drehmoment ACC, 0xB7) |
| 0x45F6 | 45F6 d50m57a0/d51mm670/d62m57b0/d63mm670/d51sm670/d63sm670: DDE: Botschaft (Drehmoment ACC, 0xB7) |
| 0x45F7 | 45F7 d50m57a0/d51mm670/d62m57b0/d51sm670/d63sm670: DDE: Botschaft (Drehmoment ACC, 0xB7) |
| 0x45F8 | 45F8 d50m57a0/d51mm670/d62m57b0/d63mm670/d51sm670/d63sm670: DDE: Botschaft (Drehmoment ACC, 0xB7) |
| 0x47BB | 47BB d63sm670: DDE2: Power Train CAN Bus (Slave) |
| 0x47F7 | 47F7 d62m57b0/d63sm670: DDE: Botschaft (Sitzbelegung/Gurt, 0x2FA) |
| 0x4803 | 4803 d50m57a0/d51mm670/d62m57b0/d63mm670/d51sm670/d63sm670: DDE: Botschaft (Drehmomentüberwachung) vom ACC/LDM |
| 0x4810 | 4810 d50m57a0/d51mm670/d62m57b0/d63mm670/d51sm670/d63sm670: DDE: Botschaft (Drehmomenteingriff) vom ACC/LDM |
| 0x48A2 | 48A2 d62m57b0: DDE: Botschaft (ASC1) |
| 0x48A7 | 48A7 d62m57b0: DDE: Botschaft (Fahrzeugmodus, 0x315) |
| 0x48B2 | 48B2 d62m57b0: DDE: Botschaft (ASC2) |
| 0x48C2 | 48C2 d62m57b0: DDE: Botschaft (EGS1) |
| 0x48D2 | 48D2 d62m57b0: DDE: Botschaft (INSTR2) |
| 0x48E2 | 48E2 d62m57b0: DDE: Botschaft (INSTR3) |
| 0x4991 | 4991 d50m57a0/d51mm670/d62m57b0/d63mm670/d51sm670/d63sm670: DDE: Botschaft (Kombi, 0x1B4) |
| 0x4992 | 4992 d50m57a0/d51mm670/d62m57b0/d51sm670/d63sm670: DDE: Botschaft (Kombi, 0x1B4) |
| 0x4993 | 4993 d50m57a0/d51mm670/d62m57b0/d63mm670/d51sm670/d63sm670: DDE: Botschaft (Kombi, 0x1B4) |
| 0x49A2 | 49A2 d50m57a0/d51mm670/d62m57b0/d51sm670/d63sm670: DDE: Botschaft (Außentemperatur, 0x310) |
| 0x49A3 | 49A3 d50m57a0/d51mm670/d62m57b0/d63mm670/d51sm670/d63sm670: DDE: Botschaft (Außentemperatur, 0x310) |
| 0x49B0 | 49B0 d50m57a0: DDE: Botschaft (Drehmomentanforderung ACC, 0xB7) |
| 0x49B7 | 49B7 d62m57b0: DDE: Botschaft (Status EKP, 0x335) |
| 0x49C0 | 49C0 d50m57a0: DDE: Botschaft (Drehmomentanforderung ACC, 0xB7) |
| 0x49D2 | 49D2 d50m57a0: DDE: Botschaft (Drehmomentanforderung ACC, 0xB7) |
| 0x49D7 | 49D7 d62m57b0: DDE: Botschaft (ASC4) |
| 0x49E0 | 49E0 d50m57a0: DDE: Botschaft (Drehmomentanforderung ACC, 0xB7) |
| 0x49E3 | 49E3 d50m57a0: DDE: Botschaft (Drehmomentanforderung ACC, 0xB7) |
| 0x49F2 | 49F2 d50m57a0/d51mm670/d62m57b0/d51sm670/d63sm670: DDE: Botschaft (Geschwindigkeit, 0xCE) |
| 0x49F3 | 49F3 d50m57a0/d51mm670/d62m57b0/d63mm670/d51sm670/d63sm670: DDE: Botschaft (Geschwindigkeit, 0xCE) |
| 0x4A92 | 4A92 d62m57b0: DDE: Botschaft (ASC3) |
| 0x4A97 | 4A97 d62m57b0: DDE: Botschaft (CBS_RESET_2, 0x580) |
| 0x4AA2 | 4AA2 d62m57b0: DDE: Botschaft (EGS2) |
| 0x4AA7 | 4AA7 d62m57b0: DDE: Botschaft (Status Anhänger, 0x2E4) |
| 0x4AB7 | 4AB7 d62m57b0: DDE: Botschaft (Uhrzeit/Datum, 0x2F8) |
| 0x4BE2 | 4BE2 d50m57a0/d51mm670/d62m57b0/d51sm670/d63sm670: DDE: Botschaft (Getriebedaten, 0xBA) |
| 0x4BE3 | 4BE3 d50m57a0/d51mm670/d62m57b0/d63mm670/d51sm670/d63sm670: DDE: Botschaft (Getriebedaten, 0xBA) |
| 0x4BE7 | 4BE7 d50m57a0/d51mm670/d62m57b0/d51sm670/d63sm670: DDE: Botschaft (Getriebedaten 2, 0x1A2) |
| 0x4BE8 | 4BE8 d50m57a0/d51mm670/d62m57b0/d63mm670/d51sm670/d63sm670: DDE: Botschaft (Getriebedaten 2, 0x1A2) |
| 0x4BF2 | 4BF2 d50m57a0/d51mm670/d62m57b0/d51sm670/d63sm670: DDE: Botschaft (Klimaanlage, 0x1B5) |
| 0x4BF3 | 4BF3 d50m57a0/d51mm670/d62m57b0/d63mm670/d51sm670/d63sm670: DDE: Botschaft (Klimaanlage, 0x1B5) |
| 0x4BF7 | 4BF7 d50m57a0/d51mm670/d62m57b0/d51sm670/d63sm670: DDE: Botschaft (Reichweite, 0x330) |
| 0x4BF8 | 4BF8 d50m57a0/d51mm670/d62m57b0/d63mm670/d51sm670/d63sm670: DDE: Botschaft (Reichweite, 0x330) |
| 0x4C00 | 4C00 d50m57a0/d51mm670/d62m57b0/d63mm670/d51sm670/d63sm670: DDE: Botschaft (Fahrgeschwindigkeitsregelung/ACC, 0x194) |
| 0x4C01 | 4C01 d50m57a0/d51mm670/d62m57b0/d63mm670/d51sm670/d63sm670: DDE: Botschaft (Fahrgeschwindigkeitsregelung/ACC, 0x194) |
| 0x4C02 | 4C02 d50m57a0/d51mm670/d62m57b0/d51sm670/d63sm670: DDE: Botschaft (Fahrgeschwindigkeitsregelung/ACC, 0x194) |
| 0x4C03 | 4C03 d50m57a0/d51mm670/d62m57b0/d63mm670/d51sm670/d63sm670: DDE: Botschaft (Fahrgeschwindigkeitsregelung/ACC, 0x194) |
| 0x4C06 | 4C06 d50m57a0/d51mm670/d62m57b0/d63mm670/d51sm670/d63sm670: DDE: Botschaft (Status ARS, 0x1AC) |
| 0x4C07 | 4C07 d50m57a0/d51mm670/d62m57b0/d51sm670/d63sm670: DDE: Botschaft (Status ARS, 0x1AC) |
| 0x4C08 | 4C08 d50m57a0/d51mm670/d62m57b0/d63mm670/d51sm670/d63sm670: DDE: Botschaft (Status ARS, 0x1AC) |
| 0x4C12 | 4C12 d50m57a0/d51mm670/d62m57b0/d51sm670/d63sm670: DDE: Botschaft (Status DSC, 0x19E) |
| 0x4C13 | 4C13 d50m57a0/d51mm670/d62m57b0/d63mm670/d51sm670/d63sm670: DDE: Botschaft (Status DSC, 0x19E) |
| 0x4C15 | 4C15 d50m57a0/d51mm670/d62m57b0/d63mm670/d51sm670/d63sm670: DDE: Botschaft (Klemme 15, 0x130) |
| 0x4C16 | 4C16 d50m57a0/d51mm670/d62m57b0/d63mm670/d51sm670/d63sm670: DDE: Botschaft (Klemme 15, 0x130) |
| 0x4C17 | 4C17 d50m57a0/d51mm670/d62m57b0/d51sm670/d63sm670: DDE: Botschaft (Klemme 15, 0x130) |
| 0x4C18 | 4C18 d50m57a0/d51mm670/d62m57b0/d63mm670/d51sm670/d63sm670: DDE: Botschaft (Klemme 15, 0x130) |
| 0x4C20 | 4C20 d50m57a0/d51mm670/d62m57b0/d63mm670/d51sm670/d63sm670: DDE: Botschaft (Drehmoment DSC, 0xB6) |
| 0x4C21 | 4C21 d50m57a0/d51mm670/d62m57b0/d63mm670/d51sm670/d63sm670: DDE: Botschaft (Drehmoment DSC, 0xB6) |
| 0x4C22 | 4C22 d50m57a0/d51mm670/d62m57b0/d51sm670/d63sm670: DDE: Botschaft (Drehmoment DSC, 0xB6) |
| 0x4C23 | 4C23 d50m57a0/d51mm670/d62m57b0/d63mm670/d51sm670/d63sm670: DDE: Botschaft (Drehmoment DSC, 0xB6) |
| 0x4C27 | 4C27 d50m57a0/d51mm670/d62m57b0/d51sm670/d63sm670: DDE: Botschaft (Geschwindigkeit, 0x1A0) |
| 0x4C28 | 4C28 d50m57a0/d51mm670/d62m57b0/d63mm670/d51sm670/d63sm670: DDE: Botschaft (Geschwindigkeit, 0x1A0) |
| 0x4CA2 | 4CA2 d50m57a0/d51mm670/d51sm670: DDE: Botschaft (Powermanagement, 0x3B4) |
| 0x4CA3 | 4CA3 d50m57a0/d51mm670/d51sm670: DDE: Botschaft (Powermanagement Batteriespannung, 0x3B4) |
| 0x4CB2 | 4CB2 d50m57a0/d51mm670/d62m57b0/d51sm670/d63sm670: DDE: Botschaft (Powermanagement, 0x334) |
| 0x4CB3 | 4CB3 d50m57a0/d51mm670/d62m57b0/d63mm670/d51sm670/d63sm670: DDE: Botschaft (Powermanagement, 0x334) |
| 0x4DF0 | 4DF0 d50m57a0/d51mm670/d62m57b0/d63mm670/d51sm670/d63sm670: DDE: Botschaft (Drehmoment Getriebe, 0xB5) |
| 0x4DF1 | 4DF1 d50m57a0/d51mm670/d62m57b0/d63mm670/d51sm670/d63sm670: DDE: Botschaft (Drehmoment Getriebe, 0xB5) |
| 0x4DF2 | 4DF2 d50m57a0/d51mm670/d62m57b0/d63mm670/d51sm670/d63sm670: DDE: Botschaft (Drehmoment Getriebe, 0xB5) |
| 0x4DF3 | 4DF3 d50m57a0/d51mm670/d62m57b0/d63mm670/d51sm670/d63sm670: DDE: Botschaft (Drehmoment Getriebe, 0xB5) |
| 0x4F77 | 4F77 gs19a/gs19b: EGS: Fehlerhafter Positiver Motoreingriff |
| 0x5140 | 5140 gs19/gs19a: EGS: Botschaft von der Motorsteuerung fehlt |
| 0x5141 | 5141 gs19/gs19a: EGS: Botschaft von der Dynamischen Stabilitäts-Control fehlt |
| 0x5142 | 5142 gs19/gs19a: EGS: Botschaft von der Instrumentenkombination fehlt |
| 0x5143 | 5143 gs19/gs19a: EGS: Botschaft vom Active Cruise Control fehlt |
| 0x5144 | 5144 gs19/gs19a: EGS: Botschaft vom Car Access System fehlt |
| 0x5145 | 5145 gs19/gs19a: EGS: Botschaft von der Parkbremse fehlt |
| 0x5146 | 5146 gs19/gs19a: EGS: Botschaft vom Satellit Sitz Fahrer fehlt |
| 0x5147 | 5147 gs19/gs19a: EGS: Botschaft vom Schaltzentrum Lenksäule fehlt |
| 0x5149 | 5149 gs19/gs19a: EGS: Botschaft vom Powermodul fehlt |
| 0x5150 | 5150 gs19/gs19a: EGS: Botschaft vom Anhängermodul fehlt |
| 0x51A5 | 51A5 gs19/gs19a/gs19b: EGS: Botschaft (Momentenschnittstelle) von der Motorsteuerung fehlt |
| 0x51A7 | 51A7 gs19/gs19a/gs19b: EGS: Botschaft (Motordrehzahl) von der Motorsteuerung fehlt |
| 0x51A8 | 51A8 gs19/gs19a/gs19b: EGS: Botschaft (Drosselklappe/Fahrpedal) von der Motorsteuerung fehlt |
| 0x51AA | 51AA gs19/gs19a/gs19b: EGS: Botschaft (Positionsinfo) vom Schaltzentrum Lenksäule fehlt |
| 0x51AB | 51AB gs19/gs19a/gs19b: EGS: Botschaft (P-Taster) fehlt |
| 0x51AD | 51AD gs19a/gs19b: Getriebesteuerung: Botschaft von der Dynamischen Stabilitäts-Control fehlt |
| 0x51AE | 51AE gs19/gs19a/gs19b: EGS: Botschaft (Bremslichtschalter) von der Motorsteuerung fehlt |
| 0x5EC6 | 5EC6 dsc_e65: DSC: Botschaft vom Steuergerät EGS fehlt |
| 0x5EC7 | 5EC7 dsc_e65: DSC: Botschaft vom Steuergerät DME/DDE (DMER1) fehlt |
| 0x5ED1 | 5ED1 dsc_e65: DSC: Botschaft vom Steuergerät DME/DDE (DMER2) fehlt |
| 0x5EE7 | 5EE7 dsc_e65: DSC: Botschaft vom Steuergerät SZL (Lenkwinkel) fehlt |
| 0x5EFB | 5EFB dsc_e65: DSC: Botschaft vom Steuergerät DME/DDE (Quittierung ASC) fehlt |
| 0x5F06 | 5F06 dsc_e65: DSC: Botschaft vom Steuergerät Aktive Geschwindigkeitsregelung fehlt |
| 0x5F0D | 5F0D dsc_e65: DSC: Botschaft vom Steuergerät DME/DDE (DMER3) fehlt |
| 0x5F12 | 5F12 dsc_e65: DSC: Botschaft vom Steuergerät Parkbremse fehlt |
| 0x5F13 | 5F13 dsc_e65: DSC: Botschaft vom Steuergerät Dynamic Drive fehlt |
| 0x5F14 | 5F14 dsc_e65: DSC: Botschaft vom Steuergerät CAS fehlt |
| 0x5F15 | 5F15 dsc_e65: DSC: Botschaft vom Steuergerät Instrumentenkombination fehlt |
| 0x5FFF | 5FFF edck65: EDC: CAN-Klemmenstatus: Timeout oder ungueltig |
| 0x9327 | 9327 komb65_2/kombi65: KOMBI: Zentrales Gateway Modul (ZGM) Netzwerkstörung |
| 0x9328 | 9328 zgm_e65: ZGM/SGM-ZGM: K-CAN Kommunikationsfehler |
| 0x9329 | 9329 zgm_e65: ZGM/SGM-ZGM: PT-CAN Kommunikationsfehler |
| 0x932A | 932A zgm_e65: ZGM/SGM-ZGM: BYTEFLIGHT Kommunikationsfehler |
| 0x93AD | 93AD sim: SIM: Botschaft (1) vom Satellit Tür vorn links fehlt |
| 0x93AF | 93AF sim: SIM: Botschaft (3) vom Satellit Tür vorn rechts fehlt |
| 0x93B0 | 93B0 sgm_60_2: SGM-SIM: Botschaft (3) vom Türmodul vorn links bzw. Satellit Tür vorn rechts (E60) fehlt |
| 0x93B1 | 93B1 sim: SIM: Botschaft (5) vom Satellit B-Säule links fehlt |
| 0x93B7 | 93B7 sim: SIM: Botschaft (B) vom Satellit A-Säule links fehlt |
| 0x93BA | 93BA sgm_60_2: SGM-SIM: Botschaft (D) vom Satellit Fahrzeugzentrum fehlt |
| 0x93BF | 93BF sim: SIM: Botschaft (43) vom Zentralen Gateway-Modul fehlt |
| 0x93C0 | 93C0 sgm_60_2: SGM-SIM: Botschaft (22) vom Satellit Sitz hinten fehlt |
| 0x93C3 | 93C3 sgm_60_2: SGM-SIM: Botschaft (43) von der Motorsteuerung fehlt |
| 0x93CF | 93CF sgm_60_2: SGM-SIM: Botschaft (Geschwindigkeit) von Dynamische Stabilitäts-Control fehlerhaft |
| 0x93D0 | 93D0 sgm_60_2: SGM-SIM: Botschaft (Klemme 15) vom Car Acces System fehlerhaft |
| 0x93D1 | 93D1 sgm_60_2: SGM-SIM: Botschaft von der Motorsteuerung fehlerhaft |
| 0x93D2 | 93D2 sgm_60_2: SGM-SIM: Botschaft vom Satellit B-Säule rechts fehlerhaft |
| 0x94BA | 94BA szl: SZL: Botschaft (D) vom Satellit Fahrzeugzentrum fehlt |
| 0x94BD | 94BD szl: SZL: Botschaft (20) vom Satellit Sitz Fahrer (E65,E66,E67,RR01) bzw. Satellit B-Säule links (E60,E61,E63,E64) fehlt |
| 0x94C0 | 94C0 szl: SZL: Botschaft (71) vom Sicherheits- Informationsmodul bzw. Sicherheits- und Gateway-Modul fehlt |
| 0x9531 | 9531 sasl: SASL: Botschaft (5) vom Satellit B-Säule links fehlt |
| 0x9533 | 9533 sasl: SASL: Botschaft (7) vom Satellit B-Säule rechts fehlt |
| 0x9534 | 9534 sasl: SASL: Botschaft (8) vom Satellit A-Säule rechts fehlt |
| 0x9535 | 9535 sasl: SASL: Botschaft (9) vom Satellit Fahrzeugzentrum fehlt |
| 0x9538 | 9538 sasl: SASL: Botschaft (C) vom Satellit A-Säule rechts fehlt |
| 0x9539 | 9539 sasl: SASL: Botschaft (D) vom Satellit Fahrzeugzentrum fehlt |
| 0x953C | 953C sasl: SASL: Botschaft (20) vom Satellit Sitz Fahrer fehlt |
| 0x953D | 953D sasl: SASL: Botschaft (21) vom Satellit Sitz Beifahrer fehlt |
| 0x953F | 953F sasl: SASL: Botschaft (71) vom Sicherheits- Informationsmodul fehlt |
| 0x95B1 | 95B1 sasr: SASR: Botschaft (5) vom Satellit B-Säule links fehlt |
| 0x95B3 | 95B3 sasr: SASR: Botschaft (7) vom Satellit B-Säule rechts fehlt |
| 0x95B7 | 95B7 sasr: SASR: Botschaft (B) vom Satellit A-Säule links fehlt |
| 0x95B9 | 95B9 sasr: SASR: Botschaft (D) vom Satellit Fahrzeugzentrum fehlt |
| 0x95BC | 95BC sasr: SASR: Botschaft (20) vom Satellit Sitz Fahrer fehlt |
| 0x95BD | 95BD sasr: SASR: Botschaft (21) vom Satellit Sitz Beifahrer fehlt |
| 0x95BF | 95BF sasr: SASR: Botschaft (71) vom Sicherheits- Informationsmodul fehlt |
| 0x9631 | 9631 stvl: STVL: Botschaft (5) vom Satellit B-Säule links fehlt |
| 0x9633 | 9633 stvl: STVL: Botschaft (7) vom Satellit B-Säule rechts fehlt |
| 0x9636 | 9636 stvl: STVL: Botschaft (A) vom Sicherheits- Informationsmodul fehlt |
| 0x9637 | 9637 stvl: STVL: Botschaft (B) vom Satellit A-Säule links fehlt |
| 0x9639 | 9639 stvl: STVL: Botschaft (D) vom Satellit Fahrzeugzentrum fehlt |
| 0x963C | 963C stvl: STVL: Botschaft (20) vom Satellit Sitz Fahrer fehlt |
| 0x963D | 963D stvl: STVL: Botschaft (21) vom Satellit Sitz Beifahrer fehlt |
| 0x963F | 963F stvl: STVL: Botschaft (71) vom Sicherheits- Informationsmodul fehlt |
| 0x96B1 | 96B1 stvr: STVR: Botschaft (5) vom Satellit B-Säule links fehlt |
| 0x96B3 | 96B3 stvr: STVR: Botschaft (7) vom Satellit B-Säule rechts fehlt |
| 0x96B6 | 96B6 stvr: STVR: Botschaft (A) vom Sicherheits- Informationsmodul fehlt |
| 0x96B7 | 96B7 stvr: STVR: Botschaft (B) vom Satellit A-Säule links fehlt |
| 0x96B9 | 96B9 stvr: STVR: Botschaft (D) vom Satellit Fahrzeugzentrum fehlt |
| 0x96BC | 96BC stvr: STVR: Botschaft (20) vom Satellit Sitz Fahrer fehlt |
| 0x96BD | 96BD stvr: STVR: Botschaft (21) vom Satellit Sitz Beifahrer fehlt |
| 0x96BF | 96BF stvr: STVR: Botschaft (71) vom Sicherheits- Informationsmodul fehlt |
| 0x9731 | 9731 ssfa: SSFA: Botschaft (5) vom Satellit B-Säule links fehlt |
| 0x9733 | 9733 ssfa: SSFA: Botschaft (7) vom Satellit B-Säule rechts fehlt |
| 0x9737 | 9737 ssfa: SSFA: Botschaft (B) vom Satellit A-Säule links fehlt |
| 0x9739 | 9739 ssfa: SSFA: Botschaft (D) vom Satellit Fahrzeugzentrum fehlt |
| 0x973D | 973D ssfa: SSFA: Botschaft (21) vom Satellit Sitz Beifahrer fehlt |
| 0x973F | 973F ssfa: SSFA: Botschaft (71) vom Sicherheits- Informationsmodul fehlt |
| 0x97B1 | 97B1 ssbf: SSBF: Botschaft (5) vom Satellit B-Säule links fehlt |
| 0x97B3 | 97B3 ssbf: SSBF: Botschaft (7) vom Satellit B-Säule rechts fehlt |
| 0x97B7 | 97B7 ssbf: SSBF: Botschaft (B) vom Satellit A-Säule links fehlt |
| 0x97B9 | 97B9 ssbf: SSBF: Botschaft (D) vom Satellit Fahrzeugzentrum fehlt |
| 0x97BC | 97BC ssbf: SSBF: Botschaft (20) vom Satellit Sitz Fahrer fehlt |
| 0x97BF | 97BF ssbf: SSBF: Botschaft (71) vom Sicherheits- Informationsmodul fehlt |
| 0x982F | 982F sbsl: SBSL: Botschaft (3) vom Satellit Tür vorn rechts fehlt |
| 0x9833 | 9833 sbsl: SBSL: Botschaft (7) vom Satellit B-Säule rechts fehlt |
| 0x9835 | 9835 sbsl: SBSL: Botschaft (9) vom Satellit Fahrzeugzentrum fehlt |
| 0x9837 | 9837 sbsl: SBSL: Botschaft (B) vom Satellit A-Säule links fehlt |
| 0x9838 | 9838 sbsl: SBSL: Botschaft (C) vom Satellit A-Säule rechts fehlt |
| 0x9839 | 9839 sbsl: SBSL: Botschaft (D) vom Satellit Fahrzeugzentrum fehlt |
| 0x983D | 983D sbsl: SBSL: Botschaft (21) vom Satellit Sitz Beifahrer fehlt |
| 0x983F | 983F sbsl: SBSL: Botschaft (71) vom Sicherheits- Informationsmodul fehlt |
| 0x98AD | 98AD sbsr: SBSR: Botschaft (1) vom Satellit Tür vorn links fehlt |
| 0x98B1 | 98B1 sbsr: SBSR: Botschaft (5) vom Satellit B-Säule links fehlt |
| 0x98B5 | 98B5 sbsr: SBSR: Botschaft (9) vom Satellit Fahrzeugzentrum fehlt |
| 0x98B7 | 98B7 sbsr: SBSR: Botschaft (B) vom Satellit A-Säule links fehlt |
| 0x98B9 | 98B9 sbsr: SBSR: Botschaft (D) vom Satellit Fahrzeugzentrum fehlt |
| 0x98BC | 98BC sbsr: SBSR: Botschaft (20) vom Satellit Sitz Fahrer fehlt |
| 0x98BD | 98BD sbsr: SBSR: Botschaft (21) vom Satellit Sitz Beifahrer fehlt |
| 0x98BF | 98BF sbsr: SBSR: Botschaft (71) vom Sicherheits- Informationsmodul fehlt |
| 0x9A31 | 9A31 ssh: SSH: Botschaft (5) vom Satellit B-Säule links fehlt |
| 0x9A33 | 9A33 ssh: SSH: Botschaft (7) vom Satellit B-Säule rechts fehlt |
| 0x9A37 | 9A37 ssh: SSH: Botschaft (B) vom Satellit A-Säule links fehlt |
| 0x9A39 | 9A39 ssh: SSH: Botschaft (D) vom Satellit Fahrzeugzentrum fehlt |
| 0x9A3C | 9A3C ssh: SSH: Botschaft (20) vom Satellit Sitz Fahrer fehlt |
| 0x9A3D | 9A3D ssh: SSH: Botschaft (21) vom Satellit Sitz Beifahrer fehlt |
| 0x9A3F | 9A3F ssh: SSH: Botschaft vom Sicherheits- Informationsmodul fehlt |
| 0x9AB7 | 9AB7 sfz: SFZ: Botschaft (B) vom Satellit A-Säule links fehlt |
| 0x9AB8 | 9AB8 sfz: SFZ: Botschaft (C) vom Satellit A-Säule rechts fehlt |
| 0x9ABF | 9ABF sfz: SFZ: Botschaft (71) vom Sicherheits- Informationsmodul fehlt |
| 0x9C84 | 9C84 ihka65: IHKA: Botschaft (Wegstrecke) von der Instrumentenkombination fehlt |
| 0x9C85 | 9C85 ihka65: IHKA: Botschaft (Klemmenstatus) vom Car Access System fehlt |
| 0x9C88 | 9C88 ihka65: IHKA: Botschaft (Relativzeit) von der Instrumentenkombination fehlt |
| 0x9C90 | 9C90 ihka65: IHKA: Botschaft (Motor läuft) von der DME fehlt |
| 0x9C92 | 9C92 ihka65: IHKA: Botschaft (Außentemperatur) von der Instrumentenkombination fehlt |
| 0x9C93 | 9C93 ihka65: IHKA: Botschaft (Fahrzeuggeschwindigkeit) von der Dynamischen Stabilitäts-Control fehlt |
| 0x9C94 | 9C94 ihka65: IHKA: Botschaft (Kühlmitteltemperatur) von der DME fehlt |
| 0x9C95 | 9C95 ihka65: IHKA: Botschaft (Motordrehzahl) von der DME fehlt |
| 0x9C96 | 9C96 ihka65: IHKA: Botschaft (Dimmerstellung) vom Lichtmodul fehlt |
| 0x9C97 | 9C97 ihka65: IHKA: Botschaft (Batteriespannung) vom Powermodul fehlt |
| 0x9C98 | 9C98 ihka65: IHKA: Botschaft vom Stand-Zuheizgerät fehlt |
| 0x9C9F | 9C9F ihkarr: IHKA: Botschaft (Kühlmitteltemperatur) von der DME fehlt |
| 0x9CA6 | 9CA6 ihkarr: IHKA: Botschaft (Wegstrecke) von der Instrumentenkombination fehlt |
| 0x9CA7 | 9CA7 ihkarr: IHKA: Botschaft (Klemmenstatus) vom Car Access System fehlt |
| 0x9CC6 | 9CC6 lm_ahl_2: LM: Alive-Signal vom AHL-System fehlt |
| 0xA3A8 | A3A8 komb65_2/kombi65/kombrr/kombrr_2: KOMBI: CAN Komunikationsstörung |
| 0xA3AA | A3AA komb65_2/kombrr/kombrr_2: KOMBI: Botschaft von Getriebesteuerung fehlt |
| 0xA3AB | A3AB komb65_2/kombi65/kombrr/kombrr_2: KOMBI: Botschaft vom Active Cruise Control fehlt |
| 0xA3AD | A3AD komb65_2/kombi65/kombrr/kombrr_2: KOMBI: Botschaft von DME fehlt |
| 0xA3AE | A3AE komb65_2/kombi65: KOMBI: Botschaft (Drehzahl) von DME fehlt |
| 0xA3AF | A3AF komb65_2/kombi65/kombrr/kombrr_2: KOMBI: Botschaft von DME fehlt |
| 0xA3B0 | A3B0 komb65_2/kombi65/kombrr/kombrr_2: KOMBI: Botschaft (Dimmerstellung) vom Lichtmodul fehlt |
| 0xA3B1 | A3B1 komb65_2/kombi65/kombrr/kombrr_2: KOMBI: Botschaft (Blinkerzyklus) vom Lichtmodul fehlt |
| 0xA3B2 | A3B2 komb65_2/kombi65/kombrr/kombrr_2: KOMBI: Botschaft (Klemmenstatus) vom Car Access System fehlt |
| 0xA3B3 | A3B3 komb65_2/kombi65/kombrr/kombrr_2: KOMBI: Botschaft von Aktive Rollstabilisierung fehlt |
| 0xA3B4 | A3B4 komb65_2/kombi65/kombrr/kombrr_2: KOMBI: Botschaft (Lampenzustand) vom Lichtmodul fehlt |
| 0xA3B5 | A3B5 komb65_2/kombi65/kombrr/kombrr_2: KOMBI: Botschaft vom Powermodul fehlt |
| 0xA3B6 | A3B6 komb65_2/kombi65/kombrr/kombrr_2: KOMBI: Botschaft vom Car Access System fehlt |
| 0xA3B7 | A3B7 komb65_2/kombi65/kombrr/kombrr_2: KOMBI: Botschaft vom Anhängermodul fehlt |
| 0xA3B8 | A3B8 komb65_2/kombi65/kombrr/kombrr_2: KOMBI: Botschaft von Dämpfer-Control fehlt |
| 0xA3B9 | A3B9 komb65_2/kombi65/kombrr/kombrr_2: KOMBI: Botschaft von Dynamische Stabilitäts-Control fehlt |
| 0xA3BA | A3BA komb65_2/kombi65/kombrr/kombrr_2: KOMBI: Botschaft von Parkbremse fehlt |
| 0xA3BB | A3BB komb65_2/kombi65/kombrr/kombrr_2: KOMBI: Botschaft (Türenstatus) vom Car Access System fehlt |
| 0xA3BC | A3BC komb65_2/kombi65/kombrr/kombrr_2: KOMBI: CAN Komunikationsstörung |
| 0xA3BD | A3BD komb65_2/kombi65/kombrr/kombrr_2: KOMBI: Botschaft vom Zentrales Gateway Modul fehlt |
| 0xA3BE | A3BE komb65_2/kombi65/kombrr/kombrr_2: KOMBI: Botschaft vom Car Access System fehlt |
| 0xA3BF | A3BF komb65_2/kombi65/kombrr/kombrr_2: KOMBI: Botschaft vom Chassis Integration Module fehlt |
| 0xA3C0 | A3C0 komb65_2/kombi65/kombrr/kombrr_2: KOMBI: Botschaft vom Anhängermodul fehlt |
| 0xA3C1 | A3C1 komb65_2/kombrr/kombrr_2: KOMBI: Botschaft vom Lichtmodul fehlt |
| 0xA3C2 | A3C2 komb65_2/kombi65/kombrr/kombrr_2: KOMBI: Botschaft vom Powermodul fehlt |
| 0xA3C3 | A3C3 komb65_2/kombi65/kombrr/kombrr_2: KOMBI: Botschaft vom Reifendruck-Control fehlt |
| 0xA3C4 | A3C4 kombi65: KOMBI: Sicherheitsfahrzeug 1 |
| 0xA3C6 | A3C6 komb65_2/kombi65/kombrr/kombrr_2: KOMBI: Botschaft vom Wischermodul fehlt |
| 0xA3C7 | A3C7 komb65_2/kombi65/kombrr/kombrr_2: KOMBI: Botschaft von Höhenstands-Control (EHC) fehlt |
| 0xA548 | A548 komb65_2/kombi65: KOMBI: Botschaft (Geschwindigkeit) von Dynamische Stabilitäts-Control fehlt |
| 0xA54A | A54A komb65_2/kombi65/kombrr_2: KOMBI: Botschaft (Wegstrecke) von Dynamische Stabilitäts-Control fehlt |
| 0xA54B | A54B kombrr/kombrr_2: KOMBI: Botschaft (Drehmoment) von der DME fehlt |
| 0xA60A | A60A ihkarr: IHKA: Botschaft (Relativzeit) von der Instrumentenkombination fehlt |
| 0xA612 | A612 ihkarr: IHKA: Botschaft (Motor läuft) von der DME fehlt |
| 0xA614 | A614 ihkarr: IHKA: Botschaft (Außentemperatur) von der Instrumentenkombination fehlt |
| 0xA615 | A615 ihkarr: IHKA: Botschaft (Fahrzeuggeschwindigkeit) von der Dynamischen Stabilitäts-Control fehlt |
| 0xA617 | A617 ihkarr: IHKA: Botschaft (Motordrehzahl) von der DME fehlt |
| 0xA618 | A618 ihkarr: IHKA: Botschaft (Dimmerstellung) vom Lichtmodul fehlt |
| 0xA619 | A619 ihkarr: IHKA: Botschaft (Batteriespannung) vom Powermodul fehlt |
| 0xA61A | A61A ihkarr: IHKA: Botschaft vom Stand-Zuheizgerät fehlt |
| 0xA752 | A752 nve_65: NVE: Botschaft (Lenkradwinkel, 0C4) |
| 0xA753 | A753 nve_65: NVE: Botschaft (Klemmenstatus, 130) |
| 0xA754 | A754 nve_65: NVE: Botschaft (Geschwindigkeit, 1A0) |
| 0xA755 | A755 nve_65: NVE: Botschaft (Fahrzeugneigung, 306) |
| 0xA756 | A756 nve_65: NVE: Botschaft (Außentemperatur, 2CA) |
| 0xA757 | A757 nve_65: NVE: Botschaft (Fahrlicht, 314) |
| 0xA758 | A758 nve_65: NVE: Botschaft (Kilometerstand/Reichweite, 330) |
| 0xA759 | A759 nve_65: NVE: Botschaft (Beleuchtungszustand, 21A) |
| 0xA75E | A75E nve_65: NVE: CAN Komunikationsstörung |
| 0xA760 | A760 nve_65: NVE: CAN Komunikationsstörung |
| 0xA761 | A761 nve_65: NVE: Botschaft (Funkschlüssel, 23A) |
| 0xA762 | A762 nve_65: NVE: CAN Komunikationsstörung |
| 0xCD87 | CD87 d62m57b0/d63mm670/d63sm670/n62_tue/n62_tue2/n73_r0/n73h_r0/n73tu_r0/n73h_l0/me9e65_6/me9n62/me9n62_2/ms450ds0/msv70: DDE: PT-CAN Kommunikationsfehler |
| 0xCD8B | CD8B d50m57a0/d51mm670/d51sm670/msv70: DDE: PT-CAN-Bus Kommunikationsfehler |
| 0xCD8F | CD8F msv70: DME: PT-CAN Kommunikationsfehler |
| 0xCD94 | CD94 ms450ds0/msv70: DME: Botschaft (Außentemperatur/Relativzeit, 310) |
| 0xCD95 | CD95 ms450ds0/msv70: DME: Botschaft (Bedienung Tempomat/ACC, 194) |
| 0xCD96 | CD96 ms450ds0/msv70: DME: Botschaft (Drehmomentanforderung ACC, B7) |
| 0xCD98 | CD98 ms450ds0/msv70: DME: Botschaft (Drehmomentanforderung DSC, B6) |
| 0xCD99 | CD99 ms450ds0/msv70: DME: Botschaft (Drehmomentanforderung EGS, B5) |
| 0xCD9A | CD9A msv70: DME: Botschaft (Drehmomentanforderung SMG, BD) |
| 0xCD9C | CD9C ms450ds0/msv70: DME: Botschaft (Geschwindigkeit, 1A0) |
| 0xCD9D | CD9D ms450ds0/msv70: DME: Botschaft (Getriebedaten, BA) |
| 0xCD9E | CD9E msv70: DME: Botschaft (Getriebedaten 2, 1A2) |
| 0xCD9F | CD9F ms450ds0/msv70: DME: Botschaft (Kilometerstand/Reichweite, 330) |
| 0xCDA0 | CDA0 ms450ds0/msv70: DME: Botschaft (Klemmenstatus, 130) |
| 0xCDA1 | CDA1 me9n62_2/ms450ds0/msv70/n62_tue/n62_tue2: DME: Botschaft (Lenkradwinkel, C4) |
| 0xCDA2 | CDA2 me9n62_2/ms450ds0/msv70/n62_tue/n62_tue2: DME: Botschaft (Powermanagement Batteriespannung, 3B4) |
| 0xCDA3 | CDA3 me9n62_2/ms450ds0/msv70/n62_tue/n62_tue2: DME: Botschaft (Powermanagement Ladespannung, 334) |
| 0xCDA4 | CDA4 ms450ds0/msv70: DME: Botschaft (Status ARS-Modul, 1AC) |
| 0xCDA5 | CDA5 ms450ds0/msv70: DME: Botschaft (Status DSC, 19E) |
| 0xCDA6 | CDA6 ms450ds0/msv70: DME: Botschaft (Status EKP, 335) |
| 0xCDA7 | CDA7 me9n62_2/msv70/n62_tue/n62_tue2: DME: Botschaft (Status Rückwärtsgang, 3B0) |
| 0xCDA8 | CDA8 ms450ds0/msv70: DME: Botschaft (Status KOMBI, 1B4) |
| 0xCDA9 | CDA9 ms450ds0/msv70: DME: Botschaft (Klimaanforderung, 1B5) |
| 0xCDAA | CDAA me9n62_2/msv70/n62_tue/n62_tue2: DME: Botschaft (Status Crashabschaltung EKP, 135) |
| 0xCDAB | CDAB msv70: DME: Botschaft (Lampenzustand, 21A) |
| 0xCDAC | CDAC msv70/n62_tue/n62_tue2: DME: Botschaft (Status Wasserventil, 3B5) |
| 0xCDAE | CDAE msv70: DME: Botschaft (Uhrzeit/Datum, 2F8) |
| 0xCDAF | CDAF msv70: DME: Botschaft (Status Anhänger, 2E4) |
| 0xCDB0 | CDB0 msv70/n62_tue2: DME: Botschaft (Anzeige Getriebedaten, 1D2) |
| 0xCDB7 | CDB7 n62_tue2/n73tu_r0: DME: Botschaft (OBD-Sensor Diagnosestatus, 5E0) |
| 0xCDC7 | CDC7 d62m57b0/d63mm670/d63sm670/n73tu_r0: DDE: PT-CAN Kommunikationsfehler |
| 0xCDDD | CDDD n73h_r0/n73tu_r0/n73h_l0: DME: Botschaft (Getriebedaten, BA) |
| 0xCDE0 | CDE0 n73tu_r0: DME: Botschaft (Klemmenstatus, 130) |
| 0xCDEB | CDEB n62_tue/n62_tue2: DME: Botschaft (Lampenzustand, 21A) |
| 0xCDEE | CDEE n62_tue/n62_tue2: DME: Botschaft (Uhrzeit/Datum, 2F8) |
| 0xCDEF | CDEF n62_tue/n62_tue2: DME: Botschaft (Status Anhänger, 2E4) |
| 0xCDF9 | CDF9 n62_tue2: DME: Botschaft (Status EMF, 201) |
| 0xCDFA | CDFA n62_tue2: DME: Botschaft (Stellanforderung EMF, 1A7) |
| 0xCE15 | CE15 cem_68: CE: Botschaft (Drehmoment 3, AA) |
| 0xCE16 | CE16 cem_68: CE: Botschaft (Klemmenstatus, 130) |
| 0xCE18 | CE18 cem_68: CE: Botschaft (Geschwindigkeit, 1A0) |
| 0xCE19 | CE19 cem_68: CE: Botschaft (Zentralverriegelung, 2FC) |
| 0xCE1A | CE1A cem_68: CE: Botschaft (Verzögerungsanforderung EMF, AE) |
| 0xCE1B | CE1B cem_68: CE: Botschaft (Motordaten, 1D0) |
| 0xCE1C | CE1C cem_68: CE: Botschaft (Getriebedaten, BA) |
| 0xCE1D | CE1D cem_68: CE: Botschaft (Kilometerstand, 330) |
| 0xCE26 | CE26 cem_68: CE: Botschaft (Radio / Telefon Taste, 1D6) |
| 0xCF07 | CF07 gs19/gs19a/gs19b: EGS: Kommunikationsfehler: PT-CAN |
| 0xCF14 | CF14 gs19b: EGS: Botschaft von der Motorsteuerung fehlt |
| 0xCF15 | CF15 gs19b: EGS: Botschaft von der Motorsteuerung fehlt |
| 0xCF16 | CF16 gs19b: EGS: Botschaft von der Motorsteuerung fehlt |
| 0xCF17 | CF17 gs19b: EGS: Botschaft von der Motorsteuerung fehlt |
| 0xCF18 | CF18 gs19b: EGS: Botschaft von der Motorsteuerung fehlt |
| 0xCF19 | CF19 gs19b: Getriebesteuerung: Botschaft vom DSC fehlt |
| 0xCF1A | CF1A gs19b: Getriebesteuerung: Botschaft vom DSC fehlt |
| 0xCF1B | CF1B gs19b: Getriebesteuerung: Botschaft vom DSC fehlt |
| 0xCF1C | CF1C gs19b: EGS: Botschaft vom DSC fehlt |
| 0xCF1D | CF1D gs19b: Getriebesteuerung: Botschaft vom DSC fehlt |
| 0xCF1E | CF1E gs19b: EGS: Botschaft vom DSC fehlt |
| 0xCF1F | CF1F gs19b: Getriebesteuerung: Botschaft vom CAS fehlt |
| 0xCF20 | CF20 gs19b: EGS: Botschaft vom CAS fehlt |
| 0xCF21 | CF21 gs19b: Getriebesteuerung: Botschaft vom KOMBI fehlt |
| 0xCF22 | CF22 gs19b: EGS: Botschaft vom KOMBI fehlt |
| 0xCF23 | CF23 gs19b: EGS: Botschaft vom KOMBI fehlt |
| 0xCF24 | CF24 gs19b: EGS: Botschaft von der EMF fehlt |
| 0xCF25 | CF25 gs19b: EGS: Botschaft vom Satellit Sitz Fahrer fehlt |
| 0xCF26 | CF26 gs19b: EGS: Botschaft vom ACC fehlt |
| 0xCF27 | CF27 gs19b: EGS: Botschaft vom SZL fehlt |
| 0xCF28 | CF28 gs19b: EGS: Botschaft vom PM fehlt |
| 0xCF29 | CF29 gs19b: EGS: Botschaft vom AHM fehlt |
| 0xD104 | D104 rdc_can/rdc_e65: RDC: K-CAN Leitungsfehler |
| 0xD107 | D107 rdc_can/rdc_e65: RDC: K-CAN Kommunikationsfehler |
| 0xD13E | D13E rdc_can/rdc_e65: RDC: Fehler Botschaft vom Steuergerät |
| 0xD147 | D147 acc_e65: ACC: PT-CAN Kommunikationsfehler |
| 0xD187 | D187 alc_60: AHL: PT-CAN Kommunikationsfehler |
| 0xD1C7 | D1C7 ars_60/ars_70/ars_e65: ARS: PT-CAN Kommunikationsfehler |
| 0xD1DF | D1DF ars_60/ars_e65: ARS: Botschaft (Fahrzeuggeschwindigkeit) von DSC |
| 0xD1E0 | D1E0 ars_60/ars_e65: ARS: Botschaft (Außentemperatur) vom Kombi |
| 0xD1E1 | D1E1 ars_60/ars_e65: ARS: Botschaft (Kühlwassertemperatur) von DME |
| 0xD1E2 | D1E2 ars_60/ars_e65: ARS: Botschaft (Klemme 15) vom CAS |
| 0xD1E3 | D1E3 ars_60/ars_e65: ARS: Botschaft (Klemme 50) vom CAS |
| 0xD1E4 | D1E4 ars_60: ARS: Botschaft (Lenkraddrehwinkel, C4) |
| 0xD1E5 | D1E5 ars_60: ARS: Botschaft (Motordrehzahl, AA) |
| 0xD1E8 | D1E8 ars_e65: ARS: Botschaft (Lenkradwinkeländerung) vom Schaltzentrum Lenksäule |
| 0xD1E9 | D1E9 ars_e65: ARS: Botschaft (Fahrgestellnummer) vom CAS |
| 0xD1EB | D1EB ars_60/ars_e65: ARS: Botschaft (Kilometerstand) vom Kombi |
| 0xD1ED | D1ED ars_60/ars_e65: ARS: Botschaft (Status DSC) vom DSC |
| 0xD1F1 | D1F1 ars_60: ARS: Botschaft (Geschwindigkeit, 1A0) |
| 0xD1F2 | D1F2 ars_60: ARS: Botschaft (Klemmenstatus, 130) |
| 0xD204 | D204 cvm_64: CVM: K-CAN Leitungsfehler |
| 0xD205 | D205 cvm_64: CVM: K-CAN Kommunikationsfehler |
| 0xD206 | D206 cvm_64: CVM: Botschaft von der Instrumentenkombination fehlt |
| 0xD207 | D207 cvm_64: CVM: Botschaft von der Instrumentenkombination fehlt |
| 0xD208 | D208 cvm_64: CVM: Botschaft vom Car Access System fehlerhaft |
| 0xD209 | D209 cvm_64: CVM: Botschaft von der Instrumentenkombination fehlt |
| 0xD2C4 | D2C4 pgs_65_2/pgs_e65: CA: K-CAN Leitungsfehler |
| 0xD2C7 | D2C7 pgs_65_2/pgs_e65: CA: K-CAN Kommunikationsfehler |
| 0xD347 | D347 dsc_e65: DSC: PT-CAN Kommunikationsfehler |
| 0xD387 | D387 emf_e65: EMF: Pt-CAN Kommunikationsfehler |
| 0xD584 | D584 mmifc: SG-FD-GW: K-CAN Leitungsfehler |
| 0xD587 | D587 mmifc: SG-FD-GW: K-CAN Kommunikationsfehler |
| 0xD704 | D704 ehc2rr/ehc_e65: EHC: K-CAN Leitungsfehler |
| 0xD707 | D707 ehc2rr/ehc_e65: EHC: K-CAN Kommunikationsfehler |
| 0xD710 | D710 ehc_e65: EHC: Botschaft (Status Zentralverriegelung, 2FC) |
| 0xD711 | D711 ehc_e65: EHC: Botschaft (Motordaten, 1D0) |
| 0xD712 | D712 ehc_e65: EHC: Botschaft (Geschwindigkeit, 1A0) |
| 0xD713 | D713 ehc_e65: EHC: Botschaft (Klemmenstatus, 130) |
| 0xD747 | D747 edc_k/edck65: EDC: Pt-CAN Kommunikationsfehler |
| 0xD907 | D907 cas/cas_rr: CAS: K-CAN Kommunikationsfehler |
| 0xD944 | D944 dwa_63/dwa_e65: DWA: K-CAN Leitungsfehler |
| 0xD947 | D947 dwa_63/dwa_e65: DWA: K-CAN Kommunikationsfehler |
| 0xD984 | D984 cim/cim_2: CIM: K-CAN Leitungsfehler |
| 0xD987 | D987 cim/cim_2: CIM: K-CAN Kommunikationsfehler |
| 0xD98A | D98A cim_2: CIM: Botschaft vom Powermodul fehlt |
| 0xD98B | D98B cim_2: CIM: Botschaft vom Car Access System fehlt |
| 0xD98C | D98C cim_2: CIM: Botschaft vom Car Access System fehlt |
| 0xD98D | D98D cim_2: CIM: Botschaft von der Dynamischen Stabilitäts-Control fehlt |
| 0xD98E | D98E cim_2: CIM: Botschaft von der Dynamischen Stabilitäts-Control fehlt |
| 0xD990 | D990 cim_2: CIM: Botschaft von der Motorsteuerung fehlt |
| 0xD991 | D991 cim_2: CIM: Botschaft von der Dämpfer-Control fehlt |
| 0xD992 | D992 cim_2: CIM: Botschaft von der Dämpfer-Control fehlt |
| 0xD993 | D993 cim_2: CIM: Botschaft von der Instrumentenkombination fehlt |
| 0xD994 | D994 cim_2: CIM: Botschaft von der Instrumentenkombination fehlt |
| 0xD995 | D995 cim_2: CIM: Botschaft vom Schaltzentrum Lenksäule fehlt |
| 0xD996 | D996 cim_2: CIM: Botschaft vom Schaltzentrum Lenksäule fehlt |
| 0xD997 | D997 cim_2: CIM: Botschaft vom Control Display fehlt |
| 0xD9C4 | D9C4 pow_65_2/pow_65_3/pow_e65: PM: K-CAN Leitungsfehler |
| 0xD9C7 | D9C7 pow_65_2/pow_65_3/pow_e65: PM: K-CAN Kommunikationsfehler |
| 0xDA04 | DA04 sd_kwp/shd_e65: SHD: K-CAN Leitungsfehler |
| 0xDA07 | DA07 sd_kwp/shd_e65: SHD: K-CAN Kommunikationsfehler |
| 0xDA84 | DA84 wim_e65: WM: K-CAN Leitungsfehler |
| 0xDA87 | DA87 wim_e65: WM: K-CAN Kommunikationsfehler |
| 0xDC04 | DC04 tmf_e65: TMFA: K-CAN Leitungsfehler |
| 0xDC07 | DC07 tmf_e65: TMFA: K-CAN Kommunikationsfehler |
| 0xDC44 | DC44 tmb_e65: TMBF: K-CAN Leitungsfehler |
| 0xDC47 | DC47 tmb_e65: TMBF: K-CAN Kommunikationsfehler |
| 0xDC84 | DC84 tmfhe65: TMFAH: K-CAN Leitungsfehler |
| 0xDC87 | DC87 tmfhe65: TMFAH: K-CAN Kommunikationsfehler |
| 0xDCC4 | DCC4 tmbhe65: TMBFH: K-CAN Leitungsfehler |
| 0xDCC7 | DCC7 tmbhe65: TMBFH: K-CAN Kommunikationsfehler |
| 0xDEC4 | DEC4 nve_65: NVE: K-CAN Leitungsfehler |
| 0xDEC7 | DEC7 nve_65: NVE: K-CAN Kommunikationsfehler |
| 0xE0C4 | E0C4 fla_65: FLA: Bus Leitungsfehler K-CAN |
| 0xE0C7 | E0C7 fla_65: FLA: Bus Kommunikationsfehler K-CAN |
| 0xE0D4 | E0D4 fla_65: FLA: Botschaft Außentemperatur K-CAN, 2CAh |
| 0xE0D5 | E0D5 fla_65: FLA: Botschaft Bedienung Lenkstocktaster K-CAN, 1EEh |
| 0xE0D6 | E0D6 fla_65: FLA: Botschaft Geschwindigkeit K-CAN, 1A0h |
| 0xE0D7 | E0D7 fla_65: FLA: Botschaft Kilometerstand/Reichweite K-CAN, 330h |
| 0xE0D8 | E0D8 fla_65: FLA: Botschaft Lampenzustand K-CAN, 21Ah |
| 0xE0D9 | E0D9 fla_65: FLA: Botschaft Lenkradwinkel K-CAN, 0C4H |
| 0xE0DA | E0DA fla_65: FLA: Botschaft Regensensor/Wischergeschwindigkeit K-CAN, 226h |
| 0xE104 | E104 komb65_2/kombrr/kombrr_2: KOMBI: K-CAN Leitungsfehler |
| 0xE107 | E107 komb65_2/kombi65/kombrr/kombrr_2: KOMBI: K-CAN Kommunikationsfehler |
| 0xE184 | E184 mc_gw: CD / M-ASK / CCC / RAD2 / CHAMP -GW: K-CAN Leitungsfehler |
| 0xE187 | E187 mc_gw: CD / M-ASK / CCC / RAD2 / CHAMP -GW: K-CAN Kommunikationsfehler |
| 0xE204 | E204 pdc_87/pdc_65_2/pdc_e65: PDC: K-CAN Leitungsfehler |
| 0xE205 | E205 pdc_65_2/pdc_e65: PDC: K-CAN-High Leitungsfehler |
| 0xE206 | E206 pdc_65_2/pdc_e65: PDC: K-CAN Massefehler |
| 0xE207 | E207 pdc_65_2/pdc_87/pdc_e65: PDC: K-CAN Kommunikationsfehler |
| 0xE244 | E244 bzm_e65: BZM: K-CAN Leitungsfehler |
| 0xE247 | E247 bzm_e65: BZM: K-CAN Kommunikationsfehler |
| 0xE284 | E284 bzmf_e65: BZMF: K-CAN Leitungsfehler |
| 0xE287 | E287 bzmf_e65: BZMF: K-CAN Kommunikationsfehler |
| 0xE2C4 | E2C4 ec_e65/ech60/ecl60/zbe_65/zbeh60/ecf_e65: CON: K-CAN Leitungsfehler |
| 0xE2C7 | E2C7 ec_e65/ech60/ecl60/zbe_65/zbeh60/ecf_e65: CON: K-CAN Kommunikationsfehler |
| 0xE304 | E304 zbef65: FCON: K-CAN Leitungsfehler |
| 0xE307 | E307 zbef65: FCON: K-CAN Kommunikationsfehler |
| 0xE344 | E344 fah_65_2/fah_e65/fah_plx: SMFAH: K-CAN Leitungsfehler |
| 0xE347 | E347 fah_65_2/fah_e65/fah_plx: SMFAH: K-CAN Kommunikationsfehler |
| 0xE384 | E384 bfh_65_2/bfh_e65/bfh_plx: SMBFH: K-CAN Leitungsfehler |
| 0xE387 | E387 bfh_65_2/bfh_e65/bfh_plx: SMBFH: K-CAN Kommunikationsfehler |
| 0xE3C4 | E3C4 hkl_65_2/hkl_e65: HKL: K-CAN Kommunikationsfehler |
| 0xE3C5 | E3C5 hkl_65_2/hkl_e65: HKL: K-CAN Leitungsfehler |
| 0xE404 | E404 kfs_rr: KFS: K-CAN Kommunikationsfehler |
| 0xE405 | E405 kfs_rr: KFS: K-CAN Leitungsfehler |
| 0xE444 | E444 fas_65_2/fas_e65/fas_plx: SMFA: K-CAN Leitungsfehler |
| 0xE447 | E447 fas_65_2/fas_e65/fas_plx: SMFA: K-CAN Kommunikationsfehler |
| 0xE484 | E484 bfs_65_2/bfs_plx: SMBF: K-CAN Leitungsfehler |
| 0xE487 | E487 bfs_65_2/bfs_e65/bfs_plx: SMBF: K-CAN Kommunikationsfehler |
| 0xE504 | E504 lm_60/lm_ahl/lm_ahl_2/lm_e65_2: LM: K-CAN Leitungsfehler |
| 0xE505 | E505 lm_ahl: LM: K-CAN High Leitungsfehler |
| 0xE506 | E506 lm_ahl: LM: K-CAN Massefehler |
| 0xE507 | E507 lm_60/lm_ahl/lm_ahl_2/lm_e65_2: LM: K-CAN Kommunikationsfehler |
| 0xE508 | E508 lm_ahl: LM: PT-CAN Kommunikationsfehler |
| 0xE50B | E50B lm_ahl/lm_ahl_2: LM: PT-CAN Kommunikationsfehler |
| 0xE514 | E514 lm_ahl/lm_ahl_2: LM: Botschaft (Lenkwinkel, C4) fehlt |
| 0xE515 | E515 lm_ahl/lm_ahl_2: LM: Botschaft (AHM Status Anhänger, 2E4) fehlt |
| 0xE516 | E516 lm_ahl/lm_ahl_2: LM: Botschaft (Lenkstockschaltersignal, 1EE) fehlt |
| 0xE517 | E517 lm_ahl/lm_ahl_2: LM: Botschaft (Status DSC, 19E) fehlt |
| 0xE518 | E518 lm_ahl/lm_ahl_2: LM: Botschaft (Status Fahrlicht, 314) fehlt |
| 0xE519 | E519 lm_ahl/lm_ahl_2: LM: Botschaft (Geschwindigkeit, 1A0) fehlt |
| 0xE51A | E51A lm_ahl/lm_ahl_2: LM: Botschaft (Gierwinkelgeschwindigkeit) vom DSC fehlt |
| 0xE51B | E51B lm_ahl/lm_ahl_2: LM: Botschaft (Klemmenstatus, 130) fehlt |
| 0xE51C | E51C lm_ahl/lm_ahl_2: LM: Botschaft (Fernlichtassistent) fehlt |
| 0xE51D | E51D lm_ahl_2: LM: Botschaft PT-CAN (Lenkwinkel) fehlt |
| 0xE544 | E544 ahm_e65/ahm_70: AHM: K-CAN Leitungsfehler |
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
| 0xE5C4 | E5C4 cid_60: CID: K-CAN Leitungsfehler |
| 0xE5C7 | E5C7 cid_60: CID: K-CAN Kommunikationsfehler |
| 0xE604 | E604 cidf65: FD: K-CAN Leitungsfehler |
| 0xE607 | E607 cidf65: FD: K-Can Kommunikationsfehler |
| 0xE644 | E644 cidf2rr: FD2: K-CAN Leitungsfehler |
| 0xE647 | E647 cidf2rr: FD2: K-CAN Kommunikationsfehler |
| 0xE704 | E704 ihka65/ihkarr: IHKA: K-CAN Leitungsfehler |
| 0xE707 | E707 ihka65/ihkarr: IHKA: K-CAN Kommunikationsfehler |
| 0xE744 | E744 hka_e65: FKA: K-CAN Leitungsfehler |
| 0xE745 | E745 hka_e65: FKA: K-CAN High Leitungsfehler |
| 0xE784 | E784 shzh_e65: SHZH: K-CAN Leitungsfehler |
| 0xE904 | E904 cas/cas_rr: CAS: K-CAN PERIPHERIE Leitungsfehler |
| 0xE907 | E907 cas/cas_rr: CAS: K-CAN PERIPHERIE Kommunikationsfehler |

### FCMATRIX

| NUMMER | ORT | ADR | STGR | VONSTGR | NICHTORT | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 66 | 2 |  |  |  | 0xEA | 0xE9 | 0xFE | 0x01 | 0x00 | 0x40 | 0x21 | 0x22 | 0x71 | 0x23 | 0x65 | 0x66 | 0x63 | 0x73 | 0x42 | 0x67 | 0x12 | 0x29 | 0x41 | 0x39 | 0x18 | 0x38 | 0x2A | 0x68 | 0x74 | 0x75 | 0x79 | 0x6B | 0x78 | 0x6C | 0x60 | 0x70 | 0x32 | 0x64 | 0x27 | 0x43 | 0x20 | 0x45 | 0x44 | 0x6D | 0x7A | 0x6E | 0x6A | 0x69 | 0x02 | 0x03 | 0x04 | 0x0E | 0x05 | 0x07 | 0x09 | 0x06 | 0x08 | 0x0A | 0x0D | 0x4C | 0x4D | 0x4E | 0x4F | 0x46 | 0x8B | 0x5F | 0x17 | 0x14 | 0x24 | 0x49 |
| 1 | 0x2776 | 0x12 | DME | leer | 0xCD87 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 2 | 0x27EC | 0x12 | DME | leer | 0xCD87 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 3 | 0x27ED | 0x12 | DME | leer | 0xCD87 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 4 | 0x27EE | 0x12 | DME | leer | 0xCD87 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 5 | 0x27EF | 0x12 | DME | ACC | 0xCD87 | 33 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 6 | 0x27F4 | 0x12 | DME | leer | 0x0000 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 7 | 0x2828 | 0x12 | DME | ARS | 0xCD87 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 8 | 0x2829 | 0x12 | DME | leer | 0xCD87 | 20 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 9 | 0x282A | 0x12 | DME | leer | 0xCD87 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 10 | 0x282B | 0x12 | DME | leer | 0xCD87 | 14 | 14 | 14 | -17 | 14 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 |
| 11 | 0x282C | 0x12 | DME | leer | 0xCD87 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 12 | 0x2908 | 0x12 | DME | leer | 0xCD87 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 13 | 0x2909 | 0x12 | DME | leer | 0xCD87 | 25 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 25 | 25 | -16 | -16 | 25 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 14 | 0x293D | 0x12 | DME | leer | 0xCD87 | 17 | -17 | -17 | 17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 17 | -17 | -17 | -17 |
| 15 | 0x2947 | 0x12 | DME | leer | 0xCD87 | 33 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 16 | 0x2948 | 0x12 | DME | leer | 0xCD87 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 17 | 0x2949 | 0x12 | DME | leer | 0xCD87 | 20 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 18 | 0x294A | 0x12 | DME | leer | 0xCD87 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 19 | 0x294B | 0x12 | DME | leer | 0xCD87 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 20 | 0x294C | 0x12 | DME | leer | 0xCD87 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 21 | 0x294D | 0x12 | DME | leer | 0xCD87 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 22 | 0x294E | 0x12 | DME | leer | 0xCD87 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 23 | 0x294F | 0x12 | DME | leer | 0xCD87 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 24 | 0x2950 | 0x12 | DME | leer | 0xCD87 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 25 | 0x2951 | 0x12 | DME | leer | 0xCD87 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 26 | 0x2952 | 0x12 | DME | leer | 0xCD87 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 27 | 0x2953 | 0x12 | DME | leer | 0xCD87 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 28 | 0x2954 | 0x12 | DME | leer | 0xCD87 | 14 | 14 | 14 | -17 | 14 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 |
| 29 | 0x2955 | 0x12 | DME | leer | 0xCD87 | 14 | 14 | 14 | -17 | 14 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 |
| 30 | 0x2956 | 0x12 | DME | leer | 0xCD87 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 31 | 0x2957 | 0x12 | DME | leer | 0xCD87 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 32 | 0x2958 | 0x12 | DME | leer | 0xCD87 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 33 | 0x2AD0 | 0x12 | DME | EGS | 0x0000 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 34 | 0x2D5B | 0x12 | DME | EGS | 0x0000 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 35 | 0x2DBF | 0x12 | DME | ACC | 0xCD87 | 33 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 36 | 0x2DC1 | 0x12 | DME | PM | 0x0000 | 14 | 14 | 14 | -17 | 14 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 |
| 37 | 0x2DC6 | 0x12 | DME | KOMBI | 0x0000 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 38 | 0x2DC8 | 0x12 | DME | EGS | 0x0000 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 39 | 0x2DC9 | 0x12 | DME | EGS | 0x0000 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 40 | 0x2DCA | 0x12 | DME | leer | 0xCD87 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 41 | 0x2DCC | 0x12 | DME | DSC | 0xCD87 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 42 | 0x2DCD | 0x12 | DME | DSC | 0x0000 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 43 | 0x2DCE | 0x12 | DME | DSC | 0x0000 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 44 | 0x2DCF | 0x12 | DME | leer | 0xCD87 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 45 | 0x2DD0 | 0x12 | DME | leer | 0x0000 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 46 | 0x2DD1 | 0x12 | DME | leer | 0x0000 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 47 | 0x2DD2 | 0x12 | DME | SZL | 0x0000 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 48 | 0x2DD3 | 0x12 | DME | leer | 0x0000 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 49 | 0x2DD5 | 0x12 | DME | leer | 0x0000 | 17 | -17 | -17 | 17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 17 | -17 | -17 | -17 |
| 50 | 0x2DD7 | 0x12 | DME | leer | 0xCD87 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 51 | 0x2DDA | 0x12 | DME | leer | 0xCD87 | 20 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 52 | 0x2DDB | 0x12 | DME | leer | 0xCD87 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 53 | 0x2DDC | 0x12 | DME | leer | 0xCD87 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 54 | 0x2DE0 | 0x12 | DME | leer | 0x0000 | 17 | -17 | -17 | 17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 17 | -17 | -17 | -17 |
| 55 | 0x2DE3 | 0x12 | DME | leer | 0x0000 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 56 | 0x2F4E | 0x12 | DME | leer | 0x0000 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 57 | 0x2F50 | 0x12 | DME | leer | 0xCD87 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 58 | 0x331D | 0x12 | DME | CEM | 0x0000 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 |
| 59 | 0x331E | 0x12 | DME | KOMBI | 0x0000 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 60 | 0x3F62 | 0x12 | DME | leer | 0x0000 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 61 | 0x41A6 | 0x12 | DDE | leer | 0xCD8B | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 62 | 0x41A7 | 0x12 | DDE | leer | 0xCD8B | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 63 | 0x41A8 | 0x12 | DDE | leer | 0xCD8B | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 64 | 0x4327 | 0x12 | DME | EGS | 0x0000 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 65 | 0x438C | 0x12 | DDE | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 66 | 0x4457 | 0x12 | DDE | leer | 0xCD8B | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 67 | 0x4458 | 0x12 | DDE | leer | 0xCD8B | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 68 | 0x453B | 0x12 | DDE | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 69 | 0x4567 | 0x12 | DDE | PM | 0xCF07 | 14 | 14 | 14 | -17 | 14 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 |
| 70 | 0x4577 | 0x12 | DDE | leer | 0x0000 | 17 | -17 | -17 | 17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 17 | -17 | -17 | -17 |
| 71 | 0x45F5 | 0x12 | DDE | ACC | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 72 | 0x45F6 | 0x12 | DDE | ACC | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 73 | 0x45F7 | 0x12 | DDE | ACC | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 74 | 0x45F8 | 0x12 | DDE | ACC | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 75 | 0x47BB | 0x12 | DDE | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 76 | 0x47F7 | 0x12 | DDE | leer | 0x0000 | 17 | -17 | -17 | -17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 17 | -17 | -17 | 17 | -17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 |
| 77 | 0x4F77 | 0x18 | EGS | leer | 0x0000 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 78 | 0x4803 | 0x12 | DDE | ACC | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 79 | 0x4810 | 0x12 | DDE | ACC | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 80 | 0x48A2 | 0x12 | DDE | DSC | 0x0000 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 81 | 0x48A7 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 82 | 0x48B2 | 0x12 | DDE | DSC | 0x0000 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 83 | 0x48C2 | 0x12 | DDE | EGS | 0x0000 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 84 | 0x48D2 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 85 | 0x48E2 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 86 | 0x4991 | 0x12 | DDE | leer | 0xCD8B | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 87 | 0x4992 | 0x12 | DDE | leer | 0xCD8B | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 88 | 0x4993 | 0x12 | DDE | leer | 0xCD8B | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 89 | 0x49A2 | 0x12 | DDE | leer | 0xCD8B | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 90 | 0x49A3 | 0x12 | DDE | leer | 0xCD8B | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 91 | 0x49B0 | 0x12 | DDE | ACC | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 92 | 0x49B7 | 0x12 | DDE | leer | 0xCD87 | 17 | -17 | -17 | 17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 17 | -17 | -17 | -17 |
| 93 | 0x49C0 | 0x12 | DDE | ACC | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 94 | 0x49D2 | 0x12 | DDE | ACC | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 95 | 0x49D7 | 0x12 | DDE | DSC | 0x0000 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 96 | 0x49E0 | 0x12 | DDE | ACC | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 97 | 0x49E3 | 0x12 | DDE | ACC | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 98 | 0x49F2 | 0x12 | DDE | leer | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 99 | 0x49F3 | 0x12 | DDE | leer | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 100 | 0x4A92 | 0x12 | DDE | DSC | 0x0000 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 101 | 0x4A97 | 0x12 | DDE | leer | 0xCD8B | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 102 | 0x4AA2 | 0x12 | DDE | EGS | 0x0000 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 103 | 0x4AA7 | 0x12 | DDE | AHM | 0x0000 | 14 | 14 | -17 | -17 | 14 | -17 | -17 | 14 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 |
| 104 | 0x4AB7 | 0x12 | DME | leer | 0x0000 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 105 | 0x4BE2 | 0x12 | DDE | leer | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 106 | 0x4BE3 | 0x12 | DDE | leer | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 107 | 0x4BE7 | 0x12 | DDE | leer | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 108 | 0x4BE8 | 0x12 | DDE | leer | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 109 | 0x4BF2 | 0x12 | DDE | leer | 0xCD8B | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 110 | 0x4BF3 | 0x12 | DDE | leer | 0xCD8B | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 111 | 0x4BF7 | 0x12 | DDE | leer | 0xCD8B | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 112 | 0x4BF8 | 0x12 | DDE | leer | 0xCD8B | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 113 | 0x4C00 | 0x12 | DDE | ACC | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 114 | 0x4C01 | 0x12 | DDE | ACC | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 115 | 0x4C02 | 0x12 | DDE | ACC | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 116 | 0x4C03 | 0x12 | DDE | leer | 0xCD8B | 17 | -17 | -17 | 17 | 17 | -17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 |
| 117 | 0x4C06 | 0x12 | DDE | ARS | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 118 | 0x4C07 | 0x12 | DDE | ARS | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 119 | 0x4C08 | 0x12 | DDE | ARS | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 120 | 0x4C12 | 0x12 | DDE | leer | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 121 | 0x4C13 | 0x12 | DDE | leer | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 122 | 0x4C15 | 0x12 | DDE | leer | 0xCD8B | 20 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 123 | 0x4C16 | 0x12 | DDE | leer | 0xCD8B | 20 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 124 | 0x4C17 | 0x12 | DDE | leer | 0xCD8B | 20 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 125 | 0x4C18 | 0x12 | DDE | leer | 0xCD8B | 20 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 126 | 0x4C20 | 0x12 | DDE | leer | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 127 | 0x4C21 | 0x12 | DDE | leer | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 128 | 0x4C22 | 0x12 | DDE | leer | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 129 | 0x4C23 | 0x12 | DDE | leer | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 130 | 0x4C27 | 0x12 | DDE | leer | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 131 | 0x4C28 | 0x12 | DDE | leer | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 132 | 0x4CA2 | 0x12 | DDE | leer | 0xCD8B | 14 | 14 | 14 | -17 | 14 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 |
| 133 | 0x4CA3 | 0x12 | DDE | leer | 0xCD8B | 14 | 14 | 14 | -17 | 14 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 |
| 134 | 0x4CB2 | 0x12 | DDE | leer | 0xCD8B | 14 | 14 | 14 | -17 | 14 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 |
| 135 | 0x4CB3 | 0x12 | DDE | leer | 0xCD8B | 14 | 14 | 14 | -17 | 14 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 |
| 136 | 0x4DF0 | 0x12 | DDE | leer | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 137 | 0x4DF1 | 0x12 | DDE | leer | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 138 | 0x4DF2 | 0x12 | DDE | leer | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 139 | 0x4DF3 | 0x12 | DDE | leer | 0xCD8B | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 140 | 0x5140 | 0x18 | EGS | leer | 0xCF07 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 141 | 0x5141 | 0x18 | EGS | leer | 0xCF07 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 142 | 0x5142 | 0x18 | EGS | leer | 0xCF07 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 143 | 0x5143 | 0x18 | EGS | ACC | 0xCF07 | 33 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 144 | 0x5144 | 0x18 | EGS | leer | 0xCF07 | 20 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 145 | 0x5145 | 0x18 | EGS | leer | 0xCF07 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 146 | 0x5146 | 0x18 | EGS | leer | 0xCF07 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 147 | 0x5147 | 0x18 | EGS | leer | 0xCF07 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 148 | 0x5149 | 0x18 | EGS | leer | 0xCF07 | 14 | 14 | 14 | -17 | 14 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 |
| 149 | 0x5150 | 0x18 | EGS | AHM | 0xCF07 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 150 | 0x51A5 | 0x18 | EGS | leer | 0xCF07 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 151 | 0x51A7 | 0x18 | EGS | leer | 0xCF07 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 152 | 0x51A8 | 0x18 | EGS | leer | 0xCF07 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 153 | 0x51AA | 0x18 | EGS | leer | 0xCF07 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 154 | 0x51AB | 0x18 | EGS | SZL | 0xCF07 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 155 | 0x51AD | 0x18 | EGS | leer | 0x0000 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 156 | 0x51AE | 0x18 | EGS | leer | 0xCF07 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 157 | 0x5EC6 | 0x29 | DSC | leer | 0xD347 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 158 | 0x5EC7 | 0x29 | DSC | leer | 0xD347 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 159 | 0x5ED1 | 0x29 | DSC | leer | 0xD347 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 160 | 0x5EE7 | 0x29 | DSC | leer | 0xD347 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 161 | 0x5EFB | 0x29 | DSC | leer | 0xD347 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 162 | 0x5F06 | 0x29 | DSC | leer | 0xD347 | 33 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 163 | 0x5F0D | 0x29 | DSC | leer | 0xD347 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 164 | 0x5F12 | 0x29 | DSC | leer | 0xD347 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 165 | 0x5F13 | 0x29 | DSC | leer | 0xD347 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 166 | 0x5F14 | 0x29 | DSC | leer | 0xD347 | 20 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 167 | 0x5F15 | 0x29 | DSC | leer | 0xD347 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 168 | 0x5FFF | 0x39 | EDCK | leer | 0x0000 | 20 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 169 | 0x9327 | 0x60 | KOMBI | leer | 0xE107 | -16 | 33 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 170 | 0x9328 | 0x00 | ZGM | leer | 0x0000 | 0 | 50 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 171 | 0x9329 | 0x00 | ZGM | leer | 0x0000 | 50 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 172 | 0x932A | 0x00 | ZGM | leer | 0x0000 | 0 | 0 | 0 | 50 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 173 | 0x93AD | 0x01 | SIM | leer | 0x0000 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 174 | 0x93AF | 0x01 | SIM | leer | 0x0000 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 175 | 0x93B0 | 0x01 | SMG-SIM | leer | 0x0000 | -16 | -16 | 25 | 25 | 25 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 25 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 176 | 0x93B1 | 0x01 | SIM | leer | 0x0000 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 177 | 0x93B7 | 0x01 | SIM | leer | 0x0000 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 178 | 0x93BA | 0x01 | SIM | leer | 0x0000 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 179 | 0x93BF | 0x01 | SIM | leer | 0x0000 | -16 | -16 | -16 | 50 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 180 | 0x93C0 | 0x01 | SIM | leer | 0x0000 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 181 | 0x93C3 | 0x01 | SIM | leer | 0x0000 | 25 | -16 | -16 | 25 | 25 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 25 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 182 | 0x93CF | 0x01 | SIM | leer | 0x0000 | 25 | -16 | -16 | 25 | 25 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 25 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 183 | 0x93D0 | 0x01 | SIM | leer | 0x0000 | -16 | 25 | -16 | 25 | 25 | 25 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 184 | 0x93D1 | 0x01 | SIM | leer | 0x0000 | 25 | -16 | -16 | 25 | 25 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 25 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 185 | 0x93D2 | 0x01 | SIM | leer | 0x0000 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 186 | 0x94BA | 0x02 | SZL | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 187 | 0x94BD | 0x02 | SZL | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 188 | 0x94C0 | 0x02 | SZL | leer | 0x0000 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 189 | 0x9531 | 0x03 | SASL | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 190 | 0x9533 | 0x03 | SASL | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 191 | 0x9534 | 0x03 | SASL | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 192 | 0x9535 | 0x03 | SASL | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 193 | 0x9538 | 0x03 | SASL | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 194 | 0x9539 | 0x03 | SASL | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 195 | 0x953C | 0x03 | SASL | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 196 | 0x953D | 0x03 | SASL | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 197 | 0x953F | 0x03 | SASL | leer | 0x0000 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 198 | 0x95B1 | 0x04 | SASR | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 199 | 0x95B3 | 0x04 | SASR | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 200 | 0x95B7 | 0x04 | SASR | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 201 | 0x95B9 | 0x04 | SASR | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 202 | 0x95BC | 0x04 | SASR | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 203 | 0x95BD | 0x04 | SASR | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 204 | 0x95BF | 0x04 | SASR | leer | 0x0000 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 205 | 0x9631 | 0x05 | STVL | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 206 | 0x9633 | 0x05 | STVL | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 207 | 0x9636 | 0x05 | STVL | leer | 0x0000 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 208 | 0x9637 | 0x05 | STVL | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 209 | 0x9639 | 0x05 | STVL | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 210 | 0x963C | 0x05 | STVL | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 211 | 0x963D | 0x05 | STVL | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 212 | 0x963F | 0x05 | STVL | leer | 0x0000 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 213 | 0x96B1 | 0x06 | STVR | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 214 | 0x96B3 | 0x06 | STVR | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 215 | 0x96B6 | 0x06 | STVR | leer | 0x0000 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 216 | 0x96B7 | 0x06 | STVR | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 217 | 0x96B9 | 0x06 | STVR | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 218 | 0x96BC | 0x06 | STVR | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 219 | 0x96BD | 0x06 | STVR | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 220 | 0x96BF | 0x06 | STVR | leer | 0x0000 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 221 | 0x9731 | 0x07 | SSFA | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 222 | 0x9733 | 0x07 | SSFA | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 223 | 0x9737 | 0x07 | SSFA | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 224 | 0x9739 | 0x07 | SSFA | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 225 | 0x973D | 0x07 | SSFA | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 226 | 0x973F | 0x07 | SSFA | leer | 0x0000 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 227 | 0x97B1 | 0x08 | SSBF | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 228 | 0x97B3 | 0x08 | SSBF | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 229 | 0x97B7 | 0x08 | SSBF | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 230 | 0x97B9 | 0x08 | SSBF | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 231 | 0x97BC | 0x08 | SSBF | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 232 | 0x97BF | 0x08 | SSBF | leer | 0x0000 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 233 | 0x982F | 0x09 | SBSL | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 234 | 0x9833 | 0x09 | SBSL | leer | 0x0000 | -18 | -18 | -18 | 9 | -18 | -18 | -18 | 9 | -18 | -18 | -18 | -18 | -18 | 9 | -18 | -18 | -18 | -18 | -18 | -18 | -18 | -18 | -18 | 9 | 9 | 9 | -18 | -18 | -18 | 9 | -18 | -18 | 9 | -18 | -18 | -18 | -18 | -18 | -18 | -18 | -18 | -18 | -18 | -18 | -18 | -18 | -18 | -18 | -18 | -18 | 9 | -18 | -18 | 9 | 9 | -18 | -18 | -18 | -18 | -18 | -18 | -18 | -18 | -18 | -18 | -18 |
| 235 | 0x9835 | 0x09 | SBSL | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 236 | 0x9837 | 0x09 | SBSL | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 237 | 0x9838 | 0x09 | SBSL | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 238 | 0x9839 | 0x09 | SBSL | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 239 | 0x983D | 0x09 | SBSL | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 240 | 0x983F | 0x09 | SBSL | leer | 0x0000 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 241 | 0x98AD | 0x0A | SBSR | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 242 | 0x98B1 | 0x0A | SBSR | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 243 | 0x98B5 | 0x0A | SBSR | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 244 | 0x98B7 | 0x0A | SBSR | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 245 | 0x98B9 | 0x0A | SBSR | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 246 | 0x98BC | 0x0A | SBSR | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 247 | 0x98BD | 0x0A | SBSR | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 248 | 0x98BF | 0x0A | SBSR | leer | 0x0000 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 249 | 0x9A31 | 0x0D | SSH | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 250 | 0x9A33 | 0x0D | SSH | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 251 | 0x9A37 | 0x0D | SSH | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 252 | 0x9A39 | 0x0D | SSH | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 253 | 0x9A3C | 0x0D | SSH | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 254 | 0x9A3D | 0x0D | SSH | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 255 | 0x9A3F | 0x0D | SSH | leer | 0x0000 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 256 | 0x9AB7 | 0x0E | SFZ | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 257 | 0x9AB8 | 0x0E | SFZ | leer | 0x0000 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 258 | 0x9ABF | 0x0E | SFZ | leer | 0x0000 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 259 | 0x9C84 | 0x78 | IHKA | leer | 0xE707 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 260 | 0x9C85 | 0x78 | IHKA | leer | 0xE707 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 261 | 0x9C88 | 0x78 | IHKA | leer | 0xE707 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 262 | 0x9C90 | 0x78 | IHKA | leer | 0xE707 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 263 | 0x9C92 | 0x78 | IHKA | leer | 0xE707 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 264 | 0x9C93 | 0x78 | IHKA | leer | 0xE707 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 265 | 0x9C94 | 0x78 | IHKA | leer | 0xE707 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 266 | 0x9C95 | 0x78 | IHKA | leer | 0xE707 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 267 | 0x9C96 | 0x78 | IHKA | leer | 0xE707 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 268 | 0x9C97 | 0x78 | IHKA | leer | 0xE707 | -16 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 269 | 0x9C98 | 0x78 | IHKA | SHZH | 0xE707 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 270 | 0x9C9F | 0x78 | IHKA | leer | 0xE707 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 271 | 0x9CA6 | 0x78 | IHKA | leer | 0xE707 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 272 | 0x9CA7 | 0x78 | IHKA | leer | 0xE707 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 273 | 0x9CC6 | 0x70 | LM | leer | 0x0000 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | 100 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 | -15 |
| 274 | 0xA3A8 | 0x60 | KOMBI | leer | 0xE107 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 275 | 0xA3AA | 0x60 | KOMBI | EGS | 0x0000 | 20 | 20 | -16 | -16 | 20 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 276 | 0xA3AB | 0x60 | KOMBI | ACC | 0xE107 | 20 | 20 | -16 | -16 | 20 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 277 | 0xA3AD | 0x60 | KOMBI | leer | 0xE107 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 278 | 0xA3AE | 0x60 | KOMBI | leer | 0xE107 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 279 | 0xA3AF | 0x60 | KOMBI | leer | 0xE107 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 280 | 0xA3B0 | 0x60 | KOMBI | leer | 0xE107 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 281 | 0xA3B1 | 0x60 | KOMBI | leer | 0xE107 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 282 | 0xA3B2 | 0x60 | KOMBI | leer | 0xE107 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 283 | 0xA3B3 | 0x60 | KOMBI | ARS | 0xE107 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 284 | 0xA3B4 | 0x60 | KOMBI | leer | 0xE107 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 285 | 0xA3B5 | 0x60 | KOMBI | leer | 0xE107 | -16 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 286 | 0xA3B6 | 0x60 | KOMBI | leer | 0xE107 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 287 | 0xA3B7 | 0x60 | KOMBI | AHM | 0xE107 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 288 | 0xA3B8 | 0x60 | KOMBI | EDCK | 0xE107 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 289 | 0xA3B9 | 0x60 | KOMBI | leer | 0xE107 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 290 | 0xA3BA | 0x60 | KOMBI | leer | 0xE107 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 291 | 0xA3BB | 0x60 | KOMBI | leer | 0xE107 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 292 | 0xA3BC | 0x60 | KOMBI | leer | 0xE107 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 293 | 0xA3BD | 0x60 | KOMBI | leer | 0xE107 | -16 | 33 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 294 | 0xA3BE | 0x60 | KOMBI | leer | 0xE107 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 295 | 0xA3BF | 0x60 | KOMBI | leer | 0xE107 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 296 | 0xA3C0 | 0x60 | KOMBI | AHM | 0xE107 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 297 | 0xA3C1 | 0x60 | KOMBI | LM | 0x0000 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 298 | 0xA3C2 | 0x60 | KOMBI | leer | 0xE107 | -16 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 299 | 0xA3C3 | 0x60 | KOMBI | RDC | 0xE107 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 300 | 0xA3C4 | 0x60 | KOMBI | SECUR1 | 0x0000 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 |
| 301 | 0xA3C6 | 0x60 | KOMBI | leer | 0xE107 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 |
| 302 | 0xA3C7 | 0x60 | KOMBI | EHC | 0xE107 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 303 | 0xA548 | 0x60 | KOMBI | leer | 0xE107 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 304 | 0xA54A | 0x60 | KOMBI | leer | 0xE107 | -16 | 25 | -16 | -16 | -16 | 25 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 25 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 25 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 305 | 0xA54B | 0x60 | KOMBI | leer | 0xE107 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 306 | 0xA60A | 0x78 | IHKA | leer | 0xE707 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 307 | 0xA612 | 0x78 | IHKA | leer | 0xE707 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 308 | 0xA614 | 0x78 | IHKA | leer | 0xE707 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 309 | 0xA615 | 0x78 | IHKA | leer | 0xE707 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 310 | 0xA617 | 0x78 | IHKA | leer | 0xE707 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 311 | 0xA618 | 0x78 | IHKA | leer | 0xE707 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 312 | 0xA619 | 0x78 | IHKA | leer | 0xE707 | -16 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 313 | 0xA61A | 0x78 | IHKA | SHZH | 0xE707 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 314 | 0xA752 | 0xB8 | NVE | leer | 0x0000 | -16 | 20 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 |
| 315 | 0xA753 | 0xB8 | NVE | leer | 0x0000 | -16 | 25 | 25 | -16 | -16 | 25 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 25 | -16 | -16 | -16 | -16 | -16 |
| 316 | 0xA754 | 0xB8 | NVE | leer | 0x0000 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 |
| 317 | 0xA755 | 0xB8 | NVE | leer | 0x0000 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 |
| 318 | 0xA756 | 0xB8 | NVE | leer | 0x0000 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 |
| 319 | 0xA757 | 0xB8 | NVE | leer | 0x0000 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 |
| 320 | 0xA758 | 0x8B | NVE | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 |
| 321 | 0xA759 | 0x8B | NVE | leer | 0x0000 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 |
| 322 | 0xA75E | 0xB8 | NVE | leer | 0x0000 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 |
| 323 | 0xA760 | 0xB8 | NVE | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 |
| 324 | 0xA761 | 0xB8 | NVE | leer | 0x0000 | -16 | 33 | -16 | 0 | 0 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 |
| 325 | 0xA762 | 0xB8 | NVE | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 |
| 326 | 0xCD87 | 0x12 | DME | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 327 | 0xCD8B | 0x12 | DDE | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 328 | 0xCD8F | 0x12 | DME | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 329 | 0xCD94 | 0x12 | DME | leer | 0xCD87 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 330 | 0xCD95 | 0x12 | DME | leer | 0xCD87 | 33 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 331 | 0xCD96 | 0x12 | DME | ACC | 0xCD87 | 33 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 332 | 0xCD98 | 0x12 | DME | leer | 0xCD87 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 333 | 0xCD99 | 0x12 | DME | leer | 0xCD87 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 334 | 0xCD9A | 0x12 | DME | leer | 0x0000 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 335 | 0xCD9C | 0x12 | DME | leer | 0xCD87 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 336 | 0xCD9D | 0x12 | DME | leer | 0xCD87 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 337 | 0xCD9E | 0x12 | DME | EGS | 0x0000 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 338 | 0xCD9F | 0x12 | DME | leer | 0xCD87 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 339 | 0xCDA0 | 0x12 | DME | leer | 0xCD87 | 20 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 340 | 0xCDA1 | 0x12 | DME | leer | 0xCD87 | 17 | 17 | -17 | 17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 |
| 341 | 0xCDA2 | 0x12 | DME | leer | 0xCD87 | 17 | 17 | 17 | -17 | -17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 |
| 342 | 0xCDA3 | 0x12 | DME | leer | 0xCD87 | 17 | 17 | 17 | -17 | -17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 |
| 343 | 0xCDA4 | 0x12 | DME | ARS | 0xCD87 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 344 | 0xCDA5 | 0x12 | DME | leer | 0xCD87 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 345 | 0xCDA6 | 0x12 | DME | leer | 0xCD87 | 17 | -17 | -17 | 17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 17 | -17 | -17 | -17 |
| 346 | 0xCDA7 | 0x12 | DME | leer | 0x0000 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 347 | 0xCDA8 | 0x12 | DME | leer | 0xCD87 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 348 | 0xCDA9 | 0x12 | DME | leer | 0xCD87 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 349 | 0xCDAA | 0x12 | DME | leer | 0x0000 | 17 | -17 | -17 | 17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 17 | -17 | -17 | -17 |
| 350 | 0xCDAB | 0x12 | DME | LM | 0x0000 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 351 | 0xCDAC | 0x12 | DME | IHKA | 0x0000 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 352 | 0xCDAE | 0x12 | DME | leer | 0x0000 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 353 | 0xCDAF | 0x12 | DME | AHM | 0x0000 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 354 | 0xCDB0 | 0x12 | DME | EGS | 0x0000 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 355 | 0xCDB7 | 0x12 | DME | leer | 0xCD87 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 356 | 0xCDC7 | 0x12 | DME | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 357 | 0xCDDD | 0x12 | DME | EGS | 0x0000 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 358 | 0xCDE0 | 0x12 | DME | leer | 0xCD87 | 20 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 359 | 0xCDEB | 0x12 | DME | LM | 0x0000 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 360 | 0xCDEE | 0x12 | DME | leer | 0x0000 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 361 | 0xCDEF | 0x12 | DME | AHM | 0x0000 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 362 | 0xCDF9 | 0x12 | DME | EMF | 0x0000 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 363 | 0xCDFA | 0x12 | DME | EMF | 0x0000 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 364 | 0xCE15 | 0x14 | CEM | leer | 0x0000 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 |
| 365 | 0xCE16 | 0x14 | CEM | leer | 0x0000 | 20 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 |
| 366 | 0xCE18 | 0x14 | CEM | leer | 0x0000 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 |
| 367 | 0xCE19 | 0x14 | CEM | leer | 0x0000 | 20 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 |
| 368 | 0xCE1A | 0x14 | CEM | leer | 0x0000 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 |
| 369 | 0xCE1B | 0x14 | CEM | leer | 0x0000 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 |
| 370 | 0xCE1C | 0x14 | CEM | leer | 0x0000 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 |
| 371 | 0xCE1D | 0x14 | CEM | leer | 0x0000 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 |
| 372 | 0xCE26 | 0x14 | CEM | SZL | 0x0000 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 |
| 373 | 0xCF07 | 0x18 | EGS | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 374 | 0xCF14 | 0x18 | EGS | leer | 0xCF07 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 375 | 0xCF15 | 0x18 | EGS | leer | 0xCF07 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 376 | 0xCF16 | 0x18 | EGS | leer | 0xCF07 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 377 | 0xCF17 | 0x18 | EGS | leer | 0xCF07 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 378 | 0xCF18 | 0x18 | EGS | leer | 0xCF07 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 379 | 0xCF19 | 0x18 | EGS | leer | 0xCF07 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 380 | 0xCF1A | 0x18 | EGS | leer | 0xCF07 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 381 | 0xCF1B | 0x18 | EGS | leer | 0xCF07 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 382 | 0xCF1C | 0x18 | EGS | leer | 0xCF07 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 383 | 0xCF1D | 0x18 | EGS | leer | 0xCF07 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 384 | 0xCF1E | 0x18 | EGS | leer | 0xCF07 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 385 | 0xCF1F | 0x18 | EGS | leer | 0xCF07 | 20 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 386 | 0xCF20 | 0x18 | EGS | leer | 0xCF07 | 20 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 387 | 0xCF21 | 0x18 | EGS | leer | 0xCF07 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 388 | 0xCF22 | 0x18 | EGS | leer | 0xCF07 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 389 | 0xCF23 | 0x18 | EGS | leer | 0xCF07 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 390 | 0xCF24 | 0x18 | EGS | leer | 0xCF07 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 391 | 0xCF25 | 0x18 | EGS | leer | 0xCF07 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 392 | 0xCF26 | 0x18 | EGS | ACC | 0xCF07 | 33 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 393 | 0xCF27 | 0x18 | EGS | leer | 0xCF07 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 394 | 0xCF28 | 0x18 | EGS | leer | 0xCF07 | 14 | 14 | 14 | -17 | 14 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | 14 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 | -17 |
| 395 | 0xCF29 | 0x18 | EGS | AHM | 0xCF07 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 396 | 0xD104 | 0x20 | RDC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 397 | 0xD107 | 0x20 | RDC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 398 | 0xD13E | 0x20 | RDC | leer | 0x0000 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 50 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 399 | 0xD147 | 0x21 | ACC | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 400 | 0xD187 | 0x22 | AHL | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 401 | 0xD1C7 | 0x23 | ARS | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 402 | 0xD1DF | 0x23 | ARS | leer | 0xD1C7 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 403 | 0xD1E0 | 0x23 | ARS | leer | 0xD1C7 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 404 | 0xD1E1 | 0x23 | ARS | leer | 0xD1C7 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 405 | 0xD1E2 | 0x23 | ARS | leer | 0xD1C7 | 20 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 406 | 0xD1E3 | 0x23 | ARS | leer | 0xD1C7 | 20 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 407 | 0xD1E4 | 0x23 | ARS | SZL | 0x0000 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 408 | 0xD1E5 | 0x23 | ARS | leer | 0xD1C7 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 409 | 0xD1E8 | 0x23 | ARS | leer | 0xD1C7 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 410 | 0xD1E9 | 0x23 | ARS | CAS | 0xD1C7 | 20 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 411 | 0xD1EB | 0x23 | ARS | leer | 0xD1C7 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 412 | 0xD1ED | 0x23 | ARS | leer | 0xD1C7 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 413 | 0xD1F1 | 0x23 | ARS | leer | 0xD1C7 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 414 | 0xD1F2 | 0x23 | ARS | leer | 0xD1C7 | 20 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 415 | 0xD204 | 0x24 | CVM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 |
| 416 | 0xD205 | 0x24 | CVM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 |
| 417 | 0xD206 | 0x24 | CVM | KOMBI | 0x0000 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 |
| 418 | 0xD207 | 0x24 | CVM | KOMBI | 0x0000 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 |
| 419 | 0xD208 | 0x24 | CVM | CAS | 0x0000 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 |
| 420 | 0xD209 | 0x24 | CVM | KOMBI | 0x0000 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 |
| 421 | 0xD2C4 | 0x27 | PGS | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 422 | 0xD2C7 | 0x27 | PGS | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 423 | 0xD347 | 0x29 | DSC | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 424 | 0xD387 | 0x2A | EMF | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 425 | 0xD584 | 0x32 | MMIFC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 426 | 0xD587 | 0x32 | MMIFC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 427 | 0xD704 | 0x38 | EHC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 428 | 0xD707 | 0x38 | EHC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 429 | 0xD710 | 0x38 | EHC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 430 | 0xD711 | 0x38 | EHC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 431 | 0xD712 | 0x38 | EHC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 432 | 0xD713 | 0x38 | EHC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 433 | 0xD747 | 0x39 | EDCK | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 434 | 0xD907 | 0x40 | CAS | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 435 | 0xD944 | 0x41 | DWA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 436 | 0xD947 | 0x41 | DWA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 437 | 0xD984 | 0x42 | CIM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 438 | 0xD987 | 0x42 | CIM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 439 | 0xD98A | 0x42 | CIM | leer | 0xD987 | -16 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 440 | 0xD98B | 0x42 | CIM | leer | 0xD987 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 441 | 0xD98C | 0x42 | CIM | leer | 0xD987 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 442 | 0xD98D | 0x42 | CIM | leer | 0xD987 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 443 | 0xD98E | 0x42 | CIM | leer | 0xD987 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 444 | 0xD990 | 0x42 | CIM | leer | 0xD987 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 445 | 0xD991 | 0x42 | CIM | EDCK | 0xD987 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 446 | 0xD992 | 0x42 | CIM | EDCK | 0xD987 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 447 | 0xD993 | 0x42 | CIM | leer | 0xD987 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 448 | 0xD994 | 0x42 | CIM | leer | 0xD987 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 449 | 0xD995 | 0x42 | CIM | leer | 0xD987 | -16 | 20 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 450 | 0xD996 | 0x42 | CIM | leer | 0xD987 | -16 | 20 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 451 | 0xD997 | 0x42 | CIM | leer | 0xD987 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 452 | 0xD9C4 | 0x43 | PM | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 453 | 0xD9C7 | 0x43 | PM | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 454 | 0xDA04 | 0x44 | SHD | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 455 | 0xDA07 | 0x44 | SHD | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 456 | 0xDA84 | 0x46 | WIM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 |
| 457 | 0xDA87 | 0x46 | WIM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 |
| 458 | 0xDC04 | 0x4C | TMFA | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 459 | 0xDC07 | 0x4C | TMFA | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 460 | 0xDC44 | 0x4D | TMBF | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 461 | 0xDC47 | 0x4D | TMBF | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 462 | 0xDC84 | 0x4E | TMFAH | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 463 | 0xDC87 | 0x4E | TMFAH | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 464 | 0xDCC4 | 0x4F | TMBFH | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 465 | 0xDCC7 | 0x4F | TMBFH | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 466 | 0xDEC4 | 0x8B | NVE | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 |
| 467 | 0xDEC7 | 0x8B | NVE | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 |
| 468 | 0xE0C4 | 0x57 | FLA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 |
| 469 | 0xE0C7 | 0x57 | FLA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 |
| 470 | 0xE0D4 | 0x57 | FLA | leer | 0x0000 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 |
| 471 | 0xE0D5 | 0x57 | FLA | leer | 0x0000 | -16 | 20 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 |
| 472 | 0xE0D6 | 0x57 | FLA | leer | 0x0000 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 |
| 473 | 0xE0D7 | 0x57 | FLA | leer | 0x0000 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 |
| 474 | 0xE0D8 | 0x57 | FLA | leer | 0x0000 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 |
| 475 | 0xE0D9 | 0x57 | FLA | leer | 0x0000 | -16 | 20 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 |
| 476 | 0xE0DA | 0x57 | FLA | leer | 0x0000 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 |
| 477 | 0xE104 | 0x60 | KOMBI | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 478 | 0xE107 | 0x60 | KOMBI | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 479 | 0xE184 | 0x63 | CD | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 480 | 0xE187 | 0x63 | CD | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 481 | 0xE204 | 0x64 | PDC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 482 | 0xE205 | 0x64 | PDC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 483 | 0xE206 | 0x64 | PDC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 484 | 0xE207 | 0x64 | PDC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 485 | 0xE244 | 0x65 | BZM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 486 | 0xE247 | 0x65 | BZM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 487 | 0xE284 | 0x66 | BZMF | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 488 | 0xE287 | 0x66 | BZMF | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 489 | 0xE2C4 | 0x67 | CON | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 490 | 0xE2C7 | 0x67 | CON | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 491 | 0xE304 | 0x68 | FCON | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 492 | 0xE307 | 0x68 | FCON | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 493 | 0xE344 | 0x69 | SMFAH | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 494 | 0xE347 | 0x69 | SMFAH | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 495 | 0xE384 | 0x6A | SMBFH | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 496 | 0xE387 | 0x6A | SMBFH | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 497 | 0xE3C4 | 0x6B | HKL | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 498 | 0xE3C5 | 0x6B | HKL | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 499 | 0xE404 | 0x6C | KFS | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 500 | 0xE405 | 0x6C | KFS | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 501 | 0xE444 | 0x6D | SMFA | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 502 | 0xE447 | 0x6D | SMFA | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 503 | 0xE484 | 0x6E | SMBF | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 504 | 0xE487 | 0x6E | SMBF | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 505 | 0xE51C | 0x70 | LM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 506 | 0xE51D | 0x70 | LM | SZL | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 507 | 0xE504 | 0x70 | LM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 508 | 0xE505 | 0x70 | LM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 509 | 0xE506 | 0x70 | LM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 510 | 0xE507 | 0x70 | LM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 511 | 0xE508 | 0x70 | LM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 512 | 0xE50B | 0x70 | LM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 513 | 0xE514 | 0x70 | LM | DSC | 0x0000 | 25 | -16 | -16 | -16 | 25 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 25 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 25 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 514 | 0xE515 | 0x70 | LM | AHM | 0x0000 | 25 | -16 | -16 | -16 | 25 | -16 | -16 | -16 | 25 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 25 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 515 | 0xE516 | 0x70 | LM | SZL | 0x0000 | 20 | -16 | -16 | 20 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 516 | 0xE517 | 0x70 | LM | DSC | 0x0000 | 25 | -16 | -16 | -16 | 25 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 25 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 25 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 517 | 0xE518 | 0x70 | LM | RLS | 0x0000 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 518 | 0xE519 | 0x70 | LM | DSC | 0x0000 | 25 | -16 | -16 | -16 | 25 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 25 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 25 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 519 | 0xE51A | 0x70 | LM | DSC | 0x0000 | 25 | -16 | -16 | -16 | 25 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 25 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 25 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 520 | 0xE51B | 0x70 | LM | CAS | 0x0000 | -16 | 25 | 25 | -16 | -16 | 25 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 25 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 521 | 0xE544 | 0x71 | AHM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 522 | 0xE547 | 0x71 | AHM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 523 | 0xE554 | 0x71 | AHM | LM | 0x0000 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 524 | 0xE555 | 0x71 | AHM | DME | 0x0000 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 525 | 0xE556 | 0x71 | AHM | DSC | 0x0000 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 526 | 0xE557 | 0x71 | AHM | KOMBI | 0x0000 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 527 | 0xE558 | 0x71 | AHM | CAS | 0x0000 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 528 | 0xE559 | 0x71 | AHM | LM | 0x0000 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 529 | 0xE55A | 0x71 | AHM | CAS | 0x0000 | -16 | 33 | -16 | -16 | -16 | 33 | -16 | -16 | 33 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 530 | 0xE55B | 0x71 | AHM | DME | 0x0000 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 531 | 0xE55C | 0x71 | AHM | DSC | 0x0000 | 20 | 20 | -16 | -16 | 20 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | 20 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 | -16 |
| 532 | 0xE5C4 | 0x73 | CID | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 533 | 0xE5C7 | 0x73 | CID | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 534 | 0xE604 | 0x74 | FD | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 535 | 0xE607 | 0x74 | FD | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 536 | 0xE644 | 0x75 | FD2 | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 537 | 0xE647 | 0x75 | FD2 | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 538 | 0xE704 | 0x78 | IHKA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 539 | 0xE707 | 0x78 | IHKA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 540 | 0xE744 | 0x79 | FKA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 541 | 0xE745 | 0x79 | FKA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 542 | 0xE784 | 0x7A | SHZH | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 543 | 0xE904 | 0x40 | CAS | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 544 | 0xE907 | 0x40 | CAS | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 545 | 0xFFFD | 0x45 | RLS | leer | 0x0000 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 546 | 0xFFFE | 0x49 | SECUR1 | leer | 0x0000 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

### LOWBAT

| ORT | STGR |
| --- | --- |
| 0x931D | KOMBI |
| 0x6025 | EMF |
| 0x5D2C | CIM |
| 0x9B4A | TMF |
| 0x9BCA | TMFH |
| 0x9C0A | TMBH |
| 0x9B8A | TMB |
| 0xA15D | PM |

### STGR_NAMEN

| STGR_ADRESSE | STGR_KURZNAME | STGR_LANGNAME |
| --- | --- | --- |
| 0x00 | ZGM | Zentrales Gateway-Modul (ZGM)                               |
| 0x01 | SIM | Sicherheits- und Informations-Modul (SIM)                   |
| 0x02 | SZL | Schaltzentrum Lenksäule                                     |
| 0x03 | SASL | Satellit A-Säule links                                     |
| 0x04 | SASR | Satellit A-Säule rechts                                    |
| 0x05 | STVL | Satellit Tuer vorne links                                  |
| 0x06 | STVR | Satellit Tuer vorne rechts                                 |
| 0x07 | SSFA | Satellit Sitz Fahrer                                       |
| 0x08 | SSBF | Satellit Sitz Beifahrer                                    |
| 0x09 | SBSL | Satellit B-Säule links                                     |
| 0x0A | SBSR | Satellit B-Säule rechts                                    |
| 0x0D | SSH | Satellit Sitz hinten                                        |
| 0x0E | SFZ | Satellit Fahrzeugzentrum                                    |
| 0x12 | DME,DDE | Motor Elektronik / Diesel Elektronik                    |
| 0x13 | DME2,DDE2 | Motor Elektronik 2 / Diesel Elektronik Slave          |
| 0x14 | CEM | Clean-Energy-Modul                                          |
| 0x17 | EKP | Kraftstoffpumpe                                             |
| 0x18 | EGS,SMG | Getriebesteuerung/Sequenzielles Manuelles Getriebe      |
| 0x20 | RDC | Reifendruck-Control                                         |
| 0x21 | ACC | Aktive Geschwindigkeitsregelung                             |
| 0x22 | AHL | Adaptives Kurvenlicht                                       |
| 0x23 | ARS | Dynamic Drive                                               |
| 0x24 | CVM | Cabrioverdeck-Modul                                         |
| 0x27 | PGS, CA | Passive-Go-Steuergerät / Comfort Access                 |
| 0x29 | DSC | Dynamische Stabilitäts-Control                              |
| 0x2A | EMF | Elektromechanische Feststellbremse                          |
| 0x32 | SG-FD | Steuergerät Fond-Display                                  |
| 0x38 | EHC | Höhenstands-Control                                         |
| 0x39 | EDC-K | Dämpfer-Control                                           |
| 0x40 | CAS | Car Access System                                           |
| 0x41 | DWA | Diebstahlwarnanlage                                         |
| 0x42 | CIM | Chassis Integrations Modul                                  |
| 0x43 | PM | Powermodul                                                   |
| 0x44 | SHD | Schiebehebedach                                             |
| 0x45 | RLS | Regen-Fahrlicht-Sensor                                      |
| 0x46 | WIM | Wischerzentrum                                              |
| 0x49 | Sec1 | Security1                                                  |
| 0x4C | TMFA | Tuermodul Fahrertuer                                       |
| 0x4D | TMBF | Tuermodul Beifahrertuer                                    |
| 0x4E | TMFAH | Tuermodul Fahrertuer hinten                               |
| 0x4F | TMBFH | Tuermodul Beifahrertuer hinten                            |
| 0x5F | FLA | Fernlichtassistent                                          |
| 0x60 | KOMBI | Instrumentenkombination                                   |
| 0x63 | MMI/GT bzw. CD | MMI/Grafikteil / Control Display                 |
| 0x64 | PDC | Park Distance Control                                       |
| 0x65 | BZM | Bedienzentrum Mittelkonsole                                 |
| 0x66 | BZMF | Bedienzentrum Mittelarmlehne Fond                          |
| 0x67 | CON | Controller                                                  |
| 0x68 | FCON | Fond-Controller                                            |
| 0x69 | SM_FAH | Sitzmodul Fahrer hinten                                  |
| 0x6A | SMBFH | Sitzmodul Beifahrer hinten                                |
| 0x6B | HKL | Heckklappenlift                                             |
| 0x6C | KFS | Kühlerfigursteuerung                                        |
| 0x6D | SMFA | Sitzmodul Fahrer                                           |
| 0x6E | SMBF | Sitzmodul Beifahrer                                        |
| 0x70 | LM | Lichtmodul                                                   |
| 0x71 | AHM | Anhängermodul                                               |
| 0x73 | CID | Central Information Display                                 |
| 0x74 | FD | Fond-Display                                                 |
| 0x75 | FD2 | Fond-Display 2                                              |
| 0x78 | IHKA | Integrierte Heiz-Klima-Automatik                           |
| 0x79 | FKA | Fondklimaanlage                                             |
| 0x7A | SH | Standheizgerät                                               |
| 0x8B | NVE | Night Vision Elektronik                                     |
| 0xE9 | K-CAN S | Bus-System System für Karosserieumfänge                 |
| 0xEA | PT-CAN | Bus-System für Antriebs- und Fahrwerksbereich            |
| 0xFE | K-CAN P | Bus-System Peripherie für Karosserieumfänge             |
| 0xFF | unbekannt | unbekanntes Steuergerät                               |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |
