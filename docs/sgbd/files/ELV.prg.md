# ELV.prg

## General

|  |  |
| --- | --- |
| File | ELV.prg |
| Type | PRG |
| Jobs | 14 |
| Tables | 12 |
| Origin | BMW TI-430 Stefan Bendel |
| Revision | 1.0 |
| Author | BMW TI-433 Gerd Huber, Valeo ESE Hagen Friedrich |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Elektrische Lenkungsverriegelung ELV |  |  |
| ORIGIN | string | BMW TI-430 Stefan Bendel |  |  |
| REVISION | string | 1.0 |  |  |
| AUTHOR | string | BMW TI-433 Gerd Huber, Valeo ESE Hagen Friedrich |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 0.02 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung / Kommunikationsparameter fuer ELV automatischer Aufruf beim ersten Zugriff auf die SGBD

_No arguments._

### IDENT

Ident-Daten der Elektrischen Lenkungsverriegelung ELV auslesen

_No arguments._

### FS_LESEN

Fehlerspeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose Sonderfall: Loeschdatum (KW/Jahr) integriert !

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen Sonderfall: Loeschdatum (KW/Jahr) integriert !

_No arguments._

### IS_LESEN

Infospeicher lesen Info-Speicher ist im Aufbau analog zum Fehlerspeicher Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### SPEICHER_LESEN

Lesen des internen Speichers der ELV Als Argumente werden die Anzahl und die Adresse der Datenbytes uebergeben.

| Name | Type | Description |
| --- | --- | --- |
| ANZAHL | int | Bereich 1 - 32 |
| ADRESSE | int | Bereich 0x0000 - 0xFFFF |

### STATUS_LESEN

Status der ELV auslesen

_No arguments._

### STEUERN_STAT_VORG_GESCH

Status auf geschaerft setzen

_No arguments._

### STEUERN_STAT_VORG_NI_GESCH

Status auf nicht geschaerft setzen

_No arguments._

### STEUERN

Ansteuern der ELV ! erlaubte Namen des Arguments 'ORT' ueber Tool XTRACT.exe ! Aufruf 'XTRACT [-F] ELV.prg'

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table BITS NAME TEXT |
| EIN | int | '1' zum Einschalten / '0' zum Ausschalten |

### CODIERDATEN_LESEN

Auslesen der Codierdaten der ELV

_No arguments._

### SLEEP_MODE

SG in Sleep-Mode versetzen

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

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
| 0x00 | ERROR_ECU_UNKNOWN_STATUSBYTE |

### LIEFERANTEN

| LIEF_NR | LIEF_TEXT |
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
| 0x30 | NEC |
| 0x31 | DASA |
| 0x32 | Pioneer |
| 0xXY | unbekannter Hersteller |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x00 | ELV Watchdog uC intern |
| 0x01 | ELV Prozessor ROM |
| 0x02 | ELV Taktgeber |
| 0x03 | ELV EEPROM |
| 0x04 | Fehler bei RAM-Check |
| 0x05 | Fehler bei ROM-Check |
| 0x07 | ELV noch nie kodiert oder Kodierdaten verloren |
| 0x10 | Treiber SI-Magnet defekt (Ub-Kurzschluss) |
| 0x11 | Treiber SI-Magnet defekt (Gnd-Kurzschluss oder Unterbrechung) |
| 0x12 | Beide Endlagenerkennungen gleichzeitig aktiv |
| 0x13 | Hallsensor 'Sicherungsmagnet' Unterbrechung oder Kurzschluss |
| 0x14 | Hallsensor 'P/N-Freigabe' Unterbrechung oder Kurzschluss |
| 0x15 | Hallsensor 'Endlage verriegelt' Unterbrechung oder Kurzschluss |
| 0x16 | Hallsensor 'Endlage entriegelt' Unterbrechung oder Kurzschluss |
| 0x17 | Fehler bei Verriegelungsvorgang (Anzahl Versuche ueberschritten) |
| 0x18 | Unterbrechungsrelais defekt |
| 0x19 | Spannungsueberwachung defekt |
| 0x1A | Sperrplattenmotor Kurz./Unterbr./Uebertemp. des Treibers in Richtung 'Ent' |
| 0x1B | Sicherungsmagnet defekt |
| 0x1C | Fehler bei Entriegelungsvorgang |
| 0x1D | Treiber Sicherungsmagnet Kurzschluss |
| 0x1E | Fehler bei Verriegelungsvorgang (Endlage 'Entr' nicht verlassen) |
| 0x1F | Interne Sensor-Spannungsversorgung defekt |
| 0x2A | Sperrplattenmotor Kurz./Unterbr./Uebertemp. des Treibers in Richtung 'Ver' |
| 0x2B | Verriegelung des SI-Magnettreibers ueber KL15 defekt |
| 0x40 | K-Bus oder EWS |
| 0x41 | Treiber DRSP defekt (DRSP oder Leitung DRSP mit Ub-Kurzschluss) |
| 0x42 | Treiber DRSP defekt (DRSP oder Leitung DRSP mit Gnd-Kurzschluss) |
| 0x43 | P/N-EWS 'low' (Leitung P/N-EWS mit Gnd-Kurzschluss) |
| 0x44 | P/N-EWS 'high' (Leitung P/N-EWS mit Ub-Kurzschluss) |
| 0x45 | Dreherkennung defekt oder KLR/KL15 mit Ub-Kurzschluss |
| 0x46 | Hallsensor 'Dreherkennung' hat Unterbrechung oder Kurzschluss |
| 0x47 | KLR mit Gnd-Kurzschluss/Unterbrechung oder KL15 mit Ub-Kurzschluss |
| 0x48 | Geschwindigkeitssignal unplausibel |
| 0xFF | unbekannter Fehler |

### FARTTEXTE

| ART | ARTTEXT |
| --- | --- |
| 0x00 | sporadischer Fehler          |
| 0x01 | aktiver Fehler               |
| 0xFF | unbekannte Fehlerart         |

### CODETEXTE

| CODE_NR | CODE_TEXTE |
| --- | --- |
| 0x00 | nein           |
| 0x01 | ja             |
| 0x10 | ROM            |
| 0xAA | EEPROM         |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x80 | Fehler bei Verriegelvorgang |
| 0x81 | Fehler bei Entriegelvorgang |
| 0x83 | Ueberlastsicherung aktiviert |
| 0x85 | Unterspannung bei Entriegelungsvorgang |
| 0x86 | Crash wurde ausgeloest |
| 0x87 | Verriegelungssperre Unterspannung aktiv |
| 0x88 | KLR- oder KL15- Abfall nicht ueber K-Bus bestaetigt |
| 0xXY | unbekannter Info-Ort |

### IARTTEXTE

| ART | ARTTEXT |
| --- | --- |
| 0x00 | sporadischer Fehler          |
| 0x01 | aktiver Fehler               |
| 0xFF | unbekannte Fehlerart         |

### STTEXTE_EBENE0

| ST_ART0 | ST_TEXTE0 |
| --- | --- |
| 0x00 | CHECK_ACTIVE_ERRORS |
| 0x01 | RESET_INIT |
| 0x02 | CHECK_RAM_ROM_EEPROM |
| 0x03 | RAM_ROM_EEPROM_ERROR |
| 0x04 | RESET_INIT_DONE |
| 0x05 | GET_SYSTEM_STAT |
| 0x06 | VERRIEGELT |
| 0x07 | ENTRIEGELT_UND_GES |
| 0x08 | ENTRIEGELN |
| 0x09 | ENTRIEGELN_FERTIG |
| 0x0A | VERRIEGELN |
| 0x0B | VERRIEGELN_FERTIG |
| 0xFF | unbekannter Zustand |

### STTEXTE_EBENE1

| ST_ART1 | ST_TEXTE1 |
| --- | --- |
| 0x00 | - |
| 0x10 | - |
| 0x20 | - |
| 0x30 | - |
| 0x40 | - |
| 0x50 | - |
| 0x60 | - |
| 0x61 | WARTE_DREH_SET |
| 0x62 | WARTE_KBUS_MESSAGE |
| 0x63 | WARTE_KBUS_RESPONSE |
| 0x70 | START_NICHT_FREIGEBEN |
| 0x71 | MOT_ZULEITUNG_UNTERBRECHEN |
| 0x72 | DAUERFEHLER_PRUEFEN |
| 0x73 | DREHSPERRE_VOR_START |
| 0x74 | MOT_ZULEITUNG_UNTERBRECHEN_R |
| 0x75 | DREHSPERRE_VOR_FAHRT1 |
| 0x76 | SICHERUNGSMAGNET_UEBERPRUEFEN |
| 0x77 | FAHREN_MOEGLICH |
| 0x78 | DREHSPERRE_NACH_START |
| 0x79 | DREHSPERRE_VOR_FAHRT2 |
| 0x80 | DEFAULT |
| 0x81 | WARTE_DREH_SCHL |
| 0x82 | AUSFUEHREN |
| 0x83 | ENTRIEGELN_MOVING |
| 0x84 | CHECK_SIMGNT |
| 0x90 | - |
| 0xA0 | AUSFUEHREN |
| 0xA1 | CHECK_SENSORS |
| 0xA2 | VERRIEGELN_MOVING |
| 0xA3 | VERRIEGELN_FERTIG |
| 0xA4 | CHECK_SIMGNT |
| 0xB0 | - |
| 0xFF | unbekannter Zustand |

### HALLTEXTE

| HALL_NUMMER | HALL_TEXT |
| --- | --- |
| 0x00 | nicht erregt                    |
| 0x01 | erregt                          |
| 0x02 | Stoerung                        |
| 0xXY | unbekannter Hallsensor-Status   |

### KBUSTEXTE

| KBUS_NUMMER | KBUS_TEXT |
| --- | --- |
| 0x00 | aus                                     |
| 0x01 | ein                                     |
| 0x02 | undefiniert                             |
| 0x03 | gueltig                                 |
| 0x04 | ungueltig                               |
| 0x05 | ja                                      |
| 0x06 | nein                                    |
| 0xXY | unbekannter K-Bus Status                |

### BITS

| ZELLE | BYTE | NAME | TEXT |
| --- | --- | --- | --- |
| 0 | 1 | STAT_EEIN_DREK | Dreherkennung ist aktiviert (von SZE) |
| 1 | 1 | STAT_EEIN_DREK_GEST | Signal Dreherkennung gestoert |
| 2 | 1 | STAT_EEIN_P_N | Getriebewaehlhebel P/N-Eingang 0: D , 1: P/N |
| 3 | 1 | STAT_EEIN_KLR | Klemme R ein |
| 4 | 1 | STAT_EEIN_KL15 | Klemme 15 ein |
| 5 | 1 | STAT_EEIN_DFA_HL | Fahrzeug faehrt (Raddrehzahlfuehler-Ausgang hinten links) |
| 6 | 1 | STAT_EEIN_DFA_PLAU | Geschwindigkeitssignal unplausibel |
| 8 | 2 | STAT_IEIN_ENDLAGE_VER | Hallsensor 'Endlagenerkennung verriegelt' |
| 10 | 2 | STAT_IEIN_ENDLAGE_ENT | Hallsensor 'Endlagenerkennung entriegelt' |
| 12 | 2 | STAT_IEIN_SPERRP_GES | Hallsensor 'Sicherungsmagnet gesichert', Anker angez./liegt auf Sperrplatte |
| 14 | 2 | STAT_IEIN_SPERRP_PN | Hallsensor 'Sicherungsmagnet P/N-Freigabe gesichert', Anker angez./liegt auf Sperrplatte |
| 16 | 3 | STAT_IEIN_R_PN_EWS | Ausgang 'P/N-EWS' rueckgelesen |
| 17 | 3 | STAT_IEIN_R_DRSP | Ausgang 'Drehsperre' rueckgelesen |
| 18 | 3 | STAT_IEIN_R_SMAG | Ausgang 'Sicherungsmagnet' rueckgelesen  |
| 19 | 3 | STAT_IEIN_R_MSP_ENT | Relais 'Motor Sperrplatte entriegeln' rueckgelesen |
| 20 | 3 | STAT_IEIN_D_DRSP | Diagnose (Status) 'Treiber Drehsperre'  |
| 21 | 3 | STAT_IEIN_D_SMAG | Diagnose (Status) 'Treiber Sicherungsmagnet'  |
| 22 | 3 | STAT_IEIN_D_SPERR | Diagnose (Status) 'Vollbruecke Sperrplatte'  |
| 24 | 4 | STAT_AUSG_12V_INT | 12V getaktet intern |
| 25 | 4 | STAT_AUSG_PN_EWS | P/N-Ausgang zur EWS3 (Freigabeleitung) |
| 26 | 4 | STAT_AUSG_DRSP | Drehsperre angesteuert |
| 27 | 4 | STAT_AUSG_SMAG_TR | Sicherungsmagnet angesteuert |
| 28 | 4 | STAT_AUSG_UNTREL | Unterbrechungsrelais |
| 29 | 4 | STAT_AUSG_SP_ENT | Sperrplatte entriegeln |
| 30 | 4 | STAT_AUSG_SP_VER | Sperrplatte verriegeln |
| 31 | 4 | STAT_AUSG_SP_BRK | Motor Sperrplatte bremsen |
| 32 | 5 | STAT_AUSG_UDREK | 12V getaktet extern |
| 40 | 6 | STAT_KBUS_KLR | 'Klemme R'-Information ueber K-Bus |
| 41 | 6 | STAT_KBUS_KL15 | 'Klemme 15'-Information ueber K-Bus |
| 42 | 6 | STAT_KBUS_EWS_Key | 'Gueltiger Schluessel im Schloss'-Information ueber K-Bus |
| 43 | 6 | STAT_KBUS_ESW_free | 'EWS freigeschaltet ueber Schluessel'-Information ueber K-Bus |
| 44 | 6 | STAT_KBUS_Airbag_Crash | 'Grundmodul ZV oeffnen'-Information ueber K-Bus |
| 45 | 6 | STAT_KBUS_KL_undef | Klemmenstatus ueber K-Bus ist undefiniert |
| 46 | 6 | STAT_KBUS_EWS_undef | Schluesselstatus ueber K-Bus ist undefiniert |
| 48 | 7 | STAT_ER_SICH | ELV ist entriegelt und gesichert |
| 49 | 7 | STAT_VR | ELV ist verriegelt |
| 50 | 7 | STAT_ER_MOV | ELV wird momentan entriegelt |
| 51 | 7 | STAT_VR_MOV | ELV wird momentan verriegelt |
| 52 | 7 | STAT_ER | ELV ist entriegelt |
| 56 | 8 | STAT_GESCH | ELV geschaerft |
| 64 | 9 | STAT_STATE | Momentan aktiver Zustand (nur fuer Entwickler) |
| XY | 10 | ALOG_U_KL30 | Spannung Klemme 30 |
| XY | 14 | ALOG_I_DREK | Strom ueber Hallsensor 'Dreherkennung'  |
| XY | 15 | ALOG_I_SMAG_HALL | Strom ueber Hallsensor 'Sicherungsmagnet'  |
| XY | 16 | ALOG_I_PN_HALL | Strom ueber Hallsensor 'P/N-Freigabe'  |
| XY | 17 | ALOG_I_ELEK_ENT | Strom ueber Hallsensor 'Endlagenerkennung entriegelt'  |
| XY | 18 | ALOG_I_ELEK_VER | Strom ueber Hallsensor 'Endlagenerkennung verriegelt'  |
| XY | XY | XY | nicht definiertes Signal |
