#ifndef EDIABASX_UTILS_H
#define EDIABASX_UTILS_H

#include <stdint.h>

static inline uint16_t edxn_read_u16_le(const uint8_t *p) {
    return (uint16_t)p[0] | ((uint16_t)p[1] << 8);
}

static inline uint32_t edxn_read_u32_le(const uint8_t *p) {
    return (uint32_t)p[0]
         | ((uint32_t)p[1] << 8)
         | ((uint32_t)p[2] << 16)
         | ((uint32_t)p[3] << 24);
}

static inline int32_t edxn_read_i16_le(const uint8_t *p) {
    return (int16_t)edxn_read_u16_le(p);
}

static inline int32_t edxn_read_i32_le(const uint8_t *p) {
    return (int32_t)edxn_read_u32_le(p);
}

#endif
