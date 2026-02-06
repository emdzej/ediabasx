# Reports Summary

## Overview
- **Total files processed:** 2468
- **Successful:** 2466 (99.9%)
- **With errors:** 2
  - `00MDS410.prg` — Parse error: Offset is outside the bounds of the DataView
  - `ASA_HSR_I350.prg` — Parse error: Invalid PRG magic: 0x4034b50
- **Last updated:** 2026-02-06

## ECU Coverage by Type
Counts are based on prefix/naming patterns (case-insensitive) and mutually exclusive grouping in the order listed.

| ECU Type | Prefix patterns (examples) | Count |
| --- | --- | ---: |
| DME (engine management) | `DME*`, `ME*`, `MS*`, `MSD*`, `MSV*`, `MSS*`, `BMS*`, `MEV*`, `MED*`, `MEVD*` | 101 |
| DDE (diesel engine) | `DDE*`, `D??M*`, `D??N*`, `D??V*`, `D??S*` | 63 |
| EGS (transmission) | `EGS*`, `GS*` | 44 |
| DSC (stability control) | `DSC*`, `ASC*`, `ABS*`, `DXC*` | 49 |
| IHKA (climate) | `IHKA*`, `IHK*`, `HKA*`, `IHKR*`, `IHKS*`, `IHR*` | 56 |
| KOMBI (instrument cluster) | `KOMBI*`, `KOMB*`, `IKE*`, `IKI*`, `BC*` | 37 |
| NAV (navigation/infotainment) | `NAV*`, `CNAV*`, `JNAV*`, `KNAV*`, `CIC*`, `CCC*`, `CHAMP*`, `MASK*`, `ENTRY*`, `CID*`, `BMBT*`, `ASK*`, `RADIO*`, `TMBT*`, `TMFT*`, `TVM*` | 82 |
| CAS/EWS (immobilizer) | `CAS*`, `EWS*` | 14 |
| SRS/Airbag | `MRS*`, `ACSM*`, `AIR*` | 18 |
| Lighting (LM/LCM/FRM) | `LM*`, `LCM*`, `FRM*` | 26 |
| Other | (no match above) | 1978 |

## File Format Breakdown
- **PRG files:** 1973
- **GRP files:** 495

## Error Details
- **00MDS410.prg**
  - Parse error: Offset is outside the bounds of the DataView
- **ASA_HSR_I350.prg**
  - Parse error: Invalid PRG magic: 0x4034b50
