# TELIBUS.prg

## General

|  |  |
| --- | --- |
| File | TELIBUS.prg |
| Type | PRG |
| Jobs | 87 |
| Tables | 13 |
| Origin | BMW TI-431 Weber |
| Revision | 3.002 |
| Author | Motorola Spengler, Manns, BMW EE-43 Villiers, Doyen, Snijders, BMW TI-431 Weber |
| ECU Comment | basiert auf SGBD fuer BIT II (BMW TI-433 Krueger) |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | TELIBUS |  |  |
| ORIGIN | string | BMW TI-431 Weber |  |  |
| REVISION | string | 3.002 |  |  |
| AUTHOR | string | Motorola Spengler, Manns, BMW EE-43 Villiers, Doyen, Snijders, BMW TI-431 Weber |  |  |
| COMMENT | string | basiert auf SGBD fuer BIT II (BMW TI-433 Krueger) |  |  |
| PACKAGE | string | 0.12 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter DS2

_No arguments._

### IDENT

Identdaten

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels Es muessen immer alle drei Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden.

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | 0-255 bzw. 0x00-0xFF |
| BYTE2 | int | 0-255 bzw. 0x00-0xFF |
| BYTE3 | int | 0-255 bzw. 0x00-0xFF |

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels

_No arguments._

### SLEEP_MODE

SG in Sleep-Mode versetzen

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | real | a) Zeit nach der das Steuergerät einschläft Bereich   : 0.5 bis 20.0 [Sekunden] Auflösung : 0.5 [Sekunden] => zeitgesteuerter Power-Down (0x9B) wird aktiviert b) Default: (Es wird kein Argument übergeben!) => normaler Power-Down (0x9D) wird aktiviert |

### DIAGNOSE_AUFRECHT

Diagnosemode aufrechterhalten

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### C_FG_AUFTRAG

Fahrgestellnummer schreiben und ruecklesen Standard Codierjob

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) |

### C_FG_LESEN

Fahrgestellnummer lesen Standard Codierjob

_No arguments._

### C_FG_SCHREIBEN

Fahrgestellnummer schreiben Standard Codierjob

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) |

### IDENT_SCHREIBEN

Identdaten schreiben

| Name | Type | Description |
| --- | --- | --- |
| ID_BMW_NR | string | BMW-Teilenummer  e.g. 06924544 |
| ID_HW_NR | string | BMW-Hardwarenummer 00-99 |
| ID_COD_INDEX | string | Codier-Index von CBD 00-99 e.g. 01 |
| ID_DIAG_INDEX | string | Diagnose-Index - always 20 |
| ID_BUS_INDEX | string | Bus-Index 00 - 99, 01 |
| ID_DATUM_KW | string | Herstelldatum KW 01 - 52 |
| ID_DATUM_JAHR | string | Herstelldatum Jahr  00 - 99 |
| ID_LIEF_NR | string | Lieferanten-Nummer Motorola 23 |
| ID_SW_NR | string | Softwarenummer 00 - 99 |

### IO_PORTS_SCHREIBEN_UND_TESTEN

Set/test verschiedener I/O Ports

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | 1.byte with portdata |
| BYTE2 | int | 2.byte with portdata |
| BYTE3 | int | 3.byte with portdata |

### STATUS_IO_LESEN

Status von IO-Ports lesen

_No arguments._

### STEUERN_SELBSTTEST

Durchfuehrung des spez. Selbsttests

_No arguments._

### FS_LESEN

Fehlerspeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### IS_LESEN

Infospeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### RESET_MODE

Durchfuehrung eines resets ca. 2 Sek. nach senden von ACK erfolgt der Reset

_No arguments._

### C_C_SCHREIBEN

Codierdaten schreiben ohne Verifikation

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_C_AUFTRAG

Codierdaten schreiben und verifizieren

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_C_LESEN

Codierdaten lesen

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### TCU_TYPE_LESEN

Lesen der 1-byte TCU ID

_No arguments._

### FAHRGESTELLNUMMER_VIN_LESEN

Lesen der 7-byte Fahrgestellnummer aus den Codierdaten

_No arguments._

### ECALL_BCALL_BUTTON_TEST

Test Ecall, Bcall buttons

_No arguments._

### STATUS_GPS

Status des GPS wird ausgegeben KWP2000: $21 ReadDataByLocalIdentifier $02 recordLocalIdentifier Modus  : Default

_No arguments._

### STATUS_SIM_READER_LESEN

Read status of TCU built-in and attached SIM card readers

_No arguments._

### BT_PAIRING_START

Initiate Bluetooth Pairing

_No arguments._

### BT_PAIRING_RESULT_LESEN

Lesen von Bluetooth Pairing Ergebnis

_No arguments._

### BT_FIX_PASSKEY_SCHREIBEN

Write Bluetooth fix passkey

| Name | Type | Description |
| --- | --- | --- |
| BT_FIX_PASSKEY | string |  |

### BT_FIX_PASSKEY_LESEN

Read Bluetooth fix passkey

_No arguments._

### BT_DEVICE_ADDRESS_LESEN

Read Bluetooth address

_No arguments._

### BT_USER_FRIENDLY_NAME_SCHREIBEN

Set Bluetooth user-friendly name

| Name | Type | Description |
| --- | --- | --- |
| BT_USER_FRIENDLY_NAME | string | Bluetooth user-friendly name (18-stellig) |

### BT_USER_FRIENDLY_NAME_LESEN

Read Bluetooth user-friendly name

_No arguments._

### FG_ALS_BT_USER_FRIENDLY_NAME_SCHREIBEN

Write "BMW" + last 5 digits of FG as BT User-Friendly name Based on standard Codierjob C_FG_SCHREIBEN

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (17 oder 18-stellig) |

### BT_PAIRED_DEVICES_LESEN

Read Bluetooth paired devices

_No arguments._

### BT_PAIRED_DEVICES_LIST_LESEN

Lesen von Liste mit Bluetooth Paired Devices

_No arguments._

### BT_PAIRED_DEVICES_LIST_LOESCHEN

Delete list with Bluetooth paired devices

_No arguments._

### BT_PAIRED_DEVICES_LOESCHEN

Delete list with Bluetooth paired devices

_No arguments._

### BT_DISCOVERABLE_MODE

Bring Bluetooth Server into discoverable mode

_No arguments._

### BT_ENABLE

Enable Bluetooth operation

_No arguments._

### BT_DISABLE

Disable Bluetooth operation

_No arguments._

### BT_OPERATIONMODE_LESEN

read if BT operation is enabled or disabled

_No arguments._

### DSP_ACOUSTIC_PROFILE_LESEN

GAL: read DSP acoustic profile (1-16)

_No arguments._

### GAL_KMH_PER_STAGE_SCHREIBEN

GAL: set km/h per amplification stage (10 - 60)

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | km/h per amplification stage (10-60) |

### GAL_KMH_PER_STAGE_LESEN

GAL: read km/h per amplification stage (10 - 60)

_No arguments._

### ECALL_ENABLE

Enable ecall

_No arguments._

### ECALL_DISABLE

Disable E-call

_No arguments._

### ECALL_STATUS_LESEN

read if E-call is enabled or disabled

_No arguments._

### TELEMATICS_STATUS_LESEN

read if telematics operation is enabled or disabled

_No arguments._

### NON_TELEMATICS_E_CALL_STATUS_LESEN

read if non-telematic E-call (call 911/112) is enabled or disabled

_No arguments._

### US_CUST_CALLS_ENABLE

Enable customer calls over NAD with GMIN

_No arguments._

### US_CUST_CALLS_DISABLE

Disable customer calls over NAD with GMIN

_No arguments._

### US_CUST_CALLS_LESEN

Read if customer calls over NAD using telematic GMIN are enabled or disabled

_No arguments._

### BACKUP_EMERGENCY_NO_SCHREIBEN

Set emergency number (e.g. 112/911) for non-telematic E-calls

| Name | Type | Description |
| --- | --- | --- |
| EMERGENCY_NUM | string | (20 bytes, ASCII) |

### BACKUP_EMERGENCY_NO_LESEN

Read backup emergency number used for non-telematic E-calls (e.g.112/911)

_No arguments._

### US_CALL_SERVICE_CENTER_STATUS_LESEN

read if call service center (e.g. Verizon)is enabled or disabled

_No arguments._

### US_CALL_SERVICE_CENTER_NUMBER_SCHREIBEN

Set phone number of call service number (Verizon)

| Name | Type | Description |
| --- | --- | --- |
| SERV_CENT_NO | string | Service center number |

### US_CALL_SERVICE_CENTER_NUMBER_LESEN

Read phone number of call service center (Verizon)

_No arguments._

### US_MIN_SCHREIBEN

Set MIN in Ericsson CM-42 NAD for US telenatics

| Name | Type | Description |
| --- | --- | --- |
| US_MIN | string | 10-stellige US MIN |

### FG_SCHREIBEN_AS_US_MIN

Write last 5 digits of FG in GMIN Based on standard Codierjob C_FG_SCHREIBEN

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) |

### US_CDMA_DIRECTORY_SCHREIBEN

Set US CM-42 CDMA Directory 00000 00000 - 99999 99999

| Name | Type | Description |
| --- | --- | --- |
| CDMA_DIR | string | OKAY, wenn fehlerfrei CDMA Directory |

### US_CDMA_DIRECTORY_LESEN

CDMA Directory 00000 00000 00000 - 99999 99999 99999 -> 0x31..0x31 - 0x39..0x39

_No arguments._

### US_SID_NID_SCHREIBEN

Set US CM-42 System ID and Network ID

| Name | Type | Description |
| --- | --- | --- |
| INDEX | string | OKAY, wenn fehlerfrei table JobResult STATUS_TEXT |
| SID | string | OKAY, wenn fehlerfrei table JobResult STATUS_TEXT |
| NID | string | OKAY, wenn fehlerfrei table JobResult STATUS_TEXT |

### US_SID_NID_LESEN

Read US CM-42 Home SID/NID list

_No arguments._

### US_CDMA_PRIMARY_CH_A_SCHREIBEN

Set US CM-42 CDMA Primary Channel A

| Name | Type | Description |
| --- | --- | --- |
| CDMA_PA | string | 1.byte of Primary Channel A (1-311, 689-694, 1013-1023 as ASCII bytes) |

### US_CDMA_PRIMARY_CH_A_LESEN

Read US CM-42 CDMA Primary Channel (1-311, 689-694, 1013-1023 as ASCII bytes)

_No arguments._

### US_CDMA_SECONDARY_CH_A_SCHREIBEN

Set US CM-42 CDMA Secondary Channel A

| Name | Type | Description |
| --- | --- | --- |
| CDMA_SA | string | 1.byte of Secondary Channel A (1-311, 689-694, 1013-1023 as ASCII bytes) |

### US_CDMA_SECONDARY_CH_A_LESEN

Read US CM-42 CDMA Secondary Channel A  (1-311, 689-694, 1013-1023 as ASCII bytes)

_No arguments._

### US_CDMA_PRIMARY_CH_B_SCHREIBEN

Set US CM-42 CDMA Primary Channel B

| Name | Type | Description |
| --- | --- | --- |
| CDMA_PB | string | 1.byte of Primary Channel B (365-644, 739-777 as ASCII bytes) |

### US_CDMA_PRIMARY_CH_B_LESEN

Read US CM-42 CDMA Primary Channel B  (365-644, 739-777 as ASCII bytes)

_No arguments._

### US_CDMA_SECONDARY_CH_B_SCHREIBEN

Set US CM-42 CDMA Secondary Channel B

| Name | Type | Description |
| --- | --- | --- |
| CDMA_SB | string | 1.byte of Secondary Channel B (365-644, 739-777 as ASCII bytes) |

### US_CDMA_SECONDARY_CH_B_LESEN

Read US CM-42 CDMA Secondary Channel B (365-644, 739-777 as ASCII bytes)

_No arguments._

### US_HOME_ONLY_ENABLE

Enable Home Only

_No arguments._

### US_HOME_ONLY_DISABLE

Disable Home Only

_No arguments._

### US_HOME_ONLY_LESEN

read status of home only

_No arguments._

### US_A_B_SIDE_SCHREIBEN

Set Home Only Status (0-3)

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | Home Only Status (0-3) |

### ENERGIESPARMODE

MTS/FETRAWE Mode (00 Exit) (01 Manufacturing) (02 Service) (03 Production)

| Name | Type | Description |
| --- | --- | --- |
| PRODUKTIONSMODE | string | "ein,1" -> Produktions Mode ein "aus,0" -> Produktions Mode aus table DigitalArgument TEXT Default: "aus" |
| TRANSPORTMODE | string | "ein,1" -> Transport Mode ein "aus,0" -> Transport Mode aus table DigitalArgument TEXT Default: "aus" |
| WERKSTATTMODE | string | "ein,1" -> Werkstatt Mode ein "aus,0" -> Werkstatt Mode aus table DigitalArgument TEXT Default: "aus" |

### US_ESN_MIN_LESEN

Read MIN in Ericsson CM-42 NAD for US telematics

_No arguments._

### IMEI_LESEN

Read IMEI

_No arguments._

### US_K633_ENABLE

Enable Bluetooth portable support for US (K633)

_No arguments._

### US_K633_LESEN

Read status of US Bluetooth portable support (K633)

_No arguments._

### US_K633_DISABLE

Disable Bluetooth portable support for US (K633)

_No arguments._

### NAD_EQUIPPED_ENABLE

Enable NAD equipped coding parameter

_No arguments._

### NAD_EQUIPPED_LESEN

Read status of the NAD equipped coding parameter

_No arguments._

### NAD_EQUIPPED_DISABLE

Disable NAD equipped coding parameter

_No arguments._

### HW_SELBTEST_STATUS_LESEN

Read results of the HW selftest

_No arguments._

## Tables

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

### PAIRINGRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | SUCCESS |
| 0x01 | FAILURE |
| 0x02 | WAITING |

### TCUTYPE_STATUS

| TCU_TYPE | TCU_TYPE_TEXT |
| --- | --- |
| 0x05 | I-bus ECE |
| 0x06 | I-bus US |
| 0xXY | unbekannte TCU |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x68 | Kurzschluss in der GPS Antenne |
| 0x69 | GPS Antenne nicht angeschlossen |
| 0x6A | Hardware Fehler im GPS Modul |
| 0x6B | Kommunikation mit dem GPS Modul gestoert |
| 0x6D | E-call nicht angeschlossen |
| 0x6E | Fehler mit der E-call LED |
| 0x70 | E-call ist kurzgeschlossen |
| 0x73 | Fehler non-volatile Speicherbereich |
| 0x74 | E-call button stuck |
| 0x79 | Interne Fehler mit dem BT Interface |
| 0x7A | Energiesparmode aktiv |
| 0x7E | Fehler mit der backup Battery |
| 0x7F | B-call ist kurzgeschlossen |
| 0x80 | B-call nicht angeschlossen |
| 0x81 | B-call button stuck |
| 0x98 | Microphone 1 Error |
| 0xA0 | Prefit SIM Not Present |
| 0xA1 | Prefit SIM Lesen Error |
| 0xA2 | Prefit SIM Pin Locked |
| 0x90 | Backup Antenna Disconnected |
| 0x97 | BT Cradle Stuck Button |
| 0xXY | unbekannte Fehlerart |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Fehler momentan nicht vorhanden |
| 0x20 | Fehler momentan vorhanden |
| 0xXY | unbekannte Fehlerart |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x08 | Software Reset Fehler |
| 0x11 | I-Bus Fehler |
| 0x12 | low RF  |
| 0x13 | NVM korrumpiert |
| 0x14 | Fehler mit der Codierung |
| 0x15 | Fehler mit dem Transceiver |
| 0x16 | Fehler mit dem Handy |
| 0x17 | E-call LED not ok / Fehler mit der E-call LED |
| 0x18 | GPS COMMS Failure / Kommunikation mit dem GPS Modul gestoert |
| 0x1A | Prefit SIM Not Present |
| 0x1B | Prefit SIM Lesen Error |
| 0x1C | Prefit SIM Pin Locked |
| 0x1D | Prefit SIM Network Error |
| 0xXY | unbekannte Fehlerart |

### IARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Fehler momentan nicht vorhanden |
| 0x20 | Fehler momentan vorhanden |
| 0xXY | unbekannte Fehlerart |

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_ERW | nein |
| F_HFK | ja |
| F_LZ | nein |
| F_UWB_ERW | ja |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | ERROR_UNKNOWN |

### TGPSSTATUS

| WERT | ANZEIGE_TEXT |
| --- | --- |
| 0x00 | Kein GPS |
| 0x01 | Kommunikationsfehler |
| 0x02 | GPS Empfängerfehler |
| 0x03 | Kein Almanach |
| 0x04 | Suche Satellit |
| 0x05 | Verfolge 1 Satellit |
| 0x06 | Verfolge 2 Satelliten |
| 0x07 | Verfolge 3 Satelliten |
| 0x08 | Verfolge 4 Satelliten |
| 0x09 | Verfolge 5 Satelliten |
| 0x0A | Verfolge 6 Satelliten |
| 0x0B | 2D Positionierung |
| 0x0C | 3D Positionierung |
| 0xXY | nicht definiert |

### ROVERPARTNUMPREFIX

| ROVER_NR | PREFIX |
| --- | --- |
| 0xA0 | AMR |
| 0xA1 | HHF |
| 0xA2 | JFC |
| 0xA3 | MKC |
| 0xA4 | SCB |
| 0xA5 | SRB |
| 0xA6 | XQC |
| 0xA7 | XQD |
| 0xA8 | XQE |
| 0xA9 | XVD |
| 0xAA | YAC |
| 0xAB | YDB |
| 0xAC | YFC |
| 0xAD | YUB |
| 0xAE | YWC |
| 0xAF | YWQ |
| 0xB0 | EGQ |
| 0xB1 | YIB |
| 0xB2 | YIC |
| 0xB3 | YIE |
| 0xXY | ??? |

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0xA0 | OKAY |
| 0xA1 | BUSY |
| 0xA2 | ERROR_ECU_REJECTED |
| 0xB0 | ERROR_ECU_PARAMETER |
| 0xB1 | ERROR_ECU_FUNCTION |
| 0xB2 | ERROR_ECU_NUMBER |
| 0xFF | ERROR_ECU_NACK |
| ?10? | ERROR_ARGUMENT |
| ?20? | ERROR_FEHLERANZAHL |
| ?70? | ERROR_NUMBER_ARGUMENT |
| ?71? | ERROR_RANGE_ARGUMENT |
| ?72? | ERROR_VERIFY |
| 0x?? | ERROR_ECU_UNKNOWN_STATUSBYTE |

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
