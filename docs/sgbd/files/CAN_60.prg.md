# CAN_60.prg

## General

|  |  |
| --- | --- |
| File | CAN_60.prg |
| Type | PRG |
| Jobs | 8 |
| Tables | 12 |
| Origin | BMW VS-42 Asum |
| Revision | 11.01 |
| Author | pa Asum (VS-42), ad David (VS-42), jr Rossmann (VS-42), rm mittermeier |
| ECU Comment | CAN-Busanalyse E60 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | CAN_60 |  |  |
| ORIGIN | string | BMW VS-42 Asum |  |  |
| REVISION | string | 11.01 |  |  |
| AUTHOR | string | pa Asum (VS-42), ad David (VS-42), jr Rossmann (VS-42), rm mittermeier |  |  |
| COMMENT | string | CAN-Busanalyse E60 |  |  |
| PACKAGE | string | 1.32 |  |  |
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
| 0x2776 | 2776 DME: Botschaft vom SZL fehlt |
| 0x27EC | 27EC DME: Botschaft vom EGS fehlt |
| 0x27ED | 27ED DME: Botschaft vom DSC fehlt |
| 0x27EE | 27EE DME: Botschaft von der Instrumentenkombination fehlt |
| 0x27EF | 27EF DME: Botschaft vom ACC fehlt |
| 0x27F3 | 27F3 DME: LOCAL CAN-Botschaft von Valvetronic fehlt |
| 0x2828 | 2828 DME: Botschaft vom ARS fehlt |
| 0x2829 | 2829 DME: Botschaft vom CAS fehlt |
| 0x282A | 282A DME: Botschaft vom IHKA fehlt |
| 0x282B | 282B DME: Botschaft vom Powermodul fehlt |
| 0x282C | 282C DME: Botschaft vom SZL fehlt |
| 0x293C | 293C DME: Botschaftsüberwachung: Drehmomentanforderung AFS |
| 0x293D | 293D DME: Botschaftsüberwachung: EKP |
| 0x2947 | 2947 DME: Botschaftsüberwachung: Drehmomentanforderung ACC |
| 0x2948 | 2948 DME: Botschaftsüberwachung: ARS |
| 0x2949 | 2949 DME: Botschaftsüberwachung: CAS |
| 0x294A | 294A DME: Botschaftsüberwachung: Drehmomentanforderung DSC |
| 0x294B | 294B DME: Botschaftsüberwachung: Geschwindigkeit DSC |
| 0x294C | 294C DME: Botschaftsüberwachung: Status DSC |
| 0x294D | 294D DME: Botschaftsüberwachung: Drehmomentanforderung EGS |
| 0x294E | 294E DME: Botschaftsüberwachung: Getriebedaten EGS/SMG |
| 0x294F | 294F DME: Botschaftsüberwachung: Drehmomentanforderung SMG |
| 0x2950 | 2950 DME: Botschaftsüberwachung: Klimafunktion |
| 0x2951 | 2951 DME: Botschaftsüberwachung: Temperatur Instrumentenkombination |
| 0x2952 | 2952 DME: Botschaftsüberwachung: Kilometerstand Instrumentenkombination |
| 0x2953 | 2953 DME: Botschaftsüberwachung: Status Instrumentenkombination |
| 0x2954 | 2954 DME: Botschaftsüberwachung: Batteriespannung Powermodul |
| 0x2955 | 2955 DME: Botschaftsüberwachung: Ladespannung Powermodul |
| 0x2956 | 2956 DME: Botschaftsüberwachung: Bedienung Fahrgeschwindigkeitsregler Schaltzentrum Lenksäule |
| 0x2957 | 2957 DME: Botschaftsüberwachung: Lenkradwinkel Schaltzentrum Lenksäule |
| 0x2958 | 2958 DME: Botschaftsüberwachung: Sporttaster |
| 0x29AF | 29AF DME: Botschafts- und Signalüberwachung KL.15 |
| 0x2AD0 | 2AD0 DME: Botschaft der Getriebesteuerung fehlt |
| 0x2D5B | 2D5B DME: Botschaft von der EGS (Momentenanforderung) fehlerhaft |
| 0x2DBF | 2DBF DME: Botschaft vom ACC fehlt |
| 0x2DC0 | 2DC0 DME: Botschaft vom LDM fehlt |
| 0x2DC3 | 2DC3 DME: Überwachung Klemme 15 |
| 0x2DC8 | 2DC8 DME: Botschaft vom EGS fehlt, EGS 1 |
| 0x2DC9 | 2DC9 DME: Botschaft vom EGS fehlt, EGS 2 |
| 0x2DCA | 2DCA DME: Botschaft vom EGS fehlt |
| 0x2DCB | 2DCB DME: Botschaft vom SSG fehlt |
| 0x2DCC | 2DCC DME: Botschaft vom ASC/DSC fehlt, ASC 1 |
| 0x2DCD | 2DCD DME: Botschaft vom ASC/DSC fehlt, ASC 3 |
| 0x2DCE | 2DCE DME: Botschaft vom ASC/DSC fehlt; ASC 4 |
| 0x2DCF | 2DCF DME: Botschaft vom KOMBI fehlt |
| 0x2DD0 | 2DD0 DME: Botschaft von der Instrumentenkombination fehlt, I-Kombi 2 |
| 0x2DD1 | 2DD1 DME: Botschaft von der Instrumentenkombination fehlt, I-Kombi 3 |
| 0x2DD2 | 2DD2 DME: Botschaft vom LWS-Steuergerät fehlt, LWS |
| 0x2DD3 | 2DD3 DME: Botschaft vom SMG-Steuergerät fehlt, SMG 1 |
| 0x2DD5 | 2DD5 DME: Botschaft von der EKP fehlt |
| 0x2DD7 | 2DD7 DME: Botschaft vom DSC fehlt |
| 0x2DD8 | 2DD8 DME: Botschaft vom AFS fehlt |
| 0x2DD9 | 2DD9 DME: Botschaft vom ARS fehlt |
| 0x2DDA | 2DDA DME: Botschaft vom CAS fehlt |
| 0x2DDB | 2DDB DME: Botschaft vom IHKA fehlt |
| 0x2DDC | 2DDC DME: Botschaft vom SZL fehlt |
| 0x2DE0 | 2DE0 DME: Botschaft von der elektrischen Kraftstoffpumpe fehlt, EKP |
| 0x2F4E | 2F4E DME: Fahrzeuggeschwindigkeit, Signal |
| 0x2F50 | 2F50 DME: Botschaft vom KOMBI fehlt |
| 0x2F80 | 2F80 DME: Motorabstellzeit, Plausibilität |
| 0x3F62 | 3F62 DDE: Fahrgeschwindigkeitssignal über CAN |
| 0x41A6 | 41A6 DDE: Botschaft (CBS_RESET, 0x580) |
| 0x41A7 | 41A7 DDE: Botschaft (CBS Reset, 0x580) |
| 0x41A8 | 41A8 DDE: Botschaft (CBS Reset, 0x580) |
| 0x4325 | 4325 DDE: Botschaft (Drehmoment SSG, 0xBD) |
| 0x4326 | 4326 DDE: Botschaft (Drehmoment SSG, 0xBD) |
| 0x4327 | 4327 DDE: Botschaft (Drehmoment SSG, 0xBD) |
| 0x4328 | 4328 DDE: Botschaft (Drehmoment SSG, 0xBD) |
| 0x4445 | 4445 DDE: Botschaft (Drehmoment AFS, 0xB9) |
| 0x4446 | 4446 DDE: Botschaft (Drehmoment AFS, 0xB9) |
| 0x4447 | 4447 DDE: Botschaft (Drehmoment AFS, 0xB9) |
| 0x4448 | 4448 DDE: Botschaft (Drehmoment AFS, 0xB9) |
| 0x4457 | 4457 DDE: Botschaft (Lenkradwinkel, 0xC4) |
| 0x4458 | 4458 DDE: Botschaft (Lenkradwinkel, 0xC4) |
| 0x453B | 453B DDE: PT-CAN-Bus |
| 0x4567 | 4567 DDE: Botschaft (Codierung, 0x395) |
| 0x4568 | 4568 DDE: Botschaft (Codierung, 0x395) |
| 0x4577 | 4577 DDE: Botschaft (Crash, 0x135) |
| 0x4578 | 4578 DDE: Botschaft (Crash, 0x135) |
| 0x4597 | 4597 DDE: Botschaft (0x331) |
| 0x4598 | 4598 DDE: Botschaft (0x331) |
| 0x45F5 | 45F5 DDE: Botschaft (Drehmoment ACC, 0xB7) |
| 0x45F6 | 45F6 DDE: Botschaft (Drehmoment ACC, 0xB7) |
| 0x45F7 | 45F7 DDE: Botschaft (Drehmoment ACC, 0xB7) |
| 0x45F8 | 45F8 DDE: Botschaft (Drehmoment ACC, 0xB7) |
| 0x4637 | 4637 DDE: Botschaft (Standverbraucher) |
| 0x4638 | 4638 DDE: Botschaft (Standverbraucher) |
| 0x47F7 | 47F7 DDE: Botschaft (STAT_SITZBELEGUNG_GURT, 0x2FA) |
| 0x47F8 | 47F8 DDE: Botschaft (STAT_SITZBELEGUNG_GURT, 0x2FA) |
| 0x4803 | 4803 DDE: Botschaft (Drehmomentüberwachung) vom ACC/LDM |
| 0x4810 | 4810 DDE: Botschaft (Drehmomenteingriff) vom ACC/LDM |
| 0x48A5 | 48A5 DDE: Botschaft (VEH_MOD, 0x315) |
| 0x48A6 | 48A6 DDE: Botschaft (VEH_MOD, 0x315) |
| 0x48A7 | 48A7 DDE: Botschaft (VEH_MOD, 0x315) |
| 0x48A8 | 48A8 DDE: Botschaft (VEH_MOD, 0x315) |
| 0x4991 | 4991 DDE: Botschaft (Kombi, 0x1B4) |
| 0x4992 | 4992 DDE: Botschaft (Kombi, 0x1B4) |
| 0x4993 | 4993 DDE: Botschaft (Kombi, 0x1B4) |
| 0x49A2 | 49A2 DDE: Botschaft (Außentemperatur, 0x310) |
| 0x49A3 | 49A3 DDE: Botschaft (Außentemperatur, 0x310) |
| 0x49A7 | 49A7 DDE: Botschaft (RQ_STG_EFAN, 0x?) |
| 0x49A8 | 49A8 DDE: Botschaft (RQ_STG_EFAN, 0x?) |
| 0x49B7 | 49B7 DDE: Botschaft (STAT_EKP, 0x335) |
| 0x49B8 | 49B8 DDE: Botschaft (STAT_EKP, 0x335) |
| 0x49F2 | 49F2 DDE: Botschaft (Geschwindigkeit, 0xCE) |
| 0x49F3 | 49F3 DDE: Botschaft (Geschwindigkeit, 0xCE) |
| 0x4A97 | 4A97 DDE: Botschaft (CBS_RESET_2, 0x580) |
| 0x4A98 | 4A98 DDE: Botschaft (CBS_RESET_2, 0x580) |
| 0x4AA7 | 4AA7 DDE: Botschaft (STAT_ANHAENGER, 0x2E4) |
| 0x4AA8 | 4AA8 DDE: Botschaft (STAT_ANHAENGER, 0x2E4) |
| 0x4AB7 | 4AB7 DDE: Botschaft (UHRZEIT_DATUM, 0x2F8) |
| 0x4AB8 | 4AB8 DDE: Botschaft (UHRZEIT_DATUM, 0x2F8) |
| 0x4BD2 | 4BD2 DDE: Drehmomentanforderung ARS |
| 0x4BE2 | 4BE2 DDE: Botschaft (Getriebedaten, 0xBA) |
| 0x4BE3 | 4BE3 DDE: Botschaft (Getriebedaten, 0xBA) |
| 0x4BE7 | 4BE7 DDE: Botschaft (Getriebedaten 2, 0x1A2) |
| 0x4BE8 | 4BE8 DDE: Botschaft (Getriebedaten 2, 0x1A2) |
| 0x4BF2 | 4BF2 DDE: Botschaft (Klimaanlage, 0x1B5) |
| 0x4BF3 | 4BF3 DDE: Botschaft (Klimaanlage, 0x1B5) |
| 0x4BF7 | 4BF7 DDE: Botschaft (Reichweite, 0x330) |
| 0x4BF8 | 4BF8 DDE: Botschaft (Reichweite, 0x330) |
| 0x4C00 | 4C00 DDE: Botschaft (Fahrgeschwindigkeitsregelung/ACC, 0x194) |
| 0x4C01 | 4C01 DDE: Botschaft (Fahrgeschwindigkeitsregelung/ACC, 0x194) |
| 0x4C02 | 4C02 DDE: Botschaft (Fahrgeschwindigkeitsregelung/ACC, 0x194) |
| 0x4C03 | 4C03 DDE: Botschaft (Fahrgeschwindigkeitsregelung/ACC, 0x194) |
| 0x4C06 | 4C06 DDE: Botschaft (Status ARS, 0x1AC) |
| 0x4C07 | 4C07 DDE: Botschaft (Status ARS, 0x1AC) |
| 0x4C08 | 4C08 DDE: Botschaft (Status ARS, 0x1AC) |
| 0x4C12 | 4C12 DDE: Botschaft (Status DSC, 0x19E) |
| 0x4C13 | 4C13 DDE: Botschaft (Status DSC, 0x19E) |
| 0x4C15 | 4C15 DDE: Botschaft (Klemme 15, 0x130) |
| 0x4C16 | 4C16 DDE: Botschaft (Klemme 15, 0x130) |
| 0x4C17 | 4C17 DDE: Botschaft (Klemme 15, 0x130) |
| 0x4C18 | 4C18 DDE: Botschaft (Klemme 15, 0x130) |
| 0x4C20 | 4C20 DDE: Botschaft (Drehmoment DSC, 0xB6) |
| 0x4C21 | 4C21 DDE: Botschaft (Drehmoment DSC, 0xB6) |
| 0x4C22 | 4C22 DDE: Botschaft (Drehmoment DSC, 0xB6) |
| 0x4C23 | 4C23 DDE: Botschaft (Drehmoment DSC, 0xB6) |
| 0x4C27 | 4C27 DDE: Botschaft (Geschwindigkeit, 0x1A0) |
| 0x4C28 | 4C28 DDE: Botschaft (Geschwindigkeit, 0x1A0) |
| 0x4CB2 | 4CB2 DDE: Botschaft (PWRMNG_LOADV, 0x334) |
| 0x4CB3 | 4CB3 DDE: Botschaft (PWRMNG_LOADV, 0x334) |
| 0x4DF0 | 4DF0 DDE: Botschaft (Drehmoment Getriebe, 0xB5) |
| 0x4DF1 | 4DF1 DDE: Botschaft (Drehmoment Getriebe, 0xB5) |
| 0x4DF2 | 4DF2 DDE: Botschaft (Drehmoment Getriebe, 0xB5) |
| 0x4DF3 | 4DF3 DDE: Botschaft (Drehmoment Getriebe, 0xB5) |
| 0x4F77 | 4F77 EGS: Fehlerhafter Positiver Motoreingriff |
| 0x4F7A | 4F7A EGS: Signal vom Verteilergetriebe fehlerhaft |
| 0x5140 | 5140 SMG/EGS: Botschaft von der Motorsteuerung fehlt |
| 0x5141 | 5141 SMG/EGS: Botschaft von der Dynamischen Stabilitäts-Control fehlt |
| 0x5142 | 5142 SMG/EGS: Botschaft von der Instrumentenkombination fehlt |
| 0x5143 | 5143 EGS: Botschaft vom Active Cruise Control fehlt |
| 0x5144 | 5144 EGS: Botschaft vom Car Access System fehlt |
| 0x514A | 514A EGS: Botschaft vom Schaltzentrum Mittelkonsole fehlt |
| 0x5150 | 5150 EGS: Botschaft vom Anhängermodul fehlt |
| 0x51A5 | 51A5 SMG/EGS: Botschaft (Momentenschnittstelle) von der Motorsteuerung fehlt |
| 0x51A7 | 51A7 SMG/EGS: Botschaft (Motordrehzahl) von der Motorsteuerung fehlt |
| 0x51A8 | 51A8 SMG/EGS: Botschaft (Drosselklappe/Fahrpedal) von der Motorsteuerung fehlt |
| 0x51A9 | 51A9 SMG: Botschaft: Motorkühlmitteltemperatur unplausibel |
| 0x51AD | 51AD EGS/SMG: Botschaft von der Dynamischen Stabilitäts-Control fehlt |
| 0x51AE | 51AE SMG/EGS: Botschaft (Bremslichtschalter) von der Motorsteuerung fehlt |
| 0x51AF | 51AF EGS: Botschaft vom Verteilergetriebe fehlt |
| 0x51B0 | 51B0 EGS/SMG: Botschaft von der DSC (Bremslichtschalter/Bremsdruck) unplausibel |
| 0x51B1 | 51B1 SMG: Botschaft: Raddrehzahlen Hinterachse unplausibel |
| 0x51B3 | 51B3 SMG: Botschaft: Motoröltemperatur unplausibel |
| 0x51B4 | 51B4 SMG: Botschaft: Außentemperatur unplausibel |
| 0x51B6 | 51B6 SMG: Botschaft: Motoreingriff unplausibel |
| 0x51B8 | 51B8 SMG: Signal von der DSC fehlerhaft |
| 0x51B9 | 51B9 SMG: Signal von der ACC fehlerhaft |
| 0x51BB | 51BB SMG: Signal des Klemme 15 Status fehlerhaft |
| 0x51BC | 51BC SMG: Signal vom SPORT-Taster fehlerhaft |
| 0x5200 | 5200 SMG: Signal Motordrehzahl fehlerhaft |
| 0x5201 | 5201 SMG: Signal Radgeschwindigkeit hinten links fehlerhaft |
| 0x5202 | 5202 SMG: Signal Radgeschwindigkeit hinten rechts fehlerhaft |
| 0x5203 | 5203 SMG: Signal Radgeschwindigkeit vorn links fehlerhaft |
| 0x5204 | 5204 SMG: Signal Radgeschwindigkeit vorn rechts fehlerhaft |
| 0x520A | 520A SMG: Signal Lenkwinkel fehlerhaft |
| 0x520B | 520B SMG: Signal Querbeschleunigung fehlerhaft |
| 0x520C | 520C SMG: Signal Längsbeschleunigung fehlerhaft |
| 0x520D | 520D SMG: Signal Leerlaufdrehzahl fehlerhaft |
| 0x520E | 520E SMG: Signal Geschwindigkeitsregelung fehlerhaft |
| 0x520F | 520F SMG: Signal Fahrertür fehlerhaft |
| 0x5210 | 5210 SMG: Signal Klemmenstatus fehlerhaft |
| 0x5211 | 5211 SMG: Signal Schlüsselnummer fehlerhaft |
| 0x5212 | 5212 SMG: Signal Anhänger fehlerhaft |
| 0x5213 | 5213 SMG: Signal Regelung fehlerhaft |
| 0x5214 | 5214 SMG: Signal vom DSC fehlerhaft |
| 0x5215 | 5215 SMG: Signal Verzögerung fehlerhaft |
| 0x5216 | 5216 SMG: Signal DSC Quittierung fehlerhaft |
| 0x5217 | 5217 SMG: Signal Bremsdruck fehlerhaft |
| 0x55C0 | 55C0 VTG: Allrad Abschaltung. Abbruch Allrad-Notlaufregelung ( falsche CAN-Signale) |
| 0x55C2 | 55C2 VTG: Allrad Abschaltung. Keine DXC Sollmomentenvorgabe. |
| 0x55C3 | 55C3 VTG: Allrad-Notlaufregelung aktiviert. Keine DXC Sollmomentenvorgabe. |
| 0x55C4 | 55C4 VTG: Botschaft (Sollmoment, BB) |
| 0x55C5 | 55C5 VTG: Botschaft (Motormoment 3, AA) |
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
| 0x5E6A | 5E6A DSC: Botschaft (Drehmoment 0B6) nicht abgeschickt |
| 0x5E6B | 5E6B DSC: Botschaft (Lenkradwinkel 0C4) nicht abgeschickt |
| 0x5E72 | 5E72 DSC: Botschaft (Geschwindigkeit 0CE) nicht abgeschickt |
| 0x5E74 | 5E74 DSC: Botschaft (Status DSC 19E) nicht abgeschickt |
| 0x5E75 | 5E75 DSC: Botschaft (Geschindigkeit 1A0) nicht abgeschickt |
| 0x5E76 | 5E76 DSC: Botschaft (Wegstrecke 1A6) nicht abgeschickt |
| 0x5E77 | 5E77 DSC: Botschaft (Status RPA 31D) nicht abgeschickt |
| 0x5E7A | 5E7A DSC: Botschaft (Bremsdruck 2B2) nicht abgeschickt |
| 0x5E7E | 5E7E DSC: Botschaft (Rad-Toleranz 374) nicht abgeschickt |
| 0x5E83 | 5E83 DSC: Botschaft (4A9) nicht abgeschickt |
| 0x5E84 | 5E84 DSC: Botschaft (5A9) nicht abgeschickt |
| 0x5E85 | 5E85 DSC: Botschaft (Gierrate 0C5) nicht abgeschickt |
| 0x5E89 | 5E89 DSC: Botschaft (Gierrate 0CA) nicht abgeschickt |
| 0x5E8A | 5E8A DSC: Botschaft (Regeleingriff 11E) nicht abgeschickt |
| 0x5E8B | 5E8B DSC: Botschaft (Geschwindigkeit 0CE) nicht abgeschickt |
| 0x5E8C | 5E8C DSC: Botschaft ( Anhänger 2E4) fehlt |
| 0x5EC5 | 5EC5 DSC: Botschaft (Lenkwinkelsensor) fehlt |
| 0x5F2E | 5F2E DSC: Botschaft (Getriebe 0BA) fehlt |
| 0x5F4C | 5F4C DSC: Botschaften (Kombi 1B4, 310, 330, 5E0) fehlen |
| 0x5F57 | 5F57 DSC: Botschaften (CAS 130 380 388) fehlen |
| 0x9328 | 9328 ZGM/SGM-ZGM: K-CAN Kommunikationsfehler |
| 0x9329 | 9329 ZGM/SGM-ZGM: PT-CAN Kommunikationsfehler |
| 0x932A | 932A ZGM/SGM-ZGM: BYTEFLIGHT Kommunikationsfehler |
| 0x93B0 | 93B0 SGM-SIM: Botschaft (3) vom Türmodul vorn links bzw. Satellit Tür vorn rechts (E60) fehlt |
| 0x93B2 | 93B2 SGM-SIM: Botschaft (5) vom Satellit B-Säule links fehlt |
| 0x93B4 | 93B4 SGM-SIM: Botschaft (7) vom Satellit B-Säule rechts fehlt |
| 0x93B6 | 93B6 SGM-SIM: Botschaft (9) vom Satellit Fahrzeugzentrum fehlt |
| 0x93B8 | 93B8 SGM-SIM: Botschaft (B) vom Satellit B-Säule links (E60) bzw. Satellit A-Säule links (E65) fehlt |
| 0x93B9 | 93B9 SGM-SIM: Botschaft (C) vom Satellit B-Säule rechts (E60) bzw. Satellit A-Säule rechts (E65) fehlt |
| 0x93BA | 93BA SGM-SIM: Botschaft (D) vom Satellit Fahrzeugzentrum fehlt |
| 0x93BC | 93BC SGM-SIM: Botschaft (11) vom Satellit B-Säule rechts fehlt |
| 0x93BD | 93BD SGM-SIM: Botschaft (12) vom Satellit B-Säule links fehlt |
| 0x93BE | 93BE SGM-SIM: Botschaft (20) vom Satellit B-Säule links (E60) bzw. Satellit Sitz Fahrer (E65) fehlt |
| 0x93BF | 93BF SGM-SIM: Botschaft (21) vom Satellit B-Säule rechts (E60) bzw. Satellit Sitz Beifahrer (E65) fehlt |
| 0x93C1 | 93C1 SGM-SIM: Botschaft (35) vom Active Front Steering fehlt |
| 0x93C2 | 93C2 SGM-SIM: Botschaft (39) von Dynamische Stabilitäts-Control fehlt |
| 0x93C3 | 93C3 SGM-SIM: Botschaft (43) von der Motorsteuerung fehlt |
| 0x93C4 | 93C4 SGM-SIM: Botschaft (52) von Schaltzentrum Mittelkonsole fehlt |
| 0x93C5 | 93C5 SGM-SIM: Botschaft (Motordaten, 45) von der Motorsteuerung fehlt |
| 0x93CE | 93CE SGM-SIM: Botschaft von Schaltzentrum Mittelkonsole fehlerhaft |
| 0x93CF | 93CF SGM-SIM: Botschaft (Geschwindigkeit) von Dynamische Stabilitäts-Control fehlerhaft |
| 0x93D0 | 93D0 SGM-SIM: Botschaft (Klemme 15) vom Car Acces System fehlerhaft |
| 0x93D1 | 93D1 SGM-SIM: Botschaft von der Motorsteuerung fehlerhaft |
| 0x93D2 | 93D2 SGM-SIM: Botschaft vom Satellit B-Säule rechts fehlerhaft |
| 0x94B2 | 94B2 SZL: Botschaft (5) vom Satelit B-Säule links fehlt |
| 0x94B4 | 94B4 SZL: Botschaft (7) vom Satellit B-Säule rechts fehlt |
| 0x94B8 | 94B8 SZL: Botschaft (B) vom Satellit B-Säule links fehlt |
| 0x94B9 | 94B9 SZL: Botschaft (C) vom Satellit B-Säule rechts fehlt |
| 0x94BA | 94BA SZL: Botschaft (D) vom Satellit Fahrzeugzentrum fehlt |
| 0x94BD | 94BD SZL: Botschaft (20) vom Satellit Sitz Fahrer (E65,E66,E67,RR01) bzw. Satellit B-Säule links (E60,E61,E63,E64) fehlt |
| 0x94BE | 94BE SZL: Botschaft (21) vom Satellit B-Säule rechts fehlt |
| 0x94C0 | 94C0 SZL: Botschaft (71) vom Sicherheits- Informationsmodul bzw. Sicherheits- und Gateway-Modul fehlt |
| 0x9505 | 9505 SZL: K-CAN Kommunikationsfehler |
| 0x9631 | 9631 TMFA: Botschaft (5) vom Satellit B-Säule links fehlt |
| 0x9633 | 9633 TMFA:  Botschaft (7) vom Satellit B-Säule rechts fehlt |
| 0x9637 | 9637 TMFA:  Botschaft (B) vom Satellit B-Säule links fehlt |
| 0x9638 | 9638 TMFA:  Botschaft (C) vom Satellit B-Säule rechts fehlt |
| 0x963C | 963C TMFA: Botschaft (20) vom Satellit B-Säule links fehlt |
| 0x963D | 963D TMFA: Botschaft (21) vom Satellit B-Säule rechts fehlt |
| 0x963F | 963F TMFA: Botschaft (71) vom Sicherheits- und Gateway-Modul fehlt |
| 0x96B1 | 96B1 TMBF: Botschaft (5) vom Satellit B-Säule links fehlt |
| 0x96B3 | 96B3 TMBF:  Botschaft (7) vom Satellit B-Säule rechts fehlt |
| 0x96B7 | 96B7 TMBF:  Botschaft (B) vom Satellit B-Säule links fehlt |
| 0x96B8 | 96B8 TMBF:  Botschaft (C) vom Satellit B-Säule rechts fehlt |
| 0x96BC | 96BC TMBF: Botschaft (20) vom Satellit B-Säule links fehlt |
| 0x96BD | 96BD TMBF: Botschaft (21) vom Satellit B-Säule rechts fehlt |
| 0x96BF | 96BF TMBF: Botschaft (71) vom Sicherheits- und Gateway-Modul fehlt |
| 0x982D | 982D SBSL: Botschaft (1) vom Satellit Tür vorn links (E85) bzw. Türmodul vorn links (E6x) fehlt |
| 0x982F | 982F SBSL: Botschaft (3) vom Satellit Tür vorn rechts (E85) bzw. Türmodul vorn rechts (E6x) fehlt |
| 0x9833 | 9833 SBSL: Botschaft (7) vom Satellit B-Säule rechts fehlt |
| 0x9835 | 9835 SBSL: Botschaft (9) vom Sicherheits- und Informationsmodul (E85) bzw. Satellit Fahrzeugzentrum (E6x) fehlt |
| 0x9836 | 9836 SBSL: Botschaft (A) vom Sicherheits- und Informationsmodul (E85) bzw. Sicherheits- und Gateway-Modul (E6x) fehlt |
| 0x9838 | 9838 SBSL: Botschaft (C) vom Satellit B-Säule rechts fehlt |
| 0x9839 | 9839 SBSL: Botschaft (D) vom Sicherheits- und Informationsmodul (E85) bzw. Satellit Fahrzeugzentrum (E6x) fehlt |
| 0x983D | 983D SBSL: Botschaft (21) vom Satellit B-Säule rechts fehlt |
| 0x983F | 983F SBSL: Botschaft (71) vom Sicherheits- und Informationsmodul (E85) bzw. Sicherheits- und Gateway-Modul (E6x) fehlt |
| 0x98AD | 98AD SBSR: Botschaft (1) vom Satellit Tür vorn links (E85) bzw. Türmodul vorn links (E6x) fehlt |
| 0x98AF | 98AF SBSR: Botschaft (3) vom Satellit Tür vorn rechts (E85) bzw. Türmodul vorn rechts (E6x) fehlt |
| 0x98B1 | 98B1 SBSR: Botschaft (5) vom Satellit B-Säule links fehlt |
| 0x98B5 | 98B5 SBSR: Botschaft (9) vom Sicherheits- und Informationsmodul (E85) bzw. Satellit Fahrzeugzentrum (E6x) fehlt |
| 0x98B6 | 98B6 SBSR: Botschaft (A) vom Sicherheits- und Informationsmodul (E85) bzw. Sicherheits- und Gateway-Modul (E6x) fehlt |
| 0x98B7 | 98B7 SBSR: Botschaft (B) vom Satellit B-Säule links fehlt |
| 0x98B9 | 98B9 SBSR: Botschaft (D) vom Sicherheits- und Informationsmodul (E85) bzw. Satellit Fahrzeugzentrum (E6x) fehlt |
| 0x98BC | 98BC SBSR: Botschaft (20) vom Satellit B-Säule links fehlt |
| 0x98BF | 98BF SBSR: Botschaft (71) vom Sicherheits- und Informationsmodul (E85) bzw. Sicherheits- und Gateway-Modul (E6x) fehlt |
| 0x9AAD | 9AAD SFZ: Botschaft (1) vom Türmodul vorn rechts fehlt |
| 0x9AAF | 9AAF SFZ: Botschaft (3) vom Türmodul vorn links fehlt |
| 0x9AB1 | 9AB1 SFZ: Botschaft (5) vom Satellit B-Säule links fehlt |
| 0x9AB3 | 9AB3 SFZ: Botschaft (7) vom Satellit B-Säule rechts fehlt |
| 0x9AB6 | 9AB6 SFZ: Botschaft (A) vom Sicherheits- und Gateway-Modul fehlt |
| 0x9AB7 | 9AB7 SFZ: Botschaft (B) vom Satellit B-Säule links fehlt |
| 0x9AB8 | 9AB8 SFZ: Botschaft (C) vom Satellit B-Säule rechts fehlt |
| 0x9ABC | 9ABC SFZ: Botschaft (20) vom Satellit B-Säule links fehlt |
| 0x9ABD | 9ABD SFZ: Botschaft (21) vom Satellit B-Säule rechts fehlt |
| 0x9ABF | 9ABF SFZ: Botschaft (71) vom Sicherheits- und Gateway-Modul fehlt |
| 0x9E29 | 9E29 PDC: Funktionsanzeige |
| 0x9E2A | 9E2A PDC: Park Distance Control-Taster |
| 0xA173 | A173 CCC-GW: K-CAN Leitungsfehler |
| 0xA3AB | A3AB KOMBI: Botschaft (Aktive Geschwindigkeitsregelung, 190) |
| 0xA3AD | A3AD KOMBI: Botschaft (Motordaten, 1D0) |
| 0xA3AE | A3AE KOMBI: Botschaft (Motordrehzahl, 0AA) |
| 0xA3B1 | A3B1 KOMBI: Botschaft (Blinkerkontrollleuchten-Zyklus, 1F6) |
| 0xA3B2 | A3B2 KOMBI: Botschaft (Klemmenstatus, 130) |
| 0xA3B3 | A3B3 KOMBI: Botschaft (Aktive Rollstabilisierung, 0BE) |
| 0xA3B6 | A3B6 KOMBI: Botschaft (Datenablage Condition Based Service, 394) |
| 0xA3B9 | A3B9 KOMBI: Botschaft (Dynamische Stabilitätskontrolle, 1E9) |
| 0xA3BD | A3BD KOMBI: Botschaft vom Sicherheits- und Gateway-Modul fehlt |
| 0xA3BE | A3BE KOMBI: Botschaft (Car Access System) |
| 0xA3C0 | A3C0 KOMBI: Botschaft (Anhängermodul) |
| 0xA3C3 | A3C3 KOMBI: Botschaft (Reifen Druck Control) |
| 0xA4F1 | A4F1 HUD: Botschaft fehlt |
| 0xA4F2 | A4F2 HUD: Botschaft (Klemmenstatus, 130) |
| 0xA4F3 | A4F3 HUD: Botschaft (Aktive Geschwindigkeitsregelung, 190) |
| 0xA4F4 | A4F4 HUD: Botschaft (Geschwindigkeit, 1A0) |
| 0xA4F5 | A4F5 HUD: Botschaft (Instrumentenkombination-Status, 1B4) |
| 0xA4F6 | A4F6 HUD: Botschaft (Geschwindigkeitssollwert, 200) |
| 0xA4F7 | A4F7 HUD: Botschaft (Bedienung Head-Up Display, 210) |
| 0xA4F8 | A4F8 HUD: Botschaft (Maßeinheiten, 2F7) |
| 0xA4F9 | A4F9 HUD: Botschaft (Fahrlichtstatus, 314) |
| 0xA4FA | A4FA HUD: Botschaft (Wegstreckenzählerstand/Reichweite, 330) |
| 0xA4FB | A4FB HUD: Botschaft (Check-Control-Meldung, 338) |
| 0xA4FC | A4FC HUD: Botschaft (Bordcomputerstatus, 35C) |
| 0xA4FD | A4FD HUD: Botschaft (Anzeige-Instrumentenkombination, 366) |
| 0xA4FE | A4FE HUD: K-CAN Leitungsfehler |
| 0xA4FF | A4FF HUD: K-CAN Kommunikationsfehler |
| 0xA500 | A500 HUD: K-CAN Kommunikationsfehler |
| 0xA501 | A501 HUD: K-CAN Kommunikationsfehler |
| 0xA502 | A502 HUD: K-CAN Kommunikationsfehler |
| 0xA549 | A549 KOMBI: Botschaft (Fahrzeugmodus, 315) |
| 0xA54A | A54A KOMBI: Botschaft (Car Access System, 396) |
| 0xA54E | A54E KOMBI: Botschaft (Sitzlehnenverriegelung Fahrer, 34B) |
| 0xA54F | A54F KOMBI: Botschaft (Sitzlehnenverriegelung Beifahrer, 34D) |
| 0xA550 | A550 KOMBI: Botschaft (Geschwindigkeit, 1A0) |
| 0xA555 | A555 KOMBI: Botschaft (Sitzbelegung, Gurtkontakte, 2FA) |
| 0xA556 | A556 KOMBI: Botschaft(Ausfall HDC-Anzeige, 32D) |
| 0xA70B | A70B ALBFA: Botschaft vom CAS fehlt |
| 0xA70C | A70C ALBFA: Botschaft vom SZM fehlt |
| 0xA70D | A70D ALBFA: Botschaft vom SZM fehlt |
| 0xA70E | A70E ALBFA: Botschaft vom SMFA fehlt |
| 0xA70F | A70F ALBFA: Botschaft vom Kombi fehlt |
| 0xA710 | A710 ALBFA: Botschaft vom Kombi fehlt |
| 0xA711 | A711 ALBFA: Botschaft vom DME/DDE fehlt |
| 0xA712 | A712 ALBFA: Botschaft vom DSC fehlt |
| 0xA713 | A713 ALBFA: Botschaft vom DSC fehlt |
| 0xA714 | A714 ALBFA: Botschaft vom DSC fehlt |
| 0xA715 | A715 ALBFA: Botschaft vom DSC fehlt |
| 0xA716 | A716 ALBFA: Botschaft vom Kombi fehlt |
| 0xA717 | A717 ALBFA: Botschaft vom DSC fehlt |
| 0xA718 | A718 ALBFA: Botschaft vom DSC fehlt |
| 0xA719 | A719 ALBFA: Botschaft vom DME/DDE fehlt |
| 0xA71A | A71A ALBFA: Botschaft vom SBSL fehlt |
| 0xA71C | A71C ALBFA: Botschaft vom SBSR fehlt |
| 0xA71F | A71F ALBFA: Botschaft vom CAS fehlt |
| 0xA720 | A720 ALBFA: Botschaft vom CAS fehlt |
| 0xA76B | A76B ALBBF: Botschaft vom CAS fehlt |
| 0xA76C | A76C ALBBF: Botschaft vom SZM fehlt |
| 0xA76D | A76D ALBBF: Botschaft vom SZM fehlt |
| 0xA76E | A76E ALBBF: Botschaft vom SMFA fehlt |
| 0xA76F | A76F ALBBF: Botschaft vom Kombi fehlt |
| 0xA770 | A770 ALBBF: Botschaft vom Kombi fehlt |
| 0xA771 | A771 ALBBF: Botschaft vom DME/DDE fehlt |
| 0xA772 | A772 ALBBF: Botschaft vom DSC fehlt |
| 0xA773 | A773 ALBBF: Botschaft vom DSC fehlt |
| 0xA774 | A774 ALBBF: Botschaft vom DSC fehlt |
| 0xA775 | A775 ALBBF: Botschaft vom DSC fehlt |
| 0xA776 | A776 ALBBF: Botschaft vom Kombi fehlt |
| 0xA777 | A777 ALBBF: Botschaft vom DSC fehlt |
| 0xA778 | A778 ALBBF: Botschaft vom DSC fehlt |
| 0xA779 | A779 ALBBF: Botschaft vom DME/DDE fehlt |
| 0xA77A | A77A ALBBF: Botschaft vom SBSL fehlt |
| 0xA77B | A77B ALBBF: Botschaft vom SBSR fehlt |
| 0xA77C | A77C ALBBF: Botschaft vom SBSR fehlt |
| 0xA77D | A77D ALBBF: Botschaft vom SMBF fehlt |
| 0xA77F | A77F ALBBF: Botschaft vom CAS fehlt |
| 0xA780 | A780 ALBBF: Botschaft vom CAS fehlt |
| 0xCD87 | CD87 DME/DDE: PT-CAN Kommunikationsfehler |
| 0xCD88 | CD88 DME: Local-CAN Bus Kommunikationsfehler |
| 0xCD8B | CD8B DME: PT-CAN-Bus Kommunikationsfehler |
| 0xCD8F | CD8F DME: PT-CAN Kommunikationsfehler |
| 0xCD94 | CD94 DME: Botschaft (Außentemperatur/Relativzeit, 310) |
| 0xCD95 | CD95 DME: Botschaft (Bedienung FGR/ACC, 194) |
| 0xCD96 | CD96 DME: Botschaft (Drehmomentanforderung ACC, B7) |
| 0xCD97 | CD97 DME: Botschaft (Drehmomentanforderung AFS, B9) |
| 0xCD98 | CD98 DME: Botschaft (Drehmomentanforderung DSC, B6) |
| 0xCD99 | CD99 DME: Botschaft (Drehmomentanforderung EGS, B5) |
| 0xCD9A | CD9A DME: Botschaft (Drehmomentanforderung SMG, BD) |
| 0xCD9B | CD9B DME: Botschaft (Fahrzeugmodus, 315) |
| 0xCD9C | CD9C DME: Botschaft (Geschwindigkeit, 1A0) |
| 0xCD9D | CD9D DME: Botschaft (Getriebedaten, BA) |
| 0xCD9E | CD9E DME: Botschaft (Getriebedaten2, 1A2) |
| 0xCD9F | CD9F DME: Botschaft (Kilometerstand/Reichweite, 330) |
| 0xCDA0 | CDA0 DME: Botschaft (Klemmenstatus, 130) |
| 0xCDA1 | CDA1 DME: Botschaft (Lenkradwinkel, C4) |
| 0xCDA2 | CDA2 DME: Botschaft (Powermanagement Batteriespannung, 3B4) |
| 0xCDA4 | CDA4 DME: Botschaft (Status ARS-Modul, 1AC) |
| 0xCDA5 | CDA5 DME: Botschaft (Status DSC, 19E) |
| 0xCDA6 | CDA6 DME: Botschaft (Status EKP, 335) |
| 0xCDA7 | CDA7 DME: Botschaft (Status Rückwärtsgang, 3B0) |
| 0xCDA8 | CDA8 DME: Botschaft (Status Kombi) |
| 0xCDA9 | CDA9 DME: Botschaft (Wärmestrom/Lastmoment Klima, 1B5) |
| 0xCDAA | CDAA DME: Botschaft (Status Crashabschaltung EKP, 135) |
| 0xCDAB | CDAB DME: Botschaft (Leuchtenzustand,  21A) |
| 0xCDAC | CDAC DME: Botschaft (Status Wasserventil,  3B5) |
| 0xCDAE | CDAE DME: Botschaft (Uhrzeit/Datum, 2F8) |
| 0xCDAF | CDAF DME: Botschaft (Status Anhänger, 2E4) |
| 0xCDB0 | CDB0 DME: Botschaft (Anzeige Getriebedaten) |
| 0xCDBB | CDBB DME: Botschaft (Radgeschwindigkeiten) |
| 0xCDBC | CDBC DME: Botschaft (Bedienung Audio Telefon) |
| 0xCE87 | CE87 AFS: F-CAN Kommunikationsfehler |
| 0xCE8B | CE8B AFS: PT-CAN Kommunikationsfehler |
| 0xCE94 | CE94 AFS: Botschaft (DSC-Sensor 2, ID=0C7) |
| 0xCE95 | CE95 AFS: Botschaft (DSC-Sensor, ID=0CB) |
| 0xCE96 | CE96 AFS: Botschaft (Radgeschwindigkeiten DSC, 0CE) |
| 0xCE97 | CE97 AFS: Botschaft (Summenlenkwinkel, ID=0C3) |
| 0xCE98 | CE98 AFS: Botschaft (Regeleingriffe DSC, 11E) |
| 0xCE99 | CE99 AFS: Botschaft (Lenkradwinkel, 0C8) |
| 0xCE9A | CE9A AFS: Botschaft (Radtoleranzabgleich, 374) |
| 0xCE9B | CE9B AFS: Botschaft (Fahrzeugzustand, 1A0) |
| 0xCE9C | CE9C AFS: Botschaft (Status DSC, 19E) |
| 0xCE9D | CE9D AFS: Botschaft (Motormoment 1, 0A8) |
| 0xCE9E | CE9E AFS: Botschaft (Motormoment 3, ID=0AA) |
| 0xCE9F | CE9F AFS: Botschaft (Motordaten, 1D0) |
| 0xCEA0 | CEA0 AFS: Botschaft (Status Lenkunterstützung, 0E0) |
| 0xCEA1 | CEA1 AFS: Botschaft (Klemmenstatus, 130) |
| 0xCEA2 | CEA2 AFS: Botschaft (Fahrgestellnummer, 380) |
| 0xCEA3 | CEA3 AFS: Botschaft (Kilometerstand, 330) |
| 0xCED4 | CED4 EKP: Botschaft von Motorsteuerung fehlt |
| 0xCF07 | CF07 SMG/EGS: Kommunikationsfehler: PT-CAN |
| 0xCF12 | CF12 SMG: Botschaft (24) vom Regen-Fahrlicht-Sensor fehlt |
| 0xCF13 | CF13 SMG: Botschaft (6, 26) vom DSC fehlt |
| 0xCF19 | CF19 EGS/SMG: Botschaft vom DSC fehlt |
| 0xCF1A | CF1A EGS/SMG: Botschaft vom DSC fehlt |
| 0xCF1B | CF1B EGS/SMG: Botschaft vom DSC fehlt |
| 0xCF1D | CF1D EGS/SMG: Botschaft vom DSC fehlt |
| 0xCF1F | CF1F EGS/SMG: Botschaft vom CAS fehlt |
| 0xCF21 | CF21 EGS/SMG: Botschaft vom KOMBI fehlt |
| 0xCF22 | CF22 EGS: Botschaft vom KOMBI fehlt |
| 0xCF23 | CF23 EGS: Botschaft vom KOMBI fehlt |
| 0xCF28 | CF28 SMG: Botschaft von der Motorelektronik fehlt |
| 0xCF2B | CF2B SMG: Botschaft vom MDrive fehlt |
| 0xCF30 | CF30 SMG: Botschaft über Check-Control-Meldung fehlt |
| 0xCF33 | CF33 SMG: Botschaft vom ACC fehlt |
| 0xCF4B | CF4B VTG: PT-CAN Kommunikationsfehler |
| 0xCF54 | CF54 VTG: Botschaft (Sollmoment, BB) |
| 0xCF55 | CF55 VTG: Botschaft (Motormoment 3, AA) |
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
| 0xD147 | D147 ACC2: PT-CAN Kommunikationsfehler |
| 0xD187 | D187 AHL: PT-CAN Kommunikationsfehler |
| 0xD1C7 | D1C7 ARS: PT-CAN Kommunikationsfehler |
| 0xD1DF | D1DF ARS: Botschaft (Fahrzeuggeschwindigkeit) von DSC |
| 0xD1E0 | D1E0 ARS: Botschaft (Außentemperatur) vom Kombi |
| 0xD1E1 | D1E1 ARS: Botschaft (Kühlwassertemperatur) von DME |
| 0xD1E2 | D1E2 ARS: Botschaft (Klemme 15) vom CAS |
| 0xD1E3 | D1E3 ARS: Botschaft (Klemme 50) vom CAS |
| 0xD1EB | D1EB ARS: Botschaft (Kilometerstand) vom Kombi |
| 0xD1ED | D1ED ARS: Botschaft (Status DSC) vom DSC |
| 0xD1F1 | D1F1 ARS: Botschaft (Geschwindigkeit, 1A0) |
| 0xD1F2 | D1F2 ARS: Botschaft (Klemmenstatus, 130) |
| 0xD204 | D204 CVM5: K-CAN Leitungsfehler |
| 0xD205 | D205 CVM5: K-CAN Kommunikationsfehler |
| 0xD206 | D206 CVM5: Botschaft von der Instrumentenkombination fehlt |
| 0xD207 | D207 CVM5: Botschaft von der Instrumentenkombination fehlt |
| 0xD208 | D208 CVM5: Botschaft vom Car Access System fehlerhaft |
| 0xD209 | D209 CVM5: Botschaft von der Instrumentenkombination fehlt |
| 0xD347 | D347 DSC: PT-CAN Kommunikationsfehler |
| 0xD34B | D34B DSC: F-CAN Kommunikationsfehler |
| 0xD354 | D354 DSC: Botschaft (Drehmoment 0A8) fehlt |
| 0xD355 | D355 DSC: Botschaft (Drehmoment 0A9) fehlt |
| 0xD356 | D356 DSC: Botschaft (Drehmoment 0AA) fehlt |
| 0xD357 | D357 DSC: Botschaft (ACC 0AD) fehlt |
| 0xD358 | D358 DSC: Botschaft (Getriebe 0BA) fehlt |
| 0xD359 | D359 DSC: Botschaft (SZL 0C8) fehlt |
| 0xD35A | D35A DSC: Botschaft (Klemmenstatus 130) fehlt |
| 0xD35C | D35C DSC: Botschaft (Kombi 1B4) fehlt |
| 0xD35D | D35D DSC: Botschaft (AFS 1FC) fehlt |
| 0xD35E | D35E DSC: Botschaft (Temperattur 310) fehlt |
| 0xD35F | D35F DSC: Botschaft (ARS 1AC) fehlt |
| 0xD360 | D360 DSC: Botschaft (Kilometerstand 330) fehlt |
| 0xD361 | D361 DSC: Botschaft (VIN 380) fehlt |
| 0xD362 | D362 DSC: Botschaft (Typ 388) fehlt |
| 0xD363 | D363 DSC: Botschaft (398) fehlt |
| 0xD364 | D364 DSC: Botschaft (SGM-SZM 480) fehlt |
| 0xD365 | D365 DSC: Botschaft (5E0) fehlt |
| 0xD366 | D366 DSC: Botschaft DSC-Sensor (0C7) fehlt |
| 0xD367 | D367 DSC: Botschaft (118) fehlt |
| 0xD368 | D368 DSC: Botschaft (0C3) fehlt |
| 0xD369 | D369 DSC: Botschaft DSC-Sensor 2 (0CB) fehlt |
| 0xD844 | D844 HUD: K-CAN Leitungsfehler |
| 0xD847 | D847 HUD: K-CAN Kommunikationsfehler |
| 0xD904 | D904 CAS: K-CAN Leitungsfehler |
| 0xD907 | D907 CAS: K-CAN Kommunikationsfehler |
| 0xD944 | D944 DWA: K-CAN Leitungsfehler |
| 0xD947 | D947 DWA: K-CAN Kommunikationsfehler |
| 0xD9C4 | D9C4 MPM: K-CAN Leitungsfehler |
| 0xD9C6 | D9C6 MPM: K-CAN Kommunikationsfehler |
| 0xD9C7 | D9C7 MPM: K-CAN Kommunikationsfehler |
| 0xD9D4 | D9D4 MPM: Botschaft (Powermanagement, 3B3) fehlt |
| 0xD9D5 | D9D5 MPM: Botschaft (Nachlaufzeit Stromversorgung, 3BE) fehlt |
| 0xD9D6 | D9D6 MPM: Botschaft (Klemmenstatus, 130) fehlt |
| 0xD9D7 | D9D7 MPM: Botschaft (Zentralverriegelung, 2FC) fehlt |
| 0xDA04 | DA04 SHD: K-CAN Leitungsfehler |
| 0xDA07 | DA07 SHD: K-CAN Kommunikationsfehler |
| 0xDF47 | DF47 ALBFA: Pt-CAN Kommunikationsfehler |
| 0xDF87 | DF87 ALBBF: Pt-CAN Kommunikationsfehler |
| 0xE107 | E107 KOMBI: K-CAN Kommunikationsfehler |
| 0xE184 | E184 M-ASK-GW/CCC-GW: K-CAN Leitungsfehler |
| 0xE187 | E187 CCC-GW/M-ASK-GW: K-CAN Kommunikationsfehler |
| 0xE204 | E204 PDC: K-CAN Leitungsfehler |
| 0xE207 | E207 PDC: K-CAN Kommunikationsfehler |
| 0xE244 | E244 SZM: K-CAN Leitungsfehler |
| 0xE247 | E247 SZM: K-CAN Kommunikationsfehler |
| 0xE2C4 | E2C4 CON: K-CAN Leitungsfehler |
| 0xE2C7 | E2C7 CON: K-CAN Kommunikationsfehler |
| 0xE344 | E344 SMFAH: K-CAN Leitungsfehler |
| 0xE347 | E347 SMFAH: K-CAN Kommunikationsfehler |
| 0xE384 | E384 SMBFH: K-CAN Leitungsfehler |
| 0xE387 | E387 SMBFH: K-CAN Kommunikationsfehler |
| 0xE3C4 | E3C4 HKL: K-CAN Kommunikationsfehler |
| 0xE3C5 | E3C5 HKL: K-CAN Leitungsfehler |
| 0xE444 | E444 SMFA: K-CAN Leitungsfehler |
| 0xE447 | E447 SMFA: K-CAN Kommunikationsfehler |
| 0xE484 | E484 SMBF: K-CAN Leitungsfehler |
| 0xE487 | E487 SMBF: K-CAN Kommunikationsfehler |
| 0xE504 | E504 LM: K-CAN Leitungsfehler |
| 0xE505 | E505 LM: K-CAN High Leitungsfehler |
| 0xE506 | E506 LM: K-CAN Massefehler |
| 0xE507 | E507 LM: K-CAN Kommunikationsfehler |
| 0xE508 | E508 LM: PT-CAN Kommunikationsfehler |
| 0xE50B | E50B LM: PT-CAN Kommunikationsfehler |
| 0xE514 | E514 LM: Botschaft (Lenkwinkel, C4) fehlt |
| 0xE515 | E515 LM: Botschaft (AHM Status Anhänger, 2E4) fehlt |
| 0xE516 | E516 LM: Botschaft (Lenkstockschaltersignal, 1EE) fehlt |
| 0xE517 | E517 LM: Botschaft (Status DSC, 19E) fehlt |
| 0xE518 | E518 LM: Botschaft (Status Fahrlicht, 314) fehlt |
| 0xE519 | E519 LM: Botschaft (Geschwindigkeit, 1A0) fehlt |
| 0xE51A | E51A LM: Botschaft (Gierwinkelgeschwindigkeit) vom DSC fehlt |
| 0xE51B | E51B LM: Botschaft (Klemmenstatus, 130) fehlt |
| 0xE51C | E51C LM: Botschaft (Leuchtenzustand,  21A) fehlt |
| 0xE544 | E544 AHM: K-CAN Leitungsfehler |
| 0xE547 | E547 AHM: K-CAN Kommunikationsfehler |
| 0xE584 | E584 KBM: K-CAN Leitungsfehler |
| 0xE587 | E587 KBM: K-CAN Kommunikationsfehler |
| 0xE5C4 | E5C4 CID: K-CAN Leitungsfehler |
| 0xE5C7 | E5C7 CID: K-CAN Kommunikationsfehler |
| 0xE704 | E704 IHKA: K-CAN Leitungsfehler |
| 0xE707 | E707 IHKA: K-CAN Kommunikationsfehler |
| 0xE714 | E714 IHKA: Boschaft (Batteriespannung, 3BE) |
| 0xE715 | E715 IHKA: Botschaft (Kilometerstand, 330) |
| 0xE716 | E716 IHKA: Botschaft (Verbrauchersteuerung, 3B3) |
| 0xE717 | E717 IHKA: Botschaft (Instrumentenkombination, 328) |
| 0xE718 | E718 IHKA: Botschaft (Motorwärmestrom, 1B6) |
| 0xE719 | E719 IHKA: Botschaft (Kühlmitteltemperatur, 1D0) |
| 0xE71A | E71A IHKA: Botschaft (Klemmenstatus, 130) |
| 0xE71B | E71B IHKA: Botschaft (Außentemperatur, 2CA) |
| 0xE71C | E71C IHKA: Botschaft (Geschwindigkeit, 1A0) |
| 0xE71D | E71D IHKA: Botschaft (Zusatzwasserpumpe, 2EC) |
| 0xE71E | E71E IHKA: Botschaft (Drehmoment, 0AA) |
| 0xE71F | E71F IHKA: Botschaft (Dimmung, 202) |
| 0xE784 | E784 SHZH: K-CAN Leitungsfehler |
| 0xE787 | E787 SHZH: K-CAN Kommunikationsfehler |

### FCMATRIX

| NUMMER | ORT | ADR | STGR | VONSTGR | NICHTORT | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 51 | 2 |  |  |  | 0xEA | 0xE9 | 0xE7 | 0x00 | 0x01 | 0x21 | 0x16 | 0x71 | 0x22 | 0x23 | 0x40 | 0x35 | 0x73 | 0x67 | 0x12 | 0x29 | 0x41 | 0x18 | 0x38 | 0x17 | 0x6B | 0x3D | 0x78 | 0x72 | 0x60 | 0x70 | 0x61 | 0x62 | 0x43 | 0x64 | 0x20 | 0xA1 | 0xA2 | 0x0E | 0x7A | 0x44 | 0x6E | 0x6D | 0x18 | 0x02 | 0x65 | 0x05 | 0x06 | 0x1B | 0x25 | 0x2D | 0x24 | 0x19 | 0x45 | 0x59 | 0x5A |
| 1 | 0x2776 | 0x12 | DME | leer | 0x0000 | 25 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 2 | 0x27EC | 0x12 | DME | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 3 | 0x27ED | 0x12 | DME | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 4 | 0x27EE | 0x12 | DME | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 5 | 0x27EF | 0x12 | DME | ACC | 0x0000 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 6 | 0x27F3 | 0x12 | DME | leer | 0x0000 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 7 | 0x2828 | 0x12 | DME | ARS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 8 | 0x2829 | 0x12 | DME | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 9 | 0x282A | 0x12 | DME | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 10 | 0x282B | 0x12 | DME | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 11 | 0x282C | 0x12 | DME | leer | 0x0000 | 25 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 12 | 0x293C | 0x12 | DME | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 13 | 0x293D | 0x12 | DME | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 14 | 0x2947 | 0x12 | DME | ACC | 0x0000 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 15 | 0x2948 | 0x12 | DME | ARS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 16 | 0x2949 | 0x12 | DME | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 17 | 0x294A | 0x12 | DME | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 18 | 0x294B | 0x12 | DME | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 19 | 0x294C | 0x12 | DME | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 20 | 0x294D | 0x12 | DME | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 21 | 0x294E | 0x12 | DME | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 22 | 0x294F | 0x12 | DME | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 23 | 0x2950 | 0x12 | DME | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 24 | 0x2951 | 0x12 | DME | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 25 | 0x2952 | 0x12 | DME | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 26 | 0x2953 | 0x12 | DME | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 27 | 0x2954 | 0x12 | DME | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 28 | 0x2955 | 0x12 | DME | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 29 | 0x2956 | 0x12 | DME | leer | 0x0000 | 20 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 30 | 0x2957 | 0x12 | DME | leer | 0x0000 | 20 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 31 | 0x2958 | 0x12 | DME | leer | 0x0000 | 20 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 32 | 0x29AF | 0x12 | DME | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 33 | 0x2AD0 | 0x12 | DME | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 34 | 0x2D5B | 0x12 | DME | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 35 | 0x2DBF | 0x12 | DME | ACC | 0x0000 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 36 | 0x2DC0 | 0x12 | DME | ACC | 0x0000 | 33 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 37 | 0x2DC3 | 0x12 | DME | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 38 | 0x2DC8 | 0x12 | DME | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 39 | 0x2DC9 | 0x12 | DME | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 40 | 0x2DCA | 0x12 | DME | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 41 | 0x2DCB | 0x12 | DME | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 42 | 0x2DCC | 0x12 | DME | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 43 | 0x2DCD | 0x12 | DME | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 44 | 0x2DCE | 0x12 | DME | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 45 | 0x2DCF | 0x12 | DME | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 46 | 0x2DD0 | 0x12 | DME | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 47 | 0x2DD1 | 0x12 | DME | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 48 | 0x2DD2 | 0x12 | DME | leer | 0x0000 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 49 | 0x2DD3 | 0x12 | DME | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 50 | 0x2DD5 | 0x12 | DME | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 51 | 0x2DD7 | 0x12 | DME | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 52 | 0x2DD8 | 0x12 | DME | AFS | 0x0000 | 33 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 53 | 0x2DD9 | 0x12 | DME | ARS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 54 | 0x2DDA | 0x12 | DME | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 55 | 0x2DDB | 0x12 | DME | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 56 | 0x2DDC | 0x12 | DME | leer | 0x0000 | 25 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 57 | 0x2DE0 | 0x12 | DME | EKP | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 58 | 0x2F4E | 0x12 | DME | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 59 | 0x2F50 | 0x12 | DME | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 60 | 0x2F80 | 0x12 | DME | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 61 | 0x3F62 | 0x12 | DDE | leer | 0x0000 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 62 | 0x41A6 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 63 | 0x41A7 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 64 | 0x41A8 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 65 | 0x4325 | 0x12 | DDE | EGS | 0x0000 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 66 | 0x4326 | 0x12 | DDE | EGS | 0x0000 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 67 | 0x4327 | 0x12 | DDE | EGS | 0x0000 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 68 | 0x4328 | 0x12 | DDE | EGS | 0x0000 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 69 | 0x4445 | 0x12 | DDE | AFS | 0x0000 | 33 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 70 | 0x4446 | 0x12 | DDE | AFS | 0x0000 | 33 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 71 | 0x4447 | 0x12 | DDE | AFS | 0x0000 | 33 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 72 | 0x4448 | 0x12 | DDE | AFS | 0x0000 | 33 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 73 | 0x4457 | 0x12 | DDE | leer | 0x0000 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 74 | 0x4458 | 0x12 | DDE | leer | 0x0000 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 75 | 0x453B | 0x12 | DDE | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 76 | 0x4567 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 77 | 0x4568 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 78 | 0x4577 | 0x12 | DDE | leer | 0x0000 | 33 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 79 | 0x4578 | 0x12 | DDE | leer | 0x0000 | 33 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 80 | 0x4597 | 0x12 | DDE | leer | 0x0000 | 17 | 17 | 0 | 17 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 17 | 0 | 0 | 17 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 17 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 81 | 0x4598 | 0x12 | DDE | leer | 0x0000 | 17 | 17 | 0 | 17 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 17 | 0 | 0 | 17 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 17 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 82 | 0x45F5 | 0x12 | DDE | ACC | 0x0000 | 33 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 83 | 0x45F6 | 0x12 | DDE | ACC | 0x0000 | 33 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 84 | 0x45F7 | 0x12 | DDE | ACC | 0x0000 | 33 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 85 | 0x45F8 | 0x12 | DDE | ACC | 0x0000 | 33 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 86 | 0x4637 | 0x12 | DDE | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 87 | 0x4638 | 0x12 | DDE | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 88 | 0x47F7 | 0x12 | DDE | leer | 0x0000 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 89 | 0x47F8 | 0x12 | DDE | leer | 0x0000 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 90 | 0x4803 | 0x12 | DDE | ACC | 0x0000 | 33 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 91 | 0x4810 | 0x12 | DDE | ACC | 0x0000 | 33 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 92 | 0x48A5 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 93 | 0x48A6 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 94 | 0x48A7 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 95 | 0x48A8 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 96 | 0x4991 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 97 | 0x4992 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 98 | 0x4993 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 99 | 0x49A2 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 100 | 0x49A3 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 101 | 0x49A7 | 0x12 | DME | AFS | 0x0000 | 33 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 102 | 0x49A8 | 0x12 | DME | AFS | 0x0000 | 33 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 103 | 0x49B7 | 0x12 | DDE | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 104 | 0x49B8 | 0x12 | DDE | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 105 | 0x49F2 | 0x12 | DDE | leer | 0x0000 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 106 | 0x49F3 | 0x12 | DDE | leer | 0x0000 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 107 | 0x4A97 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 108 | 0x4A98 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 109 | 0x4AA7 | 0x12 | DDE | AHM | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 110 | 0x4AA8 | 0x12 | DDE | AHM | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 111 | 0x4AB7 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 112 | 0x4AB8 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 113 | 0x4BD2 | 0x12 | DDE | ARS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 114 | 0x4BE2 | 0x12 | DDE | EGS | 0x0000 | 25 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 0 | 0 | 25 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 115 | 0x4BE3 | 0x12 | DDE | EGS | 0x0000 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 116 | 0x4BE7 | 0x12 | DDE | EGS | 0x0000 | 25 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 0 | 0 | 25 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 117 | 0x4BE8 | 0x12 | DDE | EGS | 0x0000 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 118 | 0x4BF2 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 119 | 0x4BF3 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 120 | 0x4BF7 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 121 | 0x4BF8 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 122 | 0x4C00 | 0x12 | DDE | ACC | 0x0000 | 33 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 123 | 0x4C01 | 0x12 | DDE | ACC | 0x0000 | 33 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 124 | 0x4C02 | 0x12 | DDE | ACC | 0x0000 | 33 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 125 | 0x4C03 | 0x12 | DDE | ACC | 0x0000 | 20 | 0 | 0 | 20 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 126 | 0x4C06 | 0x12 | DDE | ARS | 0x0000 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 127 | 0x4C07 | 0x12 | DDE | ARS | 0x0000 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 128 | 0x4C08 | 0x12 | DDE | ARS | 0x0000 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 129 | 0x4C12 | 0x12 | DDE | leer | 0x0000 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 130 | 0x4C13 | 0x12 | DDE | leer | 0x0000 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 131 | 0x4C15 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 132 | 0x4C16 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 133 | 0x4C17 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 134 | 0x4C18 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 20 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 135 | 0x4C20 | 0x12 | DDE | leer | 0x0000 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 136 | 0x4C21 | 0x12 | DDE | leer | 0x0000 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 137 | 0x4C22 | 0x12 | DDE | leer | 0x0000 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 138 | 0x4C23 | 0x12 | DDE | leer | 0x0000 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 139 | 0x4C27 | 0x12 | DDE | leer | 0x0000 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 140 | 0x4C28 | 0x12 | DDE | leer | 0x0000 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 141 | 0x4CB2 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 142 | 0x4CB3 | 0x12 | DDE | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 143 | 0x4DF0 | 0x12 | DDE | EGS | 0x0000 | 25 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 0 | 0 | 25 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 144 | 0x4DF1 | 0x12 | DDE | EGS | 0x0000 | 25 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 0 | 0 | 25 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 145 | 0x4DF2 | 0x12 | DDE | EGS | 0x0000 | 25 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 0 | 0 | 25 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 146 | 0x4DF3 | 0x12 | DDE | EGS | 0x0000 | 25 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 0 | 0 | 25 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 147 | 0x4F77 | 0x18 | EGS | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 0 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 148 | 0x4F7A | 0x18 | EGS | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 |
| 149 | 0x5140 | 0x18 | EGS | leer | 0xCF07 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 0 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 150 | 0x5141 | 0x18 | EGS | leer | 0xCF07 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 0 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 151 | 0x5142 | 0x18 | EGS | leer | 0xCF07 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 0 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 152 | 0x5143 | 0x18 | EGS | ACC | 0xCF07 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 0 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 153 | 0x5144 | 0x18 | EGS | leer | 0xCF07 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 0 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 154 | 0x514A | 0x18 | EGS | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 0 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 155 | 0x5150 | 0x18 | EGS | AHM | 0xCF07 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 0 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 156 | 0x51A5 | 0x18 | EGS | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 0 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 157 | 0x51A7 | 0x18 | EGS | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 0 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 158 | 0x51A8 | 0x18 | EGS | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 0 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 159 | 0x51A9 | 0x18 | EGS | leer | 0xCF07 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 0 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 160 | 0x51AD | 0x18 | EGS | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 161 | 0x51AE | 0x18 | EGS | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 0 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 162 | 0x51AF | 0x18 | EGS | VTG | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 |
| 163 | 0x51B0 | 0x18 | EGS | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 0 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 164 | 0x51B1 | 0x18 | EGS | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 0 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 165 | 0x51B3 | 0x18 | EGS | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 0 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 166 | 0x51B4 | 0x18 | EGS | leer | 0xCF07 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 0 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 167 | 0x51B6 | 0x18 | EGS | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 0 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 168 | 0x51B8 | 0x18 | EGS | leer | 0xCF07 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 0 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 169 | 0x51B9 | 0x18 | EGS | ACC | 0xCF07 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 0 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 170 | 0x51BB | 0x18 | EGS | leer | 0xCF07 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 0 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 171 | 0x51BC | 0x18 | SMG | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 172 | 0x5200 | 0x18 | SMG | leer | 0xCF07 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 173 | 0x5201 | 0x18 | SMG | leer | 0xCF07 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 174 | 0x5202 | 0x18 | SMG | leer | 0xCF07 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 175 | 0x5203 | 0x18 | SMG | leer | 0xCF07 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 176 | 0x5204 | 0x18 | SMG | leer | 0xCF07 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 177 | 0x520A | 0x18 | SMG | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 178 | 0x520B | 0x18 | EGS | leer | 0xCF07 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 0 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 179 | 0x520C | 0x18 | EGS | leer | 0xCF07 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 0 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 180 | 0x520D | 0x18 | EGS | leer | 0xCF07 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 0 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 181 | 0x520E | 0x18 | EGS | leer | 0xCF07 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 0 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 182 | 0x520F | 0x18 | EGS | leer | 0xCF07 | 20 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 0 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 183 | 0x5210 | 0x18 | SMG | leer | 0xCF07 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 184 | 0x5211 | 0x18 | SMG | leer | 0xCF07 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 185 | 0x5212 | 0x18 | SMG | AHM | 0xCF07 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 186 | 0x5213 | 0x18 | SMG | leer | 0xCF07 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 187 | 0x5214 | 0x18 | SMG | leer | 0xCF07 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 188 | 0x5215 | 0x18 | SMG | leer | 0xCF07 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 189 | 0x5216 | 0x18 | SMG | leer | 0xCF07 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 190 | 0x5217 | 0x18 | SMG | leer | 0xCF07 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 191 | 0x55C0 | 0x19 | VTG | DXC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 |
| 192 | 0x55C2 | 0x19 | VTG | DXC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 |
| 193 | 0x55C3 | 0x19 | VTG | DXC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 |
| 194 | 0x55C4 | 0x19 | VTG | DXC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 |
| 195 | 0x55C5 | 0x19 | VTG | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 |
| 196 | 0x55C6 | 0x19 | VTG | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 |
| 197 | 0x55C7 | 0x19 | VTG | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 |
| 198 | 0x55C8 | 0x19 | VTG | CAS | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 |
| 199 | 0x55C9 | 0x19 | VTG | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 |
| 200 | 0x55CA | 0x19 | VTG | KOMBI | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 |
| 201 | 0x55CB | 0x19 | VTG | KOMBI | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 |
| 202 | 0x55CD | 0x19 | VTG | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 |
| 203 | 0x55CE | 0x19 | VTG | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 |
| 204 | 0x55CF | 0x19 | VTG | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 |
| 205 | 0x55D0 | 0x19 | VTG | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 |
| 206 | 0x5E6A | 0x29 | DSC | leer | 0x0000 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 207 | 0x5E6B | 0x29 | DSC | leer | 0x0000 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 208 | 0x5E72 | 0x29 | DSC | leer | 0x0000 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 209 | 0x5E74 | 0x29 | DSC | leer | 0x0000 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 210 | 0x5E75 | 0x29 | DSC | leer | 0x0000 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 211 | 0x5E76 | 0x29 | DSC | leer | 0x0000 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 212 | 0x5E77 | 0x29 | DSC | leer | 0x0000 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 213 | 0x5E7A | 0x29 | DSC | leer | 0x0000 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 214 | 0x5E7E | 0x29 | DSC | leer | 0x0000 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 215 | 0x5E83 | 0x29 | DSC | leer | 0x0000 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 216 | 0x5E84 | 0x29 | DSC | leer | 0x0000 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 217 | 0x5E85 | 0x29 | DSC | leer | 0x0000 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 218 | 0x5E89 | 0x29 | DSC | leer | 0x0000 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 219 | 0x5E8A | 0x29 | DSC | leer | 0x0000 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 220 | 0x5E8B | 0x29 | DSC | leer | 0x0000 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 221 | 0x5E8C | 0x29 | DSC | AHM | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 222 | 0x5EC5 | 0x29 | DSC | leer | 0x0000 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 223 | 0x5F2E | 0x29 | DSC | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 224 | 0x5F4C | 0x29 | DSC | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 225 | 0x5F57 | 0x29 | DSC | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 226 | 0x9328 | 0x00 | ZGM | leer | 0x0000 | -20 | 50 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 227 | 0x9329 | 0x00 | ZGM | leer | 0x0000 | 50 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 228 | 0x932A | 0x00 | ZGM | leer | 0x0000 | -20 | -20 | -20 | 50 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 229 | 0x93B0 | 0x01 | SIM | leer | 0x0000 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 230 | 0x93B2 | 0x01 | SIM | leer | 0x0000 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 231 | 0x93B4 | 0x01 | SIM | leer | 0x0000 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 232 | 0x93B6 | 0x01 | SIM | leer | 0x0000 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 233 | 0x93B8 | 0x01 | SIM | leer | 0x0000 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 234 | 0x93B9 | 0x01 | SIM | leer | 0x0000 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 235 | 0x93BA | 0x01 | SIM | leer | 0x0000 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 236 | 0x93BC | 0x01 | SIM | leer | 0x0000 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 237 | 0x93BD | 0x01 | SIM | leer | 0x0000 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 238 | 0x93BE | 0x01 | SIM | leer | 0x0000 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 239 | 0x93BF | 0x01 | SIM | leer | 0x0000 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 240 | 0x93C1 | 0x01 | SIM | leer | 0x0000 | 25 | -21 | -21 | 25 | 25 | -21 | 0 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 0 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 241 | 0x93C2 | 0x01 | SIM | leer | 0x0000 | 25 | -21 | -21 | 25 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 242 | 0x93C3 | 0x01 | SIM | leer | 0x0000 | 25 | -21 | -21 | 25 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 243 | 0x93C4 | 0x01 | SIM | leer | 0x0000 | 20 | 20 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 244 | 0x93C5 | 0x01 | SIM | leer | 0x0000 | 25 | -21 | -21 | 25 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 245 | 0x93CE | 0x01 | SIM | leer | 0x0000 | 20 | 20 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 246 | 0x93CF | 0x01 | SIM | leer | 0x0000 | 25 | -21 | -21 | 25 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 247 | 0x93D0 | 0x01 | SIM | leer | 0x0000 | 20 | 20 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 248 | 0x93D1 | 0x01 | SIM | leer | 0x0000 | 25 | -21 | -21 | 25 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 249 | 0x93D2 | 0x01 | SIM | leer | 0x0000 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 250 | 0x94B2 | 0x02 | SZL | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 251 | 0x94B4 | 0x02 | SZL | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 252 | 0x94B8 | 0x02 | SZL | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 253 | 0x94B9 | 0x02 | SZL | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 254 | 0x94BA | 0x02 | SZL | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 255 | 0x94BD | 0x02 | SZL | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 256 | 0x94BE | 0x02 | SZL | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 257 | 0x94C0 | 0x02 | SZL | leer | 0x0000 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 258 | 0x9505 | 0x02 | SZL | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 259 | 0x9631 | 0x05 | TMFA | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 260 | 0x9633 | 0x05 | TMFA | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 261 | 0x9637 | 0x05 | TMFA | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 262 | 0x9638 | 0x05 | TMFA | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 263 | 0x963C | 0x05 | TMFA | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 264 | 0x963D | 0x05 | TMFA | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 265 | 0x963F | 0x05 | TMFA | leer | 0x0000 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 266 | 0x96B1 | 0x06 | TMBF | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 267 | 0x96B3 | 0x06 | TMBF | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 268 | 0x96B7 | 0x06 | TMBF | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 269 | 0x96B8 | 0x06 | TMBF | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 270 | 0x96BC | 0x06 | TMBF | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 271 | 0x96BD | 0x06 | TMBF | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 272 | 0x96BF | 0x06 | TMBF | leer | 0x0000 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 273 | 0x982D | 0xA1 | SBSL | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 274 | 0x982F | 0xA1 | SBSL | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 275 | 0x9833 | 0xA1 | SBSL | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 276 | 0x9835 | 0xA1 | SBSL | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 277 | 0x9836 | 0xA1 | SBSL | leer | 0x0000 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 278 | 0x9838 | 0xA1 | SBSL | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 279 | 0x9839 | 0xA1 | SBSL | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 280 | 0x983D | 0xA1 | SBSL | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 281 | 0x983F | 0xA1 | SBSL | leer | 0x0000 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 282 | 0x98AD | 0xA2 | SBSR | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 283 | 0x98AF | 0xA2 | SBSR | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 284 | 0x98B1 | 0xA2 | SBSR | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 285 | 0x98B5 | 0xA2 | SBSR | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 286 | 0x98B6 | 0xA2 | SBSR | leer | 0x0000 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 287 | 0x98B7 | 0xA2 | SBSR | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 288 | 0x98B9 | 0xA2 | SBSR | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 289 | 0x98BC | 0xA2 | SBSR | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 290 | 0x98BF | 0xA2 | SBSR | leer | 0x0000 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 291 | 0x9AAD | 0x0E | SFZ | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 292 | 0x9AAF | 0x0E | SFZ | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 293 | 0x9AB1 | 0x0E | SFZ | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 294 | 0x9AB3 | 0x0E | SFZ | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 295 | 0x9AB6 | 0x0E | SFZ | leer | 0x0000 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 296 | 0x9AB7 | 0x0E | SFZ | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 297 | 0x9AB8 | 0x0E | SFZ | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 298 | 0x9ABC | 0x0E | SFZ | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 299 | 0x9ABD | 0x0E | SFZ | leer | 0x0000 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 300 | 0x9ABF | 0x0E | SFZ | leer | 0x0000 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 301 | 0x9E29 | 0x64 | PDC | leer | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 302 | 0x9E2A | 0x64 | PDC | leer | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 303 | 0xA173 | 0x35 | CCC | leer | 0x0000 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 304 | 0xA3AB | 0x60 | KOMBI | ACC | 0x0000 | 20 | 20 | -22 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 305 | 0xA3AD | 0x60 | KOMBI | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 306 | 0xA3AE | 0x60 | KOMBI | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 307 | 0xA3B1 | 0x60 | KOMBI | leer | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 308 | 0xA3B2 | 0x60 | KOMBI | leer | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 309 | 0xA3B3 | 0x60 | KOMBI | ARS | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 310 | 0xA3B6 | 0x60 | KOMBI | leer | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 311 | 0xA3B9 | 0x60 | KOMBI | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 312 | 0xA3BD | 0x60 | KOMBI | leer | 0x0000 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 313 | 0xA3BE | 0x60 | KOMBI | leer | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 314 | 0xA3C0 | 0x60 | KOMBI | AHM | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 315 | 0xA3C3 | 0x60 | KOMBI | leer | 0x0000 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 316 | 0xA4F1 | 0x3D | HUD | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 317 | 0xA4F2 | 0x3D | HUD | leer | 0xA4F1 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 318 | 0xA4F3 | 0x3D | HUD | ACC | 0xA4F1 | 20 | 20 | -22 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 319 | 0xA4F4 | 0x3D | HUD | leer | 0xA4F1 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 320 | 0xA4F5 | 0x3D | HUD | leer | 0x0000 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | 25 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 321 | 0xA4F6 | 0x3D | HUD | leer | 0xA4F1 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 322 | 0xA4F7 | 0x3D | HUD | HUD | 0xA4F1 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 323 | 0xA4F8 | 0x3D | HUD | leer | 0xA4F1 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 324 | 0xA4F9 | 0x3D | HUD | leer | 0xA4F1 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 325 | 0xA4FA | 0x3D | HUD | leer | 0xA4F1 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 326 | 0xA4FB | 0x3D | HUD | leer | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 327 | 0xA4FC | 0x3D | HUD | leer | 0xA4F1 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 328 | 0xA4FD | 0x3D | HUD | leer | 0xA4F1 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 329 | 0xA4FE | 0x3D | HUD | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 330 | 0xA4FF | 0x3D | HUD | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 331 | 0xA500 | 0x3D | HUD | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 332 | 0xA501 | 0x3D | HUD | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 333 | 0xA502 | 0x3D | HUD | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 334 | 0xA549 | 0x60 | KOMBI | leer | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 335 | 0xA54A | 0x60 | KOMBI | leer | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 336 | 0xA54E | 0x60 | KOMBI | leer | 0x0000 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 337 | 0xA54F | 0x60 | KOMBI | leer | 0x0000 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 338 | 0xA550 | 0x60 | KOMBI | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 339 | 0xA555 | 0x60 | KOMBI | leer | 0x0000 | -22 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 340 | 0xA556 | 0x60 | KOMBI | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 341 | 0xA70B | 0x59 | ALBFA | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 |
| 342 | 0xA70C | 0x59 | ALBFA | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 |
| 343 | 0xA70D | 0x59 | ALBFA | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 |
| 344 | 0xA70E | 0x59 | ALBFA | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 |
| 345 | 0xA70F | 0x59 | ALBFA | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 |
| 346 | 0xA710 | 0x59 | ALBFA | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 |
| 347 | 0xA711 | 0x59 | ALBFA | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 |
| 348 | 0xA712 | 0x59 | ALBFA | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 |
| 349 | 0xA713 | 0x59 | ALBFA | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 |
| 350 | 0xA714 | 0x59 | ALBFA | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 |
| 351 | 0xA715 | 0x59 | ALBFA | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 |
| 352 | 0xA716 | 0x59 | ALBFA | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 |
| 353 | 0xA717 | 0x59 | ALBFA | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 |
| 354 | 0xA718 | 0x59 | ALBFA | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 |
| 355 | 0xA719 | 0x59 | ALBFA | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 |
| 356 | 0xA71A | 0x59 | ALBFA | leer | 0x0000 | 25 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 |
| 357 | 0xA71C | 0x59 | ALBFA | leer | 0x0000 | 25 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 |
| 358 | 0xA71F | 0x59 | ALBFA | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 |
| 359 | 0xA720 | 0x59 | ALBFA | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 |
| 360 | 0xA76B | 0x5A | ALBBF | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 |
| 361 | 0xA76C | 0x5A | ALBBF | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 |
| 362 | 0xA76D | 0x5A | ALBBF | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 |
| 363 | 0xA76E | 0x5A | ALBBF | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 |
| 364 | 0xA76F | 0x5A | ALBBF | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 |
| 365 | 0xA770 | 0x5A | ALBBF | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 |
| 366 | 0xA771 | 0x5A | ALBBF | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 |
| 367 | 0xA772 | 0x5A | ALBBF | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 |
| 368 | 0xA773 | 0x5A | ALBBF | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 |
| 369 | 0xA774 | 0x5A | ALBBF | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 |
| 370 | 0xA775 | 0x5A | ALBBF | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 |
| 371 | 0xA776 | 0x5A | ALBBF | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 |
| 372 | 0xA777 | 0x5A | ALBBF | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 |
| 373 | 0xA778 | 0x5A | ALBBF | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 |
| 374 | 0xA779 | 0x5A | ALBBF | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 |
| 375 | 0xA77A | 0x5A | ALBBF | leer | 0x0000 | 25 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 |
| 376 | 0xA77B | 0x5A | ALBBF | leer | 0x0000 | 25 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 |
| 377 | 0xA77C | 0x5A | ALBBF | leer | 0x0000 | 25 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 |
| 378 | 0xA77D | 0x5A | ALBBF | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 |
| 379 | 0xA77F | 0x5A | ALBBF | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 |
| 380 | 0xA780 | 0x5A | ALBBF | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 |
| 381 | 0xCD87 | 0x12 | DME | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 382 | 0xCD88 | 0x12 | DME | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 383 | 0xCD8B | 0x12 | DDE | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 384 | 0xCD8F | 0x12 | DME | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 385 | 0xCD94 | 0x12 | DME | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 386 | 0xCD95 | 0x12 | DME | ACC | 0x0000 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 387 | 0xCD96 | 0x12 | DME | ACC | 0x0000 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 388 | 0xCD97 | 0x12 | DME | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 389 | 0xCD98 | 0x12 | DME | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 390 | 0xCD99 | 0x12 | DME | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 391 | 0xCD9A | 0x12 | DME | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 392 | 0xCD9B | 0x12 | DME | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 393 | 0xCD9C | 0x12 | DME | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 394 | 0xCD9D | 0x12 | DME | EGS | 0x0000 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 395 | 0xCD9E | 0x12 | DME | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 396 | 0xCD9F | 0x12 | DME | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 397 | 0xCDA0 | 0x12 | DME | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 398 | 0xCDA1 | 0x12 | DME | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 399 | 0xCDA2 | 0x12 | DME | leer | 0x0000 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 400 | 0xCDA4 | 0x12 | DME | ARS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 401 | 0xCDA5 | 0x12 | DME | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 402 | 0xCDA6 | 0x12 | DME | EKP | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 403 | 0xCDA7 | 0x12 | DME | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 404 | 0xCDA8 | 0x12 | DME | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 405 | 0xCDA9 | 0x12 | DME | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 406 | 0xCDAA | 0x12 | DME | EKP | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 407 | 0xCDAB | 0x12 | DME | LM | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 408 | 0xCDAC | 0x12 | DME | IHKA | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 409 | 0xCDAE | 0x12 | DME | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 410 | 0xCDAF | 0x12 | DME | AHM | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 411 | 0xCDB0 | 0x12 | DME | leer | 0x0000 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 412 | 0xCDBB | 0x12 | DME | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 413 | 0xCDBC | 0x12 | DME | leer | 0x0000 | 25 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 414 | 0xCE87 | 0x16 | AFS | leer | 0x0000 | 0 | 0 | 50 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 415 | 0xCE8B | 0x16 | AFS | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 416 | 0xCE94 | 0x16 | AFS | leer | 0x0000 | 0 | 0 | 33 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 |
| 417 | 0xCE95 | 0x16 | AFS | leer | 0x0000 | 0 | 0 | 33 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 |
| 418 | 0xCE96 | 0x16 | AFS | leer | 0x0000 | -21 | -21 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 419 | 0xCE97 | 0x16 | AFS | leer | 0x0000 | -21 | -21 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 420 | 0xCE98 | 0x16 | AFS | leer | 0x0000 | -21 | -21 | 33 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 421 | 0xCE99 | 0x16 | AFS | leer | 0x0000 | 25 | -21 | -21 | 25 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 422 | 0xCE9A | 0x16 | AFS | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 423 | 0xCE9B | 0x16 | AFS | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 424 | 0xCE9C | 0x16 | AFS | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 425 | 0xCE9D | 0x16 | AFS | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 426 | 0xCE9E | 0x16 | AFS | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 427 | 0xCE9F | 0x16 | AFS | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 428 | 0xCEA0 | 0x16 | AFS | leer | 0x0000 | 33 | -21 | -21 | 33 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 429 | 0xCEA1 | 0x16 | AFS | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 430 | 0xCEA2 | 0x16 | AFS | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | 20 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 431 | 0xCEA3 | 0x16 | AFS | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 432 | 0xCED4 | 0x17 | EKP | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 433 | 0xCF07 | 0x18 | EGS | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 434 | 0xCF12 | 0x18 | EGS | RLS | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 |
| 435 | 0xCF13 | 0x18 | EGS | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 0 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 436 | 0xCF19 | 0x18 | EGS | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 0 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 437 | 0xCF1A | 0x18 | EGS | leer | 0xCF07 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 0 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 438 | 0xCF1B | 0x18 | EGS | leer | 0xCF07 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 0 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 439 | 0xCF1D | 0x18 | EGS | leer | 0xCF07 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 0 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 440 | 0xCF1F | 0x18 | EGS | leer | 0xCF07 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 0 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 441 | 0xCF21 | 0x18 | EGS | leer | 0xCF07 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 0 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 442 | 0xCF22 | 0x18 | EGS | leer | 0xCF07 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 0 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 443 | 0xCF23 | 0x18 | EGS | leer | 0xCF07 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 0 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 444 | 0xCF28 | 0x18 | EGS | leer | 0xCF07 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 0 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 445 | 0xCF2B | 0x18 | SMG | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 446 | 0xCF30 | 0x18 | EGS | leer | 0xCF07 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 0 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 447 | 0xCF33 | 0x18 | EGS | ACC | 0xCF07 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 0 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 448 | 0xCF4B | 0x19 | VTG | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 |
| 449 | 0xCF54 | 0x19 | VTG | DXC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 |
| 450 | 0xCF55 | 0x19 | VTG | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 |
| 451 | 0xCF56 | 0x19 | VTG | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 |
| 452 | 0xCF57 | 0x19 | VTG | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 |
| 453 | 0xCF58 | 0x19 | VTG | CAS | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 |
| 454 | 0xCF59 | 0x19 | VTG | DME | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 |
| 455 | 0xCF5A | 0x19 | VTG | KOMBI | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 |
| 456 | 0xCF5B | 0x19 | VTG | KOMBI | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 |
| 457 | 0xCF5D | 0x19 | VTG | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 |
| 458 | 0xCF5E | 0x19 | VTG | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 |
| 459 | 0xCF5F | 0x19 | VTG | EGS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 |
| 460 | 0xCF60 | 0x19 | VTG | DSC | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 |
| 461 | 0xD147 | 0x21 | ACC | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 462 | 0xD187 | 0x22 | AHL | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 463 | 0xD1C7 | 0x23 | ARS | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 464 | 0xD1DF | 0x23 | ARS | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 465 | 0xD1E0 | 0x23 | ARS | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 466 | 0xD1E1 | 0x23 | ARS | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 467 | 0xD1E2 | 0x23 | ARS | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 468 | 0xD1E3 | 0x23 | ARS | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 469 | 0xD1EB | 0x23 | ARS | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 470 | 0xD1ED | 0x23 | ARS | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 471 | 0xD1F1 | 0x23 | ARS | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 472 | 0xD1F2 | 0x23 | ARS | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | 20 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 473 | 0xD204 | 0x24 | CVM | leer | 0x0000 | 0 | 25 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 25 | -250 | -250 | -250 | -250 |
| 474 | 0xD205 | 0x24 | CVM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | -250 | -250 | -250 | -250 |
| 475 | 0xD206 | 0x24 | CVM | leer | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 |
| 476 | 0xD207 | 0x24 | CVM | leer | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 |
| 477 | 0xD208 | 0x24 | CVM | leer | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 |
| 478 | 0xD209 | 0x24 | CVM | leer | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 |
| 479 | 0xD347 | 0x29 | DSC | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 480 | 0xD34B | 0x29 | DSC | leer | 0x0000 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 481 | 0xD354 | 0x29 | DSC | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 482 | 0xD355 | 0x29 | DSC | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 483 | 0xD356 | 0x29 | DSC | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 484 | 0xD357 | 0x29 | DSC | ACC | 0x0000 | 33 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 485 | 0xD358 | 0x29 | DSC | EGS | 0x0000 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 25 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 486 | 0xD359 | 0x29 | DSC | leer | 0x0000 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 487 | 0xD35A | 0x29 | DSC | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 488 | 0xD35C | 0x29 | DSC | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 489 | 0xD35D | 0x29 | DSC | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 490 | 0xD35E | 0x29 | DSC | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 491 | 0xD35F | 0x29 | DSC | ARS | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 492 | 0xD360 | 0x29 | DSC | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 493 | 0xD361 | 0x29 | DSC | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 494 | 0xD362 | 0x29 | DSC | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 495 | 0xD363 | 0x29 | DSC | leer | 0x0000 | 17 | 17 | -22 | 17 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 17 | -22 | -22 | -22 | 17 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 17 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 496 | 0xD364 | 0x29 | DSC | leer | 0x0000 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 497 | 0xD365 | 0x29 | DSC | leer | 0x0000 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 498 | 0xD366 | 0x29 | DSC | leer | 0x0000 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 |
| 499 | 0xD367 | 0x29 | DSC | leer | 0x0000 | 33 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 500 | 0xD368 | 0x29 | DSC | leer | 0x0000 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 501 | 0xD369 | 0x29 | DSC | leer | 0x0000 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 33 | 0 | 0 | 0 | 0 | 0 |
| 502 | 0xD844 | 0x3D | HUD | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 503 | 0xD847 | 0x3D | HUD | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 504 | 0xD904 | 0x40 | CAS | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 505 | 0xD907 | 0x40 | CAS | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 506 | 0xD944 | 0x41 | DWA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 507 | 0xD947 | 0x41 | DWA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 508 | 0xD9C4 | 0x43 | MPM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 509 | 0xD9C6 | 0x43 | MPM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 510 | 0xD9C7 | 0x43 | MPM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 511 | 0xD9D4 | 0x43 | MPM | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 512 | 0xD9D5 | 0x43 | MPM | leer | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 513 | 0xD9D6 | 0x43 | MPM | leer | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 514 | 0xD9D7 | 0x43 | MPM | leer | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 515 | 0xDA04 | 0x44 | SHD | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 516 | 0xDA07 | 0x44 | SHD | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 517 | 0xDF47 | 0x59 | ALBFA | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 |
| 518 | 0xDF87 | 0x5A | ALBBF | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 |
| 519 | 0xE107 | 0x60 | KOMBI | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 520 | 0xE184 | 0x62 | M-ASK | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 521 | 0xE187 | 0x62 | M-ASK | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 522 | 0xE204 | 0x64 | PDC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 523 | 0xE207 | 0x64 | PDC | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 524 | 0xE244 | 0x65 | SZM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 525 | 0xE247 | 0x66 | SZM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 526 | 0xE2C4 | 0x67 | CON | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 527 | 0xE2C7 | 0x67 | CON | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 528 | 0xE344 | 0x6D | SMFA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 529 | 0xE347 | 0x6D | SMFA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 530 | 0xE384 | 0x6E | SMBF | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 531 | 0xE387 | 0x6E | SMBF | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 532 | 0xE3C4 | 0x6B | HKL | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 533 | 0xE3C5 | 0x6B | HKL | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 534 | 0xE444 | 0x6D | SMFA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 535 | 0xE447 | 0x6D | SMFA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 536 | 0xE484 | 0x6E | SMBF | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 537 | 0xE487 | 0x6E | SMBF | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 538 | 0xE504 | 0x70 | LM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 539 | 0xE505 | 0x70 | LM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 540 | 0xE506 | 0x70 | LM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 541 | 0xE507 | 0x70 | LM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 542 | 0xE508 | 0x70 | LM | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 543 | 0xE50B | 0x70 | LM | leer | 0x0000 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 544 | 0xE514 | 0x70 | LM | DSC | 0x0000 | 20 | 20 | -23 | 20 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | 20 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | 20 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | 0 | 0 | 0 |
| 545 | 0xE515 | 0x70 | LM | AHM | 0x0000 | -22 | 33 | -22 | -22 | -22 | -22 | -22 | 33 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 33 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 0 | 0 | 0 |
| 546 | 0xE516 | 0x70 | LM | SZL | 0x0000 | -23 | 25 | -23 | 25 | 25 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | 25 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | 0 | 0 | 0 |
| 547 | 0xE517 | 0x70 | LM | DSC | 0x0000 | 20 | 20 | -23 | 20 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | 20 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | 20 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | -23 | 0 | 0 | 0 |
| 548 | 0xE518 | 0x70 | LM | RLS | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 |
| 549 | 0xE519 | 0x70 | LM | DSC | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 550 | 0xE51A | 0x70 | LM | DSC | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 551 | 0xE51B | 0x70 | LM | CAS | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 552 | 0xE51C | 0x70 | LM | leer | 0x0000 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | 50 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 | -20 |
| 553 | 0xE544 | 0x71 | AHM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 554 | 0xE547 | 0x71 | AHM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 555 | 0xE584 | 0x72 | KBM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 556 | 0xE587 | 0x72 | KBM | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 557 | 0xE5C4 | 0x73 | CID | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 558 | 0xE5C7 | 0x73 | CID | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 559 | 0xE704 | 0x78 | IHKA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 560 | 0xE707 | 0x78 | IHKA | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 561 | 0xE714 | 0x78 | IHKA | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 562 | 0xE715 | 0x78 | IHKA | leer | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 563 | 0xE716 | 0x78 | IHKA | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 564 | 0xE717 | 0x78 | IHKA | leer | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 565 | 0xE718 | 0x78 | IHKA | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 566 | 0xE719 | 0x78 | IHKA | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 567 | 0xE71A | 0x78 | IHKA | leer | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 568 | 0xE71B | 0x78 | IHKA | leer | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 569 | 0xE71C | 0x78 | IHKA | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 570 | 0xE71D | 0x78 | IHKA | SHZH | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 571 | 0xE71E | 0x78 | IHKA | leer | 0x0000 | 20 | 20 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | 20 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 | -22 |
| 572 | 0xE71F | 0x78 | IHKA | leer | 0x0000 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | 33 | -21 | -21 | 33 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 | -21 |
| 573 | 0xE784 | 0x7A | SHZH | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| 574 | 0xE787 | 0x7A | SHZH | leer | 0x0000 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 50 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

### LOWBAT

| ORT | STGR |
| --- | --- |
| 0x931D | KOMBI |
| 0x9B2B | SHZH |
| 0xA38D | VM |
| 0xA12B | RLS |
| 0x5DCE | DSC |
| 0x5DCF | DSC |
| 0x29A9 | DME |
| 0x4661 | DDE |
| 0x4536 | DDE |

### STGR_NAMEN

| STGR_ADRESSE | STGR_KURZNAME | STGR_LANGNAME |
| --- | --- | --- |
| 0x00 | SGM_ZGM | Sicherheits- und Gateway-Modul (ZGM)                       |
| 0x01 | SGM_SIM | Sicherheits- und Gateway-Modul (SIM)                       |
| 0x02 | SZL | Schaltzentrum Lenksäule                                    |
| 0x05 | TMFA | Türmodul Fahrer                                            |
| 0x06 | TMBF | Türmodul Beifahrer                                         |
| 0x09 | SBSL | Satellit B-Säule links                                     |
| 0x0A | SBSR | Satellit B-Säule rechts                                    |
| 0x0E | SFZ | Satellit Fahrzeugzentrum                                   |
| 0x12 | DME_DDE | Motor Elektronik / Diesel Elektronik                       |
| 0x13 | DME2_DDE2 | Motor Elektronik 2 / Diesel Elektronik Slave               |
| 0x16 | AFS | Aktivlenkung                                               |
| 0x17 | EKP | Kraftstoffpumpe                                            |
| 0x18 | EGS_SMG | Getriebesteuerung/Sequenzielles Manuelles Getriebe         |
| 0x19 | VTG | Verteilergetriebe                                          |
| 0x1B | VTC | Valvetronic                                                |
| 0x1E | VTC2 | Valvetronic 2                                              |
| 0x1F | HDEV | HDEV-Steuergerät                                           |
| 0x20 | RDC | Reifendruck-Control                                        |
| 0x21 | ACC | Aktive Geschwindigkeitsregelung                            |
| 0x22 | AHL | Adaptives Kurvenlicht                                      |
| 0x23 | ARS | Dynamic Drive                                              |
| 0x24 | CVM | Cabrioverdeck-Modul                                        |
| 0x25 | Y_SEMNS1 | Y-Sensor1                                        |
| 0x27 | PGS | Passive-Go-Steuergerät                                     |
| 0x29 | DSC | Dynamische Stabilitäts-Control                             |
| 0x2D | YSENS2 | Y-Sensor2                                        |
| 0x2F | HDEV2 | HDEV2-Steuergerät                                          |
| 0x31 | MMC2 | Multimedia Changer                                 |
| 0x35 | CCC | Car Communication Computer                                 |
| 0x36 | TEL | Telefon                                                    |
| 0x37 | AMP | Verstärker                                                 |
| 0x38 | EHC | Höhenstands-Control                                        |
| 0x39 | EDC_K | Dämpfer-Control                                            |
| 0x3A | KHI | Kopfhörer-Interface                                        |
| 0x3B | NAV | Navigation                                                      |
| 0x3C | CDC | CD-Wechsler                                                |
| 0x3D | HUD | Head-Up Display                                            |
| 0x3F | ASK | Audio System Controller                                    |
| 0x40 | CAS | Car Access System                                          |
| 0x41 | DWA | Diebstahlwarnanlage                                        |
| 0x42 | CIM | Chassis Integrations Modul                                        |
| 0x43 | MPM | Mikro-Powermodul                                           |
| 0x44 | SHD | Schiebehebedach                                            |
| 0x45 | RLS | Regen-Fahrlicht-Sensor                                     |
| 0x47 | ANT | Antennentuner                                              |
| 0x4B | VM | Videomodul                                                 |
| 0x50 | DWA | Diebstahlwarnanlage                                        |
| 0x51 | DWA | Diebstahlwarnanlage                                        |
| 0x52 | DWA | Diebstahlwarnanlage                                        |
| 0x53 | DWA | Diebstahlwarnanlage                                        |
| 0x54 | RAD | Radio                                                      |
| 0x59 | ALBV60F | Aktive Lehnenbreitenverstellung Fahrer                                                     |
| 0x5A | ALBV60B | Aktive Lehnenbreitenverstellung Beifahrer                                                     |
| 0x60 | KOMBI | Instrumentenkombination                                    |
| 0x61 | FBI | Flexibles Bus-Interface                                    |
| 0x62 | M_ASK_CCC | Multi-Audiosystem-Kontroller / Car Communication Computer  |
| 0x63 | M_ASK_CCC | Multi-Audiosystem-Kontroller / Car Communication Computer  |
| 0x64 | PDC | Park Distance Control                                      |
| 0x65 | SZM | Schaltzentrum Mittelkonsole                                |
| 0x67 | CON | Controller                                                 |
| 0x6B | HKL | Heckklappenlift                                            |
| 0x6D | SMFA | Sitzmodul Fahrer                                           |
| 0x6E | SMBF | Sitzmodul Beifahrer                                        |
| 0x70 | LSZ | Lichtschaltzentrum                                         |
| 0x71 | AHM | Anhängermodul                                              |
| 0x72 | KBM | Karosserie-Basismodul                                      |
| 0x73 | CID | Central Information Display                                |
| 0x74 | CIDF | Central Information Display hinten                               |
| 0x78 | IHKA | Integrierte Heiz-Klima-Automatik                           |
| 0x7A | SH | Standheizgerät                                             |
| 0x7D | FDM | Flexibles Diagnosemodul                                    |
| 0x80 | CAS | Car Access System                                          |
| 0x90 | CCC | Car Communication Computer                                 |
| 0x91 | CCC | Car Communication Computer                                 |
| 0x92 | CCC | Car Communication Computer                                 |
| 0x93 | CCC | Car Communication Computer                                 |
| 0x94 | CCC | Car Communication Computer                                 |
| 0x95 | CCC | Car Communication Computer                                 |
| 0x96 | CCC | Car Communication Computer                                 |
| 0x97 | CCC | Car Communication Computer                                 |
| 0x98 | CCC | Car Communication Computer                                 |
| 0x99 | CCC | Car Communication Computer                                 |
| 0x9A | CCC | Car Communication Computer                                 |
| 0x9B | CCC | Car Communication Computer                                 |
| 0x9C | CCC | Car Communication Computer                                 |
| 0x9D | CCC | Car Communication Computer                                 |
| 0x9E | CCC | Car Communication Computer                                 |
| 0x9F | CCC | Car Communication Computer                                 |
| 0xA0 | CCC | Car Communication Computer                                 |
| 0xA1 | SBSL | Satellit B-Säule links                                     |
| 0xA2 | SBSR | Satellit B-Säule rechts                                    |
| 0xE7 | F_CAN | Bus-System F-CAN                                  |
| 0xE9 | K_CAN | Bus-System für Karosserieumfänge                           |
| 0xEA | PT_CAN | Bus-System im Antriebs- und Fahrwerksbereich               |
| 0xEB | byteflight | Bus-System für Airbag-Steuergeräte                         |
| 0xEC | MOST | Bus-System für Audio- und Kommunikationsumfänge            |
| 0xFF | unbekannt | unbekanntes Steuergerät                                    |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |
