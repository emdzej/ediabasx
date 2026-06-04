#ifndef EDXN_REGISTERS_H
#define EDXN_REGISTERS_H

#include "types.h"

/*
 * BEST/2 register model.
 *
 * B/A/I/L alias a single 32-byte buffer (little-endian):
 *   B[n]  → byte[n]              n = 0..15
 *   A[n]  → byte[n + 16]         n = 0..15
 *   I[n]  → byte[n*2 .. n*2+1]   n = 0..15  (I8..IF overlap A0..AF)
 *   L[n]  → byte[n*4 .. n*4+3]   n = 0..7   (L4..L7 overlap A0..AF)
 *
 * S registers: 16 binary buffers, each up to EDXN_S_REG_MAXLEN bytes.
 * F registers: 8 double-precision floats, independent of the byte buffer.
 */

typedef struct {
    uint8_t  bytes[EDXN_NUM_REG_BYTES];
    uint8_t  s[EDXN_S_REG_COUNT][EDXN_S_REG_MAXLEN];
    size_t   s_len[EDXN_S_REG_COUNT];
    double   f[EDXN_F_REG_COUNT];
} edxn_registers_t;

void     edxn_reg_reset(edxn_registers_t *r);

uint8_t  edxn_reg_get_b(const edxn_registers_t *r, int idx);
void     edxn_reg_set_b(edxn_registers_t *r, int idx, uint8_t val);

uint8_t  edxn_reg_get_a(const edxn_registers_t *r, int idx);
void     edxn_reg_set_a(edxn_registers_t *r, int idx, uint8_t val);

uint16_t edxn_reg_get_i(const edxn_registers_t *r, int idx);
void     edxn_reg_set_i(edxn_registers_t *r, int idx, uint16_t val);

uint32_t edxn_reg_get_l(const edxn_registers_t *r, int idx);
void     edxn_reg_set_l(edxn_registers_t *r, int idx, uint32_t val);

const uint8_t *edxn_reg_get_s(const edxn_registers_t *r, int idx, size_t *len);
void           edxn_reg_set_s(edxn_registers_t *r, int idx, const uint8_t *data, size_t len);
void           edxn_reg_clear_s(edxn_registers_t *r, int idx);

double   edxn_reg_get_f(const edxn_registers_t *r, int idx);
void     edxn_reg_set_f(edxn_registers_t *r, int idx, double val);

#endif
