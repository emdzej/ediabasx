#ifndef EDXN_TABLE_H
#define EDXN_TABLE_H

#include "types.h"
#include "prg.h"

/* Find column index by name (case-insensitive). Returns -1 on miss. */
int edxn_table_find_column(const edxn_prg_table_t *tbl,
                            const uint8_t *decoded, const char *name);

/* Get cell string at (row, col). row=0 is the header. Returns NULL on OOB. */
const char *edxn_table_get_cell(const edxn_prg_table_t *tbl,
                                 const uint8_t *decoded, int row, int col);

/* Seek: find first row (1..rows) where column `col` matches `value`. Returns -1. */
int edxn_table_seek(const edxn_prg_table_t *tbl, const uint8_t *decoded,
                     int col, const char *value);

/* Seek unsigned: match column cell parsed as uint32. */
int edxn_table_seek_u(const edxn_prg_table_t *tbl, const uint8_t *decoded,
                       int col, uint32_t value);

#endif
