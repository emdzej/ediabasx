#include "ediabasx/flags.h"

void edxn_flags_reset(edxn_flags_t *f) {
    f->z = false;
    f->c = false;
    f->v = false;
    f->s = false;
}

static uint32_t mask_for_len(int byte_len) {
    return byte_len >= 4 ? 0xFFFFFFFFu : ((1u << (byte_len * 8)) - 1u);
}

static uint32_t sign_mask_for_len(int byte_len) {
    return 1u << (byte_len * 8 - 1);
}

void edxn_flags_update_zs(edxn_flags_t *f, uint32_t value, int byte_len) {
    uint32_t mask = mask_for_len(byte_len);
    uint32_t sm   = sign_mask_for_len(byte_len);
    uint32_t v    = value & mask;
    f->z = (v == 0);
    f->s = (v & sm) != 0;
}

void edxn_flags_update_sub(edxn_flags_t *f, uint32_t a, uint32_t b, int byte_len) {
    uint32_t mask = mask_for_len(byte_len);
    uint32_t sm   = sign_mask_for_len(byte_len);
    uint32_t result = (a - b) & mask;

    f->z = (result == 0);
    f->s = (result & sm) != 0;
    f->c = (a < b);

    bool a_sign = (a & sm) != 0;
    bool b_sign = (b & sm) != 0;
    bool r_sign = (result & sm) != 0;
    f->v = (a_sign != b_sign) && (r_sign != a_sign);
}

void edxn_flags_update_add(edxn_flags_t *f, uint32_t a, uint32_t b, int byte_len) {
    uint32_t mask = mask_for_len(byte_len);
    uint32_t sm   = sign_mask_for_len(byte_len);
    uint32_t sum  = a + b;
    uint32_t result = sum & mask;

    f->z = (result == 0);
    f->s = (result & sm) != 0;
    f->c = (sum > mask);

    bool a_sign = (a & sm) != 0;
    bool b_sign = (b & sm) != 0;
    bool r_sign = (result & sm) != 0;
    f->v = (a_sign == b_sign) && (r_sign != a_sign);
}
