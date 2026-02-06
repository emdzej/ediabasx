# MRS3KW.prg

## General

|  |  |
| --- | --- |
| File | MRS3KW.prg |
| Type | PRG |
| Jobs | 60 |
| Tables | 8 |
| Origin | Rover EE-R-45 John Longvill |
| Revision | 1.1 |
| Author | Rover SSL A.Hoddinott, Crichton TI-435 |
| ECU Comment | Comment Information |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | MRS3KW |  |  |
| ORIGIN | string | Rover EE-R-45 John Longvill |  |  |
| REVISION | string | 1.01 |  |  |
| AUTHOR | string | Rover SSL A.Hoddinott, Crichton TI-435 |  |  |
| COMMENT | string | Comment Information |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### INFO

Information bzgl. SGBD

_No arguments._

### IDENT

Identification data

_No arguments._

### IDENT_EXTENDED

Identification data

_No arguments._

### VIN_LESEN

Identification data

_No arguments._

### VIN_SCHREIBEN

Write thge VIN to the ECU

| Name | Type | Description |
| --- | --- | --- |
| VIN | string | Vehicle Identification number |

### PROGRAMMING_DATE_SCHREIBEN

Write the programming date to the ECU

| Name | Type | Description |
| --- | --- | --- |
| DAY | int | Program day |
| MONTH | int | Program month |
| YEAR | int | Program year |

### ZCS_LESEN

Auslesen des Zentralen Codierschluessels aus Flash

_No arguments._

### ZCS_SCHREIBEN

Write the ZCS record

| Name | Type | Description |
| --- | --- | --- |
| GM | string | Zentralcode C1 - Grundmerkmal (8 ASCII nos + 1 ASCII c/sum) |
| SA | string | Zentralcode C2 - Sonderausstattung (16 ASCII nos + 1 ASCII c/sum) |
| VN | string | Zentralcode C3 - Versionsmerkmal (10 ASCII nos + 1 ASCII c/sum) |

### START_DIAGNOSTICS

Begins a diagnostic session

| Name | Type | Description |
| --- | --- | --- |
| MODE | int | Diagnostic mode |

### SG_RESET

Reset the ECU

_No arguments._

### FS_LESEN

Read faults

_No arguments._

### FS_LOESCHEN

Clears All Faults

_No arguments._

### STATUS_IO_DIGITAL_04

Read digitals for LID 04 - Equipment configuration

_No arguments._

### STATUS_IO_DIGITAL_16

Read digitals for LID 16 - ODS Status

_No arguments._

### STATUS_ANALOGUE_LOCK_BYTE

Read lock byte value LID 15

_No arguments._

### LOCK_BYTE_SCHREIBEN

Write lock byte value LID 34

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Lock byte value |

### AIRBAG_DRV_1_SCHREIBEN

Write Airbag driver 1

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Enable / Disable value |

### BELT_PRE_DRV_SCHREIBEN

Write Belt pretensioner driver

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Airbag driver 1 |

### BELT_PRE_PSNGR_SCHREIBEN

Write Belt pretensioner passenger

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Airbag driver 1 |

### AIRBAG_PSNGR_1_SCHREIBEN

Write Airbag passneger

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int |  |

### SIDEBAG_FRONT_LEFT_SCHREIBEN

Write Sidebag font left seat

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int |  |

### SIDEBAG_FRONT_RIGHT_SCHREIBEN

Write Sidebag font right seat

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int |  |

### BELT_PRE_REAR_LEFT_SCHREIBEN

Write Belt pretensioner rear left

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Airbag driver 1 |

### BELT_PRE_REAR_RIGHT_SCHREIBEN

Write Belt pretensioner rear right

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Airbag driver 1 |

### ITS_FRONT_LEFT_SCHREIBEN

Write ITS front left

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Airbag driver 1 |

### ITS_FRONT_RIGHT_SCHREIBEN

Write ITS front right

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Airbag driver 1 |

### AIRBAG_DRV_2_SCHREIBEN

Write Airbag driver 2

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Airbag driver 1 |

### AIRBAG_PSNGR_2_SCHREIBEN

Write Airbag passenger 2

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Airbag driver 1 |

### BELT_BUCKLE_DRIVER_SCHREIBEN

Write Belt Buckle driver

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Airbag driver 1 |

### BELT_BUCKLE_PSNGR_SCHREIBEN

Write Belt Buckle passenger enabled

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Airbag driver 1 |

### OC_SENSOR_ACTIVE_SCHREIBEN

Write OC Sensor active

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Airbag driver 1 |

### RFIS_SCHREIBEN

Write Rear facing infant sensor active

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Airbag driver 1 |

### MRSA_FRONT_SCHREIBEN

Write MRSA front selected

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Airbag driver 1 |

### MRSA_REAR_SCHREIBEN

Write MRSA rear selected

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Airbag driver 1 |

### RFIS_LAMP_SCHREIBEN

Write  Rear facing infant sensor lamp enabled

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Airbag driver 1 |

### US_VERSION_SCHREIBEN

Write US version enabled

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Airbag driver 1 |

### AIRBAG_DRV_1_DUP_SCHREIBEN

Write Airbag driver 1

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Enable / Disable value |

### BELT_PRE_DRV_DUP_SCHREIBEN

Write Belt pretensioner driver

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Airbag driver 1 |

### BELT_PRE_PSNGR_DUP_SCHREIBEN

Write Belt pretensioner passenger

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Airbag driver 1 |

### AIRBAG_PSNGR_1_DUP_SCHREIBEN

Write Airbag passneger

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int |  |

### SIDEBAG_FRONT_LEFT_DUP_SCHREIBEN

Write Sidebag font left seat

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int |  |

### SIDEBAG_FRONT_RIGHT_DUP_SCHREIBEN

Write Sidebag font right seat

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int |  |

### BELT_PRE_REAR_LEFT_DUP_SCHREIBEN

Write Belt pretensioner rear left

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Airbag driver 1 |

### BELT_PRE_REAR_RIGHT_DUP_SCHREIBEN

Write Belt pretensioner rear right

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Airbag driver 1 |

### ITS_FRONT_LEFT_DUP_SCHREIBEN

Write ITS front left

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Airbag driver 1 |

### ITS_FRONT_RIGHT_DUP_SCHREIBEN

Write ITS front right

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Airbag driver 1 |

### AIRBAG_DRV_2_DUP_SCHREIBEN

Write Airbag driver 2

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Airbag driver 1 |

### AIRBAG_PSNGR_2_DUP_SCHREIBEN

Write Airbag passenger 2

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Airbag driver 1 |

### BELT_BUCKLE_DRIVER_DUP_SCHREIBEN

Write Belt Buckle driver

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Airbag driver 1 |

### BELT_BUCKLE_PSNGR_DUP_SCHREIBEN

Write Belt Buckle passenger enabled

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Airbag driver 1 |

### OC_SENSOR_DUP_SCHREIBEN

Write OC Sensor active

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Airbag driver 1 |

### RFIS_DUP_SCHREIBEN

Write Rear facing infant sensor active

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Airbag driver 1 |

### MRSA_FRONT_DUP_SCHREIBEN

Write MRSA front selected

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Airbag driver 1 |

### MRSA_REAR_DUP_SCHREIBEN

Write MRSA rear selected

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Airbag driver 1 |

### RFIS_LAMP_DUP_SCHREIBEN

Write  Rear facing infant sensor lamp enabled

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Airbag driver 1 |

### US_VERSION_DUP_SCHREIBEN

Write US version enabled

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Airbag driver 1 |

### DIAGNOSE_AUFRECHT

Ping message

_No arguments._

### SEED_KEY

Obtain security access to the ECU

| Name | Type | Description |
| --- | --- | --- |
| MODE | int | Security access mode |

### DIAGNOSE_ENDE

Diagnosemode des SG beenden

_No arguments._

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
| 0x78 | ERROR_ECU_REQUEST_CORRECTLY_RECEIVED__RESPONSE_PENDING |
| 0x79 | ERROR_ECU_INCORRECT_BYTE_COUNT_DURING_BLOCK_TRANSFER |
| 0x80 | ERROR_ECU_SERVICE_NOT_SUPPORTED_IN_ACTIVE_DIAGNOSTIC_MODE |
| 0x92 | ERROR_ECU_RESERVED_BY_DOCUMENT |
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
| 0x45 | HEC (Hella Electronics Corporation) |
| 0x46 | Gemel |
| 0xFF | unbekannter Hersteller |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x9000 | ECU Internes Fehler |
| 0x9001 | Versogungspannung: Niedrig Spannung |
| 0x9003 | Airbag Warnlichte (AWL): Short to +Ve or Driver defect |
| 0x9004 | Airbag Warnlichte (AWL): Short to Ground or Open circuit |
| 0x9005 | Zukundskreis IC0 (Fahrer Airbag): Short to Ground |
| 0x9006 | Zukundskreis IC0 (Fahrer Airbag): Short to +Ve |
| 0x9007 | Zukundskreis IC0 (Fahrer Airbag): Resistance too low |
| 0x9008 | Zukundskreis IC0 (Fahrer Airbag): Resistance too high |
| 0x9009 | Zukundskreis IC3 (Airbag Passenger): Short to Ground |
| 0x9010 | Zukundskreis IC3 (Airbag Passenger): Short to +Ve |
| 0x9011 | Zukundskreis IC3 (Airbag Passenger): Resistance too low |
| 0x9012 | Zukundskreis IC3 (Airbag Passenger): Resistance too high |
| 0x9013 | Zukundskreis IC6 (Gurtstrammer links): Short to Ground |
| 0x9014 | Zukundskreis IC6 (Gurtstrammer links): Short to +Ve |
| 0x9015 | Zukundskreis IC6 (Gurtstrammer links): Resistance too low |
| 0x9016 | Zukundskreis IC6 (Gurtstrammer links): Resistance too high |
| 0x9017 | Zukundskreis IC7 (Gurtstrammer rechts): Short to Ground |
| 0x9018 | Zukundskreis IC7 (Gurtstrammer rechts): Short to +Ve |
| 0x9019 | Zukundskreis IC7 (Gurtstrammer rechts): Resistance too low |
| 0x9020 | Zukundskreis IC7 (Gurtstrammer rechts): Resistance too high |
| 0x9021 | Zukundskreis IC8 (Gurtstrammer hinten links): Short to Ground |
| 0x9022 | Zukundskreis IC8 (Gurtstrammer hinten links): Short to +Ve |
| 0x9023 | Zukundskreis IC8 (Gurtstrammer hinten links): Resistance too low |
| 0x9024 | Zukundskreis IC8 (Gurtstrammer hinten links): Resistance too high |
| 0x9025 | Zukundskreis IC9 (Gurtstrammer hinten rechts): Short to Ground |
| 0x9026 | Zukundskreis IC9 (Gurtstrammer hinten rechts): Short to +Ve |
| 0x9027 | Zukundskreis IC9 (Gurtstrammer hinten rechts): Resistance too low |
| 0x9028 | Zukundskreis IC9 (Gurtstrammer hinten rechts): Resistance too high |
| 0x9029 | Zukundskreis IC10 (Gurtstrammer hinten mitte): Short to Ground |
| 0x9030 | Zukundskreis IC10 (Gurtstrammer hinten mitte): Short to +Ve |
| 0x9031 | Zukundskreis IC10 (Gurtstrammer hinten mitte): Resistance too low |
| 0x9032 | Zukundskreis IC10 (Gurtstrammer hinten mitte): Resistance too high |
| 0x9033 | Zukundskreis IC4 (Seitenairbag vorne links): Short to Ground |
| 0x9034 | Zukundskreis IC4 (Seitenairbag vorne links): Short to +Ve |
| 0x9035 | Zukundskreis IC4 (Seitenairbag vorne links): Resistance too low |
| 0x9036 | Zukundskreis IC4 (Seitenairbag vorne links): Resistance too high |
| 0x9037 | Zukundskreis IC5 (Seitenairbag vorne rechts): Short to Ground |
| 0x9038 | Zukundskreis IC5 (Seitenairbag vorne rechts): Short to +Ve |
| 0x9039 | Zukundskreis IC5 (Seitenairbag vorne rechts): Resistance too low |
| 0x9040 | Zukundskreis IC5 (Seitenairbag vorne rechts): Resistance too high |
| 0x9041 | Zukundskreis IC1 (ITS vorne links): Short to Ground |
| 0x9042 | Zukundskreis IC1 (ITS vorne links): Short to +Ve |
| 0x9043 | Zukundskreis IC1 (ITS vorne links): Resistance too low |
| 0x9044 | Zukundskreis IC1 (ITS vorne links): Resistance too high |
| 0x9045 | Zukundskreis IC2 (ITS vorne rechts): Short to Ground |
| 0x9046 | Zukundskreis IC2 (ITS vorne rechts): Short to +Ve |
| 0x9047 | Zukundskreis IC2 (ITS vorne rechts): Resistance too low |
| 0x9048 | Zukundskreis IC2 (ITS vorne rechts): Resistance too high |
| 0x9049 | Zukundskreis IC11 (Ubat Disconnect): Short to Ground |
| 0x9050 | Zukundskreis IC11 (Ubat Disconnect): Short to +Ve |
| 0x9051 | Zukundskreis IC11 (Ubat Disconnect): Resistance too low |
| 0x9052 | Zukundskreis IC11 (Ubat Disconnect): Resistance too high |
| 0x9081 | Zukundskreis IC0 (Fahrer Airbag): Plausibility Fehler |
| 0x9082 | Zukundskreis IC3 (Airbag Passenger): Plausibility Fehler |
| 0x9083 | Zukundskreis IC6 (Gurtstrammer links): Plausibility Fehler |
| 0x9084 | Zukundskreis IC7 (Gurtstrammer rechts): Plausibility Fehler |
| 0x9085 | Zukundskreis IC8 (Gurtstrammer hinten links): Plausibility Fehler |
| 0x9086 | Zukundskreis IC9 (Gurtstrammer hinten rechts): Plausibility Fehler |
| 0x9087 | Zukundskreis IC10 (Gurtstrammer hinten mitte): Plausibility Fehler |
| 0x9088 | Zukundskreis IC4 (Seitenairbag vorne links): Plausibility Fehler |
| 0x9089 | Zukundskreis IC5 (Seitenairbag vorne rechts): Plausibility Fehler |
| 0x9090 | Zukundskreis IC1 (ITS vorne links): Plausibility Fehler |
| 0x9099 | Zukundskreis IC2 (ITS vorne rechts): Plausibility Fehler |
| 0x9100 | Zukundskreis IC11 (Ubat Disconnect): Plausibility Fehler |
| 0x9111 | Fahrersitz Schlossschalter: Resistance too low or Short to Ground |
| 0x9112 | Fahrersitz Schlossschalter: Resistance in grey area or not defined |
| 0x9113 | Fahrersitz Schlossschalter: Resistance too high / open / short to +Ve |
| 0x9114 | Fahrersitz Schlossschalter: Plausibility Fehler |
| 0x9121 | Beifahrersitz Schlossschalter: Resistance too low or Short to Ground |
| 0x9122 | Beifahrersitz Schlossschalter: Resistance in grey area or not defined |
| 0x9123 | Beifahrersitz Schlossschalter: Resistance too high / open / short to +Ve |
| 0x9124 | Beifahrersitz Schlossschalter: Plausibility Fehler |
| 0x9131 | Seitensensor links: Falsche Algorithm Parameter |
| 0x9132 | Seitensensor links: Plausibility Fehler |
| 0x9133 | Seitensensor links: Internes Fehler  |
| 0x9134 | Seitensensor links: Communication Fehler |
| 0x9141 | Seitensensor Rechts: Falsche Algorithm Parameter |
| 0x9142 | Seitensensor Rechts: Plausibility Fehler |
| 0x9143 | Seitensensor Rechts: Internes Fehler  |
| 0x9144 | Seitensensor Rechts: Communication Fehler |
| 0x9151 | RFIS Sensor: Internes RFIS Sensor Fehler |
| 0x9152 | RFIS Sensor: Schelcht Signal Stand |
| 0x9153 | RFIS Sensor: Freeze / Defreeze Fehler |
| 0x9154 | RFIS Sensor: Communication Fehler |
| 0x9155 | RFIS Sensor: Seriel Link Short to Ground |
| 0x9156 | RFIS Sensor: Seriel Link Short to +Ve |
| 0x9157 | RFIS Sensor: Plausibility Fehler |
| 0x9161 | RFIS Standlampe (HWL): Short to +Ve or Driver defect |
| 0x9162 | RFIS Standlampe (HWL): Short to Ground or Open circuit |
| 0x9200 | Unfall Telegram memory: Mindestens eine Unfall detected |
| 0xXY | unbekannter Fehlerort |

### FARTTEXTE

| ARTNR | ARTTEXT |
| --- | --- |
| 0x00 | -- |
| 0x01 | No fault symptom available for this DTC |
| 0x02 | Above maximum threshold |
| 0x03 | Below minimum threshold |
| 0x04 | Open Circuit |
| 0x05 | Leakage / Short to Ground |
| 0x06 | Leakage / Short to Ubat |
| 0x07 | No DTC present |
| 0x08 | DTC is Sporadic |
| 0x09 | DTC is Present |
| 0x0A | No Error present |
| 0x0B | Error Present |
| 0xFF | Unknown Error |

### ANALOGUE

| NAME | FACT_A | FACT_B | EINH |
| --- | --- | --- | --- |
| LOCK_BYTE | 1.0 | 0.0 |  |
| ?? | 0.0 | 0.0 | ?? |

### DIGITAL

| NAME | BYTE | MASK | VALUE |
| --- | --- | --- | --- |
| AIRBAG_DRV_1_ENABLED | 6 | 0x01 | 0x01 |
| BELT_PRE_DRV_ENABLED | 6 | 0x02 | 0x02 |
| BELT_PRE_PSNGR_ENABLED | 6 | 0x04 | 0x04 |
| AIRBAG_PSNGR_1_ENABLED | 6 | 0x08 | 0x08 |
| SIDEBAG_FRONT_LEFT_ENABLED | 6 | 0x10 | 0x10 |
| SIDEBAG_FRONT_RIGHT_ENABLED | 6 | 0x20 | 0x20 |
| BELT_PRE_REAR_LEFT_ENABLED | 6 | 0x40 | 0x40 |
| BELT_PRE_REAR_RIGHT_ENABLED | 6 | 0x80 | 0x80 |
| ITS_FRONT_LEFT_ENABLED | 7 | 0x01 | 0x01 |
| ITS_FRONT_RIGHT_ENABLED | 7 | 0x02 | 0x02 |
| AIRBAG_DRV_2_ENABLED | 7 | 0x04 | 0x04 |
| AIRBAG_PSNGR_2_ENABLED | 7 | 0x08 | 0x08 |
| BELT_BUCKLE_DRIVER_ENABLED | 8 | 0x01 | 0x01 |
| BELT_BUCKLE_PSNGR_ENABLED | 8 | 0x02 | 0x02 |
| OC_SENSOR_ACTIVE | 8 | 0x10 | 0x10 |
| RFIS_ACTIVE | 8 | 0x20 | 0x20 |
| MRSA_FRONT_SELECTED | 9 | 0x01 | 0x01 |
| MRSA_REAR_SELECTED | 9 | 0x02 | 0x02 |
| RFIS_LAMP_ENABLED | 9 | 0x08 | 0x08 |
| US_VERSION_ENABLED | 9 | 0x80 | 0x80 |
| AIRBAG_DRV_1_DUP_ENABLED | 10 | 0x01 | 0x01 |
| BELT_PRE_DRV_DUP_ENABLED | 10 | 0x02 | 0x02 |
| BELT_PRE_PSNGR_DUP_ENABLED | 10 | 0x04 | 0x04 |
| AIRBAG_PSNGR_1_DUP_ENABLED | 10 | 0x08 | 0x08 |
| SIDEBAG_FRONT_LEFT_DUP_ENABLED | 10 | 0x10 | 0x10 |
| SIDEBAG_FRONT_RIGHT_DUP_ENABLED | 10 | 0x20 | 0x20 |
| BELT_PRE_REAR_LEFT_DUP_ENABLED | 10 | 0x40 | 0x40 |
| BELT_PRE_REAR_RIGHT_DUP_ENABLED | 10 | 0x80 | 0x80 |
| ITS_FRONT_LEFT_DUP_ENABLED | 11 | 0x01 | 0x01 |
| ITS_FRONT_RIGHT_DUP_ENABLED | 11 | 0x02 | 0x02 |
| AIRBAG_DRV_2_DUP_ENABLED | 11 | 0x04 | 0x04 |
| AIRBAG_PSNGR_2_DUP_ENABLED | 11 | 0x08 | 0x08 |
| BELT_BUCKLE_DRIVER_DUP_ENABLED | 12 | 0x01 | 0x01 |
| BELT_BUCKLE_PSNGR_DUP_ENABLED | 12 | 0x02 | 0x02 |
| OC_SENSOR_DUP_ACTIVE | 12 | 0x10 | 0x10 |
| RFIS_DUP_ACTIVE | 12 | 0x20 | 0x20 |
| MRSA_FRONT_DUP_SELECTED | 13 | 0x01 | 0x01 |
| MRSA_REAR_DUP_SELECTED | 13 | 0x02 | 0x02 |
| RFIS_LAMP_DUP_ENABLED | 13 | 0x08 | 0x08 |
| US_VERSION_DUP_ENABLED | 13 | 0x80 | 0x80 |
| PSNGR_SEAT_OCCUPIED_DETECTED | 6 | 0x02 | 0x02 |
| REAR_FACING_CHILD_SEAT_DETECTED | 6 | 0x04 | 0x04 |
| OC_SENSOR_STATUS0_ACTIVE | 6 | 0x08 | 0x08 |
| OC_SENSOR_STATUS1_ACTIVE | 6 | 0x10 | 0x10 |
| OC_SENSOR_STATUS2_ACTIVE | 6 | 0x20 | 0x20 |
| OC_SENSOR_STATUS3_ACTIVE | 6 | 0x40 | 0x40 |
| OC_SENSOR_STATUS4_ACTIVE | 6 | 0x80 | 0x80 |
| ?? | 0 | 0x00 | 0x00 |

### DIGITALARGUMENT

| TEXT | WERT |
| --- | --- |
| ein | 1 |
| aus | 0 |
| ja | 1 |
| nein | 0 |
| yes | 1 |
| no | 0 |
| on | 1 |
| off | 0 |
| true | 1 |
| false | 0 |
| 1 | 1 |
| 0 | 0 |

### MONTHS

| MONTH | DAYS |
| --- | --- |
| 0x01 | 31 |
| 0x02 | 28 |
| 0x03 | 31 |
| 0x04 | 30 |
| 0x05 | 31 |
| 0x06 | 30 |
| 0x07 | 31 |
| 0x08 | 31 |
| 0x09 | 30 |
| 0x0A | 31 |
| 0x0B | 30 |
| 0x0C | 31 |
| 0 | 0 |
