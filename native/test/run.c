#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "ediabasx/prg.h"
#include "ediabasx/ediabas.h"
#include "ediabasx/serial.h"

static uint8_t *read_file(const char *path, size_t *out_len) {
    FILE *f = fopen(path, "rb");
    if (!f) { fprintf(stderr, "Cannot open %s\n", path); return NULL; }

    fseek(f, 0, SEEK_END);
    long len = ftell(f);
    fseek(f, 0, SEEK_SET);

    uint8_t *buf = (uint8_t *)malloc((size_t)len);
    if (!buf) { fclose(f); return NULL; }
    fread(buf, 1, (size_t)len, f);
    fclose(f);

    *out_len = (size_t)len;
    return buf;
}

static void print_prg_info(const edxn_prg_t *prg) {
    printf("Format:   %s\n", prg->decoded ? "EDIABAS OBJECT" : "Legacy binary");
    printf("Version:  %u\n", prg->header.version);

    if (prg->metadata.ecu[0])
        printf("ECU:      %s\n", prg->metadata.ecu);
    if (prg->metadata.origin[0])
        printf("Origin:   %s\n", prg->metadata.origin);
    if (prg->metadata.revision[0])
        printf("Revision: %s\n", prg->metadata.revision);
    if (prg->metadata.author[0])
        printf("Author:   %s\n", prg->metadata.author);

    printf("Jobs (%zu):\n", prg->job_count);
    for (size_t i = 0; i < prg->job_count; i++) {
        printf("  [%zu] %-32s offset=0x%X\n",
               i, prg->jobs[i].name, prg->jobs[i].code_offset);
    }

    printf("Tables (%zu):\n", prg->table_count);
    for (size_t i = 0; i < prg->table_count; i++) {
        printf("  [%zu] %-32s %ux%u\n",
               i, prg->tables[i].name,
               prg->tables[i].columns, prg->tables[i].rows);
    }
}

static void print_result_entry(const edxn_result_entry_t *e) {
    printf("  %-24s ", e->name);
    switch (e->type) {
    case EDXN_TYPE_INT:
    case EDXN_TYPE_LONG:
    case EDXN_TYPE_CHAR:
    case EDXN_TYPE_WORD:
    case EDXN_TYPE_DWORD:
    case EDXN_TYPE_BYTE:
        printf("= %lld\n", (long long)e->value.i);
        break;
    case EDXN_TYPE_FLOAT:
        printf("= %f\n", e->value.f);
        break;
    case EDXN_TYPE_STRING:
        printf("= \"%.*s\"\n", (int)e->value.bin.len, e->value.bin.data);
        break;
    case EDXN_TYPE_BINARY:
        printf("= [%zu bytes]", e->value.bin.len);
        if (e->value.bin.len > 0 && e->value.bin.len <= 32) {
            printf(" ");
            for (size_t j = 0; j < e->value.bin.len; j++)
                printf("%02X", e->value.bin.data[j]);
        }
        printf("\n");
        break;
    }
}

static void print_result_sets(const edxn_ediabas_t *eb) {
    size_t count = 0;
    const edxn_result_set_t *sets = edxn_ediabas_get_sets(eb, &count);
    if (count == 0) {
        printf("Results: (none)\n");
        return;
    }

    /* Set 0 is the system set (VARIANTE / OBJECT / JOBNAME / SAETZE +
       persistent metadata). Sets 1..N-1 are the job's data sets, in
       emission order. Matches C# `_resultSets` indexing. */
    printf("Result sets (%zu data, plus system set):\n", count - 1);
    printf("  System set:\n");
    for (size_t i = 0; i < sets[0].count; i++) {
        print_result_entry(&sets[0].entries[i]);
    }
    for (size_t s = 1; s < count; s++) {
        printf("  Data set %zu/%zu:\n", s, count - 1);
        for (size_t i = 0; i < sets[s].count; i++) {
            print_result_entry(&sets[s].entries[i]);
        }
    }
}

int main(int argc, char *argv[]) {
    const char *port = NULL;
    int i = 1;

    while (i < argc && argv[i][0] == '-') {
        if (strcmp(argv[i], "--port") == 0 && i + 1 < argc) {
            port = argv[++i];
            i++;
        } else {
            fprintf(stderr, "Unknown option: %s\n", argv[i]);
            return 1;
        }
    }

    if (i >= argc) {
        fprintf(stderr, "Usage: edxn_run [--port <device>] <file.prg> [job_name] [args]\n");
        return 1;
    }

    const char *prg_path = argv[i++];
    const char *job = (i < argc) ? argv[i++] : NULL;
    const char *args = (i < argc) ? argv[i++] : "";

    size_t len;
    uint8_t *data = read_file(prg_path, &len);
    if (!data) return 1;

    /* Parse once into a heap-allocated PRG. The wrapper takes ownership
       at load_sgbd time and frees both prg and data on free; pre-load
       we keep a local pointer for `print_prg_info`. */
    edxn_prg_t *prg = (edxn_prg_t *)calloc(1, sizeof(*prg));
    if (!prg) { free(data); return 1; }
    edxn_error_t err = edxn_prg_parse(prg, data, len);
    if (err != EDXN_OK) {
        fprintf(stderr, "Parse error: %d\n", err);
        free(prg);
        free(data);
        return 1;
    }

    print_prg_info(prg);

    if (job) {
        edxn_serial_t *serial = NULL;
        edxn_transport_t *transport = NULL;

        if (port) {
            serial = edxn_serial_create(port);
            if (!serial) {
                fprintf(stderr, "Failed to create serial transport for %s\n", port);
                edxn_prg_free(prg);
                free(prg);
                free(data);
                return 1;
            }
            transport = edxn_serial_transport(serial);
        }

        printf("\n--- Running job: %s(%s) ---\n", job, args);

        edxn_ediabas_t eb;
        err = edxn_ediabas_init(&eb);
        if (err != EDXN_OK) {
            fprintf(stderr, "Ediabas init error: %d\n", err);
            edxn_prg_free(prg);
            free(prg);
            free(data);
            if (serial) edxn_serial_destroy(serial);
            return 1;
        }

        if (transport) {
            edxn_ediabas_set_transport(&eb, transport);
        }

        /* Derive ECU directory from the prg_path so loaders can find
           sibling .prg / .grp / .tab files for variant resolution and
           tabsetex. */
        static char ecu_dir[1024];
        strncpy(ecu_dir, prg_path, sizeof(ecu_dir) - 1);
        ecu_dir[sizeof(ecu_dir) - 1] = '\0';
        char *slash = strrchr(ecu_dir, '/');
        if (slash) *slash = '\0'; else ecu_dir[0] = '.', ecu_dir[1] = '\0';

        edxn_ediabas_set_sgbd_loader(&eb, edxn_vm_posix_sgbd_loader, ecu_dir);
        edxn_ediabas_set_table_loader(&eb, edxn_vm_posix_table_loader, ecu_dir);

        /* Hand prg + data ownership to the wrapper. Both must NOT be
           freed locally from this point — the wrapper frees them on
           load_sgbd (next load) and edxn_ediabas_free. */
        err = edxn_ediabas_load_sgbd(&eb, prg, data, prg_path);
        if (err != EDXN_OK) {
            fprintf(stderr, "load_sgbd error: %d\n", err);
            edxn_ediabas_free(&eb);
            if (serial) edxn_serial_destroy(serial);
            return 1;
        }
        prg = NULL;   /* wrapper owns now */
        data = NULL;

        err = edxn_ediabas_exec(&eb, job, args);
        if (err != EDXN_OK)
            fprintf(stderr, "Exec error: %d\n", err);

        print_result_sets(&eb);

        edxn_ediabas_free(&eb);
        if (serial) edxn_serial_destroy(serial);
    } else {
        /* No job — just info. Wrapper not engaged; free locally. */
        edxn_prg_free(prg);
        free(prg);
        free(data);
    }

    return 0;
}
