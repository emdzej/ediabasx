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

## Table Operations

### TABSEEK - Search in Table (`FUN_10025a56`)

Search for value in table column, jump if not found.

```c
void TABSEEK() {
    // Copy table data to work buffer
    strcpy(work_buffer, table_data);
    
    // Tokenize by separator (e.g., ";")
    token = strtok(work_buffer, TABLE_SEP);
    found = (token == NULL);
    
    while (token != NULL && !found) {
        // Compare token with search value
        if (strncmp(token, operand1, size) == 0) {
            found = true;
        }
        token = strtok(NULL, TABLE_SEP);
    }
    
    if (!found) {
        set_pc(immediate);  // Jump to target
    }
}
```

---

### TABSET - Set Table Parameters (`FUN_1002662a`)

Set search separator and column index for table operations.

```c
void TABSET() {
    operand0[size] = '\0';  // Null terminate
    strncpy(table_separator, operand0, 16);
    table_column = indexed_offset;
}
```

---

### TABGET - Get Table Value (`FUN_100266e4`)

Get value from table at current column position.

```c
void TABGET() {
    column_index = 0;
    
    // Copy source to work buffer
    strcpy(work_buffer, operand1);
    
    // Tokenize by configured separator
    token = strtok(work_buffer, table_separator);
    
    while (token != NULL) {
        column_index++;
        
        if (column_index == table_column) {
            // Found target column - copy to dest
            strcpy(operand0, token);
            *operand0_len = strlen(operand0) + 1;
            table_column++;  // Advance for next call
            break;
        }
        
        token = strtok(NULL, table_separator);
    }
    
    if (token == NULL) {
        ZF = 1;  // End of table
    }
    
    work_buffer[0] = '\0';  // Clear buffer
}
```

---

### REVERSE - Reverse Byte Order (`FUN_10026663`)

Reverse bytes in operand (endian swap).

```c
void REVERSE() {
    left = 0;
    right = size - 1;
    
    while (left < right) {
        temp = operand0[left];
        operand0[left] = operand0[right];
        operand0[right] = temp;
        left++;
        right--;
    }
    
    *operand0_len = offset + size;
}
```

---

### SWAP - Swap Nibbles/Bytes (`FUN_100267a6`)

Swap nibbles (byte) or bytes (word/long).

```c
void SWAP() {
    switch (operand_type) {
        case 1:  // Byte - swap nibbles
            immediate = ((immediate & 0x0F) << 4) | ((immediate >> 4) & 0x0F);
            *operand0 = immediate;
            break;
            
        case 2:  // Word
        case 4:  // Long - reverse bytes
            for (i = 0; i < size / 2; i++) {
                temp = operand0[i];
                operand0[i] = operand0[size - 1 - i];
                operand0[size - 1 - i] = temp;
            }
            break;
            
        case 8:  // Double - reverse all bytes
            left = 0;
            right = size - 1;
            while (left < right) {
                temp = operand0[left];
                operand0[left] = operand0[right];
                operand0[right] = temp;
                left++;
                right--;
            }
            break;
    }
}
```

---

### TABLINE - Get Table Line (`FUN_10027141`)

Find and position to specific line in table.

```c
void TABLINE() {
    table_size = get_table_size();
    set_position(table_size);
    read_table_info(&table_info, 4);
    
    line_index = 0;
    while (line_index < table_info.line_count) {
        read_table_info(&line_data, 0x50);
        
        if (compare(operand0, line_data) == 0) {
            return;  // Found
        }
        line_index++;
    }
    
    error(TABLE_ERROR, 0xFFFF);
}
```

---

### TABCOL - Iterate Table Columns (`FUN_100271cb`)

Iterate through table columns for matching value.

```c
void TABCOL(int mode) {
    if (mode == 1) {
        // Initialize iteration
        column_pos = 0;
        found_column = -1;
        cached_rows = table_rows;
        cached_cols = table_cols;
        ZF = 0;
        
        set_position(table_start);
        
        for (i = 0; i < table_rows; i++) {
            read_cell(cell_buffer);
            if (compare(operand0, cell_buffer) == 0) {
                found_column = i;
            }
        }
        
        if (found_column == -1) {
            error(TABLE_ERROR, 0xFFFF);
        }
    }
    
    // Continue iteration
    while (column_pos < cached_rows * cached_cols) {
        if (column_pos % cached_rows == 0) {
            save_position();
        }
        
        read_cell(cell_buffer);
        
        if (column_pos % cached_rows == found_column) {
            if (compare(operand1, cell_buffer) == 0) {
                return;  // Match found
            }
        }
        
        column_pos++;
        
        // Yield periodically
        if (column_pos % YIELD_INTERVAL == 0) {
            return YIELD;
        }
    }
    
    ZF = 1;  // End of iteration
}
```

---

### TABROW - Iterate Table Rows (`FUN_1002733a`)

Iterate through table rows starting at specific row.

```c
void TABROW(int mode) {
    if (mode == 1) {
        // Get start row from operand
        switch (operand_type) {
            case 1: start_row = read_byte(operand0); break;
            case 2: start_row = read_word(operand0); break;
            case 4: start_row = read_long(operand0); break;
        }
        
        row_offset = start_row * table_cols;
        row_pos = 0;
        total_cells = table_rows * table_cols;
        ZF = 0;
        
        set_position(table_start);
        
        // Skip to start row
        for (i = 0; i < table_cols; i++) {
            read_cell(cell_buffer);
        }
    }
    
    // Continue iteration
    while (row_pos < total_cells) {
        if (row_pos % table_cols == 0) {
            save_position();
            if (row_pos == row_offset) {
                return;  // At target row
            }
        }
        
        read_cell(cell_buffer);
        row_pos++;
        
        // Yield periodically
        if (row_pos % YIELD_INTERVAL == 0) {
            return YIELD;
        }
    }
    
    ZF = 1;  // End of table
}
```

---

### TABFIND - Find in Table (`FUN_100274be`)

Find value in table column and return corresponding value.

```c
void TABFIND() {
    found_index = -1;
    
    set_position(table_start);
    
    // Search in first column
    for (i = 0; i < table_cols; i++) {
        read_cell(work_buffer);
        if (compare(operand1, work_buffer) == 0) {
            found_index = i;
        }
    }
    
    if (found_index == -1) {
        error(TABLE_ERROR, 0xFFFF);
    }
    
    // Position to found row
    set_position(saved_position);
    for (i = 0; i <= found_index; i++) {
        read_cell(operand0);
    }
    
    *operand0_len = strlen(operand0) + 1;
}
```

---

## Additional Result Output (ERG*)

### ERGL - Output Unsigned Long (`FUN_10025721`)

Output 32-bit unsigned integer result.

```c
void ERGL() {
    if (nesting_level == 0) {
        strncpy(result_buffer.name, operand0, 256);
        result_buffer.type = UNSIGNED_LONG;  // 5
        result_buffer.value = read_long(operand1);
        result_buffer.count = result_count++;
        result_buffer.valid = 1;
    }
}
```

---

### ERGI - Output Signed Long (`FUN_100257a8`)

Output 32-bit signed integer result.

```c
void ERGI_LONG() {
    if (nesting_level == 0) {
        strncpy(result_buffer.name, operand0, 256);
        result_buffer.type = SIGNED_LONG;  // 4
        result_buffer.value = read_long(operand1);
        result_buffer.count = result_count++;
        result_buffer.valid = 1;
    }
}
```

---

### ERGR - Output Real/Double (`FUN_1002582f`)

Output 64-bit floating point result.

```c
void ERGR() {
    if (nesting_level == 0) {
        strncpy(result_buffer.name, operand0, 256);
        result_buffer.type = REAL;  // 8
        
        // Copy 8 bytes (double)
        result_buffer.value_lo = operand1[0];
        result_buffer.value_hi = operand1[1];
        
        result_buffer.count = result_count++;
        result_buffer.valid = 1;
    }
}
```

---

### ERGS_STR - Output String (`FUN_100258b8`)

Output string result with optional character set conversion.

```c
void ERGS_STR() {
    if (nesting_level == 0) {
        strncpy(result_buffer.name, operand0, 256);
        result_buffer.type = STRING;  // 6
        
        strncpy(result_buffer.string_value, operand1, size);
        result_buffer.string_value[size] = '\0';
        
        // Apply character set conversion if enabled
        if (charset_conversion_enabled) {
            ptr = result_buffer.string_value;
            while (*ptr != '\0') {
                *ptr = charset_table[*ptr];
                ptr++;
            }
        }
        
        result_buffer.count = result_count++;
        result_buffer.valid = 1;
    }
}
```

---

### ERGY - Output Binary (`FUN_1002599f`)

Output raw binary data result.

```c
void ERGY() {
    if (nesting_level == 0) {
        strncpy(result_buffer.name, operand0, 256);
        result_buffer.type = BINARY;  // 7
        
        // Copy binary data
        memcpy(result_buffer.binary_data, operand1, size);
        result_buffer.binary_len = size;
        
        result_buffer.count = result_count++;
        result_buffer.valid = 1;
    }
}
```

---

## Additional String Operations

### SINS - String Insert (`FUN_10025370`)

Insert string at position.

```c
void SINS() {
    insert_pos = *operand0_len - offset;
    
    if (insert_pos < 1) {
        return;  // Invalid position
    }
    
    // Check if insert would exceed max
    overflow = (max_len < *operand0_len + size);
    if (overflow) {
        size = max_len - *operand0_len;
    }
    CF = overflow ? 1 : 0;
    
    // Check tail length
    tail_len = *operand0_len - offset - size;
    if (max_len < *operand0_len + size + tail_len) {
        tail_len = max_len - (*operand0_len + size);
        CF = 1;
    }
    
    // Move tail to make room
    memmove(&operand0[size], operand0, tail_len);
    
    // Insert new content
    memmove(operand0, operand1, size);
    
    *operand0_len += size;
    update_flags(operand0, size);
}
```

---

### SDEL - String Delete (`FUN_10025477`)

Delete characters from string.

```c
void SDEL() {
    available = *operand0_len - offset;
    
    if (available < 1) {
        return;  // Nothing to delete
    }
    
    // Calculate remaining after delete
    remaining = available - indexed_offset;
    if (remaining < 1) {
        remaining = 0;
    }
    
    *operand0_len = offset + remaining;
    
    // Move remaining content
    memmove(operand0, &operand0[indexed_offset], remaining);
    
    // Zero out deleted area
    memset(&operand0[remaining], 0, indexed_offset);
}
```

---

### STRCMP - String Compare (`FUN_10027cbc`)

Compare two null-terminated strings.

```c
void STRCMP() {
    ZF = 0;
    CF = 0;
    i = 0;
    
    while (operand1[i] != '\0' && 
           operand1[i] == operand0[i] && 
           i < max_len - 1) {
        i++;
    }
    
    if (i >= max_len - 1) {
        error(STRING_OVERFLOW);
    }
    
    if (operand0[i] != operand1[i]) {
        ZF = 1;  // Strings differ
        if (operand0[i] < operand1[i]) {
            CF = 1;  // operand0 < operand1
        }
    }
}
```

---

### STRLEN - Get String Length (`FUN_10027d8d`)

Get length of null-terminated string.

```c
void STRLEN() {
    len = 0;
    
    while (operand1[len] != '\0' && len < max_len - 1) {
        len++;
    }
    
    if (len >= max_len - 1) {
        error(STRING_OVERFLOW);
    }
    
    // Store based on operand type
    switch (operand_type) {
        case 2:  // Word
            store_word(operand0, len);
            update_flags(operand0, 2);
            break;
        case 4:  // Long
            store_long(operand0, len);
            update_flags(operand0, 4);
            break;
    }
}
```

---

## Conversion Operations (Extended)

### HTOB - Hex String to Bytes (`FUN_10027b53`)

Convert hex string to binary bytes.

```c
void HTOB() {
    src = operand1;
    dest_pos = 0;
    CF = 0;
    
    // Check output buffer size
    if (max_len - 2 < size / 2) {
        error(STRING_OVERFLOW);
    }
    
    while (*src != '\0') {
        // Validate high nibble
        if (!is_hex_char(*src)) {
            CF = 1;  // Invalid character
            break;
        }
        
        high = *src;
        src++;
        
        if (*src == '\0') break;
        
        // Validate low nibble
        if (!is_hex_char(*src)) {
            CF = 1;
            break;
        }
        
        low = *src;
        src++;
        
        // Convert hex pair to byte
        operand0[dest_pos] = hex_to_byte(high, low);
        dest_pos++;
    }
    
    *operand0_len = dest_pos;
}

bool is_hex_char(char c) {
    return (c >= '0' && c <= '9') ||
           (c >= 'A' && c <= 'F') ||
           (c >= 'a' && c <= 'f');
}
```

---

### BTOH - Bytes to Hex String (`FUN_10027e4c`)

Convert binary bytes to hex string (digits only, 0-9).

```c
void BTOH() {
    src = operand1;
    dest_pos = 0;
    
    // Check sizes
    if (size == 0 || (size * 2 > max_len - 2)) {
        error(STRING_OVERFLOW);
    }
    
    for (i = 0; i < size; i++) {
        high_nibble = (src[i] >> 4) & 0x0F;
        low_nibble = src[i] & 0x0F;
        
        // Convert to ASCII (0-9 only, * for A-F)
        operand0[dest_pos] = (high_nibble < 10) ? 
                             ('0' + high_nibble) : '*';
        operand0[dest_pos + 1] = (low_nibble < 10) ? 
                                 ('0' + low_nibble) : '*';
        
        dest_pos += 2;
    }
    
    operand0[dest_pos] = '\0';
    *operand0_len = dest_pos + 1;
}
```

---

### BTOHEX - Bytes to Hex String Full (`FUN_10027f71`)

Convert binary bytes to full hex string (0-9, A-F).

```c
void BTOHEX() {
    src = operand1;
    dest_pos = 0;
    
    if (size == 0 || (size * 2 > max_len - 2)) {
        error(STRING_OVERFLOW);
    }
    
    for (i = 0; i < size; i++) {
        high_nibble = (src[i] >> 4) & 0x0F;
        low_nibble = src[i] & 0x0F;
        
        // Convert to ASCII (0-9, A-F)
        operand0[dest_pos] = (high_nibble < 10) ? 
                             ('0' + high_nibble) : 
                             ('A' + high_nibble - 10);
        operand0[dest_pos + 1] = (low_nibble < 10) ? 
                                 ('0' + low_nibble) : 
                                 ('A' + low_nibble - 10);
        
        dest_pos += 2;
    }
    
    operand0[dest_pos] = '\0';
    *operand0_len = dest_pos + 1;
}
```

---

### ITOF - Integer to Float (`FUN_10027598`)

Convert integer to double.

```c
void ITOF() {
    *(double*)operand0 = (double)indexed_offset;
}
```

---

## File I/O Operations

### FOPEN - Open File (`FUN_10025e89`)

```c
void FOPEN() {
    handle = indexed_offset;  // 0-5
    
    if (handle > 5) {
        error(FILE_ERROR);
    }
    
    file_handles[handle] = fopen(operand0, mode);
    
    if (file_handles[handle] == NULL) {
        CF = 1;  // Failed
    }
}
```

---

### FCLOSE - Close File (`FUN_10025f57`)

```c
void FCLOSE() {
    handle = indexed_offset;
    
    if (handle > 5) {
        error(FILE_ERROR);
    }
    
    if (file_handles[handle] != NULL) {
        fclose(file_handles[handle]);
        file_handles[handle] = NULL;
    }
}
```

---

### FREAD - Read from File (`FUN_10025fbd`)

```c
void FREAD() {
    handle = indexed_offset;
    
    if (handle > 5 || file_handles[handle] == NULL) {
        error(FILE_ERROR);
    }
    
    bytes_read = fread(operand0, 1, size, file_handles[handle]);
    *operand0_len = bytes_read;
    
    if (bytes_read < size) {
        CF = 1;  // EOF or error
    }
}
```

---

### FRDLN - Read Line (`FUN_1002606b`)

```c
void FRDLN() {
    handle = indexed_offset;
    CF = 0;
    
    if (handle > 5) {
        error(FILE_ERROR);
    }
    
    if (file_handles[handle] == NULL) {
        error(FILE_ERROR);
    }
    
    *operand0_len = 0;
    pos = 0;
    
    while (!CF) {
        bytes = fread(&operand0[pos], 1, 1, file_handles[handle]);
        
        if (bytes <= 0) {
            CF = 1;  // EOF
        }
        
        if (operand0[pos] == '\n') {
            return;  // End of line
        }
        
        if (pos > 0x3FF) {
            CF = 1;  // Line too long
        }
        
        (*operand0_len)++;
        pos++;
    }
}
```

---

### FSEEK - Seek in File (`FUN_1002618e`)

```c
void FSEEK() {
    handle = immediate;
    
    if (handle > 5) {
        error(FILE_ERROR);
    }
    
    if (file_handles[handle] == NULL) {
        error(FILE_ERROR);
    }
    
    result = fseek(file_handles[handle], indexed_offset, SEEK_SET);
    
    if (result == -1) {
        error(FILE_ERROR);
    }
}
```

---

### FSLINE - Seek to Line (`FUN_1002621e`)

```c
void FSLINE() {
    handle = immediate;
    target_line = indexed_offset;
    CF = 0;
    
    if (handle > 5 || file_handles[handle] == NULL) {
        error(FILE_ERROR);
    }
    
    // Rewind to start
    fseek(file_handles[handle], 0, SEEK_SET);
    
    current_line = 0;
    while (current_line < target_line && !CF) {
        ch = fgetc(file_handles[handle]);
        if (ch == EOF) {
            CF = 1;
        }
        if (ch == '\n') {
            current_line++;
        }
    }
}
```

---

### FSIZE - Get File Size (`FUN_10026394`)

```c
void FSIZE() {
    handle = indexed_offset;
    
    if (handle > 5 || file_handles[handle] == NULL) {
        error(FILE_ERROR);
    }
    
    // Save current position
    current = ftell(file_handles[handle]);
    
    // Seek to end
    fseek(file_handles[handle], 0, SEEK_END);
    size = ftell(file_handles[handle]);
    
    // Restore position
    fseek(file_handles[handle], current, SEEK_SET);
    
    store_integer(operand0, size, operand_type);
}
```

---

### FLINES - Count Lines (`FUN_10026415`)

```c
void FLINES() {
    handle = indexed_offset;
    
    if (handle > 5 || file_handles[handle] == NULL) {
        error(FILE_ERROR);
    }
    
    // Save position
    current = ftell(file_handles[handle]);
    fseek(file_handles[handle], 0, SEEK_SET);
    
    line_count = 0;
    while ((ch = fgetc(file_handles[handle])) != EOF) {
        if (ch == '\n') {
            line_count++;
        }
    }
    
    // Restore position
    fseek(file_handles[handle], current, SEEK_SET);
    
    store_integer(operand0, line_count, operand_type);
}
```

---

## IFH (Interface Handler) Operations

Communication with ECU hardware through the IFH layer.

### ifhBreak (`FUN_10021111`)

Break/interrupt current communication.

```c
void ifhBreak() {
    log("ifhBreak...");
    
    channel = get_active_channel();
    ifh_error = IFH_Break(channel);
    
    if (ifh_error != 0) {
        error(IFH_ERROR, ifh_error);
    }
    
    busy_flag = 0;
}
```

---

### ifhEnd (`FUN_1002116a`)

End IFH session.

```c
void ifhEnd() {
    clear_state(0, 1);
    log("ifhEnd...");
    
    ifh_error = IFH_End();
    
    if (ifh_error != 0) {
        error(IFH_ERROR, ifh_error);
    }
    
    busy_flag = 0;
}
```

---

### ifhConnect (`FUN_100211c6`)

Connect to ECU.

```c
void ifhConnect() {
    clear_state(0, 1);
    log("ifhConnect...");
    
    ifh_error = IFH_Connect(ecu_address);
    
    if (ifh_error != 0) {
        error(IFH_ERROR, ifh_error);
    }
    
    interface_ptr = get_interface(1);
    busy_flag = 0;
}
```

---

### ifhDisconnect (`FUN_1002123a`)

Disconnect from ECU.

```c
void ifhDisconnect() {
    clear_state(0, 1);
    log("ifhDisconnect...");
    
    ifh_error = IFH_Disconnect();
    
    if (ifh_error != 0) {
        error(IFH_ERROR, ifh_error);
    }
    
    busy_flag = 0;
}
```

---

### ifhSysInfo (`FUN_10021296`)

Get system information from interface.

```c
void ifhSysInfo() {
    if (debug_enabled) {
        log("ifhSysInfo...");
        log_hex(operand1, size);
    }
    
    channel = get_active_channel();
    ifh_error = IFH_SysInfo(channel, size, operand1);
    
    if (ifh_error != 0) {
        error(IFH_ERROR, ifh_error);
    }
    
    busy_flag = 1;
}
```

---

### ifhSetParameter (`FUN_1002132c`)

Set communication parameter.

```c
void ifhSetParameter() {
    if (debug_enabled) {
        log("ifhSetParameter...");
        log_hex(operand0, size);
    }
    
    channel = get_active_channel();
    ifh_error = IFH_SetParameter(channel, size, operand0);
    
    if (ifh_error != 0) {
        error(IFH_ERROR, ifh_error);
    }
    
    busy_flag = 0;
}
```

---

### ifhSetTelPreface (`FUN_10021452`)

Set telegram preface bytes.

```c
void ifhSetTelPreface() {
    if (debug_enabled) {
        log("ifhSetTelPreface...");
        log_hex(operand0, size);
    }
    
    channel = get_active_channel();
    ifh_error = IFH_SetTelPreface(channel, size, operand0);
    
    if (ifh_error != 0) {
        error(IFH_ERROR, ifh_error);
    }
    
    busy_flag = 0;
}
```

---

### ifhSendTelegram (`FUN_100214e8`)

Send telegram to ECU.

```c
void ifhSendTelegram() {
    if (debug_enabled) {
        log("ifhSendTelegram...");
        log_hex(operand1, size);
    }
    
    channel = get_active_channel();
    ifh_error = IFH_SendTelegram(channel, size, operand1);
    
    if (ifh_error != 0) {
        error(IFH_ERROR, ifh_error);
    }
    
    busy_flag = 1;
}
```

---

### ifhSend (`FUN_10021614`)

Send raw data.

```c
void ifhSend() {
    if (debug_enabled) {
        log("ifhSend...");
        log_hex(operand0, size);
    }
    
    channel = get_active_channel();
    ifh_error = IFH_Send(channel, size, operand0);
    
    if (ifh_error != 0) {
        error(IFH_ERROR, ifh_error);
    }
    
    busy_flag = 0;
}
```

---

### ifhReceive (`FUN_100216aa`)

Receive data from ECU.

```c
void ifhReceive() {
    if (debug_enabled) {
        log("ifhReceive...");
        log_int(indexed_offset);
    }
    
    channel = get_active_channel();
    ifh_error = IFH_Receive(channel, &indexed_offset, operand0, &received_len);
    
    if (ifh_error != 0) {
        error(IFH_ERROR, ifh_error);
    }
    
    *operand0_len = received_len;
    busy_flag = 0;
}
```

---

## Wait/Timing Operations

### WAIT - Wait with Idle (`FUN_100268dc`)

```c
void WAIT() {
    // Call idle handler during wait
    while (wait_time > 0) {
        idle_handler();
        wait_time--;
    }
}
```

---

### WAITS - Wait Seconds (`FUN_1002691a`)

```c
void WAITS() {
    seconds = read_integer(operand0, operand_type);
    Sleep(seconds * 1000);
}
```

---

### WAITMS - Wait Milliseconds (`FUN_100269e8`)

```c
void WAITMS() {
    milliseconds = read_integer(operand0, operand_type);
    Sleep(milliseconds);
}
```

---

### GETTICK - Get Tick Count (`FUN_10026a8e`)

```c
void GETTICK() {
    ticks = GetTickCount();
    store_integer(operand0, ticks, operand_type);
}
```

---

## Argument Operations

### GETARG - Get Argument (`FUN_10026d39`)

```c
void GETARG() {
    arg_index = indexed_offset;
    
    // Parse semicolon-separated arguments
    arg = get_argument(arg_index);
    
    if (arg != NULL) {
        strcpy(operand0, arg);
        *operand0_len = strlen(arg) + 1;
    } else {
        *operand0_len = 0;
        CF = 1;
    }
}
```

---

### ARGCOUNT - Count Arguments (`FUN_10026e6d`)

```c
void ARGCOUNT() {
    count = 0;
    ptr = argument_string;
    
    while (*ptr != '\0') {
        if (*ptr == ';') {
            count++;
        }
        ptr++;
    }
    count++;  // Last argument
    
    store_integer(operand0, count, operand_type);
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
| String | 8 | SCMP, SCAT, SCPY, SCUT, SINS, SDEL, STRCMP, STRLEN |
| Conversion | 6 | ATOI, ITOA, HTOB, BTOH, BTOHEX, ITOF |
| Float | 4 | FADD, FSUB, FMUL, FDIV |
| Result | 9 | ERGB, ERGS, ERGW, ERGI, ERGL, ERGI_LONG, ERGR, ERGS_STR, ERGY |
| Logical | 5 | AND, ANDS, OR, XOR, NOT |
| Shift | 3 | ASR, LSR, ASL |
| Data | 2 | MOVE, CLEAR |
| Table | 8 | TABSEEK, TABSET, TABGET, REVERSE, SWAP, TABLINE, TABCOL, TABROW, TABFIND |
| File I/O | 8 | FOPEN, FCLOSE, FREAD, FRDLN, FSEEK, FSLINE, FSIZE, FLINES |
| IFH | 10 | ifhBreak, ifhEnd, ifhConnect, ifhDisconnect, ifhSysInfo, ifhSetParameter, ifhSetTelPreface, ifhSendTelegram, ifhSend, ifhReceive |
| Wait/Timing | 4 | WAIT, WAITS, WAITMS, GETTICK |
| Arguments | 2 | GETARG, ARGCOUNT |
| Misc | 3 | NOP, BREAK, CLRO |

**Total: 94 opcodes with pseudocode**

---

*Generated from ebas32.dll decompilation (Ghidra).*
