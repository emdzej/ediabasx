# atcu.prg

## General

|  |  |
| --- | --- |
| File | atcu.prg |
| Type | PRG |
| Jobs | 21 |
| Tables | 5 |
| Origin | BMW TI-433 Mellersh |
| Revision | 0.3 |
| Author | BMW TI-433 Mellersh |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Automatik-Getriebesteuergeraet FPO ATCU |  |  |
| ORIGIN | string | BMW TI-433 Mellersh |  |  |
| REVISION | string | 0.03 |  |  |
| AUTHOR | string | BMW TI-433 Mellersh |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Init-Job fuer AGS

_No arguments._

### START_MODUS

Starten eines Diagnose-Modus fuer ECU

| Name | Type | Description |
| --- | --- | --- |
| MODUS | string | gewuenschter Diagnose-Modus table DiagModus MODUS MODUS_TEXT |

### STOP_MODUS

Stop des aktuellen Diagnose-Modus fuer ECU

_No arguments._

### TESTER_PRESENT

_No description._

_No arguments._

### SECURITY_ACCESS

_No description._

_No arguments._

### IDENT

Ident-Daten fuer AGS

_No arguments._

### AIF_LESEN

Auslesen des Anwender-Info-Feldes

_No arguments._

### FS_LESEN

Auslesen des Fehlerspeichers High-Konzept nach Lastenheft Codierung/Diagnose komplizierte Umweltbedingungen: analog, digital, diskret

_No arguments._

### FS_LOESCHEN

Fehlerspeicher loeschen fuer AGS

_No arguments._

### CODIER_CS_PRUEFEN

Ueberpruefen der Codier-Checksumme fuer AGS

_No arguments._

### CENTRAL_CODE_PRUEFEN

Ueberpruefen der Codier-Checksumme fuer AGS

_No arguments._

### STATUS_TEMP_LESEN

Status der Temperatur-Eingaenge

_No arguments._

### STATUS_SPEED_LESEN

Status der speed-Eingaenge

_No arguments._

### STATUS_TORQUE_LESEN

_No description._

_No arguments._

### STATUS_PRESSURE_LESEN

_No description._

_No arguments._

### STATUS_THROTTLE_LESEN

_No description._

_No arguments._

### STATUS_DIGITAL_IN_LESEN

_No description._

_No arguments._

### STATUS_DIGITAL_OUT_LESEN

_No description._

_No arguments._

### STATUS_GEARS_LESEN

_No description._

_No arguments._

### STEUERN_STELLGLIED

Ansteuern der Stellglieder

| Name | Type | Description |
| --- | --- | --- |
| STELLGL | string | Anzusteuerndes Stellglied table Stellglieder STELLGLIED PIN |

## Tables

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0x10 | ERROR_ECU_GENERAL_REJECT |
| 0x11 | ERROR_ECU_SERVICE_NOT_SUPPORTED |
| 0x12 | ERROR_ECU_SUBFUNCTION_NOT_SUPPORTED__INVALID_FORMAT |
| 0x21 | ERROR_ECU_BUSY_REPEAT_REQUEST |
| 0x22 | ERROR_ECU_CONDITIONS_NOT_CORRECT_OR_REQUEST_SEQUENCE_ERROR |
| 0x23 | ERROR_ECU_ROUTINE_NOT_COMPLETE |
| 0x31 | ERROR_ECU_REQUEST_OUT_OF_RANGE |
| 0x33 | ERROR_ECU_SECURITY_ACCESS_DENIED__SECURITY_ACCESS_REQUESTED |
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
| 0x78 | ERROR_ECU_REQUEST_CORRECTLY_RECEIVED__RESPONSE_PENDING |
| 0x79 | ERROR_ECU_INCORRECT_BYTE_COUNT_DURING_BLOCK_TRANSFER |
| 0x80 | ERROR_ECU_SERVICE_NOT_SUPPORTED_IN_ACTIVE_DIAGNOSTIC_MODE |
| ?00? | OKAY |
| ?02? | ERROR_ECU_INCORRECT_RESPONSE_ID |
| ?10? | ERROR_F_CODE |
| ?11? | ERROR_TABLE |
| ?12? | ERROR_INTERPRETATION |
| ?20? | ERROR_SEGMENT |
| ?21? | ERROR_ADDRESS |
| ?22? | ERROR_NUMBER |
| ?30? | ERROR_DATA |
| ?40? | ERROR_MODE |
| ?50? | ERROR_BYTE1 |
| ?51? | ERROR_BYTE2 |
| ?52? | ERROR_BYTE3 |
| ?60? | ERROR_DATA_OUT_OF_RANGE |
| ?70? | ERROR_NUMBER_ARGUMENT |
| ?71? | ERROR_RANGE_ARGUMENT |
| ?72? | ERROR_VERIFY |
| ?73? | ERROR_NO_BIN_BUFFER |
| ?74? | ERROR_BIN_BUFFER |
| ?75? | ERROR_DATA_TYPE |
| ?80? | ERROR_FLASH_SIGNATURE_CHECK |
| ?81? | ERROR_VIHICLE_IDENTFICATON_NR |
| ?82? | ERROR_PROGRAMMING_DATE |
| ?83? | ERROR_ASSEMBLY_NR |
| ?84? | ERROR_CALIBRATION_DATASET_NR |
| ?85? | ERROR_EXHAUST_REGULATION_OR_TYPE_APPROVAL_NR |
| ?86? | ERROR_REPAIR_SHOP_NR |
| ?87? | ERROR_TESTER_SERIAL_NR |
| ?88? | ERROR_MILAGE |
| ?89? | ERROR_PROGRAMMING_REFERENCE |
| ?8A? | ERROR_LARGE_UIF_FOUND |
| ?8B? | ERROR_SMALL_UIF_FOUND |
| ?8C? | ERROR_NO_FREE_UIF |
| ?8D? | ERROR_MAX_UIF |
| ?F0? | ERROR_ARGUMENT |
| 0xXY | ERROR_ECU_UNKNOWN_NEGATIVE_RESPONSE |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x0748 | Relais PL |
| 0x1748 | Relais 24/B |
| 0x0702 | GND Rueckleitung       |
| 0x0743 | Relais LU |
| 0x0753 | Magnetventil A |
| 0x0758 | Magnetventil B |
| 0x0763 | Magnetventil C |
| 0x1785 | Low/C Zeitrelais |
| 0x1786 | RDCN Zeitrelais |
| 0x1787 | 24/B Zeitrelais |
| 0x0705 | Blockierschalter |
| 0x0790 | Modusschalter |
| 0x1815 | Tiptronic Eingaenge |
| 0x1715 | Zwischensensor |
| 0x0720 | Fahrzeuggeschwindigkeitssensor |
| 0x0715 | Turbinensensor |
| 0x0710 | ATF Temp Sensor |
| 0x0731 | 1. Gangverhaeltnis |
| 0x0732 | 1. Gangverhaeltnis |
| 0x0733 | 1. Gangverhaeltnis |
| 0x0734 | 1. Gangverhaeltnis |
| 0x0735 | 1. Gangverhaeltnis |
| 0x0736 | Rueckwaertsgangverhaeltnis |
| 0x0740 | Wandlerkupplung |
| 0x1562 | Stromversorgunsspannung |
| 0x1605 | EEPROM |
| 0x1840 | CAN Bus |
| 0x1841 | CAN Bus-Monitor |
| 0x1842 | CAN Pegel-Monitor |
| 0x1843 | CAN Timeout-Monitor |
| 0x1844 | Motordrehzahl/Temp/Drehmoment/Drossel |
| 0x1825 | Shift-Verriegelung SGU |
| 0xFFFF | Unbekannter Fehler |

### FARTMATRIX

| ORT | A1_0 | A1_1 | A1_2 | A1_3 | A1_4 | A2_0 | A2_1 | A3_0 | A3_1 | A4_0 | A4_1 | A5_0 | A5_1 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0x01 | 0xFE | 0x01 | 0x02 | 0x04 | 0x08 | 0x00 | 0x10 | 0x00 | 0x20 | 0x00 | 0x40 | 0x00 | 0x80 |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x01 | Oberhalb maximaler Pegel |
| 0x02 | Unterhalb minimaler Pegel |
| 0x04 | Kein Signal |
| 0x08 | Ungueltiges Signal |
| 0x10 | Test fertig |
| 0x20 | Fehler gespeichert |
| 0x40 | Fehler jetzt vorhanden |
| 0x80 | Warnlampe ein |
| 0xFE | Symptom kein Fehler |
| 0xFF | Unbekannte Fehlerart |

### STELLGLIEDER

| STELLGLIED | PIN |
| --- | --- |
| ALL_OFF | 0x0000 |
| 24/B_DUTY_SOL | 0x0080 |
| SHIFT_SOL_A | 0x0100 |
| SHIFT_SOL_B | 0x0200 |
| SHIFT_SOL_C | 0x0400 |
| LOW/C_TIM_SOL | 0x0800 |
| RDCN_TIM_SOL | 0x1000 |
| 24/B_TIM_SOL | 0x2000 |
| LU_DUTY_SOL | 0x4000 |
