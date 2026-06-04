#ifndef EDXN_VM_INTERNAL_H
#define EDXN_VM_INTERNAL_H

/**
 * VM internal helpers — only included by opcode handlers and vm.c.
 *
 * Anything `static inline` here lives in the call site for free; anything
 * declared `edxn_*` is defined in a .c file and shared across translation
 * units (see the handler declarations at the bottom).
 *
 * If you're porting an opcode from TS, the entry points you'll touch most:
 *   - edxn_resolve_int        — read an int polymorphically
 *   - edxn_resolve_binary     — read raw bytes polymorphically
 *   - edxn_resolve_string     — read NUL-terminated string polymorphically
 *   - edxn_write_int          — write int (handles indexed dest)
 *   - edxn_write_binary       — write bytes (handles indexed dest)
 *   - edxn_write_string       — write a C string (truncates at strlen)
 *   - edxn_operand_len        — natural byte width for arithmetic
 *   - edxn_mask / edxn_sign_mask — flag-update helpers
 *
 * The polymorphic readers mirror TS `readPolyValue` / `readPolyBytes` /
 * `readPolyString` from `packages/interpreter/src/interpreter.ts`.
 */

#include "ediabasx/vm.h"
#include "ediabasx/table.h"
#include <string.h>
#include <stdlib.h>
#include <stdio.h>
#include <ctype.h>
#include <math.h>

#define EDXN_ARRAY_MAX_SIZE 1023

/* ── Opcode handler signature ──────────────────────────────────────── */

typedef edxn_error_t (*edxn_op_fn)(edxn_vm_t *vm,
                                    const edxn_operand_t *a0,
                                    const edxn_operand_t *a1);

/* ── Register byte width ──────────────────────────────────────────── */

static inline int edxn_reg_byte_len(const edxn_reg_ref_t *ref) {
    switch (ref->type) {
    case EDXN_REG_B: case EDXN_REG_A: return 1;
    case EDXN_REG_I: return 2;
    case EDXN_REG_L: return 4;
    default: return 0;
    }
}

/* ── Read int from register ───────────────────────────────────────── */

static inline int32_t edxn_reg_get_int(const edxn_registers_t *r,
                                        const edxn_reg_ref_t *ref) {
    switch (ref->type) {
    case EDXN_REG_B: return edxn_reg_get_b(r, ref->index);
    case EDXN_REG_A: return edxn_reg_get_a(r, ref->index);
    case EDXN_REG_I: return edxn_reg_get_i(r, ref->index);
    case EDXN_REG_L: return (int32_t)edxn_reg_get_l(r, ref->index);
    default: return 0;
    }
}

static inline void edxn_reg_set_int(edxn_registers_t *r,
                                     const edxn_reg_ref_t *ref, int32_t val) {
    switch (ref->type) {
    case EDXN_REG_B: edxn_reg_set_b(r, ref->index, (uint8_t)val); break;
    case EDXN_REG_A: edxn_reg_set_a(r, ref->index, (uint8_t)val); break;
    case EDXN_REG_I: edxn_reg_set_i(r, ref->index, (uint16_t)val); break;
    case EDXN_REG_L: edxn_reg_set_l(r, ref->index, (uint32_t)val); break;
    default: break;
    }
}

/* ── Resolve index sub-operand ────────────────────────────────────── */

static inline int32_t edxn_resolve_idx_sub(const edxn_registers_t *r,
                                            bool is_reg,
                                            const edxn_reg_ref_t *reg,
                                            int32_t imm) {
    return is_reg ? edxn_reg_get_int(r, reg) : imm;
}

/* ── Polymorphic int read — mirrors TS readPolyValue.
 *
 * Returns an int sourced from whatever operand kind the bytecode used:
 *   - EDXN_OP_IMM      → immediate value
 *   - EDXN_OP_REG(int) → register contents
 *   - EDXN_OP_REG(S)   → first 4 bytes of the S register, LE
 *   - EDXN_OP_STR      → first 4 bytes of the string literal, LE
 *   - EDXN_OP_INDEXED  → bytes at the indexed slice, LE
 *
 * The 4-byte cap on S/STR/INDEXED is a deliberate worst-case; callers
 * that want a smaller width mask the result themselves (the result fits
 * in int32_t, so this is lossless for any width up to 4). TS reads
 * exactly `length` bytes — our caller pattern is identical because the
 * arithmetic opcodes immediately apply edxn_mask() on the result.
 *
 * S/STR registers shorter than 4 bytes pad with zeros (matches TS
 * `bytes[i] ?? 0`).
 */

static inline int32_t edxn_resolve_int(const edxn_vm_t *vm,
                                        const edxn_operand_t *op) {
    switch (op->kind) {
    case EDXN_OP_IMM: return (int32_t)op->u.imm.value;
    case EDXN_OP_REG:
        if (op->u.reg.type == EDXN_REG_S) {
            /* TS: reads `length` bytes from S register LE; length param
               is unknown here, default to register's natural width.
               For poly reads from int sites, length=1 (byte) is typical. */
            size_t slen;
            const uint8_t *buf = edxn_reg_get_s(&vm->regs, op->u.reg.index, &slen);
            int32_t val = 0;
            int len = 4;
            for (int i = 0; i < len && (size_t)i < slen; i++)
                val |= (int32_t)buf[i] << (i * 8);
            return val;
        }
        return edxn_reg_get_int(&vm->regs, &op->u.reg);
    case EDXN_OP_STR: {
        /* TS: reads bytes little-endian */
        int32_t val = 0;
        for (int i = 0; i < 4 && (size_t)i < op->u.str.len; i++)
            val |= (int32_t)op->u.str.data[i] << (i * 8);
        return val;
    }
    case EDXN_OP_INDEXED: {
        int idx = edxn_resolve_idx_sub(&vm->regs, op->u.idx.idx_is_reg,
                                        &op->u.idx.idx_reg, op->u.idx.idx_imm);
        if (op->u.idx.has_off) idx += op->u.idx.off_imm;
        size_t slen;
        const uint8_t *buf = edxn_reg_get_s(&vm->regs, op->u.idx.base_s, &slen);
        if (idx < 0 || (size_t)idx >= slen) return 0;
        int len = 1;
        if (op->u.idx.has_len)
            len = edxn_resolve_idx_sub(&vm->regs, op->u.idx.len_is_reg,
                                        &op->u.idx.len_reg, op->u.idx.len_imm);
        int32_t val = 0;
        for (int i = 0; i < len && (size_t)(idx + i) < slen; i++)
            val |= (int32_t)buf[idx + i] << (i * 8);
        return val;
    }
    default: return 0;
    }
}

/* ── Polymorphic binary read — mirrors TS readPolyBytes.
 *
 * Returns a pointer to the underlying byte buffer + writes the length to
 * `*out_len`. For non-S registers and immediates, returns a pointer into
 * a static scratch buffer holding the LE byte representation — usable
 * synchronously but DO NOT cache across calls; the next call to
 * `edxn_resolve_binary` for the same operand kind overwrites it.
 *
 * The static-buffer trick is safe in the typical usage pattern:
 *   const uint8_t *b = edxn_resolve_binary(vm, &op, &len);
 *   memcpy(dest, b, len);  // consume immediately
 *
 * If you need to compare two operands' bytes (e.g. strcmp), copy them
 * out to separate caller-owned buffers BEFORE the second resolve call.
 * The strcmp opcode does exactly that.
 *
 * Returns NULL + *out_len=0 for EDXN_OP_NONE (no operand) and for F
 * (float) registers — there's no meaningful byte view of a double.
 */

static inline const uint8_t *edxn_resolve_binary(const edxn_vm_t *vm,
                                                   const edxn_operand_t *op,
                                                   size_t *out_len) {
    switch (op->kind) {
    case EDXN_OP_STR:
        *out_len = op->u.str.len;
        return op->u.str.data;
    case EDXN_OP_REG:
        if (op->u.reg.type == EDXN_REG_S)
            return edxn_reg_get_s(&vm->regs, op->u.reg.index, out_len);
        if (op->u.reg.type == EDXN_REG_F) {
            *out_len = 0;
            return NULL;
        }
        {
            static uint8_t int_buf[4];
            int len = edxn_reg_byte_len(&op->u.reg);
            int32_t val = edxn_reg_get_int(&vm->regs, &op->u.reg);
            for (int i = 0; i < len; i++)
                int_buf[i] = (uint8_t)((val >> (i * 8)) & 0xFF);
            *out_len = (size_t)len;
            return int_buf;
        }
    case EDXN_OP_IMM: {
        static uint8_t imm_buf[4];
        int len = op->u.imm.width ? op->u.imm.width : 4;
        int32_t val = op->u.imm.value;
        for (int i = 0; i < len; i++)
            imm_buf[i] = (uint8_t)((val >> (i * 8)) & 0xFF);
        *out_len = (size_t)len;
        return imm_buf;
    }
    case EDXN_OP_INDEXED: {
        size_t slen;
        const uint8_t *buf = edxn_reg_get_s(&vm->regs, op->u.idx.base_s, &slen);
        int start = edxn_resolve_idx_sub(&vm->regs, op->u.idx.idx_is_reg,
                                          &op->u.idx.idx_reg, op->u.idx.idx_imm);
        if (op->u.idx.has_off) start += op->u.idx.off_imm;
        if (start < 0) start = 0;
        if ((size_t)start >= slen) { *out_len = 0; return NULL; }
        size_t avail = slen - (size_t)start;
        if (op->u.idx.has_len) {
            int l = edxn_resolve_idx_sub(&vm->regs, op->u.idx.len_is_reg,
                                          &op->u.idx.len_reg, op->u.idx.len_imm);
            if (l < 0) l = 0;
            if ((size_t)l < avail) avail = (size_t)l;
        }
        *out_len = avail;
        return buf + start;
    }
    default:
        *out_len = 0;
        return NULL;
    }
}

/* ── Polymorphic string read (NUL-terminated from binary) ─────────── */

static inline size_t edxn_resolve_string(const edxn_vm_t *vm,
                                          const edxn_operand_t *op,
                                          char *buf, size_t cap) {
    size_t blen;
    const uint8_t *raw = edxn_resolve_binary(vm, op, &blen);
    if (!raw || blen == 0) { buf[0] = '\0'; return 0; }
    size_t copy = blen < cap - 1 ? blen : cap - 1;
    /* Stop at first NUL */
    for (size_t i = 0; i < copy; i++) {
        if (raw[i] == 0) { copy = i; break; }
    }
    memcpy(buf, raw, copy);
    buf[copy] = '\0';
    return copy;
}

/* ── Polymorphic float read ───────────────────────────────────────── */

static inline double edxn_resolve_float(const edxn_vm_t *vm,
                                         const edxn_operand_t *op) {
    if (op->kind == EDXN_OP_REG && op->u.reg.type == EDXN_REG_F)
        return edxn_reg_get_f(&vm->regs, op->u.reg.index);
    if (op->kind == EDXN_OP_IMM)
        return (double)op->u.imm.value;
    return 0.0;
}

/* ── Get operand byte length (for register-width arithmetic) ──────── */

static inline int edxn_operand_len(const edxn_vm_t *vm,
                                    const edxn_operand_t *op, bool use_width) {
    if (op->kind == EDXN_OP_REG) return edxn_reg_byte_len(&op->u.reg);
    if (op->kind == EDXN_OP_IMM && use_width && op->u.imm.width) return op->u.imm.width;
    if (op->kind == EDXN_OP_INDEXED) return 1;
    return 4;
}

/* ── Write int to polymorphic destination ─────────────────────────── */

static inline void edxn_write_int(edxn_vm_t *vm,
                                   const edxn_operand_t *op, int32_t val) {
    if (op->kind == EDXN_OP_REG) {
        edxn_reg_set_int(&vm->regs, &op->u.reg, val);
        return;
    }
    if (op->kind == EDXN_OP_INDEXED) {
        int start = edxn_resolve_idx_sub(&vm->regs, op->u.idx.idx_is_reg,
                                          &op->u.idx.idx_reg, op->u.idx.idx_imm);
        if (op->u.idx.has_off) start += op->u.idx.off_imm;
        if (start < 0) return;
        int len = 1;
        if (op->u.idx.has_len)
            len = edxn_resolve_idx_sub(&vm->regs, op->u.idx.len_is_reg,
                                        &op->u.idx.len_reg, op->u.idx.len_imm);
        size_t slen;
        const uint8_t *old = edxn_reg_get_s(&vm->regs, op->u.idx.base_s, &slen);
        size_t needed = (size_t)start + (size_t)len;
        size_t new_len = needed > slen ? needed : slen;
        if (new_len > EDXN_S_REG_MAXLEN) new_len = EDXN_S_REG_MAXLEN;
        uint8_t tmp[EDXN_S_REG_MAXLEN];
        memset(tmp, 0, new_len);
        if (slen > 0) memcpy(tmp, old, slen < new_len ? slen : new_len);
        for (int i = 0; i < len && (size_t)(start + i) < new_len; i++)
            tmp[start + i] = (uint8_t)((val >> (i * 8)) & 0xFF);
        edxn_reg_set_s(&vm->regs, op->u.idx.base_s, tmp, new_len);
    }
}

/* ── Write binary to S register destination ───────────────────────── */

static inline void edxn_write_binary(edxn_vm_t *vm,
                                      const edxn_operand_t *op,
                                      const uint8_t *data, size_t len) {
    if (op->kind == EDXN_OP_REG && op->u.reg.type == EDXN_REG_S) {
        edxn_reg_set_s(&vm->regs, op->u.reg.index, data, len);
        return;
    }
    if (op->kind == EDXN_OP_INDEXED) {
        int start = edxn_resolve_idx_sub(&vm->regs, op->u.idx.idx_is_reg,
                                          &op->u.idx.idx_reg, op->u.idx.idx_imm);
        if (op->u.idx.has_off) start += op->u.idx.off_imm;
        if (start < 0) start = 0;
        size_t slen_old;
        const uint8_t *old = edxn_reg_get_s(&vm->regs, op->u.idx.base_s, &slen_old);
        size_t needed = (size_t)start + len;
        size_t new_len = needed > slen_old ? needed : slen_old;
        if (new_len > EDXN_S_REG_MAXLEN) new_len = EDXN_S_REG_MAXLEN;
        uint8_t tmp[EDXN_S_REG_MAXLEN];
        memset(tmp, 0, new_len);
        if (slen_old > 0) memcpy(tmp, old, slen_old < new_len ? slen_old : new_len);
        size_t copy = len;
        if ((size_t)start + copy > new_len) copy = new_len - (size_t)start;
        memcpy(tmp + start, data, copy);
        edxn_reg_set_s(&vm->regs, op->u.idx.base_s, tmp, new_len);
    }
}

/* ── Write string to S register ───────────────────────────────────── */

static inline void edxn_write_string(edxn_vm_t *vm,
                                      const edxn_operand_t *op,
                                      const char *str) {
    edxn_write_binary(vm, op, (const uint8_t *)str, strlen(str));
}

/* ── Mask / sign-mask helpers ─────────────────────────────────────── */

static inline uint32_t edxn_mask(int byte_len) {
    return byte_len >= 4 ? 0xFFFFFFFFu : ((1u << (byte_len * 8)) - 1u);
}

static inline uint32_t edxn_sign_mask(int byte_len) {
    return 1u << (byte_len * 8 - 1);
}

/* ── New result set ───────────────────────────────────────────────── */

static inline edxn_error_t edxn_vm_new_result_set(edxn_vm_t *vm) {
    if (vm->current_results.count == 0) return EDXN_OK;
    if (vm->result_set_count >= vm->result_set_cap) {
        size_t new_cap = vm->result_set_cap == 0 ? 4 : vm->result_set_cap * 2;
        edxn_result_set_t *p = (edxn_result_set_t *)realloc(
            vm->result_sets, new_cap * sizeof(edxn_result_set_t));
        if (!p) return EDXN_ERR_NOMEM;
        vm->result_sets   = p;
        vm->result_set_cap = new_cap;
    }
    vm->result_sets[vm->result_set_count++] = vm->current_results;
    memset(&vm->current_results, 0, sizeof(vm->current_results));
    return edxn_result_init(&vm->current_results, 16);
}

/* ── Opcode handler declarations (defined in opcodes_*.c) ─────────── */

edxn_error_t edxn_op_arith(edxn_vm_t *vm, uint8_t opcode,
                            const edxn_operand_t *a0, const edxn_operand_t *a1);
edxn_error_t edxn_op_flow(edxn_vm_t *vm, uint8_t opcode,
                           const edxn_operand_t *a0, const edxn_operand_t *a1);
edxn_error_t edxn_op_string(edxn_vm_t *vm, uint8_t opcode,
                             const edxn_operand_t *a0, const edxn_operand_t *a1);
edxn_error_t edxn_op_result(edxn_vm_t *vm, uint8_t opcode,
                             const edxn_operand_t *a0, const edxn_operand_t *a1);
edxn_error_t edxn_op_table(edxn_vm_t *vm, uint8_t opcode,
                            const edxn_operand_t *a0, const edxn_operand_t *a1);
edxn_error_t edxn_op_comm(edxn_vm_t *vm, uint8_t opcode,
                           const edxn_operand_t *a0, const edxn_operand_t *a1);
edxn_error_t edxn_op_misc(edxn_vm_t *vm, uint8_t opcode,
                           const edxn_operand_t *a0, const edxn_operand_t *a1);

/* Trap-test helper used by jt/jnt; defined in opcodes_misc.c */
bool edxn_trap_detected(const edxn_vm_t *vm, const edxn_operand_t *test,
                        bool no_arg_uses_any_error);

#endif
