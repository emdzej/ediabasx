# OBD.prg

## General

|  |  |
| --- | --- |
| File | OBD.prg |
| Type | PRG |
| Jobs | 11 |
| Tables | 156 |
| Origin | BMW EA-26 Andreas Glotz |
| Revision | 3.005 |
| Author | ESG-GmbH BS |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | OBD |  |  |
| ORIGIN | string | BMW EA-26 Andreas Glotz |  |  |
| REVISION | string | 3.005 |  |  |
| AUTHOR | string | ESG-GmbH BS |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 2.000 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### DIAGNOSEPROTOKOLL_SETZEN

Diagnosekonzeptumschaltung zwischen BMW OBD und BMW D-CAN

| Name | Type | Description |
| --- | --- | --- |
| DIAG_PROT | string | "BMW-FAST" : BMW D-CAN "OBD"      : BMW OBD "OBD_FAST" : BMW OBD mit schnelleren Timeouts (Default) Diagnosekonzept, zu dem umgeschaltet werden soll table KONZEPT_TABELLE KONZEPT_TEXT |

### OBD_STATUS_LESEN_FUNKTIONAL

Abfrage von Messwerten mit OBD-Service 1

| Name | Type | Description |
| --- | --- | --- |
| FUNKTIONALE_ADRESSE | string | gewünschte (funktionale) Adresse table FunktionaleAdresse F_ADR F_ADR_TEXT Defaultwert: ALL ( alle Steuergeräte ) |
| ARGUMENT_SPALTE | string | gewünschte (funktionale) Adresse Tabellenspalte in table OBDService1_2, in der PIDx gesucht werden Erlaubt: "ARG", "ID" Defaultwert: keiner (keine PIDx existieren -> alle lesen) |
| PID1 | unsigned char | 1. zu lesender PID (optional) Kurzname für PID, wenn ARGUMENT_SPALTE == "ARG" String mit Zahlenwert ("0xXX") für PID, wenn ARGUMENT_SPALTE == "ID" wenn nicht existiert: alle unterstützten PIDs werden ausgelesen |
| PID2 | unsigned char | 2. zu lesender PID (optional) |
| PID3 | unsigned char | 3. zu lesender PID (optional) |
| PID4 | unsigned char | 4. zu lesender PID (optional) |
| PID5 | unsigned char | 4. zu lesender PID (optional) |
| PID6 | unsigned char | 4. zu lesender PID (optional) |

### OBD_FS_LESEN_DETAIL_FUNKTIONAL

Abfrage von Messwerten mit OBD-Service 2

| Name | Type | Description |
| --- | --- | --- |
| FUNKTIONALE_ADRESSE | string | gewünschte (funktionale) Adresse table FunktionaleAdresse F_ADR F_ADR_TEXT Defaultwert: ALL ( alle Steuergeräte ) |
| FRAME_NR | unsigned char | Nummer der auszulesenden Betriebsbedingung für Service 2 Wenn nicht übergeben, dann werden alle Frames ausgelesen. |

### OBD_FS_LESEN_CONFIRMED_FUNKTIONAL

Abfrage des Fehlerspeichers mit OBD-Service 3

| Name | Type | Description |
| --- | --- | --- |
| FUNKTIONALE_ADRESSE | string | gewünschte (funktionale) Adresse table FunktionaleAdresse F_ADR F_ADR_TEXT Defaultwert: ALL ( alle Steuergeräte ) |

### OBD_FS_LOESCHEN_FUNKTIONAL

Diagnosedaten zurücksetzen/löschen mit OBD-Service 4

| Name | Type | Description |
| --- | --- | --- |
| FUNKTIONALE_ADRESSE | string | gewünschte (funktionale) Adresse table FunktionaleAdresse F_ADR F_ADR_TEXT Defaultwert: ALL ( alle Steuergeräte ) |

### OBD_STATUS_MONITOR_LESEN_FUNKTIONAL

Abfrage der Testergebnisse zu bestimmten OBDMIDs mit OBD-Service 6

| Name | Type | Description |
| --- | --- | --- |
| FUNKTIONALE_ADRESSE | string | gewünschte (funktionale) Adresse table FunktionaleAdresse F_ADR F_ADR_TEXT Defaultwert: ALL ( alle Steuergeräte ) |
| OBDMID1 | unsigned char | 1. zu lesender OBDMID wenn nicht existiert: alle unterstützten OBDMID werden ausgelesen |
| OBDMID2 | unsigned char | 2. zu lesender OBDMID |
| OBDMID3 | unsigned char | 3. zu lesender OBDMID |
| OBDMID4 | unsigned char | 4. zu lesender OBDMID |

### OBD_FS_LESEN_PENDING_FUNKTIONAL

Abfrage des Fehlerspeichers mit OBD-Service 7

| Name | Type | Description |
| --- | --- | --- |
| FUNKTIONALE_ADRESSE | string | gewünschte (funktionale) Adresse table FunktionaleAdresse F_ADR F_ADR_TEXT Defaultwert: ALL ( alle Steuergeräte ) |

### OBD_FAHRZEUGINFO_LESEN_FUNKTIONAL

Abfrage von Fahrzeuginformationen mit OBD-Service 9

| Name | Type | Description |
| --- | --- | --- |
| FUNKTIONALE_ADRESSE | string | gewünschte (funktionale) Adresse table FunktionaleAdresse F_ADR F_ADR_TEXT Defaultwert: ALL ( alle Steuergeräte ) |
| ARGUMENT_SPALTE | string | Tabellenspalte in table OBDService9, in der INFO_TYPEx gesucht werden Erlaubt: "ARG", "ID" Defaultwert: keiner (keine INFO_TYPEx existieren -> alle lesen) |
| INFO_TYPE1 | string | 1. zu lesender InfoType (optional) Kurzname für INFO_TYPE, wenn ARGUMENT_SPALTE == "ARG" String mit Zahlenwert ("0xXX") für INFO_TYPE, wenn ARGUMENT_SPALTE == "ID" wenn nicht existiert: alle unterstützten InfoTypes werden ausgelesen |
| INFO_TYPE2 | string | 2. zu lesender InfoType (optional) |
| INFO_TYPE3 | string | 3. zu lesender InfoType (optional) |
| INFO_TYPE4 | string | 4. zu lesender InfoType (optional) |
| IGNORE_SA_TA_ERROR | string | 1 = fehlerhafte physikalische Response SA<>TA wird ignoriert |

### OBD_FS_LESEN_PERMANENT_FUNKTIONAL

Abfrage des Fehlerspeichers mit OBD-Service 0x0A

| Name | Type | Description |
| --- | --- | --- |
| FUNKTIONALE_ADRESSE | string | gewünschte (funktionale) Adresse table FunktionaleAdresse F_ADR F_ADR_TEXT Defaultwert: ALL ( alle Steuergeräte ) |

## Tables

### KONZEPT_TABELLE

| NR | KONZEPT_TEXT |
| --- | --- |
| 0x10 | BMW-FAST |
| 0x11 | OBD |
| 0x11 | OBD_FAST |

### JOBRESULT

| SB | STATUS_TEXT |
| --- | --- |
| 0x10 | ERROR_ECU_GENERAL_REJECT |
| 0x11 | ERROR_ECU_SERVICE_NOT_SUPPORTED |
| 0x12 | ERROR_ECU_SUB_FUNCTION_NOT_SUPPORTED |
| 0x13 | ERROR_ECU_INCORRECT_MESSAGE_LENGTH_OR_INVALID_FORMAT |
| 0x14 | ERROR_ECU_RESPONSE_TOO_LONG |
| 0x21 | ERROR_ECU_BUSY_REPEAT_REQUEST |
| 0x22 | ERROR_ECU_CONDITIONS_NOT_CORRECT |
| 0x24 | ERROR_ECU_REQUEST_SEQUENCE_ERROR |
| 0x25 | ERROR_ECU_NO_RESPONSE_FROM_SUBNET_COMPONENT |
| 0x26 | ERROR_ECU_FAILURE_PREVENTS_EXECUTION_OF_REQUESTED_ACTION |
| 0x31 | ERROR_ECU_REQUEST_OUT_OF_RANGE |
| 0x33 | ERROR_ECU_SECURITY_ACCESS_DENIED |
| 0x35 | ERROR_ECU_INVALID_KEY |
| 0x36 | ERROR_ECU_EXCEED_NUMBER_OF_ATTEMPTS |
| 0x37 | ERROR_ECU_REQUIRED_TIME_DELAY_NOT_EXPIRED |
| 0x70 | ERROR_ECU_UPLOAD_DOWNLOAD_NOT_ACCEPTED |
| 0x71 | ERROR_ECU_TRANSFER_DATA_SUSPENDED |
| 0x72 | ERROR_ECU_GENERAL_PROGRAMMING_FAILURE |
| 0x73 | ERROR_ECU_WRONG_BLOCK_SEQUENCE_COUNTER |
| 0x78 | ERROR_ECU_REQUEST_CORRECTLY_RECEIVED__RESPONSE_PENDING |
| 0x7E | ERROR_ECU_SUB_FUNCTION_NOT_SUPPORTED_IN_ACTIVE_SESSION |
| 0x7F | ERROR_ECU_SERVICE_NOT_SUPPORTED_IN_ACTIVE_SESSION |
| 0x81 | ERROR_ECU_RPM_TOO_HIGH |
| 0x82 | ERROR_ECU_RPM_TOO_LOW |
| 0x83 | ERROR_ECU_ENGINE_IS_RUNNING |
| 0x84 | ERROR_ECU_ENGINE_IS_NOT_RUNNING |
| 0x85 | ERROR_ECU_ENGINE_RUN_TIME_TOO_LOW |
| 0x86 | ERROR_ECU_TEMPERATURE_TOO_HIGH |
| 0x87 | ERROR_ECU_TEMPERATURE_TOO_LOW |
| 0x88 | ERROR_ECU_VEHICLE_SPEED_TOO_HIGH |
| 0x89 | ERROR_ECU_VEHICLE_SPEED_TOO_LOW |
| 0x8A | ERROR_ECU_THROTTLE_PEDAL_TOO_HIGH |
| 0x8B | ERROR_ECU_THROTTLE_PEDAL_TOO_LOW |
| 0x8C | ERROR_ECU_TRANSMISSION_RANGE_NOT_IN_NEUTRAL |
| 0x8D | ERROR_ECU_TRANSMISSION_RANGE_NOT_IN_GEAR |
| 0x8F | ERROR_ECU_BRAKE_SWITCH_NOT_CLOSED |
| 0x90 | ERROR_ECU_SHIFTER_LEVER_NOT_IN_PARK |
| 0x91 | ERROR_ECU_TORQUE_CONVERTER_CLUTCH_LOCKED |
| 0x92 | ERROR_ECU_VOLTAGE_TOO_HIGH |
| 0x93 | ERROR_ECU_VOLTAGE_TOO_LOW |
| ?00? | OKAY |
| ?01? | ERROR_ECU_NO_RESPONSE |
| ?02? | ERROR_ECU_INCORRECT_LEN |
| ?03? | ERROR_ECU_INCORRECT_RESPONSE_ID |
| ?04? | ERROR_ECU_TA_RESPONSE_NOT_SA_REQUEST |
| ?05? | ERROR_ECU_SA_RESPONSE_NOT_TA_REQUEST |
| ?06? | ERROR_ECU_RESPONSE_INCORRECT_DATA_IDENTIFIER |
| ?07? | ERROR_ECU_RESPONSE_TOO_MUCH_DATA |
| ?08? | ERROR_ECU_RESPONSE_TOO_LESS_DATA |
| ?09? | ERROR_ECU_RESPONSE_VALUE_OUT_OF_RANGE |
| ?0A? | ERROR_TABLE |
| ?10? | ERROR_F_CODE |
| ?12? | ERROR_INTERPRETATION |
| ?13? | ERROR_F_POS |
| ?14? | ERROR_ECU_RESPONSE_INCORRECT_IO_CONTROL_PARAMETER |
| ?15? | ERROR_ECU_RESPONSE_INCORRECT_ROUTINE_CONTROL_TYPE |
| ?16? | ERROR_ECU_RESPONSE_INCORRECT_SUB_FUNCTION |
| ?17? | ERROR_ECU_RESPONSE_INCORRECT_DYNAMICALLY_DEFINED_DATA_IDENTIFIER |
| ?18? | ERROR_ECU_RESPONSE_NO_STRING_END_CHAR |
| ?19? | ERROR_ECU_RESPONSE_INCORRECT_ROUTINE_IDENTIFIER |
| ?1A? | ERROR_ECU_RESPONSE_INCORRECT_RESET_TYPE |
| ?1B? | ERROR_ECU_RESPONSE_INCORRECT_SERIAL_NUMBER_FORMAT |
| ?1C? | ERROR_ECU_RESPONSE_INCORRECT_DTC_BY_STATUS_MASK |
| ?1D? | ERROR_ECU_RESPONSE_INCORRECT_DTC_STATUS_AVAILABILITY_MASK |
| ?1E? | ERROR_ECU_RESPONSE_INCORRECT_ROUTINE_CONTROL_IDENTIFIER |
| ?50? | ERROR_BYTE1 |
| ?51? | ERROR_BYTE2 |
| ?52? | ERROR_BYTE3 |
| ?60? | ERROR_VERIFY |
| ?61? | ERROR_ECU_RESPONSE_ZGW |
| ?62? | ERROR_ECU_RESPONSE_BACKUP |
| ?70? | ERROR_CALID_CVN_INCORRECT_LEN |
| ?80? | ERROR_SVK_INCORRECT_LEN |
| ?81? | ERROR_SVK_INCORRECT_FINGERPRINT |
| ?F0? | ERROR_ARGUMENT |
| 0xXY | ERROR_ECU_UNKNOWN_NEGATIVE_RESPONSE |

### OBDSERVICE1_2

| ARG | ID | ID_INFO | SUB_TABELLE | INFO | ERG_NAME | EINH | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SUPP | 0x00 | - | - | - | - | - | - | 4 | - | - | - | - | - | - |
| MONSTAT | 0x01 | Monitor status since DTCs cleared | - | - | - | - | - | - | - | - | - | - | - | - |
| DTCFRZF | 0x02 | DTC that caused required freeze frame data storage | - | - | - | - | - | - | - | - | - | - | - | - |
| FUELSYS_S | 0x03 | Fuel system status | PID03 | - | - | - | - | 2 | - | - | - | - | - | - |
| LOAD_PCT | 0x04 | Calculated LOAD Value | - | Calculated LOAD Value | LOAD_PCT | % | 0 | 1 | - | unsigned | - | 100 | 255 | 0 |
| ECT | 0x05 | Engine Coolant Temperature | - | Engine Coolant Temperature | ECT | °C | 0 | 1 | - | unsigned | - | 1 | 1 | -40 |
| SHRTFT13 | 0x06 | Short Term Fuel Trim - Bank 1/3 | - | - | - | - | - | - | - | - | - | - | - | - |
| LONGFT13 | 0x07 | Long Term Fuel Trim - Bank 1/3 | - | - | - | - | - | - | - | - | - | - | - | - |
| SHRTFT24 | 0x08 | Short Term Fuel Trim - Bank 2/4 | - | - | - | - | - | - | - | - | - | - | - | - |
| LONGFT24 | 0x09 | Long Term Fuel Trim - Bank 2/4 | - | - | - | - | - | - | - | - | - | - | - | - |
| FP | 0x0A | Fuel Pressure (gauge) | - | Fuel Pressure (gauge) | FP | kPa | 0 | 1 | - | unsigned | - | 3 | 1 | 0 |
| MAP | 0x0B | Intake Manifold Absolute Pressure | - | - | - | - | - | - | - | - | - | - | - | - |
| RPM | 0x0C | Engine RPM | - | Engine RPM | RPM | /min | 0 | 2 | - | unsigned | - | 1 | 4 | 0 |
| VSS | 0x0D | Vehicle Speed Sensor | - | Vehicle Speed Sensor | VSS | km/h | 0 | 1 | - | unsigned | - | 1 | 1 | 0 |
| SPARKADV | 0x0E | Ignition Timing Advance for #1 Cylinder | - | Ignition Timing Advance for #1 Cylinder | SPARKADV | ° | 0 | 1 | - | unsigned | - | 1 | 2 | -64 |
| IAT | 0x0F | Intake Air Temperature | - | Intake Air Temperature | IAT | °C | 0 | 1 | - | unsigned | - | 1 | 1 | -40 |
| MAF | 0x10 | Air Flow Rate from Mass Air Flow Sensor | - | - | - | - | - | - | - | - | - | - | - | - |
| TP | 0x11 | Absolute Throttle Position | - | Absolute Throttle Position | TP | % | 0 | 1 | - | unsigned | - | 100 | 255 | 0 |
| AIR_STAT | 0x12 | Commanded Secondary Air Status | - | Commanded Secondary Air Status | AIR_STAT | - | 0 | 1 | - | b0-n | AirStat | - | - | - |
| O2SLOC | 0x13 | Location of Oxygen Sensors | - | Location of Oxygen Sensors | O2SLOC | - | 0 | 1 | - | b0+n | O2SLoc13 | - | - | - |
| B1S1 | 0x14 |  | - | - | - | - | - | - | - | - | - | - | - | - |
| B1S2 | 0x15 |  | - | - | - | - | - | - | - | - | - | - | - | - |
| B1S3 | 0x16 |  | - | - | - | - | - | - | - | - | - | - | - | - |
| B1S4 | 0x17 |  | - | - | - | - | - | - | - | - | - | - | - | - |
| B2S1 | 0x18 |  | - | - | - | - | - | - | - | - | - | - | - | - |
| B2S2 | 0x19 |  | - | - | - | - | - | - | - | - | - | - | - | - |
| B2S3 | 0x1A |  | - | - | - | - | - | - | - | - | - | - | - | - |
| B2S4 | 0x1B |  | - | - | - | - | - | - | - | - | - | - | - | - |
| OBDSUP | 0x1C | OBD requirements to which vehicle or engine is certified | - | OBD requirements to which vehicle or engine is certified | OBDSUP | - | 0 | 1 | - | 0-n | OBDSup | - | - | - |
| O2SLOC | 0x1D | Location of Oxygen Sensors | - | Location of Oxygen Sensors | O2SLOC | - | 0 | 1 | - | b0+n | O2SLoc1D | - | - | - |
| AUXSTAT | 0x1E | Auxiliary Input Status | - | Power Take Off (PTO) Status | PTO_STAT | - | 0 | 1 | - | b0-n | PTOStat | - | - | - |
| RUNTM | 0x1F | Time Since Engine Start | - | Time Since Engine Start | RUNTM | sec | 0 | 2 | - | unsigned | - | 1 | 1 | 0 |
| MIL_DIST | 0x21 | Distance Traveled While MIL is Activated | - | Distance Traveled While MIL is Activated | MIL_DIST | km | 0 | 2 | - | unsigned | - | 1 | 1 | 0 |
| FP | 0x22 | Fuel Pressure relative to manifold vacuum | - | Fuel Pressure relative to manifold vacuum | FP | kPa | 0 | 2 | - | unsigned | - | 0.079 | 1 | 0 |
| FRP | 0x23 | Fuel Rail Pressure | - | Fuel Rail Pressure | FRP | kPa | 0 | 2 | - | unsigned | - | 10 | 1 | 0 |
| B1S1WRV | 0x24 |  | - | - | - | - | - | - | - | - | - | - | - | - |
| B1S2WRV | 0x25 |  | - | - | - | - | - | - | - | - | - | - | - | - |
| B1S3WRV | 0x26 |  | - | - | - | - | - | - | - | - | - | - | - | - |
| B1S4WRV | 0x27 |  | - | - | - | - | - | - | - | - | - | - | - | - |
| B2S1WRV | 0x28 |  | - | - | - | - | - | - | - | - | - | - | - | - |
| B2S2WRV | 0x29 |  | - | - | - | - | - | - | - | - | - | - | - | - |
| B2S3WRV | 0x2A |  | - | - | - | - | - | - | - | - | - | - | - | - |
| B2S4WRV | 0x2B |  | - | - | - | - | - | - | - | - | - | - | - | - |
| EGR_PCT | 0x2C | Commanded EGR | - | Commanded EGR | EGR_PCT | % | 0 | 1 | - | unsigned | - | 100 | 255 | 0 |
| EGR_ERR | 0x2D | EGR Error | - | EGR Error | EGR_ERR | % | 0 | 1 | - | unsigned | - | 100 | 128 | -100 |
| EVAP_PCT | 0x2E | Commanded Evaporative Purge | - | Commanded Evaporative Purge | EVAP_PCT | % | 0 | 1 | - | unsigned | - | 100 | 255 | 0 |
| FLI | 0x2F | Fuel Level Input | - | Fuel Level Input | FLI | % | 0 | 1 | - | unsigned | - | 100 | 255 | 0 |
| WARM_UPS | 0x30 | Number of warm-ups since DTCs cleared | - | Number of warm-ups since DTCs cleared | WARM_UPS | - | 0 | 1 | - | unsigned | - | 1 | 1 | 0 |
| CLR_DIST | 0x31 | Distance traveled since DTCs cleared | - | Distance traveled since DTCs cleared | CLR_DIST | km | 0 | 2 | - | unsigned | - | 1 | 1 | 0 |
| EVAP_VP | 0x32 | Evap System Vapor Pressure | - | Evap System Vapor Pressure | EVAP_VP | Pa | 0 | 2 | - | signed | - | 1 | 4 | 0 |
| BARO | 0x33 | Barometric Pressure | - | Barometric Pressure | BARO | kPa | 0 | 1 | - | unsigned | - | 1 | 1 | 0 |
| B1S1WRC | 0x34 |  | - | - | - | - | - | - | - | - | - | - | - | - |
| B1S2WRC | 0x35 |  | - | - | - | - | - | - | - | - | - | - | - | - |
| B1S3WRC | 0x36 |  | - | - | - | - | - | - | - | - | - | - | - | - |
| B1S4WRC | 0x37 |  | - | - | - | - | - | - | - | - | - | - | - | - |
| B2S1WRC | 0x38 |  | - | - | - | - | - | - | - | - | - | - | - | - |
| B2S2WRC | 0x39 |  | - | - | - | - | - | - | - | - | - | - | - | - |
| B2S3WRC | 0x3A |  | - | - | - | - | - | - | - | - | - | - | - | - |
| B2S4WRC | 0x3B |  | - | - | - | - | - | - | - | - | - | - | - | - |
| CATEMP11 | 0x3C | Catalyst Temperature Bank 1, Sensor 1 | - | Catalyst Temperature Bank 1, Sensor 1 | CATEMP11 | °C | 0 | 2 | - | unsigned | - | 1 | 10 | -40 |
| CATEMP21 | 0x3D | Catalyst Temperature Bank 2, Sensor 1 | - | Catalyst Temperature Bank 2, Sensor 1 | CATEMP21 | °C | 0 | 2 | - | unsigned | - | 1 | 10 | -40 |
| CATEMP12 | 0x3E | Catalyst Temperature Bank 1, Sensor 2 | - | Catalyst Temperature Bank 1, Sensor 2 | CATEMP12 | °C | 0 | 2 | - | unsigned | - | 1 | 10 | -40 |
| CATEMP22 | 0x3F | Catalyst Temperature Bank 2, Sensor 2 | - | Catalyst Temperature Bank 2, Sensor 2 | CATEMP22 | °C | 0 | 2 | - | unsigned | - | 1 | 10 | -40 |
| MONDC | 0x41 | Monitor status this driving cycle | - | - | - | - | - | - | - | - | - | - | - | - |
| VPWR | 0x42 | Control module voltage | - | Control module voltage | VPWR | V | 0 | 2 | - | unsigned | - | 1 | 1000 | 0 |
| LOAD_ABS | 0x43 | Absolute Load Value | - | Absolute Load Value | LOAD_ABS | % | 0 | 2 | - | unsigned | - | 100 | 255 | 0 |
| LAMBDA | 0x44 | Fuel/Air Commanded Equivalence Ratio | - | - | - | - | - | - | - | - | - | - | - | - |
| TP_R | 0x45 | Relative Throttle Position | - | Relative Throttle Position | TP_R | % | 0 | 1 | - | unsigned | - | 100 | 255 | 0 |
| AAT | 0x46 | Ambient air temperature | - | Ambient air temperature | AAT | °C | 0 | 1 | - | unsigned | - | 1 | 1 | -40 |
| TP_B | 0x47 | Absolute Throttle Position B | - | Absolute Throttle Position B | TP_B | % | 0 | 1 | - | unsigned | - | 100 | 255 | 0 |
| TP_C | 0x48 | Absolute Throttle Position C | - | Absolute Throttle Position C | TP_C | % | 0 | 1 | - | unsigned | - | 100 | 255 | 0 |
| APP_D | 0x49 | Accelerator Pedal Position D | - | Accelerator Pedal Position D | APP_D | % | 0 | 1 | - | unsigned | - | 100 | 255 | 0 |
| APP_E | 0x4A | Accelerator Pedal Position E | - | Accelerator Pedal Position E | APP_E | % | 0 | 1 | - | unsigned | - | 100 | 255 | 0 |
| APP_F | 0x4B | Accelerator Pedal Position F | - | Accelerator Pedal Position F | APP_F | % | 0 | 1 | - | unsigned | - | 100 | 255 | 0 |
| TAC_PCT | 0x4C | Commanded Throttle Actuator Control | - | Commanded Throttle Actuator Control | TAC_PCT | % | 0 | 1 | - | unsigned | - | 100 | 255 | 0 |
| MIL_TIME | 0x4D | Engine run time while MIL is activated | - | Engine run time while MIL is activated | MIL_TIME | min | 0 | 2 | - | unsigned | - | 1 | 1 | 0 |
| CLR_TIME | 0x4E | Engine run time since DTCs cleared | - | Engine run time since DTCs cleared | CLR_TIME | min | 0 | 2 | - | unsigned | - | 1 | 1 | 0 |
| CFG_INFO1 | 0x4F | External Test Equipment Configuration Information #1 | PID4F | - | - | - | - | 4 | - | - | - | - | - | - |
| CFG_INFO2 | 0x50 | External Test Equipment Configuration Information #2 | PID50 | - | - | - | - | 4 | - | - | - | - | - | - |
| FUEL_TYP | 0x51 | Type of fuel currently being utilized by the vehicle | - | Type of fuel currently being utilized by the vehicle | FUEL_TYP | - | 0 | 1 | - | 0-n | FuelTyp | - | - | - |
| ALCH_PCT | 0x52 | Alcohol Fuel Percentage | - | Alcohol Fuel Percentage | ALCH_PCT | % | 0 | 1 | - | unsigned | - | 100 | 255 | 0 |
| EVAP_VPA | 0x53 | Absolute Evap System Vapor Pressure | - | Absolute Evap System Vapor Pressure | EVAP_VPA | kPa | 0 | 2 | - | unsigned | - | 1 | 200 | 0 |
| EVAP_VP1 | 0x54 | Evap System Vapor Pressure | - | Evap System Vapor Pressure | EVAP_VP | Pa | 0 | 2 | - | signed | - | 1 | 1 | 0 |
| STSO2FT13 | 0x55 | Short Term Secondary O2 Sensor Fuel Trim - Bank 1/3 | - | - | - | - | - | - | - | - | - | - | - | - |
| LGSO2FT13 | 0x56 | Long Term Secondary O2 Sensor Fuel Trim - Bank 1/3 | - | - | - | - | - | - | - | - | - | - | - | - |
| STSO2FT24 | 0x57 | Short Term Secondary O2 Sensor Fuel Trim - Bank 2/4 | - | - | - | - | - | - | - | - | - | - | - | - |
| LGSO2FT24 | 0x58 | Long Term Secondary O2 Sensor Fuel Trim - Bank 2/4 | - | - | - | - | - | - | - | - | - | - | - | - |
| FRP_A | 0x59 | Fuel Rail Pressure (absolute) | - | Fuel Rail Pressure (absolute) | FRP | kPa | 0 | 2 | - | unsigned | - | 10 | 1 | 0 |
| APP_R | 0x5A | Relative Accelerator Pedal Position | - | Relative Accelerator Pedal Position | APP_R | % | 0 | 1 | - | unsigned | - | 100 | 255 | 0 |
| BAT_PWR | 0x5B | Hybrid/EV Battery Pack Remaining Charge | - | Hybrid/EV Battery Pack Remaining Charge | BAT_PWR | % | 0 | 1 | - | unsigned | - | 100 | 255 | 0 |
| EOT | 0x5C | Engine Oil Temperature | - | Engine Oil Temperature | EOT | °C | 0 | 1 | - | unsigned | - | 1 | 1 | -40 |
| FUEL_TIMING | 0x5D | Fuel Injection Timing | - | Fuel Injection Timing | FUEL_TIMING | - | 0 | 2 | - | unsigned | - | 1 | 128 | -210 |
| FUEL_RATE | 0x5E | Engine Fuel Rate | - | Engine Fuel Rate | FUEL_RATE | L/h | 0 | 2 | - | unsigned | - | 1 | 20 | -0 |
| EMIS_SUP | 0x5F | Emission requirements to which vehicle is designed | - | Emission requirements to which vehicle is designed | EMIS_SUP | - | 0 | 1 | - | 0-n | EmisSup | - | - | - |
| TQ_DD | 0x61 | Driver's Demand Engine - Percent Torque | - | Driver's Demand Engine - Percent Torque | TQ_DD | % | 0 | 1 | - | unsigned | - | 1 | 1 | -125 |
| TQ_ACT | 0x62 | Actual Engine - Percent Torque | - | Actual Engine - Percent Torque | TQ_ACT | % | 0 | 1 | - | unsigned | - | 1 | 1 | -125 |
| TQ_REF | 0x63 | Engine Reference Torque | - | Engine Reference Torque | TQ_REF | Nm | 0 | 2 | - | unsigned | - | 1 | 1 | 0 |
| TQ_DATA | 0x64 | Engine Percent Torque Data | PID64 | - | - | - | - | 5 | - | - | - | - | - | - |
| AUX_IO | 0x65 | Auxiliary Inputs / Outputs | PID65 | - | - | - | - | 2 | - | - | - | - | - | - |
| MAF_EXT | 0x66 | Mass Air Flow Sensor | PID66 | - | - | - | - | 5 | - | - | - | - | - | - |
| ECT_EXT | 0x67 | Engine Coolant Temperature | PID67 | - | - | - | - | 3 | - | - | - | - | - | - |
| IAT_EXT | 0x68 | Intake Air Temperature Sensor | PID68 | - | - | - | - | 7 | - | - | - | - | - | - |
| EGR_EXT | 0x69 | Commanded EGR and EGR Error | PID69 | - | - | - | - | 7 | - | - | - | - | - | - |
| IAF | 0x6A | Commanded Diesel Intake Air Flow Control and Relative Intake Air Flow Position | PID6A | - | - | - | - | 5 | - | - | - | - | - | - |
| EGRT | 0x6B | Exhaust Gas Recirculation Temperature | PID6B | - | - | - | - | 5 | - | - | - | - | - | - |
| TAC_TP | 0x6C | Commanded Throttle Actuator Control and Relative Throttle Position | PID6C | - | - | - | - | 5 | - | - | - | - | - | - |
| FRPC | 0x6D | Fuel Pressure Control System | PID6D | - | - | - | - | 11 | - | - | - | - | - | - |
| ICPC | 0x6E | Injection Pressure Control System | PID6E | - | - | - | - | 9 | - | - | - | - | - | - |
| TC_CINP | 0x6F | Turbocharger Compressor Inlet Pressure | PID6F | - | - | - | - | 3 | - | - | - | - | - | - |
| BPC | 0x70 | Boost Pressure Control | PID70 | - | - | - | - | 10 | - | - | - | - | - | - |
| VGTC | 0x71 | Variable Geometry Turbo (VGT) Control | PID71 | - | - | - | - | 6 | - | - | - | - | - | - |
| WGC | 0x72 | Wastegate Control | PID72 | - | - | - | - | 5 | - | - | - | - | - | - |
| EP | 0x73 | Exhaust Pressure | PID73 | - | - | - | - | 5 | - | - | - | - | - | - |
| TC_RPM | 0x74 | Turbocharger RPM | PID74 | - | - | - | - | 5 | - | - | - | - | - | - |
| TCA_T | 0x75 | Turbocharger A Temperature | PID75 | - | - | - | - | 7 | - | - | - | - | - | - |
| TCB_T | 0x76 | Turbocharger B Temperature | PID76 | - | - | - | - | 7 | - | - | - | - | - | - |
| CACT | 0x77 | Charge Air Cooler Temperature (CACT) | PID77 | - | - | - | - | 5 | - | - | - | - | - | - |
| EGT11 | 0x78 | Exhaust Gas Temperature (EGT) Bank 1 | PID78 | - | - | - | - | 9 | - | - | - | - | - | - |
| EGT21 | 0x79 | Exhaust Gas Temperature (EGT) Bank 2 | PID79 | - | - | - | - | 9 | - | - | - | - | - | - |
| DPF1 | 0x7A | Diesel Particulate Filter (DPF) Bank 1 | PID7A | - | - | - | - | 7 | - | - | - | - | - | - |
| DPF2 | 0x7B | Diesel Particulate Filter (DPF) Bank 2 | PID7B | - | - | - | - | 7 | - | - | - | - | - | - |
| DPF_T | 0x7C | Diesel Particulate Filter (DPF) Temperature | PID7C | - | - | - | - | 9 | - | - | - | - | - | - |
| NNTE | 0x7D | NOx NTE control area status | - | NOx NTE control area status | NNTE | - | 0 | 1 | - | b0+n | NNTEStat | - | - | - |
| PNTE | 0x7E | PM NTE control area status | - | PM NTE control area status | PNTE | - | 0 | 1 | - | b0+n | PNTEStat | - | - | - |
| ERT | 0x7F | Engine Run Time | PID7F | - | - | - | - | 13 | - | - | - | - | - | - |
| ERT_AECD1 | 0x81 | Engine Run Time for AECD #1 - #5 | PID81 | - | - | - | - | 41 | - | - | - | - | - | - |
| ERT_AECD6 | 0x82 | Engine Run Time for AECD #6 - #10 | PID82 | - | - | - | - | 41 | - | - | - | - | - | - |
| NOX | 0x83 | NOx Sensor | PID83 | - | - | - | - | 9 | - | - | - | - | - | - |
| MST | 0x84 | Manifold Surface Temperature | - | Manifold Surface Temperature | MST | °C | 0 | 1 | - | unsigned | - | 1 | 1 | -40 |
| NOXC | 0x85 | NOx Control System | PID85 | - | - | - | - | 10 | - | - | - | - | - | - |
| PM | 0x86 | Particulate Matter (PM) Sensor | PID86 | - | - | - | - | 5 | - | - | - | - | - | - |
| MAP_EXT | 0x87 | Intake Manifold Absolute Pressure | PID87 | - | - | - | - | 5 | - | - | - | - | - | - |
| SCR | 0x88 | SCR inducement system actual state | PID88 | - | - | - | - | 13 | - | - | - | - | - | - |
| ERT_AECD11 | 0x89 | Engine Run Time for AECD #11 - #15 | PID89 | - | - | - | - | 41 | - | - | - | - | - | - |
| ERT_AECD16 | 0x8A | Engine Run Time for AECD #16 - #20 | PID8A | - | - | - | - | 41 | - | - | - | - | - | - |
| DAT | 0x8B | Diesel Aftertreatment Status | PID8B | - | - | - | - | 7 | - | - | - | - | - | - |
| O2S_WR12 | 0x8C | O2 Sensor (Wide Range) | PID8C | - | - | - | - | 17 | - | - | - | - | - | - |
| TP_G | 0x8D | Absolute Throttle Position G | - | Absolute Throttle Position G | TP_G | % | 0 | 1 | - | unsigned | - | 100 | 255 | 0 |
| TQ_FR | 0x8E | Engine Friction - Percent Torque | - | Engine Friction - Percent Torque | TQ_FR | % | 0 | 1 | - | unsigned | - | 1 | 1 | -125 |
| PMO | 0x8F | Particulate Matter (PM) Sensor Output | PID8F | - | - | - | - | 7 | - | - | - | - | - | - |
| WWH_VINFO | 0x90 | WWH-OBD Vehicle OBD System Information | PID90 | - | - | - | - | 3 | - | - | - | - | - | - |
| WWH_EINFO | 0x91 | WWH-OBD ECU OBD System Information | PID91 | - | - | - | - | 5 | - | - | - | - | - | - |
| FUELSYS_C | 0x92 | Fuel System Control Status (Compression Ignition) | PID92 | - | - | - | - | 2 | - | - | - | - | - | - |
| WWH_VCNT | 0x93 | WWH-OBD Vehicle OBD Counters | PID93 | - | - | - | - | 3 | - | - | - | - | - | - |
| NOX_INDUC | 0x94 | NOx control - driver inducement system status and counters | PID94 | - | - | - | - | 12 | - | - | - | - | - | - |
| EGT15 | 0x98 | Exhaust Gas Temperature (EGT) Bank 1 | PID98 | - | - | - | - | 9 | - | - | - | - | - | - |
| EGT25 | 0x99 | Exhaust Gas Temperature (EGT) Bank 2 | PID99 | - | - | - | - | 9 | - | - | - | - | - | - |
| O2S_WR34 | 0x9C | O2 Sensor (Wide Range) | PID9C | - | - | - | - | 17 | - | - | - | - | - | - |
|  | 0xXX | <undefined> | - | <undefined> | - | - | - | - | - | - | - | - | - | - |

### PID01

| ARG | INFO | ERG_NAME |
| --- | --- | --- |
| DTC_CNT | # of DTCs stored in this ECU | DTC_CNT |
| MIL | Malfunction Indicator Lamp (MIL) Status | MIL |
| MIS_SUP | Misfire monitoring supported | MIS_SUP |
| FUEL_SUP | Fuel system monitoring supported | FUEL_SUP |
| CCM_SUP | Comprehensive component monitoring supported | CCM_SUP |
| COMPR_SUP | Compression ignition monitoring supported | COMPR_SUP |
| MIS_RDY | Misfire monitoring ready | MIS_RDY |
| FUEL_RDY | Fuel system monitoring ready | FUEL_RDY |
| CCM_RDY | Comprehensive component monitoring ready | CCM_RDY |
| CAT_SUP | Catalyst monitoring supported | CAT_SUP |
| HCAT_SUP | Heated catalyst monitoring supported | HCAT_SUP |
| EVAP_SUP | Evaporative system monitoring supported | EVAP_SUP |
| AIR_SUP | Secondary air system monitoring supported | AIR_SUP |
| O2S_SUP | Oxygen sensor monitoring supported | O2S_SUP |
| HTR_SUP | Oxygen sensor heater monitoring supported | HTR_SUP |
| CAT_RDY | Catalyst monitoring ready | CAT_RDY |
| HCAT_RDY | Heated catalyst monitoring ready | HCAT_RDY |
| EVAP_RDY | Evaporative system monitoring ready | EVAP_RDY |
| AIR_RDY | Secondary air system monitoring ready | AIR_RDY |
| O2S_RDY | Oxygen sensor monitoring ready | O2S_RDY |
| HTR_RDY | Oxygen sensor heater monitoring ready | HTR_RDY |
| HCCATSUP | NMHC catalyst monitoring supported | HCCATSUP |
| NCAT_SUP | NOx/SCR aftertreatment monitoring supported | NCAT_SUP |
| BP_SUP | Boost pressure system monitoring supported | BP_SUP |
| EGS_SUP | Exhaust gas sensor monitoring supported | EGS_SUP |
| PM_SUP | PM filter monitoring supported | PM_SUP |
| EGR_SUP | EGR and/or VVT system monitoring supported | EGR_SUP |
| HCCATRDY | NMHC catalyst monitoring ready | HCCATRDY |
| NCAT_RDY | NOx/SCR aftertreatment monitoring ready | NCAT_RDY |
| BP_RDY | Boost pressure system monitoring ready | BP_RDY |
| EGS_RDY | Exhaust gas sensor monitoring ready | EGS_RDY |
| PM_RDY | PM filter monitoring ready | PM_RDY |
| EGR_RDY | EGR and/or VVT system monitoring ready | EGR_RDY |
| MIL_STAT_ON | MIL ON |  |
| MIL_STAT_OFF | MIL OFF |  |
| MON_SUPP_YES | monitor supported (YES) |  |
| MON_SUPP_NO | monitor not supported (NO) |  |
| MON_TYPE_SPARK | Spark ignition monitors supported |  |
| MON_TYPE_COMPR | Compression ignition monitors supported |  |
| MON_RDY_YES_NA | monitor complete, or not applicable (YES) |  |
| MON_RDY_YES | monitor complete (YES) |  |
| MON_RDY_NO | monitor not complete (NO) |  |
| MON_RDY_NA | monitor not applicable (N/A) |  |

### PID02

| INFO | ERG_NAME |
| --- | --- |
| DTC that caused required freeze frame data storage | DTCFRZF |

### PID03

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Fuel system 1 status | FUELSYS1 | - | - | 0 | 1 | - | b0-n | FuelSysStat | - | - | - |
| Fuel system 2 status | FUELSYS2 | - | - | 1 | 1 | - | b0-n | FuelSysStat | - | - | - |

### FUELSYSSTAT

| MASKE | WERT | TEXT |
| --- | --- | --- |
| 0x00 | O | not defined |
| 0x01 | OL | Open loop - has not yet satisfied conditions to go closed loop (Bank 1 or both) |
| 0x02 | CL | Closed loop - using all oxygen sensor(s) as feedback for fuel control |
| 0x04 | OL-Drive | Open loop due to driving conditions (Bank 1 or both) |
| 0x08 | OL-Fault | Open loop - due to detected system fault (Bank 1 or both) |
| 0x10 | CL-Fault | Closed loop, but fault with at least one oxygen sensor - may be using single oxygen sensor for fuel control (Bank 1 or Bank 2) |
| 0x20 | OL B2 | Open loop - has not yet satisfied conditions to go closed loop (Bank 2) |
| 0x40 | OL Drive B2 | Open loop due to driving conditions (Bank 2) |
| 0x80 | OL Fault B2 | Open loop - due to detected system fault (Bank 2) |

### PID06

| INFO | ERG_NAME | EINH |
| --- | --- | --- |
| Short Term Fuel Trim - Bank 1 | SHRTFT1 | % |
| Short Term Fuel Trim - Bank 3 | SHRTFT3 | % |

### PID07

| INFO | ERG_NAME | EINH |
| --- | --- | --- |
| Long Term Fuel Trim - Bank 1 | LONGFT1 | % |
| Long Term Fuel Trim - Bank 3 | LONGFT3 | % |

### PID08

| INFO | ERG_NAME | EINH |
| --- | --- | --- |
| Short Term Fuel Trim - Bank 2 | SHRTFT2 | % |
| Short Term Fuel Trim - Bank 4 | SHRTFT4 | % |

### PID09

| INFO | ERG_NAME | EINH |
| --- | --- | --- |
| Long Term Fuel Trim - Bank 2 | LONGFT2 | % |
| Long Term Fuel Trim - Bank 4 | LONGFT4 | % |

### PID0B

| INFO | ERG_NAME | EINH |
| --- | --- | --- |
| Intake Manifold Absolute Pressure | MAP | kPa |

### PID10

| INFO | ERG_NAME | EINH |
| --- | --- | --- |
| Air Flow Rate from Mass Air Flow Sensor | MAF | g/s |

### AIRSTAT

| MASKE | WERT | TEXT |
| --- | --- | --- |
| 0x01 | 0x01 | upstream of first catalytic converter |
| 0x02 | 0x02 | downstream of first catalytic converter inlet |
| 0x04 | 0x04 | atmosphere / off |
| 0x08 | 0x08 | pump commanded on for diagnostics |
| 0x10 | 0x10 | <undefined> |
| 0x20 | 0x20 | <undefined> |
| 0x40 | 0x40 | <undefined> |
| 0x80 | 0x80 | <undefined> |

### O2SLOC13

| MASKE | WERT | TEXT |
| --- | --- | --- |
| 0x01 | 0x01 | Bank 1 - Sensor 1 present at that location |
| 0x02 | 0x02 | Bank 1 - Sensor 2 present at that location |
| 0x04 | 0x04 | Bank 1 - Sensor 3 present at that location |
| 0x08 | 0x08 | Bank 1 - Sensor 4 present at that location |
| 0x10 | 0x10 | Bank 2 - Sensor 1 present at that location |
| 0x20 | 0x20 | Bank 2 - Sensor 2 present at that location |
| 0x40 | 0x40 | Bank 2 - Sensor 3 present at that location |
| 0x80 | 0x80 | Bank 2 - Sensor 4 present at that location |

### PID14

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 1 - Sensor 1 | B1S1 | Oxygen Sensor Output Voltage (B1-S1) | O2S11 | V |
| Bank 1 - Sensor 1 | B1S1 | Short Term Fuel Trim (B1-S1) | SHRTFT11 | % |

### PID15

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 1 - Sensor 2 | B1S2 | Oxygen Sensor Output Voltage (B1-S2) | O2S12 | V |
| Bank 1 - Sensor 2 | B1S2 | Short Term Fuel Trim (B1-S2) | SHRTFT12 | % |

### PID16_13

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 1 - Sensor 3 | B1S3 | Oxygen Sensor Output Voltage (B1-S3) | O2S13 | V |
| Bank 1 - Sensor 3 | B1S3 | Short Term Fuel Trim (B1-S3) | SHRTFT13 | % |

### PID16_1D

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 2 - Sensor 1 | B2S1 | Oxygen Sensor Output Voltage (B2-S1) | O2S21 | V |
| Bank 2 - Sensor 1 | B2S1 | Short Term Fuel Trim (B2-S1) | SHRTFT21 | % |

### PID17_13

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 1 - Sensor 4 | B1S4 | Oxygen Sensor Output Voltage (B1-S4) | O2S14 | V |
| Bank 1 - Sensor 4 | B1S4 | Short Term Fuel Trim (B1-S4) | SHRTFT14 | % |

### PID17_1D

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 2 - Sensor 2 | B2S2 | Oxygen Sensor Output Voltage (B2-S2) | O2S22 | V |
| Bank 2 - Sensor 2 | B2S2 | Short Term Fuel Trim (B2-S2) | SHRTFT22 | % |

### PID18_13

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 2 - Sensor 1 | B2S1 | Oxygen Sensor Output Voltage (B2-S1) | O2S21 | V |
| Bank 2 - Sensor 1 | B2S1 | Short Term Fuel Trim (B2-S1) | SHRTFT21 | % |

### PID18_1D

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 3 - Sensor 1 | B3S1 | Oxygen Sensor Output Voltage (B3-S1) | O2S31 | V |
| Bank 3 - Sensor 1 | B3S1 | Short Term Fuel Trim (B3-S1) | SHRTFT31 | % |

### PID19_13

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 2 - Sensor 2 | B2S2 | Oxygen Sensor Output Voltage (B2-S2) | O2S22 | V |
| Bank 2 - Sensor 2 | B2S2 | Short Term Fuel Trim (B2-S2) | SHRTFT22 | % |

### PID19_1D

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 3 - Sensor 2 | B3S2 | Oxygen Sensor Output Voltage (B3-S2) | O2S32 | V |
| Bank 3 - Sensor 2 | B3S2 | Short Term Fuel Trim (B3-S2) | SHRTFT32 | % |

### PID1A_13

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 2 - Sensor 3 | B2S3 | Oxygen Sensor Output Voltage (B2-S3) | O2S23 | V |
| Bank 2 - Sensor 3 | B2S3 | Short Term Fuel Trim (B2-S3) | SHRTFT23 | % |

### PID1A_1D

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 4 - Sensor 1 | B4S1 | Oxygen Sensor Output Voltage (B4-S1) | O2S41 | V |
| Bank 4 - Sensor 1 | B4S1 | Short Term Fuel Trim (B4-S1) | SHRTFT41 | % |

### PID1B_13

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 2 - Sensor 4 | B2S4 | Oxygen Sensor Output Voltage (B2-S4) | O2S24 | V |
| Bank 2 - Sensor 4 | B2S4 | Short Term Fuel Trim (B2-S4) | SHRTFT24 | % |

### PID1B_1D

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 4 - Sensor 2 | B4S2 | Oxygen Sensor Output Voltage (B4-S2) | O2S42 | V |
| Bank 4 - Sensor 2 | B4S2 | Short Term Fuel Trim (B4-S2) | SHRTFT42 | % |

### OBDSUP

| WERT | TEXT |
| --- | --- |
| 0x01 | OBD II |
| 0x02 | OBD |
| 0x03 | OBD and OBD II |
| 0x04 | OBD I |
| 0x05 | NO OBD |
| 0x06 | EOBD |
| 0x07 | EOBD and OBD II |
| 0x08 | EOBD and OBD |
| 0x09 | EOBD, OBD and OBD II |
| 0x0A | JOBD |
| 0x0B | JOBD and OBD II |
| 0x0C | JOBD and EOBD |
| 0x0D | JOBD, EOBD, and OBD II |
| 0x0E | OBD, EOBD and KOBD |
| 0x0F | OBD, OBD II, EOBD and KOBD |
| 0x11 | EMD |
| 0x12 | EMD+ |
| 0x13 | HD OBD-C |
| 0x14 | HD OBD |
| 0x15 | WWH OBD |
| 0x17 | HD EOBD-I |
| 0x18 | HD EOBD-I N |
| 0x19 | HD EOBD-II |
| 0x1A | HD EOBD-II N |
| 0x1C | OBDBr-1 |
| 0x1D | OBDBr-2 |
| 0x1E | KOBD |
| 0x1F | IOBD I |
| 0x20 | IOBD II |
| 0x21 | HD EOBD-VI |
| 0x22 | OBD, OBD II and HD OBD |
| 0x23 | OBDBr-3 |
| 0xXX | <undefined> |

### O2SLOC1D

| MASKE | WERT | TEXT |
| --- | --- | --- |
| 0x01 | 0x01 | Bank 1 - Sensor 1 present at that location |
| 0x02 | 0x02 | Bank 1 - Sensor 2 present at that location |
| 0x04 | 0x04 | Bank 2 - Sensor 1 present at that location |
| 0x08 | 0x08 | Bank 2 - Sensor 2 present at that location |
| 0x10 | 0x10 | Bank 3 - Sensor 1 present at that location |
| 0x20 | 0x20 | Bank 3 - Sensor 2 present at that location |
| 0x40 | 0x40 | Bank 4 - Sensor 1 present at that location |
| 0x80 | 0x80 | Bank 4 - Sensor 2 present at that location |

### PID24

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 1 - Sensor 1 (wide range O2S) | B1S1WR | Equivalence Ratio (lambda) (B1-S1) | LAMBDA11 | - |
| Bank 1 - Sensor 1 (wide range O2S) | B1S1WR | Oxygen Sensor Voltage (B1-S1) | O2S11 | V |

### PID25

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 1 - Sensor 2 (wide range O2S) | B1S2WR | Equivalence Ratio (lambda) (B1-S2) | LAMBDA12 | - |
| Bank 1 - Sensor 2 (wide range O2S) | B1S2WR | Oxygen Sensor Voltage (B1-S2) | O2S12 | V |

### PID26_13

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 1 - Sensor 3 (wide range O2S) | B1S3WR | Equivalence Ratio (lambda) (B1-S3) | LAMBDA13 | - |
| Bank 1 - Sensor 3 (wide range O2S) | B1S3WR | Oxygen Sensor Voltage (B1-S3) | O2S13 | V |

### PID26_1D

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 2 - Sensor 1 (wide range O2S) | B2S1WR | Equivalence Ratio (lambda) (B2-S1) | LAMBDA21 | - |
| Bank 2 - Sensor 1 (wide range O2S) | B2S1WR | Oxygen Sensor Voltage (B2-S1) | O2S21 | V |

### PID27_13

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 1 - Sensor 4 (wide range O2S) | B1S4WR | Equivalence Ratio (lambda) (B1-S4) | LAMBDA14 | - |
| Bank 1 - Sensor 4 (wide range O2S) | B1S4WR | Oxygen Sensor Voltage (B1-S4) | O2S14 | V |

### PID27_1D

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 2 - Sensor 2 (wide range O2S) | B2S2WR | Equivalence Ratio (lambda) (B2-S2) | LAMBDA22 | - |
| Bank 2 - Sensor 2 (wide range O2S) | B2S2WR | Oxygen Sensor Voltage (B2-S2) | O2S22 | V |

### PID28_13

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 2 - Sensor 1 (wide range O2S) | B2S1WR | Equivalence Ratio (lambda) (B2-S1) | LAMBDA21 | - |
| Bank 2 - Sensor 1 (wide range O2S) | B2S1WR | Oxygen Sensor Voltage (B2-S1) | O2S21 | V |

### PID28_1D

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 3 - Sensor 1 (wide range O2S) | B3S1WR | Equivalence Ratio (lambda) (B3-S1) | LAMBDA31 | - |
| Bank 3 - Sensor 1 (wide range O2S) | B3S1WR | Oxygen Sensor Voltage (B3-S1) | O2S31 | V |

### PID29_13

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 2 - Sensor 2 (wide range O2S) | B2S2WR | Equivalence Ratio (lambda) (B2-S2) | LAMBDA22 | - |
| Bank 2 - Sensor 2 (wide range O2S) | B2S2WR | Oxygen Sensor Voltage (B2-S2) | O2S22 | V |

### PID29_1D

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 3 - Sensor 2 (wide range O2S) | B3S2WR | Equivalence Ratio (lambda) (B3-S2) | LAMBDA32 | - |
| Bank 3 - Sensor 2 (wide range O2S) | B3S2WR | Oxygen Sensor Voltage (B3-S2) | O2S32 | V |

### PID2A_13

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 2 - Sensor 3 (wide range O2S) | B2S3WR | Equivalence Ratio (lambda) (B2-S3) | LAMBDA23 | - |
| Bank 2 - Sensor 3 (wide range O2S) | B2S3WR | Oxygen Sensor Voltage (B2-S3) | O2S23 | V |

### PID2A_1D

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 4 - Sensor 1 (wide range O2S) | B4S1WR | Equivalence Ratio (lambda) (B4-S1) | LAMBDA41 | - |
| Bank 4 - Sensor 1 (wide range O2S) | B4S1WR | Oxygen Sensor Voltage (B4-S1) | O2S41 | V |

### PID2B_13

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 2 - Sensor 4 (wide range O2S) | B2S4WR | Equivalence Ratio (lambda) (B2-S4) | LAMBDA24 | - |
| Bank 2 - Sensor 4 (wide range O2S) | B2S4WR | Oxygen Sensor Voltage (B2-S4) | O2S24 | V |

### PID2B_1D

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 4 - Sensor 2 (wide range O2S) | B4S2WR | Equivalence Ratio (lambda) (B4-S2) | LAMBDA42 | - |
| Bank 4 - Sensor 2 (wide range O2S) | B4S2WR | Oxygen Sensor Voltage (B4-S2) | O2S42 | V |

### PID34

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 1 - Sensor 1 (wide range O2S) | B1S1WR | Equivalence Ratio (lambda) (B1-S1) | LAMBDA11 | - |
| Bank 1 - Sensor 1 (wide range O2S) | B1S1WR | Oxygen Sensor Current (B1-S1) | O2S11 | mA |

### PID35

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 1 - Sensor 2 (wide range O2S) | B1S2WR | Equivalence Ratio (lambda) (B1-S2) | LAMBDA12 | - |
| Bank 1 - Sensor 2 (wide range O2S) | B1S2WR | Oxygen Sensor Current (B1-S2) | O2S12 | mA |

### PID36_13

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 1 - Sensor 3 (wide range O2S) | B1S3WR | Equivalence Ratio (lambda) (B1-S3) | LAMBDA13 | - |
| Bank 1 - Sensor 3 (wide range O2S) | B1S3WR | Oxygen Sensor Current (B1-S3) | O2S13 | mA |

### PID36_1D

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 2 - Sensor 1 (wide range O2S) | B2S1WR | Equivalence Ratio (lambda) (B2-S1) | LAMBDA21 | - |
| Bank 2 - Sensor 1 (wide range O2S) | B2S1WR | Oxygen Sensor Current (B2-S1) | O2S21 | mA |

### PID37_13

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 1 - Sensor 4 (wide range O2S) | B1S4WR | Equivalence Ratio (lambda) (B1-S4) | LAMBDA14 | - |
| Bank 1 - Sensor 4 (wide range O2S) | B1S4WR | Oxygen Sensor Current (B1-S4) | O2S14 | mA |

### PID37_1D

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 2 - Sensor 2 (wide range O2S) | B2S2WR | Equivalence Ratio (lambda) (B2-S2) | LAMBDA22 | - |
| Bank 2 - Sensor 2 (wide range O2S) | B2S2WR | Oxygen Sensor Current (B2-S2) | O2S22 | mA |

### PID38_13

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 2 - Sensor 1 (wide range O2S) | B2S1WR | Equivalence Ratio (lambda) (B2-S1) | LAMBDA21 | - |
| Bank 2 - Sensor 1 (wide range O2S) | B2S1WR | Oxygen Sensor Current (B2-S1) | O2S21 | mA |

### PID38_1D

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 3 - Sensor 1 (wide range O2S) | B3S1WR | Equivalence Ratio (lambda) (B3-S1) | LAMBDA31 | - |
| Bank 3 - Sensor 1 (wide range O2S) | B3S1WR | Oxygen Sensor Current (B3-S1) | O2S31 | mA |

### PID39_13

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 2 - Sensor 2 (wide range O2S) | B2S2WR | Equivalence Ratio (lambda) (B2-S2) | LAMBDA22 | - |
| Bank 2 - Sensor 2 (wide range O2S) | B2S2WR | Oxygen Sensor Current (B2-S2) | O2S22 | mA |

### PID39_1D

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 3 - Sensor 2 (wide range O2S) | B3S2WR | Equivalence Ratio (lambda) (B3-S2) | LAMBDA32 | - |
| Bank 3 - Sensor 2 (wide range O2S) | B3S2WR | Oxygen Sensor Current (B3-S2) | O2S32 | mA |

### PID3A_13

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 2 - Sensor 3 (wide range O2S) | B2S3WR | Equivalence Ratio (lambda) (B2-S3) | LAMBDA23 | - |
| Bank 2 - Sensor 3 (wide range O2S) | B2S3WR | Oxygen Sensor Current (B2-S3) | O2S23 | mA |

### PID3A_1D

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 4 - Sensor 1 (wide range O2S) | B4S1WR | Equivalence Ratio (lambda) (B4-S1) | LAMBDA41 | - |
| Bank 4 - Sensor 1 (wide range O2S) | B4S1WR | Oxygen Sensor Current (B4-S1) | O2S41 | mA |

### PID3B_13

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 2 - Sensor 4 (wide range O2S) | B2S4WR | Equivalence Ratio (lambda) (B2-S4) | LAMBDA24 | - |
| Bank 2 - Sensor 4 (wide range O2S) | B2S4WR | Oxygen Sensor Current (B2-S4) | O2S24 | mA |

### PID3B_1D

| ID_INFO | ID_NAME | INFO | ERG_NAME | EINH |
| --- | --- | --- | --- | --- |
| Bank 4 - Sensor 2 (wide range O2S) | B4S2WR | Equivalence Ratio (lambda) (B4-S2) | LAMBDA42 | - |
| Bank 4 - Sensor 2 (wide range O2S) | B4S2WR | Oxygen Sensor Current (B4-S2) | O2S42 | mA |

### PID41

| ARG | INFO | ERG_NAME |
| --- | --- | --- |
| MIS_ENA | Misfire monitoring enabled | MIS_ENA |
| FUEL_ENA | Fuel system monitoring enabled | FUEL_ENA |
| CCM_ENA | Comprehensive component monitoring enabled | CCM_ENA |
| COMPR_SUP | Compression ignition monitoring supported | COMPR_SUP |
| MIS_CMPL | Misfire monitoring completed | MIS_CMPL |
| FUELCMPL | Fuel system monitoring completed | FUELCMPL |
| CCM_CMPL | Comprehensive component monitoring completed | CCM_CMPL |
| CAT_ENA | Catalyst monitoring enabled | CAT_ENA |
| HCAT_ENA | Heated catalyst monitoring enabled | HCAT_ENA |
| EVAP_ENA | Evaporative system monitoring enabled | EVAP_ENA |
| AIR_ENA | Secondary air system monitoring enabled | AIR_ENA |
| O2S_ENA | Oxygen sensor monitoring enabled | O2S_ENA |
| HTR_ENA | Oxygen sensor heater monitoring enabled | HTR_ENA |
| CAT_CMPL | Catalyst monitoring completed | CAT_CMPL |
| HCATCMPL | Heated catalyst monitoring completed | HCATCMPL |
| EVAPCMPL | Evaporative system monitoring completed | EVAPCMPL |
| AIR_CMPL | Secondary air system monitoring completed | AIR_CMPL |
| O2S_CMPL | Oxygen sensor monitoring completed | O2S_CMPL |
| HTR_CMPL | Oxygen sensor heater monitoring completed | HTR_CMPL |
| HCCATENA | NMHC catalyst monitoring enabled | HCCATENA |
| NCAT_ENA | NOx/SCR aftertreatment monitoring enabled | NCAT_ENA |
| BP_ENA | Boost pressure system monitoring enabled | BP_ENA |
| EGS_ENA | Exhaust gas sensor monitoring enabled | EGS_ENA |
| PM_ENA | PM filter monitoring enabled | PM_ENA |
| EGR_ENA | EGR and/or VVT system monitoring enabled | EGR_ENA |
| HCCATCMP | NMHC catalyst monitoring completed | HCCATCMP |
| NCATCMPL | NOx/SCR aftertreatment monitoring completed | NCATCMPL |
| BP_CMPL | Boost pressure system monitoring completed | BP_CMPL |
| EGS_CMPL | Exhaust gas sensor monitoring completed | EGS_CMPL |
| PM_CMPL | PM filter monitoring completed | PM_CMPL |
| EGR_CMPL | EGR and/or VVT system monitoring completed | EGR_CMPL |
| MON_ENA_YES | monitor enabled for this monitoring cycle (YES) |  |
| MON_ENA_NO | monitor disabled for rest of this monitoring cycle (NO) |  |
| MON_ENA_NA | monitor not supported (N/A) |  |
| MON_TYPE_SPARK | Spark ignition monitors supported |  |
| MON_TYPE_COMPR | Compression ignition monitors supported |  |
| MON_CMPL_YES | monitor complete this monitoring cycle (YES) |  |
| MON_CMPL_NO | monitor not complete this monitoring cycle (NO) |  |
| MON_CMPL_NA | monitor not supported (N/A) |  |

### PID44

| INFO | ERG_NAME | EINH |
| --- | --- | --- |
| Fuel/Air Commanded Equivalence Ratio | LAMBDA | - |

### PID55

| INFO | ERG_NAME | EINH |
| --- | --- | --- |
| Short Term Secondary O2 Sensor Fuel Trim - Bank 1 | STSO2FT1 | % |
| Short Term Secondary O2 Sensor Fuel Trim - Bank 3 | STSO2FT3 | % |

### PID56

| INFO | ERG_NAME | EINH |
| --- | --- | --- |
| Long Term Secondary O2 Sensor Fuel Trim - Bank 1 | LGSO2FT1 | % |
| Long Term Secondary O2 Sensor Fuel Trim - Bank 3 | LGSO2FT3 | % |

### PID57

| INFO | ERG_NAME | EINH |
| --- | --- | --- |
| Short Term Secondary O2 Sensor Fuel Trim - Bank 2 | STSO2FT2 | % |
| Short Term Secondary O2 Sensor Fuel Trim - Bank 4 | STSO2FT4 | % |

### PID58

| INFO | ERG_NAME | EINH |
| --- | --- | --- |
| Long Term Secondary O2 Sensor Fuel Trim - Bank 2 | LGSO2FT2 | % |
| Long Term Secondary O2 Sensor Fuel Trim - Bank 4 | LGSO2FT4 | % |

### PTOSTAT

| MASKE | WERT | TEXT |
| --- | --- | --- |
| 0x01 | 0x00 | PTO not active (OFF) |
| 0x01 | 0x01 | PTO active (ON) |

### FUELTYP

| WERT | TEXT |
| --- | --- |
| 0x00 | NONE |
| 0x01 | GAS |
| 0x02 | METH |
| 0x03 | ETH |
| 0x04 | DSL |
| 0x05 | LPG |
| 0x06 | CNG |
| 0x07 | PROP |
| 0x08 | ELEC |
| 0x09 | BI_GAS |
| 0x0A | BI_METH |
| 0x0B | BI_ETH |
| 0x0C | BI_LPG |
| 0x0D | BI_CNG |
| 0x0E | BI_PROP |
| 0x18 | BI_NG |
| 0x19 | BI_DSL |
| 0x1A | NG |
| 0x1B | DSL_CNG |
| 0x1C | DSL_NG |
| 0xXX | <undefined> |

### EMISSUP

| WERT | TEXT |
| --- | --- |
| 0x0E | EURO IV B1 |
| 0x0F | EURO V B2 |
| 0x10 | EURO C |
| 0xXX | <undefined> |

### PID4F

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Maximum value for Equivalence Ratio | MAX_LAMBDA | - | - | 0 | 1 | - | unsigned | - | 1 | 1 | 0 |
| Maximum value for Oxygen Sensor Voltage | MAX_O2SV | V | - | 1 | 1 | - | unsigned | - | 1 | 1 | 0 |
| Maximum value for Oxygen Sensor Current | MAX_O2SC | mA | - | 2 | 1 | - | unsigned | - | 1 | 1 | 0 |
| Maximum value for Intake Manifold Absolute Pressure | MAX_MAP | kPa | - | 3 | 1 | - | unsigned | - | 10 | 1 | 0 |

### PID50

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Maximum value for Air Flow Rate from Mass Air Flow Sensor | MAX_MAF | g/s | - | 0 | 1 | - | unsigned | - | 10 | 1 | 0 |

### PID64

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Engine Percent Torque At Idle, Point 1 | TQ_MAX1 | % | - | 0 | 1 | - | unsigned | - | 1 | 1 | -125 |
| Engine Percent Torque At Point 2 | TQ_MAX2 | % | - | 1 | 1 | - | unsigned | - | 1 | 1 | -125 |
| Engine Percent Torque At Point 3 | TQ_MAX3 | % | - | 2 | 1 | - | unsigned | - | 1 | 1 | -125 |
| Engine Percent Torque At Point 4 | TQ_MAX4 | % | - | 3 | 1 | - | unsigned | - | 1 | 1 | -125 |
| Engine Percent Torque At Point 5 | TQ_MAX5 | % | - | 4 | 1 | - | unsigned | - | 1 | 1 | -125 |

### PID65

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Power Take Off (PTO) Status | PTO_STAT | - | 0x01 | 1 | 1 | - | b0-n | PTOStat | - | - | - |
| Auto Trans Neutral Drive Status | N/D_STAT | - | 0x02 | 1 | 1 | - | b0-n | NeutDrvStat | - | - | - |
| Manual Trans Neutral Gear Status | N/G_STAT | - | 0x04 | 1 | 1 | - | b0-n | NeutGearStat | - | - | - |
| Glow Plug Lamp Status | GPL_STAT | - | 0x08 | 1 | 1 | - | b0-n | GPLStat | - | - | - |

### NEUTDRVSTAT

| MASKE | WERT | TEXT |
| --- | --- | --- |
| 0x02 | 0x00 | Auto Trans in Park/Neutral |
| 0x02 | 0x02 | Auto Trans in Forward/Reverse Gear |

### NEUTGEARSTAT

| MASKE | WERT | TEXT |
| --- | --- | --- |
| 0x04 | 0x00 | Manual Trans in Neutral and/or clutch depressed |
| 0x04 | 0x04 | Manual Trans in Gear |

### GPLSTAT

| MASKE | WERT | TEXT |
| --- | --- | --- |
| 0x08 | 0x00 | Glow Plug Lamp Off |
| 0x08 | 0x08 | Glow Plug Lamp ('Wait to Start') On |

### PID66

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Mass Air Flow Sensor A | MAFA | g/s | 0x01 | 1 | 2 | - | unsigned | - | 1 | 32 | 0 |
| Mass Air Flow Sensor B | MAFB | g/s | 0x02 | 3 | 2 | - | unsigned | - | 1 | 32 | 0 |

### PID67

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Engine Coolant Temperature 1 | ECT 1 | °C | 0x01 | 1 | 1 | - | unsigned | - | 1 | 1 | -40 |
| Engine Coolant Temperature 2 | ECT 2 | °C | 0x02 | 2 | 1 | - | unsigned | - | 1 | 1 | -40 |

### PID68

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Intake Air Temperature Bank 1, Sensor 1 | IAT 11 | °C | 0x01 | 1 | 1 | - | unsigned | - | 1 | 1 | -40 |
| Intake Air Temperature Bank 1, Sensor 2 | IAT 12 | °C | 0x02 | 2 | 1 | - | unsigned | - | 1 | 1 | -40 |
| Intake Air Temperature Bank 1, Sensor 3 | IAT 13 | °C | 0x04 | 3 | 1 | - | unsigned | - | 1 | 1 | -40 |
| Intake Air Temperature Bank 2, Sensor 1 | IAT 21 | °C | 0x08 | 4 | 1 | - | unsigned | - | 1 | 1 | -40 |
| Intake Air Temperature Bank 2, Sensor 2 | IAT 22 | °C | 0x10 | 5 | 1 | - | unsigned | - | 1 | 1 | -40 |
| Intake Air Temperature Bank 2, Sensor 3 | IAT 23 | °C | 0x20 | 6 | 1 | - | unsigned | - | 1 | 1 | -40 |

### PID69

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Commanded EGR A Duty Cycle/Position | EGR_A_CMD | % | 0x01 | 1 | 1 | - | unsigned | - | 100 | 255 | 0 |
| Actual EGR A Duty Cycle/Position | EGR_A_ACT | % | 0x02 | 2 | 1 | - | unsigned | - | 100 | 255 | 0 |
| EGR A Error | EGR_A_ERR | % | 0x04 | 3 | 1 | - | unsigned | - | 100 | 128 | -100 |
| Commanded EGR B Duty Cycle/Position | EGR_B_CMD | % | 0x08 | 4 | 1 | - | unsigned | - | 100 | 255 | 0 |
| Actual EGR B Duty Cycle/Position | EGR_B_ACT | % | 0x10 | 5 | 1 | - | unsigned | - | 100 | 255 | 0 |
| EGR B Error | EGR_B_ERR | % | 0x20 | 6 | 1 | - | unsigned | - | 100 | 128 | -100 |

### PID6A

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Commanded Intake Air Flow A Control | IAF_A_CMD | % | 0x01 | 1 | 1 | - | unsigned | - | 100 | 255 | 0 |
| Relative Intake Air Flow A Position | IAF_A_REL | % | 0x02 | 2 | 1 | - | unsigned | - | 100 | 255 | 0 |
| Commanded Intake Air Flow B Control | IAF_B_CMD | % | 0x04 | 3 | 1 | - | unsigned | - | 100 | 255 | 0 |
| Relative Intake Air Flow B Position | IAF_B_REL | % | 0x08 | 4 | 1 | - | unsigned | - | 100 | 255 | 0 |

### PID6B

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Exhaust Gas Recirculation Temp Sensor A (Bank 1, Sensor 1) | EGRTA | °C | 0x01 | 1 | 1 | - | unsigned | - | 1 | 1 | -40 |
| Exhaust Gas Recirculation Temp Sensor C (Bank 1, Sensor 2) | EGRTC | °C | 0x02 | 2 | 1 | - | unsigned | - | 1 | 1 | -40 |
| Exhaust Gas Recirculation Temp Sensor B (Bank 2, Sensor 1) | EGRTB | °C | 0x04 | 3 | 1 | - | unsigned | - | 1 | 1 | -40 |
| Exhaust Gas Recirculation Temp Sensor D (Bank 2, Sensor 2) | EGRTD | °C | 0x08 | 4 | 1 | - | unsigned | - | 1 | 1 | -40 |
| Exhaust Gas Recirculation Temp Sensor A (Bank 1, Sensor 1) Wide Range | EGRTAWR | °C | 0x10 | 1 | 1 | - | unsigned | - | 4 | 1 | -40 |
| Exhaust Gas Recirculation Temp Sensor C (Bank 1, Sensor 2) Wide Range | EGRTCWR | °C | 0x20 | 2 | 1 | - | unsigned | - | 4 | 1 | -40 |
| Exhaust Gas Recirculation Temp Sensor B (Bank 2, Sensor 1) Wide Range | EGRTBWR | °C | 0x40 | 3 | 1 | - | unsigned | - | 4 | 1 | -40 |
| Exhaust Gas Recirculation Temp Sensor D (Bank 2, Sensor 2) Wide Range | EGRTDWR | °C | 0x80 | 4 | 1 | - | unsigned | - | 4 | 1 | -40 |

### PID6C

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Commanded Throttle Actuator A Control | TAC_A_CMD | % | 0x01 | 1 | 1 | - | unsigned | - | 100 | 255 | 0 |
| Relative Throttle A Position | TP_A_REL | % | 0x02 | 2 | 1 | - | unsigned | - | 100 | 255 | 0 |
| Commanded Throttle Actuator B Control | TAC_B_CMD | % | 0x04 | 3 | 1 | - | unsigned | - | 100 | 255 | 0 |
| Relative Throttle B Position | TP_B_REL | % | 0x08 | 4 | 1 | - | unsigned | - | 100 | 255 | 0 |

### PID6D

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Commanded Fuel Rail Pressure A | FRP_A_CMD | kPa | 0x01 | 1 | 2 | - | unsigned | - | 10 | 1 | 0 |
| Fuel Rail Pressure A | FRP_A | kPa | 0x02 | 3 | 2 | - | unsigned | - | 10 | 1 | 0 |
| Fuel Rail Temperature A | FRT_A | °C | 0x04 | 5 | 1 | - | unsigned | - | 1 | 1 | -40 |
| Commanded Fuel Rail Pressure B | FRP_B_CMD | kPa | 0x08 | 6 | 2 | - | unsigned | - | 10 | 1 | 0 |
| Fuel Rail Pressure B | FRP_B | kPa | 0x10 | 8 | 2 | - | unsigned | - | 10 | 1 | 0 |
| Fuel Rail Temperature B | FRT_B | °C | 0x20 | 10 | 1 | - | unsigned | - | 1 | 1 | -40 |

### PID6E

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Commanded Injection Control Pressure A | ICP_A_CMD | kPa | 0x01 | 1 | 2 | - | unsigned | - | 10 | 1 | 0 |
| Injection Control Pressure A | ICP_A | kPa | 0x02 | 3 | 2 | - | unsigned | - | 10 | 1 | 0 |
| Commanded Injection Control Pressure B | ICP_B_CMD | kPa | 0x04 | 5 | 2 | - | unsigned | - | 10 | 1 | 0 |
| Injection Control Pressure B | ICP_B | kPa | 0x08 | 7 | 2 | - | unsigned | - | 10 | 1 | 0 |

### PID6F

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Turbocharger Compressor Inlet Pressure Sensor A | TCA_CINP | kPa | 0x01 | 1 | 1 | - | unsigned | - | 1 | 1 | 0 |
| Turbocharger Compressor Inlet Pressure Sensor B | TCB_CINP | kPa | 0x02 | 2 | 1 | - | unsigned | - | 1 | 1 | 0 |
| Turbocharger Compressor Inlet Pressure Sensor A Wide Range | TCAWR_CINP | kPa | 0x04 | 1 | 1 | - | unsigned | - | 8 | 1 | 0 |
| Turbocharger Compressor Inlet Pressure Sensor B Wide Range | TCBWR_CINP | kPa | 0x08 | 2 | 1 | - | unsigned | - | 8 | 1 | 0 |

### PID70

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Commanded Boost Pressure A | BP_A_CMD | kPa | 0x01 | 1 | 2 | - | unsigned | - | 1 | 32 | 0 |
| Boost Pressure Sensor A | BP_A_ACT | kPa | 0x02 | 3 | 2 | - | unsigned | - | 1 | 32 | 0 |
| Commanded Boost Pressure B | BP_B_CMD | kPa | 0x08 | 5 | 2 | - | unsigned | - | 1 | 32 | 0 |
| Boost Pressure Sensor B | BP_B_ACT | kPa | 0x10 | 7 | 2 | - | unsigned | - | 1 | 32 | 0 |
| Boost Pressure A Control Status | BP_A_CS | - | 0x04 | 9 | 1 | 0x03 | 0-n | BPCntrlStat70 | - | - | - |
| Boost Pressure B Control Status | BP_B_CS | - | 0x20 | 9 | 1 | 0x0C | 0-n | BPCntrlStat70 | - | - | - |

### BPCNTRLSTAT70

| WERT | TEXT |
| --- | --- |
| 0x00 | 0 |
| 0x01 | Open Loop (no fault present) |
| 0x02 | Closed Loop (no fault present) |
| 0x03 | Fault present (boost data unreliable) |

### PID71

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Commanded Variable Geometry Turbo A Position | VGT_A_CMD | % | 0x01 | 1 | 1 | - | unsigned | - | 100 | 255 | 0 |
| Variable Geometry Turbo A Position | VGT_A_ACT | % | 0x02 | 2 | 1 | - | unsigned | - | 100 | 255 | 0 |
| Commanded Variable Geometry Turbo B Position | VGT_B_CMD | % | 0x08 | 3 | 1 | - | unsigned | - | 100 | 255 | 0 |
| Variable Geometry Turbo B Position | VGT_B_ACT | % | 0x10 | 4 | 1 | - | unsigned | - | 100 | 255 | 0 |
| VGT A Control Status | VGT_A_CS | - | 0x04 | 5 | 1 | 0x03 | 0-n | BPCntrlStat71 | - | - | - |
| VGT B Control Status | VGT_B_CS | - | 0x20 | 5 | 1 | 0x0C | 0-n | BPCntrlStat71 | - | - | - |

### BPCNTRLSTAT71

| WERT | TEXT |
| --- | --- |
| 0x00 | 0 |
| 0x01 | Open Loop (no fault present) |
| 0x02 | Closed Loop (no fault present) |
| 0x03 | Fault present (VGT data unreliable) |

### PID72

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Commanded Wastegate A Position | WG_A_CMD | % | 0x01 | 1 | 1 | - | unsigned | - | 100 | 255 | 0 |
| Wastegate A Position | WG_A_ACT | % | 0x02 | 2 | 1 | - | unsigned | - | 100 | 255 | 0 |
| Commanded Wastegate B Position | WG_B_CMD | % | 0x04 | 3 | 1 | - | unsigned | - | 100 | 255 | 0 |
| Wastegate B Position | WG_B_ACT | % | 0x08 | 4 | 1 | - | unsigned | - | 100 | 255 | 0 |

### PID73

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Exhaust Pressure Sensor Bank 1 | EP_1 | kPa | 0x01 | 1 | 2 | - | unsigned | - | 1 | 100 | 0 |
| Exhaust Pressure Sensor Bank 2 | EP_2 | kPa | 0x02 | 3 | 2 | - | unsigned | - | 1 | 100 | 0 |

### PID74

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Turbocharger A RPM | TCA_RPM | /min | 0x01 | 1 | 2 | - | unsigned | - | 10 | 1 | 0 |
| Turbocharger B RPM | TCB_RPM | /min | 0x02 | 3 | 2 | - | unsigned | - | 10 | 1 | 0 |

### PID75

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Turbocharger A Compressor Inlet Temperature | TCA_CINT | °C | 0x01 | 1 | 1 | - | unsigned | - | 1 | 1 | -40 |
| Turbocharger A Compressor Outlet Temperature | TCA_COUTT | °C | 0x02 | 2 | 1 | - | unsigned | - | 1 | 1 | -40 |
| Turbocharger A Turbine Inlet Temperature | TCA_TINT | °C | 0x04 | 3 | 2 | - | unsigned | - | 1 | 10 | -40 |
| Turbocharger A Turbine Outlet Temperature | TCA_TOUTT | °C | 0x08 | 5 | 2 | - | unsigned | - | 1 | 10 | -40 |

### PID76

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Turbocharger B Compressor Inlet Temperature | TCB_CINT | °C | 0x01 | 1 | 1 | - | unsigned | - | 1 | 1 | -40 |
| Turbocharger B Compressor Outlet Temperature | TCB_COUTT | °C | 0x02 | 2 | 1 | - | unsigned | - | 1 | 1 | -40 |
| Turbocharger B Turbine Inlet Temperature | TCB_TINT | °C | 0x04 | 3 | 2 | - | unsigned | - | 1 | 10 | -40 |
| Turbocharger B Turbine Outlet Temperature | TCB_TOUTT | °C | 0x08 | 5 | 2 | - | unsigned | - | 1 | 10 | -40 |

### PID77

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Charge Air Cooler Temperature Bank 1, Sensor 1 | CACT 11 | °C | 0x01 | 1 | 1 | - | unsigned | - | 1 | 1 | -40 |
| Charge Air Cooler Temperature Bank 1, Sensor 2 | CACT 12 | °C | 0x02 | 2 | 1 | - | unsigned | - | 1 | 1 | -40 |
| Charge Air Cooler Temperature Bank 2, Sensor 1 | CACT 21 | °C | 0x04 | 3 | 1 | - | unsigned | - | 1 | 1 | -40 |
| Charge Air Cooler Temperature Bank 2, Sensor 2 | CACT 22 | °C | 0x08 | 4 | 1 | - | unsigned | - | 1 | 1 | -40 |

### PID78

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Exhaust Gas Temperature Bank 1, Sensor 1 | EGT11 | °C | 0x01 | 1 | 2 | - | unsigned | - | 1 | 10 | -40 |
| Exhaust Gas Temperature Bank 1, Sensor 2 | EGT12 | °C | 0x02 | 3 | 2 | - | unsigned | - | 1 | 10 | -40 |
| Exhaust Gas Temperature Bank 1, Sensor 3 | EGT13 | °C | 0x04 | 5 | 2 | - | unsigned | - | 1 | 10 | -40 |
| Exhaust Gas Temperature Bank 1, Sensor 4 | EGT14 | °C | 0x08 | 7 | 2 | - | unsigned | - | 1 | 10 | -40 |

### PID79

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Exhaust Gas Temperature Bank 2, Sensor 1 | EGT21 | °C | 0x01 | 1 | 2 | - | unsigned | - | 1 | 10 | -40 |
| Exhaust Gas Temperature Bank 2, Sensor 2 | EGT22 | °C | 0x02 | 3 | 2 | - | unsigned | - | 1 | 10 | -40 |
| Exhaust Gas Temperature Bank 2, Sensor 3 | EGT23 | °C | 0x04 | 5 | 2 | - | unsigned | - | 1 | 10 | -40 |
| Exhaust Gas Temperature Bank 2, Sensor 4 | EGT24 | °C | 0x08 | 7 | 2 | - | unsigned | - | 1 | 10 | -40 |

### PID7A

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Diesel Particulate Filter Bank 1 Delta Pressure | DPF1_DP | kPa | 0x01 | 1 | 2 | - | signed | - | 1 | 100 | 0 |
| Diesel Particulate Filter Bank 1 Inlet Pressure | DPF1_INP | kPa | 0x02 | 3 | 2 | - | unsigned | - | 1 | 100 | 0 |
| Diesel Particulate Filter Bank 1 Outlet Pressure | DPF1_OUTP | kPa | 0x04 | 5 | 2 | - | unsigned | - | 1 | 100 | 0 |

### PID7B

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Diesel Particulate Filter Bank 2 Delta Pressure | DPF2_DP | kPa | 0x01 | 1 | 2 | - | signed | - | 1 | 100 | 0 |
| Diesel Particulate Filter Bank 2 Inlet Pressure | DPF2_INP | kPa | 0x02 | 3 | 2 | - | unsigned | - | 1 | 100 | 0 |
| Diesel Particulate Filter Bank 2 Outlet Pressure | DPF2_OUTP | kPa | 0x04 | 5 | 2 | - | unsigned | - | 1 | 100 | 0 |

### PID7C

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DPF Bank 1 Inlet Temperature Sensor | DPF1_INT | °C | 0x01 | 1 | 2 | - | unsigned | - | 1 | 10 | -40 |
| DPF Bank 1 Outlet Temperature Sensor | DPF1_OUTT | °C | 0x02 | 3 | 2 | - | unsigned | - | 1 | 10 | -40 |
| DPF Bank 2 Inlet Temperature Sensor | DPF2_INT | °C | 0x04 | 5 | 2 | - | unsigned | - | 1 | 10 | -40 |
| DPF Bank 2 Outlet Temperature Sensor | DPF2_OUTT | °C | 0x08 | 7 | 2 | - | unsigned | - | 1 | 10 | -40 |

### NNTESTAT

| MASKE | WERT | TEXT |
| --- | --- | --- |
| 0x01 | 0x01 | inside control area |
| 0x02 | 0x02 | outside control area |
| 0x04 | 0x04 | inside manufacturer-specific NOx NTE carve-out area |
| 0x08 | 0x08 | NTE deficiency for NOx active area |
| 0x10 | 0x10 | <undefined> |
| 0x20 | 0x20 | <undefined> |
| 0x40 | 0x40 | <undefined> |
| 0x80 | 0x80 | <undefined> |

### PNTESTAT

| MASKE | WERT | TEXT |
| --- | --- | --- |
| 0x01 | 0x01 | inside control area |
| 0x02 | 0x02 | outside control area |
| 0x04 | 0x04 | inside manufacturer-specific PM NTE carve-out area |
| 0x08 | 0x08 | NTE deficiency for PM active area |
| 0x10 | 0x10 | <undefined> |
| 0x20 | 0x20 | <undefined> |
| 0x40 | 0x40 | <undefined> |
| 0x80 | 0x80 | <undefined> |

### PID7F

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total Engine Run Time | RUN_TIME | min | 0x01 | 1 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total Idle Run Time | IDLE_TIME | min | 0x02 | 5 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total Run Time With PTO Active | PTO_TIME | min | 0x04 | 9 | 4 | - | unsigned | - | 1 | 60 | 0 |

### PID81

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total run time with EI-AECD #1 Timer 1 active | AECD1_TIME1 | min | 0x01 | 1 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #1 Timer 2 active | AECD1_TIME2 | min | 0x01 | 5 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #2 Timer 1 active | AECD2_TIME1 | min | 0x02 | 9 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #2 Timer 2 active | AECD2_TIME2 | min | 0x02 | 13 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #3 Timer 1 active | AECD3_TIME1 | min | 0x04 | 17 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #3 Timer 2 active | AECD3_TIME2 | min | 0x04 | 21 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #4 Timer 1 active | AECD4_TIME1 | min | 0x08 | 25 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #4 Timer 2 active | AECD4_TIME2 | min | 0x08 | 29 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #5 Timer 1 active | AECD5_TIME1 | min | 0x10 | 33 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #5 Timer 2 active | AECD5_TIME2 | min | 0x10 | 37 | 4 | - | unsigned | - | 1 | 60 | 0 |

### PID82

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total run time with EI-AECD #6 Timer 1 active | AECD6_TIME1 | min | 0x01 | 1 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #6 Timer 2 active | AECD6_TIME2 | min | 0x01 | 5 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #7 Timer 1 active | AECD7_TIME1 | min | 0x02 | 9 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #7 Timer 2 active | AECD7_TIME2 | min | 0x02 | 13 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #8 Timer 1 active | AECD8_TIME1 | min | 0x04 | 17 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #8 Timer 2 active | AECD8_TIME2 | min | 0x04 | 21 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #9 Timer 1 active | AECD9_TIME1 | min | 0x08 | 25 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #9 Timer 2 active | AECD9_TIME2 | min | 0x08 | 29 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #10 Timer 1 active | AECD10_TIME1 | min | 0x10 | 33 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #10 Timer 2 active | AECD10_TIME2 | min | 0x10 | 37 | 4 | - | unsigned | - | 1 | 60 | 0 |

### PID83

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NOx Sensor Concentration Bank 1 Sensor 1 | NOX11 | ppm | 0x01 | 1 | 2 | - | unsigned | - | 1 | 1 | 0 |
| NOx Sensor Concentration Bank 1 Sensor 2 | NOX12 | ppm | 0x02 | 3 | 2 | - | unsigned | - | 1 | 1 | 0 |
| NOx Sensor Concentration Bank 2 Sensor 1 | NOX21 | ppm | 0x04 | 5 | 2 | - | unsigned | - | 1 | 1 | 0 |
| NOx Sensor Concentration Bank 2 Sensor 2 | NOX22 | ppm | 0x08 | 7 | 2 | - | unsigned | - | 1 | 1 | 0 |

### PID85

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Average Reagent Consumption | REAG_RATE | L/h | 0x01 | 1 | 2 | - | unsigned | - | 1 | 200 | 0 |
| Average Demanded Reagent Consumption | REAG_DEMD | L/h | 0x02 | 3 | 2 | - | unsigned | - | 1 | 200 | 0 |
| Reagent Tank Level | REAG_LVL | % | 0x04 | 5 | 1 | - | unsigned | - | 100 | 255 | 0 |
| Total run time by the engine while NOx warning mode is activated | NWI_TIME | min | 0x08 | 6 | 4 | - | unsigned | - | 1 | 60 | 0 |

### PID86

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PM Sensor Mass Concentration Bank 1 Sensor 1 | PM11 | mg/m³ | 0x01 | 1 | 2 | - | unsigned | - | 1 | 80 | 0 |
| PM Sensor Mass Concentration Bank 2 Sensor 1 | PM21 | mg/m³ | 0x02 | 3 | 2 | - | unsigned | - | 1 | 80 | 0 |

### PID87

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Intake Manifold Absolute Pressure A | MAP_A | kPa | 0x01 | 1 | 2 | - | unsigned | - | 1 | 32 | 0 |
| Intake Manifold Absolute Pressure B | MAP_B | kPa | 0x02 | 3 | 2 | - | unsigned | - | 1 | 32 | 0 |

### PID88

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SCR inducement system actual state | SCR_INDUCE_SYSTEM | - | - | 0 | 1 | - | b0+n | SCRInduceSystem | - | - | - |
| SCR inducement system state 10K history (0 - 10,000 km) | SCR_INDUCE_SYSTEM_HIST1 | - | - | 1 | 1 | - | b0+n | SCRInduceSystemHist1_3 | - | - | - |
| SCR inducement system state 20K history (10,000 - 20,000 km) | SCR_INDUCE_SYSTEM_HIST2 | - | - | 1 | 1 | - | b0+n | SCRInduceSystemHist2_4 | - | - | - |
| SCR inducement system state 30K history (20,000 - 30,000 km) | SCR_INDUCE_SYSTEM_HIST3 | - | - | 2 | 1 | - | b0+n | SCRInduceSystemHist1_3 | - | - | - |
| SCR inducement system state 40K history (30,000 - 40,000 km) | SCR_INDUCE_SYSTEM_HIST4 | - | - | 2 | 1 | - | b0+n | SCRInduceSystemHist2_4 | - | - | - |
| Distance travelled while inducement system active in current 10K block (0 - 10,000 km) | SCR_IND_DIST_1N | km | - | 3 | 2 | - | unsigned | - | 1 | 1 | 0 |
| Distance travelled in current 10K block (0 - 10,000 km block) | SCR_IND_DIST_1D | km | - | 5 | 2 | - | unsigned | - | 1 | 1 | 0 |
| Distance travelled while inducement system active in 20K block (10 - 20,000 km) | SCR_IND_DIST_2N | km | - | 7 | 2 | - | unsigned | - | 1 | 1 | 0 |
| Distance travelled while inducement system active in 30K block (20 - 30,000 km) | SCR_IND_DIST_3N | km | - | 9 | 2 | - | unsigned | - | 1 | 1 | 0 |
| Distance travelled while inducement system active in 40K block (30 - 40,000 km) | SCR_IND_DIST_4N | km | - | 11 | 2 | - | unsigned | - | 1 | 1 | 0 |

### SCRINDUCESYSTEM

| MASKE | WERT | TEXT |
| --- | --- | --- |
| 0x80 | 0x80 | inducement system active |
| 0x01 | 0x01 | reagent level too low |
| 0x02 | 0x02 | incorrect reagent |
| 0x04 | 0x04 | deviation of reagent consumption |
| 0x08 | 0x08 | NOx emissions too high |

### SCRINDUCESYSTEMHIST1_3

| MASKE | WERT | TEXT |
| --- | --- | --- |
| 0x01 | 0x01 | reagent level too low |
| 0x02 | 0x02 | incorrect reagent |
| 0x04 | 0x04 | deviation of reagent consumption |
| 0x08 | 0x08 | NOx emissions too high |

### SCRINDUCESYSTEMHIST2_4

| MASKE | WERT | TEXT |
| --- | --- | --- |
| 0x10 | 0x10 | reagent level too low |
| 0x20 | 0x20 | incorrect reagent |
| 0x40 | 0x40 | deviation of reagent consumption |
| 0x80 | 0x80 | NOx emissions too high |

### PID89

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total run time with EI-AECD #11 Timer 1 active | AECD11_TIME1 | min | 0x01 | 1 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #11 Timer 2 active | AECD11_TIME2 | min | 0x01 | 5 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #12 Timer 1 active | AECD12_TIME1 | min | 0x02 | 9 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #12 Timer 2 active | AECD12_TIME2 | min | 0x02 | 13 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #13 Timer 1 active | AECD13_TIME1 | min | 0x04 | 17 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #13 Timer 2 active | AECD13_TIME2 | min | 0x04 | 21 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #14 Timer 1 active | AECD14_TIME1 | min | 0x08 | 25 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #14 Timer 2 active | AECD14_TIME2 | min | 0x08 | 29 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #15 Timer 1 active | AECD15_TIME1 | min | 0x10 | 33 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #15 Timer 2 active | AECD15_TIME2 | min | 0x10 | 37 | 4 | - | unsigned | - | 1 | 60 | 0 |

### PID8A

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Total run time with EI-AECD #16 Timer 1 active | AECD16_TIME1 | min | 0x01 | 1 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #16 Timer 2 active | AECD16_TIME2 | min | 0x01 | 5 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #17 Timer 1 active | AECD17_TIME1 | min | 0x02 | 9 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #17 Timer 2 active | AECD17_TIME2 | min | 0x02 | 13 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #18 Timer 1 active | AECD18_TIME1 | min | 0x04 | 17 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #18 Timer 2 active | AECD18_TIME2 | min | 0x04 | 21 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #19 Timer 1 active | AECD19_TIME1 | min | 0x08 | 25 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #19 Timer 2 active | AECD19_TIME2 | min | 0x08 | 29 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #20 Timer 1 active | AECD20_TIME1 | min | 0x10 | 33 | 4 | - | unsigned | - | 1 | 60 | 0 |
| Total run time with EI-AECD #20 Timer 2 active | AECD20_TIME2 | min | 0x10 | 37 | 4 | - | unsigned | - | 1 | 60 | 0 |

### PID8B

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Diesel Particulate Filter (DPF) Regen Status | DPF_REGEN_STAT | - | 0x01 | 1 | 1 | - | b0-n | DPFRegenStat | - | - | - |
| Diesel Particulate Filter (DPF) Regen Type | DPF_REGEN_TYP | - | 0x02 | 1 | 1 | - | b0-n | DPFRegenTyp | - | - | - |
| NOx Adsorber Regen Status | NOX_ADS_REGEN | - | 0x04 | 1 | 1 | - | b0-n | NOxAdsRegen | - | - | - |
| NOx Adsorber Desulfurization Status | NOX_ADS_DESULF | - | 0x08 | 1 | 1 | - | b0-n | NOxAdsDesulf | - | - | - |
| Normalized Trigger for DPF Regen | DPF_REGEN_PCT | % | 0x10 | 2 | 1 | - | unsigned | - | 100 | 255 | 0 |
| Average Time Between DPF Regens | DPF_REGEN_AVGT | min | 0x20 | 3 | 2 | - | unsigned | - | 1 | 1 | 0 |
| Average Distance Between DPF Regens | DPF_REGEN_AVGD | km | 0x40 | 5 | 2 | - | unsigned | - | 1 | 1 | 0 |

### DPFREGENSTAT

| MASKE | WERT | TEXT |
| --- | --- | --- |
| 0x01 | 0x00 | DPF Regen not in progress |
| 0x01 | 0x01 | DPF Regen in progress |

### DPFREGENTYP

| MASKE | WERT | TEXT |
| --- | --- | --- |
| 0x02 | 0x00 | Passive DPF Regen |
| 0x02 | 0x02 | Active DPF Regen |

### NOXADSREGEN

| MASKE | WERT | TEXT |
| --- | --- | --- |
| 0x04 | 0x00 | Adsorption in progress (no regen) |
| 0x04 | 0x04 | Desorption (regen) in progress |

### NOXADSDESULF

| MASKE | WERT | TEXT |
| --- | --- | --- |
| 0x08 | 0x00 | Desulfurization not in progress |
| 0x08 | 0x08 | Desulfurization in progress |

### PID8C

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| O2 Sensor Concentration Bank 1 Sensor 1 | O2S11_PCT | % | 0x01 | 1 | 2 | - | unsigned | - | 0.001526 | 1 | 0 |
| O2 Sensor Concentration Bank 1 Sensor 2 | O2S12_PCT | % | 0x02 | 3 | 2 | - | unsigned | - | 0.001526 | 1 | 0 |
| O2 Sensor Concentration Bank 2 Sensor 1 | O2S21_PCT | % | 0x04 | 5 | 2 | - | unsigned | - | 0.001526 | 1 | 0 |
| O2 Sensor Concentration Bank 2 Sensor 2 | O2S22_PCT | % | 0x08 | 7 | 2 | - | unsigned | - | 0.001526 | 1 | 0 |
| O2 Sensor Lambda Bank 1 Sensor 1 | LAMBDA11 | - | 0x10 | 9 | 2 | - | unsigned | - | 0.000122 | 1 | 0 |
| O2 Sensor Lambda Bank 1 Sensor 2 | LAMBDA12 | - | 0x20 | 11 | 2 | - | unsigned | - | 0.000122 | 1 | 0 |
| O2 Sensor Lambda Bank 2 Sensor 1 | LAMBDA21 | - | 0x40 | 13 | 2 | - | unsigned | - | 0.000122 | 1 | 0 |
| O2 Sensor Lambda Bank 2 Sensor 2 | LAMBDA22 | - | 0x80 | 15 | 2 | - | unsigned | - | 0.000122 | 1 | 0 |

### PID8F

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PM Sensor active status Bank 1 Sensor 1 | PM11_ACTIVE | - | 0x01 | 1 | 1 | - | b0-n | PMActiveStat | - | - | - |
| PM Sensor regen status Bank 1 Sensor 1 | PM11_REGEN | - | 0x01 | 1 | 1 | - | b0-n | PMRegenStat | - | - | - |
| PM Sensor normalized output value Bank 1 Sensor 1 | PM11 | % | 0x02 | 2 | 2 | - | signed | - | 1 | 100 | 0 |
| PM Sensor active status Bank 2 Sensor 1 | PM21_ACTIVE | - | 0x04 | 4 | 1 | - | b0-n | PMActiveStat | - | - | - |
| PM Sensor regen status Bank 2 Sensor 1 | PM21_REGEN | - | 0x04 | 4 | 1 | - | b0-n | PMRegenStat | - | - | - |
| PM Sensor normalized output value Bank 2 Sensor 1 | PM21 | % | 0x08 | 5 | 2 | - | signed | - | 1 | 100 | 0 |

### PMACTIVESTAT

| MASKE | WERT | TEXT |
| --- | --- | --- |
| 0x01 | 0x00 | Sensor not actively measuring (NO) |
| 0x01 | 0x01 | Sensor actively measuring (YES) |

### PMREGENSTAT

| MASKE | WERT | TEXT |
| --- | --- | --- |
| 0x02 | 0x00 | Sensor not regenerating (NO) |
| 0x02 | 0x02 | Sensor regenerating (YES) |

### PID90

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Discriminatory/non-discriminatory display strategy | MI_DISP_VOBD | - | - | 0 | 1 | 0x03 | 0-n | MIDispVOBD | - | - | - |
| Vehicle Malfunction Indicator status | MI_MODE_VOBD | - | - | 0 | 1 | 0x3C | 0-n | MIMode | - | - | - |
| Emission system readiness | VOBD_RDY | - | - | 0 | 1 | - | b0-n | VOBDRdy | - | - | - |
| Number of engine operating hours that the continuous MI was active. (Continuous MI counter) | VOBD_MI_TIME | h | - | 1 | 2 | - | unsigned | - | 1 | 1 | 0 |

### MIDISPVOBD

| WERT | TEXT |
| --- | --- |
| 0x00 | All ECUs employ a non-discriminatory MI display strategy |
| 0x01 | All ECUs employ a discriminatory MI display strategy |
| 0x03 | Not available/Not required of this vehicle |
| 0x02 | <undefined> |

### MIMODE

| WERT | TEXT |
| --- | --- |
| 0x00 | MI Activation Mode 1(MI Off) |
| 0x01 | MI Activation Mode 2(On Demand MI) |
| 0x02 | MI Activation Mode 3(Short MI) |
| 0x03 | MI Activation Mode 4(Continuous MI) |
| 0x0E | Error |
| 0x0F | Not available/Not required for this vehicle |
| 0xXX | <undefined> |

### VOBDRDY

| MASKE | WERT | TEXT |
| --- | --- | --- |
| 0x40 | 0x00 | all vehicle emissions system monitors complete |
| 0x40 | 0x40 | all vehicle emissions system monitors not complete |

### PID91

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ECU Malfunction Indication status | MI_MODE_ECU | - | - | 0 | 1 | 0x0F | 0-n | MIMode | - | - | - |
| Number of engine operating hours that the continuous MI was active. (Continuous MI counter) | OBD_MI_TIME | h | - | 1 | 2 | - | unsigned | - | 1 | 1 | 0 |
| Highest ECU B1 counter | OBD_B1_TIME | h | - | 3 | 2 | - | unsigned | - | 1 | 1 | 0 |

### PID92

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Fuel Pressure Control 1 Status | FP1 | - | 0x01 | 1 | 1 | - | b0-n | FP1Stat | - | - | - |
| Fuel Injection Quantity Control 1 Status | FIQ1 | - | 0x02 | 1 | 1 | - | b0-n | FIQ1Stat | - | - | - |
| Fuel Injection Timing Control 1 Status | FIT1 | - | 0x04 | 1 | 1 | - | b0-n | FIT1Stat | - | - | - |
| Idle Fuel Balance/Contribution Control 1 Status | IFB1 | - | 0x08 | 1 | 1 | - | b0-n | IFB1Stat | - | - | - |
| Fuel Pressure Control 2 Status | FP2 | - | 0x10 | 1 | 1 | - | b0-n | FP2Stat | - | - | - |
| Fuel Injection Quantity Control 2 Status | FIQ2 | - | 0x20 | 1 | 1 | - | b0-n | FIQ2Stat | - | - | - |
| Fuel Injection Timing Control 2 Status | FIT2 | - | 0x40 | 1 | 1 | - | b0-n | FIT2Stat | - | - | - |
| Idle Fuel Balance/Contribution Control 2 Status | IFB2 | - | 0x80 | 1 | 1 | - | b0-n | IFB2Stat | - | - | - |

### FP1STAT

| MASKE | WERT | TEXT |
| --- | --- | --- |
| 0x01 | 0x00 | Fuel Pressure 1 not in closed loop control |
| 0x01 | 0x01 | Fuel Pressure 1 in closed loop control |

### FIQ1STAT

| MASKE | WERT | TEXT |
| --- | --- | --- |
| 0x02 | 0x00 | Fuel Injection Quantity 1 not in closed loop control |
| 0x02 | 0x02 | Fuel Injection Quantity 1 in closed loop control |

### FIT1STAT

| MASKE | WERT | TEXT |
| --- | --- | --- |
| 0x04 | 0x00 | Fuel Injection Timing 1 not in closed loop control |
| 0x04 | 0x04 | Fuel Injection Timing 1 in closed loop control |

### IFB1STAT

| MASKE | WERT | TEXT |
| --- | --- | --- |
| 0x08 | 0x00 | Idle Fuel Balance/Contribution Control 1 not in closed loop |
| 0x08 | 0x08 | Idle Fuel Balance/Contribution Control 1 in closed loop |

### FP2STAT

| MASKE | WERT | TEXT |
| --- | --- | --- |
| 0x10 | 0x00 | Fuel Pressure 2 not in closed loop control |
| 0x10 | 0x10 | Fuel Pressure 2 in closed loop control |

### FIQ2STAT

| MASKE | WERT | TEXT |
| --- | --- | --- |
| 0x20 | 0x00 | Fuel Injection Quantity 2 not in closed loop control |
| 0x20 | 0x20 | Fuel Injection Quantity 2 in closed loop control |

### FIT2STAT

| MASKE | WERT | TEXT |
| --- | --- | --- |
| 0x40 | 0x00 | Fuel Injection Timing 2 not in closed loop control |
| 0x40 | 0x40 | Fuel Injection Timing 2 in closed loop control |

### IFB2STAT

| MASKE | WERT | TEXT |
| --- | --- | --- |
| 0x80 | 0x00 | Idle Fuel Balance/Contribution Control 2 not in closed loop |
| 0x80 | 0x80 | Idle Fuel Balance/Contribution Control 2 in closed loop |

### PID93

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Cumulative continuous MI counter | MI_TIME_CUM | h | 0x01 | 1 | 2 | - | unsigned | - | 1 | 1 | 0 |

### PID94

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| NOx warning system activation status | NOX_WARN_ACT | - | 0x01 | 1 | 1 | - | b0-n | NOxWarnActStat | - | - | - |
| Level one inducement status | INDUC_L1 | - | 0x01 | 1 | 1 | 0x06 | 0-n | InducL1Stat | - | - | - |
| Level two inducement status | INDUC_L2 | - | 0x01 | 1 | 1 | 0x18 | 0-n | InducL2Stat | - | - | - |
| Level three inducement status | INDUC_L3 | - | 0x01 | 1 | 1 | 0x60 | 0-n | InducL3Stat | - | - | - |
| Reagent quality counter | REAG_QUAL_TIME | h | 0x02 | 2 | 2 | - | unsigned | - | 1 | 1 | 0 |
| Reagent Consumption Counter | REAG_CON_TIME | h | 0x04 | 4 | 2 | - | unsigned | - | 1 | 1 | 0 |
| Dosing Activity Counter | REAG_DOSE_TIME | h | 0x08 | 6 | 2 | - | unsigned | - | 1 | 1 | 0 |
| EGR valve counter | EGR_TIME | h | 0x10 | 8 | 2 | - | unsigned | - | 1 | 1 | 0 |
| Monitoring System Counter | NOX_DTC_TIME | h | 0x20 | 10 | 2 | - | unsigned | - | 1 | 1 | 0 |

### NOXWARNACTSTAT

| MASKE | WERT | TEXT |
| --- | --- | --- |
| 0x01 | 0x00 | Warning system inactive |
| 0x01 | 0x01 | Warning system active |

### INDUCL1STAT

| WERT | TEXT |
| --- | --- |
| 0x00 | Level one inducement inactive |
| 0x01 | Level one inducement enabled |
| 0x02 | Level one inducement active |
| 0x03 | Level one inducement not supported |

### INDUCL2STAT

| WERT | TEXT |
| --- | --- |
| 0x00 | Level two inducement inactive |
| 0x01 | Level two inducement enabled |
| 0x02 | Level two inducement active |
| 0x03 | Level two inducement not supported |

### INDUCL3STAT

| WERT | TEXT |
| --- | --- |
| 0x00 | Level three inducement inactive |
| 0x01 | Level three inducement enabled |
| 0x02 | Level three inducement active |
| 0x03 | Level three inducement not supported |

### PID98

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Exhaust Gas Temperature Bank 1, Sensor 5 | EGT15 | °C | 0x01 | 1 | 2 | - | unsigned | - | 1 | 10 | -40 |
| Exhaust Gas Temperature Bank 1, Sensor 6 | EGT16 | °C | 0x02 | 3 | 2 | - | unsigned | - | 1 | 10 | -40 |
| Exhaust Gas Temperature Bank 1, Sensor 7 | EGT17 | °C | 0x04 | 5 | 2 | - | unsigned | - | 1 | 10 | -40 |
| Exhaust Gas Temperature Bank 1, Sensor 8 | EGT18 | °C | 0x08 | 7 | 2 | - | unsigned | - | 1 | 10 | -40 |

### PID99

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Exhaust Gas Temperature Bank 2, Sensor 5 | EGT25 | °C | 0x01 | 1 | 2 | - | unsigned | - | 1 | 10 | -40 |
| Exhaust Gas Temperature Bank 2, Sensor 6 | EGT26 | °C | 0x02 | 3 | 2 | - | unsigned | - | 1 | 10 | -40 |
| Exhaust Gas Temperature Bank 2, Sensor 7 | EGT27 | °C | 0x04 | 5 | 2 | - | unsigned | - | 1 | 10 | -40 |
| Exhaust Gas Temperature Bank 2, Sensor 8 | EGT28 | °C | 0x08 | 7 | 2 | - | unsigned | - | 1 | 10 | -40 |

### PID9C

| INFO | ERG_NAME | EINH | SUPP_MASKE | BYTE1 | ANZ_BYTE | BIT_MASKE | TYP | TABELLE | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| O2 Sensor Concentration Bank 1 Sensor 3 | O2S13_PCT | % | 0x01 | 1 | 2 | - | unsigned | - | 0.001526 | 1 | 0 |
| O2 Sensor Concentration Bank 1 Sensor 4 | O2S14_PCT | % | 0x02 | 3 | 2 | - | unsigned | - | 0.001526 | 1 | 0 |
| O2 Sensor Concentration Bank 2 Sensor 3 | O2S23_PCT | % | 0x04 | 5 | 2 | - | unsigned | - | 0.001526 | 1 | 0 |
| O2 Sensor Concentration Bank 2 Sensor 4 | O2S24_PCT | % | 0x08 | 7 | 2 | - | unsigned | - | 0.001526 | 1 | 0 |
| O2 Sensor Lambda Bank 1 Sensor 3 | LAMBDA13 | - | 0x10 | 9 | 2 | - | unsigned | - | 0.000122 | 1 | 0 |
| O2 Sensor Lambda Bank 1 Sensor 4 | LAMBDA14 | - | 0x20 | 11 | 2 | - | unsigned | - | 0.000122 | 1 | 0 |
| O2 Sensor Lambda Bank 2 Sensor 3 | LAMBDA23 | - | 0x40 | 13 | 2 | - | unsigned | - | 0.000122 | 1 | 0 |
| O2 Sensor Lambda Bank 2 Sensor 4 | LAMBDA24 | - | 0x80 | 15 | 2 | - | unsigned | - | 0.000122 | 1 | 0 |

### UNITANDSCALINGIDS

| USID | EINH | TYP | MUL | DIV | ADD |
| --- | --- | --- | --- | --- | --- |
| 0x01 |  | unsigned | 1 | 1 | 0 |
| 0x02 |  | unsigned | 1 | 10 | 0 |
| 0x03 |  | unsigned | 1 | 100 | 0 |
| 0x04 |  | unsigned | 1 | 1000 | 0 |
| 0x05 |  | unsigned | 0.0000305 | - | 0 |
| 0x06 |  | unsigned | 0.000305 | - | 0 |
| 0x07 | rpm | unsigned | 1 | 4 | 0 |
| 0x08 | km/h | unsigned | 1 | 100 | 0 |
| 0x09 | km/h | unsigned | 1 | 1 | 0 |
| 0x0A | V | unsigned | 0.000122 | - | 0 |
| 0x0B | V | unsigned | 1 | 1000 | 0 |
| 0x0C | V | unsigned | 1 | 100 | 0 |
| 0x0D | mA | unsigned | 1 | 256 | 0 |
| 0x0E | A | unsigned | 1 | 1000 | 0 |
| 0x0F | A | unsigned | 1 | 100 | 0 |
| 0x10 | s | unsigned | 1 | 1000 | 0 |
| 0x11 | s | unsigned | 1 | 10 | 0 |
| 0x12 | s | unsigned | 1 | 1 | 0 |
| 0x13 | Ohm | unsigned | 1 | 1000 | 0 |
| 0x14 | kOhm | unsigned | 1 | 1000 | 0 |
| 0x15 | kOhm | unsigned | 1 | 1 | 0 |
| 0x16 | °C | unsigned | 1 | 10 | -40 |
| 0x17 | kPa | unsigned | 1 | 100 | 0 |
| 0x18 | kPa | unsigned | 0.0117 | - | 0 |
| 0x19 | kPa | unsigned | 0.079 | - | 0 |
| 0x1A | kPa | unsigned | 1 | 1 | 0 |
| 0x1B | kPa | unsigned | 10 | 1 | 0 |
| 0x1C | ° | unsigned | 1 | 100 | 0 |
| 0x1D | ° | unsigned | 1 | 2 | 0 |
| 0x1E | lambda | unsigned | 0.0000305 | - | 0 |
| 0x1F | A/F ratio | unsigned | 1 | 20 | 0 |
| 0x20 |  | unsigned | 1 | 256 | 0 |
| 0x21 | Hz | unsigned | 1 | 1000 | 0 |
| 0x22 | Hz | unsigned | 1 | 1 | 0 |
| 0x23 | MHz | unsigned | 1 | 1000 | 0 |
| 0x24 | counts | unsigned | 1 | 1 | 0 |
| 0x25 | km | unsigned | 1 | 1 | 0 |
| 0x26 | V/ms | unsigned | 1 | 10000 | 0 |
| 0x27 | g/s | unsigned | 1 | 100 | 0 |
| 0x28 | g/s | unsigned | 1 | 1 | 0 |
| 0x29 | kPa/s | unsigned | 1 | 4000 | 0 |
| 0x2A | kg/h | unsigned | 1 | 1000 | 0 |
| 0x2B | switches | unsigned | 1 | 1 | 0 |
| 0x2C | g/cyl | unsigned | 1 | 100 | 0 |
| 0x2D | mg/stroke | unsigned | 1 | 100 | 0 |
| 0x2E |  | unsigned | 1 | 1 | 0 |
| 0x2F | % | unsigned | 1 | 100 | 0 |
| 0x30 | % | unsigned | 0.001526 | - | 0 |
| 0x31 | L | unsigned | 1 | 1000 | 0 |
| 0x32 | mm | unsigned | 0.0007747 | - | 0 |
| 0x33 | lambda | unsigned | 0.00024414 | - | 0 |
| 0x34 | min | unsigned | 1 | 1 | 0 |
| 0x35 | s | unsigned | 1 | 100 | 0 |
| 0x36 | g | unsigned | 1 | 100 | 0 |
| 0x37 | g | unsigned | 1 | 10 | 0 |
| 0x38 | g | unsigned | 1 | 1 | 0 |
| 0x39 | % | unsigned | 1 | 100 | -327.68 |
| 0x3A | g | unsigned | 1 | 1000 | 0 |
| 0x3B | g | unsigned | 1 | 10000 | 0 |
| 0x3C | microsec | unsigned | 1 | 10 | 0 |
| 0x3D | mA | unsigned | 1 | 100 | 0 |
| 0x3E | mm2 | unsigned | 0.00006103516 | - | 0 |
| 0x3F | L | unsigned | 1 | 100 | 0 |
| 0x40 | ppm | unsigned | 1 | 1 | 0 |
| 0x41 | microA | unsigned | 1 | 100 | 0 |
| 0x42 | kJ | unsigned | 1 | 10 | 0 |
| 0x43 | g/kWh | unsigned | 0.00024414 | - | 0 |
| 0x81 |  | signed | 1 | 1 | 0 |
| 0x82 |  | signed | 1 | 10 | 0 |
| 0x83 |  | signed | 1 | 100 | 0 |
| 0x84 |  | signed | 1 | 1000 | 0 |
| 0x85 |  | signed | 0.0000305 | - | 0 |
| 0x86 |  | signed | 0.000305 | - | 0 |
| 0x87 | ppm | signed | 1 | 1 | 0 |
| 0x8A | V | signed | 0.000122 | - | 0 |
| 0x8B | V | signed | 1 | 1000 | 0 |
| 0x8C | V | signed | 1 | 100 | 0 |
| 0x8D | mA | signed | 0.00390625 | - | 0 |
| 0x8E | A | signed | 1 | 1000 | 0 |
| 0x8F | microsec | signed | 1 | 1 | 0 |
| 0x90 | s | signed | 1 | 1000 | 0 |
| 0x91 | s | signed | 1 | 10 | 0 |
| 0x92 | Nm | signed | 1 | 10 | 0 |
| 0x96 | °C | signed | 1 | 10 | 0 |
| 0x97 | °C | signed | 1 | 100 | 0 |
| 0x98 | mg/stroke | signed | 1 | 1 | 0 |
| 0x99 | kPa | signed | 1 | 10 | 0 |
| 0x9C | ° | signed | 1 | 100 | 0 |
| 0x9D | ° | signed | 1 | 2 | 0 |
| 0xA8 | g/s | signed | 1 | 1 | 0 |
| 0xA9 | Pa/s | signed | 1 | 4 | 0 |
| 0xAD | mg/stroke | signed | 1 | 100 | 0 |
| 0xAE | mg/stroke | signed | 1 | 10 | 0 |
| 0xAF | % | signed | 1 | 100 | 0 |
| 0xB0 | % | signed | 0.003052 | - | 0 |
| 0xB1 | mV/s | signed | 2 | 1 | 0 |
| 0xFB | kPa | signed | 10 | 1 | 0 |
| 0xFC | kPa | signed | 1 | 100 | 0 |
| 0xFD | kPa | signed | 1 | 1000 | 0 |
| 0xFE | Pa | signed | 1 | 4 | 0 |
| 0xXY | <undefined> | - | - | - | - |

### OBDMID_NAME

| WERT | TEXT |
| --- | --- |
| 0x01 | Exhaust Gas Sensor Monitor Bank 1 - Sensor 1 |
| 0x02 | Exhaust Gas Sensor Monitor Bank 1 - Sensor 2 |
| 0x03 | Exhaust Gas Sensor Monitor Bank 1 - Sensor 3 |
| 0x04 | Exhaust Gas Sensor Monitor Bank 1 - Sensor 4 |
| 0x05 | Exhaust Gas Sensor Monitor Bank 2 - Sensor 1 |
| 0x06 | Exhaust Gas Sensor Monitor Bank 2 - Sensor 2 |
| 0x07 | Exhaust Gas Sensor Monitor Bank 2 - Sensor 3 |
| 0x08 | Exhaust Gas Sensor Monitor Bank 2 - Sensor 4 |
| 0x09 | Exhaust Gas Sensor Monitor Bank 3 - Sensor 1 |
| 0x0A | Exhaust Gas Sensor Monitor Bank 3 - Sensor 2 |
| 0x0B | Exhaust Gas Sensor Monitor Bank 3 - Sensor 3 |
| 0x0C | Exhaust Gas Sensor Monitor Bank 3 - Sensor 4 |
| 0x0D | Exhaust Gas Sensor Monitor Bank 4 - Sensor 1 |
| 0x0E | Exhaust Gas Sensor Monitor Bank 4 - Sensor 2 |
| 0x0F | Exhaust Gas Sensor Monitor Bank 4 - Sensor 3 |
| 0x10 | Exhaust Gas Sensor Monitor Bank 4 - Sensor 4 |
| 0x11 | Exhaust Gas Sensor Monitor Bank 1 - Sensor 5 |
| 0x12 | Exhaust Gas Sensor Monitor Bank 2 - Sensor 5 |
| 0x21 | Catalyst Monitor Bank 1 |
| 0x22 | Catalyst Monitor Bank 2 |
| 0x23 | Catalyst Monitor Bank 3 |
| 0x24 | Catalyst Monitor Bank 4 |
| 0x31 | EGR Monitor Bank 1 |
| 0x32 | EGR Monitor Bank 2 |
| 0x33 | EGR Monitor Bank 3 |
| 0x34 | EGR Monitor Bank 4 |
| 0x35 | VVT Monitor Bank 1 |
| 0x36 | VVT Monitor Bank 2 |
| 0x37 | VVT Monitor Bank 3 |
| 0x38 | VVT Monitor Bank 4 |
| 0x39 | EVAP Monitor (Cap Off / 0.150 inches) |
| 0x3A | EVAP Monitor (0.090 inches) |
| 0x3B | EVAP Monitor (0.040 inches) |
| 0x3C | EVAP Monitor (0.020 inches) |
| 0x3D | Purge Flow Monitor |
| 0x41 | Exhaust Gas Sensor Heater Monitor Bank 1 - Sensor 1 |
| 0x42 | Exhaust Gas Sensor Heater Monitor Bank 1 - Sensor 2 |
| 0x43 | Exhaust Gas Sensor Heater Monitor Bank 1 - Sensor 3 |
| 0x44 | Exhaust Gas Sensor Heater Monitor Bank 1 - Sensor 4 |
| 0x45 | Exhaust Gas Sensor Heater Monitor Bank 2 - Sensor 1 |
| 0x46 | Exhaust Gas Sensor Heater Monitor Bank 2 - Sensor 2 |
| 0x47 | Exhaust Gas Sensor Heater Monitor Bank 2 - Sensor 3 |
| 0x48 | Exhaust Gas Sensor Heater Monitor Bank 2 - Sensor 4 |
| 0x49 | Exhaust Gas Sensor Heater Monitor Bank 3 - Sensor 1 |
| 0x4A | Exhaust Gas Sensor Heater Monitor Bank 3 - Sensor 2 |
| 0x4B | Exhaust Gas Sensor Heater Monitor Bank 3 - Sensor 3 |
| 0x4C | Exhaust Gas Sensor Heater Monitor Bank 3 - Sensor 4 |
| 0x4D | Exhaust Gas Sensor Heater Monitor Bank 4 - Sensor 1 |
| 0x4E | Exhaust Gas Sensor Heater Monitor Bank 4 - Sensor 2 |
| 0x4F | Exhaust Gas Sensor Heater Monitor Bank 4 - Sensor 3 |
| 0x50 | Exhaust Gas Sensor Heater Monitor Bank 4 - Sensor 4 |
| 0x51 | Exhaust Gas Sensor Heater Monitor Bank 1 - Sensor 5 |
| 0x52 | Exhaust Gas Sensor Heater Monitor Bank 2 - Sensor 5 |
| 0x61 | Heated Catalyst Monitor Bank 1 |
| 0x62 | Heated Catalyst Monitor Bank 2 |
| 0x63 | Heated Catalyst Monitor Bank 3 |
| 0x64 | Heated Catalyst Monitor Bank 4 |
| 0x71 | Secondary Air Monitor 1 |
| 0x72 | Secondary Air Monitor 2 |
| 0x73 | Secondary Air Monitor 3 |
| 0x74 | Secondary Air Monitor 4 |
| 0x81 | Fuel System Monitor Bank 1 |
| 0x82 | Fuel System Monitor Bank 2 |
| 0x83 | Fuel System Monitor Bank 3 |
| 0x84 | Fuel System Monitor Bank 4 |
| 0x85 | Boost Pressure Control Monitor Bank 1 |
| 0x86 | Boost Pressure Control Monitor Bank 2 |
| 0x90 | NOx Adsorber Monitor Bank 1 |
| 0x91 | NOx Adsorber Monitor Bank 2 |
| 0x98 | NOx/SCR Catalyst Monitor Bank 1 |
| 0x99 | NOx/SCR Catalyst Monitor Bank 2 |
| 0xA1 | Misfire Monitor General Data |
| 0xA2 | Misfire Cylinder 1 Data |
| 0xA3 | Misfire Cylinder 2 Data |
| 0xA4 | Misfire Cylinder 3 Data |
| 0xA5 | Misfire Cylinder 4 Data |
| 0xA6 | Misfire Cylinder 5 Data |
| 0xA7 | Misfire Cylinder 6 Data |
| 0xA8 | Misfire Cylinder 7 Data |
| 0xA9 | Misfire Cylinder 8 Data |
| 0xAA | Misfire Cylinder 9 Data |
| 0xAB | Misfire Cylinder 10 Data |
| 0xAC | Misfire Cylinder 11 Data |
| 0xAD | Misfire Cylinder 12 Data |
| 0xAE | Misfire Cylinder 13 Data |
| 0xAF | Misfire Cylinder 14 Data |
| 0xB0 | Misfire Cylinder 15 Data |
| 0xB1 | Misfire Cylinder 16 Data |
| 0xB2 | PM Filter Monitor Bank 1 |
| 0xB3 | PM Filter Monitor Bank 2 |
| 0xE1 | Vehicle manufacturer defined OBDMID |
| 0xE2 | Vehicle manufacturer defined OBDMID |
| 0xE3 | Vehicle manufacturer defined OBDMID |
| 0xE4 | Vehicle manufacturer defined OBDMID |
| 0xE5 | Vehicle manufacturer defined OBDMID |
| 0xE6 | Vehicle manufacturer defined OBDMID |
| 0xE7 | Vehicle manufacturer defined OBDMID |
| 0xE8 | Vehicle manufacturer defined OBDMID |
| 0xE9 | Vehicle manufacturer defined OBDMID |
| 0xEA | Vehicle manufacturer defined OBDMID |
| 0xEB | Vehicle manufacturer defined OBDMID |
| 0xEC | Vehicle manufacturer defined OBDMID |
| 0xED | Vehicle manufacturer defined OBDMID |
| 0xEE | Vehicle manufacturer defined OBDMID |
| 0xEF | Vehicle manufacturer defined OBDMID |
| 0xF0 | Vehicle manufacturer defined OBDMID |
| 0xF1 | Vehicle manufacturer defined OBDMID |
| 0xF2 | Vehicle manufacturer defined OBDMID |
| 0xF3 | Vehicle manufacturer defined OBDMID |
| 0xF4 | Vehicle manufacturer defined OBDMID |
| 0xF5 | Vehicle manufacturer defined OBDMID |
| 0xF6 | Vehicle manufacturer defined OBDMID |
| 0xF7 | Vehicle manufacturer defined OBDMID |
| 0xF8 | Vehicle manufacturer defined OBDMID |
| 0xF9 | Vehicle manufacturer defined OBDMID |
| 0xFA | Vehicle manufacturer defined OBDMID |
| 0xFB | Vehicle manufacturer defined OBDMID |
| 0xFC | Vehicle manufacturer defined OBDMID |
| 0xFD | Vehicle manufacturer defined OBDMID |
| 0xFE | Vehicle manufacturer defined OBDMID |
| 0xFF | Vehicle manufacturer defined OBDMID |
| 0xXY | <undefined> |

### OBDSERVICE9

| ARG | ID | ID_INFO | INFO | ERG_NAME | EINH | TYP | ANZ_BYTE | TABELLE |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SUPP | 0x00 | - | - | - | - | - | - | - |
| VIN | 0x02 | Vehicle Identification Number | Vehicle Identification Number | VIN | - | string | 17 | - |
| CALID | 0x04 | Calibration Identifications | Calibration Identification | CALID | - | string | 16 | - |
| CVN | 0x06 | Calibration Verification Numbers | Calibration Verification Number | CVN | - | data | 4 | - |
| IPTSPARK | 0x08 | In-use Performance Tracking | - | - | - | list | - | IPTSparkList |
| ECUNAME | 0x0A | ECUNAME | - | - | - | list | - | ECUNAMEList |
| IPTCOMPR | 0x0B | In-use Performance Tracking | - | - | - | list | - | IPTComprList |
| ESN | 0x0D | Engine Serial Number | Engine Serial Number | ESN | - | 0string | 17 | - |
| EROTAN | 0x0F | Exhaust Regulation Or Type Approval Number | Exhaust Regulation Or Type Approval Number | EROTAN | - | 0string | 17 | - |
| GTR | 0x11 | WWH-OBD GTR Number | WWH-OBD GTR Number | GTR | - | string | 11 | - |
| FEOCNTR | 0x12 | Fueled Engine Operation Ignition Cycle Counter | Fueled Engine Operation Ignition Cycle Counter | FEOCNTR | - | unsigned int | 2 | - |
| EVAP | 0x14 | Distance Traveled Since Evap Monitoring Decision | Distance Traveled Since Evap Monitoring Decision | EVAP_DIST | - | unsigned int | 2 | - |
|  | 0xXY | <undefined> | <undefined> | <undefined> | - | - | - | - |

### IPTSPARKLIST

| INFO | ERG_NAME | EINH | BYTE1 | ANZ_BYTE | TYP |
| --- | --- | --- | --- | --- | --- |
| OBD Monitoring Conditions Encountered Counts | OBDCOND | cnts | 0 | 2 | unsigned int |
| Ignition Cycle Counter | IGNCNTR | cnts | 2 | 2 | unsigned int |
| Catalyst Monitor Completion Counts Bank 1 | CATCOMP1 | cnts | 4 | 2 | unsigned int |
| Catalyst Monitor Conditions Encountered Counts Bank 1 | CATCOND1 | cnts | 6 | 2 | unsigned int |
| Catalyst Monitor Completion Counts Bank 2 | CATCOMP2 | cnts | 8 | 2 | unsigned int |
| Catalyst Monitor Conditions Encountered Counts Bank 2 | CATCOND2 | cnts | 10 | 2 | unsigned int |
| O2 Sensor Monitor Completion Counts Bank 1 | O2SCOMP1 | cnts | 12 | 2 | unsigned int |
| O2 Sensor Monitor Conditions Encountered Counts Bank 1 | O2SCOND1 | cnts | 14 | 2 | unsigned int |
| O2 Sensor Monitor Completion Counts Bank 2 | O2SCOMP2 | cnts | 16 | 2 | unsigned int |
| O2 Sensor Monitor Conditions Encountered Counts Bank 2 | O2SCOND2 | cnts | 18 | 2 | unsigned int |
| EGR and/or VVT Monitor Completion Condition Counts | EGRCOMP | cnts | 20 | 2 | unsigned int |
| EGR and/or VVT Monitor Conditions Encountered Counts | EGRCOND | cnts | 22 | 2 | unsigned int |
| AIR Monitor Completion Condition Counts (Secondary Air) | AIRCOMP | cnts | 24 | 2 | unsigned int |
| AIR Monitor Conditions Encountered Counts (Secondary Air) | AIRCOND | cnts | 26 | 2 | unsigned int |
| EVAP Monitor Completion Condition Counts | EVAPCOMP | cnts | 28 | 2 | unsigned int |
| EVAP Monitor Conditions Encountered Counts | EVAPCOND | cnts | 30 | 2 | unsigned int |
| Secondary O2 Sensor Monitor Completion Counts Bank 1 | SO2SCOMP1 | cnts | 32 | 2 | unsigned int |
| Secondary O2 Sensor Monitor Conditions Encountered Counts Bank 1 | SO2SCOND1 | cnts | 34 | 2 | unsigned int |
| Secondary O2 Sensor Monitor Completion Counts Bank 2 | SO2SCOMP2 | cnts | 36 | 2 | unsigned int |
| Secondary O2 Sensor Monitor Conditions Encountered Counts Bank 2 | SO2SCOND2 | cnts | 38 | 2 | unsigned int |

### ECUNAMELIST

| INFO | ERG_NAME | EINH | BYTE1 | ANZ_BYTE | TYP |
| --- | --- | --- | --- | --- | --- |
| ECU | ECU | - | 0 | 4 | string |
| ECUNAME | ECUNAME | - | 5 | 15 | string |

### IPTCOMPRLIST

| INFO | ERG_NAME | EINH | BYTE1 | ANZ_BYTE | TYP |
| --- | --- | --- | --- | --- | --- |
| OBD Monitoring Conditions Encountered Counts | OBDCOND | cnts | 0 | 2 | unsigned int |
| Ignition Cycle Counter | IGNCNTR | cnts | 2 | 2 | unsigned int |
| NMHC Catalyst Monitor Completion Condition Counts | HCCATCOMP | cnts | 4 | 2 | unsigned int |
| NMHC Catalyst Monitor Conditions Encountered Counts | HCCATCOND | cnts | 6 | 2 | unsigned int |
| NOx/SCR Catalyst Monitor Completion Condition Counts | NCATCOMP | cnts | 8 | 2 | unsigned int |
| NOx/SCR Catalyst Monitor Conditions Encountered Counts | NCATCOND | cnts | 10 | 2 | unsigned int |
| NOx Adsorber Monitor Completion Condition Counts | NADSCOMP | cnts | 12 | 2 | unsigned int |
| NOx Adsorber Monitor Conditions Encountered Counts | NADSCOND | cnts | 14 | 2 | unsigned int |
| PM Filter Monitor Completion Condition Counts | PMCOMP | cnts | 16 | 2 | unsigned int |
| PM Filter Monitor Conditions Encountered Counts | PMCOND | cnts | 18 | 2 | unsigned int |
| Exhaust Gas Sensor Monitor Completion Condition Counts | EGSCOMP | cnts | 20 | 2 | unsigned int |
| Exhaust Gas Sensor Monitor Conditions Encountered Counts | EGSCOND | cnts | 22 | 2 | unsigned int |
| EGR and/or VVT Monitor Completion Condition Counts | EGRCOMP | cnts | 24 | 2 | unsigned int |
| EGR and/or VVT Monitor Conditions Encountered Counts | EGRCOND | cnts | 26 | 2 | unsigned int |
| Boost Pressure Monitor Completion Condition Counts | BPCOMP | cnts | 28 | 2 | unsigned int |
| Boost Pressure Monitor Conditions Encountered Counts | BPCOND | cnts | 30 | 2 | unsigned int |
| Fuel Monitor Completion Condition Counts | FUELCOMP | cnts | 32 | 2 | unsigned int |
| Fuel Monitor Conditions Encountered Counts | FUELCOND | cnts | 34 | 2 | unsigned int |

### FUNKTIONALEADRESSE

| NR | F_ADR | F_ADR_TEXT |
| --- | --- | --- |
| 0xDF | ALL | alle Steuergeräte |

### JOBRESULTEXTENDED

| SB | STATUS_TEXT |
| --- | --- |
| ?F1? | ERROR_EJOBSTATUS |
| 0xXY | ERROR_UNKNOWN |

### JOBSTATI

| NR | WERT |
| --- | --- |
| 0x00 | OKAY |
| 0x01 | ERROR_ECU_NO_RESPONSE |
| 0x03 | ERROR_BAD_SENSOR_NR |
| 0x04 | ERROR_EJOBSTATUS |
| 0x05 | ERROR_UNKNOWN_KEYBYTES |
| 0x06 | ERROR_ECU_INCORRECT_LEN |
| 0x07 | ERROR_ECU_INCORRECT_RESPONSE_ID |
| 0x08 | ERROR_ECU_RESPONSE_TOO_LESS_DATA |
| 0x09 | ERROR_NOT_SUPPORTED |
| 0x0A | ERROR_ARGUMENT |
| 0x0B | ERROR_ECU_RESPONSE_VALUE_OUT_OF_RANGE |
| 0x0C | ERROR_TABLE |
| 0x10 | ERROR_ECU_GENERAL_REJECT |
| 0x11 | ERROR_ECU_SERVICE_NOT_SUPPORTED |
| 0x12 | ERROR_ECU_SUB_FUNCTION_NOT_SUPPORTED |
| 0x13 | ERROR_ECU_INCORRECT_MESSAGE_LENGTH_OR_INVALID_FORMAT |
| 0x14 | ERROR_ECU_RESPONSE_TOO_LONG |
| 0x21 | ERROR_ECU_BUSY_REPEAT_REQUEST |
| 0x22 | ERROR_ECU_CONDITIONS_NOT_CORRECT |
| 0x24 | ERROR_ECU_REQUEST_SEQUENCE_ERROR |
| 0x25 | ERROR_ECU_NO_RESPONSE_FROM_SUBNET_COMPONENT |
| 0x26 | ERROR_ECU_FAILURE_PREVENTS_EXECUTION_OF_REQUESTED_ACTION |
| 0x31 | ERROR_ECU_REQUEST_OUT_OF_RANGE |
| 0x33 | ERROR_ECU_SECURITY_ACCESS_DENIED |
| 0x35 | ERROR_ECU_INVALID_KEY |
| 0x36 | ERROR_ECU_EXCEED_NUMBER_OF_ATTEMPTS |
| 0x37 | ERROR_ECU_REQUIRED_TIME_DELAY_NOT_EXPIRED |
| 0x70 | ERROR_ECU_UPLOAD_DOWNLOAD_NOT_ACCEPTED |
| 0x71 | ERROR_ECU_TRANSFER_DATA_SUSPENDED |
| 0x72 | ERROR_ECU_GENERAL_PROGRAMMING_FAILURE |
| 0x73 | ERROR_ECU_WRONG_BLOCK_SEQUENCE_COUNTER |
| 0x78 | ERROR_ECU_REQUEST_CORRECTLY_RECEIVED__RESPONSE_PENDING |
| 0x7E | ERROR_ECU_SUB_FUNCTION_NOT_SUPPORTED_IN_ACTIVE_SESSION |
| 0x7F | ERROR_ECU_SERVICE_NOT_SUPPORTED_IN_ACTIVE_SESSION |
| 0x81 | ERROR_ECU_RPM_TOO_HIGH |
| 0x82 | ERROR_ECU_RPM_TOO_LOW |
| 0x83 | ERROR_ECU_ENGINE_IS_RUNNING |
| 0x84 | ERROR_ECU_ENGINE_IS_NOT_RUNNING |
| 0x85 | ERROR_ECU_ENGINE_RUN_TIME_TOO_LOW |
| 0x86 | ERROR_ECU_TEMPERATURE_TOO_HIGH |
| 0x87 | ERROR_ECU_TEMPERATURE_TOO_LOW |
| 0x88 | ERROR_ECU_VEHICLE_SPEED_TOO_HIGH |
| 0x89 | ERROR_ECU_VEHICLE_SPEED_TOO_LOW |
| 0x8A | ERROR_ECU_THROTTLE_PEDAL_TOO_HIGH |
| 0x8B | ERROR_ECU_THROTTLE_PEDAL_TOO_LOW |
| 0x8C | ERROR_ECU_TRANSMISSION_RANGE_NOT_IN_NEUTRAL |
| 0x8D | ERROR_ECU_TRANSMISSION_RANGE_NOT_IN_GEAR |
| 0x8F | ERROR_ECU_BRAKE_SWITCH_NOT_CLOSED |
| 0x90 | ERROR_ECU_SHIFTER_LEVER_NOT_IN_PARK |
| 0x91 | ERROR_ECU_TORQUE_CONVERTER_CLUTCH_LOCKED |
| 0x92 | ERROR_ECU_VOLTAGE_TOO_HIGH |
| 0x93 | ERROR_ECU_VOLTAGE_TOO_LOW |
| xx | UNDEFINED_ERROR |
