/**
 * Result-emission opcodes (ergb / ergw / ergd / ergi / ergr / ergs /
 * ergy / enewset / etag / ergc / ergl / ergsysi).
 *
 * Each opcode appends a typed entry to `vm->current_results`. The
 * differences are width + signedness + dispatch target: most write to
 * `current_results`, but `ergsysi` (0x95) writes to `system_results`
 * (SGBD metadata: VARIANTE, ECU, REVISION, etc.).
 *
 * `enewset` (0x40) archives the current result set into `result_sets[]`
 * and resets `current_results` for the next batch — mirrors C# 's
 * `_resultSetsTemp` chain that lets a single job emit multiple sets
 * (e.g. FS_LESEN per-fault iteration).
 *
 * The TS reference uses `readPolyValue(arg1, length)` with explicit
 * widths; my C uses `edxn_resolve_int(arg1)` which reads up to 4 bytes
 * — then the per-opcode cast/mask narrows it (byte/word/int16/long).
 */

#include "vm_internal.h"

edxn_error_t edxn_op_result(edxn_vm_t *vm, uint8_t op,
                             const edxn_operand_t *a0, const edxn_operand_t *a1) {
    char name[EDXN_MAX_RESULT_NAME];

    switch (op) {

    /* ergb (0x34) — result unsigned byte */
    case 0x34: {
        edxn_resolve_string(vm, a0, name, sizeof(name));
        int32_t val = edxn_resolve_int(vm, a1) & 0xFF;
        return edxn_result_add_int(&vm->current_results, name, EDXN_TYPE_BYTE, val);
    }

    /* ergw (0x35) — result unsigned word */
    case 0x35: {
        edxn_resolve_string(vm, a0, name, sizeof(name));
        int32_t val = edxn_resolve_int(vm, a1) & 0xFFFF;
        return edxn_result_add_int(&vm->current_results, name, EDXN_TYPE_WORD, val);
    }

    /* ergd (0x36) — result unsigned dword */
    case 0x36: {
        edxn_resolve_string(vm, a0, name, sizeof(name));
        uint32_t val = (uint32_t)edxn_resolve_int(vm, a1);
        return edxn_result_add_int(&vm->current_results, name, EDXN_TYPE_DWORD,
                                    (int64_t)val);
    }

    /* ergi (0x37) — result signed int16 */
    case 0x37: {
        edxn_resolve_string(vm, a0, name, sizeof(name));
        int32_t raw = edxn_resolve_int(vm, a1);
        int16_t signed_val = (int16_t)(raw & 0xFFFF);
        return edxn_result_add_int(&vm->current_results, name, EDXN_TYPE_INT,
                                    (int64_t)signed_val);
    }

    /* ergr (0x38) — result float */
    case 0x38: {
        edxn_resolve_string(vm, a0, name, sizeof(name));
        double val = edxn_resolve_float(vm, a1);
        return edxn_result_add_float(&vm->current_results, name, val);
    }

    /* ergs (0x39) — result string */
    case 0x39: {
        edxn_resolve_string(vm, a0, name, sizeof(name));
        char val[EDXN_S_REG_MAXLEN + 1];
        edxn_resolve_string(vm, a1, val, sizeof(val));
        return edxn_result_add_binary(&vm->current_results, name, EDXN_TYPE_STRING,
                                       (const uint8_t *)val, strlen(val));
    }

    /* ergy (0x3F) — result binary */
    case 0x3F: {
        edxn_resolve_string(vm, a0, name, sizeof(name));
        size_t blen;
        const uint8_t *data = edxn_resolve_binary(vm, a1, &blen);
        return edxn_result_add_binary(&vm->current_results, name, EDXN_TYPE_BINARY,
                                       data, blen);
    }

    /* enewset (0x40) — archive current results, start fresh */
    case 0x40:
        return edxn_vm_new_result_set(vm);

    /* etag (0x41) — conditional result skip (no-op without result filtering) */
    case 0x41:
        return EDXN_OK;

    /* ergc (0x81) — result signed char (int8) */
    case 0x81: {
        edxn_resolve_string(vm, a0, name, sizeof(name));
        int32_t raw = edxn_resolve_int(vm, a1);
        int8_t signed_val = (int8_t)(raw & 0xFF);
        return edxn_result_add_int(&vm->current_results, name, EDXN_TYPE_CHAR,
                                    (int64_t)signed_val);
    }

    /* ergl (0x82) — result signed long (int32) */
    case 0x82: {
        edxn_resolve_string(vm, a0, name, sizeof(name));
        int32_t val = edxn_resolve_int(vm, a1);
        return edxn_result_add_int(&vm->current_results, name, EDXN_TYPE_LONG,
                                    (int64_t)val);
    }

    /* ergsysi (0x95) — system-info result (signed int16 to system_results) */
    case 0x95: {
        edxn_resolve_string(vm, a0, name, sizeof(name));
        int32_t raw = edxn_resolve_int(vm, a1);
        int16_t signed_val = (int16_t)(raw & 0xFFFF);
        return edxn_result_add_int(&vm->system_results, name, EDXN_TYPE_INT,
                                    (int64_t)signed_val);
    }

    default:
        return EDXN_ERR_ILLEGAL_OPCODE;
    }
}
