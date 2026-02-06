# EHC_2N2.prg

## General

|  |  |
| --- | --- |
| File | EHC_2N2.prg |
| Type | PRG |
| Jobs | 54 |
| Tables | 10 |
| Origin | BMW EE-23 Stefan Reisinger |
| Revision | 1.09 |
| Author | BMW Stefan Reisinger, BMW EF-61 Tobias Schmid, BMW TI-433 Dennert |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | EHC_2, 2-Achs-Luftfederung Steuergeraet |  |  |
| ORIGIN | string | BMW EE-23 Stefan Reisinger |  |  |
| REVISION | string | 1.09 |  |  |
| AUTHOR | string | BMW Stefan Reisinger, BMW EF-61 Tobias Schmid, BMW TI-433 Dennert |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.02 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung / Kommunikationsparameter fuer <SG> automatischer Aufruf beim ersten Zugriff auf SGBD

_No arguments._

### IDENTIFIKATION

Ermittlung der SG-Variante

_No arguments._

### IDENT

Ident-Daten fuer EHC

_No arguments._

### FS_QUICK_LESEN

Fehlerspeicher quick lesen

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### CODE_LESEN

gibt die Codierinformation als BYTE-STRING aus

| Name | Type | Description |
| --- | --- | --- |
| CODIERBLOCK | int | Codierblock Nr. |

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | nach Codierung soll hier ein Teil der Fahrgestell-Nr. stehenn |
| BYTE2 | int | nach Codierung soll hier ein Teil der Fahrgestell-Nr. stehen |
| BYTE3 | int | nach Codierung soll hier ein Teil der Fahrgestell-Nr. stehen |

### SPEICHER_LOESCHEN

EEPROM loeschen bis auf SG-Identifikation

_No arguments._

### SG_RESET

Reset des Steuergeraetes

_No arguments._

### FS_SHADOW_LESEN

auslesen des Fehlershadowspeichers

_No arguments._

### ABGLEICHWERT_LESEN

Hoehenstand lesen

_No arguments._

### ABGLEICHWERT_PROGRAMMIEREN

Offset fuer Hoehenstaende eingeben

| Name | Type | Description |
| --- | --- | --- |
| OFFSETBYTE_FL_A | int | Offset fuer Hoehenstandssensor |
| OFFSETBYTE_FL_B | int | Offset fuer Hoehenstandssensor |
| OFFSETBYTE_FR_A | int | Offset fuer Hoehenstandssensor |
| OFFSETBYTE_FR_B | int | Offset fuer Hoehenstandssensor |
| OFFSETBYTE_RL_A | int | Offset fuer Hoehenstandssensor |
| OFFSETBYTE_RL_B | int | Offset fuer Hoehenstandssensor |
| OFFSETBYTE_RR_A | int | Offset fuer Hoehenstandssensor |
| OFFSETBYTE_RR_B | int | Offset fuer Hoehenstandssensor |
| VOREINST_BYTE_FR_A | int | Im Bandablauf voreingestellter Offset fuer Hoehenstandssensor |
| VOREINST_BYTE_FR_B | int | Im Bandablauf voreingestellter Offset fuer Hoehenstandssensor |
| VOREINST_BYTE_FL_A | int | Im Bandablauf voreingestellter Offset fuer Hoehenstandssensor |
| VOREINST_BYTE_FL_B | int | Im Bandablauf voreingestellter Offset fuer Hoehenstandssensor |
| VOREINST_BYTE_RR_A | int | Im Bandablauf voreingestellter Offset fuer Hoehenstandssensor |
| VOREINST_BYTE_RR_B | int | Im Bandablauf voreingestellter Offset fuer Hoehenstandssensor |
| VOREINST_BYTE_RL_A | int | Im Bandablauf voreingestellter Offset fuer Hoehenstandssensor |
| VOREINST_BYTE_RL_B | int | Im Bandablauf voreingestellter Offset fuer Hoehenstandssensor |

### HERSTELLDATEN_LESEN

Auslesen des Herstelldaten

_No arguments._

### HERSTELLDATEN_SCHREIBEN

Schreiben der Herstelldaten

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | zur Dokumentierung |
| BYTE2 | int | zur Dokumentierung |
| BYTE3 | int | zur Dokumentierung |
| BYTE4 | int | zur Dokumentierung |
| BYTE5 | int | zur Dokumentierung |
| BYTE6 | int | zur Dokumentierung |
| BYTE7 | int | zur Dokumentierung |
| BYTE8 | int | zur Dokumentierung |
| BYTE9 | int | zur Dokumentierung |
| BYTE10 | int | zur Dokumentierung |
| BYTE11 | int | zur Dokumentierung |
| BYTE12 | int | zur Dokumentierung |
| BYTE13 | int | zur Dokumentierung |
| BYTE14 | int | zur Dokumentierung |
| BYTE15 | int | zur Dokumentierung |
| BYTE16 | int | zur Dokumentierung |
| BYTE17 | int | zur Dokumentierung |
| BYTE18 | int | zur Dokumentierung |
| BYTE19 | int | zur Dokumentierung |
| BYTE20 | int | zur Dokumentierung |
| BYTE21 | int | zur Dokumentierung |
| BYTE22 | int | zur Dokumentierung |
| BYTE23 | int | zur Dokumentierung |
| BYTE24 | int | zur Dokumentierung |
| BYTE25 | int | zur Dokumentierung |
| BYTE26 | int | zur Dokumentierung |

### DIAGNOSEMODE_ERHALTEN

Zaehler fuer Diagnosemode zuruecksetzen

_No arguments._

### DIAGNOSEMODE_BEENDEN

beendet den Diagnosemode vorzeitig

_No arguments._

### FAHRZEUG_HOEHE_ABGLEICHEN

automatischer Hoehenabgleich

| Name | Type | Description |
| --- | --- | --- |
| DELTA_HOEHE_LINKS | int | mm |
| DELTA_HOEHE_RECHTS | int | mm |
| MINDEST_DELTA | int | mm |
| ACHSE | int | 1 Vorne und 2 Hinten |

### SPEICHER_LESEN

Auslesen des Speicherinhaltes

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | int | gewuenschtes Startsegment (0 fuer EEPROM) |
| HIGH | int | gewuenschte Startadresse high |
| MIDDLE | int | gewuenschte Startadresse midle |
| LOW | int | gewuenschte Startadresse low |
| ANZAHL | int | gewuenschte Anzahl Bytes (2-28) |

### SPEICHER_SCHREIBEN

Auslesen des Speicherinhaltes

| Name | Type | Description |
| --- | --- | --- |
| SEGMENT | int | gewuenschtes Startsegment (0 fuer EEPROM) |
| HIGH | int | gewuenschte Startadresse high |
| MIDDLE | int | gewuenschte Startadresse middle |
| LOW | int | gewuenschte Startadresse low |
| WERT | int | Wert, der an die entspr. Addresse geschrieben werden soll |

### HOEHE_SPEICHERN

Hoehe in den leak-Bereich

_No arguments._

### FS_LESEN

Auslesen des Fehlerspeichers

_No arguments._

### IO_STATUS_SCHREIBEN_AKTOREN

Ansteuern der Steuergeraeteausgaenge

| Name | Type | Description |
| --- | --- | --- |
| AKTORENLISTE | string | gewuenschte Komponenten, getrennt durch Leerzeichen |

### IO_STATUS_LESEN_AKTOREN

I/O Status lesen Aktoren

_No arguments._

### IO_STATUS_LESEN_ENDSTUFEN

I/O Status lesen Endstufen

_No arguments._

### IO_STATUS_LESEN_SENSOREN

I/O Status lesen

_No arguments._

### IO_STATUS_LESEN_SPANNUNGEN

I/O Status lesen

_No arguments._

### SG_STATUS_SCHREIBEN_MODI

Verschiedene Softwaremodi koennen aktiviert, bzw deaktiviert werden

| Name | Type | Description |
| --- | --- | --- |
| MODUSLISTE | string | gewuenschte Modi, getrennt durch Leerzeichen |
| SET | int | SET != 0: die gewaehlten modi werden gesetzt, ansonsten zurueckgesetzt |

### SG_STATUS_LESEN_INTERN

Auslesen von internen Reglerinformationen

_No arguments._

### SG_STATUS_LESEN_MODI

Verschiedene Softwaremodi koennen

_No arguments._

### SG_STATUS_SCHREIBEN_REGLER

Vorgeben des Zielniveaus

| Name | Type | Description |
| --- | --- | --- |
| NIVEAU | string | gewuenschtes Zielniveau |

### SG_STATUS_LESEN_REGLER

Verschiedene Softwaremodi koennen

_No arguments._

### C_C_LESEN

Codierdaten lesen

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | 21 Byte Headerdaten (0 - 20) + ETX Kennung |

### C_C_SCHREIBEN

Codierdaten schreiben

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | 21 Byte Headerdaten (0 - 20) + Daten + 1 Byte ETX Kennung (0x03) |

### C_C_AUFTRAG

Codierdaten schreiben

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | 21 Byte Headerdaten (0 - 20) + Daten + 1 Byte ETX Kennung (0x03) |

### COD_C_LESEN

Codierdaten lesen

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | 21 Byte Headerdaten (0 - 20) + ETX Kennung |

### COD_C_SCHREIBEN

Codierdaten schreiben

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | 21 Byte Headerdaten (0 - 20) + Daten + 1 Byte ETX Kennung (0x03) |

### C_FG_AUFTRAG

Beschreiben des Pruefstempels mit der FG-Nummer

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) |

### C_FG_LESEN

Auslesen des Pruefstempels und Interpretation als FG-Nummer

_No arguments._

### EEPROM_LOEHNERT_LESEN

EEPROM Daten lesen

| Name | Type | Description |
| --- | --- | --- |
| LOEHNERT_HEADER | binary | Headerdaten |

### EEPROM_LOEHNERT_SCHREIBEN

EEPROM Daten schreiben

| Name | Type | Description |
| --- | --- | --- |
| LOEHNERT_HEADER | binary | Headerdaten |

### KEY_SEED_NORMAL

Freischaltung fuer Zugriffsebene 1

_No arguments._

### KEY_SEED_EXPERT

Freischaltung fuer Zugriffsebene 2

_No arguments._

### WABCO_ABGLEICH

Abgleichen der Analogeingaenge am WABCO Band

| Name | Type | Description |
| --- | --- | --- |
| U_FL | real | Abgleichspannung HSS vorne links |
| U_FR | real | Abgleichspannung HSS vorne rechts |
| U_RL | real | Abgleichspannung HSS hinten links |
| U_RR | real | Abgleichspannung HSS hinten rechts |
| U_RES | real | Abgleichspannung Drucksensor |
| U_KL30 | real | Abgleichspannung Versorgungsspannung |
| U_VA | real | Abgleichspannung VA Messung |
| U_SENS1 | real | Abgleichspannung Sensorversorgung 1 |
| U_SENS2 | real | Abgleichspannung Sensorversorgung 2 |
| U_SENS3 | real | Abgleichspannung Sensorversorgung 3 |
| U_COMP | real | Abgleichspannung Kompressortemperatur |
| U_12V | real | Abgleichspannung stabilisierte 12V |

### STEUERN_LUFTFEDER

Ansteuern von Aktoren fuer Werkstattdiagnose

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | int | gewuenschte Ansteuerzeit in Sekunden |
| MV_FR | int | Magnetventil vorne rechts ansteuern |
| MV_FL | int | Magnetventil vorne links ansteuern |
| MV_RR | int | Magnetventil hinten rechts ansteuern |
| MV_RL | int | Magnetventil hinten links ansteuern |
| MV_RES | int | Speicherventil ansteuern |
| MV_EX | int | Ablassventil ansteuern |
| C_SW | int | Kompressorrelais ansteuern |
| MV_HPEX | int | Hochdruckablassventil ansteuern |
| MV_CR | int | Quersperrventil hinten ansteuern |
| MV_CF | int | Quersperrventil vorne ansteuern |

### HOEHE_COUNTS_VORGEBEN

Fahrzeughöhe in Counts vorgeben

| Name | Type | Description |
| --- | --- | --- |
| OFFSET_V_LINKS | int | counts |
| OFFSET_V_RECHTS | int | counts |
| OFFSET_H_LINKS | int | counts |
| OFFSET_H_RECHTS | int | counts |

### TEL_SEND

Telegramm schicken

| Name | Type | Description |
| --- | --- | --- |
| TELEGRAMM | string |  |

### TEL_SEND2

Telegramm schicken

| Name | Type | Description |
| --- | --- | --- |
| TELEGRAMM | string |  |

### SET_ACTUATORS

Aktuatoren setzen/ ruecksetzen

| Name | Type | Description |
| --- | --- | --- |
| ACTUATORS1 | int | Aktuatoren Bit0: MV_FR, Bit1: MV_FL, Bit2: MV_RR, Bit3: MV_RL Bit4: MV_RES, Bit5: MV_EX, Bit6: C_SW, Bit7: reserved |
| ACTUATORS2 | int | Aktuatoren Bit0: MV_HPEX, Bit1: reserved, Bit2: reserved, Bit3: reserved Bit4: reserved, Bit5: reserved, Bit6: reserved, Bit7: reserved |

### CALIBRATE_VEHICLE_HEIGHT

automatischer Hoehenabgleich

| Name | Type | Description |
| --- | --- | --- |
| DELTA_HOEHE_LINKS | int | mm |
| DELTA_HOEHE_RECHTS | int | mm |
| ACHSE | int | 1 Vorne und 2 Hinten |

### SET_ACTUATORS_TIME

Aktuatoren bestimmte Zeit setzen/ ruecksetzen

| Name | Type | Description |
| --- | --- | --- |
| ACTUATORS1 | int | Aktuatoren Bit0: MV_FR, Bit1: MV_FL, Bit2: MV_RR, Bit3: MV_RL Bit4: MV_RES, Bit5: MV_EX, Bit6: C_SW, Bit7: reserved |
| ACTUATORS2 | int | Aktuatoren Bit0: MV_HPEX, Bit1: reserved, Bit2: reserved, Bit3: reserved Bit4: reserved, Bit5: reserved, Bit6: reserved, Bit7: reserved |
| TIME | int | Zeit in Sekunden |

### STATUS_DELTA_OFFROAD

Ausgabe Delta Offroad aus Codierdaten

_No arguments._

### STATUS_ABGLEICH

automatischer Hoehenabgleich

| Name | Type | Description |
| --- | --- | --- |
| DELTA_HOEHE_LINKS | int | mm |
| DELTA_HOEHE_RECHTS | int | mm |
| MINDEST_DELTA | int | mm |
| ACHSE | int | 1 Vorne und 2 Hinten |

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0xA0 | OKAY |
| 0xA1 | BUSY |
| 0xA2 | ERROR_REJECTED |
| 0xB0 | ERROR_PARAMETER |
| 0xB1 | ERROR_FUNCTION |
| 0xFF | ERROR_NOT_ACKNOWLEDGE |
| 0xXY | ERROR_UNKNOWN_STATUSBYTE |

### LIEFERANTEN

| LIEF_NR | LIEF_NAME |
| --- | --- |
| 0x01 | Reinshagen / Delphi |
| 0x02 | Kostal |
| 0x03 | Hella |
| 0x04 | Siemens |
| 0x05 | Eaton |
| 0x06 | UTA |
| 0x07 | Helbako |
| 0x08 | Bosch |
| 0x09 | Loewe |
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
| 0x28 | DODUCO |
| 0x29 | DENSO |
| 0x43 | WABCO |
| 0xFF | unbekannter Hersteller |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | Balgventil vorne links |
| 0x02 | Balgventil vorne rechts |
| 0x03 | Balgventil hinten links |
| 0x04 | Balgventil hinten rechts |
| 0x05 | Quersperrventil vorne |
| 0x06 | Quersperrventil hinten |
| 0x07 | Ablassventil |
| 0x08 | Hochdruckablassventil |
| 0x09 | Speicherventil |
| 0x0A | Kompressorrelais |
| 0x14 | Versorgung Balgventile vorne |
| 0x15 | Versorgung Balgventile hinten |
| 0x16 | Versorgung Quersperrventile |
| 0x17 | Versorgung Speicherventil/Ablassventil |
| 0x18 | Versorgung Hochdruckablassventil |
| 0x1E | Hoehenstandssensor vorne links |
| 0x1F | Hoehenstandssensor vorne rechts |
| 0x20 | Hoehenstandssensor hinten links |
| 0x21 | Hoehenstandssensor hinten rechts |
| 0x22 | Speicherdrucksensor |
| 0x23 | Versorgung Speicherdrucksensor |
| 0x24 | Kompressortemperatursensor |
| 0x25 | VA Signal |
| 0x31 | CAN Bus |
| 0x32 | CAN Bus |
| 0x33 | KBUS |
| 0x34 | Speicherfehler Steuergeraet |
| 0x35 | interner Fehler Steuergeraet |
| 0x36 | Codierdatenfehler |
| 0x37 | interner Abgleichfehler Steuergeraet |
| 0x64 | Verschraenkungs-Plausibilitaet |
| 0x65 | Kein/zu langsames Verfahren (ganzes Fzg.) wenn heben angefordert |
| 0x66 | Kein/zu langsames Verfahren (ganzes Fzg.) wenn absenken angefordert |
| 0x67 | Zu viel Energie fuer eine Regelung benoetigt: Vorderachse |
| 0x68 | Zu viel Energie fuer eine Regelung benoetigt: hinten links |
| 0x69 | Zu viel Energie fuer eine Regelung benoetigt: hinten rechts |
| 0x6A | Zu viel Energie um die Zielhoehe zu erreichen: Vorderachse |
| 0x6B | Zu viel Energie um die Zielhoehe zu erreichen: hinten links |
| 0x6C | Zu viel Energie um die Zielhoehe zu erreichen: hinten rechts |
| 0x6D | Hoehenaenderung in die falsche Richtung (mind. ein Rad), wenn heben angefordert |
| 0x6E | Hoehenaenderung in die falsche Richtung (mind. ein Rad), wenn absenken angefordert |
| 0x6F | Kompressortemperatur steigt, wenn Kompressor nicht angesteuert wird |
| 0x70 | Kompressortemperatur steigt nicht, wenn Kompressor angesteuert wird |
| 0x71 | Kompressortemperatur faellt nicht, wenn Kompressor nicht angesteuert wird |
| 0x72 | Speicherdruck steigt, wenn Speicher nicht aktiv ist |
| 0x73 | Speicherdruck sinkt, wenn Speicher nicht aktiv ist |
| 0x74 | Speicherdruck bleibt konstant, wenn Speicherfuellen angefordert wird |
| 0x75 | Speicherdruck sinkt anfaenglich, wenn Speicherfuellen angefordert wird |
| 0x76 | Speicherdruck sinkt, wenn Speicherfuellen angefordert wird |
| 0x77 | Speicherdruck bleibt konstant, wenn Entlueftung angefordert wird |
| 0x78 | Speicherdruck steigt, wenn Entlueftung angefordert wird |
| 0x79 | Speicherdruck bleibt konstant, wenn aus dem Speicher nach oben verfahren wird |
| 0x7A | Speicherdruck steigt, wenn aus dem Speicher nach oben verfahren wird |
| 0x7B | Quersperrplausibilitaet Vorderachse |
| 0x7C | Quersperrplausibilitaet Hinterachse |
| 0x7D | links vorne bewegt sich zu langsam |
| 0x7E | rechts vorne bewegt sich zu langsam |
| 0x7F | Aktivitaetsplausibilitaet vorne links |
| 0x80 | Aktivitaetsplausibilitaet vorne rechts |
| 0x81 | Aktivitaetsplausibilitaet hinten links |
| 0x82 | Aktivitaetsplausibilitaet hinten rechts |
| 0xFF | unbekannter Fehlerort |

### FARTMATRIX

| ORT | A1_0 | A1_1 | A2_0 | A2_1 | A3_0 | A3_1 | A4_0 | A4_1 | A5_0 | A5_1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0xFF | 0x00 | 0x07 |
| 0x02 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0xFF | 0x00 | 0x07 |
| 0x03 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0xFF | 0x00 | 0x07 |
| 0x04 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0xFF | 0x00 | 0x07 |
| 0x05 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0xFF | 0x00 | 0x07 |
| 0x06 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0xFF | 0x00 | 0x07 |
| 0x07 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0xFF | 0x00 | 0x07 |
| 0x08 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0xFF | 0x00 | 0x07 |
| 0x09 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0xFF | 0x00 | 0x07 |
| 0x0A | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0xFF | 0x00 | 0x07 |
| 0x14 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0xFF | 0x00 | 0x07 |
| 0x15 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0xFF | 0x00 | 0x07 |
| 0x16 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0xFF | 0x00 | 0x07 |
| 0x17 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0xFF | 0x00 | 0x07 |
| 0x18 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0xFF | 0x00 | 0x07 |
| 0x1E | 0x00 | 0x0A | 0x00 | 0x0B | 0x00 | 0x0C | 0x00 | 0xFF | 0x00 | 0x07 |
| 0x1F | 0x00 | 0x0A | 0x00 | 0x0B | 0x00 | 0x0C | 0x00 | 0xFF | 0x00 | 0x07 |
| 0x20 | 0x00 | 0x0A | 0x00 | 0x0B | 0x00 | 0x0C | 0x00 | 0xFF | 0x00 | 0x07 |
| 0x21 | 0x00 | 0x0A | 0x00 | 0x0B | 0x00 | 0x0C | 0x00 | 0xFF | 0x00 | 0x07 |
| 0x22 | 0x00 | 0x0A | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x07 |
| 0x23 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0xFF | 0x00 | 0x07 |
| 0x24 | 0x00 | 0x01 | 0x00 | 0x02 | 0x00 | 0x03 | 0x00 | 0xFF | 0x00 | 0x07 |
| 0x25 | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x04 | 0x00 | 0x07 |
| 0x31 | 0x00 | 0xFE | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x07 |
| 0x32 | 0x00 | 0xFE | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x07 |
| 0x33 | 0x00 | 0xFE | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x07 |
| 0x34 | 0x00 | 0xFE | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x07 |
| 0x35 | 0x00 | 0xFE | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x07 |
| 0x36 | 0x00 | 0xFE | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x07 |
| 0x37 | 0x00 | 0xFE | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x07 |
| 0x64 | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x04 | 0x00 | 0x07 |
| 0x65 | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x04 | 0x00 | 0x07 |
| 0x66 | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x04 | 0x00 | 0x07 |
| 0x67 | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x04 | 0x00 | 0x07 |
| 0x68 | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x04 | 0x00 | 0x07 |
| 0x69 | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x04 | 0x00 | 0x07 |
| 0x6A | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x04 | 0x00 | 0x07 |
| 0x6B | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x04 | 0x00 | 0x07 |
| 0x6C | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x04 | 0x00 | 0x07 |
| 0x6D | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x04 | 0x00 | 0x07 |
| 0x6E | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x04 | 0x00 | 0x07 |
| 0x6F | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x04 | 0x00 | 0x07 |
| 0x70 | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x04 | 0x00 | 0x07 |
| 0x71 | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x04 | 0x00 | 0x07 |
| 0x72 | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x04 | 0x00 | 0x07 |
| 0x73 | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x04 | 0x00 | 0x07 |
| 0x74 | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x04 | 0x00 | 0x07 |
| 0x75 | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x04 | 0x00 | 0x07 |
| 0x76 | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x04 | 0x00 | 0x07 |
| 0x77 | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x04 | 0x00 | 0x07 |
| 0x78 | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x04 | 0x00 | 0x07 |
| 0x79 | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x04 | 0x00 | 0x07 |
| 0x7A | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x04 | 0x00 | 0x07 |
| 0x7B | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x04 | 0x00 | 0x07 |
| 0x7C | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x04 | 0x00 | 0x07 |
| 0x7D | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x04 | 0x00 | 0x07 |
| 0x7E | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x04 | 0x00 | 0x07 |
| 0x7F | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x04 | 0x00 | 0x07 |
| 0x80 | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x04 | 0x00 | 0x07 |
| 0x81 | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x04 | 0x00 | 0x07 |
| 0x82 | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0xFF | 0x00 | 0x04 | 0x00 | 0x07 |
| 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x01 | Kurzschluss gegen U-Batt |
| 0x02 | Kurzschluss gegen Masse |
| 0x03 | Leitungsunterbrechung |
| 0x04 | Plausibilitaetsfehler |
| 0x07 | Fehler momentan vorhanden |
| 0x08 | sporadischer Fehler |
| 0x0A | Hardwarefehler |
| 0x0B | Fehler Sensorversorgung |
| 0x0C | Eingang Floating Plausibilitaetsfehler |
| 0xFE | allg. Fehler |
| 0xFF | unbekannte Fehlerart |

### FUMWELTMATRIX

| ORT | UW_ANZ | UW_SATZ | UW1_NR | UW2_NR | UW3_NR | UW4_NR | UW5_NR | UW6_NR | UW7_NR | UW8_NR | UW9_NR | UW10_NR | UW11_NR | UW12_NR | UW13_NR | UW14_NR | UW15_NR | UW16_NR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | 16 | 1 | 0x01 | 0x02 | 0x03 | 0x04 | 0x05 | 0x06 | 0x07 | 0x08 | 0x09 | 0x0A | 0x0B | 0x0C | 0x0D | 0x0E | 0x0F | 0x10 |
| 0xXY | 0 | 0 | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF | 0xFF |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH | MASK |
| --- | --- | --- | --- |
| 0x01 | Kilometerstand | km | -- |
| 0x02 | Batteriespannung | Volt | -- |
| 0x03 | Speicherdruck | Bar | -- |
| 0x04 | Balgventil vorne rechts | 0/1 | 0x01 |
| 0x05 | Balgventil vorne links | 0/1 | 0x02 |
| 0x06 | Balgventil hinten rechts | 0/1 | 0x04 |
| 0x07 | Balgventil hinten links | 0/1 | 0x08 |
| 0x08 | Speicherventil | 0/1 | 0x10 |
| 0x09 | Ablassventil | 0/1 | 0x20 |
| 0x0A | Kompressorschalter | 0/1 | 0x40 |
| 0x0B | Hochdruckablassventil | 0/1 | 0x01 |
| 0x0C | Crosslinkventil hinten | 0/1 | 0x04 |
| 0x0D | Crosslinkventil vorne | 0/1 | 0x08 |
| 0x0E | Kompressortemperatur | Grad Celsius | -- |
| 0x0F | Fahrzeuggeschwindigkeit | km/h | -- |
| 0x10 | durchschn. Fahrzeughoehe | mm | -- |
| 0xXY | unbekannte Umweltbedingung | XY | 1 |

### AKTOREN

| AKTOREN | BYTE | BITWERT |
| --- | --- | --- |
| MV_FR | 0 | 0x01 |
| MV_FL | 0 | 0x02 |
| MV_RR | 0 | 0x04 |
| MV_RL | 0 | 0x08 |
| MV_RES | 0 | 0x10 |
| MV_EX | 0 | 0x20 |
| C_SW | 0 | 0x40 |
| MV_HPEX | 1 | 0x01 |
| MV_CR | 1 | 0x04 |
| MV_CF | 1 | 0x08 |
| HSS_C_FRONTREAR | 1 | 0x40 |
| HSS_HPEX | 1 | 0x80 |
| ACCESS_STATIC | 2 | 0x02 |
| MOTORWAY_STATIC | 2 | 0x08 |
| STANDARD_STATIC | 2 | 0x20 |
| OFFROAD_STATIC | 2 | 0x80 |
| HOLD_STATIC | 3 | 0x02 |
| HSS_FRONT | 4 | 0x01 |
| HSS_REAR | 4 | 0x02 |
| HSS_RES | 4 | 0x04 |
| UPULL | 4 | 0x08 |
| PWR_SENS1 | 4 | 0x10 |
| PWR_SENS2 | 4 | 0x20 |
| PWR_SENS3 | 4 | 0x40 |
| PWR_SENS4 | 4 | 0x80 |
| FULL_ACCESS | 5 | 0x80 |
| XXX | Y | Z |

### MODI

| MODI | BYTE | BITWERT |
| --- | --- | --- |
| DUMPMODUS | 0 | 0x01 |
| BANDMODUS | 0 | 0x02 |
| VERLADEMODUS | 0 | 0x04 |
| LOWTOLMODUS | 0 | 0x08 |
| EMVMODUS | 0 | 0x10 |
| HANDSTEUERMODUS | 0 | 0x20 |
| NOPLAUSMODUS | 0 | 0x40 |
| NOUSERMODUS | 0 | 0x80 |
| ZYKEMVMODUS | 1 | 0x01 |
| TESTMODUS | 1 | 0x02 |
| NOPREVENTMODUS | 1 | 0x04 |
| ALLE | 99 | 0xFF |
| XXX | Y | Z |

### HOEHEN

| HOEHEN | BYTE | BITWERT |
| --- | --- | --- |
| ACCESS | 0 | 0x02 |
| MOTORWAY | 0 | 0x04 |
| STANDARD | 0 | 0x08 |
| OFFROAD | 0 | 0x10 |
| REG_DOWN | 0 | 0x40 |
| REG_UP | 0 | 0x80 |
| XXX | Y | Z |
