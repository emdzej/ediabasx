# EHPSR50.prg

## General

|  |  |
| --- | --- |
| File | EHPSR50.prg |
| Type | PRG |
| Jobs | 29 |
| Tables | 6 |
| Origin | BMW TI-431 Siegfried Helmich |
| Revision | 1.1 |
| Author | Software-Style M.Rafferty |
| ECU Comment | Basiert auf Spec Version A8 |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | EHPSR50 |  |  |
| ORIGIN | string | BMW TI-431 Siegfried Helmich |  |  |
| REVISION | string | 1.1 |  |  |
| AUTHOR | string | Software-Style M.Rafferty |  |  |
| COMMENT | string | Basiert auf Spec Version A8 |  |  |
| PACKAGE | string | 0.06 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### INFO

Information SGBD

_No arguments._

### IDENT

Ident-Daten fuer EHPS

_No arguments._

### IDENT_EXTENDED

Read additional ECU Ident information

_No arguments._

### DIAGNOSE_AUFRECHT

Tester present message

_No arguments._

### START_DIAGNOSTIC_SESSION

Begins a diagnostic session

| Name | Type | Description |
| --- | --- | --- |
| MODE | int | Diagnostic mode: 0x81=Standard, 0x85=Programming |

### SG_RESET

Reset the ECU

_No arguments._

### FS_LESEN

Read internal and external faults

_No arguments._

### FS_LOESCHEN

Clears All Faults

_No arguments._

### STATUS_FS_LESEN

Read number of faults and earliest faults through snapshot

_No arguments._

### STATUS_IO_LESEN

Read Digital inputs/outputs

_No arguments._

### STATUS_ANALOG

Read Analogue Input / Outputs

_No arguments._

### STEUERN_PWM

Force the Pulse Width Modulation from 0 to 100%

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Value to set the PWM ( 0 -> 100 % ) |

### STEUERN_PWM_RESET

Return PWM output control to the application software

_No arguments._

### READ_MEMORY

Read ECU Memory by Address Speicher auslesen

| Name | Type | Description |
| --- | --- | --- |
| MEM_ADDRESS | unsigned int | 16 bit ECU memory address 0x0000 -> 0x00FF: DATA memory 0x9F80 -> 0x9FBF: EEPROM memory used for Siemens logistic data 0x9FC0 -> 0x9FFF: EEPROM memory used for ZF data area 0xFF00 -> 0xFFFF: XDATA memory |
| MEM_LENGTH | int | Length of memory to read (1 -> 20) |

### READ_SIEMENS_SERIAL_NR

Read the Siemens serial number

_No arguments._

### READ_ZF_HW_NR

Read the ZF ECU Hardware number

_No arguments._

### WRITE_MEMORY

Write memory to a specified address Speicher schreiben

| Name | Type | Description |
| --- | --- | --- |
| ADDRESS | unsigned int | 16 bit ECU memory address 0x0000 -> 0x00FF: DATA memory 0x9FC0 -> 0x9FFF: EEPROM memory used for ZF data area 0xFF00 -> 0xFFFF: XDATA memory |
| LENGTH | int | Length of memory to write (1 -> 20) |
| MEMDATA | string | Data to write |

### WRITE_ZF_HW_NR

Write the ZF ECU Hardware Number

| Name | Type | Description |
| --- | --- | --- |
| ZF_NR | string | ZF ECU Hardware Number 12 characters |

### SEED_KEY

Obtain security access to the ECU Schutzmechanismus SEED_KEY

| Name | Type | Description |
| --- | --- | --- |
| LEVEL | int | Security Access level 1=Dealer, 2=Programming |

### CHECK_REPROG_DEPENDING

Calculate the checksum and check the coherence system

_No arguments._

### REPORT_REPROG_STATUS

Get the status of reprogramming after a mistake

_No arguments._

### FLASH_SCHREIBEN_ADRESSE

Request download

_No arguments._

### FLASH_SCHREIBEN

Transfer data to the ECU Data is transfered in blocks of 62 bytes (maximum 128 x 62 == 7936 bytes)

| Name | Type | Description |
| --- | --- | --- |
| DATA | binary | Data to transfer to the ECU (62 bytes) |

### FLASH_SCHREIBEN_ENDE

Exit data transfer

_No arguments._

### PROG_DATUM_SCHREIBEN

Schreiben der Programm datum Write the programming date

| Name | Type | Description |
| --- | --- | --- |
| PROG_DATUM_TAG | int | Programm tag (1 -> 31) Day of programming |
| PROG_DATUM_MON | int | Programm monat (1 -> 12) Month of programming |
| PROG_DATUM_JAHR | int | Programm jahr - (2000 -> 9999) Year of programming |

### C_FG_LESEN

Auslesen der Fahrgestellnummer Read the VIN

_No arguments._

### C_FG_AUFTRAG

Schreiben der Fahrgestellnummer Write the VIN

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) VIN - stored as 17 ascii characters ( + 1 ascii checksum ) string can be 17 or 18 characters - if 18 the last character is ignored |

### DIAGNOSE_ENDE

Diagnosemode des SG beenden Stop the diagnostic session

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0x11 | SERVICE NICHT UNTERSTÜTZT |
| 0x12 | SUB-FUNKTION NICHT UNTERSTÜTZT |
| 0x22 | Bedingung nicht korrekt |
| 0x31 | Anfrage außer Toleranz |
| 0x33 | Sicherheitszugang aberkannt / erforderlich |
| 0x35 | Ungültiger Schlüssel |
| 0x36 | Anzal der Versuche überschritten |
| 0x37 | Erforderliche Zeitverzögerung nicht abgelaufen |
| 0x40 | Hinunterladen nicht erlaubt |
| 0x41 | Unzulässiger Typ zum hinunterladen |
| 0x42 | Spezifizierte Adresse kann nicht hinuntergeladen werden |
| 0x50 | Hochladen nicht erlaubt |
| 0x52 | Hochladen von spezifizierte Adress nicht möglich |
| 0x53 | Die angefordrte Anzahl Bytes kann nicht hochgeladen werden |
| 0x78 | Anfoderung korrekt erhalten - Antwort noch offen |
| 0x79 | Inkorrekte BYTE Anzahl während Block Transfer |
| 0x80 | Service nicht unterstützt im aktuellen Diagnose Mode |
| 0x90 | Vorgang nicht ausgeführt |
| 0x91 | Ungültiges Nachrichten Format |
| 0xA0 | OKAY |
| 0xFF | ERROR_ECU_NACK |
| 0x00 | ERROR_ECU_UNKNOWN_STATUSBYTE |

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
| 0x55 | BHTC |
| 0xFF | unbekannter Hersteller |

### DIGITAL

| NAME | BYTE | MASK | VALUE |
| --- | --- | --- | --- |
| IGNITION_ON | 13 | 0x01 | 0x01 |
| ENGINE_RUNNING | 13 | 0x02 | 0x02 |
| APPLICATION_RUNNING | 13 | 0x04 | 0x04 |
| SPEED_CONTROL_ENABLED | 13 | 0x08 | 0x08 |
| DIAGNOSTIC_CONTROL_MODE_ON | 13 | 0x10 | 0x10 |
| ?? | 0 | 0x00 | 0xFF |

### ANALOG

| NAME | FACT_A | FACT_B | EINH |
| --- | --- | --- | --- |
| BATTERY_VOLTS | 0.1 | 0.0 | V |
| TEMPERATURE | 1.0 | -40.0 | Grad C |
| MOTOR_CURRENT | 0.5 | 0.0 | A |
| MOTOR_SPEED | 20.0 | 0.0 | min-1 |
| MOTOR_VOLTAGE | 0.1 | 0.0 | V |
| PWM_MOTOR_CONTROL | 0.39215686 | 0.0 | % |
| MOTOR_SPEED_CONTROL | 20.0 | 0.0 | min-1 |
| PWM_OUT | 0.39215686 | 0.0 | % |
| MOTOR_CURRENT_MAX | 0.5 | 0.0 | A |
| BATTERY_CURRENT_MAX | 0.5 | 0.0 | A |
| ENGINE_RUNNING_ANALOG | 0.08 | 0.0 | V |
| MOTOR_RESISTANCE | 0.78 | 0.0 | mOhms |
| EMF_COEF | 3.125 | 0.0 | min-1/V |
| Ungültige Ziffer | 0.0 | 0 |  |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x5523 | Batterie Spannungsfehler |
| 0x5517 | Übertemperatur oder schlechtes Temperatursignal |
| 0x5531 | Verriegelungsschutz |
| 0x5550 | Motor Kurzschluß oder offener Stromkreis |
| 0x5529 | FET Kurzschluß oder offener Stromkreis |
| 0x5508 | Ungültiger Motorlauf |
| 0x5507 | Ungültige Motorspannung |
| 0xFFFF | Ungültiger Fehler |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x01 | über max Schwellwert |
| 0x02 | unter min Schwellwert |
| 0x03 | kein siknal gefunden |
| 0x04 | ungültiges Signal |
| 0x05 | -- |
| 0x06 | Fehler momentan nicht vorhanden |
| 0x07 | Fehler momentan vorhanden |
| 0x08 | -- |
| 0xFF | unbekannter Status |
