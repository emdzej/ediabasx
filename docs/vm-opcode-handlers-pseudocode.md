# EDIABAS VM Opcode Handlers - Complete Pseudocode Reference

Reverse-engineered opcode handlers from `ebas32.dll` decompilation.

## VM State Variables

### CPU Flags
| Address | Name | Description |
|---------|------|-------------|
| `DAT_100d1740` | Zero Flag (ZF) | Set when result is zero |
| `_DAT_100d1742` | Carry Flag (CF) | Set on unsigned overflow/borrow |
| `DAT_100d1744` | Sign Flag (SF) | Set when result is negative |
| `DAT_100d1746` | Overflow Flag (OF) | Set on signed overflow |

### Operand Pointers
| Address | Name | Description |
|---------|------|-------------|
| `DAT_100d1760` | `operand0_ptr` | Destination operand pointer |
| `DAT_100d1764` | `operand0_len_ptr` | Pointer to operand0 length |
| `DAT_100d1770` | `operand0_type` | Operand type (1=byte, 2=word, 4=long) |
| `DAT_100d1774` | `operand1_ptr` | Source operand pointer |
| `DAT_100d178c` | `indexed_offset` | Offset for indexed operations |
| `DAT_100d1790` | `operation_size` | Size of operation in bytes |

### Stack & Execution
| Address | Name | Description |
|---------|------|-------------|
| `DAT_100d1794` | `stack_pointer` | Return/data stack pointer (max 0x800) |
| `DAT_100d17a0` | `stack[]` | Combined stack (2048 bytes) |
| `DAT_100d1748` | `nesting_level` | Subroutine nesting depth |
| `DAT_100d226c` | `result_buffer` | Result output buffer |

---

## Arithmetic Operations

### COMP - Compare (`FUN_10023fc9`)

Compare two operands by subtraction without storing result.

```c
void COMP() {
    src_sign = get_sign(operand1, size);
    dst_sign = get_sign(operand0, size);
    
    CF = 0;
    for (i = 0; i < size; i++) {
        diff = operand0[i] - operand1[i] - CF;
        CF = (diff < 0) ? 1 : 0;
        result[i] = diff & 0xFF;
    }
    
    ZF = is_zero(result, size);
    SF = get_sign(result, size);
    
    // Overflow detection
    if (dst_sign > 0 && src_sign == 0 && SF == 0) OF = 1;
    if (dst_sign == 0 && src_sign > 0 && SF > 0) OF = 1;
}
```

**Flags:** ZF, CF, SF, OF

---

### SUB - Subtract (`FUN_100240f6`)

```c
void SUB() {
    src_sign = get_sign(operand1, size);
    dst_sign = get_sign(operand0, size);
    
    CF = 0;
    for (i = 0; i < size; i++) {
        diff = operand0[i] - operand1[i] - CF;
        CF = (diff < 0) ? 1 : 0;
        operand0[i] = diff & 0xFF;  // Store result
    }
    
    update_flags(operand0, size);
    // Overflow: pos - neg = neg, or neg - pos = pos
}
```

---

### SUBC - Subtract with Carry (`FUN_10024229`)

```c
void SUBC() {
    // Same as SUB but CF is NOT cleared first
    // Uses borrow from previous operation
    for (i = 0; i < size; i++) {
        diff = operand0[i] - operand1[i] - CF;
        CF = (diff < 0) ? 1 : 0;
        operand0[i] = diff & 0xFF;
    }
}
```

---

### ADD - Add (`FUN_10024353`)

```c
void ADD() {
    src_sign = get_sign(operand1, size);
    dst_sign = get_sign(operand0, size);
    
    for (i = 0; i < size; i++) {
        sum = operand0[i] + operand1[i] + CF;
        CF = (sum > 0xFF) ? 1 : 0;
        operand0[i] = sum & 0xFF;
    }
    
    result_sign = get_sign(operand0, size);
    update_flags(operand0, size);
    
    // Overflow: pos + pos = neg, or neg + neg = pos
    if (dst_sign == 0 && src_sign == 0 && result_sign > 0) OF = 1;
    if (dst_sign > 0 && src_sign > 0 && result_sign == 0) OF = 1;
}
```

---

### ADDC - Add with Carry (`FUN_10024481`)

```c
void ADDC() {
    CF = 0;  // Clear carry first (different from ADD!)
    for (i = 0; i < size; i++) {
        sum = operand0[i] + operand1[i] + CF;
        CF = (sum > 0xFF) ? 1 : 0;
        operand0[i] = sum & 0xFF;
    }
}
```

---

## Control Flow

### JMP - Unconditional Jump (`FUN_10024a17`)

```c
void JMP() {
    set_pc(*operand0);  // Relative jump
}
```

---

### JTSR - Jump to Subroutine (`FUN_10024a30`)

```c
void JTSR() {
    return_addr = get_current_pc();
    
    if (stack_pointer + 4 > 0x800) {
        error(STACK_OVERFLOW);
    }
    
    memcpy(&stack[stack_pointer], &return_addr, 4);
    stack_pointer += 4;
    
    set_pc(*operand0);
    nesting_level++;
}
```

---

### RET - Return (`FUN_10024aac`)

```c
void RET() {
    stack_pointer -= 4;
    
    if (stack_pointer < 0) {
        error(STACK_UNDERFLOW);
    }
    
    memcpy(&return_addr, &stack[stack_pointer], 4);
    base = get_current_pc();
    set_pc(return_addr - base);
    
    nesting_level--;
}
```

---

## Conditional Jumps

### JC - Jump if Carry (`FUN_10024b1e`)
```c
void JC() { if (CF != 0) set_pc(*operand0); }
```

### JNC - Jump if No Carry (`FUN_10024b43`)
```c
void JNC() { if (CF == 0) set_pc(*operand0); }
```

### JZ - Jump if Zero (`FUN_10024b68`)
```c
void JZ() { if (ZF != 0) set_pc(*operand0); }
```

### JNZ - Jump if Not Zero (`FUN_10024b8d`)
```c
void JNZ() { if (ZF == 0) set_pc(*operand0); }
```

### JO - Jump if Overflow (`FUN_10024bb2`)
```c
void JO() { if (OF != 0) set_pc(*operand0); }
```

### JNO - Jump if No Overflow (`FUN_10024bd7`)
```c
void JNO() { if (OF == 0) set_pc(*operand0); }
```

### JS - Jump if Sign (`FUN_10024bfc`)
```c
void JS() { if (SF != 0) set_pc(*operand0); }
```

### JNS - Jump if No Sign (`FUN_10024c21`)
```c
void JNS() { if (SF == 0) set_pc(*operand0); }
```

---

## Stack Operations

### PUSH - Push to Stack (`FUN_10024ff5`)

```c
void PUSH() {
    if (stack_pointer + size > 0x800) {
        error(STACK_OVERFLOW);
    }
    
    memcpy(&stack[stack_pointer], operand0, size);
    stack_pointer += size;
    update_flags(operand0, size);
}
```

---

### POP - Pop from Stack (`FUN_10025068`)

```c
void POP() {
    stack_pointer -= size;
    
    if (stack_pointer < 0) {
        error(STACK_UNDERFLOW);
    }
    
    memcpy(operand0, &stack[stack_pointer], size);
    update_flags(operand0, size);
}
```

---

### PEEK - Read from Stack (`FUN_10025da7`)

```c
void PEEK() {
    offset = stack_pointer - indexed_offset;
    
    if (offset < 0) {
        error(STACK_UNDERFLOW);
    }
    
    memcpy(operand0, &stack[offset], size);
}
```

---

### POKE - Write to Stack (`FUN_10025df7`)

```c
void POKE() {
    offset = stack_pointer - indexed_offset;
    
    if (offset < 0) {
        error(STACK_UNDERFLOW);
    }
    
    memcpy(&stack[offset], operand0, size);
}
```

---

### PUSHF - Push Flags (`FUN_1002658c`)

```c
void PUSHF() {
    // Push all 14 bytes of flag state
    if (stack_pointer + 14 > 0x800) {
        error(STACK_OVERFLOW);
    }
    memcpy(&stack[stack_pointer], &flags_block, 14);
    stack_pointer += 14;
}
```

---

### POPF - Pop Flags (`FUN_100265df`)

```c
void POPF() {
    stack_pointer -= 14;
    if (stack_pointer < 0) {
        error(STACK_UNDERFLOW);
    }
    memcpy(&flags_block, &stack[stack_pointer], 14);
}
```

---

## String Operations

### SCMP - String Compare (`FUN_100250d2`)

```c
void SCMP() {
    ZF = 0;
    CF = (*operand0_len < size) ? 1 : 0;
    
    if (*operand0_len == size) {
        for (i = 0; i < size; i++) {
            if (operand0[i] < operand1[i]) CF = 1;
            if (operand0[i] != operand1[i]) {
                ZF = 0;
                return;
            }
        }
        ZF = 1;  // Strings equal
    }
}
```

---

### SCAT - String Concatenate (`FUN_1002517c`)

```c
void SCAT() {
    overflow = (max_len < *operand0_len + size);
    if (overflow) {
        size = max_len - *operand0_len;
    }
    CF = overflow ? 1 : 0;
    
    memcpy(&operand0[*operand0_len], operand1, size);
    *operand0_len += size;
    update_flags(operand0, size);
}
```

---

### SCPY - String Copy (`FUN_1002520d`)

```c
void SCPY() {
    overflow = (max_len < *operand0_len + size);
    if (overflow) {
        operand1[max_len - *operand0_len - 1] = '\0';
    }
    CF = overflow ? 1 : 0;
    
    strcat(operand0, operand1);
    *operand0_len = strlen(operand0) + 1;
    update_flags(operand0, size);
}
```

---

### SCUT - String Cut (`FUN_10025299`)

```c
void SCUT() {
    *operand0_len -= cut_count;
    if (*operand0_len < 0) *operand0_len = 0;
    
    ZF = (*operand0_len == 0) ? 1 : 0;
    if (*operand0_len > 0) {
        operand0[*operand0_len - 1] = '\0';
    }
}
```

---

## Conversion Operations

### ATOI - ASCII to Integer (`FUN_10025c50`)

```c
void ATOI() {
    ptr = operand1;
    
    if (ptr[0] == '0' && (ptr[1] == 'x' || ptr[1] == 'X')) {
        // Hexadecimal: 0x...
        value = strtol(ptr + 2, NULL, 16);
    }
    else if (ptr[0] == '0' && (ptr[1] == 'y' || ptr[1] == 'Y')) {
        // Binary: 0y...
        value = strtol(ptr + 2, NULL, 2);
    }
    else if (ptr[0] == '-') {
        // Negative decimal
        value = strtol(ptr, NULL, 10);
    }
    else {
        // Unsigned decimal
        value = strtoul(ptr, NULL, 10);
    }
    
    // Store based on operand type
    switch (operand0_type) {
        case 1:  // Byte
            *operand0 = (uint8_t)value;
            if (value > 0xFF) CF = 1;
            break;
        case 2:  // Word
            *(uint16_t*)operand0 = (uint16_t)value;
            if (value > 0xFFFF) CF = 1;
            break;
        case 4:  // Long
            *(uint32_t*)operand0 = value;
            break;
    }
}
```

---

### ITOA - Integer to ASCII (`FUN_10025b14`)

```c
void ITOA() {
    value = read_integer(operand1, operand1_type);
    
    if (format == HEX) {
        sprintf(operand0, "0x%X", value);
    } else if (format == BINARY) {
        sprintf(operand0, "0y%b", value);
    } else {
        sprintf(operand0, "%d", value);
    }
    
    *operand0_len = strlen(operand0) + 1;
}
```

---

## Floating Point Operations

### FADD - Float Add (`FUN_1002762f`)

```c
void FADD() {
    clear_fp_exceptions();
    *(double*)operand0 = *(double*)operand0 + *(double*)operand1;
    
    if (check_fp_exceptions() & 0x1E) {  // Any FP error
        error(FP_ERROR);
    }
}
```

---

### FSUB - Float Subtract (`FUN_10027670`)

```c
void FSUB() {
    clear_fp_exceptions();
    *(double*)operand0 = *(double*)operand0 - *(double*)operand1;
    
    if (check_fp_exceptions() & 0x1E) {
        error(FP_ERROR);
    }
}
```

---

### FMUL - Float Multiply (`FUN_100276b1`)

```c
void FMUL() {
    clear_fp_exceptions();
    *(double*)operand0 = *(double*)operand0 * *(double*)operand1;
    
    if (check_fp_exceptions() & 0x1E) {
        error(FP_ERROR);
    }
}
```

---

### FDIV - Float Divide (`FUN_100276f2`)

```c
void FDIV() {
    divisor = *(double*)operand1;
    clear_fp_exceptions();
    *(double*)operand0 = *(double*)operand0 / divisor;
    
    if (check_fp_exceptions() & 0x1E) {
        error(FP_ERROR);
    }
}
```

---

## Result Output (ERG*)

### ERGB - Output Unsigned Byte (`FUN_10025503`)

```c
void ERGB() {
    if (nesting_level == 0) {  // Only at top level
        strncpy(result_buffer.name, operand0, 256);
        result_buffer.type = UNSIGNED_BYTE;  // 1
        result_buffer.value = read_byte(operand1);
        result_buffer.count = result_count++;
        result_buffer.valid = 1;
    }
}
```

---

### ERGS - Output Signed Byte (`FUN_1002558a`)

```c
void ERGS() {
    if (nesting_level == 0) {
        strncpy(result_buffer.name, operand0, 256);
        result_buffer.type = SIGNED_BYTE;  // 0
        result_buffer.value = read_byte(operand1);
        result_buffer.count = result_count++;
        result_buffer.valid = 1;
    }
}
```

---

### ERGW - Output Unsigned Word (`FUN_10025611`)

```c
void ERGW() {
    if (nesting_level == 0) {
        strncpy(result_buffer.name, operand0, 256);
        result_buffer.type = UNSIGNED_WORD;  // 3
        result_buffer.value = read_word(operand1);
        result_buffer.count = result_count++;
        result_buffer.valid = 1;
    }
}
```

---

### ERGI - Output Signed Word (`FUN_10025699`)

```c
void ERGI() {
    if (nesting_level == 0) {
        strncpy(result_buffer.name, operand0, 256);
        result_buffer.type = SIGNED_WORD;  // 2
        result_buffer.value = read_word(operand1);
        result_buffer.count = result_count++;
        result_buffer.valid = 1;
    }
}
```

---

## Logical Operations

### AND - Bitwise AND (`FUN_1002489d`)

```c
void AND() {
    for (i = 0; i < size; i++) {
        result[i] = operand0[i] & operand1[i];
    }
    update_flags(result, size);
    // Result NOT stored
}
```

---

### ANDS - AND and Store (`FUN_1002483d`)

```c
void ANDS() {
    for (i = 0; i < size; i++) {
        operand0[i] = operand0[i] & operand1[i];
    }
    update_flags(operand0, size);
}
```

---

### OR - Bitwise OR (`FUN_100248fe`)

```c
void OR() {
    for (i = 0; i < size; i++) {
        operand0[i] = operand0[i] | operand1[i];
    }
    update_flags(operand0, size);
}
```

---

### XOR - Bitwise XOR (`FUN_1002495e`)

```c
void XOR() {
    for (i = 0; i < size; i++) {
        operand0[i] = operand0[i] ^ operand1[i];
    }
    update_flags(operand0, size);
}
```

---

### NOT - Bitwise NOT (`FUN_100249be`)

```c
void NOT() {
    for (i = 0; i < size; i++) {
        operand0[i] = ~operand0[i];
    }
    update_flags(operand0, size);
}
```

---

## Shift Operations

### ASR - Arithmetic Shift Right (`FUN_10024da2`)

```c
void ASR() {
    sign_bit = operand0[size-1] & 0x80;
    CF = operand0[0] & 1;
    
    for (i = 0; i < size - 1; i++) {
        operand0[i] = (operand0[i] >> 1) | ((operand0[i+1] & 1) << 7);
    }
    operand0[size-1] = (operand0[size-1] >> 1) | sign_bit;
    
    update_flags(operand0, size);
}
```

---

### LSR - Logical Shift Right (`FUN_10024e78`)

```c
void LSR() {
    CF = operand0[0] & 1;
    
    for (i = 0; i < size - 1; i++) {
        operand0[i] = (operand0[i] >> 1) | ((operand0[i+1] & 1) << 7);
    }
    operand0[size-1] = operand0[size-1] >> 1;  // Zero fill
    
    update_flags(operand0, size);
}
```

---

### ASL/LSL - Shift Left (`FUN_10024f38`)

```c
void ASL() {
    CF = (operand0[size-1] & 0x80) ? 1 : 0;
    
    for (i = size - 1; i > 0; i--) {
        operand0[i] = (operand0[i] << 1) | ((operand0[i-1] & 0x80) >> 7);
    }
    operand0[0] = operand0[0] << 1;  // Zero fill LSB
    
    update_flags(operand0, size);
}
```

---

## Data Movement

### MOVE - Copy Data (`FUN_10023f01`)

```c
void MOVE() {
    memcpy(operand0, operand1, size);
    update_flags(operand0, size);
}
```

---

### CLEAR - Zero Memory (`FUN_10023f76`)

```c
void CLEAR() {
    memset(operand0, 0, size);
    *operand0_len = 0;
    ZF = 1;
}
```

---

## Miscellaneous

### NOP - No Operation (`FUN_10024fec`)

```c
void NOP() {
    // Do nothing
}
```

---

### BREAK - Break/Trap (`FUN_10025e46`)

```c
void BREAK() {
    error(BREAK_TRAP);
}
```

---

### CLRO - Clear Overflow (`FUN_10025e5f`)

```c
void CLRO() {
    OF = 0;
}
```

---

### CHKREG - Check Register (`FUN_10025e71`)

```c
void CHKREG() {
    if (reg_flag != 0) {
        error(REG_ERROR, reg_value);
    }
}
```

---

## Helper Functions

### update_flags (`FUN_10028d4d`)

```c
void update_flags(byte* data, int size) {
    ZF = 1;
    for (i = 0; i < size; i++) {
        if (data[i] != 0) {
            ZF = 0;
            break;
        }
    }
    SF = (data[size-1] & 0x80) ? 1 : 0;
}
```

---

### set_pc (`FUN_10023ca5`)

```c
void set_pc(int offset) {
    program_counter += offset;
}
```

---

### get_current_pc (`FUN_10023b1c`)

```c
int get_current_pc() {
    return program_counter;
}
```

---

## Summary

| Category | Count | Opcodes |
|----------|-------|---------|
| Arithmetic | 5 | COMP, SUB, SUBC, ADD, ADDC |
| Control Flow | 3 | JMP, JTSR, RET |
| Conditionals | 8 | JC, JNC, JZ, JNZ, JO, JNO, JS, JNS |
| Stack | 6 | PUSH, POP, PEEK, POKE, PUSHF, POPF |
| String | 4 | SCMP, SCAT, SCPY, SCUT |
| Conversion | 2 | ATOI, ITOA |
| Float | 4 | FADD, FSUB, FMUL, FDIV |
| Result | 4 | ERGB, ERGS, ERGW, ERGI |
| Logical | 5 | AND, ANDS, OR, XOR, NOT |
| Shift | 3 | ASR, LSR, ASL |
| Data | 2 | MOVE, CLEAR |
| Misc | 3 | NOP, BREAK, CLRO |

**Total: 49 opcodes with pseudocode**

---

*Generated from ebas32.dll decompilation (Ghidra).*
