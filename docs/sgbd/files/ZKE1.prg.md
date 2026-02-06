# ZKE1.prg

## General

|  |  |
| --- | --- |
| File | ZKE1.prg |
| Type | PRG |
| Jobs | 20 |
| Tables | 4 |
| Origin | BMW ET-421 Gerd Huber |
| Revision | 1.13 |
| Author | Softing Taubert, BMW ET-421 Gerd Huber |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Zentrale Karosserie-Elektronik I |  |  |
| ORIGIN | string | BMW ET-421 Gerd Huber |  |  |
| REVISION | string | 1.13 |  |  |
| AUTHOR | string | Softing Taubert, BMW ET-421 Gerd Huber |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Info fuer Anwender

_No arguments._

### INITIALISIERUNG

Init-Job fuer ZKE I automatischer Aufruf beim ersten Zugriff auf SGBD

_No arguments._

### IDENT

Ident-Daten fuer ZKE I

_No arguments._

### FS_LESEN

Fehlerspeicher lesen

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### DIAGNOSE_ENDE

Diagnose beenden

_No arguments._

### STATUS_EINGAENGE_0

Status der digitalen Eingaenge des GM I (Gruppe 0)

_No arguments._

### STATUS_EINGAENGE_1

Status der digitalen Eingaenge des GM I (Gruppe 1)

_No arguments._

### STATUS_EINGAENGE_2

Status der digitalen Eingaenge des GM I (Gruppe 2)

_No arguments._

### STATUS_EINGAENGE_3

Status der digitalen Eingaenge des GM I (Gruppe 3)

_No arguments._

### STATUS_EINGAENGE_4

Status der digitalen Eingaenge des GM I (Gruppe 4)

_No arguments._

### STATUS_EINGAENGE_5

Status der digitalen Eingaenge des GM I (Gruppe 5)

_No arguments._

### STATUS_EINGAENGE_6

Status der digitalen Eingaenge des GM I (Gruppe 6)

_No arguments._

### STATUS_EINGAENGE_7

Status der digitalen Eingaenge des GM I (Gruppe 7)

_No arguments._

### STATUS_EINGAENGE_8

Status der digitalen Eingaenge des GM I (Gruppe 8)

_No arguments._

### STATUS_AUSGAENGE_0

Status der digitalen Ausgaenge des GM I (Gruppe 0)

_No arguments._

### STATUS_AUSGAENGE_1

Status der digitalen Ausgaenge des GM I (Gruppe 1)

_No arguments._

### STATUS_AUSGAENGE_2

Status der digitalen Ausgaenge des GM I (Gruppe 2)

_No arguments._

### STEUERN_EINGANG

Ansteuern eines digitalen Eingangs v. GM1 !!! ACHTUNG: Die ZKE1 antwortet nicht !!!

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table EINGANG NAME TEXT |
| EIN | int | '1', wenn einschalten / '0', wenn ausschalten |

### STEUERN_AUSGANG

Ansteuern eines digitalen Ausgangs v. GM1 !!! ACHTUNG: Die ZKE1 antwortet nicht !!!

| Name | Type | Description |
| --- | --- | --- |
| ORT | string | gewuenschte Komponente table AUSGANG NAME TEXT |
| EIN | int | '1', wenn einschalten / '0', wenn ausschalten |

## Tables

### FORTTEXTE

| ORT | SA | ORTTEXT |
| --- | --- | --- |
| 0x00 | 0x00 | unbekannter Fehlerort |
| 0x01 | 0x01 | SWS01 Stufe 1 u.Intervall |
| 0x02 | 0x01 | SWS03 Blockierschutz aktiv |
| 0x03 | 0x02 | ADV01 Blockierschutz aktiv |
| 0x04 | 0x02 | ADV02 ADV-Relais, Sicher. |
| 0x05 | 0x08 | ZV_01 ZV-Relais Sicherung |
| 0x06 | 0x08 | ZV_02 ZV-Relais Verriegel |
| 0x07 | 0x08 | ZV_03 ZV-Relais Entriegel |
| 0x08 | 0x10 | TSH   Tuerschlossheizung |
| 0x09 | 0x20 | SHD01 Rel-FH.Beift u S.hi |
| 0x0a | 0x20 | SHD02 Rel-FH.Beiftuer |
| 0x0b | 0x20 | SHD03 Rel-SHD |
| 0x0c | 0x20 | SHD04 Rel-FH.Beif.seite hi |
| 0x0d | 0x20 | SHD05 Rel-FH.Fahrerseite hi |
| 0x0e | 0x20 | SHD06 Rel-FH.Fahrertuer |
| 0x0f | 0x20 | SHD07 Rel-FH.Fahrerseite hi |
| 0x10 | 0x20 | SHD08 FH Fahrt Weg/Zeit |
| 0x11 | 0x20 | SHD09 FH Beift Weg/Zeit |
| 0x12 | 0x20 | SHD10 FH Beifs hi Weg/Zeit |
| 0x13 | 0x20 | SHD11 FH Fahrs hi Weg/Zeit |
| 0x14 | 0x20 | SHD12 SHD Weg/Zeit |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0 | Fehler momentan nicht vorhanden |
| 1 | Fehler momentan vorhanden |

### EINGANG

| NAME | BYTE | MASK | TEXT |
| --- | --- | --- | --- |
| VR1 | 0xE0 | 0x01 | Stiftkontakt VR1 |
| VR3 | 0xE0 | 0x02 | Stiftkontakt VR3 |
| VR2 | 0xE0 | 0x04 | Stiftkontakt VR2 |
| ER | 0xE0 | 0x08 | Stiftkontakt ER |
| ZS1 | 0xE0 | 0x10 | Schlosskontakt ZS1 |
| ZS2 | 0xE0 | 0x20 | Schlosskontakt ZS2 |
| VR | 0xE0 | 0x40 | Schlosskontakt VR |
| INT | 0xE1 | 0x01 | Intervallwischen |
| WASCH | 0xE1 | 0x02 | Waschen |
| WI1 | 0xE1 | 0x04 | Wischerstufe1 |
| KL15 | 0xE1 | 0x10 | Klemme 15 |
| KLR | 0xE1 | 0x20 | Klemme R |
| NSW | 0xE1 | 0x40 | Nebelscheinwerfer |
| SW | 0xE1 | 0x80 | Scheinwerfer |
| TKBT | 0xE2 | 0x01 | Tuerkontakt BT |
| TKFT | 0xE2 | 0x02 | Tuerkontakt FT |
| TKH | 0xE2 | 0x04 | Tuerkontakt hinten |
| TGK | 0xE2 | 0x08 | Tuergriffkontakt |
| KL50 | 0xE3 | 0x08 | Klemme 50 |
| SIR | 0xE3 | 0x80 | Scheibenintensiv-Reinigung |
| FHFHA | 0xE5 | 0x10 | Schalter FH-FH Auf |
| FHBTA | 0xE5 | 0x20 | Schalter FH-BT Auf |
| FHFTA | 0xE5 | 0x40 | Schalter FH-FT Auf |
| FHBHA | 0xE5 | 0x80 | Schalter FH-BH Auf |
| FHBHZ | 0xE6 | 0x10 | Schalter FH-BH |
| FHFHZ | 0xE6 | 0x20 | Schalter FH-FH |
| FHFTZ | 0xE6 | 0x40 | Schalter FH-FT |
| FHBTZ | 0xE6 | 0x80 | Schalter FH-BT |
| XY | 0xXY | 0xXY | nicht definiertes Signal |

### AUSGANG

| NAME | BYTE | MASK | TEXT |
| --- | --- | --- | --- |
| TSH | 0xF0 | 0x01 | Tuerschlossheizung |
| FHBTZ | 0xF0 | 0x02 | FH-BT, FH-BH Zu |
| FHBTA | 0xF0 | 0x04 | FH-BT Auf |
| FHBHA | 0xF0 | 0x10 | FH-BH Auf |
| FHFHA | 0xF0 | 0x20 | FH-FH Auf |
| FHFTA | 0xF0 | 0x40 | FH-FT Auf |
| WI1 | 0xF1 | 0x01 | Wischerstufe 1 |
| WP | 0xF1 | 0x02 | Waschpumpe |
| SRA_SW | 0xF1 | 0x04 | SRA-Pumpe Scheinwerfer |
| SRA_NS | 0xF1 | 0x08 | SRA-Pumpe Nebelscheinwerfer |
| IL | 0xF1 | 0x10 | Innenlicht |
| MZV+ | 0xF2 | 0x01 | Motor ZV+ |
| MZV- | 0xF2 | 0x02 | Motor ZV- |
| MZS | 0xF2 | 0x04 | Motor ZS |
| FST | 0xF2 | 0x40 | Signal 'Fahrzeug steht' |
| WB | 0xF2 | 0x80 | Warnblinker |
| XY | 0xXY | 0xXY | nicht definiertes Signal |
