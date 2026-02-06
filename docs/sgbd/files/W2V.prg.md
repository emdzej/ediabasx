# W2V.prg

## General

|  |  |
| --- | --- |
| File | W2V.prg |
| Type | PRG |
| Jobs | 32 |
| Tables | 2 |
| Origin | BMW UA-73 Rowedder |
| Revision | 0.003 |
| Author | Rowedder, BMW AG UA-73 |
| ECU Comment | Steuer-SGBD für Spezialfunktionen des HSFZ im ICOM und ICOM-Next |

## Info

_No INFO results._

## Jobs

### INITIALISIERUNG

_No description._

_No arguments._

### STEUERN_RESTART_HSFZ_STR

Restart HSFZ Start Routine

| Name | Type | Description |
| --- | --- | --- |
| DEACT_TIME_MS | int | Zeit, die die Aktivierungsleitung auf 0 gezogen wird in Millisekunden, Default = 1000 |
| ROUTING_MODE | string | "ROUTING" (Default) \| "DIRECT" |

### _TEST_STEUERN_RESTART_HSFZ_STR_IMLOIF

Restart HSFZ Start Routine Test mit fehlenden Parametern -> IMLOIF muss kommen

_No arguments._

### _TEST_STEUERN_RESTART_HSFZ_STP

Restart HSFZ Stop Routine Test Stop Routine, soll Fehlermeldung SFNS provozieren

_No arguments._

### STEUERN_RESTART_HSFZ_RRR

Restart HSFZ Request Routine Results

_No arguments._

### STEUERN_CREATE_ECU_ROUTES_STR

CreateEcuRoutes Start Routine Anlegen der Routen für ein Steuergerät

| Name | Type | Description |
| --- | --- | --- |
| SG_DIAG_ADDRESS | string | Diagnoseadresse des Steuergeräts (z.B. "0x63") |
| SG_IP_ADDRESS | string | IP-Adresse des Steuergeräts (z.B. "192.168.11.3") |

### _TEST_STEUERN_CREATE_ECU_ROUTES_STR_IMLOIF

Restart HSFZ Start Routine Test mit fehlenden Parametern -> IMLOIF muss kommen

_No arguments._

### _TEST_CREATE_ECU_ROUTES_STP

Restart HSFZ Stop Routine Test Stop Routine, soll Fehlermeldung SFNS provozieren

_No arguments._

### STEUERN_CREATE_ECU_ROUTES_RRR

Restart HSFZ Request Routine Results

_No arguments._

### STEUERN_SWITCH_ACT_LINE_STR

SwitchActLine Start Routine Ethernet Aktivierungsleitung schalten

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | Modus: "OFF" \| "ON" \| "PULSE" |
| PULSE_DURATION_MS | int | Ausschaltzeit in ms wenn MODE == "PULSE" |

### _TEST_STEUERN_SWITCH_ACT_LINE_STR_IMLOIF

SwitchActLine Start Routine Test mit fehlenden Parametern -> IMLOIF muss kommen

_No arguments._

### STEUERN_SWITCH_ACT_LINE_STP

SwitchActLine Stop Routine

_No arguments._

### STEUERN_SWITCH_ACT_LINE_RRR

SwitchActLine Request Routine Results

_No arguments._

### STEUERN_SWITCH_LINK_STR

SwitchActLine Start Routine Ethernet Aktivierungsleitung schalten

| Name | Type | Description |
| --- | --- | --- |
| MODE | string | Modus: "OFF" \| "ON" \| "PULSE" |
| PULSE_DURATION_MS | int | Ausschaltzeit in ms wenn MODE == "PULSE" |

### _TEST_STEUERN_SWITCH_LINK_STR_IMLOIF

SwitchActLine Start Routine Test mit fehlenden Parametern -> IMLOIF muss kommen

_No arguments._

### STEUERN_SWITCH_LINK_STP

SwitchActLine Stop Routine

_No arguments._

### STEUERN_SWITCH_LINK_RRR

SwitchActLine Request Routine Results

_No arguments._

### ACTIVE_DIAGNOSTIC_SESSION

active diagnostic session

_No arguments._

### STEUERN_INQ_HSFZ_GW_STR

Inquire HSFZ GatewayStart Routine

| Name | Type | Description |
| --- | --- | --- |
| TIMEOUT_MS | int | Zeit, die auf eine Antwort vom Gateway gewartet wird in Millisekunden, Default = 1000, Max = 2000 |
| RETRIES | int | Anzahl der Wiederholungen, wenn keine Antwort vom Gateway kommt Default = 2, Max. = 255 |

### _TEST_STEUERN_INQ_HSFZ_GW_STR_IMLOIF

Inquire HSFZ GatewayStart Routine Test mit fehlenden Parametern -> IMLOIF muss kommen

_No arguments._

### STEUERN_INQ_HSFZ_GW_STP

Inquire HSFZ Gateway Stop Routine

_No arguments._

### STEUERN_INQ_HSFZ_GW_RRR

Inquire HSFZ Gateway Request Routine Results

_No arguments._

### STEUERN_CHECK_URL_STR

Inquire HSFZ GatewayStart Routine

| Name | Type | Description |
| --- | --- | --- |
| TIMEOUT_S | int | Zeit, die auf eine Antwort vom Server gewartet wird in Sekunden, Default = 30, Min = 10, Max = 2000 |
| RETRIES | int | Anzahl der Wiederholungen, wenn keine Antwort vom Server kommt Default = 0, Max. = 255 Da bereits Retries auf TCP - Ebene erfolgen, sind Retries auf HTTP Ebene wenig erfolgversprechend. Daher Default = 0 |
| LENGTH | int | Laenge des URL - Strings, max. 1200 |
| URL | string | URL - String, max. 1200 Zeichen, nullterminiert |

### _TEST_STEUERN_CHECK_URL_STR_IMLOIF

Inquire HSFZ GatewayStart Routine Test mit fehlenden Parametern -> IMLOIF muss kommen

_No arguments._

### STEUERN_CHECK_URL_STP

Inquire HSFZ Gateway Stop Routine

_No arguments._

### STEUERN_CHECK_URL_RRR

Inquire HSFZ Gateway Request Routine Results

_No arguments._

### STEUERN_PIN_CONTROL_STR

PinControl Start Routine Einstellen der gewünschten Pullup-Werte

| Name | Type | Description |
| --- | --- | --- |
| PUP7 | int | Pullup in Ohm für Pin 7 der OBD-Dose. 0 = kein Pullup (0,500,1000) Default = 0 |
| PUP8 | int | Pullup in Ohm für Pin 8 der OBD-Dose. 0 = kein Pullup (0,500,1000) |

### _TEST_STEUERN_PIN_CONTROL_STR_IMLOIF

Test Routine for PIN Control Test mit fehlenden Parametern -> IMLOIF muss kommen

_No arguments._

### _TEST_STEUERN_PIN_CONTROL_STOP_ROUTINE_SFNS

Pin Control Stop Routine

_No arguments._

### STEUERN_PIN_CONTROL_RRR

Pin Control Request Results Routine

_No arguments._

### _TEST_UNKNOWN_SERVICE

Test des Diagnoseservers: soll $7F $11 provozieren

_No arguments._

### _TEST_UNIMPLEMENTED_ROUTINE

Test des Diagnoseservers: soll Request Out Of Range ($7F $31 $31) provozieren

_No arguments._

## Tables

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

### CU_ERR_TEXT

| NR | TEXT |
| --- | --- |
| 0x00 | CUE_NO_ERROR |
| 0x01 | CUE_NO_FREE_SOCKET |
| 0x02 | CUE_NOT_RESOLVED |
| 0x03 | CUE_NO_CONNECTION |
| 0x04 | CUE_SEND_FAILED |
| 0x05 | CUE_TIMEOUT |
| 0xFF | CUE_UNKNOWN |
