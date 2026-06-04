#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <assert.h>
#include "ediabasx/prg.h"

static void test_legacy_magic(void) {
    /* Minimal legacy PRG: magic + header fields, no actual jobs */
    uint8_t buf[64] = {0};
    buf[0] = 0x50; buf[1] = 0x52; buf[2] = 0x47; buf[3] = 0x00; /* PRG\0 */
    /* version = 1 */
    buf[4] = 1;
    /* string_table_off = 32, string_table_size = 0 */
    buf[8] = 32;
    /* job_table_off = 32, job_count = 0 */
    buf[16] = 32;
    /* code_off = 32, code_size = 0 */
    buf[24] = 32;

    edxn_prg_t prg;
    edxn_error_t err = edxn_prg_parse(&prg, buf, sizeof(buf));
    assert(err == EDXN_OK);
    assert(prg.header.magic == 0x00475250);
    assert(prg.header.version == 1);
    assert(prg.job_count == 0);
    edxn_prg_free(&prg);
    printf("  PASS: test_legacy_magic\n");
}

static void test_invalid_magic(void) {
    uint8_t buf[64] = {0};
    buf[0] = 0xFF;

    edxn_prg_t prg;
    edxn_error_t err = edxn_prg_parse(&prg, buf, sizeof(buf));
    assert(err == EDXN_ERR_INVALID_PRG);
    printf("  PASS: test_invalid_magic\n");
}

static void test_ediabas_object_magic(void) {
    uint8_t buf[256] = {0};
    memcpy(buf, "@EDIABAS OBJECT", 15);
    buf[15] = 0; /* NUL terminator */
    /* version = 1 at offset 0x10 */
    buf[0x10] = 1;

    edxn_prg_t prg;
    edxn_error_t err = edxn_prg_parse(&prg, buf, sizeof(buf));
    assert(err == EDXN_OK);
    assert(prg.header.version == 1);
    assert(prg.decoded != NULL);
    assert(prg.decoded_len == sizeof(buf));
    edxn_prg_free(&prg);
    printf("  PASS: test_ediabas_object_magic\n");
}

static void test_find_job(void) {
    edxn_prg_t prg;
    memset(&prg, 0, sizeof(prg));

    edxn_prg_job_t jobs[2];
    memset(jobs, 0, sizeof(jobs));
    strcpy(jobs[0].name, "IDENT");
    jobs[0].code_offset = 100;
    strcpy(jobs[1].name, "STATUS_LESEN");
    jobs[1].code_offset = 200;

    prg.jobs = jobs;
    prg.job_count = 2;

    assert(edxn_prg_find_job(&prg, "IDENT") == 0);
    assert(edxn_prg_find_job(&prg, "ident") == 0);
    assert(edxn_prg_find_job(&prg, "STATUS_LESEN") == 1);
    assert(edxn_prg_find_job(&prg, "NOPE") == -1);

    /* Don't free — jobs is stack-allocated */
    printf("  PASS: test_find_job\n");
}

int main(void) {
    printf("PRG parser tests:\n");
    test_legacy_magic();
    test_invalid_magic();
    test_ediabas_object_magic();
    test_find_job();
    printf("All PRG tests passed.\n");
    return 0;
}
