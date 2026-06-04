/**
 * Table opcodes (tabset / tabseek / tabget / tabline / tabseeku /
 * tabsetex / tabcols / tabrows).
 *
 * The active table registry is whichever prg `table_state.source_prg`
 * points to. By default that's `vm->prg` (the loaded SGBD's tables);
 * `tabsetex` with an external file name + a registered `table_loader`
 * redirects to a separately-loaded mini-PRG. `tabset` (0x7B) always
 * resets the source back to the loaded SGBD — that's BEST/2 convention
 * (no way to "stay in the external registry" across a plain tabset).
 *
 * All comparisons are case-insensitive — BMW table data is canonically
 * uppercase but SGBDs sometimes look up "0xa0" against "0xA0".
 */

#include "vm_internal.h"

static int find_table(const edxn_prg_t *prg, const char *name) {
    if (!prg) return -1;
    for (size_t i = 0; i < prg->table_count; i++) {
        const char *a = prg->tables[i].name;
        const char *b = name;
        while (*a && *b &&
               toupper((unsigned char)*a) == toupper((unsigned char)*b)) {
            a++; b++;
        }
        if (*a == '\0' && *b == '\0') return (int)i;
    }
    return -1;
}

static const uint8_t *table_data(const edxn_prg_t *prg) {
    if (!prg) return NULL;
    return prg->decoded ? prg->decoded : prg->raw;
}

/* Switch the active table registry. NULL → fall back to vm->prg. */
static void set_table_source(edxn_vm_t *vm, edxn_prg_t *src) {
    vm->table_state.source_prg = src ? src : vm->prg;
}

edxn_error_t edxn_op_table(edxn_vm_t *vm, uint8_t op,
                            const edxn_operand_t *a0, const edxn_operand_t *a1) {
    switch (op) {

    /* tabset (0x7B) — select table by name from the LOCAL registry */
    case 0x7B: {
        char name[EDXN_MAX_TABLE_NAME];
        edxn_resolve_string(vm, a0, name, sizeof(name));
        int prev_idx = vm->table_state.table_idx;
        int prev_row = vm->table_state.row;
        edxn_prg_t *prev_src = vm->table_state.source_prg;
        /* Reset to local registry */
        set_table_source(vm, vm->prg);
        int idx = find_table(vm->prg, name);
        vm->table_state.table_idx = idx;
        vm->table_state.row = -1;
        if (idx >= 0 && idx == prev_idx && prev_src == vm->prg)
            vm->table_state.row = prev_row;
        if (idx < 0)
            vm->flags.z = true;
        return EDXN_OK;
    }

    /* tabseek (0x7C) — seek row by column value (string, case-insensitive) */
    case 0x7C: {
        edxn_prg_t *src = vm->table_state.source_prg;
        int ti = vm->table_state.table_idx;
        if (!src || ti < 0 || (size_t)ti >= src->table_count) {
            vm->table_state.row = -1;
            vm->flags.z = true;
            return EDXN_OK;
        }
        const edxn_prg_table_t *tbl = &src->tables[ti];
        const uint8_t *td = table_data(src);
        char col_name[EDXN_S_REG_MAXLEN + 1];
        edxn_resolve_string(vm, a0, col_name, sizeof(col_name));
        int col = edxn_table_find_column(tbl, td, col_name);
        if (col < 0) {
            vm->table_state.row = -1;
            vm->flags.z = true;
            return EDXN_OK;
        }
        char search[EDXN_S_REG_MAXLEN + 1];
        edxn_resolve_string(vm, a1, search, sizeof(search));
        int row = edxn_table_seek(tbl, td, col, search);
        if (row > 0) {
            vm->table_state.row = row - 1;
            vm->flags.z = false;
        } else {
            vm->table_state.row = tbl->rows > 0 ? tbl->rows - 1 : -1;
            vm->flags.z = true;
        }
        return EDXN_OK;
    }

    /* tabget (0x7D) — get cell value at current row */
    case 0x7D: {
        if (a0->kind != EDXN_OP_REG || a0->u.reg.type != EDXN_REG_S)
            return EDXN_ERR_OPERAND;
        edxn_prg_t *src = vm->table_state.source_prg;
        int ti = vm->table_state.table_idx;
        if (!src || ti < 0 || (size_t)ti >= src->table_count) return EDXN_OK;
        const edxn_prg_table_t *tbl = &src->tables[ti];
        const uint8_t *td = table_data(src);
        char col_name[EDXN_S_REG_MAXLEN + 1];
        edxn_resolve_string(vm, a1, col_name, sizeof(col_name));
        int col = edxn_table_find_column(tbl, td, col_name);
        if (col < 0) return EDXN_OK;
        int row = vm->table_state.row;
        if (row < 0) {
            edxn_reg_set_s(&vm->regs, a0->u.reg.index, (const uint8_t *)"", 0);
            return EDXN_OK;
        }
        if (row >= tbl->rows) return EDXN_OK;
        const char *cell = edxn_table_get_cell(tbl, td, row + 1, col);
        if (cell)
            edxn_reg_set_s(&vm->regs, a0->u.reg.index,
                            (const uint8_t *)cell, strlen(cell));
        return EDXN_OK;
    }

    /* tabline (0x83) — set row index directly (0-based) */
    case 0x83: {
        edxn_prg_t *src = vm->table_state.source_prg;
        int ti = vm->table_state.table_idx;
        if (!src || ti < 0 || (size_t)ti >= src->table_count) {
            vm->table_state.row = -1;
            vm->flags.z = true;
            return EDXN_OK;
        }
        const edxn_prg_table_t *tbl = &src->tables[ti];
        int32_t line = edxn_resolve_int(vm, a0);
        if (line >= tbl->rows) {
            vm->table_state.row = tbl->rows > 0 ? tbl->rows - 1 : -1;
            vm->flags.z = true;
        } else {
            vm->table_state.row = line;
            vm->flags.z = false;
        }
        return EDXN_OK;
    }

    /* tabseeku (0x9A) — seek row by unsigned integer value */
    case 0x9A: {
        edxn_prg_t *src = vm->table_state.source_prg;
        int ti = vm->table_state.table_idx;
        if (!src || ti < 0 || (size_t)ti >= src->table_count) {
            vm->table_state.row = -1;
            vm->flags.z = true;
            return EDXN_OK;
        }
        const edxn_prg_table_t *tbl = &src->tables[ti];
        const uint8_t *td = table_data(src);
        char col_name[EDXN_S_REG_MAXLEN + 1];
        edxn_resolve_string(vm, a0, col_name, sizeof(col_name));
        int col = edxn_table_find_column(tbl, td, col_name);
        if (col < 0) {
            vm->table_state.row = -1;
            vm->flags.z = true;
            return EDXN_OK;
        }
        uint32_t search = (uint32_t)edxn_resolve_int(vm, a1);
        int row = edxn_table_seek_u(tbl, td, col, search);
        if (row > 0) {
            vm->table_state.row = row - 1;
            vm->flags.z = false;
        } else {
            vm->table_state.row = tbl->rows > 0 ? tbl->rows - 1 : -1;
            vm->flags.z = true;
        }
        return EDXN_OK;
    }

    /* tabsetex (0xAA) — table set extended. TS: optional arg1 names an
       external file; the tableLoader resolves it. Falls back to local
       registry if loader is absent or arg1 is empty. */
    case 0xAA: {
        char name[EDXN_MAX_TABLE_NAME];
        edxn_resolve_string(vm, a0, name, sizeof(name));
        char file_name[256] = {0};
        if (a1->kind != EDXN_OP_NONE) {
            edxn_resolve_string(vm, a1, file_name, sizeof(file_name));
        }
        edxn_prg_t *registry = vm->prg;
        if (file_name[0] != '\0' && vm->table_loader) {
            /* Reuse cached external registry if filename matches */
            if (vm->external_tables_prg
                && strcasecmp(vm->external_tables_name, file_name) == 0) {
                registry = vm->external_tables_prg;
            } else {
                edxn_prg_t *ext_prg = NULL;
                uint8_t    *ext_bytes = NULL;
                edxn_error_t err = vm->table_loader(vm->table_loader_ctx,
                    file_name, &ext_prg, &ext_bytes);
                if (err == EDXN_OK && ext_prg) {
                    /* Free previously cached external registry */
                    if (vm->external_tables_prg) {
                        edxn_prg_free(vm->external_tables_prg);
                        free(vm->external_tables_prg);
                    }
                    free(vm->external_tables_bytes);
                    vm->external_tables_prg = ext_prg;
                    vm->external_tables_bytes = ext_bytes;
                    strncpy(vm->external_tables_name, file_name,
                            sizeof(vm->external_tables_name) - 1);
                    vm->external_tables_name[sizeof(vm->external_tables_name) - 1] = '\0';
                    registry = ext_prg;
                }
            }
        }

        int prev_idx = vm->table_state.table_idx;
        int prev_row = vm->table_state.row;
        edxn_prg_t *prev_src = vm->table_state.source_prg;
        set_table_source(vm, registry);
        int idx = find_table(registry, name);
        vm->table_state.table_idx = idx;
        vm->table_state.row = -1;
        if (idx >= 0 && idx == prev_idx && prev_src == registry)
            vm->table_state.row = prev_row;
        if (idx < 0)
            vm->flags.z = true;
        return EDXN_OK;
    }

    /* tabcols (0xB6) — get column count */
    case 0xB6: {
        if (a0->kind != EDXN_OP_REG) return EDXN_ERR_OPERAND;
        edxn_prg_t *src = vm->table_state.source_prg;
        int ti = vm->table_state.table_idx;
        if (!src || ti < 0 || (size_t)ti >= src->table_count) {
            edxn_reg_set_int(&vm->regs, &a0->u.reg, 0);
            return EDXN_OK;
        }
        edxn_reg_set_int(&vm->regs, &a0->u.reg,
                          (int32_t)src->tables[ti].columns);
        return EDXN_OK;
    }

    /* tabrows (0xB7) — get row count (including header) */
    case 0xB7: {
        if (a0->kind != EDXN_OP_REG) return EDXN_ERR_OPERAND;
        edxn_prg_t *src = vm->table_state.source_prg;
        int ti = vm->table_state.table_idx;
        if (!src || ti < 0 || (size_t)ti >= src->table_count) {
            edxn_reg_set_int(&vm->regs, &a0->u.reg, 0);
            return EDXN_OK;
        }
        edxn_reg_set_int(&vm->regs, &a0->u.reg,
                          (int32_t)(src->tables[ti].rows + 1));
        return EDXN_OK;
    }

    default:
        return EDXN_ERR_ILLEGAL_OPCODE;
    }
}
