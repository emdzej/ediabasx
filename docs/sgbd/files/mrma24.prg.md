# mrma24.prg

## General

|  |  |
| --- | --- |
| File | mrma24.prg |
| Type | PRG |
| Jobs | 38 |
| Tables | 12 |
| Origin | I+ME Actia GmbH, Keck |
| Revision | 1.040 |
| Author | I+ME Actia GmbH, Keck und BMW Motorrad, Kufer |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Motronic MA2.4 |  |  |
| ORIGIN | string | I+ME Actia GmbH, Keck |  |  |
| REVISION | string | 1.040 |  |  |
| AUTHOR | string | I+ME Actia GmbH, Keck und BMW Motorrad, Kufer |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.52 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### START_KOMMUNIKATION

_No description._

_No arguments._

### STOP_KOMMUNIKATION

_No description._

_No arguments._

### STEUERN_DEINIT_KLINE_KOMMUNIKATION

Beendet eine laufende K-Line Kommunikation

_No arguments._

### FS_LOESCHEN

Fehlerspeicher Löschen

_No arguments._

### FS_LESEN

Fehlerspeicher lesen (alle Fehler)

_No arguments._

### FS_LESEN_DETAIL

Fehlerspeicher lesen (ein Fehler)

| Name | Type | Description |
| --- | --- | --- |
| F_CODE | string | gewählter Fehlercode als Hex Zahl |

### IDENT

Identdaten 

_No arguments._

### STATUS_DKA_ANFANGSPOSITION

_No description._

_No arguments._

### STATUS_DKA_ENDPOSITION

_No description._

_No arguments._

### STATUS_UBATT

Batteriespannung auslesen

_No arguments._

### STATUS_TEMPERATUR_LUFT

Temperaturfühler Luft auslesen

_No arguments._

### STATUS_TEMPERATUR_MOTOR

Temperaturfühler Motor auslesen

_No arguments._

### STATUS_LAMBDA_WERT

Lambda Wert auslesen

_No arguments._

### STATUS_DROSSELKLAPPE

Drosselklappe auslesen

_No arguments._

### STATUS_LUFTDRUCK

Luftdruck auslesen

_No arguments._

### STATUS_DREHZAHL

Motordrehzahl auslesen

_No arguments._

### STATUS_EINSPRITZZEIT

Einsritzzeit auslesen

_No arguments._

### STATUS_ZUENDWINKEL

Zündwinkel auslesen

_No arguments._

### STATUS_SCHLIESSZEIT

Zündung Schliesszeit auslesen

_No arguments._

### STATUS_SCHLIESSWINKEL

Zündung Schliesswinkel auslesen

_No arguments._

### STATUS_DIGITAL

_No description._

_No arguments._

### MOTOR_VARIANTE

Motorrad Variante auslesen

_No arguments._

### STEUERN_HALLSENSOR_START

StartRoutineByLocalIdentifier, Service 0x31

_No arguments._

### STEUERN_HALLSENSOR_STOP

StopRoutineByLocalIdentifier, Service 0x32

_No arguments._

### STEUERN_HALLSENSOR_RESULT

RequestRoutineResultsByLocalIdentifier, Service 0x33

_No arguments._

### STEUERN_RELAIS_KRAFTSTOFFPUMPE_EIN

Kraftstoffpumpe einschalten

_No arguments._

### STEUERN_RELAIS_KRAFTSTOFFPUMPE_AUS

Kraftstoffpumpe ausschalten

_No arguments._

### STEUERN_DKA_ANFANGSPOSITION_EIN

Drosselklappe Anfangsposition einschalten

_No arguments._

### STEUERN_DKA_ANFANGSPOSITION_AUS

Drosselklappe Anfangsposition ausschalten

_No arguments._

### STEUERN_LUEFTERMOTOR_EIN

Lüfter einschalten

_No arguments._

### STEUERN_LUEFTERMOTOR_AUS

Lüfter ausschalten

_No arguments._

### STEUERN_DKA_ENDPOSITION_EIN

Drosselklappe Endposition einschalten

_No arguments._

### STEUERN_DKA_ENDPOSITION_AUS

Drosselklappe Endposition ausschalten

_No arguments._

### DIAGNSOE_MODE_EIN

Diagnose Mode einschalten (Motorstart Unterdrückung)

_No arguments._

### DIAGNSOE_MODE_AUS

Diagnose Mode ausschalten (Motorstart Unterdrückung)

_No arguments._

### SECURITY_ACCESS

SG für erweiterte Diagnose freischalten Security Access (0x27)

_No arguments._

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | OKAY |
| 0x01 | FEHLER |
| 0x02 | FEHLER: ARGUMENTE |
| 0x03 | FEHLER: AUSSERHALB BEREICH |
| 0x04 | FEHLER: ZUGRIFF VERWEIGERT |
| 0x05 | FEHLER: FORMATFEHLER DATEN (NICHT HEX) |
| 0x06 | FEHLER: PAUSENZEIT ZU GERING |
| 0x07 | FEHLER: SG BEREITS FREIGESCHALTET |
| 0x08 | OKAY: SG FREIGESCHALTET |
| 0x09 | FEHLER: FREISCHALTUNG FEHLGESCHLAGEN |
| 0x0A | FEHLER: FALSCHER KEY |
| 0x0B | FEHLER: MAXIMALE ANZAHL DER VERSUCHE ERREICHT |
| 0xFF | FEHLER: UNBEKANNT |

### DIGITALARGUMENT

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | AUS |
| 0x01 | EIN |
| 0xFF | UNBEKANNT |

### DIGITALARGUMENTAKTIV

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | NICHT AKTIV |
| 0x01 | AKTIV |
| 0xFF | UNBEKANNT |

### HALLSENSOR

| WERT | STATUS_TEXT | STATUS_TEXT_ENGLISH |
| --- | --- | --- |
| 0x00 | Hallsignal ist aktiv zwischen 43°KW und 6°KW vor OT | Hallsignal is activ between 43°CS and 6°CS before TDC (Top Dead Center) |
| 0x01 | Hallsignal ist aktiv zwischen 131°KW und 174°KW nach OT | Hallsignal is activ between 131°CS and 174°CS after TDC |
| 0x03 | Hallsignal ist inaktiv in allen anderen Bereichen | Hallsignal is inactive in all other areas |
| 0xFF | UNBEKANNT | UNBEKANNT |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x011001 | Temperaturfühler Luft, Unterbrechung oder Kurzschluss nach Plus |
| 0x011002 | Temperaturfühler Luft, Kurzschluss nach Masse |
| 0x011000 | Temperaturfühler Luft |
| 0x011500 | Temperaturfühler Motor |
| 0x012000 | Drosselklappen-Potentiometer |
| 0x013000 | Lambdasonde |
| 0x113000 | Lambda-Regelung |
| 0x113100 | CO-Poti |
| 0x017000 | Lambda-Regelung |
| 0x033500 | Signal Hallgeber 1 fehlt |
| 0x038500 | Signal Hallgeber 2 fehlt |
| 0x050500 | Leerlauf-Regelung |
| 0x150500 | Leerlaufschalter |
| 0x150600 | Leerlaufschalter, Unterbrechung seit Zündung Ein |
| 0x060400 | Interner Steuergerätefehler |
| 0xFFFF00 | unbekannter Fehler |

### FARTTEXTE

| ART | ARTTEXT |
| --- | --- |
| 0x00 |  |
| 0x01 | Unterbrechung oder Kurzschluss nach Plus |
| 0x02 | Kurzschluss nach Masse |
| 0x03 | Fehler auf Schleifbahn |
| 0x04 | kein Signal |
| 0x08 | Signal unplausibel |
| 0x20 | NICHT VORHANDEN |
| 0x21 | SPORADISCH |
| 0x22 | MOMENTAN VORHANDEN |
| 0x23 | MOMENTAN VORHANDEN |
| 0xFF | UNBEKANNT |

### FREADYTEXTE

| WERT | TEXT |
| --- | --- |
| 0x00 | Test vollständig |
| 0x01 | Test unvollständig |

### FEHLERSTATUS

| WERT | STATUS_TEXT |
| --- | --- |
| 0x00 | NICHT VORHANDEN |
| 0x01 | SPORADISCH |
| 0x02 | MOMENTAN VORHANDEN |
| 0x03 | MOMENTAN VORHANDEN |
| 0xFF | UNBEKANNT |

### FWARNLAMPETEXTE

| WERT | TEXT |
| --- | --- |
| 0x00 | Aus |
| 0x01 | Ein |

### FORTUMRECH

| DEZ | HEX | TEXT |
| --- | --- | --- |
| 272 | 110 | Temperaturfühler Luft |
| 277 | 115 | Temperaturfühler Motor |
| 288 | 120 | Drosselklappen-Potentiometer |
| 304 | 130 | Lambdasonde |
| 4400 | 1130 | Lambda-Regelung |
| 4401 | 1131 | CO-Poti |
| 368 | 170 | Lambda-Regelung |
| 821 | 335 | Signal Hallgeber 1 fehlt |
| 901 | 385 | Signal Hallgeber 2 fehlt |
| 1285 | 505 | Leerlauf-Regelung |
| 5381 | 1505 | Leerlaufschalter |
| 5382 | 1506 | Leerlaufschalter |
| 1540 | 604 | Interner Steuergerätefehler |
| 110 | 110 | Temperaturfühler Luft |
| 115 | 115 | Temperaturfühler Motor |
| 120 | 120 | Drosselklappen-Potentiometer |
| 130 | 130 | Lambdasonde |
| 1130 | 1130 | Lambda-Regelung |
| 1131 | 1131 | CO-Poti |
| 170 | 170 | Lambda-Regelung |
| 335 | 335 | Signal Hallgeber 1 fehlt |
| 385 | 385 | Signal Hallgeber 2 fehlt |
| 505 | 505 | Leerlauf-Regelung |
| 1505 | 1505 | Leerlaufschalter |
| 1506 | 1506 | Leerlaufschalter |
| 604 | 604 | Interner Steuergerätefehler |
|  | FF | Keine Fehler gefunden |

### TEMPERATURLUFT

| HEX | WERT |
| --- | --- |
| 0x0 | 131,0 |
| 0x1 | 130,9 |
| 0x2 | 130,8 |
| 0x3 | 130,6 |
| 0x4 | 130,5 |
| 0x5 | 130,4 |
| 0x6 | 130,3 |
| 0x7 | 130,1 |
| 0x8 | 130,0 |
| 0x9 | 125,0 |
| 0xA | 122,5 |
| 0xB | 120,0 |
| 0xC | 115,0 |
| 0xD | 110,0 |
| 0xE | 107,5 |
| 0xF | 105,0 |
| 0x10 | 102,5 |
| 0x11 | 100,0 |
| 0x12 | 97,5 |
| 0x13 | 95,0 |
| 0x14 | 93,3 |
| 0x15 | 91,7 |
| 0x16 | 90,0 |
| 0x17 | 88,3 |
| 0x18 | 86,7 |
| 0x19 | 85,0 |
| 0x1A | 83,3 |
| 0x1B | 81,7 |
| 0x1C | 80,0 |
| 0x1D | 78,8 |
| 0x1E | 77,5 |
| 0x1F | 76,3 |
| 0x20 | 75,0 |
| 0x21 | 74,0 |
| 0x22 | 73,0 |
| 0x23 | 72,0 |
| 0x24 | 71,0 |
| 0x25 | 70,0 |
| 0x26 | 69,0 |
| 0x27 | 68,0 |
| 0x28 | 67,0 |
| 0x29 | 66,0 |
| 0x2A | 65,0 |
| 0x2B | 64,2 |
| 0x2C | 63,3 |
| 0x2D | 52,5 |
| 0x2E | 61,7 |
| 0x2F | 60,8 |
| 0x30 | 60,0 |
| 0x31 | 59,2 |
| 0x32 | 58,3 |
| 0x33 | 57,5 |
| 0x34 | 56,6 |
| 0x35 | 55,8 |
| 0x36 | 55,0 |
| 0x37 | 54,4 |
| 0x38 | 53,8 |
| 0x39 | 53,1 |
| 0x3A | 52,5 |
| 0x3B | 51,9 |
| 0x3C | 51,3 |
| 0x3D | 50,6 |
| 0x3E | 50,0 |
| 0x3F | 49,4 |
| 0x40 | 48,8 |
| 0x41 | 48,1 |
| 0x42 | 47,5 |
| 0x43 | 46,9 |
| 0x44 | 46,3 |
| 0x45 | 45,6 |
| 0x46 | 45,0 |
| 0x47 | 44,4 |
| 0x48 | 43,9 |
| 0x49 | 43,3 |
| 0x4A | 42,8 |
| 0x4B | 42,2 |
| 0x4C | 41,7 |
| 0x4D | 41,1 |
| 0x4E | 40,6 |
| 0x4F | 40,0 |
| 0x50 | 39,5 |
| 0x51 | 39,1 |
| 0x52 | 38,6 |
| 0x53 | 38,2 |
| 0x54 | 37,7 |
| 0x55 | 37,3 |
| 0x56 | 36,8 |
| 0x57 | 36,4 |
| 0x58 | 35,9 |
| 0x59 | 35,5 |
| 0x5A | 35,0 |
| 0x5B | 34,5 |
| 0x5C | 34,1 |
| 0x5D | 33,6 |
| 0x5E | 33,2 |
| 0x5F | 32,7 |
| 0x60 | 32,3 |
| 0x61 | 31,8 |
| 0x62 | 31,4 |
| 0x63 | 30,9 |
| 0x64 | 30,5 |
| 0x65 | 30,0 |
| 0x66 | 29,6 |
| 0x67 | 29,2 |
| 0x68 | 28,8 |
| 0x69 | 28,3 |
| 0x6A | 27,9 |
| 0x6B | 27,5 |
| 0x6C | 27,1 |
| 0x6D | 26,7 |
| 0x6E | 26,3 |
| 0x6F | 25,8 |
| 0x70 | 25,4 |
| 0x71 | 25,0 |
| 0x72 | 24,6 |
| 0x73 | 24,2 |
| 0x74 | 23,8 |
| 0x75 | 23,3 |
| 0x76 | 22,9 |
| 0x77 | 22,5 |
| 0x78 | 22,1 |
| 0x79 | 21,7 |
| 0x7A | 21,3 |
| 0x7B | 20,8 |
| 0x7C | 20,4 |
| 0x7D | 20,0 |
| 0x7E | 19,6 |
| 0x7F | 19,2 |
| 0x80 | 18,8 |
| 0x81 | 18,5 |
| 0x82 | 18,1 |
| 0x83 | 17,7 |
| 0x84 | 17,3 |
| 0x85 | 16,9 |
| 0x86 | 16,5 |
| 0x87 | 16,2 |
| 0x88 | 15,8 |
| 0x89 | 15,4 |
| 0x8A | 15,0 |
| 0x8B | 14,6 |
| 0x8C | 14,3 |
| 0x8D | 13,9 |
| 0x8E | 13,6 |
| 0x8F | 13,2 |
| 0x90 | 12,9 |
| 0x91 | 12,5 |
| 0x92 | 12,1 |
| 0x93 | 11,8 |
| 0x94 | 11,4 |
| 0x95 | 11,1 |
| 0x96 | 10,7 |
| 0x97 | 10,4 |
| 0x98 | 10,0 |
| 0x99 | 9,6 |
| 0x9A | 9,2 |
| 0x9B | 8,8 |
| 0x9C | 8,5 |
| 0x9D | 8,1 |
| 0x9E | 7,7 |
| 0x9F | 7,3 |
| 0xA0 | 6,9 |
| 0xA1 | 6,5 |
| 0xA2 | 6,2 |
| 0xA3 | 5,8 |
| 0xA4 | 5,4 |
| 0xA5 | 5,0 |
| 0xA6 | 4,6 |
| 0xA7 | 4,2 |
| 0xA8 | 3,8 |
| 0xA9 | 3,3 |
| 0xAA | 2,9 |
| 0xAB | 2,5 |
| 0xAC | 2,1 |
| 0xAD | 1,7 |
| 0xAE | 1,3 |
| 0xAF | 0,8 |
| 0xB0 | 0,0 |
| 0xB1 | 0,0 |
| 0xB2 | -0,4 |
| 0xB3 | -0,8 |
| 0xB4 | -1,3 |
| 0xB5 | -1,7 |
| 0xB6 | -2,1 |
| 0xB7 | -2,5 |
| 0xB8 | -2,9 |
| 0xB9 | -3,3 |
| 0xBA | -3,8 |
| 0xBB | -4,2 |
| 0xBC | -4,6 |
| 0xBD | -5,0 |
| 0xBE | -5,5 |
| 0xBF | -5,9 |
| 0xC0 | -6,4 |
| 0xC1 | -6,8 |
| 0xC2 | -7,3 |
| 0xC3 | -7,7 |
| 0xC4 | -8,2 |
| 0xC5 | -8,6 |
| 0xC6 | -9,1 |
| 0xC7 | -9,5 |
| 0xC8 | -10,0 |
| 0xC9 | -10,5 |
| 0xCA | -11,0 |
| 0xCB | -11,5 |
| 0xCC | -12,0 |
| 0xCD | -12,5 |
| 0xCE | -13,0 |
| 0xCF | -13,5 |
| 0xD0 | -14,0 |
| 0xD1 | -14,5 |
| 0xD2 | -15,0 |
| 0xD3 | -15,6 |
| 0xD4 | -16,1 |
| 0xD5 | -16,7 |
| 0xD6 | -17,2 |
| 0xD7 | -17,8 |
| 0xD8 | -18,3 |
| 0xD9 | -18,9 |
| 0xDA | -19,4 |
| 0xDB | -20,0 |
| 0xDC | -20,7 |
| 0xDD | -21,4 |
| 0xDE | -22,1 |
| 0xDF | -22,9 |
| 0xE0 | -23,6 |
| 0xE1 | -24,3 |
| 0xE2 | -25,0 |
| 0xE3 | -25,7 |
| 0xE4 | -26,4 |
| 0xE5 | -27,1 |
| 0xE6 | -27,9 |
| 0xE7 | -28,6 |
| 0xE8 | -29,3 |
| 0xE9 | -30,0 |
| 0xEA | -31,0 |
| 0xEB | -32,0 |
| 0xEC | -33,0 |
| 0xED | -34,0 |
| 0xEE | -34,0 |
| 0xEF | -36,3 |
| 0xF0 | -37,5 |
| 0xF1 | -38,8 |
| 0xF2 | -40,0 |
| 0xF3 | -40,1 |
| 0xF4 | -40,1 |
| 0xF5 | -40,2 |
| 0xF6 | -40,3 |
| 0xF7 | -40,4 |
| 0xF8 | -40,4 |
| 0xF9 | -40,5 |
| 0xFA | -40,6 |
| 0xFB | -40,6 |
| 0xFC | -40,7 |
| 0xFD | -40,8 |
| 0xFE | -40,9 |
| 0xFF | -40,9 |

### TEMPERATURMOTOR

| HEX | WERT |
| --- | --- |
| 0x0 | -- |
| 0x1 | -- |
| 0x2 | -- |
| 0x3 | -- |
| 0x4 | -- |
| 0x5 | -- |
| 0x6 | 196,3 |
| 0x7 | 187,9 |
| 0x8 | 179,5 |
| 0x9 | 173,4 |
| 0xA | 167,3 |
| 0xB | 162,5 |
| 0xC | 157,6 |
| 0xD | 153,6 |
| 0xE | 149,5 |
| 0xF | 146,2 |
| 0x10 | 142,9 |
| 0x11 | 140,1 |
| 0x12 | 137,2 |
| 0x13 | 134,7 |
| 0x14 | 132,2 |
| 0x15 | 129,9 |
| 0x16 | 127,7 |
| 0x17 | 125,6 |
| 0x18 | 123,5 |
| 0x19 | 121,6 |
| 0x1A | 119,7 |
| 0x1B | 118,1 |
| 0x1C | 116,4 |
| 0x1D | 114,8 |
| 0x1E | 113,2 |
| 0x1F | 111,7 |
| 0x20 | 110,2 |
| 0x21 | 108,8 |
| 0x22 | 107,4 |
| 0x23 | 106,2 |
| 0x24 | 105,0 |
| 0x25 | 103,8 |
| 0x26 | 102,5 |
| 0x27 | 101,3 |
| 0x28 | 100,1 |
| 0x29 | 99,0 |
| 0x2A | 97,8 |
| 0x2B | 96,8 |
| 0x2C | 95,7 |
| 0x2D | 94,7 |
| 0x2E | 93,6 |
| 0x2F | 92,7 |
| 0x30 | 91,7 |
| 0x31 | 90,8 |
| 0x32 | 89,9 |
| 0x33 | 89,0 |
| 0x34 | 88,1 |
| 0x35 | 87,2 |
| 0x36 | 86,3 |
| 0x37 | 85,5 |
| 0x38 | 84,7 |
| 0x39 | 83,9 |
| 0x3A | 83,1 |
| 0x3B | 83,3 |
| 0x3C | 81,5 |
| 0x3D | 80,8 |
| 0x3E | 80,1 |
| 0x3F | 79,3 |
| 0x40 | 78,6 |
| 0x41 | 77,9 |
| 0x42 | 77,2 |
| 0x43 | 76,5 |
| 0x44 | 75,8 |
| 0x45 | 75,1 |
| 0x46 | 74,5 |
| 0x47 | 73,8 |
| 0x48 | 73,1 |
| 0x49 | 72,5 |
| 0x4A | 71,9 |
| 0x4B | 71,2 |
| 0x4C | 70,6 |
| 0x4D | 70,0 |
| 0x4E | 69,4 |
| 0x4F | 68,8 |
| 0x50 | 68,2 |
| 0x51 | 67,6 |
| 0x52 | 67,1 |
| 0x53 | 66,5 |
| 0x54 | 65,9 |
| 0x55 | 65,3 |
| 0x56 | 64,8 |
| 0x57 | 64,2 |
| 0x58 | 63,6 |
| 0x59 | 63,0 |
| 0x5A | 62,5 |
| 0x5B | 62,0 |
| 0x5C | 61,4 |
| 0x5D | 60,9 |
| 0x5E | 60,4 |
| 0x5F | 59,8 |
| 0x60 | 59,3 |
| 0x61 | 58,8 |
| 0x62 | 58,3 |
| 0x63 | 57,8 |
| 0x64 | 57,3 |
| 0x65 | 56,8 |
| 0x66 | 56,3 |
| 0x67 | 55,7 |
| 0x68 | 55,2 |
| 0x69 | 54,8 |
| 0x6A | 54,3 |
| 0x6B | 53,9 |
| 0x6C | 53,4 |
| 0x6D | 52,9 |
| 0x6E | 52,4 |
| 0x6F | 51,9 |
| 0x70 | 51,4 |
| 0x71 | 50,9 |
| 0x72 | 50,4 |
| 0x73 | 49,9 |
| 0x74 | 49,4 |
| 0x75 | 48,9 |
| 0x76 | 48,5 |
| 0x77 | 48,0 |
| 0x78 | 47,5 |
| 0x79 | 47,0 |
| 0x7A | 46,6 |
| 0x7B | 46,2 |
| 0x7C | 45,7 |
| 0x7D | 45,2 |
| 0x7E | 44,8 |
| 0x7F | 44,3 |
| 0x80 | 43,8 |
| 0x81 | 43,3 |
| 0x82 | 42,9 |
| 0x83 | 42,4 |
| 0x84 | 41,9 |
| 0x85 | 41,5 |
| 0x86 | 41,0 |
| 0x87 | 40,5 |
| 0x88 | 40,1 |
| 0x89 | 39,7 |
| 0x8A | 39,3 |
| 0x8B | 38,8 |
| 0x8C | 38,4 |
| 0x8D | 38,0 |
| 0x8E | 37,5 |
| 0x8F | 37,0 |
| 0x90 | 36,6 |
| 0x91 | 36,1 |
| 0x92 | 35,7 |
| 0x93 | 35,3 |
| 0x94 | 34,8 |
| 0x95 | 34,3 |
| 0x96 | 33,9 |
| 0x97 | 33,5 |
| 0x98 | 33,0 |
| 0x99 | 32,5 |
| 0x9A | 32,1 |
| 0x9B | 31,7 |
| 0x9C | 31,2 |
| 0x9D | 30,7 |
| 0x9E | 30,3 |
| 0x9F | 29,8 |
| 0xA0 | 29,3 |
| 0xA1 | 28,8 |
| 0xA2 | 28,4 |
| 0xA3 | 27,9 |
| 0xA4 | 27,4 |
| 0xA5 | 26,9 |
| 0xA6 | 26,5 |
| 0xA7 | 26,0 |
| 0xA8 | 25,5 |
| 0xA9 | 25,0 |
| 0xAA | 24,6 |
| 0xAB | 24,1 |
| 0xAC | 23,6 |
| 0xAD | 23,1 |
| 0xAE | 22,7 |
| 0xAF | 22,2 |
| 0xB0 | 21,7 |
| 0xB1 | 21,2 |
| 0xB2 | 20,7 |
| 0xB3 | 20,2 |
| 0xB4 | 19,8 |
| 0xB5 | 19,3 |
| 0xB6 | 18,8 |
| 0xB7 | 18,2 |
| 0xB8 | 17,7 |
| 0xB9 | 17,2 |
| 0xBA | 16,7 |
| 0xBB | 16,1 |
| 0xBC | 15,6 |
| 0xBD | 15,1 |
| 0xBE | 14,6 |
| 0xBF | 14,0 |
| 0xC0 | 13,5 |
| 0xC1 | 12,9 |
| 0xC2 | 12,4 |
| 0xC3 | 11,9 |
| 0xC4 | 11,3 |
| 0xC5 | 10,7 |
| 0xC6 | 10,2 |
| 0xC7 | 9,6 |
| 0xC8 | 9,0 |
| 0xC9 | 8,4 |
| 0xCA | 7,8 |
| 0xCB | 7,2 |
| 0xCC | 6,6 |
| 0xCD | 6,0 |
| 0xCE | 5,3 |
| 0xCF | 4,7 |
| 0xD0 | 4,1 |
| 0xD1 | 3,4 |
| 0xD2 | 2,7 |
| 0xD3 | 2,0 |
| 0xD4 | 1,3 |
| 0xD5 | 0,6 |
| 0xD6 | -0,1 |
| 0xD7 | -0,9 |
| 0xD8 | -1,6 |
| 0xD9 | -2,4 |
| 0xDA | -3,2 |
| 0xDB | -4,0 |
| 0xDC | -4,8 |
| 0xDD | -5,7 |
| 0xDE | -6,6 |
| 0xDF | -7,4 |
| 0xE0 | -8,3 |
| 0xE1 | -9,3 |
| 0xE2 | -10,3 |
| 0xE3 | -11,2 |
| 0xE4 | -12,2 |
| 0xE5 | -13,3 |
| 0xE6 | -14,5 |
| 0xE7 | -15,6 |
| 0xE8 | -16,8 |
| 0xE9 | -18,2 |
| 0xEA | -19,5 |
| 0xEB | -20,9 |
| 0xEC | -22,3 |
| 0xED | -24,1 |
| 0xEE | -25,9 |
| 0xEF | -27,7 |
| 0xF0 | -29,5 |
| 0xF1 | -31,7 |
| 0xF2 | -- |
| 0xF3 | -- |
| 0xF4 | -- |
| 0xF5 | -- |
| 0xF6 | -- |
| 0xF7 | -- |
| 0xF8 | -- |
| 0xF9 | -- |
| 0xFA | -- |
| 0xFB | -- |
| 0xFC | -- |
| 0xFD | -- |
| 0xFE | -- |
| 0xFF | -- |
