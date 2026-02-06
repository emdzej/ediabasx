# D_ISPB.grp

## General

|  |  |
| --- | --- |
| File | D_ISPB.grp |
| Type | GRP |
| Jobs | 2 |
| Tables | 1 |
| Origin | BMW TI-430 Drexel |
| Revision | 2.001 |
| Author | BMW TI-430 Drexel |
| ECU Comment | table ZuordnungsTabelle in T_GRTB.PRG |

## Info

_No INFO results._

## Jobs

### INITIALISIERUNG

Initialisierung und Kommunikationsparameter

_No arguments._

### IDENTIFIKATION

!!! nur in Gruppendatei verwenden !!! Zuordnung von ADR_VAR_DIAG Steuergeräteadresse ADR  (Hex) Variantenindex      VAR  (Hex) = systemNameOrEngineType ( SNOET ) Diagnoseindex       DIAG (Hex) = vehicleManufacturerDiagnosticIndex ( VMDI  ) zu Steuergerätebeschreibungsdatei SGBD Gruppendatei                   GRUPPE Steuergeräteklartext           STEUERGERAET KWP2000: $1A ReadECUIdentification Modus  : Default

_No arguments._

## Tables

### KONZEPT_TABELLE

| NR | KONZEPT_TEXT |
| --- | --- |
| 0x0F | BMW-FAST |
| 0x0D | KWP2000* |
| 0x0C | KWP2000 |
| 0x06 | DS2 |
