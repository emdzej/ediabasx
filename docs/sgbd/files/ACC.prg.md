# ACC.prg

## General

|  |  |
| --- | --- |
| File | ACC.prg |
| Type | PRG |
| Jobs | 25 |
| Tables | 9 |
| Origin | BMW EE-232 Dr. Sauer |
| Revision | 2.2 |
| Author | BMW TI-433 Huber, BMW EE-232 Dr. Sauer |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Radar-Tempomat ACC |  |  |
| ORIGIN | string | BMW EE-232 Dr. Sauer |  |  |
| REVISION | string | 2.02 |  |  |
| AUTHOR | string | BMW TI-433 Huber, BMW EE-232 Dr. Sauer |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information bzgl. SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung / Kommunikationsparameter fuer ACC automatischer Aufruf beim ersten Zugriff auf die SGBD

_No arguments._

### START_MODUS

Starten eines Diagnose-Modus fuer ACC

| Name | Type | Description |
| --- | --- | --- |
| MODUS | string | gewuenschter Diagnose-Modus table DiagModus MODUS MODUS_TEXT |

### STOP_MODUS

Stop des aktuellen Diagnose-Modus fuer ACC

_No arguments._

### IDENT

Ident-Daten fuer ACC Modus: Default

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen

_No arguments._

### OTL_DATEN_RESET

Ruecksetzen der OTL-Daten

_No arguments._

### FS_LESEN

Fehlerspeicher lesen

_No arguments._

### CODIERDATEN_LESEN

Lesen der Codierdaten

_No arguments._

### STATUS_RADARZIEL

Radarziel auslesen Modus: Default

| Name | Type | Description |
| --- | --- | --- |
| D_MIN | int | 0...150 m |
| D_MAX | int | 0...150 m |
| V_MIN | int | -60 m/s ... 60 m/s |
| V_MAX | int | -60 m/s ... 60 m/s |

### STATUS_RADARZIEL_ONLINE

Radarziel waehrend der Fahrt auslesen Modus: Default

_No arguments._

### STATUS_JUSTAGEDATEN

Justagedaten lesen Modus: ECUAdjustmentMode (ECU)

_No arguments._

### STATUS_JUSTAGEDATEN_NEU

Justagedaten lesen, auszuwertende Spektrallinie frei waehlbar Modus: ECUAdjustmentMode (ECU)

| Name | Type | Description |
| --- | --- | --- |
| SPEKTRALLINIE | int | Nummer der auszuwertenden Spektrallinie |

### SPU_DYNAMISCH_LESEN

Lesen von Dejustage und Verschmutzungsinformationen

_No arguments._

### SPU_SCHREIBEN

Dynamische Daten SPU schreiben Modi: Default

| Name | Type | Description |
| --- | --- | --- |
| DEJUHOR_WINK | int | normierter horizontaler Dejustagewinkel |
| DEJUHOR_PLAUS | int | Plausibilitaet des horizontalen Dejustagewinkels |
| DEJUVER_WINK | int | normierter vertikaler Dejustagewinkel |
| DEJUVER_PLAUS | int | Plausibilitaet des vertikalen Dejustagewinkels |
| STATUS_VERSCHMUTZ | int | Status der Verschmutzungserkennung |

### SPU_DYN_DATEN_RESET

Reset der Dynamischen Daten SPU Modi: Default

_No arguments._

### SCHALTER_EOL_EIN

Sonderfunktionen fuer Bandende aktivieren Modi: Default

_No arguments._

### SCHALTER_EOL_AUS

Sonderfunktionen fuer Rollenpruefstand deaktivieren Modi: Default

_No arguments._

### RPU_DYNAMISCH_LESEN

Dynamische RPU-Daten lesen

_No arguments._

### OPERATION_CONSTRAINTS_LESEN

Operation-Constraints lesen

_No arguments._

### SW_RESET

Ausloesen eines SW_Resets

_No arguments._

### PRUEFSTEMPEL_LESEN

Lesen des Pruefstempels

_No arguments._

### PRUEFSTEMPEL_SCHREIBEN

Schreiben des Pruefstempels

| Name | Type | Description |
| --- | --- | --- |
| PRUEFSTEMP_WERT1 | string | Pruefstempel Byte1 |
| PRUEFSTEMP_WERT2 | string | Pruefstempel Byte2 |
| PRUEFSTEMP_WERT3 | string | Pruefstempel Byte3 |

### JUSTAGEKENNLINIE_LESEN

Auslesen der Steilheiten der vertikalen und horizontalen Justagekennlinien im linearen Bereich Modus: Default

_No arguments._

### SUCHE_PROGRAMMBLOCKFEHLER

durchsucht den Historyspeicher nach dem Programmblockfehler RB-Codes: 0x3002, 0x3003, 0x3081 oder 0x3084

_No arguments._

## Tables

### DIAGMODUS

| NR | MODUS | MODUS_TEXT |
| --- | --- | --- |
| 0x82 | PT | Periodic-Transmission |
| 0x87 | ECU | ECUAdjustmentMode |
| 0xFA | RB | RB-Werk |
| 0x86 | E | Entwicklung |
| 0xXY | -- | unbekannter Diagnose-Modus |

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0xXY | OKAY |
| 0x00 | ERROR_ECU_RESERVED_BY_DOCUMENT |
| 0x10 | ERROR_ECU_GENERAL_REJECT |
| 0x11 | ERROR_ECU_SERVICE_NOT_SUPPORTED |
| 0x12 | ERROR_ECU_SUBFUNCTION_NOT_SUPPORTED_INVALID_FORMAT |
| 0x21 | ERROR_ECU_BUSY_REPEAT_REQUEST |
| 0x22 | ERROR_ECU_CONDITIONS_NOT_CORRECT_OR_REQUEST_SEQUENCE_ERROR |
| 0x23 | ERROR_ECU_ROUTINE_NOT_COMPLETE |
| 0x31 | ERROR_ECU_REQUEST_OUT_OF_RANGE |
| 0x33 | ERROR_ECU_SECURITY_ACCESS_DENIED_SECURITY_ACCESS_REQUESTED |
| 0x35 | ERROR_ECU_INVALID_KEY |
| 0x36 | ERROR_ECU_EXCEED_NUMBER_OF_ATTEMPTS |
| 0x37 | ERROR_ECU_REQUIRED_TIME_DELAY_NOT_EXPIRED |
| 0x40 | ERROR_ECU_DOWNLOAD_NOT_ACCEPTED |
| 0x41 | ERROR_ECU_IMPROPER_DOWNLOAD_TYPE |
| 0x42 | ERROR_ECU_CANNOT_DOWNLOAD_TO_SPECIFIED_ADDRESS |
| 0x43 | ERROR_ECU_CANNOT_DOWNLOAD_NUMBER_OF_BYTES_REQUESTED |
| 0x50 | ERROR_ECU_UPLOAD_NOT_ACCEPTED |
| 0x51 | ERROR_ECU_IMPROPER_UPLOAD_TYPE |
| 0x52 | ERROR_ECU_CANNOT_UPLOAD_FROM_SPECIFIED_ADDRESS |
| 0x53 | ERROR_ECU_CANNOT_UPLOAD_NUMBER_OF_BYTES_REQUESTED |
| 0x71 | ERROR_ECU_TRANSFER_SUSPENDED |
| 0x72 | ERROR_ECU_TRANSFER_ABORTED |
| 0x74 | ERROR_ECU_ILLEGAL_ADDRESS_IN_BLOCK_TRANSFER |
| 0x75 | ERROR_ECU_ILLEGAL_BYTE_COUNT_IN_BLOCK_TRANSFER |
| 0x76 | ERROR_ECU_ILLEGAL_BLOCK_TRANSFER_TYPE |
| 0x77 | ERROR_ECU_BLOCKTRANSFER_DATA_CHECKSUM_ERROR |
| 0x78 | ERROR_ECU_REQ_CORRECTLY_RCVD_RSP_PENDING |
| 0x79 | ERROR_ECU_INCORRECT_BYTE_COUNT_DURING_BLOCK_TRANSFER |
| 0x80 | ERROR_ECU_SERVICE_NOT_SUPPORTED_IN_ACTIVE_DIGNOSTICMODE |
| 0xF9 | ERROR_ECU_VEHICLE_MANUFACTURER_SPECIFIC |
| 0xFE | ERROR_ECU_SYSTEM_SUPPLIER_SPECIFIC |
| 0xFF | ERROR_ECU_RESERVED_BY_DOCUMENT |
| 0xXY | ERROR_ECU_UNKNOWN_STATUSBYTE |

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
| 0x5D0C | Steuergeraetefehler |
| 0x5D0D | Steuergeraetefehler: Botschaftsplausibilitaet |
| 0x5D0E | Betriebsspannung |
| 0x5D0F | Fehler Linsenheizung |
| 0x5D10 | Plausibilitaet Applikationsparameter |
| 0x5D11 | HW-Fehler CAN |
| 0x5D12 | Abweichender CAN-Stand |
| 0x5D13 | Sensor blind |
| 0x5D14 | Sensor dejustiert |
| 0x5D15 | Fehler Bremspedal |
| 0x5D16 | ACC-relevanter Fehler Motorsteuerung |
| 0x5D17 | ACC-relevanter Fehler DSC |
| 0x5D18 | ACC-relevanter Fehler DSC-Gierrate |
| 0x5D19 | ACC-relevanter Fehler ECD |
| 0x5D1A | ACC-relevanter Fehler Kombi |
| 0x5D1B | ACC-relevanter Fehler EGS |
| 0x5D1C | CAN-Timeout Motorsteuerung |
| 0x5D1D | CAN-Timeout DSC |
| 0x5D1E | CAN-Timeout Kombi |
| 0x5D1F | CAN-Timeout EGS |
| 0x5D20 | Fehler CAN-Daten Motorsteuerung |
| 0x5D21 | Fehler CAN-Daten DSC |
| 0x5D22 | Fehler CAN-Daten Kombi |
| 0x5D23 | Fehler CAN-Daten EGS |
| 0x5D24 | Fehler CAN-Daten DSC-Gierrate |
| 0x5D25 | Temperaturabschaltung SCU |
| 0x5D26 | Fehler Programmblock 1 |
| 0x5D27 | ACC Sicherheitsabschaltung Bremsueberhitzung |
| 0x5D28 | Fehler Umsetzung Beschleunigungssollwert im Antriebsfall |
| 0x5D29 | Fehler Umsetzung Beschleunigungssollwert im Bremsfall |
| 0xXY | unbekannter Fehlerort |

### FARTTEXTE

| ART | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x01 | Wert oberhalb Schwelle |
| 0x02 | Wert unterhalb Schwelle |
| 0x04 | kein Signal |
| 0x08 | unplausibles Signal |
| 0x10 | Testbedingung erfuellt |
| 0x20 | Fehler momentan nicht vorhanden, aber bereits gespeichert |
| 0x40 | Fehler momentan vorhanden, aber noch nicht gespeichert (Entprellphase) |
| 0x60 | Fehler momentan vorhanden und bereits gespeichert |
| 0xXY | unbekannte Fehlerart |

### FUMWELTTEXTE

| UWNR | UWTEXT | UW_EINH |
| --- | --- | --- |
| 0x01 | Kilometerstand | km |
| 0x02 | Betriebsstundenzaehler | Stunden |
| 0x03 | Aussentemperatur | Grad C |
| 0x04 | SCU-Innentemperatur | Grad C |
| 0x05 | Betriebsspannung | Volt |
| 0x06 | Dejustagegrad des Sensors | 0-n |
| 0x07 | Linsenheizung | 0/1 |
| 0x08 | Linse | 0/1 |
| 0x09 | Abschaltung durch SPU (CANSTOP) | 0/1 |
| 0x0A | verwendeter Flash-Block: | 0/1 |
| 0xXY | unbekannte Umweltbedingung | ? |

### ACTCON

| CODE | TEXT |
| --- | --- |
| 0x01 | Motormindestdrehzahl unterschritten |
| 0x02 | Mindestaktivierungsgeschwindigkeit unterschritten |
| 0x04 | mind. eine der Operation Constraints verletzt |
| 0x08 | mind. eine der Switch Off Constraints verletzt |
| 0x10 | externe Aktivierungsbedingung verletzt |
| 0xXY |  |

### OPCON

| CODE | TEXT |
| --- | --- |
| 0x01 | Handbremse aktiv |
| 0x02 | Niedriger Reibwert erkannt |
| 0x04 | Mindestfunktionsgeschwindigkeit unterschritten |
| 0x08 | Brake Only Abschaltreaktion |
| 0x10 | externe Funktionsbedingung verletzt |
| 0x20 | Linse verschmutzt |
| 0xXY |  |

### SWOFFCON

| CODE | TEXT |
| --- | --- |
| 0x01 | Hauptschalter nicht aktiv |
| 0x02 | Abschaltgrenzgeschwindigkeit unterschritten |
| 0x04 | Bremspedal betaetigt |
| 0x08 | kein gueltiger Vorwaertsgang |
| 0x10 | Harte Abschaltreaktion |
| 0x20 | externe Abschaltbedingung |
| 0xXY |  |
