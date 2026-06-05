/**
 * VM lifecycle, opcode dispatch table, job execution.
 *
 * Two public exec entry points:
 *
 *   • `edxn_vm_exec_raw` — runs the named job directly with no auto-INIT
 *     / IDENT / variant-swap. The Ediabas-layer wrapper
 *     (`edxn_ediabas_t` in `ediabas.c`) calls this and owns the
 *     bootstrap state itself. New code should reach the wrapper, not
 *     the VM directly.
 *
 *   • `edxn_vm_exec` — legacy bootstrapped exec: runs INITIALISIERUNG
 *     once per loaded SGBD, then dispatches IDENTIFIKATION + variant-
 *     swap for .grp files, then executes the requested job. Kept for
 *     backwards-compat with embedders that read `vm->current_results`
 *     directly (e.g. minimal ESP32 hosts). The reset/init split keeps
 *     INITIALISIERUNG's parameter setup alive across subsequent jobs
 *     (mirrors C# `_initialized` gate).
 *
 * Note: when callers go through `edxn_ediabas_t`, the wrapper handles
 * bootstrap (via `edxn_vm_exec_raw`) — the VM's own auto-INIT path in
 * `edxn_vm_exec` is bypassed. Both paths converge on the same
 * `run_job` helper for the actual bytecode execution.
 *
 * Opcode routing in `dispatch()`: BEST/2 opcodes are mostly categorised by
 * hex range (arithmetic = 0x00–0x0A, jumps = 0x0B–0x15, etc.) but the ISA
 * has gaps that require explicit cases. The chained `if` blocks favour
 * readability over a 256-entry table — the few-percent runtime cost is
 * dwarfed by the actual opcode bodies.
 */

#include "vm_internal.h"

void edxn_vm_set_sgbd_loader(edxn_vm_t *vm,
                              edxn_sgbd_loader_fn fn, void *ctx) {
    vm->sgbd_loader = fn;
    vm->sgbd_loader_ctx = ctx;
}

void edxn_vm_set_table_loader(edxn_vm_t *vm,
                               edxn_table_loader_fn fn, void *ctx) {
    vm->table_loader = fn;
    vm->table_loader_ctx = ctx;
}

edxn_error_t edxn_vm_init(edxn_vm_t *vm, edxn_prg_t *prg) {
    memset(vm, 0, sizeof(*vm));
    vm->prg = prg;
    vm->table_state.table_idx = -1;
    vm->table_state.row       = -1;
    vm->table_state.source_prg = prg;
    vm->float_precision       = 6;
    vm->error_trap_bit_nr     = -1;
    vm->token_sep[0]          = ';';
    vm->token_sep[1]          = '\0';

    edxn_error_t err = edxn_result_init(&vm->current_results, 16);
    if (err != EDXN_OK) return err;

    err = edxn_result_init(&vm->system_results, 8);
    if (err != EDXN_OK) {
        edxn_result_free(&vm->current_results);
        return err;
    }

    return EDXN_OK;
}

void edxn_vm_free(edxn_vm_t *vm) {
    edxn_result_free(&vm->current_results);
    edxn_result_free(&vm->system_results);
    for (size_t i = 0; i < vm->result_set_count; i++)
        edxn_result_free(&vm->result_sets[i]);
    free(vm->result_sets);

    /* Free owned variant prg (swapped in from GRP→PRG resolution) */
    if (vm->owned_prg) {
        edxn_prg_free(vm->owned_prg);
        free(vm->owned_prg);
    }
    free(vm->owned_prg_bytes);

    /* Free external table registry (from tabsetex) */
    if (vm->external_tables_prg) {
        edxn_prg_free(vm->external_tables_prg);
        free(vm->external_tables_prg);
    }
    free(vm->external_tables_bytes);

    /* Close open file handles */
    for (size_t i = 0; i < EDXN_MAX_FILES; i++) {
        if (vm->files[i].used && vm->files[i].fp) fclose(vm->files[i].fp);
    }

    memset(vm, 0, sizeof(*vm));
}

void edxn_vm_reset(edxn_vm_t *vm) {
    edxn_reg_reset(&vm->regs);
    edxn_flags_reset(&vm->flags);
    edxn_stack_reset(&vm->data_stack);
    edxn_call_reset(&vm->call_stack);
    vm->pc     = 0;
    vm->halted = false;

    edxn_result_clear(&vm->current_results);
    edxn_result_clear(&vm->system_results);
    for (size_t i = 0; i < vm->result_set_count; i++)
        edxn_result_free(&vm->result_sets[i]);
    free(vm->result_sets);
    vm->result_sets     = NULL;
    vm->result_set_count = 0;
    vm->result_set_cap   = 0;

    vm->params.count    = 0;
    vm->table_state.table_idx = -1;
    vm->table_state.row       = -1;
    vm->table_state.source_prg = vm->prg;
    vm->error_trap_mask = 0;
    vm->error_trap_bit_nr = -1;
    vm->token_sep[0]    = ';';
    vm->token_sep[1]    = '\0';
    vm->token_idx       = 0;
    vm->float_precision = 6;
    vm->param_binary_len = 0;
    for (size_t i = 0; i < EDXN_SHM_MAX_ENTRIES; i++) vm->shm[i].used = false;
    for (size_t i = 0; i < EDXN_CFG_MAX_ENTRIES; i++) vm->cfg[i].used = false;
    for (size_t i = 0; i < EDXN_MAX_FILES; i++) {
        if (vm->files[i].used && vm->files[i].fp) fclose(vm->files[i].fp);
        vm->files[i].used = false;
        vm->files[i].fp = NULL;
    }
    vm->job_status[0]   = '\0';
    vm->progress_text[0] = '\0';
    vm->progress_range   = 0;
    vm->progress_pos     = 0;
}

edxn_error_t edxn_vm_set_params(edxn_vm_t *vm, const char *args) {
    vm->params.count = 0;
    if (!args || args[0] == '\0')
        return EDXN_OK;

    const char *p = args;
    while (*p && vm->params.count < EDXN_MAX_PARAMS) {
        const char *sep = strchr(p, ';');
        size_t len = sep ? (size_t)(sep - p) : strlen(p);
        if (len > EDXN_PARAM_MAXLEN)
            len = EDXN_PARAM_MAXLEN;

        edxn_param_t *par = &vm->params.items[vm->params.count++];
        memcpy(par->data, p, len);
        par->len = len;

        if (!sep) break;
        p = sep + 1;
    }
    return EDXN_OK;
}

edxn_error_t edxn_vm_set_binary_params(edxn_vm_t *vm,
                                        const uint8_t *bin, size_t bin_len) {
    if (!vm) return EDXN_ERR_OPERAND;
    if (!bin || bin_len == 0) {
        vm->param_binary_len = 0;
        return EDXN_OK;
    }
    /* Truncate at the buffer cap rather than refusing — matches the
       TS runtime where the SGBD's own input-length check is the
       authoritative source of "too long". */
    if (bin_len > EDXN_PARAM_BINARY_MAX) bin_len = EDXN_PARAM_BINARY_MAX;
    memcpy(vm->param_binary, bin, bin_len);
    vm->param_binary_len = bin_len;
    return EDXN_OK;
}

static edxn_error_t dispatch(edxn_vm_t *vm, uint8_t opcode,
                              const edxn_operand_t *a0,
                              const edxn_operand_t *a1) {
    /* Arithmetic: 0x00-0x0A, 0x18-0x1B (shifts), 0x49-0x4A (addc/subc), 0x6A (test) */
    if (opcode <= 0x0A) return edxn_op_arith(vm, opcode, a0, a1);
    if (opcode >= 0x18 && opcode <= 0x1B) return edxn_op_arith(vm, opcode, a0, a1);
    if (opcode == 0x49 || opcode == 0x4A) return edxn_op_arith(vm, opcode, a0, a1);
    if (opcode == 0x6A) return edxn_op_arith(vm, opcode, a0, a1);

    /* Control flow: 0x0B-0x15, 0x47-0x48 (jt/jnt), 0x5A-0x5F (jg/jnl/jl/jng/ja/jna) */
    if (opcode >= 0x0B && opcode <= 0x15) return edxn_op_flow(vm, opcode, a0, a1);
    if (opcode == 0x47 || opcode == 0x48) return edxn_op_flow(vm, opcode, a0, a1);
    if (opcode >= 0x5A && opcode <= 0x5F) return edxn_op_flow(vm, opcode, a0, a1);

    /* Flags/stack/misc: 0x16-0x17, 0x1C-0x1F, 0x4B-0x50, 0x52-0x58, others */
    if (opcode == 0x16 || opcode == 0x17) return edxn_op_misc(vm, opcode, a0, a1);
    if (opcode >= 0x1C && opcode <= 0x1F) return edxn_op_misc(vm, opcode, a0, a1);
    if (opcode == 0x4B || opcode == 0x4C) return edxn_op_misc(vm, opcode, a0, a1);
    if (opcode >= 0x4D && opcode <= 0x50) return edxn_op_misc(vm, opcode, a0, a1);
    if (opcode == 0x52) return edxn_op_misc(vm, opcode, a0, a1);
    if (opcode >= 0x55 && opcode <= 0x58) return edxn_op_misc(vm, opcode, a0, a1);
    if (opcode == 0x7F || opcode == 0x80) return edxn_op_misc(vm, opcode, a0, a1);
    if (opcode == 0x43 || opcode == 0x44) return edxn_op_misc(vm, opcode, a0, a1);
    if (opcode == 0x45 || opcode == 0x46) return edxn_op_misc(vm, opcode, a0, a1);
    if (opcode == 0x67 || opcode == 0x68) return edxn_op_misc(vm, opcode, a0, a1);
    if (opcode == 0x69) return edxn_op_misc(vm, opcode, a0, a1);
    if (opcode == 0x6B) return edxn_op_misc(vm, opcode, a0, a1);
    if (opcode == 0x88) return edxn_op_misc(vm, opcode, a0, a1);
    if (opcode >= 0x96 && opcode <= 0x99) return edxn_op_misc(vm, opcode, a0, a1);
    if (opcode == 0xAD) return edxn_op_misc(vm, opcode, a0, a1);
    if (opcode == 0xB5) return edxn_op_misc(vm, opcode, a0, a1);

    /* String ops: 0x20-0x25, 0x51, 0x53-0x54, 0x79-0x7A, 0x7E, 0x87,
       0x8C, 0x8E-0x92, 0xAB */
    if (opcode >= 0x20 && opcode <= 0x25) return edxn_op_string(vm, opcode, a0, a1);
    if (opcode == 0x51) return edxn_op_string(vm, opcode, a0, a1);
    if (opcode == 0x53 || opcode == 0x54) return edxn_op_string(vm, opcode, a0, a1);
    if (opcode == 0x79 || opcode == 0x7A) return edxn_op_string(vm, opcode, a0, a1);
    if (opcode == 0x7E) return edxn_op_string(vm, opcode, a0, a1);
    if (opcode == 0x87) return edxn_op_string(vm, opcode, a0, a1);
    if (opcode == 0x8C || opcode == 0x8E) return edxn_op_string(vm, opcode, a0, a1);
    if (opcode == 0x8F || opcode == 0x90) return edxn_op_string(vm, opcode, a0, a1);
    if (opcode == 0x91 || opcode == 0x92) return edxn_op_string(vm, opcode, a0, a1);
    if (opcode == 0xAB) return edxn_op_string(vm, opcode, a0, a1);

    /* Float: 0x3A-0x3E, 0xA1 */
    if (opcode >= 0x3A && opcode <= 0x3E) return edxn_op_arith(vm, opcode, a0, a1);
    if (opcode == 0xA1) return edxn_op_arith(vm, opcode, a0, a1);

    /* Results: 0x34-0x39, 0x3F-0x41, 0x81-0x82, 0x95 */
    if (opcode >= 0x34 && opcode <= 0x39) return edxn_op_result(vm, opcode, a0, a1);
    if (opcode >= 0x3F && opcode <= 0x41) return edxn_op_result(vm, opcode, a0, a1);
    if (opcode == 0x81 || opcode == 0x82) return edxn_op_result(vm, opcode, a0, a1);
    if (opcode == 0x95) return edxn_op_result(vm, opcode, a0, a1);

    /* Communication: 0x26-0x33, 0x42, 0x6E, 0x71-0x77 */
    if (opcode >= 0x26 && opcode <= 0x33) return edxn_op_comm(vm, opcode, a0, a1);
    if (opcode == 0x42) return edxn_op_comm(vm, opcode, a0, a1);
    if (opcode == 0x6E) return edxn_op_comm(vm, opcode, a0, a1);
    if (opcode >= 0x71 && opcode <= 0x77) return edxn_op_comm(vm, opcode, a0, a1);
    if (opcode == 0x75) return edxn_op_comm(vm, opcode, a0, a1);

    /* Tables: 0x7B-0x7D, 0x83, 0x9A, 0xAA, 0xB6-0xB7 */
    if (opcode >= 0x7B && opcode <= 0x7D) return edxn_op_table(vm, opcode, a0, a1);
    if (opcode == 0x83 || opcode == 0x9A) return edxn_op_table(vm, opcode, a0, a1);
    if (opcode == 0xAA) return edxn_op_table(vm, opcode, a0, a1);
    if (opcode == 0xB6 || opcode == 0xB7) return edxn_op_table(vm, opcode, a0, a1);

    /* Legacy no-ops */
    if (opcode == 0x6F || opcode == 0x70 || opcode == 0x78) return EDXN_OK;
    if (opcode >= 0x84 && opcode <= 0x86) return EDXN_OK;
    if (opcode == 0x8D) return EDXN_OK;
    if (opcode >= 0x9F && opcode <= 0xA0) return EDXN_OK;
    if (opcode == 0xA2 || opcode == 0xA3 || opcode == 0xA5 || opcode == 0xA7) return EDXN_OK;
    if (opcode == 0xA9) return EDXN_OK;
    if (opcode >= 0xAF && opcode <= 0xB4) return EDXN_OK;

    /* ppop/ppopflt/ppopy — clear destination */
    if (opcode == 0xA4) return edxn_op_misc(vm, opcode, a0, a1);
    if (opcode == 0xA6) return edxn_op_misc(vm, opcode, a0, a1);
    if (opcode == 0xA8) return edxn_op_misc(vm, opcode, a0, a1);

    /* File I/O, config, shmem, float-byte, generr — misc bucket */
    if (opcode == 0x59) return edxn_op_misc(vm, opcode, a0, a1);
    if (opcode >= 0x60 && opcode <= 0x66) return edxn_op_misc(vm, opcode, a0, a1);
    if (opcode == 0x89 || opcode == 0x8A || opcode == 0x8B) return edxn_op_misc(vm, opcode, a0, a1);
    if (opcode == 0x93 || opcode == 0x94) return edxn_op_misc(vm, opcode, a0, a1);
    if (opcode >= 0x9B && opcode <= 0x9E) return edxn_op_misc(vm, opcode, a0, a1);
    if (opcode == 0xAC || opcode == 0xAE) return edxn_op_misc(vm, opcode, a0, a1);
    if (opcode == 0x6C || opcode == 0x6D) return edxn_op_misc(vm, opcode, a0, a1);
    if (opcode == 0x4D) return edxn_op_misc(vm, opcode, a0, a1);

    return EDXN_ERR_ILLEGAL_OPCODE;
}

edxn_error_t edxn_vm_step(edxn_vm_t *vm) {
    if (vm->halted)
        return EDXN_OK;

    if (!vm->prg || !vm->prg->code || vm->pc >= vm->prg->code_len)
        return EDXN_ERR_ILLEGAL_OPCODE;

    edxn_instruction_t inst;
    edxn_error_t err = edxn_decode_instruction(
        vm->prg->code, vm->prg->code_len, vm->pc, &inst);
    if (err != EDXN_OK) return err;

    uint32_t saved_pc = vm->pc;
    vm->pc = inst.next_pc;

    if (getenv("EDXN_VTRACE"))
        fprintf(stderr, "[vm] pc=%04X op=%02X z=%d c=%d s=%d\n",
                saved_pc, inst.opcode, vm->flags.z, vm->flags.c, vm->flags.s);

    err = dispatch(vm, inst.opcode, &inst.arg0, &inst.arg1);
    return err;
}

/* Internal job runner. The binary payload is preserved across the
   `edxn_vm_reset` call below (which would otherwise zero `param_binary_len`)
   so the apiJobData channel survives into the SGBD's first opcode.
   Pass NULL/0 for `bin`/`bin_len` when the caller only set string params. */
static edxn_error_t run_job_with_bin(edxn_vm_t *vm, int job_idx,
                                      const char *args,
                                      const uint8_t *bin, size_t bin_len) {
    edxn_transport_t *saved_transport = vm->transport;
    bool saved_init = vm->initialized;
    edxn_vm_reset(vm);
    vm->transport = saved_transport;
    vm->initialized = saved_init;
    edxn_vm_set_params(vm, args);
    /* `reset` zeroed `param_binary_len`; apply the caller's binary
       payload (or clear if none) now, after reset. */
    edxn_vm_set_binary_params(vm, bin, bin_len);
    vm->pc = vm->prg->jobs[job_idx].code_offset;

    while (!vm->halted) {
        edxn_error_t err = edxn_vm_step(vm);
        if (err != EDXN_OK) return err;
    }
    return EDXN_OK;
}

static edxn_error_t run_job(edxn_vm_t *vm, int job_idx, const char *args) {
    return run_job_with_bin(vm, job_idx, args, NULL, 0);
}

/* Public non-bootstrapping job exec — mirrors TS `Interpreter.execute`.
   Looks up the job by name and runs it directly without auto-INIT /
   IDENT / variant-swap. Use this when a caller layer (e.g. the
   `edxn_ediabas_t` wrapper) owns the bootstrap; for legacy direct
   consumers, `edxn_vm_exec` still does the bootstrap. */
edxn_error_t edxn_vm_exec_raw(edxn_vm_t *vm, const char *job_name,
                               const char *args) {
    return edxn_vm_exec_raw_data(vm, job_name, args, NULL, 0);
}

edxn_error_t edxn_vm_exec_raw_data(edxn_vm_t *vm, const char *job_name,
                                    const char *args,
                                    const uint8_t *bin, size_t bin_len) {
    int idx = edxn_prg_find_job(vm->prg, job_name);
    if (idx < 0) return EDXN_ERR_JOB_NOT_FOUND;
    return run_job_with_bin(vm, idx, args, bin, bin_len);
}

/* Run IDENTIFIKATION on a loaded .grp, look up VARIANTE in the results, and
   swap the loaded prg to the resolved variant's .prg. Mirrors TS
   Ediabas.runIdentAfterInit. Returns EDXN_OK on success; swap failures are
   non-fatal (caller continues with original GRP). */
static edxn_error_t run_ident_and_swap_variant(edxn_vm_t *vm) {
    if (vm->ident_ran) return EDXN_OK;
    if (!vm->prg || vm->prg->header.version != 0) return EDXN_OK;  /* .grp only */
    if (!vm->sgbd_loader) return EDXN_OK;
    int ident_idx = edxn_prg_find_job(vm->prg, "IDENTIFIKATION");
    if (ident_idx < 0) return EDXN_OK;
    vm->ident_ran = true;

    edxn_error_t err = run_job(vm, ident_idx, "");
    bool trace = getenv("EDXN_TRACE") != NULL;
    if (err != EDXN_OK) {
        if (trace) fprintf(stderr, "[grp] IDENTIFIKATION failed: err=%d\n", err);
        return EDXN_OK;
    }

    /* Find last VARIANTE = "<variant_name>" in current_results */
    const edxn_result_entry_t *variant_entry = NULL;
    for (size_t i = 0; i < vm->current_results.count; i++) {
        edxn_result_entry_t *e = &vm->current_results.entries[i];
        if (e->type == EDXN_TYPE_STRING && strcasecmp(e->name, "VARIANTE") == 0
            && e->value.bin.len > 0) {
            variant_entry = e;
        }
    }
    if (!variant_entry) {
        if (trace) fprintf(stderr,
            "[grp] IDENTIFIKATION returned no VARIANTE (results=%zu)\n",
            vm->current_results.count);
        return EDXN_OK;
    }

    char variant_name[256];
    size_t vlen = variant_entry->value.bin.len;
    if (vlen >= sizeof(variant_name)) vlen = sizeof(variant_name) - 1;
    memcpy(variant_name, variant_entry->value.bin.data, vlen);
    variant_name[vlen] = '\0';

    edxn_prg_t *new_prg = NULL;
    uint8_t    *new_bytes = NULL;
    err = vm->sgbd_loader(vm->sgbd_loader_ctx, variant_name,
                           &new_prg, &new_bytes);
    if (err != EDXN_OK || !new_prg) {
        if (trace) fprintf(stderr,
            "[grp] variant load failed: \"%s\" err=%d\n", variant_name, err);
        return EDXN_OK;
    }
    if (trace) fprintf(stderr,
        "[grp] swapped to variant: %s\n", variant_name);

    /* Free previous owned prg if any (re-entrant safety) */
    if (vm->owned_prg) {
        edxn_prg_free(vm->owned_prg);
        free(vm->owned_prg);
    }
    free(vm->owned_prg_bytes);

    vm->owned_prg = new_prg;
    vm->owned_prg_bytes = new_bytes;
    vm->prg = new_prg;
    vm->table_state.source_prg = new_prg;
    return EDXN_OK;
}

edxn_error_t edxn_vm_exec(edxn_vm_t *vm, const char *job_name, const char *args) {
    return edxn_vm_exec_data(vm, job_name, args, NULL, 0);
}

edxn_error_t edxn_vm_exec_data(edxn_vm_t *vm, const char *job_name,
                                const char *args,
                                const uint8_t *bin, size_t bin_len) {
    if (!vm->initialized) {
        int init_idx = edxn_prg_find_job(vm->prg, "INITIALISIERUNG");
        if (init_idx >= 0) {
            /* Bootstrap jobs (INITIALISIERUNG, IDENT) take no binary
               payload — they're internal handshakes the SGBD owns. */
            edxn_error_t err = run_job(vm, init_idx, "");
            vm->initialized = true;
            if (err != EDXN_OK) return err;
        } else {
            vm->initialized = true;
        }
        /* After INIT, if GRP, dispatch IDENTIFIKATION + swap to variant.
           Job lookup happens AFTER swap so we resolve into the variant's
           job table (mirrors TS: GRP only has INIT + IDENT). */
        edxn_error_t err = run_ident_and_swap_variant(vm);
        if (err != EDXN_OK) return err;
    }

    int idx = edxn_prg_find_job(vm->prg, job_name);
    if (idx < 0)
        return EDXN_ERR_JOB_NOT_FOUND;

    return run_job_with_bin(vm, idx, args, bin, bin_len);
}
