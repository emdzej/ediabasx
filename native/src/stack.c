#include "ediabasx/stack.h"

void edxn_stack_reset(edxn_data_stack_t *s) {
    s->depth = 0;
}

edxn_error_t edxn_stack_push(edxn_data_stack_t *s, uint8_t val) {
    if (s->depth >= EDXN_STACK_MAX)
        return EDXN_ERR_STACK_OVERFLOW;
    s->data[s->depth++] = val;
    return EDXN_OK;
}

edxn_error_t edxn_stack_pop(edxn_data_stack_t *s, uint8_t *val) {
    if (s->depth == 0)
        return EDXN_ERR_STACK_UNDERFLOW;
    *val = s->data[--s->depth];
    return EDXN_OK;
}

edxn_error_t edxn_stack_peek(const edxn_data_stack_t *s, size_t offset, uint8_t *val) {
    if (offset >= s->depth)
        return EDXN_ERR_STACK_UNDERFLOW;
    *val = s->data[s->depth - 1 - offset];
    return EDXN_OK;
}

edxn_error_t edxn_stack_swap(edxn_data_stack_t *s) {
    if (s->depth < 2)
        return EDXN_ERR_STACK_UNDERFLOW;
    uint8_t tmp = s->data[s->depth - 1];
    s->data[s->depth - 1] = s->data[s->depth - 2];
    s->data[s->depth - 2] = tmp;
    return EDXN_OK;
}

void edxn_call_reset(edxn_call_stack_t *s) {
    s->depth = 0;
}

edxn_error_t edxn_call_push(edxn_call_stack_t *s, uint32_t addr) {
    if (s->depth >= EDXN_CALL_STACK_MAX)
        return EDXN_ERR_STACK_OVERFLOW;
    s->addrs[s->depth++] = addr;
    return EDXN_OK;
}

edxn_error_t edxn_call_pop(edxn_call_stack_t *s, uint32_t *addr) {
    if (s->depth == 0)
        return EDXN_ERR_STACK_UNDERFLOW;
    *addr = s->addrs[--s->depth];
    return EDXN_OK;
}
