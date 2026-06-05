#ifndef EDXN_VM_H
#define EDXN_VM_H

/**
 * ediabasx VM — public API.
 *
 * Lifecycle:
 *   edxn_prg_parse(&prg, data, len)        // parse a .prg/.grp file
 *   edxn_vm_init(&vm, &prg)                 // bind VM to that program
 *   vm.transport = my_transport            // optional, for ECU comms
 *   edxn_vm_set_sgbd_loader(&vm, fn, ctx)  // optional, for .grp variant resolution
 *   edxn_vm_set_table_loader(&vm, fn, ctx) // optional, for tabsetex external tables
 *   edxn_vm_exec(&vm, "IDENT", "")          // run a job
 *   ... read results from vm.current_results ...
 *   edxn_vm_free(&vm)
 *
 * The VM owns its internal allocations (results, owned variant prg from
 * GRP swap, external table prg from tabsetex). Callers own the initial
 * `edxn_prg_t` passed to `edxn_vm_init` — typically the same prg buffer
 * the runner parsed off disk.
 *
 * Reset semantics: `edxn_vm_reset()` is called automatically at the start
 * of each job dispatch and clears scratch state (regs, flags, stacks,
 * current_results). It preserves cross-job state — `initialized` flag,
 * SHM, config, file handles, owned variant prg, external table cache.
 */

#include "types.h"
#include "prg.h"
#include "registers.h"
#include "flags.h"
#include "stack.h"
#include "decode.h"
#include "transport.h"
#include "result.h"
#include <stdio.h>

#define EDXN_MAX_RESULT_SETS 256
#define EDXN_MAX_PARAMS      64
#define EDXN_PARAM_MAXLEN    256
#define EDXN_TOKEN_SEP_MAX   32
#define EDXN_SHM_MAX_ENTRIES 64
#define EDXN_SHM_KEY_MAX     64
#define EDXN_SHM_VAL_MAX     1024
#define EDXN_CFG_MAX_ENTRIES 32
#define EDXN_CFG_KEY_MAX     64
#define EDXN_CFG_VAL_MAX     256
#define EDXN_MAX_FILES       16

typedef struct {
    char    key[EDXN_SHM_KEY_MAX];
    uint8_t value[EDXN_SHM_VAL_MAX];
    size_t  value_len;
    bool    used;
} edxn_shm_entry_t;

typedef struct {
    char    key[EDXN_CFG_KEY_MAX];
    char    value[EDXN_CFG_VAL_MAX];
    bool    used;
} edxn_cfg_entry_t;

typedef struct {
    FILE *fp;
    bool  used;
} edxn_file_handle_t;

typedef struct {
    uint8_t data[EDXN_PARAM_MAXLEN];
    size_t  len;
} edxn_param_t;

typedef struct {
    edxn_param_t items[EDXN_MAX_PARAMS];
    size_t       count;
} edxn_params_t;

typedef struct {
    int               table_idx;     /* index into source_prg->tables, -1 = none */
    int               row;           /* current row, -1 = invalid */
    edxn_prg_t       *source_prg;    /* registry the table_idx refers to */
} edxn_table_state_t;

/* Forward decl */
typedef struct edxn_vm edxn_vm_t;

/* SGBD loader — supplies bytes + parsed PRG for a variant name (e.g. "MS420DS0").
   Memory ownership: out_prg and out_bytes must be heap-allocated; the VM frees
   them via edxn_prg_free + free when it swaps to a different SGBD. */
typedef edxn_error_t (*edxn_sgbd_loader_fn)(void *ctx, const char *variant_name,
                                             edxn_prg_t **out_prg,
                                             uint8_t **out_bytes);

/* Table file loader — same lifetime contract as sgbd_loader. */
typedef edxn_error_t (*edxn_table_loader_fn)(void *ctx, const char *file_name,
                                              edxn_prg_t **out_prg,
                                              uint8_t **out_bytes);

struct edxn_vm {
    edxn_prg_t          *prg;
    edxn_registers_t     regs;
    edxn_flags_t         flags;
    edxn_data_stack_t    data_stack;
    edxn_call_stack_t    call_stack;
    uint32_t             pc;
    bool                 halted;

    /* Results */
    edxn_result_set_t    current_results;
    edxn_result_set_t   *result_sets;
    size_t               result_set_count;
    size_t               result_set_cap;
    edxn_result_set_t    system_results;

    /* Parameters (job arguments) */
    edxn_params_t        params;

    /* Transport */
    edxn_transport_t    *transport;
    bool                 initialized;

    /* Table state */
    edxn_table_state_t   table_state;

    /* Error trap — mirrors TS ErrorTrapState.
       error_trap_mask: which error bits to ignore (mask out).
       error_trap_bit_nr: the CURRENT trapped error's bit number, or -1.
       Special: 0x40000000 = generic error (not bit-mapped). */
    uint32_t             error_trap_mask;
    int32_t              error_trap_bit_nr;

    /* String tokenization — token_sep is a STRING (TS uses
       splitString.Split(separator.ToCharArray()): split on any char
       in the separator). */
    char                 token_sep[EDXN_TOKEN_SEP_MAX];
    int                  token_idx;

    /* Float formatting */
    int                  float_precision;

    /* Job status (set by eoj opcode) */
    char                 job_status[64];

    /* Progress */
    char                 progress_text[256];
    int                  progress_range;
    int                  progress_pos;

    /* Job parameter binary payload (for pary 0x7F). 1 KiB is the same
       cap as the TS `Ediabas` runtime allows (`binaryPayload` is
       backed by a single Uint8Array that callers fill before
       executeJob). Excess bytes are silently truncated on set so a
       too-long apiJobData input lands the SGBD on its own length
       check (which produces a properly-formatted JOB_STATUS) rather
       than failing earlier with a host-side reject. */
#define EDXN_PARAM_BINARY_MAX 1024
    uint8_t              param_binary[EDXN_PARAM_BINARY_MAX];
    size_t               param_binary_len;

    /* Shared memory map (shmset 0x93 / shmget 0x94) */
    edxn_shm_entry_t     shm[EDXN_SHM_MAX_ENTRIES];

    /* Config map (cfgig 0x89 / cfgsg 0x8A / cfgis 0x8B) */
    edxn_cfg_entry_t     cfg[EDXN_CFG_MAX_ENTRIES];

    /* File handles (fopen/fclose/fread/etc.) */
    edxn_file_handle_t   files[EDXN_MAX_FILES];

    /* GRP → PRG variant resolution (mirrors TS Ediabas.runIdentAfterInit). */
    edxn_sgbd_loader_fn  sgbd_loader;
    void                *sgbd_loader_ctx;
    edxn_prg_t          *owned_prg;       /* swapped-in variant prg (we own); NULL otherwise */
    uint8_t             *owned_prg_bytes; /* backing bytes for owned_prg */
    bool                 ident_ran;       /* IDENTIFIKATION dispatched on this GRP load */

    /* External table file loader (tabsetex with arg1). */
    edxn_table_loader_fn table_loader;
    void                *table_loader_ctx;
    edxn_prg_t          *external_tables_prg;
    uint8_t             *external_tables_bytes;
    char                 external_tables_name[256];
};

edxn_error_t edxn_vm_init(edxn_vm_t *vm, edxn_prg_t *prg);
void         edxn_vm_free(edxn_vm_t *vm);
void         edxn_vm_reset(edxn_vm_t *vm);

edxn_error_t edxn_vm_set_params(edxn_vm_t *vm, const char *args);
/* Set the binary payload param (apiJobData channel — read by the
   SGBD's `pary` opcode 0x7F and the slot-indexed `parb`/`parw`/`parl`/
   `parr` reads). Pass NULL or 0-len to clear. Bytes are copied into
   the VM's internal buffer (capacity EDXN_PARAM_BINARY_MAX); excess
   is silently truncated to match the TS behaviour where ediabasx
   trusts the SGBD's input-length check rather than rejecting at the
   host. Mirrors TS `Ediabas.executeJob({ params: [Uint8Array] })`
   when the array carries a single binary entry — the difference is
   the C ABI separates the channels at the function signature level
   because we don't have a `string | Uint8Array` union here. */
edxn_error_t edxn_vm_set_binary_params(edxn_vm_t *vm,
                                        const uint8_t *bin, size_t bin_len);
edxn_error_t edxn_vm_exec(edxn_vm_t *vm, const char *job_name, const char *args);
edxn_error_t edxn_vm_exec_data(edxn_vm_t *vm, const char *job_name,
                                const char *args,
                                const uint8_t *bin, size_t bin_len);
/* Run a job by name without the auto-INITIALISIERUNG / IDENT bootstrap.
   The wrapper layer (`edxn_ediabas_t`) owns the bootstrap and calls this
   for both load-time INFO and per-job execution. Mirrors TS
   `Interpreter.execute` vs `Ediabas.executeJob`. */
edxn_error_t edxn_vm_exec_raw(edxn_vm_t *vm, const char *job_name,
                               const char *args);
edxn_error_t edxn_vm_exec_raw_data(edxn_vm_t *vm, const char *job_name,
                                    const char *args,
                                    const uint8_t *bin, size_t bin_len);
edxn_error_t edxn_vm_step(edxn_vm_t *vm);

/* Wire loader callbacks. Pass NULL fn to disable. */
void edxn_vm_set_sgbd_loader(edxn_vm_t *vm,
                              edxn_sgbd_loader_fn fn, void *ctx);
void edxn_vm_set_table_loader(edxn_vm_t *vm,
                               edxn_table_loader_fn fn, void *ctx);

/* Default POSIX file-backed loaders. ctx is a `const char *` holding the
   ECU directory (where .prg / external .grp / external .prg files live). */
edxn_error_t edxn_vm_posix_sgbd_loader(void *ctx, const char *variant_name,
                                        edxn_prg_t **out_prg, uint8_t **out_bytes);
edxn_error_t edxn_vm_posix_table_loader(void *ctx, const char *file_name,
                                         edxn_prg_t **out_prg, uint8_t **out_bytes);

#endif
