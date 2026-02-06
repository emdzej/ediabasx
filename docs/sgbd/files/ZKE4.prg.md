# ZKE4.prg

## General

|  |  |
| --- | --- |
| File | ZKE4.prg |
| Type | PRG |
| Jobs | 16 |
| Tables | 6 |
| Origin | BMW TP-421 Gerd Huber |
| Revision | 1.6 |
| Author | BMW TP-421 Gerd Huber |
| ECU Comment | Ansteuern nur bei entsichertem Fahrzeug! |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Zentrale Karosserie-Elektronik IV  fuer E36 |  |  |
| ORIGIN | string | BMW TP-421 Gerd Huber |  |  |
| REVISION | string | 1.06 |  |  |
| AUTHOR | string | BMW TP-421 Gerd Huber |  |  |
| COMMENT | string | Ansteuern nur bei entsichertem Fahrzeug! |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Info fuer Anwender

_No arguments._

### INITIALISIERUNG

Init-Job fuer Grundmodul IV automatischer Aufruf beim ersten Zugriff auf SGBD

_No arguments._

### IDENT

Ident-Daten fuer GM IV

_No arguments._

### FS_LESEN

Fehlerspeicher lesen Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

| Name | Type | Description |
| --- | --- | --- |
| LOESCHDATUM_KW | int | aktuelle Kalenderwoche beim Loeschen des Fehlerspeichers |
| LOESCHDATUM_JAHR | int | aktuelles Kalemderjahr beim Loeschen des Fehlerspeichers |

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### SLEEP_MODE

SG in Sleep-Mode versetzen

_No arguments._

### PRUEFSTEMPEL_LESEN

Auslesen des Pruefstempels

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Beschreiben des Pruefstempels

| Name | Type | Description |
| --- | --- | --- |
| BYTE1 | int | kann beliebig verwendet werden |
| BYTE2 | int | kann beliebig verwendet werden |
| BYTE3 | int | kann beliebig verwendet werden |

### HERSTELLDATEN_LESEN

Auslesen der Herstelldaten

_No arguments._

### STATUS_DIGITAL

Status der Digitalsignale des GM IV (Ein-/Ausgaenge)

_No arguments._

### STATUS_ANALOG

Status der Analogsignale des GM IV

_No arguments._

### STEUERN_DIGITAL

Ansteuern eines digitalen Ein- oder Ausgangs v. GM4

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table BITS NAME ART TEXT |
| EIN | int | '1', wenn einschalten / '0', wenn ausschalten |

### COD_LESEN

Auslesen der Codierdaten des GM IV (Block 0)

_No arguments._

### INFOSPEICHER_LESEN

Infospeicher lesen Info-Speicher ist im Aufbau identisch dem Fehlerspeicher Low-Konzept nach Lastenheft Codierung/Diagnose

_No arguments._

### STEUERN_SIMULTAN

Gleichzeitiges Ansteuern maximal 5 digitaler Signale des GM4 !!! ACHTUNG: ZKE IV antwortet nicht !!! ??? !!!

| Name | Type | Description |
| --- | --- | --- |
| ORT1 | string | gewuenschte Komponente Auswahl siehe JOB STEUERN_DIGITAL_.. |
| ORT2 | string | gewuenschte Komponente Auswahl siehe JOB STEUERN_DIGITAL_.. |
| ORT3 | string | gewuenschte Komponente Auswahl siehe JOB STEUERN_DIGITAL_.. |
| ORT4 | string | gewuenschte Komponente Auswahl siehe JOB STEUERN_DIGITAL_.. |
| ORT5 | string | gewuenschte Komponente Auswahl siehe JOB STEUERN_DIGITAL_.. |

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
| 0x01 | Reinshagen |
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
| 0xXY | unbekannter Hersteller |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x01 | Sicherung Innenbeleuchtung, Verbraucherabschaltung, Tuerschlossheizung |
| 0x02 | Sicherung Zentralverriegelung |
| 0x03 | Sicherung Fensterheber vorne |
| 0x04 | Leitung Klemme R fehlt |
| 0x05 | Leitung Klemme 15 fehlt |
| 0x06 | Leitung Klemme 31L fehlt |
| 0x28 | Codierung GM IV EEPROM |
| 0x29 | GM IV EEPROM |
| 0x2A | Kurzschluss oder Leitung Innenraumbeleuchtung |
| 0x2B | Unterbrechung oder Leitung Verbraucherabschaltung |
| 0x2C | Kurzschluss oder Leitung Verbraucherabschaltung |
| 0x2D | Unterbrechung oder Leitung Tuerschlossheizung |
| 0x2E | Kurzschluss oder Leitung Tuerschlossheizung |
| 0x08 | Crash-Sensor oder Verbindung ZAE2 |
| 0x09 | ZS-Kontakt |
| 0x0A | FT: Aggregat oder Kurzschluss gegen U-Batt |
| 0x0B | FT: Aggregat oder Leitungsunterbrechung |
| 0x0C | BT: Aggregat oder Kurzschluss gegen U-Batt |
| 0x0D | BT: Aggregat oder Leitungsunterbrechung |
| 0x0E | HK: Aggregat oder Kurzschluss gegen U-Batt |
| 0x0F | HK: Aggregat oder Leitungsunterbrechung |
| 0x30 | Relaiskleber Signal MER nach Masse |
| 0x31 | Relaiskleber Signal MER nach U-Batt |
| 0x32 | Relaiskleber Signal MVR nach Masse |
| 0x33 | Relaiskleber Signal MVR nach U-Batt |
| 0x34 | Relaiskleber Signal MZS nach Masse |
| 0x35 | Relaiskleber Signal MZS nach U-Batt |
| 0x11 | Leitungen IGFV, IGBV Kurzschluss nach Masse oder Impulsgeber FH-Motor |
| 0x36 | GM IV: Relaiskleber Signal MFFA nach Masse |
| 0x37 | GM IV: Relaiskleber Signal MFFA nach U-Batt |
| 0x38 | GM IV: Relaiskleber Signal MFFZ nach Masse |
| 0x39 | GM IV: Relaiskleber Signal MFFZ nach U-Batt |
| 0x3A | GM IV: Relaiskleber Signal MFBA nach Masse |
| 0x3B | GM IV: Relaiskleber Signal MFBA nach U-Batt |
| 0x3C | GM IV: Relaiskleber Signal MFBZ nach Masse |
| 0x3D | GM IV: Relaiskleber Signal MFBZ nach U-Batt |
| 0x3E | Thermoschalter FH FT angesprochen oder Motor Impulsgeber |
| 0x3F | Thermoschalter FH BT angesprochen oder Motor Impulsgeber |
| 0x12 | FH-Motor Fahrer hinten: Thermo-Sicherung, FH-Motor oder Leitungen |
| 0x13 | Leitung IFFH Kurzschluss gegen Masse oder RM IV |
| 0x14 | RM IV Relaiskleber nach U-Batt oder Leitung IFFH Kurzschluss gegen Masse |
| 0x15 | FH-Motor Beifahrer hinten: Thermo-Sicherung, FH-Motor oder Leitungen |
| 0x16 | Leitung IFBH Kurzschluss gegen Masse oder RM IV |
| 0x17 | RM IV Relaiskleber nach U-Batt oder Leitung IFBH Kurzschluss gegen Masse |
| 0x18 | RM IV oder Leitung RFFHA Unterbrechung oder Kurzschluss gegen Masse |
| 0x19 | RM IV oder Leitung RFFHA Kurzschluss gegen U-Batt |
| 0x1A | RM IV oder Leitung RFBHA Unterbrechung oder Kurzschluss gegen Masse |
| 0x1B | RM IV oder Leitung RFBHA Kurzschluss gegen U-Batt |
| 0x1C | RM IV oder Leitung RFFHZ Unterbrechung oder Kurzschluss gegen Masse |
| 0x1D | RM IV oder Leitung RFFHZ Kurzschluss gegen U-Batt |
| 0x1E | RM IV oder Leitung RFBHZ Unterbrechung oder Kurzschluss gegen Masse |
| 0x1F | RM IV oder Leitung RFBHZ Kurzschluss gegen U-Batt |
| 0x42 | FH-Motor Fahrer hinten blockiert oder Mechanik schwergaengig |
| 0x43 | FH-Motor Beifahrer hinten blockiert oder Mechanik schwergaengig |
| 0x22 | CVM oder Leitung SFBHA2, SFBHZ2 Kurzschluss gegen Masse > 0,5 sec |
| 0x23 | Crash-Alarm-Geber oder Leitung OA Kurzschluss gegen U-Batt |
| 0x24 | DWA-LED oder Leitung DWAL Kurzschluss gegen U-Batt |
| 0x25 | DWA-LED oder Leitung DWAL Unterbrechung oder Kurzschluss gegen Masse |
| 0x26 | DWA-Relais oder Leitung RDWA Kurzschluss gegen U-Batt |
| 0x27 | Neigungsgeber oder Innenraumschutz oder Leitung NGAG/ISAG Kurzschluss gegen U-Batt |
| 0x44 | Neigungsgeber, Sicherung oder Leitung |
| 0x45 | Innenraumschutz, Sicherung oder Leitung |
| 0xXY | unbekannter Fehlerort |

### FARTTEXTE

| ART | ARTTEXT |
| --- | --- |
| 0x00 | sporadischer Fehler |
| 0x01 | statischer Fehler |

### IORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x80 | Klemme R |
| 0x81 | Klemme 15 |
| 0x82 | Klemme 50 |
| 0x83 | Tuerkontakt FT |
| 0x84 | Tuerkontakt BT |
| 0x85 | Tuerkontakt FTH |
| 0x86 | Tuerkontakt BTH / Entriegelung Verdeck |
| 0x87 | Heckklappenkontakt |
| 0x88 | Handschuhfachkontakt |
| 0x89 | Motorhaubenkontakt |
| 0x8A | Neigungsgeber |
| 0x8B | Heckscheibe |
| 0x8C | Scheibenueberwachung FT |
| 0x8D | Scheibenueberwachung BT |
| 0x8E | Scheibenueberwachung FTH |
| 0x8F | Scheibenueberwachung BTH |
| 0x90 | Innenraumschutz |
| 0x91 | Manipulation Aggregat FT |
| 0x92 | Manipulation Aggregat BT |
| 0x93 | Manipulation Aggregat HK |
| 0x94 | Reserve-Eingang RES6 |
| 0x95 | Reserve-Eingang RES1 |
| 0x96 | Panik-Mode |
| 0xA0 | Wiederholsperre ZV angesprochen |
| 0xA1 | Crash wurde ausgeloest |
| 0xA2 | BC hat DWA-Horn angesteuert / Leitung RDWA oder Relais fehlt |
| 0xA3 | Power-On-Reset (Batterie oder GM IV abgeklemmt) |
| 0xB0 | Watchdog-Reset (Software GM IV oder EMV-Stoerung) |
| 0xB1 | Illegal Opcode-Reset (EMV-Stoerung oder ROM GM IV defekt) |
| 0xB2 | Clock-Monitor-Reset (GM IV Oszillator defekt oder GM IV Platine verschmutzt/feucht) |
| 0xXY | unbekannter Info-Ort |

### BITS

| NAME | BYTE | MASK | VALUE | ART | TEXT |
| --- | --- | --- | --- | --- | --- |
| VR1 | 0 | 0x01 | 0x01 | E | Verriegeln FT |
| ER1 | 0 | 0x02 | 0x02 | E | Entriegeln FT |
| VR2 | 0 | 0x04 | 0x04 | E | Verriegeln BT |
| ER2 | 0 | 0x08 | 0x08 | E | Entriegeln BT |
| VR3 | 0 | 0x10 | 0x10 | E | Verriegeln HK |
| ER3 | 0 | 0x20 | 0x20 | E | Entriegeln HK |
| IRA | 0 | 0x40 | 0x40 | E | ZV-Fernbedienung Signal A |
| IRB | 0 | 0x80 | 0x80 | E | ZV-Fernbedienung Signal B |
| ZS | 1 | 0x01 | 0x01 | E | Zentralsichern |
| KL15 | 1 | 0x02 | 0x02 | E | Klemme 15 |
| KL58 | 1 | 0x04 | 0x04 | E | Klemme 58 |
| KL50 | 1 | 0x08 | 0x08 | E | Klemme 50 |
| KLR | 1 | 0x10 | 0x10 | E | Klemme R |
| TZV | 1 | 0x20 | 0x20 | E | Taster ZV (Reserve) |
| RES1 | 1 | 0x40 | 0x40 | E | Reserve 1 |
| RES2 | 1 | 0x80 | 0x80 | E | Reserve 2 |
| DRFA | 2 | 0x01 | 0x01 | E | Diagnose-Relais FH Fahrer auf |
| KL30ZV | 2 | 0x02 | 0x02 | E | Klemme 30 Zentralverriegelung |
| DRBA | 2 | 0x04 | 0x04 | E | Diagnose-Relais FH Beifahrer auf |
| KL30IB | 2 | 0x08 | 0x08 | E | Klemme 30 Innenlicht |
| DRVR | 2 | 0x10 | 0x10 | E | Diagnose-Relais ZV verriegeln |
| DRER | 2 | 0x20 | 0x20 | E | Diagnose-Relais ZV entriegeln |
| DRZS | 2 | 0x40 | 0x40 | E | Diagnose-Relais ZV sichern |
| KL30FH | 2 | 0x80 | 0x80 | E | Klemme 30 Fensterheber |
| SFFA | 3 | 0x01 | 0x01 | E | FH-Schalter Fahrer auf |
| SFFZ | 3 | 0x02 | 0x02 | E | FH-Schalter Fahrer zu |
| SFBA | 3 | 0x04 | 0x04 | E | FH-Schalter Beifahrer auf |
| SFBZ | 3 | 0x08 | 0x08 | E | FH-Schalter Beifahrer zu |
| KISI | 3 | 0x10 | 0x10 | E | Kindersicherung FH-Schalter hinten |
| RES3 | 3 | 0x20 | 0x20 | E | Reserve 3 (EKS-Leiste Fahrer hinten) |
| RES4 | 3 | 0x40 | 0x40 | E | Reserve 4 (EKS-Leiste Beifahrer hinten) |
| RES5 | 3 | 0x80 | 0x80 | E | Reserve 5 |
| SFFHA | 4 | 0x01 | 0x01 | E | FH-Schalter Fahrer hinten auf |
| SFFHZ | 4 | 0x02 | 0x02 | E | FH-Schalter Fahrer hinten zu |
| SFBHA | 4 | 0x04 | 0x04 | E | FH-Schalter Beifahrer hinten auf |
| SFBHZ | 4 | 0x08 | 0x08 | E | FH-Schalter Beifahrer hinten zu |
| SFFHA2 | 4 | 0x10 | 0x10 | E | SFFH hinten auf (E36/C: FH Zentral auf) |
| SFFHZ2 | 4 | 0x20 | 0x20 | E | SFFH hinten zu (E36/C: FH Zentral zu) |
| SFBHA2 | 4 | 0x40 | 0x40 | E | SFBH hinten auf (E36/C: CVM: alle FH auf) |
| SFBHZ2 | 4 | 0x80 | 0x80 | E | SFBH hinten zu (E36/C: CVM: alle FH zu) |
| HKK | 5 | 0x01 | 0x01 | E | Heckklappenkontakt |
| MHK | 5 | 0x02 | 0x02 | E | Motorhaubenkontakt |
| HFK | 5 | 0x04 | 0x04 | E | Handschuhfachkontakt |
| TGFT | 5 | 0x08 | 0x08 | E | Tuergriff Fahrertuer |
| TKFT | 5 | 0x10 | 0x10 | E | Tuerkontakt Fahrertuer |
| TKBT | 5 | 0x20 | 0x20 | E | Tuerkontakt Beifahrertuer |
| TKFH | 5 | 0x40 | 0x40 | E | Tuerkontakt Fahrertuer hinten (E36/C: Verdeckklappe) |
| TKBH | 5 | 0x80 | 0x80 | E | Tuerkontakt Beifahrertuer hinten (E36/C: Verdeck entriegeln) |
| NGEG | 6 | 0x01 | 0x01 | E | Eingang Neigungsgeber |
| SUEF | 6 | 0x02 | 0x02 | E | Scheibenueberwachung Fahrer bzw. INRS |
| SUEB | 6 | 0x04 | 0x04 | E | Scheibenueberwachung Beifahrer |
| SUEBH | 6 | 0x08 | 0x08 | E | Scheibenueberwachung Beifahrer hinten |
| RES6 | 6 | 0x10 | 0x10 | E | Reserve 6 |
| ZS22 | 6 | 0x20 | 0x20 | E | zusaetzliches Signal Ferbedienung (Panik) |
| SUEFH | 6 | 0x40 | 0x40 | E | Scheibenueberwachung Fahrer hinten |
| SUEHS | 6 | 0x80 | 0x80 | E | Scheibenueberwachung Heckscheibe |
| DRDWA | 7 | 0x01 | 0x01 | E | Diagnose-Relais DWA-Horn |
| DRFFHA | 7 | 0x02 | 0x02 | E | Diagnose-Relais FFH auf |
| DRFBHA | 7 | 0x04 | 0x04 | E | Diagnose-Relais FBH auf |
| DRFFHZ | 7 | 0x08 | 0x08 | E | Diagnose-Relais FFH zu |
| DRFBHZ | 7 | 0x10 | 0x10 | E | Diagnose-Relais FBH zu |
| DOA | 7 | 0x20 | 0x20 | E | Diagnose Optischer Alarm |
| DDWAL | 7 | 0x40 | 0x40 | E | Diagnose DWA-LED |
| DNGAG | 7 | 0x80 | 0x80 | E | Diagnose Neigungsgeber |
| IGFA | 8 | 0x01 | 0x01 | E | Impulsgeber FH-Motor Fahrer A |
| IGBA | 8 | 0x04 | 0x04 | E | Impulsgeber FH-Motor Beifahrer A |
| CS | 8 | 0x80 | 0x80 | E | Crash-Sensor |
| DIB | 9 | 0x01 | 0x01 | E | Diagnose IB |
| DVA | 9 | 0x02 | 0x02 | E | Diagnose VA |
| DTSH | 9 | 0x04 | 0x04 | E | Diagnose TSH |
| RDWA | 10 | 0x01 | 0x01 | A | Relais DWA-Horn |
| RFFHA | 10 | 0x02 | 0x02 | A | FH-Relais Fahrer hinten auf |
| RFBHA | 10 | 0x04 | 0x04 | A | FH-Relais Beifahrer hinten auf |
| RFFHZ | 10 | 0x08 | 0x08 | A | FH-Relais Fahrer hinten zu |
| RFBHZ | 10 | 0x10 | 0x10 | A | FH-Relais Beifahrer hinten zu |
| OA | 10 | 0x20 | 0x20 | A | DWA: Optischer Alarm |
| DWAL | 10 | 0x40 | 0x40 | A | DWA-LED |
| NGAG | 10 | 0x80 | 0x80 | A | Ausgang Neigungsgeber |
| MFFA | 11 | 0x01 | 0x01 | A | FH-Motor Fahrer auf |
| MFFZ | 11 | 0x02 | 0x02 | A | FH-Motor Fahrer zu |
| MFBA | 11 | 0x04 | 0x04 | A | FH-Motor Beifahrer auf |
| MFBZ | 11 | 0x08 | 0x08 | A | FH-Motor Beifahrer zu |
| MVR | 11 | 0x10 | 0x10 | A | ZV-Motor verriegeln |
| MER | 11 | 0x20 | 0x20 | A | ZV-Motor entriegeln |
| MZS | 11 | 0x40 | 0x40 | A | ZV-Motor sichern |
| WFSI | 11 | 0x80 | 0x80 | A | Wegfahrsicherung Motronic |
| IB | 12 | 0x01 | 0x01 | A | Innenlicht |
| VA | 12 | 0x02 | 0x02 | A | Verbraucherabschaltung EIN |
| TSH | 12 | 0x04 | 0x04 | A | Tuerschlossheizung |
| KOE | 12 | 0x08 | 0x08 | A | Komfortoeffnen Verdeck |
| IGV | 12 | 0x10 | 0x10 | A | Versorgung Impulsgeber |
| RXD | 13 | 0x01 | 0x01 | A | Leitung RxD |
| TXD | 13 | 0x02 | 0x02 | A | Leitung TxD |
| KS | 13 | 0x04 | 0x04 | A | Komfortschliessen FH, SHD, Verdeck |
| WB | 13 | 0x08 | 0x08 | A | Crash-Warnblinken |
| FSHD | 13 | 0x10 | 0x10 | A | Freigabe SHD (Komfortrelais) |
| RESA1 | 13 | 0x20 | 0x20 | A | Reserve-Ausgang 1 |
| CSMODE | 14 | 0x01 | 0x01 | A | System im Crash-Mode |
| DIAGMOD | 14 | 0x02 | 0x02 | A | System im Diagnose-Mode |
| XY | XY | 0xXY | 0xXY | XY | nicht definiertes Signal |
