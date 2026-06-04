#include "ediabasx/registers.h"
#include <string.h>

void edxn_reg_reset(edxn_registers_t *r) {
    memset(r->bytes, 0, EDXN_NUM_REG_BYTES);
    for (int i = 0; i < EDXN_S_REG_COUNT; i++) {
        memset(r->s[i], 0, EDXN_S_REG_MAXLEN);
        r->s_len[i] = 0;
    }
    for (int i = 0; i < EDXN_F_REG_COUNT; i++) {
        r->f[i] = 0.0;
    }
}

uint8_t edxn_reg_get_b(const edxn_registers_t *r, int idx) {
    return r->bytes[idx];
}

void edxn_reg_set_b(edxn_registers_t *r, int idx, uint8_t val) {
    r->bytes[idx] = val;
}

uint8_t edxn_reg_get_a(const edxn_registers_t *r, int idx) {
    return r->bytes[idx + 16];
}

void edxn_reg_set_a(edxn_registers_t *r, int idx, uint8_t val) {
    r->bytes[idx + 16] = val;
}

uint16_t edxn_reg_get_i(const edxn_registers_t *r, int idx) {
    int off = idx * 2;
    return (uint16_t)r->bytes[off] | ((uint16_t)r->bytes[off + 1] << 8);
}

void edxn_reg_set_i(edxn_registers_t *r, int idx, uint16_t val) {
    int off = idx * 2;
    r->bytes[off]     = (uint8_t)(val & 0xFF);
    r->bytes[off + 1] = (uint8_t)(val >> 8);
}

uint32_t edxn_reg_get_l(const edxn_registers_t *r, int idx) {
    int off = idx * 4;
    return (uint32_t)r->bytes[off]
         | ((uint32_t)r->bytes[off + 1] << 8)
         | ((uint32_t)r->bytes[off + 2] << 16)
         | ((uint32_t)r->bytes[off + 3] << 24);
}

void edxn_reg_set_l(edxn_registers_t *r, int idx, uint32_t val) {
    int off = idx * 4;
    r->bytes[off]     = (uint8_t)(val & 0xFF);
    r->bytes[off + 1] = (uint8_t)((val >> 8) & 0xFF);
    r->bytes[off + 2] = (uint8_t)((val >> 16) & 0xFF);
    r->bytes[off + 3] = (uint8_t)((val >> 24) & 0xFF);
}

const uint8_t *edxn_reg_get_s(const edxn_registers_t *r, int idx, size_t *len) {
    *len = r->s_len[idx];
    return r->s[idx];
}

void edxn_reg_set_s(edxn_registers_t *r, int idx, const uint8_t *data, size_t len) {
    if (len > EDXN_S_REG_MAXLEN)
        len = EDXN_S_REG_MAXLEN;
    memcpy(r->s[idx], data, len);
    r->s_len[idx] = len;
}

void edxn_reg_clear_s(edxn_registers_t *r, int idx) {
    memset(r->s[idx], 0, EDXN_S_REG_MAXLEN);
    r->s_len[idx] = 0;
}

double edxn_reg_get_f(const edxn_registers_t *r, int idx) {
    return r->f[idx];
}

void edxn_reg_set_f(edxn_registers_t *r, int idx, double val) {
    r->f[idx] = val;
}
