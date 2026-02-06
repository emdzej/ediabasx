# 07EMS2K.prg

## General

|  |  |
| --- | --- |
| File | 07EMS2K.prg |
| Type | PRG |
| Jobs | 29 |
| Tables | 4 |
| Origin | Rover EE-R-45 John Longvill |
| Revision | 0.72 |
| Author | Softing AG/BG5: AR,Le,Mw,Po |
| ECU Comment | P-SGBD fuer EMS2K |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | EMS2K |  |  |
| ORIGIN | string | Rover EE-R-45 John Longvill |  |  |
| REVISION | string | 0.72 |  |  |
| AUTHOR | string | Softing AG/BG5: AR,Le,Mw,Po |  |  |
| COMMENT | string | P-SGBD fuer EMS2K |  |  |
| PACKAGE | string | 0.40 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### INFO

Information SGBD

_No arguments._

### IDENT

Ident-Daten fuer EMS2K

_No arguments._

### AIF_LESEN

Auslesen des Anwender-Info-Feldes

| Name | Type | Description |
| --- | --- | --- |
| AIF_NUMMER | int | Nummer des zu lesenden AIF's >=1. 0 bedeutet aktuelles AIF, auf das ein freies AIF folgt |

### START_DIAGNOSTIC_SESSION

Begins a diagnostic session

| Name | Type | Description |
| --- | --- | --- |
| MODE | int | Diagnostic mode: 0x81=Standard, 0x83=EOL, 0x86=Development 0x85=Programming at 9.6k, 0xFF=Programming at 62.5k |

### START_DIAGNOSTIC_SESSION_HIGHBAUD

Begins a diagnostic session with fast baudrate

_No arguments._

### START_DIAGNOSTIC_SESSION_LOWBAUD

Begins a diagnostic session with low baudrate

_No arguments._

### STOP_DIAGNOSTIC_SESSION

Ends a diagnostic session

_No arguments._

### SG_RESET

Reset the ECU

_No arguments._

### SEED_KEY

Obtain security access to the ECU Schutzmechanismus SEED_KEY

| Name | Type | Description |
| --- | --- | --- |
| MODE | int | Security access mode Typ zugang 1 = breakdown, 3 = dealer, 5 = End of line 7 = programming, 9 = development |

### ACCESS_TIMING_PARAMETERS

Diagnosemode des SG beenden

_No arguments._

### FLASH_SCHREIBEN_ADRESSE

Request download

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Programmierdaten: enthalten Adressinfo |

### FLASH_SCHREIBEN

Transfer data to the ECU

| Name | Type | Description |
| --- | --- | --- |
| DATA | binary | Data to transfer to the ECU |

### FLASH_SCHREIBEN_ENDE

Exit data transfer

_No arguments._

### AIF_SCHREIBEN

Beschreiben des Anwender-Info-Feldes

| Name | Type | Description |
| --- | --- | --- |
| AIF_FG_NR | string | Fahrgestellnummer |
| AIF_DATUM | string | Fertigungsdatum |
| AIF_AENDERUNGS_INDEX | string | Aenderungsindex |
| AIF_SW_NR | string | Softwarenummer |
| AIF_BEHOERDEN_NR | string | Behoerdennummer |
| AIF_ZB_NR | string | Zusammenbaunummer |
| AIF_SERIEN_NR | string | Seriennummer |
| AIF_HAENDLER_NR | string | Haendlernummer |
| AIF_KM | string | Kilometerstand |
| AIF_PROG_NR | string | Programmstandsnummer |

### HWNR_SCHREIBEN

Write the current HwNr

| Name | Type | Description |
| --- | --- | --- |
| PROG_HWNR | string | Fahrgestellnummer VIN |

### STATUS_LESEN

Status

_No arguments._

### STATUS_CODIER_CHECKSUMME

Status

_No arguments._

### CHECK_REPROG_DEPENDING

Status

_No arguments._

### FLASH_LOESCHEN

Flash  - Zellen loeschen

| Name | Type | Description |
| --- | --- | --- |
| PROG_MODE | int | 1 = Daten, 2=Programm |

### BLOCKLAENGE_MAX

maximale Blocklaenge

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Programmierdaten: enthalten Adressinfo |

### FS_LOESCHEN

Clears All Faults

_No arguments._

### DATEN_REFERENZ

Job DATEN-Referenz

_No arguments._

### HW_REFERENZ

Job HW-Referenz

_No arguments._

### ZIF

Job ZIF

_No arguments._

### ZIF_BACKUP

Job ZIF_BACKUP

_No arguments._

### UPROG_LESEN

Programmierspannung auslesen

_No arguments._

### BAUDRATEN_LESEN

Baudratentabelle auslesen

| Name | Type | Description |
| --- | --- | --- |
| BAUDRATE_NUMMER | int | Nummer der zu lesenden Baudrate |

### TUNE_NR_SCHREIBEN

Write the tune part number

| Name | Type | Description |
| --- | --- | --- |
| TUNE_NR | string | Tune part number - 8 characters |

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0x10 | ERROR_ECU_GENERAL_REJECT |
| 0x11 | @SERVICE NOT SUPPORTED@ |
| 0x12 | @SUB-FUNCTION NOT SUPPORTED@ |
| 0x22 | @CONDITION NOT CORRECT@ |
| 0x31 | @REQUEST OUT OF RANGE@ |
| 0x33 | @SECURITY ACCESS DENIED / REQUIRED@ |
| 0x35 | @INVALID KEY@ |
| 0x36 | @EXCEEDED NUMBER OF ATTEMPTS@ |
| 0x37 | @REQUIRED TIME DELAY NOT EXPIRED@ |
| 0x40 | @DOWNLOAD NOT ACCEPTED@ |
| 0x41 | @IMPROPER DOWNLOAD TYPE@ |
| 0x42 | @CANNOT DOWNLOAD TO SPECIFIED ADDRESS@ |
| 0x50 | @UPLOAD NOT ACCEPTED@ |
| 0x52 | @CANNOT UPLOAD FROM SPECIFIED ADDRESS@ |
| 0x53 | @CANNOT UPLOAD NUMBER OF BYTES REQUESTED@ |
| 0x78 | @REQUEST CORRECTLY RECEIVED - RESPONSE PENDING@ |
| 0x79 | @INCORRECT BYTE COUNT DURING BLOCK TRANSFER@ |
| 0x80 | @SERVICE NOT SUPPORTED IN CURRENT DIAGNOSTIC MODE@ |
| 0x90 | @OPERATION NOT PERFORMED@ |
| 0x91 | @INCORRECT MESSAGE FORMAT@ |
| 0xA0 | OKAY |
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
| 0xFF | @unbekannter Hersteller@ |

### EWSSTART

| STATI | TEXT |
| --- | --- |
| 0x00 | EMS2K bereit, Startwert zu empfangen |
| 0x01 | kein freier Startwert mit Freigabe vorhanden |
| 0x02 | noch kein Startwert gespeichert |
| 0x03 | Startwert nicht plausibel (wie im DS2-LH definiert) |
| 0xXY | Fehlerhafter Status |

### EWSEMPFANGSSTATUS

| STATI | TEXT |
| --- | --- |
| 0x00 | Startwertprogrammierung bzw. -ruecksetzen war erfolgreich |
| 0x01 | falscher Startwert beim Ruecksetzen (EWS u. DME passen nicht zusammen)  |
| 0x02 | Telegramminhalt war kein Startwert (event. Wechselcode) |
| 0x03 | Schnittstellenfehler DWA: Frame o. Parity oder kein Signal (Timeout) |
| 0x04 | Prozess laeuft |
| 0x05 | Programmierung bzw. Ruecksetzen im Fahrzyklus noch nicht ausgefuehrt |
| 0x06 | gleiche Zufallszahl wie bei vorherigem Ruecksetzen trotz Weiterschaltung |
| 0x07 | noch kein Startwert programmiert |
| 0x10 | Startwert nicht korrekt in Flash programmiert |
| 0x11 | Wechselcode nicht korrekt in EEPROM-Spiegel programmiert |
| 0x12 | Zufallszahl nicht korrekt in EEPROM-Spiegel programmiert |
| 0x20 | Fehler bei Startwertprogrammierroutine |
| 0x21 | 2-aus-3-Startwertablage im Flash nicht in Ordnung |
| 0x22 | Ablage im EEPROM-Spiegel nicht in Ordnung |
| 0xXY | Fehlerhafter Status |
