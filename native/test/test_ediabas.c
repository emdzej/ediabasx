/**
 * Smoke test for the `edxn_ediabas_t` wrapper layer.
 *
 * Covers the wiring that doesn't need a real PRG with executable
 * bytecode: lifecycle (init/free), load_sgbd's VARIANTE seeding,
 * persistent system_results access. Full exec / bootstrap /
 * variant-swap coverage needs a real BMW SGBD and lives in the
 * `edxn_run` integration driver against on-disk fixtures.
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <assert.h>
#include "ediabasx/ediabas.h"
#include "ediabasx/prg.h"

/* Build a minimal legacy PRG (no jobs, no code). Enough to satisfy
   edxn_prg_parse so the wrapper can bind to it. */
static edxn_prg_t *build_empty_prg(uint8_t **out_bytes) {
    uint8_t *buf = (uint8_t *)calloc(1, 64);
    if (!buf) return NULL;
    buf[0] = 'P'; buf[1] = 'R'; buf[2] = 'G'; buf[3] = 0x00;
    buf[4] = 1;             /* version = 1 (.prg, not .grp) */
    buf[8] = 32;            /* string_table_off */
    buf[16] = 32;           /* job_table_off */
    buf[24] = 32;           /* code_off */

    edxn_prg_t *prg = (edxn_prg_t *)calloc(1, sizeof(*prg));
    if (!prg) { free(buf); return NULL; }
    if (edxn_prg_parse(prg, buf, 64) != EDXN_OK) {
        free(prg); free(buf); return NULL;
    }
    *out_bytes = buf;
    return prg;
}

static void test_lifecycle(void) {
    edxn_ediabas_t eb;
    assert(edxn_ediabas_init(&eb) == EDXN_OK);
    edxn_ediabas_free(&eb);
    /* Double-free should be safe (memset to zero). */
    edxn_ediabas_free(&eb);
    printf("  PASS: test_lifecycle\n");
}

static void test_load_sgbd_seeds_variante(void) {
    edxn_ediabas_t eb;
    assert(edxn_ediabas_init(&eb) == EDXN_OK);

    uint8_t *bytes = NULL;
    edxn_prg_t *prg = build_empty_prg(&bytes);
    assert(prg != NULL);

    /* Use a mixed-case path with an extension — wrapper should
       strip the dir + ext and uppercase, matching TS. */
    assert(edxn_ediabas_load_sgbd(&eb, prg, bytes, "ecu/Ms430Ds0.prg") == EDXN_OK);

    const edxn_result_set_t *sys = edxn_ediabas_get_system_results(&eb);
    assert(sys != NULL);
    const edxn_result_entry_t *variante = edxn_result_find(sys, "VARIANTE");
    assert(variante != NULL);
    assert(variante->type == EDXN_TYPE_STRING);
    assert(variante->value.bin.len == 8);
    assert(memcmp(variante->value.bin.data, "MS430DS0", 8) == 0);

    edxn_ediabas_free(&eb);
    printf("  PASS: test_load_sgbd_seeds_variante\n");
}

static void test_load_sgbd_replaces_previous(void) {
    edxn_ediabas_t eb;
    assert(edxn_ediabas_init(&eb) == EDXN_OK);

    uint8_t *bytes_a = NULL;
    edxn_prg_t *prg_a = build_empty_prg(&bytes_a);
    assert(prg_a != NULL);
    assert(edxn_ediabas_load_sgbd(&eb, prg_a, bytes_a, "first.prg") == EDXN_OK);

    /* Loading a second SGBD should free the first cleanly and
       re-seed VARIANTE. */
    uint8_t *bytes_b = NULL;
    edxn_prg_t *prg_b = build_empty_prg(&bytes_b);
    assert(prg_b != NULL);
    assert(edxn_ediabas_load_sgbd(&eb, prg_b, bytes_b, "second.prg") == EDXN_OK);

    const edxn_result_entry_t *v =
        edxn_result_find(edxn_ediabas_get_system_results(&eb), "VARIANTE");
    assert(v != NULL);
    assert(v->value.bin.len == 6);
    assert(memcmp(v->value.bin.data, "SECOND", 6) == 0);

    edxn_ediabas_free(&eb);
    printf("  PASS: test_load_sgbd_replaces_previous\n");
}

static void test_no_built_sets_before_exec(void) {
    edxn_ediabas_t eb;
    assert(edxn_ediabas_init(&eb) == EDXN_OK);

    uint8_t *bytes = NULL;
    edxn_prg_t *prg = build_empty_prg(&bytes);
    assert(prg != NULL);
    assert(edxn_ediabas_load_sgbd(&eb, prg, bytes, "x.prg") == EDXN_OK);

    /* Before any exec: no built sets — result_sets() returns 0. */
    assert(edxn_ediabas_result_sets(&eb) == 0);
    size_t count = 999;
    const edxn_result_set_t *sets = edxn_ediabas_get_sets(&eb, &count);
    assert(count == 0);
    (void)sets;

    /* find_result with out-of-range index returns NULL gracefully. */
    assert(edxn_ediabas_find_result(&eb, "VARIANTE", 0) == NULL);

    edxn_ediabas_free(&eb);
    printf("  PASS: test_no_built_sets_before_exec\n");
}

static void test_exec_missing_job_returns_error(void) {
    edxn_ediabas_t eb;
    assert(edxn_ediabas_init(&eb) == EDXN_OK);
    uint8_t *bytes = NULL;
    edxn_prg_t *prg = build_empty_prg(&bytes);
    assert(prg != NULL);
    assert(edxn_ediabas_load_sgbd(&eb, prg, bytes, "x.prg") == EDXN_OK);

    /* PRG has no jobs — exec must surface JOB_NOT_FOUND, not crash. */
    assert(edxn_ediabas_exec(&eb, "NONEXISTENT", "") == EDXN_ERR_JOB_NOT_FOUND);

    edxn_ediabas_free(&eb);
    printf("  PASS: test_exec_missing_job_returns_error\n");
}

int main(void) {
    printf("Ediabas wrapper tests:\n");
    test_lifecycle();
    test_load_sgbd_seeds_variante();
    test_load_sgbd_replaces_previous();
    test_no_built_sets_before_exec();
    test_exec_missing_job_returns_error();
    printf("All Ediabas wrapper tests passed.\n");
    return 0;
}
