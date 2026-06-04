#ifndef EDXN_FLAGS_H
#define EDXN_FLAGS_H

#include "types.h"

typedef struct {
    bool z;  /* zero    */
    bool c;  /* carry   */
    bool v;  /* overflow */
    bool s;  /* sign    */
} edxn_flags_t;

void edxn_flags_reset(edxn_flags_t *f);
void edxn_flags_update_zs(edxn_flags_t *f, uint32_t value, int byte_len);
void edxn_flags_update_sub(edxn_flags_t *f, uint32_t a, uint32_t b, int byte_len);
void edxn_flags_update_add(edxn_flags_t *f, uint32_t a, uint32_t b, int byte_len);

#endif
