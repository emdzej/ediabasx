/**
 * Catch-all opcode handlers: stack, parameters, trap machinery, config /
 * shared memory / file I/O state, date/time, float-byte conversions, and
 * a handful of standalone ops (ssize, ticks, setfprec, etc.).
 *
 * `edxn_trap_detected()` is exported here and re-used by jt/jnt in
 * opcodes_flow.c. It mirrors the TS `isTrapErrorDetected` logic — see
 * the comment on that function for the bit-match rules.
 *
 * The parse helper (`parse_ediabas_int`) duplicates TS `parseEdiabasInt`
 * from `packages/interpreter/src/operations/parameters.ts`: handles "0x"
 * (hex), "0y" (binary), decimal (with trailing fractional part trimmed),
 * and rejects identifiers / lone hyphens.
 */

#include "vm_internal.h"
#include <time.h>
#include <unistd.h>
#include <ctype.h>

/* ── Helpers ──────────────────────────────────────────────────────── */

/* parseEdiabasInt — mirrors TS packages/interpreter/src/operations/parameters.ts.
   Handles "0x" hex, "0y" binary, decimal (optionally with trailing fractional
   part trimmed). Returns {value, valid}; on invalid input returns {0, false}. */
typedef struct { int32_t value; bool valid; } edxn_parse_int_t;

static edxn_parse_int_t parse_ediabas_int(const char *s) {
    edxn_parse_int_t r = {0, false};
    if (!s) return r;
    /* trimEnd */
    size_t end = strlen(s);
    while (end > 0 && isspace((unsigned char)s[end - 1])) end--;
    if (end == 0) return r;

    /* trimStart */
    size_t start = 0;
    while (start < end && isspace((unsigned char)s[start])) start++;
    if (start >= end) return r;

    /* Lowercase prefix check */
    char c0 = (char)tolower((unsigned char)s[start]);
    char c1 = start + 1 < end ? (char)tolower((unsigned char)s[start + 1]) : 0;

    if (c0 == '0' && c1 == 'x') {
        if (end - start > 2) {
            char p = (char)tolower((unsigned char)s[start + 2]);
            if ((p >= '0' && p <= '9') || (p >= 'a' && p <= 'f')) {
                char buf[32];
                size_t n = end - start - 2;
                if (n >= sizeof(buf)) n = sizeof(buf) - 1;
                memcpy(buf, s + start + 2, n);
                buf[n] = '\0';
                r.value = (int32_t)strtoul(buf, NULL, 16);
                r.valid = true;
            }
        }
        return r;
    }
    if (c0 == '0' && c1 == 'y') {
        char buf[40];
        size_t n = end - start - 2;
        if (n >= sizeof(buf)) n = sizeof(buf) - 1;
        memcpy(buf, s + start + 2, n);
        buf[n] = '\0';
        r.value = (int32_t)strtoul(buf, NULL, 2);
        r.valid = true;
        return r;
    }
    /* Reject "-", "--", and identifiers starting with a-z */
    if (c0 >= 'a' && c0 <= 'z') return r;
    if (s[start] == '-' && (start + 1 >= end || s[start + 1] == '-')) return r;

    /* Decimal — trim at first '.' or ',' */
    char buf[32];
    size_t n = 0;
    for (size_t i = start; i < end && n < sizeof(buf) - 1; i++) {
        if (s[i] == '.' || s[i] == ',') break;
        buf[n++] = s[i];
    }
    buf[n] = '\0';
    char *endp;
    long v = strtol(buf, &endp, 10);
    if (endp != buf) {
        r.value = (int32_t)v;
        r.valid = true;
    }
    return r;
}

/* ISO-8601 week-of-year mirroring TS isoWeekOfYear. */
static int iso_week_of_year(const struct tm *t) {
    /* C tm: tm_wday Sun=0..Sat=6; tm_yday Jan 1=0
       Algorithm: shift to Thursday of current week, find first Thursday of year. */
    struct tm target = *t;
    target.tm_hour = 0; target.tm_min = 0; target.tm_sec = 0;
    int day_nr = ((t->tm_wday + 6) % 7);  /* Mon=0..Sun=6 */
    target.tm_mday = t->tm_mday - day_nr + 3;
    mktime(&target);
    /* First Thursday */
    struct tm first = target;
    first.tm_mday = 4;
    first.tm_mon = 0;
    /* year is target.tm_year — already shifted by mktime */
    mktime(&first);
    int first_day_nr = ((first.tm_wday + 6) % 7);
    first.tm_mday = 4 - first_day_nr + 3;
    time_t a = mktime(&target), b = mktime(&first);
    return 1 + (int)((a - b) / (7 * 24 * 3600));
}

static void write_byte_array(edxn_vm_t *vm, const edxn_operand_t *op,
                              const uint8_t *bytes, size_t n) {
    if (op->kind == EDXN_OP_REG && op->u.reg.type == EDXN_REG_S) {
        edxn_reg_set_s(&vm->regs, op->u.reg.index, bytes, n);
        return;
    }
    if (op->kind == EDXN_OP_REG) {
        /* Pack LE into int register */
        int32_t val = 0;
        for (int i = (int)n - 1; i >= 0; i--)
            val = (val << 8) | bytes[i];
        edxn_reg_set_int(&vm->regs, &op->u.reg, val);
        return;
    }
    if (op->kind == EDXN_OP_INDEXED) {
        edxn_write_binary(vm, op, bytes, n);
    }
}

/* ── Trap helpers ─────────────────────────────────────────────────── */

static bool trap_is_detected(int32_t bit_nr, int32_t test_bit,
                              bool has_arg, bool no_arg_uses_any_error) {
    if (has_arg) {
        if (test_bit > 0) {
            if (bit_nr == test_bit) return true;
            if (bit_nr == 0 && test_bit == 32) return true;
            return false;
        }
        return bit_nr >= 0x40000000;
    }
    if (no_arg_uses_any_error) return bit_nr >= 0;
    return bit_nr >= 0x40000000;
}

/* Expose to opcodes_flow.c via this helper */
bool edxn_trap_detected(const edxn_vm_t *vm, const edxn_operand_t *test,
                        bool no_arg_uses_any_error) {
    bool has_arg = (test->kind != EDXN_OP_NONE);
    int32_t test_bit = has_arg ? edxn_resolve_int(vm, test) : 0;
    return trap_is_detected(vm->error_trap_bit_nr, test_bit,
                             has_arg, no_arg_uses_any_error);
}

/* ── Shared memory ─────────────────────────────────────────────────── */

static void str_upper(char *s) {
    for (; *s; s++) *s = (char)toupper((unsigned char)*s);
}

static edxn_shm_entry_t *shm_find(edxn_vm_t *vm, const char *key) {
    for (size_t i = 0; i < EDXN_SHM_MAX_ENTRIES; i++) {
        if (vm->shm[i].used && strcmp(vm->shm[i].key, key) == 0)
            return &vm->shm[i];
    }
    return NULL;
}

static edxn_shm_entry_t *shm_alloc(edxn_vm_t *vm) {
    for (size_t i = 0; i < EDXN_SHM_MAX_ENTRIES; i++)
        if (!vm->shm[i].used) return &vm->shm[i];
    return NULL;
}

/* ── Config ────────────────────────────────────────────────────────── */

static edxn_cfg_entry_t *cfg_find(edxn_vm_t *vm, const char *key) {
    for (size_t i = 0; i < EDXN_CFG_MAX_ENTRIES; i++)
        if (vm->cfg[i].used && strcmp(vm->cfg[i].key, key) == 0)
            return &vm->cfg[i];
    return NULL;
}

static edxn_cfg_entry_t *cfg_alloc(edxn_vm_t *vm) {
    for (size_t i = 0; i < EDXN_CFG_MAX_ENTRIES; i++)
        if (!vm->cfg[i].used) return &vm->cfg[i];
    return NULL;
}

edxn_error_t edxn_op_misc(edxn_vm_t *vm, uint8_t op,
                           const edxn_operand_t *a0, const edxn_operand_t *a1) {
    switch (op) {

    /* clrc (0x16) */
    case 0x16: vm->flags.c = false; return EDXN_OK;

    /* setc (0x17) */
    case 0x17: vm->flags.c = true; return EDXN_OK;

    /* nop (0x1C) */
    case 0x1C: return EDXN_OK;

    /* eoj (0x1D) */
    case 0x1D:
        if (a0->kind != EDXN_OP_NONE) {
            edxn_resolve_string(vm, a0, vm->job_status, sizeof(vm->job_status));
        }
        vm->halted = true;
        return EDXN_OK;

    /* push (0x1E) — TS: requireIntRegister or immediate. LE byte order. */
    case 0x1E: {
        if (a0->kind == EDXN_OP_IMM) {
            uint32_t val = (uint32_t)a0->u.imm.value;
            int w = a0->u.imm.width ? a0->u.imm.width : 4;
            for (int i = 0; i < w; i++) {
                edxn_error_t err = edxn_stack_push(&vm->data_stack, (uint8_t)(val & 0xFF));
                if (err != EDXN_OK) return err;
                val >>= 8;
            }
            return EDXN_OK;
        }
        if (a0->kind == EDXN_OP_REG) {
            int len = edxn_reg_byte_len(&a0->u.reg);
            int32_t val = edxn_reg_get_int(&vm->regs, &a0->u.reg);
            for (int i = 0; i < len; i++) {
                edxn_error_t err = edxn_stack_push(&vm->data_stack, (uint8_t)(val & 0xFF));
                if (err != EDXN_OK) return err;
                val >>= 8;
            }
            return EDXN_OK;
        }
        return EDXN_ERR_OPERAND;
    }

    /* pop (0x1F) — TS pop: read length bytes top-first, value=(value<<8)|byte */
    case 0x1F: {
        if (a0->kind != EDXN_OP_REG) return EDXN_ERR_OPERAND;
        int len = edxn_reg_byte_len(&a0->u.reg);
        int32_t val = 0;
        for (int i = 0; i < len; i++) {
            uint8_t b;
            edxn_error_t err = edxn_stack_pop(&vm->data_stack, &b);
            if (err != EDXN_OK) return err;
            val = (val << 8) | b;
        }
        edxn_reg_set_int(&vm->regs, &a0->u.reg, val);
        uint32_t mask = edxn_mask(len);
        uint32_t sm = edxn_sign_mask(len);
        uint32_t masked = (uint32_t)val & mask;
        vm->flags.z = (masked == 0);
        vm->flags.s = (masked & sm) != 0;
        vm->flags.v = false;
        return EDXN_OK;
    }

    /* clrv (0x4C) */
    case 0x4C: vm->flags.v = false; return EDXN_OK;

    /* break (0x4B) — TS: setError(BIP_0008). Soft error; here we raise hard
       unless trap mask is non-zero. */
    case 0x4B:
        if (vm->error_trap_mask) {
            vm->error_trap_bit_nr = 8;  /* approximate BIP_0008 */
            return EDXN_OK;
        }
        return EDXN_ERR_USER_BREAK;

    /* eerr (0x4D) — TS: throw if errorTrapBitNr >= 0 */
    case 0x4D:
        if (vm->error_trap_bit_nr >= 0) {
            return EDXN_ERR_TRAP;
        }
        return EDXN_OK;

    /* popf (0x4E) — TS: pop 4 bytes BE; bits C=1,Z=2,S=4,V=8 */
    case 0x4E: {
        if (vm->data_stack.depth < 4) return EDXN_ERR_STACK_UNDERFLOW;
        uint32_t value = 0;
        for (int i = 0; i < 4; i++) {
            uint8_t b;
            edxn_error_t err = edxn_stack_pop(&vm->data_stack, &b);
            if (err != EDXN_OK) return err;
            value = (value << 8) | b;
        }
        vm->flags.c = (value & 1) != 0;
        vm->flags.z = (value & 2) != 0;
        vm->flags.s = (value & 4) != 0;
        vm->flags.v = (value & 8) != 0;
        return EDXN_OK;
    }

    /* pushf (0x4F) — TS: push 4 bytes LSB-first; bits C=1,Z=2,S=4,V=8 */
    case 0x4F: {
        uint32_t value = 0;
        if (vm->flags.c) value |= 1;
        if (vm->flags.z) value |= 2;
        if (vm->flags.s) value |= 4;
        if (vm->flags.v) value |= 8;
        for (int i = 0; i < 4; i++) {
            edxn_error_t err = edxn_stack_push(&vm->data_stack, (uint8_t)(value & 0xFF));
            if (err != EDXN_OK) return err;
            value >>= 8;
        }
        return EDXN_OK;
    }

    /* atsp (0x50) — mirrors TS atsp(): index = offset - len, BE accumulate */
    case 0x50: {
        if (a0->kind != EDXN_OP_REG) return EDXN_ERR_OPERAND;
        int32_t offset = edxn_resolve_int(vm, a1);
        int len = edxn_reg_byte_len(&a0->u.reg);
        int32_t index = offset - len;
        int32_t val = 0;
        for (int i = 0; i < len; i++) {
            uint8_t b = 0;
            if (index + i >= 0)
                (void)edxn_stack_peek(&vm->data_stack, (size_t)(index + i), &b);
            val = (val << 8) | b;
        }
        edxn_reg_set_int(&vm->regs, &a0->u.reg, val);
        uint32_t mask = edxn_mask(len);
        uint32_t sm = edxn_sign_mask(len);
        uint32_t masked = (uint32_t)val & mask;
        vm->flags.z = (masked == 0);
        vm->flags.s = (masked & sm) != 0;
        vm->flags.v = false;
        return EDXN_OK;
    }

    /* setspc (0x52) — TS: separator is a STRING. Copy whole separator. */
    case 0x52: {
        char sep_buf[EDXN_TOKEN_SEP_MAX];
        size_t n = edxn_resolve_string(vm, a0, sep_buf, sizeof(sep_buf));
        memcpy(vm->token_sep, sep_buf, n);
        vm->token_sep[n] = '\0';
        vm->token_idx = edxn_resolve_int(vm, a1);
        return EDXN_OK;
    }

    /* parb/parw/parl (0x55-0x57) — TS parb: parseEdiabasInt + width mask.
       Flags: c=false, s=false, v=false, z=true iff empty. */
    case 0x55: case 0x56: case 0x57: {
        if (a0->kind != EDXN_OP_REG) return EDXN_ERR_OPERAND;
        int32_t idx = edxn_resolve_int(vm, a1) - 1;
        vm->flags.c = false; vm->flags.s = false; vm->flags.v = false;
        if (idx < 0 || (size_t)idx >= vm->params.count
            || vm->params.items[idx].len == 0) {
            edxn_reg_set_int(&vm->regs, &a0->u.reg, 0);
            vm->flags.z = true;
            return EDXN_OK;
        }
        edxn_param_t *p = &vm->params.items[idx];
        char tmp[256];
        size_t cplen = p->len < 255 ? p->len : 255;
        memcpy(tmp, p->data, cplen); tmp[cplen] = '\0';
        edxn_parse_int_t r = parse_ediabas_int(tmp);
        edxn_reg_set_int(&vm->regs, &a0->u.reg, r.value);
        vm->flags.z = false;
        return EDXN_OK;
    }

    /* pars (0x58) — string parameter */
    case 0x58: {
        if (a0->kind != EDXN_OP_REG || a0->u.reg.type != EDXN_REG_S) return EDXN_ERR_OPERAND;
        int32_t idx = edxn_resolve_int(vm, a1) - 1;
        if (idx >= 0 && (size_t)idx < vm->params.count) {
            edxn_param_t *p = &vm->params.items[idx];
            edxn_reg_set_s(&vm->regs, a0->u.reg.index, p->data, p->len);
            vm->flags.z = (p->len == 0);
        } else {
            edxn_reg_clear_s(&vm->regs, a0->u.reg.index);
            vm->flags.z = true;
        }
        return EDXN_OK;
    }

    /* pary (0x7F) — TS: write raw binary payload via setBinaryValue.
       z=true iff payload empty. */
    case 0x7F: {
        if (a0->kind != EDXN_OP_REG || a0->u.reg.type != EDXN_REG_S) return EDXN_ERR_OPERAND;
        edxn_reg_set_s(&vm->regs, a0->u.reg.index,
                        vm->param_binary, vm->param_binary_len);
        vm->flags.z = (vm->param_binary_len == 0);
        return EDXN_OK;
    }

    /* parn (0x80) — parameter count */
    case 0x80: {
        if (a0->kind != EDXN_OP_REG) return EDXN_ERR_OPERAND;
        edxn_reg_set_int(&vm->regs, &a0->u.reg, (int32_t)vm->params.count);
        int bw = edxn_reg_byte_len(&a0->u.reg);
        uint32_t mask = edxn_mask(bw);
        uint32_t sm = edxn_sign_mask(bw);
        uint32_t masked = (uint32_t)vm->params.count & mask;
        vm->flags.z = (masked == 0);
        vm->flags.s = (masked & sm) != 0;
        vm->flags.v = false;
        return EDXN_OK;
    }

    /* gettmr (0x43) — get error trap mask */
    case 0x43: {
        if (a0->kind != EDXN_OP_REG) return EDXN_ERR_OPERAND;
        edxn_reg_set_int(&vm->regs, &a0->u.reg, (int32_t)vm->error_trap_mask);
        return EDXN_OK;
    }

    /* settmr (0x44) — set error trap mask */
    case 0x44:
        vm->error_trap_mask = (uint32_t)edxn_resolve_int(vm, a0);
        return EDXN_OK;

    /* sett (0x45) — TS: set errorTrapBitNr (NOT the mask). 0 → 0x40000000. */
    case 0x45: {
        int32_t bit = edxn_resolve_int(vm, a0);
        if (bit == 0) bit = 0x40000000;
        vm->error_trap_bit_nr = bit;
        return EDXN_OK;
    }

    /* clrt (0x46) — clear errorTrapBitNr */
    case 0x46:
        vm->error_trap_bit_nr = -1;
        return EDXN_OK;

    /* a2fix (0x67) — TS: parseEdiabasInt-like parseConfigInt. */
    case 0x67: {
        if (a0->kind != EDXN_OP_REG) return EDXN_ERR_OPERAND;
        char sbuf[256];
        edxn_resolve_string(vm, a1, sbuf, sizeof(sbuf));
        edxn_parse_int_t r = parse_ediabas_int(sbuf);
        edxn_reg_set_int(&vm->regs, &a0->u.reg, r.value);
        vm->flags.z = (r.value == 0); vm->flags.s = false; vm->flags.v = false;
        return EDXN_OK;
    }

    /* fix2flt (0x68) */
    case 0x68: {
        if (a0->kind != EDXN_OP_REG || a0->u.reg.type != EDXN_REG_F) return EDXN_ERR_OPERAND;
        int len2 = edxn_operand_len(vm, a1, false);
        if (len2 < 1) len2 = 1;
        int32_t raw = edxn_resolve_int(vm, a1);
        uint32_t sm2 = edxn_sign_mask(len2);
        int32_t signed_val = ((uint32_t)raw & sm2) ? raw - (int32_t)(1u << (len2 * 8)) : raw;
        edxn_reg_set_f(&vm->regs, a0->u.reg.index, (double)signed_val);
        return EDXN_OK;
    }

    /* parr (0x69) — float parameter */
    case 0x69: {
        if (a0->kind != EDXN_OP_REG || a0->u.reg.type != EDXN_REG_F) return EDXN_ERR_OPERAND;
        int32_t idx = edxn_resolve_int(vm, a1) - 1;
        if (idx >= 0 && (size_t)idx < vm->params.count
            && vm->params.items[idx].len > 0) {
            edxn_param_t *p = &vm->params.items[idx];
            char tmp[256];
            size_t cplen = p->len < 255 ? p->len : 255;
            memcpy(tmp, p->data, cplen); tmp[cplen] = '\0';
            for (char *c = tmp; *c; c++) if (*c == ',') *c = '.';
            edxn_reg_set_f(&vm->regs, a0->u.reg.index, atof(tmp));
            vm->flags.c = false; vm->flags.s = false; vm->flags.v = false;
            vm->flags.z = false;
        } else {
            edxn_reg_set_f(&vm->regs, a0->u.reg.index, 0.0);
            vm->flags.c = false; vm->flags.s = false; vm->flags.v = false;
            vm->flags.z = true;
        }
        return EDXN_OK;
    }

    /* wait (0x6B) — TS: setTimeout(seconds * 1000) */
    case 0x6B: {
        int32_t secs = edxn_resolve_int(vm, a0);
        if (secs > 0) usleep((useconds_t)secs * 1000000);
        return EDXN_OK;
    }

    /* getdate (0x6C) — TS: [day, month, year%100, weekOfYear, dayOfWeek (Mon=1..Sun=7)] */
    case 0x6C: {
        time_t now_t = time(NULL);
        struct tm now;
        localtime_r(&now_t, &now);
        int dow = now.tm_wday;  /* 0=Sun..6=Sat */
        if (dow == 0) dow = 7;  /* TS: Sun=7 */
        uint8_t bytes[5] = {
            (uint8_t)(now.tm_mday & 0xFF),
            (uint8_t)((now.tm_mon + 1) & 0xFF),
            (uint8_t)((now.tm_year % 100) & 0xFF),
            (uint8_t)(iso_week_of_year(&now) & 0xFF),
            (uint8_t)(dow & 0xFF),
        };
        write_byte_array(vm, a0, bytes, 5);
        return EDXN_OK;
    }

    /* gettime (0x6D) — TS: [hour, minute, second] */
    case 0x6D: {
        time_t now_t = time(NULL);
        struct tm now;
        localtime_r(&now_t, &now);
        uint8_t bytes[3] = {
            (uint8_t)(now.tm_hour & 0xFF),
            (uint8_t)(now.tm_min & 0xFF),
            (uint8_t)(now.tm_sec & 0xFF),
        };
        write_byte_array(vm, a0, bytes, 3);
        return EDXN_OK;
    }

    /* setfprec (0x88) */
    case 0x88:
        vm->float_precision = edxn_resolve_int(vm, a0);
        return EDXN_OK;

    /* cfgig (0x89) — config get int */
    case 0x89: {
        if (a0->kind != EDXN_OP_REG) return EDXN_ERR_OPERAND;
        char key[EDXN_CFG_KEY_MAX];
        edxn_resolve_string(vm, a1, key, sizeof(key));
        str_upper(key);
        edxn_cfg_entry_t *e = cfg_find(vm, key);
        if (e) {
            edxn_parse_int_t r = parse_ediabas_int(e->value);
            edxn_reg_set_int(&vm->regs, &a0->u.reg, r.value);
        } else {
            edxn_reg_set_int(&vm->regs, &a0->u.reg, 0);
        }
        return EDXN_OK;
    }

    /* cfgsg (0x8A) — config get string */
    case 0x8A: {
        if (a0->kind != EDXN_OP_REG || a0->u.reg.type != EDXN_REG_S) return EDXN_ERR_OPERAND;
        char key[EDXN_CFG_KEY_MAX];
        edxn_resolve_string(vm, a1, key, sizeof(key));
        str_upper(key);
        edxn_cfg_entry_t *e = cfg_find(vm, key);
        if (e) {
            edxn_reg_set_s(&vm->regs, a0->u.reg.index,
                            (const uint8_t *)e->value, strlen(e->value));
        } else {
            edxn_reg_clear_s(&vm->regs, a0->u.reg.index);
        }
        return EDXN_OK;
    }

    /* cfgis (0x8B) — config set int (value as string) */
    case 0x8B: {
        char key[EDXN_CFG_KEY_MAX];
        edxn_resolve_string(vm, a0, key, sizeof(key));
        str_upper(key);
        int32_t val = edxn_resolve_int(vm, a1);
        edxn_cfg_entry_t *e = cfg_find(vm, key);
        if (!e) e = cfg_alloc(vm);
        if (e) {
            strncpy(e->key, key, EDXN_CFG_KEY_MAX - 1); e->key[EDXN_CFG_KEY_MAX - 1] = '\0';
            snprintf(e->value, EDXN_CFG_VAL_MAX, "%d", val);
            e->used = true;
        }
        return EDXN_OK;
    }

    /* shmset (0x93) — shared memory set */
    case 0x93: {
        char key[EDXN_SHM_KEY_MAX];
        edxn_resolve_string(vm, a0, key, sizeof(key));
        str_upper(key);
        size_t vlen;
        const uint8_t *vbuf = edxn_resolve_binary(vm, a1, &vlen);
        edxn_shm_entry_t *e = shm_find(vm, key);
        if (!e) e = shm_alloc(vm);
        if (e) {
            strncpy(e->key, key, EDXN_SHM_KEY_MAX - 1); e->key[EDXN_SHM_KEY_MAX - 1] = '\0';
            if (vlen > EDXN_SHM_VAL_MAX) vlen = EDXN_SHM_VAL_MAX;
            if (vbuf && vlen > 0) memcpy(e->value, vbuf, vlen);
            e->value_len = vlen;
            e->used = true;
        }
        return EDXN_OK;
    }

    /* shmget (0x94) — shared memory get; c=true iff key missing */
    case 0x94: {
        if (a0->kind != EDXN_OP_REG || a0->u.reg.type != EDXN_REG_S) return EDXN_ERR_OPERAND;
        char key[EDXN_SHM_KEY_MAX];
        edxn_resolve_string(vm, a1, key, sizeof(key));
        str_upper(key);
        edxn_shm_entry_t *e = shm_find(vm, key);
        if (e) {
            edxn_reg_set_s(&vm->regs, a0->u.reg.index, e->value, e->value_len);
            vm->flags.c = false;
        } else {
            edxn_reg_clear_s(&vm->regs, a0->u.reg.index);
            vm->flags.c = true;
        }
        return EDXN_OK;
    }

    /* flt2fix (0x96) */
    case 0x96: {
        if (a0->kind != EDXN_OP_REG) return EDXN_ERR_OPERAND;
        double fv = edxn_resolve_float(vm, a1);
        int32_t trunc_val = (int32_t)fv;
        edxn_reg_set_int(&vm->regs, &a0->u.reg, trunc_val);
        uint32_t v32 = (uint32_t)trunc_val;
        vm->flags.z = (v32 == 0);
        vm->flags.s = (v32 & 0x80000000u) != 0;
        return EDXN_OK;
    }

    /* iupdate (0x97) */
    case 0x97:
        edxn_resolve_string(vm, a0, vm->progress_text, sizeof(vm->progress_text));
        return EDXN_OK;

    /* irange (0x98) */
    case 0x98:
        vm->progress_range = edxn_resolve_int(vm, a0);
        vm->progress_pos = -1;
        return EDXN_OK;

    /* iincpos (0x99) */
    case 0x99: {
        int inc = edxn_resolve_int(vm, a0);
        if (vm->progress_pos < 0) vm->progress_pos = inc;
        else vm->progress_pos += inc;
        if (vm->progress_pos > vm->progress_range) vm->progress_pos = vm->progress_range;
        return EDXN_OK;
    }

    /* flt2y4 (0x9B) — IEEE 754 single → 4 LE bytes at indexed dest */
    case 0x9B: {
        if (a0->kind != EDXN_OP_INDEXED) return EDXN_ERR_OPERAND;
        double dv = edxn_resolve_float(vm, a1);
        float f = (float)dv;
        uint8_t bytes[4];
        memcpy(bytes, &f, 4);  /* host LE assumed (x86/arm) */
        edxn_write_binary(vm, a0, bytes, 4);
        return EDXN_OK;
    }

    /* flt2y8 (0x9C) — IEEE 754 double → 8 LE bytes at indexed dest */
    case 0x9C: {
        if (a0->kind != EDXN_OP_INDEXED) return EDXN_ERR_OPERAND;
        double dv = edxn_resolve_float(vm, a1);
        uint8_t bytes[8];
        memcpy(bytes, &dv, 8);
        edxn_write_binary(vm, a0, bytes, 8);
        return EDXN_OK;
    }

    /* y42flt (0x9D) — 4 LE bytes → IEEE 754 single → F register */
    case 0x9D: {
        if (a0->kind != EDXN_OP_REG || a0->u.reg.type != EDXN_REG_F) return EDXN_ERR_OPERAND;
        size_t blen;
        const uint8_t *bytes = edxn_resolve_binary(vm, a1, &blen);
        if (!bytes || blen < 4) return EDXN_ERR_OPERAND;
        float f;
        memcpy(&f, bytes, 4);
        edxn_reg_set_f(&vm->regs, a0->u.reg.index, (double)f);
        return EDXN_OK;
    }

    /* y82flt (0x9E) — 8 LE bytes → IEEE 754 double → F register */
    case 0x9E: {
        if (a0->kind != EDXN_OP_REG || a0->u.reg.type != EDXN_REG_F) return EDXN_ERR_OPERAND;
        size_t blen;
        const uint8_t *bytes = edxn_resolve_binary(vm, a1, &blen);
        if (!bytes || blen < 8) return EDXN_ERR_OPERAND;
        double d;
        memcpy(&d, bytes, 8);
        edxn_reg_set_f(&vm->regs, a0->u.reg.index, d);
        return EDXN_OK;
    }

    /* ticks (0xAD) — TS: Date.now() & 0xffffffff */
    case 0xAD: {
        if (a0->kind != EDXN_OP_REG) return EDXN_ERR_OPERAND;
        struct timespec ts;
        clock_gettime(CLOCK_REALTIME, &ts);
        uint64_t ms = (uint64_t)ts.tv_sec * 1000 + (uint64_t)ts.tv_nsec / 1000000;
        edxn_reg_set_int(&vm->regs, &a0->u.reg, (int32_t)(ms & 0xFFFFFFFF));
        return EDXN_OK;
    }

    /* ssize (0xB5) */
    case 0xB5:
        edxn_write_int(vm, a0, EDXN_ARRAY_MAX_SIZE + 1);
        return EDXN_OK;

    /* ppop (0xA4) */
    case 0xA4:
        if (a0->kind == EDXN_OP_REG) edxn_reg_set_int(&vm->regs, &a0->u.reg, 0);
        vm->flags.z = true; vm->flags.s = false;
        return EDXN_OK;

    /* ppopflt (0xA6) */
    case 0xA6:
        if (a0->kind == EDXN_OP_REG && a0->u.reg.type == EDXN_REG_F)
            edxn_reg_set_f(&vm->regs, a0->u.reg.index, 0.0);
        vm->flags.v = false;
        return EDXN_OK;

    /* ppopy (0xA8) */
    case 0xA8:
        if (a0->kind == EDXN_OP_REG && a0->u.reg.type == EDXN_REG_S)
            edxn_reg_clear_s(&vm->regs, a0->u.reg.index);
        return EDXN_OK;

    /* generr (0xAC) — TS: validate range [250, 470], throw EdiabasError */
    case 0xAC: {
        int32_t code = edxn_resolve_int(vm, a0);
        if (code < 250 || code > 470) return EDXN_ERR_OPERAND;
        vm->error_trap_bit_nr = code;
        return EDXN_ERR_GENERR;
    }

    /* waitex (0xAE) — TS: setTimeout(ms) */
    case 0xAE: {
        int32_t ms = edxn_resolve_int(vm, a0);
        if (ms > 0) usleep((useconds_t)ms * 1000);
        return EDXN_OK;
    }

    /* File I/O — basic stdio-backed implementation. */

    /* fclose (0x59) — TS: filesystem.close(handle) */
    case 0x59: {
        int32_t h = edxn_resolve_int(vm, a0);
        if (h >= 0 && h < EDXN_MAX_FILES && vm->files[h].used) {
            fclose(vm->files[h].fp);
            vm->files[h].fp = NULL;
            vm->files[h].used = false;
        }
        return EDXN_OK;
    }

    /* fopen (0x60) — destination = handle (-1 on failure). z=handle==0, s=neg */
    case 0x60: {
        if (a0->kind != EDXN_OP_REG) return EDXN_ERR_OPERAND;
        char path[512];
        edxn_resolve_string(vm, a1, path, sizeof(path));
        int h = -1;
        for (int i = 0; i < EDXN_MAX_FILES; i++) {
            if (!vm->files[i].used) {
                FILE *fp = fopen(path, "rb");
                if (fp) {
                    vm->files[i].fp = fp;
                    vm->files[i].used = true;
                    h = i;
                }
                break;
            }
        }
        edxn_reg_set_int(&vm->regs, &a0->u.reg, h);
        uint32_t masked = (uint32_t)h & 0xFF;
        vm->flags.z = (masked == 0);
        vm->flags.s = (masked & 0x80) != 0;
        return EDXN_OK;
    }

    /* fread (0x61) — read one byte; c=true on EOF/error */
    case 0x61: {
        if (a0->kind != EDXN_OP_REG) return EDXN_ERR_OPERAND;
        int32_t h = edxn_resolve_int(vm, a1);
        int byte = -1;
        if (h >= 0 && h < EDXN_MAX_FILES && vm->files[h].used) {
            byte = fgetc(vm->files[h].fp);
        }
        if (byte < 0) {
            edxn_reg_set_int(&vm->regs, &a0->u.reg, 0);
            vm->flags.c = true;
        } else {
            edxn_reg_set_int(&vm->regs, &a0->u.reg, byte);
            vm->flags.c = false;
        }
        return EDXN_OK;
    }

    /* freadln (0x62) — read line; c=true on EOF */
    case 0x62: {
        if (a0->kind != EDXN_OP_REG || a0->u.reg.type != EDXN_REG_S) return EDXN_ERR_OPERAND;
        int32_t h = edxn_resolve_int(vm, a1);
        if (h < 0 || h >= EDXN_MAX_FILES || !vm->files[h].used) {
            edxn_reg_clear_s(&vm->regs, a0->u.reg.index);
            vm->flags.c = true;
            return EDXN_OK;
        }
        uint8_t buf[EDXN_S_REG_MAXLEN];
        size_t n = 0;
        bool any = false;
        int c;
        while (n < sizeof(buf) && (c = fgetc(vm->files[h].fp)) != EOF) {
            any = true;
            if (c == '\n') break;
            if (c != '\r') buf[n++] = (uint8_t)c;
        }
        if (!any) {
            edxn_reg_clear_s(&vm->regs, a0->u.reg.index);
            vm->flags.c = true;
        } else {
            edxn_reg_set_s(&vm->regs, a0->u.reg.index, buf, n);
            vm->flags.c = false;
        }
        return EDXN_OK;
    }

    /* fseek (0x63) — seek from start by byte offset */
    case 0x63: {
        int32_t h = edxn_resolve_int(vm, a0);
        int32_t off = edxn_resolve_int(vm, a1);
        if (h >= 0 && h < EDXN_MAX_FILES && vm->files[h].used)
            fseek(vm->files[h].fp, off, SEEK_SET);
        return EDXN_OK;
    }

    /* fseekln (0x64) — seek to line N */
    case 0x64: {
        int32_t h = edxn_resolve_int(vm, a0);
        int32_t line = edxn_resolve_int(vm, a1);
        if (h >= 0 && h < EDXN_MAX_FILES && vm->files[h].used) {
            fseek(vm->files[h].fp, 0, SEEK_SET);
            for (int32_t i = 0; i < line; i++) {
                int c;
                bool any = false;
                while ((c = fgetc(vm->files[h].fp)) != EOF) {
                    any = true;
                    if (c == '\n') break;
                }
                if (!any) break;
            }
        }
        return EDXN_OK;
    }

    /* ftell (0x65) — byte offset */
    case 0x65: {
        if (a0->kind != EDXN_OP_REG) return EDXN_ERR_OPERAND;
        int32_t h = edxn_resolve_int(vm, a1);
        long pos = 0;
        if (h >= 0 && h < EDXN_MAX_FILES && vm->files[h].used)
            pos = ftell(vm->files[h].fp);
        edxn_reg_set_int(&vm->regs, &a0->u.reg, (int32_t)pos);
        return EDXN_OK;
    }

    /* ftellln (0x66) — line count from start (re-scans) */
    case 0x66: {
        if (a0->kind != EDXN_OP_REG) return EDXN_ERR_OPERAND;
        int32_t h = edxn_resolve_int(vm, a1);
        int32_t lines = 0;
        if (h >= 0 && h < EDXN_MAX_FILES && vm->files[h].used) {
            long save = ftell(vm->files[h].fp);
            fseek(vm->files[h].fp, 0, SEEK_SET);
            int c;
            while ((c = fgetc(vm->files[h].fp)) != EOF && ftell(vm->files[h].fp) <= save) {
                if (c == '\n') lines++;
            }
            fseek(vm->files[h].fp, save, SEEK_SET);
        }
        edxn_reg_set_int(&vm->regs, &a0->u.reg, lines);
        return EDXN_OK;
    }

    default:
        return EDXN_ERR_ILLEGAL_OPCODE;
    }
}
