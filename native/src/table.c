#include "ediabasx/table.h"
#include <string.h>
#include <stdlib.h>
#include <ctype.h>

/* Walk XOR-decoded NUL-terminated strings from column_offset.
   Returns pointer to the string at (row, col), or NULL on OOB. */
static const char *walk_to_cell(const edxn_prg_table_t *tbl,
                                 const uint8_t *decoded, int row, int col) {
    if (col < 0 || col >= tbl->columns) return NULL;
    if (row < 0 || row > tbl->rows)     return NULL;  /* row 0 = header */

    size_t target = (size_t)row * tbl->columns + (size_t)col;
    size_t off = tbl->column_offset;
    size_t cell = 0;

    while (cell < target) {
        while (decoded[off] != 0) off++;
        off++;  /* skip NUL */
        cell++;
    }

    return (const char *)(decoded + off);
}

int edxn_table_find_column(const edxn_prg_table_t *tbl,
                            const uint8_t *decoded, const char *name) {
    for (int col = 0; col < tbl->columns; col++) {
        const char *hdr = walk_to_cell(tbl, decoded, 0, col);
        if (!hdr) continue;
        /* Case-insensitive compare */
        const char *a = hdr;
        const char *b = name;
        while (*a && *b && toupper((unsigned char)*a) == toupper((unsigned char)*b)) {
            a++;
            b++;
        }
        if (*a == '\0' && *b == '\0')
            return col;
    }
    return -1;
}

const char *edxn_table_get_cell(const edxn_prg_table_t *tbl,
                                 const uint8_t *decoded, int row, int col) {
    return walk_to_cell(tbl, decoded, row, col);
}

int edxn_table_seek(const edxn_prg_table_t *tbl, const uint8_t *decoded,
                     int col, const char *value) {
    for (int row = 1; row <= tbl->rows; row++) {
        const char *cell = walk_to_cell(tbl, decoded, row, col);
        if (!cell) continue;
        const char *a = cell;
        const char *b = value;
        while (*a && *b && toupper((unsigned char)*a) == toupper((unsigned char)*b)) {
            a++; b++;
        }
        if (*a == '\0' && *b == '\0')
            return row;
    }
    return -1;
}

int edxn_table_seek_u(const edxn_prg_table_t *tbl, const uint8_t *decoded,
                       int col, uint32_t value) {
    for (int row = 1; row <= tbl->rows; row++) {
        const char *cell = walk_to_cell(tbl, decoded, row, col);
        if (!cell) continue;
        uint32_t cell_val = (uint32_t)strtoul(cell, NULL, 0);
        if (cell_val == value)
            return row;
    }
    return -1;
}
