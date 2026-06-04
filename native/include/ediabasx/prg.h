#ifndef EDXN_PRG_H
#define EDXN_PRG_H

#include "types.h"

#define EDXN_PRG_MAGIC          0x00475250  /* "PRG\0" LE */
#define EDXN_OBJECT_MAGIC       "@EDIABAS OBJECT"
#define EDXN_OBJECT_MAGIC_LEN   16
#define EDXN_OBJECT_DATA_START  0xA0
#define EDXN_OBJECT_VERSION_OFF 0x10

#define EDXN_MAX_JOB_NAME       64
#define EDXN_MAX_TABLE_NAME     64
#define EDXN_MAX_METADATA_LEN   256

typedef struct {
    uint32_t magic;
    uint8_t  version;          /* 0 = GRP, 1 = PRG */
    uint32_t string_table_off;
    uint32_t string_table_end;
    uint32_t job_table_off;
    uint32_t job_table_end;
    uint32_t code_off;
    uint32_t code_end;
    uint32_t name_table_off;
    uint32_t name_table_end;
    uint32_t data_off;
} edxn_prg_header_t;

typedef struct {
    char     name[EDXN_MAX_JOB_NAME];
    uint32_t code_offset;
    uint16_t arg_count;
    uint16_t result_count;
} edxn_prg_job_t;

typedef struct {
    char     name[EDXN_MAX_TABLE_NAME];
    uint32_t column_offset;
    uint16_t columns;
    uint16_t rows;
} edxn_prg_table_t;

typedef struct {
    char ecu[EDXN_MAX_METADATA_LEN];
    char origin[EDXN_MAX_METADATA_LEN];
    char revision[EDXN_MAX_METADATA_LEN];
    char author[EDXN_MAX_METADATA_LEN];
} edxn_prg_metadata_t;

typedef struct {
    edxn_prg_header_t   header;
    edxn_prg_metadata_t metadata;

    const uint8_t *raw;
    size_t         raw_len;

    uint8_t *decoded;          /* XOR-decoded buffer (owned, or NULL for legacy) */
    size_t   decoded_len;

    edxn_prg_job_t   *jobs;
    size_t            job_count;

    edxn_prg_table_t *tables;
    size_t            table_count;

    const uint8_t    *code;
    size_t            code_len;
} edxn_prg_t;

edxn_error_t edxn_prg_parse(edxn_prg_t *prg, const uint8_t *data, size_t len);
void         edxn_prg_free(edxn_prg_t *prg);

int          edxn_prg_find_job(const edxn_prg_t *prg, const char *name);

#endif
