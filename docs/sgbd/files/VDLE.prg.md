# VDLE.prg

## General

|  |  |
| --- | --- |
| File | VDLE.prg |
| Type | PRG |
| Jobs | 8 |
| Tables | 0 |
| Origin | BMW VS-43 Rowedder |
| Revision | 1.001 |
| Author | VS-43 Frank Wegener, VS-43 Michael Rowedder |
| ECU Comment | Steuer-SGBD für Virtuelle Download Engine Emulation |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | Virtuelle Download Engine |  |  |
| ORIGIN | string | BMW VS-43 Rowedder |  |  |
| REVISION | string | 1.001 |  |  |
| AUTHOR | string | VS-43 Frank Wegener, VS-43 Michael Rowedder |  |  |
| COMMENT | string | Steuer-SGBD für Virtuelle Download Engine Emulation |  |  |
| PACKAGE | string | 1.40 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

_No description._

_No arguments._

### INIT_VDLE

Segment aus IntelHex in ECU laden

| Name | Type | Description |
| --- | --- | --- |
| DLL_JOB_STATUS | string | JobStatus |
| DLL_NR_OF_SEGMENTS | int | Anzahl der Segemente des IntelHexFiles |

### START_TESTERPRESENT

Start TesterPresent

| Name | Type | Description |
| --- | --- | --- |
| DLL_JOB_STATUS | string | JobStatus |

### STOP_TESTERPRESENT

Stop TesterPresent

| Name | Type | Description |
| --- | --- | --- |
| DLL_JOB_STATUS | string | JobStatus |

### REQUEST_SEGMENTINFO

SegmentAddr und SegmentSize in Buf vereitstellen

| Name | Type | Description |
| --- | --- | --- |
| DLL_JOB_STATUS | string | JobStatus |
| DLL_SEGMENT_ADDR | unsigned long |  |
| DLL_SEGMENT_SIZE | unsigned long |  |

### SEND_SEGMENT

Segment aus IntelHex in ECU laden

| Name | Type | Description |
| --- | --- | --- |
| DLL_JOB_STATUS | string | JobStatus |
| DLL_FLASH_SCHREIBEN_STATUS | int |  |
| DLL_ERROR_MSG | string |  |

### EXIT_VDLE

Beenden VDLE Sitzung ggf. temporäre Dateien entfernen

| Name | Type | Description |
| --- | --- | --- |
| DLL_JOB_STATUS | string | JobStatus |

## Tables

_No tables._
