/**
 * String/binary opcodes (scmp / scat / scut / slen / spaste / sdelete /
 * swap / srevrs / stoken / fix2hex / fix2dez / strcat / flt2a / a2y /
 * hex2y / strcmp / strlen / y2bcd / y2hex / ufix2dez).
 *
 * BEST/2 strings ARE binary — they're length-counted byte arrays, not
 * NUL-terminated. The "string" terminology is BMW's, not C's. Most ops
 * here work on the raw bytes; the read/write helpers in vm_internal.h
 * truncate at the first NUL only when the opcode explicitly wants a
 * C-style string (e.g. strcmp).
 *
 * Hex emission uses uppercase ("0xAB" not "0xab") because the BMW
 * status tables are uppercase and tabseek does case-insensitive
 * comparisons but it's cheaper to match the canonical form upfront.
 */

#include "vm_internal.h"

static const char hex_chars[] = "0123456789ABCDEF";

static inline bool is_hex_char(char c) {
    return (c >= '0' && c <= '9') || (c >= 'a' && c <= 'f') || (c >= 'A' && c <= 'F');
}

static inline int hex_val(char c) {
    if (c >= '0' && c <= '9') return c - '0';
    if (c >= 'a' && c <= 'f') return c - 'a' + 10;
    if (c >= 'A' && c <= 'F') return c - 'A' + 10;
    return -1;
}

edxn_error_t edxn_op_string(edxn_vm_t *vm, uint8_t op,
                             const edxn_operand_t *a0, const edxn_operand_t *a1) {
    switch (op) {

    /* scmp (0x20) — binary compare, Z = equal */
    case 0x20: {
        size_t l0, l1;
        const uint8_t *b0 = edxn_resolve_binary(vm, a0, &l0);
        const uint8_t *b1 = edxn_resolve_binary(vm, a1, &l1);
        vm->flags.z = (l0 == l1 && (l0 == 0 || memcmp(b0, b1, l0) == 0));
        return EDXN_OK;
    }

    /* scat (0x21) — binary concatenate */
    case 0x21: {
        if (a0->kind != EDXN_OP_REG || a0->u.reg.type != EDXN_REG_S)
            return EDXN_ERR_OPERAND;
        int si = a0->u.reg.index;
        size_t dlen;
        const uint8_t *dst = edxn_reg_get_s(&vm->regs, si, &dlen);
        size_t slen;
        const uint8_t *src = edxn_resolve_binary(vm, a1, &slen);
        if (dlen + slen > EDXN_ARRAY_MAX_SIZE) return EDXN_OK;
        uint8_t tmp[EDXN_S_REG_MAXLEN];
        size_t total = dlen + slen;
        if (total > EDXN_S_REG_MAXLEN) total = EDXN_S_REG_MAXLEN;
        memcpy(tmp, dst, dlen);
        size_t copy = total - dlen;
        if (src && copy > 0) memcpy(tmp + dlen, src, copy);
        edxn_reg_set_s(&vm->regs, si, tmp, total);
        return EDXN_OK;
    }

    /* scut (0x22) — cut bytes from end */
    case 0x22: {
        if (a0->kind != EDXN_OP_REG || a0->u.reg.type != EDXN_REG_S)
            return EDXN_ERR_OPERAND;
        int si = a0->u.reg.index;
        int32_t cut = edxn_resolve_int(vm, a1);
        if (cut < 0) cut = 0;
        size_t dlen;
        const uint8_t *d = edxn_reg_get_s(&vm->regs, si, &dlen);
        if ((size_t)cut >= dlen)
            edxn_reg_clear_s(&vm->regs, si);
        else
            edxn_reg_set_s(&vm->regs, si, d, dlen - (size_t)cut);
        return EDXN_OK;
    }

    /* slen (0x23) — binary length to int register */
    case 0x23: {
        if (a0->kind != EDXN_OP_REG) return EDXN_ERR_OPERAND;
        size_t blen;
        edxn_resolve_binary(vm, a1, &blen);
        int32_t length = (int32_t)blen;
        edxn_reg_set_int(&vm->regs, &a0->u.reg, length);
        int bw = edxn_reg_byte_len(&a0->u.reg);
        uint32_t mask = edxn_mask(bw);
        uint32_t sm = edxn_sign_mask(bw);
        uint32_t masked = (uint32_t)length & mask;
        vm->flags.z = (masked == 0);
        vm->flags.s = (masked & sm) != 0;
        vm->flags.v = false;
        return EDXN_OK;
    }

    /* spaste (0x24) — insert bytes at indexed position */
    case 0x24: {
        if (a0->kind != EDXN_OP_INDEXED) return EDXN_ERR_OPERAND;
        size_t ilen;
        const uint8_t *ins = edxn_resolve_binary(vm, a1, &ilen);
        size_t blen;
        const uint8_t *base = edxn_reg_get_s(&vm->regs, a0->u.idx.base_s, &blen);
        int start = edxn_resolve_idx_sub(&vm->regs, a0->u.idx.idx_is_reg,
                                          &a0->u.idx.idx_reg, a0->u.idx.idx_imm);
        if (a0->u.idx.has_off) start += a0->u.idx.off_imm;
        if (start < 0) start = 0;
        if ((size_t)start >= blen) return EDXN_OK;
        size_t total = blen + ilen;
        if (total > EDXN_S_REG_MAXLEN) return EDXN_OK;
        uint8_t tmp[EDXN_S_REG_MAXLEN];
        memcpy(tmp, base, (size_t)start);
        if (ins) memcpy(tmp + start, ins, ilen);
        memcpy(tmp + start + ilen, base + start, blen - (size_t)start);
        edxn_reg_set_s(&vm->regs, a0->u.idx.base_s, tmp, total);
        return EDXN_OK;
    }

    /* sdelete (0x25) — delete bytes from indexed position */
    case 0x25: {
        if (a0->kind != EDXN_OP_INDEXED) return EDXN_ERR_OPERAND;
        int32_t length = edxn_resolve_int(vm, a1);
        if (length < 0) length = 0;
        size_t blen;
        const uint8_t *base = edxn_reg_get_s(&vm->regs, a0->u.idx.base_s, &blen);
        int start = edxn_resolve_idx_sub(&vm->regs, a0->u.idx.idx_is_reg,
                                          &a0->u.idx.idx_reg, a0->u.idx.idx_imm);
        if (a0->u.idx.has_off) start += a0->u.idx.off_imm;
        if (start < 0) start = 0;
        if ((size_t)start >= blen) return EDXN_OK;
        size_t end = (size_t)start + (size_t)length;
        if (end > blen) end = blen;
        size_t new_len = blen - (end - (size_t)start);
        uint8_t tmp[EDXN_S_REG_MAXLEN];
        memcpy(tmp, base, (size_t)start);
        memcpy(tmp + start, base + end, blen - end);
        edxn_reg_set_s(&vm->regs, a0->u.idx.base_s, tmp, new_len);
        return EDXN_OK;
    }

    /* swap (0x51) — reverse byte slice in indexed operand */
    case 0x51: {
        if (a0->kind != EDXN_OP_INDEXED) return EDXN_ERR_OPERAND;
        int start = edxn_resolve_idx_sub(&vm->regs, a0->u.idx.idx_is_reg,
                                          &a0->u.idx.idx_reg, a0->u.idx.idx_imm);
        if (a0->u.idx.has_off) start += a0->u.idx.off_imm;
        int length = 0;
        if (a0->u.idx.has_len)
            length = edxn_resolve_idx_sub(&vm->regs, a0->u.idx.len_is_reg,
                                           &a0->u.idx.len_reg, a0->u.idx.len_imm);
        if (start < 0 || length <= 0) return EDXN_OK;
        size_t slen;
        const uint8_t *buf = edxn_reg_get_s(&vm->regs, a0->u.idx.base_s, &slen);
        if ((size_t)(start + length) > slen) return EDXN_OK;
        uint8_t tmp[EDXN_S_REG_MAXLEN];
        memcpy(tmp, buf, slen);
        for (int i = 0; i < length / 2; i++) {
            uint8_t t = tmp[start + i];
            tmp[start + i] = tmp[start + length - 1 - i];
            tmp[start + length - 1 - i] = t;
        }
        edxn_reg_set_s(&vm->regs, a0->u.idx.base_s, tmp, slen);
        return EDXN_OK;
    }

    /* srevrs (0x53) — reverse entire S register */
    case 0x53: {
        if (a0->kind != EDXN_OP_REG || a0->u.reg.type != EDXN_REG_S)
            return EDXN_ERR_OPERAND;
        int si = a0->u.reg.index;
        size_t slen;
        const uint8_t *buf = edxn_reg_get_s(&vm->regs, si, &slen);
        if (slen == 0) return EDXN_OK;
        uint8_t tmp[EDXN_S_REG_MAXLEN];
        for (size_t i = 0; i < slen; i++)
            tmp[i] = buf[slen - 1 - i];
        edxn_reg_set_s(&vm->regs, si, tmp, slen);
        return EDXN_OK;
    }

    /* stoken (0x54) — TS: split source on ANY character in vm->token_sep.
       Mirrors C# splitString.Split(separator.ToCharArray()). */
    case 0x54: {
        if (a0->kind != EDXN_OP_REG || a0->u.reg.type != EDXN_REG_S)
            return EDXN_ERR_OPERAND;
        if (vm->token_sep[0] == '\0') { vm->flags.z = true; return EDXN_OK; }
        char source[EDXN_S_REG_MAXLEN + 1];
        edxn_resolve_string(vm, a1, source, sizeof(source));
        int target = vm->token_idx - 1;
        if (target < 0) { vm->flags.z = true; return EDXN_OK; }
        int cur = 0;
        const char *tok_start = source;
        const char *p = source;
        while (*p) {
            if (strchr(vm->token_sep, *p)) {
                if (cur == target) break;
                cur++;
                tok_start = p + 1;
            }
            p++;
        }
        if (cur < target) { vm->flags.z = true; return EDXN_OK; }
        size_t tlen = (size_t)(p - tok_start);
        edxn_reg_set_s(&vm->regs, a0->u.reg.index,
                        (const uint8_t *)tok_start, tlen);
        vm->flags.z = false;
        return EDXN_OK;
    }

    /* fix2hex (0x79) — integer to hex string "0x..." */
    case 0x79: {
        int bw = edxn_operand_len(vm, a1, true);
        if (bw < 1) bw = 1;
        int32_t raw = edxn_resolve_int(vm, a1);
        uint32_t uraw = (uint32_t)raw;
        char buf[32];
        buf[0] = '0'; buf[1] = 'x';
        int digits = bw * 2;
        for (int i = digits - 1; i >= 0; i--) {
            buf[2 + i] = hex_chars[uraw & 0xF];
            uraw >>= 4;
        }
        buf[2 + digits] = '\0';
        edxn_write_string(vm, a0, buf);
        return EDXN_OK;
    }

    /* fix2dez (0x7A) — signed integer to decimal string */
    case 0x7A: {
        int bw = edxn_operand_len(vm, a1, true);
        if (bw < 1) bw = 1;
        int32_t raw = edxn_resolve_int(vm, a1);
        uint32_t mask = edxn_mask(bw);
        uint32_t sm = edxn_sign_mask(bw);
        uint32_t uraw = (uint32_t)raw & mask;
        int32_t signed_val = (uraw & sm)
            ? (int32_t)(uraw - (1u << (bw * 8)))
            : (int32_t)uraw;
        char buf[32];
        snprintf(buf, sizeof(buf), "%d", signed_val);
        edxn_write_string(vm, a0, buf);
        return EDXN_OK;
    }

    /* strcat (0x7E) — string concatenation (truncating at S reg max) */
    case 0x7E: {
        if (a0->kind != EDXN_OP_REG || a0->u.reg.type != EDXN_REG_S)
            return EDXN_ERR_OPERAND;
        int si = a0->u.reg.index;
        size_t dlen;
        const uint8_t *dst = edxn_reg_get_s(&vm->regs, si, &dlen);
        size_t slen;
        const uint8_t *src = edxn_resolve_binary(vm, a1, &slen);
        size_t remaining = EDXN_S_REG_MAXLEN > dlen ? EDXN_S_REG_MAXLEN - dlen : 0;
        if (slen > remaining) slen = remaining;
        uint8_t tmp[EDXN_S_REG_MAXLEN];
        memcpy(tmp, dst, dlen);
        if (slen > 0 && src) memcpy(tmp + dlen, src, slen);
        edxn_reg_set_s(&vm->regs, si, tmp, dlen + slen);
        return EDXN_OK;
    }

    /* flt2a (0x87) — float to ASCII string */
    case 0x87: {
        if (a0->kind != EDXN_OP_REG || a0->u.reg.type != EDXN_REG_S)
            return EDXN_ERR_OPERAND;
        double val = edxn_resolve_float(vm, a1);
        char buf[64];
        snprintf(buf, sizeof(buf), "%.*f", vm->float_precision, val);
        edxn_reg_set_s(&vm->regs, a0->u.reg.index,
                        (const uint8_t *)buf, strlen(buf));
        return EDXN_OK;
    }

    /* a2y (0x8C) — ASCII hex pairs to binary. Direct port of TS:
       - Trim source at first non-hex/space/comma/semicolon char.
       - Split on [,;] into groups.
       - Empty (whitespace-only) group → push group.length + 1 zero bytes.
       - Otherwise: trim, split on whitespace, parseInt each hex sub-token. */
    case 0x8C: {
        char source[EDXN_S_REG_MAXLEN + 1];
        size_t srclen = edxn_resolve_string(vm, a1, source, sizeof(source));
        uint8_t result[EDXN_S_REG_MAXLEN];
        size_t rlen = 0;
        if (srclen == 0) {
            edxn_write_binary(vm, a0, result, 0);
            return EDXN_OK;
        }
        size_t trim_end = srclen;
        for (size_t i = 0; i < srclen; i++) {
            char c = source[i];
            if (!is_hex_char(c) && c != ' ' && c != ',' && c != ';') {
                trim_end = i;
                break;
            }
        }
        bool exit_loop = false;
        size_t pos = 0;
        while (pos <= trim_end) {
            /* Find end of group (next ',' or ';' or trim_end) */
            size_t gend = pos;
            while (gend < trim_end && source[gend] != ',' && source[gend] != ';')
                gend++;
            size_t group_len = gend - pos;
            /* Trim whitespace within group */
            size_t gp = pos, ge = gend;
            while (gp < ge && source[gp] == ' ') gp++;
            while (ge > gp && source[ge - 1] == ' ') ge--;
            if (gp >= ge) {
                /* Empty group → push group_len + 1 zeros */
                for (size_t j = 0; j < group_len + 1 && rlen < EDXN_S_REG_MAXLEN; j++)
                    result[rlen++] = 0;
            } else {
                /* Split on whitespace, parse each as hex */
                size_t sp = gp;
                while (sp < ge && rlen < EDXN_S_REG_MAXLEN) {
                    while (sp < ge && source[sp] == ' ') sp++;
                    if (sp >= ge) break;
                    uint32_t val = 0;
                    bool got = false;
                    while (sp < ge && source[sp] != ' ') {
                        int h = hex_val(source[sp]);
                        if (h < 0) { exit_loop = true; break; }
                        val = (val << 4) | (uint32_t)h;
                        got = true;
                        sp++;
                    }
                    if (exit_loop) break;
                    if (got && rlen < EDXN_S_REG_MAXLEN)
                        result[rlen++] = (uint8_t)(val & 0xFF);
                }
            }
            if (exit_loop) break;
            if (gend >= trim_end) break;
            pos = gend + 1;
        }
        edxn_write_binary(vm, a0, result, rlen);
        return EDXN_OK;
    }

    /* hex2y (0x8E) — hex string to binary (strict pairs) */
    case 0x8E: {
        char source[EDXN_S_REG_MAXLEN + 1];
        size_t srclen = edxn_resolve_string(vm, a1, source, sizeof(source));
        if (srclen % 2 != 0) {
            edxn_write_binary(vm, a0, NULL, 0);
            vm->flags.c = true;
            return EDXN_OK;
        }
        uint8_t result[EDXN_S_REG_MAXLEN];
        size_t rlen = 0;
        bool failed = false;
        for (size_t i = 0; i + 1 < srclen; i += 2) {
            int h0 = hex_val(source[i]);
            int h1 = hex_val(source[i + 1]);
            if (h0 < 0 || h1 < 0) { failed = true; break; }
            if (rlen < EDXN_S_REG_MAXLEN)
                result[rlen++] = (uint8_t)((h0 << 4) | h1);
        }
        if (failed) {
            edxn_write_binary(vm, a0, NULL, 0);
            vm->flags.c = true;
        } else {
            edxn_write_binary(vm, a0, result, rlen);
            vm->flags.c = false;
        }
        return EDXN_OK;
    }

    /* strcmp (0x8F) — string compare ordinal, Z=true when DIFFERENT */
    case 0x8F: {
        char left[EDXN_S_REG_MAXLEN + 1];
        char right[EDXN_S_REG_MAXLEN + 1];
        edxn_resolve_string(vm, a0, left, sizeof(left));
        edxn_resolve_string(vm, a1, right, sizeof(right));
        vm->flags.z = (strcmp(left, right) != 0);
        return EDXN_OK;
    }

    /* strlen (0x90) — string length (NUL-terminated) */
    case 0x90: {
        if (a0->kind != EDXN_OP_REG) return EDXN_ERR_OPERAND;
        char buf[EDXN_S_REG_MAXLEN + 1];
        size_t slen = edxn_resolve_string(vm, a1, buf, sizeof(buf));
        edxn_reg_set_int(&vm->regs, &a0->u.reg, (int32_t)slen);
        int bw = edxn_reg_byte_len(&a0->u.reg);
        uint32_t mask = edxn_mask(bw);
        uint32_t sm = edxn_sign_mask(bw);
        uint32_t masked = (uint32_t)slen & mask;
        vm->flags.z = (masked == 0);
        vm->flags.s = (masked & sm) != 0;
        vm->flags.v = false;
        return EDXN_OK;
    }

    /* y2bcd (0x91) — bytes to BCD hex string */
    case 0x91: {
        size_t blen;
        const uint8_t *bytes = edxn_resolve_binary(vm, a1, &blen);
        char buf[EDXN_S_REG_MAXLEN * 2 + 1];
        size_t pos = 0;
        for (size_t i = 0; i < blen && pos + 2 < sizeof(buf); i++) {
            buf[pos++] = hex_chars[(bytes[i] >> 4) & 0xF];
            buf[pos++] = hex_chars[bytes[i] & 0xF];
        }
        buf[pos] = '\0';
        edxn_write_string(vm, a0, buf);
        return EDXN_OK;
    }

    /* y2hex (0x92) — bytes to hex string */
    case 0x92: {
        size_t blen;
        const uint8_t *bytes = edxn_resolve_binary(vm, a1, &blen);
        char buf[EDXN_S_REG_MAXLEN * 2 + 1];
        size_t pos = 0;
        for (size_t i = 0; i < blen && pos + 2 < sizeof(buf); i++) {
            buf[pos++] = hex_chars[(bytes[i] >> 4) & 0xF];
            buf[pos++] = hex_chars[bytes[i] & 0xF];
        }
        buf[pos] = '\0';
        edxn_write_string(vm, a0, buf);
        return EDXN_OK;
    }

    /* ufix2dez (0xAB) — unsigned integer to decimal string */
    case 0xAB: {
        int bw = edxn_operand_len(vm, a1, true);
        if (bw < 1) bw = 1;
        int32_t raw = edxn_resolve_int(vm, a1);
        uint32_t mask = edxn_mask(bw);
        uint32_t uval = (uint32_t)raw & mask;
        char buf[32];
        snprintf(buf, sizeof(buf), "%u", uval);
        edxn_write_string(vm, a0, buf);
        return EDXN_OK;
    }

    default:
        return EDXN_ERR_ILLEGAL_OPCODE;
    }
}
