#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "ediabasx/prg.h"
#include "ediabasx/vm.h"
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

    edxn_prg_t prg;
    edxn_error_t err = edxn_prg_parse(&prg, data, len);
    if (err != EDXN_OK) {
        fprintf(stderr, "Parse error: %d\n", err);
        free(data);
        return 1;
    }

    print_prg_info(&prg);

    if (job) {
        edxn_serial_t *serial = NULL;
        edxn_transport_t *transport = NULL;

        if (port) {
            serial = edxn_serial_create(port);
            if (!serial) {
                fprintf(stderr, "Failed to create serial transport for %s\n", port);
                edxn_prg_free(&prg);
                free(data);
                return 1;
            }
            transport = edxn_serial_transport(serial);
        }

        printf("\n--- Running job: %s(%s) ---\n", job, args);

        edxn_vm_t vm;
        err = edxn_vm_init(&vm, &prg);
        if (err != EDXN_OK) {
            fprintf(stderr, "VM init error: %d\n", err);
        } else {
            if (transport)
                vm.transport = transport;

            /* Derive ECU directory from the prg_path so loaders can find
               sibling .prg / .grp / .tab files for variant resolution and
               tabsetex. */
            char ecu_dir[1024];
            strncpy(ecu_dir, prg_path, sizeof(ecu_dir) - 1);
            ecu_dir[sizeof(ecu_dir) - 1] = '\0';
            char *slash = strrchr(ecu_dir, '/');
            if (slash) *slash = '\0'; else ecu_dir[0] = '.', ecu_dir[1] = '\0';

            edxn_vm_set_sgbd_loader(&vm, edxn_vm_posix_sgbd_loader, ecu_dir);
            edxn_vm_set_table_loader(&vm, edxn_vm_posix_table_loader, ecu_dir);

            err = edxn_vm_exec(&vm, job, args);
            if (err != EDXN_OK)
                fprintf(stderr, "Exec error: %d\n", err);

            printf("Results (%zu entries):\n", vm.current_results.count);
            for (size_t r = 0; r < vm.current_results.count; r++) {
                edxn_result_entry_t *e = &vm.current_results.entries[r];
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
            edxn_vm_free(&vm);
        }

        if (serial)
            edxn_serial_destroy(serial);
    }

    edxn_prg_free(&prg);
    free(data);
    return 0;
}
