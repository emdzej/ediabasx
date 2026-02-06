# IHKAR50R.prg

## General

|  |  |
| --- | --- |
| File | IHKAR50R.prg |
| Type | PRG |
| Jobs | 31 |
| Tables | 7 |
| Origin | BMW EI-63 Schusser |
| Revision | 1.03 |
| Author | BHTC T-E23 Dietmar Nolte |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | IHKA R50 RD |  |  |
| ORIGIN | string | BMW EI-63 Schusser |  |  |
| REVISION | string | 1.03 |  |  |
| AUTHOR | string | BHTC T-E23 Dietmar Nolte |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.02 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### IDENT

Identdaten

_No arguments._

### FS_LESEN

Fehlerspeicher lesen

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen Clears all faults

_No arguments._

### SPEICHER_LESEN

Speicher lesen mit Adresse Read ECU memory by address

| Name | Type | Description |
| --- | --- | --- |
| ADRESSE | unsigned long | Adresse im RAM 0x0000 - 0xFFFF |
| ANZAHL | int | Anzahl speicher lesen Length of memory to read 1 - 32 |

### SPEICHER_SCHREIBEN

Beschreiben des SG Speichers mit Adresse Write memory to a specified address

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | int | Speichersegment EEPROM = 3 RAM = 4 |
| ADRESSE | unsigned long | Adresse im RAM 0x0000 - 0xFFFF |
| ANZAHL | int | Anzahl speicher schreiben Length of memory to write 1 - 27 |
| DATEN | string | zu schreibende Daten Data bytes to write z.B. 1,2,03,0x04,0x05... |

### STATUS_SG

Steuergeraet Mode, LED und LCD auslesen

_No arguments._

### STATUS_SG_MODE

Steuergeraet, Einstellung auslesen

_No arguments._

### STATUS_SG_LED_LCD

Steuergeraet, Status LED und LCD auslesen

_No arguments._

### STATUS_SG_TASTER

Steuergeraet, Status Taster auslesen

_No arguments._

### STATUS_SYSTEMPARAMETER

Systemparameter auslesen

_No arguments._

### STEUERN_MOTOREN

Steuern der Motoren Blocknummer 0 Force the blend actuators IO block 0

| Name | Type | Description |
| --- | --- | --- |
| STEUERN_TM_MOTOR_AKTIV | int | Steuern des Temperatur-Mischklappen-Motors vorgeben 0 = nicht vorgeben, 1 = vorgeben Force Blend (1 = force, 0 = not force) |
| STEUERN_TM_MOTOR | int | Vorgabe fuer Temperatur-Mischklappen-Motor Blend percentage 0% - 100% |
| STEUERN_LV_MOTOR_AKTIV | int | Steuer des Luftverteilungs-Klappen-Motors vorgeben 0 = nicht vorgeben, 1 = vorgeben Force Distrib (1 = force, 0 = not force) |
| STEUERN_LV_MOTOR | int | Vorgabe fuer Luftverteilungs-Klappen-Motor Distribution percentage 0% - 100% |
| STEUERN_GEBLAESE_AKTIV | int | Steuern des Geblaeses vorgeben 0 = nicht vorgeben, 1 = vorgeben Force Blower (1 = force, 0 = not force) |
| STEUERN_GEBLAESE | int | Vorgabe fuer Geblase Blower level 0% -  100% |

### STEUERN_LED_LCD

Steuern des Bedienteil LCD

| Name | Type | Description |
| --- | --- | --- |
| STEUERN_LED_AKTIV | int | Steuern der LEDs vorgeben 0 = nicht vorgeben, 1 = vorgeben |
| STEUERN_LED | int | Funktions-LEDs 0 = aus, 1 = an Bit 0 = Defrost LED Bit 1 = AUTO LED Bit 2 = Kompressor LED Bit 3 = Umluft LED Bit 4 = HHS LED Bit 5 = Luftverteilung Unten Bit 6 = Luftverteilung Mitte Bit 7 = Luftverteilung Oben |
| STEUERN_LCD_AKTIV | int | Steuern des LCDs vorgeben 0 = nicht vorgeben, 1 = vorgeben |
| STEUERN_LCD_ZEHNER | int | 7-Segment Sollwert Zehnerstelle 0 = aus, 1 = an Bit 0 = oben Bit 1 = links oben Bit 2 = links unten Bit 3 = unten Bit 4 = rechts unten Bit 5 = rechts oben Bit 6 = mitte |
| STEUERN_LCD_EINER | int | 7-Segment Sollwert Einerstelle Bit 0 = oben Bit 1 = links oben Bit 2 = links unten Bit 3 = unten Bit 4 = rechts unten Bit 5 = rechts oben Bit 6 = mitte |
| STEUERN_LCD_EINHEIT | int | Segmente der Einheit 0 = aus, 1 = an Bit 0=C1 , 1=C2 , 2=C3 Fahrenheit = C1 und C2 = 3 Celsius = C1 und C3 = 5 |
| STEUERN_LCD_GEBL_BALKEN | int | Geblaesebalken 0 = aus, 1 = an Bit 0..7 = Balken 1 .. 8 |

### STEUERN_LED

Steuer der Bedienteil LED

| Name | Type | Description |
| --- | --- | --- |
| STEUERN_LED_AKTIV | int | Steuern der LEDs vorgeben 0 = nicht vorgeben, 1 = vorgeben |
| STEUERN_LED_AUT | int | AUTO LED 0 = aus, 1 = an |
| STEUERN_LED_DEF | int | Defrost LED 0 = aus, 1 = an |
| STEUERN_LED_KOM | int | Kompressor LED 0 = aus, 1 = an |
| STEUERN_LED_UML | int | Umluft LED 0 = aus, 1 = an |
| STEUERN_LED_HHS | int | Heizbare Heckscheibe 0 = aus, 1 = an |
| STEUERN_LED_LVO | int | Luftverteilung Oben 0 = aus, 1 = an |
| STEUERN_LED_LVM | int | Luftverteilung Mitte 0 = aus, 1 = an |
| STEUERN_LED_LVU | int | Luftverteilung Unten 0 = aus, 1 = an |

### STEUERN_LCD

Steuern des Bedienteil LCD

| Name | Type | Description |
| --- | --- | --- |
| STEUERN_LCD_AKTIV | int | Steuern des LCDs vorgeben 0 = nicht vorgeben, 1 = vorgeben |
| STEUERN_LCD_ZEHNER | int | 7-Segment Sollwert Zehnerstelle 0 = aus, 1 = an Bit 0 = oben Bit 1 = links oben Bit 2 = links unten Bit 3 = unten Bit 4 = rechts unten Bit 5 = rechts oben Bit 6 = mitte |
| STEUERN_LCD_EINER | int | 7-Segment Sollwert Einerstelle Bit 0 = oben Bit 1 = links oben Bit 2 = links unten Bit 3 = unten Bit 4 = rechts unten Bit 5 = rechts oben Bit 6 = mitte |
| STEUERN_LCD_EINHEIT | int | Segmente der Einheit 0 = aus, 1 = an Bit 0=C1 , 1=C2 , 2=C3 Fahrenheit = C1 und C2 = 3 Celsius = C1 und C3 = 5 |
| STEUERN_LCD_GEBL_BALKEN | int | Geblaesebalken 0 = aus, 1 = an Bit 0..7 = Balken 1 .. 8 |

### STEUERN_KOMP_UMLUFT

Steuern von Kompressor und Umluft

| Name | Type | Description |
| --- | --- | --- |
| STEUERN_KOMP_AKTIV | int | Steuern des Kompressors vorgeben 0 = nicht vorgeben, 1 = vorgeben |
| STEUERN_KOMP | int | Vorgeben des Kompressors 0 = aus, 1 = an |
| STEUERN_UMLUFT_AKTIV | int | Steuern des Umluft/Frischluft Motors vorgeben 0 = nicht vorgeben, 1 = vorgeben |
| STEUERN_UMLUFT | int | Vorgeben des Umluft/Frischluft Motors 0 = aus, 1 = an |

### STEUERN_EICHLAUF

Motoren kalibrieren

_No arguments._

### STEUERN_SG_RESET

SG Reset Reset ECU

_No arguments._

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels Es muessen immer alle drei Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden. Only the last 3 bytes can be written

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | 0-255 bzw. 0x00-0xFF |
| BYTE2 | int | 0-255 bzw. 0x00-0xFF |
| BYTE3 | int | 0-255 bzw. 0x00-0xFF |

### CODIERUNG_LESEN

Auslesen der Codierdaten

_No arguments._

### CODIERUNG_SCHREIBEN

Codierdaten Schreiben fuer R50 IHKA/ATC RD Es muessen immer alle vier Argumente im Bereich von 0-255 bzw. 0x00-0xFF uebergeben werden.

| Name | Type | Description |
| --- | --- | --- |
| CODE1 | int | 0-255 bzw. 0x00-0xFF Bit 0  1 = EEP-Kennlinine Bit 1  1 = Standardanzeiger Grad F Bit 2  1 = Klima Ein bei Auto Ein Bit 3  1 = Zuschaltung HHS/HFS bei Defrost Bit 4  1 = Verbau HFS Bit 5  1 = reduzierbare Geblaesestufe bei Defrost Bit 6  1 = Freigeben der internen BHTC-Diagnose Bit 7  1 = manuelle LV Oben und Mitte verriegeln |
| CODE2 | int | 0-255 bzw. 0x00-0xFF Bit 0  1 = neuer Sonnensensor Bit 1  1 = Sperren der Kompressortaste Bit 2  1 = max Heizen bei Defrost mit T(aussen) ueber 0 Grad C Bit 3  1 = Auto-Umluft Bit 4  1 = Frischluft-Anteil Bit 5  1 = noch nicht verwendet Bit 6  1 = WT Fuehler intern 7K5 Pull-Up Widerstand Bit 7  1 = WT Fuehler extern 1K2 Serienwiderstand |
| CODE3 | int | 0-255 bzw. 0x00-0xFF Bit 0  1 = Diagnosetestmode für 240s (anstatt 10s) Bit 1  1 = zyklische Klemmenanforderung bei Kl.R abschalten Bit 2  1 = kein Telegramm 8Bh bei Kl. 15 aus Bit 3  1 = noch nicht verwendet Bit 4  1 = noch nicht verwendet Bit 5  1 = noch nicht verwendet Bit 6  1 = noch nicht verwendet Bit 7  1 = noch nicht verwendet |
| CODE4 | int | 0-255 bzw. 0x00-0xFF Bit 0  1 = noch nicht verwendet Bit 1  1 = noch nicht verwendet Bit 2  1 = noch nicht verwendet Bit 3  1 = noch nicht verwendet Bit 4  1 = noch nicht verwendet Bit 5  1 = noch nicht verwendet Bit 6  1 = noch nicht verwendet Bit 7  1 = noch nicht verwendet |

### DIAGNOSE_AUFRECHT

Diagnosemode des SG aufrecht erhalten Ping message

_No arguments._

### DIAGNOSE_ENDE

Diagnosemode des SG beenden

_No arguments._

### ENERGIESPARMODE

Einstellen des Energiesparmodes

| Name | Type | Description |
| --- | --- | --- |
| PRODUKTIONSMODE | string | "ein" -> Produktions Mode ein "aus" -> Produktions Mode aus table DigitalArgument TEXT Default: "aus" |
| TRANSPORTMODE | string | "ein" -> Transport Mode ein "aus" -> Transport Mode aus table DigitalArgument TEXT Default: "aus" |
| WERKSTATTMODE | string | "ein" -> Werkstatt Mode ein "aus" -> Werkstatt Mode aus table DigitalArgument TEXT Default: "aus" |

### CALIBRATE_MOTORS

Send manual calibration of blend and distribution motors message Job ist wegen Kompatibilitaet zur SGBD IHKAR50 integriert! Job soll nur im Werk Oxford verwendet werden! Fuer neue Anwendungen bitte den Job STEUERN_EICHLAUF verwenden!

_No arguments._

### STATUS_SYSTEM_PARAMETER

Read the system parameters Job ist wegen Kompatibilitaet zur SGBD IHKAR50 integriert! Job soll nur im Werk Oxford verwendet werden! Fuer neue Anwendungen bitte den Job STATUS_SYSTEMPARAMETER verwenden!

_No arguments._

### STATUS_IO_DIGITAL

Read IO States for block 0 - Push Buttons, LEDs and Set Points Job ist wegen Kompatibilitaet zur SGBD IHKAR50 integriert! Job soll nur im Werk Oxford verwendet werden! Fuer neue Anwendungen bitte die Jobs STATUS_SG_xx verwenden!

_No arguments._

### STEUERN_ACTUATORS

Force the blend actuators IO block 0 Job ist wegen Kompatibilitaet zur SGBD IHKAR50 integriert! Job soll nur im Werk Oxford verwendet werden! Fuer neue Anwendungen bitte den Job STEUERN_MOTOREN verwenden!

| Name | Type | Description |
| --- | --- | --- |
| FORCE_BLEND | int | Force Blend (1 = force, 0 = not force) |
| BLEND_PCT | int | Blend percentage 0 - 100% |
| FORCE_DISTRIB | int | Force Distrib (1 = force, 0 = not force) |
| DISTRIB_PCT | int | Distribution percentage 0 - 100% |
| FORCE_BLOWER | int | Force Blower (1 = force, 0 = not force) |
| BLOWER_LEVEL | int | Blower level 0 - 31 |

### STEUERN_AIRCON_RECIRC

Force Air conditioning and recirculation IO block 2 Job ist wegen Kompatibilitaet zur SGBD IHKAR50 integriert! Job soll nur im Werk Oxford verwendet werden! Fuer neue Anwendungen bitte den Job STEUERN_KOMP_UMLUFT verwenden!

| Name | Type | Description |
| --- | --- | --- |
| FORCE_AIRCON | int | Force Aircon (1 = force, 0 = not force) |
| AIRCON_ON | int | Air conditioning  value (1 = ON, 0 = OFF) |
| FORCE_RECIRC | int | Force Recirc (1 = force, 0 = not force) |
| RECIRC_ON | int | Recirculation value (1 - ON, 0 - OFF) |

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
| 0x63 | Siemens VDO Borg |
| 0x64 | Hirschmann Electronics |
| 0x65 | Hoerbiger Electronics |
| 0x66 | Thyssen Krupp Automotive Mechatronics |
| 0x67 | Gentex GmbH |
| 0x68 | Atena GmbH |
| 0x69 | Magna-Donelly |
| 0x70 | Koyo Steering Europe |
| 0x71 | NSI B.V |
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

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x00 | Waermetauscherfuehler |
| 0x01 | RMP Motor Temperaturmischklappe |
| 0x04 | Solarsensor |
| 0x06 | RMP Motor Luftverteilungsklappe |
| 0x07 | Innenraumtemperaturfuehler |
| 0x08 | Versorgungsspannung RMP |
| 0x09 | Geblaesesteuerspannung |
| 0x0A | Innenfuehlergeblaese |
| 0x0B | Motor Luftverteilungsklappe |
| 0x0C | Motor Temperaturmischklappe |
| 0x63 | Energiesparmode aktiv |
| 0xXY | unbekannter Fehlerort |

### FARTTEXTE

| ART | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x01 | Kurzschluss gegen U-Batt |
| 0x02 | Kurzschluss gegen Masse |
| 0x04 | Leitungsunterbrechung |
| 0x08 | unplausibler Wert, ungueltiger Arbeitsbereich |
| 0x40 | Fehler momentan vorhanden |
| 0x80 | sporadischer Fehler |
| 0xFF | unbekannte Fehlerart |

### BEDIENTEILBITS

| NAME | BYTE | MASK | VALUE |
| --- | --- | --- | --- |
| FAHRENHEIT | 6 | 0x80 | 0x80 |
| GEBL_AUTOMATIK | 6 | 0x02 | 0x02 |
| HHS | 6 | 0x01 | 0x01 |
| OFF | 7 | 0x80 | 0x80 |
| LV_OBEN | 7 | 0x40 | 0x40 |
| LV_AUTOMATIK | 7 | 0x20 | 0x20 |
| KOMPRESSOR_AUS | 7 | 0x10 | 0x10 |
| DEFROST_MODE | 7 | 0x08 | 0x08 |
| UMLUFT | 7 | 0x04 | 0x04 |
| LV_MITTE | 7 | 0x02 | 0x02 |
| LV_UNTEN | 7 | 0x01 | 0x01 |
| LED_LVO | 8 | 0x80 | 0x80 |
| LED_LVM | 8 | 0x40 | 0x40 |
| LED_LVU | 8 | 0x20 | 0x20 |
| LED_HHS | 8 | 0x10 | 0x10 |
| LED_UML | 8 | 0x08 | 0x08 |
| LED_KOM | 8 | 0x04 | 0x04 |
| LED_AUT | 8 | 0x02 | 0x02 |
| LED_DEF | 8 | 0x01 | 0x01 |
| DTASTER_KOM | 9 | 0x80 | 0x80 |
| DTASTER_HHS | 9 | 0x40 | 0x40 |
| DRING_TEMP_P | 9 | 0x20 | 0x20 |
| DRING_TEMP_M | 9 | 0x10 | 0x10 |
| DTASTER_LVU | 10 | 0x80 | 0x80 |
| WTASTER_DEF | 10 | 0x40 | 0x40 |
| WTASTER_GBL_M | 10 | 0x20 | 0x20 |
| DTASTER_LVM | 10 | 0x10 | 0x10 |
| WTASTER_GBL_P | 10 | 0x08 | 0x08 |
| WTASTER_AUT | 10 | 0x04 | 0x04 |
| DTASTER_UML | 10 | 0x02 | 0x02 |
| DTASTER_LVO | 10 | 0x01 | 0x01 |
