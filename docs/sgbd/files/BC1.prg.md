# BC1.prg

## General

|  |  |
| --- | --- |
| File | BC1.prg |
| Type | PRG |
| Jobs | 38 |
| Tables | 11 |
| Origin | BMW TI-430 Gerd Huber |
| Revision | 2.5 |
| Author | SW-Style M.Rafferty, BMW TI-433 Robert Kuessel |
| ECU Comment | Basierend auf V3.0/Datum 09.04.01 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | BC1 |  |  |
| ORIGIN | string | BMW TI-430 Gerd Huber |  |  |
| REVISION | string | 2.5 |  |  |
| AUTHOR | string | SW-Style M.Rafferty, BMW TI-433 Robert Kuessel |  |  |
| COMMENT | string | Basierend auf V3.0/Datum 09.04.01 |  |  |
| PACKAGE | string | 0.08 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

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

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### START_DIAGNOSTICS

Obtain diagnostic seed and send key to begin diagnostics The ecu will lock if no diagnostic messages have been sent to it for 30 seconds

_No arguments._

### IDENT

Identification data

_No arguments._

### READ_MANUFACTURER_DATA

Auslesen der Herstelldaten

_No arguments._

### READ_SIA_DATA

Read Service information

_No arguments._

### C_FG_LESEN

Auslesen FG-Nummer Read the VIN

_No arguments._

### C_FG_AUFTRAG

Beschreiben der FG-Nummer Write the VIN

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Vehicle ID number Fahrgestellnummer 7 or 8 character string - if 8 characters the last is ignored |

### FS_LESEN

Read internal and external faults

_No arguments._

### FS_LOESCHEN

Clears All Faults

_No arguments._

### IS_LESEN

Read the alarm mislock and alarm trigger fault logs Auslesen der alarm Fehler speicher

_No arguments._

### READ_ALARM_MISLOCK

Read Alarm mislocks

_No arguments._

### READ_ALARM_TRIGGER

Read alarm triggers

_No arguments._

### SPEICHER_LESEN

Read memory by address Lesen des internen Speichers Als Argumente werden die Anzahl und die Adresse der Datenbytes uebergeben.

| Name | Type | Description |
| --- | --- | --- |
| ANZAHL | int | length of data to read anzahl data lesen 1 - 32 bytes |
| ADRESSE | int | 16 bit ECU memory address EEPROM address range: 0x0C00 -> 0x0FFF |

### SPEICHER_SCHREIBEN

Write memory by address Schreiben des Speicherinhaltes

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE_HIGH | int | gewuenschte Adresse high als Hexwert! Address high byte 0x00 -> 0xFF |
| ADRESSE_LOW | int | gewuenschte Adresse low als Hexwert! Address low byte 0x00 -> 0xFF |
| WERT | int | gewuenschter Wert als Hexwert! Single byte of data to write 0x00 -> 0xFF |

### STEUERN_IOSTATES

Force Digital Output States

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | Digital output to force, DOP_? Identifier "DOP_?" from "NAME" column in table "BITS" |
| EIN | int | 1 = ON, 0 = OFF 1 wenn einschalten / 0 wenn ausschalten |

### STEUERN_PWM_OUTPUTS

Force Digital Output States

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | PWM output to force, AOP_? Identifier "AOP_?" from "NAME" column in table "Analog" Argument is case sensitive |
| EIN | int | 0 for OFF, any other value for ON '> 0', wenn einschalten / '0', wenn ausschalten |

### STEUERN_STEPPER_MOTOR

Force Stepper motor Output State

| Name | Type | Description |
| --- | --- | --- |
| EIN | int | 0 for START, any other value for STOP 0 fuer anfang, >0 fuer halt |

### STEUERN_TILT_SENSOR

Force Tilt Sensor state

| Name | Type | Description |
| --- | --- | --- |
| EIN | int | 0 = OFF,      >0 = ON '>0', wenn ein / '0', wenn aus |

### CLEAR_RF_BUFFERS

Clear the RF receive and status buffers

_No arguments._

### STATUS_ANALOG

Read Analogue Input and Output States

_No arguments._

### STATUS_LIGHT_INPUTS

Read Lighting Digital Input States

_No arguments._

### STATUS_DIGITAL_INPUTS

Read Digital Input States

_No arguments._

### STATUS_LIGHT_OUTPUTS

Read lighting Digital outputs

_No arguments._

### STATUS_DIGITAL_OUTPUTS

Read Digital outputs

_No arguments._

### STATUS_RF

Read the RF status

_No arguments._

### STATUS_TILT_SENSOR

Read the Tilt sensor status

_No arguments._

### DIAGNOSE_AUFRECHT

Ping message

_No arguments._

### SG_RESET

Reset the ECU

_No arguments._

### READ_PLIP_CODES

Read the codes and status for a specified plip location

| Name | Type | Description |
| --- | --- | --- |
| PLIP | unsigned int | Plip location to read 1 - 4 |

### WRITE_PLIP_CODES

Write the codes and status for a specified plip location

| Name | Type | Description |
| --- | --- | --- |
| PLIP | unsigned int | Plip location to write 1 - 4 |
| CIPHER_KEY | string | Cipher code for required plip location 16 characters ascii This is the ascii representation of the 8 hex characters used |
| WINDOW_KEY | string | Window code for required plip location 6 characters ascii This is the ascii representation of the 3 hex characters used |
| BASE_CODE_KEY | string | Base code for required plip location 6 characters ascii This is the ascii representation of the 3 hex characters used |
| ENABLE | unsigned int | 0 = plip disabled, 1 = plip enabled |

### C_C_LESEN

Codierdaten lesen

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_C_AUFTRAG

Codierdaten schreiben und verifizieren Write and verify the coding data

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### LWR_ON

Switch on LWR2A

_No arguments._

### LWR_OFF

Switch on LWR2A

_No arguments._

### DIAGNOSE_ENDE

Diagnosemode des SG beenden

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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x00 | DATENBUS FEHLER |
| 0x01 | FAHRER-RELAIS NC FEHLER |
| 0x02 | GEMEINS. RELAIS NC FEHLER |
| 0x03 | RUHERELAIS NC FEHLER |
| 0x04 | SUPER-RELAIS NC FEHLER |
| 0x05 | FAH FEN HEBEN RELAIS NC FEHLER |
| 0x06 | FAH FEN HEBEN RELAIS NO FEHLER |
| 0x07 | FAH FEN SENKEN RELAIS NC FEHLER |
| 0x08 | FAH FEN SENKEN RELAIS NO FEHLER |
| 0x09 | BEIF FEN HEBEN RELAIS NC FEHLER |
| 0x0A | BEIF FEN HEBEN RELAIS NO FEHLER |
| 0x0B | BEIF FEN SENKEN RELAIS NC FEHLER |
| 0x0C | BEIF FEN SENKEN RELAIS NO FEHLER |
| 0x0D | FAHRER-RELAIS NO FEHLER |
| 0x0E | GEMEINS. RELAIS NO FEHLER |
| 0x0F | RUHERELAIS NO FEHLER |
| 0x10 | SUPER-RELAIS NO FEHLER |
| 0x80 | FAH FEN AUSGANG EIN FEHLER |
| 0x81 | BEIF FEN AUSGANG EIN FEHLER |
| 0x82 | FAH FEN AUSGANG AUS FEHLER |
| 0x83 | BEIF FEN AUSGANG AUS FEHLER |
| 0x84 | FRONTWISCHER EIN FEHLER |
| 0x85 | FRONTWISCHER GESCHW EIN FEHLER |
| 0x86 | FRISCHLUFT EIN FEHLER |
| 0x87 | UMLUFT EIN FEHLER O. FRISCHLUFT EIN FEHLER |
| 0x89 | HECKWISCHER EIN FEHLER |
| 0x8A | REGENSENSOR FEHLER |
| 0x8B | HHS EIN FEHLER |
| 0x8C | FRONTWISCHER AUS FEHLER |
| 0x8D | FRONTWISCHER GESCHW AUS FEHLER |
| 0x8E | FRISCHLUFT AUS FEHLER |
| 0x8F | UMLUFT AUS FEHLER |
| 0x91 | HECKWISCHER AUS FEHLER |
| 0x93 | HHS AUS FEHLER |
| 0x94 | FRONTWISCHER RÜCKMELD FEHLER |
| 0x95 | FRONTWISCHER BLOCKIERT FEHLER |
| 0x96 | HECKWISCHER BLOCKIERT FEHLER |
| 0x9A | KLIMAKOMPRESSOR FEHLER |
| 0x9B | HFS EIN FEHLER |
| 0x9C | HFS AUS FEHLER |
| 0xAA | BLINKER LINKS AUS FEHLER |
| 0xAC | BLINKER RECHTS AUS FEHLER |
| 0xB1 | NSW EIN FEHLER |
| 0xB2 | NSW AUS FEHLER |
| 0xB3 | ZUSATZLEUCHTE EIN FEHLER |
| 0xB4 | ZUSATZLEUCHTE AUS FEHLER |
| 0xB5 | GEBLÄSEMOTOR EIN FEHLER |
| 0xB6 | GEBLÄSEMOTOR AUS FEHLER |
| 0xBD | WASCHANLAGE EIN FEHLER |
| 0xBE | WASCHANLAGE AUS FEHLER |
| 0xBF | BBUS SCHÄRFEN ENTSCHÄRFEN EIN FEHLER |
| 0xC0 | BBUS SCHÄRFEN ENTSCHÄRFEN AUS FEHLER |
| 0xC1 | BBUS AKUST. ALARM EIN FEHLER |
| 0xC2 | BBUS AKUST. ALARM AUS FEHLER |
| 0xC4 | GEPÄCKR. ENTRIEG. AUS FEHLER |
| 0xC5 | FAH FEN EINKLEMMSCHUTZ FEHLER |
| 0xC6 | BEIF FEN EINKLEMMSCHUTZ FEHLER |
| 0xFF | Unbekannter Fehler |

### MORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x00 | FAH TÜR AUSL. |
| 0x01 | BEIF TÜR AUSL. |
| 0x02 | HAUBE AUSL. |
| 0x03 | GEPÄCKR. OFFEN AUSL. |
| 0x05 | ZV überbeanspr. |
| 0xFF | Unbekannter Fehler |

### AORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x00 | NEBENVERBR.EIN AUSL. |
| 0x01 | ZÜNDG.EIN AUSL. |
| 0x02 | FAH TÜR AUSL. |
| 0x03 | BEIF TÜR AUSL. |
| 0x04 | ULTRASCHALL AUSL. |
| 0x05 | NEIG. AUSL. |
| 0x06 | HAUBE AUSL. |
| 0x07 | GEPÄCKR. OFFEN AUSL. |
| 0xFF | Unbekannter Fehler |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | Fehler aktiv |
| 0x01 | Fehler inaktiv |
| 0xFF | Unbekannter Fehler |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x30 | Alarm-Fehlverriegelung - Fahrertür Eingang EIN |
| 0x31 | Alarm-Fehlverriegelung - Beifahrertür Eingang EIN |
| 0x32 | Alarm-Fehlverriegelung - Eingang Haube, Übergang EIN |
| 0x33 | Alarm-Fehlverriegelung - Gepäckraum-Entriegelungsschalter Eingang EIN |
| 0x35 | Alarm-Fehlverriegelung - Überhitzung ZV, Abschaltung ausgelöst |
| 0x40 | Alarmauslöser - Nebenverbraucher Eingang, Übergang auf EIN |
| 0x41 | Alarmauslöser - Zündung Eingang, Übergang auf EIN |
| 0x42 | Alarmauslöser - Fahrertür Eingang, Übergang auf EIN |
| 0x43 | Alarmauslöser - Beifahrertür Eingang, Übergang auf EIN |
| 0x44 | Alarmauslöser - Ultraschallzone 1 Eingang, Übergang auf EIN |
| 0x45 | Alarmauslöser - Neigung Eingang, Übergang auf EIN |
| 0x46 | Alarmauslöser - Haube Eingang, Übergang auf EIN |
| 0x47 | Alarmauslöser - Gepäckraum-Entriegelungsschalter Eingang, Übergang auf EIN |
| 0xXY | Unbekannter Fehler |

### ANALOG

| NAME | FACT_A | FACT_B | EINH | DESCRIPTION |
| --- | --- | --- | --- | --- |
| AIP_EXT_5V_MON | 0.019607843 | 0.0 | V | Schalter Spannung 5V überwachen |
| AIP_PASS_WIN_CURR_SENSE | 0.171568627 | 0.0 | A | Stromfühler zum Erkennen einer Fensterblockierung |
| AIP_WIN_RELAY_MON | 1.0 | 0.0 |  | Status Fahrer-Relais |
| AIP_BLOWER_MOT_SENSE | 0.071568627 | 0.0 | V | Fehlerfühler Gebläsemotor vor A/C-Schalter EIN |
| AIP_HEAD_LGT_LEVEL_SW | 1.0 | 0.0 | Pos | Schalter Scheinwerferleuchtweite |
| AIP_MAIN_FLASH_SW | 0.019607843 | 0.0 | V | Schalter Lichthupe |
| AIP_FT_WIPER_SENSE | 0.080360012 | 0.0 | V | Geschwindigkeitserkennung Frontwischer |
| AIP_DRV_WIN_ANTITRAP | 0.019607843 | 0.0 | V | Überwachung Einklemmschutz Fensterheber |
| AIP_DRV_WIN_CURR_SENSE | 0.171568627 | 0.0 | A | Stromfühler zum Erkennen einer Fensterblockierung |
| AIP_PASS_WIN_RELAY_MON | 1.0 | 0.0 |  | Status Beifahrer-Relais |
| AIP_LOCK_RELAY_MON | 1.0 | 0.0 |  | Status 1 Relais/Zentralverriegelung |
| AIP_EVAPORATOR_SENSE | 0.356506238 | -29.3 | C | Verdampfertemperatursensor |
| AIP_LOCK_RELAY_MON_2 | 1.0 | 0.0 |  | Status 2 Relais/Zentralverriegelung |
| AIP_INDICATOR_SW | 0.019607843 | 0.0 | V | Blinkerschalter |
| AIP_PASS_WIN_ANTITRAP | 0.019607843 | 0.0 | V | Überwachung Einklemmschutz Fensterheber |
| AIP_BATT_VOLTS_MON | 0.072087658 | 0.0 | V | Überwachungsebene Hauptbatterie |
| AOP_MAP_READ_LGT | 1.0 | 0.0 |  | Kartenleseleuchten |
| AOP_INTERIOR_LGT | 1.0 | 0.0 |  | Innenlichtschalter |
| AOP_MAIN_BEAM | 1.0 | 0.0 |  | Fernlicht |
| AOP_DIPPED_BEAM | 1.0 | 0.0 |  | Abblendlicht |
| Unbekannter Gegenstand | 0.0 | 0 |  | Unbekannter Gegenstand |

### BITS

| NAME | BYTE | MASK | VALUE | DESCRIPTION |
| --- | --- | --- | --- | --- |
| DIP_DRV_KEY_SW_UNLK | 4 | 0x02 | 0x02 | Schlüsselkontakt Fahrer entrieg. |
| DIP_DRV_KEY_SW_LK | 4 | 0x04 | 0x04 | Schlüsselkontakt Fahrer verrieg. |
| DIP_DRV_DOOR_OPEN | 4 | 0x08 | 0x08 | Fahrertür offen |
| DIP_PASS_DOOR_OPEN | 4 | 0x10 | 0x10 | Beifahrertür offen |
| DIP_HAZARD_SW | 4 | 0x20 | 0x20 | Schaltereingang Warnblinkschalter |
| DIP_HT_FT_SCR_SW | 4 | 0x40 | 0x40 | Schalter heizb. Frontscheibe |
| DIP_BONNET_SW | 4 | 0x80 | 0x80 | Schalter für offene Haube |
| DIP_BOOT_OPEN_SW | 5 | 0x02 | 0x02 | Schalter für offenen Gepäckraum |
| DIP_BOOT_HANDLE_SW | 5 | 0x04 | 0x04 | Schaltereingang Gepäckraum-Entriegelungsmotor |
| DIP_MASTER_LK_SW | 5 | 0x08 | 0x08 | Schaltereingang Hauptverriegelung |
| DIP_MASTER_UNLK_SW | 5 | 0x10 | 0x10 | Schaltereingang Hauptentriegelung |
| DIP_DRV_WIN_UP_SW | 5 | 0x20 | 0x20 | Schaltereingang Fenster/Fahrer heben |
| DIP_DRV_WIN_DOWN_SW | 5 | 0x40 | 0x40 | Schaltereingang Fenster/Fahrer senken |
| DIP_PASS_WIN_UP_SW | 5 | 0x80 | 0x80 | Schaltereingang Fenster/Beifahrer heben |
| DIP_PASS_WIN_DOWN_SW | 6 | 0x02 | 0x02 | Schaltereingang Fenster/Beifahrer senken |
| DIP_PASS_KEY_SW_LK | 6 | 0x04 | 0x04 | Schlüsselkontakt Beifahrer verrieg. |
| DIP_PASS_KEY_SW_UNLK | 6 | 0x08 | 0x08 | Schlüsselkontakt Beifahrer entrieg. |
| DIP_HT_RR_WIN_SW | 6 | 0x10 | 0x10 | Schaltereingang heizb. Heckscheibe |
| DIP_POSN_LGT_SW | 6 | 0x20 | 0x20 | Schaltereingang Standlicht |
| DIP_INT_LGT_SW | 6 | 0x40 | 0x40 | Schaltereingang Innenlicht |
| DIP_AUX_SW | 6 | 0x80 | 0x80 | Überwachung Nebenverbraucher von Hauptzündschalter |
| DIP_POLL_SENSE | 7 | 0x02 | 0x02 | Eingang Luftqualitätssensor, verschmutzte Luft 1 |
| DIP_RR_WASH_PUMP | 7 | 0x04 | 0x04 | Schalter für Heckscheibenwaschpumpe aktiv |
| DIP_ALARM_TILT_SW | 7 | 0x08 | 0x08 | Neigungsgeber Alarmanlage |
| DIP_INERTIA_SENSE | 7 | 0x40 | 0x40 | Trägheitssensor für ungewöhnliche Anhaltebedingungen |
| DIP_COL_SW_1 | 8 | 0x01 | 0x01 | Wischerschalter, zum Aktivieren der Frontwischer |
| DIP_COL_SW_2 | 8 | 0x02 | 0x02 | Wischerschalter, zum Aktivieren der Frontwischer |
| DIP_RR_WIPER_SW | 8 | 0x04 | 0x04 | Heckwischerschalter |
| DIP_AC_SWITCH | 8 | 0x08 | 0x08 | Schaltereingang Klimaanlage |
| DIP_RECIRC_SW | 8 | 0x10 | 0x10 | Umschalten zwischen Umluft und Frischluft |
| DIP_RR_FOG_SW | 8 | 0x20 | 0x20 | Schaltereingang Nebelschlussleuchten |
| DIP_FT_FOG_SW | 8 | 0x40 | 0x40 | Schaltereingang Nebelscheinwerfer |
| DIP_DIPPED_BEAM_SW | 8 | 0x80 | 0x80 | Schaltereingang Abblendlicht |
| DIP_FT_WIPER_PARK | 9 | 0x01 | 0x01 | Frontwischer in Parkstellung |
| DIP_RR_WIPER_PARK | 9 | 0x02 | 0x02 | Heckwischer in Parkstellung |
| DIP_KEY_IN_SW | 9 | 0x04 | 0x04 | Schalter nicht eingebaut |
| DIP_AUX_LGT_SW | 9 | 0x08 | 0x08 | Schalter nicht eingebaut |
| DIP_POLICE_SW | 9 | 0x10 | 0x10 | Schalter nicht eingebaut |
| DIP_LH_LATCH | 9 | 0x20 | 0x20 | Schalter nicht eingebaut |
| DIP_RH_LATCH | 9 | 0x40 | 0x40 | Schalter nicht eingebaut |
| DIP_FT_WASH_PUMP | 9 | 0x80 | 0x80 | Schaltereingang Frontscheibenwaschpumpe aktiv |
| DIP_LAMP_STATUS | 10 | 0x01 | 0x01 | Anzeige für Lampenstatus |
| DIP_RECIRC_MONITOR | 10 | 0x02 | 0x02 | Überwachung Umluftregler |
| DIP_BOOT_RELEASE_MONITOR | 10 | 0x04 | 0x04 | Überwachung der Gepäckraumentriegelung |
| DIP_BRAKE_SW | 10 | 0x08 | 0x08 | Schaltereingang Bremspedal |
| DIP_IND_SIGNAL | 10 | 0x10 | 0x10 | Überwachung des Plus-Fühlers für Sleep-Anzeige |
| DIP_IND_SIG_INVERTED | 10 | 0x20 | 0x20 | Überwachung des Invers-Fühlers für Sleep-Anzeige |
| DIP_ULTRASONIC_IN | 10 | 0x40 | 0x40 | Ultraschall-Alarm aktiviert |
| DIP_RF_CODE_LOGIC | 10 | 0x80 | 0x80 | Eingang Funksignalcode |
| DIP_BLOWER_MOTOR_STATUS | 11 | 0x01 | 0x01 | Anzeige für Gebläsemotorstatus |
| DIP_RECIRC_ERROR | 11 | 0x02 | 0x02 | Fehlfunktion des Umluftreglers |
| DIP_LH_DIR_IND_STATUS | 11 | 0x08 | 0x08 | Überwachung Blinker links |
| DIP_RH_DIR_IND_STATUS | 11 | 0x10 | 0x10 | Überwachung Blinker rechts |
| DIP_BRAKE_LAMP_STATUS | 11 | 0x40 | 0x40 | Überwachung Bremsleuchten |
| DIP_BOOT_REL_STATUS | 11 | 0x80 | 0x80 | Überwachung der Gepäckraumentriegelung |
| RF_REMOTE_OK_ROLLING_CODE_OK | 4 | 0x01 | 0x01 | Richtige Fernbedienung und richtige Codes |
| RF_REMOTE_OK_ROLLING_CODE_NOT_OK | 4 | 0x02 | 0x02 | Richtige Fernbedienung und ungültiger alternierender Code |
| RF_REMOTE_INCORRECT | 4 | 0x03 | 0x03 | Falsche Fernbedienung verwendet |
| RF_REMOTE_BATTERY_DEAD | 4 | 0x10 | 0x10 | Zu schwache oder keine Batterie in Fernbedienung |
| TILT_SENSOR_PULSE_RECEIVED | 4 | 0x01 | 0x01 | Vom Neigungsgeber empfangener Impuls i.O. |
| DOP_DRV_LOCK_RLY | 4 | 0x01 | 0x01 | Verriegelungsrelais Fahrer |
| DOP_SUPER_LOCK_RLY | 4 | 0x02 | 0x02 | Relais Entriegelungssperre |
| DOP_COMMON_LOCK_RLY | 4 | 0x04 | 0x04 | Gemeins. Relais |
| DOP_REST_LOCK_RLY | 4 | 0x08 | 0x08 | Relais Ruheverriegelung |
| DOP_PASS_WIN_DOWN | 4 | 0x10 | 0x10 | Fenster/Beifahrer senken |
| DOP_PASS_WIN_UP | 4 | 0x20 | 0x20 | Fenster/Beifahrer heben |
| DOP_DRV_WIN_DOWN | 4 | 0x40 | 0x40 | Fenster/Fahrer senken |
| DOP_DRV_WIN_UP | 4 | 0x80 | 0x80 | Fenster/Fahrer heben |
| DOP_HT_RR_WIN_LED | 5 | 0x04 | 0x04 | LED heizb. Heckscheibe |
| DOP_RR_FOG_LED | 5 | 0x08 | 0x08 | Anzeige Nebelschlussleuchte |
| DOP_HT_FT_WIN_LED | 5 | 0x10 | 0x10 | LED HFS |
| DOP_AC_LED | 5 | 0x20 | 0x20 | LED A/C |
| DOP_RR_FOG_LGT | 5 | 0x40 | 0x40 | Nebelschlussleuchten |
| DOP_RECIRC_LED | 5 | 0x80 | 0x80 | Anzeige für Umluft EIN |
| DOP_RH_INDICATOR_LGT | 6 | 0x20 | 0x20 | Blinker rechts |
| DOP_LH_INDICATOR_LGT | 6 | 0x40 | 0x40 | Blinker links |
| DOP_BBS_ARM_DISARM | 6 | 0x80 | 0x80 | BBS schärfen/entschärfen |
| DOP_LH_POSITION_LGT | 7 | 0x10 | 0x10 | Standlicht links |
| DOP_RH_POSITION_LGT | 7 | 0x20 | 0x20 | Standlicht rechts |
| DOP_FT_WIPER_PARK_RUN | 8 | 0x01 | 0x01 | Frontwischer, Relais, Langsamlauf in Parkstellung |
| DOP_PWR_WASH_RLY | 8 | 0x02 | 0x02 | Relaisspule, Waschanlage |
| DOP_HEATED_RR_WIN_RLY | 8 | 0x04 | 0x04 | Relaisspule, heizb. Heckscheibe |
| DOP_HEATED_FT_WIN_RLY | 8 | 0x08 | 0x08 | Relaisspule, HFS |
| DOP_FT_FOG_LGT_RLY | 8 | 0x10 | 0x10 | Relaisspule, Nebelscheinwerfer |
| DOP_AUX_RELAY | 8 | 0x20 | 0x20 | Relaisspule, Nebenverbraucher |
| DOP_FT_WIPER_SLOW_FAST | 8 | 0x40 | 0x40 | Langsam/Schnell-Relais Frontwischer |
| DOP_RR_WIPER_RLY | 8 | 0x80 | 0x80 | Relaisspule, Heckwischer |
| DOP_NO_PLATE_LGT | 9 | 0x01 | 0x01 | Kennzeichenleuchte |
| DOP_BOOT_RELEASE | 9 | 0x02 | 0x02 | Gepäckraum-Entriegelungsmotor |
| DOP_WATCHDOG_IN | 9 | 0x04 | 0x04 | Handshake mit Hardware-Watchdog |
| DOP_RECIRC_CTL1 | 9 | 0x08 | 0x08 | Steuerung Umluftbetrieb |
| DOP_RECIRC_CTL2 | 9 | 0x10 | 0x10 | Steuerung Umluftbetrieb |
| DOP_ROTARY_SUPPLY | 9 | 0x80 | 0x80 | Speisung an Drehschalter |
| DOP_SOUND_ALARM | 11 | 0x01 | 0x01 | BBS Version Alarm |
| DOP_BLOWER_ENABLE | 11 | 0x04 | 0x04 | Aktivieren des Gebläsemotors |
| DOP_12V_EXT_PWR | 11 | 0x20 | 0x20 | Extern geschaltete 12V-Speisung |
| DOP_ALARM_LED | 11 | 0x40 | 0x40 | Ausgang Alarm-LED |
| XY | XY | 0xXY | 0xXY | Unbekannter Gegenstand |
