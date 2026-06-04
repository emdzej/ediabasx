#ifndef EDXN_RESULT_H
#define EDXN_RESULT_H

#include "types.h"

edxn_error_t edxn_result_init(edxn_result_set_t *set, size_t initial_cap);
void         edxn_result_clear(edxn_result_set_t *set);
void         edxn_result_free(edxn_result_set_t *set);

edxn_error_t edxn_result_add_int(edxn_result_set_t *set, const char *name,
                                  edxn_result_type_t type, int64_t val);
edxn_error_t edxn_result_add_float(edxn_result_set_t *set, const char *name,
                                    double val);
edxn_error_t edxn_result_add_binary(edxn_result_set_t *set, const char *name,
                                     edxn_result_type_t type,
                                     const uint8_t *data, size_t len);

const edxn_result_entry_t *edxn_result_find(const edxn_result_set_t *set,
                                             const char *name);

#endif
