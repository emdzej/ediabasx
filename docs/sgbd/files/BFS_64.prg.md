# BFS_64.prg

## General

|  |  |
| --- | --- |
| File | BFS_64.prg |
| Type | PRG |
| Jobs | 17 |
| Tables | 9 |
| Origin | BMW EE-52 Lueddeke |
| Revision | 1.10 |
| Author | DELPHI/IEB/B.Burkhart |
| ECU Comment | Gateway SZM E64 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Gateway SZM<->SM(E46) |  |  |
| ORIGIN | string | BMW EE-52 Lueddeke |  |  |
| REVISION | string | 1.10 |  |  |
| AUTHOR | string | DELPHI/IEB/B.Burkhart |  |  |
| COMMENT | string | Gateway SZM E64 |  |  |
| PACKAGE | string | 1.23 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### INFO

Information SGBD

_No arguments._

### IDENT

Beifahrersitz (E46) identifizieren KWP2000: $A5 unpackDS2ServiceRequest Id   Modus  : all

_No arguments._

### SLEEP_MODE

SG in Sleep-Mode versetzen

_No arguments._

### SG_STATUS_LESEN

auslesen der Systemstati aus dem Steuergeraet

_No arguments._

### FERNBEDIENUNG_POSITIONEN_LESEN

4 zur Fernbedienung zugeordnete Positionen aus EEPROM auslesen

_No arguments._

### POSITIONEN_LESEN

3 Speicher- und aktuelle Position aus EEPROM auslesen

_No arguments._

### SPEICHER_LESEN

Lesen des internen Speichers

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE_HIGH | int |  |
| ADRESSE_LOW | int |  |
| ANZAHL | int | 1 bis 16 |

### SPEICHER_SCHREIBEN

Beschreiben des internen Speichers

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | int |  |
| ZELLE | int | immer nur 1 Speicherzelle |

### STEUERN_IO

Ansteuern eines digitalen Einganges

| Name | Type | Description |
| --- | --- | --- |
| ORT1 | string | gewuenschte Komponente |

### CODIERDATEN_LESEN

Daten der Individualisierung lesen

_No arguments._

### CODIERDATEN_SCHREIBEN

Daten der Individualisierung schreiben

| Name | Type | Description |
| --- | --- | --- |
| CODIER_BYTE | unsigned char | Datenbyte der Infividualisierung |

### VARIANTE_LESEN

SG-Variante aus Zelle 0x0124 auslesen

_No arguments._

### STATUS_1_LESEN

Stati des SM46_C

_No arguments._

### STATUS_2_LESEN

Stati des SM46

_No arguments._

### FS_LESEN

Fehlerspeicher lesen

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

## Tables

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x00 | Hallsensor Lehnenneigung, Kurzschluss nach Masse |
| 0x01 | Hallsensor Lehnenneigung, Unterbrechung |
| 0x02 | Hallsensor Lehnenneigung, Kurzschluss nach Ubatt |
| 0x03 | Hallsensor Sitzhoehe, Kurzschluss nach Masse |
| 0x04 | Hallsensor Sitzhoehe, Unterbrechung |
| 0x05 | Hallsensor Sitzhoehe, Kurzschluss nach Ubatt |
| 0x06 | Hallsensor Sitzneigung, Kurzschluss nach Masse |
| 0x07 | Hallsensor Sitzneigung, Unterbrechung |
| 0x08 | Hallsensor Sitzneigung, Kurzschluss nach Ubatt |
| 0x09 | Hallsensor Sitzschlitten, Kurzschluss nach Masse |
| 0x0A | Hallsensor Sitzschlitten, Unterbrechung |
| 0x0B | Hallsensor Sitzschlitten, Kurzschluss nach Ubatt |
| 0x0C | Hallsensor Kopfstuetze, Kurzschluss nach Masse |
| 0x0D | Hallsensor Kopfstuetze, Unterbrechung |
| 0x0E | Hallsensor Kopfstuetze, Kurzschluss nach Ubatt |
| 0x0F | Hallsensor Lehnenverriegelung, Kurzschluss nach Masse |
| 0x10 | Hallsensor Lehnenverriegelung, Unterbrechung |
| 0x11 | Hallsensor Lehnenverriegelung, Kurzschluss nach Ubatt |
| 0x12 | Hallsensor ST2 nicht aufgesteckt, Kurzschluss nach Masse |
| 0x13 | Steuergeraetefehler, Motorbruecke defekt |
| 0x14 | Sitzbedienschalter, Kurzschluss nach Ubatt |
| 0x15 | Sitzbedienschalter, Kurzschluss nach Masse |
| 0xXY | unbekannter Fehlerort |

### FARTTEXTESM

| ART | ARTTEXT |
| --- | --- |
| 0x00 | sporadischer Fehler |
| 0x01 | statischer Fehler |
| 0xXY | unbekannte Fehlerart |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### STEUERN

| STEUER_I_O | BYTE1 | BYTE2 | BYTE3 |
| --- | --- | --- | --- |
| STOP | 0x01 | 0x00 | 0x00 |
| SLV_VOR | 0x01 | 0x01 | 0x00 |
| SLV_ZUR | 0x01 | 0x02 | 0x00 |
| SHV_AUF | 0x01 | 0x04 | 0x00 |
| SHV_AB | 0x01 | 0x08 | 0x00 |
| SNV_AUF | 0x01 | 0x10 | 0x00 |
| SNV_AB | 0x01 | 0x20 | 0x00 |
| LNV_VOR | 0x01 | 0x40 | 0x00 |
| LNV_ZUR | 0x01 | 0x80 | 0x00 |
| KHV_AB | 0x01 | 0x00 | 0x02 |
| KHV_AUF | 0x01 | 0x00 | 0x01 |
| POS_1 | 0x02 | 0x01 | 0x00 |
| POS_2 | 0x02 | 0x02 | 0x00 |
| POS_3 | 0x02 | 0x04 | 0x00 |
| LED_AN | 0x03 | 0x01 | 0x00 |
| LED_AUS | 0x03 | 0x00 | 0x00 |
| EH_STOP | 0x04 | 0x00 | 0x00 |
| EH_VOR | 0x04 | 0x01 | 0x00 |
| EH_ZUR | 0x04 | 0x02 | 0x00 |
| XXX | Y | Z | Z |

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
| auf | 1 |
| ab | 0 |
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
