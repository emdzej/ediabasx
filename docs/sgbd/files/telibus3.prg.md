# telibus3.prg

## General

|  |  |
| --- | --- |
| File | telibus3.prg |
| Type | PRG |
| Jobs | 67 |
| Tables | 24 |
| Origin | BMW EI-43 Snijders |
| Revision | 1.400 |
| Author | BMW EI-43 Snijders |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | TCU 1.5 Malapert I-Bus |  |  |
| ORIGIN | string | BMW EI-43 Snijders |  |  |
| REVISION | string | 1.400 |  |  |
| AUTHOR | string | BMW EI-43 Snijders |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.03 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter DS2

_No arguments._

### INFO

Information SGBD

_No arguments._

### IDENT

Identdaten

_No arguments._

### FS_LESEN

Fehlerspeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels Es muessen immer alle drei Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden.

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | 0-255 bzw. 0x00-0xFF |
| BYTE2 | int | 0-255 bzw. 0x00-0xFF |
| BYTE3 | int | 0-255 bzw. 0x00-0xFF |

### IS_LESEN

Infospeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### STEUERGERAETE_RESET

Steuergeraete Reset ausloesen

_No arguments._

### ENERGIESPARMODE

Einstellen des Energiesparmodes

| Name | Type | Description |
| --- | --- | --- |
| PRODUKTIONSMODE | string | "ein" -> Produktions Mode ein "aus" -> Produktions Mode aus table DigitalArgument TEXT Default: "aus" |
| TRANSPORTMODE | string | "ein" -> Transport Mode ein "aus" -> Transport Mode aus table DigitalArgument TEXT Default: "aus" |
| WERKSTATTMODE | string | "ein" -> Werkstatt Mode ein "aus" -> Werkstatt Mode aus table DigitalArgument TEXT Default: "aus" |

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

### C_FG_LESEN

Fahrgestellnummer lesen Standard Codierjob

_No arguments._

### C_FG_AUFTRAG

Fahrgestellnummer schreiben und ruecklesen Standard Codierjob

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) |

### HW_SELFTEST

Start hardware selftest

_No arguments._

### HW_SELFTEST_STATUS

Status of hardware selftest

_No arguments._

### TCU_TYPE_LESEN

Read the hardware type ID of the TCU

_No arguments._

### US_ESN_MIN_LESEN

Read ESN, MDN and MIN from the TCU US NAD

_No arguments._

### ECALL_BCALL_BUTTON_TEST

Test E-Call and B-Call button

_No arguments._

### ECALL_COMPONENT_TEST

Test microphone and antenna

_No arguments._

### BT_ANTENNA_TEST

bt_antenna_test

_No arguments._

### BT_USER_FRIENDLY_NAME_LESEN

Read Bluetooth user friendly name

_No arguments._

### BT_USER_FRIENDLY_NAME_SCHREIBEN

Write Bluetooth user friendly name

| Name | Type | Description |
| --- | --- | --- |
| BT_USER_FRIENDLY_NAME | string | Bluetooth user friendly name |

### BT_PAIRED_DEVICES_LOESCHEN

Delete list with Bluetooth paired devices

_No arguments._

### US_NAM_SELECT

Switch between NAM1 and NAM2 (Number Assignment Module) Note: New NAM becomes active after ending Diagnostic Mode

| Name | Type | Description |
| --- | --- | --- |
| NAM | int | 0x01 = NAM1 0x02 = NAM2 |

### US_NAM_STATUS

Read active NAM (Number Assignment Module)

_No arguments._

### US_SID_NID_LESEN

Read US Home System ID and Network ID list

_No arguments._

### US_SID_NID_SCHREIBEN

Set US Home System ID and Network ID Requires US_NAD_SCANNING_STOP to be executed before writing

| Name | Type | Description |
| --- | --- | --- |
| INDEX | string | Range 0-256 |
| SID | string | Range 0-32176 |
| NID | string | Range 0-65535 |

### RESET_MODE

Force software reset of the TCU control unit Reset occurs approx. 2 seconds after sending

_No arguments._

### BT_PAIRABLE_MODE

Bring Bluetooth server into pairable (and discoverable) mode

_No arguments._

### US_HOME_ONLY_A_B_SIDE

Read or set home only and A/B side scanning Requires US_NAD_SCANNING_STOP to be executed before writing

| Name | Type | Description |
| --- | --- | --- |
| INPUT | char | Empty to read current status, or 0x00 for Normal 0x01 for Home only 0x02 for A side scanning 0x03 for B side scanning |

### US_CUSTOMER_CALLS

Read or set customer calls over NAD

| Name | Type | Description |
| --- | --- | --- |
| INPUT | char | Empty to read current status, or 0x00 to disable 0x01 to enable |

### NAD_INFORMATION

Read information about the current NAD Status

_No arguments._

### US_NAD_SCANNING_START

Start scanning of the US CDMA/AMPS NAD Ignition cycle will also re-start NAD scanning

_No arguments._

### US_NAD_SCANNING_STOP

Stop scanning of the US CDMA/AMPS NAD Job needs to be sent before writing NAD parameters Stopping NAD scanning takes up to 5 seconds

_No arguments._

### FAHRGESTELLNUMMER_VIN_LESEN

Read 7 digit Vehicle Identification Number from TCU coding data

_No arguments._

### FAHRGESTELLNUMMER_VIN_SCHREIBEN

Write 7 digit Vehicle Identification Number into TCU coding data

| Name | Type | Description |
| --- | --- | --- |
| VIN | string | Vehicle Identification Number |

### NAD_EQUIPPED

Read or set NAD equipped

| Name | Type | Description |
| --- | --- | --- |
| INPUT | char | Empty to read current status, or 0x00 = NAD not equipped 0x01 = NAD equipped |

### US_CDMA_CHANNELS

Read or set primary/secondary CDMA channel A/B Requires US_NAD_SCANNING_STOP to be executed before writing

| Name | Type | Description |
| --- | --- | --- |
| PRIMARY_SECONDARY | char | Priority: 1 = primary, 2 = secondary |
| A_B | string | Channel: A, B |
| VALUE | string | Empty to request current value, or value to be programmed for CDMA channel Channel A: 1-311, 689-694, 1013-1023 Channel B: 356-644, 739-777 |

### US_AMPS_PAGING_CHANNEL

Read or set AMPS paging channel Requires US_NAD_SCANNING_STOP to be executed before writing

| Name | Type | Description |
| --- | --- | --- |
| VALUE | string | Empty to request current value, or value to be programmed for AMPS paging channel Channel: 1-799, 990-1023 |

### US_AMPS_SID_LESEN

Read US CM-42 AMPS Home System ID    0 - 16387

_No arguments._

### US_AMPS_SID_SCHREIBEN

Set US CM-42 AMPS Home System ID  0 - 16387 Requires US_NAD_SCANNING_STOP to be executed before writing

| Name | Type | Description |
| --- | --- | --- |
| AMPS_SID | string | 1.byte of AMPS Home SID (0 - 16387 -> 0x30 - 0x31 0x36 0x33 0x38 0x37) |

### BT_FIX_PASSKEY_LESEN

Read Bluetooth fix passkey

_No arguments._

### BT_FIX_PASSKEY_SCHREIBEN

Write Bluetooth fix passkey

| Name | Type | Description |
| --- | --- | --- |
| BT_FIX_PASSKEY | string |  |

### GPS_DATE_TIME

Read date and time of the external (NAVI) or internal GPS

_No arguments._

### STATUS_GPS

Status of the internal GPS module

_No arguments._

### STATUS_IO_LESEN

Read I/O port status

_No arguments._

### STATUS_IO_SCHREIBEN

Set and read I/O port status

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | 1.byte with portdata |
| BYTE2 | int | 2.byte with portdata |
| BYTE3 | int | 3.byte with portdata |

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

### FG_ALS_BT_USER_FRIENDLY_NAME_SCHREIBEN

Write "BMW" + last 5 digits of FG as BT User-Friendly name Based on standard Codierjob C_FG_SCHREIBEN

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (17 oder 18-stellig) |

### BT_OPERATIONMODE_LESEN

read if BT operation is enabled or disabled

_No arguments._

### BT_DISABLE

Unset Bluetooth Masterbit

_No arguments._

### BT_ENABLE

Set Bluetooth Masterbit

_No arguments._

### ECALL_STATUS_LESEN

read if E-call is enabled or disabled

_No arguments._

### ECALL_DISABLE

Unset E-Call Masterbit

_No arguments._

### ECALL_ENABLE

Set E-Call Masterbit

_No arguments._

### BT_PAIRED_DEVICES_LESEN

Read Bluetooth paired devices

_No arguments._

### US_CALL_SERVICE_CENTER_NUMBER_LESEN

Read phone number of call service center

_No arguments._

### US_CALL_SERVICE_CENTER_NUMBER_SCHREIBEN

Set phone number of call service center

| Name | Type | Description |
| --- | --- | --- |
| SERV_CENT_NO | string | Service center number |

### US_MIN_LESEN

Read MIN (Mobile Identification Number)

_No arguments._

### US_MIN_SCHREIBEN

Set MIN (Mobile Identification Number) Requires US_NAD_SCANNING_STOP to be executed before writing

| Name | Type | Description |
| --- | --- | --- |
| US_MIN | string | Value to be programmed for MIN (10 digits) |

### US_MDN_LESEN

Read MDN (CDMA Mobile Directory Number)

_No arguments._

### US_MDN_SCHREIBEN

Set MDN (CDMA Mobile Directory Number) Requires US_NAD_SCANNING_STOP to be executed before writing

| Name | Type | Description |
| --- | --- | --- |
| US_MDN | string | Value to be programmed for MDN (15 digits) |

### IMEI_LESEN

Read IMEI

_No arguments._

### ICC_ID_LESEN

Read ICC ID

_No arguments._

## Tables

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
| 0xFF | unbekannter Hersteller |

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

### FDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_UWB_ERW | nein |
| SAE_CODE | nein |
| F_HLZ | nein |

### HDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | nein |
| F_LZ | nein |
| F_UWB_ERW | nein |

### IDETAILSTRUKTUR

| NAME | TYP |
| --- | --- |
| F_ART_IND | nein |
| F_ART_ERW | nein |
| F_PCODE | nein |
| F_PCODE7 | nein |
| F_HFK | nein |
| F_LZ | nein |
| F_UWB_ERW | nein |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x069 | GPS antenna not connected |
| 0x06A | GPS hardware failure |
| 0x06B | GPS communication error |
| 0x06C | NAD fatal error |
| 0x06D | E-call switch not connected |
| 0x06E | E-call LED not connected |
| 0x070 | E-call switch shorted to 12V |
| 0x073 | NVM device error |
| 0x074 | E-call switch stuck or shorted to ground |
| 0x079 | Bluetooth interface error |
| 0x07A | Control unit in MTS mode |
| 0x07F | B-call switch shorted to 12V |
| 0x080 | B-call switch not connected |
| 0x081 | B-call switch stuck or shorted to ground |
| 0x091 | Main antenna or compensator/combiner disconnected or shortcut |
| 0x097 | Bluetooth cradle button stuck |
| 0x098 | Microphone disconnected |
| 0x068 | GPS antenna shortcut |
| 0x0A0 | Prefit SIM not physically present |
| 0x0A1 | Prefit SIM cannot be read |
| 0x0A2 | Prefit SIM PUK-locked; PIN input failed |
| 0x0A3 | Bluetooth antenna not connected |
| 0xXY | Undefined |

### HORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0xFFFF | unbekannter Fehlerort |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x008 | Reset after software watchdog timeout |
| 0x011 | I-Bus access error |
| 0x012 | Low RF field detected |
| 0x013 | NVM corrupted |
| 0x014 | Coding data error |
| 0x015 | NAD transceiver failure |
| 0x01A | Prefit SIM not physically present |
| 0x01B | Prefit SIM cannot be read |
| 0x01C | Prefit SIM PUK-locked; PIN input failed |
| 0x01D | Prefit SIM denied in the network |
| 0xXY | Undefined |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Currently not available |
| 0x01 | Currently available |
| 0xXY | Undefined |

### IARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Currently not available |
| 0x01 | Currently available |
| 0xXY | Undefined |

### BLUETOOTHANTENNASTATUSTEXTE

| WERT | ANZEIGE_TEXT |
| --- | --- |
| 0x00 | Passed |
| 0x01 | Failed |
| 0xXY | Undefined |

### GPSSTATUSTEXTE

| WERT | ANZEIGE_TEXT |
| --- | --- |
| 0x00 | No GPS |
| 0x01 | Communication error |
| 0x02 | Receiver error |
| 0x03 | No almanac |
| 0x04 | Searching satellites... |
| 0x05 | Tracking 1 satellite |
| 0x06 | Tracking 2 satellites |
| 0x07 | Tracking 3 satellites |
| 0x08 | Tracking 4 satellites |
| 0x09 | Trackiing 5 satellites |
| 0x0A | Tracking 6 satellites |
| 0x0B | 2D positioning |
| 0x0C | 3D positioning |
| 0xXY | Undefined |

### NADSTATUSTEXTE

| WERT | ANZEIGE_TEXT |
| --- | --- |
| 0x00 | Not registered |
| 0x01 | Registered |
| 0xXY | Undefined |

### PAIRINGRESULTTEXTE

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | Success |
| 0x01 | Failure |
| 0x02 | Waiting |
| 0xXY | Undefined |

### TCUTYPETEXTE

| TCU_TYPE | TCU_TYPE_TEXT |
| --- | --- |
| 0x03 | TCU 1.5 Malapert I-Bus ECE |
| 0x04 | TCU 1.5 Malapert I-Bus US |
| 0x05 | TCU 1.5 Malapert I-Bus ECE Superthin |
| 0xXY | Undefined |

### VOICERECLANGTEXTE

| WERT | LANGUAGE_TEXT |
| --- | --- |
| 0x00 | German |
| 0x01 | US English |
| 0x02 | UK English |
| 0x03 | Italien |
| 0x04 | French |
| 0x05 | Spanish |
| 0xFF | No language, flash programming failed |
| 0xXY | Undefined |

### VOICERECPROGSTATUSTEXTE

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | Flash programming successful |
| 0x01 | Flash programming ongoing |
| 0x02 | Flash programming failed |
| 0xXY | Undefined |

### ROAMINGSTATUSTEXTE

| WERT | ANZEIGE_TEXT |
| --- | --- |
| 0x00 | Not roaming |
| 0x01 | Roaming on network |
| 0x02 | Roaming off network |
| 0xXY | Unknown or not detectable |

### PRLSTATUSTEXTE

| WERT | ANZEIGE_TEXT |
| --- | --- |
| 0x00 | PRL stored |
| 0x01 | PRL loading... |
| 0x02 | PRL packet size error |
| 0x03 | PRL sequence error |
| 0x04 | PRL invalid |
| 0x05 | PRL size error |
| 0x06 | PRL memory error |
| 0x07 | PRL not loaded |
| 0x08 | PRL disabled |
| 0xXY | Undefined |

### RESULTTEXTE

| WERT | ANZEIGE_TEXT |
| --- | --- |
| 0x00 | Success |
| 0x01 | Error |
| 0xXY | Undefined |

### HOMEONLYABSIDETEXTE

| WERT | ANZEIGE_TEXT |
| --- | --- |
| 0x00 | Normal |
| 0x01 | Home only enabled |
| 0x02 | Side A scanning |
| 0x03 | Side B scanning |
| 0xXY | Undefined |
