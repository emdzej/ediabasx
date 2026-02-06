# CARB.PRG

## General

|  |  |
| --- | --- |
| File | CARB.PRG |
| Type | PRG |
| Jobs | 12 |
| Tables | 3 |
| Origin | BMW TI-435 Drexel |
| Revision | 3.1 |
| Author | BMW TP-421 Weber, BMW TI-433 Drexel, softing SAG DM |

## Info

| Name | Type | Value | Unit | Comment |
| --- | --- | --- | --- | --- |
| ECU | string | CARB-Schnittstelle SAE J1979 |  |  |
| ORIGIN | string | BMW TI-435 Drexel |  |  |
| REVISION | string | 3.1 |  |  |
| AUTHOR | string | BMW TP-421 Weber, BMW TI-433 Drexel, softing SAG DM |  |  |
| COMMENT | string |  |  |  |
| SPRACHE | string | deutsch |  |  |

## Jobs

### INFO

Information SGBD

_No arguments._

### INITIALISIERUNG

Dieser Job wird vom EDIABAS automatisch beim erstem Zugriff auf eine SGBD aufgerufen. Bei weitern Zugriffen auf die selbe SGBD wird dieser Job nicht mehr aufgerufen. In der INITIALISIERUNG werden alle Funktionen aufgerufen, die nur einmal, vor der Kommunikation mit einem SG notwendig sind.

_No arguments._

### SET_PARAMETER

Setzen der Carb Parameter im EIDBSS

| Name | Type | Description |
| --- | --- | --- |
| PARAMETER | binary | Parametersatz als Array, entsprechend der Spezifikation EDIC-Firmware fuer das CARB-Tool (Kapitel 2.1) |

### Start_Bus_Communication

Auslesen der Identifikationsdaten

_No arguments._

### _MODE1_ReqCurrentPowertrainDiagnosticData

MODE 1

| Name | Type | Description |
| --- | --- | --- |
| PID | unsigned char | requested PID |
| ANALYZE | int | do analyze or not |
| TESTER | unsigned char | Adress in request |
| FAST_INIT | string | Wenn existiert, dann Kommunikation schneller Reizung |

### _MODE2_ReqPowertrainFreezeFrameData

MODE 2

| Name | Type | Description |
| --- | --- | --- |
| PID | unsigned char | requested PID |
| FRAME | unsigned char | requested Freeze Frame |
| ANALYZE | int | do analyze or not |
| TESTER | unsigned char | Adress in request |

### _MODE3_ReqEmissionReleatedPowertrainDTC

MODE 3

| Name | Type | Description |
| --- | --- | --- |
| ANALYZE | int | do analyze or not |
| TESTER | unsigned char | Adress in request |

### _MODE4_ClearResetEmissionReleatedDiagnosticInformation

MODE 4

| Name | Type | Description |
| --- | --- | --- |
| ANALYZE | int | do analyze or not |
| TESTER | unsigned char | Adress in request |

### _MODE5_ReqOxygenSensorMonitoringTestResults

MODE 5

| Name | Type | Description |
| --- | --- | --- |
| TID | unsigned char | requested PID |
| SENSOR | unsigned char | requested Freeze Frame |
| ANALYZE | int | do analyze or not |
| TESTER | unsigned char | Adress in request |

### _MODEX_TransparentMode

so muss das EDIC die Checksumme berechnen!

| Name | Type | Description |
| --- | --- | --- |
| ARG0 | unsigned char | requested MODE |
| ARG1 | unsigned char | requested PID |
| ARG2 | unsigned char | requested Freeze Frame |
| ARG3 | int | do analyze or not |
| ARG4 | unsigned char | Adress in request |
| ARG5 | unsigned char | Adress in request |
| ARG6 | unsigned char | Adress in request |
| ARG7 | unsigned char | Adress in request |
| ARG8 | unsigned char | Adress in request |

### _ReqRawMode

Tel von Oben!

| Name | Type | Description |
| --- | --- | --- |
| SENDTEL | binary | tel to send |

### DiagnosticEnd

_No description._

_No arguments._

## Tables

### ERRORCODE

| ARTNR | ARTTEXT |
| --- | --- |
| 0000 | P0000: virtual DTC (no Error) |
| 0100 | P0100: Mass or Volume Air Flow Circuit Malfunction |
| 0101 | P0101: Mass or Volume Air Flow Circuit Range/Performance Problem |
| 0102 | P0102: Mass or Volume Air Flow Circuit Low Input |
| 0103 | P0103: Mass or Volume Air Flow Circuit High Input |
| 0104 | P0104: ...yet not specified |
| 0105 | P0105: Manifold Absolute Pressure/Barometric Pressure Circuit Malfunction |
| 0106 | P0106: Manifold Absolute Pressure/Barometric Pressure Circuit Range/Performance Problem |
| 0107 | P0107: Manifold Absolute Pressure/Barometric Pressure Circuit Low Input |
| 0108 | P0108: Manifold Absolute Pressure/Barometric Pressure Circuit High Input |
| 0109 | P0109: ...yet not specified |
| 0110 | P0110: Intake Air Tempurature Circuit Malfunction |
| 0111 | P0111: Intake Air Tempurature Circuit Range/Performance Problem |
| 0112 | P0112: Intake Air Tempurature Circuit Low Input |
| 0113 | P0113: Intake Air Tempurature Circuit High Input |
| 0114 | P0114: ...yet not specified |
| 0115 | P0115: Engine Coolant Temperature Circuit Malfunction |
| 0116 | P0116: Engine Coolant Temperature Circuit Range/Performance Problem |
| 0117 | P0117: Engine Coolant Temperature Circuit Low Input |
| 0118 | P0118: Engine Coolant Temperature Circuit High Input |
| 0119 | P0119: ...yet not specified |
| 0120 | P0120: Throttle Position Circuit Malfunction |
| 0121 | P0121: Throttle Position Circuit Range/Performance Problem |
| 0122 | P0122: Throttle Position Circuit Low Input |
| 0123 | P0123: Throttle Position Circuit High Input |
| 0124 | P0124: ...yet not specified |
| 0125 | *P0125: Insufficient Coolant Tempurature for Closed Loop Fuel Control |
| 0126 | P0126: ...yet not specified |
| 0127 | P0127: ...yet not specified |
| 0128 | P0128: ...yet not specified |
| 0129 | P0129: ...yet not specified |
| 0130 | P0130: O2 Sensor Circuit Malfunction               (Bank1*Sensor1) |
| 0131 | P0131: O2 Sensor Circuit Low Voltage               (Bank1*Sensor1) |
| 0132 | P0132: O2 Sensor Circuit High Voltage              (Bank1*Sensor1) |
| 0133 | P0133: O2 Sensor Circuit Slow Response             (Bank1*Sensor1) |
| 0134 | P0134: O2 Sensor Circuit No Activity Detected      (Bank1*Sensor1) |
| 0135 | P0135: O2 Sensor Heater Circuit Malfunction        (Bank1*Sensor1) |
| 0136 | P0136: O2 Sensor Circuit Malfunction               (Bank1*Sensor2) |
| 0137 | P0137: O2 Sensor Circuit Low Voltage               (Bank1*Sensor2) |
| 0138 | P0138: O2 Sensor Circuit High Voltage              (Bank1*Sensor2) |
| 0139 | P0139: O2 Sensor Circuit Slow Response             (Bank1*Sensor2) |
| 0140 | P0140: O2 Sensor Circuit No Activity Detected      (Bank1*Sensor2) |
| 0141 | P0141: O2 Sensor Heater Circuit Malfunction        (Bank1*Sensor2) |
| 0142 | P0142: O2 Sensor Circuit Malfunction               (Bank1*Sensor3) |
| 0143 | P0143: O2 Sensor Circuit Low Voltage               (Bank1*Sensor3) |
| 0144 | P0144: O2 Sensor Circuit High Voltage              (Bank1*Sensor3) |
| 0145 | P0145: O2 Sensor Circuit Slow Response             (Bank1*Sensor3) |
| 0146 | P0146: O2 Sensor Circuit No Activity Detected      (Bank1*Sensor3) |
| 0147 | P0147: O2 Sensor Heater Circuit Malfunction        (Bank1*Sensor3) |
| 0148 | P0148: ...yet not specified |
| 0149 | P0149: ...yet not specified |
| 0150 | P0150: O2 Sensor Circuit Malfunction               (Bank2 Sensor1) |
| 0151 | P0151: O2 Sensor Circuit Low Voltage               (Bank2 Sensor1) |
| 0152 | P0152: O2 Sensor Circuit High Voltage              (Bank2 Sensor1) |
| 0153 | P0153: O2 Sensor Circuit Slow Response             (Bank2 Sensor1) |
| 0154 | P0154: O2 Sensor Circuit No Activity Detected      (Bank2 Sensor1) |
| 0155 | P0155: O2 Sensor Heater Circuit Malfunction        (Bank2 Sensor1) |
| 0156 | P0156: O2 Sensor Circuit Malfunction               (Bank2 Sensor2) |
| 0157 | P0157: O2 Sensor Circuit Low Voltage               (Bank2 Sensor2) |
| 0158 | P0158: O2 Sensor Circuit High Voltage              (Bank2 Sensor2) |
| 0159 | P0159: O2 Sensor Circuit Slow Response             (Bank2 Sensor2) |
| 0160 | P0160: O2 Sensor Circuit No Activity Detected      (Bank2 Sensor2) |
| 0161 | P0161: O2 Sensor Heater Circuit Malfunction        (Bank2 Sensor2) |
| 0162 | P0162: O2 Sensor Circuit Malfunction               (Bank2 Sensor3) |
| 0163 | P0163: O2 Sensor Circuit Low Voltage               (Bank2 Sensor3) |
| 0164 | P0164: O2 Sensor Circuit High Voltage              (Bank2 Sensor3) |
| 0165 | P0165: O2 Sensor Circuit Slow Response             (Bank2 Sensor3) |
| 0166 | P0166: O2 Sensor Circuit No Activity Detected      (Bank2 Sensor3) |
| 0167 | P0167: O2 Sensor Heater Circuit Malfunction        (Bank2 Sensor3) |
| 0168 | P0168: ...yet not specified |
| 0169 | P0169: ...yet not specified |
| 0170 | P0170: Fuel Trim Malfunction                       (Bank1*) |
| 0171 | P0171: System Too Lean                             (Bank1*) |
| 0172 | P0172: System Too Rich                             (Bank1*) |
| 0173 | P0173: Fuel Trim Malfunction                       (Bank2) |
| 0174 | P0174: System Too Lean                             (Bank2) |
| 0175 | P0175: System Too Rich                             (Bank2) |
| 0176 | P0176: Fuel Composition Sensor Circuit Malfunction |
| 0177 | P0177: Fuel Composition Sensor Circuit Range/Performance Problem |
| 0178 | P0178: Fuel Composition Sensor Circuit Low Input |
| 0179 | P0179: Fuel Composition Sensor Circuit High Input |
| 0180 | P0180: Fuel Temperature Sensor Circuit Malfunction |
| 0181 | P0181: Fuel Temperature Sensor Circuit Range/Performance Problem |
| 0182 | P0182: Fuel Temperature Sensor Circuit Low Input |
| 0183 | P0183: Fuel Temperature Sensor Circuit High Input |
| 0184 | P0184: ...yet not specified |
| 0185 | P0185: ...yet not specified |
| 0200 | *P0200: Injector Circuit Malfunction |
| 0201 | *P0201: Injector Circuit Malfunction - Cylinder 1 (1A) |
| 0202 | *P0202: Injector Circuit Malfunction - Cylinder 2 (2A) |
| 0203 | *P0203: Injector Circuit Malfunction - Cylinder 3 (3A) |
| 0204 | *P0204: Injector Circuit Malfunction - Cylinder 4 (4A) |
| 0205 | *P0205: Injector Circuit Malfunction - Cylinder 5 (5A) |
| 0206 | *P0206: Injector Circuit Malfunction - Cylinder 6 (6A) |
| 0207 | *P0207: Injector Circuit Malfunction - Cylinder 7 (1B) |
| 0208 | *P0208: Injector Circuit Malfunction - Cylinder 8 (2B) |
| 0209 | *P0209: Injector Circuit Malfunction - Cylinder 9 (3B) |
| 0210 | *P0210: Injector Circuit Malfunction - Cylinder 10 (4B) |
| 0211 | *P0211: Injector Circuit Malfunction - Cylinder 11 (5B) |
| 0212 | *P0212: Injector Circuit Malfunction - Cylinder 12 (6B) |
| 0300 | P0300: Random Misfire Detected |
| 0301 | P0301: Cylinder 1 Misfire Detected |
| 0302 | P0302: Cylinder 2 Misfire Detected |
| 0303 | P0303: Cylinder 3 Misfire Detected |
| 0304 | P0304: Cylinder 4 Misfire Detected |
| 0305 | P0305: Cylinder 5 Misfire Detected |
| 0306 | P0306: Cylinder 6 Misfire Detected |
| 0307 | P0307: Cylinder 7 Misfire Detected |
| 0308 | P0308: Cylinder 8 Misfire Detected |
| 0309 | P0309: Cylinder 9 Misfire Detected |
| 0310 | P0310: Cylinder 10 Misfire Detected |
| 0311 | P0311: Cylinder 11 Misfire Detected |
| 0312 | P0312: Cylinder 12 Misfire Detected |
| 0313 | P0313: ...yet not specified |
| 0314 | P0314: ...yet not specified |
| 0315 | P0315: ...yet not specified |
| 0316 | P0316: ...yet not specified |
| 0317 | P0317: ...yet not specified |
| 0318 | P0318: ...yet not specified |
| 0319 | P0319: ...yet not specified |
| 0320 | P0320: Ignition/Distributor Engine Speed Input Circuit Malfunction |
| 0321 | P0321: Ignition/Distributor Engine Speed Input Circuit Range/Performance |
| 0322 | P0322: Ignition/Distributor Engine Speed Input Circuit No Signal |
| 0323 | P0323: ...yet not specified |
| 0324 | P0324: ...yet not specified |
| 0325 | P0325: Kock Sensor 1 Circuit Malfunction |
| 0326 | P0326: Kock Sensor 1 Circuit Range/Performance |
| 0327 | P0327: Kock Sensor 1 Circuit Low Input |
| 0328 | P0328: Kock Sensor 1 Circuit High Input |
| 0329 | P0329: ...yet not specified |
| 0330 | P0330: Kock Sensor 2 Circuit Malfunction |
| 0331 | P0331: Kock Sensor 2 Circuit Range/Performance |
| 0332 | P0332: Kock Sensor 2 Circuit Low Input |
| 0333 | P0333: Kock Sensor 2 Circuit High Input |
| 0334 | P0334: ...yet not specified |
| 0335 | P0335: Crankshaft Position Sensor Curcuit Malfunction |
| 0336 | P0336: Crankshaft Position Sensor Curcuit Range/Performance |
| 0337 | P0337: Crankshaft Position Sensor Curcuit Low Input |
| 0338 | P0338: Crankshaft Position Sensor Curcuit High Input |
| 0339 | P0339: ...yet not specified |
| 0340 | P0340: Camshaft Position Sensor Circuit Malfunction |
| 0341 | P0341: Camshaft Position Sensor Circuit Range/Performance |
| 0342 | P0342: Camshaft Position Sensor Circuit Low Input |
| 0343 | P0343: Camshaft Position Sensor Circuit High Input |
| 0400 | P0400: Exhaust Gas Recirculation Flow Malfunction |
| 0401 | P0401: Exhaust Gas Recirculation Flow Insufficient Detected |
| 0402 | P0402: Exhaust Gas Recirculation Flow Excessive Detected |
| 0403 | P0403: Exhaust Gas Recirculation Circuit Malfunction |
| 0404 | P0404: Exhaust Gas Recirculation Pintle Error |
| 0405 | P0405: Air Conditioner Refrigerant Charge Loss |
| 0406 | P0406: ...yet not specified |
| 0407 | P0407: ...yet not specified |
| 0408 | P0408: ...yet not specified |
| 0409 | P0409: ...yet not specified |
| 0410 | P0410: Secundary Air Injection System Malfunction |
| 0411 | *P0411: Secundary Air Injection System Incorrect Flow Detected |
| 0412 | P0412: Secundary Air Injection System Switching Valve/Circuit Malfunction |
| 0413 | P0413: Secundary Air Injection System Switching Valve/Circuit Open |
| 0414 | P0414: Secundary Air Injection System Switching Valve/Circuit Shorted |
| 0420 | P0420: Catalyst System Efficiency Below Threshold    (Bank1*) |
| 0421 | P0421: Warm Up Catalyst Efficiency Below Threshold   (Bank1*) |
| 0422 | P0422: Main Catalyst Efficiency Below Threshold      (Bank1*) |
| 0423 | P0423: Heated Catalyst Efficiency Below Threshold    (Bank1*) |
| 0424 | P0424: Heated Catalyst Temperature Below Threshold   (Bank1*) |
| 0425 | P0425: ...yet not specified |
| 0426 | P0426: ...yet not specified |
| 0427 | P0427: ...yet not specified |
| 0428 | P0428: ...yet not specified |
| 0429 | P0429: ...yet not specified |
| 0430 | P0430: Catalyst System Efficiency Below Threshold    (Bank2) |
| 0431 | P0431: Warm Up Catalyst Efficiency Below Threshold   (Bank2) |
| 0432 | P0432: Main Catalyst Efficiency Below Threshold      (Bank2) |
| 0433 | P0433: Heated Catalyst Efficiency Below Threshold    (Bank2) |
| 0434 | P0434: Heated Catalyst Temperature Below Threshold   (Bank2) |
| 0440 | P0440: Evaporative Emission Control System Malfunction |
| 0441 | *P0441: Evaporative Emission Control System Incorrect Purge Flow |
| 0442 | P0442: Evaporative Emission Control System Leak Detected |
| 0443 | P0443: Evaporative Emission Control System Purge Control Valve Circuit Malfunction |
| 0444 | P0444: Evaporative Emission Control System Purge Control Valve Circuit Open |
| 0445 | P0445: Evaporative Emission Control System Purge Control Valve Circuit Shorted |
| 0500 | P0500: Vehicle Speed Sensor Malfunction |
| 0501 | P0501: Vehicle Speed Sensor Range/Performance |
| 0502 | *P0502: Vehicle Speed Sensor Circuit Low Input |
| 0503 | P0503: ...yet not specified |
| 0504 | P0504: ...yet not specified |
| 0505 | P0505: Idle Control System Malfunction |
| 0506 | P0506: Idle Control System RPM Lower Than Expected |
| 0507 | P0507: Idle Control System RPM Higher Than Expected |
| 0508 | P0508: ...yet not specified |
| 0509 | P0509: ...yet not specified |
| 0510 | P0510: Closed Throttle Position Switsch Malfunction |
| 0600 | P0600: Serial Communication Link Malfunction |
| 0601 | P0601: Check Sum Error |
| 0602 | P0602: Programming Error |
| 0603 | P0603: ...yet not specified |
| 0604 | P0604: ...yet not specified |
| 0605 | P0605: Internal Control Module |
| 0700 | *P0700: Transmission Control System Malfunction |
| 0701 | *P0701: Transmission Control System Range/Performance |
| 0702 | *P0702: Transmission Control System Electrical |
| 0703 | P0703: Brake Switch Input Malfunction |
| 0704 | P0704: ...yet not specified |
| 0705 | P0705: Transmission Range Sensor Circuit Malfunction (PRNDL Input) |
| 0706 | P0706: Transmission Range Sensor Range/Performance |
| 0707 | P0707: Transmission Range Sensor Circuit Low Input |
| 0708 | P0708: Transmission Range Sensor Circuit High Input |
| 0709 | P0709: ...yet not specified |
| 0710 | P0710: Transmission Fluid Temperatur Sensor Circuit Malfunction |
| 0711 | P0711: Transmission Fluid Temperatur Sensor Range/Performance |
| 0712 | P0712: Transmission Fluid Temperatur Sensor Circuit Low Input |
| 0713 | P0713: Transmission Fluid Temperatur Sensor Circuit High Input |
| 0714 | P0714: ...yet not specified |
| 0715 | P0715: Input/Turbine Speed Sensor Circuit Malfunction |
| 0716 | P0716: Input/Turbine Speed Sensor Range/Performance |
| 0717 | P0717: Input/Turbine Speed Sensor Circuit No Signal |
| 0718 | P0718: ...yet not specified |
| 0719 | P0719: ...yet not specified |
| 0720 | P0720: Output Speed Sensor Circuit Malfunction |
| 0721 | P0721: Output Speed Sensor Range/Performance |
| 0722 | P0722: Output Speed Sensor Circuit No Signal |
| 0723 | P0723: ...yet not specified |
| 0724 | P0724: ...yet not specified |
| 0725 | P0725: Engine Speed Sensor Circuit Malfunction |
| 0726 | P0726: Engine Speed Sensor Range/Performance |
| 0727 | P0727: Engine Speed Sensor Circuit No Signal |
| 0728 | P0728: ...yet not specified |
| 0729 | P0729: ...yet not specified |
| 0730 | P0730: Incorrect Gear Ratio |
| 0731 | P0731: Gear 1: Incorrect Ratio |
| 0732 | P0732: Gear 2: Incorrect Ratio |
| 0733 | P0733: Gear 3: Incorrect Ratio |
| 0734 | P0734: Gear 4: Incorrect Ratio |
| 0735 | P0735: Gear 5: Incorrect Ratio |
| 0736 | P0736: Reverse Incorrect Ratio |
| 0737 | P0737: ...yet not specified |
| 0738 | P0738: ...yet not specified |
| 0739 | P0739: ...yet not specified |
| 0740 | P0740: Tourque Converter Clutch System Malfunction |
| 0741 | P0741: Tourque Converter Clutch System Performance or Stuck Off |
| 0742 | P0742: Tourque Converter Clutch System Stuck On |
| 0743 | P0743: Tourque Converter Clutch Electrical |
| 0744 | P0744: ...yet not specified |
| 0745 | P0740: Pressure Control Solenoid Malfunction |
| 0746 | P0741: Pressure Control Solenoid Performance or Stuck Off |
| 0747 | P0742: Pressure Control Solenoid Stuck On |
| 0748 | P0743: Pressure Control Solenoid Electrical |
| 0749 | P0749: ...yet not specified |
| 0750 | P0750: Shift Solenoid A Malfunction |
| 0751 | P0751: Shift Solenoid A Performance or Stuck Off |
| 0752 | P0752: Shift Solenoid A Stuck On |
| 0753 | P0753: Shift Solenoid A Electrical |
| 0754 | P0754: ...yet not specified |
| 0755 | P0755: Shift Solenoid B Malfunction |
| 0756 | P0756: Shift Solenoid B Performance or Stuck Off |
| 0757 | P0757: Shift Solenoid B Stuck On |
| 0758 | P0758: Shift Solenoid B Electrical |
| 0759 | P0759: ...yet not specified |
| 0760 | P0760: Shift Solenoid C Malfunction |
| 0761 | P0761: Shift Solenoid C Performance or Stuck Off |
| 0762 | P0762: Shift Solenoid C Stuck On |
| 0763 | P0763: Shift Solenoid C Electrical |
| 0764 | P0764: ...yet not specified |
| 0765 | P0765: Shift Solenoid D Malfunction |
| 0766 | P0766: Shift Solenoid D Performance or Stuck Off |
| 0767 | P0767: Shift Solenoid D Stuck On |
| 0768 | P0768: Shift Solenoid D Electrical |
| 0769 | P0769: ...yet not specified |
| 0770 | P0770: Shift Solenoid E Malfunction |
| 0771 | P0771: Shift Solenoid E Performance or Stuck Off |
| 0772 | P0772: Shift Solenoid E Stuck On |
| 0773 | P0773: Shift Solenoid E Electrical |
| 1XXX | P1xxx: Manufacturer Specific DTC |
| XXXX | Pxxxx: Unknown DTC |

### MODES

| NAME | VALUE |
| --- | --- |
| MODE1 | 1 |
| MODE2 | 2 |
| MODE3 | 3 |
| MODE4 | 4 |
| MODE5 | 5 |
| MODE6 | 6 |
| MODE7 | 7 |

### CARBSOURCE

| ADRESS | ECU |
| --- | --- |
| 0x00 | [00 (Powertrain/Integration)] |
| 0x01 | [01 (Powertrain/Integration)] |
| 0x02 | [02 (Powertrain/Integration)] |
| 0x03 | [03 (Powertrain/Integration)] |
| 0x04 | [04 (Powertrain/Integration)] |
| 0x05 | [05 (Powertrain/Integration)] |
| 0x06 | [06 (Powertrain/Integration)] |
| 0x07 | [07 (Powertrain/Integration)] |
| 0x08 | [08 (Powertrain/Integration)] |
| 0x09 | [09 (Powertrain/Integration)] |
| 0x0A | [0A (Powertrain/Integration)] |
| 0x0B | [0B (Powertrain/Integration)] |
| 0x0C | [0C (Powertrain/Integration)] |
| 0x0D | [0D (Powertrain/Integration)] |
| 0x0E | [0E (Powertrain/Integration)] |
| 0x0F | [0F (Powertrain/Integration)] |
| 0x10 | [10 (Powertrain/Engine Controller)] |
| 0x11 | [11 (Powertrain/Engine Controller)] |
| 0x12 | [12 (Powertrain/Engine Controller)] |
| 0x13 | [13 (Powertrain/Engine Controller)] |
| 0x14 | [14 (Powertrain/Engine Controller)] |
| 0x15 | [15 (Powertrain/Engine Controller)] |
| 0x16 | [16 (Powertrain/Engine Controller)] |
| 0x17 | [17 (Powertrain/Engine Controller)] |
| 0x18 | [18 (Powertrain/Transmission Controller)] |
| 0x19 | [19 (Powertrain/Transmission Controller)] |
| 0x1A | [1A (Powertrain/Transmission Controller)] |
| 0x1B | [1B (Powertrain/Transmission Controller)] |
| 0x1C | [1C (Powertrain/Transmission Controller)] |
| 0x1D | [1D (Powertrain/Transmission Controller)] |
| 0x1E | [1E (Powertrain/Transmission Controller)] |
| 0x1F | [1F (Powertrain/Transmission Controller)] |
| 0x20 | [20 (Chassis/Integration)] |
| 0x21 | [21 (Chassis/Integration)] |
| 0x22 | [22 (Chassis/Integration)] |
| 0x23 | [23 (Chassis/Integration)] |
| 0x24 | [24 (Chassis/Integration)] |
| 0x25 | [25 (Chassis/Integration)] |
| 0x26 | [26 (Chassis/Integration)] |
| 0x27 | [27 (Chassis/Integration)] |
| 0x28 | [28 (Chassis/Brake Controller)] |
| 0x29 | [29 (Chassis/Brake Controller)] |
| 0x2A | [2A (Chassis/Brake Controller)] |
| 0x2B | [2B (Chassis/Brake Controller)] |
| 0x2C | [2C (Chassis/Brake Controller)] |
| 0x2D | [2D (Chassis/Brake Controller)] |
| 0x2E | [2E (Chassis/Brake Controller)] |
| 0x2F | [2F (Chassis/Brake Controller)] |
| 0x30 | [30 (Chassis/Steering Controller)] |
| 0x31 | [31 (Chassis/Steering Controller)] |
| 0x32 | [32 (Chassis/Steering Controller)] |
| 0x33 | [33 (Chassis/Steering Controller)] |
| 0x34 | [34 (Chassis/Steering Controller)] |
| 0x35 | [35 (Chassis/Steering Controller)] |
| 0x36 | [36 (Chassis/Steering Controller)] |
| 0x37 | [37 (Chassis/Steering Controller)] |
| 0x38 | [38 (Chassis/Suspension Controller)] |
| 0x39 | [39 (Chassis/Suspension Controller)] |
| 0x3A | [3A (Chassis/Suspension Controller)] |
| 0x3B | [3B (Chassis/Suspension Controller)] |
| 0x3C | [3C (Chassis/Suspension Controller)] |
| 0x3D | [3D (Chassis/Suspension Controller)] |
| 0x3E | [3E (Chassis/Suspension Controller)] |
| 0x3F | [3F (Chassis/Suspension Controller)] |
| 0x40 | [40 (Body/Integration)] |
| 0x41 | [41 (Body/Integration)] |
| 0x42 | [42 (Body/Integration)] |
| 0x43 | [43 (Body/Integration)] |
| 0x44 | [44 (Body/Integration)] |
| 0x45 | [45 (Body/Integration)] |
| 0x46 | [46 (Body/Integration)] |
| 0x47 | [47 (Body/Integration)] |
| 0x48 | [48 (Body/Integration)] |
| 0x49 | [49 (Body/Integration)] |
| 0x4A | [4A (Body/Integration)] |
| 0x4B | [4B (Body/Integration)] |
| 0x4C | [4C (Body/Integration)] |
| 0x4D | [4D (Body/Integration)] |
| 0x4E | [4E (Body/Integration)] |
| 0x4F | [4F (Body/Integration)] |
| 0x50 | [50 (Body/Integration)] |
| 0x51 | [51 (Body/Integration)] |
| 0x52 | [52 (Body/Integration)] |
| 0x53 | [53 (Body/Integration)] |
| 0x54 | [54 (Body/Integration)] |
| 0x55 | [55 (Body/Integration)] |
| 0x56 | [56 (Body/Integration)] |
| 0x57 | [57 (Body/Integration)] |
| 0x58 | [58 (Body/Restraint)] |
| 0x59 | [59 (Body/Restraint)] |
| 0x5A | [5A (Body/Restraint)] |
| 0x5B | [5B (Body/Restraint)] |
| 0x5C | [5C (Body/Restraint)] |
| 0x5D | [5D (Body/Restraint)] |
| 0x5E | [5E (Body/Restraint)] |
| 0x5F | [5F (Body/Restraint)] |
| 0x60 | [60 (Body/Driver Information)] |
| 0x61 | [61 (Body/Driver Information)] |
| 0x62 | [62 (Body/Driver Information)] |
| 0x63 | [63 (Body/Driver Information)] |
| 0x64 | [64 (Body/Driver Information)] |
| 0x65 | [65 (Body/Driver Information)] |
| 0x66 | [66 (Body/Driver Information)] |
| 0x67 | [67 (Body/Driver Information)] |
| 0x68 | [68 (Body/Driver Information)] |
| 0x69 | [69 (Body/Driver Information)] |
| 0x6A | [6A (Body/Driver Information)] |
| 0x6B | [6B (Body/Driver Information)] |
| 0x6C | [6C (Body/Driver Information)] |
| 0x6D | [6D (Body/Driver Information)] |
| 0x6E | [6E (Body/Driver Information)] |
| 0x6F | [6F (Body/Driver Information)] |
| 0x70 | [70 (Body/Lighting)] |
| 0x71 | [71 (Body/Lighting)] |
| 0x72 | [72 (Body/Lighting)] |
| 0x73 | [73 (Body/Lighting)] |
| 0x74 | [74 (Body/Lighting)] |
| 0x75 | [75 (Body/Lighting)] |
| 0x76 | [76 (Body/Lighting)] |
| 0x77 | [77 (Body/Lighting)] |
| 0x78 | [78 (Body/Lighting)] |
| 0x79 | [79 (Body/Lighting)] |
| 0x7A | [7A (Body/Lighting)] |
| 0x7B | [7B (Body/Lighting)] |
| 0x7C | [7C (Body/Lighting)] |
| 0x7D | [7D (Body/Lighting)] |
| 0x7E | [7E (Body/Lighting)] |
| 0x7F | [7F (Body/Lighting)] |
| 0x80 | [80 (Body/Entertainment)] |
| 0x81 | [81 (Body/Entertainment)] |
| 0x82 | [82 (Body/Entertainment)] |
| 0x83 | [83 (Body/Entertainment)] |
| 0x84 | [84 (Body/Entertainment)] |
| 0x85 | [85 (Body/Entertainment)] |
| 0x86 | [86 (Body/Entertainment)] |
| 0x87 | [87 (Body/Entertainment)] |
| 0x88 | [88 (Body/Entertainment)] |
| 0x89 | [89 (Body/Entertainment)] |
| 0x8A | [8A (Body/Entertainment)] |
| 0x8B | [8B (Body/Entertainment)] |
| 0x8C | [8C (Body/Entertainment)] |
| 0x8D | [8D (Body/Entertainment)] |
| 0x8E | [8E (Body/Entertainment)] |
| 0x8F | [8F (Body/Entertainment)] |
| 0x90 | [90 (Body/Personal Communications)] |
| 0x91 | [91 (Body/Personal Communications)] |
| 0x92 | [92 (Body/Personal Communications)] |
| 0x93 | [93 (Body/Personal Communications)] |
| 0x94 | [94 (Body/Personal Communications)] |
| 0x95 | [95 (Body/Personal Communications)] |
| 0x96 | [96 (Body/Personal Communications)] |
| 0x97 | [97 (Body/Personal Communications)] |
| 0x98 | [98 (Body/Climate Control)] |
| 0x99 | [99 (Body/Climate Control)] |
| 0x9A | [9A (Body/Climate Control)] |
| 0x9B | [9B (Body/Climate Control)] |
| 0x9C | [9C (Body/Climate Control)] |
| 0x9D | [9D (Body/Climate Control)] |
| 0x9E | [9E (Body/Climate Control)] |
| 0x9F | [9F (Body/Climate Control)] |
| 0x90 | [A0 (Body/Convenience)] |
| 0xA1 | [A1 (Body/Convenience)] |
| 0xA2 | [A2 (Body/Convenience)] |
| 0xA3 | [A3 (Body/Convenience)] |
| 0xA4 | [A4 (Body/Convenience)] |
| 0xA5 | [A5 (Body/Convenience)] |
| 0xA6 | [A6 (Body/Convenience)] |
| 0xA7 | [A7 (Body/Convenience)] |
| 0xA8 | [A8 (Body/Convenience)] |
| 0xA9 | [A9 (Body/Convenience)] |
| 0xAA | [AA (Body/Convenience)] |
| 0xAB | [AB (Body/Convenience)] |
| 0xAC | [AC (Body/Convenience)] |
| 0xAD | [AD (Body/Convenience)] |
| 0xAE | [AE (Body/Convenience)] |
| 0xAF | [AF (Body/Convenience)] |
| 0xB0 | [B0 (Body/Convenience)] |
| 0xB1 | [B1 (Body/Convenience)] |
| 0xB2 | [B2 (Body/Convenience)] |
| 0xB3 | [B3 (Body/Convenience)] |
| 0xB4 | [B4 (Body/Convenience)] |
| 0xB5 | [B5 (Body/Convenience)] |
| 0xB6 | [B6 (Body/Convenience)] |
| 0xB7 | [B7 (Body/Convenience)] |
| 0xB8 | [B8 (Body/Convenience)] |
| 0xB9 | [B9 (Body/Convenience)] |
| 0xBA | [BA (Body/Convenience)] |
| 0xBB | [BB (Body/Convenience)] |
| 0xBC | [BC (Body/Convenience)] |
| 0xBD | [BD (Body/Convenience)] |
| 0xBE | [BE (Body/Convenience)] |
| 0xBF | [BF (Body/Convenience)] |
| 0xC0 | [C0 (Body/Security)] |
| 0xC1 | [C1 (Body/Security)] |
| 0xC2 | [C2 (Body/Security)] |
| 0xC3 | [C3 (Body/Security)] |
| 0xC4 | [C4 (Body/Security)] |
| 0xC5 | [C5 (Body/Security)] |
| 0xC6 | [C6 (Body/Security)] |
| 0xC7 | [C7 (Body/Security)] |
| 0xC8 | [C8 (Future Expansion)] |
| 0xC9 | [C9 (Future Expansion)] |
| 0xCA | [CA (Future Expansion)] |
| 0xCB | [CB (Future Expansion)] |
| 0xCC | [CC (Future Expansion)] |
| 0xCD | [CD (Future Expansion)] |
| 0xCE | [CE (Future Expansion)] |
| 0xCF | [CF (Future Expansion)] |
| 0xD0 | [D0 (Manufacturer Specific)] |
| 0xD1 | [D1 (Manufacturer Specific)] |
| 0xD2 | [D2 (Manufacturer Specific)] |
| 0xD3 | [D3 (Manufacturer Specific)] |
| 0xD4 | [D4 (Manufacturer Specific)] |
| 0xD5 | [D5 (Manufacturer Specific)] |
| 0xD6 | [D6 (Manufacturer Specific)] |
| 0xD7 | [D7 (Manufacturer Specific)] |
| 0xD8 | [D8 (Manufacturer Specific)] |
| 0xD9 | [D9 (Manufacturer Specific)] |
| 0xDA | [DA (Manufacturer Specific)] |
| 0xDB | [DB (Manufacturer Specific)] |
| 0xDC | [DC (Manufacturer Specific)] |
| 0xDD | [DD (Manufacturer Specific)] |
| 0xDE | [DE (Manufacturer Specific)] |
| 0xDF | [DF (Manufacturer Specific)] |
| 0xE0 | [E0 (Manufacturer Specific)] |
| 0xE1 | [E1 (Manufacturer Specific)] |
| 0xE2 | [E2 (Manufacturer Specific)] |
| 0xE3 | [E3 (Manufacturer Specific)] |
| 0xE4 | [E4 (Manufacturer Specific)] |
| 0xE5 | [E5 (Manufacturer Specific)] |
| 0xE6 | [E6 (Manufacturer Specific)] |
| 0xE7 | [E7 (Manufacturer Specific)] |
| 0xE8 | [E8 (Manufacturer Specific)] |
| 0xE9 | [E9 (Manufacturer Specific)] |
| 0xEA | [EA (Manufacturer Specific)] |
| 0xEB | [EB (Manufacturer Specific)] |
| 0xEC | [EC (Manufacturer Specific)] |
| 0xED | [ED (Manufacturer Specific)] |
| 0xEE | [EE (Manufacturer Specific)] |
| 0xEF | [EF (Manufacturer Specific)] |
| 0xF0 | [F0 (Tester/Diagnostic Tools)] |
| 0xF1 | [F1 (Tester/Diagnostic Tools)] |
| 0xF2 | [F2 (Tester/Diagnostic Tools)] |
| 0xF3 | [F3 (Tester/Diagnostic Tools)] |
| 0xF4 | [F4 (Tester/Diagnostic Tools)] |
| 0xF5 | [F5 (Tester/Diagnostic Tools)] |
| 0xF6 | [F6 (Tester/Diagnostic Tools)] |
| 0xF7 | [F7 (Tester/Diagnostic Tools)] |
| 0xF8 | [F8 (Tester/Diagnostic Tools)] |
| 0xF9 | [F9 (Tester/Diagnostic Tools)] |
| 0xFA | [FA (Tester/Diagnostic Tools)] |
| 0xFB | [FB (Tester/Diagnostic Tools)] |
| 0xFC | [FC (Tester/Diagnostic Tools)] |
| 0xFD | [FD (Tester/Diagnostic Tools)] |
| 0xFE | [FE (All Nodes)] |
| 0xFF | [FF (Null Node)] |
| 0x00 | [XX (Vehicle)] |
