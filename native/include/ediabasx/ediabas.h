#ifndef EDXN_EDIABAS_H
#define EDXN_EDIABAS_H

/**
 * `edxn_ediabas_t` — the C analogue of the TypeScript `Ediabas` class
 * and the C# `EdiabasNet`. Sits above `edxn_vm_t` and provides the
 * native-API-compatible result shape:
 *
 *   • `system_results` — persistent accumulator across jobs
 *     (analogous to C# `_resultSysDict`). Holds the SGBD's INFO output
 *     (ECU / ORIGIN / REVISION / …), IDENT-resolved VARIANTE, and the
 *     most-recent JOB_STATUS. Survives the per-job VM reset.
 *
 *   • `built_sets[]` — the per-job materialised result array. Index 0
 *     is the **system set** (VARIANTE, OBJECT, JOBNAME, SAETZE merged
 *     with everything from `system_results`); indices 1..N are the
 *     job's data sets. Matches `_resultSets` in C# and the post-fix
 *     shape returned by TS `Ediabas.executeJob`.
 *
 *   • Bootstrap — first `exec` after a `load_sgbd` runs INITIALISIERUNG
 *     (if defined) then, for `.grp` files, IDENTIFIKATION followed by
 *     a variant `.prg` swap. Same auto-chain TS / C# do.
 *
 * Lifecycle:
 *   edxn_ediabas_init(&eb)                              // zero state
 *   edxn_ediabas_set_sgbd_loader(&eb, fn, ctx)          // optional
 *   edxn_ediabas_set_table_loader(&eb, fn, ctx)         // optional
 *   edxn_ediabas_set_transport(&eb, transport)          // optional
 *   edxn_ediabas_load_sgbd(&eb, prg, prg_bytes, name)   // takes ownership of prg/bytes
 *   edxn_ediabas_exec(&eb, "STATUS_LESEN", "")          // run a job
 *   ... read via edxn_ediabas_get_sets / find_result ...
 *   edxn_ediabas_free(&eb)
 *
 * Ownership: once `load_sgbd` returns OK, the wrapper owns `prg` and
 * `prg_bytes` and frees them on the next `load_sgbd` / `free`. On
 * `.grp` variant swap the wrapper also owns the swapped-in `.prg`.
 */

#include "types.h"
#include "vm.h"
#include "prg.h"
#include "result.h"

#define EDXN_EDIABAS_PATH_MAX 256
#define EDXN_EDIABAS_GROUP_CACHE_MAX 16
#define EDXN_EDIABAS_VARIANT_NAME_MAX 64

typedef struct {
    char group[EDXN_EDIABAS_VARIANT_NAME_MAX];
    char variant[EDXN_EDIABAS_VARIANT_NAME_MAX];
} edxn_ediabas_group_map_t;

typedef struct {
    edxn_vm_t  vm;

    /* Loaded SGBD ownership — wrapper frees these on next load / free. */
    edxn_prg_t *prg;
    uint8_t    *prg_bytes;
    char        sgbd_name[EDXN_EDIABAS_PATH_MAX];

    /* Persistent accumulator — survives the per-job VM reset. */
    edxn_result_set_t system_results;

    /* Materialised [system_set, ...data_sets] for the most recent
       exec. Invalidated on the next exec call. */
    edxn_result_set_t *built_sets;
    size_t             built_set_count;
    size_t             built_set_cap;

    /* Group-mapping cache: once a `.grp` resolves to a variant via
       IDENT, future `load_sgbd(<same.grp>)` calls jump straight to
       the variant `.prg` and skip the IDENT probe. */
    edxn_ediabas_group_map_t group_cache[EDXN_EDIABAS_GROUP_CACHE_MAX];
    size_t                   group_cache_count;

    bool init_ran;   /* INITIALISIERUNG dispatched on this load */
    bool ident_ran;  /* IDENTIFIKATION dispatched on this load (.grp only) */
} edxn_ediabas_t;

edxn_error_t edxn_ediabas_init(edxn_ediabas_t *eb);
void         edxn_ediabas_free(edxn_ediabas_t *eb);

void edxn_ediabas_set_transport(edxn_ediabas_t *eb, edxn_transport_t *transport);
void edxn_ediabas_set_sgbd_loader(edxn_ediabas_t *eb,
                                   edxn_sgbd_loader_fn fn, void *ctx);
void edxn_ediabas_set_table_loader(edxn_ediabas_t *eb,
                                    edxn_table_loader_fn fn, void *ctx);

/* Bind a parsed PRG (taking ownership of prg/prg_bytes), seed VARIANTE
   from `sgbd_name`'s basename, and run the SGBD's INFO job (if any)
   into the persistent `system_results`. Subsequent `exec` calls will
   auto-run INITIALISIERUNG + IDENT/swap (.grp) on first dispatch. */
edxn_error_t edxn_ediabas_load_sgbd(edxn_ediabas_t *eb,
                                     edxn_prg_t *prg, uint8_t *prg_bytes,
                                     const char *sgbd_name);

/* Run a job. On first call after `load_sgbd`, runs INITIALISIERUNG
   (if defined) then IDENTIFIKATION + variant swap (for .grp). Then
   executes the named job, captures JOB_STATUS into `system_results`,
   and materialises `built_sets` = [system_set, ...data_sets]. */
edxn_error_t edxn_ediabas_exec(edxn_ediabas_t *eb,
                                const char *job_name, const char *args);
/* Same as `edxn_ediabas_exec` but also installs a binary payload
   (apiJobData channel — read by the SGBD's `pary` opcode 0x7F and
   the slot-indexed `parb`/`parw`/`parl`/`parr` reads). Pass NULL/0
   for `bin`/`bin_len` to match the string-only `exec` behaviour.
   Mirrors TS `IEdiabas.job(ecu, jobName, Uint8Array | mixed array)`. */
edxn_error_t edxn_ediabas_exec_data(edxn_ediabas_t *eb,
                                     const char *job_name, const char *args,
                                     const uint8_t *bin, size_t bin_len);

/* Number of **data** sets in the most recent exec — i.e.
   `built_set_count - 1` (clamped at 0). Mirrors C# `apiResultSets`. */
size_t edxn_ediabas_result_sets(const edxn_ediabas_t *eb);

/* Full materialised array (set 0 = system, set 1..N = data).
   Valid until the next `exec`/`load_sgbd`/`free`. */
const edxn_result_set_t *edxn_ediabas_get_sets(const edxn_ediabas_t *eb,
                                                size_t *out_count);

/* Persistent accumulator (analogue of C# `_resultSysDict`). */
const edxn_result_set_t *edxn_ediabas_get_system_results(const edxn_ediabas_t *eb);

/* Look up a result by name in set `set_index` (0 = system set). */
const edxn_result_entry_t *edxn_ediabas_find_result(const edxn_ediabas_t *eb,
                                                     const char *name,
                                                     size_t set_index);

#endif
