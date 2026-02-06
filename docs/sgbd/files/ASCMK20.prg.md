# ASCMK20.prg

## General

|  |  |
| --- | --- |
| File | ASCMK20.prg |
| Type | PRG |
| Jobs | 35 |
| Tables | 9 |
| Origin | BMW EF-73 Kusch |
| Revision | 1.16 |
| Author | BMW TP-421 Hirsch, EF-73 Kusch |
| ECU Comment | Keine Diagnose bei V > 6 km/h |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | ABS/ASC, ITT_Industries, MK20E_I, E36,E46 |  |  |
| ORIGIN | string | BMW EF-73 Kusch |  |  |
| REVISION | string | 1.16 |  |  |
| AUTHOR | string | BMW TP-421 Hirsch, EF-73 Kusch |  |  |
| COMMENT | string | Keine Diagnose bei V > 6 km/h |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Init-Job fuer ASCMK20

_No arguments._

### IDENT

Ident-Daten fuer ASC_MK20

_No arguments._

### FS_LESEN

Fehlerspeicher lesen fuer ASC_MK20

_No arguments._

### FS_LESEN_KB90

Fehlerspeicher lesen fuer ASC_MK20 mit KB90

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen fuer ASC_MK20

_No arguments._

### FS_INIT

Fehlerspeicher initialisieren NVRAM-Loeschen

_No arguments._

### STATUS_IO_LESEN

Status Eingaenge ASC_MK20

_No arguments._

### STATUS_SPANNUNGSWERTE_LESEN

Status SPANNUNGSWERTE DSC_E46, Signalgruppe 01

_No arguments._

### STATUS_DME_DDE_1

Status DME_DDE_1 CAN-Botschaft, Signalgruppe 04

_No arguments._

### TRIG_SCHREIBEN

TRIGGERSCHWELLEN SCHREIBEN DSC_E46

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E oder Wiederholung = W |
| ORT1 | string | gewuenschte Komponente 1 |
| ORT2 | string | gewuenschte Komponente 2 |

### STEUERN_DIGITAL

Ansteuern mehrerer digitaler Ausgaenge

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E oder Wiederholung = W |
| ORT1 | string | gewuenschte Komponente 1 |
| ORT2 | string | gewuenschte Komponente 2 |
| ORT3 | string | gewuenschte Komponente 3 |
| ORT4 | string | gewuenschte Komponente 4 |
| ORT5 | string | gewuenschte Komponente 5 |
| ORT6 | string | gewuenschte Komponente 6 |
| ORT7 | string | gewuenschte Komponente 7 |
| ORT8 | string | gewuenschte Komponente 8 |
| ORT9 | string | gewuenschte Komponente 9 |
| ORT10 | string | gewuenschte Komponente 10 |
| ORT11 | string | gewuenschte Komponente 11 |
| ORT12 | string | gewuenschte Komponente 12 |
| ORT13 | string | gewuenschte Komponente 13 |
| ORT14 | string | gewuenschte Komponente 14 |
| ORT15 | string | gewuenschte Komponente 15 |

### STEUERN_ANALOG_ASC_LM

Ansteuern MD_ASC und MD_LM

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E, Wiederholung = W |
| MD_ASC | int | gewuenschter wert in % |
| MD_LM | int | gewuenschter wert in % |

### STEUERN_ANALOG_MSR

Ansteuern MD_MSR

| Name | Type | Description |
| --- | --- | --- |
| E_OR_W | string | Einmal = E, Wiederholung = W |
| MD_MSR | int | gewuenschter wert in % |

### PUMPENFOERDERLEISTUNG_VO

Steuern_Digital ansteueren u. ruecksetzen

_No arguments._

### DRUCKABBAU_HA

Steuern_Digital ansteueren u. ruecksetzen

_No arguments._

### DRUCKAUFBAU_HA

Steuern_Digital ansteueren u. ruecksetzen

_No arguments._

### PUMPENFOERDERLEISTUNG_HA

Steuern_Digital ansteueren u. ruecksetzen

_No arguments._

### ABS_REGELSIMULATION

Ansteuern mehrerer digitaler Ausgaenge

| Name | Type | Description |
| --- | --- | --- |
| ANZAHL_WARTESCHLEIFEN | int | Anzahl Warteschleifen, wenn nicht angegeben == 3 |

### NA_ENTLUEFTUNG_LI

Steuern_Digital ansteueren u. ruecksetzen

_No arguments._

### NA_ENTLUEFTUNG_RE

Steuern_Digital ansteueren u. ruecksetzen

_No arguments._

### HERSTELLDATEN_LESEN

HERSTELL_Daten fuer ASCMK4G

_No arguments._

### ABGLEICHWERTE_LESEN

Triggerschwellen der 4 Radsensoren

_No arguments._

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels und Interpretation als FG-Nummer

_No arguments._

### FS_LESEN_SAR

Fehlerspeicher lesen fuer ASC_MK20

_No arguments._

### ASC_SIM_HA6

Steuern_Digital ansteueren u. halten

_No arguments._

### ASC_SIM_HA8

Steuern_Digital ansteueren u. halten

_No arguments._

### ASC_SIM_HA9

Steuern_Digital ansteueren u. halten

_No arguments._

### ASC_SIM_HA10

Steuern_Digital ansteueren u. halten

_No arguments._

### DRUCKABBAU_VL

Steuern_Digital ansteueren u. ruecksetzen

_No arguments._

### DRUCKABBAU_VR

Steuern_Digital ansteueren u. ruecksetzen

_No arguments._

### DRUCKAUFBAU_VL

Steuern_Digital ansteueren u. ruecksetzen

_No arguments._

### DRUCKHALTEN

Steuern_Digital ansteueren u. ruecksetzen

_No arguments._

### COD_LESEN

Codierdaten lesen MK20E_I

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
| 0xFF | ERROR_ECU_NACK |
| 0x00 | ERROR_ECU_UNKNOWN_STATUSBYTE |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x11 | Drehzahlfuehler vorne links Triggersignal |
| 0x12 | Drehzahlfuehler vorne links Kontinuitaet |
| 0x14 | Drehzahlfuehler vorne links Anfahrerkennung |
| 0x15 | Ueberwachung ABS Auslass Ventil ueber Drehzahlfuehler vorne links |
| 0x21 | Drehzahlfuehler vorne rechts Triggersignal |
| 0x22 | Drehzahlfuehler vorne rechts Kontinuitaet |
| 0x24 | Drehzahlfuehler vorne rechts Anfahrerkennung |
| 0x25 | Ueberwachung ABS Auslass Ventil ueber Drehzahlfuehler vorne rechts |
| 0x31 | Drehzahlfuehler hinten links Triggersignal |
| 0x32 | Drehzahlfuehler hinten links Kontinuitaet |
| 0x34 | Drehzahlfuehler hinten links Anfahrerkennung |
| 0x35 | Ueberwachung ABS Auslass Ventil ueber Drehzahlfuehler hinten links |
| 0x41 | Drehzahlfuehler hinten rechts Triggersignal |
| 0x42 | Drehzahlfuehler hinten rechts Kontinuitaet |
| 0x44 | Drehzahlfuehler hinten rechts Anfahrerkennung |
| 0x45 | Ueberwachung ABS Auslass Ventil ueber Drehzahlfuehler hinten rechts |
| 0x51 | ABS Einlass Ventil vorne links |
| 0x52 | ABS Einlass Ventil vorne rechts |
| 0x53 | ABS Einlass Ventil hinten links |
| 0x54 | ABS Einlass Ventil hinten rechts |
| 0x55 | ABS Auslass Ventil vorne links |
| 0x56 | ABS Auslass Ventil vorne rechts |
| 0x57 | ABS Auslass Ventil hinten links |
| 0x58 | ABS Auslass Ventil hinten rechts |
| 0x61 | ASC Sonderventil 1 |
| 0x67 | Bremslichtschalter |
| 0x71 | Pumpenmotor, Ventilblock, Kabelbaum |
| 0x73 | Steuergeraete Fehler |
| 0x76 | Steuergeraete Fehler, Einstreuung Drehzahlfuehler |
| 0x78 | Bordnetzspannung > 18 Volt |
| 0x81 | Hauptrelais im Steuergeraet |
| 0x82 | REF-Spannungsfehler |
| 0x83 | Ventilleckstrom |
| 0x85 | Ventilspule, Ueberspannung |
| 0x91 | Interner Fehler CAN-Controller |
| 0x92 | CAN Bus Fehler |
| 0x93 | CAN DME/DDE unplausible Daten |
| 0x94 | CAN DME/DDE, Motormoment nicht einstellbar |
| 0x95 | CAN Timeout DME/DDE |
| 0x96 | CAN Timeout EGS |
| 0x97 | Codierfehler |
| 0x98 | ASC Taster |
| 0xXY | unbekannter Fehlerort |

### FUMWELTMATRIX

| ORT | UW_ANZ | UW1_NR | UW1_A | UW2_NR | UW3_NR |
| --- | --- | --- | --- | --- | --- |
| 0x11 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x12 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x14 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x15 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x21 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x22 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x24 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x25 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x31 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x32 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x34 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x35 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x41 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x42 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x44 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x45 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x51 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x52 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x53 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x54 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x55 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x56 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x57 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x58 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x61 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x67 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x71 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x73 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x76 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x78 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x81 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x82 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x83 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x85 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x91 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x92 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x93 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x94 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x95 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x96 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x97 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0x98 | 0x03 | 0x00 | 10 | 0x01 | 0x02 |
| 0xXY | 0x03 | 0x00 | 10 | 0x01 | 0x02 |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH |
| --- | --- | --- |
| 0x00 | Fahrzeuggeschwindigkeit | km/h |
| 0x01 | Regelung | - |
| 0x02 | BLS | - |
| 0xXY | unbekannte Umweltbedingung | XY |

### STEUERN

| STEUER_I_O | BYTE | BITWERT |
| --- | --- | --- |
| EVVL | 0 | 0x01 |
| AVVL | 0 | 0x02 |
| EVVR | 0 | 0x04 |
| AVVR | 0 | 0x08 |
| EVHL | 0 | 0x10 |
| AVHL | 0 | 0x20 |
| EVHR | 0 | 0x40 |
| AVHR | 0 | 0x80 |
| Pumpe | 1 | 0x01 |
| B_ASC | 1 | 0x04 |
| B_MSR | 1 | 0x08 |
| XYZ | 1 | 0xFF |
| SV1 | 2 | 0x01 |
| XYZ | 2 | 0xFF |

### RAEDER

| RAD_NAME | ADRESSE |
| --- | --- |
| VL | 0x81 |
| VR | 0x82 |
| HL | 0x83 |
| HR | 0x84 |

### TRIGGERSCHWELLE

| TRIG_WERT | TRIG_HEX | USS |
| --- | --- | --- |
| 0 | 0x00 | 100 |
| 1 | 0x01 | 125 |
| 2 | 0x02 | 150 |
| 3 | 0x03 | 200 |
| 4 | 0x04 | 250 |
| 5 | 0x05 | 300 |
| 6 | 0x06 | 375 |
| 7 | 0x07 | 475 |
| 8 | 0x08 | 600 |
| 9 | 0x09 | 750 |
| A | 0x0A | 925 |
| B | 0x0B | 1175 |
| C | 0x0C | 1450 |
| D | 0x0D | 1450 |
| E | 0x0E | 1450 |
| F | 0x0F | 1450 |

### SPANNUNGSWERTE

| HEX | U_IGN | U_REF | U_PUM |
| --- | --- | --- | --- |
| 0x00 | 0-1.5 | 0-0.8 | 0-1.2 |
| 0x01 | 0.9-2.6 | 0.5-1.4 | 0.8-2.2 |
| 0x02 | 2.1-3.8 | 1.1-2.0 | 1.8-3.3 |
| 0x03 | 3.2-5.0 | 1.7-2.7 | 2.8-4.3 |
| 0x04 | 4.4-6.1 | 2.4-3.3 | 3.8-5.3 |
| 0x05 | 5.6-7.3 | 3.0-3.9 | 4.8-6.3 |
| 0x06 | 6.8-8.5 | 3.6-4.5 | 5.8-7.3 |
| 0x07 | 7.9-9.7 | 4.2-5.2 | 6.8-8.3 |
| 0x08 | 9.1-10.8 | 4.9-5.8 | 7.8-9.3 |
| 0x09 | 10.3-12.0 | 5.5-6.4 | 8.8-10.3 |
| 0x0A | 11.4-13.2 | 6.1-7.0 | 9.8-11.3 |
| 0x0B | 12.6-14.3 | 6.7-7.7 | 10.8-12.3 |
| 0x0C | 13.8-15.5 | 7.4-8.3 | 11.8-13.3 |
| 0x0D | 15.0-16.7 | 8.0-8.9 | 12.8-14.3 |
| 0x0E | 16.1-17.9 | 8.6-9.5 | 13.8-15.3 |
| 0x0F | 17.3-18.8 | 9.2-10.0 | 14.8-16.1 |

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
| 0xFF | unbekannter Hersteller |
