# TypeScript Guidelines

## Core Principles

- `strict: true` in tsconfig (mandatory)
- No `any` - use `unknown` if type is truly unknown
- Explicit return types for public functions
- Use `readonly` for immutable data
- Prefer `Uint8Array` for binary data

## Types vs Interfaces

```typescript
// ✅ Use `type` for data models
type PrgJob = {
  name: string;
  offset: number;
  argCount: number;
  resultCount: number;
};

// ✅ Use `interface` for contracts and operations
interface Parser {
  parse(buffer: Uint8Array): PrgFile;
}
```

**Rule of thumb:**

- `type` → Data shapes (PrgJob, Instruction, RegisterSnapshot)
- `interface` → Service contracts, abstract interfaces

## Const Objects over Enums

```typescript
// ✅ Good: Const object + type (better tree-shaking)
const ErrorCodes = {
  STACK_OVERFLOW: 'STACK_OVERFLOW',
  STACK_UNDERFLOW: 'STACK_UNDERFLOW',
  INVALID_OPCODE: 'INVALID_OPCODE',
} as const;

type ErrorCode = (typeof ErrorCodes)[keyof typeof ErrorCodes];

// ❌ Bad: Enums (poor tree-shaking, runtime overhead)
enum ErrorCode {
  StackOverflow = 'STACK_OVERFLOW',
}
```

**Why avoid enums?**
- Enums generate extra runtime code
- Poor tree-shaking (entire enum included even if one value used)
- Const objects are just plain objects - zero overhead

## Naming Conventions

| Type          | Convention            | Example                          |
| ------------- | --------------------- | -------------------------------- |
| Variables     | camelCase             | `jobList`, `isRunning`           |
| Constants     | SCREAMING_SNAKE_CASE  | `MAX_STACK_DEPTH`, `XOR_KEY`     |
| Functions     | camelCase             | `parseJob`, `decodeString`       |
| Types         | PascalCase            | `PrgJob`, `Instruction`          |
| Interfaces    | PascalCase            | `Parser`, `Interface`            |
| Const Objects | PascalCase + plural   | `ErrorCodes`, `AddressingModes`  |
| Classes       | PascalCase            | `RegisterSet`, `CallStack`       |

## File Naming

| Type             | Convention             | Example               |
| ---------------- | ---------------------- | --------------------- |
| Types/Interfaces | lowercase              | `types.ts`            |
| Classes          | lowercase              | `registers.ts`        |
| Utilities        | camelCase              | `xorDecrypt.ts`       |
| Tests            | Same name + `.spec.ts` | `registers.spec.ts`   |

## Common Patterns

### Discriminated Unions

```typescript
type Result<T> = 
  | { success: true; value: T } 
  | { success: false; error: EdiabasError };
```

### Bit Width Types

```typescript
type BitWidth = 8 | 16 | 32;

function mask(value: number, bits: BitWidth): number {
  return value & ((1 << bits) - 1);
}
```

### Snapshot Pattern (for debugging)

```typescript
class RegisterSet {
  snapshot(): RegisterSnapshot {
    return {
      b: [...this.b],
      i: [...this.i],
      // ...
    };
  }
}
```

## Anti-patterns

```typescript
// ❌ Using `any`
function decode(data: any): any {}

// ❌ Using enums
enum Opcode { Move = 0x01 }

// ❌ Type assertions without validation
const job = response as PrgJob;

// ❌ Non-null assertions without checks
const name = job!.name;

// ❌ Implicit any in function params
function process(data) {}

// ❌ Magic numbers without constants
if (buffer[0] === 0xF7) {}  // What is 0xF7?

// ✅ Better:
const XOR_KEY = 0xF7;
if (buffer[0] === XOR_KEY) {}
```

## Binary Data

```typescript
// ✅ Use Uint8Array for binary buffers
function xorDecrypt(buffer: Uint8Array, key: Uint8Array): Uint8Array {
  const result = new Uint8Array(buffer.length);
  for (let i = 0; i < buffer.length; i++) {
    result[i] = buffer[i] ^ key[i % key.length];
  }
  return result;
}

// ✅ Use DataView for multi-byte reads
const view = new DataView(buffer.buffer, buffer.byteOffset);
const value = view.getUint32(offset, true); // little-endian
```

## Error Handling

```typescript
// ✅ Use typed errors
import { EdiabasError, ErrorCodes } from '@ediabas/core';

throw new EdiabasError(ErrorCodes.STACK_OVERFLOW, 'Call stack exceeded limit');

// ✅ Check error type
if (error instanceof EdiabasError) {
  console.error(`Ediabas error: ${error.code}`);
}
```
