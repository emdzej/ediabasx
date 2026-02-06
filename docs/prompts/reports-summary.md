# Reports Summary Prompt

Use this prompt when generating `docs/reports/SUMMARY.md` from the report artifacts.

## Inputs
- `docs/reports/summary.json`
- `docs/reports/files/*.json`

## Instructions
1. Read `docs/reports/summary.json` to collect:
   - total files processed
   - number of successful files
   - number of error files
   - last updated date (ISO timestamp → date)
   - per-file status map (for counting formats and ECU groups)
2. Count file formats:
   - PRG files (case-insensitive `.prg`)
   - GRP files (case-insensitive `.grp`)
3. Identify files with `status != "ok"` and load their detailed report JSON from `docs/reports/files/`.
   - Extract error messages from the `<parse>` job errors.
4. Compute ECU coverage by type using prefix/naming patterns (case-insensitive). Suggested groups:
   - DME (engine management): `DME*`, `ME*`, `MS*`, `MSD*`, `MSV*`, `MSS*`, `BMS*`, `MEV*`, `MED*`, `MEVD*`
   - DDE (diesel engine): `DDE*`, `D??M*`, `D??N*`, `D??V*`, `D??S*`
   - EGS (transmission): `EGS*`, `GS*`
   - DSC (stability control): `DSC*`, `ASC*`, `ABS*`, `DXC*`
   - IHKA (climate): `IHKA*`, `IHK*`, `HKA*`, `IHKR*`, `IHKS*`, `IHR*`
   - KOMBI (instrument cluster): `KOMBI*`, `KOMB*`, `IKE*`, `IKI*`, `BC*`
   - NAV (navigation/infotainment): `NAV*`, `CNAV*`, `JNAV*`, `KNAV*`, `CIC*`, `CCC*`, `CHAMP*`, `MASK*`, `ENTRY*`, `CID*`, `BMBT*`, `ASK*`, `RADIO*`, `TMBT*`, `TMFT*`, `TVM*`
   - (Optional) Additional groups such as CAS/EWS, SRS/Airbag, Lighting (LM/LCM/FRM)
   - Include an "Other" bucket if you use mutually exclusive grouping.
5. Write `docs/reports/SUMMARY.md` with these sections:
   - Overview
   - ECU Coverage by Type (include counts and note the prefix patterns used)
   - File Format Breakdown
   - Error Details (include file name and error message)

## Output
Update or create `docs/reports/SUMMARY.md` with human-readable content using the data above.
