/**
 * Arithmetic + logic opcodes (move, clear, add, sub, mult, div, AND,
 * OR, XOR, NOT, shifts, compare-test, addc/subc, float ops).
 *
 * The move opcode (0x00) is the most polymorphic in the entire ISA —
 * it accepts every operand kind for both source and destination, with
 * the byte-vs-int interpretation depending on which side is a string
 * register. The branching at the top of case 0x00 covers the four
 * source × destination combinations.
 *
 * Width handling: `edxn_operand_len` returns the natural byte width
 * (1/2/4 for B/I/L registers, 1 for indexed/STR/S, operand width for
 * IMM). The arithmetic ops mask the result via `edxn_mask(len)`, then
 * update Z/S via `edxn_flags_update_zs`. C and V flags vary by op —
 * see the per-op comments.
 */

#include "vm_internal.h"

edxn_error_t edxn_op_arith(edxn_vm_t *vm, uint8_t op,
                            const edxn_operand_t *a0, const edxn_operand_t *a1) {
    int len;
    uint32_t mask, sm;
    int32_t v0, v1;
    uint32_t result;

    switch (op) {

    /* ── move (0x00) ──────────────────────────────────────────────── */
    case 0x00: {
        if (a0->kind == EDXN_OP_REG && a0->u.reg.type == EDXN_REG_S) {
            size_t blen;
            const uint8_t *bin = edxn_resolve_binary(vm, a1, &blen);
            edxn_reg_set_s(&vm->regs, a0->u.reg.index, bin ? bin : (const uint8_t *)"", blen);
            vm->flags.z = false; vm->flags.c = false; vm->flags.s = false; vm->flags.v = false;
            return EDXN_OK;
        }
        if (a0->kind == EDXN_OP_REG && a0->u.reg.type == EDXN_REG_F) {
            double fv = edxn_resolve_float(vm, a1);
            edxn_reg_set_f(&vm->regs, a0->u.reg.index, fv);
            return EDXN_OK;
        }
        if (a0->kind == EDXN_OP_INDEXED) {
            if (a1->kind == EDXN_OP_STR || a1->kind == EDXN_OP_INDEXED ||
                (a1->kind == EDXN_OP_REG && a1->u.reg.type == EDXN_REG_S)) {
                size_t blen;
                const uint8_t *bin = edxn_resolve_binary(vm, a1, &blen);
                edxn_write_binary(vm, a0, bin ? bin : (const uint8_t *)"", blen);
            } else {
                v1 = edxn_resolve_int(vm, a1);
                edxn_write_int(vm, a0, v1);
            }
            vm->flags.c = false; vm->flags.v = false;
            return EDXN_OK;
        }
        /* Integer register destination */
        if (a1->kind == EDXN_OP_INDEXED || a1->kind == EDXN_OP_STR ||
            (a1->kind == EDXN_OP_REG && a1->u.reg.type == EDXN_REG_S)) {
            size_t blen;
            const uint8_t *bin = edxn_resolve_binary(vm, a1, &blen);
            len = edxn_reg_byte_len(&a0->u.reg);
            int32_t val = 0;
            for (int i = 0; i < len && (size_t)i < blen; i++)
                val |= (int32_t)(bin ? bin[i] : 0) << (i * 8);
            edxn_reg_set_int(&vm->regs, &a0->u.reg, val);
        } else {
            v1 = edxn_resolve_int(vm, a1);
            edxn_reg_set_int(&vm->regs, &a0->u.reg, v1);
            len = edxn_reg_byte_len(&a0->u.reg);
        }
        vm->flags.c = false; vm->flags.v = false;
        mask = edxn_mask(len); sm = edxn_sign_mask(len);
        result = (uint32_t)edxn_reg_get_int(&vm->regs, &a0->u.reg) & mask;
        vm->flags.z = (result == 0);
        vm->flags.s = (result & sm) != 0;
        return EDXN_OK;
    }

    /* ── clear (0x01) ─────────────────────────────────────────────── */
    case 0x01:
        if (a0->kind == EDXN_OP_REG) {
            if (a0->u.reg.type == EDXN_REG_S) {
                edxn_reg_clear_s(&vm->regs, a0->u.reg.index);
            } else if (a0->u.reg.type == EDXN_REG_F) {
                edxn_reg_set_f(&vm->regs, a0->u.reg.index, 0.0);
            } else {
                edxn_reg_set_int(&vm->regs, &a0->u.reg, 0);
            }
        }
        vm->flags.c = false; vm->flags.z = true;
        vm->flags.s = false; vm->flags.v = false;
        return EDXN_OK;

    /* ── comp (0x02) ──────────────────────────────────────────────── */
    case 0x02:
        len = edxn_operand_len(vm, a0, true);
        if (len < 1) len = 1;
        v0 = edxn_resolve_int(vm, a0);
        v1 = edxn_resolve_int(vm, a1);
        edxn_flags_update_sub(&vm->flags, (uint32_t)v0, (uint32_t)v1, len);
        return EDXN_OK;

    /* ── sub (0x03) ───────────────────────────────────────────────── */
    case 0x03:
        len = edxn_operand_len(vm, a0, true);
        if (len < 1) len = 1;
        v0 = edxn_resolve_int(vm, a0);
        v1 = edxn_resolve_int(vm, a1);
        mask = edxn_mask(len);
        result = ((uint32_t)v0 - (uint32_t)v1) & mask;
        edxn_write_int(vm, a0, (int32_t)result);
        edxn_flags_update_sub(&vm->flags, (uint32_t)v0, (uint32_t)v1, len);
        return EDXN_OK;

    /* ── add (0x04) ───────────────────────────────────────────────── */
    case 0x04:
        len = edxn_operand_len(vm, a0, true);
        if (len < 1) len = 1;
        v0 = edxn_resolve_int(vm, a0);
        v1 = edxn_resolve_int(vm, a1);
        mask = edxn_mask(len);
        result = ((uint32_t)v0 + (uint32_t)v1) & mask;
        edxn_write_int(vm, a0, (int32_t)result);
        edxn_flags_update_add(&vm->flags, (uint32_t)v0, (uint32_t)v1, len);
        return EDXN_OK;

    /* ── mult (0x05) ──────────────────────────────────────────────── */
    case 0x05: {
        len = edxn_operand_len(vm, a0, true);
        if (len < 1) len = 1;
        v0 = edxn_resolve_int(vm, a0);
        v1 = edxn_resolve_int(vm, a1);
        mask = edxn_mask(len); sm = edxn_sign_mask(len);
        int32_t s0 = (v0 & (int32_t)sm) ? v0 - (1 << (len * 8)) : v0;
        int32_t s1 = (v1 & (int32_t)sm) ? v1 - (1 << (len * 8)) : v1;
        int64_t product = (int64_t)s0 * (int64_t)s1;
        uint32_t r32 = (uint32_t)(product & 0xFFFFFFFF);
        uint32_t lo = r32 & mask;
        uint32_t hi = (len >= 4) ? 0 : ((r32 >> (len * 8)) & mask);
        edxn_write_int(vm, a0, (int32_t)lo);
        if (a1->kind == EDXN_OP_REG && a1->u.reg.type != EDXN_REG_S && a1->u.reg.type != EDXN_REG_F)
            edxn_reg_set_int(&vm->regs, &a1->u.reg, (int32_t)hi);
        edxn_flags_update_zs(&vm->flags, lo, len);
        vm->flags.v = false;
        return EDXN_OK;
    }

    /* ── div (0x06) — TS: soft setError(BIP_0007) on div-by-zero, then RETURN.
       arg0 is left unchanged. Respect trap mask: hard error only when mask=0. */
    case 0x06: {
        len = edxn_operand_len(vm, a0, true);
        if (len < 1) len = 1;
        v0 = edxn_resolve_int(vm, a0);
        v1 = edxn_resolve_int(vm, a1);
        if (v1 == 0) {
            if (vm->error_trap_mask) {
                vm->error_trap_bit_nr = 7;  /* approximate BIP_0007 */
                return EDXN_OK;
            }
            return EDXN_ERR_DIV_ZERO;
        }
        int32_t s0 = v0, s1 = v1;
        int32_t quot = s0 / s1;
        int32_t rem  = s0 - (s0 / s1) * s1;
        mask = edxn_mask(len);
        edxn_write_int(vm, a0, (int32_t)((uint32_t)quot & mask));
        if (a1->kind == EDXN_OP_REG && a1->u.reg.type != EDXN_REG_S && a1->u.reg.type != EDXN_REG_F)
            edxn_reg_set_int(&vm->regs, &a1->u.reg, (int32_t)((uint32_t)rem & mask));
        edxn_flags_update_zs(&vm->flags, (uint32_t)quot & mask, len);
        vm->flags.v = false;
        return EDXN_OK;
    }

    /* ── and (0x07), or (0x08), xor (0x09) ────────────────────────── */
    case 0x07: case 0x08: case 0x09:
        len = edxn_operand_len(vm, a0, true);
        if (len < 1) len = 1;
        v0 = edxn_resolve_int(vm, a0);
        v1 = edxn_resolve_int(vm, a1);
        mask = edxn_mask(len);
        if (op == 0x07) result = ((uint32_t)v0 & (uint32_t)v1) & mask;
        else if (op == 0x08) result = ((uint32_t)v0 | (uint32_t)v1) & mask;
        else result = ((uint32_t)v0 ^ (uint32_t)v1) & mask;
        edxn_write_int(vm, a0, (int32_t)result);
        edxn_flags_update_zs(&vm->flags, result, len);
        vm->flags.v = false;
        return EDXN_OK;

    /* ── not (0x0A) ───────────────────────────────────────────────── */
    case 0x0A:
        len = edxn_operand_len(vm, a0, true);
        if (len < 1) len = 1;
        v0 = edxn_resolve_int(vm, a0);
        mask = edxn_mask(len);
        result = (~(uint32_t)v0) & mask;
        edxn_write_int(vm, a0, (int32_t)result);
        edxn_flags_update_zs(&vm->flags, result, len);
        vm->flags.v = false;
        return EDXN_OK;

    /* ── asr (0x18) ───────────────────────────────────────────────── */
    case 0x18: {
        len = edxn_operand_len(vm, a0, true);
        if (len < 1) len = 1;
        v0 = edxn_resolve_int(vm, a0);
        int shift = edxn_resolve_int(vm, a1);
        mask = edxn_mask(len); sm = edxn_sign_mask(len);
        bool sign_set = ((uint32_t)v0 & sm) != 0;
        result = (uint32_t)v0;
        if (shift > 0) {
            if (shift >= len * 8) {
                result = sign_set ? mask : 0;
                vm->flags.c = sign_set;
            } else {
                vm->flags.c = ((uint32_t)v0 & (1u << (shift - 1))) != 0;
                int32_t s = sign_set ? v0 - (int32_t)(1u << (len * 8)) : v0;
                result = (uint32_t)(s >> shift) & mask;
            }
        } else {
            vm->flags.c = false;
        }
        edxn_write_int(vm, a0, (int32_t)result);
        edxn_flags_update_zs(&vm->flags, result, len);
        vm->flags.v = false;
        return EDXN_OK;
    }

    /* ── lsl (0x19), asl (0x1B) — mirrors TS: carry from bit at (len*8-shift),
       false only when shift > len*8 (strict). At shift == len*8: carry = bit 0
       of v0, result = 0. */
    case 0x19: case 0x1B: {
        len = edxn_operand_len(vm, a0, true);
        if (len < 1) len = 1;
        v0 = edxn_resolve_int(vm, a0);
        int shift = edxn_resolve_int(vm, a1);
        mask = edxn_mask(len);
        result = (uint32_t)v0;
        if (shift > 0) {
            if (shift > len * 8) {
                vm->flags.c = false;
            } else {
                int carry_shift = len * 8 - shift;
                vm->flags.c = ((uint32_t)v0 & (1u << carry_shift)) != 0;
            }
            result = shift >= len * 8 ? 0 : ((uint32_t)v0 << shift) & mask;
        } else {
            vm->flags.c = false;
        }
        edxn_write_int(vm, a0, (int32_t)result);
        edxn_flags_update_zs(&vm->flags, result, len);
        vm->flags.v = false;
        return EDXN_OK;
    }

    /* ── lsr (0x1A) — mirrors TS: carry = bit (shift-1) of v0, false only when
       shift > len*8 (strict). At shift == len*8: carry = bit (len*8-1) of v0,
       result = 0. */
    case 0x1A: {
        len = edxn_operand_len(vm, a0, true);
        if (len < 1) len = 1;
        v0 = edxn_resolve_int(vm, a0);
        int shift = edxn_resolve_int(vm, a1);
        mask = edxn_mask(len);
        result = (uint32_t)v0;
        if (shift > 0) {
            if (shift > len * 8) {
                vm->flags.c = false;
            } else {
                vm->flags.c = ((uint32_t)v0 & (1u << (shift - 1))) != 0;
            }
            result = shift >= len * 8 ? 0 : ((uint32_t)v0 >> shift) & mask;
        } else {
            vm->flags.c = false;
        }
        edxn_write_int(vm, a0, (int32_t)result);
        edxn_flags_update_zs(&vm->flags, result, len);
        vm->flags.v = false;
        return EDXN_OK;
    }

    /* ── addc (0x49) ──────────────────────────────────────────────── */
    case 0x49: {
        int carry_in = vm->flags.c ? 1 : 0;
        len = edxn_operand_len(vm, a0, true);
        if (len < 1) len = 1;
        v0 = edxn_resolve_int(vm, a0);
        v1 = edxn_resolve_int(vm, a1);
        mask = edxn_mask(len);
        uint32_t v1adj = ((uint32_t)v1 + carry_in) & mask;
        uint32_t sum = (uint32_t)v0 + v1adj;
        result = sum & mask;
        edxn_write_int(vm, a0, (int32_t)result);
        sm = edxn_sign_mask(len);
        bool v0s = ((uint32_t)v0 & sm) != 0;
        bool v1s = (v1adj & sm) != 0;
        bool rs  = (result & sm) != 0;
        vm->flags.z = (result == 0);
        vm->flags.s = rs;
        vm->flags.v = (v0s == v1s) && (rs != v0s);
        vm->flags.c = (sum > mask);
        return EDXN_OK;
    }

    /* ── subc (0x4A) ──────────────────────────────────────────────── */
    case 0x4A: {
        int borrow_in = vm->flags.c ? 1 : 0;
        len = edxn_operand_len(vm, a0, true);
        if (len < 1) len = 1;
        v0 = edxn_resolve_int(vm, a0);
        v1 = edxn_resolve_int(vm, a1);
        mask = edxn_mask(len);
        uint32_t v1adj = ((uint32_t)v1 + borrow_in) & mask;
        result = ((uint32_t)v0 - v1adj) & mask;
        edxn_write_int(vm, a0, (int32_t)result);
        sm = edxn_sign_mask(len);
        bool v0s2 = ((uint32_t)v0 & sm) != 0;
        bool v1s2 = (v1adj & sm) != 0;
        bool rs2  = (result & sm) != 0;
        vm->flags.z = (result == 0);
        vm->flags.s = rs2;
        vm->flags.v = (v0s2 != v1s2) && (rs2 != v0s2);
        vm->flags.c = ((uint32_t)v0 < v1adj);
        return EDXN_OK;
    }

    /* ── test (0x6A) ──────────────────────────────────────────────── */
    case 0x6A:
        len = edxn_operand_len(vm, a0, true);
        if (len < 1) len = 1;
        v0 = edxn_resolve_int(vm, a0);
        v1 = edxn_resolve_int(vm, a1);
        mask = edxn_mask(len);
        result = ((uint32_t)v0 & (uint32_t)v1) & mask;
        edxn_flags_update_zs(&vm->flags, result, len);
        vm->flags.v = false;
        return EDXN_OK;

    /* ── float ops: fadd(0x3B), fsub(0x3C), fmul(0x3D), fdiv(0x3E) ─ */
    case 0x3B: case 0x3C: case 0x3D: case 0x3E: {
        if (a0->kind != EDXN_OP_REG || a0->u.reg.type != EDXN_REG_F) return EDXN_ERR_OPERAND;
        if (a1->kind != EDXN_OP_REG || a1->u.reg.type != EDXN_REG_F) return EDXN_ERR_OPERAND;
        double fa = edxn_reg_get_f(&vm->regs, a0->u.reg.index);
        double fb = edxn_reg_get_f(&vm->regs, a1->u.reg.index);
        double fr;
        if (op == 0x3B) fr = fa + fb;
        else if (op == 0x3C) fr = fa - fb;
        else if (op == 0x3D) fr = fa * fb;
        else { if (fb == 0.0) return EDXN_ERR_DIV_ZERO; fr = fa / fb; }
        edxn_reg_set_f(&vm->regs, a0->u.reg.index, fr);
        vm->flags.z = (fr == 0.0);
        vm->flags.s = (fr < 0.0);
        vm->flags.v = !isfinite(fr);
        return EDXN_OK;
    }

    /* ── a2flt (0x3A) ─────────────────────────────────────────────── */
    case 0x3A: {
        if (a0->kind != EDXN_OP_REG || a0->u.reg.type != EDXN_REG_F) return EDXN_ERR_OPERAND;
        char sbuf[256];
        edxn_resolve_string(vm, a1, sbuf, sizeof(sbuf));
        for (char *c = sbuf; *c; c++) if (*c == ',') *c = '.';
        double fval = atof(sbuf);
        edxn_reg_set_f(&vm->regs, a0->u.reg.index, fval);
        return EDXN_OK;
    }

    /* ── fcomp (0xA1) ─────────────────────────────────────────────── */
    case 0xA1: {
        if (a0->kind != EDXN_OP_REG || a0->u.reg.type != EDXN_REG_F) return EDXN_ERR_OPERAND;
        if (a1->kind != EDXN_OP_REG || a1->u.reg.type != EDXN_REG_F) return EDXN_ERR_OPERAND;
        double ca = edxn_reg_get_f(&vm->regs, a0->u.reg.index);
        double cb = edxn_reg_get_f(&vm->regs, a1->u.reg.index);
        vm->flags.z = (ca == cb);
        vm->flags.s = (ca < cb);
        vm->flags.v = false;
        return EDXN_OK;
    }

    default:
        return EDXN_ERR_ILLEGAL_OPCODE;
    }
}
