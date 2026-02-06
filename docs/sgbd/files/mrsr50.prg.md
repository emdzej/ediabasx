# mrsr50.prg

## General

|  |  |
| --- | --- |
| File | mrsr50.prg |
| Type | PRG |
| Jobs | 25 |
| Tables | 8 |
| Origin | BMW TI-435 Matthew Bennett |
| Revision | 0.1 |
| Author | Rover SSL A.Hoddinott |
| ECU Comment | Comment Information |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | MRSR50 |  |  |
| ORIGIN | string | BMW TI-435 Matthew Bennett |  |  |
| REVISION | string | 0.01 |  |  |
| AUTHOR | string | Rover SSL A.Hoddinott |  |  |
| COMMENT | string | Comment Information |  |  |
| SPRACHE | string | English |  |  |

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

### EQUIPMENT_CONFIG_LESEN

Read digitals for LID 04 - Equipment configuration

_No arguments._

### STATUS_BUCKLE_SWITCH

Read digitals for LID 16 - Buckle Switch Status

_No arguments._

### LOCK_BYTE_LESEN

Read lock byte value LID 15

_No arguments._

### LOCK_BYTE_SCHREIBEN

Write lock byte value LID 34

| Name | Type | Description |
| --- | --- | --- |
| VALUE | int | Lock byte value |

### CRASH_LOESCHEN

_No description._

_No arguments._

### CRASH_LESEN

_No description._

| Name | Type | Description |
| --- | --- | --- |
| RECORDNR | int | (0 <= RECORDNR <= 2) 18 byte crash record to read |

### PARAMETER_LESEN

_No description._

| Name | Type | Description |
| --- | --- | --- |
| BLOCKNR | int | (0 <= BLOCKNR <= 9) 18 byte Parameter block to read Byte (16*BLOCKNR) werden angefordert |

### DIAGNOSE_AUFRECHT

Ping message

_No arguments._

### DIAGNOSE_ENDE

Diagnosemode des SG beenden

_No arguments._

### C_FG_LESEN

Auslesen der Fahrgestellnummer

_No arguments._

### C_FG_AUFTRAG

Beschreiben der red. Datenablage mit der FG-Nummer

| Name | Type | Description |
| --- | --- | --- |
| FG_NR | string | Fahrgestellnummer (18-stellig) |

### C_C_LESEN

Codierdaten lesen

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_C_AUFTRAG

Codierdaten schreiben und verifizieren

| Name | Type | Description |
| --- | --- | --- |
| BINAER_BUFFER | binary | Codierdaten |

### C_CODINGDATE_READ

Read out date that ECU was Configured

_No arguments._

### C_CODINGDATE_WRITE

Beschreiben der red. Datenablage mit der FG-Nummer

| Name | Type | Description |
| --- | --- | --- |
| CODINGDATE | string | Coding date (yy, mm, dd in ASCII) |

### C_ZCS_LESEN

Auslesen des Zentralen Codierschluessels aus Flash

_No arguments._

### C_ZCS_AUFTRAG

Schreiben des Zentralen Codierschluessels in die KD-Daten

| Name | Type | Description |
| --- | --- | --- |
| GM | string | Zentralcode C1 - Grundmerkmal (8 ASCII nos + 1 ASCII c/sum) |
| SA | string | Zentralcode C2 - Sonderausstattung (16 ASCII nos + 1 ASCII c/sum) |
| VN | string | Zentralcode C3 - Versionsmerkmal (10 ASCII nos + 1 ASCII c/sum) |

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
| 0x19 | Electromatic South Africa |
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
| 0xFF | Unknown manufacturer |

### FORTTEXTE

| ORT | ORTTEXT |
| --- | --- |
| 0x9000 | ECU Internal |
| 0x9001 | power supply : low voltage |
| 0x9003 | failure lamp (AWL) : short to +UVe or Driver defect |
| 0x9004 | failure lamp (AWL) : short to ground / open circuit |
| 0x9005 | Ignition circuit ZK0 (shortcircuit / leak) : short to ground |
| 0x9006 | Ignition circuit ZK0 (shortcircuit / leak) : short to +Ve |
| 0x9007 | Ignition circuit ZK0 (resistance) : resistance to low |
| 0x9008 | Ignition circuit ZK0 (resistance) : resistance too high |
| 0x9009 | Ignition circuit ZK3 (shortcircuit / leak) : short to ground |
| 0x9010 | Ignition circuit ZK3 (shortcircuit / leak) : short to +Ve |
| 0x9011 | Ignition circuit ZK3 (resistance) : resistance to low |
| 0x9012 | Ignition circuit ZK3 (resistance) : resistance too high |
| 0x9013 | Ignition circuit ZK6 (shortcircuit / leak) : short to ground |
| 0x9014 | Ignition circuit ZK6 (shortcircuit / leak) : short to +Ve |
| 0x9015 | Ignition circuit ZK6 (resistance) : resistance to low |
| 0x9016 | Ignition circuit ZK6 (resistance) : resistance too high |
| 0x9017 | Ignition circuit ZK7 (shortcircuit / leak) : short to ground |
| 0x9018 | Ignition circuit ZK7 (shortcircuit / leak) : short to +Ve |
| 0x9019 | Ignition circuit ZK7 (resistance) : resistance to low |
| 0x9020 | Ignition circuit ZK7 (resistance) : resistance too high |
| 0x9021 | Ignition circuit ZK8 (shortcircuit / leak) : short to ground |
| 0x9022 | Ignition circuit ZK8 (shortcircuit / leak) : short to +Ve |
| 0x9023 | Ignition circuit ZK8 (resistance) : resistance to low |
| 0x9024 | Ignition circuit ZK8 (resistance) : resistance too high |
| 0x9025 | Ignition circuit ZK9 (shortcircuit / leak) : short to ground |
| 0x9026 | Ignition circuit ZK9 (shortcircuit / leak) : short to +Ve |
| 0x9027 | Ignition circuit ZK9 (resistance) : resistance to low |
| 0x9028 | Ignition circuit ZK9 (resistance) : resistance too high |
| 0x9029 | Ignition circuit ZK10 (shortcircuit / leak) : short to ground |
| 0x9030 | Ignition circuit ZK10 (shortcircuit / leak) : short to +Ve |
| 0x9031 | Ignition circuit ZK10 (resistance) : resistance to low |
| 0x9032 | Ignition circuit ZK10 (resistance) : resistance too high |
| 0x9033 | Ignition circuit ZK4 (shortcircuit / leak) : short to ground |
| 0x9034 | Ignition circuit ZK4 (shortcircuit / leak) : short to +Ve |
| 0x9035 | Ignition circuit ZK4 (resistance) : resistance to low |
| 0x9036 | Ignition circuit ZK4 (resistance) : resistance too high |
| 0x9037 | Ignition circuit ZK5 (shortcircuit / leak) : short to ground |
| 0x9038 | Ignition circuit ZK5 (shortcircuit / leak) : short to +Ve |
| 0x9039 | Ignition circuit ZK5 (resistance) : resistance to low |
| 0x9040 | Ignition circuit ZK5 (resistance) : resistance too high |
| 0x9041 | Ignition circuit ZK1 (shortcircuit / leak) : short to ground |
| 0x9042 | Ignition circuit ZK1 (shortcircuit / leak) : short to +Ve |
| 0x9043 | Ignition circuit ZK1 (resistance) : resistance to low |
| 0x9044 | Ignition circuit ZK1 (resistance) : resistance too high |
| 0x9045 | Ignition circuit ZK2 (shortcircuit / leak) : short to ground |
| 0x9046 | Ignition circuit ZK2 (shortcircuit / leak) : short to +Ve |
| 0x9047 | Ignition circuit ZK2 (resistance) : resistance to low |
| 0x9048 | Ignition circuit ZK2 (resistance) : resistance too high |
| 0x9049 | Ignition circuit ZK11 (shortcircuit / leak) : short to ground |
| 0x9050 | Ignition circuit ZK11 (shortcircuit / leak) : short to +Ve |
| 0x9051 | Ignition circuit ZK11 (resistance) : resistance to low |
| 0x9052 | Ignition circuit ZK11 (resistance) : resistance too high |
| 0x9053 | Ignition circuit ZK12 (shortcircuit / leak) : short to ground |
| 0x9054 | Ignition circuit ZK12 (shortcircuit / leak) : short to +Ve |
| 0x9055 | Ignition circuit ZK12 (resistance) : resistance to low |
| 0x9056 | Ignition circuit ZK12 (resistance) : resistance too high |
| 0x9057 | Ignition circuit ZK13 (shortcircuit / leak) : short to ground |
| 0x9058 | Ignition circuit ZK13 (shortcircuit / leak) : short to +Ve |
| 0x9059 | Ignition circuit ZK13 (resistance) : resistance to low |
| 0x9060 | Ignition circuit ZK13 (resistance) : resistance too high |
| 0x9061 | Ignition circuit ZK14 (shortcircuit / leak) : short to ground |
| 0x9062 | Ignition circuit ZK14 (shortcircuit / leak) : short to +Ve |
| 0x9063 | Ignition circuit ZK14 (resistance) : resistance to low |
| 0x9064 | Ignition circuit ZK14 (resistance) : resistance too high |
| 0x9065 | Ignition circuit ZK15 (shortcircuit / leak) : short to ground |
| 0x9066 | Ignition circuit ZK15 (shortcircuit / leak) : short to +Ve |
| 0x9067 | Ignition circuit ZK15 (resistance) : resistance to low |
| 0x9068 | Ignition circuit ZK15 (resistance) : resistance too high |
| 0x9081 | Ignition circuit ZK0 (plausibility) : plausibility error |
| 0x9082 | Ignition circuit ZK3 (plausibility) : plausibility error |
| 0x9083 | Ignition circuit ZK6 (plausibility) : plausibility error |
| 0x9084 | Ignition circuit ZK7 (plausibility) : plausibility error |
| 0x9085 | Ignition circuit ZK8 (plausibility) : plausibility error |
| 0x9086 | Ignition circuit ZK9 (plausibility) : plausibility error |
| 0x9087 | Ignition circuit ZK10 (plausibility): plausibility error |
| 0x9088 | Ignition circuit ZK4 (plausibility) : plausibility error |
| 0x9089 | Ignition circuit ZK5 (plausibility) : plausibility error |
| 0x9090 | Ignition circuit ZK1 (plausibility) : plausibility error |
| 0x9099 | Ignition circuit ZK2 (plausibility) : plausibility error |
| 0x9100 | Ignition circuit ZK11 (plausibility) : plausibility error |
| 0x9101 | Ignition circuit ZK12 (plausibility) : plausibility error |
| 0x9102 | Ignition circuit ZK13 (plausibility) : plausibility error |
| 0x9103 | Ignition circuit ZK14 (plausibility) : plausibility error |
| 0x9104 | Ignition circuit ZK15 (plausibility) : plausibility error |
| 0x9111 | buckle switch driver : resistance to low or short to ground |
| 0x9112 | buckle switch driver : resistance not defined or in grey area |
| 0x9113 | buckle switch driver : disconnection / short to +Ve / resistance too high |
| 0x9114 | buckle switch driver : plausibility error |
| 0x9121 | buckle switch passenger : resistance to low or short to ground |
| 0x9122 | buckle switch passenger : resistance not defined or in grey area |
| 0x9123 | buckle switch passenger : disconnection / short to +Ve / resistance too high |
| 0x9124 | buckle switch passenger : plausibility error |
| 0x9131 | MRSA left : wrong algorithm parameter |
| 0x9132 | MRSA left (plausibility) : plausibility error |
| 0x9133 | MRSA left : MRSA sends error signal |
| 0x9134 | MRSA left : communication error |
| 0x9141 | MRSA right : wrong algorithm parameter |
| 0x9142 | MRSA right (plausibility) : plausibility error |
| 0x9143 | MRSA right : MRSA sends error signal |
| 0x9144 | MRSA right : communication error |
| 0x9163 | Ignition circuit cross connection ZK0 : Ignition circuit 0 cross connected |
| 0x9164 | Ignition circuit cross connection ZK1 : Ignition circuit 1 cross connected |
| 0x9165 | Ignition circuit cross connection ZK2 : Ignition circuit 2 cross connected |
| 0x9166 | Ignition circuit cross connection ZK3 : Ignition circuit 3 cross connected |
| 0x9167 | Ignition circuit cross connection ZK4 : Ignition circuit 4 cross connected |
| 0x9168 | Ignition circuit cross connection ZK5 : Ignition circuit 5 cross connected |
| 0x9169 | Ignition circuit cross connection ZK6 : Ignition circuit 6 cross connected |
| 0x9170 | Ignition circuit cross connection ZK7 : Ignition circuit 7 cross connected |
| 0x9171 | Ignition circuit cross connection ZK8 : Ignition circuit 8 cross connected |
| 0x9172 | Ignition circuit cross connection ZK9 : Ignition circuit 9 cross connected |
| 0x9173 | Ignition circuit cross connection ZK10 : Ignition circuit 10 cross connected |
| 0x9174 | Ignition circuit cross connection ZK11 : Ignition circuit 11 cross connected |
| 0x9175 | Ignition circuit cross connection ZK12 : Ignition circuit 12 cross connected |
| 0x9176 | Ignition circuit cross connection ZK13 : Ignition circuit 13 cross connected |
| 0x9177 | Ignition circuit cross connection ZK14 : Ignition circuit 14 cross connected |
| 0x9178 | Ignition circuit cross connection ZK15 : Ignition circuit 15 cross connected |
| 0x9200 | Crash telegram memory : at least one crash telegram stored |
| 0xXY | Unknown error location |

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
| TRIGGER_SWITCH_ENABLED | 9 | 0x40 | 0x40 |
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
| TRIGGER_SWITCH_DUP_ENABLED | 13 | 0x40 | 0x40 |
| US_VERSION_DUP_ENABLED | 13 | 0x80 | 0x80 |
| STAT_DRIVER_BUCKLE_CLOSED | 6 | 0x01 | 0x01 |
| STAT_PASSENGER_BUCKLE_CLOSED | 6 | 0x02 | 0x02 |
| STAT_DRIVER_BUCKLE_DEFECT | 6 | 0x04 | 0x04 |
| STAT_PASSENGER_BUCKLE_DEFECT | 6 | 0x08 | 0x08 |
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
