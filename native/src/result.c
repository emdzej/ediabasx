#include "ediabasx/result.h"
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

edxn_error_t edxn_result_init(edxn_result_set_t *set, size_t initial_cap) {
    if (initial_cap == 0)
        initial_cap = 16;
    set->entries = (edxn_result_entry_t *)calloc(initial_cap, sizeof(edxn_result_entry_t));
    if (!set->entries)
        return EDXN_ERR_NOMEM;
    set->count    = 0;
    set->capacity = initial_cap;
    return EDXN_OK;
}

void edxn_result_clear(edxn_result_set_t *set) {
    for (size_t i = 0; i < set->count; i++) {
        edxn_result_entry_t *e = &set->entries[i];
        if ((e->type == EDXN_TYPE_STRING || e->type == EDXN_TYPE_BINARY) && e->value.bin.data) {
            free(e->value.bin.data);
            e->value.bin.data = NULL;
        }
    }
    set->count = 0;
}

void edxn_result_free(edxn_result_set_t *set) {
    edxn_result_clear(set);
    free(set->entries);
    set->entries  = NULL;
    set->capacity = 0;
}

static edxn_error_t ensure_capacity(edxn_result_set_t *set) {
    if (set->count < set->capacity)
        return EDXN_OK;
    size_t new_cap = set->capacity * 2;
    edxn_result_entry_t *p = (edxn_result_entry_t *)realloc(
        set->entries, new_cap * sizeof(edxn_result_entry_t));
    if (!p)
        return EDXN_ERR_NOMEM;
    set->entries  = p;
    set->capacity = new_cap;
    return EDXN_OK;
}

static void set_name_upper(char *dst, const char *src, size_t max) {
    size_t i;
    for (i = 0; i < max - 1 && src[i]; i++)
        dst[i] = (char)toupper((unsigned char)src[i]);
    dst[i] = '\0';
}

static edxn_result_entry_t *find_or_add(edxn_result_set_t *set, const char *name) {
    char upper[EDXN_MAX_RESULT_NAME];
    set_name_upper(upper, name, EDXN_MAX_RESULT_NAME);

    for (size_t i = 0; i < set->count; i++) {
        if (strcmp(set->entries[i].name, upper) == 0)
            return &set->entries[i];
    }

    if (ensure_capacity(set) != EDXN_OK)
        return NULL;

    edxn_result_entry_t *e = &set->entries[set->count++];
    memset(e, 0, sizeof(*e));
    memcpy(e->name, upper, EDXN_MAX_RESULT_NAME);
    return e;
}

edxn_error_t edxn_result_add_int(edxn_result_set_t *set, const char *name,
                                  edxn_result_type_t type, int64_t val) {
    edxn_result_entry_t *e = find_or_add(set, name);
    if (!e) return EDXN_ERR_NOMEM;
    if ((e->type == EDXN_TYPE_STRING || e->type == EDXN_TYPE_BINARY) && e->value.bin.data)
        free(e->value.bin.data);
    e->type    = type;
    e->value.i = val;
    return EDXN_OK;
}

edxn_error_t edxn_result_add_float(edxn_result_set_t *set, const char *name,
                                    double val) {
    edxn_result_entry_t *e = find_or_add(set, name);
    if (!e) return EDXN_ERR_NOMEM;
    if ((e->type == EDXN_TYPE_STRING || e->type == EDXN_TYPE_BINARY) && e->value.bin.data)
        free(e->value.bin.data);
    e->type    = EDXN_TYPE_FLOAT;
    e->value.f = val;
    return EDXN_OK;
}

edxn_error_t edxn_result_add_binary(edxn_result_set_t *set, const char *name,
                                     edxn_result_type_t type,
                                     const uint8_t *data, size_t len) {
    edxn_result_entry_t *e = find_or_add(set, name);
    if (!e) return EDXN_ERR_NOMEM;
    if ((e->type == EDXN_TYPE_STRING || e->type == EDXN_TYPE_BINARY) && e->value.bin.data)
        free(e->value.bin.data);
    e->type = type;
    e->value.bin.data = (uint8_t *)malloc(len);
    if (!e->value.bin.data && len > 0)
        return EDXN_ERR_NOMEM;
    if (len > 0)
        memcpy(e->value.bin.data, data, len);
    e->value.bin.len = len;
    return EDXN_OK;
}

const edxn_result_entry_t *edxn_result_find(const edxn_result_set_t *set,
                                             const char *name) {
    char upper[EDXN_MAX_RESULT_NAME];
    set_name_upper(upper, name, EDXN_MAX_RESULT_NAME);
    for (size_t i = 0; i < set->count; i++) {
        if (strcmp(set->entries[i].name, upper) == 0)
            return &set->entries[i];
    }
    return NULL;
}
