# UTILITY.PRG

## General

|  |  |
| --- | --- |
| File | UTILITY.PRG |
| Type | PRG |
| Jobs | 10 |
| Tables | 0 |
| Origin | BMW TI-430 Drexel |
| Revision | 1.14 |
| Author | Softing Taubert, BMW TI-430 Drexel, BMW TP-421 Teepe, BMW TI-430 Haase |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | allgemeine Funktionen |  |  |
| ORIGIN | string | BMW TI-430 Drexel |  |  |
| REVISION | string | 1.14 |  |  |
| AUTHOR | string | Softing Taubert, BMW TI-430 Drexel, BMW TP-421 Teepe, BMW TI-430 Haase |  |  |
| COMMENT | string |  |  |  |
| PACKAGE | string | 1.36 |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

_No description._

_No arguments._

### STATUS_UBATT

Auslesen der Spannungsversorgung

_No arguments._

### STATUS_ZUENDUNG

Auslesen der Klemme 15

_No arguments._

### ABS_RELAIS

Schalten des Relais am ABS-STAND

| Name | Type | Description |
| --- | --- | --- |
| RELAIS | string | "EIN","AUS" |

### INTERFACE

Rueckgabe des Interfaces

_No arguments._

### IF_RESET

Interface-Reset Rücksetzen der Kommunikationsparameter

_No arguments._

### TIME_AND_DATE

Zeit- und Datumsangaben

_No arguments._

### PARALLELE_CODIERUNG_EIN

Setzt das angeschlossene Interface auf bestätigte Kommunikation

_No arguments._

### OGW_CAN_TEST

JOB für OGW (E65) Funktionstest

_No arguments._

## Tables

_No tables._
