# EDIABAS TypeScript Migration Concept

## Executive Summary

This document outlines the migration strategy for porting EdiabasLib (BMW diagnostic interface library) from C# to TypeScript. The goal is to create a modern, modular, cross-platform library that can run on Node.js, Deno, and Bun.

## Source Analysis

### Original Repository Structure

The original EdiabasLib repository (https://github.com/emdzej/ediabaslib) contains:

- **EdiabasLib/** - Core library (~40,000 lines of C#)
  - `EdiabasNet.cs` (7,606 lines) - Main interpreter and file parser
  - `EdOperations.cs` (3,278 lines) - BEST2 bytecode operations
  - `EdInterfaceEnet.cs` (7,725 lines) - Ethernet/DoIP interface
  - `EdInterfaceObd.cs` (5,734 lines) - OBD/Serial interface
  - Various communication interfaces (Bluetooth, WiFi, FTDI)

- **Tools/** - Utility programs
  - `BESTDIS/` - BEST2 disassembler (excellent reference for bytecode format)

- **BmwDeepObd/** - Android application

### Key Components to Migrate

#### 1. BEST2 Bytecode Interpreter

The core of EdiabasLib is a stack-based virtual machine that executes BEST2 bytecode from `.prg` and `.grp` files.

**Register Architecture:**
- `B0-BF, A0-AF` - 8-bit registers (32 total)
- `I0-IF` - 16-bit registers (16 total)
- `L0-L7` - 32-bit registers (8 total)
- `S0-SF` - String registers (16 total)
- `F0-F7` - Float registers (8 total, Double precision)

**Addressing Modes:**
```typescript
enum OpAddrMode {
  None = 0x00,
  RegS = 0x01,       // String register
  RegAB = 0x02,      // 8-bit register
  RegI = 0x03,       // 16-bit register
  RegL = 0x04,       // 32-bit register
  Imm8 = 0x05,       // 8-bit immediate
  Imm16 = 0x06,      // 16-bit immediate
  Imm32 = 0x07,      // 32-bit immediate
  ImmStr = 0x08,     // String immediate
  IdxImm = 0x09,     // Indexed with immediate offset
  IdxReg = 0x0A,     // Indexed with register offset
  IdxRegImm = 0x0B,  // Indexed with register + immediate offset
  IdxImmLenImm = 0x0C,
  IdxImmLenReg = 0x0D,
  IdxRegLenImm = 0x0E,
  IdxRegLenReg = 0x0F,
}
```

**Instruction Set (184 opcodes):**
- Arithmetic: `adds`, `subb`, `mult`, `divs`, `addc`, `subc`
- Logic: `and`, `or`, `xor`, `not`, `asl`, `asr`, `lsl`, `lsr`
- Control flow: `jump`, `jtsr`, `ret`, `jc`, `jz`, `jnz`, `jmi`, `jpl`, etc.
- String ops: `scmp`, `scat`, `scut`, `slen`, `spaste`, `serase`, `strcmp`, `strlen`
- Float ops: `a2flt`, `fadd`, `fsub`, `fmul`, `fdiv`, `fcomp`
- Communication: `xconnect`, `xhangup`, `xsend`, `xrecv`, `xsendr`, etc.
- Results: `ergb`, `ergw`, `ergd`, `ergi`, `ergr`, `ergs`, `ergy`
- Tables: `tabset`, `tabseek`, `tabget`, `tabline`, `tabcols`, `tabrows`
- File I/O: `fopen`, `fclose`, `fread`, `freadln`, `fseek`

#### 2. PRG/GRP File Format

Binary file format with XOR encryption (key: 0x5A):

**Header Structure (0x9C bytes):**
```
Offset  Size  Description
------  ----  -----------
0x00    16    Magic bytes
0x10    4     File type (0=group, 1=prg)
0x14    4     Reserved (-1)
0x18    4     SSIZE (max string register size)
0x78    4     Reserved pointer
0x7C    4     Uses list offset
0x80    4     Job code offset
0x84    4     Table list offset
0x88    4     Job list offset
0x8C    4     Reserved pointer
0x90    4     Description offset
0x94    4     Version info offset
0x98    4     Reserved
```

**Job Entry (0x44 bytes):**
```
Offset  Size  Description
------  ----  -----------
0x00    64    Job name (null-terminated)
0x40    4     Job bytecode offset
```

**Table Entry (0x50 bytes):**
```
Offset  Size  Description
------  ----  -----------
0x00    64    Table name (null-terminated)
0x40    4     Column data offset
0x48    4     Column count
0x4C    4     Row count
```

#### 3. Communication Interfaces

**Priority for migration:**
1. ✅ Serial/OBD - Most commonly used, priority interface
2. ✅ ENET/DoIP (Ethernet) - Modern vehicles
3. ✅ TCP/IP based interfaces
4. ❌ Bluetooth (Windows-specific) - Skip
5. ❌ FTDI (platform-specific) - Skip

**Protocol Stack:**
- DoIP (Diagnostics over IP) - ISO 13400
- HSFZ (High-Speed Fahrzeug-Zugang) - BMW proprietary
- UDS (Unified Diagnostic Services) - ISO 14229
- KWP2000 (Keyword Protocol 2000) - ISO 14230
- TP2.0 (Transport Protocol 2.0) - VAG specific

## DataView Compatibility Analysis

The Web API `DataView` is **perfect** for this migration:

### Advantages:
1. **Little-endian support** - `getInt32(offset, true)` handles BMW's LE format
2. **Type safety** - Explicit byte access methods
3. **Cross-platform** - Works identically in Node.js, Deno, Bun, and browsers
4. **Performance** - Native implementation, no parsing overhead
5. **ArrayBuffer base** - Easy integration with file I/O and network

### Usage Pattern:
```typescript
// Reading PRG header
const buffer = await fs.readFile(prgPath);
const view = new DataView(buffer.buffer);

const fileType = view.getInt32(0x10, true);
const ssize = view.getUint32(0x18, true);
const usesOffset = view.getInt32(0x7C, true);
const jobListOffset = view.getInt32(0x88, true);
const tableOffset = view.getInt32(0x84, true);
```

### Decryption:
```typescript
function decryptBytes(data: Uint8Array): Uint8Array {
  return data.map(b => b ^ 0x5A);
}
```

## Proposed Architecture

### Package Structure (Monorepo with pnpm workspaces + Turborepo)

```
ediabas/
├── turbo.json               # Turborepo configuration
├── pnpm-workspace.yaml      # pnpm workspaces
├── packages/
│   ├── core/                    # Core types and utilities
│   │   ├── src/
│   │   │   ├── types.ts         # Shared type definitions
│   │   │   ├── errors.ts        # Custom error classes
│   │   │   ├── encoding.ts      # Windows-1252 encoding
│   │   │   └── crypto.ts        # XOR decryption
│   │   └── package.json
│   │
│   ├── best-parser/             # BEST2 PRG/GRP file parser
│   │   ├── src/
│   │   │   ├── parser.ts        # Main parser
│   │   │   ├── header.ts        # Header parsing
│   │   │   ├── jobs.ts          # Job list parsing
│   │   │   ├── tables.ts        # Table parsing
│   │   │   ├── descriptions.ts  # Comment/description parsing
│   │   │   └── disassembler.ts  # Bytecode disassembler
│   │   └── package.json
│   │
│   ├── interpreter/             # BEST2 bytecode interpreter
│   │   ├── src/
│   │   │   ├── vm.ts            # Virtual machine core
│   │   │   ├── registers.ts     # Register management
│   │   │   ├── operations/      # Grouped by category
│   │   │   │   ├── arithmetic.ts
│   │   │   │   ├── logic.ts
│   │   │   │   ├── control.ts
│   │   │   │   ├── string.ts
│   │   │   │   ├── float.ts
│   │   │   │   ├── table.ts
│   │   │   │   ├── result.ts
│   │   │   │   └── comm.ts      # Communication stubs
│   │   │   ├── flags.ts         # CPU flags (Z, C, V, S)
│   │   │   └── stack.ts         # Call stack
│   │   └── package.json
│   │
│   ├── interface-base/          # Abstract communication interface
│   │   ├── src/
│   │   │   ├── interface.ts     # Base class
│   │   │   └── simulation.ts    # Simulation mode
│   │   └── package.json
│   │
│   ├── interface-serial/        # Serial/OBD interface (PRIORITY)
│   │   ├── src/
│   │   │   ├── serial.ts        # Serial port implementation
│   │   │   └── adapters.ts      # Common adapter configs
│   │   └── package.json
│   │
│   ├── interface-enet/          # Ethernet interface
│   │   ├── src/
│   │   │   ├── enet.ts          # ENET implementation
│   │   │   └── discovery.ts     # Vehicle discovery
│   │   └── package.json
│   │
│   ├── protocol-uds/            # UDS protocol (ISO 14229)
│   │   ├── src/
│   │   │   ├── uds.ts           # UDS implementation
│   │   │   ├── services.ts      # UDS service definitions
│   │   │   └── nrc.ts           # Negative Response Codes
│   │   └── package.json
│   │
│   ├── protocol-kwp/            # KWP2000 protocol (ISO 14230)
│   │   ├── src/
│   │   │   ├── kwp.ts           # KWP2000 implementation
│   │   │   └── services.ts      # KWP service definitions
│   │   └── package.json
│   │
│   ├── protocol-doip/           # DoIP protocol (ISO 13400)
│   │   ├── src/
│   │   │   ├── doip.ts          # DoIP implementation
│   │   │   ├── hsfz.ts          # HSFZ (BMW proprietary)
│   │   │   └── messages.ts      # Message definitions
│   │   └── package.json
│   │
│   ├── ediabas/                 # Main library (combines all)
│   │   ├── src/
│   │   │   ├── index.ts         # Main export
│   │   │   ├── ediabas.ts       # EdiabasNet equivalent
│   │   │   └── config.ts        # Configuration
│   │   └── package.json
│   │
│   └── cli/                     # CLI/TUI tools
│       ├── src/
│       │   ├── cli.ts           # Main CLI entry
│       │   ├── commands/
│       │   │   ├── info.ts      # Show PRG info
│       │   │   ├── jobs.ts      # List jobs
│       │   │   ├── disasm.ts    # Disassemble
│       │   │   ├── run.ts       # Execute job
│       │   │   └── discover.ts  # Find vehicles
│       │   └── tui/             # Terminal UI (optional)
│       │       └── browser.ts   # Job browser
│       └── package.json
```

### Dependencies

**Core:**
- `iconv-lite` - Windows-1252 encoding (or implement subset)

**CLI:**
- `commander` - CLI parsing (stable, well-documented standard)
- `ink` - React-based TUI (interactive views, job browser, live output)
- `@clack/prompts` - Beautiful interactive prompts (confirm, select, etc.)
- `chalk` - Terminal colors
- `ora` - Spinners for async operations

**Testing:**
- `vitest` - Testing framework
- Sample `.prg` files for integration tests

### API Design

```typescript
// High-level API
import { Ediabas, EnetInterface } from '@ediabas/ediabas';

const ediabas = new Ediabas({
  ecuPath: './ecu',
  interface: new EnetInterface({ host: '192.168.0.1' }),
});

await ediabas.loadSgbd('d_motor.prg');

// List available jobs
const jobs = await ediabas.getJobs();

// Execute a job
const results = await ediabas.executeJob('STATUS_LESEN');

// Access results
for (const result of results) {
  console.log(result.name, result.value);
}

// Low-level API
import { PrgParser } from '@ediabas/best-parser';

const parser = new PrgParser();
const prg = await parser.parse('./d_motor.prg');

console.log('Jobs:', prg.jobs.map(j => j.name));
console.log('Tables:', prg.tables.map(t => t.name));

// Disassemble a job
const disasm = parser.disassemble(prg, 'STATUS_LESEN');
console.log(disasm);
```

## Implementation Plan

### Phase 1: Foundation (Week 1-2)
1. ✅ Set up monorepo with pnpm workspaces + Turborepo
2. ✅ Implement `@ediabas/core` - types, encoding, crypto
3. ✅ Implement `@ediabas/best-parser` - file parsing
4. ✅ Implement disassembler (port BESTDIS)
5. ✅ Basic CLI for testing parser

### Phase 2: Interpreter Core (Week 3-4)
1. Implement register system
2. Implement CPU flags
3. Implement stack
4. Implement basic operations (arithmetic, logic, control)
5. Implement string operations
6. Implement float operations
7. Implement table operations

### Phase 3: Communication (Week 5-7)
1. Implement `@ediabas/interface-base`
2. Implement simulation interface
3. Implement `@ediabas/protocol-uds` (ISO 14229)
4. Implement `@ediabas/protocol-kwp` (ISO 14230)
5. Implement `@ediabas/protocol-doip` (ISO 13400 + HSFZ)
6. Implement `@ediabas/interface-serial` (OBD - PRIORITY)
7. Implement `@ediabas/interface-enet`

### Phase 4: Integration (Week 8-9)
1. Implement `@ediabas/ediabas` main library
2. Implement result generation (erg* operations)
3. Implement communication operations (x* operations)
4. End-to-end testing with real ECUs

### Phase 5: CLI/TUI (Week 10-11)
1. Implement CLI commands
2. Implement interactive job browser
3. Documentation and examples

## Simplifications

### Removed Features
1. **Virtual Jobs** - Not needed, can be implemented in userland
2. **Bluetooth interfaces** - Windows-specific, skip
3. **FTDI interfaces** - Platform-specific drivers, skip
4. **Android-specific code** - Not applicable
5. **Windows CE support** - Obsolete

### Simplified Features
1. **File caching** - Use OS-level caching
2. **Mutex/locking** - Single-threaded Node.js doesn't need it
3. **Trace logging** - Use standard console/debug

## Technical Notes

### Encoding
Original uses Windows-1252 (Code Page 1252). Need to handle:
- Job names
- Table contents
- Description strings

```typescript
// Minimal Windows-1252 subset for common BMW characters
const CP1252_CHARS = new Map([
  [0x80, '€'], [0x8A, 'Š'], [0x8E, 'Ž'],
  [0x92, '''], [0x93, '"'], [0x94, '"'],
  [0x96, '–'], [0x97, '—'], [0x99, '™'],
  // ... common German characters
  [0xC4, 'Ä'], [0xD6, 'Ö'], [0xDC, 'Ü'],
  [0xDF, 'ß'], [0xE4, 'ä'], [0xF6, 'ö'], [0xFC, 'ü'],
]);
```

### Error Handling
Port error codes from `ErrorCodes` enum for compatibility:
- `EDIABAS_IFH_*` - Interface handler errors
- `EDIABAS_BIP_*` - Bytecode interpreter errors
- `EDIABAS_SYS_*` - System errors
- `EDIABAS_API_*` - API errors

### Async Considerations
Unlike C#, TypeScript/Node.js I/O is inherently async:
- File reading → `fs.promises.readFile`
- Network I/O → async/await with sockets
- Job execution → async generator for streaming results

## References

1. Original EdiabasLib: https://github.com/uholeschak/ediabaslib
2. BEST2 bytecode format: `Tools/BESTDIS/Program.cs`
3. DoIP specification: ISO 13400
4. UDS specification: ISO 14229
5. KWP2000: ISO 14230
