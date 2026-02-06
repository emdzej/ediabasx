# OMI_TEST.prg

## General

|  |  |
| --- | --- |
| File | OMI_TEST.prg |
| Type | PRG |
| Jobs | 53 |
| Tables | 2 |
| Origin | BMW TI-538 Drexel |
| Revision | 3.01 |
| Author | BMW TI-538 Drexel |
| ECU Comment | need EDIABAS 7.x.x |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | OMITEC-Test SGBD |  |  |
| ORIGIN | string | BMW TI-538 Drexel |  |  |
| REVISION | string | 3.01 |  |  |
| AUTHOR | string | BMW TI-538 Drexel |  |  |
| COMMENT | string | need EDIABAS 7.x.x |  |  |
| PACKAGE | string | 1.52 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Default init job

_No arguments._

### ifvers

#define GETVERSION       11

_No arguments._

### iftype

#define GETTYPE          18

_No arguments._

### ifreset

#define RESET            1

_No arguments._

### ifboot

#define WARMSTART        2

_No arguments._

### get_battery_voltage

#define POWERSUPPLY      3

_No arguments._

### get_ignition_voltage

#define IGNITION         4

_No arguments._

### set_protocol

#define SETPARAMETER     5

| Name | Type | Description |
| --- | --- | --- |
| _PROTOCOL | int |  |

### set_ds1

#define SETPARAMETER     5

| Name | Type | Description |
| --- | --- | --- |
| _BAUDRATE | int |  |
| _OUT_TIME | int |  |
| _REG_TIME | int |  |
| _END_TIME | int |  |
| _BYTE_TIME | int |  |
| _CHECKSUMME | int |  |

### set_ds2

#define SETPARAMETER     5

| Name | Type | Description |
| --- | --- | --- |
| _BAUDRATE | int |  |
| _OUT_TIME | int |  |
| _REG_TIME | int |  |
| _END_TIME | int |  |
| _BYTE_TIME | int |  |
| _CHECKSUMME | int |  |

### set_bmw_fast

#define SETPARAMETER     5

| Name | Type | Description |
| --- | --- | --- |
| _BAUDRATE | long |  |
| _OUT_TIME | long |  |
| _REG_TIME | long |  |
| _END_TIME | long |  |
| _NEG78_COUNT | long |  |
| _NEG78_TIME | long |  |
| _CHECKSUMME | long |  |

### set_kwp2000star

#define SETPARAMETER     5

| Name | Type | Description |
| --- | --- | --- |
| _BAUDRATE | long |  |
| _OUT_TIME | long |  |
| _REG_TIME | long |  |
| _END_TIME | long |  |
| _BYTE_TIME | int |  |
| _NEG78_COUNT | long |  |
| _NEG78_TIME | long |  |
| _TESTER_PRESENT_TIME | long |  |
| _TESTER_PRESENT_COUNT | long |  |
| _TESTER_PRESENT_TELEGRAM | string |  |
| _CHECKSUMME | long |  |

### set_kwp2000

#define SETPARAMETER     5

| Name | Type | Description |
| --- | --- | --- |
| _BAUDRATE | long |  |
| _OUT_TIME | long |  |
| _REG_TIME | long |  |
| _END_TIME | long |  |
| _BYTE_TIME | int |  |
| _NEG78_COUNT | long |  |
| _NEG78_TIME | long |  |
| _TESTER_PRESENT_TIME | long |  |
| _TESTER_PRESENT_COUNT | long |  |
| _TESTER_PRESENT_TELEGRAM | string |  |
| _START_COMM_COUNT | long |  |
| _START_COMM_TELEGRAM | string |  |
| _CHECKSUMME | long |  |

### set_kwp2000can

#define SETPARAMETER     5

| Name | Type | Description |
| --- | --- | --- |
| _BAUDRATE | long |  |
| _TOUT_REC_FC_AFTER_FF_CF | long |  |
| _TMIN_SND_FC_AFTER_FF_CF | long |  |
| _TMIN_SND_CF_AFTER_FC | long |  |
| _TOUT_REC_CF_AFTER_FC | long |  |
| _TOUT_REC_CF_AFTER_CF | long |  |
| _TOUT_REC_P2MAX | long |  |
| _TMIN_SND_P3MIN | long |  |
| _NEG78_TIME | long |  |
| _NEG78_COUNT | long |  |
| _TOUT_REC_FC_AFTER_FCWAIT | long |  |
| _TMIN_SND_FCWAIT | long |  |
| _FCWAIT_COUNT | long |  |
| _STMIN_INTERFACE | long |  |
| _STMIN_INTERFACE_ENABLE | long |  |
| _TESTER_PRESENT_TIME | long |  |
| _TESTER_PRESENT_COUNT | long |  |
| _TESTER_PRESENT_TELEGRAM | string |  |
| _TESTER_PRESENT_WAIT_FOR_RESPONSE | long |  |

### sendtelegram

#define SENDRECEIVETELEGRAM 6

| Name | Type | Description |
| --- | --- | --- |
| IN | binary |  |

### send

#define SENDTELEGRAM 23

| Name | Type | Description |
| --- | --- | --- |
| IN | binary |  |

### receive

#define RECEIVETELEGRAM 24

_No arguments._

### recv_keybytes

#define REQUEST_KEYBYTES 7

_No arguments._

### ifsetport

#define SETPORT          8

| Name | Type | Description |
| --- | --- | --- |
| IN1 | long |  |
| IN2 | long |  |

### ifgetport

#define GETPORT          9

| Name | Type | Description |
| --- | --- | --- |
| IN | long |  |

### ifloopt

#define LOOPTEST         10

_No arguments._

### send_frequent

#define SENDFREQ         12

| Name | Type | Description |
| --- | --- | --- |
| IN | binary |  |

### recv_frequent

#define REQUFREQ         13

_No arguments._

### stop_frequent

#define STOPFREQ         14

_No arguments._

### set_program_voltage

#define SETUPROG         16

| Name | Type | Description |
| --- | --- | --- |
| IN | long |  |

### ifsireset

#define SIRESET          17

| Name | Type | Description |
| --- | --- | --- |
| IN | long |  |

### ifrequeststate

#define KLEMMENSTATUS    19

_No arguments._

### set_answer_length

#define AWLEN            20

| Name | Type | Description |
| --- | --- | --- |
| IN0 | int |  |
| IN1 | int |  |

### setconfigstring

#define SETCONFIGSTRING  21

| Name | Type | Description |
| --- | --- | --- |
| IN1 | string |  |
| IN2 | string |  |

### getconfigstring

#define GETCONFIGSTRING  22

| Name | Type | Description |
| --- | --- | --- |
| IN1 | string |  |

### ifrawmode

_No description._

| Name | Type | Description |
| --- | --- | --- |
| IN | binary |  |

### SG_SIMULATOR_PARAM_DS1

_No description._

_No arguments._

### SG_SIMULATOR_PARAM_DS2

_No description._

_No arguments._

### SG_SIMULATOR_PARAM_BMW_FAST

_No description._

_No arguments._

### SG_SIMULATOR_PARAM_KWP2000star

_No description._

_No arguments._

### SG_SIMULATOR_PARAM_KWP2000

_No description._

_No arguments._

### SG_SIMULATOR_DS1

Steuergeraete-Simulation

_No arguments._

### SG_SIMULATOR_DS2

Steuergeraete-Simulation

_No arguments._

### SG_SIMULATOR_BMW_FAST

Steuergeraete-Simulation

_No arguments._

### SG_SIMULATOR_KWP2000star

Steuergeraete-Simulation

_No arguments._

### SG_SIMULATOR_KWP2000

Steuergeraete-Simulation

_No arguments._

### SG_MONITOR_DS1

Steuergeraete-Monitor

_No arguments._

### SG_MONITOR_DS2

Steuergeraete-Monitor

_No arguments._

### SG_MONITOR_BMW_FAST

Steuergeraete-Monitor

_No arguments._

### SG_MONITOR_KWP2000star

Steuergeraete-Monitor

_No arguments._

### SG_MONITOR_KWP2000

Steuergeraete-Monitor

_No arguments._

### GetFirmwareVersion

_No description._

_No arguments._

### GetAutomaticMode

_No description._

_No arguments._

### SetAutomaticMode

_No description._

| Name | Type | Description |
| --- | --- | --- |
| AUTOMATICMODE | string | table AutomaticMode |
| DEFAULTCOMMUNICATION | string | table DefaultCommunication |

### SendCanMessage

_No description._

| Name | Type | Description |
| --- | --- | --- |
| CANIDENTIFIER | unsigned int |  |
| DATALENGTH | unsigned char |  |
| D1 | unsigned char |  |
| D2 | unsigned char |  |
| D3 | unsigned char |  |
| D4 | unsigned char |  |
| D5 | unsigned char |  |
| D6 | unsigned char |  |
| D7 | unsigned char |  |
| D8 | unsigned char |  |

### SetCanAcceptanceFilter

_No description._

| Name | Type | Description |
| --- | --- | --- |
| ACCEPTANCEFILTER_FROM | unsigned int |  |
| ACCEPTANCEFILTER_TO | unsigned int |  |

### GetCanMessage

_No description._

_No arguments._

## Tables

### AUTOMATICMODE

| TEXT | WERT |
| --- | --- |
| ja | 1 |
| yes | 1 |
| 1 | 1 |
| nein | 0 |
| no | 0 |
| 0 | 0 |

### DEFAULTCOMMUNICATION

| TEXT | WERT |
| --- | --- |
| D-CAN | 1 |
| 1 | 1 |
| K-Line | 0 |
| 0 | 0 |
