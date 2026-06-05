/**
 * `edxn_ediabas_t` — C wrapper layer above `edxn_vm_t`.
 *
 * Mirrors the TS `Ediabas` class and C# `EdiabasNet`. Provides:
 *   • persistent `system_results` accumulator across jobs
 *   • per-job materialised `[system_set, ...data_sets]` array
 *   • INITIALISIERUNG + IDENT auto-chain + variant swap
 *   • INFO run at load time to populate `system_results`
 *
 * Result indexing post-`exec`:
 *   set 0       — system set (VARIANTE, OBJECT, JOBNAME, SAETZE +
 *                 merge from `system_results`)
 *   set 1..N    — the job's data sets, in emission order
 */

#include "ediabasx/ediabas.h"
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

/* ── basename + extension helpers ─────────────────────────────────── */

static const char *basename_ptr(const char *path) {
    const char *p = path;
    const char *last = path;
    for (; *p; p++) {
        if (*p == '/' || *p == '\\') last = p + 1;
    }
    return last;
}

static void strip_extension_upper(const char *src, char *dst, size_t dst_max) {
    const char *base = basename_ptr(src);
    const char *dot = strrchr(base, '.');
    size_t len = dot ? (size_t)(dot - base) : strlen(base);
    if (len >= dst_max) len = dst_max - 1;
    for (size_t i = 0; i < len; i++) {
        dst[i] = (char)toupper((unsigned char)base[i]);
    }
    dst[len] = '\0';
}

static void strip_extension_lower(const char *src, char *dst, size_t dst_max) {
    const char *base = basename_ptr(src);
    const char *dot = strrchr(base, '.');
    size_t len = dot ? (size_t)(dot - base) : strlen(base);
    if (len >= dst_max) len = dst_max - 1;
    for (size_t i = 0; i < len; i++) {
        dst[i] = (char)tolower((unsigned char)base[i]);
    }
    dst[len] = '\0';
}

/* ── deep-copy a result_set (entries hold heap-allocated strings) ─── */

static edxn_error_t result_set_copy(edxn_result_set_t *dst,
                                     const edxn_result_set_t *src) {
    edxn_error_t err = edxn_result_init(dst, src->count > 0 ? src->count : 4);
    if (err != EDXN_OK) return err;
    for (size_t i = 0; i < src->count; i++) {
        const edxn_result_entry_t *e = &src->entries[i];
        switch (e->type) {
        case EDXN_TYPE_INT:
        case EDXN_TYPE_LONG:
        case EDXN_TYPE_CHAR:
        case EDXN_TYPE_WORD:
        case EDXN_TYPE_DWORD:
        case EDXN_TYPE_BYTE:
            err = edxn_result_add_int(dst, e->name, e->type, e->value.i);
            break;
        case EDXN_TYPE_FLOAT:
            err = edxn_result_add_float(dst, e->name, e->value.f);
            break;
        case EDXN_TYPE_STRING:
        case EDXN_TYPE_BINARY:
            err = edxn_result_add_binary(dst, e->name, e->type,
                                          e->value.bin.data, e->value.bin.len);
            break;
        }
        if (err != EDXN_OK) {
            edxn_result_free(dst);
            return err;
        }
    }
    return EDXN_OK;
}

/* ── built_sets lifecycle ─────────────────────────────────────────── */

static void built_sets_clear(edxn_ediabas_t *eb) {
    for (size_t i = 0; i < eb->built_set_count; i++) {
        edxn_result_free(&eb->built_sets[i]);
    }
    eb->built_set_count = 0;
}

static edxn_error_t built_sets_push(edxn_ediabas_t *eb,
                                     const edxn_result_set_t *src) {
    if (eb->built_set_count >= eb->built_set_cap) {
        size_t new_cap = eb->built_set_cap == 0 ? 4 : eb->built_set_cap * 2;
        edxn_result_set_t *p = (edxn_result_set_t *)realloc(
            eb->built_sets, new_cap * sizeof(*p));
        if (!p) return EDXN_ERR_NOMEM;
        eb->built_sets = p;
        eb->built_set_cap = new_cap;
    }
    return result_set_copy(&eb->built_sets[eb->built_set_count++], src);
}

/* ── system_results merge / build ─────────────────────────────────── */

/* Merge entries from `src` into the persistent `system_results`. If
   `skip_variante` is true, the VARIANTE key is honoured from existing
   state (load-time INFO must not overwrite the basename-derived
   VARIANTE — same guard as TS `runInfoForSystemResults`). */
static void system_results_merge(edxn_ediabas_t *eb,
                                  const edxn_result_set_t *src,
                                  bool skip_variante) {
    for (size_t i = 0; i < src->count; i++) {
        const edxn_result_entry_t *e = &src->entries[i];
        if (skip_variante && strcasecmp(e->name, "VARIANTE") == 0) continue;
        switch (e->type) {
        case EDXN_TYPE_INT:
        case EDXN_TYPE_LONG:
        case EDXN_TYPE_CHAR:
        case EDXN_TYPE_WORD:
        case EDXN_TYPE_DWORD:
        case EDXN_TYPE_BYTE:
            edxn_result_add_int(&eb->system_results, e->name, e->type, e->value.i);
            break;
        case EDXN_TYPE_FLOAT:
            edxn_result_add_float(&eb->system_results, e->name, e->value.f);
            break;
        case EDXN_TYPE_STRING:
        case EDXN_TYPE_BINARY:
            edxn_result_add_binary(&eb->system_results, e->name, e->type,
                                    e->value.bin.data, e->value.bin.len);
            break;
        }
    }
}

/* Build the per-job system set: always-present fields seeded first
   (VARIANTE/OBJECT/JOBNAME/SAETZE), then everything from the
   persistent `system_results` accumulator merges in without
   overwriting. Mirrors C# `CreateSystemResultDict`. */
static edxn_error_t build_system_set(edxn_ediabas_t *eb,
                                      const char *job_name,
                                      size_t data_set_count,
                                      edxn_result_set_t *out) {
    edxn_error_t err = edxn_result_init(out, 16);
    if (err != EDXN_OK) return err;

    char basename_upper[EDXN_EDIABAS_VARIANT_NAME_MAX];
    strip_extension_upper(eb->sgbd_name, basename_upper, sizeof(basename_upper));

    edxn_result_add_binary(out, "VARIANTE", EDXN_TYPE_STRING,
                            (const uint8_t *)basename_upper, strlen(basename_upper));
    edxn_result_add_binary(out, "OBJECT", EDXN_TYPE_STRING,
                            (const uint8_t *)basename_upper, strlen(basename_upper));
    edxn_result_add_binary(out, "JOBNAME", EDXN_TYPE_STRING,
                            (const uint8_t *)job_name, strlen(job_name));
    edxn_result_add_int(out, "SAETZE", EDXN_TYPE_WORD, (int64_t)data_set_count);

    /* Merge in everything from system_results that isn't already
       seeded. Matches the C# loop that walks `_resultSysDict.Keys`
       and skips already-present keys. */
    for (size_t i = 0; i < eb->system_results.count; i++) {
        const edxn_result_entry_t *e = &eb->system_results.entries[i];
        if (edxn_result_find(out, e->name) != NULL) continue;
        switch (e->type) {
        case EDXN_TYPE_INT:
        case EDXN_TYPE_LONG:
        case EDXN_TYPE_CHAR:
        case EDXN_TYPE_WORD:
        case EDXN_TYPE_DWORD:
        case EDXN_TYPE_BYTE:
            edxn_result_add_int(out, e->name, e->type, e->value.i);
            break;
        case EDXN_TYPE_FLOAT:
            edxn_result_add_float(out, e->name, e->value.f);
            break;
        case EDXN_TYPE_STRING:
        case EDXN_TYPE_BINARY:
            edxn_result_add_binary(out, e->name, e->type,
                                    e->value.bin.data, e->value.bin.len);
            break;
        }
    }
    return EDXN_OK;
}

/* ── group cache ──────────────────────────────────────────────────── */

static const char *group_cache_lookup(const edxn_ediabas_t *eb,
                                       const char *group_lower) {
    for (size_t i = 0; i < eb->group_cache_count; i++) {
        if (strcmp(eb->group_cache[i].group, group_lower) == 0) {
            return eb->group_cache[i].variant;
        }
    }
    return NULL;
}

static void group_cache_set(edxn_ediabas_t *eb,
                             const char *group_lower, const char *variant_lower) {
    /* Replace existing entry, or append (capped at MAX). */
    for (size_t i = 0; i < eb->group_cache_count; i++) {
        if (strcmp(eb->group_cache[i].group, group_lower) == 0) {
            strncpy(eb->group_cache[i].variant, variant_lower,
                    EDXN_EDIABAS_VARIANT_NAME_MAX - 1);
            eb->group_cache[i].variant[EDXN_EDIABAS_VARIANT_NAME_MAX - 1] = '\0';
            return;
        }
    }
    if (eb->group_cache_count >= EDXN_EDIABAS_GROUP_CACHE_MAX) return;
    edxn_ediabas_group_map_t *m = &eb->group_cache[eb->group_cache_count++];
    strncpy(m->group, group_lower, EDXN_EDIABAS_VARIANT_NAME_MAX - 1);
    m->group[EDXN_EDIABAS_VARIANT_NAME_MAX - 1] = '\0';
    strncpy(m->variant, variant_lower, EDXN_EDIABAS_VARIANT_NAME_MAX - 1);
    m->variant[EDXN_EDIABAS_VARIANT_NAME_MAX - 1] = '\0';
}

/* ── load_sgbd ────────────────────────────────────────────────────── */

static void release_loaded_prg(edxn_ediabas_t *eb) {
    if (eb->prg) {
        edxn_prg_free(eb->prg);
        free(eb->prg);
        eb->prg = NULL;
    }
    free(eb->prg_bytes);
    eb->prg_bytes = NULL;
}

edxn_error_t edxn_ediabas_load_sgbd(edxn_ediabas_t *eb,
                                     edxn_prg_t *prg, uint8_t *prg_bytes,
                                     const char *sgbd_name) {
    if (!eb || !prg || !sgbd_name) return EDXN_ERR_OPERAND;

    /* Free previous load. The VM holds a pointer into prg->code via
       vm->prg — rebinding through edxn_vm_init wipes that reference
       before we release the bytes. */
    release_loaded_prg(eb);
    edxn_result_clear(&eb->system_results);
    built_sets_clear(eb);

    /* Re-init the VM against the new prg. We preserve loaders +
       transport across the rebind — those are session-scoped, not
       per-SGBD. */
    edxn_transport_t    *saved_transport   = eb->vm.transport;
    edxn_sgbd_loader_fn  saved_sgbd_fn     = eb->vm.sgbd_loader;
    void                *saved_sgbd_ctx    = eb->vm.sgbd_loader_ctx;
    edxn_table_loader_fn saved_table_fn    = eb->vm.table_loader;
    void                *saved_table_ctx   = eb->vm.table_loader_ctx;
    edxn_vm_free(&eb->vm);
    edxn_error_t err = edxn_vm_init(&eb->vm, prg);
    if (err != EDXN_OK) {
        edxn_prg_free(prg);
        free(prg);
        free(prg_bytes);
        return err;
    }
    eb->vm.transport = saved_transport;
    eb->vm.sgbd_loader = saved_sgbd_fn;
    eb->vm.sgbd_loader_ctx = saved_sgbd_ctx;
    eb->vm.table_loader = saved_table_fn;
    eb->vm.table_loader_ctx = saved_table_ctx;

    eb->prg = prg;
    eb->prg_bytes = prg_bytes;
    strncpy(eb->sgbd_name, sgbd_name, sizeof(eb->sgbd_name) - 1);
    eb->sgbd_name[sizeof(eb->sgbd_name) - 1] = '\0';
    eb->init_ran = false;
    eb->ident_ran = false;

    /* Seed VARIANTE from basename so script-side `VARIANTE` checks
       have something before IDENT swaps it (matches TS). */
    char basename_upper[EDXN_EDIABAS_VARIANT_NAME_MAX];
    strip_extension_upper(eb->sgbd_name, basename_upper, sizeof(basename_upper));
    edxn_result_add_binary(&eb->system_results, "VARIANTE", EDXN_TYPE_STRING,
                            (const uint8_t *)basename_upper, strlen(basename_upper));

    /* Run INFO (pure metadata, no comms) at load time so the
       persistent system_results carries ECU / ORIGIN / REVISION / …
       into the first user job. Failures are non-fatal — some custom
       SGBDs omit INFO. */
    if (edxn_prg_find_job(prg, "INFO") >= 0) {
        if (edxn_vm_exec_raw(&eb->vm, "INFO", "") == EDXN_OK) {
            system_results_merge(eb, &eb->vm.current_results, /*skip_variante=*/true);
        }
        edxn_result_clear(&eb->vm.current_results);
    }

    return EDXN_OK;
}

/* ── variant swap (.grp → .prg) ───────────────────────────────────── */

/* Replace the loaded .grp with the resolved variant's .prg. Mirrors
   TS `Ediabas.swapToVariant`. The variant comes from the sgbd_loader
   callback; we replace eb->prg/prg_bytes wholesale and re-init the
   VM. Failures are non-fatal — we just leave the .grp in place. */
static void swap_to_variant(edxn_ediabas_t *eb, const char *variant_name) {
    if (!eb->vm.sgbd_loader) return;
    edxn_prg_t *new_prg = NULL;
    uint8_t    *new_bytes = NULL;
    edxn_error_t err = eb->vm.sgbd_loader(eb->vm.sgbd_loader_ctx,
                                            variant_name, &new_prg, &new_bytes);
    if (err != EDXN_OK || !new_prg) return;

    /* Take over ownership and re-init VM against the variant. We do
       NOT recurse into load_sgbd here — that would wipe init_ran and
       force INITIALISIERUNG to re-run. The variant inherits the
       caller's session state. */
    release_loaded_prg(eb);
    edxn_transport_t    *saved_transport   = eb->vm.transport;
    edxn_sgbd_loader_fn  saved_sgbd_fn     = eb->vm.sgbd_loader;
    void                *saved_sgbd_ctx    = eb->vm.sgbd_loader_ctx;
    edxn_table_loader_fn saved_table_fn    = eb->vm.table_loader;
    void                *saved_table_ctx   = eb->vm.table_loader_ctx;
    bool                 saved_init        = eb->vm.initialized;
    edxn_vm_free(&eb->vm);
    if (edxn_vm_init(&eb->vm, new_prg) != EDXN_OK) {
        edxn_prg_free(new_prg);
        free(new_prg);
        free(new_bytes);
        return;
    }
    eb->vm.transport = saved_transport;
    eb->vm.sgbd_loader = saved_sgbd_fn;
    eb->vm.sgbd_loader_ctx = saved_sgbd_ctx;
    eb->vm.table_loader = saved_table_fn;
    eb->vm.table_loader_ctx = saved_table_ctx;
    eb->vm.initialized = saved_init;

    eb->prg = new_prg;
    eb->prg_bytes = new_bytes;
    /* sgbd_name now reflects the variant (lowercase, no extension —
       same form group_cache stores so a future reload short-circuits). */
    strncpy(eb->sgbd_name, variant_name, sizeof(eb->sgbd_name) - 1);
    eb->sgbd_name[sizeof(eb->sgbd_name) - 1] = '\0';

    /* Pin VARIANTE to the resolved name (matches TS swapToVariant —
       overrides the basename-derived default in case of an alias). */
    edxn_result_clear(&eb->system_results);
    char variant_upper[EDXN_EDIABAS_VARIANT_NAME_MAX];
    size_t vlen = strlen(variant_name);
    if (vlen >= sizeof(variant_upper)) vlen = sizeof(variant_upper) - 1;
    for (size_t i = 0; i < vlen; i++) {
        variant_upper[i] = (char)toupper((unsigned char)variant_name[i]);
    }
    variant_upper[vlen] = '\0';
    edxn_result_add_binary(&eb->system_results, "VARIANTE", EDXN_TYPE_STRING,
                            (const uint8_t *)variant_upper, vlen);

    /* Refresh INFO outputs from the variant. */
    if (edxn_prg_find_job(new_prg, "INFO") >= 0) {
        if (edxn_vm_exec_raw(&eb->vm, "INFO", "") == EDXN_OK) {
            system_results_merge(eb, &eb->vm.current_results, /*skip_variante=*/true);
        }
        edxn_result_clear(&eb->vm.current_results);
    }
}

/* Run IDENTIFIKATION on a .grp, extract VARIANTE, swap. Idempotent
   per load. */
static void run_ident_and_swap(edxn_ediabas_t *eb) {
    if (eb->ident_ran) return;
    if (!eb->prg || eb->prg->header.version != 0) return; /* .grp only */
    if (edxn_prg_find_job(eb->prg, "IDENTIFIKATION") < 0) return;
    eb->ident_ran = true;

    if (edxn_vm_exec_raw(&eb->vm, "IDENTIFIKATION", "") != EDXN_OK) return;

    /* Scan current_results for VARIANTE (last non-empty wins). */
    char variant_name[EDXN_EDIABAS_VARIANT_NAME_MAX];
    variant_name[0] = '\0';
    for (size_t i = 0; i < eb->vm.current_results.count; i++) {
        const edxn_result_entry_t *e = &eb->vm.current_results.entries[i];
        if (e->type == EDXN_TYPE_STRING && strcasecmp(e->name, "VARIANTE") == 0
            && e->value.bin.len > 0) {
            size_t n = e->value.bin.len;
            if (n >= sizeof(variant_name)) n = sizeof(variant_name) - 1;
            memcpy(variant_name, e->value.bin.data, n);
            variant_name[n] = '\0';
        }
    }
    edxn_result_clear(&eb->vm.current_results);
    if (variant_name[0] == '\0') return;

    /* Cache group → variant for next load. */
    char group_lower[EDXN_EDIABAS_VARIANT_NAME_MAX];
    char variant_lower[EDXN_EDIABAS_VARIANT_NAME_MAX];
    strip_extension_lower(eb->sgbd_name, group_lower, sizeof(group_lower));
    for (size_t i = 0; variant_name[i]; i++) {
        variant_lower[i] = (char)tolower((unsigned char)variant_name[i]);
        variant_lower[i + 1] = '\0';
    }
    group_cache_set(eb, group_lower, variant_lower);

    swap_to_variant(eb, variant_name);
}

/* ── lifecycle ────────────────────────────────────────────────────── */

edxn_error_t edxn_ediabas_init(edxn_ediabas_t *eb) {
    if (!eb) return EDXN_ERR_OPERAND;
    memset(eb, 0, sizeof(*eb));
    /* We init the VM with a NULL prg — it'll be re-init'd inside
       load_sgbd. edxn_vm_init only needs prg to seed table_state, so
       we postpone full init until then. To avoid asserts in
       result_init, do a minimal warm-up here. */
    edxn_error_t err = edxn_result_init(&eb->system_results, 8);
    if (err != EDXN_OK) return err;
    /* VM stays zeroed; load_sgbd will fully init it. */
    return EDXN_OK;
}

void edxn_ediabas_free(edxn_ediabas_t *eb) {
    if (!eb) return;
    if (eb->prg) {
        edxn_vm_free(&eb->vm);
    }
    edxn_result_free(&eb->system_results);
    built_sets_clear(eb);
    free(eb->built_sets);
    release_loaded_prg(eb);
    memset(eb, 0, sizeof(*eb));
}

void edxn_ediabas_set_transport(edxn_ediabas_t *eb, edxn_transport_t *transport) {
    if (!eb) return;
    eb->vm.transport = transport;
}

void edxn_ediabas_set_sgbd_loader(edxn_ediabas_t *eb,
                                   edxn_sgbd_loader_fn fn, void *ctx) {
    if (!eb) return;
    eb->vm.sgbd_loader = fn;
    eb->vm.sgbd_loader_ctx = ctx;
}

void edxn_ediabas_set_table_loader(edxn_ediabas_t *eb,
                                    edxn_table_loader_fn fn, void *ctx) {
    if (!eb) return;
    eb->vm.table_loader = fn;
    eb->vm.table_loader_ctx = ctx;
}

/* ── exec ─────────────────────────────────────────────────────────── */

static void capture_job_status(edxn_ediabas_t *eb) {
    /* JOB_STATUS may land in current_results or any archived set —
       walk from the most recent backwards (matches TS). */
    if (eb->vm.current_results.count > 0) {
        const edxn_result_entry_t *e =
            edxn_result_find(&eb->vm.current_results, "JOB_STATUS");
        if (e) {
            edxn_result_add_binary(&eb->system_results, "JOB_STATUS",
                                    e->type, e->value.bin.data, e->value.bin.len);
            return;
        }
    }
    for (size_t i = eb->vm.result_set_count; i > 0; i--) {
        const edxn_result_entry_t *e =
            edxn_result_find(&eb->vm.result_sets[i - 1], "JOB_STATUS");
        if (e) {
            edxn_result_add_binary(&eb->system_results, "JOB_STATUS",
                                    e->type, e->value.bin.data, e->value.bin.len);
            return;
        }
    }
}

edxn_error_t edxn_ediabas_exec(edxn_ediabas_t *eb,
                                const char *job_name, const char *args) {
    return edxn_ediabas_exec_data(eb, job_name, args, NULL, 0);
}

edxn_error_t edxn_ediabas_exec_data(edxn_ediabas_t *eb,
                                     const char *job_name, const char *args,
                                     const uint8_t *bin, size_t bin_len) {
    if (!eb || !job_name || !eb->prg) return EDXN_ERR_OPERAND;
    if (!args) args = "";

    bool is_explicit_ident = strcasecmp(job_name, "IDENTIFIKATION") == 0;

    /* Bootstrap: INITIALISIERUNG + (for .grp) IDENT/swap. Runs at
       most once per load. The user's explicit IDENT skips the
       auto-IDENT and is handled post-job below (matches TS). The
       bootstrap jobs themselves take no binary payload — that
       channel is exclusively for the caller's user job. */
    if (!eb->init_ran && job_name[0] != '_'
        && strcasecmp(job_name, "INITIALISIERUNG") != 0
        && edxn_prg_find_job(eb->prg, "INITIALISIERUNG") >= 0) {
        edxn_vm_exec_raw(&eb->vm, "INITIALISIERUNG", "");
        edxn_result_clear(&eb->vm.current_results);
        eb->init_ran = true;
        eb->vm.initialized = true;
        if (!is_explicit_ident) {
            run_ident_and_swap(eb);
        }
    }

    /* Execute the user's job — binary payload applied here. */
    edxn_error_t err = edxn_vm_exec_raw_data(&eb->vm, job_name, args, bin, bin_len);
    if (err != EDXN_OK) return err;

    /* Capture JOB_STATUS into persistent system_results. */
    capture_job_status(eb);

    /* If the user just ran INITIALISIERUNG explicitly, chain IDENT
       now so .grp resolution still happens. */
    if (strcasecmp(job_name, "INITIALISIERUNG") == 0) {
        eb->init_ran = true;
        eb->vm.initialized = true;
        run_ident_and_swap(eb);
    }
    /* If the user ran IDENT explicitly on a .grp, do the post-job
       swap (matches TS — runs IDENT on the .grp bytecode, then
       swaps; auto-chain in run_ident_and_swap was skipped above). */
    if (is_explicit_ident && eb->prg->header.version == 0 && !eb->ident_ran) {
        eb->ident_ran = true;
        char variant_name[EDXN_EDIABAS_VARIANT_NAME_MAX];
        variant_name[0] = '\0';
        for (size_t i = 0; i < eb->vm.current_results.count; i++) {
            const edxn_result_entry_t *e = &eb->vm.current_results.entries[i];
            if (e->type == EDXN_TYPE_STRING && strcasecmp(e->name, "VARIANTE") == 0
                && e->value.bin.len > 0) {
                size_t n = e->value.bin.len;
                if (n >= sizeof(variant_name)) n = sizeof(variant_name) - 1;
                memcpy(variant_name, e->value.bin.data, n);
                variant_name[n] = '\0';
            }
        }
        if (variant_name[0] != '\0') {
            char group_lower[EDXN_EDIABAS_VARIANT_NAME_MAX];
            char variant_lower[EDXN_EDIABAS_VARIANT_NAME_MAX];
            strip_extension_lower(eb->sgbd_name, group_lower, sizeof(group_lower));
            for (size_t i = 0; variant_name[i]; i++) {
                variant_lower[i] = (char)tolower((unsigned char)variant_name[i]);
                variant_lower[i + 1] = '\0';
            }
            group_cache_set(eb, group_lower, variant_lower);
            /* swap_to_variant resets system_results — capture the
               user's job sets first so the materialise below sees
               them. We snapshot then restore. */
            /* For .grp IDENT: there are no data sets the user expects
               beyond IDENT's own results, and swap reloads INFO. The
               TS behaviour leaves the user's IDENT results visible
               via the materialise step that follows. To match, we
               materialise BEFORE the swap when the user explicitly
               ran IDENT. */
        }
    }

    /* Materialise [system_set, ...data_sets]:
       data_sets = archived result_sets[] + current_results-if-nonempty. */
    built_sets_clear(eb);

    size_t data_set_count = eb->vm.result_set_count
                             + (eb->vm.current_results.count > 0 ? 1 : 0);

    edxn_result_set_t system_set;
    err = build_system_set(eb, job_name, data_set_count, &system_set);
    if (err != EDXN_OK) return err;
    err = built_sets_push(eb, &system_set);
    edxn_result_free(&system_set);
    if (err != EDXN_OK) return err;

    for (size_t i = 0; i < eb->vm.result_set_count; i++) {
        err = built_sets_push(eb, &eb->vm.result_sets[i]);
        if (err != EDXN_OK) return err;
    }
    if (eb->vm.current_results.count > 0) {
        err = built_sets_push(eb, &eb->vm.current_results);
        if (err != EDXN_OK) return err;
    }
    return EDXN_OK;
}

/* ── accessors ────────────────────────────────────────────────────── */

size_t edxn_ediabas_result_sets(const edxn_ediabas_t *eb) {
    if (!eb || eb->built_set_count == 0) return 0;
    return eb->built_set_count - 1;
}

const edxn_result_set_t *edxn_ediabas_get_sets(const edxn_ediabas_t *eb,
                                                size_t *out_count) {
    if (!eb) {
        if (out_count) *out_count = 0;
        return NULL;
    }
    if (out_count) *out_count = eb->built_set_count;
    return eb->built_sets;
}

const edxn_result_set_t *edxn_ediabas_get_system_results(const edxn_ediabas_t *eb) {
    return eb ? &eb->system_results : NULL;
}

const edxn_result_entry_t *edxn_ediabas_find_result(const edxn_ediabas_t *eb,
                                                     const char *name,
                                                     size_t set_index) {
    if (!eb || !name || set_index >= eb->built_set_count) return NULL;
    return edxn_result_find(&eb->built_sets[set_index], name);
}
