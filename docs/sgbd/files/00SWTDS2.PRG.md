# 00SWTDS2.PRG

## General

|  |  |
| --- | --- |
| File | 00SWTDS2.PRG |
| Type | PRG |
| Jobs | 19 |
| Tables | 6 |
| Origin | BMW EE-21 Kalverkamp |
| Revision | 2.05 |
| Author | Secunet AG Fechtelhoff(mf) |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Spezial SGBD nur für SWT SG's |  |  |
| ORIGIN | string | BMW EE-21 Kalverkamp |  |  |
| REVISION | string | 2.05 |  |  |
| AUTHOR | string | Secunet AG Fechtelhoff(mf) |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.03 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### SWT_PARAMETER_LESEN

Gibt die SG-spezifischen SWT-Parameter zurück

_No arguments._

### SWT_PARAMETER_SETZEN

Setzt die SG-spezifischen SWT-Parameter

| Name | Type | Description |
| --- | --- | --- |
| SG_ADRESSE | int | Steuergeräteadresse |

### SOFTWARE_ID_LESEN

Software ID lesen DS2:     $1F SweepingTechnologies $F8 SWTGetSoftwareID

_No arguments._

### SOFTWARE_SIGNATURE_LESEN

Software Signature im SG lesen DS2:     $1F SweepingTechnologies $F7 SWTGetSigSID

_No arguments._

### STATUS_LESEN

Freischaltstatus einer Software lesen DS2: 	   $1F SweepingTechnologies $F6 SWTGetStatus

_No arguments._

### FREISCHALTCODE_LAENGE_SCHREIBEN

Freischaltcode einer Software in dem SG einbrechen DS2:     $1F SweepingTechnologies $F2 SWTSetFSCLength

| Name | Type | Description |
| --- | --- | --- |
| SW_ID | string | String hex Format 4 Bytes |
| FSC_LAENGE | unsigned int | 2 Bytes |

### FREISCHALTCODE_SCHREIBEN

Freischaltcode einer Software in dem SG einbrechen DS2:	   $1F SweepingTechnologies $F1 SWTStoreFSC

| Name | Type | Description |
| --- | --- | --- |
| FREISCHALTCODE | binary | 1023 Maxi Das erste Byte stellt den Index des gesendeten Telegramms dar  Die zwei naechsten Bytes stellen die CALL_ID dar und werden im data Format eingetragen ID Nummer bei SG geliefert verbindet die 2 Funktionen $F2 und $F1 |

### FREISCHALTCODE_PRUEFEN

Freischaltcode nach dem Einspielen prüfen DS2:     $1F SweepingTechnologies $EE SWTCheckFSC

| Name | Type | Description |
| --- | --- | --- |
| SW_ID | string | String hex Format 4 Bytes |

### FREISCHALTCODE_STORNIEREN

Freischaltcode als ungültig/storniert kennzeichnen DS2:     $1F SweepingTechnologies $ED SWTDisableFSC

| Name | Type | Description |
| --- | --- | --- |
| SW_ID | string | String hex Format 4 Bytes |

### FREISCHALTCODE_LAENGE_LESEN

Freischaltcode laenge lesen DS2:     $1F SweepingTechnologies $EC SWTGetFSCLength

| Name | Type | Description |
| --- | --- | --- |
| SW_ID | string | String hex Format 4 Bytes |

### FREISCHALTCODE_LESEN

Freischaltcode lesen DS2: 	   $1F SweepingTechnologies $EB SWTGetFSC

| Name | Type | Description |
| --- | --- | --- |
| TELEGRAMM_INDEX_AUFTRAG | unsigned int | 1 Byte Index des Telegramms, das an dem SG gesendet wird |
| CALL_ID | unsigned int | ID Nummer an das SG gesendet verbindet die 2 Funktionen $EC und $EB |

### PERIODISCHE_PRUEFUNG

Zertifikate, FSCs und SWSignaturen regelmässig prüfen DS2: 	   $1F SweepingTechnologies $EA SWTPeriodicalChecks

| Name | Type | Description |
| --- | --- | --- |
| SW_ID | string | String hex Format 4 Bytes |

### FINGER_PRINT_MECHANISMUS

Finger Print Mechanismus DS2: 	   $1F SweepingTechnologies $E9 SWTFingerPrintCheck

_No arguments._

### ZEIT_LESEN

Uhrzeit im Steuergeraet lesen DS2: 	   $1F SweepingTechnologies $E8 SWTGetTime

_No arguments._

### ZEIT_SCHREIBEN

Uhrzeit im Steuergeraet schreiben DS2: 	   $1F SweepingTechnologies $E7 SWTSetTime

| Name | Type | Description |
| --- | --- | --- |
| ZEIT | string | Direkt hintereinander schreiben 13 oder 17 Stellen 13 => XX...XXZ 17 = >XX...XX+XXXX 17 => XX...XX-XXXX |

### FAHRGESTELLNUMMER_LESEN

FGN lesen im Steuergeraet DS2: 	   $1F SweepingTechnologies $E6 SWTGetFZG

_No arguments._

### FAHRGESTELLNUMMER_SCHREIBEN

FGN schreiben im Steuergeraet DS2: 	   $1F SweepingTechnologies $E5 SWTSetFZG

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer 17 Bytes oder 7 Bytes |

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
| 0x72 | AISIN AW CO.LTD |
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
| 0x86 | META System |
| 0x87 | Hülsbeck & Fürst GmbH & Co KG |
| 0x88 | Mann & Hummel Automotive GmbH |
| 0x89 | Brose Fahrzeugteile GmbH & Co |
| 0x90 | Keihin |
| 0x91 | Vimercati S.p.A. |
| 0x92 | CRH |
| 0x93 | TPO Display Corp. |
| 0x94 | KÜSTER Automotive Control |
| 0x95 | Hitachi Automotive |
| 0x96 | Continental Automotive |
| 0x97 | TI-Automotive |
| 0x98 | Hydro |
| 0x99 | Johnson Controls |
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

### KONZEPT_TABELLE

| NR | KONZEPT_TEXT |
| --- | --- |
| 0x10 | D-CAN |
| 0x0F | BMW-FAST |
| 0x0D | KWP2000* |
| 0x0C | KWP2000 |
| 0x06 | DS2 |

### SWTSTATUSTAB

| SB | STATUS_TEXT |
| --- | --- |
| 0x00 | NICHT_VORHANDEN |
| 0x01 | EINGESPIELT |
| 0x02 | AKZEPTIERT |
| 0x03 | ABGELEHNT |
| 0x04 | STORNIERT |
| 0xXY | ERROR_ECU_UNKNOWN_STATUS_RESPONSE |

### SWTFEHLER_TAB

| SB | STATUS_TEXT |
| --- | --- |
| 0x31 | UNZULAESSIGER_WERTEBEREICH |
| 0xCC | SCHLUESSELABLEITUNG_NICHT_AKTIVIERT |
| 0xCD | KEYFAKTOR_NICHT_VORHANDEN |
| 0xCE | FSC_NICHT_MASKIERT |
| 0xCF | FSC_MASKIERT |
| 0xD0 | FSC_ERWEITERUNG_PRUEFUNG_SCHLUG_FEHL |
| 0xD1 | FSC_UNGUELTIG |
| 0xD2 | SW_ID_NICHT_VORHANDEN |
| 0xD3 | KEIN_SPEICHERPLATZ_MEHR_VORHANDEN |
| 0xD4 | FALSCHER_ZERTIFIKATSINHALT_UNBEKANNTES_CRIT-ELEMENT |
| 0xD5 | FALSCHER_FSC_INHALT |
| 0xD6 | FALSCHE_PARAMETER |
| 0xD7 | FSCS_ZERTIFIKAT_ABGELEHNT |
| 0xD8 | KEINE_DATEN_ZU_ANGEGEBENEM_SG_VORHANDEN |
| 0xD9 | KEINE_AUTHENTISIERUNG |
| 0xDA | FINGER_PRINT_MECHANISMUS_NOT_OK |
| 0xDB | SIGS_ID_UND_ZERTIFIKAT_PASSEN_NICHT_ZUSAMMEN |
| 0xDC | GUELTIGKEITS_PRUEFUNG_SCHLUG_FEHL |
| 0xDD | FAHRGESTELLNUMMER_FEHLERHAFT |
| 0xDE | FGN_PRUEFUNG_SCHLUG_FEHL |
| 0xDF | FLASH_LESEFEHLER |
| 0xE0 | FLASH_SCHREIBFEHLER |
| 0xE1 | FALSCHER_ZERTIFIKATSINHALT_KEY_USAGE |
| 0xE2 | FALSCHER_ZERTIFIKATSINHALT_ISSUER |
| 0xE3 | FALSCHER_ZERTIFIKATSINHALT_VALIDITY |
| 0xE4 | FSCS_ZERTIFIKAT_PRUEFUNG_SCHLUG_FEHL |
| 0xE5 | FSCS_ZERTIFIKAT_UNGUELTIG |
| 0xE6 | FSCS_ZERTIFIKAT_NOCH_NICHT_GEPRUEFT |
| 0xE7 | FSCS_ZERTIFIKAT_NICHT_VORHANDEN |
| 0xE8 | SIGS_ZERTIFIKAT_PRUEFUNG_SCHLUG_FEHL |
| 0xE9 | SIGS_ZERTIFIKAT_UNGUELTIG |
| 0xEA | SIGS_ZERTIFIKAT_NOCH_NICHT_GEPRUEFT |
| 0xEB | SIGS_ZERTIFIKAT_NICHT_VORHANDEN |
| 0xEC | ROOT_ZERTIFIKAT_UNGUELTIG |
| 0xED | ROOT_ZERTIFIKAT_STATUS_ABGELEHNT |
| 0xEE | ROOT_ZERTIFIKAT_FEHLERHAFT |
| 0xEF | ROOT_ZERTIFIKAT_NICHT_LESBAR |
| 0xF0 | ROOT_ZERTIFIKAT_NICHT_VORHANDEN |
| 0xF1 | ZERTIFIKAT_STATUS_ABGELEHNT |
| 0xF2 | ZERTIFIKAT_NICHT_VORHANDEN |
| 0xF3 | FSC_PRUEFUNG_SCHLUG_FEHL |
| 0xF4 | FSC_STORNIERT |
| 0xF5 | FSC_STATUS_ABGELEHNT |
| 0xF6 | FSC_NICHT_VORHANDEN |
| 0xF7 | FALSCHE_FSCS_ID_IM_FSC |
| 0xF8 | UNGUELTIGES_FSC_ERSTELLUNGSDDATUM |
| 0xF9 | SIGNATUR_PRUEFUNG_SCHLUG_FEHL |
| 0xFA | SW_SIGNATURPRUEFUNG_SCHLUG_FEHL |
| 0xFB | SW_SIG_STATUS_ABGELEHNT |
| 0xFC | SW_ID_PRUEFUNG_SCHLUG_FEHL |
| 0xFD | SW_NICHT_AKTIVIERT |
| 0xFE | SW_NICHT_EINGESPIELT |
| 0xFF | UNBEKANNTER_FEHLER |
| 0xXY | ERROR_ECU_UNKNOWN_NEGATIVE_RESPONSE |
