#ifndef EDXN_STACK_H
#define EDXN_STACK_H

#include "types.h"

typedef struct {
    uint8_t data[EDXN_STACK_MAX];
    size_t  depth;
} edxn_data_stack_t;

typedef struct {
    uint32_t addrs[EDXN_CALL_STACK_MAX];
    size_t   depth;
} edxn_call_stack_t;

void         edxn_stack_reset(edxn_data_stack_t *s);
edxn_error_t edxn_stack_push(edxn_data_stack_t *s, uint8_t val);
edxn_error_t edxn_stack_pop(edxn_data_stack_t *s, uint8_t *val);
edxn_error_t edxn_stack_peek(const edxn_data_stack_t *s, size_t offset, uint8_t *val);
edxn_error_t edxn_stack_swap(edxn_data_stack_t *s);

void         edxn_call_reset(edxn_call_stack_t *s);
edxn_error_t edxn_call_push(edxn_call_stack_t *s, uint32_t addr);
edxn_error_t edxn_call_pop(edxn_call_stack_t *s, uint32_t *addr);

#endif
