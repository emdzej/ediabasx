#include "ediabasx/prg.h"
#include "ediabasx/utils.h"
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

#define OFFSET_TABLE_LIST 0x84
#define OFFSET_JOB_LIST   0x88
#define JOB_ENTRY_SIZE    0x44
#define TABLE_ENTRY_SIZE  0x50


static uint32_t xor_u32(const uint8_t *p) {
    uint8_t b0 = p[0] ^ EDXN_XOR_KEY;
    uint8_t b1 = p[1] ^ EDXN_XOR_KEY;
    uint8_t b2 = p[2] ^ EDXN_XOR_KEY;
    uint8_t b3 = p[3] ^ EDXN_XOR_KEY;
    return (uint32_t)b0 | ((uint32_t)b1 << 8)
         | ((uint32_t)b2 << 16) | ((uint32_t)b3 << 24);
}

static size_t xor_string(const uint8_t *buf, size_t buf_len, size_t offset,
                          char *dst, size_t dst_cap) {
    size_t i = 0;
    while (offset + i < buf_len && i < dst_cap - 1) {
        uint8_t b = (offset + i >= EDXN_OBJECT_DATA_START)
                    ? buf[offset + i] ^ EDXN_XOR_KEY
                    : buf[offset + i];
        if (b == 0) break;
        dst[i] = (char)b;
        i++;
    }
    dst[i] = '\0';
    return i;
}

static bool is_ediabas_object(const uint8_t *data, size_t len) {
    if (len < EDXN_OBJECT_DATA_START) return false;
    return memcmp(data, EDXN_OBJECT_MAGIC, EDXN_OBJECT_MAGIC_LEN - 1) == 0;
}

static bool is_legacy_prg(const uint8_t *data, size_t len) {
    if (len < 32) return false;
    return edxn_read_u32_le(data) == EDXN_PRG_MAGIC;
}

/* ── EDIABAS OBJECT format ─────────────────────────────────────────── */

static void parse_ediabas_metadata(edxn_prg_t *prg) {
    if (!prg->decoded || prg->decoded_len <= EDXN_OBJECT_DATA_START)
        return;

    const char *text = (const char *)(prg->decoded + EDXN_OBJECT_DATA_START);
    size_t text_len  = prg->decoded_len - EDXN_OBJECT_DATA_START;

    const char *end = text + text_len;
    const char *p = text;

    while (p < end) {
        const char *line_end = p;
        while (line_end < end && *line_end != '\n' && *line_end != '\r')
            line_end++;

        size_t line_len = (size_t)(line_end - p);
        const char *colon = memchr(p, ':', line_len);
        if (colon) {
            size_t key_len = (size_t)(colon - p);
            const char *val = colon + 1;
            size_t val_len = line_len - key_len - 1;
            while (val_len > 0 && (*val == ' ' || *val == '\t')) {
                val++;
                val_len--;
            }

            char *dst = NULL;
            if (key_len == 3 && memcmp(p, "ECU", 3) == 0)
                dst = prg->metadata.ecu;
            else if (key_len == 6 && memcmp(p, "ORIGIN", 6) == 0)
                dst = prg->metadata.origin;
            else if (key_len == 8 && memcmp(p, "REVISION", 8) == 0)
                dst = prg->metadata.revision;
            else if (key_len == 6 && memcmp(p, "AUTHOR", 6) == 0)
                dst = prg->metadata.author;

            if (dst && dst[0] == '\0') {
                size_t copy = val_len < EDXN_MAX_METADATA_LEN - 1
                            ? val_len : EDXN_MAX_METADATA_LEN - 1;
                memcpy(dst, val, copy);
                dst[copy] = '\0';
            }
        }

        p = line_end;
        while (p < end && (*p == '\n' || *p == '\r')) p++;
    }
}

static edxn_error_t parse_ediabas_jobs(edxn_prg_t *prg) {
    const uint8_t *buf = prg->raw;
    size_t len = prg->raw_len;

    if (len < OFFSET_JOB_LIST + 4) return EDXN_OK;

    uint32_t job_list_off = edxn_read_u32_le(buf + OFFSET_JOB_LIST);
    if (job_list_off == 0 || job_list_off + 4 > len) return EDXN_OK;

    /* Job count is NOT XOR-encoded */
    int32_t count = (int32_t)edxn_read_u32_le(buf + job_list_off);
    if (count <= 0 || count > 1000) return EDXN_OK;

    prg->jobs = (edxn_prg_job_t *)calloc((size_t)count, sizeof(edxn_prg_job_t));
    if (!prg->jobs) return EDXN_ERR_NOMEM;

    uint32_t entries_start = job_list_off + 4;
    for (int32_t i = 0; i < count; i++) {
        uint32_t entry_off = entries_start + (uint32_t)i * JOB_ENTRY_SIZE;
        if (entry_off + JOB_ENTRY_SIZE > len) break;

        edxn_prg_job_t *job = &prg->jobs[prg->job_count];
        xor_string(buf, len, entry_off, job->name, EDXN_MAX_JOB_NAME);
        job->code_offset = xor_u32(buf + entry_off + 0x40);
        prg->job_count++;
    }
    return EDXN_OK;
}

static edxn_error_t parse_ediabas_tables(edxn_prg_t *prg) {
    const uint8_t *buf = prg->raw;
    size_t len = prg->raw_len;

    if (len < OFFSET_TABLE_LIST + 4) return EDXN_OK;

    uint32_t tbl_list_off = edxn_read_u32_le(buf + OFFSET_TABLE_LIST);
    if (tbl_list_off == 0 || tbl_list_off + 4 > len) return EDXN_OK;

    /* Table count encoding is inconsistent — try raw first, then XOR */
    int32_t count = (int32_t)edxn_read_u32_le(buf + tbl_list_off);
    if (count <= 0 || count > 1000) {
        count = (int32_t)xor_u32(buf + tbl_list_off);
    }
    if (count <= 0 || count > 1000) return EDXN_OK;

    prg->tables = (edxn_prg_table_t *)calloc((size_t)count, sizeof(edxn_prg_table_t));
    if (!prg->tables) return EDXN_ERR_NOMEM;

    uint32_t entries_start = tbl_list_off + 4;
    for (int32_t i = 0; i < count; i++) {
        uint32_t entry_off = entries_start + (uint32_t)i * TABLE_ENTRY_SIZE;
        if (entry_off + TABLE_ENTRY_SIZE > len) break;

        edxn_prg_table_t *tbl = &prg->tables[prg->table_count];
        xor_string(buf, len, entry_off, tbl->name, EDXN_MAX_TABLE_NAME);
        tbl->column_offset = xor_u32(buf + entry_off + 0x40);
        tbl->columns       = (uint16_t)xor_u32(buf + entry_off + 0x48);
        tbl->rows          = (uint16_t)xor_u32(buf + entry_off + 0x4C);
        prg->table_count++;
    }
    return EDXN_OK;
}

static edxn_error_t parse_ediabas_object(edxn_prg_t *prg, const uint8_t *data, size_t len) {
    prg->header.magic = EDXN_PRG_MAGIC;
    prg->header.version = edxn_read_u32_le(data + EDXN_OBJECT_VERSION_OFF);
    prg->header.data_off = EDXN_OBJECT_DATA_START;

    /* XOR-decode data section */
    prg->decoded_len = len;
    prg->decoded = (uint8_t *)malloc(len);
    if (!prg->decoded) return EDXN_ERR_NOMEM;

    memcpy(prg->decoded, data, EDXN_OBJECT_DATA_START);
    for (size_t i = EDXN_OBJECT_DATA_START; i < len; i++)
        prg->decoded[i] = data[i] ^ EDXN_XOR_KEY;

    parse_ediabas_metadata(prg);

    edxn_error_t err = parse_ediabas_jobs(prg);
    if (err != EDXN_OK) return err;

    err = parse_ediabas_tables(prg);
    if (err != EDXN_OK) return err;

    /* Code section: jobs reference bytecode offsets into the decoded buffer.
       The "code" pointer spans decoded[0xA0..end] so job offsets are absolute. */
    prg->code     = prg->decoded;
    prg->code_len = prg->decoded_len;

    return EDXN_OK;
}

/* ── Legacy binary format ──────────────────────────────────────────── */

static edxn_error_t parse_legacy_prg(edxn_prg_t *prg, const uint8_t *data, size_t len) {
    prg->header.magic            = edxn_read_u32_le(data);
    prg->header.version          = edxn_read_u32_le(data + 4);
    prg->header.string_table_off = edxn_read_u32_le(data + 8);
    prg->header.string_table_end = prg->header.string_table_off + edxn_read_u32_le(data + 12);
    prg->header.job_table_off    = edxn_read_u32_le(data + 16);
    uint32_t job_count           = edxn_read_u32_le(data + 20);
    prg->header.job_table_end    = prg->header.job_table_off + job_count * 12;
    prg->header.code_off         = edxn_read_u32_le(data + 24);
    prg->header.code_end         = prg->header.code_off + edxn_read_u32_le(data + 28);

    /* Jobs */
    if (job_count > 0 && job_count <= 1000) {
        prg->jobs = (edxn_prg_job_t *)calloc(job_count, sizeof(edxn_prg_job_t));
        if (!prg->jobs) return EDXN_ERR_NOMEM;

        const uint8_t *string_table = data + prg->header.string_table_off;
        size_t st_len = prg->header.string_table_end - prg->header.string_table_off;

        for (uint32_t i = 0; i < job_count; i++) {
            uint32_t eo = prg->header.job_table_off + i * 12;
            if (eo + 12 > len) break;

            edxn_prg_job_t *job = &prg->jobs[prg->job_count];
            uint32_t name_off   = edxn_read_u32_le(data + eo);
            job->code_offset    = edxn_read_u32_le(data + eo + 4);
            job->arg_count      = edxn_read_u16_le(data + eo + 8);
            job->result_count   = edxn_read_u16_le(data + eo + 10);

            /* Read NUL-terminated name from string table */
            if (name_off < st_len) {
                size_t j = 0;
                while (name_off + j < st_len && string_table[name_off + j] != 0
                       && j < EDXN_MAX_JOB_NAME - 1) {
                    job->name[j] = (char)string_table[name_off + j];
                    j++;
                }
                job->name[j] = '\0';
            }
            prg->job_count++;
        }
    }

    /* Code section — direct pointer into raw buffer (no XOR for legacy) */
    if (prg->header.code_off < len) {
        size_t code_len = prg->header.code_end <= len
                        ? prg->header.code_end - prg->header.code_off
                        : len - prg->header.code_off;
        prg->code     = data + prg->header.code_off;
        prg->code_len = code_len;
    }

    return EDXN_OK;
}

/* ── Public API ────────────────────────────────────────────────────── */

edxn_error_t edxn_prg_parse(edxn_prg_t *prg, const uint8_t *data, size_t len) {
    memset(prg, 0, sizeof(*prg));
    prg->raw     = data;
    prg->raw_len = len;

    if (is_ediabas_object(data, len))
        return parse_ediabas_object(prg, data, len);

    if (is_legacy_prg(data, len))
        return parse_legacy_prg(prg, data, len);

    return EDXN_ERR_INVALID_PRG;
}

void edxn_prg_free(edxn_prg_t *prg) {
    free(prg->decoded);
    free(prg->jobs);
    free(prg->tables);
    memset(prg, 0, sizeof(*prg));
}

int edxn_prg_find_job(const edxn_prg_t *prg, const char *name) {
    for (size_t i = 0; i < prg->job_count; i++) {
        const char *jn = prg->jobs[i].name;
        /* Case-insensitive compare */
        size_t j = 0;
        while (jn[j] && name[j] && toupper((unsigned char)jn[j]) == toupper((unsigned char)name[j]))
            j++;
        if (jn[j] == '\0' && name[j] == '\0')
            return (int)i;
    }
    return -1;
}
