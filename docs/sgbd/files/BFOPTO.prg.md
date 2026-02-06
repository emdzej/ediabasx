# BFOPTO.prg

## General

|  |  |
| --- | --- |
| File | BFOPTO.prg |
| Type | PRG |
| Jobs | 34 |
| Tables | 6 |
| Origin | BMW VS-22 Volk |
| Revision | 1.00 |
| Author | BMW VS-22 Volk |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | OPPS Optisches Prüf- und Programmiersystem |  |  |
| ORIGIN | string | BMW VS-22 Volk |  |  |
| REVISION | string | 1.00 |  |  |
| AUTHOR | string | BMW VS-22 Volk |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.24 |  |  |
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

### STEUERN_KOMMUNIKATIONS_MODE

OPPS in Kommunikationsmodus setzen

_No arguments._

### STEUERN_MOST_MESSMODE

Einstellen Messmodus MOST

_No arguments._

### STEUERN_KOMMUNIKATIONSPARAMETER

Einstellen der Kommunikationsparameter für BMW fast

_No arguments._

### STEUERN_ADS4MOST_MODE

Kommandos nach STEUERN_ADS4MOST_MODE an ADS4MOST Treiber

_No arguments._

### STEUERN_BYTEFLIGHT_MODE

Kommandos nach STEUERN_BYTEFLIGHT_MODE an BYTEFLIGHT

_No arguments._

### STEUERN_SET_MODUS

Master oder Slave, Clockmaster

| Name | Type | Description |
| --- | --- | --- |
| CLOCK_MASTER | int | 0 = Slave 1 = Clock Master |
| NETWORK_MASTER | int | 0 = Network Master deaktiviert 1 = Network Master |

### STEUERN_FORCE_WAKEUP

_No description._

| Name | Type | Description |
| --- | --- | --- |
| WAKEUP | int | 0 = Forcing wakeup deaktiviert 1 = Forcing wakeup aktiviert |

### STATUS_IDENT

OPPS Identdaten

_No arguments._

### STATUS_SELBSTTEST

Ausführen System-Check

_No arguments._

### STEUERN_OPPS_RESET

Durchführen Reset OPPS

_No arguments._

### STATUS_SPANNUNG_MOST

Spannungsüberwachung

_No arguments._

### STATUS_SENDELEISTUNG_MESSUNG

Messung der Sendeleistung

_No arguments._

### STATUS_MEASUREOPTICALPOWER

Messung der Sendeleistung

_No arguments._

### STATUS_GETOPTICALPOWER

Messung der Sendeleistung

_No arguments._

### STATUS_TEMPERATUR

_No description._

_No arguments._

### STEUERN_SENDELEISTUNG

_No description._

| Name | Type | Description |
| --- | --- | --- |
| SENDELEISTUNG | int | Eingabe von negativen Werten im Bereich von -4 bis -10 |

### STEUERN_KALIBRIERUNG_MOST

_No description._

| Name | Type | Description |
| --- | --- | --- |
| NUMBER | int | Kalibrierwert wird unter Nummer 1,2 oder 3 gespeichert |
| USAGETYPE | int | 0: Make 1: MakeSave 2: MakeSaveUse |

### STATUS_POTENTIOMETER_OFFSET_ABGLEICH

Digitaler Offset Abgleich im Sende- und Empfangstrakt Immer vor Opto-Abgleich durchführen Faser: max. 3dB Dämpfung darf verwendet werden

_No arguments._

### STEUERN_OPTISCHER_ABGLEICH

Abgleich des Sendetrakts mit Referenzempfaenger

| Name | Type | Description |
| --- | --- | --- |
| ABGLEICH_EEPROM | int | 00h, Abgleich ohne EEPROM Speicherung F0h=240, Abgleich mit EEPROM Speicherung |

### STEUERN_SPANNUNGSVERSORGUNG_UISIS

UISIS, Spannungsversorgung der Satelliten zu/abschalten

| Name | Type | Description |
| --- | --- | --- |
| SPANNUNGSVERSORGUNG_UISIS | int | 1 UISIS zuschalten 2 UISIS abschalten |

### STATUS_SPANNUNG_OPPS_BYTEFLIGHT

Spannungswerte

_No arguments._

### STATUS_LEITUNGSTEST_OPPS_BYTEFLIGHT

Leitungstest auf Kurzschluss

_No arguments._

### STEUERN_GATEWAY_PARAMETER

Sende/Empfangsparameter einstellen  

| Name | Type | Description |
| --- | --- | --- |
| GATEWAY_MASTER_SLAVE | int | 0 Optotester=Slave(für SIM) 1 Optotester=Master |
| GATEWAY_DIAGNOSE_ADRESSE | int | Diagnose_ID aus byteflight-Nachrichtenkatalog ZGM  Diagnose_ID=144 SIM  Diagnose_ID=145 SZL  Diagnose_ID=146 SASL Diagnose_ID=147 SASR Diagnose_ID=148 STVL Diagnose_ID=149 STVR Diagnose_ID=150 SSFA Diagnose_ID=151 SSBF Diagnose_ID=152 SBSL Diagnose_ID=153 SBSR Diagnose_ID=154 SSH  Diagnose_ID=157 SFZ  Diagnose_ID=158 |

### STEUERN_SENDELEISTUNG_A_W_DBM

Sendeleistung fuer Kommunikation mit Satellit einstellen

| Name | Type | Description |
| --- | --- | --- |
| TESTSIGNAL | int | 0 Testsignal aus 1 Testsignal ein |
| ART_SENDELEISTUNG_A_W_DBM | int | 0 Vorgabe in Ampere (LSB:0.0833A) 1 Vorgabe in Watt (LSB:0.25µW) 2 Vorgabe in dBm (LSB:0.1 dBm) |
| SENDELEISTUNG_A_W_DBM | int | Leistungsvorgabe nach Art_Sendeleistung Bsp.: in Watt ACHTUNG! Bitte Eingabe abh. von Art_Sendeleistung siehe folgende Zeilen Eingabe in Ampere n/12 (muss durch 12 teilbar sein) Eingabe in Watt n/4 (muss durch 4 teilbar sein) Eingabe in dBm n/10 (muss durch 10 teilbar sein) |

### STEUERN_START_KOMMUNIKATION

Start Kommunikation mit Satellit  

| Name | Type | Description |
| --- | --- | --- |
| MASTER_SLAVE | int | 1 Optotester=Master 2 Optotester=Slave (fuer SIM) |

### STEUERN_NACHRICHTEN_SENDEN_EMPFANGEN

Kommunikation Sende/Empfangstest  

| Name | Type | Description |
| --- | --- | --- |
| SG_ADRESSE | int | Steuergeraet    Steuergeraeteadressen(hex/dec) ZGM             0h/0 SIM             1h/1 SZL             2h/2 SASL            3h/3 SASR            4h/4 STVL            5h/5 STVR            6h/6 SSFA            7h/7 SSBF            8h/8 SBSL            9h/9 SBSR            Ah/10 SSH             Dh/13 SFZ             Eh/14 |
| BYTE_1 | int | Schlechtester Fall: Byte_1=240 |
| BYTE_2 | int | Schlechtester Fall: Byte_2=255 |
| BYTE_3 | int | Schlechtester Fall: Byte_3=170 |
| BYTE_4 | int | Schlechtester Fall: Byte_4=85 |

### STEUERN_SLEEP_MODE

SG in Schlafmodus setzen  

_No arguments._

### STEUERN_EMPFANGSPEAK_LEISTUNG

Empfangspeakleistung messen

| Name | Type | Description |
| --- | --- | --- |
| ABTASTZEITRAUM | int | ACHTUNG! Eingabe n/10 (muss durch 10 teilbar sein) |

### STATUS_EMPFANGSPEAK_LEISTUNG

Empfangspeakleistung messen

_No arguments._

### STEUERN_MODUL_INITIALISIEREN

Optotestermodul aktivieren/Moduladresse bereitstellen KWP2000: $31 SG spezifische Daten lesen $E0 Modul aktivieren

_No arguments._

### STATUS_MODUL_RESET

Optotesterservices allgemein (JOB_NUMMER+JOB_DATEN) KWP2000: $31 SG spezifische Daten lesen $E1 Steuergeraete Status lesen Modus  : Default

_No arguments._

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
| 0x67 | Gentex GmbH |
| 0x68 | Atena GmbH |
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

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |
